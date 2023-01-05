// we will need a list of animals which we are going to include
// lets keep 6 animals

const animals = {
    "3": "Pybmy Rabbit",
    "4": "Red Kangaroo",
    "5": "Koala Bear",
    "8": "Elephant Shrew",
    "9": "Siphonophores",
    "10": "Pink Sea-Through Fantasia"
}
const animal_characteristics = {
    "3":{
        "name": "Pybmy Rabbit",
        "photo": "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Magazines/pygmy-rabbit-Betsy-Demay-570x375.ashx",
        "fun_fact": "This rabbit has a slate gray coloration that can turn brown during the summer monthssomething fun about it. The pygmy rabbit is one of only two North American rabbits known to dig its own burrows.",
        "threats": "High Sensitivity to Climate Change, Pygmy rabbits inhabit shrubsteppe ecosystems and feed primarily on sagebrush throughout the year. This rabbit is predicted to undergo a major decline in geographic range as a result of climate change, which is expected to bring warmer, drier conditions, including drought, to Washington’s Columbia Basin where the species occurs.",
        "conserve": "This species is identified as a Species of Greatest Conservation Need. To save them smart grazing, fire management, and species population connectivity management programs can be beneficial for wildlife, livestock, and landowners.",
        "cta": "Know more about them here: <a href='https://wdfw.wa.gov/species-habitats/species/brachylagus-idahoensis#climate'>https://wdfw.wa.gov/species-habitats/species/brachylagus-idahoensis#climate</a>"
    },
    "4":{
        "name": "Red Kangaroo",
        "photo": "https://cosmosmagazine.com/wp-content/uploads/2022/08/GettyImages-520278958-red-kangaroo.-Credit-Jami-Tarris.jpg",
        "fun_fact": "A red kangaroo can reach speeds of over 35 miles an hour. Their bounding gait allows them to cover 25 feet in a single leap and to jump 6 feet high.",
        "threats": "The Red Kangaroo prefers sparsely wooded or open plains. They inhabit grassland, shrubland, desert, woodland and open forest, and are most common in open savanna woodland. They are vulnerable to wildfires, and climate change",
        "conserve": "Urbanization, especially road building, adversely impacts kangaroos. Steps to conserve them include national programmes, and setting up physical structures to block kangaroos from roads in kangaroo hotspots.",
        "cta": "Know more about them here: <a href='https://australian.museum/learn/animals/mammals/red-kangaroo/'>https://australian.museum/learn/animals/mammals/red-kangaroo/</a>"
    },
    "5":{
        "name": "Koalas",
        "photo": "https://cdn.britannica.com/23/190523-050-112C739F/Koala-joey-back.jpg",
        "fun_fact": "Koalas are not bears. They are not placental or ‘eutherian’ mammals, but MARSUPIALS, which means that their young are born immature & they develop further in the safety of a pouch.",
        "threats": "Koalas are considered a vulnerable species. Their population was decimated from hunting for their fur during the 1900s, and koalas are still in danger from human encroachment upon and destruction of their habitats as well as disease. Chlamydia, which infects many koala populations, makes the female koalas infertile.",
        "conserve": "Although Koalas themselves are protected by law, around eighty percent of any remaining habitat occurs on privately owned land and almost none of that is protected by legislation. Did you know you can adopt your own cute Koala through the AKF? ",
        "cta": "Know more fun facts from: <a href='https://www.savethekoala.com/about-koalas/interesting-facts/'>https://www.savethekoala.com/about-koalas/interesting-facts/</a>"
    },
    "8":{
        "name": "Elephant Shrew",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Rhynchocyon_petersi_from_side.jpg/1200px-Rhynchocyon_petersi_from_side.jpg",
        "fun_fact": "Elephant shrews are not, in fact, shrews. Recent evidence suggests that they are more closely related to a group of African mammals that includes elephants, sea cows, and aardvarks. Elephant shrews (also called sengis) are represented by a single family, the Macroscelididae, including four genera and 19 living species.",
        "threats": "Habitat fragmentation is the biggest threat to elephant shrews' survival. Drought-driven fires and increased human-induced fires have also contributed to population declines for this species.",
        "conserve": "A solution to protecting elephant shrews is to work with governments, use science and technology to identify critical landscapes in need of intervention and then to set effective and sustainable development plans, etc.",
        "cta": "Know more about them here: <a href='https://www.awf.org/wildlife-conservation/elephant-shrew'>https://www.awf.org/wildlife-conservation/elephant-shrew</a>"
    },
    "9":{
        "name": "Siphonophores",
        "photo": "https://schmidtocean.org/wp-content/uploads/49250771427_9a6b0933e4_o.jpg",
        "fun_fact": "Though they may sometimes be mistaken for jellies, there's much more than meets the eye when it comes to siphonophores. There are 175+ known species of <i>Siphonophores</i> right now!",
        "threats": "Siphonophores are exceedingly fragile and break into many pieces under even the slightest forces. The vast majority of siphonophores are active swimmers and live in the water column of the open ocean. A few hardy species are sometimes found near the shore, but these are the exception.",
        "conserve": "Siphonophore eat small crustaceans, other gelatinous animals, maybe fish larvae and small fishes, and therefore they are strongly affected by warming waters in the pelagic realm.",
        "cta": "Know more about them here: <a href='https://artsandculture.google.com/story/what-is-a-siphonophore-smithsonian-national-museum-of-natural-history/jAUBWbTiXC4kkA?hl=en'>https://artsandculture.google.com/story/what-is-a-siphonophore-smithsonian-national-museum-of-natural-history/jAUBWbTiXC4kkA?hl=en</a>"
    },
    "10":{
        "name": "Pink Sea-Through Fantasia",
        "photo": "https://i.pinimg.com/originals/34/64/ed/3464edfc56322a45c8e7aa60e4021149.jpg",
        "fun_fact": "It was only found a little over a decade ago, back in 2007. The pink see-through Fantasia is described for its transparent skin, through which its mouth, anus, & intestines are all visible",
        "threats": "There still remains much more for experts to learn about the creature to date.",
        "conserve": "There still remains much more for experts to learn about the creature to date.",
        "cta": "Know more about them here: <a href='https://sweatandsaltwater.blogspot.com/2013/02/pink-see-through-fantasia.html'>https://sweatandsaltwater.blogspot.com/2013/02/pink-see-through-fantasia.html</a>"
    }
}

const intent_examples = [
    {text: "The pygmy rabbit is the smallest rabbit species in North America.", label: "3"},
    {text: "It can grow up to almost 12 inches long and weigh up to 16 ounces.", label: "3"},
    {text: "This rabbit has a slate gray coloration that can turn brown during the summer months.", label:"3"},
    {text: "Its ears are short, and its tail is nearly invisible and does NOT have the white color indicative of other rabbits, such as the larger Nuttall's cottontail.", label: "3"},
    {text: "The pygmy rabbit is one of only two North American rabbits known to dig its own burrows", label: "3"},
    {text: "Red kangaroos hop along on their powerful hind legs and do so at great speed", label: "4"},
    {text: "A red kangaroo can reach speeds of over 35 miles an hour.", label: "4"},
    {text: "Their bounding gait allows them to cover 25 feet in a single leap and to jump 6 feet high.", label: "4"},
    {text: "Kangaroos can also bite and wield sharp claws, which they may do in battle with an enemy like a dingo.", label: "4"},
    {text:"Like many species, male kangaroos sometimes fight over potential mates.",label:"4"},
    {text:"Koalas have 5 digits on each front paw, two of which are opposed to the others, much like our thumbs are able to be moved differently from the fingers.",label:"5"},
    {text:"The 2nd and 3rd digits on their hind paws are fused together to form a grooming claw.",label:"5"},
    {text:"Koalas are mostly nocturnal. Nocturnal animals are awake at night and asleep during the day. Koalas, however, sleep for part of the night and also sometimes move about in the daytime.",label:"5"},
    {text:"They often sleep for up to 18-20 hours each day.",label:"5"},
    {text:"Elephant shrews are not, in fact, shrews. Recent evidence suggests that they are more closely related to a group of African mammals that includes elephants, sea cows, and aardvarks.",label:"8"},
    {text:"Elephant shrews distribution is limited to highly fragmented forests, which limits their access to available resources and makes finding a mate more difficult, resulting in restricted populations",label:"8"},
    {text:"also called jumping shrews or sengis, are small insectivorous mammals native to Africa", label:"8"},
    {text:"Their traditional common English name elephant shrew comes from a perceived resemblance between their long noses and the trunk of an elephant, and their superficial similarity with shrews",label:"8"},
    {text:"Though they may sometimes be mistaken for jellies, there's much more than meets the eye when it comes to siphonophores",label:"9"},
    {text:"Each zooid is specialized to serve a particular function (such as swimming, feeding, prey capture of reproduction) within the colony—so much so that individual zooids cannot survive alone.",label:"9"},
    {text:"Although they superficially resemble jellyfish, each siphonophore animal is actually a colony of many genetically identical individuals called zooids.",label:"9"},
    {text:"The infamous and venomous Portuguese man o' war is a member of this order. They are deadly beauties. It lives at the water’s surface, trawling the depths for suitable prey with its long tentacles.",label:"9"},
    {text:"Most siphonophores live in the deep ocean where there is no light other than the light emitted by organisms. Even some siphonophores can emit light",label:"9"},
    {text:"Pink see-through Fantasia is a sea cucumber discovered about 1.5 miles deep into the Celebes Sea in the westward Pacific, east of Borneo",label:"10"},
    {text:"The pink see-through Fantasia is described for its transparent skin, through which its mouth, anus, & intestines are all visible",label:"10"},
    {text:"Just like other bioluminescent beings, this species can emit light. When in peril, it uses that light to frighten potential predators.",label:"10"}
]
module.exports = {animals, animal_characteristics, intent_examples}