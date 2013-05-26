---
title: "File management in Vim. An introduction." 
layout: posts
---

# Square One

There are many different ways to open files and set up your working environment.
This is not a comprehensive list of ways to open and manage files in vim. It IS
a comprehensive list of the way in which I open and manage files in vim. 

I use terminal vim, so all instructions are, for terminal vim. I also personally
alias vi to vim, but for clarity I will reference Vi Improved on the command
line. Just know that I'm not typing three characters every time. That would be
the worst. Also, until later in the post when I explicitly declare it, I will be
using this as my .vimrc and nothing more (no plugins).

```
set nocompatible      " Uses vim vs vi settings must be set first
syntax on 	          " Turn on syntax highlighting for recognized filetypes
set history=1000      " Default is 20, I'd rather set this to ∞
```

We must walk before we can run, so let's get going.

### 1. Opening a single file
```
  vim filename   
```

Awesome that is easy enough but not very powerful.

### 2. Opening more than one file
```
vim filename1 filename2 filenameN
```

What this does is open up multiple files. But gasp, you can only see one? Why is
that? Well the other files are in hidden buffers. Okay, let's try to navigate
around a little bit with three files open shall we?

### 2a. What the fuck did I just open? 
I can't remember, seriously, what list of documents I just had vim open in
separate buffers. Ok, run this mindblowing command.

```
:buffers
```

This will output a list of buffers (with assigned numbers! oh how useful).
So now we can run something like this 

```
:buffer 3
```

This will, wait for it, switch the window to display the file stored in "buffer
3." But that is A LOT of characters to type. So maybe instead we should use the
short-hand command. 

```
:b 3
```

Ahh that feels better.

Okay, so you went to buffer 3. But you didn't want buffer 3, you totally
meant to go to buffer 2. Now, currently we are only dealing with three buffers right now, but
if you're like me you often have many files in buffer at any given point in
time. So instead of navigating to buffer 2 by using :buffer 2 - we're going to
do something even crazier.

```
:bp
```

Wait, what the fuck does that do? It brings you to the previous buffer. Note,
that it's not the previously VIEWED buffer. It's the previous buffer in the list
of buffers. :bp stands for :bufferprevious, which is also a valid command but is
SO many characters to type and I'm lazy. Note, vim commands will tab complete so 
you can write :bu<Tab>. Doing this you might notice :buffernext or :bn for
short. This will, crazy I know, switch to the next buffer. But wait what if you
do want to open up the last file you just looked at? I got you, just do this:

```
:e#
```

So now we can make the window display a single file in buffer at a time. And
hopefully we can switch between those buffers with some amount of ease.

Now I don't know about everyone else but I generally like to look at more than
one file at a time. Or I like to look at the same file but it's a super long
file and I want to look at the top and bottom at the same time.

Just so we are on the same page let's all switch to first file in our list of
buffers by running either

```
:bfirst
```

or 

```
:brewind
```

Okay so now we are looking at buffer 1. Sometimes files get long. Really long.
And computer screens are only so tall. Welcome to the world of splits. This, as
they say is where the plot thickens. 

Let's keep it simple at first and just split the file that is currently
displayed in our window. 

```
:sp
```

I'm guessing sp stands for something like "split." This will cause the current file to split horizontally across the window.
This is generally how I split html/templating files because, depending on the
content those can tend to be wider in text length than css/scss files. 

Now you probably want to know - how do I get to that other split man. THAT is a
good question. I know we haven't covered it yet but I'm assuming you know how to
navigate left/up/down/right using the corresponding h/j/k/l keys. To switch your
active split just type control and w at the same time - then press one of the
hjkl keys. The other thing to do is <CTRL>+w w - that will just go to the next
split. So if you aren't lazy and don't want to do it efficiently then you can
just keep pressing <CTRL>+w w over and over again to cycle through splits.

```
<CTRL>+w [hjklw]
```

Okay so now we can cycle through the two splits we have. But this is still ONLY
ONE FILE. Just stick with me for one more minute before we get into lots of
files. 

Okay so when I'm splitting css files I normally like don't like to split them
horizontally. I like to split them vertically. The content is narrow and I can
generally get several vertical splits going without truncating/wrapping lines of
code.

Now try typing this

```
:vsp
```

Yeah nice right? Do it AGAIN

```
:vsp
```

You can do this pretty much forever. 
Okay - now let's close a few of these splits. Because now I'm looking at the
same file in four different splits and I don't want to do that anymore.

```
:q
```

That will close the split. Quit doesn't quit out of vim, it just quits showing
you that buffer. Now if you want to save before you quit out of that file just
do 

```
:wq
```

Okay now run quit again on that split to get us back to having two horizontal
splits of the same file. Oh man - that kind of sucked. It's like I had all these
splits open and closing them one by one is cool functionality but you know what
else would be cool? Only leaving open the split I'm currently on. Of course
there is a way to quickly do that 

```
:only
```

Okay if you just ran that hit :sp again. Because we want two splits of the same
file. 

It's time to level up. Let's show two different files in these two splits we
currently have. So what we are going to do is - replace the content of one of
the splits so to speak. There are SO many ways to do this. And guess what the
best part is? You already know how to do a bunch of them. Like this

```
:bn
```

Okay so we just loaded the "next buffer" into our window split. Awesome. Hmm
what else can we do here? Well unix and vim are pretty great. They tab complete
a lot of available options. If I launched vim from the root of a project I might
try to do something like 

```
:sp <Tab>
```

Woah! It's a list of options. Go ahead tab through to the option you want and
hit enter. If this still doesn't sound exciting and powerful don't worry we are
just getting warmed up. 

:sp and :vsp can be passed a file name OR a path - which then puts you in the
context of navigating a file structure but with vim commands. Your typical hjkl
movment commands work as well as search using /. Hitting enter will open a file
or folder. So maybe if I know the name of the file I want to work on with the
path I'd run something like:

```
:sp css/styles.css
```

This would open a horizontal split with the given filename. Now you can only do
one file at a time this way which in my opinion kind of blows but we'll deal
with that later. 

But what about all that buffer stuff we learned earlier? What if you want to
create a split with the number of a buffer? Doing :sp buffer 1 won't help you. I
learned that the hard way. No instead you can do

```
:sbuffer 3 (or whatever number you are looking for)
```

Wait, sbuffer seems too long. Fuck. Hmmmm let's grock this together. So :b works
in place of :buffer ...maybe :sb will work insteab of :sbuffer.

```
:sb 3
```

It did work! 

Okay now we have two splits open of different files.

