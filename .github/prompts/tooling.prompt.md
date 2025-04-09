# Tooling Guidelines

## Working with AI Agents

To effectively collaborate with AI agents in this project, follow these guidelines:

1. **Use the Provided Prompts**:

   - Refer to this prompt for setting up tools like TailwindCSS and React.
   - Refer to the `technical.prompt.md` for coding practices, file organization, and project structure.

2. **Include prompt files to your AI chat agent**:

   - For Github Copilot + VSCode, these prompts will be available as an option when you open up the command palette and type `use prompt`.

3. **Iterate**:

   - Review the AI's output and provide feedback to refine the results.
   - Use follow-up questions to clarify or expand on the AI's suggestions.

4. **Leverage the Prompts**:

   - Use the prompts as a checklist to ensure consistency and adherence to project standards.

5. **Test and Validate**:

   - Always test the AI's code suggestions in your local environment.
   - Validate that the changes align with the project's requirements and guidelines.

## Setting Up TailwindCSS in Astro

To set up TailwindCSS in an Astro project, follow these steps:

1. **Run the Astro CLI Command**:

   Use the following command and follow the prompts to automatically install and configure TailwindCSS:

   ```sh
   npx astro add tailwindcss
   ```

2. **Verify Configuration**:

   - Check that `src/styles/global.css` contains the necessary TailwindCSS declarations:

     ```css
     @import "tailwindcss";
     ```

   - Check that `astro.config.mjs` contains the definition for Tailwind in Vite plugins (`vite.plugins`):

     ```javascript
     // ...
     vite: {
       plugins: [tailwindcss()],
     },
     ```

3. **Update Astro Configuration**:

   - Confirm that `astro.config.mjs` does not include unnecessary integrations like `@astrojs/tailwind` if TailwindCSS is configured manually.

4. **Import Global Styles**:

   - Ensure that `src/styles/global.css` is imported in the main layout or entry point of the project.

## Setting Up React in Astro

To set up React in an Astro project, follow these steps:

1. **Run the Astro CLI Command**:

   Use the following command to automatically install and configure React:

   ```bash
   npx astro add react
   ```

2. **Verify Configuration**:

   - Ensure that `astro.config.mjs` includes the React integration:

     ```javascript
     import react from "@astrojs/react";

     export default defineConfig({
       // ...
       integrations: [react()],
     });
     ```

3. **Test the Setup**:

   - Run the development server using `npm run dev` to verify that React is working as expected.

## Additional Notes

- Use this prompt to guide the setup of TailwindCSS or React in any Astro project.
- Ensure consistency by following the steps outlined above.
