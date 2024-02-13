"use client";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    // Retrieve form values
    const name = form.current.querySelector("#name").value;
    const email = form.current.querySelector("#email").value;
    const message = form.current.querySelector("#message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_MAIL_SERVICE, process.env.NEXT_PUBLIC_MAIL_TEMPLATE, form.current, process.env.NEXT_PUBLIC_MAIL_APIKEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="kura_tm_contact w-full h-auto clear-both float-left bg-[#f9f9f9] px-0 pt-[140px] pb-[119px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Contact
            </span>
            <h3 className="font-extrabold uppercase">Get in Touch</h3>
          </div>
          <div className="contact_inner w-full h-auto clear-both float-left mt-[40px] flex">
            <div
              className="left w-1/2 pr-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text w-full float-left mb-[42px]">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </p>
              </div>
              <div className="short w-full float-left">
                <ul>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/placeholder.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        San Salvador, El Salvador
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/phone.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        +503 6180 6151
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/mail.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        cparedesdevpi@gmail.com
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/globe.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        https://linktr.ee/cparedesdev
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="right w-1/2 pl-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  // onSubmit={sendEmail}
                  ref={form}
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input id="name" name="name" type="text" placeholder="Name" />
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input id="email" name="email" type="text" placeholder="Email" />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="kura_tm_button" data-position="left">
                    <a id="send_message">
                      <button
                        type="button"
                        onClick={sendEmail}
                        className="bg-secondary-color text-white font-poppins py-2 px-4 rounded-full"
                      >
                        Submit
                        <img
                          className="svg inline-block ml-2"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                  {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
