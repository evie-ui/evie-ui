import { Page } from "@evie-ui/components/page";
import { ProgressCircle } from "@evie-ui/components/progress-circle";

export default function Home() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Progress circle</Page.Title>
      </Page.Header>

      <Page.Content>
        <ProgressCircle.Root indeterminate>
          <ProgressCircle.Indicator />
        </ProgressCircle.Root>

        <ProgressCircle.Root indeterminate thickness={2}>
          <ProgressCircle.Indicator />
        </ProgressCircle.Root>

        <ProgressCircle.Root indeterminate thickness={10}>
          <ProgressCircle.Indicator />
        </ProgressCircle.Root>

        <ProgressCircle.Root indeterminate>
          <ProgressCircle.Indicator color="brand-purple-dark" />
        </ProgressCircle.Root>
      </Page.Content>
    </Page.Root>
  );
}
