import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

type TabType = 'about' | 'experiences' | 'recommended';

const tabContent: Record<TabType, string> = {
  about: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  experiences: "I have extensive experience in enterprise software sales, working with Fortune 500 companies to implement scalable CRM solutions. My expertise includes customer relationship management, sales strategy development, and team leadership.\n\nThroughout my career, I've successfully closed deals worth over $50M and have consistently exceeded quarterly targets by 120%.",
  recommended: "Based on my experience, I highly recommend focusing on building strong customer relationships and understanding their unique pain points. Success in sales comes from being a trusted advisor rather than just a vendor.\n\nI also recommend continuous learning and staying updated with the latest CRM technologies and sales methodologies."
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
