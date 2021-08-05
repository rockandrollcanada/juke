import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
//import Image from "next/image";
import Image from "react-bootstrap/Image";

export default function Glen() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="/Glen-Smith.jpeg"
              className="rounded"
              alt="Glen Smith"
              width={128}
              height={128}
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="/Glen-Smith.jpeg"
              alt="Glen Smith"
              className="roundedCircle"
              width={128}
              height={128}
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="/Glen-Smith.jpeg"
              alt="Glen Smith"
              className="thumbnail"
              width={128}
              height={128}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
/* <Image
src="/coderock-canada-leaf-logo.png"
className="rounded img-fluid"
alt="Glen Smith"
width={1920}
height={1080}
/>
*/
