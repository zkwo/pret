import React from 'react';
import styles from '../SectionStyles.module.css'; 

const formInputStyle = {
    padding: '0.75rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--line-color)',
    borderRadius: '5px', color: 'var(--font-color)', outline: 'none', transition: 'border-color 0.3s ease'
};

const submitButtonStyle = {
    padding: '1rem', backgroundColor: 'var(--accent-color)', color: 'var(--bg-color)',
    border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'filter 0.3s ease',
    fontSize: '1rem'
};

const Contact = () => (
    <section id="contact" className={`${styles.section} ${styles.altBg}`} style={{textAlign: 'center'}}>
        <h2 style={{textAlign: 'center'}}>Hubungi Saya</h2>
        <p style={{color: 'var(--subtle-color)', marginBottom: '3rem'}}>
            Tertarik bekerja sama? Kirimkan pesan!
        </p>
        
        <form style={{maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input type="text" placeholder="Nama Anda" style={formInputStyle} />
            <input type="email" placeholder="Email Anda" style={formInputStyle} />
            <textarea placeholder="Pesan Anda..." rows="5" style={formInputStyle}></textarea>
            {/* Ganti action formulir ini dengan layanan seperti Formspree atau Netlify Forms */}
            <button type="submit" style={submitButtonStyle}>Kirim Pesan</button>
        </form>
    </section>
);

export default Contact;
