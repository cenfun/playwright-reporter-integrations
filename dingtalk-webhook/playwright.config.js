import dingtalkWebhook from './dingtalk-webhook.js';

export default {
    testDir: './',
    outputDir: '../.temp/dingtalk-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'dingtalk-webhook',
            outputFile: '.temp/dingtalk-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // dingtalk integration with webhook
                await dingtalkWebhook(reportData, helper);


            }
        }]
    ]
};
