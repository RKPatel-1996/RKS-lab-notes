import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2025-001",
  title: "Core philosophy of my youtube channel",
  date: "2025-11-25",
  tags: ["#Bioinformatics", "#CorePhilosophy", "#Youtube"],
  type: "manuscript",
  template: "standard",
  readTime: "12 min",
  excerpt:
    "What my channel and blog is about? basic idea of why am i building this blog and youtube channel.",
  citations: [
    {
      id: "1",
      text: "Chen, L. et al. (2024). 'Microgravity Crystallization.' Nature Space.",
      source: "Nature Space",
    },
  ],
  content: `
      <h2>Abstract</h2>
      <p>This manuscript outlines the core philosophy and objectives of my YouTube channel and blog, dedicated to exploring the intersection of bioinformatics and microbiology. The channel aims to demystify complex scientific concepts, foster a community of learners, and promote open access to knowledge in the rapidly evolving field of bioinformatics.</p>
      
      <h2>Introduction</h2>
      <p>In an era where data is abundant and technology is rapidly advancing, the field of bioinformatics has emerged as a critical discipline for understanding biological systems but "biologists have studied the biology field books related to zoology, botany or microbiology not software and hardware books!"</p>
      <P>How do we integrate this two fields that are so different,  and requires different set of skills and knowledge?</P>
      <p> this is the single most important query and confusion i want to address</p>
      
      <h2>What i am aiming for?</h2>
      <P>Easy explanation of technology terms that biologists can relate too</P>
      <P>Practical examples of how bioinformatics can be applied to real-world biological problems</P>
      <P>Interviews and discussions with experts in the field to provide diverse perspectives</P>
      <P>Hands-on tutorials and walkthroughs of bioinformatics tools and techniques</P>

      <h2>What we are not definitely aiming for?</h2>
      <P>Highly technical content that requires advanced knowledge in computer science or programming</P>
      <P>Content that is purely theoretical without practical applications</P>
      <P>Making you expert in just 5 or 10 videos ? it is just a false promise i am not willing to make to anyone..</P>

      <h2>Conclusion</h2>
      <p>Be patient, it takes time to acquire new skills. You do not become expert in anything overnight hence lets build our knowledge over time.</p>
    `,
};

export default article;