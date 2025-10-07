// src/hooks/useUserTag.ts
import { generateTag } from "../utils/generateTags/generateTags";

const TAG_KEY = "userTag";

export const useUserTag = (): string => {
  // only read from localStorage once
  const stored = localStorage.getItem(TAG_KEY);
  if (stored) return stored;

  const newTag = generateTag();
  localStorage.setItem(TAG_KEY, newTag);
  return newTag;
};
