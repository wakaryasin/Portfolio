import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiPython, DiNodejs,DiGo,DiJava } from "react-icons/di";
import { SiFastapi,SiExpress,SiKotlin} from "react-icons/si";

function Technologies() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
		 <strong className="purple">Mobile Technologies</strong>
	   </h1>
			<Col xs={4} md={2} className="tech-icons">
				<SiKotlin />
				<p>Kotlin</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava/>
				<p>Java</p>
			</Col>
   
		</Row>
	);
}

export default Technologies;
