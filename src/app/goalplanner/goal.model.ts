export class AssumptionVariables {
    inflation: number;
    returnsEquity: number;
    returnsDebt: number;
    returnsPf: number;

    constructor(inflation = 6, returnsEquity = 12, returnsDebt = 6, returnsPf = 7) {
        this.inflation = inflation;
        this.returnsEquity = returnsEquity;
        this.returnsDebt = returnsDebt;
        this.returnsPf = returnsPf;
    }
}
export enum FundType {
    Equity,
    Debt,
    PF
}
export class SIP {
    currentValue: number;
    sipValue = 0;
    yearlyPctIncrementSIP = 0;
    fundType: FundType = FundType.Equity;

    constructor(currentValue: number,
        sipValue = 0, yearlyPctIncrementSIP = 0, fundType = FundType.Equity) {
        this.currentValue = currentValue;
        this.sipValue = sipValue;
        this.yearlyPctIncrementSIP = yearlyPctIncrementSIP;
        this.fundType = fundType;
    }
}
export class Goal {
    goalName: string;
    numOfMonthsToAchieve: number;
    currentSIPs: SIP[] = new Array<SIP>();
    goalSIP: SIP;
    inflation: number;
}
