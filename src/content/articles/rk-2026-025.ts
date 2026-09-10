import { Article } from "../../lib/types";

const article: Article = {
  id: "RK-2026-025",
  title: "RDKit for structure design and sdf file creation",
  date: "2024-02-26",
  tags: ["#RDkit", "#SDF|mol2", "#3D|2D-structures"],
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
    
<p>RDKit is indeed the gold standard for cheminformatics, and you are making a great choice for generating both publication-ready 2D figures and reliable 3D conformers.</p>

To get started, make sure you have RDKit installed. The most reliable way to install it is via conda:
<pre>
    
    <code>mamba install -c conda-forge rdkit</code>
</pre>


Here is a straightforward guide to achieving both of your go<p>als using Python.</p>

 <h2>1. Generating Publication-Quality 2D Images</h2>
<p>
        For publication-standard 2D images, the secret is to use Scalable Vector Graphics (SVG) instead of standard PNGs. SVGs scale infinitely without losing resolution or becoming pixelated. RDKit’s rdMolDraw2D module gives you granular control over line widths, fonts, and styling.
</p>

<pre>
    <code>
    
import csv
import os
import re
from rdkit import Chem
from rdkit.Chem import AllChem, Draw
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Chem.SaltRemover import SaltRemover

# --- 1. CONFIGURATION ---
input_csv = 'my_molecules.csv'
output_dir = 'molecule_exports'
error_log_file = 'failed_molecules_log.csv'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

remover = SaltRemover() # Initialize the salt stripper

# Set up the error log
with open(error_log_file, mode='w', newline='') as err_file:
    err_writer = csv.writer(err_file)
    err_writer.writerow(["Row", "Name", "SMILES", "Failure_Reason"])

# --- 2. READ AND PROCESS CSV ---
with open(input_csv, mode='r') as file:
    reader = csv.reader(file)
    
    for row_num, row in enumerate(reader, start=1):
        if not row or len(row) < 2:
            continue
            
        raw_name = row[0].strip()
        smiles = row[1].strip()
        safe_name = re.sub(r'[^a-zA-Z0-9_\-]', '_', raw_name) or f"molecule_row_{row_num}"

        # Helper function to log errors and move to the next molecule
        def log_error(reason):
            print(f"  [X] Failed: {raw_name} - {reason}")
            with open(error_log_file, mode='a', newline='') as err_file:
                csv.writer(err_file).writerow([row_num, raw_name, smiles, reason])

        print(f"Processing: {raw_name}...")

        # --- 3. PARSE, STRIP SALTS, AND SANITIZE ---
        mol = Chem.MolFromSmiles(smiles)
        if mol is None:
            log_error("Invalid SMILES string")
            continue

        # Strip salts (e.g., removes the Cl in a hydrochloride salt)
        mol = remover.StripMol(mol, dontRemoveEverything=True)
        
        # Ensure the molecule is chemically valid
        try:
            Chem.SanitizeMol(mol)
        except Exception as e:
            log_error("Failed chemical sanitization")
            continue

        # --- 4. GENERATE 2D IMAGES ---
        try:
            AllChem.Compute2DCoords(mol)
            
            # SVG Generation
            drawer_svg = rdMolDraw2D.MolDraw2DSVG(400, 400)
            opts = drawer_svg.drawOptions()
            opts.bondLineWidth = 2.5       
            opts.addStereoAnnotation = True 
            opts.clearBackground = True    
            opts.padding = 0.1             
            
            drawer_svg.DrawMolecule(mol)
            drawer_svg.FinishDrawing()
            
            with open(os.path.join(output_dir, f'{safe_name}_svg.svg'), 'w') as f:
                f.write(drawer_svg.GetDrawingText())
                
            # PNG Generation
            drawer_png = rdMolDraw2D.MolDraw2DCairo(1200, 1200) 
            opts_png = drawer_png.drawOptions()
            opts_png.bondLineWidth = 3.0 
            opts_png.addStereoAnnotation = True
            opts_png.clearBackground = True
            opts_png.padding = 0.1
            
            drawer_png.DrawMolecule(mol)
            drawer_png.FinishDrawing()
            drawer_png.WriteDrawingText(os.path.join(output_dir, f'{safe_name}_png.png'))
            
        except Exception as e:
            log_error(f"2D Image generation failed: {str(e)}")
            continue # If 2D fails, skip 3D

        # --- 5. GENERATE 3D CONFORMERS ---
        try:
            mol_3d = Chem.AddHs(mol)
            params = AllChem.ETKDGv3()
            params.randomSeed = 42
            
            # Check if embedding returns -1 (failure)
            if AllChem.EmbedMolecule(mol_3d, params) == -1:
                log_error("3D ETKDG embedding failed (likely strained geometry)")
                continue
                
            # Optimize geometry and check for convergence
            # MMFFOptimizeMolecule returns 0 if converged, 1 if max iterations reached without convergence
            convergence_status = AllChem.MMFFOptimizeMolecule(mol_3d, maxIters=1000)
            if convergence_status != 0:
                log_error("3D MMFF optimization failed to converge")
                continue
                
            # Save files only if everything above succeeded
            writer = Chem.SDWriter(os.path.join(output_dir, f'{safe_name}_3d.sdf'))
            writer.write(mol_3d)
            writer.close()
            
            Chem.MolToMolFile(mol_3d, os.path.join(output_dir, f'{safe_name}_3d.mol'))
            Chem.MolToPDBFile(mol_3d, os.path.join(output_dir, f'{safe_name}_3d.pdb'))
            
        except Exception as e:
            log_error(f"Unexpected 3D generation error: {str(e)}")
            continue

print(f"\nBatch complete! Check '{error_log_file}' for any skipped molecules.")    
</code>
</pre>




    </article>


  `,
};

export default article;
