import { app, BrowserWindow } from "electron";
import { checkResources } from "./utils/system/usage.js";
import { createTray } from "./utils/tray/creator.js";
import { getPreloadPath, getUIPath } from "./utils/resolver.js";
import { getStorageInfo } from "./utils/system/storage.js";
import { getSystemInfo } from "./utils/system/information.js";
import { handleCloseEvents } from "./utils/window/handler.js";
import { ipcMainHandle } from "./utils/ipc/handler.js";
import { isDev, isProd } from "./utils/environment.js";

const MainWindowOptions: Electron.BrowserWindowConstructorOptions = {
    // frame: false,
    // fullscreen: true,
    resizable: false,
    transparent: true,
    webPreferences: {
        preload: getPreloadPath()
    }
};

app.on(`ready`, () => {
    const MainWindow: BrowserWindow = new BrowserWindow(MainWindowOptions);
    if(isDev()) MainWindow.loadURL(`http://localhost:3000`);
    if(isProd()) MainWindow.loadFile(getUIPath());
    checkResources(MainWindow);
    createTray(MainWindow);
    ipcMainHandle(`getSystemInfo`, () => getSystemInfo());
    ipcMainHandle(`getStorageInfo`, (storage: string) => getStorageInfo(storage));
    handleCloseEvents(MainWindow);
});