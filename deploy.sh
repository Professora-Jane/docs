#!/usr/bin/env bash
set -e

# config
git config --global user.email "${GH_USER_EMAIL}"
git config --global user.name "${GH_USER_NAME}"
git remote add gh-token "https://${GH_TOKEN}@github.com/${GH_BRANCH}";
git fetch gh-token && git fetch gh-token gh-pages:gh-pages;

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:${GH_BRANCH} main:gh-pages

echo "Completed deploying documentation"
