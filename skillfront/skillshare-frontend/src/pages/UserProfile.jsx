import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  // Replace with actual user ID or get it from context/authentication
  const userId = '12345';

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:8080/api/users/${userId}`);
        setUser(userResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch user's posts
    const fetchUserPosts = async () => {
      try {
        const postsResponse = await axios.get(`http://localhost:8080/api/users/${userId}/posts`);
        setUserPosts(postsResponse.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  return (
    <div className="user-profile">
      <div className="profile-info">
        <img src={user.user_pic || '/default-profile.png'} alt={`${user.username}'s profile`} />
        <h2>{user.username}</h2>
        <p>{user.user_description}</p>
        <p>Email: {user.email}</p>
      </div>

      <div className="user-posts">
        <h3>My Blog Posts</h3>
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <div key={post.post_id} className="user-post">
              <h4>{post.title}</h4>
              <p>{post.skill_description}</p>
            </div>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
