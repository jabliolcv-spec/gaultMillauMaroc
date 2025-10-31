import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";


const Contact = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.titleContainer}>
                    <h2 className={style.titleSection}>Nous Contacter</h2>
                    <div className={style.underlineSection}></div>
                </div>
                <div className={style.Container}>
                    <div className={style.contentLeft}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.5172987784528!2d-7.6205795554183275!3d33.59459404225073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29ab80a031b%3A0xaeccecfd0f5a5f63!2s81%20Bd%20Moulay%20Hassan%20I%2C%20Casablanca%2020100%2C%20Maroc!5e0!3m2!1sfr!2sfr!4v1761916242284!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0, paddingRight:"10px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map - Gault&Millau Maroc"
                            ></iframe>
                    </div>
                    <div className={style.contentRight}>
                        <h2>Nos coordonnées</h2>
                        <ul>
                            <li>
                                <strong>Mail : </strong>sberdah@gaultmillau.ma / <br/> contact@gaultmillau.ma
                            </li>
                            <li>
                                <strong>Tél : </strong>(+212)6.64.08.21.88
                            </li>
                            <li>
                                <strong>Adresse : </strong> 81 Bd Moulay Hassan I, <br/>Casablanca 20100, Maroc
                            </li>
                            <li>
                                <strong>Site Web : </strong> https://www.gaultmillau.ma
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;


