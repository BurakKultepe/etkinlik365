import React from 'react';
import cinemaData from "../../../../../Data/CinemaData";
import "./CinemaStyle.css"

function Cinema() {
  return (
    <>
      <div className="cinema-container">
        <h2>Vizyondaki Filmler</h2>
        <hr />
        <div className='Movies-in-theaters'>
          {cinemaData.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={movie.image} alt={movie.name} />
              <p>{movie.name}</p>
            </div>
          ))}
        </div>
        <div className='filter-container'>
          {/* Filtreleme bileşenleri buraya eklenebilir */}
        </div>
      </div>
    </>
  );
}

export default Cinema;
