import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

type TabType = 'about' | 'experiences' | 'recommended';

const tabContent: Record<TabType, string> = {
about: "Hello! I'm Donthireddy Sai Varshini, an AI-native Frontend & Full Stack Developer passionate about blending creativity with technology. I've been exploring the intersection of web development and AI for the past few years, creating intelligent, human-like interfaces.\n\nI was born and raised in Hyderabad, where I’m currently pursuing my B.Tech in Computer Science (IoT). When I’m not coding, I enjoy mentoring students, exploring design ideas, and experimenting with conversational AI experiences that make technology feel more personal.",
  
experiences: "I have hands-on experience in full stack development and AI-powered frontend engineering, having built production-ready applications using React, Next.js, TypeScript, and Google Gemini AI.\n\nDuring my internship at Infosys Springboard, I developed high-performance dashboards and smart web scrapers that improved efficiency by 15%. As a freelance mentor, I’ve guided over 10 students in mastering coding fundamentals, helping them improve their performance by up to 20%.",
  
recommended: "Based on my experience, I highly recommend embracing the shift toward AI-native development — where interfaces think, learn, and adapt to users. Building meaningful digital experiences starts with empathy, clarity, and innovation.\n\nI also recommend continuous experimentation — explore, break, rebuild, and evolve your ideas. The best developers are lifelong learners who turn curiosity into creativity."

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

      <div className="bg-[#171717] rounded-[23px] p-6 ml-12" style={{ boxShadow: 'inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)' }}>
        <div className="relative flex items-center gap-[6px] mb-8">
          <div
            className="absolute h-[49px] w-[195px] bg-[#28292F] rounded-[16px] transition-all duration-300 ease-in-out"
            style={{
              left: `${tabs.findIndex(t => t.id === activeTab) * 201}px`,
              boxShadow: '-8.43px -16.87px 50.6px -16.87px #485B71, 13.49px 16.87px 67.47px 8.43px #0A0A0A'
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative h-[49px] w-[195px] rounded-[16px] font-medium text-[18px] transition-all duration-300 z-10 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-[#A3ADB2]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '16px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="rounded-[27px] p-8 border border-[#96BEE7]"
          style={{ backgroundColor: 'rgba(97, 97, 97, 0.82)' }}
        >
          <p className="text-[#969696] text-[20px] leading-[25px] whitespace-pre-line" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {tabContent[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
}
