"use client";

import styles from "./card.module.css";
import News from "../../../assets/menu/blog.svg";
import { Link } from "react-router-dom";
import Logo from "../../../assets/GaultMillau.svg";
import { useState } from "react";

import communique_presse from "@/assets/communique_presse.png";
import lahcen_hafid from "@/assets/lahcen_hafid.jpg";
import gala from "@/assets/gala.png";
import SmartImage from "../../SmartImage";


const images: Record<string, string> = {
  communique_presse,
  lahcen_hafid,
  gala,
};

interface NewsCardProps {
    news: {
        theme: string;
        title: string;
        slug: string;
        resume: string;
        thumbId: string;
        content?: string;
        videoUrl?:string;
    };
}

export default function SingleNewsCard({ news }: NewsCardProps) {
    const headerSubtitle = news.theme;
    const cardHref = `/blog/${news.slug}`;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <article className={styles.uneCard}>
            <a href={cardHref} aria-label={news.title} title={news.title}>
                <span className={styles.stretchedLink} aria-hidden="true" />
            </a>

            <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                    <span className={styles.iconWrapper}>
                        <img width={28} height={28} src={News} />
                    </span>
                    <div className={styles.headerTexts}>
                        <span className={styles.headerTitle}>Actualités</span>
                        {headerSubtitle && (
                            <span className={styles.headerSubtitle}>{headerSubtitle}</span>
                        )}
                    </div>
                </div>
                <Link
                    to={cardHref}
                    className={styles.moreBtn}
                    aria-label={news.title}
                    title={news.title}
                >
                    Voir Plus
                </Link>
            </div>

            {/* Details */}
            <div className={styles.details}>
                <div className={styles.contentColumn}>
                    <div className={styles.hrSpacer} />

                    <div className={styles.cardPaddingContainer}>
                        <span className={`${styles.cardTitle} ${styles.clamp3}`}>
                            {news.title}
                        </span>
                    </div>

                    <div className={styles.cardPaddingContainer}>
                        <span
                            className={`${styles.synopsis}`}
                        >
                            {news.resume}
                        </span>
                    </div>

                    <div className={styles.hrSpacer} />

                    <div
                        className={`${styles.cardPaddingContainer} ${styles.buttonsContainer}`}
                    >
                        <Link
                            to={cardHref}
                            className={styles.figmaCardButton}
                            aria-label={news.title}
                            title={news.title}
                        >
                            <span className={`text-uppercase ${styles.ellipsis}`}>
                                Lire Plus
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Thumbnail */}
                <div className={styles.thumbnailWrapper}>
                    <div className={styles.thumbnailFrame}>
                        <SmartImage thumbId={news.thumbId} title={news.title}  width={700} height={464}/>
                        {news.videoUrl && <button className={styles.playButton} onClick={openModal} aria-label="Lire la vidéo">
                                     ▶
                        </button>
                        }
                    </div>
                </div>

                {news.theme && (
                    <span className={styles.themeTag}>{news.theme}</span>
                )}
            </div>

            {isOpen && news.videoUrl && (
                <div
                    className={`${styles.triptychmodal} modal fade show`}
                    style={{ display: "block" }}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className={`${styles["modal-dialog"]} ${styles["modal-fullscreen"]}`}>
                        <div className={styles["modal-content"]}>
                            <div className={styles["modal-header"]}>
                                <img className={styles.logoImg} src={Logo} style={{ maxWidth: "140px" }} />
                                <button
                                    type="button"
                                    className={styles["btn-close"]}
                                    aria-label="Close"
                                    title="Close"
                                    onClick={closeModal}
                                >
                                    X
                                </button>
                            </div>

                            <div className={styles["modal-body"]}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={news.videoUrl || ""}
                                    title={news.title}
                                    className={styles.videoPlayer}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    frameBorder="0"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

