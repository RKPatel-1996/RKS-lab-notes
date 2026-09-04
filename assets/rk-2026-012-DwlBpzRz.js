const e={id:"RK-2026-012",title:"python basics",date:"2026-07-22",tags:["#Basics","#Pyhton","#Programming"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`

`,content:`

<article>

    <h2>1. What is Python and Why Use It?</h2>
    <p>Python is a <b>general-purpose programming language</b>, as it has a wide range of applications in many fields. In a wet lab, you wouldn't manually pipette 10,000 samples if a robotic liquid handler was available. Python is that robotic handler for your data specially when data is large-scale or repetitive and can not be managed effectively with traditional tools like excel, or google sheets.</p>

    <p>Most biologists start their data journey using spreadsheet software like Microsoft Excel. Excel is a <strong>Graphical User Interface (GUI)</strong> tool—you interact with your data by pointing, clicking, dragging, and highlighting. Python, on the other hand, is a <strong>script-based</strong> tool. Instead of clicking on cells, you write clear, English-like text commands to tell the computer exactly how to manipulate the data.</p>

    <p>You do not need to abandon spreadsheets entirely. Python does not replace Excel; rather, it takes over precisely at the point where Excel reaches its limits in speed, scale, and reproducibility.</p>

    <h2>2. Variables: Labeled Test Tubes for Your Data</h2>
    <p>The most foundational concept in Python is the <strong>variable</strong>. Think of a variable exactly like a labeled test tube or an empty box. You put a piece of data inside it, and you stick a label on the outside so the computer knows how to find it later.</p>

    <pre><code>organism_name = "Escherichia coli"
colony_count = 250
ph_level = 7.2</code></pre>

    <p>In the example above, <code>organism_name</code>, <code>colony_count</code>, and <code>ph_level</code> are the labels on our test tubes. Now, whenever we type <code>ph_level</code> later in our script, Python automatically knows we mean the number 7.2. This allows you to write formulas using words rather than trying to remember specific numbers.</p>

Below is a compact revision that adds only the most important good and bad practices for each data type.

<h2>3. Data Types: The Building Blocks</h2>
<p>Just as a lab freezer has different racks for RNA, proteins, and chemical reagents, Python categorizes data into different <strong>types</strong> so it knows how to handle them. Mixing them up causes errors, just like running a protein gel protocol on a DNA sample.</p>

<h3>Strings (Text)</h3>
<p>A <strong>string</strong> stores text. In Python, strings are written inside quotation marks so the computer can distinguish text from variable names or commands.</p>

<pre><code>dna_sequence = "ATGCGTAC"
sample_name = "Control_01"</code></pre>

<p><strong>Good practice:</strong> Use strings for labels, sample names, DNA sequences, treatment names, and other text-based information. Keep quotation marks consistent and use clear variable names.</p>

<p><strong>Common mistakes:</strong> Forgetting quotation marks is one of the most common beginner errors.</p>

<pre><code># Good
organism = "Escherichia coli"

# Bad - Python thinks Escherichia is a variable
organism = Escherichia coli</code></pre>

<p>Another common problem is inconsistent capitalization or accidental spaces. For example, <code>"Control"</code>, <code>"control"</code>, and <code>" Control "</code> are treated as different strings. This becomes important when grouping or filtering biological samples.</p>

<h3>Integers and Floats (Numbers)</h3>
<p>Python distinguishes between whole numbers and decimal numbers.</p>

<ul>
    <li><strong>Integers (<code>int</code>):</strong> Whole numbers used for counting discrete quantities, such as the number of samples, colonies, patients, or experimental days. Example: <code>45</code>.</li>
    <li><strong>Floats (<code>float</code>):</strong> Numbers containing decimal values, commonly used for measurements such as optical density, concentration, pH, temperature, or mass. Example: <code>1.45</code>.</li>
</ul>

<pre><code>sample_count = 45
optical_density = 1.45
temperature = 37.0</code></pre>

<p><strong>Good practice:</strong> Store measurements as numbers when you intend to perform calculations, comparisons, averages, or statistical analysis.</p>

<p><strong>Common mistakes:</strong> Do not place numerical measurements inside quotation marks unless they are intentionally being stored as text.</p>

<pre><code># Good
ph_value = 7.2

# Bad for mathematical analysis
ph_value = "7.2"</code></pre>

<p>The second value looks like a number to a human, but Python treats it as text. This can cause errors when calculating means, performing comparisons, or creating statistical summaries.</p>

<h3>Lists (Collections of Data)</h3>
<p>A <strong>list</strong> stores multiple values inside a single variable. Lists are enclosed in square brackets, and individual elements are separated by commas.</p>

<pre><code>treatment_groups = ["Control", "Drug_A", "Drug_B"]

temperature_readings = [37.0, 37.5, 38.2, 39.0]</code></pre>

<p><strong>Good practice:</strong> Use lists when several related values need to be stored together, such as replicate measurements, sample identifiers, treatment groups, gene names, or experimental time points.</p>

<p><strong>Common mistakes:</strong> Remember to separate individual elements with commas.</p>

<pre><code># Good
samples = ["S1", "S2", "S3"]

# Bad - commas are missing
samples = ["S1" "S2" "S3"]</code></pre>

<p>Another common mistake is using the wrong position when retrieving an item. Python starts counting list positions from <code>0</code>, not <code>1</code>.</p>

<pre><code>samples = ["S1", "S2", "S3"]

print(samples[0])
# Output: S1

print(samples[1])
# Output: S2</code></pre>

<p>This zero-based indexing is important when selecting samples, genes, measurements, or other ordered data later in a Python analysis.</p>



    <h2>4. Functions: Standard Operating Procedures (SOPs)</h2>
    <p>A <strong>function</strong> is a pre-packaged set of instructions that does a specific job—much like a Standard Operating Procedure (SOP) in a lab. You provide the input (the raw material), the function does the work behind the scenes, and then it hands you the output.</p>

    <p>Python comes with many built-in functions. For example, the <code>len()</code> function calculates the length of whatever you put inside its parentheses.</p>

    <pre><code>sequence = "ATGC"
sequence_length = len(sequence)
print(sequence_length)</code></pre>

    <p>In this script, the <code>len()</code> function counts the characters in the DNA sequence and outputs the number 4. The <code>print()</code> function then displays that number on your screen.</p>



    <h2>5. How Python Connects to Data Analysis: Pandas vs. Excel</h2>
    <p>While assigning single variables is foundational, in a real bioinformatics workflow, you will be assigning massive datasets containing millions of rows to a single variable. This is done using an incredibly powerful Python add-on library called <strong>Pandas</strong>.</p>

    <h3>Pandas: The "Excel of Python"</h3>
    <p>If you understand how Excel works, you already understand the core logic of Pandas. In Excel, you have worksheets with rows and columns. In Pandas, that exact same row-and-column structure is called a <strong>DataFrame</strong>. The difference is solely in how you interact with it: Excel uses a mouse; Pandas uses code.</p>

    <pre><code>import pandas as pd

# This is the Python equivalent of double-clicking a CSV file to open it
experiment_data = pd.read_csv("raw_spectrophotometer_readings.csv")

# This is the equivalent of using the "Remove Duplicates" button
clean_data = experiment_data.drop_duplicates()</code></pre>

    <h3>When Excel is Perfectly Fine</h3>
    <p>You do not need to write a Python script for everything. Excel remains the superior tool for specific tasks:</p>
    <ul>
        <li><strong>Data Entry:</strong> Excel is excellent for manually typing in daily observations, like colony morphologies or simple pH readings at the bench.</li>
        <li><strong>Small Datasets:</strong> If your dataset is only a few hundred rows, Excel will load instantly and let you scroll through it visually.</li>
        <li><strong>Quick Formatting and Sharing:</strong> If you need to highlight a few specific cells for a quick presentation to your Principal Investigator, Excel is the fastest way to get it done.</li>
    </ul>

    <h3>When You MUST Switch to Python and Pandas</h3>
    <p>Excel breaks down when biology scales up. You should transition your workflow to Python when you encounter the following scenarios:</p>
    <ul>
        <li><strong>Breaking the Size Limit:</strong> Excel has a hard limit of 1,048,576 rows. If you open a transcriptomics dataset (RNA-Seq) or molecular dynamics simulation output with 2 million rows, Excel will simply delete half your data without warning. Python can handle tens of millions of rows effortlessly on a standard laptop.</li>
        <li><strong>Repetitive Cleaning:</strong> If your GC instrument spits out 50 separate CSV files that all need the exact same whitespace removal and Text-to-Columns splitting, doing it manually in Excel takes hours. In Python, you write a "For Loop" once, and it cleans all 50 files in 3 seconds.</li>
        <li><strong>Merging Massive Files:</strong> Trying to run a <code>VLOOKUP</code> formula in Excel across 100,000 rows will freeze your computer. Pandas can merge and cross-reference two massive biological databases instantly.</li>
        <li><strong>Strict Reproducibility:</strong> When you point and click in Excel, there is no record of the steps you took to get from raw data to your final graph. In Python, your script <em>is</em> your audit trail. Anyone can read your code and see exactly how you handled missing values and outliers, which is increasingly required by top-tier scientific journals.</li>
    </ul>

</article>

  `};export{e as default};
