//Campusgebaeude Alphabetisch sortiert

//import {createPopUp} from './popUpInformation.js';

//Hinweis: Die Funktion kommt eig. in die "popUpInformation.js". 
//... hier trifft aber ein Fehler auf, weil vermutlich der Server noch nicht live ist.

function createPopUp(name){

    var result;

    switch (name) {
        case AA:

            result = "<h1>Gebäude-AA</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
                    
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
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
                    
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Aula</li>"+
            "<li>Wilhelm-Müller-Hörsaal</li>"+
            "</ul>" 
            ;
            
        break;

        case AC:

            result = "<h1>Gebäude-AC</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
                    
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Labore und Hörsäle</li>"+
            "</ul>" 
            ;
            
            break;

        case AD:

            result = "<h1>Gebäude-AD</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           
            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Labore und Hörsäle</li>"+
            "<li> Betriebswerkstatt</li>"+
            "</ul>"
            ;
            
        break;

        case AE:
            result = "<h1>AE</h1>" + 
                    "<img src='res/images/AE.jpg' width='300' height='300'>";
            
            result = "<h1>Gebäude-AE</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           

            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>AStA</li>"+
            "<li>Fachschaft IuI</li>"+
            "</ul>" 
            ;

            break;

        case AF:
            result = "<h1>AF</h1>" + 
                    "<img src='res/images/AF.jpg' width='300' height='300'>";
            
            result = "<h1>Gebäude-AF</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           

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
            result = "<h1>BA</h1>" + 
                    "<img src='res/images/BA.jpg' width='300' height='300'>";
            
            result = "<h1>Gebäude-BA</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           
            "<h3>Fakultät WiSo</h3>" 
            ;

            break;

        case BB:
            result = "<h1>BB</h1>" + 
                    "<img src='res/images/BB.jpg' width='300' height='300'>";
            
            result = "<h1>Gebäude-BB</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           

            "<h3>Fakultät IuI</h3>" +
            "<h3>Science to Business GmbH</h3>"
            ;

        break;

        case BC:
            result = "<h1>BC</h1>" + 
                    "<img src='res/images/BC.jpg' width='300' height='300'>";
            
            result = "<h1>Gebäude-BC</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           

            "<h3>Fakultät IuI</h3>" +
            "<h3>Science to Business GmbH</h3>"
            ;

            break;

        case BIB:
            result = "<h1>Bibliothek</h1>" + 
                    "<img src='res/images/Bib.jpg' width='300' height='300'>";

           result = "<h1>Bibliothek</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>"
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
            result = "<h1>MA</h1>" + 
                    "<img src='res/images/MA.jpg' width='300' height='300'>";
                   
            
            result = "<h1>Gebäude-MA</h1>" + 
            "<img src=https://www.arcguide.de/wp-content/uploads/2/8/28704.jpg' width='300' height='200'>" +
           

            "<h3> Fakultät IuI </h3>" +
                    
            "<ul>" +
            "<li>Seminarräume und Labore</li>"+
            "</ul>" 
            ;

        break;

        case SB:
            result = "<h1>SB</h1>" + 
                    "<img src='res/images/SB.jpg' width='300' height='300'>";    

            break;

        case SC:
            result = "<h1>SC</h1>" + 
                    "<img src='res/images/SC.jpg' width='300' height='300'>";
            
        break;

        case SD:
            result = "<h1>SD</h1>" + 
                    "<img src='res/images/SD.jpg' width='300' height='300'>";
            
            break;

        case SE:
            result = "<h1>SE</h1>" + 
                    "<img src='res/images/SE.jpg' width='300' height='300'>";
            
        break;

        case SF:
            result = "<h1>SF</h1>" + 
                    "<img src='res/images/SF.jpg' width='300' height='300'>";

            break;

        case SG:
            result = "<h1>SG</h1>" + 
                    "<img src='res/images/SG.jpg' width='300' height='300'>";
            
        break;

        case SH:
            result = "<h1>SH</h1>" + 
                    "<img src='res/images/SH.jpg' width='300' height='300'>";
            
            break;

        case SJ:
            result = "<h1>SJ</h1>" + 
                    "<img src='res/images/SJ.jpg' width='300' height='300'>";
            
        break;

        case SI:
            result = "<h1>SI</h1>" + 
                    "<img src='res/images/SI.jpg' width='300' height='300'>";
            
            break;

        case SK:
            result = "<h1>SK</h1>" + 
                    "<img src='res/images/SK.jpg' width='300' height='300'>";
            
        break;

        case SL:
            result = "<h1>SL</h1>" + 
                    "<img src='res/images/SL.jpg' width='300' height='300'>";
            
            break;

        case SN:
            result = "<h1>SN</h1>" + 
                    "<img src='res/images/SN.jpg' width='300' height='300'>";
            
        break;

        case SO:
            result = "<h1>SO</h1>" + 
                    "<img src='res/images/SO.jpg' width='300' height='300'>";
            
            break;

        case SP:
            result = "<h1>SP</h1>" + 
                    "<img src='res/images/SP.jpg' width='300' height='300'>";
            
        break;

        case SQ:
            result = "<h1>SQ</h1>" + 
                    "<img src='res/images/SQ.jpg' width='300' height='300'>";
            
            break;

        case SR:
            result = "<h1>SR</h1>" + 
                    "<img src='res/images/SR.jpg' width='300' height='300'>";
            
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

map.addLayer(markerAA);
map.addLayer(markerAB);
map.addLayer(markerAC);
map.addLayer(markerAD);

map.on('zoomend', function() {

    if(markerAA != null){
        map.removeLayer(markerAA);
        map.removeLayer(markerAB);
        map.removeLayer(markerAC);
        map.removeLayer(markerAD);
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
    
    map.addLayer(markerAA);
    map.addLayer(markerAB);
    map.addLayer(markerAC);
    map.addLayer(markerAD);

});