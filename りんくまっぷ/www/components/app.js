// This is a JavaScript file
function showAddPersonDialog() {
    document.getElementById('dialog-overlay').style.display = 'flex';
}

function hideAddPersonDialog() {
    document.getElementById('dialog-overlay').style.display = 'none';
}

function updateDistanceValue() {
    const distance = document.getElementById('person-distance').value;
    document.getElementById('distance-value').innerText = distance;
}

function addPerson() {
    const name = document.getElementById('person-name').value;
    const distance = document.getElementById('person-distance').value;

    if (name === '') {
        alert('名前を入力してください');
        return;
    }

    const mapContainer = document.getElementById('map-container');

    const personCircle = document.createElement('div');
    personCircle.classList.add('person-circle');
    personCircle.style.top = `${Math.random() * 80 + 10}%`;
    personCircle.style.left = `${Math.random() * 80 + 10}%`;
    personCircle.textContent = name;

    mapContainer.appendChild(personCircle);

    hideAddPersonDialog();
}

function goBack() {
    alert('戻るボタンが押されました');
}

function createMap() {
    alert('作成ボタンが押されました');
}