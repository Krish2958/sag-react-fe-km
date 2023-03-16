import { Colors } from '../../../../components';

export const menuItemsTitle = {
  Events: 'Events',
  Clubs: 'Clubs',
  Sports: 'Sports',
  About: 'About',
};

export const sidebarMenuStyles = {
  sidebar: {
    backgroundColor: Colors.White,
    border: 'none',
  },
  menuItem: {
    border: 'none',
    backgroundColor: 'white',
  },
  menuItemButton: {
    backgroundColor: Colors.White,
    color: Colors.Primary,
    height: '3rem',
    borderRadius: '0.5rem',
    margin: '0.15rem 0.4rem',
    '&:hover': {
      backgroundColor: Colors.White,
      boxShadow: '0.2rem 0 0 -0.1rem rgba(12, 59, 91, 1)',
    },
    '&:active': {
      backgroundColor: Colors.Primary,
      color: Colors.White,
    },
  },
  menuItemButtonActive: {
    backgroundColor: Colors.Primary,
    color: Colors.White,
    height: '3rem',
    borderRadius: '0.5rem',
    margin: '0.15rem 0.4rem',
    '&:hover': {
      backgroundColor: Colors.Primary,
      color: Colors.White,
    },
    '&:active': {
      backgroundColor: Colors.Primary,
      color: Colors.White,
    },
  },
  menuButtonIcon: {
    marginLeft: '-0.22rem',
  },
};
