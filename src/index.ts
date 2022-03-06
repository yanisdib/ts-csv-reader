import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


// Create an instance of MtachReader and pass in data that 
// satisfies DataReader interface
const matchReader = MatchReader.fromCsv('football.csv');

const winsFileName = 'analysis-report-manunited-wins';
const averageGoalsFileName = 'analysis-report-manunited-avg-goals';

const winsSummary = Summary.winsReportsWithHtml('Man United', winsFileName);
const averageGoalsSummary = Summary.averageGoalsReportsWithHtml('Man United', averageGoalsFileName);


matchReader.load();
winsSummary.buildAndPrintReport(matchReader.matches);
averageGoalsSummary.buildAndPrintReport(matchReader.matches);