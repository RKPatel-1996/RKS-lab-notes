<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17DZbdZTgGlE5ASKAMG8x70uAxJAEI54C

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Class-Site Creation Model (Template)

This repository serves as a generic, reusable template for new class sites.

To create a new class site:

1. Create or clone the new class-specific repository using the correct SSH alias.
2. Copy/export this canonical application source **WITHOUT** any old `.git` directory. **DO NOT copy another class site's `.git` directory.**
3. Update `site.config.json` with the new course label, repository name, and Git identity. **DO NOT change global Git author configuration.**
4. Run `npm ci` to install dependencies identically.
5. Run `npm run lint`.
6. Run `npm run build`.
7. Run `npm run cms` to manage content.
8. Verify CMS Project Safety in the PUBLISH tab before publishing.
