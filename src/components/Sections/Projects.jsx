import React from 'react';
import styles from '../SectionStyles.module.css'; 

const ProjectCard = ({ title, desc }) => (
    <div className={styles.projectCard}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p style={{color: 'var(--subtle-color)', marginBottom: '1rem'}}>{desc}</p>
        <a href="#" style={{fontSize: '0.9rem', fontWeight: 600}}>Lihat Detail →</a>
    </div>
);

const Projects = () => (
    <section id="projects" className={styles.section}>
        <h2>Proyek Pilihan</h2>
        <div className={styles.projectGrid}>
            <ProjectCard title="Aplikasi E-Commerce Keren" desc="Platform belanja modern dengan integrasi payment gateway Xendit/Midtrans." />
            <ProjectCard title="Dasbor Analitik Real-Time" desc="Visualisasi data performa server menggunakan Chart.js dan WebSockets." />
            <ProjectCard title="Sistem Reservasi Otomatis" desc="Aplikasi booking janji temu berbasis serverless (AWS Lambda)." />
        </div>
    </section>
);

export default Projects;
