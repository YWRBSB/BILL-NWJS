window.start_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
    }
    window.end_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
    }
    window.onload = function() {
        setTimeout(() => {
            end_loader()
            }, 500)
            // get data from the form
            const billForm = document.getElementById('calculate-bill')
            billForm.addEventListener('submit', function(e) {
            e.preventDefault()
            start_loader();
            const units = document.getElementById('units').value;
            const vat = document.getElementById('vat').value;
            const period = document.getElementById('period').value;
            
            flatRate = 0.20, // flat rate of 0.20 cents per unit
            sCharge = 0.04;  // price of 0.04 cents per day
            
            totalWithoutVat = units * flatRate + period * sCharge; // calculate the bill without VAT
            totalPlusVat = totalWithoutVat + totalWithoutVat * vat /100; // total of the bill incl. VAT
            setTimeout(() => {
            
            document.getElementById('total-out-vat').textContent = "€ " + totalWithoutVat.toFixed(2) // Rounded values up to 2 decimal places
            document.getElementById('total-plus-vat').textContent = "€ "+ totalPlusVat.toFixed(2)
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
            }, 500)
        })
        billForm.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
       
        document.getElementById('units').textContent = ""
        document.getElementById('vat').textContent = ""
        document.getElementById('period').textContent = ""     
        document.getElementById('total-out-vat').textContent = ""
        document.getElementById('total-plus-vat').textContent = ""
        document.getElementById('result').style.display = 'none';
        document.getElementById('reset-btn').style.display = 'none';
        end_loader()
    }, 500)
})
}