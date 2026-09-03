import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-013",
  title: "Data Cleaning & Manipulation in Python",
  date: "2026-07-29",
  tags: ["#Data", "#Python", "#manipulation", "#pandas"],
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
A beginner-friendly introduction to cleaning, validating, and restructuring biological datasets with pandas, followed by a guided practical exercise containing controlled data-quality problems.
`,
  content: `
<article>

<h2>1. Setting Up Your Python Lab: Scripts and IPython</h2>
<p>Before cleaning experimental data, it helps to understand the two places where beginners commonly work with Python: a <strong>script</strong> and an <strong>interactive console</strong>. A script is useful when you want to preserve a complete analysis workflow, while an interactive console is useful when you want to test one command at a time and immediately inspect the result.</p>

<h3>1.1 What is a Python Script?</h3>
<p>A Python script is a plain-text file ending in <code>.py</code>, for example <code>clean_data.py</code>. Instead of clicking buttons to sort, filter, or transform a spreadsheet, you write the instructions as Python code. Python reads the script from top to bottom and performs the commands in sequence.</p>

<p><strong>Why this matters in biological research:</strong> a script becomes a reproducible record of how raw measurements were transformed into an analysis-ready dataset. If the same cleaning procedure must later be applied to another sequencing run, fermentation experiment, plate-reader export, or replicate batch, the script can be reused instead of repeating manual spreadsheet operations.</p>

<h3>1.2 Introduction to IPython</h3>
<p>When learning data analysis, it is often easier to execute one command at a time and inspect the result before continuing. <strong>IPython</strong> is an interactive Python shell designed for this type of exploratory work. You enter a Python command, press Enter, and immediately see the output.</p>

<p><strong>Install pandas and IPython:</strong></p>
<pre><code># Run this command in Terminal, PowerShell, or Command Prompt
python -m pip install pandas ipython

# Start an interactive IPython session
ipython
</code></pre>

<p>If your operating system uses <code>python3</code> instead of <code>python</code>, use <code>python3 -m pip install pandas ipython</code>. After IPython starts, you will see a prompt such as <code>In [1]:</code>. This means Python is ready to receive commands.</p>

<p><strong>Where IPython is useful:</strong> use it while learning a new pandas function, checking whether a column loaded correctly, testing a filter, or examining a suspicious row. Once the commands work as expected, they can be copied into a <code>.py</code> script to create a permanent workflow.</p>

<hr />

<h2>2. "Tidy Data" &amp; Best Practices in Python</h2>
<p>How experimental data is arranged strongly affects how easily it can be analyzed. A useful starting rule is the idea of <strong>tidy data</strong>: each row represents one observation, each column represents one variable, and each cell contains one value.</p>

<p>Python's <strong>pandas</strong> library stores tabular data in an object called a <strong>DataFrame</strong>. A DataFrame can be thought of as a programmable table. Unlike a spreadsheet, the operations performed on it can be recorded exactly as code.</p>

<h3>2.1 Observations in Rows, Variables in Columns</h3>
<p>In a microbiology experiment, one row might represent one flask, colony, isolate, well, or time point. Columns then describe properties of that observation, such as treatment group, pH, optical density, gene marker, metabolite concentration, or instrument status.</p>

<table class="science-table" data-id="table-1">
    <caption>Table 1: Example of a tidy data structure in a laboratory experiment.</caption>
    <thead>
        <tr>
            <th>Sample_ID</th>
            <th>Treatment_Group</th>
            <th>pH_Level</th>
            <th>Concentration_mM</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Flask_001</td>
            <td>Control</td>
            <td>7.2</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>Flask_002</td>
            <td>Adapted_Strain</td>
            <td>7.4</td>
            <td>15.5</td>
        </tr>
    </tbody>
</table>

<p><strong>Where this structure is useful:</strong> tidy data makes it much easier to calculate group means, compare treatments, generate plots, fit statistical models, merge sample metadata with omics results, or select subsets of samples using reproducible rules.</p>

<h3>2.2 Reading CSV and TSV Files</h3>
<p>Many laboratory programs export data as <strong>CSV</strong> (Comma-Separated Values) or <strong>TSV</strong> (Tab-Separated Values). These formats are useful because they are plain text and can be read by many analysis programs.</p>

<pre><code># Import pandas and give it the common short name "pd"
import pandas as pd

# Read a TSV file. The separator is a tab character.
df = pd.read_csv("experiment_data.tsv", sep="&#92;t")

# Display the first five rows
print(df.head())

# Display the number of rows and columns
print(df.shape)

# Display the column names
print(df.columns.tolist())
</code></pre>

<p>The variable <code>df</code> now refers to the DataFrame stored in memory. The original file has not been changed simply by reading it.</p>

<p><strong>Important beginner note:</strong> do not use <code>sep=r"&#92;s+"</code> for the practice dataset in this article. That separator treats any run of whitespace as a column boundary. Biological names such as <code>Serratia marcescens</code> contain a space and would therefore be split incorrectly. Use the separator that actually belongs to the file: a tab for TSV and a comma for CSV.</p>

<p><strong>Where file inspection is useful:</strong> commands such as <code>head()</code>, <code>shape</code>, and <code>columns</code> are simple quality-control checks. They help confirm that the file was parsed into the number of columns you expected before any cleaning begins.</p>

<hr />

<h2>3. The Detective Work: Locating and Correcting Mistakes</h2>
<p>Real laboratory data often contains missing values, typing errors, inconsistent labels, duplicate records, or rows that have shifted into the wrong columns. A safe cleaning workflow follows the same general pattern: <strong>detect the problem, inspect the affected rows, correct only what can be justified, and verify the result</strong>.</p>

<h3>3.1 Missing or Empty Data (NaNs)</h3>
<p>A blank measurement may occur because an instrument failed, a sample was lost, a measurement was below detection, or a value was never recorded. pandas commonly represents missing values as <code>NaN</code>.</p>

<pre><code># Count missing values in every column
print(df.isna().sum())

# Display every row containing at least one missing value
missing_rows = df[df.isna().any(axis=1)]
print(missing_rows)
</code></pre>

<p>The expression <code>df.isna()</code> creates a table of <code>True</code> and <code>False</code> values. <code>True</code> means that a value is missing. Adding <code>.sum()</code> counts how many <code>True</code> values occur in each column.</p>

<p><strong>How missing data should be corrected:</strong> there is no universal command that is scientifically correct for every dataset. If a measurement is genuinely unknown, keeping it as <code>NaN</code> may be more defensible than inventing a replacement. A row should only be removed or a value imputed when the experimental design or analysis plan justifies that decision.</p>

<pre><code># Example: remove samples only when pH is required for the planned analysis
df_without_missing_ph = df.dropna(subset=["pH_Reading"])

# Example: replace missing descriptive text with a clear label
df["Comment"] = df["Comment"].fillna("Not_recorded")
</code></pre>

<p><strong>Where this is useful:</strong> missing-value checks are essential before calculating means, running statistical tests, fitting machine-learning models, or comparing experimental groups because many methods treat missing values differently.</p>

<h3>3.2 Shifted or Misaligned Data</h3>
<p>A shifted row occurs when one expected field is absent and the remaining values appear under the wrong headers. For example, if a row is missing <code>Sample_ID</code>, the organism name may appear in the <code>Sample_ID</code> column, and the word <code>Passed</code> may eventually appear in a column that should contain a numeric pH value.</p>

<p>A useful way to detect this problem is to ask whether each column contains the <strong>type of information</strong> expected for that variable. A pH column should normally be numeric. If text appears in it, the row deserves inspection.</p>

<pre><code># Try to interpret pH_Reading as numbers.
# Any non-numeric text is converted to NaN in this temporary Series.
numeric_ph = pd.to_numeric(df["pH_Reading"], errors="coerce")

# A shifted row is suspected when conversion fails,
# but the original cell was not actually empty.
shifted_mask = numeric_ph.isna() &amp; df["pH_Reading"].notna()
shifted_rows = df.loc[shifted_mask]

print(shifted_rows)
</code></pre>

<p><code>errors="coerce"</code> is useful for diagnosis because pandas does not stop with an error when it encounters text. Instead, values that cannot be converted become temporary <code>NaN</code> values. The second condition, <code>df["pH_Reading"].notna()</code>, prevents a genuinely missing pH measurement from being mistaken for a shifted row.</p>

<p><strong>Do not automatically invent missing identifiers.</strong> In real research data, a missing sample ID should be recovered from the laboratory notebook, instrument run sheet, barcode record, or another authoritative source. The practical exercise later in this article provides the correct IDs explicitly so that students can safely practice the mechanics of repairing a shift.</p>

<p><strong>Where this is useful:</strong> type-based checks can identify columns displaced during copy-and-paste operations, malformed instrument exports, or manual data entry errors. The same logic can be applied to dates, integer counts, concentrations, categorical labels, and genomic coordinates.</p>

<h3>3.3 Out-of-Range Biological Values</h3>
<p>A value can be numerically valid to Python but still be unsuitable for the experiment. For example, a recorded pH of <code>15.5</code> is outside the accepted range defined for the biological culture dataset used in this exercise.</p>

<pre><code># Convert the column to numbers after structural problems have been repaired
df["pH_Reading"] = pd.to_numeric(df["pH_Reading"], errors="coerce")

# For this exercise, flag non-missing pH values outside 0 to 14
invalid_ph = df[
    df["pH_Reading"].notna()
    &amp; ~df["pH_Reading"].between(0, 14)
]

print(invalid_ph)
</code></pre>

<p>The <code>between(0, 14)</code> method returns <code>True</code> for values inside the accepted interval. The symbol <code>~</code> reverses the result, allowing us to locate values outside that interval.</p>

<p><strong>Scientific caution:</strong> validation boundaries should come from the experimental protocol, instrument specification, or biological expectations. In many real culture experiments, the acceptable pH interval would be much narrower than 0–14. The purpose of this exercise is to demonstrate the logic of range checking.</p>

<p><strong>Where this is useful:</strong> the same method can flag impossible cell counts, negative concentrations, optical-density values outside an instrument range, temperatures outside an incubation protocol, or sequence lengths inconsistent with an assay design.</p>

<h3>3.4 Duplicate Entries</h3>
<p>Duplicate records can appear when a row is copied twice, a file is concatenated incorrectly, or the same instrument result is imported more than once. However, repeated biological measurements are not automatically mistakes. Technical and biological replicates may legitimately resemble one another.</p>

<pre><code># Show every row that shares the same Sample_ID with another row
possible_duplicates = df[
    df.duplicated(subset=["Sample_ID"], keep=False)
]

print(possible_duplicates)
</code></pre>

<p><code>keep=False</code> displays every member of a duplicate group so that the records can be compared before anything is deleted.</p>

<pre><code># Use this only after confirming that the repeated Sample_ID is accidental
df = df.drop_duplicates(subset=["Sample_ID"], keep="first").copy()
</code></pre>

<p><strong>Where this is useful:</strong> duplicate detection is particularly important after combining sample sheets, merging sequencing metadata, joining plate-reader runs, or appending results from repeated instrument exports.</p>

<h3>3.5 Inconsistent Text Formatting</h3>
<p>Text values can differ because of capitalization or accidental spaces. For example, <code>proA</code>, <code>PROA</code>, <code>ProA</code>, and <code> proa </code> look similar to a person but are different strings to a computer.</p>

<pre><code># Inspect the current labels and how often each one appears
print(df["Genetic_Marker"].value_counts(dropna=False))

# Remove leading/trailing spaces and convert the labels to uppercase
df["Genetic_Marker"] = (
    df["Genetic_Marker"]
    .astype("string")
    .str.strip()
    .str.upper()
)

# Confirm the standardized values
print(df["Genetic_Marker"].unique())
</code></pre>

<p>The chained operations are applied from top to bottom. <code>.str.strip()</code> removes unwanted spaces at the beginning and end of a string, while <code>.str.upper()</code> converts letters to uppercase.</p>

<p><strong>Where this is useful:</strong> standardization prevents the same biological category from being split into several groups during counting, plotting, statistical testing, or merging. It is frequently useful for gene symbols, treatment labels, species codes, sample classes, and phenotype names.</p>

<hr />

<h2>4. Parsing Complex Instrument Outputs</h2>
<p>Laboratory instruments sometimes export several measurements inside one text field. For example, <code>Peak:450;RT:1.4</code> contains a peak value and a retention time in the same cell. These values are difficult to analyze numerically until they are separated.</p>

<pre><code># Split each string once at the semicolon
# expand=True returns the pieces as separate columns
gc_split = df["GC_Raw_Data"].str.split(";", n=1, expand=True)

# Remove the text labels and safely convert the remaining text to numbers
df["GC_Peak"] = pd.to_numeric(
    gc_split[0].str.replace("Peak:", "", regex=False),
    errors="coerce"
)

df["GC_RT"] = pd.to_numeric(
    gc_split[1].str.replace("RT:", "", regex=False),
    errors="coerce"
)

# Inspect the raw and parsed values together before deleting anything
print(df[["GC_Raw_Data", "GC_Peak", "GC_RT"]].head())
</code></pre>

<p><code>str.split()</code> separates the original text, <code>str.replace()</code> removes labels that are not part of the numeric measurement, and <code>pd.to_numeric()</code> converts the cleaned text into numbers that can be used for calculations.</p>

<p><strong>Why the raw column is retained at first:</strong> keeping <code>GC_Raw_Data</code> beside the parsed columns makes it easy to verify that the extraction worked correctly. After the parsed values have been checked, the raw field may be removed from a derived analysis table if there is a clear reason to do so. The original input file should still remain unchanged.</p>

<p><strong>Where this is useful:</strong> the same approach can separate instrument fields containing peak area, retention time, quality flags, genomic coordinates, plate positions, dilution labels, or compound identifiers.</p>

<hr />

<h2>5. Data Integrity and Version Control in Python</h2>
<p>Professional handling of biological data requires a clear distinction between <strong>raw data</strong> and <strong>derived data</strong>. The ALCOA+ data-integrity framework emphasizes records that are attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available.</p>

<h3>5.1 Protecting the Raw File</h3>
<p>Python does not automatically make a raw file immutable. A script can overwrite a file if it is instructed to do so. The safe practice is therefore deliberate: read the raw file, perform transformations in memory, and save the cleaned result under a different filename.</p>

<pre><code># Read the original file
raw_df = pd.read_csv("experiment_data.tsv", sep="&#92;t")

# Work on a copy so the purpose is explicit
clean_df = raw_df.copy()

# ...cleaning steps are performed on clean_df...

# Save a new derived file rather than overwriting the input
clean_df.to_csv(
    "experiment_data_CLEANED.tsv",
    sep="&#92;t",
    index=False
)
</code></pre>

<p><code>index=False</code> prevents pandas from adding the DataFrame's row index as an extra output column. The filename clearly distinguishes the derived file from the raw input.</p>

<p><strong>Where this is useful:</strong> retaining the original file makes it possible to repeat the analysis, audit a correction, compare pipeline versions, or explain exactly how a final result was produced.</p>

<hr />

<h2>6. Interactive Practice: Applying the Rules</h2>
<p>This practical combines the ideas introduced above into one controlled cleaning exercise. The dataset contains several intentional problems, but the problems are arranged so that each one can be detected using a method already explained in the article.</p>

<p>The dataset contains <strong>16 records and 8 columns when first loaded</strong>. Three records are missing their <code>Sample_ID</code>, one pH measurement is genuinely missing, one sample is duplicated, one pH value is outside the accepted exercise range, genetic-marker labels use inconsistent capitalization, and the GC measurements are stored as compound text.</p>

<p><strong>Do not repair the raw text manually before loading it.</strong> The purpose of the exercise is to practice detecting and correcting the problems with pandas. Copy the dataset exactly as shown into a plain-text file named <code>practice.tsv</code>.</p>

<h3>6.1 The Raw Practice Dataset</h3>
<pre><code>Sample_ID	Full_Organism_Name	Target_Genus	Treatment_Group	Genetic_Marker	pH_Reading	Status	GC_Raw_Data
Flask_001	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_002	Serratia marcescens	Serratia	Adapted_Strain	proa	7.4	Passed	Peak:510;RT:1.45
Flask_003	Escherichia coli	Escherichia	Control	PROA	6.8	Failed	Peak:120;RT:1.1
Flask_004	Pseudomonas aeruginosa	Pseudomonas	Wild_Type	proA	NA	Failed	Peak:0;RT:0
Flask_005	Cordyceps militaris	Cordyceps	Adapted_Strain	ProA	6.5	Passed	Peak:600;RT:2.1
Flask_006	Bacillus subtilis	Bacillus	Control	proa	7.1	Passed	Peak:310;RT:1.8
Flask_007	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_007	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_008	Escherichia coli	Escherichia	Adapted_Strain	PROA	7.0	Passed	Peak:550;RT:1.5
Flask_009	Pseudomonas aeruginosa	Pseudomonas	Control	proa	15.5	Failed	Peak:20;RT:1.1
Flask_010	Cordyceps militaris	Cordyceps	Wild_Type	ProA	6.8	Passed	Peak:580;RT:2.0
Flask_011	Bacillus subtilis	Bacillus	Adapted_Strain	proA	7.0	Passed	Peak:400;RT:1.9
Flask_012	Serratia marcescens	Serratia	Control	proA	7.2	Passed	Peak:150;RT:1.3
Escherichia coli	Escherichia	Wild_Type	PROA	7.1	Passed	Peak:480;RT:1.4
Bacillus subtilis	Bacillus	Adapted_Strain	proA	7.0	Passed	Peak:420;RT:1.9
Cordyceps militaris	Cordyceps	Control	proa	6.9	Passed	Peak:200;RT:1.2
</code></pre>

<h3>6.2 Your Practice Mission</h3>
<p>Work through the following steps in order. The order matters because some problems should be repaired before later checks are performed. In particular, repair the shifted rows before converting <code>pH_Reading</code> permanently to numeric values.</p>

<h4>6.2.1 Load the Dataset and Confirm Its Structure</h4>
<p>Start a new IPython session in the folder containing <code>practice.tsv</code>, then run:</p>

<pre><code>import pandas as pd

df = pd.read_csv("practice.tsv", sep="&#92;t")

print(df.head())
print(df.shape)
print(df.columns.tolist())
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>df.shape</code> should report <code>(16, 8)</code>. This means pandas found 16 rows and 8 columns. If you see a different number of columns, first check that the file was saved with real tab separators and that the header was copied correctly.</p>

<p><strong>What you learned:</strong> always inspect the basic structure immediately after import. This simple habit can reveal a wrong delimiter, missing header, extra separator, or malformed export before more complicated analysis begins.</p>

<h4>6.2.2 Inspect Missing Values Before Changing Anything</h4>
<pre><code>print(df.isna().sum())

rows_with_missing_values = df[df.isna().any(axis=1)]
print(rows_with_missing_values)
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>pH_Reading</code> should contain one missing value because <code>Flask_004</code> has <code>NA</code>. <code>GC_Raw_Data</code> should contain three missing values. Those three missing GC fields are an important clue that the final three rows may be structurally shifted.</p>

<p>Notice that the missing <code>Sample_ID</code> values do <em>not</em> appear as missing in the <code>Sample_ID</code> column. This is because the organism names have moved into that column. A structural error can therefore hide a missing field rather than simply producing an obvious blank cell.</p>

<p><strong>What you learned:</strong> missing-value counts are a diagnostic tool, not just a cleanup command. Unexpected patterns of missingness can reveal formatting problems in laboratory exports.</p>

<h4>6.2.3 Detect the Three Shifted Rows</h4>
<p>The pH column should contain numbers. In the shifted rows, however, the value <code>Passed</code> has moved into <code>pH_Reading</code>. We can use this biological and data-type expectation to identify the affected records.</p>

<pre><code>numeric_ph = pd.to_numeric(df["pH_Reading"], errors="coerce")

shifted_mask = numeric_ph.isna() &amp; df["pH_Reading"].notna()
shifted_rows = df.loc[shifted_mask]

print(shifted_rows)
print("Number of shifted rows:", shifted_mask.sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> the number of shifted rows should be <code>3</code>. The temporary conversion turns the text <code>Passed</code> into <code>NaN</code>, but the genuinely missing pH value for <code>Flask_004</code> is excluded because its original value is already missing.</p>

<p><strong>What you learned:</strong> a temporary conversion with <code>errors="coerce"</code> is a powerful way to locate values that violate the expected data type without stopping the program.</p>

<h4>6.2.4 Repair the Shifted Rows</h4>
<p>For the three detected rows, every value needs to move one column to the right. The exercise also tells us that the missing sample identifiers are <code>Flask_013</code>, <code>Flask_014</code>, and <code>Flask_015</code>. In a real experiment, these IDs would need to come from an authoritative laboratory record.</p>

<pre><code># Move columns 1 through 7 one position to the right
# using columns 0 through 6 as the source values.
df.loc[shifted_mask, df.columns[1:]] = (
    df.loc[shifted_mask, df.columns[:-1]].to_numpy()
)

# Insert the known IDs supplied for this exercise
df.loc[shifted_mask, "Sample_ID"] = [
    "Flask_013",
    "Flask_014",
    "Flask_015"
]

# Verify the repaired records
print(df.loc[shifted_mask])
</code></pre>

<p><strong>Expected checkpoint:</strong> the three repaired rows should now have proper sample IDs, organism names under <code>Full_Organism_Name</code>, numeric-looking pH values, <code>Passed</code> under <code>Status</code>, and the peak/retention-time string under <code>GC_Raw_Data</code>.</p>

<p><strong>What you learned:</strong> <code>df.loc[rows, columns]</code> lets you modify only a precisely selected part of a DataFrame. This is useful when a data-quality problem affects a known subset of samples rather than the entire dataset.</p>

<h4>6.2.5 Convert pH to Numeric and Re-check Missing Values</h4>
<p>Now that the structural problem has been repaired, the pH column can safely be converted to numeric form.</p>

<pre><code>df["pH_Reading"] = pd.to_numeric(
    df["pH_Reading"],
    errors="coerce"
)

missing_ph = df[df["pH_Reading"].isna()]
print(missing_ph[["Sample_ID", "Full_Organism_Name", "pH_Reading"]])
</code></pre>

<p><strong>Expected checkpoint:</strong> only <code>Flask_004</code> should have a missing pH value. Leave this value as <code>NaN</code> for the exercise because no evidence has been provided for what the missing measurement should be.</p>

<p><strong>What you learned:</strong> missing data should not automatically be replaced with a convenient number. In biological research, the reason for missingness should be considered before dropping or imputing a value.</p>

<h4>6.2.6 Standardize the Genetic Marker Labels</h4>
<p>Inspect the current marker labels before cleaning them:</p>

<pre><code>print(df["Genetic_Marker"].value_counts())
</code></pre>

<p>You should see several spellings of the same marker, including <code>proA</code>, <code>proa</code>, <code>PROA</code>, and <code>ProA</code>. Standardize the complete column:</p>

<pre><code>df["Genetic_Marker"] = (
    df["Genetic_Marker"]
    .astype("string")
    .str.strip()
    .str.upper()
)

print(df["Genetic_Marker"].unique())
</code></pre>

<p><strong>Expected checkpoint:</strong> the unique marker list should now contain only <code>PROA</code>.</p>

<p><strong>What you learned:</strong> text standardization prevents one biological category from being accidentally analyzed as several different groups.</p>

<h4>6.2.7 Find and Remove the Accidental Duplicate</h4>
<p>First display every record that shares a duplicate <code>Sample_ID</code>:</p>

<pre><code>duplicate_rows = df[
    df.duplicated(subset=["Sample_ID"], keep=False)
]

print(duplicate_rows)
</code></pre>

<p><strong>Expected checkpoint:</strong> two identical rows for <code>Flask_007</code> should be displayed. After inspecting them, remove the repeated entry:</p>

<pre><code>df = df.drop_duplicates(
    subset=["Sample_ID"],
    keep="first"
).copy()

print(df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the DataFrame should now contain <code>15</code> rows.</p>

<p><strong>What you learned:</strong> duplicates should be inspected before removal. In biological datasets, repeated measurements may represent real replicates, so matching values or identifiers should not be deleted blindly.</p>

<h4>6.2.8 Validate the pH Range</h4>
<p>For this exercise, accepted pH values are defined as 0 through 14. Missing values are allowed to remain missing because they represent a different data-quality problem.</p>

<pre><code>invalid_ph = df[
    df["pH_Reading"].notna()
    &amp; ~df["pH_Reading"].between(0, 14)
]

print(invalid_ph[["Sample_ID", "pH_Reading"]])
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>Flask_009</code> should be the only flagged record, with a pH value of <code>15.5</code>.</p>

<p>For this training dataset, remove records outside the accepted range while preserving genuinely missing pH values:</p>

<pre><code>df = df[
    df["pH_Reading"].between(0, 14)
    | df["pH_Reading"].isna()
].copy()

print(df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the DataFrame should now contain <code>14</code> rows.</p>

<p><strong>What you learned:</strong> Boolean filtering converts a scientific rule into a reproducible data-validation rule. The same approach can be used for acceptable temperature ranges, concentration limits, read-depth thresholds, colony counts, or other study-specific criteria.</p>

<h4>6.2.9 Parse the GC Instrument Output</h4>
<p>The <code>GC_Raw_Data</code> column contains two measurements in one string. Split them and convert them into numeric columns:</p>

<pre><code>gc_split = df["GC_Raw_Data"].str.split(
    ";",
    n=1,
    expand=True
)

df["GC_Peak"] = pd.to_numeric(
    gc_split[0].str.replace("Peak:", "", regex=False),
    errors="coerce"
)

df["GC_RT"] = pd.to_numeric(
    gc_split[1].str.replace("RT:", "", regex=False),
    errors="coerce"
)

print(df[["GC_Raw_Data", "GC_Peak", "GC_RT"]].head())
print(df[["GC_Peak", "GC_RT"]].isna().sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> both parsed columns should contain numeric values, and their missing-value counts should be zero.</p>

<p><strong>What you learned:</strong> text parsing converts instrument-specific strings into separate variables that can be summarized, plotted, compared between treatments, or included in statistical models.</p>

<h4>6.2.10 Run Final Quality-Control Checks</h4>
<p>Before saving the cleaned file, confirm that the important assumptions are now satisfied:</p>

<pre><code>print("Final shape:", df.shape)
print("Sample IDs are unique:", df["Sample_ID"].is_unique)
print("Marker labels:", df["Genetic_Marker"].unique())
print(
    "All recorded pH values are valid:",
    df["pH_Reading"].dropna().between(0, 14).all()
)
print(df.isna().sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> the final shape should be <code>(14, 10)</code>, sample IDs should be unique, the genetic marker should be standardized to <code>PROA</code>, all recorded pH values should fall inside the accepted range, and the only remaining missing value should be the intentionally unknown pH for <code>Flask_004</code>.</p>

<p><strong>What you learned:</strong> cleaning is not complete when the code finishes without an error. A good pipeline ends with explicit checks showing that the cleaned data now satisfies the assumptions required for analysis.</p>

<h4>6.2.11 Export and Reload the Cleaned Dataset</h4>
<p>Save the cleaned data under a new filename so that <code>practice.tsv</code> remains unchanged:</p>

<pre><code>df.to_csv(
    "practice_CLEANED.tsv",
    sep="&#92;t",
    index=False
)
</code></pre>

<p>As a final check, reload the exported file:</p>

<pre><code>check_df = pd.read_csv(
    "practice_CLEANED.tsv",
    sep="&#92;t"
)

print(check_df.head())
print(check_df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the reloaded file should contain <code>14</code> rows and <code>10</code> columns.</p>

<p><strong>What you learned:</strong> reloading an exported file is a simple but valuable quality-control step. It confirms that the saved file can be read successfully and that the output structure matches what you intended to produce.</p>

<h3>6.3 What This Practical Has Taught You</h3>
<p>This exercise follows the same reasoning used in larger biological data-cleaning pipelines. You first inspected the file structure, then used missing-value patterns and expected data types to detect structural errors. After repairing the table, you standardized categorical text, reviewed duplicates, applied a biological validation rule, parsed instrument output, and verified the final dataset before export.</p>

<p>These methods scale beyond the small practice table. The same pandas operations can be used when preparing microbial growth data, sample metadata for sequencing projects, metabolomics or chromatography exports, phenotype tables, plate-reader measurements, environmental monitoring data, or intermediate files used in bioinformatics workflows.</p>

<p>The most important habit is to treat cleaning as a sequence of <strong>inspect → detect → correct → verify</strong>. This reduces the chance of silently changing valid observations while still producing a reproducible record of every justified transformation.</p>

</article>

  `,
};

export default article;
