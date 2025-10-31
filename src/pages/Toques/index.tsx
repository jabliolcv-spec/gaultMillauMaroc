import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import ImgRight1 from "@/assets/img_right.jpg";
import ImgLeft1 from "@/assets/img_left1.png";
import ImgLeft2 from "@/assets/img_left2.jpg";

const Restaurant = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container1}>
                    <div className={style.contentLeft}>
                        <h2>La mission de Gault&Millau</h2>
                        <ul>
                            <li>
                                <strong>SÉLECTIONNER & RECOMMANDER :</strong> offrir à notre communauté de lecteurs épicuriens et épicurioux la garantie de découvrir, à travers nos sélections et recommandations, le meilleur de la restauration, de l’hospitalité et des métiers de bouche.
                            </li>
                            <li>
                                <strong>DÉNICHER & ACCOMPAGNER :</strong> découvrir des talents, les mettre en avant et les promouvoir ; accompagner les chefs vers toujours plus d’excellence et créer des liens justes et bienveillants avec une communauté d’acteurs de la restauration et de l’hospitalité.
                            </li>
                            <li>
                                <strong>ÉDITER & VALORISER :</strong> Par son expertise, Gault&Millau est une référence incontournable, une caution pour les professionnels comme pour les amateurs. Une expertise et un savoir-faire qui nous ont conduit au métier de l’audit afin de labelliser tous types d’établissements en rapport avec la restauration et l’hospitalité ; de labelliser et de recommander les meilleurs produits.
                            </li>
                        </ul>
                    </div>
                    <div className={style.contentRight}>
                        <img
                            src={ImgRight1}
                            alt="Banniere Présentation de la mission Gault&Millau"
                             className="responsive-img"
                        />
                    </div>
                </div>
                <div className={style.Container2}>
                    <div className={style.contentLeft}>
                        <img
                            src={ImgLeft1}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                    <div className={style.contentRight}>
                        <h2>La vision de Gault&Millau</h2>
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

                <div className={style.Container3}>
                    <div className={style.contentRight}>
                        <h2>Les valeurs Gault&Millau</h2>
                        <ul>
                            <li>
                                <strong>IMPARTIALITÉ & ÉTHIQUE</strong> Les enquêtes sont menées dans chaque établissement par des experts anonymes qui ne s’annoncent pas, ne se présentent pas à la fin du repas et paient leur addition.
                            </li>
                            <li>
                                <strong>OBJECTIVITÉ & INDÉPENDANCE</strong> Chaque enquêteur remplit, en restant neutre et impartial, une grille d’évaluation extrêmement normée sur chaque établissement visité ou produit goûté, qui permettra de faire ensuite un compte-rendu précis et éclairé
                            </li>
                            <li>
                                <strong>BIENVEILLANCE & RESPECT</strong> Les chefs et professionnels sont accompagnés, suivis tout au long de leur carrière. Leur travail est toujours observé sans complaisance mais avec considération.
                            </li>
                            <li>
                                <strong>SAVOIR-FAIRE & FAIRE SAVOIR</strong> Développer la culture du goût et des savoir-faire dans les métiers de bouche auprès de tous les publics, à travers toutes les publications et événements de Gault&Millau
                            </li>
                            <li>
                                <strong>ESPRIT PIONNIER & RECONNAISSANCE</strong> Dénicher les nouveaux talents, leur apporter de la visibilité et les reconnaître devant leurs pairs à travers les dotations et palmarès régionaux et national.
                            </li>
                        </ul>
                    </div>
                    <div className={style.contentLeft}>
                        <img
                            src={ImgLeft2}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Restaurant;

 
