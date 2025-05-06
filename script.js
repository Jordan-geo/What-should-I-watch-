// Declare your genre arrays here
let isekai = ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgikUh6Exe1swhbHWb3lEkj8t07aMZzlJMubPARfQA6dgEAyhYMeIrzof--sUZ3ZxGuVsRwbecmnYImHbg390hjxNit4XErIj9dkDi6lxfDA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZ01JKK_LcuBYPtaaR0fnNZEq9RjD_bmTCLcmrzN7-N_oA4TRqyAIATTXNQQFRyuH15YyzjzbVK9f1ZWqsUspepLkSqfG3tLcDMgcRSVKNWw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwg2ha0Jebm9l8Ho6XCN5CkGY1elzyAqgV_jO72xe6k5Qb97fYGZavjduLRLLLYgR9go1WxjPdNeai6xVePUsB694ZlPD_dDv94FoJu6Kd" ]
let superpowered = ["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR89lzzntf6tzRXwRMSgObwODvebG9bO8pyuYJerlhZl-UcVjUaY3_M0nVo6CjVt3N7DlDmRaYW1RjBDdwAl_Mbe5FfCTvPgp9PdiHfH8pnPw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrhj8_w_uS2twwSU9P8O0XNBiojtsAOic-kAfVj9TfflH_Lo2aJwgf5w5IJYYUhyfUzD6gGsYCs_IwOd9zOEOEM1R5mr7EXS3KSqIOD409A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjCR4q63Zb794kKuKQhAa_ZQBWzYj4QYmU7RGmR4BUlKkrWEATKSY8SfFW0rjoX-kClZ-kf4SnzJWFYwvBjVunj6gcW9laBrUqRrUIgbejVg"]
let sliceoflife = ["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKPkxC9M14012pz4VWSaQr_84xeaX4pGxfa6NeN6nA8wyIdy7RRc6h_60lES7VI5nHYk6ynVGdOfgK1oR7OW5O6XFxssh7AgEBNFxBd6_1AA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWFiisiiEgkBPWB9frwtKPxInjTJtoAgP2o2ShguKo8Ibv0dygxmcCmIPRHynzhTo40-qis32kWT38Tndv9BqcA3BNERQw8eEq7wZ2HqihFg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdwOb3uH7sDHWeSOh5Ov9Xv_FrVGQgvckfk-JeH_DLiHibL0Hmg_E-gPGGHwlOPrOyl1XEA_KTV-OROS8MEIdwxs-j3irnAMijCYKIri9ohg"]
// Make sure to declare your HTML elements as variables! 
let suggestBtn=document.querySelector(".suggest");
let shows=document.querySelector(".shows");


// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.onclick = function() { let genreInput=document.querySelector(".genre").value;
if(genreInput=== "isekai" || genreInput==="Isekai"){
  for(let ise of isekai){ shows.insertAdjacentHTML("afterbegin","<img src=" + ise + ">")}}
  else if(genreInput=== "superpowered" || genreInput=== "Superpowered"){for(let sup of superpowered){
    shows.insertAdjacentHTML("afterbegin", "<img src=" + sup +">")
  }
} else if(genreInput=== "sliceoflife" || genreInput=== "Sliceoflife"){for(let sli of sliceoflife){
    shows.insertAdjacentHTML("afterbegin", "<img src=" + sli +">")}}
};


  // Write your for of loop here!