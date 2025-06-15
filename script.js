
document.getElementById('ownsProperty').addEventListener('change', function () {
    const cityField = document.getElementById('cityField');
    cityField.style.display = this.value === 'نعم' ? 'block' : 'none';
});

document.getElementById('userInfoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('calcButton').addEventListener('click', function () {
    const area = parseFloat(document.getElementById('area').value);
    const level = parseFloat(document.querySelector('input[name="level"]:checked')?.value || 0);

    let total = 0;

    if (area && level) total += area * level;

    // مكيفات
    const ac12 = parseInt(document.getElementById('ac12').value || 0);
    const ac18 = parseInt(document.getElementById('ac18').value || 0);
    total += ac12 * 700 + ac18 * 875;

    // أجهزة كهربائية (نعم / لا)
    if (document.getElementById('fridge').value === 'نعم') total += 750;
    if (document.getElementById('washer').value === 'نعم') total += 500;
    if (document.getElementById('oven').value === 'نعم') total += 450;
    if (document.getElementById('dishwasher').value === 'نعم') total += 475;
    if (document.getElementById('tv').value === 'نعم') total += 750;

    // عرض الناتج
    document.getElementById('totalCost').innerText = `💰 التكلفة التقديرية: ${total.toLocaleString()} دولار`;
});
