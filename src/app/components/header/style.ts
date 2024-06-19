import css from "styled-jsx/css";

export const styles = css`
  header {
    display: flex;
    background: linear-gradient(#3097f7, #0364f4);
    height: 5.5dvh;
    padding: 0 15vw;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 0;
  }

  h1, h2, h3, h4 {
    color:white;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div #login {
    background-color: transparent;
    border-color: transparent;
    color: white;
    padding: 5px;
    margin: 0 20px 0 0
  }

  div #free-trial {
    background-color: #424547;
    color: white;
    padding: 5px;
  }

  @media (max-width: 1366px) {
    header {
      height: 7dvh;
    }
  }
`