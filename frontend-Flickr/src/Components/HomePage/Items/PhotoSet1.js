/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './Photo.css';
import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlinePlusSquare, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RiChat3Line } from 'react-icons/ri';

import moment from 'moment';
// import ViewPhoto from '../../ViewPhoto/ViewPhoto';
import ViewPhotoServices from '../../ViewPhoto/ViewPhotoServices';

const accessToken = localStorage.getItem('access token');

/* eslint-disable react/prop-types */
/**
 * PhotoSet for Layout 1
 * @param {array} pCard
 * @returns {*}
 */
const PhotoSet1 = ({ pCard }) => {
  const history = useHistory();
  // console.log(moment.utc(pCard.date_posted).local().startOf('seconds').fromNow());
  const date = moment.utc(pCard.date_posted).local().startOf('seconds').fromNow();
  const imgSrc = `https://fotone.me${pCard.media_file}`;
  // const imgSrc = pCard.img;
  const avatar = 'https://www.w3schools.com/w3images/avatar2.png';
  // const [viewGetPhotoData, setViewGetphotoData] = useState([]);
  /**
   * Handle ID of Photo to be able to View it
   * @param {event} e
   */
  const handleGetViewPhoto = (e) => {
    // ViewPhotoServices(pCard.id);
    // console.log(e);
    // ViewPhoto(imgSrc);
    localStorage.removeItem('ImgID');
    localStorage.setItem('ImgID', pCard.id);
    // console.log(localStorage.getItem('ImgID'));
    history.push('/photo');
  };

  const faved = pCard.is_faved;
  // const imgDown = 'pexels-eberhard-grossgasteiger-691668.jpg';

  const [PhotoProps, setPhotoProps] = useState({
    id: pCard.id,
    Token: accessToken,
  });
  const handleAddFaved = async () => {
    await ViewPhotoServices.addFav(PhotoProps);
  };
  const handleRemoveFaved = async () => {
    await ViewPhotoServices.removeFav(PhotoProps);
  };

  return (
    <div className="containerHome">
      <div className="imageHeaderHome">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h3>{pCard.owner.username}</h3>
        <h3>{date}</h3>
        <MdMoreHoriz style={{ color: 'rgb(137, 137, 137)', marginLeft: '7px' }} />
      </div>
      <div className="photoCardHolder">
        <Link
          to="/photos"
        >
          <img
            src={imgSrc}
            alt="Avatar"
            className="imageCompHome"
            onClick={handleGetViewPhoto}
          />
        </Link>
        <div className="imgOverlayHome">
          <div className="overlayLeftContHome">
            <Link className="photoNameLinkHome" to="/photos">{pCard.title}</Link>

          </div>
          <div className="overlayRightContHome">
            <span className="overlayFave" role="button">
              {faved
                ? <AiFillStar onClick={handleRemoveFaved} />
                : <AiOutlineStar onClick={handleAddFaved} />}
              <span>{pCard.count_favourites}</span>

            </span>
            <span className="overlayCommentHome" role="button">
              <RiChat3Line />
              <span>{pCard.count_comments}</span>

            </span>

            <span className="overlayAddToHome" role="button">
              <AiOutlinePlusSquare />
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhotoSet1;
