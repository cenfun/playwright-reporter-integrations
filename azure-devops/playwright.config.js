import azureDevops from './azure-devops.js';

export default {
    testDir: './',
    outputDir: '../.temp/azure-devops',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'azure-devops',
            outputFile: '.temp/azure-devops/index.html',
            onEnd: async (reportData, helper) => {

                await azureDevops(reportData, helper);

            }
        }]
    ]
};
