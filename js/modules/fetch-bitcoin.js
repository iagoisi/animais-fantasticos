export default function initFetchBitcoin() {

}

async function fetchBitcoin(url) {
    try{
        const dataResponse = await fetch(url)
        const dataJSON = await dataResponse.json();

        const btcPrice = document.querySelector(".btc-price");
        btcPrice.innerText = (1000 / dataJSON.BRL.sell).toFixed(4);
    } catch(erro) {
        console.log(erro);
    }
};

fetchBitcoin("https://blockchain.info/ticker");