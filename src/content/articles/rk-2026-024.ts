import { Article } from "../../lib/types";
import f024_001 from "./article_images/f024_001.png";
import f024_002 from "./article_images/f024_002.png";
import f024_003 from "./article_images/f024_003.png";
import f024_004 from "./article_images/f024_004.png";
const article: Article = {
  id: "RK-2026-024",
  title: "Practical -3: Six-Frame Translation and Protein Prediction",
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
    


    <h2>Problem Statement</h2>
    
    <p>Mention all the six possible translated protein products of the given sequence with the accession number (AF012336.2) and predict the possible correct protein sequence of the given gene.</p>
    

    <h2>Aim:</h2>
    <p>To computationally determine all six possible translated protein products from a given raw nucleotide sequence (specifically, Accession No: AF012336.2) and to accurately predict the most likely biologically active protein sequence by analyzing Open Reading Frames (ORFs).</p>

    <h2>1. Introduction</h2>
    <p>The <strong>central dogma of molecular biology</strong> dictates that genetic information flows directionally from DNA to RNA, and finally to a functional protein.  Because the cellular machinery (the ribosome) reads genetic information in sets of three nucleotides called <strong>codons</strong>, any given double-stranded DNA sequence can be translated in six different "reading frames."</p>
    
    <p>These frames consist of three starting positions on the forward DNA strand (+1, +2, +3) and three on the reverse complement strand (-1, -2, -3).  However, biological organisms usually only use <em>one</em> of these frames to produce a specific functional protein. Identifying the correct <strong>Open Reading Frame (ORF)</strong>—a continuous sequence of amino acids that begins with a "Start" codon (Methionine) and successfully avoids any premature "Stop" codons—is a crucial first step in genome annotation and understanding gene expression.</p>
    
    <p>In this practical bioinformatics exercise, we will extract the nucleotide sequence of <strong>AF012336.2</strong>, computationally translate it across all six reading frames, and predict the correct true protein sequence based on ORF length, structural integrity, and biological sequence homology.</p>

    <h2>2. Objectives</h2>
    <ul>
        <li>To retrieve the raw nucleotide sequence of the target gene (Accession No: AF012336.2) from public databases.</li>
        <li>To generate all six possible translated protein products from the retrieved sequence using translation software.</li>
        <li>To analyze the resulting ORFs and predict the correct, biologically relevant protein sequence.</li>
        <li>To validate the predicted protein using sequence alignment databases such as NCBI BLASTP.</li>
    </ul>

    <h2>3. Requirements</h2>
    <p><strong>Software and Tools:</strong></p>
    <ul>
        <li><strong>NCBI GenBank:</strong> The primary database used to retrieve the validated nucleotide sequence.</li>
        <li><strong>ExPASy Translate Tool:</strong> A bioinformatics web server used to translate the nucleotide sequence into amino acids across all reading frames.</li>
    </ul>
    
    <p><strong>Materials:</strong></p>
    <ul>
        <li>A computer with active internet access.</li>
        <li>A text editor or basic bioinformatics software for sequence viewing and manipulation.</li>
    </ul>

    <h2>4. Methods or Steps</h2>

    <h3>Step 1: Retrieve the Nucleotide Sequence</h3>
    <ol>
        <li>Visit the official NCBI GenBank portal via your web browser.</li>
        <li>Enter the specific accession number <strong>AF012336.2</strong> into the main search bar to locate the exact genetic record.</li>
        <li>Download or copy the nucleotide sequence (typically provided in FASTA format) for the downstream translation analysis.</li>
        
        <figure class="science-figure" data-id="Figure 1: " data-clean-src="${f024_001}">
            <img src="${f024_001}" alt="NCBI Nucleotide FASTA record for AF012336.2" />
            <figcaption>Retrieving the raw nucleotide sequence in FASTA format for Accession AF012336.2 from the NCBI database.</figcaption>
        </figure>
    </ol>

    <h3>Step 2: Generate Six Possible Protein Translations</h3>
    <ol>
        <li>Navigate to the <strong>ExPASy Translate Tool</strong> website.</li>
        <li>Paste the retrieved nucleotide sequence into the sequence input box.</li>
        <li>Instruct the tool to translate the sequence, which will automatically process all six reading frames:
            <ul>
                <li><strong>Forward strand:</strong> 5'3' Frame 1, Frame 2, Frame 3</li>
                <li><strong>Reverse complement strand:</strong> 3'5' Frame 1, Frame 2, Frame 3</li>
            </ul>
        </li>
        <li>Carefully review the visual output to identify the longest continuous Open Reading Frame (ORF) that begins with a Methionine (M) and ends with a defined stop codon (usually represented by a dash).</li>
    </ol>

    <h3>Step 3: Analyze the ORFs</h3>
    <ol>
        <li>Compare the six translated amino acid sequences side-by-side. You are evaluating them based on overall continuous length, the absence of fragmented stop codons, and general sequence integrity.</li>
    </ol>

<h2>5. Observation</h3>
    <p>By carefully observing the translation results from the ExPASy tool for Accession AF012336.2, we can count the streaks to determine the viable reading frame. The quantitative evaluation of the reading frames is detailed below:</p>

    <figure class="science-figure" data-id="Figure 2: " data-clean-src="${f024_002}">
        <img src="${f024_002}" alt="ExPASy 5'3' Translation Frames" />
        <figcaption>Translation results for the forward 5'3' strand. Students should count the number of individual red highlighted blocks in each frame and categorize their length.</figcaption>
    </figure>

    <dl class="science-data-list">
            <dt><strong>5'3' Frame 1</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> <strong>2</strong> (Spans almost the entire sequence)</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> 4</li>
                <li><strong>Classification:</strong> <strong>Long-read Candidate</strong></li>
                <li><strong>Viability as True Protein:</strong> Highly Probable (Ideal Candidate)</li>
            </ul>
        </dd>

        <dt><strong>5'3' Frame 2</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> 0</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> ~ 8</li>
                <li><strong>Classification:</strong> Short-reads</li>
                <li><strong>Viability as True Protein:</strong> Not Viable</li>
            </ul>
        </dd>

        <dt><strong>5'3' Frame 3</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> 0</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> ~ 14</li>
                <li><strong>Classification:</strong> Short-reads</li>
                <li><strong>Viability as True Protein:</strong> Not Viable</li>
            </ul>
        </dd>
    </dl>

    <figure class="science-figure" data-id="Figure 3: " data-clean-src="${f024_003}">
        <img src="${f024_003}" alt="ExPASy 3'5' Translation Frames" />
        <figcaption>Translation results for the reverse complement 3'5' strand. Notice the high frequency of short, fragmented blocks.</figcaption>
    </figure>

    <dl class="science-data-list">


        <dt><strong>3'5' Frame 1</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> 1</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> ~ 9</li>
                <li><strong>Classification:</strong> Short-reads</li>
                <li><strong>Viability as True Protein:</strong> Not Viable</li>
            </ul>
        </dd>

        <dt><strong>3'5' Frame 2</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> 0</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> ~ 9</li>
                <li><strong>Classification:</strong> Short-reads</li>
                <li><strong>Viability as True Protein:</strong> Not Viable</li>
            </ul>
        </dd>

        <dt><strong>3'5' Frame 3</strong></dt>
        <dd>
            <ul>
                <li><strong>Visual Observation (> 1 line / Long-reads):</strong> 0</li>
                <li><strong>Visual Observation (< 1 line / Short-reads):</strong> ~ 10</li>
                <li><strong>Classification:</strong> Short-reads</li>
                <li><strong>Viability as True Protein:</strong> Not Viable</li>
            </ul>
        </dd>
    </dl>

    <p><strong>Final Deduction:</strong> Based on the quantitative evidence detailed above, <strong>5'3' Frame 1</strong> is the only reading frame that possesses a continuous streak extending beyond a single line (a long-read), while completely lacking the fragmented short-reads seen in all other frames. Therefore, it is the definitive biological candidate for the translated protein.</p>

    <hr>
    <h2>Appendix: Quick Guide to Understanding ExPASy Color Coding</h2>
    
    <p>When analyzing sequence translations, the ExPASy tool uses a specific visual color-coding system to help researchers quickly distinguish between potentially viable protein sequences and fragmented, non-coding reads. Understanding these subtle visual cues is essential for accurate Open Reading Frame (ORF) prediction.</p>

    <figure class="science-figure" data-id="Figure 4: " data-clean-src="${f024_004}">
        <img src="${f024_004}" alt="ExPASy translation showing red background and standalone red text" />
        <figcaption>A close-up view of an ExPASy translation output showing both red highlighted blocks (top frame) and standalone red text following stop codons (middle and bottom frames).</figcaption>
    </figure>

    <h3>1. Red Background Highlights (The True ORF)</h3>
    <p>The most important visual cue in ExPASy is the <strong>red highlighted background</strong>. This denotes a valid, continuous Open Reading Frame (ORF). As seen in the top reading frame of Figure 4, a true ORF typically begins with a start codon, represented by the amino acid Methionine (<strong>M</strong>). The red background will continue seamlessly across the amino acid sequence until the translation machinery mathematically encounters a stop codon.</p>

    <h3>2. Red Text with No Background (Fragment Bookmarks)</h3>
    <p>Students often notice scattered single letters printed in red ink without the red background (for example, the <strong>T</strong>, <strong>E</strong>, <strong>D</strong>, and <strong>P</strong> in the middle and bottom frames of Figure 4). If you observe the sequence closely, a consistent biological pattern emerges: <strong>these standalone red letters always immediately follow a stop codon (represented by a dash "-")</strong>.</p>
    
    <p>ExPASy highlights these specific letters in red to act as visual "bookmarks." Even though these short fragments do not start with a Methionine (M) and are highly fragmented, the software still translates the DNA mathematically. By making the very first amino acid after every stop codon red, ExPASy makes it much easier for researchers to visually separate and identify where a new, broken fragment begins within a "junk" reading frame.</p>

    <h3>Summary Checklist for Quick Scanning</h3>
    <ul>
        <li><strong>Red Background block starting with 'M':</strong> This is your primary target. It indicates a continuous Open Reading Frame.</li>
        <li><strong>Dash ( - ):</strong> A stop codon. This indicates that translation halts here, breaking the protein chain.</li>
        <li><strong>Red Text (e.g., T, E, D):</strong> The first amino acid translated immediately after a stop codon. You can generally ignore these when looking for your primary, full-length functional protein.</li>
    </ul>

    </article>


  `,
};

export default article;
