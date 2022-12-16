

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:1337/api/categorias", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result)
    let html = ''
    data.data.forEach(element => {
      console.log(element.attributes.Titulo)
      html += `<a href="#" class="box">
      <div class="boximg">
          <p>`+ element.attributes.Titulo + `</p>
      </div></a>`
    });
    document.getElementById('categorias').innerHTML = html
  })
  .catch(error => console.log('error', error));



