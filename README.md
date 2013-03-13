# JKL
===================
A light-weight JKL scaffolding that's ready to deploy after setting up one config.

## Rake tasks
===================
#### rake dev
    jekyll --server --auto

Sets up jekyll server for dev. Site is regenerated everytime you save a file. NOTE: Changing _config.yml will require a restart of the jekyll server to
see changes.

#### rake sass
    sass --watch _sass:css 

Starts Sass polling to regenerate css on file save. 

### Notes
Example posts are in jkl/_posts/
There are two layouts, one for posts, one for other pages. Layouts are stored, creatively, in jkl/_layouts/
Folders with an underscore are not copied over to _site

## TODO
* Rake tasks for deployment via github or server
* More styling
* Style Guide
