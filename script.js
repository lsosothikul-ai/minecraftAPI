async function getAPI(){
    try{
        const directorOrMovie = document.getElementById("searchFor")
        console.log(directorOrMovie)
        if(directorOrMovie === "movie"){
            const mob = document.getElementById("mob")
        let movieElement = ""
        const url = "https://ghibliapi.vercel.app/films/" + movieElement;
        headers = new Headers()
      headers.append("Accept", "application/json");
        const response = await fetch (url, {headers:headers})
        const json = await response.json();
        let movie = document.getElementById("movie")
        let title = ""
        let directorText =  document.getElementById("director")
        let director = ""
        let desc = document.getElementById("description")
            const image = document.getElementById("img");
            image.classList.add = "img";

        for(let films = 0; films <json.length; films++){
            if(mob.value === json[films].title){
                movieElement = json[films].id;
                title = json[films].title;
                director = json[films].director;
                console.log(title)
                console.log(director)
                movie.textContent = title 
                directorText.textContent = "By " + director
                desc.textContent = json[films].description  
                image.src = json[films].image
                console.log(image)

            }
        }
        }
        
    }
          
        
        catch(error){
            console.log(error)
        }

    }