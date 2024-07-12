
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".card-one");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            productCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.style.display = "flex"; // Show card if it matches the filter or if filter is "all"
                } else {
                    card.style.display = "none"; // Hide card if it doesn't match the filter
                }
            });
        });
    });
    console.log(filterButtons)
    console.log(productCards)
});


document.addEventListener("DOMContentLoaded", () => {
    let bookmarkIcons = document.querySelectorAll(".bookmark-icon");

    bookmarkIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let bookmarkIcon = icon.querySelector("i");

            // Change the icon color and background color
            bookmarkIcon.style.color = "#315343";  // Change text color
              // Change background color

            // Toggle the class from fa-regular to fa-solid
            if (bookmarkIcon.classList.contains("fa-regular")) {
                bookmarkIcon.classList.remove("fa-regular");
                bookmarkIcon.classList.add("fa-solid");
                
            } else {
                bookmarkIcon.classList.remove("fa-solid");
                bookmarkIcon.classList.add("fa-regular");
            }
        });
    });
});

let contentNews = document.querySelectorAll(".content-news")

contentNews.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("green-box");
        item.classList.add("green-box-readmore-btn")
       
    });

    item.addEventListener("mouseout", () => {
        item.classList.remove("green-box");
    });
});

let greenCard = document.getElementById("green-card");
let cardSection = document.getElementById("card-section");

window.addEventListener("scroll", () => {
    let rect = cardSection.getBoundingClientRect();
    let isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
        greenCard.classList.add("animationgreenCard");
    }
});

//footer animation
const footer = document.getElementById("footer")
const footerRow = document.querySelector(".footercontainer")
window.addEventListener("scroll",()=>{
    let rect = footer.getBoundingClientRect();
    let visible =rect.top < window.innerHeight && rect.bottom >=0;
    if(visible){
        footerRow.classList.add("animationfooter")
    }
})
