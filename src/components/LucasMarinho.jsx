import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Code, GraduationCap, Award, Mail, Phone, MapPin, 
  Github, Linkedin, Terminal, Gamepad, Brain,
  Monitor, Database, Rocket, Wrench, Briefcase, Users
} from 'lucide-react';
import { Card, CardContent } from "./ui/card";

const LucasMarinho = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStack, setActiveStack] = useState('front');

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
  
  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    about: aboutRef,
    stack: stackRef,
    projects: projectsRef,
    experience: experienceRef,
    education: educationRef,
    contact: contactRef
  }), []);


  const scrollToSection = (key) => {
    sectionRefs[key].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(key);
  };

  const navItems = [
    { key: 'about', label: 'Sobre', icon: Brain },
    { key: 'stack', label: 'Stack', icon: Terminal },
    { key: 'projects', label: 'Projetos', icon: Rocket },
    { key: 'experience', label: 'Experiência', icon: Briefcase },
    { key: 'education', label: 'Formação', icon: GraduationCap },
    { key: 'contact', label: 'Contato', icon: Mail }
  ];

  const stackCategories = {
    front: {
      title: 'Frontend',
      icon: Monitor,
      techs: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind']
    },
    back: {
      title: 'Backend',
      icon: Database,
      techs: ['Python', 'Golang', 'Node.js', 'APIs']
    },
    tools: {
      title: 'Ferramentas',
      icon: Wrench,
      techs: ['Git', 'Docker', 'AWS', 'Linux', 'SCRUM']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-white/80 shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Lucas Marinho
            </h1>
            <div className="hidden md:flex gap-6">
              {navItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                    ${activeTab === key 
                      ? 'bg-indigo-100 text-indigo-600' 
                      : 'hover:bg-indigo-50 text-gray-600'}`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>                          
      {/* Hero */}
      <section 
        ref={sectionRefs.hero}
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center pt-20 px-4"
        style={{
          background: 'radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)'
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Desenvolvedor Full Stack
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl text-gray-600 mb-6">
              Desenvolvedor Full Stack com 2 anos de experiência, especializado em criar soluções web modernas e inovadoras usando React, Python e Golang.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Combinando criatividade técnica com pensamento estratégico para desenvolver aplicações web de alta performance e experiências de usuário excepcionais.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, link: 'https://github.com/lucas3034', label: 'GitHub' },
              { icon: Linkedin, link: 'https://linkedin.com/in/lucas-marinho-004162202', label: 'LinkedIn' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all
                  bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"
              >
                <social.icon size={20} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section
        ref={sectionRefs.stack}
        id="stack"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Stack Tecnológico
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(stackCategories).map(([key, { title, icon: Icon }]) => (
              <button
                key={key}
                onClick={() => setActiveStack(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all
                  ${activeStack === key 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-indigo-50'}`}
              >
                <Icon size={20} />
                {title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automações',
                description: 'Sistemas de automação usando Python e APIs',
                tech: ['Python', 'APIs', 'Webhook'],
                icon: Rocket
              },
              {
                title: 'Desenvolvimento de Chatbots',
                description: 'Chatbots inteligentes para atendimento',
                tech: ['DialogFlow', 'JavaScript', 'APIs'],
                icon: Brain
              },
              {
                title: 'Game Development',
                description: 'Desenvolvimento de jogos e narrativas',
                tech: ['GameMaker', 'ActionScript'],
                icon: Gamepad
              }
            ].map((project, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-300
                  ${hoveredCard === `project-${index}` ? 'scale-105 shadow-xl' : 'hover:shadow-lg'}`}
                onMouseEnter={() => setHoveredCard(`project-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <project.icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
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

      {/* Experience Section */}
      <section
        ref={sectionRefs.experience}
        id="experience"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Experiência Profissional
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                company: "PontesTur",
                role: "Estagiário em Inovação",
                period: "2024",
                description: "Desenvolvimento de soluções inovadoras usando Python e automações",
                tech: ["Python", "APIs", "Webhook"]
              },
              {
                company: "Encora",
                role: "Estagiário em Desenvolvimento",
                period: "2021 - 2023",
                description: "Desenvolvimento full stack com foco em aplicações web modernas",
                tech: ["React", "Golang", "AWS", "SCRUM"]
              },
              {
                company: "Intelligence",
                role: "Freelancer",
                period: "2018 - 2019",
                description: "Desenvolvimento de chatbots inteligentes para atendimento",
                tech: ["DialogFlow", "JavaScript"]
              }
            ].map((job, index) => (
              <Card
                key={index}
                className={`mb-6 transform transition-all duration-300
                  ${hoveredCard === `job-${index}` ? 'scale-102 shadow-xl' : 'hover:shadow-lg'}`}
                onMouseEnter={() => setHoveredCard(`job-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-600">{job.company}</h3>
                      <p className="text-lg font-medium text-gray-800">{job.role}</p>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <span className="text-gray-500">{job.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
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

      {/* Education Section */}
      <section
        ref={sectionRefs.education}
        id="education"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Formação Acadêmica
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div>
                  <GraduationCap className="w-12 h-12 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Ciências da Computação</h3>
                    <p className="text-indigo-600 font-medium">UniFBV</p>
                    <p className="text-gray-600">Bacharelado Completo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div>
                    <Award className="w-12 h-12 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Gestão em Tecnologia</h3>
                    <p className="text-indigo-600 font-medium">Faculdade Iguaçu</p>
                    <p className="text-gray-600">Pós-Graduação em andamento</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cursos e Certificações */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Cursos e Certificações
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'SAGA START',
                  description: 'Computação gráfica e design digital',
                  icon: Monitor
                },
                {
                  title: 'CALARTS',
                  description: 'Desenvolvimento de História e Narrativa para Videogames',
                  icon: Gamepad
                },
                {
                  title: 'DL Jovem',
                  description: 'Desenvolvimento e Liderança para Jovens',
                  icon: Users
                },
                {
                  title: 'Alura',
                  description: 'Imersão em Inteligência Artificial',
                  icon: Brain
                },
                {
                  title: 'Udemy',
                  description: 'Golang, CSS, HTML, JavaScript e Linux',
                  icon: Code
                }
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
                      <course.icon className="w-8 h-8 text-indigo-600" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{course.title}</h4>
                        <p className="text-gray-600 text-sm">{course.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Vamos Conversar?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:lucasmarinho3034@gmail.com"
                      className="text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      lucasmarinho3034@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <a 
                      href="tel:+5581998578090"
                      className="text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      (81) 99857-8090
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white font-medium rounded-lg
                      bg-gradient-to-r from-indigo-600 to-purple-600
                      hover:from-indigo-700 hover:to-purple-700
                      transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lucas Marinho</h3>
              <p className="text-gray-400">
                Desenvolvedor Full Stack com paixão por inovação e tecnologia
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <a href="https://github.com/lucas3034" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github size={18} />
                  Github
                </a>
                <a href="https://linkedin.com/in/lucas-marinho-004162202" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Localização</h4>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                Recife, PE - Brasil
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Lucas Marinho. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LucasMarinho;  