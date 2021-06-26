import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  max-width: 24rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 1rem;
  text-align: center;
`;

export const Message = styled.p`
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.875rem;
  text-align: center;
`;
