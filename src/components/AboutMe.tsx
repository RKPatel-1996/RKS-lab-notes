import React, { useEffect } from 'react';
import { Mail, Github, BookOpen, GraduationCap, ExternalLink, Loader, Award, Briefcase, Terminal } from 'lucide-react';
import { useOrcid } from '../hooks/useOrcid';
import profilePic from '../content/images/RK.jpg';

export const AboutMe: React.FC = () => {
  const { publications, loading, error } = useOrcid('0000-0002-7077-4218');

  useEffect(() => {
    document.title = "Personnel File | RKs-LAB-NOTES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', "Personnel File - RK Patel");
  }, []);

  return (
    <div className="min-h-full p-6 md:p-12 relative">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black border border-ink dark:border-white shadow-paper dark:shadow-retro-dark p-8 md:p-12 relative">

        {/* Retro "Confidential" Stamp */}
        <div className="absolute top-4 right-4 border-2 border-red-700 dark:border-gray-300 text-red-700 dark:text-gray-300 px-2 py-1 font-mono text-xs font-bold -rotate-12 opacity-80 uppercase tracking-widest">
          Personnel_File
        </div>

        {/* Header Section */}
        <header className="flex flex-col md:flex-row gap-8 mb-12 border-b-2 border-ink dark:border-white pb-8">
          <div className="shrink-0 relative group">
            <div className="w-48 h-48 bg-gray-200 dark:bg-gray-800 border-4 border-ink dark:border-white overflow-hidden relative">
               {/* Profile Image */}
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rohit+Patel&background=random&size=200';
                }}
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,rgba(0,0,0,0)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            </div>
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 dark:bg-gray-800/80 rotate-3 shadow-sm z-10"></div>
          </div>

          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink dark:text-white mb-2">
              Patel Rohit K.
            </h1>
            <div className="font-mono text-sm md:text-base bg-ink text-paper dark:bg-white dark:text-black inline-block px-2 py-1 mb-6 uppercase tracking-wider">
              Microbiologist & Bioinformatician
            </div>

            <p className="font-serif text-lg leading-relaxed text-ink dark:text-white/90 mb-6 border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic">
              "A dedicated microbiology and bioinformatics researcher passionate about bridging the gap between computational technology and life sciences. My mission is to translate complex computational methods and tools into accessible, actionable knowledge for biologists."
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
              <a href="mailto:rohitmicrobiologist@gmail.com" className="flex items-center gap-2 hover:text-accent dark:hover:text-gray-300 transition-colors">
                <Mail size={14} /> rohitmicrobiologist@gmail.com
              </a>
              <a href="https://github.com/RKPatel-1996" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-gray-300 transition-colors">
                <Github size={14} /> github.com/RKPatel-1996
              </a>
              <a href="https://scholar.google.co.in/citations?user=kvgCFB4AAAAJ" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-gray-300 transition-colors">
                <GraduationCap size={14} /> Google Scholar
              </a>
              <a href="https://www.researchgate.net/profile/Rohit-Patel-7" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-gray-300 transition-colors">
                <BookOpen size={14} /> ResearchGate
              </a>
               <a href="https://orcid.org/0000-0002-7077-4218" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent dark:hover:text-gray-300 transition-colors col-span-full">
                <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px] font-bold">iD</div> ORCID: 0000-0002-7077-4218
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Education & Skills */}
          <div className="lg:col-span-1 space-y-12">

            {/* Education Section */}
            <section>
                <h3 className="font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-white mb-4 pb-1 flex items-center gap-2">
                    <GraduationCap size={16} /> Education_History
                </h3>
                <div className="space-y-6 font-serif text-sm relative border-l border-dashed border-gray-400 dark:border-gray-700 ml-2 pl-6">
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 bg-ink dark:bg-white rounded-full"></div>
                        <div className="font-bold text-ink dark:text-white">Ph.D. in Microbiology</div>
                        <div className="text-pencil dark:text-gray-400 text-xs mb-1">Gujarat University (Pursuing)</div>
                        <p className="text-xs italic leading-tight">Exploring bacterial secondary metabolites as phytohormone analogues.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-gray-800 rounded-full"></div>
                        <div className="font-bold text-ink dark:text-white">M.Sc. in Microbiology</div>
                        <div className="text-pencil dark:text-gray-400 text-xs mb-1">Gujarat University (2020)</div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-gray-800 rounded-full"></div>
                        <div className="font-bold text-ink dark:text-white">B.Sc. in Microbiology</div>
                        <div className="text-pencil dark:text-gray-400 text-xs mb-1">Gujarat Arts & Science College (2018)</div>
                    </div>
                </div>
            </section>

             {/* Experience Section */}
             <section>
                <h3 className="font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-white mb-4 pb-1 flex items-center gap-2">
                    <Briefcase size={16} /> Research_Exp
                </h3>
                <div className="font-serif text-sm">
                    <div className="mb-2 font-bold text-ink dark:text-white">Senior Research Fellow (SRF)</div>
                    <div className="text-xs text-pencil dark:text-gray-400 mb-2">Gujarat University</div>
                    <p className="text-xs leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                        Project: Network program on Antimicrobial Resistance, Superbugs and One Health (Human health care node).
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section>
                <h3 className="font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-white mb-4 pb-1 flex items-center gap-2">
                    <Terminal size={16} /> Skill_Matrix
                </h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Molecular Docking", "MD Simulation", "WGS", "Metagenomics",
                        "AMR Workflows", "Web-App Dev", "Plant-Microbe Interaction"
                    ].map(skill => (
                        <span key={skill} className="font-mono text-[10px] bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-white px-2 py-1 text-ink dark:text-white hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

          </div>

          {/* Right Column: Publications */}
          <div className="lg:col-span-2">
             <h3 className="font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-white mb-6 pb-1 flex items-center gap-2">
                <Award size={16} /> Publications_DB (Live Sync)
            </h3>

            {loading && (
                <div className="flex flex-col items-center justify-center h-48 font-mono text-xs text-pencil dark:text-white animate-pulse">
                    <Loader className="animate-spin mb-4" />
                    <span>ESTABLISHING_CONNECTION_TO_ORCID...</span>
                </div>
            )}

            {error && (
                <div className="p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs text-center">
                    ERROR: {error}
                </div>
            )}

            {!loading && !error && (
                <div className="space-y-4">
                    {publications.length === 0 ? (
                        <div className="text-center font-mono text-xs text-pencil py-8">No public records found.</div>
                    ) : (
                        publications.map((work, idx) => (
                            <div key={idx} className="group relative border border-gray-200 dark:border-gray-700 p-4 hover:border-ink dark:hover:border-white transition-colors bg-gray-50 dark:bg-transparent">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-gray-800 group-hover:bg-accent dark:group-hover:bg-gray-300 transition-colors"></div>
                                <div className="pl-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-mono text-[10px] uppercase text-pencil dark:text-gray-500 border border-gray-300 dark:border-gray-700 px-1 rounded">
                                            {work.year}
                                        </span>
                                        <a href={work.url} target="_blank" rel="noreferrer" className="text-pencil hover:text-accent dark:text-gray-400 dark:hover:text-gray-300">
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                    <h4 className="font-serif font-bold text-ink dark:text-white text-lg leading-tight mb-2 group-hover:text-accent dark:group-hover:text-gray-300 transition-colors">
                                        {work.title}
                                    </h4>
                                    <div className="font-serif italic text-sm text-pencil dark:text-gray-300">
                                        {work.journal}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

             <div className="mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-gray-700 text-center">
                <a href="https://orcid.org/0000-0002-7077-4218" target="_blank" rel="noreferrer" className="font-mono text-xs text-accent dark:text-white hover:underline">
                    VIEW_FULL_RECORD_ON_ORCID [external_link]
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};