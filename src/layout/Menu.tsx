import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';
import WelcomeIcon from '@mui/icons-material/AccessibilityNewOutlined';
import BooksIcon from '@mui/icons-material/LibraryBooksOutlined';
import AuthorsIcon from '@mui/icons-material/Groups3Outlined';
import UsersIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SkillsIcon from '@mui/icons-material/ArticleOutlined';
import FeedbackIcon from '@mui/icons-material/FeedbackOutlined';
import FeedbacksIcon from '@mui/icons-material/DynamicFeedOutlined';
import TroublesIcon from '@mui/icons-material/TroubleshootOutlined';
import Tickets from '@mui/icons-material/ConfirmationNumberOutlined';
import MaterialsIcon from '@mui/icons-material/AutoStoriesOutlined';
import SpecializationsIcon from '@mui/icons-material/AssistantOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import ProfileIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import Error401Icon from '@mui/icons-material/GppMaybe';
import Error404Icon from '@mui/icons-material/GppBad';
import Error500Icon from '@mui/icons-material/NotificationImportant';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import visitors from '../pages/visitors';
import orders from '../pages/orders';
import invoices from '../invoices';
import products from '../pages/products';
import categories from '../pages/categories';
import SubMenu from './SubMenu';
import VerticalNavSectionTitle from "../UI/VerticalNavSectionTitle/VerticalNavSectionTitle";
import {useTheme} from "@mui/material/styles";

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers' | 'menuLibrary' | 'menuFeedback' | 'menuErrors';

const Menu = ({dense = false}: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
        menuLibrary: true,
        menuFeedback: true,
        menuErrors: true
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({...state, [menu]: !state[menu]}));


    };

    const theme = useTheme()

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem/>

            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Обратная связь', action: '', subject: ''}}/>}

            <SubMenu
                handleToggle={() => handleToggle('menuFeedback')}
                isOpen={state.menuFeedback}
                name="pos.menu.feedback"
                icon={<FeedbackIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to="/feedbacks"
                    state={{_scrollToTop: true}}
                    primaryText={translate(`resources.feedback.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<FeedbacksIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/troubles"
                    state={{_scrollToTop: true}}
                    primaryText={translate(`resources.troubles.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<TroublesIcon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/tickets"
                    state={{_scrollToTop: true}}
                    primaryText={translate(`resources.tickets.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<Tickets/>}
                    dense={dense}
                />
            </SubMenu>
            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Пользователи', action: '', subject: ''}}/>}
            <MenuItemLink
                to="/users"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.users.name`, {
                    smart_count: 2,
                })}
                leftIcon={<UsersIcon/>}
                dense={dense}
            />
            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Навыки', action: '', subject: ''}}/>}
            <MenuItemLink
                to="/skills"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.skills.name`, {
                    smart_count: 2,
                })}
                leftIcon={<SkillsIcon/>}
                dense={dense}
            />
            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Специализации', action: '', subject: ''}}/>}
            <MenuItemLink
                to="/specializations"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.specializations.name`, {
                    smart_count: 2,
                })}
                leftIcon={<SpecializationsIcon/>}
                dense={dense}
            />
            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Материалы', action: '', subject: ''}}/>}
            <MenuItemLink
                to="/materials"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.materials.name`, {
                    smart_count: 2,
                })}
                leftIcon={<MaterialsIcon/>}
                dense={dense}
            />

            {/*<SubMenu*/}
            {/*    handleToggle={() => handleToggle('menuSales')}*/}
            {/*    isOpen={state.menuSales}*/}
            {/*    name="pos.menu.sales"*/}
            {/*    icon={<orders.icon/>}*/}
            {/*    dense={dense}*/}
            {/*>*/}
            {/*    <MenuItemLink*/}
            {/*        to="/commands"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.commands.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<orders.icon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}
            {/*    <MenuItemLink*/}
            {/*        to="/invoices"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.invoices.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<invoices.icon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}
            {/*</SubMenu>*/}
            {/*<SubMenu*/}
            {/*    handleToggle={() => handleToggle('menuCatalog')}*/}
            {/*    isOpen={state.menuCatalog}*/}
            {/*    name="pos.menu.catalog"*/}
            {/*    icon={<products.icon/>}*/}
            {/*    dense={dense}*/}
            {/*>*/}
            {/*    <MenuItemLink*/}
            {/*        to="/products"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.products.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<products.icon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}
            {/*    <MenuItemLink*/}
            {/*        to="/categories"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.categories.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<categories.icon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}
            {/*</SubMenu>*/}
            {/*<SubMenu*/}
            {/*    handleToggle={() => handleToggle('menuCustomers')}*/}
            {/*    isOpen={state.menuCustomers}*/}
            {/*    name="pos.menu.customers"*/}
            {/*    icon={<visitors.icon/>}*/}
            {/*    dense={dense}*/}
            {/*>*/}
            {/*    <MenuItemLink*/}
            {/*        to="/customers"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.customers.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<visitors.icon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}
            {/*    <MenuItemLink*/}
            {/*        to="/segments"*/}
            {/*        state={{_scrollToTop: true}}*/}
            {/*        primaryText={translate(`resources.segments.name`, {*/}
            {/*            smart_count: 2,*/}
            {/*        })}*/}
            {/*        leftIcon={<LabelIcon/>}*/}
            {/*        dense={dense}*/}
            {/*    />*/}

            {/*</SubMenu>*/}

            {open && <VerticalNavSectionTitle item={{sectionTitle: 'Настройки', action: '', subject: ''}}/>}

            <MenuItemLink
                to="/profile"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.profile.name`, {
                    smart_count: 2,
                })}
                leftIcon={<ProfileIcon/>}
                dense={dense}
            />
            <MenuItemLink
                to="/configuration"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.configuration.name`, {
                    smart_count: 2,
                })}
                leftIcon={<SettingsIcon/>}
                dense={dense}
            />
            <MenuItemLink
                to="/notification"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.notification.name`, {
                    smart_count: 2,
                })}
                leftIcon={<NotificationsIcon/>}
                dense={dense}
            />
            <MenuItemLink
                to="/reviews"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<BooksIcon/>}
                dense={dense}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuErrors')}
                isOpen={state.menuErrors}
                name="pos.menu.Errors"
                icon={<ErrorIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to="/401"
                    state={{_scrollToTop: true}}
                    primaryText={translate(`resources.401.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<Error401Icon/>}
                    dense={dense}
                />
                <MenuItemLink
                    to="/404"
                    state={{_scrollToTop: true}}
                    primaryText={translate(`resources.404.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<Error404Icon/>}
                    dense={dense}
                />
                <MenuItemLink
                to="/500"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.500.name`, {
                    smart_count: 2,
                })}
                leftIcon={<Error500Icon/>}
                dense={dense}
            />
            </SubMenu>
            <MenuItemLink
                to="/welcome"
                state={{_scrollToTop: true}}
                primaryText={'Welcome'}
                leftIcon={<WelcomeIcon/>}
                dense={dense}
            />

        </Box>
    );
};

export default Menu;
