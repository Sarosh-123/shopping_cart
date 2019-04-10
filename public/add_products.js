$(()=>{
    let productname=$('#productname')
            let manufacturer=$('#manufacturer')
            let price=$('#price')

     $('#productbtn').click(function(){
         addproducts(
            productname.val(),
            manufacturer.val(),
            price.val(),
            /*function(addedproduct){
           window.alert("added" +addedproduct.name + "to the site")
            })*/
        )})})
        

