import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from './card';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

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
          to_name: 'PontesTur'
        },
        'AKlqBNUsagBezz8pn'
      );

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        loading: false,
        error: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
        success: false
      });
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status.loading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              'Enviar Mensagem'
            )}
          </button>

          {status.error && (
            <p className="text-red-500 text-center">{status.error}</p>
          )}

          {status.success && (
            <p className="text-green-500 text-center">
              Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
