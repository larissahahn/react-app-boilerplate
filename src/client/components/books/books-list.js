// import { getBooksCount } from '../../actions/books-action';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BooksComponent from './books';
import AddBookComponent from './add-book';

class BooksListComponent extends PureComponent {
  // constructor(props) {
  //     super(props);

  // }

  render() {
    return (
      <div>
        <AddBookComponent />
        <div style={{ height: '50px' }} />
        <BooksComponent />
      </div>
    );
  }
}

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);
