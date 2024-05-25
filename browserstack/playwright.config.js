import { devices } from '@playwright/test';
import browserstack from './browserstack.js';

export default {
    testDir: './',
    outputDir: '../.temp/browserstack',

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
            name: 'browserstack',
            outputFile: '.temp/browserstack/index.html',
            onEnd: async (reportData, helper) => {

                await browserstack(reportData, helper);

            }
        }]
    ]
};
