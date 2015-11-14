# Basic HTML Project dokify
Basic HTML project dokify with Gulp, Bower, LESS, BootStrap, JSON, AngularJS &amp; dndLists.

## Overview
A simple HTML test project for recruitment purposes. A maintainable directory structure in addition to configuring Gulp and Bower - and that's basically it. By default it uses LESS. Bootstrap has been included to provide a initial grid system to speed up HTML development.
The required functionality, focused in the notifications icon and panel has been solved using a pretty simple AngularJS controller and the awesome dndLists plugin which provides a huge API of Drag&Drop functionalities.

## Explanation
I have chosen the AngularJS framework because of its cleaner syntax and complete MVC integration instead of the old jQuery path or a time consuming and expensive in code lines aproach using plain javascript and the HTML5 API.
The model structure of the notifications is coded as a JSON document that fakes a server endpoint. I have included a "id" property to the model as it would be in a real implementation. $http AngularJS' service brings the data in a XHR request and the model is loaded in the AngularJS $scope and injected in the view. ng-click & ng-show controls the panel visibility. Everything in the same controller.
The tricky part of the drag and drop functionality follows the AngularJS way too with dndLists. This ligthweight library it's focused in ordering list elements through drag and drop behavior uses the native HTML5 API to convey the model data.  

## Project Tree
```
.
├── assets
|   ├── js
|   |   └── application.js
|   ├── less
|   |   └── application.less
|   ├── vendor
|   └── resources     // provided layuot designs
|
├── public
|   ├── assets
|   |   ├── css
|   |   └── js
|   └── index.html
|
├── bower.json
├── gulpfile.js
├── package.json
```

## Getting Started
**Prerequirements:** You must have [Node.js](https://nodejs.org/) installed on your system. It's pretty easy, just follow the instructions on their website. You should also install bower and gulp globally (`npm install -g bower gulp`).

1. Install node packages with `npm install`
2. Install bower components with `bower install`
3. Run `gulp`
