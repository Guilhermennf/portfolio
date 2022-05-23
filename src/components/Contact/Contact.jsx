import './contact.css';
import Phone from '../../Img/phone.png';
import Email from '../../Img/email.png';
import Address from '../../Img/address.png';
import Linkedin from '../../Img/linkedin.png';
import Github from '../../Img/github.png';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_af8r9av',
        'template_pu0ldtp',
        formRef.current,
        'WQ7gRTzeURtz51RGc',
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Contatos & Redes</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +55 (31) 9 9812-2003
            </div>
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Linkedin} alt='' />
            <a
              style={{
                textDecoration: 'none',
                color: darkMode ? 'white' : '#333',
              }}
              href='https://www.linkedin.com/in/guilhermennf/'>
              linkedin.com/in/guilhermennf/
            </a>
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Github} alt='' />
            <a
              style={{
                textDecoration: 'none',
                color: darkMode ? 'white' : '#333',
              }}
              href='https://www.github.com/guilhermennf'>
              github.com/guilhermennf
            </a>
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Email} alt='' />
            guilhermenunesbh5@gmail.com
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Address} alt='' />
            Belo Horizonte, MG
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>Me envie um e-mail.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Nome'
              name='user_name'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Assunto'
              name='user_subject'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='E-mail'
              name='user_email'
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows='5'
              placeholder='Mensagem'
              name='message'
            />
            <button>Enviar</button>
            <p>{done && 'E-mail enviado!'}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
