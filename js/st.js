fetch("http://127.0.0.1:8000/comics")
    .then(comic => comic.json())
    .then(comicdata => {
      // console.log(comicdata)
        for (i in comicdata){
            console.log(comicdata[i])
            comic_wrapper = document.querySelector(".cont_wrapper")
            comic_wrapper_one = document.createElement('div')
            comic_wrapper_one.className = 'wrapper_one'
            // photo
            photo = document.createElement("img")
            photo.src=comicdata[i].image

            // id
            id = document.createElement("p")
            id.innerHTML = "Номер каталога: " + comicdata[i].id
            // name
            comicname = document.createElement("p")
            comicname.innerHTML = "Название комикса: " + comicdata[i].name

            // autor
            comicautor = document.createElement("p")
            comicautor.innerHTML = "Название комикса: " + comicdata[i].autor

            // year
            comicyear = document.createElement("p")
            comicyear.innerHTML = "Название комикса: " + comicdata[i].year

            // Создание блока
            comic_wrapper_one.appendChild(photo)
            comic_wrapper_one.appendChild(id)
            comic_wrapper_one.appendChild(comicname)
            comic_wrapper_one.appendChild(comicautor)
            comic_wrapper_one.appendChild(comicyear)
            comic_wrapper.appendChild(comic_wrapper_one)
        }
    })
