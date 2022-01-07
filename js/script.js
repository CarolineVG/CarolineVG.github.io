var modal = ''

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

getTime()
window.setInterval(function(){
  getTime()
},5000);

function getTime() {
   var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes()
  document.getElementById("currentTime").innerHTML = time;
  document.getElementById("currentTimeSmartphone").innerHTML = time;
}

btnAbout = document.getElementById("aboutBtn");
btnSkills = document.getElementById("skillsBtn");
btnProjects = document.getElementById("ProjectsBtn");
btnProject1 = document.getElementById("project1Btn");
btnProject2 = document.getElementById("project2Btn");
btnProject3 = document.getElementById("project3Btn");
btnProject4 = document.getElementById("project4Btn");
btnProject5 = document.getElementById("project5Btn");
btnProject6 = document.getElementById("project6Btn");
btnProject7 = document.getElementById("project7Btn");
btnProject8 = document.getElementById("project8Btn");
btnProject9 = document.getElementById("project9Btn");
btnProject10 = document.getElementById("project10Btn");
btnProject11 = document.getElementById("project11Btn");
btnProject12 = document.getElementById("project12Btn");
  
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];
var span10 = document.getElementsByClassName("close")[9];
var span11 = document.getElementsByClassName("close")[10];
var span12 = document.getElementsByClassName("close")[11];
var span13 = document.getElementsByClassName("close")[12];
var span14 = document.getElementsByClassName("close")[13];
var span15 = document.getElementsByClassName("close")[14];
// aanpassen? 

btnAbout.onclick = function() {
  modal = document.getElementById("myAbout");
  document.getElementById("myAbout").style.display ="block";
}
btnSkills.onclick = function() {
  modal = document.getElementById("mySkills");
  document.getElementById("mySkills").style.display = "block";
}
btnProjects.onclick = function() {
  modal = document.getElementById("myProjects");
  document.getElementById("myProjects").style.display = "block";
}
btnProject1.onclick = function() {
  modal = document.getElementById("myProject1");
  document.getElementById("myProject1").style.display = "block";
}
btnProject2.onclick = function() {
  modal = document.getElementById("myProject2");
  document.getElementById("myProject2").style.display = "block";
}
btnProject3.onclick = function() {
  modal = document.getElementById("myProject3");
  document.getElementById("myProject3").style.display = "block";
}
btnProject4.onclick = function() {
  modal = document.getElementById("myProject4");
  document.getElementById("myProject4").style.display = "block";
}
btnProject5.onclick = function() {
  modal = document.getElementById("myProject5");
  document.getElementById("myProject5").style.display = "block";
}
btnProject6.onclick = function() {
  modal = document.getElementById("myProject6");
  document.getElementById("myProject6").style.display = "block";
}
btnProject7.onclick = function() {
  modal = document.getElementById("myProject7");
  document.getElementById("myProject7").style.display = "block";
}
btnProject8.onclick = function() {
  modal = document.getElementById("myProject8");
  document.getElementById("myProject8").style.display = "block";
}
btnProject9.onclick = function() {
  modal = document.getElementById("myProject9");
  document.getElementById("myProject9").style.display = "block";
}
btnProject10.onclick = function() {
  modal = document.getElementById("myProject10");
  document.getElementById("myProject10").style.display = "block";
}
btnProject11.onclick = function() {
  modal = document.getElementById("myProject11");
  document.getElementById("myProject11").style.display = "block";
}
btnProject12.onclick = function() {
  modal = document.getElementById("myProject12");
  document.getElementById("myProject12").style.display = "block";
}

span.onclick = function() {
  document.getElementById("myAbout").style.display = "none";
}
span2.onclick = function() {
  document.getElementById("mySkills").style.display = "none";
}
span3.onclick = function() {
  document.getElementById("myProjects").style.display = "none";
}
span4.onclick = function() {
  document.getElementById("myProject1").style.display = "none";
}
span5.onclick = function() {
  document.getElementById("myProject2").style.display = "none";
}
span6.onclick = function() {
  document.getElementById("myProject3").style.display = "none";
}
span7.onclick = function() {
  document.getElementById("myProject4").style.display = "none";
}
span8.onclick = function() {
  document.getElementById("myProject5").style.display = "none";
}
span9.onclick = function() {
  document.getElementById("myProject6").style.display = "none";
}
span10.onclick = function() {
  document.getElementById("myProject7").style.display = "none";
}
span11.onclick = function() {
  document.getElementById("myProject8").style.display = "none";
}
span12.onclick = function() {
  document.getElementById("myProject9").style.display = "none";
}

span13.onclick = function() {
  document.getElementById("myProject10").style.display = "none";
}

span14.onclick = function() {
  document.getElementById("myProject11").style.display = "none";
}

span15.onclick = function() {
  document.getElementById("myProject12").style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}