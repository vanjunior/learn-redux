import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    render() {
        // console.log(this.props.ivan);
        // console.log(this.props.selectBook({'title': 'abc'}));
        
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList

    return {
        books: state.books,
        ivan: 'ngetes application state'
    };
}

// Anything returned from this functino will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result be passed to all of our reducers

    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}


// Promote BookList from a component to a container - itn eed to know about this new dispatch method, selectBook.
// And make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
