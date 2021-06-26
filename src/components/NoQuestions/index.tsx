import { Container, Title, Message } from "./styles";
import emptyQuestionsImg from "../../assets/images/empty-questions.svg";

type NoQuestionsProps = {
  title: string;
  message: string;
};

export function NoQuestions({ title, message }: NoQuestionsProps) {
  return (
    <Container>
      <img src={emptyQuestionsImg} alt="Balões de fala" />
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
}
