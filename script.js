const coinContainer = document.getElementById('img-container');
const headsButton = document.getElementById('coin_heads');
const tailsButton = document.getElementById('coin_tails');
const resultText = document.getElementById('result_text');

function tossResult() {
    let coin = "";
    switch (Math.floor(Math.random() * 2)) {
        case 0: coin = 'tails';
        break;
        case 1: coin = 'heads';
    }
    if(coin === 'tails') {
        coinContainer.style.backgroundImage = 'url(./img/coin_tails.png)';
    } else {
        coinContainer.style.backgroundImage = 'url(./img/coin_heads.png)';
    }
    return coin;
}

function coinJump() {
    const chose = this.value;
    coinContainer.classList.add('spin');
    headsButton.disabled = true;
    tailsButton.disabled = true;
    setTimeout(
        function(){
            coinContainer.classList.remove('spin');
            headsButton.disabled = false;
            tailsButton.disabled = false;
            const result = tossResult();
            if (chose === result) {
                resultText.innerText = `You choose ${chose} and guessed right`;
            } else {
                resultText.innerText = `You choose ${chose} but it was wrong`;
            }
        },
    1500);
    
}

headsButton.addEventListener('click', coinJump);
tailsButton.addEventListener('click', coinJump);


