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
        data = req.data;
        console.log(data)
        console.log(Object.values(data))
        Object.values(data).forEach((item) => {
            console.log(item)
            let i = 0
            imgUrl = item[i].imgUrl;
            console.log(imgUrl)
            ticketCardName = item[i].name;
            ticketCardDescription = item[i].description;
            ticketCardArea = item[i].area;
            ticketCardNum = item[i].group;
            ticketCardPrice = item[i].price;
            ticketCardRate = item[i].rate;
            str += `<li class='ticketCard'>
    <div class="ticketCard-img">
    <a href="#">
        <img src='${imgUrl}' alt="">
    </a>
    <div class="ticketCard-region">${ticketCardArea}</div>
    <div class="ticketCard-rank">${ticketCardRate}</div>
</div>
<div class="ticketCard-content">
    <div>
        <h3>
            <a href="#" class="ticketCard-name">${ticketCardName}</a>
        </h3>
        <p class="ticketCard-description">
            ${ticketCardDescription}
        </p>
    </div>
    <div class="ticketCard-info">
        <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${ticketCardNum} </span> 組
        </p>
        <p class="ticketCard-price">
            TWD <span id="ticketCard-price">${ticketCardPrice}</span>
        </p>
    </div>
</div>
            </li>`;
            i++
        })
//         for (let i = 0; i < Object.values(data).length; i++){
//             imgUrl = item[i].imgUrl;
//             ticketCardName = item[i].name;
//             ticketCardDescription = item[i].description;
//             ticketCardArea = item[i].area;
//             ticketCardNum = item[i].group;
//             ticketCardPrice = item[i].price;
//             ticketCardRate = item[i].rate;
//             str += `<li class='ticketCard'>
//     <div class="ticketCard-img">
//     <a href="#">
//         <img src='${imgUrl}' alt="">
//     </a>
//     <div class="ticketCard-region">${ticketCardArea}</div>
//     <div class="ticketCard-rank">${ticketCardRate}</div>
// </div>
// <div class="ticketCard-content">
//     <div>
//         <h3>
//             <a href="#" class="ticketCard-name">${ticketCardName}</a>
//         </h3>
//         <p class="ticketCard-description">
//             ${ticketCardDescription}
//         </p>
//     </div>
//     <div class="ticketCard-info">
//         <p class="ticketCard-num">
//             <span><i class="fas fa-exclamation-circle"></i></span>
//             剩下最後 <span id="ticketCard-num"> ${ticketCardNum} </span> 組
//         </p>
//         <p class="ticketCard-price">
//             TWD <span id="ticketCard-price">${ticketCardPrice}</span>
//         </p>
//     </div>
// </div>
//             </li>`;
//         }
        list.innerHTML = str;
    });

    


// function init() {
//     let imgUrl = '';
//     let ticketCardName = '';
//     let ticketCardDescription = '';
//     let ticketCardNum = '';
//     let ticketCardPrice = '';
//     let ticketCardRate = '';
//     let ticketCardArea = '';
//     let str = '';

//     data.forEach((item) => {
//         imgUrl = item.imgUrl;
//         ticketCardName = item.name;
//         ticketCardDescription = item.description;
//         ticketCardNum = item.group;
//         ticketCardPrice = item.price;
//         ticketCardRate = item.rate;
//         ticketCardArea = item.area;
//         str += `<li class='ticketCard'>
//     <div class="ticketCard-img">
//     <a href="#">
//         <img src='${imgUrl}' alt="">
//     </a>
//     <div class="ticketCard-region">${ticketCardArea}</div>
//     <div class="ticketCard-rank">${ticketCardRate}</div>
// </div>
// <div class="ticketCard-content">
//     <div>
//         <h3>
//             <a href="#" class="ticketCard-name">${ticketCardName}</a>
//         </h3>
//         <p class="ticketCard-description">
//             ${ticketCardDescription}
//         </p>
//     </div>
//     <div class="ticketCard-info">
//         <p class="ticketCard-num">
//             <span><i class="fas fa-exclamation-circle"></i></span>
//             剩下最後 <span id="ticketCard-num"> ${ticketCardNum} </span> 組
//         </p>
//         <p class="ticketCard-price">
//             TWD <span id="ticketCard-price">${ticketCardPrice}</span>
//         </p>
//     </div>
// </div>
//     </li>`;
//     });
//     list = document.querySelector('.ticketCard-area');
//     list.innerHTML = str;
// }

// init()

