import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-017",
  title: "Introduction to Primary Nucleotide Databases: GenBank, ENA and DDBJ",
  date: "2026-08-31",
  tags: ["#GenBank", "#NucleotideDatabases", "#bioinformatics"],
  type: "report",
  template: "standard",
  readTime: "25 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `Primary nucleotide databases are the archival layer of sequence bioinformatics: they preserve nucleotide sequences submitted by researchers and assign stable identifiers that allow those records to be found and cited. This introductory article uses GenBank as the main example, then shows how the European Nucleotide Archive (ENA) and DNA Data Bank of Japan (DDBJ) participate in the same international data-sharing system. The emphasis is on the few ideas a first-time user needs to understand before searching, opening, interpreting, and downloading a nucleotide record.`,
  content: `
<article>

<section>
  <h2>1. Why Do We Need a Nucleotide Database?</h2>

  <p>A DNA sequence produced in one laboratory becomes much more useful when other researchers can <strong>find it, identify it unambiguously, inspect its biological context, and reuse it</strong>. A nucleotide database provides the infrastructure needed to make that possible.</p>

  <p>Imagine that a laboratory sequences a bacterial gene and publishes a paper stating only that the sequence was obtained. Another researcher would still need the actual sequence before it could be compared with an isolate, used in an alignment, or examined for mutations. Public nucleotide archives solve this problem by giving sequence data a <strong>permanent public record</strong> and an identifier that can be cited in a publication.<sup><a href="#ref1">1</a></sup></p>

  <p>The three names students most often encounter are <strong>GenBank</strong>, the <strong>European Nucleotide Archive (ENA)</strong>, and the <strong>DNA Data Bank of Japan (DDBJ)</strong>. They are not isolated competitors holding completely different collections. They cooperate through an international system discussed later in this article.<sup><a href="#ref2">2</a></sup></p>

  <p><strong>Takeaway:</strong> A primary nucleotide database is part of the scientific record. Its first job is to make sequence data <strong>identifiable, retrievable, shareable, and preservable</strong>.</p>
</section>

<section>
  <h2>2. What Is a Primary Biological Database?</h2>

  <p>A <strong>primary database</strong> is an archival resource that receives biological data from researchers or data-producing projects and preserves those submitted records for the scientific community. In nucleotide bioinformatics, the important idea is <strong>provenance</strong>: the database is close to the point where the sequence data enter the public scientific record.</p>

  <p>GenBank, for example, states that an important source of new records is <strong>direct submission from researchers</strong>. Submitted records then undergo automated and manual processing for integrity and quality before public release.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Important:</strong> “Primary” does <em>not</em> mean “no quality checking” or “no annotation.” It describes the database's role as an <strong>archive of submitted sequence records</strong>.
  </blockquote>

  <h3>2.1 Primary vs. Secondary vs. Composite Resources</h3>

  <p>These categories become easier if we ask <strong>where the information comes from and what the resource is trying to do</strong>.</p>

  <table class="science-table" data-id="database-levels-intro">
    <caption>Table 1: A beginner-level distinction between primary, secondary, and composite biological resources</caption>
    <thead>
      <tr>
        <th>Type</th>
        <th>Core Role</th>
        <th>Think of It As</th>
        <th>Typical Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Primary</strong></td>
        <td>Archives submitted biological data and associated annotation/metadata.</td>
        <td>The <em>record of deposited data</em>.</td>
        <td>GenBank, ENA, DDBJ</td>
      </tr>
      <tr>
        <td><strong>Secondary</strong></td>
        <td>Derives, curates, classifies, or interprets information using existing data and literature.</td>
        <td>The <em>interpretation layer</em>.</td>
        <td>Resources for protein families, domains, pathways, or curated biological knowledge</td>
      </tr>
      <tr>
        <td><strong>Composite / integrated</strong></td>
        <td>Brings information from multiple underlying sources into one searchable or connected interface.</td>
        <td>The <em>integration layer</em>.</td>
        <td>A portal that searches or links several sequence and annotation resources together</td>
      </tr>
    </tbody>
  </table>

  <p>The distinction is useful but should not be treated as an absolute law. Modern biological resources are interconnected, and a single website can provide archival data, links, analysis tools, and derived information together. What matters for a beginner is recognizing the <strong>main role of the resource being used</strong>.</p>

  <p>For example, NCBI's <strong>Nucleotide</strong> search system can retrieve sequences from several sources, including GenBank. Therefore, the webpage through which you search may be an integrated retrieval interface even though the underlying GenBank record belongs to a primary archive.<sup><a href="#ref3">3</a></sup></p>

  <p><strong>Takeaway:</strong> Ask: <em>“Am I looking at deposited sequence data, interpreted knowledge, or an interface that integrates several sources?”</em></p>
</section>

<section>
  <h2>3. GenBank: The Best Place to Learn the Basic Idea</h2>

  <p><a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noopener noreferrer"><strong>GenBank</strong></a> is the NIH public nucleotide sequence repository operated through the <strong>National Center for Biotechnology Information (NCBI)</strong>. NCBI describes it as an annotated collection of publicly available DNA sequences.<sup><a href="#ref1">1</a></sup></p>

  <p>For a first-time user, do not try to learn every GenBank division, submission category, or identifier type. Start with one simple mental model:</p>

  <p><strong>Researcher generates sequence → sequence is submitted → a database record is created → an accession is assigned → other researchers can search and retrieve that record.</strong></p>

  <h3>3.1 What Can a GenBank Record Represent?</h3>

  <p>A record can represent many kinds of nucleotide sequence, such as a <strong>gene, transcript, genomic region, plasmid sequence, organelle sequence, viral sequence, or assembled genomic sequence</strong>. The exact content depends on what was sequenced and submitted.</p>

  <p>This is important because a GenBank record is <strong>not automatically equivalent to “one gene.”</strong> One record might contain a single gene, while another may contain many genes or a much larger genomic region.</p>

  <p><strong>Takeaway:</strong> GenBank is a <strong>sequence-record archive</strong>, not simply a list of gene names.</p>
</section>

<section>
  <h2>4. The Most Important Idea: The Accession Number</h2>

  <p>When you first learn GenBank, the single most useful concept is the <strong>accession number</strong>. It is a stable identifier assigned to a sequence record.<sup><a href="#ref4">4</a></sup></p>

  <p>An accession may look like:</p>

  <pre><code>U49845</code></pre>

  <p>The accession is far more useful than trying to remember the full record title. NCBI specifically recommends searching by the actual accession because accession numbers are stable identifiers for records.<sup><a href="#ref5">5</a></sup></p>

  <h3>4.1 Accession vs. Accession.Version</h3>

  <p>You may also see:</p>

  <pre><code>U49845.1</code></pre>

  <p>Here:</p>

  <ul>
    <li><code>U49845</code> = the <strong>accession</strong>, identifying the record;</li>
    <li><code>.1</code> = the <strong>sequence version</strong>.</li>
  </ul>

  <p>If the actual nucleotide sequence changes, even by a single base, the version suffix is incremented while the accession portion is retained. A record could therefore progress from <code>U12345.1</code> to <code>U12345.2</code> after a sequence correction.<sup><a href="#ref5">5</a></sup></p>

  <blockquote>
    <strong>Practical rule:</strong> When reproducibility matters, record the <strong>accession.version</strong>, because it identifies the particular sequence version you used.
  </blockquote>

  <h3>4.2 Do Not Memorize Accession Formats Yet</h3>

  <p>INSDC accession formats vary between categories and historical periods. You will encounter different combinations of letters and numbers.<sup><a href="#ref6">6</a></sup> At this stage, the important idea is not the pattern. It is that the accession functions as a <strong>persistent lookup key</strong>.</p>

  <p><strong>Takeaway:</strong> If someone gives you a nucleotide accession, your first instinct should be: <em>“I can use this identifier to retrieve the corresponding sequence record.”</em></p>
</section>

<section>
  <h2>5. Your First GenBank Record: What Should You Look At?</h2>

  <p>GenBank records contain much more information than FASTA. NCBI provides an annotated sample record using accession <a href="https://www.ncbi.nlm.nih.gov/nucleotide/U49845" target="_blank" rel="noopener noreferrer"><code>U49845</code></a>.<sup><a href="#ref4">4</a></sup> A beginner does not need to interpret every line. On the first visit, concentrate on only a few fields.</p>

  <table class="science-table" data-id="first-genbank-fields">
    <caption>Table 2: The first GenBank record fields a beginner should recognize</caption>
    <thead>
      <tr>
        <th>Field</th>
        <th>What It Tells You</th>
        <th>Beginner Question</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>DEFINITION</strong></td>
        <td>A short description of the sequence record.</td>
        <td>What is this record broadly about?</td>
      </tr>
      <tr>
        <td><strong>ACCESSION</strong></td>
        <td>The stable record identifier.</td>
        <td>How do I find or cite this record?</td>
      </tr>
      <tr>
        <td><strong>VERSION</strong></td>
        <td>The accession plus the current sequence version.</td>
        <td>Which exact sequence version am I using?</td>
      </tr>
      <tr>
        <td><strong>SOURCE / ORGANISM</strong></td>
        <td>The biological source and taxonomic identity.</td>
        <td>Which organism did this sequence come from?</td>
      </tr>
      <tr>
        <td><strong>FEATURES</strong></td>
        <td>Annotated biological features and their positions.</td>
        <td>Where are genes, coding sequences, or other annotated regions?</td>
      </tr>
      <tr>
        <td><strong>ORIGIN</strong></td>
        <td>The nucleotide sequence itself begins below this field.</td>
        <td>Where is the actual sequence?</td>
      </tr>
    </tbody>
  </table>

  <p>The <strong>FEATURES</strong> section is especially important because it connects sequence coordinates with biological interpretation. It can describe features such as a <code>gene</code> or <code>CDS</code> and attach qualifiers describing the organism, product, protein identifier, or other properties. GenBank, ENA, and DDBJ use shared feature-table standards so that these annotations can be exchanged consistently.<sup><a href="#ref7">7</a></sup></p>

  <p><strong>Do not try to memorize the complete feature-table vocabulary now.</strong> At this stage, simply recognize that a GenBank record is more than a nucleotide string: it contains <strong>sequence + identifiers + biological annotation + provenance</strong>.</p>

  <p><strong>Takeaway:</strong> On your first GenBank visit, locate <strong>accession, organism, features, and sequence</strong>. That is enough.</p>
</section>

<section>
  <h2>6. FASTA and GenBank Format Are Different Views of the Same Sequence</h2>

  <p>The previous topic introduced FASTA as a simple sequence representation. GenBank records demonstrate why FASTA and a database record should not be confused.</p>

  <p>A FASTA view may look roughly like:</p>

  <pre><code>&gt;U49845.1 Saccharomyces cerevisiae sequence
ATG...</code></pre>

  <p>The corresponding GenBank record can additionally contain <strong>references, source organism, taxonomy, feature coordinates, coding sequences, products, protein identifiers, and other annotations</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p>This gives a useful workflow distinction:</p>

  <ul>
    <li><strong>Open the database record</strong> when you want to understand what the sequence represents.</li>
    <li><strong>Download FASTA</strong> when a sequence-analysis tool needs the nucleotide sequence as input.</li>
  </ul>

  <p>NCBI allows GenBank records to be viewed or downloaded in FASTA form. The sequence has not become a different biological sequence; only its <strong>representation has changed</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p><strong>Takeaway:</strong> <strong>GenBank format carries context; FASTA emphasizes the sequence.</strong></p>
</section>

<section>
  <h2>7. GenBank Is Part of a Global Collaboration: INSDC</h2>

  <p>The most important organizational concept is the <strong>International Nucleotide Sequence Database Collaboration (INSDC)</strong>. It links three major nucleotide data partners:</p>

  <ul>
    <li><strong>GenBank</strong> at NCBI in the United States;</li>
    <li><strong>European Nucleotide Archive (ENA)</strong> at EMBL-EBI in Europe;</li>
    <li><strong>DNA Data Bank of Japan (DDBJ)</strong> at the National Institute of Genetics in Japan.</li>
  </ul>

  <p>The partners exchange sequence data and maintain shared standards so that public nucleotide information submitted through one partner becomes available through the collaboration.<sup><a href="#ref2">2</a></sup></p>

  <p>A useful beginner analogy is <strong>three major entry gates into a coordinated international archive</strong>. The websites, interfaces, and local services differ, but the underlying collaboration prevents researchers from having to treat GenBank, ENA, and DDBJ as three unrelated worlds.</p>

  <table class="science-table" data-id="insdc-beginner-comparison">
    <caption>Table 3: The three INSDC partners at introductory level</caption>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Organization / Region</th>
        <th>What to Remember Now</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GenBank</strong></td>
        <td>NCBI, United States</td>
        <td>Use it as the main learning example for nucleotide sequence records and accessions.</td>
      </tr>
      <tr>
        <td><strong>ENA</strong></td>
        <td>EMBL-EBI, Europe</td>
        <td>European partner providing access to nucleotide sequencing information from raw data through assembled and annotated sequences.</td>
      </tr>
      <tr>
        <td><strong>DDBJ</strong></td>
        <td>NIG, Japan</td>
        <td>Japanese partner accepting and distributing nucleotide sequence data under shared INSDC standards.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Takeaway:</strong> Do not memorize three separate databases. First remember one system: <strong>INSDC = GenBank + ENA + DDBJ collaboration</strong>.</p>
</section>

<section>
  <h2>8. What Does “EMBL” Mean in Older Books?</h2>

  <p>Students often encounter the syllabus wording <strong>“GenBank, EMBL, DDBJ.”</strong> The European resource has changed names and expanded over time. The historical <strong>EMBL Nucleotide Sequence Data Library / EMBL-Bank</strong> became part of what is now the <a href="https://www.ebi.ac.uk/ena/browser/home" target="_blank" rel="noopener noreferrer"><strong>European Nucleotide Archive (ENA)</strong></a> at EMBL-EBI.<sup><a href="#ref8">8</a></sup></p>

  <p>ENA now provides access across the sequencing-data lifecycle, including raw reads, assemblies, and annotated sequence information.<sup><a href="#ref9">9</a></sup></p>

  <p>Therefore, when an older textbook or syllabus says <strong>EMBL database</strong>, connect that historical term with the modern European nucleotide archive at <strong>EMBL-EBI: ENA</strong>.</p>

  <p><strong>Takeaway:</strong> <strong>“EMBL” in older sequence-database teaching usually points to the historical lineage of today's ENA.</strong></p>
</section>

<section>
  <h2>9. DDBJ: The Same Core Idea from the Japanese Partner</h2>

  <p><a href="https://www.ddbj.nig.ac.jp/index-e.html" target="_blank" rel="noopener noreferrer"><strong>DDBJ</strong></a> is the Japanese INSDC partner. For its assembled/annotated nucleotide sequence archive, DDBJ accepts experimentally determined nucleotide sequence data submitted by researchers and distributes records according to INSDC standards.<sup><a href="#ref10">10</a></sup></p>

  <p>At this introductory stage, there is little value in learning a second set of record fields immediately after learning GenBank. Instead, carry the same conceptual framework with you:</p>

  <p><strong>sequence submission → archival record → accession → shared standards → international retrieval.</strong></p>

  <p>The common accession system is particularly important. INSDC accessions are internationally recognized identifiers, and the partner databases coordinate their sequence records.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> DDBJ is not a different biological concept to memorize. It is another major <strong>INSDC archival partner</strong>.</p>
</section>

<section>
  <h2>10. Your First Practical Visit to GenBank</h2>

  <p>The best way to understand a nucleotide database is to open one record rather than reading dozens of definitions.</p>

  <h3>10.1 Exercise A: Search by Accession</h3>

  <ol>
    <li>Open <a href="https://www.ncbi.nlm.nih.gov/nucleotide/" target="_blank" rel="noopener noreferrer"><strong>NCBI Nucleotide</strong></a>.</li>
    <li>Search for <code>U49845</code>, NCBI's annotated sample GenBank record.</li>
    <li>Find the <strong>accession and version</strong>.</li>
    <li>Identify the <strong>source organism</strong>.</li>
    <li>Locate the <strong>FEATURES</strong> section.</li>
    <li>Locate the nucleotide sequence.</li>
  </ol>

  <p>Do not attempt to interpret every field. The objective is only to connect <strong>identifier → biological record → sequence</strong>.</p>

  <h3>10.2 Exercise B: Change the Display to FASTA</h3>

  <p>Display or download the same record as FASTA. Compare what remains with what disappears.</p>

  <p>You should notice that FASTA makes the sequence convenient for analysis, whereas the full database record contains much richer contextual information.<sup><a href="#ref4">4</a></sup></p>

  <h3>10.3 Exercise C: Search by Biology Instead of Accession</h3>

  <p>Now try a biological query such as an organism name plus a gene name. Text searching is useful when the accession is unknown, but terminology can vary between submitted records. NCBI notes that definition lines are not based on a single controlled vocabulary, so synonyms and alternative wording may sometimes be required.<sup><a href="#ref4">4</a></sup></p>

  <p><strong>Takeaway:</strong> Learn two retrieval modes first: <strong>accession search when you know the ID; biological text search when you do not.</strong></p>
</section>

<section>
  <h2>11. What Should You Expect to Find—and What Should You Not Assume?</h2>

  <p>A primary nucleotide database is powerful, but a retrieved record must still be interpreted carefully.</p>

  <h3>11.1 Sequence Presence Is Not Experimental Proof of Every Annotation</h3>

  <p>A record may contain experimentally supported information, submitter-provided annotation, computationally inferred features, or later updates. <strong>Database presence should not automatically be treated as proof of biological function.</strong> Read the relevant evidence and linked literature when the scientific conclusion matters.</p>

  <h3>11.2 A Record Is Not Necessarily a Complete Genome</h3>

  <p>The record may correspond to a short sequence, one gene, a transcript, a plasmid, a contig, a chromosome, or another sequence unit. Always check what the record actually represents.</p>

  <h3>11.3 GenBank and RefSeq Are Not the Same Thing</h3>

  <p>NCBI also provides <strong>RefSeq</strong>, which has its own accession patterns such as <code>NC_</code>, <code>NM_</code>, and <code>NP_</code>. NCBI explicitly distinguishes RefSeq from GenBank even though the resources are cross-linked.<sup><a href="#ref4">4</a></sup></p>

  <p>You do not need to master RefSeq yet. For now, simply avoid assuming that <strong>every record visible in NCBI Nucleotide is a GenBank submission</strong>.</p>

  <h3>11.4 Do Not Judge a Record Only by Its Title</h3>

  <p>Look at the <strong>accession, organism, sequence length, features, and provenance</strong>. The database record is the evidence container; the title is only a convenient summary.</p>

  <p><strong>Takeaway:</strong> Retrieve first, then inspect what the record actually represents before using it biologically.</p>
</section>

<section>
  <h2>12. A Minimal Workflow to Remember</h2>

  <p>For most beginner exercises, the following sequence is enough:</p>

  <ol>
    <li><strong>Define the biological target:</strong> organism, gene, region, or known accession.</li>
    <li><strong>Search the nucleotide resource.</strong></li>
    <li><strong>Open the record.</strong></li>
    <li><strong>Verify the organism and record description.</strong></li>
    <li><strong>Record the accession.version.</strong></li>
    <li><strong>Inspect important FEATURES when needed.</strong></li>
    <li><strong>Download FASTA</strong> if the next analysis requires only the sequence.</li>
    <li><strong>Preserve the accession</strong> so the source can be traced later.</li>
  </ol>

  <p>This workflow is more valuable than memorizing the layout of every database webpage because interfaces change while the core logic remains stable.</p>

  <blockquote>
    <strong>Core idea:</strong> A good bioinformatics workflow should always let you answer, <em>“Which exact sequence did I use, where did it come from, and how can another researcher retrieve it?”</em>
  </blockquote>

  <p><strong>Takeaway:</strong> <strong>Search → verify → record the identifier → retrieve the sequence → preserve provenance.</strong></p>
</section>

<section>
  <h2>13. What to Learn Next</h2>

  <p>After this introduction, the next useful topics are not the obscure details of GenBank syntax. They are the practical concepts that build naturally from the record:</p>

  <ul>
    <li>how to search NCBI Nucleotide efficiently;</li>
    <li>how to interpret common <strong>GenBank FEATURES</strong> such as <code>gene</code> and <code>CDS</code>;</li>
    <li>how GenBank differs from <strong>RefSeq</strong>;</li>
    <li>how to retrieve sequence in <strong>FASTA</strong>;</li>
    <li>how to use an accession in <strong>BLAST</strong> and other sequence-analysis workflows;</li>
    <li>how raw sequencing reads, genome assemblies, BioProjects, and BioSamples connect to nucleotide records.</li>
  </ul>

  <p>Those topics are easier once the foundation is clear: <strong>GenBank, ENA, and DDBJ preserve publicly shared nucleotide sequence records through the INSDC collaboration, and accession numbers provide the durable handles used to retrieve those records.</strong></p>
</section>

<section id="references">
  <h2>References</h2>
  <ol>
    <li id="ref1">
      National Center for Biotechnology Information (NCBI).
      <a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noopener noreferrer">GenBank Overview</a>.
      NCBI, U.S. National Library of Medicine. Accessed 31 August 2026.
    </li>
    <li id="ref2">
      International Nucleotide Sequence Database Collaboration (INSDC).
      <a href="https://www.insdc.org/about-insdc/" target="_blank" rel="noopener noreferrer">About INSDC</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref3">
      National Center for Biotechnology Information (NCBI).
      <a href="https://www.ncbi.nlm.nih.gov/genbank/about/" target="_blank" rel="noopener noreferrer">About GenBank: Access to GenBank</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref4">
      National Center for Biotechnology Information (NCBI).
      <a href="https://www.ncbi.nlm.nih.gov/genbank/samplerecord/" target="_blank" rel="noopener noreferrer">Sample GenBank Record: U49845</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref5">
      National Center for Biotechnology Information (NCBI).
      <a href="https://www.ncbi.nlm.nih.gov/genbank/sequenceids/" target="_blank" rel="noopener noreferrer">GenBank Sequence Identifiers</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref6">
      DNA Data Bank of Japan (DDBJ).
      <a href="https://www.ddbj.nig.ac.jp/insdc/accessions-e.html" target="_blank" rel="noopener noreferrer">Accession Number Assigned by INSD</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref7">
      International Nucleotide Sequence Database Collaboration (INSDC).
      <a href="https://www.insdc.org/submitting-standards/feature-table/" target="_blank" rel="noopener noreferrer">The DDBJ/ENA/GenBank Feature Table Definition, Version 11.4</a>.
      April 2026.
    </li>
    <li id="ref8">
      European Molecular Biology Laboratory-European Bioinformatics Institute (EMBL-EBI).
      <a href="https://www.ebi.ac.uk/about/our-story" target="_blank" rel="noopener noreferrer">Our Story</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref9">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/ena-quick-tour/what-is-ena/" target="_blank" rel="noopener noreferrer">What is ENA?</a>.
      Accessed 31 August 2026.
    </li>
    <li id="ref10">
      DNA Data Bank of Japan (DDBJ).
      <a href="https://www.ddbj.nig.ac.jp/ddbj/sequence-e.html" target="_blank" rel="noopener noreferrer">Nucleotide Sequences: Introduction</a>.
      Accessed 31 August 2026.
    </li>
  </ol>
</section>

</article>
  `,
};

export default article;
