export interface RecentDrawInfo {
    date: string;
    hour?: string;
    cryptoPot: string;
    dollarsPot?: string;
    status?: string;
    bet?: Bet;
    drawNumber: string;
    participants: string;
    winner?: string;
}

interface Bet {
    crypto: string;
    dollars: string;
}