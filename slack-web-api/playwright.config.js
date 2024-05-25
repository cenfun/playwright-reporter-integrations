import slackWebApi from './slack-web-api.js';

export default {
    testDir: './',
    outputDir: '../.temp/slack-web-api',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'slack-web-api',
            outputFile: '.temp/slack-web-api/index.html',
            onEnd: async (reportData, helper) => {

                // slack integration with web api
                await slackWebApi(reportData, helper);


            }
        }]
    ]
};
