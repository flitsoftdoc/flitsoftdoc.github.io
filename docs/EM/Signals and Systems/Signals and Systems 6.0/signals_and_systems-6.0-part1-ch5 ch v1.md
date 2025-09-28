# 第5章 连续时间傅里叶级数

## 5.1 引言

在信号与系统的研究中，一个非常重要的工具是傅里叶级数。非常大的一类函数可以用傅里叶级数表示，也就是大多数在实际中有用的周期函数。傅里叶级数将一个周期函数表示为复指数信号的（可能是无限的）线性组合。这种表示通常是很理想的，因为复指数信号是容易处理的函数。例如，复指数信号易于积分和微分。此外，复指数信号在与LTI（线性时不变）系统相关的性质中具有重要作用。特别地，复指数信号是LTI系统的特征函数。因此，LTI系统对复指数信号的响应仍然是相同的复指数信号，只是乘上了一个复常数。

## 5.2 连续时间傅里叶级数的定义

假设我们有一组形式为

$$
\phi_{k}(t)=e^{j k \omega_{0} t}=e^{j k(2 \pi / T) t} \quad k=0, \pm 1, \pm 2, \ldots .
$$

的谐波相关复指数信号。

第 $k$ 个复指数信号 $\phi_{k}$ 的基频为 $k \omega_{0}$，它是 $\omega_{0}$ 的整数倍。由于这些谐波相关复指数信号的基频都是 $\omega_{0}$ 的整数倍，因此它们的线性组合必然是周期信号。更具体地，这些复指数信号的线性组合具有周期 $T=\frac{2 \pi}{\omega_{0}}$。

假设我们能够将一个周期的复值函数 $x$ 表示为这些谐波相关复指数信号的线性组合：

$$
\begin{equation*}
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} \tag{5.1}
\end{equation*}
$$

这种表示称为傅里叶级数。更具体地，这是傅里叶级数的复指数形式。就术语而言，我们称（5.1）为傅里叶级数合成公式。求和中 $k=1$ 和 $k=-1$ 的项称为基频分量或一阶谐波分量，它们具有基频 $\omega_{0}$。更一般地，求和中 $k=K$ 和 $k=-K$ 的项称为第 $K$ 阶谐波分量，它们的基频为 $K \omega_{0}$。由于复指数信号是谐波相关的，函数 $x$ 是一个周期函数，其周期为 $T=\frac{2 \pi}{\omega_{0}}$（频率为 $\omega_{0}$）。

由于我们经常处理傅里叶级数，有时使用简化的记号来表示某个函数与特定的傅里叶级数系数相关会很方便。如果一个函数 $x$ 的傅里叶级数系数序列为 $c$，我们有时写作：

$$
x(t) \stackrel{\mathrm{CTFS}}{\longleftrightarrow} c_{k} .
$$

## 5.3 确定连续时间周期函数的傅里叶级数表示

给定一个任意的周期函数 $x$，我们需要找到其对应的傅里叶级数表示的方法。换句话说，我们需要一种计算傅里叶级数系数序列 $c$ 的方法。下面的定理给出了这一方法。

**定理 5.1（傅里叶级数分析公式）**  
周期函数 $x$ 的傅里叶级数系数序列 $c$（其基周期为 $T$）由下式给出：

$$
\begin{equation*}
c_{k}=\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \tag{5.2}
\end{equation*}
$$

其中，$\int_{T}$ 表示在一个长度为 $T$ 的区间上积分。

**证明**：我们从傅里叶级数的定义（式 (5.1)）开始。将该式两边同时乘以 $e^{-j n \omega_{0} t}$，得：

$$
\begin{aligned}
x(t) e^{-j n \omega_{0} t} & =\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} e^{-j n \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty} c_{k} e^{j(k-n) \omega_{0} t}
\end{aligned}
$$

在记号上，我们用 $\int_{T}$ 表示在任意长度为 $T$ 的区间（即区间 $(t_{0}, t_{0}+T)$，其中 $t_{0}$ 任意）上的积分。将上式两边在 $x$ 的一个周期 $T$ 内积分，得：

$$
\int_{T} x(t) e^{-j n \omega_{0} t} d t=\int_{T} \sum_{k=-\infty}^{\infty} c_{k} e^{j(k-n) \omega_{0} t} d t
$$

交换积分与求和的顺序，得到：

$$
\begin{equation*}
\int_{T} x(t) e^{-j n \omega_{0} t} d t=\sum_{k=-\infty}^{\infty} c_{k}\left(\int_{T} e^{j(k-n) \omega_{0} t} d t\right) \tag{5.3}
\end{equation*}
$$

注意到以下恒等式成立：

$$
\int_{T} e^{j(k-n) \omega_{0} t} d t= \begin{cases}T & k=n  \tag{5.4}\\ 0 & \text { 其他情况 }\end{cases}
$$

（该结论的证明留作练习 A.9。）将式 (5.4) 代入式 (5.3)，得到：

$$
\begin{equation*}
\int_{T} x(t) e^{-j n \omega_{0} t} d t=c_{n} T \tag{5.5}
\end{equation*}
$$

整理可得：

$$
c_{n}=\frac{1}{T} \int_{T} x(t) e^{-j n \omega_{0} t} d t
$$

因此，式 (5.2) 被称为傅里叶级数分析公式。

假设我们有一个周期为 $T$ 的复值函数 $x$，其傅里叶级数系数序列为 $c$。可以很容易证明，系数 $c_{0}$ 就是函数 $x$ 在一个周期 $T$ 内的平均值。证明如下：考虑傅里叶级数分析公式 (5.2)，将 $k=0$ 代入，得：

$$
\begin{aligned}
c_{0} & =\left.\left[\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t\right]\right|_{k=0} \\
& =\frac{1}{T} \int_{T} x(t) e^{0} d t \\
& =\frac{1}{T} \int_{T} x(t) d t
\end{aligned}
$$

因此，$c_{0}$ 就是 $x$ 在一个周期内的平均值。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-129.jpg?height=463&width=1178&top_left_y=305&top_left_x=524)  
图 5.1：周期方波

**例 5.1（周期方波的傅里叶级数）**。求图 5.1 所示周期方波 $x$ 的傅里叶级数表示。

**解。** 取 $0 \le t < T$ 的单周期来考察 $x(t)$。在此区间内，

$$
x(t)= \begin{cases}A & 0 \leq t<\frac{T}{2} \\ -A & \frac{T}{2} \leq t<T .\end{cases}
$$

设 $\omega_{0}=\frac{2\pi}{T}$。由傅里叶级数分析公式，得

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \\
& =\frac{1}{T}\left(\int_{0}^{T / 2} A e^{-j k \omega_{0} t} d t+\int_{T / 2}^{T}(-A) e^{-j k \omega_{0} t} d t\right) \\
& = \begin{cases}\frac{1}{T}\left(\left.\left[\frac{-A}{j k \omega_{0}} e^{-j k \omega_{0} t}\right]\right|_{0} ^{T / 2}+\left.\left[\frac{A}{j k \omega_{0}} e^{-j k \omega_{0} t}\right]\right|_{T / 2} ^{T}\right) & k \neq 0 \\
\frac{1}{T}\left(\left.[A t]\right|_{0} ^{T / 2}+\left.[-A t]\right|_{T / 2} ^{T}\right) & k=0\end{cases}
\end{aligned}
$$

下面分别化简 $k\neq 0$ 与 $k=0$ 两种情况的 $c_k$。先考虑 $k\neq 0$：

$$
\begin{aligned}
c_{k} & =\frac{1}{T}\left(\left.\left[\frac{-A}{j k \omega_{0}} e^{-j k \omega_{0} t}\right]\right|_{0} ^{T / 2}+\left.\left[\frac{A}{j k \omega_{0}} e^{-j k \omega_{0} t}\right]\right|_{T / 2} ^{T}\right) \\
& =\frac{-A}{j 2 \pi k}\left(\left.\left[e^{-j k \omega_{0} t}\right]\right|_{0} ^{T / 2}-\left.\left[e^{-j k \omega_{0} t}\right]\right|_{T / 2} ^{T}\right) \\
& =\frac{j A}{2 \pi k}\left(\left[e^{-j \pi k}-1\right]-\left[e^{-j 2 \pi k}-e^{-j \pi k}\right]\right) \\
& =\frac{j A}{2 \pi k}\left[2 e^{-j \pi k}-e^{-j 2 \pi k}-1\right] \\
& =\frac{j A}{2 \pi k}\left[2\left(e^{-j \pi}\right)^{k}-\left(e^{-j 2 \pi}\right)^{k}-1\right] .
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-130.jpg?height=295&width=676&top_left_y=294&top_left_x=659)  
图 5.2：周期冲激列。

注意到 $e^{-j\pi}=-1$ 且 $e^{-j2\pi}=1$，因此

$$
\begin{aligned}
c_{k} & =\frac{j A}{2 \pi k}\left[2(-1)^{k}-1^{k}-1\right] \\
& =\frac{j A}{2 \pi k}\left[2(-1)^{k}-2\right] \\
& =\frac{j A}{\pi k}\left[(-1)^{k}-1\right] \\
& = \begin{cases}\frac{-j 2 A}{\pi k} & k \text { 为奇数 } \\
0 & k \text { 为偶数， } k \neq 0 .\end{cases}
\end{aligned}
$$

现在考虑 $k=0$ 的情况：

$$
\begin{aligned}
c_{0} & =\frac{1}{T}\left(\left.[A t]\right|_{0} ^{T / 2}+\left.[-A t]\right|_{T / 2} ^{T}\right) \\
& =\frac{1}{T}\left[\frac{A T}{2}-\frac{A T}{2}\right] \\
& =0
\end{aligned}
$$

因此，$x$ 的傅里叶级数为

$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j(2 \pi / T) k t}
$$

其中

$$
c_{k}= \begin{cases}\frac{-j 2 A}{\pi k} & k \text { 为奇数 } \\ 0 & k \text { 为偶数 }\end{cases}
$$

**例 5.2（周期冲激列的傅里叶级数）**。考虑图 5.2 所示的周期冲激列 $x$。求 $x$ 的傅里叶级数表示。

**解。** 设 $\omega_{0}=\frac{2\pi}{T}$。取 $-\frac{T}{2} \le t<\frac{T}{2}$ 的单周期来考察 $x(t)$。由傅里叶级数分析公式，得

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \\
& =\frac{1}{T} \int_{-T / 2}^{T / 2} A \delta(t) e^{-j k \omega_{0} t} d t \\
& =\frac{A}{T} \int_{-T / 2}^{T / 2} \delta(t) e^{-j k \omega_{0} t} d t
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-131.jpg?height=363&width=817&top_left_y=297&top_left_x=713)  
图 5.3：周期冲激列。

利用单位冲激函数的筛检性质，上式可简化为

$$
c_{k}=\frac{A}{T}.
$$

因此，$x$ 的傅里叶级数为

$$
x(t)=\sum_{k=-\infty}^{\infty} \frac{A}{T} e^{j(2 \pi / T) k t}
$$

**例 5.3。** 考虑如图 5.3 所示、基周期为 $T=3$ 的周期函数 $x$。求 $x$ 的傅里叶级数表示。

**解。** 函数 $x$ 的基频为 $\omega_{0}=\frac{2\pi}{T}=\frac{2\pi}{3}$。取 $-\frac{T}{2} \le t<\frac{T}{2}$（即 $-\frac{3}{2}\le t<\frac{3}{2}$）的单周期来考察 $x(t)$。由傅里叶级数分析公式，得

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \\
& =\frac{1}{3} \int_{-3 / 2}^{3 / 2} x(t) e^{-j(2 \pi / 3) k t} d t \\
& =\frac{1}{3} \int_{-3 / 2}^{3 / 2}[-\delta(t+1)+\delta(t-1)] e^{-j(2 \pi / 3) k t} d t \\
& =\frac{1}{3}\left[\int_{-3 / 2}^{3 / 2}-\delta(t+1) e^{-j(2 \pi / 3) k t} d t+\int_{-3 / 2}^{3 / 2} \delta(t-1) e^{-j(2 \pi / 3) k t} d t\right] \\
& =\frac{1}{3}\left[\int_{-\infty}^{\infty}-\delta(t+1) e^{-j(2 \pi / 3) k t} d t+\int_{-\infty}^{\infty} \delta(t-1) e^{-j(2 \pi / 3) k t} d t\right] \\
& =\frac{1}{3}\left(\left.\left[-e^{-j(2 \pi / 3) k t}\right]\right|_{t=-1}+\left.\left[e^{-j(2 \pi / 3) k t}\right]\right|_{t=1}\right) \\
& =\frac{1}{3}\left[-e^{-j k(2 \pi / 3)(-1)}+e^{-j k(2 \pi / 3)(1)}\right] \\
& =\frac{1}{3}\left[e^{-j(2 \pi / 3) k}-e^{j(2 \pi / 3) k}\right] \\
& =\frac{1}{3}\left[2 j \sin \left(-\frac{2 \pi}{3} k\right)\right] \\
& =\frac{2 j}{3} \sin \left(-\frac{2 \pi}{3} k\right) \\
& =-\frac{2 j}{3} \sin \left(\frac{2 \pi}{3} k\right)
\end{aligned}
$$

因此，$x$ 的傅里叶级数表示为

$$
\begin{aligned}
x(t) & =\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty}-\frac{2 j}{3} \sin \left(\frac{2 \pi}{3} k\right) e^{j(2 \pi / 3) k t}
\end{aligned}
$$

**例 5.4（偶实函数的傅里叶级数）**。设 $x$ 是任意的周期实函数且为偶函数。记 $c$ 为 $x$ 的傅里叶级数系数序列。证明：

- $c$ 为实数序列（即对任意 $k$，$\operatorname{Im}\{c_{k}\}=0$）；
- $c$ 为偶序列（即对任意 $k$，$c_{k}=c_{-k}$）；以及
- $c_{0}=\frac{1}{T}\int_{0}^{T} x(t)\,dt$。

**解。** 由傅里叶级数分析公式 (5.2) 并应用欧拉公式，可写成

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \\
& =\frac{1}{T} \int_{T}\left(x(t)\left[\cos \left(-k \omega_{0} t\right)+j \sin \left(-k \omega_{0} t\right)\right]\right) d t
\end{aligned}
$$

由于 $\cos$ 为偶函数且 $\sin$ 为奇函数，上式可写为

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T}\left(x(t)\left[\cos \left(k \omega_{0} t\right)-j \sin \left(k \omega_{0} t\right)\right]\right) d t \\
& =\frac{1}{T}\left[\int_{T} x(t) \cos \left(k \omega_{0} t\right) d t-j \int_{T} x(t) \sin \left(k \omega_{0} t\right) d t\right]
\end{aligned}
$$

先看涉及 $\cos$ 的第一个积分。因为 $x$ 是偶函数且 $\cos(k\omega_{0} t)$ 也是偶函数，于是 $x(t)\cos(k\omega_{0} t)$ 为偶函数，因此有 $\int_{T} x(t) \cos \left(k \omega_{0} t\right) d t=2 \int_{0}^{T/2} x(t) \cos \left(k \omega_{0} t\right) d t$。再看涉及 $\sin$ 的第二个积分。因为 $x$ 为偶函数而 $\sin(k\omega_{0} t)$ 为奇函数，故 $x(t)\sin(k\omega_{0} t)$ 为奇函数。对一个奇的周期函数在一个周期（或其整数倍）上积分，结果为零。因此第二个积分为零。结合这些结果，可得

$$
\begin{align*}
c_{k} & =\frac{1}{T}\left[2 \int_{0}^{T / 2} x(t) \cos \left(k \omega_{0} t\right) d t\right] \\
& =\frac{2}{T} \int_{0}^{T / 2} x(t) \cos \left(k \omega_{0} t\right) d t \tag{5.6}
\end{align*}
$$

由于 $x$ 为实函数，$c_{k}$ 也必为实数。因此 $\operatorname{Im}(c_{k})=0$。

现在考虑 $c_{-k}$。在 (5.6) 中将 $k$ 替换为 $-k$，得到

$$
c_{-k}=\frac{2}{T} \int_{0}^{T / 2} x(t) \cos \left(-k \omega_{0} t\right) d t
$$

由于 $\cos$ 是偶函数，上式可简化为

$$
\begin{aligned}
c_{-k} & =\frac{2}{T} \int_{0}^{T / 2} x(t) \cos \left(k \omega_{0} t\right) d t \\
& =c_{k}
\end{aligned}
$$

因此 $c_{k}=c_{-k}$。

再看 $c_{0}$。将 $k=0$ 代入 (5.6)，得到

$$
\begin{aligned}
c_{0} & =\frac{2}{T} \int_{0}^{T / 2} x(t) \cos (0) d t \\
& =\frac{2}{T} \int_{0}^{T / 2} x(t) d t \\
& =\frac{2}{T}\left[\frac{1}{2} \int_{0}^{T} x(t) d t\right] \\
& =\frac{1}{T} \int_{0}^{T} x(t) d t
\end{aligned}
$$

因此 $c_{0}=\frac{1}{T} \int_{0}^{T} x(t) d t$。

**例 5.5（奇实函数的傅里叶级数）**。设 $x$ 是周期的实函数且为奇函数。记 $c$ 为 $x$ 的傅里叶级数系数序列。证明：

- $c$ 是纯虚的（即对所有 $k$，$\operatorname{Re}\{c_{k}\}=0$）；
- $c$ 是奇序列（即对所有 $k$，$c_{k}=-c_{-k}$）；以及
- $c_{0}=0$。

**解。** 由傅里叶级数分析公式 (5.2) 并结合欧拉公式，我们可写为

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T} x(t) e^{-j k \omega_{0} t} d t \\
& =\frac{1}{T}\left[\int_{T} x(t)\left[\cos \left(-k \omega_{0} t\right)+j \sin \left(-k \omega_{0} t\right)\right] d t\right]
\end{aligned}
$$

由于 $\cos$ 为偶函数而 $\sin$ 为奇函数，上式可改写为

$$
\begin{aligned}
c_{k} & =\frac{1}{T}\left[\int_{T} x(t)\left[\cos \left(k \omega_{0} t\right)-j \sin \left(k \omega_{0} t\right)\right] d t\right] \\
& =\frac{1}{T}\left[\int_{T} x(t) \cos \left(k \omega_{0} t\right) d t-j \int_{T} x(t) \sin \left(k \omega_{0} t\right) d t\right]
\end{aligned}
$$

先看上式中与 $\cos$ 有关的第一个积分。因为 $x$ 为奇函数而 $\cos(k\omega_{0} t)$ 为偶函数，故 $x(t)\cos(k\omega_{0} t)$ 为奇函数。对一个奇的周期函数在一个周期（或其整数倍）上积分，结果为零。因此第一个积分为零。再看与 $\sin$ 有关的第二个积分。由于 $x$ 为奇函数且 $\sin(k\omega_{0} t)$ 也是奇函数，故 $x(t)\sin(k\omega_{0} t)$ 为偶函数。因此有 $\int_{T} x(t) \sin \left(k \omega_{0} t\right) d t=2 \int_{0}^{T / 2} x(t) \sin \left(k \omega_{0} t\right) d t$。结合这些结果，可写为

$$
\begin{align*}
c_{k} & =\frac{-j}{T} \int_{T} x(t) \sin \left(k \omega_{0} t\right) d t \\
& =\frac{-j 2}{T} \int_{0}^{T / 2} x(t) \sin \left(k \omega_{0} t\right) d t \tag{5.7}
\end{align*}
$$

由于 $x$ 为实函数，积分结果为实数，因此 $c_{k}$ 为纯虚数。于是 $\operatorname{Re}\{c_{k}\}=0$。

现在考察 $c_{-k}$。在 (5.7) 中将 $k$ 替换为 $-k$，得到

$$
\begin{aligned}
c_{-k} & =\frac{-j 2}{T} \int_{0}^{T / 2} x(t) \sin \left(-k \omega_{0} t\right) d t \\
& =\frac{-j 2}{T} \int_{0}^{T / 2} x(t)\left[-\sin \left(k \omega_{0} t\right)\right] d t \\
& =\frac{j 2}{T} \int_{0}^{T / 2} x(t) \sin \left(k \omega_{0} t\right) d t \\
& =-c_{k}
\end{aligned}
$$

因此 $c_{k}=-c_{-k}$。

最后考察 $c_{0}$。在表达式 (5.7) 中令 $k=0$，得

$$
\begin{aligned}
c_{0} & =\frac{-j 2}{T} \int_{0}^{T / 2} x(t) \sin (0) d t \\
& =0
\end{aligned}
$$

因此 $c_{0}=0$。

## 5.4 连续时间傅里叶级数的收敛性

到目前为止，我们已经假设给定的周期函数 $x$ 可以用傅里叶级数表示。由于傅里叶级数包含无限多个项（其中无穷多个可能非零），我们需要更仔细地讨论其收敛性问题。换句话说，我们想要知道在什么条件下 $x$ 的傅里叶级数能够（以某种意义下）收敛到 $x$。

假设我们有一个任意的周期函数 $x$。该函数的傅里叶级数由 (5.1) 和 (5.2) 给出。记有限级数为

$$
x_{N}(t)=\sum_{k=-N}^{N} c_{k} e^{j k \omega_{0} t} .
$$

（即 $x_{N}$ 是傅里叶级数在第 $N$ 次谐波截断后的形式）。其近似误差为

$$
e_{N}(t)=x(t)-x_{N}(t) .
$$

同时定义均方误差（MSE）为

$$
E_{N}=\frac{1}{T} \int_{T}\left|e_{N}(t)\right|^{2} d t
$$

在进一步研究之前，我们需要更准确地说明收敛的含义。这是必要的，因为收敛可以有不同的定义。例如，常见的两类收敛是：逐点收敛和 MSE 收敛。逐点收敛的情况是指在每一点上误差趋于零。如果逐点收敛并且收敛速度在各处相同，我们称之为一致收敛。而在 MSE 收敛的情况下，均方误差趋于零，但这并不必然意味着在每个点上误差趋于零。

下面我们介绍几个关于傅里叶级数对不同类型周期函数收敛性的关键结果。第一个结果针对连续函数，如下所示。

**定理 5.2**（傅里叶级数的收敛性（连续情况））。如果周期函数 $x$ 是连续的，并且其傅里叶级数系数序列 $c$ 是绝对可和的（即 $\sum_{k=-\infty}^{\infty}\left|c_{k}\right|<\infty$），那么 $x$ 的傅里叶级数表示在整个区间上都是一致收敛的（即在每一点收敛，并且收敛速度处处相同）。

证明。本定理的严格证明比较复杂，此处略去。  

换句话说，在上述定理中，如果 $x$ 是连续的，那么当 $N \rightarrow \infty$ 时，对于所有 $t$，有 $e_{N}(t) \rightarrow 0$。然而，通常我们需要处理非连续函数。例如，许多有用的周期函数并非连续（例如方波）。因此，我们必须考虑具有不连续点的函数的收敛性问题。

另一个关于收敛的重要结果适用于在单周期内具有有限能量的函数。从数学上讲，如果函数 $x$ 满足
$$
\int_{T}|x(t)|^{2} d t<\infty
$$
则称其在单周期内具有有限能量。对于这样的函数，我们有以下重要结果。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-135.jpg?height=328&width=817&top_left_y=297&top_left_x=715)

图 5.4：周期函数 $x$。

**定理 5.3（傅里叶级数收敛性，有限能量情形）。** 若周期函数 $x$ 在单周期内能量有限（即 $\int_{T}|x(t)|^{2} d t<\infty$），则傅里叶级数以 MSE 意义收敛。

**证明。** 该定理的严格证明较为复杂，这里略去。

换句话说，根据上述定理，如果 $x$ 能量有限，则当 $N \rightarrow \infty$ 时，$E_{N} \rightarrow 0$。

最后一个重要的收敛性结果与所谓的 **狄利克雷(Dirichlet)${ }^{1}$条件** 有关。周期函数 $x$ 的狄利克雷条件如下：

1. 在一个周期内，$x$ 是绝对可积的（即 $\int_{T}|x(t)| d t<\infty$）；
2. 在一个周期内，$x$ 有有限个极大值和极小值（即 $x$ 有界变差）；
3. 在任意有限区间内，$x$ 有有限个有限的不连续点。
> ${ }^{1}$ 发音为 Dee-ree-klay。


**定理 5.4（傅里叶级数收敛性，狄利克雷情形）。** 若 $x$ 为满足狄利克雷条件的周期函数，则：

1. 傅里叶级数在所有点逐点收敛于 $x$，除了在 $x$ 的不连续点；
2. 在每个不连续点 $t_{a}$，傅里叶级数收敛到 $\frac{1}{2}\left(x\left(t_{a}^{-}\right)+x\left(t_{a}^{+}\right)\right)$，其中 $x\left(t_{a}^{-}\right)$ 与 $x\left(t_{a}^{+}\right)$ 分别表示不连续点左右的函数值。

换句话说，如果狄利克雷条件满足，则当 $N \rightarrow \infty$ 时，$e_{N}(t) \rightarrow 0$ 对所有 $t$ 成立，除了不连续点。而在不连续点处，傅里叶级数收敛到不连续点左右函数值的平均值。

---

**例 5.6。** 考虑周期函数 $x$，其周期 $T=2$，如图 5.4 所示。记 $\hat{x}$ 为 $x$ 的傅里叶级数表示（即 $\hat{x}(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}$，其中 $\omega_{0}=\pi$）。求 $\hat{x}(0)$ 与 $\hat{x}(1)$。

**解。** 首先注意到 $x$ 满足狄利克雷条件。因此可应用定理 5.4。于是有

$$
\begin{aligned}
\hat{x}(0) & =\frac{1}{2}\left[x\left(0^{-}\right)+x\left(0^{+}\right)\right] \\
& =\frac{1}{2}(0+1) \\
& =\frac{1}{2} \quad \text { 且 } \\
\hat{x}(1) & =\frac{1}{2}\left[x\left(1^{-}\right)+x\left(1^{+}\right)\right] \\
& =\frac{1}{2}(1+0) \\
& =\frac{1}{2} .
\end{aligned}
$$

---

尽管许多实际中感兴趣的函数满足狄利克雷条件，但并非所有函数都满足。以下给出几个违反这些条件的例子。

考虑 1-周期函数 $x$，定义为

$$
x(t)=t^{-1} \quad 0 \leq t<1 \quad \text{且} \quad x(t)=x(t+1)
$$

如图 5.5(a) 所示。该函数违反了第一个狄利克雷条件，因为 $x$ 在单周期上不可绝对可积。

再考虑 1-周期函数 $x$，定义为

$$
x(t)=\sin \left(2 \pi t^{-1}\right) \quad 0<t \leq 1 \quad \text{且} \quad x(t)=x(t+1) .
$$

如图 5.5(b) 所示。由于 $x$ 在单周期内有无限多个极大值和极小值，$x$ 违反了第二个狄利克雷条件。

再考虑图 5.5(c) 所示的 1-周期函数 $x$。当 $t$ 从 0 到 1 变化时，$x(t)$ 呈阶梯状变化，每一步的高度是前一步的一半。事实上，在 $[0,1]$ 内存在无限多个阶梯。因而 $x$ 在单周期内有无限多个不连续点，违反了第三个狄利克雷条件。

或许会有人疑问：傅里叶级数对带不连续点的周期函数如何收敛？我们来看例 5.1 中的周期方波。在图 5.6 中，我们绘制了方波（周期 $T=1$，幅度 $A=1$）的截断傅里叶级数 $x_{N}$，取若干不同 $N$ 值。从 $x$ 的不连续点处可以看到，级数似乎收敛到不连续点左右函数值的平均值。然而在不连续点附近，截断级数 $x_{N}$ 出现波纹，并且随着 $N$ 增大，这些波纹的峰值振幅并没有减小。实际上，随着 $N$ 增大，波纹会压缩到不连续点附近，但对于任意有限 $N$，波纹的峰值振幅保持不变。这种现象称为 **吉布斯现象（Gibbs phenomenon）**。

## 5.5 连续时间傅里叶级数的性质

傅里叶级数表示具有许多重要的性质。在接下来的各节中，我们将介绍其中的一些性质。为了方便，这些性质也将在后面的表 5.1（第 137 页）中进行总结。

### 5.5.1 线性

可以说，傅里叶级数最重要的性质是线性，具体如下所述。

**定理 5.5（线性）**  
设 $x$ 和 $y$ 为周期为 $T$ 的两个周期函数，其频率为 $\omega_{0}=\frac{2 \pi}{T}$。如果

$$
x(t) \stackrel{C T F S}{\longleftrightarrow} a_{k} \quad \text{且} \quad y(t) \stackrel{C T F S}{\longleftrightarrow} b_{k},
$$

则有

$$
A x(t)+B y(t) \stackrel{C T F S}{\longleftrightarrow} A a_{k}+B b_{k}
$$

其中 $A$ 和 $B$ 为复数常数。换句话说，函数的线性组合会产生其傅里叶级数系数的相同线性组合。

**证明**  
为了证明上述性质，我们按如下步骤进行。首先，将 $x$ 和 $y$ 表示为其对应的傅里叶级数形式：

$$
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \quad \text{且} \quad y(t)=\sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-137.jpg?height=1778&width=1371&top_left_y=416&top_left_x=434)
**图 5.5**：违反狄利克雷条件的函数示例。（a）在单个周期上不可绝对积分的函数。（b）在单个周期上有无限多个极大值和极小值的函数。（c）在单个周期上具有无限多个不连续点的函数。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-138.jpg?height=1211&width=1560&top_left_y=726&top_left_x=218)
**图 5.6**：吉布斯现象。周期方波在截断至第 $N$ 个谐波分量后的傅里叶级数，分别为 (a) $N=3$，(b) $N=7$，(c) $N=11$，(d) $N=101$。

现在，我们求 $A x + B y$ 的傅里叶级数。我们有：

$$
\begin{aligned}
A x(t)+B y(t) & =A \sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t}+B \sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty} A a_{k} e^{j k \omega_{0} t}+\sum_{k=-\infty}^{\infty} B b_{k} e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty}\left(A a_{k}+B b_{k}\right) e^{j k \omega_{0} t}
\end{aligned}
$$

因此，我们得到 $A x(t)+B y(t) \stackrel{\text {CTFS}}{\longleftrightarrow} A a_{k}+B b_{k}$。

### 5.5.2 时间平移（位移）

接下来要介绍的傅里叶级数性质是时间平移（即位移）性质，如下所示。

**定理 5.6（时间平移（即位移））**  
设 $x$ 为周期为 $T$ 的周期函数，其频率为 $\omega_{0}=\frac{2 \pi}{T}$。如果

$$
x(t) \stackrel{C T F S}{\longleftrightarrow} a_{k},
$$

则有

$$
x\left(t-t_{0}\right) \stackrel{C T F S}{\longleftrightarrow} e^{-j k \omega_{0} t_{0}} a_{k}=e^{-j k(2 \pi / T) t_{0}} a_{k},
$$

其中 $t_{0}$ 为实常数。

**证明**  
为了证明时间平移性质，我们按如下步骤进行。$x$ 的傅里叶级数为：

$$
\begin{equation*}
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \tag{5.8}
\end{equation*}
$$

将 $x\left(t-t_{0}\right)$ 表示为其傅里叶级数，并通过代数运算得到：

$$
\begin{align*}
x\left(t-t_{0}\right) & =\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0}\left(t-t_{0}\right)} \\
& =\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} e^{-j k \omega_{0} t_{0}} \\
& =\sum_{k=-\infty}^{\infty}\left(a_{k} e^{-j k \omega_{0} t_{0}}\right) e^{j k \omega_{0} t} . \tag{5.9}
\end{align*}
$$

比较 (5.8) 和 (5.9)，可得

$$
x\left(t-t_{0}\right) \stackrel{\mathrm{CTFS}}{\longleftrightarrow} e^{-j k \omega_{0} t_{0}} a_{k}.
$$

从上述定理可以看出，对周期函数进行时间平移不会改变其傅里叶级数系数的幅值（因为对任意实数 $\theta$，有 $\left|e^{j \theta}\right|=1$）。

### 5.5.3 频率平移（调制）

接下来要介绍的傅里叶级数性质是频率平移（即调制）性质，如下所示。

**定理 5.7（频率平移（即调制））**  
设 $x$ 为周期为 $T$ 的周期函数，其频率为 $\omega_{0}=\frac{2 \pi}{T}$。如果

$$
x(t) \stackrel{C T F S}{\longleftrightarrow} a_{k},
$$

则有

$$
e^{j M(2 \pi / T) t} x(t)=e^{j M \omega_{0} t} x(t) \stackrel{C T F S}{\longleftrightarrow} a_{k-M},
$$

其中 $M$ 为整数常数。

**证明**  
为了证明频率平移性质，我们按如下步骤进行：

$$
\begin{aligned}
e^{j(2 \pi / T) M t} x(t) & =e^{j(2 \pi / T) M t} \sum_{k=-\infty}^{\infty} a_{k} e^{j(2 \pi / T) k t} \\
& =\sum_{k=-\infty}^{\infty} a_{k} e^{j(2 \pi / T) M t} e^{j(2 \pi / T) k t} \\
& =\sum_{k=-\infty}^{\infty} a_{k} e^{j(2 \pi / T)(k+M) t}
\end{aligned}
$$

现在，引入变量替换：设 $k^{\prime}=k+M$，则 $k=k^{\prime}-M$。应用变量替换并去掉下标撇号，得到：

$$
e^{j(2 \pi / T) M t} x(t)=\sum_{k=-\infty}^{\infty} a_{k-M} e^{j(2 \pi / T) k t}
$$

可见，该式右侧即为傅里叶级数。因此，$e^{j(2 \pi / T) M t} x(t)$ 的傅里叶级数系数序列为 $a^{\prime}(k)=a_{k-M}$。

### 5.5.4 时间反转（反射）

接下来要介绍的傅里叶级数性质是时间反转（即反射）性质，如下所示。

**定理 5.8（时间反转（即反射））**  
设 $x$ 为周期为 $T$ 的周期函数，其频率为 $\omega_{0}=\frac{2 \pi}{T}$。如果

$$
x(t) \stackrel{C T F S}{\longleftrightarrow} a_{k},
$$

则有

$$
x(-t) \stackrel{C T F S}{\longleftrightarrow} a_{-k} .
$$

**证明**  
为了证明时间反转性质，我们按如下步骤进行。$x$ 的傅里叶级数为：

$$
\begin{equation*}
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \tag{5.10}
\end{equation*}
$$

现在，考虑 $x(-t)$ 的傅里叶级数展开，其傅里叶级数为：

$$
\begin{equation*}
x(-t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0}(-t)} \tag{5.11}
\end{equation*}
$$

引入变量替换：设 $l=-k$，则 $k=-l$。进行该变量替换后，可将 (5.11) 重写为：

$$
\begin{align*}
x(-t) & =\sum_{l=-\infty}^{\infty} a_{-l} e^{j(-l) \omega_{0}(-t)} \\
& =\sum_{l=-\infty}^{\infty} a_{-l} e^{j l \omega_{0} t} . \tag{5.12}
\end{align*}
$$

比较 (5.10) 和 (5.12)，可得

$$
x(-t) \stackrel{\text { CTFS }}{\longleftrightarrow} a_{-k}.
$$

换句话说，上述定理表明，函数的时间反转会使其对应的傅里叶级数系数序列也发生时间反转。

### 5.5.5 共轭

接下来要介绍的傅里叶级数性质是共轭性质，如下所示。

**定理 5.9（共轭）**  
对于具有傅里叶级数系数序列 $c$ 的周期为 $T$ 的函数 $x$，有：

$$
x^{*}(t) \stackrel{C T F S}{\longleftrightarrow} c_{-k}^{*}
$$

**证明**  
由傅里叶级数的定义，我们有：

$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}
$$

对上述等式两边取复共轭，得到：

$$
\begin{aligned}
x^{*}(t) & =\left(\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}\right)^{*} \\
& =\sum_{k=-\infty}^{\infty}\left(c_{k} e^{j k \omega_{0} t}\right)^{*} \\
& =\sum_{k=-\infty}^{\infty} c_{k}^{*} e^{-j k \omega_{0} t} .
\end{aligned}
$$

在上述求和中，将 $k$ 替换为 $-k$，得到：

$$
x^{*}(t)=\sum_{k=-\infty}^{\infty} c_{-k}^{*} e^{j k \omega_{0} t}
$$

因此，$x^{*}$ 的傅里叶级数系数序列 $c^{\prime}$ 为 $c_{k}^{\prime}=c_{-k}^{*}$。

换句话说，上述定理表明，对函数取共轭会导致其对应的傅里叶级数系数序列既发生时间反转又取共轭。

### 5.5.6 周期卷积

接下来要介绍的傅里叶级数性质是周期卷积性质，如下所示。

**定理 5.10（周期卷积）**  
设 $x$ 和 $y$ 为周期为 $T$ 的函数，其傅里叶级数表示为：

$$
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \quad \text{且} \quad y(t)=\sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t}
$$

其中 $\omega_{0}=\frac{2 \pi}{T}$。设 $z(t)=x \circledast y(t)$，其傅里叶级数表示为：

$$
z(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}
$$

则序列 $a, b$ 与 $c$ 的关系为：

$$
c_{k}=T a_{k} b_{k}
$$

**证明**  
在下文中，设 $\delta$ 表示冲激序列（即 $\delta(n)$ 在 $n=0$ 时为 1，其余为 0）。由周期卷积的定义，有：

$$
\begin{align*}
x \circledast y(t) & =\int_{T} x(\tau) y(t-\tau) d \tau \\
& =\int_{T}\left(\sum_{\ell=-\infty}^{\infty} a_{\ell} e^{j \omega_{0} \ell \tau}\right)\left(\sum_{k=-\infty}^{\infty} b_{k} e^{j \omega_{0} k(t-\tau)}\right) d \tau \\
& =\int_{T} \sum_{k=-\infty}^{\infty} \sum_{\ell=-\infty}^{\infty} a_{\ell} b_{k} e^{j \omega_{0} \ell \tau} e^{j \omega_{0} k(t-\tau)} d \tau \\
& =\int_{T} \sum_{k=-\infty}^{\infty} \sum_{\ell=-\infty}^{\infty} a_{\ell} b_{k} e^{j \omega_{0} k t} e^{j \omega_{0}(\ell-k) \tau} d \tau \\
& =\sum_{k=-\infty}^{\infty} \sum_{\ell=-\infty}^{\infty} a_{\ell} b_{k} e^{j \omega_{0} k t} \int_{T} e^{j \omega_{0}(\ell-k) \tau} d \tau \\
& =\sum_{k=-\infty}^{\infty} \sum_{\ell=-\infty}^{\infty} a_{\ell} b_{k} e^{j \omega_{0} k t} T \delta(\ell-k) \\
& =\sum_{k=-\infty}^{\infty} a_{k} b_{k} e^{j \omega_{0} k t} T \\
& =\sum_{k=-\infty}^{\infty} T a_{k} b_{k} e^{j \omega_{0} k t} \tag{5.13}
\end{align*}
$$

在上述简化过程中，我们使用了以下事实：

$$
\begin{aligned}
\int_{T} e^{j(2 \pi / T) k t} d t & = \begin{cases}T & k=0 \\ 0 & \text{否则} \end{cases} \\
& =T \boldsymbol{\delta}(k)
\end{aligned}
$$

现在，我们可以观察到 (5.13) 的右侧即为傅里叶级数。因此，$x \circledast y$ 的傅里叶级数系数序列 $c$ 为：

$$
c_{k}=T a_{k} b_{k}.
$$

### 5.5.7 乘法

接下来要考虑的傅里叶级数性质是乘法性质，如下所示。

**定理 5.11（乘法）**  
设 $x$ 和 $y$ 为周期为 $T$ 的函数，其傅里叶级数表示为：

$$
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \quad \text{且} \quad y(t)=\sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t}
$$

其中 $\omega_{0}=\frac{2 \pi}{T}$。设 $z(t)=x(t) y(t)$，其傅里叶级数表示为：

$$
z(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}
$$

则序列 $a, b$ 与 $c$ 的关系为：

$$
c_{k}=\sum_{n=-\infty}^{\infty} a_{n} b_{k-n}
$$

（即 $c$ 为序列 $a$ 和 $b$ 的离散时间卷积）。

**证明**  
由傅里叶级数分析公式，可写为：

$$
c_{k}=\frac{1}{T} \int_{T} x(t) y(t) e^{-j(2 \pi / T) k t} d t
$$

将 $x$ 代入其傅里叶级数表示，得到：

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \int_{T}\left(\sum_{n=-\infty}^{\infty} a_{n} e^{j(2 \pi / T) n t}\right) y(t) e^{-j(2 \pi / T) k t} d t \\
& =\frac{1}{T} \int_{T} \sum_{n=-\infty}^{\infty} a_{n} e^{j(2 \pi / T) n t} y(t) e^{-j(2 \pi / T) k t} d t
\end{aligned}
$$

交换求和与积分的顺序，得到：

$$
\begin{aligned}
c_{k} & =\frac{1}{T} \sum_{n=-\infty}^{\infty} \int_{T} a_{n} e^{j(2 \pi / T) n t} y(t) e^{-j(2 \pi / T) k t} d t \\
& =\sum_{n=-\infty}^{\infty} a_{n}\left(\frac{1}{T} \int_{T} y(t) e^{-j(2 \pi / T)(k-n) t} d t\right)
\end{aligned}
$$

注意上式大括号中的表达式正是求 $y$ 的第 $(k-n)$ 个傅里叶级数系数的公式，因此可得：

$$
c_{k}=\sum_{n=-\infty}^{\infty} a_{n} b_{k-n}.
$$

### 5.5.8 帕塞瓦尔关系

傅里叶级数的另一个重要性质涉及函数和序列的能量，如下定理所示。

**定理 5.12（帕塞瓦尔关系）**  
周期函数 $x$ 及其傅里叶级数系数序列 $c$ 满足关系：

$$
\frac{1}{T} \int_{T}|x(t)|^{2} d t=\sum_{k=-\infty}^{\infty}\left|c_{k}\right|^{2}
$$

（即 $x$ 的能量与 $c$ 的能量相等）。

**证明**  
设 $x, y, z$ 为周期为 $T$ 的函数，其傅里叶级数为：

$$
\begin{gathered}
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t} \\
y(t)=\sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t}, \quad \text {且} \\
z(t)=x(t) y(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}.
\end{gathered}
$$

由傅里叶级数的乘法性质（即定理 5.11），有：

$$
\begin{equation*}
c_{k}=\sum_{n=-\infty}^{\infty} a_{n} b_{k-n} \tag{5.14}
\end{equation*}
$$

现在令 $y(t)=x^{*}(t)$，则 $z(t)=x(t) x^{*}(t)=|x(t)|^{2}$。由傅里叶级数的共轭性质（即定理 5.9），由于 $y(t)=x^{*}(t)$，我们有：

$$
b_{k}=a_{-k}^{*}
$$

因此可将 (5.14) 重写为：

$$
\begin{align*}
c_{k} & =\sum_{n=-\infty}^{\infty} a_{n} a_{-(k-n)}^{*} \\
& =\sum_{n=-\infty}^{\infty} a_{n} a_{n-k}^{*} . \tag{5.15}
\end{align*}
$$

由傅里叶级数分析公式，有：

$$
\begin{equation*}
c_{k}=\frac{1}{T} \int_{T}|x(t)|^{2} e^{-j k \omega_{0} t} d t \tag{5.16}
\end{equation*}
$$

将 (5.15) 与 (5.16) 对应相等，得到：

$$
\frac{1}{T} \int_{T}|x(t)|^{2} e^{-j k \omega_{0} t} d t=\sum_{n=-\infty}^{\infty} a_{n} a_{n-k}^{*}
$$

令 $k=0$，得到：

$$
\frac{1}{T} \int_{T}|x(t)|^{2} d t=\sum_{n=-\infty}^{\infty} a_{n} a_{n}^{*}=\sum_{n=-\infty}^{\infty}\left|a_{n}\right|^{2}
$$

上述定理表明，$x$ 的能量（即 $\frac{1}{T} \int_{T}|x(t)|^{2} d t$）与傅里叶级数系数序列 $c$ 的能量（即 $\sum_{k=-\infty}^{\infty}\left|c_{k}\right|^{2}$）相等。换句话说，函数与其傅里叶级数系数序列之间的变换保持能量不变。

### 5.5.9 偶对称与奇对称

傅里叶级数保持信号的对称性。换句话说，有以下结论。

**定理 5.13（偶/奇对称）**  
对于周期为 $T$ 的函数 $x$ 及其傅里叶级数系数序列 $c$，有以下性质：

$$
\begin{gathered}
x \text{ 是偶函数当且仅当 } c \text{ 是偶序列；} \quad \text{且} \\
x \text{ 是奇函数当且仅当 } c \text{ 是奇序列。}
\end{gathered}
$$

**证明**  
证明留作习题，参见练习 5.4。

换句话说，上述定理表明，$x$ 与 $c$ 的偶/奇对称性质总是匹配的（即傅里叶级数保持对称性）。

### 5.5.10 实函数

考虑周期函数 $x$ 的傅里叶级数表示（见公式 (5.1)）。在最一般的情况下，$x$ 是复值函数，但我们现在假设 $x$ 为实值函数。对于实值函数，傅里叶级数系数 $c_{k}$ 与 $c_{-k}$ 之间存在重要关系，如下定理所示。

**定理 5.14（实值函数的傅里叶级数）**  
设 $x$ 为周期函数，其傅里叶级数系数序列为 $c$。当且仅当

$$
c_{k}=c_{-k}^{*} \text{ 对所有 } k \text{ 成立 } \tag{5.17}
$$

时，$x$ 为实值函数（即 $c$ 是共轭对称的）。

**证明**  
假设 $x$ 可以表示为傅里叶级数形式：

$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} \tag{5.18}
$$

对上述等式两边取复共轭，得到：

$$
\begin{aligned}
x^{*}(t) & =\left(\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}\right)^{*} \\
& =\sum_{k=-\infty}^{\infty}\left(c_{k} e^{j k \omega_{0} t}\right)^{*} \\
& =\sum_{k=-\infty}^{\infty} c_{k}^{*} e^{-j k \omega_{0} t} .
\end{aligned}
$$

在求和中将 $k$ 替换为 $-k$，得到：

$$
x^{*}(t)=\sum_{k=-\infty}^{\infty} c_{-k}^{*} e^{j k \omega_{0} t} \tag{5.19}
$$

如果 $x$ 是实值函数，则 $x^{*}=x$，从而 (5.18) 与 (5.19) 的右侧必须相等，说明 $c_{k}=c_{-k}^{*}$ 对所有 $k$ 成立。

反之，如果 $c_{k}=c_{-k}^{*}$ 对所有 $k$ 成立，则 (5.18) 与 (5.19) 的右侧相等，说明 $x^{*}=x$，即 $x$ 为实值函数。

利用 (5.17) 的关系，可以得到实值函数傅里叶级数的两种替代形式。首先，将 (5.1) 改写为：

$$
x(t)=c_{0}+\sum_{k=1}^{\infty}\left[c_{k} e^{j k \omega_{0} t}+c_{-k} e^{-j k \omega_{0} t}\right]
$$

代入 $c_{k}=c_{-k}^{*}$，得到：

$$
x(t)=c_{0}+\sum_{k=1}^{\infty}\left[c_{k} e^{j k \omega_{0} t}+c_{k}^{*} e^{-j k \omega_{0} t}\right]
$$

注意求和内的两项互为复共轭，因此可改写为：

$$
x(t)=c_{0}+\sum_{k=1}^{\infty} 2 \operatorname{Re}\left(c_{k} e^{j k \omega_{0} t}\right) \tag{5.20}
$$

将 $c_{k}$ 表示为极坐标形式：

$$
c_{k}=\left|c_{k}\right| e^{j \theta_{k}}
$$

其中 $\theta_{k}$ 为实数（即 $\theta_{k}=\arg c_{k}$）。代入 (5.20) 得：

$$
x(t)=c_{0}+2 \sum_{k=1}^{\infty}\left|c_{k}\right| \cos \left(k \omega_{0} t+\theta_{k}\right)
$$

（其中 $\theta_{k}=\arg c_{k}$），这称为傅里叶级数的**组合三角形式**。

另一种形式是将 $c_{k}$ 用笛卡尔形式表示：

$$
c_{k}=\frac{1}{2}\left(a_{k}-j b_{k}\right)
$$

其中 $a_{k}$ 与 $b_{k}$ 为实数。代入 (5.20) 得：

$$
x(t)=c_{0}+\sum_{k=1}^{\infty}\left[a_{k} \cos \left(k \omega_{0} t\right)+b_{k} \sin \left(k \omega_{0} t\right)\right]
$$

（其中 $a_{k}=\operatorname{Re}\left(2 c_{k}\right)$，$b_{k}=-\operatorname{Im}\left(2 c_{k}\right)$），这称为傅里叶级数的**三角形式**。

比较以上各种形式可知，$c_{k}, a_{k}, b_{k}, \theta_{k}$ 之间的关系为：

$$
2 c_{k}=a_{k}-j b_{k} \quad \text{且} \quad c_{k}=\left|c_{k}\right| e^{j \theta_{k}}
$$

（三角形式与组合三角形式只涉及实数，而指数形式涉及复数，因此在处理实值函数的傅里叶级数时，三角形式通常更方便）。

如定理 5.14 所述，实值函数的傅里叶级数具有特殊结构。具体而言，函数 $x$ 为实值当且仅当其傅里叶级数系数序列 $c$ 满足 $c_{k}=c_{-k}^{*}$ 对所有 $k$ 成立（即 $c$ 是共轭对称的）。因此，对于实值函数，负指数系数是冗余的，可由非负指数系数完全确定。由复数性质可得：

$$
c_{k}=c_{-k}^{*} \text{ 对所有 } k
$$

等价于

$$
\left|c_{k}\right|=\left|c_{-k}\right| \text{ 对所有 } k \quad \text{且} \quad \arg c_{k}=-\arg c_{-k} \text{ 对所有 } k
$$

（即 $\left|c_{k}\right|$ 为偶函数，$\arg c_{k}$ 为奇函数）。注意，$x$ 为实值并不意味着 $c$ 必须是实数。

## 5.6 傅里叶级数与频谱

傅里叶级数用谐波相关的复正弦函数来表示一个函数。从这个意义上说，傅里叶级数捕捉了函数的频率信息。每个复正弦函数对应一个特定的频率（该频率为基频的整数倍）。因此，这些系数表示函数的信息/能量集中在哪些频率。例如，如果只有低阶谐波的傅里叶系数具有较大幅值，则该函数主要与低频相关。另一方面，如果一个函数在高阶谐波上有许多大幅值系数，则该函数在高频上包含相当多的信息/能量。通过这种方式，傅里叶级数提供了一种测量函数频率内容的方法。函数在不同频率上的能量/信息分布称为函数的**频谱**。

**表 5.1：连续时间傅里叶级数的性质**  

| 性质 | 时域 | 傅里叶域 |
| :--- | :--- | :--- |
| 线性 | $\alpha x(t)+\beta y(t)$ | $\alpha a_{k}+\beta b_{k}$ |
| 平移 | $x\left(t-t_{0}\right)$ | $e^{-j k(2 \pi / T) t_0} a_k$ |
| 调制 | $e^{j M(2 \pi / T) t} x(t)$ | $a_{k-M}$ |
| 反射 | $x(-t)$ | $a_{-k}$ |
| 共轭 | $x^{*}(t)$ | $a_{-k}^*$ |
| 周期卷积 | $x \circledast y(t)$ | $T a_k b_k$ |
| 乘法 | $x(t) y(t)$ | $\sum_{n=-\infty}^{\infty} a_n b_{k-n}$ |

| 性质 |  |
| :--- | :--- |
| 帕塞瓦尔关系 | $\frac{1}{T} \int_{T}\|x(t)\|^{2} d t=\sum_{k=-\infty}^{\infty}\left\|a_{k}\right\|^{2}$ |
| 偶对称 | $x$ 为偶函数 $\Leftrightarrow a$ 为偶序列 |
| 奇对称 | $x$ 为奇函数 $\Leftrightarrow a$ 为奇序列 |
| 实函数 | $x$ 为实函数 $\Leftrightarrow a$ 为共轭对称 |

为了更深入理解傅里叶级数系数 $c_{k}$ 在函数 $x$ 的频谱中的作用，可以将傅里叶级数用极坐标形式表示如下：

$$
\begin{aligned}
x(t) & =\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty}\left|c_{k}\right| e^{j \arg c_{k}} e^{j k \omega_{0} t} \\
& =\sum_{k=-\infty}^{\infty}\left|c_{k}\right| e^{j\left(k \omega_{0} t+\arg c_{k}\right)}
\end{aligned}
$$

显然（从最后一行可见），求和中的第 $k$ 项对应一个频率为 $k \omega_{0}$ 的复正弦函数，其振幅被放大 $\left|c_{k}\right|$ 倍，并因 $\arg c_{k}$ 产生时间偏移。对于给定的 $k$，$\left|c_{k}\right|$ 越大，对应的复正弦 $e^{j k \omega_{0} t}$ 的幅度越大，因此第 $k$ 项（对应频率 $k \omega_{0}$）对总和的贡献也越大。由此，我们可以用 $\left|c_{k}\right|$ 来衡量函数 $x$ 在频率 $k \omega_{0}$ 上的信息量。

展示函数频谱的方法有多种。通常，将傅里叶级数系数随频率绘制。由于傅里叶系数一般为复数，我们通常用两幅图来表示：一幅显示系数幅值随频率变化的曲线，称为**幅度谱**；另一幅显示系数相位（即系数的幅角）随频率变化的曲线，称为**相位谱**。

由于傅里叶级数仅在基频的整数倍上具有频率分量，因此只在这些特定频率上有值可绘制。换句话说，频谱在自变量（频率）上是离散的。因此，我们使用**茎状图**来绘制此类函数。由于图形通常为多条垂直线，因此这种频谱被称为**线谱**。

回忆，对于实函数 $x$，傅里叶级数系数序列 $c$ 是共轭对称的（即 $c_{k}=c_{-k}^{*}$ 对所有 $k$）。这意味着 $\left|c_{k}\right|=\left|c_{-k}\right|$ 且 $\arg c_{k}=-\arg c_{-k}$。因此，实函数的幅度谱总是偶函数，相位谱总是奇函数。

**例 5.7.** 考虑 1 周期函数 $x$，其傅里叶级数表示为

$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j 2 \pi k t}
$$

其中

$$
c_{k}= \begin{cases}\frac{j}{20} & k=-7 \\ \frac{2 j}{20} & k=-5 \\ \frac{4 j}{20} & k=-3 \\ \frac{13 j}{20} & k=-1 \\ -\frac{13 j}{20} & k=1 \\ -\frac{4 j}{20} & k=3 \\ -\frac{2 j}{20} & k=5 \\ -\frac{j}{20} & k=7 \\ 0 & \text { 其他情况 }\end{cases}
$$

换句话说，我们有

$$
\begin{array}{r}
x(t)=\frac{j}{20} e^{-j 14 \pi t}+\frac{2 j}{20} e^{-j 10 \pi t}+\frac{4 j}{20} e^{-j 6 \pi t}+\frac{13 j}{20} e^{-j 2 \pi t} \\
-\frac{13 j}{20} e^{j 2 \pi t}-\frac{4 j}{20} e^{j 6 \pi t}-\frac{2 j}{20} e^{j 10 \pi t}-\frac{j}{20} e^{j 14 \pi t}
\end{array}
$$

显然，这个傅里叶级数有 8 项（非零项）（即 8 个非零傅里叶系数）。此外，由于 $c$ 是共轭对称的，因此 $x$ 是实函数。特别地，根据欧拉公式，我们有

$$
x(t)=\frac{13}{10} \sin (2 \pi t)+\frac{4}{10} \sin (6 \pi t)+\frac{2}{10} \sin (10 \pi t)+\frac{1}{10} \sin (14 \pi t)
$$

函数 $x$ 的图形如图 5.7(a) 所示。  
假设我们希望通过仅保留傅里叶级数中的 8 项中的 4 项来近似 $x$。此外，我们希望这种近似能尽可能忠实地重现 $x$（即最小化误差）。由于傅里叶系数幅值较大的项对傅里叶级数和的贡献更大，因此直观上这些应该是我们选择的项。因此，最佳近似应选择 $k \in \{-3,-1,1,3\}$ 的项。由此得到的近似图如图 5.7(b) 所示。显然，这种近似能够忠实地再现原函数 $x$ 的总体趋势。实际上，可以证明这一选择能够最小化均方误差。

假设我们改为选择傅里叶级数幅值最小的 4 项（非零项）。直观上，这种选择应非常差，因为它保留的是对傅里叶级数和贡献最小的项。幅值最小的（非零）系数对应 $k \in \{-7,-5,5,7\}$ 的项。如果保留这些项，我们得到的近似如图 5.7(c) 所示。显然，这种近似非常差，甚至无法捕捉原函数 $x$ 的总体趋势。

这个例子说明了傅里叶级数和中最占主导地位的项是幅值最大的项。从这个意义上说，傅里叶系数的幅值可以用来量化傅里叶级数中每一项对总和的贡献。

**例 5.8. **示例 5.1 中的周期方波 $x$ 具有基本周期 $T$、基本频率 $\omega_{0}$，其傅里叶系数序列为
$$
c_{k}= \begin{cases}\frac{-j 2 A}{\pi k} & k \text { 为奇数 } \\ 0 & k \text { 为偶数 }\end{cases}
$$

其中 $A$ 为正常数。求 $x$ 的幅度谱和相位谱，并绘图。确定 $x$ 在哪些频率处信息量最大。

解。首先，计算 $x$ 的幅度谱，即 $\left|c_{k}\right|$。我们有

$$
\begin{aligned}
\left|c_{k}\right| & = \begin{cases}\left|\frac{-j 2 A}{\pi k}\right| & k \text { 为奇数 } \\ 0 & k \text { 为偶数 }\end{cases} \\[2mm]
& = \begin{cases}\frac{2 A}{\pi|k|} & k \text { 为奇数 } \\ 0 & k \text { 为偶数 }\end{cases}
\end{aligned}
$$

接下来，计算 $x$ 的相位谱，即 $\arg c_{k}$。利用 $\arg 0=0$ 和 $\arg \frac{-j 2 A}{\pi k}= -\frac{\pi}{2} \operatorname{sgn} k$，我们有

$$
\begin{aligned}
\arg c_{k} & = \begin{cases}\arg \frac{-j 2 A}{\pi k} & k \text { 为奇数 } \\ \arg 0 & k \text { 为偶数 }\end{cases} \\[1mm]
& = \begin{cases}\frac{\pi}{2} & k \text { 为奇数且 } k<0 \\ -\frac{\pi}{2} & k \text { 为奇数且 } k>0 \\ 0 & k \text { 为偶数 }\end{cases} \\[1mm]
& = \begin{cases}-\frac{\pi}{2} \operatorname{sgn} k & k \text { 为奇数 } \\ 0 & k \text { 为偶数 }\end{cases}
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-150.jpg?height=1335&width=1157&top_left_y=640&top_left_x=413)  
图 5.7: 函数 $x$ 的傅里叶级数近似。(a) 函数 $x$。(b) 选择傅里叶系数幅值最大的 4 项所得的近似。(c) 选择傅里叶系数幅值最小的 4 项（非零项）所得的近似。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-151.jpg?height=1114&width=804&top_left_y=286&top_left_x=715)  
图 5.8: 周期方波的频谱。(a) 幅度谱 (b) 相位谱。

函数 $x$ 的幅度谱和相位谱分别如图 5.8(a) 和 (b) 所示。注意，幅度谱是偶函数，而相位谱是奇函数。这符合预期，因为 $x$ 为实函数。由于 $\left|c_{k}\right|$ 在 $k=-1$ 和 $k=1$ 时最大，因此函数 $x$ 在频率 $-\omega_{0}$ 和 $\omega_{0}$ 处信息量最大。

---

**例 5.9.** 示例 5.2 中的周期冲激序列 $x$ 具有基本周期 $T$、基本频率 $\omega_{0}$，其傅里叶系数序列 $c$ 为
$$
c_{k}=\frac{A}{T},
$$

其中 $A$ 为正常数。求 $x$ 的幅度谱和相位谱，并绘图。

解。我们有 $\left|c_{k}\right|=\frac{A}{T}$，且 $\arg c_{k}=0$。函数 $x$ 的幅度谱和相位谱分别如图 5.9(a) 和 (b) 所示。

## 5.7 傅里叶级数与 LTI 系统

在定理 4.12 中，我们已经知道复指数函数是 LTI 系统的本征函数。由于复正弦函数是复指数函数的特例，因此复正弦函数也是 LTI 系统的本征函数。换句话说，我们有如下结论。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-152.jpg?height=414&width=1390&top_left_y=283&top_left_x=291)  
图 5.9: 周期冲激序列的频谱。(a) 幅度谱 (b) 相位谱。

**推论 5.1.** 对于任意 LTI 系统 $\mathcal{H}$，其冲激响应为 $h$，并且输入为形式 $x(t)=e^{j \omega t}$ 的函数（其中 $\omega$ 为任意实常数，即 $x$ 为任意复正弦函数），有

$$
\mathcal{H} x(t) = H(\omega) e^{j \omega t},
$$

其中

$$
\begin{equation*}
H(\omega) = \int_{-\infty}^{\infty} h(t) e^{-j \omega t} dt \tag{5.21}
\end{equation*}
$$

也就是说，$x$ 是系统 $\mathcal{H}$ 的一个特征函数，其对应的特征值为 $H(\omega)$。

前述结果（即推论 5.1）只是定理 4.12 在 $s=j \omega$ 情况下的一个特例。需要注意的是，为了得到更为方便的记号，推论 5.1 中的函数 $H$ 与定理 4.12 中的函数 $H$ 的定义是不同的。具体来说，设 $H_{\mathrm{F}}$ 和 $H_{\mathrm{L}}$ 分别表示出现在推论 5.1 和定理 4.12 中的函数 $H$，则它们之间的关系为 $H_{\mathrm{F}}(\omega)=H_{\mathrm{L}}(j \omega)$。

在术语上，式 (5.21) 中的函数 $H$ 被称为系统 $\mathcal{H}$ 的**频率响应**。频率响应完全刻画了线性时不变系统（LTI 系统）的行为。因此，在处理 LTI 系统时，频率响应常常非常有用。事实证明，式 (5.21) 右侧出现的积分形式具有极其重要的意义，因为它定义了所谓的**连续时间（CT）傅里叶变换**。我们将在第 6 章中深入研究连续时间傅里叶变换。

现在让我们考虑**特征函数**的一个应用。由于卷积在实际操作中往往比较繁琐，我们可以利用特征函数来设计一种方法，在某些情况下避免直接处理卷积。假设我们现在有一个周期函数 $x$，它可以用傅里叶级数表示为

$$
x(t) = \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t}.
$$

利用 (5.21) 和叠加性原理，我们可以确定系统对输入 $x$ 的响应 $y$，如下所示：

$$
\begin{aligned}
y(t) & =\mathcal{H} x(t) \\
& =\mathcal{H}\left\{\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}\right\}(t) \\
& =\sum_{k=-\infty}^{\infty} \mathcal{H}\left\{c_{k} e^{j k \omega_{0} t}\right\}(t) \\
& =\sum_{k=-\infty}^{\infty} c_{k} \mathcal{H}\left\{e^{j k \omega_{0} t}\right\}(t) \\
& =\sum_{k=-\infty}^{\infty} c_{k} H\left(k \omega_{0}\right) e^{j k \omega_{0} t} .
\end{aligned}
$$

因此，我们可以将 LTI 系统视为一个作用于傅里叶级数各个系数的系统。具体来说，系统通过将每个傅里叶级数系数乘以该系数对应频率处的频率响应函数值来形成输出。换句话说，如果

$$
x(t) \stackrel{\mathrm{CTFS}}{\longleftrightarrow} c_{k}
$$

那么

$$
y(t) \stackrel{\mathrm{CTFS}}{\longleftrightarrow} H\left(k \omega_{0}\right) c_{k} .
$$

**例 5.10** 考虑一个频率响应为

$$
H(\omega)=e^{-j \omega / 4}
$$

的 LTI 系统，求系统对输入

$$
x(t)=\frac{1}{2} \cos (2 \pi t)
$$

的响应 $y$。

**解**：首先，将 $x$ 重写为

$$
x(t)=\frac{1}{4}\left(e^{j 2 \pi t}+e^{-j 2 \pi t}\right)
$$

因此，$x$ 的傅里叶级数为

$$
x(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}
$$

其中 $\omega_{0}=2 \pi$，并且

$$
c_{k}= \begin{cases}\frac{1}{4} & k \in\{-1,1\} \\ 0 & \text { 其他 }\end{cases}
$$

于是，我们可以写出

$$
\begin{aligned}
y(t) & =\sum_{k=-\infty}^{\infty} c_{k} H\left(k \omega_{0}\right) e^{j k \omega_{0} t} \\
& =c_{-1} H\left(-\omega_{0}\right) e^{-j \omega_{0} t}+c_{1} H\left(\omega_{0}\right) e^{j \omega_{0} t} \\
& =\frac{1}{4} H(-2 \pi) e^{-j 2 \pi t}+\frac{1}{4} H(2 \pi) e^{j 2 \pi t} \\
& =\frac{1}{4} e^{j \pi / 2} e^{-j 2 \pi t}+\frac{1}{4} e^{-j \pi / 2} e^{j 2 \pi t} \\
& =\frac{1}{4}\left[e^{-j(2 \pi t-\pi / 2)}+e^{j(2 \pi t-\pi / 2)}\right] \\
& =\frac{1}{4}\left(2 \cos \left(2 \pi t-\frac{\pi}{2}\right)\right) \\
& =\frac{1}{2} \cos \left(2 \pi t-\frac{\pi}{2}\right) \\
& =\frac{1}{2} \cos \left(2 \pi\left[t-\frac{1}{4}\right]\right)
\end{aligned}
$$

注意到 $y(t)=x\left(t-\frac{1}{4}\right)$。这并非巧合，因为具有频率响应 $H(\omega)=e^{-j \omega / 4}$ 的 LTI 系统实际上是一个理想延迟系统，其延迟时间为 $\frac{1}{4}$（即实现时间平移 $\frac{1}{4}$ 的系统）。

## 5.8 滤波

在某些应用中，我们希望改变一个函数的频率分量的相对幅度，或者可能完全消除某些频率分量。这个修改函数频率分量的过程被称为滤波。滤波器有多种类型。频率选择性滤波器可以在几乎不失真的情况下通过某些频率，同时显著衰减其他频率。几种基本的频率选择性滤波器类型包括：低通、高通和带通。

理想低通滤波器会消除所有大于某个截止频率的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\omega)= \begin{cases}1 & |\omega| \leq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中 $\omega_{c}$ 为截止频率。该频率响应的图示如图 5.10(a) 所示。  
理想高通滤波器会消除所有小于某个截止频率的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\omega)= \begin{cases}1 & |\omega| \geq \omega_{c} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中 $\omega_{c}$ 为截止频率。该频率响应的图示如图 5.10(b) 所示。  
理想带通滤波器会消除所有不在特定频率范围内的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\omega)= \begin{cases}1 & \omega_{c 1} \leq|\omega| \leq \omega_{c 2} \\ 0 & \text { 其他情况 }\end{cases}
$$

其中通带的边界为 $\omega_{c 1}$ 和 $\omega_{c 2}$。该频率响应的图示如图 5.10(c) 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-155.jpg?height=1501&width=867&top_left_y=595&top_left_x=695)

图 5.10：（a）理想低通滤波器、（b）理想高通滤波器、（c）理想带通滤波器的频率响应。

**例 5.11**（低通滤波）。假设我们有一个 LTI 系统，其输入为 $x$，输出为 $y$，频率响应为 $H$，其中
$$
H(\omega)= \begin{cases}1 & |\omega| \leq 3 \pi \\ 0 & \text { 其他情况 }\end{cases}
$$

进一步，假设输入 $x$ 为周期函数

$$
x(t)=1+2 \cos (2 \pi t)+\cos (4 \pi t)+\frac{1}{2} \cos (6 \pi t) .
$$

(a) 求 $x$ 的傅里叶级数表示式。 (b) 利用该表示式求系统对输入 $x$ 的响应 $y$。 (c) 绘制 $x$ 和 $y$ 的频谱。

解答。 (a) 我们首先求 $x$ 的傅里叶级数表示式。利用欧拉公式，我们可以将 $x$ 重新表示为

$$
\begin{aligned}
x(t) & =1+2 \cos (2 \pi t)+\cos (4 \pi t)+\frac{1}{2} \cos (6 \pi t) \\
& =1+2\left[\frac{1}{2}\left(e^{j 2 \pi t}+e^{-j 2 \pi t}\right)\right]+\left[\frac{1}{2}\left(e^{j 4 \pi t}+e^{-j 4 \pi t}\right)\right]+\frac{1}{2}\left[\frac{1}{2}\left(e^{j 6 \pi t}+e^{-j 6 \pi t}\right)\right] \\
& =1+e^{j 2 \pi t}+e^{-j 2 \pi t}+\frac{1}{2}\left[e^{j 4 \pi t}+e^{-j 4 \pi t}\right]+\frac{1}{4}\left[e^{j 6 \pi t}+e^{-j 6 \pi t}\right] \\
& =\frac{1}{4} e^{-j 6 \pi t}+\frac{1}{2} e^{-j 4 \pi t}+e^{-j 2 \pi t}+1+e^{j 2 \pi t}+\frac{1}{2} e^{j 4 \pi t}+\frac{1}{4} e^{j 6 \pi t} \\
& =\frac{1}{4} e^{j(-3)(2 \pi) t}+\frac{1}{2} e^{j(-2)(2 \pi) t}+e^{j(-1)(2 \pi) t}+e^{j(0)(2 \pi) t}+e^{j(1)(2 \pi) t}+\frac{1}{2} e^{j(2)(2 \pi) t}+\frac{1}{4} e^{j(3)(2 \pi) t}
\end{aligned}
$$

从上式最后一行可以推断 $\omega_{0}=2 \pi$，因为如果 $\omega_{0}$ 更大，则某些傅里叶级数系数的索引将不是整数，这显然没有意义。因此，$x$ 的傅里叶级数为

$$
x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{j k \omega_{0} t}
$$

其中 $\omega_{0}=2 \pi$，且

$$
a_{k}= \begin{cases}1 & k \in\{-1,0,1\} \\ \frac{1}{2} & k \in\{-2,2\} \\ \frac{1}{4} & k \in\{-3,3\} \\ 0 & \text { 其他情况 }\end{cases}
$$

(b) 由于系统是 LTI，我们知道输出 $y$ 的形式为

$$
y(t)=\sum_{k=-\infty}^{\infty} b_{k} e^{j k \omega_{0} t}
$$

其中

$$
b_{k}=a_{k} H\left(k \omega_{0}\right) .
$$

利用上述结果，可以计算 $b_{k}$ 如下：

$$
\begin{aligned}
b_{0} & =a_{0} H([0][2 \pi])=1(1)=1, \\
b_{1} & =a_{1} H([1][2 \pi])=1(1)=1, \\
b_{-1} & =a_{-1} H([-1][2 \pi])=1(1)=1, \\
b_{2} & =a_{2} H([2][2 \pi])=\frac{1}{2}(0)=0, \\
b_{-2} & =a_{-2} H([-2][2 \pi])=\frac{1}{2}(0)=0, \\
b_{3} & =a_{3} H([3][2 \pi])=\frac{1}{4}(0)=0, \quad \text { 且 } \\
b_{-3} & =a_{-3} H([-3][2 \pi])=\frac{1}{4}(0)=0 .
\end{aligned}
$$

因此，我们得到

$$
b_{k}= \begin{cases}1 & k \in\{-1,0,1\} \\ 0 & \text { 其他情况 }\end{cases}
$$

(c) 最后，我们在图 5.11(a) 和 (b) 中分别绘制了 $x$ 和 $y$ 的频谱。频率响应 $H$ 叠加在 $x$ 的频谱图上以作说明。

![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-157.jpg?height=920&width=696&top_left_y=891&top_left_x=780)

图 5.11：（a）输入函数 $x$ 的频谱和（b）输出函数 $y$ 的频谱。

## 5.9 习题

### 5.9.1 无答案习题

**5.1 **对下列每个情况，求函数 $x$ 的傅里叶级数表示（复指数形式），并明确指出 $x$ 的基本周期以及傅里叶级数系数序列 $c$。  
(a) $x(t)=1+\cos (\pi t)+\sin ^{2}(\pi t)$；  
(b) $x(t)=\cos (4 t) \sin (t)$；  
(c) $x(t)=|\sin (2 \pi t)|$。[提示：$\int e^{a x} \sin (b x) d x=\frac{e^{a x}[a \sin (b x)-b \cos (b x)]}{a^{2}+b^{2}}+C$，其中 $a$ 为任意复数，$b$ 为非零实数。]

**5.2 **对下列图中所示的周期函数，求相应的傅里叶级数系数序列。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-158.jpg?height=1311&width=1284&top_left_y=1188&top_left_x=440)

![](https://cdn.mathpix.com/snip/images/c6mA_ekvQpTjy7T_91VurGvoblzoRIxzBSfUG9sFYh4.original.fullsize.png)

**5.3 **求下列每个周期函数 $x$ 的傅里叶级数系数序列 $c$，基本周期为 $T$。  
(a) $x(t)=2 \delta(t-3)+2 \delta(t-5)+\delta(t-7)-\delta(t-9)+3 \delta(t-12)$，$T=16$；尽可能用 sin 和 cos 表示 $c$；  
(b) $x(t)=\delta(t)+6 \delta(t-1)+6 \delta(t-2)$，$T=3$；尽可能用 sin 和 cos 表示 $c$。

**5.4** 证明对于复值周期函数 $x$ 及其傅里叶级数系数序列 $c$：  
(a) $x$ 为偶函数当且仅当 $c$ 为偶序列；  
(b) $x$ 为奇函数当且仅当 $c$ 为奇序列。

**5.5** 设 $x$ 为 $T$ 周期函数，傅里叶级数系数序列为 $c$。求函数 $y(t)=\mathcal{D} x(t)$ 的傅里叶级数系数序列 $d$，其中 $\mathcal{D}$ 表示微分算子。

**5.6 **设 $x$ 为周期函数，其傅里叶级数系数序列 $c$ 为
$$
c_{k}= \begin{cases}1 & k=0 \\ j\left(\frac{1}{2}\right)^{|k|} & \text { 其他情况 }\end{cases}
$$

利用傅里叶级数性质，判断下列断言是否成立：  
(a) $x$ 为实数；  
(b) $x$ 为偶函数；  
(c) $\mathcal{D} x$ 为偶函数（其中 $\mathcal{D}$ 表示微分算子）。[提示：先考虑习题 5.5。]

**5.7** 设周期函数 $x$ 的周期为 $T$，傅里叶级数系数序列为 $c$。若 $c_{k}=0$ 对所有偶数 $k$ 成立，则称 $x$ 为奇谐函数。  
(a) 证明若 $x$ 为奇谐函数，则对任意 $t$，有 $x(t)=-x\left(t-\frac{T}{2}\right)$；  
(b) 证明若对任意 $t$，有 $x(t)=-x\left(t-\frac{T}{2}\right)$，则 $x$ 为奇谐函数。

**5.8** 设 $x$ 为周期函数，基本周期为 $T$，傅里叶级数系数序列为 $c$。求下列函数 $x'$ 的傅里叶级数系数序列 $c'$，以 $c$ 表示：  
(a) $x'=\operatorname{Even}(x)$；  
(b) $x'=\operatorname{Re}(x)$。

**5.9** 求图中所示周期函数 $x$ 的傅里叶级数系数序列 $c$，并绘制 $x$ 的频谱，包括前五个谐波。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-160.jpg?height=233&width=579&top_left_y=294&top_left_x=751)

**5.10** 考虑一个 LTI 系统，其频率响应为
$$
H(\omega)= \begin{cases}1 & |\omega| \geq 5 \\ 0 & \text { 其他情况 }\end{cases}
$$

利用频域方法，求系统输出 $y$，输入为

$$
x(t)=1+2 \cos (2 t)+2 \cos (4 t)+\frac{1}{2} \cos (6 t)
$$

**5.11** 对每个下列 LTI 系统 $\mathcal{H}$（其冲激响应为 $h$），求其频率响应 $H$ 及幅度 $|H|$（即幅度响应），并判断 $\mathcal{H}$ 最接近哪种理想频率选择性滤波器。  
(a) $h(t)=\frac{3}{\pi} \operatorname{sinc}(3 t)$ [注：$\int_{-\infty}^{\infty} \operatorname{sinc}(a t) e^{-j \omega t} d t=\frac{\pi}{|a|} \operatorname{rect}\left(\frac{\omega}{2 a}\right)$，$a$ 为非零实数]；  
(b) $h(t)=\frac{10}{\pi} \cos (t) \operatorname{sinc}(10 t)$ [注：$\int_{-\infty}^{\infty} \operatorname{sinc}(a t) e^{-j \omega t} d t=\frac{\pi}{|a|} \operatorname{rect}\left(\frac{\omega}{2 a}\right)$，$a$ 为非零实数]。

### 5.9.2 带答案的习题

5.101 对下列每个函数 $x$，判断其是否具有傅里叶级数表示，如果有，求基本周期 $T$ 及系数序列 $c$。  
(a) $x(t)=2+\cos (10 \pi t)+\sin (5 t)$；  
(b) $x(t)=1+\frac{1}{2} \cos (2 \pi t)+\frac{1}{8} \sin (4 \pi t)$；  
(c) $x(t)=10+4 \cos \left(6 \pi t-\frac{\pi}{3}\right)-2 \sin \left(15 \pi t-\frac{\pi}{6}\right)$。

简答。  
(a) 无傅里叶级数；  
(b) $T=1$，非零系数为 $(c_{-2}, c_{-1}, c_{0}, c_{1}, c_{2})=\left(\frac{j}{16}, \frac{1}{4}, 1, \frac{1}{4},-\frac{j}{16}\right)$；  
(c) $T=\frac{2}{3}$，非零系数为 $\left(c_{-5}, c_{-2}, c_{0}, c_{2}, c_{5}\right)=\left(-j e^{j \pi / 6}, 2 e^{j \pi / 3}, 10,2 e^{-j \pi / 3}, j e^{-j \pi / 6}\right)$。

5.102 求下列周期函数 $x$ 的傅里叶级数系数序列 $c$，基本周期为 $T$。  
(a) $x(t)=e^{-t}, -1 \leq t<1, T=2$；  
(b) $x(t)=\operatorname{rect}\left(t-\frac{3}{2}\right)-\operatorname{rect}\left(t+\frac{3}{2}\right), -\frac{5}{2} \leq t<\frac{5}{2}, T=5$；  
(c) $x(t)=e^{-2|t|}, -2 \leq t<2, T=4$；  
(d) $x(t)=-\delta(t+1)+\delta(t)+\delta(t-1), -2 \leq t<2, T=4$；  
(e) $x(t)=5 e^{3 t}, 0 \leq t<5, T=5$；  
(f) $x(t)=\delta(t+1)+2 \delta(t)+\delta(t-1), -2 \leq t<2, T=4$；  
(g) $x(t)=t^{2}, -1 \leq t<1, T=2$；  
(h) $x(t)=\sin \left(\frac{\pi}{2} t\right)[u(t-1)-u(t-2)], 0 \leq t<2, T=2$；  
(i) $x(t)=t[u(t)-u(t-1)], 0 \leq t<2, T=2$；  
(j) $x(t)=|t|[u(t+1)-u(t-1)], -2 \leq t<2, T=4$；  
(k) $x(t)=4 \delta(t-1)-4 \delta(t-2)+6 \delta(t-3)+6 \delta(t-5), 0 \leq t<8, T=8$；  
(l) $x(t)=2 \delta(t)+\delta(t-1)+\delta(t-2), 0 \leq t<4, T=4$；  
(m) $x(t)=\sum_{k=-\infty}^{\infty} 3 \delta(t-4 k)$（$T$ 在定义中隐含）。

简答。  
(a) $c_{k}=\frac{(-1)^{k}\left(e-e^{-1}\right)}{j 2 \pi k+2}$；  
(b) $c_{k}= \begin{cases}\frac{1}{j \pi k}\left(\cos \left(\frac{2 \pi k}{5}\right)-\cos \left(\frac{4 \pi k}{5}\right)\right) & k \neq 0 \\ 0 & k=0 \end{cases}$；  
(c) $c_{k}=\frac{4\left[1-e^{-4}(-1)^{k}\right]}{16+\pi^{2} k^{2}}$；  
(d) $c_{k}=-\frac{j}{2} \sin \left(\frac{\pi}{2} k\right)+\frac{1}{4}$；  
(e) $c_{k}=\frac{5\left(e^{15}-1\right)}{15-j 2 \pi k}$；  
(f) $c_{k}=\frac{1}{2}+\frac{1}{2} \cos \left(\frac{\pi}{2} k\right)$；  
(g) $c_{k}= \begin{cases}\frac{(-1)^{k} 2}{\pi^{2} k^{2}} & k \neq 0 \\ \frac{1}{3} & k=0 \end{cases}$；  
(h) $c_{k}=\frac{1+(-1)^{k} j 2 k}{4 \pi\left(\frac{1}{4}-k^{2}\right)}$；  
(i) $c_{k}= \begin{cases}\frac{(-1)^{k}(j \pi k+1)-1}{2 \pi^{2} k^{2}} & k \neq 0 \\ \frac{1}{4} & k=0 \end{cases}$；  
(j) $c_{k}= \begin{cases}\frac{\pi k \sin \left(\frac{\pi}{2} k\right)+2 \cos \left(\frac{\pi}{2} k\right)-2}{\pi^{2} k^{2}} & k \neq 0 \\ \frac{1}{4} & k=0 \end{cases}$；  
(k) $c_{k}=j e^{-j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)+\frac{3}{2}(-1)^{k} \cos \left(\frac{\pi}{4} k\right)$；  
(l) $c_{k}=\frac{1}{2}\left[1+e^{-j(3 \pi / 4) k} \cos \left(\frac{\pi}{4} k\right)\right]$；  
(m) $c_{k}=\frac{3}{4}$。

5.103 对下列图中所示的 $T$ 周期函数 $x$，求傅里叶级数系数序列 $c$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_358c27cec78acc621f25g-161.jpg?height=738&width=1527&top_left_y=1764&top_left_x=410)

![](https://cdn.mathpix.com/snip/images/2TqKLk6LEP-AHooL7rq46WHXNDUv9Cpdlguy4X2f7Y4.original.fullsize.png)

简答。  
(a) $c_{k}= \begin{cases}\frac{A}{2} & k=0 \\ \frac{j A}{2 \pi k} & \text {其他情况} \end{cases}$；  
(b) $c_{k}= \begin{cases}\frac{A}{2} & k=0 \\ 0 & k \text{ 为偶且 } k \neq 0 \\ \frac{-2 A}{(\pi k)^{2}} & k \text{ 为奇} \end{cases}$；  
(c) $c_{k}=\frac{2 A}{\pi\left(1-4 k^{2}\right)}$；  
(d) $c_{k}= \begin{cases}\frac{A}{\pi\left(1-k^{2}\right)} & k \text{ 为偶} \\ \frac{-j A k}{4} & k \in\{-1,1\} \\ 0 & 其他情况 \end{cases}$；  
(e) $c_{k}=A W \operatorname{sinc}(\pi W k)$。

5.104 对下列情况，函数 $x$ 的傅里叶级数为 $y(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k(2 \pi / T) t}$（$T$ 为 $x$ 的基本周期），求指定 $t$ 下的 $y(t)$。  
(a) $x(t)=\left\{\begin{array}{ll}e^{t+2} & -2 \leq t<-1 \\ 1 & -1 \leq t<1 \\ e^{-t+3}-e & 1 \leq t<2\end{array}\right.$ 且 $x(t)=x(t+4), t \in\{-1,2\}$；  
(b) $x(t)=\left\{\begin{array}{ll}e^{t} & 0 \leq t<2 \\ -t^{2} & 2 \leq t<5\end{array} \right.$ 且 $x(t)=x(t+5), t \in\{0,2\}$；  
(c) $x(t)=\left\{\begin{array}{ll}1+e^{t} & -1<t<0 \\ e^{-2 t} & 0 \leq t \leq 1\end{array}\right.$ 且 $x(t)=x(t+2), t \in\{0,1\}$；  
(d) $x(t)=\left\{\begin{array}{ll}t^{2}+2 t+1 & -2 \leq t<0 \\ -t^{2}+2 t-\pi & 0 \leq t<2\end{array}\right.$ 且 $x(t)=x(t+4), t \in\{0,1\}$；  
(e) $x(t)=\left\{\begin{array}{ll}e^{-t} & 0 \leq t<1 \\ t-1 & 1 \leq t<2 \\ e^{t-3} & 2 \leq t<3\end{array} \right.$ 且 $x(t)=x(t+3), t \in\{1,2\}$。

简答。  
(a) $y(-1)=\frac{e+1}{2},\ y(2)=\frac{1}{2}$；  
(b) $y(0)=-12,\ y(2)=\frac{e^{2}-4}{2}$；  
(c) $y(0)=\frac{3}{2},\ y(1)=\frac{e^{2}+e+1}{2 e^{2}}$；  
(d) $y(0)=\frac{1-\pi}{2},\ y(1)=1-\pi$；  
(e) $y(1)=\frac{1}{2 e},\ y(2)=\frac{e+1}{2 e}$。
5.105 对下列每种情况，其中 $T$ 周期函数 $x$ 的傅里叶级数系数序列为 $c$，求 $x$ 的幅度谱和相位谱。  
(a) $c_{k}=\frac{j k-1}{j k+1}, T=2 \pi$；  
(b) $c_{k}=\frac{4 j k+4}{(j k-1)^{2}}, T=4$；  
(c) $c_{k}=\frac{-1}{(2+j \pi k)^{2}}, T=2$；  
(d) $c_{k}=\left(\frac{e^{j 3 k}}{j 2 k-1}\right)^{2}, T=2$；  
(e) $c_{k}=\frac{j 4 \pi^{2} k^{2}}{(j 2 \pi k-1)^{10}}, T=1$。

简答。  
(a) $\left|c_{k}\right|=1,\ \arg c_{k}=-2 \arctan (k)+(2 \ell+1) \pi,\ \ell \in \mathbb{Z}$；  
(b) $\left|c_{k}\right|=\frac{4}{\sqrt{k^{2}+1}},\ \arg c_{k}=3 \arctan (k)+2 \pi \ell,\ \ell \in \mathbb{Z}$；  
(c) $\left|c_{k}\right|=\frac{1}{4+\pi^{2} k^{2}},\ \arg c_{k}=-2 \arctan \left(\frac{\pi}{2} k\right)+(2 \ell+1) \pi,\ \ell \in \mathbb{Z}$；  
(d) $\left|c_{k}\right|=\frac{1}{4 k^{2}+1},\ \arg c_{k}=6 k+2 \arctan (2 k)+2 \pi \ell,\ \ell \in \mathbb{Z}$；  
(e) $\left|c_{k}\right|=\frac{4 \pi^{2} k^{2}}{\left(4 \pi^{2} k^{2}+1\right)^{5}},\ \arg c_{k}=\frac{\pi}{2}+10 \arctan (2 \pi k)+2 \pi \ell,\ \ell \in \mathbb{Z}$。

5.106 对下列每种情况，其中周期函数 $x$ 的傅里叶级数系数序列为 $c$，判断 $x$ 是否为实值、偶函数或奇函数。  
(a) $c_{k}=e^{-|k|}$；  
(b) $c_{k}=\frac{e^{-j 3 k}}{k^{2}}, k \neq 0,\ c_{0}=0$；  
(c) $c_{k}=\operatorname{sgn}(k) e^{-|k|}$；  
(d) $c_{k}=j \operatorname{sgn}(k) e^{-|3 k|}$；  
(e) $c_{k}=j|k| e^{-k^{2}}$；  
(f) $c_{k}=\frac{1}{k+j}$；  
(g) $c_{k}= \begin{cases}j \sin \left(\frac{\pi}{2} k\right) & k \in[-32,32] \\ 0 & \text{其他情况} \end{cases}$；  
(h) $c_{k}= \begin{cases}\cos (\pi k) & k \in[-32,32] \\ 0 & \text{其他情况} \end{cases}$；  
(i) $c_{k}= \begin{cases}2^{-k} & k \in[0,32] \\ 0 & \text{其他情况} \end{cases}$；  
(j) $c_{k}= \begin{cases}k^{3} & k \in[-8,8] \\ 0 & \text{其他情况} \end{cases}$。

简答。  
(a) 实值且偶函数；  
(b) 实值但非偶/奇函数；  
(c) 奇函数但非实值；  
(d) 实值且奇函数；  
(e) 偶函数但非实值；  
(f) 非实值且非偶/奇函数；  
(g) 实值且奇函数；  
(h) 实值且偶函数；  
(i) 非实值且非偶/奇函数；  
(j) 奇函数但非实值。

5.107 对下列每种情况，求 LTI 系统（频率响应为 $H$）对输入 $x$ 的输出 $y$。  
(a) $H(\omega)=\left\{\begin{array}{ll}-3 & \omega<-1 \\ 0 & -1 \leq \omega \leq 0 \\ 3 & \omega>0\end{array}\right., x(t)=4 \cos (t)+2 \cos (2 t)$；  
(b) $H(\omega)=\operatorname{rect}\left(\frac{\omega}{10 \pi}\right), x(t)=\sum_{k=-\infty}^{\infty} \delta\left(t-\frac{1}{2} k\right)$；  
(c) $H(\omega)=\operatorname{sgn}(\omega), x(t)=4+3 \cos (t)+2 \cos (3 t)$；  
(d) $H(\omega)=\left\{\begin{array}{ll}2 & 4 \leq|\omega| \leq 11 \\ 0 & \text{其他情况} \end{array}\right., x(t)=1+\frac{1}{2} \sin (5 t)+\frac{1}{4} \cos (10 t)+\frac{1}{8} \sin (15 t)$；  
(e) $H(\omega)=\frac{5}{j \omega}, x(t)=8 \sin (2 t)+6 \cos (3 t)$；  
(f) $H(\omega)=\frac{1}{4+j \omega}, x(t)=8+\cos (3 t)$。

简答。  
(a) $y(t)=6 e^{j t}+6 j \sin (2 t)$；  
(b) $y(t)=4 \cos (4 \pi t)+2$；  
(c) $y(t)=3 j \sin (t)+2 j \sin (3 t)$；  
(d) $y(t)=\sin (5 t)+\frac{1}{2} \cos (10 t)$；  
(e) $y(t)=10 \sin (3 t)-20 \cos (2 t)$；  
(f) $y(t)=2+\frac{1}{5} \cos \left[3 t-\arctan \left(\frac{3}{4}\right)\right]$。

5.108 对下列每种情况，求 LTI 系统（冲激响应为 $h$）对输入 $x$ 的输出 $y$。  
(a) $h(t)=e^{-3 t} u(t), x(t)=10+4 \cos (4 t)+2 \cos (6 t)$；  
(b) $h(t)=e^{t} u(-t), x(t)=4 \cos (t)+2 \cos (2 t)$。

简答。  
(a) $y(t)=\frac{10}{3}+\frac{2}{3 \sqrt{5}} \cos [6 t-\arctan (2)]+\frac{4}{5} \cos \left[4 t-\arctan \left(\frac{4}{3}\right)\right]$；  
(b) $y(t)=\frac{2}{\sqrt{5}} \cos [2 t+ \arctan (2)]+2 \sqrt{2} \cos \left(t+\frac{\pi}{4}\right)$。

5.109 对下列每种情况，求 LTI 系统 $\mathcal{H}$（冲激响应为 $h$）的频率响应 $H$ 及幅度响应，并判断 $\mathcal{H}$ 最接近的理想频率选择性滤波器类型。  
(a) $h(t)=2 e^{-2 t} u(t)$；  
(b) $h(t)=\frac{4}{\pi} \cos (20 t) \operatorname{sinc}(2 t)$。

简答。  
(a) $H(\omega)=\frac{-2}{j \omega+2},\ |H(\omega)|=\frac{2}{\sqrt{\omega^{2}+4}}$；近似低通滤波器；  
(b) $H(\omega)=\operatorname{rect}\left[\frac{1}{4}(\omega-20)\right]+\operatorname{rect}\left[\frac{1}{4}(\omega+20)\right],\ |H(\omega)|=H(\omega)$；理想带通滤波器，通带 $|\omega| \in [18,22]$。
### 5.9.3 MATLAB 练习

5.201 考虑练习 5.2 中图 B 所示的周期函数 $x$，其中 $T=1$ 且 $A=\frac{1}{2}$。我们可以得到 $x$ 的傅里叶级数表示为：

$$
\hat{x}(t)=\sum_{k=-\infty}^{\infty} c_{k} e^{j k \omega_{0} t}
$$

其中 $c_{k}=\frac{1}{2} \operatorname{sinc}\left(\frac{\pi k}{2}\right)$，$\omega_{0}=2 \pi$。设 $\hat{x}_{N}(t)$ 表示上述无穷级数在第 $N$ 次谐波分量处截断的结果，即：

$$
\hat{x}_{N}(t)=\sum_{k=-N}^{N} c_{k} e^{j k \omega_{0} t}
$$

(a) 使用 MATLAB 绘制 $\hat{x}_{N}(t)$，其中 $N=1,5,10,50,100$。你会看到，随着 $N$ 增大，$\hat{x}_{N}$ 趋近于 $x$。[提示：可以使用 `sym`、`symsum`、`subs` 和 `ezplot` 函数。注意 MATLAB 的 `sinc` 函数计算的是归一化 sinc 函数，而非本书定义的 sinc 函数；归一化定义如式 (3.21) 所示。]

(b) 通过观察 (a) 部分得到的图形，回答以下问题：当 $N \rightarrow \infty$ 时，$\hat{x}_{N}$ 是否以统一的速度收敛到 $x$（即在各处收敛速率相同）？如果不是，在哪些位置收敛速率较慢？

(c) 函数 $x$ 并非在所有点连续。例如，$x$ 在 $\frac{1}{4}$ 处存在不连续性。当 $N \rightarrow \infty$ 时，$\hat{x}_{N}$ 在该点似乎收敛到什么值？同样可从 (a) 部分的图形中推断答案。
