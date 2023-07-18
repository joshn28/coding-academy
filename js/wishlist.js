function createWishlistItem(titleText, key) {
    const item = document.createElement('div');
    item.classList.add('wishlist-item');
    item.dataset.key = key;

    const title = document.createElement('p');
    title.textContent = titleText;

    const trashIcon = document.createElement('img');
    trashIcon.src = "../imgs/trash.svg";

    item.append(title, trashIcon);

    return item;
}


function renderItems() {
    const wishlist = document.getElementById('wishlist');
    while (wishlist.firstChild) {
        wishlist.removeChild(wishlist.firstChild);
    }

    const fragment = document.createDocumentFragment();
    let count = 0;
    for (let i = 1; count < localStorage.length; i++) {
        if (localStorage.getItem(i) !== null) {
            const text = localStorage.getItem(i);
            const item = createWishlistItem(text, i);
            fragment.appendChild(item);
            ++count;
        }
    }

    document.getElementById('wishlist').appendChild(fragment);
}

document.getElementById('courses').addEventListener('click', function(evt) {
    if (evt.target.textContent === 'Wishlist') {
        const title = evt.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
        const key = document.getElementById('wishlist').childNodes.length + 1;
        localStorage.setItem(key, title);

        renderItems();
    }
});

document.getElementById('wishlist').addEventListener('click', function(evt) {
    if (evt.target.nodeName === 'IMG') {
        const key = parseInt(evt.target.parentElement.dataset.key);
        
        for (let i = 1;;i++) {
            if (i === key) {
                localStorage.removeItem(i);
                break;
            }
        }

        evt.target.parentElement.remove();
        renderItems();
    }
});

renderItems();