import { useState, useEffect, useRef, useMemo } from 'react';
import ContactFormSection from './ContactFormSection';
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

const LucasMarinhoIng = ({ setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStack, setActiveStack] = useState('front');
  const [mobileMenu, setMobileMenu] = useState(false);

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
    { key: 'hero', label: 'About', icon: Brain },
    { key: 'stack', label: 'Stack', icon: Terminal },
    { key: 'projects', label: 'Skills', icon: Rocket },
    { key: 'experience', label: 'Experience', icon: Briefcase },
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'contact', label: 'Contact', icon: Mail },
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
      title: 'Tools',
      icon: Wrench,
      techs: ['Git', 'Docker', 'AWS', 'Linux', 'SCRUM'],
    },
  };

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
                onClick={() => setLanguage('pt')}
                className="flex items-center gap-1 px-2 md:px-4 py-2 text-sm md:text-base rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-all"
              >
                <Globe size={16} />
                <span className="hidden md:inline">English</span>
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
            Full Stack Developer
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              My name is Lucas Marinho Rodrigues and I created this website
              using ReactJS.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              I have 2 years of experience, advanced English and other
              qualifications. I am open to new opportunities.
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
              href="/Resume Lucas Marinho.pdf"
              download
              className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-white text-sm md:text-base transition-all
                bg-gradient-to-r from-cyan-600 to-teal-600 hover:scale-105"
            >
              <FileDown size={20} />
              Resume
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
            Technology Stack
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
            Featured Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend',
                description:
                  'Development of automations, API integrations and Databases',
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
                title: 'Artificial Intelligence',
                description:
                  'Study and development of artificial intelligence and chatbots for customer service',
                tech: ['DialogFlow', 'APIs', 'Gemini'],
                icon: Brain,
              },
              {
                title: 'Frontend',
                description: 'Development of modern and responsive interfaces',
                tech: [
                  'Javascript',
                  'React',
                  'Vue.js',
                  'HTML and CSS',
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
        </div>
      </section>

      <section
        ref={sectionRefs.experience}
        id="experience"
        className="py-20 bg-white/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                company: 'PontesTur',
                role: 'Innovation Intern',
                period: '2024',
                description:
                  'Development of innovative solutions using Python and automation',
                tech: ['Python', 'APIs', 'Webhook', 'SQL Server'],
              },
              {
                company: 'Encora',
                role: 'Development Intern',
                period: '2021 - 2023',
                description:
                  'Full stack development focused on modern web applications',
                tech: ['React', 'Golang', 'AWS', 'SCRUM'],
              },
              {
                company: 'Intelligence',
                role: 'Freelancer',
                period: '2018 - 2019',
                description:
                  'Development of intelligent chatbots for customer service',
                tech: ['DialogFlow', 'AI'],
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
            Academic Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div>
                    <GraduationCap className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Computer Science</h3>
                    <p className="text-emerald-600 font-medium">UniFBV</p>
                    <p className="text-gray-600">Complete Bachelors Degree</p>
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
                      Technology Management
                    </h3>
                    <p className="text-emerald-600 font-medium">
                      Faculdade Iguaçu
                    </p>
                    <p className="text-gray-600">Postgraduate in progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Courses and Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'SAGA START',
                  description: 'Computer graphics and digital design',
                  icon: Monitor,
                },
                {
                  title: 'CALARTS',
                  description: 'Game Story and Narrative Development',
                  icon: Gamepad,
                },
                {
                  title: 'DL Jovem',
                  description: 'Youth Development and Leadership',
                  icon: Users,
                },
                {
                  title: 'Alura',
                  description: 'Artificial Intelligence Immersion',
                  icon: Brain,
                },
                {
                  title: 'Udemy',
                  description: 'Golang, CSS, HTML, JavaScript and Linux',
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
          <ContactFormSection language="en" />
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
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:+5581998578090"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      +55 (81) 99857-8090
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
              <p className="text-gray-400">Full Stack Developer</p>
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
              <h4 className="text-xl font-semibold mb-4">Location</h4>
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <MapPin size={18} />
                Recife, PE - Brazil
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Made by Lucas Marinho Rodrigues</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

LucasMarinhoIng.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LucasMarinhoIng;
