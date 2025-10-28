import Header from "../../components/Header/header";
import style from "../style.module.css";
import Footer from "../../components/Footer";

const Utensils = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <video
                        autoPlay
                        controls
                        loop
                        muted
                        playsInline
                        style={{ width: "100%", height: "100%" }}
                    >
                        <source src="https://assets.gaultmillau.com/assets/60f4c619-3199-47bb-928e-7d91ca38fd12/video" />
                    </video>
                    <h2>Nos collections d’ustensiles</h2>
                    <p>
                        Ici, nous vous présentons une sélection d’ustensiles et d’accessoires qui peuvent vous aider à
                        <strong>&nbsp;briller dans vos cuisines</strong>  des spatules en silicone aux cuillères en bois, en passant par
                        les outils indispensables pour vos créations culinaires.
                    </p>
                    <p>
                        Chaque collection a été pensée pour allier <strong>qualité, praticité et élégance</strong>, afin de vous accompagner
                        dans toutes vos préparations, du simple plat familial aux plus belles recettes gastronomiques.
                    </p>
                    <p>
                        Découvrez nos coups de cœur et laissez-vous inspirer pour faire de votre cuisine un véritable espace de créativité.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Utensils;
