import React from 'react';
import {ToggleThemeButton} from "react-admin";
import {lightTheme, darkTheme} from "../../layout/themes";


const ToggleThemeBtn = () => (

    <ToggleThemeButton
        lightTheme={lightTheme}
        darkTheme={darkTheme}
    />
)

export default ToggleThemeBtn;