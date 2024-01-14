//https://teachablemachine.withgoogle.com/models/jgYEDuEHp/


function record()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jgYEDuEHp/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);

}

function gotResults(error, results)
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Status - '+ results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";


        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('dino');
        img3 = document.getElementById('cow');
        img4 = document.getElementById('escaped');

        if(results[0].label == "Bark") 
        {
            img.src = 'dog.gif';
            
            img1.src = 'cat.png';
            img2.src = 'dino.png';
            img3.src = 'cow.png';
            img4.src = 'escaped.png';

        }
        if(results[0].label == "meow") 
        {
            img.src = 'dog.png';
            img1.src = 'cat.gif';
            img2.src = 'dino.png';
            img3.src = 'cow.png';
            img4.src = 'escaped.png';

        }
        if(results[0].label == "roar") 
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dino.gif';
            img3.src = 'cow.png';
            img4.src = 'escaped.png';

        }
        if(results[0].label == "moo") 
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dino.png';
            img3.src = 'cow.gif';
            img4.src = 'escaped.png';

        }
        if(results[0].label == "Background Noise") 
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dino.png';
            img3.src = 'cow.png';
            img4.src = 'escaped.gif';

        }
    }


}
