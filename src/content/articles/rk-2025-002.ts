import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2025-002",
  title: "Syllabus",
  date: "2026-07-05",
  tags: ["#syllabus", "#topics", "#bioinformatics"],
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
    "A comprehensive course syllabus covering the foundational progression from computer operations to practical computational biology. The curriculum explores Linux basics, laboratory spreadsheet data handling, and introductory Python and R programming, before advancing into biological databases, sequence formats, pairwise alignment algorithms, and structural bioinformatics.",
  content: `
  <article>

<h2>Unit-I Fundamentals of Computer Operations & Data Tools</h2>


  <h3>Computer Architecture & Data Integrity:</h3>
  <ul>
  <li>Core hardware components (CPU, RAM, storage mediums, etc.)&#10004;</li>
  <li>the role of computers in the pharmaceutical industry (ELNs, LIMS)&#10004;;</li>
  <li>introduction to data integrity and ALCOA+ principles.&#10004;</li>
  </ul>

  <h3>Operating Systems & Linux Basics:&#10004;</h3>
  <ul>
  <li>Navigating operating systems (Windows vs. Linux);&#10004;</li>
  <li>utilizing the Linux Command Line Interface (CLI) for directory navigation (cd, ls, mkdir)&#10004;</li>
  <li>basic text processing (cat, head, grep) for handling large biological text files.&#10004;</li>
  </ul>


    <h3>Spreadsheet Competency for Lab Data:</h3>
  <ul>
    <li>Advanced data entry, &#10004;</li>
    <li>formatting tables,&#10004; </li>
    <li>using basic statistical formulas (mean, standard deviation), </li>
    <li>absolute cell referencing, creating standard plots (bar, scatter, line), </li>
    <li>data sorting/filtering mechanisms.&#10004;</li>
  </ul>

    <h3>Python Programming Basics:</h3>
  <ul>
    <li>Introduction to Python syntax and IDEs &#10004;; </li>
    <li>core data types (strings &#10004;, integers &#10004;, floats) &#10004;</li>
    <li>basic data structures (lists &#10004;, dictionaries); </li>
    <li>implementing control flow (if statements, for loops); </li>
    <li>writing scripts to open and parse simple text or data files.</li>
  </ul>

  <h3>Introduction to R for Biostatistics:</h3>
  <ul>
  <li>R syntax basics; </li>
  <li>understanding vectors and data frames. </li>
  </ul>

<h2>Unit-II Foundations of Bioinformatics & Structure Databases</h2>
<h3>Introduction to Bioinformatics:</h3>
<ul>
  <li>Definition, scope, and computational handling of biological data &#10004;</li>
  <li>representation of nucleic acid and protein sequences (FASTA format). &#10004;</li>
</ul>

<h3>Biological Databases (NCBI, EBI, DDBJ):&#10004;</h3>
<ul>
  <li>Introduction to primary nucleotide databases (GenBank, EMBL, DDBJ) &#10004; </li>
  <li>protein sequence databases (UniProt, Swiss-Prot) </li>
  <li>search syntax, accession numbers &#10004;, and filtering search results</li>
</ul>

<h3>Sequence Alignment Basics:</h3>
<ul>
  <li>Concept of homology, orthology, and paralogy </li>
  <li>understanding local vs. global alignment </li>
  <li>practical execution of Pairwise Sequence Alignment using BLAST (BLASTn, BLASTp) </li>
  <li>interpretation of E-values and bit scores</li>
</ul>

<h3>Structural Bioinformatics Basics:</h3>
<ul>
  <li>Introduction to the Protein Data Bank (PDB); &#10004;</li>
  <li>anatomy of a PDB file; &#10004;</li>
  <li>introduction to basic standalone or web-based molecular visualization software (e.g., PyMOL, Chimera, or Jmol) for viewing three-dimensional macromolecular structures.</li>
</ul>
  </article>
  `,
};

export default article;
