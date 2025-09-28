# 第11章 离散时间傅里叶变换

## 11.1 引言

离散时间 (DT) 傅里叶级数为周期序列提供了一种极为有用的表示方法。然而，在实际应用中，我们经常需要处理非周期序列。这种情况下，需要比傅里叶级数更为通用的工具。本章将介绍一种用于表示任意序列（即可能是非周期序列）的工具，称为离散时间傅里叶变换 (DTFT)。

## 11.2 非周期序列的离散时间傅里叶变换推导

如前所述，傅里叶级数是序列表示中极为有用的工具。不幸的是，这种表示仅适用于周期序列，因为傅里叶级数本质上是周期性的。然而，许多序列并非周期序列。因此，人们可能会想，是否可以利用傅里叶级数来发展非周期序列的表示方法。事实证明，这是可行的。为了理解其原因，我们必须做出以下关键观察：非周期序列可以被视为周期无限大的序列。通过将非周期序列视为周期趋于无穷大的周期序列的极限情况，我们可以利用傅里叶级数发展出一种更通用的序列表示方法，从而适用于非周期情形。（在接下来的推导中，我们对傅里叶变换的开发并非完全严格，因为假设了各种积分、求和和极限的收敛性。这些假设并非在所有情况下都成立。不过，只要所考虑序列的傅里叶变换存在，我们的推导在数学上是合理的。）

假设我们有一个非周期序列 $x$。从 $x$ 出发，我们定义序列 $x_{M}$ 为：

$$
x_{M}(n)= \begin{cases}x(n) & n \in[-M . . M-1]  \tag{11.1}\\ 0 & \text { 其他情况 }\end{cases}
$$

本质上，$x_{M}$ 在以原点为中心的约 $2M$ 个元素上与 $x$ 完全相同。现在，我们将 $x_{M}(n)$ 在 $n \in[-M . . M-1]$ 的部分重复，形成一个 $2M$-周期序列 $\tilde{x}$。即，我们定义 $\tilde{x}$ 为：

$$
\tilde{x}(n)=x_{M}(n) \text { 当 } n \in[-M . . M-1] \quad \text { 且 } \quad \tilde{x}(n)=\tilde{x}(n+2 M) .
$$

在继续之前，我们做两个重要观察，这将在后续使用。首先，根据 $x_{M}$ 的定义，我们有：

$$
\begin{equation*}
\lim _{M \rightarrow \infty} x_{M}(n)=x(n) \tag{11.2}
\end{equation*}
$$

其次，根据 $x_{M}$ 和 $\tilde{x}$ 的定义，我们有：

$$
\begin{equation*}
\lim _{M \rightarrow \infty} \tilde{x}(n)=x(n) \tag{11.3}
\end{equation*}
$$

现在，考虑序列 $\tilde{x}$。由于 $\tilde{x}$ 是 $2M$-周期的，我们可以使用傅里叶级数表示它：

$$
\begin{align*}
\tilde{x}(n) & =\sum_{k=\langle 2 M\rangle} a_{k} e^{j[2 \pi /(2 M)] k n} \\
& =\sum_{k=\langle 2 M\rangle} a_{k} e^{j(\pi / M) k n} \\
& =\sum_{k=-M}^{M-1} a_{k} e^{j(\pi / M) k n} \tag{11.4}
\end{align*}
$$
系数序列 $a$ 则由下式给出：

$$
\begin{aligned}
a_{k} & =\frac{1}{2 M} \sum_{\ell=\langle 2 M\rangle} \tilde{x}(\ell) e^{-j(2 \pi /(2 M)) k \ell} \\
& =\frac{1}{2 M} \sum_{\ell=\langle 2 M\rangle} \tilde{x}(\ell) e^{-j(\pi / M) k \ell} \\
& =\frac{1}{2 M} \sum_{\ell=-M}^{M-1} \tilde{x}(\ell) e^{-j(\pi / M) k \ell}
\end{aligned}
$$

此外，由于 $x_{M}(\ell)=\tilde{x}(\ell)$ 对 $\ell \in[-M . . M-1]$ 成立，我们可以将上述 $a_{k}$ 的公式重写为：

$$
a_{k}=\frac{1}{2 M} \sum_{\ell=-M}^{M-1} x_{M}(\ell) e^{-j(\pi / M) k \ell}
$$

将 $a_{k}$ 的表达式代入 (11.4) 并重新整理，我们得到 $\tilde{x}$ 的傅里叶级数表示为：

$$
\tilde{x}(n)=\sum_{k=-M}^{M-1}\left(\frac{1}{2 M} \sum_{\ell=-M}^{M-1} x_{M}(\ell) e^{-j(\pi / M) k \ell}\right) e^{j(\pi / M) k n}
$$

现在，定义 $\Delta \Omega=\frac{2 \pi}{2 M}=\frac{\pi}{M}$。将上式用 $\Delta \Omega$ 表示，我们得到：

$$
\begin{aligned}
\tilde{x}(n) & =\sum_{k=-M}^{M-1}\left(\frac{1}{2 \pi} \Delta \Omega \sum_{\ell=-M}^{M-1} x_{M}(\ell) e^{-j \Delta \Omega k \ell}\right) e^{j \Delta \Omega k n} \\
& =\frac{1}{2 \pi} \sum_{k=-M}^{M-1}\left(\Delta \Omega \sum_{\ell=-M}^{M-1} x_{M}(\ell) e^{-j \Delta \Omega k \ell}\right) e^{j \Delta \Omega k n}
\end{aligned}
$$

将上述 $\tilde{x}$ 的表达式代入 (11.3)，得到：

$$
\begin{equation*}
x(n)=\lim _{M \rightarrow \infty} \frac{1}{2 \pi} \sum_{k=-M}^{M-1}\left(\Delta \Omega \sum_{\ell=-M}^{M-1} x_{M}(\ell) e^{-j \Delta \Omega k \ell}\right) e^{j \Delta \Omega k n} \tag{11.5}
\end{equation*}
$$

现在，我们必须计算上述极限。随着 $M \rightarrow \infty$，有 $\Delta \Omega \rightarrow 0$。因此，在上述极限中，$k \Delta \Omega$ 变为连续变量，记为 $\Omega$，$\Delta \Omega$ 变为微分 $d \Omega$，求和变为积分，其下限和上限分别为：

$$
\begin{aligned}
& \lim _{M \rightarrow \infty}\left(\left.k \Delta \Omega\right|_{k=-M}\right)=\lim _{M \rightarrow \infty}-M \Delta \Omega=\lim _{M \rightarrow \infty}-M\left(\frac{\pi}{M}\right)=-\pi \quad \text { 和 } \\
& \lim _{M \rightarrow \infty}\left(\left.k \Delta \Omega\right|_{k=M-1}\right)=\lim _{M \rightarrow \infty}(M-1) \Delta \Omega=\lim _{M \rightarrow \infty}(M-1)\left(\frac{\pi}{M}\right)=\pi .
\end{aligned}
$$

根据 (11.2)，当 $M \rightarrow \infty$ 时，有 $x_{M} \rightarrow x$。结合以上结果，我们可以将 (11.5) 重写为：

$$
x(n)=\frac{1}{2 \pi} \int_{-\pi}^{\pi}\left(\sum_{\ell=-\infty}^{\infty} x(\ell) e^{-j \Omega \ell}\right) e^{j \Omega n} d \Omega
$$

由于被积函数是 $2 \pi$-周期的，我们可以将该方程改写为：

$$
x(n)=\frac{1}{2 \pi} \int_{2 \pi}\left(\sum_{\ell=-\infty}^{\infty} x(\ell) e^{-j \Omega \ell}\right) e^{j \Omega n} d \Omega
$$

因此，我们得到：

$$
x(n)=\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega
$$

其中

$$
X(\Omega)=\sum_{\ell=-\infty}^{\infty} x(\ell) e^{-j \Omega \ell} .
$$

由此，我们找到了非周期序列 $x$ 在所有频率的复指数信号下的表示方法。我们称之为序列 $x$ 的离散时间 (DT) 傅里叶变换表示。
## 11.3 广义傅里叶变换

在前一节中，我们通过涉及傅里叶级数分析与综合方程的极限过程，发展了一种新的数学工具，即离散时间 (DT) 傅里叶变换。然而，事实证明，许多实际中感兴趣的序列并不存在前述定义意义下的傅里叶变换。也就是说，对于给定序列 $x$，傅里叶变换求和式

$$
X(\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}
$$

可能不收敛，在这种情况下，序列 $x$ 的傅里叶变换 $X$ 并不存在。例如，如果 $x$ 是下列序列之一（以及许多其他可能性），上述求和式就不收敛：

- 非零常数序列；
- 周期序列（例如实数或复数正弦信号）；
- 单位阶跃序列（即 $u$）。

然而，这类序列在实际中具有很大意义。因此，非常希望有一种数学工具可以处理这些序列。这就促使了所谓广义傅里叶变换的发展。广义傅里叶变换不仅存在于周期序列、非零常数序列，也适用于许多其他类型的序列。然而，广义傅里叶变换所涉及的数学原理相当复杂，因此在此我们不会尝试正式推导广义傅里叶变换。尽管不完全严格，但可以将广义傅里叶变换理解为用与经典傅里叶变换相同的公式定义。因此，基于这一点以及其他原因，我们大多数情况下可以忽略广义傅里叶变换与经典傅里叶变换的区别，并将它们视为相同。在接下来的内容中，我们将尽量不区分经典傅里叶变换与广义傅里叶变换，只有在少数情况下有必要时才会作出区分。未正式引入广义傅里叶变换的主要缺点是，后续呈现的一些结果（实际上依赖于广义傅里叶变换）必须凭直觉接受，因为它们的证明需要正式的广义傅里叶变换知识，而本文未予引入。只要使用广义傅里叶变换，周期序列和非周期序列均可处理，从这个意义上来说，它比傅里叶级数（需要周期序列）更为通用。稍后，当我们讨论周期序列的傅里叶变换时，将在该情境下隐式使用广义傅里叶变换。事实上，在后续大部分内容中，当我们提到傅里叶变换时，通常是指广义傅里叶变换。
## 11.4 离散时间傅里叶变换的定义

前面，我们已经推导了序列的傅里叶变换表示。该表示将序列表达为所有频率下的复指数信号。更正式地，序列 $x$ 的傅里叶变换，记作 $\mathcal{F} x$ 或 $X$，定义为：

$$
\begin{equation*}
\mathcal{F} x(\Omega)=X(\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \tag{11.6}
\end{equation*}
$$

类似地，$X$ 的逆傅里叶变换，记作 $\mathcal{F}^{-1} X$ 或 $x$，表示为：

$$
\begin{equation*}
\mathcal{F}^{-1} X(n)=x(n)=\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega \tag{11.7}
\end{equation*}
$$

我们将 (11.6) 称为傅里叶变换分析方程，将 (11.7) 称为傅里叶变换综合方程。

为了表示序列 $x$ 的傅里叶变换为 $X$，可以写作：

$$
x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega) .
$$

在术语上，$x$ 与 $X$ 称为傅里叶变换对。

**例 11.1（移位与缩放的冲激序列的傅里叶变换）**  
求序列

$$
x(n)=A \delta\left(n-n_{0}\right),
$$

的傅里叶变换 $X$，其中 $A$ 是实常数，$n_{0}$ 是整数常数。然后，根据该结果写出 $x$ 的傅里叶变换表示。

**解答**  
根据傅里叶变换的定义，可以写作：

$$
\begin{aligned}
X(\Omega) & =\sum_{n=-\infty}^{\infty} A \delta\left(n-n_{0}\right) e^{-j \Omega n} \\
& =A \sum_{n=-\infty}^{\infty} \delta\left(n-n_{0}\right) e^{-j \Omega n}
\end{aligned}
$$

利用冲激序列的抽取性质，可以将上述结果简化为：

$$
X(\Omega)=A e^{-j \Omega n_{0}}
$$
因此，我们得到：

$$
A \boldsymbol{\delta}\left(n-n_{0}\right) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} A e^{-j \Omega n_{0}} .
$$

根据傅里叶变换的分析与综合方程，序列 $x$ 的傅里叶变换表示为：

$$
x(n)=\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega, \quad \text { 其中 } \quad X(\Omega)=A e^{-j \Omega n_{0}}
$$

**例 11.2（矩形脉冲的傅里叶变换）**  
求序列

$$
x(n)=u(n-a)-u(n-b)
$$

的傅里叶变换 $X$，其中 $a$ 和 $b$ 为整数常数，且 $a<b$。

**解答**  
首先观察：

$$
x(n)= \begin{cases}1 & n \in[a . . b) \\ 0 & \text { 其他情况 }\end{cases}
$$

根据傅里叶变换的定义，我们得到：

$$
\begin{aligned}
X(\Omega) & =\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \\
& =\sum_{n=a}^{b-1} e^{-j \Omega n} \\
& =\sum_{n=a}^{b-1}\left(e^{-j \Omega}\right)^{n} \\
& =e^{-j a \Omega} \sum_{n=0}^{b-a-1}\left(e^{-j \Omega}\right)^{n}
\end{aligned}
$$

右侧求和对应几何级数求和。利用几何级数求和公式 (F.8) 可得：

$$
\begin{aligned}
X(\Omega) & =e^{-j \Omega a} \frac{\left(e^{-j \Omega}\right)^{b-a}-1}{e^{-j \Omega}-1} \\
& =\frac{e^{-j b \Omega}-e^{-j a \Omega}}{e^{-j \Omega}-1} \\
& =\frac{e^{-j a \Omega}-e^{-j b \Omega}}{1-e^{-j \Omega}}
\end{aligned}
$$

利用指数与正弦关系，可改写为：

$$
\begin{aligned}
X(\Omega) & =\frac{e^{-j(a+b) \Omega / 2}\left(e^{-j(a-b) \Omega / 2}-e^{j(a-b) \Omega / 2}\right)}{e^{-j \Omega / 2}\left(e^{j \Omega / 2}-e^{-j \Omega / 2}\right)} \\
& =\frac{e^{-j(a+b) \Omega / 2}\left(2 j \sin \left[\frac{(b-a) \Omega}{2}\right]\right)}{e^{-j \Omega / 2}\left(2 j \sin \left[\frac{\Omega}{2}\right]\right)} \\
& =\frac{e^{-j(a+b) \Omega / 2} \sin \left[\frac{(b-a) \Omega}{2}\right]}{e^{-j \Omega / 2} \sin \left[\frac{\Omega}{2}\right]} \\
& =e^{-j(a+b-1) \Omega / 2}\left(\frac{\sin \left[\frac{(b-a) \Omega}{2}\right]}{\sin \left[\frac{\Omega}{2}\right]}\right)
\end{aligned}
$$

因此我们得到：

$$
u(n-a)-u(n-b) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} e^{-j(a+b-1) \Omega / 2}\left(\frac{\sin \left[\frac{1}{2}(b-a) \Omega\right]}{\sin \left[\frac{1}{2} \Omega\right]}\right)
$$

**例 11.3**  
求序列

$$
x(n)=a^{n} u(n),
$$

的傅里叶变换 $X$，其中 $a$ 为实常数且 $|a|<1$。

**解答**  
根据傅里叶变换定义：

$$
\begin{aligned}
X(\Omega) & =\sum_{n=-\infty}^{\infty} a^{n} u(n) e^{-j \Omega n} \\
& =\sum_{n=0}^{\infty} a^{n} e^{-j \Omega n} \\
& =\sum_{n=0}^{\infty}\left(a e^{-j \Omega}\right)^{n}
\end{aligned}
$$

右侧为几何级数。使用几何级数求和公式 (F.9) 可得（$|a|<1$）：

$$
\begin{aligned}
X(\Omega) & =\frac{1}{1-a e^{-j \Omega}} \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-a}
\end{aligned}
$$

因此：

$$
a^{n} u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-a}, \quad |a|<1.
$$

**例 11.4**  
求序列

$$
x(n)=a^{|n|}
$$

的傅里叶变换 $X$，其中 $a$ 为实常数且 $|a|<1$。

**解答**  
根据傅里叶变换定义：

$$
\begin{aligned}
X(\Omega) & =\sum_{n=-\infty}^{\infty} a^{|n|} e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{-1} a^{-n} e^{-j \Omega n}+\sum_{n=0}^{\infty} a^{n} e^{-j \Omega n} \\
& =\sum_{n=1}^{\infty} a^{n} e^{j \Omega n}+\sum_{n=0}^{\infty} a^{n} e^{-j \Omega n} \\
& =\sum_{n=1}^{\infty}\left(a e^{j \Omega}\right)^{n}+\sum_{n=0}^{\infty}\left(a e^{-j \Omega}\right)^{n}
\end{aligned}
$$

右侧每个求和都是几何级数。使用几何级数求和公式 (F.9)（$|a|<1$）可得：

$$
\begin{aligned}
X(\Omega) & =\frac{a e^{j \Omega}}{1-a e^{j \Omega}}+\frac{1}{1-a e^{-j \Omega}} \\
& =\frac{1-a e^{j \Omega}+a e^{j \Omega}\left(1-a e^{-j \Omega}\right)}{\left(1-a e^{j \Omega}\right)\left(1-a e^{-j \Omega}\right)} \\
& =\frac{1-a e^{j \Omega}+a e^{j \Omega}-a^{2}}{1-a e^{-j \Omega}-a e^{j \Omega}+a^{2}} \\
& =\frac{1-a^{2}}{1-a\left(e^{j \Omega}+e^{-j \Omega}\right)+a^{2}} \\
& =\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}
\end{aligned}
$$

因此：

$$
a^{|n|} \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}, \quad |a|<1.
$$

**例 11.5**  
求序列

$$
X(\Omega)=2 \pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)
$$

的逆傅里叶变换 $x$（$X$ 为 $2 \pi$-周期序列）。

（注意，上式中的 $\delta$ 表示 delta 函数，而非 delta 序列。）

**解答**  
根据逆傅里叶变换定义：

$$
\begin{aligned}
x(n) & =\frac{1}{2 \pi} \int_{2 \pi}\left[2 \pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)\right] e^{j \Omega n} d \Omega \\
& =\int_{2 \pi} \delta(\Omega) e^{j \Omega n} d \Omega \\
& =\int_{-\pi}^{\pi} \delta(\Omega) e^{j \Omega n} d \Omega
\end{aligned}
$$

利用 delta 函数的抽取性质，得到：

$$
x(n)=e^{0}=1
$$

因此：

$$
1 \stackrel{\mathrm{DTFT}}{\longleftrightarrow} 2 \pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) .
$$
## 11.5 关于傅里叶变换记号的说明

傅里叶变换算子 $\mathcal{F}$ 将序列映射为 ($2 \pi$-周期) 函数，而逆傅里叶变换算子 $\mathcal{F}^{-1}$ 将 ($2 \pi$-周期) 函数映射为序列。因此，这些算子的操作对象必须是函数或序列（而不是单个数值）。考虑图 11.1 所示的未命名序列，它将 $n$ 映射到 $e^{-|n / 10|}$。假设我们希望写出该序列的傅里叶变换表达式。起初，我们可能倾向于写作 “$\mathcal{F}\{e^{-|n / 10|}\}$”。然而严格来说，这种记号是不正确的，因为傅里叶变换算子的操作对象必须是序列，而 “$e^{-|n / 10|}$”（严格来说）表示的是数值（即图中序列在 $n$ 处的取值）。问题的根本原因在于该序列没有名字（如 $x$）可以引用。为了解决这个问题，我们可以定义序列 $x$，使 $x(n)=e^{-|n / 10|}$，然后写作傅里叶变换 $\mathcal{F} x$。然而，仅为了严格的记号而引入新序列名称通常是不理想的，因为会导致文字过于冗长。

为避免在引用未命名函数或序列时文字过于冗长，可使用点记号（dot notation），如第 2.1 节所介绍。再次考虑图 11.1 中的序列，将 $n$ 映射到 $e^{-|n / 10|}$。使用严格正确的记号，可以写作傅里叶变换为 $\mathcal{F}\left\{e^{-|\cdot / 10|}\right\}$。换句话说，我们可以通过使用中点符号（·）表示表达式指的是序列本身，而非序列的取值。点记号的使用示例见下文的例 11.6。点记号在希望采用严格、精确记号而不引入冗长文字时非常有用。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-122.jpg?height=658&width=871&top_left_y=291&top_left_x=564)  
图 11.1：$e^{-|n / 10|}$ 与 $n$ 的关系图。

**例 11.6（点记号）**  
点记号的若干示例如下：

1. 表示序列 $x$（$x(n)=e^{2|n|+3}$，无需引入序列名称 $x$）的傅里叶变换，可写作：$\mathcal{F}\left\{e^{2|\cdot|+3}\right\}$。
2. 表示序列 $x$（$x(n)=e^{2|n|+3}$）的傅里叶变换在 $2 \Omega-3$ 处的值，可写作：$\mathcal{F}\left\{e^{2|\cdot|+3}\right\}(2 \Omega-3)$。
3. 表示函数 $X$（$X(\Omega)=\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}$）的逆傅里叶变换，可写作：$\mathcal{F}^{-1}\left\{\frac{1-a^{2}}{1-2 a \cos (\cdot)+a^{2}}\right\}$。
4. 表示函数 $X$（$X(\Omega)=\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}$）的逆傅里叶变换在 $n-3$ 处的值，可写作：$\mathcal{F}^{-1}\left\{\frac{1-a^{2}}{1-2 a \cos (\cdot)+a^{2}}\right\}(n-3)$。

如果读者熟悉点记号，建议在适当情况下使用。然而，由于部分读者可能觉得点记号混淆，本书大多情况下尽量减少使用点记号。作为折衷，本书采用以下记号约定，以在不普遍使用点记号的前提下，实现简洁与适度清晰：

- 除非另有说明，对于傅里叶变换算子 $\mathcal{F}$ 的操作对象表达式，变量 $n$ 被假定为序列的自变量（即在点记号意义下，相当于每个 $n$ 被视为“·”）。
- 除非另有说明，对于逆傅里叶变换算子 $\mathcal{F}^{-1}$ 的操作对象表达式，变量 $\Omega$ 被假定为函数的自变量（即在点记号意义下，相当于每个 $\Omega$ 被视为“·”）。

**例 11.7（书中认可的记号）**  
采用本书记号约定的若干示例如下：

1. 表示序列 $x$（$x(n)=e^{2|n|+3}$）的傅里叶变换：$\mathcal{F}\left\{e^{2|n|+3}\right\}$。
2. 表示序列 $x$（$x(n)=e^{2|n|+3}$）的傅里叶变换在 $2 \Omega-3$ 处的值：$\mathcal{F}\left\{e^{2|n|+3}\right\}(2 \Omega-3)$。
3. 表示函数 $X$（$X(\Omega)=\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}$）的逆傅里叶变换：$\mathcal{F}^{-1}\left\{\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}\right\}$。
4. 表示函数 $X$（$X(\Omega)=\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}$）的逆傅里叶变换在 $n-3$ 处的值：$\mathcal{F}^{-1}\left\{\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}\right\}(n-3)$。

由于傅里叶变换或逆傅里叶变换作用于序列/函数会产生另一个函数/序列，因此我们可以在某个值处求这个新函数/序列的值。再次考虑图 11.1 中的序列（$n \mapsto e^{-|n / 10|}$）。要表示该序列的傅里叶变换在 $\Omega-1$ 处的值，可使用点记号写作：$\mathcal{F}\left\{e^{-|\cdot / 10|}\right\}(\Omega-1)$，或使用本书认可的记号约定写作：$\mathcal{F}\left\{e^{-|n / 10|}\right\}(\Omega-1)$。
## 11.6 离散时间傅里叶变换的收敛性问题

在前面推导傅里叶变换表示时，我们隐含地对所涉及的求和、积分及其他表达式的收敛性作了一些假设。然而，这些假设并非总是成立。因此，有必要对傅里叶变换的收敛性质进行更为谨慎的分析。

假设我们有一个任意序列 $x$。该序列的傅里叶变换表示为 $\hat{x}$，其形式为：

$$
\hat{x}(n)=\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega, \quad \text { 其中 } \quad X(\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}
$$

现在，我们需要关注这个表示的收敛性质。换句话说，我们希望了解在何种条件下 $\hat{x}$ 是 $x$ 的有效表示。

关于收敛性的第一个重要结果由下列定理给出。

**定理 11.1**  
如果序列 $x$ 是绝对可和的（即 $\sum_{n=-\infty}^{\infty}|x(n)|<\infty$），则 $x$ 的傅里叶变换 $X$ 一致收敛。

**证明**  
该结果的严格证明超出本书范围，因此在此省略。

由于在实际中，我们经常遇到非绝对可和的序列，上述结果有时并不适用。这促使我们考虑关于收敛性的其他结果。

下一个关于收敛性的重要结果涉及有限能量序列，如下定理所述。

**定理 11.2（傅里叶变换收敛性——有限能量情况）**  
如果序列 $x$ 为有限能量序列（即 $\sum_{n=-\infty}^{\infty}|x(n)|^{2}<\infty$），则其傅里叶变换表示 $\hat{x}$ 在均方误差（MSE）意义下收敛。

**证明**  
该结果的严格证明超出本书范围，因此在此省略。
## 11.7 离散时间傅里叶变换的性质

傅里叶变换具有许多重要性质。下面的各节将介绍其中的几个性质。为了方便，这些性质将在后文的表 11.1（第 471 页）中进行总结。

### 11.7.1 周期性

(DT) 傅里叶变换的一个特别重要的性质是它总是周期性的，如下定理所示。

**定理 11.3（周期性）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有

$$
X(\Omega)=X(\Omega+2 \pi)
$$

（即 $X$ 是 $2 \pi$-周期的）。

**证明**  
为证明此性质，按照以下步骤进行。由傅里叶变换的定义可得：

$$
\begin{aligned}
X(\Omega+2 \pi) & =\sum_{n=-\infty}^{\infty} x(n) e^{-j(\Omega+2 \pi) n} \\
& =\sum_{n=-\infty}^{\infty} x(n) e^{-j 2 \pi n} e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{\infty} x(n)\left(e^{-j 2 \pi}\right)^{n} e^{-j \Omega n}
\end{aligned}
$$

由于 $e^{-j 2 \pi}=1$，我们得到

$$
\begin{aligned}
X(\Omega+2 \pi) & =\sum_{n=-\infty}^{\infty} x(n)(1)^{n} e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \\
& =X(\Omega)
\end{aligned}
$$

因此，$X(\Omega+2 \pi)=X(\Omega)$（即 $X$ 是 $2 \pi$-周期的）。

### 11.7.2 线性性质

傅里叶变换最重要的性质之一是线性性，如下所述。

**定理 11.4（线性性）**  
如果 $x_{1}(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_{1}(\Omega)$ 且 $x_{2}(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_{2}(\Omega)$，则

$$
a_{1} x_{1}(n)+a_{2} x_{2}(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} a_{1} X_{1}(\Omega)+a_{2} X_{2}(\Omega),
$$

其中 $a_{1}$ 和 $a_{2}$ 为任意复常数。这就是傅里叶变换的线性性质。

**证明**  
设 $y(n)=a_{1} x_{1}(n)+a_{2} x_{2}(n)$，并设 $Y=\mathcal{F} y$，则有

$$
\begin{aligned}
Y(\Omega) & =\sum_{n=-\infty}^{\infty}\left[a_{1} x_{1}(n)+a_{2} x_{2}(n)\right] e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{\infty} a_{1} x_{1}(n) e^{-j \Omega n}+\sum_{n=-\infty}^{\infty} a_{2} x_{2}(n) e^{-j \Omega n} \\
& =a_{1} \sum_{n=-\infty}^{\infty} x_{1}(n) e^{-j \Omega n}+a_{2} \sum_{n=-\infty}^{\infty} x_{2}(n) e^{-j \Omega n} \\
& =a_{1} X_{1}(\Omega)+a_{2} X_{2}(\Omega)
\end{aligned}
$$

由此证明了线性性质成立。

**例 11.8**  
利用傅里叶变换对：

$$
\boldsymbol{\delta}(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} 1, \quad u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-1}+\pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k),
$$

求序列

$$
x(n)=2 \delta(n)-u(n)
$$

的傅里叶变换 $X$。

**解**  
对 $x$ 取傅里叶变换，得到：

$$
X(\Omega)=\mathcal{F}\{2 \delta(n)-u(n)\}(\Omega)
$$

利用傅里叶变换的线性性质，可得：

$$
X(\Omega)=2 \mathcal{F} \delta(\Omega)-\mathcal{F} u(\Omega)
$$

使用给定的傅里叶变换对，得到：

$$
\begin{aligned}
X(\Omega) & =2(1)-\left[\frac{e^{j \Omega}}{e^{j \Omega}-1}+\pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)\right] \\
& =\frac{2 e^{j \Omega}-2-e^{j \Omega}}{e^{j \Omega}-1}+\pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}-2}{e^{j \Omega}-1}+\pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)
\end{aligned}
$$
### 11.7.3 平移（时移）

傅里叶变换的下一个重要性质是平移（或时域平移）性质，如下所示。

**定理 11.5（平移，即时域平移）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有

$$
x\left(n-n_{0}\right) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} e^{-j \Omega n_{0}} X(\Omega),
$$

其中 $n_{0}$ 为任意整数。这就是傅里叶变换的平移性质（或时域平移性质）。

**证明**  
设 $y(n)=x\left(n-n_{0}\right)$，并设 $Y$ 为 $y$ 的傅里叶变换，则由傅里叶变换的定义可得：

$$
Y(\Omega)=\sum_{n=-\infty}^{\infty} x\left(n-n_{0}\right) e^{-j \Omega n}
$$

现在，采用变量替换。设 $\lambda=n-n_{0}$，则 $n=\lambda+n_{0}$。应用该变量替换，得到：

$$
\begin{aligned}
Y(\Omega) & =\sum_{\lambda=-\infty}^{\infty} x(\lambda) e^{-j \Omega\left(\lambda+n_{0}\right)} \\
& =e^{-j \Omega n_{0}} \sum_{\lambda=-\infty}^{\infty} x(\lambda) e^{-j \Omega \lambda} \\
& =e^{-j \Omega n_{0}} X(\Omega)
\end{aligned}
$$

因此，我们证明了平移性质成立。

**例 11.9**  
利用傅里叶变换对：

$$
a^{n} u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-a}, \quad |a|<1,
$$

求序列

$$
x(n)=a^{n} u(n-3)
$$

的傅里叶变换 $X$，其中 $a$ 为满足 $|a|<1$ 的复常数。

**解**  
首先，我们注意到

$$
x(n)=a^{3} a^{n-3} u(n-3)
$$

定义序列

$$
v_{1}(n)=a^{n} u(n)
$$

利用 $v_1$ 的定义，可以将 $x$ 重写为

$$
x(n)=a^{3} v_{1}(n-3) .
$$

对 $v_{1}$ 和 $x$ 取傅里叶变换，得到：

$$
\begin{aligned}
& V_{1}(\Omega)=\frac{e^{j \Omega}}{e^{j \Omega}-a}, \\
& X(\Omega)=a^{3} e^{-j 3 \Omega} V_{1}(\Omega)
\end{aligned}
$$

将 $V_{1}$ 的公式代入 $X$ 的公式，得到：

$$
\begin{aligned}
X(\Omega) & =a^{3} e^{-j 3 \Omega} V_{1}(\Omega) \\
& =a^{3} e^{-j 3 \Omega}\left(\frac{e^{j \Omega}}{e^{j \Omega}-a}\right) \\
& =\frac{a^{3} e^{-j 2 \Omega}}{e^{j \Omega}-a}
\end{aligned}
$$
### 11.7.4 调制（频域平移）

傅里叶变换的下一个重要性质是调制（即频域平移）性质，如下所示。

**定理 11.6（调制，即频域平移）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有

$$
e^{j \Omega_{0} n} x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X\left(\Omega-\Omega_{0}\right),
$$

其中 $\Omega_{0}$ 为任意实常数。这就是傅里叶变换的调制性质（或频域平移性质）。

**证明**  
设 $y(n)=e^{j \Omega_{0} n} x(n)$，并设 $Y$ 为 $y$ 的傅里叶变换，则由傅里叶变换的定义可得：

$$
\begin{aligned}
Y(\Omega) & =\sum_{n=-\infty}^{\infty} e^{j \Omega_{0} n} x(n) e^{-j \Omega n} \\
& =\sum_{n=-\infty}^{\infty} x(n) e^{-j\left(\Omega-\Omega_{0}\right) n} \\
& =X\left(\Omega-\Omega_{0}\right)
\end{aligned}
$$

因此，调制性质成立。

**例 11.10**  
利用傅里叶变换对：

$$
1 \stackrel{\mathrm{DTFT}}{\longleftrightarrow} 2 \pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k),
$$

求序列

$$
x(n)=\cos \left(\Omega_{0} n\right)
$$

的傅里叶变换 $X$，其中 $\Omega_{0}$ 为非零实常数。

**解**  
首先，将 $x$ 重写为

$$
x(n)=\frac{1}{2}\left(e^{j \Omega_{0} n}+e^{-j \Omega_{0} n}\right)
$$

取 $x$ 的傅里叶变换，得到：

$$
X(\Omega)=\mathcal{F}\left\{\frac{1}{2}\left(e^{j \Omega_{0} n}+e^{-j \Omega_{0} n}\right)\right\}(\Omega)
$$

利用傅里叶变换的线性性质，有：

$$
X(\Omega)=\frac{1}{2}\left[\mathcal{F}\left\{e^{j \Omega_{0} n}\right\}(\Omega)+\mathcal{F}\left\{e^{-j \Omega_{0} n}\right\}(\Omega)\right]
$$

利用傅里叶变换的调制性质，可得：

$$
X(\Omega)=\frac{1}{2}\left[\mathcal{F}\{1\}\left(\Omega-\Omega_{0}\right)+\mathcal{F}\{1\}\left(\Omega+\Omega_{0}\right)\right]
$$

代入已知傅里叶变换对的结果，得到：

$$
\begin{aligned}
X(\Omega) & =\frac{1}{2}\left(2 \pi \sum_{k=-\infty}^{\infty} \delta\left(\Omega-\Omega_{0}-2 \pi k\right)+2 \pi \sum_{k=-\infty}^{\infty} \delta\left(\Omega+\Omega_{0}-2 \pi k\right)\right) \\
& =\pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-\Omega_{0}-2 \pi k\right)+\delta\left(\Omega+\Omega_{0}-2 \pi k\right)\right]
\end{aligned}
$$
### 11.7.5 共轭性质

傅里叶变换的下一个重要性质是共轭性质，如下所示。

**定理 11.7（共轭）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有

$$
x^{*}(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X^{*}(-\Omega) .
$$

这就是傅里叶变换的共轭性质。

**证明**  
设 $y(n) = x^{*}(n)$，并设 $Y$ 为 $y$ 的傅里叶变换，由定义可得：

$$
Y(\Omega) = \sum_{n=-\infty}^{\infty} x^{*}(n) e^{-j \Omega n}
$$

利用共轭性质，可以将上式改写为：

$$
\begin{aligned}
Y(\Omega) & = \left(\sum_{n=-\infty}^{\infty} x^{*}(n) e^{-j \Omega n}\right)^{**} \\
& = \left(\sum_{n=-\infty}^{\infty} x(n) e^{j \Omega n}\right)^{*} \\
& = \left(\sum_{n=-\infty}^{\infty} x(n) e^{-j(-\Omega) n}\right)^{*} \\
& = X^{*}(-\Omega)
\end{aligned}
$$

因此，共轭性质成立。

**例 11.11（实序列的傅里叶变换）**  
证明实序列 $x$ 的傅里叶变换 $X$ 是共轭对称的，即：

$$
X(\Omega) = X^{*}(-\Omega), \quad \forall \Omega
$$

**解**  
由傅里叶变换的共轭性质，有：

$$
\mathcal{F}\left\{x^{*}(n)\right\}(\Omega) = X^{*}(-\Omega)
$$

由于 $x$ 是实数序列，可将 $x^{*}$ 替换为 $x$，得到：

$$
\mathcal{F} x(\Omega) = X^{*}(-\Omega)
$$

因此，

$$
X(\Omega) = X^{*}(-\Omega)
$$

这说明实序列的傅里叶变换是共轭对称的。
### 11.7.6 时域反转（Time Reversal）

傅里叶变换的下一个重要性质是时域反转（或反射）性质，如下所示。

**定理 11.8（时域反转 / 反射）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有：

$$
x(-n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(-\Omega) .
$$

这就是傅里叶变换的时域反转性质。

**证明**  
设 $y(n) = x(-n)$，并设 $Y$ 为 $y$ 的傅里叶变换，由定义可得：

$$
Y(\Omega) = \sum_{n=-\infty}^{\infty} x(-n) e^{-j \Omega n}
$$

令 $n' = -n$，则 $n = -n'$，代入并去掉下标 $'$，得到：

$$
\begin{aligned}
Y(\Omega) & = \sum_{n=-\infty}^{\infty} x(n) e^{j \Omega n} \\
& = \sum_{n=-\infty}^{\infty} x(n) e^{-j(-\Omega) n} \\
& = X(-\Omega)
\end{aligned}
$$

因此，时域反转性质成立。

**例 11.12**  
利用傅里叶变换的性质以及

$$
a^{n} u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-a},
$$

求序列

$$
x(n) = a^{|n|}
$$

的傅里叶变换 $X(\Omega)$。

**解**  
首先，将 $x(n)$ 重写为：

$$
x(n) = a^{n} u(n) + a^{-n} u(-n) - \delta(n)
$$

对两边取傅里叶变换，得到：

$$
X(\Omega) = \mathcal{F}\{a^{n} u(n) + a^{-n} u(-n) - \delta(n)\}(\Omega)
$$

利用线性性质，可得：

$$
X(\Omega) = \mathcal{F}\{a^{n} u(n)\}(\Omega) + \mathcal{F}\{a^{-n} u(-n)\}(\Omega) - \mathcal{F}\{\delta(n)\}(\Omega)
$$

利用时域反转性质：

$$
X(\Omega) = \mathcal{F}\{a^{n} u(n)\}(\Omega) + \mathcal{F}\{a^{n} u(n)\}(-\Omega) - 1
$$

代入已知傅里叶变换对：

$$
\mathcal{F}\{a^{n} u(n)\}(\Omega) = \frac{e^{j \Omega}}{e^{j \Omega} - a}, \quad \mathcal{F}\{\delta(n)\} = 1
$$

计算得到：

$$
\begin{aligned}
X(\Omega) & = \frac{e^{j \Omega}}{e^{j \Omega} - a} + \frac{e^{-j \Omega}}{e^{-j \Omega} - a} - 1 \\
& = \frac{1 - a^2}{1 - a (e^{j \Omega} + e^{-j \Omega}) + a^2} \\
& = \frac{1 - a^2}{1 - 2 a \cos \Omega + a^2}
\end{aligned}
$$
### 11.7.7 上采样（Upsampling）

傅里叶变换的下一个重要性质是上采样性质，如下所示。

**定理 11.9（上采样）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有：

$$
(\uparrow M) x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(M \Omega),
$$

其中 $M$ 是严格正整数。这就是傅里叶变换的上采样性质。

**证明**  
设 $y(n) = (\uparrow M) x(n)$，并设 $Y$ 为 $y$ 的傅里叶变换，由定义可得：

$$
\begin{aligned}
Y(\Omega) & = \sum_{n=-\infty}^{\infty} y(n) e^{-j \Omega n} \\
& = \sum_{n=-\infty}^{\infty} [(\uparrow M) x](n) e^{-j \Omega n}
\end{aligned}
$$

根据上采样的定义：

$$
Y(\Omega) = \sum_{\substack{n \in \mathbb{Z}: \\ M \text{ divides } n}} x(n / M) e^{-j \Omega n}
$$

只考虑 $n$ 可被 $M$ 整除的项，重写求和：

$$
\begin{aligned}
Y(\Omega) & = \sum_{n=-\infty}^{\infty} x(n) e^{-j M \Omega n} \\
& = \sum_{n=-\infty}^{\infty} x(n) e^{-j (M \Omega) n} \\
& = X(M \Omega)
\end{aligned}
$$

因此，上采样性质成立。

**例 11.13（上采样性质）**  
利用傅里叶变换对：

$$
u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-1} + \pi \sum_{k=-\infty}^{\infty} \delta(\Omega - 2 \pi k),
$$

求序列

$$
x(n) = 
\begin{cases} 
1 & n \ge 0 \text{ 且 } 3 \text{ 整除 } n \\ 
0 & \text{否则} 
\end{cases}
$$

的傅里叶变换 $X(\Omega)$。

**解**  
注意到：

$$
x(n) = (\uparrow 3) u(n)
$$

因此：

$$
X(\Omega) = \mathcal{F}\{ (\uparrow 3) u(n) \} (\Omega)
$$

根据上采样性质：

$$
X(\Omega) = \mathcal{F} u(3 \Omega)
$$

代入已知傅里叶变换对：

$$
\begin{aligned}
X(\Omega) & = \left. \left[ \frac{e^{j \lambda}}{e^{j \lambda} - 1} + \pi \sum_{k=-\infty}^{\infty} \delta(\lambda - 2 \pi k) \right] \right|_{\lambda = 3 \Omega} \\
& = \frac{e^{j 3 \Omega}}{e^{j 3 \Omega} - 1} + \pi \sum_{k=-\infty}^{\infty} \delta(3 \Omega - 2 \pi k)
\end{aligned}
$$
### 11.7.8 下采样（Downsampling）

傅里叶变换的下一个重要性质是下采样性质，如下所示。

**定理 11.10（下采样）**  
如果 $x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega)$，则有：

$$
x(M n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{1}{M} \sum_{k=0}^{M-1} X\Bigl[\frac{1}{M}(\Omega - 2 \pi k)\Bigr],
$$

其中 $M$ 是严格正整数。这就是傅里叶变换的下采样性质。

**证明**  
此证明可直接由定理 12.7 在特殊情况 $z = e^{j \Omega}$ 下得到。

**例 11.14**  
求序列

$$
y(n) = (\downarrow 2) x(n), \quad x(n) = \frac{1}{4} \operatorname{sinc}\left(\frac{\pi}{4} n\right)
$$

的傅里叶变换 $Y(\Omega)$。

**解**  

首先，计算 $x$ 的傅里叶变换 $X(\Omega)$。根据表 11.2：

$$
X(\Omega) = \mathcal{F}\Big\{\frac{1}{4} \operatorname{sinc}\Big(\frac{\pi}{4} n\Big)\Big\}(\Omega) = \sum_{k=-\infty}^{\infty} \operatorname{rect}\Big[\frac{2}{\pi} (\Omega - 2 \pi k)\Big]
$$

根据下采样性质，有：

$$
\begin{aligned}
Y(\Omega) & = \frac{1}{2} \sum_{\ell=0}^{1} X\Big[\frac{1}{2} (\Omega - 2 \pi \ell)\Big] \\
& = \frac{1}{2} X\Big(\frac{1}{2} \Omega\Big) + \frac{1}{2} X\Big[\frac{1}{2} (\Omega - 2 \pi)\Big]
\end{aligned}
$$

将 $X(\Omega)$ 代入：

$$
\begin{aligned}
Y(\Omega) & = \frac{1}{2} \sum_{k=-\infty}^{\infty} \operatorname{rect}\Big[\frac{2}{\pi} \big(\frac{1}{2} \Omega - 2 \pi k\big)\Big] + \frac{1}{2} \sum_{k=-\infty}^{\infty} \operatorname{rect}\Big[\frac{2}{\pi} \big(\frac{1}{2} (\Omega - 2 \pi) - 2 \pi k\big)\Big] \\
& = \frac{1}{2} \sum_{k=-\infty}^{\infty} \operatorname{rect}\Big[\frac{1}{\pi} (\Omega - 4 \pi k)\Big] + \frac{1}{2} \sum_{k=-\infty}^{\infty} \operatorname{rect}\Big[\frac{1}{\pi} (\Omega - 2 \pi (2k+1))\Big]
\end{aligned}
$$

注意，右侧两个求和都是 $4 \pi$ 周期函数。考虑 $\Omega \in (-\pi, \pi]$，此区间内只有第一个求和的 $k=0$ 项非零，第二个求和项均为零。因此简化为：

$$
Y(\Omega) = \frac{1}{2} \operatorname{rect}\Big(\frac{1}{\pi} \Omega\Big), \quad \Omega \in (-\pi, \pi]
$$

为了更直观地理解两个无限求和如何坍缩为单项，可以参考图 11.2。图中显示了 $X$ 的谱，以及 $Y_0$ 与 $Y_1$ 的单周期情况。最终 $Y = Y_0 + Y_1$ 仅在 $(-\pi, \pi]$ 内有一个矩形脉冲。
### 11.7.9 卷积（Convolution）

傅里叶变换的另一个重要性质是卷积性质，如下所示。

**定理 11.11（卷积）**  
如果 
$$
x_1(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_1(\Omega), \quad x_2(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_2(\Omega),
$$
则有：
$$
x_1 * x_2(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_1(\Omega) X_2(\Omega),
$$
其中 $*$ 表示离散卷积。这就是傅里叶变换的卷积性质。

**证明**  
设 $y(n) = x_1 * x_2(n)$，$Y(\Omega)$ 为 $y$ 的傅里叶变换。由定义：

$$
\begin{aligned}
Y(\Omega) & = \sum_{n=-\infty}^{\infty} [x_1 * x_2(n)] e^{-j \Omega n} \\
& = \sum_{n=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x_1(k) x_2(n-k) e^{-j \Omega n}
\end{aligned}
$$

令 $\lambda = n - k$，则 $n = \lambda + k$，代入得到：

$$
\begin{aligned}
Y(\Omega) & = \sum_{\lambda=-\infty}^{\infty} \sum_{k=-\infty}^{\infty} x_1(k) x_2(\lambda) e^{-j \Omega (\lambda + k)} \\
& = \sum_{k=-\infty}^{\infty} x_1(k) e^{-j \Omega k} \sum_{\lambda=-\infty}^{\infty} x_2(\lambda) e^{-j \Omega \lambda} \\
& = X_1(\Omega) X_2(\Omega)
\end{aligned}
$$

因此，时间域卷积在傅里叶域中对应乘法。

卷积性质在实际中非常重要，因为它可以将卷积运算转换为简单的乘法，从而避免直接处理复杂的卷积运算。这在分析 LTI 系统时尤为有用。

**例 11.15（卷积性质应用）**  
求序列
$$
x(n) = x_1 * x_2(n)
$$
的傅里叶变换，其中
$$
x_1(n) = a^n u(n), \quad x_2(n) = a^{|n|}, \quad |a|<1.
$$

**解**  
利用卷积性质：
$$
\begin{aligned}
X(\Omega) & = \mathcal{F}\{x_1 * x_2\}(\Omega) \\
& = \mathcal{F}\{x_1\}(\Omega) \cdot \mathcal{F}\{x_2\}(\Omega)
\end{aligned}
$$

根据表 11.2 中的傅里叶变换对：
$$
\mathcal{F}\{x_1\}(\Omega) = \frac{e^{j \Omega}}{e^{j \Omega} - a}, \quad
\mathcal{F}\{x_2\}(\Omega) = \frac{1 - a^2}{1 - 2 a \cos \Omega + a^2}
$$

因此：
$$
X(\Omega) = \frac{e^{j \Omega}(1 - a^2)}{(e^{j \Omega} - a)(1 - 2 a \cos \Omega + a^2)}
$$
### 11.7.10 乘法（Multiplication）

傅里叶变换的另一个重要性质是乘法性质，如下所示。

**定理 11.12（乘法）**  
如果
$$
x_1(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_1(\Omega), \quad x_2(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X_2(\Omega),
$$
则有：
$$
x_1(n) x_2(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{1}{2\pi} \int_{2\pi} X_1(\theta) X_2(\Omega - \theta) \, d\theta.
$$

这就是傅里叶变换的乘法性质。

**证明**  
设 $y(n) = x_1(n) x_2(n)$，其傅里叶变换为 $Y(\Omega)$：
$$
Y(\Omega) = \sum_{n=-\infty}^{\infty} x_1(n) x_2(n) e^{-j \Omega n}.
$$

将 $x_1(n)$ 用其傅里叶逆变换表示：
$$
x_1(n) = \frac{1}{2\pi} \int_{2\pi} X_1(\lambda) e^{j \lambda n} d\lambda
$$
代入上式：
$$
Y(\Omega) = \sum_{n=-\infty}^{\infty} x_2(n) \left[ \frac{1}{2\pi} \int_{2\pi} X_1(\lambda) e^{j \lambda n} d\lambda \right] e^{-j \Omega n}.
$$

交换积分与求和顺序：
$$
\begin{aligned}
Y(\Omega) &= \frac{1}{2\pi} \int_{2\pi} X_1(\lambda) \sum_{n=-\infty}^{\infty} x_2(n) e^{-j(\Omega - \lambda) n} d\lambda \\
&= \frac{1}{2\pi} \int_{2\pi} X_1(\lambda) X_2(\Omega - \lambda) d\lambda.
\end{aligned}
$$

因此，乘法性质成立。由此可见，傅里叶变换将时域的乘法变为频域的卷积。

---

**例 11.16（应用乘法性质）**  
已知傅里叶变换对：
$$
\frac{B}{\pi} \operatorname{sinc}(B n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \sum_{k=-\infty}^{\infty} \operatorname{rect}\left(\frac{1}{2B}[\Omega - 2\pi k]\right), \quad 0 < B < \pi.
$$

求序列
$$
x(n) = \frac{B}{2\pi} \operatorname{sinc}^2\left(\frac{B}{2} n\right)
$$
的傅里叶变换。

**解**  
将 $B/2$ 代入原傅里叶变换对：
$$
\frac{B}{2\pi} \operatorname{sinc}\left(\frac{B}{2} n\right) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \sum_{k=-\infty}^{\infty} \operatorname{rect}\left(\frac{1}{B}[\Omega - 2\pi k]\right).
$$

由乘法性质：
$$
X(\Omega) = \frac{B}{2\pi} \left[ \frac{2\pi}{B} \sum_{k=-\infty}^{\infty} \operatorname{rect}\left(\frac{1}{B}[\theta - 2\pi k]\right) \circledast \frac{2\pi}{B} \sum_{\ell=-\infty}^{\infty} \operatorname{rect}\left(\frac{1}{B}[\Omega - \theta - 2\pi \ell]\right) \right].
$$

考虑 $[-\pi, \pi]$ 区间，并利用矩形函数卷积性质：
$$
\operatorname{rect}\left(\frac{1}{B} \cdot\right) * \operatorname{rect}\left(\frac{1}{B} \cdot\right) = B \operatorname{tri}\left(\frac{1}{2B} \cdot\right),
$$
得到：
$$
X(\Omega) = \operatorname{tri}\left(\frac{1}{2B} \Omega\right).
$$

由于周期性：
$$
x(n) = \frac{B}{2\pi} \operatorname{sinc}^2\left(\frac{B}{2} n\right) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \sum_{k=-\infty}^{\infty} \operatorname{tri}\left(\frac{1}{2B}[\Omega - 2\pi k]\right), \quad 0 < B < \frac{\pi}{2}.
$$
### 11.7.11 频域微分（Frequency-Domain Differentiation）

傅里叶变换的另一个重要性质是频域微分性质，如下所示。

**定理 11.13（频域微分）**  
如果
$$
x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega),
$$
则有：
$$
n x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} j \frac{d}{d\Omega} X(\Omega).
$$

这就是傅里叶变换的频域微分性质。

**证明**  
设 $y(n) = n x(n)$，其傅里叶变换为 $Y(\Omega)$：
$$
Y(\Omega) = \sum_{n=-\infty}^{\infty} n x(n) e^{-j \Omega n} = \sum_{n=-\infty}^{\infty} x(n) \big(n e^{-j \Omega n}\big).
$$

利用 $n e^{-j \Omega n} = j \frac{d}{d\Omega} e^{-j \Omega n}$，得到：
$$
\begin{aligned}
Y(\Omega) &= \sum_{n=-\infty}^{\infty} x(n) \left[ j \frac{d}{d\Omega} e^{-j \Omega n} \right] \\
&= j \frac{d}{d\Omega} \sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \\
&= j \frac{d}{d\Omega} X(\Omega).
\end{aligned}
$$

因此，频域微分性质成立。

---

**例 11.17（应用频域微分性质）**  
已知傅里叶变换对：
$$
a^n u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j\Omega}}{e^{j\Omega}-a}, \quad |a|<1.
$$

求序列
$$
x(n) = n a^n u(n)
$$
的傅里叶变换。

**解**  
设 $v_1(n) = a^n u(n)$，则 $x(n) = n v_1(n)$。由频域微分性质：
$$
X(\Omega) = j \frac{d}{d\Omega} V_1(\Omega) = j \frac{d}{d\Omega} \left( \frac{e^{j\Omega}}{e^{j\Omega}-a} \right).
$$

对分数求导：
$$
\begin{aligned}
X(\Omega) &= j \left[ \frac{j e^{j\Omega} (e^{j\Omega}-a) - j e^{2 j\Omega}}{(e^{j\Omega}-a)^2} \right] \\
&= \frac{a e^{j\Omega}}{(e^{j\Omega}-a)^2}.
\end{aligned}
$$

因此：
$$
n a^n u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{a e^{j\Omega}}{(e^{j\Omega}-a)^2}, \quad |a|<1.
$$
### 11.7.12 差分（Differencing）

傅里叶变换的另一个重要性质是差分性质，如下所示。

**定理 11.14（差分）**  
如果
$$
x(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} X(\Omega),
$$
则有：
$$
x(n) - x(n-1) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \left(1 - e^{-j\Omega}\right) X(\Omega).
$$

这就是傅里叶变换的差分性质。

**证明**  
该结果可以直接由傅里叶变换的线性性质与平移性质得到。具体地：
$$
\mathcal{F}\{x(n)-x(n-1)\} = \mathcal{F}\{x(n)\} - \mathcal{F}\{x(n-1)\} = X(\Omega) - e^{-j\Omega} X(\Omega) = (1 - e^{-j\Omega}) X(\Omega).
$$

---

**例 11.18（应用差分性质）**  
已知傅里叶变换对：
$$
a^{|n|}, \ |a|<1 \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{1-a^2}{1-2 a \cos \Omega + a^2}.
$$

求序列
$$
x(n) = a^{|n|} - a^{|n-1|}
$$
的傅里叶变换。

**解**  
由差分性质：
$$
X(\Omega) = \left(1 - e^{-j\Omega}\right) \frac{1-a^2}{1-2 a \cos \Omega + a^2}.
$$
### 11.7.13 累积

接下来介绍傅里叶变换的一个性质，即累积性质，如下所示。  
定理 11.15（累积）。若 $x(n) \stackrel{D T F T}{\longleftrightarrow} X(\Omega)$，则有

$$
\sum_{k=-\infty}^{n} x(k) \stackrel{D T F T}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-1} X(\Omega)+\pi X(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) .
$$

这就是傅里叶变换的累积性质。  
证明。为了证明上述性质，我们按如下步骤进行。令 $y(n)=\sum_{k=-\infty}^{n} x(k)$，并令 $Y$ 表示 $y$ 的傅里叶变换。首先，我们注意到

$$
y(n)=x * u(n)
$$

即

$$
\begin{aligned}
y(n) & =x * u(n) \\
& =\sum_{k=-\infty}^{\infty} x(k) u(n-k) \\
& =\sum_{k=-\infty}^{n} x(k) u(n-k)+\sum_{k=n+1}^{\infty} x(k) u(n-k) \\
& =\sum_{k=-\infty}^{n} x(k)
\end{aligned}
$$

因此，根据傅里叶变换的卷积性质，我们有

$$
Y(\Omega)=X(\Omega) U(\Omega)
$$

根据表 11.2，我们有傅里叶变换对

$$
u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{e^{j \Omega}}{e^{j \Omega}-1}+\sum_{k=-\infty}^{\infty} \pi \delta(\Omega-2 \pi k) .
$$

利用这个变换对，我们可以将上式中的 $Y$ 简化如下：

$$
\begin{aligned}
Y(\Omega) & =X(\Omega)\left[\frac{e^{j \Omega}}{e^{j \Omega}-1}+\sum_{k=-\infty}^{\infty} \pi \delta(\Omega-2 \pi k)\right] \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1} X(\Omega)+\sum_{k=-\infty}^{\infty} \pi X(\Omega) \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1} X(\Omega)+\sum_{k=-\infty}^{\infty} \pi X(2 \pi k) \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1} X(\Omega)+\pi X(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)
\end{aligned}
$$

由此，我们证明了累积性质成立。  

示例 11.19（累积性质）。求序列

$$
x(n)=u(n)
$$

的傅里叶变换 $X$。  

解。首先，我们注意到

$$
x(n)=\sum_{k=-\infty}^{n} \delta(k)
$$

因此，利用傅里叶变换的累积性质以及 $\mathcal{F} \delta(\Omega)=1$（见表 11.2），我们可以写出

$$
\begin{aligned}
X(\Omega) & =\frac{e^{j \Omega}}{e^{j \Omega}-1} \mathcal{F} \delta(\Omega)+\pi \mathcal{F} \delta(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1}(1)+\pi(1) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1}+\pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)
\end{aligned}
$$
### 11.7.14 帕塞瓦尔关系

接下来介绍傅里叶变换的一个性质，与信号能量相关，称为帕塞瓦尔关系。  

定理 11.16（帕塞瓦尔关系）。若 $x(n) \stackrel{D T F T}{\longleftrightarrow} X(\Omega)$，则有

$$
\begin{equation*}
\sum_{n=-\infty}^{\infty}|x(n)|^{2}=\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)|^{2} d \Omega \tag{11.8}
\end{equation*}
$$

这就是帕塞瓦尔关系。  
证明。为了证明上述性质，我们按如下步骤进行。我们从 (11.8) 左边的表达式出发。根据复数的性质，有

$$
\sum_{n=-\infty}^{\infty}|x(n)|^{2}=\sum_{n=-\infty}^{\infty} x^{*}(n) x(n)
$$

将 $x(n)$ 用 $X$ 的逆傅里叶变换表示，可得

$$
\sum_{n=-\infty}^{\infty}|x(n)|^{2}=\sum_{n=-\infty}^{\infty} x^{*}(n) \frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega
$$

交换积分与求和的顺序，得到

$$
\begin{aligned}
\sum_{n=-\infty}^{\infty}|x(n)|^{2} & =\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) \sum_{n=-\infty}^{\infty} x^{*}(n) e^{j \Omega n} d \Omega \\
& =\frac{1}{2 \pi} \int_{2 \pi} X(\Omega)\left(\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}\right)^{*} d \Omega \\
& =\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) X^{*}(\Omega) d \Omega \\
& =\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)|^{2} d \Omega
\end{aligned}
$$

由此，我们证明了帕塞瓦尔关系成立。  

由于能量在工程应用中通常具有重要意义，因此知道傅里叶变换在一定比例因子下保持能量是非常有用的。例如，如果我们在傅里叶域中求解问题，就不必返回时域来计算能量，因为可以直接在傅里叶域中利用帕塞瓦尔关系进行计算。  

示例 11.20。求序列

$$
x(n)=\operatorname{sinc}\left(\frac{1}{2} n\right)
$$

的能量 $E$。  

解。我们可以尝试直接根据 $x$ 的定义求 $E$：

$$
\begin{aligned}
E & =\sum_{n=-\infty}^{\infty}|x(n)|^{2} \\
& =\sum_{n=-\infty}^{\infty}\left|\operatorname{sinc}\left(\frac{1}{2} n\right)\right|^{2} \\
& =\sum_{n=-\infty}^{\infty}\left|\frac{2 \sin \left(\frac{1}{2} n\right)}{n}\right|^{2}
\end{aligned}
$$

然而，这个求和计算起来相当繁琐。因此，我们改用帕塞瓦尔关系，通过 $X$ 来计算 $E$。根据表 11.2，我们知道

$$
2 \pi\left[\frac{1}{2 \pi} \operatorname{sinc}\left(\frac{n}{2}\right)\right] \stackrel{\mathrm{DTFT}}{\longleftrightarrow} 2 \pi \sum_{k=-\infty}^{\infty} \operatorname{rect}(\Omega-2 \pi k) .
$$

因此，我们有

$$
X(\Omega)=2 \pi \operatorname{rect} \Omega, \quad \Omega \in[-\pi, \pi)
$$

利用此结果，我们可以计算 $E$：

$$
\begin{aligned}
E & =\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)|^{2} d \Omega \\
& =\frac{1}{2 \pi} \int_{-\pi}^{\pi}|2 \pi \operatorname{rect} \Omega|^{2} d \Omega \\
& =\frac{1}{2 \pi} \int_{-1 / 2}^{1 / 2}(2 \pi)^{2} d \Omega \\
& =\left(\frac{1}{2 \pi}\right)\left(4 \pi^{2}\right) \\
& =2 \pi
\end{aligned}
$$
### 11.7.15 偶/奇对称性

傅里叶变换保持对称性。换句话说，我们有如下结果。  

定理 11.17（偶/奇对称性）。对于傅里叶变换为 $X$ 的序列 $x$，下列命题成立：

- 当且仅当 $X$ 为偶函数时，$x$ 为偶函数；  
- 当且仅当 $X$ 为奇函数时，$x$ 为奇函数。

证明。首先，我们证明如果序列 $x$ 是偶/奇的，则其傅里叶变换 $X$ 也是偶/奇的。由傅里叶变换的定义，有

$$
X(\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}
$$

由于 $x$ 是偶/奇的，我们有 $x(n)= \pm x(-n)$，其中 “$\pm$” 中的正号对应 $x$ 为偶函数，负号对应 $x$ 为奇函数。利用这一点，可以将上式重写为

$$
X(\Omega)=\sum_{n=-\infty}^{\infty} \pm x(-n) e^{-j \Omega n}
$$

现在，我们进行变量代换。令 $n^{\prime}=-n$，则 $n=-n^{\prime}$。应用此代换并去掉撇号，得到

$$
\begin{aligned}
X(\Omega) & =\sum_{n=-\infty}^{\infty} \pm x(n) e^{-j \Omega(-n)} \\
& = \pm \sum_{n=-\infty}^{\infty} x(n) e^{j \Omega n} \\
& = \pm \sum_{n=-\infty}^{\infty} x(n) e^{-j(-\Omega) n} \\
& = \pm X(-\Omega)
\end{aligned}
$$

因此，$X$ 是偶/奇函数。  

接下来，我们证明如果 $X$ 是偶/奇函数，则 $x$ 也是偶/奇函数。由逆傅里叶变换的定义，有

$$
x(n)=\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega
$$

由于 $X$ 是偶/奇函数，我们有 $X(\Omega)= \pm X(-\Omega)$，其中 “$\pm$” 中的正号对应 $X$ 为偶函数，负号对应 $X$ 为奇函数。利用这一点，可将上式重写为

$$
\begin{aligned}
x(n) & =\frac{1}{2 \pi} \int_{2 \pi} \pm X(-\Omega) e^{j \Omega n} d \Omega \\
& =\frac{1}{2 \pi} \int_{a}^{a+2 \pi} \pm X(-\Omega) e^{j \Omega n} d \Omega
\end{aligned}
$$

现在，我们进行变量代换。令 $\lambda=-\Omega$，则 $\Omega=-\lambda$ 且 $d \Omega=-d \lambda$。应用此代换，得到

$$
\begin{aligned}
x(n) & =\frac{1}{2 \pi} \int_{-a}^{-a-2 \pi} \pm X(\lambda) e^{-j \lambda n}(-1) d \lambda \\
& = \pm \frac{1}{2 \pi} \int_{-a-2 \pi}^{-a} X(\lambda) e^{-j \lambda n} d \lambda \\
& = \pm \frac{1}{2 \pi} \int_{2 \pi} X(\lambda) e^{j \lambda(-n)} d \lambda \\
& = \pm x(-n)
\end{aligned}
$$

因此，$x$ 是偶/奇函数。证明完毕。  

换句话说，上述定理说明了正傅里叶变换和逆傅里叶变换都保持偶/奇对称性。
### 11.7.16 实序列

事实证明，实值序列的傅里叶变换具有特殊结构，如下定理所示。  

定理 11.18（实值序列）。当且仅当序列 $x$ 为实值序列时，其傅里叶变换 $X$ 满足

$$
X(\Omega)=X^{*}(-\Omega), \quad \text{对所有 } \Omega
$$

（即 $X$ 是共轭对称的）。  

证明。由傅里叶变换的定义，有

$$
\begin{equation*}
X(\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \tag{11.9}
\end{equation*}
$$

在上式中将 $\Omega$ 替换为 $-\Omega$，得到

$$
X(-\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{j \Omega n}
$$

对该式两边取共轭，得到

$$
\begin{equation*}
X^{*}(-\Omega)=\sum_{n=-\infty}^{\infty} x^{*}(n) e^{-j \Omega n} \tag{11.10}
\end{equation*}
$$

首先，我们证明 $x$ 为实值序列意味着 $X$ 是共轭对称的。假设 $x$ 为实值序列。由于 $x$ 为实值，可将 (11.10) 中的 $x^{*}$ 替换为 $x$，得到

$$
X^{*}(-\Omega)=\sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}
$$

注意到右边正是 $X(\Omega)$，于是

$$
X^{*}(-\Omega)=X(\Omega)
$$

因此，$x$ 为实值序列意味着 $X$ 是共轭对称的。  

接下来，我们证明 $X$ 为共轭对称意味着 $x$ 为实值序列。假设 $X$ 为共轭对称。由此，(11.9) 中的 $X(\Omega)$ 与 (11.10) 中的 $X^{*}(-\Omega)$ 必须相等。因此，我们有

$$
\begin{aligned}
& X(\Omega)-X^{*}(-\Omega)=0 \\
\Rightarrow & \sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n}-\sum_{n=-\infty}^{\infty} x^{*}(n) e^{-j \Omega n}=0 \\
\Rightarrow & \sum_{n=-\infty}^{\infty}\left[x(n)-x^{*}(n)\right] e^{-j \Omega n}=0
\end{aligned}
$$

这意味着 $x^{*}=x$，因此 $x$ 为实值序列。由此可知，$X$ 为共轭对称意味着 $x$ 为实值序列。证明完毕。  

假设 $X$ 是实值序列 $x$ 的傅里叶变换，则 $X$ 是共轭对称的。根据复数性质，可以证明 $X$ 为共轭对称等价于

$$
\begin{gather*}
|X(\Omega)|=|X(-\Omega)|, \quad \text{对所有 } \Omega \in \mathbb{R} \quad \text{以及} \tag{11.11a}\\
\arg X(\Omega)=-\arg X(-\Omega), \quad \text{对所有 } \Omega \in \mathbb{R} \tag{11.11b}
\end{gather*}
$$

（即 $X$ 的幅度为偶函数，幅角为奇函数）。  

由于实值序列 $x$ 的傅里叶变换 $X$ 是共轭对称的，因此 $X$ 在负值区间的图像完全冗余，可以由非负值区间的图像确定。最后注意，$x$ 为实值序列并不必然意味着 $X$ 为实值，因为共轭对称函数不一定是实值的。  

表 11.1：离散时间傅里叶变换的性质  

| 性质 | 时域 | 频域 |
| :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(n)+a_{2} x_{2}(n)$ | $a_{1} X_{1}(\Omega)+a_{2} X_{2}(\Omega)$ |
| 平移 | $x\left(n-n_{0}\right)$ | $e^{-j \Omega n_{0}} X(\Omega)$ |
| 调制 | $e^{j \Omega_{0} n} x(n)$ | $X\left(\Omega-\Omega_{0}\right)$ |
| 共轭 | $x^{*}(n)$ | $X^{*}(-\Omega)$ |
| 时间反转 | $x(-n)$ | $X(-\Omega)$ |
| 上采样 | $(\uparrow M) x(n)$ | $X(M \Omega)$ |
| 下采样 | $x(M n)$ | $\frac{1}{M} \sum_{k=0}^{M-1} X\left(\frac{\Omega-2 \pi k}{M}\right)$ |
| 卷积 | $x_{1} * x_{2}(n)$ | $X_{1}(\Omega) X_{2}(\Omega)$ |
| 乘积 | $x_{1}(n) x_{2}(n)$ | $\frac{1}{2 \pi} \int_{2 \pi} X_{1}(\theta) X_{2}(\Omega-\theta) d \theta$ |
| 频域微分 | $n x(n)$ | $j \frac{d}{d \Omega} X(\Omega)$ |
| 差分 | $x(n)-x(n-1)$ | $\left(1-e^{-j \Omega}\right) X(\Omega)$ |
| 累积 | $\sum_{k=-\infty}^{n} x(k)$ | $\frac{e^{j \Omega}}{e^{j \Omega}-1} X(\Omega)+\pi X(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)$ |

| 性质 | 说明 |
| :--- | :--- |
| 周期性 | $X(\Omega)=X(\Omega+2 \pi)$ |
| 帕塞瓦尔关系 | $\sum_{n=-\infty}^{\infty}|x(n)|^2=\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)|^2 d \Omega$|
| 偶对称 | $x$ 为偶 $\Leftrightarrow X$ 为偶 |
| 奇对称 | $x$ 为奇 $\Leftrightarrow X$ 为奇 |
| 实值 / 共轭对称 | $x$ 为实 $\Leftrightarrow X$ 为共轭对称 |
## 11.8 周期序列的离散时间傅里叶变换

利用第 11.3 节中简要讨论的广义傅里叶变换，傅里叶变换也可以应用于周期序列。特别地，周期序列的傅里叶变换可以使用以下结果来计算。  

定理 11.19（周期序列的傅里叶变换）。设 $x$ 为 $N$ 周期序列，其对应的傅里叶级数系数序列为 $a$。令 $x_{N}$ 表示序列

$$
x_{N}(n)= \begin{cases}x(n) & n \in[0 \ldots N-1] \\ 0 & \text { 否则 }\end{cases}
$$

（即 $x_{N}$ 是序列 $x$ 的截断/窗函数版本。注意，$x_{N}$ 是在一个周期内等于 $x$，其他地方为零的序列）。令 $X_{N}$ 表示 $x_{N}$ 的傅里叶变换。序列 $x$ 的傅里叶变换 $X$ 为

$$
\begin{equation*}
X(\Omega)=2 \pi \sum_{k=-\infty}^{\infty} a_{k} \delta\left(\Omega-\frac{2 \pi}{N} k\right), \tag{11.12a}
\end{equation*}
$$

或等价地，

$$
\begin{equation*}
X(\Omega)=\frac{2 \pi}{N} \sum_{k=-\infty}^{\infty} X_{N}\left(\frac{2 \pi}{N} k\right) \delta\left(\Omega-\frac{2 \pi}{N} k\right) \tag{11.12b}
\end{equation*}
$$

此外，$a$ 与 $X_{N}$ 的关系为

$$
\begin{equation*}
a_{k}=\frac{1}{N} X_{N}\left(\frac{2 \pi}{N} k\right) \tag{11.13}
\end{equation*}
$$

证明。由于 $x$ 是 $N$ 周期的，我们可以使用傅里叶级数将其表示为

$$
\begin{equation*}
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n} \tag{11.14a}
\end{equation*}
$$

其中

$$
\begin{equation*}
a_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \tag{11.14b}
\end{equation*}
$$

考虑 (11.14b) 中 $a_{k}$ 的表达式。由于 $x_{N}(n)=x(n)$ 在 $x$ 的一个周期内，其余为零，因此可将 (11.14b) 重写为

$$
\begin{align*}
a_{k} & =\frac{1}{N} \sum_{n=-\infty}^{\infty} x_{N}(n) e^{-j[(2 \pi / N) k] n} \\
& =\frac{1}{N} X_{N}\left(\frac{2 \pi}{N} k\right) \tag{11.15}
\end{align*}
$$

因此，我们已经证明了 (11.13) 的正确性。  

现在，考虑序列 $x$ 的傅里叶变换 $X$。对 (11.14a) 的两边取傅里叶变换，得到

$$
\begin{align*}
X(\Omega) & =\left(\mathcal{F}\left\{\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n}\right\}\right) (\Omega)\\
& =\sum_{k=\langle N\rangle} a_{k} \mathcal{F}\left\{e^{j(2 \pi / N) k n}\right\}(\Omega)
\end{align*}
$$

现在，考虑上式右边的傅里叶变换。根据表 11.2 以及傅里叶变换的调制性质，我们可以得到

$$
\begin{aligned}
\mathcal{F}\left\{e^{j(2 \pi / N) k n}\right\}(\Omega) & =\mathcal{F}\left\{e^{j(2 \pi / N) k n} \cdot 1\right\}(\Omega) \\
& =2 \pi \sum_{\ell=-\infty}^{\infty} \delta\left(\left[\Omega-\frac{2 \pi}{N} k\right]-2 \pi \ell\right) \\
& =2 \pi \sum_{\ell=-\infty}^{\infty} \delta\left(\Omega-\frac{2 \pi}{N} k-2 \pi \ell\right)
\end{aligned}
$$

将该傅里叶变换代入 $X(\Omega)$ 的表达式，得到

$$
\begin{aligned}
X(\Omega) & =\sum_{k=\langle N\rangle} a_{k} \mathcal{F}\left\{e^{j(2 \pi / N) k n}\right\}(\Omega) \\
& =\sum_{k=\langle N\rangle} a_{k}\left[2 \pi \sum_{\ell=-\infty}^{\infty} \delta\left(\Omega-\frac{2 \pi}{N} k-2 \pi \ell\right)\right]
\end{aligned}
$$

交换两重求和的顺序，并将 $k$ 的求和范围选择为 $[0 \ldots N-1]$，得到

$$
\begin{aligned}
X(\Omega) & =2 \pi \sum_{\ell=-\infty}^{\infty} \sum_{k=0}^{N-1} a_{k} \delta\left(\Omega-\frac{2 \pi}{N} k-2 \pi \ell\right) \\
& =2 \pi \sum_{\ell=-\infty}^{\infty} \sum_{k=0}^{N-1} a_{k} \delta\left(\Omega-\frac{2 \pi}{N}[N \ell+k]\right)
\end{aligned}
$$

注意到两重求和的综合效果是 $N \ell + k$ 取到每个整数值恰好一次。因此，可以将两重求和合并为单重求和，得到

$$
X(\Omega)=2 \pi \sum_{k=-\infty}^{\infty} a_{k} \delta\left(\Omega-\frac{2 \pi}{N} k\right)
$$

因此，(11.12a) 成立。将 (11.15) 代入上述 $X(\Omega)$，得到

$$
\begin{aligned}
X(\Omega) & =2 \pi \sum_{k=-\infty}^{\infty} a_{k} \delta\left(\Omega-\frac{2 \pi}{N} k\right) \\
& =2 \pi \sum_{k=-\infty}^{\infty} \frac{1}{N} X_{N}\left(\frac{2 \pi}{N} k\right) \delta\left(\Omega-\frac{2 \pi}{N} k\right) \\
& =\frac{2 \pi}{N} \sum_{k=-\infty}^{\infty} X_{N}\left(\frac{2 \pi}{N} k\right) \delta\left(\Omega-\frac{2 \pi}{N} k\right)
\end{aligned}
$$

因此，(11.12b) 成立。证明完毕。  

上述定理 11.19 给出了计算周期序列 $x$ 的傅里叶变换 $X$ 的两种公式。一种公式以 $x$ 的傅里叶级数系数序列 $a$ 表示，另一种公式以 $x$ 的单周期序列 $x_{N}$ 的傅里叶变换 $X_{N}$ 表示。选择哪种公式取决于已有信息或最容易获得的信息。例如，如果已知 $x$ 的傅里叶级数系数，则使用 (11.12b) 更为方便。  

从定理 11.19，我们还可以得出一些重要结论。首先，周期序列的傅里叶变换是一系列冲激函数，位于基频 $\frac{2 \pi}{N}$ 的整数倍位置。每个冲激的权重是相应傅里叶级数系数的 $2 \pi$ 倍。其次，周期序列 $x$ 的傅里叶级数系数序列 $a$ 是通过在基频 $\frac{2 \pi}{N}$ 的整数倍处采样 $x_{N}$ 的傅里叶变换，并将得到的序列按 $\frac{1}{N}$ 缩放得到的。  

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-146.jpg?height=1019&width=801&top_left_y=286&top_left_x=591)  
图 11.3：频谱。(a) $X_{1}$ 和 (b) $X_{2}$ 的频谱。  

示例 11.21。设 $X_{1}$ 和 $X_{2}$ 分别为 $x_{1}$ 和 $x_{2}$ 的傅里叶变换。假设 $X_{1}$ 和 $X_{2}$ 如图 11.3(a) 和 (b) 所示。判断 $x_{1}$ 和 $x_{2}$ 是否为周期序列。  

解。我们知道，$N$ 周期序列 $x$ 的傅里叶变换 $X$ 必须具有形式

$$
X(\Omega)=\sum_{k=-\infty}^{\infty} \alpha_{k} \delta\left(\Omega-\frac{2 \pi}{N} k\right),
$$

其中 $\{\alpha_{k}\}$ 为复常数。频谱 $X_{1}$ 确实具有此形式，$N=16$，即冲激位于频率 $\frac{2 \pi}{16}=\frac{\pi}{8}$ 的整数倍处。因此，$x_{1}$ 必为 16 周期。频谱 $X_{2}$ 不具有所需形式，因此 $x_{2}$ 不是周期序列。  

示例 11.22。考虑图 11.4 所示的 $N$ 周期序列 $x$，其中 $N=16$。利用傅里叶变换，求 $x$ 的傅里叶级数表示。  

解。定义序列 $y$ 为 $x$ 的截断/窗函数版本：

$$
\begin{aligned}
y(n) & = \begin{cases}x(n) & n \in[0 \ldots 15] \\ 0 & \text { 否则 }\end{cases} \\
& =u(n)-u(n-8)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-147.jpg?height=298&width=1136&top_left_y=305&top_left_x=545)  
图 11.4：16 周期序列 $x$。  

因此，我们有

$$
\begin{aligned}
x(n) & =\sum_{k=-\infty}^{\infty} y(n-N k) \\
& =\sum_{k=-\infty}^{\infty} y(n-16 k)
\end{aligned}
$$
根据表 11.2，序列 $y$ 的傅里叶变换 $Y$ 为

$$
\begin{aligned}
Y(\Omega) & =(\mathcal{F}\{u(n)-u(n-8)\})(\Omega) \\
& =e^{-j \Omega(8-1) / 2}\left[\frac{\sin \left(\frac{8}{2} \Omega\right)}{\sin \left(\frac{1}{2} \Omega\right)}\right] \\
& =e^{-j(7 / 2) \Omega}\left[\frac{\sin (4 \Omega)}{\sin \left(\frac{1}{2} \Omega\right)}\right] .
\end{aligned}
$$

现在，我们希望求序列 $x$ 的傅里叶级数表示，其形式为

$$
\begin{aligned}
x(n) & =\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle 16\rangle} c_{k} e^{j(\pi / 8) k n}
\end{aligned}
$$

利用傅里叶变换，我们得到

$$
\begin{aligned}
c_{k} & =\frac{1}{N} Y\left(\frac{2 \pi}{N} k\right) \\
& =\frac{1}{16} Y\left(\frac{\pi}{8} k\right) \\
& =\frac{1}{16} e^{-j(7 / 2)(\pi / 8) k}\left(\frac{\sin \left[4\left(\frac{\pi}{8} k\right)\right]}{\sin \left[\frac{1}{2}\left(\frac{\pi}{8} k\right)\right]}\right) \\
& =\frac{1}{16} e^{-j(7 \pi / 16) k}\left[\frac{\sin \left(\frac{\pi}{2} k\right)}{\sin \left(\frac{\pi}{16} k\right)}\right] .
\end{aligned}
$$
## 11.9 更多傅里叶变换

在本章中，我们已经推导出许多傅里叶变换对。其中一些以及其他重要的变换对列于表 11.2 中。利用表 11.1 中列出的各种傅里叶变换性质以及表 11.2 中的傅里叶变换对，我们可以更容易地求出更复杂序列的傅里叶变换。

表 11.2：离散时间傅里叶变换的变换对
| 变换对 | $x(n)$ | $X(\Omega)$ |
| :--- | :--- | :--- |
| 1 | $\delta(n)$ | 1 |
| 2 | 1 | $2 \pi \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)$ |
| 3 | $u(n)$ | $\frac{e^{j \Omega}}{e^{j \Omega}-1}+\sum_{k=-\infty}^{\infty} \pi \delta(\Omega-2 \pi k)$ |
| 4 | $a^{n} u(n),|a|<1$ | $\frac{e^{j \Omega}}{e^{j \Omega}-a}$ |
| 5 | $-a^{n} u(-n-1),|a|>1$ | $\frac{e^{j \Omega}}{e^{j \Omega}-a}$ |
| 6 | $a^{|n|},|a|<1$ | $\frac{1-a^{2}}{1-2 a \cos \Omega+a^{2}}$ |
| 7 | $\cos \left(\Omega_{0} n\right)$ | $\pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-\Omega_{0}-2 \pi k\right)+\delta\left(\Omega+\Omega_{0}-2 \pi k\right)\right]$ |
| 8 | $\sin \left(\Omega_{0} n\right)$ | $j \pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega+\Omega_{0}-2 \pi k\right)-\delta\left(\Omega-\Omega_{0}-2 \pi k\right)\right]$ |
| 9 | $\cos \left(\Omega_{0} n\right) u(n)$ | $\frac{e^{j 2 \Omega}-e^{j \Omega} \cos \Omega_{0}}{e^{j 2 \Omega}-2 e^{j \Omega} \cos \Omega_{0}+1}+\frac{\pi}{2} \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-2 \pi k-\Omega_{0}\right)+\delta\left(\Omega-2 \pi k+\Omega_{0}\right)\right]$ |
| 10 | $\sin \left(\Omega_{0} n\right) u(n)$ | $\frac{e^{j \Omega} \sin \Omega_{0}}{e^{j 2 \Omega}-2 e^{j \Omega} \cos \Omega_{0}+1}+\frac{\pi}{2 j} \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-2 \pi k-\Omega_{0}\right)-\delta\left(\Omega-2 \pi k+\Omega_{0}\right)\right]$ |
| 11 | $\frac{B}{\pi} \operatorname{sinc}(B n), 0<B<\pi$ | $\sum_{k=-\infty}^{\infty} \operatorname{rect}\left(\frac{\Omega-2 \pi k}{2 B}\right)$ |
| 12 | $u(n)-u(n-M)$ | $e^{-j \Omega(M-1) / 2}\left(\frac{\sin (M \Omega / 2)}{\sin (\Omega / 2)}\right)$ |
| 13 | $n a^{n} u(n),|a|<1$ | $\frac{a e^{j \Omega}}{\left(e^{j \Omega}-a\right)^{2}}$ |

---

**例 11.23** 使用傅里叶变换对表及傅里叶变换性质，求序列
$$
x(n)=n\left(\frac{1}{2}\right)^{|n+3|}
$$

的傅里叶变换 $X$。

**解：** 我们将 $x$ 重写为

$$
x(n)=n v_{2}(n)
$$

其中

$$
\begin{gathered}
v_{2}(n)=v_{1}(n+3), \\
v_{1}(n)=\left(\frac{1}{2}\right)^{|n|}
\end{gathered}
$$

设 $V_{1}$ 和 $V_{2}$ 分别为 $v_{1}$ 和 $v_{2}$ 的傅里叶变换。利用表 11.2，可得

$$
\begin{aligned}
V_{1}(\Omega) & =\frac{1-\left(\frac{1}{2}\right)^{2}}{1-2\left(\frac{1}{2}\right) \cos \Omega+\left(\frac{1}{2}\right)^{2}} \\
& =\frac{3}{5-4 \cos \Omega} \\
& =3(5-4 \cos \Omega)^{-1}
\end{aligned}
$$

由位移性质得

$$
V_{2}(\Omega)=e^{j 3 \Omega} V_{1}(\Omega)
$$

由累加性质得

$$
X(\Omega)=j V_{2}^{\prime}(\Omega)
$$

求导 $V_{1}$ 得

$$
\begin{aligned} V_1^{\prime}(\Omega) & =\frac{d}{d \Omega}\left[3(5-4 \cos \Omega)^{-1}\right] \\ & =-3(5-4 \cos \Omega)^{-2}(4 \sin \Omega) \\ & =\frac{-12 \sin \Omega}{(5-4 \cos \Omega)^2}\end{aligned}
$$

求导 $V_{2}$ 得

$$
V_{2}^{\prime}(\Omega)=3 j e^{j 3 \Omega} V_{1}(\Omega)+e^{j 3 \Omega} V_{1}^{\prime}(\Omega)
$$

代入 $X(\Omega)=j V_{2}^{\prime}(\Omega)$，得到

$$
\begin{aligned} X(\Omega) & =j V_2^{\prime}(\Omega) \\ & =j\left[3 j e^{j 3 \Omega} V_1(\Omega)+e^{j 3 \Omega} V_1^{\prime}(\Omega)\right] \\ & =-3 e^{j 3 \Omega} V_1(\Omega)+j e^{j 3 \Omega} V_1^{\prime}(\Omega) \\ & =-3 e^{j 3 \Omega} \frac{3}{5-4 \cos \Omega}+j e^{j 3 \Omega} \frac{-12 \sin \Omega}{(5-4 \cos \Omega)^2} \\ & =e^{j 3 \Omega}\left[\frac{-9}{5-4 \cos \Omega}+\frac{-12 j \sin \Omega}{(5-4 \cos \Omega)^2}\right] \\ & =e^{j 3 \Omega}\left[\frac{-9(5-4 \cos \Omega)-12 j \sin \Omega}{(5-4 \cos \Omega)^2}\right] \\ & =e^{j 3 \Omega}\left[\frac{36 \cos \Omega-12 j \sin \Omega-45}{(5-4 \cos \Omega)^2}\right] \\ & =3 e^{j 3 \Omega}\left[\frac{12 \cos \Omega-4 j \sin \Omega-15}{(5-4 \cos \Omega)^2}\right]\end{aligned}
$$

---
例11.24

利用傅里叶变换对表及傅里叶变换的性质，求序列的傅里叶变换 $X$，其中 $a$ 是满足 $|a|<1$ 的复常数。
$$
x(n)=(n+1) a^{n} u(n)
$$


**解**  
设 $v(n)=a^{n} u(n)$。我们将 $x$ 重写为
$$
\begin{aligned}
x(n) & =(n+1) a^{n} u(n) \\
& =n a^{n} u(n)+a^{n} u(n) \\
& =n v(n)+v(n)
\end{aligned}
$$
设 $V$ 为 $v$ 的傅里叶变换。对 $v$ 取傅里叶变换，得到
$$
\begin{aligned}
V(\Omega) & =\frac{e^{j \Omega}}{e^{j \Omega}-a} \\
& =e^{j \Omega}\left(e^{j \Omega}-a\right)^{-1}
\end{aligned}
$$
对 $x$ 取傅里叶变换，得到
$$
X(\Omega)=j V^{\prime}(\Omega)+V(\Omega)
$$
对 $V$ 求导，得到
$$
\begin{aligned}
V^{\prime}(\Omega) & =j e^{j \Omega}\left(e^{j \Omega}-a\right)^{-1}+(-1)\left(e^{j \Omega}-a\right)^{-2}\left(j e^{j \Omega}\right) e^{j \Omega} \\
& =\frac{j e^{j \Omega}}{e^{j \Omega}-a}-\frac{j e^{j 2 \Omega}}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{j e^{j \Omega}\left(e^{j \Omega}-a\right)-j e^{j 2 \Omega}}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{j e^{j 2 \Omega}-a j e^{j \Omega}-j e^{j 2 \Omega}}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{-j a e^{j \Omega}}{\left(e^{j \Omega}-a\right)^{2}}
\end{aligned}
$$
将上述 $V^{\prime}$ 和 $V$ 的表达式代入 $X(\Omega)$，得到
$$
\begin{aligned}
X(\Omega) & =j\left[\frac{-j a e^{j \Omega}}{\left(e^{j \Omega}-a\right)^{2}}\right]+\frac{e^{j \Omega}}{e^{j \Omega}-a} \\
& =\frac{a e^{j \Omega}}{\left(e^{j \Omega}-a\right)^{2}}+\frac{e^{j \Omega}}{e^{j \Omega}-a} \\
& =\frac{a e^{j \Omega}+e^{j \Omega}\left(e^{j \Omega}-a\right)}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{a e^{j \Omega}+e^{j 2 \Omega}-a e^{j \Omega}}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{e^{j 2 \Omega}}{\left(e^{j \Omega}-a\right)^{2}} \\
& =\frac{e^{j 2 \Omega}}{\left[e^{j \Omega}\left(1-a e^{-j \Omega}\right)\right]^{2}} \\
& =\frac{e^{j 2 \Omega}}{e^{j 2 \Omega}\left(1-a e^{-j \Omega}\right)^{2}} \\
& =\frac{1}{\left(1-a e^{-j \Omega}\right)^{2}}
\end{aligned}
$$

例 11.25. 考虑图 11.5 所示的 $N$ 周期序列 $x$，其中 $N=7$。求 $x$ 的傅里叶变换 $X$。

**解：** 在下面的推导中，我们将使用撇号表示导数。首先，注意到 $x$ 可表示为
$$
x(n)=\sum_{k=-\infty}^{\infty} y(n-7 k)
$$
其中
$$
y(n)=n[u(n+3)-u(n-4)] .
$$
现在我们将 $y$ 重写为
$$
y(n)=n v_{2}(n)
$$
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-152.jpg?height=404&width=765&top_left_y=302&top_left_x=605)  
图 11.5：7 周期序列 $x$。

其中
$$
\begin{aligned}
& v_{2}(n)=v_{1}(n+3) \quad \text{并且} \\
& v_{1}(n)=u(n)-u(n-7)
\end{aligned}
$$
令 $Y, V_{1}, V_{2}$ 分别为 $y, v_{1}, v_{2}$ 的傅里叶变换。利用表 11.2，对 $v_{1}$ 的表达式取傅里叶变换，有
$$
\begin{aligned}
V_{1}(\Omega) & =e^{-j \Omega(7-1) / 2}\left(\frac{\sin \left(\frac{7}{2} \Omega\right)}{\sin \left(\frac{1}{2} \Omega\right)}\right) \\
& =e^{-j 3 \Omega}\left(\frac{\sin \left(\frac{7}{2} \Omega\right)}{\sin \left(\frac{1}{2} \Omega\right)}\right)
\end{aligned}
$$
再利用傅里叶变换的平移性质对 $v_{2}$ 取傅里叶变换，有
$$
\begin{aligned}
V_{2}(\Omega) & =e^{j 3 \Omega} V_{1}(\Omega) \\
& =\frac{\sin \left(\frac{7}{2} \Omega\right)}{\sin \left(\frac{1}{2} \Omega\right)}
\end{aligned}
$$
现在我们计算 $V_{2}$ 的导数，得到
$$
\begin{aligned}
V_{2}^{\prime}(\Omega) & =\frac{\left[\sin \left(\frac{1}{2} \Omega\right)\right]\left[\frac{7}{2} \cos \left(\frac{7}{2} \Omega\right)\right]-\left[\sin \left(\frac{7}{2} \Omega\right)\right]\left[\frac{1}{2} \cos \left(\frac{1}{2} \Omega\right)\right]}{\sin ^{2}\left(\frac{1}{2} \Omega\right)} \\
& =\frac{\frac{7}{2} \cos \left(\frac{7}{2} \Omega\right) \sin \left(\frac{1}{2} \Omega\right)-\frac{1}{2} \cos \left(\frac{1}{2} \Omega\right) \sin \left(\frac{7}{2} \Omega\right)}{\sin ^{2}\left(\frac{1}{2} \Omega\right)}
\end{aligned}
$$
利用傅里叶变换的频域微分性质，对 $y$ 的表达式取傅里叶变换，有
$$
\begin{aligned}
Y(\Omega) & =j V_{2}^{\prime}(\Omega) \\
& =\frac{\frac{7 j}{2} \cos \left(\frac{7}{2} \Omega\right) \sin \left(\frac{1}{2} \Omega\right)-\frac{j}{2} \cos \left(\frac{1}{2} \Omega\right) \sin \left(\frac{7}{2} \Omega\right)}{\sin ^{2}\left(\frac{1}{2} \Omega\right)}
\end{aligned}
$$
由定理 11.19 可知
$$
X(\Omega)=2 \pi \sum_{k=-\infty}^{\infty} a_{k} \delta\left(\Omega-\frac{2 \pi}{7} k\right)
$$
其中
$$
a_{k}=\frac{1}{7} Y\left(\frac{2 \pi}{7} k\right)
$$
计算 $a_{k}$，得
$$
\begin{aligned}
a_{k} & =\frac{1}{7} Y\left(\frac{2 \pi}{7} k\right) \\
& =\frac{1}{7}\left[\frac{\frac{7 j}{2} \cos \left[\frac{7}{2}\left(\frac{2 \pi}{7}\right) k\right] \sin \left[\frac{1}{2}\left(\frac{2 \pi}{7}\right) k\right]-\frac{j}{2} \cos \left[\frac{1}{2}\left(\frac{2 \pi}{7}\right) k\right] \sin \left[\frac{7}{2}\left(\frac{2 \pi}{7}\right) k\right]}{\sin ^{2}\left[\frac{1}{2}\left(\frac{2 \pi}{7}\right) k\right]}\right] \\
& =\frac{1}{7}\left[\frac{\frac{7 j}{2} \cos (\pi k) \sin \left(\frac{\pi}{7} k\right)-\frac{j}{2} \cos \left(\frac{\pi}{7} k\right) \sin (\pi k)}{\sin ^{2}\left(\frac{\pi}{7} k\right)}\right] \\ 
& =\frac{\frac{j}{2} \cos (\pi k) \sin \left(\frac{\pi}{7} k\right)-\frac{j}{14} \cos \left(\frac{\pi}{7} k\right) \sin (\pi k)}{\sin ^{2}\left(\frac{\pi}{7} k\right)}
\end{aligned}
$$
若 $\frac{k}{7} \notin \mathbb{Z}$，则
$$
\begin{aligned}
a_{k} & =\frac{\frac{j}{2} \cos (\pi k) \sin \left(\frac{\pi}{7} k\right)}{\sin ^{2}\left(\frac{\pi}{7} k\right)} \\
& =\frac{j(-1)^{k} \sin \left(\frac{\pi}{7} k\right)}{2 \sin ^{2}\left(\frac{\pi}{7} k\right)} \\
& =\frac{j(-1)^{k}}{2 \sin \left(\frac{\pi}{7} k\right)}
\end{aligned}
$$
（在上述化简中，我们利用了 $\sin (\pi k)=0$ 且 $\cos (\pi k)=(-1)^{k}$ 对任意 $k \in \mathbb{Z}$ 都成立的事实。）  
否则（即若 $\frac{k}{7} \in \mathbb{Z}$），则
$$
\begin{aligned}
a_{k} & =a_{0} \\
& =\frac{1}{7} Y(0) \\
& =\frac{1}{7} \sum_{n=-\infty}^{\infty} y(n) \\
& =0
\end{aligned}
$$
因此我们得到
$$
X(\Omega)=2 \pi \sum_{k=-\infty}^{\infty} a_{k} \delta\left(\Omega-\frac{2 \pi}{7} k\right)
$$
其中
$$
a_{k}= \begin{cases}\dfrac{j(-1)^{k}}{2 \sin \left(\tfrac{\pi}{7} k\right)} & \dfrac{k}{7} \notin \mathbb{Z} \\[6pt] 0 & \dfrac{k}{7} \in \mathbb{Z}\end{cases}
$$

例 11.26. 设 $x$ 和 $y$ 为两个序列，它们满足关系：
$$
y(n)=\sum_{k=-\infty}^{n} e^{-j 3 k} x(-k)
$$
求 $y$ 的傅里叶变换 $Y$，并用 $x$ 的傅里叶变换 $X$ 表示。

**解答**：从已知的 $y$ 表达式出发：
$$
y(n)=\sum_{k=-\infty}^{n} e^{-j 3 k} x(-k)
$$

令 $v_{1}(k)=x(-k)$，则可将 $y$ 表达式改写为：
$$
y(n)=\sum_{k=-\infty}^{n} e^{-j 3 k} v_{1}(k)
$$

再令 $v_{2}(k)=e^{-j 3 k} v_{1}(k)$，可得到：
$$
y(n)=\sum_{k=-\infty}^{n} v_{2}(k)
$$

对 $v_{1}, v_{2}$ 和 $y$ 分别求傅里叶变换，得到：
$$
\begin{aligned}
v_{1}(n)=x(-n) & \Leftrightarrow \quad V_{1}(\Omega)=X(-\Omega), \\
v_{2}(n)=e^{-j 3 n} v_{1}(n) & \Leftrightarrow \quad V_{2}(\Omega)=V_{1}(\Omega+3), \\
y(n)=\sum_{k=-\infty}^{n} v_{2}(k) & \Leftrightarrow \quad Y(\Omega)=\frac{e^{j \Omega}}{e^{j \Omega}-1} V_{2}(\Omega)+\pi V_{2}(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) .
\end{aligned}
$$

将 $V_{2}$ 和 $V_{1}$ 代入 $Y(\Omega)$：
$$
\begin{aligned}
Y(\Omega) & =\frac{e^{j \Omega}}{e^{j \Omega}-1} V_{2}(\Omega)+\pi V_{2}(0) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1} V_{1}(\Omega+3)+\pi V_{1}(3) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k) \\
& =\frac{e^{j \Omega}}{e^{j \Omega}-1} X(-\Omega-3)+\pi X(-3) \sum_{k=-\infty}^{\infty} \delta(\Omega-2 \pi k)
\end{aligned}
$$


例 11.27. 设 $x$ 和 $y$ 为两个序列，它们满足关系  
$$
y(n)=x(n) \cos \left(\Omega_{0} n\right)
$$
其中 $\Omega_{0}$ 是非零实常数。设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的傅里叶变换。求 $Y$ 关于 $X$ 的表达式。

解答。实质上，我们需要对给定方程的两边进行傅里叶变换。有两种不同的方法可以实现：一种是利用傅里叶变换的乘法性质，另一种是利用调制性质。我们将依次使用这两种方法解题，以说明两种方法所需的工作量并不相同。这个例子的启示是：当一个问题有多种解法时，应始终选择更简单的方法，这样可以节省时间并降低出错的可能性。

**第一种解法（使用较繁琐的方法）**。我们使用基于傅里叶变换乘法性质的方法。对给定方程两边取傅里叶变换，可得  
$$
Y(\Omega)=\mathcal{F}\left\{x(n) \cos \left(\Omega_{0} n\right)\right\}(\Omega)
$$
根据傅里叶变换的乘法性质，有  
$$
Y(\Omega)=\frac{1}{2 \pi}\left(X * \mathcal{F}\left\{\cos \left(\Omega_{0} n\right)\right\}\right)(\Omega) .
$$
利用表 11.2 得到 $\mathcal{F}\left\{\cos \left(\Omega_{0} n\right)\right\}$，得到  
$$
\begin{align*}
Y(\Omega) & =\frac{1}{2 \pi}\left\{X *\left(\pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\cdot-\Omega_{0}-2 \pi k\right)+\delta\left(\cdot+\Omega_{0}-2 \pi k\right)\right]\right)\right\}(\Omega)  \\\
& =\frac{1}{2 \pi} \int_{2 \pi} X(\theta)\left[\pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-\theta-\Omega_{0}-2 \pi k\right)+\delta\left(\Omega-\theta+\Omega_{0}-2 \pi k\right)\right]\right] d \theta \\
& =\frac{1}{2 \pi} \int_{-\pi}^{\pi^{-}} X(\theta)\left[\pi \sum_{k=-\infty}^{\infty}\left[\delta\left(\Omega-\theta-\Omega_{0}-2 \pi k\right)+\delta\left(\Omega-\theta+\Omega_{0}-2 \pi k\right)\right]\right] d \theta
\end{align*}
$$
由于 delta 函数是偶函数，可将上述方程重写为  
$$
\begin{aligned}
Y(\Omega) & =\frac{1}{2} \int_{-\pi}^{\pi^{-}} X(\theta) \sum_{k=-\infty}^{\infty}\left[\delta\left(-\Omega+\theta+\Omega_{0}+2 \pi k\right)+\delta\left(-\Omega+\theta-\Omega_{0}+2 \pi k\right)\right] d \theta \\
& =\frac{1}{2} \int_{-\pi}^{\pi^{-}} X(\theta) \sum_{k=-\infty}^{\infty}\left[\delta\left(\theta-\left[\Omega-\Omega_{0}-2 \pi k\right]\right)+\delta\left(\theta-\left[\Omega+\Omega_{0}-2 \pi k\right]\right)\right] d \theta \\
& =\frac{1}{2}\left[\int_{-\pi}^{\pi^{-}} X(\theta) \sum_{k=-\infty}^{\infty} \delta\left[\theta-\left(\Omega-\Omega_{0}-2 \pi k\right)\right] d \theta+\int_{-\pi}^{\pi^{-}} X(\theta) \sum_{\ell=-\infty}^{\infty} \delta\left[\theta-\left(\Omega+\Omega_{0}-2 \pi \ell\right)\right] d \theta\right]
\end{aligned}
$$
在上述两个积分中，左侧积分的求和在区间 $[-\pi, \pi)$ 内仅有一项非零，记为 $k=k^{\prime}$；右侧积分的求和在同一区间仅有一项非零，记为 $\ell=\ell^{\prime}$。因此可以将 $Y$ 表示为  
$$
Y(\Omega)=\frac{1}{2}\left[\int_{-\pi}^{\pi} X(\theta) \delta\left[\theta-(\Omega-\Omega_{0}-2 \pi k^{\prime})\right] d \theta + \int_{-\pi}^{\pi} X(\theta) \delta\left[\theta-(\Omega+\Omega_{0}-2 \pi \ell^{\prime})\right] d \theta\right]
$$
利用 delta 函数的抽取性质，得到  
$$
Y(\Omega)=\frac{1}{2}\left[X(\Omega-\Omega_{0}-2 \pi k^{\prime})+X(\Omega+\Omega_{0}-2 \pi \ell^{\prime})\right]
$$
由于 $X$ 是 $2 \pi$ 周期的，可以写为  
$$
Y(\Omega) = \frac{1}{2}\left[X(\Omega-\Omega_{0})+X(\Omega+\Omega_{0})\right] = \frac{1}{2} X(\Omega-\Omega_{0}) + \frac{1}{2} X(\Omega+\Omega_{0})
$$
尽管该方法可以得到正确结果，但步骤繁琐。幸运的是，还有更简洁的方法。

**第二种解法（使用更简明的方法）**。我们使用基于傅里叶变换调制性质的方法。对给定方程两边取傅里叶变换，得到  
$$
Y(\Omega)=\mathcal{F}\left\{x(n) \cos \left(\Omega_{0} n\right)\right\}(\Omega)
$$
将 $\cos(\Omega_0 n)$ 表示为复指数形式，得到  
$$
\begin{aligned}
Y(\Omega) & = \mathcal{F}\left\{\frac{1}{2}\left(e^{j \Omega_{0} n}+e^{-j \Omega_{0} n}\right) x(n)\right\}(\Omega) \\
& = \mathcal{F}\left\{\frac{1}{2} e^{j \Omega_{0} n} x(n) + \frac{1}{2} e^{-j \Omega_{0} n} x(n)\right\}(\Omega)
\end{aligned}
$$
利用傅里叶变换的线性性质，得到  
$$
Y(\Omega)=\frac{1}{2} \mathcal{F}\left\{e^{j \Omega_{0} n} x(n)\right\}(\Omega) + \frac{1}{2} \mathcal{F}\left\{e^{-j \Omega_{0} n} x(n)\right\}(\Omega)
$$
利用傅里叶变换的调制性质，得到  
$$
Y(\Omega)=\frac{1}{2} X(\Omega-\Omega_{0}) + \frac{1}{2} X(\Omega+\Omega_{0}) .
$$

**评论。** 显然，上述两种方法中，第二种方法更简单，也更不易出错。通常应尽量避免使用傅里叶变换的乘法性质，因为它会引入卷积，使解题过程复杂。
## 11.10 序列的频谱

傅里叶变换表示将一个序列用各个频率的复正弦表示出来。从这个意义上讲，傅里叶变换表示能够捕捉序列的频率内容信息。例如，假设我们有一个序列 $x$，其傅里叶变换为 $X$。如果 $X$ 在某个频率 $\Omega_{0}$ 处不为零，则说明序列 $x$ 在频率 $\Omega_{0}$ 上包含信息。另一方面，如果 $X$ 在频率 $\Omega_{0}$ 处为零，则序列 $x$ 在该频率上没有信息。通过这种方式，傅里叶变换表示提供了一种衡量序列频率内容的方法。序列在不同频率上信息的这种分布称为序列的**频谱**。也就是说，$X$ 就是 $x$ 的频谱。

为了进一步理解傅里叶变换 $X$ 在序列 $x$ 的频谱中的作用，有必要将 $x$ 的傅里叶变换表示写成极坐标形式，如下所示：  
$$
\begin{aligned}
x(n) & =\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j \Omega n} d \Omega \\ 
& =\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)| e^{j \arg X(\Omega)} e^{j \Omega n} d \Omega \\ 
& =\frac{1}{2 \pi} \int_{2 \pi}|X(\Omega)| e^{j[\Omega n+\arg X(\Omega)]} d \Omega
\end{aligned}
$$
实际上，量 $|X(\Omega)|$ 是一个权重，它决定了频率为 $\Omega$ 的复正弦对积分结果 $x(n)$ 的贡献大小。或许，如果我们将上述积分表示为一个和式的极限，更容易理解这一点。该和式是通过使用矩形面积近似积分得到的（即 $\int_{-\infty}^{\infty} f(x) dx = \lim_{\Delta x \to 0} \sum_{k=-\infty}^{\infty} \Delta x f(k \Delta x)$）。将 $x$ 以这种形式表示，可得  
$$
\begin{aligned}
x(n) & =\lim _{\Delta \Omega \rightarrow 0} \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty} \Delta \Omega |X(k \Delta \Omega)| e^{j[k \Delta \Omega n + \arg X(k \Delta \Omega)]} \\ 
& =\lim _{\Delta \Omega \rightarrow 0} \frac{1}{2 \pi} \sum_{k=-\infty}^{\infty} \Delta \Omega \left|X\left(\Omega^{\prime}\right)\right| e^{j\left[\Omega^{\prime} n + \arg X\left(\Omega^{\prime}\right)\right]}
\end{aligned}
$$
其中 $\Omega^{\prime} = k \Delta \Omega$。从上述方程的最后一行可以看出，求和中的第 $k$ 项（对应频率 $\Omega^{\prime} = k \Delta \Omega$）对应于一个频率为 $\Omega^{\prime}$ 的复正弦，其幅度被缩放为 $\left|X\left(\Omega^{\prime}\right)\right|$，时间上被平移了 $\arg X\left(\Omega^{\prime}\right)$ 所决定的量。对于给定的 $\Omega^{\prime} = k \Delta \Omega$（对应求和中的第 $k$ 项），$\left|X\left(\Omega^{\prime}\right)\right|$ 越大，其对应的复正弦 $e^{j \Omega^{\prime} n}$ 的幅度就越大，因此该项对整体求和的贡献也越大。通过这种方式，我们可以使用 $\left|X\left(\Omega^{\prime}\right)\right|$ 来衡量序列 $x$ 在频率 $\Omega^{\prime}$ 上包含信息的多少。

为了形式化频谱的概念，序列 $x$ 的频谱由其傅里叶变换 $X$ 给出。基于上述傅里叶变换极坐标形式的解释，我们通常关注 $|X(\cdot)|$ 和 $\arg X(\cdot)$。在术语上，我们称 $|X(\cdot)|$ 为 $x$ 的**幅度谱**，称 $\arg X(\cdot)$ 为 $x$ 的**相位谱**。

由于图形化展示信息有助于可视化，我们通常希望绘制序列的频谱。由于三维图通常比二维图更难生成（尤其是手工绘制）并且更难准确理解，我们通常仅使用二维图形展示频谱。如果频谱是纯实或纯虚的，我们通常直接在一对坐标轴上绘制频谱。然而，大多数情况下，频谱是复数的（既非纯实也非纯虚），此时我们使用极坐标形式绘制频谱，包括两个图：一个显示幅度谱，一个显示相位谱。

注意，由于傅里叶变换 $X$ 是实变量的函数，序列 $x$ 在最一般的情况下可以在任意实频率上包含信息。这不同于傅里叶级数的频谱情况（仅处理周期序列），在傅里叶级数中，序列只能在某些特定频率上有信息（即基频的整数倍）。然而，这里并不存在矛盾。如第 11.8 节所示，对于周期序列，傅里叶变换在除基频整数倍外的其他频率上也将为零。

回忆定理 11.18，对于实值序列 $x$，其傅里叶变换 $X$ 是共轭对称的（即对所有 $\Omega \in \mathbb{R}$，$X(\Omega)=X^{*}(-\Omega)$）。这意味着  
$$
\begin{aligned}
& |X(\Omega)|=|X(-\Omega)| \quad \text { 对所有 } \Omega \in \mathbb{R} \quad \text{成立，且 } \\
& \arg X(\Omega)=-\arg X(-\Omega) \quad \text { 对所有 } \Omega \in \mathbb{R} \text{成立}
\end{aligned}
$$
（即 $X$ 的幅度为偶函数，幅角为奇函数。）（见 (11.11a) 和 (11.11b)）由于实值序列频谱的对称性，处理此类序列时通常忽略负频率。而对于复值但非实值的序列，频谱不具有上述对称性，因此负频率也变得重要。

例 11.28. 求并绘制序列  
$$
x(n)=u(n)-u(n-16)
$$
的频谱。  
解答。根据表 11.2，序列 $x$ 的傅里叶变换为  
$$
X(\Omega)=e^{-j(15 / 2) \Omega}\left[\frac{\sin (8 \Omega)}{\sin \left(\frac{1}{2} \Omega\right)}\right], \quad \Omega \in(-\pi, \pi]
$$
在此情况下，$X$ 既非纯实也非纯虚，因此我们将使用极坐标形式绘制频谱 $X$，包括两个图：一个为幅度谱，一个为相位谱。取 $X$ 的幅度，得到  
$$
|X(\Omega)|=\left|\frac{\sin (8 \Omega)}{\sin \left(\frac{1}{2} \Omega\right)}\right|
$$
取 $X$ 的幅角，得到  
$$
\arg [X(\Omega)]=-\frac{15}{2} \Omega+\arg \left[\frac{\sin (8 \Omega)}{\sin \left(\frac{1}{2} \Omega\right)}\right]
$$
幅度谱和相位谱分别如图 11.6(a) 和 (b) 所示。

例 11.29. 求并绘制序列  
$$
x(n)=\left(\frac{1}{2}\right)^{|n|}
$$
的频谱。  
解答。根据表 11.2，序列 $x$ 的傅里叶变换为  
$$
X(\Omega)=\frac{3}{5-4 \cos \Omega}, \quad \Omega \in(-\pi, \pi]
$$
在此情况下，$X$ 为实数，因此可以在单个图上绘制频谱 $X$，如图 11.7 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-158.jpg?height=885&width=1114&top_left_y=464&top_left_x=434)  
图 11.6: 序列 $x$ 的频谱 $X$。 (a) 幅度谱，(b) 相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-158.jpg?height=392&width=1092&top_left_y=1784&top_left_x=582)  
图 11.7: 序列 $x$ 的频谱 $X$。

例 11.30. 序列  
$$
x(n)=\left(\frac{1}{2}\right)^{n} u(n)
$$
的傅里叶变换为  
$$
X(\Omega)=\frac{e^{j \Omega}}{e^{j \Omega}-\frac{1}{2}}
$$

(a) 求并绘制 $x$ 的幅度谱和相位谱。  
(b) 确定序列 $x$ 在区间 $(-\pi, \pi]$ 内在哪个频率（或哪些频率）包含最多信息。

解答。  

**(a) 幅度谱与相位谱**  

首先，求幅度谱 $|X(\Omega)|$。由 $X(\Omega)$ 的表达式，有  
$$
\begin{aligned}
|X(\Omega)| & =\left|\frac{e^{j \Omega}}{e^{j \Omega}-\frac{1}{2}}\right| \\
& =\frac{1}{\left|e^{j \Omega}-\frac{1}{2}\right|} \\
& =\frac{1}{\left|\cos (\Omega)+j \sin (\Omega)-\frac{1}{2}\right|} \\
& =\frac{1}{\sqrt{(\cos (\Omega)-\frac{1}{2})^2 + (\sin \Omega)^2}} \\
& =\frac{1}{\sqrt{\cos^2(\Omega)-\cos \Omega + \frac{1}{4} + \sin^2 \Omega}} \\
& =\frac{1}{\sqrt{\frac{5}{4}-\cos \Omega}}
\end{aligned}
$$

接着，求相位谱 $\arg [X(\Omega)]$。由 $X(\Omega)$ 的表达式，有  
$$
\begin{aligned}
\arg [X(\Omega)] & =\arg \left[\frac{e^{j \Omega}}{e^{j \Omega}-\frac{1}{2}}\right] \\
& =\arg \left[\frac{1}{1-\frac{1}{2} e^{-j \Omega}}\right] \\
& =\arg 1 - \arg \left(1-\frac{1}{2} e^{-j \Omega}\right) \\
& =-\arg \left(1-\frac{1}{2} e^{-j \Omega}\right) \\
& =-\arg \left[1-\frac{1}{2}(\cos(-\Omega)+j \sin(-\Omega))\right] \\
& =-\arg \left([1-\frac{1}{2} \cos \Omega] + j[\frac{1}{2} \sin \Omega]\right) \\
& =-\arg ([2-\cos(\Omega)] + j[\sin(\Omega)]) \\
& =-\arctan \left[\frac{\sin(\Omega)}{2-\cos(\Omega)}\right]
\end{aligned}
$$

最后，通过数值计算，可以绘制 $|X(\Omega)|$ 和 $\arg X(\Omega)$ 的图形，结果如图 11.8(a) 和 (b) 所示。

**(b) 最大信息频率**  

对于 $\Omega \in (-\pi, \pi]$，$|X(\Omega)|$ 在 $\Omega=0$ 处达到最大。因此，序列 $x$ 在频率 0 处包含最多信息。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-160.jpg?height=884&width=1109&top_left_y=289&top_left_x=437)  
图 11.8: 序列 $x$ 的频谱 $X$。 (a) 幅度谱，(b) 相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-160.jpg?height=364&width=770&top_left_y=1316&top_left_x=603)  
图 11.9: 一个序列 $x$ 的傅里叶变换 $X$ 示例，其带限于 $[-B, B]$ 频率区间。
## 11.11 序列的带宽

序列的频谱非零的频率范围通常是关注的重点。这类似于第 6.11 节中连续时间信号（即函数）所引入的带宽概念。由于离散时间信号（即序列）的频谱总是 $2 \pi$ 周期的，当我们讨论序列的带宽时，只考虑长度为 $2 \pi$ 的一个区间内的频谱。具体来说，我们通常考虑以原点为中心的区间（长度为 $2 \pi$），例如 $(-\pi, \pi]$。

当序列 $x$ 的傅里叶变换 $X$ 在 $(-\pi, \pi]$ 中的所有频率 $\Omega$ 上都为零，除了某个区间 $I$ 时，我们称 $x$ 的频率带限于 $I$。此外，我们将序列 $x$ 的带宽定义为 $(-\pi, \pi]$ 区间内 $X$ 非零部分的长度。例如，图 11.9 所示傅里叶变换 $X$ 的序列 $x$ 的频率带限于 $[-B, B]$，其带宽为 $B - (-B) = 2B$。有时在处理实序列时，会忽略负频率。由于本例中 $x$ 为实序列（因为 $X$ 是共轭对称的），我们可以选择忽略负频率，这样 $x$ 的带宽就被认为是 $[0, B]$ 区间，其带宽为 $B - 0 = B$。
## 11.12 能量密度谱

假设我们有一个有限能量为 $E$ 的序列 $x$，其傅里叶变换为 $X$。根据定义，序列 $x$ 的能量为  
$$
E = \sum_{n=-\infty}^{\infty} |x(n)|^2
$$
利用 Parseval 关系 (6.12)，可以将 $E$ 用 $X$ 表示为  
$$
E = \frac{1}{2 \pi} \int_{2 \pi} |X(\Omega)|^2 d\Omega
$$
因此，能量 $E$ 可表示为  
$$
E = \frac{1}{2 \pi} \int_{-\infty}^{\infty} E_x(\Omega) d\Omega
$$
其中  
$$
E_x(\Omega) = |X(\Omega)|^2
$$
我们称 $E_x$ 为序列 $x$ 的**能量密度谱**。函数 $E_x$ 表示序列 $x$ 的能量如何随频率分布。例如，频率范围 $[\Omega_1, \Omega_2]$ 内的能量为  
$$
\frac{1}{2 \pi} \int_{\Omega_1}^{\Omega_2} E_x(\Omega) d\Omega
$$

例 11.31. 考虑序列  
$$
x(n) = \operatorname{sinc}\left(\frac{\pi}{4} n\right)
$$
计算 $x$ 的能量密度谱 $E_x$。确定频率范围 $\left[-\frac{\pi}{8}, \frac{\pi}{8}\right]$ 内序列 $x$ 的能量，以及序列 $x$ 的总能量。

解答。  

首先，计算 $x$ 的傅里叶变换 $X$，得到  
$$
X(\Omega) = 4 \operatorname{rect}\left(\frac{2}{\pi} \Omega\right)
$$
计算能量密度谱 $E_x$，有  
$$
\begin{aligned}
E_x(\Omega) & = |X(\Omega)|^2 \\
& = \left| 4 \operatorname{rect}\left(\frac{2}{\pi} \Omega\right) \right|^2 \\
& = 16 \operatorname{rect}^2\left(\frac{2}{\pi} \Omega\right) \\
& = 16 \operatorname{rect}\left(\frac{2}{\pi} \Omega\right)
\end{aligned}
$$

设 $E_1$ 为频率 $\Omega \in \left[-\frac{\pi}{8}, \frac{\pi}{8}\right]$ 内的能量，则有  
$$
\begin{aligned}
E_1 & = \frac{1}{2 \pi} \int_{-\pi/8}^{\pi/8} E_x(\Omega) d\Omega \\
& = \frac{1}{2 \pi} \int_{-\pi/8}^{\pi/8} 16 \operatorname{rect}\left(\frac{2}{\pi} \Omega\right) d\Omega \\
& = \frac{8}{\pi} \int_{-\pi/8}^{\pi/8} \operatorname{rect}\left(\frac{2}{\pi} \Omega\right) d\Omega \\
& = \frac{8}{\pi} \int_{-\pi/8}^{\pi/8} 1 \, d\Omega \\
& = \frac{8}{\pi} \left( \frac{\pi}{8} + \frac{\pi}{8} \right) \\
& = \frac{8}{\pi} \cdot \frac{\pi}{4} \\
& = 2
\end{aligned}
$$

设 $E$ 为序列 $x$ 的总能量，则有  
$$
\begin{aligned}
E & = \frac{1}{2 \pi} \int_{-\pi}^{\pi} E_x(\Omega) d\Omega \\
& = \frac{1}{2 \pi} \int_{-\pi}^{\pi} 16 \operatorname{rect}\left(\frac{2}{\pi} \Omega\right) d\Omega \\
& = \frac{8}{\pi} \int_{-\pi}^{\pi} \operatorname{rect}\left(\frac{2}{\pi} \Omega\right) d\Omega \\
& = \frac{8}{\pi} \int_{-\pi/4}^{\pi/4} 1 \, d\Omega \\
& = \frac{8}{\pi} \cdot \frac{\pi}{2} \\
& = 4
\end{aligned}
$$
## 11.13 使用傅里叶变换表征 LTI 系统

考虑一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的线性时不变（LTI）系统，如图 11.10 所示。该系统的行为由下式描述：  
$$
y(n) = x * h(n) \tag{11.16}
$$

设 $X, Y$ 和 $H$ 分别为 $x, y$ 和 $h$ 的傅里叶变换。对 (11.16) 两边取傅里叶变换，并利用傅里叶变换的卷积性质，我们得到  
$$
Y(\Omega) = X(\Omega) H(\Omega) \tag{11.17}
$$

这一结果提供了观察 LTI 系统行为的另一种方式。也就是说，我们可以将系统视为在频域中作用于输入和输出序列的傅里叶变换。换句话说，该系统在频域中的行为类似于图 11.11 所示。在此情况下，时间域中的卷积操作被频域中的乘法操作取代。输出的频谱（即傅里叶变换）等于输入的频谱与冲激响应的频谱的乘积。从术语上讲，我们称 $H$ 为系统的**频率响应**。系统的行为完全由频率响应 $H$ 描述。如果我们知道输入，可以计算其傅里叶变换 $X$，然后得到输出的傅里叶变换 $Y$。利用逆傅里叶变换，可以进一步确定输出 $y$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-163.jpg?height=88&width=339&top_left_y=307&top_left_x=950)  
图 11.10: 输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统的时域视图。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-163.jpg?height=98&width=347&top_left_y=510&top_left_x=945)  
图 11.11: 输入频谱 $X$、输出频谱 $Y$、频率响应 $H$ 的 LTI 系统频域视图。

在最一般的情况下，频率响应 $H$ 是复值函数。因此，我们可以用幅度和幅角表示 $H$。我们称 $H$ 的幅度为系统的**幅度响应**，称 $H$ 的幅角为系统的**相位响应**。
由 (11.17) 可得  
$$
\begin{align*}
|Y(\Omega)| & = |X(\Omega) H(\Omega)| \\
& = |X(\Omega)| |H(\Omega)| \quad \text{和}  \tag{11.18a} \\
\arg Y(\Omega) & = \arg [X(\Omega) H(\Omega)] \\
& = \arg X(\Omega) + \arg H(\Omega) . \tag{11.18b}
\end{align*}
$$

由 (11.18a) 可见，输出的幅度谱等于输入的幅度谱乘以系统的幅度响应（即冲激响应的幅度谱）。由 (11.18b) 可见，输出的相位谱等于输入的相位谱加上系统的相位响应（即冲激响应的相位谱）。

由于频率响应 $H$ 仅仅是冲激响应 $h$ 的频谱，根据第 11.10 节的解释，如果 $h$ 为实数，则有  
$$
\begin{aligned}
& |H(\Omega)| = |H(-\Omega)| \quad \text{对所有 } \Omega \text{ 成立} \\
& \arg H(\Omega) = -\arg H(-\Omega) \quad \text{对所有 } \Omega \text{ 成立}
\end{aligned}
$$
（即幅度响应为偶函数，相位响应为奇函数）。

例 11.32. 一个 LTI 系统的冲激响应为  
$$
h(n) = u(n+5) - u(n-6)
$$
求该系统的频率响应 $H$。

解答. 频率响应即冲激响应的傅里叶变换。利用表 11.2（或例 11.2 的结果），可以轻松得到  
$$
H(\Omega) = \frac{\sin \left(\frac{11}{2} \Omega \right)}{\sin \left(\frac{1}{2} \Omega \right)}
$$
注意到 $H$ 为实数，因此我们可以在单一图上绘制频率响应 $H$，如图 11.12 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-164.jpg?height=593&width=1025&top_left_y=307&top_left_x=475)  
图 11.12: 示例系统的频率响应。
### 11.13.1 展开相位

由于复数的幅角并非唯一确定，复值函数的幅角也同样不唯一。因此，我们在定义与复值函数相对应的相位函数（即幅角）时有一定自由度。通常为了方便，我们将幅角限制在长度为 $2 \pi$ 的区间内，例如 $(-\pi, \pi]$，即主幅角。以这种方式定义复值函数的相位，往往会导致相位函数出现不必要的不连续性。这就引出了**展开相位**的概念。展开相位是指不将相位限制在长度为 $2 \pi$ 的区间内，并尽可能保持相位函数连续的定义方式。

下面给出一个说明展开相位概念的例子。

例 11.33（展开相位）。考虑一个 LTI 系统，其频率响应为  
$$
H(\Omega) = e^{j 3 \Omega}
$$
我们可以选择通过主幅角（即 $\operatorname{Arg} H(\Omega)$）来定义 $H$ 的相位。这样得到的相位函数如图 11.13(a) 所示。然而，使用主幅角会在相位函数中引入不必要的不连续性。因此，有时我们更希望定义相位函数以消除这些不必要的断点，这就是展开相位的用途。该函数 $H$ 的展开相位 $\Theta$ 为  
$$
\Theta(\Omega) = 3 \Omega
$$
$\Theta$ 的图像如图 11.13(b) 所示。与图 11.13(a) 中存在众多不连续点的函数不同，图 11.13(b) 的函数是连续的。虽然这两个图像中的函数不同，但它们是等效的，即它们对应相同的物理角位移（即对所有 $\Omega \in \mathbb{R}$，有 $e^{j \operatorname{Arg} H(\Omega)} = e^{j \Theta(\Omega)}$）。
### 11.13.2 幅度与相位失真

回顾推论 10.1，具有频率响应 $H$ 的 LTI 系统 $\mathcal{H}$ 满足  
$$
\mathcal{H}\left\{e^{j \Omega n}\right\}(n) = H(\Omega) e^{j \Omega n}
$$
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-165.jpg?height=477&width=1482&top_left_y=291&top_left_x=372)  
图 11.13: 展开相位示例。（a）将相位限制在 $(-\pi, \pi]$ 区间内的相位函数；（b）对应的展开相位。

（即 $e^{j \Omega n}$ 是 $\mathcal{H}$ 的特征序列，特征值为 $H(\Omega)$）。将 $H(\Omega)$ 表示为极坐标形式，可得  
$$
\begin{aligned}
\mathcal{H}\left\{e^{j \Omega n}\right\}(n) & = |H(\Omega)| e^{j \arg H(\Omega)} e^{j \Omega n} \\
& = |H(\Omega)| e^{j[\Omega n + \arg H(\Omega)]} \\
& = |H(\Omega)| e^{j \Omega (n + \arg[H(\Omega)] / \Omega)}
\end{aligned}
$$

该式可改写为  
$$
\mathcal{H}\left\{e^{j \Omega n}\right\}(n) = |H(\Omega)| e^{j \Omega \left[n - \tau_{\mathrm{p}}(\Omega)\right]}, \tag{11.19a}
$$
其中  
$$
\tau_{\mathrm{p}}(\Omega) = -\frac{\arg H(\Omega)}{\Omega}. \tag{11.19b}
$$

因此，系统对序列 $e^{j \Omega n}$ 的响应可以看作对该序列施加了两种变换：

- （幅度）按 $|H(\Omega)|$ 缩放；  
- 若 $\tau_{\mathrm{p}}(\Omega) \in \mathbb{Z}$，则按 $\tau_{\mathrm{p}}(\Omega)$ 平移；否则（即 $\tau_{\mathrm{p}}(\Omega) \notin \mathbb{Z}$），对应的连续时间复正弦先按 $\tau_{\mathrm{p}}(\Omega)$ 平移再采样（即执行带限插值）。

因此，幅度响应决定了系统对不同复正弦的（幅度）缩放方式，而相位响应决定了系统对不同复正弦的平移（即延迟/提前）方式（可能采用插值）。

当 $|H(\Omega)| = 1$ 对所有 $\Omega$ 成立时，该系统称为全通系统（allpass）。在全通系统中，系统输入和输出的幅度谱相同。如果系统不是全通系统，则会以某种方式改变幅度谱。当幅度谱以不期望的方式改变时，就称发生了幅度失真。如果 $|H(\Omega)| = a$ 对所有 $\Omega$ 成立，其中 $a$ 为常数，则每个复正弦在通过系统时都被同等缩放 $a$ 倍。在实际中，如果 $a \neq 1$，这种幅度谱变化可能是不希望的。如果 $|H(\Omega)|$ 不是常数，不同复正弦被缩放的比例不同，这种幅度谱变化在实践中通常是不希望的，称为幅度失真。

> 1 一些作者（如 [9,12]）将全通系统定义为 $|H(\Omega)| = c$ 对所有 $\Omega$ 成立，其中 $c$ 为常数（不必为 1）。

式 (11.19b) 中的函数 $\tau_{\mathrm{p}}$ 称为系统的**相位延迟**。若 $\tau_{\mathrm{p}}(\Omega) = 0$ 对所有 $\Omega$ 成立，则称系统为零相位。在零相位系统中，输入和输出的相位谱相同。若系统非零相位，则输入和输出的相位谱不同。当相位谱以不期望方式改变时，称发生相位失真。如果 $\tau_{\mathrm{p}}(\Omega) = n_{\mathrm{d}}$ 对所有 $\Omega$ 成立，其中 $n_{\mathrm{d}}$ 为常数，则系统将所有复正弦平移相同的量 $n_{\mathrm{d}}$。注意，$\tau_{\mathrm{p}}(\Omega) = n_{\mathrm{d}}$ 等价于（展开的）相位响应为  
$$
\arg H(\Omega) = - n_{\mathrm{d}} \Omega,
$$
这是一个常数项为零的线性函数。因此，相位延迟为常数的系统称为**线性相位系统**。如果 $\tau_{\mathrm{p}}(\Omega)$ 不是常数，不同复正弦被平移的量不同。在许多实际应用中，不同复正弦被平移不同的量是不希望的，因此非线性相位系统通常被认为会引入相位失真。因此，在相位谱重要的场合，通常使用零相位或线性相位系统。

例 11.34（无失真传输）。考虑一个 LTI 系统，输入为 $x$，输出为 $y$，满足  
$$
y(n) = x(n - n_0),
$$
其中 $n_0$ 为整数常数。也就是说，系统的输出仅为输入延迟 $n_0$ 的结果。这类系统行为称为**无失真传输**，因为系统允许输入信号直接传递到输出，仅引入延迟。这是实际通信系统中追求的理想行为（即接收信号 $y$ 等于发送信号 $x$ 的延迟版本）。对上式取傅里叶变换，得到  
$$
Y(\Omega) = e^{-j \Omega n_0} X(\Omega)
$$
因此系统的频率响应为  
$$
H(\Omega) = e^{-j \Omega n_0}
$$
由于 $|H(\Omega)| = 1$ 对所有 $\Omega$ 成立，系统为全通系统，不引入任何幅度失真。系统的相位延迟 $\tau_{\mathrm{p}}$ 为  
$$
\begin{aligned}
\tau_{\mathrm{p}}(\Omega) & = - \frac{\arg H(\Omega)}{\Omega} \\
& = - \left( \frac{-\Omega n_0}{\Omega} \right) \\
& = n_0
\end{aligned}
$$
由于相位延迟为常数，系统具有线性相位，并且不引入任何相位失真（除了一般性的时间延迟 $n_0$）。
## 11.14 LTI 系统的互连

根据傅里叶变换的性质及频率响应的定义，可以推导出关于频率响应与串联及并联互连系统的若干等价关系。

**串联互连**

假设有两个 LTI 系统 $\mathcal{H}_1$ 和 $\mathcal{H}_2$，其频率响应分别为 $H_1$ 和 $H_2$，它们以串联方式连接，如图 11.14(a) 左侧所示。设 $h_1$ 和 $h_2$ 为系统 $\mathcal{H}_1$ 和 $\mathcal{H}_2$ 的冲激响应，则整体系统的冲激响应为  
$$
h(n) = h_1 * h_2(n)
$$
对两边取傅里叶变换得到  
$$
\begin{aligned}
H(\Omega) & = \mathcal{F}\{ h_1 * h_2 \}(\Omega) \\
& = \mathcal{F}\{h_1\}(\Omega) \, \mathcal{F}\{h_2\}(\Omega) \\
& = H_1(\Omega) H_2(\Omega)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-167.jpg?height=82&width=876&top_left_y=294&top_left_x=683)  
图 11.14: 串联 LTI 系统的频率响应等价关系。

**并联互连**

假设有两个 LTI 系统 $\mathcal{H}_1$ 和 $\mathcal{H}_2$，其频率响应分别为 $H_1$ 和 $H_2$，它们以并联方式连接，如图 11.15 左侧所示。设 $h_1$ 和 $h_2$ 为系统 $\mathcal{H}_1$ 和 $\mathcal{H}_2$ 的冲激响应，则整体系统的冲激响应为  
$$
h(n) = h_1(n) + h_2(n)
$$
对两边取傅里叶变换得到  
$$
\begin{aligned}
H(\Omega) & = \mathcal{F}\{ h_1 + h_2 \}(\Omega) \\
& = \mathcal{F}\{h_1\}(\Omega) + \mathcal{F}\{h_2\}(\Omega) \\
& = H_1(\Omega) + H_2(\Omega)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-167.jpg?height=182&width=814&top_left_y=483&top_left_x=713)  
图 11.15: 并联 LTI 系统的频率响应等价关系。

综上所述，通过傅里叶变换，LTI 系统的串联对应频率响应的乘法，并联对应频率响应的加法。
## 11.15 LTI 系统与差分方程

许多实际中有用的 LTI 系统可以用 **N 阶常系数线性差分方程**表示。假设系统的输入为 $x$，输出为 $y$，则系统的输入-输出关系可表示为  
$$
\sum_{k=0}^{N} b_k \, y(n-k) = \sum_{k=0}^{M} a_k \, x(n-k), \quad (M \le N)
$$

设 $X$ 和 $Y$ 分别为 $x$ 和 $y$ 的傅里叶变换，对两边取傅里叶变换并利用线性与差分性质，有  
$$
\sum_{k=0}^{N} b_k e^{-j \Omega k} Y(\Omega) = \sum_{k=0}^{M} a_k e^{-j \Omega k} X(\Omega)
$$
从而得到系统的频率响应  
$$
H(\Omega) = \frac{Y(\Omega)}{X(\Omega)} = \frac{\sum_{k=0}^{M} a_k e^{-j \Omega k}}{\sum_{k=0}^{N} b_k e^{-j \Omega k}}.
$$
注意，这里分子与分母都是 $e^{-j\Omega}$ 的多项式，因此 $H(\Omega)$ 是 $e^{-j \Omega}$ 的**有理函数**。这也是为什么有理函数在信号与系统分析中非常重要的原因之一。

---

**例 11.35（差分方程 → 频率响应）**

给定系统差分方程  
$$
5y(n) + 2y(n-1) + 3y(n-2) = x(n) - 2x(n-1)
$$

取傅里叶变换，得到  
$$
(5 + 2 e^{-j \Omega} + 3 e^{-j 2 \Omega}) Y(\Omega) = (1 - 2 e^{-j \Omega}) X(\Omega)
$$

所以频率响应为  
$$
H(\Omega) = \frac{Y(\Omega)}{X(\Omega)} = \frac{1 - 2 e^{-j \Omega}}{5 + 2 e^{-j \Omega} + 3 e^{-j 2 \Omega}}
$$

---

**例 11.36（频率响应 → 差分方程）**

给定频率响应  
$$
H(\Omega) = \frac{e^{j 2 \Omega} - e^{j \Omega}}{e^{j 2 \Omega} - e^{j \Omega} + \frac{1}{4}}
$$

根据 $H(\Omega) = Y(\Omega)/X(\Omega)$，整理得  
$$
e^{j 2 \Omega} Y(\Omega) - e^{j \Omega} Y(\Omega) + \frac{1}{4} Y(\Omega) = e^{j 2 \Omega} X(\Omega) - e^{j \Omega} X(\Omega)
$$

两边同时乘以 $e^{-j 2 \Omega}$，得到  
$$
Y(\Omega) - e^{-j \Omega} Y(\Omega) + \frac{1}{4} e^{-j 2 \Omega} Y(\Omega) = X(\Omega) - e^{-j \Omega} X(\Omega)
$$

取逆傅里叶变换得到差分方程  
$$
y(n) - y(n-1) + \frac{1}{4} y(n-2) = x(n) - x(n-1)
$$
## 11.16 滤波 (Filtering)

在一些应用中，我们希望改变序列中频率分量的幅度或相位，或者完全去除某些频率分量。这个处理序列频率分量的过程称为 **滤波 (filtering)**，执行这种处理的系统称为 **滤波器 (filter)**。

为了简化，我们只考虑 **LTI 滤波器**。如果滤波器是 LTI 的，那么它可以完全由其频率响应来描述。由于序列的频谱是 $2\pi$ 周期的，因此我们只需考虑长度为 $2\pi$ 的频率区间，通常选择以零为中心的区间 $(-\pi, \pi]$。在此区间中，靠近原点的频率为低频，靠近 $\pm \pi$ 的频率为高频。

---

### 频率选择型滤波器

频率选择型滤波器允许某些频率分量几乎不受失真地通过，同时显著衰减其他频率分量。常见类型包括：

- **低通滤波器 (Lowpass)**  
  允许低于截止频率 $\Omega_c$ 的频率通过，高于截止频率的频率被抑制。  
  理想低通滤波器的频率响应为：
  $$
  H(\Omega) = 
  \begin{cases} 
  1 & |\Omega| \in [0, \Omega_c] \\
  0 & |\Omega| \in (\Omega_c, \pi]
  \end{cases}
  $$
  图示见 Figure 11.16(a)。

- **高通滤波器 (Highpass)**  
  允许高于截止频率 $\Omega_c$ 的频率通过，低于截止频率的频率被抑制。  
  理想高通滤波器的频率响应为：
  $$
  H(\Omega) = 
  \begin{cases} 
  1 & |\Omega| \in [\Omega_c, \pi] \\
  0 & |\Omega| \in [0, \Omega_c)
  \end{cases}
  $$
  图示见 Figure 11.16(b)。

- **带通滤波器 (Bandpass)**  
  仅允许介于两个截止频率 $\Omega_{c1}$ 和 $\Omega_{c2}$ 之间的频率通过，其余频率被抑制。  
  理想带通滤波器的频率响应为：
  $$
  H(\Omega) = 
  \begin{cases} 
  1 & |\Omega| \in [\Omega_{c1}, \Omega_{c2}] \\
  0 & |\Omega| \in [0, \Omega_{c1}) \cup (\Omega_{c2}, \pi]
  \end{cases}
  $$
  图示见 Figure 11.16(c)。

---

> **图示说明**：
> - (a) 理想低通滤波器频率响应
> - (b) 理想高通滤波器频率响应
> - (c) 理想带通滤波器频率响应
### Example 11.37 (理想滤波器)

对于以下每个 LTI 系统，其冲激响应 $h$ 给出如下，求系统的频率响应 $H$ 并绘制其图像，同时确定系统对应的频率选择型滤波器类型。

---

#### (a) 低通滤波器

**冲激响应：**
$$
h(n) = \frac{\Omega_c}{\pi} \operatorname{sinc}(\Omega_c n), \quad 0<\Omega_c<\pi
$$

**频率响应：**
$$
\begin{aligned}
H(\Omega) &= \mathcal{F}\left\{\frac{\Omega_c}{\pi} \operatorname{sinc}(\Omega_c n)\right\}(\Omega) \\
&= \sum_{k=-\infty}^{\infty} \operatorname{rect}\left[\frac{1}{2 \Omega_c} (\Omega - 2 \pi k)\right] \\
&= \operatorname{rect}\left(\frac{\Omega}{2\Omega_c}\right), \quad |\Omega|\in(-\pi,\pi] \\
&= 
\begin{cases} 
1 & |\Omega|\in[0,\Omega_c] \\
0 & |\Omega|\in(\Omega_c, \pi]
\end{cases}
\end{aligned}
$$

**结论：** 该系统允许低频分量通过，抑制高频分量，因此对应 **低通滤波器**。  
**图示：** Figure 11.17(a)

---

#### (b) 高通滤波器

**冲激响应：**
$$
h(n) = \delta(n) - \frac{\Omega_c}{\pi} \operatorname{sinc}(\Omega_c n)
$$

**频率响应：**
$$
\begin{aligned}
H(\Omega) &= \mathcal{F}\{\delta(n)\} - \mathcal{F}\left\{\frac{\Omega_c}{\pi}\operatorname{sinc}(\Omega_c n)\right\} \\
&= 1 - \operatorname{rect}\left(\frac{\Omega}{2 \Omega_c}\right), \quad |\Omega|\in(-\pi, \pi] \\
&= 
\begin{cases} 
0 & |\Omega|\in[0,\Omega_c) \\
1 & |\Omega|\in[\Omega_c,\pi]
\end{cases}
\end{aligned}
$$

**结论：** 该系统允许高频分量通过，抑制低频分量，因此对应 **高通滤波器**。  
**图示：** Figure 11.17(b)

---

#### (c) 带通滤波器

**冲激响应：**
$$
h(n) = \frac{2\Omega_b}{\pi} \operatorname{sinc}(\Omega_b n) \cos(\Omega_a n), \quad 0<\Omega_a,\Omega_b<\pi
$$

**频率响应：**
$$
\begin{aligned}
H(\Omega) &= \mathcal{F}\left\{\frac{2\Omega_b}{\pi} \operatorname{sinc}(\Omega_b n)\cos(\Omega_a n)\right\} \\
&= \mathcal{F}\left\{\frac{\Omega_b}{\pi}\operatorname{sinc}(\Omega_b n) \left[e^{j \Omega_a n} + e^{-j \Omega_a n}\right]\right\} \\
&= \operatorname{rect}\left(\frac{\Omega - \Omega_a}{2\Omega_b}\right) + \operatorname{rect}\left(\frac{\Omega + \Omega_a}{2\Omega_b}\right), \quad |\Omega| \in (-\pi, \pi] \\
&= 
\begin{cases} 
1 & |\Omega| \in [\Omega_a - \Omega_b, \Omega_a + \Omega_b] \\
0 & |\Omega| \in [0, \Omega_a - \Omega_b) \cup (\Omega_a + \Omega_b, \pi]
\end{cases}
\end{aligned}
$$

**结论：** 该系统仅允许中间频率通过，抑制低频和高频分量，因此对应 **带通滤波器**。  
**图示：** Figure 11.17(c)

示例 11.38（低通滤波）。考虑一个脉冲响应为  
$$
h(n)=\frac{1}{3} \operatorname{sinc}\left(\frac{\pi}{3} n\right)
$$
的 LTI 系统。利用频域方法，求该系统对输入信号  
$$
x(n)=\frac{1}{2}+\frac{2}{3} \cos \left(\frac{\pi}{4} n\right)+\frac{1}{2} \cos \left(\frac{3 \pi}{4} n\right)+\frac{1}{6} \cos (\pi n)
$$
的响应 $y$。  

**解答。** 首先，我们求 $x$ 的傅里叶变换 $X$。对于 $\Omega \in(-\pi, \pi]$，有  
$$
\begin{aligned}
X(\Omega) & =\mathcal{F}\left\{\frac{1}{2}+\frac{2}{3} \cos \left(\frac{\pi}{4} n\right)+\frac{1}{2} \cos \left(\frac{3 \pi}{4} n\right)+\frac{1}{6} \cos (\pi n)\right\}(\Omega) \\[2mm]
& =\frac{1}{2} \mathcal{F}\{1\}(\Omega)+\frac{2}{3} \mathcal{F}\left\{\cos \left(\frac{\pi}{4} n\right)\right\}(\Omega)+\frac{1}{2} \mathcal{F}\left\{\cos \left(\frac{3 \pi}{4} n\right)\right\}(\Omega)+\frac{1}{6} \mathcal{F}\{\cos (\pi n)\}(\Omega) \\[1mm]
& =\frac{1}{2}[2 \pi \delta(\Omega)]+\frac{2}{3}\left(\pi\left[\delta\left(\Omega+\frac{\pi}{4}\right)+\delta\left(\Omega-\frac{\pi}{4}\right)\right]\right) \\ 
&\quad +\frac{1}{2}\left(\pi\left[\delta\left(\Omega+\frac{3 \pi}{4}\right)+\delta\left(\Omega-\frac{3 \pi}{4}\right)\right]\right)+\frac{1}{6}[2 \pi \delta(\Omega-\pi)] \\[1mm]
& =\pi \delta(\Omega)+\frac{2 \pi}{3} \delta\left(\Omega+\frac{\pi}{4}\right)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{\pi}{4}\right)+\frac{\pi}{2} \delta\left(\Omega+\frac{3 \pi}{4}\right)+\frac{\pi}{2} \delta\left(\Omega-\frac{3 \pi}{4}\right)+\frac{\pi}{3} \delta(\Omega-\pi) \\[1mm]
& =\frac{\pi}{2} \delta\left(\Omega+\frac{3 \pi}{4}\right)+\frac{2 \pi}{3} \delta\left(\Omega+\frac{\pi}{4}\right)+\pi \delta(\Omega)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{\pi}{4}\right)+\frac{\pi}{2} \delta\left(\Omega-\frac{3 \pi}{4}\right)+\frac{\pi}{3} \delta(\Omega-\pi)
\end{aligned}
$$

输入信号 $x$ 的频谱如图 11.18(a) 所示。接下来，我们求 $h$ 的傅里叶变换 $H$。对于 $\Omega \in(-\pi, \pi]$，有  
$$
\begin{aligned}
H(\Omega) & =\mathcal{F}\left\{\frac{1}{3} \operatorname{sinc}\left(\frac{\pi}{3} n\right)\right\} \\[1mm]
& =\operatorname{rect}\left(\frac{3}{2 \pi} \Omega\right) \\[1mm]
& = \begin{cases}1 & |\Omega| \in\left[0, \frac{\pi}{3}\right] \\[1mm]
0 & |\Omega| \in\left(\frac{\pi}{3}, \pi\right]\end{cases}
\end{aligned}
$$

系统的频率响应 $H$ 如图 11.18(b) 所示。输出信号的频谱 $Y$ 可由  
$$
\begin{aligned}
Y(\Omega) & =H(\Omega) X(\Omega) \\[1mm]
& =\frac{2 \pi}{3} \delta\left(\Omega+\frac{\pi}{4}\right)+\pi \delta(\Omega)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{\pi}{4}\right)
\end{aligned}
$$
得到。输出信号的频谱 $Y$ 如图 11.18(c) 所示。对 $Y$ 做傅里叶逆变换得到  
$$
\begin{aligned}
y(n) & =\mathcal{F}^{-1}\left\{\pi \delta(\Omega)+\frac{2 \pi}{3}\left[\delta\left(\Omega+\frac{\pi}{4}\right)+\delta\left(\Omega-\frac{\pi}{4}\right)\right]\right\}(n) \\[1mm]
& =\frac{1}{2} \mathcal{F}^{-1}\{2 \pi \delta(\Omega)\}(n)+\frac{2}{3} \mathcal{F}^{-1}\left\{\pi\left[\delta\left(\Omega+\frac{\pi}{4}\right)+\delta\left(\Omega-\frac{\pi}{4}\right)\right]\right\}(n) \\[1mm]
& =\frac{1}{2}+\frac{2}{3} \cos \left(\frac{\pi}{4} n\right)
\end{aligned}
$$

示例 11.39（带通滤波）。考虑一个脉冲响应为  
$$
h(n)=\frac{8}{5 \pi} \operatorname{sinc}\left(\frac{4}{5} n\right) \cos \left(\frac{6}{5} n\right)
$$
的 LTI 系统。利用频域方法，求该系统对输入信号  
$$
x(n)=\frac{1}{4}+\cos \left(\frac{4}{5} n\right)+\frac{2}{3} \cos \left(\frac{8}{5} n\right)+\frac{1}{4} \cos \left(\frac{12}{5} n\right)+\frac{1}{6} \cos (\pi n)
$$
的响应 $y$。顺便指出，信号 $x$ 并非周期信号。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-174.jpg?height=1451&width=1054&top_left_y=605&top_left_x=467)  
图 11.18：低通滤波示例的频谱。(a) 输入信号 $x$ 的频谱 $X$。(b) 系统的频率响应 $H$。(c) 输出信号 $y$ 的频谱 $Y$。

**解答。** 对 $x$ 进行傅里叶变换，得到  
$$
\begin{aligned}
X(\Omega) &= \mathcal{F}\Big\{\frac{1}{4}+\cos \left(\frac{4}{5} n\right)+\frac{2}{3} \cos \left(\frac{8}{5} n\right)+\frac{1}{4} \cos \left(\frac{12}{5} n\right)+\frac{1}{6} \cos (\pi n)\Big\}(\Omega) \\[1mm]
&= \frac{1}{4} \mathcal{F}\{1\}(\Omega)+\mathcal{F}\left\{\cos \left(\frac{4}{5} n\right)\right\}(\Omega)+\frac{2}{3} \mathcal{F}\left\{\cos \left(\frac{8}{5} n\right)\right\}(\Omega) \\ 
&\quad +\frac{1}{4} \mathcal{F}\left\{\cos \left(\frac{12}{5} n\right)\right\}(\Omega)+\frac{1}{6} \mathcal{F}\{\cos (\pi n)\}(\Omega) \\[1mm]
&= \frac{\pi}{2} \delta(\Omega)+\pi \left[\delta\left(\Omega-\frac{4}{5}\right)+\delta\left(\Omega+\frac{4}{5}\right)\right]+\frac{2 \pi}{3} \left[\delta\left(\Omega-\frac{8}{5}\right)+\delta\left(\Omega+\frac{8}{5}\right)\right] \\ 
&\quad +\frac{\pi}{4} \left[\delta\left(\Omega-\frac{12}{5}\right)+\delta\left(\Omega+\frac{12}{5}\right)\right]+\frac{\pi}{3} \delta(\Omega-\pi) \\[1mm]
&= \frac{\pi}{4} \delta\left(\Omega+\frac{12}{5}\right)+\frac{2 \pi}{3} \delta\left(\Omega+\frac{8}{5}\right)+\pi \delta\left(\Omega+\frac{4}{5}\right)+\frac{\pi}{2} \delta(\Omega) \\ 
&\quad +\pi \delta\left(\Omega-\frac{4}{5}\right)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{8}{5}\right)+\frac{\pi}{4} \delta\left(\Omega-\frac{12}{5}\right)+\frac{\pi}{3} \delta(\Omega-\pi)
\end{aligned}
$$

输入信号 $x$ 的频谱如图 11.19(a) 所示。接下来，我们求系统的频率响应 $H$。有  
$$
\begin{aligned}
H(\Omega) &= \mathcal{F}\left\{\frac{8}{5 \pi} \operatorname{sinc}\left(\frac{4}{5} n\right) \cos \left(\frac{6}{5} n\right)\right\}(\Omega) \\[1mm]
&= \mathcal{F}\left\{\frac{8}{5 \pi} \operatorname{sinc}\left(\frac{4}{5} n\right) \frac{1}{2}\left(e^{j(6/5)n}+e^{-j(6/5)n}\right)\right\}(\Omega) \\[1mm]
&= \mathcal{F}\left\{\frac{4}{5 \pi} e^{j(6/5)n} \operatorname{sinc}\left(\frac{4}{5} n\right) + \frac{4}{5 \pi} e^{-j(6/5)n} \operatorname{sinc}\left(\frac{4}{5} n\right)\right\}(\Omega) \\[1mm]
&= \mathcal{F}\left\{\frac{4}{5 \pi} \operatorname{sinc}\left(\frac{4}{5} n\right)\right\}\left(\Omega-\frac{6}{5}\right) + \mathcal{F}\left\{\frac{4}{5 \pi} \operatorname{sinc}\left(\frac{4}{5} n\right)\right\}\left(\Omega+\frac{6}{5}\right) \\[1mm]
&= \operatorname{rect}\left[\frac{5}{8}\left(\Omega-\frac{6}{5}\right)\right] + \operatorname{rect}\left[\frac{5}{8}\left(\Omega+\frac{6}{5}\right)\right] \\[1mm]
&= \begin{cases}1 & |\Omega| \in \left[\frac{2}{5}, \frac{10}{5}\right] \\[1mm]
0 & |\Omega| \in \left[0, \frac{2}{5}\right) \cup \left(\frac{10}{5}, \pi\right]\end{cases}
\end{aligned}
$$

系统的频率响应 $H$ 如图 11.19(b) 所示。输出信号的频谱 $Y$ 为  
$$
\begin{aligned}
Y(\Omega) &= H(\Omega) X(\Omega) \\[1mm]
&= \frac{2 \pi}{3} \delta\left(\Omega+\frac{8}{5}\right)+\pi \delta\left(\Omega+\frac{4}{5}\right)+\pi \delta\left(\Omega-\frac{4}{5}\right)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{8}{5}\right)
\end{aligned}
$$

对其进行傅里叶逆变换得到  
$$
\begin{aligned}
y(n) &= \mathcal{F}^{-1}\Big\{\frac{2 \pi}{3} \delta\left(\Omega+\frac{8}{5}\right)+\pi \delta\left(\Omega+\frac{4}{5}\right)+\pi \delta\left(\Omega-\frac{4}{5}\right)+\frac{2 \pi}{3} \delta\left(\Omega-\frac{8}{5}\right)\Big\}(n) \\[1mm]
&= \cos \left(\frac{4}{5} n\right)+\frac{2}{3} \cos \left(\frac{8}{5} n\right)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-176.jpg?height=1454&width=1052&top_left_y=605&top_left_x=467)  
图 11.19：带通滤波示例的频谱。(a) 输入信号 $x$ 的频谱 $X$。(b) 系统的频率响应 $H$。(c) 输出信号 $y$ 的频谱 $Y$。
## 11.17 离散时间傅里叶变换与连续时间傅里叶级数的关系

离散时间傅里叶变换（DTFT）与连续时间傅里叶级数（CTFS）之间存在一个对偶关系。回顾离散时间傅里叶变换的分析与综合公式分别为  
$$
\begin{align*}
X(\Omega) & =\sum_{k=-\infty}^{\infty} x(k) e^{-j k \Omega} \quad \text { 和 }  \tag{11.20a}\\
x(n) & =\frac{1}{2 \pi} \int_{2 \pi} X(\Omega) e^{j n \Omega} d \Omega \tag{11.20b}
\end{align*}
$$

同时，连续时间傅里叶级数的综合与分析公式分别为  
$$
\begin{gathered}
y(t)=\sum_{k=-\infty}^{\infty} Y(k) e^{j k(2 \pi / T) t}, \quad
Y(n)=\frac{1}{T} \int_{T} y(t) e^{-j n(2 \pi / T) t} d t
\end{gathered}
$$
这可以分别重写为  
$$
\begin{gather*}
y(t)=\sum_{k=-\infty}^{\infty} Y(-k) e^{-j k(2 \pi / T) t} \quad \text { 和 }  \tag{11.21a}\\
Y(-n)=\frac{1}{T} \int_{T} y(t) e^{j n(2 \pi / T) t} d t \tag{11.21b}
\end{gather*}
$$

注意，如果 $T=2 \pi$，则公式 (11.20) 与公式 (11.21) 本质上是相同的。具体来说，(11.21a) 在 $T=2 \pi$ 时，与 (11.20a) 相同，只需令 $X=y, \Omega=t$，并且 $x(n)=Y(-n)$。同样，(11.21b) 在 $T=2 \pi$ 时，与 (11.20b) 相同。由此可见，序列 $x$ 的 DTFT $X$ 可以看作是 $2 \pi$-周期频谱 $X$ 的 CTFS 表示。我们可以将此结果形式化为下述定理。

**定理 11.20.** 设 $X$ 为 $2 \pi$-周期函数，$x$ 为序列，则以下两条是等价的：

1. $X \stackrel{\text{CTFS}}{\longleftrightarrow} x$  
2. $\mathcal{R} x \stackrel{\text{DTFT}}{\longleftrightarrow} X$，其中 $\mathcal{R}$ 表示时间反转（即 $\mathcal{R} x(n)=x(-n)$）。

**证明。** 该定理的结果直接来源于 DTFT 与 CTFS 的分析与综合公式的定义（如上所述）。

前述定理中的对偶关系在某些情况下非常有用。下面我们给出一个实例，利用该关系辅助计算 DTFT。

**示例 11.40（sinc 序列的傅里叶变换）**。设 $B$ 为 $(0, \pi)$ 区间内的实常数。

(a) 证明 $2 \pi$-周期函数  
$$
y(t)=\sum_{k=-\infty}^{\infty} \operatorname{rect}\left[\frac{1}{2 B}(t-2 \pi k)\right]
$$
的傅里叶级数系数序列为  
$$
Y(k)=\frac{B}{\pi} \operatorname{sinc}(B k)
$$

(b) 利用 (a) 的结果求序列  
$$
x(n)=\frac{B}{\pi} \operatorname{sinc}(B n)
$$
的 DTFT $X$。

**解答。**  
(a) 由傅里叶级数分析公式可得  
$$
\begin{aligned}
Y(k) &= \frac{1}{T} \int_{T} y(t) e^{-j(2 \pi / T) k t} d t \\[1mm]
&= \frac{1}{2 \pi} \int_{-\pi}^{\pi} y(t) e^{-j k t} d t \\[1mm]
&= \frac{1}{2 \pi} \int_{-B}^{B} e^{-j k t} d t \\[1mm]
&= \begin{cases} \frac{1}{2 \pi}\left[ \frac{1}{-j k} e^{-j k t} \right]_{-B}^{B}, & k \neq 0 \\[1mm]
\frac{1}{2 \pi} (2 B), & k=0 \end{cases}
\end{aligned}
$$

对 $k \neq 0$ 的情况，化简得  
$$
\begin{aligned}
Y(k) &= \frac{j}{2 \pi k} \left[e^{-j B k} - e^{j B k}\right] \\[1mm]
&= \frac{j}{2 \pi k} [ -2 j \sin(B k) ] \\[1mm]
&= \frac{1}{\pi k} \sin(B k) \\[1mm]
&= \frac{B}{\pi} \frac{\sin(B k)}{B k} \\[1mm]
&= \frac{B}{\pi} \operatorname{sinc}(B k)
\end{aligned}
$$

对 $k=0$ 的情况，有  
$$
Y(0) = \frac{1}{2 \pi} (2 B) = \frac{B}{\pi}
$$
因此公式对 $k=0$ 也成立。由此得  
$$
y(t)=\sum_{k=-\infty}^{\infty} \operatorname{rect}\left[\frac{1}{2 B}(t-2 \pi k)\right] \quad \stackrel{\text{CTFS}}{\longleftrightarrow} \quad Y(k)=\frac{B}{\pi} \operatorname{sinc}(B k)
$$

(b) 由于 $x=Y$，所以 $X$ 是 $Y$ 的傅里叶变换。实际上，我们需要求 $Y$ 的傅里叶变换。由 $y \stackrel{\text{CTFS}}{\longleftrightarrow} Y$，根据对偶性（定理 11.20），有 $\mathcal{R} Y \stackrel{\text{DTFT}}{\longleftrightarrow} y$，其中 $\mathcal{R}$ 表示时间反转（即 $\mathcal{R} x(n)=x(-n)$）。另外，由于 $Y$ 是偶函数，$\mathcal{R} Y = Y$，因此 $Y \stackrel{\text{DTFT}}{\longleftrightarrow} y$，等价于 $x \stackrel{\text{DTFT}}{\longleftrightarrow} y$。于是得到  
$$
\begin{aligned}
X(\Omega) &= y(\Omega) \\[1mm]
&= \sum_{k=-\infty}^{\infty} \operatorname{rect}\left[\frac{1}{2 B}(\Omega - 2 \pi k)\right]
\end{aligned}
$$
## 11.18 离散时间与连续时间傅里叶变换的关系

在第 6.20 节中，我们介绍了脉冲采样。对于一个带限函数 $x$，脉冲采样得到的函数的傅里叶变换与从 $x$ 直接采样得到的序列的傅里叶变换之间存在一个关系。该关系由下述定理给出。

**定理 11.21.** 设 $x$ 为带限函数，$T$ 为满足奈奎斯特条件的采样周期。设 $\tilde{y}$ 是通过脉冲采样 $x$ 得到的函数，即  
$$
\tilde{y}(t) = \sum_{n=-\infty}^{\infty} x(T n) \delta(t - T n)
$$
设 $y$ 是通过采样 $x$ 得到的序列，即  
$$
y(n) = x(T n)
$$
设 $\tilde{Y}$ 为 $\tilde{y}$ 的连续时间傅里叶变换（CTFT），$Y$ 为 $y$ 的离散时间傅里叶变换（DTFT）。则有如下关系成立：  
$$
Y(\Omega) = \tilde{Y}\left(\frac{\Omega}{T}\right), \quad \forall \Omega \in \mathbb{R}
$$

**证明。** 对 $\tilde{y}$ 进行连续时间傅里叶变换，有  
$$
\begin{aligned}
\tilde{Y}(\omega) &= \mathcal{F}\Big\{\sum_{n=-\infty}^{\infty} x(T n) \delta(\cdot - T n)\Big\}(\omega) \\[1mm]
&= \sum_{n=-\infty}^{\infty} x(T n) \mathcal{F}\{\delta(\cdot - T n)\}(\omega) \\[1mm]
&= \sum_{n=-\infty}^{\infty} y(n) e^{-j T n \omega} \\[1mm]
&= \sum_{n=-\infty}^{\infty} y(n) e^{-j (T \omega) n} \\[1mm]
&= Y(T \omega)
\end{aligned}
$$

由此可得  
$$
Y(T \omega) = \tilde{Y}(\omega)
$$

在上式中令 $\omega = \frac{\Omega}{T}$，即可得到  
$$
Y(\Omega) = \tilde{Y}\left(\frac{\Omega}{T}\right)
$$
## 11.19 离散时间傅里叶变换与离散傅里叶变换的关系

事实上，离散时间傅里叶变换（DTFT）与离散傅里叶变换（DFT）之间存在一个重要的关系，如下定理所示。

**定理 11.22.** 设 $x$ 为有限时长序列，使得 $x(n)=0$ 对于所有 $n \notin [0..M-1]$，并设 $X$ 为 $x$ 的 DTFT。设 $\tilde{X}$ 为 $x$ 的 $N$ 点 DFT，即  
$$
\tilde{X}(k) = \sum_{n=0}^{N-1} x(n) e^{-j (2 \pi / N) k n}, \quad k \in [0..N-1]
$$
若 $N \ge M$，则有  
$$
X\left(\frac{2 \pi}{N} k\right) = \tilde{X}(k), \quad k \in [0..N-1]
$$
换言之，序列 $\tilde{X}$ 的元素对应于函数 $X$ 的均匀采样点。

**证明.** 由 DFT 定义，有  
$$
\tilde{X}(k) = \sum_{n=0}^{N-1} x(n) e^{-j (2 \pi / N) k n}
$$
由于 $x(n)=0$ 对于所有 $n \notin [0..M-1]$ 且 $N \ge M$，可知 $x(n)=0$ 对于所有 $n \notin [0..N-1]$。因此，可以将右侧求和式扩展到所有整数，得到  
$$
\begin{aligned}
\tilde{X}(k) &= \sum_{n=-\infty}^{\infty} x(n) e^{-j (2 \pi / N) k n} \\[1mm]
&= \left. \sum_{n=-\infty}^{\infty} x(n) e^{-j \Omega n} \right|_{\Omega=(2 \pi / N) k} \\[1mm]
&= X\left(\frac{2 \pi}{N} k\right)
\end{aligned}
$$

上述定理（即定理 11.22）具有非常重要的实际意义。如今大多数系统的核心都是数字计算机，而数字计算机本质上是离散时间系统，能够高效处理有限长度的序列，这些序列可以表示为有限大小的数字数组。相比之下，数字计算机在代数上（符号计算）处理连续函数则较为困难。因此，在实践中，通常使用 DFT 来计算 DTFT。DFT 用于获得 DTFT 的均匀采样点，然后可以利用插值技术为这些采样点之间的傅里叶变换赋值。在计算 $N$ 点 DFT 时，我们可以自由选择 $N$，从而选择足够细的采样网格，使插值得到的傅里叶变换近似足够精确以满足实际应用。

**示例 11.41.** 考虑序列  
$$
x(n) = u(n) - u(n-4)
$$
该序列的傅里叶变换为  
$$
X(\Omega) = e^{-j (3/2) \Omega} \left[\frac{\sin(2 \Omega)}{\sin(\Omega/2)}\right]
$$
显然，$x(n)=0$ 对于所有 $n \notin [0..3]$。因此，当 $N \ge 4$ 时，可以利用 $N$ 点 DFT 确定 $X$ 的采样点。序列 $x$ 的 $N$ 点 DFT 在 $N=4, 8, 16, 64$ 时分别绘制在图 11.20、11.21、11.22 和 11.23 中。为了展示 DFT 与傅里叶变换之间的关系，每个图中都叠加了傅里叶变换曲线。我们利用 $X$ 的 $2 \pi$ 周期性，将 $X$ 绘制在区间 $(-\pi, \pi]$ 上（而非 $[0, 2\pi)$）。从图中可以看出，随着 $N$ 增大，DFT 得到的采样频谱与实际频谱的吻合度更高。当然，增大 $N$ 的代价是计算和存储成本的增加。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-181.jpg?height=890&width=1178&top_left_y=372&top_left_x=524)  
图 11.20：当 $N=4$ 时，DFT 得到的采样 DTFT。(a) 幅度谱 (b) 相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-181.jpg?height=890&width=1192&top_left_y=1396&top_left_x=521)  
图 11.21：当 $N=8$ 时，DFT 得到的采样 DTFT。(a) 幅度谱 (b) 相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-182.jpg?height=893&width=1195&top_left_y=372&top_left_x=394)  
图 11.22：当 $N=16$ 时，DFT 得到的采样 DTFT。(a) 幅度谱 (b) 相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-182.jpg?height=890&width=1195&top_left_y=1396&top_left_x=394)  
图 11.23：当 $N=64$ 时，DFT 得到的采样 DTFT。(a) 幅度谱 (b) 相位谱。
## 11.20 练习题

### 11.20.1 无答案练习题

11.1 利用傅里叶变换分析公式，求下列序列 $x$ 的傅里叶变换 $X$。  
(a) $x(n)=n[u(n)-u(n-N)]$，其中 $N$ 为整数常数 [提示：使用公式 (F.14)]；  
(b) $x(n)=|n|[u(n+M)-u(n-M-1)]$，其中 $M$ 为整数常数 [提示：使用公式 (F.14)]；  
(c) $x(n)=a^{n}[u(n)-u(n-M)]$，其中 $a$ 为复常数且 $a \neq 1$，$M$ 为整数常数；  
(d) $x(n)=a^{|2 n|}$，其中 $a$ 为复常数且 $|a|<1$；  
(e) $x(n)=a^{n} u(n-1)$，其中 $a$ 为复常数且 $|a|<1$；  
(f) $x(n)=\delta(n+a)+\delta(n-a)$，其中 $a$ 为整数；  
(g) $x(n)=\delta(n+a)-\delta(n-a)$，其中 $a$ 为整数。

11.2 利用傅里叶变换对表及傅里叶变换性质，求下列序列 $x$ 的傅里叶变换 $X$。  
(a) $x(n)=\cos \left(\frac{2 \pi}{7} n-\frac{\pi}{3}\right)$；  
(b) $x(n)=u(n+5)-u(n-5)$；  
(c) $x(n)=x_{1} * x_{2}(n)$，其中 $x_{1}(n)=\delta(n)-\frac{1}{3} \operatorname{sinc}\left(\frac{\pi}{3} n\right)$，$x_{2}(n)=\frac{2}{3} \operatorname{sinc}\left(\frac{2 \pi}{3} n\right)$；  
(d) $x(n)=\cos ^{2}\left(\frac{\pi}{5} n\right)$；  
(e) $x(n)=(\uparrow 3) x_{1}(n)$，其中 $x_{1}(n)=\frac{1}{12} \operatorname{sinc}\left(\frac{\pi}{12} n\right)$；  
(f) $x(n)=\left(\frac{1}{3}\right)^{n} \cos \left(\frac{\pi}{7} n\right) u(n)$；  
(g) $x(n)=\operatorname{sinc}\left(\frac{\pi}{6} n\right) \cos \left(\frac{\pi}{2} n\right)$；  
(h) $x(n)=\left(\frac{3}{4}\right)^{n} u(n-2)$；  
(i) $x(n)=(n-2)\left(\frac{1}{3}\right)^{n-2} u(n-2)$；  
(j) $x(n)=n\left(\frac{2}{3}\right)^{n+1} u(n+1)$；  
(k) $x(n)=(n+1)\left(\frac{3}{4}\right)^{n} u(n)$；  
(l) $x(n)=\left(\frac{1}{3}\right)^{n-2} u(n-2)$；  
(m) $x(n)=\left(\frac{1}{3}\right)^{n+1} u(n)$；  
(n) $x(n)=(-1)^{n}$；  
(o) $x(n)=(-1)^{n} u(n)$；  
(p) $x(n)=(-1)^{n} u(-n-1)$。

11.3 利用傅里叶变换对表及傅里叶变换性质，求下列序列 $x$ 的傅里叶变换 $X$。  
(a) $x(n)=(n-m) a^{n-m} u(n-m)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$；  
(b) $x(n)=n a^{n-m} u(n-m)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$；  
(c) $x(n)=(n-m) a^{n} u(n)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$；  
(d) $x(n)=a^{n-m} u(n-m)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$；  
(e) $x(n)=a^{n-m} u(n)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$；  
(f) $x(n)=a^{n} u(n-m)$，其中 $m \in \mathbb{Z}$，$a \in \mathbb{C}$，且 $|a|<1$。

11.4 对下列序列 $y$，求 $y$ 的傅里叶变换 $Y$，并用序列 $x$ 的傅里叶变换 $X$ 表示。  
(a) $y(n)=n x(n-3)$；  
(b) $y(n)=n^{2} x(n+1)$；  
(c) $y(n)=x(1-n)+x(n-1)$；  
(d) $y(n)=\frac{1}{2}\left[x^{*}(n)+x(n)\right]$；  
(e) $y(n)=(n+1) x(n+1)$；  
(f) $y(n)=x^{*}(-n)$；  
(g) $y(n)=x(n+m)+x(n-m)$，其中 $m \in \mathbb{Z}$；  
(h) $y(n)=x(n+m)-x(n-m)$，其中 $m \in \mathbb{Z}$。

11.5 利用傅里叶变换综合公式，求下列函数 $X$ 的逆傅里叶变换 $x$。  
(a) $X(\Omega)=\begin{cases}1,& |\Omega|\le B \\ 0,& B<|\Omega|\le \pi\end{cases}$，其中 $B$ 为正实常数；  
(b) $X(\Omega)=\begin{cases}-2 j,& \Omega \in(-\pi,0] \\ 2 j,& \Omega \in(0,\pi]\end{cases}$；  
(c) $X(\Omega)=\cos(k \Omega)$，$\Omega \in[-\pi,\pi]$，其中 $k$ 为整数常数。

11.6 利用傅里叶变换对表及傅里叶变换性质，求下列函数 $X$ 的逆傅里叶变换 $x$。  
(a) $X(\Omega)=e^{-j 10 \Omega}\left[\frac{e^{j \Omega}}{e^{j \Omega}-\frac{1}{3}}\right]$；  
(b) $X(\Omega)=\frac{3}{5-4 \cos \left(\Omega-\frac{\pi}{3}\right)}$；  
(c) $X(\Omega)=\frac{e^{j 2 \Omega}}{\left(e^{j \Omega}-\frac{1}{3}\right)^{2}}$；  
(d) $X(\Omega)=4 \cos ^{2}(\Omega)+4 \sin ^{2}(3 \Omega)$ [提示：考虑 $X$ 的形式]；  
(e) $X(\Omega)=\frac{-\frac{5}{6} e^{-j \Omega}+5}{1+\frac{1}{6} e^{-j \Omega}-\frac{1}{6} e^{-j 2 \Omega}}$ [提示：使用部分分式展开]。

11.7 利用傅里叶变换性质及傅里叶变换对  
$$
a^{n} u(n) \stackrel{\mathrm{DTFT}}{\longleftrightarrow} \frac{1}{1-a e^{-j \Omega}}
$$
通过归纳法证明函数 $X_{k}$ 的逆傅里叶变换是序列 $x_{k}$，其中  
$$
X_{k}(\Omega) = \frac{1}{\left(1-a e^{-j \Omega}\right)^{k}}, \quad x_{k}(n) = \frac{(n+k-1)!}{n! (k-1)!} a^{n} u(n)
$$
$k$ 为严格正整数。[提示：$x_{k+1}(n)=\frac{n+k}{k} x_{k}(n)$]
11.8 求下列周期序列 $x$ 的傅里叶变换 $X$。每个图中出现的采样点数都是周期的整数倍。  

(a) 根据图形，观察序列周期和幅值，可以使用傅里叶级数公式：
$$
X(\Omega) = \sum_{k=-\infty}^{\infty} x(k) e^{-j k \Omega}.
$$
由于图中序列为周期为 $4$ 的矩形脉冲序列，可写为：
$$
X(\Omega) = \sum_{m=-\infty}^{\infty} \sum_{n=0}^{3} x(n) e^{-j (n+4m)\Omega} = \sum_{n=0}^{3} x(n) e^{-j n \Omega} \sum_{m=-\infty}^{\infty} e^{-j 4 m \Omega}.
$$
由离散冲激串性质：
$$
\sum_{m=-\infty}^{\infty} e^{-j 4 m \Omega} = 2\pi \sum_{k=-\infty}^{\infty} \delta(\Omega - \frac{\pi}{2} k).
$$
因此：
$$
X(\Omega) = 2 \pi \sum_{k=-\infty}^{\infty} \left( \sum_{n=0}^{3} x(n) e^{-j n (\pi/2) k} \right) \delta(\Omega - (\pi/2) k).
$$

(b) 对于第二个图，同理，假设周期为 $N$，幅值为 $x(n)$，傅里叶变换为：
$$
X(\Omega) = 2\pi \sum_{k=-\infty}^{\infty} \left( \sum_{n=0}^{N-1} x(n) e^{-j n (2\pi/N) k} \right) \delta(\Omega - (2\pi/N) k).
$$

---

11.9 判断下列函数 $X$ 是否为有效的离散时间傅里叶变换。  

(a) $X(\Omega)=\pi+j$：有效，因为 DTFT 可以是复常数；  
(b) $X(\Omega)=\frac{1}{2} \Omega$：无效，因为 DTFT 必须 $2\pi$ 周期；  
(c) $X(\Omega)=\cos(5\Omega)$：有效，周期为 $2\pi$；  
(d) $X(\Omega)=\cos(\frac{1}{5}\Omega)$：有效，周期为 $2\pi$；  
(e) $X(\Omega)=\frac{\sin(4\Omega)}{\sin(\frac{1}{2}\Omega)}$：有效，周期 $2\pi$，常见于有限长矩形序列；  
(f) $X(\Omega)=\delta(\Omega)$：无效，因为 $\delta(\Omega)$ 不 $2\pi$ 周期。  

---

11.10 对于序列 $x$，若 $x$ 为偶序列，则
$$
X(\Omega) = x(0) + 2 \sum_{n=1}^{\infty} x(n) \cos(n \Omega).
$$
若 $x$ 为奇序列，则
$$
X(\Omega) = -2 j \sum_{n=1}^{\infty} x(n) \sin(n \Omega).
$$

---

11.11 对于实序列 $x$，偶、奇部分的傅里叶变换满足：
(a) $X_{\mathrm{e}}(\Omega) = \operatorname{Re}[X(\Omega)]$；  
(b) $X_{\mathrm{o}}(\Omega) = j \operatorname{Im}[X(\Omega)]$。  

---

11.12 使用卷积性质求 $x = x_1 * x_2$：  
(a) $x_1(n)=\frac{1}{4} \operatorname{sinc}(\frac{\pi}{4} n), x_2(n)=\frac{1}{7} \operatorname{sinc}(\frac{\pi}{7} n)$；  
DTFT 相乘：
$$
X(\Omega) = X_1(\Omega) X_2(\Omega) = \operatorname{rect}(\frac{\Omega}{\pi/2}) \operatorname{rect}(\frac{\Omega}{\pi/7}).
$$

(b) $x_1(n)=\frac{1}{5} \operatorname{sinc}(\frac{\pi}{5} n), x_2(n)=\cos(\frac{\pi}{2} n)$；  
DTFT 相乘：
$$
X(\Omega) = \operatorname{rect}(\frac{\Omega}{\pi/5}) \cdot \pi [\delta(\Omega-\pi/2)+\delta(\Omega+\pi/2)].
$$

---

11.13 序列能量：
(a) $x(n)=\operatorname{sinc}(\frac{\pi}{11} n)$，能量 $E = \sum_{n=-\infty}^{\infty} |x(n)|^2$；  
(b) $x(n)=\frac{2}{5} \operatorname{sinc}(\frac{\pi}{5} n) \cos(\frac{\pi}{2} n)$，能量同上公式。  

---

11.14 对实序列 $x$，傅里叶逆变换可写为：
$$
x(n) = \frac{1}{\pi} \int_0^{\pi} |X(\Omega)| \cos(\Omega n + \arg[X(\Omega)]) d\Omega.
$$

---

11.15-11.22 题属于作业题，建议按照前面章节中的 DTFT 公式和性质依次求解。  
例如，11.15(a)：
$$
x(n) = u(n-2) - u(n-7) \implies X(\Omega) = \sum_{n=2}^{6} e^{-j n \Omega} = e^{-j2\Omega} \frac{1-e^{-j5\Omega}}{1-e^{-j\Omega}}.
$$
其余题可以利用 DTFT 表、性质以及系统频率响应公式逐步求解。
### 11.20.2 带答案的练习

11.101 利用傅里叶变换对表及傅里叶变换的性质，求下列序列 $x$ 的傅里叶变换 $X$。
(a) $x(n)=\cos \left(\frac{\pi}{4} n-\frac{\pi}{12}\right)$；以及
(b) $x(n)=u(n+10)-u(n+2)$。

简答。  
(a) $X(\Omega)=\frac{1}{2} e^{-j \pi / 12} \delta\left(\Omega-\frac{\pi}{4}\right)+\frac{1}{2} e^{j \pi / 12} \delta\left(\Omega+\frac{\pi}{4}\right)$；  
(b) $X(\Omega)=e^{j(13 / 2) \Omega} \frac{\sin (2 \Omega)}{\sin (\Omega / 2)}$

### 11.20.3 MATLAB 练习

目前暂无 MATLAB 练习。
