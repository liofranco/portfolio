import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
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
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <Links>
                    <Button name={'GITHUB'} href={proyect.repo} target='_blank' />
                    <Button name={'DEPLOY'} href={proyect.deploy} target='_blank' />
                </Links>
            </Info>
            <Image src={proyect.image} alt={proyect.title} className='project-image' />
        </Container>
    );
};

export default ProjectCard;