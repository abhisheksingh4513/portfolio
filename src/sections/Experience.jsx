import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
`;

const ExperienceContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 50px;
`;

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  background: #112240;
  border-radius: 4px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ExperienceDetails = styled.div`
  h3 {
    color: #ccd6f6;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .company {
    color: #64ffda;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  .duration {
    color: #8892b0;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.2rem;
  }

  li {
    color: #8892b0;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    line-height: 1.5;
  }
`;

const ExperiencePeriod = styled.div`
  color: #64ffda;
  font-size: 0.9rem;
  text-align: right;
  white-space: nowrap;
  margin-left: 1rem;

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

function Experience() {
  const experienceData = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'GoGetWell.ai',
      duration: 'June 2025 - Present',
      description: [
        'Developing and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Implementing responsive and interactive user interfaces with modern React practices',
        'Building and integrating RESTful APIs for seamless frontend-backend communication',
        'Collaborating with the team to design and implement new features',
        'Participating in code reviews and following best practices'
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </SectionTitle>
        <ExperienceList>
          {experienceData.map((exp, index) => (
            <ExperienceItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceDetails>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </ExperienceDetails>
              <ExperiencePeriod>{exp.duration}</ExperiencePeriod>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ExperienceContent>
    </ExperienceSection>
  );
}

export default Experience;