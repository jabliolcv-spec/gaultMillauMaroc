import Header from "../../components/Header/header.tsx";
import style from "./style.module.css";
import Footer from "../../components/Footer/index.tsx";
import SmartImage from "../../components/SmartImage/index.tsx";

const NewsDetails = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <p className={style.title}>Lancement officiel du Guide Gault & Millau Maroc</p>
                    <p className={style.subTitle}>Une célébration de l’excellence gastronomique du Royaume.</p>
                    <div className={style.tags}>
                        <span>Maroc</span> <span>Culture</span> <span>Guide Gault&Millau</span> <span>Trophées</span>
                    </div>
                    <div className={style.content}>
                        <p>Dans l’univers prestigieux de la gastronomie mondiale, une nouvelle étoile brille désormais au firmament du Royaume du Maroc.</p>
                    </div>
                    <SmartImage
                        thumbId={"communique_presse"}
                        title={"communique de presse"}
                        width={1000}
                        height={600}
                    />
                    <div className={style.content}>
                        <p>Le célèbre guide <strong>Gault&Millau</strong>, référence incontournable et respectée des gastronomes du monde entier, lance officiellement son édition marocaine. Une première historique qui s’inscrit comme une étape majeure dans la reconnaissance et la valorisation de la richesse culinaire marocaine.</p>
                        <p>Cet événement exceptionnel s’est déroulé le <b>lundi 20 octobre 2025 à 10h00 au Conrad Rabat</b>, palace emblématique alliant avec élégance tradition et modernité. L’établissement raffiné a offert un écrin parfait pour célébrer l’art de la table à la marocaine.</p>
                    </div>
                    <div className={style.videoContainer}>
                            <iframe
                                width="1000"
                                height="500"
                                src={"https://www.youtube.com/embed/Io19mzq83r8?autoplay=1&loop=1&playlist=Io19mzq83r8&mute=1&controls=1"}
                                title="Steve Berdah President Gault&Millau Maroc"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>
                    <div className={style.content}>
                        <p>L’évènement a été marqué par la présence du président du groupe Gault&Millau Monde, <strong>M. Patrick Hayoun</strong> ainsi que <strong> M. Steve Berdah</strong>, Président de Gault&Millau Maroc.</p>
                        <p>À leurs côtés, <strong>le Chef Lahcen Hafid</strong> a mis son parcours et son talent au service de ce guide aux couleurs marocaines, en revêtant l’uniforme d’Ambassadeur de cet ouvrage.</p>
                        <p>Cette conférence de presse a également rassemblé des voix influentes de la gastronomie marocaine tels que <strong>Khadija Bensdira, Fayçal Bitioui, Kandil Abdelkader, Aïcha Lahlou, </strong>ou encore <strong>Taher Ait Errami</strong>. Leur présence a reflété l’engagement de l’ensemble des acteurs de cet écosystème à contribuer au rayonnement international de cette initiative.</p>
                        <p>Une initiative destinée à mettre en lumière les talents et les saveurs uniques qui font la grandeur des tables marocaines.</p>
                    </div>
                    <div className={style.videoContainer}>
                            <iframe
                                width="1000"
                                height="500"
                                src={"https://www.youtube.com/embed/xoiYhmcrmDo?si=6PPq3DwIAp5C4DOJ"}
                                title="Steve Berdah President Gault&Millau Maroc"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>
                    <div className={style.content}>
                        <p>Le Guide <strong>Gault&Millau Maroc</strong> se donne ainsi pour mission d’être bien plus qu’un simple carnet d’adresses. Il aspire à révéler et à promouvoir un panorama riche et diversifié, de centaines de restaurants dans trois grandes régions du Royaume. Chaque sélection sera rigoureusement indépendante, pensée pour guider les amateurs de haute gastronomie, les professionnels du secteur et les épicuriens à la recherche d’expériences culinaires authentiques, raffinées et innovantes.</p>
                    </div>
                    <div className={style.containerImg}>
                        <SmartImage
                        thumbId={"bannier_guide"}
                        title={"guides Gault Millau Maroc"}
                        width={1000}
                        height={400}
                    />
                    </div>
                    <div className={style.content}>
                        <p><strong>M. Patrick Hayoun</strong> a ouvert la soirée par un message fort : « Le Maroc dispose d’un patrimoine culinaire d’une richesse exceptionnelle. Gault & Millau Maroc sera un tremplin pour faire rayonner cette excellence au-delà des frontières. »</p>
                        <p><strong>M. Steve Berdah</strong> a exprimé son enthousiasme à l’idée d’implanter la marque dans « une terre d’hospitalité où l’excellence culinaire est une véritable culture ».</p>
                        <p>le Guide Gault & Millau Maroc entend promouvoir la richesse des produits du terroir, la diversité régionale et l’innovation des nouvelles générations de chefs « Ce guide donnera une belle visibilité à nos produits du terroir et aux chefs qui les subliment. C’est une reconnaissance du travail et du talent marocain à l’échelle internationale », a souligné <strong>Chef Lahcen Hafid, L'ambassadeur du Guide</strong>.</p>
                        <p>La première édition du Guide Gault & Millau Maroc paraîtra en <strong>mai 2026</strong>, après plusieurs mois d’enquêtes et de sélections qui <strong>débuteront dès novembre 2025.</strong> Ce lancement marque un tournant pour la gastronomie marocaine, appelée à rayonner encore davantage sur la scène mondiale.</p>
                    </div>
                    <div className={style.videoContainer}>
                            <iframe
                                width="1000"
                                height="500"
                                src={"https://www.youtube.com/embed/YvssDyOpj0M?si=C4a_tTIQUAChYxZm"}
                                title="Steve Berdah President Gault&Millau Maroc"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>
                    <div className={style.content}>
                        <h2>À propos De Gault & Millau</h2>
                        <p>Fondé en 1972, Gault & Millau est l’un des guides gastronomiques les plus respectés au monde, reconnu pour son indépendance et son expertise dans l’évaluation des restaurants et des chefs. Présent dans plus de 20 pays, il continue de promouvoir l’excellence culinaire et l’innovation gastronomique.</p>
                    </div>
                     <div className={style.content}>
                        <h2>À propos du Chef Lahcen Hafid</h2>
                        <p>Chef de renommée internationale, il a occupé des postes clés dans certains des plus prestigieux hôtels parisiens, dont le Hyatt Regency Paris Madeleine, le Sofitel Le Faubourg et le Ritz Paris. Fort de son expérience auprès des plus grands chefs français, Lahcen a décidé de mettre son expertise au service des entreprises en quête d’excellence dans le secteur de l’hôtellerie.</p>
                        <p>L'Ambassadeur <strong>Gault&Millau Maroc</strong> a précisé sur <strong>Radio 2M</strong> que <strong>Gault&Millau</strong> représente un véritable atout pour faire du Maroc un champion de la gastronomie. Il a souligné que cette initiative, rendue possible grâce à <strong>Steve Berdah</strong>, qui a implanté Gault&Millau au Maroc, Gault&Millau constitue une opportunité unique pour les restaurateurs, artisans et chefs marocains de développer leur marque, de valoriser leur savoir-faire et de faire rayonner la richesse culinaire marocaine à l’échelle internationale.</p>
                    </div>
                    <div className={style.videoContainer}>
                            <iframe
                                width="1000"
                                height="500"
                                src={"https://www.youtube.com/embed/a3pRkHADdn4?si=9jG1bTIPOVi6-nUy"}
                                title="Steve Berdah President Gault&Millau Maroc"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NewsDetails;
