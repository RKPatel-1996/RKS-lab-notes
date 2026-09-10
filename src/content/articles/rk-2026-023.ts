import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-023",
  title: "Basic Molecular Structure Visualization with ChimeraX, PyMOL, and Jmol",
  date: "2026-09-07",
  tags: ["#ChimeraX", "#MolecularVisualization", "#ProteinStructure"],
  type: "report",
  template: "standard",
  readTime: "25 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `Molecular-visualization software converts structural coordinates into interactive three-dimensional representations that biologists can explore. This article introduces UCSF ChimeraX as the primary learning tool, with PyMOL and Jmol/JSmol as useful alternatives, and uses the human beta-2 adrenergic receptor structure PDB 2RH1 as a running pharmacology example. Students learn what cartoon, stick, sphere, and surface representations mean biologically and complete a small first-session workflow for locating a ligand, examining a binding pocket, selecting residues, and interpreting structural context.`,
  content: `
<article>

<section>
  <h2>1. What Is Molecular-Structure Visualization?</h2>

  <p>The previous articles introduced the <strong>Protein Data Bank (PDB)</strong> and showed that a structure file contains atomic coordinates. Molecular-visualization software takes those coordinates and turns them into an <strong>interactive three-dimensional representation</strong> that we can rotate, zoom, recolor, simplify, and inspect.</p>

  <p>The underlying biological model may contain thousands of atoms. Looking at every atom simultaneously is often difficult, so visualization software allows us to emphasize different aspects of the same structure:</p>

  <ul>
    <li><strong>overall protein fold</strong>;</li>
    <li>alpha-helices and beta-sheets;</li>
    <li>individual amino-acid residues;</li>
    <li>bound drugs or ligands;</li>
    <li>active sites and binding pockets;</li>
    <li>protein surfaces;</li>
    <li>different chains in a molecular complex;</li>
    <li>water molecules, ions, and cofactors.</li>
  </ul>

  <blockquote>
    <strong>Core idea:</strong> Cartoon, sticks, spheres, and surfaces are <strong>different visual representations of the same underlying structural coordinates</strong>. Changing the representation does not change the protein itself.
  </blockquote>

  <p>For this introduction, <strong>UCSF ChimeraX</strong> will be the primary program. PyMOL and Jmol/JSmol are introduced as alternatives rather than as three separate programs that students must master.</p>
</section>

<section>
  <h2>2. ChimeraX, PyMOL, and Jmol: Three Ways to View Molecular Structures</h2>

  <p>Many programs can visualize PDB structures. The three below are useful to recognize because they appear frequently in structural biology, teaching, and research.</p>

  <table class="science-table" data-id="molecular-viewer-comparison">
    <caption>Table 1: Beginner-level comparison of ChimeraX, PyMOL, and Jmol/JSmol</caption>
    <thead>
      <tr>
        <th>Software</th>
        <th>Who Develops or Maintains It?</th>
        <th>Useful Role for a Biology Student</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>UCSF ChimeraX</strong></td>
        <td>Resource for Biocomputing, Visualization, and Informatics (RBVI), University of California, San Francisco</td>
        <td><strong>Primary tool in this course:</strong> interactive exploration of proteins, ligands, surfaces, residues, molecular complexes, sequences, and structural maps.</td>
      </tr>
      <tr>
        <td><strong>PyMOL</strong></td>
        <td>Maintained and distributed by Schrödinger on an open-source foundation</td>
        <td>Widely used for molecular visualization, precise selections, and clear structural figures.</td>
      </tr>
      <tr>
        <td><strong>Jmol / JSmol</strong></td>
        <td>Community-developed open-source project</td>
        <td>Useful for lightweight molecular viewing and <strong>interactive structures embedded directly in educational webpages</strong>.</td>
      </tr>
    </tbody>
  </table>

  <p><a href="https://www.cgl.ucsf.edu/chimerax/" target="_blank" rel="noopener noreferrer"><strong>ChimeraX</strong></a> is the current successor to the older UCSF Chimera program. It is developed by the RBVI at UCSF and is available free for academic, government, nonprofit, and personal use.<sup><a href="#ref1">1</a></sup></p>

  <p><a href="https://www.pymol.org/" target="_blank" rel="noopener noreferrer"><strong>PyMOL</strong></a> is a molecular-visualization system maintained and distributed by Schrödinger. Its commercial distribution is built on an open-source foundation, and much of its source code remains publicly available.<sup><a href="#ref2">2</a></sup></p>

  <p><a href="https://jmol.sourceforge.net/" target="_blank" rel="noopener noreferrer"><strong>Jmol</strong></a> is a free open-source molecular viewer. The desktop Jmol application uses Java, while <strong>JSmol</strong> provides the same general visualization system inside modern webpages using HTML5/JavaScript.<sup><a href="#ref3">3</a></sup></p>

  <p>A useful beginner shorthand is:</p>

  <p><strong>ChimeraX = explore structures<br>
  PyMOL = explore and prepare structural figures<br>
  JSmol = view structures interactively on the web</strong></p>

  <p>This is only a teaching shorthand; all three overlap substantially in what they can visualize.</p>

  <p><strong>Takeaway:</strong> Students do not need to master all three. Learn <strong>ChimeraX well enough to explore structures</strong>; recognize PyMOL and Jmol/JSmol as useful alternatives.</p>
</section>

<section>
  <h2>3. Running Example: Beta-2 Adrenergic Receptor, PDB 2RH1</h2>

  <p>Throughout this article we will use <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer"><strong>PDB 2RH1</strong></a>, a structure containing the human <strong>beta-2 adrenergic receptor (β<sub>2</sub>AR; ADRB2)</strong> bound to the ligand <strong>carazolol</strong>.<sup><a href="#ref4">4</a></sup></p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="https://cdn.rcsb.org/images/structures/2rh1_assembly-1.jpeg">
    <img src="https://cdn.rcsb.org/images/structures/2rh1_assembly-1.jpeg" alt="RCSB PDB rendering of the 2RH1 beta-2 adrenergic receptor T4 lysozyme structural construct" />
    <figcaption>Figure 1: PDB 2RH1, an experimentally determined structure containing the human beta-2 adrenergic receptor bound to carazolol. The experimental construct also contains T4 lysozyme used to facilitate crystallization. Source: RCSB Protein Data Bank. <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer">Open 2RH1 at RCSB PDB</a>.</figcaption>
  </figure>

  <h3>3.1 What Does This Protein Do?</h3>

  <p>The beta-2 adrenergic receptor is a <strong>seven-transmembrane G-protein-coupled receptor (GPCR)</strong> that responds to the catecholamines <strong>epinephrine (adrenaline) and norepinephrine (noradrenaline)</strong>. The human UniProt entry describes ADRB2 as a catecholamine receptor capable of coupling to G<sub>s</sub> and G<sub>i</sub> proteins.<sup><a href="#ref5">5</a></sup></p>

  <p>In airway smooth muscle, activation of β<sub>2</sub>-adrenergic receptors promotes <strong>relaxation and bronchodilation</strong>. This is the pharmacological basis for β<sub>2</sub>-agonist medicines used to open the airways in conditions such as asthma.<sup><a href="#ref6">6</a></sup></p>

  <p>The receptor is therefore an excellent teaching example because students can connect:</p>

  <p><strong>membrane receptor → ligand binding → molecular structure → signal transduction → physiological response → pharmacological intervention</strong></p>

  <h3>3.2 What Exactly Is in 2RH1?</h3>

  <p>The experimental 2RH1 structure is <strong>not an untouched native receptor</strong>. It is an engineered β<sub>2</sub>-adrenergic receptor–T4 lysozyme fusion crystallized with the partial inverse agonist carazolol and determined by X-ray diffraction at 2.40 Å resolution.<sup><a href="#ref4">4</a></sup><sup><a href="#ref7">7</a></sup></p>

  <p>This is itself an important structural-biology lesson: <strong>always understand what was actually crystallized before interpreting the picture biologically</strong>.</p>

  <blockquote>
    <strong>Note:</strong> Carazolol is useful here because its bound position makes the receptor's ligand-binding pocket easy to explore. The structure should not be interpreted as the receptor's only possible conformation or as its untouched state in a living cell.
  </blockquote>
</section>

<section>
  <h2>4. Your First 15 Minutes with ChimeraX</h2>

  <p>After installing ChimeraX, the first goal is simply to become comfortable moving through a real structure. ChimeraX supports menus, toolbar buttons, graphical tools, context menus, and commands; commands are useful, but students do <strong>not</strong> need to begin by memorizing them.<sup><a href="#ref8">8</a></sup></p>

  <h3>4.1 Fetch the Structure Directly from the PDB</h3>

  <p>From the graphical interface, use <strong>File → Fetch by ID</strong>, choose the PDB source, enter <code>2RH1</code>, and fetch the structure. ChimeraX can retrieve structures directly from the RCSB PDB, and PDB structures are fetched as PDBx/mmCIF by default.<sup><a href="#ref9">9</a></sup></p>

  <p>The equivalent command is:</p>

  <pre><code>open 2rh1</code></pre>

  <p><strong>What to observe:</strong> before changing anything, identify the overall size and shape of the model. Ask whether you can distinguish the long helical receptor region from the engineered T4 lysozyme portion.</p>

  <h3>4.2 Rotate, Zoom, and Reorient</h3>

  <p>Use the mouse to <strong>rotate, translate, and zoom</strong>. Three-dimensional orientation is not just a software skill; it changes which structural relationships are visible.</p>

  <p><strong>What to observe:</strong> view the structure from several directions. Notice that a feature that appears exposed from one angle may be partly hidden when viewed from another.</p>

  <h3>4.3 Start with the Cartoon Representation</h3>

  <p>A cartoon or ribbon simplifies the protein backbone and makes the overall fold visible. For 2RH1, the long transmembrane helices of the receptor become easy to recognize.</p>

  <pre><code>hide atoms
cartoon</code></pre>

  <p><strong>What to observe:</strong> identify the bundle of membrane-spanning helices characteristic of a GPCR. The goal is to understand the <strong>overall architecture</strong>, not individual atoms.</p>

  <h3>4.4 Find Carazolol</h3>

  <p>In 2RH1, the PDB chemical-component code for carazolol is <code>CAU</code>.<sup><a href="#ref4">4</a></sup> Display it in atomic detail while keeping the receptor simplified:</p>

  <pre><code>show :CAU
style :CAU stick</code></pre>

  <p><strong>What to observe:</strong> locate carazolol relative to the receptor helices. Ask whether the ligand lies on the outer surface or <strong>inside a cavity formed by the receptor</strong>.</p>

  <h3>4.5 Look at the Molecular Surface</h3>

  <p>A molecular surface emphasizes the <strong>shape and outer boundary</strong> of the protein rather than its secondary structure.</p>

  <pre><code>surface protein</code></pre>

  <p>With the ligand still visible, the surface helps reveal that carazolol occupies a <strong>three-dimensional binding cavity</strong>. ChimeraX calculates molecular surfaces from atomic radii rather than changing the underlying coordinates.<sup><a href="#ref10">10</a></sup></p>

  <p><strong>What to observe:</strong> compare the cartoon and surface views. The cartoon shows <strong>how the protein is folded</strong>; the surface makes the <strong>shape and accessibility of the pocket</strong> easier to appreciate.</p>

  <h3>4.6 Select and Inspect Residues Around the Ligand</h3>

  <p>Use the mouse and selection tools to click residues around the ligand. ChimeraX supports selections by model, chain, residue, atom, and built-in categories such as <code>protein</code>, <code>ligand</code>, and <code>solvent</code>.<sup><a href="#ref11">11</a></sup></p>

  <p><strong>What to observe:</strong> record the names and numbers of a few residues close to carazolol. Notice that the binding pocket is created by <strong>several residues positioned together in three-dimensional space</strong>, even though they may be separated in the linear protein sequence.</p>

  <h3>4.7 Measure a Distance</h3>

  <p>ChimeraX measurement tools can report distances between selected atoms. This introduces the idea that statements such as <em>“these atoms are close”</em> can be expressed quantitatively in <strong>Ångström (Å)</strong> units rather than by visual impression alone.</p>

  <p><strong>What to observe:</strong> measure one ligand-to-residue atom distance and compare the numerical value with your visual impression. The exercise is about learning molecular scale, not deciding from one distance whether an interaction is pharmacologically important.</p>

  <h3>4.8 Save a Structural Image</h3>

  <p>Finally, save a clean image that clearly shows the receptor and ligand. A useful figure should communicate a biological point rather than simply display every atom available.</p>

  <p>At this point a student has already completed a meaningful structural workflow:</p>

  <p><strong>fetch → orient → simplify → locate ligand → inspect pocket → measure → communicate with an image</strong></p>
</section>

<section>
  <h2>5. Cartoon, Sticks, Spheres, and Surfaces: What Do They Mean Biologically?</h2>

  <p>A molecular viewer can make the same protein look dramatically different. These are <strong>representations chosen to emphasize different biological questions</strong>.</p>

  <table class="science-table" data-id="molecular-representation-meaning">
    <caption>Table 2: Common molecular representations and the biological questions they emphasize</caption>
    <thead>
      <tr>
        <th>Representation</th>
        <th>What It Emphasizes</th>
        <th>Useful Biological Question</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Cartoon / ribbon</strong></td>
        <td>Protein backbone, helices, sheets, overall fold</td>
        <td>What is the overall architecture of the protein?</td>
      </tr>
      <tr>
        <td><strong>Stick</strong></td>
        <td>Bonds and individual atoms without excessive visual volume</td>
        <td>Which side chains surround a ligand or active site?</td>
      </tr>
      <tr>
        <td><strong>Ball-and-stick</strong></td>
        <td>Atoms together with their connectivity</td>
        <td>What is the local geometry of a small molecule or residue?</td>
      </tr>
      <tr>
        <td><strong>Sphere / space-filling</strong></td>
        <td>Approximate occupied atomic volume</td>
        <td>How tightly do atoms pack and how much space does a group occupy?</td>
      </tr>
      <tr>
        <td><strong>Molecular surface</strong></td>
        <td>Molecular shape, accessible exterior, cavities and interfaces</td>
        <td>Is a ligand pocket exposed, buried, narrow, or open?</td>
      </tr>
    </tbody>
  </table>

  <h3>5.1 One Structure, Several Biological Views</h3>

  <p>Consider the same 2RH1 coordinates:</p>

  <ul>
    <li><strong>Cartoon:</strong> makes the transmembrane helical fold obvious.</li>
    <li><strong>Ligand as sticks:</strong> makes carazolol and its local chemical geometry visible.</li>
    <li><strong>Nearby residues as sticks:</strong> reveals the amino-acid environment of the binding pocket.</li>
    <li><strong>Surface:</strong> shows the shape of the cavity surrounding the ligand.</li>
  </ul>

  <p>None of these representations creates a new structure. They simply allow different biological features of the <strong>same coordinate model</strong> to become easier to see.</p>

  <h3>5.2 Representation Is Not Experimental Evidence</h3>

  <p>A surface can make a pocket visually obvious, but the surface itself does not prove that the pocket is pharmacologically important. Similarly, displaying two atoms close together does not automatically establish a strong chemical interaction.</p>

  <p>Visual representations are therefore best understood as <strong>ways to interrogate structural evidence</strong>, not as evidence independent of the structure and experiment.</p>

  <blockquote>
    <strong>Second-read rule:</strong> <strong>Cartoon = fold; sticks = local chemistry; spheres = occupied volume; surface = molecular shape.</strong>
  </blockquote>
</section>

<section>
  <h2>6. What Biological Questions Can Students Answer with ChimeraX?</h2>

  <p>Once the basic controls are familiar, the software becomes useful because the student can ask increasingly specific biological questions.</p>

  <ul>
    <li><strong>How many chains are present?</strong></li>
    <li>Where are the alpha-helices and beta-sheets?</li>
    <li><strong>Where is the ligand-binding site?</strong></li>
    <li>Which amino-acid residues surround a ligand?</li>
    <li>Is a residue on the surface or buried inside the protein?</li>
    <li>How far apart are two atoms or residues?</li>
    <li>Where is a mutation relative to an active site or binding pocket?</li>
    <li>Which water molecules, ions, or cofactors are present?</li>
    <li>Which components appear to be experimental additions rather than native biological partners?</li>
    <li>How does one experimentally determined structure differ visually from another structure of the same protein?</li>
  </ul>

  <h3>6.1 Example: From Carazolol to Pharmacological Meaning</h3>

  <p>In 2RH1 we can locate carazolol inside the β<sub>2</sub>-adrenergic receptor and identify nearby residues. Structurally, this tells us <strong>where the ligand was observed in this experimental model and what the local binding environment looks like</strong>.</p>

  <p>It does <strong>not</strong> by itself tell us:</p>

  <ul>
    <li>the ligand's clinical efficacy;</li>
    <li>the complete mechanism of receptor signaling;</li>
    <li>which single contact contributes most to binding energy;</li>
    <li>how the receptor moves through all of its functional states;</li>
    <li>how the interaction behaves in every cell type.</li>
  </ul>

  <p>Those questions require additional <strong>pharmacological, biochemical, physiological, and sometimes computational evidence</strong>.</p>

  <blockquote>
    <strong>Interpretation rule:</strong> Use visualization to understand <strong>where things are and how they are arranged</strong>. Do not convert visual proximity directly into a mechanistic conclusion.
  </blockquote>
</section>

<section>
  <h2>7. When Would You Use PyMOL or Jmol/JSmol Instead?</h2>

  <h3>7.1 PyMOL</h3>

  <p>PyMOL can perform many of the same fundamental visualization tasks as ChimeraX. It is extremely common in structural-biology papers and laboratories and is particularly useful when researchers want <strong>precise molecular selections and polished structural figures</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p>A student who already understands chains, residues, ligands, cartoons, sticks, and surfaces in ChimeraX will find those same biological concepts in PyMOL. The syntax and interface differ; the underlying structural biology does not.</p>

  <h3>7.2 Jmol and JSmol</h3>

  <p>Jmol is particularly valuable in education because its JSmol form can place an <strong>interactive molecule directly inside a webpage</strong>. Students can rotate and inspect structures without installing a full desktop molecular-graphics program.<sup><a href="#ref3">3</a></sup></p>

  <p>This makes JSmol useful for:</p>

  <ul>
    <li>interactive teaching pages;</li>
    <li>online molecular demonstrations;</li>
    <li>web-accessible chemical databases;</li>
    <li>simple exploration on computers where specialist visualization software is not installed.</li>
  </ul>

  <h3>7.3 Which One Should a Beginner Learn?</h3>

  <p>For this course:</p>

  <p><strong>ChimeraX = primary hands-on tool<br>
  PyMOL = important alternative to recognize<br>
  Jmol/JSmol = useful lightweight and web-based alternative</strong></p>

  <p>Do not spend time trying to become equally fluent in all three. The transferable skill is understanding <strong>molecular structure itself</strong>: chains, residues, atoms, ligands, coordinates, representations, and biological interpretation.</p>

  <blockquote>
    <strong>Final principle:</strong> Visualization software does not make a structure biologically meaningful by itself. Its value is that it lets a researcher <strong>interrogate structural data visually and connect molecular arrangement with biological function</strong>.
  </blockquote>
</section>

<section id="references">
  <h2>8. References</h2>

  <ol>
    <li id="ref1">
      Resource for Biocomputing, Visualization, and Informatics, University of California San Francisco.
      <a href="https://www.cgl.ucsf.edu/chimerax/" target="_blank" rel="noopener noreferrer">UCSF ChimeraX</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref2">
      Schrödinger.
      <a href="https://www.pymol.org/" target="_blank" rel="noopener noreferrer">PyMOL Molecular Visualization System</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref3">
      Jmol Project.
      <a href="https://jmol.sourceforge.net/" target="_blank" rel="noopener noreferrer">Jmol: an Open-Source Java Viewer for Chemical Structures in 3D</a>.
      See also <a href="https://wiki.jmol.org/index.php/JSmol" target="_blank" rel="noopener noreferrer">JSmol</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref4">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer">2RH1: High Resolution Crystal Structure of Human Beta-2 Adrenergic G Protein-Coupled Receptor</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref5">
      UniProt.
      <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer">P07550 · ADRB2_HUMAN — Beta-2 Adrenergic Receptor</a>.
      UniProtKB/Swiss-Prot. Accessed 7 September 2026.
    </li>

    <li id="ref6">
      IUPHAR/BPS Guide to PHARMACOLOGY.
      <a href="https://www.guidetopharmacology.org/GRAC/ObjectDisplayForward?objectId=29" target="_blank" rel="noopener noreferrer">Beta-2 Adrenoceptor</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref7">
      Cherezov V, Rosenbaum DM, Hanson MA, et al.
      <a href="https://doi.org/10.1126/science.1150577" target="_blank" rel="noopener noreferrer">High-resolution crystal structure of an engineered human beta2-adrenergic G protein-coupled receptor</a>.
      <em>Science</em>. 2007;318(5854):1258-1265. doi:10.1126/science.1150577.
    </li>

    <li id="ref8">
      UCSF ChimeraX.
      <a href="https://www.cgl.ucsf.edu/chimerax/docs/quickstart/index.html" target="_blank" rel="noopener noreferrer">ChimeraX Quick Start Guide</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref9">
      UCSF ChimeraX.
      <a href="https://www.rbvi.ucsf.edu/chimerax/docs/user/fetch.html" target="_blank" rel="noopener noreferrer">Fetch by ID</a>
      and <a href="https://www.rbvi.ucsf.edu/chimerax/docs/user/commands/open.html" target="_blank" rel="noopener noreferrer">Open Command</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref10">
      UCSF ChimeraX.
      <a href="https://www.rbvi.ucsf.edu/chimerax/docs/user/commands/surface.html" target="_blank" rel="noopener noreferrer">Molecular Surface Command</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref11">
      UCSF ChimeraX.
      <a href="https://www.rbvi.ucsf.edu/chimerax/docs/user/commands/atomspec.html" target="_blank" rel="noopener noreferrer">Atom Specification and Built-in Molecular Classifications</a>.
      Accessed 7 September 2026.
    </li>

    <li id="ref12">
      Pettersen EF, Goddard TD, Huang CC, et al.
      <a href="https://doi.org/10.1002/pro.3943" target="_blank" rel="noopener noreferrer">UCSF ChimeraX: Structure visualization for researchers, educators, and developers</a>.
      <em>Protein Science</em>. 2021;30(1):70-82. doi:10.1002/pro.3943.
    </li>
  </ol>
</section>

</article>
  `,
};

export default article;
