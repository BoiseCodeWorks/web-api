console.log("Hello JavaScript")


$.get('/api/cats').then(cats => {
   cats.forEach(c => { 
     document.getElementById('cats').innerHTML += c + ' '
   })
})


