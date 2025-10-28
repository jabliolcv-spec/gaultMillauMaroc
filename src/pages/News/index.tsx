import Header from '../../components/Header/header'
import style from "./style.module.css";
import SingleNewsCard from '../../components/cards/UneCard';
import Footer from '../../components/Footer';
import {NewsCardData} from "../../Data/NewsData.ts";


const News = () => {
    return (
        <>
            <Header />
            <main className={style.mainSection}>
                {
                    NewsCardData.map((data, i) =>(
                        <div className={style.newsContainer}>
                            <SingleNewsCard news={data} key={i} />
                        </div>
                    ))
                }
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default News