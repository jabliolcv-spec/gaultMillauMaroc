import Header from "../../components/Header/header";
import style from "../style.module.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Recettes = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Les recettes Gault&amp;Millau Maroc : quand les chefs partagent leur passion</h2>
                    <p>
                        La cuisine marocaine est l’une des plus riches et des plus raffinées au monde.
                        Ses saveurs, ses couleurs et ses traditions racontent l’histoire d’un peuple, de ses terroirs et de ses artisans.
                        Avec <strong>Gault&amp;Millau Maroc</strong>, nous souhaitons <strong>mettre en lumière les recettes emblématiques et les créations originales de nos chefs</strong> —
                        celles qui reflètent le génie, la passion et la créativité culinaire du Maroc.
                    </p>
                    <p>
                        Chaque plat est une œuvre d’art, une rencontre entre le produit, la technique et l’émotion.
                        Derrière chaque recette, il y a un chef, une équipe, un terroir et une histoire à raconter.
                        Notre mission est de <strong>partager ces histoires</strong> et de faire découvrir aux amateurs de gastronomie
                        les talents qui subliment les produits du Royaume.
                    </p>
                    <h3>Des créations signées par les meilleurs chefs du Maroc</h3>
                    <p>
                        <strong>Gault&amp;Millau Maroc</strong> donne la parole aux chefs, aux jeunes talents et aux artisans du goût qui réinventent la cuisine marocaine au quotidien.
                        Leurs recettes traduisent la richesse de notre culture culinaire, entre héritage et modernité,
                        entre tradition revisitée et audace créative.
                    </p>

                    <p>
                        À travers nos publications, nous souhaitons mettre en avant les plats signature, les recettes emblématiques,
                        mais aussi les créations inédites qui révèlent la personnalité et la vision de chaque chef.
                        Du couscous revisité à la pâtisserie contemporaine, de la cuisine de terroir aux inspirations internationales,
                        chaque recette devient une expérience sensorielle unique.
                    </p>

                    <h3>Un espace de partage et d’inspiration</h3>

                    <p>
                        Notre objectif est de créer un véritable <strong>pont entre les chefs et le grand public</strong> :
                        permettre à chacun de découvrir les secrets des grands noms de la gastronomie marocaine,
                        tout en inspirant les passionnés de cuisine à reproduire, explorer et s’approprier ces créations.
                    </p>

                    <p>
                        Les recettes publiées par <strong>Gault&amp;Millau Maroc</strong> sont soigneusement sélectionnées, accompagnées de conseils,
                        d’astuces techniques et de présentations visuelles raffinées.
                        Elles reflètent la diversité et l’élégance du savoir-faire culinaire marocain.
                    </p>

                    <h3>Une vitrine pour les chefs et leurs créations</h3>

                    <p>
                        Être publié sur <strong>Gault&amp;Millau Maroc</strong>, c’est l’occasion pour les chefs de partager leur univers, leur philosophie et leur art avec un large public.
                        C’est aussi une opportunité de gagner en visibilité, d’attirer de nouveaux clients et de renforcer leur image au sein du paysage gastronomique national et international.
                    </p>

                    <p>
                        Les publications sponsorisées et les collaborations culinaires permettent également aux chefs et établissements
                        de bénéficier d’une <strong>mise en avant exclusive</strong> : articles, vidéos, reportages, publications sociales,
                        ou encore recettes en partenariat avec nos marques partenaires.
                    </p>

                    <h3>Partageons ensemble le goût du Maroc</h3>

                    <p>
                        À travers la mise en valeur des <strong>recettes de nos chefs</strong>, nous célébrons la richesse de notre patrimoine culinaire
                        et l’énergie créative d’une nouvelle génération de talents.
                        <strong>Gault&amp;Millau Maroc</strong> s’engage à faire rayonner le Maroc à travers ses saveurs, ses chefs et ses histoires de passion.
                    </p>

                    <p>
                        <strong>Chefs, rejoignez-nous</strong> pour partager vos créations et contribuer à faire vibrer la gastronomie marocaine aux yeux du monde.
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

export default Recettes;
