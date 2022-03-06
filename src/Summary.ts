import { Analyzer } from "./interfaces/Analyzer";
import { OutputTarget } from "./interfaces/OutputTarget";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import fs from "fs";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalAnalysis";

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    static winsReportsWithHtml(teamName: string, fileName: string): Summary {
        if (!fs.existsSync('./src/reports/wins')) {
            fs.mkdirSync('./src/reports/wins');
        }

        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport(`./src/reports/wins/${fileName}.html`)
        );
    }

    static averageGoalsReportsWithHtml(teamName: string, fileName: string): Summary {
        if (!fs.existsSync('./src/reports/goals')) {
            fs.mkdirSync('./src/reports/goals');
        }

        return new Summary(
            new AverageGoalsAnalysis(teamName),
            new HtmlReport(`./src/reports/goals/${fileName}.html`)
        );
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}