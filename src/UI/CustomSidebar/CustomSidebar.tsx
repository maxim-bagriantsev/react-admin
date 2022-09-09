import * as React from 'react';
import {Sidebar} from 'react-admin';


export const CustomSidebar = (props: any) => (
    <Sidebar
        sx={{
            "& .RaSidebar-fixed": {
                marginTop: '50px',
                backgroundColor: "grey",
                "& .MuiButtonBase-root": {
                    fontSize: '15px',
                    marginBottom: '5px',
                    "&:hover": {
                        borderTopRightRadius: '50px',
                        borderBottomRightRadius: '50px',
                    }
                },
                "& .RaMenuItemLink-active ": {
                    color: 'white',
                    borderTopRightRadius: '50px',
                    borderBottomRightRadius: '50px',
                    // backgroundImage: "linear-gradient(98deg, #C6A7FE, #9155FD 94%);",
                    backgroundImage: "linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)",
                    boxShadow: '0px 4px 8px -4px rgb(58 53 65 / 42%);'
                },
                "a": {

                    '&:hover': {
                        color: 'black'
                    }
                }
            },
        }}
        {...props}
    />
);

