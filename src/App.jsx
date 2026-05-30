import { FaGithub, FaLinkedin, FaEnvelope,   FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGitAlt, FaDatabase} from 'react-icons/fa'
  import {
  SiExpress,
  SiAndroidstudio,
  SiKotlin,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiTailwindcss
} from 'react-icons/si'

import { useState } from 'react'
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = [
    {
      title: 'Sistema de Asistencia QR',
      description:
        'Sistema web para registrar asistencias mediante códigos QR, control de horarios y generación de credenciales PDF.',
      tech: ['PHP', 'JavaScript', 'MySQL'],
      github: 'https://github.com/SoyyCrisssssssssssss/SIS_ASISTENCIA',
      features: [
        'Autenticación de usuarios',
        'Escaneo QR',
        'Dashboard administrativo',
        'Generación de PDF',
        'Control de horarios',
      ],

      images: [
        {
          src: '/projects/login.png',
          caption: 'Pantalla de inicio de sesión del sistema.',
        },

        {
          src: '/projects/panel_registro.png',
          caption: 'Registro de asistencia mediante escaneo QR o manualmente.',
        },

        {
          src: '/projects/registros.png',
          caption: 'Dashboard administrativo con control de estudiantes.',
        },

        {
          src: '/projects/reporte.png',
          caption: 'Generación automática de reportes PDF.',
        },
        {
          src: '/projects/horarios.png',
          caption: 'Asigna horarios para uno o todos lo estudiante con tiempo de tolrencia.',
        },
        {
          src: '/projects/lista.png',
          caption: 'Se muestra una lista de los estudiantes registrados, se puede editar o eliminar.',
        },
      ]
    },
    
    {
      title: 'Ecommerce Web',
      description:
        'Tienda en línea con catálogo de productos, carrito de compras y panel de administración.',
      tech: ['NestJs', 'TypeScript', 'MySQL Server', 'Node.Js', 'Rest API', 'TypeORM'],
      github: 'https://github.com/SoyyCrisssssssssssss/ecommerce-backendd',
      features: [
        'Autenticación de usuarios',
        'Registros de usuarios',
        'Carrito de compras',
        'Menu de productos',
        'Orden de compra',
      ],

      images: [
        {
          src: '/projects/ecommerce/logine.png',
          caption: 'Pantalla de inicio de sesión del sistema.',
        },

        {
          src: '/projects/ecommerce/registroe.png',
          caption: 'Pantalla de registro de usuarios.',
        },

        {
          src: '/projects/ecommerce/menu.png',
          caption: 'Menu de productos.',
        },

        {
          src: '/projects/ecommerce/datalles.png',
          caption: 'Detalles del producto.',
        },
        {
          src: '/projects/ecommerce/orden.png',
          caption: 'Orden de compra.',
        },
        {
          src: '/projects/ecommerce/address.png',
          caption: 'Dirección de envío.',
        },
         {
          src: '/projects/ecommerce/pago.png',
          caption: 'Proceso de pago.',
        },
      ]
    },
     {
      title: 'Simluador App Movil Biblioteca de Musica',
      description:
        'Simulacion de App movil de biblioteca de musica desarrollada en Kotlin .',
      tech: ['Android Studio', 'Kotlin', 'Jetpack Compose'],
      github: 'https://github.com/SoyyCrisssssssssssss/Emulador-App-movil-Android-Studio',
      features: [
        
      ],
       images: [
        {
          src: '/projects/movil/menu.png',
          caption: 'Menu de de la biblioteca de música sin funsiones.',
        },
      ]
    },
     {
      title: 'Simulador Smart TV',
      description:
        'Simulacion de Smart TV desarrollada en Kotlin y Jetpack Compose enfocada en streaming multimedia, visualización de trailers, biblioteca de música, videojuego y navegación optimizada para televisión.',
      tech: ['Android Studio', 'Kotlin', 'Jetpack Compose'],
      github: 'https://github.com/SoyyCrisssssssssssss/SIMULADOR-SMART-TV-ANDROID-STUDIO-',
      features: [
        'Pantalla de inicio con reloj en tiempo real.',
        'Reproducción de musica.',
        'Reproductor de peliculas',
        'Juego de autos con contador y game over.',
      ],
       images: [
        {
          src: '/projects/tv/inicio.png ',
          caption: 'Pantalla de inicio del simulador con reloj en tiempo real.',
        },
        {
          src: '/projects/tv/home.png',
          caption: 'Menu principal con opciones de streaming (solo se dirigen a la plataforma clickeada), música, juegos y navegador.',
        },
        {
          src: '/projects/tv/music.png',
          caption: 'Visualización de la biblioteca de música con opciones de reproducción.',
        },
        {
          src: '/projects/tv/pelis.png',
          src: '/projects/tv/reproductor.png',
          caption: 'Reproductor de peliculas (solo reproduce la que esta guardada en el proyecto).',
        },
          {
          src: '/projects/tv/game.png',
          caption: 'Juego de autos con contador y game over.',
        },
      ]
    },
     {
      title: 'App Servi Pro',
      description:
        'App que ayuda a los usuarios a encontrar servicios locales como plomeros, electricistas, jardineros, entre otros, con opciones de reserva y calificación.',
      tech: ['React native', 'JavaScript', 'Expo', 'Firebase'],
      github: 'https://github.com/SoyyCrisssssssssssss/SERVI-PRO',
      features: [
        'Login y registro de usuarios.',
        'Búsqueda de servicios locales.',
        'Reserva de servicios.',
        'Calificación de servicios.',
      ],
       images: [
        {
          src: '/projects/servi/login.png ',
          caption: 'Pantalla de login de la app.',
        },
        {
          src: '/projects/servi/regis.png',
          caption: 'Pantalla de registro de la app.',
        },
        {
          src: '/projects/servi/ini.png',
          caption: 'Pantalla de inicio de la app donde se muestran los servicios disponibles provedores y descuentos.',
        },
       
      ]
    },
  ];

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Android Studio', icon: <SiAndroidstudio /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Cristian<span className="text-violet-500">Dev</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#inicio" className="hover:text-violet-400 transition">
              Inicio
            </a>
            <a href="#sobre" className="hover:text-violet-400 transition">
              Sobre mí
            </a>
            <a href="#skills" className="hover:text-violet-400 transition">
              Tecnologías
            </a>
            <a href="#proyectos" className="hover:text-violet-400 transition">
              Proyectos
            </a>
            <a href="#contacto" className="hover:text-violet-400 transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-violet-400 mb-3 text-lg">
              Desarrollador Web Junior
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Cristian Jesús
              <br />
              Cruz González
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
             Apasionado por el desarrollo de aplicaciones modernas y soluciones
              digitales enfocadas en crear experiencias intuitivas, funcionales y 
              adaptables a diferentes necesidades tecnológicas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-2xl font-medium shadow-lg"
              >
                Ver Proyectos
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="border border-white/20 hover:border-violet-500 hover:text-violet-400 transition px-6 py-3 rounded-2xl font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 shadow-2xl shadow-violet-500/20">
  
            <img
              src="/projects/fottoo.png"
              alt="Cristian"
              className="w-full h-full rounded-full object-cover"
            />

          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-10">
            Sobre <span className="text-violet-500">mí</span>
          </h3>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl">
            <p className="text-gray-300 leading-relaxed text-lg">
             Soy desarrollador de software enfocado en la creación de aplicaciones web y móviles modernas, escalables y centradas en la experiencia del usuario.
              Tengo experiencia trabajando con distintas tecnologías frontend y backend, desarrollando soluciones funcionales, 
              interfaces intuitivas y sistemas adaptables a diversos entornos tecnológicos. Disfruto aprender nuevas herramientas y 
              enfrentar retos que me permitan seguir creciendo profesionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Tecnologías
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <div className="text-4xl text-violet-400 mb-4">
                  {skill.icon}
                </div>

                <p className="font-semibold text-lg">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-14 text-center">
            Mis Proyectos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500 transition duration-300 shadow-xl"
              >
                <div className="h-52 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 flex items-center justify-center text-5xl font-bold text-white">
                  {project.title.charAt(0)}
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-sm border border-violet-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    

                      <a
                        href={project.github}
                        target="_blank"
                        className="border border-white/20 hover:border-violet-500 hover:text-violet-400 transition px-5 py-2 rounded-xl font-medium"
                      >
                        GitHub
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-xl font-medium"
                      >
                        Ver detalles
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Contacto */}
<section id="contacto" className="py-28 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h3 className="text-5xl font-bold mb-6">
      Contacto
    </h3>

    <p className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
      Disponible para colaborar en proyectos, oportunidades laborales
      y desarrollo de soluciones tecnológicas.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      {/* Email */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 hover:border-violet-500 transition">

        <FaEnvelope className="mx-auto mb-4 text-violet-400 text-3xl" />

        <h4 className="text-xl font-bold mb-2">
          Email
        </h4>

        <p className="text-gray-400 text-sm">
          crostiancruzgonzales.07@gmail.com
        </p>

      </div>

      {/* GitHub */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 hover:border-violet-500 transition">

        <FaGithub className="mx-auto mb-4 text-violet-400 text-3xl" />

        <h4 className="text-xl font-bold mb-2">
          GitHub
        </h4>

        <p className="text-gray-400 text-sm">
          github.com/SoyyCrisssssssssssss
        </p>

      </div>

      {/* LinkedIn */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 hover:border-violet-500 transition">

        <FaLinkedin className="mx-auto mb-4 text-violet-400 text-3xl" />

        <h4 className="text-xl font-bold mb-2">
          LinkedIn
        </h4>

        <p className="text-gray-400 text-sm">
          https://www.linkedin.com/in/cristian-jes�s-cruz-gonz�lez-055a87304/
        </p>

      </div>

      {/* Ubicación */}
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 hover:border-violet-500 transition">

        <div className="text-3xl mb-4">
          📍
        </div>

        <h4 className="text-xl font-bold mb-2">
          Ubicación
        </h4>

        <p className="text-gray-400 text-sm">
          Puebla, México
        </p>

      </div>

    </div>

    {/* Botones */}
    <div className="flex flex-wrap items-center justify-center gap-6">

      <a
        href="mailto:crostiancruzgonzales.07@gmail.com"
        className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-2xl font-medium shadow-lg"
      >
        Enviar Correo
      </a>

      <a
        href="https://github.com/SoyyCrisssssssssssss"
        target="_blank"
        className="border border-white/20 hover:border-violet-500 hover:text-violet-400 transition px-8 py-4 rounded-2xl font-medium"
      >
        Ver GitHub
      </a>

       <a
        href="https://www.linkedin.com/in/cristian-jes�s-cruz-gonz�lez-055a87304/"
        target="_blank"
        className="border border-white/20 hover:border-violet-500 hover:text-violet-400 transition px-8 py-4 rounded-2xl font-medium"
      >
        Ir a LinkedIn
      </a>

      <a
        href="/Currículum CV Cristian_Jesús.pdf"
        className="border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition px-8 py-4 rounded-2xl font-medium"
      >
        Descargar CV
      </a>

    </div>
  </div>
</section>
{selectedProject && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto p-6">

    <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-8 relative">

      {/* Cerrar */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      {/* Título */}
      <h2 className="text-4xl font-bold mb-6">
        {selectedProject.title}
      </h2>

      {/* Descripción */}
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        {selectedProject.description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-3 mb-10">
        {selectedProject.tech.map((tech) => (
          <span
            key={tech}
            className="bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full border border-violet-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Funciones */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Funcionalidades
        </h3>

        <ul className="space-y-3">
          {selectedProject.features.map((feature) => (
            <li
              key={feature}
              className="text-gray-300 flex items-center gap-3"
            >
              <span className="text-violet-400">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Galería */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Capturas del proyecto
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {selectedProject.images.map((image) => (
            <div key={image}>
          <img
            src={image.src}
            alt="Proyecto"
            className="rounded-2xl border border-white/10 hover:scale-[1.02] transition mb-3"
          />

          <p className="text-gray-400 text-sm">
            {image.caption}
          </p>
        </div>
          ))}
        </div>
      </div>

      {/* Botón GitHub */}
      <div className="mt-10">
        <a
          href={selectedProject.github}
          target="_blank"
          className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-2xl font-medium inline-block"
        >
          Ver Repositorio
        </a>
      </div>

    </div>
  </div>
)}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Cristian Jesús Cruz González. Todos los derechos reservados.
      </footer>
    </div>
    
  );
  
}
