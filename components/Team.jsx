
import React from 'react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Core Lead', imageUrl: 'https://placehold.co/150x150/C12A37/white?text=AJ' },
  { name: 'Bob Williams', role: 'Logistics Head', imageUrl: 'https://placehold.co/150x150/4f46e5/white?text=BW' },
  { name: 'Charlie Brown', role: 'Marketing Lead', imageUrl: 'https://placehold.co/150x150/16a34a/white?text=CB' },
  { name: 'Diana Miller', role: 'Sponsorship Coordinator', imageUrl: 'https://placehold.co/150x150/fbbf24/black?text=DM' },
  { name: 'Ethan Davis', role: 'Tech Lead', imageUrl: 'https://placehold.co/150x150/0ea5e9/white?text=ED' },
  { name: 'Fiona Garcia', role: 'Event Manager', imageUrl: 'https://placehold.co/150x150/db2777/white?text=FG' },
  { name: 'George Smith', role: 'Design Lead', imageUrl: 'https://placehold.co/150x150/6d28d9/white?text=GS' },
  { name: 'Hannah Wilson', role: 'Volunteer Coordinator', imageUrl: 'https://placehold.co/150x150/f97316/white?text=HW' },
];

const Team = () => {
  return (
    <section id="team" className="py-20 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Meet the <span className="text-[#C12A37]">Organizing Team</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            The passionate individuals working behind the scenes to make Codarambha a success.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-slate-800/50 p-6 rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
              <img
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 object-cover"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-[#C12A37]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
