let data = [];
let imgUrl;
let ticketCardName;
let ticketCardDescription;
let ticketCardArea;
let ticketCardNum;
let ticketCardPrice;
let ticketCardRate;
let str = '';
let list = document.querySelector('.ticketCard-area')

axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
    .then((req) => {
        data = req.data
        str = `<li>${Object.values(data)}</li>`
        list.innerHTML = str
    });