import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

import path from 'path';
import fs from 'fs';

// Ensure output directories exist
const outputFolder = path.join(process.cwd(), 'playwright-report');
const testResults = path.join(process.cwd(), 'test-results');

// Create directories if they don't exist
[outputFolder, testResults].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

export default defineConfig ({
    testDir: './tests',
    use: {
        baseURL: 'http://localhost:1313',
        screenshot: 'on',
        trace: 'retain-on-failure',
        video: 'on',

    },
    // Run all tests in parallel.
    fullyParallel: true,
    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    reporter:
        process.env.CI ?
            [
                ['github'],
                ['html', { outputFolder }],
                ['list'],
                ['playwright-ctrf-json-reporter', {
                    outputFile: 'test-report.json',
                    screenshot: true
                }]
            ] :
            [
                ['html', { outputFolder }],
                ['list']
            ]
    ,
    outputDir: testResults,
    webServer: {
        command: 'hugo server  --disableFastRender --ignoreCache --buildDrafts --buildFuture --bind 0.0.0.0',
        url: 'http://localhost:1313',
        reuseExistingServer: true,
    },
    preserveOutput: 'always',

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        /* Test against mobile viewports. */
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ]
});
