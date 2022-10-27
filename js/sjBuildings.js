function setBuildingColor(id, done) {
    switch (id) {
        case 0:
            setColor(AE, done);
            break;
        case 1:
            break;
        case 2:
            setColor(BIB, done);
            break;
        case 3:
            setColor(SP, done);
            setColor(SQ, done);
            setColor(SO, done);
            break;
        case 4:
            setColor(MA, done);
            break;
        case 5:
            setColor(SB, done);
            break;
        case 6:
            break;
        case 7:
            setColor(SD, done);
            break;
        case 8:
            setColor(SI, done);
            break;
        case 9:
            setColor(AB, done);
            break;
        case 10:
            setColor(AA, done);
            break;
        case 11:
            setColor(AD, done);
            break;
        case 12:
            setColor(SG, done);
            setColor(SE, done);
            setColor(SF, done);
            break;
        case 13:
            setColor(AC, done);
            break;
        case 14:
            setColor(SL, done);
            break;
        case 15:
            setColor(Mensa, done);
        default:
            break;
    }
}

function setColor(building, done) {
    if(done) {
        building.setStyle({fillColor: '#63ff63', color: '#00ff00'});
    }
    else {
        building.setStyle({fillColor: '#3388ff', color: '#3388ff'});
    }
}
