import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Hero Slider Logic */
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: '/image-be750ab6-2405-4c24-80f1-66dd5145f12a.png',
      title: 'el arte de la masa artesanal',
      subtitle: 'EL-GUIBOR'
    },
    {
      id: 2,
      image: '/pan de jamon.jpg',
      title: 'Tradición en tu Mesa',
      subtitle: 'Sabor Auténtico'
    },
    {
      id: 3,
      image: '/tequenos-de-queso-venezolanosjpg.webp',
      title: 'El Rey de las Fiestas',
      subtitle: 'Tequeños Crujientes'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">EL GUIBOR</div>

          <button className="btn-primary">Pedir Online</button>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${slide.image}')` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="btn-primary">Ver Menú</button>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products Showcase */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Nuestros Favoritos</h2>
          <div className="showcase-5-grid">
            {/* Product 1: Pan de Jamón */}
            <div className="product-card">
              <div className="product-image">
                <img src="/pan de jamon.jpg" alt="Pan de Jamón" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Pan de Jamón</h3>
                <p className="product-desc">Tradición navideña todo el año: jamón, aceitunas y pasas.</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>

            {/* Product 2: Tequeños */}
            <div className="product-card">
              <div className="product-image">
                <img src="/tequenos-de-queso-venezolanosjpg.webp" alt="Tequeños" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Tequeños</h3>
                <p className="product-desc">Dedos de queso envueltos en masa crujiente. ¡El rey de las fiestas!</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>

            {/* Product 3: Pan Canilla */}
            <div className="product-card">
              <div className="product-image">
                <img src="/pan canilla.jpg" alt="Pan Canilla" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Pan Canilla</h3>
                <p className="product-desc">La baguette venezolana por excelencia, suave y dorada.</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>

            {/* Product 4: Quesillo */}
            <div className="product-card">
              <div className="product-image">
                <img src="/quesillo.jpg" alt="Quesillo" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Quesillo</h3>
                <p className="product-desc">Cremoso postre de leche condensada y caramelo.</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>

            {/* Product 5: Pastelitos */}
            <div className="product-card">
              <div className="product-image">
                <img src="/pastelitos-venezolanos_800x534.webp" alt="Pastelitos andinos" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Pastelitos</h3>
                <p className="product-desc">Crujientes discos de masa rellenos de carne, pollo o queso.</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>

            {/* Product 6: Pasticho (New) */}
            <div className="product-card pasticho-card">
              <div className="product-image hover-swap">
                <img src="/pasticho1.jpg" alt="Pasticho Venezolano" className="img-front" style={{ objectFit: 'cover' }} />
                <img src="/pasticho2.png" alt="Pasticho detalle" className="img-back" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-info">
                <h3 className="product-title">Pasticho</h3>
                <p className="product-desc">Lasaña venezolana con mucha salsa bechamel, queso y jamón.</p>
                <button className="btn-primary">Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">El Arte de Hornear</h2>
          <div className="process-steps">
            <div className="process-image">
              <img src="/art-of-baking.jpg" alt="Amasado Artesanal" />
            </div>
            <div className="process-text">
              <h3>Hecho a Mano, Con Amor</h3>
              <p>Cada pieza de pan comienza con los ingredientes más simples: harina, agua y sal. Nuestros panaderos amasan a mano, sintiendo la textura y dándole vida a la masa. Respetamos los tiempos de fermentación para lograr ese sabor profundo y característico.</p>
              <button className="btn-primary">Ver el Proceso</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "El Pan de Jamón es lo mejor que he probado, tal cual como lo hacía mi abuela en Navidad. ¡Gracias por traerme ese sabor a casa!"
              </div>
              <div className="client-name">María G.</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Los tequeños son adictivos, la masa es perfecta y tienen full queso. ¡Se acabaron en 5 minutos en mi fiesta!"
              </div>
              <div className="client-name">Juan P.</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Por fin encontré un lugar con el verdadero sabor venezolano. El pasticho y los pastelitos son de otro mundo. ¡100% recomendados!"
              </div>
              <div className="client-name">Andrés L.</div>
            </div>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <img src="/kkk.png" alt="EL GUIBOR Logo" style={{ maxHeight: '80px', objectFit: 'contain' }} />
            </div>
            <p>Calle Principal 123, Ciudad de México</p>
            <p>+52 55 1234 5678 | info@laboulangerie.mx</p>
            <div className="social-links">
              {/* Add social icons here */}
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 EL GUIBOR. Todos los derechos reservados.
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/525512345678"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  )
}

export default App
