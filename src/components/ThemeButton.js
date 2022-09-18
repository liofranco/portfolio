import {MdNightlight, MdLightMode} from 'react-icons/md';

const ThemeButton = ({setTheme, theme}) => {

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            {theme === 'light' ?
                <MdNightlight onClick={handleTheme} className="theme_icon"/> :
                <MdLightMode onClick={handleTheme} className="theme_icon"/>
            }
        </>
    );
};

export default ThemeButton;