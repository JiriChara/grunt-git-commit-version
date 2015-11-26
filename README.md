# grunt-git-commit-version

> Create a file with that with the last commit hash

it basically creates a file containing last git commit hash in specified file.

## Installation

```shell
npm install --save-dev grunt-git-commit-version
```

Once that's done, add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-git-commit-version');
```

## Options

```javascript
grunt.initConfig({
  git_commit_version: {
    options: {
      file: 'VERSION' // path to the file you want to write the last git commit hash
    }
  }
})
```

### options.file
Type: `String`, Default Value: `VERSION`
