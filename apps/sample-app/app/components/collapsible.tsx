import { Collapsible } from "@evie-ui/components/collapsible";
import { Page } from "@evie-ui/components/page";
import { Text } from "@evie-ui/components/text";

export default function CollapsibleExample() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Collapsible</Page.Title>
      </Page.Header>

      <Page.Content>
        <Collapsible.Root>
          <Collapsible.Header>
            <Text>Collapsible title</Text>
            <Collapsible.Indicator>
              <Text>1</Text>
            </Collapsible.Indicator>
          </Collapsible.Header>

          <Collapsible.Content>
            <Text>Collapsible content</Text>
          </Collapsible.Content>
        </Collapsible.Root>

        <Collapsible.Root>
          <Collapsible.Header>
            <Text>Collapsible title</Text>
            <Collapsible.Indicator>
              <Text>1</Text>
            </Collapsible.Indicator>
          </Collapsible.Header>

          <Collapsible.Content>
            <Text>Collapsible content</Text>
          </Collapsible.Content>
        </Collapsible.Root>
      </Page.Content>
    </Page.Root>
  );
}
