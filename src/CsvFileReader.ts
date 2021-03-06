import fs from 'fs';


export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) { }

    read(): void {
        this.data = fs.readFileSync('football.csv', { encoding: 'utf-8' })
            .split('\n')
            .map((match: string): string[] => match.split(','))
    }
}