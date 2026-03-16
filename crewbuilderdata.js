/* =========================
NATIONS
========================= */

const nations = [
    { Nation_ID: 0, Nation: "US", AAW: 2, Fighter: 2 },
    { Nation_ID: 1, Nation: "UK", Repair: 2, Restore: 2 },
    { Nation_ID: 2, Nation: "KM", Accuracy: 2, Reload: 2, Engine: 2, Bomber: 2 },
    { Nation_ID: 3, Nation: "IJN", Torpedo: 2, Bomber: 2 },
    { Nation_ID: 4, Nation: "MN", Restore: 2, Fighter: 2 },
    { Nation_ID: 5, Nation: "SN", Engine: 2, Bomber: 2 },
    { Nation_ID: 6, Nation: "RM", Reload: 2, Fighter: 2 },
    { Nation_ID: 7, Nation: "CN" } // no stats
];


/* =========================
ABILITIES
========================= */

const abilities = [
    "Potential",
    "Accuracy",
    "Reload",
    "Torpedo",
    "AAW",
    "Repair",
    "Restore",
    "Engine",
    "Aircraft",
    "Fighter",
    "Bomber"
];


/* =========================
SHIPS
========================= */

const ships = [
    { nation: "IJN", shipType: "BB", shipName: "Izmi", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "IJN", shipType: "BB", shipName: "Atago", supportSlots: 10, shipCategory: "EBB6", shipSlots: 5, allSlots: 15 },
    { nation: "IJN", shipType: "BB", shipName: "Yamato (1945)", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "IJN", shipType: "BB", shipName: "Amagi", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "KM", shipType: "BB", shipName: "Admiral Scheer", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "KM", shipType: "BB", shipName: "J44 Class", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "KM", shipType: "BB", shipName: "Koenig Albert", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "KM", shipType: "BB", shipName: "Kaiser", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "MN", shipType: "BB", shipName: "Versailles", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "MN", shipType: "BB", shipName: "Bourgogne", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "MN", shipType: "BB", shipName: "Clemenceau (1943)", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "MN", shipType: "BB", shipName: "Charlemagne", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "RM", shipType: "BB", shipName: "Italia", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "RM", shipType: "BB", shipName: "Impero", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "RM", shipType: "BB", shipName: "Roma", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "RM", shipType: "BB", shipName: "Progetto UP41", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "UK", shipType: "BB", shipName: "King George VI", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "UK", shipType: "BB", shipName: "Conqueror", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "UK", shipType: "BB", shipName: "Thunderer", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "UK", shipType: "BB", shipName: "Queen Victoria", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "SN", shipType: "BB", shipName: "Krasnaya ploshchad", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "SN", shipType: "BB", shipName: "Sovietsky Spiral", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "SN", shipType: "BB", shipName: "Project 25", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "SN", shipType: "BB", shipName: "Project 24", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "US", shipType: "BB", shipName: "Connecticut", supportSlots: 10, shipCategory: "BB7", shipSlots: 5, allSlots: 15 },
    { nation: "US", shipType: "BB", shipName: "Oklahoma", supportSlots: 9, shipCategory: "EBB6.5", shipSlots: 5, allSlots: 14 },
    { nation: "US", shipType: "BB", shipName: "New Jersey", supportSlots: 9, shipCategory: "EBB6", shipSlots: 5, allSlots: 14 },
    { nation: "US", shipType: "BB", shipName: "Nebraska", supportSlots: 9, shipCategory: "BB6", shipSlots: 5, allSlots: 14 },
    { nation: "CN", shipType: "CV", shipName: "LiaoNing", supportSlots: 12, shipCategory: "CV7", shipSlots: 3, allSlots: 15 },
    { nation: "CN", shipType: "CV", shipName: "ChengGong", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "IJN", shipType: "CV", shipName: "Gawachi", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "IJN", shipType: "CV", shipName: "Tosa", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "IJN", shipType: "CV", shipName: "De Grasse", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "KM", shipType: "CV", shipName: "Clausewitz", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "KM", shipType: "CV", shipName: "Eurasien", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "KM", shipType: "CV", shipName: "De Grasse", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "MN", shipType: "CV", shipName: "Egalite", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "MN", shipType: "CV", shipName: "Calais", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "MN", shipType: "CV", shipName: "Liberte", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "RM", shipType: "CV", shipName: "Garibaldi", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "RM", shipType: "CV", shipName: "Falco", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "RM", shipType: "CV", shipName: "Bonfiglietti", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "UK", shipType: "CV", shipName: "Queen Mother", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "UK", shipType: "CV", shipName: "Indefatigable", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "UK", shipType: "CV", shipName: "Midway", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "SN", shipType: "CV", shipName: "Kuznetsov", supportSlots: 11, shipCategory: "CV7", shipSlots: 3, allSlots: 14 },
    { nation: "SN", shipType: "CV", shipName: "Varyag", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "SN", shipType: "CV", shipName: "Oktyabrya", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "SN", shipType: "CV", shipName: "Fevral", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "SN", shipType: "CV", shipName: "Tsar", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "US", shipType: "CV", shipName: "Franklin D. Roosevelt", supportSlots: 10, shipCategory: "CV7", shipSlots: 3, allSlots: 13 },
    { nation: "US", shipType: "CV", shipName: "Saratoga", supportSlots: 9, shipCategory: "ECV6", shipSlots: 3, allSlots: 12 },
    { nation: "US", shipType: "CV", shipName: "Midway", supportSlots: 9, shipCategory: "CV6", shipSlots: 3, allSlots: 12 },
    { nation: "CN", shipType: "SS", shipName: "033-Type[Memorial ship]", supportSlots: 7, shipCategory: "SS6", shipSlots: 4, allSlots: 11 },
    { nation: "IJN", shipType: "SS", shipName: "I 400", supportSlots: 8, shipCategory: "SS6", shipSlots: 4, allSlots: 12 },
    { nation: "KM", shipType: "SS", shipName: "Type - XXI", supportSlots: 7, shipCategory: "SS6", shipSlots: 4, allSlots: 11 },
    { nation: "MN", shipType: "SS", shipName: "L'Aurore", supportSlots: 6, shipCategory: "SS6", shipSlots: 4, allSlots: 10 },
    { nation: "RM", shipType: "SS", shipName: "Ammiraglio Cagni", supportSlots: 6, shipCategory: "SS6", shipSlots: 4, allSlots: 10 },
    { nation: "UK", shipType: "SS", shipName: "A Type", supportSlots: 6, shipCategory: "SS6", shipSlots: 4, allSlots: 10 },
    { nation: "SN", shipType: "SS", shipName: "K", supportSlots: 5, shipCategory: "SS6", shipSlots: 4, allSlots: 9 },
    { nation: "US", shipType: "SS", shipName: "Balao", supportSlots: 6, shipCategory: "SS6", shipSlots: 4, allSlots: 10 },

];


/* =========================
PREMIUM SAILORS
========================= */

const premSailors = [

    {
        type: "Santa",
        potential: 19,
        accuracy: 19,
        reload: 19,
        torpedo: 19,
        aaw: 19,
        repair: 19,
        restore: 19,
        engine: 19,
        aircraft: 19,
        fighter: 19,
        bomber: 19
    },

    {
        type: "NFX",
        potential: 18,
        accuracy: 18,
        reload: 18,
        torpedo: 18,
        aaw: 18,
        repair: 18,
        restore: 18,
        engine: 18,
        aircraft: 18,
        fighter: 18,
        bomber: 18
    },

    {
        type: "AdvE Hero",
        potential: 16,
        accuracy: 16,
        reload: 16,
        torpedo: 16,
        aaw: 16,
        repair: 16,
        restore: 16,
        engine: 16,
        aircraft: 16,
        fighter: 16,
        bomber: 16
    },

    {
        type: "AdvE Reload",
        potential: 10,
        accuracy: 14,
        reload: 17,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "AdvE Torper",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 17,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "AdvE Repair",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 17,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "AdvE Engine",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 17,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "AdvE Fighter",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 17,
        bomber: 10
    },

    {
        type: "AdvE Bomber",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 17
    },

    {
        type: "Hero",
        potential: 14,
        accuracy: 14,
        reload: 14,
        torpedo: 14,
        aaw: 14,
        repair: 14,
        restore: 14,
        engine: 14,
        aircraft: 14,
        fighter: 14,
        bomber: 14
    },

    {
        type: "SE Potential",
        potential: 18,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "SE Repair",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 15,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "SE Torper",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 15,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "SE Reload",
        potential: 10,
        accuracy: 10,
        reload: 18,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "SE Engine",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 15,
        aircraft: 10,
        fighter: 10,
        bomber: 10
    },

    {
        type: "SE Fighter",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 15,
        bomber: 10
    },

    {
        type: "SE Bomber",
        potential: 10,
        accuracy: 10,
        reload: 10,
        torpedo: 10,
        aaw: 10,
        repair: 10,
        restore: 10,
        engine: 10,
        aircraft: 10,
        fighter: 10,
        bomber: 15
    },

    {
        type: "Elite Potential",
        potential: 16,
        accuracy: 9,
        reload: 9,
        torpedo: 9,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 9,
        bomber: 9
    },

    {
        type: "Elite Repair",
        potential: 9,
        accuracy: 9,
        reload: 9,
        torpedo: 9,
        aaw: 9,
        repair: 13,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 9,
        bomber: 9
    },

    {
        type: "Elite Torper",
        potential: 9,
        accuracy: 9,
        reload: 9,
        torpedo: 13,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 9,
        bomber: 9
    },

    {
        type: "Elite Reload",
        potential: 9,
        accuracy: 11,
        reload: 13,
        torpedo: 9,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 9,
        bomber: 9
    },

    {
        type: "Elite Engine",
        potential: 9,
        accuracy: 9,
        reload: 9,
        torpedo: 9,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 13,
        aircraft: 9,
        fighter: 9,
        bomber: 9
    },

    {
        type: "Elite Fighter",
        potential: 9,
        accuracy: 9,
        reload: 9,
        torpedo: 9,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 13,
        bomber: 9
    },

    {
        type: "Elite Bomber",
        potential: 9,
        accuracy: 9,
        reload: 9,
        torpedo: 9,
        aaw: 9,
        repair: 9,
        restore: 9,
        engine: 9,
        aircraft: 9,
        fighter: 9,
        bomber: 13
    }




];
