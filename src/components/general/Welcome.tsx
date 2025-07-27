import '@/styles/components/welcome.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';

const functionalities = [
  {
    srcImage: "/images/total_digital_test.png",
    altImage: "Avaliações totalmentes digitais",
    title: "Criação de avaliações totalmentes digitais",
    description: `Aqui no Make Tests todo o processo é 100% digital 
      desde a criação até a finalização de uma avaliação`,
  },
  {
    srcImage: "/images/full_administration.png",
    altImage: "Administração por conta do sistema",
    title: "Administração totalmente a cargo do sistema",
    description: `Nosso software se responsabiliza por toda
      a administração das suas avaliações`,
  },
  {
    srcImage: "/images/atributte.png",
    altImage: "Atribuição a pessoas e equipe",
    title: "Capacidade de atribuir as avaliações a pessoas e equipes",
    description: `Nosso software tem a capacidade que ao criar uma avaliação
      seja possível atribuir a pessoas em especifico ou a equipes`,
  },
  {
    srcImage: "/images/suporte.png",
    altImage: "Suporte aos usuários",
    title: "Suporte totalmente dedicado aos nossos usuários",
    description: `A equipe do Make tests oferece o melhor suporte aos
      nossos usuários sempre oferecendo ajuda e apoio`,
  },
  {
    srcImage: "/images/seguro.png",
    altImage: "Informações seguras e criptografadas",
    title: "Nos responsabilizamos pela segurança dos seus dados e informações",
    description: `A equipe do Make tests garante a segurança e privacidade dos 
      seus dados aqui colocados.`,
  },
];

const plans = [
  {
    title: "Plano básico:",
    price: "$5,99 / Mês",
    description: `
      Com o plano básico você pode criar até 10 avaliações por mês
      e conta com um suporte em período comercial.
      Você pode atribuir as avaliações a pessoas mas não é incluso
      a criação de equipes. 
    `,
  },
  {
    title: "Plano avançado:",
    price: "$10,99 / Mês",
    description: `
      Com o plano avançado você pode criar avaliações de forma totalmente
      gratuitas e tem acesso a todas funcionalidades do Make test.
      Conta com um suporte 24h por dia e o melhor da nossa cloud.. 
    `,
  },
];

const Welcome = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <div className='welcome-container'>
        <div className='welcome-container__intro-text'>
          <div>
            <Typography
              variant='h3'
              sx={{ marginBottom: "15px" }}
            >
              Uma forma inovadora, prática <br />e eficiente
              de realizar <br />avaliações
            </Typography>
            <Typography
              sx={{ marginBottom: "15px" }}
            >
              Criar avaliações, atribuir a pessoas/equipe, ver as notas
              e muito mais. Tudo concentrado em um só aplicativo.
            </Typography>
            <div className='welcome-container__intro-text__email-container'>
                <TextField 
                  label="E-mail"
                  required
                  value={email}
                  type="email"
                  sx={{ width: "80%", marginRight: "10px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant='contained'
                >
                  Enviar
                </Button>
            </div>
            <Typography
              color='#797979ff'
              fontSize={"12px"}
            >
              Ao se registrar você concorda com os nossos termos de privacidade 
              e confia a nós<br /> a devida segurança de seus dados e informações.
            </Typography>
          </div>
        </div>

        <div className='welcome-container__intro-image'>
          <Image 
            src={"/images/home_wallpaper.png"}
            alt='Home wallpaper'
            width={500}
            height={700}
          />
        </div>
      </div>

      <div className='functionalities-container'>
        <Typography
          variant='h4'
          textAlign={"center"}
        >
          Confira algumas de nossas características abaixo.
        </Typography>

        <div className='functionalities-container__list'>
          { functionalities.map((func, index) => (
              <div className='functionalities-container__list-item' key={index}>
                <Image 
                  src={func.srcImage}
                  alt={func.altImage}
                  width={80}
                  height={80}
                />
                <Typography
                  component={"p"}
                  sx={{ marginTop: "5px" }}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  { func.title }
                </Typography>
                <Typography
                  color='#797979ff'
                  fontSize={"12px"}
                  textAlign={"center"}
                  sx={{ marginTop: "5px" }}
                >
                  { func.description }
                </Typography>
            </div>
          ))}
          
        </div>
      </div>

      <div className='welcome-container' style={{ marginTop: "15px" }}>
        <div className='welcome-container__intro-text'>
          <div>
            <Typography
              variant='h3'
              sx={{ marginBottom: "15px" }}
            >
              Não perca tempo <br />e ingresse
              no melhor <br />aplicativo de avaliações digitais
            </Typography>
            <Typography
              sx={{ marginBottom: "15px" }}
            >
              Com o Make Tests você pode dizer tchau para as avaliações em papel
              e começar a usar inteiramente de forma digital.
              Este aplicativo cobre desde escolas até empresas ou qualquer outro
              lugar que utiliza avaliações para testar pessoas, filtrar vagas
              entre outras muitas ocasiões. 
            </Typography>
            <div className='welcome-container__intro-text__email-container'>
                <TextField 
                  label="E-mail"
                  required
                  value={email}
                  type="email"
                  sx={{ width: "80%", marginRight: "10px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant='contained'
                >
                  Enviar
                </Button>
            </div>
            <Typography
              color='#797979ff'
              fontSize={"12px"}
            >
              Ao se registrar você concorda com os nossos termos de privacidade 
              e confia a nós<br /> a devida segurança de seus dados e informações.
            </Typography>
          </div>
        </div>

        <div className='welcome-container__intro-image'>
          <Image 
            src={"/images/tests_administration.png"}
            alt='Home wallpaper'
            width={500}
            height={700}
          />
        </div>
      </div>

      <div className='plans-price-container' style={{ marginTop: "55px" }}>
         <Typography
          variant='h4'
          textAlign={"center"}
        >
          Planos para todo mundo
        </Typography>
          <div className='plans-price-container__list'>
            { plans.map((plan, index) => (
              <div key={index} className='plans-price-container__list-item'>
                <div className='card-title'>
                  <Typography
                    component={"p"}
                    fontSize={"20px"}
                    fontWeight={"bold"}
                  >
                    { plan.title } 
                  </Typography>
                  <Typography>
                    { plan.price }
                  </Typography>
                </div>
                <div className="card-content">
                  <Typography
                    color='#797979ff'
                    fontSize={"16px"}
                  >
                    { plan.description } 
                  </Typography>
                  <Button
                    variant='contained'
                    sx={{ marginTop: "15px" }}
                  >
                    Registrar
                  </Button>
                </div>
              </div>
            ))}
          </div>
      </div>
        <Typography
          variant='h4'
          textAlign={"center"}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          ou
        </Typography>
      <div className="end-section">
        <div className='end-section-container'>
          <Typography
            variant='h4'
          >
            Teste gratuitamente, agora mesmo
          </Typography>
          <div className='end-section-container__description'>
            <Typography
              textAlign={"center"}
              color={"#474646ff"}
            >
              Com o teste gratuito você pode criar uma avaliação e uma equipe
              caso você queira ou necessite de criar mais
              avaliações ou equipes recomendamos a assinatura
              de um dos nossos planos
            </Typography>
          </div>
          <div className='end-section-container__email-field'>
            <TextField 
              label="E-mail"
              required
              value={email}
              type="email"
              sx={{ marginRight: "20px", width: "80%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant='contained'
            >
              Registrar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome