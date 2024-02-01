import React from "react";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <div
      className="login-back"
      style={{
        backgroundImage:
          "url(" +
          "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/325e6bcc-7960-4b4e-8c80-8fecc45e50b2/KR-ko-20240115-trifectadaily-perspective_alpha_website_large.jpg" +
          ")",
      }}
    >
      {" "}
      <Container>
        <div className="login-info">
          <h1>영화, 시리즈 등을 무제한으로</h1>
          <h3>
            어디서나 자유롭게 시청하세요. <br />
            해지는 언제든 가능합니다.
          </h3>
          <div className="login-box">지금 시작하기</div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
