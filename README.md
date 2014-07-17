# grunt-minify

## Installation and Setup
1. Install Nodejs / npm
2. Install Ruby (rbenv install only https://gorails.com/setup/ubuntu/14.04#ruby-rbenv)
3. Install Bundler `gem install bundler`
4. Clone repo
3. Install ruby gems using bundler
    1. `cd <cloned repo>`
    2. `bundle install`
5. Install Node packages `npm install`

## Running
`grunt --static=static_files/`

### Registered Tasks
* default - Watches directories for changes, compiles less/sass, and minifies css/js.
* cleanAll - Deletes all the css and minified js files.
* cleanCss - Deletes the css files.
* cleanJsMin - Deletes the minified js files.
* buildAll - Same as default plus it deletes the non-minified css files.

### File Structure
The static option is the base directory where you store your less, sass, css, and js files. This script expects the directory structure shown below.

    <static dir>
    ├── css
    │   ├── blah.css
    │   └── blah.min.css
    ├── js
    │   ├── blah.js
    │   └── blah.min.js
    ├── less
    │   └── blah.less
    └── sass
        └── blah.scss
