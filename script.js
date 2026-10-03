const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="${bookmark}" target="_blank">${bookmark}</a>
      <button class="delete" data-index="${index}">
        Видалити
      </button>
    `;

    bookmarkList.appendChild(li);
  });
}

addBookmarkBtn.addEventListener("click", () => {
  const url = bookmarkInput.value.trim();

  if (!url) {
    return;
  }

  bookmarks.push(url);

  saveBookmarks();
  renderBookmarks();

  bookmarkInput.value = "";
});

bookmarkList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete")) {
    return;
  }

  const index = event.target.dataset.index;

  bookmarks.splice(index, 1);

  saveBookmarks();
  renderBookmarks();
});

renderBookmarks();
