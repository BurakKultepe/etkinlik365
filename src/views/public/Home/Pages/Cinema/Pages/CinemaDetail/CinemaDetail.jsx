import React from 'react';
import { useParams } from 'react-router-dom'; // useParams hook'unu içe aktarın
import cinemaData from "../../../../../../../Data/CinemaData"; // Film verilerini içe aktarın
import { Button } from '@mui/material';

function CinemaDetail() {
  const { id } = useParams(); // URL'deki id parametresini alın
  const movie = cinemaData.find(movie => movie.id === parseInt(id)); // id'si eşleşen filmi bulun

  // Eğer film bulunamazsa veya id geçerli değilse, kullanıcıyı uygun bir sayfaya yönlendirin
  if (!movie) {
    return <div>Sayfa bulunamadı.</div>; // veya 404 sayfasına yönlendirin
  }

  return (<>
  
    <div className="cinema-container">
    <h2>{movie.name}</h2>
    <div className="cinema-img">
    <img src={movie.image} alt={movie.name} width={350} />
    </div>
      <p>Tür: {movie.type}</p>
      <p>Yönetmen: {movie.director}</p>
      <p>Oyuncular: {movie.starActor}</p>
      <p>
      Fragman: <Button variant="contained" component="a" href={movie.trailer}>İzle</Button>
    </p>
      <p>Süre: {movie.duration}</p>
      <p>Vizyon Tarihi: {movie.date}</p>
    </div>


    
    </>
  );
}

export default CinemaDetail;
