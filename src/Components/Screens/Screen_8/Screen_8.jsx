import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Screen_8.module.css';

// Import your banner images
import b1 from "../../../../public/carosel_1_images/carosel_1_image_1.jpg";
import b2 from "../../../../public/carosel_1_images/carosel_1_image_2.jpg";
import b3 from "../../../../public/carosel_1_images/carosel_1_image_3.jpg";
import b4 from "../../../../public/carosel_1_images/carosel_1_image_4.jpg";
import b5 from "../../../../public/carosel_1_images/carosel_1_image_5.jpg";
import b6 from "../../../../public/carosel_1_images/carosel_1_image_6.jpg";
import b7 from "../../../../public/carosel_1_images/carosel_1_image_7.jpg";
import b8 from "../../../../public/carosel_1_images/carosel_1_image_8.jpg";
import b9 from "../../../../public/carosel_1_images/carosel_1_image_9.jpg";

// Import your thumbnail images
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
    const [activeIndex, setActiveIndex] = useState(0);

    // Slides data with your images
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

    // Get previous and next index for peek effect
    const getPrevIndex = () => (activeIndex - 1 + slides.length) % slides.length;
    const getNextIndex = () => (activeIndex + 1) % slides.length;

    // Handle slide change
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
                
                {/* Banner Section with Peek Effect */}
                <div className={styles.bannerSection}>
                    
                    {/* Left Peek Image */}
                    <div className={styles.peekLeft}>
                        <img 
                            src={slides[getPrevIndex()].banner} 
                            alt="Previous slide"
                        />
                    </div>

                    {/* Main Bootstrap Carousel */}
                    <div className={styles.carouselMain}>
                        <Carousel 
                            activeIndex={activeIndex} 
                            onSelect={handleSelect}
                            interval={3000}
                            indicators={false}
                            controls={false}
                            fade={false}
                        >
                            {slides.map((slide, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={slide.banner}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    {/* Right Peek Image */}
                    <div className={styles.peekRight}>
                        <img 
                            src={slides[getNextIndex()].banner} 
                            alt="Next slide"
                        />
                    </div>
                </div>

                {/* Thumbnail Navigation Row */}
                <div className={styles.thumbnailContainer}>
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={slide.thumb} alt={`Thumbnail ${index + 1}`} />
                        </button>
                    ))}
                </div>

                {/* Dot Navigation */}
                <div className={styles.dotsContainer}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AppleCarousel;