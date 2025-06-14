// Placeholder JS file

function openVendorModal(vendorName) {
    document.getElementById('vendorTitle').innerText = 'Order from ' + vendorName;
    document.getElementById('vendorModal').style.display = 'block';
    updateOrderTotal();
}

function closeVendorModal() {
    document.getElementById('vendorModal').style.display = 'none';
}




function updateOrderTotal() {
    let total = 0;

    // Base item quantities (e.g. Banku)
    document.querySelectorAll('.qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        total += qty * price;
    });

    // Add-on quantities
    document.querySelectorAll('.addon-qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        total += qty * price;
    });

    // Main optional items with toggle
    document.querySelectorAll('.main-addon-toggle').forEach(toggle => {
        const input = toggle.nextElementSibling.nextElementSibling;
        if (toggle.checked) {
            const qty = parseInt(input.value || 0);
            const price = parseFloat(input.dataset.price);
            total += qty * price;
        }
    });

    // Toggle Yes/No option like Okro
    const okroSelect = document.querySelector('.toggle-option');
    if (okroSelect && okroSelect.value === 'Yes') {
        const okroPrice = parseFloat(okroSelect.dataset.price || 0);
        total += okroPrice;
    }

    document.getElementById('orderTotal').innerText = 'GHS ' + total.toFixed(2);
}
);

    // Add-on quantities
    document.querySelectorAll('.addon-qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        total += qty * price;
    });

    // Main optional items with toggle
    document.querySelectorAll('.main-addon-toggle').forEach(toggle => {
        const input = toggle.nextElementSibling.nextElementSibling;
        if (toggle.checked) {
            const qty = parseInt(input.value || 0);
            const price = parseFloat(input.dataset.price);
            total += qty * price;
        }
    });

    document.getElementById('orderTotal').innerText = 'GHS ' + total.toFixed(2);
}
);

    // Addon item quantities
    document.querySelectorAll('.addon-qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        total += qty * price;
    });

    document.getElementById('orderTotal').innerText = 'GHS ' + total.toFixed(2);
}
);
    document.getElementById('orderTotal').innerText = 'GHS ' + total.toFixed(2);
}



function confirmVendorOrder() {
    const summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = "";

    let total = 0;

    document.querySelectorAll('.qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        if (qty > 0) {
            const itemName = input.previousElementSibling.textContent.split('(')[0].trim();
            const cost = qty * price;
            total += cost;
            summaryList.innerHTML += `<li>${itemName} x${qty} - GHS ${cost.toFixed(2)}</li>`;
        }
    });

    document.querySelectorAll('.addon-qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        if (qty > 0) {
            const itemName = input.previousElementSibling.textContent.split('(')[0].trim();
            const cost = qty * price;
            total += cost;
            summaryList.innerHTML += `<li>${itemName} x${qty} - GHS ${cost.toFixed(2)}</li>`;
        }
    });

    document.querySelectorAll('.main-addon-toggle').forEach(toggle => {
        const input = toggle.nextElementSibling.nextElementSibling;
        const label = toggle.nextElementSibling.textContent.split('(')[0].replace('Include ', '').trim();
        if (toggle.checked) {
            const qty = parseInt(input.value || 0);
            const price = parseFloat(input.dataset.price);
            if (qty > 0) {
                const cost = qty * price;
                total += cost;
                summaryList.innerHTML += `<li>${label} x${qty} - GHS ${cost.toFixed(2)}</li>`;
            }
        }
    });

    const okroSelect = document.querySelector('.toggle-option');
    if (okroSelect && okroSelect.value === 'Yes') {
        const price = parseFloat(okroSelect.dataset.price);
        total += price;
        summaryList.innerHTML += `<li>Okro - GHS ${price.toFixed(2)}</li>`;
    }

    const instructions = document.getElementById('specialInstructions')?.value;
    if (instructions) {
        summaryList.innerHTML += `<li><em>Instructions:</em> ${instructions}</li>`;
    }

    document.getElementById('summaryTotal').innerText = 'GHS ' + total.toFixed(2);
    document.getElementById('vendorModal').style.display = 'none';
    document.getElementById('orderSummary').style.display = 'block';
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('input', updateOrderTotal);
    });
});


document.querySelectorAll('.addon-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateOrderTotal);
});

function updateOrderTotal() {
    let total = 0;

    // Add up base item quantities
    document.querySelectorAll('.qty-input').forEach(input => {
        const qty = parseInt(input.value || 0);
        const price = parseFloat(input.dataset.price);
        total += qty * price;
    });

    // Add checked add-ons
    document.querySelectorAll('.addon-checkbox:checked').forEach(checkbox => {
        const price = parseFloat(checkbox.dataset.price);
        total += price;
    });

    document.getElementById('orderTotal').innerText = 'GHS ' + total.toFixed(2);
}


document.querySelectorAll('.addon-qty-input').forEach(input => {
    input.addEventListener('input', updateOrderTotal);
});


document.querySelectorAll('.main-addon-toggle').forEach(toggle => {
    toggle.addEventListener('change', updateOrderTotal);
});
document.querySelectorAll('.main-addon-qty').forEach(input => {
    input.addEventListener('input', updateOrderTotal);
});


function placeFinalOrder() {
    alert('Order placed successfully! You will be contacted shortly.');
    document.getElementById('orderSummary').style.display = 'none';
}
