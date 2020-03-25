# MapMyProperty
![Build and Deploy](https://github.com/bishrant/MapMyProperty/workflows/Build%20and%20Deploy/badge.svg)
A revised version of map my property that integrates Draw My Ranch, Plan My Land Operation and the existing map my property into a single one.

Bootstrapped using Angular CLI 9x. Will use at least 9.0.0 angular version.
ESRI ArcGIS JS will be compiled using ArcGIS Webpack plugin https://github.com/Esri/arcgis-webpack-plugin which uses Dojo Webpack Plugin underneath.

Use of esri-loader is discouraged for overall consistency and portability of the application.

## View it live
Go to https://bishrant.github.io/mapmyproperty to view it live.

## Steps to get started:

1. Just fork/download the repo: git clone https://github.com/bishrant/mapmyproperty.git

2. Create a branch for your feature: Lets say you are created a feature1.

3. `git branch feature1`

4. Checkout and switch to that branch `git checkout feature1`

5. Make your changes to your files as you'd normally do.

6. Once you are done making those changes, check the status by running git status and add the branch for commit `git add -A` (-A is for all files).

7. Write a sensible commit message. `git commit -m "added a feature to select features by right clicking on the map"`

8. Checkout master to see if somebody else made some changes since you last checked out your branch. `git checkout master`

9. Pull/refresh the master git pull master using `git pull`

10. Merge conflicts manually (if any), otherwise change to your feature branch and merge to master
`git checkout feature1`

11. `git push --set-upstream origin feature1`

12. Head over to github.com and go to the repository Github MapMyProperty and create a pull request.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
