import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-007",
  title: "Data and data types",
  date: "2026-07-09",
  tags: ["#data", "#datatypes"],
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
<h2>Introduction</h2>

<p>In our modern world, we frequently hear that "data is the new oil." But beneath the buzzwords and the server farms, what exactly is data? At its most fundamental level, data is simply a collection of raw, unprocessed facts, observations, symbols, or measurements. On its own, a piece of data—like the number "120" or the word "red"—lacks meaning. It is only when data is organized, contextualized, and analyzed that it transforms into valuable information.</p>

<h2>Types of Data</h2>

<p>While data is often broadly categorized simply as structured (easily organized in databases) or unstructured (free-form text, audio, images), professionals across scientific, technical, and regulatory disciplines categorize data based on its physical properties, its state in the data lifecycle, and its format. Here are the specific types of data commonly encountered:</p>

<h3>Fundamental Data Types</h3>

<p>At the most foundational level across pharmacy and pharmaceutical manufacturing, data is divided into quantitative (numerical) and qualitative (categorical) forms. However, these break down further into specific mathematical sub-types that dictate how they can be analyzed for drug safety and efficacy.</p>

 <h4>Quantitative Data (Numerical)</h4>
 <p>
   This data represents measurable quantities. It is mathematically operable (allowing for statistical analyses, standard deviations, and out-of-specification checks) and splits into two distinct types:

 </p>

   <p><b>Continuous Data:</b></p> <p> Measurements that can take on any value within a range, including infinitely small decimals and fractions. </p>
    <p>The precise concentration of an Active Pharmaceutical Ingredient (API) in a solution (e.g., 99.85%), the weight of a compressed tablet (e.g., 505.2 mg), or the specific pH level of a liquid suspension.</p>
   <p>
     <p><b>Discrete Data:</b></p>
     <p> Whole numbers that represent countable items; they cannot realistically be broken down into fractions.</p>
     <p>The exact number of defective vials identified on a packaging line, the pill count in a blister pack, or the number of reported adverse events during a Phase III clinical trial.</p>
 <h4>Qualitative Data (Categorical)</h4>
 <p>This comprises descriptive, non-numerical observations crucial for quality assurance and clinical feedback. Like numerical data, it has universal sub-types:</p>
   <p><b>Nominal Data:</b></p>
   <p> Categories with no inherent order, ranking, or hierarchy.</p>
   <p>The route of administration for a drug (oral, intravenous, topical), formulation type (capsule, tablet, ointment), or the definitive outcome of a microbiological sterility test (Pass/Fail).  </p>
   <p><b>Ordinal Data:</b> </p>
   <p>Categories that have a logical, defined order or ranking, though the exact mathematical difference between ranks is unquantifiable.</p>
    <p>Visual inspection grades for tablet coating defects (none, minor, major, critical), patient-reported pain scales in a clinical trial (mild, moderate, severe), or the staging of a disease being treated.</p>

<h3>Raw vs. Processed</h3>

 <p><b>Raw Data (Original Data):</b> </p>
 <p> This is the absolute "first capture" of an observation or measurement before any manipulation, filtering, or calculation has occurred. In regulated environments (like pharmaceutical manufacturing), preserving the original raw data—such as the direct electrical output from a sensor or the first entry into an Electronic Lab Notebook (ELN)—is a strict legal requirement to prove data integrity.</p>

   <p><b>Processed (or Analyzed) Data:</b></p>

   <p>Once raw data undergoes systematic transformation—such as a chemist performing blank area subtraction, total impurities calculations, or signal-to-noise ratio enhancements—it becomes processed data. This data is refined to deliver clear scientific conclusions or prove product safety.</p>


<h3>Metadata (Data About Data)</h3>

 <p>Often overlooked but crucially important is metadata. Metadata provides the essential context required to make primary data meaningful, reproducible, and compliant with regulatory standards (such as ALCOA+ principles). Metadata includes timestamps, the specific ID of the instrument used, calibration records, the identity and electronic signature of the scientist who ran the test, and detailed audit trails showing exactly who created, modified, or reviewed the data.</p>

<h2>How Context Changes Data</h2>

Data is rarely absolute in its meaning; it is highly contextual. The exact same data point—or the exact same pattern of data—can mean entirely different things depending on the professional looking at it. Let's look at how different fields interpret data.

 <h3>1. The Chemist</h3>

<p>For an analytical chemist, data is often a measure of physical properties and chemical behaviors. It is the absorbance intensity of a spectrophotometer or the peak area of a chromatogram.</p>

<p>A chemist looks at signals and noise. A sudden "spike" on a graph usually represents the detection of a specific molecule or an impurity in a sample. To the chemist, data is a pathway to understanding molecular structures, ensuring product safety (like in pharmaceuticals), and confirming the purity of a substance.</p>

 <h3>2. The Biologist</h3>

<p>For a biologist, data represents the messy, complex reality of living systems. It might look like a spreadsheet of DNA sequences, the migration coordinates of a flock of birds, or the replication rate of cells in a petri dish.</p>

<p> A biologist views data through the lens of life cycles and evolution. A "spike" on a graph to a biologist might mean a sudden population boom of an invasive species, or a rapid mutation rate in a virus. Data is the key to understanding how organisms interact with each other and their environments.</p>

<h3>3. The Physician (Doctor)</h3>

<p>To a physician, data is deeply personal and clinically urgent. It takes the form of vital signs (heart rate, blood pressure), laboratory results (cholesterol levels, white blood cell counts), and diagnostic imaging (X-rays, MRIs).</p>

<p> A doctor uses data to diagnose illnesses and save lives. While a chemist sees a graph spike as a molecular signal, a physician looking at a spike on an ECG monitor sees a dangerous heart arrhythmia. For the doctor, data must be interpreted rapidly to make critical decisions about patient care and treatment plans.</p>

<h3>4. The Mobile Company</h3>

<p>For a telecommunications or mobile tech company, data is the lifeblood of commerce and infrastructure. It includes user location pings, network bandwidth usage, app engagement time, and call drop rates.</p>

<p> A mobile company views data in terms of network optimization and user behavior. A "spike" on their graphs represents a surge in network traffic—perhaps due to a major news event or a viral trend. To them, data dictates where to build new cell towers, how to price subscription plans, and how to deliver targeted advertising.</p>

<h3>Conclusion</h3>

<p>Ultimately, data is a universal language, but one with many distinct dialects. Whether it is a string of genetic code, an electrical signal from an analytical instrument, a patient's heartbeat, or a smartphone's GPS ping, data is the raw material of truth. Its true power is unlocked only by the specific questions we ask of it, the context we preserve through metadata, and the unique perspectives we bring to its analysis.</p>
</article>



  `,
};

export default article;
