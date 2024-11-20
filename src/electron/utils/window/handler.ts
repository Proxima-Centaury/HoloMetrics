import { app, BrowserWindow } from "electron";

const handleCloseEvents = (MainWindow: BrowserWindow) => {
    let willClose = false;
    app.on(`before-quit`, () => willClose = true);
    MainWindow.on(`close`, (event) => onCloseEvent(event, MainWindow, willClose));
    MainWindow.on(`show`, () => willClose = false)
};

const onCloseEvent = (event: any, window: BrowserWindow, willClose: boolean) => {
    if(willClose) return;
    event.preventDefault();
    window.hide();
    if(app.dock) app.dock.hide();
};

export { handleCloseEvents };