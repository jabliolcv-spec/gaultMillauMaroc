import Header from "../../components/Header/header";
import style from "../style.module.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Restaurant = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Les opérations de recherche Gault&Millau Maroc ont commencé</h2>
                    <p>
                        Le <strong>Guide Gault&amp;Millau Maroc</strong> est heureux d’annoncer le lancement officiel de ses opérations de recherche à travers tout le Royaume.
                        Nos équipes d’experts gastronomiques sillonnent dès à présent les régions du Maroc pour rencontrer les chefs, découvrir les établissements et identifier
                        les talents qui façonnent l’avenir de la gastronomie marocaine.
                    </p>

                    <p>
                        Fidèle à sa méthode reconnue dans plus de 15 pays, <strong>Gault&amp;Millau</strong> repose sur une évaluation indépendante, rigoureuse et bienveillante.
                        Chaque restaurant est visité de façon anonyme par nos inspecteurs, selon des critères précis : qualité du produit, maîtrise des cuissons, créativité,
                        harmonie des saveurs, présentation, ambiance et qualité du service.
                    </p>

                    <h3>Le système des Toques Gault&amp;Millau</h3>

                    <p>
                        À l’issue de ces visites, les établissements sont distingués par le célèbre système de <strong>Toques Gault&amp;Millau</strong>, symbole d’excellence et de reconnaissance internationale :
                    </p>

                    <ul>
                        <li><strong style={{ background: "#83c3e6ff" }}>Sponsorisé</strong> : Bénéficient d’une exposition accrue sur nos plateformes. </li>
                        <li><strong style={{ background: "#e9f112ff" }}>1 à 2 Toques</strong> De belles tables qui témoignent d’un vrai savoir-faire et d’une cuisine maîtrisée.</li>
                        <li><strong style={{ background: "#e9f112ff" }}>3 à 4 Toques</strong> des établissements remarquables où l’émotion culinaire s’invite à chaque assiette.</li>
                        <li><strong style={{ background: "#e9f112ff" }}>5 Toques</strong> les grandes tables du Maroc, synonymes d’excellence absolue.</li>
                        <li><strong style={{ background: "#e1b105ff" }}>6 Toques</strong> Toques D'or, une distinction exceptionnelle, réservée aux chefs d’exception qui portent la gastronomie marocaine au plus haut niveau international.</li>
                    </ul>

                    <h3>Un accompagnement sur mesure pour les restaurateurs</h3>

                    <p>
                        Être référencé dans le <strong>Guide Gault&amp;Millau Maroc</strong> est bien plus qu’une distinction : c’est une opportunité unique de gagner en visibilité,
                        de renforcer sa notoriété et de valoriser son travail auprès d’un large public passionné de gastronomie.
                    </p>

                    <p>
                        Les établissements distingués bénéficient d’une <strong>présence privilégiée</strong> dans le guide imprimé et sur notre plateforme digitale, avec des options
                        de mise en avant premium : <em>articles dédiés, vidéos, campagnes sponsorisées, partenariats événementiels</em>… autant de leviers pour faire rayonner
                        votre établissement à travers le Maroc et à l’international.
                    </p>

                    <h3>Rejoignez l’aventure Gault&amp;Millau Maroc</h3>

                    <p>
                        Notre mission est simple : <strong>révéler, soutenir et promouvoir</strong> les talents qui font battre le cœur de la gastronomie marocaine.
                        Chefs, restaurateurs, producteurs ou passionnés du goût, votre histoire mérite d’être partagée.
                    </p>

                    <p>
                        <strong>Participez dès aujourd’hui à la grande aventure Gault&amp;Millau Maroc</strong> et contribuez à mettre en lumière l’excellence culinaire du Royaume.
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

export default Restaurant;
