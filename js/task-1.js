const listItemsRef = document.querySelector("#categories").children;
console.log(`В списке ${listItemsRef.length} категории.`);
console.log(" ");
const itemsData = [...listItemsRef].map((item) => {
    console.log(`💠 Категория: ${item.querySelector("h2").textContent}`);
    console.log(`💠 Количество элементов: ${item.querySelectorAll("li").length}`);
    console.log(" ");
});