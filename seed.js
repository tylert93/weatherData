const mongoose = require ('mongoose'),
      Destination = require('./models/destinations');    

const data = [
    {
        name:"St Just",
        lat:50.1235682,
        lon:-5.6980406,
        OWMKey:2638767
    },
    {
        name:"St Austell",
        lat:50.338001,
        lon:-4.795000,
        OWMKey:2638853
    },
    {
        name:"Plymouth",
        lat:50.3755,
        lon:-4.1427,
        OWMKey:2640194
    },
    {
        name:"Bude",
        lat:50.826600,
        lon:-4.543700,
        OWMKey:2654380
    },
    {
        name:"Bournemouth",
        lat:50.7192,
        lon:-1.8808,
        OWMKey:2655095
    },
    {
        name:"Newport",
        lat:51.5842,
        lon:-2.9977,
        OWMKey:2641598
    },
    {
        name:"Bristol",
        lat:51.4545,
        lon:-2.5879,
        OWMKey:2654675
    },
    {
        name:"Cardiff",
        lat:51.4816,
        lon:-3.1791,
        OWMKey:2653822
    },
    {
        name:"Swansea",
        lat:51.6214,
        lon:-3.9436,
        OWMKey:2636432
    },
    {
        name:"Carmarthen",
        lat:51.8576,
        lon:-4.3121,
        OWMKey:2653755
    },
    {
        name:"London",
        lat:51.5074,
        lon:-0.1278,
        OWMKey:2643743
    },
    {
        name:"Southend-on-sea",
        lat:51.5459,
        lon:-0.7077,
        OWMKey:2637433
    },
    {
        name:"Ipswich",
        lat:52.0567,
        lon:-1.1482,
        OWMKey:2646057
    },
    {
        name:"Northampton",
        lat:52.2405,
        lon:-0.9027,
        OWMKey:2641430
    },
    {
        name:"Lowestoft",
        lat:52.4811,
        lon:-1.7534,
        OWMKey:2643490
    },
    {
        name:"Great Yarmouth",
        lat:52.5982,
        lon:-1.7280,
        OWMKey:2647984
    },
    {
        name:"Coventry",
        lat:52.4068,
        lon:-1.5197,
        OWMKey:2652221
    },
    {
        name:"Leicester",
        lat:52.6369,
        lon:-1.1398,
        OWMKey:2644668
    }
];

function seedDB (){
    //remove all destinations
    Destination.deleteMany({}, function(err){
        if(err){
            console.log(err)
        }
        console.log("Destinations removed")
        //Create destinations
        data.forEach(function(item){
            Destination.create(item, function(err, createdDestination){
                if(err){
                    console.log(err)
                } else {
                    console.log("created a destination");
                }
            })
        })
    });
}

module.exports = seedDB;