const BASE_URL = 'https://temtem-api.mael.tech/api/dojos';

const selectDojo = document.querySelector('#dojos');

// fect
const getDojos = async (id) => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        //console.log(json[id].leader.temtem)
        return {
            'name': json[id].name,
            'temtems': json[id].leader.temtem
        };

    } catch(e) {
        console.log(e.message);
    }
}

// carregando dados
const loadInfo = async (id) => {

    let dataDojo = await getDojos(id);

    // adicionando info name
    const nameDojo = document.querySelector('#name-dojo');
    nameDojo.innerHTML = dataDojo.name;

    // adicionando temtems
    let content = ``;

    let array = dataDojo.temtems;
        array.map(function(temtems) {
            return content += `<b>Nome</b>: ${temtems.name} | <b>Level</b>: ${temtems.level} </br>`;
        })
    
    const Temtems = document.querySelector('#temtems');
    temtems.innerHTML = content;

}

selectDojo.addEventListener('click', function(e) {
    e.preventDefault;

    loadInfo(selectDojo.value);
})
