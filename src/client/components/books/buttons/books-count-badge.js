import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import { Link } from 'react-router-dom';
import { getBooks } from '../../../actions/books/booksActions';

const StyledBooksBadge = styled(Badge)`
  color: #949494;
`;

class BooksButtonComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.props.getBooks();

    this.state = {
      booksCount: 0
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.books !== this.state.books) {
      this.setState({ booksCount: this.props.books.length });
    }
  }

  render() {
    return (
      <IconButton to="/books" component={Link} size="small">
        <StyledBooksBadge badgeContent={this.state.booksCount} color="primary">
          <LocalLibrary />
        </StyledBooksBadge>
      </IconButton>
    );
  }
}

BooksButtonComponent.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksButtonComponent);
