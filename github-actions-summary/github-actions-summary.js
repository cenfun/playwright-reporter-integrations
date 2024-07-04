import fs from 'fs';
import path from 'path';
import EC from 'eight-colors';
import { summary } from '@actions/core';

export default (reportData, helper) => {

    const summaryDir = path.resolve(import.meta.dirname, '../.temp');
    if (!fs.existsSync(summaryDir)) {
        fs.mkdirSync(summaryDir, {
            recursive: true
        });
    }

    const summaryFile = path.resolve(summaryDir, 'summary.html');
    fs.writeFileSync(summaryFile, '');
    process.env.GITHUB_STEP_SUMMARY = summaryFile;

    summary.addHeading(reportData.name, '2');
    summary.addRaw(`> ${reportData.dateH} (${reportData.durationH})`);
    summary.addEOL();

    const rows = [];
    ['tests', 'passed', 'flaky', 'skipped', 'failed'].forEach((k) => {
        const item = reportData.summary[k];
        const percent = item.percent ? ` (${item.percent})` : '';
        rows.push([{
            data: item.name
        }, {
            data: item.value
        }, {
            data: percent
        }]);
    });
    summary.addTable(rows);

    if (reportData.summary.passed.value === reportData.summary.tests.value) {
        summary.addRaw('✔ Congratulations! All tests passed.');
    } else if (reportData.summary.failed.value > 0) {
        // @owners of all failed cases
        const owners = [];
        helper.forEach((item) => {
            if (item.type === 'case' && item.caseType === 'failed' && item.owner) {
                owners.push(`@${item.owner}`);
            }
        });
        if (owners.length) {
            summary.addRaw(`Hey ${owners.join(' ')}, please fix the failed cases and run test again.`);
        }
    }

    summary.write({
        overwrite: true
    });

    EC.logGreen('[github-actions-summary] completed');

};
