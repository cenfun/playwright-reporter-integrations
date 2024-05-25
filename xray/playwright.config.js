import xray from './xray.js';

export default {
    testDir: './',
    outputDir: '../.temp/xray',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'xray',
            outputFile: '.temp/xray/index.html',
            onEnd: async (reportData, helper) => {

                // jira + xray integration
                await xray(reportData, helper);


            }
        }]
    ]
};
