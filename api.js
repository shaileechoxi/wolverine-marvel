
var PRIV_KEY = "452fd257a9f2b8ebe573df1526928bc8fc009ab9";
var PUBLIC_KEY = "9e95902727712ddaf558332011dd1279";

function getMarvelResponse() {

                                                                                 
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  var url = 'https://gateway.marvel.com:443/v1/public/characters/1009718';

  
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash
    })
    .done(function(data) {
      console.log(data);
      var characterName = data.data.results[0].name;
      var characterDes =  data.data.results[0].description;
      
      //Image
      var characterImg = {
        "images": [{
          "bannerImg1": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/portrait_uncanny.jpg"
          
        }]
      };
      characterImg.images.forEach( function(obj) {
        var img = new Image();
        img.src = obj.bannerImg1;
        img.setAttribute("class", "banner-img");
        img.setAttribute("alt", "effy");
        document.getElementById("fetchImage").appendChild(img);
      });

      //Name and Description
      var mainContainer = document.getElementById("fetchName");
      var div = document.createElement("div");
      div.setAttribute("class", "title");
      div.innerHTML = 'Hi' + ' ' + characterName  + ' ' + 'Here !!';
      mainContainer.appendChild(div);
      var div = document.createElement("div");
      div.setAttribute("class", "description");
      div.innerHTML = 'What people has to say about me: ' + characterDes;
      mainContainer.appendChild(div);
                 
    
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();
