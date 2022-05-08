import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondrayButton";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <DefaultLayout>
        <h2>TOPページです</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </DefaultLayout>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
