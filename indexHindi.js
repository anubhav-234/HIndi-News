console.log("News Application ");

//API sources 
let apiKeyHindi="wJ0JFYTOToPUFz8zVeqIzzkprH03ei";
let hindiNews=` https://newsapi.in/newsapi/news.php?key=${apiKeyHindi}&category=hindi_state&content_type=full_content`
let newsAccordion=document.getElementById("newsAccordion");

//Request to fetch the news

let xhr=new XMLHttpRequest();

xhr.open('GET',`${hindiNews}`,true);


xhr.onload=function(){
    let json=JSON.parse(xhr.responseText);
    let articles=json.News;
    newsAccordion.innerHTML="";
    let html="";
    articles.forEach(function(element,index){html+=
        `<div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    <img src="${element.image}"  style="width:150px;height:150px;" class="img-thumbnail image-fluid" alt="...">
                    <h5 class="mx-2"><b>${element.title}</b></h5>
                   
                    </button>
                    </h2>
                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
                    <div class="accordion-body"> <p><b>${element.description}</b> </p><a href="${element.url}" class="link-info" style="text-decoration:none;">Read More...</a> </div>
                    </div>
          </div>`;})
    newsAccordion.innerHTML=html;
 }
 
 xhr.send();
