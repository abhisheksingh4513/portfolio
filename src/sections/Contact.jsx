import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SectionTitle = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
`

const Subtitle = styled(motion.p)`
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #ccd6f6;
  font-size: 0.9rem;
`

const Input = styled.input`
  background: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 1rem;
  color: #ccd6f6;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`

const TextArea = styled.textarea`
  background: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 1rem;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`

const SubmitButton = styled(motion.button)`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`

const SocialLink = styled.a`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #8892b0;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  
  svg {
    color: #64ffda;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm currently looking for new opportunities
      </Subtitle>
      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ContactItem>
          <FaEnvelope />
          <a href="mailto:abhishek.coee@gmail.com">abhishek.coee@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <a href="tel:+918077564513">+91 8077564513</a>
        </ContactItem>
      </ContactInfo>
      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" required />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
      <SocialLinks>
        <SocialLink href="https://github.com/abhisheksingh4513?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/abhishek-singh-ba5a59257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://x.com/abhishek_4513?s=08" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://leetcode.com/u/abhishek4513/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </SocialLink>
        <SocialLink href="https://www.codechef.com/users/abhishekcoee" target="_blank" rel="noopener noreferrer">
          <SiCodechef />
        </SocialLink>
        <SocialLink href="https://www.geeksforgeeks.org/user/abhishek_solver/" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks />
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  )
}

export default Contact 