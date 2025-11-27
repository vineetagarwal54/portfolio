import { projects } from "../constants"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn, textVariant } from "../utils/motion"
import { FaGithub } from "react-icons/fa6"
import github from "../assets/github.png"
import AnimateOnScroll from "./AnimateOnScroll"
import OptimizedImage from "./OptimizedImage"
import { useState, useEffect } from "react"
import { trackProjectClick } from "../services/analytics"

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  
  const mobileHoverClass = "hover:scale-[1.02] transition-transform duration-300";
  
  const CardContent = () => (
    <div className={`group card card-alt p-5 rounded-xl sm:w-[360px] w-full shadow-soft hover:shadow-accent-ring transition-shadow duration-300 mb-8 mt-2 focus:outline-none focus:ring-2 focus:ring-accent-ring border-2 border-transparent hover:border-accent ${isMobile ? mobileHoverClass : ''}`}>
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[230px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden" >
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} on GitHub`}
          title={`Click to view ${name} on GitHub`}
          className="block w-full h-full cursor-pointer group/image"
          onClick={() => trackProjectClick(name)}
        >
          <OptimizedImage 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain rounded-xl md:transition-transform md:duration-300 md:group-hover/image:scale-105" 
            lazy={true}
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/0 md:group-hover/image:bg-black/10 md:transition-colors md:duration-300 rounded-xl" />
        </a>
        
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 pointer-events-none" >
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${name}`}
            title={`View ${name} on GitHub`}
            className="bg-accent w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-ring md:hover:bg-accent-hover transition-colors duration-200 shadow-lg md:hover:scale-110 md:transition-transform pointer-events-auto"
            onClick={() => trackProjectClick(name)}
          >
            <FaGithub className="text-white text-lg sm:text-xl md:text-2xl" />
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-fg font-bold text-[24px] md:group-hover:text-accent transition-colors" >{name}</h3>
        <p className="mt-2 muted text-[14px]" >{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" >
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color} `} >#{tag.name}</p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
      {isMobile ? (
        <CardContent />
      ) : (
        <Tilt options={{max:25, scale:1, speed:800}}>
          <CardContent />
        </Tilt>
      )}
    </motion.div>
  )
}

const Project = () => {
  return (
    <div className="pb-16">
      <AnimateOnScroll>
        <h2 className="mb-16 text-center text-4xl leading-tight">
          <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent font-bold inline-block py-2">
            Projects
          </span>
        </h2>
        <div className="mt-20 flex flex-wrap gap-12 justify-center" >
            {projects.map((project,index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}

        </div>
        </AnimateOnScroll>
    </div>
  )
}

export default Project