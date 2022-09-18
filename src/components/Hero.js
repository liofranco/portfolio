import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 60px);
    min-height: 800px;
    text-align: center;
`

const TextContainer = styled.div`
    overflow: hidden;
`
const Name = styled.h1`
    font-size: clamp(45px,11vw,100px);
    font-weight: 900;
`
const Developer = styled.h3`
    font-size: clamp(25px,7vw,65px);
    font-weight: 900;
    margin-bottom: 50px;
`

const Hero = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.name', { delay: 200, duration: 1000, distance: '200px', opacity: 1, reset: false});
        ScrollReveal().reveal('.frontend', { delay: 400, duration: 1000, distance: '200px', opacity: 1, reset: false});
        ScrollReveal().reveal('.btn-cv', { delay: 600, duration: 1000, distance: '200px', opacity: 1, reset: false});
    }, [])

    return (
        <Container id="hero">
            <TextContainer>
                <Name className="name">Lionel Franco</Name>
            </TextContainer>
            <TextContainer>
                <Developer className="frontend">Frontend Developer</Developer>
            </TextContainer>
            <Button name={'DESCARGAR CV'} />
        </Container>
    );
};

export default Hero;