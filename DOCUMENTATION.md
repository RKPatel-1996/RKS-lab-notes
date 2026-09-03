# RK's Digital Lab Notebook - UI/UX Documentation

This document outlines the design system, responsive behavior, themes, and feature sets across the application. The app is built with React, Tailwind CSS, and Lucide React, featuring a distinct "retro scientific" aesthetic that shifts between a physical paper lab notebook and a vintage CRT terminal.

---

## 1. Themes & Color Palette

The application uses a custom dual-theme system, driven by Tailwind's `dark` class applied to the HTML root element.

### Light Mode: "Standard Paper"
Designed to mimic a physical lab notebook or printed manuscript.
*   **Background (`bg-paper`)**: `#f8f9fa` (Off-white / pale gray)
*   **Primary Text (`text-ink`)**: `#212529` (Soft black, easier on the eyes than pure black)
*   **Secondary Text (`text-pencil`)**: `#495057` (Dark gray for metadata and borders)
*   **Accents**:
    *   `accent-blue`: `#3b82f6`
    *   `accent-red`: `#ef4444`
    *   `accent-yellow`: `#eab308`
*   **Styling**: Sharp, solid black borders (`border-black`), flat shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`), and a generally brutalist/monochrome aesthetic.

### Dark Mode: "CRT Fluorescence"
Designed to mimic a vintage monochrome phosphor computer monitor.
*   **Background (`bg-crt-black`)**: `#001100` (Deep, very dark green/black)
*   **Primary Text (`text-crt-green`)**: `#00ff00` (Bright phosphor green)
*   **Secondary Text/Borders (`text-crt-dim`)**: `#005500` (Dimmed green for less prominent elements)
*   **Styling**: Green glowing effects (`shadow-[0_0_5px_rgba(0,255,0,0.5)]`), custom scrollbars, and high-contrast text. Images and figures often retain a grayscale/dimmed appearance to match the retro vibe.

### Typography
*   **Monospace (`font-mono`)**: 'Space Mono', 'Fira Code' - Used heavily for data, UI elements, tags, code, and CRT styling.
*   **Serif (`font-serif`)**: 'Lora' - Used for reading dense article bodies (manuscript mode).
*   **Sans-Serif (`font-sans`)**: System defaults - Used sparingly for general UI text where needed.

---

## 2. Responsive Layout Architecture

The application layout (`AppShell.tsx`) adapts smoothly from mobile devices to ultrawide desktop monitors using Tailwind breakpoints.

### Desktop & Large Tablet (Screens ≥ 1024px, `lg:`)
*   **Layout**: Two-column fixed layout.
*   **Sidebar (`SidebarDesktop.tsx`)**: Fixed on the left side (`w-64`, 256px wide). Stays persistently visible.
*   **Main Content**: Occupies the remaining width (`w-[calc(100%-16rem)]`), placed on the right. Content within this area is usually constrained to a comfortable reading width (e.g., `max-w-4xl`).

### Mobile & Small Tablet (Screens < 1024px)
*   **Layout**: Single-column vertical stack.
*   **Top Navbar (`AppShell.tsx` header)**: A sticky header appears at the top containing the site title, theme toggle, and a "Hamburger" menu icon.
*   **Sidebar (`SidebarMobile.tsx`)**: Functions as a hidden off-canvas drawer/sheet. Tapping the hamburger menu slides it in from the left with a semi-transparent backdrop overlay. Tapping the backdrop or an "X" closes it.
*   **Main Content**: Occupies full width (`w-full`), padding is slightly reduced to maximize screen real estate.

---

## 3. Global Navigation & Controls

### Sidebar (Desktop & Mobile Drawer)
*   **Features**: Displays the site logo/title, primary navigation links (Index, Media Logs, About Me), and the Theme Toggle button.
*   **Visuals**:
    *   *Light Mode*: Bordered on the right (`border-r-2 border-black`), white/paper background. Active links get a solid black background with inverted white text.
    *   *Dark Mode*: Bordered on the right (`border-r-2 border-crt-dim`), CRT black background. Active links get a bright green background with black text.
*   **Interactions**: Hover states provide immediate visual feedback (e.g., underlining or background color shifts).

### Search Button & Input (`Search` functionality)
*   **Locations**: Present on the Home page (Index) and Media Logs page.
*   **Design**: A sleek, minimal input field featuring a search icon (`lucide-react`).
*   **Mobile**: Spans the full width of the container.
*   **Desktop/Tablet**: Constrained to a readable width, often aligned left or spanning the column.
*   **Styling**:
    *   *Light Mode*: Solid black bottom border, sharp focus ring.
    *   *Dark Mode*: Green bottom border, glowing green focus ring.
*   **Functionality**: Real-time filtering. In the Media Logs, it performs a "deep search" (matching titles, tags, and internal commentary text).

---

## 4. Page & Panel Breakdowns

### Home Page (Index / Article Archive)
*   **Purpose**: The primary landing page, listing all available lab notes/articles.
*   **Features**:
    *   **Search Bar**: Real-time filtering of the article list by title or tags.
    *   **Article List**: Displayed as a vertical stack of rows (`ArticleRow.tsx`).
*   **Responsive**:
    *   *Mobile*: Dates and tags might wrap; rows are compact.
    *   *Desktop*: Dates align to the right, titles to the left, tags inline.
*   **Visuals**: Hovering over an article row creates a subtle highlight effect (background shift or border accent).

### Article Panel (Manuscript View - `ArticleView.tsx`)
*   **Purpose**: Distraction-free, highly readable environment for scientific notes.
*   **Features**:
    *   **Table of Contents (ToC)**: Sticky on desktop (right side), inline or hidden on mobile. Extracts `<h2>` and `<h3>` tags automatically.
    *   **Author Badge**: Displays author metadata (ORCID link, name, date).
    *   **Scientific Components**: Custom rendering for math (`ScientificMath.tsx` via KaTeX), citations (`CitationMarker.tsx`), and figures (`ScientificFigure.tsx`).
    *   **Reference List**: Automatically generated bibliography at the bottom.
*   **Responsive**:
    *   *Mobile*: Text size is slightly smaller (`prose-sm`), ToC is pushed to the top or bottom, figures span 100% width.
    *   *Desktop*: Text size is standard (`prose-base` or `prose-lg`), ToC floats in the margin, figures can have specific widths and float.
*   **Print Styles**: Dedicated `@media print` CSS strips away navigation, dark mode, and UI elements, formatting the article perfectly for A4 paper printing.

### Media Logs (Video Panel)
*   **Purpose**: A categorized library of video content with notes.
*   **Features**:
    *   **Tag Filtering**: Clickable pills to filter by category (e.g., 'TUTORIAL', 'LECTURE').
    *   **Deep Search**: Filters by video title, channel, and the author's detailed commentary.
    *   **Video Cards**: Displays thumbnail (or iframe placeholder), title, channel, and expandable notes.
*   **Responsive**:
    *   *Mobile*: Single column grid (`grid-cols-1`). Tags horizontally scrollable.
    *   *Tablet/Desktop*: Two-column grid (`md:grid-cols-2`) for better use of space.

### Personal Profile (About Me)
*   **Purpose**: Author biography, contact info, and publication history.
*   **Features**:
    *   **Profile Header**: Image, name, short bio, and quick links (Email, GitHub, ORCID).
    *   **ORCID Integration**: Uses a custom hook (`useOrcid.ts`) to fetch and display real-time publication data directly from the ORCID public API.
    *   **Skills/Tools Section**: A grid or list of proficiencies.
*   **Responsive**:
    *   *Mobile*: Profile image is centered above the text. Content stacks vertically.
    *   *Desktop*: Profile image is floated or placed side-by-side with the biographical text. Publication lists use wider horizontal space for titles and journal names.
*   **Visuals**: Uses standard paper/CRT styling, with Lucide icons providing visual anchors for contact links and sections.
