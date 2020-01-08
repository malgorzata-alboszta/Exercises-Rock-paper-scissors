class Game {
    constructor() {

        this.options = [...document.querySelectorAll('.select img')];
        this.player = new Player(this.options);
        this.statistics = new Statistics;
        document.getElementById('start').addEventListener('click', () => this.startGame());
        this.playerHand = document.querySelector('[data-summary="your-choice"]');
        this.aiHand = document.querySelector('[data-summary="ai-choice"]');
        this.gameResult = document.querySelector('[data-summary="who-win"]');
        this.gameWin = document.querySelector('.wins span');
        this.gameLosses = document.querySelector('.losses span');
        this.gameDraws = document.querySelector('.draws span');
        this.gameNumber = document.querySelector('.numbers span');
        this.render('Please choose', '-', '-', 0, 0, 0, 0);
    }

    // it can receive as argument whole stats object
    render(player, ai, result, wins, losses, draws, games) {
        console.log(arguments)
        this.playerHand.textContent = player;
        this.aiHand.textContent = ai;
        this.gameResult.textContent = result;
        this.gameWin.textContent = wins;
        this.gameLosses.textContent = losses;
        this.gameDraws.textContent = draws;
        this.gameNumber.textContent = games;
        console.log({
            games: this.gameNumber, wins: this.gameWin, loses: this.gameLosses
        })
    }

    startGame() {
        this.draw = new Draw(this.options);
        const aiChoise = this.draw.getAiHand();
        const playerChoise = this.player.playerC;
        const whowin = Result.checkWinner(playerChoise, aiChoise);

        // update statistics with new result
        this.statistics.stats(whowin);

        // fetch actual statistics
        const currentStats = this.statistics.getStats(); // object with all data

        const nwins = currentStats.gameWins;
        const nlosses = currentStats.gameLosses;
        const ndraws = currentStats.gameDraws;
        const ngames = currentStats.gameNumber;
        this.render(playerChoise, aiChoise, whowin, nwins, nlosses, ndraws, ngames);
    }
}
