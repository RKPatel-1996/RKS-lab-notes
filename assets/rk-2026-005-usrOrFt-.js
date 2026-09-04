const e={id:"RK-2026-005",title:"Application of linux and its basic commands",date:"2026-07-08",tags:["#Linux","#CommandLine","#Terminal"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`

`,content:`

<article>

<h2>Practical exercise</h2>
<h3>Introduction</h3>
<p>wsl2 installation guide is here:
<p><a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">Installation Guide</a></p></p>
<iframe width="600" height="400" src="https://www.youtube.com/embed/JzSZhdptuTs" title="How to Install WSL2 on Windows 11 (Windows Subsystem for Linux) (2026)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<p>The best way to master the Linux terminal is to use it. In this practical, we will build a real "notes" file. The trick? The content you are typing into the file will be the definitions of the exact commands you are actively using to create it.</p>

<p>Open your WSL2 terminal and follow these steps sequentially.</p>


<h3>The Practical Exercise</h3>

<b>Step 1: Check Your Location</b>
<p>Before creating a folder for your notes, check exactly where you are currently located in the system.</p>
<pre>pwd</pre>

<b>Step 2: Create a Study Folder</b>
<p>Let's create a dedicated, organized folder for your Linux notes and move inside it.</p>
<pre>mkdir linux_study_guide</pre>
<pre>cd linux_study_guide</pre>

<b>Step 3: Create the Notes File and a Practice File</b>
<p>We will create an empty file to hold your notes, and a second dummy file just so we have something to practice deleting later.</p>
<pre>touch command_notes.txt</pre>
<pre>touch practice_file.txt</pre>

<b>Step 4: Verify File Creation</b>
<p>List the files in a detailed format to ensure both empty files were successfully created.</p>
<pre>ls -l</pre>

<b>Step 5: Write Your First Notes</b>
<p>Now, let's use the "cat" command to write notes about the commands we just executed. Type the command below, write the lines of text, and press <b>Ctrl + D</b> when you are finished to save and exit.</p>
<pre>cat > command_notes.txt</pre>
<p>Type this exact text:</p>
<p>"pwd: prints the absolute path of the current working directory."</p>
<p>"mkdir: makes a new directory."</p>
<p>"cd: changes the current directory."</p>
<p>"touch: creates a new, empty file."</p>

<b>Step 6: Append More Notes</b>
<p>Let's add the definitions for "ls" and "cat" to the bottom of the file without erasing the valuable notes we just wrote.</p>
<pre>cat >> command_notes.txt</pre>
<p>Type this text, then press <b>Ctrl + D</b>:</p>
<p>"ls: lists files and folders."</p>
<p>"cat: creates, views, and concatenates text files."</p>

<b>Step 7: Read Your Notes</b>
<p>Let's read the study guide you just wrote. Use "more" to see the text printed in the terminal, and then use "less" to open it in the scrolling viewer (remember to press <b>q</b> to exit "less").</p>
<pre>more command_notes.txt</pre>
<pre>less command_notes.txt</pre>

<b>Step 8: Backup Your Notes</b>
<p>Your notes are valuable, so let's practice backing them up. Create a backup folder and copy your notes file into it.</p>
<pre>mkdir backups</pre>
<pre>cp command_notes.txt backups/</pre>

<b>Step 9: Rename Your File</b>
<p>Let's rename your working notes file to something more official using the move command.</p>
<pre>mv command_notes.txt official_linux_guide.txt</pre>

<b>Step 10: Clean Up the Workspace</b>
<p>Remember that "practice_file.txt" we made in step 3? Let's practice permanently removing it.</p>
<pre>rm practice_file.txt</pre>
<p>Now, let's say you want to save space and no longer need the backup folder. Delete the directory and everything inside it recursively.</p>
<pre>rm -r backups</pre>

<b>Step 11: Append the Final Commands</b>
<p>You just learned how to move and remove files! Let's quickly append those definitions to your newly renamed guide.</p>
<pre>cat >> official_linux_guide.txt</pre>
<p>Type this text, then press <b>Ctrl + D</b>:</p>
<p>"cp: copies files or directories."</p>
<p>"mv: moves or renames files."</p>
<p>"rm: permanently removes files or directories."</p>

<b>Step 12: Review Your History</b>
<p>Finally, print out the log of every command you just typed to accomplish this entirely terminal-based workflow.</p>
<pre>history</pre>

<b>step 13: save your history in hist.txt</b>
<p>use the > to redirect stdin to a file:</p>
<pre>history > hist.txt</pre>
<p>use the "less" and "more" commands to view file and edit it using "nano":</p>
<pre>less hist.txt</pre>
<pre>nano hist.txt</pre>
</article>



  `};export{e as default};
