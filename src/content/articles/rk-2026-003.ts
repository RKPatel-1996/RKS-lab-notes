import { Article } from "../../lib/types";
import f003_001 from "./article_images/f003_001.png";
import f003_002 from "./article_images/f003_002.png";
import f003_003 from "./article_images/f003_003.png";
import f003_004 from "./article_images/f003_004.png";

const article: Article = {
  id: "RK-2026-003",
  title: "Computer Hardware: CPU, RAM, and Storage",
  date: "2026-07-06",
  tags: ["#Hardware, #CPU, #RAM, #Storage"],
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
  <h2><strong>1. Introduction</strong></h2>

  <section>
    <p> Today’s breakthroughs in drug discovery, genomics, and molecular modeling happen just as often <dfn><em>in silico</em></dfn> (computational simulations performed on a computer) as they do <dfn><em>in vitro</em></dfn> (experiments conducted in a test tube or controlled environment). Whether you are running molecular dynamics simulations in software like GROMACS, analyzing genomic sequences, or processing gigabytes of mass spectrometry data, your computer is your most heavily used piece of lab equipment.</p>

    <p>However, many life science students treat their computers as mysterious black boxes. Understanding core hardware components, cables, and ports is no longer just for IT professionals—it is a critical skill for optimizing your research workflows, protecting your data, and communicating effectively with your university's <abbr title="High-Performance Computing">HPC</abbr> admins.</p>

  </section>

  <section>
    <h2><strong>2. CPU, RAM, and Storage</strong></h2>
    <p>Think of these three components as the central dogma of your computer’s biology. Just as DNA is transcribed to RNA and translated to proteins, data moves from Storage, into <abbr title="Random Access Memory">RAM</abbr>, and is processed by the <abbr title="Central Processing Unit">CPU</abbr>.</p>


    <section>
      <h3><strong>2.1. The CPU (Central Processing Unit): The Master Enzyme</strong></h3>
      <p>The <abbr title="Central Processing Unit">CPU</abbr> is the brain of the computer, acting much like a catalyst or enzyme in a biochemical reaction. It dictates how fast computational "reactions" occur.</p>

      <p>To understand how hardware affects your calculations, think of core count and clock speed like a team of workers: the core count represents the number of workers available, while the clock speed determines how quickly each individual worker completes their tasks. [i.e. (Figure 1) if i have 6 cores then assume we have 6 workers that can perform the tasks at 3.0 GHz speed] </p>

    <figure class="science-figure" data-id="Figure: 1" data-clean-src="${f003_001}">
            <img src="${f003_001}" alt="CPU consumer grade" />
            <figcaption>Windows Task Manager performance tab displaying an AMD Ryzen 5 4600H CPU with 6 cores, 12 logical processors (threads), and a current speed of 3.0 GHz. </figcaption>
          </figure>

      <ul>
      <li><strong>Clock Speed (The Turnover Number):</strong> This dictates how fast a single CPU core can perform a task, operating exactly like an enzyme's "k_cat". Just as one incredibly efficient catalase molecule can rapidly process 40 million hydrogen peroxide molecules a second, a high clock speed allows a single CPU core to execute billions of instructions per second. This raw processing speed is vital for intensive, single-threaded tasks—like running specific statistical scripts in R or Python—where the "reaction rate" of a single core is the main bottleneck.
      </li>
      <li>
      <strong>Core Count (The Enzyme Concentration):</strong> Modern CPUs are built with multiple processing cores. Think of this as increasing your total enzyme concentration. While clock speed measures how fast one CPU core (enzyme) works, your core count determines how many cores (enzymes) are working side-by-side. Increasing your core count allows your computer to process multiple<b> independent</b> tasks simultaneously, just as a higher concentration of catalase allows a cell to tackle a massive influx of toxins across multiple locations all at once. Higher core count allows CPU to tackle multiple tasks at once.</li>
      </ul>

      <p>Because of heat and power limitations, the physical trade-off for adding more cores is typically having to lower the overall clock speed. CPU manufacturers design different chips to cater to either extreme parallel density or high-speed sequential needs.</p>

      <p><strong>2.1.1. Parallel Computations (Rely on Core Count)</strong></p>
      <p>In highly parallel workloads, tasks can be divided up and executed simultaneously by multiple "CPU cores".</p>
      <ul>
        <li><strong>Parallel Processing:</strong> Imagine you have a stack of 1,000 multiple-choice exams to grade. Grading one student's exam doesn't depend on the results of any other student; they are completely independent tasks. If one teacher (a single core) takes 1,000 minutes to grade the stack, hiring 10 teachers (multiple cores) to split the pile allows them to work simultaneously, finishing the exact same job in just 100 minutes. In computing, when tasks don't depend on each other, having more cores drastically reduces the time it takes to process the data. Basically parallel processing allows you to get more done in less time by utilizing multiple cpu cores at once.</li>
      </ul>

      <p><strong>2.1.2. Sequential Computations (Rely on Clock Speed)</strong></p>
      <p>In sequential workloads, each step of the calculation relies on the result of the previous step, meaning tasks must be done one after another. Here, you cpu cannot benefit from additional cores.</p>
      <ul>
        <li> In particle simulations (common in structural mechanics or molecular dynamics), calculating a particle's new position affects all subsequent calculations. This sequential dependency means you cannot simply add more cores to speed up the job—the extra cores will just sit idle. Instead, higher clock speeds directly reduce the time it takes to complete each consecutive step, accelerating the entire workflow.</li>
      </ul>

      <p><strong>2.1.3 Real-World Application: Choosing the Right CPU</strong></p>
      <p>Here is a real comparison of two modern processors from the 5th Generation AMD EPYC server lineup that illustrates this divide:</p>
      <ul>
        <li><strong>The High Core Count Option (AMD EPYC 9965):</strong> This processor features a staggering 192 physical cores and 384 threads, but it operates at a lower 2.25 GHz base clock speed (boosting up to 3.70 GHz). It is built for maximum compute density. You would choose this processor for running massive virtualization clusters, cloud platforms, or heavily parallel AI training where you need as many "workers" as possible.</li>
        <li><strong>The High Clock Speed Option (AMD EPYC 9575F):</strong> The "F" designates a high-frequency model. This processor reduces the core count to 64 cores, but significantly increases the clock speeds to a 3.30 GHz base and a massive 5.00 GHz maximum boost. You would choose this processor for sequential engineering simulations, high-frequency databases, or as a host for GPU-native workloads where the CPU cores need to feed data to graphics cards as fast as physically possible without bottlenecking.</li>
      </ul>
    </section>

    <section>
      <h3><strong>2. RAM (Random Access Memory): Your Laboratory Workbench</strong></h3>
      <p><abbr title="Random Access Memory">RAM</abbr> is your system's volatile, short-term memory.</p>
      <p><strong>The Workbench:</strong> </p>
      <p>Imagine your physical lab bench. If you have a tiny bench (low RAM), you can only keep a few reagents out at a time. If you need something else, you have to walk down the hall to the storage room (the hard drive), which drastically slows down your experiment. High RAM (32GB, 64GB, or even 192GB in servers) gives you a massive workbench, allowing you to load entire genome sequences or large chemical libraries into active memory for instantaneous access.</p>
        <p><strong>The Volatility Catch (Data Loss):</p></strong> <p>RAM is strictly temporary workspace. It requires continuous electrical power to hold data. If your computer crashes or the power goes out in the building, the "workbench" is instantly wiped clean. Any structural models, simulation frames, or statistical scripts not yet saved to your permanent storage (your SSD/HDD) will be permanently lost.</p>
        <p><strong>ECC RAM (Error-Correcting Code):</p></strong> <p>For pharmacology and clinical research, data integrity is paramount. Enterprise workstations and servers use <abbr title="Error-Correcting Code">ECC</abbr> RAM, which actively detects and corrects single-bit memory errors. Without it, "silent data corruption" can alter a sequence or a decimal point in a data files without you ever knowing.</p>

    </section>

    <section>
      <h3><strong>3. Storage Mediums (SSD vs. HDD): The Cold Storage</strong></h3>
      <p>Storage is where your data lives permanently when the power is off.</p>
      <ul>
        <li><strong>HDD (Hard Disk Drive):</strong> The -80°C freezer of computing. HDDs use spinning magnetic platters. They are cheap and offer massive capacities, making them perfect for archiving terabytes of raw, unanalyzed sequencing data or past experiments that you don't need to access daily.</li>
        <li><strong>SSD (Solid State Drive):</strong> The 4°C fridge right next to your bench. SSDs (especially modern NVMe PCIe SSDs) use flash memory and have no moving parts, making them exponentially faster than HDDs. When you are actively querying large databases or booting up heavy software like MATLAB, an SSD is essential to prevent bottlenecking your workflow.</li>
      </ul>
    </section>
  </section>



  <section>
    <h2><strong>3. Essential Cables and Ports</strong></h2>
    <p>A powerful workstation is useless if you can't connect it to your displays, external databases, or specialized lab equipment. Recognizing your ports ensures you don't bottleneck your data transfer.</p>

    <section>
      <h3><strong>3.1 Data and Peripheral Ports</strong></h3>
      <ul>
        <li><strong>USB Type-A:</strong> The classic, rectangular port. Useful for basic peripherals like mice, keyboards, or older flash drives. Looks like type c but internally it has white colored pins instead of blue.</li>
            <figure class="science-figure" data-id="Figure: 2" data-clean-src="${f003_002}">
            <img src="${f003_002}" alt="USB ports" />
            <figcaption>Various ports found in modern computers. <a href="https://www.usbmemorydirect.com/blog/thunderbolt-3-vs-us-c/" target="_blank">Source</a> </figcaption>
          </figure>

        <li><strong>USB Type-C &amp; Thunderbolt:</strong> The modern, oval-shaped port. Thunderbolt ports are critical for biologists. They transfer data at lightning speeds (up to 40 Gbps), which is exactly what you need when migrating a 500GB dataset from a sequencer to your local machine. They can also act as docking station hubs, delivering power, video, and data through a single cable.</li>
      </ul>
    </section>


<section>
  <h3><strong>3.2 Video Display Ports</strong></h3>
  <p>Pharmacology and structural biology require immense screen real estate. You will often need one screen for reading a research paper, another for your data spreadsheet, and a third for a 3D molecular viewer.</p>
            <figure class="science-figure" data-id="Figure: 3" data-clean-src="${f003_003}">
            <img src="${f003_003}" alt="" />
            <figcaption>Comparison of common video display ports and cable connectors, from older analog standards (VGA) to modern digital multi-purpose interfaces (USB-C). <a href="https://lanberg.eu/news/how-to-pick-the-right-standard-to-fully-unlock-your-monitor-console-tv-or-laptop" target="_blank">Source</a></figcaption>
          </figure>


  <ul>
    <li><strong>VGA:</strong> An older, legacy analog standard typically featuring a blue connector. While largely obsolete for modern, high-resolution screens, you may still encounter it on older laboratory equipment or legacy projectors.</li>
    <li><strong>DVI:</strong> A bulky connector that served as a transition between analog and digital standards. It is less common today but still frequently found on older monitors used for standard office setups.</li>
    <li><strong>HDMI:</strong> The standard for most basic monitors. Good for everyday tasks, but can be limited in refresh rates at very high resolutions.</li>
    <li><strong>DisplayPort (DP):</strong> The preferred standard for high-end, high-resolution monitors. If you are scrutinizing the electron density map of a protein structure in sharp 4K resolution, DisplayPort ensures you get the most accurate visual fidelity.</li>
    <li><strong>USB-C:</strong> A modern, compact, and highly versatile connector. It is increasingly popular for laptops because it can simultaneously carry high-resolution video (via DisplayPort Alt Mode), transfer data, and deliver power, significantly reducing cable clutter on your workbench.</li>
  </ul>
</section>
    <section>
      <h3><strong>3.3 Networking Infrastructure</strong></h3>
      <p>When working with large datasets, Wi-Fi is often too slow and unstable. You will need a hardwired connection to access your university's shared servers or High-Performance Computing (<abbr title="High-Performance Computing">HPC</abbr>) clusters.</p>
      <ul>
      <figure class="science-figure" data-id="Figure: 3" data-clean-src="${f003_004}">
            <img src="${f003_004}" alt="Ethernet Connection" />
            <figcaption>RJ45 (Ethernet) port and cable. <a href="https://techterms.com/definition/ethernet" target="_blank">Source</a></figcaption>
          </figure>
        <li><strong>RJ45 (Ethernet):</strong> The standard networking port. You should pair this with a <strong>Cat6 or Cat6a cable</strong> (which supports up to 10 Gigabit speeds). This is the "artery" that connects your local machine to the institutions main data centers and internet.</li>
      </ul>
    </section>
  </section>



</article>



  `,
};

export default article;
