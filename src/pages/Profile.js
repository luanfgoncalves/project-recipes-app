import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => (
  <div>
    <Header title="Profile" />
    <h5 data-testid="profile-email">Email</h5>
    <Link to="/done-recipes" data-testid="profile-done-btn">Done Recipes</Link>
    <Link
      to="/favorite-recipes"
      data-testid="profile-favorite-btn"
    >
      Favorite Recipes
    </Link>
    <Link to="/" data-testid="profile-logout-btn">Logout</Link>
    <Footer />
  </div>
);

export default Profile;
