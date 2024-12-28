import { ModalBackButton } from "./fragments/back-button";
import { ModalCloseButton } from "./fragments/close-button";
import { ModalContent } from "./fragments/content";
import { ModalFooter } from "./fragments/footer";
import { ModalHeader } from "./fragments/header";
import { ModalRoot } from "./fragments/root";
import { ModalScrollView } from "./fragments/scrollview";
import { ModalSubtitle } from "./fragments/subtitle";
import { ModalTitle } from "./fragments/title";
import { ModalTitleContainer } from "./fragments/title-container";

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  ScrollView: ModalScrollView,
  BackButton: ModalBackButton,
  CloseButton: ModalCloseButton,
  TitleContainer: ModalTitleContainer,
};
