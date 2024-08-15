import React from 'react';
import Image from "next/image";
import styles from './LandingPage1.module.css';

const LandingPage = () => {
  return (
    <div className='bg-black'>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Complex <span>Cad</span>
        </a>
        <div className={styles.menu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <nav className={styles.navbar}>
          <a href="#Home">Home</a>
        </nav>
      </header>

      <section className={styles.home} id="Home">
        <div className={styles.content}>
          <h1>
            Hi, it's <span>Hasham Rana</span>
          </h1>
          <h3 className={styles.textAnimation}>
            I specialize in <span></span>
          </h3>
          <p>
            With expertise in 2D Civil Map Making, Draft Creation, and the transformation of sketches or paper maps into precise digital drafts,
            I offer comprehensive AutoCAD services for architectural and civil engineering projects.
          </p>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/complex_cad/?igsh=M29jdmVkYWR5cHdy">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className={styles.flexBtn}>
            <a href="#" className={`${styles.btn} ${styles.hire}`}>
              Hire Me
            </a>
            <a href="#" className={styles.btn}>
              Contact
            </a>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Profile Image"
          className={styles.img}
          width={720}
          height={720}
          unoptimized={true} // Optional if needed
        />
      </section>
    </div>
  );
}

export default LandingPage;
