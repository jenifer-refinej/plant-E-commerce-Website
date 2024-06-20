document.addEventListener('DOMContentLoaded', function(){
    const categoryLinks = document.querySelectorAll('.category-link');
    const plantItems = document.querySelectorAll('.plant-item');
    const plantContainer = document.querySelector('.plant-container');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Remove all existing plant items
            const allPlants = Array.from(plantItems);
            allPlants.forEach(item => plantContainer.removeChild(item));

            // Filter and add plant items that match the category
            const filteredPlants = allPlants.filter(item => item.getAttribute('data-category') === category || category === 'all');

            // Append filtered plants to the container
            filteredPlants.forEach(item => plantContainer.appendChild(item));
        });
    });
    
})
let navbar = document.querySelector(".navbar")
navbar = () =>{
    if(window.scrollY > 0){
        navbar.style.boxShadow = "2px 3px 5px #486757"
    }
}

let dropDownIcon =  document.getElementById("drop-downIcon")