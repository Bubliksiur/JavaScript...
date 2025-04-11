const skrzynia = document.getElementById('skrzynia');
const txt = document.getElementById('txt');
const saldo = document.getElementById('saldo');
const Sell = document.getElementById('Sell');
const keep = document.getElementById('keep');
const bronieKtorePosiada = document.getElementById('wepons');

// Tablica, która będzie przechowywać posiadane bronie
const posiadaneBronie = [];

let currentBalance = 0;
saldo.textContent = `Saldo: ${currentBalance}`;

let selectedWeapon = null;

skrzynia.addEventListener('click', () => {
    const randomWeapon = Chest.pesChest();
    selectedWeapon = randomWeapon;
    txt.textContent = `Wylosowana broń: ${randomWeapon.name}, Koszt: ${randomWeapon.cost}`;
    Sell.style.display = 'flex';
    keep.style.display = 'flex';
});

Sell.addEventListener('click', () => {
    if (selectedWeapon) {
        currentBalance += selectedWeapon.cost;
        saldo.textContent = `Saldo: ${currentBalance}`;
        // Ukrywanie przycisków po sprzedaży
        Sell.style.display = 'none';
        keep.style.display = 'none';
    }
});

keep.addEventListener('click', () => {
    if (selectedWeapon) {
        // Dodajemy wybraną broń do posiadanych broni
        posiadaneBronie.push(selectedWeapon);
        // Zaktualizowanie listy posiadanych broni
        bronieKtorePosiada.textContent = `Bronie: ${posiadaneBronie.map(weapon => weapon.name).join(', ')}`;
    }
    // Ukrywanie przycisków po zachowaniu broni
    Sell.style.display = 'none';
    keep.style.display = 'none';
});

const Wepons = {
    Karambit: {
        id: 1,
        name: 'Karambit',
        cost: 1000
    },
    Motylkowy: {
        id: 2,
        name: 'Noż motylkowy',
        cost: 1200
    },
    AK47: {
        id: 3,
        name: 'AK47',
        cost: 350
    },
    M4A4: {
        id: 4,
        name: 'M4A4',
        cost: 200
    },
    USPS: {
        id: 5,
        name: 'USPS',
        cost: 80
    }
};

const Chest = {
    pesChest: function openChest() {
        const weaponKeys = Object.keys(Wepons);
        const randomIndex = Math.floor(Math.random() * weaponKeys.length);
        const randomWeaponKey = weaponKeys[randomIndex];
        const randomWeapon = Wepons[randomWeaponKey];

        return randomWeapon;
    }
};
