var i=0,text;
    text = "Welcome to my digital office..."

    function typing() {
        if(i<text.length){
            document.getElementById("text").innerHTML += text.charAt(i); i++;
            setTimeout(typing,90);
        }
    }
    typing();