import { Page } from "@evie-ui/components/page";
import { Switch } from "@evie-ui/components/switch";
import { useState } from "react";

export default function SwitchExample() {
  const [value1, setValue1] = useState(false);

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Switch</Page.Title>
      </Page.Header>

      <Page.Content>
        <Switch.Root checked={value1} onCheckedChange={setValue1}>
          <Switch.Indicator />
        </Switch.Root>
      </Page.Content>
    </Page.Root>
  );
}
