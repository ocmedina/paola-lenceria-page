import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper. Estos son esenciales.
import 'swiper/css';
import 'swiper/css/pagination';

// Define los datos de cada slide
const slidesData = [
  {
    title: 'Descubre la Elegancia que hay en Ti',
    description: 'Colecciones únicas de lencería que combinan comodidad, sensualidad y estilo.',
    ctaText: 'Ver Colección',
    ctaLink: '#',
    image: 'https://images.pexels.com/photos/10708051/pexels-photo-10708051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Nuevos Diseños en Encaje',
    description: 'Siente el toque sutil y delicado de nuestra nueva línea de lencería de encaje.',
    ctaText: 'Comprar Encaje',
    ctaLink: '#',
    image: 'https://images.pexels.com/photos/10398642/pexels-photo-10398642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Comodidad sin Sacrificar Estilo',
    description: 'Nuestros pijamas y lencería de noche están diseñados para tu máximo confort.',
    ctaText: 'Explorar Pijamas',
    ctaLink: '#',
    image: 'https://images.pexels.com/photos/4097486/pexels-photo-4097486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Hero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-96 md:h-[600px]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  className="px-8 py-3 bg-white text-pink-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;