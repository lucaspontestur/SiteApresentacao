import { useState, useEffect, useRef, useMemo } from 'react';
import ContactFormSection from './ContactFormSection';
import VideoModal from './VideoModal';
import {
  Code,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Terminal,
  Gamepad,
  Brain,
  Monitor,
  Database,
  Rocket,
  Wrench,
  Briefcase,
  Users,
  FileDown,
  Globe,
  Menu,
  X,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import PropTypes from 'prop-types';

const LucasMarinho = ({ setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStack, setActiveStack] = useState('front');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      about: aboutRef,
      stack: stackRef,
      projects: projectsRef,
      experience: experienceRef,
      education: educationRef,
      contact: contactRef,
    }),
    [],
  );

  const scrollToSection = (key) => {
    sectionRefs[key].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(key);
  };

  const navItems = [
    { key: 'hero', label: 'Sobre', icon: Brain },
    { key: 'stack', label: 'Stack', icon: Terminal },
    { key: 'projects', label: 'Qualificações', icon: Rocket },
    { key: 'experience', label: 'Experiência', icon: Briefcase },
    { key: 'education', label: 'Formação', icon: GraduationCap },
    { key: 'contact', label: 'Contato', icon: Mail },
  ];

  const stackCategories = {
    front: {
      title: 'Frontend',
      icon: Monitor,
      techs: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
    },
    back: {
      title: 'Backend',
      icon: Database,
      techs: ['Python', 'Golang', 'Node.js', 'APIs'],
    },
    tools: {
      title: 'Ferramentas',
      icon: Wrench,
      techs: ['Git', 'Docker', 'AWS', 'Linux', 'SCRUM'],
    },
  };

  const featuredProjects = [
    {
      id: 1,
      title: 'IA de atendimento em turismo',
      description:
        'Sistema avançado de inteligência artificial desenvolvido para otimizar o atendimento no setor de turismo. Utilizando tecnologias modernas de processamento de linguagem natural e aprendizado de máquina, esta solução oferece respostas precisas e personalizadas para as necessidades dos clientes 24/7.',
      videoSrc: '/Video1.mp4',
      thumbnail: '/thumbnail1.png',
    },
    {
      id: 2,
      title: 'Site de Turismo',
      description:
        'Plataforma web moderna e responsiva para agências de turismo, oferecendo uma experiência única de navegação e reserva. Com interface intuitiva e design atraente, o site permite aos usuários explorar destinos, comparar preços e fazer reservas de forma simples e eficiente.',
      videoSrc: '/Video2.mp4',
      thumbnail: '/thumbnail2.png',
    },
    {
      id: 3,
      title: 'ERP de Turismo',
      description:
        'Sistema integrado de gestão empresarial especializado para o setor de turismo. Esta solução completa permite o gerenciamento eficiente de reservas, clientes, fornecedores, financeiro e relatórios em uma única plataforma, otimizando processos e aumentando a produtividade.',
      videoSrc: '/Video3.mp4',
      thumbnail: '/thumbnail3.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <header
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-white/80 shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
              Lucas Marinho Rodrigues
            </h1>
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setLanguage('en')}
                className="flex items-center gap-1 px-2 md:px-4 py-2 text-sm md:text-base rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-all"
              >
                <Globe size={16} />
                <span className="hidden md:inline">Português</span>
              </button>
              <div className="hidden md:flex gap-6">
                {navItems.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                      ${
                        activeTab === key
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'hover:bg-emerald-50 text-gray-600'
                      }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="p-2 text-gray-600"
                >
                  {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {mobileMenu && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4">
              {navItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    scrollToSection(key);
                    setMobileMenu(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 w-full hover:bg-emerald-50 text-gray-600"
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section
        ref={sectionRefs.hero}
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center pt-20 px-4"
        style={{
          background:
            'radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-transparent bg-clip-text">
            Desenvolvedor Full Stack
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Meu nome é Lucas Marinho Rodrigues e criei este site utilizando
              ReactJS.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Possuo 2 anos de experiência, inglês avançado e outras
              qualificações. Estou aberto a novas oportunidades.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                icon: Github,
                link: 'https://github.com/lucas3034',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                link: 'https://linkedin.com/in/lucas-marinho-004162202',
                label: 'LinkedIn',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-white text-sm md:text-base transition-all
                  bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105"
              >
                <social.icon size={20} />
                {social.label}
              </a>
            ))}
            <a
              href="/Currículo Lucas Marinho.pdf"
              download
              className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-white text-sm md:text-base transition-all
                bg-gradient-to-r from-cyan-600 to-teal-600 hover:scale-105"
            >
              <FileDown size={20} />
              Currículo
            </a>
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.stack}
        id="stack"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(stackCategories).map(
              ([key, { title, icon: Icon }]) => (
                <button
                  key={key}
                  onClick={() => setActiveStack(key)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm md:text-base transition-all
                  ${
                    activeStack === key
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-emerald-50'
                  }`}
                >
                  <Icon size={20} />
                  {title}
                </button>
              ),
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {stackCategories[activeStack].techs.map((tech, index) => (
              <Card
                key={index}
                className={`hover:scale-105 transition-all duration-300 cursor-pointer
                  ${hoveredCard === index ? 'shadow-xl' : 'shadow-md'}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRefs.projects} id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Qualificações em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend',
                description:
                  'Desenvolvimento de automações, integrações com APIs e Bancos de Dados',
                tech: [
                  'Python',
                  'Node.js',
                  'APIs',
                  'SQL',
                  'Webhook',
                  'Selenium',
                ],
                icon: Database,
              },
              {
                title: 'Inteligência Artificial',
                description:
                  'Estudo e desenvolvimento de inteligência artificial e Chatbots para atendimento',
                tech: ['DialogFlow', 'APIs', 'Gemini'],
                icon: Brain,
              },
              {
                title: 'Frontend',
                description:
                  'Desenvolvimento de interfaces modernas e responsivas',
                tech: [
                  'Javascript',
                  'React',
                  'Vue.js',
                  'HTML e Css',
                  'Typescript',
                ],
                icon: Code,
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-300
                  ${hoveredCard === `project-${index}` ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
                onMouseEnter={() => setHoveredCard(`project-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <project.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
              Projetos em Destaque
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className={`transform transition-all duration-300 cursor-pointer
                    ${hoveredCard === `featured-${project.id}` ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
                  onMouseEnter={() => setHoveredCard(`featured-${project.id}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardContent className="p-6">
                    <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.experience}
        id="experience"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Experiência Profissional
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                company: 'PontesTur',
                role: 'Estagiário em Inovação',
                period: '2024',
                description:
                  'Desenvolvimento de soluções inovadoras usando Python e automações',
                tech: ['Python', 'APIs', 'Webhook', 'SQL Server'],
              },
              {
                company: 'Encora',
                role: 'Estagiário em Desenvolvimento',
                period: '2021 - 2023',
                description:
                  'Desenvolvimento full stack com foco em aplicações web modernas',
                tech: ['React', 'Golang', 'AWS', 'SCRUM'],
              },
              {
                company: 'Intelligence',
                role: 'Freelancer',
                period: '2018 - 2019',
                description:
                  'Desenvolvimento de chatbots inteligentes para atendimento',
                tech: ['DialogFlow', 'IA'],
              },
            ].map((job, index) => (
              <Card
                key={index}
                className={`mb-6 transform transition-all duration-300
                  ${hoveredCard === `job-${index}` ? 'scale-102 shadow-xl' : 'hover:shadow-lg'}`}
                onMouseEnter={() => setHoveredCard(`job-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-600">
                        {job.company}
                      </h3>
                      <p className="text-lg font-medium text-gray-800">
                        {job.role}
                      </p>
                      <p className="text-gray-600 mt-2 md:mt-0">
                        {job.description}
                      </p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRefs.education} id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Formação Acadêmica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div>
                    <GraduationCap className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">
                      Ciências da Computação
                    </h3>
                    <p className="text-emerald-600 font-medium">UniFBV</p>
                    <p className="text-gray-600">Bacharelado Completo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div>
                    <Award className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">
                      Gestão em Tecnologia
                    </h3>
                    <p className="text-emerald-600 font-medium">
                      Faculdade Iguaçu
                    </p>
                    <p className="text-gray-600">Pós-Graduação em andamento</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Cursos e Certificações
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'SAGA START',
                  description: 'Computação gráfica e design digital',
                  icon: Monitor,
                },
                {
                  title: 'CALARTS',
                  description:
                    'Desenvolvimento de História e Narrativa para Videogames',
                  icon: Gamepad,
                },
                {
                  title: 'DL Jovem',
                  description: 'Desenvolvimento e Liderança para Jovens',
                  icon: Users,
                },
                {
                  title: 'Alura',
                  description: 'Imersão em Inteligência Artificial',
                  icon: Brain,
                },
                {
                  title: 'Udemy',
                  description: 'Golang, CSS, HTML, JavaScript e Linux',
                  icon: Code,
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className={`transform transition-all duration-300
                    ${hoveredCard === `course-${index}` ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
                  onMouseEnter={() => setHoveredCard(`course-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <course.icon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {course.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.contact}
        id="contact"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <ContactFormSection language="pt" />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:lucasmarinho3034@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors break-all"
                    >
                      lucasmarinho3034@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <a
                      href="tel:+5581998578090"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      (81) 99857-8090
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Lucas Marinho Rodrigues
              </h3>
              <p className="text-gray-400">Desenvolvedor Full Stack.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <a
                  href="https://github.com/lucas3034"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/lucas-marinho-004162202"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-4">Localização</h4>
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <MapPin size={18} />
                Recife, PE - Brasil
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Feito por Lucas Marinho Rodrigues</p>
          </div>
        </div>
      </footer>

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
        videoSrc={selectedProject?.videoSrc}
      />
    </div>
  );
};

LucasMarinho.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LucasMarinho;
