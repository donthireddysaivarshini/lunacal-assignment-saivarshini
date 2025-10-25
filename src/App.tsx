import TabWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(180deg, #373E44 0%, #191B1F 100%)' }}>
      <div className="w-full max-w-[1728px] h-[895px] grid grid-cols-2 gap-12">
        <div className="h-full flex items-center justify-center">
          <div className="text-gray-500 text-center">
          </div>
        </div>
        <div className="h-full flex flex-col gap-8">
          <TabWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
