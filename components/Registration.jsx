
import React from 'react';

const Registration = () => {
  return (
    <section id="registration" className="py-20 sm:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Ready to Build the <span className="text-[#C12A37]">Future</span>?
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Form your team, sharpen your ideas, and get ready to compete. Registration is now open!
        </p>
        <div className="mt-12">
          <a
            href="https://forms.google.com/your-hackathon-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C12A37] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Join the Hackathon
          </a>
        </div>
        <div className="mt-8 text-slate-400">
          <p>Registration Deadline: <span className="font-bold text-white">August 20, 2025</span></p>
          <p className="mt-2 text-sm">
            Limited to Sunway College students. Teams can have a maximum of 4 members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
