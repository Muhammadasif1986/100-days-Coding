// Question 40: Album: Create objects for music albums.
//1st method
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album2("Artist One", "the second Album"));
console.log(make_album2('undefined', "The Second Album"));
console.log(make_album2("Artist Three", "The Third Album", 12));
// 2nd Method
function make_album2(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album2("Artist One", "the second Album"));
console.log(make_album2('undefined', "The Second Album"));
console.log(make_album2("Artist Three", "The Third Album", 12));
