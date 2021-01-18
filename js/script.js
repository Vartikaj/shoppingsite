// var index = "";
// var img = "";
// var pheading="";
// var productDetailes = "";
function productDetailes(Index)
{
    allData=[""];
    var index = document.getElementById("id"+Index+"").getAttribute('data-value');
    var img = document.getElementById("id"+Index+"").querySelector('img').getAttribute('src');
    var pheading = document.getElementById("id"+Index+"").querySelector('.content').querySelector('h3').textContent;
    var productDetailes = document.getElementById("id"+Index+"").querySelector('.content').querySelector('p').textContent;
    var price = document.getElementById("id"+Index+"").querySelector('.content').querySelector('h4').textContent;
    var color = document.getElementById("id"+Index+"").querySelector('.content').querySelector('h5').textContent;

    allData.push(index);
    allData.push(img);
    allData.push(pheading);
    allData.push(productDetailes);
    allData.push(price);
    allData.push(color)

    localStorage.setItem('AllData', allData);
    window.location.href= "ProductDetails.html?name="+pheading+"";
}

// var theparent = document.querySelector("#allProduct");
// theparent.addEventListener("click",doSomething,false);
// function doSomething(e)
// {
//     if(e.target !== e.currentTarget)
//     {
//         var clickedItem = e.target.id.;
//         alert(clickedItem);
//     }
//     
// }
