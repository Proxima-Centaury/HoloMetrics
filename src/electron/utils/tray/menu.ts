import { app, BrowserWindow } from "electron";

const getContextMenu = (window: BrowserWindow): any[] => {
    return [
        { click: () => window.show() ?? (app.dock) ? app.dock.show() : null, label: `Show` },
        { click: () => app.quit(), label: `Quit` },
    ];
};

export { getContextMenu };