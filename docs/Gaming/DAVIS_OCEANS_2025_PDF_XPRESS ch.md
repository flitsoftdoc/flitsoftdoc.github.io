

# 面向无人水面艇探测的传感器套件设计框架

## A Sensor Package Design Framework for Unmanned Surface Vehicle Detection 

School of Aerospace Engineering, Georgia Institute of Technology, Atlanta, GA, USA

[原文链接](https://www.researchgate.net/publication/394436734_A_Sensor_Package_Design_Framework_for_Unmanned_Surface_Vehicle_Detection)

#### 摘要

廉价自主舰艇的激增加速了海上作战进程，使对手能够利用低成本的无人水面艇（USVs）打击高价值目标。本研究提出了一种探索性方法及配套的仿真框架，用于建模和评估针对USV威胁的多传感器探测套件。该方法整合了雷达（RADAR）、激光雷达（LiDAR）、光学和热成像传感器，每类传感器均具有依赖距离和环境条件的噪声敏感性，并结合离散时间状态估计器进行数据融合。仿真场景参数化目标的运动学、几何外形、外观以及环境因素（海况、光照、降水、温度），以生成带噪声的观测数据，并为每个传感器设置不同采样频率。探测性能通过位置、速度、横截面积和颜色的归一化时间平均误差来量化，并依据用户设定的权重汇总为一个综合指标。该框架采用拉丁超立方抽样（Latin Hypercube Sampling）在传感器套件配置和环境条件间进行探索，识别在精度与鲁棒性间达到帕累托最优的设计方案。该工具集可帮助任务规划者选择并优化传感器套件，未来工作将面向实证验证、更高保真度的传感器建模以及扩展至更多应用领域。

---

## I. 引言

随着自主舰艇的部署，海上作战节奏显著加快，使对手能够利用廉价无人机打击高价值目标。无人系统可以更快行动，具备更高的隐蔽性和机动性，而低廉的生产成本则使其能够大规模部署 [1], [2]。鉴于这一威胁，本研究开发了一种方法学及其相关工具，用于建模无人水面艇（USV）威胁的探测方法。

近期冲突突显了低成本USV带来的战略风险：其造成的破坏远超采购成本。在乌克兰战争中，乌克兰海军的MAGURA V5 USV据报道主要由商用部件组装而成，其成本远低于一艘俄罗斯伊万诺韦茨级导弹护卫艇（约6000–7000万美元）[3]，却展现了极高的成本效益。截至2024年3月，这些USV已被认为协助击沉约22艘俄罗斯海军舰艇 [4]。在红海地区，胡塞武装将民用渔船改造成简易爆炸型USV，发动蜂群式袭击，致使商用商船受损并骚扰美国海军护航舰艇，造成数亿美元损失 [5]。尽管缺乏复杂的自主系统，这些低可探测平台仍足以扰乱关键的海上交通线。这一脆弱性对美国的海上力量投送和经济资产构成重大风险。由于目前尚无可靠的防御手段应对即便是最基础的USV威胁，先进的探测与一体化反制系统势在必行。

杀伤链——发现（Find）、固定（Fix）、跟踪（Track）、瞄准（Target）、打击（Engage）、评估（Assess）——必须完整，才能对威胁实施武器打击，而其中任何环节的失效都会延缓响应 [7]。提升“发现”环节的效率能够加快整个杀伤链，为盟军决策者提供更多时间与情报以应对USV [8]。虽然杀伤链最初是为反舰导弹设计的，但图1所示的概念同样适用于USV威胁，并能为探测环节的作用与范围提供深刻洞见。

当前的海上探测，作为海上领域态势感知（MDA）的一部分，依赖于分层的传感器与平台架构，各自具有独特优势与固有限制。例如，美国海岸警卫队的Sentinel级快速反应巡逻舰（FRC）能够航行2500海里并持续执行任务约5天，但必须定期返回加油、补给与维护，从而降低在争夺水域的持续覆盖能力 [9]。无人机（UAV）平台如AR5 EVO能够实现16小时的持续监视任务，将监测范围扩展至地平线之外 [10]，但依旧受到燃料或电池容量、频繁的舰载起降以及天气因素（结冰、大风、降水）的限制 [11]。基于卫星的光学或合成孔径雷达（SAR）传感器提供全球覆盖，但其重访间隔为数小时至数天，且易受云层遮挡，导致间歇性探测盲区 [12]。超视距雷达（OTHR）可在1000海里以外探测水面目标，但其空间分辨率较低、建设成本高，并受电离层变化及海杂波影响 [13]。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-02.jpg?height=586&width=887&top_left_y=165&top_left_x=162)  
图1. 反舰导弹杀伤链，其中黄色虚线标注部分为探测能力提升所改善的环节 [6]。

另一种方式是采用携带传感器载荷的自主固定平台，用于持续、无人值守的海上监测，能够在局部区域内实现对水面与水下目标的近实时探测 [14]-[16]。本研究的框架正是为此类浮标或自主舰艇的传感器套件设计提供支持，通过指导高层次的传感器选择以实现持续而稳健的海上探测。为克服单一传感器在恶劣海况、低能见度或杂波环境下的失效问题 [17]，本研究模拟传感器估计的多源数据融合。借鉴虚拟海上环境如Player [18]与USVs-Sim [19]，本框架对传感器特性、环境效应进行建模，并利用数据融合算法支持浮标型传感器套件的MDA设计。

本文结构如下：第二部分介绍仿真环境、效能度量、传感器模型与数据融合方法，并阐述如何参数化仿真环境与传感器平台以支持大规模设计空间探索。第三部分通过两个案例研究展示框架的能力：一个任务设计与一个设计空间探索，分别体现固定任务评估与大规模鲁棒性测试。最后，第四部分给出结论并展望未来研究方向。

---

## II. 方法论

传感器套件的性能指标旨在支持杀伤链中的“发现”环节，即帮助后续的目标意图分类，如图1所示。意图判定可基于《国际海上避碰规则》（COLREGs）、交战规则以及《联合国海洋法公约》[20]-[22]。这些规定包括：在领海及靠近他船时的安全航行要求；在近岸或靠近他船时的速度控制；特定船型应遵循指定航道；以及必须通过航行灯标识船舶身份等。基于此，最能表征目标意图的四个主要探测可观测量为：

1. **位置**：指示威胁的迫近程度与距离；  
2. **速度**：表征USV的机动与航迹；  
3. **颜色**：区分航行灯光并指示船舶归属；  
4. **尺寸**：反映船舶特征。  

传感器套件既按各观测量的测量误差进行比较，也通过主观加权的综合指标进行比较，其中权重体现用户对不同指标的优先级。

---

## A. 仿真

1) **环境**：仿真环境生成USV的真实状态与周边环境上下文，这些要素共同驱动传感器模型与状态估计器，从而决定各传感器套件测量的质量。每次仿真表示一个USV按照预设轨迹穿越以传感器套件为中心的二维圆形探测半径。初始化时，用户需提供：  
- **轨迹系数** $\{A, B, C, D, E\}$（针对$x$与$y$轴），定义USV位置的可定制函数，默认形式为：  
  $$
  f_{i}(t)=A_{i} t^{2}+B_{i} t+C_{i}+D_{i} \sin \left(E_{i} t\right), \quad i \in\{x, y\}
  $$
  通过求导得到速度与加速度。该确定性轨迹方程支持不同传感器的交错采样率及更快的非马尔可夫执行；  
- **USV颜色** $\{h, s, i\}$：色调、饱和度、亮度（HSI）；  
- **USV尺寸** $\{$长、宽、高$\}$：简化为矩形体，高度表示干舷；  
- **环境参数**：光照、降水、温度、海况；  

所有参数均为相对基准USV（MAGURA V5建模）的归一化连续值。  

Simulation_Case类随后对轨迹系数施加现实最大值约束（如$v_{\text{max}}, a_{\text{max}}$），根据用户设定的航向与最大探测距离计算USV初始极坐标位置，将环境设置注入各传感器实例，并初始化用于运动学与非运动学联合估计的数据融合状态估计器。  

在每个离散时间步内，直到USV超出最大距离或达到仿真时间上限，代码会传播真实状态，计算真实横截面积与朝向，将其传入传感器模型以生成带噪声观测，更新数据融合算法以输出状态估计，并将真实值、估计值及逐步误差记录到数据框中。交错采样的对齐通过所有传感器采样间隔的最大公约数作为全局时间步实现。  

仿真结束后，系统输出一个时间序列CSV文件，包含所有真实与估计状态（位置、速度、加速度、横截面积、朝向和颜色）、各传感器测量值、不确定性半径与逐步误差。此外，还会输出一个主观加权的综合效能度量，将误差信息汇总为该场景的整体效能（详见II-A2节）。同时输出诊断/调试文件，记录初始参数与终止条件。  

若启用动画标志，仿真还会生成：真实与估计USV位置的极坐标动画（包括USV航向箭头、真实与估计位置标记、USV位置的一西格马不确定性圆以及浮标传感器套件位置标记）；位置、速度、卡尔曼不确定性、各传感器不确定性与均方误差（MSE）的时间序列图；真实与估计HSI值的色轮动画；以及将真实矩形投影与等面积圆比较的横截面积动画（详见第三节）。  

包装脚本可读取包含多个参数集的文本输入文件，生成对应的Simulation_Case实例，并批量运行以对比不同传感器配置与场景。该框架支持CUDA与CPU运行，并可通过线程池并行执行每个Simulation_Case。  

2) **效能度量**：本研究的目标是大规模设计空间探索，因此无法人工逐一比较成千上万场景的时间序列数据。为此，引入主观加权的综合指标$P$，用于量化每个场景在所有性能指标上的总体误差。


设 $T$ 为仿真中的离散时间步总数，$m$ 为由 $n_{m}$ 个分量组成的性能指标：

$$
n_{\text {position }}=2, \quad n_{\text {velocity }}=2, \quad n_{\text {color }}=3, \quad n_{\text {area }}=1 .
$$

其中，位置与速度由 $\{x, y\}$ 分量构成，颜色由 $\{h, s, i\}$ 构成，横截面积为标量。在每个时间步 $t$，框架利用真实值 $y_{m, k}(t)$ 与估计值 $\hat{y}_{m, k}(t)$ 形成平方误差，其中向量型指标 $m$ 包含分量 $k=1, \ldots, n_{m}$ ：  

$$
\begin{equation*}
e_{m, k}(t)^{2}=\left[y_{m, k}(t)-\hat{y}_{m, k}(t)\right]^{2} \tag{1}
\end{equation*}
$$

然后计算该时间步的均方误差（MSE）：

$$
\begin{equation*}
\operatorname{MSE}_{m}(t)=\frac{1}{n_{m}} \sum_{k=1}^{n_{m}} e_{m, k}(t)^{2} \tag{2}
\end{equation*}
$$

接着对时间取平均：

$$
\begin{equation*}
\overline{\operatorname{MSE}}_{m}=\frac{1}{T} \sum_{t=1}^{T} \operatorname{MSE}_{m}(t) \tag{3}
\end{equation*}
$$

并开平方得到均方根误差（RMSE）：

$$
\begin{equation*}
\mathrm{RMSE}_{m}=\sqrt{\overline{\mathrm{MSE}}_{m}} \tag{4}
\end{equation*}
$$

接下来，框架通过真实值的时间均值进行归一化：

$$
\bar{y}_{m}=\frac{1}{T} \sum_{t=1}^{T}\left(\frac{1}{n_{m}} \sum_{k=1}^{n_{m}}\left|y_{m, k}(t)\right|\right)
$$

并引入 $\varepsilon=10^{-6}$ 以避免除零。于是得到归一化均方根误差（NRMSE）：

$$
\begin{equation*}
\eta_{m}=\frac{\mathrm{RMSE}_{m}}{\bar{y}_{m}+\varepsilon} \tag{5}
\end{equation*}
$$

在用户设定的权重 $w_{m}$ 下，若 $M$ 为性能指标的总数，则总体性能度量为：

$$
\begin{equation*}
P=\frac{\sum_{m=1}^{M} w_{m} \eta_{m}}{\sum_{m=1}^{M} w_{m}} \tag{6}
\end{equation*}
$$

通过对误差进行时间平均、按真实值均值归一化，并结合用户设定的优先级权重，指标 $P$ 得到一个无量纲得分，在异构性能维度之间实现精度的平衡。

---

3) **实验设计**：该框架支持在设计空间内探索传感器选项与鲁棒性准则，从而在既定条件/目标下选择最优的传感器套件。为实现这一点，框架采用实验设计（DoE）方法——拉丁超立方抽样（Latin Hypercube Sampling, LHS）。这是一种填充空间的抽样策略，确保在多个因子水平间实现丰富的设计点分布 [23]。LHS提升了抽样效率，降低了仿真结果的方差，并比单纯的随机抽样更好地捕获参数的交互作用与极端值。分析过程能够识别在成本（即传感器数量与质量）与探测精度及鲁棒性之间达到帕累托最优的传感器套件。框架在三个层次上应用LHS，其中第1步为最高层级，第3步为最低层级：

1. 基线传感器套件组成与质量等级（即传感器包选择，按质量分组）；  
2. 在用户设定的容差范围内的传感器性能变化（单个传感器质量）；  
3. 环境与目标条件的变化（即场景鲁棒性）。  

---

**表 I**  
传感器选项与性能指标的对应关系  

|            | LiDAR | RADAR | Thermal | Optical |
| :--------: | :---: | :---: | :-----: | :-----: |
| Velocity   | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |
| Area       | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |
| Position   | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |
| Color      | X | X | X | $\checkmark$ |



两个互补的封装器——传感器套件封装器与鲁棒性封装器——共同调度LHS实验并运行仿真，以评估最优的传感器套件选择。传感器套件封装器实现了传感器套件配置上的“外层”LHS，对应于LHS层次结构中的步骤1和步骤2。在步骤1中，它接收用户指定的待测试传感器套件数量、基准质量值和质量容差（传感器质量细节见第II-B节）。随后，它对指定数量的传感器套件进行抽样，为每个套件选择传感器数量及其基准质量。在步骤2中，封装器针对套件内的每个单独传感器进行质量抽样，并根据步骤1确定的基准质量在容差范围内选取值。传感器套件封装器记录其生成的每个传感器套件样本，然后调用内部的鲁棒性封装器来评估这些样本。

鲁棒性封装器实现了单个传感器套件上的“内层”LHS，即步骤3，它通过改变第II-A1节中提到的所有USV和场景条件特征，并运行对应的Simulation_Case实例，利用用户指定数量的场景测试其鲁棒性。当步骤1和步骤2选定的所有传感器套件均经由步骤3评估后，其在每个场景下的主观加权综合指标将以概率密度函数（PDF）的形式进行评估。PDF表示所有场景下总体误差的分布，因此总体误差越低的套件越鲁棒。PDF经过四分位距过滤以去除异常值，并计算其均值与方差，均值越低代表总体误差越低，方差则反映一致性。传感器套件基于主观加权的综合指标进行排序，同时也会根据各性能指标的客观误差分别排序，其中PDF的均值与方差越低表示排名越高。

---

## B. 传感器模型

本研究采用了四类传感器：雷达（RADAR）、激光雷达（LiDAR）、光学相机与热成像相机。选择它们是因为在性能指标上的测量存在重叠，如表I所示。以下传感器模型既包括物理建模，也包括通用建模，目标是提供一个框架，使解析模型或实验数据可以被纳入仿真作为传感器模型。

### 1) 基于物理的传感器

仿真环境包含专门函数，用于表示各类传感器的测量噪声，以直接建模雷达与激光雷达。雷达通过发射无线电波并接收反射回波工作。回波时间可用于确定一个或多个目标的距离。激光雷达的工作原理类似，但它发射的是大量激光脉冲，返回点云以映射环境中的三维表面。

在大规模设计空间研究中，全面仿真这些传感器所依赖的物理现象不可行。因此，传感器参数被关联到测量误差的预期水平。测量不确定性主要取决于传感器到目标的距离以及信噪比（SNR），后者量化了每次测量的置信度。这些不确定性估计直接输入数据融合算法，引导各传感器输入的相对权重。

**a) RADAR：** 随着探测距离的增加，USV的回波会变得更加嘈杂。雷达模型的控制方程为 (7) [24]：其中 $P_{T}$ 为发射功率（瓦），$G_{T}$ 为发射天线增益，$G_{r}$ 为接收天线增益，$\lambda$ 为雷达波长（米），$\sigma$ 为目标雷达散射截面（平方米），$R$ 为目标距离（米），$k$ 为玻尔兹曼常数，$T$ 为系统噪声温度（开尔文），$B$ 为接收带宽（赫兹），$L$ 为整体损耗因子。

$$
\begin{equation*}
\mathrm{SNR}=\frac{P_{T} G_{T} G_{r} \lambda^{2} \sigma}{(4 \pi)^{3} R^{4} k T B L} \tag{7}
\end{equation*}
$$

**b) LiDAR：** 激光雷达的有效探测距离有限，因为背向散射的光学信号最终会过于微弱而无法被光电探测器接收。在信号完全丢失之前，存在一个更近的范围，虽然仍能接收信号，但其SNR导致读数不可靠。当假读数达到 $50 \%$ 时，传感器读数已不可置信，此时传感器模型会将噪声函数映射至该最大有效距离 [25]。该范围由 (8) 与 (9) 式刻画，其中 $R_{\text {max\_UF }}$ 与 $R_{\text {max\_OF }}$ 分别为未经滤波与光学滤波下 $50 \%$ 假读数的距离（米），$\sigma$ 为背散射截面 $\left(\mathrm{m}^{2}\right)$，$W_{0}$ 为Lambert W函数主支，$\eta$ 为探测器量子效率，$\rho$ 为表面反射率，$E_{tx}$ 为脉冲能量（焦耳），$\theta$ 为入射角（弧度），$D$ 为发射孔径直径（米），$A_{t}$ 为接收孔径面积（平方米），$\phi$ 为光束发散半角（弧度），$N_{f}$ 为噪声系数，$NEI$ 为噪声等效辐照度 $\left(\mathrm{W} \mathrm{m}^{-2} \mathrm{Hz}^{-1 / 2}\right)$，$E_{ph}$ 为光子能量（焦耳）。

$$
\begin{gather*}
R_{\text {max\_UF }}=\frac{1}{\sigma} W_{0}\left[\sigma \sqrt{\frac{\eta \rho E_{t x} \cos (\theta) D^{2}}{4 N_{f} N E I E_{p h}}}\right],  \tag{8}\\
R_{\text {max\_OF }}=\frac{2}{\sigma} W_{0}\left[\frac{\sigma}{2} \sqrt[4]{\frac{\eta \rho E_{t x} A_{t} \cos ^{2}(\theta) D^{2}}{4 \pi \phi^{2} N_{f} N E I E_{p h}}}\right] . \tag{9}
\end{gather*}
$$

### 2) 光学与热成像相机

光学与热成像相机在有效探测距离评估上的方法基本类似，二者均为依赖电磁辐射成像的传感器。本研究将这两类传感器的标准误差建模为目标距离、目标速度、环境光照及环境条件等关键参数的函数。二者的关键差别在于其误差与环境光照的相关性相反：光学传感器在光照更强时性能更好，而热成像传感器在光照更强时性能更差。

基于Johnson判据，光学相机的有效探测距离 $R$ 可由下式估计 [26]：

$$
R=\frac{N \cdot \theta}{\alpha}
$$

其中：  

- $R$ = 有效探测距离（米）  
- $N$ = 目标上所需像素数（由探测、识别或判别准则确定）  
- $\theta$ = 即时视场（IFOV），单位为弧度/像素  
- $\alpha$ = 目标的角大小（弧度），其中 $\alpha=\frac{D}{R}$，$D$ 为目标的物理尺寸。  

光学与热成像系统的性能不仅受硬件影响，还强烈依赖于配套图像处理软件的有效性。在实践中，相机的原始输出作为下游图像识别功能的输入，最终决定了传感器的精度。本项目中，这些相机通过与关键性能变量的关系在高层次上加以表征，未来研究阶段将通过实证测试进一步细化这些模型。

### 3) 通用传感器

通用传感器并不特指某种物理传感器，而是用户可调节其敏感度的传感器。该传感器可被设定为与雷达、激光雷达、热成像或光学传感器相似的敏感度，或者呈现其组合特性。通用传感器的优势在于允许对传感器进行自上而下的分析。如果用户希望评估新型传感器与现有传感器的比较表现，则可通过调节通用传感器的敏感度来重建新传感器并进行测试。

可调节的敏感度包括单一影响因子（海况、降水、光照或温度）及其对噪声的作用。连续曲线被采样以生成输入数据融合方法的误差，该曲线建模为四阶多项式，以匹配至少与(7)中同阶的复杂度。其形式为：  

$$
g(x)= a x^{4}+b x^{3}+c x^{2}+d x+e+f \sqrt{x}
$$

其中 $g(x)$ 为测量误差，$x$ 为噪声因子值。每个影响因子与效能度量均对应一条不同的敏感度曲线。敏感度曲线会随噪声因子变化而不同：范围、速度、海况、降水、光照和温度，均为影响传感器读数质量的因素 [24], [27], [28]。该噪声函数补充了缺乏解析噪声曲线的物理模型。此外，每个传感器均包含一个通用质量因子，用于调节其噪声曲线的形状，该因子归一化在0到1之间，0表示低质量，1表示高质量。这些噪声曲线生成了一个敏感度映射，其维度等于性能指标数量、传感器数量、噪声因子数量与每个传感器质量因子水平数的乘积。在本研究中，该敏感度映射被简化为各因子相互独立，而实际应用中可能并非如此。传感器选项、敏感度、噪声因子和质量因子均可由领域专家进行编辑、添加或删除，以构建更高保真度模型。本研究建立了一个通用框架，在缺乏专有传感器数据的情况下支持这些定制化。


## C. 数据融合

### 1) 运动学数据融合

该框架实现了扩展卡尔曼滤波器（EKF），用于融合来自通用传感器或基于物理的传感器模型的运动学数据 [29]。与标准现成EKF不同，自定义实现支持在运行时指定可变数量的传感器，并可处理不同采样率的传感器观测，从而实现交错的测量更新。EKF实现了以下方程中的状态与观测更新，并输出USV状态的估计值以及与该估计值相关的协方差误差矩阵 [30]。估计状态会与USV的真实位置进行比较，并计算位置与速度的MSE作为跨实验运行的性能指标。滤波器初始化时采用先验状态估计及其对应的协方差。

EKF包括三个部分：状态更新、卡尔曼增益计算和观测更新。状态更新在仿真的每个时间步执行，而卡尔曼增益计算与观测更新仅在有可用于更新方程的传感器测量时执行。

运动学EKF的系统状态表示USV相对于传感器套件的$x$与$y$位置，以及传感器套件测得的USV速度在$x$与$y$方向的分量。EKF的状态更新通过已知的系统运动学传播USV状态。这是通过对USV速度进行粗略矩形积分实现的。式 (12) 展示了协方差如何传播，这是状态估计误差的一种度量。由于状态的认知并不完美，否则纯积分解将能够完美跟踪USV，因此过程噪声由协方差传播中的$Q_{k-1}$项表示。如果仅依赖状态更新，协方差估计将会不断增大，只有引入包含更多信息的观测更新，才能降低这一增长。EKF的状态更新如下：

$$
\begin{equation*}
x_{k^{-}}=f\left(x_{k-1}^{+}\right) \tag{10}
\end{equation*}
$$

$$
\begin{gather*}
F_{k-1}=\left.\frac{\partial f}{\partial x}\right|_{x=\hat{x}_{k-1}},  \tag{11}\\
P_{k^{-}}=F_{k-1} P_{k-1} F_{k-1}^{\prime}+Q_{k-1} \tag{12}
\end{gather*}
$$

同样，传感器套件测得的观测值也并不完美，其误差受到多种因素影响。与II-B3节中提到的通用传感器噪声因子一致，这些噪声因子在卡尔曼增益的计算中被考虑：

- USV相对于传感器套件的位置，  
- USV速度，  
- 降水水平，  
- 温度，  
- 海况，  
- 光照。  

这些误差由矩阵$R_{k}$表示。当前版本的框架假设这些误差相互独立。卡尔曼增益可通过式 (14) 计算。卡尔曼增益根据测量噪声对每个观测加权，噪声越大的观测在最终估计中的权重越低。这保证了所有新获得的信息都会影响滤波器的估计，但噪声大的观测不会显著干扰最终结果。将误差引入卡尔曼增益计算的公式为 (13) 与 (14)：

$$
\begin{gather*}
H_{k}=\frac{\delta h}{\delta x} \hat{x}_{k}^{-}  \tag{13}\\
K_{k}=P_{k}^{-} H_{k}^{\prime}\left(H_{k} P_{k}^{-} H_{k}^{\prime}+R_{k}\right)^{-1} \tag{14}
\end{gather*}
$$

如前所述，传感器获得的观测值受物理模型与噪声曲线所建模的环境与随机噪声影响，从而与USV真实状态有所偏差。在本框架中，假设传感器能够直接测量状态，即位置与速度的$x$和$y$分量。创新值（innovation）定义为测量值与USV真实状态的差值。该创新值乘以卡尔曼增益后，加到状态更新中的先验估计 (15)，由此将新的观测信息引入估计中。后验协方差也在更新过程中得到修正，因为新信息的引入会降低估计误差。EKF的观测更新表示为 (15) 与 (16)：

$$
\begin{gather*}
\hat{x}_{k}=\hat{x}_{k}^{-}+K_{k}\left(y_{k}-h\left(\hat{x}_{k}^{-}\right)\right)  \tag{15}\\
P_{k}=\left(I-K_{k} H_{k}\right) P_{k}^{-} \tag{16}
\end{gather*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-06.jpg?height=668&width=887&top_left_y=173&top_left_x=1073)

图2. 旧金山USV攻击场景示意图。红线表示USV在二维地图上的航迹，黄色圆半径表示保护旧金山的传感器套件探测范围。绿色形状表示海湾中的友方资产。

---

## D. 非运动学数据融合

除了运动学数据外，该工具的另一目标是测量USV的航行灯/船体颜色与横截面积。因此，采用与EKF类似的方法来估计H、S与I值，同时假设这些值是可直接测量的。

估计H、S与I值的方法为递归最小二乘法。与USV的运动学数据相比，颜色H、S与I值假设为相对恒定，因此无需像EKF那样建模其随时间变化的状态更新。该方法使用了式 (14) 的卡尔曼增益，以及EKF观测更新的式 (15) 与 (16)。递归最小二乘法输出H、S与I值的估计及其估计的协方差。

研究团队采用了一种简单方法来估计USV的横截面积，因为其值随时间变化。假设传感器套件能够直接测量横截面积。横截面积的估计通过对最近20次测量值取滑动平均，以平滑当前测量中的噪声。


## III. 结果

最终产品展示了该框架作为分析工具的能力，用于在保护友方资产免受敌对USV攻击的背景下评估传感器套件的性能。本演示案例设定在旧金山——一个战略上重要的海上枢纽和人口稠密的城市，平日交通量极大。随着未知水面舰艇接近，浮标传感器套件监控其速度、位置、颜色与横截面积，这些数据有助于判别威胁等级并为决策者提供信息，如图2所示。本案例的目标是设计一个传感器套件以探测此类攻击，并在四个主要性能指标上尽可能降低误差。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-07.jpg?height=838&width=887&top_left_y=168&top_left_x=162)

图3. 框架在第一个案例研究中生成的极坐标动画快照。

---

## A. 案例研究1：设计任务中的传感器比较

本研究框架的第一个应用案例是比较在特定场景下具有预定义灵敏度的传感器套件。这对于比较现有的传感器套件在设计任务中的表现非常有用。举例来说，假设用户预测某类敌方USV将在特定航迹、特定时间、特定天气条件下攻击旧金山的港口。用户会希望知道哪种传感器套件在这些条件下表现最佳。该示例中选择的三种传感器套件为：低质量雷达（RADAR）、高质量雷达，以及一个混合套件（由雷达、激光雷达、热成像相机与光学相机组成，质量为中等），三者均通过II-B3节中的通用传感器模型表示。

图3显示了USV采取的简单轨迹。USV从远处进入，穿越浮标传感器套件的探测范围（标记为浮标），并向右侧通过。性能结果如图4所示：低质量雷达表现最差，其不确定性半径比混合套件和高质量雷达大一个数量级。然而，高质量雷达在不确定性半径上的表现与混合套件接近。高质量雷达在较远距离上的位置不确定性比混合套件更大，但在较近距离上表现更好。虽然高质量雷达在速度估计方面优于混合套件，但混合套件的主要优势在于其能够测量颜色，因此如果用户将颜色置于优先考虑，混合套件排名最佳。此外，图5和图6展示了框架在给定场景下对颜色与横截面积的输出。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-07.jpg?height=1727&width=903&top_left_y=165&top_left_x=1065)

图4. 固定设计任务中不同传感器套件的运动学误差。

在第一个案例研究中，表II展示了三种传感器套件的NRMSE与整体归一化指标$(P)$，计算方法见II-A2节。表格结果与可视化分析一致：低质量雷达在位置估计上表现较差，而高质量雷达的运动学估计与混合套件非常接近。然而，由于EKF在非零加速度条件下难以估计速度，因此所有套件在$y$方向速度上的误差相似，图4中的$y$方向加速度曲线在位置-Y图中表现出非线性。对于HSI，只有混合套件能够测量颜色，因此雷达在权重计算中受到惩罚。缺少颜色测量的传感器模型在颜色维度上会产生一个大的常量误差值。考虑到$P$指标（对每个类别等权重处理），混合套件的表现最佳，归一化得分为0.750078，显著低于高质量雷达的2.884。高质量雷达的表现也优于低质量雷达，其$P$值分别为2.88357与3.48851。这些结果符合预期：更高质量带来更好表现，而传感器的组合能带来正面效果。此外，当颜色被赋予权重时，能测量颜色的能力会进一步提升得分。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-08.jpg?height=524&width=887&top_left_y=168&top_left_x=162)

图5. 第一个案例研究中混合套件的颜色估计动画快照。右图展示了归一化的色调、饱和度和亮度估计值的动画，左图的大圆表示估计颜色，小圆标注为“true”表示USV的真实颜色。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-08.jpg?height=507&width=887&top_left_y=916&top_left_x=162)

图6. 第一个案例研究中高质量雷达的横截面积估计动画快照。左侧矩形大小变化表示真实的横截面积（USV建模为矩形体），右侧圆表示估计的等效圆形横截面积。

---

## B. 案例研究2：设计空间探索

假设用户并非针对特定任务，而是希望为旧金山湾设计一个在多种场景条件下均具鲁棒性的最优传感器套件。在本案例中，用户利用框架的设计空间探索功能，选择三个套件并对各性能指标等权重处理。用户还可为每个传感器套件运行1000个场景以测试其鲁棒性。此外，用户可以调整基准质量值及其容差，本例中允许每类传感器数量在1到2之间，质量值范围在最小与最大之间。表III展示了II-A3节步骤1中传感器套件封装器在这些输入条件下的结果。此外，鲁棒性封装器还可以生成某一传感器套件的叠加动画，如图7所示。

**表II**  
第一个案例研究的NRMSE与主观加权综合指标  

| Metric | Configuration |  |  |
| :--- | :--- | :--- | :--- |
|  | Mixed Package | Low-Quality RADAR | High-Quality RADAR |
| x-position | 0.000344 | 0.019760 | 0.000345 |
| y-position | 0.002505 | 0.092901 | 0.003339 |
| x-velocity | 0.801585 | 0.804416 | 0.801403 |
| y-velocity | 3.60732 | 3.62021 | 3.60755 |
| Hue | 0.008773 | -* | -* |
| Saturation | 0.006126 | -* | -* |
| Intensity | 0.027288 | -* | -* |
| Area | 0.135235 | 0.211723 | 0.082595 |
| Overall ( $P$ ) | 0.75008 | 3.48851 | 2.88357 |

*- 表示该配置下不可用的指标。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-08.jpg?height=863&width=887&top_left_y=791&top_left_x=1073)

图7. 鲁棒性封装器为某一传感器套件生成的叠加动画快照。

在运行完所有场景后，框架会生成每个传感器套件综合指标的PDF分布，如图8所示。比较这些PDF可见：套件000的均值和标准差分别为0.6245与0.3103，最低，因此更优，可能原因是它包含更多中等质量传感器及两个光学相机，从而受益于冗余的颜色测量。套件002的表现与000相近，均值和标准差分别为0.6339与0.3161，尽管它同时包含非常高质量和非常低质量的传感器，但传感器数量最多。套件001表现最差，其均值与标准差分别为0.6492与0.3383，原因可能是它包含冗余的低质量传感器，仅有少量高质量传感器，不及套件002的冗余高质量传感器或套件000的中等质量传感器组合。

**表III**  
传感器配置与基准指标  

| Sensor | Package Index |  |  |
| :---: | :---: | :---: | :---: |
| Metric | 000 | 001 | 002 |
| Num_Radars | 1 | 1 | 2 |
| Num_Lidars | 1 | 2 | 2 |
| Num_Optical | 2 | 1 | 1 |
| Num_Thermal | 1 | 2 | 2 |
| Baseline_RADAR_Quality | 0.424 | 0.712 | 0.121 |
| Baseline_LiDAR_Quality | 0.537 | 0.101 | 0.855 |
| Baseline_Optical_Quality | 0.500 | 0.920 | 0.115 |
| Baseline_Thermal_Quality | 0.887 | 0.250 | 0.601 |

在第二个案例研究的设计空间中，共包含三个设计点，因此最优传感器套件尚未被发现，需要更大规模的研究以充分探索空间。尽管本案例是各向同性地探索空间，用户仍可选择专注于特定指标以约束研究。例如，若用户希望获得一个仅在光照变化下鲁棒的传感器套件，可以设定宽容差用于光照，而将其他参数固定，以专门考察光照敏感性。同样，设计空间探索可增强固定任务分析，使USV航迹保持不变，但环境条件变化，以确保传感器套件的鲁棒性。此外，框架会生成针对每个性能指标的单独PDF与排名，使用户能够根据通用性或专用性标准选择套件。最后，如果用户已有预设的传感器套件，可利用通用传感器模型对其建模，并研究其在环境设计空间中的表现。


## IV. 结论

USV对高价值海军与沿海资产日益增长的威胁，凸显了先进探测系统设计的紧迫性。本研究通过开发一个仿真框架来应对这一挑战，该框架能够在复杂条件下评估不同配置的传感器套件，用于跟踪USV威胁。通过将基于物理与通用模型的雷达、激光雷达、热成像相机与光学相机与状态估计技术相结合，本研究的框架为传感器套件设计空间的探索与任务导向的传感器套件设计提供了工具支持。

![](https://cdn.mathpix.com/cropped/2025_08_21_9baae582168d740537f5g-09.jpg?height=1830&width=730&top_left_y=165&top_left_x=1151)

图8. 第二个案例研究中由传感器套件生成的PDF分布。

该仿真能够量化USV在位置、速度、尺寸与颜色上的跟踪误差，从而支持传感器套件的比较分析。通过用户定义需求加权的误差指标，为传感器选择提供了可操作的洞见。框架考虑了海况、降水、光照等环境变量，评估了传感器性能在这些条件下降低的情况，以确保鲁棒性。通过两个案例研究，该框架展示了在固定条件下对预设传感器套件的比较，并进一步探索了更广泛的设计空间，从而揭示了精度与鲁棒性之间的权衡。通过对低成本USV威胁（如MAGURA V5与胡塞武装改装船只）的建模，该框架能够为制定反制措施提供支持，从而减轻敌对自主系统带来的风险。

---

## V. 未来工作

虽然当前版本的框架仍处于探索性阶段，但它展示了传感器选择系统化方法在海上态势感知（MDA）中的潜力。为扩展这一框架，未来工作将包括：  
- 通过测试平台与实验对传感器模型进行校准，  
- 提升传感器物理与建模水平（如专有传感器特性、更高保真度模型、更多传感器模型等），  
- 引入额外的设计权重（如成本、功耗等），  
- 并扩展至水下、陆地及空中领域。


## Acknowledgment

We gratefully acknowledge Varun Srikrishnan for his contributions to the state estimators; Giancarlo M. Cecchini for his work on the documentation; and LCDR James Kenny Jr. and Carl Johnson for their guidance and advice.

## References

[1] Z. Zhang, X. Liang, C. Chen, D. Liu, C. Yu, and W. Li, "Defense penetration strategy for unmanned surface vehicle based on modified soft actor-critic," Ocean Engineering, vol. 304, p. 117840, 2024.
[2] B. Du, B. Lin, C. Zhang, B. Dong, and W. Zhang, "Safe deep reinforcement learning-based adaptive control for usv interception mission," Ocean Engineering, vol. 246, p. 110477, 2022.
[3] A. Abdurasulov. (2024, Mar) Ukraine war: The sea drones keeping russia's warships at bay. BBC News. Accessed July 2025. [Online]. Available: https://www.bbc.com/news/world-europe-68528761
[4] S. Brown. (2024, Mar) Analysis: The magura-v5 sea drone - scourge of russia's black sea operations. Kyiv Post. Accessed July 2025. [Online]. Available: https://www.kyivpost.com/analysis/29068
[5] R. P. Pedrozo, "Houthi maritime terrorism: Severing the iranian lifeline," International Law Studies, vol. 106, no. 1, 2025. [Online]. Available: https://digital-commons.usnwc.edu/ils/vol106/iss1/12/
[6] D. Mosier. (2018, Feb) Breaking the anti-ship missile kill chain. Center for International Maritime Security (CIMSEC). Accessed July 2025. [Online]. Available: https://cimsec.org/ breaking-anti-ship-missile-kill-chain/
[7] Y. Zhang, C. Pan, and X. Deng, "Complex network-based decisionmaking analysis of strikes on important nodes of a typical kill chain," in Advances in Swarm Intelligence, Y. Tan and Y. Shi, Eds. Singapore: Springer Nature Singapore, 2024, pp. 145-159.
[8] B. Johnson, J. Green, G. Burns, T. Collier, R. Cornish, K. Curley, A. Freeman, and J. Spears, "Mapping artificial intelligence to the naval tactical kill chain," Naval Engineers Journal, vol. 135, pp. 155-166, 06 2023.
[9] U.S. Coast Guard. (2025) Fast response cutter program profile. Accessed July 2025. [Online]. Available: https://www.dcms.uscg. mil/Our-Organization/Assistant-Commandant-for-Acquisitions-CG-9/ Programs/Surface-Programs/Fast-Response-Cutters/
[10] S. Bauk, N. Kapidani, L. Sousa, Z. Lukšič, and A. Spuza, "Advantages and disadvantages of some unmanned aerial vehicles deployed in maritime surveillance," Journal of Maritime Research, vol. XVII, no. III, pp. 81-87, 2020.
[11] R. Hann and T. A. Johansen, "Unsettled topics in unmanned aerial vehicle icing," SAE International, Warrendale, PA, SAE EDGE Research Report EPR2020008, Apr 2020.
[12] R. Sandau, K. Brieß, and M. D'Errico, "Small satellites for global coverage: Potential and limits," ISPRS Journal of Photogrammetry and Remote Sensing, vol. 65, no. 6, pp. 492-504, 2010.
[13] R. J. Riddolls, "A canadian perspective on high-frequency over-thehorizon radar," Defence Research and Development Canada - Ottawa, Ottawa, Ontario, Canada, Technical Memorandum DRDC Ottawa TM 2006-285, Dec 2006.
[14] J. Karst, R. McGurrin, K. Gavin, J. Luttrell, W. Rippy, R. Coniglione, J. McKenna, and R. Riedel, "Enhancing maritime domain awareness through ai-enabled acoustic buoys for real-time detection and tracking of fast-moving vessels," Sensors, vol. 25, no. 6, p. 1930, 2025.
[15] Fraunhofer IOSB, "Practical results for buoy-based automatic maritime ir-video surveillance," in Proceedings of the Port and Regional Maritime Security Symposium (RTO-MP-SCI-247). La Spezia, Italy: NATO Science and Technology Organization, May 2012, pp. 20/1-20/12.
[16] S. Fefilatyev, D. Goldgof, M. Shreve, and C. Lembke, "Detection and tracking of ships in open sea with rapidly moving buoy-mounted camera system," Ocean Engineering, vol. 54, pp. 1-12, 2012.
[17] W. Liu, Y. Liu, B. A. Gunawan, and R. Bucknall, "Practical moving target detection in maritime environments using fuzzy multi-sensor data fusion," International Journal of Fuzzy Systems, vol. 23, no. 6, pp. 18601878, 2021.
[18] A. Luis Bustamante, J. M. Molina López, and J. García Herrero, "Player: An open source tool to simulate complex maritime environments to evaluate data fusion performance," Simulation Modelling Practice and Theory, vol. 76, pp. 3-21, 2017.
[19] W. Wang, H. Zhang, Y. Li, Z. Zhang, X. Luo, and S. Xie, "Usvs-sim: A general simulation platform for unmanned surface vessels autonomous learning," Concurrency and Computation: Practice and Experience, vol. 34, no. 3, p. e6567, 2022, accessed July 2025.
[20] International Maritime Organization, Convention on the International Regulations for Preventing Collisions at Sea, 1972 (COLREGs), United Nations Std., 1972, accessed July 2025. [Online]. Available: https://www.imo.org/en/About/Conventions/Pages/COLREG.aspx
[21] J. A. Roach, "Rules of engagement," Naval War College Review, 1983. [Online]. Available: https://digital-commons.usnwc.edu/nwc-review/ vol36/iss1/6
[22] United Nations, United Nations Convention on the Law of the Sea, United Nations Std., 1994. [Online]. Available: https://www.un.org/ depts/los/convention_agreements/texts/unclos/unclos_e.pdf
[23] M. D. McKay, R. J. Beckman, and W. J. Conover, "A comparison of three methods for selecting values of input variables in the analysis of output from a computer code," Technometrics, vol. 21, no. 2, pp. 239245, 1979.
[24] G. Quartly, M. Srokosz, and T. Guymer, "Understanding the effects of rain on radar altimeter waveforms," Advances in Space Research, vol. 22, no. 11, pp. 1567-1570, 1998.
[25] A. Huntington and J. Williams, George M., "Lidar effective range," Allegro MicroSystems, Technical Document P0177, 2025, accessed July 2025. [Online]. Available: https://www.allegromicro.com/en/insights-and-innovations/ technical-documents/p0177-LiDAR-effective-range
[26] J. Johnson, "Analysis of image forming systems," in Proceedings of the Image Intensifier Symposium, ser. Tech. Rep. AD220160. Fort Belvoir, VA: U.S. Army Engineer Research and Development Laboratories (ERDL), Oct 1958, pp. 244-273.
[27] S. Zainuddin, I. P. Ibrahim, N. E. A. Rashid, M. N. Zaiaami, A. M. Md Noor, M. S. A. M. Ali, and R. S. A. R. Abdullah, "Maritime radar: A review on techniques for small vessels detection," Int. J. Electrical and Electronic Systems Research, vol. 14, pp. 1-16, 2019.
[28] H. Bounaceur, A. Khenchaf, and J.-M. Le Caillec, "Analysis of small sea-surface targets detection performance according to airborne radar parameters in abnormal weather environments," Sensors, vol. 22, no. 9, p. 3263, 2022.
[29] O. J. Montañez, M. J. Suarez, and E. A. Fernandez, "Application of data sensor fusion using extended kalman filter algorithm for identification and tracking of moving targets from lidar-radar data," Remote Sensing, vol. 15, no. 13, 2023.
[30] D. Simon, Optimal State Estimation: Kalman, $H \infty$, and Nonlinear Approaches, 1st ed. Hoboken, NJ, USA: John Wiley \& Sons, Inc., 2006.


The authors gratefully acknowledge CAPT (ret.) L.J. Petersen of ONR Code 33 for project funding. The work described here has been funded under grant N00014-21-1-2819 from the Office of Naval Research.

