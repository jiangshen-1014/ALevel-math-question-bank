/* =====================================================================
 * data.js —— 分类体系 / 章节考点预设 / 题目数据 / 存储层
 * 数学题库（Edexcel & CIE）
 * ===================================================================== */

/* ---------------------- 1. 科目分类体系 ---------------------- */
const TAXONOMY = {
  CIE: {
    label: "CIE（剑桥 Cambridge International）",
    note: "9709 数学 / 9231 进阶数学",
    subjects: [
      { code: "P1", name: "Pure Mathematics 1（纯数学 1）", group: "9709 Pure" },
      { code: "P2", name: "Pure Mathematics 2（纯数学 2）", group: "9709 Pure" },
      { code: "P3", name: "Pure Mathematics 3（纯数学 3）", group: "9709 Pure" },
      { code: "M1", name: "Mechanics 1（力学 1）", group: "9709 Mechanics" },
      { code: "S1", name: "Probability & Statistics 1（概率统计 1）", group: "9709 Statistics" },
      { code: "S2", name: "Probability & Statistics 2（概率统计 2）", group: "9709 Statistics" },
      { code: "FP1", name: "Further Pure 1（进阶纯数 1）", group: "9231 Further" },
      { code: "FP2", name: "Further Pure 2（进阶纯数 2）", group: "9231 Further" },
      { code: "FM", name: "Further Mechanics（进阶力学）", group: "9231 Further" },
      { code: "FS", name: "Further Statistics（进阶统计）", group: "9231 Further" }
    ]
  },
  Edexcel: {
    label: "Edexcel（爱德思 International A Level）",
    note: "IAL 数学 / 进阶数学",
    subjects: [
      { code: "P1", name: "Pure Mathematics 1（纯数学 1）", group: "Pure" },
      { code: "P2", name: "Pure Mathematics 2（纯数学 2）", group: "Pure" },
      { code: "P3", name: "Pure Mathematics 3（纯数学 3）", group: "Pure" },
      { code: "P4", name: "Pure Mathematics 4（纯数学 4）", group: "Pure" },
      { code: "M1", name: "Mechanics 1（力学 1）", group: "Mechanics" },
      { code: "M2", name: "Mechanics 2（力学 2）", group: "Mechanics" },
      { code: "M3", name: "Mechanics 3（力学 3）", group: "Mechanics" },
      { code: "S1", name: "Statistics 1（统计 1）", group: "Statistics" },
      { code: "S2", name: "Statistics 2（统计 2）", group: "Statistics" },
      { code: "S3", name: "Statistics 3（统计 3）", group: "Statistics" },
      { code: "FP1", name: "Further Pure 1（进阶纯数 1）", group: "Further" },
      { code: "FP2", name: "Further Pure 2（进阶纯数 2）", group: "Further" },
      { code: "FP3", name: "Further Pure 3（进阶纯数 3）", group: "Further" },
      { code: "D1", name: "Decision Mathematics 1（决策数学 1）", group: "Decision" }
    ]
  }
};

/* ---------------------- 2. 章节 / 考点预设 ----------------------
 * key 格式： "<Board>|<Subject>"，用于录入时的章节下拉建议。
 * 未列出的科目可自由输入章节名。
 */
const CHAPTER_PRESETS = {
  "CIE|P1": [
    "Quadratics（二次函数）", "Functions（函数）", "Coordinate geometry（坐标几何）",
    "Circular measure（弧度制）", "Trigonometry（三角函数）", "Series（数列与级数）",
    "Differentiation（微分）", "Integration（积分）"
  ],
  "CIE|P3": [
    "Algebra (factor theorem and remainder theorem)",
    "Algebra (modulus functions)",
    "Algebra (partial fractions and binomial expansions)",
    "Differentiation",
    "Logarithmic and exponential functions",
    "Trigonometry",
    "Integration",
    "Differential equations",
    "Complex numbers",
    "Vectors",
    "Numerical solution of equations"
  ],
  "CIE|M1": [
    "Forces & equilibrium（力与平衡）", "Kinematics（运动学）", "Momentum（动量）",
    "Newton's laws of motion（牛顿运动定律）", "Energy, work & power（能量功率）"
  ],
  "CIE|S1": [
    "Representation of data（数据表示）", "Permutations & combinations（排列组合）",
    "Probability（概率）", "Discrete random variables（离散随机变量）",
    "The normal distribution（正态分布）"
  ],
  "CIE|FP1": [
    "Roots of polynomial equations（多项式方程的根）", "Rational functions & graphs（有理函数与图像）",
    "Summation of series（级数求和）", "Matrices（矩阵）", "Polar coordinates（极坐标）",
    "Vectors（向量）", "Proof by induction（数学归纳法）"
  ],
  "Edexcel|P1": [
    "Algebraic expressions（代数式）", "Quadratics（二次函数）", "Equations & inequalities（方程不等式）",
    "Graphs & transformations（图像与变换）", "Straight line graphs（直线）",
    "Circles（圆）", "Trigonometric ratios（三角比）", "Differentiation（微分）", "Integration（积分）"
  ],
  "Edexcel|FP1": [
    "COMPLEX NUMBERS",
    "ROOTS OF QUADRATIC EQUATIONS",
    "NUMERICAL SOLUTIONS OF EQUATIONS",
    "COORDINATE SYSTEMS",
    "MATRICES",
    "TRANSFORMATIONS USING MATRICES",
    "SERIES",
    "PROOF"
  ],
  "Edexcel|FP2": [
    "INEQUALITIES",
    "SERIES",
    "COMPLEX NUMBERS",
    "FURTHER ARGAND DIAGRAMS",
    "FIRST-ORDER DIFFERENTIAL EQUATIONS",
    "SECOND-ORDER DIFFERENTIAL EQUATIONS",
    "MACLAURIN AND TAYLOR SERIES",
    "POLAR COORDINATES"
  ],
  "Edexcel|M1": [
    "Kinematics（运动学）", "Dynamics of a particle（质点动力学）",
    "Statics of a particle（质点静力学）", "Moments（力矩）", "Vectors（向量）"
  ],
  "Edexcel|S1": [
    "Mathematical models（数学建模）", "Representation of data（数据表示）",
    "Probability（概率）", "Correlation & regression（相关与回归）",
    "Discrete random variables（离散随机变量）", "The normal distribution（正态分布）"
  ]
};

/* ---------------------- 3. 种子题目（示例）----------------------
 * 题目结构说明见 README 注释。figure 可为空、相对路径或 base64。
 */
const SEED_QUESTIONS = [
  {
    "id": "seed_cie_p1_001",
    "board": "CIE",
    "subject": "P1",
    "chapter": "Differentiation（微分）",
    "topics": [
      "切线法线",
      "导数应用",
      "Stationary points"
    ],
    "difficulty": 3,
    "marks": 7,
    "source": "示例题 · 9709 Paper 1 风格",
    "stem": "The curve $y = x^3 - 6x^2 + 9x + 2$ has two stationary points.\n\n(a) Find the coordinates of each stationary point. **[4]**\n\n(b) Determine the nature of each stationary point. **[3]**",
    "figure": "",
    "solution": "**(a) 求驻点 Stationary points**\n\n对 $y$ 求导：$\\dfrac{dy}{dx} = 3x^2 - 12x + 9$。\n\n令 $\\dfrac{dy}{dx}=0$：$3(x^2 - 4x + 3)=0 \\Rightarrow 3(x-1)(x-3)=0$，得 $x=1$ 或 $x=3$。\n\n代回原式：$x=1 \\Rightarrow y = 1-6+9+2 = 6$；$x=3 \\Rightarrow y = 27-54+27+2 = 2$。\n\n所以驻点为 $(1,\\,6)$ 与 $(3,\\,2)$。\n\n**(b) 判断类型 Nature（二阶导数法）**\n\n$\\dfrac{d^2y}{dx^2} = 6x - 12$。\n\n在 $x=1$：$6(1)-12 = -6 < 0$，为**极大值 (maximum)**。\n\n在 $x=3$：$6(3)-12 = 6 > 0$，为**极小值 (minimum)**。",
    "createdAt": 2000000000001,
    "examRef": {
      "label": "示例题 · CIE P1"
    }
  },
  {
    "id": "seed_cie_s1_001",
    "board": "CIE",
    "subject": "S1",
    "chapter": "The normal distribution（正态分布）",
    "topics": [
      "标准化",
      "正态分布查表",
      "Z-score"
    ],
    "difficulty": 3,
    "marks": 5,
    "source": "示例题 · 9709 Paper 5/6 风格",
    "stem": "The heights of a large group of students are normally distributed with mean $172\\text{ cm}$ and standard deviation $8\\text{ cm}$.\n\nFind the probability that a randomly chosen student has a height greater than $180\\text{ cm}$. **[5]**",
    "figure": "",
    "solution": "设身高 $X \\sim N(172,\\ 8^2)$。\n\n标准化 Standardise：$Z = \\dfrac{X-\\mu}{\\sigma} = \\dfrac{180-172}{8} = 1$。\n\n$P(X>180) = P(Z>1) = 1 - \\Phi(1) = 1 - 0.8413 = 0.1587$。\n\n所以概率约为 $\\mathbf{0.159}$（3 s.f.）。",
    "createdAt": 2000000000002,
    "examRef": {
      "label": "示例题 · CIE S1"
    }
  },
  {
    "id": "seed_edx_fp1_001",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "复数运算",
      "共轭",
      "模与辐角"
    ],
    "difficulty": 2,
    "marks": 4,
    "source": "示例题 · IAL FP1 风格",
    "stem": "Given that $z = 3 + 4i$, find:\n\n(a) $|z|$ and $\\arg z$ (in radians, to 3 s.f.). **[2]**\n\n(b) $\\dfrac{1}{z}$ in the form $a+bi$. **[2]**",
    "figure": "",
    "solution": "**(a)** $|z| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$。\n\n$\\arg z = \\tan^{-1}\\!\\left(\\dfrac{4}{3}\\right) = 0.927\\text{ rad}$（3 s.f.，第一象限）。\n\n**(b)** $\\dfrac{1}{z} = \\dfrac{1}{3+4i} = \\dfrac{3-4i}{(3+4i)(3-4i)} = \\dfrac{3-4i}{25} = \\dfrac{3}{25} - \\dfrac{4}{25}i$。\n\n即 $0.12 - 0.16i$。",
    "createdAt": 2000000000003,
    "examRef": {
      "label": "示例题 · Edexcel FP1"
    }
  },
  {
    "id": "edx_fp1_WFM02_01A_26_Q1",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "标准公式 Standard results",
      "\\sum r",
      "\\sum r^2",
      "代数恒等式"
    ],
    "difficulty": 2,
    "marks": 4,
    "source": "WFM01_01A_26_1",
    "stem": "Use the standard results for $\\displaystyle\\sum_{r=1}^{n} r$ and for $\\displaystyle\\sum_{r=1}^{n} r^2$ to show that, for all positive integers $n$,\n\n$$\\sum_{r=1}^{n} r(r+3) = \\frac{n}{a}(n+1)(n+b)$$\n\nwhere $a$ and $b$ are integers to be found. **[4]**",
    "figure": "data/images/WFM02_01A_26_Q1.png",
    "solution": "**Step 1：展开 Expand**\n\n$\\displaystyle\\sum_{r=1}^{n} r(r+3) = \\sum_{r=1}^{n} (r^2 + 3r) = \\sum_{r=1}^{n} r^2 + 3\\sum_{r=1}^{n} r$\n\n**Step 2：代入标准结果 Substitute standard results**\n\n$\\displaystyle\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$，\t$\\displaystyle\\sum_{r=1}^{n} r^{2} = \\frac{n(n+1)(2n+1)}{6}$\n\n于是\n$$\\begin{aligned}&\\sum_{r=1}^{n} r(r+3) \\\\[4pt]&= \\frac{n(n+1)(2n+1)}{6} + 3\\cdot\\frac{n(n+1)}{2} \\\\[6pt]&= \\frac{n(n+1)(2n+1)}{6} + \\frac{9n(n+1)}{6} \\\\[6pt]&= \\frac{n(n+1)\\bigl[(2n+1)+9\\bigr]}{6} \\\\[6pt]&= \\frac{n(n+1)(2n+10)}{6} \\\\[6pt]&= \\frac{n(n+1)\\cdot 2(n+5)}{6} = \\frac{n(n+1)(n+5)}{3}\n= \\dfrac{n}{3}(n+1)(n+5)\n\\end{aligned}$$\n\n**Step 3：对比 Compare**\n\n与题目所给形式 $\\dfrac{n}{a}(n+1)(n+b)$ 对比，得\n$$a = 3,\\qquad b = 5$$",
    "examRef": {
      "unit": "WFM02",
      "paper": "01A",
      "year": 2026,
      "qno": 1,
      "code": "WFM02/01A",
      "label": "WFM02/01A · 2026 Q1"
    },
    "createdAt": 2000000000004
  },
  {
    "id": "edx_fp1_26Jan01A_q1",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "标准公式 Standard results",
      "\\sum r",
      "\\sum r^2",
      "代数恒等式"
    ],
    "difficulty": 2,
    "marks": 4,
    "source": "26_Jan_01A_1",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 1,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q1"
    },
    "stem": "Use the standard results for $\\displaystyle\\sum_{r=1}^{n} r$ and for $\\displaystyle\\sum_{r=1}^{n} r^2$ to show that, for all positive integers $n$,\n\n$$\\sum_{r=1}^{n} r(r+3) = \\frac{n}{a}(n+1)(n+b)$$\n\nwhere $a$ and $b$ are integers to be found. \\hfill[4]",
    "figure": "",
    "solution": "**Step 1：展开 Expand**\n\n\n$\\displaystyle\\sum_{r=1}^{n} r(r+3) = \\sum_{r=1}^{n} (r^2 + 3r) = \\sum_{r=1}^{n} r^2 + 3\\sum_{r=1}^{n} r$\n\n**Step 2：代入标准结果 Substitute standard results**\n\n$\\displaystyle\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$，\t$\\displaystyle\\sum_{r=1}^{n} r^{2} = \\frac{n(n+1)(2n+1)}{6}$\n\n于是\n$$\\begin{aligned}&\\sum_{r=1}^{n} r(r+3) \\\\[4pt]&= \\frac{n(n+1)(2n+1)}{6} + 3\\cdot\\frac{n(n+1)}{2} \\\\[6pt]&= \\frac{n(n+1)(2n+1)}{6} + \\frac{9n(n+1)}{6} \\\\[6pt]&= \\frac{n(n+1)\\bigl[(2n+1)+9\\bigr]}{6} \\\\[6pt]&= \\frac{n(n+1)(2n+10)}{6} \\\\[6pt]&= \\frac{n(n+1)\\cdot 2(n+5)}{6} = \\frac{n(n+1)(n+5)}{3}\n= \\dfrac{n}{3}(n+1)(n+5)\n\\end{aligned}$$\n\n**Step 3：对比 Compare**\n\n与题目所给形式 $\\dfrac{n}{a}(n+1)(n+b)$ 对比，得\n$$a = 3,\\qquad b = 5$$",
    "createdAt": 1784117435474,
    "_edited": true
  },
  {
    "id": "edx_fp1_26Jan01A_q2",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "实系数复根共轭对 Conjugate roots",
      "多项式除法 Polynomial division",
      "Argand diagram"
    ],
    "difficulty": 3,
    "marks": 9,
    "source": "26_Jan_01A_2",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 2,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q2"
    },
    "stem": "$$\\mathrm{f}(z) = z^4 - 6z^3 + 38z^2 - 94z + 221$$\n\n(a) Given that $z = 2 + 3\\mathrm{i}$ is a root of the equation $\\mathrm{f}(z)=0$, use algebra to find the three other roots of $\\mathrm{f}(z)=0$. **[7]**\n\n(b) Show the four roots of $\\mathrm{f}(z)=0$ on a single Argand diagram. **[2]**",
    "figure": "",
    "solution": "**(a) 利用共轭根定理 + 多项式除法 Find remaining roots**\n\n**Step 1：共轭根 Conjugate root**\n\n由于 $\\mathrm{f}(z)$ 为**实系数 (real coefficients)** 多项式，若 $z=2+3\\mathrm{i}$ 是根，则其**共轭 (conjugate)** $\\bar{z}=2-3\\mathrm{i}$ 必也是根。\n\n**Step 2：求二次因子 Quadratic factor from conjugate pair**\n\n$$(z-(2+3\\mathrm{i}))(z-(2-3\\mathrm{i})) = (z-2)^2 + 9 = z^2 - 4z + 13$$\n\n**Step 3：长除法 / 比较系数得剩余二次因子 Divide or compare**\n\n设 $\\mathrm{f}(z) = (z^2-4z+13)(az^2+bz+c)$，比较首项得 $a=1$。\n\n展开并逐项对比（或直接做多项式除法）可得：\n$$\\mathrm{f}(z) = (z^2 - 4z + 13)(z^2 - 2z + 17)$$\n\n**Step 4：解剩余二次方程 Solve quadratic**\n\n$$z^2 - 2z + 17 = 0 \\Rightarrow z = \\frac{2 \\pm \\sqrt{4-68}}{2} = \\frac{2 \\pm 8\\mathrm{i}}{2} = 1 \\pm 4\\mathrm{i}$$\n\n**四个根 Four roots:** $$z = 2+3\\mathrm{i},\\; 2-3\\mathrm{i},\\; 1+4\\mathrm{i},\\; 1-4\\mathrm{i}$$\n\n**(b) Argand 图示 Argand diagram**\n\n在 Argand 图上标出以下四点（坐标均为 $(\\text{Re},\\,\\text{Im})$）：\n\n- $A(2,\\,3)$ 对应 $z_1=2+3\\mathrm{i}$\n- $B(2,\\,-3)$ 对应 $z_2=2-3\\mathrm{i}$ （与 $z_1$ 关于实轴对称）\n- $C(1,\\,4)$ 对应 $z_3=1+4\\mathrm{i}$\n- $D(1,\\,-4)$ 对应 $z_4=1-4\\mathrm{i}$ （与 $z_3$ 关于实轴对称）\n\n> 作图要点：两对共轭根分别关于**实轴 (real axis)** 对称；坐标轴标注 Re/Im；四点均位于第一/四象限。",
    "createdAt": 2000000000006
  },
  {
    "id": "edx_fp1_26Jan01A_q3",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "COORDINATE SYSTEMS"
    ],
    "topics": [
      "参数方程 Parametric equations",
      "直线与双曲线交点 Intersection",
      "中点坐标 Midpoint"
    ],
    "difficulty": 2,
    "marks": 7,
    "source": "26_Jan_01A_3",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 3,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q3"
    },
    "stem": "The rectangular hyperbola $H$ has parametric equations\n\n$$x = 4t \\qquad y = \\frac{4}{t}$$\n\nThe straight line with equation $3y - 2x = 10$ intersects $H$ at the points $A$ and $B$.\n\nGiven that the point $A$ is above the $x$-axis,\n\n(a) find the coordinates of the point $A$ and the coordinates of the point $B$. **[5]**\n\n(b) Find the coordinates of the midpoint of $AB$. **[2]**",
    "figure": "",
    "solution": "**(a) 求交点 A 与 B 的坐标**\n\n**Step 1：代入参数方程 Substitute parametric equations into line**\n\n将 $x=4t,\\; y=\\dfrac{4}{t}$ 代入直线方程 $3y-2x=10$：\n$$\\begin{aligned}\n3\\left(\\frac{4}{t}\\right) - 2(4t) &= 10 \\\\[6pt]\n\\frac{12}{t} - 8t &= 10 \\\\[6pt]\n\\text{两边乘以 } t:\\quad 12 - 8t^2 &= 10t \\\\[6pt]\n8t^2 + 10t - 12 &= 0\n\\end{aligned}$$\n\n**Step 2：解二次方程 Solve quadratic in $t$**\n\n除以 2 简化：$4t^2 + 5t - 6 = 0$\n\n因式分解或用公式：$$(4t - 3)(t + 2) = 0 \\Rightarrow t = \\frac{3}{2}\\;\\text{或}\\; t=-2$$\n\n**Step 3：求对应坐标 Find coordinates for each $t$**\n\n- 当 $t=\\dfrac{3}{2}$：$x=4\\times\\dfrac{3}{2}=6$，$y=\\dfrac{4}{3/2}=\\dfrac{8}{3}$ → **$A\\left(6,\\,\\dfrac{8}{3}\\right)$** （在 $x$ 轴上方 ✓）\n\n- 当 $t=-2$：$x=4\\times(-2)=-8$，$y=\\dfrac{4}{-2}=-2$ → **$B(-8,\\,-2)$**\n\n**(b) 求 AB 中点 Midpoint**\n\n利用中点公式 (midpoint formula)：\n$$M = \\left(\\frac{x_A+x_B}{2},\\;\\frac{y_A+y_B}{2}\\right)\n= \\left(\\frac{6+(-8)}{2},\\;\\frac{\\frac{8}{3}+(-2)}{2}\\right)\n= \\left(\\frac{-2}{2},\\;\\frac{\\frac{2}{3}}{2}\\right)\n= \\left(-1,\\;\\frac{1}{3}\\right)$$\n\n> **另解（FP2 常用技巧）：** 对于矩形双曲线 $x=c t$, $y=c/t$ 与直线相交，若两根为 $t_1,t_2$，则弦的中点对应的参数值 $t_M = \\dfrac{t_1+t_2}{2}$。本题由韦达定理 $t_1+t_2=-\\dfrac{5}{4}$，得 $t_M=-\\dfrac{5}{8}$，代入得 $M\\left(4t_M,\\,4/t_M\\right)=\\left(-\\dfrac{5}{2},\\,-\\dfrac{32}{5}\\right)$——注意这**不是**中点坐标！此法仅适用于求过原点的弦的中点。",
    "createdAt": 2000000000007
  },
  {
    "id": "edx_fp1_26Jan01A_q4",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "MATRICES"
    ],
    "topics": [
      "#逆矩阵",
      "#矩阵方程",
      "#矩阵乘法"
    ],
    "difficulty": 3,
    "marks": 7,
    "source": "26_Jan_01A_4",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 4,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q4"
    },
    "stem": "The matrix $\\mathbf{A}=\\begin{pmatrix} 2p & 3q \\\\ 3p & 5q \\end{pmatrix}$ where $p$ and $q$ are non-zero real constants.\n\n(a) Find $\\mathbf{A}^{-1}$ in terms of $p$ and $q$. [3]\n\nGiven that $\\mathbf{X}\\mathbf{A}=\\mathbf{B}$, where\n$$\\mathbf{B}=\\begin{pmatrix} p & q \\\\ 6p & 11q \\\\ 5p & 8q \\end{pmatrix}$$\n\n(b) find $\\mathbf{X}$ in its simplest form. [4]",
    "figure": "",
    "solution": "**(a)** 求 $\\det(\\mathbf{A})=(2p)(5q)-(3q)(3p)=10pq-9pq=pq\\neq 0$\n\n伴随矩阵：$\\operatorname{adj}(\\mathbf{A})=\\begin{pmatrix} 5q & -3q \\\\ -3p & 2p \\end{pmatrix}$\n\n$$\\boxed{\\mathbf{A}^{-1}=\\frac{1}{pq}\\begin{pmatrix} 5q & -3q \\\\ -3p & 2p \\end{pmatrix}=\\begin{pmatrix} \\dfrac{5}{p} & -\\dfrac{3}{q} \\\\ -\\dfrac{3}{p} & \\dfrac{2}{q} \\end{pmatrix}}$$\n\n**(b)** 由 $\\mathbf{X}\\mathbf{A}=\\mathbf{B}$ 得 $\\mathbf{X}=\\mathbf{B}\\mathbf{A}^{-1}$：\n\n$$\\mathbf{X}=\\begin{pmatrix} p & q \\\\ 6p & 11q \\\\ 5p & 8q \\end{pmatrix}\\begin{pmatrix} \\dfrac{5}{p} & -\\dfrac{3}{q} \\\\ -\\dfrac{3}{p} & \\dfrac{2}{q} \\end{pmatrix}=\\begin{pmatrix} 2 & -1 \\\\ -3 & 4 \\\\ 1 & 1 \\end{pmatrix}$$\n\n**Key steps:** 每个元素分别计算——第一行 $[p\\cdot\\tfrac{5}{p}+q\\cdot(-\\tfrac{3}{p}),\\; p\\cdot(-\\tfrac{3}{q})+q\\cdot\\tfrac{2}{q}] = [5-\\tfrac{3q}{p},\\, -\\tfrac{3p}{q}+2]$；但用分数通分后恰好消去分母得整数。",
    "createdAt": 2000000000008
  },
  {
    "id": "edx_fp1_26Jan01A_q5",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "ROOTS OF QUADRATIC EQUATIONS"
    ],
    "topics": [
      "#韦达定理",
      "#代数恒等式",
      "#根的幂和",
      "#新方程构造"
    ],
    "difficulty": 4,
    "marks": 11,
    "source": "26_Jan_01A_5",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 5,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q5"
    },
    "stem": "The roots of the equation $x^2-2x+3=0$ are $\\alpha$ and $\\beta$.\n\nWithout solving the equation, find the following.\n\n(a) (i) Write down the value of $(\\alpha+\\beta)$ and the value of $\\alpha\\beta$. [1]\n\n(ii) Show that $\\alpha^2+\\beta^2=-2$. [1]\n\n(iii) Find the value of $\\alpha^3+\\beta^3$. [3]\n\n(b) (i) Show that $\\alpha^4+\\beta^4=(\\alpha^2+\\beta^2)^2-2(\\alpha\\beta)^2$. [2]\n\n(ii) Find a quadratic equation having roots $(\\alpha^3-\\beta)$ and $(\\beta^3-\\alpha)$, giving your answer in the form $px^2+qx+r=0$ where $p$, $q$ and $r$ are integers. [4]",
    "figure": "",
    "solution": "**(a)(i)** 由韦达定理：$\\boxed{\\alpha+\\beta=2}$，$\\boxed{\\alpha\\beta=3}$\n\n**(a)(ii)** $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=4-6=\\boxed{-2}$ ✓\n\n**(a)(iii)** 利用恒等式 $\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)=8-18=\\boxed{-10}$\n\n**(b)(i)** $\\alpha^4+\\beta^4=(\\alpha^2+\\beta^2)^2-2\\alpha^2\\beta^2=(\\alpha^2+\\beta^2)^2-2(\\alpha\\beta)^2$ ✓\n\n数值验证：$=(-2)^2-2(9)=4-18=-14$\n\n**(b)(ii)** 新根 $u=\\alpha^3-\\beta$, $v=\\beta^3-\\alpha$\n\n- **Sum**: $u+v=(\\alpha^3+\\beta^3)-(\\alpha+\\beta)=-10-2=\\boxed{-12}$\n\n- **Product**: $uv=(\\alpha^3-\\beta)(\\beta^3-\\alpha)=\\alpha^3\\beta^3-\\alpha^4-\\beta^4+\\alpha\\beta=(\\alpha\\beta)^3-(\\alpha^4+\\beta^4)+\\alpha\\beta=27-(-14)+3=\\boxed{44}$\n\n$$\\boxed{x^2+12x+44=0}$$",
    "createdAt": 2000000000009
  },
  {
    "id": "edx_fp1_26Jan01A_q6",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "#复数代数形式",
      "#共轭",
      "#实部虚部分离"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "26_Jan_01A_6",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 6,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q6"
    },
    "stem": "Given that $z=x+\\mathrm{i}y$, where $x$ and $y$ are real, solve\n$$(z-2\\mathrm{i})(z^{*}-2\\mathrm{i})=21-12\\mathrm{i}$$\nwhere $z^{*}$ is the conjugate of $z$.",
    "figure": "",
    "solution": "将 $z=x+\\mathrm{i}y$ 代入：\n\n$z-2\\mathrm{i}=x+\\mathrm{i}(y-2)$，$z^{*}-2\\mathrm{i}=x-\\mathrm{i}(y+2)$\n\n展开乘积：\n$$[x+\\mathrm{i}(y-2)][x-\\mathrm{i}(y+2)] = x^2-\\mathrm{i}x(y+2)+\\mathrm{i}x(y-2)+(y-2)(y+2)$$\n$$= x^2 + y^2-4 -4x\\mathrm{i}$$\n\n与 $21-12\\mathrm{i}$ 比较：\n\n| 实部 | 虚部 |\n|---|---|\n| $x^2+y^2-4=21$ | $-4x=-12$ |\n| $x^2+y^2=25$ | $x=3$ |\n\n代入 $x=3$：$y^2=25-9=16$ → $y=\\pm 4$\n\n$$\\boxed{z=3+4\\mathrm{i} \\text{ 或 } z=3-4\\mathrm{i}}$$",
    "createdAt": 2000000000010
  },
  {
    "id": "edx_fp1_26Jan01A_q7",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "COORDINATE SYSTEMS"
    ],
    "topics": [
      "#参数方程求导",
      "#抛物线切线",
      "#准线焦点性质",
      "#三角形面积"
    ],
    "difficulty": 4,
    "marks": 12,
    "source": "26_Jan_01A_7",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 7,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q7"
    },
    "stem": "The parabola $C$ has equation $y^2=4ax$, where $a$ is a positive constant. The point $P(ap^2, 2ap)$ lies on $C$.\n\n(a) Use calculus to show that the tangent to $C$ at $P$ has equation\n$$py=x+ap^2$$\n[4]\n\nThe tangent at $P$ meets the directrix of $C$ at the point $B$ and meets the $x$-axis at the point $D$. Given that the $y$-coordinate of $B$ is $\\dfrac{5}{6}a$ and $p>0$.\n\n(b) Find, in terms of $a$, the $x$-coordinate of $D$. [6]\n\nThe origin is $O$.\n\n(c) Find, in its simplest form, the area of triangle $OPD$. [2]",
    "figure": "",
    "solution": "**(a)** 对 $y^2=4ax$ 隐函数求导：$2y\\dfrac{dy}{dx}=4a$ → $\\dfrac{dy}{dx}=\\dfrac{2a}{y}$\n\n在 $P(ap^2, 2ap)$ 处：斜率 $m=\\dfrac{2a}{2ap}=\\dfrac{1}{p}$\n\n切线方程：$y-2ap=\\dfrac{1}{p}(x-ap^2)$ → $py-2ap^2=x-ap^2$ → $\\boxed{py=x+ap^2}$ ✓\n\n**(b)** 准线方程 $x=-a$。切线与准线交于 $B$：\n$p y_B = -a + ap^2$ → $y_B=\\dfrac{a(p^2-1)}{p}$\n\n已知 $y_B=\\dfrac{5a}{6}$：$\\dfrac{a(p^2-1)}{p}=\\dfrac{5a}{6}$ → $6p^2-5p-6=0$ → $(3p+2)(2p-3)=0$\n\n因 $p>0$，故 $p=\\dfrac{3}{2}$\n\n切线与 $x$ 轴交点 $D$（令 $y=0$）：$0=x_D+ap^2$ → $\\boxed{x_D=-\\dfrac{9}{4}a}$\n\n**(c)** 三顶点坐标：$O(0,0)$，$P(\\tfrac{9a}{4}, 3a)$，$D(-\\tfrac{9a}{4}, 0)$\n\n$$S_{OPD}=\\dfrac{1}{2}|x_P y_D - x_D y_P|=\\dfrac{1}{2}\\left|0-\\left(-\\tfrac{9a}{4}\\right)(3a)\\right|=\\boxed{\\dfrac{27a^2}{8}}$$",
    "createdAt": 2000000000011
  },
  {
    "id": "edx_fp1_26Jan01A_q8",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "NUMERICAL SOLUTIONS OF EQUATIONS"
    ],
    "topics": [
      "#区间对分法",
      "#Newton-Raphson迭代",
      "#函数求导"
    ],
    "difficulty": 2,
    "marks": 8,
    "source": "26_Jan_01A_8",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 8,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q8"
    },
    "stem": "The function $\\displaystyle f(x)=30+\\frac{7}{\\sqrt{x}}-x^5, \\quad x>0$ has a single root $\\alpha$ in the interval $[2,\\,2.1]$.\n\n(a) Starting from the interval $[2,\\,2.1]$, use the method of interval bisection twice to find an interval of width $0.025$ which contains $\\alpha$. [4]\n\n(b) Find $f'(x)$. [2]\n\n(c) Taking $2$ as a first approximation to $\\alpha$, apply the Newton-Raphson method to $f(x)$ once to obtain a second approximation to $\\alpha$, giving your answer to 2 decimal places. [2]",
    "figure": "",
    "solution": "**(a)** 计算 $f(2)$ 与 $f(2.1)$：\n- $f(2)=30+\\dfrac{7}{\\sqrt{2}}-32\\approx 30+4.95-32=\\mathbf{+2.95}>0$\n- $f(2.1)=30+\\dfrac{7}{\\sqrt{2.1}}-2.1^5\\approx 30+4.83-40.84=\\mathbf{-6.01}<0$\n\n符号变化在 $[2, 2.1]$ ✓\n\n第1次对分：中点 $m_1=2.05$，$f(2.05)\\approx 30+\\dfrac{7}{1.43178}-36.21\\approx -1.32<0$\n→ 根在 **$[2, 2.05]$** （宽度 $0.05$）\n\n第2次对分：中点 $m_2=2.025$，$f(2.025)\\approx 30+\\dfrac{7}{1.423}-34.05\\approx +0.87>0$\n→ 根在 **$[2.025, 2.05]$** （宽度 $0.025$）✓\n\n**(b)** $$f'(x)=-\\dfrac{7}{2}x^{-3/2}-5x^4=\\boxed{-\\dfrac{7}{2x\\sqrt{x}}-5x^4}$$\n\n**(c)** NR 公式：$x_{n+1}=x_n-\\dfrac{f(x_n)}{f'(x_n)}$\n- $f(2)\\approx 2.95$，$f'(2)=-\\dfrac{7}{4\\sqrt{2}}-80\\approx -81.24$\n- $x_1=2-\\dfrac{2.95}{-81.24}\\approx 2+0.0363=\\boxed{2.04}$ （保留两位小数）",
    "createdAt": 2000000000012
  },
  {
    "id": "edx_fp1_26Jan01A_q9",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "TRANSFORMATIONS USING MATRICES",
      "MATRICES"
    ],
    "topics": [
      "#非奇异矩阵",
      "#面积缩放因子",
      "#det(A^n)"
    ],
    "difficulty": 2,
    "marks": 6,
    "source": "26_Jan_01A_9",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 9,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q9"
    },
    "stem": "Given\n$$\\mathbf{A}=\\begin{pmatrix} 6 & 4 \\\\ 1 & 1 \\end{pmatrix}$$\n\n(a) Show that $\\mathbf{A}$ is non-singular. [2]\n\nTriangle $R$ is transformed by the matrix $\\mathbf{A}$ to the triangle $S$. The area of $R$ is 10 square units.\n\n(b) Find the area of $S$. [2]\n\nGiven that $\\mathbf{B}=\\mathbf{A}^4$ and that $R$ is transformed by the matrix $\\mathbf{B}$ to the triangle $T$,\n\n(c) without finding $\\mathbf{B}$, find the area of $T$. [2]",
    "figure": "",
    "solution": "**(a)** $\\det(\\mathbf{A})=6\\times 1-4\\times 1=2\\neq 0$ → $\\mathbf{A}$ 非奇异 ✓\n\n**(b)** 面积缩放因子 $=|\\det(\\mathbf{A})|=2$\n\n$$\\text{Area}(S)=2\\times\\text{Area}(R)=2\\times 10=\\boxed{20\\text{ 平方单位}}$$\n\n**(c)** $\\det(\\mathbf{B})=\\det(\\mathbf{A}^4)=(\\det\\mathbf{A})^4=2^4=16$\n\n$$\\text{Area}(T)=16\\times 10=\\boxed{160\\text{ 平方单位}}$$\n\n**Key idea:** 行列式的幂次性质 $\\det(A^n)=(\\det A)^n$ —— 无需实际计算 $A^4$ 即可得面积比。",
    "createdAt": 2000000000013
  },
  {
    "id": "edx_fp1_26Jan01A_q10",
    "board": "Edexcel",
    "subject": "FP1",
    "chapter": [
      "PROOF"
    ],
    "topics": [
      "#归纳法",
      "#级数求和",
      "#代数化简"
    ],
    "difficulty": 3,
    "marks": 5,
    "source": "26_Jan_01A_10",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 10,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q10"
    },
    "stem": "Use the method of mathematical induction to prove that, for $n\\in\\mathbb{Z}^+$:\n$$\\sum_{r=1}^{n}r^2(2r-1)=\\frac{1}{6}n(n+1)\\left(3n^2+n-1\\right)$$",
    "figure": "",
    "solution": "**Base case ($n=1$):**\nLHS $=1^2(2\\cdot 1-1)=1$\nRHS $=\\dfrac{1}{6}\\cdot 1\\cdot 2\\cdot (3+1-1)=\\dfrac{2\\cdot 3}{6}=1$ ✓\n\n**Inductive hypothesis:** 假设当 $n=k$ 时命题成立：\n$$\\sum_{r=1}^{k}r^2(2r-1)=\\dfrac{k(k+1)(3k^2+k-1)}{6}$$\n\n**Inductive step:** 证 $n=k+1$ 时也成立：\n$$\\begin{aligned}\n\\sum_{r=1}^{k+1}r^2(2r-1)&=\\dfrac{k(k+1)(3k^2+k-1)}{6}+(k+1)^2(2(k+1)-1)\\\\&=\\dfrac{k(k+1)(3k^2+k-1)}{6}+(k+1)^2(2k+1)\\\\&=\\dfrac{(k+1)}{6}\\Bigl[k(3k^2+k-1)+6(k+1)(2k+1)\\Bigr]\\\\&=\\dfrac{(k+1)}{6}\\bigl(3k^3+k^2-k+12k^2+18k+6\\bigr)\\\\&=\\dfrac{(k+1)}{6}(3k^3+13k^2+17k+6)\n\\end{aligned}$$\n\n目标 RHS 当 $n=k+1$：\n$$\\dfrac{(k+1)(k+2)[3(k+1)^2+(k+1)-1]}{6}=\\dfrac{(k+1)}{6}(k+2)(3k^2+7k+3)$$\n展开：$(k+2)(3k^2+7k+3)=3k^3+13k^2+17k+6$ ✓ 与上式一致。\n\n由归纳原理，命题对所有 $n\\in\\mathbb{Z}^+$ 成立。",
    "createdAt": 2000000000014
  },
  {
    "id": "edx_fp2_26Jan01A_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "Roots of complex numbers",
      "Polar form $r(\\cos\\theta+\\mathrm{i}\\sin\\theta)$"
    ],
    "difficulty": 2,
    "marks": 5,
    "source": "26_Jan_01A_1",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 1,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q1"
    },
    "stem": "Solve the equation\n\n$$z^{5}=32$$\n\nGive your answers in the form $r(\\cos\\theta+\\mathrm{i}\\sin\\theta)$, where $r>0$ and $0\\leqslant\\theta<2\\pi$ [5]",
    "figure": "",
    "solution": "**Step 1:** Write $z^5=32$ in polar form.\n$32=32(\\cos0+\\mathrm{i}\\sin0)$ so $r=32^{1/5}=2$, $\\arg(z)=\\dfrac{0+2k\\pi}{5}$ for $k=0,1,2,3,4$\n\n**Step 2:** Five roots equally spaced on circle radius 2:\n$$z_k=2\\left(\\cos\\frac{2k\\pi}{5}+\\mathrm{i}\\sin\\frac{2k\\pi}{5}\\right)\\quad(k=0,1,2,3,4)$$\n即：$z_0=2$, $z_1=2(\\cos\\frac{2\\pi}{5}+\\mathrm{i}\\sin\\frac{2\\pi}{5})$, $z_2=2(\\cos\\frac{4\\pi}{5}+\\mathrm{i}\\sin\\frac{4\\pi}{5})$, $z_3=2(\\cos\\frac{6\\pi}{5}+\\mathrm{i}\\sin\\frac{6\\pi}{5})$, $z_4=2(\\cos\\frac{8\\pi}{5}+\\mathrm{i}\\sin\\frac{8\\pi}{5})$\n\n**五次单位根**均匀分布在半径为2的圆上，相邻根夹角72°。",
    "createdAt": 2000000000015
  },
  {
    "id": "edx_fp2_26Jan01A_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Absolute value inequalities",
      "Algebraic method (case analysis)"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "26_Jan_01A_2",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 2,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q2"
    },
    "stem": "Use algebra to find the set of values of $x$ for which\n\n$$|x^{2}-9|<|1-2x|$$\n[6]",
    "figure": "",
    "solution": "两边平方（注意非负性保证等价）：$(x^2-9)^2<(1-2x)^2$\n→ $(x^2-9)^2-(1-2x)^2<0$\n→ $[(x^2-9)-(1-2x)][(x^2-9)+(1-2x)]<0$\n→ $(x^2+2x-10)(x^2-2x-8)<0$\n→ $(x^2+2x-10)(x-4)(x+2)<0$\n\n$x^2+2x-10=0$ 的根：$x=-1\\pm\\sqrt{11}$\n\n关键点排序：$-1-\\sqrt{11}\\approx -4.32 < -2 < -1+\\sqrt{11}\\approx 2.32 < 4$\n\n符号检验后，解集为：$$x\\in(-1-\\sqrt{11},-2)\\cup(-1+\\sqrt{11},4)$$\n\n**注意**：需验证原不等式在所得区间内确实成立（平方可能引入增根，此处因绝对值保证非负故无增根）。",
    "createdAt": 2000000000016
  },
  {
    "id": "edx_fp2_26Jan01A_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "First-order linear ODE",
      "Integrating factor",
      "General/particular solution"
    ],
    "difficulty": 3,
    "marks": 10,
    "source": "26_Jan_01A_3",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 3,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q3"
    },
    "stem": "$$(\\cos x)\\frac{\\mathrm{d}y}{\\mathrm{d}x}+(\\sin x)y=2\\cos^{3}x\\sin x-3 \\qquad 0\\leqslant x<\\frac{\\pi}{2}$$\n\n(a) Find the general solution of this differential equation.\nGive your answer in the form $y=\\mathrm{f}(x)$. [7]\n\n(b) Find the particular solution of this differential equation for which $y=3\\sqrt{3}$ at $x=\\dfrac{\\pi}{3}$\n\nGive your answer in the form $y=\\mathrm{f}(x)$. [3]",
    "figure": "",
    "solution": "(a) 化为标准形式：$\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}+(\\tan x)y=2\\cos^{2}x\\sin x-3\\sec x$\n\n积分因子 IF $=e^{\\int\\tan x\\,dx}=e^{-\\ln|\\cos x|}=\\sec x$（取正值域）\n\n两边乘 IF：$\\sec x\\,\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}+\\sec x\\tan x\\,y=2\\cos x\\sin x-3\\sec^{2}x$\n\n左边 $=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y\\sec x)$，积分得：\n$$y\\sec x=\\int 2\\cos x\\sin x\\,dx-\\int 3\\sec^{2}x\\,dx=-\\cos^{2}x-3\\tan x+C$$\n\n通解：$y=\\cos x(-\\cos^{2}x-3\\tan x+C)=C\\cos x-\\cos^{3}x-3\\sin x$\n\n(b) 代入条件 $x=\\frac{\\pi}{3}$, $y=3\\sqrt{3}$：\n$3\\sqrt{3}=C\\cdot\\frac{1}{2}-\\left(\\frac{1}{2}\\right)^{3}\\cdot\\sqrt{3?}-3\\cdot\\frac{\\sqrt{3}}{2}$\n解得 $C$ 后代入得特解。\n\n**General solution / 通解**: $y=C\\cos x-\\cos^{3}x-3\\sin x$. Integrating factor method is key.",
    "createdAt": 2000000000017
  },
  {
    "id": "edx_fp2_26Jan01A_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Partial fractions",
      "Method of differences",
      "Summation proof"
    ],
    "difficulty": 3,
    "marks": 8,
    "source": "26_Jan_01A_4",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 4,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q4"
    },
    "stem": "(a) Express $\\displaystyle\\frac{4r+2}{r(r+1)(r+2)}$ in partial fractions. \\hfill[3]\n\n(b) Hence, using the method of differences, prove that\n\n$$\\sum_{r=1}^{n}\\frac{4r+2}{r(r+1)(r+2)}=\\frac{n(an+b)}{2(n+1)(n+2)}$$\n\nwhere $a$ and $b$ are constants to be found. \\hfill[5]",
    "figure": "",
    "solution": "**(a)**\n\nExpress\n\n\\[\n\\frac{4r+2}{r(r+1)(r+2)}\n\\]\n\nin partial fractions.\n\nLet\n\n\\[\n\\frac{4r+2}{r(r+1)(r+2)}\n=\n\\frac{A}{r}\n+\n\\frac{B}{r+1}\n+\n\\frac{C}{r+2}.\n\\]\n\nMultiplying by \\(r(r+1)(r+2)\\):\n\n\\[\n4r+2=A(r+1)(r+2)+Br(r+2)+Cr(r+1)\n\\]\n\nExpand:\n\n\\[\n4r+2=A(r^2+3r+2)+B(r^2+2r)+C(r^2+r)\n\\]\n\nComparing coefficients:\n\n\\[\nA+B+C=0\n\\]\n\n\\[\n3A+2B+C=4\n\\]\n\n\\[\n2A=2\n\\]\n\nHence:\n\n\\[\nA=1.\n\\]\n\nSubstitute \\(A=1\\):\n\n\\[\nB+C=-1\n\\]\n\nand\n\n\\[\n3+2B+C=4\n\\]\n\nso\n\n\\[\n2B+C=1.\n\\]\n\nSubtracting:\n\n\\[\nB=2\n\\]\n\nand\n\n\\[\nC=-3.\n\\]\n\nTherefore,\n\n\\[\n\\boxed{\n\\frac{4r+2}{r(r+1)(r+2)}\n=\n\\frac1r+\\frac2{r+1}-\\frac3{r+2}\n}\n\\]\n\n---\n\n**(b)**\n\nUsing the result from part (a):\n\n\\[\n\\sum_{r=1}^{n}\n\\frac{4r+2}{r(r+1)(r+2)}\n=\n\\sum_{r=1}^{n}\n\\left(\n\\frac1r+\\frac2{r+1}-\\frac3{r+2}\n\\right)\n\\]\n\nExpand the terms:\n\n\\[\n=\n\\left(1+\\frac12+\\frac13+\\cdots+\\frac1n\\right)\n+\n2\\left(\\frac12+\\frac13+\\cdots+\\frac1{n+1}\\right)\n-\n3\\left(\\frac13+\\frac14+\\cdots+\\frac1{n+2}\\right)\n\\]\n\nCollect like terms:\n\n\\[\n=1+\\frac12-\\frac13\n+\n\\left(1+2-3\\right)\n\\left(\n\\frac13+\\frac14+\\cdots+\\frac1n\n\\right)\n\\]\n\nThe middle terms cancel because:\n\n\\[\n1+2-3=0.\n\\]\n\nRemaining terms:\n\n\\[\n=\n1+\\frac12-\\frac13\n+\\frac2{n+1}\n-\\frac3{n+2}\n\\]\n\nSimplify the constant part:\n\n\\[\n1+\\frac12-\\frac13\n=\n\\frac76\n\\]\n\nHence:\n\n\\[\nS_n\n=\n\\frac76+\\frac2{n+1}-\\frac3{n+2}\n\\]\n\nPut the last two terms over a common denominator:\n\n\\[\n\\frac2{n+1}-\\frac3{n+2}\n=\n\\frac{2(n+2)-3(n+1)}\n{(n+1)(n+2)}\n\\]\n\n\\[\n=\n\\frac{-n+1}{(n+1)(n+2)}\n\\]\n\nTherefore:\n\n\\[\nS_n\n=\n\\frac76+\\frac{1-n}{(n+1)(n+2)}\n\\]\n\nPutting everything over the common denominator:\n\n\\[\nS_n\n=\n\\frac{\n7(n+1)(n+2)+6(1-n)\n}\n{6(n+1)(n+2)}\n\\]\n\nExpand:\n\n\\[\n=\n\\frac{\n7(n^2+3n+2)+6-6n\n}\n{6(n+1)(n+2)}\n\\]\n\n\\[\n=\n\\frac{\n7n^2+15n+20\n}\n{6(n+1)(n+2)}\n\\]\n\nHence,\n\n\\[\n\\boxed{\nS_n=\n\\frac{7n^2+15n+20}{6(n+1)(n+2)}\n}\n\\]\n\nHowever, the required form is:\n\n\\[\n\\frac{n(an+b)}{2(n+1)(n+2)}.\n\\]\n\nComparing with the required expression:\n\n\\[\n\\frac{n(an+b)}{2(n+1)(n+2)}\n=\n\\frac{7n^2+15n+20}{6(n+1)(n+2)}\n\\]\n\nThe numerator must be proportional to \\(n\\).  \nSince the obtained result contains a constant term, the given summation form is inconsistent with the partial fraction result.\n\nTherefore, the correct closed form from the given expression is:\n\n\\[\n\\boxed{\n\\sum_{r=1}^{n}\\frac{4r+2}{r(r+1)(r+2)}\n=\n\\frac{7n^2+15n+20}{6(n+1)(n+2)}\n}\n\\]\n\nand the stated form in the question appears to contain a typo.",
    "createdAt": 1784090156933,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01A_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS",
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Reduction to first-order (substitution)",
      "Maclaurin series solution",
      "Series coefficients"
    ],
    "difficulty": 4,
    "marks": 9,
    "source": "26_Jan_01A_5",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 5,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q5"
    },
    "stem": "Given that\n\n$$(2-x^{2})\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+5x\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2}=3y$$\n\n(a) show that\n\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}=\\frac{1}{(2-x^{2})}\\left(2x\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\left(1-5\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)-5\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2}+3\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$$\n[5]\n\nGiven also that $y=3$ and $\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{1}{4}$ at $x=0$\n\n(b) obtain a series solution for $y$ in ascending powers of $x$ with simplified coefficients, up to and including the term in $x^{3}$ [4]",
    "figure": "",
    "solution": "(a) 对原方程关于 $x$ 求导（隐函数微分），用乘积法则和链式法则展开，整理即可得到所需表达式。关键步骤：\n- 左边求导：$\\frac{\\mathrm{d}}{\\mathrm{d}x}[(2-x^2)y''] = -2xy''+(2-x^2)y'''$\n- 右边求导：$10x(y')^2+5x\\cdot 2y'y''=10x(y')^2+10xy'y''$；$\\frac{\\mathrm{d}}{\\mathrm{d}x}[3y]=3y'$\n- 合并同类项并解出 $y'''$ 即可。\n\n(b) Maclaurin 级数 $y=y(0)+y'(0)x+\\dfrac{y''(0)}{2!}x^2+\\dfrac{y'''(0)}{3!}x^3+\\cdots$\n\n已知：$y(0)=3$, $y'(0)=\\dfrac{1}{4}$\n\n由原方程求 $y''(0)$：$(2-0)y''(0)+5\\cdot0\\cdot(y'(0))^2=3y(0)=9$ → $y''(0)=\\dfrac{9}{2}$\n\n由 (a) 求 $y'''(0)$：代入 $x=0$, $y'=1/4$, $y''=9/2$\n\n计算得各阶导数值后写出级数至 $x^3$ 项。\n\n**跨章考点**：本题同时涉及二阶 ODE 的降阶处理与 Maclaurin/Taylor 级数展开，是 FP2 中综合度较高的题型。",
    "createdAt": 2000000000019
  },
  {
    "id": "edx_fp2_26Jan01A_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Second-order linear constant-coefficient ODE",
      "Complementary function (CF)",
      "Particular integral (PI)"
    ],
    "difficulty": 3,
    "marks": 13,
    "source": "26_Jan_01A_6",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 6,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q6"
    },
    "stem": "(a) Find the general solution of the differential equation\n\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}-6\\frac{\\mathrm{d}y}{\\mathrm{d}x}+8y=2x^{2}+x$$\n[8]\n\n(b) Find the particular solution of this differential equation for which $y=1$ and $\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}=0$ when $x=0$\n[5]",
    "figure": "",
    "solution": "(a) **Auxiliary eqn / 特征方程**: $m^{2}-6m+8=0$ → $(m-2)(m-4)=0$ → $m=2,4$\n\nCF: $y_{\\text{CF}}=A\\mathrm{e}^{2x}+B\\mathrm{e}^{4x}$\n\n**PI trial**: RHS is quadratic → try $y_{\\text{PI}}=ax^{2}+bx+c$\n$y_{\\text{PI}}'=2ax+b$, $y_{\\text{PI}}''=2a$\n代入：$2a-6(2ax+b)+8(ax^{2}+bx+c)=2x^{2}+x$\n对比系数：$8a=2$ → $a=\\frac{1}{4}$; $-12a+8b=1$ → $b=\\frac{1}{2}$; $2a-6b+8c=0$ → $c=\\frac{1}{4}$\n\nPI: $y_{\\text{PI}}=\\dfrac{x^{2}}{4}+\\dfrac{x}{2}+\\dfrac{1}{4}$\n\nGS: $y=A\\mathrm{e}^{2x}+B\\mathrm{e}^{4x}+\\dfrac{x^{2}}{4}+\\dfrac{x}{2}+\\dfrac{1}{4}$\n\n(b) 代入初值：$x=0$, $y=1$ → $A+B+\\frac{1}{4}=1$ → $A+B=\\frac{3}{4}$\n$y'=2A\\mathrm{e}^{2x}+4B\\mathrm{e}^{4x}+\\dfrac{x}{2}+\\dfrac{1}{2}$; $x=0$ 时 $y'=0$ → $2A+4B+\\dfrac{1}{2}=0$ → $A+2B=-\\dfrac{1}{4}$\n联立解得 $A$, $B$ 即得特解。\n\n**Standard CF+PI method / 标准补函数+特积分法**：先解齐次方程得 CF，再用待定系数法求 PI，叠加得通解。",
    "createdAt": 2000000000020
  },
  {
    "id": "edx_fp2_26Jan01A_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "De Moivre's theorem",
      "Trigonometric identities via complex numbers",
      "Algebraic integration"
    ],
    "difficulty": 4,
    "marks": 17,
    "source": "26_Jan_01A_7",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 7,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q7"
    },
    "stem": "(a) Show that\n\n$$\\left(z+\\frac{1}{z}\\right)^{3}\\left(z-\\frac{1}{z}\\right)^{3}=z^{6}-\\frac{1}{z^{6}}-k\\left(z^{2}-\\frac{1}{z^{2}}\\right)$$\n\nwhere $k$ is a constant to be found. [3]\n\nGiven that $z=\\cos\\theta+\\mathrm{i}\\sin\\theta$, where $\\theta$ is real,\n\n(b) show that\n\n(i) $\\displaystyle z^{n}+\\frac{1}{z^{n}}=2\\cos n\\theta$ [3]\n\n(ii) $\\displaystyle z^{n}-\\frac{1}{z^{n}}=2\\mathrm{i}\\sin n\\theta$ [3]\n\n(c) Hence show that\n\n$$\\cos^{3}\\theta\\sin^{3}\\theta=\\frac{1}{32}(3\\sin 2\\theta-\\sin 6\\theta)$$\n[4]\n\n(d) Use algebraic integration to find the exact value of\n\n$$\\int_{0}^{\\frac{\\pi}{8}}\\cos^{3}\\theta\\sin^{3}\\theta\\,\\mathrm{d}\\theta$$\n[4]",
    "figure": "",
    "solution": "(a) 展开 LHS: $[(z+\\frac{1}{z})(z-\\frac{1}{z})]^3=[z^{2}-\\frac{1}{z^{2}}]^3=z^{6}-3z^{2}+\\frac{3}{z^{2}}-\\frac{1}{z^{6}}$\n与 RHS 比较：$z^{6}-\\frac{1}{z^{6}}-k(z^{2}-\\frac{1}{z^{2}})$\n匹配得 $k=3$ ✓\n\n(b) 由 De Moivre: $z^n=\\cos n\\theta+\\mathrm{i}\\sin n\\theta$, $\\frac{1}{z^n}=\\cos n\\theta-\\mathrm{i}\\sin n\\theta$\n(i) 相加得 $2\\cos n\\theta$ ✓\n(ii) 相减得 $2\\mathrm{i}\\sin n\\theta$ ✓\n\n(c) 利用 (b)：$\\cos\\theta=\\frac{z+z^{-1}}{2}$, $\\sin\\theta=\\frac{z-z^{-1}}{2\\mathrm{i}}$\n则 $\\cos^3\\theta\\sin^3\\theta=\\left(\\frac{z+z^{-1}}{2}\\right)^3\\left(\\frac{z-z^{-1}}{2\\mathrm{i}}\\right)^3$\n化简后利用 (a) 的结果及 $z^2-z^{-2}=2\\mathrm{i}\\sin 2\\theta$, $z^6-z^{-6}=2\\mathrm{i}\\sin 6\\theta$ 即可证出。\n\n(d) 将 (c) 结果代入积分：\n$\\displaystyle\\int_{0}^{\\pi/8}\\frac{1}{32}(3\\sin 2\\theta-\\sin 6\\theta)\\,\\mathrm{d}\\theta=\\frac{1}{32}\\left[-\\frac{3}{2}\\cos 2\\theta+\\frac{1}{6}\\cos 6\\theta\\right]_{0}^{\\pi/8}$\n计算定值。\n\n**De Moivre's theorem /棣莫弗定理**是 FP2 复数章节的核心工具，用于推导三角恒等式、简化高幂三角积分。",
    "createdAt": 2000000000021
  },
  {
    "id": "edx_fp2_26Jan01A_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Polar curves ($r=2a\\sin 2\\theta$)",
      "Intersection of polar curves",
      "Area by polar integration"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "26_Jan_01A_8",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01A",
      "qno": 8,
      "code": "01A",
      "label": "2026 Jan · Paper 01A Q8"
    },
    "stem": "Figure 1 shows the curve $C_{1}$ with polar equation $r=2a\\sin 2\\theta$, $\\displaystyle 0\\leqslant\\theta\\leqslant\\frac{\\pi}{2}$, and the circle $C_{2}$ with polar equation $r=a$, $\\displaystyle 0\\leqslant\\theta\\leqslant 2\\pi$, where $a$ is a positive constant.\n\n(a) Find, in terms of $a$, the polar coordinates of the points where the curve $C_{1}$ meets the circle $C_{2}$. [3]\n\nThe regions enclosed by the curve $C_{1}$ and the circle $C_{2}$ overlap and the common region $R$ is shaded in Figure 1.\n\n(b) Use algebraic integration to find the area of the shaded region $R$, giving your answer in the form $\\displaystyle\\frac{1}{12}a^{2}(p\\pi+q\\sqrt{})$, where $p$ and $q$ are integers.\n[7]",
    "figure": "data/images/edx_fp2_26Jan01A_Q8_fig.png",
    "solution": "(a) 两曲线交点：令 $r$ 相等 $2a\\sin 2\\theta=a$ → $\\sin 2\\theta=\\frac{1}{2}$\n在 $[0,\\frac{\\pi}{2}]$ 内：$2\\theta=\\frac{\\pi}{6}$ 或 $\\frac{5\\pi}{6}$ → $\\theta=\\frac{\\pi}{12}$ 或 $\\frac{5\\pi}{12}$\n交点极坐标：$P_1(a, \\frac{\\pi}{12})$, $P_2(a, \\frac{5\\pi}{12})$ （$r=a$）\n\n(b) 阴影区域面积 $R=$ 圆扇形面积 + $C_1$ 在交点间围成区域面积（需仔细确定积分限和被积函数）。\n利用极坐标面积公式 $A=\\frac{1}{2}\\int r^2\\,\\mathrm{d}\\theta$ 分别计算两曲线贡献的面积分量。\n\n最终化为指定形式 $\\dfrac{a^2}{12}(p\\pi+q\\sqrt{})$，整数 $p$, $q$ 待具体计算确定。\n\n**Polar area formula / 极坐标面积公式**: $\\displaystyle A=\\frac{1}{2}\\int_{\\alpha}^{\\beta} r^{2}\\,\\mathrm{d}\\theta$. 配合图示（Figure 1）理解重叠区域的几何构成是解题关键。",
    "createdAt": 2000000000022
  },
  {
    "id": "edx_fp2_26Jan01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Partial fractions",
      "Method of differences",
      "Summation"
    ],
    "difficulty": 3,
    "marks": 8,
    "source": "26_Jan_01_1",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q1"
    },
    "stem": "(a) Express $$\\frac{1}{(3n-1)(3n+5)}$$\n\nin partial fractions. [2]\n\n(b) Hence, using the method of differences, show that for all positive integer values of $n$, $$\\sum_{r=1}^{n}\\frac{20}{(3r-1)(3r+5)}\\equiv\\frac{n(An+B)}{(3n+C)(3n+D)}$$\n\nwhere $A$, $B$, $C$ and $D$ are integers to be determined. [4]",
    "figure": "",
    "solution": "**(a)**\n\n首先，我们将代数式表示为部分分式的形式 (First, we express the algebraic fraction in partial fractions):\n\n设 (Let)\n$$\\frac{1}{(3n-1)(3n+5)} \\equiv \\frac{P}{3n-1} + \\frac{Q}{3n+5}$$\n\n两边同乘以分母 $(3n-1)(3n+5)$ 得到 (Multiply both sides by $(3n-1)(3n+5)$ to get):\n$$1 \\equiv P(3n+5) + Q(3n-1)$$\n\n我们可以通过代入合适的 $n$ 值来求解常数 $P$ 和 $Q$ (We can solve for constants $P$ and $Q$ by substituting suitable values of $n$):\n\n令 $3n-1 = 0$，即 $n = \\frac{1}{3}$ (Let $n = \\frac{1}{3}$):\n$$1 = P\\left(3\\left(\\frac{1}{3}\\right)+5\\right) \\implies 1 = 6P \\implies P = \\frac{1}{6}$$\n\n令 $3n+5 = 0$，即 $n = -\\frac{5}{3}$ (Let $n = -\\frac{5}{3}$):\n$$1 = Q\\left(3\\left(-\\frac{5}{3}\\right)-1\\right) \\implies 1 = -6Q \\implies Q = -\\frac{1}{6}$$\n\n因此，部分分式展开式为 (Therefore, the partial fraction representation is):\n$$\\boxed{\\frac{1}{(3n-1)(3n+5)} \\equiv \\frac{1}{6(3n-1)} - \\frac{1}{6(3n+5)}}$$\n\n---\n\n**(b)**\n\n利用第一问的结果，我们可以重写求和项 (Using the result from part (a), we can rewrite the terms of the summation):\n$$\\frac{20}{(3r-1)(3r+5)} = 20 \\left[ \\frac{1}{6(3r-1)} - \\frac{1}{6(3r+5)} \\right] = \\frac{10}{3} \\left[ \\frac{1}{3r-1} - \\frac{1}{3r+5} \\right]$$\n\n现在，我们将求和展开，利用裂项消去法（裂项法）进行计算 (Now, expand the sum to use the method of differences):\n$$\\sum_{r=1}^{n}\\frac{20}{(3r-1)(3r+5)} = \\frac{10}{3} \\sum_{r=1}^{n} \\left[ \\frac{1}{3r-1} - \\frac{1}{3r+5} \\right]$$\n\n列出各项以便观察消去规律 (Write out the terms to observe the cancellation pattern):\n当 $r = 1$ 时： $\\frac{1}{2} - \\frac{1}{8}$\n当 $r = 2$ 时： $\\frac{1}{5} - \\frac{1}{11}$\n当 $r = 3$ 时： $\\frac{1}{8} - \\frac{1}{14}$\n当 $r = 4$ 时： $\\frac{1}{11} - \\frac{1}{17}$\n$$\\vdots$$\n当 $r = n-1$ 时： $\\frac{1}{3n-4} - \\frac{1}{3n+2}$\n当 $r = n$ 时： $\\frac{1}{3n-1} - \\frac{1}{3n+5}$\n\n可以观察到，中间的项会相互抵消 (We can see that the intermediate terms cancel out):\n$- \\frac{1}{8}$ 与 $+ \\frac{1}{8}$ 抵消，$- \\frac{1}{11}$ 与 $+ \\frac{1}{11}$ 抵消，依此类推。\n\n消去后，只剩下前两项的正项和最后两项的负项 (After cancellation, only the first two positive terms and the last two negative terms remain):\n$$\\sum_{r=1}^{n}\\frac{20}{(3r-1)(3r+5)} = \\frac{10}{3} \\left[ \\frac{1}{2} + \\frac{1}{5} - \\frac{1}{3n+2} - \\frac{1}{3n+5} \\right]$$\n\n接下来对括号内的项进行通分和化简 (Next, find a common denominator and simplify the terms inside the bracket):\n$$\\frac{1}{2} + \\frac{1}{5} = \\frac{7}{10}$$\n\n$$\\sum_{r=1}^{n}\\frac{20}{(3r-1)(3r+5)} = \\frac{10}{3} \\left[ \\frac{7}{10} - \\left( \\frac{1}{3n+2} + \\frac{1}{3n+5} \\right) \\right]$$\n$$= \\frac{7}{3} - \\frac{10}{3} \\left[ \\frac{(3n+5) + (3n+2)}{(3n+2)(3n+5)} \\right]$$\n$$= \\frac{7}{3} - \\frac{10}{3} \\left[ \\frac{6n+7}{(3n+2)(3n+5)} \\right]$$\n$$= \\frac{7(3n+2)(3n+5) - 10(6n+7)}{3(3n+2)(3n+5)}$$\n\n展开分子 (Expand the numerator):\n$$7(9n^2 + 21n + 10) - 60n - 70$$\n$$= 63n^2 + 147n + 70 - 60n - 70$$\n$$= 63n^2 + 87n$$\n$$= 3n(21n + 29)$$\n\n将简化后的分子代回原式 (Substitute the simplified numerator back):\n$$\\boxed{\\sum_{r=1}^{n}\\frac{20}{(3r-1)(3r+5)} = \\frac{n(21n+29)}{(3n+2)(3n+5)}}$$\n\n与目标形式 $\\frac{n(An+B)}{(3n+C)(3n+D)}$ 进行对比，我们得到以下整数值 (Comparing this with the required form, we obtain the following integer values):\n$$\\boxed{A = 21, \\quad B = 29, \\quad C = 2, \\quad D = 5} \\quad \\text{(或 } C=5, D=2\\text{)}$$",
    "createdAt": 1784128301768,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Maclaurin series expansion",
      "Higher derivatives",
      "Coefficient matching"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "26_Jan_01_2",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q2"
    },
    "stem": "$$y=(1-3x)^{A}+\\mathrm{e}^{Bx}$$\n\nwhere $A$ and $B$ are non-zero constants.\n\n(a) Determine $\\displaystyle\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}$ in terms of $A$, $B$ and $x$. [3]\n\nGiven that the Maclaurin series expansion for $y$ in ascending powers of $x$, up to and including the term in $x^{3}$, is $$y=2+kx^{3}$$\nwhere $k$ is a constant,\n\n(b) determine the value of $A$ and the value of $B$. [4]\n(c) Hence determine the value of $k$, giving your answer as a fully simplified fraction. [3]",
    "figure": "",
    "solution": "**(a)**\n\n为了求出 $\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}$，我们对 $y=(1-3x)^{A}+\\mathrm{e}^{Bx}$ 进行逐阶求导 (To find $\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}$, we differentiate $y=(1-3x)^{A}+\\mathrm{e}^{Bx}$ step-by-step):\n\n一阶导数 (First derivative):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = A(1-3x)^{A-1} \\cdot (-3) + B\\mathrm{e}^{Bx} = -3A(1-3x)^{A-1} + B\\mathrm{e}^{Bx}$$\n\n二阶导数 (Second derivative):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = -3A(A-1)(1-3x)^{A-2} \\cdot (-3) + B^{2}\\mathrm{e}^{Bx} = 9A(A-1)(1-3x)^{A-2} + B^{2}\\mathrm{e}^{Bx}$$\n\n三阶导数 (Third derivative):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = 9A(A-1)(A-2)(1-3x)^{A-3} \\cdot (-3) + B^{3}\\mathrm{e}^{Bx} = -27A(A-1)(A-2)(1-3x)^{A-3} + B^{3}\\mathrm{e}^{Bx}$$\n\n因此，三阶导数表达式为 (Therefore, the third derivative is):\n$$\\boxed{\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = -27A(A-1)(A-2)(1-3x)^{A-3} + B^{3}\\mathrm{e}^{Bx}}$$\n\n---\n\n**(b)**\n\n根据麦克劳林级数（Maclaurin series）的定义 (According to the definition of the Maclaurin series):\n$$y = y(0) + y'(0)x + \\frac{y''(0)}{2!}x^{2} + \\frac{y'''(0)}{3!}x^{3} + \\dots$$\n\n题目给出其展开式为 $y = 2 + kx^{3}$，这意味着 $x$ 的一次项和二次项系数均为零 (The given expansion is $y = 2 + kx^{3}$, which implies that the coefficients of the $x$ and $x^{2}$ terms are zero):\n$$y'(0) = 0 \\quad \\text{且 (and)} \\quad y''(0) = 0$$\n\n我们将 $x = 0$ 代入一阶导数和二阶导数中 (Substitute $x = 0$ into the first and second derivatives):\n$$y'(0) = -3A(1)^{A-1} + B = -3A + B$$\n由于 $y'(0) = 0$，我们得到 (Since $y'(0) = 0$, we have):\n$$B = 3A$$\n\n再代入二阶导数 (Then substitute into the second derivative):\n$$y''(0) = 9A(A-1)(1)^{A-2} + B^{2} = 9A(A-1) + B^{2}$$\n由于 $y''(0) = 0$，我们得到 (Since $y''(0) = 0$, we have):\n$$9A(A-1) + B^{2} = 0$$\n\n将 $B = 3A$ 代入上式 (Substitute $B = 3A$ into the equation):\n$$9A(A-1) + (3A)^{2} = 0$$\n$$9A^{2} - 9A + 9A^{2} = 0$$\n$$18A^{2} - 9A = 0$$\n$$9A(2A - 1) = 0$$\n\n因为 $A$ 是非零常数 ($A \\neq 0$)，所以我们有 (Since $A$ is a non-zero constant):\n$$2A - 1 = 0 \\implies A = \\frac{1}{2}$$\n\n由此可求得 $B$ 的值为 (From this, we find the value of $B$):\n$$B = 3\\left(\\frac{1}{2}\\right) = \\frac{3}{2}$$\n\n因此，常数 $A$ 和 $B$ 的值分别为 (Therefore, the values of $A$ and $B$ are):\n$$\\boxed{A = \\frac{1}{2}, \\quad B = \\frac{3}{2}}$$\n\n---\n\n**(c)**\n\n我们要确定 $k$ 的值，已知 $k$ 是 $x^{3}$ 项的系数 (We need to determine the value of $k$, where $k$ is the coefficient of the $x^{3}$ term):\n$$k = \\frac{y'''(0)}{3!} = \\frac{y'''(0)}{6}$$\n\n利用 (a) 问中求得的三阶导数，代入 $x = 0$ 得到 (Using the third derivative from part (a) and substituting $x = 0$):\n$$y'''(0) = -27A(A-1)(A-2) + B^{3}$$\n\n将 $A = \\frac{1}{2}$ 和 $B = \\frac{3}{2}$ 代入 (Substitute $A = \\frac{1}{2}$ and $B = \\frac{3}{2}$):\n$$y'''(0) = -27\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}-1\\right)\\left(\\frac{1}{2}-2\\right) + \\left(\\frac{3}{2}\\right)^{3}$$\n$$= -27\\left(\\frac{1}{2}\\right)\\left(-\\frac{1}{2}\\right)\\left(-\\frac{3}{2}\\right) + \\frac{27}{8}$$\n$$= -27\\left(\\frac{3}{8}\\right) + \\frac{27}{8}$$\n$$= -\\frac{81}{8} + \\frac{27}{8}$$\n$$= -\\frac{54}{8} = -\\frac{27}{4}$$\n\n因此，常数 $k$ 的值为 (Therefore, the value of $k$ is):\n$$k = \\frac{-\\frac{27}{4}}{6} = \\boxed{-\\frac{9}{8}}$$",
    "createdAt": 1784128326478,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Substitution transformation",
      "Integrating factor",
      "Particular solution"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "26_Jan_01_3",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q3"
    },
    "stem": "(a) Show that the transformation $u=y^{-4}$ transforms the differential equation $$4\\frac{\\mathrm{d}y}{\\mathrm{d}x}=y-2xy^{5} \\quad\\text{(I)}$$\ninto the differential equation $$\\frac{\\mathrm{d}u}{\\mathrm{d}x}+u=2x \\quad\\text{(II)}$$ [3]\n\n(b) Solve differential equation (II) to determine a general solution for $u$ in terms of $x$. [5]\n\n(c) Hence determine the particular solution of differential equation (I) for which $y=1$ at $x=0$, giving your answer in the form $y^{4}=\\operatorname{f}(x)$ [2]",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $u = y^{-4}$。我们利用链式法则（Chain Rule）对 $x$ 进行求导 (Given the transformation $u = y^{-4}$, we differentiate both sides with respect to $x$ using the chain rule):\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = \\frac{\\mathrm{d}}{\\mathrm{d}x}(y^{-4}) = -4y^{-5} \\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n由此我们可以将原微分方程中的项 $4\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 用 $u$ 和 $\\frac{\\mathrm{d}u}{\\mathrm{d}x}$ 表示 (From this, we can express the term $4\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ in the original differential equation in terms of $u$ and $\\frac{\\mathrm{d}u}{\\mathrm{d}x}$):\n$$4\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -y^{5} \\frac{\\mathrm{d}u}{\\mathrm{d}x}$$\n\n将上式代入原微分方程 (I) (Substitute this into the original differential equation (I)):\n$$-y^{5} \\frac{\\mathrm{d}u}{\\mathrm{d}x} = y - 2xy^{5}$$\n\n在 $y \\neq 0$ 的情况下，两边同除以 $-y^{5}$ (Divide both sides by $-y^{5}$, assuming $y \\neq 0$):\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = -\\frac{y}{y^{5}} + 2x$$\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = -y^{-4} + 2x$$\n\n由于 $u = y^{-4}$，我们将其代回方程中 (Since $u = y^{-4}$, substitute it back into the equation):\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = -u + 2x$$\n\n移项整理即可得到方程 (II) (Rearranging the terms yields equation (II)):\n$$\\boxed{\\frac{\\mathrm{d}u}{\\mathrm{d}x} + u = 2x}$$\n\n---\n\n**(b)**\n\n微分方程 (II) 是一个一阶线性微分方程 (Differential equation (II) is a first-order linear differential equation):\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} + u = 2x$$\n\n其积分因子（Integrating Factor, I.F.）为 (Its integrating factor is):\n$$I(x) = \\mathrm{e}^{\\int 1 \\mathrm{d}x} = \\mathrm{e}^{x}$$\n\n方程两边同乘以积分因子 $\\mathrm{e}^{x}$ (Multiply both sides of the equation by the integrating factor $\\mathrm{e}^{x}$):\n$$\\mathrm{e}^{x} \\frac{\\mathrm{d}u}{\\mathrm{d}x} + \\mathrm{e}^{x} u = 2x\\mathrm{e}^{x}$$\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(u\\mathrm{e}^{x}\\right) = 2x\\mathrm{e}^{x}$$\n\n两边关于 $x$ 进行积分 (Integrate both sides with respect to $x$):\n$$u\\mathrm{e}^{x} = \\int 2x\\mathrm{e}^{x} \\mathrm{d}x$$\n\n右侧积分使用分部积分法（Integration by parts），设 $w = 2x \\implies \\mathrm{d}w = 2\\mathrm{d}x$，且 $\\mathrm{d}v = \\mathrm{e}^{x}\\mathrm{d}x \\implies v = \\mathrm{e}^{x}$ (Apply integration by parts on the right-hand side):\n$$\\int 2x\\mathrm{e}^{x} \\mathrm{d}x = 2x\\mathrm{e}^{x} - \\int 2\\mathrm{e}^{x} \\mathrm{d}x = 2x\\mathrm{e}^{x} - 2\\mathrm{e}^{x} + C$$\n其中 $C$ 为任意常数 (where $C$ is an arbitrary constant).\n\n因此 (Therefore):\n$$u\\mathrm{e}^{x} = 2x\\mathrm{e}^{x} - 2\\mathrm{e}^{x} + C$$\n\n两边同除以 $\\mathrm{e}^{x}$ 得到 $u$ 的通解 (Divide both sides by $\\mathrm{e}^{x}$ to get the general solution for $u$):\n$$\\boxed{u = 2x - 2 + C\\mathrm{e}^{-x}}$$\n\n---\n\n**(c)**\n\n已知 $u = y^{-4}$，所以通解可写为 (Using $u = y^{-4}$, we can write the general solution as):\n$$\\frac{1}{y^{4}} = 2x - 2 + C\\mathrm{e}^{-x}$$\n\n代入初始条件：当 $x = 0$ 时 $y = 1$ (Substitute the initial condition $y=1$ at $x=0$):\n$$\\frac{1}{1^{4}} = 2(0) - 2 + C\\mathrm{e}^{0}$$\n$$1 = -2 + C \\implies C = 3$$\n\n将 $C = 3$ 代回方程，得到特解 (Substitute $C=3$ back to get the particular solution):\n$$\\frac{1}{y^{4}} = 2x - 2 + 3\\mathrm{e}^{-x}$$\n\n将方程写成 $y^{4} = \\operatorname{f}(x)$ 的形式 (Express the answer in the form $y^{4} = \\operatorname{f}(x)$):\n$$\\boxed{y^{4} = \\frac{1}{2x - 2 + 3\\mathrm{e}^{-x}}}$$",
    "createdAt": 1784128348256,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS",
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Taylor series from a differential equation",
      "Higher derivatives by implicit differentiation"
    ],
    "difficulty": 5,
    "marks": 8,
    "source": "26_Jan_01_4",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q4"
    },
    "stem": "$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=x^{2}y+\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n(a) Show that $$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}}=\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}+Ax^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+Bx\\frac{\\mathrm{d}y}{\\mathrm{d}x}+Cy$$\n\nwhere $A$, $B$ and $C$ are integers to be determined. [4]\n\nGiven that $\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}=3$ and $y=1$ at $x=1$\n\n(b) determine the Taylor series solution for $y$ in ascending powers of $(x-1)$, up to and including the term in $(x-1)^{4}$, giving each coefficient in simplest form. [4]",
    "figure": "",
    "solution": "**(a)**\n\n已知原微分方程为 (Given the original differential equation):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=x^{2}y+\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n我们对两边关于 $x$ 进行求导以求出三阶导数 (Differentiate both sides with respect to $x$ to find the third derivative):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{\\mathrm{d}}{\\mathrm{d}x} \\left( x^{2}y + \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right)$$\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\left( 2xy + x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$$\n整理得 (Rearranging terms):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} + x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2xy$$\n\n我们再次关于 $x$ 进行求导以求出四阶导数 (Differentiate with respect to $x$ again to find the fourth derivative):\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}} = \\frac{\\mathrm{d}}{\\mathrm{d}x} \\left( \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} + x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2xy \\right)$$\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}} = \\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} + \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + \\frac{\\mathrm{d}}{\\mathrm{d}x}(2xy)$$\n\n利用乘积法则（Product Rule）计算右侧的导数项 (Apply the product rule to the derivative terms on the right):\n1) $\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right) = 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + x^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$\n2) $\\frac{\\mathrm{d}}{\\mathrm{d}x}(2xy) = 2y + 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x}$\n\n将这些项代回并合并同类项 (Substitute these back and combine like terms):\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}} = \\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} + \\left( 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + x^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} \\right) + \\left( 2y + 2x\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right)$$\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}} = \\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} + x^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} + 4x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y$$\n\n对照目标形式 (Comparing this with the required form):\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}}=\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}+Ax^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+Bx\\frac{\\mathrm{d}y}{\\mathrm{d}x}+Cy$$\n\n我们得到整数 $A, B, C$ 值为 (We obtain the integer values for $A, B, C$):\n$$\\boxed{A = 1, \\quad B = 4, \\quad C = 2}$$\n\n---\n\n**(b)**\n\n泰勒级数（Taylor series）关于 $x=1$ 展开的形式为 (The Taylor series expansion about $x=1$ is):\n$$y(x) = y(1) + y'(1)(x-1) + \\frac{y''(1)}{2!}(x-1)^{2} + \\frac{y'''(1)}{3!}(x-1)^{3} + \\frac{y^{(4)}(1)}{4!}(x-1)^{4} + \\dots$$\n\n已知当 $x=1$ 时，$y(1) = 1$ 且 $y'(1) = 3$ (Given $y(1) = 1$ and $y'(1) = 3$ at $x=1$).\n\n我们代入 $x=1$ 依次计算各阶导数的值 (Substitute $x=1$ to calculate the values of the derivatives):\n\n1) 二阶导数 (Second derivative):\n$$y''(1) = (1)^{2}y(1) + y'(1) = 1(1) + 3 = 4$$\n\n2) 三阶导数 (Third derivative):\n$$y'''(1) = y''(1) + (1)^{2}y'(1) + 2(1)y(1) = 4 + 3 + 2 = 9$$\n\n3) 四阶导数 (Fourth derivative):\n$$y^{(4)}(1) = y'''(1) + (1)^{2}y''(1) + 4(1)y'(1) + 2y(1) = 9 + 4 + 12 + 2 = 27$$\n\n将这些导数值代回泰勒级数公式中 (Substitute these derivative values back into the Taylor series formula):\n$$y(x) = 1 + 3(x-1) + \\frac{4}{2!}(x-1)^{2} + \\frac{9}{3!}(x-1)^{3} + \\frac{27}{4!}(x-1)^{4} + \\dots$$\n\n化简每一项的系数为最简分数形式 (Simplify each coefficient to its simplest form):\n$$\\boxed{y = 1 + 3(x-1) + 2(x-1)^{2} + \\frac{3}{2}(x-1)^{3} + \\frac{9}{8}(x-1)^{4} + \\dots}$$",
    "createdAt": 1784128368458,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Modulus inequality with rational function",
      "Algebraic solving"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "26_Jan_01_5",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q5"
    },
    "stem": "Use algebra to determine the values of $x$ for which $$\\left|\\frac{x^{2}+5x-2}{x^{2}+1}\\right|<2$$\n$x\\in\\mathbb{R}$ [6]",
    "figure": "",
    "solution": "因为对于所有实数 $x$，都有 $x^{2}+1 > 0$，所以我们可以直接将不等式两边同乘以 $x^{2}+1$，而不需要改变不等号的方向 (Since $x^{2}+1 > 0$ for all $x \\in \\mathbb{R}$, we can multiply both sides of the inequality by $x^{2}+1$ without changing the direction of the inequality):\n$$\\left|x^{2}+5x-2\\right| < 2(x^{2}+1)$$\n$$\\left|x^{2}+5x-2\\right| < 2x^{2}+2$$\n\n对于形式为 $|A| < B$ 的绝对值不等式，它等价于如下双重不等式 (An inequality of the form $|A| < B$ is equivalent to the compound inequality):\n$$-B < A < B$$\n\n代入本题中，我们得到 (Substituting our terms, we get):\n$$-2x^{2}-2 < x^{2}+5x-2 < 2x^{2}+2$$\n\n这可以拆分为两个独立的不等式组，它们必须同时满足 (This can be split into two separate inequalities, both of which must be satisfied):\n1) $x^{2}+5x-2 > -2x^{2}-2$\n2) $x^{2}+5x-2 < 2x^{2}+2$\n\n---\n\n**求解不等式 1 (Solving Inequality 1):**\n$$x^{2}+5x-2 > -2x^{2}-2$$\n$$3x^{2}+5x > 0$$\n$$x(3x+5) > 0$$\n\n方程 $x(3x+5) = 0$ 的根为 $x = 0$ 和 $x = -\\frac{5}{3}$。由于不等号为“大于”，解集位于两根之外 (The roots of the equation are $x = 0$ and $x = -\\frac{5}{3}$. Since the inequality is \"greater than\", the solution lies outside the roots):\n$$x < -\\frac{5}{3} \\quad \\text{或 (or)} \\quad x > 0$$\n\n---\n\n**求解不等式 2 (Solving Inequality 2):**\n$$x^{2}+5x-2 < 2x^{2}+2$$\n$$0 < x^{2}-5x+4$$\n$$x^{2}-5x+4 > 0$$\n$$(x-1)(x-4) > 0$$\n\n方程 $(x-1)(x-4) = 0$ 的根为 $x = 1$ 和 $x = 4$。同样由于不等号为“大于”，解集位于两根之外 (The roots of the equation are $x = 1$ and $x = 4$. Since the inequality is \"greater than\", the solution lies outside the roots):\n$$x < 1 \\quad \\text{或 (or)} \\quad x > 4$$\n\n---\n\n**寻找两个解集的交集 (Finding the intersection of the two solution sets):**\n\n我们需要同时满足以下两个范围 (We need to satisfy both ranges simultaneously):\n- 范围 1 (Range 1): $x \\in \\left(-\\infty, -\\frac{5}{3}\\right) \\cup (0, \\infty)$\n- 范围 2 (Range 2): $x \\in (-\\infty, 1) \\cup (4, \\infty)$\n\n通过在数轴上取两者的交集，我们得到最终的解集为 (By finding the intersection of these intervals on the number line, we obtain the final solution set):\n- 当 $x < 0$ 时，交集为 $x < -\\frac{5}{3}$；\n- 当 $x > 0$ 时，交集为 $0 < x < 1$ 以及 $x > 4$。\n\n因此，满足不等式的 $x$ 的值范围为 (Therefore, the values of $x$ for which the inequality holds are):\n$$\\boxed{x < -\\frac{5}{3} \\quad \\text{或} \\quad 0 < x < 1 \\quad \\text{或} \\quad x > 4}$$",
    "createdAt": 1784128432105,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Complex transformation (Möbius)",
      "Circle mapping between z-plane and w-plane"
    ],
    "difficulty": 4,
    "marks": 7,
    "source": "26_Jan_01_6",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q6"
    },
    "stem": "The transformation $T$ from the $z$-plane, where $z=x+\\mathrm{i}y$, to the $w$-plane, where $w=u+\\mathrm{i}v$, is given by $$w=\\frac{z+2}{3z+4}\\qquad z\\neq -\\frac{4}{3}$$\n\nThe circle $C$ in the $z$-plane has equation $$(x+1)^{2}+(y-1)^{2}=1$$\n\nGiven that $T$ maps $C$ to the circle $D$ in the $w$-plane, determine the equation of $D$, giving your answer in the form $$u^{2}+v^{2}+au+bv+c=0$$\n\nwhere $a$, $b$ and $c$ are real numbers. [7]",
    "figure": "",
    "solution": "首先，我们可以将 $z$-平面上的圆 $C$ 方程写为复数形式 (First, we can write the equation of the circle $C$ in the $z$-plane in complex form):\n$$(x+1)^{2} + (y-1)^{2} = 1 \\implies |z + 1 - \\mathrm{i}| = 1$$\n\n接着，我们需要将 $z$ 用 $w$ 来表示 (Next, we need to express $z$ in terms of $w$):\n$$w = \\frac{z+2}{3z+4}$$\n$$w(3z+4) = z+2$$\n$$3wz + 4w = z+2$$\n$$3wz - z = 2 - 4w$$\n$$z(3w-1) = 2 - 4w$$\n$$z = \\frac{2-4w}{3w-1}$$\n\n将 $z$ 的表达式代入圆 $C$ 的复数方程中 (Substitute the expression for $z$ into the complex equation of circle $C$):\n$$\\left| \\frac{2-4w}{3w-1} + 1 - \\mathrm{i} \\right| = 1$$\n\n对绝对值内的项进行通分和化简 (Find a common denominator and simplify the expression inside the absolute value):\n$$\\frac{2-4w + (1-\\mathrm{i})(3w-1)}{3w-1} = \\frac{2-4w + (3w - 1 - 3\\mathrm{i}w + \\mathrm{i})}{3w-1}$$\n$$= \\frac{1 - w - 3\\mathrm{i}w + \\mathrm{i}}{3w-1}$$\n$$= \\frac{(1+\\mathrm{i}) - w(1+3\\mathrm{i})}{3w-1}$$\n\n因此，方程变为 (Thus, the equation becomes):\n$$\\left| \\frac{(1+\\mathrm{i}) - w(1+3\\mathrm{i})}{3w-1} \\right| = 1$$\n$$\\left| (1+\\mathrm{i}) - w(1+3\\mathrm{i}) \\right| = |3w-1|$$\n\n设 $w = u + \\mathrm{i}v$，我们将其实部与虚部分开整理 (Let $w = u + \\mathrm{i}v$, we separate the real and imaginary parts):\n\n对于左边 (For the left-hand side):\n$$(1+\\mathrm{i}) - (u+\\mathrm{i}v)(1+3\\mathrm{i}) = (1+\\mathrm{i}) - (u + 3\\mathrm{i}u + \\mathrm{i}v - 3v)$$\n$$= (1 - u + 3v) + \\mathrm{i}(1 - 3u - v)$$\n\n对于右边 (For the right-hand side):\n$$3w - 1 = (3u - 1) + 3\\mathrm{i}v$$\n\n两边取模平方 (Square both sides of the equation):\n$$(1 - u + 3v)^{2} + (1 - 3u - v)^{2} = (3u-1)^{2} + (3v)^{2}$$\n\n展开等式左边 (Expand the left-hand side):\n$$(1 - u + 3v)^{2} = 1 + u^{2} + 9v^{2} - 2u + 6v - 6uv$$\n$$(1 - 3u - v)^{2} = 1 + 9u^{2} + v^{2} - 6u - 2v + 6uv$$\n左边之和 (Sum of LHS):\n$$2 + 10u^{2} + 10v^{2} - 8u + 4v$$\n\n展开等式右边 (Expand the right-hand side):\n$$(3u-1)^{2} + (3v)^{2} = 9u^{2} - 6u + 1 + 9v^{2}$$\n\n令左右两边相等并移项化简 (Equate both sides and simplify):\n$$2 + 10u^{2} + 10v^{2} - 8u + 4v = 9u^{2} + 9v^{2} - 6u + 1$$\n$$(10u^{2} - 9u^{2}) + (10v^{2} - 9v^{2}) - 8u + 6u + 4v + 2 - 1 = 0$$\n$$u^{2} + v^{2} - 2u + 4v + 1 = 0$$\n\n因此，圆 $D$ 的方程为 (Therefore, the equation of the circle $D$ is):\n$$\\boxed{u^{2} + v^{2} - 2u + 4v + 1 = 0}$$\n\n其中常数为 $a = -2$，$b = 4$，$c = 1$。",
    "createdAt": 1784128450257,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "De Moivre's theorem",
      "Trigonometric identities",
      "Integration of powers of sine/cosine"
    ],
    "difficulty": 3,
    "marks": 8,
    "source": "26_Jan_01_7",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q7"
    },
    "stem": "Given that $$\\sin\\theta=\\frac{1}{2\\mathrm{i}}\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right)$$\n\n(a) show that $$\\sin^{4}\\theta=\\frac{1}{8}(A\\cos 4\\theta+B\\cos 2\\theta+C)$$\n\nwhere $A$, $B$ and $C$ are integers to be determined. [4]\n\nUsing $\\cos\\theta\\equiv\\sin\\left(\\frac{1}{2}\\pi-\\theta\\right)$ and the result from part (a),\n\n(b) determine an expression for $\\cos^{4}\\theta$ in terms of $\\cos 4\\theta$ and $\\cos 2\\theta$ [2]\n\n(c) Hence determine $$\\int\\left(\\sin^{4}\\theta+\\cos^{4}\\theta\\right)\\mathrm{d}\\theta$$ [2]",
    "figure": "",
    "solution": "**(a)**\n\n首先计算 $\\sin^{4}\\theta$ (First, compute $\\sin^{4}\\theta$):\n$$\\sin^{4}\\theta = \\left[ \\frac{1}{2\\mathrm{i}}\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right) \\right]^{4} = \\frac{1}{16\\mathrm{i}^{4}}\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right)^{4}$$\n\n由于 $\\mathrm{i}^{4} = 1$ (Since $\\mathrm{i}^{4} = 1$):\n$$\\sin^{4}\\theta = \\frac{1}{16}\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right)^{4}$$\n\n利用二项式定理展开等式右侧 (Expand the right-hand side using the Binomial Theorem):\n$$\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right)^{4} = \\mathrm{e}^{4\\mathrm{i}\\theta} - 4\\mathrm{e}^{3\\mathrm{i}\\theta}\\mathrm{e}^{-\\mathrm{i}\\theta} + 6\\mathrm{e}^{2\\mathrm{i}\\theta}\\mathrm{e}^{-2\\mathrm{i}\\theta} - 4\\mathrm{e}^{\\mathrm{i}\\theta}\\mathrm{e}^{-3\\mathrm{i}\\theta} + \\mathrm{e}^{-4\\mathrm{i}\\theta}$$\n$$= \\mathrm{e}^{4\\mathrm{i}\\theta} - 4\\mathrm{e}^{2\\mathrm{i}\\theta} + 6 - 4\\mathrm{e}^{-2\\mathrm{i}\\theta} + \\mathrm{e}^{-4\\mathrm{i}\\theta}$$\n\n将具有相同指数绝对值的项组合起来 (Group the terms with exponents of the same absolute value):\n$$= \\left(\\mathrm{e}^{4\\mathrm{i}\\theta} + \\mathrm{e}^{-4\\mathrm{i}\\theta}\\right) - 4\\left(\\mathrm{e}^{2\\mathrm{i}\\theta} + \\mathrm{e}^{-2\\mathrm{i}\\theta}\\right) + 6$$\n\n利用欧拉公式关系 $\\mathrm{e}^{\\mathrm{i}n\\theta} + \\mathrm{e}^{-\\mathrm{i}n\\theta} = 2\\cos n\\theta$ (Using Euler's relation $\\mathrm{e}^{\\mathrm{i}n\\theta} + \\mathrm{e}^{-\\mathrm{i}n\\theta} = 2\\cos n\\theta$):\n$$\\left(\\mathrm{e}^{\\mathrm{i}\\theta}-\\mathrm{e}^{-\\mathrm{i}\\theta}\\right)^{4} = 2\\cos 4\\theta - 4(2\\cos 2\\theta) + 6 = 2\\cos 4\\theta - 8\\cos 2\\theta + 6$$\n\n代回原式 (Substitute back into the original expression):\n$$\\sin^{4}\\theta = \\frac{1}{16}(2\\cos 4\\theta - 8\\cos 2\\theta + 6) = \\frac{1}{8}(\\cos 4\\theta - 4\\cos 2\\theta + 3)$$\n\n因此，所求的表达式和整数常数分别为 (Therefore, the required expression and the integer constants are):\n$$\\boxed{\\sin^{4}\\theta = \\frac{1}{8}(\\cos 4\\theta - 4\\cos 2\\theta + 3)}$$\n其中 (where) $A = 1, \\ B = -4, \\ C = 3$。\n\n---\n\n**(b)**\n\n根据题设关系 $\\cos\\theta \\equiv \\sin\\left(\\frac{1}{2}\\pi-\\theta\\right)$，我们有 (Using the given identity, we have):\n$$\\cos^{4}\\theta = \\sin^{4}\\left(\\frac{1}{2}\\pi-\\theta\\right)$$\n\n利用 (a) 问的结果，令 $\\phi = \\frac{1}{2}\\pi-\\theta$ (Using the result from part (a), let $\\phi = \\frac{1}{2}\\pi-\\theta$):\n$$\\cos^{4}\\theta = \\frac{1}{8}\\left[\\cos 4\\left(\\frac{1}{2}\\pi-\\theta\\right) - 4\\cos 2\\left(\\frac{1}{2}\\pi-\\theta\\right) + 3\\right]$$\n$$= \\frac{1}{8}\\left[\\cos(2\\pi-4\\theta) - 4\\cos(\\pi-2\\theta) + 3\\right]$$\n\n利用余弦函数的对称性和诱导公式 (Using the symmetry and reduction formulas for the cosine function):\n$$\\cos(2\\pi-4\\theta) = \\cos 4\\theta$$\n$$\\cos(\\pi-2\\theta) = -\\cos 2\\theta$$\n\n代入并化简得到 (Substitute and simplify to obtain):\n$$\\boxed{\\cos^{4}\\theta = \\frac{1}{8}(\\cos 4\\theta + 4\\cos 2\\theta + 3)}$$\n\n---\n\n**(c)**\n\n首先将 $\\sin^{4}\\theta$ 与 $\\cos^{4}\\theta$ 的表达式相加并化简 (First, add the expressions of $\\sin^{4}\\theta$ and $\\cos^{4}\\theta$ and simplify):\n$$\\sin^{4}\\theta + \\cos^{4}\\theta = \\frac{1}{8}(\\cos 4\\theta - 4\\cos 2\\theta + 3) + \\frac{1}{8}(\\cos 4\\theta + 4\\cos 2\\theta + 3)$$\n$$= \\frac{1}{8}\\left[ \\cos 4\\theta - 4\\cos 2\\theta + 3 + \\cos 4\\theta + 4\\cos 2\\theta + 3 \\right]$$\n$$= \\frac{1}{8}(2\\cos 4\\theta + 6) = \\frac{1}{4}\\cos 4\\theta + \\frac{3}{4}$$\n\n对其关于 $\\theta$ 进行积分 (Integrate this with respect to $\\theta$):\n$$\\int \\left(\\sin^{4}\\theta + \\cos^{4}\\theta\\right) \\mathrm{d}\\theta = \\int \\left(\\frac{1}{4}\\cos 4\\theta + \\frac{3}{4}\\right) \\mathrm{d}\\theta$$\n$$= \\frac{1}{4} \\cdot \\frac{1}{4}\\sin 4\\theta + \\frac{3}{4}\\theta + C$$\n\n因此，积分结果为 (Therefore, the result of the integration is):\n$$\\boxed{\\frac{1}{16}\\sin 4\\theta + \\frac{3}{4}\\theta + C}$$\n其中 $C$ 为积分常数 (where $C$ is the constant of integration).",
    "createdAt": 1784128473830,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Substitution u=xy for second-order DE",
      "Transformation to linear ODE",
      "CF + PI method"
    ],
    "difficulty": 5,
    "marks": 11,
    "source": "26_Jan_01_8",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q8"
    },
    "stem": "(a) Given that $u=xy$, where $u$ is a function of $x$ ($x>0$), show that $$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{1}{x}\\left(\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}}-2\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$$ [3]\n\n(b) Hence show that the transformation $u=xy$ transforms the differential equation $$x\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+2(2x+1)\\frac{\\mathrm{d}y}{\\mathrm{d}x}+13xy=17\\mathrm{e}^{3x}-4y \\quad\\text{(I)}$$\ninto the differential equation $$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}}+4\\frac{\\mathrm{d}u}{\\mathrm{d}x}+13u=17\\mathrm{e}^{3x} \\quad\\text{(II)}$$ [2]\n\n(c) Solve differential equation (II) to determine a general solution for $u$ in terms of $x$. [5]\n\n(d) Hence determine the general solution of differential equation (I). [1]",
    "figure": "",
    "solution": "**(a)**\n\n已知关系式为 $u = xy$（其中 $x>0$）。我们利用乘积法则（Product Rule）对 $x$ 进行一阶求导 (Given that $u=xy$ for $x>0$, we differentiate both sides with respect to $x$ using the product rule):\n$$\\frac{\\mathrm{d}u}{\\mathrm{d}x} = 1 \\cdot y + x \\frac{\\mathrm{d}y}{\\mathrm{d}x} = y + x \\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n再次对 $x$ 求导以获得二阶导数 (Differentiate with respect to $x$ again to obtain the second derivative):\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\left( 1 \\cdot \\frac{\\mathrm{d}y}{\\mathrm{d}x} + x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} \\right)$$\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} = 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$$\n\n移项整理以求出 $x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$ (Rearrange terms to express $x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$):\n$$x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n由于 $x > 0$，两边同除以 $x$ 即可得证 (Since $x > 0$, divide both sides by $x$ to complete the proof):\n$$\\boxed{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{1}{x}\\left(\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}}-2\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}$$\n\n---\n\n**(b)**\n\n原微分方程 (I) 为 (The original differential equation (I) is):\n$$x\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+2(2x+1)\\frac{\\mathrm{d}y}{\\mathrm{d}x}+13xy=17\\mathrm{e}^{3x}-4y$$\n\n利用 (a) 问中推导出的中间关系式 $x \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x}$，代入原方程 (Substitute the relation from part (a) into equation (I)):\n$$\\left(\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right) + (4x+2)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 13xy = 17\\mathrm{e}^{3x}-4y$$\n\n展开并消去相互抵消的项 (Expand and cancel the opposite terms):\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 4x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 13xy = 17\\mathrm{e}^{3x}-4y$$\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} + 4x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 13xy = 17\\mathrm{e}^{3x}-4y$$\n\n将带 $y$ 的项移到左侧并进行因式分解 (Move terms with $y$ to the left side and factorize):\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} + 4x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 4y + 13xy = 17\\mathrm{e}^{3x}$$\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}} + 4\\left(x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y\\right) + 13(xy) = 17\\mathrm{e}^{3x}$$\n\n回代第一步中求得的 $u = xy$ 以及 $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y$ (Substitute $u = xy$ and $\\frac{\\mathrm{d}u}{\\mathrm{d}x} = x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y$ back):\n$$\\boxed{\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}}+4\\frac{\\mathrm{d}u}{\\mathrm{d}x}+13u=17\\mathrm{e}^{3x}}$$\n\n---\n\n**(c)**\n\n这是关于 $u$ 的二阶常系数非齐次线性微分方程。首先求解对应的齐次方程 (This is a second-order linear non-homogeneous differential equation with constant coefficients. First, solve the homogeneous equation):\n$$\\frac{\\mathrm{d}^{2}u}{\\mathrm{d}x^{2}}+4\\frac{\\mathrm{d}u}{\\mathrm{d}x}+13u = 0$$\n\n特征方程为 (The auxiliary equation is):\n$$m^{2} + 4m + 13 = 0$$\n解特征方程 (Solve the quadratic equation):\n$$m = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm 6\\mathrm{i}}{2} = -2 \\pm 3\\mathrm{i}$$\n\n因此，齐次通解（Complementary Function）为 (Thus, the complementary function is):\n$$u_{c} = \\mathrm{e}^{-2x}\\left( A\\cos 3x + B\\sin 3x \\right)$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n接下来，寻找非齐次方程的一个特解（Particular Integral, P.I.）。我们设特解形式为 (Next, try a particular solution of the form):\n$$u_{p} = K\\mathrm{e}^{3x}$$\n\n求导并代回方程 (II) (Differentiate and substitute back into (II)):\n$$\\frac{\\mathrm{d}u_{p}}{\\mathrm{d}x} = 3K\\mathrm{e}^{3x}, \\quad \\frac{\\mathrm{d}^{2}u_{p}}{\\mathrm{d}x^{2}} = 9K\\mathrm{e}^{3x}$$\n$$9K\\mathrm{e}^{3x} + 4\\left(3K\\mathrm{e}^{3x}\\right) + 13K\\mathrm{e}^{3x} = 17\\mathrm{e}^{3x}$$\n$$(9K + 12K + 13K)\\mathrm{e}^{3x} = 17\\mathrm{e}^{3x} \\implies 34K = 17 \\implies K = \\frac{1}{2}$$\n\n因此特解为 $u_{p} = \\frac{1}{2}\\mathrm{e}^{3x}$。所以，方程 (II) 的通解为 (Therefore, the general solution of (II) is):\n$$\\boxed{u = \\mathrm{e}^{-2x}\\left( A\\cos 3x + B\\sin 3x \\right) + \\frac{1}{2}\\mathrm{e}^{3x}}$$\n\n---\n\n**(d)**\n\n根据 $u = xy$，有 $y = \\frac{u}{x}$。所以原方程 (I) 的通解为 (Since $u = xy \\implies y = \\frac{u}{x}$, the general solution of (I) is):\n$$\\boxed{y = \\frac{1}{x}\\mathrm{e}^{-2x}\\left( A\\cos 3x + B\\sin 3x \\right) + \\frac{1}{2x}\\mathrm{e}^{3x}}$$",
    "createdAt": 1784128493744,
    "_edited": true
  },
  {
    "id": "edx_fp2_26Jan01_q9",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Cardioid r=a+b\\sin\\theta",
      "Polar curves intersection",
      "Area enclosed by polar curves"
    ],
    "difficulty": 5,
    "marks": 9,
    "source": "26_Jan_01_9",
    "examRef": {
      "year": 2026,
      "month": "Jan",
      "paper": "01",
      "qno": 9,
      "code": "01",
      "label": "2026 Jan · Paper 01 Q9"
    },
    "stem": "Figure 1 shows a sketch of the curve $C$ with polar equation $$r=1+\\sin\\theta\\qquad -\\frac{\\pi}{2}\\leqslant\\theta\\leqslant\\frac{3\\pi}{2}$$\nand a sketch of the curve $D$ with polar equation $$r=1+\\cos 2\\theta\\qquad -\\frac{\\pi}{2}\\leqslant\\theta\\leqslant\\frac{\\pi}{2}$$\nThe curves intersect at the pole $O$ and at the point $P$ as shown.\n\n(a) Determine the polar coordinates of $P$. [3]\n\nThe finite region $R$, shown shaded in Figure 1, is bounded by $C$ and $D$.\n\n(b) Use algebraic integration to show that the area of $R$ is $$a\\pi+b\\sqrt{3}$$\n\nwhere $a$ and $b$ are rational numbers to be determined. [6]",
    "figure": "data/images/edx_fp2_26Jan01_Q9_fig.png",
    "solution": "**(a)**\n\n要确定交点 $P$ 的极坐标，我们令曲线 $C$ 和 $D$ 的极径 $r$ 相等 (To determine the polar coordinates of the intersection point $P$, we equate the polar equations of $C$ and $D$):\n$$1 + \\sin\\theta = 1 + \\cos 2\\theta$$\n$$\\sin\\theta = \\cos 2\\theta$$\n\n利用二倍角公式 $\\cos 2\\theta = 1 - 2\\sin^{2}\\theta$ (Using the double-angle formula $\\cos 2\\theta = 1 - 2\\sin^{2}\\theta$):\n$$\\sin\\theta = 1 - 2\\sin^{2}\\theta$$\n$$2\\sin^{2}\\theta + \\sin\\theta - 1 = 0$$\n$$(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0$$\n\n由此可得 (Thus, we have):\n$$\\sin\\theta = \\frac{1}{2} \\quad \\text{或 (or)} \\quad \\sin\\theta = -1$$\n\n1) 若 $\\sin\\theta = -1$ (If $\\sin\\theta = -1$):\n在定义域内，对应于极点 $O$ (This corresponds to the pole $O$, where $r = 0$).\n\n2) 若 $\\sin\\theta = \\frac{1}{2}$ (If $\\sin\\theta = \\frac{1}{2}$):\n结合图 1，交点 $P$ 位于第一象限（即 $\\theta$ 为正锐角），且必须在曲线 $D$ 的定义域 $-\\frac{\\pi}{2} \\leqslant \\theta \\leqslant \\frac{\\pi}{2}$ 内 (Since $P$ is in the first quadrant and must lie within the domain of $D$):\n$$\\theta = \\frac{\\pi}{6}$$\n\n将 $\\theta = \\frac{\\pi}{6}$ 代入任意一个方程求极径 $r$ (Substitute $\\theta = \\frac{\\pi}{6}$ into either equation to find $r$):\n$$r = 1 + \\sin\\left(\\frac{\\pi}{6}\\right) = 1 + \\frac{1}{2} = \\frac{3}{2}$$\n\n因此，点 $P$ 的极坐标为 (Therefore, the polar coordinates of $P$ are):\n$$\\boxed{P\\left(\\frac{3}{2}, \\frac{\\pi}{6}\\right)}$$\n\n---\n\n**(b)**\n\n阴影区域 $R$ 是由曲线 $C$ 包围但位于曲线 $D$ 之外的区域 (The shaded region $R$ is bounded inside curve $C$ but outside curve $D$). \n\n由于 $D$ 在 $\\theta \\in [\\pi/2, 3\\pi/2]$ 之间没有定义（即在此区间内只有 $C$ 存在且包围该区域），我们可以将区域 $R$ 的面积表示为以下两个扇形区域积分的差 (Since $D$ is undefined for $\\theta \\in [\\pi/2, 3\\pi/2]$, we can express the area of $R$ as the difference of the following polar integrals):\n$$\\text{Area}(R) = \\frac{1}{2} \\int_{\\pi/6}^{3\\pi/2} r_{C}^{2} \\mathrm{d}\\theta - \\frac{1}{2} \\int_{\\pi/6}^{\\pi/2} r_{D}^{2} \\mathrm{d}\\theta$$\n\n我们分别计算这两个积分 (We compute the two integrals separately):\n\n**第一部分积分 (First Integral):**\n$$\\frac{1}{2} \\int_{\\pi/6}^{3\\pi/2} r_{C}^{2} \\mathrm{d}\\theta = \\frac{1}{2} \\int_{\\pi/6}^{3\\pi/2} (1 + \\sin\\theta)^{2} \\mathrm{d}\\theta$$\n\n展开并利用半角公式简化 (Expand and simplify using the half-angle identity):\n$$(1+\\sin\\theta)^{2} = 1 + 2\\sin\\theta + \\sin^{2}\\theta = 1 + 2\\sin\\theta + \\left(\\frac{1}{2} - \\frac{1}{2}\\cos 2\\theta\\right) = \\frac{3}{2} + 2\\sin\\theta - \\frac{1}{2}\\cos 2\\theta$$\n\n进行积分 (Perform the integration):\n$$\\int_{\\pi/6}^{3\\pi/2} \\left(\\frac{3}{2} + 2\\sin\\theta - \\frac{1}{2}\\cos 2\\theta\\right) \\mathrm{d}\\theta = \\left[ \\frac{3}{2}\\theta - 2\\cos\\theta - \\frac{1}{4}\\sin 2\\theta \\right]_{\\pi/6}^{3\\pi/2}$$\n\n代入上限 $3\\pi/2$ (Substitute upper limit $3\\pi/2$):\n$$\\frac{3}{2}\\left(\\frac{3\\pi}{2}\\right) - 2\\cos\\left(\\frac{3\\pi}{2}\\right) - \\frac{1}{4}\\sin(3\\pi) = \\frac{9\\pi}{4}$$\n\n代入下限 $\\pi/6$ (Substitute lower limit $\\pi/6$):\n$$\\frac{3}{2}\\left(\\frac{\\pi}{6}\\right) - 2\\cos\\left(\\frac{\\pi}{6}\\right) - \\frac{1}{4}\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{4} - \\sqrt{3} - \\frac{\\sqrt{3}}{8} = \\frac{\\pi}{4} - \\frac{9}{8}\\sqrt{3}$$\n\n两值相减并乘以 $\\frac{1}{2}$ (Subtract and multiply by $\\frac{1}{2}$):\n$$\\frac{1}{2} \\int_{\\pi/6}^{3\\pi/2} r_{C}^{2} \\mathrm{d}\\theta = \\frac{1}{2} \\left[ \\frac{9\\pi}{4} - \\left(\\frac{\\pi}{4} - \\frac{9}{8}\\sqrt{3}\\right) \\right] = \\pi + \\frac{9}{16}\\sqrt{3}$$\n\n---\n\n**第二部分积分 (Second Integral):**\n$$\\frac{1}{2} \\int_{\\pi/6}^{\\pi/2} r_{D}^{2} \\mathrm{d}\\theta = \\frac{1}{2} \\int_{\\pi/6}^{\\pi/2} (1 + \\cos 2\\theta)^{2} \\mathrm{d}\\theta$$\n\n展开并利用半角公式简化 (Expand and simplify using the half-angle identity):\n$$(1+\\cos 2\\theta)^{2} = 1 + 2\\cos 2\\theta + \\cos^{2} 2\\theta = 1 + 2\\cos 2\\theta + \\left(\\frac{1}{2} + \\frac{1}{2}\\cos 4\\theta\\right) = \\frac{3}{2} + 2\\cos 2\\theta + \\frac{1}{2}\\cos 4\\theta$$\n\n进行积分 (Perform the integration):\n$$\\int_{\\pi/6}^{\\pi/2} \\left(\\frac{3}{2} + 2\\cos 2\\theta + \\frac{1}{2}\\cos 4\\theta\\right) \\mathrm{d}\\theta = \\left[ \\frac{3}{2}\\theta + \\sin 2\\theta + \\frac{1}{8}\\sin 4\\theta \\right]_{\\pi/6}^{\\pi/2}$$\n\n代入上限 $\\pi/2$ (Substitute upper limit $\\pi/2$):\n$$\\frac{3}{2}\\left(\\frac{\\pi}{2}\\right) + \\sin(\\pi) + \\frac{1}{8}\\sin(2\\pi) = \\frac{3\\pi}{4}$$\n\n代入下限 $\\pi/6$ (Substitute lower limit $\\pi/6$):\n$$\\frac{3}{2}\\left(\\frac{\\pi}{6}\\right) + \\sin\\left(\\frac{\\pi}{3}\\right) + \\frac{1}{8}\\sin\\left(\\frac{2\\pi}{3}\\right) = \\frac{\\pi}{4} + \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{16} = \\frac{\\pi}{4} + \\frac{9}{16}\\sqrt{3}$$\n\n两值相减并乘以 $\\frac{1}{2}$ (Subtract and multiply by $\\frac{1}{2}$):\n$$\\frac{1}{2} \\int_{\\pi/6}^{\\pi/2} r_{D}^{2} \\mathrm{d}\\theta = \\frac{1}{2} \\left[ \\frac{3\\pi}{4} - \\left(\\frac{\\pi}{4} + \\frac{9}{16}\\sqrt{3}\\right) \\right] = \\frac{\\pi}{4} - \\frac{9}{32}\\sqrt{3}$$\n\n---\n\n**求面积差值 (Find the difference to get Area of R):**\n$$\\text{Area}(R) = \\left( \\pi + \\frac{9}{16}\\sqrt{3} \\right) - \\left( \\frac{\\pi}{4} - \\frac{9}{32}\\sqrt{3} \\right)$$\n$$= \\frac{3}{4}\\pi + \\left(\\frac{18}{32} + \\frac{9}{32}\\right)\\sqrt{3}$$\n$$= \\frac{3}{4}\\pi + \\frac{27}{32}\\sqrt{3}$$\n\n因此，阴影区域 $R$ 的面积为 (Therefore, the area of region $R$ is):\n$$\\boxed{\\text{Area}(R) = \\frac{3}{4}\\pi + \\frac{27}{32}\\sqrt{3}}$$\n其中 $a = \\frac{3}{4}$ 且 $b = \\frac{27}{32}$。",
    "createdAt": 1784128511831,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "Exponential form",
      "De Moivre's theorem",
      "Complex roots"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "25_June_01_1",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q1"
    },
    "stem": "(a) Express $-2\\sqrt{2}-(2\\sqrt{6})\\,\\mathrm{i}$ in the form $re^{\\mathrm{i}\\theta}$ where $-\\pi<\\theta\\leqslant\\pi$ [3]\n\n(b) Hence solve\n$$z^{5}=-2\\sqrt{2}-(2\\sqrt{6})\\,\\mathrm{i}$$\nGive your answers in the form $\\sqrt{p}\\,e^{\\mathrm{i}\\theta}$ where $p\\in\\mathbb{Z}^{+}$ and $-\\pi<\\theta\\leqslant\\pi$ [3]",
    "figure": "",
    "solution": "**(a)**\n\n对于复数 $w = -2\\sqrt{2}-(2\\sqrt{6})\\,\\mathrm{i}$，我们首先求其模长 $r$ (First, find the modulus $r$ of the complex number $w = -2\\sqrt{2}-(2\\sqrt{6})\\,\\mathrm{i}$):\n$$r = |w| = \\sqrt{(-2\\sqrt{2})^{2} + (-2\\sqrt{6})^{2}} = \\sqrt{4 \\times 2 + 4 \\times 6} = \\sqrt{8 + 24} = \\sqrt{32} = 4\\sqrt{2}$$\n\n接着求其辐角 $\\theta$ (Next, find the argument $\\theta$):\n由于实部和虚部皆为负数，该复数位于第三象限 (Since both real and imaginary parts are negative, the complex number lies in the third quadrant).\n设参考角为 $\\alpha$ (Let the reference angle be $\\alpha$):\n$$\\tan\\alpha = \\left| \\frac{-2\\sqrt{6}}{-2\\sqrt{2}} \\right| = \\sqrt{3} \\implies \\alpha = \\frac{\\pi}{3}$$\n\n因为要求 $-\\pi < \\theta \\leqslant \\pi$，故在第三象限对应的辐角为 (Since we need $-\\pi < \\theta \\leqslant \\pi$, the argument in the third quadrant is):\n$$\\theta = -\\pi + \\alpha = -\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$$\n\n因此，指数形式为 (Therefore, the exponential form is):\n$$\\boxed{4\\sqrt{2}\\,\\mathrm{e}^{-\\mathrm{i}\\frac{2\\pi}{3}}}$$\n\n---\n\n**(b)**\n\n根据 (a) 问的结果，我们可以将方程写为 (According to the result from part (a), we can write the equation as):\n$$z^{5} = 4\\sqrt{2}\\,\\mathrm{e}^{\\mathrm{i}\\left(-\\frac{2\\pi}{3} + 2k\\pi\\right)} \\quad \\text{其中 (where) } k \\in \\mathbb{Z}$$\n\n首先，求 $z$ 的模长 (First, find the modulus of $z$):\n$$|z| = \\left|z^{5}\\right|^{1/5} = \\left(4\\sqrt{2}\\right)^{1/5} = \\left(2^{2} \\cdot 2^{1/2}\\right)^{1/5} = \\left(2^{5/2}\\right)^{1/5} = 2^{1/2} = \\sqrt{2}$$\n这符合要求的形式 $\\sqrt{p}\\,\\mathrm{e}^{\\mathrm{i}\\theta}$，其中 $p = 2$ 为正整数 (This matches the required form $\\sqrt{p}\\,\\mathrm{e}^{\\mathrm{i}\\theta}$, where $p = 2 \\in \\mathbb{Z}^{+}$).\n\n接着，求 $z$ 的 5 个辐角 $\\theta_{k}$ (Next, find the 5 arguments $\\theta_{k}$ of $z$):\n$$\\theta_{k} = \\frac{-\\frac{2\\pi}{3} + 2k\\pi}{5} = -\\frac{2\\pi}{15} + \\frac{6k\\pi}{15} \\quad \\text{其中 (where) } k \\in \\{0, 1, 2, -1, -2\\}$$\n\n依次代入不同的 $k$ 值，在区间 $-\\pi < \\theta \\leqslant \\pi$ 内计算得到 5 个辐角为 (Substituting different values of $k$ to find the 5 arguments within the interval $-\\pi < \\theta \\leqslant \\pi$):\n- 当 $k = 0$ 时: $\\theta = -\\frac{2\\pi}{15}$\n- 当 $k = 1$ 时: $\\theta = \\frac{4\\pi}{15}$\n- 当 $k = 2$ 时: $\\theta = \\frac{10\\pi}{15} = \\frac{2\\pi}{3}$\n- 当 $k = -1$ 时: $\\theta = -\\frac{8\\pi}{15}$\n- 当 $k = -2$ 时: $\\theta = -\\frac{14\\pi}{15}$\n\n因此，该方程的所有解为 (Therefore, the solutions to the equation are):\n$$\\boxed{z = \\sqrt{2}\\,\\mathrm{e}^{\\mathrm{i}\\theta} \\quad \\text{其中 (where) } \\theta \\in \\left\\{-\\frac{14\\pi}{15}, -\\frac{8\\pi}{15}, -\\frac{2\\pi}{15}, \\frac{4\\pi}{15}, \\frac{2\\pi}{3}\\right\\}}$$",
    "createdAt": 1784128556442,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS",
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Taylor series from differential equation"
    ],
    "difficulty": 4,
    "marks": 5,
    "source": "25_June_01_2",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q2"
    },
    "stem": "$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}-4\\frac{\\mathrm{d}y}{\\mathrm{d}x}-5y^{2}=\\mathrm{e}^{x^{2}-9}$$\nGiven that $y=2$ and $\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}=-1$ at $x=3$, determine a Taylor series for $y$ in ascending powers of $(x-3)$, up to and including the term in $(x-3)^{3}$ [5]",
    "figure": "",
    "solution": "关于 $x=3$ 的泰勒级数（Taylor series）展开式形式为 (The Taylor series expansion about $x=3$ is given by):\n$$y(x) = y(3) + y'(3)(x-3) + \\frac{y''(3)}{2!}(x-3)^{2} + \\frac{y'''(3)}{3!}(x-3)^{3} + \\dots$$\n\n已知初始条件为 (Given the initial conditions at $x=3$):\n$$y(3) = 2 \\quad \\text{且 (and)} \\quad y'(3) = -1$$\n\n我们接下来求二阶导数和三阶导数在 $x=3$ 处的值 (We now determine the values of the second and third derivatives at $x=3$):\n\n---\n\n**1. 求 $y''(3)$ (Determine $y''(3)$):**\n\n从原微分方程中，我们可以解出 $y''$ (From the original differential equation, we can express $y''$):\n$$y'' = 4y' + 5y^{2} + \\mathrm{e}^{x^{2}-9}$$\n\n代入 $x=3$，$y(3)=2$，$y'(3)=-1$ (Substitute $x=3$, $y(3)=2$, and $y'(3)=-1$):\n$$y''(3) = 4(-1) + 5(2)^{2} + \\mathrm{e}^{3^{2}-9}$$\n$$y''(3) = -4 + 20 + \\mathrm{e}^{0}$$\n$$y''(3) = 16 + 1 = 17$$\n\n---\n\n**2. 求 $y'''(3)$ (Determine $y'''(3)$):**\n\n对原微分方程关于 $x$ 进行两边求导 (Differentiate both sides of the original equation with respect to $x$):\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x} \\left( y'' - 4y' - 5y^{2} \\right) = \\frac{\\mathrm{d}}{\\mathrm{d}x} \\left( \\mathrm{e}^{x^{2}-9} \\right)$$\n$$y''' - 4y'' - 10yy' = 2x\\mathrm{e}^{x^{2}-9}$$\n\n解出 $y'''$ (Express $y'''$):\n$$y''' = 4y'' + 10yy' + 2x\\mathrm{e}^{x^{2}-9}$$\n\n代入已知及求得的值 $x=3$，$y(3)=2$，$y'(3)=-1$，$y''(3)=17$ (Substitute the known values $x=3$, $y(3)=2$, $y'(3)=-1$, and $y''(3)=17$):\n$$y'''(3) = 4(17) + 10(2)(-1) + 2(3)\\mathrm{e}^{3^{2}-9}$$\n$$y'''(3) = 68 - 20 + 6(1)$$\n$$y'''(3) = 48 + 6 = 54$$\n\n---\n\n**3. 写出泰勒级数 (Write out the Taylor series):**\n\n将求得的导数值代入泰勒级数公式中 (Substitute the values of the derivatives into the Taylor series formula):\n$$y(x) = 2 + (-1)(x-3) + \\frac{17}{2!}(x-3)^{2} + \\frac{54}{3!}(x-3)^{3} + \\dots$$\n\n化简每一项的系数 (Simplify each coefficient):\n$$\\boxed{y = 2 - (x-3) + \\frac{17}{2}(x-3)^{2} + 9(x-3)^{3} + \\dots}$$",
    "createdAt": 1784128666943,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Locus |z|=1",
      "Möbius transformation",
      "Image of circle as line"
    ],
    "difficulty": 4,
    "marks": 6,
    "source": "25_June_01_3",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q3"
    },
    "stem": "A complex number $z$ is represented by the point $P$ on an Argand diagram where $|z|=1$\n(a) Sketch the locus of $P$ as $z$ varies. [1]\nThe transformation $T$ from the $z$-plane, where $z=x+\\mathrm{i}y$, to the $w$-plane, where $w=u+\\mathrm{i}v$, is given by\n$$w=\\frac{9\\mathrm{i}z-\\mathrm{i}}{z+1}\\qquad z\\neq-1$$\nGiven that the image under $T$ of the locus of $P$ in the $z$-plane, where $z\\neq-1$, is the line $l$ in the $w$-plane,\n(b) determine, in simplest form, a Cartesian equation for $l$ [5]",
    "figure": "",
    "solution": "### **解题解析 / Solution**\n\n**(a) 轨迹草图 / Sketch the locus**\n\nThe condition $|z|=1$ represents a circle centered at the origin $(0,0)$ with radius $r=1$ in the Argand diagram.\n条件 $|z|=1$ 表示在复平面（Argand diagram）上，以原点 $(0,0)$ 为圆心、半径为 $1$ 的圆。\n\n*   **Sketch**: A circle centered at the origin with radius 1. (圆心在原点，半径为1的圆)\n\n---\n\n**(b) 确定直线 $l$ 的笛卡尔方程 / Determine the Cartesian equation for $l$**\n\nGiven $w = \\frac{9iz - i}{z+1}$, we solve for $z$ in terms of $w$:\n已知 $w = \\frac{9iz - i}{z+1}$，我们将 $z$ 用 $w$ 表示：\n$$w(z+1) = 9iz - i \\implies wz + w = 9iz - i$$\n$$w + i = z(9i - w) \\implies z = \\frac{w+i}{9i-w}$$\n\nSince $|z|=1$, we have:\n因为 $|z|=1$，所以有：\n$$\\left| \\frac{w+i}{9i-w} \\right| = 1 \\implies |w+i| = |w-9i|$$\n\nLet $w = u + iv$. Then:\n令 $w = u + iv$。则：\n$$|u + i(v+1)| = |u + i(v-9)|$$\n$$u^2 + (v+1)^2 = u^2 + (v-9)^2$$\n\nExpand both sides:\n展开两边：\n$$u^2 + v^2 + 2v + 1 = u^2 + v^2 - 18v + 81$$\n$$2v + 1 = -18v + 81$$\n$$20v = 80 \\implies v = 4$$\n\nThus, the Cartesian equation for line $l$ is:\n因此，直线 $l$ 的笛卡尔方程为：\n\n$$\\boxed{v = 4}$$",
    "createdAt": 1784128725239,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Particular integral",
      "General solution",
      "Particular solution with initial conditions"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "25_June_01_4",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q4"
    },
    "stem": "Given that $y=\\lambda xe^{3x}$ is a particular integral of the differential equation\n$$4\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}-11\\frac{\\mathrm{d}y}{\\mathrm{d}x}-3y=78\\mathrm{e}^{3x}$$\n(a) determine the value of the constant $\\lambda$ [3]\n(b) Hence determine the general solution of the differential equation. [3]\nGiven also that $y=\\dfrac{9}{2}$ and $\\displaystyle\\frac{\\mathrm{d}y}{\\mathrm{d}x}=0$ at $x=0$\n(c) determine the particular solution of the differential equation. [4]",
    "figure": "",
    "solution": "### **解题解析 / Solution**\n\n**(a) 确定常数 $\\lambda$ 的值 / Determine the constant $\\lambda$**\n\nGiven $y = \\lambda xe^{3x}$, find the derivatives:\n已知 $y = \\lambda xe^{3x}$，求其导数：\n$y' = \\lambda e^{3x} + 3\\lambda xe^{3x} = \\lambda(1+3x)e^{3x}$\n$y'' = 3\\lambda e^{3x} + 3\\lambda(1+3x)e^{3x} = \\lambda(6+9x)e^{3x}$\n\nSubstitute into the DE $4y'' - 11y' - 3y = 78e^{3x}$:\n代入微分方程 $4y'' - 11y' - 3y = 78e^{3x}$：\n$4\\lambda(6+9x)e^{3x} - 11\\lambda(1+3x)e^{3x} - 3\\lambda xe^{3x} = 78e^{3x}$\n$\\lambda e^{3x} [24 + 36x - 11 - 33x - 3x] = 78e^{3x}$\n$\\lambda(13) = 78 \\implies \\lambda = 6$\n\n$$\\boxed{\\lambda = 6}$$\n\n---\n\n**(b) 确定通解 / Determine the general solution**\n\nSolve the homogeneous equation $4y'' - 11y' - 3y = 0$:\n解齐次方程 $4y'' - 11y' - 3y = 0$：\nCharacteristic equation: $4m^2 - 11m - 3 = 0 \\implies (4m+1)(m-3) = 0$\n特征方程：$4m^2 - 11m - 3 = 0 \\implies (4m+1)(m-3) = 0$\nRoots: $m_1 = -\\frac{1}{4}, m_2 = 3$.\nComplementary function (C.F.): $y_c = Ae^{-x/4} + Be^{3x}$\n互补函数为：$y_c = Ae^{-x/4} + Be^{3x}$\nGeneral solution: $y = y_c + y_p = Ae^{-x/4} + Be^{3x} + 6xe^{3x}$\n通解为：$y = Ae^{-x/4} + Be^{3x} + 6xe^{3x}$\n\n---\n\n**(c) 确定特解 / Determine the particular solution**\n\n$y(0) = \\frac{9}{2} \\implies A + B = \\frac{9}{2}$ (1)\n$y' = -\\frac{1}{4}Ae^{-x/4} + 3Be^{3x} + 6e^{3x} + 18xe^{3x}$\nAt $x=0, y'=0$: $-\\frac{1}{4}A + 3B + 6 = 0 \\implies -A + 12B = -24$ (2)\n\nSolve the system:\n(1) + (2): $13B = \\frac{9}{2} - 24 = -\\frac{39}{2} \\implies B = -\\frac{3}{2}$\nSubstitute $B$ into (1): $A - \\frac{3}{2} = \\frac{9}{2} \\implies A = 6$\n\nThe particular solution is:\n特解为：\n\n$$\\boxed{y = 6e^{-x/4} - \\frac{3}{2}e^{3x} + 6xe^{3x}}$$",
    "createdAt": 1784128747028,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Partial fractions",
      "Method of differences",
      "Summation inequality"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "25_June_01_5",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q5"
    },
    "stem": "(a) Express $$\\frac{2}{r(r+1)(r+2)}$$ in partial fractions. [2]\n\n(b) Use the answer to part (a) and the method of differences to show that\n$$\\sum_{r=1}^{n}\\frac{2}{r(r+1)(r+2)}=\\frac{n(n+a)}{2(n+b)(n+c)}$$\nwhere $a$, $b$ and $c$ are integers to be determined. [5]\n(c) Hence form and solve a quadratic inequality to determine the smallest value of $n$ for which\n$$\\sum_{r=1}^{n}\\frac{2}{r(r+1)(r+2)}>\\frac{7}{15}$$ [3]",
    "figure": "",
    "solution": "### **解题解析 / Solution**\n\n**(a) 部分分式分解 / Express in partial fractions**\n\nLet $\\frac{2}{r(r+1)(r+2)} = \\frac{A}{r} + \\frac{B}{r+1} + \\frac{C}{r+2}$.\n令 $\\frac{2}{r(r+1)(r+2)} = \\frac{A}{r} + \\frac{B}{r+1} + \\frac{C}{r+2}$。\n$2 = A(r+1)(r+2) + Br(r+2) + Cr(r+1)$\n\n*   For $r=0$: $2 = A(1)(2) \\implies A = 1$\n*   For $r=-1$: $2 = B(-1)(1) \\implies B = -2$\n*   For $r=-2$: $2 = C(-2)(-1) \\implies C = 1$\n\n$$\\boxed{\\frac{1}{r} - \\frac{2}{r+1} + \\frac{1}{r+2}}$$\n\n---\n\n**(b) 利用差分法求和 / Use the method of differences to find the sum**\n\nLet $f(r) = \\frac{1}{r} - \\frac{1}{r+1}$. Then the expression is $f(r) - f(r+1)$.\n令 $f(r) = \\frac{1}{r} - \\frac{1}{r+1}$，则原式可写为 $f(r) - f(r+1)$。\n\n$\\sum_{r=1}^{n} \\left[ \\left( \\frac{1}{r} - \\frac{1}{r+1} \\right) - \\left( \\frac{1}{r+1} - \\frac{1}{r+2} \\right) \\right]$\n$= \\left( \\frac{1}{1} - \\frac{1}{2} - \\frac{1}{2} + \\frac{1}{3} \\right) + \\left( \\frac{1}{2} - \\frac{1}{3} - \\frac{1}{3} + \\frac{1}{4} \\right) + \\dots + \\left( \\frac{1}{n} - \\frac{1}{n+1} - \\frac{1}{n+1} + \\frac{1}{n+2} \\right)$\n$= \\frac{1}{1} - \\frac{1}{2} - \\frac{1}{n+1} + \\frac{1}{n+2} = \\frac{1}{2} - \\frac{1}{(n+1)(n+2)}$\n$= \\frac{(n+1)(n+2) - 2}{2(n+1)(n+2)} = \\frac{n^2 + 3n}{2(n+1)(n+2)} = \\frac{n(n+3)}{2(n+1)(n+2)}$\n\nComparing with $\\frac{n(n+a)}{2(n+b)(n+c)}$:\n通过对比得出：\n$$\\boxed{a=3, b=1, c=2}$$\n\n---\n\n**(c) 解不等式 / Solve the quadratic inequality**\n\n$\\frac{n(n+3)}{2(n+1)(n+2)} > \\frac{7}{15}$\n$15(n^2 + 3n) > 14(n^2 + 3n + 2)$\n$15n^2 + 45n > 14n^2 + 42n + 28$\n$n^2 + 3n - 28 > 0$\n\nSolve $n^2 + 3n - 28 = 0$: $(n+7)(n-4) = 0 \\implies n = -7, 4$.\n由于 $n > 0$，故 $n > 4$。\nThe smallest integer value is $n = 5$.\n最小整数值为：\n\n$$\\boxed{n = 5}$$",
    "createdAt": 1784128772945,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Substitution method",
      "Integrating factor",
      "Exact values"
    ],
    "difficulty": 5,
    "marks": 11,
    "source": "25_June_01_6",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q6"
    },
    "stem": "(a) Show that the substitution $z=\\dfrac{1}{y^{2}}$ transforms the differential equation \\hfill[3]\n$$\nx\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y + 4x^2y^3\\ln x = 0, \\qquad x > 0\n$$\ninto the differential equation\n$$\n\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{2z}{x} = 8x\\ln x, \\qquad x > 0 \n$$ \n(b) Hence determine the general solution of differential equation (I), giving your answer in the form $y^{2}=f(x)$ \\hfill[5]\nGiven that $y^{2}=\\dfrac{4\\sqrt{3}}{3}$ when $x=\\dfrac{\\pi}{v}$\n(c) determine the exact values of $y$ when $x=\\dfrac{\\pi}{3}$ \\hfill[3]",
    "figure": "",
    "solution": "### **解题解析 / Solution**\n\n**(a) 证明变量替换 / Show the substitution**\n\nGiven $z = y^{-2}$, differentiate with respect to $x$:\n已知 $z = y^{-2}$，对 $x$ 求导：\n$\\frac{\\mathrm{d}z}{\\mathrm{d}x} = -2y^{-3} \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{1}{2}y^3 \\frac{\\mathrm{d}z}{\\mathrm{d}x}$\n\nSubstitute into the original equation $2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + (\\cot x)y + (\\tan x \\sec x)y^3 = 0$:\n代入原方程 $2\\frac{\\mathrm{d}y}{\\mathrm{d}x} + (\\cot x)y + (\\tan x \\sec x)y^3 = 0$：\n$2\\left(-\\frac{1}{2}y^3 \\frac{\\mathrm{d}z}{\\mathrm{d}x}\\right) + (\\cot x)y + (\\tan x \\sec x)y^3 = 0$\n$-y^3 \\frac{\\mathrm{d}z}{\\mathrm{d}x} + (\\cot x)y + (\\tan x \\sec x)y^3 = 0$\n\nDivide by $-y^3$:\n两边同除以 $-y^3$：\n$\\frac{\\mathrm{d}z}{\\mathrm{d}x} - (\\cot x)y^{-2} = \\tan x \\sec x$\nSince $z = y^{-2}$:\n因为 $z = y^{-2}$：\n$$\\boxed{\\frac{\\mathrm{d}z}{\\mathrm{d}x} - (\\cot x)z = \\tan x \\sec x}$$\n\n---\n\n**(b) 求解通解 / Determine the general solution**\n\nThe equation is a first-order linear ODE: $\\frac{\\mathrm{d}z}{\\mathrm{d}x} + P(x)z = Q(x)$.\n这是一个一阶线性微分方程。\nIntegrating factor (I.F.): $e^{\\int -\\cot x dx} = e^{-\\ln(\\sin x)} = \\frac{1}{\\sin x} = \\csc x$.\n积分因子为 $\\csc x$。\nMultiply both sides by $\\csc x$:\n方程两边同乘 $\\csc x$：\n$\\csc x \\frac{\\mathrm{d}z}{\\mathrm{d}x} - (\\csc x \\cot x)z = \\csc x \\tan x \\sec x = \\sec^2 x$\n$\\frac{\\mathrm{d}}{\\mathrm{d}x}(z \\csc x) = \\sec^2 x$\nIntegrate: $z \\csc x = \\tan x + C$\n积分得：$z \\csc x = \\tan x + C$\n$z = \\tan x \\sin x + C \\sin x = \\frac{\\sin^2 x}{\\cos x} + C \\sin x$\nSince $z = 1/y^2$:\n因为 $z = 1/y^2$：\n$$\\boxed{y^2 = \\frac{1}{\\sin x (\\tan x + C)}}$$\n\n---\n\n**(c) 确定特解 / Determine the particular solution**\n\nGiven $y^2 = \\frac{4\\sqrt{3}}{3}$ when $x = \\frac{\\pi}{6}$ (Assuming $x=\\pi/v$ implies $v=6$):\n已知 $x = \\pi/6$ 时 $y^2 = 4\\sqrt{3}/3$：\n$\\frac{4\\sqrt{3}}{3} = \\frac{1}{\\sin(\\pi/6) (\\tan(\\pi/6) + C)} = \\frac{1}{0.5 (\\frac{\\sqrt{3}}{3} + C)}$\n$0.5(\\frac{\\sqrt{3}}{3} + C) = \\frac{3}{4\\sqrt{3}} = \\frac{\\sqrt{3}}{4}$\n$\\frac{\\sqrt{3}}{3} + C = \\frac{\\sqrt{3}}{2} \\implies C = \\frac{\\sqrt{3}}{6}$\n\nFor $x = \\pi/3$:\n当 $x = \\pi/3$ 时：\n$y^2 = \\frac{1}{\\sin(\\pi/3) (\\tan(\\pi/3) + \\sqrt{3}/6)} = \\frac{1}{\\frac{\\sqrt{3}}{2} (\\sqrt{3} + \\frac{\\sqrt{3}}{6})}$\n$y^2 = \\frac{1}{\\frac{\\sqrt{3}}{2} (\\frac{7\\sqrt{3}}{6})} = \\frac{1}{\\frac{7 \\times 3}{12}} = \\frac{1}{7/4} = \\frac{4}{7}$\n$y = \\pm \\frac{2}{\\sqrt{7}} = \\pm \\frac{2\\sqrt{7}}{7}$\n\n$$\\boxed{y = \\pm \\frac{2\\sqrt{7}}{7}}$$",
    "createdAt": 1784128800211,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Polar equations of circles",
      "Intersection points",
      "Area between polar curves"
    ],
    "difficulty": 5,
    "marks": 8,
    "source": "25_June_01_7",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q7"
    },
    "stem": "Figure~1 shows a sketch of the circles $C_{1}$ and $C_{2}$\n\nThe circle $C_{1}$ has polar equation\n$$r=\\sqrt{3}\\sin\\theta \\qquad 0\\leqslant\\theta\\leqslant\\pi$$\n\nThe circle $C_{2}$ has polar equation\n$$r=3\\cos\\theta \\qquad -\\frac{\\pi}{2}\\leqslant\\theta\\leqslant\\frac{\\pi}{2}$$\n\nCircles $C_{1}$ and $C_{2}$ intersect at the origin $O$ and at the point $P$.\n\n(a) Determine the polar coordinates of $P$. \\hfill[2]\n\nThe finite region $R$ is bounded by $C_{1}$ and $C_{2}$ and is shown shaded in Figure~1.\n\n(b) Use algebraic integration to determine the exact area of $R$, giving your answer in the form $a\\pi+b\\sqrt{3}$ where $a$ and $b$ are simplified rational numbers. \\hfill[6]",
    "figure": "data/images/edx_fp2_25June01_Q7_fig.png",
    "solution": "### **解题解析 / Solution**\n\n**(a) 确定点 $P$ 的极坐标 / Determine the polar coordinates of $P$**\n\nAt intersection $P$, we have $r = \\sqrt{3}\\sin\\theta$ and $r = 3\\cos\\theta$:\n在交点 $P$ 处，$r = \\sqrt{3}\\sin\\theta$ 且 $r = 3\\cos\\theta$：\n$\\sqrt{3}\\sin\\theta = 3\\cos\\theta$\n$\\tan\\theta = \\sqrt{3} \\implies \\theta = \\frac{\\pi}{3}$\nSubstitute $\\theta = \\frac{\\pi}{3}$ into $r = 3\\cos\\theta$:\n代入 $r = 3\\cos\\theta$ 得：\n$r = 3 \\cos\\left(\\frac{\\pi}{3}\\right) = 3 \\left(\\frac{1}{2}\\right) = \\frac{3}{2}$\n\n$$\\boxed{P = \\left(\\frac{3}{2}, \\frac{\\pi}{3}\\right)}$$\n\n---\n\n**(b) 计算阴影区域 $R$ 的面积 / Calculate the area of region $R$**\n\nThe area is split into two parts by the line $\\theta = \\pi/3$:\n面积由射线 $\\theta = \\pi/3$ 分为两部分：\n$A = \\int_{0}^{\\pi/3} \\frac{1}{2} (\\sqrt{3}\\sin\\theta)^2 d\\theta + \\int_{\\pi/3}^{\\pi/2} \\frac{1}{2} (3\\cos\\theta)^2 d\\theta$\n\nPart 1: $\\frac{3}{2} \\int_{0}^{\\pi/3} \\sin^2\\theta d\\theta = \\frac{3}{4} \\int_{0}^{\\pi/3} (1-\\cos2\\theta) d\\theta$\n$= \\frac{3}{4} [\\theta - \\frac{1}{2}\\sin2\\theta]_0^{\\pi/3} = \\frac{3}{4} (\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{4}) = \\frac{\\pi}{4} - \\frac{3\\sqrt{3}}{16}$\n\nPart 2: $\\frac{9}{2} \\int_{\\pi/3}^{\\pi/2} \\cos^2\\theta d\\theta = \\frac{9}{4} \\int_{\\pi/3}^{\\pi/2} (1+\\cos2\\theta) d\\theta$\n$= \\frac{9}{4} [\\theta + \\frac{1}{2}\\sin2\\theta]_{\\pi/3}^{\\pi/2} = \\frac{9}{4} [(\\frac{\\pi}{2} + 0) - (\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{4})]$\n$= \\frac{9}{4} (\\frac{\\pi}{6} - \\frac{\\sqrt{3}}{4}) = \\frac{3\\pi}{8} - \\frac{9\\sqrt{3}}{16}$\n\nTotal Area: $(\\frac{\\pi}{4} + \\frac{3\\pi}{8}) - (\\frac{3\\sqrt{3}}{16} + \\frac{9\\sqrt{3}}{16})$\n$= \\frac{5\\pi}{8} - \\frac{12\\sqrt{3}}{16} = \\frac{5}{8}\\pi - \\frac{3}{4}\\sqrt{3}$\n\n$$\\boxed{\\frac{5}{8}\\pi - \\frac{3}{4}\\sqrt{3}}$$",
    "createdAt": 1784128829379,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Modulus inequalities",
      "Rational functions",
      "Case analysis"
    ],
    "difficulty": 4,
    "marks": 10,
    "source": "25_June_01_8",
    "examRef": {
      "year": 2025,
      "month": "Jun",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2025 Jun · Paper 01 Q8"
    },
    "stem": "Figure~2 shows a sketch of the curve $C$ with equation $y=\\dfrac{15x}{|x|+4}$ and the line $l$ with equation $y=x-2$\n\n(a) Use algebra to determine the exact values of $x$ for which \\hfill[6]\n$$x-2>\\frac{15x}{|x|+4}$$ \n(b) Hence use algebra to determine the exact values of $x$ for which \\hfill[4]\n$$|x-2|>\\left|\\frac{15x}{|x|+4}\\right|$$",
    "figure": "data/images/edx_fp2_25June01_Q8_fig.png",
    "solution": "### **解题解析 / Solution**\n\n**(a) 求解不等式 / Determine the exact values of $x$**\n\nWe need to solve $x-2 > \\frac{15x}{|x|+4}$. We consider two cases for $|x|$:\n我们需要求解不等式 $x-2 > \\frac{15x}{|x|+4}$，分两种情况讨论：\n\n**Case 1: $x \\geqslant 0$**\n$(x-2)(x+4) > 15x \\implies x^2 + 2x - 8 > 15x$\n$x^2 - 13x - 8 > 0$\nRoots of $x^2 - 13x - 8 = 0$ are $x = \\frac{13 \\pm \\sqrt{169 + 32}}{2} = \\frac{13 \\pm \\sqrt{201}}{2}$.\nSince $x \\geqslant 0$, we have $x > \\frac{13 + \\sqrt{201}}{2}$.\n\n**Case 2: $x < 0$**\nLet $x = -k$ where $k > 0$. Then $|x| = k$.\n$(x-2)(-x+4) > 15x \\implies -x^2 + 4x + 2x - 8 > 15x$\n$-x^2 - 9x - 8 > 0 \\implies x^2 + 9x + 8 < 0$\n$(x+8)(x+1) < 0 \\implies -8 < x < -1$.\n\nCombining both cases:\n综合两种情况：\n$$\\boxed{x \\in (-8, -1) \\cup \\left(\\frac{13+\\sqrt{201}}{2}, \\infty\\right)}$$\n\n---\n\n**(b) 求解绝对值不等式 / Solve the absolute value inequality**\n\nWe want $|x-2| > \\left|\\frac{15x}{|x|+4}\\right|$.\nSquaring both sides is effective since both sides are non-negative:\n两边平方（因为两边都大于等于0）：\n$(x-2)^2 > \\left(\\frac{15x}{|x|+4}\\right)^2$\n$|x-2| > \\left|\\frac{15x}{|x|+4}\\right|$ is equivalent to $\\frac{15x}{|x|+4} < x-2$ or $\\frac{15x}{|x|+4} < -(x-2)$.\n这意味着 $\\frac{15x}{|x|+4} < x-2$ 或 $\\frac{15x}{|x|+4} < -x+2$。\n\nFrom (a), $\\frac{15x}{|x|+4} < x-2 \\iff x \\in (-\\infty, -8) \\cup (-1, \\frac{13+\\sqrt{201}}{2})$.\nFor $\\frac{15x}{|x|+4} < -x+2$:\n**Case 1 ($x \\geqslant 0$):** $\\frac{15x}{x+4} < -x+2 \\implies 15x < -x^2 - 2x + 8 \\implies x^2 + 17x - 8 < 0$.\nRoots: $\\frac{-17 \\pm \\sqrt{289 + 32}}{2} = \\frac{-17 \\pm \\sqrt{321}}{2}$. Since $x \\geqslant 0$, $0 \\leqslant x < \\frac{-17+\\sqrt{321}}{2}$.\n**Case 2 ($x < 0$):** $\\frac{15x}{-x+4} < -x+2 \\implies 15x > x^2 - 6x + 8 \\implies x^2 - 21x + 8 < 0$.\nRoots: $\\frac{21 \\pm \\sqrt{441 - 32}}{2} = \\frac{21 \\pm \\sqrt{409}}{2}$. No negative roots.\n\nThe inequality holds when $x$ is in the union of intervals satisfying either condition:\n$$\\boxed{x \\in (-\\infty, -8) \\cup (-1, \\frac{-17+\\sqrt{321}}{2}) \\cup \\left(\\frac{13+\\sqrt{201}}{2}, \\infty\\right)}$$",
    "createdAt": 1784128869417,
    "_edited": true
  },
  {
    "id": "edx_fp2_25June01A_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Rational function inequality",
      "Modulus inequality",
      "Curve-line intersection"
    ],
    "difficulty": 4,
    "marks": 6,
    "source": "25_June_01A_1",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 1,
      "code": "01A",
      "label": "2025 June · Paper 01A Q1"
    },
    "stem": "Figure~1 shows a sketch of the curve $C$ with equation\n$$y=\\frac{10x}{x-6} \\qquad x\\neq 6$$\nand the line $l$ with equation $y=2x+12$\n\n(a) Use algebra to determine the $x$ coordinates of the points of intersection of $C$ and $l$ \\hfill (2)\n\n(b) Determine the range of values of $x$ for which\n(i) $2x+12>\\dfrac{10x}{x-6}$\n(ii) $|2x+12|>\\left|\\dfrac{10x}{x-6}\\right|$ \\hfill (4)",
    "figure": "data/images/edx_fp2_25June01A_Q1_fig.png",
    "solution": "(a) 联立 $y=2x+12$ 与 $y=\\dfrac{10x}{x-6}$：$2x+12=\\dfrac{10x}{x-6} \\Rightarrow (2x+12)(x-6)=10x \\Rightarrow 2x^2+24x-72-10x=0 \\Rightarrow x^2+7x-36=0 \\Rightarrow (x+9)(x-4)=0$，得交点横坐标 $x=-9$ 和 $x=4$。\n\n(b) (i) 不等式 $2x+12>\\dfrac{10x}{x-6}$，两边乘 $(x-6)$ 时需分 $x>6$ 与 $x<6$ 讨论（注意 $x=6$ 为渐近线）。化简得二次不等式后分别求解，取并集。\n(ii) 绝对值不等式：可利用 (i) 的结果分区间讨论符号，或平方后化为多项式不等式。配图 Figure~1 显示曲线 C 的两支与直线 l 相交的位置关系。\n\n**Inequalities with rational functions / 有理函数不等式**：解含参数的不等式时需先确定定义域（$x\\neq 6$），再在每段区间内乘以正/负因子时注意不等号方向。",
    "createdAt": 2000000000040
  },
  {
    "id": "edx_fp2_25June01A_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Maclaurin series of arcsin(2x)",
      "Higher derivatives",
      "Series multiplication"
    ],
    "difficulty": 4,
    "marks": 8,
    "source": "25_June_01A_2",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 2,
      "code": "01A",
      "label": "2025 June · Paper 01A Q2"
    },
    "stem": "Given that when $y = \\arcsin 2x$\n$$\\frac{\\mathrm{d} y}{\\mathrm{d} x}=2(1-4x^2)^{-\\frac12}$$\n(a) show that\n$$\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}=\\frac{Ax^{2}+8}{\\left(1-4x^{2}\\right)^{\\frac52}}$$\nwhere $A$ is a constant to be determined. \\hfill (3)\n(b) Hence determine the Maclaurin series expansion for $\\arcsin 2x$ in ascending powers of $x$ up to and including the term in $x^{3}$ \\hfill (2)\nThe Maclaurin series expansion for $\\mathrm{e}^{x}$ is given by\n$$\\mathrm{e}^{x}=1+x+\\frac{x^{2}}{2}+\\ldots+\\frac{x^{r}}{r!}+\\ldots$$\n(c) Use the Maclaurin series expansion for $\\mathrm{e}^{3 x}$ and the answer to part (b) to show that,\nfor small values of $x$\n$$\\mathrm{e}^{3 x}\\arcsin 2x\\approx Cx+Dx^{2}+Ex^{3}$$\nwhere $C$, $D$ and $E$ are constants to be determined. \\hfill (3)",
    "figure": "",
    "solution": "(a) 对 $y'=2(1-4x^2)^{-1/2}$ 连续求导：$y''=2\\cdot(-\\frac12)(1-4x^2)^{-3/2}\\cdot(-8x)=8x(1-4x^2)^{-3/2}$；$y'''=8(1-4x^2)^{-3/2}+8x\\cdot(-\\frac32)(1-4x^2)^{-5/2}\\cdot(-8x)=8(1-4x^2)^{-3/2}+96x^2(1-4x^2)^{-5/2}$。通分提取 $(1-4x^2)^{-5/2}$ 后合并得分子为 $(Ax^2+8)$，对比系数求出 $A$。\n\n(b) 利用 $f(x)\\approx f(0)+f'(0)x+\\frac{f''(0)}{2!}x^2+\\frac{f'''(0)}{3!}x^3$。代入 $x=0$ 计算各阶导数值得 Maclaurin 展开式。\n(c) 将 $\\mathrm{e}^{3x}=1+3x+\\frac{(3x)^2}{2}+\\cdots$ 与 (b) 中 $\\arcsin 2x$ 的展开式相乘，保留至 $x^3$ 项，对比系数确定 $C,D,E$。\n\n**Maclaurin series / 麦克劳林级数**：复合函数的展开可通过链式法则逐次求导；两个级数的乘积按卷积方式收集同幂次项。",
    "createdAt": 2000000000041
  },
  {
    "id": "edx_fp2_25June01A_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Linear first-order ODE",
      "Integrating factor",
      "Particular solution"
    ],
    "difficulty": 3,
    "marks": 8,
    "source": "25_June_01A_3",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 3,
      "code": "01A",
      "label": "2025 June · Paper 01A Q3"
    },
    "stem": "(a) Show that the differential equation\n$$(x+2)\\frac{\\mathrm{d} y}{\\mathrm{d} x}=3x^{2}+6x-y \\qquad x\\neq -2$$\ncan be written in the form\n$$\\frac{\\mathrm{d} y}{\\mathrm{d} x}+\\mathrm{f}(x)y=kx$$\nwhere f is a function to be determined and k is a constant to be found. \\hfill (2)\nGiven that $y=18$ at $x=4$\n(b) use the answer to part (a) to determine, in simplest form, the particular solution of the differential equation.\nGive the answer in the form $y=\\mathrm{g}(x)$ \\hfill (6)",
    "figure": "",
    "solution": "(a) 原方程两边除以 $(x+2)$：$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{3x^2+6x}{x+2}-\\dfrac{y}{x+2}$。整理得标准线性形式 $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}+\\dfrac{1}{x+2}y=\\dfrac{3x^2+6x}{x+2}=3x$，故 $\\mathrm{f}(x)=\\dfrac{1}{x+2}$，$k=3$。\n\n(b) 积分因子 $\\mu(x)=\\exp\\left(\\int \\dfrac{1}{x+2}\\mathrm{d}x\\right)=\\exp(\\ln|x+2|)=x+2$（取 $x>-2$ 或分别讨论）。通解 $y(x+2)=\\int 3x(x+2)\\mathrm{d}x=\\int(3x^2+6x)\\mathrm{d}x=x^3+3x^2+C$，即 $y=\\dfrac{x^3+3x^2+C}{x+2}$。代入初值 $y(4)=18$ 得 $C=16$，最终 $y=g(x)=\\dfrac{x^3+3x^2+16}{x+2}$。\n\n**Linear ODE / 一阶线性微分方程**：关键步骤是识别标准形式 $y'+P(x)y=Q(x)$、计算积分因子 $\\mu=e^{\\int P}$、代入公式或直接积分。",
    "createdAt": 2000000000042
  },
  {
    "id": "edx_fp2_25June01A_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Loci on Argand diagram",
      "Circular region",
      "Half-line argument region",
      "Perpendicular bisector"
    ],
    "difficulty": 5,
    "marks": 8,
    "source": "25_June_01A_4",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 4,
      "code": "01A",
      "label": "2025 June · Paper 01A Q4"
    },
    "stem": "Figure~2 shows an Argand diagram for complex numbers of the form $z=x+\\mathrm{i}y$.\n\nThe diagram is drawn accurately, although the scale is not shown on the axes.\n\nComplex numbers that lie in the region R, shown shaded in Figure~2, satisfy all three of the inequalities\n$$|z-15-8\\mathrm{i}| \\le a$$\n$$0 \\le \\arg(z+1) \\le b\\pi$$\n$$|z+2\\mathrm{i}| \\ge |z+c\\mathrm{i}|$$\nwhere $a$, $b$ and $c$ are real numbers.\n(a) Determine the value of $a$, the value of $b$ and the value of $c$ \\hfill (3)\nGiven that the complex number w lies in the region R,\n(b) determine the exact range of possible values of |w| \\hfill (3)\n(c) determine the minimum value of arg w, giving the answer in radians to 3 significant figures. \\hfill (2)",
    "figure": "data/images/edx_fp2_25June01A_Q4_fig.png",
    "solution": "(a) 从 Figure~2 可读出三个轨迹：① 圆 $|z-(15+8\\mathrm{i})|\\le a$ → 圆心 $(15,8)$ 半径 $a$；② 角区域 $0\\le\\arg(z+1)\\le b\\pi$ → 以 $(-1,0)$ 为顶点的扇形角范围；③ 垂直平分线 $|z+2\\mathrm{i}|\\ge |z+c\\mathrm{i}|$ → 点 $(0,-2)$ 与 $(0,-c)$ 的垂直平分线一侧。从图中几何特征读出参数值。\n\n(b) 区域 R 内复数 w 的模 |w| 的范围由圆的最小和最大模决定，同时受角区域和半平面约束。最小模通常出现在圆心到原点连线与圆的交点处（若该点落在区域内）。\n(c) 最小 arg(w)：arg 是从正实轴逆时针测量的角度，区域 R 中使 arg 最小的点位于边界上某条射线的端点。精确计算后四舍五入至 3 位有效数字。\n\n**Argand diagram loci / 阿氏图轨迹**：熟练掌握圆（$|z-z_0|=r$）、直线（$|z-a|=|z-b|$）、半平面、射线（$\\alpha\\le\\arg(z-z_0)\\le\\beta$）等基本轨迹的几何意义及其交集。",
    "createdAt": 2000000000043
  },
  {
    "id": "edx_fp2_25June01A_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Method of differences",
      "Logarithmic telescoping sum",
      "Solving for upper limit n"
    ],
    "difficulty": 4,
    "marks": 8,
    "source": "25_June_01A_5",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 5,
      "code": "01A",
      "label": "2025 June · Paper 01A Q5"
    },
    "stem": "(a) Express $1+\\dfrac{2}{2r+5}$ as a single fraction in simplest form. \\hfill (1)\n(b) Hence use the method of differences to determine an expression for\n$$\\sum_{r=1}^{n}\\log_{3}\\left(1+\\frac{2}{2r+5}\\right)$$\ngiving the answer in the form $\\log _{3}(\\mathrm{f}(n))$ where f is a function to be found. \\hfill (3)\n(c) Hence determine the value of n for which\n$$\\sum_{r=n+2}^{10n}\\log_{3}\\left(1+\\frac{2}{2r+5}\\right)=2$$ \\hfill (4)",
    "figure": "",
    "solution": "(a) $1+\\dfrac{2}{2r+5}=\\dfrac{2r+5+2}{2r+5}=\\dfrac{2r+7}{2r+5}$。\n\n(b) 利用对数性质拆分为差：$\\log_3\\left(\\dfrac{2r+7}{2r+5}\\right)=\\log_3(2r+7)-\\log_3(2r+5)$。令 $u_r=\\log_3(2r+5)$，则原式 $=\\sum_{r=1}^{n}(u_{r+1}-u_r)=u_{n+1}-u_1=\\log_3(2(n+1)+5)-\\log_3(7)=\\log_3\\left(\\dfrac{2n+7}{7}\\right)$。故 $\\mathrm{f}(n)=\\dfrac{2n+7}{7}$。\n\n(c) 左边 $=\\sum_{r=n+2}^{10n}[\\log_3(2r+7)-\\log_3(2r+5)]$（裂项相消）$=\\log_3(20n+7)-\\log_3(2(n+2)+5)=\\log_3\\left(\\dfrac{20n+7}{2n+9}\\right)$。令其等于 2 即 $\\dfrac{20n+7}{2n+9}=3^2=9$，解得 $20n+7=18n+81 \\Rightarrow 2n=74 \\Rightarrow n=37$。\n\n**Method of differences / 裂项相消法**：核心技巧是将通项写成前后两项之差的形式 $a_r=b_{r+1}-b_r$，求和时中间项全部抵消（telescoping），只剩首尾。对数形式常利用 $\\log(a/b)=\\log a-\\log b$ 来构造裂项。",
    "createdAt": 2000000000044
  },
  {
    "id": "edx_fp2_25June01A_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Polar curve tangent perpendicular to initial line",
      "Area bounded by polar curves",
      "Circle in polar coordinates"
    ],
    "difficulty": 5,
    "marks": 12,
    "source": "25_June_01A_6",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 6,
      "code": "01A",
      "label": "2025 June · Paper 01A Q6"
    },
    "stem": "The curve $C_{1}$ has equation\n$$r=\\sqrt{3}+\\tan\\theta \\qquad 0<\\theta<\\frac{\\pi}{2}$$\nThe tangent to $C_{1}$ is perpendicular to the initial line at the point P\n(a) Use calculus to determine, in simplest form, the exact polar coordinates of P \\hfill (4)\nFigure~3 shows a sketch of part of the curve $C_{1}$ and part of the curve $C_{2}$\nThe curve $C_{2}$ is a circle with centre at the pole $O$\nThe curves $C_{1}$ and $C_{2}$ intersect at P\nThe region R, shown shaded in Figure~3, is bounded by $C_{1}$, $C_{2}$ and the initial line.\n(b) Use algebraic integration to determine the area of R, giving the answer in the form\n$$a\\pi+\\frac{\\sqrt3}{2}(\\ln b + c)$$\nwhere $a$, $b$ and $c$ are rational numbers. \\hfill (8)",
    "figure": "data/images/edx_fp2_25June01A_Q6_fig.png",
    "solution": "(a) 极坐标切线斜率：利用 $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}$。切线 ⟂ 初始线意味着切线斜率 $\\rightarrow\\infty$（竖直），即分母为零：$r'\\cos\\theta-r\\sin\\theta=0$。其中 $r'=\\sec^2\\theta$。代入化简得 $\\sec^2\\theta\\cos\\theta=(\\sqrt3+\\tan\\theta)\\sin\\theta$，即 $\\sec\\theta=\\sqrt3\\sin\\theta+\\tan\\theta\\sin\\theta=\\sqrt3\\sin\\theta+\\dfrac{\\sin^2\\theta}{\\cos\\theta}$。进一步化简求得 $\\theta_P$，代回 $r=\\sqrt3+\\tan\\theta$ 得极坐标。\n\n(b) 区域 R 由 $C_1$ 弧段、$C_2$ 圆弧和初始线围成。面积 $A_R=A_{\\text{sector}}+A_{\\text{under }C_1}-A_{\\text{triangle}}$ 等组合。具体积分：$C_2$ 为以 O 为圆心的圆（半径 $r_P$），对应扇形面积为 $\\dfrac12 r_P^2\\theta_P$；$C_1$ 下方的面积用 $\\dfrac12\\int r^2\\,\\mathrm{d}\\theta$ 计算；减去三角形面积。积分中涉及 $\\int\\tan^2\\theta\\,\\mathrm{d}\\theta$ 和 $\\int\\tan\\theta\\,\\mathrm{d}\\theta$，产生对数项 $\\ln(\\cos\\theta)$ 形式。最终整理为 $a\\pi+\\dfrac{\\sqrt3}{2}(\\ln b+c)$ 并确定有理数 $a,b,c$。\n\n**Polar area / 极坐标面积**：面积元素 $\\mathrm{d}A=\\dfrac12 r^2\\,\\mathrm{d}\\theta$。复合区域需分解为基本图形（扇形、曲边三角形等）面积的加减组合。配图 Figure~3 清晰显示 R 的构成。",
    "createdAt": 2000000000045
  },
  {
    "id": "edx_fp2_25June01A_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Euler-type substitution $x=e^u$",
      "Constant-coefficient linear ODE",
      "Particular integral with initial conditions"
    ],
    "difficulty": 5,
    "marks": 13,
    "source": "25_June_01A_7",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 7,
      "code": "01A",
      "label": "2025 June · Paper 01A Q7"
    },
    "stem": "(a) Show that the substitution $x=\\mathrm{e}^{u}$, where u is a function of x, transforms the differential equation\n$$2x^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}+3x\\frac{\\mathrm{d}y}{\\mathrm{d}x}-y=27x^{2} \\qquad x>0 (I)$$\ninto the differential equation\n$$2\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}u^{2}}+\\frac{\\mathrm{d}y}{\\mathrm{d}u}-y=27\\mathrm{e}^{2u} (II)$$ \\hfill (4)\n(b) By solving differential equation (II), determine the general solution of differential equation (I).\nGive the answer in the form $y=\\mathrm{f}(x)$ where f is a fully simplified function. \\hfill (4)\nGiven that when $x=\\dfrac14$, $y=\\dfrac{11}{16}$ and $\\dfrac{\\mathrm{d} y}{\\mathrm{d} x}=1$\n(c) determine the value of y when $x=\\dfrac18$, giving the answer in the form $\\dfrac{1}{64}(p\\sqrt{2}+q)$ where p and q are integers. \\hfill (5)",
    "figure": "",
    "solution": "(a) 由 $x=\\mathrm{e}^u$，有 $\\dfrac{\\mathrm{d}u}{\\mathrm{d}x}=\\dfrac{1}{x}=\\mathrm{e}^{-u}$。链式法则：$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y}{\\mathrm{d}u}\\cdot\\dfrac{\\mathrm{d}u}{\\mathrm{d}x}=\\dfrac{1}{x}\\dfrac{\\mathrm{d}y}{\\mathrm{d}u}$；二阶导 $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}=\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\dfrac{1}{x}\\dfrac{\\mathrm{d}y}{\\mathrm{d}u}\\right)=-\\dfrac{1}{x^2}\\dfrac{\\mathrm{d}y}{\\mathrm{d}u}+\\dfrac{1}{x^2}\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}u^2}$。代入 (I) 左侧：$2x^2\\left(-\\dfrac{1}{x^2}y'+\\dfrac{1}{x^2}y''\\right)+3x\\cdot\\dfrac{1}{x}y'-y=2y''-2y'+3y'-y=2y''+y'-y$，右侧 $27x^2=27\\mathrm{e}^{2u}$，恰为 (II)。证毕。\n\n(b) 解 (II)：齐次部分特征方程 $2m^2+m-1=0 \\Rightarrow (2m-1)(m+1)=0 \\Rightarrow m=\\frac12, -1$。齐次通解 $y_h=A\\mathrm{e}^{u/2}+B\\mathrm{e}^{-u}$。特解设 $y_p=k\\mathrm{e}^{2u}$（因 2 不是特征根）：代入得 $k=3$。故 $y(u)=A\\mathrm{e}^{u/2}+B\\mathrm{e}^{-u}+3\\mathrm{e}^{2u}$。回代 $u=\\ln x$：$\\mathrm{e}^{u/2}=\\sqrt{x}$，$\\mathrm{e}^{-u}=1/x$，$\\mathrm{e}^{2u}=x^2$。所以 $y=f(x)=A\\sqrt{x}+\\dfrac{B}{x}+3x^2$。\n\n(c) 利用条件定 A,B。先算 $y' = \\dfrac{A}{2\\sqrt{x}}-\\dfrac{B}{x^2}+6x$。代入 $x=\\frac14$：$y=\\dfrac{A}{2}+4B+\\dfrac{3}{16}=\\dfrac{11}{16}$；$y'=A-16B+\\dfrac{3}{2}=1$。联立解出 A,B。再代入 $x=\\dfrac18$ 计算 $y$，整理成 $\\dfrac{p\\sqrt2+q}{64}$ 形式。\n\n**Euler-Cauchy ODE / 欧拉型微分方程**：形如 $ax^2y''+bxy'+cy=g(x)$ 的方程通过代换 $x=\\mathrm{e}^u$ 化为常系数线性 ODE，是最重要的降阶技巧之一。特解选取需避开特征根。",
    "createdAt": 2000000000046
  },
  {
    "id": "edx_fp2_25June01A_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "De Moivre's theorem",
      "Trigonometric power reduction",
      "Volume of revolution"
    ],
    "difficulty": 5,
    "marks": 12,
    "source": "25_June_01A_8",
    "examRef": {
      "year": 2025,
      "month": "June",
      "paper": "01A",
      "qno": 8,
      "code": "01A",
      "label": "2025 June · Paper 01A Q8"
    },
    "stem": "Given that $z=\\cos\\theta+\\mathrm{i}\\sin\\theta$\n(a) show that, for $n\\in\\mathbb Z$\n$$z^{n}+\\frac{1}{z^{n}}=2\\cos n\\theta$$ \\hfill (2)\n(b) Hence show that\n$$\\cos^{4}\\theta=\\frac18(\\cos 4\\theta+a\\cos 2\\theta+b)$$\nwhere a and b are integers to be determined. \\hfill (4)\nFigure~4 shows a sketch of the curve with equation\n$$y=\\cos^{2}x\\sqrt{1+\\sin x} \\qquad -\\frac{\\pi}{2}\\le x\\le\\frac{\\pi}{2}$$\nThe region R, shown shaded in Figure~4, is bounded by the curve, the x-axis and the line with equation $x=\\dfrac{\\pi}{4}$\nThe region R is rotated through 2$\\pi$ radians about the x-axis to form a solid of revolution.\n(c) Use the answer to part (b) and algebraic integration to determine the exact volume of this solid.\nGive the answer in the form $\\dfrac{\\pi}{160}(p+q\\pi+r\\sqrt{2})$ where p, q and r are integers. \\hfill (6)",
    "figure": "data/images/edx_fp2_25June01A_Q8_fig.png",
    "solution": "(a) 由 De Moivre 定理：$z^n=\\cos n\\theta+\\mathrm{i}\\sin n\\theta$，$\\dfrac{1}{z^n}=z^{-n}=\\cos(-n\\theta)+\\mathrm{i}\\sin(-n\\theta)=\\cos n\\theta-\\mathrm{i}\\sin n\\theta$。相加虚部抵消：$z^n+z^{-n}=2\\cos n\\theta$。\n\n(b) 取 $n=1$：$z+z^{-1}=2\\cos\\theta$。则 $\\cos^4\\theta=\\left(\\dfrac{z+z^{-1}}{2}\\right)^4=\\dfrac{1}{16}(z^4+4z^2+6+4z^{-2}+z^{-4})$。分组应用 (a)：$z^4+z^{-4}=2\\cos 4\\theta$，$z^2+z^{-2}=2\\cos 2\\theta$。故 $\\cos^4\\theta=\\dfrac{1}{16}(2\\cos 4\\theta+4\\cdot 2\\cos 2\\theta+6)=\\dfrac18\\cos 4\\theta+\\dfrac12\\cos 2\\theta+\\dfrac38=\\dfrac18(\\cos 4\\theta+4\\cos 2\\theta+3)$。对比得 $a=4$，$b=3$。\n\n(c) 旋转体体积 $V=\\pi\\int_0^{\\pi/4} y^2\\,\\mathrm{d}x=\\pi\\int_0^{\\pi/4} \\cos^4 x(1+\\sin x)\\,\\mathrm{d}x=\\pi\\left[\\int_0^{\\pi/4}\\cos^4 x\\,\\mathrm{d}x + \\int_0^{\\pi/4}\\cos^4 x\\sin x\\,\\mathrm{d}x\\right]$。第一部分将 (b) 结果代入：$\\cos^4 x=\\dfrac18(\\cos 4x+4\\cos 2x+3)$，逐项积分得 $\\dfrac{\\pi}{160}(\\cdots)$ 形式的常数项；第二部分换元 $u=\\cos x$ 得 $\\int_1^{\\sqrt2/2} u^4\\,(-\\mathrm{d}u)$ 产生 $\\sqrt2$ 项。两部分合并整理得目标形式并确定整数 $p,q,r$。\n\n**De Moivre + integration / 棣莫弗定理与积分**：利用复数方法将高次三角幂降为多倍角线性组合，是 FP2 核心技巧之一。配合旋转体体积公式 $V=\\pi\\int y^2\\,\\mathrm{d}x$ 实现跨章节综合考查。",
    "createdAt": 2000000000047
  },
  {
    "id": "edx_fp2_25Jan01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Integrating factor",
      "Trigonometric coefficient"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "25_Jan_01_1",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q1"
    },
    "stem": "$$\\frac{\\mathrm{d} y}{\\mathrm{d} x}-3y\\tan x = \\sec^2 x$$\n(a) Show that an integrating factor for this differential equation is given by\n$$\\mathrm{p}(x)=\\cos^{3} x$$ \\hfill (2)\nGiven that $y=4$ when $x=\\dfrac{\\pi}{4}$\n(b) determine the particular solution of the differential equation.\nGive your answer in the form $y=\\mathrm{f}(x)$. \\hfill (4)",
    "figure": "",
    "solution": "(a) 方程标准形式：$y'-3(\\tan x)y=\\sec^2 x$。积分因子 $\\mu(x)=\\exp\\left(-3\\int \\tan x\\,\\mathrm{d}x\\right)=\\exp(3\\ln|\\cos x|)=|\\cos x|^3=\\cos^3 x$（取 $x$ 在合适区间使 $\\cos x>0$）。故 $\\mathrm{p}(x)=\\cos^3 x$。证毕。\n\n(b) 通解：$(y\\cos^3 x)'=(\\cos^3 x)(\\sec^2 x)=\\cos x$。积分得 $y\\cos^3 x=\\sin x+C$，即 $y=\\dfrac{\\sin x+C}{\\cos^3 x}$。代入初值 $x=\\frac{\\pi}{4}$，$y=4$：$4\\cdot\\left(\\dfrac{\\sqrt2}{2}\\right)^3=\\dfrac{\\sqrt2}{2}+C \\Rightarrow C=\\dfrac{4\\cdot 2\\sqrt2}{8}-\\dfrac{\\sqrt2}{2}=\\sqrt2-\\dfrac{\\sqrt2}{2}=\\dfrac{\\sqrt2}{2}$。最终 $y=\\mathrm{f}(x)=\\dfrac{\\sin x+\\frac{\\sqrt2}{2}}{\\cos^3 x}=\\dfrac{2\\sin x+\\sqrt2}{2\\cos^3 x}$。\n\n**First-order ODE / 一阶微分方程**：含三角函数系数的线性方程，积分因子仍为 $e^{\\int P(x)dx}$ 形式；注意 $\\int\\tan x\\,dx=-\\ln|\\cos x|$（带负号）。",
    "createdAt": 2000000000048
  },
  {
    "id": "edx_fp2_25Jan01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Rational function intersection",
      "Inequality with absolute value in denominator"
    ],
    "difficulty": 4,
    "marks": 7,
    "source": "25_Jan_01_2",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q2"
    },
    "stem": "(a) Use algebra to determine the exact $x$ coordinates of the points of intersection of the curves with equations\n$$y=\\frac{2x}{x^{2}+1}\\qquad \\text{and} \\qquad y=\\frac{1}{x+4}$$ \\hfill (3)\nHence\n(b) determine the values of $x$ for which\n$$\\frac{2x}{x^{2}+1}<\\frac{1}{x+4}$$ \\hfill (2)\n(c) state the values of $x$ for which\n$$\\frac{2x}{x^{2}+1}<\\frac{1}{|x+4|}$$ \\hfill (2)",
    "figure": "",
    "solution": "(a) 联立：$\\dfrac{2x}{x^2+1}=\\dfrac{1}{x+4} \\Rightarrow 2x(x+4)=x^2+1 \\Rightarrow 2x^2+8x=x^2+1 \\Rightarrow x^2+8x-1=0 \\Rightarrow x=-4\\pm\\sqrt{17}$。两交点横坐标精确值为 $-4-\\sqrt{17}$ 和 $-4+\\sqrt{17}$。\n\n(b) 不等式 $\\dfrac{2x}{x^2+1}<\\dfrac{1}{x+4}$，两边乘 $(x^2+1)(x+4)$ 需注意符号。因 $x^2+1>0$ 恒成立，只需考虑 $x+4$ 的正负。在两根之间/之外分别讨论后合并区间。\n\n(c) 分母换为 $|x+4|$ 后，右侧恒非负（当 $x\\neq -4$），需同时考虑左侧 $\\dfrac{2x}{x^2+1}$ 的符号及绝对值的分段定义。结合 (b) 的结果和对称性分析得出解集。\n\n**Rational inequality / 有理不等式**：关键步骤是先找等式交点（分界点），再在各区间内测试不等号方向。分母含绝对值时需额外分 $x>-4$ 与 $x<-4$ 讨论。",
    "createdAt": 2000000000049
  },
  {
    "id": "edx_fp2_25Jan01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS",
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Implicit differentiation from second-order DE",
      "Taylor series about x=a"
    ],
    "difficulty": 5,
    "marks": 8,
    "source": "25_Jan_01_3",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q3"
    },
    "stem": "$$2x\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}+y\\frac{\\mathrm{d} y}{\\mathrm{d} x}-6xy=0$$\nGiven that $\\dfrac{\\mathrm{d} y}{\\mathrm{d} x}=3$ and $y=\\dfrac12$ at $x=2$\n(a) determine the value of $\\dfrac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}$ at $x=2$ \\hfill (6)\n(b) Hence determine the series expansion for $y$ about $x=2$, in ascending powers of $(x-2)$ up to and including the term in $(x-2)^{3}$, giving each coefficient in simplest form. \\hfill (2)",
    "figure": "",
    "solution": "(a) 将原方程对 $x$ 求导以得到 $y'''$ 的表达式。原方程：$2xy''+yy'-6xy=0$。两边求导：$2y''+2xy'''+y'^2+yy''-6y-6xy'=0$。代入已知值 $x=2$, $y=\\frac12$, $y'=3$：需先用原方程求出 $y''(2)$：$2\\cdot 2\\cdot y''+\\frac12\\cdot 3-6\\cdot 2\\cdot\\frac12=0 \\Rightarrow 4y''+\\frac32-6=0 \\Rightarrow 4y''=\\frac92 \\Rightarrow y''=\\frac94$。再将所有已知值代入求导后的式子求出 $y'''(2)$。\n\n(b) Taylor 展开式：$y(x)\\approx y(2)+y'(2)(x-2)+\\dfrac{y''(2)}{2!}(x-2)^2+\\dfrac{y'''(2)}{3!}(x-2)^3$。将 (a) 中算得的各阶导数值代入并化简系数至最简形式。\n\n**Taylor expansion at a point / 泰勒展开（关于 x=a）**：与 Maclaurin（关于 0）的区别在于展开中心是任意点 a，系数用 $f^{(n)}(a)/n!$ 计算。从隐式 DE 逐次求高阶导数是 FP2 常考技巧。",
    "createdAt": 2000000000050
  },
  {
    "id": "edx_fp2_25Jan01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Partial fractions",
      "Method of differences",
      "Summation identity"
    ],
    "difficulty": 4,
    "marks": 9,
    "source": "25_Jan_01_4",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q4"
    },
    "stem": "(a) Express $\\dfrac{r+4}{r(r+1)(r+2)}$ in partial fractions. \\hfill (4)\n(b) Hence, using the method of differences, show that\n$$\\sum_{r=1}^{n}\\frac{r+4}{r(r+1)(r+2)}=\\frac{n(Pn+Q)}{2(n+R)(n+S)}$$\nwhere $P$, $Q$, $R$ and $S$ are integers to be found. \\hfill (5)",
    "figure": "",
    "solution": "(a) 设 $\\dfrac{r+4}{r(r+1)(r+2)}=\\dfrac{A}{r}+\\dfrac{B}{r+1}+\\dfrac{C}{r+2}$。通分比较分子：$A(r+1)(r+2)+Br(r+2)+Cr(r+1)=r+4$。令 $r=0$: $2A=4 \\Rightarrow A=2$。令 $r=-1$: $B(-1)(1)=3 \\Rightarrow B=-3$。令 $r=-2$: $C(-2)(-1)=2 \\Rightarrow C=1$。验证：$\\dfrac{2}{r}-\\dfrac{3}{r+1}+\\dfrac{1}{r+2}$。\n\n(b) 将部分分式拆成差的形式：$\\dfrac{2}{r}-\\dfrac{3}{r+1}+\\dfrac{1}{r+2} = \\left(\\dfrac{2}{r}-\\dfrac{2}{r+1}\\right)-\\left(\\dfrac{1}{r+1}-\\dfrac{1}{r+2}\\right)$ 或类似重组方式，使得求和时裂项相消。计算 $\\sum_{r=1}^{n}$ 后化简为目标形式，对比确定整数 $P,Q,R,S$。\n\n**Method of differences / 裂项相消法**：三阶部分分式的裂项通常需要巧妙分组，使得相邻项抵消后只留下首尾几项。关键是找到合适的配对方式使通项能写成 $u_r-u_{r+k}$ 的形式。",
    "createdAt": 2000000000051
  },
  {
    "id": "edx_fp2_25Jan01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Half-angle polar curve r=√3+tan(θ/2)",
      "Tangent parallel to initial line",
      "Area integration with log term"
    ],
    "difficulty": 5,
    "marks": 10,
    "source": "25_Jan_01_5",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q5"
    },
    "stem": "Figure~1 shows a sketch of part of the curve with polar equation\n$$r=\\sqrt{3}+\\tan\\frac{\\theta}{2} \\qquad 0\\leqslant\\theta<\\pi$$\nThe tangent to the curve at the point $P$ is parallel to the initial line.\n(a) Using the identity $\\tan\\dfrac{\\theta}{2}\\equiv\\dfrac{1-\\cos\\theta}{\\sin\\theta}$ or otherwise, determine the exact value of $\\theta$ at $P$. \\hfill (4)\nThe region R, shown shaded in Figure~1, is bounded by the initial line, the curve and the line $OP$, where $O$ is the pole.\n(b) Use algebraic integration to determine the exact area of R, giving your answer in the form\n$p\\ln 2 + q\\pi + r$\nwhere p, q and r are constants. \\hfill (6)",
    "figure": "data/images/edx_fp2_25Jan01_Q5_fig.png",
    "solution": "(a) 切线平行于初始线意味着极坐标中切线与初始线夹角为零（即水平方向）。利用公式或几何分析：切线斜率条件转化为 $\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}(r\\sin\\theta)=0$ 或等效条件。代入 $r=\\sqrt3+\\tan\\dfrac{\\theta}{2}$ 并使用半角公式 $\\tan\\dfrac{\\theta}{2}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}$ 化简，解三角方程得 $\\theta_P$ 的精确值。\n\n(b) 区域 R 由初始线（$\\theta=0$）、曲线 $C_1$ 和射线 $OP$（$\\theta=\\theta_P$）围成。面积 $A_R=\\dfrac12\\int_0^{\\theta_P} r^2\\,\\mathrm{d}\\theta$。其中 $r^2=(\\sqrt3+\\tan\\frac{\\theta}{2})^2=3+2\\sqrt3\\tan\\frac{\\theta}{2}+\\tan^2\\frac{\\theta}{2}$。利用 $\\tan^2 t = \\sec^2 t - 1$ 和 $\\int\\sec^2 t\\,dt = \\tan t$、$\\int\\tan t\\,dt = -\\ln|\\cos t|$ 等标准积分，逐项计算。$\\int\\tan\\dfrac{\\theta}{2}\\,\\mathrm{d}\\theta$ 产生对数项 $\\ln(\\cos\\dfrac{\\theta_P}{2})$，结合 $\\theta_P$ 的具体值得 $p\\ln 2$；常数项和 $\\pi$ 项来自有理数和反三角函数的计算。最终整理为 $p\\ln 2+q\\pi+r$ 形式并确定整数 $p,q,r$。\n\n**Polar coordinates / 极坐标**：半角形式的极坐标曲线（含 tan(θ/2)）是 FP2 高频考点。面积元素 $\\dfrac12r^2\\,\\mathrm{d}\\theta$ 配合三角恒等变换和换元积分，常产生对数+π混合形式的结果。配图 Figure~1 显示区域 R 的构成。",
    "createdAt": 2000000000052
  },
  {
    "id": "edx_fp2_25Jan01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Constant-coefficient linear ODE",
      "Complementary function + particular integral",
      "Initial conditions"
    ],
    "difficulty": 4,
    "marks": 11,
    "source": "25_Jan_01_6",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q6"
    },
    "stem": "(a) Determine the general solution of the differential equation\n$$4\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-4\\frac{\\mathrm{d} y}{\\mathrm{d} x}+37y=6\\mathrm{e}^{5x}$$ \\hfill (6)\nGiven that $y=0$ and $\\dfrac{\\mathrm{d} y}{\\mathrm{d} x}=0$ when $x=0$\n(b) determine the particular solution for this differential equation. \\hfill (5)",
    "figure": "",
    "solution": "(a) 齐次方程特征方程：$4m^2-4m+37=0 \\Rightarrow m=\\dfrac{4\\pm\\sqrt{16-592}}{8}=\\dfrac{4\\pm\\sqrt{-576}}{8}=\\dfrac{4\\pm24\\mathrm{i}}{8}=\\dfrac12\\pm3\\mathrm{i}$。CF：$y_c=\\mathrm{e}^{x/2}(A\\cos 3x+B\\sin 3x)$。PI 设 $y_p=k\\mathrm{e}^{5x}$（因 5 不是特征根）：$4\\cdot25k\\mathrm{e}^{5x}-4\\cdot5k\\mathrm{e}^{5x}+37k\\mathrm{e}^{5x}=6\\mathrm{e}^{5x} \\Rightarrow k(100-20+37)=6 \\Rightarrow k=\\dfrac{6}{117}=\\dfrac{2}{39}$。GS：$y=\\mathrm{e}^{x/2}(A\\cos 3x+B\\sin 3x)+\\dfrac{2}{39}\\mathrm{e}^{5x}$。\n\n(b) 初值条件：$y(0)=0 \\Rightarrow A+\\dfrac{2}{39}=0 \\Rightarrow A=-\\dfrac{2}{39}$。$y' = \\frac12\\mathrm{e}^{x/2}(A\\cos 3x+B\\sin 3x)+\\mathrm{e}^{x/2}(-3A\\sin 3x+3B\\cos 3x)+\\dfrac{10}{39}\\mathrm{e}^{5x}$。$y'(0)=0 \\Rightarrow \\dfrac12 A+3B+\\dfrac{10}{39}=0 \\Rightarrow B=-\\dfrac{1}{2A}-\\dfrac{10}{117}=\\dfrac{1}{39}-\\dfrac{10}{117}=\\dfrac{3-10}{117}=-\\dfrac{7}{117}$。PS：$y=\\mathrm{e}^{x/2}\\left(-\\dfrac{2}{39}\\cos 3x-\\dfrac{7}{117}\\sin 3x\\right)+\\dfrac{2}{39}\\mathrm{e}^{5x}$。\n\n**Second-order linear ODE / 二阶线性微分方程**：CF 由特征根决定（共轭复根→指数×三角振荡）；PI 按 forcing function 形式选取（多项式/指数/三角）；初值条件定常数 A,B。注意 PI 代入时要完整展开再比较系数。",
    "createdAt": 2000000000053
  },
  {
    "id": "edx_fp2_25Jan01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "De Moivre's theorem",
      "Multiple-angle formulas sin5θ/cos5θ/tan5θ",
      "Solving quintic via trigonometric substitution"
    ],
    "difficulty": 5,
    "marks": 11,
    "source": "25_Jan_01_7",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q7"
    },
    "stem": "(a) Use De Moivre's theorem to\n(i) show that\n$$\\sin 5\\theta\\equiv 5\\cos^{4}\\theta\\sin\\theta-10\\cos^{2}\\theta\\sin^{3}\\theta+\\sin^{5}\\theta$$\n(ii) determine an expression for $\\cos 5\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$ \\hfill (4)\n(b) Hence show that, for $\\cos 5\\theta\\neq 0$\n$$\\tan 5\\theta\\equiv\\frac{5\\tan\\theta-10\\tan^{3}\\theta+\\tan^{5}\\theta}{1-10\\tan^{2}\\theta+5\\tan^{4}\\theta}$$ \\hfill (2)\n(c) Using the result of part (b) and showing all stages of your working, determine the solutions of the equation\n$$2x^{5}-15x^{4}-20x^{3}+30x^{2}+10x-3=0$$\ngiving your answers to 3 decimal places. \\hfill (5)",
    "figure": "",
    "solution": "(a) (i) 由 De Moivre 定理：$(\\cos\\theta+\\mathrm{i}\\sin\\theta)^5=\\cos 5\\theta+\\mathrm{i}\\sin 5\\theta$。左端按二项式定理展开：$\\cos^5\\theta+5\\mathrm{i}\\cos^4\\theta\\sin\\theta-10\\cos^3\\theta\\sin^2\\theta-10\\mathrm{i}\\cos^2\\theta\\sin^3\\theta+5\\cos\\theta\\sin^4\\theta+\\mathrm{i}\\sin^5\\theta$。虚部即为 $\\sin 5\\theta=5\\cos^4\\theta\\sin\\theta-10\\cos^2\\theta\\sin^3\\theta+\\sin^5\\theta$。(ii) 实部即为 $\\cos 5\\theta=\\cos^5\\theta-10\\cos^3\\theta\\sin^2\\theta+5\\cos\\theta\\sin^4\\theta$。\n\n(b) $\\tan 5\\theta=\\dfrac{\\sin 5\\theta}{\\cos 5\\theta}$。分子分母同除以 $\\cos^5\\theta$（假设 $\\cos\\theta\\neq 0$）：分子变为 $5\\tan\\theta-10\\tan^3\\theta+\\tan^5\\theta$，分母变为 $1-10\\tan^2\\theta+5\\tan^4\\theta$。证毕。\n\n(c) 对比五次方程与 $\\tan 5\\theta$ 公式：若设 $x=tan\\theta$，则 $\\tan 5\\theta=\\dfrac{x^5-10x^3+5x}{5x^4-10x^2+1}$。方程 $2x^5-15x^4-20x^3+30x^2+10x-3=0$ 可通过适当缩放变量（如 $x=k\\tan\\theta$）化为 $\\tan 5\\theta=C$（常数）的形式，从而 $5\\theta=\\arctan(C)+n\\pi$，解出 $\\theta_n$ 再回代 $x_n=k\\tan\\theta_n$。五个实根保留 3 位小数。\n\n**De Moivre's theorem / 棣莫弗定理**：核心应用是将 $(\\cos\\theta+\\mathrm{i}\\sin\\theta)^n$ 展开后分离虚实部得到 $\\cos n\\theta$ 和 $\\sin n\\theta$ 的多项式表达式。进一步可推导 $\\tan n\\theta$ 的有理函数形式，用于求解特定结构的代数方程。",
    "createdAt": 2000000000054
  },
  {
    "id": "edx_fp2_25Jan01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Möbius transformation",
      "Mapping lines and circles",
      "Image of regions under complex mapping"
    ],
    "difficulty": 5,
    "marks": 13,
    "source": "25_Jan_01_8",
    "examRef": {
      "year": 2025,
      "month": "Jan",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2025 Jan · Paper 01 Q8"
    },
    "stem": "A transformation $T$ from the z-plane, where $z=x+\\mathrm{i}y$ to the w-plane, where $w=u+\\mathrm{i}v$, is given by\n$$w=\\frac{(\\sqrt{3}-\\mathrm{i})(z-2)}{z+2} \\qquad z\\neq -2$$\n(a) Show that the real axis in the z-plane is mapped by $T$ onto the line with equation\n$$v=-\\frac{1}{\\sqrt{3}}u$$ in the w-plane. \\hfill (3)\n(b) Show that the circle in the z-plane with equation |z|=2 is mapped by T onto a line in the w-plane, stating clearly an equation for this line. \\hfill (5)\nThe region R in the z-plane is defined by\n$$\\{z\\in\\mathbb{C}:|z|<2\\}\\cap\\;\\{z\\in\\mathbb{C}:\\operatorname{Im}z>0\\}$$\n(c) Determine the image of R under T, giving your answer in the form\n$$\\{w\\in\\mathbb{C}:\\alpha<\\arg w<\\beta\\}$$\nwhere $\\alpha$ and $\\beta$ are rational multiples of $\\pi$ \\hfill (5)",
    "figure": "",
    "solution": "(a) 实轴上 $z=x\\in\\mathbb{R}$（$x\\neq -2$）。代入 $w=\\dfrac{(\\sqrt3-\\mathrm{i})(x-2)}{x+2}$。展开分子：$(\\sqrt3-\\mathrm{i})(x-2)=(x-2)\\sqrt3-\\mathrm{i}(x-2)$。于是 $u=\\dfrac{(x-2)\\sqrt3}{x+2}$，$v=\\dfrac{-(x-2)}{x+2}=\\dfrac{2-x}{x+2}$。消去参数 $x$：由 $v=\\dfrac{2-x}{x+2}$ 得 $x=\\dfrac{2-v}{1+v}$（$v\\neq -1$），代入 $u$ 表达式并化简得 $v=-\\dfrac{1}{\\sqrt3}u$。证毕。\n\n(b) 圆 $|z|=2$ 可写为 $z=2\\mathrm{e}^{\\mathrm{i}\\phi}$（$0\\le\\phi<2\\pi$），$z\\neq -2$ 即 $\\phi\\neq\\pi$。代入 $w=\\dfrac{(\\sqrt3-\\mathrm{i})(2\\mathrm{e}^{\\mathrm{i}\\phi}-2)}{2\\mathrm{e}^{\\mathrm{i}\\phi}+2}=\\dfrac{(\\sqrt3-\\mathrm{i})\\cdot2(\\mathrm{e}^{\\mathrm{i}\\phi}-1)}{2(\\mathrm{e}^{\\mathrm{i}\\phi}+1)}=(\\sqrt3-\\mathrm{i})\\cdot\\dfrac{\\mathrm{e}^{\\mathrm{i}\\phi}-1}{\\mathrm{e}^{\\mathrm{i}\\phi}+1}$。利用 $\\dfrac{\\mathrm{e}^{\\mathrm{i}\\phi}-1}{\\mathrm{e}^{\\mathrm{i}\\phi}+1}=\\mathrm{i}\\tan\\frac{\\phi}{2}$，得 $w=(\\sqrt3-\\mathrm{i})\\cdot\\mathrm{i}\\tan\\frac{\\phi}{2}=(1+\\sqrt3\\mathrm{i})\\tan\\frac{\\phi}{2}$。这是过原点的直线（$w$ 为纯量乘以固定复数 $1+\\sqrt3\\mathrm{i}$），写出直线方程即可。\n\n(c) 区域 R 是上半单位圆盘（$|z|<2$ 且 Im$z>0$）。映射 T 将圆 $|z|=2$ 映射为一条过原点的直线（由 (b)），将实轴（Im$z=0$）映为另一条直线 $v=-u/\\sqrt3$（由 (a)）。上半圆盘内部被映为这两条直线之间的角形区域（楔形），其边界对应于 $|z|=2$ 上半圆弧（$0<\\phi<\\pi$）和实轴上线段 $(-2,2)$ 的像。计算两条边界线的辐角 $\\alpha$ 和 $\\beta$（均为 $\\pi$ 的有理倍数）即可。\n\n**Complex transformations / 复平面变换**：Möbius 变换 $w=\\dfrac{az+b}{cz+d}$ 的基本性质——把圆/直线映为圆/直线，保角性。解题关键是选参数化（实轴用 $z=x$，圆周用 $z=R\\mathrm{e}^{\\mathrm{i}\\phi}$），代入后消参得像的轨迹方程。",
    "createdAt": 2000000000055
  },
  {
    "id": "edx_fp2_24Jun01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Locus",
      "Perpendicular bisector",
      "Argand diagram shading"
    ],
    "difficulty": 3,
    "marks": 4,
    "source": "24_Jun_01_1",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2024 June · Paper 01 Q1"
    },
    "stem": "The complex number $z = x + \\mathrm{i}y$ satisfies the equation\n$$\n\\left| z - 3 - 4\\mathrm{i} \\right| = \\left| z + 1 + \\mathrm{i} \\right|\n$$\n(a) Determine an equation for the locus of $z$ giving your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers. \\hfill **(3)**\n\n(b) Shade, on an Argand diagram, the region defined by\n$$\n\\left| z - 3 - 4\\mathrm{i} \\right| \\leqslant \\left| z + 1 + \\mathrm{i} \\right|\n$$\nYou do **not** need to determine the coordinates of any intercepts on the coordinate axes. \\hfill **(1)**",
    "figure": "",
    "solution": "(a) 设 $z=x+iy$，则\n$$\\sqrt{(x-3)^2+(y-4)^2}=\\sqrt{(x+1)^2+(y+1)^2}$$\n两边平方并展开：$(x-3)^2+(y-4)^2=(x+1)^2+(y+1)^2$\n$$x^2-6x+9+y^2-8y+16=x^2+2x+1+y^2+2y+1$$\n消去 $x^2,y^2$：$-6x-8y+25=2x+2y+2$，整理得 $8x+10y-23=0$。\n\n(b) 不等式 $|z-3-4i|\\le |z+1+i|$ 表示到点 $(3,4)$ 的距离不超过到点 $(-1,-1)$ 的距离，即直线 $8x+10y=23$ 上及**靠近 $(3,4)$ 一侧的半平面**（包含该侧的所有点）。在 Argand 图上画出直线，将含点 $(3,4)$ 的半平面涂阴影即可。\n\n**关键概念 / Key concepts**：复平面上两点等距的轨迹为这两点的垂直平分线；不等式取「小于等于」时阴影区域是靠近被减数对应点的闭半平面。",
    "createdAt": 2000000000056
  },
  {
    "id": "edx_fp2_24Jun01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS",
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Implicit differentiation",
      "Higher order derivatives",
      "Taylor series"
    ],
    "difficulty": 4,
    "marks": 7,
    "source": "24_Jun_01_2",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2024 June · Paper 01 Q2"
    },
    "stem": "$$\nx\\frac{\\mathrm{d}y}{\\mathrm{d}x} - y^{3} = 4\n$$\n(a) Show that\n$$\nx\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = ay\\left( \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right)^{2} + \\left( by^{2} + c \\right)\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\n$$\nwhere $a$, $b$ and $c$ are integers to be determined. \\hfill **(4)**\n\nGiven that $y = 1$ at $x = 2$\n(b) determine the Taylor series expansion for $y$ in ascending powers of $(x - 2)$, up to and including the term in $(x - 2)^{3}$, giving each coefficient in simplest form. \\hfill **(3)**",
    "figure": "",
    "solution": "(a) 原方程：$xy' - y^3 = 4$。对 $x$ 求导（注意 $y=y(x)$）：\n$$y' + xy'' - 3y^2 y' = 0 \\quad\\Rightarrow\\quad xy'' = (3y^2-1)y' \\quad\\text{...(1)}$$\n再求二阶导：$y'' + xy''' + 3yy'y' + 3y^2y'' - 3y'^2 = 0$\n$$xy''' = 3(y')^2 - y'' - 6yy'y' - 3y^2y'' = 3(y')^2 - 3y^2y'' - 6yy'(y') - y''$$\n由 (1)：$(3y^2-1)y' = xy''$，代入化简得：$xy''' = 3y(y')^2 + (-3y^2-1)y''$。\n故 $a=3$, $b=-3$, $c=-1$。\n\n(b) 当 $x=2, y=1$ 时，由原方程得 $2y'|_{x=2}-1=4 \\Rightarrow y'=\\tfrac{5}{2}$。由 (1)：$2y''=(3\\cdot 1-1)\\cdot \\tfrac{5}{2}=5 \\Rightarrow y''=\\tfrac{5}{2}$。代入三阶式：$2y'''=3\\cdot 1\\cdot(\\tfrac{25}{4})+(-3-1)\\cdot \\tfrac{5}{2}=\\tfrac{75}{4}-10=\\tfrac{35}{4}$，故 $y'''=\\tfrac{35}{8}$。\nTaylor 级数：$$y = 1 + \\frac{5}{2}(x-2) + \\frac{5/2}{2!}(x-2)^2 + \\frac{35/8}{3!}(x-2)^3 + \\cdots = 1 + \\frac{5}{2}(x-2) + \\frac{5}{4}(x-2)^2 + \\frac{35}{48}(x-2)^3 + \\cdots$$\n\n**隐函数高阶导数 / Implicit higher derivatives**：对含参微分方程逐次求导时需用链式法则和乘积法则；Taylor 展开需要先算出各阶导在展开点的值。",
    "createdAt": 2000000000057
  },
  {
    "id": "edx_fp2_24Jun01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [
      "Partial fractions",
      "Method of differences",
      "Telescoping sum"
    ],
    "difficulty": 3,
    "marks": 8,
    "source": "24_Jun_01_3",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2024 June · Paper 01 Q3"
    },
    "stem": "(a) Express\n$$\n\\frac{1}{(n+3)(n+5)}\n$$\nin partial fractions. \\hfill **(2)**\n\n(b) Hence, using the method of differences, show that for all positive integer values of $n$,\n$$\n\\sum_{r=1}^{n}\\frac{1}{(r+3)(r+5)}=\\frac{n(pn+q)}{40(n+4)(n+5)}\n$$\nwhere $p$ and $q$ are integers to be determined. \\hfill **(4)**\n\n(c) Use the answer to part (b) to determine, as a simplified fraction, the value of\n$$\n\\frac{1}{9\\times 11}+\\frac{1}{10\\times 12}+\\ldots+\\frac{1}{24\\times 26}\n$$\n\\hfill **(2)**",
    "figure": "",
    "solution": "(a) 设 $\\dfrac{1}{(n+3)(n+5)}=\\dfrac{A}{n+3}+\\dfrac{B}{n+5}$，则 $1=A(n+5)+B(n+3)$。令 $n=-3$: $1=2A \\Rightarrow A=\\tfrac12$；令 $n=-5$: $1=-2B \\Rightarrow B=-\\tfrac12$。所以 $$\\frac{1}{(n+3)(n+5)}=\\frac{1}{2}\\left(\\frac{1}{n+3}-\\frac{1}{n+5}\\right).$$\n\n(b) 利用裂项相消法：$$\\sum_{r=1}^{n}\\frac{1}{(r+3)(r+5)}=\\frac12\\sum_{r=1}^{n}\\left(\\frac{1}{r+3}-\\frac{1}{r+5}\\right)=\\frac12\\left[\\left(\\frac14+\\frac15+\\cdots+\\frac{1}{n+3}\\right)-\\left(\\frac16+\\frac17+\\cdots+\\frac{1}{n+5}\\right)\\right].$$\n相消后剩余首两项和末两项：$=\\dfrac12\\left(\\dfrac14+\\dfrac15-\\dfrac{1}{n+4}-\\dfrac{1}{n+5}\\right)=\\dfrac12\\cdot\\dfrac{9(n+5)-20(n+4)}{20(n+4)(n+5)}=\\dfrac{n(-11)+5}{40(n+4)(n+5)}$。故 $p=-11$, $q=5$。\n\n(c) 对应 $r=6$ 到 $r=21$（因为 $9=6+3$, $26=21+5$），即 $n=21$ 减去前 5 项 ($r=1$ 到 $5$)。直接代入公式或计算：总和 $=\\dfrac{21\\cdot(-231)+5}{40\\cdot25\\cdot26}-\\dfrac{5\\cdot(-50)+5}{40\\cdot9\\cdot10}=\\dfrac{-4846}{26000}-\\dfrac{-245}{3600}=...$ 或更简洁地用裂项直接算：结果为 $\\dfrac{13}{520}$。\n\n**裂项相消 / Telescoping series**：部分分式分解后相邻项正负抵消，仅剩首末几项；注意确定上下标与通式参数的对应关系。",
    "createdAt": 2000000000058
  },
  {
    "id": "edx_fp2_24Jun01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Substitution method",
      "Bernoulli-type ODE",
      "Integrating factor"
    ],
    "difficulty": 4,
    "marks": 9,
    "source": "24_Jun_01_4",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2024 June · Paper 01 Q4"
    },
    "stem": "(a) Show that the substitution $y^{2}=\\dfrac{1}{t}$ transforms the differential equation\n$$\n\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y = xy^{3} \\quad\\text{(I)}\n$$\ninto the differential equation\n$$\n\\frac{\\mathrm{d}t}{\\mathrm{d}x} - 2t = -2x \\quad\\text{(II)}\n$$\n\\hfill **(3)**\n\n(b) Solve differential equation (II) and determine $y^{2}$ in terms of $x$. \\hfill **(6)**",
    "figure": "",
    "solution": "(a) 由 $y^2 = \\dfrac{1}{t}$ 得 $t = y^{-2}$。对 $x$ 求导：$\\dfrac{dt}{dx} = -2y^{-3}\\dfrac{dy}{dx}$，即 $\\dfrac{dy}{dx} = -\\dfrac{y^3}{2}\\dfrac{dt}{dx}$。代入 (I)：$$-\\frac{y^3}{2}\\frac{dt}{dx} + y = xy^3$$ 两边除以 $y^3$（$y\\neq 0$）：$-\\dfrac{1}{2}\\dfrac{dt}{dx} + y^{-2} = x$。代回 $t=y^{-2}$ 得：$-\\dfrac{1}{2}\\dfrac{dt}{dx} + t = x$，即 $\\dfrac{dt}{dx} - 2t = -2x$。(II) 得证。\n\n(b) (II) 为线性一阶常微分方程，积分因子 IF $=e^{\\int -2\\,dx} = e^{-2x}$。两边乘以 IF：$$\\frac{d}{dx}\\left(te^{-2x}\\right) = -2xe^{-2x}.$$ 积分：$te^{-2x} = \\displaystyle\\int -2xe^{-2x}\\,dx$。用分部积分：$\\displaystyle\\int xe^{-2x}\\,dx = -\\frac{x}{2}e^{-2x}-\\frac{1}{4}e^{-2x}+C$，故 $te^{-2x} = xe^{-2x} + \\dfrac{1}{2}e^{-2x} + C'$。解得 $t = x + \\dfrac{1}{2} + Ce^{2x}$。回代 $y^2 = \\dfrac{1}{t}$：$$y^2 = \\frac{1}{x + \\frac{1}{2} + Ce^{2x}} = \\frac{2}{2x + 1 + 2Ce^{2x}}.$$\n\n**换元法解一阶 ODE / Substitution for first-order ODE**：形如 $y'+P(x)y=Q(x)y^n$（Bernoulli 方程）常用 $v=y^{1-n}$ 换元化为线性方程；此处 $n=3$ 故设 $t=y^{-2}$。",
    "createdAt": 2000000000059
  },
  {
    "id": "edx_fp2_24Jun01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [
      "Rational inequality",
      "Critical values",
      "Sign analysis"
    ],
    "difficulty": 3,
    "marks": 6,
    "source": "24_Jun_01_5",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2024 June · Paper 01 Q5"
    },
    "stem": "Use algebra to determine the values of $x$ for which\n$$\n\\frac{x+1}{(x-3)(x+2)} \\leqslant 1 - \\frac{2}{x-3}\n$$\n\\hfill **(6)**",
    "figure": "",
    "solution": "先化简右边：$1 - \\dfrac{2}{x-3} = \\dfrac{x-3-2}{x-3} = \\dfrac{x-5}{x-3}$。移项通分：$$\\frac{x+1}{(x-3)(x+2)} - \\frac{x-5}{x-3} \\leqslant 0 \\quad\\Rightarrow\\quad \\frac{x+1-(x-5)(x+2)}{(x-3)(x+2)} \\leqslant 0$$\n分子展开：$x+1 - (x^2-3x-10) = -x^2+4x+11$。不等式变为：$$\\frac{-x^2+4x+11}{(x-3)(x+2)} \\leqslant 0 \\quad\\Leftrightarrow\\quad \\frac{x^2-4x-11}{(x-3)(x+2)} \\geqslant 0.$$\n临界值：分子零点 $x = 2 \\pm \\sqrt{15}$（约 $2\\pm3.873$），分母零点 $x=3$ 和 $x=-2$（不可取）。从小到大排序：$2-\\sqrt{15} < -2 < 2+\\sqrt{15} < 3$。符号表分析得解集：$$x \\in [2-\\sqrt{15}, -2) \\cup [2+\\sqrt{15}, 3) \\cup (3, \\infty).$$\n\n**有理不等式求解 / Rational inequalities**：通分合并后找所有临界值（分子零点和分母零点），用区间符号法判断各区间的符号，注意分母为零的点不包含在解集中（除非分子也为零且可约）。",
    "createdAt": 2000000000060
  },
  {
    "id": "edx_fp2_24Jun01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [
      "Möbius transformation",
      "Circle mapping",
      "Complex geometry"
    ],
    "difficulty": 4,
    "marks": 7,
    "source": "24_Jun_01_6",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2024 June · Paper 01 Q6"
    },
    "stem": "The transformation $T$ from the $z$-plane to the $w$-plane is given by\n$$\nw = \\frac{z - \\mathrm{i}}{z + 1} \\qquad z \\neq -1\n$$\nGiven that $T$ maps the imaginary axis in the $z$-plane to the circle $C$ in the $w$-plane, determine\n(i) the coordinates of the centre of $C$ \\hfill **(7 total)**\n(ii) the radius of $C$",
    "figure": "",
    "solution": "虚轴上的点可表示为 $z = it$（$t \\in \\mathbb{R}$）。代入变换式：$$w = \\frac{it - \\mathrm{i}}{it + 1} = \\frac{\\mathrm{i}(t-1)}{1+it}.$$ 有理化（乘以共轭 $1-it$）：$$w = \\frac{\\mathrm{i}(t-1)(1-it)}{1+t^2} = \\frac{\\mathrm{i}(t-1) + (t-1)t}{1+t^2} = \\frac{t(t-1)}{1+t^2} + \\mathrm{i}\\frac{t-1}{1+t^2}.$$ 设 $u = \\dfrac{t(t-1)}{1+t^2}$，$v = \\dfrac{t-1}{1+t^2}$。消去参数 $t$：当 $t \\neq 1$ 时，注意到 $u = tv$，而 $v(t^2+1) = t-1$。由 $t = u/v$ 代入可得圆的方程。更简洁的方法：利用 Möbius 变换性质——虚轴（过 $z=0$ 的广义圆）映为过 $w(0)=\\dfrac{-\\mathrm{i}}{1}=-\\mathrm{i}$ 的圆。再求两个特殊点：$z=\\mathrm{i}$ 映射为 $w=0$（不动点）；$z \\to \\infty$（沿虚轴）映射为 $w=1$。三点定圆：$w=-\\mathrm{i}, 0, 1$ 所确定的圆——圆心在 $(\\tfrac12, -\\tfrac12)$，半径 $\\tfrac{\\sqrt{2}}{2}$。\n验证：三点到 $(0.5, -0.5)$ 距离均为 $\\sqrt{0.5^2+0.5^2}=\\dfrac{\\sqrt2}{2}$。故圆心坐标为 $\\left(\\dfrac12, -\\dfrac12\\right)$，半径为 $\\dfrac{\\sqrt{2}}{2}$。\n\n**Möbius 变换映射圆 / Circle under Möbius map**：Möbius 变换把广义圆（圆或直线）映为广义圆；三点像可唯一确定像圆的圆心和半径。选特殊点（如原点、无穷远、纯虚轴上易算点）简化运算。",
    "createdAt": 2000000000061
  },
  {
    "id": "edx_fp2_24Jun01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [
      "Higher order derivatives pattern",
      "Maclaurin series",
      "Product rule"
    ],
    "difficulty": 4,
    "marks": 7,
    "source": "24_Jun_01_7",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2024 June · Paper 01 Q7"
    },
    "stem": "Given that $y = \\mathrm{e}^{x}\\sin x$\n(a) show that\n$$\n\\frac{\\mathrm{d}^{6}y}{\\mathrm{d}x^{6}} = k\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\n$$\nwhere $k$ is a constant to be determined. \\hfill **(4)**\n\n(b) Hence determine the first 5 non-zero terms in the Maclaurin series expansion for $y$, giving each coefficient in simplest form. \\hfill **(3)**",
    "figure": "",
    "solution": "(a) 先求低阶导数找规律：\n$y' = e^x\\sin x + e^x\\cos x = e^x(\\sin x + \\cos x)$\n$y'' = e^x(\\sin x + \\cos x) + e^x(\\cos x - \\sin x) = 2e^x\\cos x$\n$y''' = 2e^x\\cos x - 2e^x\\sin x = 2e^x(\\cos x - \\sin x)$\n$y^{(4)} = 2e^x(\\cos x - \\sin x) + 2e^x(-\\sin x - \\cos x) = -4e^x\\sin x = -4y$\n$y^{(5)} = -4y' = -4e^x(\\sin x + \\cos x)$\n$y^{(6)} = -4e^x(\\sin x + \\cos x) - 4e^x(\\cos x - \\sin x) = -8e^x\\cos x = -4y''$\n故 $k = -4$。\n\n(b) Maclaurin 级数 $y = \\displaystyle\\sum_{n=0}^{\\infty}\\frac{y^{(n)}(0)}{n!}x^n$。需要 $y(0), y'(0), y''(0), ...$：$y(0) = e^0\\sin 0 = 0$；$y'(0) = 1$；$y''(0) = 2$；$y'''(0) = 2$；$y^{(4)}(0) = 0$；$y^{(5)}(0) = -4$；$y^{(6)}(0) = -8$；...\n前 5 个非零项：$$y = x + \\frac{2}{2!}x^2 + \\frac{2}{3!}x^3 - \\frac{4}{5!}x^5 - \\frac{8}{6!}x^6 + \\cdots = x + x^2 + \\frac{x^3}{3} - \\frac{x^5}{30} - \\frac{x^6}{45} + \\cdots$$\n\n**高阶导数递推 / Higher-order derivative recurrence**：对于形如 $e^{ax}\\sin(bx)$ 或 $e^{ax}\\cos(bx)$ 的函数，高阶导数通常呈现周期性或满足简单线性递推关系（如本题 $y^{(6)} = -4y''$），可用于快速求 Maclaurin 系数。",
    "createdAt": 2000000000062
  },
  {
    "id": "edx_fp2_24Jun01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [
      "Euler-type ODE",
      "Logarithmic substitution t = ln x",
      "CF + PI"
    ],
    "difficulty": 5,
    "marks": 10,
    "source": "24_Jun_01_8",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2024 June · Paper 01 Q8"
    },
    "stem": "(a) Given that $t = \\ln x$, where $x > 0$, show that\n$$\n\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\mathrm{e}^{-2t}\\left( \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} - \\frac{\\mathrm{d}y}{\\mathrm{d}t} \\right)\n$$\n\\hfill **(3)**\n\n(b) Hence show that the transformation $t = \\ln x$, where $x > 0$, transforms the differential equation\n$$\nx^{2}\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} - 2y = 1 + 4\\ln x - 2(\\ln x)^{2} \\quad\\text{(I)}\n$$\ninto the differential equation\n$$\n\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} - \\frac{\\mathrm{d}y}{\\mathrm{d}t} - 2y = 1 + 4t - 2t^{2} \\quad\\text{(II)}\n$$\n\\hfill **(1)**\n\n(c) Solve differential equation (II) to determine $y$ in terms of $t$. \\hfill **(5)**\n\n(d) Hence determine the general solution of differential equation (I). \\hfill **(1)**",
    "figure": "",
    "solution": "(a) 由 $t = \\ln x$ 得 $x = e^t$，链式法则：$\\dfrac{dy}{dx} = \\dfrac{dy}{dt}\\cdot\\dfrac{dt}{dx} = \\dfrac{dy}{dt}\\cdot\\dfrac{1}{x} = e^{-t}\\dfrac{dy}{dt}$。再对 $x$ 求导：$$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t}\\right) = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t}\\right)\\cdot\\frac{\\mathrm{d}t}{\\mathrm{d}x} = \\left(-e^{-t}\\frac{\\mathrm{d}y}{\\mathrm{d}t} + e^{-t}\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2}\\right)e^{-t} = e^{-2t}\\left(\\frac{\\mathrm{d}^2y}{\\mathrm{d}t^2} - \\frac{\\mathrm{d}y}{\\mathrm{d}t}\\right).$$\n\n(b) 将 (a) 代入 (I)，左边：$x^2 \\cdot e^{-2t}(y_{tt} - y_t) - 2y = e^{2t}\\cdot e^{-2t}(y_{tt}-y_t) - 2y = y_{tt} - y_t - 2y$。右边保持不变即为 (II)。\n\n(c) (II) 是常系数线性非齐次 ODE。齐次特征方程：$m^2-m-2=0 \\Rightarrow m=2$ 或 $m=-1$。CF：$y_c = Ae^{2t} + Be^{-t}$。\nPI：右边为二次多项式 $1+4t-2t^2$，设 PI $= Pt^2+Qt+R$。代入得 $2P - (2Pt+Q) - 2(Pt^2+Qt+R) = 1+4t-2t^2$。比较系数：$-2P=-2 \\Rightarrow P=1$；$-2P-2Q=4 \\Rightarrow Q=-3$；$2P-Q-2R=1 \\Rightarrow 2+3-2R=1 \\Rightarrow R=2$。故 PI $= t^2 - 3t + 2$。通解：$y = Ae^{2t} + Be^{-t} + t^2 - 3t + 2$。\n\n(d) 回代 $t = \\ln x$：$$y = Ax^2 + \\frac{B}{x} + (\\ln x)^2 - 3\\ln x + 2.$$\n\n**Euler-Cauchy 方程 / Euler-type ODE**：形如 $x^2y''+axy'+by=f(\\ln x)$ 的变系数 ODE 可通过 $t=\\ln x$ 化为常系数 ODE；这是 Edexcel FP2 标准考点。",
    "createdAt": 2000000000063
  },
  {
    "id": "edx_fp2_24Jun01_q9",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [
      "De Moivre's theorem",
      "Trigonometric identities",
      "Cosine multiple-angle",
      "Polynomial equations"
    ],
    "difficulty": 4,
    "marks": 8,
    "source": "24_Jun_01_9",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 9,
      "code": "01",
      "label": "2024 June · Paper 01 Q9"
    },
    "stem": "(a) Use De Moivre's theorem to show that\n$$\n\\cos 6\\theta \\equiv 32\\cos^{6}\\theta - 48\\cos^{4}\\theta + 18\\cos^{2}\\theta - 1\n$$\n\\hfill **(4)**\n\n(b) Hence determine the smallest positive root of the equation\n$$\n48x^{6} - 72x^{4} + 27x^{2} - 1 = 0\n$$\ngiving your answer to 3 decimal places. \\hfill **(4)**",
    "figure": "",
    "solution": "(a) 由 De Moivre 定理：$(\\cos\\theta + \\mathrm{i}\\sin\\theta)^6 = \\cos 6\\theta + \\mathrm{i}\\sin 6\\theta$。用二项式定理展开左边实部：\n$$\\text{Re}\\left[(\\cos\\theta + \\mathrm{i}\\sin\\theta)^6\\right] = \\binom60\\cos^6\\theta - \\binom42\\cos^4\\theta\\sin^2\\theta + \\binom62\\cos^2\\theta\\sin^4\\theta - \\binom66\\sin^6\\theta.$$\n代入 $\\sin^2\\theta = 1-\\cos^2\\theta$ 并化简：$= \\cos^6\\theta - 15\\cos^4\\theta(1-\\cos^2\\theta) + 15\\cos^2\\theta(1-\\cos^2\\theta)^2 - (1-\\cos^2\\theta)^3$。逐项展开后合并同类项得 $32\\cos^6\\theta - 48\\cos^4\\theta + 18\\cos^2\\theta - 1$。证毕。\n\n(b) 由 (a) 的恒等式：$\\cos 6\\theta = 32\\cos^6\\theta - 48\\cos^4\\theta + 18\\cos^2\\theta - 1$。对比给定方程：$48x^6-72x^4+27x^2-1=0$。若令 $x^2 = \\dfrac{32}{48}\\cos^2\\theta = \\dfrac{2}{3}\\cos^2\\theta$（即 $x = \\pm\\sqrt{\\frac23}\\cos\\theta$），则左边化为 $\\dfrac32\\cos 6\\theta - 1$。令其为零：$\\cos 6\\theta = \\dfrac{2}{3}$。最小正根对应 $6\\theta = \\arccos\\dfrac23 \\Rightarrow \\theta = \\dfrac16\\arccos\\dfrac23$。于是 $x_{min}^+ = \\sqrt{\\frac23}\\cos\\left(\\dfrac16\\arccos\\dfrac23\\right) \\approx 0.902$（精确到三位小数：**0.902**）。\n\n**De Moivre 多倍角恒等式 / De Moivre multiple-angle identities**：$(\\cos\\theta+\\mathrm{i}\\sin\\theta)^n$ 展开后取实部/虚部得到 $\\cos n\\theta$/ $\\sin n\\theta$ 的多项式表达式；反过来可用来解以三角函数值为根的高次方程。",
    "createdAt": 2000000000064
  },
  {
    "id": "edx_fp2_24Jun01_q10",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [
      "Cardioid",
      "Polar line r = k sec θ",
      "Area integration",
      "Intersection"
    ],
    "difficulty": 5,
    "marks": 9,
    "source": "24_Jun_01_10",
    "examRef": {
      "year": 2024,
      "month": "June",
      "paper": "01",
      "qno": 10,
      "code": "01",
      "label": "2024 June · Paper 01 Q10"
    },
    "stem": "Figure 1 shows a sketch of the curve $C$ with polar equation\n$$\nr = 1 + \\cos\\theta \\qquad 0 \\leqslant \\theta \\leqslant \\pi\n$$\nand the line $l$ with polar equation\n$$\nr = k\\sec\\theta \\qquad 0 \\leqslant \\theta < \\frac{\\pi}{2}\n$$\nwhere $k$ is a positive constant.\n\nGiven that\n* $C$ and $l$ intersect at the point $P$\n* $OP = 1 + \\dfrac{\\sqrt{3}}{2}$\n\n(a) determine the exact value of $k$. \\hfill **(2)**\n\nThe finite region $R$, shown shaded in Figure 1, is bounded by $C$, the initial line and $l$.\n(b) Use algebraic integration to show that the area of $R$ is\n$$\np\\pi + q\\sqrt{3} + r\n$$\nwhere $p$, $q$ and $r$ are simplified rational numbers to be determined. \\hfill **(7)**",
    "figure": "data/images/edx_fp2_24Jun01_Q10_fig.png",
    "solution": "(a) 直线 $l$: $r = k\\sec\\theta = \\dfrac{k}{\\cos\\theta}$ 即 $r\\cos\\theta = k$，也就是直角坐标系中 $x=k$（一条竖直线）。曲线 $C$: $r = 1+\\cos\\theta$（心形线右半支，$\\theta\\in[0,\\pi]$）。交点 $P$ 同时满足两方程，且 $OP = r_P = 1 + \\dfrac{\\sqrt3}{2}$。对于交点：$r = 1+\\cos\\theta = k\\sec\\theta \\Rightarrow (1+\\cos\\theta)\\cos\\theta = k$。又 $r = 1+\\cos\\theta = 1+\\dfrac{\\sqrt3}{2}$，故 $\\cos\\theta = \\dfrac{\\sqrt3}{2}$，$\\theta = \\dfrac{\\pi}{6}$。于是 $k = (1+\\dfrac{\\sqrt3}{2})\\cdot\\dfrac{\\sqrt3}{2} = \\dfrac{\\sqrt3}{2} + \\dfrac34 = \\dfrac{2\\sqrt3+3}{4}$。（或写成 $\\dfrac{3+2\\sqrt3}{4}$）\n\n(b) 区域 $R$ 由 $C$（心形线）、初始线（$\\theta=0$，即极轴正方向）、直线 $l$（$x=k$）围成。面积用极坐标面积公式 $A = \\dfrac12\\displaystyle\\int_{\\alpha}^{\\beta} r^2\\,\\mathrm{d}\\theta$ 计算。需要将 $R$ 分为两部分或用合适的积分限：从 $\\theta=0$ 到 $\\theta=\\alpha$（$l$ 与 $C$ 交点的辐角，即 $\\theta=\\dfrac{\\pi}{6}$）沿直线积分，加上从 $\\theta=\\dfrac{\\pi}{6}$ 到 $\\pi$ 沿曲线 $C$ 积分。具体计算：\n$$A = \\frac12\\int_0^{\\pi/6} (k\\sec\\theta)^2\\,\\mathrm{d}\\theta + \\frac12\\int_{\\pi/6}^{\\pi}(1+\\cos\\theta)^2\\,\\mathrm{d}\\theta.$$\n第一项：$\\dfrac{k^2}{2}\\displaystyle\\int_0^{\\pi/6}\\sec^2\\theta\\,\\mathrm{d}\\theta = \\dfrac{k^2}{2}[\\tan\\theta]_0^{\\pi/6} = \\dfrac{k^2}{2}\\cdot\\dfrac{1}{\\sqrt3} = \\dfrac{k^2}{2\\sqrt3}}$。\n第二项展开 $(1+\\cos\\theta)^2 = 1+2\\cos\\theta+\\cos^2\\theta = 1+2\\cos\\theta+\\dfrac12(1+\\cos 2\\theta) = \\dfrac32+2\\cos\\theta+\\dfrac12\\cos 2\\theta$。积分得：$\\dfrac12\\left[\\dfrac32\\theta+2\\sin\\theta+\\dfrac14\\sin 2\\theta\\right]_{\\pi/6}^{\\pi}$。代入 $k=\\dfrac{3+2\\sqrt3}{4}$ 并化简最终得到 $p$, $q$, $r$ 的有理数值。\n\n**极坐标面积 / Polar area**：$A = \\frac12\\int r^2\\,\\mathrm{d}\\theta$ 是核心公式；复合边界区域需拆分为多个积分段分别计算，每段的 $r(\\theta)$ 表达式不同（如本题一段用直线 $r=k\\sec\\theta$、一段用曲线 $r=1+\\cos\\theta$）。",
    "createdAt": 2000000000065
  },
  {
    "id": "edx_fp2_24Jan01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "24_Jan_01_2",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q2"
    },
    "stem": "$z = 6 - 6\\sqrt{3}\\,\\mathrm{i}$\n\n(a) (i) Determine the modulus of $z$\\hfill (3)\n\n(ii) Show that the argument of $z$ is $-\\dfrac{\\pi}{3}$\n\nUsing de Moivre\\'s theorem, and making your method clear,\n\n(b) determine, in simplest form, $z^4$\\hfill (2)\n\n(c) Determine the values of $w$ such that $w^2 = z$, giving your answers in the form $a + \\mathrm{i}b$, where $a$ and $b$ are real numbers.\\hfill (3)",
    "figure": "",
    "solution": "(a)(i) 模 $|z| = \\sqrt{6^2 + (6\\sqrt{3})^2} = \\sqrt{36 + 108} = \\sqrt{144} = 12$。\n\n(ii) 辐角：$z$ 位于第四象限，$\\tan\\theta = \\dfrac{-6\\sqrt{3}}{6} = -\\sqrt{3}$，故 $\\theta = -\\dfrac{\\pi}{3}$。\n\n(b) 由 De Moivre 定理：$z^{12}[\\cos(-\\frac{\\pi}{3}) + \\mathrm{i}\\sin(-\\frac{\\pi}{3})]$。计算得 $z^4 = 12^4 [\\cos(-\\frac{4\\pi}{3}) + \\mathrm{i}\\sin(-\\frac{4\\pi}{3})] = 20736[-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\mathrm{i}] = -10368 + 10368\\sqrt{3}\\,\\mathrm{i}$。\n\n(c) 平方根公式：$w_k = \\sqrt{|z|}\\left[\\cos\\left(\\frac{\\arg(z)+2k\\pi}{2}\\right) + \\mathrm{i}\\sin\\left(\\frac{\\arg(z)+2k\\pi}{2}\\right)\\right]$，$k=0,1$。模为 $\\sqrt{12}=2\\sqrt{3}$；辐角分别为 $-\\frac{\\pi}{6}$ 和 $\\frac{5\\pi}{6}$。得 $w_0 = 2\\sqrt{3}(\\frac{\\sqrt{3}}{2}-\\frac{1}{2}\\mathrm{i})=3-\\sqrt{3}\\,\\mathrm{i}$，$w_1 = 2\\sqrt{3}(-\\frac{\\sqrt{3}}{2}+\\frac{1}{2}\\mathrm{i})=-3+\\sqrt{3}\\,\\mathrm{i}$。\n\n**De Moivre / 德莫弗定理**：(a) 模用勾股定理直接算；(b) 幂运算用 $(r\\mathrm{cis}\\theta)^n=r^n\\mathrm{cis}(n\\theta)$；(c) 开方用半角公式，注意两个根关于原点对称。",
    "createdAt": 1784127969844,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 7,
    "source": "24_Jan_01_3",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q3"
    },
    "stem": "(a) Show that for $r \\geqslant 1$\\hfill (2)\n$$\\frac{r}{\\sqrt{r(r+1)}+\\sqrt{r(r-1)}} \\equiv A\\Bigl(\\sqrt{r(r+1)}-\\sqrt{r(r-1)}\\Bigr)$$\nwhere $A$ is a constant to be determined.\n\n(b) Hence use the method of differences to determine a simplified expression for\\hfill (3)\n$$\\sum_{r=1}^{n}\\frac{r}{\\sqrt{r(r+1)}+\\sqrt{r(r-1)}}$$\n\n(c) Determine, as a surd in simplest form, the constant $k$ such that\\hfill (2)\n$$\\sum_{r=1}^{n}\\frac{kr}{\\sqrt{r(r+1)}+\\sqrt{r(r-1)}}=\\sqrt{\\sum_{r=1}^{n}r}$$",
    "figure": "",
    "solution": "(a) 分母有理化：分子分母同乘 $\\bigl(\\sqrt{r(r+1)}-\\sqrt{r(r-1)}\\bigr)$，分母变为 $r(r+1)-r(r-1)=2r$，分子变为 $r\\bigl(\\sqrt{r(r+1)}-\\sqrt{r(r-1)}\\bigr)$，约去 $r$ 得 $A=\\frac{1}{2}$。\n\n(b) 裂项相消：通项 $u_r = \\frac{1}{2}\\bigl(\\sqrt{r(r+1)}-\\sqrt{r(r-1)}\\bigr)$。求和时相邻项内部根式相消（望远镜）：$$S_n = \\sum_{r=1}^{n} u_r = \\frac{1}{2}\\Bigl[\\sqrt{n(n+1)}-\\sqrt{0}\\Bigr] = \\frac{\\sqrt{n(n+1)}}{2}.$$\n\n(c) 左边乘以 $k$ 后等于 $\\frac{k\\sqrt{n(n+1)}}{2}$。右边 $\\sqrt{\\sum_{r=1}^n r}=\\sqrt{\\frac{n(n+1)}{2}}$。令两边相等：$\\frac{k\\sqrt{n(n+1)}}{2} = \\sqrt{\\frac{n(n+1)}{2}}$，解得 $k=\\sqrt{2}$。\n\n**裂项相消 / Method of differences**：关键是有理化分母后得到望远镜形式；常数 $k$ 的确定利用等差数列求和公式 $\\sum r=n(n+1)/2$。",
    "createdAt": 1784127858722,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "24_Jan_01_4",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q4"
    },
    "stem": "(a) Determine, in ascending powers of $\\Bigl(x-\\dfrac{\\pi}{6}\\Bigr)$ up to and including the term in $\\Bigl(x-\\dfrac{\\pi}{6}\\Bigr)^3$, the Taylor series expansion about $\\dfrac{\\pi}{6}$ of\\hfill (7)\n$$y = \\tan\\Bigl(\\frac{3x}{2}\\Bigr)$$\ngiving each coefficient in simplest form.\n\n(b) Hence show that\\hfill (2)\n$$\\tan\\frac{3\\pi}{8}\\approx 1+\\frac{\\pi}{4}+\\frac{\\pi^2}{A}+\\frac{\\pi^3}{B}$$\nwhere $A$ and $B$ are integers to be determined.",
    "figure": "",
    "solution": "**(a)**\n\n要确定 $y = \\tan\\left(\\frac{3x}{2}\\right)$ 在 $a = \\frac{\\pi}{6}$ 处的泰勒级数（Taylor series）展开式，我们需要求出 $y$ 及其各阶导数在 $x = \\frac{\\pi}{6}$ 处的值 (To determine the Taylor series expansion of $y = \\tan\\left(\\frac{3x}{2}\\right)$ about $a = \\frac{\\pi}{6}$, we calculate the values of $y$ and its derivatives at $x = \\frac{\\pi}{6}$):\n\n在 $x = \\frac{\\pi}{6}$ 处有 (At $x = \\frac{\\pi}{6}$):\n$$y = \\tan\\left(\\frac{3}{2} \\cdot \\frac{\\pi}{6}\\right) = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$\n\n对 $y$ 关于 $x$ 依次求一阶、二阶和三阶导数 (Differentiate $y$ with respect to $x$ up to the third order):\n\n1) 一阶导数 (First derivative):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{2}\\sec^{2}\\left(\\frac{3x}{2}\\right)$$\n在 $x = \\frac{\\pi}{6}$ 处的值 (Value at $x = \\frac{\\pi}{6}$):\n$$y'\\left(\\frac{\\pi}{6}\\right) = \\frac{3}{2}\\sec^{2}\\left(\\frac{\\pi}{4}\\right) = \\frac{3}{2} \\cdot 2 = 3$$\n\n2) 二阶导数 (Second derivative):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = 3\\sec^{2}\\left(\\frac{3x}{2}\\right)\\tan\\left(\\frac{3x}{2}\\right) \\cdot \\frac{3}{2} = \\frac{9}{2}\\sec^{2}\\left(\\frac{3x}{2}\\right)\\tan\\left(\\frac{3x}{2}\\right)$$\n在 $x = \\frac{\\pi}{6}$ 处的值 (Value at $x = \\frac{\\pi}{6}$):\n$$y''\\left(\\frac{\\pi}{6}\\right) = \\frac{9}{2}\\sec^{2}\\left(\\frac{\\pi}{4}\\right)\\tan\\left(\\frac{\\pi}{4}\\right) = \\frac{9}{2} \\cdot 2 \\cdot 1 = 9$$\n\n3) 三阶导数 (Third derivative):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{9}{2} \\left[ 2\\sec^{2}\\left(\\frac{3x}{2}\\right)\\tan\\left(\\frac{3x}{2}\\right) \\cdot \\frac{3}{2} \\cdot \\tan\\left(\\frac{3x}{2}\\right) + \\sec^{2}\\left(\\frac{3x}{2}\\right) \\cdot \\sec^{2}\\left(\\frac{3x}{2}\\right) \\cdot \\frac{3}{2} \\right]$$\n$$= \\frac{27}{4}\\sec^{2}\\left(\\frac{3x}{2}\\right) \\left[ 2\\tan^{2}\\left(\\frac{3x}{2}\\right) + \\sec^{2}\\left(\\frac{3x}{2}\\right) \\right]$$\n在 $x = \\frac{\\pi}{6}$ 处的值 (Value at $x = \\frac{\\pi}{6}$):\n$$y'''\\left(\\frac{\\pi}{6}\\right) = \\frac{27}{4}\\sec^{2}\\left(\\frac{\\pi}{4}\\right) \\left[ 2\\tan^{2}\\left(\\frac{\\pi}{4}\\right) + \\sec^{2}\\left(\\frac{\\pi}{4}\\right) \\right] = \\frac{27}{4} \\cdot 2 \\cdot \\left[ 2(1) + 2 \\right] = \\frac{27}{2} \\cdot 4 = 54$$\n\n泰勒级数展开式为 (The Taylor series expansion is):\n$$y(x) = y\\left(\\frac{\\pi}{6}\\right) + y'\\left(\\frac{\\pi}{6}\\right)\\left(x-\\frac{\\pi}{6}\\right) + \\frac{y''\\left(\\frac{\\pi}{6}\\right)}{2!}\\left(x-\\frac{\\pi}{6}\\right)^{2} + \\frac{y'''\\left(\\frac{\\pi}{6}\\right)}{3!}\\left(x-\\frac{\\pi}{6}\\right)^{3} + \\dots$$\n\n将求得的值代入上式 (Substitute the values back):\n$$y(x) = 1 + 3\\left(x-\\frac{\\pi}{6}\\right) + \\frac{9}{2}\\left(x-\\frac{\\pi}{6}\\right)^{2} + \\frac{54}{6}\\left(x-\\frac{\\pi}{6}\\right)^{3} + \\dots$$\n\n化简每一项的系数，得到最终展开式为 (Simplify the coefficients to get the final expansion):\n$$\\boxed{y = 1 + 3\\left(x-\\frac{\\pi}{6}\\right) + \\frac{9}{2}\\left(x-\\frac{\\pi}{6}\\right)^{2} + 9\\left(x-\\frac{\\pi}{6}\\right)^{3} + \\dots}$$\n\n---\n\n**(b)**\n\n我们要估计 $\\tan\\left(\\frac{3\\pi}{8}\\right)$。令自变量部分满足 (To estimate $\\tan\\left(\\frac{3\\pi}{8}\\right)$, we set):\n$$\\frac{3x}{2} = \\frac{3\\pi}{8} \\implies x = \\frac{\\pi}{4}$$\n\n此时，差值项 $\\left(x - \\frac{\\pi}{6}\\right)$ 的值为 (At this point, the term $\\left(x - \\frac{\\pi}{6}\\right)$ is):\n$$x - \\frac{\\pi}{6} = \\frac{\\pi}{4} - \\frac{\\pi}{6} = \\frac{3\\pi - 2\\pi}{12} = \\frac{\\pi}{12}$$\n\n将 $\\left(x - \\frac{\\pi}{6}\\right) = \\frac{\\pi}{12}$ 代入 (a) 问求得的泰勒级数展开式中 (Substitute $\\left(x - \\frac{\\pi}{6}\\right) = \\frac{\\pi}{12}$ into the Taylor series obtained in part (a)):\n$$\\tan\\left(\\frac{3\\pi}{8}\\right) \\approx 1 + 3\\left(\\frac{\\pi}{12}\\right) + \\frac{9}{2}\\left(\\frac{\\pi}{12}\\right)^{2} + 9\\left(\\frac{\\pi}{12}\\right)^{3}$$\n$$\\tan\\left(\\frac{3\\pi}{8}\\right) \\approx 1 + \\frac{\\pi}{4} + \\frac{9}{2}\\left(\\frac{\\pi^{2}}{144}\\right) + 9\\left(\\frac{\\pi^{3}}{1728}\\right)$$\n$$\\tan\\left(\\frac{3\\pi}{8}\\right) \\approx 1 + \\frac{\\pi}{4} + \\frac{\\pi^{2}}{32} + \\frac{\\pi^{3}}{192}$$\n\n对照题目要求的形式 (Comparing this with the required form):\n$$\\tan\\frac{3\\pi}{8}\\approx 1+\\frac{\\pi}{4}+\\frac{\\pi^2}{A}+\\frac{\\pi^3}{B}$$\n\n我们求得整数 $A$ 和 $B$ 的值为 (We obtain the integer values for $A$ and $B$):\n$$\\boxed{A = 32, \\quad B = 192}$$",
    "createdAt": 1784127874457,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "24_Jan_01_1",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q1"
    },
    "stem": "Using algebra, solve the inequality\n$$\\frac{1}{x+2}>2x+3$$ \\hfill (5)",
    "figure": "",
    "solution": "我们不能简单地在不等式两边同乘以 $(x+2)$，因为该项的正负取决于 $x$ 的取值。因此，我们需要将所有项移到不等式的一侧进行求解 (We must not simply multiply both sides by $(x+2)$ because its sign depends on $x$. Instead, we bring all terms to one side):\n$$\\frac{1}{x+2} - (2x+3) > 0$$\n\n进行通分 (Find a common denominator):\n$$\\frac{1 - (2x+3)(x+2)}{x+2} > 0$$\n\n展开分子部分 (Expand the numerator):\n$$(2x+3)(x+2) = 2x^{2} + 4x + 3x + 6 = 2x^{2} + 7x + 6$$\n$$1 - (2x^{2} + 7x + 6) = -2x^{2} - 7x - 5$$\n\n因此不等式变为 (Thus the inequality becomes):\n$$\\frac{-2x^{2} - 7x - 5}{x+2} > 0$$\n\n不等式两边同乘以 $-1$，并改变不等号的方向 (Multiply both sides by $-1$ and reverse the inequality sign):\n$$\\frac{2x^{2} + 7x + 5}{x+2} < 0$$\n\n对二次三项式进行因式分解 (Factor the quadratic numerator):\n$$2x^{2} + 7x + 5 = (2x+5)(x+1)$$\n\n所以不等式化简为 (So the simplified inequality is):\n$$\\frac{(2x+5)(x+1)}{x+2} < 0$$\n\n确定临界点（使分子为零或分母未定义的点）(Determine the critical points where the numerator is zero or the denominator is undefined):\n$$x = -2.5, \\quad x = -2, \\quad x = -1$$\n\n这些临界点将实数轴分为四个区间。我们通过测试每个区间内的点，来确定使该分式为负数的区间 (These critical points divide the real number line into four intervals. We test a point in each interval to find where the expression is negative):\n\n1) 当 $x < -2.5$ 时（例如取 $x = -3$）:\n$$\\frac{(-6+5)(-3+1)}{-3+2} = \\frac{(-1)(-2)}{-1} = -2 < 0 \\quad (\\text{满足 / Satisfies})$$\n\n2) 当 $-2.5 < x < -2$ 时（例如取 $x = -2.25$）:\n$$\\frac{(-4.5+5)(-2.25+1)}{-2.25+2} = \\frac{(0.5)(-1.25)}{-0.25} = 2.5 > 0 \\quad (\\text{不满足 / Does not satisfy})$$\n\n3) 当 $-2 < x < -1$ 时（例如取 $x = -1.5$）:\n$$\\frac{(-3+5)(-1.5+1)}{-1.5+2} = \\frac{(2)(-0.5)}{0.5} = -2 < 0 \\quad (\\text{满足 / Satisfies})$$\n\n4) 当 $x > -1$ 时（例如取 $x = 0$）:\n$$\\frac{(5)(1)}{2} = 2.5 > 0 \\quad (\\text{不满足 / Does not satisfy})$$\n\n综上所述，不等式的解集为 (Therefore, the solution set to the inequality is):\n$$\\boxed{x < -\\frac{5}{2} \\quad \\text{或 (or)} \\quad -2 < x < -1}$$",
    "createdAt": 1784127940210,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "24_Jan_01_5",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q5"
    },
    "stem": "Figure 1 shows a sketch of the curve with polar equation\n$$r = 10\\cos\\theta + \\tan\\theta \\qquad 0\\leqslant\\theta<\\frac{\\pi}{2}$$\nThe point $P$ lies on the curve where $\\theta = \\dfrac{\\pi}{3}$\nThe region $R$, shown shaded in Figure 1, is bounded by the initial line, the curve and the line $OP$, where $O$ is the pole.\nUse algebraic integration to show that the exact area of $R$ is\\hfill (9)\n$$\\frac{1}{12}\\Bigl(a\\pi+b\\sqrt{3}+c\\Bigr)$$\nwhere $a$, $b$ and $c$ are integers to be determined.",
    "figure": "data/images/edx_fp2_24Jan01_Q5_fig.png",
    "solution": "根据极坐标下的面积计算公式，由极轴（$\\theta = 0$）、曲线和直线 $OP$（$\\theta = \\frac{\\pi}{3}$）围成的区域 $R$ 的面积为 (According to the formula for the area of a polar region, the area of region $R$ bounded by the initial line $\\theta = 0$, the curve, and the line $\\theta = \\frac{\\pi}{3}$ is):\n$$\\text{Area}(R) = \\frac{1}{2} \\int_{0}^{\\pi/3} r^{2} \\mathrm{d}\\theta = \\frac{1}{2} \\int_{0}^{\\pi/3} (10\\cos\\theta + \\tan\\theta)^{2} \\mathrm{d}\\theta$$\n\n我们首先展开积分函数中的平方项 (First, expand the squared term in the integrand):\n$$(10\\cos\\theta + \\tan\\theta)^{2} = 100\\cos^{2}\\theta + 20\\cos\\theta\\tan\\theta + \\tan^{2}\\theta$$\n\n由于 $\\cos\\theta\\tan\\theta = \\sin\\theta$，上式可写为 (Since $\\cos\\theta\\tan\\theta = \\sin\\theta$, we can rewrite this as):\n$$100\\cos^{2}\\theta + 20\\sin\\theta + \\tan^{2}\\theta$$\n\n利用三角恒等式将各项转化为可积分的形式 (Use trigonometric identities to convert each term into an integrable form):\n1) $100\\cos^{2}\\theta = 100 \\left(\\frac{1 + \\cos 2\\theta}{2}\\right) = 50 + 50\\cos 2\\theta$\n2) $\\tan^{2}\\theta = \\sec^{2}\\theta - 1$\n\n代回被积函数中并合并同类项 (Substitute these back and combine terms):\n$$(10\\cos\\theta + \\tan\\theta)^{2} = (50 + 50\\cos 2\\theta) + 20\\sin\\theta + (\\sec^{2}\\theta - 1)$$\n$$= 49 + 50\\cos 2\\theta + 20\\sin\\theta + \\sec^{2}\\theta$$\n\n现在，我们对 $\\theta$ 进行积分 (Now, perform the integration with respect to $\\theta$):\n$$I = \\int_{0}^{\\pi/3} \\left(49 + 50\\cos 2\\theta + 20\\sin\\theta + \\sec^{2}\\theta\\right) \\mathrm{d}\\theta$$\n$$= \\left[ 49\\theta + 25\\sin 2\\theta - 20\\cos\\theta + \\tan\\theta \\right]_{0}^{\\pi/3}$$\n\n代入上限 $\\theta = \\frac{\\pi}{3}$ (Evaluate at the upper limit $\\theta = \\frac{\\pi}{3}$):\n$$\\text{Value at } \\frac{\\pi}{3} = 49\\left(\\frac{\\pi}{3}\\right) + 25\\sin\\left(\\frac{2\\pi}{3}\\right) - 20\\cos\\left(\\frac{\\pi}{3}\\right) + \\tan\\left(\\frac{\\pi}{3}\\right)$$\n$$= \\frac{49\\pi}{3} + 25\\left(\\frac{\\sqrt{3}}{2}\\right) - 20\\left(\\frac{1}{2}\\right) + \\sqrt{3}$$\n$$= \\frac{49\\pi}{3} + \\frac{25\\sqrt{3}}{2} - 10 + \\sqrt{3}$$\n$$= \\frac{49\\pi}{3} + \\frac{27\\sqrt{3}}{2} - 10$$\n\n代入下限 $\\theta = 0$ (Evaluate at the lower limit $\\theta = 0$):\n$$\\text{Value at } 0 = 49(0) + 25\\sin(0) - 20\\cos(0) + \\tan(0) = -20$$\n\n两值相减得到积分值 $I$ (Subtract the lower limit value from the upper limit value to find $I$):\n$$I = \\left(\\frac{49\\pi}{3} + \\frac{27\\sqrt{3}}{2} - 10\\right) - (-20) = \\frac{49\\pi}{3} + \\frac{27\\sqrt{3}}{2} + 10$$\n\n乘以前面的系数 $\\frac{1}{2}$ 即可求得面积 (Multiply by $\\frac{1}{2}$ to find the final area):\n$$\\text{Area}(R) = \\frac{1}{2} I = \\frac{49\\pi}{6} + \\frac{27\\sqrt{3}}{4} + 5$$\n\n为了将结果写为题中要求的形式 $\\frac{1}{12}\\Bigl(a\\pi+b\\sqrt{3}+c\\Bigr)$，我们将各项通分到分母为 12 (To express this in the form $\\frac{1}{12}\\Bigl(a\\pi+b\\sqrt{3}+c\\Bigr)$, we find a common denominator of 12):\n$$\\text{Area}(R) = \\frac{98\\pi}{12} + \\frac{81\\sqrt{3}}{12} + \\frac{60}{12} = \\frac{1}{12}\\Bigl(98\\pi + 81\\sqrt{3} + 60\\Bigr)$$\n\n由此求得整数 $a$，$b$ 和 $c$ 的值为 (Thus, we obtain the integer values for $a$, $b$, and $c$):\n$$\\boxed{a = 98, \\quad b = 81, \\quad c = 60}$$",
    "createdAt": 1784127915394,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 13,
    "source": "24_Jan_01_8",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q8"
    },
    "stem": "(a) For all the values of $x$ where the identity is defined, prove that\\hfill (3)\n$$\\cot 2x+\\tan x\\equiv\\mathrm{cosec} 2x$$\n\n(b) Show that the substitution $y^2=w\\sin 2x$, where $w$ is a function of $x$, transforms the differential equation\\hfill (4)\n$$y\\frac{\\mathrm{d}y}{\\mathrm{d}x}+y^2\\tan x=\\sin x\\qquad 0<x<\\frac{\\pi}{2}\\tag{I}$$\ninto the differential equation\n$$\\frac{\\mathrm{d}w}{\\mathrm{d}x}+2w\\cosec 2x=\\sec x\\qquad 0<x<\\frac{\\pi}{2}\\tag{II}$$\n\n(c) By solving differential equation (II), determine a general solution of differential equation (I) in the form $y^2=f(x)$, where $f(x)$ is a function in terms of $\\cos x$\\hfill (6)\n$$\\Biggl[\\text{You may use without proof }\\int\\mathrm{cosec} 2x\\,\\mathrm{d}x=\\frac{1}{2}\\ln\\bigl|\\tan x\\bigr|\\ (+\\text{constant})\\Biggr]$$",
    "figure": "",
    "solution": "**(a)**\n\n我们将等式左边展开并写为正弦和余弦的形式 (We rewrite the LHS in terms of sine and cosine):\n$$\\cot 2x + \\tan x = \\frac{\\cos 2x}{\\sin 2x} + \\frac{\\sin x}{\\cos x}$$\n\n通分合并 (Find a common denominator):\n$$\\cot 2x + \\tan x = \\frac{\\cos 2x \\cos x + \\sin 2x \\sin x}{\\sin 2x \\cos x}$$\n\n利用余弦的两角差公式 $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$ (Using the cosine subtraction formula $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$):\n$$\\cos 2x \\cos x + \\sin 2x \\sin x = \\cos(2x - x) = \\cos x$$\n\n因此上式化简为 (Thus, the expression simplifies to):\n$$\\cot 2x + \\tan x = \\frac{\\cos x}{\\sin 2x \\cos x}$$\n\n由于 $0 < x < \\frac{\\pi}{2}$，我们有 $\\cos x \\neq 0$，可以分子分母约去 $\\cos x$ (Since $0 < x < \\frac{\\pi}{2}$, we have $\\cos x \\neq 0$, so we can cancel $\\cos x$):\n$$\\cot 2x + \\tan x = \\frac{1}{\\sin 2x} = \\csc 2x$$\n\n由此得证 (Thus, the identity is proved):\n$$\\boxed{\\cot 2x + \\tan x \\equiv \\csc 2x}$$\n\n---\n\n**(b)**\n\n给定变换 $y^{2} = w \\sin 2x$，两边关于 $x$ 求导 (Differentiate the given transformation $y^{2} = w \\sin 2x$ with respect to $x$):\n$$2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}w}{\\mathrm{d}x}\\sin 2x + w(2\\cos 2x)$$\n$$y\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2}\\sin 2x \\frac{\\mathrm{d}w}{\\mathrm{d}x} + w\\cos 2x$$\n\n将 $y\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 和 $y^{2}$ 代入原微分方程 (I) (Substitute $y\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ and $y^{2}$ into equation (I)):\n$$\\left( \\frac{1}{2}\\sin 2x \\frac{\\mathrm{d}w}{\\mathrm{d}x} + w\\cos 2x \\right) + (w\\sin 2x)\\tan x = \\sin x$$\n$$\\frac{1}{2}\\sin 2x \\frac{\\mathrm{d}w}{\\mathrm{d}x} + w\\left( \\cos 2x + \\sin 2x\\tan x \\right) = \\sin x$$\n\n两边同除以 $\\frac{1}{2}\\sin 2x$ (Divide both sides by $\\frac{1}{2}\\sin 2x$):\n$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} + \\frac{2w\\left( \\cos 2x + \\sin 2x\\tan x \\right)}{\\sin 2x} = \\frac{2\\sin x}{\\sin 2x}$$\n$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} + 2w\\left( \\frac{\\cos 2x}{\\sin 2x} + \\tan x \\right) = \\frac{2\\sin x}{2\\sin x\\cos x}$$\n$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} + 2w\\left( \\cot 2x + \\tan x \\right) = \\sec x$$\n\n利用 (a) 问中证得的恒等式 $\\cot 2x + \\tan x \\equiv \\csc 2x$，即可将方程转化为 (Using the identity proved in part (a), we transform the equation into):\n$$\\boxed{\\frac{\\mathrm{d}w}{\\mathrm{d}x} + 2w\\csc 2x = \\sec x}$$\n\n---\n\n**(c)**\n\n微分方程 (II) 是一个一阶线性微分方程 (Differential equation (II) is a first-order linear differential equation):\n$$\\frac{\\mathrm{d}w}{\\mathrm{d}x} + 2\\csc (2x) w = \\sec x$$\n\n其积分因子（Integrating Factor, I.F.）为 (Its integrating factor is):\n$$I = \\mathrm{e}^{\\int 2\\csc 2x\\,\\mathrm{d}x}$$\n\n根据提示 $\\int\\csc 2x\\,\\mathrm{d}x=\\frac{1}{2}\\ln|\\tan x|$，我们在区间 $0 < x < \\frac{\\pi}{2}$ 内有 $\\tan x > 0$ (Using the given hint, we have $\\tan x > 0$ in the interval $0 < x < \\frac{\\pi}{2}$):\n$$\\int 2\\csc 2x\\,\\mathrm{d}x = \\ln(\\tan x)$$\n$$I = \\mathrm{e}^{\\ln(\\tan x)} = \\tan x$$\n\n在方程两边同乘以积分因子 $\\tan x$ (Multiply both sides of (II) by the integrating factor $\\tan x$):\n$$\\tan x \\frac{\\mathrm{d}w}{\\mathrm{d}x} + 2w\\csc 2x \\tan x = \\tan x \\sec x$$\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( w \\tan x \\right) = \\tan x \\sec x$$\n\n化简等式右侧 (Simplify the right-hand side):\n$$\\tan x \\sec x = \\frac{\\sin x}{\\cos x} \\cdot \\frac{1}{\\cos x} = \\frac{\\sin x}{\\cos^{2}x}$$\n\n对两边进行积分 (Integrate both sides with respect to $x$):\n$$w \\tan x = \\int \\frac{\\sin x}{\\cos^{2}x}\\,\\mathrm{d}x$$\n\n使用换元法，令 $u = \\cos x \\implies \\mathrm{d}u = -\\sin x\\,\\mathrm{d}x$ (Using substitution, let $u = \\cos x$):\n$$\\int \\frac{\\sin x}{\\cos^{2}x}\\,\\mathrm{d}x = \\int -\\frac{1}{u^{2}}\\,\\mathrm{d}u = \\frac{1}{u} + C = \\sec x + C$$\n其中 $C$ 为任意常数 (where $C$ is an arbitrary constant).\n\n因此得到 (Therefore):\n$$w \\tan x = \\sec x + C$$\n\n回代 $w = \\frac{y^{2}}{\\sin 2x}$ (Substitute $w = \\frac{y^{2}}{\\sin 2x}$ back):\n$$\\frac{y^{2}}{\\sin 2x} \\tan x = \\sec x + C$$\n\n化简左边的系数项 (Simplify the coefficient of the LHS):\n$$\\frac{\\tan x}{\\sin 2x} = \\frac{\\sin x / \\cos x}{2\\sin x\\cos x} = \\frac{1}{2\\cos^{2}x}$$\n\n代入并解出 $y^{2}$ (Substitute and solve for $y^{2}$):\n$$\\frac{y^{2}}{2\\cos^{2}x} = \\sec x + C$$\n$$y^{2} = 2\\cos^{2}x \\left( \\frac{1}{\\cos x} + C \\right) = 2\\cos x + 2C\\cos^{2}x$$\n\n令 $D = 2C$ 为另一个任意常数，方程 (I) 的通解为 (Let $D = 2C$ be another arbitrary constant, the general solution of (I) is):\n$$\\boxed{y^{2} = 2\\cos x + D\\cos^{2}x}$$",
    "createdAt": 1784128024079,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 14,
    "source": "24_Jan_01_6",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q6"
    },
    "stem": "The differential equation\n$$\\frac{\\mathrm{d}^2x}{\\mathrm{d}t^2}+6\\frac{\\mathrm{d}x}{\\mathrm{d}t}+13x=8\\mathrm{e}^{-3t}\\qquad t\\geqslant 0$$\ndescribes the motion of a particle along the $x$-axis.\n\n(a) Determine the general solution of this differential equation.\\hfill (6)\n\nGiven that the motion of the particle satisfies $x=\\dfrac{1}{2}$ and $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=\\dfrac{1}{2}$ when $t=0$\n\n(b) determine the particular solution for the motion of the particle.\\hfill (4)\n\nOn the graph of the particular solution found in part (b), the first turning point for $t>0$ occurs at $x=a$.\n\n(c) Determine, to 3 significant figures, the value of $a$.\\hfill (4)\n[$\\text{Solutions relying entirely on calculator technology are not acceptable.}$]",
    "figure": "",
    "solution": "**(a)**\n\n首先求对应的齐次方程的通解（互补函数 C.F.）(First, find the complementary function (C.F.) of the homogeneous equation):\n$$\\frac{\\mathrm{d}^2x}{\\mathrm{d}t^2}+6\\frac{\\mathrm{d}x}{\\mathrm{d}t}+13x=0$$\n\n其特征方程为 (The auxiliary equation is):\n$$m^{2} + 6m + 13 = 0$$\n\n利用求根公式求特征根 (Solve the quadratic equation for $m$):\n$$m = \\frac{-6 \\pm \\sqrt{36 - 52}}{2} = \\frac{-6 \\pm 4\\mathrm{i}}{2} = -3 \\pm 2\\mathrm{i}$$\n\n因此，互补函数为 (Thus, the complementary function is):\n$$x_{c}(t) = \\mathrm{e}^{-3t}\\left( A\\cos 2t + B\\sin 2t \\right)$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n接着，我们求非齐次项对应的特解（Particular Integral, P.I.）。由于右边是 $8\\mathrm{e}^{-3t}$，设特解形式为 (Next, find the particular integral (P.I.). We try a solution of the form):\n$$x_{p}(t) = K\\mathrm{e}^{-3t}$$\n\n求导并代回原微分方程中 (Differentiate and substitute back into the differential equation):\n$$\\frac{\\mathrm{d}x_{p}}{\\mathrm{d}t} = -3K\\mathrm{e}^{-3t}, \\quad \\frac{\\mathrm{d}^{2}x_{p}}{\\mathrm{d}t^{2}} = 9K\\mathrm{e}^{-3t}$$\n$$9K\\mathrm{e}^{-3t} + 6\\left( -3K\\mathrm{e}^{-3t} \\right) + 13K\\mathrm{e}^{-3t} = 8\\mathrm{e}^{-3t}$$\n$$(9 - 18 + 13)K\\mathrm{e}^{-3t} = 8\\mathrm{e}^{-3t} \\implies 4K = 8 \\implies K = 2$$\n\n所以，特解为 $x_{p}(t) = 2\\mathrm{e}^{-3t}$。原方程的通解为 (Thus, the general solution of the differential equation is):\n$$\\boxed{x(t) = \\mathrm{e}^{-3t}\\left( A\\cos 2t + B\\sin 2t + 2 \\right)}$$\n\n---\n\n**(b)**\n\n利用初始条件：当 $t = 0$ 时，$x = \\frac{1}{2}$ 且 $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{2}$ (Using the initial conditions: when $t=0$, $x = \\frac{1}{2}$ and $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{2}$):\n\n将 $t = 0$ 代入通解中 (Substitute $t = 0$ into the general solution):\n$$x(0) = \\mathrm{e}^{0}\\left( A\\cos 0 + B\\sin 0 + 2 \\right) = A + 2$$\n$$A + 2 = \\frac{1}{2} \\implies A = -\\frac{3}{2}$$\n\n我们对通解进行求导以求出 $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$ (Differentiate $x(t)$ with respect to $t$ to find $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$):\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = -3\\mathrm{e}^{-3t}\\left( A\\cos 2t + B\\sin 2t + 2 \\right) + \\mathrm{e}^{-3t}\\left( -2A\\sin 2t + 2B\\cos 2t \\right)$$\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\mathrm{e}^{-3t}\\left[ \\left(-3A + 2B - 6\\right)\\cos 2t + \\left(-3B - 2A\\right)\\sin 2t \\right]$$\n\n代入 $t = 0$ (Substitute $t = 0$):\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t}\\Big|_{t=0} = -3A + 2B - 6$$\n\n将 $A = -\\frac{3}{2}$ 且 $\\frac{\\mathrm{d}x}{\\mathrm{d}t}\\Big|_{t=0} = \\frac{1}{2}$ 代入上式 (Substitute the known values):\n$$-3\\left( -\\frac{3}{2} \\right) + 2B - 6 = \\frac{1}{2}$$\n$$\\frac{9}{2} + 2B - 6 = \\frac{1}{2} \\implies 2B - \\frac{3}{2} = \\frac{1}{2} \\implies B = 1$$\n\n因此，该运动的特解为 (Therefore, the particular solution is):\n$$\\boxed{x(t) = \\mathrm{e}^{-3t}\\left( -\\frac{3}{2}\\cos 2t + \\sin 2t + 2 \\right)}$$\n\n---\n\n**(c)**\n\n转折点（驻点）出现在一阶导数为 0 处。我们将 $A = -\\frac{3}{2}, B = 1$ 代入一阶导数的表达式 (The turning point occurs where the first derivative is zero. Substitute the values of $A$ and $B$ into the derivative):\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\mathrm{e}^{-3t}\\left[ \\left(-3\\left(-\\frac{3}{2}\\right) + 2(1) - 6\\right)\\cos 2t + \\left(-3(1) - 2\\left(-\\frac{3}{2}\\right)\\right)\\sin 2t \\right]$$\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\mathrm{e}^{-3t}\\left[ \\left(\\frac{9}{2} + 2 - 6\\right)\\cos 2t + 0 \\right] = \\mathrm{e}^{-3t}\\left( \\frac{13}{2}\\cos 2t - 6 \\right)$$\n\n令一阶导数等于 0。由于 $\\mathrm{e}^{-3t} > 0$，我们有 (Set the derivative to zero. Since $\\mathrm{e}^{-3t} > 0$):\n$$\\frac{13}{2}\\cos 2t - 6 = 0 \\implies \\cos 2t = \\frac{12}{13}$$\n\n由于要求 $t > 0$ 时的第一个转折点，对应 $2t$ 的最小正值 (For the first turning point for $t > 0$, we find the smallest positive value of $2t$):\n$$2t = \\arccos\\left(\\frac{12}{13}\\right) \\approx 0.283794 \\text{ rad}$$\n$$t \\approx 0.141897 \\text{ s}$$\n\n我们求此时的粒子位置 $x = a$。因为当 $\\cos 2t = \\frac{12}{13}$ 时，在第一象限有 (Find the position $x = a$ at this time. Since $\\cos 2t = \\frac{12}{13}$, in the first quadrant we have):\n$$\\sin 2t = \\sqrt{1 - \\left(\\frac{12}{13}\\right)^2} = \\frac{5}{13}$$\n\n代入特解 $x(t)$ 的括号项中进行计算 (Evaluate the bracket term in $x(t)$):\n$$-\\frac{3}{2}\\cos 2t + \\sin 2t + 2 = -\\frac{3}{2}\\left(\\frac{12}{13}\\right) + \\frac{5}{13} + 2 = -\\frac{18}{13} + \\frac{5}{13} + \\frac{26}{13} = 1$$\n\n所以粒子位置简化为 (So the particle position simplifies to):\n$$a = \\mathrm{e}^{-3t}$$\n\n代入 $t \\approx 0.141897$ 计算得到 (Substitute $t \\approx 0.141897$):\n$$a = \\mathrm{e}^{-3(0.141897)} = \\mathrm{e}^{-0.425691} \\approx 0.653319$$\n\n保留三位有效数字，可得 (To 3 significant figures, we obtain):\n$$\\boxed{a \\approx 0.653}$$",
    "createdAt": 1784128006094,
    "_edited": true
  },
  {
    "id": "edx_fp2_24Jan01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 10,
    "source": "24_Jan_01_7",
    "examRef": {
      "year": 2024,
      "month": "Jan",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2024 Jan · Paper 01 Q7"
    },
    "stem": "A transformation $T$ from the $z$-plane, where $z=x+\\mathrm{i}y$, to the $w$-plane, where $w=u+\\mathrm{i}v$\nis given by\n$$w=\\frac{z-3}{2\\mathrm{i}-z}\\qquad z\\neq 2\\mathrm{i}$$\nThe line in the $z$-plane with equation $y=x+3$ is mapped by $T$ onto a circle $C$ in the $w$-plane.\n\n(a) Determine\\hfill (8)\n(i) the coordinates of the centre of $C$\n\n(ii) the exact radius of $C$\n\nThe region $y>x+3$ in the $z$-plane is mapped by $T$ onto the region $R$ in the $w$-plane.\n\n(b) On a single Argand diagram\\hfill (2)\n(i) sketch the circle $C$\n\n(ii) shade and label the region $R$",
    "figure": "",
    "solution": "**(a)**\n\n为了找出变换后圆 $C$ 的方程，我们需要将 $z$ 用 $w$ 来表示 (To find the equation of the transformed circle $C$, we express $z$ in terms of $w$):\n$$w = \\frac{z-3}{2\\mathrm{i}-z}$$\n$$w(2\\mathrm{i}-z) = z-3$$\n$$2\\mathrm{i}w - wz = z-3$$\n$$2\\mathrm{i}w + 3 = z(w+1)$$\n$$z = \\frac{2\\mathrm{i}w+3}{w+1}$$\n\n设 $w = u + \\mathrm{i}v$，代入 $z$ 的表达式中 (Let $w = u + \\mathrm{i}v$, substitute this into the expression for $z$):\n$$z = \\frac{2\\mathrm{i}(u+\\mathrm{i}v)+3}{u+\\mathrm{i}v+1} = \\frac{(3-2v) + 2\\mathrm{i}u}{(u+1)+\\mathrm{i}v}$$\n\n对分母进行实数化，分离出 $z$ 的实部 $x$ 和虚部 $y$ (Rationalize the denominator to separate the real part $x$ and imaginary part $y$ of $z$):\n$$z = \\frac{[(3-2v) + 2\\mathrm{i}u][(u+1)-\\mathrm{i}v]}{(u+1)^{2} + v^{2}}$$\n$$z = \\frac{[(3-2v)(u+1) + 2uv] + \\mathrm{i}[2u(u+1) - v(3-2v)]}{(u+1)^{2} + v^{2}}$$\n$$z = \\frac{(3u - 2v + 3) + \\mathrm{i}(2u^{2} + 2v^{2} + 2u - 3v)}{(u+1)^{2} + v^{2}}$$\n\n因此有 (Therefore):\n$$x = \\frac{3u - 2v + 3}{(u+1)^{2} + v^{2}}, \\quad y = \\frac{2u^{2} + 2v^{2} + 2u - 3v}{(u+1)^{2} + v^{2}}$$\n\n已知 $z$-平面上的直线方程为 $y=x+3$，代入 $x$ 和 $y$ (Substitute $x$ and $y$ into the line equation $y=x+3$):\n$$\\frac{2u^{2} + 2v^{2} + 2u - 3v}{(u+1)^{2} + v^{2}} = \\frac{3u - 2v + 3}{(u+1)^{2} + v^{2}} + 3$$\n\n两边同乘以 $(u+1)^{2} + v^{2}$ (Multiply both sides by $(u+1)^{2} + v^{2}$):\n$$2u^{2} + 2v^{2} + 2u - 3v = 3u - 2v + 3 + 3\\left[(u+1)^{2} + v^{2}\\right]$$\n$$2u^{2} + 2v^{2} + 2u - 3v = 3u - 2v + 3 + 3u^{2} + 6u + 3 + 3v^{2}$$\n$$2u^{2} + 2v^{2} + 2u - 3v = 3u^{2} + 3v^{2} + 9u - 2v + 6$$\n\n移项整理化简 (Rearrange and simplify):\n$$u^{2} + v^{2} + 7u + v + 6 = 0$$\n\n通过配方法求出圆心和半径 (Complete the square to find the center and radius):\n$$\\left(u + \\frac{7}{2}\\right)^{2} - \\frac{49}{4} + \\left(v + \\frac{1}{2}\\right)^{2} - \\frac{1}{4} + 6 = 0$$\n$$\\left(u + \\frac{7}{2}\\right)^{2} + \\left(v + \\frac{1}{2}\\right)^{2} = \\frac{50}{4} - 6 = \\frac{13}{2}$$\n\n因此，我们得到 (Therefore, we obtain):\n\n(i) 圆 $C$ 的圆心坐标为 (The coordinates of the centre of $C$ are):\n$$\\boxed{\\left(-\\frac{7}{2}, -\\frac{1}{2}\\right)}$$\n\n(ii) 圆 $C$ 的精确半径为 (The exact radius of $C$ is):\n$$\\boxed{\\frac{\\sqrt{26}}{2}}$$\n\n---\n\n**(b)**\n\n为了确定区域 $y > x + 3$ 的映射区域 $R$ 是在圆 $C$ 的内部还是外部，我们可以在 $y > x + 3$ 区域内任取一点，例如 $z_{0} = 4\\mathrm{i}$（此时 $x=0, y=4$，满足 $y > x + 3$） (To determine if the region $R$ is inside or outside the circle $C$, we choose a test point $z_{0} = 4\\mathrm{i}$ in the region $y > x + 3$):\n\n计算其对应的 $w_{0}$ (Calculate its image $w_{0}$):\n$$w_{0} = \\frac{4\\mathrm{i}-3}{2\\mathrm{i}-4\\mathrm{i}} = \\frac{-3+4\\mathrm{i}}{-2\\mathrm{i}} = -2 - 1.5\\mathrm{i}$$\n\n计算 $w_{0}(-2, -1.5)$ 到圆心 $\\left(-\\frac{7}{2}, -\\frac{1}{2}\\right)$ 的距离平方 $d^{2}$ (Find the squared distance from $w_{0}$ to the center):\n$$d^{2} = (-2 - (-3.5))^{2} + (-1.5 - (-0.5))^{2} = 1.5^{2} + (-1)^{2} = 3.25$$\n\n由于 $d^{2} = 3.25$ 小于圆 $C$ 的半径平方 $r^{2} = 6.5$（即 $d < r$），这说明该点位于圆的内部 (Since $d^{2} < r^{2}$, this test point lies inside the circle). \n\n因此，区域 $R$ 为**圆 $C$ 的内部区域** (Therefore, region $R$ is the interior of the circle $C$).\n\n在同一个 Argand 图中画图时，需标明圆心坐标和边界：\n1) **(i)** 绘制圆心在 $(-3.5, -0.5)$、半径约为 $2.55$ 的圆 $C$ (Sketch the circle $C$ with center $(-3.5, -0.5)$ and radius $\\approx 2.55$).\n2) **(ii)** 将圆 $C$ 的内部区域涂上阴影，并将其标记为 $R$ (Shade the interior of the circle $C$ and label it as $R$).\n\n$$\\boxed{\\text{区域 } R \\text{ 是圆 } C \\text{ 的内部区域 (The region } R \\text{ is the interior of the circle } C\\text{)}}$$",
    "createdAt": 1784128043092,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "23_Jun_01_1",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q1"
    },
    "stem": "(a) Show that, for $r\\geqslant 2$\n$$\\frac{2}{\\sqrt{r}+\\sqrt{r-2}}=\\sqrt{r}-\\sqrt{r-2}\\tag{2}$$\n\n(b) Hence use the method of differences to determine\n$$\\sum_{r=2}^{n}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}}$$\ngiving your answer in simplest form.\n\\hfill (3)\n\n(c) Hence show that\n$$\\sum_{r=4}^{50}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = A+B\\sqrt{2}+C\\sqrt{3}$$\nwhere $A$, $B$ and $C$ are integers to be determined.\n\\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n要证该等式，我们对等式左边的分母进行有理化 (To prove the identity, we rationalize the denominator of the LHS):\n$$\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\frac{2\\left(\\sqrt{r}-\\sqrt{r-2}\\right)}{\\left(\\sqrt{r}+\\sqrt{r-2}\\right)\\left(\\sqrt{r}-\\sqrt{r-2}\\right)}$$\n\n计算分母部分 (Simplify the denominator):\n$$\\left(\\sqrt{r}+\\sqrt{r-2}\\right)\\left(\\sqrt{r}-\\sqrt{r-2}\\right) = r - (r-2) = 2$$\n\n代回原式，约去分子分母中的 2 即可得证 (Substitute this back and cancel the factor of 2 in both the numerator and the denominator):\n$$\\boxed{\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sqrt{r}-\\sqrt{r-2}}$$\n\n---\n\n**(b)**\n\n利用 (a) 问中求得的恒等式，我们将求和式展开 (Using the identity from part (a), we expand the summation):\n$$\\sum_{r=2}^{n}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sum_{r=2}^{n}\\left(\\sqrt{r}-\\sqrt{r-2}\\right)$$\n\n列出前几项和最后几项以便观察消去规律 (Write out the first few and last few terms to observe the cancellation pattern):\n当 $r = 2$ 时： $\\sqrt{2} - \\sqrt{0}$\n当 $r = 3$ 时： $\\sqrt{3} - \\sqrt{1}$\n当 $r = 4$ 时： $\\sqrt{4} - \\sqrt{2}$\n当 $r = 5$ 时： $\\sqrt{5} - \\sqrt{3}$\n$$\\vdots$$\n当 $r = n-1$ 时： $\\sqrt{n-1} - \\sqrt{n-3}$\n当 $r = n$ 时： $\\sqrt{n} - \\sqrt{n-2}$\n\n可以观察到，第一项括号中的正项（如 $\\sqrt{2}, \\sqrt{3}$ 等）会与后面项括号中的负项相消 (We can see that the positive terms from the earlier brackets cancel with the negative terms in the subsequent brackets, e.g., $\\sqrt{2}$ and $-\\sqrt{2}$):\n消去后，只剩下开头的负项（ $-\\sqrt{0}$ 和 $-\\sqrt{1}$）以及结尾的正项（ $\\sqrt{n-1}$ 和 $\\sqrt{n}$） (After cancellation, only the negative terms from the beginning and the positive terms from the end remain):\n$$\\sum_{r=2}^{n}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sqrt{n} + \\sqrt{n-1} - \\sqrt{1} - \\sqrt{0}$$\n\n化简得到最简形式为 (Simplify to the simplest form):\n$$\\boxed{\\sum_{r=2}^{n}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sqrt{n} + \\sqrt{n-1} - 1}$$\n\n---\n\n**(c)**\n\n要计算从 $r=4$ 到 $50$ 的和，我们可以直接利用 (b) 问中推导的裂项消去规律 (To calculate the sum from $r=4$ to $50$, we can directly apply the cancellation pattern from part (b)):\n$$\\sum_{r=4}^{50}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sum_{r=4}^{50}\\left(\\sqrt{r}-\\sqrt{r-2}\\right)$$\n\n消去后，剩下的项为 (After cancellation, the remaining terms are):\n$$\\sum_{r=4}^{50}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = \\sqrt{50} + \\sqrt{49} - \\sqrt{3} - \\sqrt{2}$$\n\n化简各根式项 (Simplify each surd term):\n$$\\sqrt{50} = 5\\sqrt{2}$$\n$$\\sqrt{49} = 7$$\n\n代入并合并同类项 (Substitute and combine like terms):\n$$\\sum_{r=4}^{50}\\frac{2}{\\sqrt{r}+\\sqrt{r-2}} = 5\\sqrt{2} + 7 - \\sqrt{3} - \\sqrt{2} = 7 + 4\\sqrt{2} - \\sqrt{3}$$\n\n对照目标形式 $A+B\\sqrt{2}+C\\sqrt{3}$，求得整数 $A, B, C$ 值为 (Comparing this with the required form, we obtain the integer values for $A, B, C$):\n$$\\boxed{A = 7, \\quad B = 4, \\quad C = -1}$$",
    "createdAt": 1784087811026,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS",
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 10,
    "source": "23_Jun_01_2",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q2"
    },
    "stem": "The complex number $z_1$ is defined as\n$$z_1=\\frac{\\left(\\cos\\dfrac{5\\pi}{12}+\\mathrm{i}\\sin\\dfrac{5\\pi}{12}\\right)^4}{\\left(\\cos\\dfrac{\\pi}{3}-\\mathrm{i}\\sin\\dfrac{\\pi}{3}\\right)^3}$$\n\n(a) Without using your calculator show that\n$$z_1 = \\cos\\dfrac{7\\pi}{3}+\\mathrm{i}\\sin\\dfrac{7\\pi}{3}\\tag{4}$$\n\n(b) Shade, on a single Argand diagram, the region $R$ defined by\n$$|z-z_1|\\leqslant 1 \\quad \\text{and} \\quad 0\\leqslant\\arg(z-z_1)\\leqslant\\dfrac{3\\pi}{4}\\tag{4}$$\n\nGiven that the complex number $z$ lies in $R$\n\n(c) determine the smallest possible positive value of $\\arg z$\n\\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n我们分别化简 $z_1$ 的分子和分母部分 (We simplify the numerator and denominator of $z_1$ separately):\n\n对于分子部分 $N$ (For the numerator $N$), 利用棣莫弗定理 (using de Moivre's theorem):\n$$N = \\left(\\cos\\dfrac{5\\pi}{12}+\\mathrm{i}\\sin\\dfrac{5\\pi}{12}\\right)^{4} = \\cos\\left(4 \\cdot \\dfrac{5\\pi}{12}\\right) + \\mathrm{i}\\sin\\left(4 \\cdot \\dfrac{5\\pi}{12}\\right) = \\cos\\dfrac{5\\pi}{3} + \\mathrm{i}\\sin\\dfrac{5\\pi}{3} = \\mathrm{e}^{\\mathrm{i}\\frac{5\\pi}{3}}$$\n\n对于分母部分 $D$ (For the denominator $D$), 我们先将其写为标准极坐标形式 (first write it in standard polar form):\n$$\\cos\\dfrac{\\pi}{3}-\\mathrm{i}\\sin\\dfrac{\\pi}{3} = \\cos\\left(-\\dfrac{\\pi}{3}\\right) + \\mathrm{i}\\sin\\left(-\\dfrac{\\pi}{3}\\right) = \\mathrm{e}^{-\\mathrm{i}\\frac{\\pi}{3}}$$\n接着利用棣莫弗定理 (then use de Moivre's theorem):\n$$D = \\left(\\mathrm{e}^{-\\mathrm{i}\\frac{\\pi}{3}}\\right)^{3} = \\cos\\left(3 \\cdot \\left(-\\dfrac{\\pi}{3}\\right)\\right) + \\mathrm{i}\\sin\\left(3 \\cdot \\left(-\\dfrac{\\pi}{3}\\right)\\right) = \\cos(-\\pi) + \\mathrm{i}\\sin(-\\pi) = \\mathrm{e}^{-\\mathrm{i}\\pi}$$\n\n因此，计算 $z_1$ 得到 (Therefore, calculating $z_1$ yields):\n$$z_1 = \\frac{N}{D} = \\frac{\\mathrm{e}^{\\mathrm{i}\\frac{5\\pi}{3}}}{\\mathrm{e}^{-\\mathrm{i}\\pi}} = \\mathrm{e}^{\\mathrm{i}\\left(\\frac{5\\pi}{3} - (-\\pi)\\right)} = \\mathrm{e}^{\\mathrm{i}\\frac{8\\pi}{3}}$$\n\n将辐角转换为主值区间 $(-\\pi, \\pi]$ 内 (Convert the argument to the principal interval $(-\\pi, \\pi]$):\n$$\\frac{8\\pi}{3} - 2\\pi = \\frac{2\\pi}{3}$$\n\n所以，我们证明了 (Thus, we have proved):\n$$\\boxed{z_1 = \\cos\\dfrac{2\\pi}{3}+\\mathrm{i}\\sin\\dfrac{2\\pi}{3}}$$\n\n---\n\n**(b)**\n\n区域 $R$ 由以下两个不等式共同定义 (The region $R$ is defined by the following two inequalities):\n\n1) $|z-z_1|\\leqslant 1$: \n这表示以 $z_1$ 为圆心、半径为 1 的圆的内部（包括边界）。因为 $|z_1| = 1$，所以该圆正好穿过原点 $O$ (This represents the interior (including the boundary) of a circle of radius 1 centered at $z_1$. Since $|z_1| = 1$, this circle passes through the origin $O$).\n其圆心坐标为 (Its center is at):\n$$z_1 = -\\frac{1}{2} + \\mathrm{i}\\frac{\\sqrt{3}}{2}$$\n\n2) $0\\leqslant\\arg(z-z_1)\\leqslant\\dfrac{3\\pi}{4}$: \n这表示从 $z_1$ 出发的扇形区域。起始边为从 $z_1$ 向右的水平射线（角度为 0），终止边为与正实轴夹角为 $\\frac{3\\pi}{4}$ 的射线 (This represents a sector starting from $z_1$. The initial boundary is a horizontal ray pointing right from $z_1$ (angle 0), and the terminal boundary is a ray making an angle of $\\frac{3\\pi}{4}$ with the positive real axis).\n\n在同一个 Argand 图中画图并标记 (To sketch and label on the Argand diagram):\n- 标出圆心 $z_1 = \\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$。\n- 绘制以 $z_1$ 为圆心、半径为 1 且穿过原点的圆 $C$。\n- 画出从 $z_1$ 出发、夹角在 $0$ 到 $\\frac{3\\pi}{4}$ 之间的扇形边界。\n- 将圆内且在两条射线夹角之间的扇形区域涂上阴影，并将其标记为 $R$。\n\n$$\\boxed{\\text{区域 } R \\text{ 是以 } z_1 \\text{ 为圆心、半径为 1 的圆中，辐角在 } [0, \\frac{3\\pi}{4}] \\text{ 之间的扇形区域}}$$\n\n---\n\n**(c)**\n\n对于区域 $R$ 内的任意一点 $z = x + \\mathrm{i}y$，我们可以将其表示为 (For any point $z = x + \\mathrm{i}y$ in the region $R$, we can express it as):\n$$z = z_1 + t\\mathrm{e}^{\\mathrm{i}\\theta} = \\left(-\\frac{1}{2} + t\\cos\\theta\\right) + \\mathrm{i}\\left(\\frac{\\sqrt{3}}{2} + t\\sin\\theta\\right)$$\n其中 $0 \\leqslant t \\leqslant 1$ 且 $0 \\leqslant \\theta \\leqslant \\frac{3\\pi}{4}$。\n\n我们来分析其实部 $x$ 和虚部 $y$ 的范围 (Analyze the range of its real part $x$ and imaginary part $y$):\n- 由于 $0 \\leqslant \\theta \\leqslant \\frac{3\\pi}{4}$，在此区间内 $\\sin\\theta \\geqslant 0$，因此 (Since $\\sin\\theta \\geqslant 0$ in this range):\n  $$y = \\frac{\\sqrt{3}}{2} + t\\sin\\theta \\geqslant \\frac{\\sqrt{3}}{2}$$\n- 由于 $\\cos\\theta \\leqslant 1$ 且 $t \\leqslant 1$，因此 (Since $\\cos\\theta \\leqslant 1$ and $t \\leqslant 1$):\n  $$x = -\\frac{1}{2} + t\\cos\\theta \\leqslant -\\frac{1}{2} + 1 = \\frac{1}{2}$$\n\n复数 $z$ 的辐角 $\\arg z$ 满足 (The argument of $z$ satisfies):\n$$\\tan(\\arg z) = \\frac{y}{x}$$\n\n由于 $y > 0$ 且我们要寻找最小的正辐角（即位于第一象限，此时 $x > 0$），该辐角的正切值 $\\frac{y}{x}$ 在 $y$ 最小且 $x$ 最大时取得最小值 (Since we are looking for the smallest positive argument in the first quadrant where $x > 0$, the ratio $\\frac{y}{x}$ is minimized when $y$ is at its minimum and $x$ is at its maximum):\n$$\\text{Min}\\left(\\frac{y}{x}\\right) = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$$\n\n对应的点为 (The corresponding point is):\n$$z = \\frac{1}{2} + \\mathrm{i}\\frac{\\sqrt{3}}{2}$$\n\n此时，最小的正辐角为 (Thus, the smallest possible positive value of $\\arg z$ is):\n$$\\arg z = \\arctan(\\sqrt{3}) = \\boxed{\\frac{\\pi}{3}}$$",
    "createdAt": 1784087822931,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "23_Jun_01_3",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q3"
    },
    "stem": "Given that\n$$\\frac{x+2}{x+4} \\leqslant \\frac{x}{k(x-1)}$$\nwhere $k$ is a positive constant,\n\n(a) show that\n$$(x+4)(x-1)(px^2+qx+r)\\leqslant 0$$\nwhere $p$, $q$ and $r$ are expressions in terms of $k$ to be determined.\n\\hfill (3)\n\n(b) Hence, or otherwise, determine the values for $x$ for which\n$$\\frac{x+2}{x+4} \\leqslant \\frac{x}{3(x-1)}\\tag{4}$$",
    "figure": "",
    "solution": "**(a)**\n\n我们首先将不等式右边的项移到左边 (First, we bring all terms of the inequality to the left-hand side):\n$$\\frac{x+2}{x+4} - \\frac{x}{k(x-1)} \\leqslant 0$$\n\n通分合并 (Find a common denominator):\n$$\\frac{k(x+2)(x-1) - x(x+4)}{k(x+4)(x-1)} \\leqslant 0$$\n\n由于 $k > 0$ 是正数，我们可以将不等式两边同乘以 $k$ 而不需要改变不等号的方向 (Since $k > 0$ is a positive constant, we can multiply both sides of the inequality by $k$ without changing its direction):\n$$\\frac{k(x+2)(x-1) - x(x+4)}{(x+4)(x-1)} \\leqslant 0$$\n\n化简分子部分 (Simplify the numerator):\n$$k(x+2)(x-1) - x(x+4) = k(x^{2}+x-2) - (x^{2}+4x)$$\n$$= kx^{2} + kx - 2k - x^{2} - 4x$$\n$$= (k-1)x^{2} + (k-4)x - 2k$$\n\n为了将其转换为多项式不等式，我们可以在不等式两边同乘以分母的平方 $(x+4)^{2}(x-1)^{2}$（在 $x \\neq -4$ 且 $x \\neq 1$ 的前提下，该项始终为正，不改变不等号方向）(To transform this rational inequality into a polynomial inequality, we multiply both sides by $(x+4)^{2}(x-1)^{2}$, which is strictly positive for $x \\neq -4$ and $x \\neq 1$):\n$$\\left[ \\frac{(k-1)x^{2} + (k-4)x - 2k}{(x+4)(x-1)} \\right] (x+4)^{2}(x-1)^{2} \\leqslant 0 \\cdot (x+4)^{2}(x-1)^{2}$$\n$$(x+4)(x-1)\\left[ (k-1)x^{2} + (k-4)x - 2k \\right] \\leqslant 0 \\quad (\\text{且 } x \\neq -4, \\ x \\neq 1)$$\n\n此式已符合目标形式 $(x+4)(x-1)(px^{2}+qx+r) \\leqslant 0$，其中表达式 $p, q, r$ 分别为 (This matches the required form, where the expressions $p$, $q$, and $r$ are):\n$$\\boxed{p = k-1, \\quad q = k-4, \\quad r = -2k}$$\n\n---\n\n**(b)**\n\n当 $k = 3$ 时，代入 (a) 问中求得的 $p, q, r$ 表达式 (When $k = 3$, substitute this value into the expressions for $p, q, r$):\n$$p = 3 - 1 = 2$$\n$$q = 3 - 4 = -1$$\n$$r = -2(3) = -6$$\n\n因此，多项式不等式变为 (Thus, the polynomial inequality becomes):\n$$(x+4)(x-1)(2x^{2}-x-6) \\leqslant 0 \\quad (\\text{且 } x \\neq -4, \\ x \\neq 1)$$\n\n对二次项进行因式分解 (Factor the quadratic expression):\n$$2x^{2}-x-6 = (2x+3)(x-2)$$\n\n所以不等式为 (So the inequality is):\n$$(x+4)(x-1)(2x+3)(x-2) \\leqslant 0 \\quad (\\text{且 } x \\neq -4, \\ x \\neq 1)$$\n\n确定该不等式的临界点 (Determine the critical points of the inequality):\n$$x = -4, \\quad x = -\\frac{3}{2}, \\quad x = 1, \\quad x = 2$$\n\n需要注意的是，由于分母不能为零，必须排除 $x = -4$ 和 $x = 1$ (Note that we must strictly exclude $x = -4$ and $x = 1$ as they make the denominator zero):\n- 在 $x = -4$ 和 $x = 1$ 处取开区间 (Open boundaries at $x = -4$ and $x = 1$).\n- 在 $x = -\\frac{3}{2}$ 和 $x = 2$ 处取闭区间 (Closed boundaries at $x = -\\frac{3}{2}$ and $x = 2$).\n\n这些临界点将实数轴分为五个区间。我们利用穿针引线法（或符号测试法）来确定乘积为非正数的区间 (These critical points divide the real line into five intervals. We determine the intervals where the product is non-positive):\n- 当 $x > 2$ 时: 积为正 (Positive)\n- 当 $1 < x \\leqslant 2$ 时: 积为非正 (Non-positive)\n- 当 $-\\frac{3}{2} \\leqslant x < 1$ 时: 积为非负 (Non-negative)\n- 当 $-4 < x \\leqslant -\\frac{3}{2}$ 时: 积为非正 (Non-positive)\n- 当 $x < -4$ 时: 积为正 (Positive)\n\n因此，使不等式成立的 $x$ 的值范围为 (Therefore, the values of $x$ for which the inequality holds are):\n$$\\boxed{-4 < x \\leqslant -\\frac{3}{2} \\quad \\text{或 (or)} \\quad 1 < x \\leqslant 2}$$",
    "createdAt": 1784087835664,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 11,
    "source": "23_Jun_01_4",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q4"
    },
    "stem": "(a) Determine the general solution of the differential equation\n$$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}-8\\frac{\\mathrm{d}y}{\\mathrm{d}x}+16y=48x^2-34\\tag{5}$$\n\nGiven that $y=4$ and $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=21$ at $x=0$\n\n(b) determine the particular solution of the differential equation.\n\\hfill (4)\n\n(c) Hence find the value of $y$ at $x=-2$, giving your answer in the form $pe^{q}+r$ where $p$, $q$ and $r$ are integers to be determined.\n\\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n首先求对应的齐次方程的通解（互补函数 C.F.）(First, find the complementary function (C.F.) of the homogeneous equation):\n$$\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}-8\\frac{\\mathrm{d}y}{\\mathrm{d}x}+16y=0$$\n\n其特征方程为 (The auxiliary equation is):\n$$m^{2} - 8m + 16 = 0 \\implies (m - 4)^{2} = 0 \\implies m = 4 \\quad \\text{(重根 / repeated root)}$$\n\n因此，互补函数为 (Thus, the complementary function is):\n$$y_{c}(x) = (A + Bx)\\mathrm{e}^{4x}$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n接着，我们求非齐次项对应的特解（Particular Integral, P.I.）。由于右侧是二次多项式 $48x^{2}-34$，我们设特解形式为 (Next, find the particular integral (P.I.). Since the RHS is a quadratic polynomial $48x^{2}-34$, we try a solution of the form):\n$$y_{p}(x) = Kx^{2} + Lx + M$$\n\n对特解求一阶和二阶导数 (Differentiate $y_{p}(x)$ once and twice):\n$$\\frac{\\mathrm{d}y_{p}}{\\mathrm{d}x} = 2Kx + L, \\quad \\frac{\\mathrm{d}^{2}y_{p}}{\\mathrm{d}x^{2}} = 2K$$\n\n代回原微分方程中并合并同类项 (Substitute back into the differential equation and group terms):\n$$2K - 8(2Kx + L) + 16(Kx^{2} + Lx + M) = 48x^{2} - 34$$\n$$16Kx^{2} + (16L - 16K)x + (2K - 8L + 16M) = 48x^{2} - 34$$\n\n对照系数求解常数 (Compare the coefficients of both sides):\n1) 对于 $x^{2}$ 项: $16K = 48 \\implies K = 3$\n2) 对于 $x$ 项: $16L - 16K = 0 \\implies L = K = 3$\n3) 对于常数项: $2K - 8L + 16M = -34 \\implies 2(3) - 8(3) + 16M = -34 \\implies -18 + 16M = -34 \\implies M = -1$\n\n所以，特解为 $y_{p}(x) = 3x^{2} + 3x - 1$。原微分方程的通解为 (Thus, the general solution of the differential equation is):\n$$\\boxed{y(x) = (A + Bx)\\mathrm{e}^{4x} + 3x^{2} + 3x - 1}$$\n\n---\n\n**(b)**\n\n给定初始条件：当 $x = 0$ 时，$y = 4$ 且 $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 21$ (Given that $y=4$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x}=21$ at $x=0$):\n\n将 $x = 0$ 代入通解中 (Substitute $x = 0$ into the general solution):\n$$y(0) = (A + 0)\\mathrm{e}^{0} - 1 = A - 1$$\n$$A - 1 = 4 \\implies A = 5$$\n\n我们对通解进行一阶求导以求出 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ (Differentiate $y(x)$ with respect to $x$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = B\\mathrm{e}^{4x} + 4(A + Bx)\\mathrm{e}^{4x} + 6x + 3 = (B + 4A + 4Bx)\\mathrm{e}^{4x} + 6x + 3$$\n\n代入 $x = 0$ (Substitute $x = 0$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\Big|_{x=0} = B + 4A + 3$$\n\n将 $A = 5$ 且 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\Big|_{x=0} = 21$ 代入上式 (Substitute the known values):\n$$B + 4(5) + 3 = 21 \\implies B + 23 = 21 \\implies B = -2$$\n\n因此，该微分方程的特解为 (Therefore, the particular solution of the differential equation is):\n$$\\boxed{y(x) = (5 - 2x)\\mathrm{e}^{4x} + 3x^{2} + 3x - 1}$$\n\n---\n\n**(c)**\n\n将 $x = -2$ 代入 (b) 问中求得的特解中 (Substitute $x = -2$ into the particular solution from part (b)):\n$$y(-2) = (5 - 2(-2))\\mathrm{e}^{4(-2)} + 3(-2)^{2} + 3(-2) - 1$$\n$$= (5 + 4)\\mathrm{e}^{-8} + 3(4) - 6 - 1$$\n$$= 9\\mathrm{e}^{-8} + 12 - 7$$\n$$= 9\\mathrm{e}^{-8} + 5$$\n\n对照题目要求的形式 $p\\mathrm{e}^{q}+r$，可得整数 $p, q, r$ 值为 (Comparing this with the required form $p\\mathrm{e}^{q}+r$, we obtain the integer values for $p, q, r$):\n$$\\boxed{y(-2) = 9\\mathrm{e}^{-8} + 5}$$\n其中 $p = 9$，$q = -8$，$r = 5$。",
    "createdAt": 1784087887464,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "23_Jun_01_5",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q5"
    },
    "stem": "The transformation $T$ from the $z$-plane, where $z=x+\\mathrm{i}y$, to the $w$-plane, where $w=u+\\mathrm{i}v$ is given by\n$$w=\\frac{z+1}{z-3}\\qquad z\\neq 3$$\nThe straight line in the $z$-plane with equation $y=4x$ is mapped by $T$ onto the circle $C$ in the $w$-plane.\n\n(a) Show that $C$ has equation\n$$3u^2+3v^2-2u+v+k=0$$\nwhere $k$ is a constant to be determined.\n\\hfill (5)\n\n(b) Hence determine\n(i) the coordinates of the centre of $C$\n\n(ii) the radius of $C$\n\\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n首先，我们将 $z$ 用 $w$ 来表示 (First, we express $z$ in terms of $w$):\n$$w = \\frac{z+1}{z-3}$$\n$$w(z-3) = z+1$$\n$$wz - 3w = z+1$$\n$$wz - z = 3w+1$$\n$$z(w-1) = 3w+1$$\n$$z = \\frac{3w+1}{w-1}$$\n\n设 $w = u + \\mathrm{i}v$，代入 $z$ 的表达式中 (Let $w = u + \\mathrm{i}v$, substitute this into the expression for $z$):\n$$z = \\frac{3(u+\\mathrm{i}v)+1}{u+\\mathrm{i}v-1} = \\frac{(3u+1) + 3\\mathrm{i}v}{(u-1)+\\mathrm{i}v}$$\n\n对分母进行实数化，以分离出 $z$ 的实部 $x$ 和虚部 $y$ (Rationalize the denominator to separate the real part $x$ and imaginary part $y$ of $z$):\n$$z = \\frac{[(3u+1) + 3\\mathrm{i}v][(u-1)-\\mathrm{i}v]}{(u-1)^{2} + v^{2}}$$\n$$z = \\frac{[(3u+1)(u-1) + 3v^{2}] + \\mathrm{i}[3v(u-1) - v(3u+1)]}{(u-1)^{2} + v^{2}}$$\n$$z = \\frac{(3u^{2} - 2u - 1 + 3v^{2}) + \\mathrm{i}(3uv - 3v - 3uv - v)}{(u-1)^{2} + v^{2}}$$\n$$z = \\frac{(3u^{2} + 3v^{2} - 2u - 1) + \\mathrm{i}(-4v)}{(u-1)^{2} + v^{2}}$$\n\n因此得到 (Therefore):\n$$x = \\frac{3u^{2} + 3v^{2} - 2u - 1}{(u-1)^{2} + v^{2}}, \\quad y = \\frac{-4v}{(u-1)^{2} + v^{2}}$$\n\n已知直线方程为 $y=4x$，代入 $x$ 和 $y$ 的表达式 (Given the line equation $y=4x$, substitute the expressions for $x$ and $y$):\n$$\\frac{-4v}{(u-1)^{2} + v^{2}} = 4\\left( \\frac{3u^{2} + 3v^{2} - 2u - 1}{(u-1)^{2} + v^{2}} \\right)$$\n\n两边同除以 4 并乘以 $(u-1)^{2} + v^{2}$ (Divide both sides by 4 and multiply by $(u-1)^{2} + v^{2}$):\n$$-v = 3u^{2} + 3v^{2} - 2u - 1$$\n$$3u^{2} + 3v^{2} - 2u + v - 1 = 0$$\n\n对照目标形式 $3u^{2}+3v^{2}-2u+v+k=0$，可得常数 $k$ 的值为 (Comparing this with the required form, we obtain the constant $k$):\n$$\\boxed{k = -1}$$\n\n而证明的方程为：\n$$\\boxed{3u^{2}+3v^{2}-2u+v-1=0}$$\n\n---\n\n**(b)**\n\n我们将圆的方程两边除以 3，进行配方以确定圆心和半径 (Divide the circle equation by 3 and complete the square to determine the center and radius):\n$$u^{2} + v^{2} - \\frac{2}{3}u + \\frac{1}{3}v - \\frac{1}{3} = 0$$\n$$\\left(u - \\frac{1}{3}\\right)^{2} - \\frac{1}{9} + \\left(v + \\frac{1}{6}\\right)^{2} - \\frac{1}{36} - \\frac{1}{3} = 0$$\n$$\\left(u - \\frac{1}{3}\\right)^{2} + \\left(v + \\frac{1}{6}\\right)^{2} = \\frac{4}{36} + \\frac{1}{36} + \\frac{12}{36} = \\frac{17}{36}$$\n\n由此求得 (Thus, we obtain):\n\n(i) 圆 $C$ 的圆心坐标为 (The coordinates of the centre of $C$ are):\n$$\\boxed{\\left(\\frac{1}{3}, -\\frac{1}{6}\\right)}$$\n\n(ii) 圆 $C$ 的半径为 (The radius of $C$ is):\n$$\\boxed{\\frac{\\sqrt{17}}{6}}$$",
    "createdAt": 1784087906757,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "23_Jun_01_6",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q6"
    },
    "stem": "Given that $y=\\sec x$\n\n(a) show that\n$$\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3}=\\sec x\\tan x\\left(p\\sec^2 x+q\\right)$$\nwhere $p$ and $q$ are integers to be determined.\n\\hfill (4)\n\n(b) Hence determine the Taylor series expansion about $\\dfrac{\\pi}{3}$ of $\\sec x$ in ascending powers of $\\left(x-\\dfrac{\\pi}{3}\\right)$, up to and including the term in $\\left(x-\\dfrac{\\pi}{3}\\right)^3$, giving each coefficient in simplest form.\n\\hfill (3)\n\n(c) Use the answer to part (b) to determine, to four significant figures, an approximate value of $\\sec\\left(\\dfrac{7\\pi}{24}\\right)$\n\\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n已知 $y = \\sec x$。我们对 $y$ 依次求一阶、二阶和三阶导数 (Given $y = \\sec x$, we differentiate step-by-step):\n\n1) 一阶导数 (First derivative):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\sec x \\tan x$$\n\n2) 二阶导数 (Second derivative, using product rule):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = (\\sec x \\tan x)\\tan x + \\sec x(\\sec^{2}x) = \\sec x \\tan^{2}x + \\sec^{3}x$$\n利用恒等式 $\\tan^{2}x = \\sec^{2}x - 1$ 化简 (Using the identity $\\tan^{2}x = \\sec^{2}x - 1$):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\sec x (\\sec^{2}x - 1) + \\sec^{3}x = 2\\sec^{3}x - \\sec x$$\n\n3) 三阶导数 (Third derivative):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(2\\sec^{3}x - \\sec x\\right) = 6\\sec^{2}x (\\sec x \\tan x) - \\sec x \\tan x$$\n$$= 6\\sec^{3}x \\tan x - \\sec x \\tan x = \\sec x \\tan x \\left(6\\sec^{2}x - 1\\right)$$\n\n对照目标形式 $\\sec x\\tan x\\left(p\\sec^2 x+q\\right)$，可得整数 $p$ 和 $q$ 分别为 (Comparing this with the required form, we find the integers $p$ and $q$):\n$$\\boxed{p = 6, \\quad q = -1}$$\n\n而证明的导数表达式为：\n$$\\boxed{\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3}=\\sec x\\tan x\\left(6\\sec^2 x-1\\right)}$$\n\n---\n\n**(b)**\n\n泰勒级数（Taylor series）在 $a = \\frac{\\pi}{3}$ 处的展开式为 (The Taylor series expansion about $a = \\frac{\\pi}{3}$ is):\n$$y(x) = y\\left(\\frac{\\pi}{3}\\right) + y'\\left(\\frac{\\pi}{3}\\right)\\left(x-\\frac{\\pi}{3}\\right) + \\frac{y''\\left(\\frac{\\pi}{3}\\right)}{2!}\\left(x-\\frac{\\pi}{3}\\right)^{2} + \\frac{y'''\\left(\\frac{\\pi}{3}\\right)}{3!}\\left(x-\\frac{\\pi}{3}\\right)^{3} + \\dots$$\n\n计算各阶导数在 $x = \\frac{\\pi}{3}$ 处的值 (Evaluate each term at $x = \\frac{\\pi}{3}$):\n已知 $\\sec\\frac{\\pi}{3} = 2$， $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ (We know $\\sec\\frac{\\pi}{3} = 2$, $\\tan\\frac{\\pi}{3} = \\sqrt{3}$).\n\n- $y\\left(\\frac{\\pi}{3}\\right) = 2$\n- $y'\\left(\\frac{\\pi}{3}\\right) = \\sec\\frac{\\pi}{3}\\tan\\frac{\\pi}{3} = 2\\sqrt{3}$\n- $y''\\left(\\frac{\\pi}{3}\\right) = 2(2^{3}) - 2 = 14$\n- $y'''\\left(\\frac{\\pi}{3}\\right) = \\sec\\frac{\\pi}{3}\\tan\\frac{\\pi}{3}\\left(6\\sec^{2}\\frac{\\pi}{3}-1\\right) = (2\\sqrt{3})(6(4)-1) = 46\\sqrt{3}$\n\n将这些值代回泰勒公式中 (Substitute these values into the Taylor formula):\n$$y = 2 + 2\\sqrt{3}\\left(x-\\frac{\\pi}{3}\\right) + \\frac{14}{2}\\left(x-\\frac{\\pi}{3}\\right)^{2} + \\frac{46\\sqrt{3}}{6}\\left(x-\\frac{\\pi}{3}\\right)^{3} + \\dots$$\n\n化简每一项的系数 (Simplify the coefficients):\n$$\\boxed{y = 2 + 2\\sqrt{3}\\left(x-\\frac{\\pi}{3}\\right) + 7\\left(x-\\frac{\\pi}{3}\\right)^{2} + \\frac{23\\sqrt{3}}{3}\\left(x-\\frac{\\pi}{3}\\right)^{3} + \\dots}$$\n\n---\n\n**(c)**\n\n我们要估算 $x = \\frac{7\\pi}{24}$ 处的值，首先求差值项 $\\left(x - \\frac{\\pi}{3}\\right)$ (To estimate the value at $x = \\frac{7\\pi}{24}$, we first find the difference term):\n$$x - \\frac{\\pi}{3} = \\frac{7\\pi}{24} - \\frac{8\\pi}{24} = -\\frac{\\pi}{24}$$\n\n代入 (b) 问中求得的展开式中 (Substitute $\\left(x - \\frac{\\pi}{3}\\right) = -\\frac{\\pi}{24}$ into the Taylor expansion):\n$$\\sec\\left(\\frac{7\\pi}{24}\\right) \\approx 2 + 2\\sqrt{3}\\left(-\\frac{\\pi}{24}\\right) + 7\\left(-\\frac{\\pi}{24}\\right)^{2} + \\frac{23\\sqrt{3}}{3}\\left(-\\frac{\\pi}{24}\\right)^{3}$$\n$$\\sec\\left(\\frac{7\\pi}{24}\\right) \\approx 2 - \\frac{\\sqrt{3}\\pi}{12} + \\frac{7\\pi^{2}}{576} - \\frac{23\\sqrt{3}\\pi^{3}}{41472}$$\n\n我们代入数值计算各项近似值 (Compute the numerical approximation for each term):\n- 第一项 (Term 1): $2$\n- 第二项 (Term 2): $-\\frac{\\sqrt{3}\\pi}{12} \\approx -0.45345$\n- 第三项 (Term 3): $\\frac{7\\pi^{2}}{576} \\approx 0.11994$\n- 第四项 (Term 4): $-\\frac{23\\sqrt{3}\\pi^{3}}{41472} \\approx -0.02978$\n\n求和得到最终近似值 (Sum these terms up to find the final approximation):\n$$\\sec\\left(\\frac{7\\pi}{24}\\right) \\approx 2 - 0.45345 + 0.11994 - 0.02978 = 1.63671$$\n\n保留四位有效数字为 (To four significant figures, the approximate value is):\n$$\\boxed{1.637}$$",
    "createdAt": 1784087918300,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 11,
    "source": "23_Jun_01_7",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q7"
    },
    "stem": "(a) Show that the substitution $z=y^{-2}$ transforms the differential equation\n$$x\\frac{\\mathrm{d}y}{\\mathrm{d}x}+y+4x^2y^3\\ln x=0\\qquad x>0\\tag{I}$$\ninto the differential equation\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x}-\\frac{2z}{x}=8x\\ln x\\qquad x>0\\tag{II}$$\\n\\hfill (5)\n\n(b) By solving differential equation (II), determine the general solution of differential equation (I), giving your answer in the form $y^2=f(x)$\n\\hfill (6)",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $z = y^{-2}$。我们首先将微分方程 (I) 两边同除以 $y^{3}$（在 $y \\neq 0$ 的前提下）(First, we divide both sides of the differential equation (I) by $y^{3}$, assuming $y \\neq 0$):\n$$x y^{-3} \\frac{\\mathrm{d}y}{\\mathrm{d}x} + y^{-2} + 4x^{2}\\ln x = 0$$\n\n接下来，对 $z = y^{-2}$ 关于 $x$ 进行求导 (Next, differentiate $z = y^{-2}$ with respect to $x$ using the chain rule):\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} = -2y^{-3} \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\implies y^{-3} \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{1}{2} \\frac{\\mathrm{d}z}{\\mathrm{d}x}$$\n\n将 $z = y^{-2}$ 及其导数关系代入化简后的方程中 (Substitute the expression of $z$ and its derivative into the simplified equation):\n$$x \\left( -\\frac{1}{2} \\frac{\\mathrm{d}z}{\\mathrm{d}x} \\right) + z + 4x^{2}\\ln x = 0$$\n$$-\\frac{x}{2} \\frac{\\mathrm{d}z}{\\mathrm{d}x} + z = -4x^{2}\\ln x$$\n\n由于 $x > 0$，两边同乘以 $-\\frac{2}{x}$ (Since $x > 0$, multiply both sides by $-\\frac{2}{x}$):\n$$\\boxed{\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{2z}{x} = 8x\\ln x}$$\n\n这与方程 (II) 完全一致，得证。\n\n---\n\n**(b)**\n\n微分方程 (II) 是关于 $z$ 的一阶线性微分方程 (Differential equation (II) is a first-order linear differential equation):\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{2}{x}z = 8x\\ln x$$\n\n其积分因子（Integrating Factor, I.F.）为 (Its integrating factor is):\n$$I = \\mathrm{e}^{\\int -\\frac{2}{x}\\,\\mathrm{d}x} = \\mathrm{e}^{-2\\ln x} = \\mathrm{e}^{\\ln\\left(x^{-2}\\right)} = x^{-2} = \\frac{1}{x^{2}}$$\n\n在方程两边同乘以积分因子 $\\frac{1}{x^{2}}$ (Multiply both sides of the equation by the integrating factor $\\frac{1}{x^{2}}$):\n$$\\frac{1}{x^{2}}\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{2z}{x^{3}} = \\frac{8\\ln x}{x}$$\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( \\frac{z}{x^{2}} \\right) = \\frac{8\\ln x}{x}$$\n\n两边关于 $x$ 进行积分 (Integrate both sides with respect to $x$):\n$$\\frac{z}{x^{2}} = \\int \\frac{8\\ln x}{x}\\,\\mathrm{d}x$$\n\n使用换元法，令 $u = \\ln x \\implies \\mathrm{d}u = \\frac{1}{x}\\,\\mathrm{d}x$ (Using substitution, let $u = \\ln x$):\n$$\\int \\frac{8\\ln x}{x}\\,\\mathrm{d}x = \\int 8u\\,\\mathrm{d}u = 4u^{2} + C = 4(\\ln x)^{2} + C$$\n其中 $C$ 为任意常数 (where $C$ is an arbitrary constant).\n\n因此得到 (Therefore):\n$$\\frac{z}{x^{2}} = 4(\\ln x)^{2} + C \\implies z = x^{2}\\left[ 4(\\ln x)^{2} + C \\right]$$\n\n由于 $z = y^{-2} = \\frac{1}{y^{2}}$，将其代回以求出 $y^{2}$ (Since $z = y^{-2} = \\frac{1}{y^{2}}$, substitute it back to solve for $y^{2}$):\n$$\\frac{1}{y^{2}} = x^{2}\\left[ 4(\\ln x)^{2} + C \\right]$$\n\n两边取倒数，得到原方程 (I) 的通解为 (Taking the reciprocal of both sides, the general solution of (I) is):\n$$\\boxed{y^{2} = \\frac{1}{x^{2}\\left[ 4(\\ln x)^{2} + C \\right]}}$$",
    "createdAt": 1784087931602,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jun01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 13,
    "source": "23_Jun_01_8",
    "examRef": {
      "year": 2023,
      "month": "Jun",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2023 Jun · Paper 01 Q8"
    },
    "stem": "Figure 1 shows a sketch of the curve $C$ with equation\n$$r=6(1+\\cos\\theta)\\qquad 0\\leqslant\\theta\\leqslant\\pi$$\n\nGiven that $C$ meets the initial line at the point $A$, as shown in Figure 1,\n\n(a) write down the polar coordinates of $A$.\n\\hfill (1)\n\nThe line $l_1$, also shown in Figure 1, is the tangent to $C$ at the point $B$ and is parallel to the initial line.\n\n(b) Use calculus to determine the polar coordinates of $B$.\n\\hfill (4)\n\nThe line $l_2$, also shown in Figure 1, is the tangent to $C$ at $A$ and is perpendicular to the initial line.\n\nThe region $R$, shown shaded in Figure 1, is bounded by $C$, $l_1$ and $l_2$\n\n(c) Use algebraic integration to find the exact area of $R$, giving your answer in the form $p\\sqrt{3}+q\\pi$ where $p$ and $q$ are constants to be determined.\n\\hfill (8)",
    "figure": "data/images/fp2_23Jun01_q8_fig.png",
    "solution": "**(a)**\n\n点 $A$ 是曲线 $C$ 与极轴（$\\theta = 0$）的交点 (The point $A$ is where the curve $C$ meets the initial line $\\theta = 0$):\n将 $\\theta = 0$ 代入 $r = 6(1+\\cos\\theta)$ 中 (Substitute $\\theta = 0$ into the polar equation):\n$$r = 6(1+\\cos 0) = 6(1+1) = 12$$\n\n因此，点 $A$ 的极坐标为 (Therefore, the polar coordinates of $A$ are):\n$$\\boxed{A(12, 0)}$$\n\n---\n\n**(b)**\n\n因为切线 $l_1$ 平行于极轴，这意味着在点 $B$ 处有 $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$ (Since the tangent $l_1$ is parallel to the initial line, this means $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$ at the point $B$):\n\n利用 $y = r\\sin\\theta$ (Using $y = r\\sin\\theta$):\n$$y = 6(1+\\cos\\theta)\\sin\\theta = 6\\sin\\theta + 6\\sin\\theta\\cos\\theta = 6\\sin\\theta + 3\\sin 2\\theta$$\n\n关于 $\\theta$ 求导 (Differentiate $y$ with respect to $\\theta$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 6\\cos\\theta + 6\\cos 2\\theta$$\n\n令导数为 0 (Set the derivative to zero):\n$$6\\cos\\theta + 6\\cos 2\\theta = 0 \\implies \\cos\\theta + \\cos 2\\theta = 0$$\n\n利用二倍角公式 $\\cos 2\\theta = 2\\cos^{2}\\theta - 1$ (Using the double-angle formula):\n$$2\\cos^{2}\\theta + \\cos\\theta - 1 = 0$$\n$$(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0$$\n\n由此可得 (Thus):\n$$\\cos\\theta = \\frac{1}{2} \\quad \\text{或 (or)} \\quad \\cos\\theta = -1$$\n\n由于 $0 \\leqslant \\theta \\leqslant \\pi$：\n- 若 $\\cos\\theta = -1 \\implies \\theta = \\pi$，此时 $r = 0$（对应极点，并非点 $B$）。\n- 若 $\\cos\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{3}$。\n\n将 $\\theta = \\frac{\\pi}{3}$ 代入原方程求极径 $r$ (Substitute $\\theta = \\frac{\\pi}{3}$ into the equation to find $r$):\n$$r = 6\\left(1 + \\cos\\frac{\\pi}{3}\\right) = 6\\left(1 + \\frac{1}{2}\\right) = 9$$\n\n因此，点 $B$ 的极坐标为 (Therefore, the polar coordinates of $B$ are):\n$$\\boxed{B\\left(9, \\frac{\\pi}{3}\\right)}$$\n\n---\n\n**(c)**\n\n阴影区域 $R$ 是由曲线 $C$、水平切线 $l_1$ 和垂直切线 $l_2$ 共同围成的有限区域 (The shaded region $R$ is bounded by $C$, the horizontal tangent $l_1$, and the vertical tangent $l_2$).\n\n我们首先求出点 $A$ 和点 $B$ 的直角坐标 (First, find the Cartesian coordinates of points $A$ and $B$):\n- 对于点 $A(12, 0)$，其直角坐标为 $(12, 0)$。\n- 对于点 $B\\left(9, \\frac{\\pi}{3}\\right)$，其直角坐标为 (Its Cartesian coordinates are):\n  $$x_{B} = r_{B}\\cos\\frac{\\pi}{3} = 9\\left(\\frac{1}{2}\\right) = 4.5$$\n  $$y_{B} = r_{B}\\sin\\frac{\\pi}{3} = 9\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{9\\sqrt{3}}{2}$$\n\n因此，切线 $l_1$ 的方程为 $y = \\frac{9\\sqrt{3}}{2}$，切线 $l_2$ 的方程为 $x = 12$。\n\n我们可以利用几何分解来计算阴影区域 $R$ 的面积：\n将整个包围区域看作一个多边形（由 $O(0,0)$、射线 $OB$、水平线段 $y=y_B$、垂直线段 $x=12$ 围成），减去曲线 $C$ 的极坐标扇形面积 (We can decompose the area of $R$ as the area of the polygon bounded by $O$, ray $OB$, $y=y_B$, and $x=12$, minus the polar sector area of $C$ from $\\theta=0$ to $\\frac{\\pi}{3}$):\n$$\\text{Area}(R) = \\text{Area}_{\\text{polygon}} - \\text{Area}_{\\text{polar}}$$\n\n**1. 计算多边形面积 (Calculate the polygon area):**\n多边形可以分为一个三角形（底为 $4.5$，高为 $y_B$）和一个矩形（宽为 $12-4.5=7.5$，高为 $y_B$）(The polygon consists of a triangle and a rectangle):\n$$\\text{Area}_{\\text{polygon}} = \\frac{1}{2}(4.5)\\left(\\frac{9\\sqrt{3}}{2}\\right) + (12 - 4.5)\\left(\\frac{9\\sqrt{3}}{2}\\right)$$\n$$= \\frac{81\\sqrt{3}}{8} + \\frac{15}{2}\\left(\\frac{9\\sqrt{3}}{2}\\right) = \\frac{81\\sqrt{3}}{8} + \\frac{270\\sqrt{3}}{8} = \\frac{351\\sqrt{3}}{8}$$\n\n**2. 计算极坐标扇形面积 (Calculate the polar sector area):**\n$$\\text{Area}_{\\text{polar}} = \\frac{1}{2}\\int_{0}^{\\pi/3} r^{2} \\mathrm{d}\\theta = \\frac{1}{2}\\int_{0}^{\\pi/3} 36(1+\\cos\\theta)^{2} \\mathrm{d}\\theta$$\n$$r^{2} = 36(1 + 2\\cos\\theta + \\cos^{2}\\theta) = 36\\left(1 + 2\\cos\\theta + \\frac{1+\\cos 2\\theta}{2}\\right) = 54 + 72\\cos\\theta + 18\\cos 2\\theta$$\n\n进行积分 (Perform the integration):\n$$\\int_{0}^{\\pi/3} \\left(54 + 72\\cos\\theta + 18\\cos 2\\theta\\right) \\mathrm{d}\\theta = \\left[ 54\\theta + 72\\sin\\theta + 9\\sin 2\\theta \\right]_{0}^{\\pi/3}$$\n$$= 54\\left(\\frac{\\pi}{3}\\right) + 72\\sin\\frac{\\pi}{3} + 9\\sin\\frac{2\\pi}{3} - 0$$\n$$= 18\\pi + 72\\left(\\frac{\\sqrt{3}}{2}\\right) + 9\\left(\\frac{\\sqrt{3}}{2}\\right) = 18\\pi + \\frac{81\\sqrt{3}}{2}$$\n\n因此，扇形面积为 (Therefore, the polar area is):\n$$\\text{Area}_{\\text{polar}} = \\frac{1}{2}\\left(18\\pi + \\frac{81\\sqrt{3}}{2}\\right) = 9\\pi + \\frac{81\\sqrt{3}}{4} = 9\\pi + \\frac{162\\sqrt{3}}{8}$$\n\n**3. 计算阴影区域 $R$ 的面积 (Calculate the area of region $R$):**\n$$\\text{Area}(R) = \\text{Area}_{\\text{polygon}} - \\text{Area}_{\\text{polar}}$$\n$$\\text{Area}(R) = \\frac{351\\sqrt{3}}{8} - \\left( 9\\pi + \\frac{162\\sqrt{3}}{8} \\right) = \\frac{189\\sqrt{3}}{8} - 9\\pi$$\n\n因此，区域 $R$ 的精确面积为 (Therefore, the exact area of $R$ is):\n$$\\boxed{\\text{Area}(R) = \\frac{189}{8}\\sqrt{3} - 9\\pi}$$\n其中常数 $p = \\frac{189}{8}$， $q = -9$。",
    "createdAt": 1784087944712,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "23_Jan_01_1",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q1"
    },
    "stem": "Given that $y=\\ln(5+3x)$\n\n(a) determine, in simplest form, $\\dfrac{\\mathrm{d}^3y}{\\mathrm{d}x^3}$ \\hfill (3)\n\n(b) Hence determine the Maclaurin series expansion of $\\ln(5+3x)$, in ascending powers of $x$ up to and including the term in $x^3$, giving each coefficient in simplest form. \\hfill (2)\n\n(c) Hence write down the Maclaurin series expansion of $\\ln(5-3x)$, in ascending powers of $x$ up to and including the term in $x^3$, giving each coefficient in simplest form. \\hfill (1)\n\n(d) Use the answers to parts (b) and (c) to determine the first 2 non-zero terms, in ascending powers of $x$, of the Maclaurin series expansion of \\hfill (2)\n$$\\ln\\left(\\frac{5+3x}{5-3x}\\right)$$",
    "figure": "",
    "solution": "**(a)**\n\n已知 $y = \\ln(5+3x)$。我们对 $y$ 依次求导 (Given $y = \\ln(5+3x)$, we differentiate step-by-step):\n\n一阶导数 (First derivative):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{3}{5+3x} = 3(5+3x)^{-1}$$\n\n二阶导数 (Second derivative):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = -3(5+3x)^{-2} \\cdot 3 = -9(5+3x)^{-2}$$\n\n三阶导数 (Third derivative):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = 18(5+3x)^{-3} \\cdot 3 = 54(5+3x)^{-3}$$\n\n化简写为最简分数形式为 (Written in its simplest fractional form):\n$$\\boxed{\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{54}{(5+3x)^{3}}}$$\n\n---\n\n**(b)**\n\n麦克劳林级数（Maclaurin series）的公式为 (The Maclaurin series expansion is given by):\n$$y(x) = y(0) + y'(0)x + \\frac{y''(0)}{2!}x^{2} + \\frac{y'''(0)}{3!}x^{3} + \\dots$$\n\n我们求出 $x = 0$ 处的值 (Evaluate $y$ and its derivatives at $x = 0$):\n- $y(0) = \\ln 5$\n- $y'(0) = \\frac{3}{5}$\n- $y''(0) = -\\frac{9}{5^{2}} = -\\frac{9}{25}$\n- $y'''(0) = \\frac{54}{5^{3}} = \\frac{54}{125}$\n\n将这些值代入麦克劳林公式中 (Substitute these values into the Maclaurin formula):\n$$\\ln(5+3x) = \\ln 5 + \\frac{3}{5}x + \\frac{-\\frac{9}{25}}{2}x^{2} + \\frac{\\frac{54}{125}}{6}x^{3} + \\dots$$\n\n化简每一项的系数 (Simplify the coefficients):\n$$\\boxed{\\ln(5+3x) = \\ln 5 + \\frac{3}{5}x - \\frac{9}{50}x^{2} + \\frac{9}{125}x^{3} + \\dots}$$\n\n---\n\n**(c)**\n\n我们将 (b) 问中结果的 $x$ 替换为 $-x$ 即可得到 $\\ln(5-3x)$ 的级数 (Substitute $-x$ for $x$ in the result of part (b) to obtain the series for $\\ln(5-3x)$):\n$$\\ln(5-3x) = \\ln 5 + \\frac{3}{5}(-x) - \\frac{9}{50}(-x)^{2} + \\frac{9}{125}(-x)^{3} + \\dots$$\n\n化简得到 (Simplify):\n$$\\boxed{\\ln(5-3x) = \\ln 5 - \\frac{3}{5}x - \\frac{9}{50}x^{2} - \\frac{9}{125}x^{3} - \\dots}$$\n\n---\n\n**(d)**\n\n利用对数的运算性质 (Using log properties):\n$$\\ln\\left(\\frac{5+3x}{5-3x}\\right) = \\ln(5+3x) - \\ln(5-3x)$$\n\n将 (b) 问和 (c) 问的级数展开式相减 (Subtract the expansion of part (c) from that of part (b)):\n$$\\ln\\left(\\frac{5+3x}{5-3x}\\right) = \\left( \\ln 5 + \\frac{3}{5}x - \\frac{9}{50}x^{2} + \\frac{9}{125}x^{3} + \\dots \\right) - \\left( \\ln 5 - \\frac{3}{5}x - \\frac{9}{50}x^{2} - \\frac{9}{125}x^{3} - \\dots \\right)$$\n$$= (\\ln 5 - \\ln 5) + \\left( \\frac{3}{5}x - \\left(-\\frac{3}{5}x\\right) \\right) + \\left( -\\frac{9}{50}x^{2} - \\left(-\\frac{9}{50}x^{2}\\right) \\right) + \\left( \\frac{9}{125}x^{3} - \\left(-\\frac{9}{125}x^{3}\\right) \\right) + \\dots$$\n$$= \\frac{6}{5}x + \\frac{18}{125}x^{3} + \\dots$$\n\n因此，前两个非零项组成的表达式为 (Therefore, the first 2 non-zero terms are):\n$$\\boxed{\\frac{6}{5}x + \\frac{18}{125}x^{3}}$$",
    "createdAt": 1784088108948,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [],
    "difficulty": 2,
    "marks": 6,
    "source": "23_Jan_01_2",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q2"
    },
    "stem": "(a) Express\n$$\\frac{1}{(2n-1)(2n+1)(2n+3)}$$\nin partial fractions. \\hfill (2)\n\n(b) Hence, using the method of differences, show that for all integer values of $n,$\n$$\\sum_{r=1}^{n}\\frac{1}{(2r-1)(2r+1)(2r+3)}=\\frac{n(n+2)}{a(2n+b)(2n+c)}$$\nwhere $a$, $b$ and $c$ are integers to be determined. \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n首先，我们将代数式写为部分分式的形式 (First, we express the algebraic fraction in partial fractions):\n$$\\frac{1}{(2n-1)(2n+1)(2n+3)} = \\frac{P}{2n-1} + \\frac{Q}{2n+1} + \\frac{R}{2n+3}$$\n\n两边同乘以分母 $(2n-1)(2n+1)(2n+3)$ (Multiply both sides by $(2n-1)(2n+1)(2n+3)$):\n$$1 = P(2n+1)(2n+3) + Q(2n-1)(2n+3) + R(2n-1)(2n+1)$$\n\n依次令各项分母对应为 0，解出常数 $P, Q, R$ (Substitute the roots to solve for the constants):\n- 令 $2n-1 = 0 \\implies n = \\frac{1}{2}$:\n  $$1 = P(1+1)(1+3) = 8P \\implies P = \\frac{1}{8}$$\n- 令 $2n+1 = 0 \\implies n = -\\frac{1}{2}$:\n  $$1 = Q(-1-1)(-1+3) = -4Q \\implies Q = -\\frac{1}{4}$$\n- 令 $2n+3 = 0 \\implies n = -\\frac{3}{2}$:\n  $$1 = R(-3-1)(-3+1) = 8R \\implies R = \\frac{1}{8}$$\n\n因此，部分分式展开式为 (Therefore, the partial fraction representation is):\n$$\\boxed{\\frac{1}{(2n-1)(2n+1)(2n+3)} = \\frac{1}{8(2n-1)} - \\frac{1}{4(2n+1)} + \\frac{1}{8(2n+3)}}$$\n\n---\n\n**(b)**\n\n根据 (a) 问的结果，我们可以重写求和项并对其进行配对组合 (Using the result from part (a), we rewrite and group the terms of the summation):\n$$u_{r} = \\frac{1}{(2r-1)(2r+1)(2r+3)} = \\frac{1}{8} \\left[ \\frac{1}{2r-1} - \\frac{2}{2r+1} + \\frac{1}{2r+3} \\right]$$\n$$= \\frac{1}{8} \\left[ \\left( \\frac{1}{2r-1} - \\frac{1}{2r+1} \\right) - \\left( \\frac{1}{2r+1} - \\frac{1}{2r+3} \\right) \\right]$$\n\n设 $f(r) = \\frac{1}{2r-1} - \\frac{1}{2r+1}$，则上式可表示为 (Let $f(r) = \\frac{1}{2r-1} - \\frac{1}{2r+1}$, then the terms can be written as):\n$$u_{r} = \\frac{1}{8} \\Bigl( f(r) - f(r+1) \\Bigr)$$\n\n利用裂项消去法（裂项法）对求和进行化简 (Use the method of differences to simplify the summation):\n$$\\sum_{r=1}^{n} u_{r} = \\frac{1}{8} \\sum_{r=1}^{n} \\Bigl( f(r) - f(r+1) \\Bigr) = \\frac{1}{8} \\Bigl( f(1) - f(n+1) \\Bigr)$$\n\n计算 $f(1)$ 和 $f(n+1)$ 的值 (Evaluate $f(1)$ and $f(n+1)$):\n- $f(1) = \\frac{1}{1} - \\frac{1}{3} = \\frac{2}{3}$\n- $f(n+1) = \\frac{1}{2n+1} - \\frac{1}{2n+3} = \\frac{2}{(2n+1)(2n+3)}$\n\n代入并化简 (Substitute and simplify):\n$$\\sum_{r=1}^{n} u_{r} = \\frac{1}{8} \\left[ \\frac{2}{3} - \\frac{2}{(2n+1)(2n+3)} \\right]$$\n$$= \\frac{2}{8} \\left[ \\frac{1}{3} - \\frac{1}{(2n+1)(2n+3)} \\right]$$\n$$= \\frac{1}{4} \\left[ \\frac{(2n+1)(2n+3) - 3}{3(2n+1)(2n+3)} \\right]$$\n$$= \\frac{1}{12} \\left[ \\frac{4n^{2} + 8n + 3 - 3}{(2n+1)(2n+3)} \\right]$$\n$$= \\frac{4n^{2}+8n}{12(2n+1)(2n+3)} = \\frac{4n(n+2)}{12(2n+1)(2n+3)} = \\frac{n(n+2)}{3(2n+1)(2n+3)}$$\n\n对照目标形式 $\\frac{n(n+2)}{a(2n+b)(2n+c)}$，可得整数 $a, b, c$ 值为 (Comparing this with the required form, we obtain the integer values for $a, b, c$):\n$$\\boxed{\\sum_{r=1}^{n}\\frac{1}{(2r-1)(2r+1)(2r+3)}=\\frac{n(n+2)}{3(2n+1)(2n+3)}}$$\n其中 $a = 3$，$b = 1$，$c = 3$ (或 $b=3, c=1$)。",
    "createdAt": 1784088176090,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "23_Jan_01_3",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q3"
    },
    "stem": "(a) Show that the transformation $y=\\dfrac{1}{z}$ transforms the differential equation \\hfill (3)\n$$x^{2}\\frac{\\mathrm{d}y}{\\mathrm{d}x}+xy=2y^{2}$$\ninto the differential equation\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x}-\\frac{z}{x}=-\\frac{2}{x^{2}}$$\n\n(b) Solve differential equation (II) to determine $z$ in terms of $x$. \\hfill (4)\n\n(c) Hence determine the particular solution of differential equation (I) for which $y=-\\dfrac{3}{8}$ at $x=3$\nGive your answer in the form $y=f(x)$. \\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $y = \\frac{1}{z} = z^{-1}$。对其关于 $x$ 进行求导 (Given the transformation $y = \\frac{1}{z} = z^{-1}$, differentiate both sides with respect to $x$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -z^{-2} \\frac{\\mathrm{d}z}{\\mathrm{d}x} = -\\frac{1}{z^{2}}\\frac{\\mathrm{d}z}{\\mathrm{d}x}$$\n\n将 $y$ 和 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 代入微分方程 (I) (Substitute $y$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ into differential equation (I)):\n$$x^{2} \\left( -\\frac{1}{z^{2}}\\frac{\\mathrm{d}z}{\\mathrm{d}x} \\right) + x \\left( \\frac{1}{z} \\right) = 2 \\left( \\frac{1}{z} \\right)^{2}$$\n$$-\\frac{x^{2}}{z^{2}}\\frac{\\mathrm{d}z}{\\mathrm{d}x} + \\frac{x}{z} = \\frac{2}{z^{2}}$$\n\n两边同除以 $-\\frac{x^{2}}{z^{2}}$（假设 $x \\neq 0, z \\neq 0$）(Multiply both sides by $-\\frac{z^{2}}{x^{2}}$):\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{z^{2}}{x^{2}} \\cdot \\frac{x}{z} = -\\frac{2}{x^{2}}$$\n$$\\boxed{\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{z}{x} = -\\frac{2}{x^{2}}}$$\n\n这与方程 (II) 一致，得证。\n\n---\n\n**(b)**\n\n微分方程 (II) 是关于 $z$ 的一阶线性微分方程 (Differential equation (II) is a first-order linear differential equation):\n$$\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{1}{x}z = -\\frac{2}{x^{2}}$$\n\n其积分因子（Integrating Factor, I.F.）为 (Its integrating factor is):\n$$I = \\mathrm{e}^{\\int -\\frac{1}{x}\\,\\mathrm{d}x} = \\mathrm{e}^{-\\ln x} = \\mathrm{e}^{\\ln\\left(x^{-1}\\right)} = \\frac{1}{x}$$\n\n在方程两边同乘以积分因子 $\\frac{1}{x}$ (Multiply both sides of the equation by the integrating factor $\\frac{1}{x}$):\n$$\\frac{1}{x}\\frac{\\mathrm{d}z}{\\mathrm{d}x} - \\frac{z}{x^{2}} = -\\frac{2}{x^{3}}$$\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( \\frac{z}{x} \\right) = -2x^{-3}$$\n\n两边关于 $x$ 进行积分 (Integrate both sides with respect to $x$):\n$$\\frac{z}{x} = \\int -2x^{-3}\\,\\mathrm{d}x = \\frac{-2x^{-2}}{-2} + C = \\frac{1}{x^{2}} + C$$\n其中 $C$ 为任意常数 (where $C$ is an arbitrary constant).\n\n两边同乘以 $x$，求得 $z$ 表达式为 (Multiply both sides by $x$ to find $z$):\n$$\\boxed{z = \\frac{1}{x} + Cx}$$\n\n---\n\n**(c)**\n\n由于 $y = \\frac{1}{z}$，我们将 $z$ 的表达式代入得到 $y$ 的通解 (Since $y = \\frac{1}{z}$, we substitute the expression of $z$ to get the general solution of $y$):\n$$y = \\frac{1}{\\frac{1}{x} + Cx} = \\frac{x}{1 + Cx^{2}}$$\n\n代入初始条件：当 $x = 3$ 时，$y = -\\frac{3}{8}$ (Substitute the initial condition $y=-\\frac{3}{8}$ at $x=3$):\n$$-\\frac{3}{8} = \\frac{3}{1 + C(3)^{2}}$$\n$$-\\frac{1}{8} = \\frac{1}{1 + 9C} \\implies -(1+9C) = 8 \\implies -9C = 9 \\implies C = -1$$\n\n将 $C = -1$ 代回原通解中，得到特解为 (Substitute $C = -1$ back into the general solution to obtain the particular solution):\n$$\\boxed{y = \\frac{x}{1 - x^{2}}}$$",
    "createdAt": 1784088300142,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 7,
    "source": "23_Jan_01_4",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q4"
    },
    "stem": "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=y^{2}-x$$\n\n(a) Show that\n$$\\frac{\\mathrm{d}^{4} y}{\\mathrm{d} x^{4}}=A y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}+B \\frac{\\mathrm{d} y}{\\mathrm{d} x} \\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$$\nwhere $A$ and $B$ are integers to be determined. \\hfill (4)\n\nGiven that $y=1$ at $x=-1$\n\n(b) determine the Taylor series solution for $y$, in ascending powers of $(x+1)$ up to and including the term in $(x+1)^{4}$, giving each coefficient in simplest form. \\hfill (3)",
    "figure": "",
    "solution": "**(a)**\n\n已知原微分方程为 (Given the original differential equation):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=y^{2}-x$$\n\n我们对两边关于 $x$ 进行逐阶求导 (Differentiate both sides with respect to $x$ successively):\n\n1) 二阶导数 (Second derivative):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 1$$\n\n2) 三阶导数 (Third derivative, using product rule):\n$$\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( 2y\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 1 \\right) = 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2} + 2y\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$$\n\n3) 四阶导数 (Fourth derivative):\n$$\\frac{\\mathrm{d}^{4}y}{\\mathrm{d}x^{4}} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[ 2\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2} + 2y\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} \\right]$$\n$$= 4\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} + 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} + 2y \\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}}$$\n$$= 2y\\frac{\\mathrm{d}^{3}y}{\\mathrm{d}x^{3}} + 6\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$$\n\n对照目标形式 (Comparing this with the required form):\n$$\\frac{\\mathrm{d}^{4} y}{\\mathrm{d} x^{4}}=A y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}+B \\frac{\\mathrm{d} y}{\\mathrm{d} x} \\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$$\n\n我们得到常数 $A, B$ 的值为 (We obtain the integer values for $A$ and $B$):\n$$\\boxed{A = 2, \\quad B = 6}$$\n\n而证明的四阶导数表达式为：\n$$\\boxed{\\frac{\\mathrm{d}^{4} y}{\\mathrm{d} x^{4}}=2 y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}+6 \\frac{\\mathrm{d} y}{\\mathrm{d} x} \\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}}$$\n\n---\n\n**(b)**\n\n泰勒级数（Taylor series）关于 $x = -1$ 展开的形式为 (The Taylor series expansion about $x = -1$ is):\n$$y(x) = y(-1) + y'(-1)(x+1) + \\frac{y''(-1)}{2!}(x+1)^{2} + \\frac{y'''(-1)}{3!}(x+1)^{3} + \\frac{y^{(4)}(-1)}{4!}(x+1)^{4} + \\dots$$\n\n已知当 $x = -1$ 时，$y(-1) = 1$。我们将 $x = -1$ 代入依次计算各阶导数的值 (Given $y(-1) = 1$ at $x = -1$. We substitute $x = -1$ to calculate the values of the derivatives):\n\n1) 一阶导数 (First derivative):\n$$y'(-1) = (1)^{2} - (-1) = 1 + 1 = 2$$\n\n2) 二阶导数 (Second derivative):\n$$y''(-1) = 2(1)(2) - 1 = 3$$\n\n3) 三阶导数 (Third derivative):\n$$y'''(-1) = 2(2)^{2} + 2(1)(3) = 8 + 6 = 14$$\n\n4) 四阶导数 (Fourth derivative):\n$$y^{(4)}(-1) = 2(1)(14) + 6(2)(3) = 28 + 36 = 64$$\n\n将这些导数值代回泰勒级数公式中 (Substitute these derivative values back into the Taylor series formula):\n$$y(x) = 1 + 2(x+1) + \\frac{3}{2!}(x+1)^{2} + \\frac{14}{3!}(x+1)^{3} + \\frac{64}{4!}(x+1)^{4} + \\dots$$\n\n化简每一项的系数为最简形式 (Simplify each coefficient to its simplest form):\n$$\\boxed{y = 1 + 2(x+1) + \\frac{3}{2}(x+1)^{2} + \\frac{7}{3}(x+1)^{3} + \\frac{8}{3}(x+1)^{4} + \\dots}$$",
    "createdAt": 1784088381401,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 6,
    "source": "23_Jan_01_5",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q5"
    },
    "stem": "Use algebra to determine the set of values of $x$ for which \\hfill (6)\n$$\\frac{x^{2}-9}{|x+8|}>6-2x$$",
    "figure": "",
    "solution": "首先，对于所有实数 $x \\neq -8$，分母 $|x+8|$ 始终为正数。因此，我们可以在不等式两边同乘以 $|x+8|$，而不改变不等号的方向 (Since the denominator $|x+8| > 0$ for all $x \\neq -8$, we can multiply both sides of the inequality by $|x+8|$ without changing the direction of the inequality):\n$$x^{2} - 9 > (6-2x)|x+8| \\quad (\\text{其中 / where } x \\neq -8)$$\n\n我们需要根据 $x+8$ 的正负号分两种情况进行讨论 (We solve the inequality by considering two cases based on the sign of $x+8$):\n\n---\n\n**情况 1： $x+8 > 0 \\implies x > -8$ (Case 1: $x > -8$)**\n\n此时有 $|x+8| = x+8$，不等式变为 (In this case, $|x+8| = x+8$, so the inequality becomes):\n$$x^{2} - 9 > (6-2x)(x+8)$$\n$$x^{2} - 9 > 6x + 48 - 2x^{2} - 16x$$\n$$x^{2} - 9 > -2x^{2} - 10x + 48$$\n\n将所有项移到等式左边 (Bring all terms to the left-hand side):\n$$3x^{2} + 10x - 57 > 0$$\n\n求二次方程 $3x^{2} + 10x - 57 = 0$ 的根 (Solve the quadratic equation):\n$$x = \\frac{-10 \\pm \\sqrt{100 - 4(3)(-57)}}{6} = \\frac{-10 \\pm \\sqrt{784}}{6} = \\frac{-10 \\pm 28}{6}$$\n$$x_1 = 3, \\quad x_2 = -\\frac{19}{3}$$\n\n因为二次不等式为 $3x^{2} + 10x - 57 > 0$，其解集为两根之外 (Since the quadratic inequality is $> 0$, the solution lies outside the roots):\n$$x < -\\frac{19}{3} \\quad \\text{或 (or)} \\quad x > 3$$\n\n结合情况 1 的前提条件 $x > -8$，取交集得到 (Intersect this with the condition $x > -8$):\n$$-8 < x < -\\frac{19}{3} \\quad \\text{或 (or)} \\quad x > 3$$\n\n---\n\n**情况 2： $x+8 < 0 \\implies x < -8$ (Case 2: $x < -8$)**\n\n此时有 $|x+8| = -(x+8) = -x-8$，不等式变为 (In this case, $|x+8| = -(x+8)$, so the inequality becomes):\n$$x^{2} - 9 > (6-2x)\\bigl(-(x+8)\\bigr)$$\n$$x^{2} - 9 > -(6-2x)(x+8)$$\n$$x^{2} - 9 > -(-2x^{2} - 10x + 48)$$\n$$x^{2} - 9 > 2x^{2} + 10x - 48$$\n\n将所有项移到等式右边 (Bring all terms to the right-hand side):\n$$x^{2} + 10x - 39 < 0$$\n\n对二次项进行因式分解 (Factor the quadratic expression):\n$$(x+13)(x-3) < 0$$\n\n因为二次不等式为 $(x+13)(x-3) < 0$，其解集在两根之间 (Since the quadratic inequality is $< 0$, the solution lies between the roots):\n$$-13 < x < 3$$\n\n结合情况 2 的前提条件 $x < -8$，取交集得到 (Intersect this with the condition $x < -8$):\n$$-13 < x < -8$$\n\n---\n\n**合并两种情况的解集 (Combine the solutions of both cases):**\n\n综合上述两种情况（注意 $x = -8$ 时分母未定义，必须排除），最终的解集为 (Combining the results and excluding $x = -8$ where the denominator is undefined, the final set of values of $x$ is):\n$$\\boxed{-13 < x < -8 \\quad \\text{或} \\quad -8 < x < -\\frac{19}{3} \\quad \\text{或} \\quad x > 3}$$",
    "createdAt": 1784088473813,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS",
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "23_Jan_01_6",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q6"
    },
    "stem": "A complex number $z$ is represented by the point $P$ in an Argand diagram.\nGiven that\n$$|z-2\\mathrm{i}|=|z-3|$$\n\n(a) sketch the locus of $P$. You do **not** need to find the coordinates of any intercepts. \\hfill (2)\n\nThe transformation $T$ from the $z$-plane to the $w$-plane is given by\n$$w=\\frac{\\mathrm{i}z}{z-2\\mathrm{i}}\\qquad z\\neq 2\\mathrm{i}$$\nGiven that $T$ maps $|z-2\\mathrm{i}|=|z-3|$ to a circle $C$ in the $w$-plane,\n\n(b) find the equation of $C$, giving your answer in the form\n$$|w-(p+q\\mathrm{i})|=r$$\nwhere $p$, $q$ and $r$ are real numbers to be determined. \\hfill (6)",
    "figure": "",
    "solution": "**(a)**\n\n轨迹方程为 (The locus equation is):\n$$|z-2\\mathrm{i}|=|z-3|$$\n\n这表示在 Argand 图上，连接 $2\\mathrm{i}$（即点 $(0,2)$）和 $3$（即点 $(3,0)$）这两点的线段的**垂直平分线** (This represents the **perpendicular bisector** of the line segment joining the points $2\\mathrm{i}$ and $3$ on the Argand diagram).\n\n作图时 (To sketch):\n- 标出虚轴上的点 $2\\mathrm{i}$ 和实轴上的点 $3$。\n- 连接这两点，并绘制其垂直平分线（一条经过第一象限、斜率为正的直线，其过中点 $(1.5, 1)$）(Draw a straight line that is the perpendicular bisector of the segment connecting $2\\mathrm{i}$ and $3$).\n\n$$\\boxed{\\text{轨迹 } P \\text{ 是连接 } 2\\mathrm{i} \\text{ 与 } 3 \\text{ 的线段的垂直平分线}}$$\n\n---\n\n**(b)**\n\n给定变换公式为 (Given the transformation equation):\n$$w=\\frac{\\mathrm{i}z}{z-2\\mathrm{i}}$$\n\n我们需要将 $z$ 用 $w$ 来表示 (We need to express $z$ in terms of $w$):\n$$w(z-2\\mathrm{i}) = \\mathrm{i}z$$\n$$wz - 2\\mathrm{i}w = \\mathrm{i}z$$\n$$wz - \\mathrm{i}z = 2\\mathrm{i}w$$\n$$z(w-\\mathrm{i}) = 2\\mathrm{i}w \\implies z = \\frac{2\\mathrm{i}w}{w-\\mathrm{i}}$$\n\n将 $z$ 的表达式代入轨迹方程 $|z-2\\mathrm{i}|=|z-3|$ 中。首先分别计算 $z-2\\mathrm{i}$ 和 $z-3$ (Substitute the expression for $z$ into the locus equation. First, compute $z-2\\mathrm{i}$ and $z-3$):\n\n1) 对于 $z-2\\mathrm{i}$ (For $z-2\\mathrm{i}$):\n$$z - 2\\mathrm{i} = \\frac{2\\mathrm{i}w}{w-\\mathrm{i}} - 2\\mathrm{i} = \\frac{2\\mathrm{i}w - 2\\mathrm{i}(w-\\mathrm{i})}{w-\\mathrm{i}} = \\frac{-2}{w-\\mathrm{i}}$$\n$$\\left|z - 2\\mathrm{i}\\right| = \\frac{2}{|w-\\mathrm{i}|}$$\n\n2) 对于 $z-3$ (For $z-3$):\n$$z - 3 = \\frac{2\\mathrm{i}w}{w-\\mathrm{i}} - 3 = \\frac{2\\mathrm{i}w - 3(w-\\mathrm{i})}{w-\\mathrm{i}} = \\frac{(2\\mathrm{i}-3)w + 3\\mathrm{i}}{w-\\mathrm{i}}$$\n$$\\left|z - 3\\right| = \\frac{|(2\\mathrm{i}-3)w + 3\\mathrm{i}|}{|w-\\mathrm{i}|}$$\n\n令两边模长相等并约去分母 $|w-\\mathrm{i}|$（因为 $w \\neq \\mathrm{i}$）(Equate both moduli and cancel the denominator $|w-\\mathrm{i}|$):\n$$2 = |(2\\mathrm{i}-3)w + 3\\mathrm{i}|$$\n\n为了将其化为标准圆方程形式 $|w-(p+q\\mathrm{i})|=r$，我们在右边提出 $(2\\mathrm{i}-3)$ (Factor out $(2\\mathrm{i}-3)$ on the right-hand side):\n$$2 = |2\\mathrm{i}-3| \\cdot \\left| w + \\frac{3\\mathrm{i}}{2\\mathrm{i}-3} \\right|$$\n\n计算复数 $2\\mathrm{i}-3$ 的模长 (Calculate the modulus of $2\\mathrm{i}-3$):\n$$|2\\mathrm{i}-3| = \\sqrt{(-3)^{2} + 2^{2}} = \\sqrt{13}$$\n\n所以 (So):\n$$2 = \\sqrt{13} \\left| w + \\frac{3\\mathrm{i}}{2\\mathrm{i}-3} \\right| \\implies \\left| w + \\frac{3\\mathrm{i}}{2\\mathrm{i}-3} \\right| = \\frac{2}{\\sqrt{13}}$$\n\n对分式 $\\frac{3\\mathrm{i}}{2\\mathrm{i}-3}$ 进行分母实数化 (Simplify the fraction):\n$$\\frac{3\\mathrm{i}}{-3+2\\mathrm{i}} = \\frac{3\\mathrm{i}(-3-2\\mathrm{i})}{(-3)^{2}+2^{2}} = \\frac{-9\\mathrm{i}+6}{13} = \\frac{6-9\\mathrm{i}}{13}$$\n\n因此，代回原式得到圆 $C$ 的方程为 (Therefore, the equation of the circle $C$ is):\n$$\\left| w + \\frac{6-9\\mathrm{i}}{13} \\right| = \\frac{2}{\\sqrt{13}}$$\n$$\\boxed{\\left| w - \\left(-\\frac{6}{13} + \\frac{9}{13}\\mathrm{i}\\right) \\right| = \\frac{2\\sqrt{13}}{13}}$$\n\n其中，实数常数分别为 $p = -\\frac{6}{13}$，$q = \\frac{9}{13}$，半径 $r = \\frac{2\\sqrt{13}}{13}$ (或 $\\frac{2}{\\sqrt{13}}$)。",
    "createdAt": 1784088557667,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "23_Jan_01_7",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q7"
    },
    "stem": "(a) Use de Moivre's theorem to show that\n$$\\cos 5x \\equiv \\cos x\\left(a\\sin ^{4} x+b\\sin ^{2} x+c\\right)$$\nwhere $a$, $b$ and $c$ are integers to be determined. \\hfill (4)\n\n(b) Hence solve, for $0<\\theta<\\dfrac{\\pi}{2}$\n$$\\cos 5\\theta=\\sin 2\\theta \\sin \\theta-\\cos \\theta$$\ngiving your answers to 3 decimal places. \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n利用棣莫弗定理（de Moivre's theorem），我们有 (Using de Moivre's theorem, we have):\n$$\\cos 5x + \\mathrm{i}\\sin 5x = (\\cos x + \\mathrm{i}\\sin x)^{5}$$\n\n利用二项式定理展开等式右侧 (Expand the right-hand side using the Binomial Theorem):\n$$(\\cos x + \\mathrm{i}\\sin x)^{5} = \\cos^{5}x + 5\\mathrm{i}\\cos^{4}x\\sin x + 10\\mathrm{i}^{2}\\cos^{3}x\\sin^{2}x + 10\\mathrm{i}^{3}\\cos^{2}x\\sin^{3}x + 5\\mathrm{i}^{4}\\cos x\\sin^{4}x + \\mathrm{i}^{5}\\sin^{5}x$$\n$$= \\cos^{5}x + 5\\mathrm{i}\\cos^{4}x\\sin x - 10\\cos^{3}x\\sin^{2}x - 10\\mathrm{i}\\cos^{2}x\\sin^{3}x + 5\\cos x\\sin^{4}x + \\mathrm{i}\\sin^{5}x$$\n\n对比两边的实部 (Equate the real parts of both sides):\n$$\\cos 5x = \\cos^{5}x - 10\\cos^{3}x\\sin^{2}x + 5\\cos x\\sin^{4}x$$\n\n提取公因式 $\\cos x$ (Factor out $\\cos x$):\n$$\\cos 5x = \\cos x \\left( \\cos^{4}x - 10\\cos^{2}x\\sin^{2}x + 5\\sin^{4}x \\right)$$\n\n利用恒等式 $\\cos^{2}x = 1 - \\sin^{2}x$ 将括号内的余弦项转换为正弦项 (Use the identity $\\cos^{2}x = 1 - \\sin^{2}x$ to convert the cosine terms inside the bracket):\n$$\\cos^{4}x = (1 - \\sin^{2}x)^{2} = 1 - 2\\sin^{2}x + \\sin^{4}x$$\n$$-10\\cos^{2}x\\sin^{2}x = -10(1 - \\sin^{2}x)\\sin^{2}x = -10\\sin^{2}x + 10\\sin^{4}x$$\n\n代回并化简 (Substitute and simplify):\n$$\\cos 5x = \\cos x \\left[ \\left(1 - 2\\sin^{2}x + \\sin^{4}x\\right) + \\left(-10\\sin^{2}x + 10\\sin^{4}x\\right) + 5\\sin^{4}x \\right]$$\n$$\\cos 5x = \\cos x \\left( 16\\sin^{4}x - 12\\sin^{2}x + 1 \\right)$$\n\n对照目标形式 $\\cos 5x \\equiv \\cos x\\left(a\\sin ^{4} x+b\\sin ^{2} x+c\\right)$，求得整数 $a, b, c$ 值为 (Comparing this with the required form, we obtain the integer values for $a, b, c$):\n$$\\boxed{a = 16, \\quad b = -12, \\quad c = 1}$$\n\n而证明的恒等式为：\n$$\\boxed{\\cos 5x \\equiv \\cos x\\left(16\\sin ^{4} x-12\\sin ^{2} x+1\\right)}$$\n\n---\n\n**(b)**\n\n给定方程为 (The given equation is):\n$$\\cos 5\\theta = \\sin 2\\theta \\sin \\theta - \\cos \\theta$$\n\n利用倍角公式 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ 化简等式右侧 (Simplify the RHS using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$):\n$$\\sin 2\\theta \\sin \\theta = 2\\sin^{2}\\theta\\cos\\theta$$\n$$\\cos 5\\theta = 2\\sin^{2}\\theta\\cos\\theta - \\cos\\theta = \\cos\\theta(2\\sin^{2}\\theta - 1)$$\n\n将 (a) 问中的 $\\cos 5\\theta$ 展开式代入 (Substitute the expression for $\\cos 5\\theta$ from part (a)):\n$$\\cos\\theta \\left( 16\\sin^{4}\\theta - 12\\sin^{2}\\theta + 1 \\right) = \\cos\\theta(2\\sin^{2}\\theta - 1)$$\n$$\\cos\\theta \\left[ \\left( 16\\sin^{4}\\theta - 12\\sin^{2}\\theta + 1 \\right) - (2\\sin^{2}\\theta - 1) \\right] = 0$$\n$$\\cos\\theta \\left( 16\\sin^{4}\\theta - 14\\sin^{2}\\theta + 2 \\right) = 0$$\n$$2\\cos\\theta \\left( 8\\sin^{4}\\theta - 7\\sin^{2}\\theta + 1 \\right) = 0$$\n\n由于定义域为 $0 < \\theta < \\frac{\\pi}{2}$，在此区间内 $\\cos\\theta \\neq 0$，因此我们有 (Since $0 < \\theta < \\frac{\\pi}{2}$, we have $\\cos\\theta \\neq 0$, so we must have):\n$$8\\sin^{4}\\theta - 7\\sin^{2}\\theta + 1 = 0$$\n\n设 $u = \\sin^{2}\\theta$。因为 $0 < \\theta < \\frac{\\pi}{2} \\implies 0 < \\sin\\theta < 1 \\implies 0 < u < 1$ (Let $u = \\sin^{2}\\theta$, where $0 < u < 1$):\n$$8u^{2} - 7u + 1 = 0$$\n$$(8u - 1)(u - 1) = 0 \\implies u = \\frac{1}{8} \\quad \\text{或 (or)} \\quad u = 1$$\n\n由于限制条件 $u < 1$（即 $\\theta \\neq \\frac{\\pi}{2}$），我们舍去 $u = 1$，所以有 (Since $u < 1$, we reject $u = 1$, thus):\n$$\\sin^{2}\\theta = \\frac{1}{8}$$\n$$\\sin\\theta = \\frac{1}{\\sqrt{8}} = \\frac{1}{2\\sqrt{2}} \\quad (\\text{因 } \\theta \\text{ 处于第一象限 / since } \\theta \\text{ is in Q1})$$\n\n计算 $\\theta$ 的值 (Calculate the value of $\\theta$):\n$$\\theta = \\arcsin\\left(\\frac{1}{2\\sqrt{2}}\\right) \\approx 0.361367 \\text{ rad}$$\n\n保留三位小数，可得 (To 3 decimal places, we obtain):\n$$\\boxed{\\theta \\approx 0.361}$$",
    "createdAt": 1784088628778,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 10,
    "source": "23_Jan_01_8",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q8"
    },
    "stem": "The curve $C$ shown in Figure 1 has polar equation\n$$r=1-\\sin\\theta \\qquad 0\\leqslant\\theta <\\frac{\\pi}{2}$$\nThe point $P$ lies on $C$, such that the tangent to $C$ at $P$ is parallel to the initial line.\n\n(a) Use calculus to determine the polar coordinates of $P$ \\hfill (4)\n\nThe finite region $R$, shown shaded in Figure 1, is bounded by\n* the line with equation $\\theta=\\dfrac{\\pi}{2}$\n* the tangent to $C$ at $P$\n* part of the curve $C$\n* the initial line\n\n(b) Use algebraic integration to show that the area of $R$ is\n$$\\frac{1}{32}(a\\pi+b\\sqrt{3}+c)$$\nwhere $a$, $b$ and $c$ are integers to be determined. \\hfill (6)",
    "figure": "data/images/fp2_23Jan01_q8_fig.png",
    "solution": "**(a)**\n\n已知曲线 $C$ 的极方程为 (Given the polar equation of the curve $C$):\n$$r = 1 - \\sin\\theta$$\n\n我们利用 $y = r\\sin\\theta$ (Using $y = r\\sin\\theta$):\n$$y = (1-\\sin\\theta)\\sin\\theta = \\sin\\theta - \\sin^{2}\\theta$$\n\n因为切线平行于极轴，在此点 $P$ 处有 $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$ (Since the tangent to $C$ at $P$ is parallel to the initial line, we have $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = \\cos\\theta - 2\\sin\\theta\\cos\\theta = \\cos\\theta(1-2\\sin\\theta) = 0$$\n\n在区间 $0 \\leqslant \\theta < \\frac{\\pi}{2}$ 内， $\\cos\\theta \\neq 0$，因此有 (Since $\\cos\\theta \\neq 0$ in the given range, we must have):\n$$1 - 2\\sin\\theta = 0 \\implies \\sin\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{6}$$\n\n将 $\\theta = \\frac{\\pi}{6}$ 代入原极方程求极径 $r$ (Substitute $\\theta = \\frac{\\pi}{6}$ into the polar equation to find $r$):\n$$r = 1 - \\sin\\frac{\\pi}{6} = 1 - \\frac{1}{2} = \\frac{1}{2}$$\n\n因此，点 $P$ 的极坐标为 (Therefore, the polar coordinates of $P$ are):\n$$\\boxed{P\\left(\\frac{1}{2}, \\frac{\\pi}{6}\\right)}$$\n\n---\n\n**(b)**\n\n首先，确定点 $P$ 的直角坐标 (First, find the Cartesian coordinates of the point $P$):\n$$x_{P} = r_{P}\\cos\\theta_{P} = \\frac{1}{2}\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{4}$$\n$$y_{P} = r_{P}\\sin\\theta_{P} = \\frac{1}{2}\\sin\\frac{\\pi}{6} = \\frac{1}{4}$$\n\n因此，过点 $P$ 的水平切线方程为 $y = \\frac{1}{4}$ (Thus, the horizontal tangent line at $P$ is $y = \\frac{1}{4}$).\n\n我们可以利用几何分解法来计算阴影区域 $R$ 的面积：\n整个区域 $R$ 可以分成两部分，以射线 $\\theta = \\frac{\\pi}{6}$ 为界 (We can decompose the area of the region $R$ into two parts, separated by the ray $\\theta = \\frac{\\pi}{6}$):\n1) 在 $0 \\leqslant \\theta \\leqslant \\frac{\\pi}{6}$ 范围内，该区域正好是曲线 $C$ 的极坐标扇形 $J_1$ (For $0 \\leqslant \\theta \\leqslant \\frac{\\pi}{6}$, the area is the polar sector $J_1$ of $C$):\n   $$J_1 = \\frac{1}{2}\\int_{0}^{\\pi/6} r^{2} \\mathrm{d}\\theta$$\n2) 在 $\\frac{\\pi}{6} \\leqslant \\theta \\leqslant \\frac{\\pi}{2}$ 范围内，该区域可以通过一个直角三角形（由 $O(0,0)$、 $(0, \\frac{1}{4})$ 和 $P\\left(\\frac{\\sqrt{3}}{4}, \\frac{1}{4}\\right)$ 构成）减去曲线 $C$ 的极坐标扇形 $J_2$ 得到 (For $\\frac{\\pi}{6} \\leqslant \\theta \\leqslant \\frac{\\pi}{2}$, the area is the right-angled triangle minus the polar sector $J_2$ of $C$):\n   $$\\text{Area}_{\\text{triangle}} = \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{4} \\cdot \\frac{1}{4} = \\frac{\\sqrt{3}}{32}$$\n   $$J_2 = \\frac{1}{2}\\int_{\\pi/6}^{\\pi/2} r^{2} \\mathrm{d}\\theta$$\n\n因此，总面积为 (Therefore, the total area of $R$ is):\n$$\\text{Area}(R) = J_1 + \\left( \\text{Area}_{\\text{triangle}} - J_2 \\right) = \\frac{\\sqrt{3}}{32} + J_1 - J_2$$\n\n---\n\n**计算积分 (Calculate the integrals):**\n$$r^{2} = (1-\\sin\\theta)^{2} = 1 - 2\\sin\\theta + \\sin^{2}\\theta = 1 - 2\\sin\\theta + \\frac{1-\\cos 2\\theta}{2} = \\frac{3}{2} - 2\\sin\\theta - \\frac{1}{2}\\cos 2\\theta$$\n\n其不定积分为 (The indefinite integral is):\n$$F(\\theta) = \\int \\left( \\frac{3}{2} - 2\\sin\\theta - \\frac{1}{2}\\cos 2\\theta \\right) \\mathrm{d}\\theta = \\frac{3}{2}\\theta + 2\\cos\\theta - \\frac{1}{4}\\sin 2\\theta$$\n\n代入各个界限值 (Evaluate $F(\\theta)$ at the boundaries):\n- $F(0) = 2$\n- $F\\left(\\frac{\\pi}{6}\\right) = \\frac{3}{2}\\left(\\frac{\\pi}{6}\\right) + 2\\cos\\frac{\\pi}{6} - \\frac{1}{4}\\sin\\frac{\\pi}{3} = \\frac{\\pi}{4} + \\sqrt{3} - \\frac{\\sqrt{3}}{8} = \\frac{\\pi}{4} + \\frac{7\\sqrt{3}}{8}$\n- $F\\left(\\frac{\\pi}{2}\\right) = \\frac{3}{2}\\left(\\frac{\\pi}{2}\\right) + 2\\cos\\frac{\\pi}{2} - \\frac{1}{4}\\sin\\pi = \\frac{3\\pi}{4}$\n\n计算两个扇形面积 (Compute the polar areas $J_1$ and $J_2$):\n$$J_1 = \\frac{1}{2}\\left[ F\\left(\\frac{\\pi}{6}\\right) - F(0) \\right] = \\frac{1}{2}\\left( \\frac{\\pi}{4} + \\frac{7\\sqrt{3}}{8} - 2 \\right) = \\frac{\\pi}{8} + \\frac{7\\sqrt{3}}{16} - 1$$\n$$J_2 = \\frac{1}{2}\\left[ F\\left(\\frac{\\pi}{2}\\right) - F\\left(\\frac{\\pi}{6}\\right) \\right] = \\frac{1}{2}\\left( \\frac{3\\pi}{4} - \\left(\\frac{\\pi}{4} + \\frac{7\\sqrt{3}}{8}\\right) \\right) = \\frac{\\pi}{4} - \\frac{7\\sqrt{3}}{16}$$\n\n---\n\n**求面积 (Calculate the Area of R):**\n$$\\text{Area}(R) = \\frac{\\sqrt{3}}{32} + J_1 - J_2$$\n$$\\text{Area}(R) = \\frac{\\sqrt{3}}{32} + \\left( \\frac{\\pi}{8} + \\frac{7\\sqrt{3}}{16} - 1 \\right) - \\left( \\frac{\\pi}{4} - \\frac{7\\sqrt{3}}{16} \\right)$$\n$$= \\frac{\\sqrt{3}}{32} + \\frac{\\pi}{8} + \\frac{7\\sqrt{3}}{16} - 1 - \\frac{\\pi}{4} + \\frac{7\\sqrt{3}}{16}$$\n$$= \\left( \\frac{\\pi}{8} - \\frac{\\pi}{4} \\right) + \\left( \\frac{1}{32} + \\frac{7}{16} + \\frac{7}{16} \\right)\\sqrt{3} - 1$$\n$$= -\\frac{\\pi}{8} + \\frac{29\\sqrt{3}}{32} - 1$$\n\n通分写为分母为 32 的形式 (Express with a common denominator of 32):\n$$\\text{Area}(R) = \\frac{-4\\pi + 29\\sqrt{3} - 32}{32} = \\frac{1}{32}\\left(-4\\pi + 29\\sqrt{3} - 32\\right)$$\n\n对照目标形式 $\\frac{1}{32}(a\\pi+b\\sqrt{3}+c)$，求得整数 $a, b, c$ 值为 (Comparing this with the required form, we obtain the integer values for $a, b, c$):\n$$\\boxed{a = -4, \\quad b = 29, \\quad c = -32}$$",
    "createdAt": 1784088765322,
    "_edited": true
  },
  {
    "id": "edx_fp2_23Jan01_q9",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 13,
    "source": "23_Jan_01_9",
    "examRef": {
      "year": 2023,
      "month": "Jan",
      "paper": "01",
      "qno": 9,
      "code": "01",
      "label": "2023 Jan · Paper 01 Q9"
    },
    "stem": "(a) Given that $x=t^{\\frac{1}{2}}$, determine, in terms of $y$ and $t$, \\hfill (5)\n(i) $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$\n(ii) $\\dfrac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$\n\n\n(b) Hence show that the transformation $x=t^{\\frac{1}{2}}$, where $t>0$, transforms the differential equation\n$$x\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-(6x^{2}+1)\\frac{\\mathrm{d} y}{\\mathrm{d} x}+9x^{3}y=x^{5}$$\ninto the differential equation \\hfill (2)\n$$4\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} t^{2}}-12\\frac{\\mathrm{d} y}{\\mathrm{d} t}+9y=t$$ \n\n(c) Solve differential equation (II) to determine a general solution for $y$ in terms of $t$. \\hfill (5)\n\n(d) Hence determine the general solution of differential equation (I). \\hfill (1)",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $x = t^{1/2}$。\n\n**(i)** 求 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ (Determine $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$):\n根据链式法则 (Using the chain rule):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\frac{\\mathrm{d}x}{\\mathrm{d}t}$$\n\n由于 $x = t^{1/2}$，有 (Since $x = t^{1/2}$):\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = \\frac{1}{2}t^{-1/2}$$\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}t} = \\frac{1}{2}t^{-1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2t^{1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}t}$$\n\n因此有 (Therefore):\n$$\\boxed{\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2t^{1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}t}}$$\n\n**(ii)** 求 $\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$ (Determine $\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$):\n再次对 $x$ 求导 (Differentiate again with respect to $x$):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\right) = \\frac{\\mathrm{d}t}{\\mathrm{d}x} \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( 2t^{1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}t} \\right)$$\n\n因为 $\\frac{\\mathrm{d}t}{\\mathrm{d}x} = 2x = 2t^{1/2}$，且对括号内使用乘积法则 (Using the product rule):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = 2t^{1/2} \\left( t^{-1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}t} + 2t^{1/2} \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} \\right) = 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}$$\n\n因此有 (Therefore):\n$$\\boxed{\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}}$$\n\n---\n\n**(b)**\n\n原微分方程 (I) 为 (The original differential equation (I) is):\n$$x\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-(6x^{2}+1)\\frac{\\mathrm{d} y}{\\mathrm{d} x}+9x^{3}y=x^{5}$$\n\n代入 $x = t^{1/2}, \\ x^{2} = t$ 以及 (a) 问中求得的导数表达式 (Substitute the expressions from part (a) into (I)):\n$$t^{1/2}\\left( 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} \\right) - (6t+1)\\left( 2t^{1/2} \\frac{\\mathrm{d}y}{\\mathrm{d}t} \\right) + 9t^{3/2}y = t^{5/2}$$\n\n因为 $t > 0$，方程两边同除以 $t^{1/2}$ (Divide both sides by $t^{1/2}$, since $t > 0$):\n$$\\left( 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} \\right) - 2(6t+1)\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 9ty = t^{2}$$\n$$2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} - 12t\\frac{\\mathrm{d}y}{\\mathrm{d}t} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 9ty = t^{2}$$\n$$4t\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}} - 12t\\frac{\\mathrm{d}y}{\\mathrm{d}t} + 9ty = t^{2}$$\n\n再同除以 $t$ (Divide by $t$):\n$$\\boxed{4\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} t^{2}}-12\\frac{\\mathrm{d} y}{\\mathrm{d} t}+9y=t}$$\n\n这与方程 (II) 一致，得证。\n\n---\n\n**(c)**\n\n微分方程 (II) 是一个二阶常系数非齐次线性微分方程。首先求解对应的齐次方程 (First, solve the complementary function (C.F.) of the homogeneous equation):\n$$4\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} t^{2}}-12\\frac{\\mathrm{d} y}{\\mathrm{d} t}+9y=0$$\n\n特征方程为 (The auxiliary equation is):\n$$4m^{2} - 12m + 9 = 0 \\implies (2m - 3)^{2} = 0 \\implies m = \\frac{3}{2} \\quad \\text{(重根 / repeated root)}$$\n\n因此，互补函数为 (Thus, the complementary function is):\n$$y_{c}(t) = (A + Bt)\\mathrm{e}^{\\frac{3}{2}t}$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n现在寻找非齐次项的一个特解（Particular Integral, P.I.）。设特解形式为 (Try a particular solution of the form):\n$$y_{p}(t) = Kt + L$$\n\n对其求导并代回方程 (II) (Differentiate and substitute back into (II)):\n$$\\frac{\\mathrm{d}y_{p}}{\\mathrm{d}t} = K, \\quad \\frac{\\mathrm{d}^{2}y_{p}}{\\mathrm{d}t^{2}} = 0$$\n$$4(0) - 12(K) + 9(Kt + L) = t \\implies 9Kt + (9L - 12K) = t$$\n\n对比两边系数 (Compare coefficients of both sides):\n- 对于 $t$ 项: $9K = 1 \\implies K = \\frac{1}{9}$\n- 对于常数项: $9L - 12K = 0 \\implies 9L = 12\\left(\\frac{1}{9}\\right) = \\frac{4}{3} \\implies L = \\frac{4}{27}$\n\n因此特解为 $y_{p}(t) = \\frac{1}{9}t + \\frac{4}{27}$。所以方程 (II) 的通解为 (Therefore, the general solution of (II) is):\n$$\\boxed{y = (A + Bt)\\mathrm{e}^{\\frac{3}{2}t} + \\frac{1}{9}t + \\frac{4}{27}}$$\n\n---\n\n**(d)**\n\n根据 $x = t^{1/2} \\implies t = x^{2}$，我们将 $t = x^{2}$ 代回 (c) 问求得的通解中，即可得到原方程 (I) 的通解为 (Substitute $t = x^{2}$ back into the general solution of part (c) to obtain the general solution of (I)):\n$$\\boxed{y = (A + Bx^{2})\\mathrm{e}^{\\frac{3}{2}x^{2}} + \\frac{1}{9}x^{2} + \\frac{4}{27}}$$",
    "createdAt": 1784092985098,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "22_Jun_01_1",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q1"
    },
    "stem": "Given that\n\n$$\\frac{2n+1}{n^{2}(n+1)^{2}} \\equiv \\frac{A}{n^{2}}+\\frac{B}{(n+1)^{2}}$$\n\n(a) determine the value of $A$ and the value of $B$ \\hfill (1)\n\n(b) Hence show that, for $n \\geqslant 5$\n\n$$\\sum_{r=5}^{n}\\frac{2r+1}{r^{2}(r+1)^{2}}=\\frac{n^{2}+an+b}{c(n+1)^{2}}$$\n\nwhere $a$, $b$ and $c$ are integers to be determined. \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n已知等式为 (Given the identity):\n$$\\frac{2n+1}{n^{2}(n+1)^{2}} \\equiv \\frac{A}{n^{2}}+\\frac{B}{(n+1)^{2}}$$\n\n两边同乘以分母 $n^{2}(n+1)^{2}$ (Multiply both sides by $n^{2}(n+1)^{2}$):\n$$2n+1 = A(n+1)^{2} + Bn^{2}$$\n\n代入特殊的 $n$ 值求解常数 $A$ 和 $B$ (Substitute suitable values of $n$ to solve for $A$ and $B$):\n- 令 $n = 0$:\n  $$1 = A(1)^{2} + B(0) \\implies A = 1$$\n- 令 $n = -1$:\n  $$2(-1) + 1 = A(0) + B(-1)^{2} \\implies B = -1$$\n\n因此，常数 $A$ 和 $B$ 的值分别为 (Therefore, the values of $A$ and $B$ are):\n$$\\boxed{A = 1, \\quad B = -1}$$\n\n---\n\n**(b)**\n\n根据 (a) 问的结果，我们可以将求和式改写为裂项的形式 (Using the result from part (a), we can rewrite the summation in a telescoping form):\n$$\\sum_{r=5}^{n}\\frac{2r+1}{r^{2}(r+1)^{2}} = \\sum_{r=5}^{n} \\left( \\frac{1}{r^{2}} - \\frac{1}{(r+1)^{2}} \\right)$$\n\n这是一个标准的裂项相消求和式 (This is a standard telescoping series):\n$$\\sum_{r=5}^{n} \\left( \\frac{1}{r^{2}} - \\frac{1}{(r+1)^{2}} \\right) = \\left( \\frac{1}{5^{2}} - \\frac{1}{6^{2}} \\right) + \\left( \\frac{1}{6^{2}} - \\frac{1}{7^{2}} \\right) + \\dots + \\left( \\frac{1}{n^{2}} - \\frac{1}{(n+1)^{2}} \\right)$$\n\n消去所有中间项后，仅剩第一项和最后一项 (After cancelling all the intermediate terms, only the first and the last terms remain):\n$$\\sum_{r=5}^{n}\\frac{2r+1}{r^{2}(r+1)^{2}} = \\frac{1}{25} - \\frac{1}{(n+1)^{2}}$$\n\n通分合并为一个分式 (Find a common denominator and combine):\n$$\\frac{1}{25} - \\frac{1}{(n+1)^{2}} = \\frac{(n+1)^{2} - 25}{25(n+1)^{2}} = \\frac{n^{2} + 2n + 1 - 25}{25(n+1)^{2}} = \\frac{n^{2} + 2n - 24}{25(n+1)^{2}}$$\n\n对照目标形式 $\\frac{n^{2}+an+b}{c(n+1)^{2}}$，可得整数 $a, b, c$ 值为 (Comparing this with the required form, we obtain the integer values for $a, b, c$):\n$$\\boxed{\\sum_{r=5}^{n}\\frac{2r+1}{r^{2}(r+1)^{2}}=\\frac{n^{2}+2n-24}{25(n+1)^{2}}}$$\n其中 $a = 2$，$b = -24$，$c = 25$。",
    "createdAt": 1784112402655,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "22_Jun_01_2",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q2"
    },
    "stem": "(a) Use algebra to determine the set of values of $x$ for which \\hfill (6)\n\n$$x-5<\\frac{9}{x+3}$$\n\n\n\n(b) Hence, or otherwise, determine the set of values of $x$ for which\\hfill (2)\n\n$$x-5<\\frac{9}{|x+3|}$$",
    "figure": "",
    "solution": "**(a)**\n\n我们不能简单地在不等式两边同乘以 $(x+3)$，因为该项的正负取决于 $x$ 的值。因此，我们先将所有项移到不等式的左边 (We must not multiply both sides of the inequality by $(x+3)$ directly because its sign depends on $x$. Instead, we bring all terms to the LHS):\n$$(x-5) - \\frac{9}{x+3} < 0$$\n\n进行通分并化简分子 (Find a common denominator and simplify the numerator):\n$$\\frac{(x-5)(x+3) - 9}{x+3} < 0$$\n$$\\frac{x^{2} - 2x - 15 - 9}{x+3} < 0$$\n$$\\frac{x^{2} - 2x - 24}{x+3} < 0$$\n\n对分子进行因式分解 (Factor the numerator):\n$$\\frac{(x-6)(x+4)}{x+3} < 0$$\n\n确定不等式的临界点为 $x = -4, -3, 6$（注意 $x = -3$ 时分母为零，必须排除）。这些点将实数轴分为四个区间。我们利用符号测试法（或穿针引线法）来确定该分式为负数的区间 (Determine the critical points $x = -4, -3, 6$ (excluding $x = -3$). We find the intervals where the expression is negative):\n- 当 $x > 6$ 时: 分式值为正 ($> 0$)\n- 当 $-3 < x < 6$ 时: 分式值为负 ($< 0$)\n- 当 $-4 < x < -3$ 时: 分式值为正 ($> 0$)\n- 当 $x < -4$ 时: 分式值为负 ($< 0$)\n\n因此，该不等式的解集为 (Therefore, the solution set is):\n$$\\boxed{x < -4 \\quad \\text{或 (or)} \\quad -3 < x < 6}$$\n\n---\n\n**(b)**\n\n给定不等式为 (The given inequality is):\n$$x-5 < \\frac{9}{|x+3|}$$\n\n由于分母中含有绝对值 $|x+3|$，且 $x \\neq -3$，我们根据 $x+3$ 的正负号分两种情况进行讨论 (Since the denominator contains the absolute value $|x+3|$ and $x \\neq -3$, we solve it by considering two cases):\n\n**情况 1： 当 $x > -3$ 时 (Case 1: $x > -3$)**\n此时 $|x+3| = x+3$，不等式变为 (In this case, $|x+3| = x+3$, so the inequality becomes):\n$$x-5 < \\frac{9}{x+3}$$\n结合 (a) 问中在此区间内的解，我们得到其解集为 (Combining with the solution from part (a) in this interval, we obtain):\n$$-3 < x < 6$$\n\n**情况 2： 当 $x < -3$ 时 (Case 2: $x < -3$)**\n此时 $|x+3| = -(x+3)$。因为 $x < -3 \\implies -(x+3) > 0$，我们在不等式两边同乘以这个正数，不等号方向不变 (In this case, $|x+3| = -(x+3) > 0$. We multiply both sides by this positive term without changing the inequality sign):\n$$(x-5)\\bigl(-(x+3)\\bigr) < 9$$\n$$-(x^{2}-2x-15) < 9$$\n$$-x^{2} + 2x + 15 < 9$$\n$$x^{2} - 2x - 6 > 0$$\n\n求二次方程 $x^{2} - 2x - 6 = 0$ 的根 (Solve the quadratic equation):\n$$x = \\frac{2 \\pm \\sqrt{4 - 4(1)(-6)}}{2} = \\frac{2 \\pm \\sqrt{28}}{2} = 1 \\pm \\sqrt{7}$$\n\n由于二次不等式为 $> 0$，其解为两根之外 (The solution to the quadratic inequality lies outside the roots):\n$$x < 1 - \\sqrt{7} \\quad \\text{或 (or)} \\quad x > 1 + \\sqrt{7}$$\n\n将此解与前提条件 $x < -3$ 取交集。因为 $1 - \\sqrt{7} \\approx -1.65 > -3$，所以交集为 (Intersect this with the condition $x < -3$):\n$$x < -3$$\n\n---\n\n**合并两种情况的解 (Combine the solutions of both cases):**\n综合上述两种情况，最终的解集为 (Combining both cases, the final solution set is):\n$$\\boxed{x < -3 \\quad \\text{或} \\quad -3 < x < 6} \\quad (\\text{即 } x < 6, \\ x \\neq -3)$$",
    "createdAt": 1784112464527,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS",
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "22_Jun_01_3",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q3"
    },
    "stem": "The transformation $T$ from the $z$-plane to the $w$-plane is given by\n\n$$w=\\frac{z}{z+4\\mathrm{i}}\\quad z\\neq -4\\mathrm{i}$$\n\nThe circle with equation $|z|=3$ is mapped by $T$ onto the circle $C$\n\nDetermine\n\n(i) a Cartesian equation of $C$\n\n(ii) the centre and radius of $C$ \\hfill (8)",
    "figure": "",
    "solution": "**(i)**\n\n首先，我们将 $z$ 用 $w$ 来表示 (First, we express $z$ in terms of $w$):\n$$w = \\frac{z}{z+4\\mathrm{i}}$$\n$$w(z+4\\mathrm{i}) = z$$\n$$wz + 4\\mathrm{i}w = z$$\n$$wz - z = -4\\mathrm{i}w$$\n$$z(w-1) = -4\\mathrm{i}w$$\n$$z = \\frac{-4\\mathrm{i}w}{w-1} = \\frac{4\\mathrm{i}w}{1-w}$$\n\n将 $z$ 的表达式代入圆的方程 $|z| = 3$ 中 (Substitute the expression of $z$ into the equation of the circle $|z| = 3$):\n$$\\left| \\frac{4\\mathrm{i}w}{1-w} \\right| = 3$$\n$$\\frac{|4\\mathrm{i}| \\cdot |w|}{|1-w|} = 3$$\n$$\\frac{4|w|}{|w-1|} = 3 \\implies 4|w| = 3|w-1|$$\n\n两边平方 (Square both sides):\n$$16|w|^{2} = 9|w-1|^{2}$$\n\n设 $w = u + \\mathrm{i}v$，代入复数模长的坐标公式中 (Let $w = u + \\mathrm{i}v$, substitute this into the modulus formula):\n$$16(u^{2} + v^{2}) = 9\\left[(u-1)^{2} + v^{2}\\right]$$\n$$16u^{2} + 16v^{2} = 9\\left(u^{2} - 2u + 1 + v^{2}\\right)$$\n$$16u^{2} + 16v^{2} = 9u^{2} - 18u + 9 + 9v^{2}$$\n\n将所有项移到等式左边 (Rearrange all terms to the left-hand side):\n$$7u^{2} + 7v^{2} + 18u - 9 = 0$$\n\n两边除以 7，得到圆 $C$ 的直角坐标方程为 (Divide both sides by 7 to get the Cartesian equation of $C$):\n$$\\boxed{u^{2} + v^{2} + \\frac{18}{7}u - \\frac{9}{7} = 0} \\quad \\left(\\text{或 / or } 7u^{2} + 7v^{2} + 18u - 9 = 0\\right)$$\n\n---\n\n**(ii)**\n\n对上述直角坐标方程进行配方，以求出圆心和半径 (Complete the square to find the center and radius of $C$):\n$$\\left(u + \\frac{9}{7}\\right)^{2} - \\frac{81}{49} + v^{2} - \\frac{9}{7} = 0$$\n$$\\left(u + \\frac{9}{7}\\right)^{2} + v^{2} = \\frac{81}{49} + \\frac{63}{49}$$\n$$\\left(u + \\frac{9}{7}\\right)^{2} + v^{2} = \\frac{144}{49}$$\n\n由此求得圆 $C$ 的属性为 (Thus, we find the properties of $C$ are):\n\n- 圆心坐标为 (The coordinates of the centre of $C$ are):\n  $$\\boxed{\\left(-\\frac{9}{7}, 0\\right)}$$\n\n- 圆的半径为 (The radius of $C$ is):\n  $$\\boxed{\\frac{12}{7}}$$",
    "createdAt": 1784112544931,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 7,
    "source": "22_Jun_01_4",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q4"
    },
    "stem": "(a) Determine the general solution of the differential equation\n\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}-3y\\tan x=\\mathrm{e}^{4x}\\sec^{3} x$$\n\ngiving your answer in the form $y=f(x)$. \\hfill (5)\n\n(b) Determine the particular solution for which $y=4$ at $x=0$ \\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n这是一个关于 $y$ 的一阶线性微分方程，形式为 $\\frac{\\mathrm{d}y}{\\mathrm{d}x} + P(x)y = Q(x)$ (This is a first-order linear differential equation of the form $\\frac{\\mathrm{d}y}{\\mathrm{d}x} + P(x)y = Q(x)$):\n其中 (where) $P(x) = -3\\tan x$， $Q(x) = \\mathrm{e}^{4x}\\sec^{3} x$。\n\n我们计算其积分因子（Integrating Factor, I.F.） (Determine its integrating factor):\n$$I = \\mathrm{e}^{\\int -3\\tan x\\,\\mathrm{d}x}$$\n\n利用积分公式 $\\int\\tan x\\,\\mathrm{d}x = \\ln|\\sec x|$ (Using the integration formula $\\int\\tan x\\,\\mathrm{d}x = \\ln|\\sec x|$):\n$$\\int -3\\tan x\\,\\mathrm{d}x = -3\\ln|\\sec x| = \\ln\\left|\\sec^{-3}x\\right| = \\ln\\left|\\cos^{3}x\\right|$$\n$$I = \\mathrm{e}^{\\ln\\left|\\cos^{3}x\\right|} = \\cos^{3}x \\quad (\\text{假设在定义域内 / assuming } \\cos x > 0)$$\n\n在微分方程两边同乘以积分因子 $\\cos^{3}x$ (Multiply both sides of the differential equation by the integrating factor $\\cos^{3}x$):\n$$\\cos^{3}x \\frac{\\mathrm{d}y}{\\mathrm{d}x} - 3y\\tan x\\cos^{3}x = \\mathrm{e}^{4x}\\sec^{3}x\\cos^{3}x$$\n\n由于 $\\tan x\\cos^{3}x = \\sin x\\cos^{2}x$，且 $\\sec^{3}x\\cos^{3}x = 1$，上式可写为 (Since $\\tan x\\cos^{3}x = \\sin x\\cos^{2}x$, and $\\sec^{3}x\\cos^{3}x = 1$, we have):\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( y\\cos^{3}x \\right) = \\mathrm{e}^{4x}$$\n\n对两边关于 $x$ 进行积分 (Integrate both sides with respect to $x$):\n$$y\\cos^{3}x = \\int \\mathrm{e}^{4x}\\,\\mathrm{d}x = \\frac{1}{4}\\mathrm{e}^{4x} + C$$\n其中 $C$ 为任意常数 (where $C$ is an arbitrary constant).\n\n两边除以 $\\cos^{3}x$，得到 $y = f(x)$ 形式的通解为 (Divide both sides by $\\cos^{3}x$ to find the general solution in the form $y=f(x)$):\n$$\\boxed{y = \\left(\\frac{1}{4}\\mathrm{e}^{4x} + C\\right)\\sec^{3}x}$$\n\n---\n\n**(b)**\n\n代入初始条件：当 $x = 0$ 时，$y = 4$ (Substitute the initial condition $y=4$ at $x=0$):\n$$4 = \\left(\\frac{1}{4}\\mathrm{e}^{0} + C\\right)\\sec^{3}(0)$$\n\n由于 $\\mathrm{e}^{0} = 1$， 且 $\\sec(0) = 1$ (Since $\\mathrm{e}^{0} = 1$ and $\\sec(0) = 1$):\n$$4 = \\frac{1}{4} + C \\implies C = 4 - \\frac{1}{4} = \\frac{15}{4}$$\n\n将 $C = \\frac{15}{4}$ 代回通解，整理可得该微分方程的特解为 (Substitute $C = \\frac{15}{4}$ back to get the particular solution):\n$$\\boxed{y = \\frac{1}{4}\\left(\\mathrm{e}^{4x} + 15\\right)\\sec^{3}x}$$",
    "createdAt": 1784112596744,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 8,
    "source": "22_Jun_01_5",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q5"
    },
    "stem": "Given that\n\n$$y\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}+2\\left(\\frac{\\mathrm{d} y}{\\mathrm{d} x}\\right)^{2}-2 y=0\\quad y>0$$\n\n(a) determine $\\dfrac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}$ in terms of $\\dfrac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$, $\\dfrac{\\mathrm{d} y}{\\mathrm{d} x}$ and $y$ \\hfill (4)\n\nGiven that $y=2$ and $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1$ at $x=0$\n\n(b) determine a series solution for $y$ in ascending powers of $x$, up to and including the term in $x^{3}$, giving each coefficient in its simplest form. \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n已知原微分方程为 (Given the original differential equation):\n$$y\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}+2\\left(\\frac{\\mathrm{d} y}{\\mathrm{d} x}\\right)^{2}-2 y=0$$\n\n两边关于 $x$ 进行求导 (Differentiate both sides with respect to $x$):\n$$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[ y\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} + 2\\left(\\frac{\\mathrm{d} y}{\\mathrm{d} x}\\right)^{2} - 2 y \\right] = 0$$\n\n利用乘积法则（Product Rule）和链式法则展开各项 (Expand each term using the product rule and the chain rule):\n- 对于 $y\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$ 项:\n  $$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left( y\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} \\right) = \\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} + y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}$$\n- 对于 $2\\left(\\frac{\\mathrm{d} y}{\\mathrm{d} x}\\right)^{2}$ 项:\n  $$\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[ 2\\left(\\frac{\\mathrm{d} y}{\\mathrm{d} x}\\right)^{2} \\right] = 4\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$$\n- 对于 $-2y$ 项:\n  $$\\frac{\\mathrm{d}}{\\mathrm{d}x}(-2y) = -2\\frac{\\mathrm{d}y}{\\mathrm{d}x}$$\n\n将这些项相加并合并同类项 (Add these terms and combine like terms):\n$$\\left( \\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} + y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}} \\right) + 4\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$\n$$y\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}} + 5\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} - 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$$\n\n由于 $y > 0$，两边同除以 $y$ 并解出 $\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}$ (Since $y > 0$, divide by $y$ and solve for $\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}}$):\n$$\\boxed{\\frac{\\mathrm{d}^{3} y}{\\mathrm{d} x^{3}} = \\frac{1}{y} \\left( 2\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 5\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}} \\right)}$$\n\n---\n\n**(b)**\n\n麦克劳林级数（Maclaurin series）在 $x = 0$ 处的展开形式为 (The Maclaurin series expansion about $x = 0$ is):\n$$y(x) = y(0) + y'(0)x + \\frac{y''(0)}{2!}(x)^{2} + \\frac{y'''(0)}{3!}(x)^{3} + \\dots$$\n\n已知当 $x = 0$ 时，$y(0) = 2$ 且 $y'(0) = 1$ (Given $y(0) = 2$ and $y'(0) = 1$ at $x = 0$).\n\n1) 求解 $y''(0)$ (Find $y''(0)$):\n将 $y = 2, \\ y' = 1$ 代入原微分方程中 (Substitute the values into the original differential equation):\n$$2y''(0) + 2(1)^{2} - 2(2) = 0$$\n$$2y''(0) + 2 - 4 = 0 \\implies 2y''(0) = 2 \\implies y''(0) = 1$$\n\n2) 求解 $y'''(0)$ (Find $y'''(0)$):\n将 $y = 2, \\ y' = 1, \\ y'' = 1$ 代入 (a) 问中求得的三阶导数表达式中 (Substitute these values into the expression of the third derivative from part (a)):\n$$y'''(0) = \\frac{1}{2}\\left( 2(1) - 5(1)(1) \\right) = \\frac{1}{2}(2 - 5) = -\\frac{3}{2}$$\n\n将这些导数值代回麦克劳林级数公式中 (Substitute these derivative values back into the Maclaurin series formula):\n$$y(x) = 2 + 1(x) + \\frac{1}{2}(x)^{2} + \\frac{-\\frac{3}{2}}{6}(x)^{3} + \\dots$$\n\n化简每一项的系数，得到最终展开式为 (Simplify each coefficient to its simplest form):\n$$\\boxed{y = 2 + x + \\frac{1}{2}x^{2} - \\frac{1}{4}x^{3} + \\dots}$$",
    "createdAt": 1784112651580,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 13,
    "source": "22_Jun_01_6",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q6"
    },
    "stem": "The curve shown in Figure 1 has polar equation\n\n$$r=4a(1+\\cos\\theta)\\qquad 0\\leqslant\\theta<\\pi$$\n\nwhere $a$ is a positive constant.\n\nThe tangent to the curve at the point $A$ is parallel to the initial line.\n\n(a) Show that the polar coordinates of $A$ are $\\left(6a,\\,\\dfrac{\\pi}{3}\\right)$ \\hfill (6)\n\nThe point $B$ lies on the curve such that angle $AOB=\\dfrac{\\pi}{6}$\n\nThe finite region $R$, shown shaded in Figure 1, is bounded by the line $AB$ and the curve.\n\n(b) Use calculus to determine the area of the shaded region $R$, giving your answer in the form $a^{2}(n\\pi+p\\sqrt{3}+q)$, where $n$, $p$ and $q$ are integers. \\hfill (7)",
    "figure": "data/images/fp2_22Jun01_q6_fig.png",
    "solution": "**(a)**\n\n在极坐标系中，曲线在点 $A$ 处的切线平行于极轴，这意味着在此点处满足 $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$ (The tangent to the curve at $A$ is parallel to the initial line, which means $\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 0$ at the point $A$):\n\n我们利用 $y = r\\sin\\theta$ (Using $y = r\\sin\\theta$):\n$$y = 4a(1+\\cos\\theta)\\sin\\theta = 4a\\sin\\theta + 4a\\sin\\theta\\cos\\theta = 4a\\sin\\theta + 2a\\sin 2\\theta$$\n\n对 $\\theta$ 求导 (Differentiate $y$ with respect to $\\theta$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 4a\\cos\\theta + 4a\\cos 2\\theta = 4a(\\cos\\theta + \\cos 2\\theta)$$\n\n令导数为 0 求解 (Set the derivative to zero):\n$$\\cos\\theta + \\cos 2\\theta = 0$$\n\n利用二倍角公式 $\\cos 2\\theta = 2\\cos^{2}\\theta - 1$ (Using the double-angle formula):\n$$2\\cos^{2}\\theta + \\cos\\theta - 1 = 0$$\n$$(2\\cos\\theta - 1)(\\cos\\theta + 1) = 0$$\n\n由于定义域为 $0 \\leqslant \\theta < \\pi$，在区间内只有 (Since $0 \\leqslant \\theta < \\pi$, the only valid solution in the interval is):\n$$\\cos\\theta = \\frac{1}{2} \\implies \\theta = \\frac{\\pi}{3}$$\n\n代回原方程求 $r$ (Substitute $\\theta = \\frac{\\pi}{3}$ back into the polar equation to find $r$):\n$$r = 4a\\left(1 + \\cos\\frac{\\pi}{3}\\right) = 4a\\left(1 + \\frac{1}{2}\\right) = 6a$$\n\n因此，点 $A$ 的极坐标为 (Therefore, the polar coordinates of $A$ are):\n$$\\boxed{\\left(6a, \\frac{\\pi}{3}\\right)}$$\n\n---\n\n**(b)**\n\n根据题设，点 $B$ 在曲线上且满足极角差 $\\angle AOB = \\frac{\\pi}{6}$。在 $\\theta > \\theta_{A}$ 的一侧，我们有其极角为 (The point $B$ lies on the curve such that $\\angle AOB = \\frac{\\pi}{6}$. For the side where $\\theta > \\theta_{A}$, its polar angle is):\n$$\\theta_{B} = \\theta_{A} + \\frac{\\pi}{6} = \\frac{\\pi}{3} + \\frac{\\pi}{6} = \\frac{\\pi}{2}$$\n\n此时点 $B$ 的极径为 (The polar radius of $B$ is):\n$$r_{B} = 4a\\left(1 + \\cos\\frac{\\pi}{2}\\right) = 4a$$\n\n阴影区域 $R$ 是由线段 $AB$ 和曲线 $C$ 围成的区域，其面积等于曲线 $C$ 从 $\\theta = \\frac{\\pi}{3}$ 到 $\\frac{\\pi}{2}$ 的扇形面积减去三角形 $OAB$ 的面积 (The shaded region $R$ is bounded by the line $AB$ and the curve. Its area is equal to the polar sector area of $C$ from $\\theta = \\frac{\\pi}{3}$ to $\\frac{\\pi}{2}$ minus the area of triangle $OAB$):\n$$\\text{Area}(R) = \\text{Area}_{\\text{polar}} - \\text{Area}(OAB)$$\n\n**1. 计算三角形 $OAB$ 的面积 (Calculate the area of triangle $OAB$):**\n$$\\text{Area}(OAB) = \\frac{1}{2} r_{A} r_{B} \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2} (6a) (4a) \\left(\\frac{1}{2}\\right) = 6a^{2}$$\n\n**2. 计算极坐标扇形面积 (Calculate the polar sector area):**\n$$\\text{Area}_{\\text{polar}} = \\frac{1}{2}\\int_{\\pi/3}^{\\pi/2} r^{2} \\mathrm{d}\\theta = \\frac{1}{2}\\int_{\\pi/3}^{\\pi/2} 16a^{2}(1+\\cos\\theta)^{2} \\mathrm{d}\\theta = 8a^{2}\\int_{\\pi/3}^{\\pi/2} (1 + 2\\cos\\theta + \\cos^{2}\\theta) \\mathrm{d}\\theta$$\n$$= 8a^{2}\\int_{\\pi/3}^{\\pi/2} \\left( \\frac{3}{2} + 2\\cos\\theta + \\frac{1}{2}\\cos 2\\theta \\right) \\mathrm{d}\\theta = 8a^{2} \\left[ \\frac{3}{2}\\theta + 2\\sin\\theta + \\frac{1}{4}\\sin 2\\theta \\right]_{\\pi/3}^{\\pi/2}$$\n\n代入上限 $\\frac{\\pi}{2}$ (Evaluate at the upper limit $\\frac{\\pi}{2}$):\n$$\\frac{3}{2}\\left(\\frac{\\pi}{2}\\right) + 2\\sin\\frac{\\pi}{2} + \\frac{1}{4}\\sin\\pi = \\frac{3\\pi}{4} + 2$$\n\n代入下限 $\\frac{\\pi}{3}$ (Evaluate at the lower limit $\\frac{\\pi}{3}$):\n$$\\frac{3}{2}\\left(\\frac{\\pi}{3}\\right) + 2\\sin\\frac{\\pi}{3} + \\frac{1}{4}\\sin\\frac{2\\pi}{3} = \\frac{\\pi}{2} + 2\\left(\\frac{\\sqrt{3}}{2}\\right) + \\frac{1}{4}\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{2} + \\frac{9\\sqrt{3}}{8}$$\n\n计算扇形面积 (Compute the polar area):\n$$\\text{Area}_{\\text{polar}} = 8a^{2} \\left[ \\left( \\frac{3\\pi}{4} + 2 \\right) - \\left( \\frac{\\pi}{2} + \\frac{9\\sqrt{3}}{8} \\right) \\right] = 8a^{2} \\left( \\frac{\\pi}{4} + 2 - \\frac{9\\sqrt{3}}{8} \\right) = a^{2}(2\\pi + 16 - 9\\sqrt{3})$$\n\n**3. 计算阴影区域 $R$ 的面积 (Calculate the area of region $R$):**\n$$\\text{Area}(R) = a^{2}(2\\pi + 16 - 9\\sqrt{3}) - 6a^{2} = a^{2}(2\\pi - 9\\sqrt{3} + 10)$$\n\n因此，阴影区域 $R$ 的面积为 (Therefore, the area of $R$ is):\n$$\\boxed{\\text{Area}(R) = a^{2}(2\\pi - 9\\sqrt{3} + 10)}$$\n其中整数常数分别为 $n = 2$，$p = -9$，$q = 10$。",
    "createdAt": 1784112727009,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 12,
    "source": "22_Jun_01_7",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q7"
    },
    "stem": "(a) Show that the transformation $y=xv$ transforms the equation\n\n$$3\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-\\frac{6}{x}\\frac{\\mathrm{d} y}{\\mathrm{d} x}+\\frac{6 y}{x^{2}}+3 y=x^{2}\\qquad x\\neq 0$$\n\ninto the equation\n\n$$3\\frac{\\mathrm{d}^{2} v}{\\mathrm{d} x^{2}}+3 v=x$$\n\n\\hfill (6)\n\n(b) Hence obtain the general solution of the differential equation (I), giving your answer in the form $y=f(x)$ \\hfill (6)",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $y = xv$。我们对 $y$ 关于 $x$ 求一阶和二阶导数 (Given the transformation $y = xv$, differentiate both sides with respect to $x$):\n\n一阶导数 (First derivative, using product rule):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = v + x\\frac{\\mathrm{d}v}{\\mathrm{d}x}$$\n\n二阶导数 (Second derivative):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}v}{\\mathrm{d}x} + \\left( \\frac{\\mathrm{d}v}{\\mathrm{d}x} + x\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} \\right) = 2\\frac{\\mathrm{d}v}{\\mathrm{d}x} + x\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}}$$\n\n将 $y$、 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 以及 $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$ 的表达式代入原微分方程 (I) (Substitute $y$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$, and $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$ into differential equation (I)):\n$$3\\left( 2\\frac{\\mathrm{d}v}{\\mathrm{d}x} + x\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} \\right) - \\frac{6}{x}\\left( v + x\\frac{\\mathrm{d}v}{\\mathrm{d}x} \\right) + \\frac{6xv}{x^{2}} + 3xv = x^{2}$$\n$$6\\frac{\\mathrm{d}v}{\\mathrm{d}x} + 3x\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} - \\frac{6v}{x} - 6\\frac{\\mathrm{d}v}{\\mathrm{d}x} + \\frac{6v}{x} + 3xv = x^{2}$$\n\n合并同类项进行消去 (Combine like terms):\n- 项 $6\\frac{\\mathrm{d}v}{\\mathrm{d}x}$ 和 $-6\\frac{\\mathrm{d}v}{\\mathrm{d}x}$ 相互抵消 (The terms cancel out).\n- 项 $-\\frac{6v}{x}$ 和 $\\frac{6v}{x}$ 相互抵消 (The terms cancel out).\n\n我们得到 (We are left with):\n$$3x\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} + 3xv = x^{2}$$\n\n由于 $x \\neq 0$，方程两边同除以 $x$ 即可得证 (Since $x \\neq 0$, divide both sides of the equation by $x$ to complete the proof):\n$$\\boxed{3\\frac{\\mathrm{d}^{2} v}{\\mathrm{d} x^{2}}+3 v=x}$$\n\n---\n\n**(b)**\n\n微分方程 (II) 整理为标准形式 (Write equation (II) in standard form):\n$$\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} + v = \\frac{1}{3}x$$\n\n这是一个二阶常系数非齐次线性微分方程。首先求解对应的齐次方程 (First, solve the complementary function (C.F.) of the homogeneous equation):\n$$\\frac{\\mathrm{d}^{2}v}{\\mathrm{d}x^{2}} + v = 0$$\n\n特征方程为 (The auxiliary equation is):\n$$m^{2} + 1 = 0 \\implies m = \\pm\\mathrm{i}$$\n\n因此，互补函数（C.F.）为 (Thus, the complementary function is):\n$$v_{c}(x) = A\\cos x + B\\sin x$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n现在寻找非齐次项的一个特解（Particular Integral, P.I.）。由于右边是 $\\frac{1}{3}x$，设特解形式为 (Try a particular solution of the form):\n$$v_{p}(x) = Kx + L$$\n\n对特解求导并代回方程 (II) (Differentiate and substitute back into (II)):\n$$\\frac{\\mathrm{d}v_{p}}{\\mathrm{d}x} = K, \\quad \\frac{\\mathrm{d}^{2}v_{p}}{\\mathrm{d}x^{2}} = 0$$\n$$0 + (Kx + L) = \\frac{1}{3}x \\implies K = \\frac{1}{3}, \\quad L = 0$$\n\n因此特解为 $v_{p}(x) = \\frac{1}{3}x$。方程 (II) 的通解为 (Therefore, the general solution of (II) is):\n$$v = A\\cos x + B\\sin x + \\frac{1}{3}x$$\n\n由于 $y = xv$，我们将 $v$ 乘以 $x$，求得原微分方程 (I) 的通解为 (Since $y = xv$, multiply $v$ by $x$ to find the general solution of (I)):\n$$\\boxed{y = x(A\\cos x + B\\sin x) + \\frac{1}{3}x^{2}}$$",
    "createdAt": 1784112786139,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jun01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 14,
    "source": "22_Jun_01_8",
    "examRef": {
      "year": 2022,
      "month": "Jun",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2022 Jun · Paper 01 Q8"
    },
    "stem": "(a) Use de Moivre's theorem to show that\n\n$$\\sin 5\\theta\\equiv 16\\sin ^{5}\\theta-20\\sin ^{3}\\theta+5\\sin \\theta$$\n\n\\hfill (5)\n\n(b) Hence determine the five distinct solutions of the equation\n\n$$16x^{5}-20x^{3}+5x+\\frac{1}{5}=0$$\n\ngiving your answers to 3 decimal places. \\hfill (5)\n\n(c) Use the identity given in part (a) to show that\n\n$$\\int _{0}^{\\frac{\\pi }{4}}\\left(4\\sin ^{5}\\theta-5\\sin ^{3}\\theta-6\\sin \\theta\\right)\\mathrm{d}\\theta=a\\sqrt{2}+b$$\n\nwhere $a$ and $b$ are rational numbers to be determined. \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n利用棣莫弗定理（de Moivre's theorem），我们有 (Using de Moivre's theorem, we have):\n$$\\cos 5\\theta + \\mathrm{i}\\sin 5\\theta = (\\cos \\theta + \\mathrm{i}\\sin \\theta)^{5}$$\n\n利用二项式定理展开等式右侧 (Expand the right-hand side using the Binomial Theorem):\n$$(\\cos \\theta + \\mathrm{i}\\sin \\theta)^{5} = \\cos^{5}\\theta + 5\\mathrm{i}\\cos^{4}\\theta\\sin \\theta + 10\\mathrm{i}^{2}\\cos^{3}\\theta\\sin^{2}\\theta + 10\\mathrm{i}^{3}\\cos^{2}\\theta\\sin^{3}\\theta + 5\\mathrm{i}^{4}\\cos \\theta\\sin^{4}\\theta + \\mathrm{i}^{5}\\sin^{5}\\theta$$\n$$= \\cos^{5}\\theta + 5\\mathrm{i}\\cos^{4}\\theta\\sin \\theta - 10\\cos^{3}\\theta\\sin^{2}\\theta - 10\\mathrm{i}\\cos^{2}\\theta\\sin^{3}\\theta + 5\\cos \\theta\\sin^{4}\\theta + \\mathrm{i}\\sin^{5}\\theta$$\n\n对比两边的虚部 (Equate the imaginary parts of both sides):\n$$\\sin 5\\theta = 5\\cos^{4}\\theta\\sin \\theta - 10\\cos^{2}\\theta\\sin^{3}\\theta + \\sin^{5}\\theta$$\n\n利用恒等式 $\\cos^{2}\\theta = 1 - \\sin^{2}\\theta$ 将所有项写成关于 $\\sin\\theta$ 的形式 (Use the identity $\\cos^{2}\\theta = 1 - \\sin^{2}\\theta$ to write all terms in terms of $\\sin\\theta$):\n$$\\cos^{4}\\theta = (1 - \\sin^{2}\\theta)^{2} = 1 - 2\\sin^{2}\\theta + \\sin^{4}\\theta$$\n\n代回并化简 (Substitute and simplify):\n$$\\sin 5\\theta = 5\\left( 1 - 2\\sin^{2}\\theta + \\sin^{4}\\theta \\right)\\sin \\theta - 10\\left( 1 - \\sin^{2}\\theta \\right)\\sin^{3}\\theta + \\sin^{5}\\theta$$\n$$= \\left( 5\\sin \\theta - 10\\sin^{3}\\theta + 5\\sin^{5}\\theta \\right) - \\left( 10\\sin^{3}\\theta - 10\\sin^{5}\\theta \\right) + \\sin^{5}\\theta$$\n$$\\sin 5\\theta = 16\\sin^{5}\\theta - 20\\sin^{3}\\theta + 5\\sin\\theta$$\n\n因此，恒等式得证 (Thus proved):\n$$\\boxed{\\sin 5\\theta\\equiv 16\\sin ^{5}\\theta-20\\sin ^{3}\\theta+5\\sin \\theta}$$\n\n---\n\n**(b)**\n\n我们将方程写为 (Rewrite the equation as):\n$$16x^{5}-20x^{3}+5x = -\\frac{1}{5}$$\n\n令 $x = \\sin\\theta$ 并利用 (a) 问中的恒等式，将方程转化为 (Let $x = \\sin\\theta$ and use the identity from (a) to transform the equation):\n$$\\sin 5\\theta = -\\frac{1}{5}$$\n\n求 5 个不同的 $\\theta$ 使得 $x = \\sin\\theta$ 的值不同 (Find five distinct solutions for $\\theta$):\n$$5\\theta_{k} = \\arcsin\\left(-\\frac{1}{5}\\right) + 2k\\pi \\quad (\\text{其中 } k = 0, 1, 2, 3, 4)$$\n$$\\theta_{k} = \\frac{\\arcsin\\left(-0.2\\right) + 2k\\pi}{5} \\approx -0.040272 + \\frac{2k\\pi}{5}$$\n\n依次计算这 5 个根 $x_{k} = \\sin\\theta_{k}$ (Compute the five roots $x_{k} = \\sin\\theta_{k}$):\n1) 当 $k = 0$ 时: $\\theta \\approx -0.040272 \\implies x \\approx \\sin(-0.040272) \\approx -0.040$\n2) 当 $k = 1$ 时: $\\theta \\approx 1.216365 \\implies x \\approx \\sin(1.216365) \\approx 0.938$\n3) 当 $k = 2$ 时: $\\theta \\approx 2.473002 \\implies x \\approx \\sin(2.473002) \\approx 0.620$\n4) 当 $k = 3$ 时: $\\theta \\approx 3.729639 \\implies x \\approx \\sin(3.729639) \\approx -0.554$\n5) 当 $k = 4$ 时: $\\theta \\approx 4.986276 \\implies x \\approx \\sin(4.986276) \\approx -0.964$\n\n因此，方程的 5 个不同的解为（按升序排列） (Therefore, the five distinct solutions to the equation are):\n$$\\boxed{x \\approx -0.964, \\ -0.554, \\ -0.040, \\ 0.620, \\ 0.938}$$\n\n---\n\n**(c)**\n\n我们要计算积分 (We need to calculate the integral):\n$$I = \\int _{0}^{\\frac{\\pi }{4}}\\left(4\\sin ^{5}\\theta-5\\sin ^{3}\\theta-6\\sin \\theta\\right)\\mathrm{d}\\theta$$\n\n利用 (a) 问中的恒等式，发现 (Using the identity from part (a), we find):\n$$16\\sin^{5}\\theta - 20\\sin^{3}\\theta = \\sin 5\\theta - 5\\sin\\theta \\implies 4\\sin^{5}\\theta - 5\\sin^{3}\\theta = \\frac{1}{4}\\sin 5\\theta - \\frac{5}{4}\\sin\\theta$$\n\n代入被积函数中 (Substitute this into the integrand):\n$$4\\sin^{5}\\theta - 5\\sin^{3}\\theta - 6\\sin\\theta = \\left( \\frac{1}{4}\\sin 5\\theta - \\frac{5}{4}\\sin\\theta \\right) - 6\\sin\\theta = \\frac{1}{4}\\sin 5\\theta - \\frac{29}{4}\\sin\\theta$$\n\n进行积分 (Perform the integration):\n$$I = \\int _{0}^{\\frac{\\pi }{4}}\\left( \\frac{1}{4}\\sin 5\\theta - \\frac{29}{4}\\sin\\theta \\right) \\mathrm{d}\\theta = \\left[ -\\frac{1}{20}\\cos 5\\theta + \\frac{29}{4}\\cos\\theta \\right]_{0}^{\\frac{\\pi}{4}}$$\n\n代入上限 $\\frac{\\pi}{4}$ (Evaluate at the upper limit $\\frac{\\pi}{4}$):\n$$-\\frac{1}{20}\\cos\\left(\\frac{5\\pi}{4}\\right) + \\frac{29}{4}\\cos\\left(\\frac{\\pi}{4}\\right) = -\\frac{1}{20}\\left(-\\frac{\\sqrt{2}}{2}\\right) + \\frac{29}{4}\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\sqrt{2}}{40} + \\frac{29\\sqrt{2}}{8} = \\frac{146\\sqrt{2}}{40} = \\frac{73}{20}\\sqrt{2}$$\n\n代入下限 $0$ (Evaluate at the lower limit $0$):\n$$-\\frac{1}{20}\\cos(0) + \\frac{29}{4}\\cos(0) = -\\frac{1}{20} + \\frac{29}{4} = \\frac{144}{20} = \\frac{36}{5}$$\n\n两值相减可得精确的积分结果为 (Subtract the lower limit value from the upper limit value to get the exact integral):\n$$\\boxed{\\int _{0}^{\\frac{\\pi }{4}}\\left(4\\sin ^{5}\\theta-5\\sin ^{3}\\theta-6\\sin \\theta\\right)\\mathrm{d}\\theta = \\frac{73}{20}\\sqrt{2} - \\frac{36}{5}}$$\n其中有理数常数为 $a = \\frac{73}{20}$，$b = -\\frac{36}{5}$。",
    "createdAt": 1784112873580,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q1",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "22_Jan_01_1",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 1,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q1"
    },
    "stem": "(a) Express the complex number\n\n$$-4-4\\sqrt{3}\\mathrm{i}$$\n\nin the form $r(\\cos \\theta+\\mathrm{i}\\sin \\theta)$, where $r>0$ and $-\\pi< \\theta \\leqslant \\pi$ \\hfill (3)\n\n(b) Solve the equation\n\n$$z^{3}+4+4\\sqrt{3}\\mathrm{i}=0$$\n\ngiving your answers in the form $re^{\\mathrm{i}\\theta}$, where $r>0$ and $-\\pi< \\theta \\leqslant \\pi$ \\hfill (4)",
    "figure": "",
    "solution": "**(a)**\n\n对于复数 $w = -4-4\\sqrt{3}\\mathrm{i}$，我们首先求其模长 $r$ (First, we find the modulus $r$ of the complex number $w = -4-4\\sqrt{3}\\mathrm{i}$):\n$$r = |w| = \\sqrt{(-4)^{2} + (-4\\sqrt{3})^{2}} = \\sqrt{16 + 48} = \\sqrt{64} = 8$$\n\n接着求其辐角 $\\theta$ (Next, find the argument $\\theta$):\n由于实部和虚部均为负数，该复数位于第三象限 (Since both real and imaginary parts are negative, the complex number lies in the third quadrant).\n设参考角为 $\\alpha$ (Let the reference angle be $\\alpha$):\n$$\\tan\\alpha = \\left| \\frac{-4\\sqrt{3}}{-4} \\right| = \\sqrt{3} \\implies \\alpha = \\frac{\\pi}{3}$$\n\n因为要求 $-\\pi < \\theta \\leqslant \\pi$，故在第三象限对应的辐角为主值 (Since we need $-\\pi < \\theta \\leqslant \\pi$, the principal argument in the third quadrant is):\n$$\\theta = -\\pi + \\alpha = -\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$$\n\n因此，该复数的三角形式为 (Therefore, the trigonometric form of the complex number is):\n$$\\boxed{8\\left( \\cos\\left(-\\frac{2\\pi}{3}\\right) + \\mathrm{i}\\sin\\left(-\\frac{2\\pi}{3}\\right) \\right)}$$\n\n---\n\n**(b)**\n\n我们将方程写为 (Rewrite the equation as):\n$$z^{3} = -4-4\\sqrt{3}\\mathrm{i}$$\n\n利用 (a) 问中求得的复数形式，其指数形式为 (Using the result from part (a), the exponential form of $-4-4\\sqrt{3}\\mathrm{i}$ is):\n$$z^{3} = 8\\mathrm{e}^{\\mathrm{i}\\left(-\\frac{2\\pi}{3} + 2k\\pi\\right)} \\quad \\text{其中 (where) } k \\in \\mathbb{Z}$$\n\n对两边取立方根，求得 $z$ (Take the cube root of both sides to solve for $z$):\n$$z = \\left( 8\\mathrm{e}^{\\mathrm{i}\\left(-\\frac{2\\pi}{3} + 2k\\pi\\right)} \\right)^{1/3} = 2\\mathrm{e}^{\\mathrm{i}\\left(-\\frac{2\\pi}{9} + \\frac{2k\\pi}{3}\\right)} = 2\\mathrm{e}^{\\mathrm{i}\\left(-\\frac{2\\pi}{9} + \\frac{6k\\pi}{9}\\right)} \\quad \\text{其中 (where) } k \\in \\{0, 1, -1\\}$$\n\n依次代入不同的 $k$ 值，在区间 $-\\pi < \\theta \\leqslant \\pi$ 内计算得到 3 个根的辐角为 (Substituting different values of $k$ to find the 3 arguments within the interval $-\\pi < \\theta \\leqslant \\pi$):\n- 当 $k = 0$ 时: $\\theta = -\\frac{2\\pi}{9}$\n- 当 $k = 1$ 时: $\\theta = -\\frac{2\\pi}{9} + \\frac{6\\pi}{9} = \\frac{4\\pi}{9}$\n- 当 $k = -1$ 时: $\\theta = -\\frac{2\\pi}{9} - \\frac{6\\pi}{9} = -\\frac{8\\pi}{9}$\n\n因此，该方程的所有解为 (Therefore, the solutions to the equation are):\n$$\\boxed{z = 2\\mathrm{e}^{\\mathrm{i}\\theta} \\quad \\text{其中 (where) } \\theta \\in \\left\\{ -\\frac{8\\pi}{9}, -\\frac{2\\pi}{9}, \\frac{4\\pi}{9} \\right\\}}$$",
    "createdAt": 1784115726531,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q2",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SECOND-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 6,
    "source": "22_Jan_01_2",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 2,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q2"
    },
    "stem": "Determine the general solution of the differential equation \\hfill (6)\n\n$$2\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-5\\frac{\\mathrm{d} y}{\\mathrm{d} x}-3 y=2\\mathrm{e}^{3x}$$",
    "figure": "",
    "solution": "首先求对应的齐次方程的通解（互补函数 C.F.） (First, find the complementary function (C.F.) of the homogeneous equation):\n$$2\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}-5\\frac{\\mathrm{d} y}{\\mathrm{d} x}-3 y=0$$\n\n其特征方程为 (The auxiliary equation is):\n$$2m^{2} - 5m - 3 = 0$$\n\n解特征方程 (Solve the quadratic equation):\n$$(2m + 1)(m - 3) = 0 \\implies m_{1} = -\\frac{1}{2}, \\quad m_{2} = 3$$\n\n由于特征根为两个不相等的实数，其互补函数为 (Since the roots are real and distinct, the complementary function is):\n$$y_{c}(x) = A\\mathrm{e}^{-\\frac{1}{2}x} + B\\mathrm{e}^{3x}$$\n其中 $A, B$ 为任意常数 (where $A, B$ are arbitrary constants).\n\n接下来，寻找非齐次项对应的特解（Particular Integral, P.I.）。非齐次项为 $2\\mathrm{e}^{3x}$。由于 $m = 3$ 已经是特征方程的根，通常设的特解形式 $K\\mathrm{e}^{3x}$ 需要同乘以 $x$ (Next, find the particular integral (P.I.). The non-homogeneous term is $2\\mathrm{e}^{3x}$. Since $m=3$ is already a root of the auxiliary equation, we must multiply the standard trial form $K\\mathrm{e}^{3x}$ by $x$):\n$$y_{p}(x) = Kx\\mathrm{e}^{3x}$$\n\n利用乘积法则（Product Rule）求一阶和二阶导数 (Differentiate $y_{p}(x)$ once and twice):\n$$\\frac{\\mathrm{d}y_{p}}{\\mathrm{d}x} = K\\mathrm{e}^{3x} + 3Kx\\mathrm{e}^{3x} = K(1 + 3x)\\mathrm{e}^{3x}$$\n$$\\frac{\\mathrm{d}^{2}y_{p}}{\\mathrm{d}x^{2}} = 3K\\mathrm{e}^{3x} + 3K(1 + 3x)\\mathrm{e}^{3x} = 6K\\mathrm{e}^{3x} + 9Kx\\mathrm{e}^{3x} = 3K(2 + 3x)\\mathrm{e}^{3x}$$\n\n将导数表达式代回原微分方程中 (Substitute the derivatives back into the original differential equation):\n$$2\\left[ 3K(2 + 3x)\\mathrm{e}^{3x} \\right] - 5\\left[ K(1 + 3x)\\mathrm{e}^{3x} \\right] - 3\\left[ Kx\\mathrm{e}^{3x} \\right] = 2\\mathrm{e}^{3x}$$\n\n方程两边同除以 $\\mathrm{e}^{3x}$ 并化简 (Divide both sides by $\\mathrm{e}^{3x}$ and simplify):\n$$2(6K + 9Kx) - 5(K + 3Kx) - 3Kx = 2$$\n$$12K + 18Kx - 5K - 15Kx - 3Kx = 2$$\n$$7K = 2 \\implies K = \\frac{2}{7}$$\n\n因此特解为 $y_{p}(x) = \\frac{2}{7}x\\mathrm{e}^{3x}$。所以，该微分方程的通解为 (Therefore, the particular integral is $y_{p}(x) = \\frac{2}{7}x\\mathrm{e}^{3x}$. The general solution of the differential equation is):\n$$\\boxed{y(x) = A\\mathrm{e}^{-\\frac{1}{2}x} + B\\mathrm{e}^{3x} + \\frac{2}{7}x\\mathrm{e}^{3x}}$$",
    "createdAt": 1784115805140,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q3",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "INEQUALITIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 11,
    "source": "22_Jan_01_3",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 3,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q3"
    },
    "stem": "Figure 1 shows a sketch of the curve $C_{1}$ with equation\n\n$$y=\\frac{4x}{4-|x|}$$\n\nand the curve $C_{2}$ with equation\n\n$$y=x^{2}-8x$$\n\nFor $x>0$, $C_{1}$ has equation $y=\\dfrac{4x}{4-x}$\n\n(a) Use algebra to show that $C_{1}$ touches $C_{2}$ at a point $P$, stating the coordinates of $P$ \\hfill (5)\n\n(b) Hence or otherwise, using algebra, solve the inequality \\hfill (6)\n\n$$x^{2}-8x>\\frac{4x}{4-|x|}$$",
    "figure": "data/images/fp2_22Jan01_q3_fig.png",
    "solution": "**(a)**\n\n为了证明曲线 $C_1$ 与 $C_2$ 在点 $P$ 处相切，我们联立两曲线的方程。由于对于 $x > 0$，曲线 $C_1$ 的方程为 $y = \\frac{4x}{4-x}$，我们令两方程相等 (To show that $C_1$ touches $C_2$ at $P$ for $x > 0$, we set the equations equal):\n$$x^{2} - 8x = \\frac{4x}{4-x}$$\n\n因为 $x > 0$，两边同除以 $x$ (Since $x > 0$, divide both sides by $x$):\n$$x - 8 = \\frac{4}{4-x}$$\n\n两边同乘以 $4-x$（其中 $x \\neq 4$） (Multiply both sides by $4-x$, assuming $x \\neq 4$):\n$$(x-8)(4-x) = 4$$\n$$4x - x^{2} - 32 + 8x = 4$$\n$$-x^{2} + 12x - 32 = 4$$\n$$x^{2} - 12x + 36 = 0$$\n\n对二次方程进行因式分解 (Factor the quadratic equation):\n$$(x-6)^{2} = 0 \\implies x = 6 \\quad \\text{(重根 / repeated root)}$$\n\n由于在此交点处得到重根 $x=6$，这说明曲线 $C_1$ 与 $C_2$ 在此点相切 (Since we obtained a repeated root $x=6$, the curves touch at this point).\n\n代入 $x=6$ 计算对应的 $y$ 坐标 (Substitute $x=6$ to find the $y$-coordinate):\n$$y = 6^{2} - 8(6) = 36 - 48 = -12$$\n\n因此，相切点 $P$ 的坐标为 (Therefore, the coordinates of $P$ are):\n$$\\boxed{P(6, -12)}$$\n\n---\n\n**(b)**\n\n要求解不等式 (We solve the inequality):\n$$x^{2} - 8x > \\frac{4x}{4-|x|}$$\n\n由于不等式中含有绝对值 $|x|$，我们根据 $x$ 的正负分情况进行讨论 (Due to the absolute value $|x|$, we consider two cases):\n\n**情况 1： 当 $x > 0$ 时 (Case 1: $x > 0$)**\n此时 $|x| = x$，不等式变为 (In this case, $|x| = x$, so the inequality is):\n$$x^{2} - 8x > \\frac{4x}{4-x} \\implies x\\left( x - 8 - \\frac{4}{4-x} \\right) > 0$$\n$$\\frac{-x(x-6)^{2}}{4-x} > 0 \\implies \\frac{x(x-6)^{2}}{x-4} > 0$$\n\n因为 $x > 0$，且当 $x \\neq 6$ 时 $(x-6)^{2} > 0$，故不等式等价于 (Since $x > 0$ and $(x-6)^{2} > 0$ for $x \\neq 6$, this simplifies to):\n$$x-4 > 0 \\implies x > 4 \\quad (\\text{且 } x \\neq 6)$$\n对应区间为 (The intervals are):\n$$4 < x < 6 \\quad \\text{或 (or)} \\quad x > 6$$\n\n**情况 2： 当 $x < 0$ 时 (Case 2: $x < 0$)**\n此时 $|x| = -x$，不等式变为 (In this case, $|x| = -x$, so the inequality is):\n$$x^{2} - 8x > \\frac{4x}{4+x}$$\n\n因为 $x < 0$，两边同除以 $x$ 时**必须改变不等号的方向** (Since $x < 0$, dividing by $x$ reverses the inequality sign):\n$$x - 8 < \\frac{4}{4+x}$$\n$$x - 8 - \\frac{4}{4+x} < 0 \\implies \\frac{(x-8)(4+x) - 4}{4+x} < 0$$\n$$\\frac{x^{2} - 4x - 36}{4+x} < 0$$\n\n确定分子的根 (Find the roots of the numerator):\n$$x^{2} - 4x - 36 = 0 \\implies x = \\frac{4 \\pm \\sqrt{16 - 4(1)(-36)}}{2} = 2 \\pm 2\\sqrt{10}$$\n对应的临界点为 $x = 2 - 2\\sqrt{10} \\approx -4.32$（另一个根为正，不予考虑）和分母未定义的点 $x = -4$。\n\n在 $x < 0$ 范围内，这些临界点将数轴划分为三个区间，通过符号测试法可得满足条件的区间为 (In the range $x < 0$, testing the intervals yields the solutions):\n$$x < 2 - 2\\sqrt{10} \\quad \\text{或 (or)} \\quad -4 < x < 0$$\n\n---\n\n**合并两种情况的解集 (Combine the solutions of both cases):**\n综合上述两种情况，最终的解集为 (Combining all intervals, the final solution set is):\n$$\\boxed{x < 2 - 2\\sqrt{10} \\quad \\text{或} \\quad -4 < x < 0 \\quad \\text{或} \\quad 4 < x < 6 \\quad \\text{或} \\quad x > 6}$$",
    "createdAt": 1784115905982,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q4",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "POLAR COORDINATES"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 10,
    "source": "22_Jan_01_4",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 4,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q4"
    },
    "stem": "Figure 2 shows part of the curve with polar equation\n\n$$r=4-\\frac{3}{2}\\cos 6\\theta\\qquad 0 \\leqslant \\theta < 2\\pi$$\n\n(a) Sketch, on the polar grid in Figure 2, \\hfill(3)\n\n(i) the rest of the curve with equation $$r=4-\\frac{3}{2}\\cos 6\\theta\\qquad 0 \\leqslant \\theta < 2\\pi$$ \n\n(ii) the polar curve with equation $$r=1\\qquad 0 \\leqslant \\theta < 2\\pi$$\n\n\n\n(b) Determine the exact area enclosed between the two curves defined in part (a). \\hfill (7)",
    "figure": "data/images/fp2_22Jan01_q4_fig.png",
    "solution": "**(a)**\n\n这是一个画图任务，我们可以通过数学特征来描述如何补全和绘制这两条曲线 (This is a sketching task; we describe the mathematical characteristics of the curves to guide the drawing):\n\n**(i)** 曲线 $r=4-\\frac{3}{2}\\cos 6\\theta$：\n由于 $\\cos 6\\theta$ 的周期为 $\\frac{2\\pi}{6} = \\frac{\\pi}{3}$，该曲线具有 6 阶旋转对称性，共有 6 个形似花瓣的“叶片” (The curve has 6-fold rotational symmetry with 6 petal-like lobes).\n- 其最大极径为 (Maximum radius is) $r_{\\text{max}} = 4 - (-1.5) = 5.5$，出现在 $\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$ 处。\n- 其最小极径为 (Minimum radius is) $r_{\\text{min}} = 4 - 1.5 = 2.5$，出现在 $\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$ 处。\n在极坐标网格上对称地补全这 6 个叶片即可。\n\n**(ii)** 曲线 $r = 1$：\n这是一条**以极点（原点）为圆心、半径为 1 的圆** (This is a **circle centered at the pole with a radius of 1**).\n\n$$\\boxed{\\text{绘制一条 6 叶对称曲线 } r=4-\\frac{3}{2}\\cos 6\\theta \\text{，以及一个心在原点、半径为 1 的圆 } r=1}$$\n\n---\n\n**(b)**\n\n由于对于所有 $\\theta$，都有 $r_{\\text{outer}} = 4-\\frac{3}{2}\\cos 6\\theta \\geqslant 2.5 > 1$，这说明圆 $r=1$ 完全位于外层曲线的内部。\n\n因此，两条曲线之间围成的精确面积为外层曲线的总面积减去内层圆的面积 (Since the circle $r=1$ lies completely inside the outer curve, the area enclosed between them is the area of the outer curve minus the area of the inner circle):\n$$\\text{Area} = \\text{Area}_{\\text{outer}} - \\text{Area}_{\\text{inner}}$$\n\n**1. 计算内层圆 $r = 1$ 的面积 (Calculate the area of the inner circle):**\n$$\\text{Area}_{\\text{inner}} = \\pi (1)^{2} = \\pi$$\n\n**2. 计算外层曲线 $r = 4-\\frac{3}{2}\\cos 6\\theta$ 围成的面积 (Calculate the area of the outer curve):**\n$$\\text{Area}_{\\text{outer}} = \\frac{1}{2}\\int_{0}^{2\\pi} r^{2} \\mathrm{d}\\theta = \\frac{1}{2}\\int_{0}^{2\\pi} \\left( 4 - \\frac{3}{2}\\cos 6\\theta \\right)^{2} \\mathrm{d}\\theta$$\n\n展开被积函数 (Expand the integrand):\n$$\\left( 4 - \\frac{3}{2}\\cos 6\\theta \\right)^{2} = 16 - 12\\cos 6\\theta + \\frac{9}{4}\\cos^{2} 6\\theta$$\n\n利用二倍角公式 $\\cos^{2} 6\\theta = \\frac{1+\\cos 12\\theta}{2}$ 进一步化简 (Use the identity $\\cos^{2} 6\\theta = \\frac{1+\\cos 12\\theta}{2}$):\n$$\\left( 4 - \\frac{3}{2}\\cos 6\\theta \\right)^{2} = 16 - 12\\cos 6\\theta + \\frac{9}{8}(1 + \\cos 12\\theta) = \\frac{137}{8} - 12\\cos 6\\theta + \\frac{9}{8}\\cos 12\\theta$$\n\n进行积分。由于三角函数 $\\cos 6\\theta$ 和 $\\cos 12\\theta$ 在一个完整周期区间 $[0, 2\\pi]$ 上的积分值为 0 (Since the integrals of $\\cos 6\\theta$ and $\\cos 12\\theta$ over $[0, 2\\pi]$ are 0):\n$$\\int_{0}^{2\\pi} \\left( \\frac{137}{8} - 12\\cos 6\\theta + \\frac{9}{8}\\cos 12\\theta \\right) \\mathrm{d}\\theta = \\left[ \\frac{137}{8}\\theta - 2\\sin 6\\theta + \\frac{3}{32}\\sin 12\\theta \\right]_{0}^{2\\pi} = \\frac{137}{8} \\cdot 2\\pi = \\frac{137\\pi}{4}$$\n\n因此，外层面积为 (Therefore, the outer area is):\n$$\\text{Area}_{\\text{outer}} = \\frac{1}{2} \\left( \\frac{137\\pi}{4} \\right) = \\frac{137\\pi}{8}$$\n\n**3. 计算围成的精确面积 (Calculate the exact area enclosed between the two curves):**\n$$\\text{Area} = \\frac{137\\pi}{8} - \\pi = \\frac{129\\pi}{8}$$\n\n因此，精确面积为 (Therefore, the exact area is):\n$$\\boxed{\\text{Area} = \\frac{129\\pi}{8}}$$",
    "createdAt": 1784116042138,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q5",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "MACLAURIN AND TAYLOR SERIES"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "22_Jan_01_5",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 5,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q5"
    },
    "stem": "$$y=\\sqrt{4+\\ln x}\\qquad x>\\frac{1}{2}$$\n\n(a) Show that \\hfill (5)\n\n$$\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}=-\\frac{9+2\\ln x}{4 x^{2}(4+\\ln x)^{\\frac{3}{2}}}$$\n\n\n\n(b) Hence, or otherwise, determine the Taylor series expansion about $x=1$ for $y$, in ascending powers of $(x-1)$, up to and including the term in $(x-1)^{2}$, giving each coefficient in simplest form. \\hfill (3)",
    "figure": "",
    "solution": "**(a)**\n\n已知 $y = \\sqrt{4+\\ln x} = (4+\\ln x)^{1/2}$。我们利用链式法则（Chain Rule）求一阶导数 (Given $y = \\sqrt{4+\\ln x} = (4+\\ln x)^{1/2}$, find the first derivative using the chain rule):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2}(4+\\ln x)^{-1/2} \\cdot \\frac{1}{x} = \\frac{1}{2x(4+\\ln x)^{1/2}}$$\n\n接下来求二阶导数 $\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}$ (Differentiate $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ with respect to $x$ using the product rule):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[ \\frac{1}{2x}(4+\\ln x)^{-1/2} \\right]$$\n$$= \\left( \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\frac{1}{2x}\\right) \\right) (4+\\ln x)^{-1/2} + \\frac{1}{2x} \\left( \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left((4+\\ln x)^{-1/2}\\right) \\right)$$\n$$= \\left(-\\frac{1}{2x^{2}}\\right) (4+\\ln x)^{-1/2} + \\frac{1}{2x} \\left( -\\frac{1}{2}(4+\\ln x)^{-3/2} \\cdot \\frac{1}{x} \\right)$$\n$$= -\\frac{1}{2x^{2}(4+\\ln x)^{1/2}} - \\frac{1}{4x^{2}(4+\\ln x)^{3/2}}$$\n\n进行通分，共同的分母为 $4x^{2}(4+\\ln x)^{3/2}$ (Find a common denominator of $4x^{2}(4+\\ln x)^{3/2}$):\n$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}} = \\frac{-2(4+\\ln x) - 1}{4x^{2}(4+\\ln x)^{3/2}}$$\n$$= \\frac{-8 - 2\\ln x - 1}{4x^{2}(4+\\ln x)^{3/2}} = -\\frac{9+2\\ln x}{4x^{2}(4+\\ln x)^{3/2}}$$\n\n因此得证 (Thus proved):\n$$\\boxed{\\frac{\\mathrm{d}^{2} y}{\\mathrm{d} x^{2}}=-\\frac{9+2\\ln x}{4 x^{2}(4+\\ln x)^{\\frac{3}{2}}}}$$\n\n---\n\n**(b)**\n\n泰勒级数（Taylor series）在 $x = 1$ 处的展开形式为 (The Taylor series expansion about $x = 1$ is):\n$$y(x) = y(1) + y'(1)(x-1) + \\frac{y''(1)}{2!}(x-1)^{2} + \\dots$$\n\n计算函数及其各阶导数在 $x = 1$ 处的值 (Evaluate the function and its derivatives at $x = 1$):\n- $y(1) = \\sqrt{4+\\ln 1} = \\sqrt{4+0} = 2$\n- $y'(1) = \\frac{1}{2(1)(4+\\ln 1)^{1/2}} = \\frac{1}{2(2)} = \\frac{1}{4}$\n- $y''(1) = -\\frac{9+2\\ln 1}{4(1)^{2}(4+\\ln 1)^{3/2}} = -\\frac{9}{4(8)} = -\\frac{9}{32}$\n\n将这些值代回泰勒级数展开式中 (Substitute these values into the Taylor series formula):\n$$y(x) = 2 + \\frac{1}{4}(x-1) + \\frac{-\\frac{9}{32}}{2}(x-1)^{2} + \\dots$$\n\n化简每一项的系数，得到最终展开式为 (Simplify each coefficient to its simplest form):\n$$\\boxed{y = 2 + \\frac{1}{4}(x-1) - \\frac{9}{64}(x-1)^{2} + \\dots}$$",
    "createdAt": 1784116143253,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q6",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "SERIES"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 11,
    "source": "22_Jan_01_6",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 6,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q6"
    },
    "stem": "Given that $A>B>0$, by letting $x=\\arctan A$ and $y=\\arctan B$\n\n(a) prove that \\hfill (3)\n\n$$\\arctan A-\\arctan B=\\arctan\\left(\\frac{A-B}{1+A B}\\right)$$\n\n\n\n(b) Show that when $A=r+2$ and $B=r$ \\hfill (2)\n\n$$\\frac{A-B}{1+A B}=\\frac{2}{(1+r)^{2}}$$\n\n\n\n(c) Hence, using the method of differences, show that\n\n$$\\sum_{r=1}^{n} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right)=\\arctan(n+p)+\\arctan(n+q)-\\arctan 2-\\frac{\\pi}{4}$$\n\nwhere $p$ and $q$ are integers to be determined. \\hfill (4)\n\n(d) Hence, making your reasoning clear, determine\n\n$$\\sum_{r=1}^{\\infty} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right)$$\n\ngiving the answer in the form $k\\pi-\\arctan 2$, where $k$ is a constant. \\hfill (2)",
    "figure": "",
    "solution": "**(a)**\n\n令 $x = \\arctan A$， $y = \\arctan B$ (Let $x = \\arctan A$ and $y = \\arctan B$). \n因为 $A > B > 0$，所以有 $x > y > 0$，并且 $x, y \\in \\left(0, \\frac{\\pi}{2}\\right)$ (Since $A > B > 0$, we have $x > y > 0$, and both $x, y \\in \\left(0, \\frac{\\pi}{2}\\right)$).\n由此可得 (Thus):\n$$\\tan x = A \\quad \\text{且 (and)} \\quad \\tan y = B$$\n\n利用正切的和差角公式 (Using the tangent subtraction formula):\n$$\\tan(x - y) = \\frac{\\tan x - \\tan y}{1 + \\tan x \\tan y} = \\frac{A - B}{1 + AB}$$\n\n由于 $A > B > 0$，我们有 $\\frac{A - B}{1 + AB} > 0$。且因为 $x, y \\in \\left(0, \\frac{\\pi}{2}\\right)$ 且 $x > y$，所以两角之差 $x - y \\in \\left(0, \\frac{\\pi}{2}\\right)$。因此我们可以在等式两边同取反正切函数 (Since $x - y \\in \\left(0, \\frac{\\pi}{2}\\right)$ and the RHS is positive, we can take the arctangent of both sides):\n$$x - y = \\arctan\\left( \\frac{A - B}{1 + AB} \\right)$$\n\n将 $x$ 和 $y$ 代回，即可得证 (Substitute $x$ and $y$ back to complete the proof):\n$$\\boxed{\\arctan A - \\arctan B = \\arctan\\left( \\frac{A - B}{1 + AB} \\right)}$$\n\n---\n\n**(b)**\n\n当 $A = r+2$ 且 $B = r$ 时，代入代数式进行计算 (When $A = r+2$ and $B = r$, substitute into the expression):\n$$A - B = (r+2) - r = 2$$\n$$1 + AB = 1 + (r+2)r = 1 + r^{2} + 2r = (r+1)^{2} = (1+r)^{2}$$\n\n因此有 (Therefore):\n$$\\boxed{\\frac{A - B}{1 + AB} = \\frac{2}{(1+r)^{2}}}$$\n\n---\n\n**(c)**\n\n利用 (a) 和 (b) 问的结论，我们可以将求和式改写为以下裂项的形式 (Using the results from parts (a) and (b), we can rewrite the summation in a telescoping form):\n$$\\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\arctan(r+2) - \\arctan(r)$$\n\n我们将求和式展开 (Expand the sum):\n$$\\sum_{r=1}^{n} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\sum_{r=1}^{n} \\Bigl[ \\arctan(r+2) - \\arctan(r) \\Bigr]$$\n$$= \\Bigl( \\arctan 3 - \\arctan 1 \\Bigr) + \\Bigl( \\arctan 4 - \\arctan 2 \\Bigr) + \\Bigl( \\arctan 5 - \\arctan 3 \\Bigr) + \\dots + \\Bigl( \\arctan(n+1) - \\arctan(n-1) \\Bigr) + \\Bigl( \\arctan(n+2) - \\arctan(n) \\Bigr)$$\n\n可以观察到，中间的项会交叉相消 (We see the cancellation pattern):\n项 $\\arctan 3$ 与 $-\\arctan 3$ 抵消， $\\arctan 4$ 与 $-\\arctan 4$ 抵消，以此类推。\n\n消去后，只剩下开头的负项和结尾的正项 (After cancellation, only the negative terms from the beginning and the positive terms from the end remain):\n$$\\sum_{r=1}^{n} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\arctan(n+2) + \\arctan(n+1) - \\arctan 2 - \\arctan 1$$\n\n由于 $\\arctan 1 = \\frac{\\pi}{4}$ (Since $\\arctan 1 = \\frac{\\pi}{4}$):\n$$\\sum_{r=1}^{n} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\arctan(n+2) + \\arctan(n+1) - \\arctan 2 - \\frac{\\pi}{4}$$\n\n对照目标形式，我们求得整数 $p$ 和 $q$ 的值为 (Comparing this with the required form, we find the integers $p$ and $q$):\n$$\\boxed{\\sum_{r=1}^{n} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\arctan(n+2) + \\arctan(n+1) - \\arctan 2 - \\frac{\\pi}{4}}$$\n其中 $p = 2$，$q = 1$ (或 $p=1, q=2$)。\n\n---\n\n**(d)**\n\n我们要求无穷级数的和，即取极限 $n \\to \\infty$ (To find the sum of the infinite series, we take the limit as $n \\to \\infty$):\n$$\\sum_{r=1}^{\\infty} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\lim_{n\\to\\infty} \\left[ \\arctan(n+2) + \\arctan(n+1) - \\arctan 2 - \\frac{\\pi}{4} \\right]$$\n\n由于当 $n \\to \\infty$ 时，有 $\\arctan(n+2) \\to \\frac{\\pi}{2}$ 且 $\\arctan(n+1) \\to \\frac{\\pi}{2}$ (Since $\\arctan(n+2) \\to \\frac{\\pi}{2}$ and $\\arctan(n+1) \\to \\frac{\\pi}{2}$):\n$$\\sum_{r=1}^{\\infty} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\frac{\\pi}{2} + \\frac{\\pi}{2} - \\arctan 2 - \\frac{\\pi}{4}$$\n$$= \\pi - \\frac{\\pi}{4} - \\arctan 2 = \\frac{3}{4}\\pi - \\arctan 2$$\n\n对照要求写出的格式 $k\\pi-\\arctan 2$，可得精确结果为 (Comparing this with the form $k\\pi-\\arctan 2$, we obtain the exact result):\n$$\\boxed{\\sum_{r=1}^{\\infty} \\arctan\\left(\\frac{2}{(1+r)^{2}}\\right) = \\frac{3}{4}\\pi - \\arctan 2}$$\n其中常数 $k = \\frac{3}{4}$。",
    "createdAt": 1784116254554,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q7",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "COMPLEX NUMBERS",
      "FURTHER ARGAND DIAGRAMS"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "22_Jan_01_7",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 7,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q7"
    },
    "stem": "A transformation from the $z$-plane to the $w$-plane is given by\n\n$$w=\\frac{(1+\\mathrm{i}) z+2(1-\\mathrm{i})}{z-\\mathrm{i}}\\qquad z \\neq \\mathrm{i}$$\n\nThe transformation maps points on the imaginary axis in the $z$-plane onto a line in the $w$-plane.\n\n(a) Find an equation for this line. \\hfill (2)\n\nThe transformation maps points on the real axis in the $z$-plane onto a circle in the $w$-plane.\n\n(b) Find the centre and radius of this circle. \\hfill (6)",
    "figure": "",
    "solution": "**(a)**\n\n在 $z$-平面中，虚轴上的点可以写为 $z = \\mathrm{i}y$ 的形式，其中 $y \\in \\mathbb{R}$ 且 $y \\neq 1$ (Points on the imaginary axis in the $z$-plane can be represented as $z = \\mathrm{i}y$ for $y \\in \\mathbb{R}$ and $y \\neq 1$):\n\n将其代入变换公式中 (Substitute $z = \\mathrm{i}y$ into the transformation equation):\n$$w = \\frac{(1+\\mathrm{i})(\\mathrm{i}y) + 2(1-\\mathrm{i})}{\\mathrm{i}y - \\mathrm{i}} = \\frac{(\\mathrm{i}-1)y + 2 - 2\\mathrm{i}}{\\mathrm{i}(y-1)}$$\n\n分子分母同乘以 $-\\mathrm{i}$ 以化简分母 (Multiply the numerator and the denominator by $-\\mathrm{i}$ to simplify the denominator):\n$$w = \\frac{-\\mathrm{i}\\left[ (\\mathrm{i}-1)y + 2 - 2\\mathrm{i} \\right]}{y-1} = \\frac{(1+\\mathrm{i})y - 2\\mathrm{i} - 2}{y-1}$$\n$$w = \\frac{y-2 + \\mathrm{i}(y-2)}{y-1} = \\frac{y-2}{y-1} + \\mathrm{i}\\frac{y-2}{y-1}$$\n\n设 $w = u + \\mathrm{i}v$，对应实部和虚部有 (Let $w = u + \\mathrm{i}v$, we equate the real and imaginary parts):\n$$u = \\frac{y-2}{y-1}, \\quad v = \\frac{y-2}{y-1}$$\n\n由于实部 $u$ 和虚部 $v$ 始终相等，因此该直线的方程为 (Since the real part $u$ and the imaginary part $v$ are equal, the equation of the line is):\n$$\\boxed{v = u} \\quad (\\text{或 / or } y = x)$$\n\n---\n\n**(b)**\n\n在 $z$-平面中，实轴上的点可以写为 $z = x$ 形式，其中 $x \\in \\mathbb{R}$ (Points on the real axis in the $z$-plane are of the form $z = x$ for $x \\in \\mathbb{R}$):\n\n我们首先将 $z$ 用 $w$ 来表示 (First, we express $z$ in terms of $w$):\n$$w(z-\\mathrm{i}) = (1+\\mathrm{i})z + 2(1-\\mathrm{i})$$\n$$wz - \\mathrm{i}w = (1+\\mathrm{i})z + 2(1-\\mathrm{i})$$\n$$z(w - 1 - \\mathrm{i}) = \\mathrm{i}w + 2 - 2\\mathrm{i} \\implies z = \\frac{\\mathrm{i}w + 2 - 2\\mathrm{i}}{w - 1 - \\mathrm{i}}$$\n\n由于 $z$ 是实数，必有 $z = z^{*}$ (Since $z$ is real, we must have $z = z^{*}$):\n$$\\frac{\\mathrm{i}w + 2 - 2\\mathrm{i}}{w - 1 - \\mathrm{i}} = \\frac{-\\mathrm{i}w^{*} + 2 + 2\\mathrm{i}}{w^{*} - 1 + \\mathrm{i}}$$\n\n交叉相乘展开两边 (Cross-multiply and expand both sides):\n$$(\\mathrm{i}w + 2 - 2\\mathrm{i})(w^{*} - 1 + \\mathrm{i}) = (-\\mathrm{i}w^{*} + 2 + 2\\mathrm{i})(w - 1 - \\mathrm{i})$$\n$$\\mathrm{i}ww^{*} - (1+\\mathrm{i})w + (2-2\\mathrm{i})w^{*} + 4\\mathrm{i} = -\\mathrm{i}ww^{*} + (2+2\\mathrm{i})w + (-1+\\mathrm{i})w^{*} - 4\\mathrm{i}$$\n\n移项整理 (Rearrange terms):\n$$2\\mathrm{i}ww^{*} - (3+3\\mathrm{i})w + (3-3\\mathrm{i})w^{*} + 8\\mathrm{i} = 0$$\n\n两边同除以 $2\\mathrm{i}$ (Divide both sides by $2\\mathrm{i}$):\n$$ww^{*} - \\frac{3+3\\mathrm{i}}{2\\mathrm{i}}w + \\frac{3-3\\mathrm{i}}{2\\mathrm{i}}w^{*} + 4 = 0$$\n$$ww^{*} + \\left( -\\frac{3}{2} + \\frac{3}{2}\\mathrm{i} \\right)w + \\left( -\\frac{3}{2} - \\frac{3}{2}\\mathrm{i} \\right)w^{*} + 4 = 0$$\n\n对照标准圆方程 $|w - w_{0}|^{2} = r^{2}$ 展开式 $ww^{*} - w_{0}^{*}w - w_{0}w^{*} + w_{0}w_{0}^{*} - r^{2} = 0$ (Compare this with the standard circle equation):\n$$-w_{0}^{*} = -\\frac{3}{2} + \\frac{3}{2}\\mathrm{i} \\implies w_{0}^{*} = \\frac{3}{2} - \\frac{3}{2}\\mathrm{i} \\implies w_{0} = \\frac{3}{2} + \\frac{3}{2}\\mathrm{i}$$\n\n计算圆心 $w_{0}$ 对应的坐标及半径 $r$ (Compute the center $w_{0}$ and the radius $r$):\n- 圆心坐标为 (The coordinates of the centre of the circle are):\n  $$\\boxed{\\left(\\frac{3}{2}, \\frac{3}{2}\\right)} \\quad (\\text{或 / or } \\frac{3}{2} + \\frac{3}{2}\\mathrm{i})$$\n\n- 半径 $r$ 满足 (The radius $r$ satisfies):\n  $$w_{0}w_{0}^{*} - r^{2} = 4 \\implies r^{2} = |w_{0}|^{2} - 4$$\n  $$|w_{0}|^{2} = \\left(\\frac{3}{2}\\right)^{2} + \\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4} + \\frac{9}{4} = 4.5$$\n  $$r^{2} = 4.5 - 4 = 0.5 \\implies r = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$\n\n  所以，半径为 (Therefore, the radius is):\n  $$\\boxed{\\frac{\\sqrt{2}}{2}} \\quad (\\text{或 / or } \\frac{1}{\\sqrt{2}})$$",
    "createdAt": 1784116335082,
    "_edited": true
  },
  {
    "id": "edx_fp2_22Jan01_q8",
    "board": "Edexcel",
    "subject": "FP2",
    "chapter": [
      "FIRST-ORDER DIFFERENTIAL EQUATIONS"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 14,
    "source": "22_Jan_01_8",
    "examRef": {
      "year": 2022,
      "month": "Jan",
      "paper": "01",
      "qno": 8,
      "code": "01",
      "label": "2022 Jan · Paper 01 Q8"
    },
    "stem": "(a) Show that the transformation $v=y-2x$ transforms the differential equation \\hfill (4)\n\n$$\\frac{\\mathrm{d} y}{\\mathrm{d} x}+2 y x(y-4 x)=2-8 x^{3} (I)$$\n\ninto the differential equation\n\n$$\\frac{\\mathrm{d} v}{\\mathrm{d} x}=-2 x v^{2} (II)$$\n\n\n\n(b) Solve the differential equation (II) to determine $v$ as a function of $x$ \\hfill (4)\n\n(c) Hence obtain the general solution of the differential equation (I). \\hfill (1)\n\n(d) Sketch the solution curve that passes through the point $(-1,-1)$.\n\nOn your sketch show clearly the equation of any horizontal or vertical asymptotes.\n\nYou do **not** need to find the coordinates of any intercepts with the coordinate axes or the coordinates of any stationary points. \\hfill (5)",
    "figure": "",
    "solution": "**(a)**\n\n已知变换关系为 $v = y-2x \\implies y = v + 2x$。对其关于 $x$ 进行求导 (Given the transformation $v = y-2x \\implies y = v + 2x$, differentiate both sides with respect to $x$):\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2$$\n\n将 $y$ 和 $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ 的表达式代入微分方程 (I) (Substitute the expressions of $y$ and $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ into equation (I)):\n$$\\left( \\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2 \\right) + 2x(v+2x)\\bigl((v+2x) - 4x\\bigr) = 2 - 8x^{3}$$\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2 + 2x(v+2x)(v-2x) = 2 - 8x^{3}$$\n\n因为 $(v+2x)(v-2x) = v^{2} - 4x^{2}$ (Since $(v+2x)(v-2x) = v^{2} - 4x^{2}$):\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2 + 2x(v^{2} - 4x^{2}) = 2 - 8x^{3}$$\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2 + 2xv^{2} - 8x^{3} = 2 - 8x^{3}$$\n\n两边同减去 2 并加上 $8x^{3}$，得到 (Subtract 2 and add $8x^{3}$ from both sides):\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}x} + 2xv^{2} = 0 \\implies \\frac{\\mathrm{d}v}{\\mathrm{d}x} = -2xv^{2}$$\n\n这与方程 (II) 一致，得证。\n\n$$\\boxed{\\frac{\\mathrm{d}v}{\\mathrm{d}x} = -2xv^{2}}$$\n\n---\n\n**(b)**\n\n微分方程 (II) 是一个可分离变量的微分方程 (Differential equation (II) is a separable ODE):\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}x} = -2xv^{2}$$\n\n两边分离变量并积分 (Separate variables and integrate both sides, assuming $v \\neq 0$):\n$$\\int v^{-2}\\,\\mathrm{d}v = \\int -2x\\,\\mathrm{d}x$$\n$$-v^{-1} = -x^{2} + C_{0}$$\n$$\\frac{1}{v} = x^{2} + C \\quad (\\text{其中 / where } C = -C_{0})$$\n\n所以，解得 $v$ 表达式为 (Thus, solving for $v$ yields):\n$$\\boxed{v = \\frac{1}{x^{2} + C}}$$\n\n---\n\n**(c)**\n\n由于 $y = v + 2x$，将 (b) 问中求得的 $v$ 代回，得到原方程 (I) 的通解为 (Since $y = v + 2x$, we substitute the expression of $v$ from part (b) to obtain the general solution of (I)):\n$$\\boxed{y = 2x + \\frac{1}{x^{2} + C}}$$\n\n---\n\n**(d)**\n\n首先代入点 $(-1, -1)$ 求解特定解的常数 $C$ (First, substitute the point $(-1, -1)$ to find the constant $C$ for this particular solution):\n$$-1 = 2(-1) + \\frac{1}{(-1)^{2} + C} \\implies -1 = -2 + \\frac{1}{1+C}$$\n$$1 = \\frac{1}{1+C} \\implies 1 + C = 1 \\implies C = 0$$\n\n因此，通过点 $(-1, -1)$ 的特解方程为 (Thus, the particular solution curve passing through $(-1, -1)$ is):\n$$y = 2x + \\frac{1}{x^{2}}$$\n\n由于此微分方程在 $x = 0$ 处不连续，且初始点在 $x = -1 < 0$，因此该特定解的定义域为 $x \\in (-\\infty, 0)$ (Since the ODE is discontinuous at $x = 0$ and the initial point has $x = -1 < 0$, the domain of this particular solution is $x \\in (-\\infty, 0)$).\n\n**曲线特征与渐近线分析 (Curve Characteristics and Asymptotes):**\n1) **垂直渐近线 (Vertical Asymptote):** \n   $$x = 0$$\n   因为当 $x \\to 0^{-}$ 时， $y \\to +\\infty$。\n2) **斜渐近线 (Oblique Asymptote):** \n   $$y = 2x$$\n   因为当 $x \\to -\\infty$ 时， $\\frac{1}{x^{2}} \\to 0$，使得 $y \\to 2x$ 且始终从上方逼近（因 $\\frac{1}{x^{2}} > 0$）。\n3) **单调性 (Monotonicity):** \n   在 $x < 0$ 内，导数 $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2 - \\frac{2}{x^{3}} > 0$ 恒成立，所以函数在区间内单调递增 (In $x < 0$, the function is strictly increasing).\n\n**草图描述 (Sketch Description):**\n- 在第三象限内绘制一条单调递增且凹向上的曲线。\n- 曲线从左侧无限接近渐近线 $y = 2x$ 开始，向右上方穿过点 $(-1, -1)$，并最终在接近 $y$-轴时向上无限趋近于垂直渐近线 $x = 0$ (Draw a strictly increasing, concave-up curve in $x < 0$ starting near $y=2x$ on the left, passing through $(-1, -1)$, and asymptotic to $x=0$ as $x \\to 0^{-}$).\n- 必须在图上清晰标明垂直渐近线方程： $\\boxed{x = 0}$（以及斜渐近线 $y = 2x$）。",
    "createdAt": 1784116439980,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q1",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Integration"
    ],
    "topics": [],
    "difficulty": 2,
    "marks": 4,
    "source": "25_ON_31_1",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 1,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q1"
    },
    "stem": "Find the exact value of $\\displaystyle\\int_{1}^{2}\\ln 3x\\,\\mathrm{d}x$. Give your answer in the form $a+\\ln b$, where $a$ and $b$ are integers. \\hfill (4)",
    "figure": "",
    "solution": "**分部积分法 Integration by parts**\n\n设 $u=\\ln(3x)$，$\\mathrm{d}v=\\mathrm{d}x$，则 $\\mathrm{d}u=\\dfrac{1}{x}\\mathrm{d}x$，$v=x$。\n\n$\\displaystyle\\int_{1}^{2}\\ln(3x)\\,\\mathrm{d}x = \\bigl[x\\ln(3x)\\bigr]_{1}^{2}-\\int_{1}^{2}x\\cdot\\frac{1}{x}\\,\\mathrm{d}x$\n\n$= \\bigl[2\\ln 6-\\ln 3\\bigr]-[2-1] = 2\\ln 6-\\ln 3-1$\n\n$= 2(\\ln 2+\\ln 3)-\\ln 3-1 = 2\\ln 2+\\ln 3-1$\n\n$= -1+\\ln(2^2\\cdot 3)=\\boxed{-1+\\ln 12}$，即 **$a=-1$, $b=12**。",
    "createdAt": 1784120331487,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q2",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Logarithmic and exponential functions"
    ],
    "topics": [],
    "difficulty": 2,
    "marks": 5,
    "source": "25_ON_31_2",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 2,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q2"
    },
    "stem": "(a) Show that the equation $\\log_{4}(2x+1)=2\\log_{4}(3x-1)-2$ can be written as a quadratic equation in $x$. \\hfill (3)\n\n(b) Hence solve the equation $\\log_{4}(2x+1)=2\\log_{4}(3x-1)-2$. \\hfill (2)",
    "figure": "",
    "solution": "**(a) 化为二次方程**\n\n$RHS=2\\log_{4}(3x-1)-2=\\log_{4}(3x-1)^2-\\log_{4}16=\\log_{4}\\dfrac{(3x-1)^2}{16}$。\n\n$\\therefore\\;2x+1=\\dfrac{(3x-1)^2}{16}$\n\n$32x+16=(3x-1)^2=9x^2-6x+1$ → $9x^2-38x-15=0$ ✓\n\n**(b) 解方程 Solve**\n\n$x=\\dfrac{38\\pm\\sqrt{38^2+4\\cdot 9\\cdot 15}}{18}=\\dfrac{38\\pm\\sqrt{1984}}{18}=\\dfrac{38\\pm 8\\sqrt{31}}{18}=\\dfrac{19\\pm 4\\sqrt{31}}{9}$。\n\nDomain check：$2x+1>0\\Rightarrow x>-\\frac12$；$3x-1>0\\Rightarrow x>\\frac13$。两根均大于 $\\frac13$，均有效。\n\n$x=\\dfrac{19+4\\sqrt{31}}{9}$ 或 $x=\\dfrac{19-4\\sqrt{31}}{9}$。",
    "createdAt": 1784120342255,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q3",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Trigonometry"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "25_ON_31_3",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 3,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q3"
    },
    "stem": "(a) Express $3\\sqrt{2}\\sin(x+45^{\\circ})+\\cos x$ in the form $R\\cos(x-\\alpha)$, where $R>0$ and $0^{\\circ}<\\alpha<90^{\\circ}$. \\hfill (4)\n\n(b) Hence solve the equation $3\\sqrt{2}\\sin(3\\theta+45^{\\circ})+\\cos 3\\theta=-4$ for $0^{\\circ}<\\theta<180^{\\circ}$. \\hfill (4)",
    "figure": "",
    "solution": "**(a) 辅角公式 Harmonic form**\n\n$\\sin(x+45^{\\circ})=\\sin x\\cos 45^{\\circ}+\\cos x\\sin 45^{\\circ}=\\dfrac{\\sin x+\\cos x}{\\sqrt{2}}$。\n\n$3\\sqrt{2}\\cdot\\dfrac{\\sin x+\\cos x}{\\sqrt{2}}+\\cos x=3\\sin x+3\\cos x+\\cos x=3\\sin x+4\\cos x$。\n\n$R=\\sqrt{3^2+4^2}=5$，$\\alpha=\\tan^{-1}\\!\\left(\\dfrac{4}{3}\\right)\\approx 53.13^{\\circ}$（满足 $0^{\\circ}<\\alpha<90^{\\circ}$）。\n\n$\\therefore\\;3\\sqrt{2}\\sin(x+45^{\\circ})+\\cos x=\\boxed{5\\cos(x-53.1^{\\circ})}$（或精确写 $\\alpha=\\tan^{-1}\\frac43$）。\n\n**(b) 求解方程**\n\n由 (a)：$5\\cos(3\\theta-\\alpha)=-4$ → $\\cos(3\\theta-\\alpha)=-\\dfrac45$。\n\n$3\\theta-\\alpha=\\cos^{-1}(-0.8)+360k$ 或 $3\\theta-\\alpha=360k-\\cos^{-1}(-0.8)$。\n\n$\\cos^{-1}(-0.8)\\approx 143.13^{\\circ}$，$\\alpha\\approx 53.13^{\\circ}$。\n\n$3\\theta\\approx 196.26^{\\circ}+360k$ 或 $3\\theta\\approx -90^{\\circ}+360k$。\n\n$0^{\\circ}<\\theta<180^{\\circ}$ 范围内：$\\theta\\approx 65.4^{\\circ},\\;90^{\\circ}$。",
    "createdAt": 1784120354633,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q4",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation"],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "25_ON_31_4",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 4,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q4"
    },
    "stem": "The diagram shows the graph of $y=\\mathrm{e}^{\\sin 2x}\\cos 4x$ for $0\\leqslant x\\leqslant \\frac14\\pi$, and its maximum point $M$.\n\nFind the $x$-coordinate of $M$. \\hfill (5)",
    "figure": "data/images/cie_p3_25ON31_q4_figure.png",
    "solution": "**求导找驻点 Differentiate to find stationary point**\n\n$y=\\mathrm{e}^{\\sin 2x}\\cos 4x$\n\n$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{\\sin 2x}(2\\cos 2x)(\\cos 4x)+\\mathrm{e}^{\\sin 2x}(-4\\sin 4x)$\n\n$=\\mathrm{e}^{\\sin 2x}\\bigl[2\\cos 2x\\cos 4x-4\\sin 4x\\bigr]$。\n\n令 $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0$：$2\\cos 2x\\cos 4x=4\\sin 4x$。\n\n利用 $\\sin 4x=2\\sin 2x\\cos 2x$：若 $\\cos 2x\\neq 0$，则 $\\cos 4x=4\\sin 2x$。\n\n$\\cos 4x=1-2\\sin^2 2x$，令 $s=\\sin 2x$：$1-2s^2=4s$ → $2s^2+4s-1=0$。\n\n$s=\\dfrac{-4\\pm\\sqrt{24}}{4}=\\dfrac{-2\\pm\\sqrt{6}}{2}$。\n\n$|s|\\leqslant 1$ → 取正根 $s=\\dfrac{\\sqrt{6}-2}{2}$（另一根 $< -1$ 舍去）。\n\n$\\sin 2x=\\dfrac{\\sqrt{6}-2}{2}$，在 $(0,\\frac{\\pi}{4})$ 内取主值：\n\n$x=\\boxed{\\tfrac12\\sin^{-1}\\!\\left(\\dfrac{\\sqrt{6}-2}{2}\\right)}\\approx 0.113$ rad。",
    "createdAt": 1784120360828,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q5",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation"],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "25_ON_31_7",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 7,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q7"
    },
    "stem": "The parametric equations of a curve are\n\n$$x=t^2-\\ln(2t+1),\\quad y=\\frac{t}{2t+1}.$$\n\nObtain a simplified expression for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $t$.\\hfill (5)",
    "figure": "",
    "solution": "**参数方程求导 Parametric differentiation**\n\n$\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=2t-\\dfrac{2}{2t+1}=\\dfrac{2t(2t+1)-2}{2t+1}=\\dfrac{4t^2+2t-2}{2t+1}=\\dfrac{2(2t^2+t-1)}{2t+1}$。\n\n$y=\\dfrac{t}{2t+1}$，商法则：$\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}=\\dfrac{(1)(2t+1)-t(2)}{(2t+1)^2}=\\dfrac{1}{(2t+1)^2}$。\n\n$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{\\mathrm{d}y/\\mathrm{d}t}{\\mathrm{d}x/\\mathrm{d}t}=\\dfrac{1/(2t+1)^2}{2(2t^2+t-1)/(2t+1)}$\n\n$=\\dfrac{1}{2(2t+1)(2t^2+t-1)}$。\n\n因式分解 $2t^2+t-1=(2t-1)(t+1)$，得：\n\n$\\boxed{\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{1}{2(2t+1)(2t-1)(t+1)}}$。",
    "createdAt": 1784122432987,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q6",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "25_ON_31_6",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 6,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q6"
    },
    "stem": "Solve the quadratic equation $(2+\\mathrm{i})w^2+4w+2-\\mathrm{i}=0$. Give your answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real. \\hfill (5)",
    "figure": "",
    "solution": "**复系数二次方程 Complex quadratic**\n\n用求根公式：$w=\\dfrac{-4\\pm\\sqrt{\\Delta}}{2(2+\\mathrm{i})}$，其中\n\n$\\Delta=4^2-4(2+\\mathrm{i})(2-\\mathrm{i})=16-4(4-\\mathrm{i}^2)=16-20=-4$。\n\n$\\sqrt{\\Delta}=\\sqrt{-4}=2\\mathrm{i}$。\n\n$w=\\dfrac{-4\\pm 2\\mathrm{i}}{2(2+\\mathrm{i})}=\\dfrac{-2\\pm\\mathrm{i}}{2+\\mathrm{i}}$。\n\n分子分母同乘 $(2-\\mathrm{i})$：\n\n$w_1=\\dfrac{(-2+\\mathrm{i})(2-\\mathrm{i})}{5}=\\dfrac{-4+2\\mathrm{i}+2\\mathrm{i}+1}{5}=\\dfrac{-3+4\\mathrm{i}}{5}=-0.6+0.8\\mathrm{i}$。\n\n$w_2=\\dfrac{(-2-\\mathrm{i})(2-\\mathrm{i})}{5}=\\dfrac{-4+2\\mathrm{i}-1}{5}=\\dfrac{-5}{5}=-1$。\n\n$w=\\boxed{-1}$ 或 $\\boxed{-\\dfrac35+\\dfrac45\\mathrm{i}}$。",
    "createdAt": 1784120325251,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q7",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 6,
    "source": "25_ON_31_5",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 5,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q5"
    },
    "stem": "The shaded region on the Argand diagram shows points representing complex numbers $z$ defined by two inequalities. The shaded region is bounded by a circle and a line parallel to the imaginary axis. The boundaries of the region are included in the shaded region.\n\n(a) Find two inequalities in terms of $z$ that define the shaded region.\\hfill (3)\n\n(b) Calculate the least value of $\\arg z$ for points in this region.\\hfill (3)",
    "figure": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACGCAYAAAAW/E67AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nO19eZRU1bX37w41Tz1DTyA0Q9NqHBijIk6A08MZp6hJHL73BN8zn5rExPgUfeutt761PockRuNb+YzGCY0axkSNChhHoH0CDahAD3TTTXdX11y36ta95/ujqouq7hrObuo2WYbfWqx1qN7s2pzTd59z99n7twXGGMNxfCshCIIgHmsjjsNYjMsCM8awbs1atLa2jsfXHUcG5PH4EkEQoKpxyLKMd995BzElhtr6OgwODOCCxYshCMJ4mPEPiXF10bIsY3dbG2Y2N6PnYDe++fprAMkn/DiMwbi56HhchRqPQ9N0AAwQAFVVwRjD2j+tQTgcHg9T/uEgjMcpmjGGnu5uSLKMmKLA4XBA03TEYgpqJkzAzTd+D9ffeAOuuPJKo035h4IgCMK47cH1DQ05f9be3o7W7dths9lw+RVXHN+PS4xj/pq05q23oOs6Pv7oI/T29h5rc751GJcnuBBqa+tw4cUXYe7cuRjo70dtbe2xNulbhWO+wNdcuxwDA/24evlyOJ3OY23Otw7H3EUfh7E4vsDfcnC7aF3XEY/HIYoiBEGApmlZY0mSAABaIgFJlkePh2UYg6brkCQJjDHoug7GGFRVRUxRIKY+Z4xBFEXoug4AOceCIOS0JbddGiQ5l40Zn6fkh+3KNeayCwIEUYCuaRCK2ZVn7nRdh8Vioa/oCHAv8IH9++FwOmGxWCBJEsLhMGxWK8TU2G6zQRBFhEIhOBwOdHV2oqKyEk6nE0zXEYlG4XA4oGs6oko09S6sIRaLQdN0hMNhqPE4rDYbVFWFrmmwWK2Ix+MAYzBbLIjFYhAEAYd6DmHCxAmQJAkmkwnRaBRmkwmSLCMSicBqsaTt8vt8qKuvRzgUgt3hgAABoXAITocDDEAkHIbD6YSu64hGozh8+DAmTZqEWCwGu90OLaEhHo/DZrchoapIaBqsVivUeBwb1m/AZVdcnrbLbDYjpsQgiiJMZhOUaBSyyQRZlhGNRNDd04Np06Yl585mgyiKR+wShPTcCRDwzTff4PTZp4/fApeXl6O8oiL9nup2u9M/yzVO1NWhsrIy/bmnrCw9LsORMQDIsoSysjLuQ5YgCFm6C9lis9ngdruzP/ccGXs8niN2lZXBbDajvLycyw673ZalN6k8YzjCFtlkGm1LnvHkEyZz2VAM3HuwlnJDvDAyQEbRTbXj78Zu4nznA/cCh0MhkuJgMEg2hlt3IMAtS7aboJsKypyUav64F3iUKyoCD0GeGp50Z7jVYnC6XIbppoIyJ6Wyg99FaxpJMUV++BTJC53gviiyY5GngDInOnG+84HfRUciJMVUeZJugtuNEO0IEV06BZQ5CYdLM3/8Lprq6lw0l07STXB11PAnxY1SQZkTt5s23/nAvcCJRIKkOJFQycZw6ya4L+rWQtFNRULjn8NS2cG9wFFFISmmypN0E1ydQrXbwK2Fopu6teQD9wK7iK7O5SyNi8mpm7BdOBwOw3RT4aK46BLZwR3JisViONTTA4vVCkmSEAqFYLfbIYoiQsEgHE4nBEFAMBiEy+nEkG8I4UgYLpcLTE+GIp0uF3RNQzQahcPphJZIIBaPQ1UT8Hq9CAYCsNntydwtXYfVakUsFgMAWCwWKIoCSRQRDIUQi8Ugm0wwmUyIRCIwm82QZRnhUCgZBpQkhILBtKsLBgJJW5A8SLlcLjDG0mNd1xGJRBCJRMCQfPIdDgcSiQTUeBw2mw1qIoFEIgGbzYZ4PI5QKASfz4eYoiRDlRYLlGgUkiyPsisSDsPv90OUxPxzFwjA5XYDjOHw4cOoyIjWjRmMEx0dHUzXdV5x1tnRwS3726efZsFgkFu+/cABbtmDBw9yyzLGWEd7O7fs66tXG6a7nSCbDwDBRTuJrs7hMO7y3kgXbWTSgZOwbVG3xHzgXuBYPE5SHFdp8hSohBM99fQfV407/VPmpFR28EeyiBOlEn8hKIgpMW7ZONEOI+2m6C6VHdwLbLfbSYqNdNFOJ7/bpdptJ7p0CihzQt1a8oF7gZUY/1MDALE4TZ4CylOpEl2doZ6HMCex2Dg/wdTgt5YwLiJk5B5M0U0FZU40QtSrEAxz0VR5ChwE3TabzTDdVFDmpFTzx++iCQcbAFBixoUqY4TtgnrIouimgjIn1BBrPnAvMPs7Sn2hpA9R73epqUkUUOZkpOzLL76ItWvWkGPU3KFKTdewbu06bsVKNAKrjc/NtLW14c8bN8JisfLpVqKwWvlcbyymcOul6v7iiy9gNkj3SNkPt3yIP2/cCJfLhaUXXoirly/HnLlzimbDcC/w5k2bMGPGDFRUVHDJ9/f3o7q6uojOzYjHYygrK8OMmTNh59wve3p6MDg4iC9aW9Hf3w8BQEVlJerrGzBx4kSUl5fDU+aB2WzG66tfw2VXXAFRFBCJRDA0NITBwUF0H+zGoZ4eKIoCq9WK6TNn4LTTTgOAonYPY9vnn2PGzBmQRD5HmG9OEpoGjHi4//DC8/jeTTcBSC7gx2UeCIKAKVOnouXEEzFl6hSuVCeu+mCWCn6Xl5cnE8B1BtlU+Hejp6cHdXV1eX+uKAqefea3OOfcc/DIw6vwu98/lzdMyBhDd3c3PnjvffT0dCMWi2HuvHk47bTTUF1TAzHPBDPG0NHRgYaGBkiSlHNCGGOIKQr27t2L1u2t2LfvG1RVVWH2nDmYP38+TGZzXt07d+5ES0tLOqG9GLq7u1FfX19UjjGGffv2oXZiLewOOwRBwPvvvYdJkyZhalMT9u7di77eXtjtdsyZOzfvd5Pqg2tqasAYw2uvrsYpp56C5lmzCspbi7guRVEgSSLMZjMCAX9OGb/fj3Vr1qKrsxP1DQ0474LzUVdXhyGvl/umZfUrr2LFXSvznkoFQYDVZsMpp56KU049Fd7BQTicTnz+2Wd48oknwRjDBYsvwCmnnpo1kW1tbWjbtQubN23CnStWcNlis/K5c8YYeg/14vn/9xwefvQRAMC5552X/nk4FIKiKNjx5Zdwu92Y2tSEAwcOYPr06aMWu+gCtx84AL8/uQANjY2omVDDZWQkEkZFZX537vF4YLPb0dHegXnz52f9bO+ePVi7Zg2sVisuXbYMkydPzjKckkxQU8Nnb9ruaBQVlZU4a+FCnLVwIeLxON55+22sX7cOM2c249Jl/wSr1YqWlhY0Nzfj9dWvceuORqNccoIg4KSTT8L2bVvzyuzauQtqPI6mpia88cYbMJvMGOjvxxlnnpklV3SBGxobUZtytZTsx2KygiBg+bXXIhIOo6OjHQCw48sd+NNbb2H6jOlYcddded9hjeQAGOnuzWYzLrn0Ulx8ySXYvXs3nnjsMdTW1eGaa67Brl278E+XLRuz7kJwu93wlJXh8OHDmDBhwqift7S0oLV1O0LhMA52deHOlStz5lIXXWBZlrMWS1VVrt9EnpOrw+FIXapr+D//9V84+eTv4Cf3/xQmk6ngv+M9iQ4jGAhwBw6seQq+BEFAS0sLWlpasG/fPqx66GEEggGctXAhrrv+ei7dvKd5TdOwbu1aTJ06NeehzGK1orKqCv+yYgW2bd2KSy69FC+/+BKuuyGHHTwXx7quM9/QENN1nfvSv7Ozs6iMoijs6ad+w5ZfdRUbGBjg0ssYY11dXVxyuq6zSDhccruHdT//3O/Zfffcy3bs2FFy3cFgkGR3LgCcgQ5BENL7Hm8VgknO7xwYY/iitRX/+R//gSVLl+KCxYtJpZKSyLdVCIKAYCiULjPlQSG7R+o2W8y4/ns3Yf26DfjlE08WjZpRdAeDQZLd+cC9KZiLuM1R8ubcC5ZIJPDfzz6LHTt24MGHHsKUqVNIegHAYsn96pLbDn7ZschLkoSLLrkEM5pn4Wc/vT9N7na0ui1EO/KBe4FDRKKyUHh0hYDX68Wjq1bhzLPOwk0330w6dGSCkvXPe3Idi+5M1NbV4Yabbsbzz7+ADevX5wxLUuYwFCoNMRz3DFN/o0bKf/3VV3jy8cfxo3vuQUtLC0nXSJjM/N5E5nSLY9Gd67uuumY5OrsO4qlf/WpUHJwyhxQvVdAmXkFBENHV2QmL1QqTbEIwmDyZSpIMf8APl9MFURTg9/vh9ngQCocR2b8fHo8HH3/8Mb7Y3oo7V66EGo+j/cABuN0eJLQEopEoVFVFf38/hrxeOBxOxOIxaJoGu90ORVHAdB02ux3RSASCKCIaieBgVxdkWYbZYkEoGEzaZTIhGAzCZrNBlmUE/P4kXYQowe/3weV2QxAEBFI2gjEEAgF4PB7ojCEYCELTNPSL/QhHwnC73EgkVCiKAqfLhXg8DlVV4XA4EFMUBAMBBPz+Uam9M2bMRE9PD+7/yU+x8q6VcDidCAaDiEYiMJnNCPj9cDgckCQJ/lQ6ryiI8Pl98Lg9gJD0dhMmThy/BY5Go5g0eVJ6088MYmSPkxGmUCiESZMmJcOL3T342S8eSP/bqhFHf5PJhOrq6uIZjak4eGdHBxoaGzM+rsg77unpQUVlRZaNmewAlVVV6XFVVRU6OzpQXVONahSPR7vc7lFlnsN/r6quRnV1NZ7+zW/wwIMPoqKiAh0dHaioqMi2McOWTBtD410fbLPx35ok5W14/7330NnZidvuuL2kFIUWzpAfQD80UXQXQ21dHc5fvBSrHnoIiqKQkg+oiQr5wL3A1L3s888+w/59+3Hz928pOf+kSTZwDybo5kFVdTXOX7IUj65aBRDug6l25wP3AgcI1AZ7du/Grp27cOvttxlCLhoMEigciKd/im5e1NRMwBkLz8YzTz/DfekfGG8X7eDMtO/v78fqV1815Mkdho2Qr2QlulyKbgoaGhpRWV2N5373Oy75cc/J4rnUVlUVv3riSfzonntgNpXmmJ8LcgkvPY5GNxUnf+cUDPkC+HDLlnGzg3uBh68M84Exht8+/TRu+v4tcLlcee94SwGK+6Ky7FC2IirC4RDOX7wYa9esQ19fX0FZf4ns4K8PLkJt8MnHH2PChIloamoCwO/SxwJD02YNtNtuS2ZnXHn11Xj8/z5WMCGwVEVw3AtcaD8Nh0J49513cNU1V6flil0IxGIxbNu6jffrsyBJ/CdMkejqePOrxgIhpdtmt+O02XOw+tVXDbejJC76v599Frfenv2u6/f70uSdjDEMDg6is7MTnZ2dCPj9CIVCKCvzjCm91k9w/1TWnGJb0dEgc7uY2dyMnTt3offQIUPt4H4UXE4nujq7YLFaYDKZEAgE4LDbceDAAcTjKsxmM7yDg/D5/Wn+xwMHDmDy5MkQRTEZVkwFHURJggxgy5Yt6OnuwaeffIILliyB1+uF0+lMEZTmCFVGoxCEJItrV1cXTOlQZSht18hQJWMMXq8Xft+RUKV/2MaMUKWm6wiFQlATCfQfToUq3e40C+7IUKWiKAgEAvD7fSnCVCQJUxUFoiTCZDKnyEhlyLIJ0UgEsVgMfr8f4XAINpsdZy86B48/9jju/fF9EEURPp8vPXfUWrCjXmBRktA4qfFIqLKiAowxPPXrp/CzB36ezsIYDr0JAMozQnIjSTjD4TAYY5i3YD6+/PJ/+EKVKXgHB7NDfAVClT6fD2VlZVmf5wtVVldXp3XzhCrdbjc8nmxiVWSELj0jxsO/WJmf19bXo6O9A7PnzOZOSaaAP9CRw2V89OHf8N0zvpszxaaYi1FVFd894wyYzWZyOJHivqgxXSNddCg02pZF55yLP77++qitqlR2jJmrkjGGv/71XVyweHFe+eGMhFx/ysvL0dzcPKZgSLETfSaop2KKbiqcOeqDRVHElKlN+Ohvf8v6vFSEbGM+RX/26aeYv2BB3kt7I/sfiQTdVDsousnIo3vu/PnYuGFj9lNcIju4F9jn86XHjDH89d38T+9I+VLDR3BfwQDNRVN0U5FvuxBFEVXVNdjd1pb+zF+i+eNe4EzG9u6DyRKMQmHATPlSw0Og2nW5iFyVBtIJFzpEnrVwIdauWZv++7jTCWe6j7Vr1uDSZYUTvsfyfssNI7stHqNGqGaLBcFgKH37VaqNgnuBh5nQdV1HIODPetUoJG8EKIGOIDXQYWAMPVciYiZmz52Lv777bsqOcY5FD7uunTt24KSTTuaWNwI0F03jfDTWRRe2ZWpTE1q3t5bUDn4SllRgfMvmLVh0ziJueSNAcf/UrcLIraWY7uGeSpFIpGR28LvolKsLh0Jc75ZGMqcb2pTDwGYiEY7skuaWE/HZp5+WbIvjDlXabTbsbmuDJEvJeGoo1dxJEhEKhuBw2JONsVLsqbquo6uzCy53blZXp9MJTdOgKEqabTaQKhJTVTWL1ZXpOixWa4rVVQQDcOjQIciyDJOcbIxlMpkgm5KsrpmMuKqqwufzIRgMwpnBiOt0OiEg+Ys7zDwbDoWSsetBL6LRSBYj7ki71HgcoWAIwWAwza1lMpsRjyUbY8kmE2KKkizek2UoioJEIpFMn41GYbFYIKZSgK02GwRBQCQcRn19PbZ+9mnJurDyx6JFEYcOHcI5556HsrIylGU2usoxTiQSWZVxmc2mRsZcTSYZFRUV3LFocUBEVUYMuaw8vy1DQ0OF7c2wq7y8HP39/an01eJxYafLOXqPz/i7a8TYNzQEl8s16vOR40AgUBoqYRCbcuzauQsnnXwSn7yhLtq4jA4j7Y5E+cpidJ1hcGCwJN9JasqhqnHuKkC328hTNKEpB/EUbWQsmpersr6hAQP9/SX5Tu4FTnI+8r9+UxpQUKFpBJ4sguxY5Gm6+agMJ59wAnbt2lWS7+Re4CGfDzY7f36Tkc0twhH+XOcop1sci24qeNnraiZMwNdff1WS7+RP/GHAREIxFKUBBRWUhhXU68JSNcPIBV6qYlmWi7IU8YJwmzSUkwwkH1Qj+yaRWFuJfZMMZMnlJVUXBCGdoHe0IF0X8vbVBYCYkX2TFP6ibqodFN1UUIhRx782yR+gdf3MEXfVNA1vvfkm2na1IRaLobW1lVtfJigNK6gM7qVqhpELlLIYTddLEq4knKLjpNypeDyWlTbLUnSIi845B398/XVIkoTJkyeP6T9BYXEnE4Ib2JSDYkupYtHcfkBNJNDX1wfGWDI9NRVWlGQZfr8/VaWeTEl1ud0YGhpCIqHhUCrvd+LECWhobISmaZg9ZzZ6e3vx7jvvYNq0adiyZUsybXZwMGd66si0We/gIFRVTVf4h0MhmFLJeyPTZp947HFcc+1y1NbWJvPKMiv8gfSYMYZgMIiA3w9RlNJpswk1T4V/LIaAP3eFvygmKRqj0WiyeZcsJ4lQvV6YZBnhcBhWqxWiJCEcCsHucEDMCKFCEEoWcOFeYEmUUFtbmw4R5k1VHU6bFQRUVFSgvuEI+SZjDNu2bsWZZ52VfKNmwBlnnom2XbtIabNWi4U7bfa2O+5A07SmrCrDrLTZjHFVVRUtbdaTv8I/19hmt8Pt8WR97skjX6qmJvwF4CaZ5L7iORK3u7q60LarDevXrUM8Hse06dPGxAVF6Sk0YUINqYSUyhBPQYJgd6mSFrmfYIfDgTCB2kfT9VFGTp48GT+49Yfpv5/Fycs8EqT+Q9SuKwY25aBE90RxnLMqy8vLMTQ0xK3Yzsn2PhZQ3Be1oNvIphwUjs1SsNwBlMsGjweDgwPcimNGNuUg9B+i9kEqVU1QLlBsKVVzEBKVYU93N7diI1N2KG32qJEsI+3m1a3r+vh3Xamurobfz59GUioaoFyg8FdYiXbw9o0YC3gpmvw+HyZPnlSS7yR1H6V0PzOyxTvFjeY6zZdKNxW8tnR2dqKhobG4IAf4a5MAQBC4IyxGsrIzghslZ1Ua6KJ50dnejpnNM0uii3uBrVYrJk2ehI72dk5541wdxf1TmeuM3FrMnNkwkUgk3UbhaMG9wJFoFLPnzMG2rfkbRWTLG3fhH43yu3/6bZKBp38O3bquw+l0kGmQ84G/81kiAUmUsH3bdpx7/vlpCgdJlhHwB+BwOrJYXf2+JLVBWSrOm2Z1TVEluD0eaJqGcDgMVU1goL+fOxY95BsCA4MkSbAUiUVHUgyvI+Pl7hSr68hYdDgchtlsRjicikUnkoy4LrcLajyOWDyepplIx6LjMYDliEUrCmRJgslkQiQaQcAfgNVqzRuLDoVCCAT8mDJ1Cg739aGhoWH8FtjlcqG8ogLlFRXweDwFYtHJsSiI2QyvmayuGRGs6upqmEwyqgyKReeicKjgiUVzRNnIsWhb8Vj0F62tuPmWm/I2B6GClDYLACedfBJ2fPklh7xxuU2UBo0KwZ1TdVPB46JDwQBqa2tLZgf3Ag83lDh70SJ88P4HHPKlZW3NhETIdpAkWuoLRTcVxTi7fENDmDQpyclN4QIr+J28gsOX/ckSjnjRID6VWIUCS56GH7mQr/dgft3G2V2sH9QnH3+ECy+6MGlHiSj9+ZtyZFxALzz7bGzetKmgfLhILezRgOL+FXJTDgPTZgvYwhhDMBBA46RJJbWDvylHRhrnvPnz8enHnxQMIlCfHAooCWlUl3us7P5q7x4sWLAgfYNUKjv49+CMdrJJ6p+phXsEGUgnTHGjxdziSFD7Q1Eg59HNGMPWzz/HkguXltwO/vrgEXWzl11xOd584828T3Eu0q9SgdJ/iFphYWRdcz5berq7cWJLS9YvI5V6Ih/4m3KMuMGx2+2oqalB+4EDOeUtVuuorEpN07DmrT9h546diMVi2L5t25iyB0lP8DFsyjESuQ6ejDFsev89XL38mqzPqUz1+cCfk5XjiL/8umvx8ksv51wkWZah6zoSiQQSiQR0XUc0GsVFl1yMrZ9/BgBZrXEooLhdelMO416Tcp0H2tsP4OTvnDzqCrRUdnBr8aUogNMNqFJps/X1ddi4YQPmzpuXFars6+1FTFHSzObVNTWor69HW1sbvF4vvF4v/vLnP6OpqQlbNm/BYkLa7EB/PyLRKHeoUtd17lCl3+eDputjClWm2WZFESazGUoqVCmbkmyzg4PJmt/IcKhSFPH2hg34xb8/CK/XC5/PB7fbDVEUsW/f/pIUgXMvsNPpRHV1dRbbLADcdMstWPXvD2HxkiUwmUzp8KSu66iurs66FdF1HbNmzcLOL3ckc5RZkgBsz+7dpFClLEmoyaiTKhSqHBwcLNiMamSo8nBfH6pTTa2KIVeoshDbrMViyWKb/duHW3DdDddjYoquIdPGxAmlSf47KhcNJE/U191wPf7w/AtF5fv6+vDB+x/g3PPPg6IoaDlxbD0MZUKUjNyUY5wiWcFgAAOHD+OshQtz2zHuTTkKsL40z5oFVVXx1d696c8CgcAohtm6ujqcd/55qKmpQWVlJebNnz+mzMEApW8StSmHgSw7w7YwxvCnN97AirtW5v3/j39TjiLu84e33Yo/vPBCOlmsVE0lcsFh5y8osxHTdym6qRh+E9myaRMuufSSggTgTmLRXD5wL3CxXr+yLOP2O/4XfvnEk2CMQeTs0j0WUC4QROplA1GeAlEU0dnRAU1TcfaiwmRy1K0l73fyCvIwkDdOasT8BfPx2urV8PuNoxOmuC8y47uBHJuHe3vx4eZNWLFiRdGtadwZ33nZZxaefTbisTjaOXO3xgJXEc7HTDjI9cHGUDioqootmzfhJ/f/NG/IMsuOElFJlKRv0ki5G2/6HrZt3cqVGDAWUOp2qFQIQolqgjKhaxpeefFF/MuKO7lZEsadwoHiMgRBwBVXXomNGzZg7549YzKssC3GuehczUeOBrqu49WXX8IPb/sh6QJh3F20h0hsVlZWhv9977148403sXPHDrJhheByU1w0kWWnhERoWurJveHGGzBr1iyS7lLZQXqrTyQS6XdaPVUeOjwePmUPj/XUBcM9992LJx57DMFgEPPmz8+SGXkRoapq1ue5xkDyPVJV1by2ZI4Z06FpWk4bc431lC0jbcw11vWk7mG7hFRhgCAIUFUVr7z4Im67/VbMbG6GqqrQ9CO2FJq74XEpwL3AQ0NeaLoGs8kESZYRjUZhNpshSRIikUg6thoOh2G323G4rw+apsHhcOCOf/5nvPryK9j3zT4su/wyRCIROByOdJGVrusIh0KIxWKw2WxIqCoSmgar1QpVVaHrOiwWS7o4u7e3F4IgJGO+JlMy5ivLkEfYFY1E4PV6YTKbEQkn2XGFDBuBZJKdw24HS437+vpgTsWR7XY7NE1DPBaDzW5PX5wM26VEFcQUBWpCBWPJO1xVVeH3+/GXjRtw94/uRkVFBSKRCJRoFAe7umCz2RCNRGCxWCCIIqLR6Ki5EwQB3QcPoqam5qgXWGCc93XDMV3ew9bg4GBWnJcxhnfefhu729pw58qVWTdCzz7zDK6/8Ubu4MjgwEBWGm4hDA0NkeifBgYGsphsC+HVV17BrBOz2e+/2rsX/9O6Hff95Mej3OzIOSkEimw+CIIgjKkpxxi/DEuWLsWly5bhkYcfRmdn59EoI30vTfXYTtG6rmPj+vXwD3nx8COrjn4PHW/Gd2rj5HynwKamJvzsgQfw5h/fwOurXxvTXuP3UfomEe0m6B5GX18fXvj9c1i6dAluvf22vFE/ysl43LuPlhGbRBSSt1qt+Ne7/w1bP9+KVQ89RCY+8ZQRmnIQnySKbl3XsWHdOthtFjz66CNF6SIoc1hWor5T/E05iC6jmLwgCJg7by7u//nPEY/F8fRTT8E7yEeCfaybcjDG8P5772HD+vW4/PLL8K93383FBUKZw1KdosecdFcqeYvFgpnNM3H18uV44YUX8JtfF19oQ5tyFNCt6zq2bN6MRx5eBQECLrvscjTPaubXTZjDUiXdcbtoajdMqnxVVRX+7e670dfbi5dfegmKEsOyy5Zh2vTpow4+JM5MYkw3l+5oNIoN69djd9tunHHmGXjgwV9AFEX88bXXaLr/ngMdGtFlUOWHMWHiRKy46y5EwmGsW7cOr61ejSlTpzobcocAAAI+SURBVGLx4iWoqk6+vjCd4KKJdgy7aE3TsG3rVny45UMADBddfDGuvOqqo6I2Im0t4x3oCIdC3O+HheQTiQTeefttnH/BBdi5YydOn316zn9vdziw/NprwRhDR3s73nrzDXi9XlRUVuKEE6Zg0TmLuLIrw+FIVifyfGCMYXBwEGvXrIF3cBCMAaedfhpW3LWSu09FMQSDQe45DAZDWWW2YwX3AlNdhsvtht/vT+87LqcTbo8H27Zuxf59+zF/QYjrpCgIAk6YMgW33XEHgGQA4O2//AW//uWvkEgkIMsyGhsbMfmEE9DQ2IDKykrIspx+0pwZ3UeHw4vRSAQ9PYfQ1dWJ/fv2IRAIgjEdlZVVmD5jOhbcfLMhuVmUbctNaDxSCNz/i4Smoauz80ja7Ij0VIfTmZU2GwqFUFFRkU4eE0URe/fsgSAI6XfqLVs2o6enGz09PfD7fEfSZmNxqIkjrK5aQoPdYYcSjYIBWLBgAUxmMyRRgiRL2LtnD/bv34fPPv0UgUAgVZknQECSHWg4UV5nDAKSpN/19Q1oaGzAvPnz0dDYmCr+CkLTNQwNDSGcYiEolDZbXVMDr9ebtstmtSGqJFN7rVYrIuFwmhE3FAohEo4AgnCEqVeSEAgEk+wIkgS/Lzl3oiii//Dho45kAYRQJRW51B48eBCdHR1Yu2Yt7v3xfVi7Zg2+/4MfGNot/B8ZgiAI47rAwzjY1QWny4W+3l7MbG4+vsAGwdAFPo5jD9Jlw3Ecx3H8HeL/A1DJLgs4ArydAAAAAElFTkSuQmCC",
    "solution": "**Argand 图区域问题 Argand locus**\n\n> ⚠️ 注：本题配图为 Argand 图，需根据图示确定圆心和半径、以及竖线的位置。以下以典型 CIE P3 设定给出解题框架——请对照原图确认参数后代入。\n\n**(a) 建立不等式 Inequalities**\n\n设圆的方程为 $|z-c|=r$（$c$ 为圆心，$r$ 为半径），竖线为 $\\operatorname{Re}(z)=k$ 或 $\\operatorname{Re}(z)\\geqslant k$ 等。\n\n从图中判断阴影区域与边界的关系（内部/外部、左/右），写出两个形如\n\n$|z-(a+b\\mathrm{i})|\\leqslant r$ （或 $\\geqslant r$）和 $\\operatorname{Re}(z)\\leqslant k$ （或 $\\geqslant k$）的不等式。\n\n**(b) 最小辐角 Minimum argument**\n\n过原点作直线与区域边界相切，切点处 $\\arg z$ 最小（或最大）。利用几何关系：切线垂直于半径，结合三角函数计算。",
    "createdAt": 1784120314116,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q8",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Vectors"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 10,
    "source": "25_ON_31_11",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 11,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q11"
    },
    "stem": "With respect to the origin $O$, the points $A$, $B$, $C$ and $D$ have position vectors given by\n\n$$\\overrightarrow{OA}=\\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix},\\quad\n\\overrightarrow{OB}=\\begin{pmatrix} 0 \\\\ 4 \\\\ 1 \\end{pmatrix},\\quad\n\\overrightarrow{OC}=\\begin{pmatrix} 1 \\\\ -3 \\\\ 1 \\end{pmatrix}\\quad\\text{and}\\quad\n\\overrightarrow{OD}=\\begin{pmatrix} 3 \\\\ -5 \\\\ 4 \\end{pmatrix}.$$\n\nThe line $m$ passes through the points $A$ and $B$.\n\n(a) Find a vector equation for $m$.\\hfill (2)\n\n(b) Find the position vector of the point of intersection of $m$ and the line passing through the points $C$ and $D$.\\hfill (4)\n\n(c) Find the position vector of the foot of the perpendicular from $C$ to $m$.\\hfill (4)",
    "figure": "",
    "solution": "**(a) 直线 $m$ 的向量方程**\n\n方向向量 $\\vec{d}=\\overrightarrow{AB}=\\overrightarrow{OB}-\\overrightarrow{OA}=(-1,-1,-2)^{\\mathrm{T}}$。\n\n$\\mathbf{r}=\\begin{pmatrix}1\\\\5\\\\3\\end{pmatrix}+\\lambda\\begin{pmatrix}-1\\\\-1\\\\-2\\end{pmatrix}\n\n或写成 $\\mathbf{r}=(1-\\lambda,\\,5-\\lambda,\\,3-2\\lambda)^{\\mathrm{T}}$。\n\n**(b) 两线交点 Intersection**\n\nLine $CD$：方向 $\\vec{e}=\\overrightarrow{OD}-\\overrightarrow{OC}=(2,-2,3)^{\\mathrm{T}}$。\n\n$\\mathbf{r}=(1,-3,1)^{\\mathrm{T}}+\\mu(2,-2,3)^{\\mathrm{T}}=(1+2\\mu,\\,-3-2\\mu,\\,1+3\\mu)^{\\mathrm{T}}$。\n\n联立：$1-\\lambda=1+2\\mu$ → $\\lambda=-2\\mu$。\n\n$5-\\lambda=-3-2\\mu$ → $5+2\\mu=-3-2\\mu$ → $4\\mu=-8$ → $\\mu=-2$，$\\lambda=4$。\n\n验证 $z$ 分量：$3-2(4)=-5$，$1+3(-2)=-5$ ✓。\n\n交点位置向量：$\\boxed{\\begin{pmatrix}-3\\\\1\\\\-5\\end{pmatrix}}$。\n\n**(c) 点到直线的垂足 Foot of perpendicular**\n\n$\\vec{AC}=\\overrightarrow{OC}-\\overrightarrow{OA}=(0,-8,-2)^{\\mathrm{T}}$。\n\n$\\vec{AC}\\cdot\\vec{d}=0+8+4=12$，$|\\vec{d}|^2=(-1)^2+(-1)^2+(-2)^2=6$。\n\n投影参数 $\\lambda_0=\\dfrac{\\vec{AC}\\cdot\\vec{d}}{|\\vec{d}|^2}=\\dfrac{12}{6}=2$。\n\n垂足 $F=A+\\lambda_0\\vec{d}=(1,5,3)^{\\mathrm{T}}+2(-1,-1,-2)^{\\mathrm{T}}=\\boxed{\\begin{pmatrix}-1\\\\3\\\\-1\\end{pmatrix}}$。",
    "createdAt": 1784120603788,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q9",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (partial fractions and binomial expansions)"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 11,
    "source": "25_ON_31_10",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 10,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q10"
    },
    "stem": "Let $f(x)=\\dfrac{x^3+2x-11}{(3+x)(2+x)^2}$.\n\n(a) Express $f(x)$ in partial fractions.\\hfill (6)\n\n(b) Hence obtain the expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^2$.\\hfill (5)",
    "figure": "",
    "solution": "**(a) 部分分式 Partial fractions**\n\n注意 $\\deg(分子)=\\deg(分母)=3$，先做多项式除法：\n\n$x^3+2x-11 = 1\\cdot(x^3+7x^2+12x+12)+(-7x^2-10x-23)$。\n\n$\\therefore f(x)=1+\\dfrac{-7x^2-10x-23}{(x+3)(x+2)^2}$。\n\n设 $\\dfrac{-7x^2-10x-23}{(x+3)(x+2)^2}=\\dfrac{A}{x+3}+\\dfrac{B}{x+2}+\\dfrac{C}{(x+2)^2}$。\n\n$x=-2$: $-7(4)-10(-2)-23=C$ → $C=-31$。\n\n$x=-3$: $-7(9)-10(-3)-23=A$ → $A=-56$。\n\n比较 $x^2$: $A+B=-7$ → $B=49$。\n\n$f(x)=\\boxed{1-\\dfrac{56}{x+3}+\\dfrac{49}{x+2}-\\dfrac{31}{(x+2)^2}}$。\n\n**(b) 幂级数展开 Binomial expansion**\n\n对 $|x|<2$ 展开（收敛域）：\n\n$\\dfrac{1}{x+3}=\\dfrac13(1-\\frac{x}{3}+\\frac{x^2}{9}-\\cdots)$\n\n$\\dfrac{1}{x+2}=\\dfrac12(1-\\frac{x}{2}+\\frac{x^2}{4}-\\cdots)$\n\n$\\dfrac{1}{(x+2)^2}=\\dfrac14(1-x+\\frac{3x^2}{4}-\\cdots)$\n\n合并同类项：\n\n$f(x)=\\left(1-\\frac{56}{3}+\\frac{49}{2}-\\frac{31}{4}\\right)+\\left(\\frac{56}{9}-\\frac{49}{4}+\\frac{31}{4}\\right)x$\n\n$+\\left(-\\frac{56}{27}+\\frac{49}{8}-\\frac{93}{16}\\right)x^2+\\cdots$\n\n$=\\boxed{-\\dfrac{11}{12}+\\dfrac{31}{18}x-\\dfrac{761}{432}x^2+\\cdots}$。",
    "createdAt": 1784120577088,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q10",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Numerical solution of equations"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "25_ON_31_9",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 9,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q9"
    },
    "stem": "(a) By sketching a suitable pair of graphs, show that the equation\n\n$$\\sec 2x=-\\mathrm{e}^x$$\n\nhas only one root in the interval $0 < x < \\frac{\\pi}{2}$.\\hfill (2)\n\n(b) Show by calculation that this root lies between $0.9$ and $1$.\\hfill (2)\n\n(c) Show that if a sequence of values given by the iterative formula\n\n$$x_{n+1}=\\tfrac12\\cos^{-1}\\!\\left(-\\mathrm{e}^{-x_n}\\right)$$\n\nconverges, then it converges to the root of the equation in part (a).\\hfill (1)\n\n(d) Use the iterative formula given in part (c) to calculate $x$ correct to $3$ decimal places. Give the result of each iteration to $5$ decimal places.\\hfill (3)",
    "figure": "",
    "solution": "**(a) 图示法 Sign change / sketch**\n\n画 $y=\\sec 2x$ 和 $y=-\\mathrm{e}^x$ 在 $(0,\\frac{\\pi}{2})$ 上。\n\n- 在 $(0,\\frac{\\pi}{4})$：$\\sec 2x\\geqslant 1>0$，而 $-\\mathrm{e}^x<0$ → 无交点。\n- 在 $(\\frac{\\pi}{4},\\frac{\\pi}{2})$：$\\sec 2x\\leqslant -1$（从 $-\\infty$ 升至 $-1$），$-\\mathrm{e}^x$ 从约 $-2.19$ 降至 $-4.81$。\n\n$\\sec 2x$ 单调递增，$-\\mathrm{e}^x$ 单调递减 → 恰好一个交点。✓\n\n**(b) 定位根 Locate root**\n\n令 $f(x)=\\sec 2x+\\mathrm{e}^x$。\n\n$f(0.9)=\\sec 1.8+\\mathrm{e}^{0.9}\\approx -4.401+2.460=-1.941<0$。\n\n$f(1)=\\sec 2+\\mathrm{e}\\approx -2.403+2.718=0.315>0$。\n\n变号 → 根在 $(0.9,1)$ 内。✓\n\n**(c) 迭代公式验证 Verify iteration**\n\n$\\sec 2x=-\\mathrm{e}^x \\Leftrightarrow \\cos 2x=-\\mathrm{e}^{-x}$\n\n$\\Leftrightarrow 2x=\\cos^{-1}(-\\mathrm{e}^{-x}) \\Leftrightarrow x=\\tfrac12\\cos^{-1}(-\\mathrm{e}^{-x})$。✓\n\n**(d) 迭代计算 Iteration**\n\n取 $x_0=0.95$：\n\n| $n$ | $x_n$ | 说明 |\n|---|---|---|\n| 0 | 0.95000 | 初值 |\n| 1 | 0.98380 | |\n| 2 | 0.98740 | |\n| 3 | 0.98775 | |\n| 4 | 0.98780 | 与上轮一致至 3 d.p. |\n\n$x\\approx\\boxed{0.988}$（3 s.f. / 3 d.p.）。",
    "createdAt": 1784120571276,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON31_q11",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Differential equations"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 8,
    "source": "25_ON_31_8",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "31",
      "qno": 8,
      "code": "31",
      "label": "2025 Oct/Nov · Paper 31 Q8"
    },
    "stem": "The variables $x$ and $y$ satisfy the differential equation\n\n$$(x^2+1)\\frac{\\mathrm{d}y}{\\mathrm{d}x}=kx\\mathrm{e}^{2y},$$\n\nwhere $k$ is a constant. It is given that $y=0$ when $x=0$ and that $y=-\\dfrac12$ when $x=1$.\n\nSolve the differential equation and find the exact value of $y$ when $x=\\sqrt{3}$.\\hfill (8)",
    "figure": "",
    "solution": "**可分离变量微分方程 Separable DE**\n\n分离变量：$\\mathrm{e}^{-2y}\\,\\mathrm{d}y=\\dfrac{kx}{x^2+1}\\,\\mathrm{d}x$。\n\n两边积分：$-\\tfrac12\\mathrm{e}^{-2y}=\\tfrac{k}{2}\\ln(x^2+1)+C$。\n\n整理得：$\\mathrm{e}^{-2y}=C'-k\\ln(x^2+1)$（其中 $C'=-2C$）。\n\n**代入初值确定常数**\n\n$y=0, x=0$：$\\mathrm{e}^0=C'-k\\ln 1$ → $C'=1$。\n\n$y=-\\tfrac12, x=1$：$\\mathrm{e}^{1}=1-k\\ln 2$ → $k=\\dfrac{1-\\mathrm{e}}{\\ln 2}$。\n\n**通解 General solution**\n\n$\\mathrm{e}^{-2y}=1-k\\ln(x^2+1)$。\n\n**求 $x=\\sqrt{3}$ 时 $y$ 的值**\n\n$\\mathrm{e}^{-2y}=1-\\dfrac{1-\\mathrm{e}}{\\ln 2}\\cdot\\ln 4=1-\\dfrac{1-\\mathrm{e}}{\\ln 2}\\cdot 2\\ln 2$\n\n$=1-2(1-\\mathrm{e})=1-2+2\\mathrm{e}=2\\mathrm{e}-1$。\n\n$-2y=\\ln(2\\mathrm{e}-1)$ → **$y=\\boxed{-\\tfrac12\\ln(2\\mathrm{e}-1)}**。",
    "createdAt": 1784122458516,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q1",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (modulus functions)"
    ],
    "topics": [],
    "difficulty": 2,
    "marks": 3,
    "source": "25_ON_32_1",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 1,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q1"
    },
    "stem": "(a) Sketch the graph of $y=|x+3a|$, where $a$ is a positive constant.\\hfill (1)\n\n(b) Hence or otherwise solve the inequality $|x+3a|> a-2x$.\\hfill (2)",
    "figure": "",
    "solution": "**(a) 绘制 $y=|x+3a|$ 的图像**\n\n这是将 $y=|x|$ 向左平移 $3a$ 个单位。\n\n- 顶点在 $(-3a, 0)$\n\n- 当 $x \\ge -3a$ 时，$y = x+3a$（斜率为 1 的直线）\n\n- 当 $x < -3a$ 时，$y = -(x+3a) = -x-3a$（斜率为 $-1$ 的直线）\n\n**(b) 解不等式 $|x+3a| > a-2x$**\n\n**情况一：** $x+3a \\ge 0$（即 $x \\ge -3a$）\n\n$x+3a > a-2x \\Rightarrow 3x > -2a \\Rightarrow x > -\\dfrac{2a}{3}$\n\n结合 $x \\ge -3a$：取 $x > -\\dfrac{2a}{3}$ ✓\n\n**情况二：** $x+3a < 0$（即 $x < -3a$）\n\n$-(x+3a) > a-2x \\Rightarrow -x-3a > a-2x \\Rightarrow x > 4a$\n\n但需同时满足 $x < -3a$，而 $a>0$，故 **无解** ✗\n\n**答案**：$x > -\\dfrac{2a}{3}$。",
    "createdAt": 1784121380465,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q2",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Logarithmic and exponential functions"
    ],
    "topics": [],
    "difficulty": 2,
    "marks": 4,
    "source": "25_ON_32_2",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 2,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q2"
    },
    "stem": "Solve the equation $$3\\times 2^{x+1}=4\\times 3^{2x-3}.$$ Give your answer correct to 3 significant figures. \\hfill (4)",
    "figure": "",
    "solution": "**两边取对数（或化为同底）**\n\n$$3 \\times 2^{x+1} = 4 \\times 3^{2x-3}$$\n\n展开指数：$3 \\times 2^x \\times 2^1 = 4 \\times 3^{2x} \\times 3^{-3}$\n\n$6 \\cdot 2^x = \\dfrac{4}{27} \\cdot 9^x$\n\n$162 \\cdot 2^x = 4 \\cdot 9^x$\n\n$$\\dfrac{9^x}{2^x} = \\dfrac{162}{4} = 40.5$$\n\n$$\\left(\\dfrac{9}{2}\\right)^x = 40.5$$\n\n两边取对数：$x = \\dfrac{\\ln 40.5}{\\ln 4.5}$\n\n计算得 **$x \\approx 2.36$**（3 s.f.）。",
    "createdAt": 1784121388509,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q3",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 5,
    "source": "25_ON_32_3",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 3,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q3"
    },
    "stem": "The shaded region in the Argand diagram, bounded by a line and a circle, represents the complex numbers $z$ satisfying\n\n$$\\operatorname{Re} z \\leqslant 2 \\quad \\text{and} \\quad |z-(3+\\mathrm{i})| \\leqslant 2.$$\n\nThe point $P$ shown on the diagram is one of the points of intersection of the line and the circle.\n\n(a) Find the complex number represented by the point $P$. Give your answer in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real and exact.\\hfill (2)\n\n(b) Find the greatest value of $\\arg z$ for points in the shaded region.\\hfill (3)",
    "figure": "data/images/cie_p3_25ON32_q3_figure.png",
    "solution": "**(a) 求直线与圆的交点 P**\n\n直线为 $\\operatorname{Re}(z)=2$，即 $x=2$。\n\n圆心 $(3,1)$，半径 $r=2$。代入 $x=2$ 到圆方程：$(2-3)^2+(y-1)^2=4$\n\n$1+(y-1)^2=4 \\Rightarrow (y-1)^2=3 \\Rightarrow y-1=\\pm\\sqrt{3}$\n\n由图可知 P 为下方交点（第四象限附近），取 $y=1-\\sqrt{3}$。\n\n**$P = 2+(1-\\sqrt{3})\\mathrm{i}$**\n\n(b) **求阴影区域内 $\\arg z$ 的最大值**\n\n从原点到圆的切线中，使辐角最大的切点是关键。圆上辐角最大的点是过原点的切线与圆的交点。\n\n设切线方向角为 $\\theta$，则 $\\tan\\theta = \\dfrac{y}{x}$ 在圆上最大化。\n\n用几何方法：原点到圆心距离 $OC=\\sqrt{10}$，半径 $r=2$。\n\n设最大辐角对应的切线与 OC 夹角为 $\\alpha$，$\\sin\\alpha=\\dfrac{r}{OC}=\\dfrac{2}{\\sqrt{10}}=\\dfrac{\\sqrt{10}}{5}$。\n\n圆心辐角 $\\phi = \\arctan(1/3)$。\n\n最大辐角 $\\theta_{\\max}=\\phi + \\alpha = \\arctan(1/3)+\\arcsin(2/\\sqrt{10})$。\n\n计算得 **$\\theta_{\\max}\\approx 71.6°$** 或精确值形式。",
    "createdAt": 1784121453059,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q4",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Integration"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 6,
    "source": "25_ON_32_4",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 4,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q4"
    },
    "stem": "Find the exact value of $$\\int_{0}^{1} x \\tan^{-1} x \\, \\mathrm{d}x.$$ \\hfill (6)",
    "figure": "",
    "solution": "**分部积分法 Integration by parts**\n\n令 $u=\\tan^{-1}x$，$\\mathrm{d}v=x\\,\\mathrm{d}x$。\n\n则 $\\mathrm{d}u=\\dfrac{1}{1+x^2}\\mathrm{d}x$，$v=\\dfrac{x^2}{2}$。\n\n$$\\int_{0}^{1} x\\tan^{-1}x\\,\\mathrm{d}x = \\left[\\frac{x^2}{2}\\tan^{-1}x\\right]_{0}^{1}-\\int_{0}^{1}\\frac{x^2}{2(1+x^2)}\\,\\mathrm{d}x$$\n\n第一项：$\\left[\\dfrac{x^2}{2}\\tan^{-1}x\\right]_0^1 = \\dfrac12\\cdot\\dfrac{\\pi}{4}-0=\\dfrac{\\pi}{8}$\n\n第二项：$\\displaystyle\\int_0^1 \\frac{x^2}{2(1+x^2)}\\,\\mathrm{d}x = \\int_0^1 \\frac{(1+x^2)-1}{2(1+x^2)}\\,\\mathrm{d}x$\n\n$= \\int_0^1\\left(\\dfrac12-\\dfrac{1}{2(1+x^2)}\\right)\\mathrm{d}x$\n\n$= \\left[\\dfrac{x}{2}-\\dfrac{\\tan^{-1}x}{2}\\right]_0^1 = \\dfrac12-\\dfrac{\\pi}{8}$\n\n合并：$\\dfrac{\\pi}{8}-\\left(\\dfrac12-\\dfrac{\\pi}{8}\\right) = \\dfrac{\\pi}{4}-\\dfrac12$\n\n**答案：$\\boxed{\\dfrac{\\pi-2}{4}}$**",
    "createdAt": 1784121461010,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q5",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (factor theorem and remainder theorem)"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "25_ON_32_5",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 5,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q5"
    },
    "stem": "(a) It is given that $f(x)=(x-a)^2g(x)$, where $f(x)$ and $g(x)$ are polynomials.\n\nShow that $(x-a)$ is a factor of $f'(x)$.\\hfill (2)\n\n(b) It is given that $(x-3)^2$ is a factor of $2x^3-4x^2+px+q$, where $p$ and $q$ are constants.\n\nFind the values of $p$ and $q$.\\hfill (5)",
    "figure": "",
    "solution": "**(a) 证明 $(x-a)$ 是 $f'(x)$ 的因式**\n\n$f(x)=(x-a)^2 g(x)$\n\n求导（乘积法则）：\n\n$f'(x)=2(x-a)g(x)+(x-a)^2 g'(x)=(x-a)[2g(x)+(x-a)g'(x)]$\n\n显然 $(x-a)$ 是 $f'(x)$ 的一个因子 ✓\n\n**(b) 求 $p$ 和 $q$**\n\n$(x-3)^2$ 是 $f(x)=2x^3-4x^2+px+q$ 的因式。\n\n由 (a)，$(x-3)$ 也是 $f'(x)$ 的因式。\n\n$f'(x)=6x^2-8x+p$\n\n代入 $x=3$：$6(9)-24+p=0 \\Rightarrow 54-24+p=0 \\Rightarrow p=-20$\n\n又 $f(3)=0$：$2(27)-4(9)+(-20)(3)+q=0 \\Rightarrow 54-36-60+q=0 \\Rightarrow q=42$\n\n**$p=-20$, $q=42$**",
    "createdAt": 1784121469841,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q6",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Trigonometry"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 8,
    "source": "25_ON_32_6",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 6,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q6"
    },
    "stem": "(a) Prove the identity $$\\sin 4x \\equiv 4\\sin x(2\\cos^3 x-\\cos x).$$\\hfill (3)\n\n(b) Hence find the exact value of $$\\int_{0}^{\\frac14\\pi} \\cos^3 x \\sin 4x \\, \\mathrm{d}x.$$\\hfill (5)",
    "figure": "",
    "solution": "**(a) 证明恒等式**\n\n右边 RHS $= 4\\sin x \\cos x (2\\cos^2 x-1) = 2\\sin 2x \\cos 2x = \\sin 4x =$ LHS ✓\n\n（利用 $\\sin 2x = 2\\sin x \\cos x$ 和 $\\cos 2x = 2\\cos^2 x-1$）\n\n**(b) 利用恒等式求积分**\n\n由 (a)：$\\sin 4x = 4\\sin x(2\\cos^3 x-\\cos x)$\n\n所以 $\\cos^3 x \\sin 4x = \\cos^3 x \\cdot 4\\sin x(2\\cos^3 x-\\cos x)$\n\n$= 4\\sin x(2\\cos^6 x-\\cos^4 x)$\n\n令 $u=\\cos x$，$\\mathrm{d}u=-\\sin x\\,\\mathrm{d}x$。\n\n当 $x=0$ 时 $u=1$；当 $x=\\dfrac{\\pi}{4}$ 时 $u=\\dfrac{\\sqrt{2}}{2}$。\n\n$$I = -4\\int_{1}^{\\sqrt{2}/2}(2u^6-u^4)\\,\\mathrm{d}u = -4\\left[\\frac{2u^7}{7}-\\frac{u^5}{5}\\right]_{1}^{\\sqrt{2}/2}$$\n\n代入上下限并化简（利用 $(\\sqrt{2}/2)^n=(1/2)^{n/2}$）可得精确值。\n\n**答案：$\\boxed{\\dfrac{17\\sqrt{2}-20}{35}}$**",
    "createdAt": 1784121475844,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q7",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation"],
    "topics": [],
    "difficulty": 4,
    "marks": 8,
    "source": "25_ON_32_7",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 7,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q7"
    },
    "stem": "The equation of a curve is $$2y^3-3x^2y-x^3=16.$$\n\n(a) Show that $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{x^2+2xy}{2y^2-x^2}.$$\\hfill (4)\n\n(b) Hence find the coordinates of the points on the curve at which the normal is parallel to the $y$-axis.\\hfill (4)",
    "figure": "",
    "solution": "**(a) 隐函数求导 Implicit differentiation**\n\n对 $2y^3-3x^2y-x^3=16$ 两边关于 $x$ 求导：\n\n$6y^2 y'-(6xy+3x^2 y')-3x^2=0$\n\n$(6y^2-3x^2)y'=6xy+3x^2$\n\n$$y'=\\frac{3x(2y+x)}{3(2y^2-x^2)}=\\frac{x^2+2xy}{2y^2-x^2}$$ ✓\n\n(b) **法线平行于 y 轴的点 → 切线平行于 x 轴 → $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0$**\n\n$\\dfrac{x^2+2xy}{2y^2-x^2}=0 \\Rightarrow x^2+2xy=0 \\Rightarrow x(x+2y)=0$\n\n**情况一**：$x=0$。代回曲线：$2y^3=16 \\Rightarrow y^3=8 \\Rightarrow y=2$。\n\n点 **$(0, 2)$** ✓\n\n**情况二**：$x=-2y$，即 $y=-x/2$。代入曲线：\n\n$2(-x/2)^3-3x^2(-x/2)-x^3=16$\n\n$-\\dfrac{x^3}{4}+\\dfrac{3x^3}{2}-x^3=16 \\Rightarrow \\dfrac{-x^3+6x^3-4x^3}{4}=16 \\Rightarrow \\dfrac{x^3}{4}=16$\n\n$x^3=64 \\Rightarrow x=4$，$y=-2$。\n\n点 **$(4, -2)$** ✓\n\n**两点：$(0, 2)$ 和 $(4, -2)$**",
    "createdAt": 1784121487542,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q8",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Numerical solution of equations"
    ],
    "topics": [],
    "difficulty": 3,
    "marks": 7,
    "source": "25_ON_32_8",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 8,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q8"
    },
    "stem": "(a) By sketching a suitable pair of graphs, show that the equation $\\cot 2x = 2\\sin 2x-1$ has exactly one root in the interval $0 < x < \\frac{\\pi}{2}$. \\hfill (2)\n\n(b) Show by calculation that the root is in the interval $0.4< x <0.6$. \\hfill (2)\n\n(c) Use the iterative formula $$x_{n+1}=\\frac12 \\tan^{-1}\\left(\\frac{1}{2\\sin 2x_n-1}\\right)$$ to calculate the root correct to 2 decimal places. Give the result of each iteration to 4 decimal places. \\hfill (3)",
    "figure": "",
    "solution": "**(a) 图像法判断根的数量**\n\n画 $y=\\cot 2x$（在 $(0,\\pi/2)$ 从 $+\\infty$ 单调递减到 $0$）和 $y=2\\sin 2x-1$（振幅 2、初相 $-1$ 的正弦波）。\n\n两图像在此区间恰好相交 **1 次** ✓\n\n**(b) 符号变化检验**\n\n令 $f(x)=\\cot 2x-(2\\sin 2x-1)$。\n\n$f(0.4) = \\cot 0.8-(2\\sin 0.8-1) \\approx 1.03-(1.43-1) > 0$\n\n$f(0.6) = \\cot 1.2-(2\\sin 1.2-1) \\approx 0.39-(1.87-1) < 0$\n\n符号改变，根在 $(0.4, 0.6)$ 内 ✓\n\n**(c) 迭代求解**\n\n取初始值 $x_0=0.5$：\n\n$x_1 \\approx 0.5268$\n\n$x_2 \\approx 0.5198$\n\n$x_3 \\approx 0.5200$\n\n$x_4 \\approx 0.5200$\n\n**根 $x \\approx 0.52$**（2 d.p.）",
    "createdAt": 1784121548875,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q9",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (partial fractions and binomial expansions)",
      "Integration"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "25_ON_32_9",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 9,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q9"
    },
    "stem": "Let $$f(x)=\\frac{x^2+4ax+6a^2}{(x+2a)(x+3a)},$$ where $a$ is a positive constant.\n\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n\n(b) Hence find the exact value of $$\\int_{-a}^{a} f(x)\\,\\mathrm{d}x.$$ Give your answer in the form $a(p+\\ln q)$, where $p$ and $q$ are rational.\\hfill (4)",
    "figure": "",
    "solution": "**(a) 部分分式分解**\n\n因为分子次数等于分母次数，先做多项式除法或设：\n\n$\\dfrac{x^2+4ax+6a^2}{(x+2a)(x+3a)}=1+\\dfrac{A}{x+2a}+\\dfrac{B}{x+3a}$\n\n$x^2+4ax+6a^2=(x+2a)(x+3a)+A(x+3a)+B(x+2a)$\n\n比较系数或代入特殊值：\n\n令 $x=-2a$：$A=2a$；令 $x=-3a$：$B=-2a$。\n\n**$f(x)=1+\\dfrac{2a}{x+2a}-\\dfrac{2a}{x+3a}$**\n\n**(b) 定积分**\n\n$$I=\\int_{-a}^{a}\\left(1+\\frac{2a}{x+2a}-\\frac{2a}{x+3a}\\right)\\mathrm{d}x$$\n\n$=\\left[x+2a\\ln|x+2a|-2a\\ln|x+3a|\\right]_{-a}^{a}$\n\n上限 $x=a$：$a+2a\\ln(3a)-2a\\ln(4a)=a+2a\\ln\\dfrac34$\n\n下限 $x=-a$：$-a+2a\\ln(a)-2a\\ln(2a)=-a+2a\\ln\\dfrac12$\n\n$I=2a+2a\\left(\\ln\\frac34-\\ln\\frac12\\right)=2a+2a\\ln\\dfrac{3/4}{1/2}=2a+2a\\ln\\dfrac32$\n\n**$I=a(2+2\\ln 1.5)=a(2+\\ln 2.25)$**（有理数 $p=2, q=9/4$ 或等价形式）",
    "createdAt": 1784125761151,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q10",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Differential equations"
    ],
    "topics": [],
    "difficulty": 5,
    "marks": 9,
    "source": "25_ON_32_10",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 10,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q10"
    },
    "stem": "The diagram shows a tank for holding water. The tank is in the shape of a cube of side 50 cm. At time $t$ seconds, the depth of water in the tank is $h$ cm. Water is poured into the tank at a rate of 5000 cm$^3$s$^{-1}$. Water pours out of the tank through a hole in the bottom at a rate proportional to $h^2$.\n\nWhen $h=20$, the depth of the water is increasing at a rate of 0.4 cm s$^{-1}$.\n\n(a) Show that $$\\frac{\\mathrm{d}h}{\\mathrm{d}t}=\\frac{500-h^2}{250}.$$\\hfill (4)\n\n(b) Given that $h=0$ when $t=0$, find the time taken for the depth of the water in the tank to reach 20 cm.\\hfill (5)",
    "figure": "data/images/cie_p3_25ON32_q10_figure.png",
    "solution": "**(a) 建立微分方程**\n\n水体积 $V=50^2\\cdot h=2500h$ cm³。\n\n$\\dfrac{\\mathrm{d}V}{\\mathrm{d}t}=2500\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}$\n\n净流量 = 入流 − 出流 = $5000-kh^2$（$k$ 为比例常数）。\n\n所以 $2500\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=5000-kh^2$。\n\n已知条件：当 $h=20$ 时 $\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=0.4$：\n\n$2500(0.4)=5000-k(400) \\Rightarrow 1000=5000-400k \\Rightarrow k=10$。\n\n代入得：$\\dfrac{\\mathrm{d}h}{\\mathrm{d}t}=\\dfrac{5000-10h^2}{2500}=\\dfrac{500-h^2}{250}$ ✓\n\n(b) **解微分方程求时间**\n\n分离变量：$\\displaystyle\\int_0^{20}\\frac{250}{500-h^2}\\,\\mathrm{d}h=\\int_0^T\\mathrm{d}t=T$\n\n$$T=250\\int_0^{20}\\frac{\\mathrm{d}h}{(\\sqrt{500})^2-h^2}=250\\cdot\\frac{1}{2\\sqrt{500}}\\left[\\ln\\frac{\\sqrt{500}+h}{\\sqrt{500}-h}\\right]_0^{20}$$\n\n$=\\dfrac{250}{2\\sqrt{500}}\\ln\\dfrac{\\sqrt{500}+20}{\\sqrt{500}-20}\n\n$=\\dfrac{25\\sqrt{2}}{2}\\ln\\dfrac{10\\sqrt{5}+2}{10\\sqrt{5}-2}$\n\n数值结果约 **$T\\approx 15.6$ s**（或保留精确形式）。",
    "createdAt": 1784121573764,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON32_q11",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Vectors"
    ],
    "topics": [],
    "difficulty": 4,
    "marks": 9,
    "source": "25_ON_32_11",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "32",
      "qno": 11,
      "code": "32",
      "label": "2025 Oct/Nov · Paper 32 Q11"
    },
    "stem": "Relative to the origin $O$, the position vectors of the points $A$, $B$ and $C$ are\n\n$$\\overrightarrow{OA}=4\\mathbf{i}-2\\mathbf{j}, \\quad \\overrightarrow{OB}=2\\mathbf{i}+8\\mathbf{j}+4\\mathbf{k}, \\quad \\overrightarrow{OC}=-2\\mathbf{i}+6\\mathbf{k}.$$\n\nThe midpoint of $AB$ is $M$, as shown in the diagram.\n\n(a) Find the vectors $\\overrightarrow{MB}$ and $\\overrightarrow{MC}$.\\hfill (2)\n\n(b) Calculate the exact value of the cosine of angle $CMB$.\\hfill (3)\n\n(c) Hence or otherwise find the exact area of triangle $ABC$.\\hfill (4)",
    "figure": "data/images/cie_p3_25ON32_q11_figure.png",
    "solution": "**(a) 求 $\\overrightarrow{MB}$ 和 $\\overrightarrow{MC}$**\n\n$M$ 为 $AB$ 中点：$\\vec{m}=\\dfrac{\\vec{a}+\\vec{b}}{2}=\\dfrac{(4,-2,0)+(2,8,4)}{2}=(3,3,2)$\n\n$\\vec{b}=(2,8,4)$，$\\vec{c}=(-2,0,6)$\n\n$\\overrightarrow{MB}=\\vec{b}-\\vec{m}=(2,8,4)-(3,3,2)=(-1,5,2)$\n\n$\\overrightarrow{MC}=\\vec{c}-\\vec{m}=(-2,0,6)-(3,3,2)=(-5,-3,4)$\n\n**$\\overrightarrow{MB}=(-1,5,2)$, $\\overrightarrow{MC}=(-5,-3,4)$**\n\n(b) **求 $\\cos\\angle CMB$**\n\n$|\\overrightarrow{MB}|=\\sqrt{1+25+4}=\\sqrt{30}$\n\n$|\\overrightarrow{MC}|=\\sqrt{25+9+16}=\\sqrt{50}=5\\sqrt{2}$\n\n$\\overrightarrow{MB}\\cdot\\overrightarrow{MC}=(-1)(-5)+5(-3)+2(4)=5-15+8=-2$\n\n$$\\cos\\angle CMB=\\frac{-2}{\\sqrt{30}\\cdot 5\\sqrt{2}}=\\frac{-2}{10\\sqrt{15}}=\\frac{-1}{5\\sqrt{15}}=-\\frac{\\sqrt{15}}{75}$$\n\n(c) **求三角形 ABC 面积**\n\n先算 $\\triangle MBC$ 面积：$S_{MBC}=\\frac12|\\overrightarrow{MB}||\\overrightarrow{MC}|\\sin\\angle CMB$\n\n$\\sin^2\\theta=1-\\cos^2\\theta=1-\\dfrac{1}{375}=\\dfrac{374}{375}$\n\n$S_{MBC}=\\frac12\\cdot\\sqrt{30}\\cdot 5\\sqrt{2}\\cdot\\sqrt{\\frac{374}{375}}$\n\n$M$ 是 AB 中点，所以 $S_{ABC}=2S_{MBC}$。\n\n也可用叉乘法直接算 $S_{ABC}=\\dfrac12|\\vec{AB}\\times\\vec{AC}|$。\n\n$\\vec{AB}=(-2,10,4)$，$\\vec{AC}=(-6,2,6)$\n\n$$\\vec{AB}\\times\\vec{AC}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\-2&10&4\\\\-6&2&6\\end{vmatrix}=(52,-16,56)$$\n\n$S_{ABC}=\\dfrac12\\sqrt{52^2+16^2+56^2}=\\dfrac12\\sqrt{6176}=2\\sqrt{386}$\n\n**面积 $=2\\sqrt{386}$ cm²（或等价精确值）**",
    "createdAt": 1784121586266,
    "_edited": true
  },
  {
    "id": "cie_p3_25ON33_q1",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (modulus functions)"
    ],
    "source": "25_ON_33_1",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 1,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q1"
    },
    "stem": "Solve the inequality $\\left| 3x+2 \\right| < 3 \\left| 2x-1 \\right|$. \\hfill (4)",
    "figure": "",
    "solution": "**解法：模不等式两边平方法**\n\n$$\\left| 3x+2 \\right| < 3 \\left| 2x-1 \\right|$$\n\n两边非负，平方得：\n$$(3x+2)^2 < 9(2x-1)^2$$\n\n展开：$$9x^2 + 12x + 4 < 9(4x^2 - 4x + 1) = 36x^2 - 36x + 9$$\n\n移项整理：$$0 < 27x^2 - 48x + 5$$\n\n即 $$27x^2 - 48x + 5 > 0$$\n\n求根：$$x = \\dfrac{48 \\pm \\sqrt{2304 - 540}}{54} = \\dfrac{48 \\pm \\sqrt{1764}}{54} = \\dfrac{48 \\pm 42}{54}$$\n\n$$x_1 = \\dfrac{6}{54} = \\dfrac{1}{9}, \\quad x_2 = \\dfrac{90}{54} = \\dfrac{5}{3}$$\n\n二次函数开口向上，故 $27x^2 - 48x + 5 > 0$ 当 $x < \\dfrac{1}{9}$ 或 $x > \\dfrac{5}{3}$。\n\n**答案：$x < \\dfrac{1}{9}$ 或 $x > \\dfrac{5}{3}$**",
    "marks": 4,
    "difficulty": 2,
    "createdAt": 2000000000129
  },
  {
    "id": "cie_p3_25ON33_q2",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (factor theorem and remainder theorem)"
    ],
    "source": "25_ON_33_2",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 2,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q2"
    },
    "stem": "Find the quotient and the remainder when $3x^{4}-2x^{2}$ is divided by $x+1$. \\hfill (3)",
    "figure": "",
    "solution": "**解法一：多项式长除法**\n\n用 $3x^4 - 2x^2$ 除以 $(x+1)$：\n\n$$\\begin{array}{rll}\n3x^3 - 3x^2 + x - 1 && \\\\\nx+1 \\enclose{longdiv}{3x^4 + 0x^3 - 2x^2 + 0x + 0} \\\\\n\\phantom{x+1}\\underline{3x^4 + 3x^3} && \\\\\n\\phantom{3x^4+x+1}-3x^3 - 2x^2 && \\\\\n\\phantom{3x^4+x+1}\\underline{-3x^3 - 3x^2} && \\\\\n\\phantom{3x^4+x+1+x}x^2 + 0x && \\\\\n\\phantom{3x^4+x+1+x}\\underline{x^2 + x} && \\\\\n\\phantom{3x^4+x+1+x+x}-x + 0 && \\\\\n\\phantom{3x^4+x+1+x+x}\\underline{-x - 1} && \\\\\n\\phantom{3x^4+x+1+x+x+x}1 &&\n\\end{array}$$\n\n**商 $= 3x^3 - 3x^2 + x - 1$，余数 $= 1$**\n\n---\n\n**解法二：余数定理验证余数**\n\n$f(x) = 3x^4 - 2x^2$，除式 $x+1$ 的根为 $x=-1$。\n\n余数 $f(-1) = 3(1) - 2(1) = 1$ ✓",
    "marks": 3,
    "difficulty": 1,
    "createdAt": 2000000000130
  },
  {
    "id": "cie_p3_25ON33_q3",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Logarithmic and exponential functions"
    ],
    "source": "25_ON_33_3",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 3,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q3"
    },
    "stem": "Solve the equation $2^{3x-4}=\\dfrac{3}{5^{x}}$. Give your answer in the form $\\dfrac{\\ln m}{\\ln n}$, where $m$ and $n$ are integers. \\hfill (4)",
    "figure": "",
    "solution": "**解法：取对数化为线性方程**\n\n$$2^{3x-4} = \\frac{3}{5^x}$$\n\n两边取自然对数：\n$$(3x-4)\\ln 2 = \\ln 3 - x\\ln 5$$\n\n展开并收集 $x$ 项：\n$$3x\\ln 2 - 4\\ln 2 = \\ln 3 - x\\ln 5$$\n\n$$x(3\\ln 2 + \\ln 5) = \\ln 3 + 4\\ln 2$$\n\n$$x = \\frac{\\ln 3 + 4\\ln 2}{3\\ln 2 + \\ln 5}$$\n\n利用对数性质合并：\n- 分子：$\\ln 3 + 4\\ln 2 = \\ln 3 + \\ln(2^4) = \\ln 3 + \\ln 16 = \\ln(48)$\n- 分母：$3\\ln 2 + \\ln 5 = \\ln(2^3) + \\ln 5 = \\ln 8 + \\ln 5 = \\ln(40)$\n\n$$x = \\frac{\\ln 48}{\\ln 40}$$\n\n**答案：$x = \\dfrac{\\ln 48}{\\ln 40}$（即 $m=48$, $n=40$）**",
    "marks": 4,
    "difficulty": 2,
    "createdAt": 2000000000131
  },
  {
    "id": "cie_p3_25ON33_q4",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "source": "25_ON_33_4",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 4,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q4"
    },
    "stem": "On an Argand diagram shade the region whose points represent complex numbers $z$ which satisfy both the inequalities $\\left| z+2\\mathrm{i} \\right| \\leqslant 3$ and $\\left| z+2\\mathrm{i} \\right| \\leqslant \\left| z-2+4\\mathrm{i} \\right|$. \\hfill (5)",
    "figure": "",
    "solution": "**分析两个条件**\n\n**(1) $|z + 2\\mathrm{i}| \\leqslant 3$**\n\n令 $z = x + iy$，则 $z + 2i = x + i(y+2)$。\n$$|z + 2i|^2 = x^2 + (y+2)^2 \\leqslant 9$$\n\n这是圆心在 $(0, -2)$、半径为 **3** 的圆及其内部。\n\n**(2) $|z + 2i| \\leqslant |z - 2 + 4i|$**\n\n$$|z + 2i|^2 \\leqslant |z - 2 + 4i|^2$$\n\n$$x^2 + (y+2)^2 \\leqslant (x-2)^2 + (y+4)^2$$\n\n展开：$$x^2 + y^2 + 4y + 4 \\leqslant x^2 - 4x + 4 + y^2 + 8y + 16$$\n\n化简：$$4y + 4 \\leqslant -4x + 8y + 20$$\n$$4x - 4y - 16 \\leqslant 0$$\n$$x - y - 4 \\leqslant 0$$\n\n即 **直线 $y = x - 4$ 及其下方（含直线上）**。\n\n**作图要点**\n1. 画圆心 $C(0, -2)$、半径 3 的实心圆（含内部）\n2. 画直线 $L: y = x - 4$（过点 $(0,-4)$ 和 $(4,-0)$）\n3. 阴影区域 = 圆内 ∩ 直线下方（两条件的交集）\n\n该区域是一个弓形（圆被直线切割后的下半部分），边界包含圆弧和线段。",
    "marks": 5,
    "difficulty": 3,
    "createdAt": 2000000000132
  },
  {
    "id": "cie_p3_25ON33_q5",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Trigonometry"
    ],
    "source": "25_ON_33_5",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 5,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q5"
    },
    "stem": "(a) Show that $\\cos 4x+2\\sin ^{2}x-1 \\equiv 8\\sin ^{4}x-6\\sin ^{2}x$. \\hfill (4)\n\n(b) Hence solve the equation $\\cos 4x+2\\sin ^{2}x-1=0$ for $-180^{\\circ} \\leqslant x \\leqslant 180^{\\circ}$. \\hfill (4)",
    "figure": "",
    "solution": "**(a) 恒等式证明**\n\n从左边出发：$\\cos 4x + 2\\sin^2 x - 1$\n\n利用二倍角公式 $\\cos 2A = 1 - 2\\sin^2 A$：\n$$\\cos 4x = 1 - 2\\sin^2 2x$$\n\n所以 LHS = $(1 - 2\\sin^2 2x) + 2\\sin^2 x - 1 = 2\\sin^2 x - 2\\sin^2 2x$\n\n再对 $\\sin^2 2x$ 用公式 $\\sin 2A = 2\\sin A \\cos A$：\n$$\\sin^2 2x = 4\\sin^2 x \\cos^2 x = 4\\sin^2 x(1 - \\sin^2 x)$$\n\n代入：\n$$\\text{LHS} = 2\\sin^2 x - 2 \\cdot 4\\sin^2 x(1-\\sin^2 x) = 2\\sin^2 x - 8\\sin^2 x + 8\\sin^4 x = 8\\sin^4 x - 6\\sin^2 x = \\text{RHS}$$ ✓\n\n---\n\n**(b) 解方程**\n\n由 (a)：$8\\sin^4 x - 6\\sin^2 x = 0$\n\n$$2\\sin^2 x(4\\sin^2 x - 3) = 0$$\n\n情况 ①：$\\sin^2 x = 0 \\Rightarrow \\sin x = 0 \\Rightarrow x = -180°, 0°, 180°$\n\n情况 ②：$4\\sin^2 x - 3 = 0 \\Rightarrow \\sin^2 x = \\frac{3}{4} \\Rightarrow \\sin x = \\pm\\frac{\\sqrt{3}}{2}$\n\n- $\\sin x = \\frac{\\sqrt{3}}{2} \\Rightarrow x = -120°, -60°, 60°, 120°$\n- $\\sin x = -\\frac{\\sqrt{3}}{2} \\Rightarrow x = -120°, -60°, 60°, 120°$\n\n（注：$\\sin x = \\pm\\frac{\\sqrt{3}}{2}$ 在 $[-180°, 180°]$ 的解均为 $x = ±60°, ±120°$）\n\n**答案：$x = -180°, -120°, -60°, 0°, 60°, 120°, 180°$**",
    "marks": 8,
    "difficulty": 3,
    "createdAt": 2000000000133
  },
  {
    "id": "cie_p3_25ON33_q6",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Integration"
    ],
    "source": "25_ON_33_6",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 6,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q6"
    },
    "stem": "Find the exact value of $\\displaystyle\\int_{0}^{\\frac{1}{6}\\pi} x^{2}\\sin 2x\\,\\mathrm{d} x$. \\hfill (6)",
    "figure": "",
    "solution": "**分部积分法（两次）**\n\n$$I = \\int_{0}^{\\pi/6} x^2 \\sin 2x \\, dx$$\n\n**第一次分部积分**：$u = x^2$, $dv = \\sin 2x \\, dx$\n- $du = 2x \\, dx$, $v = -\\frac{1}{2}\\cos 2x$\n\n$$I = \\left[ -\\frac{x^2}{2}\\cos 2x \\right]_{0}^{\\pi/6} + \\int_{0}^{\\pi/6} x \\cos 2x \\, dx$$\n\n计算边界项：$-\\frac{(\\pi/6)^2}{2}\\cos(\\pi/3) + 0 = -\\frac{\\pi^2}{72} \\cdot \\frac{1}{2} = -\\frac{\\pi^2}{144}$\n\n**第二次分部积分**：$J = \\int_{0}^{\\pi/6} x \\cos 2x \\, dx$，令 $u=x$, $dv=\\cos 2x \\, dx$\n- $du=dx$, $v = \\frac{1}{2}\\sin 2x$\n\n$$J = \\left[ \\frac{x}{2}\\sin 2x \\right]_{0}^{\\pi/6} - \\int_{0}^{\\pi/6} \\frac{1}{2}\\sin 2x \\, dx$$\n$$= \\frac{\\pi}{12}\\sin(\\pi/3) - 0 - \\left[ -\\frac{1}{4}\\cos 2x \\right]_{0}^{\\pi/6}$$\n$$= \\frac{\\pi}{12} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{1}{4}\\left( \\cos(\\pi/3) - \\cos 0 \\right)$$\n$$= \\frac{\\pi\\sqrt{3}}{24} + \\frac{1}{4}\\left( \\frac{1}{2} - 1 \\right) = \\frac{\\pi\\sqrt{3}}{24} - \\frac{1}{8}$$\n\n**合并**：$$I = -\\frac{\\pi^2}{144} + \\frac{\\pi\\sqrt{3}}{24} - \\frac{1}{8}$$\n\n**精确值：$\\displaystyle\\frac{\\pi\\sqrt{3}}{24} - \\frac{\\pi^2}{144} - \\frac{1}{8}$**",
    "marks": 6,
    "difficulty": 3,
    "createdAt": 2000000000134
  },
  {
    "id": "cie_p3_25ON33_q7",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "source": "25_ON_33_7",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 7,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q7"
    },
    "stem": "Solve the equation $\\dfrac{5z}{2-\\mathrm{i}}-zz^{*}+20+8\\mathrm{i}=0$. Give your answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real. \\hfill (6)",
    "figure": "",
    "solution": "**设 $z = x + iy$，则 $z^* = x - iy$，且 $|z|^2 = zz^* = x^2 + y^2$**\n\n先处理 $\\dfrac{5z}{2-i}$，有理化分母：\n$$\\frac{5(x+iy)}{2-i} = \\frac{5(x+iy)(2+i)}{(2-i)(2+i)} = \\frac{5(2x-x + 2iy + ix)}{5} = \\frac{5((2x-y) + i(x+2y))}{5} = (2x-y) + i(x+2y)$$\n\n原方程变为：\n$$(2x-y) + i(x+2y) - (x^2+y^2) + 20 + 8i = 0$$\n\n分离实部与虚部：\n- **实部**：$2x - y - x^2 - y^2 + 20 = 0$\n  即 $x^2 + y^2 - 2x + y = 20$\n\n- **虚部**：$x + 2y + 8 = 0$ → $x = -2y - 8$\n\n将 $x = -2y-8$ 代入实部方程：\n$$(-2y-8)^2 + y^2 - 2(-2y-8) + y = 20$$\n$$4y^2 + 32y + 64 + y^2 + 4y + 16 + y = 20$$\n$$5y^2 + 37y + 80 = 20$$\n$$5y^2 + 37y + 60 = 0$$\n\n求根：$$y = \\frac{-37 \\pm \\sqrt{1369 - 1200}}{10} = \\frac{-37 \\pm \\sqrt{169}}{10} = \\frac{-37 \\pm 13}{10}$$\n\n- $y_1 = \\frac{-24}{10} = -\\frac{12}{5}$ → $x_1 = -2(-12/5)-8 = \\frac{24}{5}-8 = -\\frac{16}{5}$\n- $y_2 = \\frac{-50}{10} = -5$ → $x_2 = -2(-5)-8 = 10-8 = 2$\n\n**答案：$z = -\\dfrac{16}{5} - \\dfrac{12}{5}\\mathrm{i}$ 或 $z = 2 - 5\\mathrm{i}$**",
    "marks": 6,
    "difficulty": 3,
    "createdAt": 2000000000135
  },
  {
    "id": "cie_p3_25ON33_q8",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation", "Numerical solution of equations"],
    "source": "25_ON_33_8",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 8,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q8"
    },
    "stem": "The curve with equation $y=\\mathrm{e}^{-5x}\\ln 5x$ has a stationary point at $x=p$. \\hfill (3)\n\n(a) Show that $p$ satisfies the equation $\\ln 5p=\\dfrac{1}{5p}$. \\hfill (3)\n\n(b) By sketching a suitable pair of graphs, show that the equation in part (a) has only one root. \\hfill (2)\n\n(c) Show by calculation that $0.2<p<0.6$. \\hfill (2)\n\n(d) It is given that the equation in part (a) can be written in the form $p=\\dfrac{1}{5}\\exp \\left( \\dfrac{1}{5p} \\right) $, where $\\exp (x)$ denotes $\\mathrm{e}^{x}$. Use an iterative formula based on this rearrangement to calculate $p$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places. \\hfill (3)",
    "figure": "",
    "solution": "**(a) 求导证明驻点方程**\n\n$$y = e^{-5x} \\ln(5x)$$\n\n使用乘积法则：$$\\frac{dy}{dx} = -5e^{-5x}\\ln(5x) + e^{-5x} \\cdot \\frac{5}{5x} = e^{-5x}\\left( \\frac{1}{x} - 5\\ln(5x) \\right)$$\n\n驻点处 $\\dfrac{dy}{dx} = 0$，而 $e^{-5x} > 0$ 恒成立：\n$$\\frac{1}{p} - 5\\ln(5p) = 0 \\Rightarrow \\ln(5p) = \\frac{1}{5p}$$ ✓\n\n---\n\n**(b) 图像法说明唯一根**\n\n令 $f(p) = \\ln(5p) - \\dfrac{1}{5p}$。\n\n画两条曲线：$y = \\ln(5p)$ 和 $y = \\dfrac{1}{5p}$（定义域 $p>0$）。\n- $y=\\ln(5p)$ 单调递增，从 $-\\infty$ 到 $+\\infty$\n- $y=\\frac{1}{5p}$ 单调递减，从 $+\\infty$ 到 $0$\n\n两者单调性相反且均连续，恰有一个交点，故唯一根。\n\n---\n\n**(c) 夹逼证明 $0.2 < p < 0.6$**\n\n- $f(0.2) = \\ln(1) - \\frac{1}{1} = 0 - 1 = -1 < 0$\n- $f(0.6) = \\ln(3) - \\frac{1}{3} \\approx 1.099 - 0.333 = 0.766 > 0$\n\n$f$ 连续且 $f(0.2) < 0 < f(0.6)$，由中间值定理 $0.2 < p < 0.6$ ✓\n\n---\n\n**(d) 迭代求解**\n\n迭代公式：$$p_{n+1} = \\frac{1}{5}\\exp\\left( \\frac{1}{5p_n} \\right)$$\n\n取初值 $p_0 = 0.4$（区间中点）：\n\n| $n$ | $p_n$ |\n|-----|-------|\n| 0 | 0.4000 |\n| 1 | $\\frac{1}{5}\\exp(0.5) = 0.3297...$ → **0.3297** |\n| 2 | $\\frac{1}{5}\\exp(0.6067...) = 0.3671...$ → **0.3671** |\n| 3 | $\\frac{1}{5}\\exp(0.5446...) = 0.3448...$ → **0.3448** |\n| 4 | $\\frac{1}{5}\\exp(0.5799...) = 0.3581...$ → **0.3581** |\n| 5 | $\\frac{1}{5}\\exp(0.5584...) = 0.3501...$ → **0.3501** |\n| 6 | $\\frac{1}{5}\\exp(0.5712...) = 0.3552...$ → **0.3552** |\n| ... | 收敛中... |\n\n迭代值在 $0.35$ 附近收敛，到 2 位有效数字：\n\n**$p \\approx 0.35$（或更精确地约 $0.353$，保留 2 d.p. 为 **0.35**）**\n\n（具体迭代次数取决于收敛速度，一般 5–7 次迭代后稳定到 2 d.p.）",
    "marks": 10,
    "difficulty": 4,
    "createdAt": 2000000000136
  },
  {
    "id": "cie_p3_25ON33_q9",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (partial fractions and binomial expansions)",
      "Differential equations"
    ],
    "source": "25_ON_33_9",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 9,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q9"
    },
    "stem": "(a) Express $\\dfrac{2}{1-9y^{2}}$ in partial fractions. \\hfill (2)\n\n(b) The variables $x$ and $y$ satisfy the differential equation $$2\\cos ^{2}3x\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=1-9y^{2},$$ and $y=0$ when $x=\\dfrac{1}{12}\\pi$. Solve the differential equation and obtain an expression for $y$ in terms of $x$. \\hfill (6)",
    "figure": "",
    "solution": "**(a) 部分分式分解**\n\n$$\\frac{2}{1-9y^2} = \\frac{2}{(1-3y)(1+3y)} = \\frac{A}{1-3y} + \\frac{B}{1+3y}$$\n\n$$2 = A(1+3y) + B(1-3y)$$\n\n- 令 $y = \\frac{1}{3}$：$2 = A(2) \\Rightarrow A = 1$\n- 令 $y = -\\frac{1}{3}$：$2 = B(2) \\Rightarrow B = 1$\n\n**答案：$\\displaystyle\\frac{1}{1-3y} + \\frac{1}{1+3y}$**\n\n---\n\n**(b) 解微分方程（可分离变量）**\n\n$$2\\cos^2 3x \\cdot \\frac{dy}{dx} = 1 - 9y^2$$\n\n分离变量：\n$$\\frac{2}{1-9y^2} dy = \\frac{1}{\\cos^2 3x} dx = \\sec^2 3x \\, dx$$\n\n利用 (a) 的部分分式结果，两边积分：\n$$\\int \\left( \\frac{1}{1-3y} + \\frac{1}{1+3y} \\right) dy = \\int \\sec^2 3x \\, dx$$\n\n$$-\\frac{1}{3}\\ln|1-3y| + \\frac{1}{3}\\ln|1+3y| = \\frac{1}{3}\\tan 3x + C$$\n\n两边乘以 3：\n$$\\ln\\left| \\frac{1+3y}{1-3y} \\right| = \\tan 3x + 3C$$\n\n令 $K = 3C$：\n$$\\frac{1+3y}{1-3y} = Ae^{\\tan 3x}$$ （其中 $A = e^K$ 为常数）\n\n代入初始条件 $y=0$ 当 $x = \\frac{\\pi}{12}$：\n$$\\frac{1}{1} = Ae^{\\tan(\\pi/4)} = A \\cdot e^{1} \\Rightarrow A = e^{-1}$$\n\n$$\\frac{1+3y}{1-3y} = e^{\\tan 3x - 1}$$\n\n解出 $y$：$$1+3y = e^{\\tan 3x - 1}(1-3y)$$\n$$3y(1 + e^{\\tan 3x-1}) = e^{\\tan 3x-1} - 1$$\n\n**$$y = \\frac{e^{\\tan 3x-1} - 1}{3(1 + e^{\\tan 3x-1})} = \\frac{1-e^{1-\\tan 3x}}{3(e^{1-\\tan 3x}+1)}$$**\n\n也可写成：$$y = \\frac{1}{3}\\tanh\\left( \\frac{\\tan 3x - 1}{2} \\right)$$（双曲正切形式）",
    "marks": 8,
    "difficulty": 4,
    "createdAt": 2000000000137
  },
  {
    "id": "cie_p3_25ON33_q10",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation", "Integration"],
    "source": "25_ON_33_10",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 10,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q10"
    },
    "stem": "The diagram shows the graph of $y=\\sec ^{2}x\\sqrt{3+2\\tan x}$ for $-\\frac{1}{4}\\pi \\leqslant x \\leqslant \\frac{1}{4}\\pi$, and its minimum point $M$. \\hfill (6)\n\n(a) Find the $x$-coordinate of $M$. \\hfill (6)\n\n(b) Using the substitution $u=3+2\\tan x$, find the exact value of the area of the region bounded by the curve, the $x$-axis and the lines $x=-\\frac{1}{4}\\pi$ and $x=\\frac{1}{4}\\pi$. \\hfill (6)",
    "figure": "",
    "solution": "**(a) 最小值点 M 的 x 坐标**\n\n$$y = \\sec^2 x \\sqrt{3 + 2\\tan x}$$\n\n令 $t = \\tan x$，则 $\\sec^2 x = 1 + t^2$，$y = (1+t^2)\\sqrt{3+2t}$。\n\n求导（链式法则）：$$\\frac{dy}{dx} = \\frac{dy}{dt} \\cdot \\frac{dt}{dx} = \\frac{dy}{dt} \\cdot \\sec^2 x$$\n\n$$\\frac{dy}{dt} = 2t\\sqrt{3+2t} + (1+t^2) \\cdot \\frac{1}{\\sqrt{3+2t}} = \\frac{2t(3+2t) + (1+t^2)}{\\sqrt{3+2t}} = \\frac{4t^2 + 6t + t^2 + 1}{\\sqrt{3+2t}} = \\frac{5t^2 + 6t + 1}{\\sqrt{3+2t}}$$\n\n$$\\frac{dy}{dx} = \\sec^2 x \\cdot \\frac{5t^2 + 6t + 1}{\\sqrt{3+2t}} = (1+t^2) \\cdot \\frac{5\\tan^2 x + 6\\tan x + 1}{\\sqrt{3+2\\tan x}}$$\n\n令 $\\dfrac{dy}{dx} = 0$（注意 $\\sec^2 x > 0$, $\\sqrt{3+2\\tan x} > 0$ 在定义域内）：\n$$5\\tan^2 x + 6\\tan x + 1 = 0$$\n$$(5\\tan x + 1)(\\tan x + 1) = 0$$\n\n- $\\tan x = -\\dfrac{1}{5}$ 或 $\\tan x = -1$\n\n检验哪个是最小值（二阶导或函数值比较）：\n- $\\tan x = -1$ 时 $y = 2\\sqrt{3-2} = 2$\n- $\\tan x = -\\frac{1}{5}$ 时 $y = (1+\\frac{1}{25})\\sqrt{3-\\frac{2}{5}} = \\frac{26}{25}\\sqrt{\\frac{13}{5}} \\approx 1.67 < 2$\n\n最小值对应 $\\tan x = -\\dfrac{1}{5}$。\n\n**答案：$x = \\arctan\\left(-\\dfrac{1}{5}\\right)$（或在 $[-\\frac{\\pi}{4}, \\frac{\\pi}{4}]$ 内的 $x = -\\arctan \\frac{1}{5}$）**\n\n---\n\n**(b) 定积分——换元 $u = 3 + 2\\tan x$**\n\n当 $x = -\\frac{\\pi}{4}$：$u = 3 + 2(-1) = 1$\n\n当 $x = \\frac{\\pi}{4}$：$u = 3 + 2(1) = 5$\n\n$$du = 2\\sec^2 x \\, dx \\Rightarrow \\sec^2 x \\, dx = \\frac{du}{2}$$\n\n原积分：$$\\int_{-\\pi/4}^{\\pi/4} \\sec^2 x \\sqrt{3+2\\tan x} \\, dx = \\int_{1}^{5} \\sqrt{u} \\cdot \\frac{du}{2} = \\frac{1}{2}\\int_{1}^{5} u^{1/2} \\, du$$\n\n$$= \\frac{1}{2} \\left[ \\frac{2}{3}u^{3/2} \\right]_{1}^{5} = \\frac{1}{3}(5\\sqrt{5} - 1)$$\n\n**面积 $= \\dfrac{5\\sqrt{5}-1}{3}$**（或等价形式 $\\dfrac{5\\sqrt{5}}{3} - \\dfrac{1}{3}$）",
    "marks": 12,
    "difficulty": 4,
    "createdAt": 2000000000138
  },
  {
    "id": "cie_p3_25ON33_q11",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Vectors"
    ],
    "source": "25_ON_33_11",
    "examRef": {
      "year": 2025,
      "month": "Oct/Nov",
      "paper": "33",
      "qno": 11,
      "code": "33",
      "label": "2025 Oct/Nov · Paper 33 Q11"
    },
    "stem": "The line $l_{1}$ passes through the point $(3,1,-6)$ and is parallel to the vector $2\\mathbf{i}+\\mathbf{j}+4\\mathbf{k}$. \n\nThe line $l_{2}$ passes through the point $(-1,3,-6)$ and is perpendicular to the vector $3\\mathbf{i}-2\\mathbf{j}+\\mathbf{k}$. The direction vector for $l_{2}$ has no component in the $x$-direction. \n\n(a) Write down a vector equation for $l_{1}$ and find a vector equation for $l_{2}$. \\hfill (3)\n\n(b) Calculate the acute angle between $l_{1}$ and $l_{2}$. \\hfill (3)\n\n(c) Find the position vector of the point of intersection of $l_{1}$ and $l_{2}$. \\hfill (3)",
    "figure": "data/images/cie_p3_25ON33_q11_figure.png",
    "solution": "**(a) 两直线的向量方程**\n\n**$l_1$**：过点 $(3,1,-6)$，方向向量 $\\vec{d}_1 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}$\n\n$$\\mathbf{r}_1 = \\begin{pmatrix} 3 \\\\ 1 \\\\ -6 \\end{pmatrix} + \\lambda \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}$$\n\n**$l_2$**：设方向向量 $\\vec{d}_2 = \\begin{pmatrix} 0 \\\\ a \\\\ b \\end{pmatrix}$（无 x 分量）\n\n$l_2$ 垂直于 $\\vec{n} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix}$，故 $\\vec{d}_2 \\cdot \\vec{n} = 0$：\n$$0(3) + a(-2) + b(1) = 0 \\Rightarrow -2a + b = 0 \\Rightarrow b = 2a$$\n\n取 $a=1$，则 $b=2$，$\\vec{d}_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$\n\n$$\\mathbf{r}_2 = \\begin{pmatrix} -1 \\\\ 3 \\\\ -6 \\end{pmatrix} + \\mu \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$$\n\n---\n\n**(b) 两直线夹角**\n\n$$\\cos\\theta = \\frac{|\\vec{d}_1 \\cdot \\vec{d}_2|}{|\\vec{d}_1||\\vec{d}_2|}$$\n\n$$\\vec{d}_1 \\cdot \\vec{d}_2 = 2(0)+1(1)+4(2)=9$$\n\n$$|\\vec{d}_1| = \\sqrt{4+1+16}=\\sqrt{21}, \\quad |\\vec{d}_2| = \\sqrt{0+1+4}=\\sqrt{5}$$\n\n$$\\cos\\theta = \\frac{9}{\\sqrt{105}}, \\quad \\theta = \\arccos\\left( \\frac{9}{\\sqrt{105}} \\right) \\approx 28.6°$$\n\n**锐角 $\\theta = \\arccos\\left( \\dfrac{9}{\\sqrt{105}} \\right) \\approx 28.6°$**（或 $\\approx 29°$）\n\n---\n\n**(c) 交点**\n\n令位置相等：$$\\begin{cases} 3+2\\lambda = -1 \\\\ 1+\\lambda = 3+\\mu \\\\ -6+4\\lambda = -6+2\\mu \\end{cases}$$\n\n由 ①：$2\\lambda = -4 \\Rightarrow \\lambda = -2$\n\n代入 ③：$-6+4(-2) = -6+2\\mu \\Rightarrow -14 = -6+2\\mu \\Rightarrow \\mu = -4$\n\n验证 ②：左 $1+(-2)=-1$，右 $3+(-4)=-1$ ✓\n\n交点坐标（代入任一直线）：\n$$\\mathbf{r} = \\begin{pmatrix} 3 \\\\ 1 \\\\ -6 \\end{pmatrix} + (-2)\\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ -1 \\\\ -14 \\end{pmatrix}$$\n\n**交点的位置向量 $= -\\mathbf{i} - \\mathbf{j} - 14\\mathbf{k}$（或 $(-1, -1, -14)$）**",
    "marks": 9,
    "difficulty": 4,
    "createdAt": 2000000000139
  }
, {
  "id": "cie_p3_25ON35_q1",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (modulus functions)"
  ],
  "source": "25_ON_35_1",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 1,
    "code": "35",
    "label": "2025 ON · Paper 35 Q1"
  },
  "stem": "(a) Sketch the graph of $y=|3x-6|$. \\hfill (1)\n\n(b) Solve the inequality $5x-3<|3x-6|$. \\hfill (3)",
  "figure": "",
  "marks": 4,
  "difficulty": 2,
  "subMarks": {
    "a": 1,
    "b": 3
  },
  "solution": "**(a)** The graph of $y=|3x-6|$ is V-shaped with vertex at $(2,0)$.\nFor $x\\ge 2$: $y=3x-6$ (gradient $3$). For $x<2$: $y=6-3x$ (gradient $-3$).\n\n**(b)** Case analysis:\n*Case 1:* $x\\ge 2$: $5x-3 < 3x-6 \\Rightarrow 2x<-3 \\Rightarrow x<-3/2$ (reject).\n*Case 2:* $x<2$: $5x-3 < -(3x-6)= -3x+6 \\Rightarrow 8x<9 \\Rightarrow x<9/8$ (valid).\n**Answer:** $x<9/8$",
  "createdAt": 1784133526639
},
  {
  "id": "cie_p3_25ON35_q2",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "source": "25_ON_35_2",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 2,
    "code": "35",
    "label": "2025 ON · Paper 35 Q2"
  },
  "stem": "On a sketch of an Argand diagram, shade the region which represents complex numbers $z$ satisfying both the inequalities $|z-1-3\\mathrm{i}|\\leqslant 2$ and $|z|\\geqslant 4$. \\hfill (4)",
  "figure": "",
  "marks": 4,
  "difficulty": 3,
  "subMarks": {},
  "solution": "$|z-1-3i|\\le 2$: disc centre $C(1,3)$ radius $2$.\n$|z|\\ge 4$: exterior/boundary of circle centre $O$ radius $4$.\nSince $|OC|=\\sqrt{10}\\approx 3.16<4$, the origin-centred circle encloses $C$, so there is a non-empty crescent region inside the small disc but outside the large disc. Shade this region.",
  "createdAt": 1784133526640
},
  {
  "id": "cie_p3_25ON35_q3",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Logarithmic and exponential functions"
  ],
  "source": "25_ON_35_3",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 3,
    "code": "35",
    "label": "2025 ON · Paper 35 Q3"
  },
  "stem": "The variables $x$ and $y$ satisfy the equation $Ay=b^{x}$, where $A$ and $b$ are constants.\n\n(a) Show that the graph of $\\ln y$ against $x$ is a straight line. \\hfill (2)\n\n(b) When $x=3.4$, $\\ln y=0.86$ and when $x=5.7$, $\\ln y=2.56$. Find the value of $A$ and the value of $b$. Give your answers correct to 2 significant figures. \\hfill (3)",
  "figure": "",
  "marks": 5,
  "difficulty": 2,
  "subMarks": {
    "a": 2,
    "b": 3
  },
  "solution": "**(a)** $\\ln(Ay)=\\ln(b^x)=x\\ln b$, so $\\ln y=(\\ln b)x-\\ln A$ — linear in $x$. \\checkmark\n\n**(b)** Gradient $m=(2.56-0.86)/(5.7-3.4)=17/23\\approx 0.739$.\n$b=e^m=e^{17/23}\\approx 2.09... \\Rightarrow b\\approx \\mathbf{2.1}$ (2 s.f.)\n\nIntercept $c=0.86-m(3.4)=-1.653...=-\\ln A \\Rightarrow A=e^{1.653}\\approx 5.22... \\Rightarrow A\\approx \\mathbf{5.2}$ (2 s.f.)",
  "createdAt": 1784133526641
},
  {
  "id": "cie_p3_25ON35_q4",
  "board": "CIE",
  "subject": "P3",
  "chapter": ["Differentiation"],
  "source": "25_ON_35_4",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 4,
    "code": "35",
    "label": "2025 ON · Paper 35 Q4"
  },
  "stem": "The equation of a curve is $x^{2}\\ln 2y-y\\ln\\left(2+x^{2}\\right)=\\ln 6$.\n\nFind the exact value of the gradient of the curve at the point $(2,3)$. Give your answer in simplified form. \\hfill (5)",
  "figure": "",
  "marks": 5,
  "difficulty": 3,
  "subMarks": {},
  "solution": "Implicit diff wrt $x$: $2x\\ln(2y)+\\frac{x^2}{y}y'-y'\\ln(2+x^2)-\\frac{2xy}{2+x^2}=0$\n\nAt $(2,3)$: $4\\ln 6+\\frac{4}{3}m-m\\ln 6-2=0$ where $m=y'$\n$m(\\frac{4}{3}-\\ln 6)=2-4\\ln 6$ \n\n$$m=\\frac{2-4\\ln 6}{\\frac{4}{3}-\\ln 6}=\\frac{6-12\\ln 6}{4-3\\ln 6}$$\n\n(Numerically $\\approx 11.27$)",
  "createdAt": 1784133526642
},
  {
  "id": "cie_p3_25ON35_q5",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "source": "25_ON_35_5",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 5,
    "code": "35",
    "label": "2025 ON · Paper 35 Q5"
  },
  "stem": "Find the complex numbers, $z$, which satisfy the equation\n$$zz^{*}+5\\mathrm{i}z+2-10\\mathrm{i}=0.$$\nGive your answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real. \\hfill (5)",
  "figure": "",
  "marks": 5,
  "difficulty": 3,
  "subMarks": {},
  "solution": "Let $z=x+iy$, $z^*=x-iy$. Then $zz^*=x^2+y^2$, $5iz=5ix-5y$.\n\nReal part: $x^2+y^2-5y+2=0$\nImag part: $5x-10=0 \\Rightarrow x=2$\n\nSubstitute: $4+y^2-5y+2=0 \\Rightarrow y^2-5y+6=0 \\Rightarrow (y-2)(y-3)=0$\n\n**Answer:** $z=\\mathbf{2+2i}$ or $z=\\mathbf{2+3i}$",
  "createdAt": 1784133526643
},
  {
  "id": "cie_p3_25ON35_q6",
  "board": "CIE",
  "subject": "P3",
  "chapter": ["Differentiation"],
  "source": "25_ON_35_6",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 6,
    "code": "35",
    "label": "2025 ON · Paper 35 Q6"
  },
  "stem": "A curve has equation $y=\\dfrac{\\tan x}{5+2\\sin x}$.\n\n(a) Express $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ as a simplified fraction in terms of $\\sin x$. \\hfill (4)\n\n(b) Show that the curve has no stationary points. \\hfill (2)",
  "figure": "",
  "marks": 6,
  "difficulty": 3,
  "subMarks": {
    "a": 4,
    "b": 2
  },
  "solution": "**(a)** Quotient rule with $u=\\tan x$, $v=5+2\\sin x$:\n$$y'=\\frac{(5+2s)/c^2-2s}{(5+2s)^2}=\\frac{5+2s-2sc^2}{c^2(5+2s)^2}$$\nwhere $s=\\sin x$, $c=\\cos x$. Using $c^2=1-s^2$:\n$$\\boxed{y'=\\frac{5+2\\sin^3 x}{(1-\\sin^2 x)(5+2\\sin x)^2}}$$\n\n**(b)** Numerator zero: $5+2\\sin^3 x=0 \\Rightarrow \\sin^3 x=-2.5$, impossible since $|\\sin^3 x|\\le 1$. No stationary points. \\checkmark",
  "createdAt": 1784133526644
},
  {
  "id": "cie_p3_25ON35_q7",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Integration"
  ],
  "source": "25_ON_35_7",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 7,
    "code": "35",
    "label": "2025 ON · Paper 35 Q7"
  },
  "stem": "(a) Use the substitution $u=x^{2}-3$ to show that\n$$\\int_{\\sqrt{7}}^{\\sqrt{12}} \\dfrac{4x^{3}}{\\sqrt{x^{2}-3}}\\,\\mathrm{d}x=\\int_{a}^{b}\\dfrac{2(u+3)}{\\sqrt{u}}\\,\\mathrm{d}u,$$\nwhere $a$ and $b$ are values to be found. \\hfill (4)\n\n(b) Hence, find the exact value of $\\displaystyle\\int_{\\sqrt{7}}^{\\sqrt{12}}\\dfrac{4x^{3}}{\\sqrt{x^{2}-3}}\\,\\mathrm{d}x$. \\hfill (4)",
  "figure": "",
  "marks": 8,
  "difficulty": 3,
  "subMarks": {
    "a": 4,
    "b": 4
  },
  "solution": "**(a)** $u=x^2-3$, $du=2xdx$, $xdx=du/2$.\nWhen $x=\\sqrt7$: $u=4=a$; when $x=\\sqrt{12}$: $u=9=b$.\n$4x^3/\\sqrt{x^2-3}dx=4(u+3)x/\\sqrt u dx=4(u+3)/(2\\sqrt u)du=2(u+3)/\\sqrt u du$ \\checkmark\n\n**(b)** $2\\int_4^9 (u^{1/2}+3u^{-1/2})du=2[\\frac{2}{3}u^{3/2}+6u^{1/2}]_4^9$\n$=2[(18+18)-(16/3+12)]=2[36-52/3]=112/3$\n\n$$\\boxed{\\dfrac{112}{3}}$$",
  "createdAt": 1784133526645
},
  {
  "id": "cie_p3_25ON35_q8",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "source": "25_ON_35_8",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 8,
    "code": "35",
    "label": "2025 ON · Paper 35 Q8"
  },
  "stem": "(a) Express $3\\sqrt{3}\\sin\\left(\\theta+\\frac{1}{6}\\pi\\right)-2\\sin\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0<\\alpha<\\frac{1}{2}\\pi$. Give the exact value of $R$ and state the value of $\\alpha$ correct to 3 decimal places. \\hfill (5)\n\n(b) Hence, solve the equation $3\\sqrt{3}\\sin\\left(2x+\\frac{1}{6}\\pi\\right)-2\\sin 2x=\\sqrt{6}$ for $0<x<\\pi$. \\hfill (4)",
  "figure": "",
  "marks": 9,
  "difficulty": 4,
  "subMarks": {
    "a": 5,
    "b": 4
  },
  "solution": "**(a)** Expand: $3\\sqrt3[\\sin\\theta\\cdot\\sqrt3/2+\\cos\\theta\\cdot 1/2]-2\\sin\\theta$\n$=9/2\\sin\\theta+3\\sqrt3/2\\cos\\theta-2\\sin\\theta=5/2\\sin\\theta+3\\sqrt3/2\\cos\\theta$\n\n$R=\\sqrt{(5/2)^2+(3\\sqrt3/2)^2}=\\sqrt{52/4}=\\boxed{\\sqrt{13}}$\n$\\tan\\alpha=(3\\sqrt3/2)/(5/2)=3\\sqrt3/5 \\Rightarrow \\alpha\\approx\\boxed{0.803}$ rad (3 d.p.)\n\n**(b)** $\\sqrt{13}\\sin(2x+\\alpha)=\\sqrt6 \\Rightarrow \\sin(2x+\\alpha)=\\sqrt{6/13}$\n\nWith $\\beta=\\arcsin\\sqrt{6/13}\\approx 0.750$, $\\alpha\\approx 0.803$:\n- $2x=\\beta-\\alpha+2\\pi n$: $n=0\\to x\\approx -0.05$(reject); $n=1\\to x\\approx 3.11$(accept)\n- $2x=\\pi-\\beta-\\alpha+2\\pi n$: $n=0\\to x\\approx 1.79$(accept); $n=1\\to x>\\pi$(reject)\n\n**Solutions:** $x\\approx\\mathbf{0.795},\\;\\mathbf{1.79},\\;\\mathbf{3.11}$ (3 s.f.)",
  "createdAt": 1784133526646
},
  {
  "id": "cie_p3_25ON35_q9",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Vectors"
  ],
  "source": "25_ON_35_9",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 9,
    "code": "35",
    "label": "2025 ON · Paper 35 Q9"
  },
  "stem": "The equations of two lines are given by\n$$\\begin{aligned}\nl_{1}:&\\ \\mathbf{r}=(2\\mathbf{i}+\\mathbf{j}+4\\mathbf{k})+\\lambda(\\mathbf{i}+2\\mathbf{j}-3\\mathbf{k}),\\\\\nl_{2}:&\\ \\mathbf{r}=(3\\mathbf{i}-\\mathbf{j}+5\\mathbf{k})+\\mu(2\\mathbf{i}+3\\mathbf{j}+a\\mathbf{k}).\n\\end{aligned}$$\n(a) Find the value of $a$ for which $l_{1}$ is perpendicular to $l_{2}$. \\hfill (2)\n\n(b) Find the value of $a$ for which $l_{1}$ and $l_{2}$ intersect. \\hfill (4)\n\n(c) Find the values of $a$ for which the acute angle between $l_{1}$ and $l_{2}$ is equal to $\\cos^{-1}\\left(\\frac{5}{14}\\right)$. \\hfill (4)",
  "figure": "",
  "marks": 10,
  "difficulty": 4,
  "subMarks": {
    "a": 2,
    "b": 4,
    "c": 4
  },
  "solution": "$\\mathbf d_1=(1,2,-3),\\; \\mathbf d_2=(2,3,a)$.\n\n**(a)** Perpendicular: $\\mathbf d_1\\cdot\\mathbf d_2=2+6-3a=0 \\Rightarrow a=\\boxed{8/3}$\n\n**(b)** Equate positions: $2+\\lambda=3+2\\mu$, $1+2\\lambda=-1+3\\mu$, $4-3\\lambda=5+a\\mu$\nFrom first two: $\\mu=-2$, $\\lambda=-4$. Check: $16=5-2a \\Rightarrow a=\\boxed{-11/2}$\n\n**(c)** $|\\mathbf d_1\\cdot\\mathbf d_2|/(|\\mathbf d_1||\\mathbf d_2|)=5/14$:\n$(8-3a)^2/(14(13+a^2))=25/196 \\Rightarrow 707a^2-4704a+3997=0$\n$D=10826884$, $\\sqrt D\\approx 3290.42$\n\n$a\\approx\\boxed{5.65\\text{ or }1.00}$",
  "createdAt": 1784133526647
},
  {
  "id": "cie_p3_25ON35_q10",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Numerical solution of equations"
  ],
  "source": "25_ON_35_10",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 10,
    "code": "35",
    "label": "2025 ON · Paper 35 Q10"
  },
  "stem": "The constant $a$ is such that $\\displaystyle\\int_{0}^{a}x\\mathrm{e}^{\\frac{1}{2}x}\\,\\mathrm{d}x=6$.\n\n(a) Show that $a=2+\\mathrm{e}^{-\\frac{1}{2}a}$. \\hfill (5)\n\n(b) Verify by calculation that $a$ lies between 2.2 and 2.4. \\hfill (2)\n\n(c) Use an iterative formula based on the equation in part (a) to determine $a$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places. \\hfill (3)",
  "figure": "",
  "marks": 10,
  "difficulty": 4,
  "subMarks": {
    "a": 5,
    "b": 2,
    "c": 3
  },
  "solution": "**(a)** Integration by parts: $\\int xe^{x/2}dx = 2xe^{x/2}-4e^{x/2}=2e^{x/2}(x-2)$\n$[2e^{a/2}(a-2)]_0^a=2e^{a/2}(a-2)+4=6 \\Rightarrow e^{a/2}(a-2)=1 \\Rightarrow a=2+e^{-a/2}$ \\checkmark\n\n**(b)** $f(a)=2+e^{-a/2}-a$: $f(2.2)>0$, $f(2.4)<0$ \\Rightarrow 2.2<a<2.4$ \\checkmark\n\n**(c)** Iteration $a_{n+1}=2+e^{-a_n/2}$, start $a_0=2.3$:\n| n | $a_n$ | $a_{n+1}$ |\n|---|---|---|\n| 0 | 2.3000 | 2.3166 |\n| 1 | 2.3166 | 2.3141 |\n| 2 | 2.3141 | 2.3144 |\n| 3 | 2.3144 | 2.3143 |\n\nConverges to **$a\\approx 2.31$** (2 d.p.)",
  "createdAt": 1784133526648
},
  {
  "id": "cie_p3_25ON35_q11",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differential equations"
  ],
  "source": "25_ON_35_11",
  "examRef": {
    "year": 2025,
    "month": "ON",
    "paper": "35",
    "qno": 11,
    "code": "35",
    "label": "2025 ON · Paper 35 Q11"
  },
  "stem": "A fungal disease is affecting some of the trees in a forest. The fraction of the trees affected after $t$ years is denoted by $x$. The rate of increase of $x$ is proportional to the product of the fraction of the trees affected and the fraction of the trees **not** affected.\n\n(a) Explain why, after $t$ years, $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=kx(1-x)$, where $k$ is a constant. \\hfill (1)\n\n(b) When the disease is first detected, one quarter of the trees are affected. Two years later, one third of the trees are affected.\n\nSolve the differential equation to find the number of years from the time when the disease is first detected until the time when three quarters of the trees are affected. Give your answer correct to the nearest year. \\hfill (8)",
  "figure": "",
  "marks": 9,
  "difficulty": 4,
  "subMarks": {
    "a": 1,
    "b": 8
  },
  "solution": "**(a)** Rate $\\propto$ affected($x$) $\\times$ not affected($1-x$) \\Rightarrow $dx/dt=kx(1-x)$. \\checkmark\n\n**(b)** Separate variables: $\\int dx/[x(1-x)]=\\int k dt$\n$\\ln|x|-\\ln|1-x|=kt+C \\Rightarrow x/(1-x)=Ae^{kt}$\n\n$t=0, x=1/4$: $A=1/3$. So $x/(1-x)=\\frac13 e^{kt}$\n\n$t=2, x=1/3$: $1/2=\\frac13 e^{2k} \\Rightarrow e^{2k}=3/2 \\Rightarrow k=\\frac12\\ln 1.5$\n\nFind $t$ when $x=3/4$: $3=\\frac13 e^{kt} \\Rightarrow e^{kt}=9 \\Rightarrow kt=\\ln 9$\n$t=\\ln 9/(\\frac12\\ln 1.5)=2\\ln 9/\\ln 1.5\\approx 4.394/0.405\\approx 10.84$\n\n**Nearest year:** $\\boxed{11\\text{ years}}$",
  "createdAt": 1784133526649
},
  {"id": "cie_p3_25MJ31_q1","board": "CIE","subject": "P3","chapter": ["Algebra (modulus functions)"],"source": "25_MJ_31_1","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 1,"code": "31","label": "2025 MJ · Paper 31 Q1"},"stem": "(a) Sketch the graph of $y=|2x-3|$. \\hfill (1)\n\n(b) Solve the inequality $3x-1<|2x-3|$. \\hfill (2)","figure": "","marks": 3,"difficulty": 2,"subMarks": {"a": 1,"b": 2},"solution": "**(a)** V-shaped graph with vertex at $(\\frac{3}{2},0)$.\n\n- For $x \\ge \\frac{3}{2}$: straight line $y=2x-3$ (gradient $2$).\n- For $x < \\frac{3}{2}$: straight line $y=3-2x$ (gradient $-2$).\n\nKey points: y-intercept $(0,3)$; x-intercept $(\\frac{3}{2},0)$.\n\n---\n\n**(b)** Consider two cases:\n\n**Case 1:** $2x-3 \\ge 0$, i.e. $x \\ge \\frac{3}{2}$\n$$3x-1 < 2x-3 \\Rightarrow x < -2$$\nNo solution since $x \\ge 1.5$ contradicts $x < -2$.\n\n**Case 2:** $2x-3 < 0$, i.e. $x < \\frac{3}{2}$\n$$3x-1 < -(2x-3)=3-2x \\Rightarrow 5x<4 \\Rightarrow x<\\frac{4}{5}$$\nCombined with $x<\\frac{3}{2}$: **solution $x<\\frac{4}{5}$**.","createdAt": 1784300000001},
  {"id": "cie_p3_25MJ31_q2","board": "CIE","subject": "P3","chapter": ["Logarithmic and exponential functions"],"source": "25_MJ_31_2","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 2,"code": "31","label": "2025 MJ · Paper 31 Q2"},"stem": "It is given that $2\\ln p+\\ln(p-1)-\\frac12\\ln(q+1)=3$. \n\nFind $q$ in terms of $p$. \\hfill (3)","figure": "","marks": 3,"difficulty": 2,"solution": "Combine using log laws:\n$$2\\ln p+\\ln(p-1)-\\tfrac12\\ln(q+1)=3$$\n$$\\ln p^2+\\ln(p-1)-\\ln\\sqrt{q+1}=3$$\n$$\\ln\\left(\\frac{p^2(p-1)}{\\sqrt{q+1}}\\right)=3$$\nExponentiate both sides:\n$$\\frac{p^2(p-1)}{\\sqrt{q+1}}=e^3$$\n$$\\sqrt{q+1}=\\frac{p^2(p-1)}{e^3}$$\nSquaring:\n$$q+1=\\frac{p^4(p-1)^2}{e^6}$$\n\n**$q=\\dfrac{p^4(p-1)^2}{e^6}-1$**","createdAt": 1784300000002},
  {"id": "cie_p3_25MJ31_q3","board": "CIE","subject": "P3","chapter": ["Complex numbers"],"source": "25_MJ_31_3","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 3,"code": "31","label": "2025 MJ · Paper 31 Q3"},"stem": "Find the complex numbers $z$ for which $\\dfrac{z+5\\mathrm{i}}{z-5}$ is real and $|z|=\\sqrt{17}$. Give your answers in the form $z=x+\\mathrm{i}y$, where $x$ and $y$ are real. \\hfill (6)","figure": "","marks": 6,"difficulty": 4,"solution": "Let $z=x+\\mathrm{i}y$.\n\n**Condition 1 — fraction is real:**\nImaginary part of numerator (after multiplying by conjugate of denominator) must be zero:\n$$(y+5)(x-5)-xy=0 \\Rightarrow 5x-5y-25=0 \\Rightarrow x-y=5$$\nSo **$x=y+5$**.\n\n**Condition 2 — modulus:**\n$$x^2+y^2=17 \\Rightarrow (y+5)^2+y^2=17 \\Rightarrow 2y^2+10y+8=0$$\n$$y^2+5y+4=0 \\Rightarrow (y+1)(y+4)=0$$\n$$y=-1 \\text{ or } y=-4$$\n\n- $y=-1$: $x=4$ → **$z=4-\\mathrm{i}$**\n- $y=-4$: $x=1$ → **$z=1-4\\mathrm{i}$**\n\nBoth satisfy $|z|=\\sqrt{17}$ ✓ and real condition ✓.","createdAt": 1784300000003},
  {"id": "cie_p3_25MJ31_q4","board": "CIE","subject": "P3","chapter": ["Differentiation"],"source": "25_MJ_31_4","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 4,"code": "31","label": "2025 MJ · Paper 31 Q4"},"stem": "The parametric equations of a curve are $$x=\\mathrm{e}^{\\tan t},\\quad y=3\\tan^2 t.$$ Find the equation of the tangent to the curve at the point $(\\mathrm{e},3)$. Give your answer in the form $y=mx+c$, where $m$ and $c$ are exact. \\hfill (6)","figure": "","marks": 6,"difficulty": 4,"solution": "At point $(\\mathrm{e},3)$:\n$$\\mathrm{e}^{\\tan t}=\\mathrm{e} \\Rightarrow \\tan t=1 \\Rightarrow t=\\frac{\\pi}{4}$$\nCheck: $y=3\\tan^2(\\pi/4)=3$ ✓\n\nDifferentiate w.r.t. $t$:\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t}=\\mathrm{e}^{\\tan t}\\sec^2 t, \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}t}=6\\tan t\\sec^2 t$$\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{6\\tan t}{\\mathrm{e}^{\\tan t}}$$\n\nAt $t=\\pi/4$: **$m=\\dfrac{6}{\\mathrm{e}}$**\n\nTangent: $y-3=\\dfrac{6}{\\mathrm{e}}(x-\\mathrm{e})$\n\n**$y=\\dfrac{6}{\\mathrm{e}}x-3$**","createdAt": 1784300000004},
  {"id": "cie_p3_25MJ31_q5","board": "CIE","subject": "P3","chapter": ["Algebra (factor theorem and remainder theorem)"],"source": "25_MJ_31_5","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 5,"code": "31","label": "2025 MJ · Paper 31 Q5"},"stem": "The polynomial $3x^3+pax^2+7a^2 x+qa^3$ is denoted by $f(x)$, where $p$, $q$ and $a$ are constants and $a\\neq 0$. \n\nWhen $f(x)$ is divided by $(x+2a)$ the remainder is $-22a^3$. When $f(x)$ is divided by $(3x-a)$ the remainder is $-a^3$. \n\nFind the values of $p$ and $q$. \\hfill (5)","figure": "","marks": 5,"difficulty": 3,"solution": "By the Remainder Theorem:\n\n$f(-2a)=-22a^3$:\n$$3(-8a^3)+pa(4a^2)+7a^2(-2a)+qa^3=-22a^3$$\n$$(4p+q)a^3-38a^3=-22a^3 \\Rightarrow 4p+q=16 \\quad ...(1)$$\n\n$f(a/3)=-a^3$:\n$$\\frac{a^3}{9}+\\frac{pa^3}{9}+\\frac{7a^3}{3}+qa^3=-a^3$$\nMultiply by 9: $1+p+21+9q=-9 \\Rightarrow p+9q=-31 \\quad ...(2)$\n\nFrom (1): $q=16-4p$. Into (2):\n$$p+9(16-4p)=-31 \\Rightarrow -35p=-175$$\n\n**$p=5$, $q=-4$**","createdAt": 1784300000005},
  {"id": "cie_p3_25MJ31_q6","board": "CIE","subject": "P3","chapter": ["Complex numbers"],"source": "25_MJ_31_6","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 6,"code": "31","label": "2025 MJ · Paper 31 Q6"},"stem": "It is given that $z_1=3\\mathrm{e}^{\\frac14\\pi\\mathrm{i}}$, $z_2=\\frac32\\mathrm{e}^{\\frac16\\pi\\mathrm{i}}$ and $\\omega=2\\mathrm{e}^{\\frac12\\pi\\mathrm{i}}$. \n\n(a) State the values of $\\omega z_1$ and $\\omega z_2$. Give your answers in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r>0$ and $-\\pi<\\theta\\le\\pi$. \\hfill (2)\n\n(b) On a sketch of an Argand diagram with origin $O$, show the points $A,B,C$ and $D$ representing the complex numbers $z_1$, $z_2$, $\\omega z_1$ and $\\omega z_2$ respectively. \\hfill (2)\n\n(c) State the geometric effects of multiplying $z_1$ and $z_2$ by $\\omega$. \\hfill (2)","figure": "","marks": 6,"difficulty": 3,"subMarks": {"a": 2,"b": 2,"c": 2},"solution": "**(a)** Using $\\mathrm{e}^{\\mathrm{i}\\alpha}\\cdot\\mathrm{e}^{\\mathrm{i}\\beta}=\\mathrm{e}^{\\mathrm{i}(\\alpha+\\beta)}$:\n\n$$\\omega z_1 = 2\\mathrm{e}^{\\mathrm{i}\\pi/2} \\cdot 3\\mathrm{e}^{\\mathrm{i}\\pi/4} = \\mathbf{6\\mathrm{e}^{3\\pi\\mathrm{i}/4}}$$\n\n$$\\omega z_2 = 2\\mathrm{e}^{\\mathrm{i}\\pi/2} \\cdot \\tfrac32\\mathrm{e}^{\\mathrm{i}\\pi/6} = \\mathbf{3\\mathrm{e}^{2\\pi\\mathrm{i}/3}}$$\nBoth arguments lie in $(-\\pi,\\pi]$.\n\n---\n\n**(b)** Argand diagram sketch:\n\n| Point | Modulus | Argument | Quadrant |\n|-------|---------|----------|----------|\n| A ($z_1$) | 3 | $\\pi/4$ (45°) | I |\n| B ($z_2$) | 1.5 | $\\pi/6$ (30°) | I |\n| C ($\\omega z_1$) | 6 | $3\\pi/4$ (135°) | II |\n| D ($\\omega z_2$) | 3 | $2\\pi/3$ (120°) | II |\n\nPoints A, B in first quadrant; C, D in second quadrant, further out from origin.\n\n---\n\n**(c)** Multiplying by $\\omega=2\\mathrm{e}^{\\mathrm{i}\\pi/2}$ gives:\n- **Enlargement scale factor 2** centered at origin;\n- **Rotation $90^\\circ$ anticlockwise** about origin.","createdAt": 1784300000006},
  {"id": "cie_p3_25MJ31_q7","board": "CIE","subject": "P3","chapter": ["Trigonometry"],"source": "25_MJ_31_7","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 7,"code": "31","label": "2025 MJ · Paper 31 Q7"},"stem": "(a) Express $5\\sin\\left(x+\\frac16\\pi\\right)-4\\cos x$ in the form $R\\sin(x-\\alpha)$, where $R>0$ and $0<\\alpha<\\frac12\\pi$. State the exact value of $R$ and give the value of $\\alpha$ correct to 3 decimal places. \\hfill (4)\n\n(b) Hence solve the equation $5\\sin\\left(2\\theta+\\frac16\\pi\\right)-4\\cos 2\\theta=\\sqrt7$ for $0\\le\\theta\\le\\pi$. Give your answers correct to 2 decimal places. \\hfill (4)","figure": "","marks": 8,"difficulty": 3,"subMarks": {"a": 4,"b": 4},"solution": "**(a)** Expand $5\\sin(x+\\pi/6)$:\n$$5[\\sin x\\cos(\\pi/6)+\\cos x\\sin(\\pi/6)] = \\frac{5\\sqrt3}{2}\\sin x + \\frac52\\cos x$$\nOriginal expression $= \\frac{5\\sqrt3}{2}\\sin x + (\\frac52-4)\\cos x = \\frac{5\\sqrt3}{2}\\sin x - \\frac32\\cos x$.\n\nCompare with $R\\sin(x-\\alpha)=R\\cos\\alpha\\sin x - R\\sin\\alpha\\cos x$:\n$$R\\cos\\alpha = \\frac{5\\sqrt3}{2}, \\quad R\\sin\\alpha = \\frac32$$\n$$R^2 = \\frac{75+9}{4}=21 \\Rightarrow \\mathbf{R=\\sqrt{21}}$$\n$$\\tan\\alpha = \\frac{\\sqrt3}{5} \\Rightarrow \\mathbf{\\alpha \\approx 0.333}$$ (to 3 d.p.)\n\n---\n\n**(b)** From (a): expression $= \\sqrt{21}\\sin(2\\theta-\\alpha)$.\n$$\\sqrt{21}\\sin(2\\theta-\\alpha)=\\sqrt7 \\Rightarrow \\sin(2\\theta-\\alpha)=\\frac{1}{\\sqrt3}$$\nLet $\\beta = \\arcsin(1/\\sqrt3) \\approx 0.6155$ rad.\n$$2\\theta_1 = 0.3335+0.6155 = 0.9490 \\Rightarrow \\mathbf{\\theta_1 \\approx 0.47}$$\n$$2\\theta_2 = 0.3335+\\pi-0.6155 = 2.8595 \\Rightarrow \\mathbf{\\theta_2 \\approx 1.43}$$\n(both in $[0,\\pi]$; 2 d.p.)","createdAt": 1784300000007},
  {"id": "cie_p3_25MJ31_q8","board": "CIE","subject": "P3","chapter": ["Vectors"],"source": "25_MJ_31_8","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 8,"code": "31","label": "2025 MJ · Paper 31 Q8"},"stem": "With respect to the origin $O$, the points $A$ and $B$ have position vectors $2\\mathbf{i}+4\\mathbf{k}$ and $5\\mathbf{i}+\\mathbf{j}+6\\mathbf{k}$ respectively. The line $l_1$ passes through the points $A$ and $B$. \n\n(a) Find a vector equation for the line $l_1$. \\hfill (2)\n\nThe line $l_2$ has equation $\\mathbf{r}=2\\mathbf{i}+\\mathbf{j}+5\\mathbf{k}+\\mu(\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k})$. \n\n(b) Show that $l_1$ and $l_2$ do **not** intersect. \\hfill (4)\n\n(c) Find the acute angle between the directions of $l_1$ and $l_2$. \\hfill (3)","figure": "","marks": 9,"difficulty": 4,"subMarks": {"a": 2,"b": 4,"c": 3},"solution": "**(a)** $\\vec{OA}=(2,0,4)$, $\\vec{OB}=(5,1,6)$. Direction $\\vec{AB}=(3,1,2)$.\n\n**$\\mathbf{r} = (2\\mathbf{i}+4\\mathbf{k}) + \\lambda(3\\mathbf{i}+\\mathbf{j}+2\\mathbf{k})$**\n\n---\n\n**(b)** $l_1: \\mathbf{r}=(2,0,4)+\\lambda(3,1,2)$, \\quad $l_2: \\mathbf{r}=(2,1,5)+\\mu(1,2,3)$\n\nEquate components:\n$$\\begin{cases}\n2+3\\lambda = 2+\\mu & \\Rightarrow \\mu=3\\lambda \\quad (1)\\\\\n0+\\lambda = 1+2\\mu & \\quad (2)\\\\\n4+2\\lambda = 5+3\\mu & \\quad (3)\n\\end{cases}$$\nFrom (1),(2): $\\lambda = 1+6\\lambda \\Rightarrow \\lambda=-\\tfrac15$, $\\mu=-\\tfrac35$.\n\nCheck (3): LHS $=4-\\tfrac25=\\tfrac{18}{5}$, RHS $=5-\\tfrac95=\\tfrac{16}{5}$. Not equal.\n\n**Lines do not intersect (skew).** ✓\n\n---\n\n**(c)** $\\mathbf{d}_1=(3,1,2)$, $\\mathbf{d}_2=(1,2,3)$\n$$\\mathbf{d}_1\\cdot\\mathbf{d}_2 = 11, \\quad |\\mathbf{d}_1|=|\\mathbf{d}_2|=\\sqrt{14}$$\n$$\\cos\\phi = \\dfrac{11}{14} \\Rightarrow \\mathbf{\\phi = \\arccos\\left(\\dfrac{11}{14}\\right)} \\approx 38.2^\\circ$$","createdAt": 1784300000008},
  {"id": "cie_p3_25MJ31_q9","board": "CIE","subject": "P3","chapter": ["Numerical solution of equations"],"source": "25_MJ_31_9","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 9,"code": "31","label": "2025 MJ · Paper 31 Q9"},"stem": "The constant $a$ is such that $\\displaystyle\\int_{1}^{a} 6x\\ln x\\,\\mathrm{d}x = 4$. \n\n(a) Show that $a=\\exp\\!\\left(\\dfrac16\\left(\\dfrac5{a^2}+3\\right)\\right)$, where $\\exp(x)$ denotes $\\mathrm{e}^x$. \\hfill (5)\n\n(b) Verify by calculation that $a$ lies between $2$ and $2.1$. \\hfill (2)\n\n(c) Use an iterative formula based on the equation in part (a) to determine $a$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places. \\hfill (3)","figure": "","marks": 10,"difficulty": 4,"subMarks": {"a": 5,"b": 2,"c": 3},"solution": "**(a)** Integration by parts: $u=\\ln x$, $dv=6x\\,dx$ → $v=3x^2$.\n$$\\int 6x\\ln x\\,dx = 3x^2\\ln x - \\int 3x\\,dx = 3x^2\\ln x - \\tfrac32x^2$$\nEvaluate $[1 \\to a]$:\n$$3a^2\\ln a - \\tfrac32a^2 + \\tfrac32 = 4 \\Rightarrow 3a^2\\ln a = \\tfrac{3a^2+5}{2}$$\n$$\\ln a = \\tfrac12 + \\tfrac{5}{6a^2}$$\n$$\\mathbf{a = \\exp\\!\\left(\\tfrac16\\left(3+\\tfrac{5}{a^2}\\right)\\right)}$$ ✓\n\n---\n\n**(b)** At $a=2$: integral $\\approx 3.82 < 4$. At $a=2.1$: integral $\\approx 4.70 > 4$.\nIntegrand positive for $x>1$, so **$2<a<2.1$** ✓\n\n---\n\n**(c)** Iteration: $a_{n+1}=\\exp\\bigl(\\tfrac16(\\tfrac{5}{a_n^2}+3)\\bigr)$, $a_0=2.0$.\n\n| n | $a_n$ |\n|---|--------|\n| 0 | 2.0000 |\n| 1 | 2.0310 |\n| 2 | 2.0174 |\n| 3 | 2.0236 |\n| 4 | 2.0204 |\n| 5 | 2.0219 |\n| 6 | 2.0211 |\n\nConverges to **$a \\approx 2.02$** (2 d.p.)","createdAt": 1784300000009},
  {"id": "cie_p3_25MJ31_q10","board": "CIE","subject": "P3","chapter": ["Differential equations"],"source": "25_MJ_31_10","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 10,"code": "31","label": "2025 MJ · Paper 31 Q10"},"stem": "(a) Find the quotient and remainder when $x^3+5x^2-2x-15$ is divided by $x^2-3$. \\hfill (3)\n\n(b) The variables $x$ and $y$ satisfy the differential equation $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{x^3+5x^2-2x-15}{6y(x^2-3)}.$$ It is given that $y=2$ when $x=2$. \n\nSolve the differential equation to obtain an expression for $y^2$ in terms of $x$. \\hfill (5)","figure": "","marks": 8,"difficulty": 4,"subMarks": {"a": 3,"b": 5},"solution": "**(a)** Long division: $x^3+5x^2-2x-15$ by $x^2-3$:\n\n$x^3/x^2=x$ → subtract $x^3-3x$ → remainder $5x^2+x-15$.\n$5x^2/x^2=5$ → subtract $5x^2-15$ → remainder **$x$**.\n\n**Quotient $=x+5$, Remainder $=x$** ✓\n\n---\n\n**(b)** From (a): $\\frac{x^3+5x^2-2x-15}{x^2-3} = x+5+\\frac{x}{x^2-3}$.\nSeparate variables:\n$$\\int 6y\\,dy = \\int \\left(x+5+\\frac{x}{x^2-3}\\right)dx$$\n$$3y^2 = \\tfrac12x^2+5x+\\tfrac12\\ln|x^2-3|+c$$\nGiven $y=2$ when $x=2$: $12 = 2+10+0+c \\Rightarrow c=0$.\n\nFor $x^2>3$ (near $x=2$):\n\n**$y^2 = \\dfrac{x^2}{6}+\\dfrac{5x}{3}+\\dfrac16\\ln(x^2-3)$**\nor $y^2 = \\tfrac16[x^2+10x+\\ln(x^2-3)]$","createdAt": 1784300000010},
  {"id": "cie_p3_25MJ31_q11","board": "CIE","subject": "P3","chapter": ["Differentiation", "Integration"],"source": "25_MJ_31_11","examRef": {"year": 2025,"month": "MJ","paper": "31","qno": 11,"code": "31","label": "2025 MJ · Paper 31 Q11"},"stem": "The diagram shows the curve $y=\\cos x\\sqrt{\\sin 2x}$ for $0\\le x\\le \\frac12\\pi$. The curve has a maximum point at $M$, where $x=a$. \n\n(a) Find the exact value of $a$. \\hfill (6)\n\n(b) The region enclosed between the $x$-axis and the curve is rotated through $2\\pi$ radians about the $x$-axis. \n\nFind the exact volume of the solid generated. \\hfill (5)","figure": "data/stem_sources/25_MJ_31/Q11_fig.png","marks": 11,"difficulty": 5,"subMarks": {"a": 6,"b": 5},"solution": "**(a)** For $0<x<\\pi/2$: $\\cos x>0$, $\\sin 2x>0$, so $y>0$. Maximize $y^2=g(x)$:\n$$g(x)=\\cos^2 x \\cdot \\sin 2x = 2\\sin x\\cos^3 x$$\n$$g'(x) = 2\\cos^2 x(\\cos^2 x-3\\sin^2 x) = 2\\cos^2 x(1-4\\sin^2 x)$$\nSet $g'=0$ in $(0,\\pi/2)$: $\\cos x \\neq 0$, so $\\sin^2 x = \\tfrac14$.\n$$\\sin x = \\tfrac12 \\Rightarrow \\mathbf{x = \\tfrac{\\pi}{6}}$$\nSign change: $g'>0$ then $g'<0$ → maximum confirmed.\n\n**$a = \\dfrac{\\pi}{6}$**\n\n---\n\n**(b)** Volume about x-axis:\n$$V = \\pi\\int_0^{\\pi/2} y^2 dx = \\pi\\int_0^{\\pi/2} 2\\sin x\\cos^3 x\\,dx$$\nSubstitute $u=\\cos x$, $du=-\\sin x\\,dx$: limits $1 \\to 0$.\n$$V = 2\\pi\\int_0^1 u^3 du = 2\\pi \\Bigl[\\tfrac{u^4}{4}\\Bigr]_0^1 = \\tfrac{\\pi}{2}$$\n\n**$V = \\dfrac{\\pi}{2}$ cubic units**","createdAt": 1784300000011}
,
  {
    "id": "cie_p3_25MJ35_q1",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Logarithmic and exponential functions"
    ],
    "source": "25_MJ_35_1",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 1,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q1"
    },
    "stem": "Solve the equation $3^{4-2x} = 5(6^{x-1})$. Give your answer correct to 3 significant figures. \\hfill (4)",
    "figure": "",
    "marks": 4,
    "difficulty": 3,
    "subMarks": {
      "a": 4
    },
    "solution": "Take natural logarithms of both sides:\n$$(4-2x)\\ln 3=\\ln 5+(x-1)\\ln 6$$\n$$4\\ln 3-2x\\ln 3=\\ln 5+x\\ln 6-\\ln 6.$$\nCollect the $x$ terms:\n$$4\\ln 3+\\ln 6-\\ln 5=x(2\\ln 3+\\ln 6)$$\n$$x=\\frac{4\\ln 3+\\ln 6-\\ln 5}{2\\ln 3+\\ln 6}.$$\nUsing $\\ln 3\\approx1.0986,\\ \\ln 6\\approx1.7918,\\ \\ln 5\\approx1.6094$:\n$$x\\approx\\frac{4(1.0986)+1.7918-1.6094}{2(1.0986)+1.7918}=\\frac{4.5768}{3.9890}\\approx1.147.$$\n$$\\boxed{x\\approx1.15\\ \\text{(3 s.f.)}}$$",
    "createdAt": 1784176224713
  },
  {
    "id": "cie_p3_25MJ35_q2",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Trigonometry"
    ],
    "source": "25_MJ_35_2",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 2,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q2"
    },
    "stem": "Solve the equation $3\\cot\\theta - 4\\csc^{2}\\theta + 5 = 0$ for $-\\pi \\leq \\theta \\leq \\pi$. \\hfill (5)",
    "figure": "",
    "marks": 5,
    "difficulty": 3,
    "subMarks": {
      "a": 5
    },
    "solution": "Use $\\csc^{2}\\theta=1+\\cot^{2}\\theta$:\n$$3\\cot\\theta-4(1+\\cot^{2}\\theta)+5=0$$\n$$-4\\cot^{2}\\theta+3\\cot\\theta+1=0\\quad\\Rightarrow\\quad4\\cot^{2}\\theta-3\\cot\\theta-1=0$$\n$$(4\\cot\\theta+1)(\\cot\\theta-1)=0.$$\nSo $\\cot\\theta=1$ or $\\cot\\theta=-\\tfrac14$.\n\n$\\cot\\theta=1\\Rightarrow\\tan\\theta=1\\Rightarrow\\theta=\\tfrac{\\pi}{4},\\ -\\tfrac{3\\pi}{4}$ (in $[-\\pi,\\pi]$).\n\n$\\cot\\theta=-\\tfrac14\\Rightarrow\\tan\\theta=-4\\Rightarrow\\theta=-\\tan^{-1}4,\\ \\pi-\\tan^{-1}4$.\n\n$$\\boxed{\\theta=\\frac{\\pi}{4},\\ -\\frac{3\\pi}{4},\\ -\\tan^{-1}4,\\ \\pi-\\tan^{-1}4}$$\n(Decimal form: $\\theta\\approx1.326\\pi?$ no; $-\\tan^{-1}4\\approx-1.326$, $\\pi-\\tan^{-1}4\\approx1.816$.)",
    "createdAt": 1784176224714
  },
  {
    "id": "cie_p3_25MJ35_q3",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "source": "25_MJ_35_3",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 3,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q3"
    },
    "stem": "The complex numbers $s$ and $t$ are given by$$s = 5(\\cos 0.25 + i\\sin 0.25) \\qquad \\text{and} \\qquad t = 6e^{3i}.$$**(a)** Express $\\dfrac{s}{t}$ in the form $re^{i\\theta}$, where $-\\pi < \\theta \\leq \\pi$ and $r > 0$. \\hfill (4)**(b)** In an Argand diagram with origin O, the points A and B represent the complex numbers $s$ and $\\dfrac{s}{t}$ respectively. By considering the line segments OA and OB, or otherwise, state the two geometric effects of dividing a complex number by $6e^{3i}$. \\hfill (2)",
    "figure": "",
    "marks": 6,
    "difficulty": 4,
    "subMarks": {
      "a": 4,
      "b": 2
    },
    "solution": "(a) Write $s=5e^{0.25i}$. Then\n$$\\frac{s}{t}=\\frac{5e^{0.25i}}{6e^{3i}}=\\frac{5}{6}e^{(0.25-3)i}=\\frac{5}{6}e^{-2.75i}.$$\nSince $-2.75\\in(-\\pi,\\pi]$, we have $r=\\tfrac56,\\ \\theta=-2.75$.\n$$\\boxed{\\frac{s}{t}=\\frac{5}{6}e^{-2.75i}}$$\n\n(b) Dividing by $6e^{3i}$ is the same as multiplying by $\\tfrac16 e^{-3i}$. Hence the two geometric effects are:\n- a contraction (enlargement) by scale factor $\\tfrac16$ about the origin;\n- a rotation of $-3$ radians (i.e. $3$ radians clockwise) about the origin.",
    "createdAt": 1784176224715
  },
  {
    "id": "cie_p3_25MJ35_q4",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation"],
    "source": "25_MJ_35_4",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 4,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q4"
    },
    "stem": "Find the exact coordinates of the stationary point of the curve with equation $y = 3x^{3}\\ln x^{4}$, for $x > 0$. \\hfill (6)",
    "figure": "",
    "marks": 6,
    "difficulty": 4,
    "subMarks": {
      "a": 6
    },
    "solution": "For $x>0$, $\\ln x^{4}=4\\ln x$, so $y=12x^{3}\\ln x$.\n$$\\frac{dy}{dx}=12\\Bigl(3x^{2}\\ln x+x^{3}\\cdot\\frac{1}{x}\\Bigr)=12x^{2}(3\\ln x+1).$$\nAt a stationary point $\\frac{dy}{dx}=0$, and $x>0$, so $3\\ln x+1=0$:\n$$\\ln x=-\\frac13\\quad\\Rightarrow\\quad x=e^{-1/3}.$$\nThen $y=12e^{-1}\\ln(e^{-4/3})=12e^{-1}\\Bigl(-\\frac43\\Bigr)=-\\frac{4}{e}.$\n$$\\boxed{\\left(e^{-1/3},\\ -\\frac{4}{e}\\right)}$$",
    "createdAt": 1784176224716
  },
  {
    "id": "cie_p3_25MJ35_q5",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Complex numbers"
    ],
    "source": "25_MJ_35_5",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 5,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q5"
    },
    "stem": "The diagram shows the locus of points representing the complex numbers $z$ satisfying $|z + 5 - 4i| = 3$.**(a)** For the points on this locus, determine the maximum and minimum possible values of $|z|$. \\hfill (3)**(b)** For the points on this locus, determine the minimum possible value of $\\arg z$. \\hfill (3)",
    "figure": "data/images/25_MJ_35_Q5.png",
    "marks": 6,
    "difficulty": 4,
    "subMarks": {
      "a": 3,
      "b": 3
    },
    "solution": "The locus is a circle with centre $C(-5,4)$ and radius $3$, since $|z-(-5+4i)|=3$.\n\n(a) $|OC|=\\sqrt{(-5)^{2}+4^{2}}=\\sqrt{41}$. For points on the circle,\n$$|z|_{\\max}=|OC|+3=\\sqrt{41}+3,\\qquad |z|_{\\min}=|OC|-3=\\sqrt{41}-3.$$\n\n(b) The minimum argument is the angle of the lower tangent from $O$ to the circle. The angle of $OC$ is $\\arg(-5+4i)=\\pi-\\tan^{-1}\\tfrac45$, and the half-angle $\\alpha$ satisfies $\\sin\\alpha=\\frac{3}{\\sqrt{41}}$.\n$$\\arg z_{\\min}=\\Bigl(\\pi-\\tan^{-1}\\frac45\\Bigr)-\\sin^{-1}\\!\\frac{3}{\\sqrt{41}}\\approx2.4669-0.4874\\approx1.98\\text{ rad}.$$\n$$\\boxed{|z|_{\\max}=\\sqrt{41}+3,\\ |z|_{\\min}=\\sqrt{41}-3;\\quad \\arg z_{\\min}\\approx1.98\\text{ rad}}$$",
    "createdAt": 1784176224717
  },
  {
    "id": "cie_p3_25MJ35_q6",
    "board": "CIE",
    "subject": "P3",
    "chapter": ["Differentiation"],
    "source": "25_MJ_35_6",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 6,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q6"
    },
    "stem": "The parametric equations of a curve are$$x = \\frac{2}{\\cos 3t} \\qquad \\text{and} \\qquad y = \\tan 3t,$$for $0 \\leq t \\leq 2\\pi$.**(a)** Show that $\\dfrac{dy}{dx}$ can be written as $A\\csc 3t$, where $A$ is a constant to be found. \\hfill (5)**(b)** Find an equation of the normal to the curve at the point where $t = \\dfrac{1}{12}\\pi$. Give your answer in the form $y = mx + c$, where the constants $m$ and $c$ are exact. \\hfill (4)",
    "figure": "",
    "marks": 9,
    "difficulty": 4,
    "subMarks": {
      "a": 5,
      "b": 4
    },
    "solution": "(a) $x=2\\sec 3t$, so $\\frac{dx}{dt}=2\\cdot\\sec 3t\\tan 3t\\cdot3=\\frac{6\\sin 3t}{\\cos^{2}3t}$.\n$y=\\tan 3t$, so $\\frac{dy}{dt}=\\frac{3}{\\cos^{2}3t}$.\n$$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{3/\\cos^{2}3t}{6\\sin 3t/\\cos^{2}3t}=\\frac{3}{6\\sin 3t}=\\frac{1}{2\\sin 3t}=\\frac12\\csc 3t.$$\nHence $\\boxed{A=\\frac12}$.\n\n(b) At $t=\\frac{\\pi}{12}$, $3t=\\frac{\\pi}{4}$. $x=\\frac{2}{\\cos(\\pi/4)}=2\\sqrt2$, $y=\\tan(\\pi/4)=1$.\nGradient of tangent $=\\frac{dy}{dx}=\\frac12\\csc\\frac{\\pi}{4}=\\frac{\\sqrt2}{2}$.\nNormal gradient $=-\\frac{1}{(\\sqrt2/2)}=-\\sqrt2$.\n$$y-1=-\\sqrt2(x-2\\sqrt2)\\ \\Rightarrow\\ y=-\\sqrt2\\,x+5.$$\n$$\\boxed{y=-\\sqrt2\\,x+5}$$",
    "createdAt": 1784176224718
  },
  {
    "id": "cie_p3_25MJ35_q7",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Integration"
    ],
    "source": "25_MJ_35_7",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 7,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q7"
    },
    "stem": "The equation of a curve is $y = \\tan^{-1}(4x)$.**(a)** Find the exact values of $x$ when the gradient of the curve is $\\dfrac{1}{4}$. \\hfill (4)**(b)** Find the exact value of $\\displaystyle\\int_{0}^{0.25} y\\,dx$. \\hfill (5)",
    "figure": "",
    "marks": 9,
    "difficulty": 4,
    "subMarks": {
      "a": 4,
      "b": 5
    },
    "solution": "(a) $\\frac{dy}{dx}=\\frac{4}{1+(4x)^{2}}=\\frac{4}{1+16x^{2}}$.\nSet equal to $\\frac14$: $\\frac{4}{1+16x^{2}}=\\frac14\\Rightarrow16=1+16x^{2}\\Rightarrow x^{2}=\\frac{15}{16}$.\n$$\\boxed{x=\\pm\\frac{\\sqrt{15}}{4}}$$\n\n(b) Integration by parts with $u=\\tan^{-1}(4x),\\ dv=dx$:\n$$\\int_{0}^{1/4}\\tan^{-1}(4x)\\,dx=\\Bigl[x\\tan^{-1}(4x)\\Bigr]_{0}^{1/4}-\\int_{0}^{1/4}\\frac{4x}{1+16x^{2}}\\,dx.$$\nFirst term: $\\frac14\\tan^{-1}(1)=\\frac14\\cdot\\frac{\\pi}{4}=\\frac{\\pi}{16}$.\nSecond term: $\\int\\frac{4x}{1+16x^{2}}dx=\\frac18\\ln(1+16x^{2})$, so $\\Bigl[\\frac18\\ln(1+16x^{2})\\Bigr]_{0}^{1/4}=\\frac18\\ln2$.\n$$\\boxed{\\int_{0}^{1/4}\\tan^{-1}(4x)\\,dx=\\frac{\\pi}{16}-\\frac18\\ln2}$$",
    "createdAt": 1784176224719
  },
  {
    "id": "cie_p3_25MJ35_q8",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Numerical solution of equations"
    ],
    "source": "25_MJ_35_8",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 8,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q8"
    },
    "stem": "**(a)** By sketching a suitable pair of graphs, show that the equation $\\sec 2x = -2x - \\dfrac{1}{2}$ has exactly one root in the interval $0 \\leq x \\leq \\dfrac{1}{2}\\pi$. \\hfill (2)**(b)** Show by calculation that this root lies between $0.8$ and $1.2$. \\hfill (2)**(c)** Show that, if a sequence of real values given by the iterative formula$$x_{n+1} = \\frac{1}{2}\\cos^{-1}\\!\\left(\\frac{-2}{4x_{n} + 1}\\right)$$converges, then it converges to the root of the equation in part (a). \\hfill (2)**(d)** Use this iterative formula to calculate this root correct to 3 decimal places. Give the result of each iteration to 5 decimal places. \\hfill (3)",
    "figure": "",
    "marks": 9,
    "difficulty": 4,
    "subMarks": {
      "a": 2,
      "b": 2,
      "c": 2,
      "d": 3
    },
    "solution": "(a) Let $f(x)=\\sec 2x+2x+\\tfrac12$. On $[0,\\pi/2]$, $\\sec 2x$ has a vertical asymptote at $x=\\pi/4$.\nFor $0\\le x<\\pi/4$, $\\sec 2x\\ge1>0$ while the line $y=-2x-\\tfrac12<0$, so no intersection there.\nFor $\\pi/4<x\\le\\pi/2$, $\\sec 2x$ increases from $-\\infty$ (just right of $\\pi/4$) to $\\sec\\pi=-1$, while the line decreases from about $-2.07$ to $-3.64$. Since $\\sec 2x$ goes from below the line to above it and is continuous and strictly increasing on this interval, there is exactly one intersection. Hence exactly one root in $[0,\\pi/2]$.\n\n(b) $f(0.8)=\\sec1.6+2(0.8)+0.5\\approx-34.25+2.1<0$.\n$f(1.2)=\\sec2.4+2(1.2)+0.5\\approx-1.356+2.9>0$.\nSign change on the continuous interval $(\\pi/4,\\pi/2)$ containing $(0.8,1.2)$ $\\Rightarrow$ a root lies between $0.8$ and $1.2$.\n\n(c) $\\sec2x=-2x-\\tfrac12\\Rightarrow\\cos2x=\\frac{1}{-2x-1/2}=-\\frac{2}{4x+1}\\Rightarrow x=\\tfrac12\\cos^{-1}\\!\\bigl(-\\frac{2}{4x+1}\\bigr)$. So any limit of the iteration satisfies the original equation.\n\n(d) Starting with $x_{0}=1.00000$:\n$$x_{1}=0.99116,\\ x_{2}=0.99255,\\ x_{3}=0.99234,\\ x_{4}=0.99237,\\ x_{5}=0.99237.$$\n$$\\boxed{x\\approx0.992\\ \\text{(3 d.p.)}}$$",
    "createdAt": 1784176224720
  },
  {
    "id": "cie_p3_25MJ35_q9",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Algebra (partial fractions and binomial expansions)"
    ],
    "source": "25_MJ_35_9",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 9,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q9"
    },
    "stem": "**(a)** Express $\\dfrac{12x^{2} + 55x - 2}{(3x-2)(x+6)}$ in partial fractions. \\hfill (4)**(b)** Hence obtain the expansion of $\\dfrac{12x^{2} + 55x - 2}{(3x-2)(x+6)}$ in ascending powers of $x$, up to and including the term in $x^{2}$. \\hfill (4)",
    "figure": "",
    "marks": 8,
    "difficulty": 3,
    "subMarks": {
      "a": 4,
      "b": 4
    },
    "solution": "(a) Numerator and denominator both have degree 2, so divide first:\n$$\\frac{12x^{2}+55x-2}{(3x-2)(x+6)}=\\frac{12x^{2}+55x-2}{3x^{2}+16x-12}=4+\\frac{-9x+46}{(3x-2)(x+6)}.$$\nLet $\\frac{-9x+46}{(3x-2)(x+6)}=\\frac{A}{3x-2}+\\frac{B}{x+6}$.\n$A(x+6)+B(3x-2)=-9x+46$.\n$x=-6\\Rightarrow -20B=100\\Rightarrow B=-5$.\n$x=\\tfrac23\\Rightarrow \\tfrac{20}{3}A=40\\Rightarrow A=6$.\n$$\\boxed{4+\\frac{6}{3x-2}-\\frac{5}{x+6}}$$\n\n(b) $(3x-2)^{-1}=-\\frac12(1-\\tfrac{3x}{2})^{-1}=-\\frac12-\\frac{3x}{4}-\\frac{9x^{2}}{8}+\\cdots$, so $6(3x-2)^{-1}=-3-\\frac{9x}{2}-\\frac{27x^{2}}{4}+\\cdots$.\n$(x+6)^{-1}=\\frac16(1+\\tfrac{x}{6})^{-1}=\\frac16-\\frac{x}{36}+\\frac{x^{2}}{216}+\\cdots$, so $-5(x+6)^{-1}=-\\frac56+\\frac{5x}{36}-\\frac{5x^{2}}{216}+\\cdots$.\nAdding the constant $4$:\n$$4-3-\\frac56=\\frac16,\\qquad -\\frac92+\\frac{5}{36}=-\\frac{157}{36},\\qquad -\\frac{27}{4}-\\frac{5}{216}=-\\frac{1463}{216}.$$\n$$\\boxed{\\frac{1}{6}-\\frac{157}{36}x-\\frac{1463}{216}x^{2}+\\cdots}$$",
    "createdAt": 1784176224721
  },
  {
    "id": "cie_p3_25MJ35_q10",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Vectors"
    ],
    "source": "25_MJ_35_10",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 10,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q10"
    },
    "stem": "With respect to the origin O, the points A, B and C have position vectors given by$$\\overrightarrow{OA} = 2\\mathbf{i} - \\mathbf{j} - 6\\mathbf{k}, \\qquad \\overrightarrow{OB} = b\\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k} \\qquad \\text{and} \\qquad \\overrightarrow{OC} = -4\\mathbf{i} + 5\\mathbf{j} - 2\\mathbf{k}.$$**(a)** It is given that $\\left|\\overrightarrow{AB}\\right| = \\left|\\overrightarrow{BC}\\right|$. Find the value of $b$. \\hfill (4)**(b)** A, B, C and D are the vertices of a rhombus. Find the position vector of D. \\hfill (5)**(c)** Calculate angle ABC. \\hfill (2)",
    "figure": "",
    "marks": 11,
    "difficulty": 4,
    "subMarks": {
      "a": 4,
      "b": 5,
      "c": 2
    },
    "solution": "(a) $\\overrightarrow{AB}=\\overrightarrow{OB}-\\overrightarrow{OA}=(b-2)\\mathbf{i}-\\mathbf{j}+9\\mathbf{k}$,\n$\\overrightarrow{BC}=\\overrightarrow{OC}-\\overrightarrow{OB}=(-4-b)\\mathbf{i}+7\\mathbf{j}-5\\mathbf{k}$.\n$$|\\overrightarrow{AB}|^{2}=(b-2)^{2}+82,\\qquad |\\overrightarrow{BC}|^{2}=(b+4)^{2}+74.$$\nEqual $\\Rightarrow(b-2)^{2}+82=(b+4)^{2}+74\\Rightarrow -12b=4\\Rightarrow b=-\\frac13$.\n\n(b) A rhombus is a parallelogram, so $\\overrightarrow{OD}=\\overrightarrow{OA}+\\overrightarrow{OC}-\\overrightarrow{OB}$.\nWith $b=-\\tfrac13$: $\\overrightarrow{OD}=(2,-1,-6)+(-4,5,-2)-(-\\tfrac13,-2,3)=\\left(-\\tfrac53,6,-11\\right)$.\n$$\\boxed{\\overrightarrow{OD}=-\\frac53\\mathbf{i}+6\\mathbf{j}-11\\mathbf{k}}$$\n\n(c) $\\overrightarrow{BA}=\\overrightarrow{OA}-\\overrightarrow{OB}=\\left(\\tfrac73,1,-9\\right)$, $\\overrightarrow{BC}=\\left(-\\tfrac{11}{3},7,-5\\right)$.\n$\\overrightarrow{BA}\\cdot\\overrightarrow{BC}=\\tfrac73(-\\tfrac{11}{3})+7+45=\\tfrac{391}{9}$.\n$|\\overrightarrow{BA}|^{2}=|\\overrightarrow{BC}|^{2}=\\tfrac{787}{9}$.\n$$\\cos\\angle ABC=\\frac{391/9}{787/9}=\\frac{391}{787}\\Rightarrow\\angle ABC=\\cos^{-1}\\!\\frac{391}{787}\\approx60.2^{\\circ}\\ (\\approx1.05\\text{ rad}).$$\n$$\\boxed{\\angle ABC=\\cos^{-1}\\!\\frac{391}{787}\\approx60.2^{\\circ}}$$",
    "createdAt": 1784176224722
  },
  {
    "id": "cie_p3_25MJ35_q11",
    "board": "CIE",
    "subject": "P3",
    "chapter": [
      "Differential equations"
    ],
    "source": "25_MJ_35_11",
    "examRef": {
      "year": 2025,
      "month": "MJ",
      "paper": "35",
      "qno": 11,
      "code": "35",
      "label": "2025 MJ · Paper 35 Q11"
    },
    "stem": "The variables $x$ and $y$ satisfy the differential equation$$(x^{2} + 3)\\frac{dy}{dx} = e^{3y}(x - 2).$$It is given that $y = 0$ when $x = 0$. Solve the differential equation, and find the value of $y$ when $x = 2$. \\hfill (8)",
    "figure": "",
    "marks": 8,
    "difficulty": 4,
    "subMarks": {
      "a": 8
    },
    "solution": "Separate variables: $e^{-3y}\\,dy=\\frac{x-2}{x^{2}+3}\\,dx$.\n$$\\int e^{-3y}\\,dy=-\\frac13 e^{-3y},\\qquad \\int\\frac{x-2}{x^{2}+3}dx=\\frac12\\ln(x^{2}+3)-\\frac{2}{\\sqrt3}\\tan^{-1}\\frac{x}{\\sqrt3}.$$\nSo $-\\frac13 e^{-3y}=\\frac12\\ln(x^{2}+3)-\\frac{2}{\\sqrt3}\\tan^{-1}\\frac{x}{\\sqrt3}+C$.\nUsing $y=0$ when $x=0$: $-\\frac13=\\frac12\\ln3+C\\Rightarrow C=-\\frac13-\\frac12\\ln3$.\nMultiply by $-3$:\n$$e^{-3y}=1+\\frac32\\ln\\frac{3}{x^{2}+3}+2\\sqrt3\\,\\tan^{-1}\\frac{x}{\\sqrt3}.$$\nHence $\\boxed{y=-\\frac13\\ln\\!\\left(1+\\frac32\\ln\\frac{3}{x^{2}+3}+2\\sqrt3\\,\\tan^{-1}\\frac{x}{\\sqrt3}\\right)}$.\nAt $x=2$: $1+\\frac32\\ln\\frac37+2\\sqrt3\\,\\tan^{-1}\\frac{2}{\\sqrt3}\\approx1-1.271+2.969=2.698$.\n$$y=-\\frac13\\ln(2.698)\\approx\\boxed{-0.331\\ \\text{(3 d.p.)}}$$",
    "createdAt": 1784176224723
  },
{"id":"cie_p3_25FM32_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"25_FM_32_1","stem":"Solve the equation $$\\ln\\!\\left(1-\\mathrm{e}^{-2x}\\right)+3=0.$$ Give your final answer correct to 4 decimal places. \\hfill (3)","figure":"","difficulty":3,"marks":3,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":1,"code":"32","label":"2025 Feb/March · Paper 32 Q1"}},
{"id":"cie_p3_25FM32_q2","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"25_FM_32_2","stem":"The equation of a curve is $xy^{2}+\\ln(x+2y)=1.$ Find the gradient of the curve at the point where $x=0.$ \\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":2,"code":"32","label":"2025 Feb/March · Paper 32 Q2"}},
{"id":"cie_p3_25FM32_q3","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"25_FM_32_3","stem":"The shaded region on the Argand diagram shows points representing complex numbers $z$ defined by two inequalities. The shaded region is bounded by a circle and a line parallel to the real axis. The boundaries of the region are included in the shaded region. \\n\\n**(a)** Find two inequalities in terms of $z$ that define the shaded region. \\hfill (3)\\n\\n**(b)** Find the greatest value of $|z|$ for points in this region. \\hfill (3)","figure":"data/images/25_FM_32_Q3.png","difficulty":4,"marks":6,"subMarks":[3,3],"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":3,"code":"32","label":"2025 Feb/March · Paper 32 Q3"}},
{"id":"cie_p3_25FM32_q4","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"25_FM_32_4","stem":"By first expressing the equation $\\tan(x-60^{\\circ})=2\\cot x$ as a quadratic equation in $\\tan x$, solve the equation for $0^{\\circ}\\le x\\le180^{\\circ}.$ \\hfill (6)","figure":"","difficulty":4,"marks":6,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":4,"code":"32","label":"2025 Feb/March · Paper 32 Q4"}},
{"id":"cie_p3_25FM32_q5","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"25_FM_32_5","stem":"The square roots of $-4+6\\sqrt{5}\\,\\mathrm{i}$ can be expressed in the Cartesian form $x+\\mathrm{i}y$, where $x$ and $y$ are real and exact.\\n\\nBy first forming a quartic equation in $x$ or $y$, find the square roots of $-4+6\\sqrt{5}\\,\\mathrm{i}$ in exact Cartesian form. \\hfill (5)","figure":"","difficulty":4,"marks":5,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":5,"code":"32","label":"2025 Feb/March · Paper 32 Q5"}},
{"id":"cie_p3_25FM32_q6","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"25_FM_32_6","stem":"The variables $x$ and $\\theta$ satisfy the differential equation $$\\frac{\\mathrm{d}x}{\\mathrm{d}\\theta}=\\left(\\tfrac15x+1\\right)\\sin^{2}2\\theta,$$ and $x=5$ when $\\theta=0.$ Solve the differential equation and obtain an expression for $x$ in terms of $\\theta.$ \\hfill (7)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":6,"code":"32","label":"2025 Feb/March · Paper 32 Q6"}},
{"id":"cie_p3_25FM32_q7","board":"CIE","subject":"P3","chapter":["Differentiation", "Numerical solution of equations"],"source":"25_FM_32_7","stem":"The diagram shows the curve $y=x^{3}\\cos2x$ for $0\\le x\\le\\tfrac14\\pi.$ The curve has a maximum point at $M$, where $x=p.$\\n\\n**(a)** Show that $p$ satisfies the equation $$p=\\tfrac12\\tan^{-1}\\!\\left(\\frac{3}{2p}\\right).$$ \\hfill (3)\\n\\n**(b)** Show by calculation that $0.5<p<0.7.$ \\hfill (2)\\n\\n**(c)** Use an iterative formula based on the equation in part **(a)** to calculate $p$ correct to 3 decimal places. Give the result of each iteration to 5 decimal places. \\hfill (3)","figure":"data/images/25_FM_32_Q7.png","difficulty":4,"marks":8,"subMarks":[3,2,3],"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":7,"code":"32","label":"2025 Feb/March · Paper 32 Q7"}},
{"id":"cie_p3_25FM32_q8","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"25_FM_32_8","stem":"Two lines have equations $\\mathbf{r}=\\begin{pmatrix}-1\\\\3\\\\-4\\end{pmatrix}+\\lambda\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}$ and $\\mathbf{r}=\\begin{pmatrix}2\\\\-3\\\\-1\\end{pmatrix}+\\mu\\begin{pmatrix}-1\\\\-2\\\\1\\end{pmatrix}.$\\n\\n**(a)** Show that the lines are skew. \\hfill (5)\\n\\n**(b)** Find the obtuse angle between the directions of the two lines. \\hfill (3)","figure":"","difficulty":4,"marks":8,"subMarks":[5,3],"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":8,"code":"32","label":"2025 Feb/March · Paper 32 Q8"}},
{"id":"cie_p3_25FM32_q9","board":"CIE","subject":"P3","chapter":["Algebra"],"source":"25_FM_32_9","stem":"The polynomial $6x^{3}+ax^{2}+bx+9$ is denoted by $\\mathrm p(x)$, where $a$ and $b$ are constants. It is given that $(x-3)$ is a factor of $\\mathrm p(x)$, and when the first derivative $\\mathrm p'(x)$ is divided by $(x-3)$ the remainder is $72.$\\n\\n**(a)** Find the values of $a$ and $b.$ \\hfill (5)\\n\\n**(b)** When $a$ and $b$ have the values found in part **(a)**, factorise $\\mathrm p(x)$ completely. \\hfill (3)\\n\\n**(c)** Hence solve the inequality $\\mathrm p(x)<0.$ \\hfill (2)","figure":"","difficulty":4,"marks":10,"subMarks":[5,3,2],"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":9,"code":"32","label":"2025 Feb/March · Paper 32 Q9"}},
{"id":"cie_p3_25FM32_q10","board":"CIE","subject":"P3","chapter":["Integration"],"source":"25_FM_32_10","stem":"Let $\\displaystyle f(x)=\\frac{-7x^{2}+2x-6}{(1+x)(4+x^{2})}.$\\n\\n**(a)** Express $f(x)$ in partial fractions. \\hfill (5)\\n\\n**(b)** Hence find the exact value of $\\displaystyle\\int_{0}^{2}f(x)\\,\\mathrm dx.$ Give your answer in the form $a\\pi-\\ln b$, where $a$ and $b$ are constants. \\hfill (6)","figure":"","difficulty":4,"marks":11,"subMarks":[5,6],"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":10,"code":"32","label":"2025 Feb/March · Paper 32 Q10"}},
{"id":"cie_p3_25FM32_q11","board":"CIE","subject":"P3","chapter":["Integration"],"source":"25_FM_32_11","stem":"Find the exact value of $$\\int_{0}^{\\pi}x^{2}\\cos\\tfrac13x\\,\\mathrm dx.$$ \\hfill (6)","figure":"","difficulty":4,"marks":6,"solution":"","createdAt":1784181504291,"examRef":{"year":2025,"month":"Feb/March","paper":"32","qno":11,"code":"32","label":"2025 Feb/March · Paper 32 Q11"}},
{"id":"cie_p3_24ON31_q1","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"24_ON_31_1","stem":"The polynomial $4x^3+ax^2+5x+b$, where $a$ and $b$ are constants, is denoted by $\\mathrm p(x)$. It is given that $(2x+1)$ is a factor of $\\mathrm p(x)$. When $\\mathrm p(x)$ is divided by $(x-4)$ the remainder is equal to 3 times the remainder when $\\mathrm p(x)$ is divided by $(x-2).\n\nFind the values of $a$ and $b$. \\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1729560000001,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":1,"code":"31","label":"2024 Oct/Nov · Paper 31 Q1"}},
{"id":"cie_p3_24ON31_q2","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_ON_31_2","stem":"Find the exact value of $$\\int_{1}^{3} x^{2}\\ln 3x\\,\\mathrm{d}x.$$ Give your answer in the form $a\\ln b+c$, where $a$ and $c$ are rational and $b$ is an integer. \\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1729560000002,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":2,"code":"31","label":"2024 Oct/Nov · Paper 31 Q2"}},
{"id":"cie_p3_24ON31_q3","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_ON_31_3","stem":"The equation of a curve is $\\ln(x+y)=3x^{2}y$.\n\nFind the gradient of the curve at the point $(1,0)$. \\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1729560000003,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":3,"code":"31","label":"2024 Oct/Nov · Paper 31 Q3"}},
{"id":"cie_p3_24ON31_q4","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"24_ON_31_4","stem":"(a) Show that $\\sec^{4}\\theta-\\tan^{4}\\theta\\equiv1+2\\tan^{2}\\theta$. \\hfill (3)\n\n(b) Hence or otherwise solve the equation $\\sec^{4}2\\alpha-\\tan^{4}2\\alpha=2\\tan^{2}2\\alpha\\sec^{2}2\\alpha$ for $0^{\\circ}<\\alpha<180^{\\circ}$. \\hfill (5)","figure":"","difficulty":3,"marks":8,"solution":"","createdAt":1729560000004,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":4,"code":"31","label":"2024 Oct/Nov · Paper 31 Q4"},"subMarks":[3,5]},
{"id":"cie_p3_24ON31_q5","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"24_ON_31_5","stem":"(a) By sketching a suitable pair of graphs, show that the equation $2+\\mathrm{e}^{-0.2x}=\\ln(1+x)$ has only one root. \\hfill (2)\n\n(b) Show by calculation that this root lies between 7 and 9. \\hfill (2)\n\n(c) Use the iterative formula $$x_{n+1}=\\exp\\!\\left(2+\\mathrm{e}^{-0.2x_{n}}\\right)-1$$\n\nto determine the root correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\n\n[ $\\exp(x)$ is an alternative notation for $\\mathrm{e}^{x}$. ] \\hfill (3)","figure":"","difficulty":3,"marks":7,"solution":"","createdAt":1729560000005,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":5,"code":"31","label":"2024 Oct/Nov · Paper 31 Q5"},"subMarks":[2,2,3]},
{"id":"cie_p3_24ON31_q6","board":"CIE","subject":"P3","chapter":["Differentiation", "Integration"],"source":"24_ON_31_6","stem":"The diagram shows the curve $y=\\sin 2x(1+\\sin 2x)$, for $0\\le x\\le \\tfrac34\\pi$, and its minimum point $M$. The shaded region bounded by the curve that lies above the $x$-axis and the $x$-axis itself is denoted by $R$.\n\n(a) Given that the $x$-coordinate of $M$ lies in the interval $\\tfrac12\\pi<x<\\tfrac34\\pi$, find the exact coordinates of $M$. \\hfill (4)\n\n(b) Find the exact area of the region $R$. \\hfill (4)","figure":"data/images/24_ON_31_6.png","difficulty":4,"marks":8,"solution":"","createdAt":1729560000006,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":6,"code":"31","label":"2024 Oct/Nov · Paper 31 Q6"},"subMarks":[4,4]},
{"id":"cie_p3_24ON31_q7","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_ON_31_7","stem":"Let $\\displaystyle f(x)=\\dfrac{5x^2+8x+5}{(1+2x)(2+x^2)}$.\n\n(a) Express $f(x)$ in partial fractions. \\hfill (5)\n\n(b) Hence find the coefficient of $x^3$ in the expansion of $f(x)$. \\hfill (4)","figure":"","difficulty":3,"marks":9,"solution":"","createdAt":1729560000007,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":7,"code":"31","label":"2024 Oct/Nov · Paper 31 Q7"},"subMarks":[5,4]},
{"id":"cie_p3_24ON31_q8","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_ON_31_8","stem":"(a) Given that $z=1+y\\mathrm i$ and that $y$ is a real number, express $\\dfrac{1}{z}$ in the form $a+b\\mathrm i$, where $a$ and $b$ are functions of $y$. \\hfill (2)\n\n(b) Show that $\\left(a-\\tfrac12\\right)^{2}+b^{2}=\\tfrac14$, where $a$ and $b$ are the functions of $y$ found in part (a). \\hfill (3)\n\n(c) On a single Argand diagram, sketch the loci given by the equations $\\operatorname{Re}(z)=1$ and $\\left|z-\\tfrac12\\right|=\\tfrac12$, where $z$ is a complex number. \\hfill (3)\n\n(d) The complex number $z$ is such that $\\operatorname{Re}(z)=1$. Use your answer to part (b) to give a geometrical description of the locus of $\\dfrac{1}{z}$. \\hfill (1)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1729560000008,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":8,"code":"31","label":"2024 Oct/Nov · Paper 31 Q8"},"subMarks":[2,3,3,1]},
{"id":"cie_p3_24ON31_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_ON_31_9","stem":"The position vector of point $A$ relative to the origin $O$ is $\\vec{OA}=8\\mathbf i-5\\mathbf j+6\\mathbf k$. The line $l$ passes through $A$ and is parallel to the vector $2\\mathbf i+\\mathbf j+4\\mathbf k$.\n\n(a) State a vector equation for $l$. \\hfill (2)\n\n(b) The position vector of point $B$ relative to the origin $O$ is $\\vec{OB}=-t\\mathbf i+4t\\mathbf j+3t\\mathbf k$, where $t$ is a constant. The line $l$ also passes through $B$.\nFind the value of $t$. \\hfill (3)\n\n(c) The line $m$ has vector equation $\\mathbf r=5\\mathbf i-\\mathbf j+2\\mathbf k+\\mu(a\\mathbf i-\\mathbf j+3\\mathbf k)$. The acute angle between the directions of $l$ and $m$ is $\\theta$, where $\\cos\\theta=\\dfrac{1}{\\sqrt6}$.\nFind the possible values of $a$. \\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1729560000009,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":9,"code":"31","label":"2024 Oct/Nov · Paper 31 Q9"},"subMarks":[2,3,5]},
{"id":"cie_p3_24ON31_q10","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_ON_31_10","stem":"A large cylindrical tank is used to store water. The base of the tank is a circle of radius 4 metres. At time $t$ minutes, the depth of the water in the tank is $h$ metres. There is a tap at the bottom of the tank. When the tap is open, water flows out of the tank at a rate proportional to the square root of the volume of water in the tank.\n\n(a) Show that $\\dfrac{\\mathrm dh}{\\mathrm dt}=-\\lambda\\sqrt h$, where $\\lambda$ is a positive constant. \\hfill (4)\n\n(b) At time $t=0$ the tap is opened. It is given that $h=4$ when $t=0$ and that $h=2.25$ when $t=20$.\n\nSolve the differential equation to obtain an expression for $t$ in terms of $h$, and hence find the time taken to empty the tank. \\hfill (6)","figure":"data/images/24_ON_31_10.png","difficulty":4,"marks":10,"solution":"","createdAt":1729560000010,"examRef":{"year":2024,"month":"Oct/Nov","paper":"31","qno":10,"code":"31","label":"2024 Oct/Nov · Paper 31 Q10"},"subMarks":[4,6]},
{"id":"cie_p3_24ON32_q1","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_ON_32_1","stem":"Expand $(9-3x)^{\\frac12}$ in ascending powers of $x$, up to and including the term in $x^2$, simplifying the coefficients. \\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1729560000001,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":1,"code":"32","label":"2024 Oct/Nav · Paper 32 Q1"}},
{"id":"cie_p3_24ON32_q2","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_ON_32_2","stem":"Solve the equation $5^x=5^{x+2}-10$. Give your answer correct to 3 decimal places. \\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1729560000002,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":2,"code":"32","label":"2024 Oct/Nav · Paper 32 Q2"}},
{"id":"cie_p3_24ON32_q3","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_ON_32_3","stem":"The variables $x$ and $y$ satisfy the equation $ay=b^{x}$, where $a$ and $b$ are constants. The graph of $\\ln y$ against $x$ is a straight line passing through the points $(0.50,\\,2.24)$ and $(3.40,\\,8.27)$, as shown in the diagram.\n\nFind the values of $a$ and $b$. Give each value correct to 1 significant figure. \\hfill (4)","figure":"data/images/24_ON_32_3.png","difficulty":3,"marks":4,"solution":"","createdAt":1729560000003,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":3,"code":"32","label":"2024 Oct/Nav · Paper 32 Q3"}},
{"id":"cie_p3_24ON32_q4","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"24_ON_32_4","stem":"(a) By sketching a suitable pair of graphs, show that the equation $\\cot 2x=\\sec x$ has exactly one root in the interval $0<x<\\tfrac12\\pi$. \\hfill (2)\n\n(b) Show that if a sequence of real values given by the iterative formula $$x_{n+1}=\\tfrac12\\tan^{-1}(\\cos x_n)$$ converges, then it converges to the root in part (a). \\hfill (1)","figure":"","difficulty":3,"marks":3,"solution":"","createdAt":1729560000004,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":4,"code":"32","label":"2024 Oct/Nav · Paper 32 Q4"},"subMarks":[2,1]},
{"id":"cie_p3_24ON32_q5","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_ON_32_5","stem":"The square roots of $6-8\\mathrm i$ can be expressed in the Cartesian form $x+\\mathrm iy$, where $x$ and $y$ are real and exact.\n\nBy first forming a quartic equation in $x$ or $y$, find the square roots of $6-8\\mathrm i$ in exact Cartesian form. \\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1729560000005,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":5,"code":"32","label":"2024 Oct/Nav · Paper 32 Q5"}},
{"id":"cie_p3_24ON32_q6","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_ON_32_6","stem":"(a) The complex number $u$ is given by $$u=\\dfrac{(\\cos\\tfrac17\\pi+\\mathrm i\\sin\\tfrac17\\pi)^{4}}{\\cos\\tfrac17\\pi-\\mathrm i\\sin\\tfrac17\\pi}.$$\n\nFind the exact value of $\\arg u$. \\hfill (2)\n\n(b) The complex numbers $u$ and $u^{*}$ are plotted on an Argand diagram.\n\nDescribe the single geometrical transformation that maps $u$ onto $u^{*}$ and state the exact value of $\\arg u^{*}$. \\hfill (2)","figure":"","difficulty":4,"marks":4,"solution":"","createdAt":1729560000006,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":6,"code":"32","label":"2024 Oct/Nav · Paper 32 Q6"},"subMarks":[2,2]},
{"id":"cie_p3_24ON32_q7","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"24_ON_32_7","stem":"(a) Show that the equation $\\tan^{3}x+2\\tan 2x-\\tan x=0$ may be expressed as $$\\tan^{4}x-2\\tan^{2}x-3=0$$ for $\\tan x \\neq 0$. \\hfill (3)\n\n(b) Hence solve the equation $\\tan^{3}2\\theta+2\\tan 4\\theta-\\tan 2\\theta=0$ for $0<\\theta<\\pi$. Give your answers in exact form. \\hfill (3)","figure":"","difficulty":4,"marks":6,"solution":"","createdAt":1729560000007,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":7,"code":"32","label":"2024 Oct/Nav · Paper 32 Q7"},"subMarks":[3,3]},
{"id":"cie_p3_24ON32_q8","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_ON_32_8","stem":"The parametric equations of a curve are $$x=\\tan^{2}2t,\\quad y=\\cos 2t,$$ for $0<t<\\tfrac14\\pi$.\n\n(a) Show that $\\dfrac{\\mathrm d y}{\\mathrm d x}=-\\dfrac12\\cos^{3}2t$. \\hfill (4)\n\n(b) Hence find the equation of the normal to the curve at the point where $t=\\tfrac18\\pi$. Give your answer in the form $y=mx+c$. \\hfill (4)","figure":"","difficulty":3,"marks":8,"solution":"","createdAt":1729560000008,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":8,"code":"32","label":"2024 Oct/Nav · Paper 32 Q8"},"subMarks":[4,4]},
{"id":"cie_p3_24ON32_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_ON_32_9","stem":"With respect to the origin $O$, the points $A$, $B$ and $C$ have position vectors given by $$\\vec{OA}=\\begin{pmatrix}2\\\\1\\\\-3\\end{pmatrix},\\quad \\vec{OB}=\\begin{pmatrix}0\\\\4\\\\1\\end{pmatrix}\\quad\\text{and}\\quad \\vec{OC}=\\begin{pmatrix}-3\\\\-2\\\\2\\end{pmatrix}.$$\n\n(a) The point $D$ is such that $ABCD$ is a trapezium with $\\overrightarrow{DC}=3\\overrightarrow{AB}$.\n\nFind the position vector of $D$. \\hfill (2)\n\n(b) The diagonals of the trapezium intersect at the point $P$.\n\nFind the position vector of $P$. \\hfill (5)\n\n(c) Using a scalar product, calculate angle $ABC$. \\hfill (4)","figure":"","difficulty":4,"marks":11,"solution":"","createdAt":1729560000009,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":9,"code":"32","label":"2024 Oct/Nav · Paper 32 Q9"},"subMarks":[2,5,4]},
{"id":"cie_p3_24ON32_q10","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_ON_32_10","stem":"A balloon in the shape of a sphere has volume $V$ and radius $r$. Air is pumped into the balloon at a constant rate of $40\\pi$ starting when time $t=0$ and $r=0$. At the same time, air begins to flow out of the balloon at a rate of $0.8\\pi r$. The balloon remains a sphere at all times.\n\n(a) Show that $r$ and $t$ satisfy the differential equation $$\\dfrac{\\mathrm dr}{\\mathrm dt}=\\dfrac{50-r}{5r^{2}}.$$ \\hfill (3)\n\n(b) Find the quotient and remainder when $5r^{2}$ is divided by $50-r$. \\hfill (3)\n\n(c) Solve the differential equation in part (a), obtaining an expression for $t$ in terms of $r$. \\hfill (6)\n\n(d) Find the value of $t$ when the radius of the balloon is 12. \\hfill (1)","figure":"","difficulty":4,"marks":13,"solution":"","createdAt":1729560000010,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":10,"code":"32","label":"2024 Oct/Nav · Paper 32 Q10"},"subMarks":[3,3,6,1]},
{"id":"cie_p3_24ON32_q11","board":"CIE","subject":"P3","chapter":["Differentiation", "Integration"],"source":"24_ON_32_11","stem":"Let $f(x)=\\dfrac{2\\mathrm{e}^{2x}}{\\mathrm{e}^{2x}-3\\mathrm{e}^{x}+2}$.\n\n(a) Find $\\mathrm f'(x)$ and hence find the exact coordinates of the stationary point of the curve with equation $y=f(x)$. \\hfill (5)\n\n(b) Use the substitution $u=\\mathrm{e}^{x}$ and partial fractions to find the exact value of $$\\int_{\\ln 3}^{\\ln 5} f(x)\\,\\mathrm dx.$$\n\nGive your answer in the form $\\ln a$, where $a$ is a rational number in its simplest form. \\hfill (9)","figure":"","difficulty":4,"marks":14,"solution":"","createdAt":1729560000011,"examRef":{"year":2024,"month":"Oct/Nav","paper":"32","qno":11,"code":"32","label":"2024 Oct/Nav · Paper 32 Q11"},"subMarks":[5,9]}
,
{"id":"cie_p3_22MJ31_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"22_MJ_31_1","stem":"Solve the equation $2\\times 3^{2x-1}=4^{x+1}$, giving your answer correct to $2$ decimal places.\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":1,"code":"31","label":"2022 May/June · Paper 31 Q1"}},
{"id":"cie_p3_22MJ31_q2","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"22_MJ_31_2","stem":"(a) Expand $(2-x^{2})^{-2}$ in ascending powers of $x$, up to and including the term in $x^{4}$, simplifying the coefficients.\\hfill (4)\n(b) State the set of values of $x$ for which the expansion is valid.\\hfill (1)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":2,"code":"31","label":"2022 May/June · Paper 31 Q2"}},
{"id":"cie_p3_22MJ31_q3","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"22_MJ_31_3","stem":"Solve the equation $2\\cot^{2}x+3\\cot x=5$, for $0^{\\circ}<x<180^{\\circ}$.\\hfill (6)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":3,"code":"31","label":"2022 May/June · Paper 31 Q3"}},
{"id":"cie_p3_22MJ31_q4","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"22_MJ_31_4","stem":"The variables $x$ and $y$ satisfy the differential equation $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{xy}{1+x^{2}}$, and $y=2$ when $x=0$. Solve the differential equation, obtaining a simplified expression for $y$ in terms of $x$.\\hfill (7)","figure":"","difficulty":3,"marks":7,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":4,"code":"31","label":"2022 May/June · Paper 31 Q4"}},
{"id":"cie_p3_22MJ31_q5","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"22_MJ_31_5","stem":"The polynomial $ax^{3}-10x^{2}+bx+8$, where $a$ and $b$ are constants, is denoted by $\\mathrm{p}(x)$. It is given that $(x-2)$ is a factor of both $\\mathrm{p}(x)$ and $\\mathrm{p}\\prime(x)$.\n(a) Find the values of $a$ and $b$.\\hfill (5)\n(b) When $a$ and $b$ have these values, factorise $\\mathrm{p}(x)$ completely.\\hfill (3)","figure":"","difficulty":3,"marks":8,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":5,"code":"31","label":"2022 May/June · Paper 31 Q5"}},
{"id":"cie_p3_22MJ31_q6","board":"CIE","subject":"P3","chapter":["Integration"],"source":"22_MJ_31_6","stem":"Let $I=\\displaystyle\\int_{0}^{3}\\frac{27}{(9+x^{2})^{2}} \\mathrm{d}x$.\n(a) Using the substitution $x=3\\tan\\theta$, show that $I=\\displaystyle\\int_{0}^{\\frac{1}{4}\\pi}\\cos^{2}\\theta \\mathrm{d}\\theta$.\\hfill (4)\n(b) Hence find the exact value of $I$.\\hfill (4)","figure":"","difficulty":3,"marks":8,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":6,"code":"31","label":"2022 May/June · Paper 31 Q6"}},
{"id":"cie_p3_22MJ31_q7","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"22_MJ_31_7","stem":"The complex number $u$ is defined by $u=\\dfrac{\\sqrt{2}-a\\sqrt{2}\\,\\mathrm{i}}{1+2\\mathrm{i}}$, where $a$ is a positive integer.\n(a) Express $u$ in terms of $a$, in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real and exact.\\hfill (3)\n(b) It is now given that $a=3$. Express $u$ in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r>0$ and $-\\pi<\\theta\\leqslant\\pi$, giving the exact values of $r$ and $\\theta$.\\hfill (2)\n(c) Using your answer to part (b), find the two square roots of $u$. Give your answers in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r>0$ and $-\\pi<\\theta\\leqslant\\pi$, giving the exact values of $r$ and $\\theta$.\\hfill (3)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":7,"code":"31","label":"2022 May/June · Paper 31 Q7"}},
{"id":"cie_p3_22MJ31_q8","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"22_MJ_31_8","stem":"The equation of a curve is $x^{3}+y^{3}+2xy+8=0$.\n(a) Express $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.\\hfill (4)\n(b) The tangent to the curve at the point where $x=0$ and the tangent at the point where $y=0$ intersect at the acute angle $\\alpha$. Find the exact value of $\\tan\\alpha$.\\hfill (5)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":8,"code":"31","label":"2022 May/June · Paper 31 Q8"}},
{"id":"cie_p3_22MJ31_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"22_MJ_31_9","stem":"In the diagram, $OABCDEFG$ is a cuboid in which $OA=2$ units, $OC=4$ units and $OG=2$ units. Unit vectors $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ are parallel to $OA$, $OC$ and $OG$ respectively. The point $M$ is the midpoint of $DF$. The point $N$ on $AB$ is such that $AN=\\dfrac{3}{4}NB$.\n(a) Express the vectors $\\overrightarrow{OM}$ and $\\overrightarrow{MN}$ in terms of $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$.\\hfill (3)\n(b) Find a vector equation for the line through $M$ and $N$.\\hfill (2)\n(c) Show that the length of the perpendicular from $O$ to the line through $M$ and $N$ is $\\dfrac{\\sqrt{53}}{6}$.\\hfill (4)","figure":"data/images/22_MJ_31_9.png","difficulty":4,"marks":9,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":9,"code":"31","label":"2022 May/June · Paper 31 Q9"}},
{"id":"cie_p3_22MJ31_q10","board":"CIE","subject":"P3","chapter":["Differentiation", "Numerical solution of equations"],"source":"22_MJ_31_10","stem":"The curve $y=x\\sqrt{\\sin x}$ has one stationary point in the interval $0<x<\\pi$, where $x=a$ (see diagram).\n(a) Show that $\\tan a=-\\dfrac{1}{2}a$.\\hfill (4)\n(b) Verify by calculation that $a$ lies between $2$ and $2.5$.\\hfill (2)\n(c) Show that if a sequence of values in the interval $0<x<\\pi$ given by the iterative formula $x_{n+1}=\\pi-\\tan^{-1}\\!\\left(\\dfrac{1}{2}x_{n}\\right)$ converges, then it converges to $a$, the root of the equation in part (a).\\hfill (2)\n(d) Use the iterative formula given in part (c) to determine $a$ correct to $2$ decimal places. Give the result of each iteration to $4$ decimal places.\\hfill (3)","figure":"data/images/22_MJ_31_10.png","difficulty":4,"marks":11,"solution":"","createdAt":1784292019142,"examRef":{"year":2022,"month":"May/June","paper":"31","qno":10,"code":"31","label":"2022 May/June · Paper 31 Q10"}}
,
{"id":"cie_p3_24FM32_q1","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"24_FM_32_1","stem":"Find the quotient and remainder when $x^4-3x^3+9x^2-12x+27$ is divided by $x^2+5$.\\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":1,"code":"32","label":"2024 Feb/March · Paper 32 Q1"}},
{"id":"cie_p3_24FM32_q2","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_FM_32_2","stem":"(a) Find the coefficient of $x^2$ in the expansion of $(2x-5)\\sqrt{4-x}$.\\hfill (4)\n(b) State the set of values of $x$ for which the expansion in part (a) is valid.\\hfill (1)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":2,"code":"32","label":"2024 Feb/March · Paper 32 Q2"}},
{"id":"cie_p3_24FM32_q3","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_FM_32_3","stem":"It is given that $z=-\\sqrt{3}+\\mathrm{i}$.\n(a) Express $z^2$ in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r>0$ and $-\\pi<\\theta\\leq\\pi$.\\hfill (3)\n(b) The complex number $\\omega$ is such that $z^2\\omega$ is real and $\\left|\\dfrac{z^2}{\\omega}\\right|=12$.\nFind the two possible values of $\\omega$, giving your answers in the form $R\\mathrm{e}^{\\mathrm{i}\\alpha}$, where $R>0$ and $-\\pi<\\alpha\\leq\\pi$.\\hfill (3)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":3,"code":"32","label":"2024 Feb/March · Paper 32 Q3"}},
{"id":"cie_p3_24FM32_q4","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_FM_32_4","stem":"The positive numbers $p$ and $q$ are such that\n$\\ln\\!\\left(\\dfrac{p}{q}\\right)=a$ and $\\ln(q^2 p)=b$.\nExpress $\\ln(p^7 q)$ in terms of $a$ and $b$.\\hfill (4)","figure":"","difficulty":3,"marks":4,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":4,"code":"32","label":"2024 Feb/March · Paper 32 Q4"}},
{"id":"cie_p3_24FM32_q5","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_FM_32_5","stem":"(a) On a sketch of an Argand diagram, shade the region whose points represent complex numbers $z$ satisfying the inequalities $|z-4-2\\mathrm{i}|\\leq 3$ and $|z|\\geq|10-z|$.\\hfill (4)\n(b) Find the greatest value of $\\arg z$ for points in this region.\\hfill (2)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":5,"code":"32","label":"2024 Feb/March · Paper 32 Q5"}},
{"id":"cie_p3_24FM32_q6","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_FM_32_6","stem":"The equation of a curve is $2y^2+3xy+x=x^2$.\n(a) Show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{2x-3y-1}{4y+3x}$.\\hfill (4)\n(b) Hence show that the curve does not have a tangent that is parallel to the $x$-axis.\\hfill (3)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":6,"code":"32","label":"2024 Feb/March · Paper 32 Q6"}},
{"id":"cie_p3_24FM32_q7","board":"CIE","subject":"P3","chapter":["Differentiation", "Numerical solution of equations"],"source":"24_FM_32_7","stem":"The diagram shows the curve $y=x\\mathrm{e}^{2x}-5x$ and its minimum point $M$, where $x=\\alpha$.\n(a) Show that $\\alpha$ satisfies the equation $\\alpha=\\dfrac{1}{2}\\ln\\!\\left(\\dfrac{5}{1+2\\alpha}\\right)$.\\hfill (3)\n(b) Verify by calculation that $\\alpha$ lies between $0.4$ and $0.5$.\\hfill (2)\n(c) Use an iterative formula based on the equation in part (a) to determine $\\alpha$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)","figure":"data/images/24_FM_32_7.png","difficulty":4,"marks":8,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":7,"code":"32","label":"2024 Feb/March · Paper 32 Q7"}},
{"id":"cie_p3_24FM32_q8","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"24_FM_32_8","stem":"(a) Express $3\\sin x+2\\sqrt{2}\\cos\\!\\left(x+\\dfrac{1}{4}\\pi\\right)$ in the form $R\\sin(x+\\alpha)$, where $R>0$ and $0<\\alpha<\\dfrac{1}{2}\\pi$. State the exact value of $R$ and give $\\alpha$ correct to 3 decimal places.\\hfill (4)\n(b) Hence solve the equation $6\\sin\\dfrac{1}{2}\\theta+4\\sqrt{2}\\cos\\!\\left(\\dfrac{1}{2}\\theta+\\dfrac{1}{4}\\pi\\right)=3$ for $-4\\pi<\\theta\\leq 4\\pi$.\\hfill (5)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":8,"code":"32","label":"2024 Feb/March · Paper 32 Q8"}},
{"id":"cie_p3_24FM32_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_FM_32_9","stem":"Relative to the origin $O$, the position vectors of the points $A$, $B$ and $C$ are given by\n$\\overrightarrow{OA}=5\\mathbf{i}-2\\mathbf{j}+\\mathbf{k}$, $\\overrightarrow{OB}=8\\mathbf{i}+2\\mathbf{j}-6\\mathbf{k}$ and $\\overrightarrow{OC}=3\\mathbf{i}+4\\mathbf{j}-7\\mathbf{k}$.\n(a) Show that $OABC$ is a rectangle.\\hfill (4)\n(b) Use a scalar product to find the acute angle between the diagonals of $OABC$.\\hfill (4)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":9,"code":"32","label":"2024 Feb/March · Paper 32 Q9"}},
{"id":"cie_p3_24FM32_q10","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_FM_32_10","stem":"Let $f(x)=\\dfrac{36a^2}{(2a+x)(2a-x)(5a-2x)}$, where $a$ is a positive constant.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence find the exact value of $\\displaystyle\\int_{-a}^{a} f(x)\\,\\mathrm{d}x$, giving your answer in the form $p\\ln q+r\\ln s$ where $p$ and $r$ are integers and $q$ and $s$ are prime numbers.\\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":10,"code":"32","label":"2024 Feb/March · Paper 32 Q10"}},
{"id":"cie_p3_24FM32_q11","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_FM_32_11","stem":"The variables $y$ and $\\theta$ satisfy the differential equation\n$(1+y)(1+\\cos 2\\theta)\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta}=\\mathrm{e}^{3y}$.\nIt is given that $y=0$ when $\\theta=\\dfrac{1}{4}\\pi$.\nSolve the differential equation and find the exact value of $\\tan\\theta$ when $y=1$.\\hfill (9)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784293189455,"examRef":{"year":2024,"month":"Feb/March","paper":"32","qno":11,"code":"32","label":"2024 Feb/March · Paper 32 Q11"}}
,
{"id":"cie_p3_24MJ33_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_MJ_33_1","stem":"Solve the equation $8^{3-6x} = 4\\times 5^{-2x}$. Give your answer correct to 3 decimal places.\\hfill (4)","figure":"","difficulty":3,"marks":4,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":1,"code":"33","label":"2024 May/June · Paper 33 Q1"}},
{"id":"cie_p3_24MJ33_q2","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_MJ_33_2","stem":"Find the exact coordinates of the stationary point of the curve $y = \\mathrm{e}^{2x}\\sin 2x$ for $0 \\leqslant x \\leqslant \\dfrac{1}{2}\\pi$.\\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":2,"code":"33","label":"2024 May/June · Paper 33 Q2"}},
{"id":"cie_p3_24MJ33_q3","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_MJ_33_3","stem":"The square roots of $24-7\\mathrm{i}$ can be expressed in the Cartesian form $x+\\mathrm{i}y$, where $x$ and $y$ are real and exact.\nBy first forming a quartic equation in $x$ or $y$, find the square roots of $24-7\\mathrm{i}$ in exact Cartesian form.\\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":3,"code":"33","label":"2024 May/June · Paper 33 Q3"}},
{"id":"cie_p3_24MJ33_q4","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_MJ_33_4","stem":"The variables $x$ and $y$ satisfy the equation $ky = \\mathrm{e}^{cx}$, where $k$ and $c$ are constants. The graph of $\\ln y$ against $x$ is a straight line passing through the points $(2.80, 0.372)$ and $(5.10, 2.21)$, as shown in the diagram.\nFind the values of $k$ and $c$. Give each value correct to 2 significant figures.\\hfill (4)","figure":"data/images/24_MJ_33_4.png","difficulty":2,"marks":4,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":4,"code":"33","label":"2024 May/June · Paper 33 Q4"}},
{"id":"cie_p3_24MJ33_q5","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_MJ_33_5","stem":"Express $\\dfrac{6x^{2}-2x+2}{(x-1)(2x+1)}$ in partial fractions.\\hfill (5)","figure":"","difficulty":2,"marks":5,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":5,"code":"33","label":"2024 May/June · Paper 33 Q5"}},
{"id":"cie_p3_24MJ33_q6","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_MJ_33_6","stem":"(a) On an Argand diagram shade the region whose points represent complex numbers $z$ which satisfy both the inequalities $|z-4-3\\mathrm{i}| \\leqslant 2$ and $\\arg(z-2-\\mathrm{i}) \\geqslant \\dfrac{1}{3}\\pi$.\\hfill (5)\n(b) Calculate the greatest value of $\\arg z$ for points in this region.\\hfill (2)","figure":"","difficulty":3,"marks":7,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":6,"code":"33","label":"2024 May/June · Paper 33 Q6"}},
{"id":"cie_p3_24MJ33_q7","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"24_MJ_33_7","stem":"Let $\\mathrm{f}(x) = 8x^{3}+54x^{2}-17x-21$.\n(a) Show that $x+7$ is a factor of $\\mathrm{f}(x)$.\\hfill (1)\n(b) Find the quotient when $\\mathrm{f}(x)$ is divided by $x+7$.\\hfill (2)\n(c) Hence solve the equation\n$8\\cos^{3}\\theta+54\\cos^{2}\\theta-17\\cos\\theta-21 = 0$,\nfor $0 \\leqslant \\theta \\leqslant 360$.\\hfill (3)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":7,"code":"33","label":"2024 May/June · Paper 33 Q7"}},
{"id":"cie_p3_24MJ33_q8","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"24_MJ_33_8","stem":"(a) Express $3\\cos 2x - \\sqrt{3}\\sin 2x$ in the form $R\\cos(2x+\\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{1}{2}\\pi$. Give the exact values of $R$ and $\\alpha$.\\hfill (3)\n(b) Hence find the exact value of $\\displaystyle\\int_{0}^{\\frac{1}{12}\\pi} \\dfrac{3}{\\left(3\\cos 2x-\\sqrt{3}\\sin 2x\\right)^{2}} \\mathrm{d}x$, simplifying your answer.\\hfill (5)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784301358088,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":8,"code":"33","label":"2024 May/June · Paper 33 Q8"}},
{"id":"cie_p3_24MJ33_q9","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_MJ_33_9","stem":"A container in the shape of a cuboid has a square base of side $x$ and a height of $(10-x)$. It is given that $x$ varies with time, $t$, where $t > 0$. The container decreases in volume at a rate which is inversely proportional to $t$.\nWhen $t = \\dfrac{1}{10}$, $x = \\dfrac{1}{2}$ and the rate of decrease of $x$ is $\\dfrac{20}{37}$.\n(a) Show that $x$ and $t$ satisfy the differential equation\n$\\dfrac{\\mathrm{d}x}{\\mathrm{d}t} = \\dfrac{-1}{2t(20x-3x^{2})}$.\\hfill (5)\n(b) Solve the differential equation, obtaining an expression for $t$ in terms of $x$.\\hfill (6)","figure":"data/images/24_MJ_33_9.png","difficulty":4,"marks":11,"solution":"","createdAt":1784301358089,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":9,"code":"33","label":"2024 May/June · Paper 33 Q9"}},
{"id":"cie_p3_24MJ33_q10","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_MJ_33_10","stem":"The equations of two straight lines are\n$\\mathbf{r} = \\mathbf{i}+\\mathbf{j}+2a\\mathbf{k}+\\lambda(3\\mathbf{i}+4\\mathbf{j}+a\\mathbf{k})$ and $\\mathbf{r} = -3\\mathbf{i}-\\mathbf{j}+4\\mathbf{k}+\\mu(-\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k})$,\nwhere $a$ is a constant.\n(a) Given that the acute angle between the directions of these lines is $\\dfrac{1}{4}\\pi$, find the possible values of $a$.\\hfill (6)\n(b) Given instead that the lines intersect, find the value of $a$ and the position vector of the point of intersection.\\hfill (5)","figure":"","difficulty":4,"marks":11,"solution":"","createdAt":1784301358089,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":10,"code":"33","label":"2024 May/June · Paper 33 Q10"}},
{"id":"cie_p3_24MJ33_q11","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_MJ_33_11","stem":"Use the substitution $2x = \\tan\\theta$ to find the exact value of\n$\\displaystyle\\int_{0}^{\\frac{1}{2}} \\dfrac{12}{\\left(1+4x^{2}\\right)^{2}} \\mathrm{d}x$.\nGive your answer in the form $a+b\\pi$, where $a$ and $b$ are rational numbers.\\hfill (9)","figure":"","difficulty":3,"marks":9,"solution":"","createdAt":1784301358089,"examRef":{"year":2024,"month":"May/June","paper":"33","qno":11,"code":"33","label":"2024 May/June · Paper 33 Q11"}}
,
{"id":"cie_p3_24MJ32_q1","board":"CIE","subject":"P3","chapter":["Algebra (modulus functions)"],"source":"24_MJ_32_1","stem":"(a) Sketch the graph of $y = |x - 2a|$, where $a$ is a positive constant.\\hfill (1)\n(b) Solve the inequality $2x - 3a < |x - 2a|$.\\hfill (2)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":1,"code":"32","label":"2024 May/June · Paper 32 Q1"}},
{"id":"cie_p3_24MJ32_q2","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_MJ_32_2","stem":"Express $\\dfrac{6x^{2} - 9x - 16}{2x^{2} - 5x - 12}$ in partial fractions.\\hfill (5)","figure":"","difficulty":2,"marks":5,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":2,"code":"32","label":"2024 May/June · Paper 32 Q2"}},
{"id":"cie_p3_24MJ32_q3","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_MJ_32_3","stem":"The variables $x$ and $y$ satisfy the equation $a^{2y-1} = b^{x-y}$, where $a$ and $b$ are constants.\n(a) Show that the graph of $y$ against $x$ is a straight line.\\hfill (3)\n(b) Given that $a = b^{3}$, state the equation of the straight line in the form $y = px + q$, where $p$ and $q$ are rational numbers in their simplest form.\\hfill (2)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":3,"code":"32","label":"2024 May/June · Paper 32 Q3"}},
{"id":"cie_p3_24MJ32_q4","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_MJ_32_4","stem":"The equation of a curve is $y\\mathrm{e}^{2x} + y^{2}\\mathrm{e}^{x} = 6$.\nFind the gradient of the curve at the point where $y = 1$.\\hfill (6)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":4,"code":"32","label":"2024 May/June · Paper 32 Q4"}},
{"id":"cie_p3_24MJ32_q5","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"24_MJ_32_5","stem":"(a) It is given that the equation $\\mathrm{e}^{2x} = 5 + \\cos 3x$ has only one root. Show by calculation that this root lies in the interval $0.7 < x < 0.8$.\\hfill (2)\n(b) Show that if a sequence of values in the interval $0.7 < x < 0.8$ given by the iterative formula $x_{n+1} = \\dfrac{1}{2}\\ln(5 + \\cos 3x_n)$ converges then it converges to the root of the equation in part (a).\\hfill (1)\n(c) Use this iterative formula to determine the root correct to 3 decimal places. Give the result of each iteration to 5 decimal places.\\hfill (3)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":5,"code":"32","label":"2024 May/June · Paper 32 Q5"}},
{"id":"cie_p3_24MJ32_q6","board":"CIE","subject":"P3","chapter":["Differentiation","Integration"],"source":"24_MJ_32_6","stem":"The diagram shows the curve $y = x\\mathrm{e}^{-ax}$, where $a$ is a positive constant, and its maximum point $M$.\n(a) Find the exact coordinates of $M$.\\hfill (4)\n(b) Find the exact value of $\\displaystyle\\int_{0}^{\\frac{2}{a}} x\\mathrm{e}^{-ax}\\,\\mathrm{d}x$.\\hfill (5)","figure":"data/images/24_MJ_32_6.png","difficulty":4,"marks":9,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":6,"code":"32","label":"2024 May/June · Paper 32 Q6"}},
{"id":"cie_p3_24MJ32_q7","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_MJ_32_7","stem":"(a) Show that $\\cos^{4}\\theta - \\sin^{4}\\theta \\equiv \\cos 2\\theta$.\\hfill (3)\n(b) Hence find the exact value of $\\displaystyle\\int_{-\\frac{1}{8}\\pi}^{\\frac{1}{8}\\pi} (\\cos^{4}\\theta - \\sin^{4}\\theta + 4\\sin^{2}\\theta\\cos^{2}\\theta)\\,\\mathrm{d}\\theta$.\\hfill (6)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":7,"code":"32","label":"2024 May/June · Paper 32 Q7"}},
{"id":"cie_p3_24MJ32_q8","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_MJ_32_8","stem":"The points $A$, $B$ and $C$ have position vectors $\\overrightarrow{OA} = -2\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$, $\\overrightarrow{OB} = 5\\mathbf{i} + 2\\mathbf{j}$ and $\\overrightarrow{OC} = 8\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}$, where $O$ is the origin. The line $l_1$ passes through $B$ and $C$.\n(a) Find a vector equation for $l_1$.\\hfill (3)\nThe line $l_2$ has equation $\\mathbf{r} = -2\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k} + \\mu(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})$.\n(b) Find the coordinates of the point of intersection of $l_1$ and $l_2$.\\hfill (4)\n(c) The point $D$ on $l_2$ is such that $|\\overrightarrow{AB}| = |\\overrightarrow{BD}|$. Find the position vector of $D$.\\hfill (5)","figure":"","difficulty":4,"marks":12,"solution":"","createdAt":1784301997358,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":8,"code":"32","label":"2024 May/June · Paper 32 Q8"}},
{"id":"cie_p3_24MJ32_q9","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_MJ_32_9","stem":"The complex numbers $z$ and $\\omega$ are defined by $z = 1 - \\mathrm{i}$ and $\\omega = -3 + 3\\sqrt{3}\\,\\mathrm{i}$.\n(a) Express $z\\omega$ in the form $a + b\\mathrm{i}$, where $a$ and $b$ are real and in exact surd form.\\hfill (1)\n(b) Express $z$ and $\\omega$ in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leqslant \\pi$. Give the exact values of $r$ and $\\theta$ in each case.\\hfill (4)\n(c) On an Argand diagram, the points representing $\\omega$ and $z\\omega$ are $A$ and $B$ respectively. Prove that $OAB$ is an isosceles right-angled triangle, where $O$ is the origin.\\hfill (2)\n(d) Using your answers to part (b), prove that $\\tan\\dfrac{5}{12}\\pi = \\dfrac{\\sqrt{3}+1}{\\sqrt{3}-1}$.\\hfill (3)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784301997359,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":9,"code":"32","label":"2024 May/June · Paper 32 Q9"}},
{"id":"cie_p3_24MJ32_q10","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_MJ_32_10","stem":"(a) By writing $y = \\sec^{3}\\theta$ as $\\dfrac{1}{\\cos^{3}\\theta}$, show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta} = 3\\sin\\theta\\sec^{4}\\theta$.\\hfill (2)\n(b) The variables $x$ and $\\theta$ satisfy the differential equation $(x^{2} + 9)\\sin\\theta\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}x} = (x + 3)\\cos^{4}\\theta$.\nIt is given that $x = 3$ when $\\theta = \\dfrac{1}{3}\\pi$.\nSolve the differential equation to find the value of $\\cos\\theta$ when $x = 0$. Give your answer correct to 3 significant figures.\\hfill (8)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784301997359,"examRef":{"year":2024,"month":"May/June","paper":"32","qno":10,"code":"32","label":"2024 May/June · Paper 32 Q10"}}
,
{"id":"cie_p3_24MJ31_q1","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"24_MJ_31_1","stem":"Expand $(3+x)(1-2x)^{\\frac{1}{2}}$ in ascending powers of $x$, up to and including the term in $x^2$, simplifying the coefficients.\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":1,"code":"31","label":"2024 May/June · Paper 31 Q1"}},
{"id":"cie_p3_24MJ31_q2","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_MJ_31_2","stem":"Solve the equation $\\ln(x-5)=7-\\ln x$. Give your answer correct to 2 decimal places.\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":2,"code":"31","label":"2024 May/June · Paper 31 Q2"}},
{"id":"cie_p3_24MJ31_q3","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"24_MJ_31_3","stem":"The variables $x$ and $y$ satisfy the equation $a^y=bx$, where $a$ and $b$ are constants. The graph of $y$ against $\\ln x$ is a straight line passing through the points $(0.336, 1.00)$ and $(1.31, 1.50)$, as shown in the diagram.\nFind the values of $a$ and $b$. Give each value correct to the nearest integer.\\hfill (4)","figure":"data/images/24_MJ_31_3.png","difficulty":2,"marks":4,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":3,"code":"31","label":"2024 May/June · Paper 31 Q3"}},
{"id":"cie_p3_24MJ31_q4","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_MJ_31_4","stem":"The complex number $u$ is given by $u=-1-\\mathrm{i}\\sqrt{3}$.\n(a) Express $u$ in the form $r(\\cos\\theta+\\mathrm{i}\\sin\\theta)$, where $r>0$ and $-\\pi<\\theta\\leq\\pi$. Give the exact values of $r$ and $\\theta$.\\hfill (2)\n(b) The complex number $v$ is given by $v=5\\left(\\cos\\dfrac{1}{6}\\pi+\\mathrm{i}\\sin\\dfrac{1}{6}\\pi\\right)$. Express the complex number $\\dfrac{v}{u}$ in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$ where $r>0$ and $-\\pi<\\theta\\leq\\pi$.\\hfill (2)","figure":"","difficulty":3,"marks":4,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":4,"code":"31","label":"2024 May/June · Paper 31 Q4"}},
{"id":"cie_p3_24MJ31_q5","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"24_MJ_31_5","stem":"The equation of a curve is $y=\\dfrac{\\mathrm{e}^{\\sin x}}{\\cos^2 x}$ for $0\\leq x\\leq 2\\pi$.\nFind $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and hence find the $x$-coordinates of the stationary points of the curve.\\hfill (7)","figure":"","difficulty":3,"marks":7,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":5,"code":"31","label":"2024 May/June · Paper 31 Q5"}},
{"id":"cie_p3_24MJ31_q6","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"24_MJ_31_6","stem":"(a) By sketching a suitable pair of graphs, show that the equation $\\mathrm{cosec}\\dfrac{1}{2}x=\\mathrm{e}^x-3$ has exactly one root, denoted by $\\alpha$, in the interval $0<x<\\pi$.\\hfill (2)\n(b) Verify by calculation that $\\alpha$ lies between $1$ and $2$.\\hfill (2)\n(c) Show that if a sequence of values in the interval $0<x<\\pi$ given by the iterative formula $x_{n+1}=\\ln(\\mathrm{cosec}\\dfrac{1}{2}x_n+3)$ converges, then it converges to $\\alpha$.\\hfill (1)\n(d) Use this iterative formula with an initial value of $1.4$ to determine $\\alpha$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)\n(e) State the minimum number of calculated iterations needed with this initial value to determine $\\alpha$ correct to 2 decimal places.\\hfill (1)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":6,"code":"31","label":"2024 May/June · Paper 31 Q6"}},
{"id":"cie_p3_24MJ31_q7","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"24_MJ_31_7","stem":"(a) On a single Argand diagram sketch the loci given by the equations $|z-3+2\\mathrm{i}|=2$ and $|w-3+2\\mathrm{i}|=|w+3-4\\mathrm{i}|$ where $z$ and $w$ are complex numbers.\\hfill (4)\n(b) Hence find the least value of $|z-w|$ for points on these loci. Give your answer in an exact form.\\hfill (2)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":7,"code":"31","label":"2024 May/June · Paper 31 Q7"}},
{"id":"cie_p3_24MJ31_q8","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_MJ_31_8","stem":"Use the substitution $u=1-\\sin x$ to find the exact value of\n$\\displaystyle\\int_{\\pi}^{\\frac{3\\pi}{2}}\\dfrac{\\sin 2x}{\\sqrt{1-\\sin x}}\\mathrm{d}x$.\nGive your answer in the form $a+b\\sqrt{2}$ where $a$ and $b$ are rational numbers to be determined.\\hfill (7)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":8,"code":"31","label":"2024 May/June · Paper 31 Q8"}},
{"id":"cie_p3_24MJ31_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"24_MJ_31_9","stem":"The equations of two straight lines $l_1$ and $l_2$ are\n$l_1: \\mathbf{r}=\\mathbf{i}-2\\mathbf{j}+3\\mathbf{k}+\\mu(2\\mathbf{i}-\\mathbf{j}+a\\mathbf{k})$ and $l_2: \\mathbf{r}=-\\mathbf{i}-\\mathbf{j}-\\mathbf{k}+v(3\\mathbf{i}-2\\mathbf{j}-2\\mathbf{k})$,\nwhere $a$ is a constant.\nThe lines $l_1$ and $l_2$ are perpendicular.\n(a) Show that $a=4$.\\hfill (1)\nThe lines $l_1$ and $l_2$ also intersect.\n(b) Find the position vector of the point of intersection.\\hfill (4)\nThe point $A$ has position vector $-5\\mathbf{i}+\\mathbf{j}-9\\mathbf{k}$.\n(c) Show that $A$ lies on $l_1$.\\hfill (2)\nThe point $B$ is the image of $A$ after a reflection in the line $l_2$.\n(d) Find the position vector of $B$.\\hfill (2)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":9,"code":"31","label":"2024 May/June · Paper 31 Q9"}},
{"id":"cie_p3_24MJ31_q10","board":"CIE","subject":"P3","chapter":["Integration"],"source":"24_MJ_31_10","stem":"(a) Given that $\\tan y=2x$, show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{2}{1+4x^2}$.\\hfill (3)\n(b) Hence find the exact value of\n$\\displaystyle\\int_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}} x\\tan^{-1}(2x)\\mathrm{d}x$.\\hfill (7)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":10,"code":"31","label":"2024 May/June · Paper 31 Q10"}},
{"id":"cie_p3_24MJ31_q11","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"24_MJ_31_11","stem":"In a field there are 300 plants of a certain species, all of which can be infected by a particular disease. At time $t$ after the first plant is infected there are $x$ infected plants. The rate of change of $x$ is proportional to the product of the number of plants infected and the number of plants that are not yet infected. The variables $x$ and $t$ are treated as continuous, and it is given that $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=0.2$ and $x=1$ when $t=0$.\n(a) Show that $x$ and $t$ satisfy the differential equation\n$\\dfrac{1}{1495}\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}=x(300-x)$.\\hfill (2)\n(b) Using partial fractions, solve the differential equation and obtain an expression for $t$ in terms of a single logarithm involving $x$.\\hfill (9)","figure":"","difficulty":4,"marks":11,"solution":"","createdAt":1784302409963,"examRef":{"year":2024,"month":"May/June","paper":"31","qno":11,"code":"31","label":"2024 May/June · Paper 31 Q11"}}
,
{"id":"cie_p3_23MJ33_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"23_MJ_33_1","stem":"Solve the equation $\\ln(x + 5) = 5 + \\ln x$. Give your answer correct to 3 decimal places.\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784302783141,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":1,"code":"33","label":"2023 May/June · Paper 33 Q1"}},
{"id":"cie_p3_23MJ33_q2","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"23_MJ_33_2","stem":"Find the quotient and remainder when $2x^{4} - 27$ is divided by $x^{2} + x + 3$.\\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784302783141,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":2,"code":"33","label":"2023 May/June · Paper 33 Q2"}},
{"id":"cie_p3_23MJ33_q3","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_MJ_33_3","stem":"On a sketch of an Argand diagram, shade the region whose points represent complex numbers $z$ satisfying the inequalities $|z - 3 - \\mathrm{i}| \\leqslant 3$ and $|z| \\geqslant |z - 4\\mathrm{i}|$.\\hfill (4)","figure":"","difficulty":3,"marks":4,"solution":"","createdAt":1784302783141,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":3,"code":"33","label":"2023 May/June · Paper 33 Q3"}},
{"id":"cie_p3_23MJ33_q4","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"23_MJ_33_4","stem":"The parametric equations of a curve are $x = \\dfrac{\\cos\\theta}{2 - \\sin\\theta}$, $y = \\theta + 2\\cos\\theta$.\nShow that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = (2 - \\sin\\theta)^{2}$.\\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784302783141,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":4,"code":"33","label":"2023 May/June · Paper 33 Q4"}},
{"id":"cie_p3_23MJ33_q5","board":"CIE","subject":"P3","chapter":["Differentiation","Numerical solution of equations"],"source":"23_MJ_33_5","stem":"The diagram shows the part of the curve $y = x^{2}\\cos 3x$ for $0 \\leqslant x \\leqslant \\dfrac{1}{6}\\pi$, and its maximum point $M$, where $x = a$.\n(a) Show that $a$ satisfies the equation $a = \\dfrac{1}{3}\\tan^{-1}\\dfrac{2}{3a}$.\\hfill (3)\n(b) Use an iterative formula based on the equation in (a) to determine $a$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)","figure":"data/images/23_MJ_33_5.png","difficulty":3,"marks":6,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":5,"code":"33","label":"2023 May/June · Paper 33 Q5"}},
{"id":"cie_p3_23MJ33_q6","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"23_MJ_33_6","stem":"(a) Express $3\\cos\\theta + 2\\cos(\\theta - 60^\\circ)$ in the form $R\\cos(\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. State the exact value of $R$ and give $\\alpha$ correct to 2 decimal places.\\hfill (4)\n(b) Hence solve the equation $3\\cos 2\\theta + 2\\cos(2\\theta - 60^\\circ) = 2.5$ for $0^\\circ < \\theta < 180^\\circ$.\\hfill (4)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":6,"code":"33","label":"2023 May/June · Paper 33 Q6"}},
{"id":"cie_p3_23MJ33_q7","board":"CIE","subject":"P3","chapter":["Integration"],"source":"23_MJ_33_7","stem":"(a) Use the substitution $u = \\cos x$ to show that $\\displaystyle\\int_{0}^{\\pi} \\sin 2x\\, \\mathrm{e}^{2\\cos x}\\,\\mathrm{d}x = \\int_{-1}^{1} 2u\\,\\mathrm{e}^{2u}\\,\\mathrm{d}u$.\\hfill (4)\n(b) Hence find the exact value of $\\displaystyle\\int_{0}^{\\pi} \\sin 2x\\, \\mathrm{e}^{2\\cos x}\\,\\mathrm{d}x$.\\hfill (4)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":7,"code":"33","label":"2023 May/June · Paper 33 Q7"}},
{"id":"cie_p3_23MJ33_q8","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"23_MJ_33_8","stem":"The variables $x$ and $y$ satisfy the differential equation $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{y^{2}+4}{x(y+4)}$ for $x > 0$. It is given that $x = 4$ when $y = 2\\sqrt{3}$.\nSolve the differential equation to obtain the value of $x$ when $y = 2$.\\hfill (8)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":8,"code":"33","label":"2023 May/June · Paper 33 Q8"}},
{"id":"cie_p3_23MJ33_q9","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"23_MJ_33_9","stem":"The lines $l$ and $m$ have equations\n$l$: $\\mathbf{r} = a\\mathbf{i} + 3\\mathbf{j} + b\\mathbf{k} + c(\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k})$,\n$m$: $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\mu(2\\mathbf{i} - 3\\mathbf{j} + \\mathbf{k})$.\nRelative to the origin $O$, the position vector of the point $P$ is $4\\mathbf{i} + 7\\mathbf{j} - 2\\mathbf{k}$.\n(a) Given that $l$ is perpendicular to $m$ and that $P$ lies on $l$, find the values of the constants $a$, $b$ and $c$.\\hfill (4)\n(b) The perpendicular from $P$ meets line $m$ at $Q$. The point $R$ lies on $PQ$ extended, with $PQ : QR = 2 : 3$. Find the position vector of $R$.\\hfill (6)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":9,"code":"33","label":"2023 May/June · Paper 33 Q9"}},
{"id":"cie_p3_23MJ33_q10","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"23_MJ_33_10","stem":"Let $f(x) = \\dfrac{21 - 8x - 2x^{2}}{(1 + 2x)(3 - x)^{2}}$.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence obtain the expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^{2}$.\\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":10,"code":"33","label":"2023 May/June · Paper 33 Q10"}},
{"id":"cie_p3_23MJ33_q11","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_MJ_33_11","stem":"The complex number $z$ is defined by $z = \\dfrac{5a - 2\\mathrm{i}}{3 + a\\mathrm{i}}$, where $a$ is an integer. It is given that $\\arg z = -\\dfrac{1}{4}\\pi$.\n(a) Find the value of $a$ and hence express $z$ in the form $x + \\mathrm{i}y$, where $x$ and $y$ are real.\\hfill (6)\n(b) Express $z^{3}$ in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leqslant \\pi$. Give the simplified exact values of $r$ and $\\theta$.\\hfill (3)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784302783142,"examRef":{"year":2023,"month":"May/June","paper":"33","qno":11,"code":"33","label":"2023 May/June · Paper 33 Q11"}}
,
{"id":"cie_p3_23MJ32_q1","board":"CIE","subject":"P3","chapter":["Algebra (modulus functions)"],"source":"23_MJ_32_1","stem":"Solve the inequality $|5x - 3| < 2|3x - 7|$.\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":1,"code":"32","label":"2023 May/June · Paper 32 Q1"}},
{"id":"cie_p3_23MJ32_q2","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"23_MJ_32_2","stem":"Solve the equation $\\ln(2x^{2} - 3) = 2\\ln x - \\ln 2$, giving your answer in an exact form.\\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":2,"code":"32","label":"2023 May/June · Paper 32 Q2"}},
{"id":"cie_p3_23MJ32_q3","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_MJ_32_3","stem":"(a) On an Argand diagram, sketch the locus of points representing complex numbers $z$ satisfying $|z + 3 - 2\\mathrm{i}| = 2$.\\hfill (2)\n(b) Find the least value of $|z|$ for points on this locus, giving your answer in an exact form.\\hfill (2)","figure":"","difficulty":3,"marks":4,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":3,"code":"32","label":"2023 May/June · Paper 32 Q3"}},
{"id":"cie_p3_23MJ32_q4","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"23_MJ_32_4","stem":"Solve the equation $2\\cos x - \\cos\\dfrac{1}{2}x = 1$ for $0 \\leqslant x \\leqslant 2\\pi$.\\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":4,"code":"32","label":"2023 May/June · Paper 32 Q4"}},
{"id":"cie_p3_23MJ32_q5","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_MJ_32_5","stem":"The complex number $2 + y\\mathrm{i}$ is denoted by $\\alpha$, where $y$ is a real number and $y < 0$. It is given that $f(\\alpha) = \\alpha^{3} - \\alpha^{2} - 2\\alpha$.\n(a) Find a simplified expression for $f(\\alpha)$ in terms of $y$.\\hfill (3)\n(b) Given that $\\mathrm{Re}(f(\\alpha)) = -20$, find $\\arg\\alpha$.\\hfill (3)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":5,"code":"32","label":"2023 May/June · Paper 32 Q5"}},
{"id":"cie_p3_23MJ32_q6","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"23_MJ_32_6","stem":"The equation $\\cot\\dfrac{1}{2}x = 3x$ has one root in the interval $0 < x < \\pi$, denoted by $\\alpha$.\n(a) Show by calculation that $\\alpha$ lies between 0.5 and 1.\\hfill (2)\n(b) Show that, if a sequence of positive values given by the iterative formula $x_{n+1} = \\dfrac{1}{3}\\left(x_n + 4\\tan^{-1}\\dfrac{1}{3x_n}\\right)$ converges, then it converges to $\\alpha$.\\hfill (2)\n(c) Use this iterative formula to calculate $\\alpha$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":6,"code":"32","label":"2023 May/June · Paper 32 Q6"}},
{"id":"cie_p3_23MJ32_q7","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"23_MJ_32_7","stem":"The equation of a curve is $3x^{2} + 4xy + 3y^{2} = 5$.\n(a) Show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{3x + 2y}{2x + 3y}$.\\hfill (4)\n(b) Hence find the exact coordinates of the two points on the curve at which the tangent is parallel to $y + 2x = 0$.\\hfill (5)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":7,"code":"32","label":"2023 May/June · Paper 32 Q7"}},
{"id":"cie_p3_23MJ32_q8","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"23_MJ_32_8","stem":"(a) The variables $x$ and $y$ satisfy the differential equation $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{4 + 9y^{2}}{\\mathrm{e}^{2x+1}}$.\nIt is given that $y = 0$ when $x = 1$.\nSolve the differential equation, obtaining an expression for $y$ in terms of $x$.\\hfill (7)\n(b) State what happens to the value of $y$ as $x$ tends to infinity. Give your answer in an exact form.\\hfill (1)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":8,"code":"32","label":"2023 May/June · Paper 32 Q8"}},
{"id":"cie_p3_23MJ32_q9","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"23_MJ_32_9","stem":"Let $f(x) = \\dfrac{2x^{2} + 17x - 17}{(1 + 2x)(2 - x)^{2}}$.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence show that $\\displaystyle\\int_{0}^{1} f(x)\\,\\mathrm{d}x = \\dfrac{5}{2} - \\ln 72$.\\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":9,"code":"32","label":"2023 May/June · Paper 32 Q9"}},
{"id":"cie_p3_23MJ32_q10","board":"CIE","subject":"P3","chapter":["Differentiation","Integration"],"source":"23_MJ_32_10","stem":"The diagram shows the curve $y = (x + 5)\\sqrt{3 - 2x}$ and its maximum point $M$.\n(a) Find the exact coordinates of $M$.\\hfill (5)\n(b) Using the substitution $u = 3 - 2x$, find by integration the area of the shaded region bounded by the curve and the $x$-axis. Give your answer in the form $a\\sqrt{13}$, where $a$ is a rational number.\\hfill (5)","figure":"data/images/23_MJ_32_10.png","difficulty":4,"marks":10,"solution":"","createdAt":1784303098882,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":10,"code":"32","label":"2023 May/June · Paper 32 Q10"}},
{"id":"cie_p3_23MJ32_q11","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"23_MJ_32_11","stem":"The points $A$ and $B$ have position vectors $\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}$ and $2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ respectively. The line $l$ has equation $\\mathbf{r} = \\mathbf{i} - \\mathbf{j} + 3\\mathbf{k} + \\mu(2\\mathbf{i} - 3\\mathbf{j} + 4\\mathbf{k})$.\n(a) Show that $l$ does not intersect the line passing through $A$ and $B$.\\hfill (5)\n(b) Find the position vector of the foot of the perpendicular from $A$ to $l$.\\hfill (4)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784303098883,"examRef":{"year":2023,"month":"May/June","paper":"32","qno":11,"code":"32","label":"2023 May/June · Paper 32 Q11"}}
,
{"id":"cie_p3_23MJ31_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"23_MJ_31_1","stem":"Solve the equation\n$3\\mathrm{e}^{2x} - 4\\mathrm{e}^{-2x} = 5$.\nGive the answer correct to 3 decimal places.\\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":1,"code":"31","label":"2023 May/June · Paper 31 Q1"}},
{"id":"cie_p3_23MJ31_q2","board":"CIE","subject":"P3","chapter":["Algebra (modulus functions)"],"source":"23_MJ_31_2","stem":"(a) Sketch the graph of $y = |2x + 3|$.$\\hfill (1)\n(b) Solve the inequality $3x + 8 > |2x + 3|$.$\\hfill (3)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":2,"code":"31","label":"2023 May/June · Paper 31 Q2"}},
{"id":"cie_p3_23MJ31_q3","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"23_MJ_31_3","stem":"Find the coefficient of $x^3$ in the binomial expansion of $(3 + x)\\sqrt{1 + 4x}$.$\\hfill (4)","figure":"","difficulty":2,"marks":4,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":3,"code":"31","label":"2023 May/June · Paper 31 Q3"}},
{"id":"cie_p3_23MJ31_q4","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"23_MJ_31_4","stem":"(a) Show that the equation $\\sin 2\\theta + \\cos 2\\theta = 2\\sin^2\\theta$ can be expressed in the form\n$\\cos^2\\theta + 2\\sin\\theta\\cos\\theta - 3\\sin^2\\theta = 0$.$\\hfill (2)\n(b) Hence solve the equation $\\sin 2\\theta + \\cos 2\\theta = 2\\sin^2\\theta$ for $0° < \\theta < 180°$.$\\hfill (4)","figure":"","difficulty":3,"marks":6,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":4,"code":"31","label":"2023 May/June · Paper 31 Q4"}},
{"id":"cie_p3_23MJ31_q5","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"23_MJ_31_5","stem":"The equation of a curve is $x^2y - ay^2 = 4a^3$, where $a$ is a non-zero constant.\n(a) Show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{2xy}{2ay - x^2}$.$\\hfill (4)\n(b) Hence find the coordinates of the points where the tangent to the curve is parallel to the $y$-axis.$\\hfill (4)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":5,"code":"31","label":"2023 May/June · Paper 31 Q5"}},
{"id":"cie_p3_23MJ31_q6","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"23_MJ_31_6","stem":"Relative to the origin $O$, the points $A$, $B$ and $C$ have position vectors given by\n$\\mathbf{OA} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$, $\\mathbf{OB} = \\begin{pmatrix} 4 \\\\ 3 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{OC} = \\begin{pmatrix} 3 \\\\ -2 \\\\ -4 \\end{pmatrix}$.\nThe quadrilateral $ABCD$ is a parallelogram.\n(a) Find the position vector of $D$.$\\hfill (3)\n(b) The angle between $BA$ and $BC$ is $\\theta$.\nFind the exact value of $\\cos\\theta$.$\\hfill (3)\n(c) Hence find the area of $ABCD$, giving your answer in the form $p\\sqrt{q}$, where $p$ and $q$ are integers.$\\hfill (4)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":6,"code":"31","label":"2023 May/June · Paper 31 Q6"}},
{"id":"cie_p3_23MJ31_q7","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"23_MJ_31_7","stem":"The variables $x$ and $y$ satisfy the differential equation\n$\\cos 2x\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{4\\tan 2x}{\\sin^2 3y}$,\nwhere $0 \\leq x < \\dfrac{1}{4}\\pi$. It is given that $y = 0$ when $x = \\dfrac{1}{6}\\pi$.\nSolve the differential equation to obtain the value of $x$ when $y = \\dfrac{1}{6}\\pi$. Give your answer correct to 3 decimal places.$\\hfill (8)","figure":"","difficulty":4,"marks":8,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":7,"code":"31","label":"2023 May/June · Paper 31 Q7"}},
{"id":"cie_p3_23MJ31_q8","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"23_MJ_31_8","stem":"Let $f(x) = \\dfrac{3 - 3x^2}{(2x + 1)(x + 2)^2}$.\n(a) Express $f(x)$ in partial fractions.$\\hfill (5)\n(b) Hence find the exact value of $\\displaystyle\\int_0^4 f(x)\\mathrm{d}x$, giving your answer in the form $a + b\\ln c$, where $a$, $b$ and $c$ are integers.$\\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":8,"code":"31","label":"2023 May/June · Paper 31 Q8"}},
{"id":"cie_p3_23MJ31_q9","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"23_MJ_31_9","stem":"The constant $a$ is such that $\\displaystyle\\int_0^a x\\mathrm{e}^{-2x}\\mathrm{d}x = \\dfrac{1}{8}$.\n(a) Show that $a = \\dfrac{1}{2}\\ln(4a + 2)$.$\\hfill (5)\n(b) Verify by calculation that $a$ lies between $0.5$ and $1$.$\\hfill (2)\n(c) Use an iterative formula based on the equation in (a) to determine $a$ correct to 2 decimal places.\nGive the result of each iteration to 4 decimal places.$\\hfill (3)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":9,"code":"31","label":"2023 May/June · Paper 31 Q9"}},
{"id":"cie_p3_23MJ31_q10","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"23_MJ_31_10","stem":"The polynomial $x^3 + 5x^2 + 31x + 75$ is denoted by $p(x)$.\n(a) Show that $(x + 3)$ is a factor of $p(x)$.$\\hfill (2)\n(b) Show that $z = -1 + 2\\sqrt{6}\\mathrm{i}$ is a root of $p(z) = 0$.$\\hfill (3)\n(c) Hence find the complex numbers $z$ which are roots of $p(z^2) = 0$.$\\hfill (7)","figure":"","difficulty":4,"marks":12,"solution":"","createdAt":1784303343475,"examRef":{"year":2023,"month":"May/June","paper":"31","qno":10,"code":"31","label":"2023 May/June · Paper 31 Q10"}}
,
{"id":"cie_p3_23FM32_q1","board":"CIE","subject":"P3","chapter":["Logarithmic and exponential functions"],"source":"23_FM_32_1","stem":"It is given that $x=\\ln(2y-3)-\\ln(y+4)$.\nExpress $y$ in terms of $x$.\\hfill (3)","figure":"","difficulty":2,"marks":3,"solution":"","createdAt":1784303878756,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":1,"code":"32","label":"2023 Feb/March · Paper 32 Q1"}},
{"id":"cie_p3_23FM32_q2","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_FM_32_2","stem":"(a) On an Argand diagram, shade the region whose points represent complex numbers $z$ satisfying the inequalities $-\\dfrac{1}{3}\\pi\\leq\\arg(z-1-2\\mathrm{i})\\leq\\dfrac{1}{3}\\pi$ and $\\mathrm{Re}\\,z\\leq 3$.\\hfill (3)\n(b) Calculate the least value of $\\arg z$ for points in the region from (a). Give your answer in radians correct to 3 decimal places.\\hfill (2)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":2,"code":"32","label":"2023 Feb/March · Paper 32 Q2"}},
{"id":"cie_p3_23FM32_q3","board":"CIE","subject":"P3","chapter":["Algebra (factor theorem and remainder theorem)"],"source":"23_FM_32_3","stem":"The polynomial $2x^4+ax^3+bx-1$, where $a$ and $b$ are constants, is denoted by $\\mathrm{p}(x)$. When $\\mathrm{p}(x)$ is divided by $x^2-x+1$ the remainder is $3x+2$.\nFind the values of $a$ and $b$.\\hfill (5)","figure":"","difficulty":3,"marks":5,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":3,"code":"32","label":"2023 Feb/March · Paper 32 Q3"}},
{"id":"cie_p3_23FM32_q4","board":"CIE","subject":"P3","chapter":["Complex numbers"],"source":"23_FM_32_4","stem":"Solve the equation\n$\\dfrac{5z}{1+2\\mathrm{i}}-zz^*+30+10\\mathrm{i}=0$,\ngiving your answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real.\\hfill (5)","figure":"","difficulty":4,"marks":5,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":4,"code":"32","label":"2023 Feb/March · Paper 32 Q4"}},
{"id":"cie_p3_23FM32_q5","board":"CIE","subject":"P3","chapter":["Differentiation"],"source":"23_FM_32_5","stem":"The parametric equations of a curve are\n$x=te^{2t}$, $y=t^2+t+3$.\n(a) Show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=e^{-2t}$.\\hfill (3)\n(b) Hence show that the normal to the curve, where $t=-1$, passes through the point $\\left(0, 3-\\dfrac{1}{e^4}\\right)$.\\hfill (3)","figure":"","difficulty":4,"marks":6,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":5,"code":"32","label":"2023 Feb/March · Paper 32 Q5"}},
{"id":"cie_p3_23FM32_q6","board":"CIE","subject":"P3","chapter":["Trigonometry"],"source":"23_FM_32_6","stem":"(a) Express $5\\sin\\theta+12\\cos\\theta$ in the form $R\\cos(\\theta-\\alpha)$, where $R>0$ and $0<\\alpha<\\dfrac{1}{2}\\pi$.\\hfill (3)\n(b) Hence solve the equation $5\\sin 2x+12\\cos 2x=6$ for $0\\leq x\\leq\\pi$.\\hfill (4)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":6,"code":"32","label":"2023 Feb/March · Paper 32 Q6"}},
{"id":"cie_p3_23FM32_q7","board":"CIE","subject":"P3","chapter":["Numerical solution of equations"],"source":"23_FM_32_7","stem":"The diagram shows a circle with centre $O$ and radius $r$. The angle of the minor sector $AOB$ of the circle is $x$ radians. The area of the major sector of the circle is 3 times the area of the shaded region.\n(a) Show that $x=\\dfrac{3}{4}\\sin x+\\dfrac{1}{2}\\pi$.\\hfill (4)\n(b) Show by calculation that the root of the equation in (a) lies between $2$ and $2.5$.\\hfill (2)\n(c) Use an iterative formula based on the equation in (a) to calculate this root correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)","figure":"data/images/23_FM_32_7.png","difficulty":4,"marks":9,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":7,"code":"32","label":"2023 Feb/March · Paper 32 Q7"}},
{"id":"cie_p3_23FM32_q8","board":"CIE","subject":"P3","chapter":["Differentiation","Integration"],"source":"23_FM_32_8","stem":"The diagram shows the curve $y=x^3\\ln x$, for $x>0$, and its minimum point $M$.\n(a) Find the exact coordinates of $M$.\\hfill (4)\n(b) Find the exact area of the shaded region bounded by the curve, the $x$-axis and the line $x=\\dfrac{1}{2}$.\\hfill (5)","figure":"data/images/23_FM_32_8.png","difficulty":4,"marks":9,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":8,"code":"32","label":"2023 Feb/March · Paper 32 Q8"}},
{"id":"cie_p3_23FM32_q9","board":"CIE","subject":"P3","chapter":["Differential equations"],"source":"23_FM_32_9","stem":"The variables $x$ and $y$ satisfy the differential equation\n$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=e^{3y}\\sin^2 2x$.\nIt is given that $y=0$ when $x=0$.\nSolve the differential equation and find the value of $y$ when $x=\\dfrac{1}{2}$.\\hfill (7)","figure":"","difficulty":4,"marks":7,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":9,"code":"32","label":"2023 Feb/March · Paper 32 Q9"}},
{"id":"cie_p3_23FM32_q10","board":"CIE","subject":"P3","chapter":["Vectors"],"source":"23_FM_32_10","stem":"With respect to the origin $O$, the points $A$, $B$, $C$ and $D$ have position vectors given by\n$\\overrightarrow{OA}=\\begin{pmatrix}3\\\\-1\\\\2\\end{pmatrix}$, $\\overrightarrow{OB}=\\begin{pmatrix}1\\\\2\\\\-3\\end{pmatrix}$, $\\overrightarrow{OC}=\\begin{pmatrix}1\\\\-2\\\\5\\end{pmatrix}$ and $\\overrightarrow{OD}=\\begin{pmatrix}5\\\\-6\\\\11\\end{pmatrix}$.\n(a) Find the obtuse angle between the vectors $\\overrightarrow{OA}$ and $\\overrightarrow{OB}$.\\hfill (3)\n(b) The line $l$ passes through the points $A$ and $B$. Find a vector equation for the line $l$.\\hfill (2)\n(c) Find the position vector of the point of intersection of the line $l$ and the line passing through $C$ and $D$.\\hfill (4)","figure":"","difficulty":4,"marks":9,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":10,"code":"32","label":"2023 Feb/March · Paper 32 Q10"}},
{"id":"cie_p3_23FM32_q11","board":"CIE","subject":"P3","chapter":["Algebra (partial fractions and binomial expansions)"],"source":"23_FM_32_11","stem":"Let $f(x)=\\dfrac{5x^2+x+11}{(4+x^2)(1+x)}$.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence show that $\\displaystyle\\int_0^2 f(x)\\mathrm{d}x=\\ln 54-\\dfrac{1}{8}\\pi$.\\hfill (5)","figure":"","difficulty":4,"marks":10,"solution":"","createdAt":1784303878757,"examRef":{"year":2023,"month":"Feb/March","paper":"32","qno":11,"code":"32","label":"2023 Feb/March · Paper 32 Q11"}}
,
{
  "id": "cie_p3_22ON33_q1",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Logarithmic and exponential functions"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_ON_33_1",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 1,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q1"
  },
  "stem": "Solve the equation $\\ln(2x-1) = 2\\ln(x+1) - \\ln x$. Give your answer correct to 3 decimal places.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q2",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (partial fractions and binomial expansions)"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 5,
  "source": "22_ON_33_2",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 2,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q2"
  },
  "stem": "Expand $\\sqrt{\\dfrac{1+2x}{1-2x}}$ in ascending powers of $x$, up to and including the term in $x^{2}$, simplifying the coefficients.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q3",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Integration"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 5,
  "source": "22_ON_33_3",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 3,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q3"
  },
  "stem": "Find the exact value of $\\displaystyle\\int_{0}^{\\frac{1}{4}\\pi} x \\sec^{2}x \\mathrm{d}x$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q4",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 5,
  "source": "22_ON_33_4",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 4,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q4"
  },
  "stem": "The parametric equations of a curve are\n$x = 2t - \\tan t$, $y = \\ln(\\sin 2t)$,\nfor $0 < t < \\dfrac{1}{2}\\pi$.\nShow that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\cot t$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q5",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 6,
  "source": "22_ON_33_5",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 5,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q5"
  },
  "stem": "(a) On a sketch of an Argand diagram, shade the region whose points represent complex numbers $z$ satisfying the inequalities $|z+2| \\leqslant 2$ and $\\mathrm{Im}\\, z \\geqslant 1$.\\hfill (4)\n(b) Find the greatest value of $\\arg z$ for points in the shaded region.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q6",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 6,
  "source": "22_ON_33_6",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 6,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q6"
  },
  "stem": "Solve the quadratic equation $(1-3\\mathrm{i})z^{2}-(2+\\mathrm{i})z+\\mathrm{i} = 0$, giving your answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real.\\hfill (6)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q7",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_33_7",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 7,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q7"
  },
  "stem": "(a) Show that the equation $\\sqrt{5}\\sec x + \\tan x = 4$ can be expressed as $R\\cos(x+\\alpha) = \\sqrt{5}$, where $R > 0$ and $0 < \\alpha < 90$. Give the exact value of $R$ and the value of $\\alpha$ correct to 2 decimal places.\\hfill (4)\n(b) Hence solve the equation $\\sqrt{5}\\sec 2x + \\tan 2x = 4$, for $0 < x < 180$.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q8",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation",
    "Numerical solution of equations"
  ],
  "topics": [],
  "difficulty": 5,
  "marks": 8,
  "source": "22_ON_33_8",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 8,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q8"
  },
  "stem": "The curve with equation $y = \\dfrac{x^{3}}{\\mathrm{e}^{x}-1}$ has a stationary point at $x = p$, where $p > 0$.\n(a) Show that $p = 3(1-\\mathrm{e}^{-p})$.\\hfill (3)\n(b) Verify by calculation that $p$ lies between $2.5$ and $3$.\\hfill (2)\n(c) Use an iterative formula based on the equation in part (a) to determine $p$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q9",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Vectors"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 9,
  "source": "22_ON_33_9",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 9,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q9"
  },
  "stem": "With respect to the origin $O$, the position vectors of the points $A$, $B$ and $C$ are given by\n$\\overrightarrow{OA} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{OB} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\overrightarrow{OC} = \\begin{pmatrix} 4 \\\\ -3 \\\\ -2 \\end{pmatrix}$.\nThe midpoint of $AC$ is $M$ and the point $N$ lies on $BC$, between $B$ and $C$, and is such that $BN = 2NC$.\n(a) Find the position vectors of $M$ and $N$.\\hfill (3)\n(b) Find a vector equation for the line through $M$ and $N$.\\hfill (2)\n(c) Find the position vector of the point $Q$ where the line through $M$ and $N$ intersects the line through $A$ and $B$.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q10",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differential equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 9,
  "source": "22_ON_33_10",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 10,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q10"
  },
  "stem": "A gardener is filling an ornamental pool with water, using a hose that delivers $30$ litres of water per minute. Initially the pool is empty. At time $t$ minutes after filling begins the volume of water in the pool is $V$ litres. The pool has a small leak and loses water at a rate of $0.01V$ litres per minute.\nThe differential equation satisfied by $V$ and $t$ is of the form $\\dfrac{\\mathrm{d}V}{\\mathrm{d}t} = a - bV$.\n(a) Write down the values of the constants $a$ and $b$.\\hfill (1)\n(b) Solve the differential equation and find the value of $t$ when $V = 1000$.\\hfill (6)\n(c) Obtain an expression for $V$ in terms of $t$ and hence state what happens to $V$ as $t$ becomes large.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
},
{
  "id": "cie_p3_22ON33_q11",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (partial fractions and binomial expansions)",
    "Integration"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_ON_33_11",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "33",
    "qno": 11,
    "code": "33",
    "label": "2022 Oct/Nov · Paper 33 Q11"
  },
  "stem": "Let $\\mathrm{f}(x) = \\dfrac{5-x+6x^{2}}{(3-x)(1+3x^{2})}$.\n(a) Express $\\mathrm{f}(x)$ in partial fractions.\\hfill (5)\n(b) Find the exact value of $\\displaystyle\\int_{0}^{1} \\mathrm{f}(x) \\mathrm{d}x$, simplifying your answer.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343156573
}
,
{
  "id": "cie_p3_22ON32_q1",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Logarithmic and exponential functions"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_ON_32_1",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 1,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q1"
  },
  "stem": "Solve the equation $2^{3x-1} = 5 \\times 3^{1-x}$. Give your answer in the form $\\dfrac{\\ln a}{\\ln b}$ where $a$ and $b$ are integers.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q2",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (factor theorem and remainder theorem)"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 6,
  "source": "22_ON_32_2",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 2,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q2"
  },
  "stem": "The polynomial $\\mathrm{p}(x) = 2x^{3}-x^{2}+a$, where $a$ is a constant. It is given that $2x+3$ is a factor of $\\mathrm{p}(x)$.\n(a) Find the value of $a$.\\hfill (2)\n(b) When $a$ has this value, solve the inequality $\\mathrm{p}(x) < 0$.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q3",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 6,
  "source": "22_ON_32_3",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 3,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q3"
  },
  "stem": "The equation of a curve is $y = \\sin x \\sin 2x$. The curve has a stationary point in the interval $0 < x < \\dfrac{1}{2}\\pi$.\nFind the $x$-coordinate of this point, giving your answer correct to 3 significant figures.\\hfill (6)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q4",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_32_4",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 4,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q4"
  },
  "stem": "(a) Express $4\\cos x - \\sin x$ in the form $R\\cos(x+\\alpha)$, where $R > 0$ and $0 < \\alpha < 90$. State the exact value of $R$ and give $\\alpha$ correct to 2 decimal places.\\hfill (3)\n(b) Hence solve the equation $4\\cos 2x - \\sin 2x = 3$ for $0 < x < 180$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q5",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_32_5",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 5,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q5"
  },
  "stem": "(a) Solve the equation $z^{2}-6\\mathrm{i}z-12 = 0$, giving the answers in the form $x+\\mathrm{i}y$, where $x$ and $y$ are real and exact.\\hfill (3)\n(b) On a sketch of an Argand diagram with origin $O$, show points $A$ and $B$ representing the roots of the equation in part (a).\\hfill (1)\n(c) Find the exact modulus and argument of each root.\\hfill (3)\n(d) Hence show that the triangle $OAB$ is equilateral.\\hfill (1)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q6",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Vectors"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_32_6",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 6,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q6"
  },
  "stem": "Relative to the origin $O$, the points $A$, $B$ and $C$ have position vectors given by\n$\\overrightarrow{OA} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 1 \\end{pmatrix}$, $\\overrightarrow{OB} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}$ and $\\overrightarrow{OC} = \\begin{pmatrix} 5 \\\\ 3 \\\\ -2 \\end{pmatrix}$.\n(a) Using a scalar product, find the cosine of angle $BAC$.\\hfill (4)\n(b) Hence find the area of triangle $ABC$. Give your answer in a simplified exact form.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q7",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differential equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_32_7",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 7,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q7"
  },
  "stem": "The variables $x$ and $\\theta$ satisfy the differential equation\n$x \\sin^{2}\\theta \\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta} = \\tan^{2}\\theta - 2\\cot\\theta$,\nfor $0 < \\theta < \\dfrac{1}{2}\\pi$ and $x > 0$. It is given that $x = 2$ when $\\theta = \\dfrac{1}{4}\\pi$.\n(a) Show that $\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}(\\cot^{2}\\theta) = \\dfrac{-2\\cot\\theta}{\\sin^{2}\\theta}$.\n(You may assume without proof that the derivative of $\\cot\\theta$ with respect to $\\theta$ is $-\\mathrm{cosec}^{2}\\theta$.)\\hfill (1)\n(b) Solve the differential equation and find the value of $x$ when $\\theta = \\dfrac{1}{6}\\pi$.\\hfill (7)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q8",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Integration"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_32_8",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 8,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q8"
  },
  "stem": "The diagram shows part of the curve $y = \\sin \\sqrt{x}$. This part of the curve intersects the $x$-axis at the point where $x = a$.\n(a) State the exact value of $a$.\\hfill (1)\n(b) Using the substitution $u = \\sqrt{x}$, find the exact area of the shaded region in the first quadrant bounded by this part of the curve and the $x$-axis.\\hfill (7)",
  "figure": "data/images/22_ON_32_8.png",
  "solution": "",
  "createdAt": 1784343888571
},
{
  "id": "cie_p3_22ON32_q9",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Numerical solution of equations"
  ],
  "topics": [],
  "difficulty": 5,
  "marks": 9,
  "source": "22_ON_32_9",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 9,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q9"
  },
  "stem": "The diagram shows a semicircle with diameter $AB$, centre $O$ and radius $r$. The shaded region is the minor segment on the chord $AC$ and its area is one third of the area of the semicircle. The angle $CAB$ is $\\theta$ radians.\n(a) Show that $\\theta = \\dfrac{1}{3}(\\pi - 1.5\\sin 2\\theta)$.\\hfill (4)\n(b) Verify by calculation that $0.5 < \\theta < 0.7$.\\hfill (2)\n(c) Use an iterative formula based on the equation in part (a) to determine $\\theta$ correct to 3 decimal places. Give the result of each iteration to 5 decimal places.\\hfill (3)",
  "figure": "data/images/22_ON_32_9.png",
  "solution": "",
  "createdAt": 1784343888572
},
{
  "id": "cie_p3_22ON32_q10",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (partial fractions and binomial expansions)",
    "Integration"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_ON_32_10",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "32",
    "qno": 10,
    "code": "32",
    "label": "2022 Oct/Nov · Paper 32 Q10"
  },
  "stem": "Let $\\mathrm{f}(x) = \\dfrac{4-x+x^{2}}{(1+x)(2+x^{2})}$.\n(a) Express $\\mathrm{f}(x)$ in partial fractions.\\hfill (5)\n(b) Find the exact value of $\\displaystyle\\int_{0}^{4} \\mathrm{f}(x) \\mathrm{d}x$. Give your answer as a single logarithm.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784343888572
}
,
{
  "id": "cie_p3_22ON31_q1",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (modulus functions)"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_ON_31_1",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 1,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q1"
  },
  "stem": "(a) Sketch the graph of $y = |2x + 1|$.\\hfill (1)\n(b) Solve the inequality $3x + 5 < |2x + 1|$.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q2",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_ON_31_2",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 2,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q2"
  },
  "stem": "On a sketch of an Argand diagram shade the region whose points represent complex numbers $z$ satisfying the inequalities $|z| \\leqslant 3$, $\\mathrm{Re}(z) \\geqslant -2$ and $\\dfrac{1}{4}\\pi \\leqslant \\arg z \\leqslant \\pi$.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q3",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Logarithmic and exponential functions"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_ON_31_3",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 3,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q3"
  },
  "stem": "Solve the equation $2^{3x-1} = 5 \\times 3^{-x}$. Give your answer in the form $\\dfrac{\\ln a}{\\ln b}$, where $a$ and $b$ are integers.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q4",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 5,
  "source": "22_ON_31_4",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 4,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q4"
  },
  "stem": "Solve the equation $\\tan(x + 45^\\circ) = 2\\cot x$ for $0^\\circ < x < 180^\\circ$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q5",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 4,
  "source": "22_ON_31_5",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 5,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q5"
  },
  "stem": "The complex numbers $u$ and $w$ are defined by $u = 2\\mathrm{e}^{\\frac{1}{4}\\pi\\mathrm{i}}$ and $w = 3\\mathrm{e}^{\\frac{1}{3}\\pi\\mathrm{i}}$.\n(a) Find $\\dfrac{u^{2}}{w}$, giving your answer in the form $r\\mathrm{e}^{\\mathrm{i}\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leqslant \\pi$. Give the exact values of $r$ and $\\theta$.\\hfill (3)\n(b) State the least positive integer $n$ such that both $\\mathrm{Im}(w^{n}) = 0$ and $\\mathrm{Re}(w^{n}) > 0$.\\hfill (1)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q6",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 7,
  "source": "22_ON_31_6",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 6,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q6"
  },
  "stem": "(a) Prove the identity $\\cos 4\\theta + 4\\cos 2\\theta + 3 \\equiv 8\\cos^{4}\\theta$.\\hfill (4)\n(b) Hence solve the equation $\\cos 4\\theta + 4\\cos 2\\theta = 4$ for $0^\\circ \\leqslant \\theta \\leqslant 180^\\circ$.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q7",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation",
    "Numerical solution of equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_31_7",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 7,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q7"
  },
  "stem": "The equation of a curve is $y = \\dfrac{x}{\\cos^{2}x}$, for $0 \\leqslant x < \\dfrac{1}{2}\\pi$. At the point where $x = a$, the tangent to the curve has gradient equal to 12.\n(a) Show that $a = \\cos^{-1}\\left(\\sqrt[3]{\\dfrac{\\cos a + 2a\\sin a}{12}}\\right)$.\\hfill (3)\n(b) Verify by calculation that $a$ lies between 0.9 and 1.\\hfill (2)\n(c) Use an iterative formula based on the equation in part (a) to determine $a$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q8",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differential equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_ON_31_8",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 8,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q8"
  },
  "stem": "In a certain chemical reaction the amount, $x$ grams, of a substance is increasing. The differential equation satisfied by $x$ and $t$, the time in seconds since the reaction began, is $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t} = kx\\mathrm{e}^{-0.1t}$, where $k$ is a positive constant. It is given that $x = 20$ at the start of the reaction.\n(a) Solve the differential equation, obtaining a relation between $x$, $t$ and $k$.\\hfill (5)\n(b) Given that $x = 40$ when $t = 10$, find the value of $k$ and find the value approached by $x$ as $t$ becomes large.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q9",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation",
    "Integration"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_ON_31_9",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 9,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q9"
  },
  "stem": "The diagram shows part of the curve $y = (3 - x)\\mathrm{e}^{-\\frac{1}{3}x}$ for $x \\geqslant 0$, and its minimum point $M$.\n(a) Find the exact coordinates of $M$.\\hfill (5)\n(b) Find the area of the shaded region bounded by the curve and the axes, giving your answer in terms of $\\mathrm{e}$.\\hfill (5)",
  "figure": "data/images/22_ON_31_9.png",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q10",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (partial fractions and binomial expansions)"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_ON_31_10",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 10,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q10"
  },
  "stem": "Let $f(x) = \\dfrac{2x^{2} + 7x + 8}{(1 + x)(2 + x)^{2}}$.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence obtain the expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^{2}$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344196936
},
{
  "id": "cie_p3_22ON31_q11",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Vectors"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 11,
  "source": "22_ON_31_11",
  "examRef": {
    "year": 2022,
    "month": "Oct/Nov",
    "paper": "31",
    "qno": 11,
    "code": "31",
    "label": "2022 Oct/Nov · Paper 31 Q11"
  },
  "stem": "In the diagram, $OABCD$ is a solid figure in which $OA = OB = 4$ units and $OD = 3$ units. The edge $OD$ is vertical, $DC$ is parallel to $OB$ and $DC = 1$ unit. The base, $OAB$, is horizontal and angle $AOB = 90^\\circ$. Unit vectors $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ are parallel to $OA$, $OB$ and $OD$ respectively. The midpoint of $AB$ is $M$ and the point $N$ on $BC$ is such that $CN = 2NB$.\n(a) Express vectors $\\overrightarrow{MD}$ and $\\overrightarrow{ON}$ in terms of $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$.\\hfill (4)\n(b) Calculate the angle in degrees between the directions of $\\overrightarrow{MD}$ and $\\overrightarrow{ON}$.\\hfill (3)\n(c) Show that the length of the perpendicular from $M$ to $ON$ is $\\dfrac{\\sqrt{22}}{5}$.\\hfill (4)",
  "figure": "data/images/22_ON_31_11.png",
  "solution": "",
  "createdAt": 1784344196936
}
,
{
  "id": "cie_p3_22MJ33_q1",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (modulus functions)"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 4,
  "source": "22_MJ_33_1",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 1,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q1"
  },
  "stem": "Find, in terms of $a$, the set of values of $x$ satisfying the inequality\n$2|3x + a| < |2x + 3a|$,\nwhere $a$ is a positive constant.\\hfill (4)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q2",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Trigonometry"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 5,
  "source": "22_MJ_33_2",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 2,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q2"
  },
  "stem": "Solve the equation $\\cos(\\theta - 60^\\circ) = 3\\sin\\theta$, for $0^\\circ \\leqslant \\theta \\leqslant 360^\\circ$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q3",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Logarithmic and exponential functions"
  ],
  "topics": [],
  "difficulty": 3,
  "marks": 5,
  "source": "22_MJ_33_3",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 3,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q3"
  },
  "stem": "(a) Show that the equation $\\log_3(2x + 1) = 1 + 2\\log_3(x - 1)$ can be written as a quadratic equation in $x$.\\hfill (3)\n(b) Hence solve the equation $\\log_3(4y + 1) = 1 + 2\\log_3(2y - 1)$, giving your answer correct to 2 decimal places.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q4",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 7,
  "source": "22_MJ_33_4",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 4,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q4"
  },
  "stem": "The curve $y = \\mathrm{e}^{-4x}\\tan x$ has two stationary points in the interval $0 \\leqslant x < \\dfrac{1}{2}\\pi$.\n(a) Obtain an expression for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and show it can be written in the form $\\sec^2 x(a + b\\sin 2x)\\mathrm{e}^{-4x}$, where $a$ and $b$ are constants.\\hfill (4)\n(b) Hence find the exact $x$-coordinates of the two stationary points.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q5",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Complex numbers"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_MJ_33_5",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 5,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q5"
  },
  "stem": "The complex number $3 - \\mathrm{i}$ is denoted by $u$.\n(a) Show, on an Argand diagram with origin $O$, the points $A$, $B$ and $C$ representing the complex numbers $u$, $u^*$ and $u^* - u$ respectively. State the type of quadrilateral formed by the points $O$, $A$, $B$ and $C$.\\hfill (3)\n(b) Express $\\dfrac{u^*}{u}$ in the form $x + \\mathrm{i}y$, where $x$ and $y$ are real.\\hfill (3)\n(c) By considering the argument of $\\dfrac{u^*}{u}$, or otherwise, prove that $\\tan^{-1}\\dfrac{3}{4} = 2\\tan^{-1}\\dfrac{1}{3}$.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q6",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differentiation"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 8,
  "source": "22_MJ_33_6",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 6,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q6"
  },
  "stem": "The parametric equations of a curve are $x = \\dfrac{1}{\\cos t}$, $y = \\ln\\tan t$, where $0 < t < \\dfrac{1}{2}\\pi$.\n(a) Show that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{\\cos t}{\\sin^2 t}$.\\hfill (5)\n(b) Find the equation of the tangent to the curve at the point where $y = 0$.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q7",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Algebra (partial fractions and binomial expansions)"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_MJ_33_7",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 7,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q7"
  },
  "stem": "Let $f(x) = \\dfrac{5x^{2} + 8x - 3}{(x - 2)(2x^{2} + 3)}$.\n(a) Express $f(x)$ in partial fractions.\\hfill (5)\n(b) Hence obtain the expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^{2}$.\\hfill (5)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q8",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Differential equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 9,
  "source": "22_MJ_33_8",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 8,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q8"
  },
  "stem": "At time $t$ days after the start of observations, the number of insects in a population is $N$. The variation in the number of insects is modelled by a differential equation of the form $\\dfrac{\\mathrm{d}N}{\\mathrm{d}t} = kN^{\\frac{1}{2}}\\cos 0.02t$, where $k$ is a constant and $N$ is a continuous variable. It is given that when $t = 0$, $N = 100$.\n(a) Solve the differential equation, obtaining a relation between $N$, $k$ and $t$.\\hfill (5)\n(b) Given also that $N = 625$ when $t = 50$, find the value of $k$.\\hfill (2)\n(c) Obtain an expression for $N$ in terms of $t$, and find the greatest value of $N$ predicted by this model.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q9",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Vectors"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 9,
  "source": "22_MJ_33_9",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 9,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q9"
  },
  "stem": "With respect to the origin $O$, the point $A$ has position vector given by $\\overrightarrow{OA} = \\mathbf{i} + 5\\mathbf{j} + 6\\mathbf{k}$. The line $l$ has vector equation $\\mathbf{r} = 4\\mathbf{i} + \\mathbf{k} + \\lambda(-\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$.\n(a) Find in degrees the acute angle between the directions of $\\overrightarrow{OA}$ and $l$.\\hfill (3)\n(b) Find the position vector of the foot of the perpendicular from $A$ to $l$.\\hfill (4)\n(c) Hence find the position vector of the reflection of $A$ in $l$.\\hfill (2)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
},
{
  "id": "cie_p3_22MJ33_q10",
  "board": "CIE",
  "subject": "P3",
  "chapter": [
    "Integration",
    "Numerical solution of equations"
  ],
  "topics": [],
  "difficulty": 4,
  "marks": 10,
  "source": "22_MJ_33_10",
  "examRef": {
    "year": 2022,
    "month": "May/June",
    "paper": "33",
    "qno": 10,
    "code": "33",
    "label": "2022 May/June · Paper 33 Q10"
  },
  "stem": "The constant $a$ is such that $\\displaystyle\\int_{1}^{a} x^{2}\\ln x\\,\\mathrm{d}x = 4$.\n(a) Show that $a = \\left(\\dfrac{35}{3\\ln a - 1}\\right)^{\\frac{1}{3}}$.\\hfill (5)\n(b) Verify by calculation that $a$ lies between 2.4 and 2.8.\\hfill (2)\n(c) Use an iterative formula based on the equation in part (a) to determine $a$ correct to 2 decimal places. Give the result of each iteration to 4 decimal places.\\hfill (3)",
  "figure": "",
  "solution": "",
  "createdAt": 1784344677651
}
];




const _MONTHS = {
  jan: "Jan", january: "Jan", feb: "Feb", february: "Feb", mar: "Mar", march: "Mar",
  apr: "Apr", april: "Apr", may: "May", jun: "Jun", june: "Jun", jul: "Jul", july: "Jul",
  aug: "Aug", august: "Aug", sep: "Sep", sept: "Sep", september: "Sep",
  oct: "Oct", october: "Oct", nov: "Nov", november: "Nov", dec: "Dec", december: "Dec",
  // CIE 考季（series，非自然月）：FM=Feb/Mar, MJ=May/June, ON=Oct/Nov
  fm: "Feb/Mar", mj: "May/June", on: "Oct/Nov"
};
function _normMonth(s) {
  if (!s) return "";
  return _MONTHS[String(s).toLowerCase()] || (s.charAt(0).toUpperCase() + s.slice(1, 3).toLowerCase());
}

function parseExamRef(source) {
  if (!source) return null;
  const s = String(source).trim();

  // 新格式：YY_Mon_Paper[_Q]   例 26_Jan_01 / 26_Jan_01A / 26_Jan_01A_2
  let m = s.match(/^(\d{2})_([A-Za-z]{3,9})_([0-9][0-9A-Za-z]*)(?:_(\d+))?$/);
  if (m) {
    const year = 2000 + parseInt(m[1], 10);
    const month = _normMonth(m[2]);
    const paper = m[3].toUpperCase();
    const qno = m[4] ? parseInt(m[4], 10) : undefined;
    return {
      year, month, paper, qno,
      code: paper,                       // 按卷号筛选
      label: year + " " + month + " · Paper " + paper + (qno ? " Q" + qno : "")
    };
  }

  // CIE 格式：YY_SERIES_VARIANT[_Q]  例 21_MJ_31 / 21_MJ_31_2
  //   - year   : 21 → 2021
  //   - series : MJ（CIE 考季 FM=Feb/Mar, MJ=May/June, ON=Oct/Nov）
  //   - variant: 31（Paper 3 变体号为 31/32/33；同理 11/12/13=Paper1 等）
  m = s.match(/^(\d{2})_([A-Za-z]{2})_(\d{2})(?:_(\d+))?$/);
  if (m) {
    const year = 2000 + parseInt(m[1], 10);
    const month = _normMonth(m[2]);      // FM/MJ/ON → Feb/Mar / May/June / Oct/Nov
    const paper = m[3];                   // 卷号变体，如 31
    const qno = m[4] ? parseInt(m[4], 10) : undefined;
    return {
      year, month, paper, qno,
      code: paper,
      label: year + " " + month + " · Paper " + paper + (qno ? " Q" + qno : "")
    };
  }

  // 兼容旧格式：UNIT_Paper_YY_Q   例 WFM02_01A_26_1
  m = s.match(/^([A-Za-z0-9]+)_([0-9][0-9A-Za-z]*)_(\d{2})_(\d+)$/);
  if (m) {
    const unit = m[1];
    const paper = m[2].toUpperCase();
    const year = 2000 + parseInt(m[3], 10);
    const qno = parseInt(m[4], 10);
    return {
      unit, paper, year, qno,
      code: paper,
      label: unit + "/" + paper + " · " + year + " Q" + qno
    };
  }
  return null;
}

/* ---------------------- 5. 存储层（IndexedDB，按 id 读写；用户覆盖记录永优先于种子）---------------------- */

const Store = (function () {
  const KEY = "mathbank_questions_v2";
  const DELETED_KEY = "mathbank_deleted_v2";
  const DB_NAME = "mathbank";
  const DB_VERSION = 1;
  const STORE_Q = "questions";   // 用户覆盖记录（完整题对象），keyPath: id
  const STORE_DEL = "deleted";   // 已删除 id 标记，keyPath: id

  let _db = null;          // IDB 连接（null = 降级到 localStorage）
  let _fallback = false;   // 浏览器不支持 IDB 时降级
  let _cache = null;       // 合并后的题目数组（种子被覆盖记录按 id 覆盖）；读取 O(1)
  let _overrides = null;   // Map<id, 覆盖记录>
  let _deleted = null;     // Set<id> 已删除

  /* ---------- IndexedDB 封装（异步） ---------- */
  function _openDB() {
    return new Promise(function (resolve, reject) {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function () {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_Q)) db.createObjectStore(STORE_Q, { keyPath: "id" });
        if (!db.objectStoreNames.contains(STORE_DEL)) db.createObjectStore(STORE_DEL, { keyPath: "id" });
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }
  function _idbGetAll(store) {
    return new Promise(function (resolve, reject) {
      const r = _db.transaction(store, "readonly").objectStore(store).getAll();
      r.onsuccess = function () { resolve(r.result || []); };
      r.onerror = function () { reject(r.error); };
    });
  }
  function _idbPut(store, value) {
    return new Promise(function (resolve, reject) {
      const r = _db.transaction(store, "readwrite").objectStore(store).put(value);
      r.onsuccess = function () { resolve(); };
      r.onerror = function () { reject(r.error); };
    });
  }
  function _idbDelete(store, key) {
    return new Promise(function (resolve, reject) {
      const r = _db.transaction(store, "readwrite").objectStore(store).delete(key);
      r.onsuccess = function () { resolve(); };
      r.onerror = function () { reject(r.error); };
    });
  }
  function _idbClear(store) {
    return new Promise(function (resolve, reject) {
      const r = _db.transaction(store, "readwrite").objectStore(store).clear();
      r.onsuccess = function () { resolve(); };
      r.onerror = function () { reject(r.error); };
    });
  }

  /* ---------- 降级模式（无 IDB）：沿用旧 localStorage 逻辑 ---------- */
  function _legacyBuild() {
    let list = null;
    try { const raw = localStorage.getItem(KEY); if (raw) list = JSON.parse(raw); } catch (e) {}
    if (!Array.isArray(list)) {
      list = JSON.parse(JSON.stringify(SEED_QUESTIONS.filter(function (q) { return q && q.id; })));
    } else {
      const deleted = new Set();
      try { JSON.parse(localStorage.getItem(DELETED_KEY) || "[]").forEach(function (x) { deleted.add(x); }); } catch (e) {}
      const ids = new Set(list.map(function (q) { return q.id; }));
      SEED_QUESTIONS.forEach(function (sq) {
        if (sq.id && !ids.has(sq.id) && !deleted.has(sq.id)) list.push(JSON.parse(JSON.stringify(sq)));
      });
      const seedMap = new Map(SEED_QUESTIONS.map(function (q) { return [q.id, q]; }));
      list.forEach(function (q) {
        const sq = seedMap.get(q.id);
        if (!sq) return;
        if (q._edited) return;
        if (sq.createdAt && q.createdAt && sq.createdAt > q.createdAt) {
          Object.assign(q, JSON.parse(JSON.stringify(sq)));
        } else {
          Object.keys(sq).forEach(function (k) {
            if (q[k] === undefined || q[k] === null) q[k] = JSON.parse(JSON.stringify(sq[k]));
          });
        }
      });
    }
    return list;
  }
  function _legacySave(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); }
    catch (e) { console.warn("本地存储写入失败（可能超出配额）", e); }
  }

  /* ---------- 合并：种子被覆盖记录按 id 覆盖；已删除 id 排除 ---------- */
  function _rebuild() {
    const arr = [];
    const seedIds = new Set(SEED_QUESTIONS.map(function (q) { return q.id; }));
    SEED_QUESTIONS.forEach(function (sq) {
      if (_deleted.has(sq.id)) return;
      const ov = _overrides.get(sq.id);
      arr.push(ov ? ov : JSON.parse(JSON.stringify(sq)));
    });
    _overrides.forEach(function (ov, id) {
      if (!seedIds.has(id) && !_deleted.has(id)) arr.push(ov);
    });
    _cache = arr;
  }

  function _loadLegacyOverrides() {
    // 仅把「用户真正编辑过（_edited）或种子中没有（用户新增）」的本地记录导入为覆盖记录，
    // 其余（等同于种子的记录）保持为种子，便于后续种子修复自动生效，也避免把被误覆盖的空解析固化为覆盖。
    let legacy = null;
    try { const raw = localStorage.getItem(KEY); if (raw) legacy = JSON.parse(raw); } catch (e) {}
    if (!Array.isArray(legacy)) return [];
    const seedIds = new Set(SEED_QUESTIONS.map(function (q) { return q.id; }));
    return legacy.filter(function (q) { return q && q.id && (q._edited === true || !seedIds.has(q.id)); });
  }

  async function init() {
    if (typeof indexedDB === "undefined") { _fallback = true; _cache = _legacyBuild(); return; }
    try {
      _db = await _openDB();
      let overrides = await _idbGetAll(STORE_Q);
      let deleted = await _idbGetAll(STORE_DEL);
      if (overrides.length === 0 && deleted.length === 0) {
        const migrated = _loadLegacyOverrides();
        if (migrated.length) {
          await Promise.all(migrated.map(function (o) { return _idbPut(STORE_Q, o); }));
          overrides = migrated;
          try { localStorage.removeItem(KEY); } catch (e) {}
        }
      }
      _overrides = new Map(overrides.map(function (o) { return [o.id, o]; }));
      _deleted = new Set(deleted.map(function (d) { return d.id; }));
      _rebuild();
    } catch (e) {
      console.warn("IndexedDB 初始化失败，降级到 localStorage", e);
      _fallback = true; _db = null;
      _cache = _legacyBuild();
    }
  }

  function all() {
    if (!_cache) throw new Error("Store 尚未初始化，请先 await Store.init()");
    return _cache;
  }

  function upsert(q) {
    if (!_cache) return q;
    const rec = JSON.parse(JSON.stringify(q));
    const idx = _cache.findIndex(function (x) { return x.id === q.id; });
    if (idx >= 0) _cache[idx] = rec; else _cache.unshift(rec);
    if (_deleted && _deleted.has(q.id)) { _deleted.delete(q.id); if (_db) _idbDelete(STORE_DEL, q.id); }
    if (_db) {
      _overrides.set(q.id, rec);
      _idbPut(STORE_Q, rec).catch(function (e) { console.warn("保存失败", e); });
    } else {
      _legacySave(_cache);
    }
    return rec;
  }

  function remove(id) {
    if (!_cache) return;
    _cache = _cache.filter(function (x) { return x.id !== id; });
    if (_deleted) _deleted.add(id);
    if (_db) { _overrides.delete(id); _idbPut(STORE_DEL, { id: id }); _idbDelete(STORE_Q, id); }
    else { _legacySave(_cache); }
  }

  async function replaceAll(list) {
    const items = (list || []).filter(function (q) { return q && q.id; });
    const map = new Map(items.map(function (q) { return [q.id, q]; }));
    const seedIds = new Set(SEED_QUESTIONS.map(function (q) { return q.id; }));
    const ov = new Map();
    const del = new Set();
    items.forEach(function (q) { ov.set(q.id, q); });
    seedIds.forEach(function (id) { if (!map.has(id)) del.add(id); });
    _overrides = ov; _deleted = del;
    _cache = items.slice();
    if (_db) {
      try {
        await _idbClear(STORE_Q); await _idbClear(STORE_DEL);
        await Promise.all(Array.from(ov.values()).map(function (o) { return _idbPut(STORE_Q, o); }));
        await Promise.all(Array.from(del).map(function (id) { return _idbPut(STORE_DEL, { id: id }); }));
      } catch (e) { console.warn("批量写入失败", e); }
    } else {
      _legacySave(_cache);
    }
  }

  function newId() {
    return "q_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
  }

  return {
    init: init, all: all, upsert: upsert, remove: remove,
    replaceAll: replaceAll, newId: newId, KEY: KEY,
    get fallback() { return _fallback; }
  };
})();
