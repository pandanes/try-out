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
   
//display available products
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
        html1+="<td>"+cart[i].kode_produk+"</td>";
        html1+="<td>"+cart[i].nama_produk+"</td>";
        html1+="<td>"+cart[i].harga+"</td>";
        html1+="<td>"+cart[i].qty+"</td>";
        html1+="</tr>";
    }  
    html1+="</table>";
    document.getElementById("cart").innerHTML = html1;         	
}

//add product to cart
function addItem(){
    var productID = document.getElementById("kodeproduk").value;
    var i = productID - 1;

    cart.push(daftarProduk[i]);
    displayCart();
    grandTotal();    
}

//display grand total
function grandTotal(){
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
            total += cart[i].harga;
            }
    
    var html = "<br>Total harga= " + total;
    document.getElementById("total").innerHTML = html;
}

displayProducts();