import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const EducationSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
`

const EducationContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 50px;
`

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
`

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const EducationItem = styled(motion.div)`
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
`

const EducationDetails = styled.div`
  h3 {
    color: #ccd6f6;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64ffda;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`

const EducationScore = styled.div`
  color: #8892b0;
  font-size: 1rem;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`

function Education() {
  const educationData = [
    {
      degree: 'B.Tech (CSE-2026)',
      institution: 'Raj Kumar Goel Institute Of Technology',
      score: 'CGPA: 7.5',
      period: '03/25'
    },
    {
      degree: 'XII (CBSE)',
      institution: 'Sanskriti Public School',
      score: '84%',
      period: '07/2021'
    },
    {
      degree: 'X (ICSE)',
      institution: "ST.JOSEPH'S SCHOOL, GORAKHPUR",
      score: '74.6%',
      period: '07/05/2019'
    }
  ]

  return (
    <EducationSection id="education">
      <EducationContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </SectionTitle>
        <EducationList>
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EducationDetails>
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
              </EducationDetails>
              <EducationScore>
                <p>{edu.score} | {edu.period}</p>
              </EducationScore>
            </EducationItem>
          ))}
        </EducationList>
      </EducationContent>
    </EducationSection>
  )
}

export default Education 