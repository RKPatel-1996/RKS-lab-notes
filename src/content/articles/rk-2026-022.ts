import { Article } from "../../lib/types";
import f022_001 from "./article_images/f022_001.png";
import f022_002 from "./article_images/f022_002.png";
import f022_003 from "./article_images/f022_003.png";
import f022_004 from "./article_images/f022_004.png";
import f022_005 from "./article_images/f022_005.png";
import f022_006 from "./article_images/f022_006.png";
import f022_007 from "./article_images/f022_007.png";
import f022_008 from "./article_images/f022_008.png";
const article: Article = {
  id: "RK-2026-022",
  title:
    "Practical -1: Sequence Retrieval from NCBI and ExPasy Translation Analysis",
  date: "2026-02-26",
  tags: ["#Practical", "#Expasy", "#bioinformatics"],
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

    <h2>Practical -1: Problem Statement</h2> 
 <p>   [A] Retrieve the gene sequence of Streptokinase from GenBank with the accession no O15393 and provide the following details: Extra accessions, Publication date, length, Name of the organism from which the protein is sequenced, Authors for the given sequence, and methods of this sequencing.</p>
    


    <h2>1. Introduction</h2>
    <p><strong>Bioinformatics</strong> involves the application of computational tools, algorithms, and databases to capture, analyze, and interpret biological data—particularly complex genetic (DNA/RNA) and protein sequences. Several databases and bioinformatics tools are available for retrieving, analyzing, and comparing genetic sequences. In this practical study, we will utilize the following fundamental platforms:</p>
    
    <ul>
        <li><strong>NCBI GenBank:</strong> A widely used public database managed by the National Institutes of Health (NIH). It acts as a comprehensive repository for retrieving nucleotide sequences and their associated <em>metadata</em>. Metadata refers to the descriptive information attached to a sequence, such as its unique <strong>accession number</strong> (a unique, barcode-like identifier for the specific genetic record), functional annotations, and original scientific publications.</li>
        <li><strong>ExPASy Translate Tool:</strong> A web-based tool hosted by the Swiss Institute of Bioinformatics. It is used to computationally "translate" nucleotide sequences (DNA or mRNA) into their corresponding amino acid (protein) sequences based on all <strong>six reading frames</strong>. Because DNA is double-stranded and read by the ribosome in triplets called codons, there are three possible starting positions on the forward DNA strand and three on the reverse complement strand. This totals six possible ways a sequence can be translated into a protein.</li>
    </ul>
    
    <h2>2. Objectives</h2>
    <ul>
        <li>To retrieve a specific gene sequence and extract relevant metadata from the database using its accession number.</li>
        <li>To perform a computationally driven six-frame translation of the nucleotide sequence to predict the correct, biologically active protein product.</li>
    </ul>

    <h2>3. Requirements</h2>
    <ul>
        <li>A computer with active internet access.</li>
        <li>Access to the <strong>GenBank database</strong> via the NCBI website.</li>
        <li>Access to the <strong>ExPASy Translate Tool</strong> website.</li>
    </ul>

    <h2>4. Methods or Steps</h2>

    <h3>4.1. Retrieval of Gene Sequence and Metadata</h3>
    <ol>
        <li><strong>Access the NCBI Nucleotide Database:</strong> Navigate your web browser to the official NCBI Nucleotide database portal.</li>
        <li><strong>Search for the Specific Accession Number:</strong> In the primary search bar, enter the accession number and initiate the search by clicking the "Search" button or pressing "Enter".</li>
        
        <figure class="science-figure" data-id="Figure 1: " data-clean-src="${f022_001}">
            <img src="${f022_001}" alt="NCBI homepage search interface" />
            <figcaption>Entering the specific accession number into the NCBI global search bar.</figcaption>
        </figure>

        <li><strong>Review the Search Results:</strong> The database engine should return a specific entry corresponding to the accession number.</li>

        <figure class="science-figure" data-id="Figure 2: " data-clean-src="${f022_002}">
            <img src="${f022_002}" alt="NCBI search results" />
            <figcaption>Search results showing the target nucleotide sequence record.</figcaption>
        </figure>

        <li><strong>Extract the Required Details:</strong> Click on the entry title to access the full, detailed scientific record. Carefully scan the document to extract the required metadata, such as the publication date, sequence length, and authors.</li>
        
        <figure class="science-figure" data-id="Figure 3: " data-clean-src="${f022_003}">
            <img src="${f022_003}" alt="GenBank record details" />
            <figcaption>The detailed GenBank record containing comprehensive metadata about the sequence.</figcaption>
        </figure>
    </ol>

    <h3>4.2. Six-Frame Translation and Protein Prediction</h3>
    <ol>
        <li><strong>Obtain the Sequence:</strong> Access the raw nucleotide sequence associated with the accession number, typically presented in FASTA format.</li>

        <figure class="science-figure" data-id="Figure 4: " data-clean-src="${f022_004}">
            <img src="${f022_004}" alt="FASTA sequence format" />
            <figcaption>Viewing the raw nucleotide sequence in standard FASTA format, ready for copying.</figcaption>
        </figure>

        <li><strong>Navigate to ExPASy:</strong> Search for and open the ExPASy Translate Tool.</li>

        <figure class="science-figure" data-id="Figure 5: " data-clean-src="${f022_005}">
            <img src="${f022_005}" alt="Google search for ExPASy Translate" />
            <figcaption>Locating the ExPASy Translate tool via a web search engine.</figcaption>
        </figure>

        <figure class="science-figure" data-id="Figure 6: " data-clean-src="${f022_006}">
            <img src="${f022_006}" alt="ExPASy Translate Tool interface" />
            <figcaption>The ExPASy Translate tool homepage and input interface.</figcaption>
        </figure>

        <li><strong>Perform the Translation:</strong> Copy and paste this nucleotide sequence into the ExPASy Translate Tool to perform the six-frame translation.</li>

        <figure class="science-figure" data-id="Figure 7: " data-clean-src="${f022_007}">
            <img src="${f022_007}" alt="ExPASy Translation Input and Frame 1" />
            <figcaption>Pasting the FASTA sequence and initiating the translation process.</figcaption>
        </figure>

        <li><strong>Analyze the Results:</strong> Analyze the six resulting peptide (amino acid) sequences. You are looking for an Open Reading Frame (ORF)—the longest continuous chain of amino acids without encountering an early "stop" codon. The most plausible protein product will align with known biological characteristics.</li>

        <figure class="science-figure" data-id="Figure 8: " data-clean-src="${f022_008}">
            <img src="${f022_008}" alt="Six-frame translation results" />
            <figcaption>The complete results of the six-frame translation, highlighting potential Open Reading Frames (ORFs) in red.</figcaption>
        </figure>
    </ol>

    <h2>5. Observations</h2>

    <h3>5.1. Gene Sequence Metadata</h3>
    <p>Based on the database entry retrieved during the practical, the following metadata was successfully collected:</p>
    <ul>
        <li><strong>Publication Date:</strong> The gene sequence record creation date.</li>
        <li><strong>Sequence Length:</strong> The overall length of the nucleotide or amino acid sequence.</li>
        <li><strong>Organism:</strong> The biological source of the sequence.</li>
        <li><strong>Authors:</strong> The scientists responsible for the initial submission.</li>
        <li><strong>Sequencing Method:</strong> The biochemical methodology used (if detailed in the record).</li>
    </ul>

    <h3>5.2. Six-Frame Translation Results</h3>
    <p>The ExPASy translation of the nucleotide sequence yielded six potential, distinct peptide sequences. Among these, the sequence containing the longest Open Reading Frame (ORF) starting with a Methionine (M) typically represents the correct functional protein product.</p>

    <h2>6. Conclusion</h2>
    <p>The bioinformatics analysis successfully retrieved and examined the gene sequence using its accession number. Through a six-frame translation, the potential protein products were identified across all possible reading frames. This practical study enhances our structural understanding of gene-to-protein translation, which is vital for characterization and downstream biological research.</p>

    <p><strong>Important Note:</strong> The sequence length and other specific details must be directly inferred from the live database. Students are strongly advised to check the live database websites (like NCBI and ExPASy) to retrieve real-time information, as biological database records are frequently updated and revised.</p>

</article>


  `,
};

export default article;
