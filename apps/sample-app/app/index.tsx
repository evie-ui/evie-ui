import { magicModal } from "@evie-ui/components/magic-modal";
import { Page } from "@evie-ui/components/page";
import { TextButton } from "@evie-ui/components/text-button";
import { Route, router } from "expo-router";
import Modal from "./components/modal";

const components = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Collapsible", path: "/components/collapsible" },
  { name: "Avatar", path: "/components/avatar" },
  { name: "Stepper", path: "/components/stepper" },
  { name: "Switch", path: "/components/switch" },
  { name: "Progress bar", path: "/components/progress-bar" },
  { name: "Progress circle", path: "/components/progress-circle" },
] satisfies Array<{ name: string; path: Route }>;

export default function Home() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Components</Page.Title>
      </Page.Header>

      <Page.Content>
        {components.map((component) => (
          <TextButton
            key={component.name}
            onPress={() => router.navigate(component.path)}
          >
            {component.name}
          </TextButton>
        ))}

        <TextButton onPress={() => magicModal.show(Modal)}>Modal</TextButton>
      </Page.Content>
    </Page.Root>
  );
}
