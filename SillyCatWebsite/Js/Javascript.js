/*Arrays*/
const catpics = [
    '<img src="Cats/CYAcat.png" alt="number1cat" width="500px">',
    '<img src="Cats/Handcat.png" alt="number2cat" width="500px">',
    '<img src="Cats/Gigachad_cat.jpg" alt="number2cat" width="500px">',
    '<img src="Cats/Suicidecat.webp" alt="number2cat" width="500px">',
    '<img src="Cats/WarCat.jpg" alt="number2cat" width="500px">',
    '<img src="Cats/Goofyahhcat.jpg" alt="number2cat" width="500px">',
    '<img src="Cats/Disgingusihedcat.png" alt="number2cat" width="500px">',
    '<img src="Cats/oia-uia cat.gif" alt="number2cat" width="500px">'
];


const sounds = [
    new Audio("Sounds/HUH.mp3"),
    new Audio("Sounds/LeaveSound.mp3"),
    new Audio("Sounds/Rizz.mp3"),
    new Audio("Sounds/USSR.mp3"),
];


document.addEventListener("DOMContentLoaded", () => { 
    const cat = document.getElementById("cat"); // Get the div after DOM loads

    window.addEventListener("keydown", (event) => {
        const key = event.key;

        switch (key) {
            case "1":
                
                cat.innerHTML = `
                    <figure onclick="alert('Hello Dolly!')">
                        ${catpics[0]}
                        <figcaption></figcaption>
                    </figure>
                `;
                    cat1sound.play() /*Play sound*/


                    document.getElementById("number1").style.textDecoration = "underline 3px solid white";
                    document.getElementById("number2").style.textDecoration = "";
                    document.getElementById("number3").style.textDecoration = "";
                    document.getElementById("number4").style.textDecoration = "";
                    document.getElementById("number5").style.textDecoration = "";
                    
                break;
        }

        switch (key) {
            case "2":
                
                cat.innerHTML = `
                    <figure onclick="alert('Hello Dolly!')">
                        ${catpics[1]}
                        <figcaption></figcaption>
                    </figure>
                `;

                    cat2sound.play() /*Play sound*/

                    document.getElementById("number1").style.textDecoration = "";
                    document.getElementById("number2").style.textDecoration = "underline 3px solid white";
                    document.getElementById("number3").style.textDecoration = "";
                    document.getElementById("number4").style.textDecoration = "";
                    document.getElementById("number5").style.textDecoration = "";
                break;
        }

        switch (key) {
            case "3":
                
                cat.innerHTML = `
                    <figure onclick="alert('Hello Dolly!')">
                        ${catpics[2]}
                        <figcaption></figcaption>
                    </figure>
                `;

                    cat3sound.play() /*Play sound*/

                    document.getElementById("number1").style.textDecoration = "";
                    document.getElementById("number3").style.textDecoration = "underline 3px solid white";
                    document.getElementById("number2").style.textDecoration = "";
                    document.getElementById("number4").style.textDecoration = "";
                    document.getElementById("number5").style.textDecoration = "";
                break;
        }

        switch (key) {
            case "4":
                
                cat.innerHTML = `
                    <figure onclick="alert('Hello Dolly!')">
                        ${catpics[3]}
                        <figcaption></figcaption>
                    </figure>
                `;

                    cat4sound.play() /*Play sound*/

                    document.getElementById("number1").style.textDecoration = "";
                    document.getElementById("number4").style.textDecoration = "underline 3px solid white";
                    document.getElementById("number3").style.textDecoration = "";
                    document.getElementById("number2").style.textDecoration = "";
                    document.getElementById("number5").style.textDecoration = "";
                break;
        }

        switch (key) {
            case "5":
                
                cat.innerHTML = `
                    <figure onclick="alert('Hello Dolly!')">
                        ${catpics[4]}
                        <figcaption></figcaption>
                    </figure>
                `;

                    cat5sound.play() /*Play sound*/

                    document.getElementById("number1").style.textDecoration = "";
                    document.getElementById("number2").style.textDecoration = "";
                    document.getElementById("number3").style.textDecoration = "";
                    document.getElementById("number4").style.textDecoration = "";
                    document.getElementById("number5").style.textDecoration = "underline 3px solid white";
                    
                break;
        }

        switch (key) {
            case "r":
                
            const randomIndex = Math.floor(Math.random() * catpics.length); // Get a random index
            cat.innerHTML = `
                <figure onclick="alert('Hello Dolly!')">
                    ${catpics[randomIndex]}
                    <figcaption></figcaption>
                </figure>
            `;
            // Optionally, play a random sound, if you'd like:

            // cat2sound.play(); // You could add more sounds and randomize it as well.
            break;
    }



    switch (key) {
        case "r":
            // Get a random index for both catpics and sounds
            const randomPicIndex = Math.floor(Math.random() * catpics.length);
            const randomSoundIndex = Math.floor(Math.random() * sounds.length);

            // Display the random cat image
            cat.innerHTML = `
                <figure onclick="alert('Hello Dolly!')">
                    ${catpics[randomPicIndex]}
                    <figcaption></figcaption>
                </figure>
            `;
            
            // Play the random sound
            sounds[randomSoundIndex].play();
            break;
    }


    });
});

