import teamsWebhook from './teams-webhook.js';

export default {
    testDir: './',
    outputDir: '../../.temp/teams-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'teams-webhook',
            outputFile: '.temp/teams-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // teams integration with webhook
                await teamsWebhook(reportData, helper);


            }
        }]
    ]
};
