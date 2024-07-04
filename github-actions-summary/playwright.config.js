import { devices } from '@playwright/test';
import GAS from './github-actions-summary.js';

export default {
    testDir: './',
    outputDir: '../.temp/github-actions-summary',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    projects: [{
        name: 'chromium',
        use: devices['Desktop Chrome']
    }],

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'github-actions-summary',
            outputFile: '.temp/github-actions-summary/index.html',
            onEnd: async (reportData, helper) => {

                await GAS(reportData, helper);

            }
        }]
    ]
};
