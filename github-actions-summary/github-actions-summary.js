import fs from 'fs';
import path from 'path';
import EC from 'eight-colors';

export default (reportData, helper) => {

    const summaryDir = path.resolve(import.meta.dirname, '../.temp');
    if (!fs.existsSync(summaryDir)) {
        fs.mkdirSync(summaryDir, {
            recursive: true
        });
    }

    const summaryFile = path.resolve(summaryDir, 'test-summary.md');
    process.env.GITHUB_STEP_SUMMARY = summaryFile;
    process.env.GITHUB_ACTIONS = 'true';

    const {
        name, dateH, durationH, summary
    } = reportData;

    const lines = [`## ${name}`, `> ${dateH} (${durationH})`];

    ['tests', 'passed', 'flaky', 'skipped', 'failed'].forEach((k) => {
        const item = summary[k];
        const percent = item.percent ? ` (${item.percent})` : '';
        lines.push(`- **${item.name}** ${item.value} ${percent}`);
    });

    lines.push('\n  ');

    if (summary.passed.value === summary.tests.value) {
        lines.push('✔ Congratulations! All tests passed.');
    } else if (summary.failed.value > 0) {
        // @owners of all failed cases
        const owners = [];
        helper.forEach((item) => {
            if (item.type === 'case' && item.caseType === 'failed' && item.owner) {
                owners.push(`@${item.owner}`);
            }
        });
        if (owners.length) {
            lines.push(`Hey ${owners.join(' ')}, please fix the failed cases and run test again.`);
        }
    }

    fs.writeFileSync(summaryFile, lines.join('\n'));

    EC.logGreen('[github-actions-summary] completed');

};
