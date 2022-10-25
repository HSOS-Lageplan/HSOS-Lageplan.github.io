//Campusgebaeude Alphabetisch sortiert

//import { createPopUp } from './popUpInformation';

//Hinweis: Die Funktion kommt eig. in die "popUpInformation.js". 
//... hier trifft aber ein Fehler auf, weil vermutlich der Server noch nicht live ist.
function createPopUp(name){

    var result;

    switch (name) {
        case AA:

            
            break;

        case AB:
            
        break;

        case AC:
            
            break;

        case AD:
            
        break;

        case AE:
            
            break;

        case AF:
            
        break;

        case BA:
            
            break;

        case BB:
            
        break;

        case BC:
            
            break;

        case BIB:

           
            
        break;

        case Mensa:
            result = "<h1>Mensa</h1>" + 
                    "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
                   
                    "<table>" +

                    "<tr>" +
                
                    "<th> <i class='fa fa-cutlery'></i> </th>" +
                    "<th> <div class='textNebenIconPlatzierung'>Mensa & Cafeteria</div> </th>" +
                   
                    "</tr>" + 

                    "<tr>" +
                
                    "<th> <i class='fa fa-credit-card-alt'></i> </th>" +
                    "<th> <div class='textNebenIconPlatzierung'>Validierungsautomat</div> </th>" +
                   
                    "</tr>" + 
                
                    "</table>"
                    ;
            
            break;

        case MA:
            
        break;

        case SB:
            
            break;

        case SC:
            
        break;

        case SD:
            
            break;

        case SE:
            
        break;

        case SF:
            
            break;

        case SG:
            
        break;

        case SH:
            
            break;

        case SJ:
            
        break;

        case SI:
            
            break;

        case SK:
            
        break;

        case SL:
            
            break;

        case SN:
            
        break;

        case SO:
            
            break;

        case SP:
            
        break;

        case SQ:
            
            break;

        case SR:
            
        break;
    
        
    }

    return result;
}

var AA = L.polygon([
    [52.2832125,8.0252056],
    [52.28233,8.02494],
    [52.28235,8.02472],
    [52.28266,8.02480],
    [52.28269,8.02458],
    [52.28277,8.02460],
    [52.28279,8.02441],
    [52.28298,8.02446],
    [52.28297,8.02460],
    [52.28281,8.02456],
    [52.28281,8.02461],
    [52.28304,8.02468],
    [52.28305,8.02459],
    [52.28314,8.02461],
    [52.28313,8.02476],
    [52.28308,8.02475],
    [52.28307,8.02494],
    [52.28324,8.02498]
]).addTo(map).bindPopup(createPopUp(AA));

var AB = L.polygon([
    [52.28249,8.02515],
    [52.28198,8.02501],
    [52.28206,8.02424],
    [52.28257,8.02438]
]).addTo(map).bindPopup(createPopUp(AB));

var AC = L.polygon([
    [52.28263,8.02440],
    [52.28246,8.02435],
    [52.28255,8.02355],
    [52.28272,8.02359]
]).addTo(map).bindPopup(createPopUp(AC));

var AD = L.polygon([
    [52.28277,8.02392],
    [52.28279,8.02368],
    [52.28299,8.02372],
    [52.28300,8.02356],
    [52.28378,8.02373],
    [52.28375,8.02414],
    [52.28392,8.02418],
    [52.28390,8.02436],
    [52.28295,8.02417],
    [52.28297,8.02396]
]).addTo(map).bindPopup(createPopUp(AD));

var AE = L.polygon([
    [52.28414,8.02422],
    [52.28416,8.02389],
    [52.28426,8.02391],
    [52.28423,8.02424]
]).addTo(map).bindPopup(createPopUp(AE));

var AF = L.polygon([
    [52.28230,8.02372],
    [52.28226,8.02406],
    [52.28205,8.02400],
    [52.28209,8.02366]
]).addTo(map).bindPopup(createPopUp(AF));

var BA = L.polygon([
    [52.28673,8.02406],
    [52.28675,8.02388],
    [52.28684,8.02392],
    [52.28682,8.02409]
]).addTo(map).bindPopup(createPopUp(BA));

var BB = L.polygon([
    [52.28676,8.02379],
    [52.28679,8.02360],
    [52.28688,8.02364],
    [52.28685,8.02382]
]).addTo(map).bindPopup(createPopUp(BB));

var BC = L.polygon([
    [52.28687,8.02413],
    [52.28689,8.02394],
    [52.28699,8.02398],
    [52.28697,8.02416]
]).addTo(map).bindPopup(createPopUp(BC));

var BIB = L.polygon([
    [52.28581,8.02389],
    [52.28601,8.02200],
    [52.28631,8.02209],
    [52.28611,8.02398],
]).addTo(map).bindPopup(createPopUp(BIB));

var Mensa = L.polygon([
    [52.28470,8.02190],
    [52.28458,8.02300],
    [52.28413,8.02288],
    [52.28425,8.02178]
]).addTo(map).bindPopup(createPopUp(Mensa));

var MA = L.polygon([
    [52.28699,8.01860],
    [52.28641,8.01844],
    [52.28644,8.01817],
    [52.28658,8.01821],
    [52.28663,8.01773],
    [52.28700,8.01783],
    [52.28699,8.01796],
    [52.28690,8.01794],
    [52.28687,8.01829],
    [52.28702,8.01834],
]).addTo(map).bindPopup(createPopUp(MA));

var SB = L.polygon([
    [52.28324,8.01976],
    [52.28334,8.01978],
    [52.28333,8.01992],
    [52.28347,8.01995],
    [52.28348,8.01987],
    [52.28373,8.01992],
    [52.28372,8.02003],
    [52.28391,8.02007],
    [52.28392,8.01988],
    [52.28402,8.01990],
    [52.28399,8.02019],
    [52.28401,8.02019],
    [52.28400,8.02031],
    [52.28389,8.02029],
    [52.28389,8.02025],
    [52.28331,8.02012],
    [52.28331,8.02015],
    [52.28320,8.02013],
]).addTo(map).bindPopup(createPopUp(SB));

var SC = L.polygon([
    [52.28414,8.01993],
    [52.28432,8.01998],
    [52.28430,8.02018],
    [52.28418,8.02014],
    [52.28417,8.02026],
    [52.28412,8.02024]
]).addTo(map).bindPopup(createPopUp(SC));

var SD = L.polygon([
    [52.28424,8.02045],
    [52.28418,8.02126],
    [52.28403,8.02123],
    [52.28410,8.02042]
]).addTo(map).bindPopup(createPopUp(SD));

var SE = L.polygon([
    [52.28389,8.02109],
    [52.28387,8.02125],
    [52.28380,8.02123],
    [52.28379,8.02131],

    [52.28343,8.02121],
    [52.28346,8.02091],
    [52.28382,8.02100],
    [52.28381,8.02107],

]).addTo(map).bindPopup(createPopUp(SE));

var SF = L.polygon([
    [52.28324,8.02100],
    [52.28316,8.02098],
    [52.28320,8.02055],
    [52.28328,8.02057]
]).addTo(map).bindPopup(createPopUp(SF));

var SG = L.polygon([
    [52.28321,8.02041],
    [52.28322,8.02030],
    [52.28331,8.02033],
    [52.28330,8.02043]
]).addTo(map).bindPopup(createPopUp(SG));

var SH = L.polygon([
    [52.28437,8.02049],
    [52.28468,8.02056],
    [52.28464,8.02101],
    [52.28470,8.02102],
    [52.28468,8.02117],
    [52.28463,8.02116],
    [52.28462,8.02125],
    [52.28433,8.02118],
    [52.28435,8.02091],
    [52.28441,8.02092],
    [52.28443,8.02067],
    [52.28436,8.02066],
]).addTo(map).bindPopup(createPopUp(SH));

var SJ = L.polygon([
    [52.28483,8.02074],
    [52.28481,8.02088],
    [52.28474,8.02086],
    [52.28475,8.02072]
]).addTo(map).bindPopup(createPopUp(SJ));

var SI = L.polygon([
    [52.28396,8.02356],
    [52.28375,8.02350],
    [52.28381,8.02291],
    [52.28388,8.02293],
    [52.28389,8.02279],
    [52.28387,8.02278],
    [52.28401,8.02145],
    [52.28404,8.02146],
    [52.28404,8.02140],
    [52.28409,8.02141],
    [52.28408,8.02148],
    [52.28412,8.02148],
    [52.28398,8.02281],
    [52.28396,8.02281],
    [52.28395,8.02294],
    [52.28402,8.02296],
]).addTo(map).bindPopup(createPopUp(SI));

var SK = L.polygon([
    [52.28478,8.02035],
    [52.28470,8.02033],
    [52.28470,8.02030],
    [52.28455,8.02027],
    [52.28456,8.02009],
    [52.28472,8.02013],
    [52.28472,8.02010],
    [52.28480,8.02012],
]).addTo(map).bindPopup(createPopUp(SK));

var SL = L.polygon([
    [52.28475,8.02307],
    [52.28489,8.02165],
    [52.28521,8.02174],
    [52.28507,8.02316]
]).addTo(map).bindPopup(createPopUp(SL));

var SN = L.polygon([
    [52.28534,8.02124],
    [52.28593,8.02137],
    [52.28590,8.02179],
    [52.28530,8.02165]
]).addTo(map).bindPopup(createPopUp(SN));

var SO = L.polygon([
    [52.28679,8.02153],
    [52.28657,8.02146],
    [52.28665,8.02070],
    [52.28687,8.02075]
]).addTo(map).bindPopup(createPopUp(SO));

var SP = L.polygon([
    [52.28679,8.02153],
    [52.28657,8.02146],
    [52.28652,8.02185],
    [52.28675,8.02190]
]).addTo(map).bindPopup(createPopUp(SP));

var SQ = L.polygon([
    [52.28638,8.02142],
    [52.28609,8.02133],
    [52.28605,8.02171],
    [52.28635,8.02179]
]).addTo(map).bindPopup(createPopUp(SQ));

var SR = L.polygon([
    [52.28554,8.02098],
    [52.28540,8.02095],
    [52.28546,8.02033],
    [52.28559,8.02037]
]).addTo(map).bindPopup(createPopUp(SR));