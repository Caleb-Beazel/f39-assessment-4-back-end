const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')

const fortuneHandler = (e) => {
    e.preventDefault()

    let newFortune = document.getElementById('fortune-field').value
    let fortuneObj = {
        fortune: newFortune
    }
    createFortune(fortuneObj)
}


const ratingHandler = (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let newRating = document.getElementById('rating').value
    
    console.log(name)
    console.log(newRating)
    
    // let friendObj = {
    //     name: name,
    //     rating: newRating
    friendsRated(name, newRating)

}
const deleteHandler = (e) => {
    e.preventDefault()

    let name = document.getElementById('name2').value
    let nameObj= {
        name: name
    }
    console.log(name)


    deleteFriend(nameObj)

}




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const createFortune = (body) => {
    axios.post("http://localhost:4000/api/fortune", body)
    .then(res => {
        alert(res.data)
        console.log(res.data)
    })
}

const friendsRated = (name, rating) => {
    axios.put(`http://localhost:4000/api/friends/${name}`, {rating})
    .then(res => {
        alert(res.data)
        console.log(res.data)
    })
}

const deleteFriend = (name) => {
    axios.delete(`http://localhost:4000/api/friends/${name}`)
    .then(res => {
        console.log(res.data)

    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form1.addEventListener('submit', fortuneHandler)
form2.addEventListener('submit', ratingHandler)
form3.addEventListener('submit', deleteHandler)

