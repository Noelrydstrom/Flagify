// src/utils/generateTag.ts
export type generateTagProps = {
    tag: string;
};

export const generateTag = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let tag = "#";
  for (let i = 0; i < 5; i++) {
    tag += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return tag;
};
