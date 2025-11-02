import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import OptimizedImage from './OptimizedImage';
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "var(--bg-secondary-alt)", color: "var(--fg-primary)" }}
    contentArrowStyle={{ borderRight: "7px solid var(--border)" }}
    className="group"
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <a 
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300"
          title={`Visit ${experience.company_name} website`}
        >
          <OptimizedImage
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain rounded-full"
          />
        </a>
      </div>
    }
  >
    <div>
      <h3 className="text-fg text-[24px] group-hover:text-accent transition-colors">{experience.title}</h3>
      <p className="muted text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-fg text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="pb-4">
      {/* <h2 className="my-20 text-center text-4xl">Experience</h2> */}
      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
