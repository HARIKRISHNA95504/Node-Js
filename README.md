# Git 
* Navigate to project folder
```
cd C:\Users\HARIKRISHNA\Desktop\NodeJs
```
* initialize the git
```
git init
```
* Add remote origin
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git remote add origin https://github.com/HARIKRISHNA95504/Node-Js.git
```
* stage Files
```
git add .
```
* Commit changes
```
git commit -m "crates express project"
```
* Push to the remote repository
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git branch -M main
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push -u origin main
```
* having error on the pushing time
```
To https://github.com/HARIKRISHNA95504/Node-Js.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/HARIKRISHNA95504/Node-Js.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
```
git pull origin main --allow-unrelated-histories
git push origin main
```
* for the forced to push
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push origin main --force
```
