import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Container = styled.section`
    width: 90%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TitleContainer = styled.div`
    overflow: hidden;
    width: 100%;
`
const Title = styled.h2`
    font-size: clamp(45px,12vw,120px);
    width: 100%;
    max-width: 1600px;
    z-index: 500;
    padding: 20px 0;
    font-weight: bold;
    text-transform: uppercase;

    /* @media (max-width: 820px) {
        font-size: 80px;
    }
    @media (max-width: 480px) {
        font-size: 45px;
    } */
`

const Section = (props) => {

    useEffect(()=>{
        ScrollReveal().reveal('.section-title', { delay: 200, duration: 1000, distance: '200px', opacity: 1, reset: false });
    }, [])

    return (
        <Container id={props.id}>
            <TitleContainer>
                <Title className='section-title'>{props.title}</Title>
            </TitleContainer>
            {props.children}
        </Container>
    );
};

export default Section;