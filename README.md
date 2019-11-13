# typescript-incremental-compile

This project explains how to run incremental compile during development of any typescript project using gulp.
To run the incremental build you need to install following dependencies. This project uses the default tsconfig.json file present at the root of the project.

1. gulp
2. gulp-typescript

Include the `gulpfile.js` at the root of your typescript project. Open console and run `gulp watch`

## Tests

1. Clone this repo.
2. Run npm install.
3. Run the command `gulp watch` or `npm watch`
4. Make the changes in any of `.ts` file, you could see the changes being reflected in corresponding JS file.
