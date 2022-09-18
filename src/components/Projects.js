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
        ScrollReveal().reveal('.project-image', { delay: 200, distance: '500px', opacity: 0, origin: 'right', reset: false });
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