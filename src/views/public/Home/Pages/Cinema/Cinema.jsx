import React, { useState } from 'react';
import cinemaData from "../../../../../Data/CinemaData";
import "./CinemaStyle.css";

function Cinema() {
  const [filteredData, setFilteredData] = useState(cinemaData);
  const [selectedType, setSelectedType] = useState('Tüm Türler'); // Başlangıçta tüm türler seçili
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Tür filtresi değiştiğinde
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
    filterData(selectedType, startDate, endDate);
  };

  // Başlangıç tarihi değiştiğinde
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    setStartDate(startDate);
    filterData(selectedType, startDate, endDate);
  };

  // Bitiş tarihi değiştiğinde
  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    setEndDate(endDate);
    filterData(selectedType, startDate, endDate);
  };

  // Filtrasyon işlemi
  const filterData = (selectedType, startDate, endDate) => {
    let filteredData = cinemaData;

    // Tür filtresi uygulanıyor
    if (selectedType !== 'Tüm Türler') {
      filteredData = filteredData.filter(movie => movie.type.includes(selectedType));
    }

    // Tarih aralığı filtresi uygulanıyor
    if (startDate && endDate) {
      filteredData = filteredData.filter(movie => {
        const movieDate = movie.date.split('.').reverse().join('.');
        const start = startDate.split('.').reverse().join('.');
        const end = endDate.split('.').reverse().join('.');
        return new Date(movieDate) >= new Date(start) && new Date(movieDate) <= new Date(end);
      });
    }

    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="cinema-container">
        <h2>Vizyondaki Filmler</h2>
        <hr />
        <div className='filter-container'>
          {/* Tür filtresi */}
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="Tüm Türler">Tüm Türler</option>
            <option value="Dram">Dram</option>
            <option value="Korku">Korku</option>
            <option value="Bilimkurgu">Bilimkurgu</option>
            <option value="Komedi">Komedi</option>
            <option value="Biyografi">Biyografi</option>
            <option value="Romantik">Romantik</option>
          </select>

          {/* Tarih aralığı giriş alanları */}
          <input type="date" value={startDate} onChange={handleStartDateChange} />
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
        <div className='Movies-in-theaters'>
          {filteredData.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={movie.image} alt={movie.name} />
              <p>{movie.name}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Cinema;