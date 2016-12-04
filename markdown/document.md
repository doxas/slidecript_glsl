
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
    "title": "真夏の太陽",
    "author": "doxas",
    "description": "寒いのはきらいです！！\nなので真夏の太陽を表現してみました。"
}
@@@

---

|||
precision mediump float;
uniform vec2  resolution;     // resolution (width, height)
uniform vec2  mouse;          // mouse      (0.0 ~ 1.0)
uniform float time;           // time       (1second == 1.0)
uniform sampler2D backbuffer; // previous scene texture

const float PI = 3.1415926;
const float PI2 = PI * 2.0;

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    float s = sin((atan(p.y, p.x) + PI) / PI2 * PI * 100.0);
    float t = length(p);
    float q = 1.0 - step(t, 0.5);
    vec3 u = step(t, 0.5) * vec3(1.0, 0.3, 0.0);
    float r = abs(0.01 / (t - 0.5));
    float v = 1.5 / abs(sin(length(p * 50.0) - time * 9.0 + t + s));
    float l = sin(time * 4.0) + 0.8;
    float w = min(time * 0.25 - 0.5, 1.0) * l;
    vec3 dest = vec3(v) * vec3(0.8, 0.3, 0.1) * q + r + u;
    gl_FragColor = vec4(dest * w, 1.0);
}
|||

---

#### 000

@@@
{
    "title": "glslsandbox default",
    "author": "mr.doob",
    "description": "in the page of new shader."
}
@@@

---

|||
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;

	float color = 0.0;
	color += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );
	color += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );
	color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );
	color *= sin( time / 10.0 ) * 0.5;

	gl_FragColor = vec4( vec3( color, color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );

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


