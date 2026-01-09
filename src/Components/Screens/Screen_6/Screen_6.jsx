import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Screen_6.module.css'
import image_1 from '/public/screen_7_image_7.png'
import image_2 from '/public/screen_7_image_7.1.png'

const Screen_6 = () => {
    return (
        <div className={styles.main_div_screen_6}>
            <Row className="w-100 m-0">

                <Col xs={12} md={6} className={`${styles.sub_1} p-0`}>
                    <div className={styles.card_content}>
                        <div className={styles.text_content}>
                            <div className={styles.heading_Name}>
                                <p>Apple Trade In</p>
                            </div>

                            <div className={styles.paragragh}>
                                <p>Get up to $180–$670 in credit</p>
                                <p>when you trade in iPhone 13</p>
                                <p>or higher.</p>
                            </div>

                            <div className={styles.screens_button_6}>
                                <Button variant="primary">Get your estimate</Button>
                            </div>
                        </div>

                        <div className={styles.image_6}>
                            <img src={image_1} alt="Apple Trade In" />
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6} className={`${styles.sub_2} p-0`}>
                    <div className={styles.card_content}>
                        <div className={styles.text_content}>
                            <div className={styles.heading_Name}>
                                <p>Apple Card</p>
                            </div>

                            <div className={styles.paragragh}>
                                <p>Get up to 3% Daily Cash back</p>
                                <p>with every purchase.</p>
                            </div>

                            <div className={styles.screens_button_6}>
                                <Button variant="primary">Learn More</Button>
                                <Button variant="outline-primary">Apply now</Button>
                            </div>
                        </div>

                        <div className={styles.image_6}>
                            <img src={image_2} alt="Apple Card" />
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Screen_6