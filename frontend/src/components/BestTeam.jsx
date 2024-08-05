import React from "react";

const BestTeam = () => {
  const teamList = [
    { name: "Team Alpha", description: "Top translation team" },
    { name: "Team Beta", description: "Expert in manga translations" },
    { name: "Team Gamma", description: "High-quality translations" },
    { name: "Team Delta", description: "Fast and accurate translations" },
  ];

  return (
    <section id="best-teams" className="py-16 lg:py-24 px-2 bg-teal-700">
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="common-container mb-8 lg:mb-12">
          <div className="uppercase font-bold text-xl text-gray-700">
            Nhóm dịch hàng đầu
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamList.map((team, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{team.name}</h3>
              <p className="text-gray-700">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestTeam;
