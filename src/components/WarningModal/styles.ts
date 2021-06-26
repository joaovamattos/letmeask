import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  margin-top: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`;

export const Description = styled.p`
  margin-top: 0.75rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;

export const ButtonsWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 24rem) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

export const CancelButton = styled.button`
  border: 0;
  height: 3.125rem;
  min-width: 8rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.gray_light};
  background: ${(props) => props.theme.colors.gray};

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ConfirmButton = styled.button`
  border: 0;
  height: 3.125rem;
  min-width: 8rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.danger};
  color: #fff;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
