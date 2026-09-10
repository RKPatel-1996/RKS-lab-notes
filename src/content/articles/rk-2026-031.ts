import { Article } from "../../lib/types";
import f031_001 from "./article_images/f031_001.png";
import f031_002 from "./article_images/f031_002.png";
import f031_003 from "./article_images/f031_003.png";
import f031_004 from "./article_images/f031_004.png";
import f031_005 from "./article_images/f031_005.png";
import f031_006 from "./article_images/f031_006.png";
import f031_007 from "./article_images/f031_007.png";
import f031_008 from "./article_images/f031_008.png";
import f031_009 from "./article_images/f031_009.png";
import f031_010 from "./article_images/f031_010.png";
import f031_011 from "./article_images/F031_011.png";
import f031_012 from "./article_images/f031_012.png";
import f031_013 from "./article_images/f031_013.png";
import f031_014 from "./article_images/f031_014.png";
import f031_015 from "./article_images/f031_015.png";
import f031_016 from "./article_images/f031_016.png";
import f031_017 from "./article_images/f031_017.png";

const article: Article = {
  id: "RK-2026-031",
  title: "Practical 4: MEGA- Phylogenetic tree plotting",
  date: "2026-03-15",
  tags: ["#Tree", "#Phylogenetic Tree", "#MEGA"],
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

<h2>Practical -4: Problem Statement</h2>
<p>[A] Plot the phylogenetic tree using MEGA to identify the close relative of <i>P. aeruginosa</i> among any 9 other gram negative bacteria from NCBI-GenBank.</p>

<h2>1. Introduction</h2>
<p>Phylogenetics is the study of evolutionary relationships among biological entities. A phylogenetic tree is a branching diagram that visually represents these relationships, where branches indicate the genetic distance and evolutionary lineage from common ancestors. For bacterial identification and evolutionary studies, the 16S ribosomal RNA (rRNA) gene is widely used as a "molecular clock" because it is highly conserved across species but contains hypervariable regions that can distinguish between different taxa. MEGA (Molecular Evolutionary Genetics Analysis) is a robust software platform used for sequence alignment, evolutionary analysis, and the construction of phylogenetic trees.</p>

<h2>2. Objectives</h2>
<ol>


<li>To retrieve the 16S rRNA gene sequence of <i>Pseudomonas aeruginosa</i> and 9 other Gram-negative bacteria from the NCBI GenBank database.</li>

<li>To perform a Multiple Sequence Alignment (MSA) of the retrieved sequences.</li>
<li>To construct a phylogenetic tree using MEGA software.</li>
<li>To analyze the resulting tree to determine the closest evolutionary relative to <i>P. aeruginosa</i> within the selected dataset.</li>
</ol>

<h2>3. Requirements</h2>
<ul>
  <li><b>Hardware:</b> A computer or laptop with an internet connection.</li>
  <li><b>Database:</b> NCBI GenBank (https://www.ncbi.nlm.nih.gov/genbank/).</li>
  <li><b>Software:</b> MEGA (Molecular Evolutionary Genetics Analysis) installed on the system.</li>
  <li><b>Data:</b> 16S rRNA gene sequences of Gram-negative bacteria (e.g., <i>Escherichia coli</i>, <i>Salmonella enterica</i>, <i>Klebsiella pneumoniae</i>, <i>Acinetobacter baumannii</i>, <i>Proteus vulgaris</i>, <i>Neisseria gonorrhoeae</i>, <i>Vibrio cholerae</i>, <i>Helicobacter pylori</i>, <i>Campylobacter jejuni</i> and <i>Pseudomonas aeruginosa</i>).</li>
</ul>

<h2>4. Methods or Steps</h2>

<h3>Step 1: Sequence Retrieval</h3>
<ol>
  <li>Navigate to ALIGN  =>  Query Databanks options and connect to NCBI database.</li>
  <li>Search for "Pseudomonas aeruginosa 16s rRNA" and click search.</li>
  <li>If necessary, filter the results to find a complete or near-complete sequence (usually <b>around 1,500 base pairs</b>).</li>
  <li>Click on "FASTA" link to open sequence </li>
  <li>Click on "GenBank" to open the full summary page</li>
  <li>Once on "GenBank" page click "Add To Alignment" at the top of page</li>
  <li>Add "first word" "second word" "third word" and "fourth word" from drop down panels click "OK" and sequence will be added in the </li>
  <li>Repeat this process for other organisms. Add all FASTA sequences into alignment explorer.</li>
</ol>

<h3>Step 2: Sequence Alignment in MEGA</h3>
<ol>
  <li>Once all sequences are added in Alignment Explorer, Select all sequences (Ctrl+A) and click on <b>Alignment</b> => <b>Align by MUSCLE</b>. Use the default parameters and execute the alignment via clicking "OK". </li>
  <li>Once aligned, examine the data to ensure the sequences match up well. Save the alignment session in aln session (.mas).</li>
</ol>

<h3>Step 3: Model selection</h3>
<ol>
  <li>Return to the main MEGA window and click on <b>MODELS</b>.</li>
  <li>Select <b>Find Best DNA/Protein Models(ML)</b>.</li>
  <li>Open your saved .mas alignment file.</li>
  <li>if prompted "Protein-coding nucleotide Data" click "NO"</li>
  <li>In the Analysis Preferences window, keep defaults in place and click "OK". </li>
  <li>In Results panel look at the first row identify the model for your data.</li>
</ol>

<h3>Step 4: Phylogenetic Tree Construction</h3>
<ol>
  <li>Return to the main MEGA window and click on <b>Phylogeny</b>.</li>
  <li>Select Maximum Likelihood Tree option.</li>
  <li>Open your saved .mas alignment file.</li>
  <li>In the Analysis Preferences window,select the model previously suggested by Models result panel. </li>
  <li>Click <b>Compute</b> to generate the tree.</li>
  <li>Read the tree and draw your conclusions.</li>
</ol>

<h2>5. Observations</h2>
<figure class="science-figure" data-id="" data-clean-src="${f031_017}">
<img src="${f031_017}" alt="Screenshot of the final phylogenetic tree generated in MEGA, displaying evolutionary relationships among the taxa with bootstrap values, accompanied by a detailed explanatory text box below it." />
<figcaption>The final Maximum Likelihood phylogenetic tree, displaying the inferred evolutionary relationships among the selected bacterial strains. Bootstrap consensus values are shown at the nodes, accompanied by a detailed methodological summary below the tree.</figcaption>
</figure>
<p>The generated phylogenetic tree, inferred using the Maximum Likelihood method, displays the evolutionary relationships among the 10 Gram-negative bacterial taxa based on their 16S rRNA sequences. By analyzing the topology, distinct clades can be identified, such as the upper cluster containing <i>Escherichia coli</i>, <i>Salmonella enterica</i>, and <i>Klebsiella pneumoniae</i>, and the bottom cluster containing <i>Helicobacter pylori</i> and <i>Campylobacter jejuni</i>. Locating the branch for <i>Pseudomonas aeruginosa</i> DSM 50071, we can trace it back to its most recent internal node. It forms a distinct sister pair with <i>Acinetobacter baumannii</i> DSM 30007. The bootstrap consensus (derived from 34 adaptively determined replicates) shows a value of 100 at the node shared exclusively by these two species.</p>

<h2>6. Conclusion</h2>
<p>By interpreting the Maximum Likelihood phylogenetic tree constructed from the 16S rRNA gene alignments, it was determined that the closest evolutionary relative to <i>Pseudomonas aeruginosa</i> among the selected dataset of Gram-negative bacteria is <b><i>Acinetobacter baumannii</i></b>, as they share the most recent common ancestor. This relationship is supported by a bootstrap value of <b>100</b>%, indicating a <b>very high</b> level of statistical confidence in this evolutionary grouping.</p>



<h2>Images</h2>

<h3>Sequence Retrieval:</h3>

<figure class="science-figure" data-id="Figure 1" data-clean-src="${f031_001}">
<img src="${f031_001}" alt="" />
<figcaption>Screenshot of the Molecular Evolutionary Genetics Analysis (MEGA) software interface, highlighting the "Query Databanks" option within the "ALIGN" dropdown menu.</figcaption>
</figure>
 <figure class="science-figure" data-id="Figure 2" data-clean-src="${f031_002}">
<img src="${f031_002}" alt="Screenshot of the MEGA Web Browser displaying the NCBI Nucleotide database. The search bar containing the text 'Pseudomonas aeruginosa 16s rRNA', the 'Search' button, and the 'Add To Alignment' button are highlighted with blue rectangles." />
<figcaption>The MEGA Web Browser interface accessing the NCBI Nucleotide database. The image highlights the search bar with the query "Pseudomonas aeruginosa 16s rRNA", the "Search" button, and the "Add To Alignment" feature at the top of the window.</figcaption>
</figure>

      <figure class="science-figure" data-id="Figure 3" data-clean-src="${f031_003}">
<img src="${f031_003}" alt="Screenshot of NCBI Nucleotide search results in the MEGA Web Browser, with the 'FASTA' link highlighted beneath the top result." />
<figcaption>Search results for the queried sequence in the NCBI Nucleotide database, highlighting the "FASTA" link to view the sequence in FASTA format.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 4" data-clean-src="${f031_004}">
<img src="${f031_004}" alt="Screenshot of a sequence in FASTA format within the MEGA Web Browser, highlighting the 'GenBank' link to switch views." />
<figcaption>The selected sequence displayed in FASTA format. The "GenBank" link is highlighted, which navigates back to the detailed GenBank record.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 5" data-clean-src="${f031_005}">
<img src="${f031_005}" alt="Screenshot of a GenBank sequence record in the MEGA Web Browser. The 'Add To Alignment' button is highlighted, and an 'Input Sequence Label' dialog is open." />
<figcaption>The GenBank record view. Clicking the highlighted "Add To Alignment" button opens the "Input Sequence Label" dialog, allowing for customization of the sequence name before importing.</figcaption>
</figure>
<figure class="science-figure" data-id="Figure 6" data-clean-src="${f031_006}">
<img src="${f031_006}" alt="Screenshot of the MEGA Alignment Explorer showing the imported DNA sequence, with its label highlighted in the left column." />
<figcaption>The MEGA Alignment Explorer window displaying the successfully imported DNA sequence, with the customized species label highlighted on the left.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 7" data-clean-src="${f031_007}">
<img src="${f031_007}" alt="Screenshot of NCBI Nucleotide search results for Neisseria gonorrhoeae 16S rRNA in the MEGA Web Browser, highlighting the 1,466 bp length and GenBank link." />
<figcaption>Search results for the *Neisseria gonorrhoeae* sequence. The sequence length (1,466 bp) and the "GenBank" link are highlighted.</figcaption>
</figure>

<h3>Multiple sequence alignment:</h3>

<figure class="science-figure" data-id="Figure 8" data-clean-src="${f031_008}">
<img src="${f031_008}" alt="Screenshot of the MEGA Alignment Explorer showing ten unaligned DNA sequences loaded, with the list of species names highlighted in the left column." />
<figcaption>The MEGA Alignment Explorer window showing a compilation of ten unaligned DNA sequences gathered from the database, ready for multiple sequence alignment.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 9" data-clean-src="${f031_009}">
<img src="${f031_009}" alt="Screenshot of the MEGA Alignment Explorer with the Alignment menu expanded, highlighting the 'Align by MUSCLE' option." />
<figcaption>Initiating the sequence alignment process by selecting the "Align by MUSCLE" option from the "Alignment" dropdown menu.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 10" data-clean-src="${f031_010}">
<img src="${f031_010}" alt="Screenshot of the 'Save file as' dialog in the MEGA Alignment Explorer. The save icon, file name 'Tree_10', and save as type 'Aln Session' are highlighted." />
<figcaption>Saving the completed alignment. The image highlights the save icon, the chosen file name ("Tree_10"), and the designated file type as an Alignment Session (.mas).</figcaption>
</figure>


<h3>Model selection:</h3>

<figure class="science-figure" data-id="Figure 11" data-clean-src="${f031_011}">
<img src="${f031_011}" alt="Screenshot of the main MEGA window with the MODELS menu expanded, highlighting the 'Find Best DNA/Protein Models (ML)...' option." />
<figcaption>Returning to the main MEGA interface to determine the optimal evolutionary model by selecting "Find Best DNA/Protein Models (ML)..." under the "MODELS" tab.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 12" data-clean-src="${f031_012}">
<img src="${f031_012}" alt="Screenshot of the 'Choose a Data File to Analyze' dialog in MEGA, highlighting the previously saved 'Tree_10.mas' file and the 'All files (*.*)' filter." />
<figcaption>Selecting the saved alignment session file ("Tree_10.mas") from the directory to perform the model analysis.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 13" data-clean-src="${f031_013}">
<img src="${f031_013}" alt="Screenshot of the 'Analysis Preferences' dialog in MEGA for Model Selection, displaying settings for Statistical Method, Substitution Model, and System Resource Usage." />
<figcaption>The "Analysis Preferences" dialog box for Model Selection, where parameters such as the Statistical Method, handling of gaps/missing data, and threading are configured before execution.</figcaption>
</figure>
</article>


<figure class="science-figure" data-id="Figure 14" data-clean-src="${f031_014}">
<img src="${f031_014}" alt="Screenshot of a results table in MEGA titled 'Maximum Likelihood analysis of substitution models,' with the top-ranking model 'TN93+G+I' highlighted." />
<figcaption>Results of the model selection analysis. The table ranks the substitution models, with the best-fit model (TN93+G+I) highlighted at the top based on the lowest Bayesian Information Criterion (BIC) score.</figcaption>
</figure>


<h3>Tree building:</h3>
<figure class="science-figure" data-id="Figure 15" data-clean-src="${f031_015}">
<img src="${f031_015}" alt="Screenshot of the main MEGA interface with the PHYLOGENY menu expanded, highlighting the 'Construct/Test Maximum Likelihood Tree...' option." />
<figcaption>Initiating the phylogenetic tree construction by selecting "Construct/Test Maximum Likelihood Tree..." from the "PHYLOGENY" menu on the main interface.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 16" data-clean-src="${f031_016}">
<img src="${f031_016}" alt="Screenshot of the 'Analysis Preferences' dialog in MEGA for Likelihood Phylogeny Reconstruction, highlighting the 'Tamura-Nei model' selected under the Model/Method setting." />
<figcaption>Configuring the Analysis Preferences for tree construction. The image highlights the crucial step of selecting the previously identified best-fit model (Tamura-Nei) for the Model/Method parameter.</figcaption>
</figure>

<figure class="science-figure" data-id="Figure 17" data-clean-src="${f031_017}">
<img src="${f031_017}" alt="Screenshot of the final phylogenetic tree generated in MEGA, displaying evolutionary relationships among the taxa with bootstrap values, accompanied by a detailed explanatory text box below it." />
<figcaption>The final Maximum Likelihood phylogenetic tree, displaying the inferred evolutionary relationships among the selected bacterial strains. Bootstrap consensus values are shown at the nodes, accompanied by a detailed methodological summary below the tree.</figcaption>
</figure>


  `,
};

export default article;
