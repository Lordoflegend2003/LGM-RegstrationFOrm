document.getElementById("mainform").addEventListener("submit", function(event) {
    event.preventDefault();


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("num").value;
    var rolln = document.getElementById("roln").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var languages = document.querySelectorAll('input[name="languages"]:checked');
    var selectedLanguages = Array.from(languages).map(function(language) {
        return language.value;
    });
    var image = document.getElementById("image").files[0];


    document.getElementById("resname").textContent = name;
    document.getElementById("resemail").textContent = email;
    document.getElementById("resphone").textContent = phonenum;
    document.getElementById("resroll").textContent = rolln;
    document.getElementById("resgen").textContent = gender;
    document.getElementById("resskill").textContent = selectedLanguages.join(", ");

    if (image) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("resimage").setAttribute("src", e.target.result);
        };
        reader.readAsDataURL(image);
    }

    document.getElementById("res").classList.remove("hidden");
});





































    
    // var image = document.getElementById("image").files[0];
    

    // document.getElementById("resname").textContent = name;
    // document.getElementById("resemail").textContent = email;

    // document.getElementById("resgen").textContent = gender;
    // document.getElementById("resskill").textContent = languages;





    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var gender = document.querySelector('input[name="gender"]:checked').value;
    // var languages = document.querySelectorAll('input[name="languages"]:checked');
    // var selectedLanguages = Array.from(languages).map(function(language) {
    //     return language.value;
    // });
    // var image = document.getElementById("image").files[0];

    // // Display registration details
    // document.getElementById("resultName").textContent = name;
    // document.getElementById("resultEmail").textContent = email;
    // document.getElementById("resultGender").textContent = gender;
    // document.getElementById("resultLanguages").textContent = selectedLanguages.join(", ");


    // <label>Gender:</label>
    // <input type="radio" id="male" name="gender" value="male" required>
    // <label for="male">Male</label>
    // <input type="radio" id="female" name="gender" value="female" required>
    // <label for="female">Female</label>
    // <input type="radio" id="other" name="gender" value="other" required>
    // <label for="other">Other</label><br><br>

    // <label>Languages:</label>
    // <input type="checkbox" id="english" name="languages" value="english">
    // <label for="english">English</label>
    // <input type="checkbox" id="spanish" name="languages" value="spanish">
    // <label for="spanish">Spanish</label>
    // <input type="checkbox" id="french" name="languages" value="french">
    // <label for="french">French</label><br><br>





//     if (image) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             document.getElementById("resultImage").setAttribute("src", e.target.result);
//         };
//         reader.readAsDataURL(image);
//     }

//     document.getElementById("res").classList.remove("hidden");
// });
