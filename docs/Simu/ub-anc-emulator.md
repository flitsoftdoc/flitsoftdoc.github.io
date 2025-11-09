# UB-ANC Emulator 

**Simulating unmanned aerial vehicle swarms with the UB-ANC Emulator 

Jalil Modares, Nicholas Mastronarde and Karthik Dantu

Received 15 September 2018; accepted 17 February 2019

#### 摘要

近年来，多旋翼飞行器控制以及硬件、小型化传感器与电池技术的进步，使得面向民用与爱好者应用的微型飞行器设计变得廉价且实用。与此同时，已有多个应用设想将多个联网微型飞行器组合为蜂群，以协同完成大型任务。然而，同时部署多个微型飞行器仍面临巨大挑战。为应对这一挑战，我们开发了一个开放的软件/硬件平台，称为纽约州立大学布法罗分校的空中网络与通信测试平台（University at Buffalo's Airborne Networking and Communications Testbed，UB-ANC），以及一个相关的仿真框架——UB-ANC Emulator。在本文中，我们介绍了 UB-ANC Emulator，该系统结合了多架微型飞行器的规划与控制功能与高保真网络仿真能力，使研究者能够在软件中设计微型飞行器蜂群应用，并实现向实际硬件部署的无缝过渡。我们通过两个任务场景中收集的实验数据，展示了 UB-ANC Emulator 的准确性：一个是包含三架联网微型飞行器的简单任务，另一个是涉及单架微型飞行器的复杂覆盖路径规划任务。

为了准确反映在通信链路易受干扰与丢包影响的条件下，数据链路层、网络层和传输层协议对网络吞吐率、时延和可靠性的影响，我们将开源的离散事件网络仿真器 ns-3 集成进 UB-ANC Emulator 中。我们通过节点到节点以及端到端的测量演示了 UB-ANC Emulator 如何用于仿真多个联网微型飞行器，并精确建模其运动控制、无线信道特性以及由 ns-3 定义的网络协议。



## Keywords

Unmanned aerial vehicle swarms, multi-agent planning and control, wireless networks, emulation, ns-3, MAVLink



## 引言

微型飞行器（Micro-Aerial Vehicle，MAV）蜂群有望在诸多应用领域实现突破，包括监视、应急响应、包裹投递、环境监测以及精准农业。然而，设计与部署多个联网MAV面临诸多跨学科挑战${ }^{1}$，因为通信与网络问题无法独立于多智能体规划与控制问题进行研究。不幸的是，目前尚无适合研究人员使用的测试平台框架，以便在仿真中全面研究这些问题并轻松过渡到实际实验。为填补这一空白，我们在过去几年中开发了纽约州立大学布法罗分校的空中网络与通信测试平台（University at Buffalo’s Airborne Networking and Communications Testbed，UB-ANC）${ }^{2,3}$。UB-ANC${ }^{\mathrm{a}}$ 是一个灵活且低成本的多智能体空中网络与通信研究平台，结合了具备自主飞行能力的飞行器以及：(i) 复杂的指挥与控制功能；(ii) 支持常见无线通信标准（如 IEEE 802.11 (Wi-Fi) 和 IEEE 802.15.4 (Zigbee)）或基于软件定义无线电实现的自定义协议的实验能力。

尽管实际系统实现对于展示和评估空中网络在真实环境中的性能至关重要${ }^{4-6}$，但针对多个联网无人机蜂群开展野外测试仍存在诸多困难。从技术角度来看，每架无人机上的系统与软件（包括网络协议栈、任务规划算法以及飞控系统）都非常复杂，开发与集成过程需要大量测试以确保其正确运行。虽然各组件可独立测试，但完整集成系统仍需在野外环境中验证。然而：

- 进行野外测试需要多架具备飞行能力的无人机。这并非总是可行，因为无人机需要频繁且耗时的维护，尤其是在大量实验时。
- 野外测试需要良好的天气条件（无雨、低风速等）。
- 野外测试需要经过培训的专业人员以确保安全并满足美国联邦航空管理局（FAA）第107部分的规定${ }^{\text{b}}$。
- 大多数无人机（即多旋翼机型）的电池寿命有限（$<30\mathrm{~min}$），这要求在实验过程中准备大量电池并频繁充电。

一种常用的缓解部署难题的方式是使用仿真/模拟（simulation/emulation）。目前已有多个仿真器可应对部分上述挑战。机器人仿真软件包能够在真实物理条件下仿真单架无人机，但同时仿真多架无人机仍较为困难。网络仿真器则支持无线网络仿真，但不便于同时模拟网络、任务规划与控制之间的交互。我们考察了多种可能的方案，发现很难组合出一套既能在仿真中测试无人机网络应用又能轻松迁移到实际部署的工具集。

为应对上述挑战并填补现有工具的空白，我们开发了 UB-ANC Emulator${ }^{7,8}$，这是一种结合多MAV规划与控制以及高保真网络仿真的仿真框架，可实现向真实无人机的无缝过渡。UB-ANC Emulator 的主要特性如下：

- UB-ANC Emulator 基于开源软件组件设计，来源于流行的业余无人机运动，因此可轻松适配多种现成或自制无人机；
- 它采用与真实无人机相同的软件体系，包括任何任务规划算法、飞控器的软件在环仿真（Software-in-the-Loop, SITL）、与飞控通信的协议与应用程序接口（Micro Air Vehicle Communication Protocol, MAVLink${ }^{9}$）以及用于网络数据收发的API；
- 它具备与真实无人机相同的数据记录功能，并支持通过开源地面控制站（如 APM Planner${ }^{10}$ 和 QGroundControl${ }^{11}$）进行实时可视化监控；
- 它设计为模块化和可扩展结构，可轻松扩展以集成其他网络要素、规划算法、传感器及使用 MAVLink 协议的飞控；
- 它提供了集成高保真网络仿真器的API。我们通过该API将离散事件网络仿真器 ns-3 ${}3^{12}$ 集成至仿真系统；
- 尽管本文主要聚焦于四旋翼仿真，UB-ANC Emulator 也可仿真任何兼容 MAVLink 的载具，包括固定翼、直升机、多旋翼、地面车、船舶和潜艇；
- UB-ANC Emulator 作为开源项目发布于：https://github.com/jmodares/UB-ANC-Emulator。

本文其余部分的结构如下：下一节讨论相关工作；在“软件架构”一节中，我们描述 UB-ANC Emulator 的软件体系结构；随后展示其精度验证；“网络仿真器集成”一节介绍用于集成网络仿真器的API，并以 ns-3 为例进行演示；之后一节对网络仿真集成进行验证；最后一节给出结论。

## 相关工作

部署与实验 MAV 蜂群需要掌握多个领域的知识，包括多智能体系统、机器人学以及移动自组网与无线网络。各领域的研究都受益于功能强大的仿真环境。

多智能体系统的研究已持续数十年，重点在于建模协调与蜂群行为。Swarm 与 MASON 支持上百个智能体及其交互的仿真。Swarm${ }^{13}$ 创建于20世纪90年代初，是蜂群研究的开端。MASON${ }^{14}$ 由Java编写，分为建模与可视化模块，支持运行时的动态挂载与卸载，使算法开发者能够方便地调试蜂群应用。Simbeeotic${ }^{15}$ 利用 JBullet 物理引擎对MAV蜂群进行全物理仿真，并已展示多个多无人机应用。开源航空多智能体仿真环境（OpenAMASE${ }^{\text{c}}$）允许对多架无人机进行指挥与控制。AMASE 中的无人机具备仿真自动驾驶仪，可搭载云台或固定传感器。该平台支持目标探测的仿真覆盖分析，并包含地形遮蔽条件下的视线计算。上述平台均可支持大规模智能体仿真，但在使用前需建立飞行器模型，因此难以直接模拟现成无人机。此外，这些平台不支持从仿真到真实无人机部署的无缝过渡。并且，大多数多智能体系统仿真器不支持高保真网络仿真，尽管无线信道本质上是不可靠（有损）的，这种通信失败可能导致系统严重后果${ }^{16,17}$。

学术界与工业界对机器人各方面的研究兴趣浓厚，而大量研究依赖于强大的仿真支持。2000年代，Player-Stage${ }^{18}$ 是最早支持在机器人上与仿真中运行相同控制器的仿真器之一。Stage 是一个2.5D仿真引擎，提供真实物理仿真。ROS${ }^{19}$ 将 Player-Stage 的控制节点间通信架构从客户端-服务器模式演进为对等分布式架构。ROS 随附 Gazebo${ }^{20}$，一个具备完整6自由度物理仿真的真实3D仿真器。这些系统为机器人算法提供了优秀的仿真/模拟平台，但当仿真机器人数量增加时，因全物理仿真复杂性，仿真时间显著增长，难以同时仿真数十至上百个智能体。此外，机器人仿真器通常不支持高保真网络仿真。

有线与无线网络的诸多进展源于仿真工具。ns-2$^{21}$ 与 ns-3$^{12}$ 是离散事件网络仿真器，十余年来广泛用于教学与科研。Opnet${ }^{22}$、Glomosim${ }^{23}$ 与 OMNet++${ }^{24}$ 也被用于无线网络研究与教育。这些仿真器有助于在网络协议栈不同层中进行协议原型设计与比较${ }^{25}$，并在理解空中网络中发挥了重要作用。Le 等${ }^{26}$ 在 OPNET Modeler v14.5 中仿真了一种适用于空中网络的可靠用户数据报协议。Namuduri 等${ }^{27}$ 探讨了空中网络的网络-物理特性，并使用 ns-2 研究了不同节点速度、跳数与密度下的平均路径持续时间。Javaid 等${ }^{28}$ 基于 OMNet++ 构建了 UAVSim 系统，用于分析无人机网络中的网络安全威胁。这些仿真器可实现真实的网络行为，包括排队特性、协议交互与信道建模。然而，它们无法精确建模节点物理运动及其动态特性，不支持真实的指挥控制，也无法实现从仿真到真实无人机实验的无缝过渡。

虽然已有多个平台涵盖 MAV 蜂群开发的部分方面，但我们的调研发现尚无平台能充分结合多MAV规划与控制与高保真网络仿真。我们认为，基于流行开源标准演进的飞行器平台的仿真/模拟能力将有助于实现快速、无缝、低成本的真实系统部署。UB-ANC Emulator 与 ns-3 的集成，正是我们弥合研究与实际系统部署之间差距的努力。

在我们先前的工作中，Modares 等${ }^{8}$ 展示了 UB-ANC Emulator 的演示版本，Modares 等${ }^{7,29}$ 分别重点研究了其行为与网络仿真功能，并在 Modares 等${ }^{30}$ 中使用该系统仿真了一种节能覆盖路径规划算法。本文在此基础上进行了汇总与扩展，提供了新的见解以及新的仿真与实验结果。


## 软件架构

图 1 展示了 UB-ANC Emulator 的高层架构图，其由三个主要组件构成：仿真引擎（Emulation Engine）、MAV 对象（MAV Object）与 UB-ANC 代理（UB-ANC Agent）。仿真引擎是整个仿真器的核心：它负责协调各项任务，并为每个被仿真的 MAV 实例化并管理一个 MAV 对象。每个 MAV 对象中包含一个 UB-ANC Agent，后者承载任务行为逻辑，并可直接在真实无人机上运行。每个 UB-ANC Agent 与三个其他模块交互：飞控器、网络服务器与传感器服务器。飞控器部分通过一个开源的 SITL 仿真器${ }^{31}$ 进行仿真。SITL 仿真器可与 APM Planner${ }^{10}$ 等开源 GUI 工具连接，以实现对被仿真 MAV 的可视化与监控。图 3 展示了 APM Planner 的可视化界面。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-04.jpg?height=558&width=1272&top_left_y=250&top_left_x=376){width="600"}
 
图 1. UB-ANC Emulator 的软件架构。

在详细介绍各个组件之前，我们首先强调其设计的关键特性：

- **模块化**：UB-ANC Emulator 被设计为模块化架构。每个组件有明确定义的任务，便于修改与调试。各模块间接口清晰，从而支持快速替换传感器行为、网络协议及飞控系统。
- **可扩展性**：图 1 中的模块均具备良好的可扩展性。接口的明确划分使得开发者可轻松创建适配新硬件的模块。例如，MAVLink 组件可修改以集成特定无人机的新行为。
- **易部署性**：UB-ANC Emulator 易于配置和运行。其采用 C++ 编写，并基于 Qt 跨平台开发框架，可部署于 Windows 和 Linux 等平台。在仿真中验证飞控器或任务规划算法后，可直接部署至真实无人机硬件，无需修改。
- **遵循主流开源标准**：UB-ANC Emulator 支持 MAVLink 协议的飞控系统，后者适用于多种自主飞行器类型，包括固定翼、直升机、多旋翼、地面车、船舶及潜艇。MAVLink 是一种广泛支持的开源标准，兼容 Pixhawk、NAVIO、ErleBrain 和 Intel Aero 等飞控器${ }^{\mathrm{d}}$。我们也利用了业余无人机社区开发的开源工具用于可视化与日志记录。

如上所述，UB-ANC Emulator 采用 C++ 编写，并基于 Qt 框架开发${ }^{\text{e}}$。我们选择 Qt 有以下几个原因：其便于维持模块化结构并分离功能组件；Qt 的信号与槽机制支持组件之间通过事件异步通信；多数 UB-ANC Emulator 所依赖的开源组件均基于 Qt；最后，Qt 使得该系统可方便地跨平台部署。

### UB-ANC Agent

UB-ANC Agent 包含五个组件：Agent 控制单元（ACU）、网络控制单元（NCU）、传感器控制单元（SCU）、MAVLink 控制单元（MCU）以及日志单元（LU）。ACU 是 UB-ANC 无人机的“中枢大脑”：其包含任务规划逻辑，并通过定义良好的 API 与以下模块交互：(i) NCU 与其他网络元素通信；(ii) SCU 与各类传感器通信；(iii) MCU 与飞控器通信；(iv) LU 记录状态信息。重要的是，UB-ANC Agent 可以在仿真与实机部署间无缝迁移，无需修改。以下为各组件详解：

**ACU**：负责无人机所执行的任务，包含决策逻辑以确定向飞控器（通过 MCU）发送的控制指令及向其他节点（通过 NCU）发送的信息。任务规划逻辑可基于本地状态与其他节点传输的信息进行决策。支持 GPS 控制的飞控器（如 Pixhawk）以 GPS 航点作为控制输入，ACU 的任务是决定访问的航点及其时序。

**MCU**：ACU 借助 MCU 向飞控器发送命令。MCU 使用 MAVLink 消息协议${ }^{9}$ 与飞控器进行通信，并支持多种连接方式（如 TCP 或串口），可兼容多种 MAVLink 飞控器。

**NCU**：ACU 通过 NCU 与其他 MAV 及地面站通信。MAV 可交换多种信息类型，包括感知数据与控制指令。每架 MAV 均能将命令与状态发送至网络中的其他 MAV，从而支持集中式与分布式任务规划算法。NCU 支持在不更改其他模块的前提下切换不同网络设备，支持对多种网络技术（如 Wi-Fi、Zigbee 或 GNU Radio 自定义接口）进行公平对比。

**SCU**：ACU 使用 SCU 读取传感器数据。当前支持定制传感器模块，用于测量系统部件（如电机）的电流消耗。未来将扩展支持距离传感器、摄像头等。

**LU**：即使只有一架无人机，实验中也涉及多个组件交互，若为多机协作任务，系统复杂性更高。日志记录对于调试与理解任务执行过程至关重要。每个 UB-ANC Agent 配有 LU，可记录与追踪诸多内部参数，包括 GPS 坐标、MAVLink 消息、飞行速度、信号强度（RSSI）、数据包信息（如ID、大小、源/目标）等。系统采用 Qt 的日志机制实现。

### MAV 对象

MAV 对象表示仿真中的一架 MAV。它包含 UB-ANC Agent 实例和 SITL 仿真器${ }^{31}$，后者通过 MAVLink 消息模拟飞控器与 UB-ANC Agent 的交互。此外，MAV 对象还创建网络服务器与传感器服务器组件。这些组件提供间接抽象，封装了网络与传感器元素，支持渐进式仿真。例如：我们可以仿真无人机行为，但将主机实际连接到真实无线网络上，从而支持真实网络实验与系统其余部分的仿真（见“可扩展性”一节）。同理，也可任意组合仿真与实测模块进行混合实验。在仿真中，MAV 对象内部还包含感知与通信的属性（如通信/感知范围、模型），并将其作为对象属性传递至仿真引擎，用于多机联动推理。

### 仿真引擎

仿真引擎是 UB-ANC Emulator 的中央调度模块。它负责实例化 MAV 对象（每架仿真 MAV 一份），管理 MAV 间的网络通信，以及执行仿真中各 MAV 的感知逻辑。依据 MAV 的位置与仿真设定，它决定在通信范围内（由对象属性与网络模式决定）的 MAV 之间传递消息，并将感知信息提供给个体 MAV。

### SITL

SITL${ }^{31}$ 仿真器是一个开源项目，支持在无硬件条件下运行多种载具类型（如多旋翼、固定翼与地面车）的飞行动力学模型。依据其连接的外部仿真器不同，可调整物理仿真程度，从而平衡仿真逼真度与计算代价。例如可连接商用飞行仿真器 X-Plane 10 实现完整物理仿真${ }^{\text{f}}$。该设计为仿真器提供了在可扩展性与精度间的灵活权衡能力。


## 无人机仿真评估

本节介绍我们为评估 UB-ANC Emulator 的**精度**与**可扩展性**所进行的实验与仿真。图 2 展示了用于实验的一架定制 UB-ANC 无人机特写，图 3 显示了连接至 APM Planner 的仿真器可视化界面。

评估仿真器的主要挑战在于确定其与真实情况的**一致性**。为此，许多机器人仿真器采用全物理仿真，但这会限制其在多机器人仿真中的可扩展性。我们的仿真器针对支持 MAVLink 协议的飞行器进行仿真。MAVLink 协议以事件为通信单位。作为精度指标，我们测量了 MAV 各事件间的时间间隔，并与仿真器中的对应时间进行比较。结果见“精度”小节。在“可扩展性”小节中，我们将两台 USRP 设备连接至仿真器，使其在两架仿真 MAV 间建立通信，以展示网络层扩展能力。在“其他参数仿真”小节中，我们测量真实无人机的能耗、飞行速度及气压高度数据，并与仿真结果对比，以验证 UB-ANC Emulator 对多种参数的仿真能力。最后，在“最小能量路径规划”小节中，我们展示了两种复杂路径规划算法的实验与仿真结果，以进一步验证仿真器的精度。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-06.jpg?height=370&width=816&top_left_y=1165&top_left_x=172){width="400"}
 
图 2. 一架 UB-ANC 无人机，配备定制机架、Pixhawk 飞控、Raspberry Pi 2 板、定制功率传感模块及 10,000mAh 电池。整机重量约 3 kg，可持续飞行约 30 分钟。

### 精度（Accuracy）

为验证 UB-ANC Emulator 相对于真实 MAV 实验的精度，我们在 UB 北校区部署了三架 UB-ANC 无人机（MAV），执行简单的“起飞—悬停—降落”任务，同时在 UB-ANC Emulator 中执行相同任务。任务从 MAV 1 解锁（arm）开始：MAV 1 起飞至 5 m 高度，向东飞行 5 m，悬停 20 s 后降落。当 MAV $i\in\{1,2\}$ 开始悬停时，它向 MAV $i+1$ 发送指令，使其以相同模式执行任务。我们重复该三机任务五轮。尽管 UB-ANC 无人机可执行更复杂任务，我们在此选用简单任务作示例；复杂任务将在“最小能量路径规划”小节中介绍。

图 4 对比了实验与仿真中测得的关键参数。时间 0 对应 MAV 1 解锁的时刻。图 4(a) 显示五轮实验与仿真中，各 MAV 的关键事件（ARM、LAND、DISARM）发生时刻的平均值（点标）与标准差（误差棒）。对 MAV 1 而言，ARM 表示电机启动准备起飞的时刻；对 MAV $i\in\{2,3\}$，ARM 包含以下四个事件序列：(i) MAV $i-1$ 发送任务指令给 MAV $i$；(ii) MAV $i$ 接收指令；(iii) MAV $i$ 启动电机；(iv) MAV $i$ 起飞。三架 MAV 的 LAND 表示启动自动降落模式的时刻，DISARM 表示降落后电机关闭，标志任务完成。图 4(b) 与 (c) 分别展示各 MAV 的经度偏移（相对起点）与相对高度（相对地面）随时间变化。由于任务期间纬度保持不变，因此未显示。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-06.jpg?height=695&width=1239&top_left_y=1776&top_left_x=392){width="600"}
 
图 3. UB-ANC Emulator 在 APM Planner 中的可视化界面。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-07.jpg?height=779&width=1355&top_left_y=247&top_left_x=376){width="400"}
 
图 4. 三机任务的实验与仿真对比。（a）事件—时间。（b）经度—时间。（c）高度—时间。

从图 4(a)–(c) 可见，仿真中事件普遍比实验存在额外延迟。为确定延迟来源，我们将飞行路径划分为四个阶段：解锁至起飞、起飞至峰值高度、水平飞行、降落至电机关闭。图 5 展示了单架 MAV 在各阶段的平均持续时间与标准差。结果表明，主要延迟来源于“解锁至起飞”阶段。我们认为实验中 MAV 起飞更快，主要由于所谓的**地效（ground effect）**，即螺旋桨在接近地面时能获得更高升力效率${ }^{32,33}$。该延迟在各 MAV 间基本恒定，可根据特定机型在仿真中修正。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-07.jpg?height=491&width=808&top_left_y=1149&top_left_x=1079){width="400"}
 
图 5. 实验与仿真间时间滞后的潜在来源（单机分析）。

表 1 给出了五轮实验与仿真数据的方差。由于仿真是确定性的，仿真事件时间的方差主要来自系统负载，几乎可忽略。实验方差虽略大，但考虑到风速变化、GPS 精度及飞控响应差异等多种随机因素，仍属合理。表 2 展示了实验与仿真平均值之间的均方误差（MSE），包括未修正与修正“解锁至起飞”延迟的情况。结果表明，在考虑时间滞后后，MSE 显著降低。这说明 UB-ANC Emulator 即使不进行全物理仿真，也能很好地逼近真实 MAV 实验结果。

**表 1.** 五轮实验与仿真测量的方差对比。

|  | MAV 1 | MAV 2 | MAV 3 |
| :--- | :--- | :--- | :--- |
| **事件方差** |  |  |  |
| 实验 | 0.5460 | 0.1365 | 0.3598 |
| 仿真 | 0.1082 | 0.0010 | 0.0009 |
| **经度方差** |  |  |  |
| 实验 | 0.0138 | 0.0450 | 0.0346 |
| 仿真 | 0.0133 | 0.0085 | 0.0252 |
| **高度方差** |  |  |  |
| 实验 | 0.0281 | 0.0386 | 0.0474 |
| 仿真 | 0.0119 | 0.0017 | 0.0013 |

MAV：micro air vehicle（微型飞行器）

**表 2.** 实验与仿真平均测量值的均方误差（MSE），含“未修正”与“修正”解锁至起飞延迟两种情况。  

|  | MAV 1 | MAV 2 | MAV 3 |
| :--- | :--- | :--- | :--- |
| **事件 MSE** | 2.8070 | 3.3644 | 2.8117 |
| **经度 MSE** |  |  |  |
| $\quad$测量| 0.3501 | 0.2286 | 0.1736 |
| $\quad$修正 | 0.1478 | 0.0085 | 0.0329 |
| **高度 MSE** |  |  |  |
| $\quad$测量 | 0.4678 | 0.5536 | 0.5065 |
| $\quad$修正 | 0.0463 | 0.0468 | 0.0317 |
| **时间偏移** | 1.9937 | 1.7487 | 1.8305 |



### 可扩展性（Extensibility）

为了展示 UB-ANC Emulator 的可扩展性，我们设置了一个包含五架 MAV 的“领航-跟随（leader-follower）”任务，其中 MAV 1 与 MAV 2 通过两台 USRP N210 软件定义无线电进行通信，其余 MAV 则通过仿真方式通信。在该任务中，MAV $i+1$ 以 MAV $i \in\{1,2,\ldots,4\}$ 为目标，保持 10 米跟随。MAV $i$ 每隔 100 毫秒通过 74 字节的数据包将其 GPS 位置发送给 MAV $i+1$。图 6 展示了该任务的系统设置${ }^{8}$。我们在“网络仿真器集成”一节中还将进一步演示其与 ns-3 的高保真网络仿真集成能力。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-08.jpg?height=351&width=816&top_left_y=250&top_left_x=1033){width="400"}
 
图 6. UB-ANC Emulator 中两架 MAV 通过 USRP N210 软件无线电进行通信。

### 其他参数仿真（Simulating other parameters）

为进一步展示该仿真器的灵活性与实用性，我们仿真了三类传感器值，并与真实实验数据进行了对比。所有图表展示的是单架无人机执行“起飞—悬停—降落”任务五次实验后的平均值。图 7(a) 显示了无人机四个电机的平均总电流，由定制的电流传感器模块测得，该数据可用于能量敏感型应用。例如在“最小能量路径规划（MEPP）”一节中，我们展示如何利用该信息进行能耗优化路径规划。图 7(b) 与 (c) 分别显示飞行速度与气压变化（以地面为 0）。如“精度”部分所示，仿真与实验结果基本一致，存在微小时间滞后。图 7(c) 中，在第 13 秒左右，真实无人机气压出现尖峰，与图 4 中无人机高度的下降一致，推测是螺旋桨尾流影响了气压传感器读数所致。

### 最小能量路径规划（MEPP）

利用上述电流传感器模块，我们测量了飞行中无人机的能量消耗如何随飞行距离与转弯角度变化${ }^{30}$。基于图 2 所示无人机，测得能量消耗与飞行距离近似线性相关（$0.1164\ \mathrm{J}/\mathrm{m}$），与转向角度近似线性相关（$0.0173\ \mathrm{J}/\mathrm{deg}$）。尽管具体数值取决于飞行器与飞控器，但我们在多种 Pixhawk 四旋翼测试中均观察到类似趋势。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-09.jpg?height=368&width=1485&top_left_y=241&top_left_x=311){width="600"}
 
图 7. 电流、电压和气压的仿真与实验对比。(a) 电机电流 (A)。(b) 速度 (m/s)。(c) 气压变化 (Pa)。

基于线性能耗模型，我们构建了一个 MEPP 问题${ }^{30}$，目标是为单架无人机在包含障碍区域中寻找最小能耗路径。该问题类似旅行商问题（TSP），但优化目标中额外包含了转弯代价。我们基于 TSP 中的 Lin-Kernighan Heuristic（LKH${ }^{34}$）进行了改造，形成适用于无人机的 LKH-D 算法${ }^{30}$。我们将其与 Barrientos 等人提出的带回溯的深度限制搜索算法（DLS${ }^{35}$）进行对比，用于覆盖 UB Stadium 区域。该区域被划分为 $8\times15$ 网格，并设置虚拟障碍。若无人机飞越某网格中心，则该格被认为“已覆盖”；所有无障碍格均访问后，认为区域被完全覆盖。飞行目标速度设为 $5\ \mathrm{m}/\mathrm{s}$。图 8(a)/(c) 分别展示 APM Planner 中的 DLS 与 LKH-D 路径规划，任务起点位于右上角，路径最终回到起点${ }^{\text{h}}$。

观察表明，LKH-D 所规划路径转弯更少，飞行更高效。无人机可更快完成覆盖，降低能耗。实验中，LKH-D 比 DLS 总能耗降低约 $25\%$，仿真中能耗降低约 $22\%$，表明 UB-ANC Emulator 对 MEPP 问题仿真具有较高准确性。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-09.jpg?height=714&width=1685&top_left_y=780&top_left_x=218){width="600"}
 
图 8. UB Stadium 的卫星视图与路径规划结果。虚拟障碍以斜线阴影表示。(a) DLS 规划路径，(b) DLS 实验路径，(c) LKH-D 规划路径，(d) LKH-D 实验路径。

**表 3.** 最小能量路径规划（MEPP）仿真与实验结果对比。

| 指标 | 算法 |  |  |  |
| :--- | :--- | :--- | :--- | :--- |
|  | DLS |  | LKH-D |  |
|  | 仿真 | 实验 | 仿真 | 实验 |
| 能量 (kJ) | 118.38 | 111.1 | 92.56 | 83.9 |
| 距离 (m) | 1043.8 | 1044.1 | 994.1 | 996.4 |
| 转弯总角度 (deg) | 2970 | 2970 | 1620 | 1620 |
| 飞行时间 (s) | 389.5 | 391.6 | 291.1 | 293.7 |
| 平均速度 (m/s) | 2.67 | 2.66 | 3.41 | 3.39 |

DLS：深度限制搜索；LKH-D：无人机适配的 Lin-Kernighan 启发式算法

## 网络仿真器集成（Network simulator integration）

默认情况下，UB-ANC Emulator 提供了简单的网络仿真功能，节点只要在通信范围内即可互联。但该方式无法准确模拟 MAV 网络在面对链路干扰与丢包时的表现，同时也无法考虑数据链路层、网络层与传输层协议对吞吐、延迟与可靠性的影响。为克服此限制，我们可自行开发网络仿真器，或集成现有方案。结合“相关工作”中的讨论，我们最终选择了广泛应用于测试平台的 ns-3 网络仿真器。当然，同样的方法也适用于集成其他仿真器，如 EMANE${ }^{\text{i}}$。

将 ns-3 集成至 UB-ANC Emulator 中涉及多个挑战与设计选择，主要包括：

- **时钟同步**：ns-3 是事件驱动仿真器，处理队列中按仿真时间排序的事件。默认情况下，仿真时间与真实时间不同，仿真器会从一个事件直接跳到下一个。但 UB-ANC Emulator 按真实时间仿真 MAV 行为。
- **事件同步**：UB-ANC Emulator 以 MAVLink 事件控制 SITL 飞控器，每个 MAV 的事件在其 SITL 中独立处理，而网络仿真器具有自己的事件系统。这两者需频繁同步，需仿真器及时获知 UB-ANC 内相关事件。
- **网络行为同步**：UB-ANC Emulator 中的算法依赖网络协调，因此仿真器与网络仿真模块需进行行为同步，并处理通信失败或干扰等异常情况。

/// note | 本文的解决方案（理解1）
* **时钟同步**：将 ns-3 配置为**实时调度器**，把仿真时钟锁定到 CPU 实时时钟（以真实时间作为仿真时间），从而让 ns-3 的调度器与 UB-ANC Emulator 的调度器处于**同一时基**。

* **事件同步**：把 UB-ANC Emulator 中所有**相关事件**转发给网络仿真器，并公开三项接口以频繁对齐双方事件队列：
  `netDataReady()`（发送方 MAV 对象向网络仿真器交付待发数据包）、`netSendData()`（网络仿真器把已送达的数据包交给接收方 MAV 对象）、`globalPositionChanged()`（MCU 通知网络仿真器无人机位置更新）。这些接口既完成收发事件对接，也让网络仿真器随时掌握**机动性变化**。

* **网络行为同步**：在上述接口之上，设计了**端到端的数据与位置同步链路**：
  发送路径：ACU → NCU（`m_send_buffer`）→ IPC → MAV 对象 → 触发 `netDataReady()` → ns-3 按其协议栈转发；
  接收路径：ns-3 达到目的节点后调用 `netSendData()` → 目的 MAV 对象的网络服务器 → IPC → NCU → 触发 `dataReady()` → ACU 取包处理；
  位置同步：MCU 触发 `globalPositionChanged()` → 仿真引擎转发至 ns-3，使**连通性与链路质量评估**随位置实时一致。该机制也为**通信失败/外扰**情况下的异常处理提供了钩子与时序一致性保障；其正确性通过节点到节点与端到端测评（pcap/Wireshark 离线分析）得到验证。

///

/// note | 本文的解决方案（理解2）

根据该论文，UB-ANC Emulator 通过以下方式解决了将其与 ns-3 集成时遇到的三个主要挑战：

### 1. 钟同步 (Clock Synchronization)

为了解决 ns-3 的仿真时间与 UB-ANC Emulator 的真实时间不一致的问题，研究人员采取了以下措施：

* 他们将 ns-3 设置为使用**实时调度器** (real-time scheduler)。
* 该调度器将 ns-3 的仿真时钟与 CPU 时钟**锁定** 。
* 通过这种方式，**真实时间被设置为仿真时间** ，从而允许 UB-ANC Emulator 和 ns-3 两个调度器同步到同一个时钟 。

### 2. 事件同步 (Event Synchronization)

为了同步两个系统各自独立的事件队列，解决方案是将 UB-ANC Emulator 中的所有相关事件转发到网络仿真器 。

* 该论文设计了一个包含三个方法的 API（如表 4 所述），允许网络仿真器 (ns-3) 与各个 MAV 对象 (MAV Object) 进行交互 。
* 这些方法不仅用于数据包的传输和接收，还用于**跟踪 MAV 的移动性** 。
* 例如，当无人机的位置发生变化时，Emulator 的 MAVLink 控制单元 (MCU) 会发出一个 `globalPositionChanged()` 信号。仿真引擎 (Emulation Engine) 会侦听此信号并将其传递给 ns-3，以便 ns-3 能相应地处理位置更新事件 。

### 3. 网络行为同步 (Network Activity Synchronization)

网络行为的同步（包括处理通信失败）也是通过上述的 API（表 4）实现的，该 API 协调了 Emulator 和 ns-3 之间的网络活动 。具体的同步流程如下：

* **数据包传输（从 Emulator 到 ns-3）**：
    1.  当 UB-ANC 代理 (Agent) 中的 ACU（代理控制单元）想要发送数据包时，它将数据包转发给 NCU（网络控制单元）。
    2.  该数据包通过进程间通信 (IPC) 被转发到发送方对应的 MAV 对象。
    3.  MAV 对象发出一个 `netDataReady()` 信号 。
    4.  ns-3 必须捕获此信号，才能“接收”该数据包，并在其内部网络模型中进行处理和发送 。
* **数据包接收（从 ns-3 到 Emulator）**：
    1.  当 ns-3 仿真器将数据包传递到目标节点后 。
    2.  ns-3 会调用目标 MAV 对象的 `netSendData()` 方法（槽）。
    3.  MAV 对象的网络服务器 (Network Server) 再通过 IPC 机制将数据包转发给相应 UB-ANC 代理的 NCU 。
    4.  最后，NCU 发出 `dataReady()` 信号，通知 ACU 有数据包在接收缓冲区中等待处理。
///

/// note | 本文的解决方案（理解3）

**1. 时钟同步（Clock Synchronization）**

**解决方案**：将 ns-3 配置为**实时调度模式**

具体实现：

- 设置 ns-3 使用实时调度器（real-time scheduler）
- 将仿真时钟锁定到 CPU 时钟
- 使真实时间等同于仿真时间
- 这样两个调度器就能同步到同一个时钟

> 原文："For this, we set ns-3 to use a real-time scheduler to lock the simulation clock with the CPU clock (and set real time as simulation time). This allows the two schedulers to be synchronized to the same clock."

**2. 事件同步（Event Synchronization）**

**解决方案**：设计了一套**三方法 API**（Table 4），通过信号-槽机制实现事件转发

**核心 API 方法：**

| 方法                      | 功能                                                  |
| ------------------------- | ----------------------------------------------------- |
| `netDataReady()`          | MAV 对象发射的信号，将数据包传递给网络仿真器          |
| `netSendData()`           | 网络仿真器调用的槽函数，将数据包传递给接收方 MAV 对象 |
| `globalPositionChanged()` | MCU 发射的信号，通知网络仿真器无人机位置更新          |

**具体工作流程：**

**① 数据包发送流程：**

```
ACU → NCU (m_send_buffer) 
  → MAV Object (IPC) 
  → 触发 netDataReady() 信号 
  → ns-3 捕获并处理数据包
```

**② 数据包接收流程：**

```
ns-3 处理完毕 
  → 调用 netSendData() 槽函数 
  → Network Server → NCU (m_receive_buffer, IPC) 
  → 触发 dataReady() 信号 
  → ACU 读取并处理
```

**③ 位置同步流程：**

```
无人机位置变化 
  → MCU 触发 globalPositionChanged() 
  → Emulation Engine 监听 
  → 传递给 ns-3 更新节点位置
```


**3. 网络行为同步（Network Activity Synchronization）**

**解决方案**：通过上述事件同步机制 + 移动性追踪实现

关键措施：

- **转发所有相关事件**："For event synchronization, we forward all relevant events in the UB-ANC Emulator to the network simulator"
- **实时位置追踪**：通过 `globalPositionChanged()` 持续更新 MAV 位置
- **基于位置建模连接性**：ns-3 根据 MAV 实时位置建模网络连通性和数据传输
- **异常处理**：支持通信失败和外部干扰的异常处理

> 原文："These methods not only enable packet transmission and reception but also track MAV mobility. In this way, a network simulator can realistically model the connectivity and data transmission based on the MAVs' positions."

------

**设计亮点**

论文采用了**模块化、松耦合**的设计：

- 使用 Qt 的**信号-槽机制**实现组件间通信
- 使用**进程间通信（IPC）**传递数据
- 利用 ns-3 的**可集成性**（为测试床集成设计）
- 保持了仿真器的**可扩展性**（可集成其他网络仿真器如 EMANE）

这种设计使得两个原本独立的系统能够协同工作，既保证了 UB-ANC Emulator 的实时性，又获得了 ns-3 高保真度的网络仿真能力。

///


**表 4.** 将网络仿真器集成至 UB-ANC Emulator 的 API 接口。

| 方法 | 描述 |
| :--- | :--- |
| `netDataReady()` | 由发送方 MAV 对象发出信号，用于向网络仿真器传递数据包 |
| `netSendData()` | 网络仿真器调用的槽函数，用于将数据包发送至接收方 MAV 对象 |
| `globalPositionChanged()` | 仿真器 MCU 发出信号，告知网络仿真器无人机位置变更 |

MAV：微型飞行器；MCU：MAVLink 控制单元

### 网络仿真器集成方法（Methodology）

为实现事件同步，我们将 UB-ANC Emulator 中所有相关事件转发至网络仿真器。我们设计了三种 API（见表 4），用于网络仿真器与 MAV 间接口交互，支持数据收发与位置追踪。

**数据发送**：当 ACU 需要发送数据包时，数据被送入 NCU 的私有队列 `m_send_buffer`，然后通过 IPC 传递给 MAV 对象并触发 `netDataReady()` 信号。网络仿真器捕获该信号并接收数据包，按其内部网络模型完成传输。

**数据接收**：当网络仿真器将数据包投递至目标节点后，通过 `netSendData()` 方法将其送至目标 MAV 对象的网络服务器，然后通过 IPC 送达 UB-ANC Agent 的 NCU，后者再触发 `dataReady()` 信号通知 ACU 读取并处理接收到的数据。

**位置更新**：无人机位置变化时，MCU 发出 `globalPositionChanged()` 信号，仿真引擎捕获后转发给网络仿真器，使其更新节点位置，实现仿真器与网络模型的一致。


### ns-3 集成

图 9 展示了通过前节所述 API 将 ns-3 集成到 UB-ANC Emulator 中的高层框图。在 ns-3 中，每个节点表示一个移动收发器，可在模拟网络中向其他节点发送/接收数据包。如图所示，每个节点包含应用层、网络层、数据链路层、物理层和移动性模型。应用层表示在移动收发器上运行的应用，可生成与处理网络数据包；移动性模型则负责随时间更新节点在网络中的位置。

为了仿真 MAV 网络，UB-ANC Emulator 中的每架仿真 MAV 都对应一个 ns-3 节点。该节点的应用层处理来自对应 MAV 对象的 `netDataReady()` 信号以发起数据传输。当源节点的应用层接收数据包后，ns-3 会通过其网络协议栈将数据传输至目标节点。目标节点的应用层随后通过 `netSendData()` 将数据包发送回 UB-ANC Emulator 中对应的 MAV 对象。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-11.jpg?height=687&width=704&top_left_y=250&top_left_x=1135){width="400"}
 
图 9. UB-ANC Emulator 中 ns-3 集成的模块框图。  


**时钟同步**：如前所述，ns-3 拥有独立的事件调度器，因此需要与 UB-ANC Emulator 的调度器进行同步。为实现此目的，我们将 ns-3 设置为使用实时调度器，使其仿真时钟与 CPU 时钟锁定一致，从而将仿真时间设为真实时间，使两者调度器实现时钟同步。

## 网络仿真评估（Network simulation evaluation）

我们从节点间通信与端到端连接两个方面评估集成系统的性能。所有网络仿真均使用 ns-3 中标准的模型与协议：物理层与信道建模采用 YansWifiPhy 和 YansWifiChannel（基于 IEEE 802.11b 的 YANS 模型${ }^{36}$）；MAC 层使用 YANS IEEE 802.11 DCF 模型；网络层使用 OLSR 与 AODV 协议；传输层使用 UDP。我们通过发送虚拟数据验证平台功能与集成成功，并使用 ns-3 生成的 pcap 文件配合 Wireshark 进行离线分析。

### 节点间连接（Node-to-node connectivity）

为评估链路级集成效果，我们设置了一个双 MAV 通信任务：MAV1 为接收端，MAV2 为发送端。任务开始时，MAV2 起飞至 5 米高度，悬停并以 1 包/s 应用层速率发送 1000 个数据包。每个包在应用层为 7 字节，经过 MAC 层封装后为 93 字节。之后 MAV2 向东飞行 5 米，再次悬停并发送 1000 包，如此重复共 20 次。我们采用 DSSS 调制，分别以 $1\ \mathrm{Mbps}$、$2\ \mathrm{Mbps}$、$5.5\ \mathrm{Mbps}$ 与 $11\ \mathrm{Mbps}$ 四种物理层速率进行仿真。图 10(a) 与 (b) 分别展示了接收包数与信号强度（RSS）及 MAV 间 3D 欧几里得距离的关系。该结果与 Pei 与 Henderson 在 ns-3 中对 Wi-Fi 接收概率与 RSS 关系的报告高度一致，验证了事件与时钟同步的正确性。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-12.jpg?height=531&width=811&top_left_y=247&top_left_x=177){width="400"}
 
图 10. 在 1000 个发送包中接收成功的数量。(a) RSS（dBm）；(b) 距离（米）。  
RSS：接收信号强度；DSSS：直接序列扩频。

**表 5.** 在低（1 包/s）与高（100 包/s）应用层速率下，MAV1（源）与 MAV7（目标）的传输速率（单位：字节/s，不含协议开销）。  

|  | 低速率 (1 包/s) |  |  | 高速率 (100 包/s) |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  | OLSR | AODV |  | OLSR | AODV |
| 源端 (MAV1) | 127.71 | 123.93 |  | 11,881.94 | 11,735.35 |
| 目标 (MAV7) | 86.07 | 89.13 |  | 6813.41 | 8524.34 |

OLSR：优化链路状态路由；AODV：按需距离向量路由；MAV：微型飞行器。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-12.jpg?height=978&width=1301&top_left_y=1426&top_left_x=360){width="400"}
 
图 11. 不同应用层速率与路由协议下，MAV1 发送与 MAV7 接收的数据包数量。(a) AODV + 1 包/s；(b) OLSR + 1 包/s；(c) AODV + 100 包/s；(d) OLSR + 100 包/s。

### 端到端连接（End-to-end connectivity）

为评估端到端通信性能，我们构建一个包含七架 MAV 的网络（见图 12），其中 MAV1 为源节点，MAV7 为目标节点。该场景模拟应急通信网络，在灾后基础设施瘫痪时支持通信。任务开始时，所有 MAV 起飞至 5 米高度，分别飞至指定位置后以 $5\ \mathrm{m}/\mathrm{s}$ 绕圆飞行 20 圈。相邻圆心间距为 $40\sqrt{2}$ 米或 80 米，圆半径为 20 米。大约仿真 200 秒后，MAV1 向 MAV7 发送数据包（应用层 7 字节，MAC 层 93 字节）。测试分别在应用层速率 1 包/s 与 100 包/s 下进行，PHY 速率设为 1 Mbps（DSSS）。比较了 ns-3 支持的两种路由协议：AODV 与 OLSR。图 12 展示了该网络在 APM Planner 中的可视化效果。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-13.jpg?height=647&width=824&top_left_y=1006&top_left_x=215){width="400"}
 
图 12. 在 APM Planner 中可视化的七架 MAV 组成的网络。MAV1 为源节点，MAV7 为目标节点。

表 5 中显示，源节点 OLSR 下的发送速率略高于 AODV，但接收速率反而低于 AODV。这是因为 OLSR 的 `HELLO_INTERVAL` 设置为默认 2 秒，低于 AODV 的动态更新频率，导致 OLSR 路由表偶尔失效，数据包需重传。图 11 显示在不同速率与协议下，MAV1 与 MAV7 间的数据传输量随时间变化。可见传输性能显著受位置与路由协议影响。

图 13 展示在不同速率与协议下，各 MAV 所发送的总数据量与路由开销。明显可见流量不均，且在低速率下开销占比更大。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-13.jpg?height=483&width=1390&top_left_y=1921&top_left_x=360){width="400"}
 
图 13. 不同速率与协议下，各 MAV 的数据与开销包数量。(a) 1 包/s；(b) 100 包/s。

最后，图 14 展示了 MAV1 到 MAV7 的应用层端到端延迟的累计分布函数（CDF）。若数据包未成功送达，则赋予其无限延迟，导致 CDF 曲线未达到 1。结果表明，1 包/s 情况下成功送达比例更高，但 100 包/s 下延迟更低。该实验展示了仿真相比实测的优势：延迟统计更易获取且可重复。

![](https://cdn.mathpix.com/cropped/2025_11_09_27c93034939e41006ac8g-14.jpg?height=623&width=830&top_left_y=247&top_left_x=164){width="400"}
 
图 14. 应用层端到端延迟的 CDF。  
OLSR：优化链路状态路由；AODV：按需距离向量。


## 讨论（Discussion）

需要注意的是，默认的 ns-3 模型并未考虑空中信道的独特特性${ }^{37,38}$；然而，与通常用于多机器人/多智能体规划、控制与仿真中的理想通信模型（即在预定义半径内实现完美通信）相比，ns-3 模型已显著更接近现实。在此背景下，我们平台的主要目标之一是使多机器人系统研究人员能够在更真实的网络条件下评估其规划算法的有效性${ }^{17}$。与此同时，面向无人机通信与网络的研究者也已提出许多面向领域的专用协议与模型。若用户希望在 UB-ANC Emulator 中使用这些复杂协议或模型，可通过 ns-3 实现并集成。我们认为，UB-ANC Emulator 能够促进上述研究社区在前沿与交叉领域的融合，推动无人机蜂群技术的发展。

## 结论（Conclusion）

尽管 MAV 蜂群在众多应用场景中展现出巨大潜力，其部署与测试仍极具挑战性，因其涉及网络通信、软件系统、机器人、任务规划与控制等多个领域的知识与经验。本文提出了 UB-ANC Emulator，它为 MAV 蜂群及其应用的设计提供了便捷路径，使研究人员与工程实践者能够先在软件中实现与测试，再无缝过渡到真实无人机系统。我们还介绍了一套简单的 API 用于将网络仿真器集成至 UB-ANC Emulator，并特别说明了如何集成 ns-3。通过此集成，UB-ANC Emulator 能够提供一个现实的网络环境，用于评估多种 MAV 蜂群应用、空中网络协议与信道模型及其相互影响。UB-ANC Emulator 已作为开源项目发布于：https://github.com/jmodares/UB-ANC-Emulator。

## 致谢（Acknowledgements）

纽约州立大学布法罗分校感谢美国政府对本论文发表工作的支持。本文中表达的任何观点、结论或建议均为作者个人意见，并不一定代表美国空军研究实验室（AFRL）的立场。

## 资助信息（Funding）

作者披露本研究、写作与发表工作获得以下资金支持：本研究部分由美国国家科学基金会资助（资助号 IIS-1514395, CNS1823230, ECCS-1711335）。本材料基于美国空军研究实验室（US AFRL）资助的项目，资助号为 FA8750-14-1-0073。


## ORCID iD

Nicholas Mastronarde (D) http://orcid.org/0000-0002-8474-7237

## Notes

a. https://github.com/jmodares/UB-ANC
b. https://www.faa.gov/uas/media/Part_107_Summary.pdf
c. https://github.com/afrl-rq/OpenAMASE
d. http://ardupilot.org/copter/docs/common-autopilots.html
e. http://www.qt.io/qt-framework/
f. http://ardupilot.org/dev/docs/sitl-with-xplane.html
g. http://ardupilot.org/planner2/
h. 在我们的 LKH-D 实验中，无人机被无意中从其预设起点的北侧启动。因此，其实际起飞位置与 DLS 任务或仿真中的起点不一致，导致飞行距离略有增加，从而使性能略微下降。
i. https://www.nrl.navy.mil/itd/ncs/products/emane

## References

1. Gupta L, Jain R and Vaszkun G. Survey of important issues in UAV communication networks. IEEE Commun Surv Tutorials 2016; 18: 1123-1152.
2. Modares J and Mastronarde N. UB-ANC: a flexible airborne networking and communications testbed: poster. In: Proceedings of the tenth ACM international workshop on wireless network testbeds, experimental evaluation, and characterization (WINTECH '16). New York, 3 October 2016. NY, USA: ACM, pp.95-96.
3. Modare J, Mastronarde N, Medley MJ, et al. UB-ANC: an open platform testbed for software-defined airborne networking and communications, Report, arXiv:1509.08346, 2015.
4. Allred J, Hasan AB, Panichsakul S, et al. Sensorflock: an airborne wireless sensor network of micro-air vehicles. In: Proceedings of the 5th ACM international conference on embedded networked sensor systems, Sydney, Australia, 6-9 November 2007. pp.117-129.
5. Cheng BN, Charland R, Christensen P, et al. Characterizing routing with radio-to-router information in an airborne network. In: Military communications conference (MILCOM), Baltimore, MD, 7-10 November 2011. pp.1985-1990.
6. Frew EW and Brown TX. Airborne communication networks for small unmanned aircraft systems. Proc IEEE 2008 Dec; 96(12).
7. Modares J, Mastronarde N and Dantu K. UB-ANC Emulator: an emulation framework for multi-agent drone networks. In: Proceedings of the IEEE conference on simulation, modeling, and programming for autonomous robots (SIMPAR), San Francisco, CA, 13-16 December 2016.
8. Modares J, Mastronarde N and Dantu K. UB-ANC Emulator: an emulation framework for multi-agent drone networks. In: Proceedings of the tenth ACM international workshop on wireless network testbeds, experimental evaluation, and characterization, New York, 3-7 October 2016. pp.93-94.
9. MAVLink Protocol, http://qgroundcontrol.org/mav link/start.
10. APM planner ground control station, https://github. com/diydrones/apm_planner.
11. QGroundControl ground control station, https://github. com/mavlink/qgroundcontrol.
12. Henderson TR, Lacage M, Riley GF, et al. Network simulations with the ns-3 simulator. SIGCOMM Demonstr 2008; 14: 527.
13. Hiebeler D. The swarm simulation system and individualbased modeling. Santa Fe, NM: Santa Fe Institute, 1994.
14. Luke S, Cioffi-Revilla C, Panait L, et al. MASON: a multiagent simulation environment. Simulation 2005; 81: 517-527.
15. Kate B, Waterman J, Dantu K, et al. Simbeeotic: a simulator and testbed for micro-aerial vehicle swarm experiments. In: ACM/IEEE 11th international conference on information processing in sensor networks (IPSN), Beijing, China, 16-20 April 2012. pp.49-60.
16. Kopeikin A, Ponda SS, Johnson LB, et al. Multi-UAV network control through dynamic task allocation: ensuring data-rate and bit-error-rate support. In: IEEE GLOBECOM workshops, Anaheim, CA, 3-7 December 2012. pp.1579-1584.
17. Rantanen M, Modares J, Mastronarde N, et al. Performance of the asynchronous consensus based bundle algorithm in lossy network environments. In: IEEE 10th sensor array and multichannel signal processing workshop (SAM), Sheffield, UK, 8-11 July 2018. pp.311-315.
18. Gerkey B, Vaughan RT and Howard A. The player/stage project: tools for multi-robot and distributed sensor systems. In: Proceedings of the 11th international conference on advanced robotics, Coimbra, Portugal, 30 June-3 July 2003, Vol. 1, pp.317-323.
19. Quigley M, Conley K, Gerkey B, et al. ROS: an opensource robot operating system. In: ICRA workshop on open source software, Kobe, Japan, 12-17 May 2009.
20. Koenig NP and Howard A. Design and use paradigms for Gazebo, an open-source multi-robot simulator. IROS 2004; 4: 2149-2154.
21. Issariyakul T and Hossain E. Introduction to Network Simulator 2 (NS2). In: Introduction to network simulator NS2. Boston, MA: Springer, 2012, pp.21-40.
22. Chang X. Network simulations with OPNET. In: Proceedings of winter simulation conference, 1 December 1999. pp.307-314.
23. Zeng X, Bagrodia R and Gerla M. GloMoSim: a library for parallel simulation of large-scale wireless networks. ACM SIGSIM Simulation Digest 1998; 28: 154-161.
24. Varga A and Hornig R. An overview of the OMNeT++ simulation environment. In: Proceedings of the 1st international conference on simulation tools and techniques for communications, networks and systems, Marseille, France, 3-7 March 2008.
25. Stojmenovic I. Simulations in wireless sensor and ad hoc networks: matching and advancing models, metrics, and solutions. IEEE Commun Magz 2009; 46: 102-107.
26. Le T, Kuthethoor G, Hansupichon C, et al. Reliable user datagram protocol for airborne network. In: Military communications conference, Boston, MA, 18-21 October 2009. pp.1-6.
27. Namuduri K, Wan Y, Gomathisankaran M, et al. Airborne network: a cyber-physical system perspective. In: Proceedings of the first ACM MobiHoc workshop on airborne networks and communications, Hilton Head, SC, 11-14 June 2012. pp.55-60.
28. Javaid AY, Sun W and Alam M. UAVSim: a simulation testbed for unmanned aerial vehicle network cyber security analysis. In: GLOBECOM workshops, Atlanta, GA, 9-13 December 2013. pp.1432-1436.
29. Modares J, Mastronarde N and Dantu K. Realistic network simulation in the UB-ANC aerial vehicle network emulator. In: IEEE INFOCOM workshops, Atlanta, GA, 1 May 2017. pp.66-71.
30. Modares J, Ghanei F, Mastronarde N, et al. UB-ANC planner: energy efficient coverage path planning with multiple drones. In: Proceedings of the IEEE international conference on robotics and automation (ICRA), Singapore, 29 May-3 June 2017. pp.6182-6189.
31. ArduPilot SITL Simulator, http://ardupilot.org/dev/ docs/sitl-simulator-software-in-the-loop.html
32. Betz A. The ground effect on lifting propellers. NACA Technical Memorandum 836. Aug1937.
33. Powers C, Mellinger D, Kushleyev A, et al. Influence of aerodynamics and proximity effects in quadrotor flight. In: Experimental robotics Heidelberg: Springer Tracts in Advanced Robotics, Vol. 88 Springer, 2013, pp.289-302.
34. Lin S and Kernighan BW. An effective heuristic algorithm for the traveling-salesman problem. Oper Res 1973; 21: 498-516.
35. Barrientos A, Colorado J, Cerro JD, et al. Aerial remote sensing in agriculture: a practical approach to area coverage and path planning for fleets of mini aerial robots. J Field Rob 2011; 28: 667-89.
36. Lacage M and Henderson TR. Yet another network simulator. In: Proceedings from the 2006 workshop on ns-2: the IP network simulator, Pisa, Italy, 6 October 2006.
37. Asadpour M, Giustiniano D and Hummel KA. From ground to aerial communication: dissecting WLAN 802.11 n for the drones. In: Proceedings of the 8th ACM international workshop on wireless network testbeds, experimental evaluation \& characterization, Miami, FL, 30 September 2013. pp.25-32.
38. Van den Bergh B, Vermeulen T and Pollin S. Analysis of harmful interference to and from aerial IEEE 802.11 systems. In: Proceedings of the first workshop on micro aerial vehicle networks, systems, and applications for civilian use, Florence, Italy, 18 May 2015. pp.15-19.



