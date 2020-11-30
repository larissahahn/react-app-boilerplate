import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import BookComponent from './book';

const StyledBooksHeader = styled.div`
  padding-top: 1.85em;
  padding-right: 40px;
`;

const StyledBooksLibrary = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% auto;
  grid-template-rows: 40% 40% auto;
  grid-row-gap: 1em;
  grid-column-gap: 4em;
  padding-right: 40px;
`;

const VerticalDivider = styled.div`
  clear: both;
  position: relative;
  margin-top: .5em;
  margin-bottom: 1em;
  background-color: #ddd;
  height: 1px;
  width: 100%;
`;

class BooksListComponent extends PureComponent {
  render() {
    const { books } = this.props;
    return (
      <Fragment>
        <StyledBooksHeader>
          <div style={{ marginBottom: '80px' }}>
            <Typography variant="h3">Books</Typography>
            <Typography variant="body1">&nbsp;React Boilerplate App sample entity.</Typography>
          </div>
          <Typography variant="caption">Continue reading. . .</Typography>
          <VerticalDivider />
        </StyledBooksHeader>
        <StyledBooksLibrary>
          {books.map((book) => (
            <div key={book.bookId}>
              <BookComponent
                key={book.bookId}
                title={book.title}
                author={book.author}
                cover={book.cover}
              />
            </div>
          ))}
        </StyledBooksLibrary>
      </Fragment>
    );
  }
}

BooksListComponent.propTypes = {
  books: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);
