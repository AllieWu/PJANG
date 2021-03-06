# General
## Team
Allison Wu: Project Manager, Scrum Master, Developer

Nathan Whelden: Developer

Parus Thakur: Developer

Greg Bolling: Developer, Assistant Project Manager

Jiayan Huang: Developer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## Notes
1. This website is deployed to https://pjang.herokuapp.com/ via. Heroku
2. This repository was originally cloned off of https://github.com/UFWebApps/MERN-Template

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# For Developers
## Viewing tasks for the project, sprint, and by individual
For each sprint, each developer has been assigned tasks that we assign during the sprint planning process. 
To see the team's tasks for the current sprint, navigate to the Projects tab > Sprint #
To see your individual tasks, navigate to the Issues tab & under assignee, select your username. 
To see ALL tasks for all sprints, navigate to the Issues tab

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## Task development workflow
### General steps
##### IN LOCAL REPOSITORY FOLDER (C:\...\Documents\GitHub\PJANG)
1. `git checkout master`                          *// go to your local master branch*
2. `git pull origin head`                         *// makes sure your local master branch has the most recent remote master branch changes*
3. `git checkout -b new_branch`                   *// create a new local branch to develop your features*
4. Develop your code for the feature
5. `git add --all`                                *// adds all your changes*
6. `git commit -m "I am commiting my changes"`    *// saves all your added changes to your local branch*
7. `git push origin head`                         *// pushes all your changes to the remote test branch*

##### IN THE GITHUB.COM PJANG REPOSITORY
1. Make a pull request from new_branch branch into master branch
2. Wait for confirmation from scrum master/other developers *(For best code quality, we want multiple eyes on new code before commiting it to our remote master branch)*
3. Approve the pull request, your newly added code should now be on the master branch! Everyone who pulls from the remote master branch will now have your changes.

### Example:
Say you are working on https://github.com/AllieWu/PJANG/issues/40
##### IN LOCAL REPOSITORY FOLDER (C:\...\Documents\GitHub\PJANG)
1. `git checkout master`
2. `git pull origin head`
3. `git checkout -b task40_productPage_graphics` **// it's best that we have a strict format to how we name our branches, such // as task#_description**
4. Code the product page to have all product graphics
5. `git add --all`
6. `git commit -m "I added all the graphics for the product page"`
7. `git push origin head`
8. In the GitHub.com PJANG repository, make a pull request from task40_productPage_graphics to master
9. Done! Every time someone pulls from remote master, the product page should have product graphics

### Git Version Control Figure:
##### Screenshot: https://gyazo.com/b3c4c5baab560b266c4069b3a86b17ad
