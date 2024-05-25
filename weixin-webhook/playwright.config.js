import weixinWebhook from './weixin-webhook.js';

export default {
    testDir: './',
    outputDir: '../.temp/weixin-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'weixin-webhook',
            outputFile: '.temp/weixin-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // weixin integration with webhook
                await weixinWebhook(reportData, helper);


            }
        }]
    ]
};
