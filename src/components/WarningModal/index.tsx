import Modal from "react-modal";

import dangerImg from "../../assets/images/danger.svg";
import deleteImg from "../../assets/images/delete-warning.svg";

import { modalStyles } from "../../styles/modalStyles";

import {
  Container,
  Title,
  Description,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from "./styles";

type WarningModalParams = {
  icon: "danger" | "delete";
  title: string;
  description: string;
  activeId: string | undefined;
  handleRequestClose: () => void;
  handleAction: () => void;
  actionName: string;
};

export function WarningModal({
  icon,
  title,
  description,
  activeId,
  handleRequestClose,
  handleAction,
  actionName,
}: WarningModalParams) {
  return (
    <Modal
      isOpen={!!activeId}
      onRequestClose={handleRequestClose}
      contentLabel="Deletar pergunta"
      style={modalStyles}
    >
      <Container>
        {icon === "danger" ? (
          <img src={dangerImg} alt="logo" />
        ) : (
          <img src={deleteImg} alt="logo" />
        )}

        <Title>{title}</Title>
        <Description>{description}</Description>

        <ButtonsWrapper>
          <CancelButton onClick={handleRequestClose}>Cancelar</CancelButton>
          <ConfirmButton
            onClick={handleAction}
          >{`Sim, ${actionName}`}</ConfirmButton>
        </ButtonsWrapper>
      </Container>
    </Modal>
  );
}
