import { Article } from "../../lib/types";
import blastHomePage from "./article_images/012_001.png";
import figure012002 from "./article_images/012_002.png";
import figure012003 from "./article_images/012_003.png";
import figure012004 from "./article_images/012_004.png";
import figure012005 from "./article_images/012_005.png";
import figure012006 from "./article_images/012_006.png";
import figure012007 from "./article_images/012_007.png";
const article: Article = {
  id: "RK-2026-012",
  title:
    "NCBI Basic Local Alignment Search Tool (BLAST): Methodologies, Interface Dynamics, and Result Interpretation",
  date: "2026-01-14",
  tags: ["#BLASTTool #bioinformatics"],
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
<div class="retro-container"
  style="text-align: center; margin-bottom: 20px;"
>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSejX5k3bS8bHnqdqcAT9LuYep4UPJsSvptY3q87S9YG8NBvtA/viewform?usp=publish-editor" class="retro-button">
    Check your understanding
  </a>
</div>


<article>
<h2>1. Introduction: Why Sequence Alignment Matters to Biologists</h2>
<p>
In modern biology, discovering a new DNA or protein sequence is just the beginning. On its own, a sequence is just a string of letters; its true <strong>biological meaning</strong> comes from comparing it to what we already know. The <strong>Basic Local Alignment Search Tool (BLAST)</strong> is the essential bridge that connects your unknown sequence to the vast library of global biological knowledge.
</p>
<p>
Think of BLAST as a specialized search engine. It allows you to trace evolutionary history, identify the function of an unknown gene, and find similar structures in different species. By understanding the logic behind the tool, you can move beyond "pushing buttons" and start making precise biological discoveries.
</p>


<h3>1.1 How BLAST Thinks: Local vs. Global Alignment</h3>
<p>
To get the best results, it is important to understand how BLAST looks at your sequences. In bioinformatics, there are two main ways to compare sequences:
</p>

<table class="science-table" data-id="alignment-comparison">
<caption>Table 1: Comparing Alignment Strategies</caption>
<thead>
<tr>
<th>Alignment Type</th>
<th>How it Works</th>
<th>Biological Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Global</strong></td>
<td>Tries to match the sequences from the very first letter to the very last.</td>
<td>Comparing two very similar proteins or genes of the same length.</td>
</tr>
<tr>
<td><strong>Local (BLAST)</strong></td>
<td>Looks for "islands" of high similarity, even if the rest of the sequence is totally different.</td>
<td>Finding a conserved functional part (like a binding site) inside a large, complex protein.</td>
</tr>
</tbody>
</table>

<p>
Because BLAST uses <strong>local alignment</strong>, it is incredibly powerful for biologists for three reasons:
</p>
<ul>
<li>
<strong>Finding Specific Domains:</strong> You might find a match for a small "active site" (e.g., a kinase domain) even if the rest of the protein has evolved into something entirely different.
</li>
<li>
<strong>Handling Fragmented Data:</strong> If your sequence has gaps or regions that don't match, BLAST can still show you the pieces that <em>do</em> match as separate blocks.
</li>
<li>
<strong>Speed:</strong> By focusing on these "seeds" of similarity rather than the whole sequence at once, BLAST can scan billions of sequences in seconds.
</li>
</ul>


<h3>1.2 The Growing NCBI Ecosystem</h3>
<p>
BLAST isn't just a single tool; it is part of a massive network at the <strong>National Center for Biotechnology Information (NCBI)</strong>. When you run a search, you aren't just getting a list of names; you are connecting to a web of data including:
</p>
<ul>
<li><strong>Taxonomy:</strong> What species does this sequence belong to?</li>
<li><strong>Gene:</strong> What is the known function of this gene in other organisms?</li>
<li><strong>SRA:</strong> Are there raw sequencing runs where this gene appears?</li>
</ul>
<blockquote>
<strong>Note for Researchers:</strong> As of 2024, NCBI has updated its default databases (like <em>core_nt</em>) to handle the massive influx of new genomic data. Staying aware of these changes ensures your research remains accurate and reproducible.
</blockquote>
</article>

<article>
<h2>2. The BLAST Program Suite: Choosing Your Search Engine</h2>
<p>
The most critical decision you will make is choosing the right version of BLAST for your data. Think of this like choosing the right lens for a microscope: one lens might be perfect for looking at a whole tissue sample, while another is needed to see individual cells. Using the wrong program can result in a "no hits found" message, even if a related sequence exists in the database.
</p>

      <figure class="science-figure" data-id="Figure 12.1: " data-clean-src="${blastHomePage}">
      <img src="${blastHomePage}" alt="Blast Home page" />
      <figcaption>Major <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi">NCBI BLAST variants</a> available for different search purposes.</figcaption>
    </figure>



<article>
<h2>The BLAST Strategy: From "Seeds" to Alignments</h2>
<p>
BLAST doesn't attempt to align your entire sequence at once. Because databases are massive, doing a letter-by-letter comparison would take hours. Instead, BLAST uses a "Heuristic" approach—a shortcut that finds small, perfect matches first and then builds the full alignment from there.
</p>

<div class="algorithm-breakdown">
<h3>Step 1: Breaking the Query into "Words"</h3>
<p>
The algorithm first chops your query sequence into small, overlapping fragments called <strong>Words</strong> (the length is determined by your <em>Word Size</em> setting).
</p>
<div class="code-visual">
<strong>Query:</strong> <code style="color: blue;">ATGCATGC</code>




<strong>Words (W=3):</strong> <code>ATG</code>, <code>TGC</code>, <code>GCA</code>, <code>CAT</code>...
</div>

<h3>Step 2: Finding a Perfect "Seed" Match</h3>
<p>
  BLAST scans the database for an exact match to any of these words. This is called the <strong>Seeding phase</strong>. An alignment is only initiated if a perfect match (a "hit") is found.
</p>
<div class="code-visual">
  <strong>Word:</strong> <code style="color: green;">GCA</code><br>
  <strong>Database Subject:</strong> <code>...TTAG<span style="background-color: #d4edda; color: green; font-weight: bold;">GCA</span>TTAC...</code><br>
  <small><em>*Match Identified! This becomes the anchor for the next step.*</em></small>
</div>

<h3>Step 3: Extension (Building the HSP)</h3>
<p>
  Once a seed is planted, BLAST tries to extend the match in both directions. It continues as long as the score increases. If the similarity drops off too much, the extension stops. The resulting segment is called a <strong>High-Scoring Segment Pair (HSP)</strong>.
</p>



<div class="code-visual" style="font-family: monospace;">
  <div style="margin-left: 20px;">
    &nbsp;&nbsp;&nbsp;&nbsp;&leftarrow; <strong>Extension</strong> &rightarrow;<br>
    Query: <span style="color: gray;">AT</span><span style="color: green; border-bottom: 2px solid green;">GCATG</span><span style="color: gray;">C</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||||<br>
    Subj: <span style="color: gray;">TT</span><span style="color: green; border-bottom: 2px solid green;">GCATG</span><span style="color: gray;">A</span>
  </div>
</div>


</div>

<table class="science-table" data-id="word-size-impact">
<caption>Table 11: Biological Impact of Word Size Configuration</caption>
<thead>
<tr>
<th>Action</th>
<th>Biological Result</th>
<th>Trade-off</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Decrease W</strong></td>
<td>Higher sensitivity; catches tiny, distant evolutionary "fingerprints".</td>
<td>Slower; more random "noise" hits.</td>
</tr>
<tr>
<td><strong>Increase W</strong></td>
<td>Higher speed; identifies nearly identical genes quickly.</td>
<td>Less sensitive; may miss relatives in different species.</td>
</tr>
</tbody>
</table>
</article>


<h3>2.1 Nucleotide BLAST (blastn): DNA-to-DNA Comparison</h3>
<p>
The <strong>blastn</strong> suite is used when you have a DNA or RNA sequence and want to find similar genetic material in the database. Depending on how closely related you expect the sequences to be, you must choose between three specific "flavors" of the tool.
</p>
    <figure class="science-figure" data-id="Figure 12.2: " data-clean-src="${figure012002}"> 
    <img src="${figure012002}" alt="NCBI Standard Nucleotide BLAST Search Interface" /> 
    <figcaption>The <strong>Standard Nucleotide BLAST (blastn)</strong> input interface highlighting three primary configuration zones: <strong>(A) Enter Query Sequence</strong> for inputting FASTA data or accession numbers, <strong>(B) Choose Search Set</strong> for selecting target databases like <em>core_nt</em>, and <strong>(C) Program Selection</strong> to optimize the algorithm for highly similar (megablast) or more dissimilar sequences.</figcaption> 
    </figure>

<h4>2.1.1 Megablast: For "Near-Perfect" Matches</h4>
<p>
This is the default setting on the NCBI website. It is incredibly fast and designed to find sequences that are nearly identical.
</p>
<ul>
<li><strong>The "Word Size" Concept:</strong> Megablast looks for a "seed" of 28 perfectly matching DNA letters before it even considers a sequence a potential match.</li>
<li><strong>When to Use It:</strong>
<ul>
<li><strong>Species ID:</strong> You have a sequence and want to confirm it belongs to a specific bacterium or virus.</li>
<li><strong>Mapping:</strong> You want to find exactly where a specific piece of mRNA sits on a genome.</li>
<li><strong>Cleaning Data:</strong> Checking if your sample is contaminated with common lab DNA (like cloning vectors).</li>
</ul>
</li>
<li><strong>The Limitation:</strong> Because it requires such a long, perfect match, it will often fail to find matches in different species (e.g., comparing a human gene to a mouse gene).</li>
</ul>

<h4>2.1.2 Discontiguous Megablast: For Cross-Species Searches</h4>
<p>
If you are looking for a gene in a different species, standard Megablast is too "picky." This version is smarter about how evolution works in <strong>coding regions</strong>.
</p>
<ul>
<li><strong>Biological Strategy:</strong> In the genetic code, the third letter of a codon (the "wobble" position) can often change without changing the resulting amino acid. Discontiguous Megablast ignores these "wobble" positions during its initial search.</li>
<li><strong>When to Use It:</strong> Use this when searching for the same gene across different species (e.g., looking for a zebrafish version of a human protein-coding gene). It is the best balance between speed and sensitivity for evolutionary biology.</li>
</ul>

<h4>2.1.3 Standard blastn: For Short or Distant Sequences</h4>
<p>
This is the most sensitive—but slowest—nucleotide tool.
</p>
<ul>
<li><strong>The Strategy:</strong> It uses a very small "word size" (usually 11 letters, but can be as low as 7). This means it can pick up much shorter or more scrambled matches.</li>
<li><strong>When to Use It:</strong>
<ul>
<li><strong>Short Queries:</strong> Essential if you are checking PCR primers or small DNA probes (which are often only 20 letters long).</li>
<li><strong>Non-coding DNA:</strong> Finding regulatory elements or "junk" DNA that doesn't follow the codon rules used by Discontiguous Megablast.</li>
</ul>
</li>
</ul>

<table class="science-table" data-id="nucleotide-blast-guide">
<caption>Table 2: Selecting the Right Nucleotide BLAST Tool</caption>
<thead>
<tr>
<th>Program</th>
<th>Best for...</th>
<th>Required "Seed" Match</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Megablast</strong></td>
<td>Identifying the same species / high similarity.</td>
<td>28 matching bases (Contiguous)</td>
</tr>
<tr>
<td><strong>Discontiguous Megablast</strong></td>
<td>Finding the same gene in different species.</td>
<td>Template of matches (Ignores "wobble")</td>
</tr>
<tr>
<td><strong>Standard blastn</strong></td>
<td>Short primers or very distantly related DNA.</td>
<td>11 or 7 matching bases</td>
</tr>
</tbody>
</table>
</article>

<article>
<h2>2.2 The Protein BLAST Suite (blastp): Analyzing Function and Form</h2>
  <figure class="science-figure" data-id="Figure 12.3: " data-clean-src="${figure012003}"> <img src=${figure012003} alt="NCBI Standard Protein BLAST Search Interface" /> 
  <figcaption> The <strong>Standard Protein BLAST (blastp)</strong> interface. Note the <strong>Program Selection</strong> section allows you to choose between standard <em>blastp</em> or the iterative <em>PSI-BLAST</em> for finding more distant evolutionary relatives.</figcaption> </figure>

<p>
Proteins are the "workhorses" of the cell. While DNA is the blueprint, proteins perform the actual biological functions. Because proteins are so vital, their sequences tend to stay more similar over millions of years of evolution than the DNA that encodes them.
</p>
<p>
If you want to find out what an unknown gene does, searching its <strong>protein sequence</strong> is often much more successful than searching its DNA sequence.
</p>

<table class="science-table" data-id="protein-blast-suite">
<caption>Table 3: Protein BLAST (blastp) Algorithms</caption>
<thead>
<tr>
<th>Algorithm</th>
<th>Best Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Standard blastp</strong></td>
<td><strong>General Purpose:</strong> Finding known relatives of your protein to infer its function or name.</td>
</tr>
<tr>
<td><strong>PSI-BLAST</strong></td>
<td><strong>Distant Relatives:</strong> An "iterative" search. It learns from its first results to find very distant evolutionary cousins that a normal search would miss.</td>
</tr>
</tbody>
</table>

<hr>

<h2>2.3 The Translated BLAST Suite: Bridging DNA and Protein</h2>
<p>
Sometimes you have a DNA sequence, but you want to search it as if it were a protein. Or, you have a protein and want to find the DNA sequence that encodes it. This requires <strong>translation</strong>. Since we don't always know where a gene starts or which strand it is on, BLAST automatically checks all <strong>six possible reading frames</strong>.
</p>

<h3>2.3.1 blastx: From DNA Query to Protein Database</h3>
<p>
You have <strong>DNA</strong>, but you search against a <strong>Protein</strong> database.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Identifying what protein a piece of raw genomic DNA or an uncharacterized transcript might produce.</li>
<li><strong>Why it's useful:</strong> It automatically handles "reading frames," so even if you don't know where the gene starts, blastx will find it.</li>
</ul>

<h3>2.3.2 tblastn: From Protein Query to DNA Database</h3>
<p>
You have a <strong>Protein</strong>, but you search against a <strong>DNA</strong> database.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Finding a gene in a genome that hasn't been fully mapped or "annotated" yet.</li>
<li><strong>Example:</strong> You know a human protein and want to find the equivalent gene in a newly sequenced species, like a rare desert plant or a deep-sea microbe.</li>
</ul>

<h3>2.3.3 tblastx: Comparing DNA at the Protein Level</h3>
<p>
Both your <strong>Query</strong> and the <strong>Database</strong> are translated into proteins during the search.
</p>
<ul>
<li><strong>The Biological Goal:</strong> Deep evolutionary "detective work." This is used when two DNA sequences are so different that they don't look alike anymore, but they still encode for similar proteins.</li>
<li><strong>Note:</strong> This is very "heavy" on computer power and is much slower than other methods.</li>
</ul>
</article>


<article>
<h2>3. Configuring the Search: Inputs and Database Selection</h2>
<p>
The success of a BLAST search is decided before you ever click the "BLAST" button. How you format your input and which "library" (database) you choose to search through will determine if you get a precise answer or a mountain of irrelevant data.
</p>


<h3>3.1 Structuring Your Input: FASTA and Identifiers</h3>
<p>
BLAST is flexible with how it accepts data, but using the correct format prevents errors and makes your research more organized.
</p>

<ul>
<li>
<strong>The FASTA Format:</strong> This is the gold standard for sharing biological sequences. It always starts with a <code>&gt;</code> symbol followed by a description line, then the sequence on the lines below.
</li>
<li>
<strong>Accession Numbers:</strong> Instead of pasting a long string of letters, you can use a unique ID (like <em>NM_000518</em>). This is often safer because it ensures you are using the most current, officially recognized version of that sequence.
</li>
<li>
<strong>Query Subrange:</strong> If you have a massive protein but only care about one specific part (like a binding site from amino acid 10 to 50), you can tell BLAST to ignore the rest. This prevents your results from being "cluttered" by matches to common parts of the protein you already know about.
</li>
</ul>


<h3>3.2 The Art of Database Selection</h3>
<p>
NCBI stores billions of sequences. Searching "everything" is often a waste of time and can lead to confusing results. You should pick a database that matches your specific biological question.
</p>

<h4>3.2.1 Nucleotide (DNA/RNA) Databases</h4>
<table class="science-table" data-id="nucleotide-databases">
<caption>Table 4: Key DNA Databases for Biologists</caption>
<thead>
<tr>
<th>Database</th>
<th>When to Use It</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>core_nt</strong></td>
<td><strong>The New Standard:</strong> Faster and cleaner. It removes "clutter" and redundant sequences while keeping the important diversity you need.</td>
</tr>
<tr>
<td><strong>nt (Nucleotide Collection)</strong></td>
<td><strong>The Archive:</strong> Use this when you can't find your sequence in <em>core_nt</em>. It is the most comprehensive but contains a lot of repetitive data.</td>
</tr>
<tr>
<td><strong>RefSeq Representative Genomes</strong></td>
<td><strong>Quality Control:</strong> Use this for <strong>primer design</strong>. It only includes high-quality, "official" versions of genomes.</td>
</tr>
<tr>
<td><strong>refseq_rna</strong></td>
<td><strong>Gene Expression:</strong> Best for looking at mRNA or transcripts without the "noise" of non-coding genomic DNA.</td>
</tr>
</tbody>
</table>

<h4>3.2.2 Protein Databases</h4>
<table class="science-table" data-id="protein-databases">
<caption>Table 5: Key Protein Databases for Biologists</caption>
<thead>
<tr>
<th>Database</th>
<th>When to Use It</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>nr (Non-redundant)</strong></td>
<td><strong>Discovery:</strong> The largest collection. Use this if you want to find every possible relative of your protein.</td>
</tr>
<tr>
<td><strong>Swiss-Prot</strong></td>
<td><strong>Functional Certainty:</strong> These entries are <strong>manually reviewed by humans</strong>. A hit here gives you the most reliable information about what a protein actually does.</td>
</tr>
<tr>
<td><strong>pdb (Protein Data Bank)</strong></td>
<td><strong>Structural Biology:</strong> Only contains sequences from proteins where the 3D shape has been solved (e.g., via X-ray crystallography). Essential if you want to build a 3D model.</td>
</tr>
</tbody>
</table>
</article>


<article>
<h2>4. Deep Dive: Tuning the BLAST Engine</h2>
<p>
While the default settings work for most searches, an expert biologist knows how to "tune" the algorithm to find hidden details. By clicking the <strong>"Algorithm parameters"</strong> link at the bottom of the NCBI page, you gain control over how BLAST actually looks for similarities.
</p>



<h3>4.1 Word Size: The Sensitivity Knob</h3>
<p>
BLAST doesn't start by looking at your entire sequence. Instead, it looks for a short, perfect match called a <strong>"Word."</strong> Once it finds this "seed," it tries to extend the match in both directions.
</p>

<ul>
<li><strong>Small Word Size:</strong> Like a high-power microscope. It picks up tiny, subtle matches but takes longer and can be "noisy." (Example: Use  for finding short DNA primers).</li>
<li><strong>Large Word Size:</strong> Like a telescope. It is very fast and only finds strong, obvious matches. (Example:  for finding the exact same gene in the same species).</li>
</ul>



<h3>4.2 Scoring Matrices: The Rules of Evolution</h3>
<p>
In protein searches, not all mismatches are equal. Replacing a <strong>Leucine</strong> with an <strong>Isoleucine</strong> is "cheaper" biologically than replacing it with a <strong>Tryptophan</strong>, because Leucine and Isoleucine have similar chemical properties.
</p>
<p>
BLAST uses a <strong>Substitution Matrix</strong> to give you a score based on how likely a change was to happen in nature.
</p>

<table class="science-table" data-id="scoring-matrices">
<caption>Table 6: Choosing the Right Protein Matrix</caption>
<thead>
<tr>
<th>Matrix</th>
<th>Biological Context</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>BLOSUM62 (Default)</strong></td>
<td>The "Goldilocks" matrix. Good for most searches, from medium to distant relatives.</td>
</tr>
<tr>
<td><strong>BLOSUM45</strong></td>
<td><strong>Deep Evolution:</strong> Use this for very distant relatives (e.g., Human vs. Yeast). It is more "forgiving" of mutations.</td>
</tr>
<tr>
<td><strong>BLOSUM80 / PAM30</strong></td>
<td><strong>Close Relatives:</strong> Best for comparing very similar sequences or very short peptides.</td>
</tr>
</tbody>
</table>


<article>
<h2>5. Interpreting BLAST Results: Metrics and Visualization</h2>

<figure class="science-figure" data-id="Figure 12.4" data-clean-src="${figure012004}">
<img src="${figure012004}" alt="BLAST Results Overview" />
<figcaption> An example BLAST results page highlighting key sections: <strong>(1) Graphic Summary</strong> for a visual overview of matches, <strong>(2) Descriptions Table</strong> listing key statistics for each hit, and <strong>(3) Alignments Section</strong> showing detailed residue-by-residue comparisons.</figcaption>
</figure>
<p>
The BLAST results page can feel overwhelming at first glance. However, once you know what to look for, it provides a clear, visual story of how your sequence relates to the rest of the biological world.
</p>


<h3>5.1 The Graphic Summary: A Bird's-Eye View</h3>
<p>
At the top of your results, you will see a series of colored bars. This is a visual map showing where—and how well—different sequences from the database align with your query.
</p>

<figure class="science-figure" data-id="Figure 12.5" data-clean-src="${figure012005}">
<img src="${figure012005}" alt="BLAST Graphic Summary" />
<figcaption> An example of a BLAST <strong>Graphic Summary</strong>, illustrating multiple sequence alignments with varying degrees of similarity to the query sequence. The color coding indicates the strength of each match based on Bit Score.</figcaption>
</figure>


<ul>
<li>
<strong>The Horizontal Bars:</strong> Each bar represents a different sequence found in the database. The length of the bar shows how much of your query was covered by that match.
</li>
<li>
<strong>The Color Code:</strong> The color tells you the <strong>Bit Score</strong>, which is a measure of the strength of the match.
</li>
</ul>

<table class="science-table" data-id="blast-color-codes">
<caption>Table 7: Understanding BLAST Result Colors</caption>
<thead>
<tr>
<th>Color</th>
<th>Bit Score</th>
<th>Biological Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td style="color: red; font-weight: bold;">Red</td>
<td>&gt; 200</td>
<td><strong>Excellent match:</strong> Very likely a true relative or the exact same gene.</td>
</tr>
<tr>
<td style="color: #ff69b4; font-weight: bold;">Pink / Green</td>
<td>50 - 200</td>
<td><strong>Moderate match:</strong> Could be a distant relative or a conserved functional domain.</td>
</tr>
<tr>
<td style="color: blue; font-weight: bold;">Blue / Black</td>
<td>&lt; 50</td>
<td><strong>Weak match:</strong> Often "background noise" or random similarity. Proceed with caution.</td>
</tr>
</tbody>
</table>

</article>


<article>

<article>
<h2>5.2 The Descriptions Table: Making Sense of the Numbers</h2>

<figure class="science-figure" data-id="Figure 12.6" data-clean-src="${figure012006}">
<img src="${figure012006}" alt="BLAST Descriptions Table for Komagataeibacter rhaeticus" />
<figcaption> Real-world BLAST results for a 16S ribosomal RNA gene search. The table ranks hits based on statistical significance, starting with the most certain matches at the top.</figcaption>
</figure>

<p>
Below the visual summary, BLAST provides a detailed table full of statistics. To a biologist, these numbers are the "evidence" for any claim of homology (shared ancestry). You must look at these metrics together—never rely on just one number to draw a conclusion.
</p>

<h3>Max Score: The Quality of the Best Match</h3> <p> The <strong>Max Score</strong> (or Bit Score) is a measurement of the quality of the single best matching segment between your query and the database sequence. Unlike "raw scores," the Bit Score is normalized, meaning you can compare it across different searches and even different databases. </p> <ul> <li><strong>Biological Insight:</strong> Higher scores indicate better alignments. In <strong>Figure 12.6</strong>, the top hit shows a <strong>Max Score of 1565</strong>. For biologists, a score this high is a definitive indicator of high-quality sequence similarity.</li> </ul>

<h3>Total Score: Identifying Fragmented Hits</h3> <p> The <strong>Total Score</strong> is the sum of the scores of every separate matching segment (HSPs) found in a single database entry. </p> <ul> <li><strong>The Gap Clue:</strong> If the Total Score is significantly higher than the Max Score, it tells you the match is split into multiple pieces. </li> <li><strong>Biological Context:</strong> In <strong>Figure 12.6</strong>, the 6th hit (<em>SLAM-JS1B chromosome</em>) has a <strong>Total Score (4557)</strong> that is nearly triple its <strong>Max Score (1519)</strong>. This confirms that the query appears in the genome in multiple locations—perhaps as multiple copies of the 16S rRNA gene or split across different exons.</li> </ul>

<h3>Query Cover: Avoiding the "Domain Trap"</h3> <p> <strong>Query Cover</strong> tells you what percentage of your input sequence actually matched the database hit. </p> <ul> <li><strong>The Warning:</strong> Do not be fooled by a "100% Identity" score if the Query Cover is only 2%. This usually means you’ve found a tiny conserved motif or a repeat sequence, not a homologous gene.</li> <li><strong>Biological Context:</strong> In our example, most hits show <strong>99% to 100% coverage</strong>. This gives us high confidence that we have found the complete gene in these organisms, not just a small fragment.</li> </ul>

<h3>E-value: The Gold Standard of Significance</h3> <p> The <strong>Expect Value (E-value)</strong> describes the number of hits one can "expect" to see by pure chance when searching a database of a particular size. It is the most critical number for determining if a hit is biologically real or just a random coincidence. </p> <ul> <li><strong>E = 0.0:</strong> This is the "Gold Standard" seen in <strong>Figure 12.6</strong>. It means the match is so strong that the probability of it occurring by chance is effectively zero.</li> <li><strong>E &lt; 1e-5:</strong> Standard cut-off for scientific significance. These are considered reliable matches for inferring function.</li> <li><strong>E between 0.01 and 1:</strong> "The Gray Zone." These hits require manual inspection. They could be very distant relatives or just random "noise."</li> <li><strong>E &gt; 1:</strong> Generally considered a random fluke. If your E-value is 10, it means you could expect to find 10 matches this good just by searching a database of random letters.</li> </ul>

<h3>Percent Identity: Similarity vs. Homology</h3> <p> <strong>Percent Identity</strong> measures the exact letter-for-letter matches in the aligned region. </p> <ul> <li><strong>Biological Caution:</strong> Identity is not the same as Homology (shared ancestry). In proteins, two sequences can be only 25% identical but still have the exact same structure and function.</li> <li><strong>Figure 12.6 Insight:</strong> While the top hit is <strong>100.00% identical</strong>, the 11th hit is <strong>99.28% identical</strong>. Both are biologically identical for most research purposes. Always prioritize a low E-value over a high identity percentage when hunting for distant relatives.</li> </ul>

<h3>Accession and Length: Connecting to the Source</h3> <p> The final columns provide the <strong>Accession Number</strong> (a permanent ID for the sequence) and the <strong>Subject Length</strong> (the total size of the sequence in the database). </p> <ul> <li><strong>Insight:</strong> If your query is 1,500 bp long but the subject length is 3,000,000 bp (like the <em>Komagataeibacter</em> chromosome in the example), it clearly shows your gene is just a tiny part of a much larger genome.</li> </ul> </article>

<h3>A Special Note on E-values for Short Sequences</h3>
<p>
If you are BLASTing a very short sequence, like a <strong>PCR primer</strong> (20 bases long), your E-value will often look "bad" or high. This is normal! Because the sequence is so short, the math says it's statistically possible to find that same 20-base string by accident in a massive genome. In this specific case, look at <strong>Percent Identity</strong> and <strong>Query Cover</strong> instead of obsessing over a low E-value.
</p>
</article>

</article>

<article>
<h3>5.3 The Alignments Section: Reading the Residues</h3>
<p>
This is where you see the "molecular handshake"—the letter-by-letter comparison between your query and the database subject. For a biologist, this section reveals the specific mutations that might change a protein's function.
</p>

<figure class="science-figure" data-id="Figure 12.7" data-clean-src="${figure012007}">
<img src="${figure012007}" alt="BLAST Alignment Section" />
<figcaption> Example BLAST alignment showing the detailed comparison between the query sequence and a database subject. Key features include matches, mismatches, gaps, and the translated protein sequence.</figcaption>
</figure>

<ul>
<li>
<strong>Strand Orientation (Plus/Plus vs. Plus/Minus):</strong>
In DNA searches, your sequence might match the database in the forward direction (Plus/Plus) or as a reverse complement (Plus/Minus).
<blockquote>
<strong>Biological Context:</strong> If you see "Plus/Minus," it simply means the gene you found is located on the opposite strand of the chromosome. You don't need to manually flip your sequence; BLAST does the math for you.
</blockquote>
</li>
<li>
<strong>The CDS Feature (Coding Sequence):</strong>
You can turn this on in the "Formatting Options." It shows the protein translation directly underneath the DNA letters.
<ul>
<li><strong>Silent Mutations:</strong> You see a DNA letter change, but the amino acid remains the same. The protein's function is likely unchanged.</li>
<li><strong>Missense Mutations:</strong> The DNA change results in a different amino acid (e.g., a Leucine changing to a Proline). This is a red flag for a potential change in protein folding or activity.</li>
</ul>
</li>
</ul>



<h3>5.4 The Taxonomy Tab: Your Contamination Detective</h3>
<p>
Before you celebrate a new discovery, check the <strong>Taxonomy tab</strong>. It organizes your results by the tree of life, which is a powerful way to verify your data's "purity."
</p>

<table class="science-table" data-id="taxonomy-use-cases">
<caption>Table 9: Using Taxonomy for Quality Control</caption>
<thead>
<tr>
<th>Observation</th>
<th>Biological Conclusion</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Expected species matches.</strong></td>
<td><strong>Success:</strong> Your sample is what you thought it was.</td>
</tr>
<tr>
<td><strong>Top hits are all Bacteria/Fungi.</strong></td>
<td><strong>Contamination:</strong> If you were studying a human sample, your DNA is likely contaminated with microbes.</td>
</tr>
<tr>
<td><strong>Hits in distant, unrelated groups.</strong></td>
<td><strong>Evolutionary Insight:</strong> This could suggest a "Horizontal Gene Transfer" (where a gene jumps from one species to another).</td>
</tr>
</tbody>
</table>

</article>

<hr>
<article>
<h2>6. Specialized BLAST Applications</h2>
<p>
While the standard BLAST interface is the most common, NCBI has built specialized tools that combine the BLAST algorithm with extra logic for specific biological tasks. These tools save you time by performing "sanity checks" that a general search would miss.
</p>


<h3>6.1 Primer-BLAST: Designing "Fail-Proof" PCR Assays</h3>
<p>
If you are doing RT-qPCR or cloning, <strong>Primer-BLAST</strong> is your best friend. It doesn't just design primers; it checks them against the entire genome to make sure they won't bind to the wrong place.
</p>

<ul>
<li>
<strong>Exon Junction Spanning:</strong> This is the most powerful setting for biologists. It ensures your primers only work on <strong>cDNA (mRNA)</strong> and not on contaminating <strong>Genomic DNA</strong>. By placing one primer across the boundary where two exons join, the primer cannot bind to genomic DNA because the large intron is in the way.
</li>
<li>
<strong>Specificity Check:</strong> The tool automatically runs a BLAST search against <strong>RefSeq Representative Genomes</strong> to ensure your primers aren't accidentally matching a different gene in the same organism.
</li>
</ul>



<h3>6.2 IgBLAST: Decoding the Immune System</h3>
<p>
Antibodies (Immunoglobulins) are formed through a complex "mix-and-match" process called <strong>V(D)J recombination</strong>. Standard BLAST cannot easily tell where one segment ends and another begins, but <strong>IgBLAST</strong> is built specifically for this.
</p>

<ul>
<li><strong>Gene Identification:</strong> It tells you exactly which V, D, and J germline genes were used to build your antibody.</li>
<li><strong>CDR Mapping:</strong> It automatically identifies the <strong>Complementarity Determining Regions (CDRs)</strong>—the specific loops of the protein that actually grab onto the virus or bacteria.</li>
<li><strong>Specialized Libraries:</strong> Instead of searching everything, it searches curated germline databases like <strong>IMGT</strong>.</li>
</ul>


<h3>6.3 VecScreen: Cleaning Your Sequences</h3>
<p>
Before you publish a sequence or submit it to GenBank, you must make sure it doesn't contain "leftovers" from the lab, like pieces of the <strong>plasmid</strong> or <strong>adapters</strong> used during sequencing.
</p>
<p>
<strong>VecScreen</strong> searches your sequence against <strong>UniVec</strong>, a database of all known cloning vectors.
</p>
<blockquote>
<strong>Biologist's Checklist:</strong> If VecScreen shows a "Strong Match," you must <strong>trim</strong> that part of the sequence. If you don't, your analysis will be based on man-made DNA rather than the organism's actual biology.
</blockquote>



<h3>6.4 Magic-BLAST: BLAST for Big Data</h3>
<p>
Standard BLAST is meant for one or two sequences at a time. <strong>Magic-BLAST</strong> is designed for <strong>Next-Generation Sequencing (NGS)</strong>, where you might have 50 million short reads from an Illumina run.
</p>
<ul>
<li><strong>RNA-Seq Friendly:</strong> It is optimized to recognize when a short sequence read spans across two different exons (spliced reads).</li>
<li><strong>SRA Integration:</strong> You can use it to search the <strong>Sequence Read Archive (SRA)</strong> directly, allowing you to "mine" raw data from other researchers' experiments to see if your gene of interest is present in their samples.</li>
</ul>

<table class="science-table" data-id="specialized-blast-summary">
<caption>Table 10: Which Specialized BLAST Should You Use?</caption>
<thead>
<tr>
<th>Tool</th>
<th>Biological Problem</th>
<th>Key Advantage</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Primer-BLAST</strong></td>
<td>Designing PCR primers.</td>
<td>Prevents off-target binding and genomic DNA noise.</td>
</tr>
<tr>
<td><strong>IgBLAST</strong></td>
<td>Analyzing antibodies or T-cell receptors.</td>
<td>Identifies V(D)J segments and CDR loops.</td>
</tr>
<tr>
<td><strong>VecScreen</strong></td>
<td>Preparing a sequence for submission.</td>
<td>Finds and helps remove lab-created contamination.</td>
</tr>
<tr>
<td><strong>Magic-BLAST</strong></td>
<td>Mapping millions of short NGS reads.</td>
<td>Handles large datasets and spliced mRNA reads.</td>
</tr>
</tbody>
</table>
</article>


<h2>Works cited</h2>
<ul style="list-style-type:none">

<li></li>1. BLAST QuickStart \- Comparative Genomics \- NCBI Bookshelf \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK1734/">https://www.ncbi.nlm.nih.gov/books/NBK1734/</a></li>
<li>2. BLAST: at the core of a powerful and diverse set of sequence analysis tools \- NIH, accessed on January 20, 2026, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC441573/">https://pmc.ncbi.nlm.nih.gov/articles/PMC441573/</a></li>
<li>3. BLAST Glossary \- BLAST® Help \- NCBI Bookshelf \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK62051/">https://www.ncbi.nlm.nih.gov/books/NBK62051/</a></li>
<li>4. A Guide to BLAST \- CZ ID Help Center, accessed on January 20, 2026, <a href="https://chanzuckerberg.zendesk.com/hc/en-us/articles/360050963352-A-Guide-to-BLAST">https://chanzuckerberg.zendesk.com/hc/en-us/articles/360050963352-A-Guide-to-BLAST</a></li>
<li>5. How do we interpret the max and total score of two sequences in BLASTN? \- Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/194zghy/how_do_we_interpret_the_max_and_total_score_of/">https://www.reddit.com/r/bioinformatics/comments/194zghy/how_do_we_interpret_the_max_and_total_score_of/</a></li>
<li>6. BLAST: Basic Local Alignment Search Tool, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi">https://blast.ncbi.nlm.nih.gov/Blast.cgi</a></li>
<li>7. Home \- SRA \- NCBI \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/sra">https://www.ncbi.nlm.nih.gov/sra</a></li>
<li>8. 2024 BLAST NEWS — BlastNews 0.1.1 documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-news/2024-BLAST-News.html">https://blast.ncbi.nlm.nih.gov/doc/blast-news/2024-BLAST-News.html</a></li>
<li>9. Nucleotide BLAST (blastn) Archives \- NCBI Insights \- NIH, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/tag/blastn/">https://ncbiinsights.ncbi.nlm.nih.gov/tag/blastn/</a></li>
<li>10. What is the difference between blastn and tblastx? \- Quora, accessed on January 20, 2026, <a href="https://www.quora.com/What-is-the-difference-between-blastn-and-tblastx">https://www.quora.com/What-is-the-difference-between-blastn-and-tblastx</a></li>
<li>11. BLASTN, TBLASTX, BLASTP, TBLASTN, BLASTX \- which should I choose? \- SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/choosing-blast-algorithms/">https://sequenceserver.com/blog/choosing-blast-algorithms/</a></li>
<li>12. Nucleotide BLAST: Search nucleotide databases using a nucleotide query \- NCBI, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/geo/query/blast.html">https://www.ncbi.nlm.nih.gov/geo/query/blast.html</a></li>
<li>13. BLAST Program Selection Guide \- NCBI, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/blast/BLAST_guide.pdf">https://www.ncbi.nlm.nih.gov/blast/BLAST_guide.pdf</a></li>
<li>14. Frequently Asked Questions — BLASTHelp documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html">https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html</a></li>
<li>15. search protein databases using \- BLAST \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins">https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins</a></li>
<li>16. BLAST Search Parameters — BlastTopics 0.1.1 documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/blastsearchparams.html">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/blastsearchparams.html</a></li>
<li>17. Different types of BLAST : r/bioinformatics \- Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/dof20s/different_types_of_blast/">https://www.reddit.com/r/bioinformatics/comments/dof20s/different_types_of_blast/</a></li>
<li>18. Which BLAST program should I use?, accessed on January 20, 2026, <a href="https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/650/Which_BLAST_program_should_I_use.html">https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/650/Which_BLAST_program_should_I_use.html</a></li>
<li>19. BLAST Reference Manual Pages, accessed on January 20, 2026, <a href="http://www.genebee.msu.su/blast/blast_help.html">http://www.genebee.msu.su/blast/blast_help.html</a></li>
<li>20. IgBlast tool \- NCBI \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/igblast/">https://www.ncbi.nlm.nih.gov/igblast/</a></li>
<li>21. Query Input and database selection — BlastTopics 0.1.1 documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/</a></li>
<li>22. NCBI BLAST: a better web interface | Nucleic Acids Research \- Oxford Academic, accessed on January 20, 2026, <a href="https://academic.oup.com/nar/article/36/suppl_2/W5/2505810">https://academic.oup.com/nar/article/36/suppl_2/W5/2505810</a></li>
<li>23. BLAST Databases \- National Library of Medicine, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/databases.html">https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/databases.html</a></li>
<li>24. Get Faster, More Focused Search Results with NCBI's New BLAST Core Nucleotide Database (core_nt), accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2024/07/18/new-blast-core-nucleotide-database/">https://ncbiinsights.ncbi.nlm.nih.gov/2024/07/18/new-blast-core-nucleotide-database/</a></li>
<li>25. BLAST FTP Site \- BLAST® Help \- NCBI Bookshelf \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/books/NBK62345/">https://www.ncbi.nlm.nih.gov/books/NBK62345/</a></li>
<li>26. NCBI Replacing Obsolete NCBI Genomes (chromosome) and Removing Human ALU repeat elements (alu_repeats) BLAST databases \- NCBI Insights, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2017/08/09/ncbi-replacing-obsolete-ncbi-genomes-chromosome-and-removing-human-alu-repeat-elements-alu_repeats-blast-databases/">https://ncbiinsights.ncbi.nlm.nih.gov/2017/08/09/ncbi-replacing-obsolete-ncbi-genomes-chromosome-and-removing-human-alu-repeat-elements-alu_repeats-blast-databases/</a></li>
<li>27. Fine-tune your web-based search results with SRA Run Selector \- NCBI Insights, accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2015/12/11/fine-tune-your-web-based-search-results-with-sra-run-selector/">https://ncbiinsights.ncbi.nlm.nih.gov/2015/12/11/fine-tune-your-web-based-search-results-with-sra-run-selector/</a></li>
<li>28. What do I do if my blast searches seem to have all the top hits from the same genus or species?, accessed on January 20, 2026, <a href="http://ubwp.buffalo.edu/wnygirp/wp-content/uploads/sites/5/2017/02/Exclude_blast_hits.pdf">http://ubwp.buffalo.edu/wnygirp/wp-content/uploads/sites/5/2017/02/Exclude_blast_hits.pdf</a></li>
<li>29. Which BLAST options should I change? \- QIAGEN Bioinformatics Manuals, accessed on January 20, 2026, <a href="https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/2201/index.php?manual=Which_BLAST_options_should_I_change.html">https://resources.qiagenbioinformatics.com/manuals/clcgenomicsworkbench/2201/index.php?manual=Which_BLAST_options_should_I_change.html</a></li>
<li>30. accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/oet/ed/navigator/blast-ident/index.html#:~:text=Reading%20your%20BLAST%20Results,-2%20of%202&text=Each%20bar%20in%20this%20graph,score%2C%20the%20closer%20the%20alignment.">https://www.nlm.nih.gov/oet/ed/navigator/blast-ident/index.html#:~:text=Reading%20your%20BLAST%20Results,-2%20of%202&text=Each%20bar%20in%20this%20graph,score%2C%20the%20closer%20the%20alignment.</a></li>
<li>31. Result Format Options — BlastTopics 0.1.1 documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-topics/resultformatoptions.html">https://blast.ncbi.nlm.nih.gov/doc/blast-topics/resultformatoptions.html</a></li>
<li>32. Interpreting BLAST output, accessed on January 20, 2026, <a href="https://bigcat-um.github.io/BLAST-OER/ncbi.html">https://bigcat-um.github.io/BLAST-OER/ncbi.html</a></li>
<li>33. A Small-Group Activity Introducing the Use and Interpretation of BLAST \- PMC \- NIH, accessed on January 20, 2026, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3867762/">https://pmc.ncbi.nlm.nih.gov/articles/PMC3867762/</a></li>
<li>34. Can someone briefly explain to me what the difference between percentage identity vs query coverage is in BLAST? : r/bioinformatics \- Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/p2vs6i/can_someone_briefly_explain_to_me_what_the/">https://www.reddit.com/r/bioinformatics/comments/p2vs6i/can_someone_briefly_explain_to_me_what_the/</a></li>
<li>35. E-value & Bit-score \- Metagenomics wiki, accessed on January 20, 2026, <a href="https://www.metagenomics.wiki/tools/blast/evalue">https://www.metagenomics.wiki/tools/blast/evalue</a></li>
<li>36. How BLAST E-values are calculated and what they mean \- SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/blast-e-value-meaning/">https://sequenceserver.com/blog/blast-e-value-meaning/</a></li>
<li>37. BLAST Statistics: The Expect Value \- National Library of Medicine \- NIH, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/e_value.html">https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/e_value.html</a></li>
<li>38. Which value (Query coverage or % identity) should we consider in BLASTn analysis?, accessed on January 20, 2026, <a href="https://www.researchgate.net/post/Which_value_Query_coverage_or_identity_should_we_consider_in_BLASTn_analysis">https://www.researchgate.net/post/Which_value_Query_coverage_or_identity_should_we_consider_in_BLASTn_analysis</a></li>
<li>39. accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/interpretation-of-blastn-results/#:~:text=BLAST%20uses%20%E2%80%9C%20%2B%20%E2%80%9D%20(%E2%80%9C,information%20about%20the%20BLAST%20strand.">https://sequenceserver.com/blog/interpretation-of-blastn-results/#:~:text=BLAST%20uses%20%E2%80%9C%20%2B%20%E2%80%9D%20(%E2%80%9C,information%20about%20the%20BLAST%20strand.</a></li>
<li>40. Plus/Minus strand in BLASTN : r/bioinformatics \- Reddit, accessed on January 20, 2026, <a href="https://www.reddit.com/r/bioinformatics/comments/18vib8l/plusminus_strand_in_blastn/">https://www.reddit.com/r/bioinformatics/comments/18vib8l/plusminus_strand_in_blastn/</a></li>
<li>41. Interpreting BLASTN nucleotide BLAST results \- SequenceServer, accessed on January 20, 2026, <a href="https://sequenceserver.com/blog/interpretation-of-blastn-results/">https://sequenceserver.com/blog/interpretation-of-blastn-results/</a></li>
<li>42. How do I interpret Nucleotide BLAST (blastn) pairwise alignments with the CDS feature display? \- NLM Support Center, accessed on January 20, 2026, <a href="https://support.nlm.nih.gov/kbArticle/?pn=KA-05225">https://support.nlm.nih.gov/kbArticle/?pn=KA-05225</a></li>
<li>43. Troubleshooting GenBank Submissions: Annotating the Coding Region (CDS), accessed on January 20, 2026, <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2015/10/02/troubleshooting-genbank-submissions-annotating-the-coding-region-cds/">https://ncbiinsights.ncbi.nlm.nih.gov/2015/10/02/troubleshooting-genbank-submissions-annotating-the-coding-region-cds/</a></li>
<li>44. Running NCBI BLAST to Compare Taxonomic IDs, accessed on January 20, 2026, <a href="https://sibarcodenetwork.readthedocs.io/en/latest/BLAST.html">https://sibarcodenetwork.readthedocs.io/en/latest/BLAST.html</a></li>
<li>45. 10\. Taxonomy Tab — BlastQuickStartGuide 0.1.1 documentation \- NIH, accessed on January 20, 2026, <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-quick-start-guide/results_taxonomy.html">https://blast.ncbi.nlm.nih.gov/doc/blast-quick-start-guide/results_taxonomy.html</a></li>
<li>46. Primer designing tool \- NCBI \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/primer-blast/">https://www.ncbi.nlm.nih.gov/tools/primer-blast/</a></li>
<li>47. The Primer-BLAST interface \- National Library of Medicine \- NIH, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2023-09_Primer-BLAST/interface.html">https://www.nlm.nih.gov/ncbi/workshops/2023-09_Primer-BLAST/interface.html</a></li>
<li>48. RIOT—Rapid Immunoglobulin Overview Tool—annotation of nucleotide and amino acid immunoglobulin sequences using an open germline database | Briefings in Bioinformatics | Oxford Academic, accessed on January 20, 2026, <a href="https://academic.oup.com/bib/article/26/1/bbae632/7914577">https://academic.oup.com/bib/article/26/1/bbae632/7914577</a></li>
<li>49. NCBI IgBLAST : How to set up, accessed on January 20, 2026, <a href="https://ncbi.github.io/igblast/cook/How-to-set-up.html">https://ncbi.github.io/igblast/cook/How-to-set-up.html</a></li>
<li>50. About VecScreen \- NCBI \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/vecscreen/about/">https://www.ncbi.nlm.nih.gov/tools/vecscreen/about/</a></li>
<li>51. NCBI News | VecScreen \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/Web/Newsltr/Fall99/vecscreen.html">https://www.ncbi.nlm.nih.gov/Web/Newsltr/Fall99/vecscreen.html</a></li>
<li>52. Interpretation of VecScreen Results \- NCBI \- NIH, accessed on January 20, 2026, <a href="https://www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation">https://www.ncbi.nlm.nih.gov/tools/vecscreen/interpretation</a></li>
<li>53. NCBI Magic-BLAST RNA-seq mapping tool, accessed on January 20, 2026, <a href="https://ncbi.github.io/magicblast/">https://ncbi.github.io/magicblast/</a></li>
<li>54. Tutorial on NCBI BLAST, accessed on January 20, 2026, <a href="https://biochem.slu.edu/bchm628/handouts/2013/4_BlastTutorial_2013.pdf">https://biochem.slu.edu/bchm628/handouts/2013/4_BlastTutorial_2013.pdf</a></li>
<li>55. Exercise 3: Why do I get no hits? \- National Library of Medicine, accessed on January 20, 2026, <a href="https://www.nlm.nih.gov/ncbi/workshops/2022-10_Basic-Web-BLAST/exercise-3.html">https://www.nlm.nih.gov/ncbi/workshops/2022-10_Basic-Web-BLAST/exercise-3.html</a></li>
<li>56. How do I download sequence records from the web in the NCBI Nucleotide and Protein databases? \- NLM Support Center \- NIH, accessed on January 20, 2026, <a href="https://support.nlm.nih.gov/kbArticle/?pn=KA-03461">https://support.nlm.nih.gov/kbArticle/?pn=KA-03461</a></li>

</ul>

</article>


  `,
};

export default article;
