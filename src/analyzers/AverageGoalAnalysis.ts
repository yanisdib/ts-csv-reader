import { Analyzer } from "../interfaces/Analyzer";
import { MatchData } from "../MatchData";
import { average } from "../utils/math";


export class AverageGoalsAnalysis implements Analyzer {
    constructor(public teamName: string) { }

    run(matches: MatchData[]): string {
        let goals: number[] = [];

        for (let match of matches) {
            if (match[1] === this.teamName) {
                goals.push(match[3]);
            }
            else if (match[2] === this.teamName) {
                goals.push(match[4]);
            }
        }

        return `${average(goals).toFixed(1)}`;
    }
}