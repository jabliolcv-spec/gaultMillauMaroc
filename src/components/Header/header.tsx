import styles from "./header.module.css";
import Logo from "../../assets/GaultMillau.svg";
import Country from "../../assets/maroc.svg";
import IconMenu from "../../assets/menu/menu.svg";
import Home from "../../assets/menu/home.svg";
import News from "../../assets/menu/blog.svg";
import Resto from "../../assets/menu/restaurant.svg";
import Hotel from "../../assets/menu/hotel.svg";
import Riyad from "../../assets/menu/winery.svg";
import Artisans from "../../assets/menu/artisan.svg";
import Recipes from "../../assets/menu/recipe.svg";
import People from "../../assets/menu/people.svg";
import Utensils from "../../assets/menu/utensil.svg";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.sectionHeader1}>
            <img src={Logo} alt="logo Gault et Millau" className={styles.logo}/>
            <div className={styles.divRight}>
                <img src={Country} alt="icon maroc" className={styles.country} />
                <img src={IconMenu} alt="icon menu" className={styles.menu} />
            </div>
        </div>
        <div className={styles.sectionHeader2}>
            <div className={styles.item}>
                <img src={Home} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Acceuil</span>
            </div>
            <div className={styles.item}>
                <img src={News} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Actualités</span>
            </div>
            <div className={styles.item}>
                <img src={Resto} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Restaurants</span>
            </div>
            <div className={styles.item}>
                <img src={Hotel} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Hotels</span>
            </div>
            <div className={styles.item}>
                <img src={Riyad} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Riyad</span>
            </div>
            <div className={styles.item}>
                <img src={Artisans} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Artisans</span>
            </div>
            <div className={styles.item}>
                <img src={Recipes} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Recettes</span>
            </div>
            <div className={styles.item}>
                <img src={People} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Talent</span>
            </div>
            <div className={styles.item}>
                <img src={Utensils} alt="" className={styles.itemIcon} />
                <span className={styles.itemText}>Utensils</span>
            </div>
        </div>
    </header>
  )
}

export default Header