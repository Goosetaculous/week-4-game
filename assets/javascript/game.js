/**
 * Created by goosetaculous on 4/30/17.
 */
$(document).ready(function(){

    /**
     *
     * @param  - requested character
     * @returns {*} an object character or array of carachers
     */
    var saiyan=1
    var win=1

    function setCharacters(rqst){
        var goku ={
            id     : "goku",
            attack : 20
        }
        var gohan ={
            id     : "gohan",
            attack : 20
        }
        var vegeta ={
            id     : "vegeta",

            attack : 25
        }
        var trunks ={
            id     : "trunks",
            attack : 22
        }
        var broly ={
            id     : "broly",
            attack : 27
        }

        var krillin ={
            id     : "krillin",
            attack : 15
        }

        switch (rqst){
            case "goku":
                return goku
                break;
            case "gohan":
                return gohan
                break;
            case "vegeta":
                return vegeta
                break;
            case "trunks":
                return trunks
                break;
            case "krillin":
                return krillin
                break;
            case "broly":
                return broly
                break;

        }
    }



    /**
     * Check if the arena is filled with players
     * @returns {boolean}
     */

    function arenaIsFilled(){
        var isArenaFilled=false;
        if($(".player-side").children().length == 1 && $(".opponent-side").children().length == 1 ){
            isArenaFilled =  true
        }
        return isArenaFilled
    }

    /**
     * Check if opponent is eliminated
     * @param health
     * @returns {boolean}
     */
    function opponentDefeated(health) {
        if(health <= 0){
           return true
        }
    }

    /**
     * Show logs
     * @param player
     * @param enemy
     * @param attack
     */
    function attacklog(player,enemy, attack){
        $("#attack-log").html("<h3>" + player + " attacked "+ enemy +" with "+ attack +" power</h3>")
    }

    function counterlog(enemy,player,defend){
        $("#counter-attack-log").html("<h3>" + enemy + " countered  "+ player +" with counter attack of "+ defend +" power</h3>")
    }

    /**
     * restart the game
     */

    $(".restart").on("click", function(){
        location.reload();
    })

    /**
     * set of on clicks to move the player to the arena
     */
    $("#goku").on("click",function(){
        var player = setCharacters("goku")

        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#goku-health").show()

    })

    $("#broly").on("click",function(){
        var player = setCharacters("broly")
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#broly-health").show()
    })



    $("#gohan").on("click",function(){
        var player = setCharacters("gohan")

        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else  if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#gohan-health").show()
    })
    $("#vegeta").on("click",function(){
        var player = setCharacters("vegeta")
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else  if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#vegeta-health").show()


    })

    $("#krillin").on("click",function(){
        var player = setCharacters("vegeta")
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else  if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#krillin-health").show()

    })


    $("#trunks").on("click",function(){
        var player = setCharacters("trunks")
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
        $("#trunks-health").show()
    })

    $("button.attack").on("click", function(){
       //check first if both sides are filled with characters
        console.log(win)

        if(arenaIsFilled()){

            var player = setCharacters($(".player-side").children().attr('id'))
            var opponent = setCharacters($(".opponent-side").children().attr('id'))
            var playerHealth = parseInt($(".player-side").children().text())
            var opponentHealth = parseInt($(".opponent-side").children().text())

            $(".opponent-side div:eq(1)").html(opponentHealth-(player.attack*saiyan))

            attacklog(player.id,opponent.id,(player.attack*saiyan))

            if(opponentDefeated(parseInt(opponentHealth-(player.attack*saiyan)))){
                $(".opponent-side").empty()
                win++
                saiyan=saiyan*2
               if(win == 6){
                   $(".lost").html(player.id + " won")

               }
            }
            $(".player-side div:eq(1)").html(playerHealth-opponent.attack)
            counterlog(opponent.id,player.id,opponent.attack)


            if(opponentDefeated(parseInt(playerHealth-opponent.attack))){
                $(".player-side").empty()
                $("#lost").html("<h1>You're defeated by " + opponent.id+" </h1>")
                $(".attack").hide("slow")
                $(".restart").show("slow")
            }
        }
    })
});