import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        {/* <h5 linux/> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        {/* <h5 VS Code/> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        {/* <h5 Postman/> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        {/* <h5 Git/> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        {/* <h5 Hiroku/> */}
      </Col>
    </Row>
  );
}

export default Toolstack;
