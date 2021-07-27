let x='0';
switch (x) {
    case 0 :
        console.log('off');
        break;
    case 1 :
        console.log('onff');
        break;
    default:
        console.log("invalid input"); // output is invalid because switch strict comparision operator
}