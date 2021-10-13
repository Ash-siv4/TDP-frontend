"use strict";

const output = document.getElementById("output");

axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res => {
    const data = res.data;
    const json = JSON.stringify(data, null, 2);
    console.log(json);
    output.innerText = json;
})
.catch(err => console.error(err));