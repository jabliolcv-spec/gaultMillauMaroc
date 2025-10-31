import Header from '../../components/Header/header'
import style from "./style.module.css";
import Footer from '../../components/Footer';
import video from "@/assets/video/video_artisan.webm";

const Artisan = () => {
  return (
    <>
      <Header />
      <section className={style.mainSection}>
        <div className={style.titleContainer}>
          <h2 className={style.titleSection}>Artisanat marocain</h2>
          <div className={style.underlineSection}></div>
        </div>

        <div className={style.container}>
          <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          style={{ width: "100%", height: "500px", objectFit:"cover" }}
        />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Artisan