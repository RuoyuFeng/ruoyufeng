# Deployment Guide

This guide is designed for beginners. You don't need complex configurations to deploy your website.

## Option 1: GitHub Pages

1.  **Build your project**
    
    First, ensure you have the correct Node.js version installed.
    *   **Download & Install**: Go to [https://nodejs.org/en/download](https://nodejs.org/en/download) and install Node.js manually.
    *   Better not to use the system's default Node.js as it might be outdated.

    Open your terminal in the project folder and run:
    
    ```bash
    npm install
    npm run build
    ```
    This will create a folder named `out` in your project directory. This folder contains your generated website.
    
2.  **Create a GitHub Repository**
    *   Log in to GitHub.
    *   Create a new **Public** repository.
    *   Name it `username.github.io` (replace `username` with your actual GitHub username).

3.  **Upload Files**
  
    *   Upload **all the files inside the `out` folder** to your new repository.
    *   You can do this by clicking "Upload files" on the GitHub repository page and dragging everything from the `out` folder.
    *   *Alternatively, if you know Git, you can push the contents of `out` to the repository.*
    
4.  **Add .nojekyll file**
  
    *   In your GitHub repository, click "Add file" -> "Create new file".
    *   Name the file `.nojekyll` (start with a dot, all lowercase).
    *   Leave the content empty and click "Commit changes".
    *   *This is important! It tells GitHub to allow folders starting with `_` (like `_next`).*
    
5.  **Configure Pages**
    *   Go to your repository **Settings**.
    *   Click on **Pages** in the left sidebar.
    *   Under **Build and deployment**, ensure "Deploy from a branch" is selected.
    *   Select your branch (usually `main`) and click **Save**.

6.  **Done!**
    Visit `https://username.github.io` to see your website.

---

## Option 2: Cloudflare Pages

1.  **Build your project**
    Run `npm run build` to generate the `out` folder.

2.  **Create Application**
    *   Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
    *   Go to **Workers & Pages** -> **Create Application**.
    *   Select the **Pages** tab.
    *   Click **Drag and drop your files**.

3.  **Upload**
    *   Enter a **Project name** (this will be your subdomain, e.g., `my-site`).
    *   Click **Create project**.
    *   Drag and drop your `out` folder (or a zip archive of it) into the upload area.
    *   Click **Deploy**.

4.  **Done!**
    You will see your site live at `https://<project-name>.pages.dev`.
