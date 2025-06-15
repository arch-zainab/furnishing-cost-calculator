
document.getElementById('ownsProperty').addEventListener('change', function () {
    const cityField = document.getElementById('cityField');
    cityField.style.display = this.value === 'نعم' ? 'block' : 'none';
});

document.getElementById('userInfoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});
