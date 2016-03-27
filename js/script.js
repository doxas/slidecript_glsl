
(function(global){
    var pages = [];
    var pagesCount = 0;
    var activePage = 0;

    window.onload = function(){
        var a, e;
        a = document.getElementById('content').childNodes;
        for(var i = 0, len = a.length; i < len; i++){
            if(a[i].nodeName !== '#text'){
                pages.push(a[i]);
            }
        }
        pagesCount = pages.length;
        window.addEventListener('keydown', keyDown, true);
        e = document.getElementById('prev');
        e.addEventListener('click', function(){pageChange(true);}, true);
        e = document.getElementById('next');
        e.addEventListener('click', function(){pageChange(false);}, true);
        pageChange(true, 0);
        e = document.getElementById('total');
        e.innerText = pagesCount;

        // input label setting
        var elmList = 20;
        var questionCount = 4;
        for(var i = 0; i < elmList; i++){
            var j = paddingZero(i + 1);
            for(var k = 0; k < questionCount; k++){
                var l = paddingZero(k + 1);
                e = document.getElementById('radio' + j + '_' + l);
                if(e){e.addEventListener('change', function(eve){eve.currentTarget.blur();}, true);}
            }
        }
    }

    function keyDown(eve){
        switch(eve.keyCode){
            case 37:
            case 38:
            case 72:
            case 75:
                pageChange(true);
                break;
            case 39:
            case 40:
            case 74:
            case 76:
                pageChange(false);
                break;
        }
    }

    function pageChange(prev, num){
        var e;
        pages[activePage].className = 'page';
        if(num != null){
            activePage = num;
        }else{
            if(prev){
                if(activePage > 0){
                    activePage--;
                }else{
                    activePage = pagesCount - 1;
                }
            }else{
                if(activePage < pagesCount - 1){
                    activePage++;
                }else{
                    activePage = 0;
                }
            }
        }
        pages[activePage].className = 'active';
        e = document.getElementById('progress');
        e.style.width = parseInt((activePage + 1) / pagesCount * 100) + '%';
        e = document.getElementById('count');
        e.innerText = activePage + 1;
    }

    // input label setting
    function answer(){
        var e;
        var ans = [
            3, 3, 4, 4, 1,
            4, 3, 1, 2, 1
        ];
        var elmList = 10;
        var ansCount = 0;
        for(var i = 0; i < elmList; i++){
            var j = paddingZero(i + 1);
            var k = paddingZero(ans[i]);
            e = document.getElementById('radio' + j + '_' + k);
            if(e.checked){ansCount++;}
        }
        e = document.getElementById('ansCount');
        e.textContent = ansCount;
        switch(true){
            case ansCount <= 2:
                alert('かなり頑張って復習しないとヤバいかも！！');
                break;
            case ansCount <= 4:
                alert('若干あいまいな部分が多いのかも……復習しておきましょう！');
                break;
            case ansCount <= 6:
                alert('まずまず理解できているみたい。ポイントを絞って再復習！');
                break;
            case ansCount <= 8:
                alert('かなり高い理解度です！　不安なところは復習しておきましょう！');
                break;
            default :
                alert('perfect !!!');
                break;
        }
    }

    function paddingZero(num){
        return ('0' + num).slice(-2);
    }
})(this);

