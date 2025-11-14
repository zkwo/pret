import React from 'react';
import styles from '../SectionStyles.module.css'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <section id="home" className={styles.section} style={{textAlign: 'center'}}>
    <h1 className={styles.title}>
      Halo, saya <span className={styles.nameAccent}>Nama Anda</span>
    </h1>
    <h3 className={styles.subtitle}>
      Frontend Developer & Digital Architect
    </h3>
    <p style={{maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, color: 'var(--font-color)'}}>
      Saya mengubah ide-ide kompleks menjadi antarmuka pengguna yang elegan dan interaktif 
      menggunakan React dan teknologi modern lainnya.
    </p>
    <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '2rem'}}>
        <a href="#" target="_blank"><FaGithub /></a>
        <a href="#" target="_blank"><FaLinkedin /></a>
    </div>
  </section>
);

export default Home;
