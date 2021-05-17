speech_recognition=window.webkitSpeechRecognition;

recognition=new speech_recognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function (event)
{
    console.log(event);

    content=event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML=content;
}
