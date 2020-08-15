### Description
Knigoteka is a web application where you can learn about other people's thoughts about your favourite books or discover new ones. You can also help out other people by posting your favourite books and your opinion on them. In order to post a book, you will need to create or login to your account. When you are in your account, you can keep track of the books you've posted and the amount of likes you have collected. You can also delete and edit your posted books and like others people's posted books. The books with the most likes are listed first and the top 3 are featured on the home page. (This is project is made for a ReactJS Course for Software University 2020)

### Routes
Guest Pages: 
- / - Home Page
- /all-books - All Books Page
- /book-details/:id - Book Details Page
- /register - Register Page
- /login - Login Page

User Pages: 
- /post-book - Post Book Page
- /edit-book/:id - Edit Book Page
- /profile/:id - Profile Page
- /logout - Redirects to Home Page

### Rest API 
In the server directory you can run `npm start` to run the rest api.

Functionalities: 

Book:
-  GET - get all books - /api/book
-  GET - book details -  /api/book/details/:id
-  PUT - (Auth) like book - /api/book/like/:id
-  PUT - (Auth) edit book - /api/book/:id
-  POST - (Auth) post book - /api/book

User:
-  GET - get user - /api/user?id=:id
-  POST - register user - /api/user/register
-  POST - login user - /api/user/login
-  POST - logout user - /api/user/logout


This project connects with the Cloudinary API for storing the images on their server.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

### `npm run build`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `npm run build` fails to minify

