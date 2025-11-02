import { projects } from "../constants"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn, textVariant } from "../utils/motion"
import { FaGithub } from "react-icons/fa6"
import github from "../assets/github.png"
import AnimateOnScroll from "./AnimateOnScroll"
import OptimizedImage from "./OptimizedImage"

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
        <Tilt options={{max:45,scale:1,speed:450}} className="group card card-alt p-5 rounded-xl sm:w-[360px] w-full shadow-soft hover:shadow-accent-ring transition-all duration-300 mb-8 mt-2 focus:outline-none focus:ring-2 focus:ring-accent-ring border-2 border-transparent hover:border-accent" >
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[230px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden" >
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} source code on GitHub`}
          title={`Click to view ${name} on GitHub`}
          className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
        >
          <OptimizedImage 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain rounded-xl" 
            lazy={true}
            priority={index < 2} // Prioritize first 2 project images
          />
        </a>
        <div className="absolute inset-0 flex justify-end pointer-events-none" >
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${name}`}
            title={`View source code for ${name}`}
            className="bg-accent w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-ring pointer-events-auto"
          >
            <OptimizedImage 
              src={github} 
              alt="github" 
              className="w-1/2 h-1/2 object-contain" 
              priority={true}
              lazy={false}
            />
          </a>
        </div>
      </div>
            <div className="mt-5">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  <h3 className="text-fg font-bold text-[24px] group-hover:text-accent transition-colors" >{name}</h3>
                </a>
                <p className="mt-2 muted text-[14px]" >{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2" >
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color} `} >#{tag.name}</p>
                ))}

            </div>

        </Tilt>


    </motion.div>
  )
}

const Project = () => {
  return (
    <div className="pb-16">
      <AnimateOnScroll>
        <h2 className="mb-16 text-center text-4xl">
          <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent font-bold">
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