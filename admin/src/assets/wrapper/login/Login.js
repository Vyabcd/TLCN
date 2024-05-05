import styled from "styled-components";

const Wrapper = styled.div`
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #d9edff;
  }

  .login-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    max-width: 1000px;
    background-color: white;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;
  }

  .login-box form {
    flex: 1 0 100%;
    max-width: 480px;
    width: 100%;
    padding: 60px;
  }

  .login-box form p {
    margin-bottom: 30px;
  }

  .login-box form p.form-title {
    color: #333333;
    font-family: "Josefin Sans", sans-serif;
    font-size: 42px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0;
  }

  .login-box form .ant-form-item-label > label.ant-form-item-required::before {
    display: none;
  }

  .login-box form .ant-form-item-control-input-content {
    text-align: left;
  }

  .login-box form .ant-input-affix-wrapper {
    padding: 12px 15px;
  }

  .login-box form #login-form_username {
    height: 24px;
  }

  .login-box form .ant-btn {
    height: 42px;
    letter-spacing: 1px;
    border-radius: 6px;
  }

  .login-form-button {
    width: 100%;
  }

  .illustration-wrapper {
    display: flex;
    align-items: flex-end;
    max-width: 800px;
    min-height: 100%;
    background-color: #fffdf2;
  }

  .illustration-wrapper img {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 1023px) {
    .login-box {
      flex-direction: column;
      box-shadow: none;
    }
    .illustration-wrapper {
      max-width: 100%;
      min-height: auto;
    }
    .login-box form {
      max-width: 100%;
    }
  }
  .illustration-wrapper {
    background-color: rgb(255 255 255);
  }
  .illustration-wrapper img {
    width: 90%;
  }
`;

export default Wrapper;
