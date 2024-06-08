import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant from "../../Assets/Projects/plant.png";
import emotion from "../../Assets/Projects/twitter.jpeg";
import Breast from "../../Assets/Projects/breast.jpg";
import pet from "../../Assets/Projects/pet.jpg";
import ecg from "../../Assets/Projects/ecg.png";
import property from "../../Assets/Projects/property.jpg";
import brain from "../../Assets/Projects/human brain.jpg";
import lung from "../../Assets/Projects/lung.png";
import colon from "../../Assets/Projects/coloncancer.jpg";
import lymphoma from "../../Assets/Projects/lymphoma.png";
import port from "../../Assets/Projects/portfolio.png";
import bank from "../../Assets/Projects/bank.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet}
              isBlog={false}
              title="Pet Park"
              description="As a Team Lead in Java Full Stack Development for Pet Accessories, I've managed various tasks to improve user experience, streamline operations, and encourage innovation in the field."
              ghLink="https://github.com/2100090151/Pet_Park_JFSD/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={property}
              isBlog={false}
              title="MY Home"
              description="This project developed for various aspects of property management, including house listings using Python and Django. My role focused on backend and utilizing SQLite3 and PostgreSQL databases for application infrastructure."
              ghLink="https://github.com/2100090151/MY-Home"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Breast}
              isBlog={false}
              title="Implementation of Medical Imaging Using Machine Learning Algorithms and Deep Neural Networks on Breast Cancer."
              description="As a team lead, spearheading a team effort to deploy machine learning algorithms and deep neural networks for medical imaging specifically targeting heart and breast cancer diagnostics."
              kaggleLink="https://www.kaggle.com/code/deepak992019/breast-cancer-cnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Implementation of Identification of Plants Nutrient Deficiencies"
              description="As a team lead, I worked on integrate imaging, classification, and analysis techniques utilizing CNN, VGG-16, and VGG-19 models achieving a 97% accuracy in identifying plant nutrient deficiencies."
              kaggleLink="https://www.kaggle.com/code/deepak992019/deep-learning-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecg}
              isBlog={false}
              title="Implementation of ECG Analysis Using Machine Learning Algorithms and Deep Neural Networks on Heart Disease."
              description="As a team lead, spearheading a team effort to deploy machine learning algorithms and deep neural networks for ECG analysis, specifically targeting heart diagnostics."
              kaggleLink="https://www.kaggle.com/code/deepak992019/heart-disease-cnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sentiment Insights: Recognition on US-Twitter Sentimental Analysis Using Tensor Flow"
              description="As a team, we integrated TensorFlow-based text recognition into Twitter sentiment analysis for enriched insights."
              ghLink="https://github.com/2100090151/Sentiment-Insights"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Neural Insights: Chat bot machine on Checking Human Brain Using NLP"
              description="As the team member, I worked on a high-performing NLP-CNN model achieving 92%."
              ghLink="https://github.com/2100090151/Neural-Insights"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lung}
              isBlog={false}
              title="Deep Learning for Lung Cancer Detection"
              description="This project leverages deep learning techniques to accurately detect lung cancer from medical imaging data. By utilizing convolutional neural networks (CNNs), the model aims to assist in early and precise diagnosis of lung cancer, potentially improving patient outcomes."
              kaggleLink="https://www.kaggle.com/code/deepak992019/dl-lung-cancer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colon}
              isBlog={false}
              title="Deep Learning Implementation for Colon Cancer Detection"
              description="ColonoScan utilizes advanced deep learning implementations to identify colon cancer from medical images. This project aims to enhance early diagnosis and treatment, significantly improving patient prognosis and healthcare outcomes."
              kaggleLink="https://www.kaggle.com/code/deepak992019/dl-colon-cancer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lymphoma}
              isBlog={false}
              title="Deep Learning Implementation for Lymphoma Cancer Detection"
              description="LymphoScan employs advanced deep learning techniques to detect lymphoma cancer from medical images. This project aims to improve early diagnosis and treatment, thereby enhancing patient outcomes and healthcare efficiency."
              kaggleLink="https://www.kaggle.com/code/deepak992019/dl-lymphoma-cancer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Insights from Bank Marketing Data"
              description="This project leverages the Bank Marketing Dataset to conduct a comprehensive analysis of marketing tactics and customer behavior. The findings aim to enhance marketing strategies, optimize campaigns, and improve customer engagement in the banking industry."
              kaggleLink="https://www.kaggle.com/code/deepak992019/bba-research-paper"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal Portfolio is a showcase of my work and achievements, built using basic React and leveraging resources available online. It serves as a platform to display my projects, skills, and experiences to potential employers or collaborators, allowing them to get a comprehensive view of my abilities and accomplishments."
              ghLink="https://github.com/2100090151/My_Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
