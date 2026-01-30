import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'
import * as GoIcons from 'react-icons/go'
import * as VscIcons from 'react-icons/vsc'

const SlidebarData = [
    {
        title: 'Home',
        path: '/home*',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Properties',
        path: '/properties',
        icon: <BsIcons.BsHouseFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
              title: 'For Rent',
              path: '/properties/rent-House',
              icon: <BsIcons.BsHouse />,
              // cName: 'sub-nav'
          },
          {
              title: 'For Sale',
              path: '/properties/sale-House',
              icon: <GiIcons.GiHouse />,
              // cName: 'sub-nav'
          },
      ]
    }, 
    // 
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
      title: 'Report',
      path: '/report',
      icon: <GoIcons.GoReport />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
          {
              title: 'Report Rent',
              path: '/report/reports',
              icon: <VscIcons.VscReport />,
              // cName: 'sub-nav'
          },
          {
              title: 'Report Sale',
              path: '/report/reports',
              icon: <VscIcons.VscReport />,
              // cName: 'sub-nav'
          },
          {
              title: 'Report Purchase',
              path: '/report/report3',
              icon: <VscIcons.VscReport />,
          },
      ]
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <RiIcons.RiContactsLine />
  }
];
export default SlidebarData






        // iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
        // subNav: [
        //     {
        //         title: 'Users',
        //         path: '/overview/users',
        //         icon: <IoIcons.IoIosPaper />,
        //     },
        //     {
        //         title: 'Revenue',
        //         path: '/overview/Revenue',
        //         icon: <IoIcons.IoIosPaper />,
        //     },
        // ]