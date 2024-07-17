import React from 'react';
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '0f9d1f61-d70d-448c-a363-39c1a7e01c05');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send Us a Message <img src={msg_icon} alt='' />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        {/* contact list */}
        <ul>
          <li>
            <img src={mail_icon} alt='' /> contact@uninova.com
          </li>
          <li>
            <img src={phone_icon} alt='' /> +1 515-849-7592
          </li>
          <li>
            <img src={location_icon} alt='' /> 214 Nutters Barn Lane Urbandale,
            IA 50322
          </li>
        </ul>
      </div>

      {/* contact form */}
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />

          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            required
          />

          <label>Write your messages here</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            required
          ></textarea>

          <button className='btn dark-btn'>
            Submit Now <img src={white_arrow} alt='' />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
