import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';

const ShareButton = ({ page, id }) => {
  const PAGE_URL = 'http://localhost:3000';
  const [showPopup, setShowPopup] = useState(false);

  const handleShare = () => {
    try {
      console.log(page);
      copy(`${PAGE_URL}/${page}/${id}`);
      setShowPopup(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleShare }
        data-testid="share-btn"
      >
        Compartilhar
      </button>

      { showPopup && (
        <div className="popup">
          <p>Link copied!</p>
          <input type="button" onClick={ () => setShowPopup(false) } value="Close" />
        </div>
      )}
    </div>
  );
};

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default ShareButton;
