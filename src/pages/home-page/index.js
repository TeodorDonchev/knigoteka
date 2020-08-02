import React, { Component } from 'react';
import Books from '../../components/books';
import PageTitle from '../../components/title';
import About from '../../components/about';
import PageLayout from '../../components/page-layout'
import UserContext from '../../Context'

class HomePage extends Component {
  static contextType = UserContext;

  render() {
    return (
      <PageLayout footer="normal">
        <PageTitle text="Most Liked Books" />
        <Books page='home' />
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
