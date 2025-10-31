import styles from "./header.module.css";
import Logo from "@/assets/GaultMillau.svg";
import Country from "@/assets/maroc.svg";
import Home from "@/assets/menu/home.svg";
import News from "@/assets/menu/blog.svg";
import Resto from "@/assets/menu/restaurant.svg";
import Hotel from "@/assets/menu/hotel.svg";
import Artisans from "@/assets/menu/artisan.svg";
import Contact from "@/assets/menu/contact.svg";
import KitMedia from "@/assets/menu/kitMedia.svg";
import Activity from "@/assets/menu/activity.svg";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className={styles.header}>
        <div className={styles.sectionHeader1}>
            <img src={Logo} alt="logo Gault et Millau" className={styles.logo}/>
            <div className={styles.divRight}>
                <img src={Country} alt="icon maroc" className={styles.country} />
            </div>
        </div>
        <div className={styles.sectionHeader2}>
            <Link to={'/'} className={styles.item}>
                <img src={Home} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Acceuil</span>
            </Link>
            <Link to={'/RevuePresse'} className={styles.item}>
                <img src={News} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Revue De Presse</span>
            </Link>
            <Link to={'/Toques'} className={styles.item}>
                <img src={Resto} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Les Toques</span>
            </Link>
            <Link to={'/Hospitalite'} className={styles.item}>
                <img src={Hotel} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Hospitalité</span>
            </Link>
            <Link to={'https://fr.gaultmillau.com/fr/search/artisan'} target="_blank" className={styles.item}>
                <img src={Artisans} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Artisans</span>
            </Link>
            <Link to={'/Activity'} className={styles.item}>
                <img src={Activity} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Activités</span>
            </Link>
            <Link to={'/KitMedia'} className={styles.item}>
                <img src={KitMedia} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Kit Média</span>
            </Link>
            <Link to={'/Contact'} className={styles.item}>
                <img src={Contact} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Contact</span>
            </Link>
        </div>
    </header>
  )
}



export default Header