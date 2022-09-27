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

const OverflowContainer = styled.div`
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

const ButtonContainer = styled.div`
    display: flex;
`

const Hero = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.name', { delay: 200, duration: 1000, distance: '200px', opacity: 1, reset: false});
        ScrollReveal().reveal('.frontend', { delay: 400, duration: 1000, distance: '200px', opacity: 1, reset: false});
        ScrollReveal().reveal('.btn-cv', { delay: 600, duration: 1500, distance: '100px', opacity: 0, reset: false});
    }, [])

    return (
        <Container id="hero">
            <OverflowContainer>
                <Name className="name">Lionel Franco</Name>
            </OverflowContainer>
            <OverflowContainer>
                <Developer className="frontend">Frontend Developer</Developer>
            </OverflowContainer>
            <ButtonContainer className="btn-cv">
                <Button name={'DESCARGAR CV'} href={'/cv.pdf'}/>
            </ButtonContainer>
        </Container>
    );
};

export default Hero;