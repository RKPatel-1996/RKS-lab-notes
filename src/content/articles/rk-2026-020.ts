import { Article } from "../../lib/types";
import uniprotResourceFlowImg from "./article_images/uniprot_resource_flow.png";

const article: Article = {
  id: "RK-2026-020",
  title: "Protein Sequence Databases: Understanding UniProt and Swiss-Prot",
  date: "2026-09-01",
  tags: ["#UniProt", "#SwissProt", "#ProteinDatabases"],
  type: "report",
  template: "standard",
  readTime: "25 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `UniProt is one of the most important resources for connecting a protein sequence with biological knowledge about its function, location, domains, variants, interactions, and supporting evidence. This introductory article explains how UniProtKB, Swiss-Prot, TrEMBL, UniParc, UniRef, and Proteomes relate to one another, what a first-time visitor should look for on a protein entry page, and how UniProt identifiers are used. The emphasis is on using the resource correctly as a biology and pharmacology student rather than on database software or computational infrastructure.`,
  content: `
<article>

<section>
  <h2>1. Why Do We Need a Protein Sequence Database?</h2>

  <p>A protein sequence by itself is only a chain of amino-acid letters such as <code>MKT...</code>. For biological or pharmacological work, we usually need much more information: <strong>What protein is this? Which organism produced it? What gene encodes it? What does the protein do? Where is it located? Which domains or active sites are present? Are variants known? Which publications support these conclusions?</strong></p>

  <p><a href="https://www.uniprot.org/" target="_blank" rel="noopener noreferrer"><strong>UniProt</strong></a>, the Universal Protein Resource, was created to make protein sequence and functional information <strong>comprehensive, consistent, richly annotated, and freely accessible</strong>.<sup><a href="#ref1">1</a></sup></p>

  <p>For a student, the simplest way to think about its purpose is:</p>

  <p><strong>protein sequence → reliable identity → biological annotation → supporting evidence → links to related biological resources</strong></p>

  <p>UniProt is therefore <strong>not merely a collection of protein FASTA sequences</strong>. Its major value is the biological knowledge attached to those sequences.</p>

  <blockquote>
    <strong>Core idea:</strong> Use UniProt when you want to move from <em>“I have a protein sequence or protein name”</em> to <strong>“What is known about this protein biologically?”</strong>
  </blockquote>
</section>

<section>
  <h2>2. What Is UniProt, and Who Manages It?</h2>

  <p>UniProt is maintained by the <strong>UniProt Consortium</strong>, a collaboration between three institutions:<sup><a href="#ref1">1</a></sup></p>

  <ul>
    <li><strong>EMBL-EBI</strong> — European Molecular Biology Laboratory, European Bioinformatics Institute;</li>
    <li><strong>SIB</strong> — Swiss Institute of Bioinformatics;</li>
    <li><strong>PIR</strong> — Protein Information Resource.</li>
  </ul>

  <p>The modern UniProt Consortium was formed in 2002 by combining major protein-information efforts, including <strong>Swiss-Prot, TrEMBL, and PIR resources</strong>.<sup><a href="#ref1">1</a></sup></p>

  <p>The key resource most students use is the <strong>UniProt Knowledgebase (UniProtKB)</strong>. UniProtKB is the central hub for protein sequence and functional information and contains two major sections:</p>

  <ul>
    <li><strong>UniProtKB/Swiss-Prot</strong> — reviewed, manually curated entries;</li>
    <li><strong>UniProtKB/TrEMBL</strong> — unreviewed entries with computational annotation.</li>
  </ul>

  <p>This terminology is important. <strong>Swiss-Prot is not a completely separate modern database from UniProt.</strong> It is the <strong>reviewed section of UniProtKB</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p><strong>Takeaway:</strong> Remember the hierarchy as <strong>UniProt → UniProtKB → Swiss-Prot reviewed / TrEMBL unreviewed</strong>.</p>
</section>

<section>
  <h2>3. The UniProt Family: What Are UniProtKB, UniParc, UniRef, and Proteomes?</h2>

  <p>When first visiting UniProt, several names appear in the menus. They serve different purposes and should not be confused.<sup><a href="#ref3">3</a></sup></p>

  <table class="science-table" data-id="uniprot-resource-map">
    <caption>Table 1: The main UniProt resources a first-time user should recognize</caption>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Main Purpose</th>
        <th>What a Beginner Should Remember</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>UniProtKB</strong></td>
        <td>Protein sequence plus functional information</td>
        <td>This is the main resource to search when studying a specific protein.</td>
      </tr>
      <tr>
        <td><strong>Swiss-Prot</strong></td>
        <td>Reviewed section of UniProtKB</td>
        <td>Expert-curated entries with literature-based biological interpretation.</td>
      </tr>
      <tr>
        <td><strong>TrEMBL</strong></td>
        <td>Unreviewed section of UniProtKB</td>
        <td>Automatically annotated entries that have not undergone full manual review.</td>
      </tr>
      <tr>
        <td><strong>UniParc</strong></td>
        <td>Protein sequence archive</td>
        <td>Tracks unique sequences and their history, including sequences that may no longer be present in a source database.</td>
      </tr>
      <tr>
        <td><strong>UniRef</strong></td>
        <td>Sequence clusters</td>
        <td>Groups related sequences to reduce redundancy; common levels are UniRef100, UniRef90, and UniRef50.</td>
      </tr>
      <tr>
        <td><strong>Proteomes</strong></td>
        <td>Protein sets associated with organisms</td>
        <td>Useful when the question concerns the collection of proteins encoded by an organism rather than one protein.</td>
      </tr>
    </tbody>
  </table>

  <p>For most introductory pharmacology or biology exercises, <strong>start with UniProtKB</strong>. UniParc and UniRef become useful when you need sequence history or large-scale sequence comparison, while the Proteomes portal becomes useful when studying protein sets from whole organisms.</p>

  <p><strong>Takeaway:</strong> <strong>UniProtKB answers “What is known about this protein?”</strong> The other UniProt resources reorganize or archive protein sequences for different purposes.</p>
</section>

<section>
  <h2>4. Swiss-Prot vs. TrEMBL: Why “Reviewed” Matters</h2>

  <p>The distinction between <strong>reviewed</strong> and <strong>unreviewed</strong> is one of the most important things to notice on a UniProt entry page.</p>

  <h3>4.1 UniProtKB/Swiss-Prot: Reviewed</h3>

  <p><strong>Swiss-Prot entries are manually reviewed by expert biocurators.</strong> Curators examine scientific literature, evaluate experimental and computational evidence, verify sequence information, and organize knowledge about the protein into a consistent record.<sup><a href="#ref2">2</a></sup></p>

  <p>A reviewed entry may include carefully evaluated information about:</p>

  <ul>
    <li>protein and gene names;</li>
    <li>molecular function;</li>
    <li>catalytic activity and cofactors;</li>
    <li>subcellular location;</li>
    <li>domains and important sequence sites;</li>
    <li>post-translational modifications;</li>
    <li>protein interactions;</li>
    <li>disease-associated variants;</li>
    <li>supporting publications.</li>
  </ul>

  <h3>4.2 UniProtKB/TrEMBL: Unreviewed</h3>

  <p><strong>TrEMBL entries are computationally analysed and automatically annotated</strong>. This allows UniProt to provide broad protein coverage even though manual curation cannot keep pace with the enormous number of protein sequences generated from genome sequencing.<sup><a href="#ref2">2</a></sup></p>

  <p>“Unreviewed” does <strong>not</strong> mean “useless” or “wrong.” It means that the record has <strong>not undergone the same level of expert manual review</strong> as a Swiss-Prot record.</p>

  <blockquote>
    <strong>Practical rule:</strong> When both are available for the biological question, a <strong>reviewed Swiss-Prot entry is usually the best starting point for biological interpretation</strong>. An unreviewed TrEMBL entry may still be valuable, especially for poorly studied organisms or proteins.
  </blockquote>
</section>

<section>
  <h2>5. Your First Visit to a UniProtKB Entry: What Should You Look At?</h2>

  <p>A good first example for pharmacology students is the human <strong>beta-2 adrenergic receptor</strong>, a major G-protein-coupled receptor and drug target. Its reviewed UniProt entry is <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer"><strong>P07550 · ADRB2_HUMAN</strong></a>.<sup><a href="#ref4">4</a></sup></p>

  <p>Do not try to read every field on your first visit. Start with the following:</p>

  <table class="science-table" data-id="first-uniprot-entry-fields">
    <caption>Table 2: The first information to inspect on a UniProtKB protein entry</caption>
    <thead>
      <tr>
        <th>Entry Area</th>
        <th>What to Look For</th>
        <th>Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Protein / Gene</strong></td>
        <td>Protein name and gene symbol</td>
        <td>Confirms what biological molecule the record describes.</td>
      </tr>
      <tr>
        <td><strong>Status</strong></td>
        <td>Reviewed or unreviewed</td>
        <td>Tells you whether the entry belongs to Swiss-Prot or TrEMBL.</td>
      </tr>
      <tr>
        <td><strong>Organism</strong></td>
        <td>Species or strain</td>
        <td>The same protein name may occur in many organisms.</td>
      </tr>
      <tr>
        <td><strong>Function</strong></td>
        <td>Biological role and supporting evidence</td>
        <td>Provides the main biological interpretation.</td>
      </tr>
      <tr>
        <td><strong>Sequence</strong></td>
        <td>Amino-acid sequence, length, sequence status</td>
        <td>Provides the protein sequence used in downstream analysis.</td>
      </tr>
      <tr>
        <td><strong>Features</strong></td>
        <td>Domains, binding sites, modified residues, variants, processing sites</td>
        <td>Maps biological information onto specific sequence positions.</td>
      </tr>
      <tr>
        <td><strong>Publications / Evidence</strong></td>
        <td>Supporting papers and evidence labels</td>
        <td>Helps distinguish experimentally supported statements from predictions or similarity-based annotation.</td>
      </tr>
      <tr>
        <td><strong>External links</strong></td>
        <td>Connections to structures, pathways, genome resources and other databases</td>
        <td>Allows the protein entry to serve as a gateway into related biological information.</td>
      </tr>
    </tbody>
  </table>

  <p>For the ADRB2 example, the page immediately tells you that the entry is <strong>reviewed (Swiss-Prot)</strong>, belongs to <em>Homo sapiens</em>, contains <strong>413 amino acids</strong>, and has <strong>evidence at protein level</strong>.<sup><a href="#ref4">4</a></sup></p>

  <h3>5.1 Two Extra Fields Worth Recognizing</h3>

  <p><strong>Protein existence</strong> indicates the type of evidence supporting the existence of the protein. A protein supported directly at the protein level is different from one inferred only from homology or prediction.<sup><a href="#ref5">5</a></sup></p>

  <p><strong>Canonical sequence and isoforms</strong> are important for eukaryotic proteins. A Swiss-Prot entry may describe multiple protein products produced from one gene, while displaying one sequence as the canonical representative.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> On a first visit, check <strong>identity → reviewed status → organism → function → sequence → features → evidence</strong>.</p>
</section>

<section>
  <h2>6. How UniProt IDs Work</h2>

  <p>Protein names and gene symbols are useful to humans, but they are not always unique or stable. UniProt therefore assigns identifiers to entries.</p>

  <h3>6.1 Accession Number: The Stable Identifier</h3>

  <p>The most important identifier is the <strong>UniProtKB accession</strong>. UniProt recommends using the <strong>primary accession number</strong> when citing or linking to a protein entry because it is designed to remain stable.<sup><a href="#ref7">7</a></sup></p>

  <p>Examples include:</p>

  <pre><code>P07550
P35354
A0A023GPI8</code></pre>

  <p>UniProtKB accessions currently use either <strong>6-character or 10-character alphanumeric formats</strong>.<sup><a href="#ref7">7</a></sup> A record may also contain older <strong>secondary accessions</strong> if database entries were merged or reorganized.</p>

  <h3>6.2 Entry Name: Useful but Not the Main Stable ID</h3>

  <p>A reviewed entry also has a readable mnemonic <strong>entry name</strong>. For example:</p>

  <pre><code>P07550      = primary accession
ADRB2_HUMAN = entry name
ADRB2       = gene name
Beta-2 adrenergic receptor = protein name</code></pre>

  <p>The entry name is convenient for humans, but UniProt explicitly notes that it is <strong>not the stable identifier</strong>. For reproducible work, record the <strong>primary accession</strong>.<sup><a href="#ref8">8</a></sup></p>

  <h3>6.3 Do Not Confuse Different Kinds of Names</h3>

  <p>A protein may therefore have several labels simultaneously:</p>

  <ul>
    <li><strong>UniProt accession:</strong> database identifier;</li>
    <li><strong>entry name:</strong> UniProt mnemonic;</li>
    <li><strong>gene name:</strong> symbol for the encoding gene;</li>
    <li><strong>recommended protein name:</strong> curated biological name;</li>
    <li><strong>alternative names:</strong> historical names, abbreviations, or synonyms.</li>
  </ul>

  <blockquote>
    <strong>Practical rule:</strong> When recording a protein for an assignment or analysis, preserve at least <strong>protein name + organism + UniProt accession</strong>.
  </blockquote>
</section>

<section>
  <h2>7. Understanding the Flow of Data Through UniProt</h2>

  <p>The figure below summarizes why UniProt contains several related resources rather than a single undifferentiated protein database.</p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="${uniprotResourceFlowImg}">
    <img src="${uniprotResourceFlowImg}" alt="Flow diagram showing external protein sequence sources entering UniParc, UniProtKB TrEMBL and Swiss-Prot, and feeding UniRef clusters and Proteomes" />
    <figcaption>Figure 1: Simplified flow of protein sequence information through the UniProt resource. External sequence sources feed the UniProt sequence archive and knowledgebase; automatically annotated TrEMBL records may undergo expert review to become Swiss-Prot records, while UniRef groups related sequences and the Proteomes portal organizes protein sets by organism. Source: EMBL-EBI UniProt training materials, CC BY 4.0. <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/" target="_blank" rel="noopener noreferrer">View source and explanation</a>.</figcaption>
  </figure>

  <h3>7.1 External Sources → UniParc</h3>

  <p>Protein sequences originate from several external sources. A major source is the translation of coding sequences deposited in the international nucleotide databases <strong>ENA, GenBank, and DDBJ</strong>. UniProt also receives sequence information from resources such as RefSeq, Ensembl, protein structures, direct protein sequencing, and the scientific literature.<sup><a href="#ref9">9</a></sup></p>

  <p><strong>UniParc</strong> acts as the broad sequence archive. It tracks unique protein sequences and their source identifiers, including historical sequences that may later be changed or removed from an original source.</p>

  <h3>7.2 Sequence → TrEMBL Automatic Annotation</h3>

  <p>Protein sequences selected for UniProtKB can enter the <strong>TrEMBL</strong> section, where computational methods add automatic annotation. This provides broad coverage without waiting for every protein to be manually reviewed.</p>

  <h3>7.3 TrEMBL → Swiss-Prot Expert Curation</h3>

  <p>Selected entries may then undergo <strong>expert manual curation</strong>. Curators examine the literature, evaluate evidence, resolve inconsistencies, and build the high-quality reviewed record that appears in <strong>Swiss-Prot</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p>The arrow should therefore be interpreted conceptually as:</p>

  <p><strong>large-scale sequence acquisition → automatic annotation → selected expert review</strong></p>

  <p>It does <strong>not</strong> mean that every TrEMBL record will eventually become a Swiss-Prot record.</p>

  <h3>7.4 UniRef: Grouping Similar Sequences</h3>

  <p><strong>UniRef</strong> clusters related protein sequences at different identity levels. UniRef100, UniRef90, and UniRef50 progressively group sequences to reduce redundancy and make large sequence collections easier to analyse.<sup><a href="#ref3">3</a></sup></p>

  <h3>7.5 Proteomes: Looking at the Organism Level</h3>

  <p>The <strong>Proteomes</strong> portal organizes protein sets associated with organisms. This changes the question from <em>“What is known about this protein?”</em> to <em>“What proteins are represented for this organism or proteome?”</em></p>

  <h3>7.6 A Practical First-Use Workflow</h3>

  <ol>
    <li>Search UniProt using a <strong>protein name, gene name, or accession</strong>.</li>
    <li>Confirm the <strong>organism</strong>.</li>
    <li>Prefer a <strong>reviewed Swiss-Prot entry</strong> when one is available and appropriate.</li>
    <li>Read the <strong>Function</strong> section and note how the statements are supported.</li>
    <li>Inspect <strong>sequence features</strong> relevant to your question: active sites, domains, variants, modifications, transmembrane regions, or binding sites.</li>
    <li>Use <strong>external cross-references</strong> when you need structures, pathways, genomic context, disease information, or other specialist resources.</li>
    <li>Download the <strong>FASTA sequence</strong> only when the next analytical step requires the sequence itself.</li>
    <li>Record the <strong>primary UniProt accession</strong> so the protein can be traced later.</li>
  </ol>

  <blockquote>
    <strong>Final principle:</strong> A UniProt entry is a <strong>protein knowledge record</strong>, not proof that every annotation has equal experimental support. Always check <strong>review status and evidence</strong> before treating a statement as established biological fact.
  </blockquote>
</section>

<section id="references">
  <h2>8. References</h2>

  <ol>
    <li id="ref1">
      UniProt Consortium.
      <a href="https://www.uniprot.org/help/about" target="_blank" rel="noopener noreferrer">About UniProt</a>.
      UniProt. Updated June 2026. Accessed 1 September 2026.
    </li>

    <li id="ref2">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/uniprotkb/" target="_blank" rel="noopener noreferrer">UniProtKB: Swiss-Prot and TrEMBL</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref3">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/" target="_blank" rel="noopener noreferrer">The UniProt Databases</a>.
      European Bioinformatics Institute. CC BY 4.0. Accessed 1 September 2026.
    </li>

    <li id="ref4">
      UniProt.
      <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer">P07550 · ADRB2_HUMAN — Beta-2 adrenergic receptor</a>.
      UniProtKB/Swiss-Prot. Accessed 1 September 2026.
    </li>

    <li id="ref5">
      UniProt.
      <a href="https://www.uniprot.org/help/annotation_guidelines" target="_blank" rel="noopener noreferrer">Annotation Guidelines and Protein Existence</a>.
      UniProt Help. Updated June 2026.
    </li>

    <li id="ref6">
      UniProt.
      <a href="https://www.uniprot.org/help/canonical_and_isoforms" target="_blank" rel="noopener noreferrer">Canonical Sequences and Isoforms</a>.
      UniProt Help. Accessed 1 September 2026.
    </li>

    <li id="ref7">
      UniProt.
      <a href="https://www.uniprot.org/help/accession_numbers" target="_blank" rel="noopener noreferrer">UniProtKB Accession Numbers</a>.
      UniProt Help. Updated June 2026.
    </li>

    <li id="ref8">
      UniProt.
      <a href="https://www.uniprot.org/help/entry_information_section" target="_blank" rel="noopener noreferrer">Entry Information Section</a>.
      UniProt Help. Accessed 1 September 2026.
    </li>

    <li id="ref9">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-exploring-protein-sequence-and-functional-info/where-does-the-data-come-from/sequence-data/" target="_blank" rel="noopener noreferrer">Where Does UniProtKB Sequence Data Come From?</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref10">
      UniProt Consortium.
      <a href="https://academic.oup.com/nar/article/53/D1/D609/7902999" target="_blank" rel="noopener noreferrer">UniProt: the Universal Protein Knowledgebase in 2025</a>.
      <em>Nucleic Acids Research</em>. 2025;53(D1):D609-D617. doi:10.1093/nar/gkae1010.
    </li>
  </ol>
</section>

</article>
  `,
};

export default article;
