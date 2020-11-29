import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideNav, {
  Toggle, Nav, NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const NavHeader = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  white-space: nowrap;
  background-color: #3F51B5;
  height: 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledText = styled(Typography)`
  color: black !important;
  line-height: 3.2 !important;
`;

const VerticalDivider = styled.div`
    clear: both;
    position: relative;
    margin: .25rem 0;
    background-color: #ddd;
    height: 1px;
    width: 100%;
`;

const StyledNav = styled(Nav)`
    background-color: #fff;
    &&[class*="expanded--"] {
        [class*="sidenav-subnav--"] {
            > [class*="sidenav-subnavitem--"],
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    color: #222;
                }
            }
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    background-color: #eee;
                }
            }
        }
    }
    && > [class*="sidenav-navitem--"] {
        > [class*="navitem--"] {
            background-color: inherit;
            color: #222;
        }
    }
    && > [class*="sidenav-navitem--"]:hover {
        > [class*="navitem--"] {
            background-color: #eee;
        }
    }
    .sidenav---selected---1EK3y {
      background-color: #F8F8F8;
    }
`;
StyledNav.defaultProps = Nav.defaultProps;

class SidenavComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <ClickOutside
        onClickOutside={() => {
          this.setState({ expanded: false });
        }}
      >
        <SideNav
          expanded={this.state.expanded}
          onToggle={(expanded) => {
            this.setState({ expanded },
              () => {
                const move = this.props.contentRef.current;
                move.style.paddingLeft = this.state.expanded ? `${260}px` : `${90}px`;
              });
          }}
          style={{ background: '#FFFFFF', borderRight: '1px solid #ddd' }}
        >
          <SideNav.Toggle style={{ background: '#3F51B5', maxHeight: '60px' }} />
          <NavHeader expanded={this.state.expanded} />
          <StyledNav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <Link to="/"><HomeIcon style={{ color: '#949494', margin: '.5em' }} /></Link>
              </NavIcon>
              <NavText>
                <StyledLink to="/"><StyledText variant="body1">Home</StyledText></StyledLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="books">
              <NavIcon>
                <Link to="/books"><LocalLibrary style={{ color: '#949494', margin: '.5em' }} /></Link>
              </NavIcon>
              <NavText>
                <StyledLink to="/books"><StyledText variant="body1">Books</StyledText></StyledLink>
              </NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <Link to="/settings"><SettingsIcon style={{ color: '#949494', margin: '.5em' }} /></Link>
              </NavIcon>
              <NavText>
                <StyledLink to="/settings"><StyledText variant="body1">Settings</StyledText></StyledLink>
              </NavText>
            </NavItem>
            <VerticalDivider />
            <NavItem eventKey="signout">
              <NavIcon>
                <PowerSettingsNewIcon style={{ color: '#949494', margin: '.5em' }} />
              </NavIcon>
              <NavText>
                <StyledText variant="body1">Sign out</StyledText>
              </NavText>
            </NavItem>
          </StyledNav>
        </SideNav>
      </ClickOutside>
    );
  }
}

SidenavComponent.propTypes = {
  contentRef: PropTypes.oneOfType([
    PropTypes.func,
    // eslint-disable-next-line no-undef
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SidenavComponent);
