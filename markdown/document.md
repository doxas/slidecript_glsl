
#### test title

paragraparagraparagraparagra*parag*rapppppparagraph

paragraparagraparagraparagra**iparag**rapppppparagraph

![](sample.png)

---

#### 000

@@@
{
    "title": "test title",
    "author": "doxas",
    "description": "description text"
}
@@@

|||
precision mediump float;
uniform vec2  resolution;     // resolution (width, height)
uniform vec2  mouse;          // mouse      (0.0 ~ 1.0)
uniform float time;           // time       (1second == 1.0)
uniform sampler2D buckbuffer; // previous scene texture

vec3 hsv(float h, float s, float v){
    vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
    return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec2 x = vec2(-0.345, 0.654);
    vec2 y = vec2(time * 0.005, 0.0);
    vec2 z = p;
    int j = 0;
    for(int i = 0; i < 360; i++){
        j++;
        if(length(z) > 2.0){break;}
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + x + y;
    }
    float h = abs(mod(time * 15.0 - float(j), 360.0) / 360.0);
    float f = 0.1 / length(p - (mouse * 2.0 - 1.0));
    vec4 smpColor = texture2D(buckbuffer, gl_FragCoord.xy / min(resolution.x, resolution.y));
    if(length(smpColor) > 0.0){
        vec3 tmp = mix(hsv(h, 1.0, 1.0) + f, smpColor.rgb, 0.975);
        gl_FragColor = vec4(tmp, 1.0);
    }else{
        gl_FragColor = vec4(hsv(h, 1.0, 1.0) + f, 1.0);
    }
}
|||

---

paragraph`code`paragraph

paragraph

* list
* list
* list
* list
* list

---

```
codeblock
    codeblock

    codeblock
    codeblock
```

---

paragraph

--blockquote--

---

#### question 1

what is this?

<input type="radio" id="radio01_01" name="radio01"><label for="radio01_01">ans 01</label>
<input type="radio" id="radio01_02" name="radio01"><label for="radio01_02">ans 02</label>
<input type="radio" id="radio01_03" name="radio01"><label for="radio01_03">ans 03</label>
<input type="radio" id="radio01_04" name="radio01"><label for="radio01_04">ans 04</label>

---

#### question 2

what is this?

<input type="radio" id="radio02_01" name="radio02"><label for="radio02_01">ans 01</label>
<input type="radio" id="radio02_02" name="radio02"><label for="radio02_02">ans 02</label>
<input type="radio" id="radio02_03" name="radio02"><label for="radio02_03">ans 03</label>
<input type="radio" id="radio02_04" name="radio02"><label for="radio02_04">ans 04</label>

---

#### question 3

what is this?

<input type="radio" id="radio03_01" name="radio03"><label for="radio03_01">ans 01</label>
<input type="radio" id="radio03_02" name="radio03"><label for="radio03_02">ans 02</label>
<input type="radio" id="radio03_03" name="radio03"><label for="radio03_03">ans 03</label>
<input type="radio" id="radio03_04" name="radio03"><label for="radio03_04">ans 04</label>

---

#### question 4

what is this?

<input type="radio" id="radio04_01" name="radio04"><label for="radio04_01">ans 01</label>
<input type="radio" id="radio04_02" name="radio04"><label for="radio04_02">ans 02</label>
<input type="radio" id="radio04_03" name="radio04"><label for="radio04_03">ans 03</label>
<input type="radio" id="radio04_04" name="radio04"><label for="radio04_04">ans 04</label>

---

#### question 5

what is this?

<input type="radio" id="radio05_01" name="radio05"><label for="radio05_01">ans 01</label>
<input type="radio" id="radio05_02" name="radio05"><label for="radio05_02">ans 02</label>
<input type="radio" id="radio05_03" name="radio05"><label for="radio05_03">ans 03</label>
<input type="radio" id="radio05_04" name="radio05"><label for="radio05_04">ans 04</label>

---

#### question 6

what is this?

<input type="radio" id="radio06_01" name="radio06"><label for="radio06_01">ans 01</label>
<input type="radio" id="radio06_02" name="radio06"><label for="radio06_02">ans 02</label>
<input type="radio" id="radio06_03" name="radio06"><label for="radio06_03">ans 03</label>
<input type="radio" id="radio06_04" name="radio06"><label for="radio06_04">ans 04</label>

---

#### question 7

what is this?

<input type="radio" id="radio07_01" name="radio07"><label for="radio07_01">ans 01</label>
<input type="radio" id="radio07_02" name="radio07"><label for="radio07_02">ans 02</label>
<input type="radio" id="radio07_03" name="radio07"><label for="radio07_03">ans 03</label>
<input type="radio" id="radio07_04" name="radio07"><label for="radio07_04">ans 04</label>

---

#### question 8

what is this?

<input type="radio" id="radio08_01" name="radio08"><label for="radio08_01">ans 01</label>
<input type="radio" id="radio08_02" name="radio08"><label for="radio08_02">ans 02</label>
<input type="radio" id="radio08_03" name="radio08"><label for="radio08_03">ans 03</label>
<input type="radio" id="radio08_04" name="radio08"><label for="radio08_04">ans 04</label>

---

#### question 9

what is this?

<input type="radio" id="radio09_01" name="radio09"><label for="radio09_01">ans 01</label>
<input type="radio" id="radio09_02" name="radio09"><label for="radio09_02">ans 02</label>
<input type="radio" id="radio09_03" name="radio09"><label for="radio09_03">ans 03</label>
<input type="radio" id="radio09_04" name="radio09"><label for="radio09_04">ans 04</label>

---

#### question 10

what is this?

<input type="radio" id="radio10_01" name="radio10"><label for="radio10_01">ans 01</label>
<input type="radio" id="radio10_02" name="radio10"><label for="radio10_02">ans 02</label>
<input type="radio" id="radio10_03" name="radio10"><label for="radio10_03">ans 03</label>
<input type="radio" id="radio10_04" name="radio10"><label for="radio10_04">ans 04</label>

---

#### 結果はいかに！？

<div id="ansButton">答え合わせ</div>

---


