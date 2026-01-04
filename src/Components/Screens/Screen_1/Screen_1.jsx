import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Screen_1 = () => {
    return (
        <div>

            <div>
                <Row>
                    <Col xs={12}>iPhone</Col>
                </Row>
            </div>
            <Row>
                <Col xs={12}><p>Say hello to the latest generation of iPhone</p></Col>
            </Row>
            <Row>
                <Col><button>Learn More</button></Col>
                <Col> <button>Shop iPhone</button></Col>
            </Row>


            {/* <div>iPhone</div>
      <div>
        <p>Say hello to the latest generation of iPhone</p>
      </div>
      <div>
        <button>Learn More</button>
        <button>Shop iPhone</button>
      </div>
      <div>

      </div> */}
        </div>
    )
}

export default Screen_1