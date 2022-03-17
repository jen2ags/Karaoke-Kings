// var APIKey = "AIzaSyAIfrYqV42vZikjEowH8Lh4CtsgCpKMQXI";
var APIKey = "AIzaSyAdV2wbcQnrRAYhPMUNa2fvWPog0KKf3Dk"
// var APIKey ="AIzaSyC06MD-KSKvZjt5u-g6QR7T2LZpXQclNs8"
// var APIKey = "AIzaSyAcAK8zAbrh0XiEyVmDFtrqIEnY7N4Qrag";
var userArrayArtist = JSON.parse(localStorage.getItem("Last Artist")) || [];
var userArraySong = JSON.parse(localStorage.getItem("Last Song")) || [];
var lastArtist = $("#lastSearches");
var lastSong = $("#lastSong");


$(document).ready(function () {

    // Function for creating the buttons of the last artist searched
    lastSearchArtist();
    lastSearchSong();



    // Function for creating the buttons of the last artist searched

    function lastSearchArtist() {
        lastArtist.empty()
        for (var i = 0; i < userArrayArtist.length; i++) {
            var newLi = $("<a>").attr("class", "secondary button searchBtnArt").attr("data-artist", userArrayArtist[i]).attr("data-song", userArraySong[i]);
            newLi.text(userArrayArtist[i]);
            lastArtist.prepend(newLi);
        }
    };

    // Function for creating the buttons of the last song searched

    function lastSearchSong() {
        lastSong.empty()
        for (var i = 0; i < userArraySong.length; i++) {
            var newLi2 = $("<a>").attr("class", "secondary button searchBtnSng").attr("data-song", userArraySong[i]).attr("data-artist", userArrayArtist[i]);
            newLi2.text(userArraySong[i]);

            lastSong.prepend(newLi2);
        }
    };

    // Function for searching lyrics
    function lyricSearchPrueba(artist, song) {

        $.get("https://api.lyrics.ovh/v1/" + artist + "/" + song, function (data) {

            $("#lyricsDisplaySaved").html(data.lyrics.replace(new RegExp("\n", "g"), "<br>"));
            console.log(data.lyrics);
            localStorage.setItem("Saved Lyrics", JSON.stringify(data));
        })
    };
    // Function for clearing local Storage and saved music

    function clearAll() {
        localStorage.clear();
        lastArtist.empty();
        lastSong.empty();
        $("#lyricsDisplaySaved").empty();

    };

    // Event Listener for the artist button

    $(".searchBtnArt").on("click", function (event) {
        event.preventDefault();
        searchVideo($(this).data("artist") + $(this).data("song"));
        console.log($(this).data("song"));
    });

    // Event listener for the song button

    $(".searchBtnSng").on("click", function (event) {
        event.preventDefault();
        lyricSearchPrueba($(this).data("artist"), $(this).data("song"));
        console.log($(this).data("song"));
        console.log($(this).data("artist"));
    });

    // Event listener for the clear button

    $("#clear").on("click", function (event) {
        event.preventDefault();
        clearAll();
    });
});
