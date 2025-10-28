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
          <a href="/Restaurant">Restaurants</a>
          <a href="/Hotels">Hôtels</a>
          <a href="/Artisans">Artisans</a>
          <a href="/Talent">Jeunes Talent</a>
        </div>

        {/* Colonne 3 */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <p> 81 BD MOULAY HASSAN I, <br/>
            6ÈME ÉTAGE,<br />
            CASABLANCA, MAROC<br />
          </p>
          <p>Appeler : (+212)6.64.08.21.88</p>
          <a href="mailto:sberdah@gaultmillau.ma">Contactez-nous</a>
        </div>

        {/* Colonne 4 */}
        <div className={styles.column}>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/gaultmillauFR" target="_blank"><img src={Facebook} alt="logo Facebook"/></a>
            <a href="https://www.instagram.com/gaultetmillaufr" target="_blank"><img src={Insta} alt="logo Instagram"/></a>
            <a href="https://www.linkedin.com/company/gault&millau/mycompany/?viewAsMember=true" target="_blank"><img src={Mail} alt="logo Mail"/></a>
          </div>
          <p>
            <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" target="_blank" rel="noopener noreferrer">Le Kit Média (PDF)</a>
          </p>
          <a href="mailto:sberdah@gaultmillau.ma">Toutes les newsletters</a>
          <p className={styles.copy}>
            Gault&Millau © 2025<br />Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
