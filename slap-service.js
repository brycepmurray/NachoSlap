function SlapService() {
    //private
    function Player(name, health, slap, punch, kick) {
        this.name = name
        this.health = health
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick
        }
        this.hits = 0
        this.items = []
    }

    var players = {
        nacho: new Player("Nacho", 100, 1, 5, 10),
        ramses: new Player("Ramses", 100, 1, 5, 10)
    }

    function Item(name, mod, description) {
        this.name = name;
        this.mod = mod;
        this.description = description;
    };

    var items = {
        eaglePowers: new Item("Eagle Powers", 2, "Nacho Summons His Eagle Powers!"),
        stretchyPants: new Item("Stretchy Pants", 1, "Nacho Wears His Stretchy Pants!"),
        corn: new Item("Delicious Corn", 15, "Nacho Enjoys His Deliciuos Corn!"),
        chair: new Item("The Chair", 1, "Ramses is Handed The Chair From Under The Stage!"),
        fancyOils: new Item("Facy Oils", .5, "Ramses Uses The Fancy Oils To Be Slick!"),
        championsBelt: new Item("Champions Belt", 15, "Ramses Feels Revitalized Remembering that He is Number Juan!")
    };

    function addPowers(players) {
        let modTotal = 1
        for (let i = 0; i < players[nacho].items.length; i++) {
            const total = players[nacho].items[i].mod;
            modTotal = modTotal * total
        }
        return modTotal
    };

    function addRamsesPowers(player) {
        let modTotal = 1
        for (let i = 0; i < players[ramses].items.length; i++) {
            const total = players[ramses].items[i].mod;
            modTotal = modTotal * total
        }
        return modTotal
    };

    //public

    this.attack = function attack(player, attackType) {
        player.health -= player.attacks[attackType] * addPowers()
    }

    this.giveItem = function giveItem(player, itemType) {
        player.items.push(items[itemType])
    }

    this.reset = function reset() {
        players[health] = 100
        players[hits] = 0
    }

    this.getHealth = function getHealth(players) {
        return players.health
    }

}