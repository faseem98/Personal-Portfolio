import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
// import axios from "axios";
// import { useState } from "react";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  //const [formData, setFormData] = useState(new FormData());

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!(formData.name && formData.email && formData.message)) {
  //     alert("Something went wrong!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/submitForm",
  //       formData
  //     );
  //     console.log(response.data.message); // Log the response from the backend

  //     alert(`Thanks ${formData.name}, I will shortly connect with you!`);
  //   } catch (error) {
  //     console.error("Error submitting the form:", error);

  //     alert("Backend Server was not Running while submitting the form.");
  //   }

  //   setFormData({});
  // };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/* <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:faseemahm98@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        faseemahm98@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+91 8610718783`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91- 86XXXXXX83</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/1BzhgBRmMnF52ZkM7"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          T.Nagar, Chennai.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0647804960136!2d80.2347338!3d13.0315467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ab73786ca7%3A0x83d1f8141eb33822!2sS%20W%20Boag%20Rd%2C%20CIT%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722336872993!5m2!1sen!2sin" frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    title="Contact Me"
                    tabIndex="0"
                    loading="lazy"
                    className=""></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
