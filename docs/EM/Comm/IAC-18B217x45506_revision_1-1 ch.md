# 三种LEO通信星座的技术比较

## A Technical Comparison of Three Low Earth Orbit Satellite Constellation Systems to Provide Global Broadband 

Inigo del Portillo，Bruce G. Cameron，Edward F. Crawley 

2019

URI: https://hdl.handle.net/1721.1/135044.2

Department of Aeronautics and Astronautics, MIT

#### 摘要

近年来，从太空提供互联网接入的理念再次强势回归。继上世纪90年代相关项目遭遇挫折后的相对沉寂期之后，2014年至2016年间，出现了一波新的大型近地轨道（Low Earth Orbit，LEO）卫星星座方案，旨在提供全球宽带接入。与其前辈相比，这些系统的主要区别在于：通过采用数字通信载荷、先进的调制方案、多波束天线以及更复杂的频率复用机制显著提升了性能；同时，借助先进制造工艺（如流水线生产、高度自动化和持续测试）及发射成本的降低，实现了成本节约。本文对三种此类大型LEO卫星星座进行比较分析，分别为：SpaceX的4425颗卫星Ku-Ka频段系统、OneWeb的720颗卫星Ku-Ka频段系统，以及Telesat的117颗卫星Ka频段系统。首先，我们基于截至2018年9月的各自FCC（美国联邦通信委员会）备案，介绍了三种星座系统的体系架构，突出它们之间的异同。随后，本文建立了一种统计方法，用以估计系统总吞吐量（可销售容量），该方法综合考虑了空间段轨道动力学及大气条件对用户链路与馈电链路性能的影响。由于地面站的位置与数量对系统吞吐量有重大影响，而FCC备案中未描述地面段特性，我们进一步进行了优化计算，以最小化支撑系统吞吐量所需的地面站总数。最后，本文总结了三种系统在投入运行前需克服的主要技术挑战。

**关键词**：通信卫星、近地轨道星座、大型星座（mega-constellation）、空间互联网、LEO宽带

## 缩略语/简称

| 缩写 | 含义 |
| :--- | :--- |
| CDF | 累积分布函数（Cumulative distribution function） |
| DRA | 直接辐射阵列（Direct radiating array） |
| DRM | 动态资源管理（Dynamic resource management） |
| EIRP | 有效各向同性辐射功率（Effective isotropic radiated power） |
| FCC | 美国联邦通信委员会（Federal Communications Commission） |
| FoR | 观测视场（Field of regard） |
| FSPL | 自由空间路径损耗（Free Space Path Losses） |
| GSO | 地球静止轨道（Geostationary satellite orbits） |
| ISL | 星间链路（Inter-satellite link） |
| ITU | 国际电信联盟（International Telecommunications Union） |
| LEO | 近地轨道（Low Earth orbit） |
| LHCP | 左旋圆极化（Left-handed circular polarization） |
| LoS | 视距（Line of sight） |
| MODCOD | 调制与编码方案（Modulation and coding scheme） |
| NGSO | 非地球静止轨道（Non-Geostationary satellite orbits） |
| NSGA-II | 非支配排序遗传算法II（Non-dominated sorted genetic algorithm II） |
| OISL | 光学星间链路（Optical Inter-satellite links） |
| RHCP | 右旋圆极化（Right-handed circular polarization） |
| TT\&C | 遥测、测控与指令（Telemetry, Tracking and Command） |

## 1. 引言

### 1.1 研究动机

利用大型近地轨道（LEO）卫星星座从太空提供互联网接入的想法近年来重新受到关注。尽管上世纪90年代提出的相关项目遭遇挫折 [1]，但在2014年至2016年间，又出现了一波旨在提供全球宽带服务的大型LEO卫星星座方案。共有11家公司向美国联邦通信委员会（FCC）提出了在非地球静止轨道（NGSO）上部署大型星座以提供宽带服务的申请。这些新设计的规模从Space Norway提出的2颗卫星，到SpaceX提出的4425颗卫星不等。由于这些星座中卫星数量庞大，因此被称为“大型星座（mega-constellation）”。

与90年代的前辈系统（如Iridium、Globalstar、Orbcomm）相比，这些新一代大型星座在性能上有显著提升——得益于数字通信载荷、先进调制方案、多波束天线以及复杂的频率复用机制。同时，通过先进制造工艺及发射成本下降，也极大降低了成本。除了成本与性能的改进，全球宽带数据需求的增长，以及空中与海上移动市场的扩展预测，也为这些系统的发展提供了重要动力。

在FCC备案的11个方案中，有三个项目已进入较为成熟的开发阶段，并计划在未来三年内发射：OneWeb、SpaceX和Telesat。

本文综述了这三种大型星座系统的体系架构（基于截至2018年9月的FCC备案），并重点分析它们的相似点与差异。随后，本文提出一种新的统计框架，用以估算系统总吞吐量，综合考虑空间段的轨道动力学、大气条件对用户与馈电链路的影响，以及可销售容量的合理上限。

### 1.2 文献回顾

利用大型LEO星座提供全球通信的概念最早提出于上世纪90年代，当时受蜂窝通信、个人通信及互联网使用需求增长的推动。多种LEO系统相继提出，其中部分项目在发射前即被取消（如Teledesic、Celestri、Skybridge），另一些则在运营初期即申请破产保护（如Iridium、Globalstar、Orbcomm）[2]。

当时发表了多份技术报告（主要由星座设计方撰写）阐述各系统架构：Sturza [3] 描述了Teledesic原始卫星系统的技术细节，该系统包含924颗卫星；Patterson [4] 分析了缩减至288颗卫星后的方案；Leopold在多篇论文中详细介绍了Iridium系统 [5–6]；Wiedeman [7] 则分析了Globalstar星座。

从比较研究角度来看，Comparetto [8] 评述了Globalstar、Iridium与Odyssey系统，重点关注体系架构、手持终端设计及成本结构；Dumont [9] 研究了这三者在1991至1994年的演变；Evans [10] 分析了用于个人通信的不同轨道（GEO、MEO、LEO）卫星系统，并进一步比较了Ka频段 [11] 与Ku频段 [12] 的LEO系统方案。这些研究主要为描述性综述，提供了对各系统架构的总体认识。而Shaw [13] 则定量比较了Cyberstar、Spaceway与Celestri方案的能力，评估了容量、信号完整性、可用性及单位T1通话分钟成本等指标。

针对新一代LEO方案的研究相对较少，主要集中在空间碎片与碰撞概率分析 [14,15]，以及LEO与GEO系统在服务海上与航空用户方面的性能比较 [16]。其中，Le May [14] 研究了SpaceX与OneWeb卫星在当前LEO碎片环境下的碰撞概率；Foreman [15] 在分析卫星与空间碎片相遇次数后，提出了若干空间碎片治理政策建议；McLain [16] 比较了前述系统与多颗地球静止超高通量卫星，结论认为后者在航空与海事领域提供大容量服务的路径更为简便、风险更低且成本更经济。

本文采用与Evans [10] 类似的研究路径，对OneWeb、Telesat与SpaceX的方案进行比较。我们首先描述各系统架构，然后在多个维度上展开比较分析。文章后半部分重点估算三种系统的性能（包括系统总吞吐量及地面段需求）。

### 1.3 研究目标

本文的研究目标有两方面：  
首先，基于一致的标准，系统性地介绍OneWeb、Telesat与SpaceX星座的体系架构，并对其进行技术比较；  
其次，利用一种统计方法估算各方案的系统总吞吐量及地面段需求，该方法同时考虑了空间段的轨道动力学及大气条件对用户与馈电链路性能的影响。

### 1.4 论文结构

本文结构如下：第2节讨论Telesat、OneWeb与SpaceX三种系统的体系架构；第3节介绍估算系统总容量及推导地面段需求的方法；第4节展示三种大型星座系统的总吞吐量及地面网关数量与分布；第5节分析这些系统在实现运营前需克服的主要技术挑战；第6节给出总体结论。

## 2. 系统架构

本节比较了Telesat、OneWeb与SpaceX系统的设计，基于截至2018年9月的FCC备案与官方新闻稿。

### 2.1 Telesat系统

Telesat的Ka频段星座 [17] 至少包括117颗卫星，分布于两组轨道：第一组为**极轨道（Polar Orbits）**，共6个圆形轨道平面，轨道高度为$1,000\ \mathrm{km}$，倾角$99.5^{\circ}$，每个平面至少12颗卫星；第二组为**倾斜轨道（Inclined Orbits）**，共5个圆形轨道平面，轨道高度$1,200\ \mathrm{km}$，倾角$37.4^{\circ}$，每个平面至少10颗卫星。极轨道提供全球覆盖，而倾斜轨道主要聚焦于人口密集区域。图1展示了Telesat星座，其中红色为极轨道卫星视场，蓝色为倾斜轨道卫星视场。用户的最低仰角为20°。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-03.jpg?height=506&width=524&top_left_y=1216&top_left_x=379){width="400"}

图1. Telesat系统星座分布图。蓝色为倾斜轨道，红色为极轨道。

相邻卫星之间（无论同轨道平面、相邻轨道平面或两组轨道间）通过**光学星间链路（OISL, Optical Inter-Satellite Link）**通信。借助交叉链路，用户即使在与网关不同时可见的情况下，也可接入系统。

每颗卫星均为IP网络节点，配备先进数字通信载荷和**直接辐射阵列（DRA, Direct Radiating Array）**。载荷包含板载处理模块，具备解调、路由和再调制功能，实现上下行链路解耦，这是相较传统**弯管架构（bent-pipe architecture）**的重要创新。DRA可在上行与下行方向各形成至少16个波束，并具备波束赋形、波束整形功能，动态分配功率、带宽、尺寸与视轴以最大化性能并最小化对GSO和NGSO卫星的干扰。此外，每颗卫星配备2个可转向网关天线和一个宽视场信号接收波束。

系统设计包含多个地理分布的网关，每个网关设有多副3.5米天线。位于渥太华的控制中心负责资源分配的监控、协调与管理，以及无线电信道的规划、调度与维护。

Telesat星座下行使用Ka频段低端（17.8–20.2 GHz）共1.8 GHz带宽，上行使用Ka频段高端（27.5–30.0 GHz）共2.1 GHz带宽。

### 2.2 OneWeb系统

OneWeb的Ku+Ka频段星座 [18] 包含720颗卫星，分布在18个圆形轨道平面上，轨道高度$1,200\ \mathrm{km}$，倾角$87^{\circ}$。图2展示了OneWeb星座的轨道分布。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-03.jpg?height=497&width=500&top_left_y=1333&top_left_x=1238){width="400"}

图2. OneWeb系统星座分布图。

每颗卫星采用**弯管式载荷（bent-pipe payload）**，配置16个相同的、不可转向的高椭圆用户波束。这些波束的覆盖确保任何用户均可在仰角大于55°的条件下与至少一颗卫星保持视距通信。此外，每颗卫星配备两副云台式可转向网关天线，其中一副为活动天线，另一副用于备份与切换。每个用户波束对应Ku频段单通道，并与Ka频段通道相映射。返回方向通道带宽为125 MHz，前向方向通道带宽为250 MHz。

OneWeb系统在用户通信中使用Ku频段，在网关通信中使用Ka频段。具体而言，用户下行与上行分别使用10.7–12.7 GHz与12.75–14.5 GHz频段，而网关下行与上行则分别使用17.8–20.2 GHz与27.5–30.0 GHz频段。

地面段规划包括50个以上的网关站点，每个站点配备最多10副2.4米网关天线。用户终端设计为30–75 cm抛物面天线、相控阵天线及其他电子扫描天线。由于卫星不具备星间链路，系统只能在用户与地面站同时处于卫星视距（LoS, Line of Sight）范围内的区域提供服务。


### 2.3 SpaceX系统

SpaceX的Ku+Ka频段星座 [19] 包含4,425颗卫星，这些卫星将分布在多组轨道上。核心星座将首先部署，由1,600颗卫星组成，均匀分布在32个轨道平面上，轨道高度为$1,150\ \mathrm{km}$，倾角$53^{\circ}$（蓝色）。其余2,825颗卫星将在第二阶段部署，具体分布如下：32个轨道平面，每个平面50颗卫星，轨道高度$1,110\ \mathrm{km}$，倾角$53.8^{\circ}$（橙色）；8个轨道平面，每个平面50颗卫星，轨道高度$1,130\ \mathrm{km}$，倾角$74^{\circ}$（洋红色）；5个轨道平面，每个平面75颗卫星，轨道高度$1,275\ \mathrm{km}$，倾角$81^{\circ}$（黑色）；6个轨道平面，每个平面75颗卫星，轨道高度$1,325\ \mathrm{km}$，倾角$70^{\circ}$（黄色）。图3展示了SpaceX大型星座的轨道分布。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-04.jpg?height=486&width=483&top_left_y=1642&top_left_x=398){width="400"}

图3. SpaceX系统星座分布图。不同颜色代表不同组轨道。

每颗卫星均搭载先进的数字通信载荷，其中包含**相控阵天线（phased array）**，可实现每个波束的独立转向与成形。用户终端的最低仰角为$40^{\circ}$，单颗卫星的总吞吐量预计在17至23 Gbps之间，具体取决于用户终端特性。此外，卫星还配备**光学星间链路（OISL, Optical Inter-Satellite Link）**，以确保连续通信、支持海上服务并减轻干扰影响。

地面段由三类组成部分构成：**测控站（TT\&C, Telemetry, Tracking and Command）**、网关天线和用户终端。其中，TT\&C站点数量较少，分布于全球范围，其天线口径为5米。网关与用户终端均采用**相控阵技术（phased array technology）**。SpaceX计划在全球范围内部署大量网关天线，这些天线将分布于靠近或与互联网互联节点（Internet peering points）共址的地点。

SpaceX系统使用Ku频段进行用户通信，使用Ka频段进行网关通信。具体而言，$10.7–12.7\ \mathrm{GHz}$与$14.0–14.5\ \mathrm{GHz}$频段分别用于用户下行与上行通信；$17.8–19.3\ \mathrm{GHz}$与$27.5–30.0\ \mathrm{GHz}$频段分别用于网关下行与上行通信。


### 2.4 综合评估

本节在前述系统描述的基础上，对三种卫星系统进行进一步比较，分析此前未涉及的关键技术方面。

#### 2.4.1 轨道位置与视距内卫星数量

如表1所示，三种系统均采用半径相近的圆形轨道，轨道高度范围约为$1,000–1,350\ \mathrm{km}$。然而，OneWeb采用传统的极轨道配置以实现全球覆盖，而SpaceX与Telesat则采用多组轨道配置：部分卫星位于倾斜轨道上，以覆盖地球上人口更稠密的地区；另一些卫星位于极轨道上，以确保全球覆盖。

**表1：三种系统的轨道参数**

| 系统 | 轨道高度 | 倾角 | 轨道平面数 | 每平面卫星数 | 总卫星数 |
| :---: | ---: | ---: | ---: | ---: | ---: |
| OneWeb | 1200 km | $87.9^{\circ}$ | 18 | 40 | 720 |
| SpaceX | $1,150\ \mathrm{km}$ | $53^{\circ}$ | 32 | 50 |  |
|  | $1,110\ \mathrm{km}$ | $53.8^{\circ}$ | 32 | 50 |  |
|  | $1,130\ \mathrm{km}$ | $74^{\circ}$ | 8 | 50 | 4425 |
|  | $1,275\ \mathrm{km}$ | $81^{\circ}$ | 5 | 75 |  |
|  | $1,325\ \mathrm{km}$ | $70^{\circ}$ | 6 | 75 |  |
| Telesat | $1,000\ \mathrm{km}$ | $99.5^{\circ}$ | 6 | 12 | 117 |
|  | $1,248\ \mathrm{km}$ | $37.4^{\circ}$ | 5 | 9 |  |

这些轨道布局的差异，再加上星座卫星总数差异较大，使得在任意地理位置处的**视距内卫星数量（LoS, Line of Sight）**平均值存在显著差异。为部分弥补这一劣势，卫星数量最少的Telesat系统选择以较低的最小仰角（$20^{\circ}$）运行，而SpaceX与OneWeb的最小仰角分别为$40^{\circ}$与$55^{\circ}$。较低仰角虽可提升可见卫星数量，但也可能导致更频繁的链路遮挡（如树叶、建筑物阻挡）及因大气衰减导致的通信中断。图4展示了基于FCC备案中最小仰角假设的，不同纬度下平均视距内卫星数量。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-05.jpg?height=464&width=750&top_left_y=1512&top_left_x=262){width="400"}

图4. 不同纬度下视距内卫星数量。

即便Telesat星座的卫星数量显著少于OneWeb，其在纬度范围$\pm60^{\circ}$内（全球人口最密集区域）的视距卫星数量反而更高。这是因为Telesat的最小仰角明显小于OneWeb（$20^{\circ}$ 对 $55^{\circ}$）。此外，当SpaceX系统全部部署完成后，地球上最密集的人口区域内可同时观测到超过20颗卫星。

#### 2.4.2 频率分配

图5展示了三种系统的频率分配情况。对于每个系统及频段，图中上方的线代表**右旋圆极化（RHCP, Right-Handed Circular Polarization）**，下方的线代表**左旋圆极化（LHCP, Left-Handed Circular Polarization）**。表2则比较了各系统在不同链路类型与频段下的波束数量、单波束带宽、总分配带宽以及频率复用因子（reuse factor）。每颗卫星的总带宽通过“波束带宽 × 频率复用因子”计算得出，该值依据单星数据速率估算。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-05.jpg?height=484&width=1627&top_left_y=2016&top_left_x=241){width="400"}

图5. 三种卫星系统的频段分配。

另一方面，Telesat系统仅使用Ka频段，因此**卫星-用户链路与卫星-地面链路需共享同一带宽**。得益于其数字载荷的灵活性，Telesat系统能够动态分配功率与带宽，以在用户与网关波束之间进行干扰抑制和资源优化。

**表2：不同系统与链路类型的带宽分配比较**

| 参数 | 含义 |
| :--- | :--- |
| BW₍CH₎ | 单信道带宽 |
| \#₍CH₎ | 信道数量 |
| k | 每颗卫星的频率复用次数（复用因子） |
| BW₍tot₎ | 总带宽 |
| * | 作者估算值 |
| † / ℙ | Telesat的Ka频段上下频共享于用户与网关链路 |

在极化配置上，OneWeb使用RHCP进行用户下行通信，LHCP用于上行；SpaceX的上、下行均采用RHCP，而LHCP用于**遥测数据（telemetry data）**。两者的网关通信均使用Ka频段：OneWeb的下行信道带宽为155 MHz，上行为250 MHz；SpaceX的下行与上行信道带宽分别为250 MHz与500 MHz，均支持双极化传输。

Telesat的星座虽卫星较少，但其灵活的数字载荷设计可实现**动态功率与带宽分配（dynamic power and bandwidth allocation）**，以平衡用户与网关之间的资源并抑制干扰。

**表3：三种系统波束特性比较**

![](https://cdn.mathpix.com/snip/images/yy5VD0BKBEGYxr4tW-gZthN4vr9F-NyDNJjrouBau6E.original.fullsize.png){width="400"}


在系统架构上，OneWeb采用**弯管式架构（bent-pipe architecture）**，其中16个用户下行信道各映射至一个Ka频段网关上行信道，返回方向同理。而SpaceX与Telesat的架构均具备**板载解调、路由与再调制能力（on-board demodulation, routing and re-modulation）**，可有效实现用户链路与网关链路的解耦。此设计带来以下优势：

a) 上下行信道可采用不同频谱效率，从而最大化单星容量；  
b) 可动态分配用户波束资源以优化利用率；  
c) 可通过频段选择降低干扰。

基于上述解耦设计，估算两系统在网关链路中的**频谱效率（spectral efficiency）**可达约$5.5\ \mathrm{bps/Hz}$，对应的频率复用次数约为：SpaceX用户链路4–5次，Telesat用户波束4次。


#### 2.4.3 波束特性

由于三种系统所搭载的卫星载荷存在显著差异，各卫星波束在能力、形状及覆盖范围方面也存在明显不同。表3总结了三种系统的波束主要特性。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-06.jpg?height=388&width=749&top_left_y=1572&top_left_x=265){width="400"}

图6. (A) 三种系统中卫星飞越西班牙时的观测视场（Field of Regard）；(B) 卫星飞越纽约时的单个波束覆盖投影（由卫星视角所见）。

SpaceX与Telesat的卫星均具备**可独立成形与可转向波束（shapeable and steerable beams）**，而OneWeb仅采用固定波束。SpaceX与Telesat系统的波束形状为圆形，而OneWeb系统的波束为高度椭圆形。图6-A比较了三种系统的观测视场，图6-B显示了各系统波束的–3 dB覆盖轮廓。可见不同系统在单星与单波束覆盖面积上差异显著：  
- OneWeb单波束覆盖面积约为$75,000\ \mathrm{km^2}$；  
- SpaceX单波束覆盖面积约为$2,800\ \mathrm{km^2}$；  
- Telesat的可变形波束覆盖范围可动态调节，在$960\ \mathrm{km^2}$（图6-B中Telesat最小值）至$246,000\ \mathrm{km^2}$（图6-B中Telesat最大值）之间。

#### 2.4.4 部署与扩展策略

表4总结了OneWeb与SpaceX大型星座系统的发射特性，包括每次发射的卫星数量与总发射次数。截至本文撰写时，Telesat尚未公开其发射服务商与卫星配置信息，因此未包含相关数据。

**OneWeb**计划通过与Arianespace及Virgin Galactic的合同发射卫星。前者使用21次**联盟号（Soyuz）火箭**发射，后者将在**LauncherOne**火箭研制完成后执行发射任务。每次联盟号发射将携带34–36颗卫星（取决于发射目的地与场地），合同中还包括5次额外联盟号发射与3次**阿丽亚娜6（Ariane-6）**发射的选项。此外，OneWeb于2018年3月向FCC提交申请，拟将星座扩展至1,980颗卫星（新增1,260颗），其中轨道平面数从18增至36，每平面卫星数从40增至55 [20]。

**表4：OneWeb与SpaceX系统的发射特性**

![](https://cdn.mathpix.com/snip/images/pg7Po9nBBkdGgF1_AVB5W_MTmVCOdEhR9ea9XyBhLE0.original.fullsize.png){width="400"}


*注：数据为作者基于运载火箭载重与体积约束的估算。

**SpaceX**将使用自家运载火箭（**Falcon 9**或**Falcon Heavy**）发射卫星。计划采用**两阶段部署策略**：  
- 第一阶段部署1,600颗卫星（在发射前800颗后即可启动服务）；  
- 第二阶段部署剩余的2,825颗卫星。  

初始部署完成后，SpaceX将为纬度范围$\pm60^{\circ}$提供服务；待最终部署完成后，将实现全球覆盖。

**Telesat**则在近期的新闻稿中表示，依据业务成果，他们计划逐步扩展星座规模，分阶段部署至192颗、292颗，最终达到512颗卫星。

除Ku-Ka频段系统外，三家公司均已向监管机构提交申请，拟在**Q/V频段（Q/V-band）**发射更大型星座，结合LEO与MEO卫星以扩展业务。但对这些Q/V频段星座的描述与分析超出本文范围。

#### 2.4.5 融资与制造

在融资与卫星制造策略方面，三家公司采取了不同路径。

**OneWeb**建立了股权合作体系，其主要股东包括：Qualcomm（20.17%）、软银（SoftBank, 19.98%）与空中客车（Airbus, 13.34%）等 [21]。各合作方在系统设计中承担不同角色：  
- Airbus负责卫星制造；  
- Qualcomm提供用户终端基站；  
- Hughes Network Systems提供网关设备。  

在融资方面，OneWeb通过战略合作伙伴完成首轮融资$\$500$百万美元，随后软银在私募轮中追加投资$\$1.5$十亿美元 [22]。

**SpaceX**采用**内部制造模式（in-house manufacturing strategy）**，卫星平台（satellite bus）的大部分组件由公司内部研制。集成、装配与测试工作也在SpaceX设施内完成。尽管SpaceX未公开其星座融资计划，但其最近一轮$\$1$十亿美元融资中包括Google与Fidelity的投资 [23]。

**Telesat**的大部分系统设计与制造任务将外包给不同公司。目前尚未确定具体卫星制造商，但已与Thales-Maxar与Airbus签署合同，委托二者进一步完善系统设计并提交正式方案；Global Eagle与General Dynamics Mission Systems将负责用户终端开发。融资方面，Telesat在其FCC申请中表示愿意投入“相当规模的自有资金”，并计划通过资本市场筹集额外资金。


## 3. 方法与模型描述

本节介绍用于表征地面段需求与估算系统性能的方法。图7展示了所建立模型（灰色圆角框）及其所需输入（白色框）的总体结构。

估算系统总吞吐量（可销售容量）的整体方法分为两个步骤：  
第一步，通过**遗传算法（Genetic Algorithm）**计算馈电网关的最优位置与数量；  
第二步，将地面段位置与**大气模型（atmospheric models）**、**链路预算模型（link budget models）**和**轨道动力学模型（orbital dynamic models）**结合，采用统计方法推算系统总吞吐量。

本节余下内容将分别介绍各模型与输入来源：  
第3.1节介绍所使用的大气模型；  
第3.2节阐述链路预算假设与参数；  
第3.3节描述需求模型；  
第3.4节讲述地面段优化方法；  
第3.5节说明系统吞吐量的统计估算方法。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-07.jpg?height=408&width=790&top_left_y=1295&top_left_x=1092){width="400"}

图7. 用于确定地面段位置并估算系统总吞吐量的方法概览。

### 3.1 大气模型（Atmospheric Models）

大气衰减是影响通信链路性能的主要外部因素。在**Ka频段（Ka-band）**下，大气衰减可能导致链路容量降低，甚至在相当时间内发生通信中断。为应对这种时变衰减并在任意时刻最大化数据速率，通常采用**自适应调制与编码（ACM, Adaptive Coding and Modulation）**策略。换言之，**调制与编码方案（MODCOD, Modulation and Coding Scheme）**会根据当前气象条件动态选择，以实现最优频谱效率。

本研究实现了国际电信联盟（**ITU, International Telecommunication Union**）的斜路径大气衰减模型 [24]，遵循建议书**ITU-R P.618-13** [25]的指导方针，综合考虑气体吸收、云层、水汽闪烁和降雨等影响。这些建议给出了各种衰减因素在超过特定时间百分比下的值，即形成大气衰减贡献的**累积分布函数（CDF, Cumulative Distribution Function）**。  
具体而言：  
- **ITU-R P.676-11** 与 **ITU-R P.840-7** 用于计算气体与云层衰减；  
- **ITU-R P.837-6**、**ITU-R P.838-3**、**ITU-R P.839-4** 提供了降雨率、雨衰减系数及雨层高度的全球分布图。  

例如，图8展示了波士顿地区在不同频段下的总大气衰减。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-08.jpg?height=478&width=743&top_left_y=393&top_left_x=1095){width="400"}

图8. 波士顿地区不同频段的大气衰减CDF（左图为对数刻度）。

### 3.2 链路预算模型（Link Budget Model）

链路预算模块与大气模型相结合，用以计算在不同大气条件下上行与下行通信的可达数据速率。该模块为参数化实现，可快速计算在给定地面站与运行条件下的最优MODCOD组合。

此外，模型既可处理**弯管架构（bent-pipe architecture）**（即上下行频率转换型链路），也可处理**再生式架构（regenerative architecture）**（即上下行使用不同MODCOD方案的链路）。

**表5：三种系统上行链路（Ka频段上段）波束链路预算**  
（考虑不同距离与仰角，99.5%可用性条件下的大气衰减值）

![](https://cdn.mathpix.com/snip/images/bBVghEqZaXnlQInx0v7i0P70eJWJoate0vl8VAb_LTU.original.fullsize.png){width="400"}


\* 数据取自FCC备案文件，其余参数通过链路预算公式估算。  
Tx表示发射参数，Rx表示接收参数，$\mathrm{G}/\mathrm{T}$为天线的增益噪声温度比（gain-to-noise temperature factor）。

在性能估算中，假设使用2014年由**数字视频广播项目（Digital Video Broadcast Project）**制定的**DVB-S2X标准** [26]。该标准是广播、宽带卫星通信及交互式服务的主流标准，定义了帧结构、信道编码及多种调制方案。标准包含超过60种MODCOD组合，调制方式从BPSK到256-APSK，编码率从$1/4$至$9/10$。假设帧误码率（FER）为$10^{-7}$，符合DVB-S2X实现指南建议。

**表6：三种系统用户下行链路波束链路预算**  
（在波束边缘计算，99%可用性条件下的大气衰减）

![](https://cdn.mathpix.com/snip/images/U0Jjab8CfkDX_PY0q28z92ZZ7K14RCJjxwPurdCX3hk.original.fullsize.png){width="400"}


此外，假设**固态高功率放大器（HPA, High Power Amplifier）**的输出后退功率（Output Back-Off）等于对应MODCOD的峰均功率比（PAPR, Peak-to-Average Power Ratio，即99.9百分位功率与平均功率之比），以避免饱和失真。

链路预算中其余参数包括发射与接收天线的直径、效率、噪声温度，以及射频链路损耗与载干比等因素。所有参数均依据各系统FCC备案中提供的链路预算示例提取。表5与表6分别给出了三种系统的网关与用户前向链路预算示例。


### 3.3 需求模型（Demand model）

为了推导出系统总吞吐量的现实估计值，我们开发了一个需求模型，用于为任何特定轨道位置的卫星提供其最大可销售容量的上限。我们的需求模型专注于服务终端用户以及作为回程链路基础设施以扩展现有网络（例如蜂窝网络），而非满足其他市场（如军事、机载、海上、近海连接等）的需求。这一选择是有意为之，因为大多数当前的低轨星座（LEO-constellation）提案都强调为终端用户提供全球带宽接入。

该需求模型的生成过程如下：针对给定的轨道高度，我们生成了一个经纬度分辨率为 $0.1^{\circ} \times 0.1^{\circ}$ 的网格地图，用于确定位于特定轨道位置的卫星波束所覆盖的人口数量。我们使用了Gridded Population of the World v4数据集，该数据集基于2020年的人口普查数据，在30弧秒分辨率的网格上估算人口数量 [27]。我们还考虑了每颗卫星所施加的最小仰角限制。此外，我们假设某一区域内的用户在所有其视距范围（LoS）内的卫星上均匀分布。

为了计算用户需求的数据速率值（单位为Gbps），我们假设每颗卫星在网格中的每个单元格最多捕获 $10\%$ 的市场份额，且每位用户的平均数据速率请求为300 kbps（约合每月 $\sim 100 \mathrm{~GB}$）。最终，需求被限制在每颗卫星的最大数据速率上限（$\mathrm{R}_{\mathrm{b}}{ }_{\text {sat }}^{\text {max }}$，见第4.2节），如下式所示（其中 $n_{F O V}$ 为某地面位置可视范围内的卫星数量）：

$$
\begin{equation*}
d_{s a t}=\min \left(\mathrm{pop} \cdot 0.1 \cdot 300 k b p s / n_{F O V}, \mathrm{R}_{\mathrm{b}_{\mathrm{sat}}}^{\max }\right) \tag{1}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-09.jpg?height=448&width=755&top_left_y=482&top_left_x=1108){width="400"}
  
图9. 不同轨道位置的用户需求数据速率。

图9显示了OneWeb星座的需求数据速率。高需求区域以亮色显示，低需求区域为暗色，无需求区域则不着色。

---

### 3.4 地面段优化（Ground segment optimization）

我们采用了与文献 [28] 中类似的方法来确定地面站的位置。我们进行了一个优化过程，以最大化如下目标函数：

$$
\begin{equation*}
O=0.5 \cdot \operatorname{cov}_{95}+0.5 \cdot \operatorname{cov}_{99} . \tag{2}
\end{equation*}
$$

同时最小化所需地面站的数量。式中，$\operatorname{cov}_{95}$ 与 $\operatorname{cov}_{99}$ 分别表示在小于 $5\%$ 和小于 $1\%$ 的大气条件下由地面站所覆盖的轨道位置百分比。我们假设地面站与卫星通信的最小仰角为 $10^{\circ}$。

从数学角度看，该优化问题可表述为一个子集选择问题，我们需要从一组地面站中挑选出N个性能最优的位置。我们考虑了分布在全球的160个不同位置，其搜索空间为 $2^{168} \sim 3.8 \cdot 10^{49}$，完全枚举和评估是不可能的，因此必须采用优化算法。

鉴于其结构特点，遗传算法（Genetic Algorithm）非常适合解决此类子集选择问题 [29]。我们采用了非支配排序遗传算法II（NSGA-II, Non-dominated Sorting Genetic Algorithm-II）[30]，这是一种高效的多目标遗传算法，其操作流程如下：

1. 随机生成 $\mathrm{N}_{\mathrm{pop}}$ 个架构（通过对地面站的随机子集构造）
2. 对每个架构计算目标函数 O 的值（公式2）
3. 选择下一代的“父代”架构数量为 $\mathrm{N}/2$，并按以下标准选择：
   a. 首先选择帕累托等级（Pareto ranking）较低的架构；
   b. 若等级相同，则优先选择拥挤距离（crowding distance）较小者；
4. 对 $\mathrm{N}/2$ 个父代架构应用交叉算子（crossover）：从两个父代中分别随机分配其包含的地面站至两个子代，采用的是对地面站的均匀交叉；
5. 对父代和子代应用变异算子（mutation）：以 $\mathrm{p}_{\text {remove }}$ 的概率移除某地面站，以 $\mathrm{p}_{\text {add }}$ 的概率添加新的地面站，整个变异操作以 $\mathrm{p}_{\text {mut }}$ 的概率执行；
6. 重复步骤2-5，直到满足终止条件（如最大迭代代数 $\mathrm{N}_{\text {gen }}$，或帕累托前沿中无新解）。

此外，为加快算法收敛速度，我们利用了该问题的地理结构特性。由于某一地区地面站的选择对其他地区影响较小，我们将优化划分为两个阶段：

- 阶段A：针对6个地区（非洲、亚洲、欧洲、北美洲、大洋洲和南美洲），分别使用NSGA-II算法确定各地区的最优地面站架构（$\mathrm{N}_{\text {pop }}=200$, $\mathrm{N}_{\text {gen }}=200$）；
- 阶段B：在全球范围运行NSGA-II算法，初始种群不再随机生成，而是由阶段A中各地区的帕累托最优架构组合而成。即，阶段B中的地面段架构通过从阶段A中为每个地区挑选一个最优架构拼接构成，该组合种群作为阶段B的初始种群（$\mathrm{N}_{\mathrm{pop}}=200$, $\mathrm{N}_{\mathrm{gen}}=80$）。

---

### 3.5 系统总吞吐量估计（Total system throughput estimation）

为了评估系统吞吐量，我们开发了一个计算模型，用于为每个巨型星座提供最大可销售容量的上限。该统计模型的必要性在于：

1. 卫星视距内的客户和地面网关数量随时间变化，具有动态特性；
2. 大气条件导致衰减变化，从而使链路数据速率具有随机性（stochastic）。

估算系统总吞吐量的流程如下：

首先，我们以60秒时间步推进整个星座的轨道传播，为期一天。然后，对于每种轨道构型，我们为每个地面站采样10,000次大气衰减值，假设这些衰减样本是统计独立的，且符合大气模型计算出的概率分布曲线（例如波士顿地区在不同频率下的累积分布函数如图8所示）。这些样本被用于链路预算模块，以估算每个地面站的可达链路数据速率。

最终系统总吞吐量的计算方式依据星座是否具备卫星间链路（Inter-Satellite Links, ISL）而异：

- **若不具备 ISL**：每颗卫星的吞吐量 $\left(\mathrm{TH}_{\text {sat }}\right)$ 按如下公式计算，其中 $\mathrm{d}_{\text {sat }}$ 为用户需求，$\sum_{i=0}^{N} R_{b_{\text {sat }}}^{G S}$ 表示N个性能最优地面站的数据速率之和。每种轨道位置和大气条件组合形成一个“场景”，共采样约1440万个样本。最终系统总前向容量通过对所有卫星的吞吐量求和得到。

$$
\begin{equation*}
\mathrm{TH}_{\text {sat }}=\min \left(d_{\text {sat }}, \sum_{i=0}^{N} R_{b}{ }_{\text {sat }}^{G S}\right) \tag{3}
\end{equation*}
$$

- **若具备 ISL**：则采用如下四步流程进行计算：

1. 计算在所有可用馈送网关（feeder gateway）支持下的系统总前向容量；
2. 对这些总容量求累积分布函数（CDF），将所有馈送网关容量总和排序；
3. 从CDF曲线中等间距选取1000个场景用于进一步分析；
4. 对每个选定场景：
   a. 构建网络图：图中节点为用户、卫星与地面站，边为RF链路。ISL的链路代价设为1，其余为0。链路容量如下：
     - 用户-卫星链路：由卫星捕获的用户需求决定；
     - 卫星-卫星链路：由ISL数据速率决定；
     - 卫星-地面站链路：由网关链路速率决定；
   b. 求解“最小代价最大流”（minimum-cost, maximum-flow）问题，确定每颗卫星到地面网关的传输流量；
   c. 通过所有卫星流量总和得到系统总吞吐量。


### 3.6 其他假设总结（Summary of other assumptions）

本节总结了我们模型中所做的其他关键假设：

- 用户需求集中于陆地，且与卫星覆盖范围内的人口成正比。不考虑海上或航空需求；
- 当多个卫星同时处于视距范围（LoS）时，用户随机选择其中一个卫星通信，因此需求在视距内卫星之间均匀分配；
- 卫星与地面网关之间采用自适应编码调制（Adaptive Coding and Modulation, ACM），即在任意轨道位置与大气条件下，选择能最大化吞吐量的调制编码方案（MODCOD）；
- 卫星始终具备足够的功率以在需要时以最大等效全向辐射功率（EIRP）进行通信；
- 用户终端不构成限制，能够持续跟踪卫星并以所需的数据速率通信；
- 用户链路在任意仰角下不会因树木遮挡、建筑物阻挡或其他因素发生中断；
- 不考虑不同星座之间的LEO卫星相互干扰所导致的性能下降；
- 地面站可部署于任何陆地区域，不受政治、落地权或地理位置的限制；
- 卫星间链路（ISL）可用于将过载数据转发至其他卫星，仅限于同一轨道组内（包括轨道面内与跨面）卫星间通信；
- 尽管延迟应尽量减小，但通过ISL转发数据的跳数没有上限。

---

## 4. 结果（Results）

本节展示两方面的结果：(a) 每个系统的地面段需求；(b) 总系统吞吐量分析。如第3.3节所述，该吞吐量结果对应的是前向方向上最大可销售容量的上限估计。在以下结果中，我们使用“地面站”指代部署一个或多个馈送天线的站点，“网关天线”指的是实际安装在站点上的抛物面天线。值得注意的是，每个地面站的网关天线数量受到限制，因为不同天线之间必须保持最小角度间隔以避免干扰。根据三套系统在FCC文件中披露的最小角间距数据，每个站点的最大天线数量可设为50（前提是高度协调运行以避免干扰）。更为现实的设定是每站点最多30副天线。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-11.jpg?height=405&width=771&top_left_y=753&top_left_x=1100){width="400"}
  
图10. 地面站位置数量 vs 覆盖需求区域的比例。

图10展示了三套系统中，地面站位置数量与其覆盖的用户需求区域之间的帕累托前沿关系。可见，OneWeb系统需要61个地面站以实现全面覆盖；而Telesat与SpaceX系统即使部署所有地面站也无法实现对全部需求区域的覆盖。这是由于其卫星视场（FoR）较大，即便某轨位下卫星FoR内有人口，其仰角可能过低而无法在95%时间内完成链路建立。然而，Telesat与SpaceX无需实现100%覆盖，因为其ISL可以将数据转发至处于覆盖区内的卫星。

需注意的是，实现对需求区的100%覆盖并不意味着可达最大系统容量，因为部分地面站可能因仰角过低而通信性能较差。反之，覆盖区域未达100%并不意味着系统吞吐量受限，因为卫星可通过ISL在星座内进行数据转发。因此，图11展示了三套系统中系统总吞吐量与地面站数量之间的关系。图中，实线表示平均值（随时间变化），阴影区域表示四分位带（即系统在25%-75%时间段内的吞吐范围）。Telesat与SpaceX分别考虑了5/10/20 Gbps的ISL数据速率，用橙色、绿色与蓝色表示；紫红色曲线代表无ISL配置。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-12.jpg?height=378&width=1663&top_left_y=227&top_left_x=238){width="400"}
  
图11. 系统总前向容量 vs 地面站位置数量：a) Telesat，b) SpaceX，c) OneWeb；d) 若OneWeb支持光学ISL（OISL）所达容量。括号内为每站点最多网关天线数。

从图中可以看出，OneWeb、Telesat 和 SpaceX 星座的最大总系统吞吐量分别为 1.56 Tbps、2.66 Tbps 和 23.7 Tbps。此外，SpaceX 是最受益于 ISL 的系统，同时也是为了达到最大容量所需地面站数量最多的系统（共123个），这与其庞大的星座规模有关。值得注意的是，尽管OneWeb的最大容量较低，但其所需地面站数量（71）却高于Telesat（42）。图11(d)展示了如果OneWeb添加ISL后（每星配置4条ISL，其中2条轨道面内，2条跨面），其地面段需求显著下降。即使ISL数据速率仅为5 Gbps，系统也能仅用27个地面站实现最优性能。

下表（表7）列出了不同地面站与网关配置下，各系统的系统总吞吐量（单位Tbps）。在合理设定最大天线数的前提下，若地面段部署50个地面站，则OneWeb可达1.47 Tbps，Telesat与SpaceX分别为2.65 Tbps与16.78 Tbps。

表7：不同地面站/网关配置下的系统总吞吐量估计（Tbps）

![](https://cdn.mathpix.com/snip/images/HPYt5J8_kLqKBbgNKqU-3uumI7XfipwMGJLWvRDwN5M.original.fullsize.png){width="400"}


$N_{G S}$：地面站数量。括号内为每站点最多网关天线数。$\dagger$ 为假设性场景（因OneWeb系统无ISL）。

尽管OneWeb系统的卫星数量远多于Telesat，其总容量却反而较低，原因如下：

- **频谱使用策略**：如2.4.2节所述，OneWeb星座在Ku波段仅使用一种极化方式，且复用因子为2，这导致其下行链路可用带宽低于Telesat与SpaceX。下行链路是OneWeb系统的主要瓶颈；
- **轨道配置与LoS卫星数量**：如2.4.1节所示，Telesat与SpaceX倾向于集中卫星于地球人口稠密区域，而OneWeb采用极轨运行模式，导致其卫星长时间飞越人烟稀少区域。高需求区域能更好地被Telesat与SpaceX覆盖；
- **波束早期饱和**：由于OneWeb缺乏动态资源分配能力，部分波束在整颗卫星未饱和前已被用尽，造成需求丢失；
- **缺乏ISL链路**：没有ISL使得OneWeb卫星在地面站数量较少时难以将数据下传。从表7可知，若添加ISL，则在地面站数量为30、50和65的情况下，其系统总容量将分别比无ISL情形高出约10%、6%与1%。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-12.jpg?height=353&width=1245&top_left_y=2092&top_left_x=439){width="400"}
  
图12. 系统总吞吐量 vs 网关天线数量：a) OneWeb，b) Telesat，c) SpaceX。

如前所述，OneWeb系统的主要性能瓶颈在于卫星至用户的下行链路，这也是其整体性能偏低的根本原因。表8展示了各星座在前向链路方向上，平均及峰值每颗卫星的数据速率，分别考虑网关至卫星与卫星至用户的链路。Telesat与SpaceX均配备数字有效载荷（支持解调与再调制），因此这两部分链路可独立评估。三者间的平均数据速率差异显著：Telesat由于使用双网关天线，其卫星平均速率接近36 Gbps；SpaceX约为20 Gbps（FCC报告中为17-23 Gbps [19]）；OneWeb为8.8 Gbps（此前报告为每星8 Gbps）。这种差异主要源于系统瓶颈不同：Telesat与SpaceX受限于网关上行链路，而OneWeb受限于用户下行链路。前两者大部分时间可采用最高效MODCOD（256APSK），而OneWeb的用户链路最多支持32-APSK。

表8：每颗卫星最大与平均数据速率估计

![](https://cdn.mathpix.com/snip/images/5ok35bz6wuR64j3FJaB1NDHtBWOnxheO0RErlgxXqs8.original.fullsize.png){width="400"}



如果我们参考图12中展示的“网关天线数量 vs 吞吐量”分析，可以观察到，为支持最大系统总吞吐量，三大星座所需的网关天线数量分别为：SpaceX为3,500（假设ISL数据率为20 Gbps）、Telesat为220（ISL为10 Gbps）、OneWeb为800。正如预期，这一数量高度依赖于卫星数量。从图中可以得出两个主要结论：

1. **SpaceX系统是从使用ISL中受益最大者**，而Telesat则受益最小（因其星座中卫星数量较少）；
2. **SpaceX系统在超过2,500个网关天线后，其系统容量趋于平缓**（以20 Gbps ISL计），说明即使减少部分天线数量，其系统吞吐量影响不大，仅下降约 $6\%$，这表明其具有显著的网关配置节省潜力。

此外，值得注意的是，**如果OneWeb选择部署ISL**，其系统潜力将显著提升：在500个网关的配置下，其总容量可由1.2 Tbps增至1.6 Tbps，提升 $33\%$。若不使用ISL，要实现同样的1.6 Tbps容量，则需800个网关。

图13展示了Telesat与OneWeb系统中“地面站数量、网关天线数量与系统吞吐量”的关系。可见：

- 对Telesat而言，系统容量主要受网关天线数量驱动（在横轴方向吞吐量变化较小）；
- 而对OneWeb，其吞吐量同时受天线数量与地面站位置数量影响。

![](https://cdn.mathpix.com/cropped/2025_10_16_145aa8e48df725b6322ag-13.jpg?height=310&width=798&top_left_y=1485&top_left_x=1092){width="400"}
  
图13. 系统容量 vs 地面站数量与网关天线数量：a) Telesat；b) OneWeb。

最后，表9汇总了本文中展示的主要结果。比较这三套系统的效率（即每颗卫星的平均吞吐量 vs 最大吞吐量）颇具意义。从这一角度来看，Telesat的效率最高：每颗卫星平均22.74 Gbps，占其最大单星速率的 $58.8\%$；SpaceX与OneWeb分别为5.36 Gbps和2.17 Gbps（占最大值的 $25.1\%$ 和 $21.7\%$）。Telesat之所以具有更高效率，主要得益于两个架构性设计决策：

- 卫星上配置了双网关天线；
- 用户侧最小仰角更低。

表9底部还展示了一个假设性场景：三套系统均部署50个地面站。在此设定下：

- SpaceX系统吞吐量将下降 $30\%$ 至16.5 Tbps；
- OneWeb系统下降 $6\%$ 至1.47 Tbps；
- 而Telesat系统不受影响（因其最多仅需40个地面站即可实现最大容量）。

表9：三套系统结果汇总

![](https://cdn.mathpix.com/snip/images/S6i65V6Ov2Y2eVYawmlNiOpqgEK0tGmJdS6HJWhlwQ0.original.fullsize.png){width="400"}


---

## 5. 技术挑战（Technical challenges）

本节介绍了在这些系统真正投入运行前必须克服的五项技术挑战：

### 5.1 干扰协调（Interference coordination）

鉴于每个星座中部署的卫星数量庞大，“排队事件”（in-line events）干扰的协调将成为关键问题。此类干扰可能发生于：

- 非地球同步轨道卫星（NGSO）与地球同步轨道卫星（GSO）之间（例如LEO卫星越过赤道并朝地球中心指向波束）；
- 不同星座中两个相邻NGSO卫星，其波束指向同一位置且使用相同频段。

针对NGSO-GSO干扰，不同提案采取了不同的缓解策略：

- OneWeb提出使用卫星俯仰角渐变控制配合波束选择性关闭；
- SpaceX与Telesat则依赖波束可定向、可成形能力，并利用赤道地区用户通常可见多个卫星的特点。

目标都是确保LEO波束与GSO波束之间保持最小角度间隔（称为最小判别角）。

在NGSO-NGSO排队事件中，根据频谱分配，OneWeb与SpaceX用户下行波束之间可能发生干扰，OneWeb、SpaceX与Telesat之间的网关波束（上行与下行）也可能互相干扰。Telesat系统因使用Ka波段，其用户波束也可能干扰到其他系统的网关链路。在这类事件中，相关公司需协调应对，通过不同频段、波束关闭或频谱切分来缓解干扰。Telesat与SpaceX设计中已包含干扰规避机制（如多卫星LoS、波束可转向/可成形、动态频宽分配），而OneWeb由于架构较为刚性，协调中只能被动配合。

### 5.2 动态资源管理（Dynamic resource management）

SpaceX与Telesat将采用具有高度灵活性的数字有效载荷，既可用于干扰规避，也能提升单星吞吐量，将资源分配给高需求区域的波束。由于系统环境（轨位、干扰、需求、大气衰减等）变化快速，且涉及大量波束与卫星，因此需要研发先进的动态资源管理（DRM）算法。

此外，因多个卫星需协调以实现用户无缝覆盖同时避免互扰，部分DRM算法必须在具备全星座状态感知的地面控制中心运行，另有部分算法需在每颗卫星本地运行，以应对快速变化的运行环境。

### 5.3 发射计划（Launch schedule）

三套系统将共计向LEO轨道发射超过5,000颗卫星。这将需要约100-150次专用火箭发射，集中在未来4年内，显著高于现有全球年均发射次数（2017年全球共91次发射，其中18次为Falcon 9，15次为Soyuz）。因此，需要显著提升全球火箭发射能力。

尽管截至撰写时，三家公司均已制造测试卫星（SpaceX与Telesat已于2018年初发射），但能否按计划完成设计与批量制造仍不确定。部分公司已宣布推迟原定发射与运营启动时间。

### 5.4 系统运维（System operations）

巨型星座带来新的运维挑战，包括碰撞规避与退役处置。地面系统需持续监测、跟踪与控制数百颗卫星，并与其他航天器运行单位协调（避免共轨飞行带来的碰撞风险）。此外，还需实时获取所有NGSO卫星的遥测数据、内部状态与链路状况，这对自动化水平提出更高要求，超越当前主流运控系统。

### 5.5 用户终端（User terminals）

能以可接受成本跟踪LEO卫星的用户终端是大规模应用的关键，也是系统商业成功的核心因素。传统LEO宽带网络依赖昂贵的动平台天线（常为双天线以保障连续覆盖），限制其用户群体仅限于高端企业客户。

电控平板天线被视为此领域的关键突破技术，尽管尚不明确当星座投入运营时是否能以目标价位实现量产。从终端设计角度来看，Telesat系统的要求最严苛，其天线需在最低 $20^{\circ}$ 仰角下工作（SpaceX为 $40^{\circ}$，OneWeb为 $55^{\circ}$）。


## 6. 结论（Conclusions）

本文对三大低轨宽带星座系统的技术架构进行了比较，旨在为实现全球宽带服务提供评估参考。在介绍了各系统的空间段与地面段架构之后，我们对每一星座的若干关键技术方面进行了详细对比分析。随后，我们提出了一种方法，分别用于：a）确定各系统地面段所需地面站与网关的数量；b）基于统计方法估算系统的总吞吐能力。最后，我们强调了系统正式运行前必须克服的几项关键技术挑战，包括干扰协调、动态资源管理、发射节奏与系统运维等问题。

本研究的主要结论可总结如下：

- OneWeb、Telesat 与 SpaceX 星座的最大系统总吞吐量（可销售容量）分别为 1.56 Tbps、2.66 Tbps 和 23.7 Tbps；
- Telesat 仅需部署 42 个地面站即可承载其全部容量，而 OneWeb 至少需要 71 个，SpaceX 则超过 123 个；
- 就卫星效率而言（定义为每颗卫星平均数据率与其最大数据率之比），Telesat 显著优于其他两个系统（约 $59\%$，对比 SpaceX 的 $25\%$ 与 OneWeb 的 $22\%$）。这主要得益于：a）每颗卫星配置双激活网关天线；b）其用户链路所需最小仰角较低；
- OneWeb 系统的吞吐量低于 Telesat，尽管其卫星数量显著更多。其原因在于：单星数据率较低，这是由于OneWeb采用了低复杂度卫星设计、保守的频谱使用策略、轨道配置与载荷设计，以及未部署卫星间链路（ISL）；
- 如果OneWeb星座采用ISL，即使其数据率仅为 5 Gbps，也可以将所需地面站数量减少一半以上，仅需部署 27 个地面站。

综上分析，三大星座体现了截然不同的技术策略：

- **OneWeb** 侧重于“抢占市场先机”（first-to-market），追求风险最小化与简洁的空间段架构，因此牺牲了吞吐能力；
- **Telesat** 的策略则聚焦于高性能卫星与系统灵活性（涵盖部署灵活性、定向容量分配、数据转发等多个维度），这虽带来更高的系统复杂度，但实现了更高效的资源利用；
- **SpaceX** 的系统则以规模取胜：虽然单颗卫星复杂度并不显著高于 Telesat，但其庞大的星座规模与地面设施数量使得系统整体风险与运维复杂性大幅提升。

---

## 致谢（Acknowledgements）

本研究得到了 Facebook Inc. 的资助。本文内容并不代表 Facebook Inc. 的官方立场，文中所有观点与信息的责任完全由作者承担。


## References

[1] Ashford, E.W., 2004. Non-Geo systems-where have all the satellites gone? Acta Astronautica, 55(3-9), pp.649-657.
[2] Christensen, C. and Beard, S., 2001. Iridium: failures \& successes. Acta Astronautica, 48(5-12), pp.817-825.
[3] Sturza, M.A., 1995, February. The Teledesic Satellite System: Overview and design trades. In Proceedings of the Annual Wireless Symposium (pp. 402-409).
[4] Patterson, D.P., 1998, March. Teledesic: a global broadband network. In Aerospace Conference, 1998 IEEE (Vol. 4, pp. 547-552). IEEE.
[5] Leopold, R.J., 1992, November. The Iridium communications systems. In Singapore ICCS/ ISITA'92.'Communications on the Move' (pp. 451455). IEEE.
[6] Leopold, R.J., 1991, June. Low-earth orbit global cellular communications network. In Communications, 1991. ICC'91, Conference Record. IEEE International Conference on (pp. 1108-1111). IEEE.
[7] Wiedeman, R., Salmasi, A. and Rouffet, D., 1992, September. Globalstar-Mobile communications where ever you are. In 14th International Communication Satellite Systems Conference and Exhibit (p. 1912).
[8] Comparetto, G. and Hulkower, N., 1994. Global mobile satellite communications-A review of three contenders. In 15th International Communications Satellite Systems Conference and Exhibit (p. 1138).
[9] Dumont, P., 1996. Low earth orbit mobile communication satellite systems: A two-year history since WARC-92. Acta Astronautica, 38(1), pp.69-73.
[10] Evans, J.V., 1997. Satellite systems for personal communications. IEEE Antennas and Propagation Magazine, 39(3), pp.7-20.
[11] Evans, J.V., 1998, March. Proposed US global satellite systems operating at Ka-band. In Aerospace Conference, 1998 IEEE (Vol. 4, pp. 525-537). IEEE.
[12] Evans, J.V., 2000. The proposed Ku-band non geostationary communication satellite systems. Acta Astronautica, 47(2-9), pp.171-182.
[13] Shaw, G.B., Miller, D.W. and Hastings, D.E., 1999. The generalized information network analysis methodology for distributed satellite systems (Doctoral dissertation, Massachusetts Institute of Technology, Dept. of Aeronautics and Astronautics).
[14] Le May, S., Gehly, S., Carter, B.A. and Flegel, S., 2018. Space debris collision probability analysis for proposed global broadband constellations. Acta Astronautica.
[15] Foreman, V.L., Siddiqi, A. and De Weck, O., 2017. Large Satellite Constellation Orbital Debris Impacts: Case Studies of OneWeb and SpaceX Proposals. In AIAA SPACE and Astronautics Forum and Exposition (p. 5200).
[16] McLain, C. and King, J., 2017. Future Ku-Band Mobility Satellites. In 35th AIAA International Communications Satellite Systems Conference (p. 5412).
[17] Telesat Canada, Telesat Ka-band NGSO constellation FCC filing SAT-PDR-20161115-00108, Available at http://licensing.fcc.gov/myibfs/forwardtopublictabacti
on.do?file_number=SATPDR2016111500108 (2018/09/12).
[18] WorldVu Satellites Limited, OneWeb Ka-band NGSO constellation FCC filing SAT-LOI-20160428-00041, Available at http://licensing.fcc.gov/myibfs/forwardtopublictabaction. do?file_number=SATLOI2016042800041 (2018/09/12).
[19] Space Exploration Holdings, LLC, SpaceX Ka-band NGSO constellation FCC filing SAT-LOA-2016111500118, Available at http://licensing.fcc.gov/myibfs/forwardtopublictabacti on.do?file_number=SATLOA2016111500118 (2018/09/12).
[20] WorldVu Satellites Limited, OneWeb Ka-band NGSO constellation expansion FCC filing SAT-MOD-20180319-00022, Available at http://licensing.fcc.gov/myibfs/forwardtopublictabaction. do?file_number=SATMOD2018031900022 (2018/09/12).
[21] Hanson, W.A. ed., 2016. In their own words: OneWeb's Internet constellation as described in their FCC form 312 Application. New Space, 4(3), pp.153-167.
[22] The Wall Street Journal, SoftBank to invest around $\$ 500$ million more in OneWeb satellite-Internet venture, Available at https://www.wsj.com/articles/ softbank-to-invest-around-500-million-more-in-oneweb-satellite-internet-venture-1512990003 (2018/09/12).
[23] The New York Times, Google and Fidelity Put \$1 billion into SpaceX, Available at https://www.nytimes.com/2015/01/21/technology/google-makes-1-billion-investment-in-spacex.html (09/12/2018)
[24] del Portillo, I., 2017, ITU-Rpy: A python implementation of the ITU-R P. Recommendations to compute atmospheric attenuation in slant and horizontal paths, GitHub, Available at https://github.com/iportillo/ITU-Rpy/
[25] ITU, 2017, Propagation data and prediction methods required for the design of earth-space telecommunication systems, Recommendation ITU-R 618-13.
[26] Digital Video Broadcasting (DVB), 2014, Second generation framing structure, channel coding and modulation systems for broadcasting; Part2: DVB-SE extensions (DBVS2X), Tech. Rep., 6.
[27] C. CIESIN, 2005, Gridded population of the world version 4 (GPWv4): population density grids, Palisades, Socioeconomic Data and Applications Center (SEDAC), Columbia University.
[28] del Portillo, I., Cameron, B. and Crawley, E., 2018, March. Ground segment architectures for large LEO constellations with feeder links in EHF-bands. In 2018 IEEE Aerospace Conference (pp. 1-14). IEEE.
[29] Selva, D., Cameron, B. and Crawley, E., 2016. Patterns in system architecture decisions. Systems Engineering, 19(6), pp.477-497.
[30] Deb K., Pratap A., Agarwal S., and Meyarivan T., 2002, A fast and elitist multiobjective genetic algorithm: NSGAII, Evolutionary Computation, IEEE Transactions on, vol. 6, no. 2, pp. 182-197.

