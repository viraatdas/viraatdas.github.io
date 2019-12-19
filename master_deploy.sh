git add .
git commit -m "$1"
git push -u origin development
git checkout master
git checkout development -- dist/
mv dist/* .
rm -rf dist
git add .
git commit -m "$1"
git push -u origin master
git checkout development
