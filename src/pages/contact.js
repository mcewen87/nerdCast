import React from "react"
import "../styles/main.css"

const ContactFormPage = () => (
  <div className="container">
    <div style={{ minHeight: "80vh" }} className="content">
      <h1 style={{ marginTop: "100px" }}>Contact The Holy Nerdy Team</h1>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="standardColumn">
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="standardColumn">
          <label>Message:</label>
          <textarea
            style={{ resize: "none", height: "200px" }}
            name="message"
          />
        </div>
        <button style={{ float: "right" }} type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
)

export default ContactFormPage
