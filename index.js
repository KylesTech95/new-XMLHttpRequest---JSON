const render = (data) => {
    //small helper functions to render innerHTML to the dom
    let person = (name,id) => document.querySelector(`.user${[1,2][(id-1)]}`).innerHTML=name,
        age = (name,id) => document.querySelector(`.age${[1,2][(id-1)]}`).innerHTML="<b>Age:</b> "+name,
        friends = (arr,id) => {
           let res = arr.map((fr,i)=>i!=arr.length-1?fr.firstName+" "+fr.lastName+ " and":fr.firstName+" "+fr.lastName).join` `
           let html = document.querySelector(`.friends${[1,2][id-1]}`)
           html.innerHTML += "<b>Friends:</b> "+res;
        }
        sports = (arr,id) => {
            let sport_list = document.querySelector(`.sports${[1,2][id-1]}`)
            let sports = sport_list.children;
            let sportColor='sport-color'
                for(let index in arr){
                    index = Number(index)
                    sports[index].innerHTML += `Sport${index+1}: ${arr[index]}`
                    console.log(sports[index].classList.add(sportColor))
                  }
                }
        //Declare empty arrays
        variables=[], subject = []
        data.users.forEach(user=> {
        //Give kyle and Jackie their own objects of attributes
        variables.push({name:user.firstName+' '+user.lastName, age:user.age,friends:user.friends,id:user.id,sports:user.favorite_sports})
    })
    
    //access variables array, and give kyle and Jackie their perspective objects
    let kyle = variables[0], jackie = variables[1]
    //name each person()
    person(kyle.name,kyle.id)
    person(jackie.name,jackie.id)

    //age
    age(kyle.age,kyle.id).innerHTML
    age(jackie.age,jackie.id).innerHTML

    //friends
    friends(kyle.friends,kyle.id)
    friends(jackie.friends,jackie.id)

    //sports
    sports(kyle.sports,kyle.id)
    sports(jackie.sports,jackie.id)
    
}
//___________________________________________________________________
    //Uploading JSON data via new XMLHttpRequest()
    let xml = new XMLHttpRequest();
    let url = 'randomData.json'
    let method = "GET";
    //open xml
    xml.open(method,url,true)
    //xml.onload
    xml.onload = (d) =>{
    let data = JSON.parse(d.target.response)
    //Scroll up to view the render() function. Working data is placed within the method.
    render(data)
    }
    //xml.send() = Data IGNITION
    xml.send()