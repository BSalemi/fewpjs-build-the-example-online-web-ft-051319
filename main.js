// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll('.like')
console.log(hearts)
console.log(FULL_HEART)
// Your JavaScript code goes here!

hearts.forEach(heart => {
    heart.addEventListener('click', function(e) {
    if(e.target.innerHTML === EMPTY_HEART){
      mimicServerCall()
        .then((resp) => {
          let heartEmoji = heart.querySelector('.like-glyph');
          heartEmoji.innerHTML = FULL_HEART;
          heartEmoji.className = "activated-heart";
        })
        .catch(() => {
         let hiddenDiv = document.getElementById("modal")
         hiddenDiv.className = ""
         setTimeout(function(){hiddenDiv.classname = "hidden"}, 5000)
        })
    } else if (e.target.innerHTML === FULL_HEART){
      let heartEmoji = heart.querySelector('.activated-heart');
          heartEmoji.innerHTML = EMPTY_HEART;
          heartEmoji.className = "like-glyph";
    }
  }
);
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
