export type StoredUser = {
  id?: string;
  username?: string;
  [key: string]: unknown;
};

/**
 * Reads the signed-in user saved in localStorage. A missing or corrupt value
 * is treated as "no user" instead of throwing, so one bad stored value can't
 * break the effects and handlers that read it.
 */
export function getStoredUser(): StoredUser {
  try {
    const parsed = JSON.parse(localStorage.getItem("user") || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}
