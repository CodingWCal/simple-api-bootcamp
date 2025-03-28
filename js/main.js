//add event listener on enter and button click to run function catchemall
document.querySelector('#pokeEnter').addEventListener('click', catchEmAll);
//funct catchemall
function catchEmAll() {
    const inputValue = document.querySelector('#pokeName').value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`; //api link, no key needed

    fetch(url)
        .then(res => res.json())//parse response as JSOIN
        .then(data => {
            console.log(data);

            // Display pokedex details inside queryselector tags innertext and src for img
            document.querySelector('h2').innerText = `Pokémon: ${data.name.toUpperCase()}`;
            document.querySelector('.pokemon-img').src = data.sprites.front_default;
            document.querySelector('#pokeID').innerText = `PokeDex ID: #${data.id}`;
            document.querySelector('#pokeHeight').innerText = `Height: ${data.height}`;
            document.querySelector('#pokeWeight').innerText = `Weight: ${data.weight}`;

        })
        .catch(err => {
            console.log(`Error: ${err}`);
            alert( "Pokemon not found, try again :)")
            });
}
