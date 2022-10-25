//Campusgebaeude Alphabetisch sortiert

//import {createPopUp} from './popUpInformation.js';

//Hinweis: Die Funktion kommt eig. in die "popUpInformation.js". 
//... hier trifft aber ein Fehler auf, weil vermutlich der Server noch nicht live ist.

function createPopUp(name){

    var result;

    switch (name) {
        case AA:

            result = "<h1>Gebäude-AA</h1>" + 
            "<img src='res/images/AA.jpg' width='300' height='300'>" +
                    
                     "<h3> Fakultät IuI </h3>" +
                    
                    "<ul>" +
                    "<li>Berichtswesen</li>"+
                    "<li>Dekanat</li>"+
                    "<li>Finanzen</li>"+
                    "<li>Gebäude und Technik</li>"+
                    "<li>International Faculty Office</li>"+
                    "<li>IT Service Center</li>"+
                    "<li>Personal</li>"+
                    "</ul>" 
            ;
            
            break;

        case AB:

            result = "<h1>Gebäude-AB</h1>" + 
            "<img src='res/images/AB.jpg' width='300' height='300'>" +
                    
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Aula</li>"+
            "<li>Wilhelm-Müller-Hörsaal</li>"+
            "</ul>" 
            ;
            
        break;

        case AC:

            result = "<h1>Gebäude-AC</h1>" + 
            "<img src='res/images/AC.jpg' width='300' height='300'>" +
                    
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Labore und Hörsäle</li>"+
            "</ul>" 
            ;
            
            break;

        case AD:

            result = "<h1>Gebäude-AD</h1>" + 
            "<img src='res/images/AD.jpg' width='300' height='300'>" +
           
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Labore und Hörsäle</li>"+
            "<li> Betriebswerkstatt</li>"+
            "</ul>"
            ;
            
        break;

        case AE:
            
            result = "<h1>Gebäude-AE</h1>" + 
            "<img src='res/images/AE.jpg' width='300' height='300'>" +
           

            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>AStA</li>"+
            "<li>Fachschaft IuI</li>"+
            "</ul>" 
            ;

            break;

        case AF:
            result = "<h1>Gebäude-AF</h1>" + 
                    "<img src='res/images/AF.jpg' width='300' height='300'>" +
           

            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Beschaffung</li>"+
            "<li>Gleichstellungsbüro</li>"+
            "<li>Hochschulförderung</li>"+
            "<li>Kommunikation</li>"+
            "<li>LearningCenter</li>"+
            "<li>Präsidium</li>"+
            "<li>Prozessmanagement</li>"+
            "<li>Recht</li>"+
            "<li>Studium und Lehre</li>"+
            "<li>Studierendensekretariat</li>" +
            "</ul>" 
            ;

        break;

        case BA:
            result = "<h1>Gebäude-BA</h1>" + 
                    "<img src='res/images/BA.jpg' width='300' height='300'>" +

           
            "<h3>Fakultät WiSo</h3>" 
            ;

            break;

        case BB:
            result = "<h1>Gebäude-BB</h1>" + 
                    "<img src='res/images/BB.jpg' width='300' height='300'>" +
            

            "<h3>Fakultät IuI</h3>" +
            "<h3>Science to Business GmbH</h3>"
            ;

        break;

        case BC:
            result = "<h1>Gebäude-BC</h1>" + 
                    "<img src='res/images/BC.jpg' width='300' height='300'>" +
            

            "<h3>Fakultät IuI</h3>" +
            "<h3>Science to Business GmbH</h3>"
            ;

            break;

        case BIB:
            result = "<h1>Bibliothek</h1>" + 
                    "<img src='res/images/Bib.jpg' width='300' height='300'>"

            ;
            
        break;

        case Mensa:
            result = "<h1>Mensa</h1>" + 
                    "<img src='res/images/Mensa.jpg' width='300' height='300'>" +
                   
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
            result = "<h1>Gebäude-MA</h1>" + 
                    "<img src='res/images/MA.jpg' width='300' height='300'>" +
           

            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Seminarräume und Labore</li>"+
            "</ul>" 
            ;

        break;

        case SB:
            result = "<h1>Gebäude-SB</h1>" + 
                    "<img src='res/images/SB.jpg' width='300' height='300'>";    

            break;

        case SC:
            result = "<h1>Gebäude-SC</h1>" + 
                    "<img src='res/images/SC.jpg' width='300' height='300'>";
            
        break;

        case SD:
            result = "<h1>Gebäude-SD</h1>" + 
                    "<img src='res/images/SD.jpg' width='300' height='300'>";
            
            break;

        case SE:
            result = "<h1>Gebäude-SE</h1>" + 
                    "<img src='res/images/SE.jpg' width='300' height='300'>";
            
        break;

        case SF:
            result = "<h1>Gebäude-SF</h1>" + 
                    "<img src='res/images/SF.jpg' width='300' height='300'>";

            break;

        case SG:
            result = "<h1>Gebäude-SG</h1>" + 
                    "<img src='res/images/SG.jpg' width='300' height='300'>";
            
        break;

        case SH:
            result = "<h1>Gebäude-SH</h1>" + 
                    "<img src='res/images/SH.jpg' width='300' height='300'>";
            
            break;

        case SJ:
            result = "<h1>Gebäude-SJ</h1>" + 
                    "<img src='res/images/SJ.jpg' width='300' height='300'>";
            
        break;

        case SI:
            result = "<h1>Gebäude-SI</h1>" + 
                    "<img src='res/images/SI.jpg' width='300' height='300'>";
            
            break;

        case SK:
            result = "<h1>Gebäude-SK</h1>" + 
                    "<img src='res/images/SK.jpg' width='300' height='300'>";
            
        break;

        case SL:
            result = "<h1>Gebäude-SL</h1>" + 
                    "<img src='res/images/SL.jpg' width='300' height='300'>";
            
            break;

        case SN:
            result = "<h1>Gebäude-SN</h1>" + 
                    "<img src='res/images/SN.jpg' width='300' height='300'>";
            
        break;

        case SO:
            result = "<h1>Gebäude-SO</h1>" + 
                    "<img src='res/images/SO.jpg' width='300' height='300'>";
            
            break;

        case SP:
            result = "<h1>Gebäude-SP</h1>" + 
                    "<img src='res/images/SP.jpg' width='300' height='300'>";
            
        break;

        case SQ:
            result = "<h1>Gebäude-SQ</h1>" + 
                    "<img src='res/images/SQ.jpg' width='300' height='300'>";
            
            break;

        case SR:
            result = "<h1>Gebäude-SR</h1>" + 
                    "<img src='res/images/SR.jpg' width='300' height='300'>";
            
        break;
    
        
    }

    return result;
}

var AA = L.polygon([
    [52.2832125,8.0252056],
    [52.2832353,8.0249848],
    [52.2830645,8.0249377],
    [52.2830843,8.024746],
    [52.2831298,8.0247586],
    [52.2831447,8.0246148],
    [52.2830563,8.0245904],
    [52.2830478,8.0246731],
    [52.2830242,8.0246666],
    [52.282998,8.0246594],
    [52.2828076,8.0246069],
    [52.2828133,8.0245515],
    [52.2829713,8.0245951],
    [52.2829855,8.0244579],
    [52.2827969,8.0244059],
    [52.2827769,8.0245999],
    [52.2826917,8.0245764],
    [52.2826657,8.024805],
    [52.2825276,8.0247678],
    [52.2823563,8.0247214],
    [52.2823453,8.0248201],
    [52.2823312,8.0249463],
    [52.2825122,8.0250012],
    [52.2829817,8.0251383],
    [52.2832125,8.0252056]
]).addTo(map).bindPopup(createPopUp(AA));

var AB = L.polygon([[
    [52.2820659,8.0242357],
    [52.2819828,8.0250052],
    [52.2824029,8.0251264],
    [52.2824337,8.0251354],
    [52.2824637,8.0251437],
    [52.282497,8.0251532],
    [52.2825122,8.0250012],
    [52.2823312,8.0249463],
    [52.2823453,8.0248201],
    [52.2823563,8.0247214],
    [52.2825276,8.0247678],
    [52.282542,8.0246424],
    [52.2825444,8.0246206],
    [52.2825702,8.0243812],
    [52.2824622,8.02435],
    [52.2822104,8.0242773],
    [52.2821897,8.0242714],
    [52.2820659,8.0242357]],[
    [52.2823213,8.0247123],
    [52.282296,8.024935],
    [52.2821229,8.0248825],
    [52.2821482,8.0246599],
    [52.2823213,8.0247123]]
]).addTo(map).bindPopup(createPopUp(AB));

var AC = L.polygon([
    [52.2827138,8.0236655],
    [52.2827213,8.0235939],
    [52.2826526,8.0235745],
    [52.2826167,8.0235644],
    [52.2825492,8.0235454],
    [52.2824867,8.0241238],
    [52.2824622,8.02435],
    [52.2825702,8.0243812],
    [52.282636,8.0244001],
    [52.2826894,8.0238939],
    [52.2827138,8.0236655]
]).addTo(map).bindPopup(createPopUp(AC));

var AD = L.polygon([
    [52.2839031,8.0243637],
    [52.2839186,8.0241785],
    [52.2837492,8.0241429],
    [52.2837638,8.0239567],
    [52.2837827,8.0237251],
    [52.2830007,8.0235617],
    [52.2829887,8.0237148],
    [52.2827911,8.0236735],
    [52.2827717,8.0239216],
    [52.2829677,8.0239625],
    [52.2829627,8.0240269],
    [52.2829523,8.0241676],
    [52.2829618,8.0241695],
    [52.283056,8.0241874],
    [52.2830927,8.0241946],
    [52.2831409,8.0242045],
    [52.2839031,8.0243637]
]).addTo(map).bindPopup(createPopUp(AD));

var AE = L.polygon([
    [52.2842588,8.0239116],
    [52.2841648,8.0238905],
    [52.2841373,8.024218],
    [52.2842313,8.0242391],
    [52.2842588,8.0239116]
]).addTo(map).bindPopup(createPopUp(AE));

var AF = L.polygon([
    [52.282051,8.0239956],
    [52.2822163,8.0240459],
    [52.2822369,8.0240519],
    [52.2822593,8.0240584],
    [52.2822901,8.0237755],
    [52.2822966,8.0237177],
    [52.2822093,8.0236915],
    [52.2820898,8.0236568],
    [52.282051,8.0239956]
]).addTo(map).bindPopup(createPopUp(AF));

var BA = L.polygon([
    [52.2868186,8.024096],
    [52.2868425,8.0239159],
    [52.2867518,8.0238838],
    [52.2867279,8.0240639],
    [52.2868186,8.024096]
]).addTo(map).bindPopup(createPopUp(BA));

var BB = L.polygon([
    [52.286879,8.0236347],
    [52.2867897,8.0236016],
    [52.286764,8.0237872],
    [52.2868533,8.0238203],
    [52.286879,8.0236347]
]).addTo(map).bindPopup(createPopUp(BB));

var BC = L.polygon([
    [52.2869699,8.0241626],
    [52.2869965,8.023978],
    [52.286897,8.0239397],
    [52.2868704,8.0241243],
    [52.2869699,8.0241626]
]).addTo(map).bindPopup(createPopUp(BC));

var BIB = L.polygon([
    [[52.2863133,8.0220861],
      [52.2860126,8.0220014],
      [52.2858133,8.0238932],
      [52.286114,8.0239779],
      [52.2863133,8.0220861]],
    [[52.2860842,8.023138],
      [52.2860359,8.0236087],
      [52.2859478,8.0235846],
      [52.2859961,8.0231139],
      [52.2860842,8.023138]],
    [
      [52.2861667,8.0224024],
      [52.2861183,8.0228747],
      [52.2860293,8.0228503],
      [52.2860777,8.022378],
      [52.2861667,8.0224024
    ]]
]).addTo(map).bindPopup(createPopUp(BIB));

var Mensa = L.polygon([
    [52.2847041,8.0218987],
    [52.2842511,8.0217729],
    [52.2841359,8.0228812],
    [52.2843395,8.0229377],
    [52.2845889,8.023007],
    [52.2847041,8.0218987]
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
    [52.2839968,8.0203125],
    [52.2840071,8.0201876],
    [52.2839966,8.0201853],
    [52.2840203,8.0198998],
    [52.2839219,8.0198779],
    [52.2839055,8.0200771],
    [52.2837175,8.0200354],
    [52.2837272,8.0199184],
    [52.2834796,8.0198635],
    [52.2834721,8.0199543],
    [52.2833318,8.0199232],
    [52.2833453,8.0197747],
    [52.2832401,8.0197514],
    [52.2832234,8.0199524],
    [52.2832163,8.0199508],
    [52.2832016,8.0201278],
    [52.2833109,8.020152],
    [52.2833138,8.0201196],
    [52.2838914,8.0202478],
    [52.2838881,8.0202884],
    [52.2839968,8.0203125],
]).addTo(map).bindPopup(createPopUp(SB));

var SC = L.polygon([
    [52.2843225,8.0199778],
    [52.2841415,8.0199364],
    [52.2841283,8.0200904],
    [52.2841149,8.0202471],
    [52.284175,8.0202608],
    [52.2841846,8.0201494],
    [52.2843055,8.020177],
    [52.2843225,8.0199778],
]).addTo(map).bindPopup(createPopUp(SC));

var SD = L.polygon([
    [52.2841769,8.0212605],
    [52.284241,8.0204504],
    [52.2841004,8.0204207],
    [52.2840649,8.0208693],
    [52.2840362,8.0212308],
    [52.2840744,8.0212389],
    [52.2841769,8.0212605],
]).addTo(map).bindPopup(createPopUp(SD));

var SE = L.polygon([
    [52.2834572,8.0209071],
    [52.2834274,8.0212122],
    [52.2837872,8.0213062],
    [52.2837948,8.0212283],
    [52.2838756,8.0212494],
    [52.2838911,8.021091],
    [52.2838101,8.0210698],
    [52.2838168,8.021001],
    [52.2834572,8.0209071],
]).addTo(map).bindPopup(createPopUp(SE));

var SF = L.polygon([
    [52.2832804,8.0205648],
    [52.2831999,8.0205467],
    [52.2831637,8.020978],
    [52.2832441,8.0209961],
    [52.2832804,8.0205648],
]).addTo(map).bindPopup(createPopUp(SF));

var SG = L.polygon([
    [52.2833081,8.0203253],
    [52.2832242,8.0203023],
    [52.2832136,8.020406],
    [52.2832975,8.020429],
    [52.2833081,8.0203253],
]).addTo(map).bindPopup(createPopUp(SG));

var SH = L.polygon([
    [52.284678,8.020563],
    [52.2844474,8.0205112],
    [52.2843709,8.020494],
    [52.2843575,8.0206536],
    [52.284434,8.0206708],
    [52.2844124,8.0209274],
    [52.2843477,8.0209129],
    [52.2843249,8.021184],
    [52.2843896,8.0211986],
    [52.2846201,8.0212504],
    [52.2846275,8.0211624],
    [52.2846857,8.0211754],
    [52.2846984,8.0210248],
    [52.2846402,8.0210117],
    [52.284678,8.020563],
]).addTo(map).bindPopup(createPopUp(SH));

var SJ = L.polygon([
    [52.2847334,8.0208615],
    [52.2848112,8.0208827],
    [52.2848259,8.0207393],
    [52.2847481,8.020718],
    [52.2847334,8.0208615],
]).addTo(map).bindPopup(createPopUp(SJ));

var SI = L.polygon([
    [52.2838809,8.0229338],
    [52.2838104,8.0229148],
    [52.2837514,8.0234999],
    [52.283855,8.0235278],
    [52.2839585,8.0235557],
    [52.2840187,8.0229584],
    [52.2839491,8.0229396],
    [52.2839551,8.0228756],
    [52.2839621,8.0228105],
    [52.2839818,8.0228158],
    [52.284064,8.022001],
    [52.2841162,8.0214842],
    [52.2840835,8.0214753],
    [52.2840898,8.021413],
    [52.2840442,8.0214007],
    [52.2840382,8.0214598],
    [52.284008,8.0214517],
    [52.2839549,8.0219743],
    [52.2838735,8.0227823],
    [52.2838956,8.0227883],
    [52.2838883,8.0228611],
    [52.2838809,8.0229338]
]).addTo(map).bindPopup(createPopUp(SI));

var SK = L.polygon([
    [52.2845643,8.020086],
    [52.2845463,8.0202638],
    [52.284698,8.0203048],
    [52.2846952,8.0203326],
    [52.2847754,8.0203543],
    [52.284799,8.0201212],
    [52.2847199,8.0200998],
    [52.2847171,8.0201273],
    [52.2845643,8.020086],
]).addTo(map).bindPopup(createPopUp(SK));

var SL = L.polygon([
    [
      [52.2852156,8.0217401],
      [52.2848936,8.0216507],
      [52.2847736,8.022806],
      [52.2847463,8.0230683],
      [52.2849067,8.0231129],
      [52.2850684,8.0231571],
      [52.2850902,8.0229469],
      [52.285119,8.02267],
      [52.2852156,8.0217401]
    ],
    [
      [52.285057,8.0219899],
      [52.2850353,8.0221968],
      [52.2849796,8.0221812],
      [52.2850013,8.0219743],
      [52.285057,8.0219899],
    ]
  ]).addTo(map).bindPopup(createPopUp(SL));

var SN = L.polygon([
    [52.2859302,8.0213747],
    [52.28537,8.0212466],
    [52.2853389,8.0212395],
    [52.2853259,8.0213921],
    [52.2853035,8.0216534],
    [52.2858948,8.0217886],
    [52.2859302,8.0213747],
]).addTo(map).bindPopup(createPopUp(SN));

var SO = L.polygon([
    [52.2867901,8.021531],
    [52.2868687,8.0207512],
    [52.2866455,8.0206922],
    [52.2865665,8.0214628],
    [52.2867901,8.021531]
]).addTo(map).bindPopup(createPopUp(SO));

var SP = L.polygon([
    [52.286748,8.0219065],
    [52.2867901,8.021531],
    [52.2865665,8.0214628],
    [52.2865553,8.021557],
    [52.2865209,8.0218478],
    [52.286748,8.0219065]
]).addTo(map).bindPopup(createPopUp(SP));

var SQ = L.polygon([
    [52.286349,8.0217939],
    [52.286376,8.0215102],
    [52.2863832,8.0214216],
    [52.2860892,8.0213275],
    [52.28605,8.0217105],
    [52.286349,8.0217939]
]).addTo(map).bindPopup(createPopUp(SQ));

var SR = L.polygon([
    [52.2854033,8.0209491],
    [52.2855365,8.0209828],
    [52.2855948,8.0203667],
    [52.2854617,8.020333],
    [52.2854353,8.0206118],
    [52.2854033,8.0209491]
]).addTo(map).bindPopup(createPopUp(SR));


var currentZoom = 17;
var iconSize = 20;

var circleImage = L.icon({
    iconUrl: 'image/circle.png',

    iconSize:       [iconSize ,iconSize]

});

//Initiale Setzung aller Marker
var vAA = AA.getCenter();
var markerAA = L.marker([vAA.lat, vAA.lng], {icon: circleImage});
var vAB = AB.getCenter();
var markerAB = L.marker([vAB.lat, vAB.lng], {icon: circleImage});
var vAC = AC.getCenter();
var markerAC = L.marker([vAC.lat, vAC.lng], {icon: circleImage});
var vAD = AD.getCenter();
var markerAD = L.marker([vAD.lat, vAD.lng], {icon: circleImage});
var vAE = AE.getCenter();
var markerAE = L.marker([vAE.lat, vAE.lng], {icon: circleImage});
var vAF = AF.getCenter();
var markerAF = L.marker([vAF.lat, vAF.lng], {icon: circleImage});

var vBA = BA.getCenter();
var markerBA = L.marker([vBA.lat, vBA.lng], {icon: circleImage});
var vBB = BB.getCenter();
var markerBB = L.marker([vBB.lat, vBB.lng], {icon: circleImage});
var vBC = BC.getCenter();
var markerBC = L.marker([vBC.lat, vBC.lng], {icon: circleImage});
var vBIB = BIB.getCenter();
var markerBIB = L.marker([vBIB.lat, vBIB.lng], {icon: circleImage});

var vMA = MA.getCenter();
var markerMA = L.marker([vMA.lat, vMA.lng], {icon: circleImage});
var vMensa = Mensa.getCenter();
var markerMensa = L.marker([vMensa.lat, vMensa.lng], {icon: circleImage});

var vSB = SB.getCenter();
var markerSB = L.marker([vSB.lat, vSB.lng], {icon: circleImage});
var vSC = SC.getCenter();
var markerSC = L.marker([vSC.lat, vSC.lng], {icon: circleImage});
var vSD = SD.getCenter();
var markerSD = L.marker([vSD.lat, vSD.lng], {icon: circleImage});
var vSE = SE.getCenter();
var markerSE = L.marker([vSE.lat, vSE.lng], {icon: circleImage});
var vSF = SF.getCenter();
var markerSF = L.marker([vSF.lat, vSF.lng], {icon: circleImage});
var vSG = SG.getCenter();
var markerSG = L.marker([vSG.lat, vSG.lng], {icon: circleImage});
var vSH = SH.getCenter();
var markerSH = L.marker([vSH.lat, vSH.lng], {icon: circleImage});
var vSJ = SJ.getCenter();
var markerSJ = L.marker([vSJ.lat, vSJ.lng], {icon: circleImage});
var vSI = SI.getCenter();
var markerSI = L.marker([vSI.lat, vSI.lng], {icon: circleImage});
var vSK = SK.getCenter();
var markerSK = L.marker([vSK.lat, vSK.lng], {icon: circleImage});
var vSL = SL.getCenter();
var markerSL = L.marker([vSL.lat, vSL.lng], {icon: circleImage});
var vSN = SN.getCenter();
var markerSN = L.marker([vSN.lat, vSN.lng], {icon: circleImage});
var vSO = SO.getCenter();
var markerSO = L.marker([vSO.lat, vSO.lng], {icon: circleImage});
var vSP = SP.getCenter();
var markerSP = L.marker([vSP.lat, vSP.lng], {icon: circleImage});
var vSQ = SQ.getCenter();
var markerSQ = L.marker([vSQ.lat, vSQ.lng], {icon: circleImage});
var vSR = SR.getCenter();
var markerSR = L.marker([vSR.lat, vSR.lng], {icon: circleImage});

map.addLayer(markerAA);
map.addLayer(markerAB);
map.addLayer(markerAC);
map.addLayer(markerAD);
map.addLayer(markerAE);
map.addLayer(markerAF);

map.addLayer(markerBA);
map.addLayer(markerBB);
map.addLayer(markerBC);
map.addLayer(markerBIB);

map.addLayer(markerMA);
map.addLayer(markerMensa);

map.addLayer(markerSB);
map.addLayer(markerSC);
map.addLayer(markerSD);
map.addLayer(markerSE);
map.addLayer(markerSF);
map.addLayer(markerSG);
map.addLayer(markerSH);
map.addLayer(markerSI);
map.addLayer(markerSJ);
map.addLayer(markerSK);
map.addLayer(markerSL);
map.addLayer(markerSN);
map.addLayer(markerSO);
map.addLayer(markerSP);
map.addLayer(markerSQ);
map.addLayer(markerSR);

map.on('zoomend', function() {

    if(markerAA != null){
        map.removeLayer(markerAA);
        map.removeLayer(markerAB);
        map.removeLayer(markerAC);
        map.removeLayer(markerAD);
        map.removeLayer(markerAE);
        map.removeLayer(markerAF);

        map.removeLayer(markerBA);
        map.removeLayer(markerBB);
        map.removeLayer(markerBC);
        map.removeLayer(markerBIB);

        map.removeLayer(markerMA);
        map.removeLayer(markerMensa);

        map.removeLayer(markerSB);
        map.removeLayer(markerSC);
        map.removeLayer(markerSD);
        map.removeLayer(markerSE);
        map.removeLayer(markerSF);
        map.removeLayer(markerSG);
        map.removeLayer(markerSH);
        map.removeLayer(markerSJ);
        map.removeLayer(markerSI);
        map.removeLayer(markerSK);
        map.removeLayer(markerSL);
        map.removeLayer(markerSN);
        map.removeLayer(markerSO);
        map.removeLayer(markerSP);
        map.removeLayer(markerSQ);
        map.removeLayer(markerSR);
    }

    currentZoom = map.getZoom();
    if(currentZoom == 19){
        iconSize = 80;
    }

    if(currentZoom == 18){
        iconSize = 40;
    }

    if(currentZoom == 17){
        iconSize = 20;
    }

    if(currentZoom <= 16){
        iconSize = 00;
    }

    var circleImage = L.icon({
        iconUrl: 'image/circle.png',
    
        iconSize:       [iconSize ,iconSize]

    });
    
    markerAA = L.marker([vAA.lat, vAA.lng], {icon: circleImage});
    markerAB = L.marker([vAB.lat, vAB.lng], {icon: circleImage});
    markerAC = L.marker([vAC.lat, vAC.lng], {icon: circleImage});
    markerAD = L.marker([vAD.lat, vAD.lng], {icon: circleImage});
    markerAE = L.marker([vAE.lat, vAE.lng], {icon: circleImage});
    markerAF = L.marker([vAF.lat, vAF.lng], {icon: circleImage});
    
    markerBA = L.marker([vBA.lat, vBA.lng], {icon: circleImage});
    markerBB = L.marker([vBB.lat, vBB.lng], {icon: circleImage});
    markerBC = L.marker([vBC.lat, vBC.lng], {icon: circleImage});
    markerBIB = L.marker([vBIB.lat, vBIB.lng], {icon: circleImage});

    markerMA = L.marker([vMA.lat, vMA.lng], {icon: circleImage});
    markerMensa = L.marker([vMensa.lat, vMensa.lng], {icon: circleImage});

    markerSB = L.marker([vSB.lat, vSB.lng], {icon: circleImage});
    markerSC = L.marker([vSC.lat, vSC.lng], {icon: circleImage});
    markerSD = L.marker([vSD.lat, vSD.lng], {icon: circleImage});
    markerSE = L.marker([vSE.lat, vSE.lng], {icon: circleImage});
    markerSF = L.marker([vSF.lat, vSF.lng], {icon: circleImage});
    markerSG = L.marker([vSG.lat, vSG.lng], {icon: circleImage});
    markerSH = L.marker([vSH.lat, vSH.lng], {icon: circleImage});
    markerSJ = L.marker([vSJ.lat, vSJ.lng], {icon: circleImage});
    markerSI = L.marker([vSI.lat, vSI.lng], {icon: circleImage});
    markerSK = L.marker([vSK.lat, vSK.lng], {icon: circleImage});
    markerSL = L.marker([vSL.lat, vSL.lng], {icon: circleImage});
    markerSN = L.marker([vSN.lat, vSN.lng], {icon: circleImage});
    markerSO = L.marker([vSO.lat, vSO.lng], {icon: circleImage});
    markerSP = L.marker([vSP.lat, vSP.lng], {icon: circleImage});
    markerSQ = L.marker([vSQ.lat, vSQ.lng], {icon: circleImage});
    markerSR = L.marker([vSR.lat, vSR.lng], {icon: circleImage});


    map.addLayer(markerAA);
    map.addLayer(markerAB);
    map.addLayer(markerAC);
    map.addLayer(markerAD);
    map.addLayer(markerAE);
    map.addLayer(markerAF);

    map.addLayer(markerBA);
    map.addLayer(markerBB);
    map.addLayer(markerBC);
    map.addLayer(markerBIB);

    map.addLayer(markerMA);
    map.addLayer(markerMensa);

    map.addLayer(markerSB);
    map.addLayer(markerSC);
    map.addLayer(markerSD);
    map.addLayer(markerSE);
    map.addLayer(markerSF);
    map.addLayer(markerSG);
    map.addLayer(markerSH);
    map.addLayer(markerSI);
    map.addLayer(markerSJ);
    map.addLayer(markerSK);
    map.addLayer(markerSL);
    map.addLayer(markerSN);
    map.addLayer(markerSO);
    map.addLayer(markerSP);
    map.addLayer(markerSQ);
    map.addLayer(markerSR);
});
