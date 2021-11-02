var plusBtn = document.getElementsByClassName("plus-btn");
var minusBtn = document.getElementsByClassName("minus-btn");
var qty = document.getElementsByClassName("quantity");

plusBtn[0].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[0].innerHTML
  );
  document.getElementsByClassName("quantity")[0].innerHTML = quantity + 1;
  const prix0 = document.getElementsByClassName("prix")[0].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix0);
});

minusBtn[0].addEventListener("click", function () {
  if (+qty[0].innerHTML > 0) {
    let quantity = parseInt(
      document.getElementsByClassName("quantity")[0].innerHTML
    );
    document.getElementsByClassName("quantity")[0].innerHTML = quantity - 1;
  } else {
    alert("pay attention");
  }
  const prix0 = document.getElementsByClassName("prix")[0].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) - Number(prix0);
});

plusBtn[1].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[1].innerHTML
  );
  document.getElementsByClassName("quantity")[1].innerHTML = quantity + 1;
  // Calcul Price Total
  const prix1 = document.getElementsByClassName("prix")[1].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix1);
});

minusBtn[1].addEventListener("click", function () {
  if (+qty[1].innerHTML > 0) {
    let quantity = parseInt(
      document.getElementsByClassName("quantity")[1].innerHTML
    );
    document.getElementsByClassName("quantity")[1].innerHTML = quantity - 1;
  } else {
    alert("pay attention");
  }
  const prix1 = document.getElementsByClassName("prix")[1].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) - Number(prix1);
});

plusBtn[2].addEventListener("click", function () {
  let quantity = parseInt(
    document.getElementsByClassName("quantity")[2].innerHTML
  );
  document.getElementsByClassName("quantity")[2].innerHTML = quantity + 1;

  const prix2 = document.getElementsByClassName("prix")[2].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) + Number(prix2);
});

minusBtn[2].addEventListener("click", function () {
  if (+qty[2].innerHTML > 0) {
    let quantity = parseInt(
      document.getElementsByClassName("quantity")[2].innerHTML
    );
    document.getElementsByClassName("quantity")[2].innerHTML = quantity - 1;
  } else {
    alert("pay attention");
  }
  const prix2 = document.getElementsByClassName("prix")[2].innerHTML;
  const total = document.getElementById("toot");
  total.innerHTML = Number(total.innerHTML) - Number(prix2);
});
//Remove btn//
var deleteBtn = document.getElementsByClassName("delete-btn");
for (var i = 0; i < deleteBtn.length; i++) {
  var button = deleteBtn[i];
  button.addEventListener("click", function (event) {
    var clickBtn = event.target;
    const quantity = clickBtn.parentElement.children[1].innerHTML;
    const prix =
      clickBtn.parentElement.parentElement.children[1].children[0].innerHTML;

    const total = document.getElementById("toot");
    total.innerHTML =
      parseInt(total.innerHTML) - parseInt(prix) * parseInt(quantity);

    const deleteProduct = clickBtn.parentElement.parentElement;
    deleteProduct.style.display = "none";
  });
}
//like and dislike//
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
