import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledBookCard = styled(Card)`
  background-color: blue;
  font-weight: 600;
  border-radius: 2em;
  margin: 1em;
  max-width: 150px;
  min-width: 150px;
  min-height: 200px;
  max-height: 200px;
`;

class BookComponent extends PureComponent {
  render() {
    const { title, author, cover } = this.props;
    return (
      <Fragment style={{ marginTop: '20px' }}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="caption">{author}</Typography>
        <StyledBookCard variant="outlined" style={{ backgroundImage: `url(${cover})` }}>
          <CardContent>
            <div style={{ height: '115px' }} />
          </CardContent>
          <CardActions style={{ backgroundColor: '#3E51B5' }}>
            <Button size="small" style={{ color: 'white' }}>OPEN BOOK</Button>
          </CardActions>
        </StyledBookCard>
      </Fragment>
    );
  }
}

BookComponent.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BookComponent);
