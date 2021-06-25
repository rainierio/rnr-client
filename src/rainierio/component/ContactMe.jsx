import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";

const ContactMe = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [response, setResponse] = useState("");

  const submitForm = (formData) => {
    Axios.post("http://origin.eba-awajfifh.ap-southeast-2.elasticbeanstalk.com/api/client/contactform", formData)
      .then((res) => {
        setResponse("success");
        reset();
      })
      .catch((err) => {
        setResponse("failed");
      });
  };

  const failedAlert = () => {
    return (
      <Alert variant='danger' onClose={() => setResponse("")} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Please try again</p>
      </Alert>
    );
  };

  const successAlert = () => {
    return (
      <Alert variant='success' onClose={() => setResponse("")} dismissible>
        <Alert.Heading>Yeaay, Your message has been received!</Alert.Heading>
        <p>Thank you for contacting me, will get back to you very soon :)</p>
      </Alert>
    );
  };

  return (
    <div className='contact-form--1'>
      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center pt--40'>
          <div className='col-lg-6 order-2 order-lg-10'>
            <div className='section-title text-center mb--50'>
              <h2 className='title'>
                I'm currently available for freelance work.
              </h2>
              <p className='description'>
                If you have a questions or project that you think you need my
                help with something or just want to have a chat, I am more than
                happy to welcome you. Fill out the form and we'll be in touch
                very soon.
              </p>
            </div>
            <div className='form-wrapper'>
              <form onSubmit={handleSubmit(submitForm)}>
                <label htmlFor='item01'>
                  {errors.name && <span>This field is required</span>}
                  <input
                    type='text'
                    name='name'
                    id='item01'
                    ref={register({ required: true })}
                    placeholder='Your Name *'
                  />
                </label>

                <label htmlFor='item02'>
                  {errors.email && <span>This field is required</span>}
                  <input
                    type='text'
                    name='email'
                    id='item02'
                    ref={register({ required: true })}
                    placeholder='Your email *'
                  />
                </label>

                <label htmlFor='item03'>
                  {errors.subject && <span>This field is required</span>}
                  <input
                    type='text'
                    name='subject'
                    id='item03'
                    ref={register({ required: true })}
                    placeholder='Write a Subject'
                  />
                </label>
                <label htmlFor='item04'>
                  {errors.message?.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.message?.type === "minLength" && (
                    <span>Your message is too short</span>
                  )}
                  <textarea
                    type='text'
                    id='item04'
                    name='message'
                    ref={register({ required: true, minLength: 1 })}
                    placeholder='Your Message'
                  />
                </label>
                <div className='text-center'>
                  {response === "success" && successAlert()}
                  {response === "failed" && failedAlert()}
                  <button
                    className='rn-btn'
                    type='submit'
                    value='submit'
                    name='submit'
                    id='mc-embedded-subscribe'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
