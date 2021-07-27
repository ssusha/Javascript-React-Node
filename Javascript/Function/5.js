function callback(yes,no){ // here yes and no used used as function
    console.log(yes()+' '+no());
}

function yes(){
    return 'Yes';
}

function no(){
    return 'No';
}

callback(yes,no)
callback(function(){return 'ram'},function(){return 'krishna'})
callback(()=>'ram',()=>'rahim')  // arrow/flat/anamonous function