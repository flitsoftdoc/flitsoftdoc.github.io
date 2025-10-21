# 第一部分 连续时间信号与系统

# 第三章 连续时间信号与系统

## 3.1 概述

在本章中，我们将更详细地研究连续时间信号与系统。

## 3.2 自变量的变换

在信号与系统的研究中，一个重要的概念是信号的变换。这里，我们介绍几种基本的信号变换。每一种变换都涉及对自变量的简单修改。

### 3.2.1 时间平移（移位）

我们首先考虑的信号变换称为**时间平移**。时间平移（也称为移位）将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=x(t-b) \tag{3.1}
\end{equation*}
$$


其中 $b$ 是实常数。换句话说，函数 $y$ 是通过在 $x(t)$ 的表达式中用 $t-b$ 替换 $t$ 得到的。从几何上看，变换 (3.1) 将函数 $x$ 沿时间轴向左或向右平移，从而得到 $y$。若 $b>0$，则 $y$ 相对于 $x$ 向右平移（即在时间上延迟）；若 $b<0$，则 $y$ 相对于 $x$ 向左平移（即在时间上提前）。

时间平移的效果如图 3.1 所示。通过对图 3.1(a) 所示的函数 $x$ 应用时间平移变换，可以得到图 3.1(b) 和 (c) 所示的函数。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-032.jpg?height=901&width=1385&top_left_y=434&top_left_x=307){width="400"}
  

图 3.1：时间平移的示例。(a) 函数 $x$；以及对 $x$ 施加平移变换后，移位 (b) +1 和 (c) -1 的结果。

### 3.2.2 时间反转（对称）

接下来我们考虑的信号变换称为**时间反转**。时间反转（也称为对称）将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=x(-t) . \tag{3.2}
\end{equation*}
$$


换句话说，函数 $y$ 是通过在 $x(t)$ 的表达式中用 $-t$ 替换 $t$ 得到的。从几何上看，变换 (3.2) 将函数 $x$ 关于原点对称，从而得到 $y$。

为了说明时间反转的效果，图 3.2 给出了一个示例。将时间反转变换应用于图 3.2(a) 中的函数 $x$，可以得到图 3.2(b) 中的函数。

![](https://cdn.mathpix.com/snip/images/dxJjHuRK9pjAxIqejxoRbb9x_Nk_KRhxLPjgzCMTBFQ.original.fullsize.png){width="400"}
  
图 3.2：时间反转的示例。(a) 函数 $x$；以及 (b) 对 $x$ 施加时间反转变换的结果。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-033.jpg?height=927&width=1546&top_left_y=286&top_left_x=348){width="400"}
  
图 3.3：时间压缩/扩展的示例。(a) 函数 $x$；以及对 $x$ 施加压缩/扩展变换后，缩放因子分别为 (b) 2 和 (c) $\frac{1}{2}$ 的结果。
### 3.2.3 时间压缩/扩展（伸缩）

接下来要考虑的变换称为**时间压缩/扩展**。时间压缩/扩展（也称为伸缩）将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=x(a t), \tag{3.3}
\end{equation*}
$$


其中 $a$ 是严格正的实常数。换句话说，函数 $y$ 是通过在 $x(t)$ 的表达式中用 $at$ 替换 $t$ 得到的。常数 $a$ 称为**缩放因子**。变换 (3.3) 与沿时间轴的压缩/扩展相关。若 $a>1$，则 $y$ 相对于 $x$ 沿横轴压缩，压缩因子为 $a$；若 $a<1$，则 $y$ 相对于 $x$ 沿横轴扩展（即拉伸），扩展因子为 $\frac{1}{a}$。

时间压缩/扩展的效果如图 3.3 所示。通过对图 3.3(a) 中的函数 $x$ 应用时间压缩/扩展变换，可以得到图 3.3(b) 和 (c) 所示的函数。

### 3.2.4 时间缩放（伸缩/对称）

另一种信号变换称为**时间缩放**。时间缩放将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=x(a t), \tag{3.4}
\end{equation*}
$$


其中 $a$ 是非零实常数。换句话说，函数 $y$ 是通过在 $x(t)$ 的表达式中用 $at$ 替换 $t$ 得到的。量 $a$ 称为**缩放因子**。从几何角度来看，变换 (3.4) 与沿时间轴的压缩/扩展以及/或者关于原点的对称相关。若 $|a|<1$，则函数沿时间轴扩展（即拉伸）；若 $|a|>1$，则函数被压缩；若 $|a|=1$，则函数既不扩展也不压缩。最后，若 $a<0$，则函数关于原点对称。可以看到，时间缩放同时包含了时间压缩/扩展和时间反转作为特例。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-034.jpg?height=933&width=1600&top_left_y=283&top_left_x=208){width="400"}
  
图 3.4：时间缩放的示例。(a) 函数 $x$；以及对 $x$ 施加时间缩放变换后，缩放因子为 (b) 2、(c) $\frac{1}{2}$ 和 (d) -1 的结果。

为了说明时间缩放的作用，图 3.4 给出了一个示例。通过对图 3.4(a) 中的函数 $x$ 应用时间缩放变换，可以得到图 3.4(b)、(c) 和 (d) 所示的函数。
### 3.2.5 时间平移与时间缩放的结合

在前面的章节中，我们介绍了时间平移和时间缩放两种变换。此外，我们注意到时间缩放包含了时间压缩/扩展和时间反转作为特例。一些自变量变换是可交换的，而另一些则不可交换。交换性的问题在处理涉及组合变换的表达式简化或推导时非常重要。时间缩放、时间反转和时间压缩/扩展运算是可交换的；而时间平移（带非零移位量）与时间缩放、时间反转和时间压缩/扩展运算则不可交换。

现在，我们引入一种更一般的变换，它结合了时间平移与时间缩放的效果。这种新变换将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=x(a t-b), \tag{3.5}
\end{equation*}
$$


其中 $a$ 和 $b$ 是实常数，且 $a \neq 0$。换句话说，函数 $y$ 是通过在 $x(t)$ 的表达式中用 $at-b$ 替换 $t$ 得到的。可以证明，变换 (3.5) 等价于先将 $x$ 平移 $b$，然后对所得函数进行时间缩放 $a$。从几何上看，该变换保持了 $x$ 的形状，仅在时间轴上可能出现扩展/压缩和/或关于原点的对称。若 $|a|<1$，函数在时间轴上被拉伸；若 $|a|>1$，函数被压缩；若 $a<0$，函数关于原点对称。

上述变换有两种不同但等价的解释，即它等价于以下两种方式之一：

1. 先将 $x$ 平移 $b$，再对结果进行时间缩放 $a$；
2. 先将 $x$ 缩放 $a$，再对结果平移 $\frac{b}{a}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-035.jpg?height=782&width=1433&top_left_y=286&top_left_x=413){width="400"}
  
图 3.5：时间平移与时间缩放组合变换的两种不同解释。(a) 原始函数。先平移再缩放的结果：(b) 中间结果，(c) 最终结果。先缩放再平移的结果：(d) 中间结果，(e) 最终结果。

注意到，两种解释中的移位量不同（即 $b$ 与 $\frac{b}{a}$）。这是由于时间平移和时间缩放不可交换的事实所导致的。关于上述两种解释等价性的证明留作习题 3.3。

**例 3.1** 为了说明该组合变换的两种等价解释，我们考虑一个简单的示例。设图 3.5(a) 所示的函数为 $x$。我们要求变换后的函数 $y(t)=x(at-b)$，其中 $a=2$，$b=1$。

**解：** 首先考虑“先平移后缩放”的方法。在这种情况下，我们先将函数 $x$ 平移 $b$（即 1），得到图 3.5(b) 所示的函数。然后将该新函数按 $a$（即 2）缩放，从而得到图 3.5(c) 所示的 $y$。其次考虑“先缩放后平移”的方法。在这种情况下，我们先将函数 $x$ 按 $a$（即 2）缩放，得到图 3.5(d) 所示的函数。然后将该新函数平移 $\frac{b}{a}$（即 $\frac{1}{2}$），从而得到图 3.5(e) 所示的 $y$。
### 3.2.6 关于自变量变换的两种视角

自变量的变换可以从以下两个角度来看待：

1. 该变换对函数的影响；  
2. 该变换对横轴的影响。  

这种区分很重要，因为此类变换对函数和横轴的作用是相反的。例如，在 $x(t)$ 的表达式中用 $t-b$（其中 $b$ 是实数）替换 $t$ 的时间平移变换，可以理解为：

1. 将函数 $x$ 向右平移 $b$ 个单位；  
2. 将横轴向左平移 $b$ 个单位。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-036.jpg?height=522&width=1385&top_left_y=286&top_left_x=307){width="400"}
  
图 3.6：幅度平移的示例。(a) 函数 $x$；以及对 $x$ 施加幅度平移变换（平移量为 -2）后得到的结果。  

在我们对自变量变换的研究中，我们只关注变换对函数的影响。如果不注意这一点，而是从坐标轴的角度来理解，那么关于自变量变换的许多方面将会变得难以理解。
## 3.3 因变量的变换

在前面的章节中，我们研究了若干自变量的变换。现在，我们来考虑一些因变量的变换。

### 3.3.1 幅度平移

我们首先考虑的变换称为**幅度平移**。幅度平移将函数 $x$ 映射为函数 $y$，其定义为

$$
y(t)=x(t)+b
$$


其中 $b$ 是一个标量常数。从几何上看，函数 $y$ 相对于 $x$ 在竖直方向上发生位移。若 $b>0$，则 $y$ 相对于 $x$ 向上平移 $|b|$；若 $b<0$，则 $y$ 相对于 $x$ 向下平移 $|b|$。

幅度平移的效果如图 3.6 所示。图 3.6(b) 中的函数可以通过对图 3.6(a) 所示的函数 $x$ 施加幅度平移变换得到。

### 3.3.2 幅度缩放

接下来我们考虑的变换称为**幅度缩放**。幅度缩放将函数 $x$ 映射为函数 $y$，其定义为

$$
y(t)=a x(t),
$$


其中 $a$ 是一个标量常数。从几何上看，函数 $y$ 相对于 $x$ 在幅度上被放大/压缩，和/或关于横轴对称。

为了说明幅度缩放的效果，图 3.7 给出了一个示例。通过对图 3.7(a) 中的函数 $x$ 施加幅度缩放变换，可以得到图 3.7(b)、(c) 和 (d) 所示的函数。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-037.jpg?height=1043&width=1371&top_left_y=805&top_left_x=437){width="400"}
  
图 3.7：幅度缩放的示例。(a) 函数 $x$；以及对 $x$ 施加幅度缩放变换后，缩放因子为 (b) 2、(c) $\frac{1}{2}$ 和 (d) -2 的结果。
### 3.3.3 幅度平移与缩放的结合

在前面的章节中，我们分别讨论了幅度平移与幅度缩放两种变换。我们可以定义一种新的变换，它结合了幅度平移与幅度缩放的效果。该变换将函数 $x$ 映射为函数 $y$，其定义为

$$
\begin{equation*}
y(t)=a x(t)+b \tag{3.6}
\end{equation*}
$$


其中 $a$ 和 $b$ 是标量常数。可以证明，这一变换等价于先将 $x$ 按 $a$ 缩放，然后将所得函数平移 $b$。此外，由于 (3.6) 可以改写为$$ y(t)=a\left[x(t)+\frac{b}{a}\right],$$因此，该变换也等价于先将 $x$ 平移 $\frac{b}{a}$，再将所得函数按 $a$ 缩放。

## 3.4 函数的性质

函数可能具有许多有趣的性质。接下来，我们将更详细地研究对称性与周期性（前面已介绍过）。此外，我们还将介绍若干其他函数性质。这些性质在信号与系统的分析中非常有用。

### 3.4.1 关于对称性的说明

在此我们对偶函数与奇函数（已在前面介绍过）作一些补充说明。由于函数常常需要相加或相乘，人们可能会关心这些运算下函数的偶/奇对称性会发生什么变化。下面给出一些相关结论。

**偶函数与奇函数的和具有以下性质：**

- 两个偶函数的和仍为偶函数；  
- 两个奇函数的和仍为奇函数；  
- 一个偶函数与一个奇函数的和既不是偶函数也不是奇函数，前提是这两个函数不恒为零。  

**偶函数与奇函数的积具有以下性质：**

- 两个偶函数的积为偶函数；  
- 两个奇函数的积为偶函数；  
- 一个偶函数与一个奇函数的积为奇函数。  

（上述关于和与积的性质的证明，留作习题 3.10。）

事实证明，任意函数都可以表示为一个偶函数与一个奇函数的和，如下面的定理所述。

**定理 3.1 （函数的偶/奇分解）**  
任意函数 $x$ 都可以唯一地表示为如下形式的和：

$$
\begin{equation*}
x(t)=x_{\mathrm{e}}(t)+x_{\mathrm{o}}(t) \tag{3.7}
\end{equation*}
$$


其中 $x_{\mathrm{e}}$ 和 $x_{\mathrm{o}}$ 分别为偶函数与奇函数，并由下式给出：

$$
\begin{gather*}
x_{\mathrm{e}}(t)=\frac{1}{2}[x(t)+x(-t)] \quad \text { and }  \tag{3.8}\\
x_{\mathrm{o}}(t)=\frac{1}{2}[x(t)-x(-t)] \tag{3.9}
\end{gather*}
$$


在术语上，$x_{\mathrm{e}}$ 称为 $x$ 的**偶部**，记作 $\operatorname{Even}\{x\}$；$x_{\mathrm{o}}$ 称为 $x$ 的**奇部**，记作 $\operatorname{Odd}\{x\}$。

**证明。** 根据 (3.8) 与 (3.9)，我们容易验证 $x_{\mathrm{e}}+x_{\mathrm{o}}=x$，如下所示：

$$
\begin{aligned}
x_{\mathrm{e}}(t)+x_{\mathrm{o}}(t) & =\frac{1}{2}[x(t)+x(-t)]+\frac{1}{2}[x(t)-x(-t)] \\ 
& =\frac{1}{2}x(t)+\frac{1}{2}x(-t)+\frac{1}{2}x(t)-\frac{1}{2}x(-t) \\ 
& =x(t)
\end{aligned}
$$


此外，我们可以容易验证 $x_{\mathrm{e}}$ 是偶函数，而 $x_{\mathrm{o}}$ 是奇函数。由 (3.8) 中 $x_{\mathrm{e}}$ 的定义可得：

$$
\begin{aligned}
x_{\mathrm{e}}(-t) & =\frac{1}{2}[x(-t)+x(-[-t])] \\ 
& =\frac{1}{2}[x(t)+x(-t)] \\ 
& =x_{\mathrm{e}}(t)
\end{aligned}
$$


因此，$x_{\mathrm{e}}$ 是偶函数。由 (3.9) 中 $x_{\mathrm{o}}$ 的定义可得：

$$
\begin{aligned}
x_{\mathrm{o}}(-t) & =\frac{1}{2}[x(-t)-x(-[-t])] \\ 
& =\frac{1}{2}[-x(t)+x(-t)] \\ 
& =-x_{\mathrm{o}}(t)
\end{aligned}
$$


因此，$x_{\mathrm{o}}$ 是奇函数。

最后，我们证明 $x$ 分解为偶函数与奇函数之和是唯一的。假设 $x$ 可以用两种方式写作偶函数与奇函数之和：

$$
\begin{gather*}
x(t)=f_{\mathrm{e}}(t)+f_{\mathrm{o}}(t) \quad \text { and }  \tag{3.10a}\\
x(t)=g_{\mathrm{e}}(t)+g_{\mathrm{o}}(t) \tag{3.10b}
\end{gather*}
$$


其中 $f_{\mathrm{e}}$ 与 $g_{\mathrm{e}}$ 为偶函数，$f_{\mathrm{o}}$ 与 $g_{\mathrm{o}}$ 为奇函数。将两式相等得：

$$
f_{\mathrm{e}}(t)+f_{\mathrm{o}}(t)=g_{\mathrm{e}}(t)+g_{\mathrm{o}}(t) .
$$


整理得：

$$
f_{\mathrm{e}}(t)-g_{\mathrm{e}}(t)=g_{\mathrm{o}}(t)-f_{\mathrm{o}}(t) .
$$


仔细观察上式。由于偶函数之差仍为偶函数，奇函数之差仍为奇函数，所以该式左右两边分别对应偶函数与奇函数。因此，偶函数 $f_{\mathrm{e}}(t)-g_{\mathrm{e}}(t)$ 等于奇函数 $g_{\mathrm{o}}(t)-f_{\mathrm{o}}(t)$。然而，唯一既是偶函数又是奇函数的函数是零函数。（对此事实的证明留作习题 3.16。）因此有：

$$
f_{\mathrm{e}}(t)-g_{\mathrm{e}}(t)=g_{\mathrm{o}}(t)-f_{\mathrm{o}}(t)=0 .
$$


换言之：

$$
f_{\mathrm{e}}(t)=g_{\mathrm{e}}(t) \quad \text { 且 } \quad f_{\mathrm{o}}(t)=g_{\mathrm{o}}(t) .
$$


这说明 (3.10a) 与 (3.10b) 所给出的 $x$ 的两种分解实际上是相同的（即它们不能不同）。因此，$x$ 分解为偶函数与奇函数之和是唯一的。
### 3.4.2 关于周期性的说明

由于我们经常需要对函数进行相加操作，因此了解周期函数的和是否仍然是周期函数是有帮助的。接下来我们将讨论这一问题，但在此之前，我们需要先引入最小公倍数的概念。

两个严格正实数 $a_{1}$ 和 $a_{2}$ 的**最小公倍数**（记作 $\operatorname{lcm}(a_{1}, a_{2})$）是既是 $a_{1}$ 又是 $a_{2}$ 的整数倍的最小正实数。例如，$\operatorname{lcm}(6\pi, 10\pi)=30\pi$，因为 $30\pi$ 是可以被 $6\pi$ 和 $10\pi$ 整除的最小正实数。更一般地，正实数集合 $\{a_{1}, a_{2}, \ldots, a_{N}\}$ 的最小公倍数，记作 $\operatorname{lcm}\{a_{1}, a_{2}, \ldots, a_{N}\}$，是每个 $a_{k}(k=1,2,\ldots,N)$ 的整数倍的最小正实数。

引入最小公倍数的概念后，我们就可以讨论两个周期函数的和是否仍然是周期函数。下面的定理对此有重要启示。

**定理 3.2 （周期函数的和）**  
设 $x_{1}$ 和 $x_{2}$ 是两个（连续的）周期函数，其周期分别为 $T_{1}$ 和 $T_{2}$。则 $x=x_{1}+x_{2}$ 是周期函数，当且仅当比值 $T_{1}/T_{2}$ 是有理数（即两个整数的商）。若 $x$ 是周期函数，且 $T_{1}/T_{2}=q/r$，其中 $q$ 和 $r$ 是互素整数，则 $x$ 的周期 $
T=\operatorname{lcm}(T_{1},T_{2})=rT_{1}=qT_{2}. $


**证明。** 我们仅给出部分证明。假设 $x$ 是周期函数，需证明它的周期为 $T$。由于 $x$ 是周期函数，所以 $T=\operatorname{lcm}(T_{1},T_{2})$ 必然存在。因为 $T$ 是 $T_{1}$ 和 $T_{2}$ 的整数倍，所以可写作 $T=k_{1}T_{1}=k_{2}T_{2}$，其中 $k_{1}$ 和 $k_{2}$ 为正整数。于是有

$$
\begin{aligned}
x(t+T) & =x_{1}(t+T)+x_{2}(t+T) \\
& =x_{1}(t+k_{1}T_{1})+x_{2}(t+k_{2}T_{2}) \\
& =x_{1}(t)+x_{2}(t) \\
& =x(t)
\end{aligned}
$$


因此，$x$ 是周期为 $T$ 的周期函数。

顺带提及，上述结果可以推广到 $N$ 个周期函数的情形。若 $N$ 个周期函数 $x_{1},x_{2},\ldots,x_{N}$ 的周期分别为 $T_{1},T_{2},\ldots,T_{N}$，则它们的和是周期函数，当且仅当各周期的比值为有理数（即 $T_{1}/T_{k}$ 对 $k=2,3,\ldots,N$ 都是有理数）。若和函数是周期函数，则其基波周期为 $ \operatorname{lcm}\{T_{1},T_{2},\ldots,T_{N}\}. $

---

**例 3.2.** 设 $x_{1}(t)=\sin(\pi t)$，$x_{2}(t)=\sin t$。判断 $y=x_{1}+x_{2}$ 是否为周期函数。  

**解。** 设 $x_{1}$ 和 $x_{2}$ 的基波周期分别为 $T_{1}$ 和 $T_{2}$。则有

$$
T_{1}=\frac{2\pi}{\pi}=2, \quad T_{2}=\frac{2\pi}{1}=2\pi
$$


这里用到了 $\sin(\alpha t)$ 的基波周期为 $\frac{2\pi}{|\alpha|}$ 的事实。因此

$$
\frac{T_{1}}{T_{2}}=\frac{2}{2\pi}=\frac{1}{\pi}
$$


由于 $\pi$ 是无理数，$\frac{T_{1}}{T_{2}}$ 不是有理数。因此，$y$ 不是周期函数。

---

**例 3.3.** 设 $x_{1}(t)=\cos\left(2\pi t+\frac{\pi}{4}\right)$，$x_{2}(t)=\sin(7\pi t)$。判断 $y=x_{1}+x_{2}$ 是否为周期函数，若是，求其基波周期。  

**解。** 设 $x_{1}$ 和 $x_{2}$ 的基波周期分别为 $T_{1}$ 和 $T_{2}$。则有

$$
T_{1}=\frac{2\pi}{2\pi}=1, \quad T_{2}=\frac{2\pi}{7\pi}=\frac{2}{7}
$$


取比值得

$$
\frac{T_{1}}{T_{2}}=\frac{7}{2}
$$


由于 $\frac{T_{1}}{T_{2}}$ 是有理数，$y$ 是周期函数。设 $T$ 为 $y$ 的基波周期。由于 7 与 2 互素，

$$
T=2T_{1}=7T_{2}=2
$$


---

**例 3.4.** 设 $x_{1}(t)=\cos(6\pi t)$，$x_{2}(t)=\sin(30\pi t)$。判断 $y=x_{1}+x_{2}$ 是否为周期函数，若是，求其基波周期。  

**解。** 设 $x_{1}$ 和 $x_{2}$ 的基波周期分别为 $T_{1}$ 和 $T_{2}$。则有

$$
T_{1}=\frac{2\pi}{6\pi}=\frac{1}{3}, \quad T_{2}=\frac{2\pi}{30\pi}=\frac{1}{15}
$$


因此

$$
\frac{T_{1}}{T_{2}}=\left(\frac{1}{3}\right)\bigg/\left(\frac{1}{15}\right)=\frac{15}{3}=\frac{5}{1}
$$


由于 $\frac{T_{1}}{T_{2}}$ 是有理数，$y$ 是周期函数。设 $T$ 为 $y$ 的基波周期。由于 5 与 1 互素，有

$$
T=1T_{1}=5T_{2}=\frac{1}{3}
$$


### 3.4.3 函数的支集（Support）

我们可以根据函数在何种区间上取非零值来对其进行分类。这通常被称为函数的**支集**（support）。下面介绍一些与函数支集相关的术语。

若存在某个（有限的）实常数 $t_{0}$，使得

$$
x(t)=0 \quad \text{ 对所有 } t>t_{0},
$$


则称函数 $x$ 为**左边函数（left sided）**。换句话说，在某一点的右侧，函数恒为零。  

若存在某个（有限的）实常数 $t_{0}$，使得

$$
x(t)=0 \quad \text{ 对所有 } t<t_{0},
$$


则称函数 $x$ 为**右边函数（right sided）**。换句话说，在某一点的左侧，函数恒为零。  

一个函数如果既是左边函数又是右边函数，则称为**时限函数（time limited 或 finite duration）**。如果一个函数既不是左边函数也不是右边函数，则称为**双边函数（two sided）**。注意，每个函数都恰好属于以下四类之一：左边但非右边，右边但非左边，时限，或双边。图 3.8 展示了这四类函数的示例。

若函数 $x$ 满足

$$
x(t)=0 \quad \text{ 对所有 } t<0,
$$


则称 $x$ 为**因果函数（causal function）**。因果函数是右边函数的一种特殊情况。类似地，若函数 $x$ 满足

$$
x(t)=0 \quad \text{ 对所有 } t>0,
$$


则称 $x$ 为**反因果函数（anticausal function）**。反因果函数是左边函数的一种特殊情况。  

需要注意的是，当“因果（causal）”和“反因果（anticausal）”用来描述函数时，它们与通常的因果关系（cause and effect）没有任何联系。从这个角度看，这样的命名或许并不是最恰当的。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-042.jpg?height=749&width=1217&top_left_y=286&top_left_x=413){width="400"}
  

图 3.8：具有不同边界性质的函数示例。(a) 左边但非右边，(b) 右边但非左边，(c) 时限，(d) 双边。

### 3.4.4 有界函数

若存在某个（有限的）非负实常数 $A$，使得

$$
|x(t)| \leq A \quad \text{ 对所有 } t
$$


则称函数 $x$ 为**有界函数（bounded function）**（即 $x(t)$ 对所有 $t$ 都是有限的）。例如，正弦函数和余弦函数是有界的，因为

$$
|\sin t| \leq 1 \quad \text{ 对所有 } t, \quad |\cos t| \leq 1 \quad \text{ 对所有 } t.
$$


相比之下，正切函数以及任何非常数多项式函数 $p$（例如 $p(t)=t^2$）是**无界函数（unbounded）**，因为

$$
\lim_{t \to \pi/2} |\tan t| = \infty, \quad \text{且} \quad \lim_{|t| \to \infty} |p(t)| = \infty.
$$


### 3.4.5 信号的能量与功率

函数 $x$ 所含的**能量** $E$ 定义为

$$
E = \int_{-\infty}^{\infty} |x(t)|^2 \, dt
$$


在术语上，若函数 $x$ 的能量有限，则称其为**能量信号（energy signal）**。

函数 $x$ 所含的**平均功率** $P$ 定义为

$$
P = \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} |x(t)|^2 \, dt
$$


在术语上，若函数 $x$ 的平均功率有限且非零，则称其为**功率信号（power signal）**。
### 3.4.6 示例

下面给出几个使用信号性质的示例。

**例 3.5.** 设函数 $x$ 具有如下性质：

$$
\begin{gathered}
v(t)=x(t-3) \text{ 是因果的；} \\
x \text{ 是奇函数}
\end{gathered}
$$


求 $x(t)$ 必须为零的 $t$ 值。

**解。** 由于 $v$ 是因果函数，我们知道 $v(t)=0$ 对所有 $t<0$ 成立。因为 $v(t)=x(t-3)$，所以

$$
x(t)=0 \quad \text{ 对 } t<-3 \text{ 成立。} \tag{3.11}
$$


由于 $x$ 是奇函数，我们有

$$
x(t)=-x(-t) \quad \text{ 对所有 } t \text{ 成立。} \tag{3.12}
$$


由 (3.11) 和 (3.12) 得到 $-x(-t)=0$ 对 $t<-3$ 成立，从而

$$
x(t)=0 \quad \text{ 对 } t>3 \text{ 成立。} \tag{3.13}
$$


将 $t=0$ 代入 (3.12) 得 $x(0)=-x(0)$，因此

$$
x(0)=0 \tag{3.14}
$$


结合 (3.11)、(3.13) 和 (3.14)，我们得出 $x(t)$ 必须为零的 $t$ 值为

$$
t<-3, \quad t>3, \quad \text{或} \quad t=0
$$


---

**例 3.6.** 考虑函数 $x$ 具有如下性质：

- $x(t)=t+5$ 对 $-5 \le t \le -3$；
- $v_1(t)=x(t-5)$ 是因果的；
- $v_2(t)=x(t-3)$ 是偶函数。

求 $x(t)$ 对所有 $t$ 的表达式。

**解。** 由于 $v_1(t)=x(t-5)$ 是因果函数，有

$$
\begin{aligned}
& v_{1}(t)=0 \text { for } t<0 \\
\Rightarrow & x(t-5)=0 \text { for } t<0 \\
\Rightarrow & x([t+5]-5)=0 \text { for }(t+5)<0 \\
\Rightarrow & x(t)=0 \text { for } t<-5
\end{aligned}
$$


结合 $x(t)=t+5$ 对 $-5 \le t \le -3$，得到

$$
x(t)=
\begin{cases}
t+5 & -5 \le t \le -3 \\[2mm]
0 & t<-5
\end{cases} \tag{3.15}
$$


接下来只需确定 $t>-3$ 时的 $x(t)$。由于 $v_2(t)=x(t-3)$ 是偶函数，有

$$
\begin{aligned}
& v_2(t)=v_2(-t) \\
\Rightarrow & x(t-3)=x(-t-3) \\
\Rightarrow & x([t+3]-3)=x(-[t+3]-3) \\
\Rightarrow & x(t)=x(-t-6)
\end{aligned}
$$


结合 (3.15)，得到

$$
\begin{aligned}
x(t) & =x(-t-6) \\
& = \begin{cases}(-t-6)+5 & -5 \leq-t-6 \leq-3 \\
0 & -t-6<-5\end{cases} \\
& = \begin{cases}-t-1 & 1 \leq-t \leq 3 \\
0 & -t<1\end{cases} \\
& = \begin{cases}-t-1 & -3 \leq t \leq-1 \\
0 & t>-1 .\end{cases}
\end{aligned}
$$


因此，我们得到 $x(t)$ 的完整表达式为

$$
x(t)=
\begin{cases}
0 & t<-5 \\ 
t+5 & -5 \le t<-3 \\ 
-t-1 & -3 \le t<-1 \\ 
0 & t \ge -1
\end{cases}
$$


图 3.9 给出了 $x$ 的示意图。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-044.jpg?height=260&width=819&top_left_y=305&top_left_x=578){width="400"}
  
图 3.9：例 3.6 中的函数 $x$。

## 3.5 基本函数

在信号与系统的研究中，有一些基本信号特别有用。以下内容将介绍其中对我们目的最有益的一些。

### 3.5.1 实正弦函数

一个重要的函数类是实正弦函数。实正弦函数 $x$ 的一般形式为

$$
x(t)=A \cos (\omega t+\theta),
$$


其中 $A, \omega$ 和 $\theta$ 为实常数。此类函数是周期性的，其基本周期为 $T=\frac{2 \pi}{|\omega|}$，其图像类似于图 3.10 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-044.jpg?height=622&width=593&top_left_y=678&top_left_x=702){width="400"}
  

图 3.10：实正弦函数。

### 3.5.2 复指数函数

另一个重要的函数类是复指数函数。复指数函数 $x$ 的一般形式为

$$
\begin{equation*}
x(t)=A e^{\lambda t}, \tag{3.16}
\end{equation*}
$$


其中 $A$ 和 $\lambda$ 为复常数。复指数函数在系统理论中具有基础性的重要性，同时也为表示许多其他类函数提供了方便的手段。复指数函数可以根据其参数 $A$ 和 $\lambda$ 的取值表现出多种不同的行为模式。以下内容将探讨复指数函数的一些特殊情况，以及一般情况。

#### 3.5.2.1 实指数函数

首先考虑复指数函数的一个特殊情况——实指数函数。在实指数函数的情况下，我们将式 (3.16) 中的 $A$ 和 $\lambda$ 限制为实数。实指数函数可以根据 $\lambda$ 的取值表现出三种不同的行为模式，如图 3.11 所示。如果 $\lambda>0$，则 $x(t)$ 随着 $t$ 的增加呈指数增长（即增长型指数函数）。如果 $\lambda<0$，则 $x(t)$ 随着 $t$ 的增加呈指数衰减（即衰减型或阻尼型指数函数）。如果 $\lambda=0$，则 $x(t)$ 在所有 $t$ 上恒等于常数 $A$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-045.jpg?height=631&width=1573&top_left_y=280&top_left_x=337){width="400"}


图 3.11：实指数函数的情况 (a) $\lambda>0$，(b) $\lambda=0$，以及 (c) $\lambda<0$。

#### 3.5.2.2 复正弦函数

复指数函数的第二个特殊情况是复正弦函数。在复正弦函数的情况下，式 (3.16) 中的参数满足 $A$ 为复数且 $\lambda$ 为纯虚数（即 $\operatorname{Re}(\lambda)=0$）。为了方便，我们将 $A$ 用极坐标形式表示，将 $\lambda$ 用笛卡尔形式表示如下：

$$
A=|A| e^{j \theta} \quad \text { 且 } \quad \lambda=j \omega,
$$


其中 $\theta$ 和 $\omega$ 为实常数。利用欧拉公式 (A.4)，我们可以将 (3.16) 重写为

$$
\begin{aligned}
x(t) & =A e^{\lambda t} \\
& =|A| e^{j \theta} e^{j \omega t} \\
& =|A| e^{j(\omega t+\theta)} \\
& =|A| \cos (\omega t+\theta)+j|A| \sin (\omega t+\theta)
\end{aligned}
$$


从上述公式可以看出，$x$ 的实部和虚部都是周期性的，其基本周期为 $\frac{2 \pi}{|\omega|}$。进一步，由此我们可以推导出 $x$ 本身也是周期性的，其基本周期同样为 $\frac{2 \pi}{|\omega|}$。为了说明复正弦函数的形式，我们在图 3.12 中绘制了其实部和虚部。实部和虚部除了相位差外是相同的。

复正弦函数 $x(t)=e^{j \omega t}$ 在 $\omega$ 分别取 $2 \pi$ 和 $-2 \pi$ 时的图像如图 3.13(a) 和 (b) 所示。从这些图中可以看出，随着 $t$ 增加，$x(t)$ 描绘的曲线呈螺旋状。如果沿着 $t$ 轴方向向 $-\infty$ 直视该曲线，当 $\omega>0$ 时螺旋呈逆时针方向（即右手螺旋），当 $\omega<0$ 时螺旋呈顺时针方向（即左手螺旋）。注意，虽然这两种复正弦函数的振荡速率相同，但它们并不是通过平移（即时间平移）或反射（即时间反转）得到的版本。左手螺旋和右手螺旋在本质上是不同的形状，一个无法通过平移和/或反射变为另一个。

如图 3.13 所示，复正弦函数 $x(t)=e^{j \omega t}$ 在 $\omega>0$ 和 $\omega<0$ 时的行为本质上不同。因此，在处理复正弦函数时，通常使用带符号的频率（如前文第 2.10.2 节所介绍）。也就是说，我们通常将 $\omega$ 称为复正弦函数的频率。这是带符号频率的一个应用实例（因为 $\omega$ 显然是带符号的量）。旋转的正方向（即 $\omega>0$）对应右手螺旋，而旋转的负方向（即 $\omega<0$）对应左手螺旋。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-046.jpg?height=698&width=1330&top_left_y=289&top_left_x=329){width="400"}


图 3.12：复正弦函数。(a) 实部和 (b) 虚部。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-047.jpg?height=1565&width=1031&top_left_y=570&top_left_x=607){width="400"}


图 3.13：复正弦函数 $x(t)=e^{j \omega t}$，(a) $\omega=2 \pi$，(b) $\omega=-2 \pi$。

#### 3.5.2.3 一般复指数函数

最后，我们考虑一般复指数函数。也就是说，我们考虑式 (3.16) 的一般情况，其中 $A$ 和 $\lambda$ 都是复数。为了方便，我们将 $A$ 用极坐标形式表示，将 $\lambda$ 用笛卡尔形式表示如下：

$$
A=|A| e^{j \theta} \quad \text { 且 } \quad \lambda=\sigma+j \omega,
$$


其中 $\theta, \sigma$ 和 $\omega$ 为实常数。将 $A$ 和 $\lambda$ 的表达式代入式 (3.16)，得到

$$
\begin{aligned}
x(t) & =A e^{\lambda t} \\
& =|A| e^{j \theta} e^{(\sigma+j \omega) t} \\
& =|A| e^{\sigma t} e^{j(\omega t+\theta)} \\
& =|A| e^{\sigma t} \cos (\omega t+\theta)+j|A| e^{\sigma t} \sin (\omega t+\theta)
\end{aligned}
$$


可以看到，$\operatorname{Re}[x(t)]$ 和 $\operatorname{Im}[x(t)]$ 形式相似。它们都是实指数函数与实正弦函数的乘积。根据 $\sigma$ 的取值，$x$ 会表现出三种不同的行为模式。如果 $\sigma=0$，$\operatorname{Re}(x)$ 和 $\operatorname{Im}(x)$ 是实正弦函数。如果 $\sigma>0$，$\operatorname{Re}(x)$ 和 $\operatorname{Im}(x)$ 都是实正弦函数与增长型实指数函数的乘积。如果 $\sigma<0$，$\operatorname{Re}(x)$ 和 $\operatorname{Im}(x)$ 都是实正弦函数与衰减型实指数函数的乘积。图 3.14 展示了 $\operatorname{Re}(x)$ 的这三种情况。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-048.jpg?height=590&width=1579&top_left_y=283&top_left_x=210){width="400"}

图 3.14：一般复指数函数的实部，(a) $\sigma>0$，(b) $\sigma=0$，(c) $\sigma<0$。

### 3.5.3 复指数函数与实正弦函数的关系

实正弦函数可以利用以下恒等式表示为两个复正弦函数的和：

$$
\begin{gather*}
A \cos (\omega t+\theta)=\frac{A}{2}\left(e^{j(\omega t+\theta)}+e^{-j(\omega t+\theta)}\right) \quad \text { 和 }  \tag{3.17}\\
A \sin (\omega t+\theta)=\frac{A}{2 j}\left(e^{j(\omega t+\theta)}-e^{-j(\omega t+\theta)}\right) \tag{3.18}
\end{gather*}
$$


该结果源自欧拉公式，本质上是对 (A.8) 的重述。
### 3.5.4 单位阶跃函数

在系统理论中，另一个常用的基本函数是单位阶跃函数。单位阶跃函数（也称为 Heaviside 函数）记作 $u$，定义为

$$
u(t)= \begin{cases}1 & t \geq 0 \\ 0 & \text { 其他情况 }\end{cases}
$$


该函数的图像如图 3.15 所示。显然，$u$ 在原点处是不连续的。在这个不连续点，我们选择将 $u$ 定义为 1（即 $u(0)=1$）。然而，这一选择在某种程度上是任意的。也就是说，对于大多数实际应用，由于本书未涉及的技术原因，重要的是 $u(0)$ 是有限的，而不是其具体取值。因此，一些作者选择将 $u(0)$ 保留为未指定（但有限）的常数，而其他作者则选择为 $u(0)$ 赋予具体值。在选择具体值的情况下，最常用的值为 $0, \frac{1}{2}$ 和 $1$。显然，在本书中，作者选择使用 $u(0)=1$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-049.jpg?height=390&width=663&top_left_y=294&top_left_x=788){width="400"}


图 3.15：单位阶跃函数。

### 3.5.5 符号函数

另一个与单位阶跃函数密切相关的函数是所谓的符号函数。符号函数记作 sgn，定义为

$$
\operatorname{sgn} t= \begin{cases}1 & t>0  \tag{3.19}\\ 0 & t=0 \\ -1 & t<0\end{cases}
$$


该函数的图像如图 3.16 所示。从 (3.19) 可以看出，符号函数仅用于计算一个数的符号。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-049.jpg?height=330&width=630&top_left_y=813&top_left_x=810){width="400"}

图 3.16：符号函数。

### 3.5.6 矩形函数

另一个有用的函数是矩形函数。矩形函数（也称为单位矩形脉冲函数）记作 rect，定义为

$$
\text { rect } t= \begin{cases}1 & -\frac{1}{2} \leq t<\frac{1}{2} \\ 0 & \text { 其他情况 }\end{cases}
$$


该函数的图像如图 3.17 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-049.jpg?height=309&width=314&top_left_y=1264&top_left_x=967){width="400"}


图 3.17：矩形函数。

**例 3.7（用矩形脉冲提取函数的一部分）**  
使用矩形函数提取图 3.18(a) 所示函数 $x$ 的一个周期。

**解** ：我们选择提取 $x(t)$ 在 $-\frac{T}{2}<t \leq \frac{T}{2}$ 区间内的周期。为了提取这个周期，我们需要将 $x$ 与一个在该区间为 1、其他区间为 0 的函数相乘。这样的函数就是 $v(t)=\operatorname{rect}\left(\frac{1}{T} t\right)$，如图 3.18(b) 所示。将 $v$ 与 $x$ 相乘得到的函数如图 3.18(c) 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-050.jpg?height=1049&width=1039&top_left_y=802&top_left_x=434){width="400"}

图 3.18：使用矩形函数提取周期函数 $x$ 的一个周期。(a) 函数 $x$。(b) 时间缩放后的矩形函数 $v$。(c) $x$ 与 $v$ 的乘积。

### 3.5.7 指示函数

在工程中，经常出现函数或序列在其定义域的某个子集上为 1，其余部分为 0 的情况（例如单位阶跃函数、矩形函数、第 8 章后续出现的单位阶跃序列以及第 8 章后续出现的 delta 序列）。指示函数符号为表示此类函数和序列提供了一种简明方法。集合 $A$ 的子集 $S$ 的指示函数记作 $\chi_{S}$，定义为

$$
\chi_{S}(t)= \begin{cases}1 & \text { 如果 } t \in S \\ 0 & \text { 其他情况 }\end{cases}
$$


**例 3.8**  ：一个在 $\mathbb{R}$ 上定义的矩形脉冲，幅值为 1，前沿在 $a$，后沿在 $b$，可以表示为 $\chi_{[a, b]}$。单位阶跃函数（在 $\mathbb{R}$ 上定义）表示为 $\chi_{[0, \infty)}$。单位矩形脉冲（在 $\mathbb{R}$ 上定义）表示为 $\chi_{[-1 / 2,1 / 2)}$。

### 3.5.8 三角函数

另一个有用的基本函数是三角函数（也称为单位三角脉冲函数），记作 tri，定义为

$$
\operatorname{tri} t= \begin{cases}1-2|t| & |t| \leq \frac{1}{2} \\ 0 & \text { 其他情况 }\end{cases}
$$


该函数的图像如图 3.19 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-051.jpg?height=317&width=317&top_left_y=297&top_left_x=967){width="400"}


图 3.19：三角函数。

### 3.5.9 基本正弦函数

在信号与系统的研究中，形式为 $x(t)=\frac{\sin t}{t}$ 的函数经常出现。因此，为了方便，对这一特殊函数给予了一个专门的名称——基本正弦函数。更正式地，基本正弦函数（也称为 sinc 函数）记作 sinc，定义为

$$
\begin{equation*}
\operatorname{sinc} t=\frac{\sin t}{t} . \tag{3.20}
\end{equation*}
$$


"sinc" 这一名称是函数完整拉丁名称 "sinus cardinalis"（基本正弦）的缩写。利用洛必达法则，可以确认 sinc $t$ 在 $t=0$ 时有定义，即 $\operatorname{sinc} 0=1$。

值得注意的是，文献中有时也会使用与上述不同的 sinc 函数定义。特别地，sinc 函数有时定义为

$$
\begin{equation*}
x(t)=\frac{\sin (\pi t)}{\pi t} . \tag{3.21}
\end{equation*}
$$


为了避免可能的混淆，我们将式 (3.21) 定义的函数 $x$ 称为归一化 sinc 函数。作为其他实践的示例，式 (3.20) 的 sinc 函数定义被文献 [8, 9, 14] 使用，而式 (3.21) 的定义被文献 [7, 13, 15] 以及 MATLAB 软件采用。

### 3.5.10 与取整相关的函数

取整有时是一个需要关注的操作。以下介绍几种与取整相关的函数。

**下取整函数**，记作 $\lfloor\cdot\rfloor$，是将实数 $x$ 映射为不大于 $x$ 的最大整数的函数。换句话说，下取整函数将实数向负无穷方向取整为最接近的整数。例如：

$$
\left\lfloor-\frac{1}{2}\right\rfloor=-1, \quad\left\lfloor\frac{1}{2}\right\rfloor=0, \quad \text { 且 } \quad\lfloor 1\rfloor=1
$$


**上取整函数**，记作 $\lceil\cdot\rceil$，是将实数 $x$ 映射为不小于 $x$ 的最小整数的函数。换句话说，上取整函数将实数向正无穷方向取整为最接近的整数。例如：

$$
\left\lceil-\frac{1}{2}\right\rceil=0, \quad\left\lceil\frac{1}{2}\right\rceil=1, \quad \text { 且 } \quad\lceil 1\rceil=1 .
$$


一些常用的与下取整和上取整函数相关的恒等式包括：

$$
\begin{gathered}
\lfloor x+n\rfloor=\lfloor x\rfloor+n \quad \text { 对 } x \in \mathbb{R} \text { 和 } n \in \mathbb{Z} ; \\
\lceil x+n\rceil=\lceil x\rceil+n \quad \text { 对 } x \in \mathbb{R} \text { 和 } n \in \mathbb{Z} ; \\
\lceil x\rceil=-\lfloor-x\rfloor \quad \text { 对 } x \in \mathbb{R} ; \\
\lfloor x\rfloor=-\lceil-x\rceil \quad \text { 对 } x \in \mathbb{R} ; \\
\left\lceil\frac{m}{n}\right\rceil=\left\lfloor\frac{m+n-1}{n}\right\rfloor=\left\lfloor\frac{m-1}{n}\right\rfloor+1 \quad \text { 对 } m, n \in \mathbb{Z} \text { 且 } n>0 ; \quad \text { 以及 } \\
\left\lfloor\frac{m}{n}\right\rfloor=\left\lceil\frac{m-n+1}{n}\right\rceil=\left\lceil\frac{m+1}{n}\right\rceil-1 \quad \text { 对 } m, n \in \mathbb{Z} \text { 且 } n>0
\end{gathered}
$$


**取余函数**，记作 mod，是一个将两个整数 $m$ 和 $n$ 映射为 $m$ 除以 $n$ 后的余数的函数，其中余数定义为始终非负。例如，$\bmod (10,3)=1$，$\bmod (-3,2)=1$，$\bmod (8,2)=0$。取余函数可以用下取整函数表示为：

$$
\bmod (m, n)=m-n\lfloor m / n\rfloor \quad \text { 对 } n, m \in \mathbb{Z} \text { 且 } n \neq 0
$$


### 3.5.11 Delta 函数

在系统理论中，一个具有基础性的重要基本函数是 delta 函数。与其直接定义该函数，不如通过其性质来定义它。特别地，delta 函数（也称为 Dirac delta 函数或单位脉冲函数）记作 $\delta$，定义为满足以下两个性质的函数：

$$
\begin{gather*}
\delta(t)=0 \quad \text { 对 } t \neq 0 \quad \text { 且 }  \tag{3.22a}\\
\int_{-\infty}^{\infty} \delta(t) d t=1 \tag{3.22b}
\end{gather*}
$$


由这些性质可以看出，该函数在原点之外处处为零，在原点处未定义。确实，这是一种特殊的函数。虽然它在除一个点之外的所有位置都为零，但其积分不为零。从技术上讲，delta 函数并不是普通意义下的函数，而是一种称为广义函数的对象。

在图形上，delta 函数表示如图 3.20 所示。由于该函数在原点处取无限值，我们无法绘制其真实数值，因此用一条竖直箭头表示该无限值，同时标示脉冲强度。在图 3.21 中，我们绘制了经过缩放和平移的 delta 函数。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-053.jpg?height=311&width=374&top_left_y=297&top_left_x=532){width="400"}

图 3.20：Delta 函数。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-053.jpg?height=311&width=374&top_left_y=297&top_left_x=1342){width="400"}

图 3.21：缩放和平移后的 delta 函数。

实际上，$\delta$ 函数可以视为一列函数的极限，该序列中的函数是逐渐变窄且变高的脉冲，并且每个脉冲的积分均为 1。通过这种方式观察 $\delta$，可以更深入地理解该函数。以下，我们将考虑将 $\delta$ 函数表示为一列矩形脉冲的极限。

考虑一族矩形脉冲函数，其形式为：

$$
g_{\varepsilon}(t)= \begin{cases}\frac{1}{|\varepsilon|} & |t|<\frac{|\varepsilon|}{2} \\ 0 & \text { 其他情况 }\end{cases}
$$


其中 $\varepsilon$ 为实常数。$g_{\varepsilon}$ 的图像如图 3.22 所示。显然，$g_{\varepsilon}$ 是一个宽度为 $|\varepsilon|$、高度为 $\frac{1}{|\varepsilon|}$、中心在原点的矩形脉冲。可以观察到，随着 $|\varepsilon|$ 减小，脉冲宽度减小而脉冲高度增大。同时，无论 $\varepsilon$ 如何选择，脉冲的面积均为 1（即 $\int_{-\infty}^{\infty} g_{\varepsilon}(t) d t=1$）。因此，$\delta$ 函数可以视为涉及 $g_{\varepsilon}$ 的以下极限：

$$
\delta(t)=\lim _{\varepsilon \rightarrow 0} g_{\varepsilon}(t) .
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-053.jpg?height=327&width=466&top_left_y=724&top_left_x=891){width="400"}

图 3.22：矩形脉冲函数 $g_{\varepsilon}$。

为了帮助可视化这一极限过程，图 3.24 显示了 $g_{\varepsilon}$ 在若干 $\varepsilon$ 值下的图像。从图中可以直观地确认，当 $\varepsilon \rightarrow 0$ 时，$g_{\varepsilon} \rightarrow \delta$。因此，$\delta$ 可视为矩形脉冲的极限情况，其中脉冲宽度趋于无穷小，脉冲高度趋于无限大，同时保证所得函数的积分保持为 1。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-055.jpg?height=536&width=1133&top_left_y=302&top_left_x=545){width="400"}


图 3.24：$d_{\varepsilon}$ 在若干 $\varepsilon$ 值下的图像。

非正式地，也可以将 delta 函数 $\delta$ 看作单位阶跃函数 $u$ 的导数。然而严格来说，$u$ 在 0 处不连续，因此其导数在普通意义下不存在。更准确地说，$\delta$ 是 $u$ 的广义导数。广义导数本质上是导数概念的扩展，即使对于不连续函数也可以良好定义。

delta 函数具有多个重要性质，这些性质直接来源于其在 (3.22) 中的定义。下面给出相关定理。

**定理 3.3（等价性质）**  
对于在点 $t_{0}$ 连续的任意函数 $x$，

$$
\begin{equation*}
x(t) \boldsymbol{\delta}\left(t-t_{0}\right)=x\left(t_{0}\right) \boldsymbol{\delta}\left(t-t_{0}\right) \quad \text { 对所有 } t \tag{3.23}
\end{equation*}
$$


这一结果称为等价性质，如图 3.25 所示。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-056.jpg?height=366&width=1519&top_left_y=286&top_left_x=240){width="400"}


图 3.25：等价性质的图示。(a) 函数 $x$；(b) 平移后的 delta 函数；(c) 两者的乘积。

**证明**：该证明直接来源于 delta 函数仅在单一点非零的事实。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-054.jpg?height=536&width=1133&top_left_y=302&top_left_x=421){width="400"}

图 3.23：$g_{\varepsilon}$ 在若干 $\varepsilon$ 值下的图像。

**定理 3.4（抽取性质）**  
对于在点 $t_{0}$ 连续的任意函数 $x$，

$$
\begin{equation*}
\int_{-\infty}^{\infty} x(t) \delta\left(t-t_{0}\right) d t=x\left(t_{0}\right) \tag{3.24}
\end{equation*}
$$


这一结果称为抽取性质。  
**证明**：由 (3.22b) 可得

$$
\int_{-\infty}^{\infty} \delta\left(t-t_{0}\right) d t=1
$$


将上式两边同时乘以 $x\left(t_{0}\right)$，得到

$$
\int_{-\infty}^{\infty} x\left(t_{0}\right) \delta\left(t-t_{0}\right) d t=x\left(t_{0}\right)
$$


然后利用 (3.23) 中的等价性质，可得

$$
\int_{-\infty}^{\infty} x(t) \delta\left(t-t_{0}\right) d t=x\left(t_{0}\right)
$$


**定理 3.5（缩放性质）**  
对于所有非零实数 $a$，有如下恒等式成立：

$$
\begin{equation*}
\delta(a t)=\frac{1}{|a|} \delta(t) \tag{3.25}
\end{equation*}
$$


该恒等式有时称为 delta 函数的缩放性质。  
**证明**：考虑一族高斯函数，其形式为

$$
d_{\varepsilon}(t)=\frac{1}{|\varepsilon| \sqrt{\pi}} e^{-(t / \varepsilon)^{2}} .
$$


我们可以观察到 $d_{\varepsilon}$ 的几个性质，这些性质与 $\varepsilon$ 的取值无关。首先，$d_{\varepsilon}$ 在原点取得最大值 $\frac{1}{|\varepsilon| \sqrt{\pi}}$，并随着距离原点的增大以二次指数速度衰减。其次，随着 $|\varepsilon|$ 减小，$d_{\varepsilon}$ 在非极小值区间的长度减小。第三，$d_{\varepsilon}$ 满足

$$
\int_{-\infty}^{\infty} d_{\varepsilon}(t) d t=1
$$


因此，$\delta$ 函数可以视为 $d_{\varepsilon}$ 的极限情况。特别地，有

$$
\begin{aligned}
\delta(t) & =\lim _{\varepsilon \rightarrow 0} d_{\varepsilon}(t) \\
& =\lim _{\varepsilon \rightarrow 0} \frac{1}{|\varepsilon| \sqrt{\pi}} e^{-(t / \varepsilon)^{2}} .
\end{aligned}
$$


为了可视化，图 3.24 显示了 $d_{\varepsilon}$ 在若干 $\varepsilon$ 值下的图像。由图可见，当 $\varepsilon \rightarrow 0$ 时，$d_{\varepsilon} \rightarrow \delta$。在上式中将 $t$ 替换为 $a t$，得到

$$
\delta(a t)=\lim _{\varepsilon \rightarrow 0} \frac{1}{|\varepsilon| \sqrt{\pi}} e^{-(a t / \varepsilon)^{2}} .
$$


进行变量替换，令 $\varepsilon^{\prime}=\varepsilon / a$，则 $\varepsilon=\varepsilon^{\prime} a$，$a=\varepsilon / \varepsilon^{\prime}$。应用变量替换，得到

$$
\begin{aligned}
\delta(a t) & =\lim _{\varepsilon^{\prime} \rightarrow 0} \frac{1}{\left|\varepsilon^{\prime} a\right| \sqrt{\pi}} e^{-\left(a t /\left[\varepsilon^{\prime} a\right]\right)^{2}} \\
& =\lim _{\varepsilon^{\prime} \rightarrow 0} \frac{1}{\left|\varepsilon^{\prime}\right||a| \sqrt{\pi}} e^{-\left(t / \varepsilon^{\prime}\right)^{2}} \\
& =\lim _{\varepsilon^{\prime} \rightarrow 0} \frac{1}{|a|} \frac{1}{\left|\varepsilon^{\prime}\right| \sqrt{\pi}} e^{-\left(t / \varepsilon^{\prime}\right)^{2}} \\
& =\frac{1}{|a|} \lim _{\varepsilon^{\prime} \rightarrow 0} \frac{1}{\left|\varepsilon^{\prime}\right| \sqrt{\pi}} e^{-\left(t / \varepsilon^{\prime}\right)^{2}} \\
& =\frac{1}{|a|} \delta(t)
\end{aligned}
$$


因此，(3.25) 得证。

**定理 3.6（偶性）**  
$\delta$ 函数满足

$$
\delta(t)=\delta(-t) .
$$


**证明**：由 $\delta$ 函数的定义可直接得出。

如后续将看到的，$\delta$ 的等价性质、抽取性质、缩放性质及偶性都是非常有用的。最后，由 $\delta$ 的定义可知，在不包含原点的任意区间上积分该函数，其值为零。

**例 3.9（抽取性质示例）**  
计算积分

$$
\int_{-\infty}^{\infty} \sin (t) \delta\left(t-\frac{\pi}{4}\right) d t
$$


**解**：利用 delta 函数的抽取性质，有

$$
\begin{aligned}
\int_{-\infty}^{\infty} \sin (t) \delta\left(t-\frac{\pi}{4}\right) d t & =\sin \left(\frac{\pi}{4}\right) \\
& =\frac{1}{\sqrt{2}}
\end{aligned}
$$


**例 3.10（抽取性质示例）**  
计算积分

$$
\int_{-\infty}^{\infty} \sin (2 \pi t) \delta(4 t-1) d t
$$


**解**：首先观察，该积分不完全符合 (3.24) 的形式，因此需要进行变量替换。令 $\tau=4 t$，则 $t=\frac{1}{4} \tau$，$d t=\frac{1}{4} d \tau$。进行变量替换，得到

$$
\begin{aligned}
\int_{-\infty}^{\infty} \sin (2 \pi t) \delta(4 t-1) d t & =\int_{-\infty}^{\infty} \frac{1}{4} \sin \left[2 \pi\left(\frac{1}{4} \tau\right)\right] \delta(\tau-1) d \tau \\
& =\int_{-\infty}^{\infty} \frac{1}{4} \sin \left(\frac{\pi}{2} \tau\right) \delta(\tau-1) d \tau
\end{aligned}
$$


此时积分形式满足要求，可使用 delta 函数的抽取性质，得到

$$
\begin{aligned}
\int_{-\infty}^{\infty} \sin (2 \pi t) \delta(4 t-1) d t & =\left.\left[\frac{1}{4} \sin \left(\frac{\pi}{2} \tau\right)\right]\right|_{\tau=1} \\
& =\frac{1}{4} \sin \left(\frac{\pi}{2}\right) \\
& =\frac{1}{4}
\end{aligned}
$$


**例 3.11**  
计算积分 $\int_{-\infty}^{t}\left(\tau^{2}+1\right) \delta(\tau-2) d \tau$。  
**解**：利用 (3.23) 给出的 delta 函数等价性质，可得

$$
\begin{aligned}
\int_{-\infty}^{t}\left(\tau^{2}+1\right) \delta(\tau-2) d \tau & =\int_{-\infty}^{t}\left(2^{2}+1\right) \delta(\tau-2) d \tau \\
& =5 \int_{-\infty}^{t} \delta(\tau-2) d \tau
\end{aligned}
$$


由 delta 函数的定义性质 (3.22)，可知

$$
\begin{aligned}
\int_{-\infty}^{t} \delta(\tau-2) d \tau & = \begin{cases}1 & t \geq 2 \\ 0 & t<2\end{cases} \\
& =u(t-2)
\end{aligned}
$$


因此，得出结论：

$$
\begin{aligned}
\int_{-\infty}^{t}\left(\tau^{2}+1\right) \delta(\tau-2) d \tau & = \begin{cases}5 & t \geq 2 \\ 0 & t<2\end{cases} \\
& =5 u(t-2)
\end{aligned}
$$


## 3.6 用基本函数表示任意函数

在前面的章节中，我们介绍了若干基本函数。在信号分析中，通常希望将任意函数表示为基本函数的组合。下面讨论如何利用单位阶跃函数 $u$ 来得到函数的另一种表示。

**例 3.12（矩形函数）**  
证明矩形函数可以表示为

$$
\operatorname{rect} t=u\left(t+\frac{1}{2}\right)-u\left(t-\frac{1}{2}\right)
$$


**解**：利用 $u$ 的定义及时间平移，有

$$
u\left(t+\frac{1}{2}\right)= \begin{cases}1 & t \geq-\frac{1}{2} \\ 0 & \text { otherwise }\end{cases} \quad
u\left(t-\frac{1}{2}\right)= \begin{cases}1 & t \geq \frac{1}{2} \\ 0 & \text { otherwise }\end{cases}.
$$


因此

$$
\begin{aligned}
u\left(t+\frac{1}{2}\right)-u\left(t-\frac{1}{2}\right) & = \begin{cases}0-0 & t<-\frac{1}{2} \\
1-0 & -\frac{1}{2} \leq t<\frac{1}{2} \\
1-1 & t \geq \frac{1}{2}\end{cases} \\
& = \begin{cases}0 & t<-\frac{1}{2} \\
1 & -\frac{1}{2} \leq t<\frac{1}{2} \\
0 & t \geq \frac{1}{2}\end{cases} \\
& = \begin{cases}1 & -\frac{1}{2} \leq t<\frac{1}{2} \\
0 & \text { otherwise }\end{cases} \\
& =\text { rect } t .
\end{aligned}
$$


图 3.26 给出了图示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-058.jpg?height=420&width=1362&top_left_y=283&top_left_x=316){width="400"}


Figure 3.26: Representing the rectangular function using unit-step functions. (a) A shifted unit-step function, (b) another shifted unit-step function, and (c) their difference (which is the rectangular function).

推广到任意矩形脉冲：高度为 1，起始边 $a$，结束边 $b$：

$$
x(t)=u(t-a)-u(t-b)=\begin{cases}1 & a \le t < b \\ 0 & \text{otherwise}\end{cases}.
$$


---

**例 3.13**（分段线性函数）。考虑如下分段线性函数 $x$：

$$
x(t)= \begin{cases}t & 0 \leq t<1 \\ 1 & 1 \leq t<2 \\ 3-t & 2 \leq t<3 \\ 0 & \text { otherwise }\end{cases}
$$


求一个适用于所有 $t$ 的单一表达式（使用单位阶跃函数表示）。

**解答**：$x$ 的图像如图 3.27(a) 所示。我们分别考虑分段函数的每一段：

- 第一段（$0 \leq t<1$）可表示为：

$$
v_{1}(t)=t[u(t)-u(t-1)] .
$$


该函数绘制如图 3.27(b)。

- 第二段（$1 \leq t<2$）可表示为：

$$
v_{2}(t)=u(t-1)-u(t-2) .
$$


该函数绘制如图 3.27(c)。

- 第三段（$2 \leq t<3$）可表示为：

$$
v_{3}(t)=(3-t)[u(t-2)-u(t-3)] .
$$


该函数绘制如图 3.27(d)。

现在注意到：

$$
x=v_{1}+v_{2}+v_{3} .
$$


即：

$$
\begin{aligned}
x(t) & =v_{1}(t)+v_{2}(t)+v_{3}(t) \\
& =t[u(t)-u(t-1)]+[u(t-1)-u(t-2)]+(3-t)[u(t-2)-u(t-3)] \\
& =t u(t)+(1-t) u(t-1)+(3-t-1) u(t-2)+(t-3) u(t-3) \\
& =t u(t)+(1-t) u(t-1)+(2-t) u(t-2)+(t-3) u(t-3)
\end{aligned}
$$


因此，我们得到了一个适用于所有 $t$ 的单一表达式。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-059.jpg?height=612&width=860&top_left_y=291&top_left_x=691){width="400"}
  

图 3.27：使用单位阶跃函数表示分段线性函数。(a) 函数 $x$；(b)、(c) 和 (d) 三个函数，它们的和为 $x$。

---

**例 3.14**（分段多项式函数）。考虑如下分段多项式函数 $x$：

$$
x(t)= \begin{cases}1 & 0 \leq t<1 \\ (t-2)^{2} & 1 \leq t<3 \\ 4-t & 3 \leq t<4 \\ 0 & \text { otherwise }\end{cases}
$$


求一个适用于所有 $t$ 的单一表达式（使用单位阶跃函数表示）。

**解**：$x$ 的图像如图 3.28(a) 所示。我们分别考虑分段函数的每一段：

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-060.jpg?height=620&width=936&top_left_y=286&top_left_x=529){width="400"}
  

图 3.28：使用单位阶跃函数表示分段多项式函数。(a) 函数 $x$；(b)、(c) 和 (d) 三个函数，其和为 $x$。

- 第一段（$0 \leq t<1$）可表示为：

$$
v_{1}(t)=u(t)-u(t-1) .
$$


该函数绘制如图 3.28(b)。

- 第二段（$1 \leq t<3$）可表示为：

$$
v_{2}(t)=(t-2)^{2}[u(t-1)-u(t-3)]=\left(t^{2}-4 t+4\right)[u(t-1)-u(t-3)] .
$$


该函数绘制如图 3.28(c)。

- 第三段（$3 \leq t<4$）可表示为：

$$
v_{3}(t)=(4-t)[u(t-3)-u(t-4)] .
$$


该函数绘制如图 3.28(d)。

现在观察到： $$ x=v_{1}+v_{2}+v_{3} .$$ 即：

$$
\begin{aligned}
x(t) & =v_{1}(t)+v_{2}(t)+v_{3}(t) \\
& =[u(t)-u(t-1)]+\left(t^{2}-4 t+4\right)[u(t-1)-u(t-3)]+(4-t)[u(t-3)-u(t-4)] \\
& =u(t)+\left(t^{2}-4 t+4-1\right) u(t-1)+\left(4-t-\left[t^{2}-4 t+4\right]\right) u(t-3)-(4-t) u(t-4) \\
& =u(t)+\left(t^{2}-4 t+3\right) u(t-1)+\left(-t^{2}+3 t\right) u(t-3)+(t-4) u(t-4)
\end{aligned}
$$


因此，我们得到了一个适用于所有 $t$ 的单一表达式。

---

**例 3.15**（周期函数）。考虑图 3.29(a) 所示的周期函数 $x$。求一个适用于所有 $t$ 的 $x(t)$ 的单一表达式（涉及单位阶跃函数）。

**解答**。我们首先求 $x$ 的一个周期的表达式。将此表达式记为 $v$。则可以写为：

$$
v(t)=u\left(t+\frac{1}{2}\right)-u\left(t-\frac{1}{2}\right)。
$$


该函数绘制如图 3.29(b) 所示。为了得到周期函数 $x$，我们必须每 2 个单位重复 $v$（因为 $x$ 的周期为 2）。这可以通过添加无限多个平移后的 $v$ 副本来实现，即：

$$
\begin{aligned}
x(t) & =\sum_{k=-\infty}^{\infty} v(t-2 k) \\
& =\sum_{k=-\infty}^{\infty}\left[u\left(t+\frac{1}{2}-2 k\right)-u\left(t-\frac{1}{2}-2 k\right)\right]。
\end{aligned}
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-060.jpg?height=315&width=1090&top_left_y=1042&top_left_x=375){width="400"}
  
图 3.29：使用单位阶跃函数表示周期函数。(a) 周期函数 $x$；(b) 一个由 $x$ 的单个周期组成的函数 $\nu$。

因此，我们得到了一个适用于所有 $t$ 的 $x$ 的单一表达式。

## 3.7 连续时间系统

假设我们有一个输入为 $x$、输出为 $y$ 的系统。这样的系统可以用下式在数学上描述：

$$
\begin{equation*}
y=\mathcal{H} x, \tag{3.26}
\end{equation*}
$$


其中 $\mathcal{H}$ 是表示系统的算子（即变换）。算子 $\mathcal{H}$ 将输入函数 $x$ 映射为输出函数 $y$。另外，我们有时也使用如下符号表示关系 (3.26)：

$$
x \xrightarrow{\mathcal{H}} y。
$$


此外，如果上下文清楚，算子 $\mathcal{H}$ 常常可以省略，从而得到简化的表示法：

$$
x \rightarrow y。
$$


注意，符号“$\rightarrow$”和“$=$”的意义完全不同。例如，符号 $x \rightarrow y$ 并不意味着 $x=y$。符号“$\rightarrow$”应读作“产生”（而非“等于”）。也就是说，“$x \rightarrow y$”应理解为“输入 $x$ 产生输出 $y$”。

### 3.7.1 框图表示

假设我们有一个由算子 $\mathcal{H}$ 定义的系统，其输入为 $x$，输出为 $y$。通常，我们使用如图 3.30 所示的框图来表示这样的系统。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-061.jpg?height=133&width=412&top_left_y=302&top_left_x=915){width="400"}
  

图 3.30：系统的框图。

### 3.7.2 系统的互连

系统可以通过多种方式互连。两种基本互连方式如图 3.31 所示。第一种互连方式，如图 3.31(a) 所示，称为串联或级联互连。在此情况下，整体系统由下式定义：

$$
y = \mathcal{H}_2 \mathcal{H}_1 x . \tag{3.27}
$$


第二种互连方式，如图 3.31(b) 所示，称为并联互连。在此情况下，整体系统由下式定义：

$$
y = \mathcal{H}_1 x + \mathcal{H}_2 x . \tag{3.28}
$$


除非已知算子 $\mathcal{H}_1$ 和 $\mathcal{H}_2$ 的具体定义，否则 (3.27) 和 (3.28) 中的系统方程无法进一步简化。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-061.jpg?height=282&width=1238&top_left_y=534&top_left_x=497){width="400"}
  

图 3.31：系统的互连。(a) 系统 $\mathcal{H}_{1}$ 与 $\mathcal{H}_{2}$ 的串联互连；(b) 系统 $\mathcal{H}_{1}$ 与 $\mathcal{H}_{2}$ 的并联互连。

## 3.8 系统的性质

在下文中，我们将定义系统可能具有的一些重要性质。这些性质对于系统的分类以及特性描述非常有用。

### 3.8.1 无记忆性

如果对于每个实常数 $t_{0}$，系统 $\mathfrak{H}$ 的输出 $\mathfrak{H} x\left(t_{0}\right)$ 不依赖于某些 $t \neq t_{0}$ 时的输入 $x(t)$，则称该系统为**无记忆系统**。换句话说，无记忆系统的输出在任意时刻的值仅依赖于输入在同一时刻的值。一个不是无记忆的系统被称为**有记忆系统**。虽然无记忆系统结构简单，但其灵活性有限，因为当前输出值不能依赖输入的过去或未来值。

**例 3.16（理想放大器）**。判断系统 $\mathcal{H}$ 是否为无记忆系统，其中

$$
\mathcal{H} x(t)=A x(t)
$$


且 $A$ 是非零实常数。

**解答**。考虑在任意点 $t=t_{0}$ 计算 $\mathcal{H} x(t)$。我们有：

$$
\mathcal{H} x\left(t_{0}\right)=A x\left(t_{0}\right)
$$


因此，$\mathcal{H} x\left(t_{0}\right)$ 仅依赖 $t=t_{0}$ 时的 $x(t)$。所以，该系统是无记忆的。

**例 3.17（理想积分器）**。判断系统 $\mathcal{H}$ 是否为无记忆系统，其中

$$
\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) d \tau
$$


**解答**。考虑在任意点 $t=t_{0}$ 计算 $\mathcal{H} x(t)$。我们有：

$$
\mathcal{H} x\left(t_{0}\right)=\int_{-\infty}^{t_{0}} x(\tau) d \tau
$$


因此，$\mathcal{H} x\left(t_{0}\right)$ 依赖于 $-\infty < t \le t_{0}$ 时的 $x(t)$。所以 $\mathcal{H} x\left(t_{0}\right)$ 依赖于某些 $t \neq t_{0}$ 的 $x(t)$（例如 $t_{0}-1$）。因此，该系统是有记忆的（即不是无记忆系统）。

**例 3.18**。判断系统 $\mathcal{H}$ 是否为无记忆系统，其中

$$
\mathcal{H} x(t)=e^{x(t)}
$$


**解答**。考虑在任意点 $t=t_{0}$ 计算 $\mathcal{H} x(t)$。我们有：

$$
\mathcal{H} x\left(t_{0}\right)=e^{x\left(t_{0}\right)}
$$


因此，$\mathcal{H} x\left(t_{0}\right)$ 仅依赖 $t=t_{0}$ 时的 $x(t)$。所以，该系统是无记忆的。

**例 3.19**。判断系统 $\mathcal{H}$ 是否为无记忆系统，其中

$$
\mathcal{H} x(t)=\operatorname{Odd}(x)(t)=\frac{1}{2}[x(t)-x(-t)]
$$


**解答**。考虑在任意点 $t=t_{0}$ 计算 $\mathcal{H} x(t)$。我们有：

$$
\mathcal{H} x\left(t_{0}\right)=\frac{1}{2}\left[x\left(t_{0}\right)-x\left(-t_{0}\right)\right]
$$


因此，对于任意 $x$ 和任意实数 $t_{0}$，$\mathcal{H} x\left(t_{0}\right)$ 依赖于 $x(t)$ 在 $t=t_{0}$ 和 $t=-t_{0}$ 的值。由于 $\mathcal{H} x\left(t_{0}\right)$ 依赖于某些 $t \neq t_{0}$ 的 $x(t)$，该系统是有记忆的（即不是无记忆系统）。


### 3.8.2 因果性（Causality）

如果一个系统 $\mathcal{H}$ 满足以下条件：对于任意实常数 $t_0$，$\mathcal{H} x(t_0)$ 不依赖于 $x(t)$ 对于某些 $t>t_0$ 的值，则称该系统是因果的（causal）。换句话说，因果系统的输出在任意时刻仅依赖于输入在同一时刻或之前的值（不能依赖未来的值）。无存储系统一定是因果的，但反之不一定成立。

如果自变量表示时间，则系统必须是因果的才能在物理上可实现（即可以构建）。非因果系统在某些场合仍然有用，因为自变量不必总是表示时间。

**例 3.20（理想积分器）**  
判断系统 $\mathcal{H}$ 是否因果，其中

$$
\mathcal{H} x(t) = \int_{-\infty}^{t} x(\tau) d\tau
$$


**解答**  
对于任意 $t_0$：

$$
\mathcal{H} x(t_0) = \int_{-\infty}^{t_0} x(\tau) d\tau
$$


输出仅依赖于 $t \le t_0$ 的输入值，因此系统是因果的。

**例 3.21**  
判断系统 $\mathcal{H}$ 是否因果，其中

$$
\mathcal{H} x(t) = \int_{t-1}^{t+1} x(\tau) d\tau
$$


**解答**  
对于任意 $t_0$：

$$
\mathcal{H} x(t_0) = \int_{t_0-1}^{t_0+1} x(\tau) d\tau
$$


输出依赖于 $t_0-1 \le t \le t_0+1$ 的输入值，其中一些值大于 $t_0$（例如 $t_0+1$），因此系统不是因果的。

**例 3.22**  
判断系统 $\mathcal{H}$ 是否因果，其中

$$
\mathcal{H} x(t) = (t+1) e^{x(t-1)}
$$


**解答**  
对于任意 $t_0$：

$$
\mathcal{H} x(t_0) = (t_0+1) e^{x(t_0-1)}
$$


输出仅依赖于 $t=t_0-1 \le t_0$ 的输入值，因此系统是因果的。

**例 3.23**  
判断系统 $\mathcal{H}$ 是否因果，其中

$$
\mathcal{H} x(t) = \operatorname{Odd}(x)(t) = \frac{1}{2}[x(t) - x(-t)]
$$


**解答**。对于任意 $x$ 和任意实常数 $t_{0}$，$\mathcal{H} x\left(t_{0}\right)$ 仅依赖于 $t=t_{0}$ 和 $t=-t_{0}$ 时的 $x(t)$。假设 $t_{0}=-1$。在这种情况下，$\mathcal{H} x\left(t_{0}\right)$（即 $\mathcal{H} x(-1)$）依赖于 $t=1$ 时的 $x(t)$，但 $t=1>t_{0}$。因此，该系统**不是因果系统**。

### 3.8.3 可逆性

系统 $\mathcal{H}$ 的逆系统是一个系统 $\mathcal{G}$，使得对每一个函数 $x$ 都有

$$
\mathcal{G} \mathcal{H} x=x
$$


（即，由 $\mathfrak{H}$ 和 $\mathcal{G}$ 串联形成的系统，其输入与输出相等）。换句话说，$\mathcal{H}$ 的作用被 $\mathcal{G}$ 抵消。符号上，$\mathcal{H}$ 的逆系统记为 $\mathcal{H}^{-1}$。系统与其逆系统的关系如图 3.32 所示。由于 $\mathcal{H}$ 与 $\mathcal{H}^{-1}$ 的关系（即 $\mathcal{H}^{-1}$ 抵消 $\mathcal{H}$），图中的两个系统必须是等效的。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-064.jpg?height=214&width=1087&top_left_y=289&top_left_x=456){width="400"}
  

图 3.32：等效系统（假设 $\mathfrak{H}^{-1}$ 存在）。(a) 第一系统；(b) 第二系统。

如果一个系统 $\mathscr{H}$ 存在对应的逆系统（即其逆系统存在），则称该系统是可逆的。一个可逆系统必须满足其输入 $x$ 可以总是从输出 $\mathcal{H} x$ 唯一确定。由此定义可知，可逆系统对于任意两个不同的输入，总会产生不同的输出。

要证明一个系统是可逆的，只需找到它的逆系统即可。要证明一个系统不可逆，只需找到该系统的两个不同输入导致相同输出即可。在实际应用中，可逆系统很有用，因为其作用可以被撤销。

**例 3.24**. 判定系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(t)=x\left(t-t_{0}\right)
$$


且 $t_{0}$ 为实常数。  
解：设 $y=\mathcal{H} x$。将 $t+t_{0}$ 代入 $y(t)=x\left(t-t_{0}\right)$，得到

$$
\begin{aligned}
y\left(t+t_{0}\right) & =x\left(t+t_{0}-t_{0}\right) \\
& =x(t)
\end{aligned}
$$


因此，我们得出

$$
x(t)=y\left(t+t_{0}\right) .
$$


这正是逆系统 $\mathcal{H}^{-1}$ 的方程。具体地，我们有

$$
x(t)=\mathcal{H}^{-1} y(t)
$$


其中

$$
\mathcal{H}^{-1} y(t)=y\left(t+t_{0}\right) .
$$


因此，我们找到了 $\mathcal{H}^{-1}$。所以系统 $\mathcal{H}$ 是可逆的。

**例 3.25**. 判定系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(t)=\sin [x(t)] .
$$


解：考虑输入形式为 $x(t)=2 \pi k$，其中 $k$ 为任意整数。该输入下的系统响应为

$$
\begin{aligned}
\mathcal{H} x(t) & =\sin [x(t)] \\
& =\sin (2 \pi k) \\
& =0
\end{aligned}
$$


因此，我们找到了无限多个不同输入（即 $x(t)=2 \pi k$，$k=0, \pm 1, \pm 2, \ldots$），它们都产生相同输出。因此，该系统不可逆。

**例 3.26**. 判定系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(t)=3 x(3 t+3)
$$


解：设 $y=\mathcal{H} x$。根据 $\mathcal{H}$ 的定义，可以写作

$$
\begin{aligned}
& y(t)=3 x(3 t+3) \\
\Rightarrow \quad & y\left(\frac{1}{3} t-1\right)=3 x(t) \\
\Rightarrow \quad & x(t)=\frac{1}{3} y\left(\frac{1}{3} t-1\right)
\end{aligned}
$$


换句话说，$\mathcal{H}^{-1}$ 为 $\mathcal{H}^{-1} y(t)=\frac{1}{3} y\left(\frac{1}{3} t-1\right)$。由于我们已经找到了 $\mathcal{H}^{-1}$，所以 $\mathcal{H}^{-1}$ 存在。因此系统 $\mathscr{H}$ 是可逆的。

示例 3.27. 判定系统 $\mathcal{H}$ 是否可逆，其中

$$
\mathcal{H} x(t)=\operatorname{Odd}(x)(t)=\frac{1}{2}[x(t)-x(-t)] .
$$


解：考虑输入 $x$ 形式为

$$
x(t)=\alpha
$$


其中 $\alpha$ 为实常数。系统响应为

$$
\begin{aligned}
\mathcal{H} x(t) & =\frac{1}{2}[x(t)-x(-t)] \\
& =\frac{1}{2}(\alpha-\alpha) \\
& =0
\end{aligned}
$$


因此，任何常数输入都会产生相同的零输出。这意味着不同输入可能产生相同输出。因此，该系统不可逆。

### 3.8.4 有界输入有界输出（BIBO）稳定性

尽管稳定性可以用多种方式定义，但在系统理论中，我们通常最关心的是有界输入有界输出（BIBO）稳定性。

如果对于每一个有界函数 $x$，系统 $\mathcal{H}$ 的输出 $\mathcal{H} x$ 也是有界的（即 $|x(t)|<\infty$ 对所有 $t$ 都成立，则 $|\mathcal{H}(x(t))|<\infty$ 对所有 $t$ 也成立），则称系统 $\mathcal{H}$ 是 BIBO 稳定的。换句话说，BIBO 稳定系统保证只要输入是有界的，其输出也始终是有界的。

要证明一个系统是 BIBO 稳定的，我们必须展示每一个有界输入都会产生有界输出。要证明一个系统不是 BIBO 稳定的，我们只需找到一个反例（即一个有界输入导致输出无界）。在尝试证明系统 BIBO 稳定时，三角不等式（F.16）通常非常有用。

在实际意义上，BIBO 稳定系统的行为良好：只要系统输入在任意时刻保持有限，输出也将在任意时刻保持有限。通常，非 BIBO 稳定的系统会带来严重的安全问题。例如，一个便携式音乐播放器，如果电池输入为 3.7 伏特，而耳机输出为 $\infty$ 伏特，将导致一名人体瞬间蒸发（可能还会伴随一场巨大的诉讼）。

**例 3.28（平方器）**  
确定系统 $\mathfrak{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(t)=x^{2}(t)
$$


**解答**  
假设输入 $x$ 是有界的，即对所有 $t$：

$$
|x(t)| \leq A
$$


其中 $A$ 是有限的实常数。对不等式两边平方，得到：

$$
|x(t)|^{2} \leq A^{2}
$$


交换左侧的不等式中的平方与绝对值运算顺序，可得：

$$
\left|x^{2}(t)\right| \leq A^{2}
$$


由于 $\mathcal{H} x(t)=x^{2}(t)$，我们可以写成：

$$
|\mathcal{H} x(t)| \leq A^{2}
$$


由于 $A$ 有限，因此 $A^{2}$ 也是有限的。因此，$\mathcal{H} x$ 是有界的（即 $|\mathcal{H} x(t)| \leq A^{2}<\infty$ 对所有 $t$ 成立）。因此，该系统是 BIBO 稳定的。

**例 3.29（理想积分器）**  
确定系统 $\mathfrak{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) d \tau
$$


**解答**  
假设我们选择输入 $x=u$（其中 $u$ 表示单位阶跃函数）。显然，$u$ 是有界的（即 $|u(t)| \leq 1$ 对所有 $t$ 成立）。计算该输入的响应 $\mathcal{H} x$：

$$
\begin{aligned}
\mathcal{H} x(t) & =\int_{-\infty}^{t} u(\tau) d \tau \\ 
& =\int_{0}^{t} d \tau \\ 
& =\left.[\tau]\right|_{0} ^{t} \\ 
& =t
\end{aligned}
$$


然而，从结果可见，当 $t \rightarrow \infty$ 时，$\mathcal{H} x(t) \rightarrow \infty$。因此，对于有界输入 $x$，输出 $\mathcal{H} x$ 是无界的。因此，该系统不是 BIBO 稳定的。

**例 3.30**  
确定系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(t)=\operatorname{Odd}(x)(t)=\frac{1}{2}[x(t)-x(-t)] .
$$


**解答**  
假设 $x$ 是有界的，则 $x(-t)$ 也是有界的。由于两个有界函数的差仍然是有界的，$x(t)-x(-t)$ 是有界的。将有界函数乘以有限常数仍然得到有界结果。因此，函数 $\frac{1}{2}[x(t)-x(-t)]$ 是有界的。因此，$\mathcal{H} x(t)$ 是有界的。由于有界输入必须产生有界输出，该系统是 BIBO 稳定的。

**例 3.31（理想微分器）**  
确定系统 $\mathcal{H}$ 是否 BIBO 稳定，其中

$$
\mathcal{H} x(t)=\mathcal{D} x(t)
$$


且 $\mathcal{D}$ 表示求导算子。

**解答**  
考虑输入 $x(t)=\sin \left(t^{2}\right)$。显然，$x$ 是有界的，因为正弦函数是有界的。特别地，对所有实数 $t$，$|x(t)| \leq 1$。现在考虑系统对输入 $x$ 的响应：

$$
\begin{aligned}
\mathcal{H} x(t) & =\mathcal{D} x(t) \\ 
& =\mathcal{D}\left\{\sin \left(t^{2}\right)\right\}(t) \\ 
& =2 t \cos \left(t^{2}\right) .
\end{aligned}
$$


显然，$\mathcal{H} x$ 是无界的，因为 $|\mathcal{H} x(t)|$ 随着 $|t| \rightarrow \infty$ 无界增长。因此，对于某些有界输入，输出不是有界的。因此，该系统不是 BIBO 稳定的。
### 3.8.5 时间不变性

如果对于每一个函数 $x$ 和每一个实数 $t_{0}$，系统 $\mathcal{H}$ 满足以下条件：

$$
\mathcal{H} x\left(t-t_{0}\right)=\mathcal{H} x^{\prime}(t) \quad \text{对所有 } t \text{ 成立，其中 } x^{\prime}(t)=x\left(t-t_{0}\right)
$$


则称系统 $\mathcal{H}$ 为时间不变（TI）（或移位不变（SI））（即 $\mathcal{H}$ 与时间平移算子可交换）。换句话说，如果输入函数发生时间平移（提前或延迟），输出函数也会发生相同的时间平移，则系统是时间不变的。非时间不变系统称为时间可变（或移位可变）系统。实际上，时间不变意味着图 3.33 中的两个系统是等价的，其中 $\mathcal{S}_{t_{0}}$ 表示对函数施加 $t_{0}$ 的时间平移算子（即 $\mathcal{S}_{t_{0}} x(t)=x(t-t_{0})$）。

简而言之，时间不变系统的行为随时间不发生变化。实际上，与时间可变系统相比，时间不变系统更易于设计和分析，因为其行为不会随时间变化。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-067.jpg?height=209&width=1084&top_left_y=291&top_left_x=583){width="400"}
  
图 3.33：如果 $\mathcal{H}$ 是时间不变的（即 $\mathcal{H}$ 与 $\mathcal{S}_{t_{0}}$ 可交换），两个系统是等价的。(a) 先将输入平移 $t_{0}$ 再施加 $\mathcal{H}$（即 $y=\mathcal{H} \mathcal{S}_{t_{0}} x$）；(b) 先施加 $\mathcal{H}$ 再平移 $t_{0}$（即 $y=\mathcal{S}_{t_{0}} \mathcal{H}(x)$）。

**例 3.32**  
确定系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(t)=\sin [x(t)] .
$$


**解答**  
设 $x^{\prime}(t)=x\left(t-t_{0}\right)$，其中 $t_{0}$ 是任意实常数。根据 $\mathcal{H}$ 的定义，可以得到：

$$
\begin{aligned}
\mathcal{H} x\left(t-t_{0}\right) & =\sin \left[x\left(t-t_{0}\right)\right], \\ 
\mathcal{H} x^{\prime}(t) & =\sin \left[x^{\prime}(t)\right] \\ 
& =\sin \left[x\left(t-t_{0}\right)\right]
\end{aligned}
$$


由于 $\mathcal{H} x\left(t-t_{0}\right)=\mathcal{H} x^{\prime}(t)$ 对所有 $x$ 和 $t_{0}$ 成立，因此该系统是时间不变的。

**例 3.33**  
确定系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(t)=t x(t)
$$


**解答**  
设 $x^{\prime}(t)=x\left(t-t_{0}\right)$，其中 $t_{0}$ 是任意实常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
\mathcal{H} x\left(t-t_{0}\right) & =\left(t-t_{0}\right) x\left(t-t_{0}\right), \\ 
\mathcal{H} x^{\prime}(t) & =t x^{\prime}(t) \\ 
& =t x\left(t-t_{0}\right)
\end{aligned}
$$


由于 $\mathcal{H} x\left(t-t_{0}\right)=\mathcal{H} x^{\prime}(t)$ 对所有 $x$ 和 $t_{0}$ 不成立，因此该系统不是时间不变的（即系统是时间可变的）。

**例 3.34**  
确定系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(t)=\sum_{k=-10}^{10} x(t-k)
$$


**解答**  
设 $x^{\prime}(t)=x\left(t-t_{0}\right)$，其中 $t_{0}$ 是任意实常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
\mathcal{H} x\left(t-t_{0}\right) & =\sum_{k=-10}^{10} x\left(t-t_{0}-k\right), \\ 
\mathcal{H} x^{\prime}(t) & =\sum_{k=-10}^{10} x^{\prime}(t-k) \\ 
& =\sum_{k=-10}^{10} x\left(t-k-t_{0}\right) \\ 
& =\sum_{k=-10}^{10} x\left(t-t_{0}-k\right)
\end{aligned}
$$


由于 $\mathcal{H}\left(x\left(t-t_{0}\right)\right)=\mathcal{H} x^{\prime}(t)$ 对所有 $x$ 和 $t_{0}$ 成立，因此该系统是时间不变的。

**例 3.35**  
确定系统 $\mathcal{H}$ 是否时间不变，其中

$$
\mathcal{H} x(t)=\operatorname{Odd}(x)(t)=\frac{1}{2}[x(t)-x(-t)] .
$$


**解答**  
设 $x^{\prime}(t)=x\left(t-t_{0}\right)$，其中 $t_{0}$ 是任意实常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
\mathcal{H} x\left(t-t_{0}\right) & =\frac{1}{2}\left[x\left(t-t_{0}\right)-x\left(-\left(t-t_{0}\right)\right)\right] \\ 
& =\frac{1}{2}\left[x\left(t-t_{0}\right)-x\left(-t+t_{0}\right)\right], \\ 
\mathcal{H} x^{\prime}(t) & =\frac{1}{2}\left[x^{\prime}(t)-x^{\prime}(-t)\right] \\ 
& =\frac{1}{2}\left[x\left(t-t_{0}\right)-x\left(-t-t_{0}\right)\right]
\end{aligned}
$$


由于 $\mathcal{H} x\left(t-t_{0}\right)=\mathcal{H} x^{\prime}(t)$ 对所有 $x$ 和 $t_{0}$ 不成立，因此该系统不是时间不变的。

### 3.8.6 线性

加法和标量乘法是最常见的两种数学运算。因此，了解这些运算是否与给定系统的操作可交换通常非常有帮助。接下来介绍的系统性质就与此问题相关。

如果对于所有函数 $x_{1}$ 和 $x_{2}$，系统 $\mathcal{H}$ 满足：

$$
\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}
$$


则称系统 $\mathcal{H}$ 为加法性的（即 $\mathcal{H}$ 与加法可交换）。本质上，系统 $\mathcal{H}$ 的加法性意味着图 3.34 所示的两个系统是等价的。

如果对于每一个函数 $x$ 和每一个复常数 $a$，系统 $\mathcal{H}$ 满足：

$$
\mathcal{H}(a x)=a \mathcal{H} x
$$


则称系统 $\mathcal{H}$ 为齐次的（即 $\mathcal{H}$ 与标量乘法可交换）。本质上，系统 $\mathcal{H}$ 的齐次性意味着图 3.35 所示的两个系统是等价的。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-069.jpg?height=304&width=1209&top_left_y=283&top_left_x=529){width="400"}
  
图 3.34：如果 $\mathcal{H}$ 是加法性的（即 $\mathcal{H}$ 与加法可交换），两个系统是等价的。(a) 先执行加法再施加 $\mathcal{H}$（即 $y=\mathcal{H}\left(x_{1}+x_{2}\right)$）；(b) 先施加 $\mathcal{H}$ 再执行加法（即 $y=\mathcal{H} x_{1}+\mathcal{H}(x_{2})$）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-069.jpg?height=219&width=1217&top_left_y=759&top_left_x=518){width="400"}
  
图 3.35：如果 $\mathcal{H}$ 是齐次的（即 $\mathcal{H}$ 与标量乘法可交换），两个系统是等价的。(a) 先进行标量乘法再施加 $\mathcal{H}$（即 $y=\mathcal{H}(a x)$）；(b) 先施加 $\mathcal{H}$ 再进行标量乘法（即 $y=a \mathcal{H} x$）。

加法性和齐次性可以合并为一个性质，即叠加性。特别地，如果对于所有函数 $x_{1}$ 和 $x_{2}$ 以及所有复常数 $a_{1}$ 和 $a_{2}$，系统 $\mathcal{H}$ 满足：

$$
\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}
$$


则称系统 $\mathcal{H}$ 具有叠加性（即 $\mathcal{H}$ 与线性组合可交换）。如果一个系统既是加法性的又是齐次的（或等价地满足叠加性），则称其为线性系统。本质上，系统 $\mathcal{H}$ 的线性意味着图 3.36 所示的两个系统是等价的。要证明一个系统是线性的，可以证明它同时具有加法性和齐次性，或者直接证明它满足叠加性。实际上，线性系统相比非线性系统更易于设计和分析。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-070.jpg?height=307&width=1452&top_left_y=280&top_left_x=267){width="400"}
  
图 3.36：如果 $\mathcal{H}$ 是线性的（即 $\mathcal{H}$ 与线性组合可交换），两个系统是等价的。(a) 先计算线性组合再施加 $\mathcal{H}$（即 $y=\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)$）；(b) 先施加 $\mathcal{H}$ 再计算线性组合（即 $y=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$）。

**例 3.36**  
确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(t)=t x(t) .
$$


**解答**  
设 $x^{\prime}(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，其中 $x_{1}$ 和 $x_{2}$ 为任意函数，$a_{1}$ 和 $a_{2}$ 为任意复常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(t)+a_{2} \mathcal{H} x_{2}(t) & =a_{1} t x_{1}(t)+a_{2} t x_{2}(t), \\ 
\mathcal{H} x^{\prime}(t) & =t x^{\prime}(t) \\ 
& =t\left[a_{1} x_{1}(t)+a_{2} x_{2}(t)\right] \\ 
& =a_{1} t x_{1}(t)+a_{2} t x_{2}(t)
\end{aligned}
$$


由于 $\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 对所有 $x_{1}, x_{2}, a_{1}, a_{2}$ 成立，因此系统满足叠加性，是线性的。

**例 3.37**  
确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(t)=|x(t)| .
$$


**解答**  
设 $x^{\prime}(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，其中 $x_{1}$ 和 $x_{2}$ 为任意函数，$a_{1}$ 和 $a_{2}$ 为任意复常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(t)+a_{2} \mathcal{H} x_{2}(t) & =a_{1}|x_{1}(t)|+a_{2}|x_{2}(t)|, \\ 
\mathcal{H} x^{\prime}(t) & =|x^{\prime}(t)| \\ 
& =|a_{1} x_{1}(t)+a_{2} x_{2}(t)|
\end{aligned}
$$


根据三角不等式 (F.16)，$\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 并不总是成立。例如，取

$$
a_{1}=-1, \quad x_{1}(t)=1, \quad a_{2}=0, \quad x_{2}(t)=0,
$$


则

$$
a_{1} \mathcal{H} x_{1}(t)+a_{2} \mathcal{H} x_{2}(t)=-1, \quad \mathcal{H} x^{\prime}(t)=1
$$


因此，叠加性不成立，该系统不是线性的。

**例 3.38**  
确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(t)=\operatorname{Odd}(x)(t)=\frac{1}{2}[x(t)-x(-t)] .
$$


**解答**  
设 $x^{\prime}(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，其中 $x_{1}$ 和 $x_{2}$ 为任意函数，$a_{1}$ 和 $a_{2}$ 为任意复常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(t)+a_{2} \mathcal{H} x_{2}(t) & =\frac{1}{2} a_{1}\left[x_{1}(t)-x_{1}(-t)\right]+\frac{1}{2} a_{2}\left[x_{2}(t)-x_{2}(-t)\right] \quad \text { and } \\
\mathcal{H} x^{\prime}(t) & =\frac{1}{2}\left[x^{\prime}(t)-x^{\prime}(-t)\right] \\
& =\frac{1}{2}\left[a_{1} x_{1}(t)+a_{2} x_{2}(t)-\left[a_{1} x_{1}(-t)+a_{2} x_{2}(-t)\right]\right] \\
& =\frac{1}{2}\left[a_{1} x_{1}(t)-a_{1} x_{1}(-t)+a_{2} x_{2}(t)-a_{2} x_{2}(-t)\right] \\
& =\frac{1}{2} a_{1}\left[x_{1}(t)-x_{1}(-t)\right]+\frac{1}{2} a_{2}\left[x_{2}(t)-x_{2}(-t)\right]
\end{aligned}
$$


由于 $\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)=a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 对所有 $x_{1}, x_{2}, a_{1}, a_{2}$ 成立，因此该系统是线性的。

**例 3.39**  
确定系统 $\mathcal{H}$ 是否线性，其中

$$
\mathcal{H} x(t)=x(t) x(t-1) .
$$


**解答**  
设 $x^{\prime}(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，其中 $x_{1}$ 和 $x_{2}$ 为任意函数，$a_{1}$ 和 $a_{2}$ 为任意复常数。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
a_{1} \mathcal{H} x_{1}(t)+a_{2} \mathcal{H} x_{2}(t) & =a_{1} x_{1}(t) x_{1}(t-1)+a_{2} x_{2}(t) x_{2}(t-1), \\ 
\mathcal{H} x^{\prime}(t) & =x^{\prime}(t) x^{\prime}(t-1) \\ 
& =(a_{1} x_{1}(t)+a_{2} x_{2}(t))(a_{1} x_{1}(t-1)+a_{2} x_{2}(t-1)) \\ 
& =a_{1}^{2} x_{1}(t)x_{1}(t-1) + a_{1} a_{2} x_{1}(t)x_{2}(t-1) + a_{1} a_{2} x_{1}(t-1)x_{2}(t) + a_{2}^{2} x_{2}(t)x_{2}(t-1)
\end{aligned}
$$


显然，$\mathcal{H}\left(a_{1} x_{1}+a_{2} x_{2}\right)$ 与 $a_{1} \mathcal{H} x_{1}+a_{2} \mathcal{H} x_{2}$ 表达式差异较大。对于许多 $a_{1}, a_{2}, x_{1}, x_{2}$ 的选择（如 $a_{1}=2, a_{2}=0, x_{1}(t)=1, x_{2}(t)=0$），两者不相等。因此，叠加性不成立，该系统不是线性的。

**例 3.40（理想积分器）**  
系统 $\mathcal{H}$ 由下式定义：

$$
\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) d \tau
$$


判断该系统是否具有加法性和/或齐次性，并判断是否线性。

**解答**  
首先，考虑加法性。从 $\mathcal{H}$ 的定义出发：

$$
\begin{aligned}
\mathcal{H} x_1(t)+\mathcal{H} x_2(t) & =\int_{-\infty}^t x_1(\tau) d \tau+\int_{-\infty}^t x_2(\tau) d \tau \\
\mathcal{H}\left(x_1+x_2\right)(t) & =\int_{-\infty}^t\left(x_1+x_2\right)(\tau) d \tau \\
& =\int_{-\infty}^t\left[x_1(\tau)+x_2(\tau)\right] d \tau \\
& =\int_{-\infty}^t x_1(\tau) d \tau+\int_{-\infty}^t x_2(\tau) d \tau
\end{aligned}
$$


由于 $\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}$ 对所有 $x_{1}$ 和 $x_{2}$ 成立，因此系统具有加法性。

其次，考虑齐次性。设 $a$ 为任意复常数：

$$
\begin{aligned}
a \mathcal{H} x(t) & = a \int_{-\infty}^{t} x(\tau) d \tau, \\ 
\mathcal{H}(a x)(t) & = \int_{-\infty}^{t} (a x)(\tau) d \tau \\ 
& = \int_{-\infty}^{t} a x(\tau) d \tau \\ 
& = a \int_{-\infty}^{t} x(\tau) d \tau
\end{aligned}
$$


由于 $\mathcal{H}(a x)=a \mathcal{H} x$ 对所有 $x$ 和 $a$ 成立，因此系统具有齐次性。

最后，考虑线性。由于系统同时具有加法性和齐次性，因此系统是线性的。

---
**例 3.41**. 给定一个系统 $\mathfrak{H}$ 为

$$
\mathcal{H} x(t)=\operatorname{Re}[x(t)] .
$$


判定该系统是否具有可加性和/或齐次性，并判定该系统是否为线性系统。  

解：首先，检查可加性属性是否满足。根据 $\mathcal{H}$ 的定义，我们有

$$
\begin{aligned}
\mathcal{H} x_{1}(t)+\mathcal{H} x_{2}(t) & =\operatorname{Re}\left[x_{1}(t)\right]+\operatorname{Re}\left[x_{2}(t)\right], \quad \text {且} \\
\mathcal{H}\left(x_{1}+x_{2}\right)(t) & =\operatorname{Re}\left[\left(x_{1}+x_{2}\right)(t)\right] \\
& =\operatorname{Re}\left[x_{1}(t)+x_{2}(t)\right] \\
& =\operatorname{Re}\left[x_{1}(t)\right]+\operatorname{Re}\left[x_{2}(t)\right].
\end{aligned}
$$


由于对所有 $x_{1}$ 和 $x_{2}$ 都有 $\mathcal{H}\left(x_{1}+x_{2}\right)=\mathcal{H} x_{1}+\mathcal{H} x_{2}$，该系统是可加的。

其次，检查齐次性属性是否满足。设 $a$ 为任意复常数。根据 $\mathcal{H}$ 的定义，有

$$
\begin{aligned}
a \mathcal{H} x(t) & =a \operatorname{Re}[x(t)], \quad \text {且} \\
\mathcal{H}(a x)(t) & =\operatorname{Re}[(a x)(t)] \\
& =\operatorname{Re}[a x(t)].
\end{aligned}
$$


为了使 $\mathcal{H}$ 齐次，必须对所有 $x$ 和所有复数 $a$ 满足 $a \mathcal{H} x(t)=\mathcal{H}(a x)(t)$。假设 $a=j$ 且 $x$ 非零（即 $x$ 不是函数 $x(t)=0$）。此时有

$$
\begin{aligned}
a \mathcal{H} x(t) & =j \operatorname{Re}[x(t)], \quad \text {且} \\
\mathcal{H}(a x)(t) & =\operatorname{Re}[(j x)(t)] \\
& =\operatorname{Re}[j x(t)] \\
& =\operatorname{Re}[j(\operatorname{Re}[x(t)]+j \operatorname{Im}[x(t)])] \\
& =\operatorname{Re}(-\operatorname{Im}[x(t)]+j \operatorname{Re}[x(t)]) \\
& =-\operatorname{Im}[x(t)].
\end{aligned}
$$


显然，$\mathcal{H}(a x)$ 与 $a \mathcal{H} x$ 不相等。因此，该系统不具有齐次性。

最后，考虑线性属性。由于该系统不同时具备可加性和齐次性，因此它不是线性系统。


### 3.8.7 特征函数

系统 $\mathcal{H}$ 的特征函数是满足

$$
\mathcal{H} x = \lambda x
$$


的函数 $x$，其中 $\lambda$ 为某个复常数，称为特征值。换句话说，如果 $x$ 是 $\mathcal{H}$ 的特征函数，则 $\mathcal{H} x$ 是 $x$ 的一个标量倍（即某个常数乘以 $x$）。本质上，当系统的输入为其特征函数之一时，系统表现得像理想放大器（即执行幅度缩放）。特征函数性质的重要性不可低估。无论系统多么复杂，其对特征函数的行为都极为简单。我们经常可以利用这种简单性来降低解决涉及系统问题的复杂性。实际上，正如我们稍后将看到的，特征函数几乎构成了许多研究系统所使用的数学工具的基础。

**例 3.42**  
考虑由下式描述的系统 $\mathcal{H}$：

$$
\mathcal{H} x(t) = \mathcal{D}^{2} x(t),
$$


其中 $\mathcal{D}$ 表示微分算子。对于下列每个函数 $x$，判断其是否为 $\mathcal{H}$ 的特征函数，如果是，则求对应的特征值。  
(a) $x(t)=\cos (2 t)$；  
(b) $x(t)=t^{3}$。

**解答**  
(a) 令 $x(t) = \cos(2t)$。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
\mathcal{H} x(t) & = \mathcal{D}^{2}\{\cos (2 t)\}(t) \\ 
& = \mathcal{D}\{-2 \sin (2 t)\}(t) \\ 
& = -4 \cos (2 t) \\ 
& = -4 x(t)
\end{aligned}
$$


因此，$\mathcal{H} x$ 是 $x$ 的标量倍（标量倍为 -4）。所以，$x$ 是 $\mathcal{H}$ 的特征函数，特征值为 -4。

(b) 令 $x(t) = t^3$。根据 $\mathcal{H}$ 的定义：

$$
\begin{aligned}
\mathcal{H} x(t) & = \mathcal{D}^{2}\{t^3\}(t) \\ 
& = \mathcal{D}\{3 t^2\}(t) \\ 
& = 6 t \\ 
& = \frac{6}{t^2} x(t)
\end{aligned}
$$


由于 $\mathcal{H} x$ 不是 $x$ 的标量倍，因此 $x$ 不是 $\mathcal{H}$ 的特征函数。

**例 3.43（理想放大器）**  
考虑系统 $\mathcal{H}$：

$$
\mathcal{H} x(t) = a x(t),
$$


其中 $a$ 为复常数。显然，每个函数都是 $\mathcal{H}$ 的特征函数，特征值均为 $a$。
## 3.9 练习题

### 3.9.1 无答案练习题

**3.1** 对于下列函数 $y$，确定为了得到 $y$，必须对函数 $x$ 施加哪些自变量和因变量变换。选择变换顺序时，保证时间平移在时间缩放之前，幅度缩放在幅度平移之前。并清晰标明变换的施加顺序。  
(a) $y(t) = x(2 t - 1)$；  
(b) $y(t) = x\left(\frac{1}{2} t + 1\right)$；  
(c) $y(t) = 2 x\left(-\frac{1}{2} t + 1\right) + 3$；  
(d) $y(t) = -\frac{1}{2} x(-t + 1) - 1$；  
(e) $y(t) = -3 x(2 [t-1]) - 1$；  
(f) $y(t) = x(7 [t+3])$。

**3.2** 对于下列每对函数 $x$ 和 $y$，用 $x$ 表示 $y$，并尽量使表达式的项数最少。  


![题图](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-074.jpg?height=309&width=1539&top_left_y=1094&top_left_x=307)  
(a) 

![题图](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-074.jpg?height=298&width=1533&top_left_y=1480&top_left_x=313)  
(b) 

![题图1](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-074.jpg?height=268&width=719&top_left_y=1853&top_left_x=316)  
![题图2](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-074.jpg?height=263&width=717&top_left_y=1853&top_left_x=1123)  
(c) 

**3.3** 假设两个函数 $x$ 和 $y$ 满足关系

$$
y(t) = x(a t - b),
$$


其中 $a$ 和 $b$ 为实常数，且 $a \neq 0$。  
(a) 证明 $y$ 可通过先对 $x$ 平移 $b$ 单位时间，再对结果进行时间缩放 $a$ 单位得到。  
(b) 证明 $y$ 也可通过先对 $x$ 进行时间缩放 $a$ 单位，再对结果平移 $\frac{b}{a}$ 单位得到。

**3.4** 给定下图所示函数 $x$，绘制并标注下列函数：  
(a) $x(t-1)$；  
(b) $x(2 t)$；  
(c) $x(-t)$；  
(d) $x(2 t+1)$；  
(e) $\frac{1}{4} x\left(-\frac{1}{2} t + 1\right) - \frac{1}{2}$。  
![题图](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-075.jpg?height=633&width=598&top_left_y=591&top_left_x=756)

**3.5** 给定函数

$$
x(t) = u(t+2) + u(t+1) + u(t) - 2 u(t-1) - u(t-2),
$$


求并绘制 $y(t) = x(-4 t - 1)$。

**3.6** 判断下列函数 $x$ 是否为周期函数，若是，求其基周期。  
(a) $x(t) = \cos (2 \pi t) + \sin (5 t)$；  
(b) $x(t) = \left[\cos \left(4 t - \frac{\pi}{3}\right)\right]^2$；  
(c) $x(t) = e^{j 2 \pi t} + e^{j 3 \pi t}$；  
(d) $x(t) = 1 + \cos(2 t) + e^{j 5 t}$；  
(e) $x(t) = \cos(14 t - 1) + \cos(77 t - 3)$；  
(f) $x(t) = \cos(e t) + \sin(42 t)$；  
(g) $x(t) = |\sin (\pi t)|$；  
(h) $x(t) = \cos(6 \sqrt{2} t) + \sin(15 \sqrt{2} t)$。

**3.7** 如果函数 $x$ 是 $T$-周期的，证明在下列情况下函数 $y$ 也是 $T$-周期的：  
(a) $y(t) = c x(t)$，其中 $c$ 为复常数；  
(b) $y(t) = x(t) + c$，其中 $c$ 为复常数；  
(c) $y(t) = x(t - c)$，其中 $c$ 为实常数。

**3.8** 设函数 $y$ 为

$$
y(t) = \sum_{k=-\infty}^{\infty} x(t - T k),
$$


其中 $x$ 为任意函数，$T > 0$。证明 $y$ 是 $T$-周期的。

**3.9** 判断下列函数 $x$ 是偶函数、奇函数，还是既非偶也非奇。  
(a) $x(t) = t^3$；  
(b) $x(t) = t^3 |t|$；  
(c) $x(t) = |t^3|$；  
(d) $x(t) = \cos(2 \pi t) \sin(2 \pi t)$；  
(e) $x(t) = e^{j 2 \pi t}$；  
(f) $x(t) = \frac{1}{2} [e^t + e^{-t}]$。
**3.10** 证明下列命题：  
(a) 两个偶函数的和是偶函数。  
(b) 两个奇函数的和是奇函数。  
(c) 一个偶函数与一个奇函数的和（且两函数均不恒为零）既非偶也非奇。  
(d) 两个偶函数的积是偶函数。  
(e) 两个奇函数的积是偶函数。  
(f) 一个偶函数与一个奇函数的积是奇函数。

**3.11** 证明，如果 $x$ 是奇函数，则

$$
\int_{-A}^{A} x(t) d t = 0
$$


其中 $A$ 为正实常数。

**3.12** 证明，对于任意函数 $x$，

$$
\int_{-\infty}^{\infty} x^{2}(t) d t = \int_{-\infty}^{\infty} x_{\mathrm{e}}^{2}(t) d t + \int_{-\infty}^{\infty} x_{\mathrm{o}}^{2}(t) d t
$$


其中 $x_{\mathrm{e}}$ 和 $x_{\mathrm{o}}$ 分别为 $x$ 的偶部分和奇部分。

**3.13** 设 $x$ 的导数为 $y$。  
(a) 证明如果 $x$ 是偶函数，则 $y$ 是奇函数。  
(b) 证明如果 $x$ 是奇函数，则 $y$ 是偶函数。

**3.14** 对任意函数 $x$，其偶部分和奇部分分别为 $x_{\mathrm{e}}$ 和 $x_{\mathrm{o}}$，证明：  
(a) $\displaystyle \int_{-\infty}^{\infty} x_{\mathrm{e}}(t) x_{\mathrm{o}}(t) d t = 0$；  
(b) $\displaystyle \int_{-\infty}^{\infty} x(t) d t = \int_{-\infty}^{\infty} x_{\mathrm{e}}(t) d t$。

**3.15** 证明：  
(a) 如果函数 $x$ 是 $T$-周期且偶函数，则  

$$
\int_{0}^{T} x(t) d t = 2 \int_{0}^{T/2} x(t) d t
$$


(b) 如果函数 $x$ 是 $T$-周期且奇函数，则  

$$
\int_{0}^{T} x(t) d t = 0
$$


**3.16** 证明，唯一既是偶函数又是奇函数的函数是零函数（即 $x(t) = 0$ 对所有 $t$ 都成立）。

**3.17** 对于下列情况，已知函数 $x$ 具有给定性质，求 $x(t)$ 对所有 $t$ 的表达式。  

(a) 函数 $x$ 满足：  
- $x(t) = \begin{cases} t-1 & 1 \le t \le 2 \\ 3-t & 2 < t \le 3 \end{cases}$  
- 函数 $v$ 是因果的，其中 $v(t) = x(t-1)$；  
- 函数 $w$ 是奇函数，其中 $w(t) = x(t+1)$。

(b) 函数 $x$ 满足：  
- $x(t) = t-1$ 对 $0 \le t \le 1$；  
- 函数 $v$ 是因果的，其中 $v(t) = x(t-1)$；  
- 函数 $w$ 是奇函数，其中 $w(t) = x(t) + 1$。

(c) 函数 $x$ 满足：  
- $x$ 是因果的；  
- 函数 $x_{\mathrm{e}} = \operatorname{Even}(x)$ 已知为 $x_{\mathrm{e}}(t) = t[u(t)-u(t-1)] + u(t-1)$ 对 $t \ge 0$。

(d) 函数 $x$ 满足：  
- 函数 $v$ 是偶函数，其中 $v(t) = x(t+1)$；  
- 函数 $w$ 是因果的，其中 $w(t) = x(t-1)-1$；  
- $x(t) = -t$ 对 $-1 \le t \le 1$。

**3.18** 设 $E x$ 表示函数 $x$ 的能量，证明：  
(a) $E\{a x\} = a^2 E x$，其中 $a$ 是实常数；  
(b) $E x' = E x$，其中 $x'(t) = x(t-t_0)$ 且 $t_0$ 是实常数；  
(c) $E x' = \frac{1}{|a|} E x$，其中 $x'(t) = x(a t)$ 且 $a \neq 0$ 为实常数。

**3.19** 证明，如果函数 $x$ 是共轭对称的，则：  
(a) $\operatorname{Re} x(t) = \operatorname{Even} x(t)$ 对所有 $t$ 成立；  
(b) $\operatorname{Im} x(t) = \frac{1}{j} \operatorname{Odd} x(t)$ 对所有 $t$ 成立。

**3.20** 对下列积分表达式进行完全化简：  
(a) $\displaystyle \int_{-\infty}^{\infty} \sin \left(2 t + \frac{\pi}{4}\right) \delta(t) dt$；  
(b) $\displaystyle \int_{-\infty}^{t} \cos(\tau) \delta(\tau + \pi) d\tau$；  
(c) $\displaystyle \int_{-\infty}^{\infty} x(t) \delta(a t - b) dt$，其中 $a \neq 0$；  
(d) $\displaystyle \int_{0}^{2} e^{j 2 t} \delta(t-1) dt$；  
(e) $\displaystyle \int_{-\infty}^{t} \delta(\tau) d\tau$；  
(f) $\displaystyle \int_{0}^{\infty} \tau^2 \cos(\tau) \delta(\tau + 42) d\tau$；  
(g) $\displaystyle \int_{t+1}^{\infty} (\tau^2 + 1) \delta(\tau - 3) d\tau$；  
(h) $\displaystyle \frac{1}{9} \int_{-\infty}^{\infty} (\tau + 6)^2 \delta(1 - \tau/3) d\tau$；  
(i) $\displaystyle \int_{t-2}^{t-1} (\tau - 1)^2 \delta(\tau - 3) d\tau$。

**3.21** 假设我们有下图所示的函数 $x$。使用单位阶跃函数（unit-step functions）来找到一个在所有 $t$ 上都有效的 $x(t)$ 的单一表达式。
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-077.jpg?height=388&width=601&top_left_y=2101&top_left_x=864){width="400"}


**3.22** 对下列给出的每个函数 $x$，求一个 $x$ 的单一表达式（即不涉及多个分段情况的表达式）。在 $x$ 的表达式中，将类似的单位阶跃函数项组合在一起。

(a) $x(t) = \begin{cases} -t-3 & -3 \le t < -2 \\ -1 & -2 \le t < -1 \\ t^3 & -1 \le t < 1 \\ 1 & 1 \le t < 2 \\ -t+3 & 2 \le t < 3 \\ 0 & \text{otherwise} \end{cases}$  
(b) $x(t) = \begin{cases} -1 & t < -1 \\ t & -1 \le t < 1 \\ 1 & t \ge 1 \end{cases}$  
(c) $x(t) = \begin{cases} 4t+4 & -1 \le t < -\frac{1}{2} \\ 4 t^2 & -\frac{1}{2} \le t < \frac{1}{2} \\ -4 t + 4 & \frac{1}{2} \le t < 1 \\ 0 & \text{otherwise} \end{cases}$

**3.23 **对下图所示的系统，用输入 $x$ 以及变换 $\mathcal{H}_{1}, \mathcal{H}_{2}, \ldots, \mathcal{H}_{5}$ 表示输出 $y$。
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-078.jpg?height=333&width=1017&top_left_y=1302&top_left_x=572){width="400"}



3.24 判断下列系统 $\mathcal{H}$ 是否为无记忆系统（memoryless）。  
(a) $\mathcal{H} x(t)=\int_{-\infty}^{2 t} x(\tau) d \tau$；  
(b) $\mathcal{H} x(t)=\operatorname{Even}(x)(t)$；  
(c) $\mathcal{H} x(t)=x(t-1)+1$；  
(d) $\mathcal{H} x(t)=\int_{t}^{\infty} x(\tau) d \tau$；  
(e) $\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) \delta(\tau) d \tau$；  
(f) $\mathcal{H} x(t)=t x(t)$；  
(g) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) \delta(t-\tau) d \tau$。  

3.25 判断下列系统 $\mathcal{H}$ 是否为因果系统（causal）。  
(a) $\mathcal{H} x(t)=\int_{-\infty}^{2 t} x(\tau) d \tau$；  
(b) $\mathcal{H} x(t)=\operatorname{Even}(x)(t)$；  
(c) $\mathcal{H} x(t)=x(t-1)+1$；  
(d) $\mathcal{H} x(t)=\int_{t}^{\infty} x(\tau) d \tau$；  
(e) $\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) \delta(\tau) d \tau$；  
(f) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) u(t-\tau) d \tau$。  

3.26 对下列系统 $\mathcal{H}$，判断其是否可逆（invertible），若可逆，请给出其逆系统。  
(a) $\mathcal{H} x(t)=x(a t-b)$，其中 $a$ 和 $b$ 为实常数且 $a \neq 0$；  
(b) $\mathcal{H} x(t)=e^{x(t)}$，其中 $x$ 为实函数；  
(c) $\mathcal{H} x(t)=\operatorname{Even}(x)(t)-\operatorname{Odd}(x)(t)$；  
(d) $\mathcal{H} x(t)=\mathcal{D} x(t)$，其中 $\mathcal{D}$ 表示求导算子；  
(e) $\mathcal{H} x(t)=x^{2}(t)$。  

3.27 判断下列系统 $\mathcal{H}$ 是否 BIBO 稳定（BIBO stable）。  
(a) $\mathcal{H} x(t)=\int_{t}^{t+1} x(\tau) d \tau$ [提示：对于任意函数 $f$，有 $\left|\int_{a}^{b} f(x) dx\right| \leq \int_{a}^{b} |f(x)| dx$]；  
(b) $\mathcal{H} x(t)=\frac{1}{2} x^{2}(t)+x(t)$；  
(c) $\mathcal{H} x(t)=1 / x(t)$；  
(d) $\mathcal{H} x(t)=e^{-|t|} x(t)$；  
(e) $\mathcal{H} x(t)=\left(\frac{1}{t-1}\right) x(t)$。  

3.28 判断下列系统 $\mathcal{H}$ 是否时不变（time invariant）。  
(a) $\mathcal{H} x(t)=\mathcal{D} x(t)$，其中 $\mathcal{D}$ 表示求导算子；  
(b) $\mathcal{H} x(t)=\operatorname{Even}(x)(t)$；  
(c) $\mathcal{H} x(t)=\int_{t}^{t+1} x(\tau-\alpha) d \tau$，其中 $\alpha$ 为常数；  
(d) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) h(t-\tau) d \tau$，其中 $h$ 为任意固定函数；  
(e) $\mathcal{H} x(t)=x(-t)$；  
(f) $\mathcal{H} x(t)=\int_{-\infty}^{2 t} x(\tau) d \tau$；  
(g) $\mathcal{H} x(t)=3 x(t-1)$。  

3.29 判断下列系统 $\mathcal{H}$ 是否线性（linear）。  
(a) $\mathcal{H} x(t)=\int_{t-1}^{t+1} x(\tau) d \tau$；  
(b) $\mathcal{H} x(t)=e^{x(t)}$；  
(c) $\mathcal{H} x(t)=\operatorname{Even}(x)(t)$；  
(d) $\mathcal{H} x(t)=x^{2}(t)$；  
(e) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) h(t-\tau) d \tau$，其中 $h$ 为任意固定函数。  

3.30 判断下列系统 $\mathcal{H}$ 是否具有加性（additive）和/或齐次性（homogeneous）。  
(a) $\mathcal{H} x(t)=x^{*}(t)$；  
(b) $\mathcal{H} x(t)=\operatorname{Im}[x(t)]$。  

3.31 证明：若系统 $\mathcal{H}$ 具有加性或齐次性，则对于恒为零的函数 $x$（即 $x(t)=0$ 对所有 $t$ 成立），输出 $\mathcal{H} x$ 也恒为零（即 $\mathcal{H} x(t)=0$ 对所有 $t$ 成立）。  

3.32 设 $z$ 为恒为零的函数（即 $z(t)=0$ 对所有 $t$ 成立）。证明：线性系统 $\mathcal{H}$ 可逆的充分必要条件是 $\mathcal{H} x=z$ 蕴含 $x=z$（即唯一能产生输出 $y=z$ 的输入 $x$ 是 $x=z$）。  

3.33 对下列系统 $\mathcal{H}$ 及函数 $\left\{x_{k}\right\}$，判断每个 $x_{k}$ 是否为 $\mathcal{H}$ 的特征函数（eigenfunction），若是，请同时写出对应的特征值。  
(a) $\mathcal{H} x(t)=x^{2}(t)$，$x_{1}(t)=a$，$x_{2}(t)=e^{-a t}$，$x_{3}(t)=\cos t$，其中 $a$ 为复常数；  
(b) $\mathcal{H} x(t)=\mathcal{D} x(t)$，$x_{1}(t)=e^{a t}$，$x_{2}(t)=e^{a t^{2}}$，$x_{3}(t)=42$，其中 $\mathcal{D}$ 表示求导算子，$a$ 为实常数；  
(c) $\mathcal{H} x(t)=\int_{t-1}^{t} x(\tau) d \tau$，$x_{1}(t)=e^{a t}$，$x_{2}(t)=t$，$x_{3}(t)=\sin t$，其中 $a$ 为非零复常数；  
(d) $\mathcal{H} x(t)=|x(t)|$，$x_{1}(t)=a$，$x_{2}(t)=t$，$x_{3}(t)=t^{2}$，其中 $a$ 为严格正实数。

### 3.9.2 带答案的练习

3.101 对于下列每种情况，函数 $y$ 由函数 $x$ 通过应用给定的（有序）变换序列生成（从 $y$ 开始），将 $y$ 用 $x$ 表示。  
(a) 时间平移 3；时间缩放 2；  
(b) 时间缩放 2；时间平移 3。  

简答：（a）$y(t)=x(2 t-3)$；（b）$y(t)=x(2 t-6)$  

3.102 对于下列每个函数 $x$，判断 $x$ 是否为周期函数，若是，求其基本周期 $T$。  
(a) $x(t)=3 \cos (\sqrt{2} t)+7 \cos (2 t)$；  
(b) $x(t)=[3 \cos (2 t)]^{3}$；  
(c) $x(t)=7 \cos (35 t+3)+5 \sin (15 t-2)$。  

简答：（a）非周期；（b）$\pi$-周期；（c）$\frac{2 \pi}{5}$-周期  

3.103 对于下列每种情况，函数 $x$（实变量函数）具有所述性质，求 $x(t)$ 对所有 $t$ 的表达式。  
(a) $x$ 满足：  
- $x(t)=1-t$，当 $0 \leq t \leq 1$；  
- 函数 $w$ 是偶函数，其中 $w(t)=x(t+1)$；  
- 函数 $v$ 是因果函数，其中 $v(t)=x(t)-1$。  

(b) $x$ 满足：  
- $x(t)=e^{t+4}$，当 $t<-4$；  
- $x(t)=a$，当 $-4 \leq t \leq-2$，$a$ 为实常数；  
- 函数 $v(t)=x(t-3)$ 是奇函数。  

(c) $x$ 满足：  
- $v(t)=x(t)+1$ 是因果函数；  
- $w(t)=x(-t)-1$ 是因果函数；  
- $x(0)=0$。  

(d) $x$ 满足：  
- $x(t)=1$，当 $2<t \leq 3$；  
- $v_{1}(t)=x(t+1)$ 是因果函数；  
- $v_{2}(t)=x(t+3)$ 是反因果函数；  
- $v_{3}(t)=x(t+2)$ 是奇函数。  

(e) $x$ 满足：  
- $x(t)=t-1$，当 $1 \leq t \leq 2$；  
- $x$ 是因果函数；  
- $v_{1}(t)=x(t+2)$ 是反因果函数；  
- $v_{2}(t)=x(t+1)$ 是偶函数。  

(f) $x$ 满足：  
- 偶函数部分 Even $x(t)=t$，当 $t \leq 0$；  
- 奇函数部分 Odd $x(t)=t^{2}$，当 $t>0$。  

(g) $x$ 满足：  
- $v(t)=x(t+2)$ 是共轭对称函数；  
- $x(t)=j[u(t-3)-u(t-5)]$，当 $t \geq 2$。  

(h) $x$ 满足：  
- $v(t)=x(t)-1$ 是因果函数；  
- $x$ 是奇函数。  

(i) $x$ 满足：  
- $\operatorname{Re} x(t)=t$，当 $t \geq 0$；  
- $\operatorname{Im} x(t)=t^{2}$，当 $t<0$；  
- $x$ 是共轭对称函数。  

(j) $x$ 满足：  
- $x(t)=2-t$，当 $0 \leq t<1$；  
- $v(t)=x(t)-2$ 是因果函数；  
- $w(t)=x(t+1)$ 是奇函数。  

(k) $x$ 满足：  
- $v(t)=\operatorname{Odd}\{x\}(t)+1$ 是因果函数；  
- $w(t)=\operatorname{Even}\{x\}(t)-1$ 是因果函数；  
- Even $\{x\}(0)=2$。  

简答：

(a) $x(t)= \begin{cases}1-t & 0 \leq t \leq 1 \\ t-1 & 1<t \leq 2 \\ 1 & \text { otherwise }\end{cases}$  
(b) $x(t)= \begin{cases}e^{t+4} & t<-4 \\ 0 & -4 \leq t \leq-2 \\ -e^{-t-2} & t>-2\end{cases}$  
(c) $x(t)=\operatorname{sgn}(t)$  
(d) $x(t)= \begin{cases}-1 & 1 \leq t<2 \\ 1 & 2<t \leq 3 \\ 0 & \text { otherwise }\end{cases}$  
(e) $x(t)= \begin{cases}1-t & 0 \leq t<1 \\ t-1 & 1 \leq t \leq 2 \\ 0 & \text { otherwise }\end{cases}$  
(f) $x(t)=\left(t^{2}-t\right) \operatorname{sgn}(t)$  
(g) $x(t)= \begin{cases}-j & -1<t \leq 1 \\ j & 3 \leq t<5 \\ 0 & \text { otherwise }\end{cases}$  
(h) $x(t)=-\operatorname{sgn}(t)$  
(i) $x(t)=\left(t-j t^{2}\right) \operatorname{sgn}(t)$  
(j) $x(t)= \begin{cases}2 & t<0 \\ 2-t & 0 \leq t<1 \\ 0 & t=1 \\ -t & 1<t \leq 2 \\ -2 & t>2 \end{cases}$  
(k) $x(t)=2 u(t)$
3.104 判断下列函数 $x$ 是否为偶函数、奇函数或既非偶也非奇。  
(a) $x(t)=e^{-|t|} \sin (t)$；  
(b) $x(t)=e^{-t^{2}} \cos (t)$。  

简答：（a）奇函数；（b）偶函数  

3.105 化简下列各表达式：  
(a) $\frac{\left(\omega^{2}+1\right) \delta(\omega-1)}{\omega^{2}+9}$；  
(b) $\frac{\sin (k \omega) \delta(\omega)}{\omega}$；  
(c) $\int_{-\infty}^{\infty} e^{t-1} \cos \left[\frac{\pi}{2}(t-5)\right] \delta(t-3) d t$；  
(d) $\int_{-\infty}^{\infty} \delta(2 t-3) \sin (\pi t) d t$；  
(e) $\int_{t}^{\infty}\left(\tau^{2}+1\right) \delta(\tau-2) d \tau$；  
(f) $\int_{-4}^{4} e^{-\tau} \cos (\tau) \delta\left(\tau-\frac{\pi}{3}\right) d \tau+\int_{-2}^{2} \tau^{2} \cos (\tau) \delta(\tau-\pi) d \tau$；  
(g) $\left(t^{2}+1\right)^{4} e^{-t} \operatorname{sinc}(t) \delta(t-\pi)$。  

简答：（a）$\frac{1}{5} \delta(\omega-1)$；（b）$k \delta(\omega)$；（c）$-e^{2}$；（d）$-\frac{1}{2}$；（e）$5 u(2-t)$；（f）$\frac{1}{2} e^{-\pi / 3}$；（g）0  

3.106 对下列函数 $x$，求一个单一表达式（不使用多重分段），若 $x$ 由有限项组成，将类似单位阶跃函数项合并。  
(a) $x(t)=1-t^{2}$，当 $-1 \leq t<1$ 且 $x(t)=x(t-2)$ 对所有 $t$ 成立；  
(b) $x(t)= \begin{cases}-e^{t+1} & t<-1 \\ t & -1 \leq t<1 \\ (t-2)^{2} & 1 \leq t<2 \\ 0 & \text { otherwise }\end{cases}$；  
(c) $x(t)= \begin{cases}(t / \pi+1)^{2} & t<-\pi \\ \cos (t / 2) & -\pi \leq t \leq \pi \\ (t / \pi-1)^{2} & t>\pi \end{cases}$；  
(d) $x(t)= \begin{cases}t+2 & -2 \leq t<-1 \\ t^{2} & -1 \leq t \leq 1 \\ 1 & t>1 \\ 0 & \text { otherwise }\end{cases}$。  

简答：  
(a) $x(t)=\sum_{k=-\infty}^{\infty}\left(-t^{2}+4 k t-4 k^{2}+1\right)[u(t-2 k+1)-u(t-2 k-1)]$  
(b) $x(t)=-e^{t+1}+\left(t+e^{t+1}\right) u(t+1)+(t-1)(t-4) u(t-1)-(t-2)^{2} u(t-2)$  
(c) $x(t)=(t / \pi+1)^{2}+\left[\cos (t / 2)-(t / \pi+1)^{2}\right] u(t+\pi)+\left[(t / \pi-1)^{2}-\cos (t / 2)\right] u(t-\pi)$  
(d) $x(t)=(t+2) u(t+2)+\left[t^{2}-t-2\right] u(t+1)+\left[1-t^{2}\right] u(t-1)$  

3.107 判断下列系统 $\mathcal{H}$ 是否为无记忆系统（memoryless）。  
(a) $\mathcal{H} x(t)=u[x(t)]$；  
(b) $\mathcal{H} x(t)=x[u(t)]$；  
(c) $\mathcal{H} x(t)=42$；  
(d) $\mathcal{H} x(t)=x\left(t^{2}\right)$；  
(e) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} 2 x(\tau) \delta(\tau-t) d \tau$；  
(f) $\mathcal{H} x(t)=[x(t+1)]^{-1}$；  
(g) $\mathcal{H} x(t)=x(-t)$；  
(h) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) u(\tau-t-2) d \tau$。  

简答：（a）无记忆；（b）有记忆；（c）无记忆；（d）有记忆；（e）无记忆；（f）有记忆；（g）有记忆；（h）有记忆  

3.108 判断下列系统 $\mathcal{H}$ 是否为因果系统（causal）。  
(a) $\mathcal{H} x(t)=x(a t)$，其中 $a$ 为非零实常数；  
(b) $\mathcal{H} x(t)=t u(t) x(t)$；  
(c) $\mathcal{H} x(t)=x(t-a)$，其中 $a$ 为严格负实常数；  
(d) $\mathcal{H} x(t)=[x(t+1)]^{-1}$；  
(e) $\mathcal{H} x(t)=x(-t)$；  
(f) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) u(t-\tau-1) d \tau$；  
(g) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) u(\tau-t-3) d \tau$。  

简答：（a）当且仅当 $a=1$ 时因果；（b）因果；（c）非因果；（d）非因果；（e）非因果；（f）因果；（g）非因果
3.109 判断下列系统 $\mathcal{H}$ 是否可逆。  
(a) $\mathcal{H} x(t)=\cos [x(t)]$；  
(b) $\mathcal{H} x(t)=x * x(t)$，其中 $f * g(t)=\int_{-\infty}^{\infty} f(\tau) g(t-\tau) d \tau$；  
(c) $\mathcal{H} x(t)=\operatorname{Even} x(t)$；  
(d) $\mathcal{H} x(t)=\operatorname{Re} x(t)$；  
(e) $\mathcal{H} x(t)=|x(t)|$；  
(f) $\mathcal{H} x(t)=2 x(t)+3$；  
(g) $\mathcal{H} x(t)=x(t)+x(t-1)$；  
(h) $\mathcal{H} x(t)=2 \operatorname{Even}\{x\}(t)-\operatorname{Odd}\{x\}(t)$；  
(i) $\mathcal{H} x(t)=a x(t)+b$，其中 $a$ 和 $b$ 为实常数。  

简答：（a）不可逆；（b）不可逆；（c）不可逆；（d）不可逆；（e）不可逆；（f）可逆；（g）不可逆；（h）可逆；（i）当且仅当 $a \neq 0$ 时可逆  

3.110 判断下列系统 $\mathcal{H}$ 是否 BIBO 稳定。  
(a) $\mathcal{H} x(t)=u(t) x(t)$；  
(b) $\mathcal{H} x(t)=\ln x(t)$；  
(c) $\mathcal{H} x(t)=e^{x(t)}$；  
(d) $\mathcal{H} x(t)=e^{t} x(t)$；  
(e) $\mathcal{H} x(t)=\cos [x(t)]$；  
(f) $\mathcal{H} x(t)=x * x(t)$；  
(g) $\mathcal{H} x(t)=3 x(3 t+3)$；  
(h) $\mathcal{H} x(t)=2 x(t)+1$；  
(i) $\mathcal{H} x(t)=\sum_{k=0}^{\infty} x^{k}(t)$。  

简答：（a）BIBO 稳定；（b）不 BIBO 稳定；（c）BIBO 稳定；（d）不 BIBO 稳定；（e）BIBO 稳定（若 $x$ 为实值或复值）；（f）不 BIBO 稳定；（g）BIBO 稳定；（h）BIBO 稳定；（i）不 BIBO 稳定  

3.111 判断下列系统 $\mathcal{H}$ 是否时不变。  
(a) $\mathcal{H} x(t)=\int_{-4}^{4} x(\tau) d \tau$；  
(b) $\mathcal{H} x(t)=\mathcal{D}\left\{x^{2}\right\}(t)$；  
(c) $\mathcal{H} x(t)=t u(t) x(t)$；  
(d) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) x(t-\tau) d \tau$；  
(e) $\mathcal{H} x(t)=3 x(3 t+3)$；  
(f) $\mathcal{H} x(t)=x(t)+x(t-1)$；  
(g) $\mathcal{H} x(t)=e^{t} x(t)$。  

简答：（a）非时不变；（b）时不变；（c）非时不变；（d）非时不变；（e）非时不变；（f）时不变；（g）非时不变  

3.112 判断下列系统 $\mathcal{H}$ 是否线性。  
(a) $\mathcal{H} x(t)=\frac{1}{3}[x(t)-2]$；  
(b) $\mathcal{H} x(t)=\mathcal{D} x(t)$；  
(c) $\mathcal{H} x(t)=t u(t) x(t)$；  
(d) $\mathcal{H} x(t)=\int_{-\infty}^{\infty} x(\tau) x(t-\tau) d \tau$；  
(e) $\mathcal{H} x(t)=t^{2} \mathcal{D}^{2} x(t)+t \mathcal{D} x(t)$；  
(f) $\mathcal{H} x(t)=3 x(3 t+3)$；  
(g) $\mathcal{H} x(t)=\int_{-1}^{1} x(\tau) d \tau$；  
(h) $\mathcal{H} x(t)=|t| x(t)$；  
(i) $\mathcal{H} x(t)=(t+1)^{2} x(t)$；  
(j) $\mathcal{H} x(t)=42$；  
(k) $\mathcal{H} x(t)=0$；  
(l) $\mathcal{H} x(t)=[x(t)]^{-1}$。  

简答：（a）非线性；（b）线性；（c）线性；（d）非线性；（e）线性；（f）线性；（g）线性；（h）线性；（i）线性；（j）非线性；（k）线性；（l）非线性
3.113 判断下列系统 $\mathcal{H}$ 是否可加（additive）和/或齐次（homogeneous）。  
(a) $\mathcal{H} x(t)=\frac{x^{2}(t)}{\mathcal{D} x(t)}$，其中 $\mathcal{D}$ 表示求导算子。  

简答：（a）齐次但不可加  

3.114 对于下列系统 $\mathcal{H}$ 及函数集合 $\{x_k\}$，判断每个 $x_k$ 是否是 $\mathcal{H}$ 的本征函数（eigenfunction），若是，说明对应的本征值（eigenvalue）。  
(a) $\mathcal{H} x(t)=\mathcal{D}^{2} x(t)$，$x_{1}(t)=\cos t, x_{2}(t)=\sin t, x_{3}(t)=42$；  
(b) $\mathcal{H} x(t)=\int_{-\infty}^{t} x(\tau) d \tau$，$x_{1}(t)=e^{2 t}, x_{2}(t)=e^{t} u(-t)$；  
(c) $\mathcal{H} x(t)=t^{2} \mathcal{D}^{2} x(t)+t \mathcal{D} x(t)$，$x_{1}(t)=t^{k}$，$k \ge 2$ 为整数；  
(d) $\mathcal{H} x(t)=u(t) x(t)$，$x_{1}(t)=0, x_{2}(t)=1, x_{3}(t)=u(t+1), x_{4}(t)=u(t-1)$；  
(e) $\mathcal{H} x(t)=t \mathcal{D} x(t)$，$x_{1}(t)=3 t^{2}, x_{2}(t)=\pi$。  

简答：  
(a) $x_{1}$ 是本征函数，本征值 $-1$；$x_{2}$ 是本征函数，本征值 $-1$；$x_{3}$ 是本征函数，本征值 $0$；  
(b) $x_{1}$ 是本征函数，本征值 $\frac{1}{2}$；$x_{2}$ 不是本征函数；  
(c) $x_{1}$ 是本征函数，本征值 $k^{2}$；  
(d) $x_{1}$ 是本征函数，本征值 $0$；$x_{2}$ 不是本征函数；$x_{3}$ 不是本征函数；$x_{4}$ 是本征函数，本征值 $1$；  
(e) $x_{1}$ 是本征函数，本征值 $2$；$x_{2}$ 是本征函数，本征值 $0$

### 3.9.3 MATLAB 练习

3.201 对下列数学函数 $f$，编写一个 MATLAB 函数（自拟函数名），输入一个 $m \times n$ 矩阵 $t$，返回同尺寸矩阵 $x$，使得 $x_{i,j}=f(t_{i,j})$。MATLAB 函数不得使用条件语句（如 if）或循环结构（如 for 或 while）。  

(a) $f(t)=\left(\frac{t^{2}-1}{t^{2}+1}\right) e^{-|t / 10|} \cos \left(\frac{t}{2 \pi}\right)$  
(b) $f(t)=\left(t^{2}+1\right)^{-1}+t e^{-|t|} \sin (2 t)$  
(c) $f(t)= \begin{cases}\frac{1}{2} & 0 \leq \sin (t)<\frac{1}{\sqrt{2}} \\ 1 & \sin (t)>\frac{1}{\sqrt{2}} \\ 0 & \text { otherwise }\end{cases}$  
(d) $f(t)=\operatorname{rect}(t)$  
(e) $f(t)=\operatorname{tri}(t / 2)= \begin{cases}1-|t| & -1 \leq t \leq 1 \\ 0 & \text { otherwise }\end{cases}$  
(f) $f(t)= \begin{cases}e^{t} & t<0 \\ 1 & 0 \leq t<1 \\ e^{1-t} & t \geq 1\end{cases}$  
(g) $f(t)= \begin{cases}|\sin (\pi t)| & |t| \leq 1 \\ |t|-1 & 1<|t| \leq 2 \\ 1 & \text { otherwise }\end{cases}$  
(h) $f(t)= \begin{cases}0 & t<0 \\ \frac{1}{2} & t=0 \\ 1 & t>0 \end{cases}$  
(i) $f(t)= \begin{cases}t^{-2} & t \geq 1 \\ 0 & \text { otherwise }\end{cases}$  
[提示：注意避免除以零。]  

3.202 编写一个 MATLAB 函数（自拟函数名），输入一个单变量函数 $x$，返回函数 $y$，如下所示：  
(a) $y=\operatorname{Even}(x)$；  
(b) $y=\operatorname{Odd}(x)$；  
(c) $y(t)=x(-t)$；  
(d) $y(t)= \begin{cases}x(t) & x(t) \geq 0 \\ 0 & \text { otherwise }\end{cases}$  
[提示：使用匿名函数。]  

3.203 编写一个名为 `plot_even_odd_parts` 的函数，输入参数 `func` 和 `range`，其中 `func` 是一个函数，`range` 为包含上下界的二元素向量。该函数应在 3×1 网格中绘制函数 `func` 及其偶函数和奇函数部分。使用 `fplot` 进行绘图。例如，调用 `plot_even_odd_parts(@exp, [-4 4])` 会绘制指数函数及其偶、奇部分，如下图所示：  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-086.jpg?height=628&width=798&top_left_y=359&top_left_x=675){width="400"}


