const { _electron: electron } = require('playwright');
const path = require('path');

(async function() {
    const electronApp = await electron.launch({ args: ['main.js'] });

    const page = await electronApp.firstWindow();

    page.on('console', (message) => {
      console.log(message);
    });

    return electronApp;
  })()
