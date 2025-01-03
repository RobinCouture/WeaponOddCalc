export class Weapon {

    constructor(name, type, odds) {
        this.name = name;
        this.type = type;
        this.odds = odds;
    }

    static weapons = new Map();
    static range_weapons = new Map();
    static melee_weapons = new Map();

    static getAllWeapons() {
        if (weapons.size > 0) {
            return weapons;
        } else {
            weapons.set("Knife", new Weapon("Knife", "melee", 0));
            weapons.set("Longsword", new Weapon("Longsword", "melee", 0));
            weapons.set("Shield", new Weapon("Shield", "melee", 0));
            weapons.set("Dual Swords", new Weapon("Dual Swords", "melee", 0));
            weapons.set("Javelin", new Weapon("Javelin", "melee", 0));
            weapons.set("Photon Saber", new Weapon("Photon Saber", "melee", 0));
    
            weapons.set("Assault Rifle", new Weapon("Assault Rifle", "range", 0));
            weapons.set("Gatling Gun", new Weapon("Gatling Gun", "range", 0));
            weapons.set("Dual Guns", new Weapon("Dual Guns", "range", 0));
            weapons.set("Sniper Rifle", new Weapon("Sniper Rifle", "range", 0));
            weapons.set("Raygun", new Weapon("Raygun", "range", 0));
            weapons.set("Psycho Launchers", new Weapon("Psycho Launchers", "range", 0));
    
            return weapons;
        }
    }

    static getMeleeWeapons() {
        if (melee_weapons.size > 0) {
            return melee_weapons;
        } else {
            melee_weapons = this.getAllWeapons().filter(weapon => weapon.get(weapon.name).type === "melee");
            return melee_weapons;
        }
    }

    static getRangeWeapons() {
        if (range_weapons.size > 0) {
            return range_weapons;
        } else {
            range_weapons = this.getAllWeapons().filter(weapon => weapon.get(weapon.name).type === "range");
            return range_weapons;
        }
    }

    get name() {
        return this.name;
    }

    get type() {
        return this.type;
    }

    get odds() {
        return this.odds;
    }

    set name(name) {
        this.name = name;
    }

    set type(type) {
        this.type = type;
    }

    set odds(odds) {
        this.odds = odds;
    }

}

// export default Weapon;
// export { getAllWeapons, getMeleeWeapons, getRangeWeapons };