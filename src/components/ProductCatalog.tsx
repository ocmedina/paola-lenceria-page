import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Datos de productos (simulados)
const productsData = [
  {
    id: 1,
    name: 'Conjunto de Encaje Nude',
    price: '$25.00',
    image: 'https://images.pexels.com/photos/10398642/pexels-photo-10398642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Babydoll de Seda Rosa',
    price: '$35.00',
    image: 'https://images.pexels.com/photos/10128956/pexels-photo-10128956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Corpiño Deportivo Negro',
    price: '$20.00',
    image: 'https://images.pexels.com/photos/12399238/pexels-photo-12399238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Tanga de Hilo con Detalles',
    price: '$15.00',
    image: 'https://images.pexels.com/photos/10206120/pexels-photo-10206120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Conjunto Floral de Verano',
    price: '$28.00',
    image: 'https://images.pexels.com/photos/10708051/pexels-photo-10708051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Pijama de Satén Borgoña',
    price: '$45.00',
    image: 'https://images.pexels.com/photos/4097486/pexels-photo-4097486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const ProductCatalog = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Nuestras Colecciones
        </h2>
        
        {/* Aquí comienza el carrusel de Swiper */}
        <Swiper
          // Módulos que vamos a usar (paginación, navegación, etc.)
          modules={[Pagination]}
          // Espacio entre las diapositivas
          spaceBetween={30}
          // Diapositivas por vista, responsivo con breakpoints
          slidesPerView={1}
          // Configuración de la paginación (los puntos de abajo)
          pagination={{ clickable: true }}
          // Configuración responsiva para diferentes tamaños de pantalla
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {productsData.map(product => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <a href="#">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                </a>
                <div className="p-5 text-center">
                  <a href="#" className="block text-xl font-semibold text-gray-800 hover:text-pink-700 mb-2">
                    {product.name}
                  </a>
                  <p className="text-2xl font-bold text-pink-700 mb-4">
                    {product.price}
                  </p>
                  <button
                    className="w-full py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-800 transition duration-300"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCatalog;