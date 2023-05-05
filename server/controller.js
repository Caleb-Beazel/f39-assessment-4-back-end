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
        let rating = req.params.rating

        let index = friendsRatedArr.findIndex( friend => friend[name] === name)

        if (friendsRatedArr[index]){
            friendsRatedArr[index].rating = rating

            res.status(200).send(`Friend: ${name} is now rated ${rating}`)
        } else {
            res.status(200).send('Friend does not exist.')
        }

    },

    deleteFriend: (req, res) => {
        let name = req.body.name

        let index = friendsRatedArr.findIndex( friend => friend[name] === name)

        friendsRatedArr.splice(index,1)


        res.status(200).send(`${name} has been deleted from your list of friends.`)
    }

}