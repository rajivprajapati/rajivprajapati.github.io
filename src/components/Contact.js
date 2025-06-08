import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact| ${firstName} ${lastName}`;
    console.log(message);
    let bm = message;
    bm = bm.replace(/\n/g, "%0A");
    const body = `
      firstName: ${firstName}%0A
      lastName: ${lastName}%0A
      email: ${email}%0A
      phone: ${phone}%0A
      message: ${bm}
    `;
    const mailToURL = `mailto:iamrajivprajapati@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailToURL;
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={phone}
                    placeholder="Phone No."
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button onClick={handleForm}>
                    <span>Email</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
