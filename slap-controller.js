function SlapController() {

    //private
    var slapService = new slapService()

    function draw() {
        var helathElem = document.getElementById('health')
        healthElem.innerHTML = slapService.getHealth()
    }


    //public
    this.giveItem = function giveItem(itemType) {
        slapService.giveItem(itemType)
    }

    this.attack = function attack(attackType) {
        slapService.attack(attackType)
        draw()
    }
    this.reset = function reset() {
        slapService.reset()
        draw()
    }
}