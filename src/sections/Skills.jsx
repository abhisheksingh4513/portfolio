import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaReact, 
  FaDatabase, 
  FaPalette,
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGitAlt
} from 'react-icons/fa'
import { 
  SiCplusplus, 
  SiMongodb, 
  SiMysql, 
  SiNumpy, 
  SiPandas,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiPostgresql
} from 'react-icons/si'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: #0a192f;
`

const SkillsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
`

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
`

const SkillCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const CategoryCard = styled(motion.div)`
  background: #112240;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #64ffda;
  font-size: 1.2rem;
  
  svg {
    font-size: 1.5rem;
  }
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8892b0;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  transition: transform 0.2s ease;
  
  svg {
    color: #64ffda;
  }
  
  &:hover {
    transform: translateY(-2px);
    color: #64ffda;
  }
`

function Skills() {
  const skillsData = [
    {
      category: "Computer Languages",
      icon: <FaCode />,
      skills: [
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> }
      ]
    },
    {
      category: "Frameworks/Libraries",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Numpy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> }
      ]
    },
    {
      category: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Convex", icon: <FaDatabase /> }
      ]
    },
    {
      category: "Frontend Development & Tools",
      icon: <FaPalette />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Git", icon: <FaGitAlt /> }
      ]
    }
  ]

  return (
    <SkillsSection id="skills">
      <SkillsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </SectionTitle>
        <SkillCategories>
          {skillsData.map((category, index) => (
            <CategoryCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>
                {category.icon}
                {category.category}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    {skill.icon}
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </SkillCategories>
      </SkillsContent>
    </SkillsSection>
  )
}

export default Skills 