import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Hotels = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Gault&amp;Millau Maroc : à la découverte des plus beaux hôtels du Royaume</h2>

                    <p>
                        Après le lancement de son édition dédiée à la gastronomie, <strong>Gault&amp;Millau Maroc</strong> étend désormais son expertise au domaine de l’hôtellerie.
                        Nos équipes parcourent le Royaume pour sélectionner et distinguer les établissements qui incarnent le mieux l’art de recevoir à la marocaine :
                        élégance, hospitalité, excellence du service et expérience unique.
                    </p>

                    <p>
                        À travers cette démarche, notre objectif est de <strong>valoriser les hôtels et maisons d’hôtes</strong> qui participent activement au rayonnement
                        du Maroc comme destination d’exception. Chaque établissement est visité et évalué de manière anonyme selon une grille de critères rigoureux :
                        qualité de l’accueil, confort, propreté, cadre, services, gastronomie, bien-être et expérience globale du client.
                    </p>

                    <h3>Une méthode d’évaluation unique et indépendante</h3>

                    <p>
                        Fidèle à la philosophie <strong>Gault&amp;Millau</strong>, l’évaluation des hôtels repose sur un système indépendant et impartial,
                        basé sur l’excellence, l’authenticité et la cohérence de l’expérience proposée.
                        Chaque note est attribuée à la suite d’une visite réelle effectuée par nos experts, garantissant une sélection honnête et transparente.
                    </p>

                    <p>
                        Les établissements distingués se verront remettre le label <strong>“Sélection Gault&amp;Millau Maroc”</strong>, symbole de confiance et de prestige,
                        reconnu par les voyageurs du monde entier. Cette distinction devient un gage d’excellence, une véritable marque de qualité dans l’univers de l’hôtellerie marocaine.
                    </p>

                    <h3>Une visibilité nationale et internationale</h3>

                    <p>
                        Être référencé dans le <strong>Guide Gault&amp;Millau Maroc</strong>, c’est bénéficier d’une <strong>visibilité exceptionnelle</strong> :
                        dans notre guide papier, sur notre site officiel, nos réseaux sociaux et à travers nos partenaires média.
                        Les établissements sélectionnés rejoignent un réseau exclusif d’adresses prestigieuses, consulté par des milliers de voyageurs,
                        gastronomes et professionnels du tourisme.
                    </p>

                    <p>
                        En plus de cette reconnaissance, nous offrons la possibilité d’opter pour des <strong>formules de visibilité sponsorisée</strong> :
                        reportages, vidéos, campagnes digitales, événements dédiés ou collaborations personnalisées.
                        Ces partenariats permettent aux hôtels de <strong>mettre en avant leur image, leurs valeurs et leurs expériences uniques</strong> auprès d’un public ciblé,
                        sans influencer la notation attribuée par nos équipes.
                    </p>

                    <h3>Une opportunité de distinction et de croissance</h3>

                    <p>
                        En rejoignant le <strong>réseau Gault&amp;Millau Maroc</strong>, vous valorisez votre établissement auprès d’une clientèle haut de gamme
                        et exigeante, en quête d’authenticité et d’expériences mémorables.
                        Vous renforcez votre notoriété, tout en vous inscrivant dans un cercle d’excellence reconnu internationalement.
                    </p>

                    <p>
                        <strong>Notre mission :</strong> promouvoir les hôtels marocains qui allient charme, raffinement et service d’exception,
                        et accompagner leurs équipes dans une démarche d’amélioration continue et de mise en lumière.
                    </p>

                    <p>
                        <strong>Rejoignez l’aventure Gault&amp;Millau Maroc</strong> et participez à l’essor d’un tourisme d’excellence, à l’image du Maroc :
                        accueillant, inspirant et d’une élégance intemporelle.
                    </p>

                    <h3>Liens Utiles</h3>
                    <div className={style.links}>
                        <Link to="https://www.gaultmillau.org" target="_blank">A propos</Link>
                        <Link to="/Infos/CGV">Conditions Générales De Vente</Link>
                        <Link to="/Infos/politique-de-confidentialite">Politique de confidentialité</Link>
                        <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" target="_blank" rel="noopener noreferrer">Le Kit Média (PDF)</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Hotels;
