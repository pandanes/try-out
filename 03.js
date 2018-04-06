const cart = [];

var daftarProduk = [ 
    { 
      kode_produk: 1,
      nama_produk: 'Ballpoint',
      harga: 3000,
      qty: 20
    },
    {
      kode_produk: 2,
      nama_produk: 'Pencil',
      harga: 2000,
      qty: 10
    },
    {
      kode_produk: 3,
      nama_produk: 'Paper',
      harga: 1000,
      qty: 30
    }
	];

    
//display products available
function displayProducts(){
    var html1 = "<table border='1|1'>";
    html1 += "<table id='tblProduk' border='1|1'>";
    html1 += "<tr><th>Kode Produk</td>";
    html1 += "<th>Nama Produk</th>";
    html1 += "<th>Harga";
    html1 += "<th>Qty</th>";
    for (var i = 0; i < daftarProduk.length; i++) {
        html1+="<tr>";
        html1+="<td>"+daftarProduk[i].kode_produk+"</td>";
        html1+="<td>"+daftarProduk[i].nama_produk+"</td>";
        html1+="<td>"+daftarProduk[i].harga+"</td>";
        html1+="<td>"+daftarProduk[i].qty+"</td>";
        html1+="</tr>";
    }

    html1+="</table>";
    document.getElementById("daftarproduk").innerHTML = html1;
}

//display shopping cart
function displayCart(){
    var html1 = "<table border='1|1'>";
    html1 += "<table id='tblCart' border='1|1'>";
    html1 += "<tr><th>Kode Produk</td>";
    html1 += "<th>Nama Produk</th>";
    html1 += "<th>Harga";
    html1 += "<th>Qty</th>";
    for (var i = 0; i < cart.length; i++) {
        html1+="<tr>";
        html1+="<td>"+cart[i].product_id+"</td>";
        html1+="<td>"+cart[i].product_name+"</td>";
        html1+="<td>"+cart[i].product_price+"</td>";
        html1+="<td>"+cart[i].product_qty+"</td>";
        html1+="</tr>";
        //total =+ cart[i].product_price;
    }  
    html1+="</table>";
    document.getElementById("cart").innerHTML = html1;         	
}

//add product to cart
function addItem(){
    var productID = document.getElementById("kodeproduk").value;
    var i = productID - 1;
    

    var newProduct = {
        product_id: null,
        product_name: null,
        product_price: 0.00,
        product_qty: 0
    };
    newProduct.product_id = daftarProduk[i].kode_produk;
    newProduct.product_name = daftarProduk[i].nama_produk;
    newProduct.product_price = daftarProduk[i].harga;
    newProduct.product_qty = daftarProduk[i].qty;

    cart.push(newProduct);
    displayCart();
    grandTotal();
        
}

//display grand total
function grandTotal(){
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
            total += cart[i].product_price;
            }
    
    var html = "<br>Total = " + total;
    document.getElementById("total").innerHTML = html;
}

displayProducts();