import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-022",
  title: "Anatomy of a PDB Structure File: From Atoms to PDBx/mmCIF",
  date: "2026-09-01",
  tags: ["#PDB", "#PDBxmmCIF", "#ProteinStructure"],
  type: "report",
  template: "standard",
  readTime: "25 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: `A structure file is the text representation behind the three-dimensional molecular model seen in a PDB viewer. This article introduces the biological anatomy of structure files using a small teaching example: chains contain residues, residues contain atoms, and each modeled atom is positioned using x, y, and z coordinates. It also explains why the modern PDBx/mmCIF format has replaced the legacy PDB format as the archive standard, while keeping the emphasis on biologically useful information such as ligands, water molecules, missing residues, experimental metadata, and biological assemblies.`,
  content: `
<article>

<section>
  <h2>1. What Does a PDB Structure File Actually Represent?</h2>

  <p>When a structure is opened on the <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer">RCSB PDB</a> website, we usually see a ribbon diagram, molecular surface, ligand-binding pocket, or ball-and-stick model. Behind that picture is a <strong>text file describing the molecular model</strong>.</p>

  <p>The most important information in that file is:</p>

  <p><strong>which atoms are present → which residues they belong to → which chain they belong to → where each atom is located in three-dimensional space</strong>.</p>

  <p>PDB-101 describes coordinate files as lists of the atoms in a structure together with their <strong>3D locations</strong>, plus information describing the sequence, experiment, and structure.<sup><a href="#ref1">1</a></sup></p>

  <p>A structure file therefore allows software to reconstruct a molecular model. The file does not contain a photograph of the protein. It contains a <strong>model of atomic positions derived from structural experiments</strong>.</p>

  <blockquote>
    <strong>Core idea:</strong> A molecular viewer is essentially translating <strong>textual structural information into a 3D biological picture</strong>.
  </blockquote>
</section>

<section>
  <h2>2. The Biological Hierarchy: Structure → Chain → Residue → Atom</h2>

  <p>The easiest way to understand a structure file is to follow the natural hierarchy of a biological macromolecule:</p>

  <p><strong>structure → molecular chain → amino-acid residue → atom</strong></p>

  <pre><code>Chain A
│
├── Residue 1: ALA
│   ├── N
│   ├── CA
│   ├── C
│   └── O
│
└── Residue 2: TYR
    ├── N
    ├── CA
    ├── CB
    └── OH</code></pre>

  <p>Real structures may contain <strong>several protein chains, DNA or RNA chains, ligands, metal ions, cofactors, and water molecules</strong>.<sup><a href="#ref1">1</a></sup></p>

  <h3>2.1 Why Chain IDs Matter</h3>

  <p>A structure may contain several copies of the same protein or several different molecular partners. Chain identifiers allow us to say precisely which copy we mean.</p>

  <pre><code>Chain A = receptor
Chain B = interacting protein
Chain C = another subunit</code></pre>

  <p>When discussing a mutation, binding site, or interaction, <strong>residue number alone may not be enough</strong>. “TYR 100” in chain A and “TYR 100” in chain B are different structural objects.</p>

  <p><strong>Takeaway:</strong> Read a structure from the outside inward: <strong>entry → chain → residue → atom</strong>.</p>
</section>

<section>
  <h2>3. Coordinates: How a 3D Molecule Is Written as Text</h2>

  <p>Each modeled atom is assigned three numbers describing its position along the <strong>x, y, and z axes</strong>. These coordinates are expressed in <strong>Ångström (Å)</strong>, a unit commonly used for molecular dimensions.</p>

  <pre><code>ATOM      2  CA  ALA A   1      11.200  12.500   8.400  1.00 18.00           C</code></pre>

  <table class="science-table" data-id="legacy-pdb-atom-line">
    <caption>Table 1: Biological interpretation of a simplified legacy PDB atom record</caption>
    <thead>
      <tr>
        <th>Part</th>
        <th>Example</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Record type</td><td><code>ATOM</code></td><td>Atom belongs to a standard polymer residue.</td></tr>
      <tr><td>Atom name</td><td><code>CA</code></td><td>Alpha-carbon atom.</td></tr>
      <tr><td>Residue</td><td><code>ALA</code></td><td>Alanine.</td></tr>
      <tr><td>Chain</td><td><code>A</code></td><td>Molecular chain containing the residue.</td></tr>
      <tr><td>Residue number</td><td><code>1</code></td><td>Position used to identify the residue in this model.</td></tr>
      <tr><td>x, y, z</td><td><code>11.200 12.500 8.400</code></td><td>Atom position in three-dimensional space.</td></tr>
      <tr><td>Occupancy</td><td><code>1.00</code></td><td>How fully this modeled position is occupied.</td></tr>
      <tr><td>B-factor</td><td><code>18.00</code></td><td>Parameter related to atomic displacement/disorder.</td></tr>
      <tr><td>Element</td><td><code>C</code></td><td>The atom is carbon.</td></tr>
    </tbody>
  </table>

  <p>You do <strong>not</strong> need to calculate these coordinates manually. Structural viewers read them and place each atom at the appropriate position.</p>

  <blockquote>
    <strong>Presentation point:</strong> The 3D protein displayed on screen is reconstructed from <strong>one coordinate record after another</strong>.
  </blockquote>
</section>

<section>
  <h2>4. A Small Demo Structure File</h2>

  <p>The following teaching example is deliberately tiny. It is <strong>not a real deposited PDB entry</strong>; it exists only to make the structure of a coordinate file visible.</p>

  <pre><code>HEADER    TEACHING EXAMPLE
TITLE     SMALL PROTEIN FRAGMENT WITH A BOUND LIGAND

ATOM      1  N   ALA A   1      10.000  12.000   8.000  1.00 20.00           N
ATOM      2  CA  ALA A   1      11.200  12.500   8.400  1.00 18.00           C
ATOM      3  C   ALA A   1      12.300  11.500   8.700  1.00 19.00           C
ATOM      4  O   ALA A   1      12.100  10.300   8.500  1.00 21.00           O

ATOM      5  N   TYR A   2      13.500  12.000   9.200  1.00 22.00           N
ATOM      6  CA  TYR A   2      14.600  11.100   9.500  1.00 20.00           C
ATOM      7  CB  TYR A   2      15.800  11.900   9.900  1.00 23.00           C
ATOM      8  OH  TYR A   2      17.200  12.500  10.500  1.00 25.00           O

HETATM    9  C1  LIG B 101      18.300  12.700  10.800  1.00 17.00           C
HETATM   10  O1  LIG B 101      19.300  12.900  11.100  1.00 16.00           O
HETATM   11  O   HOH C 201      16.500  14.100  10.700  1.00 28.00           O
END</code></pre>

  <h3>4.1 What Can We Read Biologically?</h3>

  <ul>
    <li><strong>Chain A</strong> is the protein fragment.</li>
    <li><strong>ALA 1</strong> is followed by <strong>TYR 2</strong>.</li>
    <li>Each amino acid is represented by several individual atoms.</li>
    <li><strong>LIG</strong> is a fictional small-molecule ligand.</li>
    <li><strong>HOH</strong> represents a water molecule.</li>
    <li>Every atom has its own <strong>x, y, z coordinates</strong>.</li>
  </ul>

  <h3>4.2 What Does HETATM Mean?</h3>

  <p>In the legacy PDB format, <code>ATOM</code> records are typically used for atoms in standard polymer residues, while <code>HETATM</code> records are used for many other chemical components.</p>

  <p>These may include <strong>bound drugs, experimental ligands, cofactors, metal ions, water, modified residues, detergents, or crystallization components</strong>.<sup><a href="#ref2">2</a></sup></p>

  <blockquote>
    <strong>Important:</strong> A small molecule being present in a structure file does <strong>not automatically mean it is biologically or pharmacologically important</strong>. Some are present because of the experimental conditions.
  </blockquote>
</section>

<section>
  <h2>5. Legacy PDB vs. Modern PDBx/mmCIF</h2>

  <p>The text format shown above is the familiar <strong>legacy PDB format</strong>. It is still widely recognized because decades of structural-biology literature and software use it.</p>

  <p>However, the <strong>modern archive standard is PDBx/mmCIF</strong>. wwPDB adopted PDBx/mmCIF as the standard PDB archive format in <strong>2014</strong>.<sup><a href="#ref3">3</a></sup></p>

  <p>The older format uses fixed-width columns and has historical limits on the numbers of atoms and chains it can represent. PDBx/mmCIF is more flexible and can represent today's larger macromolecular complexes.<sup><a href="#ref3">3</a></sup></p>

  <table class="science-table" data-id="pdb-vs-mmcif">
    <caption>Table 2: Beginner-level comparison of legacy PDB and PDBx/mmCIF files</caption>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Legacy PDB</th>
        <th>PDBx/mmCIF</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Status</strong></td><td>Older, familiar format</td><td><strong>Current wwPDB archive standard</strong></td></tr>
      <tr><td><strong>Typical extension</strong></td><td><code>.pdb</code></td><td><code>.cif</code></td></tr>
      <tr><td><strong>Appearance</strong></td><td>Fixed columns</td><td>Named fields and table-like blocks</td></tr>
      <tr><td><strong>Large complexes</strong></td><td>Historical size limitations</td><td>Designed for large and complex structures</td></tr>
      <tr><td><strong>Student priority</strong></td><td>Recognize it when encountered</td><td><strong>Treat it as the modern default</strong></td></tr>
    </tbody>
  </table>

  <h3>5.1 The Same Demo in PDBx/mmCIF</h3>

  <pre><code>data_demo_structure

loop_
_atom_site.group_PDB
_atom_site.id
_atom_site.type_symbol
_atom_site.label_atom_id
_atom_site.label_comp_id
_atom_site.label_asym_id
_atom_site.label_seq_id
_atom_site.Cartn_x
_atom_site.Cartn_y
_atom_site.Cartn_z

ATOM    1  N  N   ALA A 1 10.000 12.000  8.000
ATOM    2  C  CA  ALA A 1 11.200 12.500  8.400
ATOM    5  N  N   TYR A 2 13.500 12.000  9.200
ATOM    8  O  OH  TYR A 2 17.200 12.500 10.500
HETATM 9  C  C1  LIG B . 18.300 12.700 10.800</code></pre>

  <p>The biological information is the same:</p>

  <ul>
    <li><code>label_atom_id</code> = <strong>atom name</strong>;</li>
    <li><code>label_comp_id</code> = <strong>residue or chemical component</strong>;</li>
    <li><code>label_asym_id</code> = <strong>chain/asymmetric-unit identifier</strong>;</li>
    <li><code>label_seq_id</code> = <strong>position in the polymer sequence</strong>;</li>
    <li><code>Cartn_x</code>, <code>Cartn_y</code>, <code>Cartn_z</code> = <strong>3D coordinates</strong>.</li>
  </ul>

  <p>PDBx/mmCIF organizes information into named categories and fields, often in table-like <code>loop_</code> blocks.<sup><a href="#ref4">4</a></sup> Students do not need to memorize the field names.</p>

  <blockquote>
    <strong>Takeaway:</strong> Learn the biological concepts once—<strong>atom, residue, chain, ligand, coordinate</strong>. Legacy PDB and PDBx/mmCIF are two ways of writing those structural concepts.
  </blockquote>
</section>

<section>
  <h2>6. What Else Is Biologically Important in a Structure File?</h2>

  <p>Coordinates are central, but a structure file also carries information needed to interpret them correctly.</p>

  <h3>6.1 Experimental Information</h3>

  <p>PDBx/mmCIF can record the <strong>experimental method, resolution where relevant, authors, primary publication, molecular components, refinement, and validation information</strong>.</p>

  <h3>6.2 Missing Coordinates</h3>

  <p>A protein sequence may contain a residue that does <strong>not</strong> have coordinates in the final structure. Flexible loops, terminal regions, or disordered segments may not have been sufficiently resolved to model.<sup><a href="#ref5">5</a></sup></p>

  <p><strong>residue missing from the 3D model ≠ residue necessarily missing from the biological protein</strong></p>

  <h3>6.3 Biological Assembly</h3>

  <p>The deposited coordinates may describe an <strong>asymmetric unit</strong>, particularly for crystallographic structures. The biologically relevant complex may instead be represented by a <strong>biological assembly</strong>.<sup><a href="#ref6">6</a></sup></p>

  <p>This is especially important for <strong>dimers, oligomers, receptor complexes, protein–protein interfaces, viral capsids, and large molecular machines</strong>.</p>

  <h3>6.4 Engineered and Experimental Components</h3>

  <p>Many structures contain mutations, fusion partners, affinity tags, antibodies, stabilizing proteins, detergents, or crystallization molecules introduced to make the experiment possible.</p>

  <p>A structure file therefore represents <strong>the molecular system that was actually studied</strong>, which may differ from the untouched native protein.</p>

  <blockquote>
    <strong>Interpretation rule:</strong> Never read coordinates without asking <strong>“What exactly was in the experimental sample?”</strong>
  </blockquote>
</section>

<section>
  <h2>7. References</h2>

  <ol>
    <li id="ref1">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/dealing-with-coordinates" target="_blank" rel="noopener noreferrer">Dealing with Coordinates</a>. Accessed 1 September 2026.</li>
    <li id="ref2">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/small-molecule-ligands" target="_blank" rel="noopener noreferrer">Small Molecule Ligands</a>. Accessed 1 September 2026.</li>
    <li id="ref3">Worldwide Protein Data Bank. <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF General FAQ</a>. Accessed 1 September 2026.</li>
    <li id="ref4">Worldwide Protein Data Bank. <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-format.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF Format FAQ</a>. Accessed 1 September 2026.</li>
    <li id="ref5">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction" target="_blank" rel="noopener noreferrer">Guide to Understanding PDB Data</a>. Accessed 1 September 2026.</li>
    <li id="ref6">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies" target="_blank" rel="noopener noreferrer">Biological Assemblies</a>. Accessed 1 September 2026.</li>
    <li id="ref7">RCSB Protein Data Bank. <a href="https://www.rcsb.org/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank" target="_blank" rel="noopener noreferrer">Organization of 3D Structures in the Protein Data Bank</a>. Accessed 1 September 2026.</li>
  </ol>
</section>

</article>
  `,
};

export default article;
