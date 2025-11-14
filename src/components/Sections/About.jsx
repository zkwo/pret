import React from 'react';
import styles from '../SectionStyles.module.css'; 
import { FaReact, FaNodeJs, FaFigma, FaGithub } from 'react-icons/fa';

const SkillTag = ({ icon: Icon, label }) => (
    <div className={styles.skillTag}>
        <Icon style={{color: 'var(--accent-color)'}}/> {label}
    </div>
);

const About = () => (
  <section id="about" className={`${styles.section} ${styles.altBg}`}>
    <h2>Tentang Saya</h2>
    <p style={{lineHeight: 1.7, color: 'var(--subtle-color)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px'}}>
      Selama [X] tahun berkarir, saya fokus pada *user experience* dan performa. Saya percaya 
      bahwa kode yang baik harus didukung oleh desain yang baik. Saya fasih dalam [sebutkan framework favorit].
    </p>

    <h3 style={{marginBottom: '1rem'}}>Skill Utama</h3>
    <div className={styles.skillContainer}>
      <SkillTag icon={FaReact} label="React/Vite" />
      <SkillTag icon={FaNodeJs} label="Node.js & Express" />
      <SkillTag icon={FaFigma} label="Figma Design" />
      <SkillTag icon={FaGithub} label="Git & CI/CD" />
    </div>
  </section>
);

export default About;
