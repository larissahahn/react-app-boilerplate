import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledSettings = styled.div`
  padding-top: 1.85em;
`;

class SettingsComponent extends PureComponent {
  render() {
    return (
      <StyledSettings>
        <Typography variant="h3">Settings</Typography>
        <Typography variant="body1">&nbsp;Application settings page.</Typography>
      </StyledSettings>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsComponent);