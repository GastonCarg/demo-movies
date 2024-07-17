import css from "styled-jsx/css";

export const styles = css`
  section {
    display: flex;
    align-items: center;
    padding: 1vh 15dvw;
    background-color: #414141;
    color: white;
    height: 5dvh;
    -webkit-box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.75);
  }

  h2 {
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