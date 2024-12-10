import { Page } from "@evie-ui/components/page";
import { Text } from "@evie-ui/components/text";
import { View } from "@evie-ui/components/view";

export default function Home() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Home</Page.Title>
      </Page.Header>

      <Page.Content gap={0} fontSize={72}>
        <View flexGrow={1} bgColor="brand-pink-light" p="lg">
          <Text color="brand-pink-dark">Text</Text>
        </View>

        <View flexGrow={1} bgColor="brand-pink-light" p="lg">
          <Text color="brand-purple-dark">Text</Text>
        </View>

        <View flexGrow={1} bgColor="brand-purple-light" p="lg">
          <Text color="brand-purple-dark">Text</Text>
        </View>

        <View flexGrow={1} bgColor="brand-purple-light" p="lg">
          <Text color="brand-pink-dark">Text</Text>
        </View>
      </Page.Content>
    </Page.Root>
  );
}
