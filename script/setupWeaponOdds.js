// import { Weapon } from './classes/weapon.js';

function drawWeaponOdds() {
    const weapons = Weapon.getAllWeapons();
    for (let weapon of weapons) {
        tempP = document.createElement("p");
        tempP.innerHTML = `Weapon: ${weapon.name} Odd: ${weapon.odd} %`;
        tempP.id = weapon.name;
        document.getElementById("weapon_section").appendChild(tempP);
    }
}

function updateWeaponOdds(weapon_name) {
    document.getElementById(weapon_name).innerHTML = `Weapon: ${weapon.name} Odd: ${weapon.odd} %`;
}

function increaseOdds(weapon_name) {
    weapon.odd += 10;
    updateWeaponOdds(weapon.name);
}

function decreaseOdds(weapon_name) {
    weapon.odd -= 10;
    updateWeaponOdds(weapon.name);
}