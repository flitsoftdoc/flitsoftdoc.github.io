# HOOC-EM：面向LEO巨型星座用户终端的快速波束扫描方法

## HOOC-EM: Fast Beam Sweeping for LEO Mega-Constellation Customer Terminals 



Samuel C. Morgan 和 Todd E. Humphreys<br>

Department of Aerospace Engineering and Engineering Mechanics, The University of Texas at Austin

## 作者简介

Samuel C. Morgan（理学学士，默里州立大学；理学硕士，奥本大学）是德克萨斯大学奥斯汀分校航空航天工程与工程力学系的博士生，并是UT无线电导航实验室（UT Radionavigation Laboratory）的成员。他的研究兴趣包括融合LEO GNSS与信号处理。

Todd E. Humphreys（理学学士与硕士，犹他州立大学；博士，康奈尔大学）现任德克萨斯大学奥斯汀分校航空航天工程与工程力学系Ashley H. Priddy百年纪念工程教授。他是无线网络与通信小组（Wireless Networking and Communications Group）及UT无线电导航实验室的主任，专注于将最优检测与估计技术应用于定位、导航与授时（Positioning, Navigation, and Timing, PNT）。他曾获得UT校董教学卓越奖（2012）、NSF CAREER奖（2015）、ION Thurlow奖（2015）、PECASE奖（NSF, 2019）以及ION Kepler奖（2023）。他是导航学会（Institute of Navigation）与英国皇家导航学会（Royal Institute of Navigation）会士。

#### 摘要

在过去十年中，低轨卫星（LEO）宽带网络的普及程度显著增长。这些LEO网络由于频谱可用性问题，通常在较高载波频率上进行信号传输，导致卫星与用户终端（Customer Terminal, CT）都需采用窄波束成形。然而，现有的波束扫描方法仅针对地面毫米波（mmWave）网络（如IEEE 802.11ad、IEEE 802.11ay、IEEE 802.15.3c及3GPP的5G NR）而开发。这些标准均要求进行穷举波束扫描，在完成方位角与俯仰角的搜索后选择最佳波束对。由于LEO星座的动态性及频繁的星间切换，这些方法并不适用于LEO网络中的CT。

本文提出了一种用于LEO宽带网络中CT波束扫描的最大似然（Maximum Likelihood, ML）技术，称为六边形概率导向轨道梳理与俘获法（Hexagonal Odds-Based Orbital Comb and Entrainment Method, HOOC-EM）。该方法首先将天球划分为六边形与五边形扇区，依据CT的波束宽度划分。随后对各扇区应用概率密度函数（Probability Density Function, PDF），并按最大似然的顺序搜索（即从最可能检测到信号的扇区开始搜索），一旦检测到信号即停止。

本文基于星座的轨道仿真开发了经验先验概率密度函数与马尔可夫模型。该先验PDF会根据马尔可夫模型动态更新，以适应星座的动态变化。文章将HOOC-EM与基于其他两种先验PDF（均匀分布与随仰角线性分布）的ML方法进行了比较，后两者未采用马尔可夫模型进行动态更新。同时也将HOOC-EM与传统的光栅扫描波束搜索进行了比较。通过将检测平均耗时作为接收端波束宽度的函数进行对比分析，数值结果表明，当马尔可夫模型为近期状态时，HOOC-EM在LEO宽带波束扫描任务中展现出优越性能。

## I. 引言

高速数据传输已迅速成为现代通信的基础能力，使高质量视频流、远程高效办公以及逼真低延迟的扩展/增强现实（XR/AR）体验成为可能。为满足不断增长的带宽需求，宽带网络服务商需提升数据吞吐量。实现高数据吞吐量需从物理层（PHY）入手，尤其是提高射频（RF）信号的传输带宽，而带宽直接关系到可达的数据速率，因此必须提供足够的频谱资源。

尽管较低的中心频率因其更低的衰减和空间路径损耗而更具优势，但其可用频谱资源有限。因此，近年来兴起了使用更高中心频率（如毫米波，mmWave）进行通信的趋势，这些频段具有丰富的可用频谱 [Rappaport et al., 2014]。但缺点是信号在接收端的功率显著降低。为克服这一问题，发送端与接收端均需采用波束成形（Beamforming），通过聚焦收发增益至特定方向上的窄波束来提升信号功率。然而，这引入了空间维度问题，增加了基站（Base Station, BS）与CT之间保持通信链路以及CT入网的复杂度 [Andrews et al., 2014]。

无线通信网络通常为CT的入网流程制定了多种协议。入网意指CT成为网络的完全一体化节点，能够发送和接收数据。这意味着网络需掌握CT的位置、时间偏移与频率偏移等信息，以便开展资源分配机制（例如时分或频分双工）。在现有所有毫米波标准中，入网流程的第一步是波束扫描，其目标是实现收发双方波束的对准。在地面网络中，这通常要求发送端和/或接收端依据预设码本对所有可行方向进行扫描 [Xue et al., 2024]。

在IEEE的三项毫米波标准中（IEEE 802.11ad、IEEE 802.11ay、IEEE 802.15.3c），采用了两阶段的波束扫描机制，首先是所谓的扇区级扫描（Sector-Level Sweep, SLS）[Nitsche et al., 2014；Ghasempour et al., 2017；Baykas et al., 2011]。在SLS阶段，CT使用大角度、低分辨率波束扫描全部扇区。随后，在检测到信号最强的扇区中使用窄角度、高分辨率波束进行二次扫描，并选择最佳波束对。值得注意的是，发送端与接收端均需执行波束扫描，并轮流充当发起方与响应方，以建立波束配对。而在3GPP的5G NR标准中，gNodeB和/或CT将通过穷举搜索、比较参考信号接收功率（RSRP）和信噪加干比（SINR）来选择最佳波束对 [Heng et al., 2021]。

上述标准主要面向基础设施受限的地面网络。地面网络在偏远或农村地区常常难以提供覆盖，因此非地面网络（Non-Terrestrial Networks, NTNs）应运而生，利用LEO/MEO/GEO卫星及高空平台（High Altitude Platforms, HAPS）实现全球范围覆盖。NTN通常有两种形式：直连手机（Direct to Cell, D2C）与甚小口径终端（Very Small Aperture Terminals, VSATs）。本文聚焦于VSAT形式的NTN，即CT为VSAT。在这类应用中，LEO星座+VSAT的架构最为普及，SpaceX的Starlink便是代表性系统。

若将上述IEEE标准的波束扫描机制直接应用于LEO宽带系统，将面临诸多挑战。由于卫星与CT的高速动态变化，在扫描开始时最优的波束对可能在扫描结束时已不再最优。此外，卫星与CT之间的距离可能使得CT难以参与双向发起-响应式的波束配对机制。再者，即便CT具有高动态性能，在LEO条件下所遭遇的多普勒频移与时间延迟也远超地面网络可承受范围，进而引发一系列技术问题。

3GPP自Release 15版本开始就已对NTN在5G NR中的应用展开研究 [3GPP, 2017]，在Release 16中首次讨论波束管理问题，主要聚焦于卫星侧 [3GPP, 2023]。但截至目前，关于NTN中NR或未来6G中波束管理如何实施仍无最终决策，因此沿用Release 15中面向地面网络的框架作为基础。一些研究者提出了适用于NR NTN的波束管理改进方案 [Rinaldi et al., 2020；Kim et al., 2020；Wei et al., 2023]，也有研究验证了当前标准的适用性。例如 [Artiga and Vázquez, 2023] 评估了NR在LEO NTN中的波束管理机制，发现卫星跟踪可较容易完成，初始波束扫描耗时仅需几秒。然而其仿真条件较为理想，假设卫星总是从CT正上方经过，且最低仰角设为较高的68度或51度。

SpaceX的Starlink系统也要求其CT在入网前必须执行波束扫描程序。根据 [Kutkov, 2023]，Starlink的CT可通过两种模式入网：GNSS辅助或Starlink定位。作者指出，当GNSS可用时入网速度较快，而若仅依赖Starlink定位，则显著变慢。此外，该报告指出，Starlink定位目前尚不支持移动平台上的CT。

本文主要贡献如下：

- 提出HOOC-EM算法，一种面向LEO巨型星座CT的高效波束扫描策略。该算法基于波束宽度将天球像素化为六边形与五边形扇区，并利用星座轨道仿真构建经验性马尔可夫转移矩阵，从而生成初始概率密度函数。在波束扫描过程中，该马尔可夫矩阵用于动态更新各扇区的概率，考虑星座运行过程中的动态变化。
- 提供数值仿真验证HOOC-EM的有效性，显示其波束扫描耗时在不同波束宽度与仿真场景下可从不到一秒到几十秒不等。结果表明，当马尔可夫模型为近期状态时，HOOC-EM在性能上优于传统光栅扫描与其他未利用马尔可夫更新机制的两种六边形-五边形方法。

本文其余部分结构如下：第二节介绍贯穿全文的LEO宽带系统假设条件；第三节详细描述HOOC-EM算法流程；第四节说明所进行的仿真并展示其结果；第五节给出本文研究结论。



### 符号说明

列向量用小写加粗表示，例如 $\boldsymbol{x}$；标量则不加粗，例如 $x$。向量 $\boldsymbol{x}$ 的第 $n$ 个元素记作 $x(n)$。矩阵与张量也使用加粗符号表示，例如 $\boldsymbol{X}$。对于张量，其第 $m$ 行第 $i$ 列第 $k$ 个元素记作 $X_{m i}(k)$，第 $m$ 行第 $i$ 列的向量为 $\boldsymbol{X}_{m i}$，第 $m$ 个矩阵为 $\boldsymbol{X}_{m}$。本文统一采用从零开始的索引方式。

## II. 宽带LEO系统描述

本文假设一个概念性的低轨宽带星座（LEO broadband constellation）。该星座可以是一个专用通信网络，如SpaceX的Starlink系统，也可以是融合式的LEO全球导航卫星系统（GNSS），如[Iannucci and Humphreys, 2022]所描述的那种系统。在任何情况下，用户终端（Customer Terminal, CT）在初始入网（Initial Network Entry, INE）时必须获得接入许可。为了入网，CT需具备一些关于整体网络的先验知识。本节将讨论HOOC-EM方法得以实施以及最终实现完整网络接入所需的LEO网络假设前提。

### 1. 星座设计假设

一般而言，CT无需对星座的设计做出任何假设。HOOC-EM方法对星座类型、轨道倾角乃至轨道高度均不敏感。如有需要，该方法也可应用于中轨（MEO）或地球同步轨道（GEO）星座。然而，考虑到LEO是空间宽带通信的主流轨道类型，本文将聚焦于LEO星座。

尽管不强制要求某种具体星座类型，但对星座的一些先验知识可加快入网过程。例如，某一星座在特定时间段内，某些方位角与仰角更易被卫星所占据，且在某些纬度上有更高概率出现。这类星座知识可用于构建概率密度函数（PDF），实现最大似然（Maximum Likelihood）导向的卫星搜索，替代盲目的穷举搜索。这一思想正是HOOC-EM方法的核心内容，本文将在第3节详细展开。

### 2. 网络架构假设

本文对网络作出以下假设。首先，假设传输卫星通过定向波束发送下行信号，这一点已在Starlink、OneWeb与Iridium系统中得到应用 [Humphreys et al., 2023；Blázquez-García et al., 2023；Maine et al., 1995]。因此，本文也将借用部分 [Qin et al., 2023] 中的术语，尤其是“业务小区（service cell）”、“分配波束（assigned beam）”与“固定分配间隔（fixed assignment interval）”等术语，这些将在此处重新定义。

- **业务小区（service cell）**：指卫星波束所覆盖的区域，其中心由用户需求决定；
- **分配波束（assigned beam）**：指卫星朝向某个指定服务小区的波束；
- **固定分配间隔（Fixed Assignment Interval, FAI）**：指整个星座中波束指向保持不变的一段时间。本文假设网络的FAI为 $T_{\mathrm{FAI}}$ 秒，在此期间，卫星对某服务小区的波束保持不变。

注意，多个卫星可能同时向同一服务小区发送分配波束。假设这些波束中的传输信号在如下四个维度中的至少两个上正交：频率、时间、极化方式以及方向（方位与俯仰）。例如，假设所有分配波束在方向上总是正交的，但可能共享频率、时间或极化维度中的一个或多个。

卫星可采用“透明中继”（bent-pipe）或“再生式”（regenerative）架构。分配波束中传输的数据与同步序列在时间与频率上都具有差异性。特定频率与时间组合定义了一个信道，网络可自由选择该信道的数据调制方式。例如，Starlink采用正交频分复用（Orthogonal Frequency Division Multiplexing, OFDM），而Iridium采用差分编码正交相移键控（Differentially Encoded Quadrature Phase Shift Keying, DEQPSK）[Humphreys et al., 2023；Maine et al., 1995]。无论调制方式如何，假设信号中都包含某种导频（pilot）或同步序列。尽管这些序列会占用数据带宽，但它们对信道均衡与符号定时恢复是必要的，且可用于匹配滤波器中的信号检测。

最后，假设网络专门为CT入网预留了一个时间槽。在此时间槽中，卫星发送所谓“同步信号（synchronization signal）”。该信号为CT所知，可在波束扫描过程中用于匹配滤波器协助信号检测。同步信号每隔 $T_{\text{SS}}$ 秒才发送一次。注意，同步信号的持续时间远短于 $T_{\mathrm{SS}}$，其余帧内时间用于数据传输。同步周期 $T_{\text{SS}}$ 应显著大于卫星与CT之间距离所造成的时间偏移，从而留给CT足够的检测时间。

此外，本文假设CT处于高用户密度区域，即CT所在的服务小区始终至少被一个在某一频段与极化方式上传输信号的卫星波束所覆盖。


### 3. 用户终端假设

当用户终端（Customer Terminal, CT）上电时，初始入网（Initial Network Entry, INE）将在一个CT已知的专用频段与极化组合上进行。在该频段与极化组合上，只有一颗卫星专门为INE传输信号。然而，CT上电时并不知道这颗卫星的位置，因此必须在方位角与俯仰角上执行卫星搜索。

假设CT配备了相控阵天线（phased antenna array），能够将窄波束指向所需的方位角与俯仰角。该天线阵列还能够进行波束宽度调制，即可以电子方式生成任意波束宽度（采用图1所示的3 dB波束宽度定义）。CT假设具备使用相控阵天线所需的射频链路与相关硬件（如低噪声放大器、下变频器、模数转换器等）。此外，CT配备惯性测量单元（IMU）和磁力计，以确定其相对于本地东-北-天坐标系的姿态。虽然假设CT还带有机载GNSS接收机，但本文认为该接收机处于未激活或不可用状态。许多现有系统（包括SpaceX的Starlink）依赖GNSS来实现快速入网。这种关键依赖若在GNSS不可用、机载接收机故障或发生系统级GNSS失效时，将导致严重后果。因此，开发不依赖GNSS的技术具有重要意义。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-04.jpg?height=475&width=825&top_left_y=851&top_left_x=639) 

**图1**：接收天线性能的示意极坐标图，用于说明3 dB波束宽度的定义。波束宽度的典型定义为3 dB点或半功率点 [Maral et al., 2020]。在此情境下，$D$ 表示天线直径，$\alpha$ 表示从最大功率点 $G_{\text{max}}$ 起定义的任意角度，$G(\alpha)$ 表示在角度 $\alpha$ 处的增益。

## III. HOOC-EM 算法

HOOC-EM算法是一个多阶段过程，首先需定义合适的搜索空间，然后结合对目标网络的先验知识，将概率分配给搜索空间。接着将搜索空间及相关概率应用于波束扫描问题。以下将分别讨论这些步骤。

### 1. 搜索空间

HOOC-EM算法首先定义合适的搜索空间。对于天地通信，将观察者上方的空间视为一个以观察者为球心的球体是一种便捷方式。这种方法利用了空间目标以曲线轨迹运动的事实。该球体称为观察者的天球，本文后续将以其作为搜索空间。

现有的大多数波束扫描方法基于方位角与俯仰角的光栅扫描（raster scan）。光栅扫描是指在给定仰角下逐一搜索所有方位角，依次类推。然而，传统的光栅扫描并未考虑搜索空间的球面特性（例如，在90度仰角时无需搜索完整的360度方位角），因此导致搜索点数过多，效率低下。应考虑一种在保持全覆盖的同时使用更少搜索点的方法。

为保证在最少点数下实现全覆盖，有必要考虑多种球面划分方法。历史上，天球划分在遥感应用中已被证明非常有用，因为它方便计算机处理 [Chan, 1980；Tegmark, 1996；McCollum, 2001]。在这些应用中，划分为等面积的小区并在其中均匀布点是理想的。而在本应用中，点数少更有优势，而等面积划分尤为重要，因为它更好地对应恒定波束宽度。

鉴于本应用不需大量搜索点，可选择每个划分区域的质心作为代表点，并将划分面积近似匹配至所需波束宽度。本文将采用这种方法。

接下来需选择合适的划分方案。上述文献提出的多种划分方法都能有效地划分天球。要选择其中之一，需要考虑CT波束如何与天球相交。其截面大多近似圆形，在仰角接近0度时会稍有扁平。因此，更接近圆形的划分方案更为理想。同时，可扩展性也很关键：划分方案应能缩放以表示任意小的波束宽度。

在这些标准下，表1总结了不同划分方案。由此可见，[McCollum, 2001]提出的六边形划分方案最适合本文场景。相比之下，[Chan, 1980]提出的方形划分方案由于缺乏可扩展性而最不理想。尽管后续研究提出了可扩展的方形划分 [Dimitrijević et al., 2016]，但在面积效率方面仍不如六边形方案。至于[Tegmark, 1996]提出的三角形方案（即二十面体镶嵌），因其面积特性亦不适合本应用。因此，本文选择六边形划分方案。

表1：划分方法：形状、可扩展性与覆盖率

| 方法 | 形状 | 可扩展性 | 圆覆盖比例 |
| :--- | :--- | :---: | :---: |
| [Chan, 1980] | 方形 | 否 | $\frac{2}{\pi}$ |
| [Tegmark, 1996] | 三角形 | 是 | $\frac{3 \sqrt{3}}{4 \pi}$ |
| [McCollum, 2001] | 六边形* | 是 | $\frac{3 \sqrt{3}}{2 \pi}$ |

\* 六边形和精确的12个五边形。

需要注意，三角形与六边形方案本质上是相关联的。所有球面六边形划分最初均来自正二十面体（20个三角面，外接于单位球）。要实现六边形划分，需将正二十面体的每条边在中点截断，从而得到截角二十面体（truncated icosahedron），包含20个六边形面与12个五边形面。再将其面投影到单位球上即可形成划分区域。由于本文仅关心划分质心，因此只需将各面的质心投影到单位球上即可，得到近似等面积划分。

为了将划分面积映射到波束宽度，可计算每个划分的近似表面积（单位球面立体弧度）：

$$
\begin{equation*}
S_{\text {partition }} \approx \frac{4 \pi}{N_{\text {faces }}} \tag{1}
\end{equation*}
$$

其中 $N_{\text {faces}}$ 为多面体的面数。随后，波束宽度可近似为：

$$
\begin{equation*}
\theta_{3 \mathrm{~dB}} \approx \sqrt{S_{\text {partition }}} \times \frac{180}{\pi} \tag{2}
\end{equation*}
$$

例如，截角二十面体的划分对应波束宽度 $\theta_{3 \mathrm{~dB}} \approx 35.90^\circ$。该宽度仍较大。为进一步减小宽度，可从截角二十面体出发，取其对偶（dual）。对偶操作指在多面体各面质心处建立新顶点，并连接原有顶点形成新的多面体，再投影至单位球。得到三角形面后，可再次截断，生成新的六边形与五边形面。重复这一过程直至达到所需波束宽度。

算法1将该过程总结为面向对象程序：用户输入迭代次数 $N_{\text {iter}}$ 对应目标波束宽度，算法输出一个多面体对象。该对象初始化为单位二十面体，并在循环开始前截断一次。多面体对象包括顶点、面与质心，并具有truncate()与dual()方法，分别实现截断与对偶操作。循环迭代执行对偶与截断，直到迭代次数达到输入值。

表2总结了不同 $N_{\text {iter}}$ 值下生成多面体的特性。该方法允许广泛范围的波束宽度近似，在小波束宽度下可获得更高分辨率。尤其值得注意的是，与传统光栅扫描的点数相比，所需搜索的面数显著减少。此外，每次划分总会产生12个五边形面，这是欧拉公式 [Euler, 1758] 的必然结果，即球面无法完全用六边形平铺。图2展示了在 $N_{\text {iter}}=5$ 时，一个多面体在截断前后的情况，显示了六边形与五边形面。




**算法1：generatePolyhedron**

![](https://cdn.mathpix.com/snip/images/WNbON0JI9GdT0wxKsmIlPKzYNL5ktdrlsCSLyPS0Edc.original.fullsize.png)

**表2：多面体划分：面数与波束宽度分析**

| $N_{\text{iter}}$ | 面数 | 六边形数 | 五边形数 | 波束宽度（度） | 光栅扫描点数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 32 | 20 | 12 | 35.90 | 66 |
| 2 | 122 | 110 | 12 | 18.39 | 200 |
| 3 | 272 | 260 | 12 | 12.32 | 450 |
| 4 | 482 | 470 | 12 | 9.25 | 780 |
| 5 | 752 | 740 | 12 | 7.41 | 1225 |
| 6 | 1082 | 1070 | 12 | 6.17 | 1770 |
| 7 | 1472 | 1460 | 12 | 5.29 | 2415 |
| 9 | 2432 | 2420 | 12 | 4.11 | 3872 |
| 12 | 4322 | 4310 | 12 | 3.09 | 6903 |
| 14 | 5882 | 5870 | 12 | 2.64 | 9453 |

### 2. 概率赋值

在定义好合适的搜索空间后，需要为每个划分区域分配概率，以便执行最大似然（Maximum Likelihood）搜索。第一步是将不可能包含卫星的搜索单元的概率设为零。这些单元通常可通过俯仰角判断——低于最小俯仰角的六边形或五边形扇区应设为零概率。用户可根据需求设置该遮罩角（mask angle），不过大多数网络会规定一个最小俯仰角，低于该角度时卫星不会发射。例如，SpaceX的Starlink系统在Ku波段操作下的最小俯仰角为25度，Amazon的Kuiper系统则要求CT最小俯仰角为35度 [Space Exploration Holdings, 2020；Systems, 2019]。若已知网络设置，采用网络定义的最小仰角是推荐做法，可显著缩小搜索空间。而用户自定义的最小仰角虽然也有效，但可能导致搜索空间过大或过小。

在缩减搜索空间后，需对剩余单元应用适当的概率密度函数（Probability Density Function, PDF）。一种方案是对剩余区域施加均匀分布，从而实现完全随机搜索。然而，这种策略较差，因为概率赋值不合理。可通过考虑卫星通信的一个共性特征来显著提升搜索效率：卫星网络倾向于优先使用高仰角卫星进行通信，因为这些信号在接收端具有更高的功率。因此，更有效的策略可能是先搜索高仰角区域，因为这些区域更可能包含卫星。由于CT可能无法精确知道仰角概率分布，因此需采用假设分布（如线性、指数分布等）。图3展示了在最小仰角为35度的条件下，分别应用均匀PDF与基于仰角的PDF后的热力图。PDF被映射到最大似然搜索准则上，其中1表示最可能的单元，0表示最不可能。可见，仰角导向的PDF更贴近实际通信卫星的行为。因此，当CT对其所属网络一无所知时，最合理的方法是施加用户定义的最小仰角，并使用基于仰角的PDF。但如果可获得网络参数的近期信息，则存在更优策略。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-07.jpg?height=852&width=1757&top_left_y=249&top_left_x=181)

**图2**：左图为在 $N_{\text{iter}}=5$ 时的三角形面多面体，右图为其截断后形成的多面体，展示六边形与五边形面。

若CT在断电前曾接入网络，且能获得星座的近期状态信息，可采用更高级的方法构建PDF，这是HOOC-EM算法快速收敛的关键。具体流程如下：

设网络由一组卫星组成，每颗卫星可通过其位置与速度向量 $\boldsymbol{r}$ 与 $\boldsymbol{v}$ 表示，并可通过数值积分法传播。CT位于先前定义的球面搜索空间原点，每个六边形划分视为一次波束扫描中需搜索的单元。通过在所选时间段内传播卫星的位置与速度，并记录每一时刻各卫星位于的单元，可采用频率统计法估算每个单元被占据的概率密度。

设搜索空间共有 $N$ 个六边形与五边形单元，$p(i)$ 表示第 $i$ 个单元被至少一颗卫星占据的概率，$n(i)$ 表示第 $i$ 个单元被占据的历元数，则有：

$$
\begin{equation*}
p(i) \approx \frac{n(i)}{\sum_{j=0}^{N-1} n(j)}, \quad i \in\{0,1, \ldots, N-1\} \tag{3}
\end{equation*}
$$

所有 $N$ 个概率构成搜索空间的PDF，记为 $\boldsymbol{p} = [p(0), p(1), \ldots, p(N-1)]^{\top}$。由于CT初始位置未知，且卫星的可见性及其方位/俯仰角随纬度变化，需在所有可能的纬度上重复该估计过程。得到的特定纬度 $\lambda$ 下的PDF记作：

$$
\boldsymbol{p}_{\lambda} = [p_{\lambda}(0), p_{\lambda}(1), \ldots, p_{\lambda}(N-1)]^{\top}
$$

若CT上电后仍无法获取位置信息，则应对纬度进行边缘化处理。这可通过赋予CT可能纬度一个PDF来实现，例如使用人口密度数据。考虑到CT更可能在人员密集地区上电，可通过将每个纬度的人口密度除以总人口得出该纬度的概率。例如，图4展示了基于 [Kummu and Varis, 2011] 人口密度数据构建的纬度PDF $L_{\lambda}$。

最终可通过下式将纬度边缘化：

$$
\begin{equation*}
p(i)=\sum_{\lambda=\lambda_{\min }}^{\lambda_{\max }} L_{\lambda} \cdot p_{\lambda}(i) \tag{4}
\end{equation*}
$$

此时已获得根据卫星位置且独立于CT纬度的搜索空间PDF，但该PDF仍不适合直接用于最大似然搜索。原因在于该PDF只反映卫星位置的概率，而未考虑其发射概率。考虑到卫星更倾向于在高仰角方向发射，因此更合理的做法是构造一个联合PDF，综合卫星位置与仰角两因素。

为此，将之前获得的 $\boldsymbol{p}$ 与基于仰角的PDF $\boldsymbol{e} = [e(0), e(1), \ldots, e(N-1)]^{\top}$ 进行逐元素乘积并归一化，得联合PDF $\boldsymbol{x}$：

$$
\begin{equation*}
x(i)=\frac{p(i) \cdot e(i)}{\sum_{i=0}^{N-1} p(i) \cdot e(i)} \tag{5}
\end{equation*}
$$

若CT掌握更多特定网络信息，可进一步优化该联合PDF，但此类情况不在本文讨论范围之内，因为不同网络差异显著。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-08.jpg?height=686&width=1769&top_left_y=241&top_left_x=178)

**图3**：在设定最小仰角为35度后，左图为施加均匀PDF的热力图，右图为施加基于仰角PDF的热力图。图中将PDF映射为最大似然搜索准则，最可能单元赋值为1，最不可能为0。

目前的联合PDF $\boldsymbol{x}$ 已非常接近搜索空间的真实分布，但仍未考虑卫星动态性。实际上，最大似然搜索一个最佳波束对往往需跨越多个时刻，而当前PDF仅代表某一瞬时状态。尽管公式（3）通过时间边缘化处理CT上电时间未知问题，但该方法不足以应对长时搜索。

在最大似然搜索过程中，已搜索的单元会被赋予0概率以避免重复搜索。但考虑到卫星的动态行为，在整个搜索过程中永久将某单元设为0可能导致错误。随着时间推移，先前已搜索的单元再次被发射卫星占据的概率会上升。


为了更好地建模这种动态行为，本文采用马尔可夫模型（Markov model）。由于CT未知确切时间，且未考虑卫星动力学模型中的高阶项，因此从CT视角看，卫星在单元之间的转移可视为随机过程。这一方法能更准确地表征搜索过程中概率的演变，从而提升搜索效率与准确性。幸运的是，在计算 $\boldsymbol{p}_{\lambda}$ 的相同仿真中即可获得转移概率，且这些转移概率同样依赖于纬度。设 $\boldsymbol{M}_{\lambda}$ 为纬度 $\lambda$ 下的马尔可夫转移矩阵，$M_{\lambda, i}(j)$ 为在纬度 $\lambda$ 时，卫星从第 $i$ 个单元转移至第 $j$ 个单元的概率。该随机矩阵 $\boldsymbol{M}_{\lambda}$ 可写为：

$$
\boldsymbol{M}_{\lambda}=\left[\begin{array}{cccc}
M_{\lambda, 0}(0) & M_{\lambda, 0}(1) & \ldots & M_{\lambda, 0}(N-1)  \tag{6}\\
M_{\lambda, 1}(0) & M_{\lambda, 1}(1) & \ldots & M_{\lambda, 1}(N-1) \\
\vdots & \vdots & \ddots & \vdots \\
M_{\lambda, N-1}(0) & M_{\lambda, N-1}(1) & \ldots & M_{\lambda, N-1}(N-1)
\end{array}\right]
$$

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-09.jpg?height=633&width=1754&top_left_y=262&top_left_x=184)

**图4**：基于 [Kummu and Varis, 2011] 数据得到的CT纬度概率密度函数（PDF）。

矩阵 $\boldsymbol{M}_{\lambda}$ 的元素可通过类似于式（3）计算 $\boldsymbol{p}_{\lambda}$ 的数值仿真方法近似得到。具体而言，可构建矩阵 $\boldsymbol{A}_{\lambda}$，其元素 $A_{\lambda, i}(j)$ 表示在纬度 $\lambda$ 时，任一卫星从第 $i$ 个单元转移至第 $j$ 个单元的次数。矩阵 $\boldsymbol{A}_{\lambda}$ 的结构与式（6）相同。虽然 $\boldsymbol{A}_{\lambda}$ 不直接用于矩阵运算，但其矩阵形式便于数据存储。随后，$\boldsymbol{M}_{\lambda}$ 的元素可按下式近似：

$$
\begin{equation*}
M_{\lambda, i}(j) \approx \frac{A_{\lambda, i}(j)}{\sum_{k=0}^{N-1} A_{\lambda, i}(k)}, \quad i, j \in\{0,1, \ldots, N-1\} \tag{7}
\end{equation*}
$$

此外，可对纬度进行边缘化处理。方法是利用式（4）相同的过程，将 $\boldsymbol{A}_{\lambda}$ 按照纬度PDF加权求和，得到边缘化版本 $\boldsymbol{A}$：

$$
\begin{equation*}
\boldsymbol{A}=\sum_{\lambda=\lambda_{\min }}^{\lambda_{\max }} L_{\lambda} \boldsymbol{A}_{\lambda} \tag{8}
\end{equation*}
$$

然后，即可按式（7）近似计算转移概率 $M_{i}(j)$。值得注意的是，提取马尔可夫转移矩阵消除了直接计算 $\boldsymbol{p}$ 的必要性。相反，$\boldsymbol{p}$ 可由 $\boldsymbol{M}$ 推导得出。由于 $\boldsymbol{M}$ 是一个正随机矩阵，因此其必有一个特征值为1，其余特征值的绝对值均小于1。根据Perron-Frobenius定理，$\boldsymbol{M}$ 必存在一个唯一的归一化稳态向量，位于1-特征空间内 [Robinson, 2002]。即，以下差分方程的稳态解：

$$
\begin{equation*}
\boldsymbol{\pi}^{\top}=\boldsymbol{\pi}^{\top} \boldsymbol{M} \tag{9}
\end{equation*}
$$

存在并可作为一个有效的PDF。该解表示马尔可夫模型的稳态行为，对应于搜索空间中各单元包含至少一颗卫星的概率，这也正是 $\boldsymbol{p}$ 的定义。

**算法2** 总结了HOOC-EM中为搜索空间分配概率的过程，设计为面向对象程序。输入包括：由算法1生成的多面体对象，以及具有simulate()与count()成员函数的星座对象。simulate()函数用于在时长 $T$ 秒、更新周期 $\Delta t$ 秒的条件下模拟星座，并记录各历元中卫星的状态；count()函数用于跟踪卫星在给定纬度 $\lambda$ 下从一个单元转移至另一单元的次数。

附加输入包括：仿真时长 $T$、更新周期 $\Delta t$、最小纬度 $\lambda_{\min}$ 和最大纬度 $\lambda_{\max}$。算法输出 $\boldsymbol{p}$ 与 $\boldsymbol{M}$，供后续搜索算法使用。


### 3. HOOC-EM 搜索

在定义好搜索空间并分配概率之后，即可开始搜索。该搜索过程与典型的最大似然（Maximum Likelihood, ML）搜索类似，算法会从PDF中概率最高的单元开始搜索，依次类推。不同之处在于引入了马尔可夫模型（Markov model），它会在搜索过程中持续更新PDF。

需要注意的是，HOOC-EM依赖的马尔可夫转移矩阵必须是相对“新鲜”的。在完全冷启动的情况下，CT首先会执行基于仰角的搜索以启动入网流程。此后，只要CT与网络保持连接，网络就会向CT提供“新鲜”的马尔可夫转移矩阵。如果CT短时间内关机再开机，即可利用这些矩阵执行HOOC-EM。关于转移矩阵需要多“新鲜”才能有效的问题仍需研究，但第IV节的结果表明，在至少一个轨道周期内该矩阵仍是有效的。

---

**算法2：assignProbabilities**

![](https://cdn.mathpix.com/snip/images/7wzAm2yE_02Y7ojxvSE-O8mRyn4udcj3_9OJSrn7WeE.original.fullsize.png)

---

算法3给出了HOOC-EM中最大似然搜索的程序化描述。其输入包括：一个searchSpace对象（可表示整个多面体，或在施加最小仰角后得到的简化版本）；PDF向量 $\boldsymbol{x}$；以及马尔可夫转移矩阵 $\boldsymbol{M}$。需要注意的是，$\boldsymbol{x}$ 和 $\boldsymbol{M}$ 都对应整个多面体，而非仅限于搜索空间。这是因为在搜索空间边界发生的转移更难建模。此外，由于在先前步骤中已施加基于仰角的PDF，$\boldsymbol{x}$ 在低于最小仰角的单元中概率本就为零。

**算法3：maximumLikelihoodSearch**

![](https://cdn.mathpix.com/snip/images/KQg2-GLMH7mbBTfq1ojsWj_5lIEHf-NlwAWb1V2IDlM.original.fullsize.png)

算法开始时，会识别出概率最高的单元索引，并将该单元的概率设为零。searchCell()函数负责确定该单元中心的方位角和俯仰角，将相控阵天线波束指向该方向，从ADC读取采样，并与本地同步信号副本进行相关，测量得到的信号功率。如果功率超过阈值，则返回检测结果为True，循环结束，并输出方位角和俯仰角（'az'与'el'）。若功率低于阈值，则返回False，并利用马尔可夫转移矩阵更新PDF。该过程将持续，直到检测结果为True。最终返回的方位角与俯仰角可用于后续的卫星跟踪。

最后，HOOC-EM算法的整体流程可归纳为一个面向对象的程序，其调用算法1、算法2和算法3作为函数。值得注意的是calcJointPDF()与applyMinimumElevationAngle()两个函数：前者实现式（5）的运算，生成基于最小仰角 $\mathrm{el}_{\text{min}}$ 的PDF $\boldsymbol{e}$；后者则剔除所有中心点低于 $\mathrm{el}_{\text{min}}$ 的单元。

**算法4：HOOC-EM**

![](https://cdn.mathpix.com/snip/images/2SedvP5y484XTJo8ipHeirpN5gG3blSONDbyiKdJsHc.original.fullsize.png)

---

## IV. 仿真与结果

现在可以利用一个典型的通信星座对HOOC-EM进行测试。本文选用Amazon Kuiper-Ka星座的近似参数进行仿真，参数来自 [Systems, 2019]。该星座为LEO星座，由3个不同高度与倾角的轨道壳层组成。表3列出了各轨道壳层的参数。虽然文献未给出星座仿真的精确参数，但其宣称该星座可在赤道以北56度至以南56度之间提供良好覆盖。实现这一目标的一种方式是将每个壳层建模为Walker Delta星座，本文采用这一方法。

**表3：仿真星座参数：高度与倾角 [Systems, 2019]**

| 高度 (km) | 倾角 (度) | 轨道面数 | 每面卫星数 | 卫星总数 |
| :---: | :---: | :---: | :---: | :---: |
| 590 | 33 | 28 | 28 | 784 |
| 610 | 42 | 36 | 36 | 1296 |
| 630 | 51.9 | 34 | 34 | 1156 |

---

在Walker Delta星座模型下，可确定每颗卫星的轨道根数（Classical Orbital Elements, COE），并基于COE利用数值积分方法进行时间传播。为分配概率，本文采用二体模型（two-body model）传播星座，不考虑摄动。二体模型具有解析解，其周期为一个轨道周期。将轨道结果转换至地心地固坐标系（ECEF）后，星座在若干个可整除轨道周期的恒星日后可完全重复。考虑到新兴通信星座常包含多个壳层（如Kuiper-Ka星座），只有在轨道周期的最大公倍数所对应的恒星日后，星座才会完全重复。然而，这一周期过长，不适合仿真。因此，本文仅考虑一个轨道周期进行测试。换言之，得到的PDF与马尔可夫转移仅在一个轨道周期内有效，对Kuiper-Ka星座而言约为80分钟。

设 $\boldsymbol{r} = [x, y, z]^{\mathrm{T}}$ 为地心惯性坐标系（ECI）下的卫星位置状态向量，$\mu$ 为地球标准引力常数，$\|.\|_{2}$ 为欧几里得范数，$f(t, \boldsymbol{r}, \dot{\boldsymbol{r}})$ 表示未建模的时间相关摄动，则二体运动方程为：

$$
\begin{equation*}
\ddot{\boldsymbol{r}}=-\frac{\mu}{\|\boldsymbol{r}\|_{2}^{3}} \boldsymbol{r}+f(t, \boldsymbol{r}, \dot{\boldsymbol{r}}) \tag{10}
\end{equation*}
$$

该方程可通过数值积分方法进行传播。图5展示了表3所描述的星座在一个轨道周期内的传播结果。同时展示了在最小仰角35度下，平均可见卫星数随纬度变化的曲线，该结果与[Systems, 2019]中给出的图表高度一致。

在图5的仿真星座基础上，将卫星位置从ECI坐标系转换至ECEF坐标系，并依照第III.2小节的方法，在表2描述的多面体划分上分配概率，设最小仰角为35度，联合PDF采用基于仰角的指数分布。设波束宽度为 $\beta$（单位：度），图6展示了按最大似然准则得到的概率密度函数分布：概率最高的单元赋值为1，其余单元依次递减。


### 1. 仿真

在分配好概率之后，使用蒙特卡洛（Monte Carlo）仿真来验证HOOC-EM的有效性。蒙特卡洛仿真过程如下：星座基于二体模型（two-body model）传播一个轨道周期。然而，在蒙特卡洛仿真中，会将 $J_{2}$ 摄动建模并纳入星座传播。这相当于在控制段计算马尔可夫转移矩阵 $M$ 时，用来替代未建模摄动的近似。对于LEO卫星，最显著的摄动加速度来源于地球非均匀引力场，其中最主要的是称为 $J_{2}$ 的带状项 [Curtis, 2009]。设 $R_{e}$ 为地球平均半径，$J_{2}=1.08262668355 \times 10^{-3}$ 为无量纲带状系数，则LEO卫星在ECI坐标系下的运动方程为 [Morales et al., 2019]：

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-12.jpg?height=693&width=1695&top_left_y=281&top_left_x=178)

**图5**：左图为模拟的LEO星座（地球上空视图）；右图为在最小仰角35度条件下，每隔5度（由三角符号表示）统计的不同纬度下可见卫星平均数量。

$$
\begin{align*}
\ddot{x} & =\frac{-\mu x}{\|\boldsymbol{r}\|_{2}^{3}}\left[1+J_{2} \frac{3}{2}\left(\frac{R_{e}}{\|\boldsymbol{r}\|_{2}}\right)^{2}\left(1-5 \frac{z^{2}}{\|\boldsymbol{r}\|_{2}^{2}}\right)\right] \\
\ddot{y} & =\frac{-\mu y}{\|\boldsymbol{r}\|_{2}^{3}}\left[1+J_{2} \frac{3}{2}\left(\frac{R_{e}}{\|\boldsymbol{r}\|_{2}}\right)^{2}\left(1-5 \frac{z^{2}}{\|\boldsymbol{r}\|_{2}^{2}}\right)\right]  \tag{11}\\
\ddot{z} & =\frac{-\mu z}{\|\boldsymbol{r}\|_{2}^{3}}\left[1+J_{2} \frac{3}{2}\left(\frac{R_{e}}{\|\boldsymbol{r}\|_{2}}\right)^{2}\left(3-5 \frac{z^{2}}{\|\boldsymbol{r}\|_{2}^{2}}\right)\right]
\end{align*}
$$

式（11）通过数值积分方法求解，每颗卫星采用Walker Delta初始条件。仿真保存每颗卫星的位置。每次蒙特卡洛仿真开始时，随机选择轨道周期内的一个时刻作为起点，并从该时刻传播星座。CT位置随机选择：纬度依据图4中的PDF， 经度在[-180, 180]度范围内均匀分布，高度设为800米（陆地平均海拔）。在可见卫星中，根据图3中的仰角PDF随机选择一颗卫星作为起始发射星，该卫星将在固定分配间隔 $T_{\mathrm{FAI}}$ 内保持发射。随后，再次选择新的卫星发射，持续 $T_{\mathrm{FAI}}$，依此类推。

同时，采用以下四种搜索方法：  
(1) 基于方位角与俯仰角的光栅扫描，从天顶开始；  
(2) 使用图3中的均匀PDF的最大似然搜索；  
(3) 使用图3中的仰角PDF的最大似然搜索；  
(4) 使用由早先星座仿真生成的马尔可夫模型传播的PDF进行的HOOC-EM。  

每种方法在图6所示的波束宽度下执行，均匀与仰角PDF等效映射到相应的多面体，直至检测或获取。

获取准则为：在$T_{\mathrm{FAI}}$时间段内，CT天线指向的单元中包含发射卫星。尽管此处未使用显式信号功率判据，但可认为网络会依据波束宽度设计信号。例如，[Komodromos et al., 2023]表明，当同步序列覆盖整个Starlink帧时，OFDM信号在SNR低至-43 dB时仍可检测。虽然这种设计在实际中不切实际（因为无法传输数据），但说明在一定天线增益或波束宽度下检测可视作设计参数。此外，该方法较为保守，因为若使用基于纯SNR的探测器，卫星可能在邻近六边形单元中也被检测到。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-13.jpg?height=996&width=1766&top_left_y=265&top_left_x=181)

**图6**：经纬度边缘化后的经验卫星-仰角联合PDF，应用于最小仰角35度以上的六边形和五边形扇区，对应波束宽度范围2.65至18.39度。

---

### 2. 结果

仿真在 $T_{\mathrm{FAI}}=5$ 秒和15秒下进行。其中 $T_{\mathrm{FAI}}=15$ 秒与 [Qin et al., 2023] 中的Starlink网络观测一致，而$T_{\mathrm{FAI}}=5$ 秒则可能用于未来融合LEO GNSS系统，因较短的分配间隔可带来更高的几何多样性并缩短首次定位时间。图7给出了在 $T_{\mathrm{FAI}}=5$ 秒条件下进行500次蒙特卡洛仿真的结果。

左图显示了检测平均时间随波束宽度的变化。结果清晰表明光栅扫描效率最低，甚至劣于六边形划分下的均匀搜索（因搜索点更少）。对于较宽波束，仰角优先搜索与HOOC-EM表现相似，这是因为搜索点数少，且大单元内卫星切换的概率低。然而，随着波束变窄（卫星切换频繁、搜索点数增加），HOOC-EM展现出明显优越性，这在需要窄波束以应对高干扰场景时尤为关键。

右图展示了在波束宽度为2.64度时的累积分布函数（CDF）。结果进一步突出了均匀搜索与光栅扫描的劣势。仰角优先与HOOC-EM在前50%的搜索中表现相近，但在后期，仰角优先出现多个平台效应。在该分配间隔与波束宽度下，超过90%的HOOC-EM搜索在40秒内完成，而仰角优先搜索中超过10%的搜索耗时超过一分钟。图8给出了 $T_{\mathrm{FAI}}=15$ 秒下的结果，趋势与图7类似，整体检测时间下降。这是因为搜索更可能在发射卫星切换波束前完成。总体来看，光栅扫描与均匀搜索最慢，仰角优先与HOOC-EM最快，而HOOC-EM在窄波束下优于仰角优先。

右图为波束宽度2.64度下的CDF。仰角优先与HOOC-EM在约60%之前表现相似，但在后期，超过90%的HOOC-EM搜索在30秒内完成，而仰角优先搜索中超过10%的耗时超过50秒。如果用户对CT位置有一定了解，性能还会显著提升。图9展示了在已知位置条件下，$T_{\mathrm{FAI}}=15$ 秒时仰角优先与HOOC-EM的结果。马尔可夫矩阵 $\boldsymbol{M}$ 基于已知CT位置下的星座仿真生成。结果表明，在已知位置时，HOOC-EM在平均检测时间上明显优于仰角优先。右图为波束宽度2.64度下的CDF，近99%的HOOC-EM搜索在20秒内完成。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-14.jpg?height=611&width=1687&top_left_y=308&top_left_x=176)

**图7**：在 $T_{\mathrm{FAI}}=5$ 秒条件下，不同波束扫描方法的平均检测时间（左）与累积分布函数（右），波束宽度为2.64度。

尽管在无GNSS条件下可能难以精确获知CT位置，但图9强调了位置特定信息对性能提升的作用。例如，即便用户不知道CT的具体位置，若能知道其所在城市、省份或国家，仍能带来明显性能提升。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-15.jpg?height=614&width=1682&top_left_y=479&top_left_x=200)

**图8**：在 $T_{\mathrm{FAI}}=15$ 秒条件下，不同波束扫描方法的平均检测时间（左）与累积分布函数（右），波束宽度为2.64度。

![](https://cdn.mathpix.com/cropped/2025_10_19_0929ab9a0c3beb428766g-15.jpg?height=608&width=1663&top_left_y=1620&top_left_x=216)

**图9**：在 $T_{\mathrm{FAI}}=15$ 秒条件下，已知CT位置时，不同波束扫描方法的平均检测时间（左）与累积分布函数（右），波束宽度为2.64度。

---

## V. 结论

本文提出了HOOC-EM，一种面向LEO巨型星座网络的快速CT波束扫描新方法。HOOC-EM包含以下算法步骤：(1) 将天球划分为六边形与五边形单元；(2) 基于卫星几何关系为这些单元分配概率；(3) 执行最大似然搜索，并根据卫星运动与网络固定分配间隔动态更新。本文在Amazon Kuiper-Ka星座的仿真模型上进行了测试，并将HOOC-EM与仰角优先光栅扫描、均匀最大似然搜索、以及基于仰角的最大似然搜索进行对比。

结果表明，HOOC-EM在窄波束条件下优于其他方法，在宽波束条件下则与基于仰角的搜索性能相当。此外，仿真结果还显示，若能提供CT位置的部分信息，HOOC-EM搜索速度会显著提升。对比不同方法CDF的分析显示，HOOC-EM的搜索分布尾部显著短于仰角优先搜索。

## ACKNOWLEDGEMENTS

This work was supported by Amazon's Project Kuiper as an affiliate of the 6G@UT center within the Wireless Networking and Communications Group at The University of Texas at Austin.

## REFERENCES

[3GPP, 2017] 3GPP (2017). Study on NR to support non-terrestrial networks. Tr 38.811, 3rd Generation Partnership Project (3GPP). Version 15.0.0.

[3GPP, 2023] 3GPP (2023). Solutions for NR to support non-terrestrial networks. Tr 38.821, 3rd Generation Partnership Project (3GPP). Version 16.0.0.

[Andrews et al., 2014] Andrews, J. G., Buzzi, S., Choi, W., Hanly, S. V., Lozano, A., Soong, A. C., and Zhang, J. C. (2014). What will 5G be? IEEE Journal on selected areas in communications, 32(6):1065-1082.

[Artiga and Vázquez, 2023] Artiga, X. and Vázquez, M. Á. (2023). Evaluation of new radio beam management framework for LEO satellites. In 2023 IEEE Conference on Standards for Communications and Networking (CSCN), pages 241-246. IEEE.

[Baykas et al., 2011] Baykas, T., Sum, C.-S., Lan, Z., Wang, J., Rahman, M. A., Harada, H., and Kato, S. (2011). IEEE 802.15. 3c: The first IEEE wireless standard for data rates over $1 \mathrm{~Gb} / \mathrm{s}$. IEEE Communications Magazine, 49(7):114-121.

[Blázquez-García et al., 2023] Blázquez-García, R., Cristallini, D., Ummenhofer, M., Seidel, V., Heckenbach, J., and O’Hagan, D. (2023). Experimental comparison of Starlink and OneWeb signals for passive radar. In 2023 IEEE Radar Conference (RadarConf23), pages 1-6.

[Chan, 1980] Chan, F. (1980). A quadrilateralized spherical cube earth data base. In NASA. Goddard Space Flight Center Fifth Ann. Flight Mech.(Estimation Theory Symp.).

[Curtis, 2009] Curtis, H. D. (2009). Orbital Mechanics for Engineering Students. Elsevier, Burlington, MA, 2nd edition.

[Dimitrijević et al., 2016] Dimitrijević, A. M., Lambers, M., and Rančić, D. (2016). Comparison of spherical cube map projections used in planet-sized terrain rendering. Facta Universitatis, Series: Mathematics and Informatics, 31(2):259-297.

[Euler, 1758] Euler, L. (1758). Elementa doctrinae solidorum. Novi commentarii academiae scientiarum Petropolitanae, pages 109-140.

[Ghasempour et al., 2017] Ghasempour, Y., Da Silva, C. R., Cordeiro, C., and Knightly, E. W. (2017). IEEE 802.11 ay: Next-generation 60 GHz communication for $100 \mathrm{~Gb} / \mathrm{s}$ Wi-Fi. IEEE Communications Magazine, 55(12):186-192.

[Heng et al., 2021] Heng, Y., Andrews, J. G., Mo, J., Va, V., Ali, A., Ng, B. L., and Zhang, J. C. (2021). Six key challenges for beam management in 5.5 G and 6G systems. IEEE Communications Magazine, 59(7):74-79.

[Humphreys et al., 2023] Humphreys, T. E., Iannucci, P. A., Komodromos, Z. M., and Graff, A. M. (2023). Signal structure of the Starlink Ku-band downlink. IEEE Transactions on Aerospace and Electronic Systems, pages 1-16.

[Iannucci and Humphreys, 2022] Iannucci, P. A. and Humphreys, T. E. (2022). Fused low-earth-orbit GNSS. IEEE Transactions on Aerospace and Electronic Systems, pages 1-1.

[Kim et al., 2020] Kim, J., Yun, M. Y., You, D., and Lee, M.-S. (2020). Beam management for 5G satellite systems based on NR. In 2020 International Conference on Information Networking (ICOIN), pages 32-34. IEEE.

[Komodromos et al., 2023] Komodromos, Z. M., Qin, W., and Humphreys, T. E. (2023). Signal simulator for Starlink Ku-Band downlink. In Proceedings of the ION GNSS+ Meeting, pages 2798-2812.

[Kummu and Varis, 2011] Kummu, M. and Varis, O. (2011). The world by latitudes: A global analysis of human population, development level and environment across the north-south axis over the past half century. Applied geography, 31(2):495-507.

[Kutkov, 2023] Kutkov, O. (2023). Connecting external gps antenna to the starlink terminal. https://olegkutkov.me/ 2023/11/07/connecting-external-gps-antenna-to-the-starlink-terminal/. Accessed: 2023-03-01.

[Maine et al., 1995] Maine, K., Devieux, C., and Swan, P. (1995). Overview of Iridium satellite network. In WESCON/'95 Conference, page 483. IEEE.

[Maral et al., 2020] Maral, G., Bousquet, M., and Sun, Z. (2020). Satellite communications systems: systems, techniques and technology. John Wiley \& Sons.

[McCollum, 2001] McCollum, J. M. (2001). Honeycombing the icosahedron and icosahedroning the sphere ${ }^{1}$. In Proceedings of the Second Annual Forest and Inventory Symposium: Salt Lake City, Utah, October 17-18, 2000, volume 47, page 25. USDA Forest Service, Southern Research Station.

[Morales et al., 2019] Morales, J. J., Khalife, J., Cruz, U. S., and Kassas, Z. M. (2019). Orbit modeling for simultaneous tracking and navigation using LEO satellite signals. In Proceedings of the 32nd International Technical Meeting of the Satellite Division of The Institute of Navigation (ION GNSS+ 2019), pages 2090-2099.

[Nitsche et al., 2014] Nitsche, T., Cordeiro, C., Flores, A. B., Knightly, E. W., Perahia, E., and Widmer, J. C. (2014). IEEE 802.11 ad: directional 60 GHz communication for multi-gigabit-per-second Wi-Fi. IEEE Communications Magazine, 52(12):132-141.

[Qin et al., 2023] Qin, W., Komodromos, Z. M., and Humphreys, T. E. (2023). An agile, portable antenna system for LEO megaconstellation-based PNT. In Proceedings of the ION GNSS+ Meeting.

[Rappaport et al., 2014] Rappaport, T. S., Heath Jr, R. W., Daniels, R. C., and Murdock, J. N. (2014). Millimeter wave wireless communications. Pearson Education.

[Rinaldi et al., 2020] Rinaldi, F., Määttänen, H.-L., Torsner, J., Pizzi, S., Andreev, S., Iera, A., Koucheryavy, Y., and Araniti, G. (2020). Broadcasting services over 5G NR enabled multi-beam non-terrestrial networks. IEEE Transactions on Broadcasting, 67(1):33-45.

[Robinson, 2002] Robinson, R. C. (2002). Perron frobenius theorem. mij, 10:0.
[Space Exploration Holdings, 2020] Space Exploration Holdings (2020). SpaceX Gen2 NGSO Satellite System, Attachment Waiver Requests. https://licensing.fcc.gov/myibfs/download.do?attachment_key=2378667. SAT-LOA-20200526-00055.

[Systems, 2019] Systems, K. (2019). Application for fixed satellite service by Kuiper Systems LLC. https: / / licensing. fcc.gov/myibfs/download.do?attachment_key=1773885. SAT-LOA-20190704-00057.

[Tegmark, 1996] Tegmark, M. (1996). An icosahedron-based method for pixelizing the celestial sphere. The Astrophysical Journal, 470(2):L81.

[Wei et al., 2023] Wei, W., Zheng, Z., Wang, Y., Su, Y., Wang, X., Liu, L., Wang, B., Sun, C., and Wang, D. (2023). Random access control and beam management scheme for the 5G NR based beam hopping LEO satellite communication systems. Mobile Networks and Applications, pages 1-12.

[Xue et al., 2024] Xue, Q., Ji, C., Ma, S., Guo, J., Xu, Y., Chen, Q., and Zhang, W. (2024). A survey of beam management for mmwave and THz communications towards 6G. IEEE Communications Surveys \& Tutorials.

