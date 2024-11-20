import { _electron, expect, test } from "@playwright/test";

let ElectronApp: Awaited<ReturnType<typeof _electron.launch>>;
let MainWindow: Awaited<ReturnType<typeof ElectronApp.firstWindow>>;

const isPreloadScriptLoaded = async () => {
    return new Promise((resolve) => {
        const interval = setInterval(async () => {
            const electron = await MainWindow.evaluate(() => (window as Window & { electron?: any }).electron);
            if(electron) clearInterval(interval);
            if(electron) resolve(true);
        }, 100);
    });
};

test.beforeEach(async () => {
    if(!ElectronApp) ElectronApp = await _electron.launch({ args: [ `.` ], env: { NODE_ENV: `development` } });
    if(!MainWindow) MainWindow = await ElectronApp.firstWindow();
    await isPreloadScriptLoaded();
});

test.afterEach(async () => {
    if(ElectronApp) await ElectronApp.close();
});