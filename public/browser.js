console.log("frontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li
    class="list-group-item list-groip-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.Reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        O'zgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm"
      >
        O'chirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { Reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltmos qaytatdan harakat qiling!");
    });
});
