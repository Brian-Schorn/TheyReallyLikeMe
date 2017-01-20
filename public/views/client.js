$(function(){
  console.log('document loaded');

  getInfo();
  $('#container').on('click', 'button', event, updateLikes);

});

//Requests data.json from the server, and runs displayInfo on success
function getInfo() {
  $.ajax({
    url: '/bios',
    type: 'GET',
    success: displayInfo
  });
}

//Appends the information in the data.json to the DOM in a readable format
  function displayInfo(info){
    console.log(info);
    var idVar = 0;
    info.forEach(function(person){
      $('#container').append("<li>Name: " + person.name);
      $('#container').append("Bio: " + person.bio);
      $('#container').append("<br>Likes: " + "<span id =" + person.name.replace(" ", "") + ">" + person.likes + "</span>   " + "<button class='like' data-name='" + person.name.replace(" ", "") + "' data-num='" + idVar +"'>Like!</button>");
      $('#container').append("<img src='./assets/" + person.imgURL + "' /></li>");
      idVar++;
      // $('#container').append("Likes: " + "<span id =" + person.name.replace(" ", "") + ">" + person.likes + "</span>   " + "<button class='like' data-name=" + person.name.replace(" ", "") + ">Like!</button>" + "</li>");
      // $('#container').append("<button class='like' data-name=" + person.name.replace(" ", "") + ">Like!</button>" + "</li>");
    });
    getLikes();
  }

//Requests an object from the /likes route, and send it to displayLikes
function getLikes() {
  $.ajax({
    url: '/likes',
    type: 'GET',
    success: displayLikes
  });
}

//Updates each persons like counter with the values from the object passed from getLikes
function displayLikes(likes) {
  console.log(likes);
  // console.log(Object.keys(likes).length);
  console.log(Object.values(likes)[0]);
  console.log(Object.keys(likes));
  // console.log(Object.keys(likes) [0].replace(" ", ""));
  for(var i=0; i < Object.keys(likes).length; i++){
    var name = Object.keys(likes)[i].replace(" ", "");
    $('#'+name).text(likes[name]);
    console.log("iteration");
  }
}


function updateLikes(event) {
  console.log("Button Clicked");
  console.log($(this).data("num"));
  $.ajax({
    url: '/likes/' + $(this).data("name"),
    type: 'POST',
    data: {id: $(this).data("num")},
    success: getLikes
  })
}
