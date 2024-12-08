import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => (
            <Row className="my-5" key={index}>
              {/* Animation Section - Smaller and Left-Aligned */}
              <Col lg="6" className="mb-4">
                <div className="d-flex justify-content-center">
                  <DisplayLottie
                    animationPath={section.lottieAnimationFile}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                {section.softwareSkills.slice(4).map((softwareSkill, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="h3 mb-2">{softwareSkill.sectionName}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {softwareSkill.skills.map((skill, j) => (
                        <Fragment key={j}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" />
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </Col>

              {/* Skills Section - Right Side (First Three Sections) */}
              <Col lg="6" className="mb-4">
                {section.softwareSkills.slice(0, 4).map((softwareSkill, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="h3 mb-2">{softwareSkill.sectionName}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {softwareSkill.skills.map((skill, j) => (
                        <Fragment key={j}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" />
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </Col>

              {/* Skills Section Directly Under Animation (Last Two Sections) */}
              
            </Row>
          ))}
        </Container>
      </Fade>
    )
  );
};









export default Skills;
