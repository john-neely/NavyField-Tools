<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">
    <title>NavyFIELD Crew Planner</title>

    <script src="crewbuilderdata.js"></script>
    <script src="sailordata.js"></script>
    <script src="crewengine.js"></script>

    <style>
        body {
            font-family: Arial;
            margin: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 15px;
        }

        th,
        td {
            border: 1px solid #aaa;
            padding: 6px;
            text-align: center;
        }

        button {
            padding: 6px 12px;
            margin: 5px;
        }

        .controls {
            margin-bottom: 15px;
        }
    </style>

</head>

<body>

    <div style="position: sticky; top: 0; background: white; z-index: 100; margin: -20px -20px 20px -20px; padding: 20px; border-bottom: 2px solid #aaa;">
        <h2 style="margin-top: 0;">NAVYFIELD Crew Planner</h2>

        <div class="controls" style="margin-bottom: 0;">

            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <div>
                    Select Nation
                    <select id="nationSelect"></select>
                </div>
                <div>
                    Ship Class
                    <select id="shipCategory"></select>
                </div>
                <div>
                    Ship
                    <select id="shipSelect"></select>
                </div>
                <button onclick="buildCrew()" style="margin: 0;">Build Crew</button>
            </div>

            <br>

            Save Name
            <input id="buildName">

            <button onclick="saveBuild()">Save Build</button>

            <br>

            Saved Builds
            <select id="savedBuilds"></select>

            <button onclick="loadBuild()">Load</button>

            <br><br>

            Prebuilt Builds
            <select id="presetBuilds"></select>

            <button onclick="loadPreset()">Load Preset</button>
            <button onclick="calculateCrew()">Calculate Stats</button>
            
            <span style="border-left: 2px solid #ccc; margin: 0 10px; padding-left: 5px;"></span>
            <button onclick="addRow()">Add Sailor</button>
            <button onclick="refreshRows()">Refresh</button>
            <button onclick="newCrew()">Start Over</button>

            <div id="crewTotals" style="margin-top:10px; font-size:14px; padding:10px; background:#f0f0f0; border:1px solid #ccc; display:none;">
                <div id="repairTotal"></div>
                <div id="engineTotal"></div>
            </div>

        </div>
    </div>

    <table id="crewTable">

        <thead>
            <tr>
                <th>#</th>
                <th>Role</th>
                <th>Sailor Type</th>
                <th>Class</th>
                <th>Crew Size</th>
                <th>Boost</th>
                <th>Stats</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody></tbody>

    </table>


    <br>

    Export / Import Build Files

    <br><br>
    <button onclick="exportBuild()">Download Build (.json)</button>
    <input type="file" id="importFile" accept=".json" style="display:none;" onchange="importBuildFile(event)">
    <button onclick="document.getElementById('importFile').click()">Load Build (.json)</button>


    <script>


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
            ]

        }


        /* -------------------------
        Populate preset dropdown
        ------------------------- */

        const presetSelect = document.getElementById("presetBuilds")

        Object.keys(presets).forEach(p => {

            let o = document.createElement("option")

            o.value = p
            o.text = p

            presetSelect.appendChild(o)

        })


        /* -------------------------
        Populate Nations
        ------------------------- */

        const nationSelect = document.getElementById("nationSelect")

        nations.forEach(n => {
            let o = document.createElement("option")
            o.value = n.Nation
            o.text = n.Nation
            nationSelect.appendChild(o)
        })


        /* -------------------------
        Populate Ship Categories
        ------------------------- */

        const shipCategory = document.getElementById("shipCategory")

        function populateCategories() {

            shipCategory.innerHTML = ""

            const nation = nationSelect.value

            const categories = [...new Set(

                ships
                    .filter(s => s.nation === nation)
                    .map(s => s.shipCategory)

            )]

            categories.forEach(c => {
                let o = document.createElement("option")
                o.value = c
                o.text = c
                shipCategory.appendChild(o)
            })

            populateShips()

        }

        nationSelect.onchange = function () {

            populateCategories()

            document.querySelectorAll("#crewTable tbody tr")
                .forEach(row => {

                    const cell = row.querySelector(".classCell")

                    if (!cell) return

                    cell.innerHTML = ""

                    buildClassStep(row)

                })

        }

        /* -------------------------
        Populate Ships
        ------------------------- */

        const shipSelect = document.getElementById("shipSelect")

        function populateShips() {

            shipSelect.innerHTML = ""

            const nation = nationSelect.value
            const cat = shipCategory.value

            ships
                .filter(s => s.nation === nation && s.shipCategory === cat)
                .forEach(s => {

                    let o = document.createElement("option")

                    o.value = s.shipName
                    o.text = s.shipName

                    shipSelect.appendChild(o)

                })

        }

        shipCategory.onchange = populateShips


        /* -------------------------
        Build Crew
        ------------------------- */

        function buildCrew() {

            const shipName = shipSelect.value
            const ship = ships.find(s => s.shipName === shipName)

            const tbody = document.querySelector("#crewTable tbody")

            tbody.innerHTML = ""

            for (let i = 0; i < ship.allSlots; i++) {

                addRow()

            }

        }


        /* -------------------------
        Add Row
        ------------------------- */

        function addRow() {

            const tbody = document.querySelector("#crewTable tbody")

            const row = document.createElement("tr")

            const index = tbody.children.length + 1

            row.innerHTML = `

<td>${index}</td>

<td>
<select class="roleSelect">
<option>BO</option>
<option>Scout</option>
<option>Main Gunner</option>
<option>AA/DP</option>
<option>HH</option>
<option>Repair</option>
<option>Engineer</option>
<option>Fighter</option>
<option>TB</option>
<option>DB</option>
<option>Sonar</option>
<option>Planesman</option>
<option>Torper</option>
<option>Seaman</option>
</select>
</td>

<td>
<select class="sailorSelect">
${premSailors.map(s => `<option>${s.type}</option>`).join("")}
</select>
</td>

<td class="classCell"></td>

<td>
<div style="font-size:12px; text-align:left; display:inline-block;">
R: <input type="number" class="recInput" style="width:40px" value="0" min="0"><br>
E: <input type="number" class="expInput" style="width:40px" value="0" min="0"><br>
V: <input type="number" class="vetInput" style="width:40px" value="0" min="0">
<select class="vetPreset" onchange="applyVetPreset(this)" style="font-size:10px; width:55px;">
  <option value="max" selected>Max</option>
  <option value="100">100</option>
  <option value="150">150</option>
  <option value="200">200</option>
  <option value="250">250</option>
  <option value="custom">Custom</option>
</select><br>
Total: <span class="totalCrewDisplay">0</span> / <span class="maxCrewDisplay">0</span>
</div>
</td>

<td>
<input type="checkbox" class="boostToggle">
</td>

<td class="statsCell"></td>

<td>
<button onclick="optimizeRow(this)" style="margin-bottom:5px; font-size:11px;">Optimize</button><br>
<button onclick="removeRow(this)">X</button>
</td>

`

            tbody.appendChild(row)
            buildClassStep(row)

            const updateCrewTotal = (eObj) => {
                const maxSize = Number(row.querySelector(".maxCrewDisplay").innerText) || 0;
                let r = Number(row.querySelector(".recInput").value) || 0;
                let e = Number(row.querySelector(".expInput").value) || 0;
                let v = Number(row.querySelector(".vetInput").value) || 0;
                
                if (eObj && eObj.target === row.querySelector(".vetInput")) {
                   row.querySelector(".vetPreset").value = "custom";
                   let maxVets = Math.floor(maxSize * 0.5);
                   if (v > maxVets) {
                       v = maxVets;
                       row.querySelector(".vetInput").value = v;
                   }
                }

                let total = r + e + v;
                let totalSpan = row.querySelector(".totalCrewDisplay");
                totalSpan.innerText = total;
                if (total > maxSize) {
                    totalSpan.style.color = "red";
                    totalSpan.style.fontWeight = "bold";
                } else {
                    totalSpan.style.color = "black";
                    totalSpan.style.fontWeight = "normal";
                }
            };

            row.querySelector(".recInput").addEventListener("input", updateCrewTotal);
            row.querySelector(".expInput").addEventListener("input", updateCrewTotal);
            row.querySelector(".vetInput").addEventListener("input", updateCrewTotal);
            
            updateMaxCrewSize(row);

        }


        /* -------------------------
        Remove Row
        ------------------------- */

        function removeRow(btn) {

            btn.closest("tr").remove()

            refreshRows()

        }


        /* -------------------------
        Refresh
        ------------------------- */

        function refreshRows() {

            document.querySelectorAll("#crewTable tbody tr")
                .forEach((r, i) => {

                    r.children[0].innerText = i + 1

                })

        }


        /* -------------------------
        Start New Crew
        ------------------------- */

        function newCrew() {

            document.querySelector("#crewTable tbody").innerHTML = ""

        }


        /* -------------------------
        SAVE BUILD
        ------------------------- */

        function getUIState() {

            const nation = document.getElementById("nationSelect").value
            const shipCategory = document.getElementById("shipCategory").value
            const ship = document.getElementById("shipSelect").value

            const roles = [...document.querySelectorAll(".roleSelect")]
                .map(r => r.value)

            const sailors = [...document.querySelectorAll(".sailorSelect")]
                .map(s => s.value)

            const boosts = [...document.querySelectorAll(".boostToggle")]
                .map(b => b.checked)

            const recruits = [...document.querySelectorAll(".recInput")]
                .map(i => Number(i.value))
            const experts = [...document.querySelectorAll(".expInput")]
                .map(i => Number(i.value))
            const vets = [...document.querySelectorAll(".vetInput")]
                .map(i => Number(i.value))

            const classPaths = [...document.querySelectorAll("#crewTable tbody tr")]
                .map(row => {

                    const classes = [...row.querySelectorAll(".classSelect")]
                        .map(c => c.value)

                    const levels = [...row.querySelectorAll(".classLevel")]
                        .map(l => l.value)

                    return { classes, levels }

                })

            return {
                nation: nation,
                shipCategory: shipCategory,
                ship: ship,
                roles: roles,
                sailors: sailors,
                classPaths: classPaths,
                boosts: boosts,
                recruits: recruits,
                experts: experts,
                vets: vets
            }

        }

        function setUIState(data) {

            if (data.nation) {
                document.getElementById("nationSelect").value = data.nation
                populateCategories()
            }

            if (data.shipCategory) {
                document.getElementById("shipCategory").value = data.shipCategory
                populateShips()
            }

            if (data.ship) {
                document.getElementById("shipSelect").value = data.ship
            }

            newCrew()

            if (!data.roles) return

            data.roles.forEach(() => addRow())

            document.querySelectorAll(".roleSelect")
                .forEach((r, i) => {
                    if (data.roles[i]) r.value = data.roles[i]
                })

            document.querySelectorAll(".sailorSelect")
                .forEach((s, i) => {
                    if (data.sailors && data.sailors[i]) s.value = data.sailors[i]
                })

            document.querySelectorAll(".boostToggle")
                .forEach((b, i) => {
                    if (data.boosts && data.boosts[i]) {
                        b.checked = true
                    }
                })

            document.querySelectorAll(".recInput").forEach((inp, i) => {
                if (data.recruits && data.recruits[i] !== undefined) inp.value = data.recruits[i];
            })
            document.querySelectorAll(".expInput").forEach((inp, i) => {
                if (data.experts && data.experts[i] !== undefined) inp.value = data.experts[i];
            })
            document.querySelectorAll(".vetInput").forEach((inp, i) => {
                if (data.vets && data.vets[i] !== undefined) inp.value = data.vets[i];
            })

            /* restore class paths */

            document.querySelectorAll("#crewTable tbody tr")
                .forEach((row, i) => {

                    const path = data.classPaths?.[i]

                    if (!path) return

                    const cell = row.querySelector(".classCell")
                    cell.innerHTML = ""

                    let parent = null

                    path.classes.forEach((classId, stepIndex) => {

                        if (!classId && stepIndex > 0) return

                        buildClassStep(row, parent)

                        const steps = row.querySelectorAll(".classStep")
                        const step = steps[steps.length - 1]

                        const classSelect = step.querySelector(".classSelect")
                        const levelInput = step.querySelector(".classLevel")

                        classSelect.value = classId

                        if (path.levels[stepIndex]) {
                            levelInput.value = path.levels[stepIndex]
                        }

                        parent = classId

                    })

                })

        }

        function saveBuild() {

            const name = document.getElementById("buildName").value

            if (!name) return alert("Enter a build name")

            const data = getUIState()

            localStorage.setItem("crew_" + name, JSON.stringify(data))

            updateSaved()

        }


        /* -------------------------
        LOAD BUILD
        ------------------------- */

        function loadBuild() {

            const name = document.getElementById("savedBuilds").value

            const data = JSON.parse(localStorage.getItem("crew_" + name))

            if (!data) return

            setUIState(data)

        }

        /* -------------------------
        UPDATE SAVED LIST
        ------------------------- */

        function updateSaved() {

            const saved = document.getElementById("savedBuilds")

            saved.innerHTML = ""

            Object.keys(localStorage).forEach(k => {

                if (k.startsWith("crew_")) {

                    let o = document.createElement("option")

                    o.value = k.replace("crew_", "")
                    o.text = k.replace("crew_", "")

                    saved.appendChild(o)

                }

            })

        }


        /* -------------------------
        LOAD PRESET
        ------------------------- */

        function loadPreset() {

            const name = presetSelect.value

            const roles = presets[name]

            newCrew()

            roles.forEach(r => {
                addRow()
            })

            document.querySelectorAll(".roleSelect").forEach((r, i) => {

                r.value = roles[i]

            })

        }

        function populateClassOptions(row) {

            const nation = document.getElementById("nationSelect").value

            const classBoxes = row.querySelectorAll(".classSelect")

            if (!classBoxes.length) return

            const nationClasses = sailorClasses.filter(c => c.nation === nation)

            classBoxes.forEach(box => {

                box.innerHTML = ""

                let blank = document.createElement("option")
                blank.text = "--"
                blank.value = ""
                box.appendChild(blank)

                nationClasses.forEach(c => {

                    let o = document.createElement("option")
                    o.value = c.id
                    o.text = c.name

                    box.appendChild(o)

                })

            })

        }
        function buildClassStep(row, parentClass = null) {

            const nation = document.getElementById("nationSelect").value
            const cell = row.querySelector(".classCell")

            const step = document.createElement("div")
            step.className = "classStep"
            step.style.marginBottom = "4px"

            const classSelect = document.createElement("select")
            let blank = document.createElement("option")
            blank.value = ""
            blank.text = "--"
            classSelect.appendChild(blank)
            classSelect.className = "classSelect"

            const levelInput = document.createElement("input")
            levelInput.type = "number"
            levelInput.className = "classLevel"
            levelInput.style.width = "60px"
            levelInput.max = 125

            function enforceMinLevel() {
                let minAllowed = 1;
                if (typeof sailorClasses !== 'undefined') {
                    const selectedClass = sailorClasses.find(c => c.id == classSelect.value);
                    if (selectedClass) {
                        minAllowed = Number(selectedClass.requiredLevel) || 1;
                    }
                }

                const prevStep = step.previousElementSibling;
                if (prevStep && prevStep.classList.contains("classStep")) {
                    const prevLevelInput = prevStep.querySelector(".classLevel");
                    if (prevLevelInput) {
                        const prevLevel = Number(prevLevelInput.value);
                        if (prevLevel > minAllowed) minAllowed = prevLevel;
                    }
                }

                levelInput.min = minAllowed;
                if (Number(levelInput.value) < minAllowed && levelInput.value !== "") {
                    levelInput.value = minAllowed;
                }

                const nextStep = step.nextElementSibling;
                if (nextStep && nextStep.classList.contains("classStep")) {
                    const nextInput = nextStep.querySelector(".classLevel");
                    if (nextInput) {
                        nextInput.dispatchEvent(new Event("change"));
                    }
                }
                updateMaxCrewSize(row);
            }
            levelInput.addEventListener("change", enforceMinLevel);

            step.appendChild(classSelect)
            step.appendChild(document.createTextNode(" Lv "))
            step.appendChild(levelInput)

            cell.appendChild(step)


            /* determine options */

            let options = []

            if (parentClass) {

                const childIDs = classTransitions
                    .filter(t => t.parentId === Number(parentClass))
                    .map(t => t.childId)

                options = sailorClasses.filter(c => childIDs.includes(Number(c.id)))

            } else {

                const childIDs = classTransitions.map(t => t.childId)

                options = sailorClasses.filter(c =>
                    c.nation === nation && !childIDs.includes(Number(c.id))
                )

            }


            /* populate dropdown */

            options.forEach(c => {

                let o = document.createElement("option")
                o.value = c.id
                o.text = c.name

                classSelect.appendChild(o)

            })


            /* set default level */

            if (options.length) {

                levelInput.value = options[0].requiredLevel || ""
                enforceMinLevel()

            }


            /* when class changes */

            classSelect.addEventListener("change", function () {

                let next = step.nextSibling
                while (next) {

                    let tmp = next.nextSibling
                    next.remove()
                    next = tmp

                }

                const selectedClass = sailorClasses.find(c => c.id == classSelect.value)

                if (selectedClass) {

                    levelInput.value = selectedClass.requiredLevel

                }

                enforceMinLevel()

                const children = classTransitions.filter(
                    t => t.parentId === Number(classSelect.value)
                )

                if (children.length) {

                    buildClassStep(row, classSelect.value)

                }
                
                updateMaxCrewSize(row);

            })


            /* auto-build next step */

            if (classSelect.value) {

                const children = classTransitions.filter(
                    t => t.parentId === Number(classSelect.value)
                )

                if (children.length) {

                    buildClassStep(row, classSelect.value)

                }

            }

        }
        /* -------------------------
        INIT
        ------------------------- */

        populateCategories()
        updateSaved()
        function exportBuild() {
            const data = getUIState()
            const jsonStr = JSON.stringify(data, null, 2)
            const blob = new Blob([jsonStr], { type: "application/json" })
            const url = URL.createObjectURL(blob)
            
            let a = document.createElement("a")
            a.href = url
            let name = document.getElementById("buildName").value || "NavyFieldBuild"
            a.download = name + ".json"
            
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
        }

        function importBuildFile(event) {
            const file = event.target.files[0]
            if (!file) return
            
            const reader = new FileReader()
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result)
                    setUIState(data)
                } catch (err) {
                    alert("Invalid build file.")
                }
            }
            reader.readAsText(file)
            
            event.target.value = ""
        }

        function applyVetPreset(sel) {
            const row = sel.closest("tr");
            const maxSize = Number(row.querySelector(".maxCrewDisplay").innerText) || 0;
            const vInput = row.querySelector(".vetInput");
            const eInput = row.querySelector(".expInput");
            
            if (sel.value === "custom") return;
            
            let target = 0;
            if (sel.value === "max") {
                target = Math.floor(maxSize * 0.5);
            } else {
                target = Number(sel.value) || 0;
            }
            
            let oldV = Number(vInput.value) || 0;
            let newV = Math.min(target, Math.floor(maxSize * 0.5));
            vInput.value = newV;
            
            let e = Number(eInput.value) || 0;
            eInput.value = Math.max(0, e - (newV - oldV));
            
            vInput.dispatchEvent(new Event("input"));
        }

        function getMaxCrewSize(config) {
            let size = 55;
            let currentLevel = 1;
            let currentRecruitsPerLevel = 5;

            config.classPath.forEach(step => {
                if (!step.classId) return;
                
                const levels = Math.max(0, step.level - currentLevel);
                size += levels * currentRecruitsPerLevel;
                
                const cls = sailorClasses.find(c => c.id == step.classId);
                if (cls && cls.recruitsPerLevel) {
                   currentRecruitsPerLevel = cls.recruitsPerLevel;
                }
                currentLevel = Math.max(currentLevel, step.level);
            });

            if (currentLevel < config.finalLevel) {
                const levels = config.finalLevel - currentLevel;
                size += levels * currentRecruitsPerLevel;
            }

            return size;
        }

        function updateMaxCrewSize(row) {
            const classes = [...row.querySelectorAll(".classSelect")].map(c => c.value);
            const levels = [...row.querySelectorAll(".classLevel")].map(l => Number(l.value));
            const classPath = classes.map((c, i) => ({ classId: Number(c), level: levels[i] }));
            const maxSize = getMaxCrewSize({ classPath: classPath, finalLevel: 125 });
            
            const maxSpan = row.querySelector(".maxCrewDisplay");
            if (!maxSpan) return;
            const oldMax = Number(maxSpan.innerText) || 0;
            maxSpan.innerText = maxSize;
            
            const rInput = row.querySelector(".recInput");
            const eInput = row.querySelector(".expInput");
            const vInput = row.querySelector(".vetInput");
            
            let r = Number(rInput.value) || 0;
            let e = Number(eInput.value) || 0;
            let v = Number(vInput.value) || 0;

            if (oldMax === 0 && r === 0 && e === 0 && v === 0) {
                eInput.value = maxSize;
                const preset = row.querySelector(".vetPreset");
                if (preset && preset.value !== "custom") {
                    applyVetPreset(preset);
                }
            } else {
                let diff = maxSize - oldMax;
                if (diff !== 0) {
                    eInput.value = Math.max(0, e + diff);
                }
            }
            
            const rReal = Number(rInput.value) || 0;
            const totalSpan = row.querySelector(".totalCrewDisplay");
            let total = rReal + e + v;
            totalSpan.innerText = total;
            if (total > maxSize) {
                totalSpan.style.color = "red";
                totalSpan.style.fontWeight = "bold";
            } else {
                totalSpan.style.color = "black";
                totalSpan.style.fontWeight = "normal";
            }
        }

        function gatherCrewData() {

            const nation = document.getElementById("nationSelect").value

            const rows = [...document.querySelectorAll("#crewTable tbody tr")]

            return rows.map(row => {

                const role = row.querySelector(".roleSelect").value
                const sailorType = row.querySelector(".sailorSelect").value
                const boost = row.querySelector(".boostToggle")?.checked || false

                const recruits = Number(row.querySelector(".recInput").value) || 0
                const experts = Number(row.querySelector(".expInput").value) || 0
                const vets = Number(row.querySelector(".vetInput").value) || 0

                const classes = [...row.querySelectorAll(".classSelect")]
                    .map(c => c.value)

                const levels = [...row.querySelectorAll(".classLevel")]
                    .map(l => Number(l.value))

                const classPath = classes.map((c, i) => ({

                    classId: Number(c),
                    level: levels[i]

                }))

                return {
                    nation: nation,
                    role: role,
                    sailorType: sailorType,
                    classPath: classPath,
                    boost: boost,
                    recruits: recruits,
                    experts: experts,
                    vets: vets,
                    finalLevel: 125
                }

            })

        }

        function optimizeRow(btn) {
            const row = btn.closest("tr");
            const tbody = row.parentNode;
            const rowIndex = Array.from(tbody.children).indexOf(row);
            
            const allCrew = gatherCrewData();
            const config = allCrew[rowIndex];
            
            if (!config || !config.sailorType) return;
            
            function getDefaultOpt(r, n) {
                if (r === "Main Gunner" || r === "AA/DP" || r === "HH") return { s: "reload", c: 2080000 };
                if (r === "Torper") return { s: "torpedo", c: 1000000 };
                if (r === "Sonar") return { s: "potential", c: 4000000 };
                if (r === "Planesman") {
                    if (n === "UK" || n === "US" || n === "SN") return { s: "potential", c: 6500000 };
                    return { s: "potential", c: 5000000 };
                }
                if (r === "Fighter") return { s: "fighter", c: 2000000 };
                if (r === "TB" || r === "DB" || r === "Scout") return { s: "aircraft", c: 2000000 };
                if (r === "Engineer") return { s: "engine", c: 2000000 };
                if (r === "Repair") return { s: "repair", c: 2000000 };
                return { s: "reload", c: 2080000 };
            }
            
            const def = getDefaultOpt(config.role, config.nation);
            
            const statToOptimize = prompt(`To maximize Repair (or other off-stats), simply tell me your MAIN ROLE stat to cap. The optimizer will automatically delay your classes as long as medically possible to preserve your Repair stats!\n\nStat to hit cap for (e.g. reload, accuracy, torpedo, engine, fighter, bomber, aircraft, potential):`, def.s);
            if (!statToOptimize) return;
            
            const targetString = prompt(`Enter the target True Ability cap you want to precisely hit for '${statToOptimize}':`, def.c);
            if (!targetString) return;
            const targetCap = parseInt(targetString, 10);
            
            const validSteps = config.classPath.filter(c => c.classId);
            if (validSteps.length === 0) {
                alert("No classes selected.");
                return;
            }
            
            for (let i = 0; i < validSteps.length; i++) {
                let step = validSteps[i];
                let cls = sailorClasses.find(c => c.id == step.classId);
                let minLvl = cls ? (Number(cls.requiredLevel) || 1) : 1;
                // Force the very first "classing" step to level 12
                if (i === 0) {
                    minLvl = 12;
                }
                if (i > 0) {
                    minLvl = Math.max(minLvl, validSteps[i-1].level);
                }
                step.level = minLvl;
            }
            
            const testStats = CrewEngine.buildSailor(config);
            const testMetrics = CrewEngine.calculateTrueAbilities(testStats, config.role, config.recruits, config.experts, config.vets, config.nation);
            let testTA = testMetrics.ta[statToOptimize.toLowerCase()];
            if (testTA == null) {
                alert(`Stat '${statToOptimize}' not found.`);
                return;
            }
            if (testTA < targetCap) {
                alert("Cannot reach the target cap even with no delays. You need a better base sailor, more crew, or a different class path.");
                return;
            }
            
            for (let i = validSteps.length - 1; i >= 0; i--) {
                let step = validSteps[i];
                
                // Do not attempt to delay the first class step, lock it to its required level (12)
                if (i === 0) {
                    step.level = 12;
                    continue;
                }

                let cls = sailorClasses.find(c => c.id == step.classId);
                let minAllowed = cls ? (Number(cls.requiredLevel) || 1) : 1;
                if (i > 0) {
                    minAllowed = Math.max(minAllowed, validSteps[i-1].level);
                }
                let maxAllowed = 125;
                if (i < validSteps.length - 1) {
                    maxAllowed = validSteps[i+1].level;
                }
                
                let bestLevel = minAllowed;
                for (let l = maxAllowed; l >= minAllowed; l--) {
                    step.level = l;
                    let loopConfig = { ...config, classPath: validSteps };
                    let loopMaxSize = getMaxCrewSize(loopConfig);
                    
                    let vetPreset = row.querySelector(".vetPreset").value;
                    let targetVets = 0;
                    if (vetPreset === "max") {
                        targetVets = Math.floor(loopMaxSize * 0.5);
                    } else if (vetPreset === "custom") {
                        targetVets = Number(row.querySelector(".vetInput").value) || 0;
                    } else {
                        targetVets = Number(vetPreset) || 0;
                    }
                    
                    let loopVets = Math.min(targetVets, Math.floor(loopMaxSize * 0.5));
                    let loopExperts = loopMaxSize - loopVets;
                    let loopRecruits = 0;
                    
                    let loopStats = CrewEngine.buildSailor(loopConfig);
                    let loopMetrics = CrewEngine.calculateTrueAbilities(loopStats, config.role, loopRecruits, loopExperts, loopVets, config.nation);
                    let ta = loopMetrics.ta[statToOptimize.toLowerCase()];
                    if (ta >= targetCap) {
                        bestLevel = l;
                        break;
                    }
                }
                step.level = bestLevel;
            }
            
            const uiSteps = row.querySelectorAll(".classStep");
            let vStepIdx = 0;
            uiSteps.forEach(uiStep => {
                const sel = uiStep.querySelector(".classSelect");
                if (sel.value) {
                    const input = uiStep.querySelector(".classLevel");
                    input.value = validSteps[vStepIdx].level;
                    vStepIdx++;
                }
            });
            
            uiSteps.forEach(uiStep => {
                 const sel = uiStep.querySelector(".classSelect");
                 if (sel.value) {
                     const input = uiStep.querySelector(".classLevel");
                     input.dispatchEvent(new Event("change"));
                 }
            });
            
            calculateCrew();
        }

        function calculateCrew() {

            const crew = gatherCrewData()

            const results = CrewEngine.buildCrew(crew) || []

            const rows = document.querySelectorAll("#crewTable tbody tr")

            let totalRepair = 0;
            let totalEngine = 0;
            let totalWeight = 0;
            const statBlockStyle = "font-size:12px; text-align:left; display:inline-block; margin-right:5px; vertical-align:top; border:1px solid #ddd; padding:2px;"

            results.forEach((stats, i) => {

                const row = rows[i]
                const c = crew[i]

                const cell = row.querySelector(".statsCell")

                if (!cell) return

                const metrics = CrewEngine.calculateTrueAbilities(stats, c.role, c.recruits, c.experts, c.vets, c.nation);

                totalRepair += metrics.repPerSec;
                if (c.role === "Engineer") totalEngine += metrics.engineOH;
                totalWeight += metrics.sailorWeight;

                let baseHTML = `<b>Base:</b><br>`;
                const r = c.role;

                if (r === "Seaman") {
                    baseHTML += `Pot:${stats.potential}<br>Acc:${stats.accuracy}<br>Rld:${stats.reload}<br>Tor:${stats.torpedo}<br>AAW:${stats.aaw}<br>Rep:${stats.repair}<br>Res:${stats.restore}<br>Eng:${stats.engine}<br>Air:${stats.aircraft}<br>Ftr:${stats.fighter}<br>Bom:${stats.bomber}<br>`;
                } else {
                    // Role-specific stats
                    if (r === "BO" || r === "Sonar" || r === "Planesman") {
                        baseHTML += `Pot:${stats.potential}<br>`;
                    }
                    if (r === "Main Gunner" || r === "HH" || r === "AA/DP") {
                        baseHTML += `Acc:${stats.accuracy}<br>Rld:${stats.reload}<br>`;
                    }
                    if (r === "Torper") {
                        baseHTML += `Tor:${stats.torpedo}<br>`;
                    }
                    // ALWAYS show Repair
                    baseHTML += `Rep:${stats.repair}<br>`;

                    if (r === "Engineer") {
                        baseHTML += `Eng:${stats.engine}<br>`;
                    }
                    if (r === "Scout" || r === "Fighter" || r === "TB" || r === "DB") {
                        baseHTML += `Air:${stats.aircraft}<br>Ftr:${stats.fighter}<br>Bom:${stats.bomber}<br>`;
                    }
                }

                let taHTML = `<b>True Ability:</b><br>Rep/s: ${metrics.repPerSec.toFixed(3)}<br>`;

                if (r === "Engineer") {
                    taHTML += `Eng/s: ${metrics.engineOH.toFixed(3)}<br>`;
                }
                if (r === "Main Gunner" || r === "HH" || r === "AA/DP") {
                    taHTML += `Acc: ${metrics.accPct.toFixed(1)}%<br>Rld: ${metrics.rldPct.toFixed(1)}%<br>`;
                }
                if (metrics.priCap) {
                    taHTML += `Pri Cap: ${(metrics.priTA / metrics.priCap * 100).toFixed(1)}%<br>`;
                }

                taHTML += `Weight: ${metrics.sailorWeight.toFixed(0)}t<br>`;

                cell.innerHTML = `
<div style="${statBlockStyle}">
${baseHTML}
</div>
<div style="${statBlockStyle}">
${taHTML}
</div>
`

            })

            const totalsDiv = document.getElementById("crewTotals").style.display = "block"
            const REPAIR_CAP = 280;
            let effectiveRepair = Math.min(totalRepair, REPAIR_CAP);
            const totalRepPct = (totalRepair / REPAIR_CAP) * 100;
            
            let repHTML = `<b>Total Repair:</b> ${effectiveRepair.toFixed(3)} Rep/s`;
            if (totalRepair > REPAIR_CAP) {
                repHTML += ` <span style="color:red; font-weight:bold;">(HARD CAPPED)</span> <i>(Raw: ${totalRepair.toFixed(3)} / ${totalRepPct.toFixed(1)}%)</i>`;
            } else {
                repHTML += ` (${totalRepPct.toFixed(1)}% of cap)`;
            }
            document.getElementById("repairTotal").innerHTML = repHTML;
            document.getElementById("engineTotal").innerHTML = `<b>Total Engine:</b> ${totalEngine.toFixed(3)} OH/s<br><b>Total Crew Weight:</b> ${totalWeight.toFixed(0)}t`

        }
    </script>

</body>

</html>
