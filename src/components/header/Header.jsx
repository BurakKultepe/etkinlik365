import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/etkinlik365-logo-2-bgremove.png';
import './HeaderStyles.css';

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <div className="info-bar">
        {/* <Typography variant="body2" sx={{ marginRight: 1 }}>
          
        </Typography> */}
      </div>
      <nav>
        <img src={logo} alt="etkinlik365-logo" width={250} />
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
      </nav>
    </>
  );
}

export default Header;
