 document.addEventListener("DOMContentLoaded", () => {
    
    const buyDropBtn = document.getElementById("buy-drop-btn");
    const dropOutput = document.getElementById("drop-result-output");

    if (buyDropBtn) {
        buyDropBtn.addEventListener("click", () => {
            const checkedBoxes = document.querySelectorAll(".drop-checkbox:checked");
            let items = [];
            
            checkedBoxes.forEach(box => {
                items.push(box.value);
            });

            if (!dropOutput) return;

            if (items.length === 0) {
                dropOutput.innerHTML = <p class="error-text">Будь ласка, оберіть хоча б одну річ перед купівлею.</p>;
            } else {
                dropOutput.innerHTML = `
                    <p class="success-title">✨ Твій персональний Дроп зібрано!</p>
                    <p class="success-details">До кошика додано: <strong>${items.join(", ")}</strong></p>
                `;
            }
        });
    }
});
    const buyDropBtn = document.getElementById("buy-drop-btn");
    const dropOutput = document.getElementById("drop-result-output");

    if (buyDropBtn) {
        buyDropBtn.addEventListener("click", () => {
            const checkedBoxes = document.querySelectorAll(".drop-checkbox:checked");
            let items = [];
            
            checkedBoxes.forEach(box => {
                items.push(box.value);
            });

            if (items.length === 0) {
                dropOutput.innerHTML = <p class="error-text">Будь ласка, оберіть хоча б одну річ перед купівлею.</p>;
            } else {
                dropOutput.innerHTML = `
                    <p class="success-title">✨ Твій персональний Дроп зібрано!</p>
                    <p class="success-details">До кошика додано: <strong>${items.join(", ")}</strong></p>
                `;
            }
        });
    }
const buyDropBtn = document.getElementById("buy-btn");
const modal = document.getElementById("orderModal");
const closeModalBtn = document.getElementById("close-modal-btn");
const selectedItemsList = document.getElementById("selected-items-list");
const orderNumberOutput = document.getElementById("order-number");

function generateOrderNumber() {
    const now = new Date();

    const datePart =
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0");

    const randomPart = Math.floor(1000 + Math.random() * 9000);

    return `ORD-${datePart}-${randomPart}`;
}


