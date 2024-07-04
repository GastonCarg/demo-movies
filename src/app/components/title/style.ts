import css from "styled-jsx/css";

export const styles = css`
  section {
    display: flex;
    align-items: center;
    padding: 1vh 15dvw;
    background-color: #414141;
    color: white;
    height: 4.5dvh;
  }

  h3 {
    color: white;
    font-weight: 500
  }

  @media (max-width: 1366px) {
    section {
      height: 6dvh;
      padding: 1vh 15vw;
    }
  }
`