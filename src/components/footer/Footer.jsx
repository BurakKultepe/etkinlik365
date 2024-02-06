import React from 'react'
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./FooterStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <> 
    <footer className='footer'>
    <div className="footer-section">
    <div className="quick-links">
    <Typography variant="h6" color="inherit" style={{ fontWeight: "bold", borderBottom: "1px solid white", paddingBottom: "5px", fontFamily: 'Arial, Helvetica, sans-serif' }}>
            YARDIM
    </Typography>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
      <li>
              <Link to="/sss" className="footer-link">
                S.S.S.
              </Link>
      </li>
    </ul>
    </div>
    <div className="quick-links">
    <Typography variant="h6" color="inherit" style={{ fontWeight: "bold", borderBottom: "1px solid white", paddingBottom: "5px", fontFamily: 'Arial, Helvetica, sans-serif' }}>
            HAKKIMIZDA
    </Typography>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
      <li>
              <Link to="/about" className="footer-link">
                Biz Kimiz?
              </Link>
      </li>
      <li>
              <Link to="/about" className="footer-link">
                Politikamız
              </Link>
      </li>
    </ul>
    </div>
    <div className="quick-links">
    <Typography variant="h6" color="inherit" style={{ fontWeight: "bold", borderBottom: "1px solid white", paddingBottom: "5px", fontFamily: 'Arial, Helvetica, sans-serif' }}>
            İLETİŞİM
    </Typography>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
      <li>
              <Link to="/communication" className="footer-link">
                Bize Ulaşın
              </Link>
      </li>
    </ul>
    </div>
    <div className="quick-links">
    <Typography variant="h6" color="inherit" style={{ fontWeight: "bold", borderBottom: "1px solid white", paddingBottom: "5px", fontFamily: 'Optima , Helvetica, sans-serif' }}>
            BİZİ TAKİP EDİN
    </Typography>
    <div className="social-media">
    <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} size='2x' color='white'/>
      </a>
      <a href="https://twitter.com/">
        <FontAwesomeIcon icon={faTwitter} size='2x' color='white'/>
      </a>
      <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook} size='2x' color='white'/>
      </a>
      <a href="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube} size='2x' color='white'/>
      </a>
      <a href="https://www.linkedin.com/">
        <FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/>
      </a>
    </div>
    </div>
    </div>
    
    <div className="copyright-info">
        <Typography variant="body2" color="inherit" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          ©2024 Copyright Etkinlik365
        </Typography>
      </div>
    </footer>
    
    </>
  )
}

export default Footer