import React from 'react';
import ProfileForm from '../components/ProfileForm';

const ProfilePage = () => {
  return (
    <div className="container [&_p]:my-6">
      <h1 className="t-title-seven mx-auto md:my-5 text-center uppercase">Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
