import Header from '../../components/Header/header'
import style from "./home.module.css";
import SingleNewsCard from '../../components/cards/UneCard';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import ImgPresident from '@/assets/president.jpg';
import { NewsCardData } from "../../Data/NewsData.ts";
import video from "@/assets/video/video_home.webm";

const Home = () => {
  return (
    <>
      <Header />
      <section className={style.mainSection}>
        <SingleNewsCard news={NewsCardData[0]} />
      </section>
      <section className={style.bgWhite}>
        <div className={style.titleContainer}>
          <h2 className={style.titleSection}>Le mot du président</h2>
          <div className={style.underlineSection}></div>
        </div>

        <div className={style.container}>
          <div className={style.imageWrapper}>
            <img
              src={ImgPresident}
              alt="Steve Berdah"
              className={style.image}
            />
          </div>

          <div className={style.content}>
            <div className={style.quoteIcon}>“</div>

            <p>
              Je suis ici pour partir à la découverte des jeunes talents culinaires marocains. Nous avons choisi de nous concentrer sur le Maroc, un pays à la richesse gastronomique exceptionnelle. Notre objectif est de juger et de mettre en valeur la véritable cuisine marocaine, dans toute sa diversité et son authenticité. <div className={style.quoteIconEnd}>“</div>
            </p>
            <div className={style.underlineBlack}></div>
            <p>
              <strong>Le Guide Gault&Millau Maroc</strong> se donne ainsi pour mission d’être bien plus qu’un simple carnet d’adresses. Il aspire à révéler et à promouvoir un panorama riche et diversifié, de centaines de restaurants dans trois grandes régions du Royaume. Chaque sélection sera rigoureusement indépendante, pensée pour guider les amateurs de haute gastronomie, les professionnels du secteur et les épicuriens à la recherche d’expériences culinaires authentiques, raffinées et innovantes.
              <br/> En attendant la parution de sa <strong>première édition, en mai 2026</strong>, le Guide Gault & Millau Maroc lancera dès le mois de novembre les premières enquêtes dans les restaurants marocains.
            </p>
            <div className={style.bottomSection}>
              <div>
                <h3 className={style.name}>M. Steve BERDAH</h3>
                <div className={style.underline}></div>
                <p className={style.role}>
                  Président-Directeur Général<br />
                  Gault&amp;Millau Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.bgWhiteSmoke}>
        <div className={style.titleContainer}>
          <h2 className={style.titleSection}>Nos Services</h2>
          <div className={style.underlineSection}></div>
        </div>
        <Services />
      </section>
      <section className={style.videoContainer}>
        <div className={style.titleContainer}>
          <h2 className={style.titleSection}>Kit Média et informations presse</h2>
          <div className={style.underlineSection}></div>
        </div>
        <a href="/media/KIT_MEDIA_GAULTMILLAU_MA.pdf" target="_blank" rel="noopener noreferrer" className={style.kitMedia}>
          Ouvrir le Kit Média (PDF)
        </a>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          style={{ width: "100%", height: "400px" }}
        />

      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home