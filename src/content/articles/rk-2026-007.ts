import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-007",
  title: "OMIM & HGMD: Secondary Mutation Databases",
  date: "2026-01-01",
  tags: ["#HGMD", "#OMIM", "#SecondaryDatabase", "#Genomics"],
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
    This interactive page serves as a dynamic lecture aid for mastering OMIM and HGMD. The application utilizes a dashboard layout to break complex database structures into digestible modules. Students can explore OMIM’s entry types using an interactive prefix decoder and visualize the massive scale difference between gene discovery and mutation logging through dynamic growth charts. A direct comparison table clarifies distinct use cases—phenotypes versus variants—while the "Clinical Workflow" section maps out the real-world diagnostic logic used by geneticists. This tool effectively bridges the gap between theoretical database statistics and practical clinical application
`,
  content: `


<article>
<div style="text-align: center; margin: 30px 0;">
    <a href="https://rkpatel-1996.github.io/OMIM_and_HGMD/" 
       target="_blank" 
       rel="noopener noreferrer" 
       style="
           display: inline-block;
           padding: 15px 30px;
           background: linear-gradient(135deg, #45f5f6 0%, #00a8cc 100%);
           color: #003d4d;
           font-family: system-ui, -apple-system, sans-serif;
           font-size: 16px;
           font-weight: 700;
           text-decoration: none;
           text-transform: uppercase;
           letter-spacing: 1px;
           border: none;
           border-radius: 50px;
           box-shadow: 0 4px 15px rgba(0, 168, 204, 0.4);
           transition: all 0.3s ease;
           cursor: pointer;
       "
       onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(0, 168, 204, 0.6)';"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0, 168, 204, 0.4)';"
    >
        Interactive OMIM & HGMD Page
    </a>
</div>

<h2>1 Introduction: The Epistemology of Genetic Databases</h2>

<p>Mapping the human genome transformed medicine, shifting our focus from simply observing symptoms to understanding their molecular causes. However, the raw DNA code—all 3 billion letters of it—is clinically useless on its own. To turn this data into medical treatments, we need a strong system to understand how genetic changes affect physiology. Biological databases provides the basic foundation to achieve this goal.</p>

<p>Among the many resources available to geneticists, Online Mendelian Inheritance in Man (OMIM) and the Human Gene Mutation Database (HGMD) are the most essential. While both are critical for clinical genetics and research, they serve different purposes. OMIM acts as an encyclopedia, connecting disease symptoms to their genetic causes through detailed summaries. In contrast, HGMD serves as a definitive catalog, listing specific disease-causing mutations collected from scientific literature.</p>

<p>This article is designed to serve as a reference for students and professionals, dissecting the databases’ histories, structural architectures, curation methodologies, and clinical applications. Discussion is designed to give quick notes on how to deal with these databases to get most out of them for beginners.</p>

<h3>1.1 The Necessity of Curation in the Big Data Era</h3>

<p>The advent of Next-Generation Sequencing (NGS) has resulted in an exponential accumulation of genetic data. However, data quantity does not equate to information quality. The scientific literature is fragmented, with findings scattered across thousands of journals and decades of research. "Curation"—the active management and appraisal of data—is the process that bridges this gap. Both OMIM and HGMD rely heavily on manual curation, a labor-intensive process where domain experts (typically PhD-level scientists) review, evaluate, and extract information from published papers. This "human-in-the-loop" approach ensures a high level of fidelity and context but introduces significant challenges regarding scalability and the management of historical data that may no longer meet modern standards of evidence</p>.

<h2>2. Theoretical Framework: Primary vs. Secondary Databases</h2>

<h3>2.1 Primary Databases: The Archival Layer</h3>
<p>
In bioinformatics, a primary database is defined as <b>an archival repository</b> that accepts experimental data directly from submitters. These databases serve as the permanent record of scientific output. The hallmark of a primary database is that the data is owned by the submitter, not the database maintainers. The database acts as a custodian, ensuring the data is accessible and formatted correctly, but <b>typically performs minimal curation regarding the scientific validity of the content</b>.
</p>

<p>Examples:</p>
  <ol>
    <li><b>GenBank (part of INSDC):</b> Stores <em>nucleotide sequences</em> submitted by researchers. If a researcher submits a sequence with an error, it remains in the database until the submitter corrects it.</li>
    <li><b>dbSNP:</b> Stores data on short genetic variations (<em>Single Nucleotide Polymorphisms</em>). It accepts submissions of observed variation from sequencing projects, regardless of whether the variation has a known function or clinical impact.</li>
    <li><b>ClinVar:</b> A primary archive for <em>interpretations</em>. Clinical laboratories submit their assertions about the pathogenicity of variants. The database records <em>who said what about a variant</em>, but does not independently verify the claim.</li>
  </ol>

<h3>2.2 Secondary Databases: The Curated Layer</h3>

<p>A secondary database (or derived database) <b>does not accept direct submissions</b> of raw experimental data. Instead, <b>it aggregates, filters, annotates, and organizes data derived from primary databases </b>and, crucially, from the scientific literature. The value proposition of a secondary database is curation. The content is generated by the database's own staff, who synthesize disparate pieces of information into a coherent whole.</p>

<p>OMIM and HGMD are classical Secondary Databases.</p>
  <ul>
<li>They do not generate their own sequencing data.</li>
     <li>They do not accept raw BAM/VCF files from sequencing machines.</li>
   <li>Their "raw material" is the published, peer-reviewed scientific paper.</li>
  </ul>
 
<h3>2.3 The Flow of Information</h3>

<p>Here, it needs to be clarify that the data is being generated in some lab. Generated data is then published as paper (Primary Literature). Along side this publication it it mandatory to submit sequences to GenBank (Primary Database). Curators at OMIM and HGMD read the literature, extract the relevant findings, and create structured entries (Secondary Database). Finally, clinicians and doctors consult these secondary databases to interpret new findings in patients, completing the cycle of translation.</p>

<table class="science-table" data-id="database-classification">
<caption>Table 1: Classification of Major Genetic Databases</caption>
    <thead>
      <tr>
          <th>Feature</th>
          <th>Primary Database (e.g., GenBank, ClinVar)</th>
          <th>Secondary Database (e.g., OMIM, HGMD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>Data Source</td>
          <td>Direct submission from researchers/labs.</td>
          <td>Curated from literature and primary databases.</td>
      </tr>
      <tr>
          <td>Curation Level</td>
          <td>Low/Automated (Quality Control only).</td>
          <td>High/Manual (Expert synthesis and review).</td>
      </tr>
      <tr>
          <td>Redundancy</td>
          <td>High (Multiple entries for the same gene/variant).</td>
          <td>Low (Non-redundant, unified entries).</td>
      </tr>
      <tr>
          <td>Responsibility</td>
          <td>The Submitter is responsible for accuracy.</td>
          <td>The Curator/Database is responsible for accuracy.</td>
      </tr>
      <tr>
          <td>Role in Lecture</td>
          <td>"Raw Evidence"</td>
          <td>"Synthesized Knowledge"</td>
      </tr>
    </tbody>
    </table>

<h2>3 Online Mendelian Inheritance in Man (OMIM)</h2>

<p>OMIM is the authoritative, continuously updated compendium of human genes and genetic phenotypes. It is not merely a database of mutations; it is a knowledgebase that captures the evolving understanding of the human genetic map. It provides the "nosology"—the classification and naming—of genetic disease.</p>

<h3>3.1 Historical Evolution: From Print to Pixel</h3>

<p>The history of OMIM is synonymous with the history of medical genetics itself.</p>
<p>
  
  <b>The Print Era (1966–1998):</b> The project began in the early 1960s under the stewardship of Dr. Victor A. McKusick at Johns Hopkins University. The first edition of _Mendelian Inheritance in Man_ (MIM) was published in 1966, containing approximately 1,400 entries. It was designed as a catalog of autosomal dominant, autosomal recessive, and X-linked phenotypes.2
</p>
 <p><b>The Digital Transition (1985–1995):</b> Recognizing the limitations of a printed text in a rapidly expanding field, the database was computerized in 1964. It became accessible online (as OMIM) in 1985/1987 via the Welch Medical Library at Johns Hopkins. This makes OMIM one of the oldest continuously operating online resources in biology, predating the World Wide Web itself.12</p>
<p><b>The NCBI Era (1995–2010):</b> For fifteen years, OMIM was distributed through the National Center for Biotechnology Information (NCBI). This integration with Entrez allowed for seamless linking between phenotypic descriptions and sequence data (GenBank), laying the groundwork for modern bioinformatics.2</p>
<p><b>The Modern Era (2011–Present):</b> In January 2011, the official website <a href="omim.org">omim.org</a> was launched, maintained by the <a href="https://www.hopkinsmedicine.org/genetic-medicine">McKusick-Nathans Institute of Genetic Medicine</a>. This marked a shift toward a richer, more interactive interface, allowing for advanced searching, API access, and the visualization of phenotypic series.14</p>

<h3>3.2 Structure and Anatomy of an Entry</h3>

<p>An OMIM entry is a structured text document that serves as a review article for a specific gene or disease.</p>

<ul>
  <li><b>Textual Summary:</b> Each entry contains a narrative summary of the history, clinical features, biochemical features, and molecular genetics of the entity.</li>
  <li><b>References:</b> A curated list of key references that define the entity. Unlike PubMed, which lists everything, OMIM lists only the most significant papers.</li>
  <li><b>Clinical Synopsis:</b> A concise, tabular anatomical listing of the clinical features associated with a disorder. This allows clinicians to quickly scan for key symptoms (e.g., "Ears: Low-set ears").15</li>
  <li><b>Gene Map: </b>A critical feature that links the phenotype to its chromosomal location. The "Gene Map" is a tabular database within OMIM that brings together genes and phenotypes, facilitating the identification of positional candidates for disease.14</li>
</ul>

<h3>3.3 The OMIM Numbering System (MIM Numbers)</h3>

<p>The backbone of OMIM's organization is the <b>MIM number</b>—<em>a unique, stable, six-digit identifier assigned to every entry</em>. These numbers are strictly typed, meaning the first digit indicates the mode of inheritance or the era of creation. This system allows for immediate recognition of the nature of an entry.12</p>

<table class="science-table" data-id="MIM-numbering-system">
    <caption>
        Table 2: The Logic of MIM Numbers
    </caption>
    <thead>
      
      <tr>
          <th>First Digit</th>
          <th>Classification</th>
          <th>Historical Context</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>1 (100000-)</td>
        <td>Autosomal Dominant</td>
        <td>Entries created before May 15, 1994\.</td>
    </tr>
    <tr>
        <td>2 (200000-)</td>
        <td>Autosomal Recessive</td>
        <td>Entries created before May 15, 1994\.</td>
    </tr>
    <tr>
        <td>3 (300000-)</td>
        <td>X-Linked</td>
        <td>Loci or phenotypes on the X chromosome.</td>
    </tr>
    <tr>
        <td>4 (400000-)</td>
        <td>Y-Linked</td>
        <td>Loci or phenotypes on the Y chromosome.</td>
    </tr>
    <tr>
        <td>5 (500000-)</td>
        <td>Mitochondrial</td>
        <td>Loci or phenotypes on the mitochondrial genome.</td>
    </tr>
    <tr>
        <td>6 (600000-)</td>
        <td>Autosomal</td>
        <td>All autosomal entries created _after_ May 15, 1994\.</td>
    </tr>
    </tbody>
</table>

<p><b>Note on Allelic Variants:</b> While the main entry has a 6-digit number (e.g., 141900 for the <i>HBB</i> gene), specific mutations are designated by a decimal extension (e.g., 141900.0001 for the Hemoglobin S mutation). OMIM does not catalog all variants, only those that are historically significant or unique.12</p>

<h3>3.4 The Prefix Classification System</h3>

<p>The symbol preceding the MIM number are critical for understanding the "status" of the entry—whether it represents a gene, a disease, or a mystery.</p>

<table class="science-table" data-id="OMIM-prefixes">
    <caption>
        Table 3: OMIM Entry Prefixes
    </caption>
    <thead>
    <tr>
        <th>Symbol</th>
        <th>Description</th>
        <th>Implication for Lecture</th>
    </tr>
    </thead>
<tbody>
    <tr>
        <td>Asterisk (*)</td>
        <td>Gene</td>
        <td>A gene of known sequence. The entry focuses on the gene itself (cloning, expression, function).</td>
    </tr>
    <tr>
        <td>Number Sign (#)</td>
        <td>Phenotype (Molecular Basis Known)</td>
        <td>A descriptive entry for a disorder where the causative gene is known. The entry focuses on the disease. (e.g., # 119600 Cystic Fibrosis).</td>
    </tr>
    <tr>
        <td>Plus Sign (+)</td>
        <td>Gene and Phenotype Combined</td>
        <td>The entry describes both the gene and the phenotype. Used when the distinction is not separated (often older entries).</td>
    </tr>
    <tr>
        <td>Percent Sign (%)</td>
        <td>Phenotype (Molecular Basis Unknown)</td>
        <td>A Mendelian phenotype is confirmed, and linkage to a chromosome may be known, but the specific gene has not been identified.</td>
    </tr>
    <tr>
        <td>Null (No Symbol)</td>
        <td>Suspected Phenotype</td>
        <td>A phenotype where the Mendelian basis is suspected but not proven.</td>
    </tr>
    <tr>
        <td>Caret (^)</td>
        <td>Moved/Removed</td>
        <td>An archival marker indicating the entry has been deleted or merged.</td>
    </tr>
    </tbody>
</table>

<h3>3.5 Statistics and Growth (2026)</h3>

OMIM is a living document. As of the most recent <a href="https://www.omim.org/statistics/entry">updates in 14th January 2026</a>, the database continues to expand daily.

<table class="science-table" data-id="OMIM-entry-statistics">
<caption>Table 4: Number of Entries in OMIM (Updated January 14th, 2026)</caption> 
<thead>
                        <tr>
                            <th >
                                MIM Number Prefix
                            </th>
                            <th >
                                Autosomal
                            </th>
                            <th >
                                X Linked
                            </th>
                            <th >
                                Y Linked
                            </th>
                            <th >
                                Mitochondrial
                            </th>
                            <th >
                                Totals
                            </th>
                        </tr>
                    </thead>                           
                                <tr>
                                    <td>
                                        Gene description &nbsp; <strong><span >*</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 16,848 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 801 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 53 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 37 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%2A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 17,739 </a>
                                    </td>
                                </tr>                        
                                <tr>
                                    <td>
                                        Phenotype description, molecular basis known &nbsp; <strong><span >#</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 6,651 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 396 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 5 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 35 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%23&amp;sort=number+asc&amp;start=1&amp;limit=10"> 7,087 </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phenotype description or locus, molecular basis unknown &nbsp; <strong><span >%</span></strong>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,380 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 110 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 4 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 0 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:%25&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,494 </a>
                                    </td>
                                </tr>                        
                                <tr>
                                    <td>
                                        Other, mainly phenotypes with suspected mendelian basis
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,632 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 99 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 3 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none+AND+chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=prefix:none&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,735 </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Totals
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome_group:A&amp;sort=number+asc&amp;start=1&amp;limit=10"> 26,511 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:X&amp;sort=number+asc&amp;start=1&amp;limit=10"> 1,406 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:Y&amp;sort=number+asc&amp;start=1&amp;limit=10"> 65 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=chromosome:M&amp;sort=number+asc&amp;start=1&amp;limit=10"> 73 </a>
                                    </td>
                                    <td>
                                        <a href="/search?index=entry&amp;search=NOT+prefix:\%5E&amp;sort=number+asc&amp;start=1&amp;limit=10"> 28,055 </a>
                                    </td>
                                </tr>
                    </tbody>
                </table>

<h3>3.6 Curation Philosophy: The "Intellectual" Approach</h3>
<p>
    OMIM's curation is "intellectual" and synthetic. A curator does not simply scrape data; they read the paper to understand the developments. If a paper claims a gene causes a disease, the OMIM curator evaluates the strength of the evidence. If the evidence is weak, they may note the association but label it "<em>Pending Confirmation.</em>" This editorial oversight makes OMIM a trusted source for established knowledge, protecting the user from the noise of unverified claims.
</p>

<h2>4. Human Gene Mutation Database (HGMD)</h2>

<p>If OMIM is the textbook, HGMD is the catalog. It is a dedicated effort to collate all known (published) gene lesions responsible for human inherited disease. HGMD aims to be exhaustive for mutations that result in disease.3</p>

<h3>4.1 History and Ownership</h3>

<p>HGMD was established in 1996 by the Institute of <a href="https://www.cardiff.ac.uk/about/honours-and-awards/queens-anniversary-prizes/institute-of-medical-genetics">Medical Genetics at Cardiff University, UK</a>. Its original purpose was to facilitate the scientific study of mutational mechanisms (e.g., why certain DNA sequences are prone to mutation).3 However, as clinical genetics expanded, HGMD became the <em>de facto</em> central repository for disease mutations.</p>

<p>Currently, HGMD operates under a hybrid model:</p>

<ul>
  <li>Academic Roots: The content is still curated by the team at Cardiff University.</li>   
  <li>Commercial Distribution: The "Professional" version is licensed exclusively by Qiagen.</li>
  <li>Public Access: A restricted "Public" version exists, but it serves primarily as a teaser for the full version (see Section 4.4).</li>
</ul>

<h3>4.2 Classification of Variants: The DM System</h3>

<p>HGMD uses a specific nomenclature to classify variants based on the <em>evidence</em> presented in the literature. This classification is vital for clinical interpretation, as it tells the user how confident the original authors were in their findings.</p>

<table class="science-table" data-id="HGMD-variant-classifications">
    <caption>
        Table 5: HGMD Variant Classifications
    </caption>
    <thead>
    <tr>
        <th>Class Code</th>
        <th>Full Name</th>
        <th>Definition</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>DM</td>
        <td>Disease-causing Mutation</td>
        <td>The core category. The literature reports a causal link between the variant and the disease. (Note: This reflects the <em>author&#39;s</em> claim, not necessarily absolute truth).</td>
    </tr>
    <tr>
        <td>DM?</td>
        <td>Likely Disease-causing</td>
        <td>A variant reported as pathogenic, but with some doubt. The doubt may come from the original author, the HGMD curator, or subsequent conflicting literature.</td>
    </tr>
    <tr>
        <td>DP</td>
        <td>Disease-associated Polymorphism</td>
        <td>A variant associated with disease (often via GWAS or case-control studies) but not a direct Mendelian cause. It implies a risk factor or susceptibility allele.</td>
    </tr>
    <tr>
        <td>DFP</td>
        <td>DP with Functional Evidence</td>
        <td>A disease-associated polymorphism (DP) that also has experimental evidence (e.g., a luciferase assay) showing it alters gene function.</td>
    </tr>
    <tr>
        <td>FP</td>
        <td>Functional Polymorphism</td>
        <td>A variant that has a functional effect (e.g., changes expression levels) but has <em>no reported disease association</em> yet.</td>
    </tr>
    <tr>
        <td>R</td>
        <td>Retired</td>
        <td>An entry that has been removed, usually because it was found to be erroneous (e.g., a sequencing error in the original paper).</td>
    </tr>
    </tbody>
</table>

<h3>4.3 Content and Statistics (2024.4)</h3>

<p>HGMD is the largest curated dataset of germline mutations in the world. Official statics for recent releases are available at <a href="https://www.hgmd.cf.ac.uk/ac/stats.php"> HGMD publics stats page</a>.</p>

<table class="science-table" data-id="HGMD-entry-statistics">
<caption>Table 6: Number of entries HGMD Professional release 2024.4 in public and private HGMD</caption>
<thead>
<tr>
<th>Data type</th>
<th>Entry Num. (public)</th>
<th>Entry Num. Professional 2024.4</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Mutation totals</b></td>
<td><b>291329</b></td>
<td><b>510804</b></td>
</tr>
<tr><td>Missense/nonsense</td>
<td>169205</td>
<td>319190</td>
</tr>
<tr>
<td>Splicing</td>
<td>25088</td>
<td>42559
</td>
</tr>
<tr><td>Regulatory</td><td>4749</td><td>6953</td></tr><tr><td>Small deletions</td><td>41994</td><td>67065</td></tr><tr><td>Small insertions</td><td>17867</td><td>29310</td></tr><tr><td>Small indels</td><td>3834</td><td>5416</td></tr><tr><td>Repeat variations      </td><td>573</td><td>702</td></tr><tr><td>Gross insertions/duplications      </td><td>5224</td><td>7580</td></tr><tr><td>Complex rearrangements      </td><td>2299</td><td>2950</td></tr><tr><td>Gross deletions      </td><td>20496</td><td>29079</td></tr><tr><td colspan="3"><b>Gene/sequence data</b></td></tr><tr><td>Genes</td><td>11772</td><td>18959</td></tr><tr><td>cDNA reference sequences</td><td>11603</td><td>18754</td></tr></tbody></table>

<h3>4.4 The Critical Distinction: HGMD Public vs. Professional</h3>

<p>A student using HGMD Public to analyze a patient's genome in 2026 will miss every mutation discovered between 2023 and 2026\. This renders the Public version unsuitable for clinical diagnosis</p>

<table class="science-table" data-id="HGMD-public-vs-professional">
    <caption>
        Table 7: HGMD Public vs. HGMD Professional
    </caption>
    <thead>
    <tr>
        <th>Feature</th>
        <th>HGMD Public (Free)</th>
        <th>HGMD Professional (Paid)</th>
    </tr>
    </thead>
<tbody>   
   <tr>
        <td>Data Currency</td>
        <td>3-Year Embargo. Displays only mutations published more than 3 years ago.</td>
        <td>Up-to-Date. Updated quarterly with the latest literature.</td>
    </tr>
    <tr>
        <td>Mutation Count</td>
        <td>Significantly fewer (missing the last \~75,000 mutations).</td>
        <td>Full database (\~528,000+ entries).</td>
    </tr>
    <tr>
        <td>Search Capabilities</td>
        <td>Basic (Gene symbol, phenotype).</td>
        <td>Advanced (Chromosomal coordinates, VCF batch search, Next-Gen Sequencing integration).</td>
    </tr>
    <tr>
        <td>Genomic Coordinates</td>
        <td>Not provided (or limited).</td>
        <td>Full hg19/hg38 coordinates provided.</td>
    </tr>
    <tr>
        <td>Access</td>
        <td>Registered academic/non-profit users only.</td>
        <td>Commercial license required.</td>
    </tr>
    </tbody>
</table>

<h2>5.  Comparative Analysis: OMIM vs. HGMD</h2>

<p>While both databases are "secondary" and literature-based, they serve different masters. Their comparison elucidates the different needs of the genetic community.</p>

<h3>5.1 The Primary/Secondary Reference Confusion</h3>

<p>HGMD introduces a unique twist on the "secondary" terminology. Within HGMD, a distinction is made between "Primary References" and "Secondary References" regarding the entries themselves:</p>

<p><b>Primary Reference:</b> The paper that first reported the mutation and linked it to the disease.</p>
<p><b>Secondary Reference:</b> Subsequent papers that provided additional evidence (e.g., functional studies, additional families).</p>
  <p>This internal classification allows users to trace the history of a specific variant's characterization.</p>

<h3>5.2 Scope and Granularity</h3>
<p><b>OMIM is Gene/Disease Centric:</b> It aggregates information <em>at the level of the gene</em>. It will mention that "multiple mutations in <em>CFTR</em> cause Cystic Fibrosis" and may describe the delta-F508 mutation in detail, but it will not list all 2,000+ known <em>CFTR</em> mutations.
</p>
<p><b>HGMD is Variant Centric:</b> It aggregates information <em>at the level of the nucleotide</em>. It will list every single one of the 2,000+ <em>CFTR</em> mutations, along with the specific paper that reported each one.</p>

<h3>5.3 Case Study: Resolving a "Mystery" Variant</h3>

<p>Imagine a clinician finds a variant, <b>c.123A>G</b>, in the <em>GBA</em> gene in a patient with Gaucher disease.</p>

<p><b>Search OMIM:</b> The clinician searches for "Gaucher disease." OMIM provides the clinical synopsis (hepatosplenomegaly, bone pain) and confirms that <em>GBA</em> is the causative gene (# 606463). It provides a narrative of the disease mechanism.</p>
<p><b>Search HGMD: </b>The clinician searches for c.123A>G in <em>GBA</em>. HGMD Pro returns a hit, identifying it as a "DM" (Disease Mutation) and providing a link to a 1998 paper by <em>Smith et al 1998</em>.</p>
<p><b>Synthesis:</b> The OMIM entry confirms the biological plausibility. The HGMD entry confirms the specific mutation has been seen before. The diagnosis is supported.</p>

<h2>Conclusion</h2>

<p>In the landscape of human genetics, OMIM and HGMD represent the bridge between raw data and medical understanding. They are "secondary" databases in architecture but "primary" resources in practice.</p>

<p>OMIM is the custodian of the clinical and molecular identity of genetic disease. Its rigorous numbering system and prefix codes provide the structured vocabulary necessary for clinicians to communicate about disorders.</p>
<p>HGMD is the custodian of the mutational spectrum. Its massive, manually curated catalogue allows laboratories to determine if a specific change in a patient's DNA has ever been seen before in the context of disease.</p>

<h2>Works cited</h2>
<ul style="list-style-type: none;">
<li>1. Automated validation of genetic variants from large databases: ensuring that variant references refer to the same genomic locations-NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC3051330/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3051330/)</li>
<li>2. Online Mendelian Inheritance in Man (OMIM), a knowledgebase of human genes and genetic disorders \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC539987/](https://pmc.ncbi.nlm.nih.gov/articles/PMC539987/)</li>
<li>3. The Human Gene Mutation Database: building a comprehensive mutation repository for clinical and molecular genetics, diagnostic testing and personalized genomic medicine \- PMC \- PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC3898141/](https://pmc.ncbi.nlm.nih.gov/articles/PMC3898141/)</li>
<li>4. Bioinformatic Challenges Detecting Genetic Variation in Precision Medicine Programs \- PMC \- PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9024231/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9024231/)</li>
<li>5. The Curation of Genetic Variants: Difficulties and Possible Solutions \- PubMed Central \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5054708/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5054708/)</li>
<li>6. Manual Curation vs. Artificial Intelligence: Can Automated Variant Evidence Retrieval Replace Human Judgment? \- QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/wp-content/uploads/2024/02/HGMD_White-Paper_Manual-Curation-Vs-AI_1021_PROM_19471_001_1126335_WW.pdf](https://digitalinsights.qiagen.com/wp-content/uploads/2024/02/HGMD_White-Paper_Manual-Curation-Vs-AI_1021_PROM_19471_001_1126335_WW.pdf)</li>
<li>7. The Human Gene Mutation Database (HGMD®): optimizing its use in a clinical diagnostic or research setting \- PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7497289/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7497289/)</li>
<li>8. ClinVar and HGMD genomic variant classification accuracy has improved over time, as measured by implied disease burden \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10347827/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10347827/)</li>
<li>9. HGMD \- QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/wp-content/uploads/2020/06/HGMD_Pro_Global_Document_2020.2.pdf](https://digitalinsights.qiagen.com/wp-content/uploads/2020/06/HGMD_Pro_Global_Document_2020.2.pdf)</li>
<li>10. The Online Mendelian Inheritance in Man (OMIM) Database, accessed on January 2, 2026, [https://worldneurologyonline.com/article/the-online-mendelian-inheritance-in-man-omim-database/](https://worldneurologyonline.com/article/the-online-mendelian-inheritance-in-man-omim-database/)</li>
<li>11. OMIM \- Database Commons, accessed on January 2, 2026, [https://ngdc.cncb.ac.cn/databasecommons/database/id/109](https://ngdc.cncb.ac.cn/databasecommons/database/id/109)</li>
<li>12. Online Mendelian Inheritance in Man \- Wikipedia, accessed on January 2, 2026, [https://en.wikipedia.org/wiki/Online_Mendelian_Inheritance_in_Man](https://en.wikipedia.org/wiki/Online_Mendelian_Inheritance_in_Man)</li>
<li>13. How we're curating OMIM: It's not as easy as you think \- Golden Helix, accessed on January 2, 2026, [https://www.goldenhelix.com/blog/curating-omim/](https://www.goldenhelix.com/blog/curating-omim/)</li>
<li>14. OMIM.org: Online Mendelian Inheritance in Man (OMIM®), an online catalog of human genes and genetic disorders | Nucleic Acids Research | Oxford Academic, accessed on January 2, 2026, [https://academic.oup.com/nar/article/43/D1/D789/2439148](https://academic.oup.com/nar/article/43/D1/D789/2439148)</li>
<li>15. OMIM.org: Online Mendelian Inheritance in Man (OMIM®), an online catalog of human genes and genetic disorders \- PubMed Central, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4383985/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4383985/)</li>
<li>16. The Online Mendelian Inheritance in Man (OMIM) Database \[World Neurology 39:1 Editor's Choice\], accessed on January 2, 2026, [https://wfneurology.org/activities/news-events/archived-news/2024-03-04-wn-editors-choice](https://wfneurology.org/activities/news-events/archived-news/2024-03-04-wn-editors-choice)</li>
<li>17. Online Mendelian Inheritance in Man (OMIM), a knowledgebase of human genes and genetic disorders \- PMC \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC99152/](https://pmc.ncbi.nlm.nih.gov/articles/PMC99152/)</li>
<li>18. Getting Started with OMIM: Exploring the Rare Disease Database \- 3billion, accessed on January 2, 2026, [https://3billion.io/blog/getting-started-with-the-rare-disease-database-omim](https://3billion.io/blog/getting-started-with-the-rare-disease-database-omim)</li>
<li>19. Searching Online Mendelian Inheritance in Man (OMIM): A Knowledgebase of Human Genes and Genetic Phenotypes \- PMC \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5662200/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5662200/)</li>
<li>20. New release: HGMD Professional 2024.3 is here\! \- Bioinformatics Software, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/news/blog/clinical/new-release-hgmd-professional-2024-3-is-here/](https://digitalinsights.qiagen.com/news/blog/clinical/new-release-hgmd-professional-2024-3-is-here/)</li>
<li>21. Human Gene Mutation Database (HGMD) Professional \- QIAGEN Digital Insights, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/products-overview/clinical-insights-portfolio/human-gene-mutation-database/](https://digitalinsights.qiagen.com/products-overview/clinical-insights-portfolio/human-gene-mutation-database/)</li>
<li>22. Using HGMD Public? Your Data Is 3 Years Behind \- Bioinformatics Software, accessed on January 2, 2026, [https://digitalinsights.qiagen.com/news/blog/clinical/hgmd-free-vs-hgmd-pro/](https://digitalinsights.qiagen.com/news/blog/clinical/hgmd-free-vs-hgmd-pro/)</li>
<li>23. HGMD® home page, accessed on January 2, 2026, [https://www.hgmd.cf.ac.uk/](https://www.hgmd.cf.ac.uk/)</li>
<li>24. What's New at HGMD \- Cardiff University, accessed on January 2, 2026, [https://www.hgmd.cf.ac.uk/docs/wots_new.html](https://www.hgmd.cf.ac.uk/docs/wots_new.html)</li>
<li>25. HGMD vs ClinVar vs OMIM comparison (as of March 2020\) \- ResearchGate, accessed on January 2, 2026, [https://www.researchgate.net/figure/HGMD-vs-ClinVar-vs-OMIM-comparison-as-of-March-2020_fig5_342514768](https://www.researchgate.net/figure/HGMD-vs-ClinVar-vs-OMIM-comparison-as-of-March-2020_fig5_342514768)</li>
<li>26. PhenoMiner: from text to a database of phenotypes associated with OMIM diseases \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4622021/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4622021/)</li>
<li>27. General mutation databases: analysis and review | Journal of Medical Genetics, accessed on January 2, 2026, [https://jmg.bmj.com/content/45/2/65](https://jmg.bmj.com/content/45/2/65)</li>
<li>28. OMIM.org: leveraging knowledge across phenotype–gene relationships \- Oxford Academic, accessed on January 2, 2026, [https://academic.oup.com/nar/article/47/D1/D1038/5184722](https://academic.oup.com/nar/article/47/D1/D1038/5184722)</li>
<li>29. OMIM.org: leveraging knowledge across phenotype–gene relationships \- PMC \- NIH, accessed on January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC6323937/](https://pmc.ncbi.nlm.nih.gov/articles/PMC6323937/)</li>
</ul>

</article>


  `,
};

export default article;
