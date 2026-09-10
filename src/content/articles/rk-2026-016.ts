import { Article } from "../../lib/types";
import f016_001 from "./article_images/016_001.png";
import f016_002 from "./article_images/016_002.png";
import f016_003 from "./article_images/016_003.png";
import f016_004 from "./article_images/016_004.png";
import f016_005 from "./article_images/016_005.png";
import f016_006 from "./article_images/016_006.png";
import f016_007 from "./article_images/016_007.png";

const article: Article = {
  id: "RK-2026-016",
  title: "Phylogenetic Tree construction using MEGA",
  date: "2026-02-05",
  tags: ["#PhylogeneticTree", "#MEGA", "#bioinformatics"],
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

<h2>1. Sequence Acquisition</h2>

<h3>1.1 How to do it:</h3>
<ol>
    <li>Open MEGA and navigate to <strong>Align</strong> &rarr; <strong>Edit/Build Alignment</strong>.</li>
    <li>A dialog box will appear. Select <strong>Retrieve a sequence from NCBI [Show Web Browser]</strong>. (Note: If you already have <code>.fasta</code> files on your computer, you would select "Retrieve from file" here).</li>
    <li>The internal browser will open. Search for your Gene/Protein (e.g., "16S rRNA E. coli").</li>
    <li>Once you have located the correct entry, click the button <strong>Add to Alignment</strong> at the top of the browser.</li>
</ol>

<figure class="science-figure" data-id="Figure: 1" data-clean-src="${f016_001}"> 
    <img src="${f016_001}" alt="Screenshot of the MEGA align option" />
</figure>

<figure class="science-figure" data-id="Figure: 1" data-clean-src="${f016_002}"> 
    <img src="${f016_002}" alt="Screenshot of the MEGA internal web browser showing the Add to Alignment button" />             
</figure>

<figure class="science-figure" data-id="Figure: 1" data-clean-src="${f016_003}">
    <img src="${f016_003}" alt="Screenshot of the MEGA alignment window showing the added sequences" />
<figcaption>Show Web browser: The internal NCBI browser in MEGA. Using this tool prevents copy-paste errors common with manual data entry.
</figcaption>
</figure>

<h2>2. Sequence Alignment</h2>

<p>Before we can compare differences between organisms, we must ensure we are comparing the "same" positions. This concept is called <strong>Positional Homology</strong>.</p>
Sequence alignment introduces "gaps" (dashes) to shift sequences so that column 10 in <em>Organism 1 seq.</em> corresponds to the evolutionarily equivalent spot in <em>Organism 2 seq.</em>.</p>

<h3>2.1 ClustalW / MUSCLE [vs] ClustalW (codon) / MUSCLE (codon) </h3>
<p>MEGA offers different "engines" or logical sets of rules to organize your data. The choice depends on the size of your dataset and the accuracy required.</p>

<figure class="science-figure" data-id="Figure: 2" data-clean-src="${f016_004}">
    <img src="${f016_004}" alt="Screenshot of the MEGA alignment options showing the different algorithms and modes" />
<figcaption>MEGA Alignment Options: The different alignment algorithms and modes available in MEGA. Choose the appropriate one based on your dataset size and biological context.</figcaption>
</figure>

<table class="science-table" data-id="tab2">
<caption>Table 1: Comparison of Alignment Algorithms in MEGA.</caption> 
<thead> 
    <tr> 
        <th>Feature</th>
        <th>Align by MUSCLE (Standard)</th>
        <th>Align by ClustalW (Classic)</th>
    </tr>
</thead>
<tbody> 
    <tr>
        <td><strong>The "Logic"</strong></td>
        <td><strong>Iterative.</strong> Think of this like writing a draft, editing it, and re-writing it. MUSCLE builds a draft alignment, then refines it repeatedly until the statistical score cannot be improved further.</td>
        <td><strong>Progressive.</strong> It builds a quick "guide tree" first and adds sequences one by one. Once a sequence is added, its position is "locked" and never re-adjusted.</td>
    </tr>
    <tr>
        <td><strong>Best Use Case</strong></td>
        <td>Use this for almost everything <sup><a href="#ref5">5</a></sup>. It is essential if you have >15 sequences or very long sequences.</td>
        <td>Use mainly for small, highly similar datasets, or if you are trying to replicate older studies that specifically used ClustalW.</td>
    </tr>
    <tr>
        <td><strong>Weakness</strong></td>
        <td>Slightly more computationally intensive (though negligible on modern computers).</td>
        <td><strong>The "Greedy" Error.</strong> If it makes a mistake early in the alignment (e.g., placing a gap wrong), that error propagates through the whole alignment and cannot be fixed.</td>
    </tr>
</tbody>
</table>

<p>In the MEGA alignment menu, the option to align by <strong>Codons</strong> can help facilitate better alignments based on the functional context of your DNA sequence.</p>


<table class="science-table" data-id="tab3">
<caption>Table 2: Choosing the Correct Alignment Mode.</caption> 
<thead> 
    <tr> 
        <th>Alignment Mode</th>
        <th>Biological Context</th>
        <th>Why use it?</th>
    </tr>
</thead>
<tbody> 
    <tr>
        <td><strong>Standard Align (DNA)</strong></td>
        <td><strong>Non-coding DNA</strong> (e.g., 16S rRNA, ITS regions, promoters).</td>
        <td>Treats every nucleotide (A, T, G, C) as an independent unit. Since these regions don't code for proteins, there are no "reading frames" to break.</td>
    </tr>
    <tr>
        <td><strong>Align by Codons</strong></td>
        <td><strong>Protein-Coding Genes</strong> (e.g., <em>COI</em>, <em>cytb</em>, <em>RAG1</em>).</td>
        <td><strong>Mandatory for coding genes.</strong> It recognizes that DNA is read in triplets (codons). It translates DNA to amino acids, aligns the proteins, and then maps the DNA back. This prevents "frameshift" errors where a gap is inserted in the middle of a codon, which would biologically destroy the protein function.</td>
    </tr>
</tbody>
</table>

<h2>3. Refining the Parameters: Tuning the Algorithm</h2>
<p>When you select MUSCLE [Recommended for most cases], you will see the <strong>Alignment Options</strong> window. These settings control the mathematical balance between matching bases and creating gaps. </p>

<figure class="science-figure" data-id="Figure: 3" data-clean-src="${f016_005}">
    <img src="${f016_005}" alt="Screenshot of the MEGA alignment options showing the different parameters" />
<figcaption>Alignment Options: The various parameters that can be adjusted to refine the alignment process, speed and accuracy. </figcaption>
</figure>

<h3>3.1 Gap Penalties</h3>
<p>Biological evolution involves point mutations (changing a letter) and Indels (insertions or deletions). In an alignment, Indels are represented by gaps (dashes). The "Gap Penalties" tell the computer how reluctant it should be to add these gaps.</p>

<ul>
    <li><strong>Gap Open (-400.00):</strong> This is the "toll fee" the computer pays to <em>start</em> a new gap. A high negative score acts as a deterrent. 
    <br><em>Tip:</em> If your alignment looks "choppy" (lots of tiny, scattered gaps), <strong>increase</strong> this penalty (e.g., to -600) to force the algorithm to create cleaner, contiguous blocks.</li>
    
    <li><strong>Gap Extend (0.00):</strong> This is the cost to make an existing gap <em>longer</em>. In biology, a single event (like a polymerase slippage) can delete 10 nucleotides just as easily as it can delete 1. Therefore, once the "toll fee" is paid (Gap Open), extending the gap is usually "free" or very cheap.</li>
</ul>

<h3>3.2 Clustering: UPGMA vs. UPGMB</h3>
<p>Before the final alignment is polished, the software builds a rough "guide tree" to decide which sequences are similar enough to be aligned first. The method you choose here depends on your sampling strategy.</p>

<table class="science-table" data-id="tab3">
<caption>Table 3: Clustering Methods for Guide Trees.</caption> 
<thead> 
    <tr> 
        <th>Method</th>
        <th>Mechanism</th>
        <th>When to use</th>
    </tr>
</thead>
<tbody> 
    <tr>
        <td><strong>UPGMA</strong></td>
        <td><strong>Unweighted Pair Group Method with Arithmetic Mean.</strong> It gives equal weight to every individual sequence.</td>
        <td>Use when your sampling is balanced (e.g., 10 sequences from Species A, 10 from Species B).</td>
    </tr>
    <tr>
        <td><strong>UPGMB</strong></td>
        <td><strong>Unweighted Pair Group Method with Bi-weighted Mean.</strong> It weights the <em>clusters</em> themselves.</td>
        <td>Use when you have <strong>uneven sampling</strong> (e.g., 50 sequences of <em>E. coli</em> and only 2 of <em>Bacillus</em>). It prevents the large <em>E. coli</em> group from mathematically dominating the calculation.</td>
    </tr>
</tbody>
</table>

<h3>3.3 Summary of Alignment Logic</h3>
<p>To synthesize the alignment parameters we've discussed, here is a quick-reference guide tailored to standard biological use cases. Always remember that these are starting points; you should visually inspect your alignment to ensure biological reality is preserved.</p>

<table class="science-table" data-id="table4">
<caption>Table 4: Alignment Decision Matrix for optimal settings in common biological scenarios.</caption>
<thead>
<tr>
<th>Scenario</th>
<th>Choice / Modification</th>
<th>Biological Reasoning</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>16S rRNA / 18S rRNA</strong></td>
<td>Align by MUSCLE (Standard)</td>
<td>Because these are non-coding structural RNAs, maintaining the triplet reading frame isn't necessary. Finding positional homology nucleotide-by-nucleotide is the primary goal.</td>
</tr>
<tr>
<td><strong>Functional Protein Gene</strong></td>
<td>Align by MUSCLE (Codons)</td>
<td>Crucial for maintaining the triplet reading frame. It prevents the software from inserting a gap that would cause a biologically fatal frameshift mutation in the resulting protein.</td>
</tr>
<tr>
<td><strong>Uneven Taxa Sampling</strong></td>
<td>Use UPGMB Clustering</td>
<td>If you have 50 sequences from one clade and 2 from another, UPGMB prevents the over-represented group from mathematically dominating and biasing the initial guide tree.</td>
</tr>
<tr>
<td><strong>Too many 1-bp gaps</strong></td>
<td>Increase Gap Open Penalty</td>
<td>A higher penalty acts as a strict "toll fee," discouraging the algorithm from unrealistically breaking the sequence into tiny fragments just to force a few nucleotide matches.</td>
</tr>
</tbody>
</table>

<h2>4. Final Step: Tree Building and Validation</h2>
<p>Once your sequences are perfectly aligned, you transition from data preparation to evolutionary inference. This involves choosing the right mathematical rules (the model) and then testing how trustworthy your resulting tree actually is.</p>

<h3>4.1. Find Best DNA/Protein Models (ML) (The Primary Choice)</h3>
<p>The <strong>Models</strong> panel in MEGA 11 is essentially the diagnostic center for your molecular data. Before building your final phylogeny, you must ensure your data doesn't violate the core assumptions of molecular evolution.</p>


<h3>4.2 Model Selection</h3>
<p>After your sequences are aligned, you must identify the mathematical "rules" that governed their evolution. The <strong>Find Best DNA/Protein Models</strong> tool provides a table of different possibilities, ranked by their statistical fit to your data.</p>

<h4>4.2.1. How to Read the Model Selection Table</h4>
<p>The table below represents the top results from a typical analysis. It identifies which mathematical filter describes your biological data with the highest precision.</p>

<table class="science-table" data-id="tab5">
<caption>Table 5: Top-ranked substitution models for a dataset.</caption>
<thead>
<tr>
<th>Model</th>
<th>Parameters</th>
<th>BIC</th>
<th>AICc</th>
<th>lnL</th>
<th>Invariant (+I)</th>
<th>Gamma (+G)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HKY+I</strong></td>
<td>101</td>
<td>15957.723</td>
<td>15891.126</td>
<td>-7935.544</td>
<td>0.41</td>
<td>n/a</td>
</tr>
<tr>
<td><strong>TN93+I</strong></td>
<td>111</td>
<td>15966.383</td>
<td>15893.130</td>
<td>-7935.542</td>
<td>0.41</td>
<td>n/a</td>
</tr>
<tr>
<td><strong>HKY+G+I</strong></td>
<td>111</td>
<td>15966.397</td>
<td>15893.144</td>
<td>-7935.549</td>
<td>0.00</td>
<td>200.00</td>
</tr>
</tbody>
</table>

<p>When looking at this table, the most important column is the <strong>BIC (Bayesian Information Criterion)</strong>.</p>
<ul>
    <li>Models with the <strong>lowest BIC scores</strong> are considered the best fit.</li>
    <li><strong>Why:</strong> BIC balances how well the model fits the data against the complexity of the model. It "penalizes" models that have too many unnecessary parameters, preventing over-fitting.</li>
    <li><strong>In the example above:</strong> <strong>HKY+I</strong> has the lowest BIC (15957.723) and is your best choice to input into the final tree builder.</li>
</ul>

<h2>5. Phylogeny: Choosing the Tree Method</h2>
<p>This menu determines the mathematical logic used to construct your tree.</p>
<figure class="science-figure" data-id="Figure: 4" data-clean-src="${f016_006}">
    <img src="${f016_006}" alt="Screenshot of the MEGA tree construction options showing the different methods" />
<figcaption>Tree Construction Methods: The various algorithms available for building phylogenetic trees, each with its own assumptions and best use cases.</figcaption>
</figure>
<ul>
    <li><strong>Maximum Likelihood Tree (ML):</strong> <strong>Recommended.</strong> Use this for almost all modern publications. It uses your specific substitution model (e.g., HKY) to calculate the statistical probability of every branch.</li>
    <li><strong>Neighbor-Joining Tree (NJ):</strong> A distance-based method. Very fast. Great for a "quick look" or if you have thousands of sequences where ML would crash your computer. Avoid for publication if your species are highly divergent.</li>
    <li><strong>Minimum Evolution Tree (ME):</strong> A "middle ground." It searches for the tree topology with the <strong>smallest total sum of branch lengths</strong> (the simplest evolutionary pathway). More rigorous than NJ but faster than ML.</li>
    <li><strong>Maximum Parsimony Tree (MP):</strong> Operates on "Occam's Razor" (the fewest mutations is the best explanation). Rarely used for highly variable DNA today because of "Long Branch Attraction" (incorrectly grouping fast-mutating species). Best for morphological traits.</li>
    <li><strong>UPGMA Tree:</strong> <strong>Avoid this for evolution.</strong> It assumes a strict "molecular clock" where evolution happens at the exact same speed in all branches, which is biologically unrealistic.</li>
</ul>

<h2>6. Fine-Tuning Maximum Likelihood (ML) Settings</h2>
<p>When you select Maximum Likelihood, you must configure the parameters to tell the algorithm how to search "Tree Space."</p>
<figure class="science-figure" data-id="Figure: 5" data-clean-src="${f016_007}">
    <img src="${f016_007}" alt="Screenshot of the MEGA maximum likelihood tree options showing the different parameters" />
<figcaption>ML Tree Options: The various settings that can be adjusted to refine the maximum likelihood tree construction process, including mutation rates, search strategy, and gap treatment.</figcaption>
</figure>


<h3>6.1. Rates and Patterns (Mutation Rates)</h3>
<p>Does every nucleotide in your sequence mutate at the same speed? Usually, no.</p>

<ul>
    <li><strong>Uniform Rates:</strong> Assumes all sites mutate equally. Rarely true in biology.</li>
    <li><strong>Gamma Distributed (G):</strong> <strong>Standard default.</strong> Acknowledges that some sites are mutational "hotspots" and others are "cold".</li>
    <li><strong>Has Invariant Sites (I):</strong> Assumes a percentage of your sites <strong>never change</strong> (e.g., critical structural domains in a protein).</li>
    <li><strong>Gamma + Invariant (G+I):</strong> The most complex. Only use this if your BIC table specifically recommended it.</li>
</ul>

<h3>6.2. Tree Inference Options (Search Strategy)</h3>
<p>MEGA cannot test every possible tree (there are trillions). It uses "heuristics" (shortcuts) to find the best one.</p>
<ul>
    <li><strong>Nearest-Neighbor-Interchange (NNI):</strong> Makes small, local swaps of branches to see if the tree score improves. <strong>Fastest option.</strong></li>
    <li><strong>Subtree-Pruning-Regrafting (SPR):</strong> Cuts off entire branches and re-attaches them to completely different parts of the tree to test new topologies. <strong>More thorough.</strong> Use SPR for final publications to ensure you don't get stuck in a "local optimum."</li>
</ul>

<h3>6.3. Gaps/Missing Data Treatment</h3>
<p>How do you handle the dashes (--) in your alignment?</p>
<ul>
    <li><strong>Complete Deletion:</strong> Deletes any column that has a gap in <em>even one</em> species. Best for extremely clean, high-quality datasets.</li>
    <li><strong>Partial Deletion (Default):</strong> Preserves columns unless the gap percentage exceeds a cutoff (e.g., 95%). Best for "messy" environmental data or sequences of slightly different lengths.</li>
</ul>

<h2>7. Summary Checklist for Your ML Run</h2>
<table class="science-table" data-id="tab6">
<caption>Table 6: Quick-reference checklist for final tree construction.</caption>
<thead>
<tr>
<th>Setting</th>
<th>Standard Recommendation</th>
<th>Why?</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model/Method</strong></td>
<td>Match the lowest BIC score.</td>
<td>Ensures biological accuracy based on your specific data.</td>
</tr>
<tr>
<td><strong>Rates and Patterns</strong></td>
<td>Gamma Distributed (G).</td>
<td>Accounts for biological reality that mutation rates vary across a gene.</td>
</tr>
<tr>
<td><strong>Heuristic Method</strong></td>
<td>SPR (Level 5).</td>
<td>A thorough search to ensure the most statistically likely topology is found.</td>
</tr>
<tr>
<td><strong>Bootstrap Replications</strong></td>
<td>1000.</td>
<td>Provides robust statistical confidence (>70 is good, >90 is strong).</td>
</tr>
</tbody>
</table>


</article>


  `,
};

export default article;
