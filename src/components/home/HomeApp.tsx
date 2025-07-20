import "@/styles/components/home/homeApp.css"
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const images = [
  {
    urlImage: "/images/home/home-slider-1.jpg",
    displayText: "Uma nova forma de realizar avaliações com praticidade, eficiência e interface intuitiva.",
  },
  {
    urlImage: "/images/home/home-slider-2.jpg",
    displayText: "Todas as funcionalidades dentro de um único sistema para administrar avaliações para seu time/sala.",
  },
  {
    urlImage: "/images/home/home-slider-3.jpg",
    displayText: "Uma nova forma de realizar avaliações com praticidade, eficiência e interface intuitiva.",
  },
]

const HomeApp = () => {
  const router = useRouter();

  const handleCreateTest = () => {
    router.push('/create-test');
  };

  return (
    <div className="home-app__container">
      <div style={{ width: "40%" }}>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 10000,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={image.urlImage}
                alt={`Slide ${index + 1}`}
                width={500}
                height={400}
              />
              <div className="display-text">
                <p>{ image.displayText }</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Escolha o que deseja fazer:
        </Typography>
        <br />
        <br />

        <div className="home-app__buttons-container">
          <Button variant="contained" size="large" onClick={handleCreateTest}>Criar avaliação</Button>
          <Button variant="contained" size="large">Avaliações a fazer</Button>

          <Button variant="contained" size="large">Avaliações realizadas</Button>
          <Button variant="contained" size="large">Minhas avaliações</Button>

          <Button variant="contained" size="large">Insights</Button>
          <Button variant="contained" size="large">Acessos</Button>

          <Button variant="contained" size="large">Minhas equipes</Button>
          <Button variant="contained" size="large">Suporte técnico</Button>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default HomeApp