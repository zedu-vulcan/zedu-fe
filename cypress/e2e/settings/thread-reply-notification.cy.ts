import { buildNotificationPreferencePayload } from "../../../src/app/(client)/[org]/_components/notification-modal/notification-preference-payload";

describe("channel notification preference payload", () => {
  it("sends the selected thread reply preference", () => {
    expect(
      buildNotificationPreferencePayload({
        muteChannel: false,
        notificationLevel: "mentions",
        threadReplies: true,
      })
    ).to.deep.equal({
      muted: false,
      at_mentions: true,
      at_channel: false,
      thread_replies: true,
      device_type: "web",
    });
  });

  it("sends false when thread reply notifications are disabled", () => {
    expect(
      buildNotificationPreferencePayload({
        muteChannel: true,
        notificationLevel: "channels",
        threadReplies: false,
      })
    ).to.deep.equal({
      muted: true,
      at_mentions: false,
      at_channel: true,
      thread_replies: false,
      device_type: "web",
    });
  });
});
