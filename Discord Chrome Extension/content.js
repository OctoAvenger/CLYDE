var bckrndImg = "url(https://cdn.redshift.autodesk.com/sites/1/2013/04/Redshift-About-Feature.jpg)";
function findThing(){
    var foundElement = document.getElementsByClassName('appMount-14L89u');
    if(!foundElement[0]) { setTimeout(findThing, 250); } 
    else {
		foundElement[0].style.backgroundImage = bckrndImg; 
		foundElement[0].style.backgroundColor = "rgba(255, 0, 0, 0.15);";
		foundElement[0].style.backgroundSize = "cover";
    }
}
findThing();
