import { useHistory, useParams } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-darkmode.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { database } from "../../services/firebase";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import { NoQuestions } from "../../components/NoQuestions";
import { WarningModal } from "../../components/WarningModal";

// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";

import { Container, Main, ToggleThemeButton } from "./styles";
import { useState } from "react";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();
  const [activeQuestionId, setActiveQuestionId] = useState<
    string | undefined
  >();

  const [endRoomId, setEndRoomId] = useState<string | undefined>();

  const { title, questions } = useRoom(roomId);
  // const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    handleCloseEndRoomModal();
    history.push("/");
  }

  async function handleDeleteQuestion() {
    await database
      .ref(`rooms/${roomId}/questions/${activeQuestionId}`)
      .remove();

    handleCloseDeleteQuestionModal();
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  function handleCloseDeleteQuestionModal() {
    setActiveQuestionId(undefined);
  }

  function handleCloseEndRoomModal() {
    setEndRoomId(undefined);
  }

  return (
    <Container>
      <header>
        <div className="content">
          <div className="header-wrapper">
            {theme.title === "dark" ? (
              <img height="45px" src={logoDarkModeImg} alt="logo" />
            ) : (
              <img height="45px" src={logoImg} alt="logo" />
            )}

            <ToggleThemeButton type="button" onClick={() => toggleTheme()}>
              {theme.title === "dark" ? (
                <FiMoon size={16} color={theme.colors.black} />
              ) : (
                <FiSun size={16} color={theme.colors.black} />
              )}
            </ToggleThemeButton>
          </div>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={() => setEndRoomId(roomId)}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        {questions.length < 1 ? (
          <NoQuestions
            title="Nenhuma pergunta por aqui..."
            message="Envie o código desta sala para seus amigos e comece a responder perguntas!"
          />
        ) : (
          <div className="question-list">
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setActiveQuestionId(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            ))}
          </div>
        )}
      </Main>
      {activeQuestionId && (
        <WarningModal
          icon="delete"
          title="Excluir pergunta"
          description="Tem certeza que você deseja excluir esta pergunta?"
          handleAction={handleDeleteQuestion}
          activeId={activeQuestionId}
          handleRequestClose={handleCloseDeleteQuestionModal}
          actionName="excluir"
        />
      )}

      {endRoomId && (
        <WarningModal
          icon="danger"
          title="Encerrar sala"
          description="Tem certeza que você deseja encerrar esta sala?"
          handleAction={handleEndRoom}
          activeId={endRoomId}
          handleRequestClose={handleCloseEndRoomModal}
          actionName="encerrar"
        />
      )}
    </Container>
  );
}
