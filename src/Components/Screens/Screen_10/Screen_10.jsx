import React, { useState, useEffect } from 'react';

// Import banner videos
import b1 from "../../../../public/carosel_videos/carosel_video_1.mp4";
import b2 from "../../../../public/carosel_videos/carosel_video_2.mp4";
import b3 from "../../../../public/carosel_videos/carosel_video_3.mp4";
import b4 from "../../../../public/carosel_videos/carosel_video_4.mp4";
import b5 from "../../../../public/carosel_videos/carosel_video_5.mp4";
import b6 from "../../../../public/carosel_videos/carosel_video_6.mp4";

const Screen_10 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const slides = [
        { banner: b1 },
        { banner: b2 },
        { banner: b3 },
        { banner: b4 },
        { banner: b5 },
        { banner: b6 },
    ];

    const getPrevIndex = () => (currentIndex - 1 + slides.length) % slides.length;
    const getNextIndex = () => (currentIndex + 1) % slides.length;

    /* ================= AUTO PLAY - 5 SECONDS ================= */
    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 5000); // 5 seconds ki timer

        return () => clearInterval(timer);
    }, [isPlaying, slides.length]);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>

                {/* ================= BANNER WITH PEEK ================= */}
                <div style={styles.bannerSection}>
                    {/* Previous Half Video */}
                    <div style={styles.peekLeft}>
                        <video 
                            src={slides[getPrevIndex()].banner}
                            style={styles.peekVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    {/* Main Banner */}
                    <div style={styles.bannerWrapper}>
                        <div
                            style={{
                                ...styles.bannerSlider,
                                transform: `translateX(-${currentIndex * 100}%)`
                            }}
                        >
                            {slides.map((slide, i) => (
                                <div key={i} style={styles.bannerSlide}>
                                    <video 
                                        src={slide.banner}
                                        style={styles.bannerVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Half Video */}
                    <div style={styles.peekRight}>
                        <video 
                            src={slides[getNextIndex()].banner}
                            style={styles.peekVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        width: '100%',
        backgroundColor: '#f5f5f7',
        padding: '40px 0'
    },
    container: {
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 20px'
    },
    bannerSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
        width: '100%'
    },
    peekLeft: {
        width: '15%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '12px',
        opacity: 0.5
    },
    peekRight: {
        width: '15%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '12px',
        opacity: 0.5
    },
    peekVideo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    bannerWrapper: {
        flex: 1,
        height: '500px',
        overflow: 'hidden',
        borderRadius: '18px',
        position: 'relative',
        backgroundColor: '#000',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
    },
    bannerSlider: {
        display: 'flex',
        height: '100%',
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    bannerSlide: {
        minWidth: '100%',
        height: '100%',
        position: 'relative'
    },
    bannerVideo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
    }
};

export default Screen_10;