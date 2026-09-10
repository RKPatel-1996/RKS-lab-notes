import { Article } from "../../lib/types";
import f030_001 from "./article_images/f030_001.png";

const article: Article = {
  id: "RK-2026-030",
  title: "eQTLS: gene expression & microarray",
  date: "2026-03-12",
  tags: ["#Gene", "#expression", "#eQTLS"],
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
<h2>1. GWAS & Gene-Expression</h2>

<p>
  <strong>Genome-wide association studies (GWAS)</strong> are large-scale investigations in human genetics used to compare millions of common genetic variants—typically <strong>single-nucleotide polymorphisms (SNPs)</strong>—between healthy individuals and those with a specific disease. While GWAS have successfully cataloged thousands of variants and revealed that most diseases are <strong>polygenic</strong> (influenced by many genes with small effects), they often leave biologists with a "black box" of statistical signals that lack a clear explanation.
</p>

<p>
  The primary challenge in interpreting these results is that majority of GWAS-identified variants reside in the <strong>non-coding regions</strong> of the genome. Because these variants do not change the "recipe" for a protein, their biological mechanisms are not immediately obvious. This is where <strong>gene expression</strong> becomes the critical missing link.
</p>



<h3>2. Gene Expression</h3>

<p>
  <strong>Gene expression</strong> is the fundamental process by which instructions in a cell's DNA are converted into a functional product, typically a protein. This process serves as the <strong>key determinant</strong> of a cell's <strong>phenotype</strong> (its observable traits). 
</p>

<p>
  The process primarily involves <strong>transcription</strong>, where the DNA sequence is read and copied into <strong>messenger RNA (mRNA)</strong>. This mRNA acts as the mobile "working template" for building proteins. Essentially, gene expression acts as the functional bridge between the static storage of the genome and the active machinery of the cell.
</p>



<h3>3. eQTLs: Solving the "Missing Link" of Non-Coding Variants</h3>

<p>
  Variation in gene expression among individuals is extremely common and highly heritable. Since most GWAS hits land in non-coding "dark matter," scientists have realized that these variants exert their effects by modulating the <strong>quantity, timing, and spatial distribution</strong> of gene expression rather than altering protein structure. 
</p>

<p>
  Genetic variants that influence these levels are known as <strong>expression quantitative trait loci (eQTLs)</strong>. By integrating GWAS findings with eQTL data, researchers can overcome two major biological hurdles:
</p>


    <h4>3.1 Disentangling Linkage Disequilibrium (LD)</h4> 
    <p>DNA is inherited in large blocks known as <strong>haplotypes</strong> <i>[a group of genes or DNA variations (such as SNPs) on a single chromosome that are inherited together from a single parent]</i>. This means that a "true" causal mutation—the one actually responsible for a disease—is often hidden among dozens of nearby, non-functional "passenger" variants. Because these variants are tightly correlated, they are almost always inherited together. Consequently, when a <strong>Genome-Wide Association Study (GWAS)</strong> identifies a statistical "hit," all the variants in that inherited block appear equally significant, making it impossible to tell which one is the actual driver of the trait based on statistics alone.</p>
    
    <p>To solve this, researchers use <strong>fine-mapping</strong> integrated with <strong>eQTL data</strong>. While a standard GWAS only tells us that a genomic <em>neighborhood</em> is associated with a disease, an eQTL tells us which specific variant in that neighborhood actually changes the "dosage" or quantity of <strong>messenger RNA (mRNA)</strong>.</p>
    
    <p>By overlapping these datasets, scientists can perform <strong>colocalization analysis</strong>. If the strongest statistical signal for a disease (the GWAS hit) perfectly aligns with the strongest statistical signal for a change in gene expression (the eQTL hit), it provides powerful evidence that the variant is <strong>causal</strong>. Essentially, the eQTL serves as a functional "filter," allowing biologists to ignore the "noise" of non-functional variants and pinpoint the exact genetic switch that is malfunctioning.</p>
    

    <h4>3.2 Identifying Target Genes</h4> 
    <p>A GWAS might find a hit near five different genes. By looking at eQTL data, a biologist can see which of those five genes actually sees a change in "volume" when that specific mutation is present, identifying the true driver of the disease.</p>
 


<p>
  In summary, while a GWAS provides the "map" of where disease risk lies, <strong>gene expression analysis</strong> and <strong>eQTL mapping</strong> provide the "mechanics," explaining exactly how a single-letter change in DNA alters the cellular dosage of mRNA to drive a human phenotype.
</p>


<h2>4. eQTLs</h2>

<p>
  <strong>Expression quantitative trait loci (eQTLs)</strong> are specific <b>regions or variations</b> within the genome that act as <b>statistical "links"</b> to the activity levels of certain genes. Think of them as the bridge between an organism's <strong>genotype</strong> (the DNA sequence) and its <strong>phenotype</strong> (the observable traits), specifically at the level of how much a gene is actually "turned on."
</p>


<p>
Essentially, an <strong>eQTL</strong> acts as a measurable link that connects three critical points: <strong>genetic variation</strong> (the mutation), <strong>mRNA quantity</strong> (the cellular activity), and the <strong>phenotype</strong> (the resulting trait or disease). While a mutation like a <strong>single-nucleotide polymorphism (SNP)</strong> represents a permanent change in the "instruction manual" of the DNA, it doesn't always tell us <em>how</em> a trait is affected. By measuring the amount of <strong>messenger RNA (mRNA)</strong>—which serves as the mobile "working copy" or template for building proteins—biologists can use eQTLs to quantify the exact relationship between a specific genetic "typo" and the cellular "dosage" of a gene.
</p>

<p>
In this framework, the eQTL serves as a functional readout: it proves that a mutation is not just sitting there idly, but is actively changing the volume of the gene's output. This allows researchers to establish a clear <strong>causal chain</strong>: the mutation changes the mRNA levels, the mRNA levels change the protein production, and the protein production ultimately shifts the organism's phenotype.
</p>

<figure class="science-figure" data-id="Figure 1" data-clean-src="${f030_001}">
<img src="${f030_001}" alt="A three-panel diagram illustrating wildtype, cis-eQTL, and trans-eQTL mechanisms." />
<figcaption><strong>Mechanistic differences between cis- and trans-eQTLs.</strong> <strong>(A)</strong> In the baseline wildtype state, a <strong>Transcription Factor (TF)</strong> gene produces proteins that bind to the promoters of target genes (Gene A and B) to drive normal expression. <strong>(B)</strong> In a <strong>cis-eQTL</strong>, a DNA polymorphism (the triangle) is located directly in the promoter of Gene A. This local change reduces the TF's ability to bind, specifically lowering the mRNA output of Gene A without affecting distant genes. <strong>(C)</strong> In a <strong>trans-eQTL</strong>, the mutation occurs within the TF gene itself. This acts as a "master switch" failure: because the TF protein production is reduced at the source, the expression of all downstream target genes (both A and B) drops simultaneously, regardless of their location in the genome. [<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3860407/" target="_blank">source</a>]</figcaption>
</figure>

<p>
  eQTLs could  be classified into two categories based on the physical distance between the genetic "switch" (the variant) and the "light" (the gene) it regulates:
</p>


<h3>4.1 Cis-eQTLs:</h3> 
<p>These are local genetic variants that sit very close to the gene they control. In molecular biology, "nearby" usually means the variant is within 1 megabase (1,000,000 DNA base pairs) of the gene's start site. Because they are physically adjacent on the same chromosome, they typically interfere with local control elements like the gene's own "on" switch.</p>


<h3>4.2 Trans-eQTLs:</h3> 
<p>These are distant variants that affect genes located far away, often on entirely different chromosomes. These usually work through a "middleman," such as a protein that is produced in one spot and then travels to a distant gene to change its expression.</p>


<table class="science-table" data-id="Table 1">
<caption>Table 1: Comparison of Cis- and Trans-eQTL Mechanisms.</caption>
<thead>
<tr>
<th>Feature</th>
<th>Cis-eQTL (Local)</th>
<th>Trans-eQTL (Distant)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Location</strong></td>
<td>Located near the gene it regulates (usually < 1 Megabase).</td>
<td>Located far away or on a different chromosome.</td>
</tr>
<tr>
<td><strong>Directness</strong></td>
<td>Directly affects the gene's own control switches (promoters/enhancers).</td>
<td>Indirectly affects the gene via a "middleman" (like a Transcription Factor).</td>
</tr>
<tr>
<td><strong>Effect Size</strong></td>
<td>Typically has a stronger, easier-to-detect effect on mRNA levels.</td>
<td>Often has a subtle effect but can influence many genes at once.</td>
</tr>
</tbody>
</table>




<h2>5. Genetic basis for expression variation</h2>

<p>
  It is important to remember that eQTLs are not biological "events" created by the cell in real-time; rather, they are <strong>inherited genetic variations</strong>—like SNPs, small <strong>indels</strong> (insertions or deletions of a few DNA letters), or larger structural changes—that exist naturally in a population. These variations alter gene expression through several biological "hacks":
</p>

<h3>5.1 Disrupting Regulatory Elements:</h3> 
<p>Most eQTLs are <b>found in the non-coding "dark matter"</b> of the genome. They often land in <strong>promoters</strong> (located right before a gene) or <strong>enhancers</strong> (can be further away). A mutation here can change the DNA sequence so that a <strong>Transcription Factor (TF)</strong>—a specialized protein that "grabs" the DNA to turn a gene on—can no longer bind effectively. If the TF protein can't stick, the gene's expression turned down.</p>

<h3>5.2 Structural Variations (SVs):</h3> 
<p>These are large-scale changes like <strong>deletions</strong> (losing a chunk of DNA), <strong>duplications</strong> (accidentally making extra copies), or <strong>insertions</strong>. For example, if a genetic variant causes a gene to be duplicated, the cell has more "templates" to work with, leading to higher levels of mRNA. This is often referred to as a <b>"gene dosage" effect</b>.</p>

<h3>5.3 Cascading Trans Effects:</h3> 
<p>A variant acts as a trans-eQTL by changing a regulatory molecule. For instance, if a mutation causes the cell to<b> produce a more "active" version of a Transcription Factor</b>, that protein will then travel throughout the nucleus, binding to and turning on dozens of other target genes across the genome.</p>

<h2>6. Applications</h2>

<p>
  eQTL data is a foundational tool in modern genetics, helping scientists solve complex biological puzzles:
</p>

<h3>6.1 Bridging the Gap in GWAS</h3> 
<p><strong>Genome-Wide Association Studies (GWAS)</strong> are used to find DNA mutations linked to diseases. However, over many of these <b>mutations are found in non-coding regions</b>, leaving biologists wondering <b>what they actually do</b>. eQTLs provide the "missing link" by proving that these mutations aren't just "junk"—they are active "regulators" that change how much of a specific disease-related gene is produced.</p>
  
<h3>6.2 Understanding Tissue-Specific Biology</h3> 
<p>DNA is same in all cells hence all cells in body have the same mutations but a mutation might behave differently in a heart cell compared to a lung cell. Large-scale projects like <strong>GTEx (<a href="https://gtexportal.org/home/" target="_blank">Genotype-Tissue Expression</a>)</strong> use eQTL mapping to see how genetic variants act across different organs. This helps researchers determine if a specific mutation is causing trouble in the pancreas (related to diabetes) or in the muscles.</p>
 
<h3>6.3 Advancing Personalized Medicine</h3> 
<p>By identifying how DNA variation influences regular biology, scientists can better understand <strong>pharmacogenomics</strong>—why some people react well to a drug while others experience side effects. Knowing a patient's eQTL profile allows doctors to predict disease risk and tailor treatments to that individual's unique genetic expression patterns.</p>

<h3>6.4 Mapping Gene Regulatory Networks</h3> <p>Because some eQTLs act as "master switches" for many genes, biologists use this data to draw maps of how genes "talk" to each other. This identifies <strong>"hub" genes</strong>—the most critical players in a cellular pathway—which are the best targets for developing new drugs to fix cellular malfunctions.</p>



<h2>7. Microarrays</h2>

<p>
A <strong>microarray</strong> is a genomic technology historically used to measure and profile the <strong>expression levels</strong> of thousands of genes simultaneously. Before the advent of modern sequencing, this was the primary tool for looking at the "active" part of the genome.
</p>

<p>
The technology utilizes a solid surface (often a glass slide) covered with thousands of microscopic spots. Each spot contains specific <strong>probe sequences</strong>—short strands of DNA designed to match specific <strong>gene transcripts</strong>. When a biological sample is applied to the slide, the <strong>mRNA</strong> from the sample binds (hybridizes) to its matching probe. By labeling the sample with a fluorescent dye, researchers can measure <strong>signal intensities</strong>: a brighter spot means more mRNA was present, providing a quantitative measurement of gene expression.
</p>

<h3>7.1 Understanding Gene Expression Patterns</h3>

<p>
To accurately understand gene expression patterns, the raw "glow" from a microarray must undergo rigorous processing to ensure the data represents biology rather than technical noise:
</p>

<ul>
<li>
<strong>Normalization:</strong> The signal intensities are background-corrected and normalized to remove <strong>batch effects</strong> (differences caused by processing samples on different days) or outlier measurements.
</li>
<li>
<strong>Adjusting for Covariates:</strong> Researchers mathematically adjust the data to control for <strong>confounding biological variables</strong> such as the age, sex, or post-mortem interval of the tissue donor.
</li>

</ul>

<h4>7.2 Discovery of eQTLs</h4>

<p>
In the early days of <strong>eQTL mapping</strong>, microarrays provided the foundational data needed to link <strong>genetic mutations</strong> to <strong>RNA production</strong>. The discovery process typically follows this flow:
</p>

<ol>
<li>
<strong>Data Integration:</strong> Researchers take the normalized gene expression data (the "how much") and pair it with the individuals' <strong>genotype data</strong> (the "which SNP do they have").
</li>

<li>
<strong>eQTL Identification:</strong> If the correlation is strong, that variant is labeled an <strong>eQTL</strong>. Many landmark studies, such as those mapping regulatory variants in the human liver, were built entirely on this microarray-based framework.
</li>
</ol>

<h4>7.3 Limitations and the Shift to RNA-Sequencing (RNA-seq)</h4>

<p>
While microarrays revolutionized genetics, they have notable limitations compared to modern <strong>Next-Generation Sequencing (NGS)</strong>. Microarrays have a lower <strong>dynamic range</strong>, meaning they<b> struggle to detect genes with very low expression levels</b>. Furthermore, they are "closed systems"—<b>you can only detect genes that you have already designed probes for</b>.
</p>

<p>
Traditional microarrays also make it difficult to study <strong>alternative RNA splicing (sQTLs)</strong> or <strong>allele-specific expression</strong>, where one copy of a gene is more active than the other. Because of this, modern projects like <strong>GTEx</strong> primarily use <strong>RNA-seq</strong>.
</p>

<table class="science-table" data-id="Table 4">
<caption>Table 4: Microarray vs. RNA-Sequencing in eQTL Studies.</caption>
<thead>
<tr>
<th>Feature</th>
<th>Microarray</th>
<th>RNA-Sequencing (RNA-seq)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Detection Method</strong></td>
<td>Hybridization to fixed probes.</td>
<td>Direct sequencing of all RNA molecules.</td>
</tr>
<tr>
<td><strong>Sensitivity</strong></td>
<td>Lower; misses lowly expressed genes.</td>
<td>High; captures the full dynamic range.</td>
</tr>
<tr>
<td><strong>Discovery Potential</strong></td>
<td>Limited to known genes on the chip.</td>
<td>Can discover new transcripts and <strong>splicing variants</strong>.</td>
</tr>
<tr>
<td><strong>Data Distribution</strong></td>
<td>Normal (Gaussian), easy for linear models.</td>
<td>Count-based (Poisson/Negative Binomial).</td>
</tr>
</tbody>
</table>


</article>


  `,
};

export default article;
