import os from "os";
import osUtils from "os-utils";

const getSystemInfo = () => {
    const cpuCores: number = os.cpus().length;
    const cpuModel: string = os.cpus()[0].model;
    const cpuSpeed: number = os.cpus()[0].speed;
    const memoryCapacity: number = Math.floor(osUtils.totalmem() / 1024);
    return {
        cpu: { cores: cpuCores, model: cpuModel, speed: cpuSpeed },
        ram: { capacity: memoryCapacity }
    };
};

export { getSystemInfo };