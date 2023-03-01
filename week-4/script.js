
  const api_url_dark = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas";
const api_url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,racist";
let deliver = ""

function getJokeFunc() {
  let checkbox = document.getElementById("checkbox");
  if (checkbox.checked == true) {
    getJokeDark()
  }
  if (checkbox.checked == false) {
    getJoke()
  }
}

function showJoke() {
  document.getElementById("joke2").innerHTML = deliver
}

async function getJokeDark() {
      
  // const response2 = await fetch(api_url, {
  //   mode: 'no-cors',
  // });
  const response = await fetch(api_url_dark);
  
const data = await response.json(); 

  document.getElementById("joke").innerHTML = data.setup;
  document.getElementById("joke2").innerHTML = "Click to show";

  deliver = data.delivery



}

    async function getJoke() {
      
      // const response2 = await fetch(api_url, {
      //   mode: 'no-cors',
      // });
      const response = await fetch(api_url);
      
const data = await response.json(); 

      document.getElementById("joke").innerHTML = data.setup;
      document.getElementById("joke2").innerHTML = "Click to show";

      deliver = data.delivery


    }





