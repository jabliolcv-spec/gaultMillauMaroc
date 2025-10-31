import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import Guide from '@/assets/img_left1.png';
import Digitale from "@/assets/digitale.png";
import Gala from "@/assets/gala.png";
import ImgJeune from "@/assets/jeune_talent.jpg";
import SmartImage from "../../components/SmartImage";
import { Link } from "react-router-dom";


const Activity = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>éditions</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.Container}>
                    <div className={style.contentLeft}>
                        <img
                            src={Guide}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />

                    </div>
                    <div className={style.contentRight}>
                        <h2>Nos éditions</h2>
                        <ul>
                            <li>
                                <strong>Guide Maroc</strong>
                            </li>
                            <li>
                                <strong>+3 Guides Régionaux</strong>
                            </li>
                            <li>
                                <strong>Magazine et Hors-Série</strong>
                            </li>
                            <li>
                                <strong>... et Plus, Nous Contacter Pour Plus D'infos</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Digital</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.Container2}>
                    <div className={style.contentLeft}>
                        <img
                            src={Digitale}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                    <div className={style.contentRight}>
                        <h2>Le site internet & la communauté</h2>
                        <ul>
                            <li>
                                <strong>De l’ambition… </strong> celle devenir le média de référence, de la création de contenus à la recherche d’information qualifiée pour tous les métiers de la gastronomie et de l’hospitalité au travers de ces supports papiers et numériques.
                            </li>
                            <li>
                                <strong>… à l’internationalisation :</strong> faire rayonner les savoir-faire et l’excellence des gastronomies locales dans plus de 30 pays et auprès de 2,7 milliards de lecteurs et amateurs d’ici à 2028
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>événements</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.Container}>

                    <div className={style.contentRight}>
                        <h2>Gala Annuel Gault&Millau</h2>
                        <ul>
                            <li>
                                <strong>L’élite gastronomico-médiatique</strong> se donne rendez-vous chaque année lors de ce dîner pour porter un message fort en faveur de la transmission et des jeunes. Le Gala annuel Gault&Millau est un événement exceptionnel qui a pour objectif de rassembler, célébrer et récompenser les meilleurs acteurs de la gastronomie française (chefs, chefs pâtissiers, directeurs de salle, sommeliers, jeunes talents…). Chaque année, le palmarès est très attendu, il est le baromètre de la profession.
                            </li>

                        </ul>
                    </div>
                    <div className={style.contentLeft}>
                        <img
                            src={Gala}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                </div>
                <div className={style.containerImg}>
                    <Link to={"/contact"} title="Nous Contacter">
                        <SmartImage
                            thumbId={"gala_bannier"}
                            title={"gala gault millau"}
                            width={1000}
                            height={300}
                        />
                    </Link>
                </div>
                <div className={style.Container2}>
                    <div className={style.contentLeft}>
                        <img
                            src={ImgJeune}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                    <div className={style.contentRight}>
                        <h2>Gault&Millau - Dotation Jeunes Talents</h2>
                        <ul>
                            <li>
                                Initiés en 2014, <strong>la Dotation Jeunes Talents Gault&Millau</strong>  soutient les jeunes entrepreneurs de la restauration souhaitant ouvrir leur premier établissement. Après une sélection rigoureuse, une dotation en matériel ou services est offerte par les partenaires Gault&Millau à une douzaine de lauréats chaque année.
                                Depuis sa création, plus de 100 jeunes chefs ont pu concrétiser leur projet et vivre leur passion, accompagnés avec bienveillance par Gault&Millau.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Partenariats/Publicités</h2>
                    <div className={style.underlineSection}></div>
                </div>

                <div className={style.ContainerLink}>
                        <Link
                            to="/KitMedia"
                            className={style.card}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className={style.overlay}>
                                <h3>TÉLÉCHARGEZ LE<br />Kit Média</h3>
                            </div>
                        </Link>

                        <Link to="/contact" className={style.card} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className={style.overlay}>
                                <h3>CONTACT</h3>
                                <p>Nous Contacter →</p>
                            </div>
                        </Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Activity;


