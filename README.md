# Interspace-Online

Summary of your current progress in the **Interspace Online** project:

### 1. **Project Structure Setup**
   - Created separate **frontend** and **backend** directories within the main project folder.
   - Initialized a Git repository for version control across both frontend and backend.
   - Added a `.gitignore` file to exclude unnecessary files from both frontend and backend.

### 2. **Frontend Development**
   - Built basic frontend components using React:
     - **CreatePost** component to handle post creation.
     - **Post** component to display individual posts.
   - Working on general frontend layout for user interaction (e.g., login/signup forms, post feed, etc.).

### 3. **Backend Development**
   - Set up an Express.js server with necessary middleware:
     - **Cors** for cross-origin requests.
     - **Body-parser** for handling JSON requests.
   - Connected to MongoDB using **Mongoose** for data storage and modeling.

### 4. **Post Model and API**
   - Created a **Post** model for storing posts in the MongoDB database.
     - Each post contains a `userId`, `content`, `createdAt`, and potentially other fields.
   - Created backend routes for handling post-related requests:
     - **POST /api/posts**: Create a new post (tested successfully via ThunderClient).
     - Added logic to store the `userId` with each post.

### 5. **User Authentication**
   - Created a **User** model for managing users in MongoDB:
     - Each user contains fields like `username`, `email`, `password` (hashed).
   - Implemented authentication routes:
     - **POST /api/signup**: To handle user registration.
     - **POST /api/login**: To handle user login with password validation.
   - Used **bcryptjs** for password hashing and comparison.

### 6. **API Testing**
   - Tested post and user authentication routes using **ThunderClient**, confirming functionality for:
     - User signup.
     - User login.
     - Post creation.
   
### 7. **Association Between Posts and Users**
   - Implemented a relationship between **posts** and **users**:
     - Stored `userId` in each post to reference which user created the post.
     - This allows the backend to fetch posts by a specific user in the future.

---

### Next Steps/To-Do:
1. **Frontend**:
   - Build the **login** and **signup** forms and connect them to the backend APIs.
   - Implement functionality for users to view their own posts on their profile.
   
2. **Backend**:
   - Add more advanced features such as:
     - **Post fetching by user** (e.g., `/api/posts/user/:userId`).
     - **Authorization**: Ensure only the owner of a post can edit or delete it.
     - **JWT authentication**: Secure API routes with token-based authentication.
   
3. **Project Enhancements**:
   - Pagination for fetching posts.
   - Dashboard for users to manage their posts.
   - Testing the project as you build more functionality.
