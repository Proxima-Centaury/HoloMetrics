import { BrowserWindow, Menu, Tray } from "electron";
import { getAssetsPath } from "../resolver.js";
import { getContextMenu } from "./menu.js";
import path from "path";

const createTray = (MainWindow: BrowserWindow) => {
    const tray: Tray = new Tray(path.join(getAssetsPath(), `icons/icon@32x.png`));
    tray.setContextMenu(Menu.buildFromTemplate(getContextMenu(MainWindow)));
};

export { createTray };