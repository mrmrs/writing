---
title: "Essential Vim plugins for front-end developers"
layout: post
---

As a front-end developer I've found these plug-ins to be quite wonderful. While
I'm comfortable running stock - I prefer to have these as a part of my
setup.

[pathogen](https://github.com/tpope/vim-pathogen/ "Pathogen - Manage your vim plugins")
Step one to installing vim plugins is to install pathogen.
```
   mkdir -p ~/.vim/autoload ~/.vim/bundle; \
   curl -Sso ~/.vim/autoload/pathogen.vim \
   https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim
```

[gundo](https://github.com/sjl/gundo.vim/ "Gundo - Visualize your history")
Visualize your undo tree with ease. Vims undo tree is much more verbose then people realize. 
*As a result it's incredibly powerful as a design tool.*  Visualizing it makes mangaging your history
a breeze. I suggest setting your .vimrc to have a history greater than the default 20. 
```
  set history=256
```

[ctrlp](https://github.com/kien/ctrlp.vim/ "ctrlp - fuzzy finder")
Full path fuzzy file, buffer, mru, tag, ... finder for Vim. The quickest way to
get around if you know what you're kind of looking for. 
I have this mapped to 'ff' in my .vimrc like so
<code>
  nnoremap ff :CtrlP<CR>
</code>
ff is right on my homerow and for some reason ff means "fuzzy find && find file" in my mind
so it's easy to remember. You can map it to anything you fancy.

[Fugitive](https://github.com/tpope/vim-fugitive, "Fugitive - a Git wrapper for Vim")
If you use Vim for source control - I'd suggest installing this. :Gbrowse opens the github page for the file you are editing
and :Gblame will show you who to yell at for nasty code or show you which commit you made a certain change.

[Snipmate-plus](https://github.com/garbas/vim-snipmate "Snippets for Vim")
Adds snippet support in vim. Snipmate plus also features nested snippets.

[Multiple Cursors](https://github.com/terryma/vim-multiple-cursors "Multiple Cursors")
Have you ever wanted to edit more than one of line of text at the same time?
This is helpful for that. [demo](http://www.youtube.com/watch?v=Umb59mMvCxA "Video Demo")

[Syntastic}(https://github.com/scrooloose/syntastic "Syntastic")
Syntastic checks your syntax and let's you know when you break something. 
When you hook it up with csslint and jshint you basically have 
developer super powers.

[Lint](https://github.com/joestelmach/lint.vim "Lint")
Runs jshint and csslint whenever you save a js/css file. Need I say more?
Getting lint up and running takes a little bit of work (installing v8 and such) but
it's well worth it. 

[Sparkup](https://github.com/rstacruz/sparkup)
Similar to emmet or zen-coding. Generate lots of markup without many keystrokes. 

[Surround](https://github.com/tpope/vim-surround)
This is mandatory for editing xml or html. 


## Miscellaneous

Nothing fancy here. 
Install these for better syntax highlighting and tag completion.

[html5.vim](https://github.com/othree/html5.vim)
[scss-syntax.vim](https://github.com/cakebaker/scss-syntax.vim)
[vim-css3-syntax](https://github.com/hail2u/vim-css3-syntax)
[vim-javascript-syntax](https://github.com/jelera/vim-javascript-syntax)
