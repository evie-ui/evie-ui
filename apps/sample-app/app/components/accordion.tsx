import { Accordion } from "@evie-ui/components/accordion";
import { Page } from "@evie-ui/components/page";
import { Section } from "@evie-ui/components/section";
import { Separator } from "@evie-ui/components/separator";
import { Text } from "@evie-ui/components/text";
import { useState } from "react";

export default function AccordionExample() {
  const [value1, setValue1] = useState("item-1");
  const [value2, setValue2] = useState(["item-1"]);
  const [value3, setValue3] = useState<string | undefined>("item-1");
  const [value4, setValue4] = useState(["item-1"]);

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Accordion</Page.Title>
      </Page.Header>

      <Page.Content gap="3xl">
        <Section.Root>
          <Section.Header>
            <Section.Title>Single</Section.Title>
          </Section.Header>

          <Section.Content>
            <Accordion.Root
              type="single"
              value={value1}
              onValueChange={setValue1}
            >
              <Accordion.Item value="item-1">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>Multiple</Section.Title>
          </Section.Header>

          <Section.Content>
            <Accordion.Root
              type="multiple"
              value={value2}
              onValueChange={setValue2}
            >
              <Accordion.Item value="item-1">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>Single + collapsible</Section.Title>
          </Section.Header>

          <Section.Content>
            <Accordion.Root
              type="single"
              collapsible
              value={value3}
              onValueChange={setValue3}
            >
              <Accordion.Item value="item-1">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>Multiple + collapsible</Section.Title>
          </Section.Header>

          <Section.Content>
            <Accordion.Root
              type="multiple"
              collapsible
              value={value4}
              onValueChange={setValue4}
            >
              <Accordion.Item value="item-1">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Trigger>
                  <Text>Is it accessible?</Text>

                  <Accordion.Indicator>
                    <Text>1</Text>
                  </Accordion.Indicator>
                </Accordion.Trigger>

                <Accordion.Content>
                  <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Section.Content>
        </Section.Root>
      </Page.Content>
    </Page.Root>
  );
}
