import shell from 'shelljs';
import { runCommandWithBuilder } from '../utils/runCommandWithBuilder.js';

export const setupGit = (projectName, repositoryUrl) => {
  runCommandWithBuilder(() => {
    shell.exec('git init', { silent: true });
    shell.exec('git add .', { silent: true });
    shell.exec(`git commit -m "feat: setup project ${projectName}"`, {
      silent: true,
    });
    shell.exec('git branch -M main', { silent: true });

    if (repositoryUrl) {
      shell.exec(`git remote add origin ${repositoryUrl}`, { silent: true });
      shell.exec('git push -u origin main', { silent: true });
    }
  }, 'Initializing Git repository...');
};
