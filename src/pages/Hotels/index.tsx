import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import video from "@/assets/video/video_hotel.webm";
import SmartImage from "../../components/SmartImage";
import ImgHospitality from "@/assets/img_hospitality.png";

const Hotels = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container2}>
                    <div className={style.contentLeft}>
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controlsList="nodownload"
                            style={{ width: "100%", height: "  350px", objectFit: "contain" }}
                        />
                    </div>
                    <div className={style.contentRight}>
                        <h2>L’art de recevoir à la marocaine</h2>
                        <ul>
                            <li>
                                <strong>Gault&Millau Maroc</strong> met à l’honneur l’hôtellerie, les riads qui incarnent l’élégance, l’hospitalité et l’excellence du service marocain. Nos équipes parcourent le Royaume pour découvrir les établissements qui reflètent le mieux cet art de vivre unique, entre tradition et modernité.
                            </li>
                            <li>
                                <strong>Être référencé dans le Guide Gault&Millau Maroc</strong>, c’est bénéficier d’une visibilité nationale et internationale grâce à notre guide papier, notre site web et nos médias partenaires. Un atout majeur pour les hôtels, riads et maisons d’hôtes qui souhaitent développer leur notoriété et faire rayonner la richesse de l’accueil marocain dans le monde.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.containerImg}>
                    <SmartImage
                        thumbId={"bannier_guide"}
                        title={"guides Gault Millau Maroc"}
                        width={1000}
                        height={300}
                    />
                </div>
                <div className={style.Container2}>
                    <div className={style.contentRight}>
                        <h2>Les distinctions Gault&Millau Maroc</h2>
                        <ul>
                            <li>
                                <strong>Gault&Millau Maroc</strong> Chaque établissement évalué par Gault&Millau Maroc peut obtenir une notation allant de 1 à 5 étoiles, reflet du niveau d’excellence et de l’expérience proposée. Les “Sélectionnés Gault&Millau Maroc” sont les adresses qui se distinguent par leur qualité et leur authenticité, tandis que les établissements sponsorisés bénéficient d’une visibilité renforcée à travers nos supports et partenariats, sans que cela n’influence leur évaluation. Cette classification claire et indépendante permet de guider les voyageurs vers les meilleures adresses du Royaume, reconnues pour leur savoir-faire, leur accueil et leur contribution au rayonnement du Maroc.
                            </li>
                        </ul>
                    </div>
                    <div className={`${style.contentLeft} ${style.m4}`}>
                        <img
                            src={ImgHospitality}
                            alt="Banniere Présentation de la mission Gault&Millau"
                            className="responsive-img"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Hotels;
