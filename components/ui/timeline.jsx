import React from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MapPin, Trophy, Award, Medal, Star } from "../icons/LucideIcons.jsx";

// Timeline component with proper scroll animations
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-slate-900 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-4xl">
          Hackathon <span className="text-[#C12A37]">Journey</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-4">
          From ideation to implementation - follow the complete Codarambha experience
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-900 border-2 border-[#C12A37] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#C12A37] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-[#C12A37]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#C12A37]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#C12A37] via-red-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "Phase 1: Ideathon Round",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-300 md:text-base">
            The journey begins with registrations and live pitch presentations in front of expert jury members on campus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Event Launch</h4>
              <p className="text-slate-400 text-sm">Aug 1-4: Official launch and registrations open</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Registration Window</h4>
              <p className="text-slate-400 text-sm">Aug 4-23: Teams register and prepare ideas</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Pitch Preparation</h4>
              <p className="text-slate-400 text-sm">Aug 23-24: Slot scheduling and team briefing</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Live Ideathon</h4>
              <p className="text-slate-400 text-sm">Aug 26: Teams present live on campus</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#C12A37]/10 to-slate-800/30 rounded-lg p-4 border border-[#C12A37]/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#C12A37] rounded-full"></div>
              <h4 className="text-[#C12A37] font-semibold">Key Milestone</h4>
            </div>
            <p className="text-slate-300 text-sm">Aug 27: Top 8 Finalist Teams Announcement</p>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2: Build Sprint (10 Days)",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-300 md:text-base">
            Intensive 10-day development phase where finalist teams build their solutions with dedicated mentor support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Sprint Begins</h4>
              <p className="text-slate-400 text-sm">Aug 28: Development phase kicks off</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Mid-Sprint Check</h4>
              <p className="text-slate-400 text-sm">Aug 28: Progress updates and guidance</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Mentor Support</h4>
              <p className="text-slate-400 text-sm">Aug 27-Sept 3: Continuous mentorship</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Final Submission</h4>
              <p className="text-slate-400 text-sm">Sept 3: GitHub, slides, demo video due</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#C12A37]/10 to-slate-800/30 rounded-lg p-4 border border-[#C12A37]/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#C12A37] rounded-full"></div>
              <h4 className="text-[#C12A37] font-semibold">Sprint Focus Areas</h4>
            </div>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• AI-powered disaster response systems</li>
              <li>• Smart urban mobility solutions</li>
              <li>• MVP development and testing</li>
              <li>• Documentation and presentation prep</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3: Onsite Hackathon Finale",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-slate-300 md:text-base">
            The ultimate showdown! Teams present their solutions in person for final evaluation, panel discussions, and awards ceremony.
          </p>
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-[#C12A37]/10 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <h4 className="text-blue-400 font-semibold">Venue Information</h4>
            </div>
            <p className="text-slate-300 text-sm">Location to be announced soon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Friday, Sept 6</h4>
              <div className="text-slate-400 text-sm space-y-1">
                <p>• 3:00 PM: Team arrivals</p>
                <p>• 4:00 PM: Hackathon finale begins</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
              <h4 className="text-[#C12A37] font-semibold mb-2">Saturday, Sept 7</h4>
              <div className="text-slate-400 text-sm space-y-1">
                <p>• Project presentations</p>
                <p>• Jury evaluation</p>
                <p>• Panel discussion</p>
                <p>• Awards ceremony</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 to-[#C12A37]/10 rounded-lg p-4 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h4 className="text-amber-400 font-semibold">Awards & Recognition</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-white font-semibold">Best Innovation</div>
                <div className="text-slate-400 text-xs">Top creative solution</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Medal className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-white font-semibold">Technical Excellence</div>
                <div className="text-slate-400 text-xs">Best implementation</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-white font-semibold">Social Impact</div>
                <div className="text-slate-400 text-xs">Greatest societal benefit</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="timeline" className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
