"use client";

import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/GaultMillau.svg"; 
import Facebook from "../../assets/socialIcon/facebook.svg";
import Insta from "../../assets/socialIcon/instagram.svg";
import Mail from "../../assets/socialIcon/Mail.svg";


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.yellowLine}></div>

      <div className={styles.container}>
        {/* Colonne 1 */}
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <img src={Logo} width={180} height={37} alt="Gault&Millau France" />
          </div>
          <div className={styles.links}>
            <a href="https://www.gaultmillau.org" target="_blank">A propos</a>
            <a href="/fr/pages/legal-notice-fr">Mentions légales</a>
            <a href="/fr/pages/cgu">CGU</a>
            <a href="/fr/pages/politique-de-confidentialite">Politique de confidentialité</a>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className={styles.column}>
          <h4>Notre sélection</h4>
          <a href="/fr/search/restaurant">Restaurants</a>
          <a href="/fr/search/hotel">Hôtels</a>
          <a href="/fr/search/artisan">Artisans</a>
          <a href="/fr/search/artisan">Jeunes Talent</a>
        </div>

        {/* Colonne 3 */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <p>
            37-39 rue Boissière<br />
            75016 Paris<br />
            France
          </p>
          <p>Appeler : 01 41 40 99 80</p>
          <a href="#contactModal">Contactez-nous</a>
        </div>

        {/* Colonne 4 */}
        <div className={styles.column}>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/gaultmillauFR" target="_blank"><img src={Facebook} alt="logo Facebook"/></a>
            <a href="https://www.instagram.com/gaultetmillaufr" target="_blank"><img src={Insta} alt="logo Instagram"/></a>
            <a href="https://www.linkedin.com/company/gault&millau/mycompany/?viewAsMember=true" target="_blank"><img src={Mail} alt="logo Mail"/></a>
          </div>
          <p>
            <a href="/fr/newsletterSubscription">Inscrivez-vous à notre newsletter</a>
          </p>
          <a href="/fr/newsletters">Toutes les newsletters</a>
          <p className={styles.copy}>
            Gault&Millau © 2025<br />Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
