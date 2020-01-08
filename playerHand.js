class Player {
    constructor(imagesList) {
        this.options = imagesList;

        let _playerChoice = this.playerHandSelection();
        this.getPlayerHand = () => _playerChoice;
    }
    playerHandSelection() {
        this.options.forEach(hand => hand.addEventListener('click', () => {
            const playerHand = hand.dataset.option;
            console.log(playerHand);
            this.playerC = playerHand;
            this.options.forEach(hand => hand.style.boxShadow = "");
            hand.style.boxShadow = "0 0 0 4px red";

        }
        ))
    }
}