
import { Article, SortOption, VideoMedia } from './types';

export const SORT_OPTIONS: SortOption[] = [
  { id: 'chronological', label: 'Chronological' },
  { id: 'impact', label: 'Impact' },
  { id: 'subject', label: 'Subject' },
];

export const ARTICLES: Article[] = [
  {
    id: 'MS-2025-001',
    title: 'The Effects of Protein Folding in Low-Gravity Environments',
    date: '2025-11-25',
    tags: ['#Bioinformatics', '#SpaceSci', '#Proteomics'],
    type: 'manuscript',
    template: 'standard',
    readTime: '12 min',
    excerpt: 'An analysis of crystalline structures formed aboard the ISS during the Alpha-7 mission.',
    citations: [
      { id: '1', text: "Chen, L. et al. (2024). 'Microgravity Crystallization.' Nature Space.", source: "Nature Space" },
      { id: '2', text: "Smith, J. (2023). 'Proteins in Vacuum.' Journal of Astrobiology.", source: "J. Astrobio" }
    ],
    content: `
      <h2>Abstract</h2>
      <p>The folding pathways of complex proteins are significantly altered when hydrodynamic shear forces are removed. This study presents data from the Alpha-7 mission, demonstrating a 40% increase in structural fidelity for synthetic enzymes.</p>
      
      <h2>Introduction</h2>
      <p>Protein misfolding is a primary driver of neurodegenerative diseases. By utilizing the microgravity environment of the International Space Station, we isolated the nucleation phase of amyloid beta sheets [1].</p>
      
      <h2>Methodology</h2>
      <p>Samples were prepared in a sealed glovebox environment. Initial seeding was performed at T-minus 4 hours relative to launch. Telemetry indicated stable thermal regulation throughout the ascent phase.</p>
      
      <div class="code-block">
        <code>
# Python simulation of folding trajectory
def calculate_folding_energy(structure):
    delta_g = 0.0
    for residue in structure.residues:
        delta_g += residue.hydrophobic_potential()
    return delta_g * CONST_GRAVITY_MODIFIER
        </code>
      </div>
      
      <h2>Results</h2>
      <p>Spectroscopic analysis reveals a distinct lack of aggregate clumping typically seen in terrestrial controls [2]. The crystalline lattice formed a perfect hexagonal array.</p>
      
      <figure class="science-figure">
        <img src="https://picsum.photos/800/400" alt="Spectroscopic Analysis Graph" />
        <figcaption>Comparative density of protein structures (Earth vs. Orbit).</figcaption>
      </figure>
      
      <h2>Conclusion</h2>
      <p>Orbital manufacturing of pharmaceutical compounds presents a viable pathway for high-purity enzyme production.</p>
    `
  },
  {
    id: 'LOG-2025-089',
    title: 'System Migration: Legacy Database to Neural Cluster',
    date: '2025-10-14',
    tags: ['#SysAdmin', '#DataArch', '#Log'],
    type: 'log',
    template: 'custom',
    readTime: '5 min',
    citations: [],
    excerpt: 'Post-mortem of the 12-hour downtime experienced during the core transfer.',
    content: `
      <h2>Incident Report</h2>
      <p>At 0400 hours, the primary SQL shard began rejecting writes. Diagnostics indicated a buffer overflow in the legacy middleware.</p>
      
      <h2>Action Taken</h2>
      <p>We initiated a hard failover to the secondary cluster. Data integrity checks were run immediately.</p>
      
      <div class="code-block">
        <code>
> tail -f /var/log/syslog
> [ERROR] Connection refused on port 5432
> [WARN] Retry limit exceeded
> [INFO] Switching to backup node...
        </code>
      </div>
      
      <p>Service was restored by 0445 hours. No data loss occurred.</p>
    `
  },
  {
    id: 'REP-2025-012',
    title: 'Annual Energy Consumption Audit: Lab Sector 7',
    date: '2025-09-01',
    tags: ['#Sustainability', '#Infrastructure'],
    type: 'report',
    template: 'standard',
    readTime: '8 min',
    citations: [{ id: '1', text: "Internal Memo 99-B", source: "Admin" }],
    excerpt: 'Sector 7 has exceeded its kilowatt-hour budget by 15% due to the new particle accelerator calibration.',
    content: `
      <h2>Summary</h2>
      <p>The installation of the Cyclotron-B has put strain on the local grid. Upgrades to the capacitor banks are recommended immediately [1].</p>
    `
  }
];

export const VIDEOS: VideoMedia[] = [
  {
    id: 'jfKfPfyJRdk', 
    title: 'Lab_Ambience_Audio_Stream',
    duration: 'LIVE',
    date: '2025-11-20'
  },
  {
    id: 'L_GUZvOWMAk', 
    title: 'Immune_Response_Simulation',
    duration: '10:15',
    date: '2025-10-15'
  },
  {
     id: '8PhhIpwrpsg',
     title: 'Scanning_Electron_Microscope_Calibration',
     duration: '22:45',
     date: '2025-09-01'
  }
];
