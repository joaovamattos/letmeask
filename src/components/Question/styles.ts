import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.foreground};
  border-radius: 0.5rem;
  box-shadow: 0 2px 0.75rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  &.highlighted {
    background: ${(props) => props.theme.colors.highlight};
    border: 1px solid ${(props) => props.theme.colors.purple};

    footer {
      .user-info span {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }

  &.answered {
    background: ${(props) => props.theme.colors.gray_light};
  }

  & + .question {
    margin-top: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.black};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    @media (max-width: 36rem) {
      align-items: flex-start;
      flex-direction: column-reverse;
    }

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: ${(props) => props.theme.colors.gray};
        font-size: 0.875rem;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }

    & div + div {
      @media (max-width: 36rem) {
        align-self: flex-end;
      }
    }
    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      gap: 0.5rem;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${(props) => props.theme.colors.gray};

        &.liked {
          color: ${(props) => props.theme.colors.purple};

          svg path {
            stroke: ${(props) => props.theme.colors.purple};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
