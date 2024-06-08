import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiEclipseide,
  SiKaggle,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio, DiGit, DiGithub } from "react-icons/di";
import { FaGoogle, FaFileExcel } from "react-icons/fa";

const techStacks = [
  { icon: <SiWindows/>, name: "Windows" },
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <DiVisualstudio />, name: "Visual Studio" },
  { icon: <SiEclipseide />, name: "Java EE Eclipse" },
  { icon: <FaGoogle />, name: "Google Colab" },
  { icon: <SiKaggle />, name: "Kaggle" },
  { icon: <FaFileExcel />, name: "MS Office" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "MySQL Workbench" },
];

function Toolstack() {
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

export default Toolstack;
