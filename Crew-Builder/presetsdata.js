/* -------------------------
PRESET BUILDS
------------------------- */

const presets = {

    "BB Standard 4 Gunner": [
        "BO",
        "Scout",
        "Main Gunner",
        "Main Gunner",
        "Main Gunner",
        "Main Gunner",
        "Engineer",
        "Engineer",
        "Engineer",
        "Engineer"
    ],

    "BB Repair Heavy": [
        "BO",
        "Scout",
        "Main Gunner",
        "Main Gunner",
        "Main Gunner",
        "Main Gunner",
        "Repair",
        "Repair",
        "Repair",
        "Engineer"
    ],

    "CV Standard": [
        "BO",
        "Main Gunner",
        "Main Gunner",
        "Fighter",
        "Fighter",
        "Fighter",
        "Fighter",
        "Seaman"
    ],

    "BB Standard 4 Gunner - Premium": [
        "BO", // It still works with just a string (defaults to BO with standard sailor)
        { role: "Scout", sailor: "Elite Potential" }, // Or you can specify the exact sailor type
        { role: "Main Gunner", sailor: "Hero" },
        { role: "Main Gunner", sailor: "Hero" },
        { role: "Main Gunner", sailor: "Hero" },
        { role: "Main Gunner", sailor: "Hero" },
        { role: "Engineer", sailor: "Elite Engine" },
        { role: "Engineer", sailor: "Elite Engine" },
        { role: "Engineer", sailor: "Elite Engine" },
        { role: "Engineer", sailor: "Elite Engine" }
    ],
};
