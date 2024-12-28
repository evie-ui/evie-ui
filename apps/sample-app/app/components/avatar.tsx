import { Avatar } from "@evie-ui/components/avatar";
import { Page } from "@evie-ui/components/page";

export default function AvatarExample() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Avatar</Page.Title>
      </Page.Header>

      <Page.Content>
        <Avatar.Root>
          <Avatar.Image />
          <Avatar.Fallback />
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Image />
          <Avatar.Fallback bgColor="brand-purple-dark" />
        </Avatar.Root>
      </Page.Content>
    </Page.Root>
  );
}
