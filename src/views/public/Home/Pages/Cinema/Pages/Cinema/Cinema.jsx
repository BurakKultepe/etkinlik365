import React from 'react';
import { useState } from 'react';
import cinemaData from "../../../../../../../Data/CinemaData";
import "./CinemaStyle.css";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarın

function Cinema() {
  const [filteredData, setFilteredData] = useState(cinemaData);
  const [selectedType, setSelectedType] = useState('Tüm Türler');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
    filterData(selectedType, startDate, endDate);
  };

  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    setStartDate(startDate);
    filterData(selectedType, startDate, endDate);
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    setEndDate(endDate);
    filterData(selectedType, startDate, endDate);
  };

  const handleReset = () => {
    setSelectedType('Tüm Türler');
    setStartDate('');
    setEndDate('');
    filterData('Tüm Türler', '', '');
  };

  const filterData = (selectedType, startDate, endDate) => {
    let filteredData = cinemaData;

    if (selectedType !== 'Tüm Türler') {
      filteredData = filteredData.filter(movie => movie.type.includes(selectedType));
    }

    if (startDate && endDate) {
      const startDateBefore = new Date(new Date(startDate).getTime() - 86400000);
      const endDateAfter = new Date(new Date(endDate).getTime() + 86400000);

      filteredData = filteredData.filter(movie => {
        const movieDate = new Date(movie.date.split('.').reverse().join('.'));
        return movieDate >= startDateBefore && movieDate <= endDateAfter;
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
          <FormControl>
            <InputLabel id="type-label"></InputLabel>
            <Select
              labelId="type-label"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <MenuItem value="Tüm Türler">Tüm Türler</MenuItem>
              <MenuItem value="Dram">Dram</MenuItem>
              <MenuItem value="Korku">Korku</MenuItem>
              <MenuItem value="Bilimkurgu">Bilimkurgu</MenuItem>
              <MenuItem value="Komedi">Komedi</MenuItem>
              <MenuItem value="Biyografi">Biyografi</MenuItem>
              <MenuItem value="Romantik">Romantik</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="date"
            label=""
            value={startDate}
            onChange={handleStartDateChange}
          />

          <TextField
            type="date"
            label=""
            value={endDate}
            onChange={handleEndDateChange}
          />

          <Button variant="contained" onClick={handleReset}>Filtreyi Sıfırla</Button>
        </div>
        <div className='Movies-in-theaters'>
        {filteredData.map(movie => (
  <Link to={`/cinema/${movie.id}`} key={movie.id}>
    <div className="movie-item">
      <img src={movie.image} alt={movie.name} />
      <p>{movie.name}</p>
    </div>
  </Link>
))}
        </div>
      </div>
    </>
  );
}

export default Cinema;
