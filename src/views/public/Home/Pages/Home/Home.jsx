import React, { useState, useEffect } from 'react';
import activityData from '../../../../../Data/ActivityData';
import cinemaData from '../../../../../Data/CinemaData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./HomeStyle.css";
import { Link } from 'react-router-dom';

function Home() {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex((prevIndex) =>
        prevIndex === activityData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevActivity = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex === 0 ? activityData.length - 1 : prevIndex - 1
    );
  };

  const nextActivity = () => {
    setCurrentActivityIndex((prevIndex) =>
      prevIndex === activityData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="home-container">
        <div className="featured-activities-frame">
          <div className="featured-activity">
            <ArrowBackIosIcon className="icon arrow-left" onClick={prevActivity} fontSize='large'/>
            <img src={activityData[currentActivityIndex].image} alt={activityData[currentActivityIndex].name} />
            <div className="activity-info">
              <h3>{activityData[currentActivityIndex].name}</h3>
              <p>{activityData[currentActivityIndex].description}</p>
            </div>
            <ArrowForwardIosIcon className="icon arrow-right" onClick={nextActivity} fontSize='large' />
          </div>
        </div>
        <div className="music-container">
        
        </div>
        <div className="spor-container">

        </div>
        <div className="theatre-container">

        </div>
        <div className="cinema-home-container">
        <h2>Sinema</h2>
        <div className='cinema-fast-container'>
        {cinemaData.map((movie) => (
          <Link key={movie.id} to={`/cinema/${movie.id}`} className="movie-link">
            <div className="movie-card">
              <img
                src={movie.image}
                alt={movie.name}
                className="movie-image"
              />
              <h3 className="movie-name">{movie.name}</h3>
            </div>
          </Link>
        ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
