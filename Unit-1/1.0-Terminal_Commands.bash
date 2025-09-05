# This lesson is here to help you navigate the terminal
# The terminal is how we talk directly to the computer without the help of User Inferfaces
# If you have taken the course on Linux, this will just be a refresher

# We need to use the terminal to navigate files on our computer
# This will be necessary to execute Javascript files, which don't work the same as Python files
# I'll quickly go over some simple commands

# First, open up a terminal in down below. If you don't see one, navigate to View at the top,
# then select terminal near the bottom of the list

# Looking at the terminal, you should see something that looks like this:
# yourname@DESKTOP-GHSDFJ02: /mnt/c/SomeFolders/JavaScript-1/
# The items inbetween the /'s are folders on your computer, ending in the folder you're in now

ls
# This command lists out all files in the folder you are currently in.
# Try it in your terminal now!
# You should see a list of units or assignments from this course

cd Unit-1/
# The cd command stands of Change Directory (also known as a folder)
# Use this command to move into a new folder. This is the same as clicking a folder in File Explorer
# Give this a try!
# You should notice that the folder path in your terminal updated to the new folder

cd ..
# This is how you go back a folder (Directory).
#Try going back and forth into different directories in this course

# When you are using cd, you can start typing something, then click TAB
# This will auto-complete the rest of the file if it's unique
# You can double tap TAB to list all items that start with what you've typed

# During this course, we will be executing our JavaScript files from the terminal
# To do this, you will be using nodejs, which we downloaded earlier

node 1.1-Syntax.js
# This is how you test your JavaScript code. Save the file, then write: 
# node YourFile
# We will use this in Lesson 1.1


# Helpful Shortcuts:

# ctrl + l: Cleans terminal, removing old inputs
# ctrl + c: Cancels current task
# ctrl + shift + c: Copies highlighted text in terminal
# ctrl + shift + v: Paste in terminal