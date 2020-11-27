import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import { getBooks } from '../../actions/books-action';

class BooksComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.props.getBooks(); // Implement your own getBooksCount method.
  }

  componentDidMount() {
    // console.log('example React component lifecycle method');
  }

  render() {
    return (
      <Badge badgeContent={7} color="primary">
        <LocalLibrary />
      </Badge>
    );
  }
}

BooksComponent.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksComponent);
