"use client";

import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/GaultMillau.svg"; 
import { Link } from "react-router-dom";

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
            <Link to="https://www.gaultmillau.org" target="_blank">A propos</Link>
            <Link to="/Infos/CGV">Conditions Générales De Vente</Link>
            <Link to="/Infos/politique-de-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className={styles.column}>
          <h4>Notre sélection</h4>
          <Link to="/Restaurant">Restaurants</Link>
          <Link to="/Hotels">Hôtels</Link>
          <Link to="/Artisans">Artisans</Link>
          <Link to="/Talent">Jeunes Talent</Link>
        </div>

        {/* Colonne 3 */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <p> 81 BD MOULAY HASSAN I, <br/>
            6ÈME ÉTAGE,<br />
            CASABLANCA, MAROC<br />
          </p>
          <a href="mailto:sberdah@gaultmillau.ma">Contactez-nous</a>
          <a href="tel:+212664082188">Appeler : (+212)6.64.08.21.88</a>
        </div>

        {/* Colonne 4 */}
        <div className={styles.column}>
          <h4>Le Kit Media</h4>
          <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" target="_blank" rel="noopener noreferrer">Ouvrir Le Kit Média (PDF)</a>
          <p className={styles.copy}>
            Gault&Millau Maroc © 2025<br />Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}
