import styled from 'styled-components';
import {FiMenu} from 'react-icons/fi';
import MenuMobile from './MenuMobile';
import { useState } from 'react';
import ThemeButton from './ThemeButton';
import { Link } from 'react-scroll';

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    transition: all 0.3s;
    position: fixed;
    top: 0;
    background-color: ${(props) => props.theme.backgroundColor };
`

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1600px;
    
    a{
        color: ${(props) => props.theme.color };
    }

    p{
        font-weight: bold;
        font-size: 25px;
        border: 2px solid ${(props) => props.theme.color };
        padding: 0 5px;
        cursor: pointer;
    }

`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
    list-style: none;
    height: 100%;
    text-transform: uppercase;
    font-weight: bold;

    li{
        cursor: pointer;
        font-size: 18px;
        transition: all 0.3s;

        &:hover{
            transform: skew(-10deg);
        }

        @media (max-width: 560px) {
        display: none;
        }
    }
`

const Header = ({setTheme, theme}) => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <HeaderContainer>
            <Navbar>
                <p>
                    <Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
                        LF
                    </Link>
                </p>
                <Ul>
                    <li>
                        <Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="proyectos" spy={true} smooth={true} offset={-100} duration={1000}>
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={1000}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contacto" spy={true} smooth={true} offset={0} duration={1000}>
                            Contacto
                        </Link>
                    </li>
                    <ThemeButton setTheme={setTheme} theme={theme} />
                    <FiMenu onClick={() => setMenuActive(true)}className="menu_btn" />
                </Ul>
            </Navbar>
            <MenuMobile menuActive={menuActive} setMenuActive={setMenuActive} />
        </HeaderContainer>
    );
};

export default Header;