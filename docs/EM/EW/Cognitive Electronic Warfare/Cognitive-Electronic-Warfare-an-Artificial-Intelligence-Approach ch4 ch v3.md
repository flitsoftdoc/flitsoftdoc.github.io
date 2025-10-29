
# 4 电子支援

每个认知电子战（Cognitive EW）系统的第一步都是电子支援（Electronic Support, ES），以理解射频（RF）频谱。在人工智能（AI）领域，这一过程被称为态势评估（situation assessment），其目的是确定谁在使用频谱、在何时何地使用，以及是否存在可被利用的模式。

本章讨论可用于特征估计、辐射源表征与分类（emitter characterization and classification）、数据融合（data fusion）、异常检测（anomaly detection）以及意图识别（intent recognition）的人工智能/机器学习（AI/ML）技术。电子支援（ES）用于分析电磁环境，并生成驱动决策管理（Decision Management, DM）的可观测量。本章结构按照图1.4所体现的复杂度递增顺序组织。

Howland 等人[1]将频谱态势感知（Spectrum Situation Awareness, SSA）定义为“一种收集关于频谱使用的各类分散信息，并对这些信息进行处理以生成融合的频谱态势图的方法”。SSA负责收集、组织和处理电子战（EW）所需的频谱数据。除了任务前和任务后的分析外，SSA还需根据决策者的需求，在极短时间内完成实时处理。

为降低系统脆弱性（brittleness）并应对新型辐射源和对手，AI和ML能力可在各个层面提升SSA性能。图4.1展示了这些AI/ML技术与其他相关SSA技术之间的关系。一个完整的电子战系统必须具备多维度的频谱态势感知（SSA）。未来的SSA系统可结合深度学习模型用于潜在特征生成（latent feature generation）、经典机器学习模型用于任务中更新（in-mission-updates），以及混合模型以弥补数据不足的问题（见4.1节）。此外，SSA并不局限于射频（RF）数据：还可与非射频数据（如视频与静态图像、自由空间光通信、开源情报、战术或作战情报）进行融合（见4.3节）。跨多个异构源的分布式数据融合必须生成一个在空间、时间和频率上均准确一致的战场频谱通用作战图（common operating picture）。异常检测（4.4节）、因果推理（causal reasoning，4.5节）和意图推断（intent inference，4.6节）共同构成完整图景，以理解事件影响并支持决策管理（DM）。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-073.jpg?height=627&width=1146&top_left_y=158&top_left_x=177){width="400"}

图4.1 频谱态势感知（SSA）必须融合多种支撑技术，既包括传统技术，也包括认知技术。其中一项挑战在于相关技术的集成与演示，而其中仅有少数属于认知类技术。

## 4.1 辐射源分类与表征（Emitter Classification and Characterization）

电子支援（ES）的一项基础任务是理解环境中存在哪些辐射源以及它们正在执行何种行为。辐射源分类用于识别信号的已知类别（例如调制方式分类或平台类型）。在人工智能领域，“分类”泛指任何离散的类别或标签；因此，电子战中特定辐射源识别（Specific Emitter Identification, SEI）也是一种分类形式。另一方面，辐射源表征（characterization）指的是对信号环境行为的捕捉，而不一定需要为该行为赋予明确的名称标签。例如，可以识别出某个信号强度很高、呈高斯分布，或在特定时间间隔内重复出现。

表征与分类可相互促进：某种特定行为可能支持某一分类结果，而某一分类结果也可能提示需要寻找特定的行为特征。

多种挑战可能影响辐射源分类与表征的准确性：

- 辐射源表征与长期模式分析可揭示动态特性，即信号类型随时间变化；
- 欺骗（spoofing）行为中，认知型辐射源通过重放信号来掩盖自身身份，可通过射频指纹（RF fingerprints）加以缓解——射频指纹可捕获辐射源独有的微小硬件缺陷；
- 对于未知辐射源（即缺乏先验训练数据的情况），其通常具备已知的行为特征（如标准调制方式、频率和脉冲参数），但会以出人意料的方式组合这些特征，或将其用于不同目的。开放集分类（open-set classification）技术能够识别并聚类这些新颖的特征组合，并动态构建新的类别。

### 4.1.1 特征工程与行为表征（Feature Engineering and Behavior Characterization）

行为表征（Behavior characterization）用于描述信号环境，包括瞬时能量、频率、散射特性、重复模式及其出现概率等特征。传统上，特征工程通过一套先验设计的模块进行计算，这些模块对应于专家已知的、对预期信号具有相关性的特征。这些成熟的信号情报（Signals Intelligence, SIGINT）方法即使在低信噪比（Signal-to-Noise Ratios, SNRs）条件下也能非常准确，因为它们依赖于领域内不可变的基本属性，例如信号传播的物理规律或目标的运动学特性。然而，在复杂问题域中，经典信号处理方法往往表现出脆弱性（brittleness），通常无法适应新型辐射源或新出现的环境条件。

传统方法利用脉冲宽度（pulse width）、脉冲重复间隔（pulse repetition interval）和频率等特征的统计分析，并将其映射到已知信号数据库中。这些特征可能是信道相关的（如信道冲激响应），也可能是发射机相关的（如信号编码方式）；它们可以是时变的，也可以是时不变的。分形特征（fractal features）可为信号特性提供更深层次的理解 [2–4]。

当拥有足够训练数据时，深度网络（DeepNet）方法能够识别信号环境中的潜在特征（latent features），其捕捉特征的保真度可能远高于人工设计的计算方法。这类方法能够捕获那些难以用显式数学表达式建模、或随环境条件显著变化的行为特征。此外，当问题域仅部分可观测时（即已知的可观测量 $\mathrm{o}_{n}$ 暂时无法测量，或存在不可观测特征 $z$ 时），深度网络方法通常更为有效。

在训练数据稀缺，或已知模型能高度贴合实际性能的情况下，人工设计的特征（hand-generated features）是更优选择。特征也可来源于非射频（non-RF）数据源，例如地形 [5]、道路网络 [6] 和天气条件 [7]。第4.3节将讨论若干数据融合方法。

结合多种方法是提升学习准确率的有效途径。例如，无线电信号强度通常遵循与距离平方成反比的规律，但会受到天线增益、多径效应和衰落等因素的影响。一种在射频领域构建混合模型的方法是同时使用传统特征和深度网络（DeepNets）：深度网络用于学习潜在特征，而传统特征则融入物理规律、人类专家知识及其他元数据。图4.2展示了一种可能的网络整体架构概念，该架构将I/Q数据、快速傅里叶变换（Fast Fourier Transform, FFT）结果与传统特征相结合。

> 特征工程应聚焦于那些有助于更准确评估电磁环境、从而支持可操作推断（actionable inferences）的特征。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-075.jpg?height=473&width=645&top_left_y=149&top_left_x=426){width="400"}

图4.2 一种可能的混合架构使用独立的深度网络分别分析I/Q数据和FFT结果，然后以分层方式将生成的特征与传统特征融合。

例如，可指示敌方性能下降的特征包括：(1) 通信网络吞吐量降低，暗示其可能切换至更鲁棒的调制方式（如从64-QAM切换为QPSK）；(2) 在雷达领域，若跟踪波形停止发射或检测到搜索波形，则表明其失去目标跟踪能力，这可能促使敌方提高波束重访率或改变波形（如采用更长的脉冲宽度）。

一个有趣的行为表征问题是评估所观测辐射源的复杂程度（degree of sophistication）[8–10]。通过对辐射源进行长时间观测，可计算其自适应能力与行为模型，从而支持对其策略及下一步可能行动的推断（见第4.6节）。

### 4.1.2 波形分类（Waveform Classification）

目前机器学习（ML）技术最流行的应用之一是波形分类。早期研究常使用支持向量机（Support Vector Machines, SVMs）进行雷达辐射源信号识别 [11, 12]、用于电子战（EW）应用的雷达天线扫描类型识别 [13]，以及自动数字调制识别 [14, 15]。近期研究正逐步转向深度网络（deep networks），这主要得益于其识别射频（RF）信号潜在特征（latent features）的能力 [16, 17]。相关实例包括：使用卷积神经网络（Convolutional Neural Networks, CNNs）对无线电辐射源进行分类 [18–20]、使用CNNs对雷达辐射源进行分类 [21]，以及使用循环神经网络（Recurrent Neural Networks, RNNs）捕捉时序模式 [22]。生成对抗网络（Generative Adversarial Networks, GANs）是有效的数据增强方法，可减少模型训练所需的样本数量 [23, 24]。

2018年，美国陆军快速能力办公室（U.S. Army Rapid Capabilities Office, RCO）¹ 举办了“信号分类挑战赛”（Signal Classification Challenge），旨在推动先进研究，探索用于盲信号分类与表征的深度学习算法 [25]。尽管该挑战赛所展示的准确率尚未达到实战部署水平，但相关研究迅速激增；更重要的是，学术界已普遍认识到数据质量与多样性的重要性。混合机器学习（hybrid ML）方法可能解决部分尚未攻克的问题。图4.2展示了一种可能的混合架构；第7.3.3节则描述了另一种适用于先验训练数据充足、但需在任务中快速更新的系统结构。值得注意的是，该挑战赛的获胜团队采用了一种混合方法，结合了传统特征、集成学习（ensemble learning）和深度网络（DeepNets）[26, 27]。

> ¹ 陆军RCO此后已更名为陆军快速能力与关键技术办公室（Army Rapid Capabilities and Critical Technologies Office, RCCTO）。

算法4.1概述了构建雷达类别检测器所需的基本步骤：首先，从真实观测参数（ground truth-observed parameters）——包括占空比（duty cycle）、频率、脉冲重复间隔（pulse repetition interval）和脉冲宽度（pulse width）——生成一组辐射源描述词（Emitter Descriptor Words, EDWs）；然后为每个EDW分配其对应的类别。本例中训练的是朴素贝叶斯（naïve Bayes）算法，该算法计算每个可能类别的概率。根据贝叶斯定理，后验概率  $  P(y \mid x) $ 表示EDW为 $ x $ 的雷达实际属于类别 $ y $ 的概率，其计算公式为：$ P(y \mid x) = \frac{P(x \mid y) \times P(y)}{P(x)} $ ，其中，$P(x \mid y)$ 是在给定类别 $ y $ 下观测到EDW $ x $ 的似然度，$P(y)$ 是类别 $ y $ 的先验概率，$P(x)$ 是EDW $ x $ 的先验概率。所有模型类型的训练/测试流程均相同，而其他机器学习模型可能获得更高的准确率。

图4.3说明了上述步骤在系统设计与运行阶段所处的位置。依据第10.4节所述的迭代验证流程，设计阶段需确定数据格式、开发模型并评估其性能。应始终尝试多种数据格式（及特征）和模型类型，以确定对当前问题最有效的方法——需综合考虑准确率、数据、目标和约束条件（见第3.6节）。当模型满足要求后，即可在运行阶段用于对新型雷达进行分类。图4.4展示了分类器在射频（RF）处理链中的位置。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-078.jpg?height=566&width=1126&top_left_y=151&top_left_x=186){width="400"}

图4.3 算法4.1中的每个步骤都必须在进入运行阶段前于设计阶段完成评估。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-078.jpg?height=408&width=1155&top_left_y=889&top_left_x=173){width="400"}

图4.4 雷达分类器位于通用射频（RF）处理链的最后一步。（其他人工智能技术可利用该信息进行更下游的分析。）

/// note| 算法 4.1：构建雷达类别（radar class）探测器时，需在部分数据上训练模型，并在其余数据上验证模型。每个机器学习（Machine Learning, ML）模型均采用相同流程进行训练与测试（见图 3.2）。

**步骤 1**：加载已知雷达的数据集。将数据集划分为训练集和测试集（比例约为 80% / 20%）*。

from sklearn.model_selection import train_test_split
radars = pandas.read_csv('radar-classes.csv')
X = radars.drop(columns=['Class'])
y = radars['Class']
(xTrain, xTest), (yTrain, yTest) = train_test_split(X, y, test_size=0.20)

**步骤 2**：训练算法。选择一种分类算法，例如朴素贝叶斯（naïve Bayes），并在训练数据上训练模型。

from sklearn.naive_bayes import GaussianNB
gnb = GaussianNB()
trainedGNB = gnb.fit(xTrain, yTrain)

**步骤 3**：验证结果。使用测试数据评估模型。通过混淆矩阵（confusion matrix）（见第 10.3.2 节）将预测类别与已知的测试类别进行比较。

from sklearn.metrics import confusion_matrix
yPred = trainedGNB.predict(xTest)
accuracy = (yTest == yPred).sum() / len(yTest) * 100
confMtx = confusion_matrix(yTest, yPred)

**步骤 4**：对新雷达进行分类并估计类别概率。本代码片段假设数据中不含“Class”列。开放式集分类（open-set classification）（见第 3.4 节）和消融试验（ablation trials）（见第 10.2 节）探讨了这一概念。

newRadars = pandas.read_csv('newRadars.csv')
yPred = trainedGNB.predict(newRadars)
yProbs = trainedGNB.predict_proba(newRadars)

> \* 大多数机器学习算法要求数据中不含 NaN 值。因此，我们使用每个特征的非 NaN 均值来替换该特征中的 NaN 值（见算法 2.1）。在训练机器学习模型前进行 NaN 值替换时，切勿在完整数据集（即在划分训练集和测试集之前）上进行替换。正确的做法是先划分数据，再仅使用训练数据计算均值。

///

### 4.1.3 特定辐射源识别（Specific Emitter Identification, SEI）

特定辐射源识别（SEI），又称射频指纹识别（RF fingerprinting），是指在不依赖接收机特性、发射机传输方式变化、其移动性或环境因素的情况下，对每个射频（RF）辐射源进行唯一识别的过程。Xu 等人 [28] 对该分类问题所面临的挑战与机遇进行了综述。

Chen 等人 [29] 利用聚类和无限隐马尔可夫随机场（infinite hidden Markov random fields）来同时处理时变与时不变特征。Nguyen 等人 [30] 采用高斯混合模型（Gaussian Mixture Models, GMMs）对信号进行聚类，进而实现分类。Cain 等人 [31] 则将基于图像的信号表示输入卷积神经网络（CNNs）进行处理。

当前大量研究工作直接将 I/Q 样本输入卷积神经网络（CNN），不再依赖人工设计的特征。这些模型不进行信道估计，也不假设对通信系统具备先验知识。相关示例包括：直接将 I/Q 样本输入 CNN [32–35]、在输入前增加有限冲激响应（Finite Impulse Response, FIR）滤波器 [36]，以及采用小波变换（wavelet transform）处理时序模式 [33]。

现有研究尚未在高密度、复杂的真实环境（尤其是低信号强度条件下）中达到传统方法的识别精度。未来，混合方法（hybrid approaches）可能会取得富有前景的结果。

## 4.2 性能估计（Performance Estimation）

还可利用机器学习（ML）技术来建模观测值 $o$ 与性能指标 $m$ 之间的关系，通常采用回归模型形式：$m = f(o, s)$。第2.3节按效能（effectiveness）与代价（cost）对可能的指标进行了分类。相关技术示例包括支持向量机（SVMs）[37]、人工神经网络（ANNs）[38–43]、贝叶斯网络（Bayesian networks）[44]，以及马尔可夫决策过程（Markov Decision Processes, MDPs）[45, 46]。由于这些方法用于度量系统性能，其中许多已被整合进强化学习（Reinforcement Learning, RL）框架中，所学习的模型随后用于控制决策过程（参见第7章）。

性能估计通过描述干扰机（jammer）的一组可观测量（observables）来学习每种技术的效能。图4.5展示了针对不同射频（RF）环境估计不同可控参数（controllables）性能的示例结果。图中仅标有点（dot）的位置是先验已知的；其余性能值由ML模型基于不同环境的可观测特征进行估计。本例使用SVM对性能空间建模，并采用传统特征描述环境。每次对环境的观测都会生成一组对应的可观测量 $o$；在该环境中应用某一策略 $s$ 会产生性能指标 $m_k$ 的反馈（即 $m_k = f_k(o, c)$ 的一个样本），并在图中标记为一个点。经训练后的模型即可泛化，估计所有策略在所有环境下的性能，从已知案例推广至其他条件。图7.5进一步扩展了该示例，展示模型如何在任务执行过程中进行增量学习。

作为一个具体实例，表5.1列出了若干对抗单音干扰机（tone jammer）的技术。学习器可同时建模这些技术对应的收益与代价。在此场景中，误码率（Bit Error Rate, BER）是评估性能的良好指标。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-079.jpg?height=742&width=1071&top_left_y=1199&top_left_x=215){width="400"}

图4.5 ML模型 $f_k$ 学习估计不同可控参数 $c$ 在不同环境下的性能 $m_k$。（数据来自例7.1。）图中的点表示实际观测值；其余所有点均由模型估计得出。图8.5以三维布局展示了此类图表。

机器学习还可用于预测干扰效能（jamming effectiveness）[47]，即学习针对所观测到的辐射源行为应采用何种电子攻击（Electronic Attack, EA）技术。对这些预测的性能反馈来自电子战毁伤评估（EW Battle Damage Assessment, EW BDA）（见第7.1.1节）。

## 4.3 多源情报数据融合（Multi-Intelligence Data Fusion）

为实现最优的态势感知（situational awareness），决策者需要综合来自多个来源的数据（例如雷达、无人机、地面或水下系统、舰船、天基资产、战斗机、天线和传感器网络）。为支持这一能力，认知电子战（cognitive EW）系统必须执行数据融合（data fusion）。

数据融合是从多个来源集成数据以生成更准确推断的过程。多源情报（Multi-Intelligence, multi-INT）数据融合通过比较、关联并融合不同类型多源数据，获得比单一传感器所能实现的更高精度和更具体的推断结果 [48–50]。由于存在多种挑战，实现高精度的数据融合是一项艰巨任务 [51, 52]。

> 在所有情况下，元数据标记（metadata tagging，见第8.1.1节）用于追踪数据的上游来源，使下游消费模块能够对误差进行补偿。

数据融合面临的挑战包括：

- **数据质量问题**：如测量不确定性、传感器校准误差和系统偏差，可能扭曲结果的准确性和置信度。数据治理（data curation，见第8.2节）有助于缓解该问题。
- **数据冲突**：可能导致违反直觉的结果。可追溯性（traceability，见第8.1.3节）和信息不确定性管理（managing information uncertainty，见第6.1.4节）有助于做出正确决策 [53]。
- **数据关联（data association）**：用于在不同概念之间建立联系，但若关联过于激进，可能产生荒谬结果。因果建模（causal modeling，见第4.5节）技术有助于识别正确的关系。
- **高维数据**：使得难以找出适合融合的有效信息，犹如“大海捞针”。第5.1.3节介绍了一些降维技术。
- **作战时序问题**：可能导致相关信息延迟到达或乱序抵达。此处元数据至关重要：时间很可能是最需忠实记录的特征，以确保融合引擎不会将不一致的条目错误融合。第4.3.3节将深入探讨此问题。

数据融合技术可分为三个非互斥类别：(1) 数据关联（data association）、(2) 状态估计（state estimation）和 (3) 决策融合（decision fusion）[52]。联合实验室主任/数据融合信息组（Joint Directors of Laboratories/Data Fusion Information Group, JDL/DFIG）模型定义了如图4.6所示的七级数据融合层次 [54, 55]。每一级都扩展了数据广度与分析范围。JDL/DFIG模型的优势包括支持态势感知探索、用户反馈优化和任务管理 [54]。该模型还成功应用于数据融合过程的可视化、促进讨论与建立共识 [55]，以及系统级数据融合设计 [54, 56]。数据融合领域的最新进展由国际信息融合学会（International Society of Information Fusion, ISIF）在文献 [57] 中进行了综述。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-081.jpg?height=663&width=438&top_left_y=1357&top_left_x=531){width="400"}

图4.6 JDL/DFIG模型包含七个级别的数据融合。

### 4.3.1 数据融合方法（Data Fusion Approaches）

《传感器与数据融合》（Sensor and Data Fusion）一书 [58] 全面汇编了关于传感器与数据融合（sensor and data fusion）相关主题的研究论文。所探讨的问题包括目标跟踪（target tracking）、空中交通管制（air traffic control）、遥感（remote sensing）、异常检测与行为预测（anomaly detection and behavior prediction）以及传感器网络（sensor networks）等。

数据融合（data fusion）技术已被广泛应用于多传感器（multisensor）环境中，旨在融合来自不同传感器的数据。多传感器数据融合的主要优势包括提升数据的真实性（authenticity）、可靠性（reliability）和可用性（availability）[49, 51, 52, 59–62]。其中，数据真实性提升的具体表现包括：检测性能改善、置信度提高、可靠性增强以及数据模糊性降低；而数据可用性提升则侧重于扩展空间和时间维度上的多传感器覆盖范围。

数据融合（data fusion）有助于解决无线传感器网络（Wireless Sensor Networks, WSNs）中的可扩展性问题，这些问题通常由大量传感器节点、数据包冲突以及冗余数据传输所引起。当路由过程执行数据融合（即对传感器数据进行合并，仅转发融合结果）时，可减少消息总数、避免冲突并降低能耗 [49, 51, 59]。WSN 节点通常依赖电池供电，其能量消耗主要来自计算、通信、感知以及空闲状态 [63]。

多情报源/多传感器（multi-INT/multisensor）数据融合技术在电子战（Electronic Warfare, EW）中的一些有趣应用，是从其他类型的数据源中提取特征加以利用。Brandfass 等人 [5] 开发了一种将地图数据（map data）融入雷达的应用；Katsilieris 与 Charlish [6] 利用道路网络（road networks）辅助地面动目标指示（Ground Moving Target Indicator, GMTI）；Zhang 等人 [7] 则利用气象数据（weather data）改进路径损耗（path loss）预测；Levashova 等人 [64] 提出了一种数据融合方法，用于预测恐怖威胁活动，可应用于区域监视（area surveillance）、指挥与控制（command and control）、通信以及访问权限管理等场景。

### 4.3.2 示例：用于定位的5G多源情报数据融合（Example: 5G Multi-INT Data Fusion for Localization）

机器学习（ML）如何助力多源情报（multi-INT）数据融合的一个具体实例是5G定位及其上下文感知（context awareness）概念。² 具备上下文感知能力的移动设备（如智能手机）可自主获知自身位置，或尝试推断终端用户当前所处的情境。表4.1列出了5G的基于位置的关键性能指标（Key Performance Indicators, KPIs）[65, 66] 及部分相关应用场景。

> ² 5G是由第三代合作伙伴计划（3rd Generation Partnership Project, 3GPP）标准化组织制定的一系列第五代商用蜂窝通信标准。

5G场景中复杂的定位KPI需求可通过多种基于机器学习的数据融合技术与测量方法来满足，这些方法汇总于表4.2 [66–71]。5G定位的可靠性还依赖于高效的网络策略，例如节点优先级排序、节点激活与部署。此外，网络运行中的协同操作、鲁棒性保障以及分布式设计对定位同样至关重要，因为它们直接影响能耗并决定定位精度 [72]。

5G中一种新颖的定位方法是基于软信息（Soft Information, SI）的定位，该方法融合异构传感器数据与上下文信息。传统定位方法依赖单值估计（Single-Value Estimates, SVEs），例如到达时间（Time of Arrival, TOA）、观测到达时间差（Observed Time Difference of Arrival, OTDOA）、到达角（Angle of Arrival, AoA）或接收信号强度指示（Received Signal Strength Indicator, RSSI）。而新型技术则不再依赖单一距离估计，而是采用一组可能的取值，例如软距离信息（soft range information）[67]。支持ML的数据融合方法包括：数据关联、状态估计、决策融合、分类、预测/回归、无监督机器学习、降维，以及统计推断与分析 [68]。

**表4.1 5G基于位置的关键性能指标（KPIs）及相关应用场景**

| KPI | 描述 |
| :--- | :--- |
| 位置精度（Position Accuracy, PA） | 用户设备（UE）估计位置与其真实位置之间的偏差 |
| 速度精度（Speed Accuracy, SpA） | UE速度估计值大小与真实值大小之间的偏差 |
| 航向精度（Bearing Accuracy, BA） | UE测量航向与真实航向之间的偏差 |
| 时延（Latency, L） | 触发位置相关数据确定的事件与该数据在定位系统接口可用之间的时间间隔 |
| 首次定位时间（Time to First Fix, TTFF） | 触发位置相关数据确定的事件与该数据在定位系统接口可用之间的时间间隔 |
| 更新率（Update Rate, UR） | 定位系统生成位置相关数据的频率 |
| 功耗（Power Consumption, PC） | 定位过程产生位置相关数据所消耗的电功率（通常以毫瓦计） |
| 单次定位能耗（Energy per Fix, EPF） | 定位过程产生一次位置相关数据所消耗的电能（通常以毫焦/次计） |
| 系统可扩展性（System Scalability, SS） | 定位系统在单位时间内、和/或特定更新率下可确定位置相关数据的设备数量 |

基于上述KPI，3GPP提出了若干应用场景及其潜在需求，列举如下：

- 室内应急响应人员：PA：水平1米，垂直2米；可用性：95%；TTFF：10秒；L：1秒。  
- 室外增强现实：PA：水平1–3米，垂直0.1–3米；速度：2 m/s；航向：10度；可用性：80%；TTFF：10秒；L：1秒；UR：0.1–1秒；PC：低功耗。  
- 室外交通监控与控制：PA：水平1–3米，垂直2.5米；可用性：95%；UR：0.1秒；TTFF：10秒；L：30毫秒；需具备抗欺骗（antispoofing）与防篡改（antitampering）能力。  
- 室外资产追踪与管理：PA：水平10–30米；速度：5 m/s；可用性：99%；UR：300秒至1天；需具备抗欺骗与防篡改能力；支持无覆盖区域（out of coverage）；EPF = 20 mJ/次。  
- 无人机（UAV）（数据分析）：室外PA：水平0.1米，垂直0.1米；可用性：99%；TTFF：10秒；低功耗；需具备抗欺骗与防篡改能力。

**表4.2 支持机器学习的、依赖与不依赖无线接入技术（RAT）的数据融合技术与测量方法**

| 依赖无线接入技术（RAT-Dependent） | 不依赖无线接入技术（RAT-Independent） |
| :--- | :--- |
| **4G–4.5G**：小区ID（Cell-ID）、增强型小区ID（enhanced-CID）、观测到达时间差（OTDOA）、上行链路TDA、射频模式匹配 [66] | **传统方法**：全球导航卫星系统（GNSS）、射频识别（RFID）、地面信标系统、蓝牙、无线局域网（WLAN）、各类传感器（如射频、声学、红外、雷达、激光、惯性、视觉技术和气压计）、超宽带（UWB）[66] |
| **新型方法**：多径辅助定位 [69]、基于大规模毫米波天线阵列的单锚点定位 [70]、协同定位（如设备到设备（D2D）和车联万物（V2X））[71] | **新型方法**：基于异构传感器与上下文信息的分布式软信息定位 [67]，例如数字地图、动态信道模型、地理信息系统（GIS）数据和实时交通数据 |

### 4.3.3 分布式数据融合（Distributed Data Fusion）

分布式数据融合是指智能体（intelligent agents）（1）感知其局部环境，（2）与其他智能体通信，（3）协同推断关于某一特定过程的知识的过程 [73]。在电子战（EW）领域，分布式数据融合是一个必须重点考虑的方向，因为它需满足该领域施加的诸多关键约束，尤其是通信受限问题。Lang [74] 综述了在知识不完备条件下进行协同决策管理（collective Decision Management, DM）的相关研究。Makarenko 等人 [75] 将分布式数据融合视为一个分布式推理问题，并将Shafer-Shenoy算法与Hugin连接树（junction tree）算法应用于目标跟踪。去中心化估计（decentralized estimation）可提升系统对节点与链路故障的鲁棒性 [76]。Hall 等人编辑的著作合集 [77] 描述了多种适用于分布式网络中心作战（distributed network-centric operations）的数据融合方法。

高质量的元数据（metadata，见第8.1.1节）是分布式数据融合的关键前提。其挑战并非频谱本身的精度问题，而在于如何将多个节点在不同位置采集的跨频谱信号整合为对观测辐射源的一致性整体视图。该步骤要求通过信息共享实现一致的信号解释，并对辐射源行为进行聚合，且需采用高度一致的行为表征方式。此外，数据溯源（provenance）与可信度（credibility，见第8.1.3节）显著影响数据转换、所做推断以及下游模块的功能。

总体而言，分布式数据融合可能改变数据的整体敏感性（例如，单个传感器X测得的温度可能不具敏感性，但传感器阵列的综合结果则可能具有显著意义）。

> 分布式分析是一种有效降低数据模糊性、并提升慢时标（slower-time）结论准确性的强大手段。

## 4.4 异常检测（Anomaly Detection）

异常（anomaly）或离群点（outlier）检测旨在发现数据中不符合已知行为模式的模式 [78]。统计学界早在19世纪就开始研究数据中的异常检测问题 [79]，目前已存在多种异常检测技术。

图4.7展示了一个二维数据集中异常的简单示例：此前观测到的正常数据以黑色圆圈表示，而异常点则以三角形表示。射频（RF）中的异常可能由杂散噪声、测量误差或新出现的行为等因素引起。

Chandola 等人 [78] 区分了简单异常（simple anomalies）与复杂异常（complex anomalies）。简单异常（也称点异常，point anomalies）指相对于其余数据而言异常的单个数据实例（例如，某部雷达故意使用不同频率，或产生偶然性错误）。大多数异常检测研究聚焦于点异常。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-085.jpg?height=544&width=895&top_left_y=149&top_left_x=303){width="400"}

图4.7 异常检测旨在识别不符合常规行为的数据。

复杂异常可进一步细分为上下文异常（contextual anomalies）和集体异常（collective anomalies）。上下文异常（或称条件异常）是指在特定上下文中异常、但在其他情况下并不异常的数据实例 [80]。集体异常则是指相对于整个数据集而言，一组相关数据实例的整体组合呈现异常。集体异常中的各个单独数据实例本身可能并非异常，但它们的联合出现却构成异常。例如，某部雷达通常将特定的脉冲串（例如由参数、射频或脉冲描述字（Pulse Descriptor Word, PDW）定义）配合特定扫描模式（如方框搜索）用于目标截获，但此次却将其用于跟踪——这种组合行为即构成集体异常。

异常检测技术依赖于多种机器学习方法，包括分类、最近邻（nearest neighbor）、聚类、统计学、信息论和谱理论（spectral theory）[78, 81–88]。常见的基于分类的异常检测方法通常涉及支持向量机（SVMs）、贝叶斯网络、基于规则的方法，以及深度网络（DeepNets），尤其是自编码器（autoencoders）。

异常检测常用于网络入侵检测与分类，所采用的算法包括：前馈人工神经网络（feed-forward ANNs）[89]、循环神经网络（RNNs）[90]、自编码器 [91]、SVMs [92, 93]、以及用于多云环境的监督式机器学习技术（如线性回归和随机森林）[94]，还有受限玻尔兹曼机（restricted Boltzmann machines）[95]。

在运行时（runtime）应用异常检测的一个有趣场景是检测“演化的正常数据”——即当前（正常）状态不足以代表未来状态的情况。在人工智能文献中，这一现象被称为**概念漂移**（concept drift），因为当前对“正常”的定义已偏离任务初期的概念。应对概念漂移的一种方法是估计能够刻画观测范围的统计分布模型的属性。当这些分布开始分离，且“异常”信号具有一定的权重（支持度）时，可将分布模型拆分，以分别捕捉所有观测到的模式（modes）的统计特性。这一思想正是开放集分类（open-set classification，见第3.4节）研究的核心基础。通过这种方式，系统既不会丢失已知行为的历史信息，也不会被新出现的异常干扰，同时还能适应新的行为模式。尽管该方案并非精确解（因为在何时生成新的分布模型组件方面存在权衡），但具备持久记忆能力以及学习新行为的机制至关重要。

## 4.5 因果关系（Causal Relationships）

因果推断（Causal inference）旨在从观测数据中提取因果关系，通常适用于无法通过显式实验验证假设的情形 [96, 97]。因果层级（causal hierarchy）根据各层级模型所能回答的问题类型对模型进行分组，具体如下：

- **关联（Association）**：观察。我对某一概念 \( y \) 的信念如何依赖于观测 \( x \)？即 \( P(y \mid x) \)。
- **干预（Intervention）**：行动。执行某个动作 \( a \) 会对结果 \( y \) 产生何种影响？即 \( P(y \mid \operatorname{do}(a)) \)。
- **反事实（Counterfactuals）**：想象。在其他条件下本应发生什么？即 \( P(y \mid x^{\prime}) \)。

因果模型常用于医学、战争及其他社会场景的分析。它们在网络安全领域效果显著 [98]，也被应用于雷达与空中交通安全管理 [99]。其目标是识别可能导致特定结果的事件序列，例如作为迫近危险前兆的“危险信号”（red flag）。在射频（RF）领域，Martin 与 Chang [100] 利用概率性结构因果模型（Structural Causal Models, SCMs）和多属性效用理论（multiattribute utility theory），实现动态频谱接入（Dynamic Spectrum Access, DSA）的态势感知与决策。该 DSA 因果推断系统基于频谱占用情况、频谱用户位置估计以及路径损耗（path loss）特性来构建并维持态势感知。作者推导出态势感知（SA）不确定性与 DSA 系统性能之间的关系 [101, 102]，所得路径损耗估计使 DSA 系统能够在可接受的风险水平下运行。

其他用于分析因果关系的技术包括：统计模式 [103]、格兰杰因果（Granger causality）[104, 105]、滞后效应（hysteresis）[106]、前兆检测（precursor detection）[107]、用于识别常见短语的 \( n \)-gram 分析，以及用于推断可能状态转移的隐马尔可夫模型（Hidden Markov Models, HMMs）[9]。意图识别（Intent recognition，见第4.6节）将模式分析提升一个层次，旨在识别完整的语法结构与层级化行为模式。

## 4.6 意图识别（Intent Recognition）

计划识别（plan recognition）、活动识别（activity recognition）和意图识别（intent recognition）均通过观察其他行动者与其环境及彼此之间的交互，对其行为进行推断 [108, 109]。在认知电子战（cognitive EW）系统中，这些技术可用于观察并理解战场中所有参与方（包括敌方、联盟伙伴以及人类电子战军官（EWOs））的计划、活动与目标。此类推断实际上包含三项相互关联但各自独立的任务。

首先，活动识别（activity recognition）用于识别智能体正在执行的最低层级动作。其核心任务是将原始、含噪且通常连续的数据处理为高置信度的离散事件（这些事件往往持续时间更长）。例如，信号处理算法可从连续的传感器数据流中滤除噪声，从而清晰、无歧义地识别当前正在发生的事件。

其次，目标识别（goal recognition）旨在确定被观测智能体所追求的最高层级期望状态或最终目标。该过程从宏观层面回答“该智能体试图完成什么？”这一问题。从抽象角度看，活动识别与目标识别可视为同一类问题，可能适用相似的算法。本质上，二者均为标注问题：给定一段观测序列，这两项任务均输出一个单一标签，分别用于标识正在执行的活动或正在达成的目标。

最后，与上述两项不同，计划识别（plan recognition）并非为一系列活动分配单一标签，而是生成一种结构化（通常为层级化）的表示，将观测到的活动与智能体的期望目标状态关联起来 [110]。因此，计划识别系统以活动识别所输出的事件序列为输入，并将这些观测组织成能反映特定活动序列与其最终目标之间因果关系的结构化表示。对最终目标的这种推断意味着目标识别通常是计划识别的副产品。此外，该过程通常不仅需要捕捉已观测活动之间的关系，还需推测：若算法对行动者计划与目标的识别正确，该行动者接下来将必须执行哪些未来活动。因此，计划识别能够在多个抽象层级上预测未来行动。这些预测结果可作为电子战毁伤评估（EW Battle Damage Assessment, EW BDA，见第7.1.1节）中的比对特征。

对抗性意图识别（adversarial intent recognition）为计划识别算法带来特殊挑战，因为行动者会试图隐藏或伪装其行为，或故意改变活动模式以增加识别难度。然而，只要具备对敌方可行行为的模型，对抗性行为的识别过程与良性行为并无本质区别。算法在获得额外证据以区分二者之前，应对行为是否良性或具有欺骗性保持中立（agnostic）。

计划识别（plan recognition）算法可分为以下两类 [111]：

- 作为规划的计划识别（Plan recognition as planning）：将观测到的动作/活动视为从状态到状态的函数，并捕捉其执行所引起的世界状态变化。在此框架下，计划识别是一种基于世界状态的搜索，旨在寻找一个可证明将行动者从已知初始世界状态引导至目标世界状态的动作序列。
- 作为解析的计划识别（Plan recognition as parsing）：将问题视为在可能计划空间中的搜索。此类系统显式表示所有可能的计划（通常使用类似于自然语言处理（NLP）中所用的形式化语法），并在该空间中搜索与输入观测最一致的计划。该过程通过构建层级结构来刻画计划。

例如，概率性敌对智能体任务跟踪器（Probabilistic Hostile Agent Task Tracker, PHATT）[112] 采用基于解析的方法，成功应用于多个不同领域，包括网络入侵检测 [113] 和内部威胁/滥用行为检测。为表示待识别的计划，PHATT 使用了一种概率性上下文无关树语法（probabilistic context-free tree grammar），该语法最接近格里巴赫范式（Greibach Normal Form, GNF）语法——GNF 常用于编程语言编译器中。尽管 PHATT 效果显著，但其广泛应用受限于高昂的计算开销：它过早地对高层目标做出承诺，并要求对所有一致计划空间进行完整搜索。例如，假设观测到一架飞机起飞，PHATT 会立即考虑飞往所有可能目的地的所有可能航路，无论这些航路多么不可能。这一问题阻碍了其在大规模真实场景中的部署。

Geib 在“词汇化意图推理引擎”（Engine for Lexicalized Intent Reasoning, ELEXIR）的 LEXrec 组件中开展的近期工作 [114] 解决了这一局限。LEXrec 不再使用树语法，而是采用来自前沿自然语言处理研究的概率性组合范畴语法（Probabilistic Combinatory Categorial Grammars, CCGs）。LEXrec 支持识别多个并发且交错的计划、偏序计划（partially ordered plans）以及领域中的部分可观测性。

此外，LEXrec 利用蒙特卡洛树搜索（Monte-Carlo Tree Search）——即 AlphaGo 背后的算法 [115]——以“任意时间”（anytime）方式对可能计划空间进行启发式搜索（见第5.3节）。该方法使 LEXrec 能在数分钟内处理数千条观测数据，用于识别灰色地带行动（greyzone operations）。LEXrec 的语法还可配置以进一步加速处理，因此在大规模真实问题部署方面前景广阔。其搜索过程可被调整，优先搜索对观测结果更可能的解释。在此设定下，包含敌对意图的高概率解释将先于低概率的良性解释被探索。

类似的基于语法的系统已成功应用于多功能雷达问题 [116, 117]。此外，计划识别研究社区已开发出监督式与无监督式学习技术，可根据观测序列自动学习新的语法（即潜在计划）。尽管该研究尚处初期阶段，但已有证据表明，自动学习的语法可比人工构建的更准确。

像 LEXrec 这样的系统可接收来自多个分布式多功能雷达的大量已分类雷达航迹与观测数据作为输入。基于这些观测数据，以及一个能刻画目标可能遵循的个体与联合计划的语法，该系统可生成一组假设的计划与目标（包括个体与团队层面），并为这些可能计划建立条件概率分布。此类计划可捕捉复杂的雷达工作模式及时间上延展的行动序列。此外，系统不仅能基于目标的即时轨迹，更能基于对其目标的高层理解，预测目标未来的行动路径。

近期研究已开始引入博弈论方法，用于识别那些被观测智能体主动试图规避检测的计划 [118–120]。对抗性计划识别任务包括：推断出所有可能敌对计划上的概率分布；而策略制定任务则通过计算纳什均衡（Nash equilibrium）选择最合适的响应。第6.2节将讨论博弈论的其他应用。

### 4.6.1 自动目标识别与跟踪（Automatic Target Recognition and Tracking）

电子战（EW）中一种常见的意图识别任务是目标跟踪。自20世纪90年代初起，机器学习（ML）技术已被广泛应用于目标识别与跟踪任务（例如 [121–124]）。计算机视觉领域流行的许多技术已被射频（RF）领域成功采纳，包括基于知识的方法（knowledge-based approaches）和纯经验方法（strictly empirical approaches）。

基于知识的方法利用先验分布以及来自相似环境的知识辅助模型（knowledge-aided models）进行跟踪。例如，Xiang 等人 [125] 采用递归贝叶斯状态估计（recursive Bayesian state estimation），在“选择待跟踪目标”与“获取跟踪信息”之间迭代进行。Gunturken [126] 则从一个较弱的目标估计出发，通过两个自适应滤波阶段对其进行精化。

经验性机器学习方法仅依赖环境观测数据来构建环境模型。例如，高斯混合模型（Gaussian Mixture Models, GMMs）是识别地面监视雷达目标的有效方法，其性能甚至可超越训练有素的人类操作员 [127]。GMMs 在将目标测量值分配给雷达中多个已有航迹方面也表现出色 [128, 129]。Schmidlin 等人 [124] 早期提出了一种人工神经网络（ANN）方法用于多目标雷达跟踪问题：其中一个ANN用于识别轨迹并输出航迹预测，另一个循环神经网络（RNN）则负责将观测点（plots）关联到对应航迹。与卡尔曼滤波器（Kalman filters）相比，ANN方法精度更高，而卡尔曼滤波器对噪声更具鲁棒性。卷积神经网络（CNNs）在雷达与合成孔径雷达（SAR）图像中的目标检测任务中也极为有效 [17]。2019年视觉目标跟踪（Visual Object Tracking, VOT）挑战赛中，没有任何跟踪器依赖人工设计特征，组织者指出这与VOT2018形成“鲜明对比” [130]。

CNNs 与支持向量机（SVMs）也已成功结合 [131–133]：先训练CNN，然后用SVM替换其最终的分类层（类似于图7.6所示结构）。这种组合充分利用了CNN强大的特征学习能力，以及SVM在高维输入空间中优异的泛化能力，从而实现极高的准确率。

将传统技术——包括人工设计特征、基于知识的方法和经验方法——融合于混合架构中，可显著提升模型的学习速度与整体效能。多种技术往往具备互补能力 [130, 134–137]。近期一些研究进一步将强化学习（reinforcement learning）引入跟踪方法，构建兼具感知与行动能力的系统，例如采用马尔可夫决策过程（MDPs）[45] 或深度Q学习（deep Q-learning）[138]。Xiang 等人 [125] 将递归贝叶斯状态估计用于目标跟踪，并结合动态图模型上的优化，以选择下一跟踪时刻最优的雷达子集、波形及部署位置。

## 4.7 结论（Conclusion）

电子支援（Electronic Support, ES）是每个高效电子战（EW）系统的核心。电子防护（Electronic Protection, EP）与电子攻击（Electronic Attack, EA）的性能直接取决于ES的质量。ES负责分析电磁环境，并生成驱动决策管理（Decision Management, DM）的可观测量。本章介绍了一系列频谱态势感知（Spectrum Awareness, SA）技术，用以应对ES系统所面临的若干特定挑战。

经典机器学习（ML）技术在电子战系统中已有多年应用。近年来，受深度学习领域发展的推动，机器学习正以前所未有的速度涌现出新见解与新成果。深度学习在自然语言处理和图像处理领域取得的显著突破，主要归功于三大因素：更强大的计算能力、大量标注数据，以及对网络架构连接方式的深入理解。射频（RF）领域可借鉴这些进展，以解决电子支援（ES）中的类似问题。

然而，拥抱深度学习并不意味着应摒弃经典机器学习方法或领域专家知识。应根据具体任务选择最合适的方案，在满足系统目标与需求的前提下，综合运用各类技术优势。

## References

[1] Howland, P., S. Farquhar, and B. Madahar, "Spectrum Situational Awareness Capability: The Military Need and Potential Implementation Issues," Defence Science and Technology Lab Malvern (United Kingdom), Tech. Rep., 2006.
[2] Aghababaee, H., J. Amini, and Y. Tzeng, "Improving Change Detection Methods of SAR Images Using Fractals," Scientia Iranica, Vol. 20, No. 1, 2013.
[3] Dudczyk, J., "Specific Emitter Identification Based on Fractal Features," in Fractal AnalysisApplications in Physics, Engineering and Technology, IntechOpen Limited, 2017.
[4] L. Shen, Y.-S. Han, and S. Wang, "Research on Fractal Feature Extraction of Radar Signal Based On Wavelet Transform," in Advances in Intelligent Systems and Interactive Applications, 2017.
[5] Brandfass, M., et al., "Towards Cognitive Radar via Knowledge Aided Processing for Airborne and Ground Based Radar Applications," in International Radar Symposium, 2019.
[6] Katsilieris, F., and A. Charlish, "Knowledge Based Anomaly Detection for Ground Moving Targets," in Radar Conference, IEEE, 2018.
[7] Zhang, Y., et al., "Path Loss Prediction Based on Machine Learning: Principle, Method, and Data Expansion," Applied Sciences, 2019.
[8] Krishnamurthy, V., Adversarial Radar Inference. From Inverse Tracking to Inverse Reinforcement Learning of Cognitive Radar, 2020. Online: https://arxiv.org/abs/2002.10910.
[9] Haigh, K. Z., et al., "Modeling RF Interference Performance," in Collaborative Electronic Warfare Symposium, 2014.
[10] Topal, O., S. Gecgel, and E. Eksioglu, Identification of Smart Jammers: Learning Based Approaches Using Wavelet Representation, 2019. Online: https://arxiv.org/abs/1901.09424.
[11] Zhang, G., W. Jin, and L. Hu, "Radar Emitter Signal Recognition Based on Support Vector Machines," in Control, Automation, Robotics and Vision Conference, IEEE, Vol. 2, 2004.
[12] Zhang, G., H. Rong, and W. Jin, "Application of Support Vector Machine to Radar Emitter Signal Recognition," Journal of Southwest Jiaotong University, Vol. 41, No. 1, 2006.
[13] Barshan, B., and B. Eravci, "Automatic Radar Antenna Scan Type Recognition in Electronic Warfare," Transactions on Aerospace and Electronic Systems, Vol. 48, No. 4, 2012.
[14] Mustafa, H., and M. Doroslovacki, "Digital Modulation Recognition Using Support Vector Machine Classifier," in Asilomar Conference on Signals, Systems and Computers, IEEE, Vol. 2, 2004.
[15] Park, C.-S., et al., "Automatic Modulation Recognition Using Support Vector Machine in Software Radio Applications," in International Conference on Advanced Communication Technology, IEEE, Vol. 1, 2007.
[16] Li, X., et al., "Deep Learning Driven Wireless Communications and Mobile Computing," Wireless Communications and Mobile Computing, 2019.
[17] Majumder, U., E. Blasch, and D. Garren, Deep Learning for Radar and Communications Automatic Target Recognition, Norwood, MA: Artech House, 2020.
[18] O'Shea, T., J. Corgan, and T. Clancy, "Convolutional Radio Modulation Recognition Networks," in International Conference on Engineering Applications of Neural Networks, Springer, 2016.
[19] O'Shea, T., T. Roy, and T. Clancy, "Over-the-Air Deep Learning Based Radio Signal Classification," IEEE Journal of Selected Topics in Signal Processing, Vol. 12, No. 1, 2018.
[20] Shi, Y., et al., "Deep Learning for RF Signal Classification in Unknown and Dynamic Spectrum Environments," in International Symposium on Dynamic Spectrum Access Networks, IEEE, 2019.
[21] Sun, J., et al., "Radar Emitter Classification Based on Unidimensional Convolutional Neural Network," IET Radar, Sonar and Navigation, Vol. 12, No. 8, 2018.
[22] Notaro, P., et al., Radar Emitter Classification with Attribute-Specific Recurrent Neural Networks, 2019. Online: https://arxiv.org/abs/1911.07683.
[23] Li, M., et al., "Generative Adversarial Networks-Based Semi-supervised Automatic Modulation Recognition for Cognitive Radio Networks," Sensors, 2018.
[24] Shi, Y., K. Davaslioglu, and Y. Sagduyu, Generative Adversarial Network for Wireless Signal Spoofing, 2019. Online: https://arxiv. org/abs/1905.01008.
[25] Urrego, B., "Army Signal Classification Challenge," in GNURadio Conference, 2018.
[26] Logue, K., et al., "Expert RF Feature Extraction to Win the Army RCO AI Signal Classification Challenge," in Python in Science, 2019.
[27] Vila, A., et al., "Deep and Ensemble Learning to Win the Army RCO AI Signal Classification Challenge," in Python in Science, 2019.
[28] Xu, Q., et al., "Device Fingerprinting in Wireless Networks: Challenges and Opportunities," IEEE Communications Surveys \& Tutorials, Vol. 18, No. 1, 2016.
[29] Chen, F., et al., On Passive Wireless Device Fingerprinting Using Infinite Hidden Markov Random Field, 2012. Online: https://tinyurl.com/chen2012fingerprint.
[30] Nguyen, N., et al., "Device Fingerprinting to Enhance Wireless Security Using Nonparametric Bayesian Method," in INFOCOM, 2011.
[31] Cain, L., et al., "Convolutional Neural Networks For Radar Emitter Classification," in Annual Computing and Communication Workshop and Conference, IEEE, 2018.
[32] Sankhe, K., et al., "ORACLE: Optimized Radio clAssification Through Convolutional neuraL nEtworks," in INFOCOM, Dataset available at https://genesys-lab.org/oracle, 2019.
[33] Youssef, K., et al., Machine Learning Approach to RF Transmitter Identification, 2017. Online: https://arxiv.org/abs/1711.01559.
[34] Wong, L., et al., "Clustering Learned CNN Features from Raw I/Q data for Emitter Identification," in MILCOM, 2018.
[35] Tong, J., et al., "Deep Learning for RF Fingerprinting: A Massive Experimental Study," Internet of Things (IoT) Magazine, 2020.
[36] Restuccia, F., et al., DeepRadioID: Real-Time Channel-Resilient Optimization of Deep LearningBased Radio Fingerprinting Algorithms, 2019. Online: https://tinyurl.com/deepRadioID.
[37] Haigh, K. Z., et al., "Parallel Learning and Decision Making for a Smart Embedded Communications Platform," BBN Technologies, Tech. Rep. BBN-REPORT-8579, 2015.
[38] Baldo, N., et al., "A Neural Network Based Cognitive Controller for Dynamic Channel Selection," in ICC, IEEE, 2009.
[39] Haigh, K. Z., S. Varadarajan, and C. Y. Tang, "Automatic Learning-Based MANET CrossLayer Parameter Configuration," in Workshop on Wireless Ad hoc and Sensor Networks, IEEE, 2006.
[40] Katidiotis, A., K. Tsagkaris, and P. Demestichas, "Performance Evaluation of Artificial Neural Network-Based Learning Schemes for Cognitive Radio Systems," Computers and Electric Engineering, Vol. 36, No. 3, 2010.
[41] Troxel, G., et al., "Adaptive Dynamic Radio Open-Source Intelligent Team (ADROIT): Cognitively-Controlled Collaboration Among SDR Nodes," in Workshop on Networking Technologies for Software Defined Radio (SDR) Networks, IEEE, 2006.
[42] Haviluddin, A., et al., "Modelling of Network Traffic Usage Using Self-Organizing Maps Techniques," in International Conference on Science in Information Technology, 2016.
[43] Qu, X., et al., "A Survey on the Development of Self-Organizing Maps for Unsupervised Intrusion Detection," Mobile Networks and Applications, 2019.
[44] Demestichas, P., et al., "Enhancing Channel Estimation in Cognitive Radio Systems by Means of Bayesian Networks," Wireless Personal Communications, Vol. 49, 2009.
[45] Selvi, E., et al., "On the Use of Markov Decision Processes in Cognitive Radar: An Application to Target Tracking," in Radar Conference, IEEE, 2018.
[46] Thornton, C., et al., Experimental Analysis of Reinforcement Learning Techniques for Spectrum Sharing Radar, 2020. Online: https://arxiv.org/abs/2001.01799.
[47] Lee, G.-H., J. Jo, and C. Park, "Jamming Prediction for Radar Signals Using Machine Learning Methods," Security and Communication Networks, 2020.
[48] English, D., C4ISRNET the Compass/Net Defense Blogs: How multiINT Enables Deciphering the Indecipherable, Accessed 2020-05-31, 2015. Online: https://tinyurl.com/c4isrnet.
[49] Hall, D., and J. Llinas, "An Introduction to Multisensor Data Fusion," Proceedings of the IEEE, Vol. 85, No. 1, 1997.
[50] F. White, "JDL, Data Fusion Lexicon," Technical Panel for C, vol. 3, 1991.
[51] Khaleghi, B., et al., "Multisensor Data Fusion: A Review of the State-of-the-Art," Information Fusion, Vol. 14, No. 1, 2013.
[52] Castanedo, F., "A Review of Data Fusion Techniques," The Scientific World Journal, Vol. 2013, 2013.
[53] Dong, X., and F. Naumann, "Data Fusion: Resolving Data Conflicts for Integration," Proceedings of the VLDB Endowment, Vol. 2, No. 2, 2009.
[54] Blasch, E., and D. Lambert, High-level Information Fusion Management and Systems Design, Norwood, MA: Artech House, 2012.
[55] Liggins, M., II, D. Hall, and J. Llinas, Handbook of Multisensor Data Fusion: Theory and Practice (Second Edition), CRC Press, 2008.
[56] Blasch, E., et al., "Revisiting the JDL Model for Information Exploitation," in FUSION, IEEE, 2013.
[57] ISIF.org. (2020). "International society of information fusion." Accessed 2020-05-31, Online: http://isif.org/.
[58] Milisavljevic, N. (Ed.), Sensor and Data Fusion, In-Teh, 2009.
[59] Walts, E., Data Fusion for C3I: A Tutorial, Argus Business, 1986.
[60] Fabeck, G., and R. Mathar, "Kernel-Based Learning of Decision Fusion in Wireless Sensor Networks," in FUSION, IEEE, 2008.
[61] Ansari, N., et al., "Adaptive Fusion by Reinforcement Learning for Distributed Detection Systems," IEEE Transactions on Aerospace and Electronic Systems, Vol. 32, No. 2, 1996.
[62] Hossain, M., P. Atrey, and A. El Saddik, "Learning Multisensor Confidence Using a Reward-And-Punishment Mechanism," IEEE Transactions on Instrumentation and Measurement, Vol. 58, No. 5, 2009.
[63] Stankovic, J., and T. He, "Energy Management in Sensor Networks," Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences, Vol. 370, No. 1958, 2012.
[64] Levashova, T., et al., "Situation Detection Based on Knowledge Fusion Patterns," in International Workshop on Ontologies and Information Systems, 2014.
[65] 3GPP, "Study on NR Positioning Support (Release 16)," Standard 3GPP TSG RAN TR 38.855, 2019.
[66] Bartoletti, S., et al., "5G Localization and Context-Awareness," in 5G Italy White eBook: from Research to Market, 2018.
[67] Conti, A., et al., "Soft Information for Localization-of-Things," Proceedings of the IEEE, Vol. 107, No. 11, 2019.
[68] Lau, B., et al., "A Survey of Data Fusion in Smart City Applications," Information Fusion, Vol. 52, 2019.
[69] Witrisal, K., et al., "High-Accuracy Localization for Assisted Living: 5G Systems Will Turn Multipath Channels from Foe to Friend," IEEE Signal Processing Magazine, Vol. 33, No. 2, 2016.
[70] Guerra, A., F. Guidi, and D. Dardari, "Single-Anchor Localization and Orientation Performance Limits Using Massive Arrays: MIMO vs. Beamforming," IEEE Transactions on Wireless Communications, Vol. 17, No. 8, 2018.
[71] Wymeersch, H., et al., "5G mmWave Positioning for Vehicular Networks," IEEE Wireless Communications, Vol. 24, No. 6, 2017.
[72] Win, M. Z., et al., "Network Operation Strategies for Efficient Localization and Navigation," Proceedings of the IEEE, Vol. 106, No. 7, 2018.
[73] Campbell, M., and N. Ahmed, "Distributed Data Fusion: Neighbors, Rumors, and the Art of Collective Knowledge," IEEE Control Systems Magazine, Vol. 36, No. 4, 2016.
[74] Lang, J., "Collective Decision Making Under Incomplete Knowledge: Possible and Necessary Solutions," in IJCAI, 2020.
[75] Makarenko, A., et al., "Decentralised Data Fusion: A Graphical Model Approach," in FUSION, 2009.
[76] Thompson, P., and H. Durrant-Whyte, "Decentralised Data Fusion in 2-Tree Sensor Networks," in FUSION, 2010.
[77] Hall, D., et al. (Eds.), Distributed Data Fusion for Network-Centric Operations, CRC Press, 2012.
[78] Chandola, V., A. Banerjee, and V. Kumar, "Anomaly Detection: A Survey," ACM Computing Surveys, Vol. 41, No. 3, 2009.
[79] Edgeworth, F., "On Observations Relating to Several Quantities," Hermathena, Vol. 6, No. 13, 1887.
[80] Song, X., et al., "Conditional Anomaly Detection," IEEE Transactions on Knowledge and Data Engineering, Vol. 19, No. 5, 2007.
[81] Agyemang, M., K. Barker, and R. Alhajj, "A Comprehensive Survey of Numeric and Symbolic Outlier Mining Techniques," Intelligent Data Analysis, Vol. 10, No. 6, 2006.
[82] Ahmed, M., A. N. Mahmood, and J. Hu, "A Survey of Network Anomaly Detection Techniques," Journal of Network and Computer Applications, Vol. 60, 2016.
[83] Bakar, Z., et al., "A Comparative Study for Outlier Detection Techniques in Data Mining," in Conference on Cybernetics and Intelligent Systems, IEEE, 2006.
[84] Beckman, R., and R. Cook, "Outlier.......... s," Technometrics, Vol. 25, No. 2, 1983.
[85] Hodge, V., and J. Austin, "A Survey of Outlier Detection Methodologies," Artificial Intelligence Review, Vol. 22, No. 2, 2004.
[86] Markou, M., and S. Singh, "Novelty Detection: A Review-Part 1: Statistical Approaches," Signal Processing, Vol. 83, No. 12, 2003.
[87] Markou, M., and S. Singh, "Novelty Detection: A Review-Part 2: Neural Network Based Approaches," Signal Processing, Vol. 83, No. 12, 2003.
[88] Patcha, A., and J.-M. Park, "An Overview of Anomaly Detection Techniques: Existing Solutions and Latest Technological Trends," Computer Networks, Vol. 51, No. 12, 2007.
[89] Chawla, S., "Deep Learning Based Intrusion Detection System for Internet of Things," Ph.D. dissertation, University of Washington, 2017.
[90] Yin, C., et al., "A Deep Learning Approach for Intrusion Detection Using Recurrent Neural Networks," IEEE Access, Vol. 5, 2017.
[91] Bowman, B., "Anomaly Detection Using a Variational Autoencoder Neural Network with a Novel Objective Function And Gaussian Mixture Model Selection Technique," M.S. thesis, Naval Postgraduate School, 2019.
[92] Rajasegarar, S., et al., "Centered Hyperspherical And Hyperellipsoidal One-Class Support Vector Machines for Anomaly Detection in Sensor Networks," IEEE Transactions on Information Forensics and Security, Vol. 5, No. 3, 2010.
[93] Zhang, M., B. Xu, and J. Gong, "An Anomaly Detection Model Based on One-Class SVM to Detect Network Intrusions," in International Conference on Mobile Ad-hoc and Sensor Networks, IEEE, 2015.
[94] Salman, T., et al., "Machine Learning for Anomaly Detection And Categorization in MultiCloud Environments," in International Conference on Cyber Security and Cloud Computing, IEEE, 2017.
[95] Fiore, U., et al., "Network Anomaly Detection with the Restricted Boltzmann Machine," Neurocomputing, Vol. 122, 2013.
[96] Pearl, J., Causality (Second Edition), Cambridge University Press, 2009.
[97] Pearl, J. "An Introduction to Causal Inference," International Journal of Biostatistics, 2010.
[98] Tople, S., A. Sharma, and A. Nori, Alleviating Privacy Attacks Via Causal Learning, 2020. Online: https://arxiv.org/abs/1909.12732.
[99] Ali, B., et al., "A Causal Factors Analysis of Aircraft Incidents Due to Radar Limitations: The Norway Case Study," Air Transport Management, Vol. 44-45, 2015.
[100] Martin, T., and K. Chang, "A Causal Reasoning Approach to DSA Situational Awareness and Decision-Making," in FUSION, 2013.
[101] Martin, T., and K. Chang, "Situational Awareness Uncertainty Impacts on Dynamic Spectrum Access Performance," in FUSION, 2014.
[102] Martin, T., and K. Chang, "Development and Analysis of a Probabilistic Reasoning Methodology for Spectrum Situational Awareness and Parameter Estimation in Uncertain Environments," in FUSION, 2015.
[103] Cousins, D., et al., "Understanding Encrypted Networks Through Signal and Systems Analysis of Traffic Timing," in IEEE Aerospace, Vol. 6, 2003.
[104] Tilghman, P., and D. Rosenbluth, "Inferring Wireless Communications Links and Network Topology from Externals Using Granger Causality," in MILCOM, 2013.
[105] Chen, Y., et al., "Analyzing Multiple Nonlinear Time Series with Extended Granger Causality," Physics Letters A, Vol. 324, No. 1, 2004.
[106] Morris, K., "What Is Hysteresis?" Applied Mechanics Reviews, Vol. 64, 2011.
[107] Deshmukh, R., et al., "Reactive Temporal Logic-Based Precursor Detection Algorithm for Terminal Airspace Operations," Vol. 28, No. 4, 2020.
[108] Keren, S., R. Mirsky, and C. Geib, Plan, Activity, Behavior, and Intent Recognition Website, Accessed 2020-03-14. Online: http://www.planrec.org/.
[109] Sukthankar, G., et al., Plan, Activity, and Intent Recognition, Elsevier, 2014.
[110] Schmidt, C., N. Sridharan, and J. Goodson, "The Plan Recognition Problem: An Intersection of Psychology and Artificial Intelligence," Artificial Intelligence, Vol. 11, No. 1, 1978.
[111] Keren, S.,R. Mirsky, and C. Geib, Plan Activity And Intent Recognition Tutorial, 2019. Online: http://www.planrec.org/Tutorial/Resources_files/pair-tutorial.pdf.
[112] Geib, C., and R. Goldman, "A Probabilistic Plan Recognition Algorithm Based on Plan Tree Grammars," Artificial Intelligence, Vol. 173, No. 11, 2009.
[113] Geib, C., and R. Goldman, "Plan Recognition in Intrusion Detection Systems," in DARPA Information Survivability Conference and Exposition, Vol. 1, 2001.
[114] Geib, C., "Delaying Commitment in Plan Recognition Using Combinatory Categorial Grammars," in IJCAI, 2009.
[115] Fu, M., "AlphaGo and Monte Carlo Tree Search: The Simulation Optimization Perspective," in Winter Simulation Conference, 2016.
[116] Latombe, G., E. Granger, and F. Dilkes, "Graphical EM for Online Learning of Grammatical Probabilities in Radar Electronic Support," Applied Soft Computing, Vol. 12, No. 8, 2012.
[117] Wang, A., and V. Krishnamurthy, "Threat Estimation of Multifunction Radars: Modeling and Statistical Signal Processing of Stochastic Context Free Grammars," in International Conference on Acoustics, Speech and Signal Processing, IEEE, 2007.
[118] Lisý, V., et al., "Game-Theoretic Approach to Adversarial Plan Recognition," in Frontiers in Artificial Intelligence and Applications, Vol. 242, 2012.
[119] Le Guillarme, N., et al., "A Generative Game-Theoretic Framework for Adversarial Plan Recognition," in Workshop on Distributed and Multi-Agent Planning, 2015.
[120] Braynov, S., "Adversarial Planning and Plan Recognition: Two Sides of the Same Coin," in Secure Knowledge Management Workshop, 2006.
[121] Kong, C., C. Hadzer, and M. Mashor, "Radar Tracking System Using Neural Networks," International Journal of the Computer, the Internet and Management, 1998.
[122] Ming, J., and B. Bhanu, "A Multistrategy Learning Approach for Target Model Recognition, Acquisition, and Refinement," in DARPA Image Understanding Workshop, 1990.
[123] Rogers, S., et al., "Artificial Neural Networks for Automatic Target Recognition," in Society of Photo-Optical Instrumentation Engineers: Applications of Artificial Neural Networks, 1990.
[124] Schmidlin, V., et al., "Multitarget Radar Tracking with Neural Networks," in IFAC Symposium on System Identification, Vol. 27, 1994.
[125] Xiang, Y., et al., "Target Tracking via Recursive Bayesian State Estimation in Cognitive Radar Networks," Signal Processing, Vol. 155, 2018.
[126] Gunturkun, U., "Toward the Development of Radar Scene Analyzer for Cognitive Radar," IEEE Journal of Oceanic Engineering, Vol. 35, No. 2, 2010.
[127] Bilik, I., J. Tabrikian, and A. Cohen, "GMM-Based Target Classification for Ground Surveillance Doppler Radar," IEEE Transactions on Aerospace and Electronic Systems, Vol. 42, 2006.
[128] Davis, B., and D. Blair, "Gaussian Mixture Measurement Modeling for Long-Range Radars," Defense Systems Information Analysis Center Journal, Vol. 4, No. 3, 2017.
[129] Espindle. L., and M. Kochenderfer, "Classification of Primary Radar Tracks Using Gaussian Mixture Models," IET Radar, Sonar and Navigation, Vol. 3, No. 6, 2009.
[130] Kristan, M., et al., "The Seventh Visual Object Tracking VOT2019 Challenge Results," in ICCCV workshops, 2019.
[131] Ma, M., et al., "Ship Classification and Detection Based on CNN Using GF-3 SAR Images," Remote Sensing, Vol. 10, 2018.
[132] Wagner, S., "SAR ATR by a Combination of Convolutional Neural Network and Support Vector Machines," IEEE Transactions on Aerospace and Electronic Systems, Vol. 52, No. 6, 2016.
[133] Gao, F., et al., "Combining Deep Convolutional Neural Network and SVM to SAR Image Target Recognition," in International Conference on Internet of Things, IEEE, 2017.
[134] Choi, J., et al., "Context-Aware Deep Feature Compression for High-Speed Visual Tracking," in CVPR, IEEE, 2018.
[135] Sanna, A., and F. Lamberti, "Advances in Target Detection and Tracking in Forward-Looking Infrared (FLIR) Imagery," Sensors, Vol. 14, No. 11, 2014.
[136] Yoon, S., T. Song, and T. Kim, "Automatic Target Recognition and Tracking in ForwardLooking Infrared Image Sequences with a Complex Background," International Journal of Control, Automation and Systems, Vol. 11, 2013.
[137] Auslander, B., K. Gupta, and D. Aha, "Maritime Threat Detection Using Plan Recognition," in Conference on Technologies for Homeland Security, 2012.
[138] Kozy, M., "Creation of a Cognitive Radar with Machine Learning: Simulation and Implementation," M.S. thesis, Virginia Polytechnic Institute, 2019.
