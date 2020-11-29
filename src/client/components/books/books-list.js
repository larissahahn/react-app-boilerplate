import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AddBookComponent from './add-book';

const StyledBooksLibrary = styled.div`
  display: grid;
  grid-template-columns: 300px auto auto;
  grid-template-rows: 300px auto;
  grid-col-gap: 1em;
  padding-top: 1.85em;
  padding-right: 40px;
`;

class BooksListComponent extends PureComponent {
  render() {
    return (
      <StyledBooksLibrary>
        <div>
          <Typography variant="h3">Books</Typography>
          <Typography variant="body1">&nbsp;React Boilerplate App sample entity.</Typography>
        </div>
        <div />
        <div>
          <AddBookComponent />
        </div>
      </StyledBooksLibrary>
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
