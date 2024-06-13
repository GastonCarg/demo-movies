import css from "styled-jsx/css";

export const styles = css`
  header {
    display: flex;
    background: linear-gradient(#3097f7, #0364f4);
    height: 7dvh;
    padding: 0 15dvw;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 0;
  }

  h1 {
    color:white;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 180px;
  }

  div #login {
    background-color: transparent;
    border-color: transparent;
    color: white;
    padding: 5px;
  }

  div #free-trial {
    background-color: #424547;
    color: white;
    padding: 5px;
  }
`