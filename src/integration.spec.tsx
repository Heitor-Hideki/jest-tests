import pokeApi from "./services/pokeapi";
import { getPokemon, getPokemonSpecies } from "./services/requests";
import { mocked } from 'jest-mock'

jest.mock('./services/pokeapi');

const speciesStub = {
  "base_happiness": 50,
  "capture_rate": 190,
  "color": {
    "name": "pink",
    "url": "https://pokeapi.co/api/v2/pokemon-color/6/"
  },
  "egg_groups": [
    {
      "name": "monster",
      "url": "https://pokeapi.co/api/v2/egg-group/1/"
    },
    {
      "name": "water1",
      "url": "https://pokeapi.co/api/v2/egg-group/2/"
    }
  ],
  "evolution_chain": {
    "url": "https://pokeapi.co/api/v2/evolution-chain/33/"
  },
  "evolves_from_species": null,
  "flavor_text_entries": [
    {
      "flavor_text": "Descansa ocioso junto al agua. Si algo muerde su\ncola, no lo notará en todo el día.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "Es faulenzt am Wasser. Wenn es in den Schweif\ngebissen wird, bemerkt es das erst am nächsten Tag.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "Incredibly slow\nand dopey. It\ntakes 5 seconds\ffor it to feel\npain when under\nattack.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "flavor_text": "Incredibly slow\nand dopey. It\ntakes 5 seconds\ffor it to feel\npain when under\nattack.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "flavor_text": "Incredibly slow\nand sluggish. It\nis quite content\fto loll about\nwithout worrying\nabout the time.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "flavor_text": "It lazes vacantly\nnear water. If\nsomething bites\fits tail, it won't\neven notice for a\nwhole day.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "flavor_text": "A sweet sap leaks\nfrom its tail's\ntip. Although not\fnutritious, the\ntail is pleasant\nto chew on.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "flavor_text": "It is always so\nabsent-minded that\nit won't react,\feven if its\nflavorful tail is\nbitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "flavor_text": "SLOWPOKE uses its tail to catch prey by\ndipping it in water at the side of a\nriver.\fHowever, this POKéMON often forgets\nwhat it’s doing and often spends entire\ndays just loafing at water’s edge.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "flavor_text": "SLOWPOKE uses its tail to catch prey by\ndipping it in water at the side of a\nriver.\fHowever, this POKéMON often forgets\nwhat it’s doing and often spends entire\ndays just loafing at water’s edge.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "flavor_text": "It catches prey by dipping its tail in\nwater at the side of a river. But it often\nforgets what it is doing and spends entire\ndays just loafing at water’s edge.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "flavor_text": "It is always vacantly lost in thought, but\nno one knows what it is thinking about.\nIt is good at fishing with its tail.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "flavor_text": "Incredibly slow and dopey. It takes five\nseconds for it to feel pain when under\nattack.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      "flavor_text": "It lazes vacantly near water.\nIf something bites its tail, it won’t\neven notice for a whole day.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      "flavor_text": "A sweet sap leaks from its tail’s\ntip. Although not nutritious, the\ntail is pleasant to chew on.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      "flavor_text": "Bien que lent, c’est un pêcheur\nadroit qui utilise sa queue. Elle\nest insensible aux morsures.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "flavor_text": "Bien que lent, c’est un pêcheur\nadroit qui utilise sa queue. Elle\nest insensible aux morsures.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      "flavor_text": "Although slow, it is skilled at\nfishing with its tail. It does not\nfeel pain if its tail is bitten.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    },
    {
      "flavor_text": "いつも　ボーッとしていて　なにを\nかんがえているか　わからない。\nしっぽで　エサを　つるのが　とくい。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "항상 멍하니 있으므로 무슨\n생각을 하고 있는지 알 수 없다.\n꼬리로 먹이를 낚는 것이 특기다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "Ramoloss semble toujours perdu dans ses pensées,\nmais personne ne sait vraiment à quoi il pense.\nIl adore pêcher en utilisant sa queue.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "Es ist stets in Gedanken versunken und niemand\nweiß, worüber es nachdenkt. Es kann mit seiner\nRute gut angeln.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "Está siempre en su mundo, pero nadie sabe en qué\npiensa. Suele pescar con la cola.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "È sempre assorto, ma nessuno sa a cosa stia\npensando. Si serve della coda per pescare.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "It is always vacantly lost in thought, but no one\nknows what it is thinking about. It is good at fishing\nwith its tail.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "いつも　ボーッとしていて　なにを\n考えているか　わからない。\n尻尾で　エサを　釣るのが　得意。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
      }
    },
    {
      "flavor_text": "みずべで　ボーッとしている。\nなにかが　しっぽに　かみついても\nまる１にち　きづかない。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "물가에서 멍하니 있다.\n뭔가가 꼬리를 깨물어도\n하루 종일 눈치채지 못한다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "Il est tellement paresseux qu’il lui faut une journée\npour remarquer qu’on lui mord la queue.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "Ozia distrattamente vicino all’acqua. Se gli si\nmordesse la coda non se ne accorgerebbe neppure.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "It lazes vacantly near water. If something bites its\ntail, it won’t even notice for a whole day.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "水辺で　ボーッとしている。\nなにかが　尻尾に　かみついても\nまる１日　気づかない。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
      }
    },
    {
      "flavor_text": "しっぽを　かわに　いれて　エサを　つっているが\nそのうち　なにを　しているのか　わすれてしまい\nかわべりに　ねそべったまま　１にちを　おえる。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "꼬리를 강에 넣고 먹이를 낚지만\n이윽고 무엇을 하고 있었는지 잊고\n강변에 엎드려 누운 채로 하루를 보낸다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "Ramoloss trempe sa queue dans l’eau au bord des rivières\npour attraper ses proies. Cependant, ce Pokémon oublie\nsouvent ce qu’il fait là et passe des jours entiers à traîner\nau bord de l’eau.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "Flegmon benutzt seinen Schweif, um Beute zu fangen, indem\nes ihn an einem Flussufer ins Wasser taucht. Dieses Pokémon\nvergisst häufig, was es gerade tun wollte, und verbringt ganze\nTage damit, am Ufer herumzutrödeln.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "Slowpoke usa la cola para atrapar a sus presas metiéndola\nbajo el agua en las riberas de los ríos. Con todo, es\nolvidadizo, se le puede pasar lo que estaba haciendo y\nquedarse días enteros holgazaneando en la orilla.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "Slowpoke usa la coda per pescare la preda, immergendola\nin acqua dalle rive dei fiumi.\nTuttavia, spesso dimentica cosa stava facendo e trascorre\ngiorni interi a ciondolare vicino ai corsi d’acqua.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "Slowpoke uses its tail to catch prey by dipping it in water at\nthe side of a river. However, this Pokémon often forgets what\nit’s doing and often spends entire days just loafing at\nwater’s edge.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "尻尾を　川に　入れて　エサを　釣っているが\nそのうち　なにを　しているのか　忘れてしまい\n川べりに　寝そべったまま　１日を　終える。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
      }
    },
    {
      "flavor_text": "しっぽを　かわに　いれて　エサを　つっているが\nそのうち　なにを　しているのか　わすれてしまい\nかわべりに　ねそべったまま　１にちを　おえる。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "꼬리를 강에 넣고 먹이를 낚지만\n이윽고 무엇을 하고 있었는지 잊고\n강변에 엎드려 누운 채로 하루를 보낸다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "Ramoloss trempe sa queue dans l’eau au bord des rivières\npour attraper ses proies. Cependant, ce Pokémon oublie\nsouvent ce qu’il fait là et passe des jours entiers à traîner\nau bord de l’eau.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "Flegmon benutzt seinen Schweif, um Beute zu fangen, indem\nes ihn an einem Flussufer ins Wasser taucht. Dieses Pokémon\nvergisst häufig, was es gerade tun wollte, und verbringt ganze\nTage damit, am Ufer herumzutrödeln.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "Slowpoke usa la cola para atrapar a sus presas metiéndola\nbajo el agua en las riberas de los ríos. Con todo, es\nolvidadizo, se le puede pasar lo que estaba haciendo y\nquedarse días enteros holgazaneando en la orilla.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "Slowpoke usa la coda per pescare la preda, immergendola\nin acqua dalle rive dei fiumi.\nTuttavia, spesso dimentica cosa stava facendo e trascorre\ngiorni interi a ciondolare vicino ai corsi d’acqua.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "Slowpoke uses its tail to catch prey by dipping it in water\nat the side of a river. However, this Pokémon often forgets\nwhat it’s doing and often spends entire days just loafing\nat water’s edge.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "尻尾を　川に　入れて　エサを　釣っているが\nそのうち　なにを　しているのか　忘れてしまい\n川べりに　寝そべったまま　１日を　終える。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
      }
    },
    {
      "flavor_text": "ながい　しっぽは　よくちぎれる。\nとくに　いたみも　かんじないし\nすぐに　はえるので　きにしない。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "긴 꼬리는 잘 잘린다.\n특별히 아픔도 느끼지 않고\n바로 자라기 때문에 신경 쓰지 않는다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "長長的尾巴經常斷掉。\n因為不會感到什麼疼痛，\n而且馬上又會長出來，所以並不在意。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "Souvent, sa longue queue se coupe toute seule.\nCela ne lui cause aucune douleur et une autre\npousse aussitôt, donc il n’y a pas à s’en faire.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "Seine Rute bricht sehr leicht ab. Dies kümmert\nes jedoch wenig, da es dabei keine Schmerzen\nspürt und sie sofort wieder nachwächst.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "Pierde la cola con frecuencia, pero, como no\nle duele y le crece de nuevo rápidamente, no\nle da ninguna importancia.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "La sua lunga coda si spezza facilmente, ma\nsenza causargli dolore. Inoltre, ricresce sempre,\nquindi il Pokémon non sembra preoccuparsene.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "Its long tail often breaks off. It doesn’t really\nfeel any pain, though, and the tail grows back,\nso Slowpoke isn’t particularly bothered.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "長い　尻尾は　よく千切れる。\n特に　痛みも　感じないし\nすぐに　生えるので　気にしない。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "长长的尾巴经常被揪断。\n因为也不会觉得特别痛，\n马上会长出来，所以并不在意。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
      }
    },
    {
      "flavor_text": "ヤドンのしっぽを　ほしたあと\nしおみずで　にこんだ　りょうりは\nアローラの　かていの　あじ。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "야돈의 꼬리를 말린 뒤\n소금물에 푹 끓인 요리는\n알로라의 가정식 메뉴다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "把呆呆獸的尾巴曬乾\n再用鹽水煮成的小菜，\n是阿羅拉的家常美味。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "Une recette traditionnelle d’Alola consiste à\nfaire sécher des queues de Ramoloss puis à\nles faire bouillir dans de l’eau salée.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "In Alola bereiten viele Familien Flegmon-Ruten\nzu, indem sie diese zuerst trocknen und dann\nin Salzwasser kochen.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "Un plato típico de la cocina de Alola son las\ncolas de Slowpoke desecadas y cocinadas\nen agua salada.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "La coda di Slowpoke essiccata e bollita a fuoco\nlento in acqua salata è un piatto tipico della\ncucina di Alola.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "Alolan home cooking involves drying Slowpoke\ntails and then simmering them into a salty stew.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "ヤドンの尻尾を　干したあと\n塩水で　煮込んだ　料理は\nアローラの　家庭の　味。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "把呆呆兽的尾巴晒干后\n再用盐水煮成的小菜，\n是阿罗拉的家常美味。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
      }
    },
    {
      "flavor_text": "あくびを　すると　あめが　ふる\nという　いいつたえ　から　ヤドンを\nまつっている　ちいきが　あるという。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "하품을 하면 비가 온다는\n구전 때문에 야돈을\n받을어 모시는 지역도 있다고 한다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "傳說當呆呆獸打呵欠時\n就會開始下雨，所以據說\n有些地區會祭祀呆呆獸。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "Ce Pokémon, vénéré et considéré comme un\ndevin dans certaines régions, a donné naissance\nau dicton : Ramoloss a bâillé, attention à l’ondée.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "Einer Legende zufolge soll Flegmons Gähnen\nRegen herbeiführen. In manchen Regionen wird\nihm deswegen gehuldigt.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "La leyenda afirma que su bostezo atrae las\nlluvias, por lo que en ciertas regiones lo\nconsideran prácticamente una deidad.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "Secondo una leggenda, quando sbadiglia piove.\nSembra che in alcune regioni venga venerato\nper questo motivo.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "There are some places where Slowpoke is\nworshiped because of a long-standing belief\nthat whenever Slowpoke yawns, it rains.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "あくびを　すると　雨が　降る\nという　言い伝え　から　ヤドンを\nまつっている　地域が　あるという。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "有传说讲呆呆兽打哈欠\n就会下雨，所以据说\n有些地方会供奉呆呆兽。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
      }
    },
    {
      "flavor_text": "しぜんにちぎれ　そこらに　おちている\nシッポは　てがるで　きちょうな\nしょくりょうの　ひとつ　だった。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "주변에 자연스럽게 떨어져 있는\n꼬리는 손쉽게 얻을 수 있는\n귀중한 식재료 중 하나였다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "自然斷裂後脫落的尾巴\n是一種容易取得但又\n十分貴重的食材。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "Les queues de Ramoloss parfois retrouvées\ndans la nature étaient un ingrédient de cuisine\nparticulièrement prisé.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "Von selbst abgefallene Flegmon-Ruten scheinen\nüberall herumzuliegen. Dennoch gilt dieses\neinfache Nahrungsmittel als hochwertig.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "Su cola se desprende con facilidad de forma\nnatural y es un ingrediente muy valorado en la\nelaboración de platos de alta cocina.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "Le code di Slowpoke si staccano naturalmente\ne cadono qua e là. Vengono raccolte e usate\ncome preziosi ingredienti in cucina.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "Although their tails, which fall off naturally, can\neasily be found lying around, they’re a precious\ningredient for cooking.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "自然にちぎれ　そこらに　落ちている\nシッポは　手軽で　貴重な\n食料の　ひとつ　だった。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "会自然断裂并脱落下来的尾巴\n是一种容易得到又十分贵重的食材。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
      }
    },
    {
      "flavor_text": "とても　まぬけで　うごきも　にぶい。\nじかんの　ながれを　きにすることなく\nのんびりと　いきている。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "매우 멍청하고 움직임도 둔하다.\n시간의 흐름을 의식하지 않고\n느긋하게 살고 있다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "呆頭呆腦而且動作遲鈍。\n從不在意時間的流逝，\n總是悠閒度日。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "Lent et stupide, il aime se la couler douce\nsans se soucier du temps qui passe.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "Dieses Pokémon ist unglaublich faul und träge.\nEs faulenzt den ganzen Tag lang und schert sich\nnicht um die verstrichene Zeit.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "Es increíblemente lento y perezoso. Se toma las\ncosas con calma, sin preocuparse por el paso\ndel tiempo.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "Non è molto sveglio ed è lento nei movimenti.\nDorme e poltrisce tutto il giorno, incurante\ndel tempo che passa.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "Incredibly slow and sluggish. It is quite content\nto loll about without worrying about the time.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "とても　間抜けで　動きも　鈍い。\n時間の　流れを　気にすることなく\nのんびりと　生きている。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "非常呆，动作也很缓慢。\n从不在意时间的流逝，\n过着悠闲的生活。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "lets-go-pikachu",
        "url": "https://pokeapi.co/api/v2/version/31/"
      }
    },
    {
      "flavor_text": "とても　まぬけで　うごきも　にぶい。\nじかんの　ながれを　きにすることなく\nのんびりと　いきている。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "매우 멍청하고 움직임도 둔하다.\n시간의 흐름을 의식하지 않고\n느긋하게 살고 있다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "呆頭呆腦而且動作遲鈍。\n從不在意時間的流逝，\n總是悠閒度日。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "Lent et stupide, il aime se la couler douce\nsans se soucier du temps qui passe.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "Dieses Pokémon ist unglaublich faul und träge.\nEs faulenzt den ganzen Tag lang und schert sich\nnicht um die verstrichene Zeit.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "Es increíblemente lento y perezoso. Se toma las\ncosas con calma, sin preocuparse por el paso\ndel tiempo.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "Non è molto sveglio ed è lento nei movimenti.\nDorme e poltrisce tutto il giorno, incurante\ndel tempo che passa.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "Incredibly slow and sluggish. It is quite content\nto loll about without worrying about the time.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "とても　間抜けで　動きも　鈍い。\n時間の　流れを　気にすることなく\nのんびりと　生きている。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "非常呆，动作也很缓慢。\n从不在意时间的流逝，\n过着悠闲的生活。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version/32/"
      }
    },
    {
      "flavor_text": "まぬけで　どんかん。　しっぽを\nたべられても　いたみを　かんじないし　\nはえかわったことにも　きづかない。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "멍청하고 둔감하다.\n꼬리를 먹혀도 아픔을 느끼지 못하고\n꼬리가 다시 자라도 눈치채지 못한다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "呆頭呆腦而且遲鈍。尾巴\n被吃掉也不會感到疼痛，\n甚至不會發現它又長出來了。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "Il est si bête et si lent qu’il n’a pas mal lorsqu’on\nmange un morceau de sa queue. Il ne remarque\nmême pas quand elle repousse.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "Es ist so träge und unempfindlich, dass es keinen\nSchmerz verspürt, wenn seine Rute gegessen wird.\nEs bemerkt nicht einmal, dass sie nachwächst.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "Es lento y abstraído. Aunque le devoren la cola,\nni siquiera se percata, ya que no siente ningún\ndolor. Tampoco nota cuando le vuelve a crecer.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "Poco sveglio e privo di intuito. Se gli mangiano\nla coda non sente alcun dolore, e non si accorge\nnemmeno quando gli ricresce.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "Slow-witted and oblivious, this Pokémon won’t\nfeel any pain if its tail gets eaten. It won’t notice\nwhen its tail grows back, either.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "まぬけで　鈍感。　しっぽを\n食べられても　痛みを　感じないし\n生えかわったことにも　気づかない。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "又呆又迟钝。即使尾巴被吃了\n也感受不到疼痛，甚至不会\n注意到又长出了新尾巴。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "sword",
        "url": "https://pokeapi.co/api/v2/version/33/"
      }
    },
    {
      "flavor_text": "しっぽを　みずに　ひたすと　あまみが\nにじみでるので　それを　エサに\nポケモンを　おびきよせ　つりあげる。",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "꼬리를 물에 담가두면\n단맛이 배어 나오기 때문에\n이를 미끼로 포켓몬을 유인해서 낚는다.",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "尾巴浸在水裡時會滲出\n甜味，牠會以此當誘餌\n來吸引並且釣起寶可夢。",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "Lorsqu’il trempe le bout de sa queue dans l’eau,\nune substance sucrée s’en dégage. Il s’en sert\npour appâter ses proies quand il pêche.",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "Taucht es seine Rute ins Wasser, strömt sie ein\nsüßes Aroma aus. Mit diesem Köder lockt es\nandere Pokémon an, die es dann an Land zieht.",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "Hunde la cola en el agua y la usa cual caña de\npescar. La sustancia dulce que secreta le sirve\nde cebo para atraer a sus presas.",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "Se immersa nell’acqua, la coda di Slowpoke\nsecerne una dolce linfa che il Pokémon usa\nper attirare altri Pokémon e pescarli.",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "When this Pokémon’s tail is soaked in water,\nsweetness seeps from it. Slowpoke uses this trait\nto lure in and fish up other Pokémon.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "しっぽを　水に　浸すと　甘味が\nにじみ出るので　それを　エサに\nポケモンを　おびき寄せ　釣りあげる。",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    },
    {
      "flavor_text": "把尾巴泡在水里后会有甜味渗出，\n因此它会以尾巴为诱饵\n吸引宝可梦并将其钓起。",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "version": {
        "name": "shield",
        "url": "https://pokeapi.co/api/v2/version/34/"
      }
    }
  ],
  "form_descriptions": [
    
  ],
  "forms_switchable": false,
  "gender_rate": 4,
  "genera": [
    {
      "genus": "まぬけポケモン",
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      }
    },
    {
      "genus": "얼간이포켓몬",
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      }
    },
    {
      "genus": "憨憨寶可夢",
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      }
    },
    {
      "genus": "Pokémon Crétin",
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      }
    },
    {
      "genus": "Schnarcher-Pokémon",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    },
    {
      "genus": "Pokémon Atontado",
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      }
    },
    {
      "genus": "Pokémon Ronfone",
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      }
    },
    {
      "genus": "Dopey Pokémon",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    },
    {
      "genus": "まぬけポケモン",
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      }
    },
    {
      "genus": "憨憨宝可梦",
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      }
    }
  ],
  "generation": {
    "name": "generation-i",
    "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  "growth_rate": {
    "name": "medium",
    "url": "https://pokeapi.co/api/v2/growth-rate/2/"
  },
  "habitat": {
    "name": "waters-edge",
    "url": "https://pokeapi.co/api/v2/pokemon-habitat/9/"
  },
  "has_gender_differences": false,
  "hatch_counter": 20,
  "id": 79,
  "is_baby": false,
  "is_legendary": false,
  "is_mythical": false,
  "name": "slowpoke",
  "names": [
    {
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "name": "ヤドン"
    },
    {
      "language": {
        "name": "roomaji",
        "url": "https://pokeapi.co/api/v2/language/2/"
      },
      "name": "Yadon"
    },
    {
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "name": "야돈"
    },
    {
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "name": "呆呆獸"
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "name": "Ramoloss"
    },
    {
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "name": "Flegmon"
    },
    {
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "name": "Slowpoke"
    },
    {
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "name": "Slowpoke"
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "name": "Slowpoke"
    },
    {
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "name": "ヤドン"
    },
    {
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "name": "呆呆兽"
    }
  ],
  "order": 85,
  "pal_park_encounters": [
    {
      "area": {
        "name": "pond",
        "url": "https://pokeapi.co/api/v2/pal-park-area/4/"
      },
      "base_score": 50,
      "rate": 30
    }
  ],
  "pokedex_numbers": [
    {
      "entry_number": 79,
      "pokedex": {
        "name": "national",
        "url": "https://pokeapi.co/api/v2/pokedex/1/"
      }
    },
    {
      "entry_number": 79,
      "pokedex": {
        "name": "kanto",
        "url": "https://pokeapi.co/api/v2/pokedex/2/"
      }
    },
    {
      "entry_number": 80,
      "pokedex": {
        "name": "original-johto",
        "url": "https://pokeapi.co/api/v2/pokedex/3/"
      }
    },
    {
      "entry_number": 80,
      "pokedex": {
        "name": "updated-johto",
        "url": "https://pokeapi.co/api/v2/pokedex/7/"
      }
    },
    {
      "entry_number": 133,
      "pokedex": {
        "name": "kalos-coastal",
        "url": "https://pokeapi.co/api/v2/pokedex/13/"
      }
    },
    {
      "entry_number": 37,
      "pokedex": {
        "name": "original-alola",
        "url": "https://pokeapi.co/api/v2/pokedex/16/"
      }
    },
    {
      "entry_number": 37,
      "pokedex": {
        "name": "original-melemele",
        "url": "https://pokeapi.co/api/v2/pokedex/17/"
      }
    },
    {
      "entry_number": 18,
      "pokedex": {
        "name": "original-ulaula",
        "url": "https://pokeapi.co/api/v2/pokedex/19/"
      }
    },
    {
      "entry_number": 44,
      "pokedex": {
        "name": "updated-alola",
        "url": "https://pokeapi.co/api/v2/pokedex/21/"
      }
    },
    {
      "entry_number": 44,
      "pokedex": {
        "name": "updated-melemele",
        "url": "https://pokeapi.co/api/v2/pokedex/22/"
      }
    },
    {
      "entry_number": 18,
      "pokedex": {
        "name": "updated-ulaula",
        "url": "https://pokeapi.co/api/v2/pokedex/24/"
      }
    },
    {
      "entry_number": 79,
      "pokedex": {
        "name": "letsgo-kanto",
        "url": "https://pokeapi.co/api/v2/pokedex/26/"
      }
    },
    {
      "entry_number": 1,
      "pokedex": {
        "name": "isle-of-armor",
        "url": "https://pokeapi.co/api/v2/pokedex/28/"
      }
    },
    {
      "entry_number": 324,
      "pokedex": {
        "name": "paldea",
        "url": "https://pokeapi.co/api/v2/pokedex/31/"
      }
    }
  ],
  "shape": {
    "name": "quadruped",
    "url": "https://pokeapi.co/api/v2/pokemon-shape/8/"
  },
  "varieties": [
    {
      "is_default": true,
      "pokemon": {
        "name": "slowpoke",
        "url": "https://pokeapi.co/api/v2/pokemon/79/"
      }
    },
    {
      "is_default": false,
      "pokemon": {
        "name": "slowpoke-galar",
        "url": "https://pokeapi.co/api/v2/pokemon/10164/"
      }
    }
  ]
}

const pokemonStub = {
  "abilities": [
    {
      "ability": {
        "name": "oblivious",
        "url": "https://pokeapi.co/api/v2/ability/12/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "own-tempo",
        "url": "https://pokeapi.co/api/v2/ability/20/"
      },
      "is_hidden": false,
      "slot": 2
    },
    {
      "ability": {
        "name": "regenerator",
        "url": "https://pokeapi.co/api/v2/ability/144/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "base_experience": 63,
  "forms": [
    {
      "name": "slowpoke",
      "url": "https://pokeapi.co/api/v2/pokemon-form/79/"
    }
  ],
  "game_indices": [
    {
      "game_index": 37,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 37,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 37,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      "game_index": 79,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "height": 12,
  "held_items": [
    {
      "item": {
        "name": "kings-rock",
        "url": "https://pokeapi.co/api/v2/item/198/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "ruby",
            "url": "https://pokeapi.co/api/v2/version/7/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "sapphire",
            "url": "https://pokeapi.co/api/v2/version/8/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version/9/"
          }
        }
      ]
    },
    {
      "item": {
        "name": "lagging-tail",
        "url": "https://pokeapi.co/api/v2/item/256/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "pearl",
            "url": "https://pokeapi.co/api/v2/version/13/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black",
            "url": "https://pokeapi.co/api/v2/version/17/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white",
            "url": "https://pokeapi.co/api/v2/version/18/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black-2",
            "url": "https://pokeapi.co/api/v2/version/21/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white-2",
            "url": "https://pokeapi.co/api/v2/version/22/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "x",
            "url": "https://pokeapi.co/api/v2/version/23/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "omega-ruby",
            "url": "https://pokeapi.co/api/v2/version/25/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version/26/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "sun",
            "url": "https://pokeapi.co/api/v2/version/27/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "moon",
            "url": "https://pokeapi.co/api/v2/version/28/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "ultra-sun",
            "url": "https://pokeapi.co/api/v2/version/29/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "ultra-moon",
            "url": "https://pokeapi.co/api/v2/version/30/"
          }
        }
      ]
    }
  ],
  "id": 79,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/79/encounters",
  "moves": [
    {
      "move": {
        "name": "pay-day",
        "url": "https://pokeapi.co/api/v2/move/6/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "stomp",
        "url": "https://pokeapi.co/api/v2/move/23/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "headbutt",
        "url": "https://pokeapi.co/api/v2/move/29/"
      },
      "version_group_details": [
        {
          "level_learned_at": 22,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 22,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 25,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 25,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 25,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 23,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 21,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 21,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 21,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "tackle",
        "url": "https://pokeapi.co/api/v2/move/33/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "body-slam",
        "url": "https://pokeapi.co/api/v2/move/34/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "take-down",
        "url": "https://pokeapi.co/api/v2/move/36/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "double-edge",
        "url": "https://pokeapi.co/api/v2/move/38/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "growl",
        "url": "https://pokeapi.co/api/v2/move/45/"
      },
      "version_group_details": [
        {
          "level_learned_at": 27,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 27,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 5,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 3,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 3,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 3,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "disable",
        "url": "https://pokeapi.co/api/v2/move/50/"
      },
      "version_group_details": [
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 24,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 19,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 24,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "flamethrower",
        "url": "https://pokeapi.co/api/v2/move/53/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "water-gun",
        "url": "https://pokeapi.co/api/v2/move/55/"
      },
      "version_group_details": [
        {
          "level_learned_at": 33,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 33,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 13,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 11,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 11,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 11,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 12,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 6,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "hydro-pump",
        "url": "https://pokeapi.co/api/v2/move/56/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "surf",
        "url": "https://pokeapi.co/api/v2/move/57/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 30,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 30,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 30,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "ice-beam",
        "url": "https://pokeapi.co/api/v2/move/58/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "blizzard",
        "url": "https://pokeapi.co/api/v2/move/59/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psybeam",
        "url": "https://pokeapi.co/api/v2/move/60/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "bubble-beam",
        "url": "https://pokeapi.co/api/v2/move/61/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "strength",
        "url": "https://pokeapi.co/api/v2/move/70/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "thunder-wave",
        "url": "https://pokeapi.co/api/v2/move/86/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "earthquake",
        "url": "https://pokeapi.co/api/v2/move/89/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "fissure",
        "url": "https://pokeapi.co/api/v2/move/90/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "dig",
        "url": "https://pokeapi.co/api/v2/move/91/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "toxic",
        "url": "https://pokeapi.co/api/v2/move/92/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move/93/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 17,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 15,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 20,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 14,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 12,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 12,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 12,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/move/94/"
      },
      "version_group_details": [
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 40,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 42,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "rage",
        "url": "https://pokeapi.co/api/v2/move/99/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "teleport",
        "url": "https://pokeapi.co/api/v2/move/100/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "mimic",
        "url": "https://pokeapi.co/api/v2/move/102/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "double-team",
        "url": "https://pokeapi.co/api/v2/move/104/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "light-screen",
        "url": "https://pokeapi.co/api/v2/move/113/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "reflect",
        "url": "https://pokeapi.co/api/v2/move/115/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "bide",
        "url": "https://pokeapi.co/api/v2/move/117/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "fire-blast",
        "url": "https://pokeapi.co/api/v2/move/126/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "waterfall",
        "url": "https://pokeapi.co/api/v2/move/127/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "swift",
        "url": "https://pokeapi.co/api/v2/move/129/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "skull-bash",
        "url": "https://pokeapi.co/api/v2/move/130/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "amnesia",
        "url": "https://pokeapi.co/api/v2/move/133/"
      },
      "version_group_details": [
        {
          "level_learned_at": 40,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 40,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 43,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 41,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 48,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 27,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 27,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 27,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "dream-eater",
        "url": "https://pokeapi.co/api/v2/move/138/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "flash",
        "url": "https://pokeapi.co/api/v2/move/148/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psywave",
        "url": "https://pokeapi.co/api/v2/move/149/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "rest",
        "url": "https://pokeapi.co/api/v2/move/156/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 30,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "tri-attack",
        "url": "https://pokeapi.co/api/v2/move/161/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "substitute",
        "url": "https://pokeapi.co/api/v2/move/164/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "nightmare",
        "url": "https://pokeapi.co/api/v2/move/171/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "snore",
        "url": "https://pokeapi.co/api/v2/move/173/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "curse",
        "url": "https://pokeapi.co/api/v2/move/174/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "protect",
        "url": "https://pokeapi.co/api/v2/move/182/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "belly-drum",
        "url": "https://pokeapi.co/api/v2/move/187/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "mud-slap",
        "url": "https://pokeapi.co/api/v2/move/189/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "zap-cannon",
        "url": "https://pokeapi.co/api/v2/move/192/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "icy-wind",
        "url": "https://pokeapi.co/api/v2/move/196/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "endure",
        "url": "https://pokeapi.co/api/v2/move/203/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "swagger",
        "url": "https://pokeapi.co/api/v2/move/207/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "attract",
        "url": "https://pokeapi.co/api/v2/move/213/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "sleep-talk",
        "url": "https://pokeapi.co/api/v2/move/214/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "return",
        "url": "https://pokeapi.co/api/v2/move/216/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "frustration",
        "url": "https://pokeapi.co/api/v2/move/218/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "safeguard",
        "url": "https://pokeapi.co/api/v2/move/219/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "iron-tail",
        "url": "https://pokeapi.co/api/v2/move/231/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "hidden-power",
        "url": "https://pokeapi.co/api/v2/move/237/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "rain-dance",
        "url": "https://pokeapi.co/api/v2/move/240/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 53,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 53,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 53,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 49,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 42,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 42,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 42,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "sunny-day",
        "url": "https://pokeapi.co/api/v2/move/241/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psych-up",
        "url": "https://pokeapi.co/api/v2/move/244/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 47,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 57,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 57,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 57,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 54,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "shadow-ball",
        "url": "https://pokeapi.co/api/v2/move/247/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "future-sight",
        "url": "https://pokeapi.co/api/v2/move/248/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "whirlpool",
        "url": "https://pokeapi.co/api/v2/move/250/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "hail",
        "url": "https://pokeapi.co/api/v2/move/258/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "facade",
        "url": "https://pokeapi.co/api/v2/move/263/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "helping-hand",
        "url": "https://pokeapi.co/api/v2/move/270/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "trick",
        "url": "https://pokeapi.co/api/v2/move/271/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "magic-coat",
        "url": "https://pokeapi.co/api/v2/move/277/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "recycle",
        "url": "https://pokeapi.co/api/v2/move/278/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "yawn",
        "url": "https://pokeapi.co/api/v2/move/281/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 9,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "skill-swap",
        "url": "https://pokeapi.co/api/v2/move/285/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "imprison",
        "url": "https://pokeapi.co/api/v2/move/286/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "secret-power",
        "url": "https://pokeapi.co/api/v2/move/290/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "dive",
        "url": "https://pokeapi.co/api/v2/move/291/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "mud-sport",
        "url": "https://pokeapi.co/api/v2/move/300/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "slack-off",
        "url": "https://pokeapi.co/api/v2/move/303/"
      },
      "version_group_details": [
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 39,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 36,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 33,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 33,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 33,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "weather-ball",
        "url": "https://pokeapi.co/api/v2/move/311/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "signal-beam",
        "url": "https://pokeapi.co/api/v2/move/324/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "block",
        "url": "https://pokeapi.co/api/v2/move/335/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "mud-shot",
        "url": "https://pokeapi.co/api/v2/move/341/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "calm-mind",
        "url": "https://pokeapi.co/api/v2/move/347/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "water-pulse",
        "url": "https://pokeapi.co/api/v2/move/352/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 29,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 28,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 18,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "brine",
        "url": "https://pokeapi.co/api/v2/move/362/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "natural-gift",
        "url": "https://pokeapi.co/api/v2/move/363/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "me-first",
        "url": "https://pokeapi.co/api/v2/move/382/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "aqua-tail",
        "url": "https://pokeapi.co/api/v2/move/401/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "avalanche",
        "url": "https://pokeapi.co/api/v2/move/419/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "zen-headbutt",
        "url": "https://pokeapi.co/api/v2/move/428/"
      },
      "version_group_details": [
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 34,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 32,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 24,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 24,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 24,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "trick-room",
        "url": "https://pokeapi.co/api/v2/move/433/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "captivate",
        "url": "https://pokeapi.co/api/v2/move/445/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "grass-knot",
        "url": "https://pokeapi.co/api/v2/move/447/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "wonder-room",
        "url": "https://pokeapi.co/api/v2/move/472/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psyshock",
        "url": "https://pokeapi.co/api/v2/move/473/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "telekinesis",
        "url": "https://pokeapi.co/api/v2/move/477/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "foul-play",
        "url": "https://pokeapi.co/api/v2/move/492/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "after-you",
        "url": "https://pokeapi.co/api/v2/move/495/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "round",
        "url": "https://pokeapi.co/api/v2/move/496/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "echoed-voice",
        "url": "https://pokeapi.co/api/v2/move/497/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "stored-power",
        "url": "https://pokeapi.co/api/v2/move/500/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "scald",
        "url": "https://pokeapi.co/api/v2/move/503/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "heal-pulse",
        "url": "https://pokeapi.co/api/v2/move/505/"
      },
      "version_group_details": [
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 58,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 45,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "incinerate",
        "url": "https://pokeapi.co/api/v2/move/510/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "bulldoze",
        "url": "https://pokeapi.co/api/v2/move/523/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "belch",
        "url": "https://pokeapi.co/api/v2/move/562/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "brilliant-diamond-and-shining-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/23/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "confide",
        "url": "https://pokeapi.co/api/v2/move/590/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "psychic-terrain",
        "url": "https://pokeapi.co/api/v2/move/678/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "liquidation",
        "url": "https://pokeapi.co/api/v2/move/710/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "expanding-force",
        "url": "https://pokeapi.co/api/v2/move/797/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "tutor",
            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
          },
          "version_group": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "tera-blast",
        "url": "https://pokeapi.co/api/v2/move/851/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "snowscape",
        "url": "https://pokeapi.co/api/v2/move/883/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    },
    {
      "move": {
        "name": "chilling-water",
        "url": "https://pokeapi.co/api/v2/move/886/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          "version_group": {
            "name": "scarlet-violet",
            "url": "https://pokeapi.co/api/v2/version-group/25/"
          }
        }
      ]
    }
  ],
  "name": "slowpoke",
  "order": 125,
  "past_abilities": [
    
  ],
  "past_types": [
    
  ],
  "species": {
    "name": "slowpoke",
    "url": "https://pokeapi.co/api/v2/pokemon-species/79/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/79.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
        "front_female": null
      },
      "home": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/79.png",
        "front_shiny_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/79.png"
      }
    },
    "versions": {
      "generation-i": {
        "red-blue": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/79.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/79.png",
          "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/79.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/79.png",
          "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/79.png"
        },
        "yellow": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/79.png",
          "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/79.png",
          "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/79.png",
          "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/79.png",
          "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/79.png"
        }
      },
      "generation-ii": {
        "crystal": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/79.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/79.png",
          "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/79.png",
          "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/79.png",
          "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/79.png",
          "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/79.png"
        },
        "gold": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/79.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/79.png",
          "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/79.png"
        },
        "silver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/79.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/79.png",
          "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/79.png"
        }
      },
      "generation-iii": {
        "emerald": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/79.png"
        },
        "firered-leafgreen": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/79.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/79.png"
        },
        "ruby-sapphire": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/79.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/79.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/79.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/79.png"
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/79.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/79.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/79.png",
          "front_shiny_female": null
        },
        "heartgold-soulsilver": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/79.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/79.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/79.png",
          "front_shiny_female": null
        },
        "platinum": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/79.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/79.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/79.png",
          "front_shiny_female": null
        }
      },
      "generation-v": {
        "black-white": {
          "animated": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/79.gif",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/79.gif",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/79.gif",
            "front_shiny_female": null
          },
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/79.png",
          "back_female": null,
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/79.png",
          "back_shiny_female": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/79.png",
          "front_shiny_female": null
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/79.png",
          "front_shiny_female": null
        },
        "x-y": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/79.png",
          "front_shiny_female": null
        }
      },
      "generation-vii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/79.png",
          "front_female": null
        },
        "ultra-sun-ultra-moon": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/79.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/79.png",
          "front_shiny_female": null
        }
      },
      "generation-viii": {
        "icons": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/79.png",
          "front_female": null
        }
      }
    }
  },
  "stats": [
    {
      "base_stat": 90,
      "effort": 1,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 40,
      "effort": 0,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 40,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 15,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "water",
        "url": "https://pokeapi.co/api/v2/type/11/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "psychic",
        "url": "https://pokeapi.co/api/v2/type/14/"
      }
    }
  ],
  "weight": 360
}

const mockRequest = (res) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: res
      })
    }, 500)
  })
}

const mockFailedRequest = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 500)
  })
}

describe('API requests', () => {
  afterEach(() => {
    jest.restoreAllMocks
  })
  
  describe('Get species', () => {
    it('should return the desired pokemon species', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockRequest(speciesStub) as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemonSpecies('slowpoke')).data

      expect(yadon).toEqual(speciesStub);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon-species/slowpoke')
    });

    it('should return undefined when request fails', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockFailedRequest() as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemonSpecies('fastpoke')).data

      expect(yadon).toEqual(undefined);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon-species/fastpoke')
    });
  })

  describe('Get pokemon', () => {
    it('should return the desired pokemon', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockRequest(pokemonStub) as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemon('slowpoke')).data

      expect(yadon).toEqual(pokemonStub);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon/slowpoke')
    });

    it('should return undefined when request fails', async () => {
      const mockedApi = mocked(pokeApi)
      mockedApi.get.mockImplementation(() => mockFailedRequest() as any)
      const pokeApiSpy = jest.spyOn(mockedApi, 'get')

      const yadon = (await getPokemon('fastpoke')).data

      expect(yadon).toEqual(undefined);
      expect(pokeApiSpy).toHaveBeenCalledWith('pokemon/fastpoke')
    });
  })
})