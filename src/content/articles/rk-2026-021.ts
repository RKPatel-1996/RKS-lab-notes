import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-021",
  title: "Introduction to the Protein Data Bank (PDB)",
  date: "2026-09-01",
  tags: ["#PDB", "#ProteinStructure", "#StructuralBiology"],
  type: "report",
  template: "standard",
  readTime: "25 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `The Protein Data Bank (PDB) is the global archive for three-dimensional structures of biological macromolecules. This introductory article explains what the PDB is for, who manages it, what a first-time visitor should examine on a structure page, how PDB identifiers work, and how experimental method, resolution, ligands, chains, biological assemblies, and validation affect interpretation. A beta-2 adrenergic receptor structure is used as a pharmacology-oriented example to show how a PDB entry connects molecular structure with drug binding and biological function.`,
  content: `
<article>

<section>
  <h2>1. Why Do We Need the Protein Data Bank?</h2>

  <p>A protein sequence tells us the <strong>order of amino acids</strong>, but pharmacology and molecular biology often require another level of information: <strong>the three-dimensional arrangement of those atoms in space</strong>.</p>

  <p>Structure can help us ask questions such as:</p>

  <ul>
    <li>Where is the <strong>active site</strong> of an enzyme?</li>
    <li>Where does a drug or ligand bind?</li>
    <li>Which amino-acid residues contact the ligand?</li>
    <li>How are several protein chains arranged into a complex?</li>
    <li>How might a mutation alter a binding pocket or interface?</li>
    <li>Does the structure represent an active, inactive, ligand-bound, or engineered state?</li>
  </ul>

  <p>The <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer"><strong>Protein Data Bank (PDB)</strong></a> is the global archive that makes experimentally determined three-dimensional structures of biological macromolecules publicly available.<sup><a href="#ref1">1</a></sup></p>

  <p>Despite the name, the archive is <strong>not limited to proteins</strong>. It also contains structures involving <strong>DNA, RNA, protein–nucleic-acid complexes, carbohydrates, small-molecule ligands, ions, and other components</strong> associated with macromolecular structures.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Core idea:</strong> UniProt mainly helps answer <em>“What is known about this protein?”</em>; the PDB helps answer <strong>“What does this biological molecule or complex look like in three dimensions?”</strong>
  </blockquote>
</section>

<section>
  <h2>2. Who Manages the PDB, and Which Website Should You Use?</h2>

  <p>The PDB is a <strong>single worldwide archive</strong> managed cooperatively by the <strong>Worldwide Protein Data Bank (wwPDB)</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p>Major wwPDB organizations include:</p>

  <ul>
    <li><strong>RCSB PDB</strong> — United States;</li>
    <li><strong>PDBe</strong> — Protein Data Bank in Europe at EMBL-EBI;</li>
    <li><strong>PDBj</strong> — Protein Data Bank Japan;</li>
    <li><strong>BMRB</strong> — Biological Magnetic Resonance Data Bank;</li>
    <li><strong>EMDB</strong> — Electron Microscopy Data Bank.</li>
  </ul>

  <p>The important beginner point is that <strong>RCSB PDB, PDBe, and PDBj are not three unrelated structure archives</strong>. They provide different interfaces and services around the same globally coordinated PDB archive.<sup><a href="#ref3">3</a></sup></p>

  <p>For this article, we will use <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer"><strong>RCSB PDB</strong></a> because its structure pages combine 3D visualization, sequence annotations, ligand information, experimental details, validation, and cross-links in one interface.</p>

  <p><strong>Takeaway:</strong> Think <strong>one PDB archive, several international portals</strong>.</p>
</section>

<section>
  <h2>3. What Information Is Available in a PDB Entry?</h2>

  <p>A PDB entry is much more than a picture of a protein. It is a record containing the <strong>3D atomic model together with information about how that model was obtained and what biological molecules it contains</strong>.</p>

  <table class="science-table" data-id="pdb-entry-information">
    <caption>Table 1: Major information a first-time user can obtain from a PDB entry</caption>
    <thead>
      <tr>
        <th>Entry Area</th>
        <th>What It Contains</th>
        <th>Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Structure title</strong></td>
        <td>Short description of the deposited structure</td>
        <td>Shows what molecular system and experimental state were studied.</td>
      </tr>
      <tr>
        <td><strong>Experimental method</strong></td>
        <td>X-ray diffraction, cryo-electron microscopy, NMR, or another supported method</td>
        <td>Tells you how the structural model was determined.</td>
      </tr>
      <tr>
        <td><strong>Resolution / quality information</strong></td>
        <td>Resolution where applicable, refinement statistics, validation reports</td>
        <td>Helps assess the level of structural detail and model quality.</td>
      </tr>
      <tr>
        <td><strong>Macromolecules</strong></td>
        <td>Proteins, DNA, RNA, chains, sequence lengths, source organisms</td>
        <td>Confirms what biological molecules are actually present.</td>
      </tr>
      <tr>
        <td><strong>Ligands and small molecules</strong></td>
        <td>Drugs, inhibitors, cofactors, ions, detergents, crystallization components</td>
        <td>Essential for pharmacology and binding-site interpretation.</td>
      </tr>
      <tr>
        <td><strong>Biological assembly</strong></td>
        <td>Proposed functional arrangement of the macromolecule or complex</td>
        <td>May differ from the deposited crystallographic asymmetric unit.</td>
      </tr>
      <tr>
        <td><strong>Sequence annotations</strong></td>
        <td>Residues, domains, mutations, UniProt mappings and related annotations</td>
        <td>Connects structural coordinates with sequence-level biology.</td>
      </tr>
      <tr>
        <td><strong>Literature</strong></td>
        <td>Primary publication, authors and DOI</td>
        <td>Provides the experimental context and scientific interpretation.</td>
      </tr>
      <tr>
        <td><strong>Validation</strong></td>
        <td>wwPDB validation information</td>
        <td>Helps identify strengths, unusual geometry, or possible limitations in the model.</td>
      </tr>
    </tbody>
  </table>

  <p>The RCSB PDB website also provides <strong>interactive 3D visualization</strong>, allowing a user to rotate the structure, display proteins as ribbons, show ligands as sticks or spheres, inspect specific residues, and examine ligand interactions without installing specialist software.</p>

  <h3>3.1 Experimental Structures and Computed Models Are Not the Same Thing</h3>

  <p>The RCSB PDB website can also display <strong>computed structure models</strong> from resources such as AlphaFold DB and ModelArchive. These are useful, but they are clearly separated from structures deposited in the experimental PDB archive.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Important:</strong> A predicted model is not equivalent to an experimentally determined PDB structure. Always check whether you are viewing a <strong>PDB archive structure</strong> or a <strong>computed structure model</strong>.
  </blockquote>
</section>

<section>
  <h2>4. How PDB Identifiers Work</h2>

  <p>The most important identifier for a structure is the <strong>PDB ID</strong>.</p>

  <p>Examples:</p>

  <pre><code>2RH1
4HHB
6LU7</code></pre>

  <p>For most entries currently encountered in textbooks and research papers, the familiar PDB ID is a <strong>four-character alphanumeric code</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p>RCSB now also displays an extended form such as:</p>

  <pre><code>2RH1
pdb_00002rh1</code></pre>

  <p>The wwPDB is preparing for a future transition to longer identifiers as the four-character identifier space is exhausted. The traditional four-character IDs remain the identifiers students will most commonly encounter in current literature.<sup><a href="#ref4">4</a></sup></p>

  <h3>4.1 One Entry Contains Several Other IDs</h3>

  <p>A structure is hierarchical, so the page also uses identifiers for different parts of the entry:</p>

  <ul>
    <li><strong>PDB ID:</strong> identifies the complete deposited structure entry;</li>
    <li><strong>chain ID:</strong> identifies a particular molecular chain or instance;</li>
    <li><strong>entity ID:</strong> identifies a chemically unique molecule within the entry;</li>
    <li><strong>assembly ID:</strong> identifies a proposed biological assembly;</li>
    <li><strong>chemical component ID:</strong> identifies a ligand, residue, ion, or other small chemical component.</li>
  </ul>

  <p>These identifiers become useful when a structure contains several protein chains and multiple ligands. For example, the question <em>“Which residue contacts the drug?”</em> requires identifying both the correct <strong>chain</strong> and the correct <strong>ligand instance</strong>.<sup><a href="#ref4">4</a></sup></p>

  <blockquote>
    <strong>Practical rule:</strong> For an assignment or publication, always preserve the <strong>PDB ID</strong>. If you discuss a specific interaction, also record the relevant <strong>chain and ligand</strong>.
  </blockquote>
</section>

<section>
  <h2>5. Your First PDB Visit: Beta-2 Adrenergic Receptor, 2RH1</h2>

  <p>A useful pharmacology example is <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer"><strong>PDB 2RH1</strong></a>, a structure of the human <strong>beta-2 adrenergic receptor</strong>, an important G-protein-coupled receptor (GPCR).<sup><a href="#ref5">5</a></sup></p>

  <p>On the first visit, do not try to interpret every field. Work through the page in the following order.</p>

  <h3>5.1 Confirm What the Entry Represents</h3>

  <p>The title identifies 2RH1 as a high-resolution crystal structure of the human beta-2 adrenergic receptor. However, closer inspection shows that the experimental construct is an <strong>engineered beta-2 adrenergic receptor/T4 lysozyme chimera</strong>, rather than an untouched native receptor.<sup><a href="#ref5">5</a></sup></p>

  <p>This is an important lesson: <strong>the title is only the starting point</strong>. Always inspect the actual molecular components and modifications.</p>

  <h3>5.2 Check the Experimental Method</h3>

  <p>2RH1 was determined using <strong>X-ray diffraction</strong> at <strong>2.40 Å resolution</strong>.<sup><a href="#ref5">5</a></sup></p>

  <p>For X-ray and cryo-EM structures, resolution gives a useful indication of the level of structural detail, but it should <strong>not be used as the only measure of quality</strong>. The validation report and local quality of the region being interpreted also matter.</p>

  <h3>5.3 Identify the Ligand</h3>

  <p>The receptor was crystallized with <strong>carazolol</strong>, a ligand occupying the receptor-binding site. The RCSB page allows the ligand and its contacts with nearby residues to be explored directly in the 3D viewer.<sup><a href="#ref5">5</a></sup></p>

  <p>This is where the PDB becomes especially valuable in pharmacology: a drug or ligand can be studied in the <strong>physical context of its binding pocket</strong>, rather than only as a name or activity value.</p>

  <h3>5.4 Follow the Cross-Link to UniProt</h3>

  <p>The receptor portion of the structure is linked to the human UniProt entry <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer"><strong>P07550</strong></a> for ADRB2.<sup><a href="#ref5">5</a></sup></p>

  <p>This demonstrates the relationship between the two databases:</p>

  <p><strong>UniProt: protein sequence and biological knowledge → PDB: experimentally determined 3D structural state</strong></p>

  <h3>5.5 Read the Primary Paper</h3>

  <p>The primary publication explains why the receptor was engineered, how the structure was obtained, and what biological conclusions can reasonably be drawn from it.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> For your first PDB entry, check <strong>what was studied → method → resolution → molecules/chains → ligand → biological assembly → validation → primary paper</strong>.</p>
</section>

<section>
  <h2>6. Structural Concepts a First-Time User Must Understand</h2>

  <h3>6.1 Chain, Entity, and Biological Assembly Are Different Ideas</h3>

  <p>A PDB entry may contain several copies of the same molecule or several different molecules. RCSB therefore distinguishes between:</p>

  <ul>
    <li><strong>entity:</strong> a chemically unique molecule;</li>
    <li><strong>instance/chain:</strong> one particular copy of that entity in the structure;</li>
    <li><strong>assembly:</strong> a proposed biologically relevant arrangement of molecules.</li>
  </ul>

  <p>These levels help prevent confusion when a complex contains several protein subunits, nucleic acids, cofactors, or drug molecules.<sup><a href="#ref7">7</a></sup></p>

  <h3>6.2 Asymmetric Unit vs. Biological Assembly</h3>

  <p>For crystal structures, the <strong>asymmetric unit</strong> is the unique portion used to describe the crystal. It is not necessarily the same as the functional biological complex.</p>

  <p>The <strong>biological assembly</strong> is the arrangement believed to represent the functional molecular unit. It may be the same as the asymmetric unit, contain only part of it, or require symmetry-related copies to reconstruct the complete complex.<sup><a href="#ref8">8</a></sup></p>

  <p>For biology and pharmacology, the biological assembly is often the more relevant object to inspect.</p>

  <h3>6.3 Not Every Residue in the Sequence Has Coordinates</h3>

  <p>Experimental structures sometimes contain <strong>missing residues or missing atoms</strong>. Flexible loops, termini, or disordered regions may not be sufficiently resolved to model confidently.</p>

  <p>Therefore, the deposited protein sequence and the residues visible in the 3D model may not always be identical in length.</p>

  <h3>6.4 A PDB Structure Is One Experimental State</h3>

  <p>Proteins are dynamic. A PDB entry may capture:</p>

  <ul>
    <li>an active or inactive state;</li>
    <li>a ligand-bound or ligand-free state;</li>
    <li>a mutant or engineered construct;</li>
    <li>a truncated protein;</li>
    <li>a protein stabilized by an antibody, fusion partner, detergent, or other experimental strategy.</li>
  </ul>

  <blockquote>
    <strong>Important:</strong> A PDB structure should not automatically be interpreted as <strong>the one permanent shape of the protein in the living cell</strong>.
  </blockquote>
</section>

<section>
  <h2>7. How a Biology or Pharmacology Student Should Use the PDB</h2>

  <p>The RCSB PDB website is most useful when approached with a specific biological question.</p>

  <h3>7.1 Search</h3>

  <p>You can search using:</p>

  <ul>
    <li>a <strong>PDB ID</strong>;</li>
    <li>protein or gene name;</li>
    <li>organism;</li>
    <li>UniProt accession;</li>
    <li>ligand or drug name;</li>
    <li>chemical component;</li>
    <li>sequence or structural similarity.</li>
  </ul>

  <h3>7.2 Inspect the Structure Page</h3>

  <p>Before looking at the 3D picture, confirm:</p>

  <ol>
    <li><strong>What molecule or complex was actually studied?</strong></li>
    <li><strong>Was the protein engineered or mutated?</strong></li>
    <li><strong>Which experimental method was used?</strong></li>
    <li><strong>Which ligands, cofactors, or ions are present?</strong></li>
    <li><strong>What is the biological assembly?</strong></li>
    <li><strong>Are important residues missing?</strong></li>
    <li><strong>What does the validation information show?</strong></li>
  </ol>

  <h3>7.3 Use the 3D Viewer for a Biological Question</h3>

  <p>The integrated viewer can then be used to examine:</p>

  <ul>
    <li>ligand-binding pockets;</li>
    <li>active sites;</li>
    <li>protein–protein interfaces;</li>
    <li>specific residues;</li>
    <li>mutations;</li>
    <li>distances between atoms or residues;</li>
    <li>different chains within a complex.</li>
  </ul>

  <h3>7.4 Download Only What You Need</h3>

  <p>If further analysis is required, structures can be downloaded in <strong>PDBx/mmCIF</strong>, the modern standard archive format. The older fixed-column PDB format is still familiar and available where possible, but PDBx/mmCIF has been the standard archive format since 2014 and can represent structures that exceed the limitations of the legacy format.<sup><a href="#ref9">9</a></sup></p>

  <h3>7.5 Do Not Overinterpret a Structure</h3>

  <p>For pharmacological interpretation, keep three rules in mind:</p>

  <ul>
    <li><strong>Ligand presence demonstrates the structural state studied, not automatically therapeutic efficacy.</strong></li>
    <li><strong>A contact visible in a structure is not by itself proof that the interaction dominates binding affinity or pharmacological activity.</strong></li>
    <li><strong>Experimental structure does not eliminate the need for biochemical, pharmacological, and physiological evidence.</strong></li>
  </ul>

  <blockquote>
    <strong>Final principle:</strong> The PDB is most powerful when used to connect <strong>molecular structure with experimental biology</strong>. Use the 3D model to understand the system, but always interpret it together with the experimental method, construct, ligands, validation, and primary literature.
  </blockquote>
</section>

<section id="references">
  <h2>8. References</h2>

  <ol>
    <li id="ref1">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/pages/about-us/index" target="_blank" rel="noopener noreferrer">About RCSB PDB</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref2">
      Worldwide Protein Data Bank.
      <a href="https://www.wwpdb.org/about/agreement" target="_blank" rel="noopener noreferrer">Worldwide Protein Data Bank Charter</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref3">
      Worldwide Protein Data Bank.
      <a href="https://www.wwpdb.org/about/faq" target="_blank" rel="noopener noreferrer">wwPDB Frequently Asked Questions</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref4">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/docs/general-help/identifiers-in-pdb" target="_blank" rel="noopener noreferrer">Identifiers in PDB</a>.
      Updated 20 May 2026.
    </li>

    <li id="ref5">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer">PDB 2RH1: High Resolution Crystal Structure of Human Beta-2 Adrenergic G Protein-Coupled Receptor</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref6">
      Cherezov V, Rosenbaum DM, Hanson MA, et al.
      <a href="https://doi.org/10.1126/science.1150577" target="_blank" rel="noopener noreferrer">High-resolution crystal structure of an engineered human beta2-adrenergic G protein-coupled receptor</a>.
      <em>Science</em>. 2007;318(5854):1258-1265. doi:10.1126/science.1150577.
    </li>

    <li id="ref7">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank" target="_blank" rel="noopener noreferrer">Organization of 3D Structures in the Protein Data Bank</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref8">
      PDB-101.
      <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies" target="_blank" rel="noopener noreferrer">Biological Assemblies</a>.
      RCSB PDB. Accessed 1 September 2026.
    </li>

    <li id="ref9">
      Worldwide Protein Data Bank.
      <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF General FAQ</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref10">
      PDB-101.
      <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction" target="_blank" rel="noopener noreferrer">Guide to Understanding PDB Data</a>.
      RCSB PDB. Accessed 1 September 2026.
    </li>
  </ol>
</section>

</article>
  `,
};

export default article;
