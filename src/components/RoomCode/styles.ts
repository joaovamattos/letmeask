import styled from "styled-components";

export const Container = styled.button`
  margin-left: 1rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.purple};
  cursor: pointer;

  display: flex;

  div {
    background: ${(props) => props.theme.colors.purple};
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 8rem;
    font-size: 0.875rem;
    font-weight: 500;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
