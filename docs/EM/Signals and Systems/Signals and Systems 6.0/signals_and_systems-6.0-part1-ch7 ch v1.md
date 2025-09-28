# 第7章 拉普拉斯变换

## 7.1 引言

在本章中，我们将介绍信号与系统研究中另一种重要的数学工具——拉普拉斯变换。拉普拉斯变换可以看作是（经典）傅里叶变换的推广。由于其更一般的性质，拉普拉斯变换相比傅里叶变换具有若干优势。首先，对于一些没有（经典）傅里叶变换表示的函数，拉普拉斯变换表示是存在的。因此，我们可以利用拉普拉斯变换处理一些傅里叶变换无法处理的函数。其次，由于拉普拉斯变换是一个更为一般的工具，它能够提供超越傅里叶变换所能揭示的额外洞见。

## 7.2 拉普拉斯变换的动机

在第4.10节中，我们表明复指数函数是 LTI 系统的特征函数。假设我们有一个冲激响应为 $h$ 的 LTI 系统。这一特征函数性质导致了如下结果：当输入为复指数 $x(t)=e^{s t}$（其中 $s$ 为复常数）时，系统的响应 $y$ 为

$$
y(t)=H(s) e^{s t}
$$

其中

$$
\begin{equation*}
H(s)=\int_{-\infty}^{\infty} h(t) e^{-s t} d t \tag{7.1}
\end{equation*}
$$

此前，我们称 $H$ 为系统函数。在本章中，我们将了解到 $H$ 实际上就是 $h$ 的拉普拉斯变换。也就是说，式 (7.1) 中的积分就是拉普拉斯变换的定义。当 $s=j \omega$，其中 $\omega$ 为实数（即 $s$ 是纯虚数）时，(7.1) 就成为了傅里叶变换积分（在第6章中讨论过）。根据之前的内容，我们知道 $H(j \omega)$ 是 LTI 系统的频率响应（即 $h$ 的傅里叶变换）。由于 (7.1) 将傅里叶变换作为一个特殊情况包含在内，拉普拉斯变换可以被视为（经典）傅里叶变换的推广。

## 7.3 拉普拉斯变换的定义

函数 $x$ 的（双边）拉普拉斯变换记作 $\mathcal{L} x$ 或 $X$，其定义为

$$
\begin{equation*}
\mathcal{L} x(s)=X(s)=\int_{-\infty}^{\infty} x(t) e^{-s t} d t \tag{7.2}
\end{equation*}
$$

类似地，$X$ 的拉普拉斯逆变换记作 $\mathcal{L}^{-1} X$ 或 $x$，其表达式为

$$
\begin{equation*}
\mathcal{L}^{-1} X(t)=x(t)=\frac{1}{2 \pi j} \int_{\sigma-j \infty}^{\sigma+j \infty} X(s) e^{s t} d s \tag{7.3}
\end{equation*}
$$

其中 $\sigma=\operatorname{Re}(s)$。我们称 $x$ 与 $X$ 为一对拉普拉斯变换对，并用下式表示这种关系：

$$
x(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s) .
$$

从 (7.3) 可以看出，拉普拉斯逆变换的计算需要复轮积分（因为 $s$ 是一个复变量）。特别地，我们必须在复平面上沿垂直于实轴的直线 $s=\sigma$ 上进行积分。这样的复轮积分往往并不容易计算。因此，在实际应用中，我们通常不会直接通过 (7.3) 来计算拉普拉斯逆变换，而是借助其他方法（将在后文讨论）。

拉普拉斯变换常用的有两种不同版本。第一种是上文介绍的双边拉普拉斯变换；第二种是单边拉普拉斯变换。单边拉普拉斯变换最常用于求解具有非零初始条件的线性微分方程。实际上，双边与单边拉普拉斯变换定义上的唯一差别在于积分下限：双边情况下下限为 $-\infty$，而单边情况下下限为 0。在本章剩余部分，我们将主要关注双边拉普拉斯变换。不过，我们也会简要介绍单边拉普拉斯变换作为求解微分方程的工具。除非特别说明，后续所有关于拉普拉斯变换的讨论均指双边拉普拉斯变换。

## 7.4 关于拉普拉斯变换符号的说明

拉普拉斯变换算子 $\mathcal{L}$ 与其逆变换算子 $\mathcal{L}^{-1}$ 都是将一个函数映射为另一个函数。因此，这些算子的运算对象必须是函数（而不是数值）。考虑图 7.1 所示的函数，它将 $t$ 映射为 $e^{-|t|}$。假设我们希望写出该函数的拉普拉斯变换表达式。起初，我们可能会写成 “$\mathcal{L}\left\{e^{-|t|}\right\}$”。然而严格来说，这种写法并不正确，因为拉普拉斯变换算子需要以函数作为运算对象，而 “$e^{-|t|}$” （严格来说）表示的是一个数值（即图中函数在某个 $t$ 处的取值）。本质上，这里的问题是该函数没有名字（如 “$x$”），无法直接引用。为解决此问题，我们可以定义一个函数 $x$，令 $x(t)=e^{-|t|}$，然后将其拉普拉斯变换写作 “$\mathcal{L}x$”。但仅仅为了书写严格的符号而引入新的函数名，往往会导致写作冗长，因此并不理想。

为了避免在引用匿名函数时出现过于冗长的表达，可以使用第 2.1 节介绍的点符号（dot notation）。再考虑图 7.1 中的函数 $t \mapsto e^{-|t|}$。若采用严格正确的符号，我们可以写作 “$\mathcal{L}\left\{e^{-|\cdot|}\right\}$” 来表示该函数的拉普拉斯变换。换句话说，通过使用间隔点符号（详见第 2.1 节），我们可以明确表示这是一个函数（而不是函数值）。点符号的使用示例如例 7.1 所示。当需要在保持符号精确（严格正确）的同时避免冗长时，点符号往往非常有用。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-255.jpg?height=663&width=844&top_left_y=291&top_left_x=702)

图 7.1：$e^{-|t|}$ 关于 $t$ 的曲线。

**例 7.1（点符号）。** 点符号的若干使用示例如下：

1. 表示函数 $x(t)=t^{2} e^{-3 t} u(t)$ 的拉普拉斯变换（无需引入函数名 $x$），可写为：  
   $\mathcal{L}\left\{(\cdot)^{2} e^{-3(\cdot)} u(\cdot)\right\}$。
2. 表示函数 $x(t)=t^{2} e^{-3 t} u(t)$ 的拉普拉斯变换在 $s-5$ 处的取值（无需引入函数名 $x$），可写为：  
   $\mathcal{L}\left\{(\cdot)^{2} e^{-3(\cdot)} u(\cdot)\right\}(s-5)$。
3. 表示函数 $X(s)=s^{-1}$ 的拉普拉斯逆变换（无需引入函数名 $X$），可写为：  
   $\mathcal{L}^{-1}\left\{(\cdot)^{-1}\right\}$。
4. 表示函数 $X(s)=s^{-1}$ 的拉普拉斯逆变换在 $t-3$ 处的取值（无需引入函数名 $X$），可写为：  
   $\mathcal{L}^{-1}\left\{(\cdot)^{-1}\right\}(t-3)$。  

如果读者对点符号使用感到熟悉，作者建议在合适的场合加以使用。然而，由于部分读者可能会觉得点符号令人困惑，本书在大多数情况下尽量避免使用点符号。作为折中方案，本书采用以下符号约定，以在保持简洁和一定清晰度的同时减少点符号的使用：

- 除非另有说明，在拉普拉斯变换算子 $\mathcal{L}$ 的运算对象表达式中，变量 “$t$” 被视为函数的自变量（即在点符号的意义下，每个 “$t$” 被当作 “$\cdot$” 处理）；  
- 除非另有说明，在拉普拉斯逆变换算子 $\mathcal{L}^{-1}$ 的运算对象表达式中，变量 “$s$” 被视为函数的自变量（即在点符号的意义下，每个 “$s$” 被当作 “$\cdot$” 处理）。

**例 7.2（书中采用的符号约定）。** 使用本书符号约定（如上所述）的几个示例如下：

1. 表示函数 $x(t)=t^{2} e^{-3 t} u(t)$ 的拉普拉斯变换（无需引入函数名 $x$），可写为：  
   $\mathcal{L}\left\{t^{2} e^{-3 t} u(t)\right\}$。
2. 表示函数 $x(t)=t^{2} e^{-3 t} u(t)$ 的拉普拉斯变换在 $s-5$ 处的取值（无需引入函数名 $x$），可写为：  
   $\mathcal{L}\left\{t^{2} e^{-3 t} u(t)\right\}(s-5)$。
3. 表示函数 $X(s)=s^{-1}$ 的拉普拉斯逆变换（无需引入函数名 $X$），可写为：  
   $\mathcal{L}^{-1}\left\{s^{-1}\right\}$。
4. 表示函数 $X(s)=s^{-1}$ 的拉普拉斯逆变换在 $t-3$ 处的取值（无需引入函数名 $X$），可写为：  
   $\mathcal{L}^{-1}\left\{s^{-1}\right\}(t-3)$。  

由于拉普拉斯变换算子或逆变换算子作用于函数后会得到另一个函数，因此我们可以进一步在某点对该函数进行取值。再次考虑图 7.1 中的函数 $t \mapsto e^{-|t|}$。若要表示该函数的拉普拉斯变换在 $s-1$ 处的取值，使用点符号可写为： “$\mathcal{L}\left\{e^{-|\cdot|}\right\}(s-1)$”； 使用本书的符号约定则可写为：“$\mathcal{L}\left\{e^{-|t|}\right\}(s-1)$”。

## 7.5 拉普拉斯变换与连续时间傅里叶变换的关系

在本章第 7.3 节中，我们介绍了拉普拉斯变换，而在前一章中我们学习了（连续时间，CT）傅里叶变换。事实证明，拉普拉斯变换与（CT）傅里叶变换关系十分密切。回忆 (7.2) 中拉普拉斯变换的定义。现在考虑 (7.2) 的特殊情况，即 $s=j \omega$ 且 $\omega$ 为实数（即 $\operatorname{Re}(s)=0$）。此时，(7.2) 变为：

$$
\begin{aligned}
X(j \omega) & =\left.\left[\int_{-\infty}^{\infty} x(t) e^{-s t} d t\right]\right|_{s=j \omega} \\ 
& =\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t \\ 
& =\mathcal{F} x(\omega)
\end{aligned}
$$

因此，傅里叶变换实际上就是拉普拉斯变换在 $s=j \omega$ 时的取值，前提是该表达式有定义（即积分收敛）。换句话说：

$$
\begin{equation*}
X(j \omega)=\mathcal{F} x(\omega) \tag{7.4}
\end{equation*}
$$

顺便提一句，正是由于这种关系，$x$ 的傅里叶变换有时记作 $X(j \omega)$。在这种记号下，$X$ 实际上对应的是 $x$ 的拉普拉斯变换，而不是傅里叶变换（即 $X(j \omega)$ 表示的是拉普拉斯变换在虚轴上的取值）。

接下来，考虑 (7.2) 中 $s$ 为任意复数的一般情况。将 $s$ 写成直角坐标形式：$s=\sigma+j \omega$，其中 $\sigma$ 与 $\omega$ 为实数。将 $s=\sigma+j \omega$ 代入 (7.2)，得到：

$$
\begin{aligned}
X(\sigma+j \omega) & =\int_{-\infty}^{\infty} x(t) e^{-(\sigma+j \omega) t} d t \\ 
& =\int_{-\infty}^{\infty}\left[x(t) e^{-\sigma t}\right] e^{-j \omega t} d t \\ 
& =\mathcal{F}\left\{e^{-\sigma t} x(t)\right\}(\omega)
\end{aligned}
$$

因此我们得到：

$$
\begin{equation*}
X(\sigma+j \omega)=\mathcal{F}\left\{e^{-\sigma t} x(t)\right\}(\omega) \tag{7.5}
\end{equation*}
$$

由此可见，$x$ 的拉普拉斯变换可以看作 $x'(t)=e^{-\sigma t} x(t)$ 的（CT）傅里叶变换（即 $x$ 乘以一个实指数加权函数后的傅里叶变换）。由于乘上了实指数 $e^{-\sigma t}$，某些函数在傅里叶变换意义下不存在，而其拉普拉斯变换可能存在。

利用上述关系，我们可以推导出 (7.3) 给出的拉普拉斯逆变换公式。设 $X$ 是 $x$ 的拉普拉斯变换，并令 $s=\sigma+j \omega$，其中 $\sigma$ 与 $\omega$ 为实数。由 (7.5) 中傅里叶变换与拉普拉斯变换的关系可得：

$$
X(\sigma+j \omega)=\mathcal{F}\left\{e^{-\sigma t} x(t)\right\}(\omega),
$$

其中 $\sigma$ 的选择保证 $X(s)$ 在 $s=\sigma+j \omega$ 时收敛。对上述等式两边取傅里叶逆变换，得到：

$$
\mathcal{F}^{-1}\{X(\sigma+j \omega)\}(t)=e^{-\sigma t} x(t) .
$$

两边同时乘以 $e^{\sigma t}$，得到：

$$
x(t)=e^{\sigma t} \mathcal{F}^{-1}\{X(\sigma+j \omega)\}(t)
$$

由傅里叶逆变换的定义可知：

$$
\begin{aligned}
x(t) & =e^{\sigma t}\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\sigma+j \omega) e^{j \omega t} d \omega\right] \\ 
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\sigma+j \omega) e^{(\sigma+j \omega) t} d \omega
\end{aligned}
$$

由于 $s=\sigma+j \omega$，可得 $d s=j d \omega$，因此：

$$
\begin{aligned}
x(t) & =\frac{1}{2 \pi} \int_{\sigma-j \infty}^{\sigma+j \infty} X(s) e^{s t}\left(\frac{1}{j}\right) d s \\ 
& =\frac{1}{j 2 \pi} \int_{\sigma-j \infty}^{\sigma+j \infty} X(s) e^{s t} d s
\end{aligned}
$$

由此我们推导出了 (7.3) 中的拉普拉斯逆变换公式。
## 7.6 拉普拉斯变换实例

在本节中，我们将计算几个相对简单函数的拉普拉斯变换。在此过程中，我们将对拉普拉斯变换获得一些重要的认识。

**例 7.3.** 求函数的拉普拉斯变换 $X$

$$
x(t)=e^{-a t} u(t)
$$

其中 $a$ 为实常数。  
**解：** 设 $s=\sigma+j \omega$，其中 $\sigma$ 和 $\omega$ 为实数。根据拉普拉斯变换的定义，有

$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{e^{-a t} u(t)\right\}(s) \\
& =\int_{-\infty}^{\infty} e^{-a t} u(t) e^{-s t} d t \\
& =\int_{0}^{\infty} e^{-(s+a) t} d t \\
& =\left.\left[\left(-\frac{1}{s+a}\right) e^{-(s+a) t}\right]\right|_{0} ^{\infty}
\end{aligned}
$$

此时，我们代入 $s=\sigma+j \omega$，以便更容易判断上述表达式在何时收敛。得到

$$
\begin{aligned}
X(s) & =\left.\left[\left(-\frac{1}{\sigma+a+j \omega}\right) e^{-(\sigma+a+j \omega) t}\right]\right|_{0} ^{\infty} \\
& =\left.\left(\frac{-1}{\sigma+a+j \omega}\right)\left[e^{-(\sigma+a) t} e^{-j \omega t}\right]\right|_{0} ^{\infty} \\
& =\left(\frac{-1}{\sigma+a+j \omega}\right)\left[e^{-(\sigma+a) \infty} e^{-j \omega \infty}-1\right] .
\end{aligned}
$$

由此可见，上述表达式仅在 $\sigma+a>0$ 时收敛（即 $\operatorname{Re}(s)>-a$）。在这种情况下，

$$
\begin{aligned}
X(s) & =\left(\frac{-1}{\sigma+a+j \omega}\right)[0-1] \\
& =\left(\frac{-1}{s+a}\right)(-1) \\
& =\frac{1}{s+a}
\end{aligned}
$$

因此有

$$
e^{-a t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+a} \quad \text { 当 } \operatorname{Re}(s)>-a .
$$

函数 $X$ 的收敛区域如图 7.2(a) 和 (b) 所示，分别对应 $a>0$ 与 $a<0$ 的情况。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-258.jpg?height=566&width=1104&top_left_y=280&top_left_x=461)

图 7.2：收敛区域的情况 (a) $a>0$ 和 (b) $a<0$。

---

**例 7.4.** 求函数的拉普拉斯变换 $X$

$$
x(t)=-e^{-a t} u(-t),
$$

其中 $a$ 为实常数。  
**解：** 设 $s=\sigma+j \omega$，其中 $\sigma$ 和 $\omega$ 为实数。根据拉普拉斯变换的定义，有

$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{-e^{-a t} u(-t)\right\}(s) \\
& =\int_{-\infty}^{\infty}-e^{-a t} u(-t) e^{-s t} d t \\
& =\int_{-\infty}^{0}-e^{-a t} e^{-s t} d t \\
& =\int_{-\infty}^{0}-e^{-(s+a) t} d t \\
& =\left.\left[\left(\frac{1}{s+a}\right) e^{-(s+a) t}\right]\right|_{-\infty} ^{0}
\end{aligned}
$$

为更容易判断收敛性，代入 $s=\sigma+j \omega$。得到

$$
\begin{aligned}
X(s) & =\left.\left[\left(\frac{1}{\sigma+a+j \omega}\right) e^{-(\sigma+a+j \omega) t}\right]\right|_{-\infty} ^{0} \\
& =\left.\left(\frac{1}{\sigma+a+j \omega}\right)\left[e^{-(\sigma+a) t} e^{-j \omega t}\right]\right|_{-\infty} ^{0} \\
& =\left(\frac{1}{\sigma+a+j \omega}\right)\left[1-e^{(\sigma+a) \infty} e^{j \omega \infty}\right]
\end{aligned}
$$

由此可见，上述表达式仅在 $\sigma+a<0$ 时收敛（即 $\operatorname{Re}(s)<-a$）。在这种情况下，

$$
\begin{aligned}
X(s) & =\left(\frac{1}{\sigma+a+j \omega}\right)[1-0] \\
& =\frac{1}{s+a}
\end{aligned}
$$

因此有

$$
-e^{-a t} u(-t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+a} \quad \text { 当 } \operatorname{Re}(s)<-a .
$$

函数 $X$ 的收敛区域如图 7.3(a) 和 (b) 所示，分别对应 $a>0$ 与 $a<0$ 的情况。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-259.jpg?height=563&width=1214&top_left_y=283&top_left_x=507)

图 7.3：收敛区域的情况 (a) $a>0$ 和 (b) $a<0$。

---

在此，我们比较例 7.3 和例 7.4 的结果，并作出一个重要观察。注意到在这两个例子中，得到的 $X$ 的代数表达式是相同的（即 $X(s)=\frac{1}{s+a}$）。唯一的区别在于 $X$ 的收敛区域。在一个例子中，$X(s)$ 在 $\operatorname{Re}(s)>-a$ 时收敛，而在另一个例子中，它在 $\operatorname{Re}(s)<-a$ 时收敛。事实证明，必须同时给出 $X$ 的代数表达式及其收敛区域，才能唯一确定 $x=\mathcal{L}^{-1} X$。

---

**例 7.5（单位阶跃函数的拉普拉斯变换）。** 求函数的拉普拉斯变换 $X$

$$
x(t)=u(t) .
$$

**解：** 设 $s=\sigma+j \omega$，其中 $\sigma$ 和 $\omega$ 为实数。根据拉普拉斯变换的定义，有

$$
\begin{aligned}
X(s) & =\mathcal{L} u(s) \\
& =\int_{-\infty}^{\infty} u(t) e^{-s t} d t \\
& =\int_{0}^{\infty} e^{-s t} d t \\
& =\left.\left[\left(-\frac{1}{s}\right) e^{-s t}\right]\right|_{0} ^{\infty}
\end{aligned}
$$

此时，代入 $s=\sigma+j \omega$，以便更清晰地看出收敛区域。得到

$$
\begin{aligned}
X(s) & =\left.\left[\left(-\frac{1}{\sigma+j \omega}\right) e^{-(\sigma+j \omega) t}\right]\right|_{0} ^{\infty} \\
& =\left.\left[\left(-\frac{1}{\sigma+j \omega}\right) e^{-\sigma t} e^{-j \omega t}\right]\right|_{0} ^{\infty}
\end{aligned}
$$

因此可见，上述表达式仅在 $\sigma>0$ 时收敛（即 $\operatorname{Re}(s)>0$）。在这种情况下，

$$
\begin{aligned}
X(s) & =\left(-\frac{1}{\sigma+j \omega}\right)[0-1] \\
& =\left(-\frac{1}{s}\right)(-1) \\
& =\frac{1}{s}
\end{aligned}
$$

因此有

$$
u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s} \quad \text { 当 } \operatorname{Re}(s)>0 .
$$

---

**例 7.6（δ 函数的拉普拉斯变换）。** 求函数的拉普拉斯变换 $X$

$$
x(t)=A \delta\left(t-t_{0}\right),
$$

其中 $A$ 和 $t_{0}$ 为任意实常数。  
**解：** 根据拉普拉斯变换的定义，有

$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{A \delta\left(t-t_{0}\right)\right\}(s) \\
& =\int_{-\infty}^{\infty} A \delta\left(t-t_{0}\right) e^{-s t} d t \\
& =A \int_{-\infty}^{\infty} \delta\left(t-t_{0}\right) e^{-s t} d t
\end{aligned}
$$

利用 δ 函数的抽样性质，可将其化简为

$$
X(s)=A e^{-s t_{0}}
$$

因此有

$$
A \delta\left(t-t_{0}\right) \stackrel{\mathrm{LT}}{\longleftrightarrow} A e^{-s t_{0}} \quad \text { 对所有 } s \text{ 均成立}.
$$

## 7.7 拉普拉斯变换的收敛域

在详细讨论拉普拉斯变换的收敛域（Region of Convergence, ROC）之前，我们需要先介绍一些关于复平面集合的术语。设 $R$ 为复平面上的一个集合。若集合 $R$ 包含所有满足
$$
\operatorname{Re}(s)<a,
$$
的复数 $s$（其中 $a$ 为实常数），则称 $R$ 为**左半平面（Left-Half Plane, LHP）**。若集合 $R$ 包含所有满足
$$
\operatorname{Re}(s)>a,
$$
的复数 $s$（其中 $a$ 为实常数），则称 $R$ 为**右半平面（Right-Half Plane, RHP）**。图 7.4 给出了 LHP 和 RHP 的示例。

由于 ROC 是一个集合（复平面上的点的集合），因此在处理 ROC 时，我们经常需要使用一些基本的集合运算。对于两个集合 $A$ 和 $B$，其交集记作 $A \cap B$，表示所有既属于 $A$ 又属于 $B$ 的点组成的集合。图 7.5 给出了集合交集的示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-261.jpg?height=1170&width=1233&top_left_y=740&top_left_x=502)  
图 7.4：LHP 与 RHP 的示例。(a) 当 $a<0$ 时的 LHP，(b) 当 $a>0$ 时的 LHP，(c) 当 $a<0$ 时的 RHP，(d) 当 $a>0$ 时的 RHP。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-262.jpg?height=1047&width=1278&top_left_y=823&top_left_x=370)  
图 7.5：集合交集的示例。(a) 集合 $R_{1}$，(b) 集合 $R_{2}$，以及 (c) 它们的交集 $R_{1} \cap R_{2}$。

---

对于集合 $S$ 与一个标量常数 $a$，$S+a$ 定义为
$$
S+a=\{z+a: z \in S\} .
$$
即 $S+a$ 表示将 $a$ 加到集合 $S$ 中每一个元素所形成的集合。例如，若 $R$ 为所有满足
$$
-1<\operatorname{Re}(s)<1,
$$
的复数 $s$ 的集合（如图 7.6(a) 所示），则 $R+1$ 为所有满足
$$
0<\operatorname{Re}(s)<2,
$$
的复数 $s$ 的集合（如图 7.6(b) 所示）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-263.jpg?height=517&width=1438&top_left_y=289&top_left_x=413)  
图 7.6：集合加上一个标量的示例。(a) 集合 $R$。(b) 集合 $R+1$。

---

对于集合 $S$ 与一个标量常数 $a$，$a S$ 定义为
$$
a S=\{a z: z \in S\} .
$$
即 $a S$ 表示将集合 $S$ 中每一个元素都乘以 $a$ 所形成的集合。例如，若 $R$ 为所有满足
$$
-1<\operatorname{Re}(s)<2,
$$
的复数 $s$ 的集合（如图 7.7(a) 所示），则 $2 R$ 为所有满足
$$
-2<\operatorname{Re}(s)<4,
$$
的复数 $s$ 的集合（如图 7.7(b) 所示）；而 $-2 R$ 为所有满足
$$
-4<\operatorname{Re}(s)<2,
$$
的复数 $s$ 的集合（如图 7.7(c) 所示）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-264.jpg?height=1578&width=958&top_left_y=305&top_left_x=572)  
图 7.7：集合乘以标量的示例。(a) 集合 $R$。(b) 集合 $2 R$。(c) 集合 $-2 R$。

---

正如我们先前所见，对于一个函数 $x$，其拉普拉斯变换 $X$ 的完整描述不仅需要给出 $X$ 的代数表达式，还必须给出与 $X$ 相关的收敛域。两个不同的函数可能具有相同的拉普拉斯变换代数式。接下来，我们将考察不同类别函数的拉普拉斯变换在收敛域上的一些约束。
可以证明，拉普拉斯变换的ROC（收敛域）具有以下性质：

1. 拉普拉斯变换 $X$ 的ROC由复平面上与虚轴平行的带状区域组成。也就是说，如果 $s$ 在ROC内，那么 $s+j \omega$ 对所有实数 $\omega$ 也在ROC内。图7.8展示了一些可能作为有效或无效ROC的集合示例。  

理由：函数 $x$ 的拉普拉斯变换 $X$ 实际上是 $x^{\prime}(t)=x(t) e^{-\operatorname{Re}(s) t}$ 的（连续时间）傅里叶变换。因此，当该傅里叶变换收敛时，$X$ 才收敛。由于傅里叶变换的收敛性只依赖于 $\operatorname{Re}(s)$，因此拉普拉斯变换的收敛性也仅依赖于 $\operatorname{Re}(s)$。

2. 如果拉普拉斯变换 $X$ 是有理函数，则ROC不包含任何极点，且ROC由极点所界定，或者向无穷延伸。图7.9展示了一些可能作为有理拉普拉斯变换的有效或无效ROC的集合示例。  

部分理由： 由于 $X$ 是有理函数，它在极点处的值趋于无穷大，因此显然在极点处 $X$ 不收敛。因此，ROC不可能包含极点。

3. 如果函数 $x$ 是有限时长的，并且其拉普拉斯变换 $X$ 在某个 $s$ 值处收敛，则 $X$ 在所有 $s$ 值处都收敛（即ROC是整个复平面）。图7.10展示了当 $x$ 为有限时长时，可能作为有效或无效ROC的集合示例。

4. 如果函数 $x$ 是右边序列，并且直线 $\operatorname{Re}(s)=\sigma_{0}$ 属于其拉普拉斯变换 $X$ 的ROC，则所有满足 $\operatorname{Re}(s)>\sigma_{0}$ 的 $s$ 也必须在ROC内（即ROC包含一个以 $\operatorname{Re}(s)=\sigma_{0}$ 为边界的右半平面）。此外，如果 $x$ 是右边序列但不是左边序列，则 $X$ 的ROC为一个右半平面。图7.11展示了这种情况下可能作为有效或无效ROC的集合示例。

5. 如果函数 $x$ 是左边序列，并且直线 $\operatorname{Re}(s)=\sigma_{0}$ 属于其拉普拉斯变换 $X$ 的ROC，则所有满足 $\operatorname{Re}(s)<\sigma_{0}$ 的 $s$ 也必须在ROC内（即ROC包含一个以 $\operatorname{Re}(s)=\sigma_{0}$ 为边界的左半平面）。此外，如果 $x$ 是左边序列但不是右边序列，则 $X$ 的ROC为一个左半平面。图7.12展示了这种情况下可能作为有效或无效ROC的集合示例。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-264.jpg?height=392&width=1452&top_left_y=1999&top_left_x=264)

图7.8：作为拉普拉斯变换ROC的有效或无效集合示例。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-265.jpg?height=385&width=1446&top_left_y=302&top_left_x=394)

图7.9：作为有理拉普拉斯变换ROC的有效或无效集合示例。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-265.jpg?height=393&width=1455&top_left_y=788&top_left_x=391)

图7.10：作为有限时长函数拉普拉斯变换ROC的有效或无效集合示例。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-266.jpg?height=390&width=1457&top_left_y=297&top_left_x=264)

图7.11：作为右边序列（但非左边序列）函数拉普拉斯变换ROC的有效或无效集合示例。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-266.jpg?height=390&width=1457&top_left_y=829&top_left_x=264)

图7.12：作为左边序列（但非右边序列）函数拉普拉斯变换ROC的有效或无效集合示例。  

6. 如果函数 $x$ 是双边序列，并且直线 $\operatorname{Re}(s)=\sigma_{0}$ 属于其拉普拉斯变换 $X$ 的ROC，则ROC将在复平面上表现为一个包含该直线的带状区域。图7.13展示了这种情况下可能作为有效或无效ROC的集合示例。

7. 如果函数 $x$ 的拉普拉斯变换 $X$ 是有理函数，则：
   (a) 若 $x$ 是右边序列，则 $X$ 的ROC位于 $X$ 的最右极点的右侧（即该极点右侧的右半平面）。  
   (b) 若 $x$ 是左边序列，则 $X$ 的ROC位于 $X$ 的最左极点的左侧（即该极点左侧的左半平面）。  

如果 $X$ 是有理函数，并且 $x$ 为左/右边序列，则可能作为 $X$ 的ROC的有效或无效集合示例见图7.14。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-266.jpg?height=387&width=1455&top_left_y=1977&top_left_x=264)

图7.13：作为双边序列函数拉普拉斯变换ROC的有效或无效集合示例。  

![](https://cdn.mathpix.com/snip/images/tMI4wBqBZa6gXd-_YeGzE7u7E4k-k7zWqKWVLMo_JH0.original.fullsize.png)

图7.14：作为左/右边序列函数有理拉普拉斯变换ROC的有效或无效集合示例。  

表7.1：函数 $x$ 的单边性与 $X=\mathcal{L} x$ 的ROC之间的关系

| $x$ |  | $X$ 的ROC |
| :--- | :--- | :--- |
| 左边序列 | 右边序列 |  |
| 否 | 否 | 带状区域 |
| 否 | 是 | 右半平面 |
| 是 | 否 | 左半平面 |
| 是 | 是 | 整个复平面 |

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-267.jpg?height=365&width=887&top_left_y=1075&top_left_x=672)

图7.15：不构成有效拉普拉斯变换ROC的集合示例。

注意，上述某些性质是冗余的。例如，性质1、2和4可以推出性质7(a)。同样，性质1、2和5可以推出性质7(b)。此外，由于每个函数都可以归类为左边序列但非右边序列、右边序列但非左边序列、双边序列（即非左非右）或有限时长（即既是左边又是右边），因此可以由性质3、4、5和6推断出ROC只能是左半平面、右半平面、（单个）垂直带状区域、整个复平面或空集。特别地，$X$ 的ROC依赖于 $x$ 的左、右单边性，如表7.1所示。因此，ROC必须是连通区域。（若集合 $S$ 满足：对于任意两个元素 $a$ 和 $b$，存在一条从 $a$ 到 $b$ 的路径完全位于 $S$ 内，则称 $S$ 为连通集合。）也就是说，ROC不能由多个不相连的垂直带组成。例如，图7.15所示的集合不能作为有效ROC。

**例7.7** 函数 $x$ 的拉普拉斯变换 $X$ 具有代数表达式：
$$
X(s)=\frac{s+\frac{1}{2}}{\left(s^{2}+2 s+2\right)\left(s^{2}+s-2\right)} .
$$
确定 $X$ 的所有可能ROC，并指出每个ROC对应的函数 $x$ 是左边序列但非右边序列、右边序列但非左边序列、双边序列，还是有限时长。

**解答**：与 $X$ 相关的可能ROC由该函数的极点决定。因此，首先需要求 $X$ 的极点。分解 $X$ 的分母，得到：
$$
X(s)=\frac{s+\frac{1}{2}}{(s+1-j)(s+1+j)(s+2)(s-1)} .
$$

因此，$X$ 的极点为 $-2,-1-j,-1+j$ 和 $1$。由于这些极点只有三个不同的实部（即 $-2,-1$ 和 $1$），所以有四种可能的ROC：
i) $\operatorname{Re}(s)<-2$，  
ii) $-2<\operatorname{Re}(s)<-1$，  
iii) $-1<\operatorname{Re}(s)<1$，  
iv) $\operatorname{Re}(s)>1$。

这些ROC分别绘制在图7.16(a)、(b)、(c) 和 (d) 中。第一个ROC是左半平面，因此对应的 $x$ 必为左边序列但非右边序列。第二个ROC是垂直带状区域，因此对应的 $x$ 必为双边序列。第三个ROC同样是垂直带状区域，因此对应的 $x$ 必为双边序列。第四个ROC是右半平面，因此对应的 $x$ 必为右边序列但非左边序列。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-268.jpg?height=1071&width=1376&top_left_y=283&top_left_x=316)

图7.16：例子的ROC。(a) 第一个，(b) 第二个，(c) 第三个，(d) 第四个可能的ROC。

## 7.8 拉普拉斯变换的性质

拉普拉斯变换具有许多重要性质。在以下各节中，我们将介绍其中的一些性质。为了便于读者理解，这些性质在后续各节中也总结在表7.2（第275页）。另外，为方便起见，表7.3（第276页）列出了一些拉普拉斯变换对。在下文中，我们有时会引用表中的变换对。

### 7.8.1 线性性

可以说，拉普拉斯变换最重要的性质是线性性，具体如下所述。

**定理7.1（线性性）** 如果 $x_{1}(t) \stackrel{L T}{\longleftrightarrow} X_{1}(s)$，ROC 为 $R_{1}$，且 $x_{2}(t) \stackrel{L T}{\longleftrightarrow} X_{2}(s)$，ROC 为 $R_{2}$，则
$$
a_{1} x_{1}(t)+a_{2} x_{2}(t) \stackrel{L T}{\longleftrightarrow} a_{1} X_{1}(s)+a_{2} X_{2}(s) \quad \text{ROC 为包含 } R_{1} \cap R_{2} \text{ 的区域,}
$$
其中 $a_{1}$ 和 $a_{2}$ 是任意复常数。  

**证明**：设 $y(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，并记 $Y$ 为 $y$ 的拉普拉斯变换。根据拉普拉斯变换的定义并进行简单代数运算，可得：
$$
\begin{aligned}
Y(s) & =\int_{-\infty}^{\infty}\left[a_{1} x_{1}(t)+a_{2} x_{2}(t)\right] e^{-s t} d t \\
& =\int_{-\infty}^{\infty} a_{1} x_{1}(t) e^{-s t} d t+\int_{-\infty}^{\infty} a_{2} x_{2}(t) e^{-s t} d t \\
& =a_{1} \int_{-\infty}^{\infty} x_{1}(t) e^{-s t} d t+a_{2} \int_{-\infty}^{\infty} x_{2}(t) e^{-s t} d t \\
& =a_{1} X_{1}(s)+a_{2} X_{2}(s)
\end{aligned}
$$
ROC $R$ 可由以下方式推导：如果 $X_{1}$ 和 $X_{2}$ 在某一点 $s=\lambda$ 收敛，则这两个函数的任意线性组合在 $s=\lambda$ 也必收敛。因此，ROC $R$ 必包含 $R_{1} \cap R_{2}$。由此证明了线性性成立。

在上述定理中，注意结果的ROC可能大于 $R_{1} \cap R_{2}$。当 $X_{1}$ 和 $X_{2}$ 为有理函数时，这种情况仅在 $a_{1} X_{1}(s)+a_{2} X_{2}(s)$ 中发生极点-零点抵消时才会出现。

**例7.8（拉普拉斯变换的线性性）** 求函数
$$
x=x_{1}+x_{2}
$$
的拉普拉斯变换 $X$，其中
$$
x_{1}(t)=e^{-t} u(t), \quad x_{2}(t)=e^{-t} u(t)-e^{-2 t} u(t)
$$

**解答**：利用表7.3中的拉普拉斯变换对，有
$$
\begin{aligned}
X_{1}(s) & =\mathcal{L}\left\{e^{-t} u(t)\right\}(s) = \frac{1}{s+1}, \quad \operatorname{Re}(s)>-1, \\
X_{2}(s) & =\mathcal{L}\left\{e^{-t} u(t)-e^{-2 t} u(t)\right\}(s) \\
& = \mathcal{L}\{e^{-t} u(t)\}(s)-\mathcal{L}\{e^{-2 t} u(t)\}(s) \\
& = \frac{1}{s+1}-\frac{1}{s+2}, \quad \operatorname{Re}(s)>-1 \\
& = \frac{1}{(s+1)(s+2)}, \quad \operatorname{Re}(s)>-1
\end{aligned}
$$

由 $X$ 的定义：
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{x_1+x_2\right\}(s) \\
& =X_1(s)+X_2(s) \\
& =\frac{1}{s+1}+\frac{1}{(s+1)(s+2)} \\
& =\frac{s+2+1}{(s+1)(s+2)} \\
& =\frac{s+3}{(s+1)(s+2)}
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-270.jpg?height=1087&width=1214&top_left_y=283&top_left_x=399)

图7.17：线性性例子的ROC。(a) $X_{1}$ 的ROC，(b) $X_{2}$ 的ROC，(c) $X_{1}$ 与 $X_{2}$ ROC的交集，(d) $X$ 的ROC。

现在，我们必须确定 $X$ 的收敛域（ROC）。我们知道，$X$ 的 ROC 必须包含 $X_{1}$ 和 $X_{2}$ 收敛域的交集。因此，ROC 必须包含 $\operatorname{Re}(s)>-1$。此外，由于 $X$ 在 $s=-1$ 处有极点，其 ROC 不可能大于这个交集。因此，$X$ 的收敛域为 $\operatorname{Re}(s)>-1$。各个收敛域如图 7.17 所示。综上所述，我们得到

$$
X(s)=\frac{s+3}{(s+1)(s+2)}, \quad \operatorname{Re}(s)>-1
$$

**例7.9（拉普拉斯变换的线性性与极点-零点抵消）** 求函数
$$
x=x_{1}-x_{2}
$$
的拉普拉斯变换 $X$，其中 $x_{1}$ 和 $x_{2}$ 定义同例7.8。

**解答**：由前例可知
$$
X_1(s)=\frac{1}{s+1} \quad  \operatorname{Re}(s)>-1
$$
$$
X_2(s)=\frac{1}{(s+1)(s+2)} \quad  \operatorname{Re}(s)>-1
$$

由 $X$ 的定义：
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{x_1-x_2\right\}(s) \\
& =X_1(s)-X_2(s) \\
& =\frac{1}{s+1}-\frac{1}{(s+1)(s+2)} \\
& =\frac{s+2-1}{(s+1)(s+2)} \\
& =\frac{s+1}{(s+1)(s+2)} \\
& =\frac{1}{s+2}
\end{aligned}
$$

现在，我们必须确定 $X$ 的收敛域（ROC）。我们知道，$X$ 的 ROC 至少必须包含 $X_{1}$ 和 $X_{2}$ 收敛域的交集。因此，ROC 必须包含 $\operatorname{Re}(s)>-1$。由于 $X$ 是有理函数，我们还知道 ROC 必须由极点界定或延伸至无穷大。$X$ 只有一个极点，该极点位于 $s=-2$，因此 ROC 必须包括 $-2<\operatorname{Re}(s)<-1$。因此，$X$ 的收敛域为 $\operatorname{Re}(s)>-2$。实际上，$s=-1$ 处的极点已被同一点的零点抵消。因此，$X$ 的 ROC 大于 $X_{1}$ 和 $X_{2}$ 收敛域的交集。各个收敛域如图 7.18 所示。综上所述，我们得到

综上：
$$
X(s)=\frac{1}{s+2}, \quad \operatorname{Re}(s)>-2
$$

### 7.8.2 时域平移

接下来介绍拉普拉斯变换的另一个性质：**时域平移**，如下所示。

**定理7.2（时域平移）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$，ROC 为 $R$，则
$$
x\left(t-t_{0}\right) \stackrel{L T}{\longleftrightarrow} e^{-s t_{0}} X(s) \quad \text{ROC 仍为 } R,
$$
其中 $t_{0}$ 为任意实常数。

**证明**：设 $y(t)=x(t-t_{0})$，并记 $Y$ 为 $y$ 的拉普拉斯变换。由拉普拉斯变换定义：
$$
Y(s)=\int_{-\infty}^{\infty} x\left(t-t_{0}\right) e^{-s t} d t
$$

现在进行变量替换：令 $\tau=t-t_{0}$，则 $t=\tau+t_{0}$，$d\tau=dt$。代入得：
$$
\begin{aligned}
Y(s) & =\int_{-\infty}^{\infty} x(\tau) e^{-s(\tau+t_{0})} d\tau \\
& = e^{-s t_{0}} \int_{-\infty}^{\infty} x(\tau) e^{-s \tau} d\tau \\
& = e^{-s t_{0}} X(s)
\end{aligned}
$$

由于 $Y$ 与 $X$ 仅相差有限常数因子 $e^{-s t_{0}}$，因此 ROC 相同。由此证明了时域平移性质成立。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-272.jpg?height=1087&width=1209&top_left_y=783&top_left_x=402)

图7.18：线性性例子的ROC。(a) $X_{1}$ 的ROC，(b) $X_{2}$ 的ROC，(c) $X_{1}$ 与 $X_{2}$ ROC的交集，(d) $X$ 的ROC。

**例7.10（时域平移性质）** 求
$$
x(t)=u(t-1)
$$
的拉普拉斯变换 $X$。

**解答**：由表7.3知
$$
u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s}, \quad \operatorname{Re}(s)>0
$$

利用时域平移性质：
$$
x(t)=u(t-1) \quad \longleftrightarrow \quad X(s)=e^{-s} \cdot \frac{1}{s}, \quad \operatorname{Re}(s)>0
$$

因此：
$$
X(s)=\frac{e^{-s}}{s}, \quad \operatorname{Re}(s)>0
$$

### 7.8.3 拉普拉斯域平移

接下来介绍拉普拉斯变换的另一个性质：**拉普拉斯域平移**，如下所示。

**定理7.3（拉普拉斯域平移）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$，ROC 为 $R$，则
$$
e^{s_{0} t} x(t) \stackrel{L T}{\longleftrightarrow} X\left(s-s_{0}\right), \quad \text{ROC 为 } R+\operatorname{Re}(s_{0}),
$$
其中 $s_{0}$ 为任意复常数。ROC示意见图7.19。

**证明**：设 $y(t)=e^{s_{0} t} x(t)$，并记 $Y$ 为 $y$ 的拉普拉斯变换。根据拉普拉斯变换定义并进行代数运算：
$$
\begin{aligned}
Y(s) & =\int_{-\infty}^{\infty} e^{s_{0} t} x(t) e^{-s t} dt \\
& = \int_{-\infty}^{\infty} x(t) e^{-(s-s_{0}) t} dt \\
& = X(s-s_{0})
\end{aligned}
$$

由于 $Y(s+s_{0})=X(s)$，$Y$ 在 $\lambda+s_{0}$ 收敛当且仅当 $X$ 在 $\lambda$ 收敛。拉普拉斯变换的收敛性仅依赖于 $s$ 的实部，因此 $Y$ 在 $\lambda+\operatorname{Re}(s_{0})$ 收敛当且仅当 $X$ 在 $\lambda$ 收敛。因此，$Y$ 的ROC就是 $X$ 的ROC 向右平移 $\operatorname{Re}(s_{0})$。由此证明了拉普拉斯域平移性质。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-274.jpg?height=581&width=1395&top_left_y=270&top_left_x=302)

图7.19：拉普拉斯域平移的收敛域。(a) 平移前，(b) 平移后。

**例7.11（拉普拉斯域平移性质）** 仅利用拉普拉斯变换性质及变换对
$$
e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{2}{1-s^{2}}, \quad -1<\operatorname{Re}(s)<1
$$
求
$$
x(t)=e^{5 t} e^{-|t|}
$$
的拉普拉斯变换 $X$。

**解答**：已知
$$
e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{2}{1-s^{2}}, \quad -1<\operatorname{Re}(s)<1
$$

利用拉普拉斯域平移性质：
$$
x(t)=e^{5 t} e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s)=\frac{2}{1-(s-5)^{2}}, \quad -1+5<\operatorname{Re}(s)<1+5
$$

因此：
$$
X(s)=\frac{2}{1-(s-5)^{2}}, \quad 4<\operatorname{Re}(s)<6
$$

将 $X$ 写成因式分解形式：
$$
X(s)=\frac{2}{1-(s-5)^{2}}=\frac{2}{1-(s^2-10s+25)}=\frac{2}{-s^2+10s-24}=\frac{-2}{s^2-10s+24}=\frac{-2}{(s-6)(s-4)}
$$

因此：
$$
X(s)=\frac{-2}{(s-4)(s-6)}, \quad 4<\operatorname{Re}(s)<6
$$
### 7.8.4 时域/拉普拉斯域缩放

接下来介绍拉普拉斯变换的另一个性质：**时域/拉普拉斯域缩放**，如下所示。

**定理7.4（时域/拉普拉斯域缩放）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$，ROC 为 $R$，则
$$
x(a t) \stackrel{L T}{\longleftrightarrow} \frac{1}{|a|} X\left(\frac{s}{a}\right), \quad \text{ROC 为 } R_{1}=a R,
$$
其中 $a$ 为非零实常数。

**证明**：设 $y(t)=x(a t)$，并记 $Y$ 为 $y$ 的拉普拉斯变换。由定义：
$$
Y(s)=\int_{-\infty}^{\infty} x(a t) e^{-s t} dt
$$

进行变量替换：令 $\tau = a t$，则 $t = \tau / a$，$d\tau = a \, dt$。代入积分并考虑积分限的变化：
$$
\begin{aligned}
Y(s) & = \begin{cases}\int_{-\infty}^{\infty} x(\tau) e^{-s \tau / a} \frac{1}{a} d\tau & a>0 \\[2mm]
\int_{\infty}^{-\infty} x(\tau) e^{-s \tau / a} \frac{1}{a} d\tau & a<0\end{cases} \\[1mm]
& = \begin{cases} \frac{1}{a} \int_{-\infty}^{\infty} x(\tau) e^{-s \tau / a} d\tau & a>0 \\[1mm]
-\frac{1}{a} \int_{-\infty}^{\infty} x(\tau) e^{-s \tau / a} d\tau & a<0 \end{cases}
\end{aligned}
$$

合并 $a>0$ 和 $a<0$ 两种情况：
$$
\begin{aligned}
Y(s) & = \frac{1}{|a|} \int_{-\infty}^{\infty} x(\tau) e^{-s \tau / a} d\tau \\
& = \frac{1}{|a|} X\left(\frac{s}{a}\right)
\end{aligned}
$$

由于 $|a| Y(a s) = X(s)$，$Y$ 在 $a\lambda$ 收敛当且仅当 $X$ 在 $\lambda$ 收敛。因此 $Y$ 的ROC为 $a R$。由此证明了缩放性质成立。

时域缩放对拉普拉斯变换ROC的影响如图7.20所示。假设函数 $x$ 的拉普拉斯变换ROC如图7.20(a)所示，则函数 $y(t)=x(a t)$ 的拉普拉斯变换ROC在 $a>0$ 情况下如图7.20(b)，在 $a<0$ 情况下如图7.20(c)。

**例7.12（时域缩放性质）** 利用拉普拉斯变换性质及变换对
$$
e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{2}{1-s^{2}}, \quad -1<\operatorname{Re}(s)<1
$$
求
$$
x(t)=e^{-|3 t|}
$$
的拉普拉斯变换 $X$。

**解答**：由已知变换对：
$$
e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{2}{1-s^{2}}, \quad -1<\operatorname{Re}(s)<1
$$

利用时域缩放性质：
$$
x(t)=e^{-|3 t|} \longleftrightarrow X(s)=\frac{1}{|3|} \frac{2}{1-(s/3)^{2}}, \quad 3(-1)<\operatorname{Re}(s)<3(1)
$$

即：
$$
X(s)=\frac{2}{3 \left[1-(s/3)^{2}\right]}, \quad -3<\operatorname{Re}(s)<3
$$

化简：
$$
X(s)=\frac{2}{3 \left(1 - \frac{s^2}{9}\right)} = \frac{2 \cdot 9}{3 (9 - s^2)} = \frac{6}{9 - s^2} = \frac{-6}{(s+3)(s-3)}
$$

因此：
$$
X(s)=\frac{-6}{(s+3)(s-3)}, \quad -3<\operatorname{Re}(s)<3
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-276.jpg?height=1163&width=1520&top_left_y=745&top_left_x=245)

图7.20：时域/拉普拉斯域缩放的收敛域。(a) 缩放前，(b) 缩放后 $a>0$，(c) 缩放后 $a<0$。

### 7.8.5 共轭

接下来介绍拉普拉斯变换的另一个性质：**共轭性质**，如下所示。

**定理7.5（共轭）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$，ROC 为 $R$，则
$$
x^{*}(t) \stackrel{L T}{\longleftrightarrow} X^{*}(s^{*}), \quad \text{ROC 为 } R.
$$

**证明**：设 $y(t) = x^{*}(t)$，记 $Y$ 为 $y$ 的拉普拉斯变换，并令 $s = \sigma + j\omega$，其中 $\sigma$ 和 $\omega$ 为实数。由拉普拉斯变换定义及共轭性质：
$$
\begin{aligned}
Y(s) & = \int_{-\infty}^{\infty} x^{*}(t) e^{-s t} dt \\
& = \left[\left(\int_{-\infty}^{\infty} x^{*}(t) e^{-s t} dt \right)^{*}\right]^{*} \\
& = \left[\int_{-\infty}^{\infty} \left[x^{*}(t)\right]^{*} \left(e^{-s t}\right)^{*} dt\right]^{*} \\
& = \left[\int_{-\infty}^{\infty} x(t) \left(e^{-s t}\right)^{*} dt \right]^{*}
\end{aligned}
$$

注意到 $\left(e^{-s t}\right)^{*} = e^{-s^{*} t}$，于是
$$
\begin{aligned}
Y(s) & = \left[\int_{-\infty}^{\infty} x(t) e^{-s^{*} t} dt \right]^{*} \\
& = X^{*}(s^{*})
\end{aligned}
$$

我们按如下方式确定 $Y$ 的收敛域（ROC）。首先，我们注意到 $X(s)=Y^{*}\left(s^{*}\right)$。由于 $Y^{*}\left(s^{*}\right)=X(s)$，$Y$ 在 $\lambda$ 收敛当且仅当 $X$ 在 $\lambda^{*}$ 收敛。然而，我们知道收敛只取决于 $\lambda$ 的实部。因此，$Y$ 在 $\lambda$ 收敛当且仅当 $X$ 在 $\lambda$ 收敛。由此可得，$Y$ 的 ROC 必须与 $X$ 的 ROC 完全相同。因此，我们证明了共轭性质成立。

**例7.13（共轭性质）** 利用拉普拉斯变换性质及变换对
$$
e^{(-1-j)t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1+j}, \quad \operatorname{Re}(s)>-1
$$
求
$$
x(t) = e^{(-1+j) t} u(t)
$$
的拉普拉斯变换 $X$。

**解答**首先，令 $v(t)=e^{(-1-j) t} u(t)$（即，$v$ 是其拉普拉斯变换在上面拉普拉斯变换对中给出的函数），并令 $V$ 表示 $v$ 的拉普拉斯变换。首先，我们确定 $x$ 与 $v$ 之间的关系。我们有
$$
\begin{aligned}
x(t) & = \left( \left( e^{(-1+j) t} u(t) \right)^{*} \right)^{*} \\
& = \left( \left( e^{(-1+j) t} \right)^{*} u^{*}(t) \right)^{*} \\
& = \left[ e^{(-1-j) t} u(t) \right]^{*} \\
& = v^{*}(t)
\end{aligned}
$$
因此 $x = v^{*}$。接下来求 $x$ 的拉普拉斯变换：
$$
v(t) = e^{(-1-j) t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} V(s) = \frac{1}{s+1+j}, \quad \operatorname{Re}(s)>-1
$$
利用共轭性质：
$$
x(t) = e^{(-1+j) t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s) = \left( \frac{1}{s^{*}+1+j} \right)^{*}, \quad \operatorname{Re}(s)>-1
$$
对 $X$ 的代数表达式进行简化，我们得到
$$
X(s)=\left(\frac{1}{s^{*}+1+j}\right)^{*}=\frac{1^{*}}{\left(s^{*}+1+j\right)^{*}}=\frac{1}{s+1-j}
$$

因此结论为：
$$
X(s) = \frac{1}{s+1-j}, \quad \operatorname{Re}(s)>-1
$$
### 7.8.6 时域卷积

拉普拉斯变换的下一个要介绍的性质是时域卷积性质，如下所示。

**定理 7.6（时域卷积）** 如果 $x_{1}(t) \stackrel{L T}{\longleftrightarrow} X_{1}(s)$ 的收敛域为 $R_1$，且 $x_{2}(t) \stackrel{L T}{\longleftrightarrow} X_{2}(s)$ 的收敛域为 $R_2$，则
$$
x_{1} * x_{2}(t) \stackrel{L T}{\longleftrightarrow} X_{1}(s) X_{2}(s) \quad \text{其收敛域 } R \text{ 包含 } R_1 \cap R_2 \text{。}
$$
**证明** 为证明上述性质，我们按如下步骤进行。设 $y(t)=x_{1} * x_{2}(t)$，并记 $Y$ 为 $y$ 的拉普拉斯变换。根据拉普拉斯变换和卷积的定义，有
$$
\begin{aligned}
Y(s) & =\mathcal{L}\left\{\int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) d \tau\right\}(s) \\
& =\int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) d \tau\right] e^{-s t} d t \\
& =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) e^{-s t} d \tau d t
\end{aligned}
$$
交换积分顺序，得到
$$
\begin{aligned}
Y(s) & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) e^{-s t} d t d \tau \\
& =\int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{2}(t-\tau) e^{-s t} d t\right] x_{1}(\tau) d \tau
\end{aligned}
$$
现在进行变量代换。令 $v=t-\tau$，则 $t=v+\tau$，$dv=dt$。应用变量代换并化简，得到
$$
\begin{aligned}
Y(s) & =\int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{2}(v) e^{-s(v+\tau)} d v\right] x_{1}(\tau) d \tau \\
& =\int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{2}(v) e^{-s v} d v\right] e^{-s \tau} x_{1}(\tau) d \tau \\
& =\left[\int_{-\infty}^{\infty} x_{2}(v) e^{-s v} d v\right]\left[\int_{-\infty}^{\infty} e^{-s \tau} x_{1}(\tau) d \tau\right] \\
& =X_{1}(s) X_{2}(s)
\end{aligned}
$$
现在考虑 $Y$ 的收敛域 $R$。如果 $X_1$ 和 $X_2$ 在某个 $\lambda$ 收敛，则 $Y(s)=X_1(s) X_2(s)$ 也必然在 $\lambda$ 收敛。因此，$R$ 必须包含 $R_1$ 和 $R_2$ 的交集。由此，我们证明了时域卷积性质成立。

在前述定理中，注意 $R$ 可以大于 $R_1 \cap R_2$。当 $X_1$ 和 $X_2$ 是有理函数时，只有在 $X_1(s) X_2(s)$ 的表达式中发生极点-零点抵消时，才可能出现这种情况。

拉普拉斯变换的时域卷积性质具有重要的实际意义。由于拉普拉斯变换可以将卷积有效地转换为乘法，因此可以用拉普拉斯变换来避免直接处理卷积运算。这在处理连续时间（CT）LTI 系统时尤其有用，因为此类系统本质上涉及卷积运算。

例 7.14（时域卷积性质）。求函数
$$
x(t)=x_{1} * x_{2}(t)
$$
的拉普拉斯变换 $X$，其中
$$
x_{1}(t)=\sin (3 t) u(t) \quad \text{和} \quad x_{2}(t)=t u(t)。
$$

解答。从表 7.3 中，我们得到
$$
\begin{gathered}
x_{1}(t)=\sin (3 t) u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X_{1}(s)=\frac{3}{s^{2}+9} \quad \text{当} \operatorname{Re}(s)>0, \\
x_{2}(t)=t u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X_{2}(s)=\frac{1}{s^{2}} \quad \text{当} \operatorname{Re}(s)>0。
\end{gathered}
$$

利用时域卷积性质，我们有
$$
x(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s)=\left(\frac{3}{s^{2}+9}\right)\left(\frac{1}{s^{2}}\right) \quad \text{对于} \{\operatorname{Re}(s)>0\} \cap \{\operatorname{Re}(s)>0\}。
$$

$X$ 的收敛域（ROC）为 $\{\operatorname{Re}(s)>0\} \cap \{\operatorname{Re}(s)>0\}$（而不是其超集），因为不存在极点-零点抵消。简化 $X$ 的表达式，我们得到
$$
X(s)=\frac{3}{s^{2}\left(s^{2}+9\right)} \quad \text{当} \operatorname{Re}(s)>0。
$$

### 7.8.7 时域微分

拉普拉斯变换的下一个要介绍的性质是时域微分性质，如下所示。

**定理 7.7（时域微分）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$ 的收敛域为 $R$，则
$$
\frac{d x(t)}{d t} \stackrel{L T}{\longleftrightarrow} s X(s) \quad \text{其收敛域 } R' \text{ 包含 } R \text{。}
$$
**证明** 为证明上述性质，我们按如下步骤进行。设 $\mathcal{D}$ 表示微分算子，令 $y=\mathcal{D} x$，并记 $Y$ 为 $y$ 的拉普拉斯变换。根据拉普拉斯逆变换的定义，有
$$
x(t)=\frac{1}{2 \pi j} \int_{\sigma-j \infty}^{\sigma+j \infty} X(s) e^{s t} d s
$$
对该方程两边关于 $t$ 求导，得到
$$
y(t)=\frac{1}{2 \pi j} \int_{\sigma-j \infty}^{\sigma+j \infty} s X(s) e^{s t} d s
$$
注意，上式右边正是 $s X(s)$ 的拉普拉斯逆变换，因此可以写为
$$
y(t)=\mathcal{L}^{-1}\{s X(s)\}(t)
$$
对两边取拉普拉斯变换，得到
$$
Y(s)=s X(s)
$$
现在考虑 $Y(s)=s X(s)$ 的收敛域 $R'$。显然，如果 $X$ 在 $\lambda$ 收敛，则 $Y$ 也必须在 $\lambda$ 收敛。由于乘以 $s$ 可能会抵消 $X$ 中的一个极点，因此 $R'$ 可能比 $R$（即 $X$ 的收敛域）更大。因此，$R'$ 至少必须包含 $R$。由此，我们证明了时域微分性质成立。

在前述定理中，注意 $R'$ 可以大于 $R$。当 $X$ 是有理函数时，只有在 $s X(s)$ 的表达式中发生极点-零点抵消时，才可能出现这种情况。

拉普拉斯变换的时域微分性质具有重要的实际意义。由于拉普拉斯变换可以将微分有效地转换为乘法（乘以 $s$），因此可以用拉普拉斯变换来避免直接处理微分运算。这在处理微分方程和积分微分方程时尤其有用。

**例 7.15（时域微分性质）** 求函数
$$
x(t)=\frac{d}{d t} \delta(t)
$$
的拉普拉斯变换 $X$。

**解答** 根据表 7.3，有
$$
\boldsymbol{\delta}(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} 1, \quad \text{对所有 } s \text{成立。}
$$
利用时域微分性质，可得
$$
x(t)=\frac{d}{d t} \delta(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s)=s \cdot 1, \quad \text{对所有 } s \text{成立。}
$$
因此，
$$
X(s)=s, \quad \text{对所有 } s \text{成立。}
$$
### 7.8.8 拉普拉斯域微分

拉普拉斯变换的下一个要介绍的性质是拉普拉斯域微分性质，如下所示。

**定理 7.8（拉普拉斯域微分）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$ 的收敛域为 $R$，则
$$
-t x(t) \stackrel{L T}{\longleftrightarrow} \frac{d}{d s} X(s) \quad \text{其收敛域为 } R。
$$
**证明** 为证明上述性质，我们按如下步骤进行。设 $y(t)=-t x(t)$，并记 $Y$ 为 $y$ 的拉普拉斯变换。根据拉普拉斯变换的定义，有
$$
X(s)=\int_{-\infty}^{\infty} x(t) e^{-s t} d t
$$
对上式两边关于 $s$ 求导，得到
$$
\begin{aligned}
\frac{d}{d s} X(s) & =\int_{-\infty}^{\infty}-t x(t) e^{-s t} d t \\
& =Y(s)
\end{aligned}
$$
由此，我们证明了拉普拉斯域微分性质成立。

**例 7.16（拉普拉斯域微分性质）** 仅利用拉普拉斯变换的性质及变换对
$$
e^{-2 t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2}, \quad \operatorname{Re}(s)>-2
$$
求函数
$$
x(t)=t e^{-2 t} u(t)
$$
的拉普拉斯变换 $X$。

**解答** 已知
$$
e^{-2 t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2}, \quad \operatorname{Re}(s)>-2。
$$
利用拉普拉斯域微分性质和线性性质，可得
$$
x(t)=t e^{-2 t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s)=-\frac{d}{d s}\left(\frac{1}{s+2}\right), \quad \operatorname{Re}(s)>-2。
$$
化简 $X$ 的代数表达式，得到
$$
X(s)=-\frac{d}{d s}\left(\frac{1}{s+2}\right)=-\frac{d}{d s}(s+2)^{-1}=(-1)(-1)(s+2)^{-2}=\frac{1}{(s+2)^{2}}
$$
因此，得到结论
$$
X(s)=\frac{1}{(s+2)^{2}}, \quad \operatorname{Re}(s)>-2。
$$
### 7.8.9 时域积分

拉普拉斯变换的下一个要介绍的性质是时域积分性质，如下所示。

**定理 7.9（时域积分）** 如果 $x(t) \stackrel{L T}{\longleftrightarrow} X(s)$ 的收敛域为 $R$，则
$$
\int_{-\infty}^{t} x(\tau) d \tau \stackrel{L T}{\longleftrightarrow} \frac{1}{s} X(s) \quad \text{其收敛域 } R' \text{ 包含 } R \cap \{\operatorname{Re}(s)>0\}。
$$
**证明** 为证明上述性质，我们按如下步骤进行。设 
$$
y(t)=\int_{-\infty}^{t} x(\tau) d \tau,
$$
并记 $Y$ 和 $U$ 分别为 $y$ 和单位阶跃函数 $u$ 的拉普拉斯变换。首先，我们注意到
$$
y(t)=x * u(t)
$$
对该方程两边取拉普拉斯变换，得到
$$
Y(s)=\mathcal{L}\{x * u\}(s)
$$
根据拉普拉斯变换的时域卷积性质，有
$$
\begin{aligned}
Y(s) & =\mathcal{L} x(s) \mathcal{L} u(s) \\
& =X(s) U(s)
\end{aligned}
$$
根据例 7.5，我们知道 $U(s)=\frac{1}{s}$，其收敛域为 $\operatorname{Re}(s)>0$。因此，
$$
Y(s)=\frac{1}{s} X(s)
$$
现在考虑 $Y$ 的收敛域 $R'$。显然，如果 $X$ 和 $U$ 在 $\lambda$ 收敛，则 $Y$ 也必须在 $\lambda$ 收敛。因此，$R'$ 必须包含 $X$ 和 $U$ 收敛域的交集。由于 $U$ 在 $\operatorname{Re}(s)>0$ 收敛，$R'$ 必须包含 $R \cap \{\operatorname{Re}(s)>0\}$。由此，我们证明了时域积分性质成立。

在前述定理中，注意 $R'$ 可以大于 $R \cap \{\operatorname{Re}(s)>0\}$。当 $X$ 是有理函数时，只有在 $\frac{1}{s} X(s)$ 的表达式中发生极点-零点抵消时，才可能出现这种情况。

拉普拉斯变换的时域积分性质具有重要的实际意义。由于拉普拉斯变换可以将积分有效地转换为除法（除以 $s$），因此可以用拉普拉斯变换来避免直接处理积分运算。这在处理积分方程和积分微分方程时尤其有用。

**例 7.17（时域积分性质）** 求函数
$$
x(t)=\int_{-\infty}^{t} e^{-2 \tau} \sin (\tau) u(\tau) d \tau
$$
的拉普拉斯变换 $X$。

**解答** 根据表 7.3，有
$$
e^{-2 t} \sin (t) u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{(s+2)^{2}+1}, \quad \operatorname{Re}(s)>-2。
$$
利用时域积分性质，可得
$$
x(t)=\int_{-\infty}^{t} e^{-2 \tau} \sin (\tau) u(\tau) d \tau \stackrel{\mathrm{LT}}{\longleftrightarrow} X(s)=\frac{1}{s}\left[\frac{1}{(s+2)^{2}+1}\right], \quad \{\operatorname{Re}(s)>-2\} \cap \{\operatorname{Re}(s)>0\}
$$
由于不存在极点-零点抵消，$X$ 的收敛域为 $\{\operatorname{Re}(s)>-2\} \cap \{\operatorname{Re}(s)>0\}$。化简 $X$ 的代数表达式，得到
$$
X(s)=\frac{1}{s}\left[\frac{1}{(s+2)^{2}+1}\right]=\frac{1}{s}\left(\frac{1}{s^{2}+4 s+4+1}\right)=\frac{1}{s}\left(\frac{1}{s^{2}+4 s+5}\right)
$$
因此，
$$
X(s)=\frac{1}{s\left(s^{2}+4 s+5\right)}, \quad \operatorname{Re}(s)>0
$$
[注：$s^{2}+4 s+5=(s+2-j)(s+2+j)$。]
### 7.8.10 初值定理与终值定理

拉普拉斯变换的下一个要介绍的性质是初值定理与终值定理，如下所示。

**定理 7.10（初值定理）** 设 $x$ 是一个具有拉普拉斯变换 $X$ 的函数。如果 $x$ 是因果的且在原点不存在脉冲或高阶奇异点，则
$$
x\left(0^{+}\right)=\lim _{s \rightarrow \infty} s X(s)
$$
其中 $x\left(0^{+}\right)$ 表示 $x(t)$ 在 $t$ 从正方向趋近零时的极限。

**证明** 为证明上述性质，首先将 $x$ 在 $0^{+}$ 处展开为泰勒级数：
$$
x(t)=\left[x\left(0^{+}\right)+x^{(1)}\left(0^{+}\right) t+\ldots+x^{(n)}\left(0^{+}\right) \frac{t^{n}}{n!}+\ldots\right] u(t)
$$
其中 $x^{(n)}$ 表示 $x$ 的第 $n$ 阶导数。对上述式子取拉普拉斯变换，并利用 $\mathcal{L}\{t^{n} u(t)\}(s)=\frac{n!}{s^{n+1}}$，得到
$$
X(s)=x\left(0^{+}\right) \frac{1}{s}+x^{(1)}\left(0^{+}\right) \frac{1}{s^{2}}+\ldots+x^{(n)}\left(0^{+}\right) \frac{1}{s^{n+1}}+\ldots
$$
两边乘以 $s$，得到
$$
s X(s)=x\left(0^{+}\right)+x^{(1)}\left(0^{+}\right) \frac{1}{s}+\ldots+x^{(n)}\left(0^{+}\right) \frac{1}{s^{n}}+\ldots
$$
取极限 $s \rightarrow \infty$，得到
$$
\lim _{s \rightarrow \infty} s X(s)=x\left(0^{+}\right)
$$
因此，初值定理成立。

**定理 7.11（终值定理）** 设 $x$ 是一个具有拉普拉斯变换 $X$ 的函数。如果 $x$ 是因果的，且 $\lim_{t \to \infty} x(t)$ 存在有限值，则
$$
\lim _{t \rightarrow \infty} x(t)=\lim _{s \rightarrow 0} s X(s)
$$
**证明** 令 $x'$ 表示 $x$ 的导数。单边拉普拉斯变换的微分性质（在第 7.17 节中介绍）指出
$$
s \mathcal{L}_{\mathrm{u}} x(s)-x\left(0^{-}\right)=\mathcal{L}_{\mathrm{u}} x^{\prime}(s)
$$
由于 $x$ 是因果的，上式可改写为
$$
s \mathcal{L} x(s)-x\left(0^{-}\right)=\mathcal{L}_{\mathrm{u}} x^{\prime}(s)
$$
因此，
$$
s X(s)-x\left(0^{-}\right)=\int_{0^{-}}^{\infty} x^{\prime}(t) e^{-s t} d t
$$
对两边取极限 $s \rightarrow 0$，得到
$$
\begin{aligned}
\lim _{s \rightarrow 0}\left[s X(s)-x\left(0^{-}\right)\right] & =\lim _{s \rightarrow 0} \int_{0^{-}}^{\infty} x^{\prime}(t) e^{-s t} d t \\
& =\int_{0^{-}}^{\infty} x^{\prime}(t) d t \\
& =\left.x(t)\right|_{0^{-}} ^{\infty} \\
& =\lim _{t \rightarrow \infty} x(t)-x\left(0^{-}\right)
\end{aligned}
$$
两边加上 $x\left(0^{-}\right)$，得到
$$
\lim _{s \rightarrow 0} s X(s)=\lim _{t \rightarrow \infty} x(t)
$$
**例 7.18（初值与终值定理）** 一个有界的因果函数 $x$ 在无穷远处有有限极限，其拉普拉斯变换为
$$
X(s)=\frac{2 s^{2}+3 s+2}{s^{3}+2 s^{2}+2 s}, \quad \operatorname{Re}(s)>0
$$
求 $x\left(0^{+}\right)$ 和 $\lim_{t \to \infty} x(t)$。

**解答** 由于 $x$ 是因果的且在原点无奇异点，可以应用初值定理：
$$
\begin{aligned}
x\left(0^{+}\right) & =\lim _{s \rightarrow \infty} s X(s) \\
& =\lim _{s \rightarrow \infty} s\left[\frac{2 s^{2}+3 s+2}{s^{3}+2 s^{2}+2 s}\right] \\
& =\lim _{s \rightarrow \infty} \frac{2 s^{2}+3 s+2}{s^{2}+2 s+2} \\
& =2
\end{aligned}
$$
由于 $x$ 有界且因果，并且在无穷远处极限存在，可应用终值定理：
$$
\begin{aligned}
\lim _{t \rightarrow \infty} x(t) & =\lim _{s \rightarrow 0} s X(s) \\
& =\lim _{s \rightarrow 0} s\left(\frac{2 s^{2}+3 s+2}{s^{3}+2 s^{2}+2 s}\right) \\
& =\left.\frac{2 s^{2}+3 s+2}{s^{2}+2 s+2}\right|_{s=0} \\
& =1
\end{aligned}
$$
顺便提一下，$X$ 的拉普拉斯逆变换可得
$$
x(t)=\left[1+e^{-t} \cos t\right] u(t)
$$
如预期，上述计算得到的 $x\left(0^{+}\right)$ 和 $\lim_{t \to \infty} x(t)$ 与该公式一致。

初值定理与终值定理在检验拉普拉斯变换计算错误时非常有用。例如，若我们需要计算函数 $x$ 的拉普拉斯变换 $X$，若计算中出现错误，则使用初值定理和终值定理通过 $X$ 得到的 $x(0)$ 和 $\lim_{t \to \infty} x(t)$ 结果通常会与直接使用 $x$ 得到的结果不一致，从而可以较容易地发现某些类型的错误。

## 7.9 更多拉普拉斯变换示例

在本章前面，我们推导了若干拉普拉斯变换对。其中一些以及其他重要的变换对列在表 7.3 中。利用表 7.2 中列出的各种拉普拉斯变换性质以及表 7.3 中列出的变换对，我们可以更容易地求得更复杂函数的拉普拉斯变换。

表 7.2：（双边）拉普拉斯变换的性质
| 性质 | 时域 | 拉普拉斯域 | ROC |
| :--- | :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(t)+a_{2} x_{2}(t)$ | $a_{1} X_{1}(s)+a_{2} X_{2}(s)$ | 至少 $R_{1} \cap R_{2}$ |
| 时移 | $x\left(t-t_{0}\right)$ | $e^{-s t_{0}} X(s)$ | $R$ |
| 拉普拉斯域移位 | $e^{s_{0} t} x(t)$ | $X\left(s-s_{0}\right)$ | $R+\operatorname{Re}\left(s_{0}\right)$ |
| 时域/拉普拉斯域缩放 | $x(a t)$ | $\frac{1}{\|a\|} X\left(\frac{s}{a}\right)$ | $a R$ |
| 共轭 | $x^{*}(t)$ | $X^{*}\left(s^{*}\right)$ | $R$ |
| 时域卷积 | $x_{1} * x_{2}(t)$ | $X_{1}(s) X_{2}(s)$ | 至少 $R_{1} \cap R_{2}$ |
| 时域微分 | $\frac{d}{d t} x(t)$ | $s X(s)$ | 至少 $R$ |
| 拉普拉斯域微分 | $-t x(t)$ | $\frac{d}{d s} X(s)$ | $R$ |
| 时域积分 | $\int_{-\infty}^{t} x(\tau) d \tau$ | $\frac{1}{s} X(s)$ | 至少 $R \cap\{\operatorname{Re}(s)>0\}$ |

| 性质 |  |
| :--- | :--- |
| 初值定理 | $x\left(0^{+}\right)=\lim _{s \rightarrow \infty} s X(s)$ |
| 末值定理 | $\lim _{t \rightarrow \infty} x(t)=\lim _{s \rightarrow 0} s X(s)$ |  

表 7.3：（双边）拉普拉斯变换的变换对
| 对 | $x(t)$ | $X(s)$ | ROC |
| :--- | :--- | :--- | :--- |
| 1 | $\delta(t)$ | 1 | 所有 $s$ |
| 2 | $u(t)$ | $\frac{1}{s}$ | $\operatorname{Re}(s)>0$ |
| 3 | $-u(-t)$ | $\frac{1}{s}$ | $\operatorname{Re}(s)<0$ |
| 4 | $t^{n} u(t)$ | $\frac{n!}{s^{n+1}}$ | $\operatorname{Re}(s)>0$ |
| 5 | $-t^{n} u(-t)$ | $\frac{n!}{s^{n+1}}$ | $\operatorname{Re}(s)<0$ |
| 6 | $e^{-a t} u(t)$ | $\frac{1}{s+a}$ | $\operatorname{Re}(s)>-a$ |
| 7 | $-e^{-a t} u(-t)$ | $\frac{1}{s+a}$ | $\operatorname{Re}(s)<-a$ |
| 8 | $t^{n} e^{-a t} u(t)$ | $\frac{n!}{(s+a)^{n+1}}$ | $\operatorname{Re}(s)>-a$ |
| 9 | $-t^{n} e^{-a t} u(-t)$ | $\frac{n!}{(s+a)^{n+1}}$ | $\operatorname{Re}(s)<-a$ |
| 10 | $\cos \left(\omega_{0} t\right) u(t)$ | $\frac{s}{s^{2}+\omega_{0}^{2}}$ | $\operatorname{Re}(s)>0$ |
| 11 | $\sin \left(\omega_{0} t\right) u(t)$ | $\frac{\omega_{0}}{s^{2}+\omega_{0}^{2}}$ | $\operatorname{Re}(s)>0$ |
| 12 | $e^{-a t} \cos \left(\omega_{0} t\right) u(t)$ | $\frac{s+a}{(s+a)^{2}+\omega_{0}^{2}}$ | $\operatorname{Re}(s)>-a$ |
| 13 | $e^{-a t} \sin \left(\omega_{0} t\right) u(t)$ | $\frac{\omega_{0}}{(s+a)^{2}+\omega_{0}^{2}}$ | $\operatorname{Re}(s)>-a$ |

例 7.19. 利用拉普拉斯变换的性质和拉普拉斯变换对
$$
e^{-a|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{-2 a}{(s+a)(s-a)} \text {，适用于 } -a<\operatorname{Re}(s)<a
$$
求函数
$$
x(t)=e^{-5|3 t-7|}
$$
的拉普拉斯变换 $X$。

**解**：我们首先将 $x$ 重新表示为以下形式：
$$
\begin{gathered}
v_{1}(t)=e^{-5|t|} \\
v_{2}(t)=v_{1}(t-7), \quad \text {且} \\
x(t)=v_{2}(3 t)
\end{gathered}
$$

以下记 $R_{V_{1}}, R_{V_{2}}$ 和 $R_{X}$ 分别为 $V_{1}, V_{2}$ 和 $X$ 的收敛域（ROC）。对上述三个方程进行拉普拉斯变换，得到：
$$
\begin{gathered}
V_{1}(s)=\frac{-10}{(s+5)(s-5)}, \quad R_{V_{1}}=(-5<\operatorname{Re}(s)<5) \\
V_{2}(s)=e^{-7 s} V_{1}(s), \quad R_{V_{2}}=R_{V_{1}} \\
X(s)=\frac{1}{3} V_{2}(s / 3), \quad \text {且} \quad R_{X}=3 R_{V_{2}}
\end{gathered}
$$

将上述方程合并，得到：
$$
\begin{aligned}
X(s) & =\frac{1}{3} V_{2}(s / 3) \\
& =\frac{1}{3} e^{-7(s / 3)} V_{1}(s / 3) \\
& =\frac{1}{3} e^{-7 s / 3} V_{1}(s / 3) \\
& =\frac{1}{3} e^{-7 s / 3} \frac{-10}{(s / 3+5)(s / 3-5)} \quad \text {且} \\
& R_{X}=3 R_{V_{2}} \\
& =3\{-5<\operatorname{Re}(s)<5\} \\
& =\{-15<\operatorname{Re}(s)<15\}
\end{aligned}
$$

因此，我们得到：
$$
X(s)=\frac{1}{3} e^{-7 s / 3} \frac{-10}{(s / 3+5)(s / 3-5)} \text {，适用于 } -15<\operatorname{Re}(s)<15
$$

例 7.20. 求函数
$$
x(t)=\left[e^{-t}+e^{-2 t}\right] u(t)
$$
的拉普拉斯变换 $X$。

**解**：我们可以计算 $X$ 如下：
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{\left[e^{-t}+e^{-2 t}\right] u(t)\right\}(s) \\
& =\mathcal{L}\left\{e^{-t} u(t)\right\}(s)+\mathcal{L}\left\{e^{-2 t} u(t)\right\}(s) \\
& =\frac{1}{s+1}+\frac{1}{s+2} \quad \text {，适用于 } \operatorname{Re}(s)>-1 \cap \operatorname{Re}(s)>-2 \\
& =\frac{s+2+s+1}{(s+1)(s+2)} \\
& =\frac{2 s+3}{(s+1)(s+2)} \quad \text {，适用于 } \operatorname{Re}(s)>-1
\end{aligned}
$$

因此，我们得到：
$$
X(s)=\frac{2 s+3}{(s+1)(s+2)} \text {，适用于 } \operatorname{Re}(s)>-1
$$
示例 7.21. 求函数
$$
x(t)=\left[e^{-2 t}+e^{-3 t}\right] u(t-1)
$$
的拉普拉斯变换 $X$。

**解**：首先，我们将 $x$ 重写为
$$
x(t)=\left[e^{-2 t}+e^{-3 t}\right] v_{1}(t)
$$
其中
$$
v_{1}(t)=u(t-1)
$$

对上述方程进行拉普拉斯变换，得到：
$$
\begin{aligned}
V_{1}(s) & =\mathcal{L}\{u(t-1)\}(s) \\
& =e^{-s}\left(\frac{1}{s}\right) \quad \text {，适用于 } \operatorname{Re}(s)>0
\end{aligned}
$$
以及
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{\left[e^{-2 t}+e^{-3 t}\right] v_{1}(t)\right\}(s) \\
& =\mathcal{L}\left\{e^{-2 t} v_{1}(t)\right\}(s)+\mathcal{L}\left\{e^{-3 t} v_{1}(t)\right\}(s)
\end{aligned}
$$

接下来，将重点放在简化上述 $X$ 的表达式。设 $R_{V_{1}}$ 为 $V_{1}$ 的 ROC，则有：
$$
\begin{gathered}
\mathcal{L}\left\{e^{-2 t} v_{1}(t)\right\}(s)=V_{1}(s+2) \quad \text {，适用于 } s \in R_{V_{1}}-2 \\
\mathcal{L}\left\{e^{-3 t} v_{1}(t)\right\}(s)=V_{1}(s+3) \quad \text {，适用于 } s \in R_{V_{1}}-3
\end{gathered}
$$

因此：
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{e^{-2 t} v_{1}(t)\right\}(s)+\mathcal{L}\left\{e^{-3 t} v_{1}(t)\right\}(s) \\
& =V_{1}(s+2)+V_{1}(s+3) \quad \text {，适用于 }\left(R_{V_{1}}-2\right) \cap\left(R_{V_{1}}-3\right)
\end{aligned}
$$

将 $V_{1}$ 的表达式代入，得到：
$$
\begin{aligned}
X(s) & =e^{-(s+2)} \frac{1}{s+2}+e^{-(s+3)} \frac{1}{s+3} \\
& \text {，适用于 } \operatorname{Re}(s)>-2
\end{aligned}
$$

因此：
$$
X(s)=e^{-(s+2)} \frac{1}{s+2}+e^{-(s+3)} \frac{1}{s+3} \quad \text {，适用于 } \operatorname{Re}(s)>-2
$$

---

例 7.22. 求函数
$$
x(t)=\delta(t)+u(t)
$$
的拉普拉斯变换 $X$。

**解**：对 $x$ 进行拉普拉斯变换：
$$
\begin{aligned}
X(s) & =\mathcal{L}\{\delta+u\}(s) \\
& =\mathcal{L} \delta(s)+\mathcal{L} u(s)
\end{aligned}
$$

根据表 7.3：
$$
\begin{array}{ll}
\delta(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} 1 & \text {，适用于所有 } s \\
u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s} & \text {，适用于 } \operatorname{Re}(s)>0
\end{array}
$$

代入上述结果，得到：
$$
\begin{aligned}
X(s) & =1+\frac{1}{s} \quad \text {，适用于 } \operatorname{Re}(s)>0 \\
& =\frac{s+1}{s}
\end{aligned}
$$

因此：
$$
X(s)=\frac{s+1}{s} \quad \text {，适用于 } \operatorname{Re}(s)>0
$$

---

例 7.23. 求函数
$$
x(t)=t e^{-3|t|}
$$
的拉普拉斯变换 $X$。

**解**：首先，将 $x$ 重写为：
$$
x(t)=t e^{3 t} u(-t)+t e^{-3 t} u(t)
$$

对 $x$ 进行拉普拉斯变换：
$$
\begin{aligned}
X(s) & =\mathcal{L}\left\{t e^{3 t} u(-t)+t e^{-3 t} u(t)\right\}(s) \\
& =\mathcal{L}\left\{t e^{3 t} u(-t)\right\}(s)+\mathcal{L}\left\{t e^{-3 t} u(t)\right\}(s) \\
& =\frac{-(1!)}{(s-3)^{2}}+\frac{1!}{(s+3)^{2}} \quad \text {，适用于 } \operatorname{Re}(s)>-3 \cap \operatorname{Re}(s)<3 \\
& =\frac{-(s+3)^{2}+(s-3)^{2}}{(s+3)^{2}(s-3)^{2}} \\
& =\frac{-\left(s^{2}+6 s+9\right)+s^{2}-6 s+9}{(s+3)^{2}(s-3)^{2}} \\
& =\frac{-12 s}{(s+3)^{2}(s-3)^{2}}
\end{aligned}
$$

因此：
$$
X(s)=\frac{-12 s}{(s+3)^{2}(s-3)^{2}} \quad \text {，适用于 } -3<\operatorname{Re}(s)<3
$$
例 7.24. 考虑函数
$$
y(t)=e^{-t}[x * x(t)]
$$
设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的拉普拉斯变换。求 $Y$ 关于 $X$ 的表达式。

**解**：首先，将 $y$ 重写为
$$
y(t)=e^{-t} v_{1}(t)
$$
其中
$$
v_{1}(t)=x * x(t)
$$

设 $V_{1}$ 为 $v_{1}$ 的拉普拉斯变换。记 $R_{X}, R_{Y}$ 和 $R_{V}$ 分别为 $X, Y$ 和 $V$ 的收敛域。对上述方程进行拉普拉斯变换，得到：
$$
\begin{aligned}
V_{1}(s) & =\mathcal{L} v_{1}(s) \\
& =\mathcal{L}\{x * x\}(s) \\
& =\mathcal{L} x(s) \mathcal{L} x(s) \\
& =X^{2}(s) \quad \text {，适用于 } s \in R_{X} \\
Y(s) & =\mathcal{L}\left\{e^{-t} v_{1}(t)\right\}(s) \\
& =V_{1}(s+1) \quad \text {，适用于 } s \in R_{V_{1}}-1
\end{aligned}
$$

将 $V_{1}$ 的表达式代入 $Y$，得到：
$$
\begin{aligned}
Y(s) & =V_{1}(s+1) \\
& =X^{2}(s+1) \quad \text {，适用于 } s \in R_{X}-1
\end{aligned}
$$

---

示例 7.25. 利用拉普拉斯变换表和拉普拉斯变换性质，求图 7.21 所示函数 $x$ 的拉普拉斯变换 $X$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-290.jpg?height=215&width=252&top_left_y=291&top_left_x=875)

图 7.21：拉普拉斯变换示例函数。

**第一种解法**（需较多微分运算）：首先用单位阶跃函数表示 $x$：
$$
\begin{aligned}
x(t) & =t[u(t)-u(t-1)] \\
& =t u(t)-t u(t-1)
\end{aligned}
$$
对两边取拉普拉斯变换：
$$
X(s)=\mathcal{L}\{t u(t)\}(s)-\mathcal{L}\{t u(t-1)\}(s)
$$
我们有：
$$
\mathcal{L}\{t u(t)\}(s)=\frac{1}{s^{2}}
$$
以及
$$
\begin{aligned}
\mathcal{L}\{t u(t-1)\}(s) & =-\mathcal{L}\{-t u(t-1)\}(s)=-\frac{d}{d s}\left(\frac{e^{-s}}{s}\right) \\
& =-\left(\frac{d}{d s} e^{-s} s^{-1}\right) \\
& =-\left(-e^{-s} s^{-1}-s^{-2} e^{-s}\right) \\
& =\frac{e^{-s}}{s}+\frac{e^{-s}}{s^{2}}
\end{aligned}
$$
结合上述结果，得到：
$$
\begin{aligned}
X(s) & =\frac{1}{s^{2}}-\left[\frac{e^{-s}}{s}+\frac{e^{-s}}{s^{2}}\right] \\
& =\frac{1}{s^{2}}-\frac{e^{-s}}{s}-\frac{e^{-s}}{s^{2}} \\
& =\frac{1-s e^{-s}-e^{-s}}{s^{2}}
\end{aligned}
$$
由于 $x$ 为有限持续时间函数，$X$ 的 ROC 为整个复平面。

**第二种解法**（避免微分运算，简化计算）：同样用单位阶跃函数表示 $x$：
$$
\begin{aligned}
x(t) & =t[u(t)-u(t-1)] \\
& =t u(t)-t u(t-1)
\end{aligned}
$$
为了简化拉普拉斯变换，重新写作：
$$
\begin{aligned}
x(t) & =t u(t)-t u(t-1)+u(t-1)-u(t-1) \\
& =t u(t)-(t-1) u(t-1)-u(t-1)
\end{aligned}
$$
（此做法是为了计算 $(t-1) u(t-1)$ 的拉普拉斯变换，而非直接计算 $t u(t-1)$。）

取拉普拉斯变换：
$$
X(s)=\mathcal{L}\{t u(t)\}(s)-\mathcal{L}\{(t-1) u(t-1)\}(s)-\mathcal{L}\{u(t-1)\}(s)
$$
我们有：
$$
\begin{aligned}
\mathcal{L}\{t u(t)\}(s) & =\frac{1}{s^{2}}, \\
\mathcal{L}\{(t-1) u(t-1)\}(s) & =e^{-s} \mathcal{L}\{t u(t)\}(s) = \frac{e^{-s}}{s^{2}}, \\
\mathcal{L}\{u(t-1)\}(s) & =e^{-s} \mathcal{L}\{u(t)\}(s) = \frac{e^{-s}}{s}
\end{aligned}
$$
结合结果：
$$
\begin{aligned}
X(s) & =\frac{1}{s^{2}}-\frac{e^{-s}}{s^{2}}-\frac{e^{-s}}{s} \\
& =\frac{1-e^{-s}-s e^{-s}}{s^{2}}
\end{aligned}
$$
由于 $x$ 为有限持续时间函数，$X$ 的 ROC 为整个复平面。

示例 7.26. 求图 7.22 所示函数 $x$ 的拉普拉斯变换 $X$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-291.jpg?height=325&width=345&top_left_y=297&top_left_x=950)

图 7.22：拉普拉斯变换示例函数。

**第一种解法**（需较多微分运算）：首先用单位阶跃函数表示 $x$：
$$
\begin{aligned}
x(t) & =(t+2)[u(t+1)-u(t)]+(-t+2)[u(t)-u(t-1)] \\
& =t u(t+1)-t u(t)+2 u(t+1)-2 u(t)-t u(t)+t u(t-1)+2 u(t)-2 u(t-1) \\
& =t u(t+1)+2 u(t+1)-2 t u(t)+t u(t-1)-2 u(t-1)
\end{aligned}
$$

对两边取拉普拉斯变换：
$$
\begin{aligned}
X(s) & =-\mathcal{L}\{-t u(t+1)\}(s)+2 \mathcal{L}\{u(t+1)\}(s)+2 \mathcal{L}\{-t u(t)\}(s)-\mathcal{L}\{-t u(t-1)\}(s)-2 \mathcal{L}\{u(t-1)\}(s) \\
& =-\frac{d}{d s}\left(\frac{e^{s}}{s}\right)+2\left(\frac{e^{s}}{s}\right)+2 \frac{d}{d s}\left(\frac{1}{s}\right)-\frac{d}{d s}\left(\frac{e^{-s}}{s}\right)-2\left(\frac{e^{-s}}{s}\right) \\
& =-\left(\frac{s e^{s}-e^{s}}{s^{2}}\right)+2\left(\frac{e^{s}}{s}\right)+2\left(-\frac{1}{s^{2}}\right)-\left(\frac{s\left(-e^{-s}\right)-e^{-s}}{s^{2}}\right)-2\left(\frac{e^{-s}}{s}\right) \\
& =\frac{-s e^{s}+e^{s}+s e^{-s}+e^{-s}-2+2 s e^{s}-2 e^{-s}}{s^{2}} \\
& =\frac{s e^{s}+e^{s}-2-s e^{-s}+e^{-s}}{s^{2}}
\end{aligned}
$$

由于 $x$ 为（有界且）有限持续时间函数，$X$ 的 ROC 为整个复平面。因此：
$$
X(s)=\frac{s e^{s}+e^{s}-2-s e^{-s}+e^{-s}}{s^{2}} \quad \text {，适用于所有 } s
$$

---

**第二种解法**（避免微分运算，简化计算）：可以重新排列 $x$ 的表达式：
$$
\begin{aligned}
x(t) & =[t u(t+1)+u(t+1)-u(t+1)]+2 u(t+1)-2 t u(t)+[t u(t-1)-u(t-1)+u(t-1)]-2 u(t-1) \\
& =(t+1) u(t+1)+u(t+1)-2 t u(t)+(t-1) u(t-1)-u(t-1)
\end{aligned}
$$

取拉普拉斯变换：
$$
\begin{aligned}
X(s) & =e^{s} \mathcal{L}\{t u(t)\}(s)+\mathcal{L}\{u(t+1)\}(s)-2 \mathcal{L}\{t u(t)\}(s)+e^{-s} \mathcal{L}\{t u(t)\}(s)-\mathcal{L}\{u(t-1)\}(s) \\
& =e^{s} \frac{1}{s^{2}}+e^{s} \frac{1}{s}-2 \frac{1}{s^{2}}+e^{-s} \frac{1}{s^{2}}-e^{-s} \frac{1}{s} \\
& =\frac{e^{s}+s e^{s}-2+e^{-s}-s e^{-s}}{s^{2}}
\end{aligned}
$$

使用此方法，$X$ 的表达式更易于简化。

## 7.10 拉普拉斯逆变换的求解

如前所述，在实际应用中，我们很少直接使用公式 (7.3) 来计算拉普拉斯逆变换。该公式需要进行轮廓积分，而轮廓积分通常并不容易计算。相反，我们采用函数的部分分式展开。通过这种方法，我们得到了一些较简单的函数，通常可以在表格中找到它们的拉普拉斯逆变换（例如表 7.3）。在下面的讨论中，我们假设读者已经熟悉部分分式展开。对于不熟悉部分分式展开的读者，附录 B 提供了相关教程。

**例 7.27** 找到以下函数的拉普拉斯逆变换 $x$：
$$
X(s)=\frac{2}{s^{2}-s-2} \quad \text { 对 } -1<\operatorname{Re}(s)<2
$$

**解** 我们首先将 $X$ 重写为因式分解形式：
$$
X(s)=\frac{2}{(s+1)(s-2)}
$$

接着，我们对 $X$ 进行部分分式展开。我们知道 $X$ 可以展开为：
$$
X(s)=\frac{A_{1}}{s+1}+\frac{A_{2}}{s-2} .
$$

计算展开式的系数，得到：
$$
\begin{aligned}
& A_{1}=\left.(s+1) X(s)\right|_{s=-1}=\left.\frac{2}{s-2}\right|_{s=-1}=-\frac{2}{3} \quad \text { 和 } \\
& A_{2}=\left.(s-2) X(s)\right|_{s=2}=\left.\frac{2}{s+1}\right|_{s=2}=\frac{2}{3}
\end{aligned}
$$

因此，$X$ 的展开式为：
$$
X(s)=\frac{2}{3}\left(\frac{1}{s-2}\right)-\frac{2}{3}\left(\frac{1}{s+1}\right) .
$$

对该等式两边取拉普拉斯逆变换，我们得到：
$$
\begin{equation*}
x(t)=\frac{2}{3} \mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\}(t)-\frac{2}{3} \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}(t) \tag{7.6}
\end{equation*}
$$

此时，需要注意每个拉普拉斯变换都有一个对应的 ROC（收敛域），它是拉普拉斯变换的一个重要组成部分。因此，在计算函数的拉普拉斯逆变换时，必须使用该函数的正确 ROC。为了计算 (7.6) 中出现的两个逆变换，我们必须为两个表达式 $\frac{1}{s-2}$ 和 $\frac{1}{s+1}$ 分别指定 ROC。在这里需要小心，因为每个表达式可能有多个 ROC，而只有一个是正确的。每个表达式的可能 ROC 如图 7.23 所示。在每个表达式的情况下，正确的 ROC 是包含 $X$ 的 ROC 的那个（即 $-1<\operatorname{Re}(s)<2$）。利用表 7.3，我们有：
$$
\begin{aligned}
-e^{2 t} u(-t) & \stackrel{\llcorner\mathrm{T}}{\longleftrightarrow} \frac{1}{s-2} \quad \text { 对 } \operatorname{Re}(s)<2 \quad \text { 和 } \\
e^{-t} u(t) & \stackrel{\llcorner\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1} \quad \text { 对 } \operatorname{Re}(s)>-1 .
\end{aligned}
$$

将这些结果代入 (7.6)，得到：
$$
\begin{aligned}
x(t) & =\frac{2}{3}\left[-e^{2 t} u(-t)\right]-\frac{2}{3}\left[e^{-t} u(t)\right] \\
& =-\frac{2}{3} e^{2 t} u(-t)-\frac{2}{3} e^{-t} u(t)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-293.jpg?height=461&width=1492&top_left_y=291&top_left_x=370)

**图 7.23**：有理表达式的极点及可能的 ROC：（a）$\frac{1}{s-2}$；（b）$\frac{1}{s+1}$。

**例 7.28（具有重极点的有理函数）** 找到以下函数的拉普拉斯逆变换 $x$：
$$
X(s)=\frac{2 s+1}{(s+1)^{2}(s+2)} \quad \text { 对 } \operatorname{Re}(s)>-1
$$

**解** 首先，我们对 $X$ 进行部分分式展开。我们知道 $X$ 可以展开为：
$$
X(s)=\frac{A_{1,1}}{s+1}+\frac{A_{1,2}}{(s+1)^{2}}+\frac{A_{2,1}}{s+2} .
$$

计算展开式的系数，得到：
$$
\begin{aligned}
A_{1,1} & =\left.\frac{1}{(2-1)!}\left[\left(\frac{d}{d s}\right)^{2-1}\left[(s+1)^{2} X(s)\right]\right]\right|_{s=-1}=\left.\frac{1}{1!}\left[\frac{d}{d s}\left[(s+1)^{2} X(s)\right]\right]\right|_{s=-1}=\left.\left[\frac{d}{d s}\left(\frac{2 s+1}{s+2}\right)\right]\right|_{s=-1} \\
& =\left.\left[\frac{(s+2)(2)-(2 s+1)(1)}{(s+2)^{2}}\right]\right|_{s=-1}=\left.\left[\frac{2 s+4-2 s-1}{(s+2)^{2}}\right]\right|_{s=-1}=\left.\left[\frac{3}{(s+2)^{2}}\right]\right|_{s=-1}=3 \\
A_{1,2} & =\left.\frac{1}{(2-2)!}\left[\left(\frac{d}{d s}\right)^{2-2}\left[(s+1)^{2} X(s)\right]\right]\right|_{s=-1}=\left.\frac{1}{0!}\left[(s+1)^{2} X(s)\right]\right|_{s=-1}=\left.\frac{2 s+1}{s+2}\right|_{s=-1}=\frac{-1}{1}=-1, \quad \text { 和 } \\
A_{2,1} & =\left.(s+2) X(s)\right|_{s=-2}=\left.\frac{2 s+1}{(s+1)^{2}}\right|_{s=-2}=\frac{-3}{1}=-3
\end{aligned}
$$

因此，$X$ 的展开式为：
$$
X(s)=\frac{3}{s+1}-\frac{1}{(s+1)^{2}}-\frac{3}{s+2} .
$$

对该等式两边取拉普拉斯逆变换，得到：
$$
\begin{equation*}
x(t)=3 \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}(t)-\mathcal{L}^{-1}\left\{\frac{1}{(s+1)^{2}}\right\}(t)-3 \mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}(t) . \tag{7.7}
\end{equation*}
$$

此时，需要注意每个拉普拉斯变换都有一个对应的 ROC（收敛域），它是拉普拉斯变换的重要组成部分。因此，在计算函数的拉普拉斯逆变换时，必须使用该函数的正确 ROC。为了计算 (7.7) 中出现的三个逆变换，我们必须为三个表达式 $\frac{1}{s+1}, \frac{1}{(s+1)^{2}}$ 和 $\frac{1}{s+2}$ 分别指定 ROC。在这里需要小心，因为每个表达式可能有多个 ROC，而只有一个是正确的。每个表达式的可能 ROC 如图 7.24 所示。在每个表达式的情况下，正确的 ROC 是包含 $X$ 的 ROC 的那个（即 $\operatorname{Re}(s)>-1$）。根据表 7.3，我们有：
$$
\begin{aligned}
e^{-t} u(t) & \longleftrightarrow \frac{\mathrm{LT}}{s+1} \quad \text { 对 } \operatorname{Re}(s)>-1, \\
t e^{-t} u(t) & \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{(s+1)^{2}} \quad \text { 对 } \operatorname{Re}(s)>-1, \quad \text { 和 } \\
e^{-2 t} u(t) & \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2} \quad \text { 对 } \operatorname{Re}(s)>-2 .
\end{aligned}
$$

将这些结果代入 (7.7)，得到：
$$
\begin{aligned}
x(t) & =3 e^{-t} u(t)-t e^{-t} u(t)-3 e^{-2 t} u(t) \\
& =\left(3 e^{-t}-t e^{-t}-3 e^{-2 t}\right) u(t)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-294.jpg?height=461&width=1493&top_left_y=291&top_left_x=245)
**图 7.24**：有理表达式的极点及可能的 ROC：（a）$\frac{1}{s+1}$ 和 $\frac{1}{(s+1)^{2}}$；（b）$\frac{1}{s+2}$。

**例 7.29（非严格有理函数的拉普拉斯逆变换）** 找到以下函数的拉普拉斯逆变换 $x$：
$$
X(s)=\frac{2 s^{2}+4 s+5}{(s+1)(s+2)} \quad \text { 对 } \operatorname{Re}(s)>-1
$$

**解** 首先注意，尽管 $X$ 是有理函数，但它不是严格有理函数。因此，需要通过多项式长除法将 $X$ 表示为多项式与严格有理函数之和。通过长除法，我们得到：

![](https://cdn.mathpix.com/snip/images/goLJJFp6uVs8wpaPOHEpI7Pm6MGoEXWeBGTJYd88t9c.original.fullsize.png)

换句话说，有：
$$
X(s)=2+\frac{-2 s+1}{s^{2}+3 s+2}
$$

为方便起见，定义：
$$
V(s)=\frac{-2 s+1}{(s+1)(s+2)}
$$
于是：
$$
X(s)=2+V(s)
$$

注意 $V$ 是严格有理函数，因此可以对其进行部分分式展开。该展开形式为：
$$
V(s)=\frac{A_{1}}{s+1}+\frac{A_{2}}{s+2}
$$

计算展开系数，得到：
$$
\begin{aligned}
A_{1} & =\left.(s+1) V(s)\right|_{s=-1} = \left.\frac{-2 s+1}{s+2}\right|_{s=-1} = 3, \\
A_{2} & =\left.(s+2) V(s)\right|_{s=-2} = \left.\frac{-2 s+1}{s+1}\right|_{s=-2} = -5.
\end{aligned}
$$

因此：
$$
\begin{aligned}
X(s) & =2+V(s) \\
& =2+\frac{3}{s+1}-\frac{5}{s+2}
\end{aligned}
$$

取拉普拉斯逆变换，得到：
$$
\begin{aligned}
x(t) & =\mathcal{L}^{-1} X(t) \\
& =2 \mathcal{L}^{-1}\{1\}(t)+3 \mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}(t)-5 \mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}(t)
\end{aligned}
$$

考虑 $X$ 的 ROC，可由表 7.3 得到：
$$
\begin{aligned}
& \delta(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} 1, \\
& e^{-t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1} \quad \text { 对 } \operatorname{Re}(s)>-1, \\
& e^{-2 t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2} \quad \text { 对 } \operatorname{Re}(s)>-2.
\end{aligned}
$$

最终得到：
$$
\begin{aligned}
x(t) & =2 \delta(t)+3 e^{-t} u(t)-5 e^{-2 t} u(t) \\
& =2 \delta(t)+\left(3 e^{-t}-5 e^{-2 t}\right) u(t)
\end{aligned}
$$

**例 7.30** 找到所有可能的拉普拉斯逆变换：
$$
\begin{equation*}
X(s)=\frac{1}{s^{2}+3 s+2} \tag{7.8}
\end{equation*}
$$

**解** 首先将 $X$ 因式分解：
$$
X(s)=\frac{1}{(s+1)(s+2)}
$$

然后进行部分分式展开：
$$
X(s)=\frac{A_{1}}{s+1}+\frac{A_{2}}{s+2}
$$

计算系数：
$$
\begin{gathered}
A_{1}=\left.(s+1) X(s)\right|_{s=-1}=\left.\frac{1}{s+2}\right|_{s=-1}=1, \\
A_{2}=\left.(s+2) X(s)\right|_{s=-2}=\left.\frac{1}{s+1}\right|_{s=-2}=-1
\end{gathered}
$$

因此：
$$
X(s)=\frac{1}{s+1}-\frac{1}{s+2}
$$

取拉普拉斯逆变换：
$$
\begin{equation*}
x(t)=\mathcal{L}^{-1}\left\{\frac{1}{s+1}\right\}(t)-\mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}(t) \tag{7.9}
\end{equation*}
$$

对于该拉普拉斯变换 $X$，存在三种可能的 ROC：
1) $\operatorname{Re}(s)<-2$，  
2) $-2<\operatorname{Re}(s)<-1$，  
3) $\operatorname{Re}(s)>-1$。

因此，根据 ROC 的选择，$X$ 有三种可能的拉普拉斯逆变换。

**情况 1：ROC $\operatorname{Re}(s)<-2$**  
由表 7.3：
$$
\begin{gathered}
-e^{-t} u(-t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1} \quad \text { 对 } \operatorname{Re}(s)<-1, \\
-e^{-2 t} u(-t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2} \quad \text { 对 } \operatorname{Re}(s)<-2
\end{gathered}
$$

代入 (7.9)：
$$
\begin{aligned}
x(t) & =-e^{-t} u(-t)+e^{-2 t} u(-t) \\
& =\left(-e^{-t}+e^{-2 t}\right) u(-t)
\end{aligned}
$$

**情况 2：ROC $-2<\operatorname{Re}(s)<-1$**  
由表 7.3：
$$
\begin{gathered}
-e^{-t} u(-t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1} \quad \text { 对 } \operatorname{Re}(s)<-1, \\
e^{-2 t} u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2} \quad \text { 对 } \operatorname{Re}(s)>-2
\end{gathered}
$$

代入 (7.9)：
$$
x(t)=-e^{-t} u(-t)-e^{-2 t} u(t)
$$

**情况 3：ROC $\operatorname{Re}(s)>-1$**  
由表 7.3：
$$
\begin{aligned}
e^{-t} u(t) & \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+1} \quad \text { 对 } \operatorname{Re}(s)>-1, \\
e^{-2 t} u(t) & \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s+2} \quad \text { 对 } \operatorname{Re}(s)>-2
\end{aligned}
$$

代入 (7.9)：
$$
\begin{aligned}
x(t) & =e^{-t} u(t)-e^{-2 t} u(t) \\
& =\left(e^{-t}-e^{-2 t}\right) u(t)
\end{aligned}
$$
## 7.11 使用拉普拉斯变换表征 LTI 系统

考虑一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统，如图 7.25 所示。该系统由下列方程描述：
$$
y(t)=x * h(t)
$$

设 $X, Y$ 和 $H$ 分别为 $x, y$ 和 $h$ 的拉普拉斯变换。对上述方程两边取拉普拉斯变换，并利用拉普拉斯变换的时域卷积性质，可得：
$$
Y(s)=H(s) X(s)
$$

量 $H$ 称为系统函数或系统传递函数。如果 $H$ 的 ROC 包含虚轴，则 $H(j \omega)$ 即为系统的频率响应。该系统可用拉普拉斯域标注的框图表示，如图 7.26 所示，其中系统由其系统函数 $H$ 标注。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-298.jpg?height=90&width=344&top_left_y=324&top_left_x=405)  
**图 7.25**：输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统的时域视图。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-298.jpg?height=95&width=347&top_left_y=297&top_left_x=1242)  
**图 7.26**：输入拉普拉斯变换 $X$、输出拉普拉斯变换 $Y$、系统函数 $H$ 的 LTI 系统拉普拉斯域视图。
## 7.12 LTI 系统的互连

根据拉普拉斯变换的性质及系统函数的定义，我们可以推导出一些关于系统函数以及串联和并联互连系统的等效关系。

假设有两个 LTI 系统 $\mathscr{H}_{1}$ 和 $\mathscr{H}_{2}$，其系统函数分别为 $H_{1}$ 和 $H_{2}$，它们按串联方式连接，如图 7.27(a) 左侧所示。设 $h_{1}$ 和 $h_{2}$ 分别为 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的冲激响应。整个系统的冲激响应 $h$ 为：
$$
h(t)=h_{1} * h_{2}(t) .
$$

对该等式两边取拉普拉斯变换，得到：
$$
\begin{aligned}
H(s) & =\mathcal{L}\left\{h_{1} * h_{2}\right\}(s) \\
& =\mathcal{L} h_{1}(s) \mathcal{L} h_{2}(s) \\
& =H_{1}(s) H_{2}(s)
\end{aligned}
$$

因此，我们得到图 7.27(a) 所示的等效关系。由于乘法可交换，还可以得到图 7.27(b) 所示的等效关系。

假设有两个 LTI 系统 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$，其系统函数分别为 $H_{1}$ 和 $H_{2}$，它们按并联方式连接，如图 7.28 左侧所示。设 $h_{1}$ 和 $h_{2}$ 分别为 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的冲激响应。整个系统的冲激响应 $h$ 为：
$$
h(t)=h_{1}(t)+h_{2}(t) .
$$

对该等式两边取拉普拉斯变换，得到：
$$
\begin{aligned}
H(s) & =\mathcal{L}\left\{h_{1}+h_{2}\right\}(s) \\
& =\mathcal{L} h_{1}(s)+\mathcal{L} h_{2}(s) \\
& =H_{1}(s)+H_{2}(s)
\end{aligned}
$$

因此，我们得到图 7.28 所示的等效关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-298.jpg?height=382&width=1322&top_left_y=578&top_left_x=332)  
**图 7.27**：系统函数与 LTI 系统串联互连的等效关系。（a）第一等效关系；（b）第二等效关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-299.jpg?height=236&width=1081&top_left_y=297&top_left_x=578)  
**图 7.28**：系统函数与 LTI 系统并联互连的等效关系。

## 7.13 系统函数与系统性质

系统的许多性质可以通过其系统函数的特征直接确定，以下各节将对此进行详细说明。

### 7.13.1 因果性

根据定理 4.8，我们知道，如果一个 LTI 系统的冲激响应是因果的，则该系统是因果的。因果函数本质上是右侧函数。因此，根据第 7.7 节中讨论的拉普拉斯变换 ROC 的性质，我们有如下定理。

**定理 7.12** 因果 LTI 系统的系统函数所对应的 ROC 为右半平面或整个复平面。

**证明** 设 $h$ 和 $H$ 分别为因果 LTI 系统 $\mathcal{H}$ 的冲激响应和系统函数。系统 $\mathcal{H}$ 因果当且仅当 $h$ 因果。因此，$\mathcal{H}$ 因果意味着 $h$ 因果，而根据定义，$h$ 是右侧的。根据 ROC 的性质，$h$ 为右侧函数意味着 $H$ 的 ROC 为右半平面（若 $h$ 不是左侧函数）或整个复平面（若 $h$ 是左侧函数）。因此，$H$ 的 ROC 具有上述形式。

一般来说，上述定理的逆命题不一定成立。也就是说，一个系统函数 $H$ 的 ROC 为右半平面或整个复平面，并不总是意味着该系统是因果的。然而，如果 $H$ 是有理函数，则逆命题成立，如下定理所示。

**定理 7.13** 对于具有有理系统函数 $H$ 的 LTI 系统，系统的因果性当且仅当 $H$ 的 ROC 是最右极点右侧的右半平面，或者如果 $H$ 没有极点，则 ROC 为整个复平面。

**证明** 留作读者练习。

**例 7.31** 对于下列 LTI 系统的系统函数 $H$，判断系统是否因果。  
(a) $H(s)=\frac{1}{s+1} \quad$ 对 $\operatorname{Re}(s)>-1$；  
(b) $H(s)=\frac{1}{s^{2}-1} \quad$ 对 $-1<\operatorname{Re}(s)<1$；  
(c) $H(s)=\frac{e^{s}}{s+1} \quad$ 对 $\operatorname{Re}(s)<-1$；  
(d) $H(s)=\frac{e^{s}}{s+1} \quad$ 对 $\operatorname{Re}(s)>-1$。

**解**  
(a) $H$ 的极点如图 7.29(a) 所示，ROC 用阴影区域表示。系统函数 $H$ 是有理函数，且 ROC 为最右极点右侧的右半平面，因此系统是因果的。  
(b) $H$ 的极点如图 7.29(b) 所示，ROC 用阴影区域表示。系统函数为有理函数，但 ROC 不是右半平面或整个复平面，因此系统不是因果的。  
(c) 系统函数 $H$ 的 ROC 为左半平面，因此 $h$ 为左侧而非右侧函数，系统不是因果的。  
(d) 系统函数 $H$ 的 ROC 为右半平面，但 $H$ 不是有理函数，因此不能仅根据系统函数的 ROC 得出结论。需要从冲激响应 $h$ 得出结论。对 $H$ 取逆拉普拉斯变换，得到：
$$
h(t)=e^{-(t+1)} u(t+1)
$$
因此冲激响应 $h$ 不是因果的，系统也不是因果的。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-300.jpg?height=560&width=1023&top_left_y=286&top_left_x=461)  
**图 7.29**：因果性例子中有理系统函数的极点和 ROC。分别为（a）第一系统函数和（b）第二系统函数的情况。

### 7.13.2 BIBO 稳定性

在本节中，我们讨论系统函数与 BIBO 稳定性之间的关系。第一个重要结果如下定理所示。

**定理 7.14** LTI 系统是 BIBO 稳定的，当且仅当其系统函数 $H$ 的 ROC 包含虚轴（即 $\operatorname{Re}(s)=0$）。

**证明** 我们仅给出部分证明，特别是说明 ROC 包含虚轴是 BIBO 稳定的必要条件。设 $h$ 为 $H$ 的逆拉普拉斯变换（即系统的冲激响应）。

假设系统是 BIBO 稳定的。根据定理 4.11，我们知道：
$$
\int_{-\infty}^{\infty}|h(t)| d t<\infty
$$
（即 $h$ 是绝对可积的）。由 $H$ 的定义（在虚轴上）：
$$
\begin{equation*}
H(j \omega)=\int_{-\infty}^{\infty} h(t) e^{-j \omega t} d t \tag{7.10}
\end{equation*}
$$

回顾函数的可积性，如果函数绝对可积，则其积分收敛。也就是说，对于任意函数 $f$：
$$
\int_{-\infty}^{\infty} f(t) d t \text { 收敛当且仅当 } \int_{-\infty}^{\infty}|f(t)| d t \text { 收敛。 }
$$

由此和式 (7.10)，我们可以推得：
$$
\begin{equation*}
H(j \omega)=\int_{-\infty}^{\infty} h(t) e^{-j \omega t} d t \text { 收敛当 } \int_{-\infty}^{\infty}\left|h(t) e^{-j \omega t}\right| d t \text { 收敛。 } \tag{7.11}
\end{equation*}
$$

然而有：
$$
\int_{-\infty}^{\infty}\left|h(t) e^{-j \omega t}\right| d t=\int_{-\infty}^{\infty}|h(t)|\left|e^{-j \omega t}\right| d t=\int_{-\infty}^{\infty}|h(t)| d t
$$

因此 (7.11) 可改写为：
$$
H(j \omega) \text { 收敛当 } \int_{-\infty}^{\infty}|h(t)| d t \text { 收敛。 }
$$

对于 BIBO 稳定系统，上述条件总是满足（如上所述 $\int_{-\infty}^{\infty}|h(t)| d t$ 收敛）。因此，如果系统是 BIBO 稳定的，$H(j \omega)$ 必须对所有 $\omega$ 收敛（即 $H$ 的 ROC 必须包含虚轴）。由此可知，ROC 包含虚轴是 BIBO 稳定的必要条件。

对于因果系统，可以得出更具体的结果，如下定理所示。

**定理 7.15** 对于具有（严格）有理系统函数 $H$ 的因果 LTI 系统，系统是 BIBO 稳定的，当且仅当 $H$ 的所有极点位于左半平面（即所有极点实部为负）。

**证明** 留作读者练习。

由上述两个定理（即定理 7.14 和 7.15）可见，对于 LTI 系统，BIBO 稳定性的表征在拉普拉斯域（通过系统函数）比时域（通过冲激响应）更简单。因此，LTI 系统的稳定性分析通常使用拉普拉斯变换进行。

**例 7.32** 一个 LTI 系统的系统函数为：
$$
H(s)=\frac{1}{(s+1)(s+2)}
$$
已知系统是 BIBO 稳定，确定 $H$ 的 ROC。

**解** 显然，系统函数 $H$ 是有理函数，极点在 $-1$ 和 $-2$。因此，ROC 只有三种可能：
1) $\operatorname{Re}(s)<-2$，  
2) $-2<\operatorname{Re}(s)<-1$，  
3) $\operatorname{Re}(s)>-1$。

为了系统 BIBO 稳定，$H$ 的 ROC 必须包含整个虚轴。因此，ROC 必须为 $\operatorname{Re}(s)>-1$。该 ROC 如图 7.30 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-302.jpg?height=495&width=577&top_left_y=551&top_left_x=718)

**图 7.30**：例子中系统的 ROC。

**例 7.33** 一个因果 LTI 系统的系统函数为：
$$
H(s)=\frac{1}{(s+2)\left(s^{2}+2 s+2\right)}
$$
判断该系统是否 BIBO 稳定。

**解** 首先，将 $H$ 分解为：
$$
H(s)=\frac{1}{(s+2)(s+1-j)(s+1+j)}
$$
（利用二次公式可验证 $s^{2}+2 s+2=0$ 的根为 $s=-1 \pm j$）。因此，$H$ 的极点在 $-2$, $-1+j$ 和 $-1-j$。极点如图 7.31 所示。由于系统是因果的，且 $H$ 的所有极点位于左半平面，因此系统是 BIBO 稳定的。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-302.jpg?height=496&width=641&top_left_y=1647&top_left_x=686)  
**图 7.31**：系统函数的极点。

**例 7.34** 对于下列每个 LTI 系统的系统函数 $H$，确定对应于 BIBO 稳定系统的 ROC。  
(a) $H(s)=\frac{s(s-1)}{(s+2)(s+1+j)(s+1-j)}$；  
(b) $H(s)=\frac{s}{(s+1)(s-1)(s-1-j)(s-1+j)}$；  
(c) $H(s)=\frac{(s+j)(s-j)}{(s+2-j)(s+2+j)}$；  
(d) $H(s)=\frac{s-1}{s}$。

**解**  
(a) $H$ 的极点在 $-2, -1+j, -1-j$，如图 7.32(a) 所示。$H$ 为有理函数，ROC 必须被极点限制或延伸至无穷。故 ROC 可能为：
1）$\operatorname{Re}(s)<-2$，  
2）$-2<\operatorname{Re}(s)<-1$，  
3）$\operatorname{Re}(s)>-1$。  

由于需要 BIBO 稳定系统，ROC 必须包含整个虚轴，因此 ROC 为 $\operatorname{Re}(s)>-1$，如图 7.32(a) 阴影区域所示。

(b) $H$ 的极点在 $-1,1,1+j,1-j$，如图 7.32(b) 所示。$H$ 为有理函数，ROC 必须被极点限制或延伸至无穷，可能为：
1）$\operatorname{Re}(s)<-1$，  
2）$-1<\operatorname{Re}(s)<1$，  
3）$\operatorname{Re}(s)>1$。  

为了 BIBO 稳定，ROC 必须包含整个虚轴，因此 ROC 为 $-1<\operatorname{Re}(s)<1$，如图 7.32(b) 阴影区域所示。

(c) $H$ 的极点在 $-2+j, -2-j$，如图 7.32(c) 所示。$H$ 为有理函数，ROC 必须被极点限制或延伸至无穷，可能为：
1）$\operatorname{Re}(s)<-2$，  
2）$\operatorname{Re}(s)>-2$。  

为了 BIBO 稳定，ROC 必须包含整个虚轴，因此 ROC 为 $\operatorname{Re}(s)>-2$，如图 7.32(c) 阴影区域所示。

(d) $H$ 的极点在 $0$，如图 7.32(d) 所示。$H$ 为有理函数，无法在极点处收敛，因此 ROC 永远不能包含整个虚轴，因此该系统函数 $H$ 永远不可能对应于 BIBO 稳定系统。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-304.jpg?height=1081&width=1206&top_left_y=786&top_left_x=402)  
**图 7.32**：例子中系统函数 $H$ 的极点与 ROC 分别对应于 (a) 第一部分、(b) 第二部分、(c) 第三部分和 (d) 第四部分。
### 7.13.3 可逆性

在本节中，我们讨论系统函数与可逆性之间的关系。第一个重要结果如下定理所示。

**定理 7.16（LTI 系统的逆）** 设 $\mathcal{H}$ 为一个系统函数为 $H$ 的 LTI 系统。如果 $\mathcal{H}$ 的逆 $\mathcal{H}^{-1}$ 存在，则 $\mathcal{H}^{-1}$ 也是 LTI 系统，并且其系统函数 $H_{\text{inv}}$ 满足：
$$
\begin{equation*}
H(s) H_{\text{inv}}(s)=1 \tag{7.12}
\end{equation*}
$$

**证明** 设 $h$ 为 $H$ 的逆拉普拉斯变换。根据定理 4.9，我们知道，当且仅当存在另一 LTI 系统，其冲激响应为 $h_{\text{inv}}$ 并满足：
$$
h * h_{\mathrm{inv}} = \delta
$$
系统 $\mathcal{H}$ 可逆。设 $H_{\text{inv}}$ 为 $h_{\text{inv}}$ 的拉普拉斯变换。对上述等式两边取拉普拉斯变换，有：
$$
\mathcal{L}\{h * h_{\mathrm{inv}}\} = \mathcal{L} \delta
$$
根据拉普拉斯变换的时域卷积性质以及表 7.3（$\mathcal{L} \delta(s) = 1$），我们得到：
$$
H(s) H_{\text{inv}}(s) = 1
$$

由前述定理，我们得到下列结果。

**定理 7.17（LTI 系统的可逆性）** 一个系统函数为 $H$ 的 LTI 系统 $\mathcal{H}$ 可逆，当且仅当存在函数 $H_{\text{inv}}$ 满足：
$$
H(s) H_{\text{inv}}(s) = 1
$$

**证明** 由定理 7.16 的结果可直接得出，注意 $\mathcal{H}$ 可逆等价于 $\mathcal{H}^{-1}$ 存在。

由上述定理可知，一个系统函数为 $H$ 的 LTI 系统 $\mathscr{H}$ 有逆，当且仅当存在 (7.12) 的解 $H_{\text{inv}}$。如果逆系统存在，其系统函数为：
$$
H_{\text{inv}}(s) = \frac{1}{H(s)}
$$
由于不同系统可能具有相同的系统函数（但 ROC 不同），LTI 系统的逆系统不一定唯一。然而，在实际中，我们通常希望逆系统是稳定和/或因果的。因此，虽然可能存在多个逆系统，但我们通常只关注一个特定的逆系统（受稳定性和/或因果性的附加约束）。

**例 7.35** 考虑系统函数为：
$$
H(s) = \frac{s+1}{s+2} \quad \text{对于 } \operatorname{Re}(s) > -2
$$
确定该系统的所有可能逆系统，并评论每个逆系统的 BIBO 稳定性。

**解** 逆系统的系统函数 $H_{\mathrm{inv}}$ 为：
$$
H_{\mathrm{inv}}(s) = \frac{1}{H(s)} = \frac{s+2}{s+1}
$$
$H_{\text{inv}}$ 有两种可能的 ROC：
1）$\operatorname{Re}(s)<-1$，  
2）$\operatorname{Re}(s)>-1$。

每个 ROC 对应一个不同的逆系统。第一种 ROC 对应的系统不 BIBO 稳定，因为其 ROC 不包含虚轴；第二种 ROC 对应的系统 BIBO 稳定，因为其 ROC 包含虚轴。

## 7.14 LTI 系统与微分方程

许多实际中的 LTI 系统可以用具有常系数的 $N$ 阶线性微分方程描述。对于输入 $x$ 和输出 $y$ 的系统，其特征方程可以写作：
$$
\begin{equation*}
\sum_{k=0}^{N} b_{k}\left(\frac{d}{d t}\right)^{k} y(t) = \sum_{k=0}^{M} a_{k}\left(\frac{d}{d t}\right)^{k} x(t) \tag{7.13}
\end{equation*}
$$
其中 $M \leq N$。设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的拉普拉斯变换，$H$ 为系统函数。对上述方程两边取拉普拉斯变换，得到：
$$
\mathcal{L}\left\{\sum_{k=0}^{N} b_{k}\left(\frac{d}{d t}\right)^{k} y(t)\right\}(s) = \mathcal{L}\left\{\sum_{k=0}^{M} a_{k}\left(\frac{d}{d t}\right)^{k} x(t)\right\}(s)
$$
利用拉普拉斯变换的线性性质，可改写为：
$$
\sum_{k=0}^{N} b_{k} \mathcal{L}\left\{\left(\frac{d}{d t}\right)^{k} y(t)\right\}(s) = \sum_{k=0}^{M} a_{k} \mathcal{L}\left\{\left(\frac{d}{d t}\right)^{k} x(t)\right\}(s)
$$
利用拉普拉斯变换的时域微分性质，得到：
$$
\sum_{k=0}^{N} b_{k} s^{k} Y(s) = \sum_{k=0}^{M} a_{k} s^{k} X(s)
$$
提取 $Y(s)$ 得：
$$
Y(s) \sum_{k=0}^{N} b_{k} s^{k} = X(s) \sum_{k=0}^{M} a_{k} s^{k}
$$
两边同时除以 $X(s) \sum_{k=0}^{N} b_{k} s^{k}$，得到：
$$
\frac{Y(s)}{X(s)} = \frac{\sum_{k=0}^{M} a_{k} s^{k}}{\sum_{k=0}^{N} b_{k} s^{k}}
$$
由于 $H(s) = \frac{Y(s)}{X(s)}$，因此系统函数为：
$$
H(s) = \frac{\sum_{k=0}^{M} a_{k} s^{k}}{\sum_{k=0}^{N} b_{k} s^{k}}
$$
可见，对于此类系统（即由 (7.13) 形式方程描述的系统），系统函数总是有理函数，因此有理函数具有特别的重要性。

**例 7.36（微分方程到系统函数）**  
一个 LTI 系统的输入为 $x$，输出为 $y$，其微分方程为：
$$
y''(t) + \frac{D}{M} y'(t) + \frac{K}{M} y(t) = x(t),
$$
其中 $D, K, M$ 为正实常数，$'$ 表示微分。求该系统的系统函数 $H$。

**解** 对微分方程取拉普拉斯变换，得到：
$$
s^{2} Y(s) + \frac{D}{M} s Y(s) + \frac{K}{M} Y(s) = X(s)
$$
整理并提取 $Y(s)$：
$$
\left(s^{2} + \frac{D}{M} s + \frac{K}{M}\right) Y(s) = X(s)
$$
两边同时除以 $\left(s^{2} + \frac{D}{M} s + \frac{K}{M}\right) X(s)$，得到：
$$
\frac{Y(s)}{X(s)} = \frac{1}{s^{2} + \frac{D}{M} s + \frac{K}{M}}
$$
因此，系统函数为：
$$
H(s) = \frac{1}{s^{2} + \frac{D}{M} s + \frac{K}{M}}
$$

**例 7.37**（从系统函数到微分方程）。一个输入为 $x$、输出为 $y$ 的线性时不变（LTI）系统，其系统函数为

$$
H(s)=\frac{s}{s+R / L}
$$

其中 $L$ 和 $R$ 为正实常数。求描述该系统的微分方程。

**解答**。设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的拉普拉斯变换。首先，有

$$
\begin{aligned}
Y(s) & =H(s) X(s) \\
& =\left(\frac{s}{s+R / L}\right) X(s)
\end{aligned}
$$

将该方程整理，可得

$$
\begin{aligned}
& \left(s+\frac{R}{L}\right) Y(s)=s X(s) \\
\Rightarrow \quad & s Y(s)+\frac{R}{L} Y(s)=s X(s)
\end{aligned}
$$

对该方程两边取拉普拉斯逆变换（利用拉普拉斯变换的线性性和时间微分性质），得到

$$
\begin{aligned}
& \mathcal{L}^{-1}\{s Y(s)\}(t)+\frac{R}{L} \mathcal{L}^{-1} Y(s)=\mathcal{L}^{-1}\{s X(s)\}(t) \\
\Rightarrow \quad & \frac{d}{d t} y(t)+\frac{R}{L} y(t)=\frac{d}{d t} x(t)
\end{aligned}
$$

因此，该系统由以下微分方程描述：

$$
\frac{d}{d t} y(t)+\frac{R}{L} y(t)=\frac{d}{d t} x(t)
$$
## 7.15 电路分析

拉普拉斯变换的一个应用是电路分析。在本节中，我们将讨论这一特定应用。许多电气网络的基本组成部分是电阻器、电感器和电容器。下面，我们将简要介绍每种电路元件。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-308.jpg?height=257&width=1418&top_left_y=289&top_left_x=285)

图 7.33：基本电气元件。（a）电阻器，（b）电感器，（c）电容器。

电阻器是一种阻碍电流流动的电路元件。如图 7.33(a) 所示的电路符号，其遵循以下关系：

$$
v(t)=\operatorname{Ri}(t) \quad\left(\text { 或者等价地, } i(t)=\frac{1}{R} v(t)\right),
$$

其中 $R, v$ 和 $i$ 分别表示电阻器的电阻、两端电压和电流。注意，电阻 $R$ 是非负量（即 $R \geq 0$）。在拉普拉斯域中，上述关系变为

$$
V(s)=R I(s) \quad\left(\text { 或者等价地, } I(s)=\frac{1}{R} V(s)\right),
$$

其中 $V$ 和 $I$ 分别表示 $v$ 和 $i$ 的拉普拉斯变换。

电感器是一种将电流转换为磁场，或将磁场转换为电流的电路元件。如图 7.33(b) 所示的电路符号，其遵循以下关系：

$$
v(t)=L \frac{d}{d t} i(t) \quad\left(\text { 或者等价地, } i(t)=\frac{1}{L} \int_{-\infty}^{t} v(\tau) d \tau\right)
$$

其中 $L, v$ 和 $i$ 分别表示电感器的电感、两端电压和电流。注意，电感 $L$ 是非负量（即 $L \geq 0$）。在拉普拉斯域中，上述关系变为

$$
V(s)=s L I(s) \quad\left(\text { 或者等价地, } I(s)=\frac{1}{s L} V(s)\right)
$$

其中 $V$ 和 $I$ 分别表示 $v$ 和 $i$ 的拉普拉斯变换。

电容器是一种储存电荷的电路元件。如图 7.33(c) 所示的电路符号，其遵循以下关系：

$$
v(t)=\frac{1}{C} \int_{-\infty}^{t} i(\tau) d \tau \quad\left(\text { 或者等价地, } i(t)=C \frac{d}{d t} v(t)\right)
$$

其中 $C, v$ 和 $i$ 分别表示电容器的电容、两端电压和电流。注意，电容 $C$ 是非负量（即 $C \geq 0$）。在拉普拉斯域中，上述关系变为

$$
V(s)=\frac{1}{s C} I(s) \quad(\text { 或者等价地, } I(s)=s C V(s))
$$

其中 $V$ 和 $I$ 分别表示 $v$ 和 $i$ 的拉普拉斯变换。

可以看到，用拉普拉斯域来表达电感器和电容器的方程，比在时域中表达要简单得多。因此，使用拉普拉斯变换可以大大简化含有电感器和电容器的电路分析过程。

示例 7.38（简单 RC 网络）。考虑图 7.34 所示的电阻-电容（RC）网络，其输入为 $v_{1}$，输出为 $v_{2}$。该系统为线性时不变（LTI）系统，可由常系数线性微分方程描述。问题如下：（a）求该系统的系统函数 $H$；（b）判断系统是否 BIBO 稳定；（c）判断该系统最接近哪种理想频率选择滤波器；（d）求系统的阶跃响应。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-309.jpg?height=298&width=485&top_left_y=294&top_left_x=872)

图 7.34：简单 RC 网络。

**解答**。  
(a) 根据基本电路分析，我们有

$$
\begin{gather*}
v_{1}(t)=R i(t)+v_{2}(t) \quad \text { 和 }  \tag{7.14a}\\
i(t)=C \frac{d}{d t} v_{2}(t) \tag{7.14b}
\end{gather*}
$$

对 (7.14) 取拉普拉斯变换，得到

$$
\begin{gather*}
V_{1}(s)=R I(s)+V_{2}(s) \quad \text { 和 }  \tag{7.15a}\\
I(s)=C s V_{2}(s) \tag{7.15b}
\end{gather*}
$$

将 (7.15b) 代入 (7.15a) 并整理，可得

$$
\begin{aligned}
& V_{1}(s)=R\left[C s V_{2}(s)\right]+V_{2}(s) \\
\Rightarrow \quad & V_{1}(s)=R C s V_{2}(s)+V_{2}(s) \\
\Rightarrow \quad & V_{1}(s)=[1+R C s] V_{2}(s) \\
\Rightarrow \quad & \frac{V_{2}(s)}{V_{1}(s)}=\frac{1}{1+R C s} .
\end{aligned}
$$

因此，该系统的系统函数 $H$ 为

$$
\begin{gathered}
H(s)=\frac{1}{1+R C s} \\
=\frac{\frac{1}{R C}}{s+\frac{1}{R C}} \\
=\frac{\frac{1}{R C}}{s-\left(-\frac{1}{R C}\right)}
\end{gathered}
$$

由于该系统可物理实现，因此它必须是因果的。因此，$H$ 的 ROC 必须在右半平面。由此可推得 $H$ 的 ROC 为 $\operatorname{Re}(s)>-\frac{1}{R C}$。所以我们有

$$
H(s)=\frac{1}{1+R C s} \quad \text { 对 } \operatorname{Re}(s)>-\frac{1}{R C}
$$

(b) 由于电阻和电容均为严格正数，$R>0$ 且 $C>0$。因此，$-\frac{1}{R C}<0$。因此，ROC 包含虚轴，系统是 BIBO 稳定的。

(c) 设 $H_{F}$ 为系统的频率响应。由于系统 BIBO 稳定，有 $H_{F}(\omega)=H(j \omega)$。计算 $\left|H_{F}(0)\right|$ 和 $\lim _{|\omega| \rightarrow \infty}\left|H_{F}(\omega)\right|$，得到

$$
\left|H_{F}(0)\right|=\left|\frac{1}{1+R C(0)}\right|=1 \quad \text { 和 } \quad \lim _{|\omega| \rightarrow \infty}\left|H_{F}(\omega)\right|=\lim _{|\omega| \rightarrow \infty}\left|\frac{1}{1+R C j \omega}\right|=0
$$

因此，该系统最接近理想低通滤波器。

(d) 现在计算系统的阶跃响应。已知系统的输入输出行为由下式描述：

$$
\begin{aligned}
V_{2}(s) & =H(s) V_{1}(s) \\
& =\left(\frac{1}{1+R C s}\right) V_{1}(s)
\end{aligned}
$$

为了求阶跃响应，需要考虑单位阶跃函数作为输入，即 $v_{1}=u$，从而 $V_{1}(s)=\frac{1}{s}$。将该 $V_{1}$ 代入上式，得到

$$
\begin{aligned}
V_{2}(s) & =\left(\frac{1}{1+R C s}\right)\left(\frac{1}{s}\right) \\
& =\frac{\frac{1}{R C}}{s\left(s+\frac{1}{R C}\right)}
\end{aligned}
$$

接下来，需要对 $V_{2}$ 进行拉普拉斯逆变换以求 $v_{2}$。为简化计算，我们对 $V_{2}$ 进行部分分式展开。该展开形式为

$$
V_{2}(s)=\frac{A_{1}}{s}+\frac{A_{2}}{s+\frac{1}{R C}}
$$

求解展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.s V_{2}(s)\right|_{s=0} \\
& =1 \quad \text { 和 } \\
A_{2} & =\left.\left(s+\frac{1}{R C}\right) V_{2}(s)\right|_{s=-\frac{1}{R C}} \\
& =\frac{\frac{1}{R C}}{-\frac{1}{R C}} \\
& =-1
\end{aligned}
$$

因此，$V_{2}$ 的部分分式展开为

$$
V_{2}(s)=\frac{1}{s}-\frac{1}{s+\frac{1}{R C}}
$$

对该方程两边取拉普拉斯逆变换，得到

$$
v_{2}(t)=\mathcal{L}^{-1}\left\{\frac{1}{s}\right\}(t)-\mathcal{L}^{-1}\left\{\frac{1}{s+\frac{1}{R C}}\right\}(t)
$$

利用表 7.3 及系统为因果系统（保证必要的 ROC），得到

$$
\begin{aligned}
v_{2}(t) & =u(t)-e^{-t /(R C)} u(t) \\
& =\left(1-e^{-t /(R C)}\right) u(t)
\end{aligned}
$$

## 7.16 稳定性分析

如前所述，由于在拉普拉斯域中比在时域中更容易刻画 LTI 系统的 BIBO 稳定性，因此拉普拉斯域常被用于分析系统稳定性。下面，我们将更详细地讨论拉普拉斯变换在此方面的应用。

示例 7.39. 考虑图 7.35 所示的系统，该系统的输入拉普拉斯变换为 $X$，输出拉普拉斯变换为 $Y$，由两个因果 LTI 系统连接而成，其系统函数分别标记为 $H_{1}$ 和 $H_{2}$。系统函数 $H_{1}$ 和 $H_{2}$ 为
$$
H_{1}(s)=\frac{1}{s^{2}+a s+(a-2)} \quad \text{和} \quad H_{2}(s)=-1
$$
其中 $a$ 为实常数。 (a) 求该（整体）系统的系统函数 $H$（包括 ROC）。 (b) 确定参数 $a$ 的取值范围，使系统 BIBO 稳定。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-311.jpg?height=244&width=536&top_left_y=291&top_left_x=850)
图 7.35：反馈系统。

解答. (a) 根据系统图，我们可以写出
$$
\begin{gathered}
V(s)=X(s)+H_{2}(s) Y(s) \quad \text{和} \\ 
Y(s)=H_{1}(s) V(s)
\end{gathered}
$$
将这两个方程结合并化简，可得
$$
\begin{aligned}
& Y(s)=H_{1}(s)\left[X(s)+H_{2}(s) Y(s)\right] \\
\Rightarrow & Y(s)=H_{1}(s) X(s)+H_{1}(s) H_{2}(s) Y(s) \\
\Rightarrow & Y(s)\left[1-H_{1}(s) H_{2}(s)\right]=H_{1}(s) X(s) \\
\Rightarrow & \frac{Y(s)}{X(s)}=\frac{H_{1}(s)}{1-H_{1}(s) H_{2}(s)}
\end{aligned}
$$
由于 $H(s)=\frac{Y(s)}{X(s)}$，因此
$$
H(s)=\frac{H_{1}(s)}{1-H_{1}(s) H_{2}(s)}
$$
代入已知的 $H_{1}$ 和 $H_{2}$ 表达式，并化简，可得
$$
\begin{aligned}
H(s) & =\frac{\left(\frac{1}{s^{2}+a s+(a-2)}\right)}{1+\left(\frac{1}{s^{2}+a s+(a-2)}\right)} \\
& =\frac{1}{s^{2}+a s+(a-2)+1} \\
& =\frac{1}{s^{2}+a s+(a-1)}
\end{aligned}
$$
(b) 为了评估系统的 BIBO 稳定性，我们需要知道系统函数 $H$ 的极点。使用二次公式分解 $H$ 的分母，解其根 $s$：
$$
\begin{aligned}
s & =\frac{-a \pm \sqrt{a^{2}-4(a-1)}}{2} \\
& =\frac{-a \pm \sqrt{a^{2}-4 a+4}}{2} \\
& =\frac{-a \pm \sqrt{(a-2)^{2}}}{2} \\
& =\frac{-a \pm(a-2)}{2} \\
& =\{-1,1-a\}
\end{aligned}
$$
因此，$s^{2}+a s+(a-1)=(s+1)(s+a-1)$。于是我们得到
$$
H(s)=\frac{1}{(s+1)(s+a-1)}
$$
由于系统是因果的，系统在且仅在所有极点严格位于虚轴左侧时 BIBO 稳定。系统有两个极点，一个在 -1，一个在 $1-a$。因此
$$
1-a<0 \Rightarrow a>1.
$$
因此，系统在且仅在 $a>1$ 时 BIBO 稳定。

示例 7.40. 考虑图 7.36 所示的系统，该系统的输入拉普拉斯变换为 $X$，输出拉普拉斯变换为 $Y$，由两个因果 LTI 系统连接而成，其系统函数分别标记为 $H_{1}$ 和 $H_{2}$。系统函数 $H_{1}$ 和 $H_{2}$ 为
$$
H_{1}(s)=\frac{1}{(s+1)(s+2)} \quad \text{和} \quad H_{2}(s)=a
$$
其中 $a$ 为实常数。 (a) 求该（整体）系统的系统函数 $H$。 (b) 确定参数 $a$ 的取值范围，使系统 BIBO 稳定。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-312.jpg?height=255&width=633&top_left_y=294&top_left_x=675)

图 7.36：反馈系统。

解答. (a) 下文中，令 $V$ 表示方框图中加法器的输出。根据系统图，我们可以写出
$$
\begin{gathered}
V(s)=X(s)-V(s) H_{1}(s) H_{2}(s) \Rightarrow \quad X(s)=\left[1+H_{1}(s) H_{2}(s)\right] V(s) \quad \text{和} \\
Y(s)=V(s) H_{1}(s)
\end{gathered}
$$
将这两个方程结合，可得
$$
H(s)=\frac{Y(s)}{X(s)}=\frac{H_{1}(s) V(s)}{\left[1+H_{1}(s) H_{2}(s)\right] V(s)}=\frac{H_{1}(s)}{1+H_{1}(s) H_{2}(s)}.
$$
代入已知的 $H_{1}$ 和 $H_{2}$ 并化简：
$$
H(s)=\frac{\frac{1}{(s+1)(s+2)}}{1+\left(\frac{1}{(s+1)(s+2)}\right)(a)}=\frac{1}{(s+1)(s+2)+a}=\frac{1}{s^{2}+3 s+a+2}
$$
将 $H$ 写成因式分解形式：
$$
H(s)=\frac{1}{\left(s-p_{1}\right)\left(s-p_{2}\right)},
$$
其中极点 $p_{1}$ 和 $p_{2}$ 待定。利用二次公式：
$$
p_{k}=\frac{-3 \pm \sqrt{3^{2}-4(a+2)}}{2}=-\frac{3}{2} \pm \frac{1}{2} \sqrt{9-4 a-8}=-\frac{3}{2} \pm \frac{1}{2} \sqrt{1-4 a}.
$$
因此，
$$
p_{1}=-\frac{3}{2}-\frac{1}{2} \sqrt{1-4 a} \quad \text{和} \quad p_{2}=-\frac{3}{2}+\frac{1}{2} \sqrt{1-4 a}.
$$
由于系统是因果的，$H$ 的 ROC $R_H$ 位于右侧最右极点的右半平面。即
$$
R_H=\left\{\operatorname{Re}(s)>\max \left\{\operatorname{Re}\left(p_{1}\right), \operatorname{Re}\left(p_{2}\right)\right\}\right\}.
$$
现在计算 $\operatorname{Re}(p_k)$。有两种情况：

1. $1-4 a \leq 0$（即 $\operatorname{Re}(\sqrt{1-4 a})=0$），等价于 $4 a \geq 1 \Rightarrow a \geq \frac{1}{4}$；  
2. $1-4 a>0$（即 $\operatorname{Re}(\sqrt{1-4 a})=\sqrt{1-4 a}$），等价于 $4 a<1 \Rightarrow a<\frac{1}{4}$。

首先考虑 $1-4 a \leq 0$（即 $a \geq \frac{1}{4}$）。此时 $\operatorname{Re}(\sqrt{1-4 a})=0$，所以
$$
\operatorname{Re}\left(p_{1}\right)=\operatorname{Re}\left(p_{2}\right)=-\frac{3}{2}.
$$
再考虑 $1-4 a>0$（即 $a<\frac{1}{4}$）。此时 $\operatorname{Re}(\sqrt{1-4 a})=\sqrt{1-4 a}$，所以
$$
\operatorname{Re}\left(p_{1}\right)=-\frac{3}{2}-\frac{1}{2} \sqrt{1-4 a} \quad \text{和} \quad \operatorname{Re}\left(p_{2}\right)=-\frac{3}{2}+\frac{1}{2} \sqrt{1-4 a}.
$$
显然，$p_2$ 是最右极点。因此最右极点的实部为
$$
\operatorname{Re}\left(p_{2}\right)=-\frac{3}{2}+\frac{1}{2} \sqrt{1-4 a}.
$$
因此，$H$ 的 ROC 为
$$
R_H= \begin{cases}\operatorname{Re}(s)>-\frac{3}{2} & a \geq \frac{1}{4} \\ \operatorname{Re}(s)>-\frac{3}{2}+\frac{1}{2} \sqrt{1-4 a} & a<\frac{1}{4}\end{cases}
$$
(b) 为使系统 BIBO 稳定，$R_H$ 必须包含虚轴。首先考虑 $a \geq \frac{1}{4}$。此时 $R_H$ 包含虚轴，因此系统 BIBO 稳定。再考虑 $a<\frac{1}{4}$。此时，$R_H$ 包含虚轴的条件为
$$
\begin{aligned}
-\frac{3}{2}+\frac{1}{2} \sqrt{1-4 a}<0 \quad \Rightarrow \quad \frac{1}{2} \sqrt{1-4 a}<\frac{3}{2} \quad \Rightarrow \quad \sqrt{1-4 a}<3 \quad \Rightarrow \\
1-4 a<9 \quad \Rightarrow \quad 4 a>-8 \quad \Rightarrow \quad a>-2.
\end{aligned}
$$
综合两种情况，系统 BIBO 稳定的条件为
$$
\begin{gathered}
a \geq \frac{1}{4} \text{ 或 } \left(a<\frac{1}{4} \text{ 且 } a>-2\right) \quad \Rightarrow \\
a \geq \frac{1}{4} \text{ 或 } \left(-2<a<\frac{1}{4}\right) \quad \Rightarrow \\
a>-2.
\end{gathered}
$$
因此，系统在且仅在 $a>-2$ 时 BIBO 稳定。

### 7.16.1 反馈控制系统

在控制系统应用中，我们希望某个物理量（例如位置或力）随时间跟踪一个期望值。控制系统的输入是该被控量的期望值（即参考值），输出是该物理量的实际值。实际值与参考值之间的差异构成误差。控制系统的目标是尽可能将该误差逼近零。当误差为零时，表示实际值等于期望值。例如，在一个简单的加热/制冷恒温器系统中，参考输入是墙面恒温器上的温度设定值，输出是实际室温。在飞行控制系统中，参考输入是飞行员通过飞行控制指定的飞机位置和姿态的期望值，输出是飞机的实际位置和姿态。

一种在控制系统应用中非常常见的配置称为反馈控制系统。反馈控制系统由三个互连的子系统组成：

1. **被控对象（Plant）**，即输出对应于被控量的系统；
2. **传感器（Sensor）**，用于测量被控量的实际值；
3. **补偿器（Compensator，也称控制器）**，用于确保整体系统的输出不仅能紧跟参考输入，还可能满足其他标准，例如系统稳定性。

反馈控制系统的一般结构如图 7.37 所示。参考输入对应被控量的期望值，输出对应被控量的实际值（由传感器测量）。加法器的输出对应误差（即被控量的期望值与实际值之差）。同样，在控制应用中，目标是使输出随时间尽可能紧跟参考输入。换句话说，我们希望误差尽可能接近零。补偿器的责任就是确保这一目标实现。如果补偿器设计良好，误差将随时间保持接近零。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-314.jpg?height=349&width=1098&top_left_y=297&top_left_x=445)

图 7.37：反馈控制系统。

考虑一个简单的机器人手臂控制系统。在该系统中，参考输入对应机器人手臂末端执行器（即手臂末端装置）的期望位置和姿态，输出对应末端执行器的实际位置和姿态。如果补偿器设计良好，末端执行器的实际位置和姿态应随时间跟踪期望值。

在引入反馈控制系统概念后，我们接下来考虑利用反馈控制系统稳定不稳定的被控对象。

例 7.41（不稳定被控对象的稳定化）。考虑一个因果 LTI 系统，其输入拉普拉斯变换为 $X$，输出拉普拉斯变换为 $Y$，系统函数为
$$
P(s)=\frac{10}{s-1},
$$
如图 7.38 所示。可以很容易地确认，该系统不是 BIBO 稳定的，因为 $P$ 在 1 处有极点。（由于系统是因果的，$P$ 的 ROC 为右半平面 $\operatorname{Re}(s)>1$。显然，这一 ROC 不包含虚轴，因此系统不是 BIBO 稳定的。）下面我们考虑两种不同策略来稳定该不稳定系统，以及它们在实际中的适用性。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-315.jpg?height=101&width=350&top_left_y=297&top_left_x=945)

图 7.38：被控对象（Plant）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-315.jpg?height=488&width=784&top_left_y=499&top_left_x=724)

图 7.39：稳定不稳定被控对象的两种配置。(a) 简单级联系统，(b) 反馈控制系统。

(a) 通过极点-零点抵消稳定不稳定被控对象。假设图 7.38 中的系统与另一个因果 LTI 系统串联，系统函数为
$$
W(s)=\frac{s-1}{10(s+1)}
$$
以得到一个新的系统，其输入拉普拉斯变换为 $X$，输出拉普拉斯变换为 $Y$，如图 7.39(a) 所示。证明该新系统是 BIBO 稳定的。

(b) 通过反馈稳定不稳定被控对象。假设现在图 7.38 中的系统与另外两个因果 LTI 系统互连，系统函数分别为 $C$ 和 $Q$，如图 7.39(b) 所示，以得到一个新的系统，其输入拉普拉斯变换为 $X$，输出拉普拉斯变换为 $Y$，系统函数为 $H$。此外，假设
$$
C(s)=\beta \quad \text{和} \quad Q(s)=1,
$$
其中 $\beta$ 为实常数。证明通过适当选择 $\beta$，得到的系统是 BIBO 稳定的。

(c) 实际问题。本例的 (a) 和 (b) 部分考虑了两种不同的方案来稳定图 7.38 中的不稳定系统。事实证明，像 (a) 中的方案在实际中并不实用。请指出该方法的实际问题，并说明 (b) 中的方案是否存在相同的缺陷。

解答. 

(a) 根据图 7.39(a) 的方框图，整体系统的系统函数 $H$ 为
$$
\begin{aligned}
H(s) & =P(s) W(s) \\
& =\left(\frac{10}{s-1}\right)\left(\frac{s-1}{10(s+1)}\right) \\
& =\frac{1}{s+1}
\end{aligned}
$$
由于系统是因果的，且 $H$ 是有理函数，$H$ 的 ROC 为 $\operatorname{Re}(s)>-1$。因为 ROC 包含虚轴，系统是 BIBO 稳定的。

虽然本例的唯一目标是稳定不稳定被控对象，但值得注意的是，实际上该系统的阶跃响应也相当合理。回想在控制系统中，输出应跟踪输入。对于阶跃响应而言，输入为 $u$，我们希望输出至少能近似 $u$。阶跃响应 $s$ 为
$$
\begin{aligned}
s(t) & =\mathcal{L}^{-1}\{U(s) H(s)\}(t) \\
& =\mathcal{L}^{-1}\left\{\frac{1}{s(s+1)}\right\}(t) \\
& =\mathcal{L}^{-1}\left\{\frac{1}{s}-\frac{1}{s+1}\right\}(t) \\
& =\left(1-e^{-t}\right) u(t)
\end{aligned}
$$
显然，$s$ 是对期望响应 $u$ 的一个较为粗略的近似。

(b) 根据图 7.39(b) 的方框图，可写出
$$
\begin{gathered}
R(s)=X(s)-Q(s) Y(s) \quad \text{和} \\
Y(s)=C(s) P(s) R(s)
\end{gathered}
$$
将这些方程结合（将第一式中 $R$ 的表达式代入第二式），得到
$$
\begin{aligned}
& Y(s)=C(s) P(s)[X(s)-Q(s) Y(s)] \\
\Rightarrow \quad & Y(s)=C(s) P(s) X(s)-C(s) P(s) Q(s) Y(s) \\
\Rightarrow \quad & {[1+C(s) P(s) Q(s)] Y(s)=C(s) P(s) X(s)} \\
\Rightarrow \quad & \frac{Y(s)}{X(s)}=\frac{C(s) P(s)}{1+C(s) P(s) Q(s)}
\end{aligned}
$$
因此
$$
H(s)=\frac{C(s) P(s)}{1+C(s) P(s) Q(s)}
$$
代入已知的 $P, C, Q$，得到
$$
\begin{aligned}
H(s) & =\frac{\beta\left(\frac{10}{s-1}\right)}{1+\beta\left(\frac{10}{s-1}\right)(1)} \\
& =\frac{10 \beta}{s-1+10 \beta} \\
& =\frac{10 \beta}{s-(1-10 \beta)}
\end{aligned}
$$
系统函数 $H$ 是有理函数，且有一个极点在 $1-10 \beta$。由于系统是因果的，ROC 必须为 $\operatorname{Re}(s)>1-10 \beta$ 的右半平面。为了使系统 BIBO 稳定，ROC 必须包含虚轴。因此，当 $1-10 \beta<0$ 时系统 BIBO 稳定，即 $10 \beta>1$，或 $\beta>\frac{1}{10}$。

同样，虽然本例的唯一目标是稳定不稳定被控对象，但实际上该系统的阶跃响应也相当合理。（这并非偶然，在选择补偿器系统函数 $C$ 的形式时需要一定技巧。这个选择过程需要的控制系统知识超出本书范围。）阶跃响应 $s$ 为
$$
\begin{aligned}
s(t) & =\mathcal{L}^{-1}\{U(s) H(s)\}(t) \\
& =\mathcal{L}^{-1}\left\{\frac{10 \beta}{s(s-[1-10 \beta])}\right\}(t) \\
& =\mathcal{L}^{-1}\left\{\frac{10 \beta}{10 \beta-1}\left(\frac{1}{s}-\frac{1}{s-(1-10 \beta)}\right)\right\}(t) \\
& =\frac{10 \beta}{10 \beta-1}\left(1-e^{-(10 \beta-1) t}\right) u(t) \\
& \approx u(t) \quad \text{当 } \beta 较大时
\end{aligned}
$$
显然，随着 $\beta$ 增大，$s$ 对期望响应 $u$ 的近似更为准确。

(c) (a) 中的方案依赖于极点-零点抵消来稳定不稳定被控对象。不幸的是，在实际中不可能实现精确的极点-零点抵消。简言之，这是一个近似问题。我们对系统的分析基于方程描述的理论模型，而这些理论模型仅是对实际系统的近似。这种近似性来源于多个因素，包括但不限于：

1. 我们无法精确确定系统函数，因为测量总会有误差；
2. 我们无法建造具有完全指定系统函数的系统，系统函数只能接近预期；
3. 大多数系统的系统函数会随物理环境变化略微改变（如温度、压力或月相引起的重力变化等）；
4. 尽管系统可用 LTI 模型表示，但实际系统很可能并非完全 LTI，从而引入误差。

因此，系统函数的有效极点和零点只会近似位于预期位置。而极点-零点抵消要求极点和零点精确重合，因此任何误差都会阻止抵消的实现。在实际中至少会有小误差，因此无法达到理想的极点-零点抵消。

(b) 中的方案基于反馈稳定不稳定被控对象。采用反馈时，系统函数的极点不会与零点抵消，而是被完全改变/重新安置。因此，我们可以将极点放置在即使略有偏移（由于近似误差）仍能保证系统稳定的位置。因此，这第二种方案不会出现第一种方案的实际问题。

## 7.17 单边拉普拉斯变换

如前所述，拉普拉斯变换通常有两种形式，即双边（bilateral）和单边（unilateral）拉普拉斯变换。到目前为止，我们只考虑了双边拉普拉斯变换。现在，我们转向单边拉普拉斯变换。函数 $x$ 的单边拉普拉斯变换记作 $\mathcal{L}_{\mathrm{u}} x$ 或 $X$，定义为
$$
\begin{equation*}
\mathcal{L}_{\mathrm{u}} x(s)=X(s)=\int_{0^{-}}^{\infty} x(t) e^{-s t} d t \tag{7.16}
\end{equation*}
$$
单边拉普拉斯变换的逆变换定义与双边情况相同，即公式 (7.3)。

比较单边和双边拉普拉斯变换的定义（分别由 (7.16) 和 (7.2) 给出），可以看到这两种定义的唯一区别在于积分下限。由于定义的相似性，它们之间存在一个重要关系，如下所示。考虑任意函数 $x$ 的 $x u$ 的双边拉普拉斯变换，我们有
$$
\begin{aligned}
\mathcal{L}\{x u\}(s) & =\int_{-\infty}^{\infty} x(t) u(t) e^{-s t} d t \\
& =\int_{0^{-}}^{\infty} x(t) e^{-s t} d t \\
& =\mathcal{L}_{\mathrm{u}} x(s)
\end{aligned}
$$
换句话说，函数 $x$ 的单边拉普拉斯变换实际上就是函数 $x u$ 的双边拉普拉斯变换。由于 $\mathcal{L}_{\mathrm{u}} x=\mathcal{L}\{x u\}$，且 $x u$ 总是右侧信号，与之关联的 ROC 总是右半平面（或整个复平面）。因此，在使用单边拉普拉斯变换时，我们通常不显式标注 ROC。

本章前面已经说明，双边拉普拉斯变换是可逆的。即如果函数 $x$ 的双边拉普拉斯变换为 $X=\mathcal{L} x$，则 $\mathcal{L}^{-1} X=x$。现在我们考虑单边拉普拉斯变换的可逆性。为此，我们必须考虑 $\mathcal{L}_{u}^{-1} \mathcal{L}_{u} x$。由于 $\mathcal{L}_{u} x=\mathcal{L}\{x u\}$，且单边和双边拉普拉斯变换的逆变换公式相同，我们可以写出
$$
\begin{aligned}
\mathcal{L}_{\mathrm{u}}^{-1} \mathcal{L}_{\mathrm{u}} x(t) & =\mathcal{L}_{\mathrm{u}}^{-1}\{\mathcal{L}\{x u\}\}(t) \\
& =\mathcal{L}^{-1}\{\mathcal{L}\{x u\}\}(t) \\
& =x(t) u(t) \\
& = \begin{cases}x(t) & t \geq 0 \\ 0 & t<0\end{cases}
\end{aligned}
$$
因此，仅当 $x$ 是因果函数时，$\mathcal{L}_{\mathrm{u}}^{-1} \mathcal{L}_{\mathrm{u}} x=x$。换句话说，单边拉普拉斯变换仅对因果函数可逆。对于非因果函数，我们只能恢复 $t \geq 0$ 时的 $x(t)$。本质上，单边拉普拉斯变换舍弃了 $t<0$ 时函数 $x$ 的信息，因此无法通过逆单边拉普拉斯变换恢复。

由于单边和双边拉普拉斯变换关系密切，它们在性质上有一些相似之处。然而，由于定义不同，在某些情况下它们的性质会有所不同，通常差异较为微妙。单边拉普拉斯变换的性质总结如表 7.4 所示。

表 7.4：单边拉普拉斯变换性质

| 属性 | 时域 | 拉普拉斯域 |
| :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(t)+a_{2} x_{2}(t)$ | $a_{1} X_{1}(s)+a_{2} X_{2}(s)$ |
| 拉普拉斯域平移 | $e^{s_{0} t} x(t)$ | $X\left(s-s_{0}\right)$ |
| 时域/拉普拉斯域缩放 | $x(a t), a>0$ | $\frac{1}{a} X\left(\frac{s}{a}\right)$ |
| 共轭 | $x^{*}(t)$ | $X^{*}\left(s^{*}\right)$ |
| 时域卷积 | $x_{1} * x_{2}(t), x_{1}, x_{2}$ 为因果信号 | $X_{1}(s) X_{2}(s)$ |
| 时域微分 | $\frac{d}{d t} x(t)$ | $s X(s)-x\left(0^{-}\right)$ |
| 拉普拉斯域微分 | $-t x(t)$ | $\frac{d}{d s} X(s)$ |
| 时域积分 | $\int_{0^{-}}^{t} x(\tau) d \tau$ | $\frac{1}{s} X(s)$ |

| 属性 | 公式 |
| :--- | :--- |
| 初值定理 | $x\left(0^{+}\right)=\lim _{s \rightarrow \infty} s X(s)$ |
| 末值定理 | $\lim _{t \rightarrow \infty} x(t)=\lim _{s \rightarrow 0} s X(s)$ |

表 7.5：单边拉普拉斯变换对应表

| 序号 | $x(t), t \geq 0$ | $X(s)$ |
| :--- | :--- | :--- |
| 1 | $\delta(t)$ | 1 |
| 2 | 1 | $\frac{1}{s}$ |
| 3 | $t^{n}$ | $\frac{n!}{s^{n+1}}$ |
| 4 | $e^{-a t}$ | $\frac{1}{s+a}$ |
| 5 | $t^{n} e^{-a t}$ | $\frac{n!}{(s+a)^{n+1}}$ |
| 6 | $\cos(\omega_{0} t)$ | $\frac{s}{s^{2}+\omega_{0}^{2}}$ |
| 7 | $\sin(\omega_{0} t)$ | $\frac{\omega_{0}}{s^{2}+\omega_{0}^{2}}$ |
| 8 | $e^{-a t} \cos(\omega_{0} t)$ | $\frac{s+a}{(s+a)^{2}+\omega_{0}^{2}}$ |
| 9 | $e^{-a t} \sin(\omega_{0} t)$ | $\frac{\omega_{0}}{(s+a)^{2}+\omega_{0}^{2}}$ |

通过比较表 7.4 和表 7.2 可以看出，单边拉普拉斯变换具有与双边拉普拉斯变换相同的一些性质，例如线性、拉普拉斯域平移、共轭和拉普拉斯域微分性质。初值定理和末值定理也同样适用。

由于定义不同，单边和双边拉普拉斯变换在某些性质上存在差异。比较表 7.2 和表 7.4 可以发现，在单边拉普拉斯变换中：

1. 时域卷积要求卷积的函数必须为因果信号；
2. 时域/拉普拉斯域缩放要求缩放因子为正；
3. 时域微分性质在 $\mathcal{L}_{u}\{\mathcal{D} x\}(t)$ 表达式中多了一个项（即 $-x(0^{-})$）；
4. 时域积分的积分下限不同（为 $0^{-}$ 而非 $-\infty$）。

此外，在单边情形下，时域平移性质并不成立（除非在特殊情况下）。  
由于 $\mathcal{L}_{\boldsymbol{u}} x=\mathcal{L}\{x u\}$，我们可以很容易地根据双边拉普拉斯变换对表生成单边拉普拉斯变换对表。利用表 7.3 中的双边拉普拉斯变换对，以及前述单边与双边拉普拉斯变换之间的关系，我们可以轻而易举地推导出表 7.5 中的单边拉普拉斯变换对。由于在单边情形下，收敛域（ROC）总是对应于右侧函数，因此在表中我们并未显式指明 ROC。也就是说，ROC 默认假定为对应于右侧函数的收敛域（即右半平面或整个复平面）。

单边拉普拉斯逆变换的计算方法与双边情形相同（例如，部分分式展开法）。唯一的区别在于，ROC 总是假定对应于右侧函数。

## 7.18 使用单边拉普拉斯变换求解微分方程

工程应用中，许多系统可用常系数线性微分方程描述。需要注意的是，一个由此类方程描述的系统不一定是线性的。特别地，当微分方程的初始条件全为零时，系统才是线性的。如果一个或多个初始条件非零，则该系统称为增量线性（incrementally linear）。在这里，增量线性系统可视为线性系统的推广。单边拉普拉斯变换在处理非零初始条件时非常有用，例如用于求解常系数线性微分方程。以下通过几个例子说明单边拉普拉斯变换的应用。
示例 7.42. 考虑因果增量线性时不变（TI）系统，输入为 $x$，输出为 $y$，其特性由微分方程描述：

$$
y^{\prime}(t)+3 y(t)=x(t),
$$

其中撇号表示导数。如果 $x(t)=e^{-t} u(t)$ 且 $y\left(0^{-}\right)=1$，求 $y$。  

**解答**：我们首先对给定微分方程的两边取单边拉普拉斯变换，得到

$$
\begin{aligned}
& \mathcal{L}_{\mathrm{u}}\left\{y^{\prime}\right\}(s)+3 \mathcal{L}_{\mathrm{u}} y(s)=\mathcal{L}_{\mathrm{u}} x(s) \\
\Rightarrow & s Y(s)-y\left(0^{-}\right)+3 Y(s)=X(s) \\
\Rightarrow & (s+3) Y(s)=X(s)+y\left(0^{-}\right) \\
\Rightarrow & Y(s)=\frac{X(s)+y\left(0^{-}\right)}{s+3}
\end{aligned}
$$

由于 $x(t)=e^{-t} u(t)$，我们有

$$
X(s)=\mathcal{L}_{\mathrm{u}}\left\{e^{-t}\right\}(s)=\frac{1}{s+1}
$$

将 $X(s)$ 的表达式及给定初值条件（即 $y\left(0^{-}\right)=1$）代入上式 $Y(s)$ 中，得到

$$
Y(s)=\frac{\left(\frac{1}{s+1}\right)+1}{s+3}=\frac{\left(\frac{s+2}{s+1}\right)}{s+3}=\frac{s+2}{(s+1)(s+3)}
$$

现在，我们对 $Y$ 进行部分分式展开。展开形式为

$$
Y(s)=\frac{A_{1}}{s+1}+\frac{A_{2}}{s+3}
$$

计算展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.(s+1) Y(s)\right|_{s=-1} \\
& =\left.\frac{s+2}{s+3}\right|_{s=-1} \\
& =\frac{1}{2} \quad \text{以及} \\
A_{2} & =\left.(s+3) Y(s)\right|_{s=-3} \\
& =\left.\frac{s+2}{s+1}\right|_{s=-3} \\
& =\frac{1}{2}
\end{aligned}
$$

因此，我们可以将 $Y$ 重写为

$$
Y(s)=\frac{1}{2}\left(\frac{1}{s+1}\right)+\frac{1}{2}\left(\frac{1}{s+3}\right)
$$

对 $Y$ 取单边拉普拉斯逆变换，得到

$$
\begin{aligned}
y(t) & =\mathcal{L}_{\mathrm{u}}^{-1} Y(t) \\
& =\frac{1}{2} \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+1}\right\}(t)+\frac{1}{2} \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+3}\right\}(t) \\
& =\frac{1}{2} e^{-t}+\frac{1}{2} e^{-3 t} \quad \text{对于 } t \geq 0
\end{aligned}
$$

示例 7.43（二阶导数的单边拉普拉斯变换）。求 $y$ 的单边拉普拉斯变换 $Y$，并用 $x$ 的单边拉普拉斯变换 $X$ 表示，其中

$$
y(t)=x^{\prime \prime}(t)
$$

撇号表示导数（例如，$x^{\prime \prime}$ 是 $x$ 的二阶导数）。  

**解答**：定义函数

$$
\begin{equation*}
v(t)=x^{\prime}(t) \tag{7.17}
\end{equation*}
$$

于是有

$$
\begin{equation*}
y(t)=v^{\prime}(t) \tag{7.18}
\end{equation*}
$$

记 $V$ 为 $v$ 的单边拉普拉斯变换。对 (7.17) 取单边拉普拉斯变换（利用时域微分性质），得到

$$
\begin{align*}
V(s) & =\mathcal{L}_{\mathrm{u}}\left\{x^{\prime}\right\}(s) \\
& =s X(s)-x\left(0^{-}\right) \tag{7.19}
\end{align*}
$$

对 (7.18) 取单边拉普拉斯变换（同样利用时域微分性质），得到

$$
\begin{align*}
Y(s) & =\mathcal{L}_{\mathrm{u}}\left\{v^{\prime}\right\}(s) \\
& =s V(s)-v\left(0^{-}\right) \tag{7.20}
\end{align*}
$$

将 (7.19) 代入 (7.20)，得到

$$
\begin{aligned}
Y(s) & =s\left[s X(s)-x\left(0^{-}\right)\right]-v\left(0^{-}\right) \\
& =s^{2} X(s)-s x\left(0^{-}\right)-x^{\prime}\left(0^{-}\right)
\end{aligned}
$$

因此，有

$$
Y(s)=s^{2} X(s)-s x\left(0^{-}\right)-x^{\prime}\left(0^{-}\right)
$$

例 7.44. 考虑因果增量线性时不变（TI）系统，输入为 $x$，输出为 $y$，其特性由微分方程描述：

$$
y^{\prime \prime}(t)+3 y^{\prime}(t)+2 y(t)=x(t)
$$

其中撇号表示导数。如果 $x(t)=5 u(t), y\left(0^{-}\right)=1$，且 $y^{\prime}\left(0^{-}\right)=-1$，求 $y$。  

**解答**：我们首先对给定微分方程的两边取单边拉普拉斯变换，得到

$$
\begin{aligned}
& \mathcal{L}_{\mathrm{u}}\left\{y^{\prime \prime}+3 y^{\prime}+2 y\right\}(s)=\mathcal{L}_{\mathrm{u}} x(s) \\
\Rightarrow & \mathcal{L}_{\mathrm{u}}\left\{y^{\prime \prime}\right\}(s)+3 \mathcal{L}_{\mathrm{u}}\left\{y^{\prime}\right\}(s)+2 \mathcal{L}_{\mathrm{u}} y(s)=\mathcal{L}_{\mathrm{u}} x(s) \\
\Rightarrow & {\left[s^{2} Y(s)-s y\left(0^{-}\right)-y^{\prime}\left(0^{-}\right)\right]+3\left[s Y(s)-y\left(0^{-}\right)\right]+2 Y(s)=X(s) } \\
\Rightarrow & s^{2} Y(s)-s y\left(0^{-}\right)-y^{\prime}\left(0^{-}\right)+3 s Y(s)-3 y\left(0^{-}\right)+2 Y(s)=X(s) \\
\Rightarrow & {\left[s^{2}+3 s+2\right] Y(s)=X(s)+s y\left(0^{-}\right)+y^{\prime}\left(0^{-}\right)+3 y\left(0^{-}\right) } \\
\Rightarrow & Y(s)=\frac{X(s)+s y\left(0^{-}\right)+y^{\prime}\left(0^{-}\right)+3 y\left(0^{-}\right)}{s^{2}+3 s+2}
\end{aligned}
$$

由于 $x(t)=5 u(t)$，我们有

$$
X(s)=\mathcal{L}_{\mathrm{u}}\{5 u(t)\}(s)=\frac{5}{s}
$$

将 $X(s)$ 及给定初值代入上式，得到

$$
Y(s)=\frac{\left(\frac{5}{s}\right)+s-1+3}{s^{2}+3 s+2}=\frac{s^{2}+2 s+5}{s(s+1)(s+2)}
$$

现在，我们对 $Y$ 进行部分分式展开。展开形式为

$$
Y(s)=\frac{A_{1}}{s}+\frac{A_{2}}{s+1}+\frac{A_{3}}{s+2}
$$

计算展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.s Y(s)\right|_{s=0} \\
& =\left.\frac{s^{2}+2 s+5}{(s+1)(s+2)}\right|_{s=0} \\
& =\frac{5}{2} \\
A_{2} & =\left.(s+1) Y(s)\right|_{s=-1} \\
& =\left.\frac{s^{2}+2 s+5}{s(s+2)}\right|_{s=-1} \\
& =-4, \quad \text {以及} \\
A_{3} & =\left.(s+2) Y(s)\right|_{s=-2} \\
& =\left.\frac{s^{2}+2 s+5}{s(s+1)}\right|_{s=-2} \\
& =\frac{5}{2}
\end{aligned}
$$

因此，我们可以将 $Y$ 重写为

$$
Y(s)=\frac{5 / 2}{s}-\frac{4}{s+1}+\frac{5 / 2}{s+2}
$$

对 $Y$ 取单边拉普拉斯逆变换，得到

$$
\begin{aligned}
y(t) & =\mathcal{L}_{\mathrm{u}}^{-1} Y(t) \\
& =\frac{5}{2} \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s}\right\}(t)-4 \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+1}\right\}(t)+\frac{5}{2} \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+2}\right\}(t) \\
& =\frac{5}{2}-4 e^{-t}+\frac{5}{2} e^{-2 t} \quad \text { 对于 } t \geq 0
\end{aligned}
$$
例 7.45（RC 网络）。考虑图 7.40 所示的电阻-电容（RC）网络，输入为 $v_{0}$，输出为 $v_{1}$。若 $R=100, C=\frac{1}{100}, v_{0}(t)=3 e^{-2 t} u(t)$，且 $v_{1}\left(0^{-}\right)=1$，求 $v_{1}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-324.jpg?height=298&width=496&top_left_y=294&top_left_x=745)

图 7.40：RC 网络。

**解答**：根据基本电路分析，有

$$
\begin{gathered}
v_{0}(t)=R i(t)+v_{1}(t) \quad \text {以及} \\
i(t)=C \frac{d}{d t} v_{1}(t)
\end{gathered}
$$

将上述两式结合，得到

$$
\begin{aligned}
v_{0}(t) & =R\left[C \frac{d}{d t} v_{1}(t)\right]+v_{1}(t) \\
& =R C \frac{d}{d t} v_{1}(t)+v_{1}(t)
\end{aligned}
$$

对该方程两边取单边拉普拉斯变换，得到

$$
\begin{array}{ll} 
& \mathcal{L}_{\mathrm{u}} v_{0}(s)=\mathcal{L}_{\mathrm{u}}\left\{R C \frac{d}{d t} v_{1}(t)+v_{1}(t)\right\}(s) \\
\Rightarrow & \mathcal{L}_{\mathrm{u}} v_{0}(s)=R C \mathcal{L}_{\mathrm{u}}\left\{\frac{d}{d t} v_{1}(t)\right\}(s)+\mathcal{L}_{\mathrm{u}} v_{1}(s) \\
\Rightarrow & V_{0}(s)=R C\left[s V_{1}(s)-v_{1}\left(0^{-}\right)\right]+V_{1}(s) \\
\Rightarrow & V_{0}(s)=R C s V_{1}(s)-R C v_{1}\left(0^{-}\right)+V_{1}(s) \\
\Rightarrow & V_{0}(s)+R C v_{1}\left(0^{-}\right)=R C s V_{1}(s)+V_{1}(s) \\
\Rightarrow & V_{1}(s)=\frac{V_{0}(s)+R C v_{1}\left(0^{-}\right)}{R C s+1}
\end{array}
$$

由于 $v_{0}(t)=3 e^{-2 t} u(t)$，我们有

$$
V_{0}(s)=\frac{3}{s+2}
$$

将 $V_{0}(s)$ 代入上述 $V_{1}$ 表达式，得到

$$
\begin{aligned}
V_{1}(s) & =\frac{\left(\frac{3}{s+2}\right)+1}{s+1} \\
& =\frac{3}{(s+1)(s+2)}+\frac{1}{s+1} \\
& =\frac{s+5}{(s+1)(s+2)}
\end{aligned}
$$

现在，对 $V_{1}$ 进行部分分式展开，形式为

$$
V_{1}(s)=\frac{A_{1}}{s+1}+\frac{A_{2}}{s+2}
$$

计算展开系数，得到

$$
\begin{aligned}
A_{1} & =\left.(s+1) V_{1}(s)\right|_{s=-1} \\
& =\left.\frac{s+5}{s+2}\right|_{s=-1} \\
& =4 \quad \text {以及} \\
A_{2} & =\left.(s+2) V_{1}(s)\right|_{s=-2} \\
& =\left.\frac{s+5}{s+1}\right|_{s=-2} \\
& =-3
\end{aligned}
$$

因此，$V_{1}$ 可写为

$$
V_{1}(s)=\frac{4}{s+1}-\frac{3}{s+2}
$$

对 $V_{1}$ 取单边拉普拉斯逆变换，得到

$$
\begin{aligned}
v_{1}(t) & =\mathcal{L}_{\mathrm{u}}^{-1} V_{1}(t) \\
& =\mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{4}{s+1}-\frac{3}{s+2}\right\}(t) \\
& =4 \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+1}\right\}(t)-3 \mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+2}\right\}(t) \\
& =4 e^{-t}-3 e^{-2 t} \quad \text { 对于 } t \geq 0
\end{aligned}
$$
例 7.46（RLC 网络）。考虑图 7.41 所示的电阻-电感-电容（RLC）网络，输入为 $v_{0}$，输出为 $v_{1}$。若 $R=2, L=1, C=1, v_{0}(t)=u(t), v_{1}\left(0^{-}\right)=0$，且 $v_{1}^{\prime}\left(0^{-}\right)=1$，求 $v_{1}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-325.jpg?height=296&width=671&top_left_y=302&top_left_x=780)

图 7.41：RLC 网络。

**解答**：根据基本电路分析，可写出

$$
\begin{gathered}
v_{0}(t)=R i(t)+L \frac{d}{d t} i(t)+v_{1}(t) \quad \text {以及} \\
v_{1}(t)=\frac{1}{C} \int_{-\infty}^{t} i(\tau) d \tau \Rightarrow i(t)=C \frac{d}{d t} v_{1}(t)
\end{gathered}
$$

将上述方程结合，得到

$$
\begin{aligned}
v_{0}(t) & =R\left[C \frac{d}{d t} v_{1}(t)\right]+L \frac{d}{d t}\left[C \frac{d}{d t} v_{1}(t)\right]+v_{1}(t) \\
& =R C \frac{d}{d t} v_{1}(t)+L C\left(\frac{d}{d t}\right)^{2} v_{1}(t)+v_{1}(t)
\end{aligned}
$$

对该方程两边取单边拉普拉斯变换，得到

$$
\begin{array}{ll} 
& \mathcal{L}_{\mathrm{u}} v_{0}(s)=R C \mathcal{L}_{\mathrm{u}}\left\{\frac{d}{d t} v_{1}(t)\right\}(s)+L C \mathcal{L}_{\mathrm{u}}\left\{\left(\frac{d}{d t}\right)^{2} v_{1}(t)\right\}(s)+\mathcal{L}_{\mathrm{u}} v_{1}(s) \\
\Rightarrow & V_{0}(s)=R C\left[s V_{1}(s)-v_{1}\left(0^{-}\right)\right]+L C\left[s^{2} V_{1}(s)-s v_{1}\left(0^{-}\right)-v_{1}^{\prime}\left(0^{-}\right)\right]+V_{1}(s) \\
\Rightarrow & V_{0}(s)=R C s V_{1}(s)-R C v_{1}\left(0^{-}\right)+L C s^{2} V_{1}(s)-L C s v_{1}\left(0^{-}\right)-L C v_{1}^{\prime}\left(0^{-}\right)+V_{1}(s) \\
\Rightarrow & {\left[L C s^{2}+R C s+1\right] V_{1}(s)=V_{0}(s)+R C v_{1}\left(0^{-}\right)+L C s v_{1}\left(0^{-}\right)+L C v_{1}^{\prime}\left(0^{-}\right)} \\
\Rightarrow & V_{1}(s)=\frac{V_{0}(s)+[R C+L C s] v_{1}\left(0^{-}\right)+L C v_{1}^{\prime}\left(0^{-}\right)}{L C s^{2}+R C s+1}
\end{array}
$$

由于 $v_{0}(t)=u(t)$，我们有 $V_{0}(s)=\frac{1}{s}$。将其代入上述 $V_{1}$ 表达式，得到

$$
\begin{aligned}
V_{1}(s) & =\frac{\left(\frac{1}{s}\right)+1}{s^{2}+2 s+1} \\
& =\frac{\left(\frac{s+1}{s}\right)}{(s+1)^{2}} \\
& =\frac{1}{s(s+1)}
\end{aligned}
$$

现在，对 $V_{1}$ 进行部分分式展开，形式为

$$
V_{1}(s)=\frac{A_{1}}{s}+\frac{A_{2}}{s+1}
$$

求得展开系数：

$$
\begin{aligned}
A_{1} & =\left.s V_{1}(s)\right|_{s=0} \\
& =\left.\frac{1}{s+1}\right|_{s=0} \\
& =1 \quad \text {以及} \\
A_{2} & =\left.(s+1) V_{1}(s)\right|_{s=-1} \\
& =\left.\frac{1}{s}\right|_{s=-1} \\
& =-1
\end{aligned}
$$

因此，$V_{1}$ 可写为

$$
V_{1}(s)=\frac{1}{s}-\frac{1}{s+1}
$$

对 $V_{1}$ 取单边拉普拉斯逆变换，得到

$$
\begin{aligned}
v_{1}(t) & =\mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s}\right\}(t)-\mathcal{L}_{\mathrm{u}}^{-1}\left\{\frac{1}{s+1}\right\}(t) \\
& =1-e^{-t} \quad \text { 对于 } t \geq 0
\end{aligned}
$$

## 7.19 练习题

### 7.19.1 无答案练习题

7.1 使用拉普拉斯变换的定义，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) $x(t)=e^{-a t} u(t)$；  
(b) $x(t)=e^{-a|t|}$；  
(c) $x(t)=\cos \left(\omega_{0} t\right) u(t)$。  
[注：使用公式 (F.3)。]

7.2 使用拉普拉斯变换的性质和拉普拉斯变换对照表，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) $x(t)=e^{-2 t} u(t)$；  
(b) $x(t)=3 e^{-2 t} u(t)+2 e^{5 t} u(-t)$；  
(c) $x(t)=e^{-2 t} u(t+4)$；  
(d) $x(t)=\int_{-\infty}^{t} e^{-2 \tau} u(\tau) d \tau$；  
(e) $x(t)=-e^{a t} u(-t+b)$，其中 $a$ 和 $b$ 为实数常数，且 $a>0$；  
(f) $x(t)=t e^{-3 t} u(t+1)$；  
(g) $x(t)=t u(t+2)$。

7.3 使用拉普拉斯变换的性质和拉普拉斯变换表，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) 
$$
x(t)= \begin{cases}t & 0 \leq t<1 \\ t-2 & 1 \leq t<2 \\ 0 & \text { 其他情况; }\end{cases}
$$
(b) 
$$
x(t)=\begin{cases}1+t & -1 \leq t<0 \\ 1-t & 0 \leq t<1 \\ 0 & \text { 其他情况; }\end{cases}
$$
(c) 
$$
x(t)= \begin{cases}t & 0 \leq t<1 \\ 1 & 1 \leq t<2 \\ t-1 & 2 \leq t<3 \\ 0 & \text { 其他情况. }\end{cases}
$$

7.4 使用拉普拉斯变换的性质和拉普拉斯变换表，求下图所示函数 $x$ 的拉普拉斯变换 $X$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-327.jpg?height=249&width=371&top_left_y=1980&top_left_x=618)  
(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-327.jpg?height=244&width=630&top_left_y=1988&top_left_x=1291)  
(b)

7.5 对下列各情况，使用拉普拉斯变换的性质和拉普拉斯变换对照表，求函数 $y$ 的拉普拉斯变换 $Y$，并用函数 $x$ 的拉普拉斯变换 $X$ 表示，其中 $X$ 和 $Y$ 的 ROC 分别为 $R_X$ 和 $R_Y$。  
(a) $y(t)=x(a t-b)$，其中 $a$ 和 $b$ 为实数常数，且 $a \neq 0$；  
(b) $y(t)=e^{-3 t}[x * x(t-1)]$；  
(c) $y(t)=t x(3 t-2)$；  
(d) $y(t)=\mathcal{D} x_{1}(t)$，其中 $x_{1}(t)=x^{*}(t-3)$，$\mathcal{D}$ 表示求导算子；  
(e) $y(t)=e^{-5 t} x(3 t+7)$；  
(f) $y(t)=e^{-j 5 t} x(t+3)$。

7.6 一个因果函数 $x$ 的拉普拉斯变换为  
$$
X(s)=\frac{-2 s}{s^{2}+3 s+2}
$$
(a) 假设 $x$ 在 0 点没有奇点，求 $x\left(0^{+}\right)$。  
(b) 假设 $\lim _{t \rightarrow \infty} x(t)$ 存在，求此极限值。

7.7 函数 $x$ 的拉普拉斯变换为  
$$
X(s)=\frac{\left(s+\frac{1}{2}\right)\left(s-\frac{1}{2}\right)}{s(s+1)(s-1)}
$$
判断 $x$ 对于下列每个 ROC 是左侧信号但非右侧信号、右侧信号但非左侧信号、双侧信号还是有限时域信号。  
(a) $\operatorname{Re}(s)<-1$；  
(b) $-1<\operatorname{Re}(s)<0$；  
(c) $0<\operatorname{Re}(s)<1$；  
(d) $\operatorname{Re}(s)>1$。

7.8 一个函数 $x$ 的拉普拉斯变换为  
$$
X(s)=\frac{s+\frac{1}{2}}{(s+1-j)(s+1+j)(s+2)}
$$
如果 $x$ 是 (a) 左侧信号（但非右侧信号）；(b) 右侧信号（但非左侧信号）；(c) 双侧信号；(d) 因果信号，绘出 $X$ 的 ROC。

7.9 一个函数 $x$ 的拉普拉斯变换为  
$$
X(s)=\frac{s+\frac{1}{2}}{(s-1)(s+1-j)(s+1+j)(s+2)}
$$
判断 $x$ 有多少种不同的可能性。（不需要明确求出所有情况。）
7.10 求下列函数 $X$ 的逆拉普拉斯变换 $x$。  
(a) $X(s)=\frac{s-5}{s^{2}-1}$，适用于 $-1<\operatorname{Re}(s)<1$；  
(b) $X(s)=\frac{2 s^{2}+4 s+5}{(s+1)(s+2)}$，适用于 $\operatorname{Re}(s)>-1$；  
(c) $X(s)=\frac{3 s+1}{s^{2}+3 s+2}$，适用于 $-2<\operatorname{Re}(s)<-1$；  
(d) $X(s)=\frac{s^{2}-s+1}{(s+3)^{2}(s+2)}$，适用于 $\operatorname{Re}(s)>-2$；  
(e) $X(s)=\frac{s+2}{(s+1)^{2}}$，适用于 $\operatorname{Re}(s)<-1$。

7.11 求下列函数 $X$ 的因果逆拉普拉斯变换 $x$。  
(a) $X(s)=\frac{s^{2}+4 s+5}{s^{2}+2 s+1}$；  
(b) $X(s)=\frac{-3 s^{2}-6 s-2}{(s+1)^{2}(s+2)}$。

7.12 求所有可能的逆拉普拉斯变换  
$$
H(s)=\frac{7 s-1}{s^{2}-1}=\frac{4}{s+1}+\frac{3}{s-1}
$$

7.13 对于输入为 $x$、输出为 $y$ 的 LTI 系统以及下列系统函数 $H$，求描述系统的微分方程。  
(a) $H(s)=\frac{s+1}{s^{2}+2 s+2}$。

7.14 对于因果 LTI 系统，输入为 $x$、输出为 $y$，其微分方程如下，求系统函数 $H$。  
(a) $\mathcal{D}^{2} y(t)+4 \mathcal{D} y(t)+3 y(t)=2 \mathcal{D} x(t)+x(t)$。

7.15 考虑输入为 $x$、输出为 $y$、系统函数为 $H$ 的 LTI 系统，如下图所示。假设系统 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 是因果 LTI 系统，分别具有系统函数  
$$
H_{1}(s)=\frac{1}{s-1} \quad \text { 和 } \quad H_{2}(s)=A
$$
其中 $A$ 为实常数。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-329.jpg?height=236&width=531&top_left_y=1399&top_left_x=899)  
(a) 用 $H_{1}$ 和 $H_{2}$ 表示 $H$ 的表达式。  
(b) 判断系统在 $A$ 取何值时是 BIBO 稳定的。

7.16 下图显示一个系统 $\mathfrak{H}$，输入的拉普拉斯变换为 $X$，输出为 $Y$。图中每个子系统都是因果 LTI 系统，并标注了其系统函数，$a$ 为实常数。  
(i) 求系统 $\mathcal{H}$ 的系统函数 $H$。  
(ii) 判断系统 $\mathcal{H}$ 是否 BIBO 稳定。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-329.jpg?height=444&width=1481&top_left_y=2058&top_left_x=459)

7.17 考虑输入为 $v_{1}$、输出为 $v_{2}$ 的 LTI 电阻-电感 (RL) 网络，如下图所示。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-330.jpg?height=290&width=471&top_left_y=389&top_left_x=805)  
(a) 求系统函数 $H$。  
(b) 判断系统是否 BIBO 稳定。  
(c) 判断该系统最接近哪类理想频率选择性滤波器。  
(d) 求系统的阶跃响应 $g$。

7.18 考虑系统函数为  
$$
H(s)=\frac{s^{2}+7 s+12}{s^{2}+3 s+12}
$$
的 LTI 系统。求该系统的所有可能逆系统。对于每个逆系统，指出其系统函数及对应 ROC，并说明该逆系统是否因果和/或稳定。（注：无需求逆系统的冲激响应。）

7.19 考虑输入为 $x$、输出为 $y$ 的因果 LTI 系统，其微分方程为  
$$
\mathcal{D}^{2} y(t)-y(t)=\mathcal{D} x(t)+a x(t),
$$
其中 $a$ 为实常数，$\mathcal{D}$ 表示求导算子。求 $a$ 的取值范围，使系统 BIBO 稳定。

7.20 在无线通信信道中，发射信号会沿多条不同长度的路径同时传播。因此，接收到的信号是原始信号的多个延迟和放大/衰减版本的叠加，从而导致信号失真，这通常称为多径问题。下面我们考虑此问题的一个简单实例。  
考虑输入为 $x$、输出为 $y$ 的 LTI 通信信道。假设传输信号 $x$ 沿两条路径传播。在预期的直接路径上，信道有延迟 $T$（$T>0$）且增益为 1。在第二条（非预期间接）路径上，信号延迟 $T+\tau$ 且增益为 $a$（$\tau>0$）。因此，接收信号为  
$$
y(t)=x(t-T)+a x(t-T-\tau)
$$
求可串联在通信信道输出端的 LTI 系统，使得能够恢复（延迟的）信号 $x(t-T)$ 且无失真，并判断该系统是否可物理实现。

7.21 对下列每个描述因果（增量线性 TI）系统的微分方程，求在给定初始条件下的输出 $y$。  
(a) $\mathcal{D}^{2} y(t)+7 \mathcal{D} y(t)+12 y(t)=x(t)$，其中 $y\left(0^{-}\right)=-1$，$\mathcal{D} y\left(0^{-}\right)=0$，且 $x(t)=u(t)$。

7.22 考虑下图所示的电阻-电容 (RC) 网络，其中 $R=1000$，$C=\frac{1}{1000}$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-331.jpg?height=285&width=474&top_left_y=302&top_left_x=923)  
(a) 求输入 $v_{0}$ 与输出 $v_{1}$ 之间的微分方程。  
(b) 若 $v_{1}\left(0^{-}\right)=2$，且 $v_{0}(t)=2 e^{-3 t}$，求 $v_{1}$。
### 7.19.2 带答案的练习题

7.101 使用拉普拉斯变换的定义，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) $x(t)=\sin (a t) u(t)$，其中 $a$ 为实常数；  
(b) $x(t)=\sinh (a t) u(t)$，其中 $\sinh t=\frac{1}{2}\left(e^{t}-e^{-t}\right)$，$a$ 为实常数；  
(c) $x(t)=\cosh (a t) u(t)$，其中 $\cosh t=\frac{1}{2}\left(e^{t}+e^{-t}\right)$，$a$ 为实常数；  
(d) $x(t)=u(t-a)-u(t-b)$，其中 $a$ 和 $b$ 为实常数，且 $a<b$。

简答：  
(a) $X(s)=\frac{a}{s^{2}+a^{2}}$，适用于 $\operatorname{Re}(s)>0$；  
(b) $X(s)=\frac{a}{s^{2}-a^{2}}$，适用于 $\operatorname{Re}(s)>|a|$；  
(c) $X(s)=\frac{s}{s^{2}-a^{2}}$，适用于 $\operatorname{Re}(s)>|a|$；  
(d) $X(s)=\frac{e^{-a s}-e^{-b s}}{s}$，适用于所有 $s \in \mathbb{C}$。

7.102 使用拉普拉斯变换的性质和拉普拉斯变换表，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) $x(t)=t^{2} e^{-t} u(t-1)$；  
(b) $x(t)=t^{2} u(t-1)$；  
(c) $x(t)=(t+1) u(t-1)$；  
(d) $x(t)=u(t-1)-u(t-2)$。

简答：  
(a) $X(s)=e^{-s-1}\left[\frac{s^{2}+4 s+5}{(s+1)^{3}}\right]$，适用于 $\operatorname{Re}(s)>-1$；  
(b) $X(s)=e^{-s}\left(\frac{s^{2}+2 s+2}{s^{3}}\right)$，适用于 $\operatorname{Re}(s)>0$；  
(c) $X(s)=e^{-s}\left(\frac{2 s+1}{s^{2}}\right)$，适用于 $\operatorname{Re}(s)>0$；  
(d) $X(s)=\frac{e^{-s}-e^{-2 s}}{s}$，适用于所有 $s$。

7.103 使用拉普拉斯变换的性质和拉普拉斯变换表，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) 
$$
x(t)=\begin{cases}t+1 & -1 \leq t<0 \\ (t-1)^{2} & 0 \leq t<1 \\ 0 & \text {其他情况;}\end{cases}
$$
(b) 
$$
x(t)= \begin{cases}t & -1 \leq t<1 \\ 0 & \text {其他情况.}\end{cases}
$$

简答：  
(a) $X(s)=\frac{s e^{s}-3 s-2 e^{-s}+2}{s^{3}}$，适用于所有 $s \in \mathbb{C}$；  
(b) $X(s)=\frac{e^{s}-e^{-s}-s e^{s}-s e^{-s}}{s^{2}}$，适用于所有 $s \in \mathbb{C}$。

7.104 使用拉普拉斯变换的性质和拉普拉斯变换表，求下列图示函数 $x$ 的拉普拉斯变换 $X$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-332.jpg?height=663&width=1463&top_left_y=291&top_left_x=348)

简答：  
(a) $X(s)=\frac{e^{2 s}-e^{s}-e^{-s}+e^{-2 s}}{s^{2}}$，适用于所有 $s \in \mathbb{C}$；  
(b) $X(s)=\frac{1-e^{-s}-s e^{-2 s}}{s^{2}}$，适用于所有 $s \in \mathbb{C}$；  
(c) $X(s)=\frac{e^{3 s}+e^{2 s}-e^{s}-1}{e^{3 s} s}$，适用于所有 $s \in \mathbb{C}$；  
(d) $X(s)=\frac{1-2 e^{-s}+e^{-2 s}}{s^{2}}$，适用于所有 $s \in \mathbb{C}$。

7.105 对下列各情况，求函数 $y$ 的拉普拉斯变换 $Y$，并用函数 $x$ 的拉普拉斯变换 $X$ 表示，其中 $X$ 和 $Y$ 的 ROC 分别为 $R_X$ 和 $R_Y$。  
(a) $y(t)=t(x * x)(t)$；  
(b) $y(t)=x * h\left(\frac{1}{3} t-1\right)$，其中 $h$ 为任意函数，拉普拉斯变换为 $H$，ROC 为 $R_H$；  
(c) $y(t)=(t+1)^{100} x(t+1)$；  
(d) $y(t)=t^{100} x(t+1)$；  
(e) $y(t)=(t+1)^{100} x(t)$。

简答：  
(a) $Y(s)=-2 X(s) \frac{d}{d s}[X(s)]$，适用于 $s \in R_X$；  
(b) $Y(s)=3 e^{-3 s} X(3 s) H(3 s)$，适用于 $s \in \frac{1}{3}\left(R_X \cap R_H\right)$；  
(c) $Y(s)=e^{s}\left(\frac{d}{d s}\right)^{100} X(s)$，适用于 $s \in R_X$；  
(d) $Y(s)=\left(\frac{d}{d s}\right)^{100}\left[e^{s} X(s)\right]$，适用于 $s \in R_X$；  
(e) $Y(s)=e^{s}\left(\frac{d}{d s}\right)^{100}\left[e^{-s} X(s)\right]$，适用于 $s \in R_X$。
7.106 使用拉普拉斯变换的性质以及已知拉普拉斯变换对，求下列函数 $x$ 的拉普拉斯变换 $X$。  
(a) $x(t)=t e^{-3 t} e^{-|t-2|}$，已知 $e^{-|t|} \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{-2}{s^{2}-1}$，适用于 $-1<\operatorname{Re}\{s\}<1$；  
(b) $x(t)=t e^{-5 t} u(t+3)$，已知 $u(t) \stackrel{\mathrm{LT}}{\longleftrightarrow} \frac{1}{s}$，适用于 $\operatorname{Re}\{s\}>0$。

简答：  
(a) $X(s)=\frac{d}{d s}\left(\frac{2 e^{-2(s+3)}}{s^{2}+6 s+8}\right)$，适用于 $-4<\operatorname{Re}(s)<-2$；  
(b) $X(s)=-e^{15} e^{3 s} \frac{3 s+14}{(s+5)^{2}}$，适用于 $\operatorname{Re}(s)>-5$。

7.107 求下列函数 $X$ 的逆拉普拉斯变换 $x$。  
(a) $X(s)=e^{-7 s} \frac{6 s+13}{(s+2)(s+3)}$，适用于 $\operatorname{Re}(s)>-2$；  
(b) $X(s)=\frac{-3 s+2}{(s+1)^{2}}$，适用于 $\operatorname{Re}(s)>-1$；  
(c) $X(s)=\frac{7 s^{2}+19 s+17}{(s+1)^{2}(s+2)}$，适用于 $\operatorname{Re}(s)>-1$；  
(d) $X(s)=\frac{s^{2}+s+2}{(s+1)^{2}}$，适用于 $\operatorname{Re}(s)>-1$；  
(e) $X(s)=\frac{3 s-5}{s^{2}-2 s-3}$，适用于 $\operatorname{Re}(s)<-1$；  
(f) $X(s)=\frac{s-7}{s^{2}-1}$，适用于 $-1<\operatorname{Re}(s)<1$。

简答：  
(a) $x(t)=e^{-2(t-7)} u(t-7)+5 e^{-3(t-7)} u(t-7)$；  
(b) $x(t)=5 t e^{-t} u(t)-3 e^{-t} u(t)$；  
(c) $x(t)=7 e^{-2 t} u(t)+5 t e^{-t} u(t)$；  
(d) $x(t)=\delta(t)-e^{-t} u(t)+2 t e^{-t} u(t)$；  
(e) $x(t)=-\left(2 e^{-t}+e^{3 t}\right) u(-t)$；  
(f) $x(t)=4 e^{-t} u(t)+3 e^{t} u(-t)$。

7.108 求函数 $X(s)=\frac{-3}{(s+2)(s-1)}$ 的逆拉普拉斯变换 $x$，其 ROC 为：  
(a) $-2<\operatorname{Re}(s)<1$；  
(b) $\operatorname{Re}(s)>1$；  
(c) $\operatorname{Re}(s)<-2$。

简答：  
(a) $x(t)=e^{-2 t} u(t)+e^{t} u(-t)$；  
(b) $x(t)=\left(e^{-2 t}-e^{t}\right) u(t)$；  
(c) $x(t)=\left(-e^{-2 t}+e^{t}\right) u(-t)$。

7.109 利用拉普拉斯变换计算卷积 $y(t)=x_{1} * x_{2}(t)$，其中：  
(a) $x_{1}(t)=e^{-a t} u(t)$，$x_{2}(t)=e^{-b t} u(t)$，$a$ 和 $b$ 为严格正的实数。  
[注：分两种情况讨论 $a=b$ 和 $a \neq b$]

简答：  
(a) 若 $a \neq b, y(t)=\frac{1}{b-a}\left(e^{-a t}-e^{-b t}\right) u(t)$；  
若 $a=b, y(t)=t e^{-a t} u(t)$。

7.110 对于因果 LTI 系统，输入为 $x$、输出为 $y$，其微分方程如下，求系统函数 $H$。  
(a) $\mathcal{D}^{2} y(t)+3 \mathcal{D} y(t)+2 y(t)=5 \mathcal{D} x(t)+7 x(t)$；  
(b) $\mathcal{D}^{2} y(t)-5 \mathcal{D} y(t)+6 y(t)=\mathcal{D} x(t)+7 x(t)$。

简答：  
(a) $H(s)=\frac{5 s+7}{(s+1)(s+2)}$，适用于 $\operatorname{Re}(s)>-1$；  
(b) $H(s)=\frac{s+7}{(s-2)(s-3)}$，适用于 $\operatorname{Re}(s)>3$。

7.111 对于输入为 $x$、输出为 $y$ 的 LTI 系统及下列系统函数 $H$，求描述系统的微分方程。  
(a) $H(s)=\frac{7 s+3}{15 s^{2}+4 s+1}$；  
(b) $H(s)=\frac{s^{2}+4}{s^{3}-s}$；  
(c) $H(s)=\frac{s^{2}+1}{s^{3}+6 s^{2}+11 s+6}$。

简答：  
(a) $15 \mathcal{D}^{2} y(t)+4 \mathcal{D} y(t)+y(t)=7 \mathcal{D} x(t)+3 x(t)$；  
(b) $\mathcal{D}^{3} y(t)-\mathcal{D} y(t)=\mathcal{D}^{2} x(t)+4 x(t)$；  
(c) $\mathcal{D}^{3} y(t)+6 \mathcal{D}^{2} y(t)+11 \mathcal{D} y(t)+6 y(t)=\mathcal{D}^{2} x(t)+x(t)$。

7.112 考虑下图所示 LTI 系统 $\mathcal{H}$，输入和输出的拉普拉斯变换分别为 $X$ 和 $Y$。图中每个子系统都是 LTI 系统，并标注了其系统函数。求系统 $\mathcal{H}$ 的系统函数 $H$，用 $A, B, C$ 表示。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-334.jpg?height=338&width=747&top_left_y=778&top_left_x=707)

简答：  
$H(s)=\frac{A(s)}{1-A(s)[B(s)+C(s)]}$。
7.113 对于下列 LTI 电路，输入为 $v_{0}$，输出为 $v_{1}$：  
(i) 求描述电路的微分方程；  
(ii) 求电路的系统函数 $H$；  
(iii) 判断电路是否 BIBO 稳定；  
(iv) 判断电路最接近的理想频率选择滤波器类型。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-334.jpg?height=725&width=1495&top_left_y=1777&top_left_x=334)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-335.jpg?height=301&width=677&top_left_y=297&top_left_x=464)  
(e)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-335.jpg?height=287&width=671&top_left_y=305&top_left_x=1277)  
(f)

简答：  
(a) $\mathcal{D} v_{0}(t)=\mathcal{D} v_{1}(t)+\frac{1}{R C} v_{1}(t)$；$H(s)=\frac{R C s}{R C s+1}$，适用于 $\operatorname{Re}(s)>-\frac{1}{R C}$；BIBO 稳定；高通滤波器；  
(b) $v_{1}(t)=\frac{L}{R} \mathcal{D} v_{0}(t)-\frac{L}{R} \mathcal{D} v_{1}(t)$；$H(s)=\frac{L s}{L s+R}$，适用于 $\operatorname{Re}(s)>-\frac{R}{L}$；BIBO 稳定；高通滤波器；  
(c) $v_{0}(t)=L C \mathcal{D}^{2} v_{1}(t)+R C \mathcal{D} v_{1}(t)+v_{1}(t)$；$H(s)=\frac{1}{L C s^{2}+R C s+1}$，适用于 $\operatorname{Re}(s)>\operatorname{Re}\left(\frac{-R C+\sqrt{(R C)^{2}-4 L C}}{2 L C}\right)$；BIBO 稳定；低通滤波器；  
(d) $\mathcal{D} v_{0}(t)=\frac{L}{R} \mathcal{D}^{2} v_{1}(t)+\mathcal{D} v_{1}(t)+\frac{1}{R C} v_{1}(t)$；$H(s)=\frac{R C s}{L C s^{2}+R C s+1}$，适用于 $\operatorname{Re}(s)>\operatorname{Re}\left(\frac{-R C+\sqrt{(R C)^{2}-4 L C}}{2 L C}\right)$；BIBO 稳定；带通滤波器，通带中心 $\pm \frac{1}{\sqrt{L C}}$；  
(e) $\mathcal{D}^{2} v_{0}(t)=\mathcal{D}^{2} v_{1}(t)+\frac{R}{L} \mathcal{D} v_{1}(t)+\frac{1}{L C} v_{1}(t)$；$H(s)=\frac{L C s^{2}}{L C s^{2}+R C s+1}$，适用于 $\operatorname{Re}(s)>\operatorname{Re}\left(\frac{-R C+\sqrt{(R C)^{2}-4 L C}}{2 L C}\right)$；BIBO 稳定；高通滤波器；  
(f) $\mathcal{D} v_{0}(t)=R C \mathcal{D}^{2} v_{1}(t)+\mathcal{D} v_{1}(t)+\frac{R}{L} v_{1}(t)$；$H(s)=\frac{L s}{R L C s^{2}+L s+R}$，适用于 $\operatorname{Re}(s)>\operatorname{Re}\left(\frac{-L+\sqrt{L^{2}-4 R^{2} L C}}{2 R L C}\right)$；BIBO 稳定；带通滤波器，通带中心 $\pm \frac{1}{\sqrt{L C}}$。

7.114 考虑系统 $\mathcal{A}$，输入为 $X$，输出为 $Y$。图中每个子系统都是因果 LTI 系统，并标注了系统函数。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-335.jpg?height=249&width=630&top_left_y=1537&top_left_x=886)

对于下列各情况，  
(i) 求系统 $\mathcal{A}$ 的系统函数 $A$；  
(ii) 判断系统 $\mathcal{A}$ 是否 BIBO 稳定。

简答：  
(a.i) $A(s)=\frac{1}{s+a}$，适用于 $\operatorname{Re}(s)>-a$；  
(a.ii) BIBO 稳定当且仅当 $a>0$；  
(b.i) $A(s)=\begin{cases}\frac{a}{s+a}, & \operatorname{Re}(s)>-a, a\neq 0 \\ 0, & s \in \mathbb{C}, a=0 \end{cases}$；  
(b.ii) BIBO 稳定当且仅当 $a \ge 0$；  
(c.i) $A(s)=\frac{2 s}{(1-6 a) s-1}$，适用于 $\operatorname{Re}(s)>\frac{1}{1-6 a}$；  
(c.ii) BIBO 稳定当且仅当 $a>\frac{1}{6}$；  
(d.i) $A(s)=\frac{a}{s^{2}+2 s+a}$，适用于 $\operatorname{Re}(s)>-1+\operatorname{Re}\{\sqrt{1-a}\}$（假设 $a\neq 0$）；  
(d.ii) BIBO 稳定当且仅当 $a>0$（假设 $a\neq 0$）。

7.115 考虑下图所示系统，输入为 $X$，输出为 $Y$。图中每个子系统都是因果 LTI 系统，并标注了系统函数；且 $P(s)=1/s$, $C(s)=a s+3$, $Q(s)=1$，$a$ 为实常数。  
(a) 求系统 $\mathcal{H}$ 的系统函数 $H$；  
(b) 判断系统 $\mathcal{H}$ BIBO 稳定的 $a$ 的取值范围。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-336.jpg?height=247&width=769&top_left_y=675&top_left_x=696)

简答：  
(a) $H(s)=\frac{a s+3}{s+a s+3}$，适用于 $\operatorname{Re}(s)>\frac{-3}{a+1}$；  
(b) BIBO 稳定当且仅当 $a>-1$。
7.116 下列各图显示系统 $\mathfrak{H}$，输入为 $X$ 的拉普拉斯变换，输出为 $Y$ 的拉普拉斯变换。图中每个子系统都是因果 LTI 系统，并标注了系统函数，$a$ 为实常数。  
(i) 求系统 $\mathcal{H}$ 的系统函数 $H$；  
(ii) 判断系统 $\mathcal{H}$ 是否 BIBO 稳定。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-336.jpg?height=1203&width=1565&top_left_y=1299&top_left_x=259)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-337.jpg?height=230&width=568&top_left_y=297&top_left_x=875)  
(g)

简答：

(a.i) $H(s)=\frac{s^{2}+a s+2}{s^{2}+3 s+4}$，适用于 $\operatorname{Re}(s)>-\frac{3}{2}$；  
(a.ii) 对所有 $a$，系统 BIBO 稳定；  

(b.i) $H(s)=\frac{s+10}{s-a}$，适用于 $\operatorname{Re}(s)>a$（当 $a=-10$ 时除外）；  
(b.ii) 系统 BIBO 稳定当且仅当 $a<0$；  

(c.i) $H(s)=\frac{s^{2}+4}{s^{2}+(1-2 a) s+a^{2}-a}=\frac{(s+2 j)(s-2 j)}{(s-a+1)(s-a)}$，适用于 $\operatorname{Re}(s)>a$；  
(c.ii) 系统 BIBO 稳定当且仅当 $a<0$；  

(d.i) $H(s)=\frac{3 s+2}{s^{2}+2 s+a^{2}+1}=\frac{3\left(s+\frac{2}{3}\right)}{(s+1+j a)(s+1-j a)}$，适用于 $\operatorname{Re}(s)>-1$；  
(d.ii) 对所有 $a$，系统 BIBO 稳定；  

(e.i) $H(s)=\frac{s+2}{s-a+1}$，适用于 $\operatorname{Re}(s)>a-1$（当 $a=-1$ 时除外）；  
(e.ii) 系统 BIBO 稳定当且仅当 $a<1$；  

(f.i) $H(s)=\frac{s+6}{s-2 a+2}$，适用于 $\operatorname{Re}(s)>2 a-2$（当 $a=-2$ 时除外）；  
(f.ii) 系统 BIBO 稳定当且仅当 $a<1$；  

(g.i) $H(s)=\frac{s-1}{s-a+1}=\frac{s-1}{s-(a-1)}$，适用于 $\operatorname{Re}(s)>a-1$（当 $a=2$ 时除外）；  
(g.ii) 系统 BIBO 稳定当且仅当 $a<1$ 或 $a=2$。

7.117 考虑为建筑房间设计恒温器系统，输入 $x$ 为期望室温，输出 $y$ 为实际室温。系统建模为 LTI 系统，系统函数为 $H$。  
判断下列哪个系统函数 $H_1$ 或 $H_2$ 更适合作为 $H$，并说明理由。[提示：考虑系统的单位阶跃响应]。  
(a) $H_{1}(s)=\frac{s^{2}}{s^{2}+9}$；  
(b) $H_{2}(s)=1+\frac{1}{20}\left[\frac{s(s+10)}{(s+10)^{2}+1}\right]$。

简答：$H_2$。

7.118 对于下列描述因果（增量线性 TI）系统的微分方程，求在给定输入 $x$ 和初值条件下的输出 $y$。  
(a) $\mathcal{D}^{2} y(t)+4 \mathcal{D} y(t)+3 y(t)=x(t)$，其中 $x(t)=u(t)$，$y(0^-)=0$，$\mathcal{D} y(0^-)=1$；  
(b) $\mathcal{D}^{2} y(t)+5 \mathcal{D} y(t)+6 y(t)=x(t)$，其中 $x(t)=\delta(t)$，$y(0^-)=1$，$\mathcal{D} y(0^-)=-1$。

简答：  
(a) $y(t)=\frac{1}{3}-\frac{1}{3} e^{-3 t}$，$t \ge 0$；  
(b) $y(t)=3 e^{-2 t}-2 e^{-3 t}$，$t \ge 0$。

7.119 设 $X$ 为 $x$ 的拉普拉斯变换。假设 $x$ 是绝对可积的且 $X$ 是有理函数，已知其在 1 处有极点，其他极点未知。判断 $x$ 是否可以为下列类型：  
(a) 左侧信号（非右侧信号）；  
(b) 右侧信号（非左侧信号）；  
(c) 双侧信号；  
(d) 有限持续时间信号。

简答：  
(a) 可以；(b) 不可以；(c) 可以；(d) 不可以。

7.120 对于下列每个 $X$，求其逆拉普拉斯变换 $x$。  
(a) $X(s)=\frac{e^{-3 s}}{s(s+1)}$，适用于 $\operatorname{Re}(s)>0$；  
(b) $X(s)=7\left(e^{-2 s}-e^{-3 s}\right)$，适用于所有 $s \in \mathbb{C}$；  
(c) $X(s)=\frac{1-e^{-5 s}}{(s+1)(s+2)}$，适用于 $\operatorname{Re}(s)>-1$。

简答：  
(a) $x(t)=\left[1-e^{-(t-3)}\right] u(t-3)$；  
(b) $x(t)=7[\delta(t-2)-\delta(t-3)]$；  
(c) $x(t)=\left[e^{-t}-e^{-2 t}\right] u(t)-\left[e^{5-(t)}-e^{2(5-t)}\right] u(t-5)$。

### 7.19.3 MATLAB 练习

7.201 考虑一个因果 LTI 系统，其系统函数为
$$
H(s)=\frac{1}{-2 s^{7}-s^{6}-3 s^{5}+2 s^{3}+s-3}
$$
(a) 使用 MATLAB 求解并绘制 $H$ 的极点。  
(b) 判断该系统是否 BIBO 稳定。

7.202 考虑一个 LTI 系统，其系统函数为
$$
H(s)=\frac{1}{1.0000 s^{4}+2.6131 s^{3}+3.4142 s^{2}+2.6131 s+1.0000}
$$

（该系统对应一个截止频率为 $1 \mathrm{rad}/\mathrm{s}$ 的四阶巴特沃斯低通滤波器。）  
绘制系统对以下输入 $x$ 的响应 $y$，在每种情况下，将 $y$ 绘制在区间 $[0,20]$ 内。  
(a) $x=\delta$；  
(b) $x=u$。  

提示：MATLAB 中的 `tf`、`impulse` 和 `step` 函数可能会很有用。
