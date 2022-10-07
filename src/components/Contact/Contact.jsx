import React, { useState } from "react";
import { sanity } from "../../sanity";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    sanity.create(contact).then((data) => {
      console.log(data);
      setSuccess(true);
    });
  };

  console.log(success);

  return (
    <div className="mask_effect" id="Contact">
      <div className="container relative">
        <div className="heading">
          <h1>
            Contact <span className="style">.</span>
          </h1>
        </div>
        <div className="contact_main w100 flex flex_wrap">
          <div className="col_2 contact_page">
            <span>7400 Jashore Sadar,Bangladesh</span>
            <a href="mailto:programmershahriarsajeeb@gmail.com">
              programmershahriarsajeeb@gmail.com
            </a>
            <div className="flex w100 align_items_center">
              <a href="https://www.youtube.com/channel/UCHz6Sne9splmvm-q2w1_HWQ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="youtube"
                  className="social_media"
                />
              </a>
              <a href="https://www.instagram.com/dev_shahriar/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="instagram"
                  className="social_media"
                />
              </a>
              <a href="https://www.facebook.com/shahriar.sajeeb.16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt="Facebook"
                  className="social_media"
                />
              </a>
            </div>
          </div>
          <div className="col_2 contact_form">
            {success ? (
              <h1>Thanks for Getting touch!</h1>
            ) : (
              <form
                aria-required={true}
                className="flex w100 column"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Enter your name..."
                  required
                  className="input_contact"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  required
                  className="input_contact"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your subject..."
                  required
                  className="input_contact"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="8"
                  placeholder="Enter your message"
                  required
                  className="input_contact__message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <input type="submit" value="Submit" className="btn" />
              </form>
            )}
          </div>
        </div>
        <p className="copyright">
          © Copyright by <a href="#">Shahriar Sajeeb</a> 2022
        </p>
      </div>
    </div>
  );
};

export default Contact;
