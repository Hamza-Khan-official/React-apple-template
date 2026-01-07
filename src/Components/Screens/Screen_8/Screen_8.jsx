import React, { useState, useEffect, useRef } from 'react';

// Import banner images
import b1 from "../../../../public/carosel_1_images/carosel_1_image_1.jpg";
import b2 from "../../../../public/carosel_1_images/carosel_1_image_2.jpg";
import b3 from "../../../../public/carosel_1_images/carosel_1_image_3.jpg";
import b4 from "../../../../public/carosel_1_images/carosel_1_image_4.jpg";
import b5 from "../../../../public/carosel_1_images/carosel_1_image_5.jpg";
import b6 from "../../../../public/carosel_1_images/carosel_1_image_6.jpg";
import b7 from "../../../../public/carosel_1_images/carosel_1_image_7.jpg";
import b8 from "../../../../public/carosel_1_images/carosel_1_image_8.jpg";
import b9 from "../../../../public/carosel_1_images/carosel_1_image_9.jpg";

// Import thumbnail images
import t1 from "../../../../public/carosel_2_images/carosel_2_image_1.jpg";
import t2 from "../../../../public/carosel_2_images/carosel_2_image_2.jpg";
import t3 from "../../../../public/carosel_2_images/carosel_2_image_3.jpg";
import t4 from "../../../../public/carosel_2_images/carosel_2_image_4.jpg";
import t5 from "../../../../public/carosel_2_images/carosel_2_image_5.jpg";
import t6 from "../../../../public/carosel_2_images/carosel_2_image_6.jpg";
import t7 from "../../../../public/carosel_2_images/carosel_2_image_7.jpg";
import t8 from "../../../../public/carosel_2_images/carosel_2_image_8.jpg";
import t9 from "../../../../public/carosel_2_images/carosel_2_image_9.jpg";

const AppleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const thumbsContainerRef = useRef(null);

    const slides = [
        { banner: b1, thumb: t1 },
        { banner: b2, thumb: t2 },
        { banner: b3, thumb: t3 },
        { banner: b4, thumb: t4 },
        { banner: b5, thumb: t5 },
        { banner: b6, thumb: t6 },
        { banner: b7, thumb: t7 },
        { banner: b8, thumb: t8 },
        { banner: b9, thumb: t9 }
    ];

    const getPrevIndex = () => (currentIndex - 1 + slides.length) % slides.length;
    const getNextIndex = () => (currentIndex + 1) % slides.length;

    /* ================= AUTO PLAY ================= */
    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isPlaying, slides.length]);

    /* ================= DOT SCROLL CENTER ================= */
    useEffect(() => {
        const container = thumbsContainerRef.current;
        if (!container) return;

        const active = container.children[currentIndex];
        if (!active) return;

        const left =
            active.offsetLeft -
            container.offsetWidth / 2 +
            active.offsetWidth / 2;

        container.scrollTo({ left, behavior: "smooth" });
    }, [currentIndex]);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>

                {/* ================= BANNER WITH PEEK ================= */}
                <div style={styles.bannerSection}>
                    {/* Previous Half Image */}
                    <div style={styles.peekLeft}>
                        <img 
                            src={slides[getPrevIndex()].banner} 
                            alt="" 
                            style={styles.peekImage}
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
                                    <img src={slide.banner} alt="" style={styles.bannerImage} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Half Image */}
                    <div style={styles.peekRight}>
                        <img 
                            src={slides[getNextIndex()].banner} 
                            alt="" 
                            style={styles.peekImage}
                        />
                    </div>
                </div>

                {/* ================= THUMBNAILS ================= */}
                <div ref={thumbsContainerRef} style={styles.thumbContainer}>
                    {slides.map((slide, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                                ...styles.thumb,
                                ...(currentIndex === i
                                    ? styles.thumbActive
                                    : styles.thumbInactive)
                            }}
                        >
                            <img src={slide.thumb} alt="" style={styles.thumbImage} />
                        </button>
                    ))}
                </div>

                {/* ================= APPLE DOT NAV ================= */}
                <div
                    className="dotnav"
                    role="tablist"
                    style={styles.dotsContainer}
                >
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={currentIndex === i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setCurrentIndex(i)}
                            style={{
                                ...styles.dot,
                                ...(currentIndex === i
                                    ? styles.dotActive
                                    : styles.dotInactive)
                            }}
                        />
                    ))}

                    {/* ================= PLAY / PAUSE ================= */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        aria-label={isPlaying ? "Pause gallery" : "Play gallery"}
                        style={styles.playPause}
                    >
                        {isPlaying ? "❚❚" : "▶"}
                    </button>
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
    peekImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        imageRendering: 'crisp-edges'
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
    bannerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
    },
    thumbContainer: {
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '4px 0',
        WebkitOverflowScrolling: 'touch',
        marginBottom: '24px'
    },
    thumb: {
        flexShrink: 0,
        width: '235px',
        height: '132px',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: 'none',
        padding: 0,
        background: 'none',
        position: 'relative'
    },
    thumbActive: {
        opacity: 1,
        transform: 'scale(1)',
        boxShadow: '0 0 0 3px #0071e3'
    },
    thumbInactive: {
        opacity: 0.6,
        transform: 'scale(0.95)',
        boxShadow: 'none'
    },
    thumbImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        pointerEvents: 'none'
    },
    dotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        alignItems: 'center',
        padding: '20px 0'
    },
    dot: {
        height: '8px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: 'none',
        padding: 0,
        background: 'none'
    },
    dotActive: {
        width: '32px',
        backgroundColor: '#0071e3'
    },
    dotInactive: {
        width: '8px',
        backgroundColor: '#d2d2d7'
    },
    playPause: {
        marginLeft: '12px',
        padding: '8px 12px',
        backgroundColor: '#0071e3',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '500'
    }
};

// CSS to hide scrollbar
const styleElement = document.createElement("style");
styleElement.textContent = `
  div::-webkit-scrollbar {
    display: none;
  }
`;
if (!document.head.querySelector('style[data-carousel-styles]')) {
    styleElement.setAttribute('data-carousel-styles', 'true');
    document.head.appendChild(styleElement);
}

export default AppleCarousel;