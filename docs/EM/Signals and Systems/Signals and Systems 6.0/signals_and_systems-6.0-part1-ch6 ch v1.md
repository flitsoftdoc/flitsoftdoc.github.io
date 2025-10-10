# 第6章 连续时间傅里叶变换

## 6.1 引言

连续时间（CT）傅里叶级数为周期函数提供了一种极其有用的表示方法。然而，实际上我们常常需要处理非周期函数。在这种情况下，需要比傅里叶级数更通用的工具。本章将介绍一种用于表示任意（即可能是非周期）函数的工具，称为傅里叶变换。

## 6.2 非周期函数的连续时间傅里叶变换的推导

如前所示，傅里叶级数是一种非常有用的函数表示方法。不幸的是，这种表示只能用于周期函数，因为傅里叶级数本质上是周期性的。然而，许多函数并非周期函数。因此，人们可能会想，我们是否可以以某种方式使用傅里叶级数来发展非周期函数的表示。事实证明，这是可能的。为了理解原因，我们必须做出以下关键观察：非周期函数可以被视为周期无限大的周期函数。通过将非周期函数视为周期函数的极限情况（周期趋于无穷大），我们可以使用傅里叶级数来发展一种更通用的函数表示方法，可用于非周期情况。（在下面的推导中，傅里叶变换的推导并不完全严格，因为我们假设各种积分、求和和极限都收敛。这样的假设并非在所有情况下都成立。然而，只要所考虑函数的傅里叶变换存在，我们的推导在数学上是合理的。）

假设我们有一个非周期函数 $x$。由 $x$ 定义函数 $x_{T}$ 为

$$
x_{T}(t)= \begin{cases}x(t) & -\frac{T}{2} \leq t<\frac{T}{2}  \tag{6.1}\\ 0 & \text { 其他情况 }\end{cases}
$$

换句话说，$x_{T}(t)$ 在区间 $-\frac{T}{2} \leq t<\frac{T}{2}$ 内与 $x(t)$ 相同，其它情况下为零。现在我们重复 $x_{T}(t)$ 在 $-\frac{T}{2} \leq t<\frac{T}{2}$ 内的部分以形成一个 $T$-周期函数 $\tilde{x}$。也就是说，我们定义 $\tilde{x}$ 为

$$
\tilde{x}(t)=x_{T}(t) \text { 对于 }-\frac{T}{2} \leq t<\frac{T}{2} \quad \text { 且 } \quad \tilde{x}(t)=\tilde{x}(t+T) .
$$

在图6.1和6.2中，我们给出了函数 $x, x_{T}$ 和 $\tilde{x}$ 的示例。
在进一步推进之前，我们做两个重要的观察，这将在后续使用。首先，由 $x_{T}$ 的定义，我们有

$$
\begin{equation*}
\lim _{T \rightarrow \infty} x_{T}(t)=x(t) \tag{6.2}
\end{equation*}
$$

其次，由 $x_{T}$ 和 $\tilde{x}$ 的定义，我们有

$$
\begin{equation*}
\lim _{T \rightarrow \infty} \tilde{x}(t)=x(t) \tag{6.3}
\end{equation*}
$$

现在，考虑函数 $\tilde{x}$。由于 $\tilde{x}$ 是周期函数，我们可以使用傅里叶级数表示它为

$$
\begin{equation*}
\tilde{x}(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \tag{6.4}
\end{equation*}
$$

其中

$$
\begin{equation*}
a_{k}=\frac{1}{T} \int_{-T / 2}^{T / 2} \tilde{x}(t) e^{-j k \omega_{0} t} d t \tag{6.5}
\end{equation*}
$$

且 $\omega_{0}=\frac{2 \pi}{T}$。由于 $x_{T}(t)=\tilde{x}(t)$ 对于 $-\frac{T}{2} \leq t<\frac{T}{2}$，我们可以将 (6.5) 改写为

$$
a_{k}=\frac{1}{T} \int_{-T / 2}^{T / 2} x_{T}(t) e^{-j k \omega_{0} t} d t
$$

此外，由于 $x_{T}(t)=0$ 对于 $t<-\frac{T}{2}$ 和 $t \geq \frac{T}{2}$，我们可以将上述 $a_{k}$ 的表达式改写为

$$
a_{k}=\frac{1}{T} \int_{-\infty}^{\infty} x_{T}(t) e^{-j k \omega_{0} t} d t
$$

将这个 $a_{k}$ 的表达式代入 (6.4) 并重新排列，我们得到 $\tilde{x}$ 的傅里叶级数表示：

$$
\begin{aligned}
\tilde{x}(t) & =\sum_{k=-\infty}^{\infty}\left[\frac{1}{T} \int_{-\infty}^{\infty} x_{T}(\tau) e^{-j k \omega_{0} \tau} d \tau\right] e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty}\left[\frac{\omega_{0}}{2 \pi} \int_{-\infty}^{\infty} x_{T}(\tau) e^{-j k \omega_{0} \tau} d \tau\right] e^{j k \omega_{0} t} \\
& =\frac{1}{2 \pi} \sum_{k=-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{T}(\tau) e^{-j k \omega_{0} \tau} d \tau\right] e^{j k \omega_{0} t} \omega_{0}
\end{aligned}
$$

将上述 $\tilde{x}$ 的表达式代入 (6.3)，我们得到

$$
\begin{equation*}
x(t)=\lim _{T \rightarrow \infty} \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{T}(\tau) e^{-j k \omega_{0} \tau} d \tau\right] e^{j k \omega_{0} t} \omega_{0} \tag{6.6}
\end{equation*}
$$

现在，我们必须计算上述极限。当 $T \rightarrow \infty$ 时，有 $\omega_{0} \rightarrow 0$。因此，在上述极限中，$k \omega_{0}$ 变为连续变量，我们记为 $\omega$，$\omega_{0}$ 变为无穷小 $d\omega$，求和变为积分。这在图6.3中有所说明。此外，当 $T \rightarrow \infty$ 时，有 $x_{T} \rightarrow x$。结合这些结果，我们可以改写 (6.6) 为

$$
x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega
$$

其中

$$
X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t
$$

因此，我们找到了非周期函数 $x$ 的一种表示方法，以所有频率的复指数形式表示。我们称之为函数 $x$ 的傅里叶变换表示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-167.jpg?height=1255&width=987&top_left_y=699&top_left_x=629){width="400"}


图6.1：用于傅里叶变换表示推导的函数示例，其中 $T_{1}>\frac{T}{2}$。(a) 非周期函数 $x$；(b) 函数 $x_{T}$；(c) $T$-周期函数 $\tilde{x}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-168.jpg?height=1257&width=1413&top_left_y=367&top_left_x=289){width="400"}


图6.2：用于傅里叶变换表示推导的函数示例，其中 $T_{1}<\frac{T}{2}$。(a) 非周期函数 $x$；(b) 函数 $x_{T}$；(c) $T$-周期函数 $\tilde{x}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-168.jpg?height=407&width=816&top_left_y=1909&top_left_x=543){width="400"}


图6.3：傅里叶变换表示推导中得到的积分。

## 6.3 广义傅里叶变换

在上一节中，我们通过傅里叶级数的分析与综合方程，利用极限过程推导出一种新的数学工具，称为傅里叶变换。事实证明，许多实际感兴趣的函数并不具有之前定义意义下的傅里叶变换。也就是说，对于给定函数 $x$，傅里叶变换积分

$$
X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t
$$

可能不收敛，在这种情况下，函数 $x$ 的傅里叶变换 $X$ 不存在。例如，如果 $x$ 是以下任意一种函数（以及许多其他可能情况），上述积分就不收敛：

- 非零常数函数；
- 周期函数（例如实数或复数正弦函数）；
- 单位阶跃函数（即 $u$）；或
- 符号函数（即 sgn）。

然而，这类函数在实际应用中非常重要。因此，迫切需要一种能够处理此类函数的数学工具。这促使了所谓**广义傅里叶变换**的发展。**广义傅里叶变换**对周期函数、非零常数函数以及许多其他类型的函数都是存在的。广义傅里叶变换背后的数学原理相当复杂，因此我们不会在此正式推导。虽然不完全严格，但可以将广义傅里叶变换视为通过与经典傅里叶变换相同的公式来定义的。因此，出于这个以及其他原因，我们在大多数情况下可以忽略广义傅里叶变换与经典傅里叶变换之间的区别，将它们视为同一概念。在接下来的内容中，除少数有益于区分的地方外，我们将避免区分经典傅里叶变换和广义傅里叶变换。

不正式引入广义傅里叶变换的主要缺点是，后续展示的一些结果（实际上依赖于广义傅里叶变换的使用）必须凭直觉接受，因为其证明需要正式的广义傅里叶变换知识，而本文未引入。只要使用广义傅里叶变换，周期函数和非周期函数都可以处理，从这个意义上说，它比傅里叶级数（仅适用于周期函数）更为通用。后来，当我们讨论周期函数的傅里叶变换时，我们将在该上下文中隐含地使用广义傅里叶变换。事实上，在后续的大部分内容中，当我们谈论傅里叶变换时，通常指的就是广义傅里叶变换。

## 6.4 连续时间傅里叶变换的定义

前面，我们推导了函数的傅里叶变换表示。这种表示将函数用所有频率的复指数表示。更正式地，函数 $x$ 的傅里叶变换，记作 $\mathcal{F} x$ 或 $X$，定义为

$$
\begin{equation*}
\mathcal{F} x(\omega)=X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t \tag{6.7}
\end{equation*}
$$

类似地，$X$ 的逆傅里叶变换，记作 $\mathcal{F}^{-1} X$ 或 $x$，为

$$
\begin{equation*}
\mathcal{F}^{-1} X(t)=x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega \tag{6.8}
\end{equation*}
$$

我们将 (6.7) 称为傅里叶变换分析方程，(6.8) 称为傅里叶变换综合方程。为了表示函数 $x$ 的傅里叶变换为 $X$，我们可以写作

$$
x(t) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} X(\omega) .
$$

在术语上，$x$ 与 $X$ 构成傅里叶变换对。

**例6.1 **（单位脉冲函数的傅里叶变换）

求函数

$$
x(t)=A \delta\left(t-t_{0}\right)
$$

的傅里叶变换 $X$，其中 $A$ 和 $t_{0}$ 为实常数。然后根据此结果写出 $x$ 的傅里叶变换表示。

**解答**：根据傅里叶变换的定义，我们有

$$
\begin{aligned}
X(\omega) & =\int_{-\infty}^{\infty} A \delta\left(t-t_{0}\right) e^{-j \omega t} d t \\
& =A \int_{-\infty}^{\infty} \delta\left(t-t_{0}\right) e^{-j \omega t} d t
\end{aligned}
$$

利用单位脉冲函数的抽取性质，上式可简化为

$$
\begin{aligned}
X(\omega) & =\left.A\left[e^{-j \omega t}\right]\right|_{t=t_{0}} \\
& =A e^{-j \omega t_{0}}
\end{aligned}
$$

因此，我们得到

$$
A \boldsymbol{\delta}\left(t-t_{0}\right) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} A e^{-j \omega t_{0}} .
$$

根据傅里叶变换的分析和综合方程，$x$ 的傅里叶变换表示为

$$
x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega, \quad \text { 其中 } \quad X(\omega)=A e^{-j \omega t_{0}}
$$

**例6.2** （单位脉冲函数的逆傅里叶变换）

求函数

$$
X(\omega)=2 \pi A \delta\left(\omega-\omega_{0}\right)
$$

的逆傅里叶变换 $x$，其中 $A$ 和 $\omega_{0}$ 为实常数。

**解答**：根据逆傅里叶变换的定义，我们有

$$
\begin{aligned}
x(t) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} 2 \pi A \delta\left(\omega-\omega_{0}\right) e^{j \omega t} d \omega \\
& =A \int_{-\infty}^{\infty} \delta\left(\omega-\omega_{0}\right) e^{j \omega t} d \omega
\end{aligned}
$$

利用单位脉冲函数的抽取性质，上式可简化为

$$
x(t)=A e^{j \omega_{0} t}
$$

因此，我们得到

$$
A e^{j \omega_{0} t} \stackrel{\mathrm{CTFT}}{\longleftrightarrow} 2 \pi A \delta\left(\omega-\omega_{0}\right) .
$$

**例6.3**（矩形函数的傅里叶变换）

求函数

$$
x(t)=\operatorname{rect} t
$$

的傅里叶变换 $X$。

**解答**：根据傅里叶变换的定义，我们有
$$
X(\omega)=\int_{-\infty}^{\infty} \operatorname{rect}(t) e^{-j \omega t} d t
$$

根据矩形函数的定义，可简化为

$$
\begin{aligned}
X(\omega) & =\int_{-1 / 2}^{1 / 2} \operatorname{rect}(t) e^{-j \omega t} d t \\
& =\int_{-1 / 2}^{1 / 2} e^{-j \omega t} d t
\end{aligned}
$$

计算积分并化简，得到

$$
\begin{aligned}
X(\omega) & =\left.\left[-\frac{1}{j \omega} e^{-j \omega t}\right]\right|_{-1 / 2} ^{1 / 2} \\
& =\frac{1}{j \omega}\left(e^{j \omega / 2}-e^{-j \omega / 2}\right) \\
& =\frac{1}{j \omega}\left[2 j \sin \left(\frac{1}{2} \omega\right)\right] \\
& =\frac{2}{\omega} \sin \left(\frac{1}{2} \omega\right) \\
& =\left[\sin \left(\frac{1}{2} \omega\right)\right] /\left(\frac{1}{2} \omega\right) \\
& =\operatorname{sinc}\left(\frac{1}{2} \omega\right)
\end{aligned}
$$

因此，我们得到

$$
\operatorname{rect} t \stackrel{\mathrm{CTFT}}{\longleftrightarrow} \operatorname{sinc}\left(\frac{1}{2} \omega\right) .
$$

## 6.5 关于傅里叶变换符号的说明

傅里叶变换算子 $\mathcal{F}$ 和逆傅里叶变换算子 $\mathcal{F}^{-1}$ 都将一个函数映射为另一个函数。因此，这些算子的操作对象必须是函数（而不是数值）。考虑图6.4所示的将 $t$ 映射为 $e^{-|t|}$ 的匿名函数。假设我们想写一个表示该函数傅里叶变换的表达式。起初，我们可能倾向于写作“$\mathcal{F}\left\{e^{-|t|}\right\}$”。然而严格来说，这种写法并不正确，因为傅里叶变换算子要求操作对象是一个函数，而“$e^{-|t|}$”（严格来说）表示的是一个数值（即图中函数在 $t$ 处的取值）。本质上，这里问题的根源在于该函数没有名称（例如 “$x$”）来引用它。为解决这个问题，我们可以定义函数 $x$，使得 $x(t)=e^{-|t|}$，然后写作傅里叶变换为“$\mathcal{F} x$”。然而，为了符号上的严格正确而引入新的函数名称通常是不理想的，因为这会导致书写过于冗长。

避免对匿名函数书写过于冗长的方法之一是使用点符号（dot notation），在第2.1节中已介绍。再次考虑图6.4中的函数，将 $t$ 映射为 $e^{-|t|}$。使用严格正确的符号，我们可以将该函数的傅里叶变换写作“$\mathcal{F}\left\{e^{-|\cdot|}\right\}$”。换句话说，我们可以通过使用点符号来表示一个表达式引用的是函数（而不是函数的值）。点符号的示例见下文例6.4。点符号在希望使用严格符号而不显得冗长时非常有用。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-172.jpg?height=663&width=833&top_left_y=291&top_left_x=583){width="400"}


图6.4：$e^{-|t|}$ 随 $t$ 的变化图。

**例6.4 **（点符号的使用）

使用点符号的几个示例如下：

1. 表示由 $x(t)=e^{t^{2}}$ 定义的函数 $x$ 的傅里叶变换（无需引入命名函数 $x$）：$\mathcal{F}\left\{e^{(\cdot)^{2}}\right\}$。
2. 表示上述函数在 $2 \omega-3$ 处的傅里叶变换：$\mathcal{F}\left\{e^{(\cdot)^{2}}\right\}(2 \omega-3)$。
3. 表示由 $X(\omega)=\frac{1}{j \omega}$ 定义的函数 $X$ 的逆傅里叶变换：$\mathcal{F}^{-1}\left\{\frac{1}{j(\cdot)}\right\}$。
4. 表示上述函数在 $t-3$ 处的逆傅里叶变换：$\mathcal{F}^{-1}\left\{\frac{1}{j(\cdot)}\right\}(t-3)$。

如果读者熟悉点符号，建议在适当情况下使用。由于有些读者可能会觉得点符号难以理解，本书（大体上）尽量减少点符号的使用。作为折中方案，本书采用以下符号约定，以在不广泛使用点符号的情况下实现简明和合理的清晰度：

- 除非另有说明，傅里叶变换算子 $\mathcal{F}$ 的操作对象表达式中，“$t$”被假定为所作用函数的自变量（即按点符号理解，该表达式视为每个“$t$”都是“·”）。
- 除非另有说明，逆傅里叶变换算子 $\mathcal{F}^{-1}$ 的操作对象表达式中，“$\omega$”被假定为所作用函数的自变量（即按点符号理解，该表达式视为每个“$\omega$”都是“·”）。

下文例6.5中给出了一些使用本书符号约定的示例。诚然，这些符号约定并不理想，因为在一定程度上对数学符号有所滥用，但它们似乎是最佳折中方案，以适应那些可能不愿使用点符号的读者。

**例6.5 **（书中采用的符号约定）

使用本书大部分章节中采用的符号约定（如上所述）的几个示例：

1. 表示由 $x(t)=e^{t^{2}}$ 定义的函数 $x$ 的傅里叶变换（无需引入命名函数 $x$）：$\mathcal{F}\left\{e^{t^{2}}\right\}$。
2. 表示上述函数在 $2 \omega-3$ 处的傅里叶变换：$\mathcal{F}\left\{e^{t^{2}}\right\}(2 \omega-3)$。
3. 表示由 $X(\omega)=\frac{1}{j \omega}$ 定义的函数 $X$ 的逆傅里叶变换：$\mathcal{F}^{-1}\left\{\frac{1}{j \omega}\right\}$。
4. 表示上述函数在 $t-3$ 处的逆傅里叶变换：$\mathcal{F}^{-1}\left\{\frac{1}{j \omega}\right\}(t-3)$。

由于对函数应用傅里叶变换算子或逆傅里叶变换算子会得到另一个函数，因此我们可以在某个值处计算该函数。例如，考虑图6.4中的函数，将 $t$ 映射为 $e^{-|t|}$。要表示该函数傅里叶变换在 $\omega-1$ 处的取值，可使用点符号写作“$\mathcal{F}\left\{e^{-|\cdot|}\right\}(\omega-1)$”，或使用书中符号约定写作“$\mathcal{F}\left\{e^{-|t|}\right\}(\omega-1)$”。

## 6.6 连续时间傅里叶变换的收敛性

在前面推导傅里叶变换表示时，我们隐含地对积分和其他表达式的收敛性做了一些假设。然而，这些假设并非总是成立。因此，有必要对傅里叶变换的收敛性进行更为仔细的考察。

假设我们有一个任意函数 $x$。该函数的傅里叶变换表示 $\hat{x}$ 为

$$
\hat{x}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega, \quad \text { 其中 } \quad X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t
$$

现在，我们需要关注这一表示的收敛性。换句话说，我们希望知道 $\hat{x}$ 在何时是 $x$ 的有效表示。在前面的傅里叶变换推导中，我们大量依赖傅里叶级数。因此，可以预期傅里叶变换表示的收敛性与傅里叶级数的收敛性质密切相关。事实证明，确实如此。傅里叶变换的收敛性与傅里叶级数的收敛性非常相似（参见第5.4节）。

第一个关于收敛的重要结果涉及连续函数，如下定理所述：

**定理6.1（傅里叶变换的收敛性（连续情况））**  
如果函数 $x$ 是连续且绝对可积的（即 $\int_{-\infty}^{\infty}|x(t)| d t<\infty$），且 $x$ 的傅里叶变换 $X$ 也是绝对可积的（即 $\int_{-\infty}^{\infty}|X(\omega)| d \omega<\infty$），那么 $x$ 的傅里叶变换表示在每一点收敛（即对所有 $t$，$x(t)=\hat{x}(t)$）。

**证明**：本书不提供该结论的严格证明。

由于在实践中，我们经常遇到不连续函数（例如矩形脉冲），上述结果有时价值有限。因此，需要考虑关于收敛性的其他结果。

下一个重要的收敛性结果涉及有限能量函数，如下定理所述：

**定理6.2（傅里叶变换的收敛性（有限能量情况））**  
如果函数 $x$ 是有限能量的（即 $\int_{-\infty}^{\infty}|x(t)|^{2} d t< \infty$），则其傅里叶变换表示 $\hat{x}$ 在均方误差（MSE）意义下收敛。

**证明**：本书不提供该结论的严格证明。

换句话说，前述定理表明，如果 $x$ 是有限能量的，则

$$
E=\int_{-\infty}^{\infty}|\hat{x}(t)-x(t)|^{2} d t=0
$$

尽管 $x$ 与 $\hat{x}$ 在个别点可能不同，但二者差值的能量 $E$ 为零。

最后一个关于收敛的结果涉及所谓的狄利克雷条件（Dirichlet conditions）。函数 $x$ 满足狄利克雷条件需满足以下要求：

1. 函数 $x$ 绝对可积（即 $\int_{-\infty}^{\infty}|x(t)| d t<\infty$）。
2. 函数 $x$ 在任意有限区间内有有限个极大值和极小值（即函数变化有限）。
3. 函数 $x$ 在任意有限区间内有有限个不连续点，并且每个不连续点的跳变是有限的。

对于满足狄利克雷条件的函数 $x$，我们有以下重要收敛性结果：

**定理6.3（傅里叶变换的收敛性（狄利克雷情况））**  
如果函数 $x$ 满足狄利克雷条件，则其傅里叶变换表示 $\hat{x}$ 在每个连续点处逐点收敛，而在不连续点 $t_a$ 处，

$$
\hat{x}\left(t_{a}\right)=\frac{1}{2}\left[x\left(t_{a}^{-}\right)+x\left(t_{a}^{+}\right)\right],
$$

其中 $x\left(t_{a}^{-}\right)$ 和 $x\left(t_{a}^{+}\right)$ 分别表示不连续点左侧和右侧的函数值。

**证明**：本书不提供该结论的严格证明。

换句话说，定理表明，对于满足狄利克雷条件的函数 $x$，傅里叶变换表示 $\hat{x}$ 在所有连续点处满足 $\hat{x}(t)=x(t)$，而在不连续点处，$\hat{x}(t)$ 等于不连续点两侧函数值的平均值。

上述有限能量条件和狄利克雷条件仅为傅里叶变换表示收敛的充分条件，而非必要条件。也就是说，即使某函数不满足这些条件，它仍可能具有有效的傅里叶变换表示。

### 例6.6

考虑图6.5所示的函数 $x$。设 $\hat{x}$ 为 $x$ 的傅里叶变换表示（即 $\hat{x}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega$，其中 $X$ 为 $x$ 的傅里叶变换）。求 $\hat{x}\left(-\frac{1}{2}\right)$ 和 $\hat{x}\left(\frac{1}{2}\right)$ 的值。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-174.jpg?height=338&width=500&top_left_y=297&top_left_x=751){width="400"}


图6.5：函数 $x$。

**解答**：首先观察到 $x$ 满足狄利克雷条件，因此定理6.3适用。由此得到

$$
\begin{aligned}
\hat{x}\left(-\frac{1}{2}\right) & =\frac{1}{2}\left[x\left(-\frac{1}{2}^{-}\right)+x\left(-\frac{1}{2}^{+}\right)\right] \\
& =\frac{1}{2}(0+1) \\
& =\frac{1}{2}, \\
\hat{x}\left(\frac{1}{2}\right) & =\frac{1}{2}\left[x\left(\frac{1}{2}^{-}\right)+x\left(\frac{1}{2}^{+}\right)\right] \\
& =\frac{1}{2}(1+0) \\
& =\frac{1}{2}.
\end{aligned}
$$

## 6.7 连续时间傅里叶变换的性质

傅里叶变换具有许多重要的性质。在接下来的各节中，我们将介绍其中的若干性质。为了方便起见，这些性质在后面的表 6.1（第 181 页）中也有总结。此外，为了方便起见，几个傅里叶变换对在后面的表 6.2（第 185 页）中给出。在下文中，我们有时会引用该表中的变换对。

### 6.7.1 线性性

可以说，傅里叶变换最重要的性质是线性性，如下所示。

**定理 6.4（线性性）** 如果 $x_{1}(t) \stackrel{CTFT}{\longleftrightarrow} X_{1}(\omega)$ 且 $x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} X_{2}(\omega)$，则
$$
a_{1} x_{1}(t)+a_{2} x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} a_{1} X_{1}(\omega)+a_{2} X_{2}(\omega),
$$
其中 $a_{1}$ 和 $a_{2}$ 是任意复数常数。

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(t)=a_{1} x_{1}(t)+a_{2} x_{2}(t)$，并设 $Y=\mathcal{F}\{y\}$。则有

$$
\begin{aligned}
Y(\omega) & =\int_{-\infty}^{\infty}\left[a_{1} x_{1}(t)+a_{2} x_{2}(t)\right] e^{-j \omega t} d t \\
& =\int_{-\infty}^{\infty} a_{1} x_{1}(t) e^{-j \omega t} d t+\int_{-\infty}^{\infty} a_{2} x_{2}(t) e^{-j \omega t} d t \\
& =a_{1} \int_{-\infty}^{\infty} x_{1}(t) e^{-j \omega t} d t+a_{2} \int_{-\infty}^{\infty} x_{2}(t) e^{-j \omega t} d t \\
& =a_{1} X_{1}(\omega)+a_{2} X_{2}(\omega)
\end{aligned}
$$

因此，我们已经证明了线性性质成立。

**例 6.7（傅里叶变换的线性性质）** 利用傅里叶变换的性质和变换对
$$
e^{j \omega_{0} t} \stackrel{CTFT}{\longleftrightarrow} 2 \pi \delta\left(\omega-\omega_{0}\right),
$$
求函数
$$
x(t)=A \cos \left(\omega_{0} t\right)
$$
的傅里叶变换 $X$，其中 $A$ 和 $\omega_{0}$ 为实常数。

**解**：回忆 $\cos \alpha=\frac{1}{2}\left[e^{j \alpha}+e^{-j \alpha}\right]$ 对任意实数 $\alpha$ 成立。因此，我们可以写成

$$
\begin{aligned}
X(\omega) & =\left(\mathcal{F}\left\{A \cos \left(\omega_{0} t\right)\right\}\right)(\omega) \\
& =\left(\mathcal{F}\left\{\frac{A}{2}\left(e^{j \omega_{0} t}+e^{-j \omega_{0} t}\right)\right\}\right)(\omega)
\end{aligned}
$$

然后，利用傅里叶变换的线性性质可得

$$
X(\omega)=\frac{A}{2} \mathcal{F}\left\{e^{j \omega_{0} t}\right\}(\omega)+\frac{A}{2} \mathcal{F}\left\{e^{-j \omega_{0} t}\right\}(\omega)
$$

利用给定的傅里叶变换对，上式可进一步简化为：

$$
\begin{aligned}
X(\omega) & =\frac{A}{2}\left[2 \pi \delta\left(\omega-\omega_{0}\right)\right]+\frac{A}{2}\left[2 \pi \delta\left(\omega+\omega_{0}\right)\right] \\
& =A \pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right] .
\end{aligned}
$$

因此，我们得出

$$
A \cos \left(\omega_{0} t\right) \stackrel{CTFT}{\longleftrightarrow} A \pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right] .
$$

**例 6.8（单位阶跃函数的傅里叶变换）** 利用傅里叶变换的性质和变换对
$$
1 \stackrel{CTFT}{\longleftrightarrow} 2 \pi \delta(\omega) \quad \text {和} \quad \operatorname{sgn} t \stackrel{CTFT}{\longleftrightarrow} \frac{2}{j \omega},
$$
求函数 $x(t)=u(t)$ 的傅里叶变换 $X$。

**解**：首先注意到，$x$ 可用符号函数表示为

$$
x(t)=u(t)=\frac{1}{2}+\frac{1}{2} \operatorname{sgn} t
$$

对该等式两边进行傅里叶变换，得到

$$
X(\omega)=\left(\mathcal{F}\left\{\frac{1}{2}+\frac{1}{2} \operatorname{sgn} t\right\}\right)(\omega)
$$

利用傅里叶变换的线性性质，可以写成

$$
X(\omega)=\frac{1}{2} \mathcal{F}\{1\}(\omega)+\frac{1}{2} \mathcal{F}\{\operatorname{sgn} t\}(\omega)
$$

利用给定的变换对计算这两个傅里叶变换，得到

$$
\begin{aligned}
X(\omega) & =\frac{1}{2}[2 \pi \delta(\omega)]+\frac{1}{2}\left(\frac{2}{j \omega}\right) \\
& =\pi \delta(\omega)+\frac{1}{j \omega}
\end{aligned}
$$

因此，我们得出

$$
u(t) \stackrel{CTFT}{\longleftrightarrow} \pi \delta(\omega)+\frac{1}{j \omega} .
$$

### 6.7.2 时域平移（位移）

接下来要介绍的傅里叶变换性质是时域平移（即位移）性质，如下所示。

**定理 6.5（时域平移（位移））** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则
$$
x\left(t-t_{0}\right) \stackrel{CTFT}{\longleftrightarrow} e^{-j \omega t_{0}} X(\omega),
$$
其中 $t_{0}$ 是任意实常数。

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(t)=x\left(t-t_{0}\right)$，并设 $Y=\mathcal{F}\{y\}$。根据傅里叶变换的定义，有
$$
Y(\omega)=\int_{-\infty}^{\infty} x\left(t-t_{0}\right) e^{-j \omega t} d t
$$
现在，我们使用变量替换。设 $\lambda=t-t_{0}$，则 $t=\lambda+t_{0}$ 且 $d t=d \lambda$。进行变量替换并化简，得到
$$
\begin{aligned}
Y(\omega) & =\int_{-\infty}^{\infty} x(\lambda) e^{-j \omega\left(\lambda+t_{0}\right)} d \lambda \\
& =\int_{-\infty}^{\infty} x(\lambda) e^{-j \omega \lambda} e^{-j \omega t_{0}} d \lambda \\
& =e^{-j \omega t_{0}} \int_{-\infty}^{\infty} x(\lambda) e^{-j \omega \lambda} d \lambda \\
& =e^{-j \omega t_{0}} X(\omega)
\end{aligned}
$$
因此，我们已经证明了时域平移性质成立。

**例 6.9（傅里叶变换的时域平移性质）** 求函数
$$
x(t)=A \cos \left(\omega_{0} t+\theta\right)
$$
的傅里叶变换 $X$，其中 $A, \omega_{0}$ 和 $\theta$ 为实常数。

**解**：设 $v(t)=A \cos \left(\omega_{0} t\right)$，则 $x(t)=v\left(t+\frac{\theta}{\omega_{0}}\right)$。同时，设 $V=\mathcal{F}\{v\}$。根据表 6.2，有
$$
\cos \left(\omega_{0} t\right) \stackrel{CTFT}{\longleftrightarrow} \pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right] .
$$
利用该变换对及傅里叶变换的线性性质，可得

$$
\begin{aligned}
V(\omega) & =\mathcal{F}\left\{A \cos \left(\omega_{0} t\right)\right\}(\omega) \\
& =A \mathcal{F}\left\{\cos \left(\omega_{0} t\right)\right\}(\omega) \\
& =A \pi\left[\delta\left(\omega+\omega_{0}\right)+\delta\left(\omega-\omega_{0}\right)\right] .
\end{aligned}
$$

根据 $v$ 的定义及傅里叶变换的时域平移性质，有
$$
\begin{aligned}
X(\omega) & =e^{j \omega \theta / \omega_{0}} V(\omega) \\
& =e^{j \omega \theta / \omega_{0}} A \pi\left[\delta\left(\omega+\omega_{0}\right)+\delta\left(\omega-\omega_{0}\right)\right] .
\end{aligned}
$$
因此，我们得出
$$
A \cos \left(\omega_{0} t+\theta\right) \stackrel{CTFT}{\longleftrightarrow} A \pi e^{j \omega \theta / \omega_{0}}\left[\delta\left(\omega+\omega_{0}\right)+\delta\left(\omega-\omega_{0}\right)\right] .
$$
### 6.7.3 频域平移（调制）

接下来要介绍的傅里叶变换性质是频域平移（即调制）性质，如下所示。

**定理 6.6（频域平移（调制））** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则
$$
e^{j \omega_{0} t} x(t) \stackrel{CTFT}{\longleftrightarrow} X\left(\omega-\omega_{0}\right),
$$
其中 $\omega_{0}$ 是任意实常数。

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(t)=e^{j \omega_{0} t} x(t)$，并设 $Y=\mathcal{F}\{y\}$。根据傅里叶变换的定义及简单代数运算，可得
$$
\begin{aligned}
Y(\omega) & =\int_{-\infty}^{\infty} e^{j \omega_{0} t} x(t) e^{-j \omega t} d t \\
& =\int_{-\infty}^{\infty} x(t) e^{-j\left(\omega-\omega_{0}\right) t} d t \\
& =X\left(\omega-\omega_{0}\right)
\end{aligned}
$$
因此，我们已经证明了频域平移性质成立。

**例 6.10（傅里叶变换的频域平移性质）** 求函数
$$
x(t)=\cos \left(\omega_{0} t\right) \cos (20 \pi t)
$$
的傅里叶变换 $X$，其中 $\omega_{0}$ 为实常数。

**解**：回忆 $\cos \alpha=\frac{1}{2}\left[e^{j \alpha}+e^{-j \alpha}\right]$ 对任意实数 $\alpha$ 成立。利用该关系及傅里叶变换的线性性质，可得

$$
\begin{aligned}
X(\omega) & =\mathcal{F}\left\{\cos \left(\omega_{0} t\right)\left(\frac{1}{2}\right)\left(e^{j 20 \pi t}+e^{-j 20 \pi t}\right)\right\}(\omega) \\
& =\mathcal{F}\left\{\frac{1}{2} e^{j 20 \pi t} \cos \left(\omega_{0} t\right)+\frac{1}{2} e^{-j 20 \pi t} \cos \left(\omega_{0} t\right)\right\}(\omega) \\
& =\frac{1}{2} \mathcal{F}\left\{e^{j 20 \pi t} \cos \left(\omega_{0} t\right)\right\}(\omega)+\frac{1}{2} \mathcal{F}\left\{e^{-j 20 \pi t} \cos \left(\omega_{0} t\right)\right\}(\omega)
\end{aligned}
$$

根据表 6.2，有

$$
\cos \left(\omega_{0} t\right) \stackrel{CTFT}{\longleftrightarrow} \pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right] .
$$

利用该变换对及傅里叶变换的频域平移性质，可得

$$
\begin{aligned}
X(\omega) & =\frac{1}{2}\left(\mathcal{F}\left\{\cos \left(\omega_{0} t\right)\right\}\right)(\omega-20 \pi)+\frac{1}{2}\left(\mathcal{F}\left\{\cos \left(\omega_{0} t\right)\right\}\right)(\omega+20 \pi) \\
& =\frac{1}{2}\left(\pi\left[\delta\left(\omega+\omega_{0}-20 \pi\right)+\delta\left(\omega-\omega_{0}-20 \pi\right)\right]\right)+\frac{1}{2}\left(\pi\left[\delta\left(\omega+\omega_{0}+20 \pi\right)+\delta\left(\omega-\omega_{0}+20 \pi\right)\right]\right) \\
& =\frac{\pi}{2}\left[\delta\left(\omega+\omega_{0}-20 \pi\right)+\delta\left(\omega-\omega_{0}-20 \pi\right)+\delta\left(\omega+\omega_{0}+20 \pi\right)+\delta\left(\omega-\omega_{0}+20 \pi\right)\right]
\end{aligned}
$$

### 6.7.4 时域与频域缩放（伸缩）

接下来要介绍的傅里叶变换性质是时/频域缩放（即伸缩）性质，如下所示。

**定理 6.7（时/频域缩放（伸缩））** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则
$$
x(a t) \stackrel{CTFT}{\longleftrightarrow} \frac{1}{|a|} X\left(\frac{\omega}{a}\right),
$$
其中 $a$ 是任意非零实常数。

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(t)=x(a t)$，并设 $Y=\mathcal{F}\{y\}$。根据傅里叶变换的定义，可得

$$
Y(\omega)=\int_{-\infty}^{\infty} x(a t) e^{-j \omega t} d t
$$

现在，我们使用变量替换。设 $\lambda=a t$，则 $t=\lambda / a$ 且 $d t=d \lambda / a$。进行变量替换（并注意积分上下限的变化），得到

$$
\begin{aligned}
Y(\omega) & = \begin{cases}\int_{-a(\infty)}^{a(\infty)} x(\lambda) e^{-j(\omega / a) \lambda}\left(\frac{1}{a}\right) d \lambda & a>0 \\
\int_{-a(\infty)}^{a(\infty)} x(\lambda) e^{-j(\omega / a) \lambda}\left(\frac{1}{a}\right) d \lambda & a<0\end{cases} \\
& = \begin{cases}\int_{-\infty}^{\infty} x(\lambda) e^{-j(\omega / a) \lambda}\left(\frac{1}{a}\right) d \lambda & a>0 \\
\int_{\infty}^{-\infty} x(\lambda) e^{-j(\omega / a) \lambda}\left(\frac{1}{a}\right) d \lambda & a<0\end{cases} \\
& = \begin{cases}\frac{1}{a} \int_{-\infty}^{\infty} x(\lambda) e^{-j(\omega / a) \lambda} d \lambda & a>0 \\
-\frac{1}{a} \int_{-\infty}^{\infty} x(\lambda) e^{-j(\omega / a) \lambda} d \lambda & a<0\end{cases}
\end{aligned}
$$

结合两种情况（即 $a>0$ 和 $a<0$），得到
$$
\begin{aligned}
Y(\omega) & =\frac{1}{|a|} \int_{-\infty}^{\infty} x(\lambda) e^{-j(\omega / a) \lambda} d \lambda \\
& =\frac{1}{|a|} X\left(\frac{\omega}{a}\right)
\end{aligned}
$$
因此，我们已经证明了时/频域缩放性质成立。

**例 6.11（傅里叶变换的时域缩放性质）** 利用傅里叶变换对
$$
\operatorname{rect} t \stackrel{CTFT}{\longleftrightarrow} \operatorname{sinc}\left(\frac{\omega}{2}\right),
$$
求函数
$$
x(t)=\operatorname{rect}(a t)
$$
的傅里叶变换 $X$，其中 $a$ 为非零实常数。

**解**：设 $v(t)=\operatorname{rect} t$，则 $x(t)=v(a t)$。同时，设 $V=\mathcal{F}\{v\}$。根据给定的变换对，可知
$$
V(\omega)=\mathcal{F}\{\operatorname{rect} t\}(\omega)=\operatorname{sinc}\left(\frac{\omega}{2}\right) \tag{6.9}
$$
根据 $v$ 的定义及傅里叶变换的时域缩放性质，有
$$
X(\omega)=\frac{1}{|a|} V\left(\frac{\omega}{a}\right)
$$
将式 (6.9) 中 $V$ 的表达式代入上述方程，得到
$$
X(\omega)=\frac{1}{|a|} \operatorname{sinc}\left(\frac{\omega}{2 a}\right)
$$
因此，我们得出
$$
\operatorname{rect}(a t) \stackrel{CTFT}{\longleftrightarrow} \frac{1}{|a|} \operatorname{sinc}\left(\frac{\omega}{2 a}\right) .
$$
### 6.7.5 共轭

接下来要介绍的傅里叶变换性质是共轭性质，如下所示。

**定理 6.8（共轭）** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则

$$
x^{*}(t) \stackrel{CTFT}{\longleftrightarrow} X^{*}(-\omega) .
$$

**证明**：为了证明上述性质，我们按如下步骤进行。设 $y(t)=x^{*}(t)$，并设 $Y=\mathcal{F}\{y\}$。根据傅里叶变换的定义，有

$$
Y(\omega)=\int_{-\infty}^{\infty} x^{*}(t) e^{-j \omega t} d t
$$

利用共轭的性质，可将上述方程改写为

$$
\begin{aligned}
Y(\omega) & =\left[\left(\int_{-\infty}^{\infty} x^{*}(t) e^{-j \omega t} d t\right)^{*}\right]^{*} \\
& =\left[\int_{-\infty}^{\infty}\left[x(t)^{*}\right]^{*}\left(e^{-j \omega t}\right)^{*} d t\right]^{*} \\
& =\left[\int_{-\infty}^{\infty} x(t) e^{-j(-\omega) t} d t\right]^{*} \\
& =X^{*}(-\omega)
\end{aligned}
$$

因此，我们已经证明了共轭性质成立。

**例 6.12（实函数的傅里叶变换）** 设 $X$ 为函数 $x$ 的傅里叶变换。证明：若 $x$ 为实函数，则 $X$ 是共轭对称的（即对所有 $\omega$ 有 $X(\omega)=X^{*}(-\omega)$）。

**解**：根据傅里叶变换的共轭性质，有

$$
\mathcal{F}\left\{x^{*}(t)\right\}(\omega)=X^{*}(-\omega)
$$

由于 $x$ 为实函数，可将 $x^{*}$ 替换为 $x$，得到

$$
\mathcal{F} x(\omega)=X^{*}(-\omega),
$$

或等价地

$$
X(\omega)=X^{*}(-\omega)
$$

### 6.7.6 对偶性

接下来要介绍的傅里叶变换性质是对偶性，如下所示。

**定理 6.9（对偶性）** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则

$$
X(t) \stackrel{CTFT}{\longleftrightarrow} 2 \pi x(-\omega) .
$$

**证明**：为了证明上述性质，我们按如下步骤进行。由傅里叶变换的合成公式，有
$$
x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\lambda) e^{j \lambda t} d \lambda
$$
将 $t$ 替换为 $-\omega$，得到
$$
x(-\omega)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\lambda) e^{-j \lambda \omega} d \lambda
$$
两边同时乘以 $2 \pi$，得到
$$
\begin{aligned}
2 \pi x(-\omega) & =\int_{-\infty}^{\infty} X(\lambda) e^{-j \lambda \omega} d \lambda \\
& =\mathcal{F} X(\omega)
\end{aligned}
$$
因此，我们已经证明了对偶性成立。

前述定理中提出的对偶性源于傅里叶变换正变换与逆变换公式（分别为式 (6.7) 和 (6.8)）之间高度相似性。为了更清楚地展示这种相似性，可以将正变换与逆变换分别改写为
$$
X(\lambda)=\int_{-\infty}^{\infty} x(\theta) e^{-j \theta \lambda} d \theta \quad \text { 和 } \quad x(\lambda)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\theta) e^{j \theta \lambda} d \theta
$$
可以观察到，这两个公式除了以下两点外几乎相同：1）一个 $2 \pi$ 的系数；2）指数函数中参数的符号不同。因此，如果误用其中一个公式代替另一个公式，将得到一个近似正确的结果。实际上，通过对上述两点（即 $2 \pi$ 系数和指数函数符号差异）进行补偿，这一近似结果可以转化为精确结果，这正是对偶性所表达的意义。

虽然关系 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$ 仅直接提供了 $x$ 的傅里叶变换 $X$，但对偶性允许我们间接推断 $X$ 的傅里叶变换。因此，对偶性可以有效地将已知的傅里叶变换对数量加倍。

**例 6.13（sinc 函数的傅里叶变换）** 利用变换对
$$
\operatorname{rect} t \stackrel{CTFT}{\longleftrightarrow} \operatorname{sinc}\left(\frac{\omega}{2}\right),
$$
求函数
$$
x(t)=\operatorname{sinc}\left(\frac{t}{2}\right)
$$
的傅里叶变换 $X$。

**解**：根据给定的傅里叶变换对，有
$$
v(t)=\operatorname{rect} t \quad \longleftrightarrow \quad V(\omega)=\operatorname{sinc}\left(\frac{\omega}{2}\right) .
$$
由对偶性，可得
$$
V(t)=\operatorname{sinc}\left(\frac{t}{2}\right) \quad \longleftrightarrow \quad \mathcal{F} V(\omega)=2 \pi v(-\omega)=2 \pi \operatorname{rect}(-\omega)=2 \pi \operatorname{rect} \omega .
$$
因此，有
$$
V(t)=\operatorname{sinc}\left(\frac{t}{2}\right) \quad \longleftrightarrow \quad \mathcal{F} V(\omega)=2 \pi \operatorname{rect} \omega .
$$
注意到 $V=x$ 且 $\mathcal{F} V=X$，可以将上述关系改写为
$$
x(t)=\operatorname{sinc}\left(\frac{t}{2}\right) \quad \longleftrightarrow \quad X(\omega)=2 \pi \operatorname{rect} \omega .
$$
因此，我们得出
$$
X(\omega)=2 \pi \operatorname{rect} \omega
$$
### 6.7.7 时域卷积

接下来要介绍的傅里叶变换性质是时域卷积性质，如下所示。

**定理 6.10（时域卷积）** 如果 $x_{1}(t) \stackrel{CTFT}{\longleftrightarrow} X_{1}(\omega)$ 且 $x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} X_{2}(\omega)$，则
$$
x_{1} * x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} X_{1}(\omega) X_{2}(\omega) .
$$

**证明**：该性质的证明如下。设 $y(t)=x_{1} * x_{2}(t)$，并设 $Y=\mathcal{F}\{y\}$。根据傅里叶变换与卷积的定义，有

$$
\begin{aligned}
Y(\omega) & =\int_{-\infty}^{\infty}\left[x_{1} * x_{2}(t)\right] e^{-j \omega t} d t \\
& =\int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) d \tau\right] e^{-j \omega t} d t \\
& =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) e^{-j \omega t} d \tau d t
\end{aligned}
$$

交换积分顺序，得到

$$
Y(\omega)=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(t-\tau) e^{-j \omega t} d t d \tau
$$

现在使用变量替换。设 $\lambda=t-\tau$，则 $t=\lambda+\tau$ 且 $d\lambda=d t$。代入并简化，得到

$$
\begin{aligned}
Y(\omega) & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(\lambda) e^{-j \omega(\lambda+\tau)} d \lambda d \tau \\
& =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x_{1}(\tau) x_{2}(\lambda) e^{-j \omega \lambda} e^{-j \omega \tau} d \lambda d \tau \\
& =\int_{-\infty}^{\infty} x_{1}(\tau) e^{-j \omega \tau}\left[\int_{-\infty}^{\infty} x_{2}(\lambda) e^{-j \omega \lambda} d \lambda\right] d \tau \\
& =\left[\int_{-\infty}^{\infty} x_{1}(\tau) e^{-j \omega \tau} d \tau\right]\left[\int_{-\infty}^{\infty} x_{2}(\lambda) e^{-j \omega \lambda} d \lambda\right] \\
& =X_{1}(\omega) X_{2}(\omega)
\end{aligned}
$$

因此，我们证明了时域卷积性质成立。

傅里叶变换的时域卷积性质在实际中有重要意义。由于傅里叶变换能将卷积转换为乘法，因此可以通过傅里叶变换避免直接处理卷积操作。这在求解涉及 LTI 系统的问题时尤为有用，因为此类问题几乎总是涉及卷积（由于 LTI 系统本身就是计算卷积）。

**例 6.14（傅里叶变换的时域卷积性质）** 利用表 6.2，求函数

$$
x(t)=x_{1} * x_{2}(t)
$$
的傅里叶变换 $X$，其中
$$
x_{1}(t)=e^{-2 t} u(t) \quad \text { 且 } \quad x_{2}(t)=u(t)
$$

**解**：设 $X_{1}$ 和 $X_{2}$ 分别为 $x_{1}$ 和 $x_{2}$ 的傅里叶变换。根据傅里叶变换的时域卷积性质，有

$$
\begin{align*}
X(\omega) & =\left(\mathcal{F}\left\{x_{1} * x_{2}\right\}\right)(\omega) \\
& =X_{1}(\omega) X_{2}(\omega) \tag{6.10}
\end{align*}
$$

根据表 6.2，得

$$
\begin{aligned}
X_{1}(\omega)= & \left(\mathcal{F}\left\{e^{-2 t} u(t)\right\}\right)(\omega) = \frac{1}{2+j \omega}, \\
X_{2}(\omega) & =\mathcal{F}\{u(t)\} = \pi \delta(\omega)+\frac{1}{j \omega}
\end{aligned}
$$

将 $X_{1}(\omega)$ 与 $X_{2}(\omega)$ 代入 (6.10)，得到

$$
\begin{aligned}
X(\omega) & =\left[\frac{1}{2+j \omega}\right]\left(\pi \delta(\omega)+\frac{1}{j \omega}\right) \\
& =\frac{\pi}{2+j \omega} \delta(\omega)+\frac{1}{j \omega}\left(\frac{1}{2+j \omega}\right) \\
& =\frac{\pi}{2+j \omega} \delta(\omega)+\frac{1}{j 2 \omega-\omega^{2}}
\end{aligned}
$$

根据 $\delta$ 函数的等价性质，可进一步简化为

$$
X(\omega)=\frac{\pi}{2} \delta(\omega)+\frac{1}{j 2 \omega-\omega^{2}}
$$

### 6.7.8 时域乘法

接下来要介绍的傅里叶变换性质是时域乘法（或频域卷积）性质，如下所示。

**定理 6.11（时域乘法）** 如果 $x_{1}(t) \stackrel{CTFT}{\longleftrightarrow} X_{1}(\omega)$ 且 $x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} X_{2}(\omega)$，则

$$
x_{1}(t) x_{2}(t) \stackrel{CTFT}{\longleftrightarrow} \frac{1}{2 \pi} X_{1} * X_{2}(\omega)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{1}(\theta) X_{2}(\omega-\theta) d \theta
$$

**证明**：设 $Y(\omega)=\frac{1}{2 \pi} X_{1} * X_{2}(\omega)$ 并令 $y=\mathcal{F}^{-1} Y$。根据逆傅里叶变换定义，有

$$
\begin{aligned}
y(t) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty}\left[\frac{1}{2 \pi} X_{1} * X_{2}(\omega)\right] e^{j \omega t} d \omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty}\left[\int_{-\infty}^{\infty} \frac{1}{2 \pi} X_{1}(\lambda) X_{2}(\omega-\lambda) d \lambda\right] e^{j \omega t} d \omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1}{2 \pi} X_{1}(\lambda) X_{2}(\omega-\lambda) e^{j \omega t} d \lambda d \omega
\end{aligned}
$$

交换积分顺序，得到

$$
y(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1}{2 \pi} X_{1}(\lambda) X_{2}(\omega-\lambda) e^{j \omega t} d \omega d \lambda
$$

进行变量替换，设 $v=\omega-\lambda$，则 $\omega=v+\lambda$ 且 $dv=d\omega$。代入并简化，得到

$$
\begin{aligned}
y(t) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1}{2 \pi} X_{1}(\lambda) X_{2}(v) e^{j(v+\lambda) t} d v d \lambda \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \frac{1}{2 \pi} X_{1}(\lambda) X_{2}(v) e^{j v t} e^{j \lambda t} d v d \lambda \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{1}(\lambda) e^{j \lambda t}\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{2}(v) e^{j v t} d v\right] d \lambda \\
& =\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{1}(\lambda) e^{j \lambda t} d \lambda\right]\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{2}(v) e^{j v t} d v\right] \\
& =\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{1}(\omega) e^{j \omega t} d \omega\right]\left[\frac{1}{2 \pi} \int_{-\infty}^{\infty} X_{2}(\omega) e^{j \omega t} d \omega\right] \\
& =x_{1}(t) x_{2}(t)
\end{aligned}
$$

由此证明了频域卷积性质成立。

从前述定理的时域乘法性质可以看出，傅里叶变换能够将乘法操作转换为卷积操作（带比例因子 $\frac{1}{2 \pi}$）。由于卷积比乘法复杂得多，我们通常会避免在工作中引入额外的卷积操作。

**例 6.15（频域卷积性质）** 设 $x$ 和 $y$ 之间的关系为

$$
y(t)=x(t) \cos \left(\omega_{c} t\right)
$$

其中 $\omega_{c}$ 是非零实数。令 $Y=\mathcal{F}\{y\}$，$X=\mathcal{F}\{x\}$。求 $Y$ 关于 $X$ 的表达式。

**解**：为了简化符号，定义

$$
v(t)=\cos \left(\omega_{c} t\right)
$$

并设 $V$ 为 $v$ 的傅里叶变换。根据表 6.2，有

$$
V(\omega)=\pi\left[\delta\left(\omega-\omega_{c}\right)+\delta\left(\omega+\omega_{c}\right)\right]
$$

由 $v$ 的定义，得

$$
y(t)=x(t) v(t)
$$

对两边取傅里叶变换，得到

$$
Y(\omega)=\mathcal{F}\{x(t) v(t)\}(\omega)
$$

利用傅里叶变换的频域卷积性质，得到

$$
\begin{aligned}
Y(\omega) & =\frac{1}{2 \pi} X * V(\omega) \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\lambda) V(\omega-\lambda) d \lambda
\end{aligned}
$$

代入 $V(\omega)$ 的表达式，得到

$$
\begin{aligned}
Y(\omega) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\lambda)\left(\pi\left[\delta\left(\omega-\lambda-\omega_{c}\right)+\delta\left(\omega-\lambda+\omega_{c}\right)\right]\right) d \lambda \\
& =\frac{1}{2} \int_{-\infty}^{\infty} X(\lambda)\left[\delta\left(\omega-\lambda-\omega_{c}\right)+\delta\left(\omega-\lambda+\omega_{c}\right)\right] d \lambda \\
& =\frac{1}{2}\left[\int_{-\infty}^{\infty} X(\lambda) \delta\left(\lambda-\omega+\omega_{c}\right) d \lambda+\int_{-\infty}^{\infty} X(\lambda) \delta\left(\lambda-\omega-\omega_{c}\right) d \lambda\right] \\
& =\frac{1}{2}\left[X\left(\omega-\omega_{c}\right)+X\left(\omega+\omega_{c}\right)\right] \\
& =\frac{1}{2} X\left(\omega-\omega_{c}\right)+\frac{1}{2} X\left(\omega+\omega_{c}\right)
\end{aligned}
$$

### 6.7.9 时域微分

接下来要介绍的傅里叶变换性质是时域微分性质，如下所示。

**定理 6.12（时域微分）** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则

$$
\frac{d x(t)}{d t} \stackrel{CTFT}{\longleftrightarrow} j \omega X(\omega)
$$

**证明**：设 $Y(\omega)=j \omega X(\omega)$ 并令 $y=\mathcal{F}^{-1} Y$。根据逆傅里叶变换定义，有

$$
x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega
$$

对两边关于 $t$ 求导，得到

$$
\begin{aligned}
\frac{d x(t)}{d t} & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} j \omega X(\omega) e^{j \omega t} d \omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} Y(\omega) e^{j \omega t} d \omega \\
& =y(t)
\end{aligned}
$$

由此证明了时域微分性质成立。

通过重复应用上述定理，可以得到更一般的结果：

$$
\left(\frac{d}{d t}\right)^{n} x(t) \stackrel{CTFT}{\longleftrightarrow} (j \omega)^{n} X(\omega)
$$

时域微分性质的实际意义在于，傅里叶变换将微分运算转换为乘法（乘以 $j \omega$），从而避免直接处理微分操作。这在求解微分方程或积分-微分方程时非常有用。

**例 6.16（时域微分性质）** 求

$$
x(t)=\frac{d}{d t} \delta(t)
$$

的傅里叶变换 $X(\omega)$。

**解**：对两边取傅里叶变换，得到

$$
X(\omega)=\mathcal{F}\left\{\frac{d}{d t} \delta(t)\right\}(\omega)
$$

利用时域微分性质，有

$$
X(\omega) = j \omega \mathcal{F}\{\delta(t)\}(\omega)
$$

根据表 6.2，$\mathcal{F}\{\delta(t)\} = 1$，因此

$$
X(\omega) = j \omega
$$
### 6.7.10 频域微分

接下来要介绍的傅里叶变换性质是频域微分性质，如下所示。

**定理 6.13（频域微分）** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则
$$
t x(t) \stackrel{CTFT}{\longleftrightarrow} j \frac{d}{d \omega} X(\omega)
$$

**证明**：设 $y(t)=t x(t)$ 并令 $Y=\mathcal{F} y$。根据傅里叶变换定义，有

$$
X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t
$$

对两边关于 $\omega$ 求导，得到

$$
\begin{aligned}
\frac{d}{d \omega} X(\omega) & =\int_{-\infty}^{\infty} x(t)(-j t) e^{-j \omega t} d t \\
& =-j \int_{-\infty}^{\infty} t x(t) e^{-j \omega t} d t \\
& =-j Y(\omega)
\end{aligned}
$$

两边同时乘以 $j$，得到

$$
j \frac{d}{d \omega} X(\omega)=Y(\omega)
$$

由此证明了频域微分性质成立。

**例 6.17（频域微分性质）** 求

$$
x(t)=t \cos \left(\omega_{0} t\right)
$$

的傅里叶变换 $X(\omega)$，其中 $\omega_{0}$ 为非零实数。

**解**：对两边取傅里叶变换，得到

$$
X(\omega)=\mathcal{F}\left\{t \cos \left(\omega_{0} t\right)\right\}(\omega)
$$

利用傅里叶变换的频域微分性质，有

$$
\begin{aligned}
X(\omega) & =\mathcal{F}\left\{t \cos \left(\omega_{0} t\right)\right\}(\omega) \\
& =j\left(\mathcal{D} \mathcal{F}\left\{\cos \left(\omega_{0} t\right)\right\}\right)(\omega),
\end{aligned}
$$

其中 $\mathcal{D}$ 表示求导算子。根据表 6.2，傅里叶变换为

$$
\begin{aligned}
X(\omega) & =j \frac{d}{d \omega}\left[\pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right]\right] \\
& =j \pi \frac{d}{d \omega}\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right] \\
& =j \pi \frac{d}{d \omega} \delta\left(\omega-\omega_{0}\right) + j \pi \frac{d}{d \omega} \delta\left(\omega+\omega_{0}\right)
\end{aligned}
$$

### 6.7.11 时域积分

接下来要介绍的傅里叶变换性质是时域积分性质，如下所示。

**定理 6.14（时域积分）** 如果 $x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega)$，则

$$
\int_{-\infty}^{t} x(\tau) d \tau \stackrel{CTFT}{\longleftrightarrow} \frac{1}{j \omega} X(\omega)+\pi X(0) \delta(\omega)
$$

**证明**：设
$$
y(t)=\int_{-\infty}^{t} x(\tau) d \tau, \quad Y=\mathcal{F} y, \quad U=\mathcal{F} u
$$

首先注意到

$$
y(t)=x * u(t)
$$

两边取傅里叶变换，并利用时域卷积性质，得到

$$
Y(\omega)=X(\omega) U(\omega) \tag{6.11}
$$

由例 6.8，可知

$$
u(t) \stackrel{CTFT}{\longleftrightarrow} \pi \delta(\omega) + \frac{1}{j \omega}
$$

于是 (6.11) 可写为

$$
\begin{aligned}
Y(\omega) & = X(\omega) \left[ \pi \delta(\omega) + \frac{1}{j \omega} \right] \\
& = \frac{1}{j \omega} X(\omega) + \pi X(\omega) \delta(\omega)
\end{aligned}
$$

根据狄拉克函数的等价性质，有

$$
Y(\omega) = \frac{1}{j \omega} X(\omega) + \pi X(0) \delta(\omega)
$$

由此证明了时域积分性质成立。

时域积分性质在实际中非常有用，因为傅里叶变换将积分操作转化为除以 $j \omega$ 的运算，从而可以避免直接求积分，特别是在处理积分方程或积分微分方程时非常方便。

**例 6.18（时域积分性质）** 求单位阶跃函数 $u(t)$ 的傅里叶变换。

**解**：注意到
$$
x(t) = u(t) = \int_{-\infty}^{t} \delta(\tau) d \tau
$$

取傅里叶变换，利用时域积分性质，有

$$
X(\omega) = \frac{1}{j \omega} \mathcal{F} \delta(\omega) + \pi \mathcal{F} \delta(0) \delta(\omega)
$$

利用表 6.2，$\mathcal{F} \delta = 1$，得到

$$
X(\omega) = \frac{1}{j \omega} + \pi \delta(\omega)
$$

因此，

$$
u(t) \stackrel{CTFT}{\longleftrightarrow} \frac{1}{j \omega} + \pi \delta(\omega)
$$

### 6.7.12 Parseval 定理

接下来要介绍的傅里叶变换性质涉及信号能量，称为 Parseval 定理。

**定理 6.15（Parseval 定理）** 如果 

$$
x(t) \stackrel{CTFT}{\longleftrightarrow} X(\omega),
$$

则有

$$
\int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2 \pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega \tag{6.12}
$$

也就是说，信号 $x$ 的能量与其傅里叶变换 $X$ 的能量相等（相差一个 $2\pi$ 的比例系数）。（回忆信号能量定义为 $\int_{-\infty}^{\infty} |x(t)|^2 dt$。）

**证明**：考虑 (6.12) 左侧：

$$
\begin{aligned}
\int_{-\infty}^{\infty} |x(t)|^2 dt &= \int_{-\infty}^{\infty} x(t) x^*(t) dt \\
&= \int_{-\infty}^{\infty} x(t) \mathcal{F}^{-1}\{\mathcal{F}(x^*)\}(t) dt
\end{aligned}
$$

利用傅里叶变换的共轭性质：

$$
x^*(t) \stackrel{CTFT}{\longleftrightarrow} X^*(-\omega)
$$

于是可得

$$
\int_{-\infty}^{\infty} |x(t)|^2 dt = \int_{-\infty}^{\infty} x(t) \left[ \frac{1}{2 \pi} \int_{-\infty}^{\infty} X^*(-\omega) e^{j \omega t} d\omega \right] dt
$$

令 $\omega \to -\omega$，得到

$$
\int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2 \pi} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x(t) X^*(\omega) e^{-j \omega t} d\omega dt
$$

交换积分顺序并简化：

$$
\begin{aligned}
\int_{-\infty}^{\infty} |x(t)|^2 dt &= \frac{1}{2 \pi} \int_{-\infty}^{\infty} X^*(\omega) \left[ \int_{-\infty}^{\infty} x(t) e^{-j \omega t} dt \right] d\omega \\
&= \frac{1}{2 \pi} \int_{-\infty}^{\infty} X^*(\omega) X(\omega) d\omega \\
&= \frac{1}{2 \pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega
\end{aligned}
$$

由此，Parseval 定理成立。

Parseval 定理在工程应用中非常有用，因为它表明傅里叶变换在能量上是保守的（仅差 $2\pi$ 缩放因子）。例如，在频域求解问题时，可直接利用傅里叶变换计算能量，而无需回到时域。

**例 6.19（sinc 函数的能量）**  
考虑函数
$$
x(t) = \operatorname{sinc}\left(\frac{t}{2}\right),
$$
其傅里叶变换为
$$
X(\omega) = 2 \pi \, \operatorname{rect} \, \omega
$$
求 $x$ 的能量。

**解**：直接求时域积分较难，可利用 Parseval 定理：
$$
\begin{aligned}
E &= \int_{-\infty}^{\infty} |x(t)|^2 dt \\
&= \frac{1}{2 \pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega \\
&= \frac{1}{2 \pi} \int_{-1/2}^{1/2} (2 \pi)^2 d\omega \\
&= 2 \pi \int_{-1/2}^{1/2} d\omega \\
&= 2 \pi \left[ \frac{1}{2} + \frac{1}{2} \right] \\
&= 2 \pi
\end{aligned}
$$

因此，
$$
E = \int_{-\infty}^{\infty} \left| \operatorname{sinc}\left(\frac{t}{2}\right) \right|^2 dt = 2 \pi
$$
### 6.7.13 偶/奇对称性 (Even/Odd Symmetry)

傅里叶变换保持信号的对称性。具体来说，有以下结论：

**定理 6.16（偶/奇对称性）**  
对于一个信号 $x$ 及其傅里叶变换 $X$，有：

- $x$ 为偶函数 ⇔ $X$ 为偶函数；
- $x$ 为奇函数 ⇔ $X$ 为奇函数。

**证明**：

**(1) 若 $x$ 为偶/奇，则 $X$ 为偶/奇)**

由傅里叶变换定义：
$$
X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j \omega t} dt
$$

若 $x$ 为偶/奇：
$$
x(t) = \pm x(-t)
$$
其中 $+$ 对应偶函数，$-$ 对应奇函数。代入上式：
$$
X(\omega) = \int_{-\infty}^{\infty} \pm x(-t) e^{-j \omega t} dt
$$

令 $\lambda = -t \implies d\lambda = -dt$，得到
$$
\begin{aligned}
X(\omega) &= \int_{\infty}^{-\infty} \pm x(\lambda) e^{-j \omega(-\lambda)} (-1) d\lambda \\
&= \mp \int_{\infty}^{-\infty} x(\lambda) e^{j \omega \lambda} d\lambda \\
&= \pm \int_{-\infty}^{\infty} x(\lambda) e^{j \omega \lambda} d\lambda \\
&= \pm \int_{-\infty}^{\infty} x(\lambda) e^{-j(-\omega)\lambda} d\lambda \\
&= \pm X(-\omega)
\end{aligned}
$$

因此，$X$ 具有与 $x$ 相同的偶/奇性。

---

**(2) 若 $X$ 为偶/奇，则 $x$ 为偶/奇**

由傅里叶逆变换定义：
$$
x(t) = \frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d\omega
$$

若 $X$ 为偶/奇：
$$
X(\omega) = \pm X(-\omega)
$$

代入上式：
$$
x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \pm X(-\omega) e^{j \omega t} d\omega
$$

令 $\lambda = -\omega \implies d\lambda = -d\omega$：
$$
\begin{aligned}
x(t) &= \frac{1}{2\pi} \int_{\infty}^{-\infty} \pm X(\lambda) e^{-j \lambda t} (-1) d\lambda \\
&= \pm \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\lambda) e^{-j \lambda t} d\lambda \\
&= \pm \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\lambda) e^{j \lambda(-t)} d\lambda \\
&= \pm x(-t)
\end{aligned}
$$

因此，$x$ 也具有与 $X$ 相同的偶/奇性。

---

换句话说，傅里叶变换的前向和逆向运算都保持信号的偶/奇对称性。
### 6.7.14 实值函数

事实证明，实值函数的傅里叶变换具有一种特殊的结构，如下定理所示。  
**定理 6.17（实值函数）**。一个函数 $x$ 当且仅当其傅里叶变换 $X$ 满足  
$$
X(\omega)=X^{*}(-\omega) \text { 对所有 } \omega
$$
（即 $X$ 是共轭对称的）时，才是实值的。

**证明**。根据傅里叶变换的定义，我们有  
$$
\begin{equation*}
X(\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t \tag{6.13}
\end{equation*}
$$
在上述公式中将 $\omega$ 替换为 $-\omega$，得到  
$$
X(-\omega)=\int_{-\infty}^{\infty} x(t) e^{j \omega t} d t
$$
对该方程两边取共轭，得到  
$$
\begin{equation*}
X^{*}(-\omega)=\int_{-\infty}^{\infty} x^{*}(t) e^{-j \omega t} d t \tag{6.14}
\end{equation*}
$$

首先，我们证明 $x$ 为实值函数意味着 $X$ 是共轭对称的。假设 $x$ 是实值函数。由于 $x$ 为实值函数，我们可以在公式 (6.14) 中将 $x^{*}$ 替换为 $x$，得到  
$$
X^{*}(-\omega)=\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t
$$
观察右边的表达式正好是 $X(\omega)$，于是有  
$$
X^{*}(-\omega)=X(\omega)
$$
因此，$x$ 为实值函数意味着 $X$ 是共轭对称的。

接下来，我们证明 $X$ 为共轭对称函数意味着 $x$ 是实值函数。假设 $X$ 是共轭对称的。由于 $X$ 是共轭对称的，(6.13) 中的 $X(\omega)$ 与 (6.14) 中的 $X^{*}(-\omega)$ 必须相等。因此我们可以写成  
$$
\begin{gathered}
X(\omega)-X^{*}(-\omega)=0 \\ 
\int_{-\infty}^{\infty} x(t) e^{-j \omega t} d t-\int_{-\infty}^{\infty} x^{*}(t) e^{-j \omega t} d t=0 \\ 
\int_{-\infty}^{\infty}\left[x(t)-x^{*}(t)\right] e^{-j \omega t} d t=0
\end{gathered}
$$
这意味着 $x^{*}=x$。因此，$x$ 是实值的。由此可知，$X$ 为共轭对称意味着 $x$ 是实值函数。证明完成。

假设 $X$ 是某个实值函数 $x$ 的傅里叶变换，因此 $X$ 是共轭对称的。根据复数的性质，我们可以得到 $X$ 为共轭对称等价于  
$$
\begin{gather*}
|X(\omega)|=|X(-\omega)| \text { 对所有 } \omega \text { 成立 }  \tag{6.15a}\\
\arg X(\omega)=-\arg X(-\omega) \text { 对所有 } \omega \text { 成立 } \tag{6.15b}
\end{gather*}
$$
（即 $X$ 的幅值是偶函数，幅角是奇函数）。

由于实值函数 $x$ 的傅里叶变换 $X$ 是共轭对称的，因此 $X$ 在负值部分的图像完全是冗余的，可以由非负值部分的图像确定。最后需要注意的是，$x$ 为实值函数并不意味着 $X$ 必须是实值的，因为共轭对称函数不一定是实值函数。


---

**傅里叶变换性质汇总 (CTFT)**

| 性质 | 时间域 | 频率域 |
| :--- | :--- | :--- |
| 线性 | $a_1 x_1(t) + a_2 x_2(t)$ | $a_1 X_1(\omega) + a_2 X_2(\omega)$ |
| 时间平移 | $x(t-t_0)$ | $e^{-j\omega t_0} X(\omega)$ |
| 频率平移 | $e^{j\omega_0 t} x(t)$ | $X(\omega-\omega_0)$ |
| 时间/频率缩放 | $x(at)$ | $\frac{1}{|a|} X(\frac{\omega}{a})$ |
| 共轭 | $x^*(t)$ | $X^*(-\omega)$ |
| 对偶性 | $X(t)$ | $2\pi x(-\omega)$ |
| 时域卷积 | $x_1 * x_2(t)$ | $X_1(\omega) X_2(\omega)$ |
| 时域乘积 | $x_1(t) x_2(t)$ | $\frac{1}{2\pi} X_1 * X_2(\omega)$ |
| 时域微分 | $\frac{d}{dt} x(t)$ | $j \omega X(\omega)$ |
| 频域微分 | $t x(t)$ | $j \frac{d}{d\omega} X(\omega)$ |
| 时域积分 | $\int_{-\infty}^t x(\tau) d\tau$ | $\frac{1}{j\omega} X(\omega) + \pi X(0) \delta(\omega)$ |

| 性质 |  |
| :--- | :--- |
| Parseval 关系 | $\int_{-\infty}^{\infty}|x(t)|^{2} d t=\frac{1}{2 \pi} \int_{-\infty}^{\infty}|X(\omega)|^{2} d \omega$ |
| 偶函数 | $x$ 为偶函数 $\Leftrightarrow X$ 为偶函数 |
| 奇函数 | $x$ 为奇函数 $\Leftrightarrow X$ 为奇函数 |
| 实值函数 | $x$ 为实值函数 $\Leftrightarrow X$ 为共轭对称函数 |

## 6.8 周期函数的连续时间傅里叶变换

通过利用第 6.3 节中简要讨论的广义傅里叶变换，傅里叶变换同样可以应用于周期函数。特别地，周期函数的傅里叶变换可以通过如下结果来计算。

**定理 6.18（周期函数的傅里叶变换）**  
设 $x$ 是一个周期为 $T$ 的函数，其角频率为 $\omega_{0}=\frac{2 \pi}{T}$，其傅里叶级数系数序列为 $a$。定义函数 $x_{T}$ 为
$$
x_{T}(t)= \begin{cases}x(t) & -\frac{T}{2} \leq t<\frac{T}{2} \\ 0 & \text { 其他情况下 }\end{cases}
$$
（即 $x_{T}$ 是函数 $x$ 的截断/加窗版本。注意，$x_{T}$ 在一个周期内与 $x$ 相等，其他地方为零。）设 $X_{T}$ 为 $x_{T}$ 的傅里叶变换。那么 $x$ 的傅里叶变换 $X$ 表达为
$$
\begin{equation*}
X(\omega)=\sum_{k=-\infty}^{\infty} 2 \pi a_{k} \delta\left(\omega-k \omega_{0}\right), \tag{6.16a}
\end{equation*}
$$
或等价地，
$$
\begin{equation*}
X(\omega)=\sum_{k=-\infty}^{\infty} \omega_{0} X_{T}\left(k \omega_{0}\right) \delta\left(\omega-k \omega_{0}\right) \tag{6.16b}
\end{equation*}
$$
此外，$a$ 与 $X_{T}$ 的关系为
$$
\begin{equation*}
a_{k}=\frac{1}{T} X_{T}\left(k \omega_{0}\right) . \tag{6.17}
\end{equation*}
$$

**证明**  
由于 $x$ 是 $T$ 周期函数，可以用傅里叶级数展开为
$$
\begin{equation*}
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \tag{6.18a}
\end{equation*}
$$
其中
$$
\begin{equation*}
a_{k}=\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \tag{6.18b}
\end{equation*}
$$
考虑 (6.18b) 中的 $a_{k}$ 表达式。由于 $x_{T}(t)=x(t)$ 在 $x$ 的一个周期内成立，其他情况为零，因此可以将 (6.18b) 改写为
$$
\begin{align*}
a_{k} & =\frac{1}{T} \int_{-\infty}^{\infty} x_{T}(t) e^{-j k \omega_{0} t} d t \\ 
& =\frac{1}{T} X_{T}\left(k \omega_{0}\right) \tag{6.19}
\end{align*}
$$
因此我们证明了 (6.17) 是正确的。

现在考虑 $x$ 的傅里叶变换 $X$。对 (6.18a) 两边取傅里叶变换，有
$$
\begin{aligned}
X(\omega) & =\mathcal{F}\left\{\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t}\right\}(\omega) \\ 
& =\int_{-\infty}^{\infty}\left(\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t}\right) e^{-j \omega t} d t
\end{aligned}
$$

交换求和与积分顺序，有
$$
\begin{align*}
X(\omega) & =\sum_{k=-\infty}^{\infty} a_{k} \int_{-\infty}^{\infty} e^{j k \omega_{0} t} e^{-j \omega t} d t \\ 
& =\sum_{k=-\infty}^{\infty} a_{k} \mathcal{F}\left\{e^{j k \omega_{0} t}\right\}(\omega) \tag{6.20}
\end{align*}
$$
由表 6.2 可知，$e^{j \lambda t} \stackrel{\mathrm{CFT}}{\longleftrightarrow} 2 \pi \delta(\omega-\lambda)$。因此，可以将 (6.20) 化简为
$$
\begin{align*}
X(\omega) & =\sum_{k=-\infty}^{\infty} a_{k}\left[2 \pi \delta\left(\omega-k \omega_{0}\right)\right] \\ 
& =\sum_{k=-\infty}^{\infty} 2 \pi a_{k} \delta\left(\omega-k \omega_{0}\right) \tag{6.21}
\end{align*}
$$
因此我们证明了 (6.16a) 是正确的。进一步地，将 (6.19) 代入 (6.21)，得到
$$
\begin{aligned}
X(\omega) & =\sum_{k=-\infty}^{\infty} 2 \pi\left[\frac{1}{T} X_{T}\left(k \omega_{0}\right)\right] \delta\left(\omega-k \omega_{0}\right) \\ 
& =\sum_{k=-\infty}^{\infty} \omega_{0} X_{T}\left(k \omega_{0}\right) \delta\left(\omega-k \omega_{0}\right)
\end{aligned}
$$
因此我们证明了 (6.16b) 是正确的。至此证明完成。

---

定理 6.18 给出了计算周期函数 $x$ 的傅里叶变换 $X$ 的两种公式。一种公式是用 $x$ 的傅里叶级数系数序列 $a$ 表示的，另一种公式是用函数 $x_{T}$ 的傅里叶变换 $X_{T}$ 表示的。使用哪一种公式取决于可获得或更容易确定的信息。例如，如果已知 $x$ 的傅里叶级数系数，那么使用 (6.16b) 往往更为方便。

从定理 6.18 中，我们还可以得到几个重要结论。首先，周期函数的傅里叶变换是一系列位于基频 $\omega_{0}$ 的整数倍处的冲激函数。每个冲激的权值是相应傅里叶级数系数的 $2 \pi$ 倍。其次，周期函数 $x$ 的傅里叶级数系数序列 $a$ 可以通过在基频 $\omega_{0}$ 的整数倍处对 $x_{T}$ 的傅里叶变换进行采样，并将结果序列缩放 $\frac{1}{T}$ 得到。

**例 6.20.** 设 $X_{1}$ 和 $X_{2}$ 分别表示 $x_{1}$ 和 $x_{2}$ 的傅里叶变换。假设 $X_{1}$ 和 $X_{2}$ 如图 6.6(a) 和 (b) 所示。判断 $x_{1}$ 和 $x_{2}$ 是否为周期函数。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-193.jpg?height=285&width=1305&top_left_y=291&top_left_x=416){width="400"}


图 6.6：频谱。频谱 (a) $X_{1}$ 和 (b) $X_{2}$。  

**解答** 我们知道，$T$ 周期函数 $x$ 的傅里叶变换 $X$ 必须具有如下形式：
$$
X(\omega)=\sum_{k=-\infty}^{\infty} \alpha_{k} \delta\left(\omega-k \omega_{0}\right),
$$
其中 $\omega_{0}=\frac{2 \pi}{T}$，且 $\{\alpha_{k}\}$ 是复常数。频谱 $X_{1}$ 的确符合这种形式，其中 $\omega_{0}=2$，因此 $T=\frac{2 \pi}{2}=\pi$。由此可知，$x_{1}$ 是 $\pi$ 周期函数。而频谱 $X_{2}$ 不具有这种形式，因此 $x_{2}$ 不是周期函数。  

---

**例 6.21.** 考虑一个基波周期为 $T=2$ 的周期函数 $x$，如图 6.7 所示。利用傅里叶变换，求 $x$ 的傅里叶级数表示。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-194.jpg?height=257&width=576&top_left_y=297&top_left_x=713){width="400"}


图 6.7：周期函数 $x$。  

**解答** 设 $\omega_{0}$ 为 $x$ 的基频，有
$$
\omega_{0}=\frac{2 \pi}{T}=\pi .
$$
设 $y(t)=\operatorname{rect} t$（即 $y$ 表示周期函数 $x$ 的一个周期）。因此：
$$
x(t)=\sum_{k=-\infty}^{\infty} y(t-2 k) .
$$
设 $Y$ 为 $y$ 的傅里叶变换。对 $y$ 进行傅里叶变换，得到
$$
Y(\omega)=\mathcal{F}\{\operatorname{rect} t\}(\omega)=\operatorname{sinc}\left(\frac{1}{2} \omega\right) .
$$

现在，我们要求 $x$ 的傅里叶级数表示，其形式为
$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} .
$$

利用傅里叶变换，有
$$
\begin{aligned}
c_{k} & =\frac{1}{T} Y\left(k \omega_{0}\right) \\ 
& =\frac{1}{2} \operatorname{sinc}\left(\frac{\omega_{0}}{2} k\right) \\ 
& =\frac{1}{2} \operatorname{sinc}\left(\frac{\pi}{2} k\right) .
\end{aligned}
$$

## 6.9 更多傅里叶变换

在本章中，我们推导了若干傅里叶变换对。表 6.2 列出了一些这些以及其他重要的变换对。利用表 6.1 中列出的各种傅里叶变换性质及表 6.2 中的变换对，我们可以（更容易地）确定更复杂函数的傅里叶变换。

表 6.2：连续时间傅里叶变换的变换对  
| Pair | $x(t)$ | $X(\omega)$ |
| :--- | :--- | :--- |
| 1 | $\delta(t)$ | 1 |
| 2 | $u(t)$ | $\pi \delta(\omega)+\frac{1}{j \omega}$ |
| 3 | 1 | $2 \pi \delta(\omega)$ |
| 4 | $\operatorname{sgn} t$ | $\frac{2}{j \omega}$ |
| 5 | $e^{j \omega_{0} t}$ | $2 \pi \delta\left(\omega-\omega_{0}\right)$ |
| 6 | $\cos \left(\omega_{0} t\right)$ | $\pi\left[\delta\left(\omega-\omega_{0}\right)+\delta\left(\omega+\omega_{0}\right)\right]$ |
| 7 | $\sin \left(\omega_{0} t\right)$ | $\frac{\pi}{j}\left[\delta\left(\omega-\omega_{0}\right)-\delta\left(\omega+\omega_{0}\right)\right]$ |
| 8 | $\operatorname{rect}\left(\frac{t}{T}\right)$ | $|T| \operatorname{sinc}\left(\frac{T \omega}{2}\right)$ |
| 9 | $\operatorname{sinc}(B t)$ | $\frac{\pi}{|B|} \operatorname{rect}\left(\frac{\omega}{2 B}\right)$ |
| 10 | $e^{-a t} u(t), \operatorname{Re}\{a\}>0$ | $\frac{1}{a+j \omega}$ |
| 11 | $t^{n-1} e^{-a t} u(t), \operatorname{Re}\{a\}>0$ | $\frac{(n-1)!}{(a+j \omega)^{n}}$ |
| 12 | $\operatorname{tri}\left(\frac{t}{T}\right)$ | $\frac{|T|}{2} \operatorname{sinc}^{2}\left(\frac{T \omega}{4}\right)$ |

**例 6.22.** 设 $x(t) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} X(\omega),\; y(t) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} Y(\omega)$，且
$$
y(t)=\mathcal{D}^{2} x(t-2),
$$
其中 $\mathfrak{D}$ 表示微分算子。将 $Y$ 用 $X$ 表示。

**解。** 令 $v_{1}(t)=\mathcal{D}^{2} x(t)$，于是 $y(t)=v_{1}(t-2)$。现在对这两个等式分别取傅里叶变换。对 $v_{1}$ 取傅里叶变换并利用傅里叶变换的时域微分性质，得到
$$
\begin{align*}
V_{1}(\omega) & =(j \omega)^{2} X(\omega) \\
& =-\omega^{2} X(\omega) \tag{6.22}
\end{align*}
$$

对 $y$ 取傅里叶变换并利用傅里叶变换的时移性质，得
$$
\begin{equation*}
Y(\omega)=e^{-j 2 \omega} V_{1}(\omega) \tag{6.23}
\end{equation*}
$$

将 (6.22) 代入 (6.23)，得到
$$
\begin{aligned}
Y(\omega) & =e^{-j 2 \omega}\left[-\omega^{2} X(\omega)\right] \\
& =-e^{-j 2 \omega} \omega^{2} X(\omega)
\end{aligned}
$$

**例 6.23.** 设 $x(t) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} X(\omega),\; y(t) \stackrel{\mathrm{CTFT}}{\longleftrightarrow} Y(\omega)$，且
$$
y(t)=x(a t-b),
$$
其中 $a$ 与 $b$ 为实常数且 $a \neq 0$。将 $Y$ 用 $X$ 表示。

**解。** 我们先将 $y$ 重写为
$$
y(t)=v_{1}(a t)
$$
其中
$$
v_{1}(t)=x(t-b)
$$
现在对上述两个等式两边取傅里叶变换。利用傅里叶变换的时移性质，可得
$$
\begin{equation*}
V_{1}(\omega)=e^{-j b \omega} X(\omega) \tag{6.24}
\end{equation*}
$$
利用傅里叶变换的时域缩放性质，可得
$$
\begin{equation*}
Y(\omega)=\frac{1}{|a|} V_{1}\left(\frac{\omega}{a}\right) . \tag{6.25}
\end{equation*}
$$
将 (6.24) 中的 $V_{1}(\omega)$ 代入 (6.25)，得到
$$
Y(\omega)=\frac{1}{|a|} e^{-j(b / a) \omega} X\left(\frac{\omega}{a}\right)
$$

**例 6.24.** 考虑周期函数 $x$，其定义为
$$
x(t)=\sum_{k=-\infty}^{\infty} x_{0}(t-k T)
$$
其中
$$
x_{0}(t)=A \operatorname{rect}\left(\frac{2 t}{T}\right)
$$
且 $A$ 与 $T$ 为实常数，且 $T>0$。求函数 $x$ 的傅里叶变换 $X$。

**解。** 由 (6.16b) 可知
$$
\begin{aligned}
X(\omega) & =\mathcal{F}\left\{\sum_{k=-\infty}^{\infty} x_{0}(t-k T)\right\}(\omega) \\
& =\sum_{k=-\infty}^{\infty} \omega_{0} X_{0}\left(k \omega_{0}\right) \delta\left(\omega-k \omega_{0}\right) .
\end{aligned}
$$

因此我们需要求出 $X_{0}$。利用傅里叶变换的线性性质以及表 6.2，得
$$
\begin{aligned}
X_{0}(\omega) & =\mathcal{F}\left\{A \operatorname{rect}\left(\frac{2 t}{T}\right)\right\}(\omega) \\
& =A \mathcal{F}\left\{\operatorname{rect}\left(\frac{2 t}{T}\right)\right\}(\omega) \\
& =\frac{A T}{2} \operatorname{sinc}\left(\frac{\omega T}{4}\right)
\end{aligned}
$$

因此，
$$
\begin{aligned}
X(\omega) & =\sum_{k=-\infty}^{\infty} \omega_{0}\left(\frac{A T}{2}\right) \operatorname{sinc}\left(\frac{k \omega_{0} T}{4}\right) \delta\left(\omega-k \omega_{0}\right) \\
& =\sum_{k=-\infty}^{\infty} \pi A \operatorname{sinc}\left(\frac{\pi k}{2}\right) \delta\left(\omega-k \omega_{0}\right)
\end{aligned}
$$

---

**例 6.25.** 求函数 $x$ 的傅里叶变换 $X$，其中
$$
x(t)=\int_{-\infty}^{t} e^{-(3+j 2) \tau} u(\tau) d \tau
$$

**解。** 我们可以将 $x$ 重写为
$$
\begin{equation*}
x(t)=\int_{-\infty}^{t} v_{1}(\tau) d \tau \tag{6.26}
\end{equation*}
$$
其中
$$
\begin{gather*}
v_{1}(t)=e^{-j 2 t} v_{2}(t) \quad \text { 和 }  \tag{6.27}\\
v_{2}(t)=e^{-3 t} u(t) \tag{6.28}
\end{gather*}
$$

对 (6.26) 取傅里叶变换（利用傅里叶变换的时域积分性质），得到
$$
\begin{equation*}
X(\omega)=\frac{1}{j \omega} V_{1}(\omega)+\pi V_{1}(0) \delta(\omega) \tag{6.29}
\end{equation*}
$$

对 (6.27) 取傅里叶变换（利用频域平移/变换性质），得到
$$
\begin{equation*}
V_{1}(\omega)=V_{2}(\omega+2) \tag{6.30}
\end{equation*}
$$

对 (6.28) 取傅里叶变换，利用表 6.2 中 $\mathcal{F}\{e^{-a t} u(t)\}$ 条目，得到
$$
\begin{equation*}
V_{2}(\omega)=\frac{1}{3+j \omega} \tag{6.31}
\end{equation*}
$$

将 (6.29)、(6.30) 与 (6.31) 结合，得到
$$
\begin{aligned}
X(\omega) & =\frac{1}{j \omega} V_{1}(\omega)+\pi V_{1}(0) \delta(\omega) \\
& =\frac{1}{j \omega} V_{2}(\omega+2)+\pi V_{2}(2) \delta(\omega) \\
& =\frac{1}{j \omega}\left(\frac{1}{3+j(\omega+2)}\right)+\pi\left(\frac{1}{3+j 2}\right) \delta(\omega) \\
& =\frac{-1}{\omega(\omega+2-j 3)}+\pi\left(\frac{1}{3+j 2}\right) \delta(\omega)
\end{aligned}
$$

**例 6.26.** 设 $X$ 与 $Y$ 分别为 $x$ 与 $y$ 的傅里叶变换。假设 $y(t)=x(t)\cos(a t)$，其中 $a$ 为非零实常数。求用 $X$ 表示的 $Y$ 的表达式。

**解。** 本质上，我们需要对所给等式两边取傅里叶变换。有两种明显的方法可以做到这一点：一种是使用傅里叶变换的时域乘法性质，另一种是使用频域移位性质。下面我们将依次用这两种方法求解，以显示两种方法在工作量上的差异。

**第一种解法（使用不太高明的方法）**。我们使用时域乘法性质。为简化记法，定义
$$
v(t)=\cos(a t)
$$
并设 $V$ 为 $v$ 的傅里叶变换。由表 6.2 可知
$$
V(\omega)=\pi[\delta(\omega-a)+\delta(\omega+a)].
$$
对所给等式两边取傅里叶变换，得到
$$
\begin{aligned}
Y(\omega) &=\mathcal{F}\{x(t)v(t)\}(\omega) \\
&=\frac{1}{2\pi}\,X*V(\omega) \\
&=\frac{1}{2\pi}\int_{-\infty}^{\infty} X(\lambda)\,V(\omega-\lambda)\,d\lambda.
\end{aligned}
$$
将上式中 $V$ 的表达代入，得到
$$
\begin{aligned}
Y(\omega) &=\frac{1}{2\pi}\int_{-\infty}^{\infty} X(\lambda)\,\pi[\delta(\omega-\lambda-a)+\delta(\omega-\lambda+a)]\,d\lambda \\
&=\frac{1}{2}\int_{-\infty}^{\infty} X(\lambda)[\delta(\omega-\lambda-a)+\delta(\omega-\lambda+a)]\,d\lambda \\
&=\frac{1}{2}\Big[\int_{-\infty}^{\infty} X(\lambda)\,\delta(\omega-\lambda-a)\,d\lambda+\int_{-\infty}^{\infty} X(\lambda)\,\delta(\omega-\lambda+a)\,d\lambda\Big] \\
&=\frac{1}{2}\Big[\int_{-\infty}^{\infty} X(\lambda)\,\delta(\lambda-\omega+a)\,d\lambda+\int_{-\infty}^{\infty} X(\lambda)\,\delta(\lambda-\omega-a)\,d\lambda\Big] \\
&=\frac{1}{2}\Big[\int_{-\infty}^{\infty} X(\lambda)\,\delta[\lambda-(\omega-a)]\,d\lambda+\int_{-\infty}^{\infty} X(\lambda)\,\delta[\lambda-(\omega+a)]\,d\lambda\Big] \\
&=\frac{1}{2}[X(\omega-a)+X(\omega+a)] \\
&=\frac{1}{2}X(\omega-a)+\frac{1}{2}X(\omega+a).
\end{aligned}
$$

注意：上述解法与第 6.15 篇例中的解法本质相同。

**第二种解法（使用更高明的方法）**。我们使用频域移位性质。对所给等式两边取傅里叶变换，得
$$
\begin{aligned}
Y(\omega) &=\mathcal{F}\{x(t)\cos(a t)\}(\omega) \\
&=\mathcal{F}\Big\{\frac{1}{2}\big(e^{j a t}+e^{-j a t}\big)x(t)\Big\}(\omega) \\
&=\frac{1}{2}\mathcal{F}\{e^{j a t}x(t)\}(\omega)+\frac{1}{2}\mathcal{F}\{e^{-j a t}x(t)\}(\omega) \\
&=\frac{1}{2}X(\omega-a)+\frac{1}{2}X(\omega+a).
\end{aligned}
$$

**评注。** 显然，上述两种解法中第二种更为简洁且不易出错。通常，使用时域乘法性质会导致在频域中进行卷积，而卷积常常最好避免（若有更直接的方法）。

## 6.10 函数的频谱

傅里叶变换表示将一个函数表示为所有频率上的复正弦信号之和。从这个意义上说，傅里叶变换表示捕捉了函数的频率内容信息。举例来说，假设我们有一个函数 $x$，其傅里叶变换为 $X$。如果 $X$ 在某一频率 $\omega_{0}$ 处非零，那么函数 $x$ 在该频率 $\omega_{0}$ 上包含一定的信息。另一方面，如果 $X$ 在 $\omega_{0}$ 处为零，则函数 $x$ 在该频率上没有信息。由此可见，傅里叶变换表示为度量函数的频率内容提供了一种手段。函数在不同频率上的信息分布称为该函数的**频谱**。即，$X$ 就是 $x$ 的频谱。

为了进一步理解傅里叶变换 $X$ 在 $x$ 的频谱中的作用，将 $X$ 写成极坐标形式时，$x$ 的傅里叶表示为

$$
\begin{aligned}
x(t) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty}|X(\omega)| e^{j \arg X(\omega)} e^{j \omega t} d \omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty}|X(\omega)| e^{j[\omega t+\arg X(\omega)]} d \omega
\end{aligned}
$$

实际上，$|X(\omega)|$ 是一个权重，它决定了频率为 $\omega$ 的复正弦在积分结果 $x(t)$ 中的贡献大小。如果将上面的积分用矩形面积近似的方法表示为和的极限形式，这一点可能更容易看清楚（即 $\int_{-\infty}^{\infty} f(x) dx=\lim _{\Delta x \to 0} \sum_{k=-\infty}^{\infty} \Delta x f(k \Delta x)$）。这样写出 $x$：

$$
\begin{aligned}
x(t) &=\lim _{\Delta \omega \to 0} \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty} \Delta \omega|X(k \Delta \omega)| e^{j[k \Delta \omega t+\arg X(k \Delta \omega)]} \\
&=\lim _{\Delta \omega \to 0} \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty} \Delta \omega |X(\omega^{\prime})| e^{j[\omega^{\prime} t+\arg X(\omega^{\prime})]}
\end{aligned}
$$

其中 $\omega^{\prime}=k \Delta \omega$。从上述最后一行可以看出，求和式中的第 $k$ 项（对应于频率 $\omega^{\prime}=k \Delta \omega$）就是一个频率为 $\omega^{\prime}$ 的复正弦，其幅度被 $\left|X(\omega^{\prime})\right|$ 缩放，并且被 $\arg X(\omega^{\prime})$ 所决定的量进行相位平移。对于某个固定的 $\omega^{\prime}=k \Delta \omega$（对应于求和式中的第 $k$ 项），$\left|X(\omega^{\prime})\right|$ 越大，其对应的复正弦 $e^{j \omega^{\prime} t}$ 的幅度也就越大，因此该项对整体求和的贡献也越大。由此，我们可以用 $\left|X(\omega^{\prime})\right|$ 来衡量函数 $x$ 在频率 $\omega^{\prime}$ 上所含的信息量。

需要注意的是，由于傅里叶变换 $X$ 是实变量的函数，一个函数在最一般的情况下可能在任意实数频率上包含信息。这与傅里叶级数中的频谱情况不同（傅里叶级数只处理周期函数），在傅里叶级数中，函数只能在某些特定频率（即基频的整数倍）上包含信息。然而，这里并不存在矛盾。正如我们在第 6.8 节中看到的，周期函数的傅里叶变换除了在基频的整数倍处可能非零之外，其余地方均为零。

由于频谱在一般情况下是复数，因此通常用两幅图表示：一幅显示 $X$ 的幅度，另一幅显示其相位。我们称 $|X(\omega)|$ 为函数 $x$ 的**幅度谱**，称 $\arg X(\omega)$ 为函数 $x$ 的**相位谱**。在特殊情况下，如果 $X$ 是实数（或纯虚数）函数，我们通常会将频谱直接绘制在一幅图上。

回忆之前的定理 6.17，实值函数 $x$ 的傅里叶变换 $X$ 必须是共轭对称的。因此，如果 $x$ 是实值函数，则有

$$
\begin{aligned}
& |X(\omega)|=|X(-\omega)| \quad \text{对所有 }\omega \text{成立}, \\
& \arg X(\omega)=-\arg X(-\omega) \quad \text{对所有 }\omega \text{成立},
\end{aligned}
$$

即 $X$ 的幅度是偶函数，而相位是奇函数（见 (6.15a) 和 (6.15b)）。由于实值函数的频谱具有这种对称性，在处理这类函数时我们通常忽略负频率。而对于复值但非实值函数，频谱不再具备上述对称性，此时负频率也变得十分重要。

**例 6.27（幅度缩放与时间平移的符号函数的频谱）。** 考虑函数  

$$
x(t)=\tfrac{1}{2}\,\operatorname{sgn}(t-1) .
$$

可以证明该函数的傅里叶变换为  

$$
X(\omega)=\frac{1}{j \omega} e^{-j \omega} .
$$

在这种情况下，$X$ 既不是纯实的，也不是纯虚的，因此我们用两幅图来表示 $X$ 的频谱：分别绘制幅度谱与相位谱，如图 6.8(a) 与 (b) 所示。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-200.jpg?height=763&width=1457&top_left_y=283&top_left_x=224){width="400"}


图 6.8：幅度缩放与时间平移的符号函数 $x$ 的频谱。(a) $x$ 的幅度谱；(b) $x$ 的相位谱。  

---

**例 6.28（时间缩放的 sinc 函数的频谱）。** 考虑函数  

$$
x(t)=\operatorname{sinc}\!\left(\tfrac{1}{2} t\right) .
$$

可以证明该函数的傅里叶变换为  

$$
X(\omega)=2 \pi \operatorname{rect}(\omega) .
$$

在这种情况下，$X$ 为实函数，因此可以将其频谱绘制在一张图上，如图 6.9 所示。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-201.jpg?height=393&width=455&top_left_y=294&top_left_x=899){width="400"}


图 6.9：时间缩放 sinc 函数 $x$ 的频谱。  

---

**例 6.29（时间平移的符号函数的频谱）。** 函数  

$$
x(t)=\operatorname{sgn}(t-1)
$$

的傅里叶变换为  

$$
X(\omega)=\frac{2}{j \omega} e^{-j \omega} .
$$

(a) 求并绘制 $x$ 的幅度谱与相位谱。  
(b) 确定 $x$ 在哪个频率（或哪些频率）上信息量最大。  

**解。**  
(a) 首先求幅度谱 $|X(\omega)|$。由 $X(\omega)$ 的表达式可得  

$$
\begin{aligned}
|X(\omega)| &=\left|\frac{2}{j \omega} e^{-j \omega}\right| \\
&=\left|\frac{2}{j \omega}\right| \cdot \left|e^{-j \omega}\right| \\
&=\left|\frac{2}{j \omega}\right| \\
&=\frac{2}{|\omega|}.
\end{aligned}
$$

接着求相位谱 $\arg X(\omega)$。注意当 $\omega=0$ 时 $\arg X(\omega)$ 未定义，因此假设 $\omega \neq 0$。由 $X(\omega)$ 的表达式可得（$\omega \neq 0$）：  

$$
\begin{aligned}
\arg X(\omega) &=\arg \left(\frac{2}{j \omega} e^{-j \omega}\right) \\
&=\arg e^{-j \omega} + \arg \frac{2}{j \omega} \\
&=-\omega + \arg \frac{2}{j \omega} \\
&=-\omega + \arg \left(-\frac{j 2}{\omega}\right) \\
&=
\begin{cases}
-\tfrac{\pi}{2}-\omega, & \omega>0, \\
\ \tfrac{\pi}{2}-\omega, & \omega<0,
\end{cases} \\
&=-\tfrac{\pi}{2}\,\operatorname{sgn}(\omega)-\omega.
\end{aligned}
$$

在上式化简时，用到了  

$$
\arg\!\left(\tfrac{2}{j \omega}\right)=\arg\!\left(-\tfrac{j 2}{\omega}\right)
=
\begin{cases}
-\tfrac{\pi}{2}, & \omega>0, \\
\ \tfrac{\pi}{2}, & \omega<0.
\end{cases}
$$

最后，借助数值计算可以绘制 $|X(\omega)|$ 与 $\arg X(\omega)$ 的图像，如图 6.10(a) 与 (b) 所示。  

(b) 由于 $|X(\omega)|$ 在 $\omega=0$ 处取最大值，因此 $x$ 在频率 $0$ 处信息量最多。  

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-202.jpg?height=768&width=1468&top_left_y=483&top_left_x=224){width="400"}


图 6.10：时间平移的符号函数的频谱。(a) $x$ 的幅度谱；(b) $x$ 的相位谱。

## 6.11 函数的带宽

若函数 $x$ 的傅里叶变换为 $X$，则称 $x$ 是带限的，如果存在某个非负实常数 $B$，我们有时将 $B$ 称为 $x$ 的带宽。图 6.11 给出了一个说明性示例。

$$
X(\omega)=0 \quad \text{当所有 }|\omega|>B
$$

可以证明，一个函数不可能同时是时限的和带限的。（该事实的证明见习题 6.12。）为了帮助理解原因，我们回顾傅里叶变换的**时域/频域缩放性质**。根据这一性质，我们知道当对函数 $x$ 进行压缩（通过时间缩放）时，其傅里叶变换 $X$ 会扩展（通过时间缩放）。类似地，当对傅里叶变换 $X$ 进行压缩（通过时间缩放）时，函数 $x$ 会扩展（通过时间缩放）。因此，函数的时域范围与带宽之间显然存在一种反比关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-202.jpg?height=398&width=615&top_left_y=1788&top_left_x=696){width="400"}


图 6.11：具有傅里叶变换 $X$ 的函数 $x$ 的带宽。

## 6.12 能量密度谱

假设我们有一个具有有限能量 $E$ 的函数 $x$，其傅里叶变换为 $X$。根据定义，$x$ 中包含的能量为

$$
E=\int_{-\infty}^{\infty}|x(t)|^{2} \, dt
$$

我们可以利用 Parseval 公式 (6.12) 将 $E$ 用 $X$ 表示为

$$
E=\frac{1}{2 \pi} \int_{-\infty}^{\infty}|X(\omega)|^{2} \, d\omega
$$

因此，能量 $E$ 可表示为

$$
E=\frac{1}{2 \pi} \int_{-\infty}^{\infty} E_{x}(\omega) \, d\omega
$$

其中

$$
E_{x}(\omega)=|X(\omega)|^{2}
$$

我们将 $E_{x}$ 称为函数 $x$ 的**能量密度谱**。函数 $E_{x}$ 表示 $x$ 中的能量如何随频率分布。例如，频率范围 $\left[\omega_{1}, \omega_{2}\right]$ 内的能量可简单地表示为

$$
\frac{1}{2 \pi} \int_{\omega_{1}}^{\omega_{2}} E_{x}(\omega) \, d\omega
$$

**例 6.30** 计算函数的能量密度谱 $E_{x}$

$$
x(t)=\operatorname{sinc}\left(\frac{1}{2} t\right)
$$

确定频率分量 $\omega \in \left[-\frac{1}{4}, \frac{1}{4}\right]$ 内包含的能量，同时求函数的总能量。

**解** 首先计算 $x$ 的傅里叶变换 $X$，得到

$$
X(\omega)=2 \pi \operatorname{rect} \omega
$$

计算能量谱密度 $E_{x}$，有

$$
\begin{aligned}
E_{x}(\omega) & =|X(\omega)|^{2} \\
& =|2 \pi \operatorname{rect} \omega|^{2} \\
& =4 \pi^{2} \operatorname{rect}^{2} \omega \\
& =4 \pi^{2} \operatorname{rect} \omega
\end{aligned}
$$

设 $E_{1}$ 为频率 $|\omega| \in \left[-\frac{1}{4}, \frac{1}{4}\right]$ 内 $x$ 包含的能量，则有

$$
\begin{aligned}
E_{1} & =\frac{1}{2 \pi} \int_{-1 / 4}^{1 / 4} E_{x}(\omega) \, d\omega \\
& =\frac{1}{2 \pi} \int_{-1 / 4}^{1 / 4} 4 \pi^{2} \operatorname{rect}(\omega) \, d\omega \\
& =\int_{-1 / 4}^{1 / 4} 2 \pi \, d\omega \\
& =\pi
\end{aligned}
$$

设 $E$ 为 $x$ 的总能量，则有

$$
\begin{aligned}
E & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} E_{x}(\omega) \, d\omega \\
& =\frac{1}{2 \pi} \int_{-\infty}^{\infty} 4 \pi^{2} \operatorname{rect}(\omega) \, d\omega \\
& =\int_{-1 / 2}^{1 / 2} 2 \pi \, d\omega \\
& =2 \pi
\end{aligned}
$$

## 6.13 利用傅里叶变换表征 LTI 系统

考虑一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统。如图 6.12 所示。该系统的行为由下式描述：

$$
\begin{equation*}
y(t)=x * h(t) \tag{6.32}
\end{equation*}
$$

设 $X, Y, H$ 分别为 $x, y, h$ 的傅里叶变换。对式 (6.32) 的两边取傅里叶变换，并利用傅里叶变换的时域卷积性质，可得

$$
\begin{equation*}
Y(\omega)=X(\omega) H(\omega) \tag{6.33}
\end{equation*}
$$

这一结果提供了观察 LTI 系统行为的另一种方式。也就是说，我们可以将系统视为在频域上对输入和输出函数的傅里叶变换进行操作。换句话说，我们得到一个类似于图 6.13 的系统。在这种情况下，时域中的卷积操作被频域中的乘法所取代。输出的频谱（即傅里叶变换）等于输入的频谱与冲激响应的频谱的乘积。术语上，我们将 $H$ 称为系统的**频率响应**。系统的行为完全由频率响应 $H$ 描述。如果已知输入，我们可以计算其傅里叶变换 $X$，然后确定输出的傅里叶变换 $Y$。利用逆傅里叶变换，即可求得输出 $y$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-205.jpg?height=88&width=339&top_left_y=307&top_left_x=950){width="400"}


图 6.12：具有输入 $x$、输出 $y$ 和冲激响应 $h$ 的 LTI 系统的时域视图。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-205.jpg?height=96&width=347&top_left_y=507&top_left_x=945){width="400"}


图 6.13：具有输入频谱 $X$、输出频谱 $Y$ 和频率响应 $H$ 的 LTI 系统的频域视图。

在最一般的情况下，频率响应 $H$ 是复值函数。因此，我们可以用幅值和相位来表示 $H$。我们将 $H$ 的幅值称为系统的**幅值响应**，将 $H$ 的相位称为系统的**相位响应**。  
由 (6.33) 可得：

$$
\begin{align*}
|Y(\omega)| & =|X(\omega) H(\omega)| \\
& =|X(\omega)||H(\omega)| \quad \text {and } \tag{6.34a}
\end{align*}
$$

$$
\begin{align*}
\arg Y(\omega) & =\arg [X(\omega) H(\omega)] \\
& =\arg X(\omega)+\arg H(\omega) . \tag{6.34b}
\end{align*}
$$

由 (6.34a) 可知，输出的幅值谱等于输入的幅值谱与冲激响应的幅值谱的乘积。由 (6.34b) 可知，输出的相位谱等于输入的相位谱加上冲激响应的相位谱。

由于频率响应 $H$ 仅仅是冲激响应 $h$ 的频谱，如果 $h$ 是实函数，则（如 6.10 节所述）：

$$
\begin{aligned}
& |H(\omega)|=|H(-\omega)| \quad \text{对所有 } \omega \text{成立} \\
& \arg H(\omega)=-\arg H(-\omega) \quad \text{对所有 } \omega \text{成立}
\end{aligned}
$$

（即幅值响应为偶函数，相位响应为奇函数）。

**例 6.31.** 考虑一个冲激响应为

$$
h(t)=\operatorname{sinc}\left(\frac{1}{2} t\right)
$$

的 LTI 系统。

该系统的频率响应为

$$
H(\omega)=2 \pi \operatorname{rect} \omega
$$

在此特例中，$H$ 为实值函数。因此，我们可以在单个图中绘制频率响应 $H$，如图 6.14 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-205.jpg?height=382&width=436&top_left_y=756&top_left_x=910){width="400"}


图 6.14：示例系统的频率响应。

### 6.13.1 非卷绕相位

由于复数的幅角（argument）并不唯一，复值函数的幅角也同样不唯一。因此，对于如何定义与复值函数的相位（即幅角）对应的函数，我们有一定的自由度。为了方便，通常会将幅角限制在长度为 $2\pi$ 的区间内，例如区间 $(-\pi, \pi]$，这对应于主幅角（principal argument）。然而，以这种方式定义复值函数的相位往往会导致相位函数出现不必要的间断。这就引出了**非卷绕相位（unwrapped phase）**的概念。非卷绕相位是指以一种方式定义相位，使其不受长度为 $2\pi$ 的区间限制，并尽可能保持相位函数的连续性。下面给出了一个说明非卷绕相位的例子。

**例 6.32**（非卷绕相位）。考虑一个 LTI 系统，其频率响应为

$$
H(\omega)=e^{j \pi \omega} .
$$

我们可以选择仅使用主幅角（即 $\operatorname{Arg} H(\omega)$）来定义 $H$ 的相位（即幅角）。这样得到的相位函数如图 6.15(a) 所示。然而，以这种方式使用主幅角，会在相位函数中引入不必要的间断。因此，我们有时希望以一种方式定义相位函数，以消除这些不必要的间断，这就是使用非卷绕相位的动机。函数 $H$ 的非卷绕相位 $\Theta$ 为

$$
\Theta(\omega)=\pi \omega .
$$

$\Theta$ 的图像如图 6.15(b) 所示。与图 6.15(a) 中存在许多间断的函数不同，图 6.15(b) 中的函数是连续的。尽管这两个图中的函数在形式上不同，但在物理意义上是等价的，因为它们对应相同的物理角位移（即对于所有 $\omega \in \mathbb{R}$，有 $e^{j \operatorname{Arg} H(\omega)}=e^{j \Theta(\omega)}$）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-206.jpg?height=484&width=1484&top_left_y=286&top_left_x=251){width="400"}


图 6.15：非卷绕相位示例。(a) 将相位函数限制在 $(-\pi, \pi]$ 范围内，(b) 对应的非卷绕相位。

### 6.13.2 幅值与相位失真

回顾推论 5.1，具有频率响应 $H$ 的 LTI 系统 $\mathcal{H}$ 满足

$$
\mathcal{H}\left\{e^{j \omega t}\right\}(t)=H(\omega) e^{j \omega t}
$$

（即 $e^{j \omega t}$ 是 $\mathcal{H}$ 的特征函数，其特征值为 $H(\omega)$）。将 $H(\omega)$ 用极坐标形式表示，我们有

$$
\begin{aligned}
\mathcal{H}\left\{e^{j \omega t}\right\}(t) & =|H(\omega)| e^{j \arg H(\omega)} e^{j \omega t} \\
& =|H(\omega)| e^{j[\omega t+\arg H(\omega)]} \\
& =|H(\omega)| e^{j \omega(t+\arg [H(\omega)] / \omega)}
\end{aligned}
$$

该方程可重写为

$$
\begin{equation*}
\mathcal{H}\left\{e^{j \omega t}\right\}(t)=|H(\omega)| e^{j \omega\left[t-\tau_{\mathrm{p}}(\omega)\right]}, \tag{6.35a}
\end{equation*}
$$

其中

$$
\begin{equation*}
\tau_{\mathrm{p}}(\omega)=-\frac{\arg H(\omega)}{\omega} \tag{6.35b}
\end{equation*}
$$

因此，系统对函数 $e^{j \omega t}$ 的响应可以看作对该函数进行两种变换：

- 幅值缩放：按 $|H(\omega)|$ 缩放；  
- 平移：按 $\tau_{\mathrm{p}}(\omega)$ 平移（即延迟/提前）。

因此，幅值响应决定了系统如何对不同的复指数正弦进行（幅值）缩放。相位响应则决定了系统如何对不同的复指数正弦进行平移（即延迟/提前）。

如果系统满足 $|H(\omega)|=1$ 对所有 $\omega$ 成立，则称其为**全通（allpass）系统**。对于全通系统，系统输入与输出的幅值谱相同。如果系统不是全通系统，则会以某种方式改变幅值谱。当幅值谱以不希望的方式被改变时，就发生**幅值失真**（即幅值谱失真）。如果 $|H(\omega)|=a$ 对所有 $\omega$ 成立，其中 $a$ 为常数，则每个复指数正弦经过系统时都会被相同的因子 $a$ 缩放。在实际应用中，如果 $a \neq 1$，这种幅值谱的变化有时是不希望出现的。如果 $|H(\omega)|$ 不是常数，则不同的复指数正弦被缩放的幅值不同。在实际中，这种幅值谱变化通常是不可取的，被视为幅值失真。

> 一些作者（例如 [9,12]）将全通系统定义为 $|H(\omega)|=c$ 对所有 $\omega$ 成立，其中 $c$ 为常数（且 $c$ 不必为 1）。

式 (6.35b) 中的函数 $\tau_{\mathrm{p}}$ 称为系统的**相位延迟**。若 $\tau_{\mathrm{p}}(\omega)=0$ 对所有 $\omega$ 成立，则称系统具有零相位。在零相位系统中，输入与输出的相位谱相同。如果系统不具有零相位，则输入与输出的相位谱不同。当相位谱以不希望的方式被改变时，就发生**相位失真**（即相位谱失真）。如果 $\tau_{\mathrm{p}}(\omega)=t_{\mathrm{d}}$ 对所有 $\omega$ 成立，其中 $t_{\mathrm{d}}$ 为常数，则系统将所有复指数正弦平移相同的量 $t_{\mathrm{d}}$。注意，$\tau_{\mathrm{p}}(\omega)=t_{\mathrm{d}}$ 等价于（非卷绕）相位响应为

$$
\arg H(\omega)=-t_{\mathrm{d}} \omega
$$

即为零常数项的线性函数。因此，具有恒定相位延迟的系统称为**线性相位系统**。如果 $\tau_{\mathrm{p}}(\omega)$ 不是常数，则不同的复指数正弦被平移的量不同。在许多实际应用中，这种不同复指数正弦被不同平移量平移的情况是不希望的。因此，非线性相位系统通常被认为会引入相位失真。在需要关注相位谱的应用场景中，通常使用零相位或线性相位系统。

**例 6.33（无失真传输）**。考虑一个 LTI 系统，输入为 $x$，输出为 $y$，其关系为

$$
y(t)=x\left(t-t_{0}\right)
$$

其中 $t_{0}$ 是一个实常数。也就是说，系统的输出仅仅是输入信号延迟 $t_{0}$ 后的结果。这种类型的系统行为称为**无失真传输**，因为系统允许输入信号不被修改地传递到输出，仅引入时间延迟。这种行为是现实通信系统中追求的理想状态（即接收信号 $y$ 等于发送信号 $x$ 的延迟版本）。对上述方程取傅里叶变换，可得

$$
Y(\omega)=e^{-j \omega t_{0}} X(\omega)
$$

因此，系统的频率响应为

$$
H(\omega)=e^{-j \omega t_{0}}
$$

由于 $|H(\omega)|=1$ 对所有 $\omega$ 成立，系统是全通的，不会引入任何幅值失真。系统的相位延迟 $\tau_{\mathrm{p}}$ 为

$$
\begin{aligned}
\tau_{\mathrm{p}}(\omega) & =-\frac{\arg H(\omega)}{\omega} \\
& =-\left(\frac{-\omega t_{0}}{\omega}\right) \\
& =t_{0}
\end{aligned}
$$

由于相位延迟是常数，系统具有线性相位，不会引入任何相位失真（除了平凡的时间移位 $t_{0}$）。

**例 6.34（图像的频谱）**。人类视觉系统对图像的相位谱比幅值谱更敏感。通过分别修改图像的幅值谱和相位谱，可以清楚地演示这一点。下面考虑该主题的两个变体。

考虑图 6.16(a) 和 (b) 所示的 potatohead 和 hongkong 图像。将 potatohead 图像的幅值谱替换为 hongkong 图像的幅值谱（相位谱保持不变），得到图 6.16(c) 所示的新图像。虽然修改幅值谱会导致图像失真，但原始图像的基本特征仍然保留。另一方面，将 potatohead 图像的相位谱替换为 hongkong 图像的相位谱（幅值谱保持不变），得到图 6.16(d) 所示的图像。显然，通过修改图像的相位谱，图像的基本特征发生了改变，新图像更接近 hongkong 图像而非原始 potatohead 图像。

图 6.17 考虑了一个更极端的情况。在此情况下，将 potatohead 图像的幅值谱和相位谱分别用随机数据替换，这些随机数据来自图 6.17(b) 所示的随机噪声图像。当完全用随机值替换 potatohead 图像的幅值谱时，图 6.17(c) 所示的结果图像仍可识别为原始 potatohead 图像的颗粒化版本。另一方面，当用随机值替换 potatohead 图像的相位谱时，图 6.17(d) 所示的结果图像中原始 potatohead 图像的所有可见特征都消失了。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-209.jpg?height=1378&width=1665&top_left_y=597&top_left_x=289){width="400"}


图 6.16：图像中相位信息的重要性。(a) potatohead 图像和 (b) hongkong 图像。 (c) 将 potatohead 图像的幅值谱替换为 hongkong 图像的幅值谱后的图像。(d) 将 potatohead 图像的相位谱替换为 hongkong 图像的相位谱后的图像。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-210.jpg?height=1379&width=1663&top_left_y=334&top_left_x=164){width="400"}


图 6.17：图像中相位信息的重要性。(a) potatohead 图像和 (b) 随机噪声图像。 (c) 将 potatohead 图像的幅值谱替换为随机图像的幅值谱后的图像。 (d) 将 potatohead 图像的相位谱替换为随机图像的相位谱后的图像。

## 6.14 LTI 系统的互联

根据傅里叶变换的性质及频率响应的定义，我们可以推导出涉及频率响应以及串联和并联互联系统的一些等价关系。

假设有两个 LTI 系统 $\mathscr{H}_{1}$ 和 $\mathscr{H}_{2}$，其频率响应分别为 $H_{1}$ 和 $H_{2}$，它们以串联方式连接，如图 6.18(a) 左侧所示。设 $h_{1}$ 和 $h_{2}$ 分别为 $\mathscr{H}_{1}$ 和 $\mathscr{H}_{2}$ 的冲激响应。整体系统的冲激响应 $h$ 为

$$
h(t)=h_{1} * h_{2}(t)
$$

对该方程两边取傅里叶变换，得到

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{h_{1} * h_{2}\right\}(\omega) \\
& =\mathcal{F} h_{1}(\omega) \mathcal{F} h_{2}(\omega) \\
& =H_{1}(\omega) H_{2}(\omega)
\end{aligned}
$$

因此，我们得到图 6.18(a) 所示的等价关系。由于乘法满足交换律，我们还得到图 6.18(b) 所示的等价关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-210.jpg?height=331&width=984&top_left_y=1977&top_left_x=502){width="400"}


图 6.18：涉及频率响应与 LTI 系统串联互联的等价关系。(a) 第一种等价关系，(b) 第二种等价关系。

假设有两个 LTI 系统 $\mathscr{H}_{1}$ 和 $\mathscr{H}_{2}$，其频率响应分别为 $H_{1}$ 和 $H_{2}$，它们以并联方式连接，如图 6.19 左侧所示。设 $h_{1}$ 和 $h_{2}$ 分别为 $\mathcal{H}_{1}$ 和 $\mathcal{H}_{2}$ 的冲激响应。整体系统的冲激响应 $h$ 为

$$
h(t)=h_{1}(t)+h_{2}(t)
$$

对该方程两边取傅里叶变换，得到

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{h_{1}+h_{2}\right\}(\omega) \\
& =\mathcal{F} h_{1}(\omega)+\mathcal{F} h_{2}(\omega) \\
& =H_{1}(\omega)+H_{2}(\omega) .
\end{aligned}
$$

因此，我们得到图 6.19 所示的等价关系。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-211.jpg?height=182&width=814&top_left_y=297&top_left_x=713){width="400"}


图 6.19：涉及频率响应与 LTI 系统并联互联的等价关系。

## 6.15 LTI 系统与微分方程

许多实际应用中的 LTI 系统可以用具有常系数的 $N$ 阶线性微分方程来表示。假设我们有这样一个系统，输入为 $x$，输出为 $y$。则系统的输入-输出关系可以表示为

$$
\sum_{k=0}^{N} b_{k}\left(\frac{d}{d t}\right)^{k} y(t)=\sum_{k=0}^{M} a_{k}\left(\frac{d}{d t}\right)^{k} x(t)
$$

（其中 $M \leq N$）。设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的傅里叶变换。对上述方程两边取傅里叶变换，得到

$$
\mathcal{F}\left\{\sum_{k=0}^{N} b_{k}\left(\frac{d}{d t}\right)^{k} y(t)\right\}(\omega)=\mathcal{F}\left\{\sum_{k=0}^{M} a_{k}\left(\frac{d}{d t}\right)^{k} x(t)\right\}(\omega) .
$$

利用傅里叶变换的线性性质，可改写为

$$
\sum_{k=0}^{N} b_{k} \mathcal{F}\left\{\left(\frac{d}{d t}\right)^{k} y(t)\right\}(\omega)=\sum_{k=0}^{M} a_{k} \mathcal{F}\left\{\left(\frac{d}{d t}\right)^{k} x(t)\right\}(\omega) .
$$

利用傅里叶变换的时域微分性质，可进一步表示为

$$
\sum_{k=0}^{N} b_{k}(j \omega)^{k} Y(\omega)=\sum_{k=0}^{M} a_{k}(j \omega)^{k} X(\omega) .
$$

提取因子后得到

$$
Y(\omega) \sum_{k=0}^{N} b_{k}(j \omega)^{k}=X(\omega) \sum_{k=0}^{M} a_{k}(j \omega)^{k} .
$$

整理该方程，得到

$$
\frac{Y(\omega)}{X(\omega)}=\frac{\sum_{k=0}^{M} a_{k}(j \omega)^{k}}{\sum_{k=0}^{N} b_{k}(j \omega)^{k}}=\frac{\sum_{k=0}^{M} a_{k} j^{k} \omega^{k}}{\sum_{k=0}^{N} b_{k} j^{k} \omega^{k}} .
$$

由于系统是 LTI 的，有 $Y(\omega)=X(\omega) H(\omega)$（或等价地 $H(\omega)=\frac{Y(\omega)}{X(\omega)}$），由上式可知系统的频率响应 $H$ 为

$$
H(\omega)=\frac{\sum_{k=0}^{M} a_{k} j^{k} \omega^{k}}{\sum_{k=0}^{N} b_{k} j^{k} \omega^{k}} .
$$

可见，对于上述形式的系统，其频率响应是一个有理函数——这也是我们关注有理函数的原因。

**例 6.35（微分方程到频率响应）**。一个 LTI 系统输入为 $x$，输出为 $y$，其微分方程为

$$
7 y^{\prime \prime}(t)+11 y^{\prime}(t)+13 y(t)=5 x^{\prime}(t)+3 x(t)
$$

其中 $x^{\prime}, y^{\prime}$ 和 $y^{\prime \prime}$ 分别表示 $x$ 的一阶导数、$y$ 的一阶导数和 $y$ 的二阶导数。求该系统的频率响应 $H$。

**解**。对给定微分方程取傅里叶变换，得到

$$
7(j \omega)^{2} Y(\omega)+11 j \omega Y(\omega)+13 Y(\omega)=5 j \omega X(\omega)+3 X(\omega)
$$

整理并提取因子，得到

$$
\left(-7 \omega^{2}+11 j \omega+13\right) Y(\omega)=(5 j \omega+3) X(\omega)
$$

因此，频率响应 $H$ 为

$$
H(\omega)=\frac{Y(\omega)}{X(\omega)}=\frac{5 j \omega+3}{-7 \omega^{2}+11 j \omega+13}
$$

**例 6.36（频率响应到微分方程）**。一个 LTI 系统输入为 $x$，输出为 $y$，其频率响应为

$$
H(\omega)=\frac{-7 \omega^{2}+11 j \omega+3}{-5 \omega^{2}+2}
$$

求表征该系统的微分方程。

**解**。由给定频率响应 $H$，有

$$
\frac{Y(\omega)}{X(\omega)}=\frac{-7 \omega^{2}+11 j \omega+3}{-5 \omega^{2}+2}
$$

两边同时乘以 $(-5 \omega^{2}+2) X(\omega)$，得到

$$
-5 \omega^{2} Y(\omega)+2 Y(\omega)=-7 \omega^{2} X(\omega)+11 j \omega X(\omega)+3 X(\omega)
$$

进行简单代数变换，得到

$$
5(j \omega)^{2} Y(\omega)+2 Y(\omega)=7(j \omega)^{2} X(\omega)+11(j \omega) X(\omega)+3 X(\omega)
$$

对上述方程取逆傅里叶变换，得到

$$
5 y^{\prime \prime}(t)+2 y(t)=7 x^{\prime \prime}(t)+11 x^{\prime}(t)+3 x(t)
$$

## 6.16 滤波

在某些应用中，我们希望改变函数的频率分量的相对幅值，或者可能完全消除某些频率分量。这一改变函数频率分量的过程称为**滤波**。滤波器有多种类型，其中一种是**频率选择性滤波器**。频率选择性滤波器能够对某些频率几乎不失真地通过，同时显著衰减其他频率。几种基本的频率选择性滤波器包括：低通、高通和带通滤波器。

理想低通滤波器会消除所有频率幅值大于某个截止频率的频率分量，同时保持其余频率分量不受影响。此类滤波器的频率响应为

$$
H(\omega)= \begin{cases}1 & |\omega| \leq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中 $\omega_{c}$ 为截止频率。该频率响应的示意图见图 6.20(a)。

理想高通滤波器会消除所有频率幅值小于某个截止频率的频率分量，同时保持其余频率分量不受影响。此类滤波器的频率响应为

$$
H(\omega)= \begin{cases}1 & |\omega| \geq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中 $\omega_{c}$ 为截止频率。该频率响应的示意图见图 6.20(b)。

理想带通滤波器会消除所有频率幅值不在两个截止频率之间的频率分量，同时保持其余频率分量不受影响。此类滤波器的频率响应为

$$
H(\omega)= \begin{cases}1 & \omega_{c 1} \leq|\omega| \leq \omega_{c 2} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中 $\omega_{c 1}$ 和 $\omega_{c 2}$ 为截止频率。该频率响应的示意图见图 6.20(c)。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-214.jpg?height=1497&width=866&top_left_y=597&top_left_x=572){width="400"}


图 6.20：滤波器的频率响应示意图。(a) 理想低通滤波器，(b) 理想高通滤波器，(c) 理想带通滤波器。

**例 6.37**（理想滤波器）。对于下列冲激响应 $h$ 给出的每个 LTI 系统，求系统的频率响应 $H$ 并绘制其图像，同时确定系统对应的频率选择性滤波器类型。

(a) $h(t)=\frac{\omega_{c}}{\pi} \operatorname{sinc}\left(\omega_{c} t\right)$，其中 $\omega_{c}$ 为正实常数；  
(b) $h(t)=\delta(t)-\frac{\omega_{c}}{\pi} \operatorname{sinc}\left(\omega_{c} t\right)$，其中 $\omega_{c}$ 为正实常数；  
(c) $h(t)=\frac{2 \omega_{b}}{\pi}\left[\operatorname{sinc}\left(\omega_{b} t\right)\right] \cos \left(\omega_{a} t\right)$，其中 $\omega_{a}$ 和 $\omega_{b}$ 为正实常数。

**解**。以下设系统的输入和输出分别为 $x$ 和 $y$，$X$ 和 $Y$ 分别为 $x$ 和 $y$ 的傅里叶变换。
(a) 系统的频率响应 $H$ 简单来说就是冲激响应 $h$ 的傅里叶变换。因此，我们有

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{\frac{\omega_{c}}{\pi} \operatorname{sinc}\left(\omega_{c} t\right)\right\}(\omega) \\
& =\frac{\omega_{c}}{\pi} \mathcal{F}\left\{\operatorname{sinc}\left(\omega_{c} t\right)\right\}(\omega) \\
& =\frac{\omega_{c}}{\pi}\left[\frac{\pi}{\omega_{c}} \operatorname{rect}\left(\frac{\omega}{2 \omega_{c}}\right)\right] \\
& =\operatorname{rect}\left(\frac{\omega}{2 \omega_{c}}\right) \\
& = \begin{cases}1 & |\omega| \leq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
\end{aligned}
$$

频率响应 $H$ 如图 6.21(a) 所示。由于 $Y(\omega)=H(\omega) X(\omega)$ 且 $H(\omega)=0$ 对于 $|\omega|>\omega_{c}$，$Y$ 仅包含 $X$ 中频率范围 $|\omega| \leq \omega_{c}$ 的分量，即仅保留低频分量。因此，该系统为低通滤波器。

(b) 系统的频率响应 $H$ 简单来说就是冲激响应 $h$ 的傅里叶变换。因此，我们有

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{\delta(t)-\frac{\omega_{c}}{\pi} \operatorname{sinc}\left(\omega_{c} t\right)\right\}(\omega) \\
& =\mathcal{F} \delta(\omega)-\frac{\omega_{c}}{\pi} \mathcal{F}\left\{\operatorname{sinc}\left(\omega_{c} t\right)\right\}(\omega) \\
& =1-\frac{\omega_{c}}{\pi}\left[\frac{\pi}{\omega_{c}} \operatorname{rect}\left(\frac{\omega}{2 \omega_{c}}\right)\right] \\
& =1-\operatorname{rect}\left(\frac{\omega}{2 \omega_{c}}\right) \\
& = \begin{cases}1 & |\omega| \geq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
\end{aligned}
$$

频率响应 $H$ 如图 6.21(b) 所示。由于 $H(\omega)=0$ 对于 $|\omega|<\omega_{c}$，$Y$ 仅包含 $X$ 中频率范围 $|\omega| \geq \omega_{c}$ 的分量，即仅保留高频分量。因此，该系统为高通滤波器。

(c) 系统的频率响应 $H$ 简单来说就是冲激响应 $h$ 的傅里叶变换。因此，我们有

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{\frac{2 \omega_{b}}{\pi}\left[\operatorname{sinc}\left(\omega_{b} t\right)\right] \cos \left(\omega_{a} t\right)\right\}(\omega) \\
& =\frac{\omega_{b}}{\pi} \mathcal{F}\left\{\left[\operatorname{sinc}\left(\omega_{b} t\right)\right]\left(2 \cos \left[\omega_{a} t\right]\right)\right\}(\omega) \\
& =\frac{\omega_{b}}{\pi} \mathcal{F}\left\{\left[\operatorname{sinc}\left(\omega_{b} t\right)\right]\left[e^{j \omega_{a} t}+e^{-j \omega_{a} t}\right]\right\}(\omega) \\
& =\frac{\omega_{b}}{\pi}\left[\mathcal{F}\left\{e^{j \omega_{a} t} \operatorname{sinc}\left(\omega_{b} t\right)\right\}(\omega)+\mathcal{F}\left\{e^{-j \omega_{a} t} \operatorname{sinc}\left(\omega_{b} t\right)\right\}(\omega)\right] \\
& =\frac{\omega_{b}}{\pi}\left[\frac{\pi}{\omega_{b}} \operatorname{rect}\left(\frac{\omega-\omega_{a}}{2 \omega_{b}}\right)+\frac{\pi}{\omega_{b}} \operatorname{rect}\left(\frac{\omega+\omega_{a}}{2 \omega_{b}}\right)\right] \\
& =\operatorname{rect}\left(\frac{\omega-\omega_{a}}{2 \omega_{b}}\right)+\operatorname{rect}\left(\frac{\omega+\omega_{a}}{2 \omega_{b}}\right) \\
& = \begin{cases}1 & \omega_{a}-\omega_{b} \leq|\omega| \leq \omega_{a}+\omega_{b} \\ 0 & \text { 其他情况 }\end{cases}
\end{aligned}
$$

频率响应 $H$ 如图 6.21(c) 所示。由于 $Y(\omega)=H(\omega) X(\omega)$ 且当 $|\omega|<\omega_{a}-\omega_{b}$ 或 $|\omega|>\omega_{a}+\omega_{b}$ 时 $H(\omega)=0$，因此 $Y$ 仅包含 $X$ 中位于频率范围 $\omega_{a}-\omega_{b} \leq |\omega| \leq \omega_{a}+\omega_{b}$ 的频率分量。换句话说，$X$ 的中间频率分量被保留。因此，该系统表示一个带通滤波器。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-216.jpg?height=1304&width=1089&top_left_y=696&top_left_x=459){width="400"}


图 6.21：本例中各系统的频率响应。(a) 第一个系统，(b) 第二个系统，(c) 第三个系统。

**例 6.38**（低通滤波）。考虑一个 LTI 系统，其冲激响应为

$$
h(t)=300 \operatorname{sinc}(300 \pi t)
$$

利用频域方法，求系统对输入信号

$$
x(t)=\frac{1}{2}+\frac{3}{4} \cos (200 \pi t)+\frac{1}{2} \cos (400 \pi t)-\frac{1}{4} \cos (600 \pi t)
$$

的输出 $y$。

**解**。首先求输入信号 $x$ 的傅里叶变换 $X$：

$$
\begin{aligned}
X(\omega)= & \mathcal{F}\left\{\frac{1}{2}+\frac{3}{4} \cos (200 \pi t)+\frac{1}{2} \cos (400 \pi t)-\frac{1}{4} \cos (600 \pi t)\right\}(\omega) \\
= & \frac{1}{2} \mathcal{F}\{1\}(\omega)+\frac{3}{4} \mathcal{F}\{\cos (200 \pi t)\}(\omega)+\frac{1}{2} \mathcal{F}\{\cos (400 \pi t)\}(\omega)-\frac{1}{4} \mathcal{F}\{\cos (600 \pi t)\}(\omega) \\
= & \frac{1}{2}[2 \pi \delta(\omega)]+\frac{3 \pi}{4}[\delta(\omega+200 \pi)+\delta(\omega-200 \pi)] + \frac{\pi}{2}[\delta(\omega+400 \pi)+\delta(\omega-400 \pi)] \\
& -\frac{\pi}{4}[\delta(\omega+600 \pi)+\delta(\omega-600 \pi)] \\
= & -\frac{\pi}{4} \delta(\omega+600 \pi)+\frac{\pi}{2} \delta(\omega+400 \pi)+\frac{3 \pi}{4} \delta(\omega+200 \pi)+\pi \delta(\omega) \\
& +\frac{3 \pi}{4} \delta(\omega-200 \pi)+\frac{\pi}{2} \delta(\omega-400 \pi)-\frac{\pi}{4} \delta(\omega-600 \pi)
\end{aligned}
$$

如图 6.22(a) 所示为 $X$ 的频谱。

根据例 6.37，系统的频率响应 $H$ 为

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\{300 \operatorname{sinc}(300 \pi t)\}(\omega) \\
& =\operatorname{rect}\left(\frac{\omega}{2 \cdot 300 \pi}\right) \\
& = \begin{cases}1 & |\omega| \leq 300 \pi \\ 0 & \text{其他情况}\end{cases}
\end{aligned}
$$

频率响应 $H$ 如图 6.22(b) 所示。

输出信号的频谱为

$$
\begin{aligned}
Y(\omega) & = H(\omega) X(\omega) \\
& = \frac{3 \pi}{4} \delta(\omega+200 \pi) + \pi \delta(\omega) + \frac{3 \pi}{4} \delta(\omega-200 \pi)
\end{aligned}
$$

如图 6.22(c) 所示。

对 $Y$ 进行逆傅里叶变换得到输出 $y(t)$：

$$
\begin{aligned}
y(t) & = \mathcal{F}^{-1}\left\{\frac{3 \pi}{4} \delta(\omega+200 \pi)+\pi \delta(\omega)+\frac{3 \pi}{4} \delta(\omega-200 \pi)\right\}(t) \\
& = \pi \mathcal{F}^{-1}\{\delta(\omega)\}(t) + \frac{3}{4} \mathcal{F}^{-1}\{\pi[\delta(\omega+200 \pi)+\delta(\omega-200 \pi)]\}(t) \\
& = \pi \cdot \frac{1}{2\pi} + \frac{3}{4} \cos(200 \pi t) \\
& = \frac{1}{2} + \frac{3}{4} \cos(200 \pi t)
\end{aligned}
$$

因此，输出信号 $y(t)$ 为输入信号经过 300 Hz 理想低通滤波后的结果，只保留频率小于等于 300 Hz 的分量。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-218.jpg?height=1171&width=1514&top_left_y=742&top_left_x=245){width="400"}


图 6.22：低通滤波例的频谱。(a) 输入 $x$ 的频谱，(b) 系统的频率响应，(c) 输出 $y$ 的频谱。

**例 6.39**（带通滤波）。考虑一个 LTI 系统，其冲激响应为

$$
h(t)=\frac{2}{\pi} \operatorname{sinc}(t) \cos (4 t)
$$

利用频域方法，求系统对输入信号

$$
x(t)=-1+2 \cos (2 t)+\cos (4 t)-\cos (6 t)
$$

的输出 $y$。

**解**。首先求输入信号 $x$ 的傅里叶变换 $X$：

$$
\begin{aligned}
X(\omega) & = -1 \cdot \mathcal{F}\{1\}(\omega) + 2 \cdot \mathcal{F}\{\cos(2 t)\}(\omega) + \mathcal{F}\{\cos(4 t)\}(\omega) - \mathcal{F}\{\cos(6 t)\}(\omega) \\
& = -2 \pi \delta(\omega) + 2 \pi [\delta(\omega-2)+\delta(\omega+2)] + \pi[\delta(\omega-4)+\delta(\omega+4)] - \pi[\delta(\omega-6)+\delta(\omega+6)] \\
& = -\pi \delta(\omega+6) + \pi \delta(\omega+4) + 2 \pi \delta(\omega+2) - 2 \pi \delta(\omega) + 2 \pi \delta(\omega-2) + \pi \delta(\omega-4) - \pi \delta(\omega-6)
\end{aligned}
$$

如图 6.23(a) 所示为 $X$ 的频谱。

根据例 6.37，系统的频率响应 $H$ 为

$$
\begin{aligned}
H(\omega) & = \mathcal{F}\left\{\frac{2}{\pi} \operatorname{sinc}(t) \cos(4 t)\right\}(\omega) \\
& = \operatorname{rect}\left(\frac{\omega-4}{2}\right) + \operatorname{rect}\left(\frac{\omega+4}{2}\right) \\
& = \begin{cases}1 & 3 \leq |\omega| \leq 5 \\ 0 & \text{其他情况} \end{cases}
\end{aligned}
$$

频率响应 $H$ 如图 6.23(b) 所示。

输出信号的频谱为

$$
\begin{aligned}
Y(\omega) & = H(\omega) X(\omega) \\
& = \pi \delta(\omega+4) + \pi \delta(\omega-4)
\end{aligned}
$$

对 $Y$ 进行逆傅里叶变换得到输出 $y(t)$：

$$
\begin{aligned}
y(t) & = \mathcal{F}^{-1}\{\pi \delta(\omega+4) + \pi \delta(\omega-4)\}(t) \\
& = \cos(4 t)
\end{aligned}
$$

因此，输出信号 $y(t)$ 为输入信号经过带通滤波后，只保留频率在 $3 \leq |\omega| \leq 5$ 的成分，即仅剩余 $\cos(4 t)$ 分量。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-219.jpg?height=917&width=1514&top_left_y=286&top_left_x=372){width="400"}


图 6.23：带通滤波例的频谱。(a) 输入 $x$ 的频谱，(b) 系统的频率响应，(c) 输出 $y$ 的频谱。

## 6.17 均衡（Equalization）

在实际应用中，我们常常会遇到这样的情况：系统具有特定的频率响应，而这种响应对于当前应用而言并不理想。因此，我们希望将系统的频率响应调整为更理想的状态。这个通过修改频率响应的过程称为**均衡**。本质上，均衡就是一种滤波操作，其滤波的目的在于获得更理想的频率响应。

下面我们来分析均衡背后的数学原理。考虑图6.24(a)所示的具有冲激响应 $h_{\text {orig }}$ 的线性时不变（LTI）系统。设 $H_{\text {orig }}$ 为 $h_{\text {orig }}$ 的傅里叶变换。假设由于某种原因，频率响应 $H_{\text {orig }}$ 不理想（即系统的行为不符合当前应用的需求）。因此，我们希望系统具有频率响应 $H_{\mathrm{d}}$。实际上，我们希望以某种方式将原系统的频率响应 $H_{\text {orig }}$ 改变为 $H_{\mathrm{d}}$。这可以通过使用另一个称为**均衡器（equalizer）**的系统来实现。更具体地，考虑图6.24(b)所示的新系统，该系统由具有冲激响应 $h_{\text {eq }}$ 的 LTI 均衡器与原系统（冲激响应为 $h_{\text {orig }}$）串联组成。设 $H_{\text {eq }}$ 为 $h_{\text {eq }}$ 的傅里叶变换。从该方框图可得：

$$
Y(\omega)=H(\omega) X(\omega),
$$

其中 $H(\omega)=H_{\text {orig }}(\omega) H_{\text {eq }}(\omega)$。实际上，我们希望强制 $H$ 等于 $H_{\mathrm{d}}$，以便整体（即串联）系统具有期望的频率响应。因此，我们选择均衡器，使其满足：

$$
H_{\mathrm{eq}}(\omega)=\frac{H_{\mathrm{d}}(\omega)}{H_{\mathrm{orig}}(\omega)}
$$

于是，我们得到：

$$
\begin{aligned}
H(\omega) & =H_{\text {orig }}(\omega) H_{\text {eq }}(\omega) \\ 
& =H_{\text {orig }}(\omega)\left[\frac{H_{d}(\omega)}{H_{\text {orig }}(\omega)}\right] \\ 
& =H_{\mathrm{d}}(\omega) .
\end{aligned}
$$

因此，图6.24(b)中的系统具有所期望的频率响应 $H_{\mathrm{d}}$。

均衡在许多应用中都有使用。在实际通信系统中，均衡用于消除或最小化信号通过（非理想）通信信道时引入的失真。在音频应用中，均衡可用于增强或减弱某些频率范围的声音。例如，在立体声音频输出中，我们常常希望增强低音（即强调低频）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-220.jpg?height=168&width=1416&top_left_y=289&top_left_x=262){width="400"}


图6.24：均衡示例。(a) 原系统。(b) 带均衡的新系统。

**例 6.40**（通信信道均衡）。考虑一个线性时不变（LTI）通信信道，其频率响应为

$$
H(\omega)=\frac{1}{3+j \omega} .
$$

不幸的是，该信道具有衰减高频的缺点。求一个均衡器的频率响应 $G$，使其与通信信道串联后得到一个理想（即无失真）的信道。带均衡的新系统如图6.25所示，其中 $g$ 和 $h$ 分别表示 $G$ 和 $H$ 的逆傅里叶变换。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-220.jpg?height=88&width=692&top_left_y=564&top_left_x=651){width="400"}


图6.25：使用均衡的示例系统。

**解答**。理想通信信道的频率响应在所有频率下均为 1。因此，我们希望满足 $H(\omega) G(\omega)=1$，等价地，$G(\omega)=1 / H(\omega)$。由此可得：

$$
\begin{aligned}
G(\omega) & =\frac{1}{H(\omega)} \\ 
& =\frac{1}{\left(\frac{1}{3+j \omega}\right)} \\ 
& =3+j \omega
\end{aligned}
$$

## 6.18 电路分析（Circuit Analysis）

傅里叶变换的一个重要应用是电路分析。本节将讨论这一具体应用。  
许多电气网络的基本构件是电阻器、电感器和电容器。下面我们将简要介绍这些电路元件。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-221.jpg?height=250&width=1411&top_left_y=294&top_left_x=416){width="400"}
  
图6.26：基本电气元件。(a) 电阻器，(b) 电感器，(c) 电容器。

**电阻器** 是一种阻碍电流流动的电路元件。图6.26(a)给出了其原理图表示，其满足关系式：

$$
v(t)=R i(t) \quad\left(\text { 或等价地, } i(t)=\frac{1}{R} v(t)\right),
$$

其中 $R$、$v$ 和 $i$ 分别表示电阻值、电阻两端的电压和通过电阻的电流。注意，电阻 $R$ 是非负量（即 $R \geq 0$）。在频域中，上述关系式变为：

$$
V(\omega)=R I(\omega) \quad\left(\text { 或等价地, } I(\omega)=\frac{1}{R} V(\omega)\right),
$$

其中 $V$ 和 $I$ 分别为 $v$ 和 $i$ 的傅里叶变换。

**电感器** 是一种将电流转换为磁场或将磁场转换为电流的电路元件。图6.26(b)给出了其原理图表示，其满足关系式：

$$
v(t)=L \frac{d}{d t} i(t) \quad\left(\text { 或等价地, } i(t)=\frac{1}{L} \int_{-\infty}^{t} v(\tau) d \tau\right),
$$

其中 $L$、$v$ 和 $i$ 分别表示电感量、电感两端的电压和通过电感的电流。注意，电感量 $L$ 是非负量（即 $L \geq 0$）。在频域中，上述关系式变为：

$$
V(\omega)=j \omega L I(\omega) \quad\left(\text { 或等价地, } I(\omega)=\frac{1}{j \omega L} V(\omega)\right),
$$

其中 $V$ 和 $I$ 分别为 $v$ 和 $i$ 的傅里叶变换。

**电容器** 是一种储存电荷的电路元件。图6.26(c)给出了其原理图表示，其满足关系式：

$$
v(t)=\frac{1}{C} \int_{-\infty}^{t} i(\tau) d \tau \quad\left(\text { 或等价地, } i(t)=C \frac{d}{d t} v(t)\right),
$$

其中 $C$、$v$ 和 $i$ 分别表示电容值、电容两端的电压和通过电容的电流。注意，电容 $C$ 是非负量（即 $C \geq 0$）。在频域中，上述关系式变为：

$$
V(\omega)=\frac{1}{j \omega C} I(\omega) \quad(\text { 或等价地, } I(\omega)=j \omega C V(\omega)),
$$

其中 $V$ 和 $I$ 分别为 $v$ 和 $i$ 的傅里叶变换。

注意，对于电感器和电容器而言，用傅里叶域来表达其特性方程通常比时域更为简洁。因此，使用傅里叶变换可以显著简化包含电感和电容的电路分析过程。

---

**例 6.41**（简单 RC 网络）。考虑图6.27所示的电阻-电容（RC）网络，输入为 $v_{0}$，输出为 $v_{1}$。该系统是线性时不变（LTI）的，可以用常系数线性微分方程描述。  
(a) 求描述该系统的微分方程。  
(b) 求系统的频率响应 $H$。  
(c) 判断该系统最接近哪种类型的频率选择性滤波器。  
(d) 当 $v_{0}(t)=e^{-t /(R C)} u(t)$ 时，求 $v_{1}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-222.jpg?height=301&width=490&top_left_y=294&top_left_x=748){width="400"}
  
图6.27：简单 RC 网络。

**解答**。  
(a) 根据基本电路分析，我们有：

$$
\begin{gathered}
v_{0}(t)=R i(t)+v_{1}(t) \quad \text { 以及 } \\
i(t)=C \frac{d}{d t} v_{1}(t)
\end{gathered}
$$

（回顾：通过电容 $C$ 的电流 $i$ 与电容两端电压 $v$ 的关系为 $i(t)=C \frac{d}{d t} v(t)$。）  
将上述方程结合，得到：

$$
v_{0}(t)=R C \frac{d}{d t} v_{1}(t)+v_{1}(t)
$$

因此，我们得到了描述系统的微分方程。

(b) 对描述系统的微分方程进行傅里叶变换，可得：

$$
\begin{gathered}
V_{0}(\omega)=j \omega R C V_{1}(\omega)+V_{1}(\omega) \quad \Rightarrow \\
V_{0}(\omega)=(j R C \omega+1) V_{1}(\omega) \quad \Rightarrow \\
\frac{V_{1}(\omega)}{V_{0}(\omega)}=\frac{1}{j R C \omega+1} .
\end{gathered}
$$

由于系统是 LTI，频率响应为 $H(\omega)=\frac{V_{1}(\omega)}{V_{0}(\omega)}$，因此：

$$
\begin{equation*}
H(\omega)=\frac{1}{j R C \omega+1} \tag{6.36}
\end{equation*}
$$

(c) 求 $H(\omega)$ 的幅值：

$$
\begin{aligned}
|H(\omega)| & =\left|\frac{1}{j R C \omega+1}\right| \\
& =\frac{1}{\sqrt{(R C \omega)^{2}+1}}
\end{aligned}
$$

由于 $|H(0)|=1$ 且 $\lim _{|\omega| \rightarrow \infty}|H(\omega)|=0$，该系统最接近低通滤波器。

(d) 设 $v_{0}(t)=e^{-t /(R C)} u(t)$。对输入 $v_{0}$ 进行傅里叶变换（利用表6.2），得到：

$$
\begin{align*}
V_{0}(\omega) & =\frac{1}{\frac{1}{R C}+j \omega} \\
& =\frac{R C}{j R C \omega+1} \tag{6.37}
\end{align*}
$$

由于系统是 LTI，我们有：

$$
\begin{equation*}
V_{1}(\omega)=H(\omega) V_{0}(\omega) \tag{6.38}
\end{equation*}
$$

将 (6.37) 和 (6.36) 代入 (6.38)，得到：

$$
\begin{aligned}
V_{1}(\omega) & =\left(\frac{1}{j R C \omega+1}\right)\left(\frac{R C}{j R C \omega+1}\right) \\
& =\frac{R C}{(j R C \omega+1)^{2}}
\end{aligned}
$$

对两边取逆傅里叶变换，得到：

$$
\begin{aligned}
v_{1}(t) & =\mathcal{F}^{-1}\left\{\frac{R C}{(j R C \omega+1)^{2}}\right\}(t) \\
& =\mathcal{F}^{-1}\left\{\frac{R C}{\left[(R C)\left(j \omega+\frac{1}{R C}\right)\right]^{2}}\right\}(t) \\
& =\mathcal{F}^{-1}\left\{\frac{1}{R C\left(j \omega+\frac{1}{R C}\right)^{2}}\right\}(t) \\
& =\frac{1}{R C} \mathcal{F}^{-1}\left\{\frac{1}{\left(j \omega+\frac{1}{R C}\right)^{2}}\right\}(t)
\end{aligned}
$$

利用表6.2，可化简为：

$$
v_{1}(t)=\frac{1}{R C} t e^{-t /(R C)} u(t)
$$

因此，在给定 $v_{0}$ 的情况下，我们得到了 $v_{1}$。

## 6.19 幅度调制（Amplitude Modulation）

在通信系统中，我们经常需要使用与原始信号不同的频率范围来传输信号。例如，语音或音频信号通常包含 0 到 22 kHz 范围内的信息。通常，使用信号的原始频率范围进行传输并不现实。这种方法可能面临两个潜在问题：1）干扰；2）天线长度的限制。  

由于许多信号是通过无线电波广播的，我们必须确保没有两个发射器使用相同的频段，以避免干扰。此外，在通过电磁波（例如无线电波）进行传输的情况下，对于相对低频的信号，所需天线的长度会变得不切实际。基于上述原因，我们通常需要在传输前改变信号所对应的频率范围。下面我们将讨论一种实现这一目标的方案，该方案称为**幅度调制（AM）**。

幅度调制在许多通信系统中都有应用。幅度调制存在多种变体。这里，我们考虑两种最简单的变体：**双边带/载波抑制（DSB/SC）** 和 **单边带/载波抑制（SSB/SC）**。

### 6.19.1 用复正弦波进行调制（Modulation With a Complex Sinusoid）

考虑图6.28所示的通信系统。下面我们将详细分析该系统的行为。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-224.jpg?height=252&width=817&top_left_y=694&top_left_x=591){width="400"}


图6.28：简单通信系统。(a) 发射器，(b) 接收器。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-224.jpg?height=741&width=1543&top_left_y=1172&top_left_x=243){width="400"}


图6.29：用复正弦波调制的频谱。(a) 发射器输入的频谱。(b) 发射器使用的复正弦波频谱。(c) 接收器使用的复正弦波频谱。(d) 发射信号的频谱。(e) 接收器输出的频谱。

首先考虑图6.28(a)中的发射器。该发射器是一个输入为 $x$、输出为 $y$ 的系统，其由下式描述：

$$
\begin{equation*}
y(t)=c_{1}(t) x(t) \tag{6.39}
\end{equation*}
$$

其中

$$
c_{1}(t)=e^{j \omega_{c} t}
$$

设 $X, Y$ 和 $C_{1}$ 分别为 $x, y$ 和 $c_{1}$ 的傅里叶变换。对 (6.39) 两边进行傅里叶变换，得到：

$$
\begin{align*}
Y(\omega) & =\mathcal{F}\left\{c_{1} x\right\}(\omega) \\
& =\mathcal{F}\left\{e^{j \omega_{c} t} x(t)\right\}(\omega) \\
& =X\left(\omega-\omega_{c}\right) \tag{6.40}
\end{align*}
$$

因此，发射器输出的频谱只是发射器输入频谱向 $\omega_{c}$ 平移后的结果。输入与输出频谱之间的关系如图6.29所示。显然，输出的频谱已按预期移至不同的频率范围。接下来，我们需要判断接收器是否能够从发射信号 $y$ 中恢复原始信号 $x$。

考虑图6.28(b)中的接收器。该接收器是一个输入为 $y$、输出为 $\hat{x}$ 的系统，其由下式描述：

$$
\begin{equation*}
\hat{x}(t)=c_{2}(t) y(t), \tag{6.41}
\end{equation*}
$$

其中

$$
c_{2}(t)=e^{-j \omega_{c} t}
$$

为了使通信系统有意义，接收信号 $\hat{x}$ 需要等于发射器的原始信号 $x$。设 $Y, \hat{X}$ 和 $C_{2}$ 分别为 $y, \hat{x}$ 和 $c_{2}$ 的傅里叶变换。对 (6.41) 两边进行傅里叶变换，得到：

$$
\begin{aligned}
\hat{X}(\omega) & =\mathcal{F}\left\{c_{2} y\right\}(\omega) \\
& =\mathcal{F}\left\{e^{-j \omega_{c} t} y(t)\right\}(\omega) \\
& =Y\left(\omega+\omega_{c}\right)
\end{aligned}
$$

将 (6.40) 中的 $Y$ 代入上式，得到：

$$
\begin{aligned}
\hat{X}(\omega) & =X\left(\left[\omega+\omega_{c}\right]-\omega_{c}\right) \\
& =X(\omega)
\end{aligned}
$$

由于 $\hat{X}=X$，接收信号 $\hat{x}$ 等于发射器的原始信号 $x$。因此，该通信系统实现了预期的功能。AM 系统中各信号频谱的关系如图6.29所示。

虽然上述结果在数学上非常有趣，但它在实际中并没有直接应用。困难在于 $c_{1}, c_{2}$ 和 $y$ 是复值信号，而复值信号在物理世界中无法实现。然而，该通信系统仍具有启发意义，它为我们下一步讨论的实用系统的发展提供了理论基础。

### 6.19.2 DSB/SC 幅度调制（DSB/SC Amplitude Modulation）

现在，考虑图6.30所示的通信系统。该系统称为**双边带/载波抑制（DSB/SC）幅度调制（AM）系统**。图6.30(b)中的接收器包含一个标注了冲激响应 $h$ 的 LTI 子系统。DSB/SC AM 系统与前面图6.28所示的系统非常相似。然而，在新系统中，用复正弦波乘法被替换为实正弦波乘法。新系统还要求输入信号 $x$ 的频率受限于区间 $\left[-\omega_{b}, \omega_{b}\right]$，且满足

$$
\begin{equation*}
\omega_{b}<\omega_{c 0}<2 \omega_{c}-\omega_{b} . \tag{6.42}
\end{equation*}
$$

这一限制的原因将在详细分析系统后变得清楚。

考虑图6.30(a)中的发射器。该发射器是输入为 $x$、输出为 $y$ 的系统，其由下式描述：

$$
y(t)=c(t) x(t),
$$

其中

$$
c(t)=\cos \left(\omega_{c} t\right) .
$$

对上述方程两边取傅里叶变换，得到：

$$
\begin{align*}
Y(\omega) & =\mathcal{F}\{c x\}(\omega) \\
& =\mathcal{F}\left\{\cos \left(\omega_{c} t\right) x(t)\right\}(\omega) \\
& =\mathcal{F}\left\{\frac{1}{2}\left[e^{j \omega_{c} t}+e^{-j \omega_{c} t}\right] x(t)\right\}(\omega) \\
& =\frac{1}{2}\left[\mathcal{F}\left\{e^{j \omega_{c} t} x(t)\right\}(\omega)+\mathcal{F}\left\{e^{-j \omega_{c} t} x(t)\right\}(\omega)\right] \\
& =\frac{1}{2}\left[X\left(\omega-\omega_{c}\right)+X\left(\omega+\omega_{c}\right)\right] . \tag{6.43}
\end{align*}
$$

（注意，上式利用了 $\cos \left(\omega_{c} t\right)=\frac{1}{2}\left(e^{j \omega_{c} t}+e^{-j \omega_{c} t}\right)$。）  
因此，发射器输出的频谱是输入频谱的两个平移版本的平均值。输入与输出频谱的关系可参见图6.31(a)和(d)。可以看到，我们已将输入信号的频谱移至不同的频率范围以便传输。接下来，需要确定接收器能否恢复原始信号 $x$。

考虑图6.30(b)中的接收器。该接收器是输入为 $y$、输出为 $\hat{x}$ 的系统，其由下式描述：

$$
\begin{gather*}
v(t)=c(t) y(t) \quad \text { 和 }  \tag{6.44a}\\
\hat{x}(t)=v * h(t) \tag{6.44b}
\end{gather*}
$$

其中 $c$ 如前定义，且

$$
\begin{equation*}
h(t)=\frac{2 \omega_{c 0}}{\pi} \operatorname{sinc}\left(\omega_{c 0} t\right) . \tag{6.44c}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-226.jpg?height=257&width=1084&top_left_y=316&top_left_x=478){width="400"}


图6.30：DSB/SC 幅度调制系统。(a) 发射器，(b) 接收器。

设 $H, Y, V$ 和 $\hat{X}$ 分别为 $h, y, v$ 和 $\hat{x}$ 的傅里叶变换。对 (6.44b) 中的 $\hat{x}$ 取傅里叶变换，得到：

$$
\begin{equation*}
\hat{X}(\omega)=H(\omega) V(\omega) . \tag{6.45}
\end{equation*}
$$

利用表6.2对 $h$（6.44c）取傅里叶变换，得到：

$$
\begin{aligned}
H(\omega) & =\mathcal{F}\left\{\frac{2 \omega_{c 0}}{\pi} \operatorname{sinc}\left(\omega_{c 0} t\right)\right\}(\omega) \\
& =2 \operatorname{rect}\left(\frac{\omega}{2 \omega_{c 0}}\right) \\
& = \begin{cases}2 & |\omega| \leq \omega_{c 0} \\ 0 & \text { 否则 }\end{cases}
\end{aligned}
$$

对 $v$（6.44a）取傅里叶变换，得到：

$$
\begin{aligned}
V(\omega) & =\mathcal{F}\{c y\}(\omega) \\
& =\mathcal{F}\left\{\cos \left(\omega_{c} t\right) y(t)\right\}(\omega) \\
& =\mathcal{F}\left\{\frac{1}{2}\left(e^{j \omega_{c} t}+e^{-j \omega_{c} t}\right) y(t)\right\}(\omega) \\
& =\frac{1}{2}\left[\mathcal{F}\left\{e^{j \omega_{c} t} y(t)\right\}(\omega)+\mathcal{F}\left\{e^{-j \omega_{c} t} y(t)\right\}(\omega)\right] \\
& =\frac{1}{2}\left[Y\left(\omega-\omega_{c}\right)+Y\left(\omega+\omega_{c}\right)\right] .
\end{aligned}
$$

将 (6.43) 中的 $Y$ 代入上式，得到：

$$
\begin{align*}
V(\omega) & =\frac{1}{2}\left[\frac{1}{2}\left[X\left(\left[\omega-\omega_{c}\right]-\omega_{c}\right)+X\left(\left[\omega-\omega_{c}\right]+\omega_{c}\right)\right]+\frac{1}{2}\left[X\left(\left[\omega+\omega_{c}\right]-\omega_{c}\right)+X\left(\left[\omega+\omega_{c}\right]+\omega_{c}\right)\right]\right] \\
& =\frac{1}{2} X(\omega)+\frac{1}{4} X\left(\omega-2 \omega_{c}\right)+\frac{1}{4} X\left(\omega+2 \omega_{c}\right) \tag{6.46}
\end{align*}
$$

$V$ 与 $X$ 的关系可参见图6.31(a)和(e)。将上述 $V$ 代入 (6.45) 并简化，得到：

$$
\begin{aligned}
\hat{X}(\omega) & =H(\omega) V(\omega) \\
& =H(\omega)\left[\frac{1}{2} X(\omega)+\frac{1}{4} X\left(\omega-2 \omega_{c}\right)+\frac{1}{4} X\left(\omega+2 \omega_{c}\right)\right] \\
& =\frac{1}{2} H(\omega) X(\omega)+\frac{1}{4} H(\omega) X\left(\omega-2 \omega_{c}\right)+\frac{1}{4} H(\omega) X\left(\omega+2 \omega_{c}\right) \\
& =\frac{1}{2}[2 X(\omega)]+\frac{1}{4}(0)+\frac{1}{4}(0) \\
& =X(\omega)
\end{aligned}
$$

在上述简化过程中，由于 $H(\omega)=2 \operatorname{rect}\left(\frac{\omega}{2 \omega_{c 0}}\right)$ 且满足条件 (6.42)，因此可以得到 $H(\omega) X(\omega)=2 X(\omega)$，$H(\omega) X\left(\omega-2 \omega_{c}\right)=0$，$H(\omega) X\left(\omega+2 \omega_{c}\right)=0$。$\hat{X}$ 与 $X$ 的关系可参见图6.31(a)和(f)。因此，$\hat{X}=X$，即 $\hat{x}=x$，成功在接收器端恢复了原始信号 $x$。该系统实现了在传输前将 $x$ 移至不同频率范围，并在接收端恢复 $x$，正是我们所期望的效果。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-228.jpg?height=1522&width=1565&top_left_y=310&top_left_x=216){width="400"}


图6.31：DSB/SC 幅度调制信号频谱。(a) 发射器输入频谱。(b) 发射器和接收器使用的正弦信号频谱。(c) 接收器滤波器频率响应。(d) 发射信号频谱。(e) 接收器乘法器输出频谱。(f) 接收器输出频谱。

### 6.19.3 SSB/SC 幅度调制（SSB/SC Amplitude Modulation）

通过对 DSB/SC AM 系统进行小幅修改，我们可以将系统的带宽需求减半。得到的系统称为**单边带/载波抑制（SSB/SC）幅度调制系统**。该改进系统如图6.32所示。图6.32(a)中的发射器包含一个标注了冲激响应 $g$ 的 LTI 子系统。同样，图6.32(b)中的接收器包含一个标注了冲激响应 $h$ 的 LTI 子系统。设 $X, Y, Q, V, \hat{X}, C, G$ 和 $H$ 分别为 $x, y, q, v, \hat{x}, c, g$ 和 $h$ 的傅里叶变换。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-228.jpg?height=261&width=1255&top_left_y=2120&top_left_x=380){width="400"}


图6.32：SSB/SC 幅度调制系统。(a) 发射器，(b) 接收器。

发射器是输入为 $x$、输出为 $y$ 的系统，其由下式描述：

$$
\begin{gathered}
q(t)=c(t) x(t) \quad \text { 和 } \\
y(t)=q * g(t)
\end{gathered}
$$

其中

$$
\begin{gathered}
c(t)=\cos \left(\omega_{c} t\right) \quad \text { 和 } \\
g(t)=\delta(t)-\frac{\omega_{c}}{\pi} \operatorname{sinc}\left(\omega_{c} t\right)
\end{gathered}
$$

对 $g$ 取傅里叶变换，得到：

$$
G(\omega)= \begin{cases}1 & |\omega| \geq \omega_{c} \\ 0 & \text { 否则 } \end{cases}
$$

接收器是输入为 $y$、输出为 $\hat{x}$ 的系统，其由下式描述：

$$
\begin{gathered}
v(t)=c(t) y(t) \quad \text { 和 } \\
\hat{x}(t)=v * h(t)
\end{gathered}
$$

其中 $c$ 如前定义，且

$$
h(t)=\frac{4 \omega_{c 0}}{\pi} \operatorname{sinc}\left(\omega_{c 0} t\right)
$$

对 $h$ 取傅里叶变换，得到：

$$
H(\omega)= \begin{cases}4 & |\omega| \leq \omega_{c 0} \\ 0 & \text { 否则 } \end{cases}
$$

图6.33 描述了信号通过系统时所经历的变换。可以看到，接收器的输出等于发射器的输入。对该通信系统的详细分析留作读者练习。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-230.jpg?height=1819&width=1630&top_left_y=372&top_left_x=178){width="400"}


图6.33：SSB/SC 幅度调制信号频谱。(a) 发射器输入频谱。(b) 发射器和接收器使用的正弦信号频谱。(c) 发射器滤波器频率响应。(d) 接收器滤波器频率响应。(e) 发射器乘法器输出频谱。(f) 发射信号频谱。(g) 接收器乘法器输出频谱。(h) 接收器输出频谱。

## 6.20 采样与插值

我们经常会遇到需要在离散时间域处理连续时间信号，或在连续时间域处理离散时间信号的情况。例如，我们可能有一个连续时间的音频信号，希望使用数字计算机（离散时间系统）进行处理；或者我们有一个离散时间的音频信号，希望在扬声器上播放（连续时间系统）。显然，需要某种方法来连接连续时间域和离散时间域。这种连接是通过称为**采样**和**插值**的过程实现的。接下来，我们将正式介绍这些过程，并对其进行详细研究。

**采样**允许我们从函数（即连续时间信号）生成序列（即离散时间信号）。虽然采样可以通过多种方式进行，但最常用的方案是**周期采样**。在这种方案下，序列 $y$ 由函数 $x$ 得到，其表达式为
$$
\begin{equation*}
y(n)=x(T n) \quad \text { 对所有整数 } n, \tag{6.47}
\end{equation*}
$$
其中 $T$ 是一个正实数。术语上，$T$ 被称为**采样周期**，而 $\omega_{s}=\frac{2 \pi}{T}$ 被称为（角）**采样频率**。像公式 (6.47) 描述的系统被称为理想连续-离散时间（C/D）转换器，如图 6.34 所示。周期采样的一个例子见图 6.35。图 6.35(a) 显示了待采样的函数 $x$，图 6.35(b) 显示了以采样周期 $T=10$ 对 $x$ 进行采样得到的序列 $y$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-231.jpg?height=130&width=463&top_left_y=297&top_left_x=891){width="400"}


**图 6.34：** 输入函数 $x$ 和输出序列 $y$ 的理想 C/D 转换器。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-231.jpg?height=506&width=1406&top_left_y=524&top_left_x=416){width="400"}


**图 6.35：** 周期采样示例。(a) 待采样函数 $x$，(b) 以采样周期 10 对 $x$ 进行采样得到的序列 $y$。

**插值**允许我们从序列（即离散时间信号）构造函数（即连续时间信号）。实际上，对于给定的序列，该过程构造一个函数，使其在采样时能生成给定序列，通常还会施加一些额外约束。更正式地，对于给定与采样周期 $T$ 相关的序列 $y$，插值生成函数 $\hat{x}$，其表达式为
$$
\hat{x}=\mathcal{H} y,
$$

并满足约束条件
$$
\hat{x}(T n)=y(n) \quad \text { 对所有整数 } n,
$$
其中 $\mathcal{H}$ 是将序列映射为函数的算子。$\mathcal{H}$ 的具体形式取决于所采用的插值方案。虽然插值有多种实现方式，但在后续章节中我们将重点讨论一种称为**带限插值**的方案。插值过程由称为理想离散-连续时间（D/C）转换器的系统执行，如图 6.36 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-231.jpg?height=131&width=463&top_left_y=1169&top_left_x=891){width="400"}


**图 6.36：** 输入序列 $y$ 和输出函数 $\hat{x}$ 的理想 D/C 转换器。

在没有对采样过程施加任何约束的情况下，无法仅通过等间距采样序列唯一确定函数。换句话说，采样过程通常不可逆。例如，考虑如下函数 $x_{1}$ 和 $x_{2}$：
$$
x_{1}(t)=0 \quad \text { 和 } \quad x_{2}(t)=\sin (2 \pi t) .
$$
如果我们以采样周期 $T=1$ 对这两个函数进行采样，得到的序列分别为
$$
y_{1}(n)=x_{1}(T n)=x_{1}(n)=0 \quad \text { 和 } \quad y_{2}(n)=x_{2}(T n)=\sin (2 \pi n)=0 .
$$
因此，尽管 $x_{1} \neq x_{2}$，但 $y_{1}=y_{2}$。这个例子简单地说明，如果对函数没有任何约束，就无法从其采样值唯一确定该函数。

幸运的是，在某些情况下，函数可以通过其采样值精确恢复。特别是，当被采样的函数是**带限信号**时，如果采样周期足够小，等间距采样序列可以唯一确定该函数。这个结果被称为**采样定理**，具有极其重要的意义。

### 6.20.1 采样

为了更好地理解采样，我们需要一种数学方式来对这一过程建模。为此，我们采用图 6.37 所示的理想 C/D 转换器的简单模型。简而言之，我们可以将采样过程视为**冲激列调制**，随后将冲激列转换为样本值序列。更具体地说，要以采样周期 $T$ 对函数 $x$ 进行采样，我们首先将 $x$ 与周期冲激列 $p$ 相乘，得到
$$
\begin{equation*}
s(t)=x(t) p(t), \tag{6.48}
\end{equation*}
$$
其中
$$
p(t)=\sum_{k=-\infty}^{\infty} \delta(t-k T) .
$$
然后，我们取 $s$ 中连续冲激的权重，形成样本序列 $y$。采样频率为 $\omega_{s}=\frac{2 \pi}{T}$。术语上，$p$ 被称为**采样函数**。从图中可以看出，信号 $s$ 和 $y$ 虽然密切相关，但存在一些关键差异。冲激列 $s$ 是一个函数（即连续时间信号），除了在 $T$ 的整数倍（即采样点）处，其值为零；而 $y$ 是一个序列（即离散时间信号），仅在整数上定义，其值对应 $s$ 中连续冲激的权重。采样过程中涉及的各种信号如图 6.38 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-232.jpg?height=328&width=739&top_left_y=294&top_left_x=626){width="400"}


**图 6.37：** 输入函数 $x$ 和输出序列 $y$ 的理想 C/D 转换器模型。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-233.jpg?height=1159&width=1549&top_left_y=724&top_left_x=348){width="400"}


**图 6.38：** 采样过程中各信号示例，采样周期为 $T$。 (a) 待采样函数 $x$；(b) 采样函数 $p$；(c) 冲激调制函数 $s$；(d) 采样得到的序列 $y$。

顺便提一下，上述采样模型仅是一种数学便利。也就是说，该模型为我们提供了一种相对简单的方法来研究采样的数学行为。然而，该模型在实际系统中实现采样时并不直接有用。显然，上述模型中使用的冲激列在实现上存在不可逾越的困难。

接下来，我们更详细地分析上述采样模型。特别地，我们希望找到原函数 $x$ 与其冲激列采样版本 $s$ 的频谱之间的关系。以下令 $X, Y, P, S$ 分别表示 $x, y, p, s$ 的傅里叶变换。由于 $p$ 是 $T$-周期的，它可以用傅里叶级数表示为
$$
\begin{equation*}
p(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{s} t} . \tag{6.49}
\end{equation*}
$$
利用傅里叶级数分析公式，我们计算系数 $c_{k}$ 为
$$
\begin{align*}
c_{k} & =\frac{1}{T} \int_{-T / 2}^{T / 2} p(t) e^{-j k \omega_{s} t} d t \\ 
& =\frac{1}{T} \int_{-T / 2}^{T / 2} \delta(t) e^{-j k \omega_{s} t} d t \\ 
& =\frac{1}{T} \int_{-\infty}^{\infty} \delta(t) e^{-j k \omega_{s} t} d t \\ 
& =\frac{1}{T} \\ 
& =\frac{\omega_{s}}{2 \pi} . \tag{6.50}
\end{align*}
$$

将 (6.49) 和 (6.50) 代入 (6.48)，得到
$$
\begin{aligned}
s(t) & =x(t) \sum_{k=-\infty}^{\infty} \frac{\omega_{s}}{2 \pi} e^{j k \omega_{s} t} \\ 
& =\frac{\omega_{s}}{2 \pi} \sum_{k=-\infty}^{\infty} x(t) e^{j k \omega_{s} t}
\end{aligned}
$$
对 $s$ 进行傅里叶变换，得到
$$
\begin{equation*}
S(\omega)=\frac{\omega_{s}}{2 \pi} \sum_{k=-\infty}^{\infty} X\left(\omega-k \omega_{s}\right) . \tag{6.51}
\end{equation*}
$$
因此，冲激列采样函数 $s$ 的频谱是原函数 $x$ 的频谱无限移位副本的缩放叠加。

现在，我们通过一个简单例子进一步说明采样过程在频域中的表现。假设我们有一个函数 $x$，其傅里叶变换为 $X$，且 $|X(\omega)|=0$ 对 $|\omega|>\omega_{m}$（即 $x$ 是带限信号）。为了简化可视化过程，我们假设 $X$ 具有图 6.39(a) 所示的特定形式。然而，在接下来的分析中，我们仅依赖 $x$ 的带限性质，而非其具体定义。因此，以下结论适用于任何带限函数。由 (6.51) 可知，$S$ 是通过无限个移位的 $X$ 副本叠加而成。进一步分析可见，会出现两种不同情况：形成 $S$ 的 $X$ 副本的非零部分要么 1) 重叠，要么 2) 不重叠。这两种情况分别如图 6.39(c) 和图 6.39(b) 所示。从图中可见，如果
$$
\omega_{m}<\omega_{s}-\omega_{m} \quad \text { 且 } \quad -\omega_{m}>-\omega_{s}+\omega_{m}
$$
或等价地
$$
\omega_{s}>2 \omega_{m} ,
$$
则 $X$ 副本的非零部分不会重叠。考虑图 6.39(b) 所示的情况，其中 $S$ 中的原频谱 $X$ 副本不重叠。在这种情况下，原函数的频谱 $X$ 在 $S$ 中清晰可见。实际上，可以通过低通滤波直接从 $S$ 得到原频谱 $X$，从而精确恢复原函数 $x$。

再考虑 $S$ 中的 $X$ 副本重叠的情况。在这种情况下，原函数 $X$ 中的多个频率被映射到 $S$ 的同一频率。这种现象称为**混叠（aliasing）**。显然，混叠导致 $S$ 的各个周期形状与原频谱 $X$ 不同。当发生混叠时，无法从 $S$ 中辨识原频谱 $X$，因此无法从 $s$ 恢复原函数 $x$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-235.jpg?height=1260&width=1111&top_left_y=394&top_left_x=570){width="400"}


**图 6.39：** 冲激列采样对频谱的影响。(a) 待采样函数 $x$ 的频谱；(b) 无混叠情况下 $s$ 的频谱；(c) 有混叠情况下 $s$ 的频谱。

### 6.20.2 插值与从样本重建函数

插值允许我们从序列（即离散时间信号）构造函数（即连续时间信号）。该过程本质上用于确定函数在采样点之间的取值。除非在非常特殊的情况下，否则通常无法从样本精确重现函数。尽管存在多种插值方案，我们将在稍后重点讨论其中的一种。插值过程可以用简单的理想 D/C 转换器系统建模，如图 6.40 所示。这种特定类型的插值称为**带限插值**。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-235.jpg?height=304&width=836&top_left_y=1993&top_left_x=702){width="400"}


**图 6.40：** 输入序列 $y$ 和输出函数 $\hat{x}$ 的理想 D/C 转换器模型。

回想图 6.37 中的理想 C/D 转换器。由于将冲激列转换为序列的过程是可逆的，如果我们能够从 $s$ 中恢复 $x$，就可以从其样本序列 $y$ 重建原函数 $x$。现在假设 $x$ 是带限信号。正如上一节所示，如果 $x$ 是带限信号且采样率足够高以避免混叠，则可以从 $s$ 中恢复 $x$。在没有混叠的情况下，我们可以使用图 6.40 所示的理想 D/C 转换器从 $y$ 重建原函数 $x$。接下来，我们将推导从样本 $y$ 计算原函数 $\hat{x}$ 的公式。

考虑 D/C 转换器模型。我们有一个冲激响应为
$$
h(t)=\operatorname{sinc}\left(\frac{\pi t}{T}\right)=\operatorname{sinc}\left(\frac{\omega_{s} t}{2}\right)
$$
的低通滤波器，其频率响应为
$$
H(\omega)=T \operatorname{rect}\left(\frac{T \omega}{2 \pi}\right)=\frac{2 \pi}{\omega_{s}} \operatorname{rect}\left(\frac{\omega}{\omega_{s}}\right)= \begin{cases}T & |\omega|<\frac{\omega_{s}}{2} \\ 0 & \text { 否则 }\end{cases}
$$
首先，我们将序列 $y$ 转换为冲激列 $s$：
$$
s(t)=\sum_{n=-\infty}^{\infty} y(n) \delta(t-T n)
$$
然后，用冲激响应为 $h$ 的低通滤波器对 $s$ 进行滤波，得到
$$
\begin{aligned}
\hat{x}(t) & =s * h(t) \\ 
& =\int_{-\infty}^{\infty} s(\tau) h(t-\tau) d \tau \\ 
& =\int_{-\infty}^{\infty} h(t-\tau) \sum_{n=-\infty}^{\infty} y(n) \delta(\tau-T n) d \tau \\ 
& =\sum_{n=-\infty}^{\infty} y(n) \int_{-\infty}^{\infty} h(t-\tau) \delta(\tau-T n) d \tau \\ 
& =\sum_{n=-\infty}^{\infty} y(n) h(t-T n) \\ 
& =\sum_{n=-\infty}^{\infty} y(n) \operatorname{sinc}\left[\frac{\pi}{T}(t-T n)\right]
\end{aligned}
$$
如果 $x$ 是带限信号且避免了混叠，则 $\hat{x}=x$，由此得到一个从样本 $y$ 精确重现 $x$ 的公式。

### 6.20.3 采样定理

在前几节中，我们已经建立了下述定理所给出的重要结果。

**定理 6.19（采样定理）**：设 $x$ 为一个傅里叶变换为 $X$ 的函数，$y$ 为对 $x$ 以采样周期 $T$ 进行周期采样得到的序列（即 $y(n)=x(T n)$）。假设 $|X(\omega)|=0$ 对所有 $|\omega|>\omega_{M}$（即 $x$ 是带限信号，其带宽限制在 $\left[-\omega_{M}, \omega_{M}\right]$）。则如果满足
$$
\begin{equation*}
\omega_{s}>2 \omega_{M} \tag{6.52}
\end{equation*}
$$
其中 $\omega_{s}=\frac{2 \pi}{T}$，则 $x$ 可由 $y$ 唯一确定。特别地，如果满足 (6.52)，则有
$$
x(t)=\sum_{n=-\infty}^{\infty} y(n) \operatorname{sinc}\left[\frac{\pi}{T}(t-T n)\right]
$$
或者等价地（即用 $\omega_{s}$ 代替 $T$ 重写），
$$
x(t)=\sum_{n=-\infty}^{\infty} y(n) \operatorname{sinc}\left(\frac{\omega_{s}}{2} t-\pi n\right)
$$

术语上，(6.52) 被称为**奈奎斯特条件**（或奈奎斯特准则）。同时，将 $\frac{\omega_{s}}{2}$ 称为**奈奎斯特频率**，$2 \omega_{M}$ 称为**奈奎斯特采样率**。需要注意的是，奈奎斯特条件是严格不等式。因此，为了在最一般的情况下确保不发生混叠，采样率必须大于奈奎斯特采样率。然而可以证明，如果频谱在奈奎斯特频率处没有冲激，则采样率取恰好等于奈奎斯特采样率即可。

**例 6.42**：设 $x$ 为连续时间音频信号，其傅里叶变换为 $X$。假设 $|X(\omega)|=0$ 对所有 $|\omega| \geq 44100 \pi$。求允许从其样本精确恢复 $x$ 的最大采样周期 $T$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-237.jpg?height=404&width=1355&top_left_y=291&top_left_x=453){width="400"}


**图 6.41：** 函数 $x$ 的频谱。

**解答**：函数 $x$ 的带宽限制在 $\left(-\omega_{m}, \omega_{m}\right)$ 内，其中 $\omega_{m}=44100 \pi$。根据采样定理，所需的最小采样频率为
$$
\begin{aligned}
\omega_{s} & =2 \omega_{m} \\ 
& =2(44100 \pi) \\ 
& =88200 \pi
\end{aligned}
$$
因此，允许的最大采样周期为
$$
\begin{aligned}
T & =\frac{2 \pi}{\omega_{s}} \\ 
& =\frac{2 \pi}{88200 \pi} \\ 
& =\frac{1}{44100} .
\end{aligned}
$$
虽然采样定理为任意带限函数提供了采样率的上限，但在某些特殊情况下，可能可以采用更小的采样率。下例进一步说明这一点。

**例 6.43**：考虑函数 $x$，其傅里叶变换 $X$ 如图 6.41 所示（其中 $\omega_{c} \gg \omega_{a}$）。  
(a) 直接利用采样定理，求允许从样本精确重建 $x$ 的最大采样周期 $T$。  
(b) 说明如何利用 $X(\omega)=0$ 在区间 $\left[-\omega_{c}-\omega_{a}, \omega_{c}+\omega_{a}\right]$ 的大部分为零的事实，降低 $x$ 的采样率。

**解答**：  
(a) 函数 $x$ 的带宽限制在 $\left[-\omega_{m}, \omega_{m}\right]$ 内，其中 $\omega_{m}=\omega_{c}+\omega_{a}$。因此，所需的最小采样频率为
$$
\begin{aligned}
\omega_{s} & >2 \omega_{m} \\ 
& =2\left(\omega_{c}+\omega_{a}\right) \\ 
& =2 \omega_{c}+2 \omega_{a}
\end{aligned}
$$
最大采样周期为
$$
\begin{aligned}
T & <\frac{2 \pi}{\omega_{s}} \\ 
& =\frac{2 \pi}{2 \omega_{c}+2 \omega_{a}} \\ 
& =\frac{\pi}{\omega_{c}+\omega_{a}} .
\end{aligned}
$$

(b) 我们可以对 $x$ 进行调制并低通滤波，将其频谱信息压缩到 $\left[-2 \omega_{a}, 2 \omega_{a}\right]$ 范围内，得到函数 $x_{1}$。即
$$
x_{1}(t)=\left\{x(t) \cos \left[\left(\omega_{c}-\omega_{a}\right) t\right]\right\} * h(t)
$$
其中
$$
h(t)=\frac{4 \omega_{a}}{\pi} \operatorname{sinc}\left(2 \omega_{a} t\right) \quad \longleftrightarrow \quad H(\omega)=2 \operatorname{rect}\left(\frac{\omega}{4 \omega_{a}}\right) .
$$
该过程可逆（通过调制和滤波），从 $x_{1}$ 得到 $x$。具体地，
$$
x(t)=\left\{x_{1}(t) \cos \left[\left(\omega_{c}-\omega_{a}\right) t\right]\right\} * h_{2}(t)
$$
其中
$$
h_{2}(t)=\delta(t)-\frac{2\left(\omega_{c}-\omega_{a}\right)}{\pi} \operatorname{sinc}\left[\left(\omega_{c}-\omega_{a}\right) t\right] \quad \longleftrightarrow \quad H_{2}(\omega)=2-2 \operatorname{rect}\left[\frac{\omega}{4\left(\omega_{c}-\omega_{a}\right)}\right] .
$$
设 $X_{1}$ 为 $x_{1}$ 的傅里叶变换，如图 6.42 所示。对 $x_{1}$ 应用采样定理，最小采样频率为
$$
\begin{aligned}
\omega_{s} & >2\left(2 \omega_{a}\right) \\ 
& =4 \omega_{a}
\end{aligned}
$$
最大采样周期为
$$
\begin{aligned}
T & <\frac{2 \pi}{\omega_{s}} \\ 
& =\frac{2 \pi}{4 \omega_{a}} \\ 
& =\frac{\pi}{2 \omega_{a}}
\end{aligned}
$$
由于假设 $\omega_{c} \gg \omega_{a}$，此新采样周期大于本例 (a) 部分计算的采样周期。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-238.jpg?height=428&width=833&top_left_y=302&top_left_x=586){width="400"}


**图 6.42：** 函数 $x_{1}$ 的频谱。

## 6.21 练习题

### 6.21.1 无答案练习题

6.1 利用傅里叶变换分析公式，求下列各函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=\operatorname{rect}\left(t-t_{0}\right)$，其中 $t_{0}$ 为实常数；  
(b) $x(t)=e^{-4 t} u(t-1)$；  
(c) $x(t)=3[u(t)-u(t-2)]$；  
(d) $x(t)=e^{-|t|}$。

6.2 设 $y(t)=x(t+a)+x(t-a)$，其中 $a$ 为实常数，$X$ 和 $Y$ 分别为 $x$ 和 $y$ 的傅里叶变换。证明 $Y(\omega)=2 X(\omega) \cos (a \omega)$。

6.3 利用傅里叶变换表和傅里叶变换性质，求下列各函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=\cos (t-5)$；  
(b) $x(t)=e^{-j 5 t} u(t+2)$；  
(c) $x(t)=\cos (t) u(t)$；  
(d) $x(t)=6[u(t)-u(t-3)]$；  
(e) $x(t)=1 / t$；  
(f) $x(t)=t \operatorname{rect}(2 t)$；  
(g) $x(t)=e^{-j 3 t} \sin (5 t-2)$；  
(h) $x(t)=\cos (5 t-2)$；  
(i) $x(t)=x_{1} * x_{2}(t)$，其中 $x_{1}(t)=e^{-2 t} u(t)$，$x_{2}(t)=t e^{-3 t} u(t)$；  
(j) $x(t)=\sum_{k=0}^{\infty} a^{k} \delta(t-k T)$，其中 $a$ 为满足 $|a|<1$ 的复常数，$T$ 为严格正的实常数。（提示：回忆无限等比数列求和公式 (F.9)）

6.4 对下列每个函数 $y$，以 $x$ 的傅里叶变换 $X$ 表示 $y$ 的傅里叶变换 $Y$。  
(a) $y(t)=x(a t-b)$，其中 $a$ 和 $b$ 为常数且 $a \neq 0$；  
(b) $y(t)=\int_{-\infty}^{2 t} x(\tau) d \tau$；  
(c) $y(t)=\int_{-\infty}^{t} x^{2}(\tau) d \tau$；  
(d) $y(t)=\mathcal{D}(x * x)(t)$，其中 $\mathcal{D}$ 表示求导算子；  
(e) $y(t)=t x(2 t-1)$；  
(f) $y(t)=e^{j 2 t} x(t-1)$；  
(g) $y(t)=\left(t e^{-j 5 t} x(t)\right)^{*}$；  
(h) $y(t)=(\mathcal{D} x) * x_{1}(t)$，其中 $x_{1}(t)=e^{-j t} x(t)$，$\mathcal{D}$ 为求导算子。

6.5 求下列每个周期函数 $x$ 的傅里叶变换 $X$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-239.jpg?height=436&width=652&top_left_y=1999&top_left_x=834){width="400"}


6.6 设 $X$ 为 $x$ 的傅里叶变换。证明：  
(a) 若 $x$ 为偶函数，则 $X(\omega)=2 \int_{0}^{\infty} x(t) \cos (\omega t) d t$；  
(b) 若 $x$ 为奇函数，则 $X(\omega)=-2 j \int_{0}^{\infty} x(t) \sin (\omega t) d t$。

6.7 设 $x$ 为实函数，其偶部分为 $x_{\mathrm{e}}$，奇部分为 $x_{\mathrm{o}}$。设 $X, X_{\mathrm{e}}, X_{\mathrm{o}}$ 分别为 $x, x_{\mathrm{e}}, x_{\mathrm{o}}$ 的傅里叶变换。证明：  
(a) $X_{\mathrm{e}}(\omega)=\operatorname{Re}[X(\omega)]$；  
(b) $X_{\mathrm{o}}(\omega)=j \operatorname{Im}[X(\omega)]$。

6.8 利用傅里叶变换的时域卷积性质，计算卷积 $h=h_{1} * h_{2}$，其中
$$
h_{1}(t)=2000 \operatorname{sinc}(2000 \pi t), \quad h_{2}(t)=\delta(t)-1000 \operatorname{sinc}(1000 \pi t)。
$$

6.9 计算函数 $x(t)=200 \operatorname{sinc}(200 \pi t)$ 的能量。

6.10 对下列每个函数 $x$，计算 $x$ 的频谱，并绘制对应的幅度谱和相位谱。  
(a) $x(t)=e^{-a t} u(t)$，其中 $a$ 为正实常数；  
(b) $x(t)=\operatorname{sinc}\left(\frac{1}{200} t-\frac{1}{200}\right)$。
6.11 证明：若函数 $x$ 的带宽为 $B$，则 $y(t)=x^{n}(t)$ 的带宽为 $n B$。

6.12 证明：一个函数不可能既是时限信号又是带限信号。[提示：设 $X$ 为 $x$ 的傅里叶变换。假设 $x$ 是时限且带限信号，使得 $X(\omega)=0$ 对 $|\omega| \geq B$。由于 $x$ 的带限特性，我们有 $X(\omega)=X(\omega) \operatorname{rect}\left(\frac{\omega}{2 B^{\prime}}\right)$，其中 $B^{\prime}>B$。然后，证明前述方程的逆傅里叶变换会导致矛盾。为此，需要注意，时限函数与非时限函数卷积的结果必定是非时限函数。]

6.13 理想 Hilbert 变换器是一个 LTI 系统，其频率响应为 $H(\omega)=-j \operatorname{sgn} \omega$。此类系统在多种信号处理应用中非常有用（例如，SSB/SC 幅度调制）。利用傅里叶变换的对偶性性质，求该系统的冲激响应 $h$。

6.14 对下列定义了输入 $x$ 和输出 $y$ 的 LTI 系统的微分/积分方程，求系统的频率响应 $H$。（注意，撇号表示求导）
(a) $y^{\prime \prime}(t)+5 y^{\prime}(t)+y(t)+3 x^{\prime}(t)-x(t)=0$；  
(b) $y^{\prime}(t)+2 y(t)+\int_{-\infty}^{t} 3 y(\tau) d \tau+5 x^{\prime}(t)-x(t)=0$；  
(c) $y^{\prime \prime}(t)+5 y^{\prime}(t)+6 y(t)=x^{\prime}(t)+11 x(t)$。

6.15 对下列给定的 LTI 系统的频率响应 $H$，求描述系统的微分方程。
(a) $H(\omega)=\frac{j \omega}{1+j \omega}$；  
(b) $H(\omega)=\frac{j \omega+\frac{1}{2}}{-j \omega^{3}-6 \omega^{2}+11 j \omega+6}$。

6.16 对下列每种情况，利用频域方法求 LTI 系统（冲激响应为 $h$，频率响应为 $H$）对输入 $x$ 的响应 $y$。
(a) $h(t)=\delta(t)-300 \operatorname{sinc}(300 \pi t)$，$x(t)=\frac{1}{2}+\frac{3}{4} \cos (200 \pi t)+\frac{1}{2} \cos (400 \pi t)-\frac{1}{4} \cos (600 \pi t)$。

6.17 考虑下图所示的 LTI 电阻-电感 (RL) 网络，输入为 $v_{0}$，输出为 $v_{1}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-241.jpg?height=285&width=477&top_left_y=626&top_left_x=923){width="400"}


(a) 求系统的频率响应 $H$。  
(b) 求系统的幅度响应和相位响应。  
(c) 判定该系统最接近的频率选择型滤波器类型。  
(d) 当 $v_{0}(t)=\operatorname{sgn} t$ 时，求 $v_{1}$。  
(e) 求系统的冲激响应 $h$。

6.18 考虑下图所示的 LTI 系统，输入为 $v_{0}$，输出为 $v_{1}$，其中 $R=1, C=\frac{1}{1000}, L=\frac{1}{1000}$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-241.jpg?height=295&width=674&top_left_y=1410&top_left_x=826){width="400"}


(a) 求系统的频率响应 $H$。  
(b) 使用计算机绘制系统的幅度响应和相位响应。  
(c) 根据部分 (b) 的图，确定该系统最接近的理想滤波器类型。

6.19 对每个 LTI 电路，求描述电路的微分方程，求电路的频率响应 $H$，并判定该电路最接近的频率选择型滤波器类型。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-241.jpg?height=363&width=1460&top_left_y=2090&top_left_x=434){width="400"}


6.20 设 $x$ 为实函数，其傅里叶变换 $X$ 满足 $X(\omega)=0$ 对 $|\omega|>\omega_{b}$。利用幅度调制生成函数 $y(t)=x(t) \sin \left(\omega_{c} t\right)$，其中 $\omega_{c} \gg \omega_{b}$。为了恢复原函数 $x$，拟采用下图所示系统，该系统包含冲激响应为 $h$ 的 LTI 子系统。设 $Y, V, \hat{X}$ 和 $H$ 分别为 $y, v, \hat{x}$ 和 $h$ 的傅里叶变换。系统满足
$$
H(\omega)= \begin{cases}2 & |\omega|<\omega_{b} \\ 0 & \text { otherwise } .\end{cases}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-242.jpg?height=182&width=579&top_left_y=696&top_left_x=794){width="400"}


(a) 求 $Y$ 用 $X$ 表示的表达式，求 $\hat{X}$ 用 $V$ 表示的表达式，求 $\hat{X}$ 用 $X$ 表示的表达式。  
(b) 比较 $\hat{x}$ 与 $x$，并评论该系统的实用性。

6.21 本题考虑 DSB-SC AM 系统中发射端与接收端载波信号的相位同步丢失影响。假设待传输信号的频率始终限制在 $\left[-\omega_{M}, \omega_{M}\right]$。发射端输入为 $x$，输出为 $y$，其方程为 $y(t)=\cos \left(\omega_{c} t\right) x(t)$。接收端输入为 $y$，输出为 $\tilde{x}$，其方程为 $\tilde{x}(t)=v * h(t)$，其中 $v(t)=\cos \left(\omega_{c} t-\theta\right) y(t)$，$h$ 为理想低通滤波器冲激响应，通带增益为 2，截止频率 $\omega_{c 0}$ 满足 $\omega_{M}<\omega_{c 0}<2 \omega_{c}-\omega_{M}$。（即接收端使用的载波信号相对于发射端存在相移 $\theta$）求 $\tilde{x}$ 用 $x$ 表示。

**简答**：$\tilde{x}(t)=\cos (\theta) x(t)$
6.22 在讨论 DSB/SC 幅度调制时，我们看到如下图 A 所示的系统形式通常很有用。然而，在实际应用中，该系统所需的乘法单元并不总是容易实现。因此，我们有时采用如下图 B 所示的系统。在第二种系统中，我们先将正弦载波与调制信号 $x$ 相加，然后将结果传递到非线性平方器中（即 $v_{2}(t)=v_{1}^{2}(t)$）。该系统还包含一个具有冲激响应 $h$ 的 LTI 子系统。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-242.jpg?height=165&width=301&top_left_y=1837&top_left_x=405){width="400"}

(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-242.jpg?height=190&width=857&top_left_y=1823&top_left_x=813){width="400"}

(b)

设 $X, V_{1}, V_{2}$ 和 $H$ 分别为 $x, v_{1}, v_{2}$ 和 $h$ 的傅里叶变换。假设 $X(\omega)=0$ 当 $|\omega|>\omega_{b}$（即 $x$ 是带限信号）。  

(a) 求 $v_{1}, v_{2}$ 和 $V_{2}$ 的表达式。（提示：如果 $X(\omega)=0$ 对 $|\omega|>\omega_{b}$，则利用傅里叶变换的时域卷积性质，可以推导出 $x^{2}$ 的傅里叶变换在 $|\omega|>2\omega_{b}$ 时为零。）

(b) 确定图 B 所示系统的频率响应 $H$，使其等效于图 A 所示系统。说明对 $\omega_{c}$ 与 $\omega_{b}$ 关系所做的任何假设。（提示：可以先为某个简单的 $X$ 绘制 $X$ 和 $V_{2}$ 的频谱，然后将 $V_{2}$ 与 $X$ 对比以推导答案。）


---
6.23 考虑下图 A 所示的系统，其输入为 $x$，输出为 $y$。冲激响应 $h$ 为理想 Hilbert 变换器，其频率响应 $H$ 给出为  
$$
H(\omega)=-j \operatorname{sgn} \omega .
$$
设 $X, Y, V_{1}, V_{2}$ 和 $V_{3}$ 分别为 $x, y, v_{1}, v_{2}$ 和 $v_{3}$ 的傅里叶变换。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-243.jpg?height=441&width=662&top_left_y=591&top_left_x=551){width="400"}

(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-243.jpg?height=309&width=479&top_left_y=659&top_left_x=1296){width="400"}

(b)

(a) 假设 $X(\omega)=0$ 对 $|\omega|>\omega_{b}$，且 $\omega_{b} \ll \omega_{c}$。求 $V_{1}, V_{2}, V_{3}$ 和 $Y$ 关于 $X$ 的表达式。

(b) 假设 $X=X_{1}$，其中 $X_{1}$ 如图 B 所示。请绘制此情况下的 $V_{1}, V_{2}, V_{3}$ 和 $Y$。

(c) 绘制一个可用于从 $y$ 恢复 $x$ 的系统的框图。

---

6.24 考虑下图 A 所示的系统，其输入为 $x$，输出为 $\hat{x}$，该系统包含一个冲激响应为 $g$ 的 LTI 子系统。$g$ 的傅里叶变换 $G$ 给出为  
$$
G(\omega)= \begin{cases}2 & |\omega| \leq 100 \pi \\ 0 & \text { 否则 }\end{cases}
$$
设 $X, \hat{X}, Y$ 和 $Q$ 分别为 $x, \hat{x}, y$ 和 $q$ 的傅里叶变换。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-243.jpg?height=190&width=654&top_left_y=1796&top_left_x=478){width="400"}

(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-243.jpg?height=312&width=490&top_left_y=1734&top_left_x=1372){width="400"}

(b)

(a) 假设 $X(\omega)=0$ 对 $|\omega|>100 \pi$。求 $Y, Q$ 和 $\hat{X}$ 关于 $X$ 的表达式。

(b) 如果 $X=X_{1}$，其中 $X_{1}$ 如图 B 所示，请绘制 $Y, Q$ 和 $\hat{X}$。


---
6.25 LTI 系统的带宽最简单的定义是系统频率响应 $H$ 的带宽。解释为什么具有有限带宽 $B$ 的（LTI）通信信道无法用于可靠地传输带宽大于 $B$ 的信号。  

6.26 考虑下图 A 所示的系统，其输入为 $x$，输出为 $y$。设 $X, P, S, H$ 和 $Y$ 分别为 $x, p, s, h$ 和 $y$ 的傅里叶变换。假设  
$$
p(t)=\sum_{n=-\infty}^{\infty} \delta\left(t-\frac{n}{1000}\right) \quad \text { 且 } \quad H(\omega)=\frac{1}{1000} \operatorname{rect}\left(\frac{\omega}{2000 \pi}\right)
$$

(a) 推导 $S$ 关于 $X$ 的表达式。推导 $Y$ 关于 $S$ 和 $H$ 的表达式。

(b) 假设 $X=X_{1}$，其中 $X_{1}$ 如图 B 所示。利用(a)部分的结果，绘制 $S$ 和 $Y$，并说明系统输入 $x$ 与输出 $y$ 之间的关系（如有）。

(c) 假设 $X=X_{2}$，其中 $X_{2}$ 如图 C 所示。利用(a)部分的结果，绘制 $S$ 和 $Y$，并说明系统输入 $x$ 与输出 $y$ 之间的关系（如有）。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-244.jpg?height=180&width=590&top_left_y=780&top_left_x=702){width="400"}

(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-244.jpg?height=330&width=365&top_left_y=1002&top_left_x=416){width="400"}

(b)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-244.jpg?height=333&width=522&top_left_y=999&top_left_x=1148){width="400"}

(c)

---

6.27 一个函数 $x$ 的带宽限制为 22 kHz（即其频谱仅在 $f \in [-22000,22000]$ 范围内有非零内容）。由于噪声过大，对应于 $|f|>20000$ 的频谱部分已严重损坏且无法使用。  
(a) 求 $x$ 的最小采样率，使未损坏的频谱部分可以被恢复。  
(b) 假设在采样前通过滤波消除了损坏的频谱部分。此时，求 $x$ 的最小采样率。

6.28 一个函数 $x$ 的带宽在 $[-B, B]$ 范围内。求函数 $y(t)=x^{2}(t)$ 可以采样而不发生混叠的最低采样率。

6.29 设 $y_{1}$ 和 $y_{2}$ 为带宽限制在 $\left[-\omega_{b}, \omega_{b}\right]$ 的函数。假设这些函数以满足 Nyquist 条件的采样频率 $\omega_{s}$ 采样，得到序列  
$$
x_{1}(n)=y_{1}(T n) \quad \text{和} \quad x_{2}(n)=y_{2}(T n),
$$
其中 $T=\frac{2 \pi}{\omega_{s}}$。考虑函数 $y=y_{1} * y_{2}$，并假设 $y$ 也以周期 $T$ 采样得到序列  
$$
x(n)=y(T n) .
$$

(a) 证明 $y$ 的带宽限制在 $\left[-\omega_{b}, \omega_{b}\right]$，意味着可以从其采样点精确恢复 $y$。

(b) 证明 $y$ 的采样点可以通过以下公式计算  
$$
x(n)=\frac{2 \pi}{\omega_{s}} \sum_{k=-\infty}^{\infty} x_{1}(k) x_{2}(n-k)
$$

(c) 说明如何利用上述结果在（离散时间）计算机上计算带限函数的（连续时间）卷积。

---

6.30 假设我们希望通过连续时间通信信道传输二进制序列 $y$（其中 $y(n)$ 为 0 或 1）。为此，我们选择用连续时间脉冲表示 $y$ 的每个二进制样本。利用采样定理，证明可以在带宽为 $B$ 的理想（即无噪声）信道上以 $2B$ 比特/秒的速率传输 $y$ 的比特。实际上，这是理论上的最大数据传输速率，假设每个脉冲仅表示一个比特的数据。（提示：根据采样定理，带宽为 $B$ 的连续时间函数可以由 $2B$ 个信息片构造。）


### 6.21.2 习题及答案

6.101 使用傅里叶变换分析公式，求下列函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=\delta(t+a)+\delta(t-a)$，其中 $a$ 为实常数；  
(b) $x(t)=\operatorname{rect}\left(\frac{t}{T}\right)$，其中 $T$ 为非零实常数。（提示：注意正确处理 $T<0$ 的情况。）

简答：  
(a) $X(\omega)=2 \cos (a \omega)$；  
(b) $X(\omega)=|T| \operatorname{sinc}\left(\frac{T \omega}{2}\right)$

6.102 使用傅里叶变换综合公式，求下列函数的逆傅里叶变换 $x$：  
$$
X(\omega)=\operatorname{rect}\left(\frac{\omega}{2 B}\right)
$$
其中 $B$ 为非零实常数。（提示：注意正确处理 $B<0$ 的情况。）

简答：  
$x(t)=\frac{|B|}{\pi} \operatorname{sinc}(B t)$

6.103 利用傅里叶变换性质和傅里叶变换对照表，求下列函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=\frac{1}{2}\left[\delta(t)+\frac{j}{\pi t}\right]$；  
(b) $x(t)=e^{-j 2 t} \operatorname{sgn}(-t-1)$；  
(c) $x(t)=e^{-j 2 t} \frac{1}{3 t+1}$；  
(d) $x(t)=\int_{-\infty}^{5 t} e^{-\tau-1} u(\tau-1) d \tau$；  
(e) $x(t)=(t+1) \sin (5 t-3)$；  
(f) $x(t)=\sin (2 \pi t) \delta\left(t-\frac{\pi}{2}\right)$；  
(g) $x(t)=e^{-j t} \frac{1}{3 t-2}$；  
(h) $x(t)=e^{j 5 t} \cos (2 t) u(t)$；  
(i) $x(t)=\operatorname{sinc}^{2}(a t)$，其中 $a$ 为非零实常数；  
(j) $x(t)=x_{1} * x_{2}(t)$，其中 $x_{1}(t)=t^{2} e^{-t} u(t)$，$x_{2}(t)=(t-1) e^{-(t-1)} u(t-1)$。

简答：  
(a) $X(\omega)=u(\omega)$；  
(b) $X(\omega)=e^{j(\omega+2)} \frac{j 2}{\omega+2}$；  
(c) $X(\omega)=-\frac{j \pi}{3} e^{j(\omega+2) / 3} \operatorname{sgn}(\omega+2)$；  
(d) $X(\omega)=\frac{1}{e^{2}}\left[\left(\frac{5}{j 5 \omega-\omega^{2}}\right) e^{-j \omega / 5}+\pi \delta(\omega)\right]$；  
(e) $X(\omega)=j \pi\left[e^{j 3} \delta(\omega+5)-e^{-j 3} \delta(\omega-5)\right]+\pi \frac{d}{d \omega}\left[e^{-j 3} \delta(\omega-5)-e^{j 3} \delta(\omega+5)\right]$；  
(f) $X(\omega)=\sin \left(\pi^{2}\right) e^{-j \pi \omega / 2}$；  
(g) $X(\omega)=-\frac{j \pi}{3} e^{-j 2(\omega+1) / 3} \operatorname{sgn}(\omega+1)$；  
(h) $X(\omega)=\frac{1}{2}\left(\pi \delta(\omega-7)+\frac{1}{j(\omega-7)}+\pi \delta(\omega-3)+\frac{1}{j(\omega-3)}\right)$；  
(i) $X(\omega)=\frac{\pi}{|a|} \operatorname{tri}\left(\frac{1}{4 a} \omega\right)$；  
(j) $X(\omega)=e^{-j \omega} \frac{2}{(1+j \omega)^{5}}$

6.104 利用傅里叶变换性质和给定的傅里叶变换对，求下列函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=\operatorname{tri}\left(\frac{1}{T} t\right)$，其中 $T$ 为非零实常数；  
$\operatorname{rect}\left(\frac{1}{T} t\right) \stackrel{\mathrm{CTFT}}{\longleftrightarrow}|T| \operatorname{sinc}\left(\frac{T}{2} \omega\right)$  
（提示：$\operatorname{tri}\left(\frac{1}{2} t\right)=\operatorname{rect} * \operatorname{rect}(t)$）；  
(b) $x(t)=\frac{2 a}{t^{2}+a^{2}}$；  
$e^{-a|t|} \stackrel{\mathrm{CTFT}}{\longleftrightarrow} \frac{2 a}{\omega^{2}+a^{2}}$。

简答：  
(a) $X(\omega)=\frac{|T|}{2} \operatorname{sinc}^{2}\left(\frac{T}{4} \omega\right)$；  
(b) $X(\omega)=2 \pi e^{-a|\omega|}$
6.105 利用傅里叶变换性质和傅里叶变换对照表，求下列函数 $y$ 的傅里叶变换 $Y$，用函数 $x$ 的傅里叶变换 $X$ 表示。  
(a) $y(t)=t \cos (3 t) x(t)$；  
(b) $y(t)=(t-1)^{100} x^{*}(t-1)$；  
(c) $y(t)=\int_{-\infty}^{3 t} x^{*}(\tau-1) d \tau$；  
(d) $y(t)=\cos (3 t-1) x(t)$；  
(e) $y(t)=\mathcal{D} x(t) \sin (t-2)$，其中 $\mathcal{D}$ 表示微分算子；  
(f) $y(t)=t x(t) \sin (3 t)$；  
(g) $y(t)=e^{j 7 t}[x * x(t-1)]$；  
(h) $y(t)=t x(-t)$；  
(i) $y(t)=t x(t-3)$。

**简答：**  
(a) $Y(\omega)=\frac{j}{2} X^{\prime}(\omega-3)+\frac{j}{2} X^{\prime}(\omega+3)$（其中撇号表示一阶导数）；  
(b) $Y(\omega)=e^{-j \omega}\left(\frac{d}{d \omega}\right)^{100}\left[X^{*}(-\omega)\right]$；  
(c) $Y(\omega)=\frac{1}{3}\left(\frac{3}{j \omega}\left(e^{-j \omega / 3} X^{*}(-\omega / 3)\right)^{*}+\pi X^{*}(0) \delta(\omega / 3)\right)$；  
(d) $Y(\omega)=\frac{1}{2} e^{-j} X(\omega-3)+\frac{1}{2} e^{j} X(\omega+3)$；  
(e) $Y(\omega)=\frac{1}{2}\left[e^{-j 2}(\omega-1) X(\omega-1)-e^{j 2}(\omega+1) X(\omega+1)\right]$；  
(f) $Y(\omega)=\frac{1}{2} \frac{d}{d \omega}[X(\omega-3)-X(\omega+3)]$；  
(g) $Y(\omega)=e^{j 7} e^{-j \omega} X^{2}(\omega-7)$；  
(h) $Y(\omega)=-j X^{\prime}(-\omega)$；  
(i) $Y(\omega)=3 e^{-j 3 \omega} X(\omega)+j e^{-j 3 \omega} X^{\prime}(\omega)$

6.106 求下列周期函数 $x$ 的傅里叶变换 $X$。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-246.jpg?height=263&width=696&top_left_y=2163&top_left_x=680){width="400"}
  
(a)

**简答：**  
(a) $X(\omega)=\frac{4 \pi}{3} \sum_{k=-\infty}^{\infty} \operatorname{sinc}\left(\frac{2 \pi}{3} k\right) \delta\left(\omega-\frac{2 \pi}{3} k\right)$

6.107 对下列每个 $T$-周期函数 $x$，求其傅里叶变换 $X$。（部分积分公式见 F.4 节可能有帮助。）

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-247.jpg?height=247&width=679&top_left_y=545&top_left_x=421){width="400"}
  
(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-247.jpg?height=263&width=684&top_left_y=543&top_left_x=1237){width="400"}
  
(b)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-247.jpg?height=274&width=684&top_left_y=918&top_left_x=421){width="400"}
  
(c)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-247.jpg?height=268&width=682&top_left_y=918&top_left_x=1237){width="400"}
  
(d)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-247.jpg?height=263&width=679&top_left_y=1307&top_left_x=832){width="400"}
  
(e)

**简答：**  
(a) $X(\omega)=\pi A \delta(\omega)+\sum_{\substack{k \in \mathbb{Z} \\ k \neq 0}} \frac{j A}{k} \delta\left(\omega-\frac{2 \pi}{T} k\right)$；  
(b) $X(\omega)=\pi A \delta(\omega)-\sum_{\substack{k \in \mathbb{Z} \\ k \text { odd }}} \frac{4 A}{\pi k^{2}} \delta\left(\omega-\frac{2 \pi}{T} k\right)$；  
(c) $X(\omega)=\sum_{k=-\infty}^{\infty} \frac{4 A}{1-4 k^{2}} \delta\left(\omega-\frac{2 \pi}{T} k\right)$；  
(d) $X(\omega)=\sum_{k \in\{-1,1\}} \frac{-j \pi A k}{2} \delta\left(\omega-\frac{2 \pi}{T} k\right)+\sum_{k \in \mathbb{Z}} \frac{2 A}{1-k^{2}} \delta\left(\omega-\frac{2 \pi}{T} k\right)$；  
(e) $X(\omega)=\sum_{k=-\infty}^{\infty} 2 \pi A W \operatorname{sinc}(\pi W k) \delta\left(\omega-\frac{2 \pi}{T} k\right)$
6.108 求下列 $T$-周期函数 $x$ 的傅里叶变换 $X$。  
(a) $x(t)=e^{-t}$，定义在 $0 \leq t<1$，$T=1$。

**简答：**  
(a) $X(\omega)=\sum_{k=-\infty}^{\infty} \frac{2 \pi(e-1)}{e(1+j 2 \pi k)} \delta(\omega-2 \pi k)$

6.109 利用傅里叶变换性质和傅里叶变换对照表，求下列函数 $y$ 的傅里叶变换 $Y$，用函数 $x$ 的傅里叶变换 $X$ 表示。  
(a) $y(t)=r(t) x(t)$，其中 $r(t)=\sum_{k=-\infty}^{\infty} \operatorname{rect}(50 t-5 k)$。

**简答：**  
(a) $Y(\omega)=\frac{1}{5} \sum_{k=-\infty}^{\infty} \operatorname{sinc}\left(\frac{\pi}{5} k\right) X(\omega-20 \pi k)$

6.110 利用傅里叶变换性质和傅里叶变换对照表，计算下列函数 $x_{1}$ 和 $x_{2}$ 的卷积 $y=x_{1}*x_{2}$。  
(a) $x_{1}(t)=\operatorname{sinc}\left(a t-b_{1}\right)$，$x_{2}(t)=\operatorname{sinc}\left(a t-b_{2}\right)$，其中 $a, b_{1}, b_{2}$ 为实常数，且 $a \neq 0$；  
(b) $x_{1}(t)=\operatorname{sinc}(a t)$，$x_{2}(t)=\operatorname{sinc}(b t)$，其中 $a,b>0$；  
(c) $x_{1}(t)=e^{-t} u(t)$，$x_{2}(t)=e^{-t-1} u(t-1)$；  
(d) $x_{1}(t)=t e^{-3 t} u(t)$，$x_{2}(t)=e^{-3 t} u(t)$。

**简答：**  
(a) $y(t)=\frac{\pi}{|a|} \operatorname{sinc}\left(a t-b_{1}-b_{2}\right)$；  
(b) $y(t)=\frac{\pi}{\max(a,b)} \operatorname{sinc}[\min(a,b) t]$；  
(c) $y(t)=e^{-2}(t-1) e^{1-t} u(t-1)$；  
(d) $y(t)=\frac{1}{2} t^{2} e^{-3 t} u(t)$

6.111 对于下列每个情况，其中函数 $x$ 的傅里叶变换为 $X$，且其傅里叶表示为 $y(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d \omega$，求 $y(t)$ 在指定的 $t$ 值。  
(a) $x(t)=\begin{cases}8 t^{2}+1, & 0 \leq t<\frac{1}{2} \\ t-\frac{3}{2}, & \frac{1}{2} \leq t<\frac{3}{2} \\ \pi, & \frac{3}{2} \leq t<2 \\ 0, & \text{otherwise}\end{cases}$，$t \in \left\{\frac{1}{2}, \frac{3}{2}\right\}$；  
(b) $x(t)=\begin{cases}e^{-t}, & -1 \leq t<0 \\ t+\frac{1}{2}, & 0 \leq t<1 \\ 0, & \text{otherwise}\end{cases}$，$t \in \{-1,0\}$。

**简答：**  
(a) $y\left(\frac{1}{2}\right)=1$，$y\left(\frac{3}{2}\right)=\frac{\pi}{2}$；  
(b) $y(-1)=\frac{e}{2}$，$y(0)=\frac{3}{4}$

6.112 利用帕塞瓦尔关系，计算积分 $\int_{-\infty}^{\infty} \operatorname{sinc}^{2}(k t) d t$，其中 $k$ 为非零实常数。

**简答：**  
$\pi / k$

6.113 对于下列每对函数 $M$ 和 $P$，求幅度谱为 $M$、相位谱为 $P$ 的函数 $x$。  
(a) $M(\omega)=1$，$P(\omega)=\omega$；  
(b) $M(\omega)=\operatorname{rect}\left(\frac{\omega}{3}\right)$，$P(\omega)=5 \omega$。

**简答：**  
(a) $x(t)=\delta(t+1)$；  
(b) $x(t)=\frac{3}{2 \pi} \operatorname{sinc}\left[\frac{3}{2}(t+5)\right]$
6.114 对下列每个函数 $x$，计算其频谱 $X$，并求相应的幅度谱和相位谱。  
(a) $x(t)=\mathcal{D}\left[e^{-4 t} u(t)\right](t)$，其中 $\mathcal{D}$ 表示微分算子。

**简答：**  
(a) $X(\omega)=\frac{j \omega}{j \omega+4}, \quad |X(\omega)|=\frac{|\omega|}{\sqrt{\omega^{2}+16}}, \quad \arg X(\omega)=\frac{\pi}{2} \operatorname{sgn}(\omega)-\arctan (\omega / 4)$

6.115 设 $x$ 的傅里叶变换为 $X$。对于下列每个频率/幅度谱，判断 $x$ 是否具有下列性质：实值、偶/奇、周期、有限持续时间、有限能量。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-249.jpg?height=212&width=380&top_left_y=461&top_left_x=480){width="400"}
  
(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-249.jpg?height=212&width=363&top_left_y=461&top_left_x=918){width="400"}
  
(b)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-249.jpg?height=212&width=363&top_left_y=461&top_left_x=1342){width="400"}
  
(c)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-249.jpg?height=209&width=598&top_left_y=761&top_left_x=480){width="400"}
  
(d)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-249.jpg?height=207&width=601&top_left_y=761&top_left_x=1115){width="400"}
  
(e)

**简答：**  
(a) 实值、偶函数、非周期、非有限持续时间、有限能量；  
(b) 非周期、有限能量、非有限持续时间；  
(c) 非实值、非周期、非有限持续时间、有限能量、非偶非奇；  
(d) 实值、偶函数、周期（基本周期 $2 \pi$）、非有限持续时间、非有限能量；  
(e) 实值、偶函数、非周期、非有限持续时间、非有限能量

6.116 对下列描述 LTI 系统的微分/积分方程，求系统的频率响应 $H$。注意 $\mathcal{J}$ 表示积分算子 $\mathcal{J} x(t)=\int_{-\infty}^{t} x(\tau) d \tau$，$\mathcal{D}$ 表示微分算子。  
(a) $\mathcal{D} y(t)+3 y(t)=x(t)$；  
(b) $\mathcal{D}^{2} y(t)+4 \mathcal{D} y(t)+3 y(t)=\mathcal{D} x(t)+2 x(t)$；  
(c) $\mathcal{D} y(t)+3 y(t)+2 \mathcal{J} y(t)=\mathcal{D} x(t)+5 x(t)$；  
(d) $5 \mathcal{D} y(t)-2 y(t)+7 \mathcal{J} y(t)=3 \mathcal{J} x(t)-x(t)$。

**简答：**  
(a) $H(\omega)=\frac{1}{j \omega+3}$；  
(b) $H(\omega)=\frac{j \omega+2}{-\omega^{2}+4 j \omega+3}$；  
(c) $H(\omega)=\frac{\omega^{2}-5 j \omega}{\omega^{2}-3 j \omega-2}$；  
(d) $H(\omega)=\frac{3-j \omega}{-5 \omega^{2}-2 j \omega+7}$

6.117 对于下列每个 LTI 系统的频率响应 $H$，求描述该系统的微分方程。  
(a) $H(\omega)=\frac{j \omega-1}{\omega^{2}+4}$；  
(b) $H(\omega)=\frac{5 j \omega+3}{7 j \omega^{3}-2 j \omega^{2}+11}$；  
(c) $H(\omega)=\frac{1}{\left(j \omega+\frac{1}{3}\right)^{2}}$。

**简答：**  
(a) $-\mathcal{D}^{2} y(t)+4 y(t)=\mathcal{D} x(t)-x(t)$；  
(b) $-7 \mathcal{D}^{3} y(t)+2 j \mathcal{D}^{2} y(t)+11 y(t)=5 \mathcal{D} x(t)+3 x(t)$；  
(c) $\mathcal{D}^{2} y(t)+\frac{2}{3} \mathcal{D} y(t)+\frac{1}{9} y(t)=x(t)$
6.118 对于下列每个情况，使用频域方法求 LTI 系统的响应 $y$，系统的冲激响应为 $h$，频率响应为 $H$，输入为 $x$。  
(a) $H(\omega)=j \omega$，$x(t)=1+\frac{1}{4} \cos (2 t)+\frac{1}{9} \sin (3 t)$；  
(b) $h(t)=-\mathcal{D} \boldsymbol{\delta}(t)$，$x(t)=10+\cos (2 t)+\sin (6 t)$；  
(c) $h(t)=(\pi t)^{-1}$，$x(t)=1-\frac{1}{2} \cos (2 t)+\frac{1}{3} \sin (3 t)$；  
(d) $h(t)=e^{-3(t-1)} u(t-1)$，$x(t)=t^{2} e^{-3 t} u(t)$。

**简答：**  
(a) $y(t)=-\frac{1}{2} \sin (2 t)+\frac{1}{3} \cos (3 t)$；  
(b) $y(t)=2 \sin (2 t)-6 \cos (6 t)$；  
(c) $y(t)=-\frac{1}{2} \sin (2 t)- \frac{1}{3} \cos (3 t)$；  
(d) $y(t)=\frac{1}{3}(t-1)^{3} e^{-3(t-1)} u(t-1)$

6.119 对于下列每个 LTI 电路，求描述电路的微分方程，求电路的频率响应 $H$，并判断该电路最接近哪种频率选择性滤波器。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-250.jpg?height=301&width=485&top_left_y=891&top_left_x=491){width="400"}
  
(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-250.jpg?height=296&width=479&top_left_y=896&top_left_x=1107){width="400"}
  
(b)

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-250.jpg?height=292&width=674&top_left_y=1267&top_left_x=702){width="400"}
  
(c)

**简答：**  
(a) $\mathcal{D} v_{0}(t)=\mathcal{D} v_{1}(t)+\frac{1}{RC} v_{1}(t), \quad H(\omega)=\frac{j \omega RC}{j \omega RC+1}$；高通；  
(b) $v_{0}(t)=\frac{L}{R} \mathcal{D} v_{1}(t)+v_{1}(t), \quad H(\omega)=\frac{R}{j \omega L+R}$；低通；  
(c) $\mathcal{D} v_{0}(t)=RC \mathcal{D}^{2} v_{1}(t)+\mathcal{D} v_{1}(t)+\frac{R}{L} v_{1}(t), \quad H(\omega)=\frac{j \omega L}{-RLC \omega^{2}+j \omega L+R}$；带通

6.120 考虑 DSB-SC AM 系统中发射机和接收机载波频率不同步的影响。假设要传输的信号 $x$ 的带宽为 $\left[-\omega_M, \omega_M\right]$。发射机输入 $x$ 输出 $y$ 的关系为 $y(t)=\cos(\omega_c t) x(t)$，接收机输入 $y$ 输出 $\tilde{x}$ 的关系为 $\tilde{x}(t)=v * h(t)$，其中 $v(t)=\cos[(\omega_c+\Delta \omega) t] y(t)$，$h$ 是理想低通滤波器的冲激响应，通带增益为 2，截止频率 $\omega_{c0}$ 满足 $\omega_M+\Delta \omega<\omega_{c0}<2\omega_c+\Delta \omega-\omega_M$。求 $\tilde{x}$。

**简答：**  
$\tilde{x}(t)=\cos(\Delta \omega t) x(t)$

6.121 对下列每个函数 $x$，根据奈奎斯特采样定理直接求最低采样率 $\omega_s$，使其能够从采样值精确重建。  
(a) $x(t)=\sin(15 t)$；  
(b) $x(t)=10+4 \sin(15 t)+2 \cos(20 t)$；  
(c) $x(t)=\operatorname{sinc}(5 t-3)$；  
(d) $x(t)=\operatorname{sinc}^{2}(20 t)$；  
(e) $x(t)=\cos(10 t) \operatorname{sinc}(30 t)$；  
(f) $x(t)=x_1 * x_2(t)$，$x_1(t)=e^{-t} u(t)$，$x_2(t)=\operatorname{sinc}(10 t)$。

**简答：**  
(a) 30；(b) 40；(c) 10；(d) 80；(e) 80；(f) 20

6.122 一个频率为 $\omega_0$ 的实正弦函数 $x$ 被理想采样，采样频率为 $\omega_s$，得到序列 $v$。然后对 $v$ 进行带限插值得到函数 $y$。求 $y$ 的频谱中出现的频率。  
(a) $\omega_0=50, \omega_s=90$；  
(b) $\omega_0=50, \omega_s=110$；  
(c) $\omega_0=100, \omega_s=50$；  
(d) $\omega_0=179, \omega_s=60$。

**简答：**  
(a) $\pm 40$；(b) $\pm 50$；(c) 0；(d) $\pm 1$

6.123 音频信号 $x$ 包含两个纯正弦音，频率为 440 Hz 和 880 Hz。信号以 $f_s$ Hz 采样后回放。确定回放时听到的音调数量及其频率：  
(a) $f_s=500$ Hz；  
(b) $f_s=2000$ Hz。假设人耳听觉范围为 20 Hz 到 20 kHz。

**简答：**  
(a) 听到两个音，频率 60 Hz 和 120 Hz；  
(b) 听到两个音，频率 440 Hz 和 880 Hz

6.124 考虑带限函数 $x$，其采样频率 $\omega_s$ 满足奈奎斯特条件，得到序列 $y$。求 $x$ 的傅里叶变换 $X$，用采样序列 $y$ 和 $\omega_s$ 表示。  
[提示：由采样定理，$x(t)=\sum_{n=-\infty}^{\infty} y(n) \operatorname{sinc}(\frac{\omega_s}{2} t - \pi n)$]

**简答：**  
$X(\omega)=\frac{2 \pi}{\omega_s} \sum_{n=-\infty}^{\infty} y(n) e^{-j 2 \pi n \omega / \omega_s} \operatorname{rect}\left(\frac{\omega}{\omega_s}\right)$

### 6.21.3 MATLAB 习题

6.201 (a) 考虑频率响应 $H$ 的形式为
$$
H(\omega)=\frac{\sum_{k=0}^{M-1} a_{k} \omega^{k}}{\sum_{k=0}^{N-1} b_{k} \omega^{k}}
$$
其中 $a_k$ 和 $b_k$ 为复数常数。编写一个 MATLAB 函数 `freqw`，用于在任意给定点计算上述函数的值。函数应包含三个输入参数：

1）包含 $a_k$ 系数的向量； 

2）包含 $b_k$ 系数的向量； 

3）包含要计算 $H(\omega)$ 的 $\omega$ 值的向量。  

函数应返回两个输出：

1）函数值向量；  

2）函数计算点向量。  

如果函数在调用时没有输出参数（即 `nargout` 为零），则在返回前绘制幅度响应和相位响应。（提示：`polyval` 函数可能有用。）

(b) 使用 (a) 部分开发的函数，绘制频率响应
$$
H(\omega)=\frac{16.0000}{1.0000 \omega^{4}-j 5.2263 \omega^{3}-13.6569 \omega^{2}+j 20.9050 \omega+16.0000}
$$
的幅度和相位响应。频率范围使用 $[-5,5]$。

(c) 该系统近似哪种理想频率选择性滤波器？

---

6.202 考虑下列每个频率响应对应的滤波器。对于每个情况，绘制滤波器的幅度和相位响应，并判断其最接近哪种理想频率选择性滤波器。  

(a) $H(\omega)=\frac{\omega_b^3}{(j \omega)^3 + 2 \omega_b (j \omega)^2 + 2 \omega_b (j \omega) + \omega_b^3}$，其中 $\omega_b=1$；  

(b) $H(\omega)=\frac{(j \omega)^5}{(j \omega)^5 + 17.527635 (j \omega)^4 + 146.32995 (j \omega)^3 + 845.73205 (j \omega)^2 + 2661.6442 (j \omega) + 7631.0209}$；  

(c) $H(\omega)=\frac{13.104406 (j \omega)^3}{(j \omega)^6 + 3.8776228 (j \omega)^5 + 34.517979 (j \omega)^4 + 75.146371 (j \omega)^3 + 276.14383 (j \omega)^2 + 248.16786 (j \omega) + 512}$  

（提示：使用 `freqs` 函数，令 $s=j \omega$ 来计算频率响应。`abs`、`angle`、`linspace`、`plot`、`xlabel`、`ylabel` 和 `print` 函数也可能有用。）

---

6.203 (a) 使用 `butter` 和 `besself` 函数设计一个 10 阶 Butterworth 低通滤波器和 10 阶 Bessel 低通滤波器，截止频率均为 $10\ \mathrm{rad/s}$。  

(b) 对于 (a) 部分设计的每个滤波器，绘制幅度和相位响应，频率轴使用线性刻度。相位响应绘制非包裹相位（unwrapped phase），以便后续分析。  
（提示：`freqs` 和 `unwrap` 函数可能有用。）

(c) 考察幅度响应。理想低通滤波器在通带内幅度响应应为常数。哪一个滤波器更接近理想低通滤波器的通带幅度特性？  

(d) 考察相位响应。理想低通滤波器的相位响应应为线性函数。哪一个滤波器在通带内更接近线性相位响应？
