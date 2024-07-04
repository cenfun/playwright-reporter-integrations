import { test, expect } from '@playwright/test';

test('passed test', () => {

});

/**
 * @owner cenfun
 */
test('failed test', () => {
    expect(false).toBe(true);
});
