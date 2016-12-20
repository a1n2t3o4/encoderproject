var translation = {

65 : "a",
66 : "b",
67 : "c",
68 : "d",
69 : "e",
70 : "f",
71 : "g",
72 : "h",
73 : "i",
74 : "j",
75 : "k",
76 : "l",
77 : "m",
78 : "n",
79 : "o",
80 : "p",
81 : "q",
82 : "r",
83 : "s",
84 : "t",
85 : "u",
86 : "v",
87 : "w",
88 : "x",
89 : "y",
90 : "z",
91 : "a",
31 : "",
32 : ""

}

$("input[type='rtadio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

//echo

$("#inputArea").keydown(function(e) {

   if(e.keyCode == 13) {
   if ($("input:checked").val() == "echo") {

        $("#textArea").append(document.getElementById('inputText').value += " ");
          $("#textArea").append(translation[e.keyCode]);
        document.getElementById('inputText').value = "";

}

//runes

    $("#inputArea").keydown(function(e) {

        if ($("inut:checked").val() == "runes"){
            $("#textArea").append("<img scr = 'images/runes" + ".git'>")
        }
     });

//cipher

$("#inputArea").keydown(function(e) {

    if ($("inut:checked").val() == "cipher"){

    }
  });
  });
