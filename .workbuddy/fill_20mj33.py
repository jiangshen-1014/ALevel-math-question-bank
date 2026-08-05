# -*- coding: utf-8 -*-
import sys, json
sys.path.insert(0, ".workbuddy")
from fill_engine import fill

sols = {
"cie_p3_20MJ33_q1": r"""对 $|2x-1|>3|x+2|$ 两边平方（均非负）：
$$(2x-1)^2>9(x+2)^2$$
$$4x^2-4x+1>9x^2+36x+36$$
$$5x^2+40x+35<0\;\Rightarrow\;x^2+8x+7<0\;\Rightarrow\;(x+1)(x+7)<0$$
解得 $\boxed{-7<x<-1}$。""",

"cie_p3_20MJ33_q2": r"""$$\int_0^1(2-x)\mathrm{e}^{-2x}\,\mathrm{d}x=\int_0^12\mathrm{e}^{-2x}\,\mathrm{d}x-\int_0^1x\mathrm{e}^{-2x}\,\mathrm{d}x$$
第一项：$[- \mathrm{e}^{-2x}]_0^1=1-\mathrm{e}^{-2}$。
第二项（分部积分）：$\displaystyle\int x\mathrm{e}^{-2x}\,\mathrm{d}x=-\frac{x}{2}\mathrm{e}^{-2x}-\frac14\mathrm{e}^{-2x}$，故
$$\int_0^1x\mathrm{e}^{-2x}\,\mathrm{d}x=\left(\frac14-\frac34\mathrm{e}^{-2}\right)$$
合计：
$$(1-\mathrm{e}^{-2})-\left(\frac14-\frac34\mathrm{e}^{-2}\right)=\frac34-\frac14\mathrm{e}^{-2}$$
$\boxed{\dfrac34-\dfrac{1}{4\mathrm{e}^2}}$。""",

"cie_p3_20MJ33_q3": r"""(a)
$$\ln(1+\mathrm{e}^{-x})+2x=0\;\Rightarrow\;\ln(1+\mathrm{e}^{-x})=-2x\;\Rightarrow\;1+\mathrm{e}^{-x}=\mathrm{e}^{-2x}$$
两边乘 $\mathrm{e}^{2x}$：$\mathrm{e}^{2x}+1=\mathrm{e}^x$，即 $(\mathrm{e}^x)^2+\mathrm{e}^x-1=0$。
故为关于 $\mathrm{e}^x$ 的二次方程。

(b) 令 $u=\mathrm{e}^x$，则 $u^2+u-1=0\Rightarrow u=\dfrac{-1\pm\sqrt5}{2}$。因 $u=\mathrm{e}^x>0$，取 $u=\dfrac{\sqrt5-1}{2}\approx0.6180$。
$$x=\ln\frac{\sqrt5-1}{2}\approx-0.48121$$
$\boxed{x\approx-0.481}$（3 位小数）。""",

"cie_p3_20MJ33_q4": r"""(a) 设 $u=\dfrac{1}{2x}$，则
$$\frac{\mathrm{d}}{\mathrm{d}x}\tan^{-1}\!\left(\frac{1}{2x}\right)=\frac{1}{1+u^2}\cdot\left(-\frac{1}{2x^2}\right)=\frac{4x^2}{4x^2+1}\cdot\left(-\frac{1}{2x^2}\right)=-\frac{2}{4x^2+1}$$
由乘积法则：
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\tan^{-1}\!\left(\frac{1}{2x}\right)+x\left(-\frac{2}{4x^2+1}\right)=\tan^{-1}\!\left(\frac{1}{2x}\right)-\frac{2x}{4x^2+1}$$

(b) 当 $x=2$：
$y=2\tan^{-1}\frac14\approx0.48996$，$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\tan^{-1}\frac14-\dfrac{4}{17}\approx0.00969$。
切线在 $y$ 轴截距 $p=y-\dfrac{\mathrm{d}y}{\mathrm{d}x}\cdot2\approx0.48996-0.01938=0.47059$。
$\boxed{p\approx0.471}$。""",

"cie_p3_20MJ33_q5": r"""令 $t=\tan\theta$。$\tan(\theta+45^\circ)=\dfrac{t+1}{1-t}$，故
$$\tan\theta\tan(\theta+45^\circ)=\frac{t(t+1)}{1-t}$$
而 $2\cot2\theta=\dfrac{2(1-t^2)}{2t}=\dfrac{1-t^2}{t}=\dfrac{(1-t)(1+t)}{t}$。
方程化为
$$\frac{t(t+1)}{1-t}=\frac{(1-t)(1+t)}{t}$$
因 $0^\circ<\theta<90^\circ$ 知 $t>0$，两边除以 $t+1$ 并化简得 $t^2=(1-t)^2$，即 $2t=1\Rightarrow t=\dfrac12$。
$$\theta=\arctan\frac12\approx26.565^\circ$$
$\boxed{\theta\approx26.6^\circ}$。""",

"cie_p3_20MJ33_q6": r"""(a) 画 $y=x^5$（严格递增、过原点）与 $y=2+x$（直线）。前者由负无穷上升到正无穷，后者为直线，二者在 $x>0$ 处恰相交一次；对 $x<0$，$f(x)=x^5-x-2$ 的极大值（在 $x=-5^{-1/4}$ 处）仍为负，故无负根。因此恰有一个实根。

(b) 若迭代收敛于 $L$，则 $L=\dfrac{4L^5+2}{5L^4-1}$（分母非零），即
$$L(5L^4-1)=4L^5+2\;\Rightarrow\;5L^5-L=4L^5+2\;\Rightarrow\;L^5=2+L$$
故极限满足方程 $x^5=2+x$。得证。

(c) 取 $x_1=1.5$，迭代 $x_{n+1}=\dfrac{4x_n^5+2}{5x_n^4-1}$：

| $n$ | $x_n$ |
|---|---|
| 1 | 1.50000 |
| 2 | 1.33162 |
| 3 | 1.27352 |
| 4 | 1.26724 |
| 5 | 1.26717 |
| 6 | 1.26717 |

故 $\boxed{x\approx1.267}$（3 位小数）。""",

"cie_p3_20MJ33_q7": r"""(a) 设 $\dfrac{2}{(2x-1)(2x+1)}=\dfrac{A}{2x-1}+\dfrac{B}{2x+1}$，得 $2=A(2x+1)+B(2x-1)$。
取 $x=\frac12$：$2=2A\Rightarrow A=1$；取 $x=-\frac12$：$2=-2B\Rightarrow B=-1$。
$\boxed{\mathrm{f}(x)=\dfrac{1}{2x-1}-\dfrac{1}{2x+1}}$。

(b)
$$\bigl(\mathrm{f}(x)\bigr)^2=\left(\frac{1}{2x-1}-\frac{1}{2x+1}\right)^2=\frac{1}{(2x-1)^2}-\frac{2}{(2x-1)(2x+1)}+\frac{1}{(2x+1)^2}$$
而 $\dfrac{2}{(2x-1)(2x+1)}=\mathrm{f}(x)=\dfrac{1}{2x-1}-\dfrac{1}{2x+1}$，代入即得
$$\bigl(\mathrm{f}(x)\bigr)^2=\frac{1}{(2x-1)^2}-\frac{1}{2x-1}+\frac{1}{2x+1}+\frac{1}{(2x+1)^2}$$
得证。

(c)
$$\int_1^2\bigl(\mathrm{f}(x)\bigr)^2\,\mathrm{d}x=\left[-\frac{1}{2(2x-1)}-\frac12\ln(2x-1)+\frac12\ln(2x+1)-\frac{1}{2(2x+1)}\right]_1^2$$
代入上下限化简得
$$\left(\frac13+\frac1{15}\right)+\frac12\bigl(\ln5-\ln3-\ln3\bigr)=\frac25+\frac12\ln\frac59$$
$\boxed{\dfrac25+\dfrac12\ln\dfrac59}$。""",

"cie_p3_20MJ33_q8": r"""$\overrightarrow{OA}=(1,2,1),\;\overrightarrow{OB}=(2,5,3),\;\overrightarrow{OD}=(3,0,2)$。

(a) 平行四边形 $ABCD$ 满足 $\overrightarrow{AB}=\overrightarrow{DC}$，故
$$\overrightarrow{OC}=\overrightarrow{OD}+\overrightarrow{AB}=\overrightarrow{OD}+\overrightarrow{OB}-\overrightarrow{OA}=(3,0,2)+(2,5,3)-(1,2,1)=(4,3,4)$$
$\boxed{\overrightarrow{OC}=4\mathbf{i}+3\mathbf{j}+4\mathbf{k}}$。
验证非菱形：$|\overrightarrow{AB}|=|(1,3,2)|=\sqrt{14}$，$|\overrightarrow{BC}|=|(2,-2,1)|=3$，邻边不等，故不是菱形。

(b) $\overrightarrow{AB}=(1,3,2),\;\overrightarrow{AD}=(2,-2,1)$，
$$\cos\angle BAD=\frac{\overrightarrow{AB}\cdot\overrightarrow{AD}}{|\overrightarrow{AB}||\overrightarrow{AD}|}=\frac{2-6+2}{\sqrt{14}\cdot3}=\frac{-2}{3\sqrt{14}}\approx-0.1782$$
$\boxed{\angle BAD\approx100.3^\circ}$。

(c) 面积 $=|\overrightarrow{AB}\times\overrightarrow{AD}|$，其中
$$\overrightarrow{AB}\times\overrightarrow{AD}=(1,3,2)\times(2,-2,1)=(7,3,-8)$$
$$|\overrightarrow{AB}\times\overrightarrow{AD}|=\sqrt{49+9+64}=\sqrt{122}\approx11.045$$
$\boxed{\text{面积}\approx11.0}$（3 位有效数字）。""",

"cie_p3_20MJ33_q9": r"""(a) 由 $u-w=2\mathrm{i}$ 得 $u=w+2\mathrm{i}$，代入 $uw=6$：
$$(w+2\mathrm{i})w=6\;\Rightarrow\;w^2+2\mathrm{i}w-6=0$$
$$w=\frac{-2\mathrm{i}\pm\sqrt{(2\mathrm{i})^2+24}}{2}=\frac{-2\mathrm{i}\pm2\sqrt5}{2}=-\mathrm{i}\pm\sqrt5$$
对应 $u=w+2\mathrm{i}$。两组解为
$$\boxed{u=\sqrt5+\mathrm{i},\;w=\sqrt5-\mathrm{i}}\quad\text{或}\quad\boxed{u=-\sqrt5+\mathrm{i},\;w=-\sqrt5-\mathrm{i}}$$

(b) 区域由三部分交叠：
- $|z-2-2\mathrm{i}|\le2$：以 $2+2\mathrm{i}$ 为圆心、半径 $2$ 的圆盘；
- $0\le\arg z\le\dfrac{\pi}{4}$：第一象限中介于正实轴与直线 $y=x$ 之间的扇形；
- $\operatorname{Re}z\le3$：直线 $x=3$ 左侧。
Argand 图上 shading 三者的交集。""",

"cie_p3_20MJ33_q10": r"""(a) 出水速率与 $\sqrt{h}$ 成正比，记为 $C\sqrt{h}$（$C>0$），故
$$\frac{\mathrm{d}V}{\mathrm{d}t}=-C\sqrt{h}$$
而 $V=\dfrac13\pi(3rh^2-h^3)$，于是
$$\frac{\mathrm{d}V}{\mathrm{d}h}=\frac13\pi(6rh-3h^2)=\pi(2rh-h^2)=\pi h(2r-h)$$
由链式法则：
$$\frac{\mathrm{d}h}{\mathrm{d}t}=\frac{\mathrm{d}V/\mathrm{d}t}{\mathrm{d}V/\mathrm{d}h}=\frac{-C\sqrt{h}}{\pi h(2r-h)}=-\frac{C/\pi}{2r\sqrt{h}-h^{3/2}}$$
取 $B=\dfrac{C}{\pi}>0$，即得 $\boxed{\dfrac{\mathrm{d}h}{\mathrm{d}t}=-\dfrac{B}{2r\sqrt{h}-h^{3/2}}}$。

(b) 分离变量：
$$(2r\sqrt{h}-h^{3/2})\,\mathrm{d}h=-B\,\mathrm{d}t$$
积分：$\displaystyle\int(2r h^{1/2}-h^{3/2})\,\mathrm{d}h=\frac{4r}{3}h^{3/2}-\frac{2}{5}h^{5/2}=-Bt+K$。
由 $t=0,h=r$ 得 $K=\dfrac{14}{15}r^{5/2}$；由 $t=14,h=0$ 得 $B=\dfrac{r^{5/2}}{15}$。
代回并解出 $t$：
$$t=\frac{1}{B}\left[\frac{14}{15}r^{5/2}-\frac{4r}{3}h^{3/2}+\frac{2}{5}h^{5/2}\right]=14-20\left(\frac{h}{r}\right)^{3/2}+6\left(\frac{h}{r}\right)^{5/2}$$
$\boxed{t=14-20\left(\dfrac{h}{r}\right)^{3/2}+6\left(\dfrac{h}{r}\right)^{5/2}}$。""",
}

fill("20MJ33", sols)
