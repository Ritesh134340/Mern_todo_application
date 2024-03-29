import styled from "styled-components";

export const EditTodoWrapper = styled.div`
  margin-top: 100px;
  .checkWrapper-edit {
    select {
      margin-left: 8px;
      padding: 5px 15px;
      border-radius: 5px;
      font-size: 15px;
    }
  }
  .main-edit-div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 500px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 13px;
  }

  #toggle-button {
    background-color: ${({ status, show }) =>
      status ? "rgb(15,165,77)" : !show ? "rgb(196,196,196)" : "red"};
    color: white;
  }

  .editTitle {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.6px;
    font-weight: 600;
  }
  input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 8px;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
  }

  .status-heading {
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  .edit-button {
    display: block;
    background-color: rgb(58, 152, 185);
    color: white;
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 8px 15px;
    margin-left: 10px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .edit-span {
    font-weight: 400;
    padding-bottom: 15px;
  }
  #edit-button-show {
    background-color: ${({ show }) =>
      show ? "rgb(15,165,77)" : "rgb(66,163,218)"};
    color: white;
  }

  @media all and (max-width: 1024px) and (min-width: 279px) {
    .main-edit-div {
      width: 90%;
      margin: auto;
      margin-top: 35px;
    }
    input {
      height: 40px;
      width: 90%;
      font-size: 16px;
      padding-left: -10px;
      margin-top: 5px;
      margin-bottom: 10px;
      border-radius: 8px;
      outline: none;
      border: 1px solid gray;
    }

    .edit-div {
      margin: auto;
    }
    .edit-form {
      margin: auto;
    }
    .edit-button {
      margin-top: 18px;
      margin-left: 6px;
    }
    .checkWrapper-edit {
      margin-bottom: 30px;
      margin-top: 18px;
    }
  }
  .status-wrapper-div {
    margin-top: 15px;
    margin-bottom: 28px;
  }
  .status-wrapper-div > div {
    display: flex;
    margin-top: 9px;
    height: 20px;
    align-items: center;
  }
  .status-wrapper-div > div > input {
    height: 20px;
    width: 20px;
  }
  .status-wrapper-div > div > label {
    padding-left: 3px;
    padding-right: 6px;
  }
`;
