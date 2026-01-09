import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Screen_5.module.css'
import image_1 from '/public/screen_6_image_6.png'
import image_2 from '/public/screen_6_image_6.1.png'

const Screen_5 = () => {
    return (
        <div className={styles.main_div_screen_5}>
            <Row className="w-100 m-0">

                <Col xs={12} md={6} className={`${styles.sub_1} p-0`}>
                    <div className={styles.card_content}>
                        <div className={styles.text_content}>
                            <div className={styles.heading_Name}>
                                <p>Watch Ultra 3</p>
                            </div>

                            <div className={styles.paragragh}>
                                <p>Personal beast.</p>
                            </div>

                            <div className={styles.screens_button_5}>
                                <Button variant="primary">Learn More</Button>
                                <Button variant="outline-primary">Buy</Button>
                            </div>
                        </div>

                        <div className={styles.image_5}>
                            <img src={image_1} alt="Apple Watch Ultra 3" />
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6} className={`${styles.sub_2} p-0`}>
                    <div className={styles.card_content}>
                        <div className={styles.text_content}>
                            <div className={styles.heading_Name}>
                                <p>Airpods Pro 3</p>
                            </div>

                            <div className={styles.paragragh}>
                                <p>The world's best in-ear</p>
                                <p>Active Noise Cancellation.</p>
                            </div>

                            <div className={styles.screens_button_5}>
                                <Button variant="primary">Learn More</Button>
                                <Button variant="outline-light">Buy</Button>
                            </div>
                        </div>

                        <div className={styles.image_5}>
                            <img src={image_2} alt="AirPods Pro 3" />
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Screen_5
