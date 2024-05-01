import React from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = React.useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_rej6xz6', 'template_mocri3t', form.current, {
          publicKey: 'NmUqYQUvy5KhST0yW',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
   <><div className="Join" id='join-us'>
          <div className="left-j">
              <hr />
              <div><span className='stroke-text'>Ready to</span><span>Level up</span></div>
              <div><span>your body</span><span className='stroke-text'>with us?</span></div>
          </div>
          <div className="right-j">
              <form className="email-container" netlify ref={form} onSubmit={sendEmail}>
                  <input netlify type="email" name='user_email' placeholder='Enter Email Address' />
                  <button type='submit' className="btn btn-j">Join now</button>
              </form>
          </div>
      </div>
    
    </>    
  )
}

export default Join