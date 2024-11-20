interface Window {
    electron: {
        system: {
            getHardwareUsage: (callback: (usage: HardwareUsage) => void) => CleanupFunction,
            getStorageInfo: (storage: string) => Promise<StorageInfo>,
            getSystemInfo: () => Promise<SystemInfo>
        }
    }
}

type CleanupFunction = () => void;
type EventPayloadMapping = { getHardwareUsage: HardwareUsage, getStorageInfo: StorageInfo, getSystemInfo: SystemInfo };
type HardwareUsage = { cpu: number, ram: number };
type StorageInfo = { free: number, total: number };
type SystemInfo = {
    cpu: {
        cores: number,
        model: string,
        speed: number
    },
    ram: {
        capacity: number,
    }
};