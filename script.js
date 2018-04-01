$(document).ready(function () {   // Load the function after DOM ready.

  console.log('You are being pranked!');
  var heheSrc = "http://babylonradio.com/wp-content/uploads/2016/04/april-fool-22v.jpg";
  $('img').each(function () {
    var h = $(this).attr('height') || 100;
    var w = $(this).attr('width') || 100;
    console.log(h, w, $(this).attr('id'));
    $(this).replaceWith(`<img src='${heheSrc}' height='${h}px' width='${w}px'>`)
  });


  var clicked = 0;
  var modelCasualTalks = ['Yeah!', 'We just clicked !', 'You are doing great', 'That tickles me', 'wait..wait.. yeah go ahead', 'Just kidding', 'I hate you..I Love you', 'Just right there!'];
  var modelAtLastButOne = ["No no..Not that!!"]
  var modalText = 'text';
  var modalElement = `<div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content text">
          <p>${modalText}</p>
        </div>
      </div>`;
  $('body').append(modalElement);
  $('body').click(function (e) {
    clicked += 1;
    modalText = modelCasualTalks[(Math.floor(Math.random() * modelCasualTalks.length)) % modelCasualTalks.length];
    var emojis = [';)', ':)', ':D', ':*', ':O', 'B)'];
    var emojiLast = [':('];
    var emoji = emojis[(Math.floor(Math.random() * emojis.length)) % emojis.length];
    if (clicked > 10) {
      modalText = modelAtLastButOne[0];
      emoji = emojiLast[0];
      setTimeout(function () { $('body').removeAttr('style').html('<img src="https://image.ibb.co/byWcEv/rtaImage.jpg">').css('text-align', 'center').css('margin', '125px'); }, 2500);
    }

    $('#myModal').replaceWith(`<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="container">
        <div class="one">${emoji}
        <p class="text">${modalText}</p>
      </div>
      </div>
    </div>
  </div>`);
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    window.setTimeout(function () {
      modal.style.display = "none";
    }, 3000)
  });


  window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});