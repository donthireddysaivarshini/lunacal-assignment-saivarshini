import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

type TabType = 'about' | 'experiences' | 'recommended';

const tabContent: Record<TabType, string> = {
about: "Hi! I'm Donthireddy Sai Varshini, an AI-native Frontend & Full Stack Developer passionate about building smart, interactive web experiences. I love turning ideas into digital products using React, Next.js, and Gemini AI. \n\nBased in Hyderabad, I'm currently pursuing my B.Tech in CSE and enjoy exploring creative tech projects in my free time.",

experiences: "I've gained practical experience through projects and internships, developing AI-powered apps and full stack systems. At Infosys Springboard, I built responsive dashboards and intelligent web scrapers that improved performance by 15%.\n\n I also mentor students in coding, helping them strengthen problem-solving and logic-building skills.",

recommended: "I recommend focusing on creativity and adaptability while learning to build modern web solutions. \n\nStay curious, explore new tools, and experiment fearlessly. \n\nSuccess in tech comes from combining problem-solving with a user-first mindset and continuous learning."

};

export default function TabWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  return (
    <div className="w-full bg-[#363C43] rounded-[18.89px] p-4 relative" style={{ boxShadow: '5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)' }}>
      <div className="absolute left-4 top-4 flex flex-col gap-[105px]">
        <HelpCircle className="w-6 h-6 text-[#A3ADBA]" />
        <div className="w-6 h-8 grid grid-cols-2 gap-[1.38px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16px]" />
          ))}
        </div>
      </div>

      <div className="bg-[#363C43] rounded-[23px] p-6 ml-12" style={{ boxShadow: 'inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)' }}>
        <div className="relative flex items-center gap-[6px] mb-8 bg-[#171717] rounded-[20px] p-1">
         {tabs.map((tab) => (
  <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className={`group relative h-[49px] w-[195px] rounded-[16px] font-medium text-[16px] transition-all duration-300 z-10 flex items-center justify-center ${
      activeTab === tab.id
        ? 'text-white'
        : 'text-[#A3ADB2] hover:text-[#C5CDD2]'
    }`}
    style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '16px' }}
  >
    {tab.label}

    {activeTab === tab.id && (
      <motion.div
        layoutId="active-tab-bg"
        className="absolute inset-0 bg-[#28292F] rounded-[16px] -z-10"
        style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 150,  // 🔹 slower animation
          damping: 35       // 🔹 smoother stop
        }}
      />
    )}

    {activeTab !== tab.id && (
      <div
        className="absolute inset-0 bg-[#28292F] rounded-[16px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"
      />
    )}
  </button>
))}

        </div>

{/* This <p> tag replaces the inner box you wanted to remove */}
        <p 
          className="text-[#A3ADB2] whitespace-pre-line" // Text color changed to be light, like in your image
          style={{ 
            fontFamily: 'Plus Jakarta Sans, sans-serif', 
            fontWeight: 400, 
            fontSize: '18px',
            lineHeight: '130%', 
            letterSpacing: '0.5px'
          }}
        >
          {tabContent[activeTab]}
        </p>
      </div>
    </div>
  );
}
