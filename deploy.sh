#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Another deployment try'
git push -f git@github.com:morctus/morctus.github.io.git master:gh-pages

cd -  
