import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";


const KitMedia = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Le Kit Média</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.Container}>
                    <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" target="_blank" rel="noopener noreferrer" className={style.kitMedia}>
                        Ouvrir le Kit Média (PDF)
                    </a>
                    <object
                        data="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf"
                        type="application/pdf"
                        width="100%"
                        height="600"
                    >
                        <p>
                            Votre navigateur ne peut pas afficher le PDF.&nbsp;
                            <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" download>Télécharger le fichier</a>
                        </p>
                    </object>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default KitMedia;


