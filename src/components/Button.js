import styled from 'styled-components'

const Btn = styled.a`
    background-color: ${(props) => props.theme.backgroundColor };
    color: ${(props) => props.theme.color };
    width: 150px;
    font-size: 18px;
    border: 2px solid ${(props) => props.theme.color };
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    text-align: center;

    p{
        transition: all 0.3s;
    }

    &:hover{
        box-shadow: ${(props) => props.theme.color } 5px 5px 0px;
        p{
            transform: skew(-10deg);
        }
    }

    @media (max-width: 480px) {
        font-size: 15px;
        width: 120px;
        padding: 5px;
    }
`

const Button = ({name, href}) => {
    return (
        <Btn href={href} target="_blank" >
            <p>{name}</p>
        </Btn>
    );
};

export default Button;