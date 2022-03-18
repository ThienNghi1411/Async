// $.get('/api/products', function(data){
//   console.log(data.products);
//     let productsPrint = document.querySelector(".list-product-name");
//     let tmp= "";
//     data.products.forEach( (data,index) => {
//       tmp += data.title;
//     })
//     productsPrint.innerText = tmp;
//   });

//////////////////////////////////////////

// $.get('/api/collections', function(data){
//   console.log(data);
//     let collectionPrint = document.querySelector(".collection-img");

//     data.collections.forEach( (tmp,index) => {
//       if(tmp.handle === "handmade-1"){
//         let img = document.createElement('img');
//         img.setAttribute('src',tmp.image.src);
//         img.setAttribute('alt',tmp.image.alt);
//         img.setAttribute('created_at',tmp.image.created_at)
//         img.style.width=`${tmp.image.width}px`
//         img.style.height=`${tmp.image.height}px`
//         collectionPrint.appendChild(img);
//       }
//     })
//   });

//////////////////////////////////////////

// $.get('/api/products_v2', function(data){
//     var iMax = parseInt(data.products[0].variants[0].price);
//     var ArrMax = [0];
//     var res = "";
//     var productsHandle = document.querySelector(".products-handle")
//     data.products.forEach( (ele,index) => {
//         console.log(iMax);
//        if (parseInt(ele.variants[0].price) > iMax){
//            iMax = parseInt(ele.variants[0].price);
//            ArrMax = []; // xóa mảng
//            ArrMax.push(index);
//        } else if (parseInt(ele.variants[0].price)=== iMax){
//            ArrMax.push(index);
//        }
//     });
//     ArrMax.forEach(ele => {
//         res+=data.products.handle+=",";

//     })
//     res= res.substring(0,res.length-1);
//     productsHandle.innerText = res;
// });
var res = "";
var count = 0;
var navlist = document.querySelector(".navlist");
var lastRes = "";
const getName = (arr, count) => {
  for (let index = 0; index < arr.length; index++) {
    for (const key in arr[index]) {
      if (key === "name") {
        if (count !== 0) {
          for (let tmp = 0; tmp < count; tmp++) {
            res += "_";
          }
        }
        res += arr[index].name + "\n";

        console.log(res);
      }
      if (typeof arr[index][key] === "object") {
        count++;
        getName(arr[index][key], count);
        count--;
      }
    }
  }
};
getName(navList, count);
navlist.innerText = res;
