import slackWebhook from './slack-webhook.js';

export default {
    testDir: './',
    outputDir: '../.temp/slack-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'slack-webhook',
            outputFile: '.temp/slack-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // slack integration with webhook
                await slackWebhook(reportData, helper);


            }
        }]
    ]
};
