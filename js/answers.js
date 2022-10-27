function getAnswers(id) {
    var answers = [];

    switch (id) {
        case 0:
            answers = ["Ride 2 Repair", "Ride2Repair", "R2R"];
            break;
        case 1:
            answers = ["Buch", "Bücher", "Book", "Books", "Ein Buch", "A book"]
            break;
        case 2:
            answers = ["35368", "35.368", "35,368"]
            break;
        case 3:
            answers = ["HAR315"]
            break;
        case 4:
            answers = ["Toten"]
            break;
        case 5:
            answers = ["SB0437", "SB 0437", "0437", "437"]
            break;
        case 6:
            answers = ["Uhr", "Eine Uhr", "Clock", "A clock"]
            break;
        case 7:
            answers = ["Fotolabor"]
            break;
        case 8:
            answers = ["34"]
            break;
        case 9:
            answers = ["AF"]
            break;
        case 10:
            answers = ["4", "6"]
            break;
        case 11:
            answers = ["AD 0039", "AD0039", "0039", "39"]
            break;
        case 12:
            answers = ["SG"]
            break;
        case 13:
            answers = ["Giraffe"]
            break;
        case 14:
            answers = ["Stein", "Felsen", "Stone", "Boulder"]
            break;
        case 15:
            answers = ["11"]
            break;
        default:
            break;
    }

    return answers;
}
