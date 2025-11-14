import React from 'react';
import { Link } from 'react-scroll'; 
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Import CSS Module

const StationItem = ({ to, icon: Icon, label }) => (
  <li className={styles.station}>
    <Link
      to={to} 
      spy={true} 
      smooth={true}
      duration={500}
      offset={-1} 
      className={`station-link-base ${styles.stationLink}`}
      // Class .is-active akan ditambahkan ke link ini saat aktif
      activeClass="is-active" 
    >
      {/* station-dot-base adalah kelas yang kita target di index.css */}
      <div className={`station-dot-base ${styles.stationDot}`}></div>
      <span className={styles.stationLabel}><Icon /> {label}</span>
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav className={`navbar ${styles.navbar}`}> {/* Tambahkan class global 'navbar' untuk responsif */}
      <div className={styles.logo}>
        <span className={styles.logoAccent}>METRO</span>FOLIO
      </div>

      <ul className={styles.metroMap}>
        <div className={styles.metroLine}></div>
        
        <StationItem to="home" icon={FaHome} label="Beranda" />
        <StationItem to="about" icon={FaUser} label="Tentang Saya" />
        <StationItem to="projects" icon={FaProjectDiagram} label="Proyek" />
        <StationItem to="contact" icon={FaEnvelope} label="Kontak" />
      </ul>

      <div className={styles.footer}>
        © 2025 Nama Anda
      </div>
    </nav>
  );
};

export default Navbar;
