import React from 'react';
import Gravatar from 'react-gravatar';

const UserAvatar = ({user}) => (
  <>
    <Gravatar email={user.email} size={200} className="rounded-full text-center inline" />
    <div className="font-bold text-xl mb-2">{user.name}</div>
    <p className="text-grey-500 text-sm">{user.email}</p>
    <p className="text-grey-500 text-base">{user.postsCount}</p>
  </>

)

export default UserAvatar;