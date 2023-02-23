# SAG React Web App

SAG React Web App | Frontend Respository

## Setup Instructions

Ensure that npm is installed. Can check using this command:

```
npm version
```

Above command will show the current versions of libraries installed.\
Ensure that:

- `npm` version is `8.*.*` or greater
- `node` version is `16.*.*` or greater
  If not, please update `npm` and `node`.

### Steps for further setup

1. Install dependencies.
   ```
   npm i
   ```
2. Install husky `pre-commit` and `pre-push` hooks.
   ```
   npx husky install
   ```
3. Run the app.
   ```
   npm run start
   ```

### Add main repository as `upstream`

```
git remote add upstream https://github.com/SAG-Web-Devs/sag-react-fe.git
```

### Raising a Pull Request
To push any changes regarding a task assigned in JIRA follow the following steps:

Create a branch from development branch in the following format:\
`JIRA-ID-task-description` (eg. `SWA-47-fix-lint-check-github-actions-not-working`)

The PR title should also contain JIRA task id in the following format:
`[JIRA-ID]` (eg. `[SWA-47]`)

Please ensure you commits contain meaningful messages.
