import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Spinner = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border: 0.8rem solid ${(props) => props.theme.colors.purple};
  border-radius: 2rem;
  border-left-color: ${(props) => props.theme.colors.background};
  animation: spin 1.8s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
