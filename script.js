const coinContainer = document.getElementById('img-container');
const headsButton = document.getElementById('coin_heads');
const tailsButton = document.getElementById('coin_tails');
const allButtons = document.getElementsByClassName('buttons');

function coinJump() {
    coinContainer.classList.add('spin');
    allButtons.disabled = true;
    console.log(this.id);
    setTimeout(
        function(){
            coinContainer.classList.remove('spin');
            allButtons.disabled = false;
        },
        2000);
}

headsButton.addEventListener('click', coinJump);
tailsButton.addEventListener('click', coinJump);