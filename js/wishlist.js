function createWishlistItem(titleText, rankText) {
    const item = document.createElement('div');
    item.classList.add('wishlist-item');

    const title = document.createElement('p');
    title.textContent = titleText;

    const rank = document.createElement('span');
    rank.classList.add('rank');
    rank.textContent = rankText;

    const trashIcon = document.createElement('img');
    trashIcon.src = "../imgs/trash.svg";

    item.append(rank, title, trashIcon);

    return item;
}


function renderItems() {
    const wishlist = document.getElementById('wishlist');
    while (wishlist.firstChild) {
        wishlist.removeChild(wishlist.firstChild);
    }

    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= localStorage.length; i++) {
        const text = localStorage.getItem(i);
        const item = createWishlistItem(text, i);
        fragment.appendChild(item);
    }

    document.getElementById('wishlist').appendChild(fragment);
}

document.getElementById('courses').addEventListener('click', function(evt) {
    if (evt.target.textContent === 'Wishlist') {
        const title = evt.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent;
        const rank = document.getElementById('wishlist').childNodes.length + 1;
        localStorage.setItem(rank, title);

        renderItems();
    }
});

renderItems();