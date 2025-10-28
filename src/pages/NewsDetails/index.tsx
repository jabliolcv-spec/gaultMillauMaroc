import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import style from "./style.module.css";
import Footer from "../../components/Footer";
import SmartImage from "../../components/SmartImage";
import {NewsCardData} from "../../Data/NewsData.ts";

interface NewsCardProps {
    id: string;
    theme: string;
    title: string;
    slug: string;
    resume: string;
    thumbId: string;
    content?: string;
    videoUrl?: string;
}

const NewsDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const news = NewsCardData.find((item:NewsCardProps) => item.slug === slug);

    if (!news) {
        return (
            <>
                <Header />
                <main className={style.mainSection}>
                    <h2>Article non trouvé</h2>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className={style.mainSection}>
                <div className={style.Container}>
                    <SmartImage
                        thumbId={news.thumbId}
                        title={news.title}
                        width={1000}
                        height={650}
                    />
                    <p className={style.title}>{news.title}</p>
                    <p className={style.resume}>{news.resume}</p>
                    <div className={style.underlineSection}></div>
                    <div
                        className={style.content}
                        dangerouslySetInnerHTML={{ __html: news.content || "" }}
                    />


                    {news.videoUrl && (<div className={style.videoContainer}>
                            <iframe
                                width="1000"
                                height="500"
                                src={news.videoUrl}
                                title={news.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>)}
                </div>

            </main>
            <Footer />
        </>
    );
};

export default NewsDetails;
