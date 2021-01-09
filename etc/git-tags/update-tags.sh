PACKAGE_VERSION=$(cat package.json \
  | grep \"version\" \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

git tag v$PACKAGE_VERSION
git tag -a -m "Tag for version $PACKAGE_VERSION" v$PACKAGE_VERSION
git push --tags