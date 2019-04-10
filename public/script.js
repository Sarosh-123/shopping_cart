$(()=>{$.get('/items',(data)=>{
    for(let item of data){
      console.log(item)
      $('#items').append(
        $('<li>').text(
          `${item}`)
      )}})
        })
