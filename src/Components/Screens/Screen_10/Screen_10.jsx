import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import b1 from "../../../../public/carosel_videos/carosel_video_1.mp4";
import b2 from "../../../../public/carosel_videos/carosel_video_2.mp4";
import b3 from "../../../../public/carosel_videos/carosel_video_3.mp4";
import b4 from "../../../../public/carosel_videos/carosel_video_4.mp4";
import b5 from "../../../../public/carosel_videos/carosel_video_5.mp4";
import b6 from "../../../../public/carosel_videos/carosel_video_6.mp4";

import styles from './Screen_10.module.css'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* <br /><br /><br /> */}
            <div className={styles.main}>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={3000}
                >
                    <Carousel.Item>
                        <video className="d-block w-100" src={b1} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-100" src={b2} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-100" src={b3} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-100" src={b4} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-100" src={b5} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video className="d-block w-100" src={b6} autoPlay loop muted />
                        <Carousel.Caption>
                            <div className={styles.butt_para}>
                                <button type="button" class="btn btn-light rounded-5">Watch the film</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                                <p><strong>Design for Every Student</strong> Accessibility</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <br /><br /><br /> */}
        </>
    );
}

export default ControlledCarousel;
