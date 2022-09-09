import { ReactNode } from 'react'
import {ContentWidth, NavLink, NavSectionTitle, ThemeColor} from "../../layout/types";

export type PaletteMode = 'light' | 'dark';
export type Settings = {
    mode: PaletteMode
    themeColor: ThemeColor
    contentWidth: ContentWidth
}

export type VerticalNavItemsType = (NavLink | NavSectionTitle)[]

export type LayoutProps = {
    hidden: boolean
    settings: Settings
    children: ReactNode
    verticalNavItems?: VerticalNavItemsType
    scrollToTop?: (props?: any) => ReactNode
saveSettings: (values: Settings) => void
    footerContent?: (props?: any) => ReactNode
verticalAppBarContent?: (props?: any) => ReactNode
verticalNavMenuContent?: (props?: any) => ReactNode
verticalNavMenuBranding?: (props?: any) => ReactNode
afterVerticalNavMenuContent?: (props?: any) => ReactNode
beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
    children: ReactNode
}
