const CrewEngine = {

START_MULTIPLIER:2.1,

STAT_KEYS:[
"potential",
"accuracy",
"reload",
"torpedo",
"aaw",
"repair",
"restore",
"engine",
"aircraft",
"fighter",
"bomber"
],


getPrem(type){

return premSailors.find(p=>p.type===type)

},


getClass(id){

return sailorClasses.find(c=>c.id==id)

},


buildSailor(config){

const prem=this.getPrem(config.sailorType)
const nationData=typeof nations!=="undefined" ? nations.find(n=>n.Nation===config.nation) : null

const stats={}

this.STAT_KEYS.forEach(stat=>{

const base=prem[stat]
let currentBase=base
let value=base*this.START_MULTIPLIER

let currentLevel=1
let modifier=0

let isFirstClass=true

config.classPath.forEach(step=>{

if(!step.classId) return

const levels=Math.max(0, step.level-currentLevel)

value+=(currentBase+modifier)*levels

if(isFirstClass){
if(nationData){
const nationStatKey=Object.keys(nationData).find(k=>k.toLowerCase()===stat.toLowerCase())
if(nationStatKey && typeof nationData[nationStatKey]==='number'){
currentBase+=nationData[nationStatKey]
}
}
isFirstClass=false
}

const cls=this.getClass(step.classId)

if(cls && cls.growthModifiers){

modifier+=cls.growthModifiers[stat] || 0

}

currentLevel=Math.max(currentLevel, step.level)

})

if(currentLevel<config.finalLevel){

const levels=config.finalLevel-currentLevel

value+=(currentBase+modifier)*levels

}

if(config.boost){
value=value*1.2
}

stats[stat]=Math.floor(value)

})

return stats

},


buildCrew(crewData){

return crewData.map(sailor=>this.buildSailor(sailor))

},

calculateTrueAbilities(stats, role, recruits, experts, vets, nation){

const weight = recruits * 0.4 + experts * 1 + vets * 4;

const ta = {};
this.STAT_KEYS.forEach(k => {
    ta[k] = Math.round(stats[k] * weight);
});

const repPerSec = ta.repair / 138500;
const engineOH = ta.engine / 112500;

const ACC_CAP = 1700000;
const RLD_CAP = 2100000;

let priCap = null;
let priTA = 0;

if (typeof rolePrimaryStats !== "undefined" && rolePrimaryStats[role]) {
    const roleData = rolePrimaryStats[role];
    if (roleData.stat) {
        priTA = ta[roleData.stat] || 0;
        priCap = roleData.cap;
        
        // Handle Planesman nation bump
        if (role === "Planesman" && (nation === "UK" || nation === "US" || nation === "SN")) {
            priCap = 6500000;
        }
    }
}

let accPct = (ta.accuracy / ACC_CAP) * 100;
let rldPct = (ta.reload / RLD_CAP) * 100;

    return {
        ta: ta,
        repPerSec: repPerSec,
        engineOH: engineOH,
        priCap: priCap,
        priTA: priTA,
        accPct: accPct,
        rldPct: rldPct,
        sailorWeight: weight / 2 // in tons
    };

}

}

