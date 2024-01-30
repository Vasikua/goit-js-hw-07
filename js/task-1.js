
const catItems = document.querySelectorAll(".item");
    console.log(`Number of categories: ${catItems.length}`);

catItems.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul > li');
                     
    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoryElements.length}`);
});

