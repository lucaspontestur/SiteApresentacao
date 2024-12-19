import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropTypes from 'prop-types';

const VideoModal = ({ isOpen, onClose, title, description, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl relative">
        <Card className="bg-white">
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>
            <div className="relative pt-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                controls
                autoPlay
              >
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  videoSrc: PropTypes.string,
};

VideoModal.defaultProps = {
  title: '',
  description: '',
  videoSrc: '',
};

export default VideoModal;
