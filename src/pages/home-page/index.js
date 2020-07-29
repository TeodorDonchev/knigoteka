import React from 'react';
import Book from '../../components/book';
import PageTitle from '../../components/title';
import About from '../../components/about';
import PageLayout from '../../components/page-layout'

function HomePage() {
  return (
    <PageLayout footer="normal">
      <PageTitle text="Most Liked Books" />
      <Book page='home' />
      <PageTitle text="About" />
      <About text="Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
    Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
      Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
     Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others."/>
    </PageLayout>

  );
}

export default HomePage;
