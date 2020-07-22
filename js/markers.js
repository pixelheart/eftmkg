


// Icon created by Kaio Maia based on www.flaticon.com



var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -6]
    }
});

var sportbag = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/sportbag.png'}),
    drawer = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/drawer.png'}),
    grenadebox = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/grenadebox.png'}),
    jacket = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/jacket.png'}),
    pcblock = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/pcblock.png'}),
    safe = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/safe.png'}),
    spawnkey = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/spawnkey.png'}),
    coordenadas = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/coord.png'}),

    // ITENS
    water = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/water.png'}),
    gasanalyser = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/gasanalyser.png'}),
    backpack = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/backpack.png'}),
    bodyarmor = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/bodyarmor.png'}),
    medikits = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/medikits.png'}),
    secureflashdrive = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/secureflashdrive.png'}),
    money = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/money.png'}),

    // ANGLES
    angleup = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/angle-up.png'}),
    angledown = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/angle-down.png'}),
    angleleft = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/angle-left.png'}),
    angleright = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/angle-right.png'}),

    spawnweapon = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/spawnweapon.png'}),
    trashbin = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/trashbin.png'}),
    toolbox = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/toolbox.png'}),
    woodentoolbox = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/woodentoolbox.png'}),
    deadscav = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/deadscav.png'}),
    medcase = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/medcase.png'}),
    medbag = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/medbag.png'}),
    miscellaneous = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/miscellaneous.png'}),

    quest = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/quest.png'}),
    door = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/door.png'}),
    stairs = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/stairs.png'}),
    stairsup = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/stairsup.png'}),
    stairsdown = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/stairsdown.png'}),

    padlock = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/padlock.png'}),

    cashregister = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/cashregister.png'}),
    woodenammobox = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/woodenammobox.png'}),
    weaponbox = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponbox.png'}),
    weaponbox5x2 = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponbox5x2.png'}),
    weaponbox6x3 = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponbox6x3.png'}),
    weaponbox4x4 = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponbox4x4.png'}),
    weaponbox5x5 = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponbox5x5.png'}),
    woodencrate = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/woodencrate.png'}),
    bitcoin = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/bitcoin.png'}),
    goldchain = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/goldchain.png'}),
    gpu = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/gpu.png'}),
    unknown = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/unknown.png'}),
    keyfind = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/keyfind.png'}),
    hole = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/hole.png'}),
    weaponcabinet = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponcabinet.png'}),
    pmcspawn = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/pmcspawn.png'}),
    pmcextract = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/pmcextract.png'}),
    pmcextracttemp = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/pmcextracttemp.png'}),
    temporaryextraction = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/temporaryextraction.png'}),
    scavextract = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/scavextract.png'}),
    special = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/special.png'})
    weaponmods = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/weaponmods.png'})
    provisions = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/provisions.png'})
    ammopack = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/ammopack.png'})
    barterbuildingmaterials = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barterbuildingmaterials.png'})
    bartertools = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/bartertools.png'})
    barrelcache = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barrelcache.png'})
    hiddencache = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/hiddencache.png'})
    waterfilter = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/waterfilter.png'})
    electricmotor = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/electricmotor.png'})
    carbattery = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/carbattery.png'})
    barteritens = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barteritens.png'})
    barterothers = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barterothers.png'})
    barterhousehold = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barterhousehold.png'})
    barterelectronics = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barterelectronics.png'})
    barterflammable = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/barterflammable.png'})
    fueltank = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/fueltank.png'})
    keycardred = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/keycardred.png'})
    keycardblue = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/keycardblue.png'})
    goldenstar = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/goldenstar.png'})
    ledx = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/ledx.png'})
    medicaltreatment = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/medicaltreatment.png'})
    medicalsupplies = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/medicalsupplies.png'})
    bartervaluables = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/bartervaluables.png'})
    folderintelligence = new LeafIcon({iconUrl: 'https://eftmkg.com/img/markers/folderintelligence.png'})
    ;