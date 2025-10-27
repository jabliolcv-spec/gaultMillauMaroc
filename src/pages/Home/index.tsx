import Header from '../../components/Header/header'
import style from "./home.module.css";
import SingleNewsCard from '../../components/cards/UneCard';
import Services from '../../components/Services';
import LicensedCountries from '../../components/LicensedContries';
import Logo from "../../assets/GaultMillau.svg";
import Footer from '../../components/Footer';

interface NewsCardProps {
    id: string;
    theme: string;
    title: string;
    slug: string;
    resume: string;
    thumbId: string;
    content?: string;
}

const NewsCardData: NewsCardProps = {
    id: "news-une-1",
    title: "Nouveau guide Gault&Millau : cap sur le Maroc",
    resume: "Gault&Millau poursuit son extension internationale. Un nouveau guide sera lancé dès mai 2026 pour récompenser les plus belles tables, les chefs remarquables et les prestigieux établissements du Maroc",
    slug: "nouveau-guide-gault-and-millau-cap-sur-le-maroc",
    thumbId: "046b4a0f-827b-4e89-9d16-0b2e9c4de3fa",
    theme: "Actus & Rendez-vous",
};

export const countries = [
  {
    name: "Austria",
    image: "https://assets.gaultmillau.com/assets/f768ea77-849a-428f-aa2d-43bdd9795b0a?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.at",
  },
  {
    name: "Belgium",
    image: "https://assets.gaultmillau.com/assets/5aa18e14-f5c2-4e90-8f52-c732806cf8f6?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.be",
  },
  {
    name: "Croatia",
    image: "https://assets.gaultmillau.com/assets/489e3390-5327-418b-a0a6-93566bc6d8dd?width=125&height=125&format=webp",
    url: "https://hr.gaultmillau.com",
  },
  {
    name: "Czech Republic",
    image: "https://assets.gaultmillau.com/assets/c4153a91-4b11-42fc-99a6-f1c2a3896cbe?width=125&height=125&format=webp",
    url: "https://www.gault-millau.cz/",
  },
  {
    name: "France",
    image: "https://assets.gaultmillau.com/assets/ccb1a33c-da49-485a-86a9-b44a49285842?width=125&height=125&format=webp",
    url: "https://fr.gaultmillau.com",
  },
  {
    name: "Georgia",
    image: "https://assets.gaultmillau.com/assets/81b2a615-f877-4573-8f73-a66d871504c5?width=125&height=125&format=webp",
    url: "https://ge.gaultmillau.com",
  },
  {
    name: "Germany",
    image: "https://assets.gaultmillau.com/assets/2b91670c-d670-4ef0-9a2b-a4a1b14c0e98?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.de/",
  },
  {
    name: "Hungary",
    image: "https://assets.gaultmillau.com/assets/75f49373-b5e1-4d20-a762-1cf7ed675d4e?width=125&height=125&format=webp",
    url: "https://www.gault-millau.hu",
  },
  {
    name: "Italy",
    image: "https://assets.gaultmillau.com/assets/5b922ea2-e3bb-4c7e-a50d-a1c45287b260?width=125&height=125&format=webp",
    url: "https://www.gault-millau.it/",
  },
  {
    name: "Japan",
    image: "https://assets.gaultmillau.com/assets/3ed0a244-8fbe-42d6-ba48-552b783f2891?width=125&height=125&format=webp",
    url: "https://jp.gaultmillau.com",
  },
  {
    name: "Luxembourg",
    image: "https://assets.gaultmillau.com/assets/06752659-6bd1-4e5e-8b40-9844951fc068?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.lu",
  },
  {
    name: "Morocco",
    image: "https://assets.gaultmillau.com/assets/21bf4eaa-0235-4934-ab59-de39cfb9a73f?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.ma",
  },
  {
    name: "Netherlands",
    image: "https://assets.gaultmillau.com/assets/cbbf3667-e71e-40f0-a919-cc1787915527?width=125&height=125&format=webp",
    url: "https://www.gault-millau.nl",
  },
  {
    name: "Serbia",
    image: "https://assets.gaultmillau.com/assets/664f2d85-9e12-49a0-945a-81e14efb2fa1?width=125&height=125&format=webp",
    url: "https://rs.gaultmillau.com",
  },
  {
    name: "Slovakia",
    image: "https://assets.gaultmillau.com/assets/56081f6f-aeb4-448f-b377-1bc5c9c52ef2?width=125&height=125&format=webp",
    url: "https://www.gault-millau.sk",
  },
  {
    name: "Slovenia",
    image: "https://assets.gaultmillau.com/assets/8fd6908c-b7f7-4b2c-a162-69f6859ca0e1?width=125&height=125&format=webp",
    url: "https://si.gaultmillau.com",
  },
  {
    name: "Switzerland",
    image: "https://assets.gaultmillau.com/assets/f9520f43-ae98-4e62-a2ee-fc7d2b18b7f1?width=125&height=125&format=webp",
    url: "https://www.gaultmillau.ch/fr",
  },
  {
    name: "Turkey",
    image: "https://assets.gaultmillau.com/assets/d2f2f30b-7785-4177-a246-69a4e825a4e1?width=125&height=125&format=webp",
    url: "https://www.gault-millau.com.tr/",
  },
  {
    name: "United Arab Emirates",
    image: "https://assets.gaultmillau.com/assets/41071e2b-c3e7-47bd-9fa6-3932894381e9?width=125&height=125&format=webp",
    url: "https://gaultmillauae.com",
  },
];



const Home = () => {
    console.log(NewsCardData);
    return (
        <>
            <Header />
            <section className={style.mainSection}>
                <SingleNewsCard news={NewsCardData} />
            </section>
            <section className={style.bgWhite}>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Le mot du président</h2>
                    <div className={style.underlineSection}></div>
                </div>

                <div className={style.container}>
                    <div className={style.imageWrapper}>
                        <img
                            src="https://assets.gaultmillau.com/assets/046b4a0f-827b-4e89-9d16-0b2e9c4de3fa?transforms=%5B%5B%22resize%22%2C%7B%22width%22%3A700%2C%22height%22%3A464%2C%22fit%22%3A%22cover%22%7D%5D%5D&format=avif"
                            alt="Patrick Hayoun"
                            className={style.image}
                        />
                    </div>

                    <div className={style.content}>
                        <div className={style.quoteIcon}>“</div>

                        <p>
                            Je suis ici pour partir à la découverte des jeunes talents culinaires marocains. Nous avons choisi de nous concentrer sur le Maroc, un pays à la richesse gastronomique exceptionnelle. Notre objectif est de juger et de mettre en valeur la véritable cuisine marocaine, dans toute sa diversité et son authenticité. 
                        </p>
                        <p>
                            <strong>« À travers Gault&Millau Maroc »</strong>,
                        </p>
                        <p>
                            je souhaite mettre en lumière la créativité, le savoir-faire et la passion qui animent les chefs de ce pays, et faire rayonner la gastronomie marocaine au-delà de ses frontières.
                        </p>
                        <div className={style.bottomSection}>
                            <div>
                                <h3 className={style.name}>M. Steve BERDAH</h3>
                                <div className={style.underline}></div>
                                <p className={style.role}>
                                    Président-Directeur Général<br />
                                    Gault&amp;Millau Maroc
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.bgWhiteSmoke}>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Nos Services</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <Services/>
            </section>
            <section>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Entrez dans le monde de la gastronomie</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.divLogo}>
                    <img src={Logo} alt="logo Gault et Millau"/>
                </div>
                <LicensedCountries countries={countries}/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Home