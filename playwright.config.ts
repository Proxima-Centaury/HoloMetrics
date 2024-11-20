import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    forbidOnly: !!process.env.CI,
    fullyParallel: true,
    projects: [ { name: `chromium`, use: { ...devices[`Desktop Chrome`] } } ],
    reporter: `html`,
    retries: process.env.CI ? 2 : 0,
    testDir: `./tests/E2E`,
    use: { trace: `on-first-retry` },
    webServer: {
        command: `npm run start:react-dev`,
        reuseExistingServer: !process.env.CI,
        url: `http://localhost:3000`
    },
    workers: process.env.CI ? 1 : undefined,
});