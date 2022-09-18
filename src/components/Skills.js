import styled from 'styled-components';
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiNodedotjs,SiExpress} from 'react-icons/si'
import Section from './Section';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const SkillsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding: 10px;

    @media (max-width: 960px) {
        flex-direction: column;
        gap: 0;
    }
`

const Name = styled.p`
    font-size: clamp(15px,6vw,40px);
    font-weight: 900;
    text-align: center;
    transition: all 0.3s;
    border-radius: 50px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

`

const Skills = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.skills', { delay: 200, duration: 1000, distance: '200px', opacity: 0 });
    }, [])

    return (
        <Section title={'Skills'} id={'skills'}>
            <Grid>
                <SkillsContainer className="skills">
                    <SiHtml5 className="skills_icon"/>
                    <Name>HTML</Name>
                </SkillsContainer>
                <SkillsContainer className="skills">
                    <SiCss3 className="skills_icon"/>
                    <Name>CSS</Name>
                </SkillsContainer>
                <SkillsContainer className="skills">
                    <SiJavascript className="skills_icon"/>
                    <Name>Javascript</Name>
                </SkillsContainer>
                <SkillsContainer className="skills">
                    <SiReact className="skills_icon"/>
                    <Name>React</Name>
                </SkillsContainer>
                <SkillsContainer className="skills">
                    <SiNodedotjs className="skills_icon"/>
                    <Name>Node</Name>
                </SkillsContainer>
                <SkillsContainer className="skills">
                    <SiExpress className="skills_icon"/>
                    <Name>Express</Name>
                </SkillsContainer>
            </Grid>
        </Section>
    );
};

export default Skills;