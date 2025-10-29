import styles from "./style.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className={styles.InfosSection}>
                <h1>Politique de confidentialité</h1>
                <section>
                    <h2>1. Responsable du traitement</h2>
                    <p>
                        <strong>Gault&amp;Millau Maroc</strong>, société au capital de 90 000 Dhs, sise à Casablanca.
                    </p>
                </section>

                <section>
                    <h2>2. Données collectées</h2>
                    <p>
                        Nom, prénom, date de naissance, genre, email, téléphone, adresse, etc., selon le profil (utilisateur ou professionnel).
                    </p>
                </section>

                <section>
                    <h2>3. Utilisation des données</h2>
                    <ul>
                        <li>Offrir les services du site : recherche d’établissements, consultation des produits, évaluation.</li>
                        <li>Publication possible du nom, prénom ou “position” des professionnels dans leur établissement.</li>
                        <li>Seules les données strictement nécessaires sont collectées.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Stockage &amp; sécurité</h2>
                    <ul>
                        <li>
                            Les services informatiques et processus automatisés sont fournis par un sous-traitant : Gault & Millau International SA – Rue du Jeu-de-l’Arc 15, 1207 Genève.
                                Toutes les données que nous collectons sont stockées dans une base de données hébergée au sein des infrastructures de Platform.sh, sous-traitant en France. Les mots de passe des comptes y sont chiffrés, et les connexions sécurisées au moyen du protocole SSL.
                                Physiquement, les serveurs sont sécurisés et non accessibles au public. Les accès professionnels y sont rigoureusement contrôlés, et limités au personnel technique habilité.
                        </li>
                        <li>Connexions sécurisées (SSL), mots de passe chiffrés.</li>
                        <li>Contrôle d’accès restreint au personnel technique.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Durée de conservation</h2>
                    <ul>
                        <li>
                            Les données professionnelles sont conservées tant qu’elles reflètent la réalité. Elles sont mises à jour ou
                            supprimées par un administrateur lorsqu’elles ne sont plus valables.
                        </li>
                        <li>
                            Pour les utilisateurs disposant d’un compte, les données sont supprimées dans un délai d’un mois après la
                            fermeture du compte.
                        </li>
                        <li>
                            Sur certaines versions internationales (ex. Gault&amp;Millau Australie), les comptes inactifs depuis plus de
                            5 ans sont supprimés automatiquement.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>6. Droits des personnes</h2>
                    <ul>
                        <li>
                            Droit d’accès, de rectification, de suppression, d’opposition, de limitation et de portabilité selon la
                            politique du site.
                        </li>
                        <li>
                            Pour faire valoir ces droits, les utilisateurs peuvent contacter Gault&amp;Millau Maroc :
                            <a href="mailto:contact@gaultmillau.ma"> contact@gaultmillau.ma</a>.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>7. Cookies</h2>
                    <ul>
                        <li>Utilisation de cookies strictement nécessaires au bon fonctionnement du site.</li>
                        <li>
                            Utilisation de cookies analytiques (ex. Google Analytics), avec des durées de conservation précisées (ex.
                            cookie <code>_ga</code> : 24 mois).
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>8. Modifications de la politique de confidentialité</h2>
                    <ul>
                        <li>
                            Gault&amp;Millau Maroc se réserve le droit de modifier cette politique pour rester en conformité avec
                            l’évolution réglementaire ou technique.
                        </li>
                        <li>La date de dernière mise à jour est toujours indiquée sur cette page.</li>
                    </ul>
                </section>

                <section>
                    <h2>9. Contact et autorité de contrôle</h2>
                    <ul>
                        <li>
                            Pour toute question ou demande liée à la vie privée :
                            <a href="mailto:contact@gaultmillau.ma">contact@gaultmillau.ma</a>
                        </li>
                        <li>
                            En cas de non-respect de leurs droits, les utilisateurs peuvent contacter l’autorité de contrôle compétente
                            (ex. la CNIL en France, La CNDP au Maroc).
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
