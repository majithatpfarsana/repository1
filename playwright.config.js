const { expect, chromium } = require("@playwright/test");
const { defineConfig, devices } = require('@playwright/test');
import dotenv from 'dotenv';
dotenv.config();
const config=({
    testdir:'./test',
    timeout:40*1000,
    expect:{
        timeout:6000,
    },
    //reporter:'html',
    use:{
        browserName:'chromium',
        headless:false,
        launchOptions: {
           slowMo: 1000  // Delays each action by 1 second (1000ms)
  
    },
        // video:'retain-on-failure',
        // screenshot: 'only-on-failure',
        // trace:'on'
    },
    /*projects: [
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
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
   ],
   reporter: [
    ['list'],
    ['html'],
    ['junit', { outputFile: 'results.xml' }],
    ['json', { outputFile: 'results.json' }],
    ['allure-playwright', { resultsDir: 'my-allure-results' }]
  ],*/

})
module.exports=config;