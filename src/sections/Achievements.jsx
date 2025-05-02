import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'

const AchievementsSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
`

const AchievementsContent = styled.div`
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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const AchievementItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #112240;
  border-radius: 4px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }
`

const IconWrapper = styled.div`
  color: #64ffda;
  font-size: 1.5rem;
  padding-top: 0.2rem;
`

const AchievementContent = styled.div`
  flex: 1;
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
`

function Achievements() {
  const achievements = [
    "Represented college at IIT Roorkee E-Summit'24 Ideathon, presenting drone technology concept in entrepreneurship competition",
    "Developed expertise in prompt engineering, optimizing AI language models for enhanced performance and accuracy",
    "Campus Ambassador of Raj Kumar Goel Institute Of Technology for 1 year from geeksforgeeks",
    "Solved 1100+ problems on LeetCode and GeeksforGeeks, showcasing strong DSA expertise",
    "Completed the \"Python for Data Science\" NPTEL online Certification offered by IIT Madras",
    "Cleared NDA 3 Times and C/O from SSB Allahabad, Bhopal"
  ]

  return (
    <AchievementsSection id="achievements">
      <AchievementsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </SectionTitle>
        <AchievementsList>
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper>
                <FaTrophy />
              </IconWrapper>
              <AchievementContent>
                {achievement}
              </AchievementContent>
            </AchievementItem>
          ))}
        </AchievementsList>
      </AchievementsContent>
    </AchievementsSection>
  )
}

export default Achievements 