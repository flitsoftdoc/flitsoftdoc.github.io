# 5 电子防护与电子攻击

大多数电子战（Electronic Warfare, EW）文献将电子防护（Electronic Protection, EP）与电子攻击（Electronic Attack, EA）分开讨论，认为二者在本质上目的不同。然而，从人工智能（AI）的角度来看，它们采用相同的底层算法解决方案。

> EP 与 EA 之间的唯一区别在于任务目标：EP 的目标是相对于己方定义的，而 EA 的目标则是相对于敌方定义的。

例如，EP 可能希望最小化误码率（Bit Error Rate, BER），而 EA 则旨在最大化对敌方的兴趣点（Probability of Interest, POI）；BER 可直接测量，而 POI 则无法直接观测。此外，实际任务往往需要同时达成这两类目标，因此将这两个概念割裂开来是不明智的。鉴于本书的目标并非描述 EP 与 EA 本身，而是突出人工智能（AI）与机器学习（Machine Learning, ML）能够帮助应对的挑战，因此我们从 AI 决策制定（Decision-Making, DM）的视角来呈现相关解决方案。

电子战系统必须根据其对环境和任务所掌握的上下文信息，选择适当的动作以达成任务目标：平台具备一组能力，而认知型决策制定器（cognitive decision-maker）将这些能力组合成策略（strategies），以实现期望的性能。正是通过这些“旋钮”（knobs）或自由度（degrees of freedom），电子战系统才能达成其目标。图 5.1 概述了一类能够同时实现 EP 与 EA 目标的策略谱系。

采用基于 AI 的决策制定主要有两个关键原因：时间和复杂性。决策制定的时间要求远超人类处理能力；此外，该领域输入变量过多，人类难以快速理解，可选方案也过于繁杂，无法由人工逐一分析。

图 5.2 展示了一个概念性流程。决策制定器接收来自电子支援（Electronic Support, ES）系统的输入，包括可观测特征 $o$ 和近期关于度量 $m$ 的控制反馈，并据此选择一个新的策略 $s$ 予以执行。如果系统包含在线学习回路（见第 7 章），则可在运行过程中动态更新模型。举一个简单例子：选择通勤上班路线。可观测特征包括星期几、一天中的时间和天气状况；策略涉及路线和交通工具；度量指标则是时间和距离。优化器根据当前条件选择最优策略，并在需要时更新模型（例如，某条道路开始施工）。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-101.jpg?height=186&width=680&top_left_y=153&top_left_x=408){width="400"}

**图 5.1** EP 与 EA 位于一个连续谱系上，所选策略可同时有效服务于多个任务目标。


![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-101.jpg?height=532&width=1115&top_left_y=514&top_left_x=193){width="400"}

**图 5.2** 决策制定器基于近期可观测特征 $o$ 和度量 $m$ 的性能反馈选择策略 $s$。可选的在线学习步骤根据经验数据更新性能模型。（基于例 7.1。）

策略选择问题最适合采用决策理论（decision theory）方法求解，因为它提供了一种严谨的行动选择推理框架。如图 5.3 所示，决策理论是在给定问题约束和假设的前提下，基于行动预期结果来选择行动的科学。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-101.jpg?height=157&width=805&top_left_y=1806&top_left_x=347){width="400"}

**图 5.3** 决策理论为思考问题和做出选择提供了结构性框架。

决策理论（decision theory）有着悠久的历史；著名经济学家肯尼斯·阿罗（Kenneth Arrow）曾对早期工作进行过描述 [1]。Russell 和 Norvig [2] 对决策理论提供了良好的入门性讨论，涵盖了理性决策制定（rational decision-making, DM）、如何处理不确定性与部分可观测环境、如何计算跨时间的效用（utility），以及如何应对对抗性对手（adversaries）。在一个完整的认知型电子战（cognitive EW）系统中，决策理论体现在三个高度关联的概念之中：规划（planning）、调度（scheduling）与优化（optimization）。

- **规划**（Planning）综合生成一系列动作，以达成期望的目标状态。规划关注“做什么”以及“以何种顺序执行”，通常表示为一个偏序图（partially ordered graph）。规划更具战略性与全局性。例如，一个基于效果的作战管理（Effects-Based Management, EBM）系统会规划部署多少平台、每个平台分配哪些资源，以及它们将部署在何处。第 6 章描述了电子战规划问题，其层级高于调度与优化。
- **优化**（Optimization）评估多个备选规划，以选择“最优”的方案。优化更具战术性与局部性。电子战系统通过优化电子防护（EP）与电子攻击（EA）相关度量（metrics）来提升性能，例如功耗、探测概率（probability of detection）以及电子战毁伤评估（EW Battle Damage Assessment, EW BDA）。5.1 节将介绍优化方法，包括多目标优化。
- **调度**（Scheduling）将一个偏序规划映射到具体的资源和时隙（timeslots）上。调度关注“何时做”以及“如何做”，深入到具体细节，例如何时发射、何时接收。5.2 节将讨论调度问题。

这些活动之间并无清晰界限。传统上，由人类制定电子战计划，而将详细的调度与自动化任务交由系统执行。当规划本身也被自动化后，这些活动便紧密耦合在一起；事实上，只有通过动态协调各层级，才能保证解决方案的可行性 [3,4]。

第 2 章介绍了目标函数，第 4 章（电子支援，ES）解释了可观测特征（observables）如何描述环境。本章则聚焦于如何选择策略，重点讨论优化与调度。5.1 节介绍优化方法，5.2 节讨论调度问题。5.3 节阐述了决策制定（DM）的一项理想属性：其实现必须具备可中断性（interruptible）。5.4 节探讨了在分布式节点网络中进行联合优化的方法。

## 5.1 优化

优化（optimization）问题是指选择一组参数值，以最大化（或最小化）某个效用函数（utility function）。自至少 1646 年起，优化便已成为数学研究的课题 [5]，而现代跨学科研究则广泛分布于运筹学、经济学和人工智能（AI）等多个领域。人工智能引入了启发式方法（heuristics）与随机搜索（randomized search），使系统能够求解以往无法处理的问题。AI 特别擅长应对性能空间（performance landscape）搜索中固有的指数级复杂性。5.1.1 节阐述了多目标优化（multi-objective optimization）所面临的挑战；5.1.2 节重点介绍人工智能领域发展出的一些近似求解方法；5.1.3 节则介绍若干正在用于提升优化性能的元学习（metalearning）技术。

### 5.1.1 多目标优化

通常无法同时优化所有目标。系统往往需要在多个目标之间进行权衡，在各项指标上均取得可接受的性能，而非在任一指标上达到最优。例如，存在速率/作用距离/功率之间的权衡，以及鲁棒性（robustness）与效率（efficiency）之间的权衡。

Ramzan 等人 [6] 对频谱共享中的多目标优化方法进行了综述。雷达领域的一个经典例子是检测概率（Probability of Detection, $P_d$）与虚警概率（Probability of False Alarm, $P_{fa}$）之间的权衡；接收机工作特性（Receiver Operating Characteristic, ROC）曲线即刻画了这一权衡关系 [7–9]。雷达与通信性能的联合优化是另一类常见的多目标问题 [10]，平台上的资源管理（resource management）同样属于此类问题 [11,12]。

当各目标之间的期望平衡关系未知时，帕累托最优前沿（Pareto-optimal frontier）即为所有非劣解（noninferior solutions）的集合，如图 5.4 所示。“最优”决策此时转化为在该前沿上进行选择，常用方法包括：

1. 通过任务参数设定目标间的期望平衡，通常以目标函数形式体现（例如，通过对度量指标赋予权重）（见第 2.4 节）；
2. 求解约束模型（constraint model），其中某些度量必须满足最低标准，而其余度量则被优化（见图 5.5）；
3. 在备选方案上计算概率分布（例如，采用博弈论方法）（见第 6.2 节）；
4. 若时间允许，将可行方案呈现给人类操作员进行决策（见第 6.3 节）。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-103.jpg?height=308&width=774&top_left_y=1617&top_left_x=373){width="400"}

**图 5.4** 帕累托最优点（Pareto-optimal points）出现在无法在不损害其他度量的前提下进一步提升任一度量的情形：$m_{1}$ 的值越高，$m_{2}$ 的值就越低。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-104.jpg?height=247&width=713&top_left_y=147&top_left_x=344){width="400"}

当系统在最低运行要求下工作时，采用以下两种建模方法之一通常更为有效：  
(a) 在成本（Cost）约束下最大化效能（Effectiveness），或  
(b) 在效能约束下最小化成本。

设定成本 $\leq m_{1}$ 且效能 $\geq m_{2}$ 的目标，可确定一个最优运行点。尽管这两种建模方式在数学上等价，但在实践中会引发不同的问题 [13], [14]。

**图 5.5** 约束模型支持在帕累托前沿上进行决策制定（DM）。相比之下，单一目标函数会通过为成本项赋予负权重的方式将所有度量合并为一个综合指标。

举例而言，考虑一个单音干扰机（tone jammer）。存在多种技术可用于缓解其所造成的干扰；每种技术具有不同的预期效能与成本（见表 5.1）。即使在此简单场景中，选择也并非总是显而易见。首先，干扰机的具体特性可能降低某项技术的预期效能，因此系统应学会基于可观测特征（observables）估计其性能（见第 4.2 节）。其次，不同成本对平台和任务的可接受程度可能不同。最后，任务的不同阶段可能具有不同优先级，从而要求选择不同的技术，即便这些技术的预期效能相同。

在现实场景中，当涉及多个性能度量、多种能力、多类平台、多样化任务以及复杂干扰机时，传统的查表法（look-up tables）或环境到技术的一一映射方法在所有情况下均表现不佳。

**表 5.1** 在通信电子防护（Communications EP）场景中，用于缓解单音干扰机的不同技术及其预期效能与成本

| 策略（Strategy）         | 效能（Effectiveness）                                                                 | 成本（Cost）                              |
| :----------------------- | :------------------------------------------------------------------------------------ | :---------------------------------------- |
| 陷波滤波器（Notch filter） | 良好；但随着干扰功率增大，自适应陷波可能滤除过多有用信号                                | 低                                        |
| 波束成形（Beamforming）   | 通常良好；若干扰呈分布式则效果差                                                      | 计算开销与多天线需求                      |
| 动态频谱接入（DSA）       | 良好；但干扰机可能跟随跳频                                                              | 需频谱感知与协调时间                      |
| 窄带跳频（Narrowband-hopping） | 取决于单音干扰的带宽                                                                  | 协调时间                                  |
| 冗余数据包（Redundant packets） | 若单音干扰为间歇性则效果良好；否则效果差                                                | 功耗增加（且吞吐量减半）                  |
| 扩频（Spreading）         | 效果差                                                                                | 接收链路增益提高会增加饱和脆弱性          |
| 绕行路由（Routing around） | 中等                                                                                  | 功耗（需多跳节点）、时延增加              |

### 5.1.2 在性能空间中搜索

人工智能（AI）致力于解决如何在指数级规模的性能空间（performance landscape）中进行搜索的问题。传统数学方法侧重于寻找完备且最优的解，但对于大多数现实世界问题（包括电子战，EW）而言，计算出精确解是不可行的。根据我们对目标函数的定义，EW 系统的策略数量呈指数级增长（$\Pi_{\forall c} v_{c}$，其中 $v_{c}$ 表示控制参数 $c$ 可能取值的数量），并迅速趋近于无穷大。当策略数量较小时，系统可以估算每种策略的效用，如算法 5.1 所示。

/// note| 算法 5.1 当候选策略数量较少时，节点 $n$ 可对每种策略穷举计算其估计效用。该方法可有效为已部署的通信网络选择电子防护（EP）干扰抑制方案（参见例 7.1 和文献 [15]）。

对每个候选策略 $s_{i}$： // 节点 $n$ 的所有候选策略 

  对每个度量 $m_{k}$：  // 估计的度量值 
    
  $m_{k}=f_{k}\left(o, s_{i}\right)$ 

根据所有度量 $m_{k}$ 计算 $\tilde{U}\left(s_{i}\right)$    // 估计的效用 

选择 $s=\operatorname{argmax}_{s_{i}} \tilde{U}\left(s_{i}\right)$       // 最优策略 

///

随着策略数量的增长，必须采用替代方法。如果目标函数是光滑的（smooth）且局部极大值（local maxima）相对较少，则基于梯度的搜索（gradient-based searches）是高效且有效的求解手段。

然而，电子战的目标函数通常**不光滑**、**不一定连续**，且常常存在**大量局部极大值**，这使得随机搜索方法（randomized search methods）更为适用 [16]。这类方法也被称为元启发式方法（metaheuristic methods）、蒙特卡洛方法（Monte Carlo methods）或随机算法（stochastic algorithms），它们在统计意义上可保证收敛到最优解，但通常无法确定是否已找到真正的最优解。

> 然而，最优性很少是关键要求；通常“足够好”（good）就已足够。

在电子战（EW）中，环境是部分可观测的（partially observable），且变化极为迅速，因此一个近似解通常已足够。换言之，对问题过度思考反而得不偿失。诺贝尔经济学奖得主、人工智能之父赫伯特·A·西蒙（Herbert A. Simon）提出了“有限理性”（bounded rationality）[17] 的概念，指出个体的理性受限于其所掌握的信息、认知能力的局限以及做出决策的有限时间。第 5.3 节将进一步探讨这一思想。

此外，许多电子战系统的设计规范要求其在面对最具压力的威胁时仍能保证特定性能。例如，采用自适应波束成形（adaptive beamforming）的雷达可能被规定需产生 50 dB 的零陷深度（null depth），以对抗噪声干扰机。该 50 dB 值通常是针对在最近距离、最接近目标方向上产生最高有效全向辐射功率（Effective Isotropic Radiated Power, EIRP）的最强干扰机而设定的。因此，即使学习系统所选择的自适应波束成形参数并非完全最优（例如，用于辅助数据估计的样本支撑不足），只要该模式被正确选为电子防护（EP）手段，由于系统在该模式下已预留了充足的性能裕度，它仍很可能对绝大多数干扰机构成有效对抗。

随机搜索方法（randomized search methods）通过在若干次迭代中评估种群（population）中个体的质量，最终选出最优解（见算法 5.2）。在本文场景中，种群 $P$ 是节点可用候选策略的一个子集，其规模远小于所有候选策略的总数。不同的随机化算法采用不同的元启发式（metaheuristic）策略来生成每一次迭代的解。

/// note| 算法 5.2 元启发式方法通过随机化搜索策略，在一小部分个体（候选策略）构成的种群中探索性能空间。效用函数 $\tilde{U}_{n}$ 用于评估各个体的质量。

$P =$ 为节点 $n$ 生成初始候选策略种群 

For 每次迭代： // 直至收敛或达到最大迭代次数 

　For 每个候选策略 $s_{i} \in P$：

　　For 对每个度量 $m_{k}$： 

$\quad m_{k}=f_{k}\left(o, s_{i}\right) \quad $   // 估计的度量值 

Compute $\tilde{U}_{n}\left(s_{i}\right)$      // 估计的效用 

$P =$ 更新种群（更新个体位置或个体本身）

Select  $s=\operatorname{argmax}_{s_{i} \in P}\left(\tilde{U}_{n}\left(s_{i}\right)\right)$   // 最后一代种群中的最优策略

///

我们对随机优化算法的讨论远非全面；此处仅列出在电子战领域已展现出潜力的方法，并提及若干相关实例。Beheshti 与 Shamsuddin [18] 综述了基于种群的元启发式算法（population-based meta-heuristics），包括其数学形式与权衡特性。Jamil 与 Yang [19] 提出了 175 个不同的基准问题，用于验证优化算法的性能，并（尤为重要地）刻画了各类算法的特性。Ramzan 等人 [6] 在认知无线电（Cognitive Radio, CR）网络背景下综述了多种优化方法。北约《认知雷达》报告 [20] 也介绍了大量相关方法与应用。这些技术仅是起点，可进一步与其他方法结合或增强。以下简要介绍若干随机优化算法。

- **蚁群优化**（Ant Colony Optimization, ACO）是一种鲁棒且通用的元启发式算法，用于求解组合优化问题。该方法通过一群人工“蚂蚁”在解空间中进行随机搜索来寻找解 [21,22]。蚂蚁在性能空间中移动时会留下“信息素”（pheromones）；被更多蚂蚁选择的路径会积累更浓密的信息素，从而在后续迭代中获得更高的选择概率。在算法 5.2 中，ACO 的种群更新意味着将“蚂蚁”移动到另一个策略。
  - **优点**：ACO 天然具备并行性，可保证收敛，并适用于动态环境中的应用。  
  - **缺点**：由于 ACO 属于随机搜索方法，其收敛时间不确定，理论分析困难，且不能保证找到全局最优解。前一轮迭代中表现良好的解会提高后续迭代沿相似路径搜索的概率，从而降低种群的多样性。
  ACO 已被应用于认知无线电网络中，用于构建路由树 [23,24]、信道分配 [25] 以及调整发射参数 [26]。Karaboga 等人 [27] 利用 ACO 在线性天线阵列中控制零陷方向。Ye 等人 [28] 将 ACO 与禁忌搜索（Tabu Search）相结合，用于协同合作式干扰（collaborative cooperative jamming）决策。

- **粒子群优化**（Particle Swarm Optimization, PSO）采用一组候选解（称为“粒子”）构成的种群（即“群”）在搜索空间中移动以寻找最优解 [29]。每个粒子的运动由两个因素引导：其自身历史最优位置的估计，以及整个粒子群迄今为止发现的全局最优位置。
  - **优点**：PSO 结构简单，易于编码；相较于遗传算法（Genetic Algorithms），在处理连续变量问题时通常更高效；同时适用于动态应用场景。  
  - **缺点**：PSO 的性能对参数选择高度敏感，不当的参数设置可能导致算法过早收敛至局部最优解，尤其在面对复杂问题时；此外，其随机性可能导致结果波动较大（随机变异性高）。
  PSO 已被用于无线通信网络中计算多参数的传输与资源分配方案 [6]。在雷达领域，PSO 在脉冲压缩码（pulse compression codes）设计 [30, 31] 和离散频率波形（discrete frequency waveforms）优化 [32, 33] 中表现良好。
  
- **遗传算法**（Genetic Algorithms, GAs）是另一种基于种群的随机搜索方法，其中候选解被编码为“染色体”（chromosomes）[34]。该元启发式算法通过**变异**（mutation）、**交叉**（crossover）和**选择**（selection）等操作，迭代生成高质量解以应对复杂问题。
  - **优点**：GAs 天然适用于离散值问题，且易于并行化。  
  - **缺点**：GAs 容易过早收敛（premature convergence）；维持种群多样性至关重要 [35–37]。GA 的问题编码具有高度问题依赖性，设计合适的编码方案往往较为困难。此外，与粒子群优化（PSO）相比，GAs 的计算效率通常较低 [38]。
  GAs 已被用于计算通信系统中的多参数传输方案，目标涵盖功率管理、传输性能优化以及共享频谱使用等 [6, 39]。在雷达领域，GAs 已应用于雷达系统设计 [40]、波形选择 [41]、波形设计 [42, 43]、目标识别 [44, 45] 以及干扰抑制（jammer suppression）[46]。
  
- **模拟退火**（Simulated Annealing, SA）是另一种搜索元启发式方法，它以概率方式决定是否从当前解转移到另一个解 [47]。与遗传算法（GAs）和粒子群优化（PSO）不同，SA 仅维护**单个搜索实例**。其概率函数通常设计为：当两个解之间的质量差异增大时，接受较差解（即“上坡”移动）的概率降低；换言之，小幅上坡移动比大幅上坡移动更可能发生。SA 也可嵌入 GAs 或 PSO 中，以加速搜索过程。
  - **优点**：模拟退火相对易于编码，通常能给出良好解（在统计意义上可保证找到全局最优解）。由于仅维护一个个体，其内存需求显著低于基于种群的方法。  
  - **缺点**：也正因如此，SA 更容易陷入起始点附近的局部最优区域（“山谷”），且无法判断是否已找到最优解。
  模拟退火已被应用于多种场景，包括天线故障检测 [48]、无线网络服务质量（QoS）保障 [49]、雷达散射截面（RCS）估计 [50]、干扰源定位 [51] 以及干扰抑制 [52]。SA 还与 GAs 结合，用于认知无线电（CR）网络中的功率分配 [53]、雷达成像 [54] 以及 MIMO 传感器阵列设计 [55]。此外，SA 也与其他人工智能技术（如基于案例的推理，Case-Based Reasoning [56]）结合，以提升收敛速度。

- **交叉熵方法**（Cross-Entropy Method, CEM）是一种用于重要性采样（importance sampling）的随机搜索方法；它从某一概率分布中抽取样本，然后通过最小化该分布与目标分布之间的交叉熵（cross-entropy），在下一次迭代中生成更优的样本 [57, 58]。Amos 与 Yarats [59] 提出了一种可微分的 CEM 形式，使其能与梯度下降方法结合使用。
  - **优点**：CEM 提供了一个精确的数学框架，在某种意义上可导出最优学习规则；对参数设置具有鲁棒性；特别适用于稀有事件仿真（rare event simulation），即需精确估计极小概率的场景。  
  - **缺点**：收敛时间不确定，停止条件依赖启发式规则；原始 CEM 方法对存储和计算资源需求较高 [60]。
  CEM 已被用于网络可靠性估计与优化 [57, 61]、网络路径发现 [62] 以及波束零陷（null）配置 [63]。Naeem 等人 [64] 利用 CEM 优化协作通信与温室气体排放。CEM 还可用于天线设计问题 [65]，以及在强化学习（Reinforcement Learning, RL）中加速学习过程 [58, 60]。与模拟退火类似，CEM 也可与基于种群的方法结合，以实现解的并行化搜索 [66, 67]。

尽管优化（optimization）是一个成熟的领域，新的近似技术仍在不断涌现。此外，不同的优化方法可以相互结合，以获得更优的性能（更快的收敛速度或更高的解质量）。许多其他方法同样能够提供帮助，包括混合方法（hybrid approaches，见第 3.3 节）和元学习（metalearning，见第 5.1.3 节）。例如，尽管性能空间（performance surface）在理论上是无限大的，但电子战（EW）对抗过程受到物理规律的约束，且对抗状态的演进取决于信息的获取或拒止。启发式方法（heuristics）可利用这种状态空间的内在关联性，并借助随机化方法探索其中尚未知晓的区域。

### 5.1.3 优化元学习

元学习（Metalearning）是指“学会学习”（learning to learn）的过程 [68, 69]。它关注的是对学习现象本身的认知与理解，而非直接学习具体领域知识。元学习器（metalearner）通过调整算法的运行参数，使其预期性能随经验积累而不断提升。此处存在一定的术语混淆：普通“学习”指构建规则以更有效地评估或决策，而“元学习”则是学习如何更好地进行学习。由于许多学习算法本质上是优化器，因此元学习可以用于学习如何优化一个学习器，而该学习器又反过来改进优化器。

早期的元学习研究包括：通过偏置管理（bias-management）在不同算法之间进行选择 [70]、利用元遗传编程（meta-genetic programming）演化出更优的遗传程序 [71]，以及在神经网络中学习优化学习规则 [72]。元学习能够自动挖掘目标任务中的内在结构，从而避免依赖人工调参 [73]。元学习具有以下多方面优势：

1. **速度**：实现更快的学习或优化；  
2. **易用性**：自动化算法调参过程；  
3. **适应性**：对环境变化反应敏捷；  
4. **数据效率**：可将知识从一个上下文迁移到另一个上下文，减少对新数据的需求。

如图 5.6 所示，多种元学习方法可相互结合，其总体目标是提升机器学习（ML）模型的泛化能力，以及决策制定（DM）引擎的效率与准确性。

元学习还可学习任务的低维表示（low-dimensional representation）[74, 75]，以简化搜索过程。在此情形下，元学习器会动态调整效用函数 $\tilde{U}_{n}$ 中的参数数量。其他降维方法还包括主成分分析（Principal Components Analysis, PCA）和人工神经网络（ANNs），例如自组织映射（Kohonen 网络）和自编码器（auto-encoders）（参见第 3.1.2 节）。

元学习（Metalearning）可帮助优先搜索策略，首先聚焦于最重要的控制参数（controllables）——即对解质量贡献最大的那些参数。算法先在少量关键控制参数的选项中进行搜索，而对次要参数则采用默认值或上一时间步所选的值。只有在确定了关键参数的取值后，算法才会进一步搜索次要控制参数。这种方法类似于“学习如何规划”（learning how to plan）（见第 7.3 节）。例如，在通信干扰场景中，一个主要控制参数可能是用于产生干扰的合适占空比（duty cycle），而次要控制参数则包括干扰波形的具体细节，如频偏（frequency offsets）和特定的调制技术（modulation techniques）。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-110.jpg?height=565&width=575&top_left_y=1417&top_left_x=465){width="400"}

**图 5.6** 元学习通过改变数据表示、优先化搜索顺序、调整超参数以及变换效用函数，以提升解的质量。

元学习还可分析搜索过程，以优化超参数（hyperparameters）并实现更高效的搜索 [76–78]。元学习器优化一组超参数 $\theta$，这些参数控制着对 $\tilde{U}_{n}$ 的优化过程。元学习器使用一个**元效用函数**（meta-Utility function）$(\tilde{U}_{n}, \mathcal{J})$，其中 $\mathcal{J}$ 用于评估优化器的性能指标，例如收敛速度，如图 5.7 所示。

![](https://cdn.mathpix.com/snip/images/6-sT-iMC78CIF-TfBBw_PrrGuU63ezcmK8JralXgxPw.original.fullsize.png){width="400"}

**图 5.7** 元学习利用元效用函数 $\mathcal{J}$ 优化优化器的超参数 $\theta$。

此外，通过近似导数，还可构建 $\tilde{U}_{n}$ 的可微分版本，使其适用于基于梯度的方法 [59]。

第 7.3 节将在强化学习（Reinforcement Learning, RL）及与环境直接交互的背景下，介绍更多用于改进决策制定（DM）的学习方法。此处所呈现的所有方法亦可视为强化学习方法。

## 5.2 调度

调度（Scheduling）将一个偏序规划（partially-ordered plan）映射到具体的资源和时隙（timeslots）上。调度关注的是“何时做”以及“如何做”。在电子战（EW）中，调度通常具体规定何时发射、何时接收。

单个电子战节点上的资源调度器（resource scheduler）可决定：何时激活传感器、何时及如何发射、何时及如何规避特定的电磁特征（electromagnetic signatures），以及/或何时及如何接收。对于分布式电子战系统而言，这类“如何”与“何时”的细节只会更加复杂。一个电子战资源调度器需要具备以下四个要素：(1) 一系列动作及其资源需求；(2) 可用资源集合；(3) 约束条件；(4) 目标函数。

关键路径法（Critical Path Method）通过构建动作之间的有向图来分析任务流程；其中总持续时间最长的路径称为关键路径（critical path），它决定了整个电子战任务的最大持续时间。位于关键路径上的任何任务都称为关键任务（critical task）。关键任务及其相互依赖关系可用甘特图（Gantt chart）或类似方法表示。在电子战中，关键任务包括频谱感知（spectrum sensing）、频谱分析（spectrum analysis）和频谱决策（spectrum decision）（见图 5.8）；一次电子战任务通常包含多次认知循环（cognition cycle）的迭代。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-112.jpg?height=675&width=845&top_left_y=147&top_left_x=327){width="400"}

**图 5.8** 各高层任务——感知、分析与决策制定（DM）——共同驱动发射/接收调度。

在计算领域，最早的调度方法源自运营管理（operations management）。装配线及人类生活的许多其他方面都需要调度，其关注点与计算系统相同，均追求效率。调度策略的发展核心在于确定关键假设应为何、哪些度量指标至关重要。在计算机科学中，常用度量包括工作负载（workload）、作业数量（jobs）、周转时间（turnaround time）和公平性（fairness）[79]。如今，多种调度范式已被广泛应用于网络路由器、操作系统、磁盘驱动器、嵌入式系统以及分组交换无线网络的解决方案中。

在电子战系统中，调度器所选择的动作最终将使系统能够执行发射与接收操作。调度器可以按循环（cyclical）或线性（linear）方式执行动作：线性调度是有限的，而循环调度则自然重复。理想情况下，要实现恰当的任务调度，需全面掌握所有可能的状态；然而，部分状态的不可观测性（partial observability）可能使特定任务难以完成。为应对输出功率、能效和时间要求等众多约束，自动调度器可为各类约束分配权重或成本，从而避免繁琐且往往因系统时序限制而不可行的人工预规划（preplanning）。

在自动调度（automatic scheduling）中，所有任务可能都需要经历执行顺序的自动优先级排序，但任务本身的性质通常需由认知型电子战（cognitive EW）系统设计者预先确定。此外，分布式电子战系统中的单个节点可能完全了解其自身“世界”范围内的所有状态，却未必知晓其他节点或行动方（actors）的状态。各节点可在本地随时间逐步完成部分任务，但节点间的协调至关重要——因为各节点可能并未朝向同一目标努力，甚至可能彼此目标冲突。例如，调度器必须意识到节点间连接性和可视性（visibility）的局限性，验证任务是否已成功完成，并对执行错误的任务进行问责（即奖惩机制）。

设计者的目标是构建一个调度器，使其在任务约束和运行限制内达成所有调度目标。在分布式系统中，决策应基于各节点的响应（或无响应）来判断：某些任务是否应彻底放弃，或是否应授权其他节点接管该任务。在时空域中缺乏真正的全频谱“可视性”（visibility），也将决定调度算法的能力边界。对大量状态（包括过去、当前以及预先规划或预测的未来状态）的感知，使调度器能够在任务执行过程中动态调整其参数（即调整其总体主调度计划）。

对于实时认知电子战系统而言，时间至关重要。因此，必须基于众多内外部因素（如传感器数据、天气状况、天线阵列可用性，或更广义的资源可用性）在近实时（near real-time）内决定任务的执行顺序。调度器应根据资源可用性动态调整调度计划。

以现代商用通信系统为例，其调度器能够决定何时发射与接收、使用哪些频率及时隙，例如采用频分多址（Frequency-Division Multiple Access, FDMA）或时分多址（Time-Division Multiple Access, TDMA）方案。动态频谱接入（Dynamic Spectrum Access, DSA）也是任何电子战系统极具吸引力的功能，应纳入其调度算法之中。

调度器负责决定系统任务的执行顺序，同时评估资源可用性并确定如何利用这些资源。它必须依赖电子支援（ES）所提供的态势感知（Situational Awareness, SA）信息，并根据接收到的信息重新排序任务。虽然一个简单的调度器可以完全是确定性的（例如基于规则或硬编码的输入-输出映射），但所选方法必须支持调度机制以应对意外、未知或部分可观测的状态。

最后，对任务环境的整体感知对于以最优顺序成功执行系统任务（无论任务内容如何）至关重要。灵活性是关键；任务的初始优先级设定与动态重优先级（reprioritization）同等重要。有价值的信息有时可能在不便的时机到达，但不可忽视，调度器必须能够识别此类信息。此外，调度器还可受益于具备“战斗或逃跑”（fight or flight）能力或紧急模式——当现有调度计划必须被放弃以应对突发威胁时，能够立即启动新的任务序列，从而保护系统安全。

表 5.2 列举了文献中与认知电子战（cognitive EW）相关的多种调度器实例。

**表 5.2 电子战调度器所采用的优化方法示例**

| 类别 | 示例 |
| :--- | :--- |
| **通信**（Comms） | 采用局部搜索、模拟退火（SA）和蚁群优化（ACO）的卫星广播调度 [80]；面向低功耗终端操作的卫星调度 [81]；最小化发射能耗 [82]；长期演进（LTE）上行链路定时对齐与功率控制 [83]；多天线系统的用户调度 [84]；基于机器学习（ML）的鱼眼状态路由（Fish-eye State Routing, FSR）用于移动自组织网络（MANET）优化 [85]；基于模拟退火的自适应 MANET 路由算法 [86]；基于恢复微时隙（recovered minislots）的 MANET 传输调度协议 [87]；基于位置的广播 TDMA 调度用于 MANET [88]；认知无线电网络（CRN）中的频谱感知调度器 [89]；基于遗传算法（GA）的 CRN 调度算法 [90]；CRN 的实时启发式调度 [91]；CRN 的实时调度器 [92]；面向集中式 CRN 的多项式时间、节能型启发式调度器 [93]；分布式传感器网络调度 [94]；资源分配技术综述 [95]，其中方法包括克隆 GA、基于加权和法（Weighted-Sum Method, WSM）的分布估计算法（Estimation of Distribution Algorithm, EDA）用于绿色无线资源分配，以及 CEO 算法。 |
| **雷达**（Radar） | 基于混合 GA 与启发式的相控阵任务调度 [96]；基于 ML 的有源电子扫描阵列（AESA）天线调度 [97]；多功能雷达网络的贪心与启发式调度 [98]；多功能相控阵雷达调度启发式方法 [99]；采用蒙特卡洛树搜索（Monte Carlo Tree Search）的多功能雷达 [100]。 |
| **电子战**（EW） | 用于电子防护（EP）的 FSR 与功率控制 [85]；面向机载电子对抗（ECM）的部分可观测马尔可夫决策过程（POMDP） [101]；基于 ML 的周期性传感器调度用于电子支援（ES）[102]；基于博弈论的干扰资源与电子攻击（EA）策略优化方法 [103]；基于 POMDP 与决策树的风险驱动多传感器调度，用于目标威胁评估 [104]。 |
| **通用框架**（General framework） | 基于知识工程的调度 [105]；面向网络化嵌入式系统的异构驱动任务调度与端到端同步调度算法 [106]；基于多项式时间启发式算法的效用累积型实时调度器 [107]；面向异构分布式系统的强化学习（RL）调度器 [108]；面向大规模资源调度的通用 ML 解决方案 [109]；采用深度强化学习（deep RL）的在线资源调度算法 [110]；用于组合优化问题启发式学习的 ML 方法 [111]；基于进化计算的调度方法 [112]；用于规划与调度的时序推理（temporal reasoning）[113]。 |

## 5.3 任意时间算法（Anytime Algorithms）

电子战（Electronic Warfare, EW）决策管理（Decision-Making, DM）算法运行于快速变化的环境中，并面临严格的实时性要求。新的优先级可能随时“突然出现”，资源也可能意外耗尽。对于决策者而言，一个理想特性是能够快速生成解决方案；或者，在时间充裕时，投入更多时间进行深入推理。尽管实现零延迟决策可能是一个目标，但在实践中，更长的积分时间（例如等待一两秒）可能会产生更优的结果。

任意时间算法（Anytime Algorithms）在运行时间越长时，能获得越来越好的解。该算法由Dean和Boddy于20世纪80年代提出[114]，其特点是在计算过程中的任意时刻均可被中断，并返回一个结果，该结果的效用是计算时间的函数。类似的概念“弹性计算”（Flexible Computation）[115]则明确权衡了额外计算时间所带来的收益与使用部分解进行行动所产生的代价。这两种思想均可追溯至Herb Simon提出的“满意化”（Satisficing）[116]概念，即在搜索解的过程中，一旦达到可接受性阈值便停止搜索；当因计算不可行性或信息缺失而无法确定最优解时，满意化策略尤为有用。更长的观测时间可能生成质量更高的观测数据，而更长的计算时间则可能带来更优的优化结果。任意时间算法认识到，寻找最优解所需的时间通常会降低整体效用，这类似于边际收益递减规律。

大多数元启发式（Metaheuristic）算法都满足这一特性：每次迭代都会提升当前最优解的质量，因此可根据需要随时终止。除了第5.1.2节中引用的文献外，任意时间算法在需要快速生成近似解的领域中已被证明有效，应用范围涵盖图像配准（Image Alignment）[117]到自适应气象控制雷达（Adaptive Weather-Control Radars）[118]。

Zilberstein研究了元控制（Metacontrol）问题：即对多个任意时间算法进行编译、控制与管理[119, 120]。Zilberstein以雷达威胁分析与目标分配问题作为其动机场景之一，并指出[119]：

> 用于跟踪目标的雷达组件与用于执行目标分配的规划组件显然相互依赖：前者的质量显然会影响后者的质量。在此类问题中，使用条件性能剖面（Conditional Performance Profiles）和动态调度（Dynamic Scheduling）似乎是必不可少的。

元学习（Metalearning）（见第5.1.3节）进一步扩展了这项工作，通过学习并利用性能预测来提升算法效能[121–123]。

## 5.4 分布式优化（Distributed Optimization）

电子战（Electronic Warfare, EW）系统可能需要在单一平台上的多个决策者之间，或跨多个平台之间进行联合优化。雷达系统和通信（Comms）系统均需要分布式决策管理（Distributed Decision-Making, DM），但通信系统具有更高的延迟和更强的协调需求。根据解决方案的性质，优化方法可分为以下几类：

- **集中式（Centralized）**：由单一决策者为所有组件和所有节点寻找全局解；
- **分布式（Distributed）**：决策者通过本地通信协调各自行动；
- **去中心化（Decentralized）**：决策者完全独立，不依赖通信进行协调。

在单一平台上，单一优化器通常比多个优化器更接近最优解，因为它能够搜索一个统一的全局解。然而，设计单一优化器更具挑战性，原因在于各子系统存在不同的时间尺度、不同类型的信息，以及需要同步的信息量庞大。

在跨平台网络中，采用单一集中式优化器是不合适的。其关键问题在于单点瓶颈（Single Bottleneck）：一旦集中式优化器失效，整个系统将随之瘫痪。其他顾虑还包括决策管理的延迟、信息隐私以及可被探测的辐射信号。在这种环境下，快速做出局部较优的决策，远胜于试图寻找一个在实施前就已失效的全局最优决策。图5.9展示了集中式优化方法在实践中的局限性。许多分布式与去中心化优化方案天然具备任意时间算法（Anytime Algorithms）的特性，使其在该动态领域中能够自然地生成满意化解（Satisficing Solutions）。

在电子战中，集中式节点可用于捕获“慢时间尺度”（Slower-Time）信息，包括更广泛的作战任务策略变更、电子战军官（Electronic Warfare Officer, EWO）交互（见第6.3节），以及较慢速的信息分发与任务管理[124, 125]（见第6.1.6节）。

分布式优化（Distributed Optimization）方法通过局部邻域间的通信来协调行动。传统方法通常假设通信是安全且充足的。然而，这一假设在电子战（Electronic Warfare, EW）环境中并不成立，因为在该环境中，通信可能因干扰（Jamming）、平台机动导致的链路中断，或为降低射频（RF）辐射而主动限制通信而受到限制甚至被拒止。第6.1.4节讨论了在何时进行通信的规划方法——即在信息共享的收益与传输代价之间进行权衡管理。

多篇综述文献描述了分布式优化解决方案，并指出其在通信开销、内存使用和最优性方面的特点[126–128]。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-116.jpg?height=645&width=741&top_left_y=1362&top_left_x=380){width="400"}

**图5.9** 集中式推理（Centralized Reasoning）很快达到实际极限。

**共识传播（Consensus Propagation）**[129]是一种轻量级通信方法，允许每个节点共享其对全局效用的局部估计，并快速计算出全局平均值，即使节点并不知道网络中总共有多少个节点。蚁群优化（Ant Colony Optimization, ACO）算法同样具有较低的通信需求。

完全去中心化（Fully Decentralized）协调要求每个节点独立评估其对全局解的贡献。一种可行方案是构造效用函数，使得每个节点的局部最优解能够准确反映其对团队全局最优解的贡献。专栏2.1（Callout 2.1）中的形式化问题定义即采用对真实效用函数的完全局部近似，在线学习环境（Online Learning Environment）中为通信网络选择电子防护（Electronic Protection, EP）干扰抑制方法（参见例7.1，[15]）。Molzhan等人[130]在经典控制理论与实时反馈控制的背景下，提出了一种用于电力系统去中心化优化的方法。

**无通信学习（Communication-Free Learning）**[131]将问题形式化，使得仅依靠局部感知即可判断解的有效性；作者描述了如何对图着色（Graph Coloring）、信道分配（考虑信道相关干扰）、会话间网络编码（Intersession Network Coding）以及去中心化传输调度（Decentralized Transmission Scheduling）进行建模。每个节点只需知道自身的分配结果，无需了解其他节点的选择。

分布式优化方法支持信息融合（Information Fusion）[118]、资源分配（Resource Allocation）[124, 131, 132]和调度（Scheduling）[133]。分布式优化的一个常见应用是时间同步（Timing Synchronization），该同步机制可进一步用于数据融合、占空比控制（Duty Cycling）、协同定位（Cooperative Localization）以及分布式波束成形（Distributed Beamforming）等协同行动[134–136]。

## 5.5 结论（Conclusion）

正如机器学习（Machine Learning, ML）和统计推断不存在“免费午餐”定理（No Free Lunch Theorem）[137]一样，优化领域同样不存在“免费午餐”[138]：如果某个算法在某一类问题上表现优异，那么它必然以在其余所有问题上性能下降为代价。

本章介绍了一些已被证明在电子战（Electronic Warfare, EW）问题中有效的优化方法；这些方法具备以下能力：

- 支持多目标优化（Support multiple objectives）；
- 快速搜索指数级规模的性能空间（Rapidly search the exponential performance surface）；
- 应对动态环境（Handle a dynamic environment）；
- 在获得更多计算时间时提升解的质量（Improve solution quality when given more time）；
- 在通信受限条件下，于多个节点上高效运行（Operate well for multiple nodes under limited communication）。

第6章将讨论更具战略性的决策管理（Decision-Making, DM）：长期作战规划与管理。

## References

[1] Arrow, K., "Decision Theory and Operations Research," Operations Research, Vol. 5, No. 6, 1957.
[2] Russell, S., and P. Norvig, Artificial Intelligence: A Modern Approach, Pearson Education, 2015.
[3] Chien, S., et al., "Automated Planning and Scheduling for Goal-Based Autonomous Spacecraft," Intelligent Systems, Vol. 13, No. 5, 1998.
[4] R-Moreno, M., et al., "RFID Technology and AI Techniques for People Location, Orientation and Guiding," in International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, 2009.
[5] Du, D., P. Pardalos, and W. Wu, "History of Optimization," in Encyclopedia of Optimization (C. Floudas and P. Pardalos, Eds.), Springer, 2009.
[6] Ramzan, M., et al., "Multi-Objective Optimization for Spectrum Sharing in Cognitive Radio Networks: A Review," Pervasive and Mobile Computing, Vol. 41, 2017.
[7] Cassady, P., Bayesian Analysis of Target Detection with Enhanced Receiver Operating Characteristic, 2019. Online: https://arxiv.org/abs/1903.08165.
[8] Chalise, B., M. Amin, and B. Himed, "Performance Tradeoff in a Unified Passive Radar and Communications System," IEEE Signal Processing Letters, Vol. 24, No. 9, 2017.
[9] Grossi, E., M. Lops, and L. Venturino, "A New Look at the Radar Detection Problem," Transactions on Signal Processing, Vol. 64, No. 22, 2016.
[10] Chiriyath, A., et al., "Radar Waveform Optimization for Joint Radar Communications Performance," Electronics, Vol. 8, No. 12, 2019.
[11] AlQerm, I., and B. Shihada, "Adaptive Multi-Objective Optimization Scheme for Cognitive Radio Resource Management," in GLOBECOM, IEEE, 2014.
[12] Mitchell, A.. et al., "Cost Function Design for the Fully Adaptive Radar Framework," IET Radar, Sonar and Navigation, 2018.
[13] Haigh, K. Z., O. Olofinboba, and C. Y. Tang, "Designing an Implementable User-Oriented Objective Function for MANETs," in International Conference On Networking, Sensing and Control, IEEE, 2007.
[14] Charlish, A., and F. Hoffman, "Cognitive Radar Management," in Novel Radar Techniques and Applications (R. Klemm, et al., Eds.), Scitech Publishing, 2017.
[15] Haigh, K. Z., et al., "Parallel Learning and Decision Making For a Smart Embedded Communications Platform," BBN Technologies, Tech. Rep. BBN-REPORT-8579, 2015.
[16] Zabinsky, Z. B., "Random Search Algorithms," in Wiley Encyclopedia of Operations Research and Management Science, 2011.
[17] Simon, H., "A Behavioral Model of Rational Choice," Quarterly Journal of Economics, Vol. 69, No. 1, 1955.
[18] Beheshti, Z., and S. Shamsuddin, "A Review of Population-Based Metaheuristic Algorithm," International Journal of Advances in Soft Computing and its Applications, Vol. 5, No. 1, 2013.
[19] Jamil, M., and X.-S. Yang, "A Literature Survey of Benchmark Functions for Global Optimization Problems," International Journal of Mathematical Modelling and Numerical Optimisation, Vol. 4, No. 2, 2013.
[20] Task Group SET-227, "Cognitive Radar," NATO Science and Technology, Tech. Rep. TR-SET-227, 2020.
[21] Dorigo, M., "Optimization, Learning and Natural Algorithms," Ph.D. dissertation, Politecnico di Milano, Milan, Italy, 1992.
[22] Katiyar, S., I. Nasiruddin, and A. Ansari, "Ant Colony Optimization: A Tutorial Review," in National Conference on Advances in Power and Control, 2015.
[23] Almasoud, A., and A. Kama, "Multi-Objective Optimization for Many-to-Many Communication in Cognitive Radio Networks," in GLOBECOM, IEEE, 2015.
[24] Zhang, Q., Q. He, and P. Zhang, "Topology Reconfiguration in Cognitive Radio Networks Using Ant Colony Optimization," in Vehicular Technology Conference, IEEE, 2012.
[25] He, Q., and P. Zhang, "Dynamic Channel Assignment Using Ant Colony Optimization for Cognitive Radio Networks," in Vehicular Technology Conference, IEEE, 2012.
[26] Waheed, M., and A. Cai, "Cognitive Radio Parameter Adaptation in Multicarrier Environment," in International Conference on Wireless and Mobile Communications, IEEE, 2009.
[27] Karaboga, N., K. Güney, and A. Akdagli, "Null Steering of Linear Antenna Arrays with Use of Modified Touring Ant Colony Optimization Algorithm," International Journal of RF and Microwave Computer-Aided Engineering, Vol. 12, No. 4, 2002.
[28] Ye, F., F. Che, and L. Gao, "Multiobjective Cognitive Cooperative Jamming DecisionMaking Method Based on Tabu Search-Artificial Bee Colony Algorithm," International Journal of Aerospace Engineering, 2018.
[29] Kennedy, J., and R. Eberhart, "Particle Swarm Optimization," in International Conference on Neural Networks, Vol. 4, 1995.
[30] Hafez, A., and M. El-latif, "New Radar Pulse Compression Codes by Particle Swarm Algorithm," in IEEE Aerospace Conference, 2012.
[31] Li, B., "Particle Swarm Optimization for Radar Binary Phase Code Selection," in Radar Sensor Technology, 2018.
[32] Reddy, B., and U. Kumari, "Performance Analysis of MIMO Radar Waveform Using Accelerated Particle Swarm Optimization Algorithm," Signal and Image Processing, Vol. 3, No. 4, 2012.
[33] Praveena, A., and V. Narasimhulu, "Design of DFC Waveforms for MIMO Radar Using Accelerated Particle Swarm Optimization Algorithm," International Journal of Engineering Trends and Technology, Vol. 33, No. 2, 2016.
[34] Holland, J., "Genetic Algorithms and Adaptation," in Adaptive Control of Ill-Defined Systems, Vol. 16, 1984.
[35] Meadows, B., et al., "Evaluating the Seeding Genetic Algorithm," in Australasian Joint Conference on Artificial Intelligence, 2013.
[36] Watson, T., and P. Messer, "Increasing Diversity in Genetic Algorithms," in Developments in Soft Computing, 2001.
[37] Chuang, C.-Y., and S. Smith, "Diversity Allocation for Dynamic Optimization Using the Extended Compact Genetic Algorithm," in Congress on Evolutionary Computation, IEEE, 2013.
[38] Hassan, R., et al., A Copmarison [sic] of Particle Swarm Optimization and the Genetic Algorithm, 2004. Online: https://tinyurl.com/pso-vs-ga.
[39] Mehboob, U., et al., "Genetic Algorithms in Wireless Networking: Techniques, Applications, and Issues," Soft Computing, 2016.
[40] Bartee, J., "Genetic Algorithms as a Tool for Phased Array Radar Design," M.S. thesis, Naval Postgraduate School, Monterey, California, 2002.
[41] Capraro, C., et al., "Using Genetic Algorithms for Radar Waveform Selection," in IEEE Radar Conference, 2008.
[42] Lellouch, G., A. K. Mishra, and M. Inggs, "Design of OFDM Radar Pulses Using Genetic Algorithm Based Techniques," IEEE Transactions on Aerospace and Electronic Systems, Vol. 52, No. 4, 2016.
[43] Sen, S., G. Tang, and A. Nehorai, "Multiobjective Optimization of OFDM Radar Waveform for Target Detection," IEEE Transactions on Signal Processing, Vol. 59, No. 2, 2011.
[44] Jouny, I., "Radar Target Identification Using Genetic Algorithms," in Automatic Target Recognition, 1998.
[45] Smith-Martinez, B., A. Agah, and J. Stiles, "A Genetic Algorithm For Generating Radar Transmit Codes to Minimize the Target Profile Estimation Error," Journal of Intelligent Systems, Vol. 22, No. 4, 2013.
[46] Zhou, C., F. Liu, and Q. Liu, "An Adaptive Transmitting Scheme for Interrupted Sampling Repeater Jamming Suppression," Sensors (Basel), Vol. 17, No. 11, 2017.
[47] Kirkpatrick, S., C. Gelatt Jr., and M. Vecchi, "Optimization by Simulated Annealing," Science, Vol. 220, No. 4598, 1983.
[48] Boopalan, N., A. Ramasamy, and F. Nagi, "Faulty Antenna Detection in a Linear Array Using Simulated Annealing Optimization," Indonesian Journal of Electrical Engineering and Computer Science, Vol. 19, No. 3, 2020.
[49] Kaur, K., M. Rattan, and M. Patterh, "Optimization of Cognitive Radio System Using Simulated Annealing," Wireless Personal Communications, Vol. 71, 2013.
[50] White, R., "Simulated Annealing Algorithm for Radar Cross-Section Estimation and Segmentation," in Applications of Artificial Neural Networks V, International Society for Optics and Photonics, Vol. 2243, 1994.
[51] Liu, Z., et al., "Error Minimizing Jammer Localization Through Smart Estimation of Ambient Noise," in International Conference on Mobile Ad-Hoc and Sensor Systems, 2012.
[52] Wang, Y., and S. Zhu, "Main-beam Range Deceptive Jamming Suppression with Simulated Annealing FDA-MIMO Radar," IEEE Sensors Journal, Vol. 20, No. 16, 2020.
[53] Zhao, J., X. Guan, and X. Li, "Power Allocation Based on Genetic Simulated Annealing Algorithm in Cognitive Radio Networks," Chinese Journal of Electronics, Vol. 22, No. 1, 2012.
[54] Yang, G., et al., "W-Band MIMO Radar Array Optimization and Improved Back-Projection Algorithm for Far-Field Imaging," in International Conference on Infrared, Millimeter, and Terahertz Waves, 2019.
[55] Sayin, A., E. G. Hoare, and M. Antoniou, "Design and Verification of Reduced Redundancy Ultrasonic MIMO Arrays Using Simulated Annealing \& Genetic Algorithms," IEEE Sensors Journal, Vol. 20, No. 9, 2020.
[56] Liu, Y., et al., "A Self-Learning Method for Cognitive Engine Based on CBR and Simulated Annealing," in Advanced Materials and Engineering Materials, Vol. 457, 2012.
[57] Rubinstein, R., and D. Kroese, The Cross-Entropy Method: A Unified Approach to Combinatorial Optimization, Monte-Carlo Simulation and Machine Learning, Springer, 2004.
[58] de Boer, P.-T., et al., A Tutorial on the Cross-Entropy Method, 2003. http://web.mit.edu/6.454/ www/www_fall_2003/gew/CEtutorial.pdf.
[59] Amos, B., and D. Yarats, "The Differentiable Cross-Entropy Method," in ICML, 2020.
[60] Joseph, A., and S. Bhatnagar, "Revisiting the Cross Entropy Method with Applications in Stochastic Global Optimization and Reinforcement Learning," in ICAI, 2016.
[61] Kroese, D., K.-P. Hui, and S. Nariai, "Network Reliability Optimization via the CrossEntropy Method," IEEE Transactions on Reliability, Vol. 56, No. 2, 2007.
[62] Heegaard, P., B. Helvik, and O. Wittner, "The Cross Entropy Ant System for Network Path Management," Telektronikk, 2008.
[63] Bian, L., "Parameters Analysis to Pattern Null Placement Based on the Cross Entropy Method," Physics Procedia, Vol. 24, No. B, 2012.
[64] Naeem, M., A. S. Khwaja, A. Anpalagan, et al., "Green Cooperative Cognitive Radio: A Multiobjective Optimization Paradigm," IEEE Systems Journal, Vol. 10, No. 1, 2016.
[65] Minvielle, P., et al., "Sparse Antenna Array Optimization with the Cross-Entropy Method," IEEE Transactions on Antennas and Propagation, Vol. 59, No. 8, 2011.
[66] Heegaard, P., et al., Distributed Asynchronous Algorithm for Cross-Entropy-Based Combinatorial Optimization, 2003. Online: https://tinyurl.com/ce-ants-2003.
[67] Helvik, B., and O. Wittner, "Using the Cross-Entropy Method to Guide/Govern Mobile Agent's Path Finding in Networks," in Workshop on Mobile Agents for Telecommunication Applications, 2001.
[68] Maudsley, D., "A Theory of Meta-Learning and Principles of Facilitation: An Organismic Perspective," Ph.D. dissertation, University of Toronto, Ontario, Canada, 1979.
[69] Vanschoren, J., "Meta-Learning," in Automated Machine Learning, Springer, 2019.
[70] Rendell, L., R. Seshu, and D. Tcheng, "More Robust Concept Learning Using DynamicallyVariable Bias," in Workshop on Machine Learning, 1987.
[71] J. Schmidhuber, "Evolutionary Principles in Self-Referential Learning, or on Learning How to Learn: The Meta-Meta-... Hook," M.S. thesis, Technische Universität München, Munich, Germany, 1987.
[72] Bengio, Y., S. Bengio, and J. Cloutier, "Learning a Synaptic Learning Rule," in IJCNN, Vol. ii, 1991.
[73] Andrychowicz, M., et al., "Learning to Learn by Gradient Descent By Gradient Descent," in NeurIPS, 2016.
[74] Rusu, A., et al., "Metalearning with Latent Embedding Optimization," in ICLR, 2019.
[75] Zintgraf, L., et al., "Fast Context Adaptation via Metalearning," in ICLR, 2019.
[76] Chen, Y., et al., "Learning to Learn Without Gradient Descent by Gradient Descent," in ICML, vol. 70, 2017.
[77] Li, K., and J. Malik, "Learning to Optimize," in ICLR, 2017.
[78] Vilalta, R., and Y. Drissi, "A Perspective View and Survey of Metalearning," Artificial Intelligence Review, Vol. 18, 2005.
[79] Arpaci-Dusseau, R. H., and A. C. Arpaci-Dusseau, Operating systems: Three Easy Pieces, Arpaci-Dusseau Books, LLC, 2018.
[80] Kilic, S., and O. Ozkan, "Modeling and Optimization Approaches for Satellite Broadcast Scheduling Problem," IEEE Transactions on Engineering Management, 2019.
[81] Doron Rainish, D., and A. Freedman, Air Interface for Low Power Operation of a Satellite Terminal, 2015. Online: https://www.satixfy.com/vlnsr-implementation-for-mobile/.
[82] El Gamal, A., et al., "Energy-Efficient Scheduling of Packet Transmissions Over Wireless Networks," in Computer and Communications Societies, IEEE, Vol. 3, 2002.
[83] Dahlman, E., S. Parkvall, and J. Sköld, "Chapter 11: Uplink Physical Layer Processing," in $4 G$ LTE/LTE-Advanced for Mobile Broadband, Academic Press, 2011.
[84] Pattanayak, P., and P. Kumar, "Computationally Efficient Scheduling Schemes for Multiple Antenna Systems Using Evolutionary Algorithms and Swarm Optimization," in Evolutionary Computation in Scheduling, 2020.
[85] Grilo, A., et al., "Electronic Protection and Routing Optimization of MANETs Operating in an Electronic Warfare Environment," Ad Hoc Networks, Vol. 5, No. 7, 2007.
[86] Kim, S., "Adaptive MANET Multipath Routing Algorithm Based on the Simulated Annealing Approach," The Scientific World Journal, 2014.
[87] Bollapragada Subrahmanya, V., and H. Russell, "RMTS: A Novel Approach to Transmission Scheduling in Ad Hoc Networks by Salvaging Unused Slot Transmission Assignments," Wireless Communications and Mobile Computing, 2018.
[88] Amouris, K., "Position-Based Broadcast TDMA Scheduling for Mobile Ad-Hoc Networks (MANETs) with Advantaged Nodes," in MILCOM, 2005.
[89] Salih, S., M. Suliman, and A. Mohammed, "A Novel Spectrum Sensing Scheduler Algorithm for Cognitive Radio Networks," in International Conference on Computing, Electrical and Electronic Engineering, 2013.
[90] Zhu, L., et al., "The Design of Scheduling Algorithm for Cognitive Radio Networks Based on Genetic Algorithm," in IEEE International Conference on Computational Intelligence Communication Technology, 2015.
[91] Liang, J.-C., and J.-C. Chen, "Resource Allocation in Cognitive Radio Relay Networks," Selected Areas in Communications, Vol. 31, No. 3, 2013.
[92] Sodagari, S., "Real-Time Scheduling for Cognitive Radio Networks," Systems Journal, Vol. 12, No. 3, 2017.
[93] Bayhan, S., and F. Alagoz, "Scheduling in Centralized Cognitive Radio Networks for Energy Efficiency," Transactions on Vehicular Technology, Vol. 62, No. 2, 2013.
[94] Zhang, W., et al., "Distributed Stochastic Search and Distributed Breakout: Properties, Comparison and Applications to Constraint Optimization Problems in Sensor Networks," Artificial Intelligence, Vol. 161, No. 1-2, 2005.
[95] Ramzan, M., et al., "Multiobjective optimization for Spectrum Sharing in Cognitive Radio Networks: A Review," Pervasive and Mobile Computing, Vol. 41, 2017.
[96] Zhang, H., et al., "A Hybrid Adaptively Genetic Algorithm for Task Scheduling Problem in the Phased Array Radar," European Journal of Operational Research, 2019.
[97] Sahin, S., and T. Girici, "A Method for Optimal Scheduling of Active Electronically Scanned Array (AESA) Antennas," 2019.
[98] Li, X., et al., "A Scheduling Method of Generalized Tasks for Multifunctional Radar Network," in International Conference on Control, Automation and Information Sciences, IEEE, 2019.
[99] Orman, A., et al., "Scheduling for a Multifunction Phased Array Radar System," European Journal of Operational Research, Vol. 90, No. 1, 1996.
[100] Shaghaghi, M., R. Adve, and Z. Ding, "Multifunction Cognitive Radar Task Scheduling Using Monte Carlo Tree Search and Policy Networks," IET Radar, Sonar and Navigation, Vol. 12, No. 12, 2018.
[101] Song, H., et al., "A POMDP Approach for Scheduling the Usage of Airborne Electronic Countermeasures in Air Operations," Aerospace Science and Technology, Vol. 48, 2016.
[102] Vaughan, I., and L. Clarkson, "Optimal Periodic Sensor Scheduling in Electronic Support," in Defence Applications of Signal Processing, 2005.
[103] Ren, Y., et al., "A Novel Cognitive Jamming Architecture for Heterogeneous Cognitive Electronic Warfare Networks," in Information Science and Applications, Vol. 621, Springer, 2020.
[104] Zhang, Y., and G. Shan, "A Risk-Based Multisensor Optimization Scheduling Method for Target Threat Assessment," Mathematical Problems in Engineering, 2019.
[105] Rajpathak, D., "Intelligent Scheduling-A Literature Review," Knowledge Media Institute, The Open University (United Kingdom), Tech. Rep. KMI-TR-119, 2001.
[106] Xie, G., R. Li, and K. Li, "Heterogeneity-Driven End-to-End Synchronized Scheduling for Precedence Constrained Tasks and Messages on Networked Embedded Systems," Journal of Parallel and Distributed Computing, Vol. 83, 2015.
[107] Balli, U., et al., "Utility Accrual Real-Time Scheduling Under Variable Cost Functions," IEEE Transactions on Computers, Vol. 56, No. 03, 2007.
[108] Orhean, A., F. Pop, and I. Raicu, "New Scheduling Approach Using Reinforcement Learning for Heterogeneous Distributed Systems," Journal of Parallel and Distributed Computing, Vol. 117, 2018.
[109] Yang, R., et al., "Intelligent Resource Scheduling at Scale: A Machine Learning Perspective," in Symposium on Service-Oriented System Engineering, IEEE, 2018.
[110] Ye, Y., et al., A New Approach for Resource Scheduling with Deep Reinforcement Learning, 2018. Online: https://arxiv.org/abs/1806.08122.
[111] Mirshekarian, S., and D. Sormaz, "Machine Learning Approaches to Learning Heuristics for Combinatorial Optimization Problems," Procedia Manufacturing, Vol. 17, 2018.
[112] Gandomi, A., et al. (Eds.), Evolutionary Computation in Scheduling, Wiley, 2020.
[113] Barták, R., R. A. Morris, and K. B. Venable, "An Introduction to Constraint-Based Temporal Reasoning," Synthesis Lectures on Artificial Intelligence and Machine Learning, Vol. 8, No. 1, 2014.
[114] Dean, T., and M. Boddy, "An Analysis of Time-Dependent Planning," in AAAI, 1988.
[115] Horvitz, E., "Reasoning About Beliefs and Actions Under Computational Resource Constraints," in Workshop on Uncertainty in Artificial Intelligence, 1987.
[116] Simon, H., "Rational Choice and the Structure of the Environment," Psychological Review, Vol. 63, No. 2, 1956.
[117] Brooks, R., T. Arbel, and D. Precup, "Fast Image Alignment Using Anytime Algorithms," in IJCAI, 2007.
[118] Kim, Y., M. Krainin, and V. Lesser, "Application of Max-Sum Algorithm to Radar Coordination and Scheduling," in Workshop on Distributed Constraint Reasoning, 2010.
[119] Zilberstein, S., "Operational Rationality Through Compilation of Anytime Algorithms," Ph.D. dissertation, University of California, Berkeley, CA, 1993.
[120] Zilberstein, S., "Using Anytime Algorithms In Intelligent Systems," AI Magazine, 1996.
[121] Svegliato, J., K. H. Wray, and S. Zilberstein, "Meta-Level Control of Anytime Algorithms with Online Performance Prediction," in IJCAI, 2018.
[122] Gagliolo, M., and J. Schmidhuber, "Learning Dynamic Algorithm Portfolios," Annals of Mathematics and Artificial Intelligence, Vol. 47, 2006.
[123] López-Ibáñeza, M., and T. Stützlea, "Automatically Improving the Anytime Behaviour of Optimisation Algorithms," European Journal of Operational Research, Vol. 235, No. 3, 2014, Extended version at https://core.ac.uk/download/pdf/208141673.pdf.
[124] Smith, S. F., et al., "Robust Allocation of RF Device Capacity for Distributed Spectrum Functions," Journal of Autonomous Agents and Multiagent Systems, Vol. 31, No. 3, 2017.
[125] Gillen, M., et al., "Beyond Line-of-Sight Information Dissemination for Force Protection," in MILCOM, 2012.
[126] Fioretto, F., E. Pontelli, and W. Yeoh, "Distributed Constraint Optimization Problems and Applications: A Survey," Journal of Artificial Intelligence Research, Vol. 61, No. 1, 2018.
[127] Faltings, B., "Distributed Constraint Programming," in Handbook of Constraint Programming, Elsevier, 2006.
[128] Shoham, Y., and K. Leyton-Brown, Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations, Cambridge University Press, 2009.
[129] Moallemi, C., and B. Van Roy, "Consensus Propagation," Transactions on Information Theory, Vol. 52, No. 11, 2006.
[130] Molzahn, D., et al., "A Survey of Distributed Optimization and Control Algorithms for Electric Power Systems," IEEE Transactions on Smart Grid, Vol. 8, No. 6, 2017.
[131] Duffy, K., C. Bordenave, and D. Leith, "Decentralized Constraint Satisfaction," IEEE/ACM Transactions on Networking, Vol. 21, No. 4, 2013.
[132] Di Lorenzo, P., and S. Barbarossa, "Distributed Resource Allocation in Cognitive Radio Systems Based on Social Foraging Swarms," in International Workshop on Signal Processing Advances in Wireless Communications, IEEE, 2010.
[133] Zhang, W., et al., "Distributed Stochastic Search and Distributed Breakout: Properties, Comparison and Applications to Constraint Optimization Problems in Sensor Networks," Artificial Intelligence, Vol. 161, No. 1, 2005.
[134] Stankovic, M., S. Stankovic, and K. Johansson, "Distributed Time Synchronization in Lossy Wireless Sensor Networks," in IFAC Workshop on Estimation and Control of Networked Systems, 2012.
[135] Yan, H., et al., "Software Defined Radio Implementation of Carrier and Timing Synchronization for Distributed Arrays," in Aerospace Conference, 2019.
[136] Kim, M., H. Kim, and S. Lee, "A Distributed Cooperative Localization Strategy in Vehicular-to-Vehicular Networks," Sensors, Vol. 20, No. 5, 2020.
[137] Wolpert, D., "The Lack of a priori Distinctions Between Learning Algorithms," Neural Computation, 1996.
[138] Wolpert, D., and W. Macready, "No Free Lunch Theorems for Optimization," Transactions on Evolutionary Computation, Vol. 1, No. 67, 1997.
