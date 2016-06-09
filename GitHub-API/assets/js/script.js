$(function(){
   'use strict';



   $.getJSON("https://api.github.com/users/gturmel", function(json) {

     var profilePic = _.template('<img src = <%- m.pic %> ></img>', {variable: 'm'});
     var userPic = profilePic({ pic: json.avatar_url });
     $(".profile-pic").append(userPic);

   });
//merge these two sections, since they both pull from the /users/username url
   $.getJSON( "https://api.github.com/users/gturmel", function( json ) {
      // $(".my-name").html(json.name);//The Octocat
      // $(".user-name").html(json.login);
      // $(".company").html(json.company);
      // $(".location").html( json.location );
      $(".email").html(json.email);
      $(".website").html(json.html_url);
      $(".date-joined").html(json.created_at);
      // $(".followers").html(json.followers);
      // $(".starred").html(json.starred_url);
      $(".following").html(json.following);

      var userName = _.template('<%- m.name %>', {variable: 'm'});
      var ghUserName = userName({ name: json.name});
      $(".my-name").html(ghUserName);

      var signIn = _.template('<%- m.login %>', {variable: 'm'});
      var ghSignIn = signIn({ login: json.login});
      $(".user-name").html(ghSignIn);

      var companyName = _.template('<%- t.company %>', {variable: 't'});
      var ghCompany = companyName({ company: json.company});
      $(".company").html(ghCompany);

      var locationName = _.template('<%- m.location %>', {variable: 'm'});
      var ghLocation = locationName({ location: json.location});
      $(".location").html(ghLocation);

   });

// This populates the contributions tab
   $.getJSON("https://api.github.com/users/gturmel/repos", function(json){

      for(var i=0; i<5; i++){
        var repoName = _.template('<a href="<%-m.html_url%>"> <%-m.name%></a>', {variable: 'm'});
        var ghRepoName = repoName({name: json[i].name, html_url: json[i].html_url});
        $(".contributions").append('<li><span class = "octicon octicon-repo"></span>' + ghRepoName + '</li>');

      };
   });

   function sortByProperty(key) {
    'use strict';
    return function (a, b) {
       var sortStatus = 0;
       if (a[key] < b[key]) {
           sortStatus = -1;
       } else if (a[key] > b[key]) {
           sortStatus = 1;
       }
       return sortStatus;
    };
  }

  //  This populates the Repositories tab
  $.getJSON("https://api.github.com/users/gturmel/repos", function(json){

      for(var i=0; i<10; i++){
        var repoTabRepo = _.template('<a href="<%-m.html_url%>"> <%-m.name%></a> <%-m.description%> <%-m.stargazers_count%>',
        {variable: 'm'});
        var ghrepoTabRepo = repoTabRepo({name: json[i].name, html_url: json[i].html_url});
        var ghRepoDescription = repoTabRepo({description: json[i].description});
        var ghStars = repoTabRepo({stargazers_count: json[i].stargazers_count});
        $(".all-repos").append('<li>' + ghrepoTabRepo + '<br><span class="repositories-description">' + ghRepoDescription + '</span>' + '<span class = "octicon octicon-star" id = "stars">' + ghStars + '</li>');
      };

    });

    $.getJSON("https://api.github.com/users/gturmel/events", function(json){

      for (var i = 0; i < 5; i++){
        $(".public-activity").append('<li>' + '<img src ="(json[i].avatar_url)"></img>' + '<span class = "event-time">' + (json[i].created_at) + '</span>' + (json[i].type) + '<span class = "event-body">' + (json[i].body) + '</span' + '</li>');
      }

    });

    // ********** tab clicking JS

    var selectTab = function(tab){
      $("h1").css ('border-color', 'transparent');//make all tab borders transparent
      $("h1").css ('border-bottom-color', '#ddd');//make bottom borders of all tabs gray
      (tab).css ('border-color', '#ddd');//make borders of tab clicked on gray
      (tab).css ('border-bottom-color', 'transparent');//make bottom of tab clicked on transparent
    };


    $(".tab-nav").on("click", "h1", function(){
      selectTab($(this));
      $(".tab-content").hide();
      if($(this).hasClass("one")){
        $("#one").show();
      }
      if($(this).hasClass("two")){
        $("#two").show();
      }
      if($(this).hasClass("three")){
        $("#three").show();
      }
    });

   selectTab($("#initially-open"));
   $("#one").show();
   $("#two").hide();
   $("#three").hide();

   //calls the function selectTab on the element with id "initially-open". The page needs to load with one "tab" "open"

// content control when a tab is clicked

$(".tab-content").on("click", function(){
  $(".tab-content").hide
});


});
