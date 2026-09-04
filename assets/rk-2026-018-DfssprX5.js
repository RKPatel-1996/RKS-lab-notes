const e={id:"RK-2026-018",title:"Core Pharmacology Databases: Connecting Chemicals, Targets and Drug Response",date:"2026-08-31",tags:["#Pharmacology","#DrugDatabases","#DrugDiscovery"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Pharmacology sits at the interface between chemistry and biology: a chemical has a structure, interacts with biological targets, produces measurable activity, and may ultimately become a medicine whose effects vary between patients. This introductory article presents the small set of databases that are most useful for following that chain, including PubChem, ChEMBL, DrugBank, the IUPHAR/BPS Guide to PHARMACOLOGY, BindingDB, DrugCentral, and ClinPGx. The aim is not to memorize databases, but to learn which resource answers which pharmacological question.",content:`
<article>

<section>
  <h2>1. Pharmacology Needs Both Chemical and Biological Information</h2>

  <p>A pharmacologist rarely asks only, <em>“What is this chemical?”</em> The more useful questions are usually: <strong>What is its structure? Which target does it act on? How strongly does it act? Is it an agonist, antagonist, inhibitor, or activator? Is it an approved drug? What adverse effects or interactions are known? Does genetic variation change the patient's response?</strong></p>

  <p>No single database answers all of these questions equally well. Pharmacology therefore depends on a group of connected resources that describe different parts of the same story.</p>

  <p>A useful way to visualize the information flow is:</p>

  <p><strong>chemical identity → molecular structure → biological target → measured activity → mechanism of action → therapeutic use → patient-specific response</strong></p>

  <p>This article focuses only on databases that directly support this <strong>chemical–biology interface</strong>. General nucleotide, protein-sequence, and protein-structure databases are intentionally left for their own articles.</p>

  <blockquote>
    <strong>Core idea:</strong> Do not memorize a list of database names. Learn <strong>which pharmacological question each database is designed to answer</strong>.
  </blockquote>
</section>

<section>
  <h2>2. The Core Database Map</h2>

  <p>For an introductory pharmacology course, seven resources cover most of the concepts worth learning first. They overlap, but each has a particularly useful role.</p>

  <table class="science-table" data-id="pharmacology-core-database-map">
    <caption>Table 1: Core databases for connecting chemical and biological information in pharmacology</caption>
    <thead>
      <tr>
        <th>Database</th>
        <th>Best First Question</th>
        <th>Main Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>PubChem</strong></td>
        <td>What chemical is this?</td>
        <td>Structures, identifiers, properties, substances, biological assays, safety links.</td>
      </tr>
      <tr>
        <td><strong>ChEMBL</strong></td>
        <td>What biological activity has been measured for this compound?</td>
        <td>Curated compounds, targets, assays, potency/activity measurements, ADMET-related data.</td>
      </tr>
      <tr>
        <td><strong>DrugBank</strong></td>
        <td>What is known about this drug as a medicine?</td>
        <td>Drug identity, targets, mechanism, indications, interactions, metabolism and related pharmaceutical information.</td>
      </tr>
      <tr>
        <td><strong>IUPHAR/BPS Guide to PHARMACOLOGY</strong></td>
        <td>What is the accepted pharmacology of this ligand–target pair?</td>
        <td>Expert-curated targets, ligands, pharmacological action and quantitative activity.</td>
      </tr>
      <tr>
        <td><strong>BindingDB</strong></td>
        <td>How strongly does this small molecule bind to this target?</td>
        <td>Experimentally measured protein–ligand binding affinities.</td>
      </tr>
      <tr>
        <td><strong>DrugCentral</strong></td>
        <td>What approved-drug, indication and mechanism information is available?</td>
        <td>Active ingredients, approvals, indications, mode of action, pharmacologic action and target relationships.</td>
      </tr>
      <tr>
        <td><strong>ClinPGx</strong><br><em>(formerly PharmGKB)</em></td>
        <td>Can genetics alter the response to this drug?</td>
        <td>Gene–drug relationships, pharmacogenomic annotations, drug labels and genotype-guided prescribing information.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Takeaway:</strong> The databases overlap, but their <strong>center of gravity</strong> differs: PubChem begins with the chemical, ChEMBL and BindingDB emphasize measured activity, DrugBank and DrugCentral emphasize drugs, Guide to PHARMACOLOGY emphasizes established ligand–target pharmacology, and ClinPGx emphasizes patient variation.</p>
</section>

<section>
  <h2>3. PubChem: Start With the Chemical</h2>

  <p><a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer"><strong>PubChem</strong></a>, maintained by the U.S. National Institutes of Health, is an open chemistry resource containing chemical structures, identifiers, physicochemical properties, biological activities, safety information and links to many contributing sources.<sup><a href="#ref1">1</a></sup></p>

  <p>For a pharmacology student, PubChem is often the best <strong>first stop when the starting point is a compound name</strong>. Searching a familiar drug such as aspirin can quickly connect the common name with its standardized chemical structure, formula, molecular weight, synonyms and external records.</p>

  <h3>3.1 Three PubChem IDs Worth Recognizing</h3>

  <p>PubChem separates submitted information from standardized chemical structures. The distinction is useful because the same molecule may be supplied by many different organizations.<sup><a href="#ref2">2</a></sup></p>

  <ul>
    <li><strong>SID — Substance ID:</strong> identifies a substance description submitted by a particular data source.</li>
    <li><strong>CID — Compound ID:</strong> identifies a standardized chemical structure derived from contributed substance records.</li>
    <li><strong>AID — Assay ID:</strong> identifies a biological assay record in PubChem BioAssay.</li>
  </ul>

  <p>This immediately teaches an important pharmacological lesson: <strong>a chemical structure and an experimental sample record are related concepts, but they are not identical data objects</strong>.</p>

  <h3>3.2 PubChem BioAssay Adds the Biology</h3>

  <p><a href="https://pubchem.ncbi.nlm.nih.gov/docs/bioassays" target="_blank" rel="noopener noreferrer">PubChem BioAssay</a> stores contributed biological screening and activity data. A record may indicate whether a substance was active or inactive in an experiment and can include measurements such as <strong>IC<sub>50</sub>, percentage inhibition, or assay signals</strong>.<sup><a href="#ref3">3</a></sup></p>

  <p><strong>Note:</strong> A PubChem Compound page aggregates information from many sources. <strong>Presence on a compound page does not mean every statement was independently experimentally verified by PubChem.</strong> Follow the source links when the evidence matters.</p>

  <p><strong>Takeaway:</strong> Use PubChem to establish <strong>chemical identity, structure and basic context</strong>, then follow links to the experimental or pharmacological evidence.</p>
</section>

<section>
  <h2>4. ChEMBL and BindingDB: From a Molecule to Quantitative Activity</h2>

  <p>Once the compound is identified, pharmacology moves from <em>“What is it?”</em> to <em>“What does it do, against which biological system, and at what concentration?”</em></p>

  <h3>4.1 ChEMBL: Bioactivity in Drug Discovery</h3>

  <p><a href="https://www.ebi.ac.uk/chembl/" target="_blank" rel="noopener noreferrer"><strong>ChEMBL</strong></a> is a manually curated database of bioactive molecules with drug-like properties. It brings together <strong>chemical, bioactivity and genomic information</strong> for drug-discovery research.<sup><a href="#ref4">4</a></sup></p>

  <p>ChEMBL is especially useful when a student encounters measurements such as <strong>IC<sub>50</sub>, EC<sub>50</sub>, K<sub>i</sub>, K<sub>d</sub>, potency, inhibition or activity in a cellular assay</strong>. These values should always be interpreted together with the assay conditions and target information.</p>

  <p>A lower numerical concentration does not automatically mean a “better drug.” The number may describe <strong>binding, enzyme inhibition, receptor activation, a cellular response, or another assay endpoint</strong>. Different assays are not automatically interchangeable.</p>

  <h3>4.2 BindingDB: Focus on Binding Affinity</h3>

  <p><a href="https://www.bindingdb.org/" target="_blank" rel="noopener noreferrer"><strong>BindingDB</strong></a> focuses more specifically on <strong>experimentally measured binding affinities between proteins and small, drug-like molecules</strong>.<sup><a href="#ref5">5</a></sup></p>

  <p>It becomes useful when the question is narrow: <em>“What experimental binding measurements have been reported between this ligand and this target?”</em></p>

  <blockquote>
    <strong>Important:</strong> <strong>Binding is not the same as functional effect.</strong> A molecule may bind a receptor without producing the same cellular consequence as another ligand. Pharmacology requires both <strong>affinity and functional context</strong>.
  </blockquote>

  <p><strong>Takeaway:</strong> ChEMBL provides broad <strong>bioactivity context</strong>; BindingDB is particularly useful for <strong>measured molecular binding</strong>.</p>
</section>

<section>
  <h2>5. DrugBank, Guide to PHARMACOLOGY and DrugCentral: From Activity to Drug Action</h2>

  <p>Experimental potency is only one layer of pharmacology. Students also need to connect a compound to its <strong>mechanism, target, therapeutic role and approved-drug context</strong>.</p>

  <h3>5.1 DrugBank: A Drug-Centered Knowledge Resource</h3>

  <p><a href="https://go.drugbank.com/" target="_blank" rel="noopener noreferrer"><strong>DrugBank</strong></a> integrates detailed information about drugs with information about their biological targets and related pharmaceutical properties. Its content includes drug–target relationships, mechanisms, indications, interactions, metabolism and other drug-centered information.<sup><a href="#ref6">6</a></sup></p>

  <p>For a student, DrugBank is useful when the starting question is <strong>“Tell me the pharmacological story of this drug.”</strong></p>

  <p><strong>Note:</strong> DrugBank has specific access and licensing conditions. Always check the current terms before assuming that data can be downloaded or redistributed freely.</p>

  <h3>5.2 IUPHAR/BPS Guide to PHARMACOLOGY: Pharmacological Authority</h3>

  <p><a href="https://www.guidetopharmacology.org/" target="_blank" rel="noopener noreferrer"><strong>IUPHAR/BPS Guide to PHARMACOLOGY (GtoPdb)</strong></a> is an expert-curated resource focused on <strong>ligand–activity–target relationships</strong>. It is designed specifically for pharmacology and drug-discovery users and provides quantitative information on drug targets and the ligands that act on them.<sup><a href="#ref7">7</a></sup></p>

  <p>This is particularly valuable when learning <strong>receptor pharmacology, ion channels, enzymes, transporters, nuclear receptors, agonists, antagonists, inhibitors and selective experimental ligands</strong>.</p>

  <p>When a lecture asks, <em>“What are the important ligands for this receptor, and how do they act?”</em>, this resource is often more directly pharmacological than a general chemistry database.</p>

  <h3>5.3 DrugCentral: Approved Drugs, Indications and Mode of Action</h3>

  <p><a href="https://drugcentral.org/" target="_blank" rel="noopener noreferrer"><strong>DrugCentral</strong></a> is an online drug information resource that connects active ingredients with pharmaceutical products, <strong>mode of action, indications, pharmacologic action and biological targets</strong>. Its maintainers monitor major regulatory agencies for new drug approvals.<sup><a href="#ref8">8</a></sup></p>

  <p>It is useful as an additional drug-centered resource when asking how a compound connects to <strong>approved therapeutic use and mechanism-of-action targets</strong>.</p>

  <p><strong>Takeaway:</strong> Use these resources after experimental activity has been established to understand <strong>what the compound means pharmacologically as a drug or ligand</strong>.</p>
</section>

<section>
  <h2>6. ClinPGx: Why the Same Drug Does Not Affect Every Patient the Same Way</h2>

  <p>Pharmacology does not end at the drug–target interaction. Differences in <strong>drug-metabolizing enzymes, transporters, receptors and other genes</strong> can alter efficacy or toxicity between patients.</p>

  <p><a href="https://www.clinpgx.org/" target="_blank" rel="noopener noreferrer"><strong>ClinPGx</strong></a> is the current home of the resource formerly known as <strong>PharmGKB</strong>. The transition brought PharmGKB content together with clinical pharmacogenomics resources such as CPIC, while retaining curated information about how genetic variation affects drug response.<sup><a href="#ref9">9</a></sup></p>

  <p>Students may therefore encounter both names:</p>

  <p><strong>older literature/textbooks: PharmGKB → current resource: ClinPGx</strong></p>

  <p>Its information connects <strong>chemicals/drugs → genes and variants → altered drug response → clinical annotations or prescribing guidance</strong>.</p>

  <p>This is the database layer that helps answer questions such as:</p>

  <ul>
    <li>Can a genetic variant alter metabolism of this drug?</li>
    <li>Is a gene–drug relationship supported by pharmacogenomic evidence?</li>
    <li>Does an established guideline recommend changing therapy according to genotype?</li>
  </ul>

  <blockquote>
    <strong>Important:</strong> A gene–drug association is not automatically a prescribing recommendation. Distinguish <strong>research evidence</strong> from <strong>clinically actionable guidance</strong>.
  </blockquote>

  <p><strong>Takeaway:</strong> ClinPGx extends pharmacology from <strong>“What does the drug do?”</strong> to <strong>“How might patient genetics change what the drug does?”</strong></p>
</section>

<section>
  <h2>7. How to Use the Databases Together</h2>

  <p>The most useful skill is not knowing every field in every database. It is knowing <strong>where to go next when a question changes</strong>.</p>

  <table class="science-table" data-id="pharmacology-question-to-database">
    <caption>Table 2: Choosing a database from the pharmacological question</caption>
    <thead>
      <tr>
        <th>Your Question</th>
        <th>Good Starting Resource</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>What is the correct chemical structure and identifier?</td>
        <td><strong>PubChem</strong></td>
      </tr>
      <tr>
        <td>What activity values have been measured against biological targets?</td>
        <td><strong>ChEMBL</strong></td>
      </tr>
      <tr>
        <td>What binding affinity measurements exist for a protein–ligand pair?</td>
        <td><strong>BindingDB</strong></td>
      </tr>
      <tr>
        <td>What is the drug's mechanism, target and pharmaceutical context?</td>
        <td><strong>DrugBank</strong> / <strong>DrugCentral</strong></td>
      </tr>
      <tr>
        <td>What is the accepted pharmacology of this target and its ligands?</td>
        <td><strong>IUPHAR/BPS Guide to PHARMACOLOGY</strong></td>
      </tr>
      <tr>
        <td>Can genetic variation alter response to the drug?</td>
        <td><strong>ClinPGx</strong></td>
      </tr>
    </tbody>
  </table>

  <h3>7.1 A Simple Workflow</h3>

  <p>Suppose you are given an unfamiliar candidate molecule. A sensible investigation might proceed as follows:</p>

  <ol>
    <li><strong>PubChem:</strong> establish chemical identity and structure.</li>
    <li><strong>ChEMBL:</strong> inspect reported assays and activity measurements.</li>
    <li><strong>BindingDB:</strong> examine measured binding where target-affinity data are relevant.</li>
    <li><strong>Guide to PHARMACOLOGY:</strong> determine whether the ligand–target relationship has established pharmacological interpretation.</li>
    <li><strong>DrugBank or DrugCentral:</strong> check whether the molecule is an established drug and inspect mechanism, indication and related drug information.</li>
    <li><strong>ClinPGx:</strong> determine whether important pharmacogenomic relationships are known.</li>
  </ol>

  <p>This workflow is not mandatory. It simply demonstrates that <strong>different databases answer successive parts of one pharmacological problem</strong>.</p>
</section>

<section>
  <h2>8. The Most Important Rules for Reading Pharmacology Databases</h2>

  <ol>
    <li><strong>Do not treat database presence as proof.</strong> Follow the underlying experiment, publication, label or curated evidence.</li>
    <li><strong>Do not confuse chemical identity with biological activity.</strong> A structure record tells you what the molecule is, not necessarily what it does.</li>
    <li><strong>Do not compare potency numbers without checking the assay.</strong> IC<sub>50</sub>, EC<sub>50</sub>, K<sub>i</sub> and K<sub>d</sub> describe different experimental concepts.</li>
    <li><strong>Binding does not automatically imply agonism, antagonism or therapeutic efficacy.</strong></li>
    <li><strong>Distinguish target from mechanism of action.</strong> A compound may interact with several proteins, while only some interactions explain its clinically relevant action.</li>
    <li><strong>Check whether the information describes an approved drug, an investigational compound, or an experimental ligand.</strong></li>
    <li><strong>Preserve identifiers.</strong> Names and synonyms vary; database identifiers and chemical structures make records easier to trace.</li>
    <li><strong>Use more than one source for important conclusions.</strong> The databases complement rather than replace one another.</li>
  </ol>

  <p>The central lesson is therefore simple:</p>

  <blockquote>
    <strong>Pharmacology databases are bridges.</strong> PubChem connects names to structures; ChEMBL and BindingDB connect structures to experimental activity; Guide to PHARMACOLOGY connects ligands to established target pharmacology; DrugBank and DrugCentral connect molecules to medicines; ClinPGx connects medicines to patient genetic variation.
  </blockquote>
</section>

<section id="references">
  <h2>9. References</h2>
  <ol>
    <li id="ref1">
      National Center for Biotechnology Information.
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/about" target="_blank" rel="noopener noreferrer">About PubChem</a>.
      National Library of Medicine, NIH. Accessed 31 August 2026.
    </li>
    <li id="ref2">
      National Center for Biotechnology Information.
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/compound-vs-substance" target="_blank" rel="noopener noreferrer">What is the difference between a substance and a compound in PubChem?</a>.
      PubChem documentation.
    </li>
    <li id="ref3">
      National Center for Biotechnology Information.
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/bioassays" target="_blank" rel="noopener noreferrer">PubChem BioAssays</a>.
      PubChem documentation. Accessed 31 August 2026.
    </li>
    <li id="ref4">
      Zdrazil B, Felix E, Hunter F, et al.
      <a href="https://www.ebi.ac.uk/chembl/" target="_blank" rel="noopener noreferrer">The ChEMBL Database in 2023: a drug discovery platform spanning multiple bioactivity data types and time periods</a>.
      <em>Nucleic Acids Research</em>. 2024;52(D1):D1180-D1192. doi:10.1093/nar/gkad1004.
    </li>
    <li id="ref5">
      Gilson MK, Liu T, Baitaluk M, Nicola G, Hwang L, Chong J.
      <a href="https://www.bindingdb.org/" target="_blank" rel="noopener noreferrer">BindingDB in 2024: a FAIR knowledgebase of protein-small molecule binding data</a>.
      <em>Nucleic Acids Research</em>. 2024. doi:10.1093/nar/gkae1075.
    </li>
    <li id="ref6">
      Knox C, Wilson M, Klinger CM, et al.
      <a href="https://academic.oup.com/nar/article/52/D1/D1265/7416367" target="_blank" rel="noopener noreferrer">DrugBank 6.0: the DrugBank Knowledgebase for 2024</a>.
      <em>Nucleic Acids Research</em>. 2024;52(D1):D1265-D1275. doi:10.1093/nar/gkad976.
    </li>
    <li id="ref7">
      Harding SD, Armstrong JF, Faccenda E, et al.
      <a href="https://academic.oup.com/nar/article/54/D1/D1446/8306131" target="_blank" rel="noopener noreferrer">The IUPHAR/BPS Guide to PHARMACOLOGY in 2026</a>.
      <em>Nucleic Acids Research</em>. 2026;54(D1):D1446-D1456. doi:10.1093/nar/gkaf1067.
    </li>
    <li id="ref8">
      DrugCentral.
      <a href="https://drugcentral.org/about" target="_blank" rel="noopener noreferrer">About DrugCentral</a>.
      Division of Translational Informatics, University of New Mexico. Accessed 31 August 2026.
    </li>
    <li id="ref9">
      Whirl-Carrillo M.
      <a href="https://blog.clinpgx.org/pharmgkb-is-now-clinpgx/" target="_blank" rel="noopener noreferrer">Announcing ClinPGx</a>.
      ClinPGx, 29 July 2025. See also the current <a href="https://www.clinpgx.org/" target="_blank" rel="noopener noreferrer">ClinPGx resource</a>.
    </li>
  </ol>
</section>

</article>
  `};export{e as default};
