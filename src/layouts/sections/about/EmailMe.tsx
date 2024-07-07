import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';


type EmailMeProps = {
    initialPosition: { x: number, y: number };
}

export const EmailMe: React.FC<EmailMeProps> = ({initialPosition}) => {
    const [isModal, setIsModal] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: initialPosition.x, y: initialPosition.y });
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModal(!isModal);
    };

    const handleCloseModal = () => {
        setIsModal(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_qfz1bws', 'template_95pfitn', e.target as HTMLFormElement, 'WRg4LpftFBWXtsVeC')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
        handleCloseModal();
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isModal) {
            // Center the modal when it's opened
            const centerX = window.innerWidth / 2 - 850; // Assuming modal width is 500px
            const centerY = window.innerHeight / 2 - 150; // Assuming modal height is 300px
            setPosition({ x: centerX, y: centerY });
        }
    }, [isModal]);

    return (
        <>
            <button onClick={handleModal}>Email Me</button>
            <ModalOverlay style={{display: isModal ? 'block' : 'none'}}>
                <ModalContent
                    style={{ left: position.x, top: position.y }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                    <Form onSubmit={handleSubmit}>
                        <Label>Name:</Label>
                        <Input type="text" name="name" required/>
                        <Label>Email:</Label>
                        <Input type="email" name="email" required/>
                        <Label>Message:</Label>
                        <Textarea maxLength={200} name="message" rows={5} required/>
                        <SubmitButton type="submit">Send</SubmitButton>
                    </Form>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  margin: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
