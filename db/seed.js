const { Cheese, Board, User } = require('../models')
const db = require('./db') 

async function seed() {

    await db.sync({
        force: true
    })
// cheese_board is empty because have not created explicit connection
    await Cheese.bulkCreate([
        {
            title: "Parmesan",
            description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste.",
            boardId: 5, /// needed for every cheese
            // UserId: 0, // only need a few
            //0
        },
        {
            title: "Cheddar",
            description: "The texture is slightly buttery, moist, and a little melty. It's truly a versatile crowd-pleaser. Aged cheddars become more nutty, crumbly, and sharp. During the aging process the cheese develops a slightly tangier finish, some earthy notes, and some hard salt-like crystals that add a slight crunch to each bite.",
            boardId: 2,
            boardId: 4,
            //1
        },
        {
            title: "Gouda",
            description: "Typically made from cow's milk, this semi-hard cheese is characterised by its aromatic and caramel-like flavour combined with its dense and springy texture. Hints of nuts with sweet and creamy notes embrace your palate in a graceful sensation and, depending on the age, the finish ranges from smooth to sharp.",
            boardId: 4,
            //2
        },        
        {
            title: "Camembert",
            description: "Camembert cheese, classic cow's-milk cheese of Normandy, named for a village in that region; its characteristic creamy, ivory-coloured interior and downy white surface, resembling that of Brie, result from the Penicillium camemberti mold with which the curd is treated.",
            boardId: 5,
            //3
        },
        {
            title: "Mozzarella",
            description: "Mozzarella is a plastic or stretched-curd cheese; the curd is mixed with heated whey and stretched and kneaded until it attains a smooth, pliable consistency. It is then molded into spheres or ovals and stored in water to keep it moist.",
            boardId: 5,
            //4
        },        
        {
            title: "Brie",
            description: "The Queen of Cheeses. Acclaimed as one of the world's great cheeses - in fact, often called the “Queen of Cheeses” - velvety French Brie is characterized by a downy-white edible rind and a cream-colored, buttery-soft interior that oozes at the peak of ripeness.",
            boardId: 0,
            boardId: 3,
            //5
        },
        {
            title: "Swiss",
            description: "Swiss cheese is sweet, mild, and nutty—everything an alpine-style cheese should be! When you first pick up a beautiful slice of swiss, you'll notice its slightly yellow color and nutty aroma. Upon tasting it, you may appreciate how sweet and smooth swiss is.",
            boardId: 5,
            //6
        },        
        {
            title: "Gorgonzola",
            description: "Gorgonzola is a straw-white, soft cheese with greenish streaks deriving from a process called “erborinatura” in Italian, that is the creation of moulds. This cheese is creamy and soft, with a peculiar, typical taste.",
            boardId: 3,
            boardId: 1,
            //7
        },
        {
            title: "Roquefort",
            description: "The cheese is white, tangy, crumbly and slightly moist, with distinctive veins of blue mold. It has a characteristic fragrance and flavor with a notable taste of butyric acid; the blue veins provide a sharp tang. It has no rind; the exterior is edible and slightly salty.",
            boardId: 5,
            //8
        },        
        {
            title: "Danish blue",
            description: "Also known as Danablu, the cheese is made using cow's milk and displays fine streaks of blue veins along its white interior. Resembling Danish royal porcelain, it enchants with tones of mild bitterness and salt. The flavors are pungent and sharp, with a creamy and smooth texture on par with many soft cheeses.v",
            boardId: 5,
            //9
        },
        {
            title: "Chevin",
            description: "A soft,goat's milk cheese with a characteristic flavour. Chevin is one of the first cheeses that was made at Fairview and is the most popular goat's milk product. It is still made using the same traditional recipe,with the curd pressed in muslin bags to remove just the right amount of whey.",
            boardId: 3,
            //10
        },        
        {
            title: "Manchego",
            description: "It has an intense, zesty taste and a crumbly texture that's rich, full and slightly salty at the finish. Even its aroma has been described as special, suggesting roast lamb to some. Manchego is marketed at various stages of maturity from “cured” at 13 weeks to “aged” at more than three months.",
            boardId: 4,
            //11
        },
        {
            title: "Havarti",
            description: "Havarti is a semi-soft, Danish-style cheese made from cow's milk and can be easily sliced, grilled or melted. Havarti has a smooth surface, a creamy texture and a sweet, buttery flavor. Young havarti cheese is very mild flavored while older varieties have a saltier, slightly acidic flavor with hints of hazelnut.",
            boardId: 3,
            //12
        },        
        {
            title: "Boursin",
            description: "Boursin is fresh cream and soft cheese, flavoured with herbs and spices. Although it is just an herb-flavoured French cream cheese that can be easily imitated, only Boursin with its buttery flavour and slightly crumbly texture can be labelled as an “All natural Gournay cheese”",
            boardId: 0,
            boardId: 3,
            //13
        },
        {
            title: "Raclette",
            description: "It gets its name from the French racler which means “to scrape.” How does raclette taste? This fantastic cow's milk cheese has a wonderful creamy texture and a salty, slightly sweet, slightly nutty flavor not unlike Gruyere. It's fairly aromatic and becomes more pungent the longer the cheese wheel is aged.",
            "Fontina": "Incredibly rich and creamy, the flavours of this cheese are sweet and pungent, unveiling tones of butter and roasted nuts as it lingers on your palate. Traditionally made from unpasteurised milk, the texture is semi hard, smooth and adorned with small eyes in the body.",
            boardId: 0,
            boardId: 4,
            boardId: 2,
            //14
        },        
        {
            title: "Stilton",
            description: "Milder than Roquefort or Gorgonzola, Stilton has a rich and mellow flavor with a pungent aftertaste. The finest Stilton is creamy with a subtle, yeasty sweetness and a salty, nutty finish. In fact, the way to judge the quality of your Stilton is by how creamy it is, not by how blue it is.",
            boardId: 5,
            //15
        },
        {
            title: "Comte",
            description: "It is a semi-hard cheese, pale yellow in color, with a texture that ranges from open, supple, and grainy for younger cheeses to dense, firm, and crystalline for more aged cheeses. When aged, its flavor is nutty, smoky, fruity and sweet, while the younger cheeses are more milky and fresh tasting.",
            boardId: 4,
            boardId: 2,
            //16
        },        
        {
            title: "Gruyere",
            description: "Gruyère is a firm yellow Swiss cheese. It is named after the town of Gruyères in Switzerland. Gruyère is generally aged for six months or longer and is made from whole cow's milk. It features very few small eyes (or holes), an unusual characteristic for Swiss cheese.",
            boardId: 4,
            //17
        },
        {
            title: "Asiago",
            description: "Asiago is a semi-hard cow's milk cheese that originated in Italy. Depending on how long this versatile cheese is aged, it can assume a variety of textures. Whether you prefer your cheese nice and smooth or enjoy a more crumbly texture, Asiago is the cheese every cheese lover can indulge in.",
            boardId: 2,
            boardId: 4,
            //18
        },        
        {
            title: "Pecorino",
            description: "Comes in large cylinders with a hard, yellow rind encasing a yellowish-white interior — is the best known of the genre. Similar to its cousin, Parmigiano Reggiano (parmesan), it's a hard, dry cheese good for grating. Like parmesan, pecorino is used mainly in cooking.",
            boardId: 2,
            //19
        }
    ])

    await Board.bulkCreate([
        {
            type: "French cheese board",
            description: "Assorted French cheeses",
            rating: 8,
            cheeseId: 13, 
            cheeseId: 14,
            cheeseId: 5,
            //0
        },
        {
            type: "Italian cheese board",
            description: "Assorted Italian cheeses",
            rating: 5,
            cheeseId: 7
            //1
        },
        {
            type: "Hard cheese board",
            description: "Assorted hard and semi-hard cheeses",
            rating: 10,
            cheeseId: 19,
            cheeseId: 18,
            cheeseId: 16,
            cheeseId: 1,
            cheeseId: 2,
            //2
        },
        {
            type: "Soft cheese board",
            description: "Assorted soft cheeses",
            rating: 9,
            cheeseId: 12,
            cheeseId: 13,
            cheeseId: 9,
            cheeseId: 10,
            cheeseId: 7,
            //3
        },
        {
            type: "Aged cheese board",
            description: "Assorted Aged cheeses",
            rating: 10,
            cheeseId: 18,
            cheeseId: 17,
            cheeseId: 16,
            cheeseId: 14,
            cheeseId: 11,
            cheeseId: 2,
            cheeseId: 1,
            //4
        },        
        {
            type: "Mixed cheese board",
            description: "Assorted mixed cheeses",
            rating: 6,
            cheeseId: 0,
            cheeseId: 3,
            cheeseId: 4,
            cheeseId: 6,
            cheeseId: 8,
            cheeseId: 9,
            cheeseId: 15,
            //5
        },

    ])

    await User.bulkCreate([
        {
                // dont need to send id: primary key because set to auto increment
            name: "Jo Smith",
            email: "smith@gmail.com",
            boardId: 4
        },
        {
            name: "Jane Doe",
            email: "Jane@yahoo.com",
            boardId: 2
        },
        {
            name: "Jack Still",
            email: "jackson@yahoo.com",
            boardId: 0
        },
        {
            name: "Sam Sampson",
            email: "SampsonsSam@gmail.com",
            boardId: 5
        },
        {
            name: "Hank Hill",
            email: "kingHill@gmail.com",
            boardId: 4
        },
        {
            name: "Peggy Hicks",
            email: "hicksHicks@yahoo.com",
            boardId: 3
        },
        {
            name: "Sam Thompson",
            email: "tomThompson@gmail.com",
            boardId: 3
        },
        // {
        //     title: "Heidegger",
        //     BorrowerId: 1
        //     AuthorId: 7
        // }

    ])

}

seed()