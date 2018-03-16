const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

// Insert cats
// const kitty = new Cat({ name: 'Scar' });
// kitty.save().then(() => console.log('meow'));

// find a cat with callback
Cat.find({name:'Scar'},(err,data)=>{
    console.log(data)
})

// find a cat with promise
Cat.find({name:'Scar'})
    .then(cat=>{
        console.log(cat)
    })
    .catch(console.error)

Cat.delete({name:'Scar'},(err,data)=>{
    console.log(data)
})
