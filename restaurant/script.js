
// =========================Reveal=========================//

const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove active class so animation can replay next time
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => observer.observe(el));


// ====================Toggle======================//
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll("#navLinks li a");

// open/close toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// close menu on link click
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


    // ==============================order===========================//

let addItem = document.querySelectorAll('.order-btn');
let selectItem = document.querySelectorAll('.order');
addItem.forEach((button, index) => {
    button.addEventListener("click", () => {
        selectItem[index].style.display = "flex";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".order");
    const tableBody = document.querySelector("#serviceTable tbody");
    const totalAmount = document.querySelector(".total-amount");

    let cart = {};

    function updateTable() {
        tableBody.innerHTML = "";
        let sn = 1;
        let total = 0;

        Object.keys(cart).forEach(item => {
            const { price, qty } = cart[item];
            const itemTotal = price * qty;
            total += itemTotal;

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${sn++}</td>
                <td>${item}</td>

                <td>
                    <button class="qty-btn minus">-</button>
                    <span class="qty">${qty}</span>
                    <button class="qty-btn plus">+</button>
                </td>

                <td>₹${itemTotal}</td>

                <td><button class="remove-btn">Remove</button></td>
            `;

            tr.querySelector(".minus").onclick = () => {
                if (cart[item].qty > 1) {
                    cart[item].qty--;
                } else {
                    delete cart[item];
                }
                updateTable();
            };

            tr.querySelector(".plus").onclick = () => {
                cart[item].qty++;
                updateTable();
            };

            tr.querySelector(".remove-btn").onclick = () => {
                delete cart[item];
                updateTable();
            };

            tableBody.appendChild(tr);
        });

        totalAmount.innerText = "₹" + total;
    }

    selects.forEach(select => {
        select.addEventListener("change", function () {
            const selected = this.options[this.selectedIndex];
            if (!selected.value) return;

            const itemName = selected.text;
            const itemPrice = Number(selected.value);

            if (cart[itemName]) {
                cart[itemName].qty++;
            } else {
                cart[itemName] = { price: itemPrice, qty: 1 };
            }

            updateTable();

            this.selectedIndex = 0;
        });
    });
});


// =========================Smooth Scrolling=======================//

document.getElementById("order").addEventListener("click", function () {
    const nextSection = document.querySelector("#orders");
    nextSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("orderss").addEventListener("click", function () {
    const nextSection = document.querySelector("#orders");
    nextSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById('contacts').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
})




// ========================Reveals==========================//

const revealss = document.querySelectorAll('.reveals');

    const observers = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('actives');
            } else {
                entry.target.classList.remove('actives');
            }
        });
    }, { threshold: 0.2 });

    revealss.forEach(el => observer.observe(el));





    // =============================Email Confirmation=============================//

function sendOrderEmail() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let tableNo = document.getElementById("table").value;
    let address = document.getElementById("address").value;
    let payment = document.getElementById("pay").value;
    let customerEmail = document.getElementById("email").value;

    let rows = document.querySelectorAll("#serviceTable tbody tr");
    let orderList = "";

    rows.forEach((row, i) => {
        let cols = row.querySelectorAll("td");
        orderList += `${i + 1}. ${cols[1].innerText}  | Qty: ${cols[2].innerText.replace(/\D/g, '')}  | Price: ${cols[3].innerText}\n`;
    });

    let total = document.querySelector(".total-amount").innerText;

    emailjs.send("service_wj4t25z", "template_oboent5", {
        customer_name: name,
        customer_phone: phone,
        customer_table: tableNo,
        customer_address: address,
        payment_mode: payment,
        order_items: orderList,
        total_amount: total
    })
    .then(function() {

        emailjs.send("service_wj4t25z", "nmuvwag", {
            to_email: customerEmail,
            customer_name: name,
            order_items: orderList,
            total_amount: total
        })
        .then(function() {
            alert("Order placed successfully!");

            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("table").value = "";
            document.getElementById("address").value = "";
            document.getElementById("pay").value = "Select";
            document.getElementById("email").value = "";
            document.querySelector("#serviceTable tbody").innerHTML = "";
            document.querySelector(".total-amount").innerText = "₹0";
        });
        
    }, function(error) {
        alert("Error sending order: " + JSON.stringify(error));
    });
}
