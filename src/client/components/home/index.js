// import { getBooksCount } from '../../actions/books-action';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeComponent extends PureComponent {
  // constructor(props) {
  //     super(props);

  // }

  render() {
    return (
      <div>
        <h1>Main Entry into Application</h1>
        <br />
        <h2>Test Nav:</h2>
        <br />
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
