import { Condition } from './condition';

export class Current {
    name: string;
    localtime: Date;
    condition: Condition;
    tempc: number;
    precipin: number;
    humidity: number;
    windmph: number;
}
