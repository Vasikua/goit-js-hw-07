
const mainList = document.getElementById('categories');
const catItems = mainList.querySelectorAll(".item");

console.log(`Number of categories: ${catItems.length}`);

catItems.forEach(category => {
const title = category.querySelector('h2').textContent;;
const numbElements = category.querySelectorAll('ul > li').length;
                     
console.log(`Category: ${title}`);
console.log(`Elements: ${numbElements}`);
});

