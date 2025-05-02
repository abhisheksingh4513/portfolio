import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
`

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
`

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #8892b0;
  }
`

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const ProjectSubtitle = styled.h4`
  color: #64ffda;
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
`

const ProjectDescription = styled.div`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #64ffda;
      }
    }
  }
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

const TechItem = styled.li`
  color: #64ffda;
  font-size: 0.9rem;
  font-family: 'Fira Code', monospace;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
`

function Projects() {
  const projects = [
    {
      title: 'User Authentication System (JWT)',
      description: [
        'Developed a full-stack web application for user authentication using MongoDB, Express.js, React.js, and Node.js, implementing secure login, signup, and registration functionalities.',
        'Implemented industry-standard security practices, including password hashing and JWT for secure user sessions, creating a robust and scalable authentication system.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'BCrypt'],
      github: 'https://github.com/abhisheksingh4513/user_authentication-using-Node.js',
      live: '#'
    },
    {
      title: 'Expense Tracker Application',
      subtitle: 'Full-Stack Web Application for Financial Management',
      description: [
        'Built a responsive web application to track income, expenses, and overall balance using React.js and Tailwind CSS.',
        'Developed RESTful APIs with Node.js and Express.js for handling transactions and user authentication.',
        'Designed and implemented interactive pie charts using Recharts for financial data visualization.',
        'Utilized MongoDB for efficient data storage and Cloudinary for secure profile image uploads.',
        'Ensured secure user authentication with JWT and implemented robust error handling across the application.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Recharts', 'JWT', 'Cloudinary'],
      github: 'https://github.com/abhisheksingh4513/Expense-Tracker-Application',
      live: '#'
    },
    {
      title: 'AI Desktop Assistant',
      description: [
        'Engineered a voice-controlled desktop assistant using Python, HTML, CSS, and JavaScript, integrating libraries for task execution and speech recognition to enable hands-free commands.',
        'Implemented full-stack development with backend logic, responsive frontend, and API integration, while identifying future enhancements to demonstrate problem-solving skills.'
      ],
      tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Speech Recognition', 'API Integration'],
      github: '#',
      live: '#'
    }
  ]

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectLinks>
                {project.github !== '#' && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </ProjectLink>
                )}
                {project.live !== '#' && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectHeader>
            {project.subtitle && (
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
            )}
            <ProjectDescription>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </ProjectDescription>
            <TechList>
              {project.tech.map((tech, techIndex) => (
                <TechItem key={techIndex}>{tech}</TechItem>
              ))}
            </TechList>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects 