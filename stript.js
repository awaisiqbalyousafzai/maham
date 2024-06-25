document.getElementById('quantity').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const rate = 200 / 100; // 200 PKR per 100 products
    const totalAmount = quantity * rate;
    document.getElementById('total-amount').value = totalAmount + ' PKR';
});
