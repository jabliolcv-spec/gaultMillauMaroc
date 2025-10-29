import styles from "./header.module.css";
import Logo from "@/assets/GaultMillau.svg";
import Country from "@/assets/maroc.svg";
import Home from "@/assets/menu/home.svg";
import News from "@/assets/menu/blog.svg";
import Resto from "@/assets/menu/restaurant.svg";
import Hotel from "@/assets/menu/hotel.svg";
import Riyad from "@/assets/menu/riyad.svg";
import Artisans from "@/assets/menu/artisan.svg";
import Recipes from "@/assets/menu/recipe.svg";
import People from "@/assets/menu/people.svg";
import Utensils from "@/assets/menu/utensil.svg";
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
            <Link to={'/blog'} className={styles.item}>
                <img src={News} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Actualités</span>
            </Link>
            <Link to={'/Restaurant'} className={styles.item}>
                <img src={Resto} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Restaurants</span>
            </Link>
            <Link to={'/Hotels'} className={styles.item}>
                <img src={Hotel} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Hotels</span>
            </Link>
            <Link to={'/Riyad'} className={styles.item}>
                <img src={Riyad} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Riyad</span>
            </Link>
            <Link to={'/Artisans'} className={styles.item}>
                <img src={Artisans} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Artisans</span>
            </Link>
            <Link to={'/Recettes'} className={styles.item}>
                <img src={Recipes} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Recettes</span>
            </Link>
            <Link to={'/Talent'} className={styles.item}>
                <img src={People} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Talent</span>
            </Link>
            <Link to={'/Utensils'} className={styles.item}>
                <img src={Utensils} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Utensils</span>
            </Link>
        </div>
    </header>
  )
}



export default Header