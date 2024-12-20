import { WebContents } from "electron";

const ipcWebContentsSend = <Key extends keyof EventPayloadMapping>(key: Key, payload: EventPayloadMapping[Key], webContents: WebContents) => webContents.send(key, payload);

export { ipcWebContentsSend };