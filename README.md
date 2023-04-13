# Project-2-Group-4
UCI coding bootcamp project 2 group 4


id
 <form action="/api/watchlist" method="post">
        <input type="hidden" name="user_id" value="{{user_id}}">
        <input type="hidden" name="movie_title" value="{{this.original_title}}">
        <input type="hidden" name="movie_id" value="{{this.id}}">
        <input type="submit" value="Add to Watchlist">
        </form>


         <img src="https://image.tmdb.org/t/p/w500/{{this.poster_path}}" alt="">