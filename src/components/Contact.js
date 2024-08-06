import React from 'react';
import styled from 'styled-components';
import 'animate.css';

const ContactContainer = styled.div`
  padding: 2rem;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 2rem auto;
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  color: #ffcc00;
  text-align: center;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ffcc00;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ffcc00;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #ffcc00;
  color: #1c1c1c;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }
`;

const Contact = () => {
  return (
    <ContactContainer className="animate__animated animate__fadeIn">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </FormField>
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" name="subject" />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message"></Textarea>
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
