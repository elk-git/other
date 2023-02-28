document.getElementById('button').onclick = function() {
    getJoke()
    alert("Button pressed")
 };

const api_url = "https://icanhazdadjoke.com/";
    async function getJoke() {
      
      const response = await fetch(api_url);
      
      const data = await response.json();
      console.log(data.results);
      
      const j = data.results[0];
      let joke = j.joke;

      document.getElementById("joke").innerHTML = j.joke

    }

getJoke()

