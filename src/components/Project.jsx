import { projects } from "../constants"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn, textVariant } from "../utils/motion"
import { FaGithub } from "react-icons/fa6"
import github from "../assets/github.png"

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
        <Tilt options={{max:45,scale:1,speed:450}} className="bg-white p-5 rounded-2xl sm:w-[360px] w-full" >
            <div className="relative w-full h-[230px]" >
                <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex justify-end" >
                    <div onClick={() => window.open(source_code_link,"_blank") } className=" bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" >
                        <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-black font-bold text-[24px]" >{name}</h3>
                <p className="mt-2 text-gray-700 text-[14px]" >{description}</p>
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
    <div className="pb-24" >
        <h2 className="my-20 text-center text-4xl" >Projects</h2>
        <div className="mt-20 flex flex-wrap gap-12 justify-center" >
            {projects.map((project,index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}

        </div>
    </div>
  )
}

export default Project