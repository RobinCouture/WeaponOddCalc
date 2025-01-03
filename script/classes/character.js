class Character {
    constructor(name, range_weapon, melee_weapon) {
        this.name = name;
        this.range_weapon = range_weapon;
        this.melee_weapon = melee_weapon;
        this.selected = false;
    }
}

export default Character;