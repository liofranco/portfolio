import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    border-top: 2px solid ${(props) => props.theme.color };
    z-index: 1000;
    transition: all 0.3s;

    &:last-child{
        border-bottom: 2px solid ${(props) => props.theme.color };
    }

    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
    }

`
const ImageContainer = styled.div`
    width: 50%;
    min-height: 600px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 960px) {
        width: 100%;
        min-height: 150px;
    }
`
const ImageReveal = styled.div`
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: translateY(-600px);
    left: 0;
    background: ${(props) => props.theme.backgroundColor };
`
const Image = styled.img`
    margin-top: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`
const Info = styled.div`
    width: 50%;
    gap: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 960px) {
        order: 2;
        width: 90%;
        align-items: center;
        gap: 15px;
    }

`
const Title = styled.a`
    color: ${(props) => props.theme.color };
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all .3s;
    cursor: pointer;

    &::after{
        content: '';
        height: 5px;
        width: 0%;
        background-color: ${(props) => props.theme.color };
        display: block;
        transition: .5s;
        transform: translateY(-10px);
    }

    &:hover::after{
        content: '';
        height: 5px;
        width: 100%;
        background-color: ${(props) => props.theme.color };
        display: block;
        transform: translateY(-10px);
    }

    @media (max-width: 960px) {
        font-size: 40px;
        &::after{
            transform: translateY(0px);
            height: 3px;
        }
        &:hover::after{
            transform: translateY(0px);
            height: 3px;
        }
    }
    @media (max-width: 480px) {
        font-size: 27px;
        text-align: center;
    }
`
const Links = styled.div`
    display: flex;
    gap: 20px;
`

const ProjectCard = ({proyect}) => {

    return (
        <Container className='project-container'>
            <Info className='project-info'>
                <Title href={proyect.deploy} target='_blank'>
                    {proyect.title}
                </Title>
                <Links>
                    <Button name={'GITHUB'} href={proyect.repo}/>
                    <Button name={'DEPLOY'} href={proyect.deploy}/>
                </Links>
            </Info>
            <ImageContainer>
                <Image src={proyect.image} alt={proyect.title} className='project-image' />
                <ImageReveal className='project-image-reveal' />
            </ImageContainer>
        </Container>
    );
};

export default ProjectCard;