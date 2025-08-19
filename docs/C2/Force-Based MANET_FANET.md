

# 基于力的无人机蜂群自组织MANET/FANET

## Force-Based Self-Organizing MANET/FANET with a UAV Swarm 

Citation: Saffre, F.; Hildmann, H.; Anttonen, A. Force-Based Self-Organizing MANET/FANET with a UAV Swarm. Future Internet 2023, 15, 315.https://doi.org/10.3390/fi15090315

Published: 19 September 2023


#### 摘要

本文提出了一种新颖的分布式算法，用于在移动自组网络（MANETs）中优化接入点的部署，以改善在无基础设施环境下的服务质量。该算法基于每个网络节点的本地、独立执行，从而确保了高度的可扩展性和对网络条件变化的适应性。其主要目标是使接入点的空间分布与客户端设备的分布相匹配，同时保持与网络根节点的强连接。通过自主决策与协同路径规划，该算法弥合了需求响应型网络服务提供与关键网络连接维护之间的差距。该方法性能的评估通过数值模拟结果进行验证。

**关键词：**MANET；蜂群智能；自组织；无人机（UAVs）；无人机（drones）；蜂群（swarms）；群集（swarming）

**Keywords:** MANET; swarm intelligence; self-organization; UAVs; drones; swarms; swarming




## 1. 引言

随着技术的不断进步和发展，我们正处于一场通信革命之中，这是一段根本性的范式转变时期，可以说早在几十年前就已经开始了——无论是源于互联网的发明，还是个人计算机的诞生。从最初通过有线互联网连接的计算机网络实现电子通信，我们逐渐转向无线连接；随之而来的是在相对临时的环境下建立网络连接的机会。例如，咖啡店里的顾客可以通过连接本地路由器来访问互联网。

下一步是使用移动资源，例如部署在其他硬件上的路由器，它们通过所在平台的移动进入或离开合适的位置，从而成为移动自组网络（Mobile Ad Hoc Networks，MANETs）的节点。尽管此类网络最初由部署在其他设备和系统上的节点组成，因此这些连接往往是偶然产生或作为这些设备与系统运行的副产品，但近年来，专用移动平台的使用——其主要任务是移动这些节点——在学术文献中受到了越来越多的关注。

### 1.1. 移动自组网络（MANETs）、飞行自组网络（FANETs）

MANETs 的基本原理与无线连接相关，即任何能够通过有线方式接入更广泛基础设施的设备，如果其覆盖范围内存在仅能通过无线方式连接的设备，就可以中继这些设备的流量。这一特性有可能使无线网络更加灵活，并在出现故障时更具弹性 [1]。正因如此，MANETs 目前已广泛应用于商业领域 [2,3]、军事领域 [2,4,5] 以及民用安全领域 [6,7,8]，并衍生出了专门的子领域，例如车载自组网络（Vehicular Ad Hoc Networks，VANETs）[2,9-11]。

无线自组网络的动态性和持续演化特性，使得基于移动路由器或中继器的应用具有很强的实用性和成功潜力。然而，这也带来了挑战，因为网络的动态拓扑结构要求对路由进行持续的重新评估 [3,5]。节点的行为越不可预测，网络就必须越健壮，以确保在任何时候都能维持连接 [12,13]。针对动态拓扑的自适应路由算法研究已经在文献中得到了广泛关注 [14-17]。在最近的发展中，无人机（Unmanned Aerial Vehicles，UAVs）技术开始进入这一领域：UAVs 越来越多地被视为飞行自组网络（Flying Ad Hoc Networks，FANETs）中的路由器平台 [1-3,6,18]。积极利用无人机来保障 MANET 或 FANET 的连通性，并以蜂群方式协同优化覆盖范围，潜在收益是巨大的 [6]。

### 1.2. 使用无人机部署 MANETs

随着技术的进步，无人机越来越多地被认为可以支持 MANETs [1]。它们在增强连通性方面提供了可行的解决方案，尤其适用于难以到达或缺乏基础设施的环境，例如荒野地区或灾难发生后的场景 [19]（见图1）。

![](https://cdn.mathpix.com/cropped/2025_08_19_0e5132bf93ca1a541128g-02.jpg?height=1254&width=1248&top_left_y=1105&top_left_x=571){width="500"}

图1. 四个截图展示了一个部署的 MANET 为所有客户端提供服务的过程（应力通过颜色表示，连续光谱范围从亮绿色（表示链路质量指标（Link Quality Metric, LQM）$\rightarrow 1$），到黄色（LQM 值约为 $0.5$），再到红色（LQM $\rightarrow 0$））。这一系列截图展示了单个蜂群对客户端连续位置变化的响应。

由于无人机的空中特性和固有机动性 [20]，它们不会受到地面障碍的阻碍。此外，无人机可以配备无线通信设备，并作为 MANET 中的移动节点或接入点使用。这使它们能够动态地、有意地重新配置网络拓扑，以直接响应用户需求或环境条件的变化。在 MANETs 中使用无人机有以下几个关键的操作优势：

- **资源获取与维护的灵活性**：由于无人机群（swarm）由物理上独立、各自运行的设备组成，因此其部署（包括在运行过程中增加或移除无人机）具有很高的灵活性。操作由多个独立单元的行为叠加而成，这使得不同利益相关者和运营方可以共同投入资源，同时各自保持对所贡献资源的独立责任和所有权。尤其是在大规模基础设施因超出任何单一方的财力或运维能力而失效时，这种方式使较小的组织能够聚合力量，共同解决问题/提供服务。
- **自适应的网络拓扑 [7,16]**：当无人机以成为 MANET 成员为明确目标而被投放时，其运动轨迹可以专门设计来服务这一目标。由此，那些没有其他任务目标的无人机可以通过优化位置来协助其他有任务目标的无人机，从而提升整个 MANET 的性能。这增强了 MANET 对需求模式变化和客户端终端移动的响应能力。
- **利用空中位置优势**：仅凭其在三维空间中移动的能力，无人机就可以占据具备优势的位置，因为 (a) 不受地面障碍物对信号传输的限制，(b) 不受地面条件对设备安全的影响。虽然这增加了操作成本（飞行需要持续的资源投入），但通过部署足够数量的无人机，可以在节点可用性方面抵消这一问题（例如让电量不足的无人机返回充电，同时派出新的无人机补位）。
- **反应性与韧性**：无人机不仅可以通过合理部署优化拓扑结构，还可以动态调整位置以确保所需的冗余水平。这使它们能够建立一种不仅适合当前状态，还能适应潜在未来情况的拓扑结构。

然而，事情并非尽善尽美。正如前文所暗示的，将无人机用作携带节点的平台，也面临着操作上的挑战和不足。


### 1.3. 基于无人机的 MANETs 在现实中的挑战

除了必须保持飞行（这会消耗有限的电池电量）之外，无人机还必须 (a) 携带有效载荷（这会因飞行操作所需的额外能量而增加运行成本），以及 (b) 操作这些载荷（进一步增加无人机的能耗需求）。尽管电力问题（即无人机的飞行、运行和保持空中悬停）至少有潜在的解决方案（例如，利用地面高能激光（High Energy Lasers, HELs）为无人机供能/充电 [21]），但仍存在其他功能性方面需要考虑。例如，要维持一个具有所需冗余度的全连接网络，就必须依赖节点之间的协作。而在某些场景下（见第 2.3 节），这种协作可能需要在次优甚至对抗性条件下进行。此外，还有一个实际问题，即如何为客户端分配带宽，因为根据应用的不同，客户端可能会产生巨大的需求（例如实时高清晰度视频传输）。最后，还存在监管和法律框架的问题 [22]。很显然，一个较大规模的无人机 MANET 将依赖于无人机的自主运行，而这在当前仍存在问题，因为缺乏明确的法律许可（各国目前正在争相建立必要的法律与监管机构 [23-26]）。下一节将讨论其中一些最突出的挑战，并为本文研究的重点和建模选择提供背景与范围。

### 1.4. 本文的贡献

我们提出了一个去中心化的决策框架（以虚拟力模型的形式）用于无人机蜂群的自组织。该框架同时应对两个挑战：在 MANET 中没有中心控制单元的情况下，蜂群 (1) 动态地创建一个连接（可能是移动的）终端的网络，(2) 并维持一个拓扑结构，确保所有无人机通过清晰的多跳路径与基站相连。我们在本文中发现并报告，个体单元的集体运动模式（虚拟力模型的涌现特性）会导致接入点形成一种拓扑结构，该结构既能反映客户端的异质分布（及其随后的变化），同时又能保持与中央互联网网关的清晰多跳连通性。本文从系统性角度（即集体行为）研究了该分布式算法的性能，并通过使用简单的链路质量指标（Link Quality Metric, LQM）来考察在不同客户端运动模式下多次仿真运行的结果差异。


## 2. 移动自组网络（MANETs）

### 2.1. 移动自组网络（MANETs）：应用与挑战

随着无线技术的不断进步，MANETs 的应用范围持续扩大 [$20,27,28$]。第 2.3 节提供的三类应用场景只是其中的部分示例，在这些场景中，无人机支持的 MANET 可以通过提供关键通信链路（如在救援队、幸存者和外部指挥中心之间建立连接）展现出巨大的价值。在本文提出的方法中，我们主要关注如何实现并维持野外所有客户端与中央数据汇聚点/指挥中心/网络根之间的连接。除了为野外人员与指挥中心/调度中心建立通信基础设施外，MANETs 还可以用于点对点通信，例如物联网（IoT）应用 [29,30]，其中智能设备彼此通信 [31]，以协同管理其需求曲线。无论是在家庭自动化还是工业环境中，IoT 设备往往需要动态地通信与协作 [29,31]。尤其是在部分 IoT 设备具备移动性 [30] 或仅间歇性活跃时，MANETs 可以有效地动态适应应用的需求 [5,29]。这可以通过允许设备在进入或离开彼此通信范围时自行组建和管理网络来实现。在这一背景下，车载自组网络（Vehicular Ad Hoc Networks, VANETs）[2,9-11] 值得特别关注：随着车辆自主性的增强，互联的车辆能够共享信息 [22,32]，分配可用资源 [5,28]，并在近距离导航时协作。VANETs [9-11] 基于 MANETs 的原理，在车辆之间以及与交通基础设施的其他部分进行通信。已知的好处包括提升安全性、提高效率和加快适应性。

然而，MANETs 广泛且不断扩展的应用前景也带来了诸多挑战。首要挑战是如何在动态拓扑条件下维持网络性能 [3,7,11]。由于 MANET 节点本质上具有（潜在的）移动性，网络拓扑可能会快速且不可预测地变化。这需要新颖的路由协议 [$12,17,30,33$] 来应对这种复杂性，以确保节点之间的通信可靠高效。

此外，随着 MANETs 的规模与复杂性增加——例如在大规模物联网部署中——网络管理与安全的挑战也会加剧 [29]。在这种分布式、去中心化的环境中，防御威胁和维护隐私本身就极为复杂 [8,29]。此外，网络管理协议 [33] 需要能够应对节点故障、流量拥塞和其他中断的可能性 [12]。能源管理是另一个关键挑战 [18,29,30]，尤其对于由电池供电的节点（如无人机或 IoT 设备）组成的 MANETs [29,31]。在保证网络连通性的同时优化能耗是一项需要精细平衡的非平凡任务。

尽管如此，MANETs 的潜力依然巨大。它们的灵活性与自适应性，加上广泛的应用场景，使其成为推动日益互联世界的重要力量。随着研究的不断深入，针对这些挑战的创新解决方案将持续推动 MANETs 在各领域的发展与应用。目前，MANETs 是一个蓬勃发展的研究方向 $[5,12,13,17,29,30,33]$，并已成为现代无线通信技术的重要组成部分 [12,13,33]。随着越来越多的用户随身携带移动设备，对网络灵活性的需求也在增长。由于 MANETs 能够自组织并在很大程度上独立于固定/静态基础设施运行，其应用范围十分广泛。然而，尽管其适应性和多功能性很强，但也面临多种严峻（有时是独特的）挑战。

### 2.2. 本文的研究范围

MANETs 由于其灵活性与自组织能力 [34-36]，有潜力改变无线通信格局。然而，它们同时面临诸多挑战 [4,5,7,12,14-16,29]，这些挑战可能阻碍其最佳运行。理解这些挑战对于提升其鲁棒性、安全性和效率至关重要。

MANETs 中最突出的挑战之一是网络拓扑的动态性 [14,15]。由于节点的机动性，网络拓扑会随时间变化。这可能导致路径中断和间歇性连接，使得在节点间路由数据的过程复杂化。设计能够快速响应此类变化的自适应路由协议 [17,30] 是一项非平凡的任务，需要先进的算法与高效的网络管理策略 [12]。

随着网络节点数量的增加，管理网络、维护路由表和确保无缝通信的开销将变得愈加复杂。可扩展性问题 [15] 可能导致网络性能下降、延迟增加和可靠性降低。

我们提出使用搭载无人机的接入点来构建 MANETs。我们的研究保持通用性，范围涵盖了旨在实现客户端到根节点连通性的广泛 MANETs（见第 2.3 节）。我们重点关注动态网络拓扑的管理（即节点的自组织 [37] 移动），并以可扩展的方式进行。我们限定研究范围在主要关注通过根节点或数据汇聚点将客户端连接起来的 MANETs [13]。

拓扑管理，即 MANET 中节点的定位与连接，被认为是最重要的挑战之一。文献中已提出多种类型/类别的方法。我们按照蜂群控制方式加以区分：集中式 [38-40]、分布式 [38,41] 或混合式；以及用于决定单个节点运动的机制：基于位置的 [42]、基于虚拟力的 [43] 或基于机器学习的 [44-46]。第 4 节提出的方法是分布式的：MANET 中的无人机完全基于本地信息来决定其运动与连通性。然而，由于基站（网络拓扑中的根节点）能够触发额外无人机的释放，因此系统中仍存在一个中心化的组成部分，可以认为我们的方法构成了一种混合机制。

本文提出的方法是基于力的（具体包括第 4.1.1–4.1.3 节中讨论的三种力）。我们假设节点完全知道自己的位置（见第 3.3 节），这只是为了简化，使每架无人机能够精确计算到另一架无人机的距离和方向。这些值也可以通过信号分析推断得到。一般来说，相对位置被用于计算所有虚拟力（例如邻近无人机之间的排斥力），这意味着无人机需要互相知道邻居的位置。然而，我们并不关心这些信息是如何获得的（例如是否通过视觉信号）。

### 2.3. 目标 MANET 应用与场景

我们简要讨论三类应用。在所有这些应用中，基于无人机的 MANET 在其入口（基站）和出口点（终端）与地面相连。在本文余下部分中，我们只考虑平坦地形，并将问题视为二维问题。

我们认为这种近似是合理的，前提是无人机之间的垂直间距远小于其在水平面上的目标距离（例如数十米对比数公里），且环境中没有高大障碍物（如海洋或沿海地区、平原、河口等）。

### 2.3.1. 灾害响应

第一类场景聚焦于现有基础设施不可用的情况 [19]，这可能是暂时性的（例如停电），也可能是永久性的（例如飓风摧毁了加勒比海岛的蜂窝基站网络）。在这种应用中，我们假设存在某种正在进行的协调行动，涉及大量在不确定地形中运行的野战单元，它们需要通过网关连接到全球 IT 基础设施或某个作战指挥部 [31]。这也涵盖了 MANET 被部署为临时基础设施的情况。

在这种环境下，需求可能会随着救援工作的推进或当地部分基础设施逐步恢复上线而发生移动。MANET 必须通过动态节点重新分配来响应这种需求变化。

### 2.3.2. 野外探索

第二类场景考虑在探索任务期间临时部署 MANET，例如在某些远程地区开展救援行动，或对此前未探索过的地形进行测绘 [3]。在这两种情况下，节点的移动可能是不可预测的。

基于无人机的 MANET 在仅短期需要基础设施时尤其有用，因为它们会自动减少在低需求或无需求区域的存在，从而在拥有大量野战单元的区域提供高水平的连通性。

### 2.3.3. 对抗环境

前两个场景涉及基础设施被摧毁或从未存在的情况。在这两种情况下，信息可能非常零散，但已知信息被认为是可信的。对于第三类场景，我们考虑的是现有基础设施或信息不总是可信的情况 [47]。最简单的情况可能是由于自然现象（如太阳风暴）导致传感器广泛失效。然而，文献中越来越多地关注恶意干扰的情况。这可能表现为对全球定位系统（GPS）基础设施的定向攻击，或 GPS 欺骗。

就基于无人机的 MANET 而言，这一点尤为重要。例如，在乌克兰冲突中，大规模部署的无人机已知受到反制措施的严重影响，从而显著削弱了无人机的定位与远程控制能力。


## 3. MANETs 建模

所提出框架的目标是建立并维护一个多跳接入网络，使客户端群体能够向中央位置（根节点）发送/接收信息，并在需要时彼此之间通信。一个次要目标是生成树状拓扑以确保路由的唯一性。其挑战在于：在客户端分布任意且异质的情况下，仅通过个体移动节点的自主局部决策来实现这一目标。

正如第 2.2 节所讨论的，我们的方法侧重于自组织的拓扑管理。尽管路由由最终形成的树结构决定，但我们并不涉及网络内部的动态路由。

### 3.1. 节点与客户端

我们将 MANET 建模为由三类实体构成的动态网络拓扑：客户端（移动终端）、节点（为终端提供服务的移动接入点）以及根节点或数据汇聚点（静态的全局基础设施接入点）。

网络中的节点是无人机搭载的路由器，它们既可以作为进入 MANET 的入口（为移动客户端提供服务），也可以作为 MANET 内部的连接节点，在这种情况下，该节点仅连接两个其他节点。在这种角色下，该节点被称为其接入点节点的子节点，同时是所有它所服务节点的父节点。

节点的连通范围有限，且所提供服务的质量随与节点距离的增加呈二次方衰减（见第 3.2 节）。此外，它们的带宽上限也受到限制，在我们的模型中简化为能够服务/转发的连接数。节点依靠自身动力和控制移动，这意味着它们能够自主决定运动。它们利用局部可用信息（见第 4.1 节）进行决策，因此其运动是内部状态与感知环境共同作用的结果。我们假设节点始终知道自己的位置。

客户端被简化为产生网络需求的实体。我们采用 Full Buffer Model [48]，即单个小区中的客户端数量不变，且所有客户端始终产生需求。客户端也会移动，但其运动由外部函数决定，因此不受客户端内部状态影响。我们同样假设客户端能够准确知道自己的位置，并将其传递给父节点。此假设是必要的，因为无人机需要据此判断其为客户端提供的服务质量（基于两者之间的距离）；在真实实现中，客户端接收到的信号强度也可以直接传回无人机，以达到相同效果。

### 3.2. 链路质量指标（LQM）

我们定义一个指标来衡量多跳路径中的整体连接质量。该指标旨在捕捉从根节点到客户端整个路径上最弱链路的信号强度（即“最弱链路”假设），并与可实现的最大值进行比较。信号强度在距离 $r \leq 1$ 空间单位时饱和为 1，即其值为 $\min \left(1, \frac{1}{r^{2}}\right)$。

这样做有两个原因：(1) 我们希望评估客户端在 MANET 中的链路质量体验（见公式 (2)，参见图 2）；(2) 我们在所有具有多个子节点的父节点中使用该指标，无论是因为其在拓扑树中作为分支，还是因为其作为接入点服务客户端。此类节点会综合考虑与所有子节点之间的链路质量，从而计算压力值（见公式 (3)），并据此决定是否需要向 MANET 部署额外节点（见第 3.3 节）。

归一化的单链路 LQM 定义如下：对于路径上任意两个节点 $i$ 与 $j$（从根/数据汇聚点到某个移动客户端），基于它们之间的距离 $r_{i, j}$ （见公式 (4)），其中 $i$ 与 $j$ 分别表示父节点/根节点与子节点/客户端：

$$
\begin{equation*}
L Q M_{j}=\frac{1}{\max \left(1, r_{i, j}\right)^{2}} \tag{1}
\end{equation*}
$$

该公式为每个节点分配了一个值，表示其与父节点的连接强度。需要注意的是，分母中的 $\max \left(\_, \_\right)$ 仅用于确保 LQM 不会超过 1，即更接近父节点并不会带来高于 1 的 LQM 值。

利用这些单链路值，我们可以计算从根节点到任意移动客户端 $c$ 的整体 LQM，记为 $L Q M_{\text {root }, c}$，取路径上最弱链路的强度：

$$
\begin{equation*}
L Q M_{\text {root }, c}=\min \left(1, L Q M_{j}\right) \forall j \in \text { path to } c \tag{2}
\end{equation*}
$$

图 2（第 8 页）展示了该指标的使用结果。

![](https://cdn.mathpix.com/cropped/2025_08_19_0e5132bf93ca1a541128g-08.jpg?height=1882&width=1246&top_left_y=411&top_left_x=571){width="500"}

图 2. 所有客户端 $c$ 的 $L Q M_{\text {root }, c}$ 变量演化（见公式 (2)）。共进行了 100 次独立仿真运行（500 个客户端，分为八个动态簇）。(a) 客户端每 800 个时间单位重新定位；(b) 客户端每 400 个时间单位重新定位。平均值为“平均的平均值”。标准差为 100 个仿真运行的标准差的平均值（每次仿真运行、每个时间单位对应 1 个数据点）。最小值为 100 次仿真运行中任意客户端 $c$ 体验到的最差 LQM 的平均值。

### 3.3. 压力水平

我们为节点定义了一个特定的性能值，称为压力（stress）。该值表示与该节点相连的客户端所体验的整体服务质量。

$$
\begin{equation*}
\text { stress }_{i}=\frac{n}{\sum_{j=1}^{n} L Q M_{j}} \tag{3}
\end{equation*}
$$

压力水平是一个仅基于本地可用信息计算的内部值，用作触发条件（见第 4 节，尤其是第 4.2.1 节中关于额外无人机部署的机制）。默认情况下，该触发阈值设为 1.5。对于作为接入点的节点（仅有一个客户端），当该客户端的 LQM 低于 $\frac{2}{3}$ 时，就会触发该条件。对于服务多个客户端的节点，当所有关联客户端的平均 LQM 低于 $\frac{2}{3}$ 时，也会触发该条件。


### 3.4. 其他建模选择

### 3.4.1. 定位、导航与授时（PNT）

正如第 3.1 节所述，我们假设所有节点始终能够利用常规 GPS 信号等方式确定其精确位置。我们认为这一假设在两类目标场景中是合理的（即灾害响应，见第 2.3.1 节；以及野外探索，见第 2.3.2 节），但在第三类场景中则存在争议（即对抗性或敌对环境，见第 2.3.3 节）。

军事领域确实是 PNT 的主要应用场景，原因在于：(a) 准确了解自身位置的重要性，以及 (b) 标准 GPS 信号极易被干扰或欺骗。然而，一些方法即便不依赖 GPS 也能提供良好甚至与 GPS 类似的定位信息（例如，独立系统如 TOPS 的研究，或利用星链（Starlink）等巨型星座的定位方法 [49,50]）。此外，MANET 中的节点可以利用接收信号的强度推断与发送方的距离，并据此进行评估。我们认为本文提出的方法在这些条件下同样适用。假设位置始终已知这一设定，既简化了本文的复杂性，又不会显著影响其在所建议目标应用中的适用性。

### 3.4.2. 中央调度

所有无人机都能够与中央枢纽通信。在从枢纽出发前往部署的过程中，它们需要进行通信。在此过程中，它们暂时不可作为接入点使用，同时在此期间也不能部署其他无人机。此外，当无人机的压力水平超过阈值时，也必须能够与中央枢纽通信，因为这会触发额外无人机的投放。这两种情况都可以通过系统的既有功能实现：在前一种情况下，新部署的无人机在接入网络树中与其指定接入点建立连接之前，不会作为接入点运行；在后一种情况下，任何节点的压力水平都可以通过网络路由消息传递至中央。

## 4. 一种新型无人机自组织 MANET 方法

我们提出了一种自组织方法，使无人机蜂群能够动态、自适应地部署 MANET 并管理其拓扑结构，以优化链路质量指标（LQM）。

在本节中，我们首先讨论无人机如何确定其运动方向的机制（见第 4.1 节）。随后讨论整个系统如何利用各节点的压力水平信息来迭代地向蜂群中部署额外无人机（见第 4.2.1 节）；相反，对于利用率不足的节点，如何在蜂群内部重新分配（见第 4.3 节），或直接退役并召回至基站（见第 4.2.2 节）。

### 4.1. 无人机运动

无人机的运动由一个力 $f$ 决定，该力表现为推动（或拉动）无人机向特定方向移动（$f$ 由分别作用在 $x$ 和 $y$ 方向的分力组成）。在本文方法中，$f$ 是三种力的加权和（见第 4.1.4 节）。这三种力分别是：(a) 节点受到其客户端的吸引力，(b) 节点受到来自其他节点（非父节点）的排斥力，(c) 节点趋向于与其父节点保持某一给定最优距离（作为参数）的作用力（该作用力既可能表现为吸引，也可能表现为排斥）。

这些力的计算依赖于：(a) 实体 $i$ 与 $j$ 之间的距离 $r_{i, j}$（按欧几里得距离计算，见公式 (4)），以及 $d x_{i, j}, d y_{i, j}$，即两者在 $x$ 与 $y$ 坐标上的差值。该差值的方向（符号）将决定所产生力的方向（见公式 (5)-(7) 中 $r$ 与 $d x, d y$ 的应用）。
实体 $i$ 与 $j$ 的欧几里得距离 $r_{i, j}$ 按常规定义计算：

需要注意的是，虽然 $r_{i, j}=r_{j, i}$，但 $d x$ 和 $d y$ 并不具备对称性（即 $d x_{i, j} \neq d x_{j, i}$），因为它们具有方向性，即在反转时符号必然不同（$d x_{i, j}=-d x_{j, i}$）。这一特性体现在公式 (5)-(7) 中，它决定了所产生的力是吸引还是排斥。

### 4.1.1. 向客户端移动

我们将任意客户端 $j \in\{1, \ldots, n\}$ 对其节点在 $x$ 轴或 $y$ 轴上施加的吸引力建模为一种虚拟力，其大小随两者之间欧几里得距离的平方反比递减。这意味着距离更近的客户端影响更大，而距离更远的客户端影响更小。

**关联客户端吸引力的数学建模**

$$
\begin{align*}
f_{x_{i}}^{\prime} & =\sum_{j=1}^{n} \frac{d x_{j, i}}{r_{j, i}^{3}} \\
f_{y_{i}}^{\prime} & =\sum_{j=1}^{n} \frac{d y_{j, i}}{r_{j, i}^{3}} \tag{5}
\end{align*}
$$


### 4.1.2. 远离其他无人机

与客户端对节点运动的影响类似，周围所有节点 $j \in\{1, \ldots, n\}$（不包括父节点）也会影响节点的运动方向，但这一次 (a) 方向相反（公式 (5) 中的分子为 $d x_{j, i}$，而公式 (6) 中为 $d x_{i, j}$），并且 (b) 由于分母的指数不同，公式 (6) 中的力随距离增加而衰减得比公式 (5) 更慢。

**来自其他无人机的排斥力建模**

$$
\begin{align*}
f_{x_{i}}^{\prime \prime} & =\sum_{j=1}^{n} \frac{d x_{i, j}}{r_{i, j}^{2}} \\
f_{y_{i}}^{\prime \prime} & =\sum_{j=1}^{n} \frac{d y_{i, j}}{r_{i, j}^{2}} \tag{6}
\end{align*}
$$

### 4.1.3. 保持连通性与路由

最后，我们考虑父节点对当前节点的影响（即到根节点路径上的父节点，注意该父节点在公式 (6) 中被明确排除）。需要注意：(a) 方向再次反转（这里使用 $d x_{j, i}$ 而非 $d x_{i, j}$），以及 (b) 括号中的第二项会导致所产生的力在 $r_{j, i}=1$ 时发生符号变化，在该点上力为零。这使得 $f^{\prime \prime \prime}$ 可以表现为吸引力或排斥力。

**保持连通性的力建模**

$$
\begin{align*}
f_{x_{i}}^{\prime \prime \prime} & =\frac{d x_{j, i}}{r_{j, i}^{2}} \times\left(r_{j, i}-\frac{1}{r_{j, i}^{2}}\right)  \tag{7}\\
f_{y_{i}}^{\prime \prime \prime} & =\frac{d y_{j, i}}{r_{j, i}^{2}} \times\left(r_{j, i}-\frac{1}{r_{j, i}^{2}}\right)
\end{align*}
$$

### 4.1.4. 综合运动

作用在节点上的总力是上述三种力的加权和。此外，我们对每个力的 $f x$ 和 $f y$ 进行归一化。

**节点运动总体受力建模**

$$
\begin{align*}
& f x_{i}=w^{\prime} \frac{f_{x_{i}}^{\prime}}{\sqrt{\left(f_{x_{i}}^{\prime}\right)^{2}+\left(f_{y_{i}}^{\prime}\right)^{2}}}+w^{\prime \prime} \frac{f_{x_{i}}^{\prime \prime}}{\sqrt{\left(f_{x_{i}}^{\prime \prime}\right)^{2}+\left(f_{y_{i}}^{\prime \prime}\right)^{2}}}+w^{\prime \prime \prime} \frac{f_{x_{i}}^{\prime \prime \prime}}{\sqrt{\left(f_{x_{i}}^{\prime \prime \prime}\right)^{2}+\left(f_{y_{i}}^{\prime \prime \prime}\right)^{2}}} \\
& f y_{i}=w^{\prime} \frac{f_{y_{i}}^{\prime}}{\sqrt{\left(f_{x_{i}}^{\prime}\right)^{2}+\left(f_{y_{i}}^{\prime}\right)^{2}}}+w^{\prime \prime} \frac{f_{y_{i}}^{\prime \prime}}{\sqrt{\left(f_{x_{i}}^{\prime \prime}\right)^{2}+\left(f_{y_{i}}^{\prime \prime}\right)^{2}}}+w^{\prime \prime \prime} \frac{f_{y_{i}}^{\prime \prime \prime}}{\sqrt{\left(f_{x_{i}}^{\prime \prime \prime}\right)^{2}+\left(f_{y_{i}}^{\prime \prime \prime}\right)^{2}}} \tag{8}
\end{align*}
$$

在数值实验中，我们发现 $w^{\prime}, w^{\prime \prime}, w^{\prime \prime \prime}$ 取值分别为 $0.25, 0.5, 1$ 效果最佳。这些取值强调了父节点对结果虚拟力的影响，而客户端吸引力与其他节点排斥力则起到调节作用。这种方式有助于确保网络的凝聚性（例如防止客户端群体将节点拉离父节点过远，从而导致二者之间的链路质量下降）。需要注意的是，这些权重值并未经过系统的最优搜索，仍有待进一步调整。

### 4.2. 动态无人机部署与回收

### 4.2.1. 动态部署

当最后一架被派遣的无人机到达目的地并开启其无线接入点后，如果 MANET 中任一节点的压力值（见第 3.2 节，公式 (3)）超过给定阈值（在本文中默认设为 1.5），则会触发释放额外无人机的机制，该无人机将前往压力水平最高的节点附近。一旦无人机被部署，它将前往指定坐标，然后转变为网络节点，成为 MANET 的活跃成员。

### 4.2.2. 动态回收

正如第 4.3 节将要讨论的，MANET 中的节点在某些条件下会调整其与根节点的连接关系。这种“重连”实质上是对网络的优化，并起到管理 MANET 拓扑的作用。然而，在此之前我们首先定义当蜂群整体利用率不足时的收缩机制。

回顾一下，客户端会自动连接到最近的节点。这意味着，如果一架无人机在 MANET 中作为叶子节点，它可能会因为其他节点位置更优而失去所有客户端。同样地，如果一个节点原先作为多跳路径中的中继，它可能会发现所有子节点都已重新连接到其他父节点（如第 4.3 节所述；这是为了优化 MANET 的整体 LQM）。在这两种情况下，节点将不再拥有任何依赖对象（因此也没有压力值，见第 3.3 节）。当这一情况持续 10 个或以上时间单位时，节点将在随后的每个时间步中以固定概率（目前为 $1 \%$）开始考虑退役。

退役的决策由每个节点自主完成，且受随机选择控制。由于在每个时间步都会进行一次固定概率的随机测试，节点在 MANET 中长期处于无客户端或无子节点状态时，更有可能返回基站（其保持空闲、等待客户端或子节点重新连接的概率遵循指数衰减）。如果在退役决策做出之前有任何客户端或节点重新连接到该无人机，它将立即停止测试并恢复正常工作。然而，一旦做出退役决策，该无人机将不再接受新的连接请求，而是返回基站。

### 4.3. 动态自适应拓扑管理

无人机创建的 MANET 具有树状结构：所有连接都始于基站（根节点），并且正如第 3.2 节所述，网络中的任意节点最终都会连接到单一的根父节点（即拥有最高 LQM 的节点）。这种结构既能 (a) 确保全局连通性（即连接从根节点生长，节点仅在连接到根节点时才具备 LQM 值），又能 (b) 防止形成环路。

节点会定期基于距离以及到根节点所需的跳数评估其连接情况。为此，节点会考虑其范围内的所有潜在父节点，并基于 (1) 它们之间的距离，以及 (2) 在树中的高度（即到根节点的跳数）来判断适配性。当以下条件满足时，节点 $i$ 会触发从当前父节点 $p$ 切换到新父节点 $j$ 的操作（公式 (9)）：

$$
\begin{equation*}
r_{i, j} \times \sqrt{1+l_{j}}<0.75 \times r_{i, p} \times \sqrt{l_{i}} \tag{9}
\end{equation*}
$$

该比率的初始值为 1.06，并且会迅速增加，具体取决于 (a) 节点 $i$ 和 $j$ 距离根节点的远近，以及 (b) 两个节点的跳数差异（参见表 1）。

表 1. 对于任意节点 $i$，展示了其重新连接条件：只有当到新无人机 $j$ 的距离相较当前父节点 $p$ 的距离足够小（即比率更优）时，$i$ 才会考虑从 $p$ 重新连接到 $j$。该比率随 $i$ 和 $j$ 的层级差异迅速增加。见公式 (9)。

| $l_{j} \backslash l_{i}$ | 1 | 2 | 3 | 4 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | - | 1.06 | 1.3 | 1.5 |
| 2 | 1.06 | 1.3 | 1.5 | 1.68 |
| 3 | 1.3 | 1.5 | 1.68 | 1.84 |
| 4 | 1.5 | 1.68 | 1.84 | 1.98 |
| 9 | 2.25 | 2.37 | 2.49 | 2.6 |

该机制旨在防止因收益过小而频繁触发重连。如前所述，该公式可以通过修改 0.75 的值来进行调节与定制。


## 5. 性能评估

所提出框架的目标是建立并维护一个多跳接入网络，使客户端群体能够向中央位置（根节点）发送/接收信息，并在需要时彼此之间通信。一个次要目标是生成树状拓扑以确保路由唯一性。

其挑战在于：在客户端分布任意且异质的情况下，仅依靠个体移动节点的局部自主决策来实现上述目标。

我们通过绘制 LQM 值和蜂群规模随时间的变化曲线来衡量蜂群性能。LQM 在此作为性能/服务质量（QoS）的一阶近似（仅用于确定父节点）；我们并未从通信角度评估 QoS，也未考虑网络的运行成本或不同流量规模的影响。重点在于展示蜂群无需中央控制模块即可实现自组织，构建一个能够覆盖大多数（理想情况下为全部）移动客户端的 MANET。其他潜在的性能指标，例如能效、时延或吞吐量，并未在本文中考察，也不属于我们工作的重点。

### 5.1. 数值实验设置

每个客户端被随机分配四个不同的站点（地理坐标），并在这些站点间循环移动（以固定时间间隔重新定位）。为确保客户端的异质分布，这些站点被分组成数量随机、规模随机、位置随机的若干簇，因此在每个重定位阶段结束时，客户端都会呈现出新的“斑块状”分布（高密度区域与空白或近空区域相互分隔，在这些区域中不需要覆盖）。  
需要注意的是，在一个周期内属于同一簇的客户端，往往在完成移动后会重新归属不同的簇。节点位置的变化可在图 1 的截图中观察到，该图展示了一系列时间序列对应的四个快照，显示了客户端重定位后蜂群的自组织过程；关于重定位对 LQM 的短期负面影响，详见图 2。

这一设计并非意在模仿建议场景中移动客户端的真实运动模式。相反，上述异质分布与周期性重定位行为旨在迫使蜂群首先调整结构以反映覆盖需求的变化，然后在需求（与局部客户端密度成正比）剧烈且即时地变化时重新配置。

使用这种不现实的确定性循环被认为不会影响实验结果，因为无人机没有记忆功能，因此每个配置都会被视为一个全新的问题（即便它可能是先前某个配置的重复）。

实验的目标在于展示蜂群不仅能在首次部署时“扩展”网络以覆盖需求热点，还能在条件变化时自适应调整拓扑（通过搜索新的需求区域，看似“跟随”客户端，而无需提前知道其最终目的地）。

为评估扰动频率对性能的影响，我们设置了不同的重定位间隔（800 或 400 时间单位），并分析拓扑适应前、中、后的平均与最小 LQM 变化。

**总结**：终端数量保持不变；蜂群的上限规模受限；数据收集持续 3200 时间单位，终端每 400 或 800 时间单位重新定位；使用蒙特卡洛仿真来建模分布式算法的执行；采用简单链路质量指标（LQM）作为性能的一阶近似测度。仿真在 Windows 10 笔记本上使用原生 JAVA 实现（未使用专用库）。

### 5.2. 实验结果

仿真结果验证了分布式算法能够建立一个多跳接入网络，并通过动态调整节点位置与连接拓扑来为任意且异质分布的客户端提供服务（见图 2）。

此外，结果还表明：蜂群中所有成员并行执行各自的决策函数（决定节点位置）能够生成一个稳定或近乎稳定的网络配置，只要客户端的分布保持静止（即实现成功的自组织）。多数参与的无人机会在固定位置附近“振荡”，并在树状拓扑中长期保持相同的角色/层级。

由于该算法能够在客户端不移动时生成合适的固定接入点分布，因此即便网络已扩展完成且全体客户端的 LQM 达到满意水平，也可以让算法在后台运行而无需额外操作。因此，当客户端发生重定位时（详见第 5.1 节），蜂群无需调用特定程序即可自行重新配置。通过个体移动、因需求变化而空闲节点的退役、拓扑（父子关系）的重组以及向高压力点派遣新无人机（与最初扩展网络时相同的操作），蜂群能够自发适应任何新情况。

以下展示部分结果以说明系统行为。图 2 展示了所选 LQM 近似随时间的演化。该变量定义为从根节点到客户端的整个多跳路径上最弱链路的信号强度（“最弱链路”假设），并与最大可实现值比较（当 $r \leq 1$ 时信号强度饱和为 1，即 $\min \left(1, \frac{1}{r^{2}}\right)$）。

结果显示，在客户端重定位时，平均 LQM 与最低 LQM 均急剧下降，而方差（标准差）则成比例上升。但在经过几个时间步后，系统会恢复，因为蜂群已重新组织以适应新的客户端分布。

图 3 展示了随时间变化的参与服务的无人机数量。毫不意外地，它在网络扩展阶段（$t=0 \rightarrow t=400$ 或 $t=0 \rightarrow t=800$）以及随后客户端重定位后，呈现出与 LQM 相同的模式。

值得强调的两个方面是：

1. 蜂群规模在实验参数下（覆盖范围、客户端数量/簇数量）似乎饱和在 80 左右，这低于无人机总数（100），表明系统能够仅投入必要的资源。  
2. 在重定位之后，空中无人机总数不会低于约 60，因此适应过程并非等同于一次“重启”。蜂群中仅约 $25 \%$（≈20 架）的无人机被“退役”（随后逐步替换），而剩余 $75 \%$ 则仅“跟随客户端”完成迁移。

![](https://cdn.mathpix.com/cropped/2025_08_19_0e5132bf93ca1a541128g-14.jpg?height=869&width=1243&top_left_y=1590&top_left_x=571){width="500"}

图 3. 蜂群规模的演化（同时在空中的无人机数量）。结果为 100 次独立仿真的平均值。注意：所有参数（包括客户端总数和无人机规模）在两种场景中均相同，唯一的差别是重定位频率（客户端移动到其他位置的时间间隔，分别为 800 与 400 时间单位）。


## 6. 结论与未来工作

### 6.1. 总结

我们提出了一种在网络中以分布式、自组织方式移动节点的方法。该方法的优势之一是网络能够在客户端位置（移动）发生变化时进行自适应，而不会失去与中央网关（即无人机基站）的多跳连通性。然而，该方法无法保证一定能找到最优的分配/分布，这也可被视为一个缺点。

此外，我们强调我们并未声称已开发出成熟的技术解决方案，这也是我们采用简单而抽象的“链路质量指标”（LQM）来量化覆盖波动的原因。

我们的研究成果具有算法和理论性质：我们提出了一个去中心化的决策框架，能够在存在异质且动态客户端分布的环境下，管理多跳自组网络中移动接入点的合理部署与后续重组。

### 6.2. 结论

我们得出结论：基于力的方法适用于由仅依赖局部信息进行自主决策的个体节点组成的 MANET 的部署与维护。该方法无需显式规划或集中协调，这在灵活性和可扩展性上具有明显优势。在所提方法中，唯一的集中管理部分是基于已部署节点报告的压力水平，决定是否向网络某一区域派遣额外单元。  
选择三种不同的力反映了实际约束条件，即：针对高需求区域的吸引力（客户端施加的“拉力”）、防止聚集的排斥力（节点间施加的“推力”），以及在整体覆盖与链路质量下降风险间取得平衡的父节点对其子节点的“推-拉”作用。  
本文所采用的三种力的权重参数取值基于试错法，并不一定是最优的，尽管在选定的参数空间中表现良好。

我们的研究通过无人机蜂群的自组织实现了 MANET。在没有中央控制单元的情况下，蜂群能够 (1) 动态创建一个连接（潜在移动）终端的网络，(2) 并维持一个确保所有无人机通过唯一的多跳路径连接至基站的拓扑。

### 6.3. 未来工作

本文工作基于若干重要简化，属于理论研究。在后续工作中，我们已考虑若干方向：

- 我们尚未探索极端异常场景，例如没有任何客户端存在，或所有客户端聚集在地图边缘的情况。
- 引言中提到，MANET 的优势之一是具备韧性（见第 1.2 节）。然而，我们提出的 MANET 方法并未提供冗余。我们预计这可以通过设计融入蜂群，并计划在不久的将来重点研究该问题（及其形式化验证）。
- 我们认为，用于控制能效的参数已包含在基于力的节点控制中：在第 4.1.3 节公式 (7) 中，我们将无人机间的作用距离设为 1，此时该力趋近于零。由于距离影响能效，未来的研究可利用模型的这一部分来调节无人机间通信的功耗。同样，第 3.2 节中的 LQM 在距离为 1 时达到平台值。尽管这与 MANET 中数据传输的能耗相关，但目前的研究并未评估该成本。

  未来的研究，尤其是针对具体应用的研究，将会考虑这一网络性能指标。

- 在性能评估中，我们注意到实验设置及公式 (5)-(7) 的细微变化会导致蜂群出现奇特的涌现行为（例如，一长串相连的无人机左右摆动，直到与客户端连接）。未来工作将研究此类行为的设计与利用，以及实现它们所需的环境条件。
- 在公式 (2) 中，我们将 LQM 定义为路径中最弱链路的质量。未来可以通过更复杂的定义来反映连接的其他属性，使 LQM 受整条路径信号衰减的影响。任意连接到最佳可用接入点 $j$ 的节点 $i$ 的递归定义如下：
  $$
  L Q M_{i}=\frac{L Q M_{j}}{\max \left(1, r_{i, j}\right)^{2}}
  $$
  在该修订定义下，连接至路由器的路径上任何次优链路都会进一步降低整体 LQM 值（现有工作仅考虑最后一跳）。这至少会在两个方面影响额外节点的部署。首先，靠近路由器的次优链路可能显著降低 LQM，从而促使额外节点更早被部署（可能改善单链路质量，进而提升整体连通性）。其次，修订后的 LQM 更能真实反映实际连接质量，从而更可能将新节点派往最需要的位置。为了说明这一点，考虑两条 LQM 值均为 0.6 的路径：一条路径中仅有一条链路次优，其他均完美；另一条路径中所有链路均为 0.6。后者理应被赋予更低的整体 LQM 值，因此会更早获得额外无人机的支持。研究这一修订性能度量的影响是未来的工作方向。

- 在第 2.3 节中，我们特意将场景限定在二维域。目前我们实验室的大量项目与海事领域相关，因此该设定满足需求。尽管如此，我们并不认为将理论推广至三维存在问题。未来工作将致力于研究适应障碍丰富环境或复杂地形（例如城市峡谷或室内搜救）的改进方法。

Author Contributions: Conceptualization, F.S.; methodology, F.S.; software, F.S.; validation, F.S. and H.H.; formal analysis, F.S., H.H. and A.A.; investigation, F.S., H.H. and A.A.; resources, F.S. and A.A.; data curation, F.S.; writing-original draft preparation, F.S., H.H. and A.A.; writing-review and editing, F.S., H.H. and A.A.; visualization, F.S.; supervision, F.S. and A.A.; project administration, F.S. and A.A.; funding acquisition, F.S. and A.A. All authors have read and agreed to the published version of the manuscript.

Funding: This work was supported by VTT's Government Grant (GG_SecureSoc2022, Project \#132273).
Conflicts of Interest: The authors declare no conflict of interest.

## References

1. Li, X.; Chen, J.; Li, J. FATES: A Framework with Adaptive Track-Explore Strategy for Moving Targets Search by a FANET. In Proceedings of the 2018 IEEE Intl Conf on Parallel \& Distributed Processing with Applications, Ubiquitous Computing \& Communications, Big Data \& Cloud Computing, Social Computing \& Networking, Sustainable Computing \& Communications (ISPA/IUCC/BDCloud/SocialCom/SustainCom), Melbourne, VIC, Australia, 11-13 December 2018; pp. 856-861. [CrossRef]
2. Shumeye Lakew, D.; Sa'ad, U.; Dao, N.N.; Na, W.; Cho, S. Routing in Flying Ad Hoc Networks: A Comprehensive Survey. IEEE Commun. Surv. Tutorials 2020, 22, 1071-1120. [CrossRef]
3. Singh, H.; Verma, S.; Adhya, A. A Brief Review on Position-based Routing Protocols in Flying Ad-hoc Networks. In Proceedings of the 2022 5th International Conference on Contemporary Computing and Informatics (IC3I), Uttar Pradesh, India, 14-16 December 2022; pp. 1423-1428. [CrossRef]
4. El-Zoghby, A.M.; Mosharafa, A.; Azer, M.A. Anonymous Routing Protocols in MANETs, a Security Comparative Analysis. In Proceedings of the 2018 14th International Computer Engineering Conference (ICENCO), Cairo, Egypt, 29-30 December 2018; pp. 254-259. [CrossRef]
5. Sathyaraj, P.; Devi, S.; Swethareddy, A.; Manimegalai, L.; Kannan, K.; Babu, M. A Dynamic Resource Allocation Protocol: Device to Device Communication For MANETs. In Proceedings of the 2022 International Conference on Advanced Computing Technologies and Applications (ICACTA), Coimbatore, India, 4-5 March 2022; pp. 1-6. [CrossRef]
6. Singal, G.; Laxmi, V.; Gaur, M.; Rao, D.V.; Kushwaha, R. UAVs Reliable Transmission for Multicast Protocols in FANETs. In Proceedings of the 2019 Sixth International Conference on Internet of Things: Systems, Management and Security (IOTSMS), Granada, Spain, 22-25 October 2019; pp. 130-135. [CrossRef]
7. Kadivar, M. An Adaptive Yao-based topology control algorithm for wireless ad-hoc networks. In Proceedings of the 2020 10th International Conference on Computer and Knowledge Engineering (ICCKE), Mashhad, Iran, 29-30 October 2020; pp. 457-462. [CrossRef]
8. Jasim, K.S.; Ali Alheeti, K.M.; Najem Alaloosy, A.K.A. A Review Paper on Secure Communications in FANET. In Proceedings of the 2021 International Conference of Modern Trends in Information and Communication Technology Industry (MTICTI), Sana'a, Yemen, 4-6 December 2021; pp. 1-7. [CrossRef]
9. Hamdi, M.M.; Yussen, Y.A.; Mustafa, A.S. Integrity and Authentications for service security in vehicular ad hoc networks (VANETs): A Review. In Proceedings of the 2021 3rd International Congress on Human-Computer Interaction, Optimization and Robotic Applications (HORA), Ankara, Turkey, 11-13 June 2021; pp. 1-7. [CrossRef]
10. Al-shareeda, M.A.; Alazzawi, M.A.; Anbar, M.; Manickam, S.; Al-Ani, A.K. A Comprehensive Survey on Vehicular Ad Hoc Networks (VANETs). In Proceedings of the 2021 International Conference on Advanced Computer Applications (ACA), Maysan, Iraq, 25-26 July 2021; pp. 156-160. [CrossRef]
11. Hameed, A.G.; Mahmoud, M.S. Vehicular Ad-hoc Network (VANET) - A Review. In Proceedings of the 2022 Iraqi International Conference on Communication and Information Technologies (IICCIT), Basrah, Iraq, 7-8 September 2022; pp. 367-372. [CrossRef]
12. Ramphull, D.; Mungur, A.; Armoogum, S.; Pudaruth, S. A Review of Mobile Ad hoc NETwork (MANET) Protocols and their Applications. In Proceedings of the 2021 5th International Conference on Intelligent Computing and Control Systems (ICICCS), Madurai, India, 6-8 May 2021; pp. 204-211. [CrossRef]
13. Hui, Z.; Lingli, Z.; Yonghang, Y.; Linlin, C. A Review of Gateway Load Balancing Methods in Connecting MANET into Internet. In Proceedings of the 2022 24th International Conference on Advanced Communication Technology (ICACT), Pyeongchang, Republic of Korea, 13-16 February 2022; pp. 330-335. [CrossRef]
14. Shah, N.; El-Ocla, H.; Shah, P. Adaptive Routing Protocol in Mobile Ad-Hoc Networks Using Genetic Algorithm. IEEE Access 2022, 10, 132949-132964. [CrossRef]
15. Dash, Y. Nature Inspired Routing in Mobile Ad Hoc Network. In Proceedings of the 2021 3rd International Conference on Advances in Computing, Communication Control and Networking (ICAC3N), Greater Noida, India, 17-18 December 2021; pp. 1299-1303. [CrossRef]
16. Pandey, P.; Singh, R. An Intelligent and Adaptive Multipath Routing Scheme for Mobile Ad Hoc Network. In Proceedings of the 2023 6th International Conference on Information Systems and Computer Networks (ISCON), Mathura, India, 3-4 March 2023; pp. 1-5. [CrossRef]
17. Margaryan, R.A.; Muratchaev, S.S.; Volkov, A.S.; Afonin, I.L.; Zhuravlev, I.A. Development of an Adaptive Routing Algorithm in MANET. In Proceedings of the 2022 Conference of Russian Young Researchers in Electrical and Electronic Engineering (ElConRus), Saint Petersburg, Russia, 25-28 January 2022; pp. 57-63. [CrossRef]
18. Lansky, J.; Rahmani, A.M.; Zandavi, S.M.; Chung, V.; Yousefpoor, E.; Yousefpoor, M.S.; Khan, F.; Hosseinzadeh, M. A Q-learningbased routing scheme for smart air quality monitoring system using flying ad hoc networks. Sci. Rep. 2022, 12, 20184. [CrossRef] [PubMed]
19. Erim, O.; Wright, C. Optimized mobility models for disaster recovery using UAVs. In Proceedings of the 2017 IEEE 28th Annual International Symposium on Personal, Indoor, and Mobile Radio Communications (PIMRC), Montreal, QC, Canada, 8-13 October 2017; pp. 1-5. [CrossRef]
20. Anttonen, A.; Mämmelä, A.; Höyhtyä, M.; Saffre, F.; Karvonen, H. Self-Organizing UAV Swarm Placement via Layered Loose Coupling and User Prioritization. In Proceedings of the 2023 IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC), Toronto, ON, Canada, to be published.
21. Mason, R. Feasibility of Laser Power Transmission to a High-Altitude Unmanned Aerial Vehicle; RAND Corporation: Santa Monica, CA, USA, 2011.
22. Hildmann, H.; Eledlebi, K.; Saffre, F.; Isakovic, A.F., The Swarm Is More Than the Sum of Its Drones. In Development and Future of Internet of Drones (IoD): Insights, Trends and Road Ahead; Krishnamurthi, R., Nayyar, A., Hassanien, A.E., Eds.; Springer International Publishing: Cham, Switzerland, 2021; pp. 1-55. [CrossRef]
23. IEEE P1939.1/D5.0; IEEE Draft Standard for a Framework for Structuring Low Altitude Airspace for Unmanned Aerial Vehicle (UAV) Operations. IEEE: Piscataway, NJ, USA, 2021; pp. 1-90.
24. IEEE P1939.1/D6.0; IEEE Approved Draft Standard for a Framework for Structuring Low Altitude Airspace for Unmanned Aerial Vehicle (UAV) Operations. IEEE: Piscataway, NJ, USA, 2021; pp. 1-92.
25. Mikula, B.; Košuda, M. Aviation Regulations for Drone Operations in the Slovak Republic and the EU. In Proceedings of the 2022 New Trends in Aviation Development (NTAD), Novy Smokovec, Slovakia, 24-25 November 2022; pp. 145-150. [CrossRef]
26. Kandeel, M.E.; Salameh, H.B.; Elrefae, G.A.; Qasim, A. Regulations for UAV Operation in Social Applications and Services: A General Perspective. In Proceedings of the 2022 Ninth International Conference on Social Networks Analysis, Management and Security (SNAMS), Milan, Italy, 29 November-1 December 2022; pp. 1-6. [CrossRef]
27. Saffre, F.; Hildmann, H.; Karvonen, H.; Lind, T. Self-Swarming for Multi-Robot Systems Deployed for Situational Awareness. In New Developments and Environmental Applications of Drones: Proceedings of FinDrones; Lipping, T., Linna, P., Narra, N., Eds.; Springer: Berlin/Heidelberg, Germany, 2022; pp. 51-72.
28. Husain, Z.; Al Zaabi, A.; Hildmann, H.; Saffre, F.; Ruta, D.; Isakovic, A.F. Search and Rescue in a Maze-like Environment with Ant and Dijkstra Algorithms. Drones 2022, 6, 273. [CrossRef]
29. Gripsy, J.V.; Jayanthiladevi, A. Energy Optimization and Dynamic Adaptive Secure Routing for MANET and Sensor Network in IoT. In Proceedings of the 2023 7th International Conference on Computing Methodologies and Communication (ICCMC), Erode, India, 23-25 February 2023; pp. 1283-1290. [CrossRef]
30. Satyanarayana, P.; Bhoomika, K.; Mukesh, D.; Srujana, P.; Bai, R.M.; Sriramam, Y.S.S. Implementation of Improved Energy Balanced Routing Protocol to Enlarge Energy Efficiency in MANET for IoT Applications. In Proceedings of the 2023 9th International Conference on Advanced Computing and Communication Systems (ICACCS), Coimbatore, India, 17-18 March 2023; Volume 1, pp. 380-385. [CrossRef]
31. Lohokare, J.; Dani, R. An Intelligent cloud ecosystem for disaster response and management leveraging opportunistic IoT mesh networks. In Proceedings of the 2021 International Conference on Information and Communication Technologies for Disaster Management (ICT-DM), Hangzhou, China, 3-5 December 2021; pp. 125-133. [CrossRef]
32. Arputha Babu John, A.; Dutta, R. Cooperative trajectory planning in an intercommunicating group of UAVs for convex plume wrapping. In Proceedings of the 2017 IEEE 38th Sarnoff Symposium, Newark, NJ, USA, 18-20 September 2017; pp. 1-6. [CrossRef]
33. Kurode, E.; Vora, N.; Patil, S.; Attar, V. MANET Routing Protocols with Emphasis on Zone Routing Protocol—An Overview. In Proceedings of the 2021 IEEE Region 10 Symposium (TENSYMP), Jeju, Republic of Korea, 23-25 August 2021; pp. 1-6. [CrossRef]
34. Yang, T.; Foh, C.H.; Heliot, F.; Leow, C.Y.; Chatzimisios, P. Self-Organization Drone-Based Unmanned Aerial Vehicles (UAV) Networks. In Proceedings of the ICC 2019-2019 IEEE International Conference on Communications (ICC), Shanghai, China, 20-24 May 2019; pp. 1-6. [CrossRef]
35. Du, Z.; Wang, X.; Wang, S.; Chen, J.; Xu, K. Toward UAV Communication Network Self-Organization: A Game-Theoretic Distributed Control Approach. In Proceedings of the 2022 IEEE International Conference on Unmanned Systems (ICUS), Guangzhou, China, 28-30 October 2022; pp. 121-127. [CrossRef]
36. Horváth, D.; Gazda, J.; Šlapak, E.; Maksymyuk, T.; Dohler, M. Evolutionary Coverage Optimization for a Self-Organizing UAV-Based Wireless Communication System. IEEE Access 2021, 9, 145066-145082. [CrossRef]
37. Mämmelä, A.; Riekki, J.; Kiviranta, M. Loose Coupling: An Invisible Thread in the History of Technology. IEEE Access 2023, 11, 59456-59482. [CrossRef]
38. Yan, Z.; Jouandeau, N.; Cherif, A.A. A Survey and Analysis of Multi-Robot Coordination. Int. J. Adv. Robot. Syst. 2013, 10, 399. [CrossRef]
39. Kang, H.; Kim, H.; Kwon, Y.M. RECEN:Resilient MANET Based Centralized Multi Robot System Using Mobile Agent System. In Proceedings of the 2019 IEEE Symposium Series on Computational Intelligence (SSCI), Xiamen, China, 6-9 December 2019; pp. 1952-1958. [CrossRef]
40. Ahn, S.; Lim, Y. A modified centralized DNS approach for the dynamic MANET environment. In Proceedings of the 2009 9th International Symposium on Communications and Information Technology, Icheon, Republic of Korea, 28-30 September 2009; pp. 1506-1510. [CrossRef]
41. Sun, W.; Zhang, Z.; Chen, W.; Peng, B.; Xu, Y. Decentralized Execution of Composite Service in MANETs. In Proceedings of the 2008 IEEE Asia-Pacific Services Computing Conference, Yilan, Taiwan, 9-12 December 2008; pp. 355-360. [CrossRef]
42. Tharani, S.; Arutchelvan, G.; Arulanandam, G. Location based clustering implemented for multicast backbone MANET. In Proceedings of the 2017 International Conference on Communication and Signal Processing (ICCSP), Chennai, India, 6-8 April 2017; pp. 0728-0732. [CrossRef]
43. Liang, C.K.; Chung, C.Y.; Li, C.F. A Virtual Force Based Movement Scheme for Area Coverage in Directional Sensor Networks. In Proceedings of the 2014 Tenth International Conference on Intelligent Information Hiding and Multimedia Signal Processing, Kitakyushu, Japan, 27-29 August 2014; pp. 718-722. [CrossRef]
44. Eledlebi, K.; Ruta, D.; Hildmann, H.; Saffre, F.; Al Hammadi, Y.; Isakovic, A.F. Coverage and Energy Analysis of Mobile Sensor Nodes in Obstructed Noisy Indoor Environment: A Voronoi-Approach. IEEE Trans. Mob. Comput. 2022, 21, 2745-2760. [CrossRef]
45. Moole, S.R. Comparison of Effectiveness of Machine Learning Algorithms for Vehicle Path Prediction. In Proceedings of the 2021 IEEE Integrated STEM Education Conference (ISEC), Princeton, NJ, USA, 13 March 2021; p. 210. [CrossRef]
46. Majd, A.; Ashraf, A.; Troubitsyna, E.; Daneshtalab, M. Integrating Learning, Optimization, and Prediction for Efficient Navigation of Swarms of Drones. In Proceedings of the 2018 26th Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP), Cambridge, UK, 21-23 March 2018; pp. 101-108. [CrossRef]
47. Hamilton, T.; Ochmanek, D.A. Operating Low-Cost, Reusable Unmanned Aerial Vehicles in Contested Environments: Preliminary Evaluation of Operational Concepts; RAND Corporation: Santa Monica, CA, USA, 2020. [CrossRef]
48. Ameigeiras, P.; Wang, Y.; Navarro-Ortiz, J.; Mogensen, P.E.; Lopez-Soler, J.M. Traffic models impact on OFDMA scheduling design. EURASIP J. Wirel. Commun. Netw. 2012, 2012, 61. [CrossRef]
49. Pinell, C.; Prol, F.S.; Bhuiyan, M.Z.H.; Praks, J. Receiver architectures for positioning with low earth orbit satellite signals: A survey. EURASIP J. Adv. Signal Process. 2023, 2023, 60. [CrossRef]
50. Kassas, Z.M.; Kozhaya, S.; Kanj, H.; Saroufim, J.; Hayek, S.W.; Neinavaie, M.; Khairallah, N.; Khalife, J. Navigation with Multi-Constellation LEO Satellite Signals of Opportunity: Starlink, OneWeb, Orbcomm, and Iridium. In Proceedings of the 2023 IEEE/ION Position, Location and Navigation Symposium (PLANS), Monterey, CA, USA, 24-27 April 2023; pp. 338-343. [CrossRef]

Disclaimer/Publisher's Note: The statements, opinions and data contained in all publications are solely those of the individual author(s) and contributor(s) and not of MDPI and/or the editor(s). MDPI and/or the editor(s) disclaim responsibility for any injury to people or property resulting from any ideas, methods, instructions or products referred to in the content.

