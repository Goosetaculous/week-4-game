/**
 * Created by goosetaculous on 4/30/17.
 */
$(document).ready(function(){

    /**
     *
     * @param  - requested character
     * @returns {*} an object character or array of carachers
     */

    function setCharacters(rqst){
        var goku ={
            id     : "goku",
            attack : 20
        }
        var gohan ={
            id     : "gohan",
            attack : 15
        }
        var vegeta ={
            id     : "vegeta",

            attack : 25
        }
        var trunks ={
            id     : "trunks",
            attack : 12
        }
        var opponents = [goku,gohan,vegeta,trunks]
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
            case "opponents":
                return opponents
                break;
        }
    }

    /**
     *
     * @param player
     * @returns {contenders} -  array of opponents
     */

    function filterOpponents(player){
        var contenders = $.grep(setCharacters("opponents"), function(n,i){
            return (n.id !== player.id)
        })
        return contenders
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
    function opponentDefeated(health) {
        if(health <= 0){
           return true
        }
    }


    /**
     * set of on clicks to move the player to the arena
     */
    $("#goku").on("click",function(){
        var player = setCharacters("goku")
        var opponents = filterOpponents(player)

        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }

    })
    $("#gohan").on("click",function(){
        var player = setCharacters("gohan")
        var opponents = filterOpponents(player)

        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else  if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
    })
    $("#vegeta").on("click",function(){
        var player = setCharacters("vegeta")
        var opponents = filterOpponents(player)
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else  if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }

    })
    $("#trunks").on("click",function(){
        var player = setCharacters("trunks")
        var opponents = filterOpponents(player)
        if ($(".player-side").children().length == 0){
            $(this).appendTo(".player-side").addClass("player")
        }else if ($(".opponent-side").children().length == 0){
            $(this).appendTo(".opponent-side").addClass("opponent")
        }
    })

    $("button.attack").on("click", function(){
       //check first if both sides are filled with characters
        if(arenaIsFilled()){
            //Get the attribute of the children of the player side
            var player = setCharacters($(".player-side").children().attr('id'))
            var opponent = setCharacters($(".opponent-side").children().attr('id'))

            var playerHealth = parseInt($(".player-side").children().text())
            var opponentHealth = parseInt($(".opponent-side").children().text())
            $(".opponent-side div:eq(1)").html(opponentHealth-player.attack)

            if(opponentDefeated(parseInt(opponentHealth-player.attack))){
                $(".opponent-side").empty()


            }
            $(".player-side div:eq(1)").html(playerHealth-opponent.attack)
            

        }
    })
});