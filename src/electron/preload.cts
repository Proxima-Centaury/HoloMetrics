const electron = require(`electron`);

electron.contextBridge.exposeInMainWorld(`electron`, {
    system: {
        getHardwareUsage: (callback) => ipcRendererOn(`getHardwareUsage`, (usage) => callback(usage)),
        getStorageInfo: (storage: string) => ipcRendererInvoke(`getStorageInfo`, storage),
        getSystemInfo: () => ipcRendererInvoke(`getSystemInfo`)
    }
} satisfies Window[`electron`]);

const ipcRendererInvoke = <Key extends keyof EventPayloadMapping>(key: Key, ...args: any[]): Promise<EventPayloadMapping[Key]> => {
    return electron.ipcRenderer.invoke(key, ...args);
};

const ipcRendererOn = <Key extends keyof EventPayloadMapping>(key: Key, callback: (payload: EventPayloadMapping[Key]) => void) => {
    const nestedCallback = (_: Electron.IpcRendererEvent, payload: any) => callback(payload);
    electron.ipcRenderer.on(key, nestedCallback);
    return () => electron.ipcRenderer.off(key, nestedCallback);
};