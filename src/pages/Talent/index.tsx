import Header from "../../components/Header/header";
import style from "../style.module.css";
import Footer from "../../components/Footer";

const Talent = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <h2>Les Jeunes Talents Gault&amp;Millau Maroc : la nouvelle génération en lumière</h2>
                    <p>
                        Derrière chaque grand chef se cache un jour un <strong>jeune talent</strong> animé par la passion, le travail et le rêve d’exceller.
                        <strong>Gault&amp;Millau Maroc</strong> croit profondément en cette nouvelle génération de cuisiniers, pâtissiers, boulangers,
                        sommeliers et artisans du goût qui incarnent l’avenir de la gastronomie marocaine.
                    </p>

                    <p>
                        À travers le programme <strong>“Jeunes Talents Gault&amp;Millau”</strong>, notre mission est simple :
                        <strong>repérer, accompagner et faire rayonner</strong> ces professionnels prometteurs qui réinventent la cuisine marocaine
                        tout en respectant ses traditions et son identité.
                    </p>

                    <h3>Mettre en avant la nouvelle génération de chefs</h3>

                    <p>
                        Nos équipes sillonnent le Royaume pour découvrir les profils les plus inspirants :
                        ceux qui, dans les cuisines, les pâtisseries, les hôtels ou les riads,
                        expriment leur créativité, leur exigence et leur amour du produit.
                    </p>

                    <p>
                        Être distingué comme <strong>Jeune Talent Gault&amp;Millau Maroc</strong> est bien plus qu’un titre :
                        c’est une <strong>reconnaissance du potentiel, du travail et de la passion</strong>.
                        C’est aussi un tremplin pour une carrière prometteuse, soutenue par le regard bienveillant du guide.
                    </p>

                    <h3>Une distinction qui ouvre des portes</h3>

                    <p>
                        Chaque année, <strong>Gault&amp;Millau Maroc</strong> met à l’honneur les jeunes professionnels les plus remarquables
                        lors d’événements et de cérémonies dédiés.
                        Ces distinctions permettent de <strong>donner de la visibilité</strong> à leurs parcours,
                        de favoriser les rencontres avec les grands chefs et de créer des passerelles avec le monde de la gastronomie internationale.
                    </p>

                    <p>
                        En rejoignant la communauté des <strong>Jeunes Talents Gault&amp;Millau</strong>,
                        les lauréats accèdent à un réseau d’opportunités : formations, collaborations,
                        participations à des concours ou à des événements gastronomiques prestigieux.
                    </p>

                    <h3>Un engagement pour l’avenir de la gastronomie marocaine</h3>

                    <p>
                        <strong>Gault&amp;Millau Maroc</strong> s’engage à soutenir la nouvelle génération,
                        à valoriser les métiers de la restauration et à encourager la transmission du savoir.
                        Notre ambition est de faire émerger des parcours inspirants, d’offrir une scène à ces talents
                        et de les aider à faire rayonner la gastronomie marocaine au-delà de nos frontières.
                    </p>

                    <p>
                        Parce que la cuisine de demain se construit aujourd’hui,
                        nous croyons que ces jeunes chefs et artisans sont les <strong>ambassadeurs du Maroc gastronomique de demain</strong>.
                    </p>

                    <h3>Un appel à tous les jeunes passionnés</h3>

                    <p>
                        Vous êtes jeune cuisinier, pâtissier, artisan ou chef en devenir ?
                        Vous portez en vous la passion du goût, du partage et de la créativité ?
                        <strong>Rejoignez Gault&amp;Millau Maroc</strong> et faites partie de cette belle aventure humaine et culinaire.
                    </p>

                    <p>
                        <strong>Votre talent mérite d’être reconnu.</strong>
                        Ensemble, faisons briller la nouvelle génération de la gastronomie marocaine.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Talent;
