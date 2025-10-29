import Header from "../../components/Header/header";
import style from "../style.module.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Riyad = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Gault&amp;Millau Maroc célèbre l’art de vivre des Riads marocains</h2>
                    <p>
                        Véritables joyaux du patrimoine marocain, les <strong>Riads</strong> sont bien plus que de simples lieux d’hébergement.
                        Ils incarnent l’âme, la culture et l’art de vivre du Maroc.
                        À travers <strong>Gault&amp;Millau Maroc</strong>, nous souhaitons mettre à l’honneur ces établissements uniques qui allient tradition, hospitalité et raffinement.
                    </p>
                    <p>
                        Les équipes Gault&amp;Millau sillonnent le Royaume pour découvrir ces écrins d’authenticité nichés au cœur des médinas et des paysages marocains.
                        Chaque Riad est évalué avec la même exigence et la même passion que les restaurants et hôtels référencés,
                        selon des critères précis : qualité de l’accueil, confort, décoration, propreté, gastronomie, hospitalité et expérience globale.
                    </p>
                    <h3>Une reconnaissance pour l’excellence et l’authenticité</h3>
                    <p>
                        Être sélectionné par <strong>Gault&amp;Millau Maroc</strong>, c’est rejoindre une communauté d’excellence.
                        Les Riads distingués reçoivent le label <strong>“Sélection Gault&amp;Millau Maroc”</strong>, gage de qualité et de confiance,
                        reconnu par les voyageurs du monde entier.
                        Cette distinction valorise non seulement la qualité du service, mais aussi le charme, l’histoire et la singularité de chaque maison d’hôtes.
                    </p>
                    <p>
                        À travers cette démarche, nous souhaitons encourager les propriétaires de Riads à poursuivre leur mission :
                        préserver l’hospitalité marocaine tout en offrant à leurs hôtes une expérience inoubliable, alliant confort, authenticité et modernité.
                    </p>
                    <h3>Une visibilité exclusive pour les Riads partenaires</h3>

                    <p>
                        Les Riads référencés bénéficient d’une <strong>visibilité privilégiée</strong> sur nos supports :
                        guide papier, site officiel, réseaux sociaux, newsletters et campagnes internationales.
                        Cette présence permet d’attirer une clientèle exigeante, en quête de séjours authentiques et raffinés.
                    </p>

                    <p>
                        En plus de cette sélection officielle, <strong>Gault&amp;Millau Maroc</strong> propose des
                        <strong>formules de mise en avant sponsorisée</strong> : articles dédiés, vidéos immersives,
                        reportages photos, collaborations événementielles ou digitales.
                        Ces actions permettent aux Riads de partager leur histoire, leur philosophie et leur savoir-faire auprès d’un large public,
                        tout en renforçant leur image et leur notoriété.
                    </p>

                    <p>
                        Ces campagnes promotionnelles sont totalement indépendantes du processus de notation,
                        garantissant ainsi la transparence et la crédibilité du guide.
                    </p>

                    <h3>Une invitation à rejoindre l’aventure Gault&amp;Millau Maroc</h3>

                    <p>
                        Rejoindre <strong>Gault&amp;Millau Maroc</strong>, c’est bien plus qu’une distinction :
                        c’est l’opportunité de faire partie d’un réseau d’excellence, de bénéficier d’une visibilité nationale et internationale,
                        et de participer à la valorisation du patrimoine marocain.
                    </p>

                    <p>
                        <strong>Chaque Riad a une histoire à raconter. </strong> Ensemble, faisons rayonner cette richesse qui fait du Maroc une destination unique au monde.
                    </p>

                    <p>
                        <strong>Contactez dès aujourd’hui nos équipes</strong> pour présenter votre établissement,
                        découvrir nos formules de partenariat et rejoindre la sélection officielle des plus beaux Riads Gault&amp;Millau Maroc.
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

export default Riyad;
