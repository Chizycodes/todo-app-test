#!/bin/bash

# Increment version based on the type of change
increment_version() {
  local change_type=$1
  local current_version=$(grep version package.json | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
  local major=$(echo $current_version | cut -d. -f1)
  local minor=$(echo $current_version | cut -d. -f2)
  local patch=$(echo $current_version | cut -d. -f3)

  case $change_type in
    major)
      major=$((major + 1))
      minor=0
      patch=0
      ;;
    minor)
      minor=$((minor + 1))
      patch=0
      ;;
    patch)
      patch=$((patch + 1))
      ;;
    *)
      echo "Invalid change type. Use major, minor, or patch."
      exit 1
      ;;
  esac

  echo "$major.$minor.$patch"
}

# Usage example
new_version=$(increment_version patch)
sed -i '' "s/\"version\": \"$[^\"]*$\"/\"version\": \"$new_version\"/" package.json
git add package.json
git commit -m "chore: bump version to $new_version"
git tag -a "v$new_version" -m "Release version $new_version"
git push origin main --tags