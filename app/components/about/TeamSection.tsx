// app/pages/about/components/TeamSection.tsx
import React from "react";
import { Users } from "lucide-react";
import { teamMembers } from "~/data/aboutData";


const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 mb-6">
            <Users className="h-4 w-4 mr-1" />
            <span>Conozca a nuestros expertos</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nuestro equipo</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Personas apasionadas que trabajan diariamente para ofrecerle el mejor servicio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`Foto de ${member.name}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/api/placeholder/300/300";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-[15px] dark:text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-700 text-sm dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;