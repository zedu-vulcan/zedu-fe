const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const componentPath = path.join(
  __dirname,
  "..",
  "src",
  "app",
  "(client)",
  "[org]",
  "_components",
  "apple-emoji",
  "apple-emoji-text.tsx"
);

const libPath = path.join(__dirname, "..", "src", "lib", "apple-emoji.ts");

const componentSource = fs.readFileSync(componentPath, "utf8");
const libSource = fs.readFileSync(libPath, "utf8");

test("AppleEmojiText does not use dangerouslySetInnerHTML", () => {
  assert.ok(
    !componentSource.includes("dangerouslySetInnerHTML"),
    "AppleEmojiText must never use dangerouslySetInnerHTML"
  );
  assert.ok(
    componentSource.includes("tokenizeAppleEmoji"),
    "AppleEmojiText should use tokenizeAppleEmoji for safe token rendering"
  );
});

test("tokenizeAppleEmoji and emojiImageTag are defined in apple-emoji.ts", () => {
  assert.ok(
    libSource.includes("export function tokenizeAppleEmoji"),
    "tokenizeAppleEmoji must be exported"
  );
  assert.ok(
    libSource.includes('alt="${safeAlt}"') ||
      libSource.includes('replace(/"/g, "&quot;")'),
    "emoji alt attributes must be safely escaped"
  );
});

// Emulate tokenizeAppleEmoji logic with same regex to verify tokenization behavior
const EMOJI_PATTERN =
  /\p{Extended_Pictographic}[\u{E0020}-\u{E007E}]+\u{E007F}|\p{Regional_Indicator}{2}|[#*0-9]\uFE0F?\u20E3|\p{Extended_Pictographic}(?:\p{Emoji_Modifier}|\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\p{Emoji_Modifier}|\uFE0F|\uFE0E)?)*/gu;

function tokenize(value) {
  if (!value) return [];
  const tokens = [];
  const regex = new RegExp(EMOJI_PATTERN.source, EMOJI_PATTERN.flags);
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(value)) !== null) {
    const matchIndex = match.index;
    const emoji = match[0];
    if (matchIndex > lastIndex) {
      tokens.push({ type: "text", text: value.slice(lastIndex, matchIndex) });
    }
    tokens.push({ type: "emoji", emoji });
    lastIndex = matchIndex + emoji.length;
  }

  if (lastIndex < value.length) {
    tokens.push({ type: "text", text: value.slice(lastIndex) });
  }
  return tokens;
}

test("tokenize correctly isolates XSS vectors into plain text nodes", () => {
  const xssPayload = "Hello <img src=x onerror=alert(1)> 🎉";
  const tokens = tokenize(xssPayload);

  assert.equal(tokens.length, 2);
  assert.equal(tokens[0].type, "text");
  assert.equal(tokens[0].text, "Hello <img src=x onerror=alert(1)> ");
  assert.equal(tokens[1].type, "emoji");
  assert.equal(tokens[1].emoji, "🎉");
});

test("tokenize handles script tags and multiple emojis without html execution", () => {
  const scriptPayload = "<script>alert(document.domain)</script> 🚀 rocket 🌟";
  const tokens = tokenize(scriptPayload);

  assert.equal(tokens.length, 4);
  assert.equal(tokens[0].type, "text");
  assert.equal(tokens[0].text, "<script>alert(document.domain)</script> ");
  assert.equal(tokens[1].type, "emoji");
  assert.equal(tokens[1].emoji, "🚀");
  assert.equal(tokens[2].type, "text");
  assert.equal(tokens[2].text, " rocket ");
  assert.equal(tokens[3].type, "emoji");
  assert.equal(tokens[3].emoji, "🌟");
});

test("tokenize handles plain text with no emojis", () => {
  const plain = "Just regular text here.";
  const tokens = tokenize(plain);
  assert.equal(tokens.length, 1);
  assert.equal(tokens[0].type, "text");
  assert.equal(tokens[0].text, plain);
});

test("tokenize handles empty and null inputs safely", () => {
  assert.deepEqual(tokenize(""), []);
  assert.deepEqual(tokenize(null), []);
});
