"""
Inject solutions for CIE P3 25_FM_32 (11 questions).
Replaces "solution":"" for each cie_p3_25FM32_qN with the actual solution text.
Uses regex anchored from each id to target the correct empty solution field.
"""
import re
import json

FILE = "assets/js/data.js"

solutions = {
    1: r"""**(a) Isolate the logarithm**\\n$$\ln(1-\mathrm{e}^{-2x}) = -3$$\\n**(b) Exponentiate**\\n$1 - \mathrm{e}^{-2x} = \mathrm{e}^{-3}$\\n$\mathrm{e}^{-2x} = 1 - \mathrm{e}^{-3}$\\n**(c) Solve for $x$**\\n$-2x = \ln(1-\mathrm{e}^{-3})$\\n$x = -\dfrac12 \ln(1-\mathrm{e}^{-3})$\\n**(d) Evaluate (4 d.p.)**\\n$\mathrm{e}^{-3}\approx0.049787$, $1-\mathrm{e}^{-3}\approx0.950213$, $\ln(0.950213)\approx-0.051054$.\\n$x \approx -\frac12(-0.051054) = 0.025527\ldots$\\n$\boxed{x\approx 0.0255}$ (to 4 decimal places)""",

    2: r"""**(a) Find $y$ when $x=0$**\\nSubstitute $x=0$: $0+\ln(2y)=1 \Rightarrow \ln(2y)=1 \Rightarrow 2y=\mathrm{e} \Rightarrow y=\tfrac12\mathrm{e}$.\\n**(b) Differentiate implicitly w.r.t $x$**\\n$\displaystyle\frac{\mathrm{d}}{\mathrm{d}x}(xy^2) + \frac{\mathrm{d}}{\mathrm{d}x}\bigl(\ln(x+2y)\bigr)=0$\\n$(y^2+2xy y')+\frac{1+2y'}{x+2y}=0$\\n**(c) Substitute $(x,y)=(0,\tfrac12\mathrm{e})$**\\nAt this point $x=0$, so $xy^2$ term vanishes: $y^2=\left(\tfrac12\mathrm{e}\right)^2=\tfrac14\mathrm{e}^2$, and $x+2y=\mathrm{e}$.\\n$\tfrac14\mathrm{e}^2 + \dfrac{1+2y'}{\mathrm{e}}=0$\\nMultiply by $\mathrm{e}$: $\tfrac14\mathrm{e}^3+1+2y'=0$\\n$2y'=-1-\tfrac14\mathrm{e}^3$\\n$\boxed{y'=-\tfrac12-\dfrac{\mathrm{e}^3}{8}\approx-3.01}$""",

    3: r"""**(a) Inequalities defining the shaded region**\\nFrom the diagram:\\n* The circle has centre at $(-2,\,1)$ and radius $4$ → **$|z+2-\mathrm{i}| \leqslant 4$** (inside/on the circle).\\n* The horizontal line is $\operatorname{Im}(z)=-1$, shading is below it → **$\operatorname{Im}(z)\leqslant-1$**.\\nBoth boundaries are included ($\leqslant$).\\n\\n**(b) Greatest value of $|z|$**\\nThe feasible region is the lower segment of the circle cut off by $\operatorname{Im}(z)=-1$. The maximum distance from origin occurs on the boundary of this segment. The intersection points of the line $y=-1$ with $(x+2)^2+(y-1)^2=16$ satisfy $(x+2)^2+4=16\Rightarrow x=-2\pm2\sqrt3$. The leftmost point $B=(-2-2\sqrt3,-1)$ gives the larger modulus:\\n$|B|^2=(-2-2\sqrt3)^2+(-1)^2=(4+8\sqrt3+12)+1=17+8\sqrt3$.\\nAny point on the circular arc below $y=-1$ that maximises $|z|$ would need $\tan\theta=-\tfrac12$ on the circle; however such a point lies above $y=-1$ (its imaginary part $\approx-0.79>-1$), outside the feasible region. Hence the constrained maximum is at endpoint $B$.\\n$\boxed{|z|_{\max}=\sqrt{17+8\sqrt3}\approx5.56}$""",

    4: r"""**(a) Express as quadratic in $t=\tan x$**\\n$\tan(x-60^\circ)=\dfrac{\tan x-\tan60^\circ}{1+\tan x\tan60^\circ}=\dfrac{t-\sqrt3}{1+\sqrt3\,t}$\\nEquation: $\dfrac{t-\sqrt3}{1+\sqrt3 t}=2\cot x=\dfrac2t$\\nCross-multiply: $t(t-\sqrt3)=2(1+\sqrt3 t)$\\n$t^2-\sqrt3\,t=2+2\sqrt3\,t$\\n$\boxed{t^2-3\sqrt3\,t-2=0}$ ✓\\n\\n**(b) Solve for $x$**\\n$t=\dfrac{3\sqrt3\pm\sqrt{27+8}}2=\dfrac{3\sqrt3\pm\sqrt{35}}2$\\n$t_1=\dfrac{5.196+5.916}{2}=5.556\ldots\;\Rightarrow\;x_1=\arctan(5.556)=79.8^\circ$ (to 1 d.p.)\\n$t_2=\dfrac{5.196-5.916}{2}=-0.360\ldots\;\Rightarrow\;x_2=180^\circ-\arctan(0.360)=160.2^\circ$\\nBoth values lie in $[0^\circ,180^\circ]$ and are valid (neither makes $\cot x$ undefined).\\n$\boxed{x=79.8^\circ,\;160.2^\circ\text{ (to }1\text{ d.p.)}}$""",

    5: r"""**(a) Form a quartic in $x$**\\nLet $\sqrt{-4+6\sqrt5\,\mathrm{i}}=x+\mathrm{i}y$ where $x,y\in\mathbb R$. Then\\n$(x+\mathrm{i}y)^2=x^2-y^2+2xy\mathrm{i}=-4+6\sqrt5\,\mathrm{i}$.\\nEquate real & imaginary parts: $x^2-y^2=-4$ and $2xy=6\sqrt5$ (so $xy=3\sqrt5>0$, same sign).\\nFrom $xy=3\sqrt5$ we get $y=\dfrac{3\sqrt5}{x}$. Substitute into $x^2-y^2=-4$:\\n$x^2-\dfrac{45}{x^2}=-4\;\Rightarrow\;x^4+4x^2-45=0$.\\nFactorise: $(x^2+9)(x^2-5)=0$. Since $x$ is real, $x^2=5\Rightarrow x=\pm\sqrt5$.\\nThen $y=\dfrac{3\sqrt5}{\pm\sqrt5}=\pm3$ (same sign as $x$).\\n$\boxed{\sqrt{-4+6\sqrt5\,\mathrm{i}}=\pm(\sqrt5+3\mathrm{i})}$""",

    6: r"""**(a) Separate variables**\\n$\displaystyle\frac{\mathrm{d}x}{\mathrm{d}\theta}=\left(\frac{x}{5}+1\right)\sin^22\theta=\frac{x+5}{5}\sin^22\theta$\\n$\displaystyle\int\frac{5}{x+5}\,\mathrm{d}x=\int\sin^22\theta\,\mathrm{d}\theta$\\nLHS $=5\ln|x+5|$. RHS: use $\sin^2\alpha=\dfrac{1-\cos2\alpha}{2}$:\\n$\displaystyle\int\sin^22\theta\,\mathrm{d}\theta=\int\frac{1-\cos4\theta}{2}\,\mathrm{d}\theta=\frac{\theta}{2}-\frac{\sin4\theta}{8}+C$.\\nSo $5\ln(x+5)=\dfrac{\theta}{2}-\dfrac{\sin4\theta}{8}+C$.\\n**(b) Apply initial condition**\\nWhen $\theta=0$, $x=5$: $5\ln10=C$.\\n$5\ln\dfrac{x+5}{10}=\dfrac{\theta}{2}-\dfrac{\sin4\theta}{8}$.\\n$\ln\dfrac{x+5}{10}=\dfrac{\theta}{10}-\dfrac{\sin4\theta}{40}$.\\nExponentiate: $\boxed{x=10\exp\!\left(\dfrac{\theta}{10}-\dfrac{\sin4\theta}{40}\right)-5}$""",

    7: r"""**(a) Show $p=\frac12\tan^{-1}\!\left(\frac{3}{2p}\right)$**\\n$y=x^3\cos2x$. Differentiate using product rule:\\n$y'=3x^2\cos2x-2x^3\sin2x=x^2(3\cos2p-2p\sin2p)$.\\nAt maximum point $M$, $y'=0$ and $x=p\neq0$, so $3\cos2p=2p\sin2p$.\\nDivide by $\cos2p$: $3=2p\tan2p\;\Rightarrow\;\tan2p=\dfrac{3}{2p}$\\n$\Rightarrow\;2p=\tan^{-1}\!\left(\dfrac{3}{2p}\right)\;\Rightarrow\;\boxed{p=\frac12\tan^{-1}\!\left(\frac{3}{2p}\right)}$ ✓\\n\\n**(b) Show $0.5<p<0.7$**\\nLet $f(p)=p-\frac12\tan^{-1}(3/(2p))$.\\n$f(0.5)=0.5-\frac12\tan^{-1}3=0.5-0.6245<0$.\\n$f(0.7)=0.7-\frac12\tan^{-1}(15/7)=0.7-0.5671>0$.\\nSign change ⇒ root in $(0.5,0.7)$ ✓\\n\\n**(c) Iteration**\\n$p_{n+1}=\frac12\tan^{-1}\!\left(\dfrac{3}{2p_n}\right)$. Start $p_0=0.60000$:\\n$p_1=0.59514,\;p_2=0.59862,\;p_3=0.59750,\;p_4=0.59784,\;p_5=0.59775,\;p_6=0.59779$.\\nTo 3 d.p.: $\boxed{p=0.598}$""",

    8: r"""**(a) Prove lines are skew**\\nDirection vectors: $\mathbf{d}_1=\begin{pmatrix}2&3&-1\end{pmatrix}$, $\mathbf{d}_2=\begin{pmatrix}-1&-2&1\end{pmatrix}$.\\nNot parallel since no scalar $k$ satisfies $(2,3,-1)=k(-1,-2,1)$.\\nFor intersection, equate components: $-1+2\lambda=2-\mu$, $3+3\lambda=-3-2\mu$, $-4-\lambda=-1+\mu$.\\nFrom eqns 1 & 3: $2\lambda+\mu=3$ and $\lambda+\mu=-3$ → subtracting: $\lambda=6$, then $\mu=-9$.\\nCheck eqn 2: LHS $=3+18=21$, RHS $=-3-(-2)(-9)=-3-18=-21$. $21\neq-21$ → contradiction.\\nNo common point exists, and directions not parallel → **lines are skew** ✓\\n\\n**(b) Obtuse angle between direction vectors**\\n$\mathbf{d}_1\cdot\mathbf{d}_2=2(-1)+3(-2)+(-1)(1)=-2-6-1=-9$.\\n$|\mathbf{d}_1|=\sqrt{4+9+1}=\sqrt{14}$, $|\mathbf{d}_2|=\sqrt{1+4+1}=\sqrt6$.\\n$\cos\theta=\dfrac{-9}{\sqrt{84}}\approx-0.9820$. Since dot product negative, angle is obtuse.\\n$\theta=\arccos(-0.9820)\approx169.1^\circ$\\n$\boxed{\theta\approx169^\circ\text{ (nearest degree)}}$""",

    9: r"""**(a) Find $a$ and $b$**\\nSince $(x-3)$ is a factor: $\mathrm p(3)=0$.\\n$6(27)+9a+3b+9=0\;\Rightarrow\;162+9a+3b+9=0\;\Rightarrow\;9a+3b=-171\;\Rightarrow\;3a+b=-57$ …(1)\\n$\mathrm p'(x)=18x^2+2ax+b$. Remainder when divided by $(x-3)$ equals $\mathrm p'(3)$: $\mathrm p'(3)=72$.\\n$18(9)+6a+b=72\;\Rightarrow\;162+6a+b=72\;\Rightarrow\;6a+b=-90$ …(2)\\n(2)–(1): $3a=-33\;\Rightarrow\;\boxed{a=-11}$. Sub into (2): $-66+b=-90\;\Rightarrow\;\boxed{b=-24}$.\\n\\n**(b) Factorise completely**\\n$\mathrm p(x)=6x^3-11x^2-24x+9=(x-3)(6x^2+7x-3)$.\\nFactor quadratic: $(3x-1)(2x+3)=6x^2+9x-2x-3=6x^2+7x-3$ ✓\\n$\boxed{\mathrm p(x)=(x-3)(3x-1)(2x+3)}$\\n\\n**(c) Solve $\mathrm p(x)<0$**\\nRoots: $x=3,\;x=\tfrac13,\;x=-\tfrac32$. Leading coefficient positive.\\nSign chart (roots ordered): $-\tfrac32 < \tfrac13 < 3$.\\nTest intervals: $x<-3/2$ → neg ; $-3/2<x<1/3$ → pos ; $1/3<x<3$ → neg ; $x>3$ → pos.\\n$\boxed{x<-\tfrac32\;\text{ or }\;\tfrac13<x<3}$ (or $x\in(-\infty,-3/2)\cup(1/3,3)$)""",

    10: r"""**(a) Partial fractions**\\nLet $\displaystyle\frac{-7x^2+2x-6}{(1+x)(4+x^2)}=\frac{A}{1+x}+\frac{Bx+C}{4+x^2}$.\\n$A(4+x^2)+(Bx+C)(1+x)=-7x^2+2x-6$.\\nEquate coefficients: $A+B=-7$, $B+C=2$, $4A+C=-6$.\\nSolving: $A=-3$, $B=-4$, $C=6$.\\n$\boxed{f(x)=-\dfrac{3}{1+x}-\dfrac{4x}{4+x^2}+\dfrac{6}{4+x^2}}$\\n\\n**(b) Integrate**\\n$\displaystyle\int_0^2 f(x)\,\mathrm dx =\Bigl[-3\ln(1+x)\Bigr]_0^2 +\Bigl[-2\ln(4+x^2)\Bigr]_0^2 +\Bigl[\,3\cdot\tfrac12\tan^{-1}\tfrac x2\Bigr]_0^2$\\n$= -3\ln3 -2(\ln8-\ln4)+3\bigl(\tan^{-1}1-\tan^{-1}0\bigr)$\\n$= -3\ln3-2\ln2+3\cdot\tfrac{\pi}{4}$\\n$= \dfrac34\pi-(\ln27+\ln4)=\boxed{\dfrac34\pi-\ln108}$\\n($a=\dfrac34$, $b=108$)""",

    11: r"""Integration by parts twice. Let $u=x^2$, $\mathrm dv=\cos\tfrac{x}{3}\,\mathrm dx$.\\nThen $\mathrm du=2x\,\mathrm dx$, $v=3\sin\tfrac{x}{3}$.\\n$I=\Bigl[3x^2\sin\tfrac{x}{3}\Bigr]_0^\pi-\displaystyle\int_0^\pi 6x\sin\tfrac{x}{3}\,\mathrm dx$\\n$=3\pi^2\sin\tfrac{\pi}{3}-6J$, where $J=\displaystyle\int_0^\pi x\sin\tfrac{x}{3}\,\mathrm dx$.\\nFor $J$: parts again — $u=x$, $\mathrm dv=\sin\tfrac{x}{3}\,\mathrm dx$ → $\mathrm du=\mathrm dx$, $v=-3\cos\tfrac{x}{3}$.\\n$J=\Bigl[-3x\cos\tfrac{x}{3}\Bigr]_0^\pi+\displaystyle\int_0^\pi 3\cos\tfrac{x}{3}\,\mathrm dx$\\n$=-3\pi\cos\tfrac{\pi}{3}+\Bigl[9\sin\tfrac{x}{3}\Bigr]_0^\pi=-\dfrac{3\pi}{2}+9\sin\tfrac{\pi}{3}=-\dfrac{3\pi}{2}+\dfrac{9\sqrt3}{2}$.\\nSubstitute back: $I=3\pi^2\cdot\dfrac{\sqrt3}{2}-6\left(-\dfrac{3\pi}{2}+\dfrac{9\sqrt3}{2}\right)$\\n$=\dfrac{3\sqrt3}{2}\pi^2+9\pi-27\sqrt3$.\\n$\boxed{I=\dfrac{3\sqrt3}{2}\pi^2+9\pi-27\sqrt3}$""",
}

def main():
    with open(FILE, 'r', encoding='utf-8') as f:
        data = f.read()

    count = 0
    for qno, sol_text in sorted(solutions.items()):
        qid = f'"id":"cie_p3_25FM32_q{qno}"'
        idx = data.find(qid)
        if idx == -1:
            print(f"WARNING: {qid} not found")
            continue
        # find the next '"solution":"' after qid
        search_from = idx + len(qid)
        sol_marker = '"solution":""'
        sol_idx = data.find(sol_marker, search_from)
        if sol_idx == -1:
            print(f"WARNING: empty solution not found after {qid}")
            continue

        # Build replacement: "solution":<json-encoded-solution>
        escaped_sol = json.dumps(sol_text, ensure_ascii=False)  # returns "...sol..."
        replacement = '"solution":' + escaped_sol
        data = data[:sol_idx] + replacement + data[sol_idx+len(sol_marker):]
        count += 1
        print(f"  Q{qno}: replaced (len={len(sol_text)})")

    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(data)

    print(f"\nDone: injected solutions for {count}/11 questions")

if __name__ == '__main__':
    main()
