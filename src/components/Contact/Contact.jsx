import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <p>Let’s connect! You can reach me through:</p>
          <div className="contact-links">
            <a href="mailto:yourmail@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="icon" /> malabalaganesh@gmail.com
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon" /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/mala-balaganesh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xaykzqyr" 
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
