


var goods = {
  23847 : {'name': 'orange', 'price': 3, 'weight': 0.4, 'link':'https://www.google.com.ua/#q=orange', 'availability' : 'inStock'},
  93847 : {'name': 'orange', 'price': 6, 'weight': 1.3, 'link':'https://www.google.com.ua/#q=melon', 'availability' : 'out of Stock'},
  92731 : {'name': 'orange', 'price': 4, 'weight': 0.3, 'link':'https://www.google.com.ua/#q=apple', 'availability' : 'inStock'},
  output : function(pos) {
    for (var spec in goods[pos]) {
      document.querySelector('.test').innerHTML += spec +' -- ' +  goods[pos][spec] + '<br>';
    }
  }
};


goods.output(23847);
