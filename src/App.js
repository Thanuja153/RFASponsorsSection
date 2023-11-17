import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "./sponsorslogos/lqff-600w.png";

function ContainerExample() {
    return (
        <div className="app-container">
            <Container>
                <h1 className="text-center">Thanks for Trusting Us</h1>
                <Row className="justify-content-center">
                    <Col className="col-6 col-md-3  m-4 text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className="img-fluid   max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3  m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className=" img-fluid   max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3 m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className="img-fluid   max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3 m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className="img-fluid   max-height-img"></img>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-6 col-md-3 m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className=" img-fluid  max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3 m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className="img-fluid   max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3 m-4  text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className=" img-fluid  max-height-img"></img>
                    </Col>
                    <Col className="col-6 col-md-3 m-4 text-center mx-auto">
                        <img
                            src={image1}
                            alt="intuitive"
                            className=" img-fluid   max-height-img"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContainerExample;
