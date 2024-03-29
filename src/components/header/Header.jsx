import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/etkinlik365-logo-3_result_page-0001-removebg-preview.png';
import './HeaderStyles.css';
import { Typography, TextField, Button, ThemeProvider, createTheme } from '@mui/material';
import { AuthContext } from '../../context/AuthContext'; // AuthContext'ı içe aktarıyoruz
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Giriş simgesini içe aktarıyoruz
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFootballBall, faMask, faFilm, faListAlt, faSearch, faGraduationCap, faMicrophone } from '@fortawesome/free-solid-svg-icons'; // FontAwesome'dan simgeleri içe aktarıyoruz

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // navigate işlevini kullanmak için useNavigate'i içe aktarıyoruz
  
  const { isLoggedIn, handleLogout } = useContext(AuthContext); // AuthContext'ten isLoggedIn ve handleLogout'u alıyoruz

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLoginClick = () => {
    // Giriş Yap butonuna tıklandığında /login rotasına yönlendir
    navigate('/login');
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif', // Varsayılan fontu Poppins olarak ayarlayın
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="info-bar">
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          info@etkinlik365.com
        </Typography> 
      </div>
      <nav>
      <img
  src={logo}
  alt="etkinlik365-logo"
  width={100}
  onClick={() => navigate('/')}
  style={{ cursor: 'pointer' }}
/>
        <div></div>
        <ul className="navbar">
          <li>
            <Link
              to="/music"
              className={activeLink === '/music' ? 'active-link' : ''}
              onClick={() => setActiveLink('/music')}
            >
              <FontAwesomeIcon icon={faMusic} className="navbar-icon" />
              <span className="icon-label"> Müzik</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sport"
              className={activeLink === '/sport' ? 'active-link' : ''}
              onClick={() => setActiveLink('/sport')}
            >
              <FontAwesomeIcon icon={faFootballBall} className="navbar-icon" />
              <span className="icon-label"> Spor</span>
            </Link>
          </li>
          <li>
            <Link
              to="/theatre"
              className={activeLink === '/theatre' ? 'active-link' : ''}
              onClick={() => setActiveLink('/theatre')}
            >
              <FontAwesomeIcon icon={faMask} className="navbar-icon" />
              <span className="icon-label"> Tiyatro</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cinema"
              className={activeLink === '/cinema' ? 'active-link' : ''}
              onClick={() => setActiveLink('/cinema')}
            >
              <FontAwesomeIcon icon={faFilm} className="navbar-icon" />
              <span className="icon-label"> Sinema</span>
            </Link>
          </li>
          <li className="dropdown">
            <Link
              to="/other"
              className={activeLink === '/other' ? 'active-link' : ''}
              onClick={() => setActiveLink('/other')}
            >
              <FontAwesomeIcon icon={faListAlt} className="navbar-icon" />
              <span className="icon-label"> Diğer</span>
              <div className="dropdown-content">
                
                <Link to="/standup">
                <FontAwesomeIcon icon={faMicrophone} className="navbar-icon" />
                <span className="icon-label"> Stand Up</span>
                  </Link>

                <Link to="/education">
                <FontAwesomeIcon icon={faGraduationCap} className="navbar-icon" />
                <span className="icon-label"> Eğitim</span>
                </Link>
              </div>
            </Link>
          </li>
        </ul>
        <div className="search-input">
        <TextField
  label="Etkinlik ara..."
  variant="outlined"
  size="small"
  sx={{
    '& .MuiOutlinedInput-root': {
      // Input alanının solunda 5px boşluk bırakır
      paddingLeft: '24px', // Font Awesome ikonunun genişliği kadar alanı sağlamak için
      '&.Mui-focused fieldset': {
        borderColor: '#99627A', // Çerçeve rengi
      },
      '&:hover fieldset': {
        borderColor: isFocused ? '#643843' : '#99627A', // Tıklama durumuna göre çerçeve rengi
      },
    },
    '& .MuiFormLabel-root': {
      color: isFocused ? '#643843' : '#99627A', // Yazı rengi
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#643843', // Tıklama durumunda input rengi
    },
  }}
  onFocus={handleFocus}
  onBlur={handleBlur}
  InputProps={{
    startAdornment: (
      <FontAwesomeIcon
        icon={faSearch}
        style={{ position: 'absolute', left: 0, margin: '8px', color: '#99627A' }}
      />
    ),
  }}
/>
        </div>
        <div className="user-login">
          <Button
            color="inherit"
            className="login-button"
            style={{
              backgroundColor: '#E7CBCB',
              color: '#99627A',
              padding: '8px 15px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            sx={{
              '&:hover': {
                backgroundColor: '#C88EA7',
                color: '#643843',
              },
            }}
            onClick={handleLoginClick} // Giriş Yap butonuna tıklandığında handleLoginClick işlevini çağır
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AccountCircleIcon style={{ color: '#55253a' }} />
              <Typography variant="h6" style={{ color: '#55253a', marginLeft: 5 }}>
                {isLoggedIn ? (
                  <span className="logout-link" onClick={handleLogout}>
                    Çıkış Yap
                  </span>
                ) : (
                  <span>Giriş Yap</span>
                )}
              </Typography>
            </div>
          </Button>
        </div>
      </nav>
    </ThemeProvider>
    </>
  );
}

export default Header;
