# Interspace-Online

## To Be Added

1. User can Accept Friend Request from Frontend [X]
2. User can Reject Friend Request from Frontend [X]
3. User can Remove/Cancel Friend Request from Frontend [X]
4. User can Unfriend from Frontend [X]

### How to Contribute

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
