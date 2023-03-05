import { useEffect } from 'react';
import styled from 'styled-components'
import { proyects } from '../data/proyect';
import ProjectCard from './ProjectCard';
import ScrollReveal from 'scrollreveal';
import Section from './Section';

const CardsContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    overflow: hidden;
`

const Projects = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.project-info', { delay: 100, distance: '200px', opacity: 0, reset: false });
        ScrollReveal().reveal('.project-image-reveal', { delay: 600, origin: 'bottom', duration: 2000, distance: '600px', opacity: 1, reset: false });
        ScrollReveal().reveal('.project-image', { delay: 200, duration: 1700, scale: 1.5, opacity: 1, reset: false });
    }, [])
    
    return (
        <Section title={'proyectos'} id={'proyectos'}>
            <CardsContainer>
                {proyects.map((proyect,i) => <ProjectCard key={i} proyect={proyect} />)}
            </CardsContainer>
        </Section>
    );
};

export default Projects;