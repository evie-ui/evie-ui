import { Modal } from "@evie-ui/components/modal";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function StepperExample() {
  return (
    <Modal.Root>
      <Modal.Header>
        <Modal.TitleContainer flex={1}>
          <Modal.Title>Title</Modal.Title>
          <Modal.Subtitle>Subtitle</Modal.Subtitle>
        </Modal.TitleContainer>

        <Modal.CloseButton>
          <AntDesign name="close" size={24} />
        </Modal.CloseButton>
      </Modal.Header>

      <Modal.Content></Modal.Content>
    </Modal.Root>
  );
}
