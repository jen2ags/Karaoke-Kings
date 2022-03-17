// var APIKey = "AIzaSyAIfrYqV42vZikjEowH8Lh4CtsgCpKMQXI";
var APIKey = "AIzaSyAdV2wbcQnrRAYhPMUNa2fvWPog0KKf3Dk"
// var APIKey ="AIzaSyC06MD-KSKvZjt5u-g6QR7T2LZpXQclNs8"
// var APIKey = "AIzaSyAcAK8zAbrh0XiEyVmDFtrqIEnY7N4Qrag";


$(document).ready(function (){


// Function for searching lyrics

function lyricSearchPrueba (artist, song) {

    $.get("https://api.lyrics.ovh/v1/" + artist + "/" + song, function (data) {

        $("#lyricsDisplaySaved").html(data.lyrics.replace(new RegExp("\n", "g"), "<br>"));
        console.log(data.lyrics);
        localStorage.setItem("Saved Lyrics", JSON.stringify(data));
    })
};



// Event Listener for the artist button

$(".searchBtnArt").on("click", function(event){
    event.preventDefault();
    searchVideo($(this).data("artist") + $(this).data("song"));
    console.log($(this).data("song"));
});

// Event listener for the song button

$(".searchBtnSng").on("click", function(event){
    event.preventDefault();
    lyricSearchPrueba($(this).data("artist"), $(this).data("song"));
    console.log($(this).data("song"));
    console.log($(this).data("artist"));
});


});