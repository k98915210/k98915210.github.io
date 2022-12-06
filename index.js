function ChargeBar(){
    emtpyBarId.className = 'emtpy-bar-charge';
}

function ReleaseBar(){
    emtpyBarId.className = 'emtpy-bar';
}

function StartUp(){

    chargedBarId.remove();
    startButtonId.remove();
    emtpyBarId.remove();
    startUpMessageId.remove();

    let colId = [];
    colId.push(document.getElementById('col_1'));
    colId.push(document.getElementById('col_2'));
    colId.push(document.getElementById('col_3'));

    for (let i = 0; i < 3; i++)
    {setTimeout(() => {colId[i].className = 'col';}, 500*i);}

}



function Col_1_Hover(){
    if (col_1.className !== 'col-expand'){
        cover_1.className = 'cover-hover';
        small_text_1.className = 'small-text';
        arrow_left_1.className = 'arrow-left';
        arrow_right_1.className = 'arrow-right';
    }
}

function Col_2_Hover(){
    if (col_2.className !== 'col-expand'){
        cover_2.className = 'cover-hover';
        small_text_2.className = 'small-text';
        arrow_left_2.className = 'arrow-left';
        arrow_right_2.className = 'arrow-right';
    }
}

function Col_3_Hover(){
    if (col_3.className !== 'col-expand'){
        cover_3.className = 'cover-hover';
        small_text_3.className = 'small-text';
        arrow_left_3.className = 'arrow-left';
        arrow_right_3.className = 'arrow-right';
    }
}

function Col_1_Leave(){
    if (col_1.className !== 'col-expand'){
        cover_1.className = 'cover';
        small_text_1.className = 'hidden';
    }
}

function Col_2_Leave(){
    if (col_2.className !== 'col-expand'){
        cover_2.className = 'cover';
        small_text_2.className = 'hidden';
    }
}

function Col_3_Leave(){
    if (col_3.className !== 'col-expand'){
        cover_3.className = 'cover';
        small_text_3.className = 'hidden';
    }
}



function Expandcol_1(){
    col_1.className = 'col-expand';
    col_2.className = 'col-first-right-away';
    col_3.className = 'col-second-right-away';
    cover_1.className = 'hidden';
    video_1.className = 'cover-expand';
    returnButton_1.className = 'return-button';
    text_1.className = 'text-expand';
    small_text_1.className = 'hidden';

}

function Expandcol_2(){
    col_1.className = 'col-left-away';
    col_2.className = 'col-expand'; 
    col_3.className = 'col-first-right-away';
    cover_2.className = 'hidden';
    video_2.className = 'cover-expand';
    returnButton_2.className = 'return-button';
    text_2.className = 'text-expand';
    small_text_2.className = 'hidden';

}

function Expandcol_3(){
    col_1.className = 'col-left-away';
    col_2.className = 'col-left-away';
    col_3.className = 'col-expand';
    cover_3.className = 'hidden';
    video_3.className = 'cover-expand';    
    returnButton_3.className = 'return-button';
    text_3.className = 'text-expand';
    small_text_3.className = 'hidden';
}

function ReturnHome(){

    if(col_1.className === 'col-expand'){
        col_1.className = 'col-shrink';
        col_2.className = 'col-right-back';
        setTimeout(() => {col_3.className = 'col-right-back';}, 500);
        cover_1.className = 'cover';
        video_1.load();
        video_1.className = 'hidden';
        text_1.className = 'text-shrink';
        text_2.className = 'text-right-back';
        text_3.className = 'text-right-back';

        returnButton_1.className = 'hidden';
    }
    else if(col_2.className === 'col-expand'){
        col_1.className = 'col-left-back';
        col_2.className = 'col-shrink';
        col_3.className = 'col-right-back';
        cover_2.className = 'cover';
        video_2.load();
        video_2.className = 'hidden';
        text_1.className = 'text-left-back';
        text_2.className = 'text-shrink';
        text_3.className = 'text-right-back';
        video_2.className = 'hidden';
        returnButton_2.className = 'hidden';
    }
    else if(col_3.className === 'col-expand'){
        col_1.className = 'col-left-back';
        col_2.className = 'col-left-back';
        col_3.className = 'col-shrink';
        cover_3.className = 'cover';
        video_3.load();
        video_3.className = 'hidden';
        text_1.className = 'text-left-back';
        text_2.className = 'text-left-back';
        text_3.className = 'text-shrink';
        
        returnButton_3.className = 'hidden';

    }
    
}