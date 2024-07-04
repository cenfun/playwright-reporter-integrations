import { test, expect } from '@playwright/test';

test('passed test', () => {

});

/**
 * @owner Mark
 */
test('failed test', () => {
    expect(false).toBe(true);
});
