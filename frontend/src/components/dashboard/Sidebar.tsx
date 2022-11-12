import {
  Box, Divider, Drawer, Stack, Toolbar,
} from '@mui/material';
import { EmojiObjects, School } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
import { drawerWidth } from '../../theme/theme';

function Sidebar() {
  const location = useLocation();

  return (
    <Box sx={{ width: { md: drawerWidth }, height: '100vh', position: 'fixed' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          height: '100%',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            height: '100%',
            bgcolor: 'primary.main',
            position: 'inherit',
          },
        }}
        open
      >
        <Toolbar />
        <Stack>
          <MenuItem path="" name="Learning Center" icon={<School fontSize="large" sx={{ color: 'common.white' }} />} />
          <MenuItem path="/" name="Home" active={location.pathname === '/'} />
          <MenuItem path="/my-courses" name="My Cources" active={location.pathname === '/my-courses'} />
          <MenuItem path="/my-assignments" name="My Assignments" active={location.pathname === '/my-assignments'} />
          <MenuItem path="/my-study-plan" name="My Study plan" active={location.pathname === '/my-study-plan'} />
          <MenuItem path="/my-groups" name="My Groups" active={location.pathname === '/my-groups'} />
          <Divider />
          <MenuItem path="" name="Creation Center" icon={<EmojiObjects fontSize="large" color="inherit" />} />
          <MenuItem path="/overview" name="Overview" active={location.pathname === '/overview'} />
          <MenuItem path="/courses" name="Cources" active={location.pathname === '/courses'} />
          <MenuItem path="/assignments" name="Assignments" active={location.pathname === '/assignments'} />
          <MenuItem path="/groups" name="Groups" active={location.pathname === '/groups'} />
          <MenuItem path="/users" name="Users" active={location.pathname === '/users'} />
        </Stack>
      </Drawer>
    </Box>
  );
}

export default Sidebar;