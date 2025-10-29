import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Artisans = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Gault&amp;Millau Maroc met à l’honneur les artisans du goût</h2>

                    <p>
                        La gastronomie marocaine ne serait rien sans ses <strong>artisans</strong> : ces femmes et ces hommes passionnés qui, chaque jour,
                        façonnent les produits d’exception qui nourrissent les plus grandes tables du Royaume.
                        Boulangers, pâtissiers, chocolatiers, fromagers, charcutiers, confiseurs, torréfacteurs ou encore traiteurs…
                        chacun d’eux contribue à faire rayonner l’excellence culinaire marocaine.
                    </p>

                    <p>
                        Fidèle à sa mission de valorisation du savoir-faire et de la passion, <strong>Gault&amp;Millau Maroc</strong> s’engage à mettre en lumière
                        ces acteurs essentiels de la chaîne gastronomique.
                        Nos équipes parcourent le pays à la recherche de ces artisans qui perpétuent les traditions tout en innovant,
                        pour offrir des produits d’une qualité remarquable et d’une authenticité rare.
                    </p>

                    <h3>Une reconnaissance du savoir-faire et de la passion</h3>

                    <p>
                        Le <strong>Guide Gault&amp;Millau Maroc</strong> souhaite rendre hommage à celles et ceux qui travaillent avec rigueur et amour du métier.
                        À travers une sélection dédiée, nous distinguons les artisans qui incarnent les valeurs d’excellence, de transmission et de créativité.
                    </p>

                    <p>
                        Être reconnu par <strong>Gault&amp;Millau Maroc</strong>, c’est recevoir une marque de confiance,
                        une reconnaissance nationale et internationale qui valorise le travail bien fait, le produit noble et la démarche artisanale.
                    </p>

                    <h3>Des métiers variés, un même engagement pour la qualité</h3>

                    <ul>
                        <li><strong>Les boulangers</strong> qui perpétuent les recettes traditionnelles tout en réinventant le pain marocain.</li>
                        <li><strong>Les pâtissiers</strong> qui allient finesse, créativité et goût pour sublimer chaque dessert.</li>
                        <li><strong>Les chocolatiers</strong> qui font du cacao un art et de la douceur une émotion.</li>
                        <li><strong>Les fromagers et charcutiers</strong> qui valorisent les produits du terroir et la richesse locale.</li>
                        <li><strong>Les traiteurs et confiseurs</strong> qui célèbrent l’art du partage et de la générosité marocaine.</li>
                    </ul>

                    <h3>Une visibilité et une valorisation unique</h3>

                    <p>
                        Les artisans distingués par <strong>Gault&amp;Millau Maroc</strong> bénéficient d’une <strong>visibilité privilégiée</strong> :
                        dans notre guide, sur notre site web, nos réseaux sociaux et nos supports de communication officiels.
                        Leur savoir-faire est mis en avant à travers des <strong>articles dédiés, portraits, vidéos, interviews</strong> et
                        <strong>publications sponsorisées</strong> qui racontent leur histoire et leur passion.
                    </p>

                    <p>
                        Ces partenariats leur permettent d’accroître leur notoriété, d’attirer une clientèle fidèle et curieuse,
                        tout en contribuant à la transmission du patrimoine culinaire marocain.
                    </p>

                    <h3>Une mission commune : faire rayonner le goût marocain</h3>

                    <p>
                        Avec <strong>Gault&amp;Millau Maroc</strong>, les artisans rejoignent une véritable communauté du goût,
                        un réseau d’excellence qui relie chefs, producteurs, hôteliers et amoureux du terroir.
                        Ensemble, nous partageons une même ambition : <strong>mettre en lumière les talents marocains</strong> et
                        faire reconnaître la richesse de notre gastronomie à l’échelle internationale.
                    </p>

                    <p>
                        <strong>Artisans du Maroc</strong>, votre savoir-faire mérite d’être vu, reconnu et célébré.
                        Rejoignez dès aujourd’hui le <strong>Guide Gault&amp;Millau Maroc</strong> et contribuez à écrire
                        une nouvelle page de l’histoire culinaire du Royaume.
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

export default Artisans;
