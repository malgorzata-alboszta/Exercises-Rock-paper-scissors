class Draw {
    constructor(imagesList) {
        this.options = imagesList;
        let _aiChoice = this.aiHandSelection();
        this.getAiHand = () => _aiChoice;

    }
    aiHandSelection() {
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const randomHand = this.options[index].dataset.option;
            return randomHand;
        }
    }
}