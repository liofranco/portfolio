import styled from 'styled-components';
import {VscChromeClose} from 'react-icons/vsc';
import { Link } from 'react-scroll';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor };
    transition: all 0.3s;

    @media (min-width: 560px) {
        display: none;
        }
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 100vh;
`

const BtnClose = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
`

const Menu = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    font-weight: bold;
    gap: 10vh;
    margin-top: 10vh;

    li{
        cursor: pointer;
        font-size: clamp(45px,10vw,100px);
        width: 100%;
        text-align: center;
        transition: all 0.3s;

        a{
            color: ${(props) => props.theme.color };
        }

        &:hover{
            transform: skew(-10deg);
        }
    }
`

const MenuMobile = ({menuActive, setMenuActive}) => {

    const closeMenu = () => {
        setTimeout(() => {
            setMenuActive(false)
        }, 300);
    }

    return (
        <Container className={`${menuActive ? 'menu_active' : 'menu_close'}`}>
            <MenuContainer>
                <BtnClose>
                    <VscChromeClose onClick={() => setMenuActive(false)}className="close_btn"/>
                </BtnClose>
                <Menu>
                    <li>
                        <Link to="hero" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="proyectos" spy={true} smooth={true} offset={-70} duration={1000} onClick={closeMenu}>
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contacto" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                            Contacto
                        </Link>
                    </li>
                </Menu>
            </MenuContainer>
        </Container>
    );
};

export default MenuMobile;