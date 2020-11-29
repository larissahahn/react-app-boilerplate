import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledHome = styled.div`
  padding-top: 1.85em;
`;

class HomeComponent extends PureComponent {
  render() {
    return (
      <StyledHome>
        <Typography variant="h3">Content</Typography>
        <Typography variant="body1">&nbsp;Main entry into application.</Typography>
      </StyledHome>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
