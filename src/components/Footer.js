import { Container, Row, Col} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container className="cotainer">
                <Row className="align-items-center py-3">
                    <Col sm={6}>
                        <h1 className="logo">Rajiv P.</h1>
                        <p className="de-role">Data Engineer</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/iamrajivprajapati/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="icon-1"/></a>
                            <a href="#f"><img src={navIcon2} alt="icon-2"/></a>
                            <a href="https://www.instagram.com/iamrajivprajapati/" target='_blank' rel='noreferrer'><img src={navIcon3} alt="icon-3"/></a>
                        </div>
                        <p className="mb-0">&copy; {currentYear} Rajiv Prajapati. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}