import React from "react";
import ProfilePage from "../../Pages/ProfilePage";

import Wrapper from "./Wrapper";

type Props = {};

const ProfileComponent = (props: Props) => {
  return (
    <>
      <Wrapper>
        <ProfilePage/>
      </Wrapper>
    </>
  );
};

export default ProfileComponent;
