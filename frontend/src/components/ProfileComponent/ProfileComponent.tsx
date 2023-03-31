import React from "react";
import UserPage from "./ProfilePages/UserPage";

import Wrapper from "./Wrapper";

type Props = {};

const ProfileComponent = (props: Props) => {
  return (
    <>
      <Wrapper>
          <UserPage/>
      </Wrapper>
    </>
  );
};

export default ProfileComponent;
