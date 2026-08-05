/* ============================================================
 * 考点速查 Cheatsheet 数据
 * 结构： CHEATSHEET["<Board>|<Subject>"]["<章节名>"] = {
 *          formulas: [ "LaTeX 公式/要点 ...", ... ],
 *          notes:    [ "注意事项 / 解题套路 ...", ... ]
 *        }
 * 章节名必须与 data.js 中 SEED 题目的 chapter 字段一致（含大小写）。
 * 公式与注意事项结合该科目考纲及已录入真题的常见考法浓缩而成。
 * ============================================================ */
const CHEATSHEET = {

  /* ===================== CIE P3 (9709) ===================== */
  "CIE|P3": {
    "Algebra (factor theorem and remainder theorem)": {
      formulas: [
        "余式定理 Remainder Theorem：$f(x)$ 除以 $(x-a)$ 的余式为 $f(a)$。",
        "因式定理 Factor Theorem：$(x-a)$ 是 $f(x)$ 的因式 $\\iff f(a)=0$。",
        "$f(x)$ 除以 $(ax-b)$ 的余式为 $f\\!\\left(\\tfrac{b}{a}\\right)$。",
        "多项式除法 / 综合除法：降幂排列后逐项相除，余式次数 $<$ 除式次数。",
        "若已知三个因式或三个根，可设 $f(x)=k(x-\\alpha)(x-\\beta)(x-\\gamma)$ 并由某点定 $k$。"
      ],
      notes: [
        "遇到“证明 $(x-a)$ 是因式”直接用因式定理算 $f(a)=0$。",
        "求余数优先用余式定理，不必做完整长除法。",
        "整除条件：$\\dfrac{f(x)}{x-a}$ 余式为 $0$，即 $f(a)=0$。",
        "真题常把因式定理与“完全平分”“求待定系数 $p,q$”结合，先由已知根列方程。"
      ]
    },

    "Algebra (modulus functions)": {
      formulas: [
        "$|x|=\\begin{cases}x,&x\\ge 0\\\\-x,&x<0\\end{cases}$，表示数轴上到原点的距离。",
        "$|f(x)|=k\\ (k\\ge0)\\iff f(x)=k\\ \\text{或}\\ f(x)=-k$。",
        "$|f(x)|=|g(x)|\\iff f(x)=\\pm g(x)$。",
        "$|f(x)|<k\\ (k>0)\\iff -k<f(x)<k$；$|f(x)|>k\\iff f(x)<-k\\ \\text{或}\\ f(x)>k$。",
        "$|x-a|$ 表示点 $x$ 到点 $a$ 的距离。"
      ],
      notes: [
        "解含绝对值的方程/不等式必须分情况讨论（或利用距离几何意义）。",
        "分段后得到的解要代回原区间检验是否落在对应定义域内。",
        "解 $|f(x)|<k$ 注意 $k$ 必须 $>0$；$k<0$ 时无解。",
        "画图（V 形图像）是判断交点与解集的最稳妥方法。"
      ]
    },

    "Algebra (partial fractions and binomial expansions)": {
      formulas: [
        "真分式才可直接分解；若分子次数 $\\ge$ 分母，先做多项式除法。",
        "线性因式：$\\dfrac{A}{ax+b}$；重复线性：$\\dfrac{A}{ax+b}+\\dfrac{B}{(ax+b)^2}$。",
        "不可约二次：$\\dfrac{Ax+B}{ax^2+bx+c}$（分子设为一次式）。",
        "二项展开 $(1+x)^n=1+nx+\\dfrac{n(n-1)}{2!}x^2+\\dfrac{n(n-1)(n-2)}{3!}x^3+\\cdots$，$|x|<1$。",
        "$(a+x)^n=a^n\\!\\left(1+\\dfrac{x}{a}\\right)^n$，收敛条件 $\\left|\\dfrac{x}{a}\\right|<1$。"
      ],
      notes: [
        "部分分式系数常用“代入特殊值”或“比较系数”法求。",
        "展开前务必把式子整理成 $(1+\\text{小量})^n$ 形式，并写出收敛域 $|x|<1$。",
        "真题常把部分分式结果与积分或级数展开联动（先分解再展开/积分）。",
        "$n$ 为非整数时，二项级数有无穷多项，截断到所需阶数即可。"
      ]
    },

    "Differentiation": {
      formulas: [
        "链式法则 $\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$；乘积 $\\dfrac{d}{dx}(uv)=u'v+uv'$；商 $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$。",
        "隐函数：方程两边对 $x$ 求导，$y$ 视为 $x$ 的函数，出现 $\\dfrac{dy}{dx}$。",
        "参数方程：$\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}$；$\\dfrac{d^2y}{dx^2}=\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)\\Big/\\dfrac{dx}{dt}$。",
        "驻点 $f'(x)=0$；二阶导数 $f''(x)$ 判凹凸/极值：$f''>0$ 极小，$f''<0$ 极大。",
        "相关速率：对时间 $t$ 隐式求导，$\\dfrac{dy}{dt}=\\dfrac{dy}{dx}\\cdot\\dfrac{dx}{dt}$。"
      ],
      notes: [
        "隐函数求导时不要漏掉 $y$ 项带来的 $\\dfrac{dy}{dx}$（链式）。",
        "参数方程求二阶导易错：先求 $dy/dx$，再对 $t$ 求导并除以 $dx/dt$。",
        "求切线斜率即在某点算 $dy/dx$；法线斜率是其负倒数。",
        "真题中“求最大/最小值”“证明驻点”多用一阶/二阶导配合。"
      ]
    },

    "Logarithmic and exponential functions": {
      formulas: [
        "$\\ln(ab)=\\ln a+\\ln b$，$\\ln\\!\\left(\\dfrac{a}{b}\\right)=\\ln a-\\ln b$，$\\ln(a^n)=n\\ln a$。",
        "$e^{\\ln x}=x$，$a^x=e^{x\\ln a}$；$\\dfrac{d}{dx}(a^x)=a^x\\ln a$。",
        "$\\dfrac{d}{dx}(\\ln x)=\\dfrac1x$；$\\dfrac{d}{dx}(e^{kx})=ke^{kx}$。",
        "换底公式 $\\log_a b=\\dfrac{\\ln b}{\\ln a}$。",
        "解指数方程通常两边取 $\\ln$：$\\ln(a^x)=\\ln b\\Rightarrow x\\ln a=\\ln b$。"
      ],
      notes: [
        "$\\ln x$ 定义域 $x>0$；无理方程取 $\\ln$ 前确认两边为正。",
        "指数/对数方程先化为同底或取 $\\ln$ 再解。",
        "真题常结合微分：如 $y=x^x$ 用取 $\\ln$ 后隐式求导。",
        "积分中 $\\int\\! \\dfrac{f'(x)}{f(x)}dx=\\ln|f(x)|+C$ 是高频套路。"
      ]
    },

    "Trigonometry": {
      formulas: [
        "$\\sec\\theta=\\dfrac1{\\cos\\theta}$，$\\csc\\theta=\\dfrac1{\\sin\\theta}$，$\\cot\\theta=\\dfrac1{\\tan\\theta}$。",
        "$\\sec^2\\theta=1+\\tan^2\\theta$；$\\csc^2\\theta=1+\\cot^2\\theta$。",
        "和差：$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B$；$\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B$。",
        "二倍角：$\\sin2\\theta=2\\sin\\theta\\cos\\theta$，$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta$。",
        "$a\\cos\\theta+b\\sin\\theta=R\\cos(\\theta\\pm\\alpha)$，其中 $R=\\sqrt{a^2+b^2}$，$\\tan\\alpha=\\dfrac{b}{a}$。"
      ],
      notes: [
        "解三角方程务必写出通解并锁定题目给定区间（如 $0^\\circ\\le\\theta\\le360^\\circ$）。",
        "$R\\cos(\\theta-\\alpha)$ 合并时 $\\alpha$ 取主值，注意象限。",
        "反三角主值域：$\\arcsin\\in[-\\pi/2,\\pi/2]$，$\\arccos\\in[0,\\pi]$，$\\arctan\\in(-\\pi/2,\\pi/2)$。",
        "真题常考恒等式证明（化为单一三角函数）与求最值。"
      ]
    },

    "Integration": {
      formulas: [
        "$\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac1a\\ln|ax+b|+C$；$\\int\\!\\dfrac{f'}{f}\\,dx=\\ln|f|+C$。",
        "$\\int\\sec^2x\\,dx=\\tan x+C$；$\\int\\csc^2x\\,dx=-\\cot x+C$；$\\int\\tan x\\,dx=\\ln|\\sec x|+C$。",
        "分部积分 $\\int u\\,dv=uv-\\int v\\,du$。",
        "部分分式先分解再逐项积分（常出现 $\\ln$ 项）。",
        "梯形法则数值积分：$\\displaystyle\\int_a^b y\\,dx\\approx\\frac{h}{2}\\big[y_0+2(y_1+\\cdots+y_{n-1})+y_n\\big]$，$h=\\dfrac{b-a}{n}$。"
      ],
      notes: [
        "对数积分结果必须带绝对值 $|\\cdot|$。",
        "分部积分选 $u$ 的原则：多项式优先作 $u$，或使 $\\int v\\,du$ 更简单。",
        "换元后积分限随之改变，或在回代后再代原限。",
        "涉及 $\\dfrac{1}{x^2+a^2}$ 等标准形式要熟记对应反正切公式。"
      ]
    },

    "Differential equations": {
      formulas: [
        "可分离变量：$\\dfrac{dy}{dx}=f(x)g(y)\\ \\Rightarrow\\ \\displaystyle\\int\\!\\frac{1}{g(y)}\\,dy=\\int\\! f(x)\\,dx$。",
        "积分后得到隐式通解，再用初值条件定常数 $C$。",
        "一阶方程形式 $\\dfrac{dy}{dx}=f(x)g(y)$ 均可分离。",
        "物理/几何应用：先据题意建立 $\\dfrac{dy}{dx}=\\cdots$ 再求解。"
      ],
      notes: [
        "分离变量时把含 $y$ 的全移到一侧、含 $x$ 的全移到另一侧。",
        "初值问题一定要把给定点 $(x_0,y_0)$ 代入求 $C$，得到特解。",
        "注意 $g(y)=0$ 对应的常数解（如 $y=0$）是否遗漏。",
        "真题常以“人口增长/冷却/斜率场”为背景建模。"
      ]
    },

    "Complex numbers": {
      formulas: [
        "$z=x+iy=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$，其中 $r=|z|=\\sqrt{x^2+y^2}$，$\\theta=\\arg z$。",
        "共轭 $\\bar z=x-iy$，且 $z\\bar z=|z|^2$；$\\overline{z_1+z_2}=\\bar z_1+\\bar z_2$。",
        "棣莫弗 $(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$。",
        "方程 $z^n=w$ 有 $n$ 个根，模为 $|w|^{1/n}$，辐角等间隔 $\\dfrac{2\\pi}{n}$。",
        "Argand 图中 $|z-a|=r$ 是以 $a$ 为圆心、$r$ 为半径的圆。"
      ],
      notes: [
        "主辐角范围取 $(-\\pi,\\pi]$（或 $[0,2\\pi)$），按题目约定。",
        "解方程常把复数等式分为实部=实部、虚部=虚部。",
        "求 $n$ 次方根务必画出等间隔分布，避免漏根或重复。",
        "几何题善用 $|z-a|$ 距离、$|z-a|=|z-b|$ 垂直平分线的意义。"
      ]
    },

    "Vectors": {
      formulas: [
        "直线向量方程：$\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{b}$（$\\mathbf{b}$ 为方向向量）。",
        "两向量夹角：$\\cos\\theta=\\dfrac{\\mathbf{b}_1\\cdot\\mathbf{b}_2}{|\\mathbf{b}_1||\\mathbf{b}_2|}$。",
        "标量积 $\\mathbf{u}\\cdot\\mathbf{v}=u_1v_1+u_2v_2+u_3v_3=|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$。",
        "点到直线距离：$d=\\dfrac{|\\mathbf{b}\\times(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{b}|}$。",
        "两线交点：令对应坐标相等解参数；平行则无交点。"
      ],
      notes: [
        "方向向量可任意缩放（约去公因子更简洁）。",
        "判断共面/相交先比较方向向量是否平行。",
        "距离与夹角题多用标量积，注意取绝对值。",
        "几何意义（垂直⟺点积为0，平行⟺叉积为0）是快速判别关键。"
      ]
    },

    "Numerical solution of equations": {
      formulas: [
        "二分法：若 $f(a),f(b)$ 异号，则在 $(a,b)$ 内有根，取中点迭代缩小区间。",
        "迭代 $x_{n+1}=g(x_n)$ 收敛的充要（局部）条件：$|g'(\\alpha)|<1$，其中 $\\alpha$ 为根。",
        "线性插值/试位法：用弦与 $x$ 轴交点逼近根。",
        "误差估计：二分第 $n$ 步误差 $<\\dfrac{b-a}{2^n}$。"
      ],
      notes: [
        "迭代法前先证明 $|g'(x)|<1$ 于根附近以保证收敛。",
        "二分法要求区间两端函数值异号（介值定理）。",
        "真题常给递推式，要求“证明其收敛到方程根”→ 证 $g(\\alpha)=\\alpha$ 且 $|g'(\\alpha)|<1$。",
        "注意题目要求的精度（如 1 d.p. / 2 d.p.）决定迭代次数。"
      ]
    }
  },

  /* ===================== Edexcel FP2 ===================== */
  "Edexcel|FP2": {
    "INEQUALITIES": {
      formulas: [
        "$|ax+b|<k\\ (k>0)\\iff -k<ax+b<k$；$|ax+b|>k\\iff ax+b<-k\\ \\text{或}\\ >k$。",
        "分式不等式：用临界点 + 符号表，或两边乘平方 $(分母)^2$（恒正）消分母。",
        "$\\dfrac{(x-a)(x-b)}{x-c}>0$：以所有临界点分区间讨论符号。",
        "图解法：比较两函数图像高低得到解集。"
      ],
      notes: [
        "切勿直接乘分母（符号未知会反转不等号）——改用符号表或乘平方。",
        "临界点（使分子/分母为0的点）都要单独检验是否取等。",
        "乘 $(分母)^2$ 的前提是分母 $\\neq0$，最后排除使分母为0的点。",
        "真题常考含绝对值与分式的混合不等式，分段+表格最稳。"
      ]
    },

    "SERIES": {
      formulas: [
        "$\\displaystyle\\sum_{r=1}^n r=\\frac{n(n+1)}{2}$；$\\displaystyle\\sum r^2=\\frac{n(n+1)(2n+1)}{6}$；$\\displaystyle\\sum r^3=\\left[\\frac{n(n+1)}{2}\\right]^2$。",
        "Method of differences：写成 $f(r)-f(r+1)$ 形式后裂项相消。",
        "求和时把通项拆成标准求和式的线性组合再分别代入。",
        "验证：用 $n=1,2$ 检验公式正确性。"
      ],
      notes: [
        "标准求和公式必须记牢并能反用。",
        "Method of differences 关键是构造“相邻项之差”，中间项全部抵消，只剩首尾。",
        "含 $(-1)^r$ 的交错级数注意符号规律。",
        "真题常先给递推/通项，要求化简求和并证明某式成立。"
      ]
    },

    "COMPLEX NUMBERS": {
      formulas: [
        "指数形式 $z=re^{i\\theta}$，其中 $r=|z|$，$\\theta=\\arg z$；$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$。",
        "乘除：$z_1z_2=r_1r_2e^{i(\\theta_1+\\theta_2)}$；$\\dfrac{z_1}{z_2}=\\dfrac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}$。",
        "棣莫弗 + 欧拉：$z^n=r^ne^{in\\theta}=r^n(\\cos n\\theta+i\\sin n\\theta)$。",
        "$z^n=w$ 的 $n$ 个根：$|z|=|w|^{1/n}$，$\\arg z=\\dfrac{\\arg w+2k\\pi}{n},\\ k=0,\\dots,n-1$。",
        "Loci：$|z-a|=r$ 圆；$|z-a|=|z-b|$ 垂直平分线；$\\arg(z-a)=\\theta$ 射线。"
      ],
      notes: [
        "指数/极坐标形式做乘除幂运算远比直角坐标便捷。",
        "求 $n$ 次方根务必写出全部 $n$ 个、等间隔 $2\\pi/n$。",
        "Loci 作图：先识别几何意义（圆/直线/射线）再描。",
        "$\\arg(z-a)=\\theta$ 是从 $a$ 出发的射线（点 $a$ 本身不取到）。"
      ]
    },

    "FURTHER ARGAND DIAGRAMS": {
      formulas: [
        "$|z-a|=r$：以 $a$ 为圆心、$r$ 为半径的圆（边界包含）。",
        "$|z-a|<|z-b|$：到 $a$ 比到 $b$ 更近的半平面（垂直平分线靠 $a$ 一侧）。",
        "$\\arg(z-a)=\\theta$：从 $a$ 出发、辐角为 $\\theta$ 的射线。",
        "$\\alpha<\\arg(z-a)<\\beta$：以 $a$ 为顶点的扇形区域。",
        "$|z-a|+|z-b|=k\\ (k>|a-b|)$：椭圆（焦点 $a,b$）。"
      ],
      notes: [
        "不等式区域要正确判断“含不含边界”“阴影哪一侧”。",
        "$\\arg(z-a)=\\theta$ 射线不含端点 $a$；若加范围则成扇形。",
        "作图时先把 $|z-a|$ 翻译成“到 $a$ 的距离”。",
        "真题常要求“shade the region”，务必标注边界虚实与阴影方向。"
      ]
    },

    "FIRST-ORDER DIFFERENTIAL EQUATIONS": {
      formulas: [
        "可分离变量：$\\dfrac{dy}{dx}=f(x)g(y)\\Rightarrow\\int\\!\\dfrac{1}{g(y)}dy=\\int\\!f(x)dx$。",
        "积分因子法（线性）：$\\dfrac{dy}{dx}+P(x)y=Q(x)$，积分因子 $\\text{IF}=e^{\\int P(x)dx}$。",
        "乘以 IF 后左边化为 $\\dfrac{d}{dx}(y\\cdot\\text{IF})$，故 $y\\cdot\\text{IF}=\\int Q(x)\\cdot\\text{IF}\\,dx$。",
        "最后用初值 $(x_0,y_0)$ 确定积分常数。"
      ],
      notes: [
        "积分因子法前必须把方程化为标准形式 $y'+P(x)y=Q(x)$。",
        "$\\int P(x)dx$ 的常数可略（取最简单的原函）。",
        "乘 IF 后注意左边恰好是乘积导数，便于积分。",
        "真题常给初值求特解，勿忘代点求 $C$。"
      ]
    },

    "SECOND-ORDER DIFFERENTIAL EQUATIONS": {
      formulas: [
        "常系数齐次：$ay''+by'+cy=0$，辅助方程 $am^2+bm+c=0$。",
        "根互异实根 $m_1,m_2$：$y=Ae^{m_1x}+Be^{m_2x}$；重根 $m$：$y=(A+Bx)e^{mx}$。",
        "复根 $\\alpha\\pm i\\beta$：$y=e^{\\alpha x}(A\\cos\\beta x+B\\sin\\beta x)$。",
        "通解 = 补函数 CF + 特解 PI：$y=\\text{CF}+\\text{PI}$。",
        "PI 待定系数：右端为多项式/指数/三角时设对应形式（与 CF 重复则乘 $x$）。"
      ],
      notes: [
        "先求 CF（解辅助方程），再按右端形式设 PI。",
        "PI 与 CF 形式冲突时必须乘 $x$（或 $x^2$）避免重复。",
        "初值问题用两个条件定 $A,B$（注意需对通解求导代入）。",
        "真题常把二阶方程与力学/电路/振动背景结合。"
      ]
    },

    "MACLAURIN AND TAYLOR SERIES": {
      formulas: [
        "Maclaurin：$f(x)=f(0)+f'(0)x+\\dfrac{f''(0)}{2!}x^2+\\dfrac{f^{(3)}(0)}{3!}x^3+\\cdots$。",
        "Taylor 于 $x=a$：$f(x)=f(a)+f'(a)(x-a)+\\dfrac{f''(a)}{2!}(x-a)^2+\\cdots$。",
        "常用展开：$\\sin x=x-\\dfrac{x^3}{3!}+\\cdots$；$\\cos x=1-\\dfrac{x^2}{2!}+\\cdots$；$e^x=1+x+\\dfrac{x^2}{2!}+\\cdots$。",
        "$\\ln(1+x)=x-\\dfrac{x^2}{2}+\\dfrac{x^3}{3}-\\cdots$；$(1+x)^n=1+nx+\\dfrac{n(n-1)}{2!}x^2+\\cdots$。"
      ],
      notes: [
        "逐项求导并在 $x=0$（或 $a$）处取值，列表不易错。",
        "熟记标准展开可快速写出常见函数的级数。",
        "用展开近似计算/求极限时，截断到所需阶数。",
        "真题常要求“展开到 $x^3$ 项”或“用展开求极限/近似积分”。"
      ]
    },

    "POLAR COORDINATES": {
      formulas: [
        "$x=r\\cos\\theta$，$y=r\\sin\\theta$；$r^2=x^2+y^2$，$\\tan\\theta=\\dfrac{y}{x}$。",
        "极坐标曲线 $r=f(\\theta)$ 的面积：$A=\\dfrac12\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$。",
        "弧长/切线斜率需先化为参数形式 $(r\\cos\\theta,\\,r\\sin\\theta)$ 再求导。",
        "两点 $(r_1,\\theta_1),(r_2,\\theta_2)$ 的距离由余弦定理求得。"
      ],
      notes: [
        "面积公式 $\\tfrac12\\int r^2d\\theta$ 是高频考点，注意上下限对应 $\\theta$ 区间。",
        "作图先列 $\\theta$–$r$ 表，标出关键点与对称性。",
        "直角坐标与极坐标互化时留意 $\\theta$ 的象限。",
        "真题常考求围成图形面积、或证明某曲线性质。"
      ]
    }
  }
};
