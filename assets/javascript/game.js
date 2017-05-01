/**
 * Created by goosetaculous on 4/30/17.
 */
$(document).ready(function(){

    $("#go-ku").draggable({
        revert: "true",
        snap: ".player-side",
        stack: "#go-ku",
        appendTo: "player-side",

    })



    $('.player-side').droppable({
        drop: function( event, ui ) {
        $(this).addClass( "player-set" )
    }
    })
    $('.opponent-side').droppable({

        drop: function( event, ui ) {
            $(this).addClass( "enemy-set" )
        }
        }

    )

});