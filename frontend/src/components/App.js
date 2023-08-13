import {React, useState} from 'react';
import Users from './Users';
import User from './User';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [renderUser, setRenderUser] = useState(false);

  const showUser = (user) => {
    if (user){
      setRenderUser(true)
      setSelectedUser(user)
    }
  }

  const hideUser = () => {
    setRenderUser(false)
    setSelectedUser(null)
  }

  return (
    <div className="container mx-auto px-4">
      {
        renderUser ? 
        <User user={selectedUser} onClick={hideUser}/> :
        <Users onClick={showUser} />
      }
    </div>
  );
}

export default App;
