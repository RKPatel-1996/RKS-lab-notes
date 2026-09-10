const e={id:"RK-2026-013",title:"React Dev -> Data-First Architecture: Defining Types for a Calculator App",date:"2025-01-12",tags:["#react-calculator","#typescript","#data-first"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`


<article>
    <h2>Phase 2: The Blueprint (Data-First Architecture)</h2>
    <p>We are adopting a <strong>Data-First</strong> approach. Before we draw a single button, we must define exactly what a "Calculator" is. This prevents logic errors later (like trying to divide by a letter).</p>

    <section>
        <h3>Step 1: Create the Definition File</h3>
        <p><strong>File:</strong> <code>src/types/index.ts</code></p>
        <p>Create this file and paste the following code. This acts as the "Constitution" for your application.</p>

        <pre><code>// src/types/index.ts

/* 1. The Valid Operators */
export type Operator = '+' | '-' | '*' | '/' | null;

/* 2. The Calculator's Memory (State) */
export interface CalculatorState {
  currentValue: string;       
  previousValue: string | null; 
  operator: Operator;
}

/* 3. Button Styles (For UI later) */
export type ButtonVariant = 'default' | 'action' | 'featured' | 'danger';

/* 4. The Actions (What can the user DO?) */
export type CalculatorAction = 
  | { type: 'ADD_DIGIT'; payload: string }
  | { type: 'CHOOSE_OPERATION'; payload: Operator }
  | { type: 'CLEAR' }
  | { type: 'DELETE' }
  | { type: 'EQUALS' };</code></pre>
    </section>

    <hr />

    <section>
        <h3>Step 2: Learning the Concepts</h3>
        <p>Here is the breakdown of the TypeScript "Superpowers" we just used.</p>
        
        <dl>
            <dt><strong>1. Union Types (The Club Bouncer)</strong></dt>
            <dd>
                <p>Look at the <code>Operator</code> type: <code>'+' | '-' | '*' | ...</code></p>
                <p><strong>The Concept:</strong> Instead of allowing <em>any</em> text (string), we list the specific allowed values separated by a pipe <code>|</code>.</p>
                <p><strong>Why use it?</strong> It acts like a Bouncer. If you accidentally type <code>operator = 'x'</code> (instead of <code>*</code>) in your code later, TypeScript will stop you immediately because 'x' is not on the list.</p>
            </dd>

            <dt><strong>2. Why String for Numbers?</strong></dt>
            <dd>
                <p><code>currentValue: string;</code></p>
                <p><strong>The Question:</strong> "It's a calculator. Why aren't we using <code>number</code>?"</p>
                <p><strong>The Answer:</strong> Precision and UX.
                    <ul>
                        <li>If a user types <code>0.</code>, a number variable converts it to <code>0</code> immediately. The decimal disappears!</li>
                        <li>If a user types <code>1.00</code>, a number variable makes it <code>1</code>.</li>
                    </ul>
                By using a <strong>String</strong>, we preserve exactly what the user typed. We only convert it to a number when we do the actual math.</p>
            </dd>

            <dt><strong>3. Discriminated Unions (The "Action Menu")</strong></dt>
            <dd>
                <p>Look at <code>CalculatorAction</code>. It is a list of objects.</p>
                <p><strong>The Concept:</strong> This is a pro-level pattern. We connect the <code>type</code> of action to the <code>payload</code> (data) it needs.</p>
                <ul>
                    <li><strong>Smart Context:</strong> If the action is <code>CLEAR</code>, TypeScript knows we <strong>don't</strong> need a number.</li>
                    <li><strong>Strict Rules:</strong> If the action is <code>ADD_DIGIT</code>, TypeScript ensures we <strong>must</strong> provide the digit.</li>
                </ul>
            </dd>
        </dl>
    </section>
</article>

<article>
    <h2>Phase 3: The Bricks (Building UI Components)</h2>
    <p>Now that we have our "Constitution" (Types), we can build the visual blocks. We start with the <strong>CalculatorButton</strong>. This is a "Dumb Component"—it doesn't calculate anything; it just looks good and reports when it is clicked.</p>

    <section>
        <h3>The Component Interview</h3>
        <p>Before coding, we ask the component three questions to determine its structure:</p>
        <ul>
            <li><strong>The Data Question:</strong> "What do you need to know?" -> <em>A label and a style.</em></li>
            <li><strong>The Action Question:</strong> "What happens when touched?" -> <em>I tell the parent I was clicked.</em></li>
            <li><strong>The Safety Question:</strong> "How do I prevent ugly buttons?" -> <em>I restrict styles to my 'ButtonVariant' type.</em></li>
        </ul>
    </section>

    <hr />

    <section>
        <h3>Step 1: The Contract (Props)</h3>
        <p><strong>File:</strong> <code>src/components/CalculatorButton.tsx</code></p>
        <p>First, we import our specific types and define the "Rules of Engagement" (Interface). This tells other developers exactly what data they must provide to use this button.</p>

        <pre><code>import type { ButtonVariant } from "@/types";

interface CalculatorButtonProps {
  label: string;           // The text to show (e.g., "7" or "+")
  onClick: () => void;     // A function that returns nothing (void)
  variant?: ButtonVariant; // Optional (?): Defaults to 'default' if missing
  className?: string;      // Optional: For extra layout tweaks (like width)
}</code></pre>
    </section>

    <section>
        <h3>Step 2: The Styling Logic (The Variant Map)</h3>
        <p>Instead of writing messy <code>if/else</code> statements inside the HTML, we create a clear <strong>Lookup Table</strong> (Dictionary). This maps our "Human Names" (like 'danger') to "Computer CSS" (like 'bg-red-500').</p>

        <pre><code>// Record&lt;Key, Value&gt; ensures we cover EVERY variant defined in our types.
const VARIANT_STYLES: Record&lt;ButtonVariant, string&gt; = {
  default: "bg-gray-200 hover:bg-gray-300 text-gray-800 active:bg-gray-900",
  action: "bg-orange-500 text-gray-100 hover:bg-orange-600 active:bg-orange-700",
  featured: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
  danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
};</code></pre>

        <dl>
            <dt><strong>Why use <code>Record</code>?</strong></dt>
            <dd>It is a safety feature. If you added a new button type (e.g., 'primary') to your <code>types/index.ts</code> file but forgot to give it colors here, TypeScript would show an error immediately.</dd>
        </dl>
    </section>

    <section>
        <h3>Step 3: The Assembly (The HTML)</h3>
        <p>Finally, we export the React Component. It combines the data (props) with the styles (variant map) to render the final button.</p>

        <pre><code>export const CalculatorButton = ({
  label,
  onClick,
  variant = "default", // Default value if none is provided
  className = "",
}: CalculatorButtonProps) => {
  return (
    &lt;button
      onClick={onClick}
      // We combine 3 layers of CSS here:
      // 1. Base styles (shape, font size, animation)
      // 2. Variant styles (colors from our map)
      // 3. Custom classNames (layout overrides)
      className={\`h-16 rounded-xl text-2xl transition-all shadow-sm active:scale-95 
                  \${VARIANT_STYLES[variant]} 
                  \${className}\`}
    &gt;
      {label}
    &lt;/button&gt;
  );
};</code></pre>

        <dl>
            <dt><strong>The "active:scale-95" Trick</strong></dt>
            <dd>This is a Tailwind utility that shrinks the button slightly when pressed. It gives the user a tactile "click" feeling, making the app feel responsive like a native mobile app.</dd>
        </dl>
    </section>
</article>

<article>
    <h2>Phase 4: The Brain (State Management)</h2>

    <section>
        <h3>1. What is <code>useState</code>? (The "Memory" Hook)</h3>
        <p>To understand <code>useState</code>, you have to understand how React components work.</p>
        
        <dl>
            <dt><strong>The Problem: React Components have "Amnesia"</strong></dt>
            <dd>
                A React component is just a function. Every time something changes on the screen, the function runs again from top to bottom.
                <br><em>Scenario:</em> You have a variable <code>let score = 0</code>.
                <ul>
                    <li>You click "Add Point". The code does <code>score = 1</code>.</li>
                    <li>React sees a change and re-runs the function to update the screen.</li>
                    <li>The function runs: <code>let score = 0</code>. <strong>It resets!</strong></li>
                </ul>
                Your normal variables die every time the screen updates.
            </dd>

            <dt><strong>The Solution: <code>useState</code></strong></dt>
            <dd>
                
                <code>useState</code> is a way to ask React: "Hey, can you hold onto this value for me somewhere safe? Don't let it be deleted when the function re-runs."
            </dd>

            <dt><strong>How to Read It:</strong></dt>
            <dd>
                <pre><code>const [value, setValue] = useState(0);</code></pre>
                It returns an array with exactly two things:
                <ol>
                    <li><strong>The Variable (<code>value</code>):</strong> The current data right now (e.g., 0).</li>
                    <li><strong>The Setter (<code>setValue</code>):</strong> A special function (trigger). You <em>cannot</em> do <code>value = 5</code>. You must call <code>setValue(5)</code>. This tells React: "Update the data AND refresh the screen."</li>
                </ol>
            </dd>
        </dl>
    </section>

    <hr />

    <section>
        <h3>2. Why the <code>hooks</code> folder?</h3>
        <p>We are putting our logic in <code>src/hooks/useCalculator.ts</code> instead of <code>App.tsx</code> or <code>components/</code>. Why?</p>
        
        <dl>
            <dt><strong>The "Head vs. Face" Analogy</strong></dt>
            <dd>
                <ul>
                    <li><strong>Components (The Face):</strong> They handle the visuals. They smile, they blink, they show numbers. They don't do math.</li>
                    <li><strong>Hooks (The Head):</strong> They handle the thinking. They calculate <code>5 + 5</code>. They don't have a face (they render no HTML).</li>
                </ul>
            </dd>

            <dt><strong>The Litmus Test (Revisited)</strong></dt>
            <dd>
                Does this file use React features (like <code>useState</code>) but return <strong>Data</strong> instead of <strong>HTML</strong>?
                <br><strong>✅ Yes:</strong> It belongs in <code>hooks</code>.
            </dd>
        </dl>
    </section>

    <hr />

    <section>
        <h3>3. Step 1: Setting up the Brain</h3>
        <p><strong>File:</strong> <code>src/hooks/useCalculator.ts</code></p>
        <p><strong>Developer Thought:</strong> "I need to initialize the memory. When the user first opens the app, the screen should say '0', there is no previous number, and no operator is selected."</p>

        <pre><code>import { useState } from 'react';
import type { CalculatorState, CalculatorAction, Operator } from '../types';

export const useCalculator = () => {
  // 1. Initialize the Memory (State)
  // We use the shape we defined in our 'types' folder
  const [state, setState] = useState&lt;CalculatorState&gt;({
    currentValue: "0",        // Screen starts at 0
    previousValue: null,      // No previous number yet
    operator: null            // No math symbol chosen yet
  });

  // Test function to see if it works (we will expand this later)
  const dispatch = (action: CalculatorAction) => {
    console.log("User performed action:", action);
  };

  // We return the state so the UI can read it
  // We return the dispatch function so the UI can click buttons
  return {
    state,
    dispatch
  };
};</code></pre>
    </section>
</article>

  `};export{e as default};
