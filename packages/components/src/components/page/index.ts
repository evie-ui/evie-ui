import { PageBackground } from "./fragments/background";
import { PageContent } from "./fragments/content";
import { PageFooter } from "./fragments/footer";
import { PageHeader } from "./fragments/header";
import { PageList } from "./fragments/list";
import { PageRoot } from "./fragments/root";
import { PageSubtitle } from "./fragments/subtitle";
import { PageTitle } from "./fragments/title";

export const Page = {
  Root: PageRoot,
  Header: PageHeader,
  
  Title: PageTitle,
  Subtitle: PageSubtitle,
  Content: PageContent,
  Footer: PageFooter,

  List: PageList,
  Background: PageBackground,
};
