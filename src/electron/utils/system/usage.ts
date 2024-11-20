import { BrowserWindow } from "electron";
import { ipcWebContentsSend } from "../ipc/sender.js";
import osUtils from "os-utils";

const interval = 500;

const checkResources = (MainWindow: BrowserWindow) => {
    setInterval(async () => {
        const cpu: number = await getUsage(`CPU`);
        const ram: number = await getUsage(`RAM`);
        ipcWebContentsSend(`getHardwareUsage`, { cpu, ram }, MainWindow.webContents);
    }, interval);
};

const getUsage = (hardware: string): Promise<number> => {
    return new Promise((resolve) => {
        switch(hardware) {
            case `CPU` :
                return osUtils.cpuUsage(resolve);
            case `RAM` :
                return resolve(1 - osUtils.freememPercentage());
        };
    });
};

export { checkResources };