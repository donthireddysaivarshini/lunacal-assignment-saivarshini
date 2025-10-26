import { useState } from 'react';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

const sampleImages = [
  'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/15104217/pexels-photo-15104217.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=600'
];

export default function GalleryWidget() {
  const [images, setImages] = useState<string[]>(sampleImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  const handleAddImage = () => {
    const newImage = `https://images.pexels.com/photos/${Math.floor(Math.random() * 9000000)}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=600`;
    setImages([...images, newImage]);
  };

  const handlePrevious = () => {
    setLeftActive(true);
    setTimeout(() => setLeftActive(false), 200);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setRightActive(true);
    setTimeout(() => setRightActive(false), 200);
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full bg-[#363C43] rounded-[18.89px] p-6 relative" style={{ boxShadow: '5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)' }}>
      <div className="absolute left-4 top-6 flex flex-col gap-[105px]">
        <HelpCircle className="w-6 h-6 text-[#A3ADBA]" />
        <div className="w-6 h-8 grid grid-cols-2 gap-[1.38px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16px]" />
          ))}
        </div>
      </div>

      <div className="ml-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-12">
            <button className="bg-black px-10 py-4 rounded-[20px]">
              <h2 className="text-white text-[20px] font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Gallery</h2>
            </button>
            <button
              onClick={handleAddImage}
              className="px-6 py-3 rounded-[104px] text-white text-[12px] font-extrabold uppercase transition-all duration-200"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                boxShadow: '-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.91px rgba(255, 255, 255, 0.05), inset 0px 3.26px 3.26px rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(52.28px)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                lineHeight: '6px'
              }}
            >
              + Add Image
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-[45px] h-[45px] rounded-full flex items-center justify-center transition-colors duration-100 disabled:opacity-50`}
              style={{
                background: leftActive ? '#007BFF' : 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                boxShadow: '4px 5px 30px 5px #101010, inset 0px 3.26px 3.26px rgba(255, 255, 255, 0.15)'
              }}
            >
              <ArrowLeft className="w-5 h-5 text-[#6F787C]" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 3}
              className={`w-[45px] h-[45px] rounded-full flex items-center justify-center transition-colors duration-100 disabled:opacity-50`}
              style={{
                background: rightActive ? '#007BFF' : 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                boxShadow: '4px 5px 30px 5px #101010, inset 0px 3.26px 3.26px rgba(255, 255, 255, 0.15)'
              }}
            >
              <ArrowRight className="w-5 h-5 text-[#6F787C]" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)`
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(33.333%-16px)] aspect-square relative group"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-[24px] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-1 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out rounded-[24px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <div
          className="w-[200px] h-[4px] rounded-full"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.33)',
            backdropFilter: 'blur(4.92px)'
          }}
        />
      </div>
    </div>
  );
}
