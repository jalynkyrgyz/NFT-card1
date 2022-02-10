// html
const html = document.documentElement;
html.style.boxSizing = ("border-box");
html.style.fontFamily = ("Outfit, sans-serif");

 // body 
 const body = document.body;
 body.style.background = ("hsl(217, 54%, 11%)");
 

 // mainWrapper
 const mainWrapper =  document.createElement("div");
 mainWrapper.id = "main__wrapper";
 // styles
 mainWrapper.style.margin = ("auto");
 mainWrapper.style.maxWidth = ("1440px");
 mainWrapper.style.padding = ("25px");
 mainWrapper.style.display = ("flex");
 mainWrapper.style.justifyContent = ("center");
 mainWrapper.style.alignItems = ("center");
 
 // card  
const containerMain = document.createElement("div");
containerMain.classList.add("card");
// styles
containerMain.style.background = ("hsl(216, 50%, 16%)");
containerMain.style.padding = ("24px");
containerMain.style.borderRadius = ("20px");
containerMain.style.boxShadow = ("(0px 20px 25px 15px rgba(0, 0, 0, 0.05)), (0px 40px 30px 15px rgba(0, 0, 0, 0.1))");

const cardHead = document.createElement("div");
cardHead.classList.add("card__head");


const cardProductImg = document.createElement("div");
cardProductImg.classList.add("card__product-img");
// styles
cardHead.style.margin = "auto";


const image1 = document.createElement("img");
image1.src = "images/image-equilibrium.jpg";
image1.alt = "";
//styles
image1.style.width = "100%";
image1.style.alignItems = "center";
image1.style.overflow = "hidden";
image1.style.cursor = "pointer";
image1.style.borderRadius = ("10px");

const cardBody = document.createElement("div");
cardBody.classList.add("card__body");
//styles
cardBody.style.padding = "23px 0";
cardBody.style.borderBottom = "1px solid hsl(215, 32%, 27%)";
cardBody.style.marginBottom = "15px";


const link1 = document.createElement("a");
link1.href = "#";
// styles
link1.style.textDecoration = "none";

const cardTitle = document.createElement("h3");
cardTitle.classList.add("card__title");
cardTitle.innerText = "Equilibrium #3429";
//styles
cardTitle.style.color = ("hsl(0, 0%, 100%)");
cardTitle.style.fontSize = "36px";
cardTitle.style.fontWeight = "500";
cardTitle.style.marginBottom = "15px";

const cardText = document.createElement("p");
cardText.classList.add("card__text");
cardText.innerText = "Our Equilibrium collection promotes balance and calm."
//styles
cardText.style.color = ("hsl(216, 30%, 55%)");
cardText.style.fontSize = "25px";
cardText.style.lineHeight = "1.5";
cardText.style.marginBottom = "23px";


const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
//styles
wrapper.style.display = "flex";
wrapper.style.justifyContent = "space-between";
wrapper.style.alignItems = "center";

const cardPrice = document.createElement("div");
cardPrice.classList.add("card__price");
//styles
cardPrice.style.display = "flex";
cardPrice.style.alignItems = "center";
cardPrice.style.fontWeight = "500";
cardPrice.style.color = ("hsl(178, 100%, 50%)");

const image2 = document.createElement("img");
image2.src = "images/icon-ethereum.svg";
image2.alt = " ";
image2.classList.add("card__icon");
// styles
image2.style.marginRight = "10px";

const span1 = document.createElement("span");
span1.innerText = "0.041 ETH";

const cardCountdown = document.createElement("div");
cardCountdown.classList.add("card__countdown");
// styles
cardCountdown.style.display = "flex";
cardCountdown.style.alignItems = "center";
cardCountdown.style.fontWeight = "500";
cardCountdown.style.color = ("hsl(216, 30%, 55%)");

const image3 = document.createElement("img");
image3.src = "images/icon-clock.svg";
image3.alt ="";
image3.classList.add("card__icon");
//styles
image3.style.marginRight = "10px";

const span2 = document.createElement("span");
span2.innerText = "3 days left";

const cardFooter = document.createElement("div");
cardFooter.classList.add("card__footer");
//styles
cardFooter.style.display = "flex";
cardFooter.style.alignItems = "center";
cardFooter.style.marginBottom = "10px";

const imageFooter = document.createElement("img");
imageFooter.src = "images/image-avatar.png";
imageFooter.alt = " ";
imageFooter.classList.add("card__autor-img");
// styles
imageFooter.style.width = "60px";
imageFooter.style.height = "60px";
imageFooter.style.border = "2px solid white";
imageFooter.style.borderRadius = "50px";
imageFooter.style.marginRight = "15px";

const spanFooter = document.createElement("span");
spanFooter.classList.add("card__autor-name");
spanFooter.innerText = "Creation of";
//styles
spanFooter.style.color = ("hsl(216, 30%, 55%)");
spanFooter.style.fontWeight = "400";
spanFooter.style.fontSize =  "36px";


const linkFooter = document.createElement("a");
linkFooter.href = "#";
linkFooter.innerText = " Jules Wyvern";
linkFooter.style.color = "white";
linkFooter.style.textDecoration = "none";
linkFooter.style.fontWeight = "400";
linkFooter.style.marginLeft = "10px";




// all Appends

body.appendChild(mainWrapper);
mainWrapper.appendChild(containerMain);
containerMain.appendChild(cardHead);
cardHead.appendChild(cardProductImg);
cardProductImg.appendChild(image1);
containerMain.appendChild(cardBody);
cardBody.appendChild(link1);
link1.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(wrapper);
wrapper.appendChild(cardPrice);
cardPrice.appendChild(image2);
cardPrice.appendChild(span1);
wrapper.appendChild(cardCountdown);
cardCountdown.appendChild(image3);
cardCountdown.appendChild(span2);
containerMain.appendChild(cardFooter);
cardFooter.appendChild(imageFooter);
cardFooter.appendChild(spanFooter);
spanFooter.appendChild(linkFooter);


alert("Я оцениваю свою работу на 80 баллов");




