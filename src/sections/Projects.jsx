import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  @media (max-width: 600px) {
    padding: 60px 0 30px 0;
  }
`

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  @media (max-width: 600px) {
    padding: 0 10px;
    gap: 1.2rem;
  }
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
  @media (max-width: 600px) {
    padding: 1.1rem;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #8892b0;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`

const ProjectSubtitle = styled.h4`
  color: #64ffda;
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
  }
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
  @media (max-width: 600px) {
    font-size: 0.92rem;
    margin-bottom: 1rem;
  }
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`

const TechItem = styled.li`
  color: #64ffda;
  font-size: 0.9rem;
  font-family: 'Fira Code', monospace;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }
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
    },
    {
      title: 'Secure File Sharing System',
      subtitle: 'Python, FastAPI',
      description: [
        'Developed a robust file sharing system with military-grade security features including JWT authentication, bcrypt password hashing, and encrypted one-time use download URLs, ensuring complete data protection and secure access control.',
        'Role-Based Access Control Architecture: Engineered a sophisticated role-based permission system separating operations users (upload capabilities) from client users (download access), with mandatory email verification and strict endpoint protection based on user roles.',
        'Comprehensive API Development: Created a complete RESTful API system with FastAPI featuring 8+ endpoints for authentication flows and file operations, documented with Swagger/OpenAPI, and thoroughly tested with a Postman collection suite for seamless integration.'
      ],
      tech: ['Python', 'FastAPI', 'JWT', 'BCrypt', 'Swagger/OpenAPI', 'Role-Based Access Control', 'Email Verification', 'Postman'],
      github: 'https://github.com/abhisheksingh4513/Secure-sharing-system_2200330100014',
      live: '#'
    },{
      title: 'ADmyBRAND Insights Dashboard',
      subtitle: 'Full-Stack Analytics Dashboard',
      description: [
        'Built full-stack analytics dashboard using Next.js 15, TypeScript, and Tailwind CSS with 13+ reusable components',
        'Implemented interactive data visualizations with Recharts library, displaying real-time metrics and business insights',
        'Developed responsive UI/UX with dark/light theme toggle, mobile-first design, and accessibility compliance',
        'Created advanced features including PDF/CSV export, data filtering, pagination, and website performance analysis',
        'Deployed production application on Vercel with optimized performance and CI/CD integration',
        'Integrated modern tech stack including shadcn/ui components, Next.js App Router, and TypeScript for type safety'
      ],
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts', 'shadcn/ui', 'Vercel', 'App Router'],
      github: '#',
      live: 'https://ai-powered-analytics-dashboard-nyje08v27.vercel.app/'
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