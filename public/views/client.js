$(function(){
  console.log('document loaded');

  getInfo();

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
    info.forEach(function(person){
      $('#container').append("<li>Name: " + person.name + "</li>");
      $('#container').append("<li>Bio: " + person.bio + "</li>");
      $('#container').append("<li>Picture: " + person.imgURL + "</li>");
      $('#container').append("<li>Likes: " + person.likes + "</li>");
      $('#container').append("<li><button class='like'>Like!</button>" + "</li>");
    });
  }
