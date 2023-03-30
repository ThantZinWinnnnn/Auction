import React from 'react'
import DetailNavbar from '../components/DetailPageComponent/DetailNavbar'
import ProfileComponent from '../components/ProfileComponent/ProfileComponent';

type Props = {}

const ProfilePage:React.FC<Props> = (props) => {
  return (
    <>
        <ProfileComponent/>
    </>
  )
};

export default ProfilePage;