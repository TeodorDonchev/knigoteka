import React, { Component } from 'react';
import Book from '../../components/book';
import PageTitle from '../../components/title';
import About from '../../components/about';
import PageLayout from '../../components/page-layout'
import UserContext from '../../Context'
import AlertMsg from '../../components/alert-msg';

class HomePage extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    const response = await fetch('http://localhost:9999/api/book');
    const books = await response.json();
    this.setState({
      books
    });
  }

  renderBooks() {
    let {
      books
    } = this.state;

    books.sort((a, b) => b.likes.length - a.likes.length);
    books = books.slice(0, 3);

    if (books.length === 0) {
      return (
        <AlertMsg text="Sorry, there aren't any posted books at the moment" type="no-data"/>
      );
    }

    return (
      <div>
        {books.map(book => {
          return (
            <Book key={book._id} page="home" {...book} />
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    let {
      books
    } = this.state;

    const footerType = books.length > 0 ? 'normal' : 'form';
    return (
      <PageLayout footer={footerType}>
        <PageTitle text="Most Liked Books" />
        {this.renderBooks()}
        <PageTitle text="About" />
        <About text="Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
    Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
      Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
     Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others."/>
      </PageLayout>
    );
  }
}

export default HomePage;
