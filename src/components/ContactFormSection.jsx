import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

const translations = {
  pt: {
    title: 'Entre em Contato:',
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    sendButton: 'Enviar Mensagem',
    sending: 'Enviando...',
    error: 'Erro ao enviar mensagem. Tente novamente.',
    success: 'Mensagem enviada com sucesso!',
  },
  en: {
    title: 'Get in Touch:',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendButton: 'Send Message',
    sending: 'Sending...',
    error: 'Error sending message. Please try again.',
    success: 'Message sent successfully!',
  },
};

const ContactFormSection = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const t = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await emailjs.send(
        'service_ymkf4xp',
        'template_pr4m0rf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Lucas Marinho',
        },
        'AKlqBNUsagBezz8pn',
      );

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 3000);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        loading: false,
        error: t.error,
        success: false,
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-cyan-600 text-transparent bg-clip-text">
          {t.title}
        </h2>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.name}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.email}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.message}
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-lg hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Mail className="mr-2" />
                    {t.sendButton}
                  </>
                )}
              </button>

              {status.error && (
                <p className="text-red-500 text-center">{status.error}</p>
              )}

              {status.success && (
                <p className="text-green-500 text-center">{t.success}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

ContactFormSection.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ContactFormSection;
