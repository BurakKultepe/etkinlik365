import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/etkinlik365-logo-3_result_page-0001-removebg-preview.png';
import './HeaderStyles.css';
import { Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../../context/AuthContext'; // AuthContext'ı içe aktarıyoruz
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Giriş simgesini içe aktarıyoruz

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

  return (
    <>
      <div className="info-bar">
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          info@etkinlik365.com
        </Typography> 
      </div>
      <nav>
        <img src={logo} alt="etkinlik365-logo" width={100} />
        <div></div>
        <ul className="navbar">
          <li>
            <Link
              to="/"
              className={activeLink === '/' ? 'active-link' : ''}
              onClick={() => setActiveLink('/')}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              to="/music"
              className={activeLink === '/music' ? 'active-link' : ''}
              onClick={() => setActiveLink('/music')}
            >
              Müzik
            </Link>
          </li>
          <li>
            <Link
              to="/sport"
              className={activeLink === '/sport' ? 'active-link' : ''}
              onClick={() => setActiveLink('/sport')}
            >
              Spor
            </Link>
          </li>
          <li>
            <Link
              to="/theatre"
              className={activeLink === '/theatre' ? 'active-link' : ''}
              onClick={() => setActiveLink('/theatre')}
            >
              Tiyatro
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
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
              <AccountCircleIcon style={{ color: '#99627A' }} />
              <Typography variant="h6" style={{ color: '#99627A', marginLeft: 5 }}>
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
    </>
  );
}

export default Header;
