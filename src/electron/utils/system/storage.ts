import fs from "fs";

const getStorageInfo = (storage: string) => {
    const stats: fs.StatsFs = fs.statfsSync((process.platform === `win32`) ? storage : `/`);
    const statsFreeSpace: number = stats.bsize * stats.bfree;
    const statsTotalSpace: number = stats.bsize * stats.blocks;
    return { free: 1 - statsFreeSpace / statsTotalSpace, total: Math.floor(statsTotalSpace / 1000000000) };
};

export { getStorageInfo };