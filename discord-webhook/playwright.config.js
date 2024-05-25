import discordWebhook from './discord-webhook.js';

export default {
    testDir: './',
    outputDir: '../.temp/discord-webhook',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'discord-webhook',
            outputFile: '.temp/discord-webhook/index.html',
            onEnd: async (reportData, helper) => {

                // discord integration with webhook
                await discordWebhook(reportData, helper);


            }
        }]
    ]
};
