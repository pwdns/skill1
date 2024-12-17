import React from 'react';

function UserComponents() {
  // In a real app, fetch user details from the backend
  const user = {
    username: 'john_doe',
    description: 'I love sharing my skills on web development!'
  };

  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.description}</p>
    </div>
  );
}

export default UserComponents;
