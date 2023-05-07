let fortunes = ["You will pass with flying colors", "All signs point to yes", "You will meet a homeless man that will give you a million dollars", "The fates are not on your side today. Stay inside.", "You will die today. Don't you wish you had just created your own fortune?"]
let friendsRatedArr = [
    {
     name: "James",
     rating: 5
    },
    {
    name:"Johnny",
    rating: 2
    },
    {
    name:"Marco",
    rating:3
    }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
      
    },
    createFortune: (req, res) => {
        let newFortune = req.body.fortune
        fortunes.push(newFortune)
        res.status(200).send(newFortune)
        
    },

    rateFriends: (req, res) => {
        let name = req.params.name
        let rating = req.body.rating

        for( i = 0; i < friendsRatedArr.length; i++){
            if (name === friendsRatedArr[i].name){
                friendsRatedArr[i].rating = rating
                res.status(200).send(`Friend: ${name} is now rated: ${rating}.`)
            } 
            
        }
        res.status(200).send('Friend does not exist.')
    },

    deleteFriend: (req, res) => {
        let name = req.params.name

        for( i = 0; i < friendsRatedArr.length; i++){
            
            // res.status(200).send(friendsRatedArr[1]['name'])
            
            if (name === friendsRatedArr[i]['name']){
                
                friendsRatedArr.splice(i, 1)
                
                res.status(200).send(`${name} has been deleted from your list of friends.`)
                
            }
        }   
        res.status(200).send(`${name} was not found on your list of friends.`)
    }
    
} 

// let friendsRemainingArr = []
// let friendsRemaining = friendsRemainingArr.join(',')

// for(j = 0; j < friendsRatedArr; j++){
//     friendsRemainingArr.push(friendsRatedArr[j][name])
    
    
    // res.status(200).send(`Your remaining friends are:${friendsRemaining}`)
// } 
// res.status(200).send('Friend does not exist.')



