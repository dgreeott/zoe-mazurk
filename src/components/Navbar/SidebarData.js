import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io';


export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome size={30} />,
        cName: 'nav-text' 
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <IoIcons.IoIosPaper size={30} />,
        cName: 'nav-text' 
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe size={30} />,
        cName: 'nav-text' 
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillHome size={30} />,
        cName: 'nav-text' 
    }
]