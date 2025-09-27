# 使用 Hypatia 探索“太空互联网”

## Exploring the "Internet from space" with Hypatia 

Simon Kassing, Debopam Bhattacherjee, André Baptista Águas, Jens Eirik Saethre, Ankit Singla

苏黎世联邦理工学院（ETH Zürich）

#### 摘要

SpaceX、Amazon 等公司计划在低地球轨道（Low Earth Orbit, LEO）部署数千颗卫星，以提供全球低时延的宽带互联网。SpaceX 的计划发展迅速，其在建卫星星座已经是历史上规模最大的，并有可能在 2020 年开始提供服务。

这些拟建的星座蕴含巨大前景，但也为网络带来了新的挑战。为推动这一令人兴奋的领域的研究，我们提出了 **Hypatia**，一个通过纳入其独特特性（如高速轨道运动）来模拟和可视化这些星座网络行为的框架。

利用公开的即将建设的网络设计细节驱动我们的仿真器，我们刻画了这些网络的预期行为，包括随时间变化的时延和链路利用率波动，以及这些变化对拥塞控制和路由的影响。

### CCS 概念

- 网络 $\rightarrow$ 网络仿真；网络性能分析；网络动态性；拓扑分析与生成；分组交换网络。

### 关键词

低地球轨道卫星（Low Earth Orbit, LEO）、互联网宽带星座、LEO 网络仿真、LEO 网络可视化

## 1 引言

互联网正在迈出“巨大的一步”走向太空，大规模卫星星座的计划正在展开，旨在用低时延宽带互联网覆盖全球。包括 SpaceX [70]、Amazon [8] 和 Telesat [74] 在内的多个竞争者都披露了类似的努力。SpaceX 的 Starlink 星座已有 $400+$ 颗卫星在轨，且发射频率不断加快，承诺在 2020 年已经能够提供有限的互联网服务 [23]。因此，这些雄心勃勃的“太空互联网”计划引发了公众的广泛关注 [ $10,28,55,62,75$ ]。

尽管使用卫星进行互联网连接的历史与互联网本身一样久远 ${ }^{1}$，但在建的星座与以往努力有着根本不同。这些区别根源于近期支撑性技术的进步以及不同的目标，并在设计上有着深刻体现。与现有的卫星网络 [35-37] 不同，这些新网络不仅针对传统的利基市场，如航运、卫星电话和农村地区有限连接，还瞄准了大众市场宽带，不仅解决全球覆盖问题，还在许多市场中与现有的地面网络竞争。

> ${ }^{1}$ 早期的卫星网络 SATNET 构成了互联网的初始组成部分，并且实际上为 Cerf-Kahn 在互联网协议（Internet Protocol）上的奠基性工作提供了关键动机：将 ARPANET、PRNET 和 SATNET 等截然不同的网络互联 [1]。

这一目标的首要设计体现就是规模：为了为更大规模的目标用户群体提供足够的接入带宽，新系统需要比以往更多的卫星。Starlink 已经凭借数百颗卫星成为历史上规模最大的星座，但最终计划中的最大星座将各自由数千颗卫星组成 [8,70]。这一点的实现得益于航天技术的有利趋势，主要是卫星的小型化和发射成本的降低。

在传统利基市场之外竞争的目标带来了另一个重要的设计结果：在低地球轨道（LEO，最高 $2,000 \mathrm{~km}$ 高度）运行。这对时延至关重要，使之可与地面网络相当，而不是地球同步轨道（GEO）卫星带来的数百毫秒。LEO 运行反过来又强化了大规模的必要性：从 GEO，每颗卫星可以覆盖广阔的地面区域，但将卫星拉近地球则必然缩小了每颗卫星的覆盖范围。

大型 LEO 星座承诺以低时延和高带宽实现全球覆盖。然而，要充分发挥这些网络的潜力，需要解决由其独特动态性带来的新的研究挑战。在这样的星座中，每颗卫星大约每 $\sim 100$ 分钟环绕地球一周，以 $\sim 27,000 \mathrm{kmph}$ 的速度运行。这种高速运动不仅造成地面到卫星链路的高度更替，还导致端到端路径结构的波动，因为路径上的卫星本身也在移动。

在 HotNets 2018 上，三篇立场论文 [5, 29, 44] 突出强调了 LEO 网络中可能出现的一些网络挑战，例如端到端拥塞控制 [5] 和星座内路由 [29]。然而，在明确提出这些挑战并加以解决方面，研究进展面临重大障碍：缺乏能够纳入 LEO 网络动态行为的网络分析工具。这带来一个重大风险：研究无法为行业的未来发展路径提供指导，反而会落后于行业的快速推进。因此，为加速 LEO 网络研究，我们开发了 **Hypatia** ${ }^{2}$，一个包含仿真和可视化模块的分析框架。Hypatia 提供了一个基于 ns-3 的分组级 LEO 网络仿真器，以及基于 Cesium [13] 的多种网络可视化，用于提供对这类网络的直观理解。

> ${ }^{2}$ 该名称是向天文学和数学早期的女性领袖 Hypatia 致敬，她以评论者和教师的身份更为人知，而非因新的发明，这与本文的精神相契合。

我们利用 Hypatia 分析了三个最大的拟建 LEO 网络：Starlink、Kuiper 和 Telesat。我们的分析使用了这些公司向美国联邦通信委员会（FCC）和国际电信联盟（ITU）等管理机构提交的监管信息。这些文件 [47-49, 68, 69, 72] 披露了描述星座结构的轨道参数。我们的仿真揭示了 LEO 动态对变化的路径往返时延（RTT）和分组重排序的影响，以及端到端路径带宽的波动。我们讨论了这些现象对拥塞控制和路由的影响。

总之，我们的贡献包括：

- 我们阐述了为即将出现的 LEO 网络构建网络分析工具的必要性。作为满足这一需求的第一步，我们开发了 Hypatia，一个捕捉 LEO 网络轨道动态的分析框架。
- 我们利用三大计划中的 LEO 网络的监管文件来评估并可视化其网络。
- 借助分组级仿真，我们分析了这些网络中单个端到端连接的行为，包括其时延和路径结构的变化，并展示了即使在没有竞争流量的情况下，这些变化也会对拥塞控制产生负面影响。
- 进一步地，通过星座范围内的流量仿真，我们展示了路径结构的变化导致路由和流量工程的难题，因为路径和链路利用率高度动态化。
- Hypatia 的可视化帮助直观理解卫星轨迹结构及其对星座行为的影响，并定位网络中的流量热点及其随时间的演化。

卫星网络在奠定互联网基础方面曾发挥过重要作用，而如今可能再次成为推动重大而令人兴奋变革的动力。我们希望 Hypatia 能够成为这一工作的助推器。Hypatia 的源代码可在网上获取 [40]，并附带我们的可视化成果 [7]。

## 2 背景与相关工作

由于 LEO 巨型星座是一个新兴问题领域，我们在此提供相关背景以帮助读者理解。

### 2.1 什么构成了一个 LEO 卫星网络？

一个大型 LEO 星座可能包含数百到数千颗卫星。这些卫星被组织在若干条轨道上。一条轨道由以下参数描述：(a) 轨道倾角 $i$，即其轨道平面与赤道向北方向之间的夹角；(b) 高度 $h<2,000 \mathrm{~km}$。在同一轨道上的卫星均匀分布。具有相同 $i$ 和 $h$ 并在赤道处均匀分隔的多条轨道构成一个轨道层（orbital shell）。(通常，一个层中的轨道会在 $h$ 附近略微变化以避免碰撞——这些细微差异对网络而言基本无关紧要。) 大型星座可能部署一个或多个这样的层。此描述只覆盖了 LEO 星座的一个子类，但所有近期提出的星座都符合该子类。

每颗卫星通过无线上下行链路与地面站（Ground Stations, GSes）通信，如图 1 所示。卫星只能与在天空中以足够高仰角可见的 GS 相连，这由最小仰角 $l$ 定义。卫星位于 GS 正上方时的仰角为 $90^{\circ}$，在地平线时为 $0^{\circ}$。如果最小仰角 $l=40^{\circ}$，则只有看到卫星仰角在 $40^{\circ}$ 或更高的 GS 才能与之通信。因此，更小的 $l$ 值允许 GS 与更接近地平线的卫星通信，而更大的 $l$ 值限制性更强。然而，较小的 $l$ 值也有缺点：较低仰角的连接由于波束扩展和衰减增加，会导致天线增益和信号质量下降。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-02.jpg?height=269&width=849&top_left_y=298&top_left_x=1095)  
图 1：每颗卫星覆盖一个由最小仰角 $l$ 定义的锥形区域。卫星使用不同频段（如 fb1、fb2）的可控波束与不同 GS 相连。

根据 Kuiper 向 FCC 提交的文件 [46]，每颗卫星将拥有多个天线，每个天线支持多个可控波束；波束控制与频段分配将由软件定义，以最大化吞吐量。每个 GS 是否能同时连接多颗卫星取决于 GS 类型：用户终端使用单个相控阵天线，而企业用户或网关终端则使用多个抛物面天线，灵活性更高 [46]。

卫星之间还通过激光星间链路（Inter-Satellite Links, ISLs）互联。两个 GS 之间的端到端路径包括源 GS 到入口卫星的无线上行链路，零个或多个激光 ISL，然后是出口卫星到目标 GS 的无线下行链路。

### 2.2 最大的拟建星座

为上述抽象描述增加具体数据，我们介绍三个最大拟建星座的设计参数。

**SpaceX Starlink**：表 1 展示了 Starlink 第一阶段的部署，计划在 5 个轨道层中布设 4,409 颗卫星 [66-69]。目前 SpaceX 正在部署 S1，包含 1,584 颗卫星（72 条轨道，每条轨道 22 颗卫星），$h=550 \mathrm{~km}$，$i=53^{\circ}$。最小仰角 $l=25^{\circ}$。S1 将覆盖世界大部分人口，但不会扩展到高纬度人口稀少的区域。该覆盖问题将由更高倾角的 S3–S5 层解决。SpaceX 的官方计划是部署超过 42,000 颗卫星，但其中多少是为了争取频谱尚不明朗 [34]。

**Amazon Kuiper**：Kuiper 计划部署三个轨道层，总计 3,236 颗卫星，运行高度略有不同 [47-49]。Kuiper 完全放弃了极地附近的连接，其所有轨道层的倾角都低于 $52^{\circ}$。FCC 文件提到几种可能的 $l$ 值：“ $20(\min ) / 30 / 35 / 45$ ” [47]。

**Telesat**：Telesat 计划部署两个轨道层，总计 1,671 颗卫星 [73]，其中约五分之一用于覆盖高纬度地区（倾角 $98.98^{\circ}$），其余则专注于提高低纬度的容量。Telesat 计划采用 $l=10^{\circ}$，但其可行性不明——与 Starlink 和 Kuiper 不同，后者提交的文件详细说明了如何解决 $l \geq 25^{\circ}$ 时的波束扩展和天线增益变化问题，而 Telesat 的文件迄今未提供相关信息。

|  | 层 | $h(\mathrm{~km})$ | 轨道数 | 每轨道卫星数 | $i$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Starlink | S1 | 550 | 72 | 22 | $53^{\circ}$ |
|  | S2 | 1,110 | 32 | 50 | $53.8^{\circ}$ |
|  | S3 | 1,130 | 8 | 50 | $74^{\circ}$ |
|  | S4 | 1,275 | 5 | 75 | $81^{\circ}$ |
|  | S5 | 1,325 | 6 | 75 | $70^{\circ}$ |
| Kuiper | K1 | 630 | 34 | 34 | $51.9^{\circ}$ |
|  | K2 | 610 | 36 | 36 | $42^{\circ}$ |
|  | K3 | 590 | 28 | 28 | $33^{\circ}$ |
| Telesat | T1 | 1,015 | 27 | 13 | $98.98^{\circ}$ |
|  | T2 | 1,325 | 40 | 33 | $50.88^{\circ}$ |

表 1：Starlink 第一阶段、Kuiper 和 Telesat 的轨道层配置。本文中我们将频繁提及各星座的第一轨道层，即 S1、K1 和 T1。



### 2.3 LEO 网络的独特动态性

卫星的高度 $h$ 决定了其轨道速度和轨道周期 [56]。在 $h=550 \mathrm{~km}$ 时，轨道速度超过 $27,000 \mathrm{~km} / \mathrm{hr}$，卫星在约 $\sim 100$ 分钟内完成绕地球一周 [6]。由于卫星快速掠过地面站（Ground Stations, GSes），GS-卫星链路只能维持几分钟，此后需要切换。星间链路（Inter-Satellite Links, ISLs）的长度也在不断变化。地球的形状和轨道几何结构导致高纬度地区的卫星相互更接近。这带来相对位置的持续变化，从而引起 ISL 的长度和时延的变化。

因此，两座 GS 之间的端到端路径不仅在参与的卫星上会发生变化，而且在 GS-卫星链路和 ISL 的长度上也会变化。

移动性在许多环境下都有深入研究，包括蜂窝网络、高速列车、无人机与飞机，以及移动节点群体。在这些场景中，已有相应的移动模型及仿真和分析工具。然而，LEO 卫星的移动性在多个方面是独特的：

- LEO 移动性涉及的距离和速度远大于地面移动网络。
- 与大多数其他场景不同，LEO 网络的核心基础设施本身就是移动的，而不仅仅是终端。
- LEO 移动性是可预测的，而这在蜂窝网络这一最被广泛研究的场景中并不存在。
- LEO 网络包含数千个网络交换节点（即卫星），能够提供 Tbps 级别的连接。这样的规模远超其他网络化的移动群体。

以往被深入研究的场景可能具备上述一个或两个特征，但不会全部兼具。例如，列车以及一定程度上的飞机，也具备可预测的运动特性，但不具备其他特征。

---

### 2.4 大型 LEO 网络需要新的研究

商用卫星网络已经提供了多种网络服务。HughesNet [35] 和 Viasat [76] 主要服务于缺乏地面光纤覆盖的区域，以及飞机和船舶。这两者都是地球同步轨道（Geostationary Orbit, GEO）卫星星座，运行高度为 $35,786 \mathrm{~km}$，其时延高达数百毫秒。此外，由于性能和服务目标不同，GEO 卫星相对于地球是静止的，因此不具备 LEO 的动态特性。Iridium [36, 37] 运行于 LEO，但主要提供卫星电话而非宽带互联网。Iridium 拥有 82 颗在轨卫星，是在新兴 LEO 巨型星座出现之前规模最大的网络。

因此，先前的网络都不具备新型 LEO 网络的全部特征。新的大型 LEO 网络计划运行数千颗卫星，而不是几十颗，并提供大众市场的低时延宽带互联网，而非利基服务。其中一个即将投入使用的星座——Starlink，已经有超过 400 颗卫星在轨，并预计将在 2020 年尽快面向公众提供服务 [16, 23]。从长期来看，这类网络有可能从根本上改变互联网，因此研究必须跟上产业的快速发展。

网络研究界已经意识到这一需求，并正在加紧开展相关研究。尽管在 1990 年代已有大量关于 GEO 和小型 LEO 网络的研究成果 [2, 4, $14,15,18,24,43,50,53,71,78-80,82]$，但多篇立场论文 [5, 29, 44] 强调了巨型星座带来的新机遇和挑战，例如星座内路由 [29]、域间路由 [44] 以及端到端拥塞控制 [5]。后续研究也提出了关于拓扑设计 [6] 和互联网域间路由 [26] 的新颖方案。

---

### 2.5 我们缺乏合适的分析工具

不幸的是，网络研究界缺少能够应对 LEO 网络挑战的合适工具。我们需要能够模拟此类网络行为的软件，以便深入理解问题并评估新的研究想法。理解网络的分组级行为显然对拥塞控制研究至关重要，但最终，研究人员也希望能够在路由和拓扑研究中评估其对网络分组的影响，例如：某些路由方案是否会导致更多的分组重排序，进而导致性能下降？

遗憾的是，目前没有仿真器能够完全满足这些需求。SNS3 [65] 建模了 GEO 卫星通信信道，但不支持 LEO 卫星或星间互联。另一项仿真工作 [33] 专注于 1990 年代的极区星座及其相关问题，例如由于卫星在不同经度半球中分别向北和向南运行而导致的“接缝”处的连通性。虽然我们本可以在此基础上扩展来研究现代 LEO 网络，但我们选择基于 ns-3 平台构建 Hypatia，以利用其更活跃的开发和支持。需要注意的是，先前的工作也没有分析拥塞控制和流量工程，更没有提供除 SaVi 工具 [81] 之外的可视化。ns-3 [61] 提供了一个卫星移动性模型，可以将特定格式的卫星轨迹转换为与 ns-3 兼容的坐标系统。这一功能很有用，我们在此基础上增加了星间和 GS-卫星连接的建模。近期关于 LEO 星间拓扑的研究 [6] 仅从路径跳数和距离的角度评估拓扑，而不是基于分组的仿真。同样，关于域间路由的研究 [26] 仅建模了网络控制报文和路径距离。另一项研究 [21] 使用统计方法估算新 LEO 网络的吞吐量，并最小化支撑该吞吐量所需的 GS 数量。但它并未考虑网络路由和传输动态。

此外，我们还需要可视化工具来建立对这些新网络所缺失的直观理解。虽然已有许多精美的可视化成果，至少对 Starlink 而言 [12, 22, 30, 32]，但大多数并不关注网络概念，如路径演化、利用率和拥塞。与此最接近的相关工作 [29, 30] 并未仿真分组级行为，也未提供其路径级计算或可视化的源代码。NASA 的 GMAT [57] 可用于可视化太空中物体的轨迹；SaVi [81] 还可以渲染卫星的覆盖范围。然而，这两者都无法定义拓扑、建模网络链路或运行面向网络的测量。

虽然我们预计社区最终会收集到来自真实 LEO 网络客户端的测量数据，但这并不能取代对仿真和分析工具的需求。在各种网络场景中，这类工具依然对于理解现象和设计新颖但难以在实际中评估的技术具有重要价值。


## 3 HYPATIA 架构

为了解决迫切需要能够支持 LEO 网络研究的工具这一问题，我们开发了 **Hypatia**。Hypatia 提供了一个纳入 LEO 动态性的分组级仿真器，以及一个帮助建立直观理解的可视化模块。分组仿真器作为 ns-3 [60] 的一个模块实现。它考虑了卫星轨迹、GS-卫星（Ground Station-Satellite）连接的覆盖约束，以及星间连接的结构。它可用于实现和评估关于卫星轨迹设计、星间拓扑、路由和拥塞控制的新想法。可视化组件使用 Cesium [13] 渲染轨迹视图、从 GS 视角看到的上空卫星、端到端路径、链路利用率的变化，以及路径上的可用带宽。

### 3.1 搭建一个仿真的 LEO 网络

在最简单的情况下，Hypatia 允许用户指定卫星轨迹参数和地面站位置。由此，它会自动生成每颗卫星的随时间变化状态（采用航天工业标准数据格式）、GS-卫星和 ISL（Inter-Satellite Link, 星间链路）连通性，以及决定分组路径的随时间变化的转发状态。我们将在后文讨论用户在更复杂的仿真中需要修改的部分。

**TLE 生成**：双行根数（Two-Line Element, TLE）是一种表示地球轨道物体轨迹的标准格式 [41]。对于现有的卫星和轨道碎片，NORAD [59] 定期发布 TLE [42]。这些 TLE 是我们所依赖的卫星移动性模型的输入。这种安排迄今足以满足 ns-3 在该场景下的有限用途：研究与一颗现有卫星的连通性。

然而，这意味着对于尚未在轨但我们已知其开普勒轨道要素（Keplerian orbital elements）[54] 的卫星，我们需要自己生成 TLE。这些要素来自运营商向 FCC 或 ITU 提交的文件。表 1 展示了我们从这些文件中获得的数值。我们仅在表中包含了参数的简化子集；其余部分可由对称性推导，例如仅使用圆形轨道 [47, 68]、同一轨道上的卫星均匀分布、轨道在赤道上均匀间隔。

我们构建了一个工具，可以接受开普勒轨道要素作为输入，并输出符合 WGS72 世界大地测量系统标准的 TLE [25]。为了验证生成的 TLE 与输入的开普勒要素描述的是同一星座，我们使用 Python 库 **pyephem** 来分别从开普勒要素和 TLE 生成星座进行比对。

**ISL 连通性**：Hypatia 实现了一种我们认为合理的星间连通模式，但修改为其他任意的互联模式也很容易。我们的默认实现借鉴了过去的卫星网络文献以及新星座在监管文件中的信息。

拟建的巨型星座暗示每颗卫星将配置 4 条 ISL。例如，Starlink 的文件 [68] 提到 4 个碳化硅组件，而正如近期研究 [6, 29] 所指出的，这些通常用于 ISL。因此，在默认实现中，我们采用每颗卫星 4 条 ISL。

此外，大量卫星网络研究表明，一颗拥有 4 条 ISL 的卫星通常采用的连通模式是：两条链路连接轨道上的相邻卫星，另外两条链路连接相邻轨道上的卫星，形成类网格网络 [20, 21, 29, 30, 45, 51, 52, 63, 64, 77]。近期工作 [6] 将这种类网格连通称为 **+Grid**。我们采用 +Grid 作为默认 ISL 互联模式。

Hypatia 还支持完全不配置 ISL 的星座 [31]；相关实验展示见附录 A。此外，Hypatia 也可轻松支持其他 ISL 互联模式，只要不涉及动态 ISL，即卫星随时间与不同卫星建立连接。这在大多数情况下是现实的假设：ISL 建立时间可能长达数十秒，因此避免动态重配置 [6]。尽管如此，如需实现这种动态连通，仍需要修改 Hypatia。

**GS-卫星连通性**：我们目前仅模拟配置多个抛物面天线的静态 GS，而不是配置单个相控阵天线并可能移动的用户终端 [38]。不过，Hypatia 可以轻松扩展以建模此类终端。Hypatia 从 ns-3 继承了对 GS-卫星信道施加复杂模型（如丢包）的能力。然而，Hypatia 在当前实现中对 GS-卫星链路做了若干简化假设：

- Hypatia 支持每颗卫星和 GS 配置多个 GSL（Ground-Satellite Link, 地面-卫星链路）网络设备。在实验的默认设置中，我们为卫星和地面站各设置一个 GSL 网络设备。只要转发计划允许，每个网络设备可以向任何其他 GSL 网络设备发送分组。也可以施加额外的连通性限制，例如限制用户终端只能同时连接一颗卫星。
- 卫星和地面站之间的所有连接不会互相干扰。虽然这是一个强假设，但 Starlink 和 Kuiper 的文件 [47, 68] 提到，频率管理将由软件定义并实时执行，以实现这一目标。
- 每个 GS 可配置为：(a) 连接多颗卫星；或 (b) 仅连接最近的卫星。
- 由于其他移动场景中已有多种无丢包切换技术，当 GS-卫星连接进行切换时，不会发生丢包。Hypatia 会传递已在途的分组，新分组则不会再到达失联的卫星。

我们之所以做出这些有利于 LEO 网络的简化，有两个原因：(a) 该框架足以揭示许多挑战；(b) 其他处理方式需要大量设计工作，不在我们研究范围内，例如该场景的频率管理未来可能会被深入研究，而 Hypatia 可作为载体。

**转发状态**：我们以可配置的时间粒度计算卫星和地面站的转发状态，默认值为 100 ms。需要注意的是，这一步将卫星运动的连续过程转换为离散时间间隔，在这些间隔中检查和更新转发状态。在间隔之间，时延会根据卫星运动被正确计算，但所用路径可能偏离最短路径。我们在 §5.3 实验中讨论了其影响。

在每个时间间隔，我们使用 **networkx** [58] 模块生成网络图，考虑卫星位置及卫星与地面站之间的链路长度。在该图上，可基于任意路由策略计算每个节点的转发状态。我们当前实现采用 Floyd-Warshall 算法计算最短路径路由。转发状态的变化也被加入 ns-3 的离散事件队列：当事件首次触发时，它会将新的转发状态读入静态路由表，然后在精确配置的时间间隔添加下一个转发状态更新事件。任何可通过静态路由实现的路由策略都能轻松支持。这同样适用于多路径路由，但显然需要额外逻辑来分流流量。

---

### 3.2 运行分组级仿真

分组级仿真器可用于运行 LEO 卫星网络仿真，支持任意的卫星轨迹、GS 位置、路由、拥塞控制和排队。虽然生成的卫星 TLE 以及路由和转发状态是预先计算并输入仿真器的，但仿真器负责模拟卫星的运动，从而反映随时间变化的链路时延。为此，我们改造了一个现有的 ns-3 卫星移动性模型 [61]。虽然该模型每天会为卫星轨迹引入 1–3 km 的误差，但对于仿真时间少于数小时的场景，这些距离的网络影响可以忽略。

---

### 3.3 后处理与可视化

Hypatia 的 ns-3 模块可以模拟 UDP 和 TCP 流量，并记录每种传输协议的相关指标，包括 RTT、拥塞窗口和应用层流的随时间进展。我们使用 **gnuplot** 生成本文中的所有图表，并使用 **Cesium** 进行可视化。Cesium 是一个通用的 Javascript 三维地图库。我们扩展它来渲染以下交互式可视化，利用 Python 代码处理仿真输出并生成 Cesium 渲染的可视化元素：

- 卫星随时间变化的轨迹；
- 地面观察者随时间变化的视图，显示在不同仰角可见的卫星；
- 端到端路径随时间的变化；
- 端到端路径上链路利用率和可用带宽随时间的变化。

---

### 3.4 仿真器的可扩展性

我们简要评估了 Hypatia 在合理时间内运行仿真的规模。我们以 Kuiper 的 K1 层为 LEO 网络，并选取全球人口最多的 100 座城市作为 GS。流量在 GS 之间随机匹配。我们同时测试 TCP 和 UDP 流量。对于 TCP，每对 GS 互相发送一个长时间运行的 TCP 流，我们计算网络范围的有效吞吐量（goodput），即所有已确认数据的总速率，仅计入分组载荷，排除报头。对于 UDP，每对 GS 互相以线路速率发送恒定速率的节奏 UDP 流量，有效吞吐量计算为网络范围的载荷到达总速率。对两种流量类型，为控制仿真流量速率，我们改变每条链路的线路速率（假设均匀），测试了 $1,10,25,100,250 \mathrm{Mbit} / \mathrm{s}$，以及 1 和 $10 \mathrm{Gbit} / \mathrm{s}$。仿真运行在一颗 2.26 Ghz Intel Xeon L5520 的单核上。

我们量化了“减速比”：如果 Hypatia 用 $b$ 秒真实时间模拟 $a$ 秒虚拟时间，则减速比为 $\frac{b}{a}$。结果如图 2 所示，可以直接回答实验者的问题：如果我想在 $C$ Gbit/s 的有效吞吐量下运行系统，并获取 $a$ 秒虚拟时间的数据，需要多长时间？如果在横轴 $x=C$ 时，减速比为 $y$，那么答案就是 $y \cdot a$ 秒。结果显示，例如要仿真 $\sim 10 \mathrm{Gbps}$ 网络有效吞吐量的 10 秒虚拟时间，Hypatia 对 UDP 流量需要 $\sim 33$ 分钟，而对 TCP 流量则需要 $\sim 100$ 分钟。有效吞吐量本身决定了减速比 $\frac{b}{a}$，这意味着一个简单的权衡：在固定的真实时间预算 $b$ 下，可以选择以高吞吐率仿真较短的虚拟时间，或以低吞吐率仿真较长的虚拟时间。对于相同的实验配置（星座和流量矩阵），通过设置链路线路速率即可控制有效吞吐量（在一定范围内；随着利用率上升，尽管负载增加，有效吞吐量会趋于平稳）。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-05.jpg?height=462&width=701&top_left_y=284&top_left_x=1151)  
图 2：可扩展性。运行实验获得 9.2 Gbit/s 的 TCP 网络范围有效吞吐量 1 秒，耗时约 555 秒。UDP 仿真更快，13.8 Gbit/s 的有效吞吐量耗时约 269 秒。

仿真瓶颈在于逐分组事件处理。由于卫星网络路径通常包含大量跳数，每个端到端分组传输会触发比数据中心网络仿真更多的事件。卫星网络的规模对仿真影响不大，至少在数万颗卫星范围内如此；仿真初始化开销随网络规模增加，但仅在开始时发生，而分组事件主导了仿真所需的真实时间。

我们发现加速仿真的机会有限。除 ns-3 的逐分组处理时间外，Hypatia 仅为通过移动性模型计算逐分组时延增加了极少的开销。转发表是预先计算的，MAC 表预填充以避免 ARP 活动。我们正在探索 ns-3 的分布式模式能在多大程度上提供加速，但对于多种使用场景而言，Hypatia 当前的仿真速度已足够，如我们后续分析所示。


## 4 分析若干 LEO 路径

我们首先深入分析若干 GS 对之间的连通性，以便了解端到端连接的表现。

### 4.1 RTT 波动

我们考察端到端 RTT（往返时延）随时间的变化。这些实验使用 Kuiper 的 K1 层。我们运行 200 秒的分析，对于 Kuiper 规模的网络而言，这足以展示几乎完整的波动范围。

对于每个源-宿对 $s-d$，源 $s$ 每 1 ms 向 $d$ 发送一次 ping，并记录响应时间。我们还将这些测得的 RTT 与使用 networkx 对相同端点、相同星座进行计算得到的 RTT 进行比较。对于这些 networkx 计算，我们每 100 ms 获取一次系统快照，并用 Floyd-Warshall 算法计算最短路径。基于这种计算的分析已在近期研究中出现 [5, 29]；我们将其用于验证仿真器的部分卫星特定代码，以及强调并解释实际分组与快照计算路径之间的微妙差异。

图 3 展示了三个 $s-d$ 对的结果。来自 Hypatia 的 ping 测量结果（“Pings”）与 networkx 的快照计算结果（“Computed”）在大多数时间内高度吻合。例如，在图 3(a) 中 $t=32.9 \mathrm{~s}$ 时，路径发生变化，导致 RTT 从 96 ms 升至 111 ms。偶尔，如图 3(c) 在 130 秒附近，我们观察到 ping RTT 的尖峰，相比 networkx 更高。这些尖峰来自路径上的转发状态变化：分组从源出发时沿当时的最短路径传输，但到达某颗卫星时，该卫星已不在新的最短路径上，因为卫星已移动。结果是分组相较于 networkx 的瞬时路径计算，实际上走了“绕路”。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-06.jpg?height=386&width=1711&top_left_y=306&top_left_x=200)  
图 3：RTT 波动。networkx 计算结果与我们仿真器中通过 ping 测得的 RTT 高度一致，如图所示三条路径的曲线几乎完全重叠。图中还显示了 TCP 分组级 RTT，测量时除了源-宿对外无其他流量。队列大小为 100 个分组，即 10 Mbps、100 ms 时约为一个带宽-时延积（BDP）。注意：最后几个 ping 的 RTT 显示为 0，是因为尚未返回，无法给出有效测量值。

从里约热内卢到圣彼得堡的路径在仿真约 150 秒时出现中断，图中阴影区域即对应该现象。我们发现，在这段时间内，圣彼得堡看不到仰角足够高的 Kuiper 卫星，这显然导致卫星网络路径断开。对于 Kuiper，它的另外两层也无法解决这一连通性缺失；高纬度城市如圣彼得堡在 Kuiper 网络下不会有连续连通性。

对于其他两条路径，RTT 随时间也存在较小但仍显著的波动。马尼拉-大连路径的 RTT 最小为 25 ms，最大为 48 ms，变化幅度接近 $2 \times$。伊斯坦布尔-内罗毕路径的 RTT 范围是 $47-70 \mathrm{~ms}$。

对于关注抖动（jitter）的实时应用，这些波动可能需要较大的“抖动缓冲区”，以便存储分组并均匀地传递给应用。在这种情况下，决定性时延将是端到端连接的最大时延。

**对应用的启示**：端到端 RTT 的最大值可能远高于最小值，并决定了对抖动敏感应用的时延表现。

---

### 4.2 拥塞控制（在无拥塞条件下）

我们还探究了在变化的卫星路径上，拥塞控制如何工作。为此，我们首先使用一个无拥塞环境：测量的端到端连接是唯一的流量源，网络中其余部分完全空闲。

图 3 同时展示了 TCP（NewReno）分组的分组级 RTT。该 RTT 计算为分组发送与接收到 ACK 的时间差。如预期，TCP 不断填满并排空缓冲区，从而增加 RTT。为了加快仿真，实验中链路速率设为 10 Mbps。缓冲区大小为 100 个分组，即 100 ms 下 1 个 BDP。速率更高时，我们预计会有相同趋势，但由于队列排空更快，RTT 增幅会更小。

图 4 展示了三条连接在相同时段下的 TCP 拥塞窗口演化。图中还显示了瞬时 BDP 与队列容量之和（即 $\mathrm{BDP}+\mathrm{Q}$），这是在假设存在一个瓶颈时无丢包情况下最大可在途分组数。ISL 与 GSL 的网络设备队列大小 $Q$ 均设为 100 个分组。在 $\mathrm{BDP}+\mathrm{Q}$ 稳定的时段，TCP 如预期般反复触顶、触发丢包、降低速率、再度提升。但 RTT 的变化，以及随之而来的 $\mathrm{BDP}+\mathrm{Q}$ 变化，导致 TCP 行为随之改变。圣彼得堡路径的中断在图 4(a) 中清晰可见。此外，其他连接也出现拥塞窗口下降，例如图 4(c) 中 140 秒附近，TCP 因分组重排序而降低窗口。当时路径缩短了约 $\sim 16 \mathrm{~ms}$，后续分组通过新更短的路径传输，并更早到达目的地。结果，重复 ACK 被发送端误判为丢包。图 3(a) 和图 5(a) 右端的 TCP RTT 振荡来自延迟确认。我们验证过，关闭延迟 ACK 可以消除这些振荡，但不会改变我们关注的其他现象。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-07.jpg?height=391&width=1717&top_left_y=306&top_left_x=200)  
图 4：TCP 拥塞窗口演化。如预期，拥塞窗口通常在 BDP 与 BDP+队列大小（100 分组）之间波动。但在某些情况下，当 RTT 降低时，出现重排序，即使无丢包，拥塞窗口仍被减半。

TCP 填满缓冲并导致分组级时延恶化，是一个广为人知的问题 [3, 11, 27]。对于承诺低时延运行的 LEO 网络而言，这可能更不可接受。因此，我们还测试了基于时延的传输，通过重复相同实验但改用 TCP Vegas。需要注意的是，这些算法不是相互竞争的，而是各自单独测试，即没有竞争流量——Vegas 与 Reno 或 Cubic 相比“不够激进”的问题在此无关紧要。任何能在 ns-3 中实现的传输协议都可以在 Hypatia 中评估。

图 5 展示了 Rio de Janeiro 到 St. Petersburg 路径下 NewReno 与 Vegas 的表现。在 200 秒的仿真中，图 5(a) 展示了分组级 RTT，图 5(b) 展示了拥塞窗口，图 5(c) 展示了以 100 ms 为间隔的平均吞吐量。如预期，Vegas 常常在接近空缓冲状态下运行，例如在约 140 秒前，与图 3(a) 的 ping RTT 高度一致。不幸的是，Vegas 在 $\sim 33 \mathrm{~s}$ 时将 RTT 增加误判为拥塞，剧烈缩小了拥塞窗口（图 5(b)），并在此之后吞吐量极差（图 5(c)）。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-07.jpg?height=391&width=1717&top_left_y=848&top_left_x=200)  
图 5：基于丢包和基于时延的拥塞控制均遇到问题。如图所示，在 Rio de Janeiro 到 St. Petersburg 的连接上，基于丢包的拥塞控制（NewReno）填满了队列，而基于时延的拥塞控制（Vegas）则将时延增加误判为拥塞，吞吐量崩溃。这发生在 $35 \mathrm{~s}$，之后 Vegas 的吞吐量一直保持低水平。

我们之所以测试 NewReno 与 Vegas，是因为它们是两种著名的分别基于丢包和时延的拥塞检测算法，且已在 ns-3 中实现。然而，Hypatia 可用于 ns-3 中实现的任何拥塞控制算法。例如，一旦 BBR [11] 的成熟实现可用，评估其在 LEO 网络上的表现将极具意义。截至本文撰写时，虽然已有一些在线的 BBR 实现 [17, 39]，但尚未合并到 ns-3，我们未投入精力测试。

上述结果凸显了 LEO 网络中拥塞控制的挑战：丢包和时延在此场景下都不是理想的拥塞信号。丢包不仅存在其众所周知的问题（只有在缓冲区已满、时延已膨胀后才出现），还额外容易因重排序而被错误推断。而时延也并非可靠信号，因为即便无排队也会发生波动。这使得该场景下的拥塞控制成为一大难题。当然，如果发送端已知卫星路径的变化，它可以“抵消”这些影响并适应。但一般情况下，端点甚至无需知道自己是否在使用卫星路径：ISP 可将端点的流量送往最近的地面站，如近期研究 [26] 所建议。像拆分传输连接这样的解决方案也越来越难以支持，尤其是对于不允许中间人行为的传输协议（如 QUIC）。

**对拥塞控制的启示**：在 LEO 网络中，丢包和时延都可能是糟糕的拥塞信号。


## 5 星座范围的视角

我们使用 Starlink 与 Kuiper 的首次规划部署，以及 Telesat 的第一层（T1）来研究星座规模下的行为。Starlink 与 Kuiper 计划首先部署表 1 中的 S1 和 K1 层。Telesat 的部署计划更为复杂 [72]；我们仅使用其第一层 T1。我们选择世界上人口最多的 100 座城市作为 GS，并研究所有 GS 对之间的连接。

### 5.1 RTT 及其波动

我们测量了仿真期间每条连接的最小与最大 RTT。我们还计算了“测地 RTT”，即在真空中以光速 $c$ 往返连接端点所需的时间。这是理论上可达到的最小 RTT。

对于每条连接，我们计算其随时间变化的最大 RTT 与端点间测地 RTT 的比值。图 6 展示了所有连接的这一比值的 CDF。对三个星座而言，超过 $80\%$ 的连接的最大 RTT 小于测地 RTT 的两倍。考虑到地面光纤路径通常曲折，且光在光纤中的传播速度约为 $2c/3$ [9]，这意味着在我们仿真的大多数连接中，LEO 网络的时延显著低于当今互联网。相较于测地 RTT 的长尾膨胀来自端点相对较近的连接，这类连接的上下行链路开销占比较大。出于这一原因，我们在本节的图表和结果中排除了端点相距小于 500 km 的连接。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-08.jpg?height=448&width=722&top_left_y=298&top_left_x=227)  
图 6：RTT 与测地时延。对于大多数连接而言，LEO 网络上的最大 RTT（随时间变化）接近测地 RTT，尤其是 Telesat 与 Kuiper。然而，一些连接的最大 RTT 高出数倍。

其他研究 [5, 6, 29, 44] 已经对 LEO 网络的时延做出了类似观察。然而，本研究的新发现是星座之间的比较。Telesat 的卫星数量最少，不到 Kuiper 的三分之一，也不到 Starlink 的四分之一，但在大多数连接上却实现了最低时延。Starlink 的时延也高于 Kuiper。

这一结果的原因在于连通性参数和星座轨道结构。Telesat 声称其采用的最小仰角为 $10^{\circ}$，远低于 Starlink $\left(25^{\circ}\right)$ 和 Kuiper $\left(30^{\circ}\right)$。这使得 GS 在任意时刻能看到更多的 Telesat 卫星，从而有更多端到端路径选择。此外，由于这些低仰角路径更接近地平线，上下行链路的开销通常更小。

Starlink 与 Kuiper 的差异并非来自仰角（两者相近），而是来自轨道结构。两者均采用远高于 Telesat 的最小仰角，这意味着 GS 通常能看到的卫星更少，从而限制了 GS-卫星连通性，并增加了卫星-卫星连通性的影响。Kuiper 的轨道设计（34 条轨道，每条 34 颗卫星）比 Starlink（72 条轨道，每条 22 颗卫星）更均匀。特别地，Starlink 轨道内卫星间距更大，路径往往需要在多个轨道间“之字形”跳转才能到达目的地。

我们还评估了 RTT 随时间的波动程度。图 7 展示了不同连接的分布：（a）连接的最大 RTT 绝对值；（b）最大与最小 RTT 之差；（c）最大与最小 RTT 的比值。结果显示，虽然 Starlink 的时延变化最大（中位数约 $\sim 10 \mathrm{~ms}$），但其他星座在尾部也表现出显著的时延波动。Telesat 的波动最小，再次归因于其低倾角：同一卫星可用时间更长，导致时延变化更连续且幅度更小。对于 Starlink，超过 $30\%$ 的连接的最大 RTT 至少比最小 RTT 大 $20\%$。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-09.jpg?height=391&width=1714&top_left_y=306&top_left_x=200)  
图 7：RTT 及其波动。Starlink S1 每轨道卫星数（22）少于 Kuiper K1，因此 RTT 更高且波动更大。尽管卫星更少，Telesat 仍然 RTT 更低且波动更小，因为其极低的最小仰角允许更多的 GS-卫星连通选项。

我们提醒读者不要轻易得出“Telesat 设计更优”的结论，原因有二：(a) 较低的最小仰角有缺点，如 §2.1 所讨论；(b) 我们仅基于运营商的文件来评估星座，而这些文件可能因运营商对设计参数的可行性判断不同而存在乐观偏差；文件的主要目的是通过展示网络的潜在效用来为运营商争取频谱。从 Hypatia 框架的角度看，更重要的是：在给定合适输入参数的情况下，我们可以基于 RTT 与 RTT 波动等指标来比较不同设计。

---

### 5.2 路径结构演化

除了 RTT，我们还研究了底层路径的结构。对于每条连接，我们测量其路径在仿真期间变化的次数。如果连续两个时间步的转发状态显示路径中涉及的卫星不同，则计为一次路径变化。跨连接，我们计算这些路径变化的 CDF。对于每条连接，我们还计算其路径中卫星跳数的最大值与最小值。

图 8(a) 显示，在 200 秒仿真中，中位数下 Starlink 与 Kuiper 的连接发生 4 次路径变化，而 Telesat 的连接仅有 2 次。这与我们对 RTT 波动的解释一致：Telesat 使用更低的最小仰角，使其更长时间保持与同一卫星的连通，从而减少路径变化。路径变化的尾部也很长：对于 Kuiper 与 Starlink，$10\%$ 的连接路径变化次数达到 7 次及以上。

图 8(b) 展示了这些路径在跳数上的差异。对于 Telesat，路径的跳数通常不会变化。这可解释为 Telesat 的网络更稀疏：端到端路径选择更少，卫星间距更大，因此单次跳数变化的幅度已然很大。对于 Starlink，由于卫星数量更多，路径选择也更多，超过三分之一的连接路径的跳数至少比最小值多 2 跳。

图 8(c) 展示了相对变化角度的跳数数据。对于 Starlink，超过 $10\%$ 的连接的跳数变化超过 $50\%$。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-09.jpg?height=399&width=1714&top_left_y=851&top_left_x=197)  
图 8：路径结构变化。Telesat 的路径变化少于 Kuiper 与 Starlink。

与当今互联网不同，LEO 网络的路径演化迅速，尤其是更密集的网络，每分钟可能发生多次变化，且跳数和比例变化都很大。因此，LEO 网络中的路由具有高度的动态性。然而，鉴于典型变化间隔为数十秒，我们预计建立期望的路由状态本身不会成为主要瓶颈。


### 5.3 时间步更新的粒度

Hypatia 将卫星运动及其导致的路径变化这一连续过程，转换为离散过程。虽然路径上的时延会持续更新，但转发状态仅在固定时间步上重新计算。因此，我们测试了这一机制对路径变化观测结果的影响。

我们在 50、100 和 1000 ms 的不同时间步下计算网络的转发状态。对于每种配置，我们计算：(a) 在一个时间步内每秒发生的路径变化次数；(b) 与 50 ms 时间步相比，在较粗时间步下遗漏的路径变化次数。

我们仅展示 Kuiper K1 的结果，但结论具有普遍性。图 9(a) 显示了不同时步下全网路径变化次数的分布。理想情况下，100 ms 时间步的变化次数应约为 50 ms 的 $2 \times$，而 1000 ms 时间步应约为 $20 \times$。对于 100 ms 几乎总是如此，但对于 1000 ms，显著比例的路径变化完全发生在该区间内而被遗漏。图 9(b) 显示了与 50 ms 时间步相比，100 ms 与 1000 ms 时间步遗漏变化的分布。100 ms 时间步中，只有 $0.4\%$ 的端点对遗漏一次或多次变化，而 1000 ms 时间步则有 $6\%$ 的端点对遗漏一次或多次变化。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-10.jpg?height=508&width=1578&top_left_y=308&top_left_x=252)  
图 9：转发状态更新的时间粒度。(a) 与 50 ms 时间步相比，100 ms 时间步约为其 $2 \times$，而 1000 ms 时间步约为其 $20 \times$。 (b) 在 1000 ms 时间步下，一些端点对的路径变化被大幅遗漏；而在 100 ms 下遗漏变化可忽略不计。

需要注意的是，更细的时间步意味着需要为整个大型网络进行昂贵的最短路径计算。基于结果，100 ms 是一个良好的折中。此外，鉴于路径变化通常发生在数十秒内，100 ms 时间步最多仅在 $1\%$ 的时间里无法准确提供最短路径。

---

### 5.4 带宽波动

除了路径结构与时延，以及单个 TCP 连接的响应外，我们还希望理解在此类网络中流量交互的结果。为此，我们进行了一个简单实验，在 GS 对之间通过最短路径发送长时间运行的 TCP 流。

我们使用与 §4 相同的 LEO 网络，即 Kuiper 的 K1 层，每条链路的容量设为 10 Mbps，以便缩放实验。不同于仅发送 ping，我们在这些 GS 对之间发送长时间运行的 TCP NewReno 流，GS 对仍为全球人口最多的 100 座城市的随机排列。我们从随机排列矩阵中移除了在仿真期间任意时刻与里约热内卢或圣彼得堡有相同源或目的卫星的对；这样做是为了避免首跳与末跳成为瓶颈，从而将重点放在 ISL 网络的行为上。我们并不声称这是一个具有代表性的流量矩阵；它仅是将大量流量引入网络的一种方式，而结果揭示了有趣的网络行为。Hypatia 支持任意输入流量矩阵。

我们发现，尽管流量矩阵在 200 秒实验期间保持不变，且路由策略始终为最短路径路由，卫星的运动仍然使路径层面的行为高度动态化。

监控单一链路的利用率并不能很好地展示 LEO 网络的动态性——某条 ISL 会在 $\sim 100 \mathrm{~min}$ 内环绕地球，随位置变化经历不同条件。因此，我们测量每对 GS 的“未使用带宽”，即该 GS 对的端到端路径在某时刻的链路容量（本实验中为 10 Mbps）减去路径上最拥塞链路的利用率。在静态网络（固定路由与固定的长时间 TCP 流集合）中，这一未使用带宽应很小。图 10 中灰色曲线展示了静态网络下的 TCP 行为（在 $t=0$ 冻结拓扑）。

然而，我们发现，在存在交叉流量的 LEO 网络中，未使用带宽远高于静态情况。图 10 显示了 1 秒粒度下的未使用带宽，针对的是 §4 中分析的相同连接（里约热内卢到圣彼得堡）。虽然在一些短时段（如约 20 s）内路径容量被充分利用（由该连接与交叉流量共同使用），但在大量时间内存在相当的未使用容量：在 $31\%$ 的时间内，超过三分之一的容量未被使用（排除 155-165 s 不可达时段），相比之下若卫星网络保持静态，则这一比例仅为 $11\%$。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-11.jpg?height=465&width=727&top_left_y=281&top_left_x=230)  
图 10：未使用带宽。对于相同的里约热内卢至圣彼得堡连接，在存在交叉流量时，传输经常无法使用可用带宽。这是在固定的长时间 TCP 流集合与固定路由策略下的结果。灰色曲线为 $t=0$ 静态网络的情况。

造成这一差异的原因在于路径变化导致的交叉流量转移：构成某对 GS 最短路径的链路会随时间变化，而每条链路所承载的 GS 对集合也随之变化。这意味着链路上的流量组合高度动态，使得传输难以适应——毕竟，类似 TCP 的传输目标是公平共享瓶颈带宽。但在 LEO 网络中，瓶颈及其流量组成会随时间显著变化。需要注意，这一发现并不与图 8 中的不频繁路径结构变化相矛盾。虽然中位数 GS 对的路径在 200 秒仿真期间仅变化几次，但每条端到端路径包含许多链路，其中一些链路承载了多个 GS 对的流量。这导致了交叉流量变化在单个 GS 对路径上（相对稳定的链路）上的累积效应。

这些观察对流量工程（traffic engineering, TE）和传输协议都有影响。路由与流量工程可以提前规划，预知路径的即将变化，从而将流量预先从即将成为新瓶颈的链路上移开。这是 LEO 网络中的网络层操作，属于运营商可控范围。更困难的补救方式是使传输协议更具适应性以响应变化：但尚不清楚能否在不引发更大不稳定性的前提下做到这一点，因为更激进的传输会更快地加速和减速。

路由/流量工程启示：LEO 网络在路由与流量工程及其与传输协议的交互方面，呈现出未知领域。流量可能需要被主动迁移，以避免路径集变化使部分链路成为新的瓶颈。

---

## 6 可视化 LEO 网络

由于 LEO 网络对我们乃至大多数网络研究社区而言都是新事物，能够对其部分特性进行可视化极为有用，有助于建立对其预期行为的直观理解。我们讨论 Hypatia 提供的一些可视化方法。这些可视化在在线视频与交互式 Javascript [7] 中效果最佳，这里仅以快照展示其作用。

**卫星轨迹**：若不能直观观察轨迹结果，难以理解不同卫星轨迹参数 (§2.1) 的作用。可视化星座中的卫星轨迹有助于理解卫星如何协同运动、多层星座之间的差异、赤道与极区的卫星密度等。

图 11 展示了 Starlink、Kuiper 与 Telesat 的第一层（S1、K1 与 T1，见表 1）的快照。图 11 的交互式 3D 版本可在线获取 [7]；它可通过改变视角更好地观察空间差异。Telesat 因其轨道倾角更高（$98.98^{\circ}$）覆盖极区，而 Kuiper 与 Starlink 在低纬度区域提供更高密度的覆盖。鉴于全球绝大多数人口居住在低纬度 [19]，低倾角意味着卫星可在高人口区停留更长时间。这些设计差异可能意味着星座运营商的目标市场也不同。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-12.jpg?height=622&width=1739&top_left_y=292&top_left_x=178)  
图 11：星座轨迹。(a) Telesat T1-27×13, 1,015 km, 98.98 ${ }^{\circ}$ (b) Kuiper K1-34×34, 630 km, 51.9 ${ }^{\circ}$ (c) Starlink S1-72×22, $550 \mathrm{~km}, 53^{\circ}$。黑点为卫星，红线为轨道。

除覆盖范围外，倾角对连通性也有影响：Telesat 几乎南北走向的轨道可能为欧洲与非洲之间的路由提供更直接的路径，而其他星座则更适合横跨东西向（如北美与欧洲之间）的路由。

我们主要出于完整性纳入卫星轨迹可视化：在线上已有许多类似的优秀可视化 $[6,12,22,30,32]$。据我们所知，目前尚无专注于 LEO 星座网络行为的开源可视化工具，我们将在下文描述部分方面。

**地面站视角**：对于给定星座与指定位置，Hypatia 可展示该星座在地面站视野中的表现。这一视角有助于理解最小仰角及轨道倾角的作用。可视化结果显示，在接近地平线处，虽然卫星更多，但可通信的卫星（高于最小仰角）更为有限。对于高纬度城市，可直观看到低倾角轨道的局限性：此类轨道上的卫星可见性有限，且往往不连续。该可视化的在线版本 [7] 提供了地面观测者视角的视频。

图 12 展示了圣彼得堡观测 Kuiper K1 的两个快照。$x$ 轴为方位角（全景视角，$0^{\circ}$ 为正北，$90^{\circ}$ 为正东），$y$ 轴为仰角（$0^{\circ}$ 为地平线，$90^{\circ}$ 为正上方）。阴影区域内的卫星位于地平线上方，但其仰角低于所需最小值。在某些时段内，该位置的 GS 可连接至 Kuiper（如图 12(a)），而在其他时段则失去连通性（如图 12(b)）。这解释了图 3(a)、图 4(a) 与图 5 中 155-165 s 之间里约热内卢至圣彼得堡的结果。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-12.jpg?height=402&width=1714&top_left_y=1043&top_left_x=208)  
图 12：地面观测者视角。$x$ 轴为地平线，$0^{\circ}=N, 90^{\circ}=E$；$y$ 轴为天空仰角。阴影区域内的卫星位于地平线上方，但仰角低于所需最小值。从圣彼得堡观测，Kuiper K1 的连通性是间歇性的。

**端到端路径**：在 §4.1 中，我们讨论了因 LEO 动态性导致的 RTT 波动。为更好理解这些现象，直观可视化不同时刻的端到端路径非常有用。图 13 展示了 Starlink 中一条典型路径（巴黎-罗安达），该路径经历了最大的 RTT 波动之一。200 秒仿真期间的最长（117 ms）与最短（85 ms） RTT 路径如图所示。典型的南北向路径会尽可能沿某条轨道保持连通以减少时延。但在前者中，为抵达目的地需在轨道北端退出并“之字形”跳跃 9 次，而在后者中仅需 6 次。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-13.jpg?height=716&width=828&top_left_y=306&top_left_x=181)  
图 13：最短路径随时间变化。在 Starlink S1 上，巴黎-罗安达路径的 RTT 在 117 ms（左）与 85 ms 之间波动。之字形路径源于拓扑中 ISL 的特性——看似接近的卫星未必直接相连。

**链路利用率**：在 §5.4 中，我们讨论了即使在静态流量矩阵下，LEO 动态性也会导致链路与路径的利用率随时间波动。图 14 展示了 Kuiper 网络中相同实验的一条示例路径（芝加哥-郑州），较粗/暖色链路表示更拥塞。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-13.jpg?height=486&width=790&top_left_y=1219&top_left_x=200)  
图 14：拥塞随时间转移。示例路径（芝加哥-郑州）显示，即便输入流量静态，链路利用率仍随时间变化。上图与下图分别为 $10 s$ 与 $150 s$ 时的快照。

我们还可以可视化全网瓶颈，如图 15 所示。在我们采用的流量矩阵下，大西洋跨洋 ISL（连接美国与欧洲及部分亚洲）高度拥塞。这表明在此类繁忙区域，采用非最短路径与多路径路由具有重要价值。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-13.jpg?height=454&width=812&top_left_y=295&top_left_x=1105)  
图 15：星座范围的利用率。在 Kuiper 中，跨大西洋路径在所测试的流量矩阵下高度拥塞。红色/粗 ISL 高度利用，而绿色/细 ISL 流量很小。无流量的 ISL 被排除。


## 7 局限性与未来工作

Hypatia 只是为新型网络构建研究基础设施的第一步。它仍有若干未充分发展的部分，其中一些受到公开信息稀缺的限制。

- 最不完善的部分是射频 GS-卫星段设计。如果能建立更现实的模型，将有助于刻画卫星与 GS 接口，以及天线增益和干扰。
- 当前的 ISL（星间链路）模型也较为简化，如果能建模多普勒效应对 ISL 带宽和可靠性的影响，将会更有价值。
- 引入天气模型将有助于研究可靠性和绕过恶劣天气的重路由问题。
- 在多路径路由与拥塞控制方面的研究，也需要对 Hypatia 进行一定修改。
- GEO-LEO 连通性虽然尚未实现，但若 GEO 覆盖范围与最小仰角约束已知，实现起来应当相对直接。
- 模拟具备异构卫星与 ISL 能力的星座也很有趣——随着卫星逐步部署，其能力可能会随时间提升。链路容量方面的异构性较易处理，但若需支持不同卫星拥有不同数量的 ISL，则需要在拓扑定义中做出额外工作，以合理利用这种异构性。

更广泛地看，与典型的仿真基础设施类似，我们无法完全预见 LEO 网络新提案的需求，许多相关工作可能仍需要修改 Hypatia。然而，我们相信 Hypatia 为此类研究提供了有用的起点。

重要的是，本文强调的所有启示在 Hypatia 当前局限下依然稳健。无论缺失的设计细节将来如何补全，RTT 都会持续波动，拥塞控制都会遭遇嘈杂的丢包与时延信号，而路径的动态变化也将为路由与流量工程带来明确挑战。

---

## 8 结论

我们提出了 Hypatia，这一用于大规模 LEO 网络的仿真与可视化框架。我们展示了 Hypatia 在理解此类网络行为中的作用，特别是路径结构与时延的时间变化特性。我们分析了 LEO 网络动态性对拥塞控制、路由与流量工程的若干影响。本研究不仅为近期指出 LEO 网络挑战的立场论文提供了定量支持，也为推动解决这些挑战补齐了一项长期缺失的基础设施。






### ACKNOWLEDGMENTS

We are grateful to our shepherd Eric Wustrow and the anonymous reviewers for their helpful feedback.

### REFERENCES

[1] Janet Abbate. 2004. Robert ("Bob") Elliot Kahn. https://amturing.acm.org/award_ winners/kahn_4598637.cfm.
[2] Riza Akturan and Wolfhard J Vogel. 1997. Path diversity for LEO satellite-PCS in the urban environment. In IEEE Transactions on Antennas and Propagation.
[3] Venkat Arun and Hari Balakrishnan. 2018. Copa: Practical Delay-Based Congestion Control for the Internet. In USENIX NSDI.
[4] Jason H Bau. 2002. Topologies for satellite constellations in a cross-linked space backbone network. Ph.D. Dissertation. Massachusetts Institute of Technology.
[5] Debopam Bhattacherjee, Waqar Aqeel, Ilker Nadi Bozkurt, Anthony Aguirre, Balakrishnan Chandrasekaran, P Godfrey, Gregory Laughlin, Bruce Maggs, and Ankit Singla. 2018. Gearing up for the 21st century space race. In ACM HotNets.
[6] Debopam Bhattacherjee and Ankit Singla. 2019. Network topology design at $27,000 \mathrm{~km} /$ hour. In ACM CoNEXT.
[7] Bhattacherjee, Debopam and Singla, Ankit. 2020. LEO satellite networks. https: //leosatsim.github.io/.
[8] Alan Boyle. 2019. Amazon to offer broadband access from orbit with 3,236satellite 'Project Kuiper' constellation. https://www.geekwire.com/2019/amazon-project-kuiper-broadband-satellite/.
[9] Ilker Nadi Bozkurt, Anthony Aguirre, Balakrishnan Chandrasekaran, P Brighten Godfrey, Gregory Laughlin, Bruce Maggs, and Ankit Singla. 2017. Why is the Internet so slow?!. In International Conference on Passive and Active Network Measurement. Springer.
[10] David Canellis. 2020. Bezos and Musk's internet-from-space race is back on. https://thenextweb.com/hardfork/2020/03/30/oneweb-collapse-internet-space-race-leo-satellite-bezos-musk-back-on/.
[11] Neal Cardwell, Yuchung Cheng, C Stephen Gunn, Soheil Hassas Yeganeh, and Van Jacobson. 2017. BBR: congestion-based congestion control. In Communications of the ACM.
[12] Celestrak. 2020. Orbit Visualization (e-tool per StarLink). https: //celestrak.com/cesium/orbit-viz.php?tle=/NORAD/elements/supplemental/ starlink.txt\&satcat=/pub/satcat.txt\&orbits=0\&pixelSize=3\&samplesPerPeriod= 90\&referenceFrame=1.
[13] CesiumJS. 2020. https://cesium.com/cesiumjs/.
[14] Vincent WS Chan. 1999. Optical space communications: a key building block for wide area space networks. In IEEE LEOS Annual Meeting Conference Proceedings.
[15] Vincent WS Chan. 2000. Optical space communications. In IEEE fournal of Selected Topics in Quantum Electronics.
[16] Stephen Clark. 2020. SpaceX's Starlink network surpasses 400 -satellite mark after successful launch. https://spaceflightnow.com/2020/04/22/spacexs-starlink-network-surpasses-400-satellite-mark-after-successful-launch/.
[17] Mark Claypool, Jae Won Chung, and Feng Li. 2018. BBR' an implementation of bottleneck bandwidth and round-trip time congestion control for ns-3. In Proceedings of the 10th Workshop on ns-3. ACM.
[18] Gary Comparetto and Neal Hulkower. 1994. Global mobile satellite communications-A review of three contenders. In 15th International Communications Satellite Systems Conference and Exhibit. AIAA.
[19] Datagraver. 2020. WORLD POPULATION DISTRIBUTION BY LATITUDE AND LONGITUDE - 2020. https://datagraver.com/case/world-population-distribution-by-latitude-and-longitude-2020.
[20] Olivier L De Weck, Richard De Neufville, and Mathieu Chaize. 2004. Staged deployment of communications satellite constellations in low earth orbit. In Journal of Aerospace Computing, Information, and Communication.
[21] Inigo del Portillo, Bruce G Cameron, and Edward F Crawley. 2019. A technical comparison of three low earth orbit satellite constellation systems to provide global broadband. In Acta Astronautica. Elsevier.
[22] Elias Eccli. 2020. Starlink Constellation (2019/11/17-2020/05/21). https://www. youtube.com/watch?v=857UM4ErX9A.
[23] Sandra Erwin. 2019. SpaceX plans to start offering Starlink broadband services in 2020. https://spacenews.com/spacex-plans-to-start-offering-starlink-broadband-services-in-2020/.
[24] John V Evans. 1998. Satellite systems for personal communications. In Proceedings of the IEEE.
[25] GeoRepository. 2020. WGS72. https://georepository.com/crs_4985/WGS-72.html.
[26] Giacomo Giuliari, Tobias Klenze, Markus Legner, David Basin, Adrian Perrig, and Ankit Singla. 2020. Internet Backbones in Space. In ACM SIGCOMM CCR.
[27] Prateesh Goyal, Akshay Narayan, Frank Cangialosi, Deepti Raghavan, Srinivas Narayana, Mohammad Alizadeh, and Hari Balakrishnan. 2018. Elasticity Detection: A Building Block for Delay-Sensitive Congestion Control. In ACM ANRW.
[28] Loren Grush. 2020. SpaceX may spin out internet-from-space business and make it public. https://www.theverge.com/2020/2/6/21126540/spacex-starlink-internet-space-mega-constellation-ipo-spinoff-gwynne-shotwell.
[29] Mark Handley. 2018. Delay is Not an Option: Low Latency Routing in Space. In ACM HotNets.
[30] Mark Handley. 2018. Starlink revisions, Nov 2018. https://www.youtube.com/ watch?v=QEIUdMiColU.
[31] Mark Handley. 2019. Using Ground Relays for Low-Latency Wide-Area Routing in Megaconstellations. In ACM HotNets.
[32] Mark Handley. 2019. Using ground relays with Starlink. https://www.youtube. com/watch?v=m05abdGSOxY.
[33] Thomas Henderson and Randy Katz. 2000. Network simulation for LEO satellite networks. In 18th International Communications Satellite Systems Conference and Exhibit. AIAA.
[34] Mark Holmes. 2020. In the Eye of the Storm: Greg Wyler Breaks Cover to Talk OneWeb. http://interactive.satellitetoday.com/via/oneweb-special-edition/in-the-eye-of-the-storm-greg-wyler-breaks-cover-to-talk-oneweb/.
[35] HughesNet. 2020. https://www.hughesnet.com/.
[36] Iridium Communications Inc. 2020. Iridium NEXT. https://web.archive.org/web/ 20200718205415/https://www.iridiumnext.com/.
[37] Iridium Communications Inc. 2020. Iridium Satellite Communications. https: //www.iridium.com/.
[38] ISS National Lab. 2015. ISSRDC 2015 - A Conversation with Elon Musk. https: //www.youtube.com/watch?v=ZmEg95wPiVU.
[39] Vivek Jain, Viyom Mittal, and Mohit P Tahiliani. 2018. Design and implementation of TCP BBR in ns-3. In Proceedings of the 10th Workshop on ns-3. ACM.
[40] Simon Kassing, Debopam Bhattacherjee, André Baptista Águas, Jens Eirik Saethre, and Ankit Singla. 2020. Hypatia source code. https://github.com/snkas/hypatia.
[41] Amiko Kauderer and Kim Dismukes. 2011. NASA HSF: Definition of Two-line Element Set Coordinate System. https://spaceflight.nasa.gov/realdata/sightings/ SSapplications/Post/JavaSSOP/SSOP_Help/tle_def.html.
[42] T.S. Kelso. 2020. CelesTrak: Current NORAD Two-Line Element Sets. https: //www.celestrak.com/NORAD/elements/.
[43] John D Kiesling. 1990. Land mobile satellite systems. In Proceedings of the IEEE.
[44] Tobias Klenze, Giacomo Giuliari, Christos Pappas, Adrian Perrig, and David Basin. 2018. Networking in Heaven as on Earth. In ACM HotNets.
[45] Mark Krebs. 2016. Satellite Constellation. https://patents.google.com/patent/ US20170005719A1/en.
[46] Kuiper Systems LLC. 2019. Application of Kuiper Systems LLC for Authority to Launch and Operate a Non-Geostationary Satellite Orbit System in Ka-band Frequencies. https://licensing.fcc.gov/myibfs/download.do?attachment_key= 1773885.
[47] Kuiper USASAT-NGSO-8A ITU filing. 2018. https://www.itu.int/ITU-R/space/ asreceived/Publication/DisplayPublication/8716.
[48] Kuiper USASAT-NGSO-8B ITU filing. 2018. https://www.itu.int/ITU-R/space/ asreceived/Publication/DisplayPublication/8774.
[49] Kuiper USASAT-NGSO-8C ITU filing. 2018. https://www.itu.int/ITU-R/space/ asreceived/Publication/DisplayPublication/8718.
[50] Kenneth Chun Hei Kwok. 2001. Cost optimization and routing for satellite network constellations. Ph.D. Dissertation. Massachusetts Institute of Technology.
[51] LeoSat. 2018. Technical Overview. http://leosat.com/media/1114/leosat-technicaloverview.pdf.
[52] Jiulong Ma, Xiaogang Qi, and Lifang Liu. 2017. An Effective Topology Design Based on LEO/GEO Satellite Networks. In International Conference on Space Information Network. Springer.
[53] Gérard Maral. 1994. The ways to personal communications via satellite. In International journal of satellite communications. Wiley Online Library.
[54] marine.rutgers.edu. 2001. Keplerian Elements. https://marine.rutgers.edu/cool/ education/class/paul/orbits.html.
[55] Florian Meyer. 2019. A new network design for the "Internet from space". https://ethz.ch/en/news-and-events/eth-news/news/2019/12/a-new-network-design-for-the-internet-from-space.html.
[56] NASA. 2008. Orbits and Kepler's Laws. https://solarsystem.nasa.gov/resources/ 310/orbits-and-keplers-laws/.
[57] NASA. 2020. General Mission Analysis Tool. https://software.nasa.gov/software/ GSC-17177-1.
[58] NetworkX developers. 2020. NetworkX. https://networkx.github.io/.
[59] North American Aerospace Defense Command. 2020. https://www.norad.mil/.
[60] ns-3 Network Simulator. 2020. https://www.nsnam.org/.
[61] Pedro Silva. 2016. ns3-satellite. https://gitlab.inesctec.pt/pmms/ns3-satellite.
[62] Saheli Roy Choudhury. 2019. Super-fast internet from satellites is the next big thing in the space race. https://www.cnbc.com/2019/07/22/fast-internet-via-satellites-is-the-next-big-thing-in-the-space-race.html.
[63] Afreen Siddiqi, Jason Mellein, and Olivier de Weck. 2005. Optimal reconfigurations for increasing capacity of communication satellite constellations. In 46th AIAA/ASME/ASCE/AHS/ASC Structures, Structural Dynamics and Materials Conference.
[64] Kawsu Sidibeh. 2008. Adaption of the IEEE 802.11 protocol for inter-satellite links in LEO satellite networks. Ph.D. Dissertation. University of Surrey (United Kingdom).
[65] SNS3. 2020. https://www.sns3.org/content/home.php.
[66] SpaceX. 2016. SPACEX NON-GEOSTATIONARY SATELLITE SYSTEM. https: //fcc.report/IBFS/SAT-LOA-20161115-00118/1158350.pdf.
[67] SpaceX. 2019. SPACEX NON-GEOSTATIONARY SATELLITE SYSTEM. https: //fcc.report/IBFS/SAT-MOD-20190830-00087/1877671.
[68] SpaceX FCC filing. 2017. SpaceX V-BAND NON-GEOSTATIONARY SATELLITE SYSTEM. https://licensing.fcc.gov/myibfs/download.do?attachment_key= 1190019.
[69] SpaceX FCC update. 2018. SPACEX NON-GEOSTATIONARY SATELLITE SYSTEM. https://licensing.fcc.gov/myibfs/download.do?attachment_key=1569860.
[70] SpaceX Starlink. 2017. https://www.spacex.com/webcast.
[71] David E Sterling and John E Hatlelid. 1991. The IRIDIUM system-a revolutionary satellite communications system developed with innovative applications of technology. In MILCOM 91-Conference record. IEEE.
[72] Telesat. 2018. Telesat's responses - Federal Communications Commission. http: //licensing.fcc.gov/myibfs/download.do?attachment_key=1205775.
[73] Telesat. 2020. APPLICATION FOR MODIFICATION OF MARKET ACCESS AUTHORIZATION. https://fcc.report/IBFS/SAT-MPL-20200526-00053/2378318.pdf.
[74] Telesat. 2020. Telesat: Global Satellite Operators. https://www.telesat.com/.
[75] Liam Tung. 2020. SpaceX's public beta of internet from space service coming by fall 2020. https://www.zdnet.com/article/elon-musk-spacexs-public-beta-of-internet-from-space-service-coming-by-fall-2020/.
[76] Viasat. 2020. https://www.viasat.com/.
[77] Tanya Vladimirova and Kawsu Sidibeh. 2007. Inter-Satellite Links in LEO Constellations of Small Satellites. http://www.ee.surrey.ac.uk/m_ssc/research/vlsi/ intersatellite.html.
[78] Markus Werner, Axel Jahn, Erich Lutz, and Axel Bottcher. 1995. Analysis of system parameters for LEO/ICO-satellite communication networks. In IEEE 7ournal on Selected areas in Communications.
[79] ROBERT WIEDEMAN, ALLEN SALMASI, and Dennis Rouffet. 1992. GlobalstarMobile communications where ever you are. In 14th International Communication Satellite Systems Conference and Exhibit. AIAA.
[80] Lloyd Wood. 2001. Internetworking with satellite constellations. Ph.D. Dissertation. University of Surrey.
[81] Lloyd Wood. 2017. Satellite constellation visualization (SaVi). https://savi. sourceforge.io/.
[82] William W Wu, Edward F Miller, Wilbur L Pritchard, and Raymond L Pickholtz. 1994. Mobile satellite communications. In Proceedings of the IEEE.

## A 地面站中继

Hypatia 能够轻松支持不使用星间链路（ISL）的星座实验。在这种场景下，地面站中继提供“弯管（bent pipe）”式连通性，长距离通信通过卫星与 GS 上下行完成 [31]。

为展示这一能力，我们在 Kuiper 的 K1 第一层（表 1）上，模拟了从巴黎到莫斯科的一条长时间 TCP 流。我们比较两种场景下的流表现：(a) 本文其他部分采用的星座模型，即一条 GS-卫星链路，随后是若干 ISL，再接一条卫星-GS 链路；(b) 不使用 ISL，仅通过 GS 中继实现弯管连通。在后者情况下，我们在巴黎与莫斯科之间加入了一张地面站网格，使其有多个可选中继。

图 16(a) 与图 16(b) 展示了两种场景在起始时刻（$t=0$）的情况。图 18(c) 比较了两种场景下的路径 RTT 随时间变化（无业务流量）。如预期，弯管连通导致更高时延，通常高出约 5 ms。图 17 展示了在另一时刻（约 $t=159 \mathrm{~s}$，接近图 18(c) 的“峰值 RTT”）下的路径。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-16.jpg?height=483&width=1722&top_left_y=290&top_left_x=181)  
图 16：在 Kuiper 网络上，巴黎至莫斯科连通性（$t=0$）。黑点为卫星，黄色点为候选 GS 中继，绿色点为端点 GS 与被选中的 GS 中继。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-16.jpg?height=478&width=1687&top_left_y=870&top_left_x=216)  
图 17：在 Kuiper 网络上，巴黎至莫斯科连通性（约 $t=159$）。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-16.jpg?height=391&width=1711&top_left_y=1417&top_left_x=203)  
图 18：RTT 随时间变化。在两种场景下，低带宽（$10 \mathrm{Mbit} / \mathrm{s}$）队列延迟均使 RTT 远高于 (c) 中的计算值。

在本实验中，我们将卫星上的网络设备配置为固定总上行带宽，并为所有出站流量共用同一个队列。这意味着在弯管连接中，路径上的某颗卫星的 GSL 上行队列需要同时承载同向传输的 TCP 数据包（GS→卫星）与反向传输的 ACK（另一 GS→卫星）。我们的实验展示了其对单向 TCP NewReno 流（巴黎→莫斯科）的影响。图 18(b) 中的估计 RTT 与图 19(b) 中的 TCP 拥塞窗口均体现了上述队列共享对数据包与 ACK 的影响。由此，弯管连接下的吞吐量也略低，如图 19(c) 所示。

进一步比较图 19(a) 与图 19(b)，我们发现至少在该实例中，弯管连接下 TCP 行为显著不同，拥塞窗口波动更大。原因在于 ISL 与弯管连接导致的瓶颈行为不同。在 ISL 情况下，瓶颈在于源 GS 的出站网络设备；而在弯管情况下，由于数据与 ACK 共用路径，瓶颈在第一条卫星-地面链路。随着路径中卫星变化，特别是首颗卫星，队列大小随时间大幅变化。触发 TCP 误判丢包的乱序事件发生在 $t=52.9, 86.3, 92.5, 147.2$ 与 $162.1 \mathrm{s}$，对应图 19(b) 中拥塞窗口下降的精确点。

![](https://cdn.mathpix.com/cropped/2025_09_27_8deeeaeb06d54082358fg-16.jpg?height=443&width=1717&top_left_y=1870&top_left_x=203)  
图 19：在 ISL 与弯管场景下 TCP 行为不同，主要源于瓶颈行为的差异。在我们的配置下，弯管连通中 ACK 与数据包共用瓶颈。

需要注意，这种低层次行为取决于网络设备的配置，例如若为上行流量配置多个独立队列，则行为会有显著差异。在存在交叉流量的情况下，ISL 场景也可能表现出类似情况，因瓶颈从首个上行设备移开而出现更频繁的乱序。因此，我们提醒读者不要从本小实验中过度推断弯管与 ISL 连通性下 TCP 行为的差异；该实验仅用于展示 Hypatia 对弯管星座的支持能力。
