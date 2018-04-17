/* JAVASCRIPT FUNCTIONS ONLY */

// Replace Discord Background Image function
function replaceDiscordBackground(bgImage){
	
	// Identify discord background-element
    var backgroundElement = document.getElementById('app-mount');

    // If the background element doesn't exist, repeat the process after 250ms 
    if(!backgroundElement) {
    	setTimeout(replaceDiscordBackground, 250); 
    }
    else {
    	
    	// Set image
        backgroundElement.style.backgroundImage = bgImage;
        
        // Set transparency
        backgroundElement.style.backgroundColor = "rgba(255, 0, 0, 0.15);";

        // Set CSS background to cover
        backgroundElement.style.backgroundSize = "cover";
    }
}

// When user sets a new background image
function changeImage() {

	// Collect impage input
	var imageInput = document.getElementById('imageInput');
	
	// Replace image
    bgImage = "url(" + imageInput.value + ")";

    // Run function
    replaceDiscordBackground(bgImage);

}

/* RUN JAVASCRIPTS COMMANDS FROM HERE */

// Test image
var bgImage = "url(https://cdn.redshift.autodesk.com/sites/1/2013/04/Redshift-About-Feature.jpg )";

// Run the function the first time
replaceDiscordBackground(bgImage);

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function () {

	// Capture the button
	var button = document.getElementById('imageButton');

	// Attach event listener to button (of type "click", and route to function changeImage)
	button.addEventListener('click',changeImage);
});