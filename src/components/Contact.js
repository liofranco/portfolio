import styled from 'styled-components';
import Section from './Section';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Contacts = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    overflow: hidden;
`

const Card = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 30px 20px;
    display: flex;
    gap: 30px;
    border-top: 1px solid ${(props) => props.theme.color };
    cursor: pointer;
    font-size: 60px;
    font-weight: 500;

    &:last-child{
        border-bottom: 1px solid ${(props) => props.theme.color };  
    }
`

const Name = styled.a`
    font-size: clamp(20px, 5vw, 65px);
    font-weight: 600;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color };

    &:hover{
        transform: translateX(15px);
    }
`

const Contact = () => {
    
    useEffect(()=>{
        ScrollReveal().reveal('.contact', { delay: 100, distance: '200px', opacity: 0, reset: false });
    }, [])

    return (
        <Section title={'contacto'} id={'contacto'}>
            <Contacts>
                <Card className='contact'>
                    <Name href="https://www.linkedin.com/in/lionel-franco" target="_blank">Linkedin</Name>
                </Card>
                <Card className='contact'>
                    <Name href="https://github.com/liofranco" target="_blank">Github</Name>
                </Card>
                <Card className='contact'>
                    <Name href="mailto:lionelfranco2106@gmail.com">lionelfranco2106@gmail.com</Name>
                </Card>
            </Contacts>
        </Section>
    );
};

export default Contact;