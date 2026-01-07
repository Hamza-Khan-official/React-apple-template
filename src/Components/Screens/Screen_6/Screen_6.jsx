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
            <Row className="w-100">

                <Col xs={12} md={6} className={styles.sub_1}>
                    <div className={styles.heading_Name}>
                        <p>Trade IN</p>
                    </div>

                    <div className={styles.paragragh}>
                       <p>Get up to $180–$670</p> 
                       <p>in credit when you trade in</p>
                       <p>iPhone 13 or higher.</p>
                    </div>

                    <div className={styles.screens_button_6}>
                        <Button>Get your estimate</Button>
                    </div>
                    <div className={styles.image_6}>
                        <img src={image_1} alt="" />
                    </div>
                </Col>

                <Col xs={12} md={6} className={styles.sub_2}>
                    <div className={styles.heading_Name}>
                        <p>Crad</p>
                    </div>

                    <div className={styles.paragragh}>
                       <p> Get up to 3% Daily Cash back</p> 
                       <p>with every purchase.</p>
                    </div>

                    <div className={styles.screens_button_6}>
                        <Button>Learn More</Button>
                        <Button>Apply now</Button>
                    </div>
                    <div className={styles.image_6}>
                        <img src={image_2} alt="" />
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Screen_6
