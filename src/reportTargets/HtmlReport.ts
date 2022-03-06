import fs from 'fs';

import { OutputTarget } from "../interfaces/OutputTarget";


export class HtmlReport implements OutputTarget {
    constructor(public fileName: string) { }

    print(report: string): void {
        const htmlReport = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;

        fs.writeFileSync(this.fileName, htmlReport);
    }
}