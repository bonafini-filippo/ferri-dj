'use client';
import { IoShareOutline } from 'react-icons/io5';

interface ShareButtonProps {
  className: string;
}

const ShareButton = ({ className }: ShareButtonProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Condividi questa pagina',
          text: 'Guarda questa fantastica pagina!',
          url: window.location.href, // URL attuale
        });
        console.log('Condivisione avvenuta con successo!');
      } catch (error) {
        console.error('Errore durante la condivisione:', error);
      }
    } else {
      alert('La condivisione non è supportata dal tuo browser.');
    }
  };

  return (
    <button onClick={handleShare} className={className}>
      <IoShareOutline size={27} className="text-white" />
    </button>
  );
};

export default ShareButton;
