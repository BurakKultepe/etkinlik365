import React from 'react'
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./FooterStyle.css";


function Footer() {
  return (
    <> 
    <footer className='footer'>
    <div className="footer-section">
    <div className="quick-links">
    <Typography variant="h6" color="inherit" style={{ fontWeight: "bold", borderBottom: "1px solid white", paddingBottom: "5px", fontFamily: 'Arial, Helvetica, sans-serif' }}>
            SAYFALAR
    </Typography>
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      <li>
              <Link to="/" className="footer-link">
                Anasayfa
              </Link>
      </li>
    </ul>
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