const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtntimes = document.querySelector('.times');
const toggleBtnBars = document.querySelector('.bars');

const linksContainer = document.querySelector('.links-container')
const navContainer = document.querySelector('.nav-links');

// getBoundaryClientRect()

function toggleIcons(){
    const LinksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    if(LinksContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";

    }else if(LinksContainerHeight === navContainerHeight){
        linksContainer.style.height = 0;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons)


const links = document.querySelectorAll('.link');

links.forEach(function (linksItem){
    linksItem.addEventListener('click', function (item){
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    })
})