# ns-3-leo：用于卫星蜂群通信协议的评估工具

TIM SCHUBERT，LARS WOLF，以及 ULF KULAU

2022年2月1日

https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9693958

#### 摘要

我们提出了 **ns-3-leo**，这是一个面向离散事件网络模拟器 $ns$-3 的模块，其中包含了低轨道卫星（Low Earth Orbit, LEO）巨型星座的网络移动性和链路特性模型。最初的目标是创建一个仿真环境，以便能够在此类网络中评估来自无线传感器网络（Wireless Sensor Network, WSN）和移动自组网（Mobile Ad-hoc Network, MANET）领域的现有路由协议。为了展示其能力，我们基于公开的参数对 Starlink 和 Telesat 的计划卫星星座进行了仿真。通过对按需自组距离向量路由（Ad hoc On-demand Distance Vector Routing, AODV）的仿真，我们获得了这些协议在卫星网络中面临的独特挑战的宝贵见解。现有使用距离向量路由或泛洪方式的自组协议不太可能用于宽带互联网接入，因此需要替代的方法来处理这些网络中的大规模移动性。然而，借助 ns-3-leo，我们提供了一个急需的扩展，用于支持满足卫星星座需求的协议开发。

**关键词**：低轨道卫星，卫星通信，路由协议，互联网，移动自组网，AODV，容错网络（Disruption Tolerant Networking），计算机仿真。

## I. 引言

现代的地面和光纤网络提供了快速的宽带互联网接入，但在2019年，它们仅服务于全球大约 $54 \%$ 的人口 [1]。对于生活在偏远地区或基础设施不足国家的人们来说，接入受限。

低轨道卫星（LEO）星座，例如 Iridium [2] 和 Globalstar [3]，在偏远地区提供电话和互联网覆盖。虽然这些较早的网络在全球范围内提供了可靠覆盖，但并不支持现代互联网应用所需的数据速率，并且其网络容量相当有限。另一种提供宽带互联网的方式是地球同步轨道（GeoStationary Earth Orbit, GEO）卫星 [4]。GEO 的位置具有只需较少卫星即可实现全球覆盖的优势。尽管 GEO 卫星的数据速率支持现代互联网应用，但与地球的巨大距离导致端到端时延很长，且提供给终端用户的带宽无法与光纤或地面网络竞争（在这些网络可用的情况下）。

近年来，利用大量 LEO 卫星来提供宽带互联网的想法由多家公司推动，其中较为知名的竞争者包括 SpaceX [5]、Amazon [6]、Telesat [7] 和 OneWeb [8]。一个此类巨型星座的示例如图1所示。

基于理论计算，网络容量足以提供与光纤网络相当的高速宽带互联网接入 [9]。由于 LEO 卫星的低轨道高度，相较 GEO 卫星，其信号传播时延很小，因此延迟极低 [10]。然而，正如 Barrios 等 [9] 指出，为了在相同距离上传输数据，需要显著更多的中继站。为克服部分挑战，星间链路（Inter-Satellite Link, ISL）已在过去成功用于扩展单个卫星的视距连接 [11]。ISL 允许通过定向无线链路或激光终端在卫星之间直接传输数据。这消除了在可能的情况下对额外地面中继的需求。图1展示了一个包含多个 ISL 的用户终端与网关之间的多跳路径示例。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-02.jpg?height=750&width=794&top_left_y=244&top_left_x=154){width=400} 

图1. Telesat LEO 星座架构（来自 Telesat 的申请文件 [7]）

ISL 还可能提升总体吞吐量 [9]，降低运营成本，并允许卫星运营商通过增加轨道和平面卫星来扩展其网络，而无需增加地面站。但其缺点是，在基于 ISL 的多跳网络中可能存在多条可替代路径。因此，网络运营商必须引入合适的路由算法以优化可用网络容量。路由是许多网络环境中的经典问题，其解决方案总是依赖于网络的多种参数，例如各节点互联的性质、数据与错误率以及移动性（如果相关）。

对于 LEO 巨型星座而言，单个卫星的轨道是确定性的，但网络拓扑结构在不断变化。互联关系（例如通过 ISL）会发生变化，单个卫星可能因设备故障或流量需求而消失或加入。迄今为止，关于卫星运营商可能使用何种路由协议来支持此类网络的信息仍很少公开。同时，LEO 网络与其他网络类型（如 MANET 和 WSN）具有类似特征，即它们必须处理移动性、大规模流量、有限资源以及对服务质量的特定要求。虽然已有大量候选协议可分别解决部分挑战 [12]，但尚缺乏针对性的评估。

### A. 问题陈述

为了更好地了解现有 MANET 和 WSN 协议在 LEO 网络背景下的性能，值得在离散事件网络仿真环境中观察其表现。这类仿真需要包含 LEO 巨型星座中的网络拓扑、无线电技术和网络协议的详细模型。

尽管这些主题在以往研究中已被理论覆盖且相对理解充分，但在仿真所需的某些构建模块上仍存在缺口。作为实际评估可能的协议选项的第一步，我们创建了 **ns-3-leo**，这是一个面向 LEO 网络拓扑和链路特性的仿真工具。借助该工具，我们不仅能够识别未来 LEO 巨型星座中路由协议将面临的挑战，更重要的是支持开发者实现和探索新的协议。

### B. 文档结构

首先，我们回顾了 LEO 卫星网络仿真相关的研究工作。在第III节中，我们描述了移动性模型和信道模型。第IV节进一步介绍了 $ns$-3-leo 作为 $ns$-3 模块的实现。在第V节，我们展示了对 ns-3-leo 性能分析的结果，并使用其在 Starlink 和 Telesat 网络场景中对 AODV 进行评估，以展示其能力。在第VI节，我们讨论了当前方法的局限性，识别了 LEO 卫星网络中新兴路由协议所面临的挑战，并最后给出结论。

## II. 相关工作

本节突出了与 LEO 巨型星座、相关无线电技术以及路由协议相关的部分研究。我们还讨论了文献中的类似仿真，并与我们的方法进行比较。

### A. 统计模型

美国联邦通信委员会（Federal Communications Commission, FCC）提交的 Starlink [5]、OneWeb [8] 和 Telesat LEO [7] 星座文件包含了其链路特性和轨道参数的详细信息。它们都具有由大量地面站和卫星组成的类似架构，但也存在一些显著差异。例如，OneWeb 的第一代星座没有 ISL，而 Starlink 在全面部署后计划拥有显著更多的卫星。图1展示了 Telesat LEO 星座的网络架构示例。

Barrios 等 [9] 对这些计划中的 LEO 星座进行了详细描述和比较。他们将拓扑和链路预算模型与国际电信联盟（International Telecommunication Union, ITU）的气象衰减模型 [13] 相结合，创建了每个星座的吞吐量与容量统计模型。通过该模型，他们估算了相对于 ISL 容量、网关天线数量和地面站数量的总容量。此外，他们利用全球人口普查数据 [14] 创建了全球网络流量需求模型，并设计了一个基础遗传算法来确定地面站的最优数量和位置。基于卫星链路的带宽利用率、系统最大吞吐量和总网络容量，他们分析了 ISL 对地面站数量需求的影响，发现 ISL 的使用降低了所需地面站数量并提升了总吞吐量。由于他们分析的是相同的星座，但采用的是统计模型而非仿真，因此其研究结果可用于验证我们仿真的有效性。

### B. 星间通信

利用 ISL 的卫星通信网络中较为突出的例子是 Iridium [15] 和 Iridium Next [16]。在这些网络中，只有相邻极轨道上方向相反的卫星之间的通信需要依赖地面站中继。

现代 Ka 波段（Ka-Band）ISL 能够在长距离通信中实现每秒数十亿比特的超高速率。未来，这些能力可能通过光学 ISL 得到进一步提升。在撰写本文时，商用光学 ISL 所需的现成硬件仍不常见 [17]，因此我们的仿真重点放在使用 Ka 波段发射机的 ISL 上。

Handley [10], [18] 进一步研究了地面中继与 ISL 的联合使用。他发现，即使不使用 ISL，仅通过一系列天地链路传输的路径通常也比单纯的地面网络路径延迟更短。如果路径使用 ISL，则可以进一步减少传播延迟、降低所需地面中继数量并提高网络总容量。这支持了 Barrios 等 [9] 的研究结论。Handley 使用基于 Unity 3D [19] 的可视化工具来模拟和展示 Starlink LEO 网络中的最短路径。然而该软件忽略了一些连接约束，据 Handley 所述，这导致某些东西方向路径的性能不切实际地过好 [20]。

Barrios 等 [9] 的统计模型没有考虑分组路由、频率协调和介质接入控制协议的影响。而这三者可能在多大程度上影响网络容量利用效率以及由此产生的服务质量方面起着重要作用。我们尝试通过自己的 ISL 路由协议仿真来补充他们的分析。


### C. 空间通信协议

空间数据系统咨询委员会（Consultative Committee for Space Data Systems, CCSDS）编制了现有空间通信协议的综述 [21]。诸如 CFDP [22] 等协议对 LEO 网络的相关性较低，因为它们是为科学任务中的可靠文件传输而设计的，而非宽带互联网接入。

Iridium 和 Geosat 提供了关于卫星网络中频率协调和介质接入控制（Medium-Access Control, MAC）协议的研究实例。一些技术细节可以在卫星广播标准中找到，例如数字视频广播—卫星 2X（Digital-Video-Broadcast - Satellite 2X, DVB-S2X）的规范 [23]。其前身 DVB-S2 的实际实现（尽管仅用于单个地球同步卫星）可以在 SNS3 [24] 中找到。针对 LEO 巨型星座寻找和实现合适的频率与 MAC 协调算法仍然是未来的研究课题。

在对可用协议进行的广泛调查中，Azúza 等 [12] 确定了卫星网络的潜在候选协议。他们设想的使用场景是一个高度异构、联合的多卫星网络架构，这些网络跨越多种不同技术进行通信。为此，他们比较了来自多种网络类型的路由协议，包括 MANET、快照网络、现有 LEO 卫星网络、多层网络、WSN 以及延迟容忍网络（Delay Tolerant Networking, DTN）。他们汇总了卫星网络中对路由协议至关重要的属性。根据其观点，此类协议应基于距离向量路由，能够适应网络移动性导致的拓扑变化，并支持资源感知的路由。

需要注意的是，他们提出的多卫星网络联合架构与计划中的 LEO 巨型星座架构截然不同。这在一定程度上降低了对候选协议的某些要求，例如应对异构架构或支持多种不同路由协议的能力，但对其他方面的要求更高，例如可用带宽和资源的最优分配、对移动性的支持以及最小化延迟。作为未来研究的潜在候选协议，他们建议了负载感知按需路由（Load-Aware On-Demand Routing, LAOR）、区域路由协议（Zone Routing Protocol, ZRP）、多路径按需自组距离向量路由（Ad-Hoc On-Demand Distance-Vector Routing, AOMDV）、低功耗和高损耗网络路由协议（Routing Protocol For Low-Power And Lossy Networks, RPL）、能量感知的流行病路由（Energy Aware Epidemic Routing, EAEpidemic）以及间歇连接网络概率路由协议（Probabilistic Routing Protocol For Intermittently Connected Networks, PROPHET）。

我们对 ns-3-leo 的示例性评估使用了 AODV，因为它符合大多数标准，且 $ns$-3 的实现已经可用。随后在第 V 节中，我们将把初步评估结果与 Azúza 等 [12] 的预期进行比较。

### D. 离散事件网络仿真

Bedon 等 [25] 研究了在 ISL 链路中使用传输控制协议（Transmission Control Protocol, TCP）和用户数据报协议（User Datagram Protocol, UDP）的性能。他们仿真了一组沿一条极轨道运行的立方星（Cubesat）网络，其中包含不同的业务流量和卫星间距。仿真使用了 SaVi，这是一个基于已过时的 $ns$-2 的可视化工具。尽管他们也仿真了 LEO 网络，但未考虑不同轨道间的卫星移动性或通信。

$ns$-3 是一种离散事件网络模拟器 [26]。离散事件网络模拟器按调度顺序处理事件，例如分组传输、节点移动到不同航点或协议计时器路由过期，这些由中心仿真控制循环管理。ns-3 提供了包括仿真事件循环和网络设备、信道、移动性模型及路由协议的接口定义等基本组件。该仿真器通过模块系统易于扩展，单个模块可提供额外组件。用户可以将这些模块与 $ns$-3 自身部分和第三方模块结合，构建仿真。这为我们的仿真提供了一个包含众多协议实现的大型框架。ns-3 还包含可扩展的跟踪功能，使用各种类型的事件源和事件汇。我们还可以获得分组捕获（Packet Captures, PCAP），以便在 tcpdump 和 Wireshark [27] 等网络协议分析器中进行进一步分析。

构建更精确的移动性模型需要在任意时刻获得地面站和卫星的位置。卫星轨道动力学的仿真通常涉及诸如 FreeFlyer [28] 之类的任务规划软件。该软件过于复杂，难以集成到现有仿真工具中。ns-3-leo 提供了基于圆轨道的简化移动性模型，鼓励快速实验，并可选择性地从外部文件导入移动性轨迹。

SNS-3 [24] 是一个面向 $ns$-3 的复杂模块，用于建模地球同步数字视频广播（Digital Video Broadcast, DVB）卫星系统，包括其移动性、物理层和链路层。由于多个原因，SNS-3 并不适用于 LEO 卫星星座。在 LEO 中，卫星相对于地球表面的位置并非固定，而是高度动态的。因此，信道模型必须考虑多颗卫星的移动性，而 SNS-3 的单个 GEO 卫星模型并未涵盖这一点。为了支持星座中的多跳路径，每个节点必须能够重生成负载并更新其转发的数据包中的信息。而 SNS-3 的信道模型局限于“弯管”（bent-pipe）设计，即将上行链路和下行链路紧密耦合，不允许高层协议对分组进行修改。同时，SNS-3 的信道和链路层模型与 LEO 卫星所采用的传输技术非常相似。这也是我们最初尝试通过代码重构使这些模型能够在 SNS-3 外部使用的原因。尽管最终需要的工作量过大而不适合，但 SNS-3 对 ns-3-leo 模块的设计产生了影响。

$OS^{3}$ 是一个作为 $OMNET++$ 模块提供的卫星仿真器，$OMNET++$ 是另一种离散事件网络模拟器。$OS^{3}$ 使用简化广义摄动模型第 4 版（Simplified General Perturbations Version 4, SGP4）[29] 建模卫星位置，并结合当前气象信息包含详细的传播损耗模型。SGP4 的缺点是需要轨道的两行元素（Two-Line Element, TLE）作为输入，而这些数据通常仅对已发射的卫星可用 [30]。ns-3-leo 还可以模拟近似的圆轨道，并使用外部生成的航点文件。这使得仿真尚未发射的计划巨型星座成为可能。$OS^{3}$ 的一个优势是包含详细的路径损耗模型，而我们的仿真尚未实现这点。相反，我们依赖文献 [9] 中的估算。$OS^{3}$ 并未建模 ISL，而 ISL 对即将到来的 LEO 网络仿真是必不可少的。

## III. 模型

在本节中，我们讨论了 LEO 网络中节点移动性模型的理论背景，以及我们如何建模卫星-地面和卫星-卫星的互联。

### A. 坐标参考系

为了使我们的移动性模型可用于实际研究，找到一个能够在容忍的精度损失下同时表达地面站和卫星位置的坐标参考系非常重要。地面站和其他地表点的位置通常用经纬度对表示，而 LEO 卫星的位置通常通过其轨道相对于赤道面的倾角和相对于地球表面的平均高度来描述，甚至使用 TLE。

在轨道计算中有多种坐标系统可供选择，其主要区别在于参考点。例如，国际天体参考系（International Celestial Reference Frame, ICRF）[31] 以太阳为中心，而国际地球参考系（International Terrestrial Reference Frame, ITRF）[32] 则以地球质心为原点。该质心与 Galileo 地球参考框架（WGS84）[33] 及其新版本确定的质心基本一致。这意味着依赖于此类地球引力模型版本的轨道传播算法（如 SGP4）能够生成可直接转换为 ITRF 的结果，而我们则可以在精度损失合理的情况下，用经纬度对来指定地面站的位置。ITRF 的另一个优势是地球表面上的点（例如地面中继）随时间保持固定。这意味着只需更新卫星的位置，从而降低了计算负担。

因此，我们在仿真中使用 ITRF 作为地面站和卫星位置的统一参考系。

### B. 移动性模型

对于移动性模型，需要以足够精度掌握卫星的速度、航向和当前位置，以便精确获得地面站与卫星之间以及卫星之间互联事件的时序。

利用 SGP4 等轨道传播算法，可以根据当前轨道参数生成移动性模型。许多卫星的最新 TLE 数据可以从 Celestrak [30] 获取。仅为现有卫星提供移动性模型不足以构建一个可用于任意 LEO 星座的一般仿真环境，在该环境中应能实验任意轨道。

我们的简化移动性模型基于卫星的倾角、方位角和高度，支持 LEO 圆轨道。这种方法的缺点是精度低于 SGP4 或更精确的混合空间系统仿真平台（Hybrid Simulation Platform for Space Systems, HPS）[34]，因为它忽略了大气阻力和地球引力场不均匀等因素。但其精度仍足以准确描述网络拓扑中的卫星位置。这使用户能够仅通过技术规范中发布的轨道参数（例如尚未发射的 Telesat 卫星 [7]）指定任意轨道。同时，该方法还能在运行时动态生成位置、速度和航向，因此可以从任意起始点仿真任意时间跨度，而不会导致精度丧失或轨道退化。

图2展示了如何利用轨道高度、倾角 $\theta$ 和方位角 $\phi$ 来获取卫星的位置、速度和航向。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-05.jpg?height=636&width=633&top_left_y=217&top_left_x=228){width=400} 

图2. 使用高度、倾角 $\theta$ 和轨道平面方位角 $\phi$ 计算卫星在 $\vec{x}$ 处的位置、速度和航向的简化方法

卫星的速度 $v$ 可以通过其高度 $h$ 与地球的引力常数乘积 $GM$ 计算得出。

卫星轨道平面的法向量 $n$（图中绿色所示）可以通过将赤道平面旋转角度 $\theta$ 获得。

轨道进度可以通过速度 $v$ 和自卫星上次穿过轨道平面以来的时间 $t$ 来计算。


### C. 信道模型

信道模型的任务是根据移动性模型中的位置和无线电信道特性，决定两个节点是否具备数据传输的机会。节点可以是卫星或地面站。

#### 1) 星间链路（Inter-Satellite Links, ISL）

如图3中的 Sat1 和 Sat3，如果它们之间的距离足够近，使得接收端的信号强度足够高，并且两者之间的视距（Line-Of-Sight, LOS）不被地球等物体阻挡，则它们之间存在 ISL。卫星本身在此类距离上可以认为足够小，不会阻挡 LOS。为了计算 LOS，我们使用了一种常用于简单光线追踪器的直线-球体相交方法。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-05.jpg?height=351&width=843&top_left_y=215&top_left_x=1023){width=400} 

图3. 地球表面上空的三颗卫星波束

根据所得二次方程的判别式以及卫星的相对位置，以及射线与地球的交点，可能存在或不存在 LOS。

#### 2) 卫星-地面链路

对于天线波束，如图3所示，我们基于最大相对角度 $\alpha$ 指定波束倾角 $\phi$，即卫星仍能与地面站通信的极限角度，并可表示为 $\phi=\pi/2-\alpha$。$\phi$ 可与其他无线电参数一起从 FCC 申请文件 [7][6][8][5] 中的技术规范获取。由卫星 Sat2 向地球表面某点 $p1$ 发射射线的方程如下（取决于 $\phi$ 和卫星高度 $h_{s}$）：

$$
\begin{equation*}
p(t)=t\binom{1}{-\tan \phi}+\binom{0}{h_{s}} \tag{1}
\end{equation*}
$$

这可以用来确定卫星与任意地面站之间的最大通信距离，同样使用直线-球体相交方法。

设备能否接收分组，还取决于接收功率。其公式为：

$$
\begin{equation*}
P_{RX}=P_{TX}+G_{TX}-L_{TX}-L_{FS}-L_{M}+G_{RX}-L_{RX} \tag{2}
\end{equation*}
$$

其中，$P_{TX}$ 为发射功率，$G_{TX}$ 为发射增益，$L_{TX}$ 为发射损耗，$L_{FS}$ 为空间自由损耗，$L_{M}$ 为链路余量，$G_{RX}$ 为接收增益，$L_{RX}$ 为接收损耗。这些参数可以直接从技术规范中获取，或从相关文献 [9] 中得到统计估计。

## IV. IMPLEMENTATION

## IV. 实现

ns-3-leo 的实现已向社区开放下载：https://gitlab.ibr.cs.tu-bs.de/tschuber/ns-3leo。除了源代码之外，该代码库还包含了如何配置和运行仿真的有用示例。

我们将移动性模型和链路层模型实现为 $ns$-3 3.30 版本的一个模块，该版本在开始开发该模块时是最新版本。  
ns-3 提供了一种统一的方式来声明模型接口，其中包含模型的名称、属性、构造函数以及跟踪源（trace sources）的声明 [35]。其优势在于，当用户配置仿真时，所有这些内容都可以通过语义化名称来引用。例如，所有节点上所有移动性模型的航向变化的跟踪源，就是由 LEO 移动性模型写入的。



```
/NodeList/*/\$ns3::MobilityModel/CourseChange
```


每个组件还可以额外定义一个日志组件。这些组件主要用于调试而不是跟踪，因为跟踪在性能上更优，并允许使用不同的日志输出格式。跟踪提供了对被跟踪对象的直接访问，并且跟踪接收端可以选择任何可用的输出格式（例如纯文本文件或 PCAP），而日志组件始终写入标准错误输出。  
ns-3-leo 为 ns-3 提供了这些接口和日志器定义，并包含一组类，帮助设置更复杂的仿真场景，同时不牺牲模型接口所提供的可扩展性和可配置性。

### A. 网络拓扑与移动性

在卫星网络中一般存在两种形式的移动性：用户终端与网关站的固定位置，以及持续移动的卫星。我们针对这两种情况实现了两种移动性模型。这些模型根据仿真时间向信道模型提供每个节点的当前位置和速度，以及它们之间的距离。

我们通过极坐标提供每个地面站的位置，然后由自定义位置分配器（position allocator）将其转换为 ITRF。我们提供了一组辅助类，用于从文件中导入极坐标并将其插入仿真作为地面站。

为卫星创建移动性模型的第一种方法是，在仿真开始前利用 SGP4 生成卫星位置，并将航点导入航点移动性模型中。我们提供了辅助类来将这些预生成的航点导入仿真。

如第 II 节所述，我们还希望能够模拟那些没有 TLE 文件轨道参数的额外卫星。为此，ns-3-leo 包含了一个移动性模型，它将卫星视为在圆轨道上运动，从而提供其当前位置和速度。该模型以轨道的高度和倾角为参数。此外，还可以配置重新计算位置的时间间隔。图4展示了仿真器事件循环如何触发移动性模型中存储位置的周期性更新。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-06.jpg?height=500&width=806&top_left_y=225&top_left_x=1040){width=400} 

图4. 使用仿真器事件循环进行周期性位置更新的顺序图

在仿真开始时，每颗卫星从轨道上的某个位置出发。这些位置由位置分配器生成，并可通过提供的辅助类为每个仿真配置。我们实现了一个简单的位置分配器，它遍历某一倾角和高度的轨道，并将轨道内每颗卫星的位置及其轨道位置传递给移动性模型。ns-3-leo 提供了辅助类，可从外部文件导入轨道定义，也可以在用户脚本中直接指定。

### B. 链路层

由于未来 LEO 巨型星座中将采用的 MAC 算法和频率协调机制仍在制定中 [36]，我们仅将网络设备实现为发送队列的轻量封装，并未增加特殊行为，除了应用已配置的误差模型、接收功率阈值和最大数据速率。鉴于已公开的 ISL 和卫星-地面链路参数有限，我们采用最大可能的数据速率 [9]，代表最佳情况。我们的网络设备实现能够处理单播和广播流量，这是 AODV 工作所必需的。同时，设备实现还支持分组捕获和分组跟踪。

网络设备通过其所连接的信道发送分组。每个信道表示数据传输的物理介质（例如射频或激光束）。我们实现了两种类型的信道：一种用于星间链路，另一种用于天地链路。

图5和图6展示了分组在我们的信道实现中传输所涉及的处理步骤。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-07.jpg?height=800&width=811&top_left_y=228&top_left_x=140){width=400} 

图5. 使用信道及其附属设备传输分组的处理步骤顺序图。更多细节见图6。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-07.jpg?height=577&width=814&top_left_y=228&top_left_x=1043) {width=400} 

图6. 在连接到信道的所有设备上，每次传输所执行的处理步骤顺序图。这对应于图5中的 “All devices”。

天地信道根据设备类型将附属网络设备分为两组：一组是地面站，另一组是卫星上的天地链路。需要注意的是，这两组内的任意直接通信必须被信道禁止。此类通信仅会发生在某颗卫星或地面站进入另一颗的波束范围内，而这种情况极为少见，因此我们在信道模型中有意排除此类情况。这也提高了仿真性能，因为需要迭代的节点更少，需模拟的独立传输事件更少。这与无线局域网（LAN）信道等共享介质仿真有所不同。

传播损耗模型决定了在一次传输中，两组节点中的哪些是可达的。它首先检查卫星与地面站之间是否存在 LOS，然后判断地面站是否处于卫星波束内。对于在 LOS 内的节点，传播损耗模型用于估算接收信号强度。我们使用 Barrios 等 [9] 的统计估计创建了路径损耗的近似模型，并通过 $ns$-3 的常数速率传播延迟模型估算了传播时延。

我们的 ISL 信道实现会检查两颗卫星之间是否可能存在 LOS。为此，它使用了第 III 节所述的地球与两颗卫星路径间的直线-球体相交方法。


## V. 评估

本节展示了我们对 ns-3-leo 的评估，以及在 Starlink 和 Telesat LEO 星座上运行 AODV 的仿真结果。我们还讨论了如何验证仿真的正确性，并分析了代码的性能。


### A. ns-3-leo 的验证

为验证仿真的正确性，自动化测试套件覆盖了 ns-3-leo 的核心组件以及部分重要的辅助类，采用单元测试和功能测试。

我们使用 gnuplot 创建了一个仿真运行过程中卫星位置的动画，并将其与同一星座的其他动画（如 Handley [18] 创建的动画）进行直观对比。图7展示了我们的动画的静态图。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-07.jpg?height=803&width=800&top_left_y=1019&top_left_x=1051){width=400} 

图7. Starlink 星座加速 24 小时动画的静态图。作为高人口密度区域的示例，美国机场以绿色显示。完整动画可在线查看 [37]。

表1列出了评估中使用的仿真场景。每个场景的参数都列出，并分配了缩写，用于在评估中引用。

**表1. 评估中使用的仿真场景**  

| Script | 星座 | ISL | 缩写 |
| :--- | :--- | :--- | :--- |
| leo-circular-orbit | Starlink | 否 | OS |
|  | Telesat | 否 | OT |
| leo-delay | Starlink | 否 | DS |
|  | Starlink | 是 | DSI |
|  | Telesat | 是 | DTI |
| leo-bulk-send | Starlink | 否 | BS |
|  | Starlink | 是 | BSI |
|  | Telesat | 是 | BTI |

模型的测试用例基于规范中列出的假设和预期。通过检查辅助类是否按照模型属性和测试场景所声明的其他参数正确设置仿真，来验证其功能。我们通过运行示例场景来测试组件集成，并检查结果是否发生变化或在测试运行中是否出现错误。

### B. 测试场景

评估使用了三种不同的仿真脚本。每个脚本运行在 Starlink 或 Telesat 星座上，并可能启用 ISL。表1列出了不同的仿真场景及其对应的缩写。

测试脚本 leo-circular-orbit 在仿真过程中计算所有节点的位置并写入日志文件。这意味着在 $OS$ 和 $OT$ 场景中不发送任何分组，仅模拟 Starlink 和 Telesat 星座的拓扑。

我们并未以任何方式优化地面站的部署，而是使用 $20 \times 20$ 的均匀经纬度网格来放置地面站。对于 AODV，我们完全禁用了链路状态 hello 消息的发送，因为大量生成的消息会导致仿真时间不可接受。为弥补经由地面站的更长路径（相比通过 ISL 的链路），我们将 AODV 渐进环搜索的阈值设为 20 跳，并将网络直径增至 40 跳，以便仍然能够发现所有节点的端到端路由。我们将所有 ISL 链路的数据速率设为 $2 \mathrm{~Gb}/\mathrm{s}$，这与之前的仿真 [9] 相同。

### C. 仿真性能

我们通过测量内存消耗以及使用 valgrind 的 callgrind 工具分析函数调用的指令数来评估仿真工具的性能。valgrind 是“一种用于构建动态分析工具的插桩框架” [38]，能够对仿真运行进行详细的性能分析。此外，我们还使用 Bourne Again Shell (BASH) 的 time 命令比较了仿真脚本的执行时间。所有仿真均在 Intel(R) Core(TM) i7-6700K CPU @ 4.00 GHz、Ubuntu Linux 20.04 LTS 上运行。由于 ns-3 作为单线程进程运行，因此仅使用 CPU 的八个可用线程之一。操作系统（OS）的调度器和并发任务数量等其他因素也会影响仿真性能。

**表2. 仿真性能结果**  
展示了运行仿真所需时间、峰值内存使用量、仿真中的指令数量以及 ns-3-leo 代码中的指令数量。所有仿真的仿真时间均为 1000 秒。DTI 的性能分析在运行 4 天后被手动中止。

| 场景 | 时间[s] | 峰值[MByte] | 指令数[10 ${ }^{9}$ ] | 模块指令数[10 ${ }^{9}$ ] |
| :--- | ---: | ---: | ---: | ---: |
| OS | 8.49 | 29 | 15.005 | 0.539 |
| DTI | 15469.0 | 196.4 | 7928.064 | 138.257 |
| BSI | 525.369 | 128.0 | 1616.950 | 23.049 |

启用 ISL 的场景仿真总是比未启用 ISL 的场景运行更快，因为它们产生的传输和位置更新事件更少。Telesat 星座的场景也是如此，因为其卫星数量显著更少。leo-bulk-send 的 TCP 流相比 leo-delay 脚本产生的单个 ICMP 分组生成了更多的分组。性能评估主要关注最坏情况的 $OS$、DTI 和 BSI，结果如表2所示。

需要注意的是，几乎整个仿真时间（DTI 场景高达 87.90%）都花在 AODV 的消息发送、处理和接收上，而 ns-3-leo 的网络设备仅占不足 6% 的指令。尽管操作相对昂贵，移动性模型的更新仅占总指令的约 4%。当在有移动性的情况下运行 BSI 时，TCP 连接会因超时而在仿真早期关闭。这导致有移动性的 BSI 仿真时间比无移动性更短，因为此后仿真器无事可做。

为验证高指令数（因此运行时间更长）并非编程错误所致，而确实是 AODV 协议在移动性下的开销所致，我们在初始更新后未再更新移动性模型的情况下进行了相同场景的仿真。结果显示 $DTI$ 的运行时间为 50 秒，$BSI$ 为 199 秒，且 AODV 协议消息的流量显著减少。


### D. AODV 的性能

为证明 ns-3-leo 可用于评估 LEO 卫星网络中的路由协议，我们使用了 leo-loss、leo-delay 和 leo-bulk-send 仿真脚本，并结合表1所描述的不同参数进行了实验。

#### 1) 分组丢失

图8展示了在不同场景下 Starlink 网络（NM-DSI、DSI、DS）和 Telesat 网络（DTI）的分组丢失百分比。我们加入了一个人工场景 NM-DSI，其中所有节点在仿真过程中保持固定位置，以便与具有卫星移动性的相同场景（DSI）进行对比。类似地，DS 不包含任何星间链路，而 DSI 和 DTI 包含 ISL。在 Starlink 网络的情况下，若不使用 ISL，AODV 无法成功传递任何分组。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-09.jpg?height=486&width=808&top_left_y=223&top_left_x=140){width=400} 

图8. 在 1000 秒仿真中，中欧（51.399, 10.536）与北美东海岸（40.76, -73.96）之间的接收分组百分比，比较了有移动性（DSI、DTI、DS）和无移动性（NM）的不同场景。

在无移动性的情况下，所有分组均成功接收，这也表明仿真软件没有因错误而意外丢包。在移动性场景下，AODV 在两种星座中的表现大致相同。

在任何 Starlink 网络的 AODV 仿真运行中，都会出现较长时间段，在此期间 AODV 无法发现任何可行路径。这通过仿真运行的分组捕获得到了验证。

#### 2) 时延

端到端时延与分组丢失一起测量。图9展示了不同场景下的时延。如果禁用移动性（NM-BSI），则时延最小。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-09.jpg?height=492&width=753&top_left_y=223&top_left_x=1072){width=400} 

图9. 在 1000 秒仿真中，中欧与北美东海岸之间的时延比较了有移动性和无移动性的不同场景。

在所有场景中，当业务控制层下发分组时，AODV 有时尚未找到有效路由。这导致部分转发时延值异常，从 AODV 模块的日志输出可以观察到。AODV 会将分组缓冲，待获取到有效路由后再进行传输。这意味着在某些情况下缓冲时延会增加总时延。其余变化推测来自其他路由协议消息的业务流量，以及因移动性导致的路径长度变化。

在 Telesat 星座（DTI）中，具有极高延迟的统计异常值显著少于 Starlink 星座（DSI）。这表明当节点数量较少时，AODV 能够更快地获取路径。与分组丢失结果一致，启用 ISL 显著提升了 AODV 的性能，而禁用移动性则减少了寻找新路由所需的时间。



#### 3) 吞吐量

我们使用 leo-bulk-send 脚本测量了某些场景下端到端 TCP 连接的吞吐量。图10展示了各场景下的实测吞吐量。

![](https://cdn.mathpix.com/cropped/2025_09_27_99a06989688ae7c1052ag-09.jpg?height=497&width=811&top_left_y=844&top_left_x=1040){width=400} 

图10. 在 1000 秒仿真中，中欧与北美东海岸之间的单个 TCP 连接总吞吐量，比较了有移动性和无移动性的不同场景。


在没有 ISL 的 Starlink 场景（BS）中几乎没有传输任何负载数据。AODV 未能建立稳定路径，正如在分组丢失和时延仿真场景中所表现的那样。结果导致 TCP 连接无法完成初始三次握手。这一点已通过仿真运行获得的分组捕获加以验证。

在启用 ISL 的相同场景（BSI 和 BTI）中，AODV 在至少一段时间内设法建立了相对稳定的路径并传输了一些分组。但在仿真进行约一半时，连接因超时关闭，因为 AODV 未能及时重新建立路径。需要注意的是，这种行为与网络中的移动性数量相关。如果卫星保持静止，如在 NM-BSI 场景下，Telesat 星座的平均吞吐量约为 $1.58 \mathrm{Mbit}/\mathrm{s}$，Starlink 星座约为 $1.48 \mathrm{Mbit}/\mathrm{s}$。Telesat 星座整体上卫星数量更少，因此移动性也更低。

## VI. 局限性与未来工作

虽然 ns-3-leo 已经提供了一个可用的 LEO 卫星网络仿真框架，但它仍可通过 $ns$-3 的模块系统进行扩展。

我们在仿真中有意排除了任何频率协调和介质接入功能的行为，以便专注于移动性的影响。这实际上对应于一个虚构的最佳场景，即不会发生碰撞和窃听。未来，可以将 ISL 和天地链路的频率协调和介质接入功能、天线数量以及物理层的一些其他细节（如大气效应引起的路径损耗）纳入仿真。

目前建模的 ISL 可以向周围所有卫星广播。而现实中的 ISL 使用定向波束（例如 Ka 波段或甚至激光通信），一次只能向一个目的地发送广播，或者如果有多个收发器则可同时发送至多个目的地，在收发器切换时会引入额外时延。未来的路由协议可能会利用这些单向链路来减少星座内的窃听量并提升性能。由于 AODV 从尽快发现所有可能邻居中受益，因此在我们的场景下，用单次广播近似多次单独传输已足够。

我们在仿真中通过等间距网格放置地面站。初步评估表明，如果像 Barrios 等 [9] 所做的那样对其进行优化，Starlink 和 Telesat 的可靠性会有所提升。

## VII. 结论

创建 ns-3-leo 的目标是提供能够模拟 LEO 卫星巨型星座移动性和链路特性的方法，作为评估 WSN 和 MANET 路由协议在这些网络中可行性的第一步。ns-3-leo 通过多种观测方法对这些网络的行为提供了详细洞察，包括网络移动性和传输事件的实时跟踪，以及网络流量的实时捕获。同时，该模块通过 $ns$-3 的接口开放扩展，可以在第三方模块和用户脚本中独立复用模型。

我们使用基于规范的自动化软件测试和可视化对软件进行了验证。

像 AODV 这样的自组协议在应对不断变化的路径和间歇性连接丢失时存在困难。这会导致大量控制流量，而 AODV 的反应能力在许多情况下被推至极限，从而带来显著的性能开销。要获得更具体和更现实的结果，需要一个更详细的物理层和介质接入层模型，包括频率分配和介质接入功能。

尽管如此，本次评估表明，LEO 巨型星座中的路由协议面临着来自卫星高度移动性所带来的间歇性连接和快速拓扑变化的独特挑战。

我们所有的源代码以及如何使用 ns-3-leo 的有用示例均可在线获取：https://gitlab.ibr.cs.tu-bs.de/tschuber/ns-3-leo。


## REFERENCES

[1] Telecommunication Development Bureau, International Telecommunication Union(ITU). (Jan. 2019). Measuring Digital Development: Facts and Figures 2019. [Online]. Available: https://www.itu.int/en/ITUD/Statistics/Pages/facts/default.aspx
[2] S. R. Pratt, R. A. Raines, C. E. Fossa, and M. A. Temple, "An operational and performance overview of the IRIDIUM low earth orbit satellite system," IEEE Commun. Surveys, vol. 2, no. 2, pp. 2-10, 2nd Quart., 1999.
[3] R. A. Wiedeman and A. J. Viterbi, "The Globalstar mobile satellite system for worldwide personal communications," in Proc. 3rd Int. Mobile Satell. Conf., 1993, pp. 285-290.
[4] T. Vega. (Sep. 2020). FullSAT Space Broadband Solutions. [Online]. Available: https://www.telespazio-vega.de/images/pdf/FullSAT_DE.pdf
[5] Space Exploration Holdings. (Nov. 2018). SpaceX Non-Geostationary Satellite System Attachment a Technical Information to Supplement Schedules. [Online]. Available: https://licensing.fcc.gov/myibfs/ download.do?attachment_key=1569860
[6] Application of Kuiper Systems LLC. (2019). Application of Kuiper Systems LLC for Authority to Launch and Operate a Non-Geostationary Satellite Orbit System Technical Appendix. [Online]. Available: https://licensing.fcc.gov/myibfs/download.do?attachment_key=1773885
[7] Telesat Canada. (2016). Telesat Ka-Band NGSO Constellation FCC Filing SAT-PDR-20161115-00108 Attachment Telesat Loi. [Online]. Available: https://licensing.fcc.gov/myibfs/download.do?attachment_key=1158133
[8] WorldVu Satellites Limited. (2017). OneWeb Non-Geostationary Satellite System Attachment a Technical Information to Supplement Schedule's. [Online]. Available: https://licensing.fcc.gov/myibfs/download. do?attachment_key=1134939
[9] I. del Portillo, B. G. Cameron, and E. F. Crawley, "A technical comparison of three low Earth orbit satellite constellation systems to provide global broadband," Acta Astronautica, vol. 159, pp. 123-135, Jun. 2019.
[10] M. Handley, "Delay is not an option: Low latency routing in space," in Proc. 17th ACM Workshop Hot Topics Netw., New York, NY, USA, Nov. 2018, pp. 85-91, doi: 10.1145/3286062.3286075.
[11] H. Hauschildt, S. Mezzasoma, H. L. Moeller, M. Witting, and J. Herrmann, "European data relay system goes global," in Proc. IEEE Int. Conf. Space Opt. Syst. Appl. (ICSOS), Nov. 2017, pp. 15-18.
[12] J. A. R. de Azúa, A. Calveras, and A. Camps, "Internet of satellites (IoSat): Analysis of network models and routing protocol requirements," IEEE Access, vol. 6, pp. 20390-20411, 2018.
[13] I. del Portillo. (2017). ITU-Rpy: A Python Implementation of the ITU-R P. Recommendations to Compute Atmospheric Attenuation in Slant and Horizontal Paths. [Online]. Available: https://github.com/iportillo/ITURpy/
[14] Gridded Population of the World, Version 4 (GPWV4): Population Count, Revision 11, Palisades, NY, USA, Center for International Earth Science Information Network-CIESIN-Columbia University, Apr. 2018, doi: 10.7927/H4JW8BX5.
[15] R. J. Leopold, "The iridium communications systems," in Proc. Singapore ICCS/ISITA, vol. 2, Nov. 1992, pp. 451-455.
[16] Iridium Satellite LLC. (2013). Iridium Next Engineering Statement. [Online]. Available: http://licensing.fcc.gov/myibfs/download.do? attachment_key=1031348
[17] F. Heine, A. Sánchez-Tercero, P. Martin-Pimentel, N. Höpcke, D. Hasler, T. Marynowski, H. Zech, L. Alber, and J. Klement, "Status of Tesat laser communication activities," in Free-Space Laser Commun. XXXII, vol. 11272, H. Hemmati and D. M. Boroson, Eds. Bellingham, WA, USA: SPIE, 2020, pp. 19-25, doi: 10.1117/12.2545095.
[18] M. Handley, "Using ground relays for low-latency wide-area routing in megaconstellations," in Proc. 18th ACM Workshop Hot Topics Netw., New York, NY, USA, 2019, pp. 125-132, doi: 10.1145/3365609.3365859.
[19] U. Technologies. (2020). Unity 3D. [Online]. Available: https://store. unity.com/
[20] M. Handley. (2020). Starlink Simulator for Comp0031. [Online]. Available: https://github.com/mhandley/Starlink0031
[21] "Overview of space communications protocols," Consultative Committee Space Data Syst., Washington, DC, USA, Tech. Rep. CCSDS 130.0-G-3, Jul. 2014. [Online]. Available: https://public.ccsds.org/Pubs/130x0g3.pdf
[22] "CCSDS file delivery protocol (CFDP) recommended standard," Consultative Committee Space Data Syst., Washington, DC, USA, Tech. Rep. CCSDS 727.0-B-4, Jul. 2014. [Online]. Available: https://public.ccsds.org/Pubs/727x0b5.pdf
[23] Digital Video Broadcasting (DVB); Second Generation Framing Structure, Channel Coding and Modulation Systems for Broadcasting, Interactive Services, News Gathering and Other Broadband Satellite Applications; Part 2: DVB-S2 Extensions (DVB-S2X), document Rec. Technical Specification (TS) ETSI EN 302 307-2, ETSI, Aug. 2020, V1.2.1. [Online]. Available: https://www.etsi.org/deliver/etsi_en/ 302300_302399/30230702/01.02.01_60/en_30230702v010201p.pdf
[24] J. Puttonen, S. Rantanen, F. Laakso, J. Kurjenniemi, K. Aho, and G. Acar, "Satellite model for network simulator 3," in Proc. 7th Int. ICST Conf. Simul. Tools Techn., 2014, pp. 86-91.
[25] H. Bedon, C. Negron, J. Llantoy, C. M. Nieto, and C. O. Asma, "Preliminary internetworking simulation of the QB50 cubesat constellation," in Proc. IEEE Latin-Amer. Conf. Commun., Sep. 2010, pp. 1-6.
[26] T. R. Henderson, M. Lacage, G. F. Riley, C. Dowell, and J. Kopena, "Network simulations with the ns-3 simulator," SIGCOMM Demonstration, vol. 14, no. 14, p. 527, 2008.
[27] G. Combs. (Sep. 5, 2020). Wireshark. Wireshark Foundation. [Online]. Available: https://www.wireshark.org/
[28] A.I. Solutions. (Nov. 2020). FreeFlyer Software. [Online]. Available: https://ai-solutions.com/freeFlyer/
[29] D. Vallado and P. Crawford, "SGP4 orbit determination," in Proc. AIAA/AAS Astrodynamics Spec. Conf. Exhib., Aug. 2008, p. 6770.
[30] T. Kelso. (Aug. 2020). Celestrak. [Online]. Available: https://celestrak. com/
[31] C. Ma et al., "The second realization of the international celestial reference frame by very long baseline interferometry," Tech. Rep. ITN 35, 2009.
[32] Z. Altamimi, P. Rebischung, L. Métivier, and X. Collilieux, "ITRF2014: A new release of the international terrestrial reference frame modeling nonlinear station motions," J. Geophys. Res., Solid Earth, vol. 121, no. 8, pp. 6109-6131, Aug. 2016.
[33] F. J. Lohmar, "World geodetic system 1984-Geodetic reference system of GPS orbits," in GPS-Techniques Applied to Geodesy and Surveying. Berlin, Germany: Springer, 1988, pp. 476-486.
[34] R. Schwarz. (Sep. 2020). HPS-Hybrid Simulation Platform for Space Systems. [Online]. Available: https://www.dlr.de/irs/ desktopdefault.aspx/tabid-11348
[35] N. Contributors. (Aug. 2020). Ns-3 Manual. [Online]. Available: https://www.nsnam.org/docs/release/3.31/manual/html/index.html
[36] Study on Using Satellite Access in 5G, document Rec. Technical Specification (TS) 22.822, Jun. 2018, V16.0.0. [Online]. Available: https://portal.3gpp.org/desktopmodules/Specifications/ SpecificationDetails.aspx?specificationId=3372
[37] T. Schubert, U. Kulau, and L. Wolf. (Nov. 14, 2021). Animation Starlink Constellation. IBR. [Online]. Available: https://gitlab.ibr.cs.tu-bs.de/ tschuber/project-thesis/-/blob/15c143de694bb2f6903e1c713ebd82595bbb 4363/data/starlink-24h.gif
[38] N. Nethercote and J. Seward, "Valgrind: A framework for heavyweight dynamic binary instrumentation," ACM SIGPLAN Notices, vol. 42, no. 6, pp. 89-100, 2007, doi: 10.1145/1273442.1250746.

