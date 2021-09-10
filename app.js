// Total Price Count function
function totalPricePrimary() {
    const memoryPrice = document.getElementById("extra-memory-cost").innerText;
    const defaultPrice = document.getElementById("default-price").innerText;
    const storagePrice = document.getElementById("extra-storage-cost").innerText;
    const deliveryCharge = document.getElementById("delivery-charge").innerText;
    const price = parseFloat(memoryPrice) + parseFloat(defaultPrice) + parseFloat(storagePrice) + parseFloat(deliveryCharge);
    return price;}
function totalPrice() {
    const price = totalPricePrimary();
    document.getElementById("total-price").innerText = price;
    document.getElementById("total").innerText = price;}
// button memory click function 
function memory(size) {
    if (size == 8) {
        const memoryCost = document.getElementById("extra-memory-cost");
        memoryCost.innerText = "0";}
    else if (size == 16) {
        const memoryCost = document.getElementById("extra-memory-cost");
        memoryCost.innerText = "180";}
    totalPrice();}
// button storage click function
function storage(size) {
    if (size == 256) {
        const storageCost = document.getElementById("extra-storage-cost");
        storageCost.innerText = "0";
    } else if (size == 500) {
        const storageCost = document.getElementById("extra-storage-cost");
        storageCost.innerText = "100";
    } else if (size == 1024) {
        const storageCost = document.getElementById("extra-storage-cost");
        storageCost.innerText = "180";}
    totalPrice();}
// Delivery charge function
function delivery(isFree) {
    if (isFree == true) {
        const deliveryCost = document.getElementById("delivery-charge");
        deliveryCost.innerText = "0";}
    if (isFree == false) {
        const deliveryCost = document.getElementById("delivery-charge");
        deliveryCost.innerText = "20";}
    totalPrice();}
//function promo code(bonus mark)
function promo(){
    const promo =  document.getElementById("promo-code")
    const promoCode = promo.value;
    if (promoCode =="stevekaku"){
        const priceMain = totalPricePrimary();
        const pricePromo = priceMain * .80;
        document.getElementById("total").innerText = pricePromo;}
    else{alert("Wrong / Empty Promo Code")}
    promo.value = "";}