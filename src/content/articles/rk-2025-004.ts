
import { Article } from "../../lib/types";

// Using a placeholder for the image since the local asset was not provided.
// In a real environment, this would be: import ncbiFlatFileImg from "./article_images/ncbi_flat_file.png";
const ncbiFlatFileImg = "https://placehold.co/800x500/f4f4f0/111111?text=NCBI+Flat+File+Format+Example";

const article: Article = {
  id: "RK-2025-004",
  title: "Guide to Primary Biological Databases",
  date: "2025-12-04",
  tags: ["#Database", "#PrimaryDatabases", "#bioinformatics"],
  type: "report",
  template: "standard",
  readTime: "30 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt:
    'Primary database are the archives—such as GenBank for DNA sequences, the Protein Data Bank (PDB) for 3D structures, and the Sequence Read Archive (SRA) for raw sequencing output—serve as the "source of truth." Unlike secondary databases that interpret findings, primary repositories store raw experimental data directly from researchers, ensuring reproducibility and global access.',
  content: `

<section>
<h2>1. Introduction: The Archives of Life</h2>
<p>Modern biology runs on data. We have moved from studying single genes in isolation to analyzing entire systems, a shift driven by machines that generate massive amounts of digital information. In this ecosystem, the <strong>Primary Database</strong> is the foundation. These are not just storage folders; they are the permanent, unchangeable records of scientific history, holding the raw output from sequencing machines and experiments @ddbjDDBJ2025 @bensonGenBank2005 @embl-ebiEMBLEBIHomepage.</p>

<p>A primary database is defined by how close it is to the source. Unlike secondary databases—which curate and interpret data to tell you what it means—primary databases store data directly from the researcher. They act as the "source of truth." When a scientist sequences a genome, they must deposit that raw data into a primary database to publish their findings. This ensures that others can check the work and build upon it.</p>

<p>These archives, such as <strong>GenBank</strong> and the <strong>Protein Data Bank (PDB)</strong>, are characterized by their "archival" nature. Once a record is submitted, it is assigned a permanent accession number that never changes, even if our understanding of that data evolves.</p>
</section>

<section>
<h2>2. The Nucleotide Foundation: INSDC</h2>
<p>The largest collection of raw genetic data is managed by the <strong>International Nucleotide Sequence Database Collaboration (<a href="https://www.insdc.org">INSDC</a>)</strong> @insdcInternationalNucleotideSequence. This is a partnership between three major organizations:</p>
<ul>
<li><strong><a href="https://www.ncbi.nlm.nih.gov">NCBI</a></strong> (USA)</li>
<li><strong><a href="https://www.ebi.ac.uk">EMBL-EBI</a></strong> (Europe)</li>
<li><strong><a href="https://www.ddbj.nig.ac.jp/index-e.html">DDBJ</a></strong> (Japan)</li>
</ul>

<p>The key to this system is <strong>synchronization</strong>. These three centers exchange new data daily. If a researcher in Tokyo submits a sequence to DDBJ, a scientist in the US can find it on GenBank within days. While they share the same data, they offer different tools and interfaces for their local communities.</p>

<h3>2.1 GenBank: The Global Standard</h3>
<p>Managed by the NCBI, GenBank is the most famous primary database. It houses everything from short gene fragments to complete genomes @bensonGenBank2005.</p>

<p><strong>Exponential Growth:</strong> The database doubles in size roughly every 18 months. As of August 2025, GenBank held over <strong>47 trillion bases</strong> of DNA @genbankGenBankWGSStatistics2025.</p>

<p>To visualize this computational scale, if we treat each base as a 2-bit unit, the theoretical binary storage size \\( S \\) for a count of bases \\( N \\) is:</p>

$$ S_{bits} = N \\times 2 $$

<p>This equates to roughly <strong>11.75 Terabytes</strong> of raw text data just for the sequence strings alone, excluding annotations. Most of this data comes from <a href="https://www.ncbi.nlm.nih.gov/genbank/wgs/">Whole Genome Shotgun</a> (WGS) projects [<a href="https://www.ncbi.nlm.nih.gov/genbank/genomesubmit/">submission guidelines</a>], but there is also a massive amount of plant, bacterial, and viral data.</p>

<p><strong>The Flat File:</strong> Data in GenBank is stored in a specific format known as a "Flat File." Key elements include:</p>
<ul>
<li><strong>ACCESSION:</strong> The unique ID (e.g., U12345) that serves as the permanent citation.</li>
<li><strong>VERSION:</strong> Tracks updates (e.g., U12345.1 becomes U12345.2).</li>
<li><strong>FEATURES:</strong> The scientific annotations, such as where genes start and stop.</li>
</ul>

<p>Visit <a href="https://www.ncbi.nlm.nih.gov/nuccore/U12345">NCBI Flat File Format</a> for more details.</p>

<figure class="science-figure" data-id="FIG-4.1" data-clean-src="${ncbiFlatFileImg}">
      <img src="${ncbiFlatFileImg}" alt="NCBI flat file format" />
      <figcaption> NCBI flat file format for human readable data sharing (Source: NCBI, Used for illustrative purposes).</figcaption>
    </figure>

</section>

<section>
<h2>3. The Structural Dimension: Protein Data Bank (PDB)</h2>
<p>While GenBank stores the "code" of life, the <strong>Protein Data Bank (PDB)</strong> stores the "shape." It is the single global archive for the 3D structures of proteins and biological molecules.</p>

<h3>3.1 The Resolution Revolution</h3>
<p>As of 2025, the PDB holds over <strong>245,000 entries</strong>. The way scientists determine these structures is changing:</p>
<ul>
<li><strong>X-ray Crystallography:</strong> The traditional method, still producing about 9,000 structures a year.</li>
<li><strong>Cryo-Electron Microscopy (EM):</strong> The fastest-growing method. It allows scientists to see large, complex molecules that were previously impossible to map. EM submissions jumped from roughly 400 in 2016 to over 6,400 in 2025.</li>
</ul>

<h3>3.2 AI Integration</h3>
<p>A major shift is the inclusion of <strong>Computed Structure Models (CSM)</strong>. PDB portals now index over 1 million structures predicted by AI tools like AlphaFold. These are clearly marked so researchers know the difference between an experimental result (Gold standard) and an AI prediction (Silver/Bronze standard).</p>
</section>

<section>
<h2>4. The High-Throughput Tsunami: Sequence Read Archive (SRA)</h2>
<p>Modern sequencing machines produce too much data for traditional databases like GenBank. The <strong>Sequence Read Archive (SRA)</strong> was built to hold this raw "high-throughput" data.</p>

<p><strong>The Challenge:</strong> The SRA is massive, holding nearly <strong>60 petabytes</strong> of data. It is often called an "information lake"—a vast ocean of data that can be hard to navigate without good maps (metadata).</p>

<p><strong>The Solution:</strong> Because the data is too big to download, the NIH moved the SRA to the cloud (AWS and Google Cloud). This allows biologists to bring their code to the data rather than trying to bring the data to their computers.</p>
</section>

<section>
<h2>5. Functional Genomics: Gene Expression Omnibus (GEO)</h2>
<p>If GenBank tells us what a cell <em>can</em> do, the <strong>Gene Expression Omnibus (GEO)</strong> tells us what it <em>is doing</em>. It stores gene expression profiles—snapshots of which genes are turned on or off under specific conditions.</p>

<p><strong>Democratizing Analysis:</strong> GEO is famous for its tool <strong>GEO2R</strong>. This web-based program allows biologists who don't know how to code to compare samples (e.g., "Tumor" vs. "Normal") and find which genes are driving a disease.</p>
</section>

<section>
<h2>6. Emerging Frontiers: Single-Cell and Spatial Omics</h2>
<p>Biology is moving from analyzing "smoothies" (bulk tissue) to analyzing "fruit salads" (individual cells).</p>

<ul>
<li><strong>Human Cell Atlas (HCA):</strong> This portal stores data from <strong>Single-Cell RNA Sequencing</strong>. It organizes data into networks (e.g., Heart, Lung) and lets users visualize cell types interactively.</li>
<li><strong>STOmicsDB:</strong> This database handles <strong>Spatial Transcriptomics</strong>. It maps gene expression to specific physical locations on a tissue slice, preserving the spatial context that standard sequencing loses.</li>
</ul>

</section>

<section>
<h2>7. Beyond DNA: Proteomics, Metabolomics, and Clinical Data</h2>
<p><strong>Proteomics:</strong> The <strong>PRIDE</strong> database is the central hub for mass spectrometry data, allowing researchers to verify the presence of specific proteins.</p>

<p><strong>Metabolomics:</strong> Databases like <strong>MetaboLights</strong> and <strong>MetaboBank</strong> store data on small molecules (metabolites). This data is complex and heavy, often requiring special transfer protocols.</p>

<p><strong>Clinical Variation:</strong> <strong>ClinVar</strong> links genetic mutations to human health. It uses a "star rating" system to show how reliable the data is. A variant reviewed by an expert panel (3 or 4 stars) is considered a gold standard, helping doctors make better diagnoses.</p>
</section>

<section>
<h2>8. Applications: Using the Archives</h2>
<p>These databases are the active workspaces of modern science.</p>

<table class="science-table" data-id="table-db-applications">
<caption>Table 1: Primary Databases and their core applications</caption>
<thead>
<tr>
<th>Application</th>
<th>Database</th>
<th>How it Works</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Identify a Gene</strong></td>
<td>GenBank</td>
<td>Use <strong>BLAST</strong> to match an unknown sequence against the database to predict its function.</td>
</tr>
<tr>
<td><strong>Drug Design</strong></td>
<td>PDB</td>
<td>Download 3D structures of viruses to simulate how new drugs might attach to them.</td>
</tr>
<tr>
<td><strong>Find Biomarkers</strong></td>
<td>GEO</td>
<td>Re-analyze public cancer data to find genes that are always "on" in tumors.</td>
</tr>
<tr>
<td><strong>Diagnose Patients</strong></td>
<td>ClinVar</td>
<td>Check if a patient's mutation has been seen before and if it is harmful.</td>
</tr>
</tbody>
</table>
</section>

<section>
<h2>9. Conclusion</h2>
<p>Primary databases are the global memory of biological discovery. As data moves to the cloud and AI tools like AlphaFold become standard, these archives are evolving from simple storage units into hybrid engines of discovery. By keeping this raw data open and accessible, we ensure that a discovery made today can fuel the medical breakthroughs of tomorrow.</p>
</section>

  `,
};

export default article;
