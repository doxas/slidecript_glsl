
#### test title

paragraparagraparagraparagra*parag*rapppppparagraph

paragraparagraparagraparagra**iparag**rapppppparagraph

![](sample.png)

---

#### test title

<a href="">paragraparagraparagraparagra*parag*rapppppparagraph</a>

paragraparagraparagraparagra**iparag**rapppppparagraph

---

#### 000

@@@
{
    "title": "test title",
    "author": "doxas",
    "description": "description text"
}
@@@

---

|||
precision mediump float;
uniform vec2  resolution;     // resolution (512.0, 512.0)
uniform vec2  mouse;          // mouse      (-1.0 ~ 1.0)
uniform float time;           // time       (1second == 1.0)
uniform sampler2D backbuffer; // previous scene texture

const vec3 pinkColor = vec3(1.0, 0.1, 0.5);
const vec3 blueColor = vec3(0.1, 0.3, 0.9);

float waveNeon(vec2 p, float power, float width, float height, float speed){
    float x = cos(abs(p.x * width));
    float y = power / abs(p.y + sin(p.x * 50.0 + time * speed) * height);
    return max(x * y, 0.0);
}

void main(){
    vec2 p = gl_FragCoord.xy / resolution * 2.0 - 1.0;
    p = p * abs(atan(p.y / p.x));
    float a = waveNeon(p, 0.05, 1.0 , 0.25, 0.75);
    float b = waveNeon(p, 0.1 , 2.25, 0.5 , 0.25);
    gl_FragColor = vec4(pinkColor * a + blueColor * b, 1.0);
}
|||

---

#### 001

@@@
{
    "title": "test title",
    "author": "doxas",
    "description": "description text"
}
@@@

---

|||
// writen by qmuntada Based on this shader : https://www.shadertoy.com/view/ltXSDN
// modified a lor by gigatron for glslsandbox !
// 
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform sampler2D backbuffer;

#define	SPEED 	    0.1
#define	STAR_NUMBER 100

vec3 col1 = vec3(155., 176., 255.) / 256.; 
vec3 col2 = vec3(255., 111., 111.) / 256.; 

float rand(float i){
    return fract(sin(dot(vec2(i) ,vec2(32.9898,78.233))) * 43758.5453);
}

void main(){
    vec4 b=texture2D(backbuffer,gl_FragCoord.xy/resolution.xy);

    vec2 uv = gl_FragCoord.xy / resolution.y;
    float res  = resolution.x / resolution.y;
    gl_FragColor = vec4(0.0);

    vec4 sStar = vec4(rand(uv.x + uv.y));
    sStar *= pow(rand(uv.x * uv.y), 800.);
    gl_FragColor += sStar;
  
    vec4 col = vec4(0.);

    for (int i = 0; i < STAR_NUMBER; ++i){
    	float n = float(i);

        vec3 pos = vec3(rand(n) + res + time * SPEED, rand(n + 1.) , rand(n + 2.));

        pos.x = mod(pos.x * pos.z, res);
        vec4 col = .2*vec4(pow(length(pos.xy - uv), -2.0) * 0.005 * pos.z * rand(n + 3.));

        col.xyz *= mix(col1, col2, rand(n + 4.));
            
       gl_FragColor += vec4(col);
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


