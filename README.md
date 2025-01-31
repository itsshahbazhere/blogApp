# BlogApp Backend

## Description
BlogApp is a backend application built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It provides APIs to create posts, view all posts, like/unlike posts, add comments, and delete comments on posts.

## Features
- **Create Post**: Users can create a new blog post.
- **View Posts**: Retrieve all available blog posts.
- **Like/Unlike Post**: Users can like and unlike posts.
- **Add Comment**: Users can add comments to a post.
- **Delete Comment**: Users can delete their comments from a post.

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB

## Installation
### 1. Clone the Repository
```sh
https://github.com/itsshahbazhere/blogApp.git
cd blogApp
```

### 2. Install Dependencies
```sh
npm install dotenv express mongoose nodemon
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the Server
```sh
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### **Posts**
- `POST /api/v1//posts/create` - Create a new post
- `GET /api/v1/posts` - Get all posts

### **Likes**
- `PUT /api/v1/likes/like` - Like a post
- `PUT /api/v1/likes/unlike` - Unlike a post

### **Comments**
- `POST /api/v1/comments/create` - Add a comment to a post
- `DELETE /api/v1/comments/delete` - Delete a comment from a post

## Author
**Shahbaz**

GitHub: [itsshahbazhere](https://github.com/itsshahbazhere)

