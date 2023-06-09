import StyledTextArea from "./TextArea.styled";
import { InputProps } from "./TextArea.types";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";

const TextArea = ({ variant }: InputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkArea = () => {
    setIsChecked(!isChecked);
  };
  const [capsLockFlag, setCapsLockFlag] = useState(false);
  const checkCapsLock = (e: any) => {
    const capsLock = e.getModifierState("CapsLock");
    setCapsLockFlag(capsLock);
  };

  // TextArea에 적은 value값
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        {/* {variant == "login" ? (
          <i className="fi fi-sr-envelope" style={{ zIndex: 1 }}></i>
        ) : null} */}
        {/* <StyledTextArea /> */}
        {variant === "default" ? (
          <StyledTextArea
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            onClick={checkArea}
          ></StyledTextArea>
        ) : null}

        {/* 문자 입력 */}
        {variant === "email" ? (
          <StyledTextArea
            variant={variant}
            placeholder={variant}
            // placeholder="아이디(이메일)"
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            onClick={checkArea}
          />
        ) : null}

        {/* 비밀번호 입력시 */}
        {variant === "password" ? (
          <div>
            <StyledTextArea
              type="password"
              variant={variant}
              placeholder={variant}
              // placeholder="비밀번호"
              autoComplete="current-password"
              onKeyDown={(e) => checkCapsLock(e)}
              onChange={(e) => {
                setInputText(e.target.value), console.log(inputText);
              }}
              capsLockFlag={capsLockFlag}
            />
            {capsLockFlag == true ? (
              <span
                style={{
                  width: "80px",
                  padding: "5px",
                  fontSize: "8px",
                  fontWeight: "bold",
                  color: "RED",
                  verticalAlign: "middle",
                  borderRadius: "0.5rem",
                }}
              >
                {capsLockFlag ? "Caps Lock On" : "Caps Lock Off"}
              </span>
            ) : null}
          </div>
        ) : null}

        {/* 이름 입력 */}
        {variant === "name" ? (
          <StyledTextArea
            variant={variant}
            // placeholder="이름"
            placeholder={variant}
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            onClick={checkArea}
          />
        ) : null}

        {/* 생년월일 입력 */}
        {variant === "birth" ? (
          <StyledTextArea
            variant={variant}
            // placeholder="생년월일"
            placeholder={variant}
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            onClick={checkArea}
          />
        ) : null}

        {/* 보관함 내 문서이름 변경시 */}
        {variant === "edit" ? (
          <StyledTextArea
            variant={variant}
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
            placeholder="기존 파일명"
          ></StyledTextArea>
        ) : null}

        {/* 보관함 내 문서이름 변경시 */}
        {variant === "search" ? (
          <StyledTextArea
            variant={variant}
            placeholder="Search"
            onChange={(e) => {
              setInputText(e.target.value), console.log(inputText);
            }}
          ></StyledTextArea>
        ) : null}
      </div>
    </>
  );
};

export default TextArea;
