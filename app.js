var Player = (health, items, attacks, hits) => {
    this.helath = health
    this.items = [];
    this.attacks = attacks
    this.hits = hits
}

var Item = (name, mod, description) => {
    this.name = name
    this.mod = mod
    this.description = description
}

var Nacho = new Player(100, [], [slap, elCangrejoSubmission, anacondaSqueeze], 0);

var eaglePowers = new Item("Eagle Powers", 2, "Nacho Summons His Eagle Powers!")
var stretchyPants = new Item("Stretchy Pants", 2, "Nacho Wears His Stretchy Pants!")
var corn = new Item("Delicious Corn", 15, "Nacho Enjoys His Deliciuos Corn!")

Nacho.items.push(eaglePowers, stretchyPants, corn)

console.log(Nacho)

var Ramses = new Player(100, [], [slap, elCangrejoSubmission, anacondaSqueeze], 0);

var fancyOils = new Item("Facy Oils", 2, "Ramses Uses The Fancy Oils To Be Slick!")
var championsBelt = new Item("Champions Belt", 15, "Ramses Feels Revitalized Remembering that Ramses is Number Juan")
var chair = new Item("The Chair", 2, "Ramses is Handed The Chair From Under The Stage")

Ramses.items.push(chair, championsBelt, fancyOils)

console.log(Ramses)

var attacks = [slap, elCangrejoSubmission, anacondaSqueeze];

function slap(Nacho, Ramses) {
    Ramses.helath -= 1 * item.mod();
    Ramses.hits += 1
    if (Ramses.health < 0) {
        Ramses.health = 0
    }
    update()
}

function elCangrejoSubmission(Nacho, Ramses) {
    Ramses.helath -= 5 * item.mod();
    Ramses.hits += 1
    if (Ramses.health < 0) {
        Ramses.health = 0
    }
    update()
}

function anacondaSqueeze(Nacho, Ramses) {
    Ramses.helath -= 10 * item.mod();
    Ramses.hits += 1
    if (Ramses.health < 0) {
        Ramses.health = 0
    }
    update()
}

function RamsesChoices(min, max) {
    min = Math.ceil(1);
    max = Math.floor(11);
    return Math.floor(Math.random() * (11 - 1)) + 1;

}

function update() {
    document.getElementById("Nacho.health").innerText = Nacho.health;
    document.getElementById("Nacho.hits").innerText = Nacho.hits;
    document.getElementById("Ramses.health").innerText = Ramses.health;
    document.getElementById("Ramses.hits").innerText = Ramses.hits
    if (Nacho.health <= 0) {
        document.getElementsByClassName("buttons").innerHTML = "<h2> Im Sick Of Losing, I Wanna Win!! </h2>"
    }
    if (Ramses.health <= 0) {
        document.getElementsByClassName("buttons").innerHTML = "<h2> Its the Best!! </h2>"
    }
}
update()