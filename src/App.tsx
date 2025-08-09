
import Header from './components/Header';
import Hero from './components/Hero'; 
import ProductCatalog from './components/ProductCatalog';
import BenefitsBar from './components/BenefitsBar'; // Asegúrate de la ruta correcta
// Asegúrate de la ruta correcta

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BenefitsBar />
      <ProductCatalog />
      {/* El resto de tu aplicación */}
    </div>
  );
}

export default App;

