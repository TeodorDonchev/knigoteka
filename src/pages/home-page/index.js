import React, { Component } from 'react';
import Book from '../../components/book';
import PageTitle from '../../components/title';
import PageLayout from '../../components/page-layout'
import UserContext from '../../Context'
import AlertMsg from '../../components/alert-msg';
import styles from './index.module.css';

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
        <AlertMsg text="Sorry, there aren't any posted books at the moment" type="no-data" />
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
        <div className={styles['about-container']}>
          <div className={styles['about-text']}>
            Knigoteka is a web application where you can learn about other people's
            thoughts about your favourite books or discover new ones. You can also help out
            other people by posting your favourite books and your opinion on them.
            In order to post a book, you will need to create or login to your account.
            When you are in your account, you can keep track of the books you've posted and the
            amount of likes you have collected. The books with the most likes are listed first and the top
            3 are featured on the home page. So keep on reading and posting interesting books :)
       </div>
        </div>
      </PageLayout>
    );
  }
}

export default HomePage;
