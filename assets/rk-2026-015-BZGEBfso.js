const e={id:"RK-2026-015",title:"Question Bank: short questions",date:"2026-08-11",tags:["#Questions","#SQs"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
`,content:`
<article>

<h2>Question Bank: Computers in Biology</h2>

<h3>Topic 1. Computer Hardware: CPU, RAM and Storage</h3>
<ol>
    <li>What is the Central Processing Unit (CPU), and what is its primary function in a computer?</li>
    <li>Differentiate between CPU, RAM and storage.</li>
    <li>What is meant by CPU clock speed?</li>
    <li>What are CPU cores?</li>
    <li>What is RAM?</li>
    <li>Why is RAM described as volatile memory?</li>
    <li>What is ECC RAM, and why can it be important in scientific computing?</li>
    <li>Differentiate between HDD and SSD.</li>
    <li>What is an RJ45 port?</li>
    <li>What is the purpose of USB-C/Thunderbolt connectivity?</li>
    <li>Explain why SSD storage is advantageous when repeatedly reading and writing large biological datasets.</li>
    <li>Why might ECC memory be preferable in a scientific workstation used for long computational analyses?</li>
    <li>Explain the role of Ethernet connectivity when accessing institutional HPC facilities.</li>
    <li>A workstation has a powerful CPU but very little RAM. Explain how this configuration could affect large-scale data analysis.</li>
</ol>

<h3>Topic 2. Operating Systems: Windows versus Linux</h3>
<ol>
    <li>Define an operating system.</li>
    <li>Why is an operating system considered an intermediary between hardware and application software?</li>
    <li>What is CPU scheduling?</li>
    <li>What is memory management?</li>
    <li>What is virtual memory?</li>
    <li>What is a filesystem?</li>
    <li>What are device drivers?</li>
    <li>Name any four commonly used operating systems.</li>
    <li>What is meant by an open-source operating system?</li>
    <li>Why is Linux extensively used in scientific and bioinformatics computing?</li>
    <li>Distinguish between GUI-based and command-line-based interaction with an operating system.</li>
    <li>Why might a biologist working primarily on Windows still need familiarity with Linux?</li>
    <li>A bioinformatics package is available only for Linux, whereas the researcher uses Windows. What approaches could enable the researcher to use the program?</li>
</ol>

<h3>Topic 3. Application of Linux and Its Basic Commands — Practical</h3>
<ol>
    <li>Write the Linux command used to display the present working directory.</li>
    <li>Write a command to create a directory named <code>biology_notes</code>.</li>
    <li>How would you move into the <code>biology_notes</code> directory?</li>
    <li>Which command creates an empty file?</li>
    <li>How would you display files using the long-list format?</li>
    <li>Which command can be used to display the contents of a text file?</li>
    <li>How can <code>cat</code> be used to create a text file?</li>
    <li>Differentiate between <code>&gt;</code> and <code>&gt;&gt;</code>.</li>
    <li>Write a command to copy a file called <code>results.txt</code>.</li>
    <li>Write a command to rename <code>old.txt</code> as <code>new.txt</code>.</li>
    <li>Which command permanently removes a file?</li>
    <li>How do you remove a directory recursively?</li>
    <li>Which command displays previously executed terminal commands?</li>
    <li>How would you save Linux command history into a file named <code>hist.txt</code>?</li>
    <li>Name two commands that can be used for viewing long text files.</li>
    <li>Which terminal text editor is by default available in linux?</li>
    <li>Write the sequence of Linux commands required to create a folder named <code>genomics</code>, enter it and create an empty file named <code>samples.txt</code>.</li>
    <li>Create a text file from the terminal, enter three sample names and subsequently append another sample without deleting the original content.</li>
    <li>Write the commands required to make a backup copy of <code>experiment.txt</code> and rename that backup as <code>experiment_archive.txt</code>.</li>
    <li>How would you save all commands used during a laboratory practical into <code>command_history.txt</code>?</li>
    <li>Explain how command history can contribute to reproducibility of a computational practical.</li>
    <li>Construct a short Linux command workflow for creating, editing, backing up and finally viewing a laboratory notes file.</li>
</ol>

<h3>Topic 4. Linux and Its Basic Commands</h3>
<ol>
    <li>Expand <code>pwd</code>.</li>
    <li>What is an absolute path?</li>
    <li>What information is displayed by <code>ls</code>?</li>
    <li>What additional information can <code>ls -l</code> provide?</li>
    <li>What is the purpose of <code>mkdir</code>?</li>
    <li>What is the function of <code>touch</code>?</li>
    <li>Differentiate between <code>cp</code> and <code>mv</code>.</li>
    <li>Why is the <code>-r</code> option needed when copying or deleting directories?</li>
    <li>What is the function of <code>rm</code>?</li>
    <li>Why should <code>rm</code> be used carefully?</li>
    <li>Explain the three major uses of <code>cat</code> discussed in the article.</li>
    <li>Differentiate between <code>less</code> and <code>more</code>.</li>
    <li>What does the <code>history</code> command display?</li>
    <li>What does <code>!15</code> mean when used with shell command history?</li>
    <li>Differentiate between creating a new file using <code>&gt;</code> and appending data using <code>&gt;&gt;</code>.</li>
    <li>Explain why <code>less</code> may be preferable to <code>cat</code> for a very large output file.</li>
    <li>Why is the command line particularly useful when manipulating many biological files?</li>
    <li>Explain the difference between renaming a file and copying a file.</li>
    <li>What could happen if <code>rm -r</code> is executed on an incorrect directory?</li>
    <li>Describe how <code>history</code> can help troubleshoot a computational analysis.</li>
    <li>Write commands to create the following structure:
<pre><code class="language-text">project/
    data/
    results/</code></pre>
    </li>
    <li>Create the file <code>sample1.csv</code> and rename as <code>control.csv</code>.</li>
    <li>Display a large file named <code>alignment.txt</code> one screen at a time.</li>
</ol>

<h3>Topic 5. Data and Data Types</h3>
<p>The article defines data as raw observations that acquire meaning through context and analysis. It distinguishes quantitative and qualitative data, continuous/discrete and nominal/ordinal forms, raw and processed data, and emphasizes metadata as an essential part of scientific interpretation.</p>
<ol>
    <li>Define data.</li>
    <li>How does data differ from information?</li>
    <li>What is structured data?</li>
    <li>What is unstructured data?</li>
    <li>Define quantitative data.</li>
    <li>Define qualitative data.</li>
    <li>Differentiate between continuous and discrete data.</li>
    <li>Differentiate between nominal and ordinal data.</li>
    <li>What is raw data?</li>
    <li>What is processed data?</li>
    <li>Define metadata.</li>
    <li>Classify each of the following as continuous or discrete:
        <ul>
            <li>body temperature</li>
            <li>colony count</li>
            <li>pH</li>
            <li>number of patients</li>
            <li>enzyme concentration</li>
        </ul>
    </li>
    <li>Classify each of the following as nominal or ordinal:
        <ul>
            <li>bacterial species</li>
            <li>treatment group</li>
            <li>disease severity</li>
            <li>sample colour</li>
            <li>toxicity grade</li>
        </ul>
    </li>
    <li>Explain how the same raw observation can acquire different meaning when interpreted by a biologist, clinician or analytical scientist.</li>
    <li>Why is metadata indispensable for the interpretation of scientific data?</li>
    <li>Explain why an instrument reading without information about sample identity, date and instrument conditions may have limited scientific value.</li>
</ol>

<h3>Topic 6. Data Integrity and ALCOA+ Principles</h3>
<ol>
    <li>Define data integrity.</li>
    <li>Why must data integrity be maintained throughout the entire data lifecycle?</li>
    <li>Expand ALCOA.</li>
    <li>What does <strong>Attributable</strong> mean?</li>
    <li>What does <strong>Legible</strong> mean?</li>
    <li>What does <strong>Contemporaneous</strong> mean?</li>
    <li>What does <strong>Original</strong> mean?</li>
    <li>What does <strong>Accurate</strong> mean?</li>
    <li>State the additional principles represented by the “+” in ALCOA+.</li>
    <li>Define an audit trail.</li>
    <li>What is role-based access control?</li>
    <li>What is system validation?</li>
    <li>What do IQ, OQ and PQ represent in a validation context?</li>
    <li>Explain why a result that cannot be attributed to a specific analyst has poor data integrity. Which principle is being violated here?</li>
    <li>Why should observations be documented at the time an activity is performed?</li>
    <li>Why should failed experimental runs normally remain traceable rather than simply being deleted?</li>
    <li>Explain the importance of retaining original raw instrument data.</li>
    <li>How can electronic signatures support data integrity?</li>
    <li>How can unauthorized access compromise scientific reliability?</li>
    <li>Explain how LIMS, ELNs or chromatography data systems can support ALCOA+.</li>
    <li>An analyst records experimental results at the end of the week from memory. Which ALCOA principle is primarily compromised?</li>
    <li>A researcher replaces an original instrument file with an edited spreadsheet. Which data-integrity principles may be affected?</li>
    <li>A shared laboratory computer uses a single login for every researcher. Which ALCOA principle is threatened, and why?</li>
    <li>An analytical record contains all values but cannot be read clearly. Which principle is violated?</li>
    <li>Explain the potential consequences of poor data integrity for scientific conclusions, pharmaceutical quality and patient safety.</li>
</ol>

<h3>Topic 8. Advanced Data Entry and Spreadsheet Management</h3>
<ol>
    <li>Define tidy data.</li>
    <li>What should each row represent in a tidy biological dataset?</li>
    <li>What should each column represent?</li>
    <li>What should each spreadsheet cell contain?</li>
    <li>Why should multiple independent tables generally not be placed inside one analysis sheet?</li>
    <li>Why can merged cells create problems for downstream analysis?</li>
    <li>Why should colour not be used as the only method of encoding experimental categories?</li>
    <li>Differentiate between CSV and TSV.</li>
    <li>Why may TSV be convenient when text annotations contain commas?</li>
    <li>Why should missing observations not simply be entered as zero?</li>
    <li>What is Data Validation?</li>
    <li>How can a drop-down list improve consistency in treatment-group entry?</li>
    <li>Explain the difference between a validation <strong>Stop</strong> message and a <strong>Warning</strong>.</li>
    <li>What is AutoFill?</li>
    <li>What is Flash Fill?</li>
    <li>What is Text-to-Columns?</li>
    <li>What is the purpose of the <code>TRIM</code> function?</li>
    <li>Differentiate <code>UPPER</code>, <code>LOWER</code> and <code>PROPER</code>.</li>
    <li>What is the purpose of the Remove Duplicates feature?</li>
    <li>Why should duplicate records be inspected before deletion?</li>
    <li>Explain why <code>Control</code>, <code>control</code>, <code>CONTROL</code> and <code>Control </code> may be interpreted as different categories by analysis software.</li>
    <li>Why should biological replicates not automatically be removed as duplicates?</li>
    <li>Why should formulas sometimes be protected from accidental editing in laboratory templates?</li>
    <li>Why is maintaining an unchanged raw-data file good scientific practice?</li>
    <li>Design a data-validation rule for a column containing only three permitted treatment groups: <code>Control</code>, <code>Drug_A</code>, and <code>Drug_B</code>.</li>
    <li>A column contains <code> proA</code>, <code>PROA </code>, <code>ProA</code>, and <code>proa</code>. Explain a spreadsheet-based strategy for standardizing these entries.</li>
    <li>A GC instrument exports <code>Peak:450;RT:1.4</code> in one column. Which spreadsheet feature could be used to separate the two measurements?</li>
    <li>A laboratory spreadsheet contains two apparently identical <code>Flask_007</code> records. Describe the checks that should be made before deleting one.</li>
    <li>Explain how you would protect calculated cells while allowing researchers to continue entering raw measurements.</li>
</ol>

<h3>Topic 9. Package and Environment Management in WSL</h3>
<ol>
    <li>What is a software package?</li>
    <li>What is a dependency?</li>
    <li>What is a package manager?</li>
    <li>What is meant by “dependency hell”?</li>
    <li>What is a virtual or isolated software environment?</li>
    <li>Why is installing every research package globally undesirable?</li>
    <li>What is Mamba?</li>
    <li>How is Mamba related conceptually to Conda?</li>
    <li>What is WSL?</li>
    <li>Why is WSL useful to a Windows-based bioinformatics student?</li>
    <li>Write the command used in the article to create an environment called <code>data_analysis_env</code> with Python 3.10.</li>
    <li>Write the command used to activate an environment.</li>
    <li>What is the purpose of deactivating an environment?</li>
    <li>Write a command for installing <code>pandas</code> and <code>scipy</code> using Mamba.</li>
    <li>Which command checks the active Python version?</li>
    <li>Which command lists packages and their versions in a Mamba environment?</li>
    <li>Two bioinformatics programs require incompatible versions of Python. Explain how environments solve the problem.</li>
    <li>Why is recording package versions important for reproducibility?</li>
    <li>How might an analysis work today but fail six months later if software versions are not documented?</li>
    <li>Explain why separate environments may be useful for genomics, molecular docking and statistical-analysis projects.</li>
    <li>A collaborator wants to reproduce your analysis. What environment information should you provide?</li>
</ol>

<h3>Topic 10. Python Basics</h3>
<ol>
    <li>What is Python?</li>
    <li>Why is Python called a general-purpose programming language?</li>
    <li>How does a script-based workflow differ from a GUI-based spreadsheet workflow?</li>
    <li>What is a variable?</li>
    <li>What is a string?</li>
    <li>What is an integer?</li>
    <li>What is a floating-point number?</li>
    <li>What is a Python list?</li>
    <li>What is list indexing?</li>
    <li>From which number does Python begin indexing a list?</li>
    <li>What is a function?</li>
    <li>What does <code>print()</code> do?</li>
    <li>What does <code>len()</code> return?</li>
    <li>What is pandas?</li>
    <li>What is a DataFrame?</li>
</ol>

<p>Consider:</p>
<pre><code class="language-python">organism_name = "Escherichia coli"
colony_count = 250
ph_level = 7.2</code></pre>
<ol start="16">
    <li>Identify the data type represented by each variable.</li>
    <li>Which variable contains a string?</li>
    <li>Which variable contains an integer?</li>
    <li>Which variable contains a floating-point value?</li>
</ol>

<p>Consider:</p>
<pre><code class="language-python">isolates = ["E. coli", "S. aureus", "P. aeruginosa"]</code></pre>
<ol start="20">
    <li>What will <code>isolates[0]</code> return?</li>
    <li>What will <code>len(isolates)</code> return?</li>
    <li>Why would <code>isolates[3]</code> not retrieve the third element?</li>
</ol>

<h4>C. Analytical questions</h4>
<ol start="23">
    <li>Why is Python preferable to manual spreadsheet operations when the same cleaning operation must be performed on many files?</li>
    <li>Under what circumstances is Excel still entirely appropriate?</li>
    <li>At what stage should a biological researcher consider shifting from a spreadsheet to pandas?</li>
    <li>Compare Excel and Python with respect to manual data entry, scalability, repetitive processing and reproducibility.</li>
</ol>

<h3>Topic 11. Data Cleaning and Manipulation in Python Using pandas</h3>
<ol>
    <li>What is a Python script?</li>
    <li>What file extension is normally used for Python scripts?</li>
    <li>What is ipynb?</li>
    <li>Differentiate between a Python script and an interactive ipynb file.</li>
    <li>Define a pandas DataFrame.</li>
    <li>Differentiate CSV and TSV files.</li>
    <li>What does <code>pd.read_csv()</code> do?</li>
    <li>What information is returned by <code>df.shape</code>?</li>
    <li>What does <code>df.head()</code> display?</li>
    <li>How can column names be inspected in pandas?</li>
    <li>Why should missing biological measurements not automatically be replaced by zero?</li>
</ol>

<h3>Topic 12. Python Syntax, IDEs and Jupyter Notebook</h3>
<ol>
    <li>Define Python syntax.</li>
    <li>What is a variable?</li>
    <li>Why are descriptive variable names preferable in scientific programming?</li>
    <li>Is Python case-sensitive?</li>
    <li>Why <code>sample</code> and <code>Sample</code> are not equal in python?</li>
    <li>What symbol begins a Python comment?</li>
    <li>What is the purpose of comments in scientific code?</li>
    <li>What is indentation?</li>
    <li>Why is indentation syntactically important in Python?</li>
    <li>What are parentheses <code>()</code> commonly used for?</li>
    <li>What are square brackets <code>[]</code> commonly used for?</li>
    <li>Why are quotation marks needed around text strings?</li>
    <li>Identify the error:
<pre><code class="language-python">organism = "Escherichia coli</code></pre>
    </li>
    <li>Explain what is wrong with:
<pre><code class="language-python">if temperature == 37:
print("Optimal")</code></pre>
    </li>
    <li>Why will the following usually fail?
<pre><code class="language-python">treatment = Control</code></pre>
    </li>
    <li>Explain the error:
<pre><code class="language-python">sample = "S01"
print(Sample)</code></pre>
    </li>
    <li>Identify the syntax error:
<pre><code class="language-python">samples = ["S01", "S02", "S03"</code></pre>
    </li>
    <li>A student receives <code>NameError</code>. State two possible causes discussed in the article.</li>
    <li>Expand IDE.</li>
    <li>What is an Integrated Development Environment?</li>
    <li>State four features normally provided by an IDE or advanced code editor.</li>
    <li>What is Visual Studio Code?</li>
    <li>Why is VS Code useful for multi-file scientific projects?</li>
    <li>What is syntax highlighting?</li>
    <li>How can organizing raw data, scripts and results into separate folders improve reproducibility?</li>
    <li>What is Jupyter Notebook?</li>
    <li>What is a notebook cell?</li>
    <li>Differentiate between a code cell and a Markdown cell.</li>
    <li>What is the usual file extension of a Jupyter notebook?</li>
    <li>What types of content can a <code>.ipynb</code> file contain?</li>
    <li>Why is Jupyter particularly useful for exploratory biological data analysis?</li>
    <li>What is a Jupyter kernel?</li>
    <li>What information does the kernel retain during an active session?</li>
    <li>What happens to temporary variables when the kernel is restarted?</li>
    <li>What is a Python library?</li>
    <li>Explain each component of:
<pre><code class="language-python">import pandas as pd</code></pre>
    </li>
    <li>Why are important library imports generally placed near the beginning of a notebook?</li>
    <li>What is the role of pandas in biological data analysis?</li>
    <li>What are NumPy and Matplotlib generally used for in a scientific Python environment?</li>
</ol>

<p>Given:</p>
<pre><code class="language-python">od_readings = [0.12, 0.28, 0.55, 0.91]</code></pre>
<ol start="40">
    <li>How many measurements are present?</li>
    <li>What value is returned by <code>od_readings[0]</code>?</li>
    <li>Compare <code>.ipynb</code> and <code>.py</code> files.</li>
    <li>Why is Jupyter preferable during exploratory analysis?</li>
</ol>
</article>
  `};export{e as default};
