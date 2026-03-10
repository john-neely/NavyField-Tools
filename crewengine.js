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

const stats={}

this.STAT_KEYS.forEach(stat=>{

const base=prem[stat]

let value=base*this.START_MULTIPLIER

let currentLevel=1
let modifier=0

config.classPath.forEach(step=>{

if(!step.classId) return

const levels=step.level-currentLevel

value+=(base+modifier)*levels

const cls=this.getClass(step.classId)

if(cls && cls.growthModifiers){

modifier+=cls.growthModifiers[stat] || 0

}

currentLevel=step.level

})

if(currentLevel<config.finalLevel){

const levels=config.finalLevel-currentLevel

value+=(base+modifier)*levels

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

}

}