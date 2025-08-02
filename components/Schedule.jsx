
import React from 'react';
import { Calendar, PenTool, Users, Code, Mic, Trophy } from './icons/LucideIcons.jsx';

const Schedule = () => {
  const timelineEvents = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Registration Opens",
      date: "August 1, 2025"
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Ideathon Submission Deadline",
      date: "August 20, 2025"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Jury Selection & Finalist Announcement",
      date: "August 25, 2025"
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Build Sprint (10 Days)",
      date: "September 1 - September 10, 2025"
    },
    {
      icon: <Mic className="w-6 h-6 text-white" />,
      title: "Final Demo & Panel Discussion",
      date: "September 12, 2025"
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Award Distribution & Closing Ceremony",
      date: "September 12, 2025"
    },
  ];

  return (
    <section id="schedule" className="py-20 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Event <span className="text-[#C12A37]">Timeline</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Key dates and milestones for Codarambha 2025. Mark your calendars!
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-8 flex items-center w-full">
              {/* Desktop view: alternating sides */}
              <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'pl-8'}`}>
                 {index % 2 === 0 && (
                   <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-full hover:border-[#C12A37] transition-colors">
                     <h3 className="text-xl font-bold text-white">{event.title}</h3>
                     <p className="text-[#C12A37] font-semibold">{event.date}</p>
                   </div>
                 )}
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-[#C12A37] w-12 h-12 rounded-full items-center justify-center">
                {event.icon}
              </div>
              <div className={`hidden md:flex w-1/2 ${index % 2 !== 0 ? 'justify-start pl-8' : 'pr-8'}`}>
                 {index % 2 !== 0 && (
                   <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 w-full hover:border-[#C12A37] transition-colors">
                     <h3 className="text-xl font-bold text-white">{event.title}</h3>
                     <p className="text-[#C12A37] font-semibold">{event.date}</p>
                   </div>
                 )}
              </div>

              {/* Mobile view: single column */}
              <div className="flex md:hidden items-center w-full">
                <div className="bg-[#C12A37] w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  {event.icon}
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 w-full">
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-[#C12A37] font-semibold">{event.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
