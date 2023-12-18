

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx= document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
});



const music = new Audio('audio/1.mp3');
music.play();







const songs = [
    {
        id:'1',
        songName:` Perfect <br>
        <div class="subtitle">Ed Sheeran</div>`,
        Poster: "https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
    },
    {
        id:'2',
        songName:` Shape of you <br>
        <div class="subtitle">Ed Sheeran</div>`,
        Poster: "https://a10.gaanacdn.com/images/albums/52/1839852/crop_480x480_1839852.jpg"
    },
    {
        id:"3",
        songName: `All of the Stars <br>
        <div class="subtitle"> Ed Sheeran</div>`,
        Poster: "https://i.scdn.co/image/ab67616d0000b273f17ddc825889b0dd22798b9b",
    },
    {
        id:"4",
        songName: `Like My Father <br>
        <div class="subtitle">Jax</div>`,
        Poster: "https://musicindustryweekly.com/wp-content/uploads/2021/08/Jax-LMF-Press-Photo_MIW3.jpg",
    },
    {
        id:"5",
        songName: `Lover <br>
        <div class="subtitle">Taylor Swift</div>`,
        Poster: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
    },
    {
        id:"6",
        songName: `Love Story <br>
        <div class="subtitle">Taylor Swift</div>`,
        Poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Taylor_Swift_-_Love_Story.png",
    },
    {
        id:"7",
        songName: `Enna Solla Pogirai<br>
        <div class="subtitle">A.R.Rahman</div>`,
        Poster: "https://i.ytimg.com/vi/FBjZ-wf3U2s/sddefault.jpg",
    },
    {
        id:"8",
        songName: `Hukum <br>
        <div class="subtitle">Anirudh</div>`,
        Poster: "https://www.lyricsgoal.com/wp-content/uploads/2023/07/hukum-jailer.jpg",
    },
    {
        id:"9",
        songName: ` Aga Naga <br>
        <div class="subtitle">A.R.Rahman</div>`,
        Poster: "https://static.toiimg.com/thumb/msid-98816108,width-1280,resizemode-4/98816108.jpg",
    },
    {
        id:"10",
        songName: ` Mallipoo<br>
        <div class="subtitle">A.R.Rahman</div>`,
        Poster: "https://i.ytimg.com/vi/VWLxGtHO4PQ/hqdefault.jpg",
    },
    {
        id:"11",
        songName: `Hosanna <br><div class="subtitle">A.R.Rahman</div>`, 
        Poster: "https://c.saavncdn.com/880/Vinnathaandi-Varuvaayaa-Bafta-Tamil-2010-20190822134016-500x500.jpg",
    },
    {
        id:"12",
        songName: `Kaavaala <br><div class="subtitle">Anirudh</div>`,
        Poster: "https://images.mid-day.com/images/images/2023/jul/tam-rajini-kavala_d.jpg",
    },
    {
        id:"13",
        songName: `Hayooda <br><div class="subtitle">Anirudh</div>`,
        Poster: "https://pagalworld.cool/siteuploads/thumb/sft2/640_resize2x_200x200.webp",
    },
    {
        id:"14",
        songName: `Aradhya <br><div class="subtitle">Sid Sriram</div>`,
        Poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF_lG37gPzYdYH8iJRz3VOiY5F0hwku4ZzvHUXK4j7UVRSX9zs5TeAsIhj7uaUvelFSZmrwCCaj73A5esFSucrqf6TfjKmF4hgSfXl3F4LkxqOBNR5IeGL6w-JIY-hOc-xRBx5dE8CaCQADH5whin4kWfDBBzvIFwncIXlgBnOtSHKI4V8rnEHe-kN74S-/s640/aradhya-kushi-sid-sriram.jpg",
    },
    {
        id:"15",
        songName: `Mental Manadhil <br><div class="subtitle">A.R.Rahman</div>`,
        Poster: "https://a10.gaanacdn.com/gn_img/albums/Bp1bAnK029/p1bANjYAK0/size_l.jpg",
    },
    {
        id:"16",
        songName: `Nenjame <br><div class="subtitle">A.R.Rahman</div>`,
        Poster: "https://i.ytimg.com/vi/xvfDN_Ga2_M/maxresdefault.jpg",
    },
    {
        id:"17",
        songName: `Melliname <br><div class="subtitle">Harish Raghavendra</div>`,
        Poster: "https://i.ytimg.com/vi/vngkmkAjbmQ/hqdefault.jpg",
    },
    {
        id:"18",
        songName: `Nira <br><div class="subtitle">Sid Sriram</div>`,
        Poster: "https://i.ytimg.com/vi/4jTy5jnMkYc/maxresdefault.jpg",
    }
]


Array.from(document.getElementsByClassName('SongItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].Poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active2'); 
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        

    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        
    }
});



