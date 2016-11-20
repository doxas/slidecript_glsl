
(function(global){
    var run, canvas, gl, prg, tPrg, uni, tUni, vSource, fSource;
    var aAttLocation, bAttLocation, startTime, nowTime;
    var fBufferWidth, fBufferHeight, mousePosition, fFront, fBack, fTemp;
    var pages = [];
    var pagesCount = 0;
    var activePage = 0;
    var question = 10;
    var barElement = null;
    var shaderSource = '';

    window.onload = function(){
        var a, e;
        a = bid('content').childNodes;
        for(var i = 0, len = a.length; i < len; i++){
            if(a[i].nodeType === 1){pages.push(a[i]);}
        }
        pagesCount = pages.length;
        barElement = bid('bar');
        window.addEventListener('keydown', keyDown, false);
        window.addEventListener('mousemove', mouseMove, false);
        e = bid('prev');
        e.addEventListener('click', function(){pageChange(true);}, false);
        e = bid('next');
        e.addEventListener('click', function(){pageChange(false);}, false);
        pageChange(true, 0);
        e = bid('total');
        e.innerText = pagesCount;
        e = bid('ansButton');
        if(!e){return;}
        e.addEventListener('click', function(){answer();}, false);

        // input label setting
        var questionCount = 4;
        for(var i = 0; i < question; i++){
            var j = paddingZero(i + 1);
            for(var k = 0; k < questionCount; k++){
                var l = paddingZero(k + 1);
                e = bid('radio' + j + '_' + l);
                if(e){e.addEventListener('change', function(eve){eve.currentTarget.blur();}, true);}
            }
        }
    };

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
        var i, f, e, f, g;
        pages[activePage].className = 'page';
        run = false;
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
        barElement.className = '';
        e = bid('progress');
        e.style.width = parseInt((activePage + 1) / pagesCount * 100) + '%';
        e = bid('count');
        e.textContent = activePage + 1;

        e = pages[activePage].getElementsByClassName('json');
        if(e.length > 0){
            g = parseInt(pages[activePage].children[0].id.match(/\d+/)[0], 10);
            if(!isNaN(g)){
                console.log(g, JSON.parse(e[0].textContent));
            }
        }

        f = pages[activePage].getElementsByClassName('glsl');
        if(f.length > 0){
            barElement.className = 'hidden';
            console.log(g, f[0].textContent);
        }
    }

    // input label setting
    function answer(){
        var e;
        var ans = [
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1
        ];
        var ansCount = 0;
        for(var i = 0; i < question; i++){
            var j = paddingZero(i + 1);
            var k = paddingZero(ans[i]);
            e = bid('radio' + j + '_' + k);
            if(e.checked){
                ansCount++;
                console.log('question ' + (i + 1) + ' => ○');
            }else{
                console.log('question ' + (i + 1) + ' => ×');
            }
        }
        switch(true){
            case ansCount <= 2:
                alert('かなり頑張って復習しないとヤバいかも！？');
                break;
            case ansCount <= 4:
                alert('若干あいまいな部分が多いのかも……復習しておきましょう！');
                break;
            case ansCount <= 6:
                alert('まずまず理解できているみたい。ポイントを絞って再復習！');
                break;
            case ansCount < 10:
                alert('かなり高い理解度です！　不安なところは復習しておきましょう！');
                break;
            default :
                alert('perfect !!!');
                break;
        }
        console.log(ansCount + ' / ' + question);
    }

    function init(){
        var err = null;
        run = false;
        if(shaderSource != null || shaderSource === ''){console.log('shader source not found');}
        if(!canvas){
            canvas = bid('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        if(!gl){
            gl = canvas.getContext('webgl');
            tPrg = gl.createProgram();
            vSource = bid('vs').textContent;
            fSource = bid('fs').textContent;
            shader(tPrg, 0, vSource); shader(tPrg, 1, fSource);
            gl.linkProgram(tPrg);
            tUni = {};
            tUni.texture = gl.getUniformLocation(tPrg, 'texture');
            bAttLocation = gl.getAttribLocation(tPrg, 'position');
            fFront = fBack = fTemp = null;
            fBufferWidth = window.innerWidth;
            fBufferHeight = window.innerHeight;
            fFront = create_framebuffer(fBufferWidth, fBufferHeight);
            fBack  = create_framebuffer(fBufferWidth, fBufferHeight);
            gl.viewport(0, 0, window.innerWidth, window.innerHeight);
            gl.clearColor(0, 0, 0, 1);
            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,0,-1,-1,0,1,1,0,1,-1,0]), gl.STATIC_DRAW);
            gl.activeTexture(gl.TEXTURE0);
            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
            gl.disable(gl.BLEND);
        }else{
            gl.deleteProgram(prg);
            prg = null;
        }
        prg = gl.createProgram();
        vSource = 'attribute vec3 p;void main(){gl_Position=vec4(p,1.);}';
        fSource = shaderSource;
        if(!shader(prg, 0, vSource) && !shader(prg, 1, fSource)){
            gl.linkProgram(prg);
        }else{
            return;
        }
        err = gl.getProgramParameter(prg, gl.LINK_STATUS);
        if(!err){alert(gl.getProgramInfoLog(prg)); return;}

        gl.useProgram(prg);
        uni = {};
        uni.mouse = gl.getUniformLocation(prg, 'mouse');
        uni.time = gl.getUniformLocation(prg, 'time');
        uni.resolution = gl.getUniformLocation(prg, 'resolution');
        uni.sampler = gl.getUniformLocation(prg, 'buckbuffer');
        aAttLocation = gl.getAttribLocation(prg, 'p');

        run = true;
        mousePosition = [0.0, 0.0];
        startTime = Date.now();
        render();
    }

    function render(){
        if(!run){return;}
        nowTime = (Date.now() - startTime) * 0.001;
        gl.useProgram(prg);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fFront.f);
        gl.bindTexture(gl.TEXTURE_2D, fBack.t);
        gl.enableVertexAttribArray(aAttLocation);
        gl.vertexAttribPointer(aAttLocation, 3, gl.FLOAT, false, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2fv(uni.mouse, mousePosition);
        gl.uniform1f(uni.time, nowTime);
        gl.uniform2fv(uni.resolution, [window.innerWidth, window.innerHeight]);
        gl.uniform1i(uni.sampler, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        gl.useProgram(tPrg);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, fFront.t);
        gl.enableVertexAttribArray(bAttLocation);
        gl.vertexAttribPointer(bAttLocation, 3, gl.FLOAT, false, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1i(tUni.texture, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        gl.flush();
        fTemp = fFront;
        fFront = fBack;
        fBack = fTemp;
        requestAnimationFrame(render);
    }

    function shader(p, i, j){
        if(!gl){return;}
        k = gl.createShader(gl.VERTEX_SHADER - i);
        gl.shaderSource(k, j);
        gl.compileShader(k);
        if(!gl.getShaderParameter(k, gl.COMPILE_STATUS)){
            alert(gl.getShaderInfoLog(k));
            return;
        }
        gl.attachShader(p, k);
        return gl.getShaderInfoLog(k);
    }

    function create_framebuffer(width, height){
        var frameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        var depthRenderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthRenderBuffer);
        var fTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, fTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, fTexture, 0);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return {f : frameBuffer, d : depthRenderBuffer, t : fTexture};
    }

    function mouseMove(eve){
        mousePosition = [
            eve.clientX / window.innerWidth,
            1.0 - eve.clientY / window.innerHeight
        ];
    }

    function bid(id){return document.getElementById(id);}

    function paddingZero(num){
        return ('0' + num).slice(-2);
    }
})(this);

