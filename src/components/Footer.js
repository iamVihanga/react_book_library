const { Row, Col } = require("react-bootstrap");
const {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaLinkedinIn,
  FaFacebookF,
} = require("react-icons/fa");

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer py-5 text-white">
      <div className="container">
        <Row>
          <Col className="leftContent">
            <h5>ONEXTECH&trade; Solutions</h5>
            <ul className="socialIcons">
              <li>
                <FaGithub></FaGithub>{" "}
              </li>
              <li>
                <FaFacebook></FaFacebook>
              </li>
              <li>
                <FaLinkedinIn></FaLinkedinIn>
              </li>
            </ul>
          </Col>
          <Col className="middleCol">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </Col>
          <Col className="rightContent">
            <h5>Description</h5>
            <p className="Paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur corrupti earum aliquam sit. Molestiae facere a
              dolorem! Eveniet dolore ullam pariatur numquam at, dolor veritatis
              rem asperiores, iusto exercitationem quisquam.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
