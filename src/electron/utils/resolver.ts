import { app } from "electron";
import { isDev } from "./environment.js";
import path from "path";

const getAssetsPath = (): string => path.join(app.getAppPath(), isDev() ? `.` : `..`, `/src/assets`);
const getPreloadPath = (): string => path.join(app.getAppPath(), isDev() ? `.` : `..`, `/dist/electron/preload.cjs`);
const getUIPath = (): string => path.join(app.getAppPath(), isDev() ? `.` : `..`, `/dist/react/index.html`);

export { getAssetsPath, getPreloadPath, getUIPath };