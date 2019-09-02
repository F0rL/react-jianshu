import styled from "styled-components";
export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f1f1f1;
`;
export const Main = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 30px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  p {
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 300px;
  font-size: 14px;
  margin: 10px auto;
  line-height: 30px;
  color: #444;
  padding: 2px;
  outline: none;
  border: 1px solid #ccc;
  background: rgb(232, 240, 254);
`;
export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: #3194d0;
  color: #fff;
  cursor: pointer;
  outline: none;
`;
