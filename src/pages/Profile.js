import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [savedEmail, setSavedEmail] = useState('');

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const email = userInfo ? userInfo.email : '';

    setSavedEmail(email);
  }, []);

  return (
    <div>
      <Header title="Profile" />
      <h5 data-testid="profile-email">{savedEmail}</h5>
      <Link to="/done-recipes" data-testid="profile-done-btn">Done Recipes</Link>
      <Link
        to="/favorite-recipes"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </Link>
      <Link
        to="/"
        data-testid="profile-logout-btn"
        onClick={ () => localStorage.clear() }
      >
        Logout
      </Link>
      <Footer />
    </div>
  );
};

export default Profile;
