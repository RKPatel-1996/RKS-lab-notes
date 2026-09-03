import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-006",
  title: "Linux and its basic commands",
  date: "2026-07-08",
  tags: ["#Linux", "#CommandLine", "#Terminal"],
  type: "report",
  template: "standard",
  readTime: "30 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `

`,
  content: `

<article>
<h2>pwd</h2>
<h3>Introduction</h3>
<p>The "pwd" command stands for "print working directory". It outputs the absolute, full path of the current directory you are currently in. This is highly useful when navigating complex file systems so you always know exactly where you are.</p>

<h3>How to use</h3>
<p>Simply type the command in your terminal and press Enter:</p>
<pre>pwd</pre>
<p>Your terminal will return a path that looks something like <code>/home/username/basic_linux_commands</code>.</p>

<hr>

<h2>ls</h2>
<h3>Introduction</h3>
<p>The "ls" command is used to list the files and directories within your current working directory. It is the best way to see the contents of a folder.</p>

<h3>How to use</h3>
<p>To list the standard files and folders in your current location:</p>
<pre>ls</pre>
<p>To see a more detailed list that includes file permissions, ownership, size, and modification date, use the <code>-l</code> (long format) flag:</p>
<pre>ls -l</pre>

<hr>

<h2>mkdir</h2>
<h3>Introduction</h3>
<p>The "mkdir" (make directory) command allows you to create new folders in your Linux file system. You used this earlier to create your <code>basic_linux_commands</code> folder.</p>

<h3>How to use</h3>
<p>Provide the name of the directory you want to create directly after the command:</p>
<pre>mkdir my_new_folder</pre>

<hr>

<h2>touch</h2>
<h3>Introduction</h3>
<p>While originally designed to update the timestamp (access and modification times) of a file, the "touch" command is most commonly used by beginners to quickly create a brand new, empty file without opening a text editor.</p>

<h3>How to use</h3>
<p>To create a blank text file:</p>
<pre>touch empty_file.txt</pre>

<hr>

<h2>cp</h2>
<h3>Introduction</h3>
<p>The "cp" command stands for copy. It is used to copy files or entire directories from one location to another, leaving the original file intact.</p>

<h3>How to use</h3>
<p>To copy a single file, type the source file name followed by the new destination/name:</p>
<pre>cp empty_file.txt backup_file.txt</pre>
<p>To copy a directory and all of its contents, you must add the <code>-r</code> (recursive) flag:</p>
<pre>cp -r my_new_folder backup_folder</pre>

<hr>

<h2>mv</h2>
<h3>Introduction</h3>
<p>The "mv" (move) command serves two distinct purposes: moving a file or directory from one location to another, and renaming files or directories.</p>

<h3>How to use</h3>
<p>To rename a file, simply move it to the same location with a new name:</p>
<pre>mv backup_file.txt renamed_file.txt</pre>
<p>To move a file into a specific directory:</p>
<pre>mv renamed_file.txt backup_folder/</pre>

<hr>

<h2>rm</h2>
<h3>Introduction</h3>
<p>The "rm" (remove) command is used to permanently delete files and directories. <strong>Warning:</strong> Linux does not have a "Recycle Bin" by default on the command line; once you remove a file using <code>rm</code>, it is gone permanently.</p>

<h3>How to use</h3>
<p>To delete a single file:</p>
<pre>rm empty_file.txt</pre>
<p>To delete a directory and all of the files inside of it, you must use the recursive flag (<code>-r</code>):</p>
<pre>rm -r backup_folder</pre>

<h2>Cat</h2>
<h3>Introduction</h3>
<p>The "cat" command (short for concatenate) is one of the most frequently used commands in Linux and Unix-like operating systems. While its original purpose was to link multiple files together, it is most commonly used today to quickly read, create, and append text files directly from the command line.</p>

<p>Since you are using WSL2 (Windows Subsystem for Linux), you have a full Linux environment running right inside Windows. The "cat" command works exactly the same here as it would on a native Linux machine.</p>

<h3>How to use</h3>
<b>Step 1: Open Your WSL2 Terminal</b>
<p>Launch your WSL2 distribution by opening the Ubuntu app or opening Windows Terminal.</p>

<p>To open linux in windows terminal type:</p>
<pre>bash</pre>


<b>Step 2: Create a New Folder</b>

<p> Type the following command and press Enter:</p>

<p>You can use "mkdir" to create a folder and store your practical attempt there.</p>
<pre>mkdir basic_linux_commands</pre>

<p> enter the folder.</p>
<pre>cd basic_linux_commands</pre>

<b>Step 3: Create a New File</b>

<p>To create a new text file, you can use the "cat" command followed by the ">" operator and the desired filename. For example:</p>
<pre>cat > Navigation_commands.txt</pre>

<p>The cursor will drop to next line where you can type your text. Here, we will type one of the previously learned command and it's use case.</p>
<p>"cd: to navigate between directories"</p>

<b>Step 4: verify if the file was created</b>
<p>cat command can let you view the file. Such use does not require ">" operator otherwise the command is same as previous one.</p>
<p>To view the contents of the file you just created, type:</p>
<pre>cat Navigation_commands.txt</pre>
<p>If file is created the text written inside will be printed on the terminal.</p>

<b>step 5: Append to the File</b>
<p></p>To add more content to the existing file, you can use the "cat" command with the ">>" operator. For example:</p>
<pre>cat >> Navigation_commands.txt</pre>
<p>Now you can add more commands and their use cases. For example, let's add the "ls" command:</p>
<p>"ls: to list files and directories"</p>

<b>Step 6: Verify the Changes</b>
<p>To view the updated contents of the file, type:</p>
<pre>cat Navigation_commands.txt</pre>
<p>You should see both the "cd" and "ls" commands along with their descriptions.</p>

<h2>less</h2>
<h3>Introduction</h3>
<p>The "less" command is a terminal pager program used to view the contents of a text file one screen at a time. It is highly efficient for reading large files because it does not need to load the entire file into memory before displaying it. Unlike reading a file with "cat", "less" allows you to scroll both forwards and backwards through the document.</p>

<h3>How to use</h3>
<p>To open a file with less, type the command followed by the file name:</p>
<pre>less Navigation_commands.txt</pre>
<p>Once the file is open, you can use the up and down arrow keys to scroll through the text line by line, or the Spacebar to move down a full page. When you are finished reading, press the <code>q</code> key to quit and return to your standard terminal prompt.</p>

<hr>

<h2>more</h2>
<h3>Introduction</h3>
<p>The "more" command is an older, simpler pager utility that is very similar to "less". It also allows you to view text files one page at a time so that the text doesn't rush past your screen. However, it is more limited because it primarily only allows you to scroll forward through the document.</p>

<h3>How to use</h3>
<p>To view a file using more, type:</p>
<pre>more Navigation_commands.txt</pre>
<p>Press the Spacebar to jump forward to the next page of text, or the Enter key to move forward one line at a time. Press the <code>q</code> key to quit the viewer.</p>

<hr>

<h2>history</h2>
<h3>Introduction</h3>
<p>The "history" command is used to display the list of commands you have previously executed in your terminal. It is an incredibly helpful tool when you need to remember a complex command you typed earlier, figure out what actions you took in the past, or quickly rerun previous instructions.</p>

<h3>How to use</h3>
<p>To view your command history, simply type:</p>
<pre>history</pre>
<p>Your terminal will output a numbered list of your past commands. To quickly rerun a specific command from that list without retyping it, you can use an exclamation mark (<code>!</code>) immediately followed by the command's number. For example, to run the 15th command in your history, type:</p>
<pre>!15</pre>

</article>



  `,
};

export default article;
