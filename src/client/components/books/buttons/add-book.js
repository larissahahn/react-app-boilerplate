import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { addBook } from '../../../actions/books/booksActions';

const StyledButton = styled(Button)`
  background-color: blue;
  font-weight: 600;
  border-radius: 2em;
  margin: 5em;
  float: left;
`;

class AddBookComponent extends PureComponent {
  render() {
    return (
      <StyledButton
        variant="contained"
        color="primary"
        size="small"
        onClick={() => this.props.addBook()}
        startIcon={<LibraryAddIcon />}
      >
        Add Book
      </StyledButton>
    );
  }
}

AddBookComponent.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {
  addBook
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBookComponent);
