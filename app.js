var Player = function(health, attacks, hits) {
    this.health = health;
    this.items = [];
    this.attacks = attacks;
    this.hits = hits
}

var Item = function(name, mod, description) {
    this.name = name;
    this.mod = mod;
    this.description = description
}

var nacho = new Player(100, [slap, elCangrejoSubmission, anacondaSqueeze], 0);

var ramses = new Player(100, [slap, elCangrejoSubmission, anacondaSqueeze], 0);

var items = {
    eaglePowers: new Item("Eagle Powers", 2, "Nacho Summons His Eagle Powers!"),
    stretchyPants: new Item("Stretchy Pants", 1, "Nacho Wears His Stretchy Pants!"),
    corn: new Item("Delicious Corn", 15, "Nacho Enjoys His Deliciuos Corn!"),
    chair: new Item("The Chair", 1, "Ramses is Handed The Chair From Under The Stage!"),
    fancyOils: new Item("Facy Oils", .5, "Ramses Uses The Fancy Oils To Be Slick!"),
    championsBelt: new Item("Champions Belt", 15, "Ramses Feels Revitalized Remembering that He is Number Juan!")
}

// nacho.items.push(eaglePowers, stretchyPants, corn)
// ramses.items.push(chair, championsBelt, fancyOils)

var attacks = [slap, elCangrejoSubmission, anacondaSqueeze];

function slap(ramses) {
    ramses.health -= 1 * this.addPowers() * this.addRamsesPowers();
    ramses.hits += 1
    if (ramses.health < 0) {
        ramses.health = 0
    }
    update()
}

function elCangrejoSubmission(ramses) {
    ramses.health -= 5 * this.addPowers() * this.addRamsesPowers();
    ramses.hits += 1
    if (ramses.health < 0) {
        ramses.health = 0
    }
    update()
}

function anacondaSqueeze(ramses) {
    ramses.health -= 10 * this.addPowers() * this.addRamsesPowers();
    ramses.hits += 1
    if (ramses.health < 0) {
        ramses.health = 0
    }
    update()
}

function eaglePowers(player) {
    nacho.items.push(items.eaglePowers)
}

function stretchyPants(player) {
    nacho.items.push(items.stretchyPants)
}

function chair(ramses) {
    ramses.items.push(items.chair)
}

function fancyOils(player) {
    ramses.items.push(items.fancyOils)
}

function addPowers(player) {
    let modTotal = 1
    for (let i = 0; i < nacho.items.length; i++) {
        const total = nacho.items[i].mod;
        modTotal = modTotal * total
    }
    return modTotal
}

function addRamsesPowers(player) {
    let modTotal = 1
    for (let i = 0; i < ramses.items.length; i++) {
        const total = ramses.items[i].mod;
        modTotal = modTotal * total
    }
    return modTotal
}

// function ramsesChoices(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(11);
//     return Math.floor(Math.random() * (11 - 1)) + 1;

// }

function update() {
    document.getElementById("nacho.health").innerText = nacho.health;
    document.getElementById("nacho.hits").innerText = nacho.hits;
    document.getElementById("ramses.health").innerText = ramses.health;
    document.getElementById("ramses.hits").innerText = ramses.hits
    if (nacho.health <= 0) {
        document.getElementsByClassName("btn-defaut").innerHTML = "<h2> Im Sick Of Losing, I Wanna Win!! </h2>"
    }
    if (ramses.health <= 0) {
        document.getElementsByClassName("btn-default").innerHTML = "<h2> Its the Best!! </h2>"
    }
}
update()