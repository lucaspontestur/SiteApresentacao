import { useState, useEffect, useRef } from 'react';
import { Award, Star, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Card, CardContent } from "./ui/card"; // Note que mudei o caminho do import
const PontesTurSite = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs para as seções
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const awardsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const navItems = [
    { name: 'Início', ref: heroRef },
    { name: 'Experiência', ref: experienceRef },
    { name: 'Prêmios', ref: awardsRef },
    { name: 'Contato', ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Header com navegação de scroll suave */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-green-700">PontesTur</div>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  className="text-gray-600 hover:text-green-700 transition-colors"
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            38 Anos de Excelência em Turismo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformando sonhos em jornadas inesquecíveis desde 1986
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection(experienceRef)}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Conheça Nossa História
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="border border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nossa Experiência
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pacotes Personalizados',
                icon: <MapPin className="w-12 h-12 text-green-600" />,
                description: 'Mais de 10.000 roteiros customizados criados para nossos clientes'
              },
              {
                title: 'Atendimento Premium',
                icon: <Phone className="w-12 h-12 text-green-600" />,
                description: 'Suporte 24/7 em múltiplos idiomas para todos os nossos viajantes'
              },
              {
                title: 'Rede Global',
                icon: <Star className="w-12 h-12 text-green-600" />,
                description: 'Parcerias com as principais redes hoteleiras e companhias aéreas'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Reconhecimentos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: '2023',
                title: 'Melhor Agência de Turismo',
                organization: 'Prêmio Nacional do Turismo'
              },
              {
                year: '2022',
                title: 'Excelência em Atendimento',
                organization: 'Associação Brasileira de Agências de Viagens'
              },
              {
                year: '2021',
                title: 'Destaque em Inovação',
                organization: 'Fórum do Turismo Digital'
              },
              {
                year: '2020',
                title: 'Sustentabilidade no Turismo',
                organization: 'Green Tourism Awards'
              }
            ].map((award, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-12 h-12 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-green-600 font-semibold">{award.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Entre em Contato
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
                <textarea
                  placeholder="Mensagem"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PontesTur</h3>
              <p className="text-gray-400">
                Sua ponte para experiências únicas e memoráveis.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 1234-5678</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@pontestur.com.br</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Segunda a Sexta: 9h às 18h</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Sábado: 9h às 13h</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 PontesTur. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PontesTurSite;