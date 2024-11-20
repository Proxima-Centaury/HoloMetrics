import { getUIPath } from "./resolver.js";
import { isDev } from "./environment.js";
import { pathToFileURL } from "url";
import { WebFrameMain } from "electron";

const validateFrame = (frame: WebFrameMain | null) => {
    if(frame !== null && isDev() && new URL(frame.url).host === `localhost:3000`) return;
    if(frame !== null && frame.url !== pathToFileURL(getUIPath()).toString()) throw new Error(`Unknown senderFrame found, potential malicious source detected.`);
    if(frame === null) throw new Error(`No senderFrame found, unhandled behavior found.`);
};

export { validateFrame };