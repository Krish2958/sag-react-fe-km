let editor;


window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function changeMode(){
    let mode = $("#mode").val();

    if(mode == 'monokai')editor.setTheme("ace/theme/monokai");
    else if(mode == 'tomorrow')editor.setTheme("ace/theme/tomorrow");
    else if(mode == 'solarized_light')editor.setTheme("ace/theme/solarized_light");
    else if(mode == 'solarized_dark')editor.setTheme("ace/theme/solarized_dark");

}

function changeLanguage() {

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}

function executeCode() {

    $.ajax({

        url: "/ide/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}



