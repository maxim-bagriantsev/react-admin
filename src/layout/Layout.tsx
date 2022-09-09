import * as React from 'react';
import {Layout, LayoutProps} from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import {useDebug} from "../hooks/useDebug";
import {useHotkeys} from "react-hotkeys-hook";
import {CustomSidebar} from "../UI/CustomSidebar/CustomSidebar";

export default (props: LayoutProps) => {
    const {setDebug} = useDebug()
    useHotkeys('ctrl+alt+s', () => setDebug(debug => !debug))

    return <Layout {...props} appBar={AppBar} menu={Menu} sidebar={CustomSidebar}/>;
};
