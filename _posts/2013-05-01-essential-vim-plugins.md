---
title: "Essential Vim plugins for front-end developers"
layout: post
---

As a front-end developer I've found these plug-ins to be quite wonderful. While
I'm comfortable running stock vim - I prefer to have these as a part of my
setup.

[pathogen](https://github.com/tpope/vim-pathogen/ "Pathogen - Manage your vim plugins")
Manage your vim plugins. Some of the new hipster kids use vundle or something -
but pathogen has always handled anything I've needed from a vim package manager.

[gundo](https://github.com/sjl/gundo.vim/ "Gundo - Visualize your history")
Visualize your undo tree with ease. Vims undo tree is much more verbose then people realize. 
As a result it's incredibly powerful.  Visualizing it is incredibly helpful in
fully utilizing the full power of vims history. I'd also recommend setting your
.vimrc to have a history greater than the default 20. I like to keep a long
paper trail so I have this in my .vimrc
<code>
  set history=1024
</code>

Why 1024 you ask? It's just a large, nice round number I like that has served me
quite well. I don't know about you but I generally need way more than 20 undo
states. 

[ctrlp](https://github.com/kien/ctrlp.vim/ "ctrlp - fuzzy finder")
Full path fuzzy file, buffer, mru, tag, ... finder for Vim. The quickest way to
get around if you know what you're kind of looking for. 
I have this mapped to 'ff' in my .vimrc like so
<code>
  nnoremap ff :CtrlP<CR>
</code>
ff is right on my homerow and for some reason ff means "fuzzy find" in my mind
so it's easy to remember. But you could map it to anything you fancy.

Often times people want a directory tree to navigate for files. 
This seems like a silly way to find files if you ask me. It involves a lot of cognitive load. 
If you are browsing an unknown file structure though and that is what you want, I'd
suggest using something like 
<code>
:e .
</code>
as opposed to a plugin like nerdtree.

[Fugitive](https://github.com/tpope/vim-fugitive, "Fugitive - a Git wrapper for Vim")
If you use Vim for source control - I'd suggest installing this. :Gbrowse alone
is worth the price of admission. :Gbrowse will open that file on github in your
default browser.

[Snipmate](https://github.com/garbas/vim-snipmate "Snippets for Vim")
I fell in love with snippets when I first started to use textmate forever ago.
This is basically snippet syntax support for vim. 

[Zencoding](https://github.com/mattn/zencoding-vim "Vim port of Emmet")
While Emmet isn't officially available on vim - it does have a zen-coding fork
that strives for feature parity with Emmet. It's a great way to edit/generate
large blocks of css and html.

[Multiple Cursors](https://github.com/terryma/vim-multiple-cursors "Multiple Cursors")
Have you ever wanted to edit more than one of line of text at the same time?
This is helpful for that. The repo has some great demos. I'd also suggest
learning regex. But that's a much longer post. 
