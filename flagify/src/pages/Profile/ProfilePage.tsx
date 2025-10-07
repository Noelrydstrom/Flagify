import type { FC } from "react";
import { useState } from "react";
import { Container, Avatar, Username, CopyButton, TagWrapper } from "./styles";
import sweden from "../../assets/flags/sweden.svg";
import { useSettings } from "../../hooks/useSettings";
import { useUserTag } from "../../hooks/useUserTag";

export const ProfilePage: FC = () => {
  const [settings] = useSettings();
  const tag = useUserTag();
  const [copied, setCopied] = useState(false);

  const usernameTag = `${settings.username} ${tag}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(usernameTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container>
      <Avatar src={sweden} alt="Flag" />
      <TagWrapper>
        <Username>{usernameTag}</Username>
        <CopyButton onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</CopyButton>
      </TagWrapper>
    </Container>
  );
};

export default ProfilePage;
