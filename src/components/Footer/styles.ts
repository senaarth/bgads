import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 900px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  padding: 4rem 0;

  img {
    width: 80%;
    max-width: 250px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: unset;
  }
`;

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 90%;
  max-width: 300px;

  h4 {
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.textHighlight};
  }

  button,
  a {
    background: transparent;
    border: 0;
    outline: none;

    font-size: 1rem;
    color: ${({ theme }) => theme.textLight};
    text-decoration: underline;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    img {
      width: 2.25rem;
      margin-right: 0.5rem;
    }

    transition: 0.4s;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  @media (max-width: 680px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem;

    button,
    a {
      max-width: 200px;
    }

    h4,
    button,
    a {
      margin-bottom: 1.5rem;
    }
  }
`;
