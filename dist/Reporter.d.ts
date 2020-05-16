import Allure from "allure-js-commons";
export declare enum Status {
    Passed = "passed",
    Pending = "pending",
    Skipped = "skipped",
    Failed = "failed",
    Broken = "broken"
}
export declare enum Severity {
    Blocker = "blocker",
    Critical = "critical",
    Normal = "normal",
    Minor = "minor",
    Trivial = "trivial"
}
export declare class Reporter {
    private allure;
    constructor(allure: Allure);
    description(description: string): this;
    severity(severity: Severity): this;
    epic(epic: string): this;
    feature(feature: string): this;
    story(story: string): this;
    testId(testId: string): this;
    startStep(name: string): this;
    endStep(status?: Status): this;
    addArgument(name: string): this;
    addEnvironment(name: string, value: string): this;
    addAttachment(name: string, buffer: any, type: string): this;
    addLabel(name: string, value: string): this;
    addParameter(paramName: string, name: string, value: string): this;
}
