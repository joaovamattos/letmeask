import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 54rem) {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  flex: 7;
  background: ${(props) => props.theme.colors.purple};
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  @media (max-width: 54rem) {
    flex: 2;
    max-width: 20rem;
    padding: 1rem;
    margin: 0 auto;
    align-items: center;
    text-align: center;

    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.black};
  }

  img {
    max-width: 20rem;

    @media (max-width: 54rem) {
      display: none;
    }
  }

  strong {
    font: 700 2.25rem "Poppins", sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;

    @media (max-width: 54rem) {
      font-size: 2rem;
      line-height: 2.25rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: #fff;

    @media (max-width: 54rem) {
      font-size: 1rem;
      line-height: 1rem;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 54rem) {
    padding-top: 2rem;
    align-items: flex-start;
  }

  background: ${(props) => props.theme.colors.background};

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: "Poppins", sans-serif;
    }
  }

  .create-room {
    margin-top: 4rem;
    height: 3.125rem;
    border-radius: 0.5rem;
    font-weight: 500;
    background: #ea4335;
    color: ${(props) => props.theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 0.875rem;
    color: #a8a8b3;

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 1rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 1rem;
    }
  }
`;

export const Form = styled.form`
  input {
    height: 3.125rem;
    border: 0.5rem;
    padding: 0 1rem;
    background: ${(props) => props.theme.colors.white};
    border: 1px solid #a8a8b3;
  }

  button {
    margin: 1rem 0;
  }

  button,
  input {
    width: 100%;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray};
    margin-top: 1rem;
  }

  a {
    color: ${(props) => props.theme.colors.purple};
  }
`;
