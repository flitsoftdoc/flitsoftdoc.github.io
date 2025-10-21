# 第二部分 离散时间信号与系统



# 第8章 离散时间信号与系统

## 8.1 概述

在本章中，我们将更详细地研究离散时间信号与系统。

## 8.2 自变量的变换

信号与系统研究中的一个重要概念是信号的变换。在这里，我们介绍几种基本的信号变换。每一种变换都涉及对自变量的简单修改。

### 8.2.1 时间平移（位移）

我们首先考虑的信号变换称为**时间平移**。时间平移（也称为位移）将一个序列 $x$ 映射为序列 $y$，其定义为

$$
\begin{equation*}
y(n)=x(n-b), \tag{8.1}
\end{equation*}
$$


其中 $b$ 是一个整数常数。换句话说，序列 $y$ 是通过在 $x(n)$ 的表达式中将 $n$ 替换为 $n-b$ 而得到的。从几何上看，变换 (8.1) 将序列 $x$ 沿时间轴平移，得到 $y$。若 $b>0$，则 $y$ 相对于 $x$ 向右平移（即延迟）；若 $b<0$，则 $y$ 相对于 $x$ 向左平移（即超前）。

时间平移的效果如图 8.1 所示。通过对图 8.1(a) 中的序列 $x$ 进行时间平移变换，可以得到图 8.1(b) 和 (c) 中的序列。

### 8.2.2 时间反转（镜像）

接下来我们考虑的信号变换称为**时间反转**。时间反转（也称为镜像）将序列 $x$ 映射为序列 $y$，其定义为

$$
\begin{equation*}
y(n)=x(-n) . \tag{8.2}
\end{equation*}
$$


换句话说，序列 $y$ 是通过在 $x(n)$ 的表达式中将 $n$ 替换为 $-n$ 而得到的。从几何上看，变换 (8.2) 将序列 $x$ 关于原点进行镜像，从而得到 $y$。

为了说明时间反转的效果，图 8.2 给出了一个例子。对图 8.2(a) 中的序列 $x$ 进行时间反转变换，可以得到图 8.2(b) 中的序列。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-004.jpg?height=857&width=1560&top_left_y=478&top_left_x=218){width="400"}
  
图 8.1：时间平移的例子。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-004.jpg?height=417&width=1406&top_left_y=1796&top_left_x=291){width="400"}
  
图 8.2：时间反转的例子。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-005.jpg?height=422&width=1546&top_left_y=286&top_left_x=348){width="400"}
  
图 8.3：抽取的例子。(a) 原始序列 $x$。(b) 对 $x$ 进行 2 倍抽取后的结果。
### 8.2.3 抽取（Downsampling）

接下来要讨论的变换称为**抽取**。抽取将序列 $x$ 映射为序列 $y$，其定义为

$$
\begin{equation*}
y(n)=(\downarrow a) x(n)=x(a n), \tag{8.3}
\end{equation*}
$$


其中 $a$ 是一个严格正整数。常数 $a$ 被称为抽取因子。采用抽取因子 $a$ 的抽取称为 **$a$ 倍抽取**。简单来说，$a$ 倍抽取就是从原始序列中保留每隔 $a$ 个的一个采样点，丢弃其他采样点。因此，抽取使采样率/采样密度降低 $a$ 倍。

为了说明抽取的效果，图 8.3 给出了一个例子。对图 8.3(a) 中的序列 $x$ 进行 2 倍抽取，可以得到图 8.3(b) 中的序列。

### 8.2.4 插值（时间扩展，Upsampling）

接下来要讨论的变换称为**插值**。插值（也称为时间扩展）将序列 $x$ 映射为序列 $y$，其定义为

$$
y(n)=(\uparrow a) x(n)= \begin{cases}x(n / a) & n / a \text { 为整数 } \\ 0 & \text { 否则 },\end{cases}
$$


其中 $a$ 是一个严格正整数。常数 $a$ 被称为插值因子。采用插值因子 $a$ 的插值称为 **$a$ 倍插值**。简单来说，$a$ 倍插值的结果就是在输入序列的每两个相邻采样点之间插入 $a-1$ 个零。因此，插值使采样率/采样密度增加 $a$ 倍。

为了说明插值的效果，图 8.4 给出了一个例子。对图 8.4(a) 中的序列 $x$ 进行 2 倍插值，可以得到图 8.4(b) 中的序列。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-006.jpg?height=858&width=879&top_left_y=283&top_left_x=575){width="400"}
  
图 8.4：插值的例子。(a) 原始序列 $x$。(b) 对 $x$ 进行 2 倍插值后的结果。

### 8.2.5 组合自变量变换

有些自变量变换是可交换的，而有些则不可交换。交换性问题在涉及组合变换的表达式简化或推导时非常重要。  
- 时间反转与抽取或插值操作是可交换的；  
- 时间平移（当平移量非零时）与时间反转、抽取或插值操作不可交换；  
- 抽取与插值操作一般不可交换，除非它们的因子互素（即没有公因子）。

考虑一个将输入序列 $x$ 映射为输出序列 $y$ 的变换，其定义为

$$
\begin{equation*}
y(n)=x(a n-b), \tag{8.4}
\end{equation*}
$$


其中 $a$ 和 $b$ 是整数，且 $a \neq 0$。这种变换是时间平移、抽取和时间反转操作的组合。

变换 (8.4) 等价于以下两步：

1. 首先，将 $x$ 平移 $b$；  
2. 然后，对结果进行 $|a|$ 倍抽取，若 $a<0$，还需进行时间反转。

如果 $\frac{b}{a}$ 是整数，则变换 (8.4) 也等价于以下两步：

1. 首先，对 $x$ 进行 $|a|$ 倍抽取，若 $a<0$，还需进行时间反转；  
2. 然后，将结果平移 $\frac{b}{a}$。

需要注意的是，这两种解释中的平移量不同（即 $b$ 与 $\frac{b}{a}$）。这是因为时间平移操作与抽取或时间反转操作不可交换。上述两种解释的正确性证明留作习题 8.2。
### 8.2.6 自变量变换的两种视角

自变量的变换可以从以下两个角度来看待：

1. 该变换对序列的影响；  
2. 该变换对横轴的影响。  

这种区分非常重要，因为同一个变换对序列和对横轴的影响是相反的。举例来说，(时间平移) 变换在 $x(n)$ 的表达式中将 $n$ 替换为 $n-b$（其中 $b$ 为整数），可以被视为以下两种变换：

1. 将序列 $x$ 向右平移 $b$ 个单位；  
2. 将横轴向左平移 $b$ 个单位。  

在我们对自变量变换的研究中，我们只关心变换对序列的影响。如果不注意到我们是从序列的角度来考虑（而不是从坐标轴的角度），那么许多自变量变换的性质就无法理解。

## 8.3 序列的性质

序列可以具有许多有趣的性质。在以下内容中，我们将更详细地研究先前介绍过的对称性和周期性。同时，我们还会介绍其他一些序列的性质。这些性质在信号与系统的分析中经常非常有用。
### 8.3.1 关于对称性的说明

在这里，我们对之前介绍过的**偶序列**和**奇序列**做一些补充说明。由于序列经常需要进行加法或乘法运算，人们可能会关心这些运算对序列偶/奇对称性的影响。下面给出一些相关结果。

涉及偶序列与奇序列的**和**具有以下性质：

- 两个偶序列的和仍为偶序列。  
- 两个奇序列的和仍为奇序列。  
- 一个偶序列与一个奇序列的和既不是偶序列也不是奇序列（前提是序列不恒为零）。  

涉及偶序列与奇序列的**积**具有以下性质：

- 两个偶序列的积为偶序列。  
- 两个奇序列的积为偶序列。  
- 一个偶序列与一个奇序列的积为奇序列。  

（关于上述偶/奇序列和与积的性质的证明留作习题 8.9。）

事实上，任意一个序列都可以分解为一个偶序列与一个奇序列之和，如下定理所示。

**定理 8.1（序列分解为偶/奇部分）**  
任意一个序列 $x$ 都可以唯一表示为如下形式的和：

$$
\begin{equation*}
x(n)=x_{\mathrm{e}}(n)+x_{\mathrm{o}}(n) \tag{8.5}
\end{equation*}
$$


其中 $x_{\mathrm{e}}$ 和 $x_{\mathrm{o}}$ 分别是偶序列与奇序列，且定义为

$$
\begin{gather*}
x_{\mathrm{e}}(n)=\frac{1}{2}[x(n)+x(-n)] \quad \text {，}  \tag{8.6}\\
x_{\mathrm{o}}(n)=\frac{1}{2}[x(n)-x(-n)] \tag{8.7}
\end{gather*}
$$


术语上，$x_{\mathrm{e}}$ 称为 $x$ 的**偶部分**，记作 $\operatorname{Even}\{x\}$；$x_{\mathrm{o}}$ 称为 $x$ 的**奇部分**，记作 $\operatorname{Odd}\{x\}$。

**证明：**  
由 (8.6) 与 (8.7) 可直接验证 $x_{\mathrm{e}}+x_{\mathrm{o}}=x$：

$$
\begin{aligned}
x_{\mathrm{e}}(n)+x_{\mathrm{o}}(n) & =\tfrac{1}{2}(x(n)+x(-n))+\tfrac{1}{2}(x(n)-x(-n)) \\
& =\tfrac{1}{2} x(n)+\tfrac{1}{2} x(-n)+\tfrac{1}{2} x(n)-\tfrac{1}{2} x(-n) \\
& =x(n)
\end{aligned}
$$


此外，可验证 $x_{\mathrm{e}}$ 是偶序列，$x_{\mathrm{o}}$ 是奇序列。根据 (8.6) 的定义：

$$
\begin{aligned}
x_{\mathrm{e}}(-n) & =\tfrac{1}{2}(x(-n)+x(-(-n))) \\
& =\tfrac{1}{2}(x(n)+x(-n)) \\
& =x_{\mathrm{e}}(n)
\end{aligned}
$$


因此 $x_{\mathrm{e}}$ 是偶序列。根据 (8.7) 的定义：

$$
\begin{aligned}
x_{\mathrm{o}}(-n) & =\tfrac{1}{2}(x(-n)-x(n)) \\
& =\tfrac{1}{2}(-x(n)+x(-n)) \\
& =-x_{\mathrm{o}}(n)
\end{aligned}
$$


因此 $x_{\mathrm{o}}$ 是奇序列。

最后，我们证明序列 $x$ 分解为偶序列与奇序列之和是唯一的。假设 $x$ 可以用两种方式表示为偶序列与奇序列之和：

$$
\begin{gather*}
x(n)=f_{\mathrm{e}}(n)+f_{\mathrm{o}}(n) \quad \text {，}  \tag{8.8a}\\
x(n)=g_{\mathrm{e}}(n)+g_{\mathrm{o}}(n) \tag{8.8b}
\end{gather*}
$$


其中 $f_{\mathrm{e}}$ 与 $g_{\mathrm{e}}$ 为偶序列，$f_{\mathrm{o}}$ 与 $g_{\mathrm{o}}$ 为奇序列。由两式相等可得：

$$
f_{\mathrm{e}}(n)+f_{\mathrm{o}}(n)=g_{\mathrm{e}}(n)+g_{\mathrm{o}}(n)
$$


整理得：

$$
f_{\mathrm{e}}(n)-g_{\mathrm{e}}(n)=g_{\mathrm{o}}(n)-f_{\mathrm{o}}(n)
$$


更仔细分析这一等式：左边是偶序列，右边是奇序列。因此，偶序列 $f_{\mathrm{e}}(n)-g_{\mathrm{e}}(n)$ 必须等于奇序列 $g_{\mathrm{o}}(n)-f_{\mathrm{o}}(n)$。而唯一同时为偶序列和奇序列的序列是零序列。（这一事实的证明留作习题 8.11。）因此有：

$$
f_{\mathrm{e}}(n)-g_{\mathrm{e}}(n)=g_{\mathrm{o}}(n)-f_{\mathrm{o}}(n)=0
$$


即：

$$
f_{\mathrm{e}}(n)=g_{\mathrm{e}}(n) \quad \text {且} \quad f_{\mathrm{o}}(n)=g_{\mathrm{o}}(n)
$$


这表明 (8.8a) 与 (8.8b) 给出的分解实际上是相同的。因此，序列 $x$ 分解为偶部分与奇部分的表示是唯一的。
### 8.3.2 关于周期性的说明

由于我们经常需要对序列进行加法运算，因此有必要弄清楚两个周期序列的和是否仍为周期序列。我们将在接下来讨论这个问题，但在此之前，先介绍最小公倍数和最大公约数的概念。

**最小公倍数（LCM）**  
两个非零整数 $a$ 和 $b$ 的最小公倍数，记作 $\operatorname{lcm}(a, b)$，是能被 $a$ 和 $b$ 同时整除的最小正整数。由定义可知，如果 $a$ 与 $b$ 互素，则 $\operatorname{lcm}(a, b)=|a b|$。通过对 $a$ 与 $b$ 进行素因数分解，并取每个素因数的最高幂相乘，即可得到 $\operatorname{lcm}(a, b)$。

**最大公约数（GCD）**  
两个整数 $a$ 和 $b$ 的最大公约数，记作 $\operatorname{gcd}(a, b)$，是能同时整除 $a$ 与 $b$ 的最大正整数，其中至少有一个不为零。当 $a$ 和 $b$ 均为零时，定义 $\operatorname{gcd}(0,0)=0$。  
因为 $0 / a=0 \in \mathbb{Z}$（即 $a$ 整除 0），且 $a / a=1 \in \mathbb{Z}$（即 $a$ 整除 $a$），所以 $\operatorname{gcd}(a, 0)=\operatorname{gcd}(0, a)=|a|$。由于整数的正负号不影响整除关系，因此 $\operatorname{gcd}(a, b)=\operatorname{gcd}(-a, b)=\operatorname{gcd}(a,-b)=\operatorname{gcd}(-a,-b)$。由定义可知，如果 $a$ 与 $b$ 互素，则 $\operatorname{gcd}(a, b)=1$。通过对 $a$ 与 $b$ 进行素因数分解，并取每个素因数的最低幂相乘，即可得到 $\operatorname{gcd}(a, b)$。

---

**例 8.1（最小公倍数）** 求以下整数对的最小公倍数：  
(a) 20 与 6；  
(b) 54 与 24；  
(c) 24 与 90。  

**解：**  
(a) 先写出 20 与 6 的素因数分解：

$$
20=2^{2} \cdot 5^{1}, \quad 6=2^{1} \cdot 3^{1}
$$


取各素因数的最高幂：来自 20 的 $2^{2}$ 和 $5^{1}$，来自 6 的 $3^{1}$。因此：

$$
\operatorname{lcm}(20,6)=2^{2} \cdot 3^{1} \cdot 5^{1}=60
$$


(b) 同理，

$$
\operatorname{lcm}(54,24)=\operatorname{lcm}\left(2^{1} \cdot 3^{3}, 2^{3} \cdot 3^{1}\right)=2^{3} \cdot 3^{3}=216
$$


(c) 同理，

$$
\operatorname{lcm}(24,90)=\operatorname{lcm}\left(2^{3} \cdot 3^{1}, 2^{1} \cdot 3^{2} \cdot 5^{1}\right)=2^{3} \cdot 3^{2} \cdot 5^{1}=360
$$


---

**例 8.2（最大公约数）** 求以下整数对的最大公约数：  
(a) 20 与 6；  
(b) 54 与 24；  
(c) 24 与 90。  

**解：**  
(a) 先写出素因数分解：

$$
20=2^{2} \cdot 5^{1}, \quad 6=2^{1} \cdot 3^{1}
$$


取各素因数的最低幂：来自 6 的 $2^{1}$，来自 20 的 $3^{0}$，来自 6 的 $5^{0}$。因此：

$$
\operatorname{gcd}(20,6)=2^{1} \cdot 3^{0} \cdot 5^{0}=2
$$


(b) 同理，

$$
\operatorname{gcd}(54,24)=\operatorname{gcd}\left(2^{1} \cdot 3^{3}, 2^{3} \cdot 3^{1}\right)=2^{1} \cdot 3^{1}=6
$$


(c) 同理，

$$
\operatorname{gcd}(24,90)=\operatorname{gcd}\left(2^{3} \cdot 3^{1}, 2^{1} \cdot 3^{2} \cdot 5^{1}\right)=2^{1} \cdot 3^{1} \cdot 5^{0}=6
$$


---

在介绍了最小公倍数之后，我们现在来研究两个周期序列的和是否仍为周期序列。以下定理给出了明确的结果。

**定理 8.2（周期序列的和）**  
设 $x_{1}$ 和 $x_{2}$ 分别为周期为 $N_{1}$ 与 $N_{2}$ 的周期序列，则 $x=x_{1}+x_{2}$ 是一个周期为

$$
N=\operatorname{lcm}(N_{1},N_{2})
$$


的周期序列。

**证明：** 由于 $N$ 同时是 $N_{1}$ 和 $N_{2}$ 的整数倍，设 $N=k_{1}N_{1}=k_{2}N_{2}$，其中 $k_{1},k_{2}$ 为正整数。于是：

$$
\begin{aligned}
x(n+N) &=x_{1}(n+N)+x_{2}(n+N) \\
&=x_{1}(n+k_{1}N_{1})+x_{2}(n+k_{2}N_{2}) \\
&=x_{1}(n)+x_{2}(n) \\
&=x(n)
\end{aligned}
$$


因此，$x$ 是周期为 $N$ 的序列。

与周期函数不同，两个周期序列的和**总是周期序列**。

---

**例 8.3**  
序列 $x_{1}(n)=\cos\!\left(\tfrac{\pi}{6} n\right)$ 与 $x_{2}(n)=\sin\!\left(\tfrac{2 \pi}{45} n\right)$ 的基周期分别为 $N_{1}=12$ 和 $N_{2}=45$。求 $y=x_{1}+x_{2}$ 的基周期 $N$。

**解：**

$$
\begin{aligned}
N &=\operatorname{lcm}(N_{1},N_{2}) \\
&=\operatorname{lcm}(12,45) \\
&=\operatorname{lcm}(2^{2}\cdot 3,3^{2}\cdot 5) \\
&=2^{2}\cdot 3^{2}\cdot 5 \\
&=180
\end{aligned}
$$


图 8.5 给出了序列 $x_{1},x_{2}$ 以及 $x_{1}+x_{2}$ 的绘图。

---

有时一个序列既可能是周期的，又可能具有偶或奇对称性。在这种情况下，下述定理可能有用。

**定理 8.3**  
设 $x$ 为任意一个 $N$ 周期序列，则：

1. 如果 $x$ 是偶序列，则对所有 $n \in \mathbb{Z}$，有 $x(n)=x(N-n)$；  
2. 如果 $x$ 是奇序列，则对所有 $n \in \mathbb{Z}$，有 $x(n)=-x(N-n)$；  
3. 如果 $x$ 是奇序列，则当 $N$ 为偶或奇数时，均有 $x(0)=0$，并且当 $N$ 为偶数时，$x\!\left(\tfrac{N}{2}\right)=0$。  

**证明：** 本定理的证明留作习题 8.5。
### 8.3.3 序列的支集（Support）

我们可以根据序列在何区间上非零来对其分类，这有时被称为序列的**支集（support）**。下面介绍与序列支集相关的一些术语。

如果存在某个有限常数 $n_{0}$，使得

$$
x(n)=0 \quad \text{对所有 } n>n_{0},
$$


则称序列 $x$ 为**左边序列（left sided）**。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-011.jpg?height=1241&width=1457&top_left_y=729&top_left_x=391){width="400"}
  
图 8.5：例 8.3 的序列。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-012.jpg?height=720&width=1579&top_left_y=283&top_left_x=199){width="400"}
  
图 8.6：不同“单边”特性的序列示例。(a) 左边但非右边；(b) 右边但非左边；(c) 有限时长；(d) 双边。

换句话说，该序列在某点的左侧才可能非零。  
类似地，如果存在某个有限常数 $n_{0}$，使得

$$
x(n)=0 \quad \text{对所有 } n<n_{0},
$$


则称序列 $x$ 为**右边序列（right sided）**。

换句话说，该序列在某点的右侧才可能非零。  
若一个序列既是左边序列又是右边序列，则称其为**时限（time limited）**或**有限时长（finite duration）**序列。  
若一个序列既不是左边序列也不是右边序列，则称其为**双边（two sided）**序列。  
注意：每个序列必定属于以下四类之一：左边但非右边、右边但非左边、有限时长、或双边。图 8.6 给出了这些类型的示例。

若

$$
x(n)=0 \quad \text{对所有 } n<0,
$$


则称序列 $x$ 为**因果序列（causal sequence）**。因果序列是右边序列的一种特殊情况。  
类似地，若

$$
x(n)=0 \quad \text{对所有 } n>0,
$$


则称序列 $x$ 为**反因果序列（anticausal sequence）**。反因果序列是左边序列的一种特殊情况。  
需要注意的是，“因果”和“反因果”这两个术语在序列中与现实中的因果关系无关，因此这一术语选择并不算十分恰当。

---

### 8.3.4 有界序列

如果存在某个有限的非负实数常数 $A$，使得

$$
|x(n)| \leq A \quad \text{对所有 } n,
$$


则称序列 $x$ 为**有界序列（bounded sequence）**（即对所有 $n$，$x(n)$ 都是有限值）。  
例如，序列 $x(n)=(-1)^{n}$ 是有界的，因为

$$
\left|(-1)^{n}\right| \leq 1 \quad \text{对所有 } n。
$$


相反，序列 $x(n)=n$ 不是有界的，因为

$$
\lim_{n \to \infty} |n| = \infty。
$$


---

### 8.3.5 信号能量

序列 $x$ 所包含的能量 $E$ 定义为：

$$
E=\sum_{n=-\infty}^{\infty}|x(n)|^{2}
$$


按术语约定，若一个信号 $x$ 的能量有限，则称其为**能量信号（energy signal）**。
### 8.3.6 示例

**例 8.4**  
设序列 $x$ 满足以下性质：

- $v(n)=x(n-3)$ 是因果序列；
- $x$ 是奇序列。

确定在哪些 $n$ 的取值下，$x(n)$ 必为零。  

**解：**  
由于 $v$ 是因果序列，我们有

$$
\begin{aligned}
& v(n)=0 \quad \text{当 } n<0 \\ 
\Rightarrow & x(n-3)=0 \quad \text{当 } n<0 \\ 
\Rightarrow & x(n)=0 \quad \text{当 } n+3<0 \\ 
\Rightarrow & x(n)=0 \quad \text{当 } n<-3
\end{aligned}
$$


由于 $x$ 是奇序列，所以 $x(0)=0$ 且 $x(n)=0$ 对所有 $n>3$ 成立。  
因此，$x(n)=0$ 对所有 $n \notin \{-3,-2,-1,1,2,3\}$ 成立。

---

**例 8.5**  
设序列 $x$ 满足以下性质：

- $x(n)=n+2$，当 $-1 \leq n \leq 1$；
- $v_{1}(n)=x(n-1)$ 是因果序列；
- $v_{2}(n)=x(n+1)$ 是偶序列。

求 $x(n)$ 的完整表达式。  

**解：**  
由于 $v_{1}(n)=x(n-1)$ 是因果序列，我们有

$$
\begin{aligned}
& x(n-1)=0 \quad \text{当 } n<0 \\
\Rightarrow \quad & x([n+1]-1)=0 \quad \text{当 } (n+1)<0 \\
\Rightarrow \quad & x(n)=0 \quad \text{当 } n<-1 .
\end{aligned}
$$


结合 $x(n)=n+2$ 对 $-1 \leq n \leq 1$ 成立，可得

$$
x(n)= 
\begin{cases}
n+2 & -1 \leq n \leq 1  \tag{8.9}\\
0 & n \leq -2
\end{cases}
$$


因此，只需确定 $n \geq 2$ 时的 $x(n)$。  
由于 $v_{2}(n)=x(n+1)$ 是偶序列，我们有

$$
\begin{aligned}
& v_{2}(n)=v_{2}(-n) \\
\Rightarrow & x(n+1)=x(-n+1) \\
\Rightarrow & x([n-1]+1)=x(-[n-1]+1) \\
\Rightarrow & x(n)=x(-n+2) \\
\Rightarrow & x(n)=x(2-n)
\end{aligned}
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-014.jpg?height=398&width=836&top_left_y=302&top_left_x=572){width="400"}
  
图 8.7：例 8.5 的序列 $x$

结合 (8.9)，得到

$$
\begin{aligned}
x(n) & =x(2-n) \\
& = 
\begin{cases}
(2-n)+2 & -1 \leq 2-n \leq 1 \\
0 & 2-n \leq -2
\end{cases} \\
& = 
\begin{cases}
4-n & -3 \leq -n \leq -1 \\
0 & -n \leq -4
\end{cases} \\
& = 
\begin{cases}
4-n & 1 \leq n \leq 3 \\
0 & n \geq 4
\end{cases}
\end{aligned}
$$


因此，最终得到

$$
x(n)=
\begin{cases}
0 & n \leq -2 \\
2+n & n \in \{-1,0\} \\
4-n & n \in \{1,2,3\} \\
0 & n \geq 4
\end{cases}
$$


图 8.7 给出了 $x$ 的图形。
## 8.4 基本序列

在信号与系统的研究中，有若干基本序列特别有用。下面我们介绍一些对我们的目的最有价值的基本序列。

### 8.4.1 实正弦序列

一个重要的序列类别是**实正弦序列**。其形式为

$$
\begin{equation*}
x(n)=A \cos (\Omega n+\theta), \tag{8.10}
\end{equation*}
$$


其中 $A, \Omega, \theta$ 都是实常数。对任意整数 $k$，有

$$
\begin{equation*}
x_{k}(n)=A \cos [(\Omega+2 \pi k) n+\theta] \tag{8.11}
\end{equation*}
$$


与原序列相同（因为 $\cos$ 函数是 $2 \pi$ 周期的）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-015.jpg?height=560&width=1108&top_left_y=294&top_left_x=570){width="400"}
  
图 8.8：实正弦序列示例。

(8.10) 中的实正弦序列 $x$ 当且仅当 $\frac{\Omega}{2 \pi}$ 为有理数时是周期性的。在这种情况下，其基周期为形如 $\frac{2 \pi k}{|\Omega|}$ 的最小整数，其中 $k$ 为正整数。特别地，当 $\Omega=\frac{2 \pi \ell}{m}$ 且 $\ell, m$ 为整数时，可以证明 $x$ 的基周期为

$$
N=\frac{m}{\operatorname{gcd}(\ell, m)}
$$


如果 $\ell$ 和 $m$ 互素（即没有公因子），则有 $N=\frac{m}{\operatorname{gcd}(\ell, m)}=\frac{m}{1}=m$。（证明见习题 8.6。）

图 8.8 给出了一个基周期为 12 的周期性实正弦序列的例子。

在周期性实正弦序列的情形下，其频率常常作为一个带符号的量来处理。换句话说，我们通常采用带符号频率的概念（见第 2.10.2 节的讨论）。假设 (8.10) 给出的实正弦序列 $x$ 是周期的，则 $x$ 的带符号频率为 $\Omega$。在大多数情况下，我们直接称其为“频率”。这通常不会造成混淆，因为从上下文中往往可以明确区分频率是作为带符号还是无符号量来处理的。

与连续时间的对应情况不同，实正弦序列在振荡速率上有上界。这从上式 (8.11) 可以看出：任何频率 $\Omega$ 超出区间 $[0,2 \pi)$ 的正弦序列，都与频率落在该区间内的某个正弦序列相同。而且在 $\Omega \in [0,2 \pi)$ 的范围内，最大的振荡速率对应于 $\pi$，因为 $\pi$ 正好位于 0 和 $2 \pi$ 之间（两者对应最低振荡速率）。当频率从 0 增加时，序列的振荡速率随之增加，直到 $\pi$，然后随频率接近 $2 \pi$ 而再次减小。这一现象会在每个长度为 $2 \pi$ 的区间中周期性重复。更一般地说，实正弦序列在频率为奇数倍 $\pi$（即 $(2k+1)\pi$，$k$ 为整数）时达到最大振荡速率，而在频率为偶数倍 $\pi$（即 $(2k)\pi$，$k$ 为整数）时达到最小振荡速率。图 8.9 展示了频率从 0 增加到 $2 \pi$ 时实正弦序列的变化情况。频率为 0 的序列无振荡（即为常数），而频率为 $\pi$ 的序列振荡最快。

---

**例 8.6（实正弦的基周期）**  
判断下列序列是否为周期序列，若是，则求其基周期。  
(a) $x(n)=\cos (42 n)$；  
(b) $x(n)=\sin \left(\frac{4 \pi}{11} n\right)$。

**解：**  
(a) 由于 $\frac{2 \pi}{42}=\frac{\pi}{21}$ 不是有理数，因此 $x$ 不是周期序列。  

(b) 由于

$$
(2 \pi) /\left(\frac{4 \pi}{11}\right)=(2 \pi)\left(\frac{11}{4 \pi}\right)=\frac{11}{2}
$$


是有理数，因此 $x$ 是周期序列。基周期 $N$ 是形如 $\frac{11}{2}k$ 的最小整数，其中 $k$ 为正整数。由此可得 $N=11$（对应 $k=2$）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-016.jpg?height=1854&width=1590&top_left_y=378&top_left_x=199){width="400"}
  
图 8.9：实正弦序列频率增加的影响。绘制了 $x(n)=\cos (\Omega n)$ 在以下频率下的曲线：  
(a) $\frac{0 \pi}{8}=0$；  
(b) $\frac{1 \pi}{8}=\frac{\pi}{8}$；  
(c) $\frac{2 \pi}{8}=\frac{\pi}{4}$；  
(d) $\frac{4 \pi}{8}=\frac{\pi}{2}$；  
(e) $\frac{8 \pi}{8}=\pi$；  
(f) $\frac{12 \pi}{8}=\frac{3 \pi}{2}$；  
(g) $\frac{14 \pi}{8}=\frac{7 \pi}{4}$；  
(h) $\frac{15 \pi}{8}$；  
(i) $\frac{16 \pi}{8}=2 \pi$。
### 8.4.2 复指数序列

另一类重要的序列是复指数序列。复指数序列是形式为

$$
\begin{equation*}
x(n)=c a^{n} \tag{8.12}
\end{equation*}
$$


的序列，其中 $c$ 和 $a$ 是复常数。这样的序列也可以等价地表示为

$$
x(n)=c e^{b n}
$$


其中 $b$ 是复常数，选取为 $b=\ln a$。（这种形式更类似于复指数函数所呈现的形式）。复指数序列可以表现出多种不同的行为模式，取决于参数 $c$ 和 $a$ 的取值。例如，作为特例，复指数序列包括实指数序列和复正弦序列。接下来，我们将考察复指数序列的一些特例，以及一般情况。

#### 8.4.2.1 实指数序列

复指数序列的第一个特例是实指数序列。在实指数序列的情况下，我们将 (8.12) 中的 $c$ 和 $a$ 限制为实数。实指数序列可以表现出几种不同的行为模式，取决于 $a$ 的大小和符号，如图 8.10 所示。如果 $|a|>1$，随着 $n$ 的增加，$x(n)$ 的幅值呈指数增长（即增长型指数）。如果 $|a|<1$，随着 $n$ 的增加，$x(n)$ 的幅值呈指数衰减（即衰减型指数）。如果 $|a|=1$，$x(n)$ 的幅值保持不变，与 $n$ 无关。如果 $a>0$，则 $x(n)$ 对所有 $n$ 的符号相同。如果 $a<0$，则 $x(n)$ 随着 $n$ 的增加/减少符号交替变化。
#### 8.4.2.2 复正弦序列

复指数序列的第二个特例是复正弦序列。在复正弦序列的情况下，(8.12) 中的参数满足 $c$ 和 $a$ 为复数且 $|a|=1$（即 $a$ 形如 $e^{j \Omega}$，其中 $\Omega$ 为实数）。也就是说，复正弦序列是形式为

$$
\begin{equation*}
x(n)=c e^{j \Omega n} \tag{8.13}
\end{equation*}
$$


的序列，其中 $c$ 为复数，$\Omega$ 为实数。利用欧拉公式，我们可以将 $x(n)$ 重写为

$$
x(n)=\underbrace{|c| \cos (\Omega n+\arg c)}_{\operatorname{Re}\{x(n)\}}+j \underbrace{|c| \sin (\Omega n+\arg c)}_{\operatorname{Im}\{x(n)\}} .
$$


因此，$\operatorname{Re}\{x\}$ 和 $\operatorname{Im}\{x\}$ 是实正弦序列。为了说明复正弦序列的形式，图 8.11 中绘制了某个复正弦序列的实部和虚部。

当且仅当 $\frac{\Omega}{2 \pi}$ 为有理数时，(8.13) 中的复正弦序列 $x$ 是周期的，此时其基本周期是形如 $\frac{2 \pi k}{|\Omega|}$ 的最小正整数，其中 $k$ 是严格正整数。特别地，如果 $\Omega=\frac{2 \pi \ell}{m}$，其中 $\ell$ 和 $m$ 为整数，则 $x$ 的基本周期为

$$
N=\frac{m}{\operatorname{gcd}(\ell, m)}
$$


当 $\ell$ 和 $m$ 互质（即没有公因数）时，$N=\frac{m}{\operatorname{gcd}(\ell, m)}=\frac{m}{1}=m$。（该证明作为练习留给读者，见练习 8.6。）

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-018.jpg?height=1846&width=1627&top_left_y=375&top_left_x=181){width="400"}

图 8.10：实指数序列示例。(a) $|a|>1, a>0\left[a=\frac{5}{4} ; c=1\right]$；(b) $|a|<1, a>0\left[a=\frac{4}{5} ; c=1\right]$；(c) $|a|=1, a>0[a=1 ; c=1]$；(d) $|a|>1, a<0\left[a=-\frac{5}{4} ; c=1\right]$；(e) $|a|<1, a<0\left[a=-\frac{4}{5} ; c=1\right]$；(f) $|a|=1, a<0[a=-1 ; c=1]$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-019.jpg?height=568&width=1547&top_left_y=286&top_left_x=345){width="400"}

图 8.11：复正弦序列 $x(n)=e^{j(2 \pi / 7) n}$ 的示例。(a) 实部，(b) 虚部。

对于周期性复正弦序列，序列的频率通常被视为带符号量。换句话说，我们通常采用带符号频率的概念，如第 2.10.2 节所述。假设复正弦序列 $x$（见 (8.13)）是周期的，则 $x$ 的带符号频率为 $\Omega$。在大多数情况下，我们直接将带符号频率称为“频率”。通常这不会引起混淆，因为通常可以从上下文判断频率是作为带符号量还是无符号量处理。

与连续时间对应物不同，复正弦序列的振荡速率存在上限。这与实正弦序列的情况类似（见前文第 8.4.1 节）。对于频率 $\Omega \in[0,2 \pi)$，复正弦序列的振荡速率在频率为 $\pi$ 时最大，在频率为 0 时最小。当频率 $\Omega$ 从 0 增加到 $\pi$ 时，振荡速率增加；当频率从 $\pi$ 增加到 $2 \pi$ 时，振荡速率减小。

示例 8.7（复正弦序列的基本周期）。判断下列序列 $x$ 是否为周期序列，如果是，求其基本周期。
(a) $x(n)=e^{j 42 n}$；
(b) $x(n)=e^{j(4 \pi / 11) n}$；
(c) $x(n)=e^{j(\pi / 3) n}$。

解：(a) 由于 $\frac{2 \pi}{42}=\frac{\pi}{21}$ 非有理数，$x$ 不是周期序列。
(b) 由于

$$
(2 \pi) /\left(\frac{4 \pi}{11}\right)=(2 \pi)\left(\frac{11}{4 \pi}\right)=\frac{11}{2}
$$


是有理数，$x$ 是周期序列。基本周期 $N$ 是形如 $\frac{11}{2} k$ 的最小正整数，其中 $k$ 是严格正整数。因此 $N=11$（对应 $k=2$）。或者，$x(n)=e^{j(2 \pi[2 / 11]) n}$ 的基本周期 $N$ 为

$$
N=\frac{11}{\operatorname{gcd}(11,2)}=\frac{11}{\operatorname{gcd}\left(11^{1}, 2^{1}\right)}=\frac{11}{1}=11 .
$$


(c) 由于

$$
(2 \pi) /\left(\frac{\pi}{3}\right)=(2 \pi)\left(\frac{3}{\pi}\right)=\frac{6}{1}
$$


是有理数，$x$ 是周期序列。基本周期 $N$ 是形如 $\frac{6}{1} k$ 的最小正整数，其中 $k$ 是严格正整数。因此 $N=6$（对应 $k=1$）。或者，$x(n)=e^{j(\pi / 3) n}=e^{j(2 \pi[1] / 6) n}$ 的基本周期 $N$ 为

$$
N=\frac{6}{\operatorname{gcd}(6,1)}=\frac{6}{\operatorname{gcd}\left(2^{1} \cdot 3^{1}, 1\right)}=\frac{6}{1}=6 .
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-020.jpg?height=930&width=1500&top_left_y=283&top_left_x=243){width="400"}

图 8.12：复指数序列实部和虚部的各种行为模式。(a) $|a|>1$；(b) $|a|<1$；(c) $|a|=1$。
#### 8.4.2.3 一般复指数序列

最后，我们考虑一般复指数序列。也就是说，我们考虑 (8.12) 的一般情况，其中 $c$ 和 $a$ 都为复数。设 $c=|c| e^{j \theta}$，$a=|a| e^{j \Omega}$，其中 $\theta$ 和 $\Omega$ 为实数，利用欧拉公式，可以将 $x(n)$ 重写为

$$
x(n)=\underbrace{|c||a|^{n} \cos (\Omega n+\theta)}_{\operatorname{Re}\{x(n)\}}+j \underbrace{|c||a|^{n} \sin (\Omega n+\theta)}_{\operatorname{Im}\{x(n)\}} .
$$


因此，$\operatorname{Re}\{x\}$ 和 $\operatorname{Im}\{x\}$ 都是实指数和实正弦的乘积。$x$ 会表现出几种不同的行为模式，取决于 $a$ 的取值，如图 8.12 所示。如果 $|a|=1$，$\operatorname{Re}\{x\}$ 和 $\operatorname{Im}\{x\}$ 是实正弦序列。如果 $|a|>1$，$\operatorname{Re}\{x\}$ 和 $\operatorname{Im}\{x\}$ 都是实正弦与增长型实指数的乘积。如果 $|a|<1$，$\operatorname{Re}\{x\}$ 和 $\operatorname{Im}\{x\}$ 都是实正弦与衰减型实指数的乘积。

### 8.4.3 复指数与实正弦之间的关系

根据欧拉公式，复正弦可以表示为两个实正弦的和：

$$
c e^{j \Omega n}=c \cos (\Omega n)+j c \sin (\Omega n) .
$$


此外，实正弦可以通过以下恒等式表示为两个复正弦的和：

$$
\begin{gathered}
c \cos (\Omega n+\theta)=\frac{c}{2}\left[e^{j(\Omega n+\theta)}+e^{-j(\Omega n+\theta)}\right] \quad \text { 和 } \\
c \sin (\Omega n+\theta)=\frac{c}{2 j}\left[e^{j(\Omega n+\theta)}-e^{-j(\Omega n+\theta)}\right]
\end{gathered}
$$


该结果由欧拉公式得出，本质上是对 (A.8) 的重新表述。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-021.jpg?height=225&width=641&top_left_y=297&top_left_x=805){width="400"}

图 8.13：单位阶跃序列。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-021.jpg?height=191&width=987&top_left_y=642&top_left_x=632){width="400"}

图 8.14：矩形序列。

### 8.4.4 单位阶跃序列

另一种在系统理论中经常使用的基本序列是单位阶跃序列。单位阶跃序列记为 $u$，定义为：

$$
u(n)= \begin{cases}1 & n \geq 0 \\ 0 & \text { 否则 }\end{cases}
$$


该序列的图示如图 8.13 所示。
### 8.4.5 单位矩形脉冲

一类常用的序列是单位矩形脉冲。单位矩形脉冲是形式为

$$
p(n)= \begin{cases}1 & a \leq n<b  \tag{8.14}\\ 0 & \text { 否则 },\end{cases}
$$


的序列，其中 $a$ 和 $b$ 是满足 $a<b$ 的整数常数。单位矩形脉冲的图形一般如图 8.14 所示。正如下面的示例 8.8 中形式化展示的，$p$ 可以用单位阶跃序列 $u$ 表示为：

$$
\begin{equation*}
p(n)=u(n-a)-u(n-b) . \tag{8.15}
\end{equation*}
$$


这种表达矩形脉冲序列的方式非常有用。

示例 8.8 证明。证明由 (8.14) 给出的单位矩形脉冲序列 $p$ 可以写成 (8.15) 的形式。

解。回忆单位阶跃序列 $u$ 定义为：

$$
u(n)= \begin{cases}1 & n \geq 0 \\ 0 & \text { 否则 }\end{cases}
$$


根据该定义，可以写成：

$$
u(n-a)=\left\{\begin{array}{ll}
1 & n-a \geq 0  \tag{8.16}\\
0 & \text { 否则 }
\end{array}= \begin{cases}1 & n \geq a \\ 0 & \text { 否则 }\end{cases}\right.
$$


同理，可以写成：

$$
u(n-b)=\left\{\begin{array}{ll}
1 & n-b \geq 0  \tag{8.17}\\
0 & \text { 否则 }
\end{array}= \begin{cases}1 & n \geq b \\ 0 & \text { 否则 }\end{cases}\right.
$$


由 (8.16) 和 (8.17)，我们得到：

$$
\begin{aligned}
u(n-a)-u(n-b) & = \begin{cases}0-0 & n<a \\ 1-0 & a \leq n<b \\ 1-1 & n \geq b\end{cases} \\
& = \begin{cases}0 & n<a \\ 1 & a \leq n<b \\ 0 & n \geq b\end{cases} \\
& = \begin{cases}1 & a \leq n<b \\ 0 & \text { 否则 }\end{cases} \\
& =p(n)
\end{aligned}
$$


因此，我们证明了：

$$
p(n)=u(n-a)-u(n-b) .
$$


### 8.4.6 单位冲激序列

在系统理论中，一个具有基本重要性的基础序列是单位冲激序列。单位冲激序列（也称为 delta 序列），记作 $\delta$，定义为

$$
\delta(n)= \begin{cases}1 & n=0  \tag{8.18}\\ 0 & \text { 否则 }\end{cases}
$$


（注意，单位冲激序列与单位冲激函数是完全不同的概念。）$u$ 的一阶差分是 $\delta$。即，

$$
\delta(n)=u(n)-u(n-1)
$$


$\delta$ 的累积（即逐步求和）是 $u$。即，

$$
u(n)=\sum_{k=-\infty}^{n} \delta(k)
$$


$\delta$ 的图像如图 8.15 所示。  
单位冲激序列具有两个由其在 (8.18) 中定义直接推导出的重要性质。这些性质由下列定理给出。

**定理 8.4（等价性质）** 对于任意序列 $x$ 和任意整数常数 $n_{0}$，下列恒等式成立：

$$
\begin{equation*}
x(n) \delta\left(n-n_{0}\right)=x\left(n_{0}\right) \delta\left(n-n_{0}\right) . \tag{8.19}
\end{equation*}
$$


证明：证明基本上直接来自于单位冲激序列仅在单点非零这一事实。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-023.jpg?height=239&width=649&top_left_y=291&top_left_x=802){width="400"}
  
图 8.15：单位冲激序列。

**定理 8.5（筛选性质）** 对于任意序列 $x$ 和任意整数常数 $n_{0}$，下列恒等式成立：

$$
\sum_{n=-\infty}^{\infty} x(n) \delta\left(n-n_{0}\right)=x\left(n_{0}\right)
$$


证明：由 delta 序列的定义可得

$$
\sum_{n=-\infty}^{\infty} \delta(n)=1
$$


这意味着，对于任意整数常数 $n_{0}$，

$$
\sum_{n=-\infty}^{\infty} \delta\left(n-n_{0}\right)=1
$$


将等式两边同时乘以 $x\left(n_{0}\right)$，得到

$$
\sum_{n=-\infty}^{\infty} x\left(n_{0}\right) \delta\left(n-n_{0}\right)=x\left(n_{0}\right) .
$$


然后，利用 (8.19) 中的等价性质，我们有

$$
\sum_{n=-\infty}^{\infty} x(n) \delta\left(n-n_{0}\right)=x\left(n_{0}\right)
$$


显然，序列 $\delta$ 也是偶序列。

**例 8.9** 计算下列求和：

$$
\sum_{n=-\infty}^{\infty} \sin \left(\frac{\pi}{2} n\right) \delta(n-1)
$$


解：利用单位冲激序列的筛选性质，我们有

$$
\begin{aligned}
\sum_{n=-\infty}^{\infty} \sin \left(\frac{\pi}{2} n\right) \delta(n-1) & =\left.\sin \left(\frac{\pi}{2} n\right)\right|_{n=1} \\
& =\sin \left(\frac{\pi}{2}\right) \\
& =1
\end{aligned}
$$


## 8.5 使用基础序列表示任意序列

在前面的章节中，我们介绍了若干基础序列。在信号分析中，通常将任意序列用基础序列表示会比较方便。在此，我们讨论如何利用单位阶跃序列来获得序列的替代表示。

**例 8.10** 考虑分段线性序列 $x$，其定义为

$$
x(n)= \begin{cases}n+7 & -6 \leq n \leq-4 \\ 4 & -3 \leq n \leq 2 \\ 6-n & 3 \leq n \leq 5 \\ 0 & \text { 否则 }\end{cases}
$$


求一个适用于所有 $n$ 的 $x(n)$ 单表达式（包含单位阶跃序列）。

解：$x$ 的图像如图 8.16(a) 所示。我们分别考虑分段线性序列的每一段。第一段（即对于 $n$ 的取值）可以表示为

$$
v_{1}(n)=(n+7)[u(n+6)-u(n+3)]
$$


该序列的图像见图 8.16(b)。第二段（即对于 $n$ 的取值）可以表示为

$$
v_{2}(n)=4[u(n+3)-u(n-3)] .
$$


该序列的图像见图 8.16(c)。第三段（即对于 $n$ 的取值）可以表示为

$$
v_{3}(n)=(6-n)[u(n-3)-u(n-6)] .
$$


该序列的图像见图 8.16(d)。现在我们可以看到 $x=v_{1}+v_{2}+v_{3}$。即，我们得到

$$
\begin{aligned}
x(n) & =v_{1}(n)+v_{2}(n)+v_{3}(n) \\
& =(n+7)[u(n+6)-u(n+3)]+4[u(n+3)-u(n-3)]+(6-n)[u(n-3)-u(n-6)] \\
& =(n+7) u(n+6)-(n+7) u(n+3)+4 u(n+3)-4 u(n-3)+(6-n) u(n-3)-(6-n) u(n-6) \\
& =(n+7) u(n+6)+(-n-3) u(n+3)+(2-n) u(n-3)+(n-6) u(n-6)
\end{aligned}
$$


因此，我们得到了一个适用于所有 $n$ 的 $x(n)$ 单表达式。

## 8.6 离散时间系统

假设我们有一个输入为 $x$、输出为 $y$ 的系统。这样的系统可以用以下数学方程描述：

$$
\begin{equation*}
y=\mathcal{H} x \tag{8.20}
\end{equation*}
$$


其中 $\mathcal{H}$ 表示一个算子（即变换）。算子 $\mathcal{H}$ 简单地将输入序列 $x$ 映射为输出序列 $y$。例如，该算子可能与一个差分方程系统相关。

另外，我们有时使用下列符号表示关系 (8.20)：

$$
x \xrightarrow{\mathcal{H}} y .
$$


此外，如果上下文清楚，算子 $\mathcal{H}$ 常常省略，得到简化记法：

$$
x \rightarrow y .
$$


注意，符号 " $\rightarrow$ " 与 " $=$ " 含义完全不同。例如，记法 $x \rightarrow y$ 并不意味着 $x=y$。符号 " $\rightarrow$ " 应读作“产生”（而非“等于”）。即，“ $x \rightarrow y$ ”应读作“输入 $x$ 产生输出 $y$ ”。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-025.jpg?height=1768&width=1281&top_left_y=310&top_left_x=478){width="400"}
  
图 8.16：使用单位阶跃序列表示分段线性序列。(a) 序列 $x$。(b)、(c) 和 (d) 三个序列，其和为 $x$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-025.jpg?height=139&width=415&top_left_y=2242&top_left_x=915){width="400"}
  
图 8.17：系统的方框图。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-026.jpg?height=282&width=1241&top_left_y=286&top_left_x=367){width="400"}
  
图 8.18：系统的互联。(a) 系统 $\mathcal{H}_{1}$ 与 $\mathcal{H}_{2}$ 的串联互联。(b) 系统 $\mathcal{H}_{1}$ 与 $\mathcal{H}_{2}$ 的并联互联。

### 8.6.1 方框图表示

假设我们有一个由算子 $\mathcal{H}$ 定义的系统，输入为 $x$，输出为 $y$。通常，我们用方框图表示该系统，如图 8.17 所示。
### 8.6.2 系统的互联

系统可以通过多种方式互联。两种基本的连接类型如图 8.18 所示。第一种连接类型，如图 8.18(a) 所示，称为串联或级联连接。在这种情况下，总系统由下式定义：

$$
\begin{equation*}
y=\mathcal{H}_{2} \mathcal{H}_{1} x . \tag{8.21}
\end{equation*}
$$


第二种连接类型，如图 8.18(b) 所示，称为并联连接。在这种情况下，总系统由下式定义：

$$
\begin{equation*}
y=\mathcal{H}_{1} x+\mathcal{H}_{2} x . \tag{8.22}
\end{equation*}
$$


除非已知算子 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的具体定义，否则方程 (8.21) 和 (8.22) 不能进一步简化。

## 8.7 系统的性质

接下来，我们将定义系统可能具备的一些重要性质。这些性质对于对系统进行分类以及描述系统行为非常有用。

### 8.7.1 存储特性

如果一个系统 $\mathcal{H}$ 对于每个整数 $n_{0}$，$\mathcal{H} x\left(n_{0}\right)$ 不依赖于 $x(n)$（$n \neq n_{0}$ 的情况），则称该系统为无存储（memoryless）系统。换句话说，无存储系统的输出在任意给定时间点的值只依赖于输入在同一时间点的值。非无存储系统称为具有存储特性。虽然无存储系统结构简单，但其灵活性较低，因为其当前输出值无法依赖于输入的过去或未来值。

**例 8.11（理想放大器）** 判断系统 $\mathcal{H}$ 是否为无存储系统，其中

$$
\mathcal{H} x(n)=A x(n)
$$


且 $A$ 为非零实常数。  

解：考虑在任意点 $n=n_{0}$ 计算 $\mathcal{H} x(n)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=A x\left(n_{0}\right) .
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 仅依赖于 $n=n_{0}$ 时的 $x(n)$。所以，该系统是无存储系统。

**例 8.12（理想累加器）** 判断系统 $\mathcal{H}$ 是否为无存储系统，其中

$$
\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(k)
$$


解：考虑在任意点 $n=n_{0}$ 计算 $\mathcal{H} x(n)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=\sum_{k=-\infty}^{n_{0}} x(k)
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 依赖于 $-\infty<n \leq n_{0}$ 的 $x(n)$。所以，$\mathcal{H} x\left(n_{0}\right)$ 依赖于某些 $n \neq n_{0}$（例如 $n_{0}-1$）的 $x(n)$。因此，该系统具有存储特性（即非无存储系统）。

**例 8.13** 判断系统 $\mathcal{H}$ 是否为无存储系统，其中

$$
\mathcal{H} x(n)=e^{x(n)}
$$


解：考虑在任意点 $n=n_{0}$ 计算 $\mathcal{H} x(n)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=e^{x\left(n_{0}\right)}
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 仅依赖于 $n=n_{0}$ 时的 $x(n)$。所以，该系统是无存储系统。

**例 8.14** 判断系统 $\mathcal{H}$ 是否为无存储系统，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)] .
$$


解：对于任意 $x$ 和任意整数 $n_{0}$，我们有 $\mathcal{H} x\left(n_{0}\right)$ 依赖于 $n=n_{0}$ 和 $n=-n_{0}$ 的 $x(n)$。由于 $\mathcal{H} x\left(n_{0}\right)$ 依赖于 $n \neq n_{0}$ 的 $x(n)$，因此该系统具有存储特性（即非无存储系统）。
### 8.7.2 因果性

如果对于每个整数 $n_{0}$，$\mathcal{H} x\left(n_{0}\right)$ 不依赖于 $n>n_{0}$ 时的 $x(n)$，则称系统 $\mathcal{H}$ 为因果系统。换句话说，因果系统的输出在任意给定时间点的值只依赖于输入在同一或更早时间点的值（即不依赖于未来时间点的值）。无存储系统总是因果系统，但反之不一定成立。

如果自变量表示时间，为了物理可实现性，系统必须是因果的。然而在实践中，非因果系统有时也是有用的，因为自变量不一定总是表示时间。

**例 8.15（理想累加器）** 判断系统 $\mathcal{H}$ 是否为因果系统，其中

$$
\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(n)
$$


解：考虑在任意 $n_{0}$ 处计算 $\mathcal{H} x\left(n_{0}\right)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=\sum_{k=-\infty}^{n_{0}} x(n)
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 仅依赖于 $-\infty<n \leq n_{0}$ 的 $x(n)$。由于该区间内的所有值均小于或等于 $n_{0}$，系统是因果的。

**例 8.16** 判断系统 $\mathcal{H}$ 是否为因果系统，其中

$$
\mathcal{H} x(n)=\sum_{k=n-1}^{n+1} x(k)
$$


解：考虑在任意 $n_{0}$ 处计算 $\mathcal{H} x\left(n_{0}\right)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=\sum_{k=n_{0}-1}^{n_{0}+1} x(k) .
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 依赖于 $n_{0}-1 \leq n \leq n_{0}+1$ 的 $x(n)$。由于该区间中至少有一个值大于 $n_{0}$（即 $n_{0}+1$），系统不是因果的。

**例 8.17** 判断系统 $\mathcal{H}$ 是否为因果系统，其中

$$
\mathcal{H} x(n)=(n+1) e^{x(n-1)}
$$


解：考虑在任意 $n_{0}$ 处计算 $\mathcal{H} x\left(n_{0}\right)$，我们有

$$
\mathcal{H} x\left(n_{0}\right)=\left(n_{0}+1\right) e^{x\left(n_{0}-1\right)} .
$$


因此，$\mathcal{H} x\left(n_{0}\right)$ 仅依赖于 $n=n_{0}-1$ 的 $x(n)$。由于 $n_{0}-1 \leq n_{0}$，系统是因果的。

**例 8.18** 判断系统 $\mathcal{H}$ 是否为因果系统，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)] .
$$


解：对于任意 $x$ 和任意整数常数 $n_{0}$，我们有 $\mathcal{H} x\left(n_{0}\right)$ 仅依赖于 $n=n_{0}$ 和 $n=-n_{0}$ 的 $x(n)$。假设 $n_{0}=-1$，此时 $\mathcal{H} x\left(n_{0}\right)$（即 $\mathcal{H} x(-1)$）依赖于 $n=1$ 的 $x(n)$，而 $1>n_{0}$。因此，该系统不是因果的。
### 8.7.3 可逆性

一个系统 $\mathcal{H}$ 的逆系统（如果存在）是一个系统 $\mathcal{G}$，使得对于每个序列 $x$，

$$
\mathcal{G} \mathcal{H} x=x
$$


（即，由 $\mathcal{H}$ 串联 $\mathcal{G}$ 构成的系统，其输入与输出相等）。在符号上，$\mathcal{H}$ 的逆记作 $\mathcal{H}^{-1}$。系统与其逆系统的关系如图 8.19 所示。图中的两个系统必须是等价的，因为 $\mathcal{H}$ 与 $\mathcal{H}^{-1}$ 之间的关系（即 $\mathcal{H}^{-1}$ 抵消 $\mathcal{H}$）。

如果一个系统有对应的逆系统（即其逆存在），则称该系统为可逆系统。可逆系统必须满足其输入 $x$ 可以从输出 $\mathcal{H} x$ 唯一确定。由此可知，可逆系统对于任意两个不同的输入，总会产生不同的输出。

为了证明一个系统是可逆的，我们只需找到其逆系统。若要证明系统不可逆，只需找到两个不同的输入导致相同输出即可。在实际应用中，可逆系统的优势在于其作用可以被撤销。

![](https://cdn.mathpix.com/snip/images/YBKG1240FWl2A2MUKyDVcxzmVvCu09YL4Iji_9-n8Tw.original.fullsize.png){width="400"}


图 8.19：等价系统（假设 $\mathcal{H}^{-1}$ 存在）。(a) 第一个系统，(b) 第二个系统。

**例 8.19** 判断系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(n)=x\left(n-n_{0}\right)
$$


且 $n_{0}$ 为整数常数。  

解：设 $y=\mathcal{H} x$，将 $n+n_{0}$ 代入 $y(n)=x\left(n-n_{0}\right)$，得到

$$
\begin{aligned}
y\left(n+n_{0}\right) & =x\left(n+n_{0}-n_{0}\right) \\
& =x(n) .
\end{aligned}
$$


因此，我们得到

$$
x(n)=y\left(n+n_{0}\right) .
$$


这正是逆系统 $\mathcal{H}^{-1}$ 的表达式。特别地，

$$
x(n)=\mathcal{H}^{-1} y(n)
$$


其中

$$
\mathcal{H}^{-1} y(n)=y\left(n+n_{0}\right) .
$$


因此，我们找到了 $\mathcal{H}^{-1}$，系统可逆。

**例 8.20（理想平方器）** 判断系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(n)=x^{2}(n) .
$$


解：考虑序列 $x_{1}(n)=-1$ 和 $x_{2}(n)=1$，有

$$
\mathcal{H} x_{1}(n)=1 \quad \text { 和 } \quad \mathcal{H} x_{2}(n)=1 .
$$


因此，两个不同的输入产生相同输出，系统不可逆。

**例 8.21** 判断系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(n)=\frac{e^{x(n)}}{n^{2}+1} .
$$


解：设 $y=\mathcal{H} x$，尝试将 $x$ 用 $y$ 表示，得到

$$
\begin{aligned}
& y(n)=\frac{e^{x(n)}}{n^{2}+1} \\
\Rightarrow & \left(n^{2}+1\right) y(n)=e^{x(n)} \\
\Rightarrow & \ln \left[\left(n^{2}+1\right) y(n)\right]=x(n) .
\end{aligned}
$$


因此，

$$
x(n)=\ln \left[\left(n^{2}+1\right) y(n)\right] .
$$


这正是逆系统 $\mathcal{H}^{-1}$ 的表达式。特别地，

$$
x(n)=\mathcal{H}^{-1} y(n)
$$


其中

$$
\mathcal{H}^{-1} y(n)=\ln \left[\left(n^{2}+1\right) y(n)\right]
$$


因此系统可逆。

**例 8.22** 判断系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)]
$$


解：考虑系统对输入 $x$ 的响应，其中

$$
x(n)=\alpha
$$


且 $\alpha$ 为实常数。则有

$$
\begin{aligned}
\mathcal{H} x(n) & =\frac{1}{2}[x(n)-x(-n)] \\
& =\frac{1}{2}(\alpha-\alpha) \\
& =0
\end{aligned}
$$


因此，任何常数输入都会得到相同的零输出，这意味着不同的输入可能产生相同输出，系统不可逆。

### 8.7.4 BIBO 稳定性

尽管稳定性可以用多种方式定义，但在系统理论中，我们通常最关心有界输入-有界输出（BIBO）稳定性。

如果对于每个有界序列 $x$，$\mathcal{H} x$ 也有界（即 $|x(n)|<\infty$ 对所有 $n$ 成立时，$|\mathcal{H} x(n)|<\infty$ 对所有 $n$ 也成立），则称系统 $\mathcal{H}$ 为 BIBO 稳定。换句话说，BIBO 稳定系统保证只要输入有界，输出总是有界的。

为了证明系统是 BIBO 稳定的，我们必须证明每个有界输入都会导致有界输出。若要证明系统不是 BIBO 稳定，只需找到一个反例（即一个有界输入导致输出无界）。在证明系统 BIBO 稳定时，三角不等式（F.16）通常很有用。

在实际应用中，BIBO 稳定系统表现良好，只要系统输入在所有时间点都是有限的，输出在所有时间点也将保持有限。不具 BIBO 稳定性的系统通常存在严重的安全隐患。例如，一个便携式音乐播放器的电池输入为 3.7 伏，但耳机输出为 $\infty$ 伏，这可能导致人员受伤（并且很可能引发巨额诉讼）。

**例 8.23（理想平方器）** 判断系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(n)=x^{2}(n) .
$$


解：假设输入 $x$ 有界，对于所有 $n$，

$$
|x(n)| \leq A,
$$


其中 $A$ 为有限实常数。两边平方得到

$$
|x(n)|^{2} \leq A^{2} .
$$


交换平方与绝对值的顺序，得到

$$
\left|x^{2}(n)\right| \leq A^{2} .
$$


由 $\mathcal{H} x(n)=x^{2}(n)$，可得

$$
|\mathcal{H} x(n)| \leq A^{2} .
$$


由于 $A$ 有限，$A^{2}$ 也有限，因此 $\mathcal{H} x$ 有界（即 $|\mathcal{H} x(n)| \leq A^{2}<\infty$ 对所有 $n$ 成立）。因此，该系统 BIBO 稳定。

**例 8.24（理想累加器）** 判断系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(k)
$$


解：假设输入 $x(n)=1$，显然 $x$ 有界（即 $|x(n)| \leq 1$ 对所有 $n$ 成立）。则输出为

$$
\begin{aligned}
\mathcal{H} x(n) & =\sum_{k=-\infty}^{n} x(k) \\
& =\sum_{k=-\infty}^{n} 1 \\
& =\infty
\end{aligned}
$$


因此，对于有界输入 $x$，输出 $\mathcal{H} x$ 无界，系统不 BIBO 稳定。

**例 8.25** 判断系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)] .
$$


解：假设 $x$ 有界，则 $x(-n)$ 也有界。由于两个有界序列的差有界，$x(n)-x(-n)$ 有界。将有界序列乘以有限常数仍然有界。因此，$\frac{1}{2}[x(n)-x(-n)]$ 有界，$\mathcal{H} x$ 有界。由于有界输入必然产生有界输出，系统 BIBO 稳定。

**例 8.26** 判断系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(n)=\frac{x(n)}{x^{2}(n)-4}
$$


解：考虑输入 $x(n)=2$，显然 $x$ 有界（即 $|x(n)| \leq 2$ 对所有 $n$ 成立）。则输出为

$$
\begin{aligned}
\mathcal{H} x(n) & =\frac{2}{2^{2}-4}=\frac{2}{0} \\
& =\infty
\end{aligned}
$$


因此，对于有界输入 $x$，输出 $\mathcal{H} x$ 无界，系统不 BIBO 稳定。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-032.jpg?height=214&width=1085&top_left_y=289&top_left_x=453){width="400"}
  
图 8.20：如果 $\mathcal{H}$ 是时间不变的（即 $\mathcal{H}$ 与 $\mathcal{S}_{n_{0}}$ 可交换），则系统等价。(a) 先时间平移 $n_{0}$ 再应用 $\mathcal{H}$（即 $y=\mathcal{H} \mathcal{S}_{n_{0}} x$）；(b) 先应用 $\mathcal{H}$ 再时间平移 $n_{0}$（即 $y=\mathcal{S}_{n_{0}} \mathcal{H}(x)$）。
### 8.7.5 时间不变性

如果对于每个序列 $x$ 和每个整数 $n_{0}$，以下条件成立：

$$
\mathcal{H} x\left(n-n_{0}\right)=\mathcal{H} x^{\prime}(n) \text { 对所有 } n \text { 成立，其中 } x^{\prime}(n)=x\left(n-n_{0}\right)
$$


则称系统 $\mathcal{H}$ 为时间不变（TI）（或平移不变（SI））（即 $\mathcal{H}$ 与时间平移可交换）。换句话说，如果输入序列发生时间平移（提前或延迟），输出序列也会发生相同的时间平移，则系统为时间不变。非时间不变系统称为时间变化系统。实际上，时间不变性意味着图 8.20 所示的两个系统是等价的，其中 $\delta_{n_{0}}$ 表示对序列进行 $n_{0}$ 时间平移的操作（即 $\delta_{n_{0}} x(n)=x\left(n-n_{0}\right)$）。

简单来说，时间不变系统的行为不会随时间变化。从实际角度来看，与时间变化系统相比，时间不变系统更易设计和分析，因为其行为随时间保持不变。

**例 8.27** 判断系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(n)=\sin [x(n)] .
$$


解：设 $x^{\prime}(n)=x\left(n-n_{0}\right)$，$n_{0}$ 为任意整数常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x\left(n-n_0\right) & =\sin \left[x\left(n-n_0\right)\right] \\
\mathcal{H} x^{\prime}(n) & =\sin \left[x^{\prime}(n)\right] \\
& =\sin \left[x\left(n-n_0\right)\right] .
\end{aligned}
$$

由于对所有 $x$ 和 $n_{0}$ 成立，系统为时间不变。

**例 8.28** 判断系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(n)=n x(n) .
$$


解：设 $x^{\prime}(n)=x\left(n-n_{0}\right)$，$n_{0}$ 为任意整数常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x\left(n-n_0\right) & =\left(n-n_0\right) x\left(n-n_0\right) \\
\mathcal{H} x^{\prime}(n) & =n x^{\prime}(n) \\
& =n x\left(n-n_0\right)
\end{aligned}
$$

由于 $\mathcal{H} x\left(n-n_{0}\right)=\mathcal{H} x^{\prime}(n)$ 对所有 $x$ 和 $n_{0}$ 不成立，系统不是时间不变（即系统为时间变化）。$\square$

**例 8.29** 判断系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(n)=\sum_{k=-10}^{10} k x(n-k)
$$


解：设 $x^{\prime}(n)=x\left(n-n_{0}\right)$，$n_{0}$ 为任意整数常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x\left(n-n_0\right) & =\sum_{k=-10}^{10} k x\left(n-n_0-k\right) \\
\mathcal{H} x^{\prime}(n) & =\sum_{k=-10}^{10} k x^{\prime}(n-k) \\
& =\sum_{k=-10}^{10} k x\left(n-k-n_0\right) \\
& =\sum_{k=-10}^{10} k x\left(n-n_0-k\right)
\end{aligned}
$$

由于 $\mathcal{H} x\left(n-n_{0}\right)=\mathcal{H} x^{\prime}(n)$ 对所有 $x$ 和 $n_{0}$ 成立，系统是时间不变。

**例 8.30** 判断系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)] .
$$


解：设 $x^{\prime}(n)=x\left(n-n_{0}\right)$，$n_{0}$ 为任意整数常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x\left(n-n_0\right) & =\frac{1}{2}\left[x\left(n-n_0\right)-x\left(-\left(n-n_0\right)\right)\right] \\
& =\frac{1}{2}\left[x\left(n-n_0\right)-x\left(-n+n_0\right)\right] \\
\mathcal{H} x^{\prime}(n) & =\frac{1}{2}\left[x^{\prime}(n)-x^{\prime}(-n)\right] \\
& =\frac{1}{2}\left[x\left(n-n_0\right)-x\left(-n-n_0\right)\right] .
\end{aligned}
$$

由于 $\mathcal{H} x\left(n-n_{0}\right)=\mathcal{H} x^{\prime}(n)$ 对所有 $x$ 和 $n_{0}$ 不成立，系统不是时间不变。

### 8.7.6 线性

在数学运算中，最常见且经常出现的两种运算是加法和标量乘法。因此，了解这些运算是否与给定系统执行的运算可交换通常非常有用。接下来介绍的系统性质正是与这一特定问题相关的。

如果对于所有序列 $x_{1}$ 和 $x_{2}$，下列条件成立，则称系统 $\mathcal{H}$ 是可加的：

$$
\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}
$$


（即 $\mathcal{H}$ 与加法可交换）。本质上，系统 $\mathcal{H}$ 的可加性意味着图 8.21 中显示的两个系统是等效的。

如果对于每个序列 $x$ 和每个复常数 $a$，下列条件成立，则称系统 $\mathcal{H}$ 是齐次的：

$$
\mathcal{H}(a x)=a \mathcal{H} x
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-034.jpg?height=290&width=1184&top_left_y=289&top_left_x=413){width="400"}

图 8.21：如果 $\mathcal{H}$ 是可加的（即 $\mathcal{H}$ 与加法可交换），则系统等效的示意图。(a) 先执行加法再应用 $\mathcal{H}$ 的系统（即 $y=\mathcal{H}\left(x_{1}+x_{2}\right)$）；(b) 先应用 $\mathcal{H}$ 再执行加法的系统（即 $y=\mathcal{H} x_{1}+\mathcal{H} x_{2}$）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-034.jpg?height=214&width=1214&top_left_y=767&top_left_x=389){width="400"}

图 8.22：如果 $\mathcal{H}$ 是齐次的（即 $\mathcal{H}$ 与标量乘法可交换），则系统等效的示意图。(a) 先执行标量乘法再应用 $\mathcal{H}$ 的系统（即 $y=\mathcal{H}(a x)$）；(b) 先应用 $\mathcal{H}$ 再执行标量乘法的系统（即 $y=a \mathcal{H} x$）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-034.jpg?height=306&width=1449&top_left_y=1156&top_left_x=264){width="400"}

图 8.23：如果 $\mathcal{H}$ 是线性的（即 $\mathcal{H}$ 与线性组合可交换），则系统等效的示意图。(a) 先计算线性组合再应用 $\mathcal{H}$ 的系统（即 $y=\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)$）；(b) 先应用 $\mathcal{H}$ 再计算线性组合的系统（即 $y=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$）。

（即 $\mathcal{H}$ 与标量乘法可交换）。本质上，系统 $\mathcal{H}$ 的齐次性意味着图 8.22 中显示的两个系统是等效的。

可加性和齐次性可以结合成一个单一性质，称为叠加原理。具体来说，如果对于所有序列 $x_{1}$ 和 $x_{2}$ 以及所有复常数 $a_{1}$ 和 $a_{2}$，下列条件成立，则称系统 $\mathcal{H}$ 具有叠加性质：

$$
\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}
$$


（即 $\mathcal{H}$ 与线性组合可交换）。同时具有可加性和齐次性的系统（或等价地满足叠加性质的系统）称为线性系统。本质上，系统 $\mathcal{H}$ 的线性意味着图 8.23 中显示的两个系统是等效的。为了证明一个系统是线性的，我们可以证明它同时具有可加性和齐次性，或者直接证明其满足叠加性质。从实际角度来看，线性系统比非线性系统更容易设计和分析。


---
例 8.31 确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(n)=n x(n)。
$$


解：设 $x^{\prime}(n)=a_{1} x_{1}(n)+a_{2} x_{2}(n)$，其中 $x_{1}$ 和 $x_{2}$ 是任意序列，$a_{1}$ 和 $a_{2}$ 是任意复常数。根据 $\mathcal{H}$ 的定义，可以写出：

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(n)+a_{2} \mathcal{H} x_{2}(n) & =a_{1} n x_{1}(n)+a_{2} n x_{2}(n), \quad \text{并且} \\
\mathcal{H} x^{\prime}(n) & =n x^{\prime}(n) \\
& =n\left[a_{1} x_{1}(n)+a_{2} x_{2}(n)\right] \\
& =a_{1} n x_{1}(n)+a_{2} n x_{2}(n)
\end{aligned}
$$


由于对所有 $x_{1}, x_{2}, a_{1}$ 和 $a_{2}$ 都有 $\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$，因此叠加性质成立，该系统是线性的。

例 8.32 确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(n)=|x(n)|。
$$


解：设 $x^{\prime}(n)=a_{1} x_{1}(n)+a_{2} x_{2}(n)$，其中 $x_{1}$ 和 $x_{2}$ 是任意序列，$a_{1}$ 和 $a_{2}$ 是任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(n)+a_{2} \mathcal{H} x_{2}(n) & =a_{1}\left|x_{1}(n)\right|+a_{2}\left|x_{2}(n)\right|, \quad \text{并且} \\
\mathcal{H} x^{\prime}(n) & =\left|x^{\prime}(n)\right| \\
& =\left|a_{1} x_{1}(n)+a_{2} x_{2}(n)\right|
\end{aligned}
$$


此时，我们回忆三角不等式 (F.16)。因此，由于三角不等式的原因，$\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 并不对所有 $x_{1}$、$x_{2}$、$a_{1}$ 和 $a_{2}$ 成立。例如，对于

$$
a_{1}=-1, \quad x_{1}(n)=1, \quad a_{2}=0, \quad x_{2}(n)=0
$$


该条件不成立，此时

$$
a_{1} \mathcal{H} x_{1}(n)+a_{2} \mathcal{H} x_{2}(n)=-1, \quad \text{而} \quad \mathcal{H} x^{\prime}(n)=1。
$$


因此，叠加性质不成立，该系统不是线性的。

例 8.33 确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(n)=\operatorname{Odd}\{x\}(n)=\frac{1}{2}[x(n)-x(-n)]。
$$


解：设 $x^{\prime}(n)=a_{1} x_{1}(n)+a_{2} x_{2}(n)$，其中 $x_{1}$ 和 $x_{2}$ 是任意序列，$a_{1}$ 和 $a_{2}$ 是任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(n)+a_{2} \mathcal{H} x_{2}(n) & =\frac{1}{2} a_{1}\left[x_{1}(n)-x_{1}(-n)\right]+\frac{1}{2} a_{2}\left[x_{2}(n)-x_{2}(-n)\right], \quad \text{并且} \\
\mathcal{H} x^{\prime}(n) & =\frac{1}{2}\left[x^{\prime}(n)-x^{\prime}(-n)\right] \\
& =\frac{1}{2}\left[a_{1} x_{1}(n)+a_{2} x_{2}(n)-\left(a_{1} x_{1}(-n)+a_{2} x_{2}(-n)\right)\right] \\
& =\frac{1}{2}\left[a_{1} x_{1}(n)-a_{1} x_{1}(-n)+a_{2} x_{2}(n)-a_{2} x_{2}(-n)\right] \\
& =\frac{1}{2} a_{1}\left[x_{1}(n)-x_{1}(-n)\right]+\frac{1}{2} a_{2}\left[x_{2}(n)-x_{2}(-n)\right]
\end{aligned}
$$


由于对所有 $x_{1}, x_{2}, a_{1}$ 和 $a_{2}$ 都有 $\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$，因此该系统是线性的。

例 8.34 确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(n)=x(n) x(n-1)。
$$


解：设 $x^{\prime}(n)=a_{1} x_{1}(n)+a_{2} x_{2}(n)$，其中 $x_{1}$ 和 $x_{2}$ 是任意序列，$a_{1}$ 和 $a_{2}$ 是任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(n)+a_{2} \mathcal{H} x_{2}(n) & =a_{1} x_{1}(n) x_{1}(n-1)+a_{2} x_{2}(n) x_{2}(n-1), \quad \text{并且} \\
\mathcal{H} x^{\prime}(n) & =x^{\prime}(n) x^{\prime}(n-1) \\
& =\left[a_{1} x_{1}(n)+a_{2} x_{2}(n)\right]\left[a_{1} x_{1}(n-1)+a_{2} x_{2}(n-1)\right] \\
& =a_{1}^{2} x_{1}(n) x_{1}(n-1)+a_{1} a_{2} x_{1}(n) x_{2}(n-1)+a_{1} a_{2} x_{1}(n-1) x_{2}(n)+a_{2}^{2} x_{2}(n) x_{2}(n-1)
\end{aligned}
$$


显然，$\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)$ 与 $a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 的表达式差异很大。因此，对于许多 $a_{1}, a_{2}, x_{1}$ 和 $x_{2}$ 的取值（例如 $a_{1}=2, a_{2}=0, x_{1}(n)=1, x_{2}(n)=0$），这两个表达式不相等。因此，叠加性质不成立，该系统不是线性的。

例 8.35（理想累加器） 系统 $\mathcal{H}$ 由下式定义：

$$
\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(k)
$$


确定该系统是否具有可加性和/或齐次性，并判断该系统是否线性。

解：首先，考虑可加性。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x_{1}(n)+\mathcal{H} x_{2}(n) & =\sum_{k=-\infty}^{n} x_{1}(k)+\sum_{k=-\infty}^{n} x_{2}(k), \quad \text{并且} \\
\mathcal{H}\left\{x_{1}+x_{2}\right\}(n) & =\sum_{k=-\infty}^{n}\left[x_{1}(k)+x_{2}(k)\right] \\
& =\sum_{k=-\infty}^{n} x_{1}(k)+\sum_{k=-\infty}^{n} x_{2}(k)
\end{aligned}
$$


由于对所有 $x_{1}$ 和 $x_{2}$ 都有 $\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}$，该系统是可加的。

其次，考虑齐次性。设 $a$ 为任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a \mathcal{H}(x(n)) & =a \sum_{k=-\infty}^{n} x(k), \quad \text{并且} \\
\mathcal{H}\{a x\}(n) & =\sum_{k=-\infty}^{n} a x(k) \\
& =a \sum_{k=-\infty}^{n} x(k)
\end{aligned}
$$


由于对所有 $x$ 和 $a$ 都有 $\mathcal{H}(a x)=a \mathcal{H} x$，该系统是齐次的。

最后，考虑线性性质。由于该系统同时具有可加性和齐次性，因此系统是线性的。

例 8.36 系统 $\mathcal{H}$ 定义为

$$
\mathcal{H} x(n)=\operatorname{Re}[x(n)]
$$


确定该系统是否具有可加性和/或齐次性，并判断该系统是否线性。

解：首先，检查可加性是否成立。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
\mathcal{H} x_{1}(n)+\mathcal{H} x_{2}(n) & =\operatorname{Re}\left[x_{1}(n)\right]+\operatorname{Re}\left[x_{2}(n)\right], \quad \text{并且} \\
\mathcal{H}\left\{x_{1}+x_{2}\right\}(n) & =\operatorname{Re}\left[x_{1}(n)+x_{2}(n)\right] \\
& =\operatorname{Re}\left[x_{1}(n)\right]+\operatorname{Re}\left[x_{2}(n)\right]
\end{aligned}
$$


由于对所有 $x_{1}$ 和 $x_{2}$ 都有 $\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}$，该系统是可加的。

其次，检查齐次性是否成立。设 $a$ 为任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a \mathcal{H} x(n) & =a \operatorname{Re} x(n), \quad \text{并且} \\
\mathcal{H}\{a x\}(n) & =\operatorname{Re}[a x(n)]
\end{aligned}
$$


为了使 $\mathcal{H}$ 是齐次的，必须对所有 $x$ 和所有复数 $a$ 成立 $a \mathcal{H} x=\mathcal{H}(a x)$。假设 $a=j$ 且 $x$ 不恒为零（即 $x(n)\neq 0$）。此时有

$$
\begin{aligned}
a \mathcal{H}(x) & =j \operatorname{Re}[x(n)], \quad \text{并且} \\
\mathcal{H}\{a x\}(n) & =\operatorname{Re}[j x(n)] \\
& =\operatorname{Re}[j(\operatorname{Re}[x(n)]+j \operatorname{Im}[x(n)])] \\
& =\operatorname{Re}(-\operatorname{Im}[x(n)]+j \operatorname{Re}[x(n)]) \\
& =-\operatorname{Im}[x(n)]
\end{aligned}
$$


因此，$\mathcal{H}(a x)$ 与 $a \mathcal{H} x$ 明显不相等。因此，该系统不是齐次的。

最后，考虑线性性质。由于该系统不同时具有可加性和齐次性，因此它不是线性的。

### 8.7.7 特征序列

系统 $\mathcal{H}$ 的特征序列是满足

$$
\mathcal{H} x=\lambda x
$$


的序列 $x$，其中 $\lambda$ 为复常数，称为特征值。本质上，当系统以其特征序列作为输入时，系统表现为理想放大器（即执行幅度缩放）。特征序列性质的重要性不容忽视。无论系统多么复杂，对于其特征序列，其表现都极为简单。我们通常可以利用这种简单性来降低解决涉及系统的许多类型问题的复杂性。事实上，正如我们稍后将看到的，特征序列本质上构成了研究系统所用许多数学工具的基础。

例 8.37 考虑系统 $\mathcal{H}$，其由下式定义：

$$
\mathcal{H} x(n)=x(n)-x(n-1)
$$


对于下列每个序列 $x$，确定 $x$ 是否为 $\mathcal{H}$ 的特征序列，如果是，则求对应的特征值。
(a) $x(n)=2$；  
(b) $x(n)=n$。

解：  
(a) 我们有

$$
\begin{aligned}
\mathcal{H} x(n) & =2-2 \\
& =0 \\
& =0 \cdot x(n)
\end{aligned}
$$


因此，$x$ 是 $\mathcal{H}$ 的特征序列，对应的特征值为 0。  

(b) 我们有

$$
\begin{aligned}
\mathcal{H} x(n) & =n-(n-1) \\
& =1 \\
& =\left(\frac{1}{n}\right) n \\
& =\frac{1}{n} x(n)
\end{aligned}
$$


因此，$x$ 不是 $\mathcal{H}$ 的特征序列。

例 8.38（理想放大器） 考虑系统 $\mathcal{H}$，其定义为

$$
\mathcal{H} x(n)=a x(n),
$$


其中 $a$ 为复常数。显然，每个序列都是 $\mathcal{H}$ 的特征序列，对应特征值为 $a$。


## 8.8 习题

### 8.8.1 无答案习题

8.1 已知下图所示的序列 $x$，请画出下列每个序列 $y$ 的图像。  
(a) $y(n)=x(n-2)$；  
(b) $y(n)=x(n+2)$；  
(c) $y(n)=x(2 n)$；  
(d) $y(n)=x(2 n-1)$；  
(e) $y(n)=x(3 n+1)$；  
(f) $y(n)=x(1-2 n)$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-039.jpg?height=257&width=949&top_left_y=751&top_left_x=726){width="400"}


8.2 设序列 $x$ 和 $y$ 由关系 $y(n)=x(a n-b)$ 给出，其中 $a$ 和 $b$ 为整数，且 $a \geq 1$。  
(a) 证明 $y$ 可以通过将 $x$ 时间平移 $b$ 单位后，再将得到的序列按 $a$ 倍下采样得到。  
(b) 证明如果 $\frac{b}{a}$ 是整数，则 $y$ 可以通过先将 $x$ 按 $a$ 倍下采样，再将得到的序列时间平移 $\frac{b}{a}$ 单位得到。

8.3 判断下列每个序列 $x$ 是否为周期序列，若是，求其基本周期 $N$。  
(a) $x(n)=2 e^{j(3 \pi / 10) n}$；  
(b) $x(n)=2 e^{j(3 / 10) n}$；  
(c) $x(n)=5 e^{j 3 n / 2}+3 e^{j 5 n / 2}$；  
(d) $x(n)=e^{j 7(2 n+1) / 3}+e^{j 7(3 n+2) / 5}$；  
(e) $x(n)=\cos (2 n)$；  
(f) $x(n)=\cos \left(\frac{8 \pi}{31} n\right)$；  
(g) $x(n)=\sin \left(\frac{6 \pi}{7} n+1\right)$；  
(h) $x(n)=\sin \left(\frac{1}{10} n-\pi\right)$；  
(i) $x(n)=\cos \left(\frac{\pi}{9} n\right)+\sin \left(\frac{\pi}{10} n\right)+\cos \left(\frac{\pi}{4} n\right)$。

8.4 设 $x$ 为一个 $N$ 周期序列。判断下列序列 $y$ 是否为周期序列。  
(a) $y(n)=\operatorname{Odd}\{x\}(n)$；  
(b) $y(n)=x(N n)$；  
(c) $y(n)=x(2 n)$。

8.5 设 $x$ 为任意 $N$ 周期序列。证明：  
(a) 若 $x$ 为偶序列，则 $x(n)=x(N-n)$；  
(b) 若 $x$ 为奇序列，则 $x(n)=-x(N-n)$；  
(c) 若 $x$ 为奇序列，则 $x(0)=0$ 对于偶数或奇数 $N$ 都成立，并且 $x\left(\frac{N}{2}\right)=0$ 对于偶数 $N$ 成立。

8.6 证明形如 $x(n)=e^{j(2 \pi \ell / m) n}$ 的复正弦序列的基本周期 $N$ 为 $N=\frac{m}{\operatorname{gcd}(\ell, m)}$，其中 $\operatorname{gcd}(\ell, m)$ 表示 $\ell$ 与 $m$ 的最大公约数。

8.7 设序列 $y$ 由下式给出：$y(n)=\sum_{k=-\infty}^{\infty} x(n-N k)$，其中 $x$ 为任意序列，$N$ 为严格正整数。证明 $y$ 是 $N$ 周期序列。

8.8 判断下列序列 $x$ 是偶序列、奇序列还是既非偶也非奇。  
(a) $x(n)=n^{3}$；  
(b) $x(n)=n^{3}|n|$；  
(c) $x(n)=\left|n^{3}\right|$；  
(d) $x(n)=\frac{1}{2}\left(e^{n}+e^{-n}\right)$；  
(e) $x(n)=n+1$。

8.9 证明下列命题。  
(a) 两个偶序列的和是偶序列。  
(b) 两个奇序列的和是奇序列。  
(c) 一个偶序列与一个奇序列的和（且这两个序列都不恒为零）既非偶也非奇。  
(d) 两个偶序列的乘积是偶序列。  
(e) 两个奇序列的乘积是偶序列。  
(f) 一个偶序列与一个奇序列的乘积是奇序列。

8.10 证明如果序列 $x$ 是奇序列，则 $\sum_{k=-n}^{n} x(k)=0$，其中 $n$ 是非负整数常数。
8.11 证明唯一既为偶序列又为奇序列的序列是零序列（即对于所有 $n$ 都满足 $x(n)=0$ 的序列）。

8.12 证明，对于任意序列 $x$，

$$
\sum_{k=-\infty}^{\infty} x^{2}(k)=\sum_{k=-\infty}^{\infty} x_{\mathrm{e}}^{2}(k)+\sum_{k=-\infty}^{\infty} x_{\mathrm{o}}^{2}(k)
$$


其中 $x_{\mathrm{e}}$ 和 $x_{\mathrm{o}}$ 分别表示 $x$ 的偶部和奇部。

8.13 考虑序列

$$
x(n)= \begin{cases}n^{2} & 0 \leq n \leq 2 \\ 5 & 3 \leq n \leq 5 \\ 9-n & 6 \leq n \leq 10 \\ 0 & \text { 其他情况 }\end{cases}
$$


使用单位阶跃序列（unit-step sequence）给出一个适用于所有 $n$ 的 $x(n)$ 单一表达式。

8.14 判断下列每个系统 $\mathcal{H}$ 是否为无记忆系统（memoryless）。  
(a) $\mathcal{H} x(n)=3 x(n)$；  
(b) $\mathcal{H} x(n)=x(n+1)-x(n)$；  
(c) $\mathcal{H} x(n)=\sum_{k=n}^{\infty} x(k)$；  
(d) $\mathcal{H} x(n)=42$。

8.15 判断下列每个系统 $\mathcal{H}$ 是否为因果系统（causal）。  
(a) $\mathcal{H} x(n)=3 x(n)$；  
(b) $\mathcal{H} x(n)=x(n-1)+1$；  
(c) $\mathcal{H} x(n)=x(n+1)-x(n)$；  
(d) $\mathcal{H} x(n)=\sum_{k=n}^{\infty} x(k)$；  
(e) $\mathcal{H} x(n)=\sum_{k=n-4}^{n} x(k)$；  
(f) $\mathcal{H} x(n)=3 x(3 n+3)$。

8.16 判断下列每个系统 $\mathcal{H}$ 是否可逆（invertible）。  
(a) $\mathcal{H} x(n)=x(n-3)$；  
(b) $\mathcal{H} x(n)=x(2 n-1)$；  
(c) $\mathcal{H} x(n)=e^{x(n)}$；  
(d) $\mathcal{H} x(n)=x(n)-x(n-1)$；  
(e) $\mathcal{H} x(n)=\operatorname{Even}\{x\}(n)$。

8.17 判断下列每个系统 $\mathcal{H}$ 是否 BIBO 稳定（BIBO stable）。  
(a) $\mathcal{H} x(n)=2 x(n)+1$；  
(b) $\mathcal{H} x(n)=\sum_{k=n}^{n+4} x(k)$；  
(c) $\mathcal{H} x(n)=\frac{1}{x(n)}$；  
(d) $\mathcal{H} x(n)=\frac{1}{1+x^{2}(n)}$；  
(e) $\mathcal{H} x(n)=e^{-|x(n)|}$；  
(f) $\mathcal{H} x(n)=\sum_{k=n}^{\infty} x(k)$；  
(g) $\mathcal{H} x(n)=\frac{1}{1+|x(n)|}$。

8.18 判断下列每个系统 $\mathfrak{H}$ 是否为时间不变系统（time invariant）。  
(a) $\mathcal{H} x(n)=x(n)-x(n-1)$；  
(b) $\mathcal{H} x(n)=n^{2} x(n)$；  
(c) $\mathcal{H} x(n)=\operatorname{Even}\{x\}(n)$；  
(d) $\mathcal{H} x(n)=\sum_{k=-\infty}^{\infty} x(k) x(n-k)$；  
(e) $\mathcal{H} x(n)=\sum_{k=n-n_{0}}^{n} x(k)$，其中 $n_{0}$ 是严格正整数。

8.19 判断下列每个系统 $\mathcal{H}$ 是否线性（linear）。  
(a) $\mathcal{H} x(n)=x(n)+1$；  
(b) $\mathcal{H} x(n)=\sum_{k=n-1}^{n+1} x(k)$；  
(c) $\mathcal{H} x(n)=e^{x(n)}$；  
(d) $\mathcal{H} x(n)=\operatorname{Even}\{x\}(n)$；  
(e) $\mathcal{H} x(n)=x^{2}(n)$；  
(f) $\mathcal{H} x(n)=n^{2} x(n)$。

8.20 证明，对于任何满足加法性或齐次性的系统 $\mathcal{H}$，如果序列 $x$ 恒为零（即 $x(n)=0$ 对所有 $n$ 都成立），则 $\mathcal{H} x$ 也恒为零（即 $\mathcal{H} x(n)=0$ 对所有 $n$ 都成立）。

8.21 对于下列每个系统 $\mathcal{H}$ 和序列 $\{x_{k}\}$，判断每个 $x_{k}$ 是否为 $\mathcal{H}$ 的本征序列（eigensequence），如果是，还要给出对应的本征值（eigenvalue）。  
(a) $\mathcal{H} x(n)=x^{2}(n), x_{1}(n)=a, x_{2}(n)=e^{-a n}, x_{3}(n)=\cos n$，其中 $a$ 为复常数；  
(b) $\mathcal{H} x(n)=x(n+1)-x(n), x_{1}(n)=e^{a n}, x_{2}(n)=e^{a n^{2}}, x_{3}(n)=42$，其中 $a$ 为实常数；  
(c) $\mathcal{H} x(n)=|x(n)|, x_{1}(n)=a, x_{2}(n)=n, x_{3}(n)=n^{2}$，其中 $a$ 为严格正实数。
### 8.8.2 带答案的习题

8.101 判断下列序列 $x$ 是否为周期序列，如果是，请给出其基本周期。  
(a) $x(n)=e^{j 2 \pi n / 3}$；  
(b) $x(n)=e^{j 3 \pi n / 4}$；  
(c) $x(n)=\cos (2 \pi n)$；  
(d) $x(n)=e^{j(3 \pi / 7) n}+e^{j(\pi / 2) n}+\sin \left(\frac{5 \pi}{9} n\right)$；  
(e) $x(n)=\cos (\pi n)+\sin \left(\frac{\pi}{2} n\right)+e^{j(\pi / 3) n}$；  
(f) $x(n)=\sin \left(\frac{16 \pi}{3} n+\frac{\pi}{11}\right)$；  
(g) $x(n)=\sin \left(-\frac{7 \pi}{13} n+\frac{\pi}{4}\right)$。

简答：  
(a) 3周期；(b) 8周期；(c) 1周期；(d) 252周期；(e) 12周期；(f) 3周期；(g) 26周期

8.102 判断下列系统 $\mathcal{H}$ 是否为无记忆系统（memoryless）。  
(a) $\mathcal{H} x(n)=x(-n)$；  
(b) $\mathcal{H} x(n)=3 x(3 n+3)$。

简答：  
(a) 有记忆；(b) 有记忆

8.103 判断下列系统 $\mathcal{H}$ 是否可逆。  
(a) $\mathcal{H} x(n)=x(3 n)$。

简答：  
(a) 不可逆

8.104 判断下列系统 $\mathcal{H}$ 是否 BIBO 稳定。  
(a) $\mathcal{H} x(n)=3 x(3 n+3)$。

简答：  
(a) BIBO 稳定

8.105 判断下列系统 $\mathfrak{H}$ 是否为时间不变系统。  
(a) $\mathcal{H} x(n)=3 x(3 n+3)$。

简答：  
(a) 非时间不变

8.106 判断下列系统 $\mathcal{H}$ 是否为线性系统。  
(a) $\mathcal{H} x(n)=3 x(3 n+3)$。

简答：  
(a) 线性

8.107 对于下列每个系统 $\mathcal{H}$ 和序列 $\{x_{k}\}$，判断每个 $x_{k}$ 是否为 $\mathcal{H}$ 的本征序列，如果是，还要给出对应的本征值。  
(a) $\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(k), x_{1}(n)=2^{n}, x_{2}(n)=\delta(n), x_{3}(n)=u(n)$。

简答：  
(a) $x_{1}$ 是本征序列，对应本征值为 2；$x_{2}$ 不是本征序列；$x_{3}$ 不是本征序列

### 8.8.3 MATLAB 习题

目前暂无 MATLAB 习题。
