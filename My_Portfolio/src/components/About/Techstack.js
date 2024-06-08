import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCode, CgCPlusPlus, CgGit } from "react-icons/cg";
import { DiJava, DiPython, DiHtml5, DiCss3, DiMysql, DiDjango, DiReact, DiJavascript1, DiVisualstudio, DiGithub, DiGit } from "react-icons/di";
import { SiFlask, SiPandas, SiNumpy, SiTensorflow, SiEclipseide, SiKaggle, SiMicrosoftoffice } from "react-icons/si";
import { FaDatabase, FaGoogle, FaFileExcel } from "react-icons/fa";

const techStacks = [
  { icon: <CgCode />, name: "C" },
  { icon: <DiJava />, name: "Java (Basic)" },
  { icon: <DiPython />, name: "Python, Core Python" },
  { icon: <DiHtml5 />, name: "HTML" },
  { icon: <DiCss3 />, name: "CSS" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <FaDatabase />, name: "PL/SQL" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiTensorflow />, name: "TensorFlow" }
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStacks.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
