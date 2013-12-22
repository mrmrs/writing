---
title: "How to Learn Vim"
layout: post
---

Learning vim can be a bit daunting at first. I know that I spun my wheels on efficiently learning vim for quite some time. I was TRYING hard to learn new things but I didn't seem to be leveling up in the ways I wanted to.

This was mainly due to one fatal flaw.

I kept trying to use google. Now, google dot com has served me so well in regards to learning many things about my cpu machine. But in the case of learning about vim, it slowed me down a lot. I kept asking bad questions and not really knowing what I was looking for. Then one day I was bored and just typed :help in vim. And I started reading all of the words on the page. Amazing concept I know, but as a designer it's pretty easy for my eyes to gloss over when I see docs and then I don't read anything at all. But this time I gave it a shot.

What I found was an amazing set of instructions on how to use vim. The help docs are well crafted and not nearly as dry as you might expect. Granted it has its moments as many features in vim I have never or will never need. But diving into random sections of :help can feel like plugging a game genie into your brain. It only takes a minute to discover three new cheat codes that you can start to practice and absorb into muscle memory.

If you are on a mobile phone or don't want to brave navigating around the documentation in vim just yet check out these links below. They are a great starting point for mastering the fundamentals of efficient text editing. I'll wait while you skim through these. Kidding, bookmark them. I strongly suggest reading these. It's the fastest way to get exposed to some of the power and flexibility vim has to offer.

You'll notice this list starts at chapter 2. Intentionally so. I've also left out a couple of chapters that probably aren't THAT pertinent to front end development / designing faster.

#### Vim Help Docs

[The first steps in Vim](http://vimdoc.sourceforge.net/htmldoc/usr_02.html "The first steps in Vim")

[Moving around](http://vimdoc.sourceforge.net/htmldoc/usr_03.html "Moving around")

[Making small changes](http://vimdoc.sourceforge.net/htmldoc/usr_04.html "Making small changes")

[Set your settings](http://vimdoc.sourceforge.net/htmldoc/usr_05.html "Set your settings")

[Editing more than one file](http://vimdoc.sourceforge.net/htmldoc/usr_07.html "Editing more than one file")

[Splitting windows](http://vimdoc.sourceforge.net/htmldoc/usr_08.html "Splitting windows")

[Using the GUI](http://vimdoc.sourceforge.net/htmldoc/usr_09.html "Using the GUI")

[Making big changes](http://vimdoc.sourceforge.net/htmldoc/usr_10.html "Making big changes")

[Clever tricks](http://vimdoc.sourceforge.net/htmldoc/usr_12.html "Clever tricks")


## Editing Effectively

[Typing command-line commands quickly](http://vimdoc.sourceforge.net/htmldoc/usr_20.html  "Typing command-line commands quickly")

[Go away and come back](http://vimdoc.sourceforge.net/htmldoc/usr_21.html  "Go away and come back")

[Finding the file to edit](http://vimdoc.sourceforge.net/htmldoc/usr_22.html  "Finding the file to edit")

[Editing other files](http://vimdoc.sourceforge.net/htmldoc/usr_23.html  "Editing other files")

[Inserting quickly](http://vimdoc.sourceforge.net/htmldoc/usr_24.html  "Inserting quickly")

[Editing formatted text](http://vimdoc.sourceforge.net/htmldoc/usr_25.html  "Editing formatted text")

[Repeating](http://vimdoc.sourceforge.net/htmldoc/usr_26.html  "Repeating")

[Search commands and patterns](http://vimdoc.sourceforge.net/htmldoc/usr_27.html  "Search commands and patterns")

[Folding](http://vimdoc.sourceforge.net/htmldoc/usr_28.html  "Folding")

[Moving through programs](http://vimdoc.sourceforge.net/htmldoc/usr_29.html  "Moving through programs")

[Editing programs](http://vimdoc.sourceforge.net/htmldoc/usr_30.html  "Editing programs")

[Exploiting the GUI](http://vimdoc.sourceforge.net/htmldoc/usr_31.html  "Exploiting the GUI")

[The undo tree](http://vimdoc.sourceforge.net/htmldoc/usr_32.html  "The undo tree")


If you read the help docs in their entirety (more fun than it sounds) And you read [Drew Neil's Practical Vim](http://pragprog.com/book/dnvim/practical-vim "Practical Vim - Drew Neil")… you will most likely be able to melt peoples brains when they watch you manipulate text in no time.

The best way to read the docs is to actually navigate around them inside vim. You can get to the first article I link to by opening your terminal and typing vim CR (CR means carriage return, most commonly referred to as return or enter)
Once vim has loaded type :help
You should now be looking at the help docs. Go ahead and read the intro help docs. But if you want to skip ahead to the second chapter you can search for the file name by typing ```/usr_02<CR>gf```
That will jump to the string we just searched for and open the file under our cursor with gf. Magic.

I'd recommend navigating help inside vim as you'll be starting to practice the muscle navigation of moving around and reading text.

## Using help even more

Besides just reading the main help sections I linked to above, you can also look up anything you want by passing it as an argument to help ```:h or :help```

```:h a``` Will show you help docs on pressing a in normal mode

```:h :a``` Will show docs on the ex command a

```:h CTRL-a``` Will show help docs on pressing CTRL-a in normal mode

```:h i_CTRL-a``` Will show help docs for pressing CTRL-a while in insert mode, hence the ```i_```

This also works for visual mode like ```:h v_CTRL-a```

When I was beginning to learn the initial keybindings I would often quiz myself by going through the alphabet and seeing if I could define what each key would do both at lower and uppercase. If I couldn't recall it I would dive into help with :h g or something similar. Eventually after making it through the alphabet, I picked up what ```CTRL-[a-z]``` did while I was in normal mode. It was an easy way for me to continually test myself on what I had learned previously. If it took three days to get past the letter a, so be it.

## Mental Modes

I found early on that learning vim is not just memorizing a bunch of key combos. It's also learning to think with intention. You must think about what you want to do and then do it. Thinking this way will bubble up common actions to your brain and will be a constant reminder to automate common workflows. I constantly try to ask myself what I'm doing over and over again that I shouldn't be. It is a different mode to work in but I have found that it has helped me become more efficient with how I interact with my computer whether or not I am using vim.

Vim is also a constant battle against the [candle problem](http://en.wikipedia.org/wiki/Candle_problem "Candle Problem") which challenges our ability to creatively use the tools we already know about. For instance I knew about :r for a few years. I also knew about ! and ls. But it was a long time before I thought to actually combine them all together and what the outcome would be.

Vim is full of little lego blocks that you'll be learning how to creatively combine for some time to come. I have found that it has made me a more creative problem solver overall.

## Morning Routines

I suggest taking 5-10 minutes in the morning, even if you are a seasoned vim user, to try and learn one new thing.

## Learn with others

When I'm showing someone something I know how to do in vim generally two things happen. First they ask me a question I don't know the answer to. This is great! Now I have something I know I need to learn. Second, they generally show me something cool they know. Now everyone knows more stuff and text gets edited less inefficiently.

## Summary

Vim help docs are amazing and should be your best friend. Don't be intimidated by the word "documentation".
Never stop learning! You'll get exponentially faster and the world will have better products for it.


# Additional Resources

Watch all of these screencasts. They are incredibly informative and most of them are well under 5 minutes.
[Vimcasts.org](http://vimcasts.org/episodes/archive "Vimcasts")

[Learn vim progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/ "Learn vim progressively")

[The vim learning curve is a myth](http://robots.thoughtbot.com/the-vim-learning-curve-is-a-myth "The vim learning curve is a myth")

[Vim Adventures, learn vim commands through playing a game](http://vim-adventures.com "Vim Adventures")

[A collection of vim resources](http://www.openvim.com "Open Vim")

[Learn vimscript the hardway](http://learnvimscriptthehardway.stevelosh.com "Learn vimscript the hard way")
