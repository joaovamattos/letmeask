import toast, { Toaster } from "react-hot-toast";
import copyImg from "../../assets/images/copy.svg";

import { Container } from "./styles";

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    toast.success("Copiado com sucesso!");
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Container className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{code}</span>
      </Container>
    </>
  );
}
