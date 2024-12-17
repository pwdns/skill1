import React from 'react';
import BlogList from '../components/BlogList';
import './Homepage.css';

const Homepage = ({ blogs }) => {
    return (
        <div className="homepage">
            <div className="welcome-section">
                <h2>Welcome to SkillShare</h2>
                <p>Explore blogs from users sharing their skills.</p>
            </div>
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Homepage;
