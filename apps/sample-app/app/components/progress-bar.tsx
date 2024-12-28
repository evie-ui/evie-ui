import { Page } from "@evie-ui/components/page";
import { ProgressBar } from "@evie-ui/components/progress-bar";

export default function Home() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Progress bar</Page.Title>
      </Page.Header>

      <Page.Content>
        <ProgressBar.Root indeterminate>
          <ProgressBar.Indicator />
        </ProgressBar.Root>

        <ProgressBar.Root progress={80}>
          <ProgressBar.Indicator />
        </ProgressBar.Root>

        <ProgressBar.Root indeterminate h={4}>
          <ProgressBar.Indicator />
        </ProgressBar.Root>

        <ProgressBar.Root progress={50} color="transparent">
          <ProgressBar.Indicator />
        </ProgressBar.Root>

        <ProgressBar.Root progress={30}>
          <ProgressBar.Indicator color="brand-purple-dark" />
        </ProgressBar.Root>
      </Page.Content>
    </Page.Root>
  );
}
