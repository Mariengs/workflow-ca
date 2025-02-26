# Project Workflow

## Overview

This project involves setting up various development tools, testing tools, and creating tests for specific functionality in the application. The goal is to implement ESLint and Prettier for code formatting and linting, Vitest for unit testing, and Playwright for end-to-end testing.

## Getting Started

Follow the instructions below to get the project up and running locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git (for version control)

### Installation

1. **Fork the Repository**  
   Start by forking the repository to your own GitHub account.

2. **Clone the Repository**  
   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/project-repo.git
   cd project-repo
   ```

3. # Install Dependencies

Install the necessary dependencies using npm:

```bash
 npm install
```

4. # Set Up Environment Variables

Create a .env file in the root of the project with the necessary environment variables:

```ini
USERNAME=<your-username>
PASSWORD=<your-password>
```

Add .env to your .gitignore to ensure it is not committed:

```ini
USERNAME=<your-username>
PASSWORD=<your-password>
```

## Scripts

- Run Tests
  To run unit tests with Vitest:

```bash
npm run test:unit
```

To run Playwright end-to-end tests:

```bash
npm run test:e2e

```

- Lint and Format Code
  To lint and format your JavaScript and HTML files:

```bash
npm run lint:js
npm run format:html

```

## Environment Variables

Ensure the following environment variables are set in your .env file:

- USERNAME: Your username for login testing.
- PASSWORD: Your password for login testing.
  These variables are used in the tests for login functionality and other related tasks.

## Tools and Technologies

- ESLint: A tool for identifying and reporting on patterns found in JavaScript code, helping to make the code more consistent and avoid bugs.
- Prettier: An opinionated code formatter that helps keep the codebase clean and consistent.
- Vitest: A testing framework used for unit testing.
- Playwright: A tool for end-to-end testing, useful for testing user interactions in the app.

## Testing

Unit Tests
The unit tests are configured with Vitest and test the following functionality:

- isActivePath function:

1. Returns true when the current path matches the href exactly.
2. Returns true for the root path ("/") when the path is "/" or "/index.html".
3. Returns true when the current path includes the href.
4. Returns false when the paths don't match.
   getUserName function:

Tests that it returns the name from the user object in storage (first save a user object to storage).
Tests that it returns null when no user exists in storage.

##End-to-End Tests
The Playwright tests include the following:

1. Login Test:

- User can successfully log in with valid credentials from environment variables.
- User sees an error message with invalid credentials.

2. Navigation Test:

- Navigates to the home page.
- Waits for the venue list to load.
- Clicks the first venue.
- Verifies that when the venue details page loads, the words “Venue details” are present in the heading.

# Contributing

1. Create a New Branch
   Create a new branch named workflow from the main branch to keep your changes isolated:

```bash
git checkout -b workflow
```

2. Work on the Feature or Fix
   Make the necessary changes in the workflow branch.

3. Commit and Push Changes
   Commit your changes and push them to your fork:

   ```bash
   git commit -m "Add feature or fix"
   git push origin workflow
   ```

   4. Open a Pull Request
      Once your changes are pushed, open a Pull Request (PR) from the workflow branch into the main branch.

Do not merge the PR. Instead, request a review from peers and incorporate feedback as necessary.
