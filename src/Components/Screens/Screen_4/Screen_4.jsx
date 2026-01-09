import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Screen_4.module.css'
import image_1 from '/public/screen_4_image_4.png'
import image_2 from '/public/screen_4_image_4.1.png'

const Screen_4 = () => {
    return (
        <>
            <div className={styles.main_div_screen_4}>
                <Row className="w-100 m-0">

                    <Col xs={12} md={6} className={`${styles.sub_1} p-0`}>
                        <div className={styles.card_content}>
                            <div className={styles.text_content}>
                                <div className={styles.heading_Name}>
                                    <p>Fitness +</p>
                                </div>

                                <div className={styles.paragragh}>
                                    <p>Start the year strong with guided workout and meditations.</p>
                                </div>

                                <p className={styles.subtext}>Get up to 3 months on us.</p>

                                <div className={styles.screens_button_4}>
                                    <Button variant="primary">Learn More</Button>
                                    <Button variant="outline-primary">Try it free</Button>
                                </div>
                            </div>

                            <div className={styles.image_4}>
                                <img src={image_1} alt="Fitness Plus" />
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className={`${styles.sub_2} p-0`}>
                        <div className={styles.card_content}>
                            <div className={styles.text_content}>
                                <div className={styles.heading_Name}>
                                    <p>MacBook Pro 14</p>
                                </div>

                                <div className={styles.paragragh}>
                                    <p>Supercharged by M5.</p>
                                </div>

                                <div className={styles.screens_button_4}>
                                    <Button variant="primary">Learn More</Button>
                                    <Button variant="outline-light">Buy</Button>
                                </div>
                            </div>

                            <div className={styles.image_4}>
                                <img src={image_2} alt="MacBook Pro" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default Screen_4
