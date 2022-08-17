import { Registry, Server } from 'miragejs'
import { AnyFactories, AnyModels } from 'miragejs/-types'

export default function seeds(
  server: Server<Registry<AnyModels, AnyFactories>>
) {
  server.db.loadData({
    suggestions: [
      {
        title: 'Vingadores: Guerra Infinita',
        type: 'Filme',
        visited: true,
      },
      {
        title: "Don't starve together",
        type: 'Jogo',
      },
      {
        title: 'Brawlhalla',
        type: 'Jogo',
      },
      {
        title: 'Como fazer coronavac usando margarina e javascript',
        type: 'Receita',
      },
      {
        title: 'Como lavar dinheiro',
        type: 'Tutorial',
      },
      {
        title: 'Bulbasaur',
        type: 'Pokémon',
      },
      {
        title: 'Ivysaur',
        type: 'Pokémon',
      },
      {
        title: 'Venusaur',
        type: 'Pokémon',
      },
      {
        title: 'Charmander',
        type: 'Pokémon',
      },
      {
        title: 'Charmeleon',
        type: 'Pokémon',
      },
      {
        title: 'Charizard',
        type: 'Pokémon',
      },
      {
        title: 'Squirtle',
        type: 'Pokémon',
      },
      {
        title: 'Wartortle',
        type: 'Pokémon',
      },
      {
        title: 'Blastoise',
        type: 'Pokémon',
      },
      {
        title: 'Caterpie',
        type: 'Pokémon',
      },
      {
        title: 'Metapod',
        type: 'Pokémon',
      },
      {
        title: 'Butterfree',
        type: 'Pokémon',
      },
      {
        title: 'Weedle',
        type: 'Pokémon',
      },
      {
        title: 'Kakuna',
        type: 'Pokémon',
      },
      {
        title: 'Beedrill',
        type: 'Pokémon',
      },
      {
        title: 'Pidgey',
        type: 'Pokémon',
      },
      {
        title: 'Pidgeotto',
        type: 'Pokémon',
      },
      {
        title: 'Pidgeot',
        type: 'Pokémon',
      },
      {
        title: 'Rattata',
        type: 'Pokémon',
      },
      {
        title: 'Raticate',
        type: 'Pokémon',
      },
      {
        title: 'Spearow',
        type: 'Pokémon',
      },
      {
        title: 'Fearow',
        type: 'Pokémon',
      },
      {
        title: 'Ekans',
        type: 'Pokémon',
      },
      {
        title: 'Arbok',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu',
        type: 'Pokémon',
      },
      {
        title: 'Raichu',
        type: 'Pokémon',
      },
      {
        title: 'Sandshrew',
        type: 'Pokémon',
      },
      {
        title: 'Sandslash',
        type: 'Pokémon',
      },
      {
        title: 'Nidoran-f',
        type: 'Pokémon',
      },
      {
        title: 'Nidorina',
        type: 'Pokémon',
      },
      {
        title: 'Nidoqueen',
        type: 'Pokémon',
      },
      {
        title: 'Nidoran-m',
        type: 'Pokémon',
      },
      {
        title: 'Nidorino',
        type: 'Pokémon',
      },
      {
        title: 'Nidoking',
        type: 'Pokémon',
      },
      {
        title: 'Clefairy',
        type: 'Pokémon',
      },
      {
        title: 'Clefable',
        type: 'Pokémon',
      },
      {
        title: 'Vulpix',
        type: 'Pokémon',
      },
      {
        title: 'Ninetales',
        type: 'Pokémon',
      },
      {
        title: 'Jigglypuff',
        type: 'Pokémon',
      },
      {
        title: 'Wigglytuff',
        type: 'Pokémon',
      },
      {
        title: 'Zubat',
        type: 'Pokémon',
      },
      {
        title: 'Golbat',
        type: 'Pokémon',
      },
      {
        title: 'Oddish',
        type: 'Pokémon',
      },
      {
        title: 'Gloom',
        type: 'Pokémon',
      },
      {
        title: 'Vileplume',
        type: 'Pokémon',
      },
      {
        title: 'Paras',
        type: 'Pokémon',
      },
      {
        title: 'Parasect',
        type: 'Pokémon',
      },
      {
        title: 'Venonat',
        type: 'Pokémon',
      },
      {
        title: 'Venomoth',
        type: 'Pokémon',
      },
      {
        title: 'Diglett',
        type: 'Pokémon',
      },
      {
        title: 'Dugtrio',
        type: 'Pokémon',
      },
      {
        title: 'Meowth',
        type: 'Pokémon',
      },
      {
        title: 'Persian',
        type: 'Pokémon',
      },
      {
        title: 'Psyduck',
        type: 'Pokémon',
      },
      {
        title: 'Golduck',
        type: 'Pokémon',
      },
      {
        title: 'Mankey',
        type: 'Pokémon',
      },
      {
        title: 'Primeape',
        type: 'Pokémon',
      },
      {
        title: 'Growlithe',
        type: 'Pokémon',
      },
      {
        title: 'Arcanine',
        type: 'Pokémon',
      },
      {
        title: 'Poliwag',
        type: 'Pokémon',
      },
      {
        title: 'Poliwhirl',
        type: 'Pokémon',
      },
      {
        title: 'Poliwrath',
        type: 'Pokémon',
      },
      {
        title: 'Abra',
        type: 'Pokémon',
      },
      {
        title: 'Kadabra',
        type: 'Pokémon',
      },
      {
        title: 'Alakazam',
        type: 'Pokémon',
      },
      {
        title: 'Machop',
        type: 'Pokémon',
      },
      {
        title: 'Machoke',
        type: 'Pokémon',
      },
      {
        title: 'Machamp',
        type: 'Pokémon',
      },
      {
        title: 'Bellsprout',
        type: 'Pokémon',
      },
      {
        title: 'Weepinbell',
        type: 'Pokémon',
      },
      {
        title: 'Victreebel',
        type: 'Pokémon',
      },
      {
        title: 'Tentacool',
        type: 'Pokémon',
      },
      {
        title: 'Tentacruel',
        type: 'Pokémon',
      },
      {
        title: 'Geodude',
        type: 'Pokémon',
      },
      {
        title: 'Graveler',
        type: 'Pokémon',
      },
      {
        title: 'Golem',
        type: 'Pokémon',
      },
      {
        title: 'Ponyta',
        type: 'Pokémon',
      },
      {
        title: 'Rapidash',
        type: 'Pokémon',
      },
      {
        title: 'Slowpoke',
        type: 'Pokémon',
      },
      {
        title: 'Slowbro',
        type: 'Pokémon',
      },
      {
        title: 'Magnemite',
        type: 'Pokémon',
      },
      {
        title: 'Magneton',
        type: 'Pokémon',
      },
      {
        title: 'Farfetchd',
        type: 'Pokémon',
      },
      {
        title: 'Doduo',
        type: 'Pokémon',
      },
      {
        title: 'Dodrio',
        type: 'Pokémon',
      },
      {
        title: 'Seel',
        type: 'Pokémon',
      },
      {
        title: 'Dewgong',
        type: 'Pokémon',
      },
      {
        title: 'Grimer',
        type: 'Pokémon',
      },
      {
        title: 'Muk',
        type: 'Pokémon',
      },
      {
        title: 'Shellder',
        type: 'Pokémon',
      },
      {
        title: 'Cloyster',
        type: 'Pokémon',
      },
      {
        title: 'Gastly',
        type: 'Pokémon',
      },
      {
        title: 'Haunter',
        type: 'Pokémon',
      },
      {
        title: 'Gengar',
        type: 'Pokémon',
      },
      {
        title: 'Onix',
        type: 'Pokémon',
      },
      {
        title: 'Drowzee',
        type: 'Pokémon',
      },
      {
        title: 'Hypno',
        type: 'Pokémon',
      },
      {
        title: 'Krabby',
        type: 'Pokémon',
      },
      {
        title: 'Kingler',
        type: 'Pokémon',
      },
      {
        title: 'Voltorb',
        type: 'Pokémon',
      },
      {
        title: 'Electrode',
        type: 'Pokémon',
      },
      {
        title: 'Exeggcute',
        type: 'Pokémon',
      },
      {
        title: 'Exeggutor',
        type: 'Pokémon',
      },
      {
        title: 'Cubone',
        type: 'Pokémon',
      },
      {
        title: 'Marowak',
        type: 'Pokémon',
      },
      {
        title: 'Hitmonlee',
        type: 'Pokémon',
      },
      {
        title: 'Hitmonchan',
        type: 'Pokémon',
      },
      {
        title: 'Lickitung',
        type: 'Pokémon',
      },
      {
        title: 'Koffing',
        type: 'Pokémon',
      },
      {
        title: 'Weezing',
        type: 'Pokémon',
      },
      {
        title: 'Rhyhorn',
        type: 'Pokémon',
      },
      {
        title: 'Rhydon',
        type: 'Pokémon',
      },
      {
        title: 'Chansey',
        type: 'Pokémon',
      },
      {
        title: 'Tangela',
        type: 'Pokémon',
      },
      {
        title: 'Kangaskhan',
        type: 'Pokémon',
      },
      {
        title: 'Horsea',
        type: 'Pokémon',
      },
      {
        title: 'Seadra',
        type: 'Pokémon',
      },
      {
        title: 'Goldeen',
        type: 'Pokémon',
      },
      {
        title: 'Seaking',
        type: 'Pokémon',
      },
      {
        title: 'Staryu',
        type: 'Pokémon',
      },
      {
        title: 'Starmie',
        type: 'Pokémon',
      },
      {
        title: 'Mr-mime',
        type: 'Pokémon',
      },
      {
        title: 'Scyther',
        type: 'Pokémon',
      },
      {
        title: 'Jynx',
        type: 'Pokémon',
      },
      {
        title: 'Electabuzz',
        type: 'Pokémon',
      },
      {
        title: 'Magmar',
        type: 'Pokémon',
      },
      {
        title: 'Pinsir',
        type: 'Pokémon',
      },
      {
        title: 'Tauros',
        type: 'Pokémon',
      },
      {
        title: 'Magikarp',
        type: 'Pokémon',
      },
      {
        title: 'Gyarados',
        type: 'Pokémon',
      },
      {
        title: 'Lapras',
        type: 'Pokémon',
      },
      {
        title: 'Ditto',
        type: 'Pokémon',
      },
      {
        title: 'Eevee',
        type: 'Pokémon',
      },
      {
        title: 'Vaporeon',
        type: 'Pokémon',
      },
      {
        title: 'Jolteon',
        type: 'Pokémon',
      },
      {
        title: 'Flareon',
        type: 'Pokémon',
      },
      {
        title: 'Porygon',
        type: 'Pokémon',
      },
      {
        title: 'Omanyte',
        type: 'Pokémon',
      },
      {
        title: 'Omastar',
        type: 'Pokémon',
      },
      {
        title: 'Kabuto',
        type: 'Pokémon',
      },
      {
        title: 'Kabutops',
        type: 'Pokémon',
      },
      {
        title: 'Aerodactyl',
        type: 'Pokémon',
      },
      {
        title: 'Snorlax',
        type: 'Pokémon',
      },
      {
        title: 'Articuno',
        type: 'Pokémon',
      },
      {
        title: 'Zapdos',
        type: 'Pokémon',
      },
      {
        title: 'Moltres',
        type: 'Pokémon',
      },
      {
        title: 'Dratini',
        type: 'Pokémon',
      },
      {
        title: 'Dragonair',
        type: 'Pokémon',
      },
      {
        title: 'Dragonite',
        type: 'Pokémon',
      },
      {
        title: 'Mewtwo',
        type: 'Pokémon',
      },
      {
        title: 'Mew',
        type: 'Pokémon',
      },
      {
        title: 'Chikorita',
        type: 'Pokémon',
      },
      {
        title: 'Bayleef',
        type: 'Pokémon',
      },
      {
        title: 'Meganium',
        type: 'Pokémon',
      },
      {
        title: 'Cyndaquil',
        type: 'Pokémon',
      },
      {
        title: 'Quilava',
        type: 'Pokémon',
      },
      {
        title: 'Typhlosion',
        type: 'Pokémon',
      },
      {
        title: 'Totodile',
        type: 'Pokémon',
      },
      {
        title: 'Croconaw',
        type: 'Pokémon',
      },
      {
        title: 'Feraligatr',
        type: 'Pokémon',
      },
      {
        title: 'Sentret',
        type: 'Pokémon',
      },
      {
        title: 'Furret',
        type: 'Pokémon',
      },
      {
        title: 'Hoothoot',
        type: 'Pokémon',
      },
      {
        title: 'Noctowl',
        type: 'Pokémon',
      },
      {
        title: 'Ledyba',
        type: 'Pokémon',
      },
      {
        title: 'Ledian',
        type: 'Pokémon',
      },
      {
        title: 'Spinarak',
        type: 'Pokémon',
      },
      {
        title: 'Ariados',
        type: 'Pokémon',
      },
      {
        title: 'Crobat',
        type: 'Pokémon',
      },
      {
        title: 'Chinchou',
        type: 'Pokémon',
      },
      {
        title: 'Lanturn',
        type: 'Pokémon',
      },
      {
        title: 'Pichu',
        type: 'Pokémon',
      },
      {
        title: 'Cleffa',
        type: 'Pokémon',
      },
      {
        title: 'Igglybuff',
        type: 'Pokémon',
      },
      {
        title: 'Togepi',
        type: 'Pokémon',
      },
      {
        title: 'Togetic',
        type: 'Pokémon',
      },
      {
        title: 'Natu',
        type: 'Pokémon',
      },
      {
        title: 'Xatu',
        type: 'Pokémon',
      },
      {
        title: 'Mareep',
        type: 'Pokémon',
      },
      {
        title: 'Flaaffy',
        type: 'Pokémon',
      },
      {
        title: 'Ampharos',
        type: 'Pokémon',
      },
      {
        title: 'Bellossom',
        type: 'Pokémon',
      },
      {
        title: 'Marill',
        type: 'Pokémon',
      },
      {
        title: 'Azumarill',
        type: 'Pokémon',
      },
      {
        title: 'Sudowoodo',
        type: 'Pokémon',
      },
      {
        title: 'Politoed',
        type: 'Pokémon',
      },
      {
        title: 'Hoppip',
        type: 'Pokémon',
      },
      {
        title: 'Skiploom',
        type: 'Pokémon',
      },
      {
        title: 'Jumpluff',
        type: 'Pokémon',
      },
      {
        title: 'Aipom',
        type: 'Pokémon',
      },
      {
        title: 'Sunkern',
        type: 'Pokémon',
      },
      {
        title: 'Sunflora',
        type: 'Pokémon',
      },
      {
        title: 'Yanma',
        type: 'Pokémon',
      },
      {
        title: 'Wooper',
        type: 'Pokémon',
      },
      {
        title: 'Quagsire',
        type: 'Pokémon',
      },
      {
        title: 'Espeon',
        type: 'Pokémon',
      },
      {
        title: 'Umbreon',
        type: 'Pokémon',
      },
      {
        title: 'Murkrow',
        type: 'Pokémon',
      },
      {
        title: 'Slowking',
        type: 'Pokémon',
      },
      {
        title: 'Misdreavus',
        type: 'Pokémon',
      },
      {
        title: 'Unown',
        type: 'Pokémon',
      },
      {
        title: 'Wobbuffet',
        type: 'Pokémon',
      },
      {
        title: 'Girafarig',
        type: 'Pokémon',
      },
      {
        title: 'Pineco',
        type: 'Pokémon',
      },
      {
        title: 'Forretress',
        type: 'Pokémon',
      },
      {
        title: 'Dunsparce',
        type: 'Pokémon',
      },
      {
        title: 'Gligar',
        type: 'Pokémon',
      },
      {
        title: 'Steelix',
        type: 'Pokémon',
      },
      {
        title: 'Snubbull',
        type: 'Pokémon',
      },
      {
        title: 'Granbull',
        type: 'Pokémon',
      },
      {
        title: 'Qwilfish',
        type: 'Pokémon',
      },
      {
        title: 'Scizor',
        type: 'Pokémon',
      },
      {
        title: 'Shuckle',
        type: 'Pokémon',
      },
      {
        title: 'Heracross',
        type: 'Pokémon',
      },
      {
        title: 'Sneasel',
        type: 'Pokémon',
      },
      {
        title: 'Teddiursa',
        type: 'Pokémon',
      },
      {
        title: 'Ursaring',
        type: 'Pokémon',
      },
      {
        title: 'Slugma',
        type: 'Pokémon',
      },
      {
        title: 'Magcargo',
        type: 'Pokémon',
      },
      {
        title: 'Swinub',
        type: 'Pokémon',
      },
      {
        title: 'Piloswine',
        type: 'Pokémon',
      },
      {
        title: 'Corsola',
        type: 'Pokémon',
      },
      {
        title: 'Remoraid',
        type: 'Pokémon',
      },
      {
        title: 'Octillery',
        type: 'Pokémon',
      },
      {
        title: 'Delibird',
        type: 'Pokémon',
      },
      {
        title: 'Mantine',
        type: 'Pokémon',
      },
      {
        title: 'Skarmory',
        type: 'Pokémon',
      },
      {
        title: 'Houndour',
        type: 'Pokémon',
      },
      {
        title: 'Houndoom',
        type: 'Pokémon',
      },
      {
        title: 'Kingdra',
        type: 'Pokémon',
      },
      {
        title: 'Phanpy',
        type: 'Pokémon',
      },
      {
        title: 'Donphan',
        type: 'Pokémon',
      },
      {
        title: 'Porygon2',
        type: 'Pokémon',
      },
      {
        title: 'Stantler',
        type: 'Pokémon',
      },
      {
        title: 'Smeargle',
        type: 'Pokémon',
      },
      {
        title: 'Tyrogue',
        type: 'Pokémon',
      },
      {
        title: 'Hitmontop',
        type: 'Pokémon',
      },
      {
        title: 'Smoochum',
        type: 'Pokémon',
      },
      {
        title: 'Elekid',
        type: 'Pokémon',
      },
      {
        title: 'Magby',
        type: 'Pokémon',
      },
      {
        title: 'Miltank',
        type: 'Pokémon',
      },
      {
        title: 'Blissey',
        type: 'Pokémon',
      },
      {
        title: 'Raikou',
        type: 'Pokémon',
      },
      {
        title: 'Entei',
        type: 'Pokémon',
      },
      {
        title: 'Suicune',
        type: 'Pokémon',
      },
      {
        title: 'Larvitar',
        type: 'Pokémon',
      },
      {
        title: 'Pupitar',
        type: 'Pokémon',
      },
      {
        title: 'Tyranitar',
        type: 'Pokémon',
      },
      {
        title: 'Lugia',
        type: 'Pokémon',
      },
      {
        title: 'Ho-oh',
        type: 'Pokémon',
      },
      {
        title: 'Celebi',
        type: 'Pokémon',
      },
      {
        title: 'Treecko',
        type: 'Pokémon',
      },
      {
        title: 'Grovyle',
        type: 'Pokémon',
      },
      {
        title: 'Sceptile',
        type: 'Pokémon',
      },
      {
        title: 'Torchic',
        type: 'Pokémon',
      },
      {
        title: 'Combusken',
        type: 'Pokémon',
      },
      {
        title: 'Blaziken',
        type: 'Pokémon',
      },
      {
        title: 'Mudkip',
        type: 'Pokémon',
      },
      {
        title: 'Marshtomp',
        type: 'Pokémon',
      },
      {
        title: 'Swampert',
        type: 'Pokémon',
      },
      {
        title: 'Poochyena',
        type: 'Pokémon',
      },
      {
        title: 'Mightyena',
        type: 'Pokémon',
      },
      {
        title: 'Zigzagoon',
        type: 'Pokémon',
      },
      {
        title: 'Linoone',
        type: 'Pokémon',
      },
      {
        title: 'Wurmple',
        type: 'Pokémon',
      },
      {
        title: 'Silcoon',
        type: 'Pokémon',
      },
      {
        title: 'Beautifly',
        type: 'Pokémon',
      },
      {
        title: 'Cascoon',
        type: 'Pokémon',
      },
      {
        title: 'Dustox',
        type: 'Pokémon',
      },
      {
        title: 'Lotad',
        type: 'Pokémon',
      },
      {
        title: 'Lombre',
        type: 'Pokémon',
      },
      {
        title: 'Ludicolo',
        type: 'Pokémon',
      },
      {
        title: 'Seedot',
        type: 'Pokémon',
      },
      {
        title: 'Nuzleaf',
        type: 'Pokémon',
      },
      {
        title: 'Shiftry',
        type: 'Pokémon',
      },
      {
        title: 'Taillow',
        type: 'Pokémon',
      },
      {
        title: 'Swellow',
        type: 'Pokémon',
      },
      {
        title: 'Wingull',
        type: 'Pokémon',
      },
      {
        title: 'Pelipper',
        type: 'Pokémon',
      },
      {
        title: 'Ralts',
        type: 'Pokémon',
      },
      {
        title: 'Kirlia',
        type: 'Pokémon',
      },
      {
        title: 'Gardevoir',
        type: 'Pokémon',
      },
      {
        title: 'Surskit',
        type: 'Pokémon',
      },
      {
        title: 'Masquerain',
        type: 'Pokémon',
      },
      {
        title: 'Shroomish',
        type: 'Pokémon',
      },
      {
        title: 'Breloom',
        type: 'Pokémon',
      },
      {
        title: 'Slakoth',
        type: 'Pokémon',
      },
      {
        title: 'Vigoroth',
        type: 'Pokémon',
      },
      {
        title: 'Slaking',
        type: 'Pokémon',
      },
      {
        title: 'Nincada',
        type: 'Pokémon',
      },
      {
        title: 'Ninjask',
        type: 'Pokémon',
      },
      {
        title: 'Shedinja',
        type: 'Pokémon',
      },
      {
        title: 'Whismur',
        type: 'Pokémon',
      },
      {
        title: 'Loudred',
        type: 'Pokémon',
      },
      {
        title: 'Exploud',
        type: 'Pokémon',
      },
      {
        title: 'Makuhita',
        type: 'Pokémon',
      },
      {
        title: 'Hariyama',
        type: 'Pokémon',
      },
      {
        title: 'Azurill',
        type: 'Pokémon',
      },
      {
        title: 'Nosepass',
        type: 'Pokémon',
      },
      {
        title: 'Skitty',
        type: 'Pokémon',
      },
      {
        title: 'Delcatty',
        type: 'Pokémon',
      },
      {
        title: 'Sableye',
        type: 'Pokémon',
      },
      {
        title: 'Mawile',
        type: 'Pokémon',
      },
      {
        title: 'Aron',
        type: 'Pokémon',
      },
      {
        title: 'Lairon',
        type: 'Pokémon',
      },
      {
        title: 'Aggron',
        type: 'Pokémon',
      },
      {
        title: 'Meditite',
        type: 'Pokémon',
      },
      {
        title: 'Medicham',
        type: 'Pokémon',
      },
      {
        title: 'Electrike',
        type: 'Pokémon',
      },
      {
        title: 'Manectric',
        type: 'Pokémon',
      },
      {
        title: 'Plusle',
        type: 'Pokémon',
      },
      {
        title: 'Minun',
        type: 'Pokémon',
      },
      {
        title: 'Volbeat',
        type: 'Pokémon',
      },
      {
        title: 'Illumise',
        type: 'Pokémon',
      },
      {
        title: 'Roselia',
        type: 'Pokémon',
      },
      {
        title: 'Gulpin',
        type: 'Pokémon',
      },
      {
        title: 'Swalot',
        type: 'Pokémon',
      },
      {
        title: 'Carvanha',
        type: 'Pokémon',
      },
      {
        title: 'Sharpedo',
        type: 'Pokémon',
      },
      {
        title: 'Wailmer',
        type: 'Pokémon',
      },
      {
        title: 'Wailord',
        type: 'Pokémon',
      },
      {
        title: 'Numel',
        type: 'Pokémon',
      },
      {
        title: 'Camerupt',
        type: 'Pokémon',
      },
      {
        title: 'Torkoal',
        type: 'Pokémon',
      },
      {
        title: 'Spoink',
        type: 'Pokémon',
      },
      {
        title: 'Grumpig',
        type: 'Pokémon',
      },
      {
        title: 'Spinda',
        type: 'Pokémon',
      },
      {
        title: 'Trapinch',
        type: 'Pokémon',
      },
      {
        title: 'Vibrava',
        type: 'Pokémon',
      },
      {
        title: 'Flygon',
        type: 'Pokémon',
      },
      {
        title: 'Cacnea',
        type: 'Pokémon',
      },
      {
        title: 'Cacturne',
        type: 'Pokémon',
      },
      {
        title: 'Swablu',
        type: 'Pokémon',
      },
      {
        title: 'Altaria',
        type: 'Pokémon',
      },
      {
        title: 'Zangoose',
        type: 'Pokémon',
      },
      {
        title: 'Seviper',
        type: 'Pokémon',
      },
      {
        title: 'Lunatone',
        type: 'Pokémon',
      },
      {
        title: 'Solrock',
        type: 'Pokémon',
      },
      {
        title: 'Barboach',
        type: 'Pokémon',
      },
      {
        title: 'Whiscash',
        type: 'Pokémon',
      },
      {
        title: 'Corphish',
        type: 'Pokémon',
      },
      {
        title: 'Crawdaunt',
        type: 'Pokémon',
      },
      {
        title: 'Baltoy',
        type: 'Pokémon',
      },
      {
        title: 'Claydol',
        type: 'Pokémon',
      },
      {
        title: 'Lileep',
        type: 'Pokémon',
      },
      {
        title: 'Cradily',
        type: 'Pokémon',
      },
      {
        title: 'Anorith',
        type: 'Pokémon',
      },
      {
        title: 'Armaldo',
        type: 'Pokémon',
      },
      {
        title: 'Feebas',
        type: 'Pokémon',
      },
      {
        title: 'Milotic',
        type: 'Pokémon',
      },
      {
        title: 'Castform',
        type: 'Pokémon',
      },
      {
        title: 'Kecleon',
        type: 'Pokémon',
      },
      {
        title: 'Shuppet',
        type: 'Pokémon',
      },
      {
        title: 'Banette',
        type: 'Pokémon',
      },
      {
        title: 'Duskull',
        type: 'Pokémon',
      },
      {
        title: 'Dusclops',
        type: 'Pokémon',
      },
      {
        title: 'Tropius',
        type: 'Pokémon',
      },
      {
        title: 'Chimecho',
        type: 'Pokémon',
      },
      {
        title: 'Absol',
        type: 'Pokémon',
      },
      {
        title: 'Wynaut',
        type: 'Pokémon',
      },
      {
        title: 'Snorunt',
        type: 'Pokémon',
      },
      {
        title: 'Glalie',
        type: 'Pokémon',
      },
      {
        title: 'Spheal',
        type: 'Pokémon',
      },
      {
        title: 'Sealeo',
        type: 'Pokémon',
      },
      {
        title: 'Walrein',
        type: 'Pokémon',
      },
      {
        title: 'Clamperl',
        type: 'Pokémon',
      },
      {
        title: 'Huntail',
        type: 'Pokémon',
      },
      {
        title: 'Gorebyss',
        type: 'Pokémon',
      },
      {
        title: 'Relicanth',
        type: 'Pokémon',
      },
      {
        title: 'Luvdisc',
        type: 'Pokémon',
      },
      {
        title: 'Bagon',
        type: 'Pokémon',
      },
      {
        title: 'Shelgon',
        type: 'Pokémon',
      },
      {
        title: 'Salamence',
        type: 'Pokémon',
      },
      {
        title: 'Beldum',
        type: 'Pokémon',
      },
      {
        title: 'Metang',
        type: 'Pokémon',
      },
      {
        title: 'Metagross',
        type: 'Pokémon',
      },
      {
        title: 'Regirock',
        type: 'Pokémon',
      },
      {
        title: 'Regice',
        type: 'Pokémon',
      },
      {
        title: 'Registeel',
        type: 'Pokémon',
      },
      {
        title: 'Latias',
        type: 'Pokémon',
      },
      {
        title: 'Latios',
        type: 'Pokémon',
      },
      {
        title: 'Kyogre',
        type: 'Pokémon',
      },
      {
        title: 'Groudon',
        type: 'Pokémon',
      },
      {
        title: 'Rayquaza',
        type: 'Pokémon',
      },
      {
        title: 'Jirachi',
        type: 'Pokémon',
      },
      {
        title: 'Deoxys-normal',
        type: 'Pokémon',
      },
      {
        title: 'Turtwig',
        type: 'Pokémon',
      },
      {
        title: 'Grotle',
        type: 'Pokémon',
      },
      {
        title: 'Torterra',
        type: 'Pokémon',
      },
      {
        title: 'Chimchar',
        type: 'Pokémon',
      },
      {
        title: 'Monferno',
        type: 'Pokémon',
      },
      {
        title: 'Infernape',
        type: 'Pokémon',
      },
      {
        title: 'Piplup',
        type: 'Pokémon',
      },
      {
        title: 'Prinplup',
        type: 'Pokémon',
      },
      {
        title: 'Empoleon',
        type: 'Pokémon',
      },
      {
        title: 'Starly',
        type: 'Pokémon',
      },
      {
        title: 'Staravia',
        type: 'Pokémon',
      },
      {
        title: 'Staraptor',
        type: 'Pokémon',
      },
      {
        title: 'Bidoof',
        type: 'Pokémon',
      },
      {
        title: 'Bibarel',
        type: 'Pokémon',
      },
      {
        title: 'Kricketot',
        type: 'Pokémon',
      },
      {
        title: 'Kricketune',
        type: 'Pokémon',
      },
      {
        title: 'Shinx',
        type: 'Pokémon',
      },
      {
        title: 'Luxio',
        type: 'Pokémon',
      },
      {
        title: 'Luxray',
        type: 'Pokémon',
      },
      {
        title: 'Budew',
        type: 'Pokémon',
      },
      {
        title: 'Roserade',
        type: 'Pokémon',
      },
      {
        title: 'Cranidos',
        type: 'Pokémon',
      },
      {
        title: 'Rampardos',
        type: 'Pokémon',
      },
      {
        title: 'Shieldon',
        type: 'Pokémon',
      },
      {
        title: 'Bastiodon',
        type: 'Pokémon',
      },
      {
        title: 'Burmy',
        type: 'Pokémon',
      },
      {
        title: 'Wormadam-plant',
        type: 'Pokémon',
      },
      {
        title: 'Mothim',
        type: 'Pokémon',
      },
      {
        title: 'Combee',
        type: 'Pokémon',
      },
      {
        title: 'Vespiquen',
        type: 'Pokémon',
      },
      {
        title: 'Pachirisu',
        type: 'Pokémon',
      },
      {
        title: 'Buizel',
        type: 'Pokémon',
      },
      {
        title: 'Floatzel',
        type: 'Pokémon',
      },
      {
        title: 'Cherubi',
        type: 'Pokémon',
      },
      {
        title: 'Cherrim',
        type: 'Pokémon',
      },
      {
        title: 'Shellos',
        type: 'Pokémon',
      },
      {
        title: 'Gastrodon',
        type: 'Pokémon',
      },
      {
        title: 'Ambipom',
        type: 'Pokémon',
      },
      {
        title: 'Drifloon',
        type: 'Pokémon',
      },
      {
        title: 'Drifblim',
        type: 'Pokémon',
      },
      {
        title: 'Buneary',
        type: 'Pokémon',
      },
      {
        title: 'Lopunny',
        type: 'Pokémon',
      },
      {
        title: 'Mismagius',
        type: 'Pokémon',
      },
      {
        title: 'Honchkrow',
        type: 'Pokémon',
      },
      {
        title: 'Glameow',
        type: 'Pokémon',
      },
      {
        title: 'Purugly',
        type: 'Pokémon',
      },
      {
        title: 'Chingling',
        type: 'Pokémon',
      },
      {
        title: 'Stunky',
        type: 'Pokémon',
      },
      {
        title: 'Skuntank',
        type: 'Pokémon',
      },
      {
        title: 'Bronzor',
        type: 'Pokémon',
      },
      {
        title: 'Bronzong',
        type: 'Pokémon',
      },
      {
        title: 'Bonsly',
        type: 'Pokémon',
      },
      {
        title: 'Mime-jr',
        type: 'Pokémon',
      },
      {
        title: 'Happiny',
        type: 'Pokémon',
      },
      {
        title: 'Chatot',
        type: 'Pokémon',
      },
      {
        title: 'Spiritomb',
        type: 'Pokémon',
      },
      {
        title: 'Gible',
        type: 'Pokémon',
      },
      {
        title: 'Gabite',
        type: 'Pokémon',
      },
      {
        title: 'Garchomp',
        type: 'Pokémon',
      },
      {
        title: 'Munchlax',
        type: 'Pokémon',
      },
      {
        title: 'Riolu',
        type: 'Pokémon',
      },
      {
        title: 'Lucario',
        type: 'Pokémon',
      },
      {
        title: 'Hippopotas',
        type: 'Pokémon',
      },
      {
        title: 'Hippowdon',
        type: 'Pokémon',
      },
      {
        title: 'Skorupi',
        type: 'Pokémon',
      },
      {
        title: 'Drapion',
        type: 'Pokémon',
      },
      {
        title: 'Croagunk',
        type: 'Pokémon',
      },
      {
        title: 'Toxicroak',
        type: 'Pokémon',
      },
      {
        title: 'Carnivine',
        type: 'Pokémon',
      },
      {
        title: 'Finneon',
        type: 'Pokémon',
      },
      {
        title: 'Lumineon',
        type: 'Pokémon',
      },
      {
        title: 'Mantyke',
        type: 'Pokémon',
      },
      {
        title: 'Snover',
        type: 'Pokémon',
      },
      {
        title: 'Abomasnow',
        type: 'Pokémon',
      },
      {
        title: 'Weavile',
        type: 'Pokémon',
      },
      {
        title: 'Magnezone',
        type: 'Pokémon',
      },
      {
        title: 'Lickilicky',
        type: 'Pokémon',
      },
      {
        title: 'Rhyperior',
        type: 'Pokémon',
      },
      {
        title: 'Tangrowth',
        type: 'Pokémon',
      },
      {
        title: 'Electivire',
        type: 'Pokémon',
      },
      {
        title: 'Magmortar',
        type: 'Pokémon',
      },
      {
        title: 'Togekiss',
        type: 'Pokémon',
      },
      {
        title: 'Yanmega',
        type: 'Pokémon',
      },
      {
        title: 'Leafeon',
        type: 'Pokémon',
      },
      {
        title: 'Glaceon',
        type: 'Pokémon',
      },
      {
        title: 'Gliscor',
        type: 'Pokémon',
      },
      {
        title: 'Mamoswine',
        type: 'Pokémon',
      },
      {
        title: 'Porygon-z',
        type: 'Pokémon',
      },
      {
        title: 'Gallade',
        type: 'Pokémon',
      },
      {
        title: 'Probopass',
        type: 'Pokémon',
      },
      {
        title: 'Dusknoir',
        type: 'Pokémon',
      },
      {
        title: 'Froslass',
        type: 'Pokémon',
      },
      {
        title: 'Rotom',
        type: 'Pokémon',
      },
      {
        title: 'Uxie',
        type: 'Pokémon',
      },
      {
        title: 'Mesprit',
        type: 'Pokémon',
      },
      {
        title: 'Azelf',
        type: 'Pokémon',
      },
      {
        title: 'Dialga',
        type: 'Pokémon',
      },
      {
        title: 'Palkia',
        type: 'Pokémon',
      },
      {
        title: 'Heatran',
        type: 'Pokémon',
      },
      {
        title: 'Regigigas',
        type: 'Pokémon',
      },
      {
        title: 'Giratina-altered',
        type: 'Pokémon',
      },
      {
        title: 'Cresselia',
        type: 'Pokémon',
      },
      {
        title: 'Phione',
        type: 'Pokémon',
      },
      {
        title: 'Manaphy',
        type: 'Pokémon',
      },
      {
        title: 'Darkrai',
        type: 'Pokémon',
      },
      {
        title: 'Shaymin-land',
        type: 'Pokémon',
      },
      {
        title: 'Arceus',
        type: 'Pokémon',
      },
      {
        title: 'Victini',
        type: 'Pokémon',
      },
      {
        title: 'Snivy',
        type: 'Pokémon',
      },
      {
        title: 'Servine',
        type: 'Pokémon',
      },
      {
        title: 'Serperior',
        type: 'Pokémon',
      },
      {
        title: 'Tepig',
        type: 'Pokémon',
      },
      {
        title: 'Pignite',
        type: 'Pokémon',
      },
      {
        title: 'Emboar',
        type: 'Pokémon',
      },
      {
        title: 'Oshawott',
        type: 'Pokémon',
      },
      {
        title: 'Dewott',
        type: 'Pokémon',
      },
      {
        title: 'Samurott',
        type: 'Pokémon',
      },
      {
        title: 'Patrat',
        type: 'Pokémon',
      },
      {
        title: 'Watchog',
        type: 'Pokémon',
      },
      {
        title: 'Lillipup',
        type: 'Pokémon',
      },
      {
        title: 'Herdier',
        type: 'Pokémon',
      },
      {
        title: 'Stoutland',
        type: 'Pokémon',
      },
      {
        title: 'Purrloin',
        type: 'Pokémon',
      },
      {
        title: 'Liepard',
        type: 'Pokémon',
      },
      {
        title: 'Pansage',
        type: 'Pokémon',
      },
      {
        title: 'Simisage',
        type: 'Pokémon',
      },
      {
        title: 'Pansear',
        type: 'Pokémon',
      },
      {
        title: 'Simisear',
        type: 'Pokémon',
      },
      {
        title: 'Panpour',
        type: 'Pokémon',
      },
      {
        title: 'Simipour',
        type: 'Pokémon',
      },
      {
        title: 'Munna',
        type: 'Pokémon',
      },
      {
        title: 'Musharna',
        type: 'Pokémon',
      },
      {
        title: 'Pidove',
        type: 'Pokémon',
      },
      {
        title: 'Tranquill',
        type: 'Pokémon',
      },
      {
        title: 'Unfezant',
        type: 'Pokémon',
      },
      {
        title: 'Blitzle',
        type: 'Pokémon',
      },
      {
        title: 'Zebstrika',
        type: 'Pokémon',
      },
      {
        title: 'Roggenrola',
        type: 'Pokémon',
      },
      {
        title: 'Boldore',
        type: 'Pokémon',
      },
      {
        title: 'Gigalith',
        type: 'Pokémon',
      },
      {
        title: 'Woobat',
        type: 'Pokémon',
      },
      {
        title: 'Swoobat',
        type: 'Pokémon',
      },
      {
        title: 'Drilbur',
        type: 'Pokémon',
      },
      {
        title: 'Excadrill',
        type: 'Pokémon',
      },
      {
        title: 'Audino',
        type: 'Pokémon',
      },
      {
        title: 'Timburr',
        type: 'Pokémon',
      },
      {
        title: 'Gurdurr',
        type: 'Pokémon',
      },
      {
        title: 'Conkeldurr',
        type: 'Pokémon',
      },
      {
        title: 'Tympole',
        type: 'Pokémon',
      },
      {
        title: 'Palpitoad',
        type: 'Pokémon',
      },
      {
        title: 'Seismitoad',
        type: 'Pokémon',
      },
      {
        title: 'Throh',
        type: 'Pokémon',
      },
      {
        title: 'Sawk',
        type: 'Pokémon',
      },
      {
        title: 'Sewaddle',
        type: 'Pokémon',
      },
      {
        title: 'Swadloon',
        type: 'Pokémon',
      },
      {
        title: 'Leavanny',
        type: 'Pokémon',
      },
      {
        title: 'Venipede',
        type: 'Pokémon',
      },
      {
        title: 'Whirlipede',
        type: 'Pokémon',
      },
      {
        title: 'Scolipede',
        type: 'Pokémon',
      },
      {
        title: 'Cottonee',
        type: 'Pokémon',
      },
      {
        title: 'Whimsicott',
        type: 'Pokémon',
      },
      {
        title: 'Petilil',
        type: 'Pokémon',
      },
      {
        title: 'Lilligant',
        type: 'Pokémon',
      },
      {
        title: 'Basculin-red-striped',
        type: 'Pokémon',
      },
      {
        title: 'Sandile',
        type: 'Pokémon',
      },
      {
        title: 'Krokorok',
        type: 'Pokémon',
      },
      {
        title: 'Krookodile',
        type: 'Pokémon',
      },
      {
        title: 'Darumaka',
        type: 'Pokémon',
      },
      {
        title: 'Darmanitan-standard',
        type: 'Pokémon',
      },
      {
        title: 'Maractus',
        type: 'Pokémon',
      },
      {
        title: 'Dwebble',
        type: 'Pokémon',
      },
      {
        title: 'Crustle',
        type: 'Pokémon',
      },
      {
        title: 'Scraggy',
        type: 'Pokémon',
      },
      {
        title: 'Scrafty',
        type: 'Pokémon',
      },
      {
        title: 'Sigilyph',
        type: 'Pokémon',
      },
      {
        title: 'Yamask',
        type: 'Pokémon',
      },
      {
        title: 'Cofagrigus',
        type: 'Pokémon',
      },
      {
        title: 'Tirtouga',
        type: 'Pokémon',
      },
      {
        title: 'Carracosta',
        type: 'Pokémon',
      },
      {
        title: 'Archen',
        type: 'Pokémon',
      },
      {
        title: 'Archeops',
        type: 'Pokémon',
      },
      {
        title: 'Trubbish',
        type: 'Pokémon',
      },
      {
        title: 'Garbodor',
        type: 'Pokémon',
      },
      {
        title: 'Zorua',
        type: 'Pokémon',
      },
      {
        title: 'Zoroark',
        type: 'Pokémon',
      },
      {
        title: 'Minccino',
        type: 'Pokémon',
      },
      {
        title: 'Cinccino',
        type: 'Pokémon',
      },
      {
        title: 'Gothita',
        type: 'Pokémon',
      },
      {
        title: 'Gothorita',
        type: 'Pokémon',
      },
      {
        title: 'Gothitelle',
        type: 'Pokémon',
      },
      {
        title: 'Solosis',
        type: 'Pokémon',
      },
      {
        title: 'Duosion',
        type: 'Pokémon',
      },
      {
        title: 'Reuniclus',
        type: 'Pokémon',
      },
      {
        title: 'Ducklett',
        type: 'Pokémon',
      },
      {
        title: 'Swanna',
        type: 'Pokémon',
      },
      {
        title: 'Vanillite',
        type: 'Pokémon',
      },
      {
        title: 'Vanillish',
        type: 'Pokémon',
      },
      {
        title: 'Vanilluxe',
        type: 'Pokémon',
      },
      {
        title: 'Deerling',
        type: 'Pokémon',
      },
      {
        title: 'Sawsbuck',
        type: 'Pokémon',
      },
      {
        title: 'Emolga',
        type: 'Pokémon',
      },
      {
        title: 'Karrablast',
        type: 'Pokémon',
      },
      {
        title: 'Escavalier',
        type: 'Pokémon',
      },
      {
        title: 'Foongus',
        type: 'Pokémon',
      },
      {
        title: 'Amoonguss',
        type: 'Pokémon',
      },
      {
        title: 'Frillish',
        type: 'Pokémon',
      },
      {
        title: 'Jellicent',
        type: 'Pokémon',
      },
      {
        title: 'Alomomola',
        type: 'Pokémon',
      },
      {
        title: 'Joltik',
        type: 'Pokémon',
      },
      {
        title: 'Galvantula',
        type: 'Pokémon',
      },
      {
        title: 'Ferroseed',
        type: 'Pokémon',
      },
      {
        title: 'Ferrothorn',
        type: 'Pokémon',
      },
      {
        title: 'Klink',
        type: 'Pokémon',
      },
      {
        title: 'Klang',
        type: 'Pokémon',
      },
      {
        title: 'Klinklang',
        type: 'Pokémon',
      },
      {
        title: 'Tynamo',
        type: 'Pokémon',
      },
      {
        title: 'Eelektrik',
        type: 'Pokémon',
      },
      {
        title: 'Eelektross',
        type: 'Pokémon',
      },
      {
        title: 'Elgyem',
        type: 'Pokémon',
      },
      {
        title: 'Beheeyem',
        type: 'Pokémon',
      },
      {
        title: 'Litwick',
        type: 'Pokémon',
      },
      {
        title: 'Lampent',
        type: 'Pokémon',
      },
      {
        title: 'Chandelure',
        type: 'Pokémon',
      },
      {
        title: 'Axew',
        type: 'Pokémon',
      },
      {
        title: 'Fraxure',
        type: 'Pokémon',
      },
      {
        title: 'Haxorus',
        type: 'Pokémon',
      },
      {
        title: 'Cubchoo',
        type: 'Pokémon',
      },
      {
        title: 'Beartic',
        type: 'Pokémon',
      },
      {
        title: 'Cryogonal',
        type: 'Pokémon',
      },
      {
        title: 'Shelmet',
        type: 'Pokémon',
      },
      {
        title: 'Accelgor',
        type: 'Pokémon',
      },
      {
        title: 'Stunfisk',
        type: 'Pokémon',
      },
      {
        title: 'Mienfoo',
        type: 'Pokémon',
      },
      {
        title: 'Mienshao',
        type: 'Pokémon',
      },
      {
        title: 'Druddigon',
        type: 'Pokémon',
      },
      {
        title: 'Golett',
        type: 'Pokémon',
      },
      {
        title: 'Golurk',
        type: 'Pokémon',
      },
      {
        title: 'Pawniard',
        type: 'Pokémon',
      },
      {
        title: 'Bisharp',
        type: 'Pokémon',
      },
      {
        title: 'Bouffalant',
        type: 'Pokémon',
      },
      {
        title: 'Rufflet',
        type: 'Pokémon',
      },
      {
        title: 'Braviary',
        type: 'Pokémon',
      },
      {
        title: 'Vullaby',
        type: 'Pokémon',
      },
      {
        title: 'Mandibuzz',
        type: 'Pokémon',
      },
      {
        title: 'Heatmor',
        type: 'Pokémon',
      },
      {
        title: 'Durant',
        type: 'Pokémon',
      },
      {
        title: 'Deino',
        type: 'Pokémon',
      },
      {
        title: 'Zweilous',
        type: 'Pokémon',
      },
      {
        title: 'Hydreigon',
        type: 'Pokémon',
      },
      {
        title: 'Larvesta',
        type: 'Pokémon',
      },
      {
        title: 'Volcarona',
        type: 'Pokémon',
      },
      {
        title: 'Cobalion',
        type: 'Pokémon',
      },
      {
        title: 'Terrakion',
        type: 'Pokémon',
      },
      {
        title: 'Virizion',
        type: 'Pokémon',
      },
      {
        title: 'Tornadus-incarnate',
        type: 'Pokémon',
      },
      {
        title: 'Thundurus-incarnate',
        type: 'Pokémon',
      },
      {
        title: 'Reshiram',
        type: 'Pokémon',
      },
      {
        title: 'Zekrom',
        type: 'Pokémon',
      },
      {
        title: 'Landorus-incarnate',
        type: 'Pokémon',
      },
      {
        title: 'Kyurem',
        type: 'Pokémon',
      },
      {
        title: 'Keldeo-ordinary',
        type: 'Pokémon',
      },
      {
        title: 'Meloetta-aria',
        type: 'Pokémon',
      },
      {
        title: 'Genesect',
        type: 'Pokémon',
      },
      {
        title: 'Chespin',
        type: 'Pokémon',
      },
      {
        title: 'Quilladin',
        type: 'Pokémon',
      },
      {
        title: 'Chesnaught',
        type: 'Pokémon',
      },
      {
        title: 'Fennekin',
        type: 'Pokémon',
      },
      {
        title: 'Braixen',
        type: 'Pokémon',
      },
      {
        title: 'Delphox',
        type: 'Pokémon',
      },
      {
        title: 'Froakie',
        type: 'Pokémon',
      },
      {
        title: 'Frogadier',
        type: 'Pokémon',
      },
      {
        title: 'Greninja',
        type: 'Pokémon',
      },
      {
        title: 'Bunnelby',
        type: 'Pokémon',
      },
      {
        title: 'Diggersby',
        type: 'Pokémon',
      },
      {
        title: 'Fletchling',
        type: 'Pokémon',
      },
      {
        title: 'Fletchinder',
        type: 'Pokémon',
      },
      {
        title: 'Talonflame',
        type: 'Pokémon',
      },
      {
        title: 'Scatterbug',
        type: 'Pokémon',
      },
      {
        title: 'Spewpa',
        type: 'Pokémon',
      },
      {
        title: 'Vivillon',
        type: 'Pokémon',
      },
      {
        title: 'Litleo',
        type: 'Pokémon',
      },
      {
        title: 'Pyroar',
        type: 'Pokémon',
      },
      {
        title: 'Flabebe',
        type: 'Pokémon',
      },
      {
        title: 'Floette',
        type: 'Pokémon',
      },
      {
        title: 'Florges',
        type: 'Pokémon',
      },
      {
        title: 'Skiddo',
        type: 'Pokémon',
      },
      {
        title: 'Gogoat',
        type: 'Pokémon',
      },
      {
        title: 'Pancham',
        type: 'Pokémon',
      },
      {
        title: 'Pangoro',
        type: 'Pokémon',
      },
      {
        title: 'Furfrou',
        type: 'Pokémon',
      },
      {
        title: 'Espurr',
        type: 'Pokémon',
      },
      {
        title: 'Meowstic-male',
        type: 'Pokémon',
      },
      {
        title: 'Honedge',
        type: 'Pokémon',
      },
      {
        title: 'Doublade',
        type: 'Pokémon',
      },
      {
        title: 'Aegislash-shield',
        type: 'Pokémon',
      },
      {
        title: 'Spritzee',
        type: 'Pokémon',
      },
      {
        title: 'Aromatisse',
        type: 'Pokémon',
      },
      {
        title: 'Swirlix',
        type: 'Pokémon',
      },
      {
        title: 'Slurpuff',
        type: 'Pokémon',
      },
      {
        title: 'Inkay',
        type: 'Pokémon',
      },
      {
        title: 'Malamar',
        type: 'Pokémon',
      },
      {
        title: 'Binacle',
        type: 'Pokémon',
      },
      {
        title: 'Barbaracle',
        type: 'Pokémon',
      },
      {
        title: 'Skrelp',
        type: 'Pokémon',
      },
      {
        title: 'Dragalge',
        type: 'Pokémon',
      },
      {
        title: 'Clauncher',
        type: 'Pokémon',
      },
      {
        title: 'Clawitzer',
        type: 'Pokémon',
      },
      {
        title: 'Helioptile',
        type: 'Pokémon',
      },
      {
        title: 'Heliolisk',
        type: 'Pokémon',
      },
      {
        title: 'Tyrunt',
        type: 'Pokémon',
      },
      {
        title: 'Tyrantrum',
        type: 'Pokémon',
      },
      {
        title: 'Amaura',
        type: 'Pokémon',
      },
      {
        title: 'Aurorus',
        type: 'Pokémon',
      },
      {
        title: 'Sylveon',
        type: 'Pokémon',
      },
      {
        title: 'Hawlucha',
        type: 'Pokémon',
      },
      {
        title: 'Dedenne',
        type: 'Pokémon',
      },
      {
        title: 'Carbink',
        type: 'Pokémon',
      },
      {
        title: 'Goomy',
        type: 'Pokémon',
      },
      {
        title: 'Sliggoo',
        type: 'Pokémon',
      },
      {
        title: 'Goodra',
        type: 'Pokémon',
      },
      {
        title: 'Klefki',
        type: 'Pokémon',
      },
      {
        title: 'Phantump',
        type: 'Pokémon',
      },
      {
        title: 'Trevenant',
        type: 'Pokémon',
      },
      {
        title: 'Pumpkaboo-average',
        type: 'Pokémon',
      },
      {
        title: 'Gourgeist-average',
        type: 'Pokémon',
      },
      {
        title: 'Bergmite',
        type: 'Pokémon',
      },
      {
        title: 'Avalugg',
        type: 'Pokémon',
      },
      {
        title: 'Noibat',
        type: 'Pokémon',
      },
      {
        title: 'Noivern',
        type: 'Pokémon',
      },
      {
        title: 'Xerneas',
        type: 'Pokémon',
      },
      {
        title: 'Yveltal',
        type: 'Pokémon',
      },
      {
        title: 'Zygarde-50',
        type: 'Pokémon',
      },
      {
        title: 'Diancie',
        type: 'Pokémon',
      },
      {
        title: 'Hoopa',
        type: 'Pokémon',
      },
      {
        title: 'Volcanion',
        type: 'Pokémon',
      },
      {
        title: 'Rowlet',
        type: 'Pokémon',
      },
      {
        title: 'Dartrix',
        type: 'Pokémon',
      },
      {
        title: 'Decidueye',
        type: 'Pokémon',
      },
      {
        title: 'Litten',
        type: 'Pokémon',
      },
      {
        title: 'Torracat',
        type: 'Pokémon',
      },
      {
        title: 'Incineroar',
        type: 'Pokémon',
      },
      {
        title: 'Popplio',
        type: 'Pokémon',
      },
      {
        title: 'Brionne',
        type: 'Pokémon',
      },
      {
        title: 'Primarina',
        type: 'Pokémon',
      },
      {
        title: 'Pikipek',
        type: 'Pokémon',
      },
      {
        title: 'Trumbeak',
        type: 'Pokémon',
      },
      {
        title: 'Toucannon',
        type: 'Pokémon',
      },
      {
        title: 'Yungoos',
        type: 'Pokémon',
      },
      {
        title: 'Gumshoos',
        type: 'Pokémon',
      },
      {
        title: 'Grubbin',
        type: 'Pokémon',
      },
      {
        title: 'Charjabug',
        type: 'Pokémon',
      },
      {
        title: 'Vikavolt',
        type: 'Pokémon',
      },
      {
        title: 'Crabrawler',
        type: 'Pokémon',
      },
      {
        title: 'Crabominable',
        type: 'Pokémon',
      },
      {
        title: 'Oricorio-baile',
        type: 'Pokémon',
      },
      {
        title: 'Cutiefly',
        type: 'Pokémon',
      },
      {
        title: 'Ribombee',
        type: 'Pokémon',
      },
      {
        title: 'Rockruff',
        type: 'Pokémon',
      },
      {
        title: 'Lycanroc-midday',
        type: 'Pokémon',
      },
      {
        title: 'Wishiwashi-solo',
        type: 'Pokémon',
      },
      {
        title: 'Mareanie',
        type: 'Pokémon',
      },
      {
        title: 'Toxapex',
        type: 'Pokémon',
      },
      {
        title: 'Mudbray',
        type: 'Pokémon',
      },
      {
        title: 'Mudsdale',
        type: 'Pokémon',
      },
      {
        title: 'Dewpider',
        type: 'Pokémon',
      },
      {
        title: 'Araquanid',
        type: 'Pokémon',
      },
      {
        title: 'Fomantis',
        type: 'Pokémon',
      },
      {
        title: 'Lurantis',
        type: 'Pokémon',
      },
      {
        title: 'Morelull',
        type: 'Pokémon',
      },
      {
        title: 'Shiinotic',
        type: 'Pokémon',
      },
      {
        title: 'Salandit',
        type: 'Pokémon',
      },
      {
        title: 'Salazzle',
        type: 'Pokémon',
      },
      {
        title: 'Stufful',
        type: 'Pokémon',
      },
      {
        title: 'Bewear',
        type: 'Pokémon',
      },
      {
        title: 'Bounsweet',
        type: 'Pokémon',
      },
      {
        title: 'Steenee',
        type: 'Pokémon',
      },
      {
        title: 'Tsareena',
        type: 'Pokémon',
      },
      {
        title: 'Comfey',
        type: 'Pokémon',
      },
      {
        title: 'Oranguru',
        type: 'Pokémon',
      },
      {
        title: 'Passimian',
        type: 'Pokémon',
      },
      {
        title: 'Wimpod',
        type: 'Pokémon',
      },
      {
        title: 'Golisopod',
        type: 'Pokémon',
      },
      {
        title: 'Sandygast',
        type: 'Pokémon',
      },
      {
        title: 'Palossand',
        type: 'Pokémon',
      },
      {
        title: 'Pyukumuku',
        type: 'Pokémon',
      },
      {
        title: 'Type-null',
        type: 'Pokémon',
      },
      {
        title: 'Silvally',
        type: 'Pokémon',
      },
      {
        title: 'Minior-red-meteor',
        type: 'Pokémon',
      },
      {
        title: 'Komala',
        type: 'Pokémon',
      },
      {
        title: 'Turtonator',
        type: 'Pokémon',
      },
      {
        title: 'Togedemaru',
        type: 'Pokémon',
      },
      {
        title: 'Mimikyu-disguised',
        type: 'Pokémon',
      },
      {
        title: 'Bruxish',
        type: 'Pokémon',
      },
      {
        title: 'Drampa',
        type: 'Pokémon',
      },
      {
        title: 'Dhelmise',
        type: 'Pokémon',
      },
      {
        title: 'Jangmo-o',
        type: 'Pokémon',
      },
      {
        title: 'Hakamo-o',
        type: 'Pokémon',
      },
      {
        title: 'Kommo-o',
        type: 'Pokémon',
      },
      {
        title: 'Tapu-koko',
        type: 'Pokémon',
      },
      {
        title: 'Tapu-lele',
        type: 'Pokémon',
      },
      {
        title: 'Tapu-bulu',
        type: 'Pokémon',
      },
      {
        title: 'Tapu-fini',
        type: 'Pokémon',
      },
      {
        title: 'Cosmog',
        type: 'Pokémon',
      },
      {
        title: 'Cosmoem',
        type: 'Pokémon',
      },
      {
        title: 'Solgaleo',
        type: 'Pokémon',
      },
      {
        title: 'Lunala',
        type: 'Pokémon',
      },
      {
        title: 'Nihilego',
        type: 'Pokémon',
      },
      {
        title: 'Buzzwole',
        type: 'Pokémon',
      },
      {
        title: 'Pheromosa',
        type: 'Pokémon',
      },
      {
        title: 'Xurkitree',
        type: 'Pokémon',
      },
      {
        title: 'Celesteela',
        type: 'Pokémon',
      },
      {
        title: 'Kartana',
        type: 'Pokémon',
      },
      {
        title: 'Guzzlord',
        type: 'Pokémon',
      },
      {
        title: 'Necrozma',
        type: 'Pokémon',
      },
      {
        title: 'Magearna',
        type: 'Pokémon',
      },
      {
        title: 'Marshadow',
        type: 'Pokémon',
      },
      {
        title: 'Poipole',
        type: 'Pokémon',
      },
      {
        title: 'Naganadel',
        type: 'Pokémon',
      },
      {
        title: 'Stakataka',
        type: 'Pokémon',
      },
      {
        title: 'Blacephalon',
        type: 'Pokémon',
      },
      {
        title: 'Zeraora',
        type: 'Pokémon',
      },
      {
        title: 'Meltan',
        type: 'Pokémon',
      },
      {
        title: 'Melmetal',
        type: 'Pokémon',
      },
      {
        title: 'Grookey',
        type: 'Pokémon',
      },
      {
        title: 'Thwackey',
        type: 'Pokémon',
      },
      {
        title: 'Rillaboom',
        type: 'Pokémon',
      },
      {
        title: 'Scorbunny',
        type: 'Pokémon',
      },
      {
        title: 'Raboot',
        type: 'Pokémon',
      },
      {
        title: 'Cinderace',
        type: 'Pokémon',
      },
      {
        title: 'Sobble',
        type: 'Pokémon',
      },
      {
        title: 'Drizzile',
        type: 'Pokémon',
      },
      {
        title: 'Inteleon',
        type: 'Pokémon',
      },
      {
        title: 'Skwovet',
        type: 'Pokémon',
      },
      {
        title: 'Greedent',
        type: 'Pokémon',
      },
      {
        title: 'Rookidee',
        type: 'Pokémon',
      },
      {
        title: 'Corvisquire',
        type: 'Pokémon',
      },
      {
        title: 'Corviknight',
        type: 'Pokémon',
      },
      {
        title: 'Blipbug',
        type: 'Pokémon',
      },
      {
        title: 'Dottler',
        type: 'Pokémon',
      },
      {
        title: 'Orbeetle',
        type: 'Pokémon',
      },
      {
        title: 'Nickit',
        type: 'Pokémon',
      },
      {
        title: 'Thievul',
        type: 'Pokémon',
      },
      {
        title: 'Gossifleur',
        type: 'Pokémon',
      },
      {
        title: 'Eldegoss',
        type: 'Pokémon',
      },
      {
        title: 'Wooloo',
        type: 'Pokémon',
      },
      {
        title: 'Dubwool',
        type: 'Pokémon',
      },
      {
        title: 'Chewtle',
        type: 'Pokémon',
      },
      {
        title: 'Drednaw',
        type: 'Pokémon',
      },
      {
        title: 'Yamper',
        type: 'Pokémon',
      },
      {
        title: 'Boltund',
        type: 'Pokémon',
      },
      {
        title: 'Rolycoly',
        type: 'Pokémon',
      },
      {
        title: 'Carkol',
        type: 'Pokémon',
      },
      {
        title: 'Coalossal',
        type: 'Pokémon',
      },
      {
        title: 'Applin',
        type: 'Pokémon',
      },
      {
        title: 'Flapple',
        type: 'Pokémon',
      },
      {
        title: 'Appletun',
        type: 'Pokémon',
      },
      {
        title: 'Silicobra',
        type: 'Pokémon',
      },
      {
        title: 'Sandaconda',
        type: 'Pokémon',
      },
      {
        title: 'Cramorant',
        type: 'Pokémon',
      },
      {
        title: 'Arrokuda',
        type: 'Pokémon',
      },
      {
        title: 'Barraskewda',
        type: 'Pokémon',
      },
      {
        title: 'Toxel',
        type: 'Pokémon',
      },
      {
        title: 'Toxtricity-amped',
        type: 'Pokémon',
      },
      {
        title: 'Sizzlipede',
        type: 'Pokémon',
      },
      {
        title: 'Centiskorch',
        type: 'Pokémon',
      },
      {
        title: 'Clobbopus',
        type: 'Pokémon',
      },
      {
        title: 'Grapploct',
        type: 'Pokémon',
      },
      {
        title: 'Sinistea',
        type: 'Pokémon',
      },
      {
        title: 'Polteageist',
        type: 'Pokémon',
      },
      {
        title: 'Hatenna',
        type: 'Pokémon',
      },
      {
        title: 'Hattrem',
        type: 'Pokémon',
      },
      {
        title: 'Hatterene',
        type: 'Pokémon',
      },
      {
        title: 'Impidimp',
        type: 'Pokémon',
      },
      {
        title: 'Morgrem',
        type: 'Pokémon',
      },
      {
        title: 'Grimmsnarl',
        type: 'Pokémon',
      },
      {
        title: 'Obstagoon',
        type: 'Pokémon',
      },
      {
        title: 'Perrserker',
        type: 'Pokémon',
      },
      {
        title: 'Cursola',
        type: 'Pokémon',
      },
      {
        title: 'Sirfetchd',
        type: 'Pokémon',
      },
      {
        title: 'Mr-rime',
        type: 'Pokémon',
      },
      {
        title: 'Runerigus',
        type: 'Pokémon',
      },
      {
        title: 'Milcery',
        type: 'Pokémon',
      },
      {
        title: 'Alcremie',
        type: 'Pokémon',
      },
      {
        title: 'Falinks',
        type: 'Pokémon',
      },
      {
        title: 'Pincurchin',
        type: 'Pokémon',
      },
      {
        title: 'Snom',
        type: 'Pokémon',
      },
      {
        title: 'Frosmoth',
        type: 'Pokémon',
      },
      {
        title: 'Stonjourner',
        type: 'Pokémon',
      },
      {
        title: 'Eiscue-ice',
        type: 'Pokémon',
      },
      {
        title: 'Indeedee-male',
        type: 'Pokémon',
      },
      {
        title: 'Morpeko-full-belly',
        type: 'Pokémon',
      },
      {
        title: 'Cufant',
        type: 'Pokémon',
      },
      {
        title: 'Copperajah',
        type: 'Pokémon',
      },
      {
        title: 'Dracozolt',
        type: 'Pokémon',
      },
      {
        title: 'Arctozolt',
        type: 'Pokémon',
      },
      {
        title: 'Dracovish',
        type: 'Pokémon',
      },
      {
        title: 'Arctovish',
        type: 'Pokémon',
      },
      {
        title: 'Duraludon',
        type: 'Pokémon',
      },
      {
        title: 'Dreepy',
        type: 'Pokémon',
      },
      {
        title: 'Drakloak',
        type: 'Pokémon',
      },
      {
        title: 'Dragapult',
        type: 'Pokémon',
      },
      {
        title: 'Zacian',
        type: 'Pokémon',
      },
      {
        title: 'Zamazenta',
        type: 'Pokémon',
      },
      {
        title: 'Eternatus',
        type: 'Pokémon',
      },
      {
        title: 'Kubfu',
        type: 'Pokémon',
      },
      {
        title: 'Urshifu-single-strike',
        type: 'Pokémon',
      },
      {
        title: 'Zarude',
        type: 'Pokémon',
      },
      {
        title: 'Regieleki',
        type: 'Pokémon',
      },
      {
        title: 'Regidrago',
        type: 'Pokémon',
      },
      {
        title: 'Glastrier',
        type: 'Pokémon',
      },
      {
        title: 'Spectrier',
        type: 'Pokémon',
      },
      {
        title: 'Calyrex',
        type: 'Pokémon',
      },
      {
        title: 'Wyrdeer',
        type: 'Pokémon',
      },
      {
        title: 'Kleavor',
        type: 'Pokémon',
      },
      {
        title: 'Ursaluna',
        type: 'Pokémon',
      },
      {
        title: 'Basculegion-male',
        type: 'Pokémon',
      },
      {
        title: 'Sneasler',
        type: 'Pokémon',
      },
      {
        title: 'Overqwil',
        type: 'Pokémon',
      },
      {
        title: 'Enamorus-incarnate',
        type: 'Pokémon',
      },
      {
        title: 'Deoxys-attack',
        type: 'Pokémon',
      },
      {
        title: 'Deoxys-defense',
        type: 'Pokémon',
      },
      {
        title: 'Deoxys-speed',
        type: 'Pokémon',
      },
      {
        title: 'Wormadam-sandy',
        type: 'Pokémon',
      },
      {
        title: 'Wormadam-trash',
        type: 'Pokémon',
      },
      {
        title: 'Shaymin-sky',
        type: 'Pokémon',
      },
      {
        title: 'Giratina-origin',
        type: 'Pokémon',
      },
      {
        title: 'Rotom-heat',
        type: 'Pokémon',
      },
      {
        title: 'Rotom-wash',
        type: 'Pokémon',
      },
      {
        title: 'Rotom-frost',
        type: 'Pokémon',
      },
      {
        title: 'Rotom-fan',
        type: 'Pokémon',
      },
      {
        title: 'Rotom-mow',
        type: 'Pokémon',
      },
      {
        title: 'Castform-sunny',
        type: 'Pokémon',
      },
      {
        title: 'Castform-rainy',
        type: 'Pokémon',
      },
      {
        title: 'Castform-snowy',
        type: 'Pokémon',
      },
      {
        title: 'Basculin-blue-striped',
        type: 'Pokémon',
      },
      {
        title: 'Darmanitan-zen',
        type: 'Pokémon',
      },
      {
        title: 'Meloetta-pirouette',
        type: 'Pokémon',
      },
      {
        title: 'Tornadus-therian',
        type: 'Pokémon',
      },
      {
        title: 'Thundurus-therian',
        type: 'Pokémon',
      },
      {
        title: 'Landorus-therian',
        type: 'Pokémon',
      },
      {
        title: 'Kyurem-black',
        type: 'Pokémon',
      },
      {
        title: 'Kyurem-white',
        type: 'Pokémon',
      },
      {
        title: 'Keldeo-resolute',
        type: 'Pokémon',
      },
      {
        title: 'Meowstic-female',
        type: 'Pokémon',
      },
      {
        title: 'Aegislash-blade',
        type: 'Pokémon',
      },
      {
        title: 'Pumpkaboo-small',
        type: 'Pokémon',
      },
      {
        title: 'Pumpkaboo-large',
        type: 'Pokémon',
      },
      {
        title: 'Pumpkaboo-super',
        type: 'Pokémon',
      },
      {
        title: 'Gourgeist-small',
        type: 'Pokémon',
      },
      {
        title: 'Gourgeist-large',
        type: 'Pokémon',
      },
      {
        title: 'Gourgeist-super',
        type: 'Pokémon',
      },
      {
        title: 'Venusaur-mega',
        type: 'Pokémon',
      },
      {
        title: 'Charizard-mega-x',
        type: 'Pokémon',
      },
      {
        title: 'Charizard-mega-y',
        type: 'Pokémon',
      },
      {
        title: 'Blastoise-mega',
        type: 'Pokémon',
      },
      {
        title: 'Alakazam-mega',
        type: 'Pokémon',
      },
      {
        title: 'Gengar-mega',
        type: 'Pokémon',
      },
      {
        title: 'Kangaskhan-mega',
        type: 'Pokémon',
      },
      {
        title: 'Pinsir-mega',
        type: 'Pokémon',
      },
      {
        title: 'Gyarados-mega',
        type: 'Pokémon',
      },
      {
        title: 'Aerodactyl-mega',
        type: 'Pokémon',
      },
      {
        title: 'Mewtwo-mega-x',
        type: 'Pokémon',
      },
      {
        title: 'Mewtwo-mega-y',
        type: 'Pokémon',
      },
      {
        title: 'Ampharos-mega',
        type: 'Pokémon',
      },
      {
        title: 'Scizor-mega',
        type: 'Pokémon',
      },
      {
        title: 'Heracross-mega',
        type: 'Pokémon',
      },
      {
        title: 'Houndoom-mega',
        type: 'Pokémon',
      },
      {
        title: 'Tyranitar-mega',
        type: 'Pokémon',
      },
      {
        title: 'Blaziken-mega',
        type: 'Pokémon',
      },
      {
        title: 'Gardevoir-mega',
        type: 'Pokémon',
      },
      {
        title: 'Mawile-mega',
        type: 'Pokémon',
      },
      {
        title: 'Aggron-mega',
        type: 'Pokémon',
      },
      {
        title: 'Medicham-mega',
        type: 'Pokémon',
      },
      {
        title: 'Manectric-mega',
        type: 'Pokémon',
      },
      {
        title: 'Banette-mega',
        type: 'Pokémon',
      },
      {
        title: 'Absol-mega',
        type: 'Pokémon',
      },
      {
        title: 'Garchomp-mega',
        type: 'Pokémon',
      },
      {
        title: 'Lucario-mega',
        type: 'Pokémon',
      },
      {
        title: 'Abomasnow-mega',
        type: 'Pokémon',
      },
      {
        title: 'Floette-eternal',
        type: 'Pokémon',
      },
      {
        title: 'Latias-mega',
        type: 'Pokémon',
      },
      {
        title: 'Latios-mega',
        type: 'Pokémon',
      },
      {
        title: 'Swampert-mega',
        type: 'Pokémon',
      },
      {
        title: 'Sceptile-mega',
        type: 'Pokémon',
      },
      {
        title: 'Sableye-mega',
        type: 'Pokémon',
      },
      {
        title: 'Altaria-mega',
        type: 'Pokémon',
      },
      {
        title: 'Gallade-mega',
        type: 'Pokémon',
      },
      {
        title: 'Audino-mega',
        type: 'Pokémon',
      },
      {
        title: 'Sharpedo-mega',
        type: 'Pokémon',
      },
      {
        title: 'Slowbro-mega',
        type: 'Pokémon',
      },
      {
        title: 'Steelix-mega',
        type: 'Pokémon',
      },
      {
        title: 'Pidgeot-mega',
        type: 'Pokémon',
      },
      {
        title: 'Glalie-mega',
        type: 'Pokémon',
      },
      {
        title: 'Diancie-mega',
        type: 'Pokémon',
      },
      {
        title: 'Metagross-mega',
        type: 'Pokémon',
      },
      {
        title: 'Kyogre-primal',
        type: 'Pokémon',
      },
      {
        title: 'Groudon-primal',
        type: 'Pokémon',
      },
      {
        title: 'Rayquaza-mega',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-rock-star',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-belle',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-pop-star',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-phd',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-libre',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-cosplay',
        type: 'Pokémon',
      },
      {
        title: 'Hoopa-unbound',
        type: 'Pokémon',
      },
      {
        title: 'Camerupt-mega',
        type: 'Pokémon',
      },
      {
        title: 'Lopunny-mega',
        type: 'Pokémon',
      },
      {
        title: 'Salamence-mega',
        type: 'Pokémon',
      },
      {
        title: 'Beedrill-mega',
        type: 'Pokémon',
      },
      {
        title: 'Rattata-alola',
        type: 'Pokémon',
      },
      {
        title: 'Raticate-alola',
        type: 'Pokémon',
      },
      {
        title: 'Raticate-totem-alola',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-original-cap',
        type: 'Pokémon',
      },
      {
        title: 'Pikachu-hoenn-cap',
        type: 'Pokémon',
      },
    ],
  })
}
