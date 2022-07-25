var basket, iphone11, iphone13;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


0;

basket = [];
iphone11 = ['https://m.media-amazon.com/images/I/81HSzsIkJdL._AC_SX522_.jpg', 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9169/akrales_190913_3628_0244_squ.jpg'];
iphone13 = ['https://itmag.ua/upload/iblock/295/0ej26jnk1d1joi022pwgvf6ab0m01e5r/186u.jpg', 'https://droider.ru/wp-content/uploads/2021/09/apple_iphone-13-pro_iphone-13-pro-max_09142021.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  iphone13.push(iphone13.shift());
  let element_picture = document.getElementById('picture');
  element_picture.setAttribute("src", iphone13[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  iphone13.unshift(iphone13.pop());
  let element_picture2 = document.getElementById('picture');
  element_picture2.setAttribute("src", iphone13.slice(-1)[0]);

});

document.getElementById('next2').addEventListener('click', (event) => {
  iphone11.push(iphone11.shift());
  let element_picture22 = document.getElementById('picture2');
  element_picture22.setAttribute("src", iphone11[0]);

});

document.getElementById('previous2').addEventListener('click', (event) => {
  iphone11.unshift(iphone11.pop());
  let element_picture23 = document.getElementById('picture2');
  element_picture23.setAttribute("src", iphone11.slice(-1)[0]);

});

document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_div = document.createElement('div');
  new_div.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_div);

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  let new_div2 = document.createElement('div');
  new_div2.innerText = getNumberOrString(document.getElementById('text2').value);

  element_list2.appendChild(new_div2);

});

document.getElementById('basket-button').addEventListener('click', (event) => {
  basket.push(1);
  let element_basket_list = document.getElementById('basket-list');
  let new_div3 = document.createElement('div');
  new_div3.innerText = basket.reduce((a,b) => a+b, 0);

  element_basket_list.appendChild(new_div3);

});

document.getElementById('basket-button2').addEventListener('click', (event) => {
  basket.push(1);
  let element_basket_list2 = document.getElementById('basket-list');
  let new_div4 = document.createElement('div');
  new_div4.innerText = basket.reduce((a,b) => a+b, 0);

  element_basket_list2.appendChild(new_div4);

});