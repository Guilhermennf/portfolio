import './about.css';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://neofeed.com.br/wp-content/uploads/2021/10/desenvolvedor-696x392.jpg'
            alt='Animação de um programador'
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>Sobre mim</h1>
        <p className='a-sub'>Desenvolvedor Front-end</p>
        <p className='a-desc'>
          Em junho de 2021, comecei a cursar técnico em desenvolvimento de
          sistemas, e desde então venho descobrindo cada mais sobre o mundo da
          tecnologia, no momento estou desenvolvendo em React e estou em busca
          da minha primeira oportunidade no mercado.
        </p>
      </div>
    </div>
  );
};

export default About;
