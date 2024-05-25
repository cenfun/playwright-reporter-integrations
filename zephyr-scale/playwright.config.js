import zephyrScale from './zephyr-scale.js';

export default {
    testDir: './',
    outputDir: '../.temp/zephyr-scale',

    metadata: {
        env: 'STG',
        type: 'Regression',
        url: 'https://www.npmjs.org/package/monocart-reporter'
    },

    reporter: [
        ['list'],
        ['monocart-reporter', {
            name: 'zephyr-scale',
            outputFile: '.tempzephyr-scale/index.html',
            onEnd: async (reportData, helper) => {

                // jira + zephyr scale integration
                await zephyrScale(reportData, helper);

            }
        }]
    ]
};
