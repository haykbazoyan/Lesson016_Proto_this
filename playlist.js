function Playlist() {
  this.list = [];
  this.index = 0;
  this.add = (songName) => {
    this.list.push(songName);
  };

  this.play = () => {
    return `${this.list[this.index][0]}  started to play`;
  };
  this.next = () => {
    if (this.index === this.list.length - 1) {
      this.index = 0;
      return `${this.list[this.list.length - 1][0]} stopped, ${
        this.list[this.index][0]
      } started to play`;
    }
    this.index += 1;
    return `${this.list[this.index - 1][0]}  stopped, ${
      this.list[this.index][0]
    } started`;
  };
  //this.prev = () => {};
  this.stop = () => {
    return `${this.list[this.index][0]}  stopped`;
  };
}

function Song(track, group) {
  this.track = track;
  this.group = group;
  return [this.track, this.group];
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
