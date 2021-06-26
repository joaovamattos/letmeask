import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 70rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 32rem) {
        flex-direction: column;

        > div,
        > button {
          margin-top: 1rem;
        }
      }

      @media (max-width: 24rem) {
        > div {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          > button {
            margin: 0;
          }
        }
      }

      > img {
        max-height: 2.75rem;
      }

      > div {
        display: flex;
        gap: 1rem;

        button {
          height: 2.5rem;
        }
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 2rem;

  .room-title {
    margin: 2rem 0 1.5rem;
    display: flex;
    align-items: center;

    @media (max-width: 21rem) {
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.black};
    }

    span {
      margin-left: 1rem;
      background: ${(props) => props.theme.colors.pink};
      border-radius: 999px;
      padding: 0.5rem 1rem;
      font-weight: 500;
      font-size: 0.875rem;
      white-space: nowrap;

      @media (max-width: 21rem) {
        margin-left: 0;
        margin-top: 0.5rem;
      }
    }
  }

  .question-list {
    margin-top: 2rem;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.foreground};
    box-shadow: 0 2px 0.75rem rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    @media (max-width: 36rem) {
      flex-direction: column;
      align-items: stretch;

      > button {
        margin-top: 1rem;
      }
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
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.gray};
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: ${(props) => props.theme.colors.purple};
        text-decoration: underline;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
