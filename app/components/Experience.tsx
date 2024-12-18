import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Innovate Solutions",
    location: "San Francisco, USA",
    startDate: "2021",
    endDate: null,
    responsibilities: [
      "Led a team of 5 developers on critical projects",
      "Implemented microservices architecture using Node.js and React",
      "Improved site performance by 40% through code optimization",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Digital Studio",
    location: "New York, USA",
    startDate: "2019",
    endDate: "2021",
    responsibilities: [
      "Developed responsive user interfaces using React and TypeScript",
      "Collaborated with designers to optimize user experience",
      "Integrated payment and authentication systems",
    ],
  },
];

export default function Experience() {
  return (
    <section className="border border-[#e5e7eb0f] rounded-lg p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-md duration-200 outline outline-1 outline-[#e5e7eb0f]"
          >
            <div className="flex items-center mb-2">
              <Briefcase className="w-6 h-6 mr-3 text-gray-300" />
              <h3 className="text-xl font-semibold flex-grow">
                {experience.position}
              </h3>
              <span className="text-sm text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {experience.startDate} - {experience.endDate || "Present"}
              </span>
            </div>
            <div className="ml-9 space-y-2">
              <p className="text-lg text-blue-400">{experience.company}</p>
              <p className="text-sm text-gray-400 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {experience.location}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
