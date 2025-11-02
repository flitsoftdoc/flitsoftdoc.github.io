# 11 入门指南：初步步骤

> 构建一个认知电子战（Cognitive EW）系统并非许多人所认为的那样困难。

从小处着手并逐步扩展非常容易，步骤如下：

1. 选择一个小型任务（bite-sized task）。
2. 选择一个机器学习（ML, Machine Learning）工具包并构建模型原型。
3. 使用具有代表性的数据进行评估。
4. 在具有代表性的硬件上实现。

与所有事情一样，细节决定成败，但从小处着手有助于培养（人类）专业知识，并提高对哪些细节会影响最终产品的认识。

**步骤1**：在现有系统中引入认知解决方案的第一步是识别一个易于完成的小型任务（bite-sized task）。通常，这一新组件将替代或增强现有的传统方法。合适的候选任务包括：

- 学习对信号进行分类（见算法4.1）；
- 电子战毁伤评估（EW BDA, Electronic Warfare Battle Damage Assessment）（见第7.1.1节）；
- 学习动作的性能（见第4.2节），然后选择一种策略（见算法5.1）。可能的评估指标包括误码率（BER, Bit Error Rate）或链路稳定性（link stability）。对于误码率，图2.1列出了一些示例可观测量（observables），表5.1列出了一些示例可控量（controllables）。表11.1则列出了链路稳定性的部分示例可观测量和可控量。链路稳定性决策依赖于误码率及其他变量；迟滞（hysteresis）或其他统计量也可能相关。

**表11.1 链路稳定性（link stability）的示例可观测量（observables）与可控量（controllables）**

| 可观测量（Observables） | 可控量（Controllables） |
| :--- | :--- |
| 误码率（BER）（移动平均；迟滞） | 启用或停用重传机制 |
| 分组错误率（Packet error rate）（移动平均；迟滞） | 修改波形调制方式 |
| 链路中断情况（最近一次中断时间；迟滞） | 启用或停用网络编码（network coding） |
| 链路中断与上下文（例如地理位置、电子战（EW）活动）的相关性 | 修改网络编码参数 |
|  | 改变物理节点位置 |

**步骤2**：从第11.2.1节所述的机器学习（ML, Machine Learning）工具包中选择一个。按照算法4.1中概述的流程实现一个初始原型。此阶段的目标是构建数据处理流水线（pipeline），而非测试模型精度。可在任意可用的机器上测试该流水线。

推动快速原型开发的主要因素是训练时间，而训练时间又取决于数据量和训练迭代次数。此时应使用极小规模的数据样本（例如少于100个样本）；这些数据应具有大致相似的取值范围和数值表示形式（最好经过归一化处理），但不必真实或具有代表性（例如见表11.2）。（尽管如此，初始数据的特性越接近预期实际数据的特性，效果越好。）使用10%的数据进行训练，90%用于测试，并采用宽松的超参数设置（例如放宽误差限制、减少训练轮数（epochs））。

**步骤3**：一旦逻辑流程建立完成，即可切换到具有代表性的数据集。首先使用合成数据（synthetic data），并在条件允许的情况下逐步过渡到仿真数据（emulated data）和真实数据（real data）；重点在于保持数据多样性（见第8.3.2节）。评估候选模型，并在其可接受范围内调整超参数。使用第10章所述的评估方法选择合适的机器学习（ML, Machine Learning）算法。

**步骤4**：在具有代表性的硬件上实现系统。软件定义无线电（SDR, Software-Defined Radio）平台可作为许多电子战（EW, Electronic Warfare）平台的良好替代：它们相对廉价，并提供射频（RF, Radio Frequency）前端 [1,2]（见图11.1）。需注意，将原型模型转换为嵌入式代码通常是一项重大工程。待系统稳定后，再迁移到目标平台。

**表11.2**  **无需真实或逼真数据即可开发的初始逻辑流程示例**

| 类型（Class） | 占空比（Duty） | 频率（Freq） | 脉冲重复频率（PRF） | 脉宽（PW, ） |
| :--- | :--- | :--- | :--- | :--- |
| Pulse | 2.8 | 9200 | 5048 | 0.0005546 |
| Pulse | 2.9 | 7430 | 6373 | 0.0004550 |
| Pulse | 2.5 | 9790 | 1396 | 0.0017908 |
| Pulse | 1.5 | 4640 | 4609 | 0.0003254 |
| PulseDoppler | 38 | 1900 | 7799 | 0.0048724 |
| PulseDoppler | 49 | 4600 | 5148 | 0.0095182 |
| PulseDoppler | 34 | 8590 | 1619 | 0.0210006 |
| PulseDoppler | 26 | 5730 | 5116 | 0.0050820 |
| CW | 100 | 8830 | 7559 | 0.0132292 |
| CW | 100 | 610 | 3810 | 0.0262467 |
| CW | 100 | 7240 | 6772 | 0.0147666 |
| CW | 100 | 1570 | 9280 | 0.0107758 |

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-238.jpg?height=254&width=1124&top_left_y=913&top_left_x=188){width="400"}

**图11.1** 软件定义无线电（SDR）平台提供射频（RF）前端、CPU、FPGA，在某些情况下还包括专用集成电路（ASIC, Application-Specific Integrated Circuit）。

## 11.1 开发注意事项

Callout 10.1提出了一种将电子战（EW, Electronic Warfare）认知解决方案扩展至更广泛应用的框架。EW相关工作应考虑以下事项：

- **定义作战场景（scenario）**：此步骤常常被忽视。明确的场景有助于确保收集正确的数据，并为特定平台和任务选择合适的算法。实践中容易收集错误的数据、构建“过度”的本体（ontology）、选用不匹配的硬件，或忽略终端用户关注的问题（如可解释性，explainability）。应制定一套需求，提出类似表3.2、图6.2及第8章中的问题，并明确对手（adversary）在其中的角色与影响。

- **从项目第一天起就引入数据工程师**：现实中存在太多案例，射频（RF, Radio Frequency）工程师采集了优质数据，却因缺乏结构化设计而无法后续复用。初始数据框架（如数据结构和本体）应能覆盖初始用例 [3]，并预留可扩展性接口。同时需明确定义元数据（metadata）（见第8.1.1节）。

- **尽早识别所需数据**：太多解决方案假设已有高质量数据集可用，但在EW领域通常不存在现成的优质数据集；数据往往规模小，甚至缺乏“真实标签”（ground truth）。数据的特性将是驱动解决方案选择的最关键因素（见第11.2.3节）。

- **假设离线数据仅部分反映在线数据特征**：系统必须能够应对全新条件。尽管消融实验（ablation trials）（见第10.2节）可增强系统在未知条件下有效运行的信心，但实际运行中仍会出现超出所有预期边界的情况。

- **预计大部分时间将用于数据清洗**：常见问题包括修正传感器误差、与传统能力（legacy capabilities）去冲突，以及仅能获取传统系统愿意共享的“残余数据”（scraps of data）（见第8.2节）。

- **准备闭环测试环境（closed-loop test environment）**：EW系统需在对抗环境中运行；仅使用静态训练集进行测试无法达成目标。目前普遍缺乏可用于测试决策机制（DM, Decision-Making）的闭环测试系统（见第10.1节）。

- **确保采用可扩展的软件架构**：互操作性（interoperability）、模块化（modularity）和可扩展性（scalability）难以在后期通过逆向工程实现。需预期与传统系统之间的冲突，并制定解决方案（见第9.1节）。

- **从一开始就确保系统安全性**：后期添加安全基础设施无法实现安全目标。必须保护数据和模型（见第8.3.5节）。

- **对多种候选解决方案进行原型开发与评估**：选择支持算法快速开发与比较的工具（见第11.2.1节）。在最终方案选择时，不仅应考虑精度，还需综合其他需求（见第3.6节），包括数据可用性、训练时间、推理时间、内存占用、可解释性及安全性。

- **预计需手动将原型代码移植到嵌入式平台**：目前尚无任何商用工具链能充分支持在嵌入式硬实时平台（embedded hard real-time platforms）上进行部署、内存管理及时间调度（见第9.2节中的示例）。

5G的应用场景及其人工智能/机器学习（AI/ML, Artificial Intelligence / Machine Learning）解决方案与EW系统具有诸多相似之处，如Callout 11.1和第4.3.2节所述。跟踪并借鉴5G领域的相关工作，有望为EW带来新的能力。北约（NATO）认知雷达工作组发布的《认知雷达报告》也汇总了若干优秀案例 [17]。

/// note| Callout 11.1  5G的应用场景与解决方案可直接应用于电子战（EW）。

5G是第五代商用蜂窝网络，由第三代合作伙伴计划（3GPP, 3rd Generation Partnership Project）标准化组织制定，是一项全新的全球无线通信标准。5G有望带来变革性影响，因其承诺实现远高于3G和4G技术的数据速率（峰值速率可达每秒数千兆比特）、更低的时延（毫秒级）、无处不在的连接能力以及更高的可靠性。3GPP定义了三种主要的5G新空口（NR, New Radio）应用场景：

- 增强型移动宽带（eMBB, Enhanced Mobile Broadband）：相比3G和4G，eMBB将以高得多的吞吐量传输大量数据，主要面向高带宽需求的应用，例如大规模视频流媒体和虚拟/增强现实（VR/AR, Virtual/Augmented Reality）[4]。

- 超高可靠低时延通信（URLLC, Ultra-Reliable and Low-Latency Communications）：也称为任务关键型通信（mission-critical communications），URLLC将提供高度稳定的网络连接和尽可能低的时延（毫秒级），以支持即时连接需求（例如触觉互联网、自动驾驶车辆（包括汽车和无人机）以及用于防碰撞的1毫秒或更低时延通信）。

- 海量机器类通信（mMTC, Massive Machine-Type Communications）：为物联网（IoT, Internet of Things）奠定基础。mMTC将支持机器之间（每平方公里最多一百万台设备）的通信，且仅需极少的人工干预（例如工业应用、智能计量或大规模传感器网络）。

此外，5G的新特性（如动态空口、网络功能虚拟化（NFV, Network Function Virtualization）和网络切片（network slicing））为应对网络运维相关挑战引入了额外的系统设计复杂性和优化需求。因此，机器学习（ML, Machine Learning）近期在通信领域重新受到关注，因其有望解决传统方法无法应对的上述挑战。例如，第三代合作伙伴计划（3GPP）和国际电信联盟（ITU, International Telecommunications Union）均已提出涉及多种人工智能/机器学习（AI/ML）技术的5G研究项目。You 等人 [5] 讨论了5G中的四个问题，其解决方案可直接应用于电子战（EW, Electronic Warfare）：

1. 网络资源分配：由于需同时支持前述三种应用场景，5G新空口（NR, New Radio）的正交频分复用（OFDM, Orthogonal Frequency-Division Multiplexing）资源块（RB, Resource Block）分配比4G长期演进（LTE, Long-Term Evolution）复杂得多。强化学习（RL, Reinforcement Learning）已被用于执行RB分配 [5] 和5G网络切片 [6]。

   Yao 等人 [5] 探讨了如何在大规模多输入多输出（massive MIMO, Multiple-Input Multiple-Output）系统中实现能效优化的波束成形（beamforming）：通过在庞大的解空间中寻找波束成形矩阵，使功率放大器（PA, Power Amplifier）的非线性失真最小化。循环神经网络（RNN, Recurrent Neural Network）递归地学习功率放大器的非线性特性，并找到满足以下两个要求的合适神经元权重：(1) 迫零波束成形（zero-forcing beamforming），即实现最小的多用户干扰；(2) 最小化整体非线性失真。该RNN对功率放大器阵列的非线性进行建模，并在此基础上优化至最小发射功率，同时提供迫零解。随后，RNN将如何设置迫零波束成形权重的信息反馈给5G系统 [4]。

   其他机器学习（ML, Machine Learning）技术还包括：结合上下文感知（context awareness）进行资源分配 [7]、运用博弈论（game theory）优化被分配相同资源块（RB, Resource Block）的多小区用户功率控制 [8]，以及对蜂窝网络资源进行管理与编排（managing and orchestrating）[9]。

2. 自组织网络（SONs, Self-Organizing Networks）：SON是一种新型网络管理方式，为网络的运行与维护提供智能化能力。3GPP将SON引入作为4G LTE网络的关键组成部分，并将其解决方案划分为三类：自配置（self-configuration）、自优化（self-optimization）和自愈（self-healing）。随着5G网络的超密集化（ultra-densification）、动态资源分配以及整体网络复杂性的显著提升，SON功能必须进一步增强。

   人工神经网络（ANN, Artificial Neural Network）和遗传算法（genetic algorithms）等ML技术已被用于解决多种SON功能，包括新小区与频谱部署、基站自动配置、覆盖与容量优化，以及小区中断检测与补偿 [5, 10–12]。

   Gómez 等人 [13] 开发了一种根因分析（root-cause analysis）系统，该系统在三个步骤中结合了监督学习与无监督学习技术：(1) 无监督的SON训练，(2) 无监督聚类，(3) 由专家进行标签标注。

3. 统一的5G基带加速（Uniform 5G baseband acceleration）：5G基带信号处理包含一系列信号处理模块，包括大规模多输入多输出（massive MIMO）检测和用于信道译码的极化码（polar codes）。基带处理模块数量的增加导致硬件设计与实现复杂度显著提升。为加速基带信号处理，可设计一种统一加速器，采用基于因子图（factor-graphs）的置信传播（belief propagation）算法（适用于所有处理模块），并辅以深度神经网络（DeepNets）（例如 [14, 15]）。

4. 端到端物理层通信优化（Optimization of end-to-end physical layer communication）：O’Shea 与 Hoydis [16] 提出了一种基于自编码器（autoencoder）的端到端物理层（PHY, Physical Layer）优化方法。作者将通信系统视为一个自编码器，并提出一种新颖的设计思路：将通信系统设计视为一项端到端的信号重构任务，旨在通过单一过程联合优化发射机与接收机组件。

上述针对5G应用场景所验证的解决方案，可映射到通信、雷达以及认知电子战（Cognitive EW）系统在众多作战域（operational domains）中面临的共性问题。

///

## 11.2 工具与数据

现有的机器学习（ML, Machine Learning）工具包、数据集和仿真框架可显著加速原型开发与系统研制过程。

### 11.2.1 机器学习工具包

流行的ML库包括 scikit-learn [18]、TensorFlow [19]、MATLAB 机器学习工具箱（MATLAB Machine Learning Toolbox）[20]、R [21] 和 WEKA [22]。这些工具包大多具备完善的在线文档。《使用Scikit-Learn、Keras和TensorFlow动手实践机器学习》（Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow）[23] 一书为Python环境下的ML开发提供了极佳的基础。这些库在原型开发阶段非常有效，但若用于嵌入式硬实时（embedded hard real-time）运行环境，则需进行大量修改 [24]。

### 11.2.2 机器学习数据集

Kaggle [25]、IEEE [26] 和 Google Dataset Search [27] 提供了大量公开数据集的链接。目前迫切需要高质量、全面的射频（RF, Radio Frequency）专用数据集 [28]。即便某些数据确实存在，也很少有数据集具备足够完善的标注以支持复用（见第8.1.1节）。可作为起点的数据资源包括雷达的降雪特性（snowfall properties of radars）[29] 和 USRP（通用软件无线电外设，Universal Software Radio Peripheral）指纹识别数据集 [30]。Flowers [31] 提供了用于生成指纹识别合成数据的代码。

### 11.2.3 射频（RF, Radio Frequency）数据生成工具

鉴于射频环境的复杂性，加之电子战（EW, Electronic Warfare）固有的对抗性，合成数据与仿真数据生成能力至关重要，既可用于基础数据生成（见第8.3.2节），也可用于交互式仿真/仿真测试（见第10.1节）。

> “与中、俄频繁且专门的试验活动相比，[美国]国防部（DoD）并未广泛开展电子战或电磁频谱作战（EMSO, Electromagnetic Spectrum Operations）试验，原因在于对作战安全（operational security）的顾虑，以及缺乏可用的试验靶场和其他合适的仪器化设施…… 加强对虚拟与构造式（virtual and constructive）系统的依赖，可提升国防部在电子战与电磁频谱作战领域的试验能力；此外，若采用一种融合技术与作战创新的新研发（R&D）模式，也将有所助益。”  
> ——战略与预算评估中心（Center for Strategic and Budgetary Assessments），2019年 [32]

MATLAB 的射频工具箱（RF Toolbox）[33] 是一种易于使用的信号生成工具。Flowers [31] 提供了用于生成指纹识别合成数据的代码。

目前已开发出多种测试平台（testbeds），支持认知电子战系统的交互式设计与评估，例如 [2, 34–36]。市面上存在大量商用信号发生器，可与测试引擎集成使用 [37]。CEESIM 是 MATLAB 的一个插件 [38]。基于树莓派（Raspberry Pi）[39] 或 USRP（通用软件无线电外设，Universal Software Radio Peripheral）[40] 构建的小型测试平台，可支持低成本的空中信号（over-the-air）采集与测试，适用于初始原型阶段的决策逻辑开发与验证。

此外，还存在多种射频仿真与仿真测试工具，可支持高保真度的电子战系统开发与测试，包括 RFNest [41]、NEWEG [42]、RFView [43] 和 RES（RF Environment Simulator）[44]。

## 11.3 结论

构建认知电子战（Cognitive EW, Electronic Warfare）系统在概念上易于理解。通过小步渐进的方式，将认知理念逐步融入现有系统，将有效保障最终产品的成功。切勿试图一步到位实现完全认知的系统（见图1.3）；应优先选择系统中最脆弱（brittle）的部分，用更鲁棒的基于经验（empirical）或启发式（heuristic）的方法予以替代。请自问：

- 您的系统是否需要更优的态势评估（situation assessment）能力？是否需要更深入地理解射频（RF, Radio Frequency）环境、异常现象以及辐射源的意图？
- 您的系统是否需要更优的决策机制（DM, Decision-Making）？是否需要一种能够适应动态变化和意外情况的能力？
- 您的系统是否需要从自身错误中学习？

每一步微小的改进，都是朝着正确方向迈出的一步。

> “我们不必等待一个‘煮沸整个海洋’式的、颠覆性的、全面投入的未来新型网络，才将软件定义网络（#SDN, Software-Defined Networking）引入战术系统。我们完全可以将其叠加在现有系统之上。”  
> ——Tim Grayson（DARPA），2020年，谈及 #DyNAMO 项目 [45]

## References

[1] Gannapathy, V., et al., "A Review on Various Types Of Software Defined Radios (SDRs) in Radio Communication," International Journal of Research in Engineering and Technology, Vol. 03, 2014.

[2] Christiansen, J., G. Smith, and K. Olsen, "USRP Based Cognitive Radar Testbed," in IEEE Radar Conference, 2017.

[3] Haigh, K. Z., et al., "Rethinking Networking Architectures for Cognitive Control," in Microsoft Research Cognitive Wireless Networking Summit, 2008.

[4] Yao, M., et al., "Artificial Intelligence Defined 5G Radio Access Networks," IEEE Communications Magazine, Vol. 57, No. 3, 2019.

[5] You, X., et al., "AI for 5G: Research Directions and Paradigms," Science China Information Sciences, Vol. 62, No. 2, 2019.

[6] Li, R., et al., "Deep Reinforcement Learning for Resource Management in Network Slicing," IEEE Access, Vol. 6, 2018.

[7] Bogale, T. E., X. Wang, and L. Le, Machine Intelligence Techniques for Next-Generation Context-Aware Wireless Networks, 2018. Online: https://arxiv.org/abs/1801.04223.

[8] Wang, J., et al., "Distributed Optimization of Hierarchical Small Cell Networks: A GNEP Framework," IEEE Journal on Selected Areas in Communications, Vol. 35, No. 2, 2017.

[9] Li, R., et al., "Intelligent 5G: When Cellular Networks Meet Artificial Intelligence," IEEE Wireless Communications, Vol. 24, No. 5, 2017.

[10] Wang, X., X. Li, and V. Leung, "Artificial Intelligence-Based Techniques for Emerging Heterogeneous Network: State of the Arts, Opportunities, and Challenges," IEEE Access, Vol. 3, 2015.

[11] Klaine, P., et al., "A Survey of Machine Learning Techniques Applied to Self-Organizing Cellular Networks," IEEE Communications Surveys Tutorials, Vol. 19, No. 4, 2017.

[12] Pérez-Romero, J., et al., "Knowledge-Based 5G Radio Access Network Planning and Optimization," in International Symposium on Wireless Communication Systems, 2016.

[13] Gómez-Andrades, A., et al., "Automatic Root Cause Analysis for LTE Networks Based on Unsupervised Techniques," IEEE Transactions on Vehicular Technology, Vol. 65, No. 4, 2016.

[14] Tan, X., et al., Improving Massive MIMO Belief Propagation Detector with Deep Neural Network, 2018. Online: https://arxiv.org/abs/1804.01002.

[15] Liang, F., C. Shen, and F. Wu, "An Iterative BP-CNN Architecture for Channel Decoding," IEEE Journal of Selected Topics in Signal Processing, Vol. 12, No. 1, 2018.

[16] O'Shea, T., and J. Hoydis, "An Introduction to Deep Learning for the Physical Layer," IEEE Transactions on Cognitive Communications and Networking, Vol. 3, No. 4, 2017.

[17] Task Group SET-227, "Cognitive Radar," NATO Science and Technology, Tech. Rep. TR-SET-227, 2020.

[18] Scikit-learn: Machine Learning in Python, Accessed: 2020-03-22. Online: https://scikit-learn.org/stable/.

[19] Abadi, M., et al., TensorFlow: Large-scale Machine Learning on Heterogeneous Systems, 2015. Online: https://www.tensorflow.org/.

[20] MathWorks, Statistics and Machine Learning Toolbox. Accessed: 2020-03-22. Online: https://www.mathworks.com/products/statistics.html.

[21] R Core Team, R: A Language and Environment for Statistical Computing, R Foundation for Statistical Computing, Vienna, Austria, 2013.

[22] University of Waikato, NZ, WEKA: The Workbench for Machine Learning. Accessed: 2020-04-12. Online: https://www.cs.waikato.ac.nz/ml/weka/.

[23] Géron, A., Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow, O’Reilly, 2019.

[24] Haigh, K. Z., et al., "Machine Learning for Embedded Systems: A Case Study," BBN Technologies, Tech. Rep. BBN-REPORT-8571, 2015.

[25] Kaggle. Accessed: 2020-12-08, 2020. Online: https://www.kaggle.com/.

[26] IEEE Dataport. Accessed: 2020-12-08, 2020. Online: https://ieeedataport.org/.

[27] Google Dataset. Accessed: 2020-12-08, 2020. Online: https://datasetsearch.research.google.com/.

[28] Hall, T., et al., "Reference Datasets for Training and Evaluating RF Signal Detection and Classification Models," in IEEE Globecom Workshops, 2019.

[29] Illinois Data Bank, Dataset for: "A Dual-Frequency Radar Retrieval of Snowfall Properties Using a Neural Network," Accessed: 2020-12-08, 2020. doi: 10.13012/B2IDB-0791318_V1.

[30] Sankhe, K., et al., "ORACLE: Optimized Radio Classification Through Convolutional Neural Networks," in INFOCOM, Dataset available at https://genesys-lab.org/oracle, 2019.

[31] Flowers, B., Radio Frequency Machine Learning (RFML) in PyTorch. Accessed: 2020-12-08, 2020. Online: https://github.com/brysef/rfml.

[32] Clark, B., W. McNamara, and T. Walton, "Winning the Invisible War: Gaining an Enduring U.S. Advantage in the Electromagnetic Spectrum," Center for Strategic and Budgetary Assessments, Tech. Rep., 2019.

[33] MathWorks, RF Toolbox. Accessed: 2020-12-13. Online: https://www.mathworks.com/products/rftoolbox.html.

[34] Reddy, R., et al., "Simulation Architecture for Network Centric Sensors and Electronic Warfare Engagements," in Interservice/Industry Training, Simulation, and Education Conference, Software available as a MATLAB module: https://tinyurl.com/csir-sewes, 2018.

[35] Oechslin, R., et al., "Cognitive Radar Experiments with CODIR," in International Conference on Radar Systems, 2017.

[36] Smith, G., et al., "Experiments with Cognitive Radar," in Computational Advances in MultiSensor Adaptive Processing, 2015.

[37] DeLisle, J.-J., "Product Trends: Signal Generators Meet the Latest Standards Head-On." Accessed 2020-12-13, 2014. Online: https://tinyurl.com/signal-generators.

[38] Northrop Grumman, Combat Electromagnetic Environment Simulator (CEESIM). Accessed 2020-12-13, 2020. Online: https://tinyurl.com/ems-ceesim.

[39] Raspberry Pi Foundation. Accessed 2020-12-13, 2020. Online: https://www.raspberrypi.org/.

[40] Ettus Research. (2020). "USRP Software Defined Radio Device," Online: https://www.ettus.com/.

[41] Intelligent Automation, Inc., RFnest. Accessed 2020-12-13, 2020. Online: https://www.i-a-i.com/product/rfnest/.

[42] Naval Air Warfare Center Training Systems Division, Next-Generation Electronic Warfare Environment Generator (NEWEG). Accessed 2020-12-13, 2020. Online: https://tinyurl.com/navair-neweg.

[43] Information Systems Laboratories, RFView: High-Fidelity RF Signals and System Modeling. Accessed 2020-12-13, 2020. Online: https://rfview.islinc.com.

[44] Mercury Systems, Radar Environment Simulators. Accessed 2020-12-13, 2020. Online: https://tinyurl.com/mrcy-res.

[45] Grayson, T., LinkedIn Post: #DyNAMO. Accessed 2020-12-19. Online: https://tinyurl.com/grayson-dynamo.

