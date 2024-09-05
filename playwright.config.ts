import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    fullyParallel: true,

    // Specify the number of workers (optional, defaults to available CPU cores)
    workers: process.env.CI ? 1 : undefined,
    retries: process.env.CI ? 2 : 1,

    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
    },
    
    projects: [
        {
          name: 'chromium',
          use: { browserName: 'chromium' },
          grepInvert: /@mobile/, // Exclude tests with @mobile
        },
        {
          name: 'firefox',
          use: { browserName: 'firefox' },
          grepInvert: /@desktop/, // Exclude tests with @desktop
        },
      ],
};

export default config;