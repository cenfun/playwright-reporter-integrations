import { devices } from '@playwright/test';
import testrail from './testrail.js';

export default {
    testDir: './',
    outputDir: '../.temp/testrail',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    projects: [
        {
            name: 'chromium',
            use: devices['Desktop Chrome']
        }
    ],

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'testrail',
            outputFile: '.temp/testrail/index.html',
            onEnd: async (reportData, helper) => {

                await testrail(reportData, helper);

            }
        }]
    ]
};
