
import { Truck, Package, Bike, Building2 } from "lucide-react"

export default function FletesOmarLanding() {
  return (
    
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
<section className="relative overflow-hidden pb-16 md:pb-0">
  <div className="absolute inset-0 bg-black/60 z-10" />

  <img
    src="/portada2.jpeg"
    alt="Camión de fletes"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-50">
    <div className="max-w-3xl">
      <span className="inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full mb-6 text-sm">
        Fletes y Mudanzas en Mar del Plata y zona
      </span>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        Fletes Omar
      </h1>

      <p className="text-xl md:text-2xl text-zinc-200 mb-8 leading-relaxed">
        Mudanzas,fletes y minifletes rápidos con atención inmediata.
        Servicio confiable, puntual y seguro.
      </p>

      {/* BOTONES */}
      <div className="flex flex-row gap-3 w-full sm:w-auto">
        <a
          href="https://wa.me/5492235577503"
          className="flex-1 sm:flex-none text-center bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-5 py-4 rounded-2xl text-sm md:text-lg shadow-2xl"
        >
          Escribinos por WhatsApp
        </a>

        <a
          href="tel:2235577503"
          className="flex-1 sm:flex-none text-center border border-white/30 hover:bg-white/10 transition px-5 py-4 rounded-2xl text-sm md:text-lg"
        >
          Llamanos    
        </a>
      </div>
    </div>
  </div>
</section>

{/* BENEFICIOS */}
<section className="relative z-30 -mt-8 md:-mt-20">
  <div className="max-w-6xl mx-auto px-4">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-900/90 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-3 shadow-xl shadow-black/30">

      {[
        'Atención inmediata',
        'Viajes locales y larga distancia',
        'Responsabilidad y puntualidad',
        'Presupuestos rápidos por WhatsApp',
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-zinc-800/50 px-3 py-3 rounded-xl border border-zinc-700 hover:border-yellow-500/40 transition"
        >
          <div className="text-yellow-500 text-base shrink-0">
            ✓
          </div>

          <p className="text-xs md:text-sm font-medium text-white leading-tight">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-24 bg-yellow-500 text-black">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* TEXTO */}
      <div>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Nuestra Historia
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Somos una empresa familiar con más de <strong>10 años de trayectoria </strong> 
           en el rubro de fletes y mudanzas en Mar del Plata.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Nos destacamos por brindar un servicio confiable, rápido y con atención personalizada. 
          Contamos con diferentes vehículos que se adaptan a las necesidades de cada cliente.
        </p>

        <a
          href="https://wa.me/5492235577503"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Consultar ahora
        </a>
      </div>

      {/* IMAGEN */}
      <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/MudanzaP.jpeg"
          alt="Equipo de fletes trabajando"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </div>

  </div>
</section>

      {/* SERVICIOS */}
<section className="py-24">
  <div className="max-w-6x1 mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        Nuestros Servicios
      </h2>
      <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
        Soluciones rápidas y seguras para particulares y empresas.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-3">
  {[
    {
      title: 'Mudanzas',
      text: 'Traslado seguro de muebles, electrodomésticos y pertenencias.',
      icon: Truck,
    },
    {
      title: 'Minifletes',
      text: 'Ideal para traslados pequeños y entregas rápidas.',
      icon: Package,
    },
    {
      title: 'Larga distancia',
      text: 'Viajes dentro y fuera de la provincia con total seguridad.',
      icon: Truck,
    },
    {
      title: 'Empresas',
      text: 'Servicios para locales, oficinas y comercios.',
      icon: Building2,
    },
    {
      title: 'Traslado de motos',
      text: 'Transporte seguro y profesional.',
      icon: Bike,
    },
    {
      title: 'Repartos',
      text: 'Entregas rápidas y coordinadas.',
      icon: Package,
    },
  ].map((service, index) => {
    const Icon = service.icon

    return (
      <div
        key={index}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-8 hover:border-yellow-500 transition"
      >
        {/* ICONO */}
        <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
        </div>

        <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
          {service.title}
        </h3>

        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          {service.text}
        </p>
      </div>
    )
  })}
</div>

  </div>
</section>

      {/* GALERÍA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6x1 mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black mb-3">Galeria</h2>
              <p className="text-zinc-400">
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
  {[
    "/mudanza.jpg",
    "/camiones3.jpg",
    "/F100Camion.jpeg",
    "/CamionesYkangoo.jpeg",
    "/KangooM.jpeg",
    "/f100Mudanza.jpeg",
    
  ].map((src, index) => (
    <div
      key={index}
      className="aspect-video rounded-3xl overflow-hidden bg-zinc-800"
    >
      <img
        src={src}
        alt={`Trabajo de fletes ${index + 1}`}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  ))}
</div>
        </div>
      </section>
{/* RESEÑAS */}
<section className="py-15">
  <div className="max-w-6x3 mx-auto px-6 text-center">
    
    <h2 className="text-4xl md:text-5xl font-black mb-6">
      Opiniones de Clientes
    </h2>

    {/* ENLACE A GOOGLE MAPS */}
    <a
      href="https://maps.app.goo.gl/SCkwBUP5CW1Bpro18"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-yellow-400 text-xl mb-14 hover:text-yellow-300 transition font-semibold"
    >
      ⭐ 5.0 estrellas en Google
    </a>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        {
          name: 'Andy Veg',
          text: 'RECOMENDADÍSIMOS!! Honestos, eficientes. Vino Ezequiel: cargó, descargó. Se fue a comprar un candado que me pedía el encargado de una baulera...',
          link: 'https://share.google/wntr8ZOkEDtqHB8qy',
        },
        {
          name: 'Juan Pedro Carricart',
          text: 'Excelente servicio, Omar ademas de ser muy educado y expeditivo se nota que tiene mucha experiencia...',
          link: 'https://share.google/s914gulzEchsSEgVh',
        },
        {
          name: 'Victor79',
          text: 'la calidad del servicio supero ampliamente lo que me esperaba , desde el primer contacto  el buen trato se sintio, se esmeran mucho por mantener un standard de servicio...',
          link: 'https://share.google/EnQpPm79wmTZR0tfN',
        },
        {
          name: 'Laura Pintos',
          text: 'Exelente servicio puntualidad ,prolijidad,buena disposición para adaptarse, muy buen precio .Camiones en Exelente estado...',
          link: 'https://share.google/J2xJKdmCJFexrlrow',
        },
      ].map((review, index) => (
        <a
          key={index}
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition block text-left"
        >
          <div className="text-yellow-400 text-2xl mb-4">
            ★★★★★
          </div>

          {/* NOMBRE DEL CLIENTE */}
          <h3 className="text-white font-bold text-lg mb-3">
            {review.name}
          </h3>

          <p className="text-zinc-300 leading-relaxed mb-4">
            {review.text}
          </p>

          <span className="text-yellow-400 font-semibold">
            Ver reseña real →
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-10 bg-yellow-500 text-black">
        <div className="max-w-5x1 mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            ¿Necesitás un flete?
          </h2>

          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contactanos ahora y recibí presupuesto inmediato por WhatsApp.
          </p>

          <a
            href="https://wa.me/5492235577503"
            className="inline-block bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-zinc-400">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">Fletes Omar</h3>
            <p>Fletes y mudanzas en Mar del Plata.</p>
          </div>

          <div>
  <p>📍 14 de Julio 1775 6 "B" Mar del Plata, Buenos Aires</p>

  <p>
    📞{" "}
    <a href="tel:2235577503">
      2235577503
    </a>
  </p>

  <p>
    ✉️{" "}
    <a href="mailto:contacto@fletesomar.com.ar">
      contacto@fletesomar.com.ar
    </a>
  </p>
</div>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/5492235577503"
        className="fixed bottom-6 right-6 bg-green-500 hover:scale-110 transition text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>
    </div>
  )
}
