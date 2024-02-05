import React from 'react'
import '../css/Top.css'
import { Container, Row, Col } from "react-bootstrap";

export default function Top() {
  return (
    <Container fluid className='first'>
      <Row>
        <Col className='position' xs md lg="2">
          <div className="box"></div>
        </Col>
        <Col xs md lg="6">
        <div className="logo"> <text className='color'>SuperBridge</text> <text className='color2'> Consultancy</text> <br /> <text className='color3'>Top Class Tech Consulting</text> </div></Col>
        <Col xs md lg="4">
        <div className="ending">
            <button className='end'>
                <div className="material-symbols-outlined icon">
mail
</div>info@superbridgeconsulting.com</button>
            <button className='end2'>
                <span className="material-symbols-outlined icon2">
phone_in_talk
</span> Call us: (+91) 0948457515</button>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
