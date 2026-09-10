import { Article } from "../../lib/types";
import f032_001 from "./article_images/f032_001.png";
import f032_002 from "./article_images/f032_002.png";

const article: Article = {
  id: "RK-2026-032",
  title: "Practical 5: Mutation and correct frame prediction ",
  date: "2026-03-15",
  tags: ["#Mutation", "#FramePrediction", "#Expasy"],
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

<h2>Practical -5: Problem Statement</h2>

<p>Assume that the original gene with the NCBI Accession no. [AM903378] is mutated at position no. 46th, 53th, 58th ,70th, 80th, 90th, 101th, and 1130th. Here, mutation patterns are: <b>A-> G</b>,<b> G -> A</b>, <b>T-> A</b>, <b>C -> A</b>. Translate the mutated gene sequence to the protein and then identify the correct protein with appropriate reading frame.</p>

<h2>1. Introduction</h2>
<p>In molecular genetics, a <b>reading frame</b> is a way of dividing the sequence of nucleotides in a DNA or RNA molecule into a set of consecutive, non-overlapping triplets. These triplets, known as codons, equate to specific amino acids or stop signals during translation. Because DNA is double-stranded, there are six possible reading frames: three in the forward direction (5' to 3') and three in the reverse complement direction (3' to 5'). Identifying the correct, or "open," reading frame (ORF) is crucial, as this is the frame that spans a long distance without encountering a premature stop signal, ultimately producing a viable, functional protein.</p>

<p><b>Mutations</b> are alterations in the genetic code. In this practical, we are dealing with point mutations (substitutions), where a single nucleotide is swapped for another (e.g., Adenine changing to Guanine). Even a single substitution can have a profound impact on the resulting protein. If a mutation introduces a premature stop codon, it leads to a truncated and often non-functional protein. Alternatively, it might change a single amino acid, potentially altering the protein's 3D shape and function. </p>

<p>To visualize and analyze these processes, we use bioinformatics tools. <b>ApE (A Plasmid Editor)</b> is a user-friendly software that allows us to view DNA sequences, manually edit specific nucleotide positions, and simulate mutations. <b>ExPASy Translate</b> is an online web server tool that translates a given nucleotide sequence into potential protein sequences across all six reading frames, making it visually easy to spot continuous protein sequences versus fragmented ones filled with stop codons.</p>

<h2>2. Objectives</h2>
<ol>
<li>Retrieve the target gene sequence from the NCBI database.</li>
<li>Predict potential reading frames using the ExPASy Translate tool for the wild-type (original) sequence.</li>
<li>Create specific point mutations at targeted positions using the ApE (A plasmid Editor) software.</li>
<li>Predict reading frames using the ExPASy Translate tool for the newly mutated sequence.</li>
<li>Draw an observation table comparing the ExPASy results and conclude how the mutations affected the protein's viability.</li>
</ol>

<h2>3. Requirements</h2>
<ul>
<li>A computer with a stable internet connection.</li>
<li>Web browser (Chrome, Firefox, Safari, etc.).</li>
<li>ApE - A plasmid Editor software installed on the computer.</li>
<li>Access to the NCBI (National Center for Biotechnology Information) database.</li>
<li>Access to the ExPASy Translate web tool.</li>
</ul>

<h2>4. Methods or Steps</h2>

<h3>Step 1: Retrieve the Sequence from NCBI</h3>
<ol>
<li>Open your web browser and navigate to the NCBI website.</li>
<li>In the search bar, select "Nucleotide" from the dropdown menu and type in the Accession Number <b>AM903378</b>.</li>
<li>Click on the resulting record to open the detailed view.</li>
<li>Click on the "FASTA" link to view the raw sequence data. Copy the entire sequence, excluding the first header line (the line starting with ">").</li>
</ol>

<h3>Step 2: Predict Frames Using ExPASy Translate for Wild-Type Sequence</h3>
<ol>
<li>Open a new tab and navigate to the ExPASy Translate tool website.</li>
<li>Paste the copied wild-type FASTA sequence into the main input box.</li>
<li>Click "Translate Sequence".</li>
<li>Observe the results across all six reading frames. Identify the frame that shows a continuous sequence of amino acids (a long-read) without interruptions. Take note of these observations for your table.</li>
</ol>

<h3>Step 3: Create Mutations Using ApE</h3>
<ol>
<li>Launch the ApE (A Plasmid Editor) software on your computer.</li>
<li>Paste the wild-type sequence into a new ApE document.</li>
<li>Use the cursor to navigate to the specific nucleotide positions assigned in the problem statement: 46th, 53rd, 58th, 70th, 80th, 90th, 101st, and 1130th.</li>
<li>At each position, apply the specific mutation pattern required by the problem statement:
<ul>
<li>If the nucleotide is <b>A</b>, change it to <b>G</b>.</li>
<li>If the nucleotide is <b>G</b>, change it to <b>A</b>.</li>
<li>If the nucleotide is <b>T</b>, change it to <b>A</b>.</li>
<li>If the nucleotide is <b>C</b>, change it to <b>A</b>.</li>
</ul>
</li>
<li>copy the modified sequence to Expasy.</li>
</ol>


<h3>Step 4: Predict Frames Using ExPASy Translate from Mutated Sequence</h3>
<ol>
<li>Open new ExPASy Translate tool in your web browser.</li>
<li>Paste your new, manually mutated sequence.</li>
<li>Click "Translate Sequence".</li>
<li>Carefully observe the new translation blocks. Note any new stop codons (often represented by dashes or breaks in the red highlighting) that may have fragmented your previously viable "long-read" protein.</li>
</ol>

<h2>5. Observations</h2>
<div style="display: flex; gap: 1rem; align-items: flex-start;">
  <figure class="science-figure" data-id="" data-clean-src="${f032_001}">
    <img src="${f032_001}" alt="ExPASy translation results showing the reading frames for the wild-type sequence" />
    <figcaption>ExPASy translation results for the <b>wild-type</b> AM903378 sequence.</figcaption>
  </figure>

  <figure class="science-figure" data-id="" data-clean-src="${f032_002}">
    <img src="${f032_002}" alt="ExPASy translation results showing the reading frames for the mutated sequence" />
    <figcaption>ExPASy translation results for the<b> mutated</b> sequence.</figcaption>
  </figure>
</div>

<table class="science-table" data-id="table-1">
<caption>Table 1: Quantitative Evaluation of ExPASy Translation Results for Wild-Type Sequence (AM903378).</caption>
<thead>
<tr>
<th>Reading Frame</th>
<th>Long-reads (> 1 line)</th>
<th>Short-reads (< 1 line)</th>
</tr>
</thead>
<tbody>
<tr>
<td>5'3' Frame 1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>5'3' Frame 2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>5'3' Frame 3</td>
<td>0</td>
<td>10</td>
</tr>
<tr>
<td>3'5' Frame 1</td>
<td>0</td>
<td>5</td>
</tr>
<tr>
<td>3'5' Frame 2</td>
<td>0</td>
<td>4</td>
</tr>
<tr>
<td>3'5' Frame 3</td>
<td>0</td>
<td>8</td>
</tr>
</tbody>
</table>

<table class="science-table" data-id="table-2">
<caption>Table 2: Quantitative Evaluation of ExPASy Translation Results for Mutated Sequence.</caption>
<thead>
<tr>
<th>Reading Frame</th>
<th>Long-reads (> 1 line)</th>
<th>Short-reads (< 1 line)</th>
</tr>
</thead>
<tbody>
<tr>
<td>5'3' Frame 1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>5'3' Frame 2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>5'3' Frame 3</td>
<td>0</td>
<td>10</td>
</tr>
<tr>
<td>3'5' Frame 1</td>
<td>0</td>
<td>5</td>
</tr>
<tr>
<td>3'5' Frame 2</td>
<td>0</td>
<td>4</td>
</tr>
<tr>
<td>3'5' Frame 3</td>
<td>0</td>
<td>8</td>
</tr>
</tbody>
</table>

<p>Both the wild-type and mutated sequences show that <b>5'3' Frame 2</b> is the only consistently translating frame without fragmentation.</p>

<h2>6. Conclusion</h2>
<p>Based on the quantitative evaluation of the ExPASy translation results, 5'3' Frame 2 remains the definitive viable open reading frame (ORF) for both the wild-type and mutated sequences. Despite the introduction of multiple targeted point mutations, the reading frame did not experience the insertion of any premature stop codons (nonsense mutations). This observation indicates that the induced point mutations were likely either synonymous (silent mutations that do not change the amino acid) or missense mutations (which alter individual amino acids but do not truncate the protein). Consequently, the overall structural continuity of the reading frame is conserved.</p>

</article>


  `,
};

export default article;
