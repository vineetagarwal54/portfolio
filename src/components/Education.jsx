import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import OptimizedImage from './OptimizedImage';
  import "react-vertical-timeline-component/style.min.css";
  import { education } from "../constants";
  
  const EducationCard = ({ education }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "var(--bg-secondary-alt)", color: "var(--fg-primary)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--border)" }}
      className="group"
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <a 
            href={education.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300"
            title={`Visit ${education.company_name} website`}
          >
            <OptimizedImage
              src={education.icon}
              alt={education.company_name}
              className="w-[100%] h-[100%] object-contain rounded-full"
            />
          </a>
        </div>
      }
    >
      <div>
        <h3 className="text-fg text-[24px] group-hover:text-accent transition-colors">{education.title}</h3>
        <p className="muted text-[16px] font-semibold" style={{ margin: 0 }}>
          {education.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className="text-fg text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
  
  const Education = () => {
    return (
      <div className="pb-4">
        <div className="mt-16 flex flex-col">
          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default Education;
  