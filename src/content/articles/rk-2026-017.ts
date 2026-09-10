import { Article } from "../../lib/types";
import f017_001 from "./article_images/017_001.png";
import f017_002 from "./article_images/017_002.png";
import f017_003 from "./article_images/017_003.png";

const article: Article = {
  id: "RK-2026-017",
  title: "Protein structure prediction",
  date: "2026-02-10",
  tags: ["#Protein", "#Prediction", "#bioinformatics"],
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

    <h2>1. Hierarchical Levels of Protein Organization</h2>

    <p>
        The study of protein structure resides at the very center of modern molecular biology and biochemistry. It serves as the critical bridge connecting our genetic blueprint (DNA) to the actual biological functions that keep life going. 
    </p>

    <p>
        It is important to visualize proteins correctly: they are not just passive, straight chains of amino acids floating around. Instead, they are <strong>dynamic, three-dimensional macromolecular machines</strong>. Their specific spatial shapes (conformations) are what allow them to perform essential tasks, such as:
    </p>
    
    <ul>
        <li><strong>Catalyzing chemical reactions:</strong> Acting as enzymes to speed up vital metabolic processes.</li>
        <li><strong>Transmitting signals:</strong> Sending messages across cell membranes to coordinate cell behavior.</li>
        <li><strong>Providing structural integrity:</strong> Building the physical scaffolding of tissues and organs.<sup><a href="#ref1">1</a></sup></li>
    </ul>

    <p>
        The fundamental rule of structural biology is simple: <strong>structure determines function</strong>. This implies that if a protein loses its "native fold" (its correct, natural 3D shape), it will likely lose its ability to work or, worse, cause diseases (pathological conditions).
    </p>

    <p>
        Currently, we face a major scientific challenge: the "Sequence-Structure Gap." Thanks to high-throughput sequencing (rapid DNA reading technology), we have millions of known protein sequences. However, determining their actual 3D structures experimentally is slow and difficult. Therefore, developing computer methods to predict these structures has become a top global priority.<sup><a href="#ref3">3</a></sup>
    </p>

    <h3>1.1 The Four-Level Framework</h3>

    <p>
        To make sense of protein architecture, traditionally it is broken down into a <strong>hierarchical framework</strong> consisting of four distinct levels. Each level is defined by specific chemical bonds and physical interactions that hold it together. This hierarchy helps us understand how a simple, linear list of amino acids folds up to become a complex, functional 3D entity.<sup><a href="#ref1">1</a></sup>
    </p>

<iframe 
  src="https://RKPatel-1996.github.io/proteinstructureherirachy/" 
  width="100%" 
  height="600px" 
  style="border:none;">
</iframe>

<h3>1.2 Primary Structure: The Covalent Sequence</h3>

<p>
    The <strong>primary structure</strong> is the most fundamental level of protein organization. It represents the specific, linear sequence of amino acids linked together by strong chemical connections called <strong>covalent peptide bonds</strong>.<sup><a href="#ref6">6</a></sup>
</p>

<p>
    This sequence isn't random; it is a direct translation of the genetic code stored in your DNA. This specific order determines the unique chemical identity of the protein.
</p>

<figure class="science-figure" data-id="Figure 1" data-clean-src="${f017_001}">
    <img src="${f017_001}" alt="Peptide bond formation" />
    <figcaption>Peptide bond formation. The carboxyl group of one amino acid reacts with the amino group of another, releasing a water molecule (condensation) to form the peptide bond.</figcaption>
</figure>

<p>
    <strong>How is the chain built?</strong><br>
    Each amino acid is joined to the next through a process called a <strong>condensation reaction</strong>. This happens when the carboxyl group (acidic end) of one amino acid reacts with the amino group (basic end) of its neighbor. This reaction releases a molecule of water and forms a peptide bond. Because of this directional building process, every protein chain has a distinct starting point (the N-terminus) and an ending point (the C-terminus).<sup><a href="#ref2">2</a></sup>
</p>

<p>
    <strong>Why is the backbone rigid?</strong><br>
    The peptide bond itself is special. It possesses a <strong>partial double-bond character</strong> due to a phenomenon called <strong>resonance</strong>.
</p>

<p>
    In simple terms, resonance means the electrons are shared between the carbonyl oxygen and the amide nitrogen. This sharing makes the bond behave like a stiff double bond rather than a flexible single bond. This <strong>restricts rotation</strong> around the bond, making the polypeptide backbone relatively rigid.<sup><a href="#ref5">5</a></sup>
</p>

<p>
    This rigidity is crucial because it limits the "conformational space" (the total number of possible messy shapes) available to the protein. By limiting the chaos, the rigid backbone helps guide the protein to fold correctly into its functional shape.
</p>

<p>
    The <strong>specific order</strong> of amino acids is paramount. The sequence acts as the ultimate blueprint for all higher-order folding. For example, a short chain (tripeptide) consisting of <em>Alanine-Arginine-Glycine</em> is chemically and structurally distinct from one composed of <em>Glycine-Arginine-Alanine</em>. Even though the ingredients are the same, the order changes the outcome entirely.<sup><a href="#ref5">5</a></sup>
</p>





<h3>1.3 Secondary Structure: Localized Folding and Hydrogen Bonding</h3>

<p>
    <strong>Secondary structure</strong> refers to the local spatial arrangement of the polypeptide backbone atoms. Think of this as the protein chain beginning to fold into specific, repetitive shapes in small sections, rather than the entire 3D structure forming all at once.
</p>

<figure class="science-figure" data-id="Figure 2" data-clean-src="${f017_002}">
    <img src="${f017_002}" alt="Secondary structure of a protein" />
    <figcaption>Secondary structure of a protein. The polypeptide backbone folds into regular, repetitive patterns such as alpha-helices and beta-sheets.</figcaption>
</figure>
<p>
    These local motifs form spontaneously as the protein begins to fold. The primary "glue" stabilizing these structures is the <strong>hydrogen bond</strong>. Specifically, this bond forms between the Carbonyl oxygen (C=O) and the Amide hydrogen (N-H) of the peptide backbone.<sup><a href="#ref5">5</a></sup>
</p>

<p>
    The two most prominent and regular secondary structures are the <strong>Alpha-helix</strong> (&alpha;-helix) and the <strong>Beta-sheet</strong> (&beta;-sheet).
</p>

<h4>1.3.1 The Alpha-Helix (&alpha;-helix)</h4>

<p>
    The alpha-helix is a <strong>right-handed coiled conformation</strong> (twisting clockwise like a standard screw). It is exceptionally stable because it maximizes the number of hydrogen bonds within the structure. Imagine a spiral staircase where the steps are the amino acids.
</p>

<p>
    Structurally, an ideal alpha-helix is defined by specific geometric parameters:
</p>

<ul>
    <li>It completes one full turn every <strong>3.6 residues</strong>.</li>
    <li>It rises approximately <strong>5.4 Å</strong> (Angstroms) along the longitudinal axis with each turn.<sup><a href="#ref6">6</a></sup></li>
</ul>

<p>  In such structures, the Carbonyl group (C=O) of residue "i" forms a hydrogen bond with the Amide group (N-H) of residue "i+4". This means a residue binds to the one located four spots further down the chain. These bonds run <strong>parallel</strong> to the axis of the helix, providing it with significant tensile strength (resistance to being pulled apart).<sup><a href="#ref6">6</a></sup>
</p>

<h4>1.3.2 The Beta-Sheet (&beta;-sheet)</h4>

<p>
    In contrast to the tight coil of a helix, the <strong>Beta-strand</strong> (&beta;-strand) is a more extended, stretched-out conformation. When multiple beta-strands align side-by-side, they form <strong>Beta-sheets</strong> through inter-strand hydrogen bonding.<sup><a href="#ref6">6</a></sup>
</p>

<p>
    These sheets can be organized in three primary ways based on the direction of the protein chain (N-terminus to C-terminus):
</p>

<ol>
    <li><strong>Parallel:</strong> All strands run in the same direction (e.g., all Left &rightarrow; Right).</li>
    <li><strong>Antiparallel:</strong> Adjacent strands run in opposite directions (e.g., Left &rightarrow; Right, then Right &rightarrow; Left).</li>
    <li><strong>Mixed:</strong> Sheets containing both orientations.<sup><a href="#ref5">5</a></sup></li>
</ol>


<p>
    <strong>Stability Note:</strong> Antiparallel beta-sheets are generally <strong>more stable</strong> than parallel ones. This is because the hydrogen bonds in antiparallel sheets are shorter and more linear (straight), whereas in parallel sheets, the bonds are slightly angled, making them weaker.<sup><a href="#ref6">6</a></sup>
</p>

<h4>1.3.3 Random Coils and Loops</h4>

<p>
    Proteins are not made entirely of rigid helices and sheets. They also contain <strong>random coils and loops</strong>. These are often found on the surface of the protein and serve as flexible connectors between the regular secondary elements (like a hinge between two rigid parts).<sup><a href="#ref6">6</a></sup>
</p>

<p>
    While they might sound "random," they are functionally critical. Loops frequently form the <strong>active sites</strong> or <strong>binding pockets</strong> of the protein—the specific spots where the protein interacts with other molecules to perform its biological function.<sup><a href="#ref1">1</a></sup>
</p>


<h3>1.4 Tertiary Structure: The Three-Dimensional Global Fold</h3>

<p>
    <strong>Tertiary structure</strong> represents the overall, three-dimensional shape adopted by a single protein chain (polypeptide). This is the level where all the local twists (alpha-helices) and flat sheets (beta-sheets) from the secondary structure are folded together into a complex, functional form. This final shape is usually compact and globular (ball-like) or fibrous (rope-like).<sup><a href="#ref1">1</a></sup>
</p>

<p>
    <strong>What drives this folding?</strong><br>
    The primary driving force behind tertiary folding is the <strong>Hydrophobic Effect</strong>, phenomenon based on how molecules interact with water.
</p>

<p>
    Think of it like oil and water. <strong>Nonpolar side chains</strong> (the "oily" parts of amino acids) hate water, so they bury themselves deep inside the protein to escape the surrounding water. Meanwhile, <strong>polar and charged residues</strong> (the "water-loving" parts) stay on the outside surface to interact with the aqueous environment. This natural separation forces the protein to collapse into a stable, compact shape.<sup><a href="#ref2">2</a></sup>
</p>

<h4>1.4.1 Stabilizing Forces</h4>

<p>
    Once the protein folds, its shape is locked in place by a complex network of side-chain interactions. These fall into two categories:
</p>

<ul>
    <li>
        <strong>Noncovalent Forces:</strong> These are weaker individually but strong when combined.
        <ul>
            <li><strong>Hydrogen bonds:</strong> Weak attractions between polar groups.</li>
            <li><strong>Van der Waals interactions:</strong> Weak forces between close atoms.</li>
            <li><strong>Salt Bridges (Ionic Bonds):</strong> Strong electrostatic attractions between positively charged (basic) and negatively charged (acidic) amino acids.<sup><a href="#ref1">1</a></sup></li>
        </ul>
    </li>
    <li>
        <strong>Covalent Forces:</strong> These are permanent chemical bonds.
        <ul>
            <li><strong>Disulfide Bridges:</strong> A strong covalent bond formed between two Cysteine residues. Because these are actual chemical bonds (not just attractions), they act like "molecular safety pins," providing significant structural reinforcement. This makes the protein durable even when the environment (like temperature or pH) fluctuates.<sup><a href="#ref5">5</a></sup></li>
        </ul>
    </li>
</ul>


<h4>1.4.2 Protein Domains</h4>

<p>
    Many larger proteins are too big to fold all at once. Instead, they are organized into <strong>Domains</strong>.
</p>

<p>
    A domain is a self-stabilizing, modular unit. You can think of it as a "mini-protein" within the larger chain that can fold independently of the rest. Often, each domain has a specific job—one domain might bind to DNA, while another domain binds to a signaling molecule. This modularity makes the protein more robust and reduces the chance of it misfolding during synthesis.<sup><a href="#ref1">1</a></sup>
</p>

<h3>1.5 Quaternary Structure: Multi-Subunit Assemblies</h3>

<p>
    The highest level of protein organization is the <strong>Quaternary Structure</strong>. This level describes how multiple, individual protein chains (called <strong>subunits</strong>) come together to form a single, functional complex.<sup><a href="#ref1">1</a></sup>
</p>

<p>
    Proteins that have this level of complexity are often called <strong>Oligomers</strong> ("oligo" = few, "mer" = parts). Instead of acting alone, these subunits work together as a team.<sup><a href="#ref4">4</a></sup>
</p>

<p>
    <strong>What holds them together?</strong><br>
    The forces holding these separate chains together are generally the same noncovalent interactions that stabilize the tertiary structure:
</p>

<ul>
    <li><strong>Hydrophobic Forces:</strong> Buried patches on the surface of subunits stick together to avoid water.</li>
    <li><strong>Hydrogen Bonding:</strong> Precise matching of polar groups between chains.</li>
    <li><strong>Disulfide Bonds:</strong> In some cases, strong covalent links form between chains (inter-chain disulfide bonds) to lock the assembly in place.<sup><a href="#ref2">2</a></sup></li>
</ul>


<h4>1.5.1 Example: Hemoglobin</h4>

<p>
    The most famous example of quaternary structure is <strong>Hemoglobin</strong>. It is a "tetramer" (tetra = four), meaning it is built from four distinct chains: two alpha (&alpha;) chains and two beta (&beta;) chains.<sup><a href="#ref2">2</a></sup>
</p>


<figure class="science-figure" data-id="Figure 3" data-clean-src="${f017_003}">
<img src="${f017_003}" alt="Hierarchical structure of hemoglobin" />    
<figcaption> This figure illustrates the hierarchical structure of hemoglobin, from its heme prosthetic group to its overall quaternary assembly. (a) The top left inset shows the chemical structure of the Heme (Fe-protoporphyrin IX) group, with a central iron atom. The main view displays the quaternary structure of hemoglobin, a tetrameric protein composed of four polypeptide subunits (two α-chains: α1, α2; and two β-chains: β1, β2). Each subunit is a globular protein primarily consisting of α-helices and coils, and each contains a heme group. (b) The bottom left panel shows the tertiary structure of a single oxygenated α-chain, with its N-terminal and C-terminal ends labeled. A close-up of the heme pocket (bottom right) reveals the heme group with a bound oxygen molecule (O₂). The iron atom of the heme is coordinated by the proximal histidine (HisF8) residue, while the distal histidine (HisE7) residue is positioned near the oxygen-binding site.
</figcaption>
</figure>

<p>
    This assembly is crucial because it allows for a phenomenon called <strong>Cooperativity</strong>.
</p>

<p>
    <strong>What is Cooperativity?</strong><br>
    Imagine four people holding hands. If one person pulls, the others feel it and move too.
</p>

<p>
    In hemoglobin, when an oxygen molecule (ligand) binds to just <em>one</em> subunit, it causes that subunit to slightly change its shape. Because the subunits are physically connected, this shape change is transmitted to the other three subunits. This "nudge" makes the remaining subunits <em>more likely</em> to bind oxygen too. This coordinated behavior is essential for efficient oxygen transport in the blood and is a direct result of quaternary organization.<sup><a href="#ref2">2</a></sup>
</p>



<h2>2. Experimental Methods for Structural Determination</h2>

<p>
    To accurately figure out the precise 3D location of every single atom in a protein, structural biologists use high-tech experimental methods.
</p>

<p>
    There are three primary heavy-hitters in this field: <strong>X-ray Crystallography</strong>, <strong>Nuclear Magnetic Resonance (NMR) Spectroscopy</strong>, and <strong>Cryo-Electron Microscopy (Cryo-EM)</strong>.<sup><a href="#ref4">4</a></sup>
</p>

<h3>2.1 X-ray Crystallography</h3>

<p>
    This method has long been the dominant technique in structural biology, accounting for approximately <strong>84-90%</strong> of all protein structures deposited in the global archive known as the <strong>Protein Data Bank (PDB)</strong>.<sup><a href="#ref11">11</a></sup>
</p>

<p>
    Think of it as taking a high-resolution photograph of a brick wall. To get the picture, the bricks (proteins) must be stacked perfectly in a repeating pattern.
</p>

<ul>
    <li><strong>Physical State (The Crystal):</strong> The protein cannot be floating freely. It must be forced to form a <strong>highly ordered crystal</strong>. This is like turning a bucket of loose lego bricks into a perfectly stacked wall.<sup><a href="#ref12">12</a></sup></li>
</ul>

<p><strong>How the Experiment Works:</strong></p>

<p>
    The process begins by exposing this crystal to a concentrated beam of X-rays. These high-powered beams are typically generated by a massive particle accelerator called a <strong>Synchrotron Light Source</strong>.<sup><a href="#ref11">11</a></sup>
</p>

<p>
    When the X-rays hit the crystal, they interact with the electrons surrounding the atoms. Instead of passing straight through, the X-rays bounce off (scatter) in a specific pattern of spots. Scientists call these spots <strong>reflections</strong>. By carefully measuring the intensity and phase of these reflections, researchers can use complex mathematics to calculate an <strong>Electron Density Map</strong>.<sup><a href="#ref16">16</a></sup>
</p>

<p>
    You can think of this map as a "topographical map" of the protein. It shows the distribution of electrons within the crystal, allows tracing to figure out the exact shape of the protein molecule.
</p>

<ul>
    <li><strong>The Major Advantage (Atomic Resolution):</strong> The primary strength of this method is its exceptional <strong>atomic resolution</strong>. It often reveals the precise geometry of the protein's active sites (where the chemistry happens) and how it interacts with drug molecules (ligands).<sup><a href="#ref13">13</a></sup></li>

    <li><strong>The "Static" Problem:</strong> Because the proteins are locked in a crystal, this method generally gives us a <strong>static snapshot</strong>. It captures the protein frozen in one specific pose, so we miss out on how it wiggles or moves in a real physiological environment.<sup><a href="#ref13">13</a></sup></li>

    <li><strong>Main Challenge (The Bottleneck):</strong> The <strong>Crystallization Bottleneck</strong>. Growing a perfect protein crystal is more art than science. Many proteins—especially <strong>membrane proteins</strong> and large, flexible complexes—simply refuse to crystallize, making this method impossible for them.<sup><a href="#ref13">13</a></sup></li>
</ul>
<h3>2.2 Nuclear Magnetic Resonance (NMR) Spectroscopy</h3>

<p>
    If X-ray crystallography is a photograph, NMR is like a movie. It detects the magnetic properties of atomic nuclei to figure out the structure, allowing us to study proteins in their native state.
</p>

<p>
    <strong>How does it work?</strong><br>
    This method exploits a specific physical property called <strong>nuclear spin</strong> found in certain atoms, such as Hydrogen (<sup>1</sup>H), Carbon-13 (<sup>13</sup>C), and Nitrogen-15 (<sup>15</sup>N).<sup><a href="#ref12">12</a></sup>
</p>

<p>
    When these atoms are placed in a powerful magnetic field and hit with specific <strong>radiofrequency pulses</strong>, they absorb energy and transition between different spin states. You can think of it like tuning a radio: each nucleus resonates at a specific frequency depending on its local chemical environment and its neighbors. By measuring these specific frequencies, scientists can calculate exactly where each atom is located relative to others.<sup><a href="#ref12">12</a></sup>
</p>



<ul>
    <li><strong>Physical State (In Solution):</strong> The protein floats freely in a liquid buffer. This is much closer to how proteins actually exist inside a living cell (which is mostly water).<sup><a href="#ref4">4</a></sup></li>
    
    <li><strong>The "Dynamic" Advantage:</strong> Because the protein is free to move, NMR is unique in its ability to characterize <strong>structural dynamics</strong>. It can reveal <strong>folding pathways</strong> (the steps a protein takes to reach its shape) and <strong>weak molecular interactions</strong> that are often invisible in rigid crystal structures.<sup><a href="#ref4">4</a></sup></li>
    
    <li><strong>Size Limit:</strong> This is the major bottleneck. NMR is technically complex and generally limited to relatively small proteins (typically less than <strong>30-50 kDa</strong>). As proteins get bigger, the magnetic signals overlap, creating a crowded, unreadable mess.<sup><a href="#ref12">12</a></sup></li>
    
    <li><strong>Sample Needs (Isotope Labeling):</strong> To make the atoms visible to the magnet, you cannot use standard protein preps. You must produce proteins that are <strong>uniformly labeled</strong> with stable isotopes like Hydrogen (<sup>1</sup>H), Carbon-13 (<sup>13</sup>C), and Nitrogen-15 (<sup>15</sup>N). This production process can be both time-consuming and expensive.<sup><a href="#ref11">11</a></sup></li>
</ul>

<h3>2.3 Cryo-Electron Microscopy (Cryo-EM): The Resolution Revolution</h3>

<p>
    In recent years, Cryo-EM has emerged as a revolutionary technique, particularly for studying <strong>large macromolecular complexes</strong> that are too difficult or impossible to crystallize.<sup><a href="#ref15">15</a></sup>
</p>

<p>
    <strong>How does it work?</strong><br>
    The process begins with a thin film of protein solution being <strong>flash-frozen</strong> in liquid ethane. This cooling happens so fast that water molecules don't have time to arrange themselves into a crystal lattice. Instead, they form <strong>vitreous ice</strong>—a glass-like, solid state of water that does not damage the delicate protein structure.<sup><a href="#ref4">4</a></sup>
</p>

<p>
    Once frozen, an electron beam is passed through the sample. Instead of light, this microscope uses electrons. A high-tech camera called a <strong>direct electron detector</strong> captures 2D images (projections) of the molecules.
</p>

<p>
    Think of these 2D images like shadow puppets. The molecules are frozen in random orientations—some facing forward, some sideways, some upside down.
</p>


<p>
    <strong>From 2D Shadows to 3D Models:</strong><br>
    The magic happens in the computer. Advanced computational algorithms take thousands of these 2D images and mathematically figure out how they relate to each other. By combining these different views, the computer reconstructs a high-resolution <strong>3D density map</strong>.<sup><a href="#ref16">16</a></sup>
</p>

<p>
    <strong>Why is this a "Revolution"?</strong><br>
    Cryo-EM has effectively bridged the gap between cellular imaging (seeing the whole cell) and atomic structural biology (seeing individual atoms). It allows us to visualize massive biological machines like ribosomes, viruses, and enzyme complexes in incredible detail.<sup><a href="#ref11">11</a></sup>
</p>

<p>
    Historically, Cryo-EM was nicknamed "blob-ology" because it only provided blurry, medium-resolution shapes. However, recent advances in hardware (better detectors) and software have allowed it to achieve <strong>near-atomic resolution</strong>. Today, it rivals X-ray crystallography in precision while being able to capture proteins in multiple different conformational states.<sup><a href="#ref15">15</a></sup>
</p>



<h2>3. Computational Methods for Protein Structure Prediction</h2>

<p>
    The exponential growth of genomic (DNA) and proteomic (protein) sequence data has created a massive backlog. We have millions of gene sequences, but we have experimentally determined the 3D structures for only a tiny fraction of them. This discrepancy is often called the <strong>structural gap</strong>.
</p>

<p>
    <strong>Computational Protein Structure Prediction (PSP)</strong> methods have been developed to bridge this gap. The goal is simple but ambitious: predict the accurate 3D fold of a protein using <em>only</em> its linear amino acid sequence as the input.<sup><a href="#ref3">3</a></sup>
</p>

<h3>3.1 Classification of Prediction Methodologies</h3>

<p>
    Computational techniques are generally classified into four broad categories. The choice of method depends on two things: whether we have a similar "solved" structure to use as a guide, and what physical principles we apply.<sup><a href="#ref3">3</a></sup>
</p>

<ol>
    <li>
        <strong>Homology (Comparative) Modeling</strong>
        <p>
            This is essentially the "copy-paste-refine" approach. It is currently the most accurate and reliable method, but it has a catch: it only works if the target protein has a clear evolutionary relationship (homology) to a protein that has <em>already</em> been solved experimentally. This solved protein serves as the <strong>template</strong>.<sup><a href="#ref19">19</a></sup>
        </p>
    </li>

    <li>
        <strong>Fold Recognition (Threading)</strong>
        <p>
            This method is used when the target sequence does not look like anything we've seen before (low sequence similarity), but we suspect it folds into a shape that already exists in nature.
        </p>
        <p>
            Think of it like trying on clothes, you might have tentative idea which one will fit so you go around trying few of them to see which one fits the best. Similarly, the computer takes the unknown sequence and attempts to "thread" (fit) it into various known 3D shapes (folds) from a database to see which one is the best energetic fit, even if the sequences don't match perfectly.<sup><a href="#ref3">3</a></sup>
        </p>
    </li>

    <li>
        <strong>Ab Initio (De Novo) Prediction</strong>
        <p>
            <em>Ab Initio</em> is Latin for "from the beginning." These methods attempt to predict the structure from scratch using the first principles of physics, without looking at any known templates.
        </p>
        <p>
            Here, the physical forces acting on atoms are simulated (using <strong>force fields</strong>) and search through the immense number of possible shapes (<strong>conformational space</strong>) to find the most stable one. Because this requires massive computing power to test every possible twist and turn, it is generally limited to very small proteins.<sup><a href="#ref3">3</a></sup>
        </p>
    </li>

    <li>
        <strong>Machine Learning and Deep Learning</strong>
        <p>
            This is the modern game-changer. Approaches like <strong>AlphaFold2</strong> utilize deep neural networks—computer systems modeled after the human brain—to recognize complex patterns in evolutionary data. These methods can now provide high-resolution structural predictions that often rival the accuracy of actual lab experiments.<sup><a href="#ref3">3</a></sup>
        </p>
    </li>
</ol>



<h2>4. SWISS-MODEL: A Technical Deep Dive into the Pipeline</h2>

<p>
    <strong>SWISS-MODEL</strong> is a leading web-based service dedicated to <strong>automated protein structure homology modeling</strong>. Think of it as a highly sophisticated, automated factory for building 3D protein models.<sup><a href="#ref26">26</a></sup>
</p>

<p>
    It provides a comprehensive workspace where researchers can generate high-quality models with minimal user intervention (the "autopilot" mode). However, for difficult cases, it also offers advanced modes that allow for manual optimization and expert control.<sup><a href="#ref20">20</a></sup>
</p>


<figure class="science-figure" data-id="Figure 14" data-clean-src="swiss_model_pipeline_overview">
    <figcaption><strong>Figure 14:</strong> The SWISS-MODEL Workflow. The pipeline moves from input sequence to template search, selection, and finally model building and quality assessment.</figcaption>
</figure>

<h3>4.1 The Core Steps of the SWISS-MODEL Workflow</h3>

<p>
    The process of building a model in SWISS-MODEL is structured into several discrete steps. Each step utilizes specialized software algorithms and databases to ensure accuracy.<sup><a href="#ref26">26</a></sup>
</p>

<h4>4.1.1. Input Data and Target Characterization</h4>

<p>
    The modeling process begins with the submission of your <strong>Target Sequence</strong> (the protein you want to study). This is usually provided in <strong>FASTA format</strong> (a simple text-based format for sequences) or by providing a <strong>UniProtKB accession code</strong> (the unique ID card for a protein).<sup><a href="#ref24">24</a></sup>
</p>

<p>
    <strong>Dealing with Multi-Part Proteins:</strong><br>
    Many proteins are <strong>heteromers</strong>, meaning they are composed of multiple different subunits (chains) sticking together. If your target is a heteromer, you must provide the sequences for <em>each</em> individual chain. This allows the software to accurately model the <strong>quaternary structure</strong> (the full assembly).<sup><a href="#ref24">24</a></sup>
</p>

<h4>4.1.2. Template Identification and Library Search</h4>

<p>
    Once the software has your target sequence, it goes on a treasure hunt. It searches the <strong>SWISS-MODEL Template Library (SMTL)</strong>, which is a curated, clean version of the Protein Data Bank (PDB).<sup><a href="#ref24">24</a></sup>
</p>

<p>
    To find the best match, it uses two primary search methods:
</p>

<ul>
    <li>
        <strong>BLAST (Basic Local Alignment Search Tool):</strong><br>
        This is a rapid tool that identifies templates with high local sequence identity. It works best when the target and template are close relatives.<sup><a href="#ref24">24</a></sup>
    </li>
    <li>
        <strong>HHblits (HMM-HMM-based lightning-fast iterative sequence search):</strong><br>
        This is the "detective." It is a highly sensitive tool that uses <strong>profile-profile alignment</strong>. Instead of just comparing letter-by-letter, it looks for patterns of conservation. This allows it to detect <strong>remote homologs</strong>—evolutionary cousins that might look different on the surface but share the same core structure.<sup><a href="#ref24">24</a></sup>
    </li>
</ul>

<h4>4.1.3. Template Selection and Ranking</h4>

<p>
    The search usually returns many possible templates. These must be ranked to decide which one will produce the best model.<sup><a href="#ref24">24</a></sup>
</p>

<p>
    <strong>How does it rank them?</strong><br>
    The ranking is primarily based on two scores:
</p>

<dl>
    <dt><strong>GMQE (Global Model Quality Estimation)</strong></dt>
    <dd>This score predicts the expected quality of the final model. It combines the alignment score with structural features. A higher GMQE (closer to 1) means the model is likely to be accurate.<sup><a href="#ref24">24</a></sup></dd>

    <dt><strong>QSQE (Quaternary Structure Quality Estimate)</strong></dt>
    <dd>This score is specific to complexes (multi-chain proteins). It estimates how likely the template's assembly (how the chains fit together) matches the biological reality of your target.<sup><a href="#ref24">24</a></sup></dd>
</dl>

<p>
    While the server can automatically select the mathematical "best" template, users often manually intervene. You might select a lower-ranked template if it contains a specific <strong>ligand</strong> (drug molecule), has a better experimental <strong>resolution</strong>, or captures the protein in a specific <strong>conformational state</strong> (e.g., you specifically want the "active" form, not the "inactive" one).<sup><a href="#ref22">22</a></sup>
</p>

<h4>4.1.4. Alignment and Model Construction</h4>

<p>
    Once a template is chosen, the real construction work begins. The alignment between your target and the template serves as the blueprint. SWISS-MODEL uses a modeling engine called <strong>ProMod3</strong> to build the 3D structure.<sup><a href="#ref20">20</a></sup>
</p>

<h4>4.1.5. Evaluation and Quality Estimation</h4>

<p>
    The final step in the pipeline is the rigorous evaluation of the model's accuracy. Just like a spell-checker reviews your text, this step reviews the protein structure. It provides the user with several quantitative metrics and diagnostic graphs to assess the reliability of the structure.<sup><a href="#ref26">26</a></sup>
</p>


<figure class="science-figure" data-id="Figure 16" data-clean-src="swiss_model_quality_estimation_graph">
    <figcaption><strong>Figure 16:</strong> Quality Estimation. An example of a GMQE and QMEAN plot provided by SWISS-MODEL, showing how the predicted model compares to experimental structures.</figcaption>
</figure>


<h3>4.2 Quantitative Scoring and Quality Assessment in SWISS-MODEL</h3>

<p>
    The validity of a homology model is highly dependent on the degree of sequence identity between the target and the template. To help you judge if a model is "good" or "garbage," SWISS-MODEL provides several advanced scoring functions.<sup><a href="#ref20">20</a></sup>
</p>

<h4>4.2.1 GMQE (Global Model Quality Estimation)</h4>

<p>
    <strong>What is it?</strong><br>
    GMQE is a heuristic (educated guess) score expressed as a number between <strong>0 and 1</strong>.
</p>

<p>
    <strong>How to read it:</strong><br>
    Higher numbers are better. A score closer to 1 indicates higher expected reliability.
</p>

<p>
    It combines information from the target-template alignment (like sequence identity and coverage) with properties of the template structure. Once a model is built, the GMQE is updated by incorporating the QMEANDisCo score (see below) to provide a more accurate estimation of the tertiary structure's quality.<sup><a href="#ref31">31</a></sup>
</p>


<h4>4.2.2 QMEAN: Qualitative Model Energy ANalysis</h4>

<p>
    QMEAN is a sophisticated composite scoring function used for <strong>absolute quality estimation</strong>. It assesses several structural parameters—including torsion angles (twists), solvation energy (interaction with water), and atom-atom interactions—and compares them to the values typically found in high-resolution experimental structures.<sup><a href="#ref29">29</a></sup>
</p>

<h4>4.2.3. Key QMEAN Metrics:</h4>

<ul>
    <li>
        <strong>QMEAN Z-scores:</strong><br>
        The raw QMEAN scores are transformed into <strong>Z-scores</strong>. This statistical method relates the model's quality to what would be expected from a high-quality X-ray structure of similar size.<br>
        <br>
        <strong>How to read it:</strong> A Z-score <strong>near 0</strong> indicates a model of comparable quality to experimental structures. A very low score (e.g., -4.0 or lower) indicates a poor quality model.<sup><a href="#ref29">29</a></sup>
    </li>

    <li>
        <strong>QMEANDisCo (Distance Constraints):</strong><br>
        This is the default scoring method in the current SWISS-MODEL pipeline. It enhances the standard QMEAN by incorporating <strong>distance constraints (DisCo)</strong> extracted from homologous structures. It improves the accuracy of local, residue-level quality estimates (checking if atoms are the correct distance apart).<sup><a href="#ref27">27</a></sup>
    </li>
</ul>

<h3>4.3 Diagnostic Graphs and Visual Validation Tools</h3>

<p>
    In addition to giving you a single global score, SWISS-MODEL generates several interactive plots and diagnostic tools. In case of problems, these tools help you pinpoint exactly which specific parts of your protein engine (model) might be broken or unreliable.<sup><a href="#ref20">20</a></sup>
</p>

<h4>4.3.1 Local Quality Estimate Plot</h4>

<p>
    While a global score tells you if the <em>entire</em> model is good, this plot breaks it down by <strong>residue</strong> (amino acid). It tells you exactly which parts of the chain are trustworthy and which are just guesses.<sup><a href="#ref24">24</a></sup>
</p>

<p>
    In the 3D viewer, this is often shown as a color gradient:
</p>

<ul>
    <li><strong>Blue:</strong> High confidence (Score > 0.8). These parts are solid.</li>
    <li><strong>Orange/Red:</strong> Low confidence (Score < 0.6). These parts are shaky.</li>
</ul>

<p>
    <strong>Why is it red?</strong><br>
    Red regions usually correspond to <strong>long loops</strong> (which are flexible and hard to predict) or segments where the alignment between your target and the template was ambiguous or difficult to map.<sup><a href="#ref24">24</a></sup>
</p>


<figure class="science-figure" data-id="Figure 18" data-clean-src="swiss_model_local_quality_estimate">
    <figcaption><strong>Figure 18:</strong> Local Quality Estimate. The graph shows the expected error for each amino acid. The 3D model (right) is colored accordingly, with blue regions being reliable and red regions being uncertain.</figcaption>
</figure>

<h4>4.3.2 Comparison with Experimental Structures</h4>

<p>
    This is a "sanity check." It uses a scatter plot to compare the <strong>Global QMEAN score</strong> of your model against thousands of real, high-resolution structures from the PDB.<sup><a href="#ref29">29</a></sup>
</p>

<p>
    It allows you to see if your model's geometry falls within the expected range for a native, well-folded protein. If your model appears as an outlier far away from the cluster of real proteins, it suggests something is physically wrong with it.<sup><a href="#ref29">29</a></sup>
</p>

<h4>4.3.3 The Ramachandran Plot</h4>

<p>
    The <strong>Ramachandran plot</strong> remains one of the most fundamental tools for validating protein geometry. It checks if the backbone of your protein is bending in physically possible ways.<sup><a href="#ref8">8</a></sup>
</p>

<p>
    It plots the two main backbone torsion (twisting) angles for each residue:
</p>

<p>The angles are defined as:</p>
$$ \phi \text{ (Phi)} \quad \text{and} \quad \psi \text{ (Psi)} $$

<ul>
    <li>
        <strong>Favored and Allowed Regions:</strong><br>
        These are the "safe zones" on the plot. They represent combinations of angles where atoms do not crash into each other (no steric clashes). Most residues in a good model should fall here, forming standard shapes like <strong>alpha-helices</strong> and <strong>beta-sheets</strong>.<sup><a href="#ref8">8</a></sup>
    </li>

    <li>
        <strong>Outliers:</strong><br>
        Residues falling outside the safe zones are called <strong>outliers</strong>. This indicates a structural error. It could be a "ring punch" (where a bond passes impossibly through a ring structure) or just distorted geometry caused by a bad template.<sup><a href="#ref8">8</a></sup>
    </li>
</ul>


<figure class="science-figure" data-id="Figure 19" data-clean-src="ramachandran_plot_regions">
    <figcaption><strong>Figure 19:</strong> The Ramachandran Plot. Green areas represent "favored" regions where backbone angles are physically stable. White areas represent "forbidden" regions where atoms would clash.</figcaption>
</figure>

<h4>4.3.4 MolProbity Integration and All-Atom Analysis</h4>

<p>
    SWISS-MODEL also incorporates <strong>MolProbity</strong>, a high-quality validation suite. While other tools look at the backbone, MolProbity performs an <strong>all-atom contact analysis</strong>.
</p>

<p>
    It calculates a <strong>Clashscore</strong>, which counts how many atoms are impossibly close to one another (bumping into each other). It also checks <strong>Rotamers</strong> (side-chain orientations) and deviations in Carbon-beta ($C\beta$) positions, offering a comprehensive check of the model's stereochemical health.<sup><a href="#ref35">35</a></sup>
</p>

<h3>4.4 Challenges and Future Outlook in Structural Prediction</h3>

<p>
    Despite the sophistication of tools like SWISS-MODEL, homology modeling is not magic. It faces persistent challenges.
</p>

<p>
    <strong>The "Twilight Zone"</strong><br>
    This is the danger zone where the sequence identity between your target and the template falls below <strong>20-30%</strong>. In this region, alignment software often makes mistakes, leading to completely incorrect fold predictions. Uncertainty is high here.<sup><a href="#ref24">24</a></sup>
</p>

<p>
    <strong>Difficult Features</strong><br>
    Modeling <strong>long, flexible loops</strong> and the precise orientation of side chains in highly dynamic <strong>active sites</strong> remains a major hurdle. These are often the most important parts of the protein, but also the hardest to predict accurately.<sup><a href="#ref9">9</a></sup>
</p>

<div class="references-section">
    <h2>References</h2>
    <ol>
        <li id="ref1">
            <strong>Biochemistry, Tertiary Protein Structure</strong>. StatPearls - NCBI Bookshelf - NIH. Accessed on February 13, 2026. <br>
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK470269/" target="_blank">https://www.ncbi.nlm.nih.gov/books/NBK470269/</a>
        </li>
        <li id="ref2">
            <strong>What Are Proteins? Definition, Types & Examples</strong>. Cleveland Clinic. Accessed on February 13, 2026. <br>
            <a href="https://my.clevelandclinic.org/health/body/proteins" target="_blank">https://my.clevelandclinic.org/health/body/proteins</a>
        </li>
        <li id="ref3">
            <strong>Computational Methods for Protein Structure Prediction</strong>. IJERT. Accessed on February 13, 2026. <br>
            <a href="https://www.ijert.org/computational-methods-for-protein-structure-prediction" target="_blank">https://www.ijert.org/computational-methods-for-protein-structure-prediction</a>
        </li>
        <li id="ref4">
            <strong>A Comprehensive Review of Experimental and Computational Methods for Protein Structure Prediction and Classification</strong>. IEEE Xplore. Accessed on February 13, 2026. <br>
            <a href="https://ieeexplore.ieee.org/iel8/10850891/10850921/10851085.pdf" target="_blank">https://ieeexplore.ieee.org/iel8/10850891/10850921/10851085.pdf</a>
        </li>
        <li id="ref5">
            <strong>Levels of Protein Structure</strong>. MCAT Biochemistry - MedSchoolCoach. Accessed on February 13, 2026. <br>
            <a href="https://www.medschoolcoach.com/levels-of-protein-structure-mcat-biochemistry/" target="_blank">https://www.medschoolcoach.com/levels-of-protein-structure-mcat-biochemistry/</a>
        </li>
        <li id="ref6">
            <strong>Levels of Protein Organization</strong>. University of Vermont. Accessed on February 13, 2026. <br>
            <a href="https://comis.med.uvm.edu/VIC/coursefiles/MD540/MD540-Protein_Organization_10400_574581210/Protein-org/Protein_Organization_print.html" target="_blank">https://comis.med.uvm.edu/VIC/coursefiles/MD540/MD540-Protein_Organization_10400_574581210/Protein-org/Protein_Organization_print.html</a>
        </li>
        <li id="ref7">
            <strong>Explain the four levels of protein structure, indicating the significance of each level</strong>. MyTutor. Accessed on February 13, 2026. <br>
            <a href="https://www.mytutor.co.uk/answers/40388/A-Level/Biology/Explain-the-four-levels-of-protein-structure-indicating-the-significance-of-each-level/" target="_blank">https://www.mytutor.co.uk/answers/40388/A-Level/Biology/Explain-the-four-levels-of-protein-structure-indicating-the-significance-of-each-level/</a>
        </li>
        <li id="ref8">
            <strong>Chapter 1: Secondary structure and backbone conformation</strong>. SWISS-MODEL. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/course/text/chapter1.htm" target="_blank">https://swissmodel.expasy.org/course/text/chapter1.htm</a>
        </li>
        <li id="ref9">
            <strong>Advances in Homology Protein Structure Modeling</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1839925/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC1839925/</a>
        </li>
        <li id="ref10">
            <strong>Levels of Protein Organization (Excerpt)</strong>. University of Vermont. Accessed on February 13, 2026. <br>
            <a href="https://comis.med.uvm.edu/VIC/coursefiles/MD540/MD540-Protein_Organization_10400_574581210/Protein-org/Protein_Organization_print.html#:~:text=A%20protein's%20primary%20structure%20is,and%20quaternary%20structure%20is%20the" target="_blank">Direct Link</a>
        </li>
        <li id="ref11">
            <strong>Comparison Of Structural Techniques: X-ray, NMR, Cryo-EM</strong>. Peak Proteins. Accessed on February 13, 2026. <br>
            <a href="https://peakproteins.com/a-comparison-of-the-structural-techniques-used-at-sygnature-discovery-x-ray-crystallography-nmr-and-cryo-em/" target="_blank">https://peakproteins.com/a-comparison-of-the-structural-techniques-used-at-sygnature-discovery-x-ray-crystallography-nmr-and-cryo-em/</a>
        </li>
        <li id="ref12">
            <strong>Macromolecular Structure Determination: Comparison of X-ray Crystallography and NMR Spectroscopy</strong>. ResearchGate. Accessed on February 13, 2026. <br>
            <a href="https://www.researchgate.net/publication/277706893_Macromolecular_Structure_Determination_Comparison_of_X-ray_Crystallography_and_NMR_Spectroscopy" target="_blank">https://www.researchgate.net/publication/277706893_Macromolecular_Structure_Determination_Comparison_of_X-ray_Crystallography_and_NMR_Spectroscopy</a>
        </li>
        <li id="ref13">
            <strong>X-Ray Crystallography vs. NMR Spectroscopy</strong>. News-Medical.Net. Accessed on February 13, 2026. <br>
            <a href="https://www.news-medical.net/life-sciences/X-Ray-Crystallography-vs-NMR-Spectroscopy.aspx" target="_blank">https://www.news-medical.net/life-sciences/X-Ray-Crystallography-vs-NMR-Spectroscopy.aspx</a>
        </li>
        <li id="ref14">
            <strong>CD vs NMR vs X-ray: Which Structural Analysis Method is Right for You?</strong>. MtoZ Biolabs. Accessed on February 13, 2026. <br>
            <a href="https://www.mtoz-biolabs.com/cd-vs-nmr-vs-x-ray-which-structural-analysis-method-is-right-for-you.html" target="_blank">https://www.mtoz-biolabs.com/cd-vs-nmr-vs-x-ray-which-structural-analysis-method-is-right-for-you.html</a>
        </li>
        <li id="ref15">
            <strong>X-rays in the Cryo-EM Era: Structural Biology's Dynamic Future</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5999524/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC5999524/</a>
        </li>
        <li id="ref16">
            <strong>Cryo-EM vs. X-ray Crystallography</strong>. JEOL USA blog. Accessed on February 13, 2026. <br>
            <a href="https://www.jeolusa.com/NEWS-EVENTS/Blog/cryo-em-vs-x-ray-crystallography" target="_blank">https://www.jeolusa.com/NEWS-EVENTS/Blog/cryo-em-vs-x-ray-crystallography</a>
        </li>
        <li id="ref17">
            <strong>Comparison of NMR and X-ray crystallography</strong>. Birkbeck College. Accessed on February 13, 2026. <br>
            <a href="https://www.cryst.bbk.ac.uk/pps97/assignments/projects/ambrus/html.htm" target="_blank">https://www.cryst.bbk.ac.uk/pps97/assignments/projects/ambrus/html.htm</a>
        </li>
        <li id="ref18">
            <strong>Limitations and lessons in the use of X-ray structural information in drug design</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7185550/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC7185550/</a>
        </li>
        <li id="ref19">
            <strong>Homology Modeling a Fast Tool for Drug Discovery: Current Perspectives</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3507339/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC3507339/</a>
        </li>
        <li id="ref20">
            <strong>Automated Protein Structure Modeling with SWISS-MODEL Workspace and the Protein Model Portal</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5651980/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC5651980/</a>
        </li>
        <li id="ref21">
            <strong>Experimentally-Driven Protein Structure Modeling</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7214187/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC7214187/</a>
        </li>
        <li id="ref22">
            <strong>Protein homology modelling and its use in South Africa</strong>. SciELO. Accessed on February 13, 2026. <br>
            <a href="https://scielo.org.za/scielo.php?script=sci_arttext&pid=S0038-23532008000100001" target="_blank">https://scielo.org.za/scielo.php?script=sci_arttext&pid=S0038-23532008000100001</a>
        </li>
        <li id="ref23">
            <strong>Homology modeling</strong>. Wikipedia. Accessed on February 13, 2026. <br>
            <a href="https://en.wikipedia.org/wiki/Homology_modeling" target="_blank">https://en.wikipedia.org/wiki/Homology_modeling</a>
        </li>
        <li id="ref24">
            <strong>Step-by-Step Homology Modeling with SWISS-MODEL</strong>. InSilico Design. Accessed on February 13, 2026. <br>
            <a href="https://www.insilicodesign.com/en/post/step-by-step-homology-modeling-with-swiss-model-from-template-to-3d-structure" target="_blank">https://www.insilicodesign.com/en/post/step-by-step-homology-modeling-with-swiss-model-from-template-to-3d-structure</a>
        </li>
        <li id="ref25">
            <strong>Exploring Protein Function through Homology Modeling</strong>. SciTechnol. Accessed on February 13, 2026. <br>
            <a href="https://www.scitechnol.com/peer-review/exploring-protein-function-through-homology-modeling-a06H.php?article_id=22084" target="_blank">https://www.scitechnol.com/peer-review/exploring-protein-function-through-homology-modeling-a06H.php?article_id=22084</a>
        </li>
        <li id="ref26">
            <strong>SWISS-MODEL workspace: a web-based environment for protein structure homology modelling</strong>. Bioinformatics | Oxford Academic. Accessed on February 13, 2026. <br>
            <a href="https://academic.oup.com/bioinformatics/article/22/2/195/423760" target="_blank">https://academic.oup.com/bioinformatics/article/22/2/195/423760</a>
        </li>
        <li id="ref27">
            <strong>SWISS-MODEL Server</strong>. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/" target="_blank">https://swissmodel.expasy.org/</a>
        </li>
        <li id="ref28">
            <strong>Help - SWISS-MODEL</strong>. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/docs/help" target="_blank">https://swissmodel.expasy.org/docs/help</a>
        </li>
        <li id="ref29">
            <strong>Examples - SWISS-MODEL</strong>. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/docs/examples" target="_blank">https://swissmodel.expasy.org/docs/examples</a>
        </li>
        <li id="ref30">
            <strong>SWISS-MODEL: an automated protein homology-modeling server</strong>. Mozart Bioinformatics Server @ RPI. Accessed on February 13, 2026. <br>
            <a href="https://www.bioinfo.rpi.edu/bystrc/courses/biol4550/swissmodel.pdf" target="_blank">https://www.bioinfo.rpi.edu/bystrc/courses/biol4550/swissmodel.pdf</a>
        </li>
        <li id="ref31">
            <strong>QMEAN Help - SWISS-MODEL</strong>. Expasy. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/qmean/help" target="_blank">https://swissmodel.expasy.org/qmean/help</a>
        </li>
        <li id="ref32">
            <strong>QMEAN Server</strong>. SWISS-MODEL. Accessed on February 13, 2026. <br>
            <a href="https://swissmodel.expasy.org/qmean/" target="_blank">https://swissmodel.expasy.org/qmean/</a>
        </li>
        <li id="ref33">
            <strong>The structure assessment web server: for proteins, complexes and more</strong>. Oxford Academic. Accessed on February 13, 2026. <br>
            <a href="https://academic.oup.com/nar/article-pdf/52/W1/W318/58436002/gkae270.pdf" target="_blank">https://academic.oup.com/nar/article-pdf/52/W1/W318/58436002/gkae270.pdf</a>
        </li>
        <li id="ref34">
            <strong>Ramachandran Plot</strong>. Swiss PDB Viewer. Accessed on February 13, 2026. <br>
            <a href="https://spdbv.unil.ch/rama.html" target="_blank">https://spdbv.unil.ch/rama.html</a>
        </li>
        <li id="ref35">
            <strong>MolProbity: More and better reference data for improved all‐atom structure validation</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5734394/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC5734394/</a>
        </li>
        <li id="ref36">
            <strong>The structure assessment web server: for proteins, complexes and more (PMC)</strong>. PMC - NIH. Accessed on February 13, 2026. <br>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11223858/" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC11223858/</a>
        </li>
    </ol>
</div>





</article>


  `,
};

export default article;
