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


### Comprehensive Git Workflow

1. **Creating a New Branch:**
   - Start by creating a new branch for your feature or bug fix. This keeps your main branch stable.
   ```bash
   git checkout -b newbranch
   ```

2. **Making Changes:**
   - Work on your code, making changes as needed.
   - Stage your changes:
   ```bash
   git add .
   ```
   - Commit your changes with a descriptive message:
   ```bash
   git commit -m "Descriptive message about changes"
   ```

3. **Pushing Changes to GitHub:**
   - Push your branch to the remote repository:
   ```bash
   git push origin newbranch
   ```

4. **Creating a Pull Request:**
   - Navigate to your GitHub repository in the browser.
   - You’ll typically see an option to create a pull request (PR) after pushing. Click on that.
   - Fill in the details for the PR and submit it for review.

5. **Merging the Pull Request:**
   - Once the PR is reviewed and approved, you can merge it into the main branch on GitHub.
   - After merging, you might see an option to delete the branch directly from the GitHub interface.

6. **Syncing Your Local Repository:**
   - Switch back to your main branch:
   ```bash
   git checkout main
   ```
   - Pull the latest changes from GitHub to ensure your local main branch is up to date:
   ```bash
   git pull origin main
   ```

7. **Deleting the Branch:**
   - You can now safely delete the local branch since its changes are merged into the main branch:
   ```bash
   git branch -d newbranch
   ```
   - If you pushed the branch to GitHub, you can also delete it from the remote:
   ```bash
   git push origin --delete newbranch
   ```

- **Practice Regularly:** The more you practice the workflow, the more familiar you’ll become with it.
- **Use Visual Tools:** If command line feels overwhelming, consider using GUI tools like GitHub Desktop, Sourcetree, or even the Git integration in IDEs like VS Code. They often visualize the branching process better.
- **Read the Docs:** Git and GitHub have extensive documentation that can help clarify concepts and workflows.
- **Experiment in a Safe Environment:** Create a dummy repository to play around with branches and PRs without the fear of breaking something important.

### Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
