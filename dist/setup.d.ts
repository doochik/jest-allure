import { Reporter } from "./Reporter";
export declare function registerAllureReporter(): void;
declare global {
    const reporter: Reporter;
}
