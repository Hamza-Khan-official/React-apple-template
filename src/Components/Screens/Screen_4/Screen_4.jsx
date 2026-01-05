import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Screen_4.module.css'
import image_1 from '/public/screen_4_image_4.png'
import image_2 from '/public/screen_4_image_4.1.png'

const Screen_4 = () => {
    return (
        <div className={styles.main_div_screen_4}>
            <Row className="w-100">

                <Col xs={12} md={6} className={styles.sub_1}>
                    <div className={styles.heading_Name}>
                        <p>Fitness +</p>
                    </div>

                    <div className={styles.paragragh}>
                        <p>Start the year strong with guided workout and meditations.</p>
                    </div>

                    <p>Get up to 3 months on us.</p>

                    <div className={styles.screens_button_4}>
                        <Button>Learn More</Button>
                        <Button>Try it free</Button>
                    </div>
                    <div className={styles.image_4}>
                        <img src={image_1} alt="" />
                    </div>
                </Col>

                <Col xs={12} md={6} className={styles.sub_2}>
                    <div className={styles.heading_Name}>
                        <p>MacBook Pro 14</p>
                    </div>

                    <div className={styles.paragragh}>
                        <p>Supercharged by M5.</p>
                    </div>

                    <div className={styles.screens_button_4}>
                        <Button>Learn More</Button>
                        <Button>Buy</Button>
                    </div>
                    <div className={styles.image_4}>
                        <img src={image_2} alt="" />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Screen_4
