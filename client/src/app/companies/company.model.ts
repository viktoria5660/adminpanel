export interface Company {
    companyName: string;
    defaultCoins: number;
    defaultCorrectFB: string;
    defaultInCorrectFB: string;
    timeLimitForQ: number;
    lowToMed: number;
    medToHigh: number;
    timetToSendToLogin: number;
    EnableGame: boolean;
    minBet: number;
    gameOp: string;
    groups: any[];
}
