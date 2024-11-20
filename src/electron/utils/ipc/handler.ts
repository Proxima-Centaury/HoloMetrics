import { ipcMain } from "electron";
import { validateFrame } from "../frame.js";

const ipcMainHandle = <Key extends keyof EventPayloadMapping>(key: Key, keyHandler: (...args: any[]) => EventPayloadMapping[Key]) => {
    return ipcMain.handle(key, (event, ...args) => {
        validateFrame(event.senderFrame);
        return keyHandler(...args);
    });
};

export { ipcMainHandle };