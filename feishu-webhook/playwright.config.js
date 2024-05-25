import feishuWebhook from './feishu-webhook.js';

export default {
    testDir: './',
    outputDir: '../.temp/feishu-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'feishu-webhook',
            outputFile: '.temp/feishu-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // feishu integration with webhook
                await feishuWebhook(reportData, helper);


            }
        }]
    ]
};
