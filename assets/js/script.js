<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--bulma styling-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <!--google fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora&family=Sansita+Swashed&display=swap" />
    <!--link to css stylesheet-->
    <link rel="stylesheet" href="assets\css\style.css" />
    <title>Karaoke Kings/Your Library</title>
</head>

<body>
    <header>
        <div>
            <button class="button is-primary mx-3 my-3">
                <a class="homepage" href="homepage.html">← Back to Homepage</a>
            </button>
        </div>
    </header>
    <!--title and header for My Library-->
    <section class="mx-5 my-6 has-text-centered">
        <h1 class="title">Your Karaoke Library</h1>
        <p class="description mx-5 my-6">All of your recent karaoke hits in your own personal library.</p>
        <!--button to clear my library-->
        <button class="button is-danger is-medium" id="clear">Clear My Library</button>
    </section>

    <!--containers for rach of the recent searches with a button to link to the video and lyrics-->
    <section class="favorites has-text-centered mx-6 my-6">
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">
                <div class="columns">
                    Artist:
                    <ul id="lastSearches" style="display: inline-grid;">
                        <!-- Last Searches Goes Here -->
                    </ul>
                </div>

                <div class="columns">
                    Song:
                    <ul id="lastSong" style="display: inline-grid;">
                        <!-- Last Searches Goes Here -->

                    </ul>
                </div>
            </div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #2</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #3</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #4</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #5</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #6</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #7</div>
        </button>
        <button class="container is-fluid my-2 px-4 py-4">
            <div class="song">Favorite #8</div>
        </button>
    </section>

    <div class="columns">
        <div id="lyricsDisplaySaved" style="display: inline-grid;">
            <!-- Lyrics goes here -->

        </div>
    </div>
    <!-- Footer Section -->
    <footer class="footer">
        <div class="content has-text-centered is-small">
            <p> &copy; 2022 | Built with &#128420; by Cheryl Cruz, Mason Urrabas, and Jennifer Jennings</p>
        </div>
    </footer>
    <div class="columns">
        <div id="lyricsDisplaySaved" style="display: inline-grid;">
            <!-- Lyrics goes here -->

        </div>
    </div>
    <!--JQuery link-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!--link to the javascript-->
    <script src="assets\js\script.js"></script>
    <script src="assets\js\savedScript.js"></script>
</body>

</html>
