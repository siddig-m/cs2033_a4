function checkName () {
        var nameBox = document.getElementById("name");
        var name = nameBox.value;
        
        var nameregx = /^[A-Za-z-_ ]+$/;
            
        if (name.length > 4 && name.match(nameregx)) {
            nameBox.style.borderColor = "green";
        } else {
            nameBox.style.borderColor = "red";
        }
    }

    function validateEmail() {
        var emailBox = document.getElementById("email");
        var email = emailBox.value;
        
        var regx = /.+@.+\..+/;
            
        if(email.match(regx)) {
            emailBox.style.borderColor = "green";
        } else {
            emailBox.style.borderColor = "red";
        }
    }
                
        
    function updateProduct() {
        var productInfo = document.getElementById("inlineFormCustomSelectPref");
        var productID = document.getElementById("productID");
        var productLabel = document.getElementById("productLabel");
            
        var opts = productInfo.options;
        var si = productInfo.selectedIndex;
        var sel = opts[si];
            
        if (sel.index == 3) {
            productID.className = "d-block";
            productLabel.className = "d-block form-control";
        } else {
            productID.className = "d-none";
            productLabel.className = "d-none";
        }
    }
        
    function checkID () {
        var idbox = document.getElementById("productLabel");
        var id = idbox.value;
            
        if (id == ("4T878")) {
            idbox.style.borderColor = "green";
        } else if (id == ("5T897")) {
            idbox.style.borderColor = "green";
        } else if (id == ("5J2D9")) {
            idbox.style.borderColor = "green";
        } else if (id == ("2P523")) {
            idbox.style.borderColor = "green";
        } else if (id == ("9X9R4")) {
            idbox.style.borderColor = "green";
        } else if (id == ("2B931")) {
            idbox.style.borderColor = "green";
        } else {
            idbox.style.borderColor = "red";
        }
                
    }
        
    function checkProduct () {
        var productBox = document.getElementById("productLabel");
        var productLabel = productBox.value;
            
        if (name.length < 4) {
            nameBox.style.borderColor = "red";
        } else {
            nameBox.style.borderColor = "green";
        }
    }

    function textArea () {
        var textBox = document.getElementById("helloagain");
        var textCharacters = textBox.value;
            
        if (textCharacters.length <= 10 || textCharacters.length >= 30) {
            textBox.style.borderColor = "red";
        } else {
            textBox.style.borderColor = "green";
        }
    }
    

function scroll() {
                
                var t = window.scrollY;
                var para = document.getElementById("para");
                var m = -0.5;
                var b = 10;
                
                newY = m*t + b;
                para.style.backgroundPositionY = newY + "px";
            
                var t = window.scrollY;
                var firstpic = document.getElementById("firstpic");
            
                if (t > 5) {
                    firstpic.style.marginLeft = "0px";
                }
        }
        