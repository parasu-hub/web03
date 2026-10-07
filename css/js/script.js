/* =========================
   CART
========================= */

function addToCart(name, price) {

    let cart = JSON.parse(
        localStorage.getItem("shopkartCart")
    ) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "shopkartCart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");

}


/* =========================
   SHOW CART
========================= */

function displayCart() {

    let cart = JSON.parse(
        localStorage.getItem("shopkartCart")
    ) || [];

    let container =
        document.getElementById("cartItems");

    let total =
        document.getElementById("cartTotal");

    if (!container) return;

    container.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {

        container.innerHTML =
            "<h3>Your cart is empty.</h3>";

        total.innerText = "0";

        return;
    }

    cart.forEach((item, index) => {

        totalPrice += item.price;

        container.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <button
                onclick="removeCartItem(${index})">
                Remove
            </button>

        </div>

        `;

    });

    total.innerText =
        totalPrice.toLocaleString("en-IN");

}


/* =========================
   REMOVE CART
========================= */

function removeCartItem(index) {

    let cart = JSON.parse(
        localStorage.getItem("shopkartCart")
    ) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "shopkartCart",
        JSON.stringify(cart)
    );

    displayCart();
}


/* =========================
   REGISTER
========================= */

function registerUser(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("regEmail").value;

    let password =
        document.getElementById("regPassword").value;

    let user = {

        name: name,
        email: email,
        password: password

    };

    localStorage.setItem(
        "shopkartUser",
        JSON.stringify(user)
    );

    alert("Account created successfully!");

    window.location.href =
        "login.html";
}


/* =========================
   LOGIN
========================= */

function loginUser(event) {

    event.preventDefault();

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let user = JSON.parse(
        localStorage.getItem("shopkartUser")
    );

    if (!user) {

        alert(
            "Account not found. Please register first."
        );

        return;
    }

    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem(
            "shopkartLoggedIn",
            "true"
        );

        alert("Login successful!");

        window.location.href =
            "account.html";

    } else {

        alert("Invalid email or password.");

    }

}


/* =========================
   ACCOUNT
========================= */

function showAccount() {

    let user = JSON.parse(
        localStorage.getItem("shopkartUser")
    );

    let name =
        document.getElementById("userName");

    let email =
        document.getElementById("userEmail");

    if (!name || !email) return;

    if (user) {

        name.innerText =
            "Welcome, " + user.name;

        email.innerText =
            user.email;

    }

}


/* =========================
   SEARCH
========================= */

function searchProduct() {

    let input =
        document.getElementById("searchInput");

    if (!input) return;

    let value =
        input.value.trim();

    if (value === "") {

        alert("Please enter a product name.");

        return;
    }

    window.location.href =
        "products.html?search=" +
        encodeURIComponent(value);
}


/* =========================
   CHECKOUT
========================= */

function placeOrder(event) {

    event.preventDefault();

    alert(
        "Order placed successfully! 🎉"
    );

    localStorage.removeItem(
        "shopkartCart"
    );

    window.location.href =
        "orders.html";
}


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayCart();

        showAccount();

    }
);