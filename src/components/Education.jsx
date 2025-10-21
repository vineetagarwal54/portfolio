// // import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { education } from "../constants";
  
  const EducationCard = ({ education }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.company_name}
            className="w-[100%] h-[100%] object-contain rounded-full "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px]">{education.title}</h3>
        <p className="text-grey text-[16px] font-semibold" style={{ margin: 0 }}>
          {education.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
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
  