export type NotificationLevel = "all" | "mentions" | "channels";

type BuildNotificationPayloadInput = {
  muteChannel: boolean;
  notificationLevel: NotificationLevel;
  threadReplies: boolean;
};

export const buildNotificationPreferencePayload = ({
  muteChannel,
  notificationLevel,
  threadReplies,
}: BuildNotificationPayloadInput) => ({
  muted: muteChannel,
  at_mentions: notificationLevel === "all" || notificationLevel === "mentions",
  at_channel: notificationLevel === "all" || notificationLevel === "channels",
  thread_replies: threadReplies,
  device_type: "web" as const,
});
