import "./App.css";
import {
  char,
  bgHome,
  porto,
  imgAstri,
  greenFlower,
  pinkFlower,
  Ai,
  figma,
  canva,
  corel,
  cloud,
  tree,
} from "./assets";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="shadow-sm fixed-top navigation">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="gap-5">
              <Nav.Link href="#home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark">
                About Me
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark">
                Experience
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark">
                Design Types
              </Nav.Link>
              <Nav.Link href="#link" className="text-dark">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">Visual/Graphic Designer</Navbar.Brand>
        </Container>
      </Navbar>

      {/* hero*/}
      <div className="hero">
        <Container>
          <Row>
            <Col xs={4}>
              <div>
                <img src={porto} className="img-porto" alt="img-porto" />
                <p className="teks-hero">
                  This is my graphic design portfolio that summarizes some of
                  the design examples I've made so far.
                </p>
                <p className="teks-nama">Siti Astriyani</p>
                <img
                  src={char}
                  className="img-char position-absolute"
                  alt="img-char"
                />
              </div>
            </Col>
            <Col>
              <img
                src={bgHome}
                alt="img-home"
                className="position-absolute img-fluid img-bg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* main content */}
      <div className="main-content ">
        <Container>
          <Row>
            <Col xs={3}>
              <img src={imgAstri} alt="Astri" className="img-astri" />
            </Col>
            <Col>
              <p className="teks-astri">Siti Astriyani,</p>
              <div className="underline-astri"></div>
              <p className="teks-deskripsi-main">
                I am a college student with a great desire to learn new things,
                I like challenges and really want to expand relations wherever I
                am. I like design the most because with design I can develop my
                creativity. Even though I am majoring in International
                Relations, my ambition to develop creativity in design is very
                high.
              </p>
            </Col>
          </Row>

          <Row style={{ marginTop: "90px" }}>
            <Col xs={5}>
              <Row style={{ marginTop: "25px" }}>
                <Row>
                  <div>
                    <div className="education-tittle d-flex position-relative">
                      <div className="ellipse-education"></div>
                      Education
                      <img
                        src={greenFlower}
                        alt="green flower"
                        className="position-absolute  green-flower"
                      />
                    </div>
                  </div>
                </Row>
                <div className="education-container">
                  <div className="line-education"></div>
                  <Row className="pt-4">
                    <Col xs={4} className="ms-5">
                      Currently Studying
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">UPN Veteran Jakarta</p>
                      <p className="m-0">Bachelor of International Relations</p>
                      <p>GPA : 3.81/4.00</p>
                    </Col>
                  </Row>
                  <Row className="ms-5 ">
                    <Col xs={4}>Aug - Dec 2022</Col>
                    <Col>
                      <p className="fw-bold m-0">
                        RevoU X Kampus Merdeka Batch 3
                      </p>
                      <p>Final Score : 82/100 (A)</p>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row>
                <Row>
                  <div style={{ marginTop: "45px" }}>
                    <div className="software-tittle d-flex position-relative">
                      <div className="ellipse-software"></div>
                      Software
                      <img
                        src={pinkFlower}
                        alt="pink flower"
                        className="position-absolute  pink-flower"
                      />
                    </div>
                  </div>
                </Row>
                <Row className="m-0 p-0">
                  <div className="software-container posion-relative">
                    <div className="line-software"></div>
                    <div className="software-content d-flex justify-content-between">
                      <img src={Ai} alt="Ai" />
                      <img src={corel} alt="corel" />
                      <img src={figma} alt="figma" />
                      <img src={canva} alt="canva" />
                    </div>
                  </div>
                </Row>
              </Row>
            </Col>
            <Col style={{ marginLeft: "5%" }}>
              <Row>
                <div className="organization-wrapper position-relative">
                  <img
                    src={pinkFlower}
                    alt="pink flower"
                    className="experience-flower"
                  />
                  <div className="organization-container d-flex align-items-center">
                    <div className="ellipse-organization"></div>
                    Organization
                  </div>
                  <div className="experience-container d-flex align-items-center">
                    <div className="ellipse-experience"></div>& Experience
                  </div>
                </div>
              </Row>
              <Row>
                <div className="content-organization-container position-relative">
                  <div className="line-organization"></div>
                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2023 - Present
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">
                        Direktorat Digital Business Telkom
                      </p>
                      <p>DMarketing Intern (Visual Designer)</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2023
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">Kedhai Solmed</p>
                      <p>Graphic Designer Intern</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2023
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">Psikologi Tanpa Nama</p>
                      <p>Content Design Intern</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2023
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">Teras Muda</p>
                      <p>Graphic Designer Intern</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2022
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">
                        HIMA HI (IR Student Association)
                      </p>
                      <p>Cominfo Staff</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} className="ms-5 ps-5">
                      2022
                    </Col>
                    <Col>
                      <p className="fw-bold m-0">LDK Uswah UPNVJ</p>
                      <p>Vice Head of the Broadcasting Department</p>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>

        <img
          src={cloud}
          alt="cloud"
          className="position-absolute"
          style={{ top: "85%", zIndex: 0 }}
        />
        <img
          src={tree}
          alt="cloud"
          className="position-absolute bottom-0 end-0"
        />
      </div>
    </>
  );
}

export default App;
