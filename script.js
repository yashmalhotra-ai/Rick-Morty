const rickandmortyapiLink='https://rickandmortyapi.com/api/character'

const GetRandomId=()=>{
    return Math.floor(Math.random()*826+1)
}
const RandomImageDiv=document.getElementById('GetRandomBtn')
const ImageDiv=document.getElementById('ImageDiplayDiv')
const ImageDetailsDiv=document.getElementById('ImageDetailDiv')
const getidk=()=>{
    fetch(`${rickandmortyapiLink}/${GetRandomId()}`)
    .then(reponse => reponse.json())
    .then(json => {
        console.log(json)
        ImageDiv.innerHTML+=`<img src='${json.image}' height=300 width=300/>`
        ImageDetailsDiv.innerText=`Name:${json.name} \n Species:${json.species} \n Type:${json.type} \n Gender:${json.gender}
         Location:${json.location.name}`
    })
        
}
RandomImageDiv.onclick=()=>{
    getidk();
}
const RickSearchurl='https://rickandmortyapi.com/api/character/?name='
const SearchRickBtn=document.getElementById('SearchBtn')
const RickMortyvalue=document.getElementById('SearchInput');

const SearchRick=()=>{
    fetch(`${RickSearchurl}${RickMortyvalue.value}`)
    .then(response=> response.json())
    .then(json=>{
        // console.log(json);
        const RickMortyChar=json.results[0];
        // console.log(RickMortyChar);
        ImageDiv.innerHTML=`<img src='${RickMortyChar.image}' height=300 width=300/>`
        ImageDetailsDiv.innerText=`Name:${RickMortyChar.name} \n Species:${RickMortyChar.species} \n Type:${RickMortyChar.type} \n Gender:${json.gender}
         Location:${RickMortyChar.location.name}`
    })
}

SearchRickBtn.onclick=()=>{
    SearchRick();
}


