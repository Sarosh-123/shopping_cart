
    function fetchproducts(done){
        $.get('/api/products',(data)=>{
             done(data)
        }
         ) }

         function addproducts(name,manuf,price){
             $.post('/api/products',{
                 name:name,
                 manufacturer:manuf,
                 price:price
             },/*function(data){
                 done(data)
             }*/)
         }

function createproductcard(product){
    return $(`
    <div class="col-4 card mx-2 p-4">
       <h4 class="product-name">${product.name}</h4>
       <div class="manufacturer">${product.manufacturer}</div>
       <div class="row">
           <div class="col m-3 p-3"><b>${product.price}</b></div>
           <button onClick="addCart(${product.price},${product.id},'${product.name}')" id="${product.id}" class="col m-2 p-2 btn btn-primary" >Buy</button>
   
       </div>
           </div>

    `)
    
}
function addCart(id,i,name)
{
    console.log()
   $.post('/cart',{
        id:i,
        name:name,
        price:id
    })
}

