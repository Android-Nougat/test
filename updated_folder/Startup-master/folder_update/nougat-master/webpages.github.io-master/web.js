function submit(){
	d=document.getElementById('Location').value;
	// console.log(d);
	// alert(d)
	a=document.getElementsByClassName('container')[0];
	var f=document.getElementsById('id');
	var g=document.getElementsByTagName('body');
const fs = require('fs') 



d.style.display="none";

  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 



// let cheerio = require('cheerio')
// let $ = cheerio.load('our html page url here')
// d=[]
// d.append()

      //   $.ajax({
      //         type:'POST',
      //         url: "web.py",
      //         dataType:"text",
      //         success: function(response){
      //            console.log(response);
      //            alert(response);
      //         }
      // });

  $.ajax({
            type: 'POST',
            url: "web.py",
            success: function () {
                alert("working")
            },
            error: function () {
                alert("Not Working")
            }
        });
}