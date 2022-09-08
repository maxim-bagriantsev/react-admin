import * as React from 'react';
import {AppBar, Logout, UserMenu, useTranslate, LocalesMenuButton} from 'react-admin';
import {Link} from 'react-router-dom';
import {
    Box,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    Theme,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountBoxOutlined';

import Logo from './Logo';
import ToggleThemeBtn from "../UI/ToggleThemeBtn/ToggleThemeBtn";

const ConfigurationMenu = React.forwardRef((props, ref) => {
    const translate = useTranslate();
    return (
        <MenuItem
            component={Link}
            // @ts-ignore
            ref={ref}
            {...props}
            to="/configuration"
        >
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText>{translate('pos.configuration')}</ListItemText>
        </MenuItem>
    );
});

const ProfileMenu = React.forwardRef((props, ref) => {
    const translate = useTranslate();
    return (
        <MenuItem
            component={Link}
            // @ts-ignore
            ref={ref}
            {...props}
            to="/profile"
        >
            <ListItemIcon>
                <ProfileIcon/>
            </ListItemIcon>
            <ListItemText>{translate('pos.profile')}</ListItemText>
        </MenuItem>
    );
});

const CustomUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu/>
        <ProfileMenu/>
        <Logout/>
    </UserMenu>
);

const CustomAppBar = (props: any) => {
    const isLargeEnough = useMediaQuery<Theme>(theme =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar
            {...props}
            color="secondary"
            elevation={1}
            userMenu={<CustomUserMenu/>}
        >
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                id="react-admin-title"
            />
            {isLargeEnough && <Logo/>}
            {isLargeEnough && <Box component="span" sx={{flex: 1}}/>}
            <ToggleThemeBtn/>
            <LocalesMenuButton
                languages={[
                    {locale: 'en', name: 'English'},
                    {locale: 'fr', name: 'French'},
                    {locale: 'ru', name: 'Russian'}]}/>
        </AppBar>
    );
};

export default CustomAppBar;
