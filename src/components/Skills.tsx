import React from 'react';

const Skills = () => {
  const skills = {
    'Technical Skills': ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'],
    'Development Tools': ['Git', 'VS Code', 'Docker', 'AWS', 'Firebase'],
    'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management'],
    'Creative Skills': ['Photography', 'UI/UX Design', 'Adobe Creative Suite']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 text-gray-600 min-w-[100px]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;