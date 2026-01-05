import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Screen_5.module.css'
import image_1 from '/public/screen_5_image_5.png'
import image_2 from '/public/screen_5_image_5.1.png'

const Screen_5 = () => {
    return (
        <div className={styles.main_div_screen_5}>
            <Row className="w-100">

                <Col xs={12} md={6} className={styles.sub_1}>
                    <div className={styles.heading_Name}>
                        <p>Watch Ultra 3</p>
                    </div>

                    <div className={styles.paragragh}>
                        <p>Personal beast.</p>
                    </div>

                    <div className={styles.screens_button_5}>
                        <Button>Learn More</Button>
                        <Button>Buy</Button>
                    </div>
                    <div className={styles.image_5}>
                        <img src={image_1} alt="" />
                    </div>
                </Col>

                <Col xs={12} md={6} className={styles.sub_2}>
                    <div className={styles.heading_Name}>
                        <p>Airpods Pro 3</p>
                    </div>

                    <div className={styles.paragragh}>
                        <p>The world best in-ear</p>
                        <p>Active Noise Cancellation.</p>
                    </div>

                    <div className={styles.screens_button_5}>
                        <Button>Learn More</Button>
                        <Button>Buy</Button>
                    </div>
                    <div className={styles.image_5}>
                        <img src={image_2} alt="" />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Screen_5
