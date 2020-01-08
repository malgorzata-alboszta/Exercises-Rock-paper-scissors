class Result {
    static checkWinner(player, ai) {
        console.log(player, ai)
        if (player === ai) {
            return "draw"
        } else if ((player === "nożyczki" && ai === "papier") || (player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki")) {
            return "wins"
        } else {
            return "losses"
        }

    }
}
