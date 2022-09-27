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
const Image = styled.img`
    margin-top: 20px;
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: top;
    border: 1px solid ${(props) => props.theme.color };

    @media (max-width: 420px) {
        width: 300px;
        height: 300px;
    }
`
const Info = styled.div`
    width: 50%;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 960px) {
        order: 2;
        width: 90%;
        align-items: center;
        gap: 15px;
    }

`
const Title = styled.h3`
    font-size: 60px;
    text-transform: uppercase;
    @media (max-width: 960px) {
        font-size: 40px;
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
        <Container>
            <Info className='project-info'>
                <Title>{proyect.title}</Title>
                <Links>
                    <Button name={'GITHUB'} href={proyect.repo}/>
                    <Button name={'DEPLOY'} href={proyect.deploy}/>
                </Links>
            </Info>
            <Image src={proyect.image} alt={proyect.title} className='project-image' />
        </Container>
    );
};

export default ProjectCard;