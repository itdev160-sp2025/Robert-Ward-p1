//market update data
const dynamicMarketUpdate = {
    title: "Market Surge!",
    content: "Limited edition Funko Pops are flying off the shelves! Stay tuned for the latest trends and pricing updates."
};

function injectDynamicContent(){
    const dynamicArea = document.getElementById('dynamic-area');
    
    const updateHeading = document.createElement('h3');
    updateHeading.textContent = dynamicMarketUpdate.title;

    const updateParagraph = document.createElement('p');
    updateParagraph.textContent = dynamicMarketUpdate.content;

    dynamicArea.appendChild(updateHeading);
    dynamicArea.appendChild(updateParagraph);
}

document.addEventListener('DOMContentLoaded', injectDynamicContent);