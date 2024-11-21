import { app, BrowserWindow, Menu } from "electron";
import { createTray } from ">_/electron/utils/tray/creator.js";
import { describe, expect, Mock, test, vi } from "vitest";

vi.mock(`electron`, () => ({
    app: {
        dock: { show: vi.fn() },
        getAppPath: vi.fn().mockReturnValue(`/`),
        quit: vi.fn(),
    },
    Menu: { buildFromTemplate: vi.fn() },
    Tray: vi.fn().mockReturnValue({ setContextMenu: vi.fn() }),
}));

const MainWindow: BrowserWindow = { show: vi.fn() } as any satisfies Partial<BrowserWindow>;

describe(`Tray`, () => {
    createTray(MainWindow);
    const calls = (Menu.buildFromTemplate as any as Mock).mock.calls;
    const args = calls[0] as Parameters<typeof Menu.buildFromTemplate>;
    const template = args[0];
    test(`-> has 2 buttons`, () => {
        expect(template).toHaveLength(2);
    });
    test(`-> button 1 calls MainWindow and app.dock's [show: function] on click`, () => {
        if(template[0] && template[0].click) template[0].click(undefined as any, undefined as any, undefined as any);
        expect(MainWindow.show).toHaveBeenCalled();
        expect(app.dock.show).toHaveBeenCalled();
    });
    test(`-> button 2 calls app's [quit: function] on click`, () => {
        if(template[1] && template[1].click) template[1].click(undefined as any, undefined as any, undefined as any);
        expect(app.quit).toHaveBeenCalled();
    });
});