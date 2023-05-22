const GLConfig = {'CO' : { type: 'REQUIRED'},'MAJ': { type: 'NORMAL'},'SET': { type: 'NORMAL'},'MIN': { type: 'REQUIRED'}};
const GLSegments = {'CO' : '01','MAJ': '111','SET': '111','MIN': '000'};
const GLSegmentsFail = {'CO' : '','MAJ': '222','SET': '222','MIN': '111'};

const configparse = JSON.parse(JSON.stringify(GLConfig));

let configGl = (segments) =>{
    if((configparse.CO.type  == 'REQUIRED') && (segments.CO == '') || (configparse.MAJ.type  == 'REQUIRED') && (segments.MAJ == '') || (configparse.MIN.type  == 'REQUIRED') && (segments.MIN == '') || (configparse.SET.type  == 'REQUIRED') && (segments.SET == '')){
        return false;
    }
    else{
        return true;
    }
};

function validconfig(segmentsvalid){
    if(configGl(segmentsvalid) == true){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

validconfig(GLSegments);
validconfig(GLSegmentsFail);

let lengthvalid = (segments2) =>{
    if((segments2.CO.length <= 2) && (segments2.MAJ.length <= 3) && (segments2.SET.length <= 3) && (segments2.MIN.length <= 3)){
        return true;
    }
    else{
        return false;
    }
};

function validlength(segmentlength){
    if(lengthvalid(segmentlength) == true){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

validlength(GLSegments);
validlength(GLSegmentsFail);