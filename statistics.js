class Statistics {
    constructor() {
        this._stats = { gameNumber: 0, gameDraws: 0, gameLosses: 0, gameWins: 0 };
        this.getStats = () => this._stats;
    }

    stats(result) {

        if (result === "draw") {
            this._stats.gameDraws++;
        } else if (result === "wins") {
            this._stats.gameWins++;
        } else if (result === "losses") {
            this._stats.gameLosses++;
        }

        this._stats.gameNumber++;
    }


}