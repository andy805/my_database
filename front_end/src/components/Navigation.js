import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu'
import { ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox'; 
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Navigation() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      </List>
      <Divider />
      <List>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export  function ButtonAppBar() {
    const [state, setState] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    let navigate = useNavigate();

    const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    navigate(path);
    };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (

    <Box
      sx={{width:350}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0, '/interviewQuestions')}
            >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Interview Questions" />
        </ListItemButton>

        <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1, '/timeSheets')}
            >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Time Sheets" />
        </ListItemButton>

        <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2, '/finance')}
            >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Finance" />
        </ListItemButton>

        <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3, '/journal')}
            >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Journal" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
      </List>
    </Box>
  );
  return (
    <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
        <Drawer
            open={state}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    </React.Fragment>
  );
}