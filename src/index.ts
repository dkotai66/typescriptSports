interface Results{
    winner: string;
    date: Date;
    result() : void;
    toString() : string;
}

class football implements Results{
    winner: string;
    #aCsapatGol: number;
    #bCsapatGol: number;
    aCsapat : string;
    bCsapat : string;
    date: Date;

    constructor(aCsapat : string, aCsapatGol: number, bCsapat : string, bCsapatGol: number, date: Date){
        this.#aCsapatGol = aCsapatGol;
        this.aCsapat = aCsapat;
        this.bCsapat = bCsapat;  
        this.#bCsapatGol = bCsapatGol;
        this.date = date;

        if(aCsapatGol > bCsapatGol){
            this.winner = aCsapat;
        }
        else{
            this.winner = bCsapat;
        }
    }

    

    result(): void {
        console.log(this.toString());
    }

    toString(): string {
        return "Football match: " + this.#aCsapatGol + "-" + this.#bCsapatGol;   
    }
}

class marathon implements Results{
    winner: string;
    date: Date;
    futottIdo : number;

    constructor(winner: string, date: Date, futottIdo: number){
        this.winner = winner;
        this.date = date;
        this.futottIdo = futottIdo;
    }

    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return "Marathon: " + Math.floor(this.futottIdo/60) + " min " + this.futottIdo%60 + " s " 
    }

}

class Calvinball implements Results{
    #winner: string;
    date: Date;
    veletlenEgeszSzam: number;

    constructor(winner:string, date:Date){
        this.#winner = winner;
        this.date = date;
        this.veletlenEgeszSzam = Math.floor(Math.random() * 90) + 11;
    } 

    get winner() {
        return this.#winner;
    }

    set winner(winner: string) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.#winner = winner;
        }
        else {
            this.#winner = "Error"
        }
    }

    result(): void {
        console.log(this.toString());
    }

    toString() : string{
        return "Calvinball: " + this.veletlenEgeszSzam + " points";
    }
}

let eredmenyek: Results[] = [
    new football ('xxxx', 5, 'yyyyy', 3, new Date("2022-05-05")),
    new football ('zzzz', 3, 'ttttt', 7, new Date("2022-05-06")),
    new marathon ('Pepsi béla', new Date("2022-04-01"), 118),
    new marathon ('CocaCola béla', new Date("2022-04-03"), 130),
    new Calvinball ('hhhhh', new Date("2022-06-06" )),
    new Calvinball ('Calvin', new Date("2022-07-10" )),

]

for(let eredmeny of eredmenyek){
    eredmeny.result();
}