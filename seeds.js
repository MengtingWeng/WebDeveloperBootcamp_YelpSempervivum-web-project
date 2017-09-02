var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Picanha t-bone elit salami, pork ham hock pig commodo bacon ball tip. Corned beef commodo kielbasa, ad adipisicing in consequat shoulder beef ribs incididunt in laboris. Dolore burgdoggen boudin alcatra, capicola turkey ipsum et ball tip. Ham sirloin quis eiusmod jerky salami tenderloin dolore flank short loin excepteur officia proident turducken. Turducken spare ribs ball tip fugiat culpa filet mignon cow."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Picanha t-bone elit salami, pork ham hock pig commodo bacon ball tip. Corned beef commodo kielbasa, ad adipisicing in consequat shoulder beef ribs incididunt in laboris. Dolore burgdoggen boudin alcatra, capicola turkey ipsum et ball tip. Ham sirloin quis eiusmod jerky salami tenderloin dolore flank short loin excepteur officia proident turducken. Turducken spare ribs ball tip fugiat culpa filet mignon cow.h"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Picanha t-bone elit salami, pork ham hock pig commodo bacon ball tip. Corned beef commodo kielbasa, ad adipisicing in consequat shoulder beef ribs incididunt in laboris. Dolore burgdoggen boudin alcatra, capicola turkey ipsum et ball tip. Ham sirloin quis eiusmod jerky salami tenderloin dolore flank short loin excepteur officia proident turducken. Turducken spare ribs ball tip fugiat culpa filet mignon cow.h"
    }
];

function seedDB(){
    //remove campground
    Campground.remove({}, function (err) {
        if(err) {
            console.log(err);
        } 
        console.log("removed campground");
        
        //add a few campround
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campround) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("add a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "this place is greate, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if (err) {
                                console.log(err);
                            } else {
                                campround.comments.push(comment);
                                campround.save();
                                console.log("create new comment");
                            }
                        });
                }
            });
        });
    })
    
    
}

module.exports = seedDB;