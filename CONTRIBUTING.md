# Contributing to ImageVerse 

Thank you for your interest in contributing to ImageVerse! We welcome contributions from the community to help improve and enhance the project. Please take a moment to read through the following guidelines to get started.

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing Guidelines](#contributing-guidelines)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)

## Getting Started

Before you start contributing to the project, make sure you have:

- A GitHub account.
- Git installed on your local machine.
- Node.js and npm (Node Package Manager) installed on your local machine.

## Contributing Guidelines

We follow these guidelines for contributing:

1. Fork the frontend repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/review-app.git
   ```
   
3. Navigate to the project directory:

   ```bash
   cd image-verse
   ```
   
4. Create a new branch for your contribution:

   ```bash
   git checkout -b feature-name
   ```
   
5. Make your changes and ensure your code follows our coding standards and practices.

6. Test your changes locally to ensure they work as expected.

7. Commit your changes with clear and concise commit messages:

   ```bash
   git commit -m "Add feature: your feature description"
   ```
   
8. Push your changes to your GitHub fork:

   ```bash
   git push origin feature-name
   ```
   
9. Create a pull request (PR) to the main repository's `main` branch.

## Setting Up the Development Environment

We follow these guidelines for contributing:

1. Fork the repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/image-verse.git
   ```
   
3. Build the application by running the following command:

   ```bash
   ng build
   ```
   
   This will generate a `dist` folder containing the built application files

4. Open Google Chrome and go to `chrome://extensions` in the address bar.

5. Enable the "Developer mode" toggle in the top right corner of the Extensions page.

6. Click on the "Load unpacked" button.

7. Navigate to the `dist` folder of the ImageVerse application and select it.

8. The ImageVerse extension will now be loaded into Chrome.

*Note: Remember to rebuild and reload the extension whenever you make changes to the code by repeating steps 3-8. Don't forget to get HuggingFace api_key*


## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request (PR) following our guidelines. Be sure to provide a clear description of your changes in the PR, and one of our maintainers will review it.

We appreciate your contributions and look forward to collaborating with you!
