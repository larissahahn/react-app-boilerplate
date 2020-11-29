import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Toolbar, AppBar, IconButton, MenuItem, Menu
} from '@material-ui/core';
import styled from 'styled-components';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import ReactLogoComponent from './logo';
import BooksButtonComponent from '../books/books-button';

const StyledToolbar = styled.div`
    flex-grow: 1;
    margin: 0;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #F8F8F8 !important;
  box-shadow: none !important;
  max-height: 60px;
  border-bottom: 1px solid #ddd;
  color: #ddd;
`;

const FixedHeightToolbar = styled(Toolbar)`
  min-height: 64px !important;
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 64px !important;
  }
`;

const StyledLogo = styled.div`
    padding-left: 1em;
`;

const Spacer = styled.div`
    width: 100%;
`;

const HorizontalDivider = styled.div`
  position: absolute;
  margin: 0 .8rem;
  background-color: #ddd;
  width: 1px;
  height: 60px;
  top: 0px;
  right: 64px;
`;

const UserAccountButtonMenu = styled.div`
    margin-right: 1em;
    margin-left: 1.85em;
    color: #949494;
`;

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// Move to mock data from server userRoutes
const sampleUser = {
  auth: true, // mock signed in
  username: 'larissahahn',
  firstName: 'Larissa',
  lastName: 'Hahn',
  fullName: 'Larissa Hahn',
  avatarImg: null
};

class ToolbarComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.setAnchorEl = this.setAnchorEl.bind(this);

    this.state = {
      anchorEl: null
    };
  }

  setAnchorEl = (event) => {
    this.setState({ anchorEl: event });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    const handleMenu = (event) => {
      this.setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      this.setAnchorEl(null);
    };

    return (
      <StyledToolbar>
        <StyledAppBar position="static">
          <FixedHeightToolbar style={{ paddingRight: '0px' }}>
            <StyledLogo>
              <ReactLogoComponent />
            </StyledLogo>
            <Spacer />
            <BooksButtonComponent />
            <HorizontalDivider />
            <UserAccountButtonMenu>
              <IconButton
                aria-label={sampleUser.fullName}
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="medium"
                style={{ paddingRight: '0em', paddingBottom: '.75em', backgroundColor: 'transparent' }}
              >
                {sampleUser.auth ? (
                  <Avatar alt={sampleUser.fullName} src="/images/avatar/1.png" style={{ width: '45px', height: '45px' }} />
                ) : (<AccountCircle />)}
              </IconButton>
              <StyledMenu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Update profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <NotificationsActiveIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <MessageIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <PhonelinkSetupIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </StyledMenuItem>
              </StyledMenu>
            </UserAccountButtonMenu>
          </FixedHeightToolbar>
        </StyledAppBar>
      </StyledToolbar>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent);
