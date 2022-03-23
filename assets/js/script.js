// var APIKey = "AIzaSyAIfrYqV42vZikjEowH8Lh4CtsgCpKMQXI";
//var APIKey = "AIzaSyAcAK8zAbrh0XiEyVmDFtrqIEnY7N4Qrag";

var APIKey ="AIzaSyB4rCoMIg699n89bxSQSP47jsdkpRgXRJ4"
var userArrayArtist = JSON.parse(localStorage.getItem("Last Artist")) || [];
var userArraySong = JSON.parse(localStorage.getItem("Last Song")) || [];
var video = "";
$(document).ready(function () {

});
// This is what happens when you click the search button

function newSearch() {
    var userInputArtist = $("#searchArtist").val().trim();
    var userInputSong = $("#searchSong").val().trim();
    videoSearch(APIKey, userInputArtist + "+" + userInputSong, 3);
    lyricSearch();
    storeDataArtist();
    storeDataSong();
    $("#searchArtist").val("");
    $("#searchSong").val("");

};


// Function for searching videos using Youtube API

function videoSearch(key, search, maxResults) {
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
        console.log(data.items);
        data.items.forEach(function (item, index) {
           video = `
           <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
           $("#video" + (index + 1)).html(video);

       })
    })
};

// Function for searching lyrics using Lyrics OVH

function lyricSearch(artist, song) {
    var artist = $("#searchArtist").val().trim().replace(/ /g, '+');
    var song = $("#searchSong").val().trim().replace(/ /g, '+');

    $.get("https://api.lyrics.ovh/v1/" + artist + "/" + song, function (data) {
        $("#lyricsDisplay").html(data.lyrics.replace(new RegExp("\n", "g"), "<br>"));

        localStorage.setItem("Saved Lyrics", JSON.stringify(data));
    })
};

// Function for storing the artist name in local storage

function storeDataArtist() {
    var userInputArtist = $("#searchArtist").val().trim().replace(/ /g, '+');
    var containsSearch = false;

    if (userArrayArtist != null) {

        $(userArrayArtist).each(function (x) {
            if (userArrayArtist[x] === userInputArtist) {
                // containsSearch = true;
            }
        });
    }

    if (containsSearch === false) {
        userArrayArtist.push(userInputArtist)
    }

    localStorage.setItem("Last Artist", JSON.stringify(userArrayArtist));
    console.log(userArrayArtist);

};

// Function for storing the song name in local storage

function storeDataSong() {
    var userInputSong = $("#searchSong").val().trim().replace(/ /g, '+');
    var containsSearch = false;

    if (userArraySong != null) {

        $(userArraySong).each(function (x) {
            if (userArraySong[x] === userInputSong) {
                // containsSearch = true;
            }
        });
    }

    if (containsSearch === false) {
        userArraySong.push(userInputSong)
    }

    localStorage.setItem("Last Song", JSON.stringify(userArraySong));

};

// Event listener for the search button

$(".theButton").on("click", function (event) {
    event.preventDefault();
    newSearch();
    $('ul li:first-child').addClass("is-active");

});

// Event listener for Enter Key

$(".input artist-input").on("keyup", function (event) {
    if (event.keyCode === 13) {
        newSearch();
        $('.videos').css("display", "block");
        $('ul li:first-child').addClass("is-active");

    }
});
$(".input lyric-input").on("keyup", function (event) {
    if (event.keyCode === 13) {
        newSearch();
        $('.videos').css("display", "block");
        $('ul li:first-child').addClass("is-active");

    }
});
