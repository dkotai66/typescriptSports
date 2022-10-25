interface Results{
    winner: string;
    date: Date;
    result() : void;
    toString() : string;
}

class football implements Results{
    winner: string;
    #golokSzama: number;
    date: Date;

    constructor(winner: string, golokszama: number, date: Date){
        this.winner = winner;
        this.#golokSzama = golokszama;
        this.date = date;
    }


    result(): void {
        console.log(this.toString());
    }

    toString(): string {
        return "Football match: 6-3";   
    }
}