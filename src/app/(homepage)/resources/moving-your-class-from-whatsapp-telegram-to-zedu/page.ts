import type { Metadata } from "next";
import { siteUrl } from "~/lib/env-urls";

export const metadata: Metadata = {
  title: "Move Your Class from WhatsApp/Telegram to Zedu",
  description:
    "Is your class group a mess of lost messages and buried files? Learn how to move from WhatsApp or Telegram to organised channels on Zedu, step by step.",
  alternates: {
    canonical: siteUrl(
      "/resources/moving-your-class-from-whatsapp-telegram-to-zedu"
    ),
  },
};

export { default } from "~/app/(homepage)/_components/resources/moving-from-whatsapp-telegram-guide";
