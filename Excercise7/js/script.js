const GLConfig = {'CO' : { type: 'REQUIRED'},'MAJ': { type: 'NORMAL'},'SET': { type: 'NORMAL'},'MIN': { type: 'REQUIRED'}};
const GLSegments = {'CO' : '01','MAJ': '111','SET': '111','MIN': '000'};
const GLSegmentsFail = {'CO' : '','MAJ': '222','SET': '222','MIN': '111'};

const configparse = JSON.parse(JSON.stringify(GLConfig));
console.log(configparse) 
const config = Object.keys(configparse);
for(let i in configparse){
    const configseg = configparse[i];
    console.log(configseg); 
    if(configseg.type == 'REQUIRED'){
        for(let i in GLSegments){
            let constseg = GLSegments[i];
            if(constseg == ''){
                console.log("Validation Failed");
            }
            else{
                console.log("Validation Passed");
            }
        }
        for(let i in GLSegmentsFail){
            let constsegfail = GLSegmentsFail[i];
            if(constsegfail == ''){
                console.log("Validation Failed");
            }
            else{
                console.log("Validation Passed");
            }
        }
    }
}
