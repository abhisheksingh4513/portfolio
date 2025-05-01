import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
`

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 50px;
`

const AboutText = styled(motion.div)`
  h2 {
    color: #ccd6f6;
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }
  
  p {
    color: #8892b0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`

const SkillItem = styled.div`
  color: #8892b0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '▹';
    color: #64ffda;
    margin-right: 0.5rem;
  }
`

function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'HTML & CSS',
    'Python',
    'SQL',
    'Git',
    'Docker',
    'AWS'
  ]

  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hello! I'm Abhishek, a passionate software developer with a strong
            foundation in web development. I enjoy creating things that live on
            the internet, whether that be websites, applications, or anything in
            between.
          </p>
          <p>
            My goal is to always build applications that are scalable and efficient
            under the hood while providing engaging, pixel-perfect user experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </AboutText>
      </AboutContent>
    </AboutSection>
  )
}

export default About 