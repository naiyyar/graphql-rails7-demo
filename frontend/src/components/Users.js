import {React, useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import UserAvatar from './UserAvatar';


const GET_USERS = gql`
   {
    users {
      id
      name
      email
      postsCount
    }
  }
`;

function Users(props) {
  const [users, setUsers] = useState([]);
  const {loading, error, data} = useQuery(GET_USERS);

  useEffect(() => {
    if (data) setUsers(data.users)
  }, [data])
  
  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return(
    <div className='flex flex-wrap items-center pb-16'>
      {
        users.map(user => (
          <div key={user.id} className="lg:w-1/3 w-full p-4 text-center inline" onClick={() => props.onClick(user)} >
            <UserAvatar user={user} />
          </div>
        ))
      }
    </div>
  )
}

export default Users;