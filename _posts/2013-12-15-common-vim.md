---
title: "Common Vim"
layout: post
---

# Common Vim

### a

```a``` enter into insert mode after the character your cursor is on

```A``` enter into insert mode at the end of the current line

### b

```b``` move cursor to first character of previous word

```B``` same

### c

c stands for change. It doesn't do anything on its on. Here are some common commands handy for editing front end code

```cw``` cw stands for change word. This will delete the word your cursor is over and enter into insert mode

```ci"``` If your cursor is in between a set of quotes, this will delete everything inside those quotes and drop you into insert mode.


```ci(``` Change all text inbetween a set of parenthesis

```ci{``` Change all text in between brackets (amazing for replacing the contents of an entire css class)

```ct"``` Change text in between quotes

```2ct"``` Delete text from cursor up until the 2nd " in a line

```cF"``` Change from cursor up until and including the next quote

```C``` Delete until the end of the line and enter into insert mode

#### EX Commands

```:cd ../``` Change directories to one previous

```:cd ~/Sites/projectname``` Change directories to a known directory.

#### MISC
CTRL-c In Normal mode, any pending command is aborted. Also aborts current search.


### d


```dd``` Delete the current line

```D``` Delete from cursor until the end of the line. Same as ```d$```

```dw``` Delete the word your cursor is on. Difference between this and cw is that you do not enter into insert mode.

```2dw``` This will delete the word your cursor is on as well as the next one. You can replace 2 with any number. It's pretty sweet.

```2df"``` Delete from cursor to the 2nd " mark. This is inclusive so it will delete the second ". This is a handy command for deleting attributes in html if your cursor is on the first letter of the attribute.

```di"``` Delete everything inside of these quotes

```da"``` Delete everything wrapped in quotes (including the quotes)

```<C-d>``` Scroll half page

#### EX commands

```:%d``` Deletes all lines in a file

### e

```e``` jumps to the end of the next word

```ge``` jumps to the end of the previous word

#### EX commands

```:ea 5m``` jump to five minutes ago. Seriously.

```:ea 1h``` jump to 1 hour ago.

```:ea 14h 30m``` jump to 14 hours and 30 minutes ago. Ok you get the point.

```:e filename``` open file in the current window

```:e .``` open file explorer in current directory


### f

f is for finding things so it doesn't do anything on it's own. It will jump to the next character you type after f. It can be combined with c,d,y to change, cut, and copy sections of text.

```fr``` jumps to the next r on the (same line only)
```ft``` jumps to the next t on the (same line only)
```f,``` jumps to the next , on the (same line only)

```Fr``` jumps to the previous r (same line only)
```Ft``` jumps to the previous t (same line only)
```F,``` jumps to the previous , (same line only)

```2df"``` delete from cursor through two occurences of "

### g

```gx``` opens url under your cursor in a browser

```gf``` opens file that is under your cursor in the current window

```g;``` jumps to the last place you edited text

```gg=G``` or ```1G=G``` format the entire file

```gn``` Grab the next match from last search and visually select it

```gi``` Jump into insert mode at the end of the last insert you did

```ge``` Move to the end of the previous word

```gp``` Pastes just like p but leave the cursor after the pasted text

```gP``` Pastes just like P but leave the cursor after the pasted text

```g~~``` Switch case of all characters in current line

### h

```h``` Move cursor one character to the left

```h``` Move cursor one character to the left

```4h``` Move cursor four characters to the left

```dh``` Delete character to the left of cursor

```:h``` Opens up vim help in a new window

```:h a``` Opens vim help to documentation on the a key

```:h i_CTRL-R``` Opens vim help to documentation on pressing control and r while in insert mode

### i

```i``` Enter insert mode where your cursor is. Any text you insert will be inserted before the character your cursor was over.

```4i<tab>``` Insert 4 tabs

```80i*``` Insert 80 * characters

```I``` Insert text at the very beginning of the line

### j

```j``` moves cursor down one line

```32j```  moves the cursor down 32 lines.

```J``` joins two lines

### k

```k``` moves cursor up one line

```8k``` moves cursor up 8 lines

```<C-w>K``` rotates window to horizontal split

```dk``` delete line above cursor

### l

```l``` Move cursor right one character

```dl``` Delete character under cursor. Same as x.

```L``` Move cursor to last line in window

### m

m is for marking spots. It does not do anything by itself.

```mk``` mark spot as k
you can then move to any spot in the file and do something like

```d'k```,```c'k``` or ```y'k``` Delete, change, or yank from spot k to your current cursor position.

### n

```n``` moves forward to next match of a search pattern

```N``` moves to backwards to previous match of a search pattern

```gn``` search forward for the last used search pattern.

### o

```o``` Opens a new line below where your cursor is and places you in insert mode

```O``` Opens a new line above where your cursor is and places you in insert mode

```CTRL-o``` Go backwards in the jumplist (list of where your cursor has been). Trust me this is like movement steroids.

```12CTRL-o``` You can also pass it a count so this will go backwards in the jumplist 12 spots

### p

Paste is a pretty big deal when you are dealing with code. So p should be one of your best friends.

```p``` pastes in the last thing you yanked or deleted (copied or cut).

```P``` pastes in the last thing you yanked or deleted (copied or cut) before the cursor.

```2p``` pastes in the last thing you yanked or deleted (copied or cut) twice.

```xp``` this will swap two characters. Technically it just deletes the character under your cursor, then pastes it back in. This is the equivalent of ```dlp```

```"*p``` Pastes in text from your system clipboard>

```"2p``` This will paste in text from the second register. You will use this all of the time. Most useful when you delete something you want to paste, then delete something else. Move to the place where you want to paste text, hit p and go "doh". Just remember ```"2p```


```"%p``` Pastes in the name of the current file.

```:212pu``` Pastes in last copy or delete on line 212. 212 can be any line number.

```:42pu *``` Pastes in system clipboard text at line 42.

```"/p``` Pastes in your last search pattern

```:<c-r>/``` Pastes in your last search pattern when you are on the command line

```"ap``` Pastes in register a. To see a list of registers and what they have in them, do ```:reg``` or ```:registers```

```"ap``` Pastes in register a. To see a list of registers and what they have in them, do ```:reg``` or ```:registers```

```"= 8*8<CR>p``` Pastes in evaluation of the expression ```8*8```. This could be any maths you want. ```=``` is the expression register, which allows you to do calculations.
From normal mode you can launch it by hitting ```"=```

### q

q records things - so it doesn't do much on its own. You need to tell it what register to store the recorded sequence in.

```qa``` Begins recording into register a. Enter in keystrokes you want to save, then hit ```q``` to end the recording.

```@a``` Will play back what you just recorded into register a.

If you wanted to increment a set of numbers in a line of text like ```.icon-1 { background-image:url(img-1.png); }``` you could do
```qa0yyp/\d<CR><c-x>n<c-x>0q``` now if we run ```@a``` and our cursor is on the line with code we want incremented, it will copy that line
and bump both of those numbers up to 2. And if we run it again with ```@@``` it will increment all the twos to threes on a new line. Or we could give it a count with ```99@a``` and get all the numbers up to 100.

#### EX Commands

```:q``` quits file

```:q!``` quits file without writing any of your changes

```:wq``` saves and quits file

```:12,42wq``` saves lines 12 to 42 and quits file

```:wqa``` saves and quits all files in buffer

### r
```r``` Replaces character under cursor with next input i.e.

```ra``` Replaces the character under the cursor with a.

#### EX Commands

```:r filename``` Pastes in the contents of filename.

```:r !ls``` Pastes in the output of ls. ! calls an external process in vim. So this can be pretty userful

```:r !w3m -dump http://somewebsite.com``` Pastes in the content from somewebsite.com without any of the markup. Must have w3m installed. WHICH YOU SHOULD.

```:r !tree``` Pastes in the output from running tree on a directory.

### s

```s``` deletes the character your cursor is on and enters into insert mode

```S``` deletes the whole line you are on and enters into insert mode

#### EX Commands

s is how you do find and replace, so let's just say it is all of the important.

```:s/foo/bar``` replaces foo with bar on the current line for the first occurance of foo

```:12,42s/foo/bar``` replaces foo with bar on lines 12,42 for the first occurance of foo in each line

```:12,42s/foo/bar/g``` replaces all occurances of foo with bar on lines 12,42

```:%s/foo/bar/g``` replaces all occurances of foo with bar for the entire file

```:'<,'>s/foo/bar/g``` replaces all occurances of foo with bar for the last visual selection

```:%~``` Repeat last substitute with same substitute string but with last used search pattern across the entire file.

```:%s/\ class=".*"//g"``` Delete all classes in markup for the current file

```:%s/\ id=".*"//g"``` Delete all ids in markup for the current file

```:bufdo %s/\ class=".*"//ge | update``` Delete all classes in markup for all files in buffer.

```:tabdo %s/\ class=".*"//ge | update``` Delete all classes in markup for all files in the current tab.

```:%s/\s\+$//e``` Removes trailing whitespace

### t

```t``` means 'til' so it doesn't do anything on its own. It is very similar to f but f is inclusive. T is exclusive meaning it will stop before the character you are finding.

```tf``` put cursor one character before the next occurance of f

```;``` repeat latest f, F, t, or T

```,``` repeat it in the opposite direction

```dt<``` Delete up until the next <. This is handy in the markup world.

```dt"``` Delete from cursor until next "

```dt}``` Delete from cursor until next }

### u

```u``` Undo changes

```U``` Undo all latest changes on one line, the line where the latest change was made.

```<c-r>``` Redo changes

#### EX Commands

```:undol ``` List all the history points in your tree of changes


### v

```v``` Start visual mode on a per character basis.

```V``` Starts visual mode linewise (selects whole lines).

```<c-v>``` Starts visual mode blockwise (very favorite).

```gv``` Reselect last visual selection

### w

```w``` Moves to the next word

```3w``` Moves to the third word

### x

```x``` delete character under your cursor

```X``` this will delete a character before the cursor. Same as ```dh```

```:12,42d x``` This will delete lines 12,42 into register x

### y

y stands for copy, I mean yank. It doesn't do anything by itself. It is very similar to c and d in how it can be used.

```yy``` Copies current line

```"xyy``` Copies current line into register x

```"jY``` Copies current line into register j

```:12,112y``` Copies lines 12 through 112

```mk { motion } y'k``` Mark a spot k, navigate to a new spot and then copies from mark k to the current position of your cursor

```yt"``` Copies from current cursor postion to the next " on the same line.

```yt>``` Copies from current cursor postion to the next > on the same line.

```yT>``` Copies from current cursor postion to the previous > on the same line.

```yf>``` Copies from current cursor postion up to  and including the next > on the same line.

```yF>``` Copies from current cursor postion up to  and including the previous > on the same line.


### z

```z<CR>``` Redraws the screen so that your cursor line is at the top of the window

```z-``` Redraws the screen so that your cursor line is at the bottom of the window

```zz``` Redraws the screen so that your cursor line is at the middle of the window


### SEARCH

```*``` search for word under cursor in current file. Super useful for finding common hex codes in css. And other things.

```/``` Forward search for things.

```/<p>``` Forward search for the next opening paragraph tag

```/\ ``` Forward search for the next space

```/^}``` Forward search for closing bracket of a css class, if the css class is closed at the beginning of a new line i.e

```
.class {
    font-size: 20px;
      line-height: 1.6;
}
```

```?``` Backwards search

MISC

```==``` Format current line of code.

```:12,54=``` Format lines 12,54.

```:56,99>``` Indent lines 56,99.

```>>``` Indent current line.

```12>>``` Indent 12 lines including the line you are on.

```.``` Repeat last change.

```@:``` Repeat last command line



