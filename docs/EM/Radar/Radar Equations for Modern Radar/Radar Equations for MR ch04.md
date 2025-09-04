# 第4章 检测理论

在第1章推导雷达方程的第一步中，通过公式 (1.9) 表达了在目标距离 $R$ 处可用的信号与噪声能量比 $E / N_{0}$。第二步则表达了实现目标检测所需的 $n$ 个脉冲中每一个的能量比。对于理想化雷达，我们将该值（记作 $D(n)$）称为**基本可检测因子**：它是在考虑实际雷达系统中的损耗之前，根据目标检测理论推导出的信噪比。最大作用距离 $R_{m}$ 定义为 $E / N_{0}=D(n)$ 的位置。本章将总结在不同雷达波形和目标模型下计算 $D(n)$ 的方法。第5、9 和 10 章将讨论那些会增加输入能量比需求、使 $D(n)$ 增加为 $D_{x}(n)$ 的损耗。$D_{x}(n)$ 是必须用于完整雷达方程（如 (1.22)）中的有效可检测因子。

## 4.1 背景

Blake [1] 总结了二战后几年美国海军研究实验室对雷达方程的改进。他定义了**可见因子** $V_{0}$，即当 $n$ 个脉冲在阴极射线管显示器上进行积分，由人工目视检测时，为获得给定检测概率 $P_{d}$ 所需的单脉冲信噪能量比 $E / N_{0}$。他将这一概念推广为**可检测因子** $D(n)$，用于积分与检测由电子或数字方式完成的雷达系统。该因子出现在公式 (1.16) 以及雷达方程的其他简化形式中。它代表一个理论值：即假设接收到的 $n$ 个脉冲功率相等，通过匹配滤波器（与白噪声共同输入），经包络检波器处理，进行等权非相干积分，然后与检测门限比较。

由于理想化雷达接收机与信号频谱相匹配，因此包络检波器输入端的信噪功率比 $S / N$ 等于雷达输入端的能量比 $E / N_{0}$。可检测因子 $D(n)$ 用基于包络检波器输入处 $S / N$ 的理论方程表示。

针对若干统计目标模型，已经发展出给出检测概率的精确方程。但这些方程形式复杂，需要数值积分或查特殊函数表。因此，大量雷达检测文献都致力于发展近似方法，以便快速计算给定信噪功率比 $S / N$ 下的 $P_{d}$，或反过来推算所需的 $S / N$，而无需使用严格求解所需的复杂理论方程。许多图表（甚至整本书）已发表，用于展示在不同目标模型、特定虚警概率 $P_{fa}$ 和脉冲数 $n$ 下，$P_{d}$ 随 $S / N$ 的变化关系。这些图表有助于理解不同雷达和目标特性对检测性能的影响，但若要在雷达方程中使用，则更适合通过求解基本方程（精确或近似）得到数值结果。

个人计算机及数学软件（如 Mathcad ${ }^{\circledR}$ 和 MATLAB ${ }^{\circledR}$）能够快速准确地求解这些检测方程。它们内置的贝塞尔函数、伽马函数等特殊函数便于使用这些方程，而数学平台的求根功能则能在 $D(n)$ 作为 $P_{d}$ 的函数无解析解时给出结果。当需要重复计算多个值时，可采用近似方法以减少计算时间。本章给出的程序（在随附 DVD 中以 Mathcad 程序形式提供）可在任意编程语言中实现。同时，还提供了不同复杂度与精度的近似公式。

## 4.2 稳定目标的可检测因子

对于稳定（不起伏）目标（Case 0），基本可检测因子记作 $D_{0}(n)$。该值由 Rice [3] 在单脉冲情形下推导，而由 Marcum [4,5] 在 $n$ 个非相干积分脉冲情形下推导。DiFranco 与 Rubin [6] 给出了精确表达式，他们的综合研究构成本章的大部分基础。

计算 $D_{0}$ 所需的输入参数为：

- 检测概率 $P_{d}$；
- 虚警概率 $P_{fa}$；
- 积分的包络检波脉冲数 $n$。

在相干雷达应用中，$n$ 被替换为 $n^{\prime}=t_{o} / t_{f}$，即先前相干积分得到的采样数，其中 $t_{o}$ 为观测（积分）时间，$t_{f}$ 为相干积分时间。

此处所用符号与参考文献中的不同（例如，在 [6] 中脉冲数记作 $N$，信噪能量比记作 $\mathscr{R}_{p} / 2$，在此则分别替换为 $n$ 和 $s$）。因子 $D_{0}(n)$ 在某些方程中写作 $D_{0}\left(P_{d}, P_{fa}, n\right)$，而检测概率 $P_{d}$ 写作 $P_{d}\left(s, n, P_{fa}\right)$，以强调其对三个输入参数的依赖。为简洁起见，用 $s$ 代替信噪功率比 $S / N$。

### 4.2.1 稳定目标的精确检测概率

在实际中几乎很少遇到稳定目标，但它作为参考十分有用，通常给出了 $D(n)$ 的下限。假设采用平方律检波器 ${ }^{1}$，其检测概率的精确表达式为 [6, p.348, Eq. (10.4-27)]：

$$
\begin{equation*}
P_{d 0}\left(s, n, y_{b}\right)=1-\int_{0}^{y_{b}}\left(\frac{y}{n s}\right)^{\frac{n-1}{2}} \exp (-y-n s) I_{n-1}(\sqrt{4 n s y}) d y \tag{4.1}
\end{equation*}
$$

其中：

| 符号 | 定义 |
| :--- | :--- |
| $s$ | $=S / N=$ 包络检波器输入端的信噪功率比； |
| $n$ | $=$ 积分的脉冲数； |
| $y_{b}$ | $=$ 归一化至检波器输出端均方根噪声的门限电压； |
| $y$ | $=$ $n$ 个脉冲的检波器输出电压和； |
| $I_{n}(x)$ | $=$ 第一类修正贝塞尔函数，阶数为 $n$。 |

> ${ }^{1}$ Marcum [5, pp. 35, 99] 讨论了平方律检波器与线性检波器的相对性能，指出两者差异小于 $0.1 \,\mathrm{dB}$：在 $2 \leq n < 70$ 时线性检波器略优，而在 $n > 70$ 时平方律更优，当 $n=1$ 和 $n=70$ 时两者性能相同。此处我们仅考虑平方律检波器。

---

### 4.2.2 门限电平

要应用公式 (4.1)，首先需要确定积分上限的门限电平 $y_{b}$。该门限对所有目标模型都是通用的，因此在计算检测概率之前，先给出其精确与近似解。

对于积分 $n$ 个脉冲的系统，其虚警概率为 [6, p.347, Eq. (10.4-18)]：

$$
\begin{equation*}
P_{f a}=\frac{1}{(n-1)!} \int_{y_{b}}^{\infty} y^{n-1} e^{-y} d y=1-\frac{1}{(n-1)!} \int_{0}^{y_{b}} y^{n-1} e^{-y} d y \tag{4.2}
\end{equation*}
$$

(4.2) 式中的第二项为不完全伽马函数 [7, p.260, Eq. (6.5.1)]：

$$
\begin{equation*}
P_{\gamma}(x, n)=\frac{1}{\Gamma(n)} \int_{0}^{x} e^{-t} t^{n-1} d t=1-P_{f a} \tag{4.3}
\end{equation*}
$$

这里采用符号 $P_{\gamma}$，以避免与其他符号混淆，同时强调其作为概率的含义。式 (4.3) 中的 $\Gamma(n)$ 用以替换 ( $n-1$ )!，从而扩展到非整数 $n$。因此虚警概率可表示为：

$$
\begin{equation*}
P_{f a}=1-P_{\gamma}\left(n, y_{b}\right) \tag{4.4}
\end{equation*}
$$

需要注意 $P_{\gamma}(x, n)$ 与 Pearson 不完全伽马函数 $I(x, n)$ 不同，后者用于 [6, p.347, Eq. (10.4-19)]：

$$
\begin{align*}
& I(x, n)=P_{\gamma}(x \sqrt{n+1}, n+1) \\
& P_{\gamma}(x, n)=I\left(\frac{x}{\sqrt{n-1}}, n-1\right) \tag{4.5}
\end{align*}
$$

因此在查表或使用计算机程序内置的不完全伽马函数时 ${ }^{2}$，必须确认其定义与 (4.3) 保持一致。这类函数使得无需数值积分即可快速计算。

> ${ }^{2}$ Mathcad 内置函数 $P_{\gamma}(x, n)$，记作 $\operatorname{pgamma}(x, n)$；其反函数 $P_{\gamma}^{-1}(p, n)$ 记作 $\operatorname{qgamma}(p, n)$，算法源于 [7, p.263]。另一个内置函数 $\Gamma(n, x)$ 对应于 (4.3) 中积分式，但不含阶乘项 $(n-1)!$ 或 $\Gamma(n)$。

---

求解 (4.4) 的门限电平可通过求根算法，或调用反函数 $P_{\gamma}^{-1}(p, n)$：

$$
\begin{equation*}
y_{b}\left(P_{f a}, n\right)=\operatorname{root}_{y_{b}}\left[P_{f a}=1-P_{\gamma}\left(y_{b}, n\right)\right]=P_{\gamma}^{-1}\left(1-P_{f a}, n\right) \tag{4.6}
\end{equation*}
$$

其中 $\operatorname{root}_{y_{b}}\left[p=f(y_{b})\right]$ 表示满足括号内等式的 $y_{b}$ 值。

若求根或不完全伽马函数反演不可用，或计算量过大，可采用已发展出的近似公式 [8,9]。该方法适用于平方律与线性检波器，将门限表示为噪声电压的均值与标准差的函数：

$$
\begin{equation*}
y_{b}=m_{x}+k_{t} \sigma_{x}=n m_{1}+k_{t} \sqrt{n} \sigma_{1} \tag{4.7}
\end{equation*}
$$

其中：

- $m_{x}=$ 积分输出电压的均值；
- $m_{1}=$ 单脉冲电压均值（平方律检波器时 $=1$）；
- $\sigma_{x}=$ 积分输出电压的标准差；
- $\sigma_{1}=$ 单脉冲电压的标准差（平方律检波器时 $=1$）；
- $k_{t}=$ 门限常数。

对于平方律检波器，当 $n=1$ 时，

$$
k_{t1}=-\ln\left(P_{f a}\right)-1,
$$

而当 $n \rightarrow \infty$ 时，

$$
k_{t \infty}=\Phi^{-1}\left(P_{f a}\right),
$$

其中 $\Phi(\cdot)$ 为正态分布积分函数，$\Phi^{-1}(\cdot)$ 为其反函数：

$$
\begin{align*}
& \Phi(E)=\frac{1}{\sqrt{2 \pi}} \int_{E}^{\infty} \exp \left(-\frac{v^{2}}{2}\right) d v=P  \tag{4.8}\\
& \Phi^{-1}(P)=E
\end{align*}
$$

这些正态分布概率函数已广泛表化，并内置于多数计算器与数学软件中，无需数值积分。通过插值可得 $1 \leq n \leq \infty$ 时的 $k_{tn}$：

$$
\begin{equation*}
k_{t n}\left(P_{f a}\right)=k_{t \infty}\left(P_{f a}\right)+\frac{k_{t 1}\left(P_{f a}\right)-k_{t \infty}\left(P_{f a}\right)}{[1.1(n-1)+1]^{0.51}} \tag{4.9}
\end{equation*}
$$

再结合 (4.7)，得近似的门限电平：

$$
\begin{equation*}
y_{b}\left(P_{f a}, n\right) \approx n+\sqrt{n}\left\{\Phi^{-1}\left(P_{f a}\right)-\frac{\Phi^{-1}\left(P_{f a}\right)+\ln P_{f a}+1}{[1.1(n-1)+1]^{0.51}}\right\} \tag{4.10}
\end{equation*}
$$

只要能获得 $\Phi^{-1}(P_{fa})$ 的解析近似 [7, p.933, Eq. (26.2.23)]，则无需积分或求根。公式 (4.10) 在 $n \leq 100$ 且 $P_{f} \leq 0.1$ 时，其精度在 $\pm 0.15 \,\mathrm{dB}$ 内。该方法在缺少内置函数时，能精确实现不完全伽马函数的反演：

$$
\begin{align*}
& p=P_{\gamma}(y, n) \leftrightarrow y=P_{\gamma}^{-1}(p, n) \\
& P_{\gamma}^{-1}(p, n) \approx n+\sqrt{n}\left\{\Phi^{-1}(p)-\frac{\Phi^{-1}(p)+\ln p+1}{[1.1(n-1)+1]^{0.51}}\right\} \tag{4.11}
\end{align*}
$$

该反演在 $p<0.95$ 时有效，并将在第 4.3 节涉及 Swerling 及其他卡方目标模型的计算中发挥作用。

### 4.2.3 稳定目标的精确可检测因子

雷达方程中并未直接包含 $P_{d}$，而是要求引入支持指定 $P_{d}$ 的可检测因子 $D(n)$。由于 (4.1) 式中的 $P_{d}$ 无法反演得到 $D(n)$ 的闭合解析式，因此需要通过求解来获得 $D_{0}(n)=s$：

$$
\begin{equation*}
D_{0}(n)=s=\operatorname{root}_{s}\left[P_{d 0}\left(s, n, y_{b}\right)=1-\int_{0}^{y_{b}}\left(\frac{y}{n s}\right)^{\frac{n-1}{2}} \exp (-y-n s) I_{n-1}(\sqrt{4 n s y}) d y\right] \tag{4.12}
\end{equation*}
$$

若无法使用求根算法或计算量过大，可采用第 4.2.6 节所述的近似方法。

---

### 4.2.4 单脉冲稳定目标的精确可检测因子

对于稳定目标的单脉冲检测概率，可通过对信号加噪声电压的 Rician 分布 [3] 积分来获得 $P_{d}$，即分布中高于门限的部分：

$$
\begin{equation*}
P_{d}=\int_{E_{t}}^{\infty} \frac{E_{n}}{N} \exp \left(-\frac{E_{s}^{2}+E_{n}^{2}}{N}\right) I_{0}\left(\frac{E_{n} E_{s}}{N}\right) d E_{n} \tag{4.13}
\end{equation*}
$$

其中：

- $E_{n}=$ 瞬时噪声电压；  
- $N=$ 平均噪声功率；  
- $E_{s}=$ 信号峰值电压；  
- $E_{t}=$ 门限电压；  
- $I_{0}=$ 第一类修正贝塞尔函数，阶数为 0。  

信噪功率比为：

$$
\begin{equation*}
s=\frac{S}{N}=\frac{E_{s}^{2}}{2 N} \tag{4.14}
\end{equation*}
$$

门限电压可由虚警概率求得，即在 (4.13) 中令 $E_{s}=0$：

$$
\begin{align*}
P_{f a} & =\int_{E_{t}}^{\infty} \frac{E_{n}}{N} \exp \left(-\frac{E_{n}^{2}}{2 N}\right) d E_{n}=\exp \left(-\frac{E_{t}^{2}}{2 N}\right)  \tag{4.15}\\
E_{t} & =\sqrt{2 N \ln \left(1 / P_{f a}\right)}
\end{align*}
$$

图 4.1 展示了 $P_{d}$ 与 $S/N$ 的关系曲线，该结果由 (4.1) 式在不同 $P_{fa}$ 下的门限值计算得到。对于给定的 $P_{fa}$，在任意所需 $P_{d}$ 下，可直接从图 4.1 中读取 $D_{0}(1)$，精度约为 $\pm 0.1 \,\mathrm{dB}$；反之亦然。精确值可通过 (4.13) 的求根计算：

$$
\begin{equation*}
D_{0}(1)=\operatorname{root}_{E_{s}^{2} / 2 N}\left[P_{d}=\int_{E_{t}}^{\infty} \frac{E_{n}}{N} \exp \left(-\frac{E_{s}^{2}+E_{n}^{2}}{N}\right) I_{0}\left(\frac{E_{n} E_{s}}{N}\right) d E_{n}\right] \tag{4.16}
\end{equation*}
$$

---

### 4.2.5 单脉冲稳定目标的可检测因子近似

为了避免积分与求根，可以利用 North 的近似法 [10] 得到 $P_{d}$ 与 $D_{0}$ 的闭合近似式：

$$
\begin{gather*}
P_{d}=\Phi\left[\frac{E_{t}}{\sqrt{N}}-\sqrt{2 s+1}\right]=\Phi\left[\sqrt{2 \ln \left(1 / P_{f a}\right)}-\sqrt{2 s+1}\right]  \tag{4.17}\\
D_{0}(1)=\frac{1}{2}\left[\frac{E_{t}}{\sqrt{N}}-\Phi^{-1}\left(P_{d}\right)\right]^{2}-\frac{1}{2}=\left[\sqrt{\ln \frac{1}{P_{f a}}}-\frac{1}{\sqrt{2}} \Phi^{-1}\left(P_{d}\right)\right]^{2}-\frac{1}{2} \tag{4.18}
\end{gather*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-133.jpg?height=1107&width=1025&top_left_y=276&top_left_x=228)  
**图 4.1 单脉冲稳定目标可检测因子 $D_{0}(1)$**

这些近似在大多数情况下精度极高，仅在 $P_{d}$ 较低时略有偏差，如图 4.2 所示。在雷达方程的多数实际应用范围内，误差小于 $0.1 \,\mathrm{dB}$。

另一种近似 $D_{0}(1)$ 的方法是从 Case 1 目标（第 4.3.4 节）的简单精确解出发，再减去该目标对应的起伏损耗（见第 4.4.5 节），近似公式为 (4.54)。

### 4.2.6 多脉冲稳态目标可探测因子的近似方法

Shnidman [11] 给出了一种计算稳态目标多脉冲可探测因子的近似方法。他定义了一个参数 $\eta$：

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-134.jpg?height=785&width=977&top_left_y=272&top_left_x=250)  
图 4.2 North 近似与 $D_{0}(1)$ 精确值的比较。

$$
\begin{equation*}
\eta\left(P_{d}, P_{f a}\right)=\sqrt{-0.8 \ln \left[4 P_{f a}\left(1-P_{f a}\right)\right]}-\operatorname{sign}\left(0.5-P_{d}\right) \sqrt{-0.8 \ln \left[4 P_{d}\left(1-P_{d}\right)\right]} \tag{4.19}
\end{equation*}
$$

其中函数 $\operatorname{sign}(x)=1$ 当 $x \geq 0$，$=-1$ 当 $x<0$。由式 (4.19) 可得可探测因子：

$$
\begin{equation*}
D_{0 s}(n)=\frac{\eta^{2}}{n}+\frac{2 \eta}{n} \sqrt{\frac{n}{2}-\frac{1}{4}} \tag{4.20}
\end{equation*}
$$

这里增加的下标 ${ }_{s}$ 表示 Shnidman 近似。在该方法中仅需开方与对数运算。图 4.3 给出了三组 ($P_{f a}, n$) 下 $P_{d}$ 与可探测因子的关系。该近似在通常情况下的误差小于 0.1 dB。

另一种近似 $D_{0}(n)$ 的方法是从 Case 1 目标（见第 4.3.3 节）的简单精确计算出发，叠加积分损耗（由式 (4.51) 近似），并减去该目标对应的起伏损耗（由式 (4.54) 近似）。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-135.jpg?height=777&width=966&top_left_y=272&top_left_x=254)  
图 4.3 Shnidman 近似与 $D_{0}(n)$ 精确值的比较。

---

## 4.3 起伏目标的可探测因子

### 4.3.1 广义卡方目标起伏模型

几乎所有实际雷达目标的散射截面都会随时间、频率、入射角和极化而变化。大多数起伏目标的统计特性可用卡方分布描述。自由度为 $m$ 的卡方分布是 $m$ 个相互独立、服从正态分布分量的和的分布。未经相干积累的目标回波经过包络检波后，其统计分布服从 $m=2 n_{e}$ 自由度的卡方分布，其中 $n_{e}$ 为独立脉冲或信号样本数，每个样本都包含正交分量和同相分量，这些分量均服从正态分布。

Swerling [12] 提出了四种常用的随时间起伏的目标模型。这些模型的电压统计特性对应于不同自由度的卡方分布，用以表示目标电压矢量的高斯同相与正交分量的抽样情况，且目标可能具有快起伏或慢起伏。表 4.1 用自由度、独立目标样本数 $n_{e}$ 以及起伏速率（由目标相关时间 $t_{c}$ 与脉冲重复间隔 $t_{r}$ 的关系定义）描述了 Swerling 模型的统计特性。$n$ 个脉冲在积分时间 $t_{o}=n t_{r}$ 内接收。

表 4.1 Swerling 目标模型的参数 

| 情形 | 自由度 dof | $n_{e}$ | 起伏速率 |
| :---: | :---: | :---: | :--- |
| 1 | 2 | 1 | 慢起伏：$t_{c} \gg n t_{r}$ |
| 2 | $2 n$ | $n$ | 快起伏：$t_{c}<t_{r}$ |
| 3 | 4 | 2 | 慢起伏：$t_{c} \gg n t_{r}$ |
| 4 | $4 n$ | $2 n$ | 快起伏：$t_{c}<t_{r}$ |

这些模型应理解为适用于目标的回波信号，而不是目标本身，因为雷达系统相对于目标的位置可能随时间变化，雷达发射波形也可能因频率或极化分集而变化。雷达系统设计人员可利用分集（通常是频率分集）来改变给定目标的起伏统计特性，从而避免长时间衰落，此时可用并行或顺序的多信道。

虽然表 4.1 描述了四种 Swerling 情形，但广义卡方分布的适用范围更广。对于具有分集的雷达，估算 $n_{e}$ 的方法将在第 4.5 节中介绍。实际中常见 $n_{e}$ 的整数值并不限于 $1, 2, n, 2n$，还可能出现非整数值，这些情况均可通过文献 [13] 中提出的一般公式加以处理（见第 4.3.2 节）。

/// note | 典型应用场景
| 案例 | RCS分布类型 | 起伏特性 | 典型应用场景 |
| :--- | :--- | :--- | :--- |
| Case 0 | 经验公式近似 | 无明确物理意义 | 快速仿真／非标准场景 |
| Case 1 | 卡方分布（2自由度） | 慢起伏：扫描间独立，脉冲间相关 | 大型飞机、舰船等舁杂目标 |
| Case II | 卡方分布（2自由度） | 快起伏：脉冲间独立 | 螺旋桨飞机、无人机等快速起伏目标 |
| Case III | 卡方分布（4自由度） | 僈起伏：扫描间相关 | 战斗机、巡航导弹等中等复杂目标 |
| Case IV | 卡方分布（4自由度） | 快起伏：脉冲间独立 | 高速导弹等高机动目标 |
| Case V | 确定性（固定RCS） | 无起伏 | 校准目标、理论分析基准 |
///

### 4.3.2 具有卡方统计特性的信号检测

一个具有 $m$ 自由度（dof）的卡方分布变量小于某一数值 $\chi^{2}$ 的概率由 [7, p. 262, Eq. (6.5.5] 给出：

$$
\begin{equation*}
P_{\chi}\left(\chi^{2}, m\right)=\frac{1}{2^{m / 2} \Gamma(m / 2)} \int_{0}^{\chi^{2}} t^{(m / 2)-1} e^{-t / 2} d t, \quad 0 \leq \chi^{2} \leq \infty \tag{4.21}
\end{equation*}
$$

Barton 在 $[2,13]$ 中提出了一种近似方法，可以求解所有 Swerling 情形下的 $P_{d}$ 和 $D(n)$，并适用于具有任意自由度和 $n_{e}$ 的信号模型。卡方分布的积分 ${ }^{3} P_{\chi}\left(\chi^{2}, m\right)$ 及其逆函数 $P_{\chi}^{-1}(p, m)$ 在 [2,13] 中使用，但这里用相应的不完全伽马函数 $P_{\gamma}$ 及其逆函数替代，以便与 [6] 中给出的 Swerling 模型方程进行比较。两者的关系为：

$$
\begin{align*}
& P_{\chi}\left(\chi^{2}, m\right)=1-P_{\gamma}\left(\chi^{2} / 2, m / 2\right)  \tag{4.22}\\
& P_{\chi}^{-1}(p, m)=2 P_{\gamma}^{-1}(1-p, m / 2)
\end{align*}
$$

> ${ }^{3}$ [2,13] 中的符号 $K_{m}$ 和 $K_{m}^{-1}$ 在此处被替换为 $P_{\chi}$ 和 $P_{\chi}^{-1}$。

具有卡方波动目标的检测概率和基本可检测因子为 [2, p. 68, Eq. (2.64)]：

$$
\begin{align*}
P_{d}\left(s, P_{f a}, n, n_{e}\right) & =P_{\chi}\left[\frac{P_{\chi}^{-1}\left(P_{f a}, 2 n\right)-2\left(n-n_{e}\right)}{\left(n / n_{e}\right) s+1}, 2 n_{e}\right] \\
& =1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-\left(n-n_{e}\right)}{\left(n / n_{e}\right) s+1}, n_{e}\right]  \tag{4.23}\\
D\left(P_{d}, P_{f a}, n, n_{e}\right) & =\left[\frac{P_{\chi}^{-1}\left(P_{f a}, 2 n\right)-2\left(n-n_{e}\right)}{P_{\chi}^{-1}\left(P_{d}, 2 n_{e}\right)}-1\right] \frac{n_{e}}{n} \\ 
& =\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-\left(n-n_{e}\right)}{P_{\gamma}^{-1}\left(1-P_{d}, n_{e}\right)}-1\right] \frac{n_{e}}{n} \tag{4.24}
\end{align*}
$$

记号 $D\left(P_{d}, P_{f a}, n, n_{e}\right)$ 可以简化为 $D\left(n, n_{e}\right)$。在 Mathcad 等数学平台中，$P_{\chi}$、$P_{\gamma}$ 及其逆函数都作为内置函数提供。由 (4.24) 得出的 $D$ 的近似误差在大多数雷达和目标参数下小于 0.2 dB。  

记号 $D\left(n, n_{e}\right)$（带有适当的 $n_{e}$ 值）取代了雷达方程中的 $D(n)$，涵盖了前面讨论的所有目标统计情况，以及 Weinstock [14] 提出的分数自由度 $m$ 的情况。虽然稳态目标可以用 $n_{e} \geq 50$ 的卡方分布近似，但使用 Shnidman 的近似（见 4.2.5 节）能得到更好的精度。  

---

### 4.3.3 Swerling 情形 1

本节讨论情形 1，即所谓的瑞丽（Rayleigh） 目标（瑞丽分布即为具有两个自由度的卡方分布）。它在雷达中具有首要的重要性，因为它固有地存在于任何来自多个（例如大于约四个）强度相当的散射源的目标回波中。  

中心极限定理表明，$m$ 个独立变化量的和的分布在 $m$ 增大时趋向于高斯分布，而不依赖于它们各自的分布。因此，来自多个散射体（$m>4$）的矢量回波电压由高斯分布的同相与正交分量组成，而其矢量幅值则服从 Rayleigh 分布。在实际雷达操作中遇到的目标极少会显著偏离该分布，除非利用了雷达发射的多样性（参见 4.5 节）。  

Rayleigh 分布（Swerling 情形 1）目标的回波信号具有与纯噪声相似的 **信号加噪声电压和功率分布**，但其平均功率为平均信号功率和平均噪声功率之和：  

$$
\begin{align*}
& d P_{v}=\frac{v}{\bar{S}+N} \exp \left(-\frac{v^{2}}{2(\bar{S}+N)}\right) d v  \tag{4.25}\\
& d P_{p}=\frac{1}{\bar{S}+N} \exp \left(-\frac{p}{\bar{S}+N}\right) d p
\end{align*}
$$

其中：

- $v=$ 瞬时信号加噪声电压；  
- $\bar{S}=$ 平均信号功率；  
- $N=$ 平均噪声功率；  
- $d P_{v}=$ 瞬时信号加噪声电压位于 $v$ 与 $v+d v$ 之间的概率；  
- $p=$ 瞬时信号加噪声功率；  
- $d P_{p}=$ 瞬时信号加噪声功率位于 $p$ 与 $p+d p$ 之间的概率。  

#### 4.3.3.1 单脉冲情形 1 的精确方程

对于情形 1 的单个回波脉冲，其检测概率为

$$
\begin{equation*}
P_{d}=\int_{y_{b}}^{\infty} d P_{v}=\exp \left(-\frac{y_{b}^{2}}{2(\bar{S}+N)}\right)=\exp \left(\frac{\ln P_{f a}}{1+\bar{S} / N}\right) \tag{4.26}
\end{equation*}
$$

其中，$y_{b}$ 是由公式 (4.15) 给出的单脉冲判决电压阈值。  
式 (4.26) 可以很容易地反解得到基本的单脉冲可检测因子 $D_{11}=D_{1}(1)$ ：

$$
\begin{equation*}
D_{11}=\frac{\ln P_{f a}}{\ln P_{d}}-1 \tag{4.27}
\end{equation*}
$$

由于精确方程形式非常简单，因此在单脉冲情形 1 的检测计算中并不需要使用近似公式。

#### 4.3.3.2 多脉冲 ($n$ 脉冲) 情形 1 的精确表达式

对于情形 1 目标，采用 $n$ 脉冲积累时，$P_{d}$ 的精确表达式为 [6, p.390, Eq. (11.2-38)]：

$$
\begin{equation*}
P_{d 1}=1-P_{\gamma}\left(y_{b}, n-1\right)+\left(1+\frac{1}{n s}\right)^{n-1} \exp \left(-\frac{y_{b}}{1+n s}\right) P_{\gamma}\left[\frac{y_{b}}{1+1 / n s}, n-1\right], \quad n>1 \tag{4.28}
\end{equation*}
$$

其中，$P_{\gamma}(x, n)$ 为不完全伽马函数 (见公式 (4.3))，$y_{b}$ 是由公式 (4.6) 给出的判决阈值，$s=\bar{S}/N$ 是平均信噪比。

对于 $n>1$ 的情形 1 目标，其精确的可检测因子只能通过 (4.28) 的数值求根得到：

$$
\begin{equation*}
D_{1}(n)=\operatorname{root}_{s}\left\{P_{d 1}=1-P_{\gamma}\left(y_{b}, n-1\right)+\left(1+\frac{1}{n s}\right)^{n-1} \exp \left(-\frac{y_{b}}{1+n s}\right) P_{\gamma}\left[\frac{y_{b}}{1+1 / n s}, n-1\right]\right\} \tag{4.29}
\end{equation*}
$$

#### 4.3.3.3 多脉冲情形 1 可检测因子的近似式

检测概率的一个近似式为 [6, p.390, Eq. (11.2-39)]：

$$
\begin{equation*}
P_{d} \approx\left(1+\frac{1}{s n}\right)^{n-1} \exp \left(-\frac{y_{b}}{1+n s}\right) \tag{4.30}
\end{equation*}
$$

该公式是通过假设在 $P_{f a} \ll 1$ 时，(4.28) 中的不完全伽马函数接近于 1 而得出的。  
当 $n=1$ 时，该公式是精确的；在 $P_{f a}<0.05$ 时，$P_{d}$ 的误差小于 0.005；而当 $P_{f a}<0.01$ 或 $s>10$ 时，该误差可忽略不计。  
然而，该近似式无法反解得到可检测因子，因此需要进一步近似。

可检测因子可由 [6, p.392, Eq. (11.2-43)] 得到：该推导首先对 (4.30) 两边取自然对数，然后假设 $\ln (1+1/n s) \approx 1/n s$ 且 $1+n s \approx n s$，从而得到

$$
\begin{equation*}
D_{1}(n) \approx \frac{n-1-y_{b}}{n \ln P_{d}} \tag{4.31}
\end{equation*}
$$

采用 Gregers-Hansen 对 $y_{b}$ 的近似，可进一步得到：

$$
\begin{equation*}
D_{1}(n) \approx \frac{1}{n \ln \left(1 / P_{d}\right)}\left\{\sqrt{n}\left[\Phi^{-1}\left(P_{f a}\right)-\frac{\Phi^{-1}\left(P_{f a}\right)+\ln P_{f a}+1}{(1.1 n-0.1)^{0.51}}\right]+1\right\} \tag{4.32}
\end{equation*}
$$

该近似的精度如图 4.4 所示：当 $P_{d} \geq 0.3, \; P_{f a} \leq 10^{-3}$ 时，误差在 $\approx 0.5 \mathrm{~dB}$ 以内；而当 $n>10$ 时，精度进一步提高。对于 $n=1$，不绘制曲线，因为可由 (4.27) 直接精确计算。需要注意的是，在高检测概率和大 $n$ 的情况下，该近似非常精确，而精确公式可能超出内置函数的适用范围。

对于情形 1 目标的检测性能，可以由通用方程 (4.23) 和 (4.24) 描述，这些方程使用不完全伽马函数 $P_{\gamma}$ 及其逆函数 $P_{\gamma}^{-1}$ 表达，独立目标样本数为 $n_{e}=1$ ：  

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-140.jpg?height=779&width=968&top_left_y=1142&top_left_x=252)  
图 4.4 DiFranco 与 Rubin 的情形 1 近似公式与精确值比较，参数为 $n=2,10,100$，$P_{f a}=10^{-3}$ 和 $10^{-6}$。  

$$
\begin{align*}
& P_{d 1}\left(s, P_{f a}, n\right)=P_{d}\left(s, P_{f a}, n, 1\right)=1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-(n-1)}{n s+1}, 1\right]  \tag{4.33}\\
& D_{1}\left(P_{d}, P_{f a}, n\right)=D_{\gamma}\left(P_{d}, P_{f a}, n, 1\right)=\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-(n-1)}{P_{\gamma}^{-1}\left(1-P_{d}, 1\right)}-1\right] \frac{1}{n} \tag{4.34}
\end{align*}
$$

该通用方程的精度远高于 (4.31) 或 (4.32)，其结果如图 4.5 所示。该通用方程在 $n=1$ 时也能给出精确解。  

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-141.jpg?height=794&width=983&top_left_y=760&top_left_x=239)  
图 4.5 通用方程（虚线）与情形 1 精确可检测因子的比较。

### 4.3.4 Swerling 情形 2

#### 4.3.4.1 情形 2 的精确方程

对于情形 2 目标，$P_{d}$ 的精确表达式为 [6, p.404, Eq. (11.3-21)]：

$$
\begin{equation*}
P_{d 2}=1-\frac{1}{(n-1)!} \int_{0}^{y_{b} /(s+1)} y^{n-1} e^{y} d y=1-P_{\gamma}\left(\frac{y_{b}}{s+1}, n\right)=1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)}{s+1}, n\right] \tag{4.35}
\end{equation*}
$$

该精确结果同样可以由通用方程 (4.23) 得到，只需令 $n_{e}=n$：

$$
\begin{equation*}
P_{d 2}\left(s, P_{f a}, n\right)=P_{d}\left(s, P_{f a}, n, n\right)=1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)}{s+1}, n\right] \tag{4.36}
\end{equation*}
$$

可检测因子 $D_{2}(n)$ 可以通过对 (4.35) 关于 $s$ 求根得到，或者通过逆不完全伽马函数得到。由 (4.35) 可写为：

$$
\begin{equation*}
D_{2}(n)=s=\frac{y_{b}\left(P_{f a}, n\right)}{P_{\gamma}^{-1}\left(1-P_{d}, n\right)}=\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)}{P_{\gamma}^{-1}\left(1-P_{d}, n\right)}-1 \tag{4.37}
\end{equation*}
$$

该精确表达式同样可由通用方程 (4.24) 得到，只需令 $n_{e}=n$。

#### 4.3.4.2 情形 2 的检测概率与可检测因子的近似式

当无法直接使用逆不完全伽马函数时，可以采用 Gregers-Hansen 基于公式 (4.11) 的近似。然而，当 $P_{d}>0.95$ 时，该近似在 (4.37) 分母部分会出现问题，因此需谨慎使用。文献 [6, p.407] 中给出的近似误差更大，不推荐使用，尤其是在逆不完全伽马函数可以较容易计算的情况下。对于 $n>20$ 的稳态目标 $D_{0}$ 近似，可以在许多情况下给出足够精度的 $D_{2}$。

---

### 4.3.5 Swerling 情形 3

在文献 [6, p.410, Eq. (11.4-21)] 中，推导出了情形 3 下信号加噪声的概率密度函数。由此得到情形 3 检测概率的一个近似表达式 [6, p.421, Eq. (11.4-24)]：

$$
\begin{equation*}
P_{d 3}=\left(1+\frac{2}{n s}\right)^{n-2}\left(1+\frac{y_{b}}{1+(n s / 2)}-\frac{n-2}{n s / 2}\right) \exp \left(\frac{-y_{b}}{1+(n s / 2)}\right) \tag{4.38}
\end{equation*}
$$

该公式在 $n=1$ 或 2 时为精确解，而在更大的 $n$ 时为近似解。要反解 (4.38) 得到可检测因子 $D_{3}(n)$，只能通过数值求根的方法。

文献 [6] 中给出了 $n \gg 1$ 时的情形 3 近似，采用图解方法反解 $P_{d}$ 方程以得到 $D_{3}(n)$。更高精度的近似可以通过通用方程得到，此时令 $n_{e}=2$：

$$
\begin{gather*}
P_{d 3}\left(s, P_{f a}, n\right)=P_{d}\left(s, P_{f a}, n, 2\right)=1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-(n-2)}{(n / 2) s+1}, 2\right]  \tag{4.39}\\
D_{3}\left(P_{d}, P_{f a}, n\right)=D_{e}\left(P_{d}, P_{f a}, n, 2\right)=\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)-(n-2)}{P_{\gamma}^{-1}\left(1-P_{d}, 2\right)}-1\right] \frac{2}{n} \tag{4.40}
\end{gather*}
$$

结果如图 4.6 所示：当 $n=10$ 和 100 时，(4.38) 与 (4.40) 的曲线出现差异，这可能源自 (4.38) 的近似性；而在 $n=2$ 时，两组曲线完全一致。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-143.jpg?height=796&width=988&top_left_y=1063&top_left_x=254)  
图 4.6 通用方程 (4.40) 与公式 (4.38) 所得情形 3 可检测因子的比较。对于 $n=2$，通用方程与精确值完全重合。

### 4.3.6 Swerling 情形 4

情形 4 的 $P_{d}$ 精确表达式为 [6, p.427, Eq. (11.5-19)]：

$$
\begin{equation*}
P_{d 4}=1-\frac{n!}{[1+(s / 2)]^{n}} \sum_{k=0}^{n}\left[\frac{(s / 2)^{k}}{k!(n-k)!} P_{\gamma}\left(\frac{y_{b}}{1+(s / 2)}, n+k\right)\right] \tag{4.41}
\end{equation*}
$$

对 (4.41) 关于 $s$ 求根即可得到 $D_{4}(n)$。  
文献 [6, p.438, Eq. (11.5-25c)] 给出的情形 4 检测概率近似公式精度不足，而由通用方程推导出的近似式为：

$$
\begin{gather*}
P_{d 4}\left(s, P_{f a}, n\right)=P_{d}\left(s, P_{f a}, n, 2 n\right)=1-P_{\gamma}\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)+n}{(1 / 2) s+1}, 2 n\right]  \tag{4.42}\\
D_{4}\left(P_{d}, P_{f a}, n\right)=D_{e}\left(P_{d}, P_{f a}, n, 2 n\right)=2\left[\frac{P_{\gamma}^{-1}\left(1-P_{f a}, n\right)+n}{P_{\gamma}^{-1}\left(1-P_{d}, 2 n\right)}-1\right] \tag{4.43}
\end{gather*}
$$

式 (4.43) 的精度如图 4.7 所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-145.jpg?height=770&width=955&top_left_y=272&top_left_x=252)  
图 4.7 通用方程 (4.42) 与精确公式 (4.41) 所得情形 4 可检测因子的比较。

---

## 4.4 基于检测器损耗的近似方程

文献 [15] 提出了一种方法，可以在无需数值积分或求根的情况下，利用常见的袖珍计算器上可用的函数近似计算可检测因子。该方法所用的唯一特殊函数是 $\Phi(E)$ —— 即正态分布积分及其反函数 $\Phi^{-1}(P)$，由公式 (4.8) 给出，并且在文献 [7] 中提供了解析近似。该方法的价值在于，它将积累损耗与包络检波器输入端的信噪比联系起来；由于包络检波器的非线性，会破坏相干检测下可利用的信息。

### 4.4.1 相干检测

关于已知信号的检测，文献 [6, pp.291-298] 进行了讨论。  
一个单脉冲以已知的频率和相位到达后，通过相干检测器处理，其中的参考正弦波具有相同的频率和相位，从而对输入信号进行线性变换并在基带产生一个正脉冲。由此得到的检测器输出信噪比 $s_{o}$ 恰好是输入信噪比 $s$ 的两倍，因为检测器滤除了 50% 的噪声功率。判决阈值可精确表示为：

$$
\begin{equation*}
y_{b}=\Phi^{-1}\left(P_{f a}\right) \tag{4.44}
\end{equation*}
$$

检测概率为：

$$
\begin{equation*}
P_{d}\left(s, P_{f a}\right)=\Phi\left[\Phi^{-1}\left(P_{f a}\right)-\sqrt{2 s}\right] \tag{4.45}
\end{equation*}
$$

解 (4.45)，即可得到稳态目标在相干检测下单脉冲的可检测因子：

$$
\begin{equation*}
D_{c 1}\left(P_{d}, P_{f a}\right)=s=\frac{1}{2}\left[\Phi^{-1}\left(P_{f a}\right)-\Phi^{-1}\left(P_{d}\right)\right]^{2} \tag{4.46}
\end{equation*}
$$

例如，对于相干检测，当 $P_{d}=0.9, \; P_{f a}=10^{-6}$ 时，单脉冲需求为 $D_{c 1}=12.60 \,\mathrm{dB}$；相比之下，包络检波的单脉冲需求为 $D_{0}(1)=13.18 \,\mathrm{dB}$。  
当对 $n$ 个脉冲进行相干积累时，每个脉冲的需求为：

$$
\begin{equation*}
D_{c}\left(P_{d}, P_{f a}, n\right)=\frac{D_{c 1}\left(P_{d}, P_{f a}\right)}{n}=\frac{1}{2 n}\left[\Phi^{-1}\left(P_{f a}\right)-\Phi^{-1}\left(P_{d}\right)\right]^{2} \tag{4.47}
\end{equation*}
$$

由于先前未被检测到的信号其相位不可预测，因此相干检测在实际中无法实现。  
然而，它提供了一个最低基准，从该基准出发，只要已知包络检波固有的损耗，就可以推算非相干检测与积累情况下的需求值。


### 4.4.2 包络检波与检测器损耗

当信号与噪声一起通过包络检波器时，会产生检测器损耗（亦称为“小信号抑制效应”）。此时输出信噪比 $s_{o}$ 不再是相干检波时的 $2 s$，而是：

$$
\begin{equation*}
s_{o}=\frac{2 s}{C_{x}} \approx \frac{2 s^{2}}{s+2.3} \tag{4.48}
\end{equation*}
$$

其中近似式 $C_{x}=(s+2.3)/s$ 来自文献 [15] 的经验公式。  
将 $s_{o}=2 D_{c 1}$（满足检测要求所需条件），解得 $s=D_{0}(n)$，即可得到 $n$ 脉冲稳态目标的可检测因子：

$$
\begin{equation*}
D_{0}\left(P_{d}, P_{f a}, n\right) \approx \frac{D_{c 1}\left(P_{d}, P_{f a}\right)}{n}\left[\frac{1}{2}+\sqrt{\frac{1}{4}+\frac{2.3 n}{D_{c 1}\left(P_{d}, P_{f a}\right)}}\right] \tag{4.49}
\end{equation*}
$$

图 4.8 给出了利用检测器损耗计算可检测因子与公式 (4.12) 精确值的误差对比，其中 $n=1,10,100$，并且 $P_{f a}=10^{-3}$ 与 $10^{-6}$。该方法在 $P_{d}$ 极高时会低估需求，在 $P_{d}$ 极低时会高估需求，而在 $0.3<P_{d}<0.9$ 时误差在小数分贝量级内。

---

### 4.4.3 积分损耗

包络检波器输入端所需的总信号能量为 $n D_{0}(n)$。其与单脉冲能量需求之比称为积分损耗（integration loss），由 Marcum [4] 定义：

$$
\begin{equation*}
L_{i}(n) \equiv \frac{n D_{0}(n)}{D_{01}} \tag{4.50}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-147.jpg?height=785&width=970&top_left_y=272&top_left_x=252)  
图 4.8 基于检测器损耗推导的 $D_{0}(n)$ 与公式 (4.12) 精确值的比较。

其中 $D_{0}(1)$ 简记为 $D_{01}$。根据 (4.49)，将 $D_{c 1}$ 代换为 $D_{01}/C_{x}=D_{01}^{2}/\left(D_{01}+2.3\right)$，积分损耗可表示为：

$$
\begin{equation*}
L_{i}(n)=\frac{1+\sqrt{1+9.2 n\left(D_{01}+2.3\right) / D_{01}^{2}}}{1+\sqrt{1+9.2\left(D_{01}+2.3\right) / D_{01}^{2}}} \tag{4.51}
\end{equation*}
$$

正如文献 [15] 所指出的，积分损耗并非积分器本身的属性，而是由于积分增益使输入信噪比降低，从而导致检测器损耗增加。需要注意的是，$L_{i}$ 对 $P_{d}$ 与 $P_{f a}$ 的依赖仅体现在它们对 $D_{01}$ 的影响。由此，$L_{i}$ 只需一族曲线（如图 4.9），即可覆盖所有检测需求的组合，而无需针对每一对 $P_{d}$ 与 $P_{f a}$ 绘制无限多条曲线（其中一些已见于文献 [4] 及其他资料）。

可以看出，当 $n<10$ 且 $D_{01}>10 \,\mathrm{dB}$ 时，非相干积分的惩罚较小，但当 $n$ 较大时，积分损耗近似按 $\sqrt{n}$ 增长。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-148.jpg?height=790&width=1164&top_left_y=309&top_left_x=166)  
图 4.9 积分损耗随脉冲数变化的曲线，不同曲线对应不同的 $D_{01}$。

### 4.4.4 积分增益

非相干积分存在损耗 $L_{i}$ 并不意味着此类积分方式不可取。它仅表示在相同脉冲数下，非相干积分的效果不如相干积分。然而，相干积分往往是不可能的，甚至在某些情况下是不希望的。正如将在第 4.5.1 节中说明的，采用分集技术获得的 $2 \leq n \leq 10$ 个样本进行非相干积分时，即使能够实现相干积分，其在 $P_{d}>0.5$ 的条件下也可能表现出更优的性能。

非相干积分相对于单脉冲的性能增益定义为：

$$
\begin{equation*}
G_{i}(n)=\frac{n}{L_{i}(n)} \tag{4.52}
\end{equation*}
$$

该增益始终处于 $\sqrt{n} \leq G_{i} \leq n$ 的范围内。对于中等数量的 $n$，其近似为 $n^{0.8}$（例如，当 $n=10$ 时，$L_{i}(n) \approx 2 \,\mathrm{dB}$），条件是 $P_{d}$ 与 $P_{f a}$ 使得 $D_{01} \geq 12 \,\mathrm{dB}$。

---

### 4.4.5 起伏损耗

对于 **Case 1 起伏目标**，其可检测因子可通过稳态目标可检测因子 $D_{0}(n)$ 乘以起伏损耗 $L_{f 1}$ 得到，定义如下：

$$
\begin{equation*}
L_{f 1}(n) \equiv \frac{D_{1}(n)}{D_{0}(n)} \tag{4.53}
\end{equation*}
$$

其中 $P_{d}$ 与 $P_{f a}$ 在两类目标中保持一致。从图 4.10 可以看出，该损耗对 $P_{d}$ 的依赖性很强，而对 $P_{f a}$ 与 $n$ 的依赖性较弱。对于 $P_{d}\approx 0.35$，损耗约为 $0 \,\mathrm{dB}$；当 $P_{d}<0.35$ 时，损耗变为负值（即表现为增益）。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-149.jpg?height=715&width=951&top_left_y=1030&top_left_x=265)  
图 4.10 Case 1 起伏损耗 $L_{f 1}$ 随 $P_{d}$ 的变化曲线（不同 $P_{f a}$ 与 $n$ 的情况）。

对图 4.10 数据的解析近似可得 $L_{f 1}^{\prime}$（以 dB 表示）作为 $n, P_{d}, P_{f a}$ 的函数：

$$
\begin{equation*}
L_{f 1}^{\prime}(n) \approx\left[0.895 \log \left(1-P_{d}\right)-2\left(1-P_{d}\right)^{4}\right](1+0.03 \log n)\left[1-0.02\left(6+\log P_{f a}\right)\right]-1 \tag{4.54}
\end{equation*}
$$

---

### 4.4.6 Case 1 可检测因子

结合 (4.18)、(4.51) 与 (4.54)，Case 1 起伏目标的可检测因子为：

$$
\begin{equation*}
D_{1}\left(P_{d}, P_{f a}, n\right)=\frac{1}{n} D_{01}\left(P_{d}, P_{f a}\right) L_{i}(n) L_{f 1}\left(P_{d}, P_{f a}, n\right) \tag{4.55}
\end{equation*}
$$

该公式仅需要正态分布的反积分与对数函数，配合乘除运算即可完成计算。其精度（结合 North 近似的 $D_{01}$、检测器损耗近似的 $L_{i}$ 以及公式 (4.54) 的 $L_{f 1}$）见图 4.11。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-150.jpg?height=790&width=974&top_left_y=962&top_left_x=250)  
图 4.11 Case 1 可检测因子 $D_{1}(n)$ 随 $P_{d}$ 的变化曲线（不同 $P_{f a}$ 与 $n$）。

另一种计算方法是直接从曲线上读取并叠加各部分的分贝值：

- 稳态目标可检测因子 $D_{01}$（图 4.1），  
- 积分损耗 $L_{i}$（图 4.9），  
- 起伏损耗 $L_{f 1}$（图 4.10），  
  
然后再减去 $10 \log n$：

$$
\begin{equation*}
D_{1}^{\prime}(n)=D_{01}^{\prime}+L_{i}^{\prime}(n)+L_{f 1}^{\prime}(n)-10 \log n \tag{4.56}
\end{equation*}
$$

其中带撇号的符号表示以分贝为单位的数值。该方法不存在系统误差，但每条曲线的读取精度大约为 $\pm 0.1 \,\mathrm{dB}$。

### 4.4.7 其他起伏目标的可检测因子

文献 [15] 已经证明，起伏损耗的分贝值与独立目标样本数 $n_{e}$ 成反比：

$$
\begin{align*}
10 \log \left[L_{f}\left(n, n_{e}\right)\right] & \approx\left(1 / n_{e}\right) 10 \log \left[L_{f 1}(n)\right]  \tag{4.57}\\
L_{f}^{\prime}\left(n, n_{e}\right) & \approx\left(1 / n_{e}\right) L_{f 1}^{\prime}(n)
\end{align*}
$$

该近似与 Kanter [16] 所得到的精确结果非常接近。因此，对于任意 **卡方目标模型**，其可检测因子 $D^{\prime}$（以 dB 表示）可近似为：

$$
\begin{equation*}
D_{e}^{\prime}\left(n, n_{e}\right)=D_{01}^{\prime}+L_{i}^{\prime}(n)+\left(1 / n_{e}\right) L_{f 1}^{\prime}(n)-10 \log n \tag{4.58}
\end{equation*}
$$

Swerling 模型中 $n_{e}$ 的取值列于表 4.1；对于其他卡方模型，其 $n_{e}$ 的确定方法将在下一节中说明。

---

## 4.5 雷达中的分集

### 4.5.1 分集增益

当 $P_{d}>0.5$ 时，起伏损耗较大，这表明通过分集获取多个独立目标样本（$n_{e}>1$）并进行非相干积分，可以显著改善检测性能。

举例来说，假设在波束驻留时间 $t_{o}$ 内对 **Case 1 目标** 接收 16 个脉冲：  
$t_{o}=16 t_{r}$。这些脉冲可进行相干积分，从而在包络检波器处得到一个样本，其能量为 $E / N_{0}=16 E_{1} / N_{0}$，其中 $E_{1}$ 为单脉冲能量。若要求 $P_{d}=0.9$，$P_{f a}=10^{-6}$，由公式 (4.27) 得到：

$$
D_{1}(1)=130.1=21.1 \,\mathrm{dB}
$$

另一种方式是：如果发射机、天线及接收机的微波器件所允许的射频带宽足够，则可以将这 16 个脉冲分为不同频率的子组，例如：

- 两组 8 脉冲，  
- 四组 4 脉冲，  
- 八组 2 脉冲，  
- 或 16 个单脉冲分别发射在不同频率上。  

在每个频率子组内可以进行相干积分，而对不同频率组的输出再进行非相干积分。假设这些频率差异足够大以致回波去相关（见第 4.5.2 节），则所需总能量随分集样本数的变化如图 4.12 所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-152.jpg?height=581&width=895&top_left_y=604&top_left_x=307)  
图 4.12 Rayleigh 目标在不同检测概率下，$P_{f a}=10^{-6}$，16 脉冲内的分集样本数对应的总能量需求。

对于 $P_{d}=0.9$，当 $n_{e}=8$ 时性能最佳，总能量需求比无分集系统减少 4.9 dB；$n_{e}=4$ 的性能也几乎相当。随着 $P_{d}$ 从 0.9 降至 0.8 再到 0.5，最优 $n_{e}$ 依次从 8 减少到 4，再到 2。

---

### 4.5.2 分集下的信号与目标模型

雷达目标通常由多个散射源组成，其反射场在雷达天线处进行矢量叠加。当散射源数目超过约 4 个时，合成场的各正交分量的统计特性趋近高斯分布，从而对应于 **Case 1 目标**（$n_{e}=1$，自由度 dof $=2$），其电压服从 Rayleigh 分布。实际上，目标具有自由度大于 2 并无物理依据，尽管包含单一主散射源的目标常被近似建模为 **Case 3**（dof = 4）。  

因此，Swerling 模型应理解为：它们代表了雷达接收并处理的回波信号的分布，而分集则可以在 **时间、频率、空间，甚至极化** 上提供独立样本。

#### 4.5.2.1 时间分集

在积分时间 $t_{o}$ 内接收脉冲时，同相与正交电压分量可能发生变化，从而产生 $n_{e t}>1$ 个独立样本用于积分 [2, p. 86, Eq. (2.50)]：

$$
\begin{equation*}
n_{e t}=1+\frac{t_{o}}{t_{c}} \leq n \tag{4.59}
\end{equation*}
$$

其中 $t_{c}$ 为目标回波的相关时间，由 [2, p. 86, Eq. (2.60)] 给出：

$$
\begin{equation*}
t_{c}=\frac{\lambda}{2 \omega_{a} L_{x}} \tag{4.60}
\end{equation*}
$$

式中，$\lambda$ 为雷达波长，$\omega_{a}$ 为方位角变化率，$L_{x}$ 为目标散射体在视线平面上的横向跨度。需要注意，有效的相干积分时间受限于 $t_{f} \leq t_{c}$，因为在更长时间尺度上信号相位会失去相关性。

---

#### 4.5.2.2 频率分集

雷达常使用 **频率分集** 或 **频率捷变** 来获取额外的独立回波样本 [2, p. 87, Eq. (2.61)]：

$$
\begin{equation*}
n_{e f}=1+\frac{\Delta f}{f_{c}} \leq n \tag{4.61}
\end{equation*}
$$

其中，$\Delta f$ 为雷达工作频率变化的带宽，$f_{c}$ 为目标的相关频率 [2, p. 87, Eq. (2.62)]：

$$
\begin{equation*}
f_{c}=\frac{C}{2 L_{r}} \tag{4.62}
\end{equation*}
$$

这里 $c$ 为光速，$L_{r}$ 为目标散射体在径向上的跨度。多频信号可以体现在每个脉冲内的子脉冲，或体现在脉冲之间的频率变化。若使用 $m$ 个子脉冲，则积分的样本数增加为 $n^{\prime}=m t_{o} / t_{f}$。在相干积分时间 $t_{f}$ 内，载波频率必须保持不变。

---

#### 4.5.2.3 空间分集

**单基地雷达**在一条路径上观测目标，此时目标的方位角随时间缓慢变化，如 (4.60) 中的 $\omega_{a}$ 所示。**多基地雷达**使用多条同时存在的路径，可以利用空间分集在每个脉冲中获得多个独立样本。  

当发射与接收路径的平分线相对于目标轴的夹角为 $\theta$，并且发生变化量 $\Delta \theta$ 时，独立信号样本数为：

$$
\begin{equation*}
n_{e s}=1+\frac{\Delta \theta}{\theta_{c}} \tag{4.63}
\end{equation*}
$$

其中，$\theta_{c}=\lambda / 2 L_{x}$ 为目标反射图案在双程路径下的波瓣宽度。

---

#### 4.5.2.4 极化分集

雷达中使用正交极化天线通道的情况较少，但若具备，则可以使独立回波信号数增加至 $n_{e p}=2$。极化只有两种正交形式，例如：垂直与水平、右旋与左旋圆极化，或任意一对正交椭圆极化。

#### 4.5.2.5 可用的独立样本

在驻留时间内积分的独立信号样本数为：

$$
\begin{equation*}
n_{e}=n_{e t} n_{e f} n_{e s} n_{e p} \leq n \tag{4.64}
\end{equation*}
$$

前面推导出的 Marcum/Swerling 检测因子模型可以表示如下目标和雷达的情形：

- **情形 0**：单一散射体、固定方位角的角反射器或球形目标，可建模为 $n_{e} \rightarrow \infty$；  
- **情形 1**：瑞利目标，$t_{o} \ll t_{c}$ 且为固定频率雷达，得到 $n_{e}=1$；  
- **情形 2**：瑞利目标，$t_{r} \geq t_{c}$ 或 $\Delta f / f_{c} \geq n$，或两者结合，得到 $n_{e}=n$；  
- **情形 3**：瑞利目标，$t_{o} \ll t_{c}$ 且采用双频或双极化雷达，得到 $n_{e}=2$；  
- **情形 4**：情形 2 并结合空间或极化分集，得到 $n_{e}=2 n$。  

由此可见，Swerling 模型所描述的并不是不同的目标类型，而是由多散射体目标在不同分集条件下被雷达观测到的回波信号。对于飞机或其他复杂目标，如果采用固定频率雷达，则通常属于情形 1，除非 $t_{o}$ 至少达到 $t_{c}$ 的一个显著比例。对于在微波频段观测的飞机，$t_{c}>0.1 \mathrm{~s}$ 是常见情况，而在典型的积分时间下，$1<n_{e}<1.5$。要使目标接近情形 2，$t_{c}$ 必须接近脉冲重复间隔 $t_{r}$，这意味着（即使对毫米波雷达而言）方位角变化率要远高于通常情况下的数值。因此，在典型雷达-目标情形下，除非使用频率分集/捷变、空间分集或极化分集，否则一般有 $n_{e} \approx 1$。

---

## 4.6 可见性因子

关于人类操作员在观察阴极射线管显示器时的检测性能数据非常有限。二战期间，MIT 辐射实验室曾进行实验，以确定不同显示类型的可见性因子。其中一个结果是 **PPI 可见性因子 $V_{0(50)}$**，适用于在最佳观察条件下，稳定目标 $P_{d}=50 \%$ 时的情况，如图 4.13 所示。Blake [17, p. 2] 指出，该曲线一般适用于强度调制显示，并说明其
> 基于 [18] 的图 8.2 和 9.2 或 [19] 的图 1 和 21，经过调整至 0.5 概率并外推至单脉冲检测，同时在曲线两端对斜率略作修正。

对于图 4.13 所代表的过程，无法确定其虚警概率。典型的 PPI 显示大约包含 $10^{5}$ 个雷达分辨单元，并在约 $10$ 秒的扫描周期内呈现数据。因此，如果该过程中每次扫描产生一次虚警，则可假定 $P_{f a}=10^{-6}$。比较单脉冲条件下 $V_{0(50)}=13.2 \mathrm{~dB}$ 与稳定目标在 $P_{d}=50 \%, P_{f a}=10^{-6}$ 时的可检测因子 $D_{0}=11.2 \mathrm{~dB}$，可以看出，与匹配滤波器单通道输出的电子检测相比，视觉检测过程会产生约 $2 \mathrm{~dB}$ 的损失。公式 (1.16) 中出现的带宽修正因子 $C_{b}$ 是在此 $2 \mathrm{~dB}$ 损失之外的，因此即便 $C_{b}=0 \mathrm{~dB}$，相对于匹配滤波器电子检测，性能仍会下降 $2 \mathrm{~dB}$。

当要求的条件不是 $P_{d}=0.50$ 且 $P_{f a}=10^{-6}$（针对稳定目标）时，$V_{0}$ 数据无法提供关于所需能量比变化的参考。可以基于本章前面对电子检测的数据做近似估计。对于非最优观察条件和操作员表现的修正已在 [18] 中讨论过，但正如 Blake 在 [20, p. 370] 所指出的：

> 操作员损失（operator loss）的概念有时也会被使用，用于描述典型操作员相对于理想积分器所需的额外 $D_{0}$ 增加。然而，这里采取的方法是直接表达 $D_{0}$ 作为适用于真实人类操作员的数值。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-156.jpg?height=1064&width=1067&top_left_y=281&top_left_x=219)  
图 4.13 PPI 显示在最佳观察条件下的可见性因子 $V_{0(50)}$ [17]。

> 在实际中，操作员损失往往成为一个人为设定的因子，用以解释计算机性能与观测到的雷达性能之间的不一致。在某些情况下，这可能是合理的解释，但在另一些情况下，它可能被误用，以掩盖为何雷达实际性能低于计算预测的原因。无论如何，这一概念过于模糊，不能用于旨在评估特定雷达设计优劣或其他工程目的的作用距离计算。

在上述讨论中未涉及的一点是：匹配滤波器电子检测的 $D_{0}$ 与视觉检测的 $V_{0}$ 之间的差异。视觉检测中，接收机噪声带宽 $B_{n}=1.2 / \tau$，而视频带宽则受限于显示器分辨率。这一差异意味着，视觉检测过程必须包括与电子检测不同的损耗。

## 4.7 探测理论总结

本章介绍了基于探测理论计算基本可探测性因子的各种方法，目标模型包括稳态目标（情形 0）、由 Swerling 情形 1–4 描述的起伏目标，以及更一般的具有任意自由度卡方分布的目标回波。

- 对于情形 0–5，已有文献 [6] 给出了 $P_{d}$ 的精确表达式，其对应的信噪比误差在 0.01 dB 以内。利用求根方法对这些表达式进行求解，可以得到同样精度的可探测性因子。
- 还给出了在大多数实际情况下接近这一精度的 $D(n)$ 近似计算方法，并绘制了将其结果与通过精确方程求根得到的 $D(n)$ 进行比较的曲线。
- $D(n)$ 的数值包含两个可能作为单独项出现，也可能不单独列出的因子：积分损失 $L_{i}(n)$（见 4.4.3 节）和起伏损失 $L_{f}$（见 4.4.5 节）。这两种损失均会使 $D(n)$ 相对于理论最小值 $D_{01} / n$（适用于对稳态信号的相干积分）有所增加。在使用搜索雷达方程时，它们必须作为系统损失 $L_{s}$ 的组成部分加以考虑，但在使用常规雷达方程时无需单独求解。
- 任何雷达方程在得到 $D(n)$ 后，都需要针对所考虑的具体雷达计算一系列实际损失。1.3.2 节中介绍的 Blake 图表对带宽修正因子 $C_{b}$、波束形状损失 $L_{p}$ 和杂项损失 $L_{x}$ 进行了单独列出。1.4.2 节修改后的图表包含 $L_{p}$ 和 $L_{x}$，并用匹配因子 $M$ 代替 $C_{b}$。
- 波束形状损失 $L_{p}$ 是第 5 章的主题，而匹配因子 $M$ 及 $L_{x}$ 的若干组成部分将在第 10 章讨论。在雷达方程 (1.19)–(1.23) 中使用的有效可探测性因子 $D_{x}(n)$，是这些损失与 $D(n)$ 的乘积。因此，$D_{x}$ 包含了增加所需信噪能量比的损失。
- 降低可用能量比的损失，包括射频损失 $L_{t}$、大气损失 $L_{\alpha}$ 以及其他与距离相关的损失，则在 (1.26) 中作为单独因子考虑。

# 参考文献

[1] Blake, L. V., “Recent Advancements in Basic Radar Range Calculation Technique,” *IRE Trans. on Military Electronics*, Vol. MIL-5, No. 2, 1961 年 4 月, pp. 154–164.  

[2] Barton, D. K., *Radar System Analysis and Modeling*, Norwood, MA: Artech House, 2005.  

[3] Rice, S. O., “Mathematical Analysis of Random Noise,” *Bell System Tech. J.*, Vol. 23, No. 3, 1944 年 7 月, pp. 282–332；Vol. 24, No. 1, 1945 年 1 月, pp. 461–556. 重印于：*Selected Papers on Noise and Stochastic Processes* (N. Wax, ed.), New York: Dover Publ., 1954.  

[4] Marcum, J. I., “A Statistical Theory of Target Detection by Pulsed Radar,” RAND Corp. Res. Memo. RM-754, 1947 年 12 月 1 日。重印于：*IRE Trans. on Information Theory*, Vol. IT-6, No. 2, 1960 年 4 月, pp. 59–144；以及 *Detection and Estimation* (S. S. Haykin, ed.), Stroudsberg, PA: Halstad Press, 1976, pp. 57–121.  

[5] Marcum, J. I., “A Statistical Theory of Target Detection by Pulsed Radar (Mathematical Appendix),” RAND Corp. Res. Memo. RM-753, 1948 年 7 月 1 日。重印于：*IRE Trans. on Information Theory*, Vol. IT-6, No. 2, 1960 年 4 月, pp. 145–268.  

[6] DiFranco, J. V. 和 W. L. Rubin, *Radar Detection*, Englewood Cliffs, NJ: Prentice-Hall, 1968；Artech House, 1980.  

[7] Abramowitz, M. 和 I. A. Stegun, *Handbook of Mathematical Tables*, Natl. Bureau of Standards Applied Mathematics Series 55, Washington: U.S. Gov’t. Printing Office, 1964.  

[8] Gregers-Hansen, V., “Simple Expressions for Determining Radar Detection Thresholds,” *IEEE Trans. on Aerospace and Electronics Systems*, Vol. AES-18, No. 4, 1982 年 7 月, pp. 510–512。修正见 [9]。  

[9] Urkowitz, H., “Corrections to and Comments on ‘Simple Expressions for Determining Radar Detection Thresholds,’” *IEEE Trans. on Aerospace and Electronics Systems*, Vol. AES-21, No. 4, 1985 年 7 月, pp. 583–558.  

[10] North, D. O., “An Analysis of the Factors Which Determine Signal/Noise Discrimination in Pulsed Carrier Systems,” RCA Laboratories Technical Report PTR-6C, 1943 年 6 月 25 日。重印于：*Proc. IEEE*, Vol. 51, No. 67, 1963 年 7 月, pp. 1015–1027.  

[11] Shnidman, D. A., “Determination of Required SNR Values,” *IEEE Trans. on Aerospace and Electronic Systems*, Vol. AES-38, No. 3, 2002 年 7 月, pp. 1059–1064.  

[12] Swerling, P., “Probability of Detection for Fluctuating Targets,” RAND Corp Res. Memo RM1217, 1954 年 3 月 17 日。重印于：*IRE Trans. on Information Theory*, Vol. IT-6, No. 2, 1960 年 4 月, pp. 269–308；以及 *Detection and Estimation* (S. S. Haykin, ed.), Stroudsberg, PA: Halstad Press, 1976, pp. 122–158.  

[13] Barton, D. K., “Universal Equations for Radar Target Detection,” *IEEE Trans. on Aerospace and Electronic Systems*, Vol. AES-41, No. 3, 2005 年 7 月, pp. 1049–1052.  

[14] Weinstock, W. W., “Radar Cross-Section Target Models,” 见于 *Modern Radar* (R. S. Berkowitz, ed.), 第 VI-5 章, New York: John Wiley, 1965.  

[15] Barton, D. K., “Simple Procedures for Radar Detection Calculations,” *IEEE Trans. on Aerospace and Electronic Systems*, Vol. AES-5, No. 5, 1969 年 9 月, pp. 837–846。重印于：*Radars, Vol. 2, The Radar Equation* (D. K. Barton, ed.), Dedham, MA: Artech House, 1974, pp. 113–122.  

[16] Kanter, I., “Exact Detection Probability for Partially Correlated Rayleigh Targets,” *IEEE Trans. on Aerospace and Electronic Systems*, Vol. AES-22, No. 2, 1986 年 3 月, pp. 184–196.  

[17] Blake, L. V., “A Guide to Basic Pulse-Radar Maximum-Range Calculations,” Naval Res. Lab. Report 5868, 1962 年 12 月 28 日.  

[18] Lawson, J. L., 和 G. E. Uhlenbeck, *Threshold Signals*, MIT Radiation Laboratory Series, 第 24 卷, New York: McGraw-Hill, 1950。重印（CD-ROM 版）：Norwood, MA: Artech House, 1999.  

[19] Ashby, R. M., V. Josephson, 和 S. G. Sydoriak, “Signal Threshold Studies,” Naval Res. Lab. Report 3007, 1946 年 12 月.  

[20] Blake, L. V., *Radar Range-Performance Analysis*, Lexington, MA: D.C. Heath, 1980；Dedham, MA: Artech House, 1986.  
