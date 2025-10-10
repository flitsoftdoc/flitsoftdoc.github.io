# 第12章 z变换

## 12.1 引言

在本章中，我们介绍一个在离散时间信号与系统研究中非常重要的数学工具——z变换。z变换可以（或多或少地）看作是经典离散时间傅里叶变换的推广。由于其更一般化的性质，$z$ 变换相比经典傅里叶变换具有若干优点。首先，某些序列虽然没有傅里叶变换，但却存在z变换。因此，我们能够用 $z$ 变换处理一些傅里叶变换无法处理的序列。其次，由于 $z$ 变换在某种意义上是一个更一般的工具，它能够提供超出傅里叶变换所能揭示的附加见解。

## 12.2 z变换的动机

在第9.10节中，我们表明复指数序列是离散时间LTI系统的本征序列。现在假设我们有一个冲激响应为 $h$ 的离散时间LTI系统。根据本征序列性质，该系统对复指数输入 $x(n)=z^{n}$ （其中 $z$ 是复常数）的响应 $y$ 为：

$$
y(n)=H(z) z^{n},
$$


其中

$$
\begin{equation*}
H(z)=\sum_{k=-\infty}^{\infty} h(n) z^{-n} . \tag{12.1}
\end{equation*}
$$


此前，我们将 $H$ 称为系统函数。在本章中，我们将了解到 $H$ 实际上是 $h$ 的z变换。也就是说，式 (12.1) 中的求和就是z变换的定义。当 $z=e^{j \Omega}$ 且 $\Omega$ 为实数时（即 $z$ 位于单位圆上），(12.1) 就变成了离散时间傅里叶变换的求和式（见第11章）。由于 (12.1) 将傅里叶变换包含为特殊情况，因此z变换可以看作是（经典）傅里叶变换的推广。
## 12.3 $\mathbf{z}$ 变换的定义

序列 $x$ 的（双边）$\mathbf{z}$ 变换记作 $z x$ 或 $X$，其定义为

$$
\begin{equation*}
z x(z)=X(z)=\sum_{n=-\infty}^{\infty} x(n) z^{-n} \tag{12.2}
\end{equation*}
$$


类似地，$X$ 的逆 $\mathbf{z}$ 变换记作 $Z^{-1} X$ 或 $x$，其形式为

$$
\begin{equation*}
z^{-1} X(n)=x(n)=\frac{1}{2 \pi j} \oint_{\Gamma} X(z) z^{n-1} d z \tag{12.3}
\end{equation*}
$$


其中 $\Gamma$ 是复平面上以原点为圆心、半径为 $r$ 的逆时针闭合圆形路径。我们称 $x$ 与 $X$ 为一对 z 变换对，并将这种关系记作

$$
x(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} X(z) .
$$


从式 (12.3) 可以看出，计算逆 z 变换需要做路径积分。具体而言，我们必须沿复平面中的圆形路径进行积分。然而，这类路径积分往往相当繁琐。因此，在实际应用中，我们通常不会直接利用 (12.3) 来计算逆 $z$ 变换，而是采用其他方法（稍后将介绍）。

常用的 $z$ 变换有两种形式。第一种是上面介绍的双边形式，第二种是单边形式。单边 $z$ 变换最常用于求解具有非零初始条件的差分方程。事实证明，单边与双边 $z$ 变换的唯一区别在于求和的下限：在双边情况下，下限为 $-\infty$，而在单边情况下，下限为 $0$。在本章的后续内容中，我们主要关注双边 z 变换。但我们也会简要介绍单边 z 变换，作为求解差分方程的工具。除非特别说明，本章中所有提及的 z 变换均指双边 z 变换。
## 12.4 关于涉及 $\mathbf{z}$ 变换的符号说明

z 变换算子 $z$ 与逆 z 变换算子 $z^{-1}$ 分别将序列映射为函数、函数映射为序列。因此，这些算子的运算对象必须是函数或序列（而不是一个数）。考虑图 12.1 中所示的无名序列，它将 $n$ 映射为 $e^{-|n/10|}$。假设我们想写出表示该序列 z 变换的式子。起初，我们可能会倾向于写作“$z\{e^{-|n/10|}\}$”。然而，严格来说，这样的符号写法并不正确，因为 z 变换算子要求其运算对象是一个序列，而“$e^{-|n/10|}$”严格意义上表示的是一个数（即图中序列在某个 $n$ 处的取值）。本质上，问题的根源在于该序列没有名称（如“$x$”）可供引用。为了解决这个问题，我们可以定义一个序列 $x$，通过方程 $x(n)=e^{-|n/10|}$ 给出，然后写作“$z x$”来表示其 z 变换。不幸的是，仅仅为了严格的符号正确性而引入一个新的序列名称往往会显得累赘，导致书写过于冗长。

一种避免冗长书写的方法是使用在第 2.1 节中介绍过的点符号（dot notation）。再考虑图 12.1 中的序列，它将 $n$ 映射为 $e^{-|n/10|}$。采用严格正确的符号，我们可以写作“$z\{e^{-|\cdot/10|}\}$”来表示该序列的 z 变换。换句话说，我们可以用中点符号（·）来表明某个表达式表示的是一个序列（而不是某个具体的序列取值）。点符号的使用示例见示例 12.1。当需要在保持精确符号的同时避免冗长时，点符号通常非常有用。

**示例 12.1（点符号）**。点符号的几个使用示例如下：

1. 若要表示由方程 $x(n)=n^{2}e^{-3n}u(n)$ 定义的序列 $x$ 的 z 变换（无需引入命名的序列 $x$），可写作：  
   $z\{(\cdot)^{2}e^{-3(\cdot)}u(\cdot)\}$。
2. 若要表示由方程 $x(n)=n^{2}e^{-3n}u(n)$ 定义的序列 $x$ 的 z 变换在 $3z$ 处的取值（无需引入命名的序列 $x$），可写作：  
   $z\{(\cdot)^{2}e^{-3(\cdot)}u(\cdot)\}(3z)$。
3. 若要表示由方程 $X(z)=z^{-1}$ 定义的函数 $X$ 的逆 z 变换（无需引入命名的函数 $X$），可写作：  
   $Z^{-1}\{(\cdot)^{-1}\}$。  

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-191.jpg?height=658&width=882&top_left_y=291&top_left_x=683){width="400"}
  
图 12.1：$e^{-|n/10|}$ 随 $n$ 的变化图。

4. 若要表示由方程 $X(z)=z^{-1}$ 定义的函数 $X$ 的逆 z 变换在 $n-1$ 处的取值（无需引入命名的函数 $X$），可写作：  
   $Z^{-1}\{(\cdot)^{-1}\}(n-1)$。

如果读者能够熟练使用点符号，作者鼓励在适当场合下使用。然而，考虑到部分读者可能觉得点符号难以理解，本书在大多数情况下尽量减少其使用。作为折中方案，本书采用以下符号约定，以在简洁性与清晰性之间取得平衡，而不必大量使用点符号：

- 除非另有说明，在 z 变换算子 $z$ 的运算对象表达式中，变量“$n$”被假定为序列的自变量（即就点符号而言，表达式中的每个“$n$”可视作“·”）；  
- 除非另有说明，在逆 z 变换算子 $z^{-1}$ 的运算对象表达式中，变量“$z$”被假定为函数的自变量（即就点符号而言，表达式中的每个“$z$”可视作“·”）。

一些使用上述本书推荐符号约定的例子见示例 12.2。诚然，这种符号约定在数学上多少有些不严谨，但它似乎是一个较好的折中方案，以便照顾那些不愿使用点符号的读者。

**示例 12.2（本书推荐符号）**。采用本书所用符号约定的几个例子如下：

1. 若要表示由方程 $x(n)=n^{2}e^{-3n}u(n)$ 定义的序列 $x$ 的 z 变换（无需引入命名的函数 $x$），可写作：  
   $z\{n^{2}e^{-3n}u(n)\}$。
2. 若要表示由方程 $x(n)=n^{2}e^{-3n}u(n)$ 定义的序列 $x$ 的 z 变换在 $3z$ 处的取值（无需引入命名的函数 $x$），可写作：  
   $z\{n^{2}e^{-3n}u(n)\}(3z)$。
3. 若要表示由方程 $X(z)=1+z^{-1}+z^{-2}$ 定义的函数 $X$ 的逆 z 变换（无需引入命名的函数 $X$），可写作：  
   $z^{-1}\{1+z^{-1}+z^{-2}\}$。
4. 若要表示由方程 $X(z)=1+z^{-1}+z^{-2}$ 定义的函数 $X$ 的逆 z 变换在 $n-1$ 处的取值（无需引入命名的函数 $X$），可写作：  
   $z^{-1}\{1+z^{-1}+z^{-2}\}(n-1)$。

由于对序列施加 z 变换算子会得到一个函数，我们可以在某些点上对该函数取值。同理，由于对函数施加逆 z 变换算子会得到一个序列，我们也可以在某些点上对该序列取值。再次考虑图 12.1 中的序列，它将 $n$ 映射为 $e^{-|n/10|}$。若要表示该序列 z 变换在 $3z$ 处的取值，用点符号可写作“$z\{e^{-|\cdot/10|}\}(3z)$”，或根据本书推荐的符号约定写作“$z\{e^{-|n/10|}\}(3z)$”。
## 12.5 $z$ 变换与离散时间傅里叶变换的关系

在本章第 12.3 节中，我们介绍了 z 变换，而在第 11 章中，我们研究了离散时间（DT）傅里叶变换。事实证明，$z$ 变换与离散时间傅里叶变换密切相关。回忆 (12.2) 中 z 变换的定义。考虑 (12.2) 的特殊情形，当 $z=e^{j\Omega}$ 且 $\Omega$ 为实数（即 $z$ 在单位圆上）时，(12.2) 变为

$$
\begin{aligned}
X\left(e^{j \Omega}\right) & =\left.\left[\sum_{n=-\infty}^{\infty} x(n) z^{-n}\right]\right|_{z=e^{j \Omega}} \\
& =\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \\
& =\mathcal{F} x(\Omega)
\end{aligned}
$$


因此，傅里叶变换只是 z 变换在 $z=e^{j\Omega}$ 处的取值，前提是该量有定义（即收敛）。换句话说，

$$
X\left(e^{j \Omega}\right)=\mathcal{F} x(\Omega)
$$


顺便提一句，正是由于上述关系，$x$ 的傅里叶变换有时写作 $X\left(e^{j\Omega}\right)$。当使用这种记号时，函数 $X$ 实际上对应的是 $x$ 的 z 变换，而不是它的傅里叶变换（即表达式 $X\left(e^{j\Omega}\right)$ 表示的是 z 变换在单位圆上的取值）。

现在考虑 (12.2) 中 $z$ 为任意复数的更一般情况。设 $z$ 的极坐标形式为 $z=r e^{j\Omega}$，其中 $r=|z|$，$\Omega=\arg z$。将 $z=r e^{j\Omega}$ 代入 (12.2)，得到

$$
\begin{aligned}
X\left(r e^{j \Omega}\right) & =\sum_{n=-\infty}^{\infty} x(n)\left(r e^{j \Omega}\right)^{-n} \\
& =\sum_{n=-\infty}^{\infty} x(n) r^{-n} e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{\infty}\left[r^{-n} x(n)\right] e^{-j \Omega n} \\
& =\mathcal{F}\left\{r^{-n} x(n)\right\}(\Omega)
\end{aligned}
$$


因此我们得到

$$
\begin{equation*}
X\left(r e^{j \Omega}\right)=\mathcal{F}\left\{r^{-n} x(n)\right\}(\Omega) \tag{12.4}
\end{equation*}
$$


由此可见，$x$ 的 z 变换可以看作 $x^{\prime}(n)=r^{-n}x(n)$ 的离散时间傅里叶变换（即 $x$ 乘以实指数序列加权后的傅里叶变换）。由于乘上了实指数 $r^{-n}$，某些序列的 z 变换可能存在，而其傅里叶变换却不存在。

利用上述关系，我们可以推导出 (12.3) 给出的逆 z 变换公式。设 $X$ 表示 $x$ 的 z 变换，令 $z=r e^{j\Omega}$，其中 $r$ 和 $\Omega$ 为实数，且 $r \geq 0$。根据 (12.4) 中傅里叶变换与 z 变换的关系，有

$$
X\left(r e^{j \Omega}\right)=\mathcal{F}\left\{r^{-n} x(n)\right\}(\Omega),
$$


其中 $r$ 的取值应保证 $X(z)$ 在 $z=r e^{j\Omega}$ 处收敛。对上述等式两边取逆傅里叶变换，得到

$$
r^{-n} x(n)=\mathcal{F}^{-1}\left\{X\left(r e^{j \Omega}\right)\right\}(n)
$$


两边同时乘以 $r^{n}$，得到

$$
x(n)=r^{n} \mathcal{F}^{-1}\left\{X\left(r e^{j \Omega}\right)\right\}(n)
$$


利用逆傅里叶变换的公式，可写为

$$
x(n)=r^{n} \frac{1}{2 \pi} \int_{2 \pi} X\left(r e^{j \Omega}\right) e^{j \Omega n} d \Omega
$$


将 $r^{n}$ 移入积分号，得

$$
x(n)=\frac{1}{2 \pi} \int_{2 \pi} X\left(r e^{j \Omega}\right)\left(r e^{j \Omega}\right)^{n} d \Omega
$$


现在我们进行变量代换。令 $z=r e^{j \Omega}$，则 $dz=j r e^{j \Omega} d\Omega=j z d\Omega$，即 $d\Omega=\frac{1}{j} z^{-1} dz$。代入后得到

$$
x(n)=\frac{1}{2 \pi} \oint X(z) z^{n}\left(\frac{1}{j}\right) z^{-1} d z
$$


当 $\Omega$ 从 $0$ 到 $2\pi$ 时，$z$ 在复平面上以逆时针方向描绘出一个以原点为圆心、半径为 $r$ 的闭合圆形路径。因此我们得到

$$
x(n)=\frac{1}{2 \pi j} \oint_{\Gamma} X(z) z^{n-1} d z
$$


其中 $\Gamma$ 表示以原点为圆心、半径为 $r$ 的逆时针闭合圆路径。换句话说，我们已经证明了式 (12.3) 的正确性。
## 12.6 z 变换示例

在本节中，我们计算一些相对简单函数的 $z$ 变换。在此过程中，我们将对 $z$ 变换获得一些重要的见解。

**例 12.3.** 求序列

$$
x(n)=a^{n} u(n),
$$


的 $z$ 变换 $X$，其中 $a$ 为实常数。  
**解：** 根据 $z$ 变换的定义，我们有

$$
\begin{aligned}
X(z) & =\sum_{n=-\infty}^{\infty} a^{n} u(n) z^{-n} \\
& =\sum_{n=0}^{\infty} a^{n} z^{-n} \\
& =\sum_{n=0}^{\infty}\left(a z^{-1}\right)^{n}
\end{aligned}
$$


为了化简上述求和式，我们回顾无穷几何级数的求和公式（由 (F.9) 给出）。该求和在 $\left|a z^{-1}\right|<1$ 时收敛。对该不等式整理，我们得到

$$
\begin{aligned}
& \left|a z^{-1}\right|<1 \\
\Rightarrow & \left|a^{-1} z\right|>1 \\
\Rightarrow & \left|a^{-1}\right||z|>1 \\
\Rightarrow & |z|>|a|
\end{aligned}
$$


由无穷几何级数的求和公式，我们可以写出

$$
\begin{aligned}
X(z) & =\frac{1}{1-a z^{-1}} \\
& =\frac{z}{z-a} \quad \text{当 } |z|>|a|
\end{aligned}
$$


因此，我们有

$$
a^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{1}{1-a z^{-1}} \quad \text{当 } |z|>|a| .
$$


---

**例 12.4.** 求序列

$$
x(n)=-a^{n} u(-n-1),
$$


的 $z$ 变换 $X$，其中 $a$ 为实常数。  
**解：** 根据 $z$ 变换的定义，我们有

$$
\begin{aligned}
X(z) & =\sum_{n=-\infty}^{\infty}-a^{n} u(-n-1) z^{-n} \\
& =-\sum_{n=-\infty}^{\infty} a^{n} u(-n-1) z^{-n} \\
& =-\sum_{n=-\infty}^{-1} a^{n} z^{-n} \\
& =-\sum_{n=1}^{\infty} a^{-n} z^{n} \\
& =-\sum_{n=1}^{\infty}\left(a^{-1} z\right)^{n}
\end{aligned}
$$


根据无穷几何级数求和公式（由 (F.9) 给出），我们推得 $X(z)$ 仅在 $\left|a^{-1} z\right|<1$ 时收敛。整理该不等式，我们得到

$$
\begin{aligned}
& \left|a^{-1} z\right|<1 \\
\Rightarrow & \left|a z^{-1}\right|>1 \\
\Rightarrow & |a|\left|z^{-1}\right|>1 \\
\Rightarrow & |z|<|a|
\end{aligned}
$$


由无穷几何级数的求和公式，我们可以写出

$$
\begin{aligned}
X(z) & =-\frac{a^{-1} z}{1-a^{-1} z} \\
& =\frac{1}{1-a z^{-1}} \\
& =\frac{z}{z-a} \quad \text{当 } |z|<|a|
\end{aligned}
$$


因此，我们有

$$
-a^{n} u(-n-1) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{1}{1-a z^{-1}} \quad \text{当 } |z|<|a| .
$$


---

此时，我们比较例 12.3 和例 12.4 的结果，并做出一个重要观察。注意在这两个例子中得到的 $X$ 的代数表达式相同（即 $X(z)=\frac{z}{z-a}$）。唯一的区别在于 $X$ 的收敛区域。在一个例子中，$X(z)$ 在 $|z|>|a|$ 时收敛，而在另一个例子中，它在 $|z|<|a|$ 时收敛。事实证明，要唯一确定 $x=z^{-1} X$，必须同时给出 $X$ 的代数表达式及其收敛区域。

---

**例 12.5.** 求序列

$$
x(n)=\delta\left(n-n_{0}\right)
$$


的 $z$ 变换 $X$，其中 $n_{0}$ 是一个整数常数。  
**解：** 根据 $z$ 变换的定义，我们有

$$
\begin{aligned}
X(z) & =\sum_{n=-\infty}^{\infty} \delta\left(n-n_{0}\right) z^{-n} \\
& =z^{-n_{0}}
\end{aligned}
$$


若 $n_{0}>0$，则 $X$ 在 $0$ 处有极点，因此 $X$ 的 ROC 为所有非零有限复数以及 $\infty$。若 $n_{0}<0$，则 $X$ 在 $\infty$ 处有极点，因此 $X$ 的 ROC 为所有（有限）复数。若 $n_{0}=0$，则 $X$ 没有极点，因此 $X$ 的 ROC 为所有（有限）复数以及 $\infty$。因此，ROC 为所有非零有限复数，并且可能还包括 $0$ 和/或 $\infty$。于是我们有

$$
\delta\left(n-n_{0}\right) \stackrel{\mathrm{ZT}}{\longleftrightarrow} z^{-n_{0}} \quad \text{当 } z \text{ 为所有非零有限复数以及可能的 } z=0 \text{ 和/或 } z=\infty .
$$


---

**例 12.6.** 求序列

$$
x(n)=\frac{1}{n!} a^{n} u(n)
$$


的 $z$ 变换 $X$，其中 $a$ 为实常数。  
**解：** 根据 $z$ 变换的定义，我们有

$$
\begin{aligned}
X(z) & =\sum_{n=-\infty}^{\infty} \frac{1}{n!} a^{n} u(n) z^{-n} \\
& =\sum_{n=0}^{\infty} \frac{1}{n!} a^{n} z^{-n} \\
& =\sum_{n=0}^{\infty} \frac{1}{n!}(a / z)^{n}
\end{aligned}
$$


由 (F.12) 可知 $e^{z}=\sum_{n=0}^{\infty} \frac{1}{n!} z^{n}$ 对所有复数 $z$ 成立，因此我们可以将上述 $X$ 的式子改写为

$$
X(z)=e^{a / z}
$$


（注意，许多有用的级数，包括上面用到的指数函数展开式，都可以在附录 F.6 中找到。）现在考虑 $X$ 的 ROC。该表达式不收敛的唯一情况是 $z=0$，此时分母为零。因此，$X$ 的 ROC 为 $|z|>0$（即 $z \neq 0$）。于是，最终我们得到

$$
X(z)=e^{a / z} \quad \text{当 } |z|>0
$$


---

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-196.jpg?height=1206&width=1376&top_left_y=283&top_left_x=316){width="400"}
  
图 12.2：不同类型集合的示例。(a) 圆心为 0、半径为 $r$ 的圆盘；(b) 圆心为 0、内半径为 $r_{0}$、外半径为 $r_{1}$ 的环形区域；(c) 圆心为 0、半径为 $r$ 的圆的外部区域。
## 12.7 $\mathbf{z}$ 变换的收敛域

在详细讨论 $z$ 变换的收敛域（ROC）之前，我们需要先引入一些涉及复平面集合的术语。  
以 $0$ 为圆心、$r$ 为半径的圆盘（更确切地说是开圆盘）是满足条件

$$
|z|<r,
$$


的所有复数 $z$ 的集合，其中 $r$ 是实常数并且 $r>0$。  
以 $0$ 为圆心、$r_{0}$ 为内半径、$r_{1}$ 为外半径的环形区域是满足条件

$$
r_{0}<|z|<r_{1},
$$


的所有复数 $z$ 的集合，其中 $r_{0}$ 和 $r_{1}$ 是实常数并且 $0<r_{0}<r_{1}$。  
以 $0$ 为圆心、$r$ 为半径的圆的外部区域是满足条件

$$
|z|>r,
$$


的所有复数 $z$ 的集合，其中 $r$ 是实常数并且 $r>0$。  
圆盘、环形区域和圆的外部区域的示例如图 12.2 所示。

由于 ROC 是复平面中的一个点集，因此在处理 ROC 时，我们经常需要使用一些基本的集合运算。对于两个集合 $A$ 和 $B$，它们的交集记作 $A \cap B$，表示同时属于 $A$ 和 $B$ 的所有点的集合。集合交集的一个示例如图 12.3 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-197.jpg?height=1281&width=1419&top_left_y=702&top_left_x=410){width="400"}
  
图 12.3：集合交集示例。(a) 集合 $R_{1}$，(b) 集合 $R_{2}$，以及 (c) 它们的交集 $R_{1} \cap R_{2}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-198.jpg?height=735&width=1646&top_left_y=289&top_left_x=175){width="400"}
  
图 12.4：集合与标量相乘的示例。(a) 集合 $R$；(b) 集合 $2R$。
对于一个集合 $S$ 和一个复常数 $a$，定义 $a S$ 为

$$
a S=\{a z: z \in S\} .
$$


也就是说，$a S$ 表示将集合 $S$ 中的每一个元素都乘以 $a$ 后所形成的集合。  
顺便提一下，集合 $S$ 与 $a S$ 在几何上有一个简单的关系：复平面中对应集合 $a S$ 的区域，可以通过将对应集合 $S$ 的区域绕原点旋转 $\arg a$，然后再按比例因子 $|a|$ 进行缩放得到。（旋转和缩放的顺序可以互换，因为它们是可交换的操作。）  
例如，假设 $R$ 是满足

$$
1<|z|<2,
$$


的复数 $z$ 的集合，如图 12.4(a) 所示。那么 $2R$ 是满足

$$
2<|z|<4,
$$


的复数 $z$ 的集合，如图 12.4(b) 所示。进一步，由于 $R$ 是以原点为中心的环形区域，所以对于所有满足 $|a|=1$ 的复数 $a$，都有 $R=aR$。也就是说，将集合 $R$ 绕原点旋转任意角度，得到的仍然是同一个集合 $R$。

对于一个集合 $S$，$S^{-1}$ 定义为

$$
S^{-1}=\left\{z^{-1}: z \in S\right\} .
$$


也就是说，$S^{-1}$ 表示将集合 $S$ 中的每一个元素都取倒数后所形成的集合。  
例如，假设 $R$ 是满足

$$
|z|>\frac{3}{4},
$$


的复数 $z$ 的集合，如图 12.5(a) 所示。那么 $R^{-1}$ 是满足

$$
|z|<\frac{4}{3},
$$


的复数 $z$ 的集合，如图 12.5(b) 所示。

正如我们之前看到的，对于一个序列 $x$，其 $z$ 变换 $X$ 的完整描述不仅需要 $X$ 的代数表达式，还需要 $X$ 对应的收敛域（ROC）。两个不同的序列可能会有相同的 $z$ 变换代数式。在接下来的内容中，我们将考察各种不同类型序列对应的 $z$ 变换收敛域的一些约束条件。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-199.jpg?height=714&width=1578&top_left_y=283&top_left_x=332){width="400"}
  
图 12.5：集合取倒数的示例。(a) 集合 $R$；(b) 集合 $R^{-1}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-199.jpg?height=460&width=1505&top_left_y=1088&top_left_x=370){width="400"}
  
图 12.6：一些作为 $z$ 变换 ROC 有效或无效的集合示例。
可以证明，$z$变换的ROC具有以下性质：

1. $z$变换 $X$ 的ROC由以原点为中心的同心圆组成。也就是说，如果一个点 $z_{0}$ 在ROC内，那么经过 $z_{0}$ 的以原点为中心的圆（即 $|z|=\left|z_{0}\right|$）也在ROC内。

**理由**：序列 $x$ 的 $z$ 变换 $X$ 只是序列 $x'(n) = |z|^{-n} x(n)$ 的（离散时间）傅里叶变换。因此，只要该傅里叶变换收敛，$X$ 就收敛。由于傅里叶变换的收敛性只依赖于 $|z|$，因此 $z$ 变换的收敛性也仅依赖于 $|z|$。

图 12.6 展示了一些可能作为有效或无效ROC的集合示例。

2. 如果 $z$ 变换 $X$ 是有理的，则 $X$ 的ROC不包含任何极点，并且由极点界定或延伸至无穷大。

**部分理由**：由于 $X$ 是有理函数，其在极点处取值为无穷大。因此显然 $X$ 在极点处不收敛。由此可知，$X$ 的ROC不能包含极点。

图 12.7 展示了一些可能作为有理 $z$ 变换ROC的有效或无效集合示例。

3. 如果序列 $x$ 是有限时长且其 $z$ 变换 $X$ 在至少一个点收敛，则 $X$ 在复平面中的所有点收敛（可能除了 0 和/或 $\infty$）（即ROC为一个可能排除0或包含$\infty$的圆盘）。如果 $x(n)=0$ 对所有 $n>0$ 成立，则ROC包括0（即 $X(z)$ 没有 $z$ 的负幂）。如果 $x$ 是因果的，则ROC包括$\infty$（即 $X(z)$ 没有 $z$ 的正幂）。图 12.8 展示了一些有限时长序列 $X$ ROC 的有效或无效集合示例。

4. 如果序列 $x$ 是右侧的，并且圆 $|z|=r_{0}$ 在 $X=z x$ 的ROC内，则所有 $|z|>r_{0}$ 的有限 $z$ 值也在ROC内（即ROC包含以0为中心的圆的外部，可能包括$\infty$）。如果 $x$ 是因果的，则ROC包括$\infty$。此外，如果 $x$ 右侧但不左侧，则 $X$ 的ROC为以0为中心的圆的外部，可能包括$\infty$。图 12.9 展示了这些情况的有效或无效集合示例。

5. 如果序列 $x$ 是左侧的，并且圆 $|z|=r_{0}$ 在 $X=z x$ 的ROC内，则所有 $0<|z|<r_{0}$ 的 $z$ 值也在ROC内（即ROC包含以0为中心的圆盘，可能排除0）。如果 $x(n)=0$ 对所有 $n>0$ 成立，则ROC包括0（即 $X(z)$ 没有 $z$ 的负幂）。此外，如果 $x$ 左侧但不右侧，则ROC为以0为中心的圆盘，可能排除0。图 12.10 展示了这些情况的有效或无效集合示例。

6. 如果序列 $x$ 是双侧的，并且圆 $|z|=r_{0}$ 在 $X=z x$ 的ROC内，则 $X$ 的ROC将是包含该圆 $|z|=r_{0}$ 的复平面环状区域（即ROC为以0为中心的环）。图 12.11 展示了这些情况的有效或无效集合示例。

7. 如果序列 $x$ 的 $z$ 变换 $X$ 是有理函数（至少有一个极点），则：
   (a) 如果 $x$ 是右侧的，$X$ 的ROC为复平面中以最大极点模为半径的圆外部区域（即最外极点的外部），可能包括$\infty$。
   (b) 如果 $x$ 是左侧的，$X$ 的ROC为复平面中以最小非零极点模为半径的圆内部区域，向内延伸到并可能包括0（即最内非零极点的内部区域）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-200.jpg?height=461&width=1511&top_left_y=291&top_left_x=243){width="400"}

**图 12.7**：有理 $z$ 变换ROC的有效或无效集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-200.jpg?height=463&width=1511&top_left_y=848&top_left_x=243){width="400"}

**图 12.8**：有限时长序列 $z$ 变换ROC的有效或无效集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-201.jpg?height=454&width=1505&top_left_y=370&top_left_x=370){width="400"}

**图 12.9**：右侧但不左侧序列 $z$ 变换ROC的有效或无效集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-201.jpg?height=457&width=1508&top_left_y=1102&top_left_x=367){width="400"}

**图 12.10**：左侧但不右侧序列 $z$ 变换ROC的有效或无效集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-201.jpg?height=466&width=1511&top_left_y=1828&top_left_x=367){width="400"}

**图 12.11**：双侧序列 $z$ 变换ROC的有效或无效集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-202.jpg?height=366&width=1539&top_left_y=291&top_left_x=226){width="400"}

**图 12.12**：左/右侧序列有理 $z$ 变换ROC的有效或无效集合示例。

**表 12.1**：$x$ 的侧性与 $X=Z x$ ROC 的关系
| $x$ |  | $X$ 的 ROC |
| :--- | :--- | :--- |
| 左侧 | 右侧 |  |
| 是 | 是 | 整个复平面，可能除了0和/或$\infty$ |
| 否 | 是 | 以原点为中心的圆外部，可能包括$\infty$ |
| 是 | 否 | 以原点为中心的圆盘，可能排除0 |
| 否 | 否 | 以原点为中心的环 |

图 12.12 展示了一些有理 $X$ 且 $x$ 为左/右侧序列时，ROC 的有效或无效集合示例。

注意，上述部分性质存在冗余。例如，性质 1、2 和 4 蕴含性质 7(a)，性质 1、2 和 5 蕴含性质 7(b)。此外，由于每个序列都可唯一分类为左侧但不右侧、右侧但不左侧、双侧（即既不左侧也不右侧）或有限时长（即同时左侧和右侧），我们可以根据性质 3、4、5 和 6 推断，ROC 仅可能具有以下形式：

- 整个复平面，可能除了0和/或$\infty$；
- 以原点为中心的圆外部，可能包括$\infty$；
- 以原点为中心的圆盘，可能排除0；
- 以原点为中心的环；
- 空集。

特别地，$X$ 的ROC依赖于 $x$ 的左右侧性，如表 12.1 所示。因此，ROC 必须是连通集合。（若集合 $S$ 中任意两元素 $a$ 和 $b$ 之间存在一条完全包含于 $S$ 内的路径，则称 $S$ 为连通集合。）例如，图 12.13 所示集合不可能是ROC。

**例 12.7**：序列 $x$ 的 $z$ 变换 $X$ 的代数表达式为

$$
X(z)=\frac{1}{\left(z^{2}-1\right)\left(z^{2}+4\right)}
$$


求 $X$ 的所有可能 ROC，并指出对应序列 $x$ 是左侧但不右侧、右侧但不左侧、双侧还是有限时长。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-203.jpg?height=533&width=1114&top_left_y=291&top_left_x=564){width="400"}

**图 12.13**：不可能是 $z$ 变换有效 ROC 的集合示例。

**解**：$X$ 的可能 ROC 由该函数的极点确定。因此，我们必须找到 $X$ 的极点。将分母因式分解，得到：

$$
X(z)=\frac{1}{(z+1)(z-1)(z+j 2)(z-j 2)}
$$


因此，$X$ 的极点为 $-1,1,-2j,2j$。由于这些极点仅有两个不同的模（分别为1和2），因此有三种可能的 ROC：
i) $|z|<1$，  
ii) $1<|z|<2$，  
iii) $|z|>2$。

这些 ROC 分别绘制在图 12.14(a)、(b) 和 (c) 中。第一个 ROC 为圆盘，因此对应的 $x$ 必为左侧但不右侧。第二个 ROC 为环，因此对应的 $x$ 必为双侧。第三个 ROC 为圆外部，因此对应的 $x$ 必为右侧但不左侧。
## 12.8 $\mathbf{z}$ 变换的性质

$z$ 变换具有许多重要性质。在接下来的各节中，我们将介绍其中的一些性质。为了方便读者理解，后续各节中描述的性质也在表 12.2（第 553 页）中进行了总结。

### 12.8.1 线性性质

可以说，$z$ 变换最重要的性质是线性性质，其如下介绍。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-204.jpg?height=1428&width=1578&top_left_y=634&top_left_x=208){width="400"}

**图 12.14**：示例 ROC。$X$ 的（a）第一个、（b）第二个、（c）第三个可能 ROC。

**定理 12.1（线性性质）**：若 $x_{1}(n) \stackrel{ZT}{\longleftrightarrow} X_{1}(z)$，ROC 为 $R_1$，且 $x_{2}(n) \stackrel{ZT}{\longleftrightarrow} X_{2}(z)$，ROC 为 $R_2$，则

$$
a_{1} x_{1}(n)+a_{2} x_{2}(n) \stackrel{ZT}{\longleftrightarrow} a_{1} X_{1}(z)+a_{2} X_{2}(z) \quad \text{ROC } R \text{ 包含 } R_1 \cap R_2,
$$


其中 $a_1$ 和 $a_2$ 为任意复常数。这就是 $z$ 变换的线性性质。

**证明**：令 $y(n)=a_1 x_1(n)+a_2 x_2(n)$，并令 $Y$ 为 $y$ 的 $z$ 变换。利用 $z$ 变换的定义并进行简单代数运算，有：

$$
\begin{aligned}
Y(z) &= \sum_{n=-\infty}^{\infty} \left[a_1 x_1(n)+a_2 x_2(n)\right] z^{-n} \\
&= \sum_{n=-\infty}^{\infty} a_1 x_1(n) z^{-n} + \sum_{n=-\infty}^{\infty} a_2 x_2(n) z^{-n} \\
&= a_1 \sum_{n=-\infty}^{\infty} x_1(n) z^{-n} + a_2 \sum_{n=-\infty}^{\infty} x_2(n) z^{-n} \\
&= a_1 X_1(z) + a_2 X_2(z)
\end{aligned}
$$


ROC $R$ 可由下式推导：若 $X_1$ 和 $X_2$ 在某点 $z=\lambda$ 收敛，则这些函数的任意线性组合在 $z=\lambda$ 也必收敛。因此，ROC $R$ 必包含 $R_1 \cap R_2$。由此证明了线性性质成立。

在上述定理中，注意 ROC $R$ 可能大于 $R_1 \cap R_2$。当 $X_1$ 和 $X_2$ 为有理函数时，只有在表达式 $a_1 X_1(z)+a_2 X_2(z)$ 中发生极点-零点抵消时才会出现这种情况。

**例 12.8（无极点-零点抵消的线性性质）**：求序列

$$
x(n)=a^{|n|}
$$


的 $z$ 变换 $X$，其中 $a$ 为满足 $|a|<1$ 的复常数。

**解**：首先，将 $x$ 写作 $x=x_1+x_2$，其中

$$
x_1(n)=a^{-n} u(-n-1), \quad x_2(n)=a^n u(n)
$$


由表 12.3 可知：

$$
-a^n u(-n-1) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-a} \text{ 对 } |z|<|a|, \quad a^n u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-a} \text{ 对 } |z|>|a|.
$$


因此：

$$
X_1(z)=-\frac{z}{z-a^{-1}} \text{ 对 } |z|<|a^{-1}|, \quad X_2(z)=\frac{z}{z-a} \text{ 对 } |z|>|a|
$$


利用 $z$ 变换的线性性质，有：

$$
\begin{aligned}
X(z) &= X_1(z)+X_2(z) \\
&= -\frac{z}{z-a^{-1}} + \frac{z}{z-a} \\
&= \frac{z^2 - a^{-1} z - (z^2 - a z)}{(z-a)(z-a^{-1})} \\
&= \frac{z^2 - a^{-1} z - z^2 + a z}{(z-a)(z-a^{-1})} \\
&= \frac{(a-a^{-1}) z}{(z-a)(z-a^{-1})}
\end{aligned}
$$


现在，我们必须确定 $X$ 的 ROC $R$。设 $R_1$ 和 $R_2$ 分别为 $X_1$ 和 $X_2$ 的 ROC。我们知道 $R$ 必须包含 $R_1 \cap R_2$，其中

$$
\begin{aligned}
R_1 \cap R_2 &= \left\{|z|<|a^{-1}|\right\} \cap \{|z|>|a|\} \\
&= \left\{|a|<|z|<|a^{-1}|\right\}。
\end{aligned}
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-206.jpg?height=1322&width=1413&top_left_y=283&top_left_x=289){width="400"}

**图 12.15**：线性性质示例的 ROC。（a）$X_1$ 的 ROC，（b）$X_2$ 的 ROC，（c）$X_1$ 和 $X_2$ ROC 的交集对应的 ROC，（d）$X$ 的 ROC。

此外，$R$ 不可能大于该交集，因为 $X$ 在 $a$ 和 $a^{-1}$ 处有极点。因此，$R=R_1 \cap R_2$。各种 ROC 如图 12.15 所示。综上所述，我们有：

$$
X(z)=\frac{(a-a^{-1})z}{(z-a)(z-a^{-1})}, \quad |a|<|z|<|a^{-1}|.
$$


**例 12.9（含极点-零点抵消的线性性质）**：利用 $z$ 变换的线性性质及以下 $z$ 变换对

$$
u(n+1) \stackrel{ZT}{\longleftrightarrow} \frac{z^2}{z-1} \text{ 对 } |z|>1, \quad u(n-2) \stackrel{ZT}{\longleftrightarrow} \frac{1}{z(z-1)} \text{ 对 } |z|>1
$$


求序列

$$
x(n) = u(n+1) - u(n-2)
$$


的 $z$ 变换 $X$。

**解**：首先，令

$$
x_1(n) = u(n+1), \quad x_2(n) = u(n-2)
$$


并设 $X_1$ 和 $X_2$ 分别为 $x_1$ 和 $x_2$ 的 $z$ 变换。设 $R_X, R_{X_1}, R_{X_2}$ 分别为 $X, X_1, X_2$ 的 ROC。根据 $z$ 变换的线性性质，有

$$
\begin{aligned}
X(z) &= z\{x_1 - x_2\}(z) \\
&= X_1(z) - X_2(z)
\end{aligned}
$$


利用已知 $z$ 变换对，可写为

$$
\begin{aligned}
X(z) &= \frac{z^2}{z-1} - \frac{1}{z(z-1)} \\
&= \frac{z^3 - 1}{z(z-1)} \\
&= \frac{(z-1)(z^2+z+1)}{z(z-1)} \\
&= \frac{z^2+z+1}{z}
\end{aligned}
$$


由已知 $z$ 变换对，可得

$$
R_{X_1} = R_{X_2} = \{|z|>1\}。
$$


现在必须确定 $R_X$。由线性性质，$R_X$ 至少包含 $R_{X_1} \cap R_{X_2}$，即

$$
R_{X_1} \cap R_{X_2} = R_{X_1} \cap R_{X_1} = R_{X_1} = \{|z|>1\}。
$$


然而，我们还必须确定 $R_X$ 是否大于该交集。由于 $X_1$ 和 $X_2$ 为有理函数，$R_X$ 仅在发生极点-零点抵消时才可能大于该交集。$X_1$ 和 $X_2$ 的极点及 ROC 分别如图 12.16(a) 和 (b) 所示，而 $R_{X_1} \cap R_{X_2}$ 与 $X$ 的极点一起如图 12.16(c) 所示。显然，在计算 $X$ 时，$z=1$ 的极点被抵消（即 $X$ 没有在 1 处的极点，而 $X_1$ 和 $X_2$ 有）。现在考虑 ROC 是否可能大于图 12.16(c) 所示的区域。由于 $X$ 为有理函数，我们知道 ROC 必须由极点界定，或者在没有极点界定的情况下向外延伸至无穷大，向内延伸至零。显然，图 12.16(c) 的内边界没有被极点界定。因此，$R_X$ 必须大于 $R_{X_1} \cap R_{X_2}$。具体而言，为得到 $R_X$，必须将区域向内延伸至紧邻原点极点之前。因此，我们得到：

$$
R_X = \{|z|>0\}
$$


$X$ 的极点及 $R_X$ 如图 12.16(d) 所示。综上所述，我们有：

$$
X(z) = \frac{z^2 + z + 1}{z}, \quad |z|>0
$$


### 12.8.2 平移性质（时间移位）

接下来介绍 $z$ 变换的平移性质（即时域移位性质），如下所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-208.jpg?height=1292&width=1430&top_left_y=678&top_left_x=283){width="400"}

**图 12.16**：线性性质示例的 ROC。（a）$X_1$ 的 ROC，（b）$X_2$ 的 ROC，（c）$X_1$ 和 $X_2$ ROC 的交集对应的 ROC，（d）$X$ 的 ROC。

**定理 12.2（平移性质/时间移位）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
x(n-n_0) \stackrel{ZT}{\longleftrightarrow} z^{-n_0} X(z) \quad \text{ROC 为 } R \text{，可能仅在0或}\infty\text{有所增加或删除},
$$


其中 $n_0$ 为整数常数。这就是 $z$ 变换的平移性质（或时间移位性质）。

**证明**：令 $y(n) = x(n-n_0)$，并设 $Y$ 为 $y$ 的 $z$ 变换。由 $z$ 变换定义：

$$
Y(z) = \sum_{n=-\infty}^{\infty} x(n-n_0) z^{-n}
$$


引入变量代换：令 $k = n - n_0$，则 $n = k + n_0$。代入得到：

$$
\begin{aligned}
Y(z) &= \sum_{k=-\infty}^{\infty} x(k) z^{-(k+n_0)} \\
&= z^{-n_0} \sum_{k=-\infty}^{\infty} x(k) z^{-k} \\
&= z^{-n_0} X(z)
\end{aligned}
$$


现在确定 $Y$ 的 ROC $R'$. 若 $X(z)$ 在某点收敛，则 $Y(z)$ 仅可能因 $z^{-n_0}$ 产生的极点而不收敛。该极点在 $n_0>0$ 时位于0，在 $n_0<0$ 时位于 $\infty$。因此，$R'$ 必与 $R$ 相同，可能例外为 0 和 $\infty$。由此证明平移性质成立。

**例 12.10（平移性质）**：求序列

$$
x(n) = u(n-n_0)
$$


的 $z$ 变换，其中 $n_0$ 为整数常数。

**解**：由表 12.3 可知 $u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}$，$|z|>1$。利用时间移位性质：

$$
\begin{aligned}
X(z) &= z^{-n_0} z u(z) \\
&= z^{-n_0} \frac{z}{z-1} \\
&= \frac{z^{1-n_0}}{z-1}, \quad |z|>1
\end{aligned}
$$


因此：

$$
u(n-n_0) \stackrel{ZT}{\longleftrightarrow} \frac{z^{1-n_0}}{z-1}, \quad |z|>1
$$


**例 12.11（矩形脉冲）**：利用 $z$ 变换性质及对

$$
u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1
$$


求序列

$$
x(n) = 
\begin{cases}
1 & n \in [n_0, n_1) \\
0 & \text{其他}
\end{cases}
$$


的 $z$ 变换，其中 $n_0$ 和 $n_1$ 为有限整数，且 $n_0 < n_1$。

**解**：可将 $x$ 重写为

$$
x(n) = u(n-n_0) - u(n-n_1)
$$


令 $v_1(n) = u(n-n_0)$，$v_2(n) = u(n-n_1)$，则 $x(n) = v_1(n) - v_2(n)$。利用平移性质：

$$
V_1(z) = z^{-n_0} z u(z) = z^{-n_0} \frac{z}{z-1}, \quad V_2(z) = z^{-n_1} z u(z) = z^{-n_1} \frac{z}{z-1}
$$


再利用线性性质：

$$
X(z) = V_1(z) - V_2(z) = \left(z^{-n_0} - z^{-n_1}\right) \frac{z}{z-1}
$$


由于 $x$ 是有限时长序列，$X$ 的 ROC 为整个复平面，可能排除0。ROC 是否包括0取决于 $n_0$ 和 $n_1$ 的具体值。例如，当 $n_1 \le 1$ 时，ROC 包含0。
### 12.8.3 复调制（$z$ 域缩放）

接下来介绍 $z$ 变换的复调制性质（即 $z$ 域缩放），如下所示。

**定理 12.3（复调制/ $z$ 域缩放）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
a^n x(n) \stackrel{ZT}{\longleftrightarrow} X(z/a), \quad ROC: R' = |a| R
$$


其中 $a$ 为非零复常数。这就是 $z$ 变换的复调制性质（或 $z$ 域缩放性质）。

**证明**：令 $y(n) = a^n x(n)$，并设 $Y$ 为 $y$ 的 $z$ 变换。由 $z$ 变换定义，有：

$$
\begin{aligned}
Y(z) &= \sum_{n=-\infty}^{\infty} a^n x(n) z^{-n} \\
&= \sum_{n=-\infty}^{\infty} x(n) (a^{-1} z)^{-n} \\
&= X(z/a)
\end{aligned}
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-211.jpg?height=703&width=1474&top_left_y=286&top_left_x=391){width="400"}

**图 12.17**：复调制的 ROC。序列 $z$ 变换的 ROC（a）缩放前，（b）缩放后。

现在确定 $Y$ 的 ROC $R'$. 由于 $X(z) = Y(a z)$，若 $X$ 在 $z$ 收敛，则 $Y$ 在 $a z$ 必收敛。因此 $R' = a R$。将 $a$ 表示为极坐标形式：

$$
R' = |a| e^{j \arg a} R
$$


由于 $R$ 必为以原点为中心的同心圆集合，对任意实数 $\theta$ 有 $R = e^{j\theta} R$，因此可写为：

$$
R' = |a| R
$$


由此证明复调制性质成立。

复调制对 $z$ 变换 ROC 的影响如图 12.17 所示。假设序列 $x$ 的 $z$ 变换 ROC 如图 12.17(a)，则序列 $y(n) = a^n x(n)$ 的 $z$ 变换 ROC 如图 12.17(b)。

**例 12.12（复调制性质）**：利用 $z$ 变换性质及 $z$ 变换对

$$
u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1
$$


求序列

$$
x(n) = a^n u(n)
$$


的 $z$ 变换 $X$。

**解**：利用 $z$ 域缩放性质及已知 $z$ 变换对：

$$
\begin{aligned}
X(z) &= \frac{z/a}{z/a - 1} \\
&= \frac{z}{z-a}
\end{aligned}
$$


对于 $X$ 的 ROC $R_X$，有：

$$
|z/a|>1 \Rightarrow |z|/|a|>1 \Rightarrow |z|>|a|
$$


因此：

$$
a^n u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-a}, \quad |z|>|a|
$$


### 12.8.4 共轭

接下来介绍 $z$ 变换的共轭性质，如下所示。

**定理 12.4（共轭）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
x^*(n) \stackrel{ZT}{\longleftrightarrow} X^*(z^*), \quad ROC = R
$$


这就是 $z$ 变换的共轭性质。

**证明**：令 $y(n) = x^*(n)$，并设 $Y$ 为 $y$ 的 $z$ 变换。由 $z$ 变换定义，有：

$$
\begin{aligned}
Y(z) &= \sum_{n=-\infty}^{\infty} x^*(n) z^{-n} \\
&= \left( \sum_{n=-\infty}^{\infty} x^*(n) z^{-n} \right)^{**} \\
&= \left( \sum_{n=-\infty}^{\infty} x(n) (z^{-n})^* \right)^* \\
&= \left( \sum_{n=-\infty}^{\infty} x(n) (z^*)^{-n} \right)^* \\
&= X^*(z^*)
\end{aligned}
$$


现在考虑 $Y$ 的 ROC。由于 $Y(z) = X^*(z^*)$，$Y(z)$ 收敛当且仅当 $X(z^*)$ 收敛。又 $X(z^*)$ 收敛当且仅当 $z^* \in R$。因为 $z^* \in R$ 当且仅当 $z \in R$，所以 $Y$ 的 ROC 为 $R$。由此证明共轭性质成立。

**例 12.13（共轭性质）**：设序列 $x$ 与 $y$ 的关系为

$$
y(n) = \operatorname{Re}[x(n)]
$$


设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的 $z$ 变换，求 $Y$ 与 $X$ 的关系。

**解**：由复数性质可知 $\operatorname{Re} \alpha = \frac{1}{2}(\alpha + \alpha^*)$，因此有：

$$
\begin{aligned}
Y(z) &= z\left\{ \frac{1}{2}[x(n) + x^*(n)] \right\}(z) \\
&= \frac{1}{2} z x(n) + \frac{1}{2} z\{x^*(n)\}(z) \\
&= \frac{1}{2} X(z) + \frac{1}{2} X^*(z^*)
\end{aligned}
$$


$Y$ 的 ROC 与 $X$ 的 ROC 相同。
### 12.8.5 时域反转

接下来介绍 $z$ 变换的时域反转性质，如下所示。

**定理 12.5（时域反转）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
x(-n) \stackrel{ZT}{\longleftrightarrow} X(z^{-1}), \quad ROC: R' = R^{-1}
$$


这就是 $z$ 变换的时域反转性质。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-213.jpg?height=703&width=1474&top_left_y=286&top_left_x=391){width="400"}

**图 12.18**：时域反转的 ROC。序列 $z$ 变换的 ROC（a）反转前，（b）反转后。

**证明**：令 $y(n) = x(-n)$，并设 $Y$ 为 $y$ 的 $z$ 变换。由 $z$ 变换定义，有：

$$
Y(z) = \sum_{n=-\infty}^{\infty} x(-n) z^{-n}
$$


令 $k=-n$，则 $n=-k$。代入变量变换：

$$
\begin{aligned}
Y(z) &= \sum_{k=-\infty}^{\infty} x(k) z^k \\
&= \sum_{k=-\infty}^{\infty} x(k) (z^{-1})^{-k} \\
&= X(z^{-1})
\end{aligned}
$$


由于 $Y(z) = X(z^{-1})$，$Y(z)$ 收敛当且仅当 $z^{-1} \in R$，即 $z \in R^{-1}$。因此，$Y$ 的 ROC 为 $R^{-1}$，由此证明时域反转性质成立。

时域反转对 $z$ 变换 ROC 的影响如图 12.18 所示。假设序列 $x$ 的 $z$ 变换 ROC 如图 12.18(a)，则序列 $y(n) = x(-n)$ 的 $z$ 变换 ROC 如图 12.18(b)。

**例 12.14（时域反转性质）**：利用已知 $z$ 变换对

$$
u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1
$$


求序列

$$
x(n) = u(-n)
$$


的 $z$ 变换 $X$。

**解**：由给定的 $z$ 变换对和时域反转性质，有：

$$
X(z) = \frac{z^{-1}}{z^{-1}-1}, \quad |z^{-1}|>1
$$


化简代数表达式：

$$
X(z) = \frac{z^{-1}}{z^{-1}-1} = \frac{1}{1-z}
$$


化简 ROC：

$$
|z^{-1}|>1 \Rightarrow |z|<1
$$


因此：

$$
X(z) = \frac{1}{1-z}, \quad |z|<1
$$


**例 12.15**：设序列 $x$ 与 $y$ 的关系为

$$
y(n) = \operatorname{Even}\{x\}(n) = \frac{1}{2}[x(n) + x(-n)]
$$


设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的 $z$ 变换，求 $Y$ 与 $X$ 的关系。

**解**：令 $v(n) = x(-n)$，$V$ 为 $v$ 的 $z$ 变换，$R_X$ 与 $R_Y$ 分别为 $X$ 与 $Y$ 的 ROC。由时域反转性质：

$$
V(z) = X(z^{-1}), \quad z \in R_X^{-1}
$$


由线性性质：

$$
\begin{aligned}
Y(z) &= \frac{1}{2}[X(z) + V(z)] \\
&= \frac{1}{2}[X(z) + X(z^{-1})], \quad R_Y \supset R_X \cap R_X^{-1}
\end{aligned}
$$


（注意，符号 "$\supset$" 表示“包含”）。若无关于 $x$ 的进一步信息，则无法进一步简化。

### 12.8.6 上采样（时间扩展）

在第 8.2.4 节中，引入了序列的上采样操作。人们可能会想，上采样对序列的 $z$ 变换有什么影响。答案由下述定理给出。

**定理 12.6（上采样，即时间扩展）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
(\uparrow M) x(n) \stackrel{ZT}{\longleftrightarrow} X(z^M), \quad ROC: R' = R^{1/M},
$$


其中 $R^{1/M}$ 表示由 $R$ 中元素的 $M$ 次根组成的集合。这就是 $z$ 变换的上采样性质（或时间扩展性质）。

**证明**：设 $y(n) = (\uparrow M) x(n)$。由 $z$ 变换定义：

$$
Y(z) = \sum_{n=-\infty}^{\infty} y(n) z^{-n}
$$


由于当 $n/M$ 非整数时，$y(n) = 0$，因此可改写为：

$$
Y(z) = \sum_{\substack{n \in \mathbb{Z}: \\ M \text{ 整除 } n}} y(n) z^{-n}
$$


令 $\lambda = n/M$，则 $n = M \lambda$。注意 $\lambda$ 必为整数。代入变量变换：

$$
Y(z) = \sum_{\lambda=-\infty}^{\infty} y(M \lambda) z^{-M \lambda}
$$


由于 $x(n) = y(M n)$，可得：

$$
\begin{aligned}
Y(z) &= \sum_{\lambda=-\infty}^{\infty} x(\lambda) (z^M)^{-\lambda} \\
&= X(z^M)
\end{aligned}
$$


考虑 $Y$ 的 ROC $R'$。由于 $Y(z) = X(z^M)$，$Y$ 在 $z$ 收敛当且仅当 $X$ 在 $z^M$ 收敛，即 $Y$ 在 $z^{1/M}$ 收敛当且仅当 $X$ 在 $z$ 收敛。因此 $R' = R^{1/M}$。由此证明了上采样性质成立。

**例 12.16（上采样性质）**：求序列

$$
x(n) = \begin{cases} 1, & n \ge 0 \text{ 且 } n \text{ 为偶数} \\ 0, & \text{否则} \end{cases}
$$


的 $z$ 变换 $X$。

**解**：注意到 $x = (\uparrow 2) u$。由表 12.3，可知

$$
u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1.
$$


利用 $z$ 变换的上采样性质：

$$
\begin{aligned}
X(z) &= z u(z^2) \\
&= \frac{z^2}{z^2 - 1}
\end{aligned}
$$


设 $R = \{|z|>1\}$（即 $u$ 的 $z$ 变换的 ROC）。由于 $R^{1/2} = R$，因此 $X$ 的 ROC 为 $R$。故有：

$$
(\uparrow 2) u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z^2}{z^2 - 1}, \quad |z|>1.
$$


### 12.8.7 下采样

在第 8.2.3 节中，引入了序列的下采样操作。人们可能会想，下采样对序列的 $z$ 变换有什么影响。答案由下述定理给出。

**定理 12.7（下采样）**：若 $x(n) \stackrel{ZT}{\longleftrightarrow} X(z)$，ROC 为 $R$，则

$$
(\downarrow M) x(n) \stackrel{ZT}{\longleftrightarrow} \frac{1}{M} \sum_{k=0}^{M-1} X\Big(e^{-j 2 \pi k / M} z^{1/M}\Big), \quad ROC: R' = R^M,
$$


其中 $R^M$ 表示由 $R$ 中元素的 $M$ 次幂组成的集合。这就是 $z$ 变换的下采样性质。

**证明**：设 $y = (\downarrow M) x$，$Y$ 为其 $z$ 变换，则

$$
Y(z) = \sum_{n=-\infty}^{\infty} y(n) z^{-n} = \sum_{n=-\infty}^{\infty} x(M n) z^{-n}.
$$


定义序列

$$
v(n) = \begin{cases} x(n), & M \text{ 整除 } n \\ 0, & \text{否则} \end{cases}
$$


则 $v(M n) = x(M n)$，所以

$$
Y(z) = \sum_{n=-\infty}^{\infty} v(M n) z^{-n}.
$$


令 $n' = M n$，则 $n = n'/M$，代入并去掉下标：

$$
Y(z) = \sum_{\substack{n \in \mathbb{Z} \\ M \text{ 整除 } n}} v(n) z^{-n/M} = \sum_{n=-\infty}^{\infty} v(n) z^{-n/M} = V(z^{1/M}).
$$


由于 $v(n) = c(n) x(n)$，其中

$$
c(n) = \begin{cases} 1, & M \text{ 整除 } n \\ 0, & \text{否则} \end{cases},
$$


且 $c(n)$ 为周期 $M$ 的序列，可展开为 Fourier 级数：

$$
c(n) = \frac{1}{M} \sum_{k=0}^{M-1} e^{j 2 \pi k n / M}.
$$


则

$$
\begin{aligned}
V(z) &= \sum_{n=-\infty}^{\infty} c(n) x(n) z^{-n} \\
&= \frac{1}{M} \sum_{k=0}^{M-1} \sum_{n=-\infty}^{\infty} x(n) \left(z e^{-j 2 \pi k / M}\right)^{-n} \\
&= \frac{1}{M} \sum_{k=0}^{M-1} X\left(z e^{-j 2 \pi k / M}\right).
\end{aligned}
$$


结合上式，得

$$
Y(z) = V(z^{1/M}) = \frac{1}{M} \sum_{k=0}^{M-1} X\Big(z^{1/M} e^{-j 2 \pi k / M}\Big),
$$


ROC 为 $R' = R^M$。

**例 12.17（下采样性质）**：设 $y(n) = (\downarrow 2) x(n)$，$X$ 和 $Y$ 分别为 $x$ 和 $y$ 的 $z$ 变换，且

$$
X(z) = \frac{z^2 - 1}{z^2 - \frac{1}{4}}, \quad |z|>\frac{1}{2}.
$$


求 $Y$。

**解**：由下采样性质，

$$
\begin{aligned}
Y(z) &= \frac{1}{2} \sum_{k=0}^{1} X\left((-1)^k z^{1/2}\right) \\
&= \frac{1}{2} \left[ X(z^{1/2}) + X(-z^{1/2}) \right] \\
&= \frac{1}{2} \left( \frac{z - 1}{z - 1/4} + \frac{z - 1}{z - 1/4} \right) \\
&= \frac{z - 1}{z - 1/4}.
\end{aligned}
$$


ROC 为 $|z| > (1/2)^2 = 1/4$。

逆 $z$ 变换为：

$$
\begin{aligned}
x(n) &= 4 \delta(n) - \frac{3}{2} \left( [1 + (-1)^n] (1/2)^n \right) u(n), \\
y(n) &= 4 \delta(n) - 3 (1/4)^n u(n),
\end{aligned}
$$


如预期，$y(n) = x(2 n)$。

### 12.8.8 卷积（Convolution）

下一个要介绍的 $z$ 变换性质是卷积性质。

**定理 12.8（卷积）**：若

$$
x_1(n) \stackrel{ZT}{\longleftrightarrow} X_1(z), \quad ROC: R_1, \quad x_2(n) \stackrel{ZT}{\longleftrightarrow} X_2(z), \quad ROC: R_2,
$$


则

$$
x_1 * x_2(n) \stackrel{ZT}{\longleftrightarrow} X_1(z) X_2(z), \quad ROC: R \text{ 包含 } R_1 \cap R_2.
$$


这就是 $z$ 变换的时域卷积性质。

**证明**：

从 $z$ 变换定义出发：

$$
z\{x_1 * x_2\}(z) = \sum_{n=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x_1(k) x_2(n-k) z^{-n}.
$$


令 $\lambda = n - k \implies n = \lambda + k$，则

$$
\begin{aligned}
z\{x_1 * x_2\}(z) &= \sum_{\lambda=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x_1(k) x_2(\lambda) z^{-(\lambda+k)} \\
&= \sum_{k=-\infty}^{\infty} x_1(k) z^{-k} \sum_{\lambda=-\infty}^{\infty} x_2(\lambda) z^{-\lambda} \\
&= X_1(z) X_2(z).
\end{aligned}
$$


ROC $R$ 必须包含 $R_1 \cap R_2$，且如果 $X_1$ 和 $X_2$ 是有理函数，ROC 可能因为极点-零点抵消而更大。

**性质说明**：该性质的实际意义在于，$z$ 变换可以将卷积转化为乘法，从而避免直接进行卷积运算，这在处理离散时间 LTI 系统时非常有用。

**例 12.18（卷积性质）**：

求序列

$$
x(n) = u * u(n)
$$


的 $z$ 变换。

**解**：

由表 12.3：

$$
u(n) \stackrel{ZT}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1.
$$


利用卷积性质：

$$
\begin{aligned}
X(z) &= z\{ u * u \}(z) \\
&= z u(z) \cdot z u(z) \\
&= \left( \frac{z}{z-1} \right) \left( \frac{z}{z-1} \right) \\
&= \frac{z^2}{(z-1)^2}.
\end{aligned}
$$


ROC 为 $|z|>1$，因为 $R_X$ 必须包含 $R \cap R = R$，且无极点-零点抵消。

**结论**：

$$
X(z) = \frac{z^2}{(z-1)^2}, \quad |z|>1.
$$


### 12.8.9 z 域求导

接下来要介绍的 z 变换性质是 z 域求导性质，如下所示。  
定理 12.9（z 域求导）。若 $x(n) \stackrel{Z T}{\longleftrightarrow} X(z)$ 且 ROC 为 $R$，则有

$$
n x(n) \stackrel{Z T}{\longleftrightarrow}-z \frac{d}{d z} X(z) \quad \text { ROC 仍为 } R.
$$


这就是 z 变换的 z 域求导性质。  

**证明**：为了证明上述性质，我们按如下步骤进行。从 z 变换的定义出发，有

$$
X(z)=\sum_{n=-\infty}^{\infty} x(n) z^{-n}
$$


对上式两边求导，得到

$$
\begin{aligned}
\frac{d}{d z} X(z) & =\frac{d}{d z} \sum_{n=-\infty}^{\infty} x(n) z^{-n} \\ 
& =\sum_{n=-\infty}^{\infty} x(n) \frac{d}{d z}\left(z^{-n}\right) \\ 
& =\sum_{n=-\infty}^{\infty} x(n)(-n) z^{-n-1} \\ 
& =-z^{-1} \sum_{n=-\infty}^{\infty} n x(n) z^{-n}
\end{aligned}
$$


两边同时乘以 $-z$，得到

$$
\begin{aligned}
-z \frac{d}{d z} X(z) & =\sum_{n=-\infty}^{\infty} n x(n) z^{-n} \\ 
& =z\{n x(n)\}(z)
\end{aligned}
$$


因此，我们已经证明了 z 域求导性质成立。  

**例 12.19（z 域求导性质）**：利用 z 变换的性质以及 z 变换对

$$
\frac{1}{n!} a^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} e^{a / z}, \quad |z|>0
$$


求序列

$$
x(n)=\frac{1}{n!} n a^{n} u(n)
$$


的 z 变换 $X(z)$。  

**解**：设 $v(n)=\frac{1}{n!} a^{n} u(n)$（即给定 z 变换对中的序列），则 $x(n)=n v(n)$。对 $v$ 进行 z 变换，得到

$$
V(z)=e^{a / z}, \quad |z|>0
$$


利用 z 变换的 z 域求导性质，对 $x$ 进行 z 变换，得到

$$
X(z)=-z \frac{d}{d z} V(z)
$$


将 $V(z)$ 代入 $X(z)$ 的公式，得到

$$
\begin{aligned}
X(z) & =-z \frac{d}{d z} e^{a / z} \\ 
& =-z e^{a / z} \frac{d}{d z}\left(a z^{-1}\right) \\ 
& =-z e^{a / z}\left(-a z^{-2}\right) \\ 
& =a z^{-1} e^{a / z}
\end{aligned}
$$


$X(z)$ 的 ROC 与给定 z 变换对的 ROC 相同。因此，我们有

$$
X(z)=a z^{-1} e^{a / z}, \quad |z|>0
$$


### 12.8.10 差分

接下来要介绍的 $z$ 变换性质是差分性质，如下所示。  
定理 12.10（差分）。若 $x(n) \stackrel{Z T}{\longleftrightarrow} X(z)$ 且 ROC 为 $R$，则有

$$
x(n)-x(n-1) \stackrel{Z T}{\longleftrightarrow}\left(1-z^{-1}\right) X(z), \quad \text{ROC 为 } R^{\prime} \text{，包含 } R \cap\{|z|>0\}。
$$


这就是 $z$ 变换的差分性质。  

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(n)=x(n)-x(n-1)$，并令 $Y$ 为 $y$ 的 z 变换。从 z 变换的定义出发，有

$$
\begin{aligned}
Y(z) & =\sum_{n=-\infty}^{\infty}[x(n)-x(n-1)] z^{-n} \\ 
& =\sum_{n=-\infty}^{\infty} x(n) z^{-n}-\sum_{n=-\infty}^{\infty} x(n-1) z^{-n} \\ 
& =X(z)-\sum_{n=-\infty}^{\infty} x(n-1) z^{-n}
\end{aligned}
$$


现在，采用变量替换。设 $\lambda=n-1$，则 $n=\lambda+1$。应用变量替换后，得到

$$
\begin{aligned}
Y(z) & =X(z)-\sum_{\lambda=-\infty}^{\infty} x(\lambda) z^{-(\lambda+1)} \\ 
& =X(z)-z^{-1} \sum_{\lambda=-\infty}^{\infty} x(\lambda) z^{-\lambda} \\ 
& =X(z)-z^{-1} X(z) \\ 
& =\left(1-z^{-1}\right) X(z)
\end{aligned}
$$


现在，考虑 $Y$ 的 ROC $R^{\prime}$。假设 $X$ 为有理函数。由于 $Y(z)=\left(1-z^{-1}\right) X(z)=\frac{z-1}{z} X(z)$，除非 $\frac{z-1}{z}$ 因子引入的 0 点极点被抵消，否则 $Y$ 在 0 点有极点。在这种情况下，ROC $R^{\prime}$ 不可能包含原点。因此，需要限制 $|z|>0$。由此，我们已经证明了差分性质成立。  

在上述定理中，注意 ROC $R^{\prime}$ 可以大于 $R \cap\{|z|>0\}$。当 $X$ 是有理函数时，这只有在 $\left(1-z^{-1}\right) X(z)=\frac{z-1}{z} X(z)$ 表达式中发生零极点抵消时才可能。  

**例 12.20（差分性质）**：求序列

$$
y(n)=x(n)-x(n-1)
$$


的 z 变换 $Y$，其中

$$
x(n)=a^{n} u(n)
$$


且 $a$ 为复常数。  

**解**：从表 12.3 可知，z 变换对为

$$
a^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-a}, \quad |z|>|a|。
$$


利用 z 变换的差分性质及上述 z 变换对，得到

$$
\begin{aligned}
Y(z) & =\left(1-z^{-1}\right)\left(\frac{z}{z-a}\right) \\ 
& =\left(\frac{z-1}{z}\right)\left(\frac{z}{z-a}\right) \\ 
& =\frac{z-1}{z-a}.
\end{aligned}
$$


$Y$ 的 ROC 为 $|z|>|a|$，除非 $a=1$，此时 ROC 为整个复平面。因此，我们有

$$
Y(z)=\frac{z-1}{z-a}, \quad z \in R \quad \text{其中 } R= \begin{cases}|z|>|a| & a \neq 1 \\ \mathbb{C} & \text{否则.}\end{cases}
$$


### 12.8.11 累加

接下来要介绍的 $z$ 变换性质是累加性质，如下所示。  
定理 12.11（累加）。若 $x(n) \stackrel{Z T}{\longleftrightarrow} X(z)$ 且 ROC 为 $R$，则有

$$
\sum_{k=-\infty}^{n} x(k) \stackrel{Z T}{\longleftrightarrow} \frac{z}{z-1} X(z), \quad \text{ROC 为 } R^{\prime} \text{，包含 } R \cap\{|z|>1\}。
$$


这就是 $z$ 变换的累加性质。  

**证明**：为了证明此定理，我们按如下步骤进行。设

$$
y(n)=\sum_{k=-\infty}^{n} x(k)
$$


并令 $Y$ 为 $y$ 的 z 变换。从 z 变换的定义出发，有

$$
\begin{aligned}
Y(z) & =\sum_{n=-\infty}^{\infty} y(n) z^{-n} \\ 
& =\sum_{n=-\infty}^{\infty} \sum_{k=-\infty}^{n} x(k) z^{-n} \\ 
& =\sum_{n=-\infty}^{\infty} \sum_{k=-\infty}^{n} x(k) u(n-k) z^{-n}
\end{aligned}
$$


现在，采用变量替换。设 $\lambda=n-k$，则 $n=\lambda+k$。应用该变量替换后，得到

$$
\begin{aligned}
Y(z) & =\sum_{\lambda=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x(k) u(\lambda) z^{-(\lambda+k)} \\ 
& =\sum_{k=-\infty}^{\infty} x(k) z^{-k} \sum_{\lambda=-\infty}^{\infty} u(\lambda) z^{-\lambda} \\ 
& =X(z) \sum_{\lambda=0}^{\infty} z^{-\lambda}
\end{aligned}
$$


假设 $|z|>1$（使无穷等比级数收敛），则上述无穷等比级数可简化（利用公式 (F.9)），得到

$$
Y(z)=\frac{z}{z-1} X(z)
$$


$Y$ 的 ROC $R^{\prime}$ 必须满足 $|z|>1$，以保证上述无穷级数收敛。假设 $X$ 为有理函数，且没有发生零极点抵消，则 $Y$ 具有与 $X$ 相同的所有极点，并在 1 点新增一个极点。因此，$R^{\prime}=R \cap\{|z|>1\}$。由此，我们已经证明了累加性质成立。  

在上述定理中，注意 ROC $R^{\prime}$ 可以大于 $R \cap\{|z|>1\}$。当 $X$ 是有理函数时，这只有在 $\frac{z}{z-1} X(z)$ 表达式中发生零极点抵消时才可能。  

$z$ 变换的累加性质具有重要的实际意义。由于 $z$ 变换可以将累加操作转换为乘法（乘以 $\frac{z}{z-1}$），因此可以利用 z 变换避免直接处理累加运算。这在处理包含累加的方程时通常非常有用。  

**例 12.21（累加性质）**：利用 z 变换对

$$
\delta(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} 1
$$


以及 z 变换的累加性质，求序列

$$
x(n)=u(n)
$$


的 z 变换 $X$。  

**解**：首先，注意到

$$
x(n)=\sum_{k=-\infty}^{n} \delta(k)
$$


利用 z 变换的累加性质对 $x$ 进行 z 变换，得到

$$
X(z)=\frac{z}{z-1} z \delta(z)
$$


利用给定的 z 变换对，得到

$$
\begin{aligned}
X(z) & =\frac{z}{z-1}(1) \\ 
& =\frac{z}{z-1}
\end{aligned}
$$


由于 $z \delta$ 是有理函数，且在 $1$ 与 $\frac{z}{z-1}$ 相乘时没有发生极点抵消，因此 $X$ 的 ROC 为

$$
R=\{|z|>1\}
$$


因此，我们得到结论

$$
X(z)=\frac{z}{z-1}, \quad |z|>1
$$


### 12.8.12 初值定理与终值定理

接下来要介绍的 $z$ 变换性质被称为初值定理和终值定理，如下所示。  

**定理 12.12（初值定理）**：设 $x$ 为序列，其 z 变换为 $X$。若 $x$ 是因果序列，则有

$$
\begin{equation*}
x(0)=\lim _{z \rightarrow \infty} X(z) \tag{12.7}
\end{equation*}
$$


该结果称为初值定理。  

**证明**：为了证明上述结果，我们从 (12.7) 右侧的极限出发。根据 z 变换的定义，有

$$
\lim _{z \rightarrow \infty} X(z)=\lim _{z \rightarrow \infty} \sum_{n=-\infty}^{\infty} x(n) z^{-n}
$$


由于 $x$ 为因果序列，上式可改写为

$$
\lim _{z \rightarrow \infty} X(z)=\lim _{z \rightarrow \infty} \sum_{n=0}^{\infty} x(n) z^{-n}
$$


交换求和与极限的顺序，得到

$$
\begin{aligned}
\lim _{z \rightarrow \infty} X(z) & =\sum_{n=0}^{\infty} x(n) \lim _{z \rightarrow \infty} z^{-n} \\ 
& =\sum_{n=0}^{\infty} x(n) \delta(n) \\ 
& =x(0)
\end{aligned}
$$


由此，我们证明了初值定理成立。  

**定理 12.13（终值定理）**：设 $x$ 为序列，其 z 变换为 $X$。若 $x$ 是因果序列且 $\lim _{n \rightarrow \infty} x(n)$ 存在，则有

$$
\begin{equation*}
\lim _{n \rightarrow \infty} x(n)=\lim _{z \rightarrow 1}[(z-1) X(z)] \tag{12.8}
\end{equation*}
$$


该结果称为终值定理。  

**证明**：为了证明上述性质，我们考虑 (12.8) 右侧。根据时域平移性质，有

$$
z\{x(n+1)-x(n)\}(z)=(z-1) X(z)
$$


此外，还可以得到

$$
z\{x(n+1)-x(n)\}(z)=\lim _{n \rightarrow \infty} \sum_{k=-n}^{n}[x(k+1)-x(k)] z^{-k}
$$


利用该事实以及 $x$ 的因果性，可将 (12.8) 右侧表示为

$$
\begin{aligned}
& \lim _{z \rightarrow 1} \lim _{n \rightarrow \infty} \sum_{k=-n}^{n}[x(k+1)-x(k)] z^{-k} \\ 
& =\lim _{z \rightarrow 1} \lim _{n \rightarrow \infty}\left(x(0) z+[x(1)-x(0)] + [x(2)-x(1)] z^{-1} + \ldots + [x(n)-x(n-1)] z^{-n+1} + [x(n+1)-x(n)] z^{-n}\right) \\ 
& =\lim _{z \rightarrow 1} \lim _{n \rightarrow \infty}\left(x(0)(z-1)+x(1)(1-z^{-1})+\ldots+x(n)(z^{-n+1}-z^{-n})+x(n+1) z^{-n}\right) \\ 
& =\lim _{n \rightarrow \infty} \lim _{z \rightarrow 1}\left(x(0)(z-1)+x(1) \frac{z-1}{z} + \ldots + x(n) \frac{z-1}{z^n} + x(n+1) z^{-n}\right) \\ 
& =\lim _{n \rightarrow \infty} x(n+1) \\ 
& =\lim _{n \rightarrow \infty} x(n)
\end{aligned}
$$


由此，我们证明了终值定理成立。  

**例 12.22（初值/终值定理）**：设因果序列 $x$ 在 $\infty$ 处存在极限，其 z 变换为

$$
X(z)=\frac{4 z^{2}-3 z}{2 z^{2}-3 z+1}
$$


求 $x(0)$ 与 $\lim _{n \rightarrow \infty} x(n)$。  

**解**：根据初值定理，有

$$
\begin{aligned}
x(0) & =\lim _{z \rightarrow \infty} \frac{4 z^{2}-3 z}{2 z^{2}-3 z+1} \\ 
& =\frac{4}{2} \\ 
& =2
\end{aligned}
$$


根据终值定理，有

$$
\begin{aligned}
\lim _{n \rightarrow \infty} x(n) & =\lim _{z \rightarrow 1}\left[(z-1) \frac{4 z^{2}-3 z}{2 z^{2}-3 z+1}\right] \\ 
& =\lim _{z \rightarrow 1}\left[(z-1) \frac{4 z^{2}-3 z}{2\left(z-\frac{1}{2}\right)(z-1)}\right] \\ 
& =\lim _{z \rightarrow 1}\left[\frac{4 z^{2}-3 z}{2\left(z-\frac{1}{2}\right)}\right] \\ 
& =1
\end{aligned}
$$


顺便说明，$X$ 的逆 z 变换为

$$
x(n)=\left[\left(\frac{1}{2}\right)^{n}+1\right] u(n)
$$


如预期，前述计算得到的 $x(0)$ 与 $x(\infty)$ 的值与该 $x(n)$ 的表达式一致。  

此外，初值定理和终值定理在检查 z 变换计算错误时非常有用。例如，假设需要计算序列 $x$ 的 z 变换 $X$，如果在计算中出现错误，则利用初值定理和终值定理从 $X$ 得到的 $x(0)$ 与 $\lim_{n \to \infty} x(n)$ 很可能与直接使用 $x$ 得到的值不一致。通过这种方式，可以比较容易地检测 z 变换计算中的某些类型错误。

## 12.9 更多 z 变换例子

在本章前面，我们已经推导出一些 z 变换对。表 12.3 列出了这些及其他重要的变换对。利用表 12.2 中列出的各种 z 变换性质以及表 12.3 中的 z 变换对，我们可以更容易地求出更复杂函数的 z 变换。  

**例 12.23**：利用 z 变换性质及 z 变换对

$$
u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-1}, \quad |z|>1
$$


求序列的 z 变换 $X$。  

$$
x(n)=\sum_{k=-\infty}^{n}[u(k+5)-u(k)]
$$


表 12.2：（双边）$z$ 变换的性质
| 属性 | 时域 | z 域 | ROC |
| :--- | :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(n)+a_{2} x_{2}(n)$ | $a_{1} X_{1}(z)+a_{2} X_{2}(z)$ | 至少为 $R_{1} \cap R_{2}$ |
| 平移 | $x\left(n-n_{0}\right)$ | $z^{-n_{0}} X(z)$ | $R$，可能增加或删除 0 |
| 复调制 | $a^{n} x(n)$ | X(z/a) | $|a| R$ |
| 共轭 | $x^{*}(n)$ | $X^{*}\left(z^{*}\right)$ | $R$ |
| 时域反转 | $x(-n)$ | $X(1 / z)$ | $R^{-1}$ |
| 上采样 | $(\uparrow M) x(n)$ | $X\left(z^{M}\right)$ | $R^{1 / M}$ |
| 下采样 | $(\downarrow M) x(n)$ | $\frac{1}{M} \sum_{k=0}^{M-1} X\left(e^{-j 2 \pi k / M} z^{1 / M}\right)$ | $R^{M}$ |
| 卷积 | $x_{1} * x_{2}(n)$ | $X_{1}(z) X_{2}(z)$ | 至少为 $R_{1} \cap R_{2}$ |
| z 域微分 | $n x(n)$ | $-z \frac{d}{d z} X(z)$ | $R$ |
| 差分 | $x(n)-x(n-1)$ | $\frac{z-1}{z} X(z)=\left(1-z^{-1}\right) X(z)$ | 至少为 $R \cap|z|>0$ |
| 累加 | $\sum_{k=-\infty}^{n} x(k)$ | $\frac{z}{z-1} X(z)=\frac{1}{1-z^{-1}} X(z)$ | 至少为 $R \cap|z|>1$ |

| 属性 |  |
| :--- | :--- |
| 初值定理 | $x(0)=\lim _{z \rightarrow \infty} X(z)$ |
| 终值定理 | $\lim _{n \rightarrow \infty} x(n)=\lim _{z \rightarrow 1}[(z-1) X(z)]$ |

表 12.3：（双边）$z$ 变换的变换对
| 对 | $x(n)$ | X(z) | ROC |
| :----- | :----- | :----- | :----- |
| 1 | $\delta(n)$ | 1 | 所有 $z$ |
| 2 | $u(n)$ | $\frac{z}{z-1}=\frac{1}{1-z^{-1}}$ | $|z|>1$ |
| 3 | $-u(-n-1)$ | $\frac{z}{z-1}=\frac{1}{1-z^{-1}}$ | $|z|<1$ |
| 4 | nu(n) | $\frac{z}{(z-1)^{2}}=\frac{z^{-1}}{\left(1-z^{-1}\right)^{2}}$ | $|z|>1$ |
| 5 | $-n u(-n-1)$ | $\frac{z}{(z-1)^{2}}=\frac{z^{-1}}{\left(1-z^{-1}\right)^{2}}$ | $|z|<1$ |
| 6 | $a^{n} u(n)$ | $\frac{z}{z-a}=\frac{1}{1-a z^{-1}}$ | $|z|>|a|$ |
| 7 | $-a^{n} u(-n-1)$ | $\frac{z}{z-a}=\frac{1}{1-a z^{-1}}$ | $|z|<|a| $ |
| 8 | $n a^{n} u(n)$ | $\frac{a z}{(z-a)^{2}}=\frac{a z^{-1}}{\left(1-a z^{-1}\right)^{2}}$ | $|z|>|a| $ |
| 9 | $-n a^{n} u(-n-1)$ | $\frac{a z}{(z-a)^{2}}=\frac{a z^{-1}}{\left(1-a z^{-1}\right)^{2}}$ | $|z|<|a| $ |
| 10 | $\frac{(n+1)(n+2) \cdots(n+m-1)}{(m-1)!} a^{n} u(n)$ | $\frac{z^{m}}{(z-a)^{m}}=\frac{1}{\left(1-a z^{-1}\right)^{m}}$ | $|z|>|a|$ |
| 11 | $-\frac{(n+1)(n+2) \cdots(n+m-1)}{(m-1)!} a^{n} u(-n-1)$ | $\frac{z^{m}}{(z-a)^{m}}=\frac{1}{\left(1-a z^{-1}\right)^{m}}$ | $|z|<|a|$ |
| 12 | $\cos \left(\Omega_{0} n\right) u(n)$ | $\frac{z\left(z-\cos \Omega_{0}\right)}{z^{2}-2 z \cos \Omega_{0}+1}=\frac{1-\left(\cos \Omega_{0}\right) z^{-1}}{1-\left(2 \cos \Omega_{0}\right) z^{-1}+z^{-2}}$ | $|z|>1$ |
| 13 | $-\cos \left(\Omega_{0} n\right) u(-n-1)$ | $\frac{z \sin \Omega_{0}}{z^{2}-2 z \cos \Omega_{0}+1}=\frac{\left(\sin \Omega_{0}\right) z^{-1}}{1-\left(2 \cos \Omega_{0}\right) z^{-1}+z^{-2}}$ | $|z|<1$ |
| 15 | $-\sin \left(\Omega_{0} n\right) u(-n-1)$ | $\frac{z \sin \Omega_{0}}{z^{2}-2 z \cos \Omega_{0}+1}=\frac{\left(\sin \Omega_{0}\right) z^{-1}}{1-\left(2 \cos \Omega_{0}\right) z^{-1}+z^{-2}}$ | $|z|<1$ |
| 16 | $a^{n} \cos \left(\Omega_{0} n\right) u(n)$ | $\begin{aligned} \frac{z\left(z-a \cos \Omega_{0}\right)}{z^{2}-2 a z \cos \Omega_{0}+a^{2}} & =\frac{1-\left(a \cos \Omega_{0}\right) z^{-1}}{1-\left(2 a \cos \Omega_{0}\right) z^{-1}+a^{2} z^{-2}} \\ \frac{a z \sin \Omega_{0}}{z^{2}-2 a z \cos \Omega_{0}+a^{2}} & =\frac{\left(a \sin \Omega_{0}\right) z^{-1}}{1-\left(2 a \cos \Omega_{0}\right) z^{-1}+a^{2} z^{-2}} \end{aligned}$ | $|z|>|a|$ |
| 18 | $u(n)-u(n-M), M>0$ | $\frac{z\left(1-z^{-M}\right)}{z-1}=\frac{1-z^{-M}}{1-z^{-1}}$ | $|z|>0$ |
| 19 | $a^{|n|},|a|<1$ | $\frac{\left(a-a^{-1}\right) z}{(z-a)\left(z-a^{-1}\right)}$ | $|a|<|z|<\left|a^{-1}\right|$ |


**解**：设 $v_{1}(n)=u(n+5)$，则有

$$
x(n)=\sum_{k=-\infty}^{n}\left[v_{1}(k)-u(k)\right]
$$


设 $v_{2}(n)=v_{1}(n)-u(n)$，则

$$
x(n)=\sum_{k=-\infty}^{n} v_{2}(k)
$$


对各序列进行 z 变换，得到

$$
\begin{gathered}
X(z)=\frac{z}{z-1} V_{2}(z), \\
V_{2}(z)=V_{1}(z)-\frac{z}{z-1}, \quad \text {且 } V_{1}(z)=z^{5}\left(\frac{z}{z-1}\right)
\end{gathered}
$$


代入得到

$$
\begin{aligned}
X(z) & =\frac{z}{z-1} V_{2}(z) \\ 
& =\frac{z}{z-1}\left(V_{1}(z)-\frac{z}{z-1}\right) \\ 
& =\frac{z}{z-1}\left(z^{5} \frac{z}{z-1}-\frac{z}{z-1}\right) \\ 
& =\frac{z}{z-1}\left(\frac{z^{6}}{z-1}-\frac{z}{z-1}\right) \\ 
& =\frac{z}{z-1}\left(\frac{z^{6}-z}{z-1}\right) \\ 
& =\frac{z^{2}\left(z^{5}-1\right)}{(z-1)^{2}}
\end{aligned}
$$


由于 $x(n)=0$ 对所有 $n \leq -6$，因此 $x$ 是右侧序列。ROC 必须在最外侧极点 1 之外。因此，

$$
X(z)=\frac{z^{2}\left(z^{5}-1\right)}{(z-1)^{2}}, \quad |z|>1
$$


---

**例 12.24**：求序列

$$
x(n)=n u(n-1)
$$


的 z 变换 $X$。  

**解**：设 $v_{1}(n)=u(n-1)$，则

$$
x(n)=n v_{1}(n)
$$


对各序列进行 z 变换，得到

$$
\begin{gathered}
V_{1}(z)=z^{-1}\left(\frac{z}{z-1}\right)=\frac{1}{z-1}, \\
X(z)=-z \frac{d}{d z} V_{1}(z)
\end{gathered}
$$


代入计算得到

$$
\begin{aligned}
X(z) & =-z \frac{d}{d z}\left[(z-1)^{-1}\right] \\ 
& =-z\left[-(z-1)^{-2}\right] \\ 
& =\frac{z}{(z-1)^{2}}
\end{aligned}
$$


由于 $x(n)=0$ 对所有 $n<1$，$x$ 是右侧序列，因此 ROC 在最外侧极点 1 之外。因此，

$$
X(z)=\frac{z}{(z-1)^{2}}, \quad |z|>1
$$


## 12.10 逆 z 变换的求解

如前所述，在实际应用中，我们很少直接使用公式 (12.3) 来计算逆 z 变换。该公式需要进行轮廓积分，而这通常并不容易计算。相反，我们会采用多种其他方法，例如部分分式展开、幂级数展开以及多项式长除法。在接下来的各节中，我们将依次讨论这些方法。

### 12.10.1 部分分式展开

在求解有理函数的逆 z 变换时，常采用部分分式展开的方法。使用该方法时，为了求有理函数的逆 z 变换，我们首先对该函数进行部分分式展开。这样可以得到若干较简单的函数（对应部分分式展开中的各项），我们通常可以在表格中（如表 12.3）直接查出这些函数的逆 z 变换。下面假设读者已经熟悉部分分式展开，对于不熟悉的读者，可参考附录 B 中的部分分式展开教程。

考虑有理函数 $X$ 的逆 z 变换 $x$ 的计算。假设 $X$ 具有 $P$ 个（互不相同的）极点 $p_{1}, p_{2}, \ldots, p_{P}$，其中 $p_{k}$ 的阶数为 $q_{k}$。假设 $X$ 是严格真分式，则其在变量 $z$ 下的部分分式展开形式为：

$$
X(z)=\sum_{k=1}^{P} \sum_{\ell=1}^{q_{k}} A_{k, \ell} \frac{1}{\left(z-p_{k}\right)^{\ell}} .
$$


为了对上式右边求逆 z 变换，我们必须能够对形如 $\frac{1}{(z-a)^{m}}$ 的函数（其中 $a$ 为复常数，$m$ 为正整数）求逆 z 变换。不幸的是，表 12.3 并未直接包含执行此类逆变换计算所需的条目。尽管我们可以结合 z 变换的平移（即时移）性质使用表中的条目进行逆变换计算，但这样会导致逆 z 变换表达式包含大量的时移操作，从而使表达式变得复杂（通常不希望如此）。因此，我们改为对 $X(z)/z$ 进行部分分式展开。该部分分式的形式为：

$$
\begin{equation*}
\frac{X(z)}{z}=\sum_{k=1}^{P} \sum_{\ell=1}^{q_{k}} A_{k, \ell}^{\prime} \frac{1}{\left(z-p_{k}\right)^{\ell}} . \tag{12.9}
\end{equation*}
$$


通过该部分分式展开，我们可以将 $X$ 改写为

$$
X(z)=\sum_{k=1}^{P} \sum_{\ell=1}^{q_{k}} A_{k, \ell}^{\prime} \frac{z}{\left(z-p_{k}\right)^{\ell}} .
$$


为了对上式右边求逆 z 变换，我们必须能够对形如 $\frac{z}{(z-a)^{m}}$ 的函数求逆 z 变换。幸运的是，表 12.3 中直接包含了处理此类逆 z 变换所需的条目（当 $m \le 2$ 时）。

另一种方法是将 $X$ 表示为变量 $z^{-1}$ 下的部分分式展开，而非 $z$。这样，我们得到 $X$ 的部分分式展开形式为：

$$
\begin{equation*}
X(z)=\sum_{k=1}^{P} \sum_{\ell=1}^{q_{k}} A_{k, \ell} \frac{1}{\left(1-p_{k} z^{-1}\right)^{\ell}} \tag{12.10}
\end{equation*}
$$


为了对上式右边求逆 z 变换，我们必须能够对形如 $\frac{1}{\left(1-a z^{-1}\right)^{m}}$ 的函数求逆 z 变换。幸运的是，表 12.3 中直接包含了处理此类逆 z 变换所需的条目。例如，可以使用表中的以下变换对：

$$
\begin{aligned}
& (n+1)(n+2) \cdots (n+m-1) a^{n} u(n) \stackrel{\mathrm{zT}}{\longleftrightarrow} \frac{1}{\left(1-a z^{-1}\right)^{m}}, \quad |z|>|a|, \\
& -\frac{(n+1)(n+2) \cdots (n+m-1)}{(m-1)!} a^{n} u(-n-1) \stackrel{\mathrm{zT}}{\longleftrightarrow} \frac{1}{\left(1-a z^{-1}\right)^{m}}, \quad |z|<|a|.
\end{aligned}
$$


（表中其他若干 z 变换对为上述两类对的特例。）

由此可见，为了计算逆 z 变换，我们可以采用如公式 (12.9) 或公式 (12.10) 所示的部分分式展开方法。如果 $X(z)$ 仅包含正幂的 $z$，公式 (12.9) 的形式更有用；如果 $X(z)$ 仅包含负幂的 $z$，公式 (12.10) 的形式更有用。由于我们通常将有理 z 变换表示为仅含正幂的 $z$，因此在计算逆 z 变换时，通常会更倾向于采用公式 (12.9) 的部分分式展开形式。接下来，我们将通过若干例子进一步说明逆 z 变换的计算方法。
### Example 12.25 求逆 z 变换

**题目**：求下列函数的逆 z 变换

\[
X(z)=\frac{1}{\left(z+\frac{1}{2}\right)\left(z-\frac{1}{2}\right)} = \frac{z^{-2}}{\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{2} z^{-1}\right)}, \quad |z|>\frac{1}{2}.
\]

---

#### 方法一：在 $z$ 变量下使用部分分式展开

1. 首先，考虑 $X(z)$ 仅包含正幂的形式：

\[
X(z)=\frac{1}{\left(z+\frac{1}{2}\right)\left(z-\frac{1}{2}\right)}.
\]

2. 因为表 12.3 无法直接求出逆 z 变换，故对

\[
\frac{X(z)}{z} = \frac{1}{z\left(z+\frac{1}{2}\right)\left(z-\frac{1}{2}\right)}
\]

进行部分分式展开：

\[
\frac{X(z)}{z} = \frac{A_1}{z} + \frac{A_2}{z+\frac{1}{2}} + \frac{A_3}{z-\frac{1}{2}}.
\]

3. 求展开系数：

\[
\begin{aligned}
A_1 &= \left. z \frac{X(z)}{z} \right|_{z=0} = \frac{1}{\frac{1}{2} \cdot (-\frac{1}{2})} = -4, \\
A_2 &= \left. \left(z+\frac{1}{2}\right) \frac{X(z)}{z} \right|_{z=-\frac{1}{2}} = \frac{1}{(-\frac{1}{2}) \cdot (-1)} = 2, \\
A_3 &= \left. \left(z-\frac{1}{2}\right) \frac{X(z)}{z} \right|_{z=\frac{1}{2}} = \frac{1}{\frac{1}{2} \cdot 1} = 2.
\end{aligned}
\]

4. 得到部分分式展开：

\[
\frac{X(z)}{z} = -4 \frac{1}{z} + 2 \frac{1}{z+\frac{1}{2}} + 2 \frac{1}{z-\frac{1}{2}}.
\]

5. 恢复 $X(z)$：

\[
X(z) = -4 + 2 \frac{z}{z+\frac{1}{2}} + 2 \frac{z}{z-\frac{1}{2}}.
\]

6. 取逆 z 变换，利用表 12.3：

\[
\begin{aligned}
x(n) &= -4 \delta(n) + 2 \left(-\frac{1}{2}\right)^n u(n) + 2 \left(\frac{1}{2}\right)^n u(n).
\end{aligned}
\]

---

#### 方法二：在 $z^{-1}$ 变量下使用部分分式展开

1. 考虑 $X(z)$ 仅包含负幂的形式：

\[
X(z) = \frac{z^{-2}}{\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{2} z^{-1}\right)}.
\]

2. 将 $X$ 表示为严格真分式和多项式之和：

\[
\begin{aligned}
X(z) &= -4 + \frac{4}{\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{2} z^{-1}\right)} \\
&= -4 + V(z), \quad V(z)=\frac{4}{\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{2} z^{-1}\right)}.
\end{aligned}
\]

3. 对 $V(z)$ 部分进行部分分式展开：

\[
V(z) = \frac{A_1}{1+\frac{1}{2} z^{-1}} + \frac{A_2}{1-\frac{1}{2} z^{-1}}.
\]

4. 求系数：

\[
A_1 = 2, \quad A_2 = 2.
\]

5. 得到 $X(z)$ 展开式：

\[
X(z) = -4 + 2 \frac{1}{1+\frac{1}{2} z^{-1}} + 2 \frac{1}{1-\frac{1}{2} z^{-1}}.
\]

6. 取逆 z 变换：

\[
x(n) = -4 \delta(n) + 2 \left(-\frac{1}{2}\right)^n u(n) + 2 \left(\frac{1}{2}\right)^n u(n).
\]

---

**结论**：两种方法得到的结果一致：

$$
\begin{aligned}
x(n) & =-4 \delta(n)+2\left[\left(-\frac{1}{2}\right)^n u(n)\right]+2\left[\left(\frac{1}{2}\right)^n u(n)\right] \\
& =-4 \delta(n)+2\left(-\frac{1}{2}\right)^n u(n)+2\left(\frac{1}{2}\right)^n u(n) .
\end{aligned}
$$


### Example 12.26 求逆 z 变换

**题目**：求下列函数的逆 z 变换

\[
X(z)=\frac{z(z-1)}{\left(z-\frac{1}{3}\right)\left(z-\frac{1}{5}\right)}, \quad |z|>\frac{1}{3}.
\]

---

#### 解法：部分分式展开

1. 考虑

\[
\frac{X(z)}{z} = \frac{z-1}{\left(z-\frac{1}{3}\right)\left(z-\frac{1}{5}\right)}.
\]

进行部分分式展开：

\[
\frac{X(z)}{z} = \frac{A_1}{z-\frac{1}{3}} + \frac{A_2}{z-\frac{1}{5}}.
\]

2. 计算展开系数：

$$
\begin{aligned}
& A_1=\left.\left[\left(z-\frac{1}{3}\right)\left(\frac{X(z)}{z}\right)\right]\right|_{z=1 / 3}=\left.\frac{z-1}{z-\frac{1}{5}}\right|_{z=1 / 3}=\frac{\left(-\frac{2}{3}\right)}{\left(\frac{2}{15}\right)}=\left(\frac{-2}{3}\right)\left(\frac{15}{2}\right)=-5 \\
& A_2=\left.\left[\left(z-\frac{1}{5}\right)\left(\frac{X(z)}{z}\right)\right]\right|_{z=1 / 5}=\left.\frac{z-1}{z-\frac{1}{3}}\right|_{z=1 / 5}=\frac{\left(-\frac{4}{5}\right)}{\left(-\frac{2}{15}\right)}=\left(\frac{-4}{5}\right)\left(\frac{-15}{2}\right)=6 .
\end{aligned}
$$


3. 得到部分分式展开：

\[
\frac{X(z)}{z} = \frac{-5}{z-\frac{1}{3}} + \frac{6}{z-\frac{1}{5}}.
\]

4. 恢复 $X(z)$：

\[
X(z) = \frac{-5 z}{z-\frac{1}{3}} + \frac{6 z}{z-\frac{1}{5}}.
\]

5. 利用表 12.3 取逆 z 变换：

\[
x(n) = -5 z^{-1}\left\{\frac{z}{z-\frac{1}{3}}\right\}(n) + 6 z^{-1}\left\{\frac{z}{z-\frac{1}{5}}\right\}(n).
\]

6. 根据收敛域 $|z|>\frac{1}{3}$，得到：

\[
\frac{1}{3}^n u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{3}}, \quad
\frac{1}{5}^n u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{5}}.
\]

7. 因此：

\[
\begin{aligned}
x(n) &= -5 \left(\frac{1}{3}\right)^n u(n) + 6 \left(\frac{1}{5}\right)^n u(n) \\
&= \left[-5 \left(\frac{1}{3}\right)^n + 6 \left(\frac{1}{5}\right)^n \right] u(n).
\end{aligned}
\]

---

**结论**：

$$
\begin{aligned}
x(n) & =-5\left[\left(\frac{1}{3}\right)^n u(n)\right]+6\left[\left(\frac{1}{5}\right)^n u(n)\right] \\
& =\left[-5\left(\frac{1}{3}\right)^n+6\left(\frac{1}{5}\right)^n\right] u(n) .
\end{aligned}
$$


例 12.27. 求函数的逆 z 变换 $x$：

$$
X(z)=\frac{z^{2}(z-1)}{\left(z-\frac{1}{4}\right)\left(z-\frac{1}{2}\right)^{2}}, \quad z \in R
$$


对于下列各个 ROC：
(a) $R=\left\{|z|<\frac{1}{4}\right\}$；
(b) $R=\left\{\frac{1}{4}<|z|<\frac{1}{2}\right\}$；以及
(c) $R=\left\{|z|>\frac{1}{2}\right\}$。

**解答**：由于无法直接从表 12.3 得到答案，我们对

$$
\frac{X(z)}{z}=\frac{z(z-1)}{\left(z-\frac{1}{4}\right)\left(z-\frac{1}{2}\right)^{2}}
$$


进行部分分式展开。该展开形式为：

$$
\frac{X(z)}{z}=\frac{A_{1}}{z-\frac{1}{4}}+\frac{A_{2,1}}{z-\frac{1}{2}}+\frac{A_{2,2}}{\left(z-\frac{1}{2}\right)^{2}}
$$


计算展开系数：

$$
\begin{aligned}
A_1 & =\left.\left(z-\frac{1}{4}\right)\left(\frac{X(z)}{z}\right)\right|_{z=1 / 4}=\left.\frac{z(z-1)}{\left(z-\frac{1}{2}\right)^2}\right|_{z=1 / 4}=\frac{\left(\frac{1}{4}\right)\left(\frac{-3}{4}\right)}{\left(-\frac{1}{4}\right)^2}=\frac{\left(\frac{-3}{16}\right)}{\left(\frac{1}{16}\right)} \\
& =-3 \\
A_{2,1} & =\left.\frac{1}{(2-1)!}\left[\left(\frac{d}{d z}\right)^{2-1}\left[\left(z-\frac{1}{2}\right)^2\left(\frac{X(z)}{z}\right)\right]\right]\right|_{z=1 / 2}=\left.\frac{1}{1!}\left[\left(\frac{d}{d z}\right)\left[\left(z-\frac{1}{2}\right)^2\left(\frac{X(z)}{z}\right)\right]\right]\right|_{z=1 / 2} \\
& =\left.\frac{1}{1!}\left[\left(\frac{d}{d z}\right)\left[\frac{z(z-1)}{z-\frac{1}{4}}\right]\right]\right|_{z=1 / 2}=\left.\left[\left(\frac{d}{d z}\right)\left[\left(z^2-z\right)\left(z-\frac{1}{4}\right)^{-1}\right]\right]\right|_{z=1 / 2} \\
& =\left.\left[(2 z-1)\left(z-\frac{1}{4}\right)^{-1}+(-1)\left(z-\frac{1}{4}\right)^{-2}\left(z^2-z\right)\right]\right|_{z=1 / 2}=(-1)\left(\frac{1}{4}\right)^{-2}\left(-\frac{1}{4}\right)=\left(\frac{1}{4}\right)(16) \\
& =4, \quad \text { and } \\
A_{2,2} & =\left.\frac{1}{(2-2)!}\left[\left(\frac{d}{d z}\right)^{2-2}\left[\left(z-\frac{1}{2}\right)^2\left(\frac{X(z)}{z}\right)\right]\right]\right|_{z=1 / 2}=\left.\frac{1}{0!}\left[\left[\left(z-\frac{1}{2}\right)^2\left(\frac{X(z)}{z}\right)\right]\right]\right|_{z=1 / 2} \\
& =\left.\frac{1}{1!}\left[\left(\frac{d}{d z}\right)\left[\frac{z(z-1)}{z-\frac{1}{4}}\right]\right]\right|_{z=1 / 2}=\frac{\left(\frac{1}{2}\right)\left(\frac{-1}{2}\right)}{\left(-\frac{1}{4}\right)}=\frac{\left(\frac{-1}{4}\right)}{\left(\frac{-1}{4}\right)} \\
& =1
\end{aligned}
$$


因此，

$$
\frac{X(z)}{z}=-\frac{3}{z-\frac{1}{4}}+\frac{4}{z-\frac{1}{2}}+\frac{1}{\left(z-\frac{1}{2}\right)^{2}}
$$


于是，

$$
X(z)=-\frac{3 z}{z-\frac{1}{4}}+\frac{4 z}{z-\frac{1}{2}}+\frac{z}{\left(z-\frac{1}{2}\right)^{2}}
$$


取逆 z 变换：

$$
x(n)=-3 z^{-1}\left\{\frac{z}{z-\frac{1}{4}}\right\}(n)+4 z^{-1}\left\{\frac{z}{z-\frac{1}{2}}\right\}(n)+z^{-1}\left\{\frac{z}{\left(z-\frac{1}{2}\right)^{2}}\right\}(n)
$$


接下来需要考虑 ROC $R$：

**(a) $R=\left\{|z|<\frac{1}{4}\right\}$：**

$$
\begin{aligned}
& -\left(\frac{1}{4}\right)^{n} u(-n-1) \stackrel{\mathrm{zT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{4}}, \quad |z|<\frac{1}{4}, \\
& -n \left(\frac{1}{2}\right)^{n} u(-n-1) \stackrel{\mathrm{zT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{2}}, \quad |z|<\frac{1}{2}, \\
& -\left(\frac{1}{2}\right)^{n} u(-n-1) \stackrel{\mathrm{zT}}{\longleftrightarrow} \frac{z}{\left(z-\frac{1}{2}\right)^{2}}, \quad |z|<\frac{1}{2}.
\end{aligned}
$$


因此，

$$
\begin{aligned}
x(n) & =-3\left[-\left(\frac{1}{4}\right)^{n} u(-n-1)\right]+4\left[-\left(\frac{1}{2}\right)^{n} u(-n-1)\right]+\left[-n\left(\frac{1}{2}\right)^{n} u(-n-1)\right] \\
& =\left[3\left(\frac{1}{4}\right)^{n}-4\left(\frac{1}{2}\right)^{n}-n\left(\frac{1}{2}\right)^{n}\right] u(-n-1)
\end{aligned}
$$


**(b) $R=\left\{\frac{1}{4}<|z|<\frac{1}{2}\right\}$：**

$$
\begin{aligned}
& \left(\frac{1}{4}\right)^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{4}}, \quad |z|>\frac{1}{4}, \\
& -n\left(\frac{1}{2}\right)^{n} u(-n-1) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{2}}, \quad |z|<\frac{1}{2}, \\
& -\left(\frac{1}{2}\right)^{n} u(-n-1) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{\left(z-\frac{1}{2}\right)^{2}}, \quad |z|<\frac{1}{2}.
\end{aligned}
$$


因此，

$$
\begin{aligned}
x(n) & =-3\left[\left(\frac{1}{4}\right)^{n} u(n)\right]+4\left[-\left(\frac{1}{2}\right)^{n} u(-n-1)\right]+\left[-n\left(\frac{1}{2}\right)^{n} u(-n-1)\right] \\
& =\left[-3\left(\frac{1}{4}\right)^{n}\right] u(n)+\left[-4\left(\frac{1}{2}\right)^{n}-n\left(\frac{1}{2}\right)^{n}\right] u(-n-1)
\end{aligned}
$$


**(c) $R=\left\{|z|>\frac{1}{2}\right\}$：**

$$
\begin{gathered}
\left(\frac{1}{4}\right)^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{4}}, \quad |z|>\frac{1}{4}, \\
n\left(\frac{1}{2}\right)^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{z-\frac{1}{2}}, \quad |z|>\frac{1}{2}, \\
\left(\frac{1}{2}\right)^{n} u(n) \stackrel{\mathrm{ZT}}{\longleftrightarrow} \frac{z}{\left(z-\frac{1}{2}\right)^{2}}, \quad |z|>\frac{1}{2}.
\end{gathered}
$$


因此，

$$
\begin{aligned}
x(n) & =-3\left[\left(\frac{1}{4}\right)^{n} u(n)\right]+4\left[\left(\frac{1}{2}\right)^{n} u(n)\right]+\left[n\left(\frac{1}{2}\right)^{n} u(n)\right] \\
& =\left[-3\left(\frac{1}{4}\right)^{n}+4\left(\frac{1}{2}\right)^{n}+n\left(\frac{1}{2}\right)^{n}\right] u(n)
\end{aligned}
$$


### 12.10.2 Laurent-Polynomial and Power-Series Expansions

另一种求逆 z 变换的方法是使用 **Laurent 多项式或幂级数展开**。具体做法是将 $X(z)$ 展开为 Laurent 多项式或幂级数，然后通过查看各项系数直接得到序列 $x(n)$。这种方法适用于已知幂级数的函数（如三角函数、指数函数、对数函数），或者对有理函数可使用 **多项式长除法**。

---

#### Example 12.28

\[
X(z) = \frac{z^3 + 2 z^2 + 4 z + 8}{z^2}, \quad |z|>0
\]

**解法**：展开为幂级数：

\[
X(z) = z + 2 + 4 z^{-1} + 8 z^{-2}.
\]

由 z 变换定义可得：

\[
x(n) = \begin{cases} 1, & n=-1 \\ 2, & n=0 \\ 4, & n=1 \\ 8, & n=2 \\ 0, & \text{otherwise} \end{cases}
= \delta(n+1) + 2\delta(n) + 4\delta(n-1) + 8\delta(n-2)
\]

---
例 12.29. 求函数的逆 z 变换 $x$：

$$
X(z)=\cos \left(z^{-1}\right), \quad |z|>0
$$


**解答**：首先，我们回顾余弦函数的 Maclaurin 级数：

$$
\cos z=\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2 n)!} z^{2 n}, \quad \text{适用于所有复数 } z
$$


（注意，前面提到的许多有用级数可以在附录 F.6 中找到。）

将 $X(z)$ 用 Maclaurin 级数展开：

$$
\begin{aligned}
X(z) & =\cos \left(z^{-1}\right) \\
& =\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2 n)!}\left(z^{-1}\right)^{2 n}
\end{aligned}
$$


（注意 $X(z)$ 在所有非零复数 $z$ 上收敛。）

由于 $x$ 必须为右侧序列（由 $X$ 的 ROC 决定），我们有：

$$
\begin{aligned}
X(z) & =\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2 n)!} z^{-2 n} \\
& =\frac{1}{0!} z^{0}-\frac{1}{2!} z^{-2}+\frac{1}{4!} z^{-4}-\frac{1}{6!} z^{-6}+\frac{1}{8!} z^{-8}-\ldots \\
& =\sum_{\substack{n \in \mathbb{Z}: \\ n \geq 0 \text{ 且 } n \text{ 为偶数}}} \frac{j^{n}}{n!} z^{-n}.
\end{aligned}
$$


注意到：

$$
\frac{1}{2}\left[1+(-1)^{n}\right] u(n)= \begin{cases}1, & n \geq 0 \text{ 且 } n \text{ 为偶数} \\ 0, & \text{其他情况} \end{cases}
$$


利用此观察，可以将 $X(z)$ 重写为：

$$
\begin{aligned}
X(z) & =\sum_{n=-\infty}^{\infty}\left[\frac{1}{2}\left[1+(-1)^{n}\right] u(n)\right] \frac{j^{n}}{n!} z^{-n} \\
& =\sum_{n=-\infty}^{\infty} \frac{\left[1+(-1)^{n}\right] j^{n}}{2(n!)} u(n) z^{-n}
\end{aligned}
$$


因此，得到逆 z 变换：

$$
x(n)=\frac{\left[1+(-1)^{n}\right] j^{n}}{2(n!)} u(n)
$$


---

例 12.30. 使用多项式长除法求函数的逆 z 变换 $x$：

$$
X(z)=\frac{1}{1-a z^{-1}}, \quad |z|>|a|
$$


**解答**：$X$ 的 ROC 对应右侧序列。因此，希望多项式长除法过程产生 $z$ 的降幂，这自然由将 1 除以 $1-a z^{-1}$ 得到。进行多项式长除法的前几步，我们得到：

$$
\begin{equation}
\begin{array}{l|l}
1-a z^{-1} & \frac{ 1+a z^{-1}+a^2 z^{-2}+\ldots}{1} \\
 & \frac{1-a z^{-1}}{a z^{-1}} \\
& \frac{a z^{-1}-a^2 z^{-2}}{a^2 z^{-2}}
\end{array}
\end{equation}
$$


原文公式参见下图
![](https://cdn.mathpix.com/snip/images/7mhVpqsW11NSfakLBxa5thtg4ZTOVPHh7So_KzrMtDU.original.fullsize.png){width="400"}


此时，可以观察到长除法产生的模式为：

$$
\begin{aligned}
X(z) & = 1 + a z^{-1} + a^2 z^{-2} + a^3 z^{-3} + a^4 z^{-4} + \ldots \\
& = \sum_{n=0}^{\infty} a^{n} z^{-n}
\end{aligned}
$$


因此，

$$
X(z)=\sum_{n=-\infty}^{\infty} a^{n} u(n) z^{-n}
$$


由此可直接得出：

$$
x(n)=a^{n} u(n)
$$


---

例 12.31. 使用多项式长除法求函数的逆 z 变换 $x$：

$$
X(z)=\frac{1}{1-a z^{-1}}, \quad |z|<|a|
$$


**解答**：$X$ 的 ROC 对应左侧序列。因此，希望长除法过程产生 $z$ 的升幂。于是将 $X(z)$ 重写为：

$$
X(z)=\frac{z}{z-a}
$$


进行多项式长除法的前几步，我们得到：

![](https://cdn.mathpix.com/snip/images/lBlAkpinYonOJRPG0yrDIKyg2x0ESbeTYqH62uZLmUw.original.fullsize.png){width="400"}


此时，可以观察到长除法产生的模式为：

$$
\begin{aligned}
X(z) & = -a^{-1} z - a^{-2} z^{2} - a^{-3} z^{3} - a^{-4} z^{4} - a^{-5} z^{5} - \ldots \\
& = \sum_{n=-\infty}^{-1} -a^{n} z^{-n}
\end{aligned}
$$


因此，

$$
X(z)=\sum_{n=-\infty}^{\infty}-a^{n} u(-n-1) z^{-n}
$$


由此可直接得出：

$$
x(n)=-a^{n} u(-n-1)
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-237.jpg?height=101&width=352&top_left_y=318&top_left_x=524){width="400"}
  
图 12.19：LTI 系统的时域视图，输入为 $x$，输出为 $y$，系统脉冲响应为 $h$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-237.jpg?height=101&width=350&top_left_y=297&top_left_x=1366){width="400"}
  
图 12.20：LTI 系统的 z 域视图，输入的 z 变换为 $X$，输出的 z 变换为 $Y$，系统函数为 $H$。


## 12.11 使用 $\mathbf{z}$ 变换表征 LTI 系统

考虑一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统，如图 12.19 所示。这样的系统由下列方程描述：

$$
y(n)=x * h(n) .
$$


设 $X, Y$ 和 $H$ 分别表示 $x, y$ 和 $h$ 的 z 变换。对上述方程的两边进行 z 变换，并利用 z 变换的时域卷积性质，我们得到：

$$
Y(z)=H(z) X(z) .
$$


量 $H$ 被称为系统函数或系统的传递函数。如果 $H$ 的 ROC 包含单位圆，那么 $H\left(e^{j \Omega}\right)$ 就是系统的频率响应。系统可以用如图 12.20 所示的 z 域方框图表示，其中系统以其系统函数 $H$ 标注。

## 12.12 LTI 系统的互连

根据 $z$ 变换的性质以及系统函数的定义，我们可以推导出一些关于系统函数以及串联和并联互连系统的等效关系。

假设我们有两个 LTI 系统 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$，它们的系统函数分别为 $H_{1}$ 和 $H_{2}$，并且如图 12.21(a) 左侧所示以串联方式连接。设 $h_{1}$ 和 $h_{2}$ 分别表示 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的冲激响应。整个系统的冲激响应 $h$ 表示为：

$$
h(n)=h_{1} * h_{2}(n) .
$$


对该方程两边进行 z 变换得到：

$$
\begin{aligned}
H(z) & =z\left\{h_{1} * h_{2}\right\}(z) \\ 
& =z h_{1}(z) z h_{2}(z) \\ 
& =H_{1}(z) H_{2}(z)
\end{aligned}
$$


因此，我们得到如图 12.21 所示的等效关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-238.jpg?height=101&width=1157&top_left_y=297&top_left_x=416){width="400"}

图 12.21：涉及系统函数与 LTI 系统串联互连的等效关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-238.jpg?height=241&width=1085&top_left_y=506&top_left_x=453){width="400"}

图 12.22：涉及系统函数与 LTI 系统并联互连的等效关系。

假设我们有两个 LTI 系统 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$，它们的系统函数分别为 $H_{1}$ 和 $H_{2}$，并且如图 12.22 左侧所示以并联方式连接。设 $h_{1}$ 和 $h_{2}$ 分别表示 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的冲激响应。整个系统的冲激响应 $h$ 表示为：

$$
h(n)=h_{1}(n)+h_{2}(n) .
$$


对方程两边进行 z 变换得到：

$$
\begin{aligned}
H(z) & =z\left\{h_{1}+h_{2}\right\}(z) \\ 
& =z h_{1}(z)+z h_{2}(z) \\ 
& =H_{1}(z)+H_{2}(z)
\end{aligned}
$$


因此，我们得到如图 12.22 所示的等效关系。

## 12.13 系统函数与系统特性

许多 LTI 系统的特性可以通过其系统函数的性质直接确定，下面的章节将对此进行详细阐述。

### 12.13.1 因果性

根据定理 9.8，我们知道如果一个 LTI 系统的冲激响应是因果的，则该系统是因果系统。然而，人们可能会想知道，因果性条件在 LTI 系统的系统函数中是如何体现的。下列定理给出了答案。

定理 12.14. 一个离散时间 (DT) LTI 系统的系统函数为 $H$，当且仅当 $H$ 的 ROC 为下列情况时，该系统是因果的：

1. 一个圆的外部，包括 $\infty$；或
2. 整个复平面，包括 $\infty$，可能不包括 0。

证明：证明留作读者习题。

在系统函数为有理函数的情况下，我们还有如下结果：

定理 12.15. 一个离散时间 (DT) LTI 系统的系统函数 $H$ 为有理函数，当且仅当满足以下条件时，该系统是因果的：

1. $H$ 的 ROC 是位于 $H$ 最外层（有限）极点之外的（可能退化的）圆的外部，或者如果 $H$ 没有极点，则 ROC 是整个（有限）复平面；并且
2. $H$ 是 proper 的（即，当 $H$ 表示为 $z$ 的多项式比时，分子多项式的阶数不超过分母多项式的阶数）。

证明：证明留作读者习题。

示例 12.32. 对于以下每个系统函数 $H$ 的 LTI 系统，判断系统是否为因果系统。

(a) $H(z)=\frac{2 z^{3}}{\left(z-\frac{1}{4}\right)\left(z-\frac{3}{4}\right)}$，当 $|z|>\frac{3}{4}$；  
(b) $H(z)=\frac{10 z^{2}-15 z+3}{(z-3)\left(z-\frac{1}{3}\right)}$，当 $|z|>3$；  
(c) $H(z)=\frac{5 z^{2}-8 z+2}{(z-2)\left(z-\frac{1}{2}\right)}$，当 $\frac{1}{2}<|z|<2$；  
(d) $H(z)=\frac{1-z^{-9}}{z-1}$，当 $|z|>1$。

解答：

(a) $H$ 的 ROC 和极点如图 12.23(a) 所示。系统函数 $H$ 是有理函数且不 proper，因此 ROC 不能包含 $\infty$，系统不是因果系统。

顺便说明，$H(z)=z\left(2-\frac{1 / 4}{z-1 / 4}+\frac{9 / 4}{z-3 / 4}\right)$，且 $h(n)=2 \delta(n+1)+\frac{1}{4}\left(\frac{1}{4}\right)^{n} u(n)+\frac{9}{4}\left(\frac{3}{4}\right)^{n} u(n)$。如预期，$h$ 不是因果的。

(b) $H$ 的 ROC 和极点如图 12.23(b) 所示。系统函数 $H$ 是有理且 proper，且 $H$ 的 ROC 位于 $H$ 最外层极点之外（幅值为 3）。因此，系统是因果系统。

顺便说明，$H(z)=z\left(\frac{3}{z}+\frac{1}{z-1 / 3}+\frac{6}{z-3}\right)$，且 $h(n)=3 \delta(n)+\left(\frac{1}{3}\right)^{n} u(n)+6(3)^{n} u(n)$。如预期，$h$ 是因果的。

(c) $H$ 的 ROC 和极点如图 12.23(c) 所示。系统函数 $H$ 是有理且 proper，但 $H$ 的 ROC 不在 $H$ 最外层极点之外（幅值为 2）。因此，系统不是因果系统。

顺便说明，$H(z)=z\left(\frac{2}{z}+\frac{1}{z-1 / 2}+\frac{2}{z-2}\right)$，且 $h(n)=2 \delta(n)+\left(\frac{1}{2}\right)^{n} u(n)+2\left[-2^{n} u(-n-1)\right]$。如预期，$h$ 不是因果的。

(d) 我们可以将 $H$ 重写为：

$$
H(z)=\frac{z^{9}-1}{z^{9}(z-1)}
$$


$H$ 的 ROC 和极点如图 12.23(d) 所示。系统函数 $H$ 是有理且 proper，且 $H$ 的 ROC 位于 $H$ 最外层极点之外（幅值为 1）。因此，系统是因果系统。

顺便说明，$H(z)=z^{-1}\left(\frac{z}{z-1}\right)-z^{-10}\left(\frac{z}{z-1}\right)$，且 $h(n)=u(n-1)-u(n-10)$。如预期，$h$ 是因果的。

### 12.13.2 BIBO 稳定性

在本节中，我们考虑系统函数与 BIBO 稳定性之间的关系。第一个重要结论由下列定理给出。

定理 12.16. 一个 LTI 系统是 BIBO 稳定的，当且仅当其系统函数 $H$ 的 ROC 包含单位圆（即 $|z|=1$）。

证明：这里仅给出部分证明。特别地，我们将说明 $H$ 的 ROC 包含单位圆是 BIBO 稳定的必要条件。下面，设 $h$ 为 $H$ 的逆 z 变换（即 $h$ 是系统的冲激响应）。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-240.jpg?height=1527&width=1627&top_left_y=564&top_left_x=181){width="400"}

图 12.23：因果性示例中有理系统函数的极点与 ROC。分别对应(a)、(b)、(c) 和 (d) 的情况。

假设系统是 BIBO 稳定的。根据定理 9.11，我们知道这意味着：

$$
\sum_{n=-\infty}^{\infty}|h(n)|<\infty
$$


（即 $h$ 是绝对可和的）。根据在单位圆上求值的 $H$ 的定义，我们有：

$$
\begin{equation*}
H\left(e^{j \Omega}\right)=\sum_{n=-\infty}^{\infty} h(n) e^{-j \Omega n} \tag{12.11}
\end{equation*}
$$


回顾一下，如果一个和式绝对收敛，则它收敛。也就是说，对于任意序列 $f$：

$$
\sum_{n=-\infty}^{\infty} f(n) \text { 收敛当且仅当 } \sum_{n=-\infty}^{\infty}|f(n)| \text { 收敛。 }
$$


根据此关系以及式 (12.11)，我们可以推断：

$$
\begin{equation*}
H\left(e^{j \Omega}\right)=\sum_{n=-\infty}^{\infty} h(n) e^{-j \Omega n} \text { 当且仅当 } \sum_{n=-\infty}^{\infty}\left|h(n) e^{-j \Omega n}\right| \text { 收敛。 } \tag{12.12}
\end{equation*}
$$


而事实上：

$$
\sum_{n=-\infty}^{\infty}\left|h(n) e^{-j \Omega n}\right|=\sum_{n=-\infty}^{\infty}|h(n)|\left|e^{-j \Omega n}\right|=\sum_{n=-\infty}^{\infty}|h(n)| .
$$


因此，可以将式 (12.12) 重写为：

$$
H\left(e^{j \Omega}\right) \text { 当且仅当 } \sum_{n=-\infty}^{\infty}|h(n)| \text { 收敛。 }
$$


而前述收敛条件对于 BIBO 稳定系统总是满足的（如上所述 $\sum_{n=-\infty}^{\infty}|h(n)|$ 必收敛）。因此，我们得出结论：如果系统是 BIBO 稳定的，则 $H\left(e^{j \Omega}\right)$ 必须对所有 $\Omega$ 收敛（即 $H$ 的 ROC 必须包含单位圆）。因此，$H$ 的 ROC 包含单位圆是 BIBO 稳定的必要条件。

在系统为因果的情况下，可以得到更具体的结果，如下定理所示：

定理 12.17. 一个因果 LTI 系统，其系统函数 $H$ 为（proper）有理函数，当且仅当 $H$ 的所有极点都在单位圆内（即所有极点的幅值小于 1）时，系统是 BIBO 稳定的。

证明：证明留作读者习题。

从上述两个定理（即定理 12.16 和 12.17）可以看出，对于 LTI 系统，BIBO 稳定性的判定在 $z$ 域（通过系统函数）中比在时域（通过冲激响应）更为简便。因此，分析 LTI 系统的稳定性通常使用 $z$ 变换进行。

示例 12.33. 一个 LTI 系统的系统函数为：

$$
H(z)=\frac{z-\frac{1}{3}}{\left(z-\frac{1}{4}\right)\left(z-\frac{1}{2}\right)}
$$


已知该系统是 BIBO 稳定的，确定 $H$ 的 ROC。

解答：显然，系统函数 $H$ 是有理函数，其极点为 $\frac{1}{4}$ 和 $\frac{1}{2}$。因此，ROC 只有三种可能：

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-242.jpg?height=768&width=884&top_left_y=294&top_left_x=583){width="400"}

图 12.24：示例的 ROC。

i) $|z|<\frac{1}{4}$，  
ii) $\frac{1}{4}<|z|<\frac{1}{2}$，  
iii) $|z|>\frac{1}{2}$。

为了系统 BIBO 稳定，$H$ 的 ROC 必须包含单位圆。因此，ROC 必须为 $|z|>\frac{1}{2}$。此 ROC 如图 12.24 所示。

示例 12.34. 一个 LTI 系统是因果的，其系统函数为：

$$
H(z)=\frac{z^{2}-1}{\left(z^{2}-\frac{1}{9}\right)\left(z^{2}-\frac{1}{4}\right)}
$$


判断该系统是否 BIBO 稳定。

解答：首先，将 $H$ 因式分解为：

$$
H(z)=\frac{(z+1)(z-1)}{\left(z+\frac{1}{3}\right)\left(z-\frac{1}{3}\right)\left(z+\frac{1}{2}\right)\left(z-\frac{1}{2}\right)}
$$


因此，$H$ 的极点为 $-\frac{1}{2}, -\frac{1}{3}, \frac{1}{3}, \frac{1}{2}$。这些极点如图 12.25 所示。由于系统是因果的，$H$ 的 ROC 必须是经过最外层（有限）极点的圆的外部。因此，ROC 为 $|z|>\frac{1}{2}$。此 ROC 在图 12.25 中以阴影区域表示。由于该 ROC 包含单位圆，系统是 BIBO 稳定的。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-243.jpg?height=720&width=838&top_left_y=291&top_left_x=702){width="400"}

图 12.25：系统函数的极点与 ROC。

示例 12.35. 对于以下每个 LTI 系统的系统函数 $H$，确定对应系统 BIBO 稳定时的 ROC。

(a) $H(z)=\frac{z-1}{z^{2}-\frac{1}{4}}$；  
(b) $H(z)=\frac{1}{\left(z-\frac{1}{2} e^{j \pi / 4}\right)\left(z-\frac{1}{2} e^{-j \pi / 4}\right)\left(z-\frac{3}{2} e^{j 3 \pi / 4}\right)\left(z-\frac{3}{2} e^{-j 3 \pi / 4}\right)}$；  
(c) $H(z)=\frac{z-1}{\left(z^{2}+4\right)\left(z^{2}-4\right)}$；  
(d) $H(z)=\frac{z}{z-1}$。

解答：

(a) 我们可以将 $H$ 重写为：

$$
H(z)=\frac{z-1}{\left(z+\frac{1}{2}\right)\left(z-\frac{1}{2}\right)}
$$


因此，$H$ 的极点为 $-\frac{1}{2}$ 和 $\frac{1}{2}$，如图 12.26(a) 所示。由于 $H$ 是有理函数，ROC 必须由极点界定或向内延伸至原点，或向外延伸至无穷大。由于两个极点幅值相同（即 $\frac{1}{2}$），ROC 只有两种可能：  
i) $|z|<\frac{1}{2}$，  
ii) $|z|>\frac{1}{2}$。

为了 BIBO 稳定，ROC 必须包含单位圆。因此，ROC 为 $|z|>\frac{1}{2}$，如图 12.26(a) 阴影区域所示。

(b) $H$ 的极点为 $\frac{1}{2} e^{-j \pi / 4}, \frac{1}{2} e^{j \pi / 4}, \frac{3}{2} e^{-j 3 \pi / 4}, \frac{3}{2} e^{j 3 \pi / 4}$，如图 12.26(b) 所示。由于 $H$ 是有理函数，ROC 必须由极点界定或向内延伸至原点，或向外延伸至无穷大。由于极点只有两种不同幅值（即 $\frac{1}{2}$ 和 $\frac{3}{2}$），ROC 有三种可能：  
i) $|z|<\frac{1}{2}$，  
ii) $\frac{1}{2}<|z|<\frac{3}{2}$，  
iii) $|z|>\frac{3}{2}$。

为了 BIBO 稳定，ROC 必须包含单位圆。因此，ROC 为 $\frac{1}{2}<|z|<\frac{3}{2}$，如图 12.26(b) 阴影区域所示。

(c) 将 $H$ 的分母完全因式分解：

$$
H(z)=\frac{z-1}{(z+2)(z-2)(z+2 j)(z-2 j)}
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-244.jpg?height=1428&width=1578&top_left_y=283&top_left_x=208){width="400"}

图 12.26：示例中系统函数 $H$ 的极点与 ROC，分别对应(a)、(b)、(c) 和 (d)。

$H$ 的极点为 $-2, 2, -2j, 2j$，如图 12.26(c) 所示。由于 $H$ 是有理函数，ROC 必须由极点界定或向内延伸至原点，或向外延伸至无穷大。由于极点幅值相同（即 2），ROC 有两种可能：  
i) $|z|<2$，  
ii) $|z|>2$。

为了 BIBO 稳定，ROC 必须包含单位圆。因此，ROC 为 $|z|<2$，如图 12.26(c) 阴影区域所示。

(d) $H$ 的极点为 1，如图 12.26(d) 所示。由于 $H$ 是有理函数，它在极点 1 处无法收敛。因此，ROC 永远不能包含单位圆。由此，该系统函数 $H$ 永远不可能对应于 BIBO 稳定系统。

### 12.13.3 可逆性

在本节中，我们考虑系统函数与系统可逆性之间的关系。第一个重要结论由下列定理给出。

定理 12.18（LTI 系统的逆系统）。设 $\mathcal{H}$ 为一个系统函数为 $H$ 的 LTI 系统。如果 $\mathcal{H}$ 的逆系统 $\mathcal{H}^{-1}$ 存在，则 $\mathcal{H}^{-1}$ 也是 LTI 系统，并具有系统函数 $H_{\mathrm{inv}}$，满足：

$$
\begin{equation*}
H(z) H_{\mathrm{inv}}(z)=1 \tag{12.13}
\end{equation*}
$$


证明：设 $h$ 为 $H$ 的逆 z 变换。根据定理 9.9，我们知道系统 $\mathcal{H}$ 可逆当且仅当存在另一 LTI 系统，其冲激响应为 $h_{\text {inv }}$，满足：

$$
h * h_{\mathrm{inv}}=\delta
$$


设 $H_{\text {inv }}$ 为 $h_{\text {inv }}$ 的 z 变换。对上式两边进行 z 变换，得到：

$$
z\left\{h * h_{\mathrm{inv}}\right\}=z \delta
$$


根据 z 变换的时域卷积性质以及表 12.3（即 $z \boldsymbol{\delta}(z)=1$），我们得到：

$$
H(z) H_{\text {inv }}(z)=1
$$


由前述定理，我们得到下列结果。

定理 12.19（LTI 系统的可逆性）。一个系统函数为 $H$ 的 LTI 系统 $\mathcal{H}$ 可逆，当且仅当存在一个函数 $H_{\text {inv }}$，满足：

$$
H(z) H_{\text {inv }}(z)=1
$$


证明：证明可直接由定理 12.18 的结果得到，只需观察 $\mathcal{H}$ 可逆等价于 $\mathcal{H}^{-1}$ 的存在。

由上述定理可知，一个系统函数为 $H$ 的 LTI 系统 $\mathfrak{H}$ 有逆系统，当且仅当 (12.13) 中 $H^{\text {inv }}$ 的解存在。此外，如果逆系统存在，其系统函数为：

$$
H_{\mathrm{inv}}(z)=\frac{1}{H(z)}
$$


由于不同系统可以具有相同的系统函数（但 ROC 不同），LTI 系统的逆系统不一定唯一。然而，在实际中，我们通常希望逆系统是 BIBO 稳定和/或因果的。因此，虽然可能存在多个逆系统，但我们通常只关心满足 BIBO 稳定和/或因果性约束的特定逆系统。

示例 12.36. 考虑 LTI 系统，其系统函数为：

$$
H(z)=\frac{\left(z-\frac{1}{5}\right)\left(z-\frac{1}{2}\right)}{\left(z+\frac{1}{3}\right)\left(z-\frac{1}{3}\right)} \quad \text { 当 }|z|>\frac{1}{3}
$$


确定该系统的所有可能逆系统，并评论这些逆系统的 BIBO 稳定性。

解答：逆系统的系统函数 $H_{\text {inv }}$ 为：

$$
H_{\mathrm{inv}}(z)=\frac{1}{H(z)}=\frac{\left(z+\frac{1}{3}\right)\left(z-\frac{1}{3}\right)}{\left(z-\frac{1}{5}\right)\left(z-\frac{1}{2}\right)}
$$


由于 $H_{\mathrm{inv}}$ 的极点具有两种不同幅值（即 $\frac{1}{5}$ 和 $\frac{1}{2}$），因此 $H_{\mathrm{inv}}$ 的 ROC 有三种可能：

i) $|z|<\frac{1}{5}$，  
ii) $\frac{1}{5}<|z|<\frac{1}{2}$，  
iii) $|z|>\frac{1}{2}$。

每种 ROC 对应一个不同的逆系统。  
- 第一种 ROC 对应的系统不是 BIBO 稳定的，因为 ROC 不包含单位圆。  
- 第二种 ROC 对应的系统也不是 BIBO 稳定的，因为 ROC 不包含单位圆。  
- 第三种 ROC 对应的系统是 BIBO 稳定的，因为 ROC 包含单位圆。

## 12.14 LTI 系统与差分方程

许多实际中感兴趣的 LTI 系统可以通过具有常系数的 N 阶线性差分方程描述。对于输入 $x$ 和输出 $y$ 的系统，其可由下式表征：

$$
\begin{equation*}
\sum_{k=0}^{N} b_{k} y(n-k)=\sum_{k=0}^{M} a_{k} x(n-k) \tag{12.14}
\end{equation*}
$$


其中 $M \leq N$。设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的 z 变换，$H$ 为系统的系统函数。对上式两边进行 z 变换，得到：

$$
z\left\{\sum_{k=0}^{N} b_{k} y(n-k)\right\}(z)=z\left\{\sum_{k=0}^{M} a_{k} x(n-k)\right\}(z)
$$


利用 z 变换的线性性质，可改写为：

$$
\sum_{k=0}^{N} b_{k} z\{y(n-k)\}(z)=\sum_{k=0}^{M} a_{k} z\{x(n-k)\}(z)
$$


利用 z 变换的时移性质，有：

$$
\sum_{k=0}^{N} b_{k} z^{-k} Y(z)=\sum_{k=0}^{M} a_{k} z^{-k} X(z)
$$


提取公因式：

$$
Y(z) \sum_{k=0}^{N} b_{k} z^{-k}=X(z) \sum_{k=0}^{M} a_{k} z^{-k}
$$


两边同时除以 $\sum_{k=0}^{N} b_{k} z^{-k}$ 和 $X(z)$，得到：

$$
\frac{Y(z)}{X(z)}=\frac{\sum_{k=0}^{M} a_{k} z^{-k}}{\sum_{k=0}^{N} b_{k} z^{-k}}
$$


由于 $H(z)=\frac{Y(z)}{X(z)}$，因此系统函数为：

$$
H(z)=\frac{\sum_{k=0}^{M} a_{k} z^{-k}}{\sum_{k=0}^{N} b_{k} z^{-k}}
$$


注意，对于上述形式的系统（即由方程 (12.14) 描述的系统），其系统函数总是有理函数。这也是有理函数特别受关注的原因。

示例 12.37（差分方程到系统函数）。一个因果 LTI 系统的输入为 $x$，输出为 $y$，由差分方程描述：

$$
y(n)-a y(n-1)=b x(n)
$$


其中 $a$ 和 $b$ 为实常数，且 $a \neq 0$。求该系统的系统函数 $H$。

解答：对所给差分方程进行 z 变换，得到：

$$
Y(z)-a z^{-1} Y(z)=b X(z)
$$


提取公因式：

$$
\left(1-a z^{-1}\right) Y(z)=b X(z)
$$


两边同时除以 $1-a z^{-1}$ 和 $X(z)$，得到：

$$
\frac{Y(z)}{X(z)}=\frac{b}{1-a z^{-1}}
$$


因此，系统函数为：

$$
H(z)=\frac{b}{1-a z^{-1}}=\frac{b z}{z-a}
$$


由于系统是因果的，$H$ 的 ROC 必须在最外层极点 $a$ 之外。因此，我们得到：

$$
H(z)=\frac{b z}{z-a} \text { 当 }|z|>|a|
$$


示例 12.38（系统函数到差分方程）。一个因果 LTI 系统的输入为 $x$，输出为 $y$，其系统函数为：

$$
H(z)=\frac{b_{0} z^{2}}{z^{2}+a_{1} z+a_{2}},
$$


其中 $a_{1}, a_{2}$ 和 $b_{0}$ 为实常数，且 $a_{2} \neq 0$。求表征该系统的差分方程。

解答：设 $X$ 和 $Y$ 为 $x$ 和 $y$ 的 z 变换。由于 $H(z)=\frac{Y(z)}{X(z)}$，得到：

$$
\frac{Y(z)}{X(z)}=\frac{b_{0} z^{2}}{z^{2}+a_{1} z+a_{2}} .
$$


两边同时乘以 $z^{2}+a_{1} z+a_{2}$ 和 $X(z)$，得到：

$$
z^{2} Y(z)+a_{1} z Y(z)+a_{2} Y(z)=b_{0} z^{2} X(z)
$$


为了使 $z$ 的最高次幂为 0，两边同时乘以 $z^{-2}$，得到：

$$
Y(z)+a_{1} z^{-1} Y(z)+a_{2} z^{-2} Y(z)=b_{0} X(z)
$$


对两边进行逆 z 变换（利用 z 变换的线性和移位性质），得到：

$$
\begin{aligned}
& z^{-1}\{Y(z)\}(n)+a_{1} z^{-1}\left\{z^{-1} Y(z)\right\}(n)+a_{2} z^{-1}\left\{z^{-2} Y(z)\right\}(n)=b_{0} z^{-1}\{X(z)\}(n) \\
\Rightarrow \quad & y(n)+a_{1} y(n-1)+a_{2} y(n-2)=b_{0} x(n)
\end{aligned}
$$


因此，该系统由下列差分方程表征：

$$
y(n)+a_{1} y(n-1)+a_{2} y(n-2)=b_{0} x(n)
$$


![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-248.jpg?height=239&width=533&top_left_y=294&top_left_x=726){width="400"}

图 12.27：反馈系统。

## 12.15 稳定性分析

如前所述，由于对于 LTI 系统而言，BIBO 稳定性在 $z$ 域中比在时域中更容易表征，因此通常使用 $z$ 域来分析系统稳定性。下面，我们将更详细地探讨 $z$ 变换在该方面的应用。

示例 12.39（反馈系统）。考虑图 12.27 所示系统，其输入 z 变换为 $X$，输出 z 变换为 $Y$，由两个因果 LTI 系统互连而成，系统函数分别为 $H_{1}$ 和 $H_{2}$。给定系统函数：

$$
H_{1}(z)=\frac{10 \beta z}{z-1} \quad \text { 和 } \quad H_{2}(z)=1
$$


其中 $\beta$ 为实常数。求解：

(a) 整个系统的系统函数 $H$；  
(b) 使系统 BIBO 稳定的参数 $\beta$ 的取值范围。

解答：

(a) 根据系统图，我们可写出：

$$
\begin{gathered}
V(z)=X(z)+H_{2}(z) Y(z) \quad \text { 和 } \\
Y(z)=H_{1}(z) V(z)
\end{gathered}
$$


将两式结合并化简，得到：

$$
\begin{aligned}
& Y(z)=H_{1}(z)\left[X(z)+H_{2}(z) Y(z)\right] \\
\Rightarrow & Y(z)=H_{1}(z) X(z)+H_{1}(z) H_{2}(z) Y(z) \\
\Rightarrow & Y(z)\left[1-H_{1}(z) H_{2}(z)\right]=H_{1}(z) X(z) \\
\Rightarrow & \frac{Y(z)}{X(z)}=\frac{H_{1}(z)}{1-H_{1}(z) H_{2}(z)}
\end{aligned}
$$


因此，系统函数为：

$$
H(z)=\frac{H_{1}(z)}{1-H_{1}(z) H_{2}(z)}
$$


将给定的 $H_{1}$ 和 $H_{2}$ 代入并化简，得到：

$$
\begin{aligned}
H(z) & =\frac{\frac{10 \beta z}{z-1}}{1-\frac{10 \beta z}{z-1}(1)} \\
& =\frac{\frac{10 \beta z}{z-1}}{\frac{z-1-10 \beta z}{z-1}} \\
& =\frac{10 \beta z}{z-1-10 \beta z} \\
& =\frac{10 \beta z}{(1-10 \beta) z-1} \\
& =\frac{10 \beta}{1-10 \beta}\left(\frac{z}{z-\frac{1}{1-10 \beta}}\right)
\end{aligned}
$$


(b) 为评估系统的 BIBO 稳定性，需要考虑系统函数 $H$ 的极点。从上述表达式可以看出，$H$ 有唯一极点：

$$
z = \frac{1}{1-10 \beta}
$$


由于系统是因果的，系统 BIBO 稳定当且仅当所有极点严格位于单位圆内。因此：

$$
\begin{aligned}
& \left|\frac{1}{1-10 \beta}\right|<1 \\
\Rightarrow & \frac{1}{|1-10 \beta|}<1 \\
\Rightarrow & |1-10 \beta|>1 \\
\Rightarrow & 1-10 \beta>1 \text { 或 } 1-10 \beta<-1 \\
\Rightarrow & 10 \beta<0 \text { 或 } 10 \beta>2 \\
\Rightarrow & \beta<0 \text { 或 } \beta>\frac{1}{5}
\end{aligned}
$$


因此，该系统 BIBO 稳定的条件为：

$$
\beta<0 \text { 或 } \beta>\frac{1}{5}
$$


## 12.16 单边 z 变换

如前所述，z 变换通常有两种不同的形式，即双边（bilateral）和单边（unilateral）形式。到目前为止，我们仅讨论了双边 z 变换。现在，我们将关注单边 z 变换。序列 $x$ 的单边 $\mathbf{z}$ 变换记作 $z_{\mathrm{u}} x$ 或 $X$，定义为

$$
\begin{equation*}
z_{\mathrm{u}} x(z)=X(z)=\sum_{n=0}^{\infty} x(n) z^{-n} \tag{12.15}
\end{equation*}
$$


单边 z 变换的逆变换定义与双边 z 变换相同，即式 (12.3)。  
比较单边和双边 z 变换的定义（分别为式 (12.15) 和 (12.2)），可见二者仅在求和下限不同。由于定义相似，二者之间存在重要的关系，如下所示。考虑任意序列 $x$ 的序列 $x u$ 的双边 z 变换：

$$
\begin{aligned}
z\{x u\}(z) & =\sum_{n=-\infty}^{\infty} x(n) u(n) z^{-n} \\
& =\sum_{n=0}^{\infty} x(n) z^{-n} \\
& =z_{\mathrm{u}} x(z)
\end{aligned}
$$


换句话说，序列 $x$ 的单边 z 变换就是序列 $x u$ 的双边 z 变换。由于 $z_{u} x=z\{x u\}$ 且 $x u$ 总是右侧序列，因此 $z_{u} x$ 的 ROC 总是对应于右侧序列（即圆外区域或整个复平面）。因此，使用单边 z 变换时，我们通常不显式标注 ROC。

从本章前文可知，双边 z 变换是可逆的。即若序列 $x$ 的双边 z 变换为 $X=Z x$，则 $Z^{-1} X=x$。现在考虑单边 z 变换的可逆性。需要考虑 $z_{\mathrm{u}}^{-1} z_{\mathrm{u}} x$。由于 $z_{\mathrm{u}} x=z\{x u\}$ 且单边和双边 z 变换的逆变换公式相同，可得

$$
\begin{aligned}
z_{\mathrm{u}}^{-1} z_{\mathrm{u}} x(n) & =z_{\mathrm{u}}^{-1}\{z\{x u\}\}(n) \\
& =z^{-1}\{z\{x u\}\}(n) \\
& =x(n) u(n) \\
& = \begin{cases}x(n), & n \geq 0 \\ 0, & n<0\end{cases}
\end{aligned}
$$


因此，$z_{\mathrm{u}}^{-1} z_{\mathrm{u}} x=x$ 仅在 $x$ 因果时成立。换言之，单边 z 变换仅对因果序列可逆。对于非因果序列，只能恢复 $n \ge 0$ 时的 $x(n)$，其 $n<0$ 的信息被丢弃，无法通过逆单边 z 变换恢复。

由于单边和双边 z 变换关系密切，二者在性质上有一定相似性。但由于定义不同，某些性质会有所差异，通常是细微的。单边 z 变换的性质总结见表 12.4。

比较表 12.4 与表 12.2 可知，单边 z 变换与双边 z 变换共享部分性质，如线性、调制、共轭、上采样、下采样及 z 域求导性质。初值定理和终值定理也适用于单边 z 变换。

由于定义不同，单边 z 变换在某些情况下性质有所差异：

1. 平移性质被替换为时间延迟与时间提前性质；
2. 去掉了时间反转性质；
3. 卷积性质增加了序列必须为因果的要求；
4. 差分性质在 $\mathcal{Z}_{\mathrm{u}}\{x(n)-x(n-1)\}$ 的表达式中增加了额外项；
5. 累加性质的求和下限为 0（而非 $-\infty$）。

由于 $z_{\mathrm{u}} x=z\{x u\}$，可根据双边 z 变换对生成单边 z 变换对。利用表 12.3 的双边 z 变换对及单边与双边 z 变换的关系，可得到表 12.5 的单边 z 变换对。单边 z 变换的 ROC 总是假设为圆外区域（或整个复平面），因此表中未显式标出。

单边 z 变换的逆变换与双边情况相同（如部分分式展开），唯一的区别是 ROC 总是假设对应右侧序列。

表 12.4：单边 z 变换的性质

| 性质 | 时域 | z 域 |
| :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(n)+a_{2} x_{2}(n)$ | $a_{1} X_{1}(z)+a_{2} X_{2}(z)$ |
| 时间延迟 | $x(n-1)$ | $z^{-1} X(z)+x(-1)$ |
| 时间提前 | $x(n+1)$ | $z X(z)-z x(0)$ |
| 复指数调制 | $a^{n} x(n)$ | $X(z / a)$ |
| 共轭 | $x^{*}(n)$ | $X^{*}\left(z^{*}\right)$ |
| 上采样 | $(\uparrow M) x(n)$ | $X\left(z^{M}\right)$ |
| 下采样 | $(\downarrow M) x(n)$ | $\frac{1}{M} \sum_{k=0}^{M-1} X\left(e^{-j 2 \pi k / M} z^{1 / M}\right)$ |
| 卷积 | $x_{1} * x_{2}(n), x_{1}, x_{2}$ 为因果序列 | $X_{1}(z) X_{2}(z)$ |
| z 域求导 | $n x(n)$ | $-z \frac{d}{d z} X(z)$ |
| 差分 | $x(n)-x(n-1)$ | $\frac{z-1}{z} X(z)-x(-1)=\left(1-z^{-1}\right) X(z)-x(-1)$ |
| 累加 | $\sum_{k=0}^{n} x(k)$ | $\frac{z}{z-1} X(z)=\frac{1}{1-z^{-1}} X(z)$ |

| 性质 |  |
| :--- | :--- |
| 初值定理 | $x(0)=\lim _{z \rightarrow \infty} X(z)$ |
| 终值定理 | $\lim _{n \rightarrow \infty} x(n)=\lim _{z \rightarrow 1}[(z-1) X(z)]$ |

表 12.5：单边 z 变换对

| 对 | $x(n), n \ge 0$ | $X(z)$ |
| :--- | :--- | :--- |
| 1 | $\delta(n)$ | 1 |
| 2 | 1 | $\frac{z}{z-1}=\frac{1}{1-z^{-1}}$ |
| 3 | $n$ | $\frac{z}{(z-1)^{2}}=\frac{z^{-1}}{(1-z^{-1})^{2}}$ |
| 4 | $a^{n}$ | $\frac{z}{z-a}=\frac{1}{1-a z^{-1}}$ |
| 5 | $a^{n} n$ | $\frac{a z}{(z-a)^{2}}=\frac{a z^{-1}}{(1-a z^{-1})^{2}}$ |
| 6 | $\cos(\Omega_{0} n)$ | $\frac{z(z-\cos \Omega_{0})}{z^{2}-2 \cos \Omega_{0} z+1}=\frac{1-(\cos \Omega_{0}) z^{-1}}{1-2 (\cos \Omega_{0}) z^{-1}+z^{-2}}$ |
| 7 | $\sin(\Omega_{0} n)$ | $\frac{z \sin \Omega_{0}}{z^{2}-2 \cos \Omega_{0} z+1}=\frac{(\sin \Omega_{0}) z^{-1}}{1-2 (\cos \Omega_{0}) z^{-1}+z^{-2}}$ |
| 8 | $a^{n} \cos(\Omega_{0} n)$ | $\frac{z(z-a \cos \Omega_{0})}{z^{2}-2 a \cos \Omega_{0} z+a^{2}}=\frac{1-(a \cos \Omega_{0}) z^{-1}}{1-2 a \cos \Omega_{0} z^{-1}+a^{2} z^{-2}}$ |
| 9 | $a^{n} \sin(\Omega_{0} n)$ | $\frac{z a \sin \Omega_{0}}{z^{2}-2 a \cos \Omega_{0} z+a^{2}}=\frac{(a \sin \Omega_{0}) z^{-1}}{1-2 a \cos \Omega_{0} z^{-1}+a^{2} z^{-2}}$ |


## 12.17 使用单边 z 变换求解差分方程

工程应用中，许多感兴趣的系统可以用常系数线性差分方程来描述。事实证明，用这种方程描述的系统不一定是线性的。具体来说，只有当差分方程的初始条件全为零时，系统才是线性的。如果一个或多个初始条件不为零，则该系统被称为增量线性系统。在这里，增量线性系统可以被视为线性系统的推广。单边 z 变换有时非常有用，因为它可以方便地处理非零初始条件。例如，单边 z 变换的一个常见用途是求解具有非零初始条件的常系数线性差分方程。下面，我们将通过一些例子展示如何利用单边 z 变换来实现这一目的。

示例 12.40（两单位延迟的单边 z 变换）。设 $x$ 和 $y$ 是相关的序列：

$$
y(n)=x(n-2) .
$$


求 $y$ 的单边 z 变换 $Y$，并用 $x$ 的单边 z 变换 $X$ 表示。

**解**。定义序列

$$
\begin{equation*}
v(n)=x(n-1) \tag{12.16}
\end{equation*}
$$


使得

$$
\begin{equation*}
y(n)=v(n-1) . \tag{12.17}
\end{equation*}
$$


记 $V$ 为 $v$ 的单边 z 变换。对 (12.16) 取单边 z 变换（使用延迟性质），得到

$$
\begin{equation*}
V(z)=z^{-1} X(z)+x(-1) . \tag{12.18}
\end{equation*}
$$


对 (12.17) 取单边 z 变换（使用延迟性质），得到

$$
\begin{equation*}
Y(z)=z^{-1} V(z)+v(-1) \tag{12.19}
\end{equation*}
$$


将 (12.18) 中 $V$ 的表达式代入 (12.19)，并利用 $v(-1)=x((-1)-1)=x(-2)$，得到

$$
\begin{aligned}
Y(z) & =z^{-1} V(z)+v(-1) \\
& =z^{-1}\left[z^{-1} X(z)+x(-1)\right]+x(-2) \\
& =z^{-2} X(z)+z^{-1} x(-1)+x(-2)
\end{aligned}
$$


因此，我们得到

$$
Y(z)=z^{-2} X(z)+z^{-1} x(-1)+x(-2)
$$


示例 12.41（投资获得复利）。一项投资以固定年利率 $r$ 的复利方式增值，复利周期占一年的比例为 $\alpha$。（例如，$\alpha=\frac{1}{12}$ 表示按月复利。）设 $y$ 为序列，$y(n)$ 表示第 $n$ 个复利周期开始时的投资价值。则 $y$ 满足差分方程

$$
y(n)=\left(1+\frac{\alpha r}{100}\right) y(n-1) .
$$


考虑一项初始价值为 \$1000 的投资，其年利率固定为 6%，按月复利。利用单边 z 变换求该投资在 10 年后的价值。
**解**。由于 $r=6$ 且 $\alpha=\frac{1}{12}$，$y$ 是差分方程的解：

$$
\begin{aligned}
y(n) & =\left(1+\frac{6}{12(100)}\right) y(n-1) \\
& =\frac{201}{200} y(n-1),
\end{aligned}
$$


初始条件为 $y(-1)=1000$。对该方程取单边 z 变换（利用延迟性质）并求解 $Y$，得到

$$
\begin{array}{ll} 
& Y(z)=\frac{201}{200}\left[z^{-1} Y(z)+y(-1)\right] \\
\Rightarrow & Y(z)=\frac{201}{200} z^{-1} Y(z)+\frac{201}{200} y(-1) \\
\Rightarrow & Y(z)=\frac{201}{200} z^{-1} Y(z)+1005 \\
\Rightarrow & {\left[1-\frac{201}{200} z^{-1}\right] Y(z)=1005} \\
\Rightarrow & Y(z)=\frac{1005}{1-\frac{201}{200} z^{-1}} .
\end{array}
$$


对 $Y$ 进行逆 z 变换，得到

$$
y(n)=1005\left(\frac{201}{200}\right)^{n}, \quad n \geq 0
$$


对应 10 年的 $n$ 值为

$$
n=-1+12(10)=119
$$


因此，10 年后的投资价值为

$$
y(119)=1005\left(\frac{201}{200}\right)^{119} \approx 1819.39 .
$$


示例 12.42（储蓄取款计划）。考虑一个储蓄账户，其年利率固定为 6%，按月复利。账户的初始余额为 \$10000。从第二年的第一个月开始，每月开始取款 \$100。求账户何时会出现透支（即余额为负）。

**解**。设 $y(n)$ 为第 $n$ 个复利周期开始时的账户余额，$x(n)$ 为同一复利周期开始时的取款金额。序列 $y$ 满足差分方程：

$$
y(n)=\left(1+\frac{\alpha r}{100}\right) y(n-1)+x(n),
$$


其中 $x(n)$ 为第 $n$ 个复利周期开始时存入账户的金额，$r$ 为年利率（百分比），$\alpha$ 为复利周期占一年的比例（例如，按月复利时 $\alpha=\frac{1}{12}$）。代入 $r=6$ 和 $\alpha=\frac{1}{12}$，得到

$$
\begin{equation*}
y(n)=\left(\frac{201}{200}\right) y(n-1)+x(n), \tag{12.20}
\end{equation*}
$$


初始条件 $y(-1)$ 对应账户初始余额：

$$
\begin{equation*}
y(-1)=10000 \tag{12.21}
\end{equation*}
$$


时间索引 $n$ 以复利周期为单位，其中 $n=-1$ 对应初始时间（即时间“零”）。取款从第二年的开始，即 $n=-1+12=11$。因此

$$
\begin{equation*}
x(n)=-100 u(n-11) . \tag{12.22}
\end{equation*}
$$


对因果序列 $x$（式 (12.22)）取单边 z 变换，得到

$$
X(z)=\frac{-100 z^{-11}}{1-z^{-1}}
$$


对差分方程 (12.20) 取单边 z 变换，得到

$$
\begin{aligned}
\quad Y(z) & =\frac{201}{200}\left(z^{-1} Y(z)+y(-1)\right)+X(z) \\
\Rightarrow \quad Y(z) & =\frac{201}{200} z^{-1} Y(z)+\frac{201}{200} y(-1)+X(z) \\
\Rightarrow \quad Y(z) & =\frac{201}{200} z^{-1} Y(z)+10050-\frac{100 z^{-11}}{1-z^{-1}}
\end{aligned}
$$


整理方程求 $Y$，得到

$$
\begin{aligned}
& \left(1-\frac{201}{200} z^{-1}\right) Y(z)=10050-\frac{100 z^{-11}}{1-z^{-1}} \\
\Rightarrow \quad & Y(z)=\frac{10050}{1-\frac{201}{200} z^{-1}}-\frac{100 z^{-11}}{\left(1-z^{-1}\right)\left(1-\frac{201}{200} z^{-1}\right)}
\end{aligned}
$$


对 $Y$ 中第二项（不含 $z^{-11}$ 因子）做部分分式展开，形式为：

$$
\frac{100}{\left(1-z^{-1}\right)\left(1-\frac{201}{200} z^{-1}\right)}=\frac{A_{1}}{1-z^{-1}}+\frac{A_{2}}{1-\frac{201}{200} z^{-1}} .
$$


计算展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.\left(1-z^{-1}\right) Y(z)\right|_{z=1} \\
& =\left.\frac{1}{1-\frac{201}{200} z^{-1}}\right|_{z=1} \\
& =\frac{1}{-1 / 200}=-20000, \quad \text {且} \\
A_{2} & =\left.\left(1-\frac{201}{200} z^{-1}\right) Y(z)\right|_{z=201 / 200} \\
& =\left.\frac{100}{1-z^{-1}}\right|_{z=201 / 200} \\
& =\frac{100}{1 / 201}=20100
\end{aligned}
$$


将上述部分分式代入 $Y(z)$，得到

$$
\begin{aligned}
Y(z) & =\frac{10050}{1-\frac{201}{200} z^{-1}}-z^{-11}\left[\frac{-20000}{1-z^{-1}}+\frac{20100}{1-\frac{201}{200} z^{-1}}\right] \\
& =10050 \frac{1}{1-\frac{201}{200} z^{-1}}+20000 z^{-11} \frac{1}{1-z^{-1}}-20100 z^{-11} \frac{1}{1-\frac{201}{200} z^{-1}}
\end{aligned}
$$


对 $Y$ 做逆 z 变换，得到

$$
y(n)=10050\left(\frac{201}{200}\right)^{n} u(n)+20000 u(n-11)-20100\left(\frac{201}{200}\right)^{n-11} u(n-11), \quad n \geq 0 .
$$


序列 $y$ 在 $n>11$ 时单调下降，并且 $y(160) \approx 61.20 \geq 0$，$y(161) \approx -38.50<0$。因此，账户在 $n=161$ 时出现透支，对应于从初始余额起的 $161-(-1)=162$ 个月。

示例 12.43（斐波那契数列）。斐波那契数列 $f$ 定义为

$$
f_{n}= \begin{cases}f_{n-1}+f_{n-2} & n \geq 2 \\ 1 & n=1 \\ 0 & n=0\end{cases}
$$


其中 $n$ 是非负整数。该数列的前几个元素为

$$
0,1,1,2,3,5,8,13,21,34,55, \ldots
$$


利用 z 变换求第 $n$ 个斐波那契数 $f_{n}$ 的闭式表达式。

**解**。斐波那契数列可以用常系数线性差分方程表示。具体来说，斐波那契数列是差分方程

$$
\begin{equation*}
x(n)=x(n-1)+x(n-2)+\delta(n-1) \tag{12.23a}
\end{equation*}
$$


的解 $x$，初始条件为

$$
\begin{equation*}
x(-1)=x(-2)=0 \tag{12.23b}
\end{equation*}
$$


可以验证该方程的正确性。将 $n=0$ 和 $n=1$ 代入 (12.23a)：

$$
\begin{aligned}
x(0) & =x(-1)+x(-2)+\delta(-1) \\
& =0+0+0 \\
& =0 \\
& =f_{0} \quad \text {且} \\
x(1) & =x(0)+x(-1)+\delta(0) \\
& =0+0+1 \\
& =1 \\
& =f_{1} .
\end{aligned}
$$


当 $n \geq 2$ 时，

$$
\begin{aligned}
x(n) & =x(n-1)+x(n-2)+\delta(n-1) \\
& =x(n-1)+x(n-2)+0 \\
& =x(n-1)+x(n-2) \\
& =f_{n}
\end{aligned}
$$


因此，斐波那契数列实际上是 (12.23a) 的解。

现在使用 z 变换求解上述差分方程。对差分方程取单边 z 变换，得到

$$
\begin{aligned}
& z_{\mathrm{u}} x(z)=z^{-1} z_{\mathrm{u}} x(z)+x(-1)+z^{-1}\left[z^{-1} z_{\mathrm{u}} x(z)+x(-1)\right]+x(-2)+z^{-1} z_{\mathrm{u}} \delta(z)+\delta(-1) \\
\Rightarrow & X(z)=z^{-1} X(z)+x(-1)+z^{-2} X(z)+z^{-1} x(-1)+x(-2)+z^{-1} z_{\mathrm{u}} \delta(z)+\delta(-1) \\
\Rightarrow & X(z)=z^{-1} X(z)+z^{-2} X(z)+z^{-1} \\
\Rightarrow & \left(1-z^{-1}-z^{-2}\right) X(z)=z^{-1} \\
\Rightarrow & X(z)=\frac{z^{-1}}{1-z^{-1}-z^{-2}}
\end{aligned}
$$


（注意，由于所有初始条件为零，也可直接使用双边 z 变换。）因此，

$$
X(z)=\frac{z}{z^{2}-z-1}
$$


对分母多项式因式分解以确定 $X$ 的极点。利用二次公式，$z^{2}-z-1$ 的根为 $\frac{1 \pm \sqrt{5}}{2}$。于是

$$
X(z)=\frac{z}{\left(z-\frac{1+\sqrt{5}}{2}\right)\left(z-\frac{1-\sqrt{5}}{2}\right)}
$$


对

$$
\frac{X(z)}{z}=\frac{1}{\left(z-\frac{1+\sqrt{5}}{2}\right)\left(z-\frac{1-\sqrt{5}}{2}\right)}
$$


进行部分分式展开，形式为

$$
\frac{X(z)}{z}=\frac{A_{1}}{z-\frac{1+\sqrt{5}}{2}}+\frac{A_{2}}{z-\frac{1-\sqrt{5}}{2}}
$$


计算展开系数：

$$
\begin{aligned}
A_{1} & =\left.\left(z-\frac{1+\sqrt{5}}{2}\right)\left(\frac{X(z)}{z}\right)\right|_{z=\frac{1+\sqrt{5}}{2}} \\
& =\left.\frac{1}{z-\frac{1-\sqrt{5}}{2}}\right|_{z=\frac{1+\sqrt{5}}{2}} \\
& =\frac{1}{\sqrt{5}}, \quad \text {且} \\
A_{2} & =\left.\left(z-\frac{1-\sqrt{5}}{2}\right)\left(\frac{X(z)}{z}\right)\right|_{z=\frac{1-\sqrt{5}}{2}} \\
& =\left.\frac{1}{z-\frac{1+\sqrt{5}}{2}}\right|_{z=\frac{1-\sqrt{5}}{2}} \\
& =-\frac{1}{\sqrt{5}}
\end{aligned}
$$


因此，

$$
X(z)=\frac{1}{\sqrt{5}}\left(\frac{z}{z-\frac{1+\sqrt{5}}{2}}\right)-\frac{1}{\sqrt{5}}\left(\frac{z}{z-\frac{1-\sqrt{5}}{2}}\right)
$$


对 $X$ 进行逆 z 变换，得到

$$
x(n)=\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n}-\frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n}, \quad n \geq 0 .
$$


示例 12.44（一阶差分方程）。考虑因果系统，其输入为 $x$，输出为 $y$，由差分方程描述：

$$
2 y(n)+y(n-1)=x(n)
$$


若 $x(n)=\left(\frac{1}{4}\right)^{n} u(n)$ 且 $y(-1)=2$，求 $y$。

**解**。对 $x$ 取单边 z 变换，得到

$$
X(z)=\frac{1}{1-\frac{1}{4} z^{-1}}
$$


对给定差分方程的两边取单边 z 变换，得到

$$
2 Y(z)+z^{-1} Y(z)+y(-1)=X(z)
$$


将 $X$ 的表达式及给定初始条件代入，得到

$$
\begin{array}{ll} 
& 2 Y(z)+z^{-1} Y(z)+2=\frac{1}{1-\frac{1}{4} z^{-1}} \\
\Leftrightarrow & \left(2+z^{-1}\right) Y(z)=\frac{1}{1-\frac{1}{4} z^{-1}}-2 \\
\Leftrightarrow & 2\left(1+\frac{1}{2} z^{-1}\right) Y(z)=\frac{-1+\frac{1}{2} z^{-1}}{1-\frac{1}{4} z^{-1}} \\
\Leftrightarrow & Y(z)=\frac{-\frac{1}{2}+\frac{1}{4} z^{-1}}{\left(1-\frac{1}{4} z^{-1}\right)\left(1+\frac{1}{2} z^{-1}\right)}
\end{array}
$$


接下来对 $Y$ 做部分分式展开，形式为

$$
Y(z)=\frac{A_{1}}{1-\frac{1}{4} z^{-1}}+\frac{A_{2}}{1+\frac{1}{2} z^{-1}}
$$


计算展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.\left(1-\frac{1}{4} z^{-1}\right) Y(z)\right|_{z=1 / 4} = \frac{1}{6}, \\
A_{2} & =\left.\left(1+\frac{1}{2} z^{-1}\right) Y(z)\right|_{z=-1 / 2} = -\frac{2}{3}
\end{aligned}
$$


因此，$Y$ 可写为

$$
Y(z)=\frac{1}{6}\left(\frac{1}{1-\frac{1}{4} z^{-1}}\right)-\frac{2}{3}\left(\frac{1}{1+\frac{1}{2} z^{-1}}\right)
$$


对 $Y$ 做单边逆 z 变换，得到

$$
y(n)=\frac{1}{6}\left(\frac{1}{4}\right)^{n}-\frac{2}{3}\left(-\frac{1}{2}\right)^{n}, \quad n \geq 0
$$


示例 12.45（二阶差分方程）。考虑因果系统，其输入为 $x$，输出为 $y$，由差分方程描述：

$$
10 y(n)+3 y(n-1)-y(n-2)=x(n)
$$


若 $x(n)=6 u(n), y(-1)=3, y(-2)=6$，求 $y$。

**解**。对 $x$ 取单边 z 变换，得到

$$
X(z)=\frac{6}{1-z^{-1}}
$$


对差分方程的两边取单边 z 变换，得到

$$
\begin{aligned}
& 10 Y(z)+3\left[z^{-1} Y(z)+y(-1)\right]-\left(z^{-1}\left[z^{-1} Y(z)+y(-1)\right]+y(-2)\right)=X(z) \\
\Rightarrow & 10 Y(z)+3 z^{-1} Y(z)+3 y(-1)-z^{-2} Y(z)-z^{-1} y(-1)-y(-2)=X(z) \\
\Rightarrow & 10 Y(z)+3 z^{-1} Y(z)-z^{-2} Y(z)+3 y(-1)-y(-2)-z^{-1} y(-1)=X(z)
\end{aligned}
$$


整理求 $Y$：

$$
\begin{aligned}
& \left(10+3 z^{-1}-z^{-2}\right) Y(z)=-3 y(-1)+y(-2)+z^{-1} y(-1)+X(z) \\
\Rightarrow & Y(z)=\frac{-3 y(-1)+y(-2)+z^{-1} y(-1)+X(z)}{10+3 z^{-1}-z^{-2}}
\end{aligned}
$$


对分母因式分解：$10+3 z^{-1}-z^{-2}=z^{-2}(10 z^{2}+3 z-1)$，求根得 $\frac{1}{5}$ 和 $-\frac{1}{2}$。于是

$$
Y(z)=\frac{-3 y(-1)+y(-2)+z^{-1} y(-1)+X(z)}{10\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{5} z^{-1}\right)}
$$


代入 $X$ 及初始条件，得到

$$
\begin{aligned}
Y(z) & =\frac{-3(3)+6+3 z^{-1}+\frac{6}{1-z^{-1}}}{10\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{5} z^{-1}\right)} \\
& =\frac{-3+3 z^{-1}+\frac{6}{1-z^{-1}}}{10\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{5} z^{-1}\right)} \\
& =\frac{\left(-3+3 z^{-1}\right)\left(1-z^{-1}\right)+6}{10\left(1-z^{-1}\right)\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{5} z^{-1}\right)} \\
& =\frac{3+6 z^{-1}-3 z^{-2}}{10\left(1-z^{-1}\right)\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{1}{5} z^{-1}\right)}
\end{aligned}
$$


对 $Y$ 做部分分式展开：

$$
Y(z)=\frac{A_{1}}{1-z^{-1}}+\frac{A_{2}}{1+\frac{1}{2} z^{-1}}+\frac{A_{3}}{1-\frac{1}{5} z^{-1}}
$$


计算系数：

$$
\begin{aligned}
A_{1} & =\frac{1}{2}, \\
A_{2} & =-\frac{1}{2}, \\
A_{3} & =\frac{3}{10}
\end{aligned}
$$


因此

$$
Y(z)=\frac{1}{2}\left(\frac{1}{1-z^{-1}}\right)-\frac{1}{2}\left(\frac{1}{1+\frac{1}{2} z^{-1}}\right)+\frac{3}{10}\left(\frac{1}{1-\frac{1}{5} z^{-1}}\right)
$$


对 $Y$ 做单边逆 z 变换，得到

$$
y(n)=\frac{1}{2}-\frac{1}{2}\left(-\frac{1}{2}\right)^{n}+\frac{3}{10}\left(\frac{1}{5}\right)^{n}, \quad n \geq 0
$$


## 12.18 习题

### 12.18.1 无答案习题

12.1 利用 z 变换的定义，求下列各序列 $x$ 的 z 变换 $X$。
(a) $x(n)=n u(n)$；
(b) $x(n)=n a^{n} u(n)$，其中 $a$ 为复常数；
(c) $x(n)=\cos (a n) u(n)$，其中 $a$ 为非零实常数。

12.2 利用 z 变换的性质及 z 变换对照表，求下列各序列 $x$ 的 z 变换 $X$。
(a) $x(n)=n\left(\frac{1}{2}\right)^{|n|}$；
(b) $x(n)=n\left(\frac{1}{3}\right)^{|n-1|}$；
(c) $x(n)=\left(\frac{2}{3}\right)^{n-1} u(n-1)$；
(d) $x(n)=2^{n} u(-n)$；
(e) $x(n)=\delta(n+5)-\delta(n-5)$；
(f) $x(n)=3^{n} u(-n-2)$；
(g) $x(n)=x_{1} * x_{2}(n)$，其中 $x_{1}(n)=2^{n-1} u(n)$，$x_{2}(n)=\cos \left(\frac{\pi}{6} n+\frac{\pi}{3}\right) u(n)$；
(h) $x(n)=n \sin \left(\frac{\pi}{2} n\right) u(n)$；
(i) $x(n)=u * x_{1}(n)$，其中 $x_{1}(n)=u(n-1)$；
(j) $x(n)=c^{n} \cos (a n+b) u(-n-1)$，其中 $a, b \in \mathbb{R}, c \in \mathbb{C}, a \neq 0$ 且 $|c|>1$。

12.3 对下列每个 z 变换代数表达式 $X$，求所有可能的 ROC。
(a) $X(z)=\frac{3}{1+\frac{1}{3} z^{-1}}$；
(b) $X(z)=\frac{z^{-1}}{\left(1-\frac{1}{2} z^{-1}\right)\left(1+3 z^{-1}\right)}$；
(c) $X(z)=1+z^{-1}$；
(d) $X(z)=\frac{z}{\left(z^{2}+\frac{1}{4}\right)\left(z^{2}-\frac{1}{4}\right)}$；
(e) $X(z)=\frac{z}{\left(z+\frac{1}{2}\right)\left(z-\frac{1}{5}\right)}$。

12.4 判断下列 z 变换 $X$ 对应的序列 $x$ 是有限长、右侧但非左侧、左侧但非右侧，还是双侧。
(a) $X(z)=\frac{5}{1+\frac{1}{3} z^{-1}}, |z|>\frac{1}{3}$；
(b) $X(z)=\frac{z^{-1}}{\left(1-\frac{1}{4} z^{-1}\right)\left(1-\frac{1}{2} z^{-1}\right)}, \frac{1}{4}<|z|<\frac{1}{2}$；
(c) $X(z)=\frac{z^{-1}}{1-z^{-1}}, |z|<1$；
(d) $X(z)=\frac{1}{3}\left(1+z^{-1}+z^{-2}\right), |z|>0$；
(e) $X(z)=\frac{1}{3}\left(z^{2}+z+1\right), \text{对所有有限 } z$。

12.5 求下列各函数 $X$ 的逆 z 变换 $x$，若使用部分分式展开，应避免在最终答案中产生不必要的时间偏移。
(a) $X(z)=\frac{10 z^{2}-15 z+3}{(z-3)\left(z-\frac{1}{3}\right)}, |z|>3$；
(b) $X(z)=\frac{5 z^{2}-8 z+2}{(z-2)\left(z-\frac{1}{2}\right)}, \frac{1}{2}<|z|<2$；
(c) $X(z)=\frac{1-z^{-9}}{z-1}, |z|>1$ [提示：不必做 PFE]；
(d) $X(z)=\frac{2 z^{3}}{\left(z-\frac{1}{4}\right)\left(z-\frac{3}{4}\right)}, |z|>\frac{3}{4}$；
(e) $X(z)=\frac{1}{(z-1)\left(z+\frac{1}{2}\right)}, |z|>1$；
(f) $X(z)=\frac{2 z}{1-z}+1+z^{-1}, |z|>1$；
(g) $X(z)=\frac{\frac{5}{6} z^{-1}}{\left(1+\frac{1}{3} z^{-1}\right)\left(1-\frac{2}{9} z^{-1}\right)}, |z|<\frac{2}{9}$。

12.6 对下列 z 变换代数表达式 $X$，求所有可能的 $x$。
(a) $X(z)=\frac{2-z^{-1}}{\left(1+\frac{1}{2} z^{-1}\right)\left(1-\frac{3}{2} z^{-1}\right)}$；
(b) $X(z)=\frac{5}{1+\frac{1}{3} z^{-1}}$；
(c) $X(z)=\frac{-z^{2}+\frac{1}{4} z}{(z-1)\left(z-\frac{3}{4}\right)}$。

12.7 求下列函数 $X$ 的逆 z 变换 $x$。
(a) $X(z)=e^{a / z}, |z|>0, a \in \mathbb{C}$ [提示：使用 (F.12)]；
(b) $X(z)=-\ln (1-a z), |z|<|a|^{-1}$ [提示：使用 (F.13)]；
(c) $X(z)=-\ln \left(1-a^{-1} z^{-1}\right), |z|>|a|^{-1}$ [提示：使用 (F.13)]；
(d) $X(z)=\sin \left(z^{-1}\right), |z|>0$ [提示：使用 (F.10)]。

12.8 对因果 LTI 系统，其输入为 $x$，输出为 $y$，由下列差分方程描述，求系统函数 $H$。
(a) $y(n)-\frac{2}{3} y(n-1)+\frac{1}{9} y(n-2)=x(n)+\frac{1}{2} x(n-1)$；
(b) $y(n+2)-\frac{1}{4} y(n+1)-\frac{1}{4} y(n)+\frac{1}{16} y(n-1)=x(n+2)-x(n+1)$。

12.9 对下列 LTI 系统，其系统函数 $H$ 已知，求描述系统的差分方程。
(a) $H(z)=\frac{1-z^{-1}-\frac{2}{9} z^{-2}}{1-\frac{1}{4} z^{-1}-\frac{1}{4} z^{-2}+\frac{1}{16} z^{-3}}, |z|>\frac{1}{2}$；
(b) $H(z)=\frac{z^{2}+\frac{1}{4}}{z^{3}-\frac{17}{12} z^{2}+\frac{5}{8} z-\frac{1}{12}}, |z|>\frac{2}{3}$。

12.10 判断下列 LTI 系统是否因果。
(a) $H(z)=\frac{z^{2}+3 z+2}{z-1}, |z|>1$；
(b) $H(z)=\frac{1+3 z^{-1}}{1-z^{-1}}, |z|<1$；
(c) $H(z)=\frac{1+\frac{1}{2} z^{-1}}{z-\frac{1}{2}}, |z|>\frac{1}{2}$。

12.11 对下列 LTI 系统 $\mathcal{H}$，求其所有逆系统（用系统函数表示），并讨论每个逆系统的因果性和 BIBO 稳定性。
(a) $H(z)=\frac{z-\frac{1}{4}}{z-\frac{1}{2}}, |z|>\frac{1}{2}$；
(b) $H(z)=\frac{1}{\left(z^{2}-\frac{1}{4}\right)\left(z^{2}-\frac{1}{9}\right)}, |z|>\frac{1}{2}$；
(c) $H(z)=\frac{\left(z^{2}-\frac{1}{4}\right)\left(z^{2}+4\right)}{\left(z^{2}-\frac{1}{9}\right)\left(z^{2}+\frac{1}{9}\right)}, |z|>\frac{1}{3}$。

12.12 对下列 LTI 系统，其系统函数 $H$ 已知，求系统 BIBO 稳定时的 ROC（若存在）。
(a) $H(z)=\frac{1+z^{-1}}{1+z^{-1}+\frac{1}{2} z^{-2}}$；
(b) $H(z)=\frac{1-\frac{1}{3} z^{-1}}{1-\frac{5}{2} z^{-1}+z^{-2}}$；
(c) $H(z)=\frac{1+z^{-1}}{1-\frac{3}{4} z^{-1}+\frac{1}{8} z^{-2}}$；
(d) $H(z)=\frac{1}{1-5 z^{-1}+6 z^{-2}}$；
(e) $H(z)=\frac{z^{2}-1}{z^{2}+1}$。

12.13 考虑图示系统，其输入的 z 变换为 $X$，输出的 z 变换为 $Y$，每个因果 LTI 子系统都标注了其系统函数，$a$ 为任意实数常数。  
(a) 求整个系统的系统函数 $H$。  
(b) 确定系统在什么取值的 $a$ 下是 BIBO 稳定的。  

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-262.jpg?height=263&width=544&top_left_y=1472&top_left_x=805){width="400"}
  

---

12.14 考虑系统 $\mathcal{H}$，其输入的 z 变换为 $X$，输出的 z 变换为 $Y$，如图所示。图中每个子系统都是因果 LTI，并标注了其系统函数。  
(a) 求系统 $\mathfrak{H}$ 的系统函数 $H$。  
(b) 判断系统 $\mathfrak{H}$ 是否 BIBO 稳定。  

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-262.jpg?height=565&width=841&top_left_y=1926&top_left_x=659){width="400"}
  

---

12.15 对于输入 $x$、输出 $y$ 的系统，由下列差分方程描述，求给定 $x$ 和初始条件下的 $y$。  
(a) $y(n)-\frac{1}{2} y(n-1)=x(n)$，其中 $x(n)=2 u(n)$，$y(-1)=2$；  
(b) $y(n)+\frac{1}{4} y(n-2)=x(n)$，其中 $x(n)=0$，$y(-1)=0$，$y(-2)=4$；  
(c) $y(n)+3 y(n-1)=x(n)$，其中 $x(n)=\left(\frac{1}{2}\right)^{n} u(n)$，$y(-1)=1$。  

---

### 12.18.2 带答案的练习

12.101 求每个给定函数 $X$ 的逆 z 变换 $x$。  
(a) $X(z)=\frac{z\left(10 z^{2}-\frac{27}{2} z+\frac{15}{4}\right)}{\left(z-\frac{1}{4}\right)\left(z-\frac{1}{2}\right)(z-1)}$，$|z|>1$。

**简答**：  
(a) $x(n)=\left[\frac{16}{3}\left(\frac{1}{4}\right)^{n}+4\left(\frac{1}{2}\right)^{n}+\frac{2}{3}\right] u(n)$

---

### 12.18.3 MATLAB 练习

目前没有 MATLAB 练习。
