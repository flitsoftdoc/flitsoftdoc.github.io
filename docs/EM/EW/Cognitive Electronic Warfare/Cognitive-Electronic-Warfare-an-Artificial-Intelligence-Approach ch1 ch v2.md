# 序言

电子战（Electronic Warfare, EW）领域的进步决定了战争的胜负。这些技术进步的研究、开发与应用，塑造了各级指挥官在战场空间中所采用的战术、作战机动和战略。先进的研发工作对威慑能力具有重大贡献。美国国防部每年在电子战领域投入约70亿美元；我曾在五角大楼领导这些系统的开发与采办工作，如今作为国家安全部门创新体系的首席技术官，继续推动这些系统的发展。

认知电子战（Cognitive EW）是决定未来战斗结果的关键进展之一。一位第二次世界大战时期的电子战研究人员，仍能认出当今许多实际部署的系统。将人工智能（Artificial Intelligence, AI）应用于电子战系统，使其具备认知能力，是一项至关重要的进步，可使我们的系统在任务执行过程中实现自适应与学习。在当今以软件定义能力为主的数字世界中，电子战系统必须能够应对此前未知的信号。在当今高度互联的战场空间——即所谓的“军事物联网”（Internet of Military Things）中，系统可在任务执行期间持续获知或至少估算出反馈信息。通过聚合的传感器数据流与态势理解，电子战系统能够基于这种实时反馈进行自适应调整。在适当的自动化支持下，这种反馈与学习过程可比人类对数据进行推理的速度更快。在单次任务或交战过程中实现此类自适应能力，可帮助我方士兵与飞行员成功完成任务，甚至在某些情况下得以在交战中生存下来。

虽然我们很容易宣称某个电子战系统能够实时从其环境中学习，但若假设任意系统都能有效且稳健地执行其功能，则未免过于理想化。包括军方在内的整个社会，都对人工智能所开启的未来充满期待。要实现这一未来，我们需要凯伦和朱莉娅这样的专家，将理论与实际应用紧密联系起来。尽管展示一个演示样例很容易，但军事系统在其运行中必须具备稳健性，并将接受严格的测试与评估。

人工智能（Artificial Intelligence, AI）在我们生活中的应用将改变我们日常执行各项任务的方式。认知技术在军事领域的应用同样需要安全性，以保护其功能不被破坏。机器学习（Machine Learning）与自适应能力（Adaptivity）正开始为军事领域带来变革。尽管在算法保护、具体实现方式、训练数据以及实时学习等方面存在诸多引人深思的哲学性问题，但该领域的学术基础已相当扎实，能够为从业者提供宝贵的洞见。鉴于人工智能创新与进步的速度日新月异，军事系统必须以“相关速度”（speed of relevance）充分利用这些进展。

凯伦和朱莉娅在本书中出色地构建了一个框架，使开发者能够将这些最新进展融入其能力体系之中。书中首先阐述了对人工智能的核心理解，以此作为基础，继而深入探讨了认知电子战（Cognitive EW）的目标函数（objective functions）。每种电子战功能均具有独特性，书中对其中的细微差别进行了必要深度的描述。每一位采办专业人员都深知，武器系统的维持才是真正产生成本的环节。针对这一点，本书涵盖了数据管理、正确架构的构建以及对这些新型系统的测试等内容。最后，凯伦和朱莉娅为读者打开了通往这些新型系统功能的大门。全书在广度与深度之间取得了良好平衡，确保各方目标一致，助力实现崇高使命——帮助国家有效威慑，并在必要时赢得战争。

> 威廉·G·康利博士（Dr. William G. Conley）  
> 水星系统公司（Mercury Systems）首席技术官  
> 前美国国防部电子战（EW）办公室主任  
> 2021年7月

# 自序

我经常听到有人说，认知电子战（Cognitive Electronic Warfare, Cognitive EW）的领域太过广阔，人们不知从何入手。我总是回应道：“人工智能（Artificial Intelligence, AI）就像数学一样：总有一天它会无处不在。”无论角色或年龄如何，每个人都应具备足够的AI知识，以识别AI在日常问题中的适用场景。AI不仅仅是“自动驾驶汽车”或“终结者”；AI还体现在摄像头中的人脸识别、购物时的商品推荐，以及对飓风路径的预测。正如数学和物理学属于电子战（EW）系统一样，AI也理应融入EW系统之中。本书旨在照亮前行的道路，并激发读者运用AI解决那些仅靠传统方法无法攻克的电子战难题的热情。

本书是为射频（Radio Frequency, RF）领域的专业人士——包括电子战、认知无线电（Cognitive Radio）和/或认知雷达（Cognitive Radar）专家——所撰写，旨在帮助他们深入了解AI的应用方式与适用场景。我们的目标是协助电子战系统设计人员对AI与机器学习（Machine Learning, ML）解决方案进行初步筛选与引导。机器学习是其中的关键组成部分，但人工智能远不止于机器学习。

如果你觉得我们在通信与雷达之间，或在电子攻击（Electronic Attack, EA）与电子防护（Electronic Protection, EP）之间来回切换，那确实如此。从AI的角度来看，这些问题本质上是可互换的。我们在上述四个领域中使用相同的AI技术。当然也存在一些重要差异，例如电子战毁伤评估（Battle Damage Assessment, BDA），但AI能够将这些理念整合起来，解决共性问题，并推动系统设计从“共存”迈向“协同设计”（codesign）。

全书贯穿使用一个持续案例：BBN策略优化器（BBN Strategy Optimizer, BBN SO）。这是一个通信电子防护项目，它能够在任务相关的时间尺度上通过任务内学习（in-mission learning）来应对全新环境，随后执行硬实时（hard real-time）优化与决策，以选择最佳的缓解策略。示例7.1介绍了该案例的核心概念，书中许多讨论点也都源自这一工作。

我们要感谢以具体方式直接为本书做出贡献的各位同仁：亚伦·沃克（Aaron Walker）、克里斯·盖布（Chris Geib）、马特·马尔凯尔（Matt Markel）、比尔·康利（Bill Conley）、皮特·里斯（Pete Reese）、欧阳峰（Feng Ouyang）、肖恩·麦奎德（Shaun McQuaid），以及Artech House出版社的一位匿名审稿人。

最早促使我思考“面向射频的AI”（AI-for-RF）问题的两位人士是克里斯·拉明（Chris Ramming）和吉姆·弗里伯赛尔（Jim Freebersyser）：前者提出了最初的问题，后者则从霍尼韦尔公司（Honeywell）内部研究预算中资助了首个相关项目。若非这两位，我绝不会产生足够的兴趣与动力将此事坚持到底。格雷格·特罗克塞尔（Greg Troxel）和约翰·特兰奎利（John Tranquilli）耐心地帮助我这个“奇怪的AI人”学习如何正确拼写“RF”，并理解这一领域中真正具有挑战性的所在。

同时，我也要感谢众多其他同仁，他们帮助我深化思考，并开发出真正在实战环境中有效运行的AI-射频（AI-RF）系统。这些人包括：路易斯·布沙尔（Louis Bouchard）、迈克尔·库克（Michael Cook）、安伯·多兰（Amber Dolan）、黛安·埃格诺（Dianne Egnor）、雷吉娜·海因（Regina Hain）、布莱恩·胡德（Brian Hood）、大卫·兰登（David Landon）、林莉（Li Lin）、斯科特·卢斯（Scott Loos）、艾伦·麦凯（Allan Mackay）、哈拉·穆斯塔法（Hala Mostafa）、安德鲁·尼尔森（Andrew Nelson）、杰森·雷迪（Jason Redi）、维克拉姆·萨尔达纳（Vikram Sardana）、唐俊逸（Choon Yik Tang）、克里斯·范德瓦尔克（Chris Vander Valk）、斯里瓦桑·瓦拉达拉詹（Srivatsan Varadarajan）以及尤素芬·亚曼（Fusun Yaman）。此外，我也要感谢我在DARPA、空军研究实验室（AFRL）、海军研究办公室（ONR）以及各项技术转化合同中的项目主管和合作团队成员。

朱莉娅（Julia）是我在这一工作中极为出色的合作伙伴：她提供了不同的视角，在我需要时与我争论，在我陷入困境时为我加油鼓劲。我要感谢我的博士导师玛努埃拉·维洛索（Manuela Veloso），她教会我坚持自己的想法，即使整个社会尚未准备好接受它。最后，感谢我的家人——他们或许能理解书中大部分名词，却未必明白那些专业表述，但始终给予我坚定的支持。

> —凯伦·海格（Karen Haigh）

凯伦和我于2019年11月在弗吉尼亚州诺福克市举行的IEEE军事通信会议（IEEE Military Communications Conference）上首次相识。当时她邀请我协助撰写本书。我记得自己最初的答复是“不”，随后又说“让我考虑一下”。凯伦，感谢你坚持不懈地邀请我加入这场与你同行的非凡旅程。我完全赞同凯伦的观点，向所有帮助我们应对认知电子战（Cognitive EW）这一复杂多维难题的同仁致以由衷的谢意。最后，从我个人角度，我要特别感谢我在约翰斯·霍普金斯大学应用物理实验室（Johns Hopkins University Applied Physics Laboratory）那些才华横溢的同事们，感谢他们始终如一地支持我的各项事业。谢谢大家！

> —朱莉娅·安德鲁先科（Julia Andrusenko）

# 1 认知电子战（Cognitive Electronic Warfare）导论

现代电子战（Electronic Warfare, EW）所面临的挑战已超出了传统方法的解决能力。将人工智能（Artificial Intelligence, AI）技术融入电子战系统，是应对该问题领域复杂性及其快速时间尺度的唯一途径。本书阐述了AI技术如何帮助应对现代电子战的挑战。我们假定读者至少熟悉电子战、认知无线电（Cognitive Radio）或认知雷达（Cognitive Radar）中的一个领域，因此本书将重点放在AI技术及其相关的挑战与权衡取舍上。未来，AI将成为每个电子战系统的核心组成部分：系统将记录并分析自身过往的性能，并根据当前态势自适应地调整行为。未来的认知电子战解决方案，其核心是AI——而不仅仅是机器学习（Machine Learning, ML）。

认知无线电的概念至少可追溯至1999年，当时乔·米托拉三世（Joe Mitola III）[1]首次提出该术语；而认知雷达的概念则至少自2006年起就已存在[2]。然而，实际部署的认知系统实例却寥寥无几，且其认知能力十分有限。造成这一差距的一个重要原因在于，人们普遍认为构建认知系统是一项浩大工程，这种认知又被一种误解进一步加剧——即认为认知系统根本无法评估。

本书旨在弥合这一差距：它向射频（RF）领域的从业者介绍适用于电子战的相关AI技术，包括态势评估（Situation Assessment, SA）、决策（Decision-Making, DM）和机器学习（ML）。书中涵盖了用于电子支援（Electronic Support, ES）的SA技术，包括信号表征（characterization）、分类（classification）、异常检测（anomaly detection）、因果推理（causal reasoning）和意图识别（intent recognition）。本书还讨论了用于电子防护（Electronic Protection, EP）、电子攻击（Electronic Attack, EA）和电子战作战管理（Electronic Battle Management, EBM）的DM技术，包括规划（planning）、优化（optimization）和调度（scheduling），以及如何管理问题中的时间权衡与分布式特性。此外，本书说明了在哪些环节引入ML可同时提升SA与DM的性能。书中还特别关注电子战系统设计者高度关心的一个领域：任务内实时学习（realtime in-mission learning），以识别全新环境并应对突发情况。

为消除因不了解如何评估认知系统而造成的应用障碍，本书阐述了如何管理数据与模型以确保质量，并提出了一套学习保障（learning-assurance）流程，用于验证结果并构建可信系统。

最后，本书提供了一些关于如何着手构建实际认知电子战系统的建议。

> 构建认知电子战系统并非一道“全有或全无”的巨大障碍。

从人工智能（Artificial Intelligence, AI）的角度来看，电子防护（Electronic Protection, EP）与电子攻击（Electronic Attack, EA）的区别仅在于其目标：EP的目标是围绕己方系统定义的，而EA的目标则是针对敌方（adversary）定义的。同样，AI本身并不区分其解决方案是应用于雷达还是通信问题。因此，本书对EP/EA以及雷达/通信问题一视同仁，仅在问题领域确实影响数据或算法选择的少数情况下加以特别说明。

本书所介绍的AI技术也可应用于其他相关领域，例如网络安全（Cybersecurity）、信息战（Information Warfare）、定位、导航与授时（Position, Navigation, and Timing, PNT）以及情报、侦察与监视（Intelligence, Surveillance, and Reconnaissance, ISR）。不过，本书并不直接探讨这些相关领域。
## 1.1 什么是认知系统？

人工智能（Artificial Intelligence, AI）是试图模拟人类行为的计算机科学领域，于1956年在达特茅斯会议（Dartmouth Conference）[3]上正式确立为一门学科，其理论基础广泛汲取自认知心理学、数学、计算机科学、系统工程和语言学等多个领域。

> AI包含众多子领域，例如知识管理（Knowledge Management）、规划（Planning）、机器学习（Machine Learning, ML）、自然语言处理（Natural Language Processing, NLP）以及自主性（Autonomy）。

认知系统（Cognitive System），或称智能体（Intelligent Agent），能够感知其所处环境，并采取行动以实现其目标，如图1.1所示。它能在更高层次上进行推理与理解，处理符号化和概念性信息，从而在复杂情境中做出准确决策。认知系统具备上下文感知能力（context awareness），能够应对不确定性，并自主进行判断。它们具有迭代性和交互性，并能从自身经验中学习。图1.2展示了认知循环（cognition loop）及其三个核心概念：

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-018.jpg?height=414&width=581&top_left_y=147&top_left_x=459){width="400"}


**图1.1** 认知系统感知环境、对态势进行推理，并采取行动以达成目标。它通过与环境的交互进行学习。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-018.jpg?height=503&width=497&top_left_y=737&top_left_x=500){width="400"}


**图1.2** 认知系统迭代地进行态势评估、规划并决策其行动，并从经验中学习。

- **态势评估（Situation Assessment, SA）** 是指对环境中各要素与事件在时间或空间维度上的理解、对其意义的把握，以及对其未来状态的预测。（态势感知（Situation Awareness）是SA模块的输出结果。）SA是成功决策（Decision-Making, DM）的关键基础。其关键步骤包括：采集原始数据、验证观测结果、将数据融合为更高层次的概念、分析当前态势的影响，并推断用户（包括友方与敌方）的意图。
- **执行监控（Execution Monitoring）** 是态势评估（SA）中专注于评估已规划行动执行效果的活动。SA模块面临的关键挑战包括数据的多样性、数据接收的延迟性，以及环境的可观测程度。
- **决策（Decision-Making, DM）** 涉及设定目标并确定实现这些目标的可行方法。认知系统必须对目标进行优先级排序，理解不同行动的收益与代价，并解决目标间的冲突。其关键挑战包括资源管理、多智能体（multiple actors）协调，以及非确定性行动（nondeterministic actions）的处理，尤其是在环境持续变化的问题求解领域中。
- **学习（Learning）** 从先前经验中提取信息，以提升未来性能。机器学习（ML）技术可从中提炼出解释观测或指导行为的规则，也可构建近似数据性能的函数。其关键挑战包括数据异构性（data heterogeneity）、数据缺失（missing data）以及偏差（bias）的管理。

图1.3展示了上述三项功能，用以体现认知能力的逐级提升。一个简单的传统电子战（EW）系统利用电子支援（ES）识别已知信号，并基于信号库查表选择响应措施。每增加一项AI能力，系统的整体认知水平就相应提高。该布局也为评估和比较电子战系统能力提供了一种方法。霍恩（Horne）等人提出了一种认知映射方法，按记忆（memory）、前瞻能力（forethought）和算法复杂度（algorithmic sophistication）对DM组件进行细分[4]。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-019.jpg?height=678&width=1020&top_left_y=1329&top_left_x=237){width="400"}


**图1.3** 根据图1.2所阐述的概念，各项AI功能共同促成认知能力的逐级提升。

认知循环（cognition loop）与军事环境中常用的“观察—判断—决策—行动”（Observe, Orient, Decide, and Act, OODA）环[5]相似。二者的关键区别在于：OODA环描述的是一个过程，而认知则发生在遵循该过程的人类身上。例如，由认知系统执行的态势评估（SA）可为人类操作员提供态势感知（situation awareness）输入。
## 1.2 电子战（Electronic Warfare, EW）简介

电磁频谱作战（Electromagnetic Spectrum Operations, EMSO）是指为达成指挥官目标而协调开展的所有军事行动，旨在利用、攻击、防护和管理电磁环境。电磁电子战（EM EW）聚焦于如何通过电磁频谱（包括红外、光学和微波等波段）[6, 7]来控制频谱或对敌方实施攻击。本书所介绍的许多人工智能（AI）技术也可应用于网络空间及其他多域作战领域（例如信息战 [8]），但我们并不专门讨论这些相邻领域。

> 电子战（EW）是指利用电磁频谱（EM spectrum）或定向能（directed energy）来控制频谱、攻击敌人或阻碍敌方进攻的任何行动。电子战的目的是剥夺对手对电磁频谱的使用优势，同时确保己方能够无障碍地使用该频谱。电子战可由有人或无人系统从空中、海上、陆地和/或太空实施，其目标可包括人员、通信、雷达或其他资产（军用或民用）。
> — 美国参谋长联席会议主席，2012年 [9]  
> 《联合出版物 3-13.1：电子战》（Joint Publication 3-13.1: Electronic Warfare）

电子战包含以下核心概念：

- **电子支援（Electronic Support, ES）** 旨在理解频谱使用情况——谁在使用、如何使用、何时使用以及在何处使用。ES需要探测、截获、识别和定位电磁频谱（EMS）能量，理解其使用方式，并判断是否存在可被利用的可识别模式。
- **电子防护（Electronic Protection, EP）** 是指为保护己方节点免受频谱变化（如干扰或噪声）带来的不利影响而采取的行动。该活动通过选择策略或对抗措施，以维持通信或雷达的性能。EP相关的讨论通常围绕抗干扰（antijamming）和雷达对抗措施（radar countermeasure）技术展开；在本书中，我们同样使用EP来泛指用于保护通信系统和雷达系统的各类技术。相关策略可能包括频率捷变（frequency agility）、波形设计（waveform design）、天线指向（antenna direction）以及用于降低干扰的信号处理技术。
- **电子攻击（Electronic Attack, EA）** 旨在剥夺敌方对其自身射频（RF）频谱的使用权。EA利用进攻性电磁能量，以降级或拒止敌方对频谱的访问，或通过传递误导性信息来欺骗敌方。

> 拒止（Deny）、降级（Degrade）、扰乱（Disrupt）、欺骗（Deceive）、摧毁（Destroy）
- **电子战作战管理（Electronic Battle Management, EBM）** 负责监督电磁频谱作战（EMSO）的各个方面，以提升任务效能，包括管理不断变化的任务优先级、协调作战效果，以及与任务指挥体系中的其他要素协同合作。其关键环节之一是与电子战军官（EW officer）互动并提供支持。
- **电子战毁伤评估（Electronic Warfare Battle Damage Assessment, EW BDA）** 用于评估电子攻击（EA）的效果，并向操作员或系统提供反馈，以生成更具成效的攻击方案。EW BDA模块通常被整合进电子支援（ES）模块，或作为其组成部分。
- **电子战重编程（EW Reprogramming）** 指对自卫系统、进攻性武器系统和情报收集系统进行更新调整。EW重编程活动可分为三大类：战术（tactics）、软件（software）和硬件（hardware），使指挥官能够及时应对敌方威胁系统的演变、修正系统缺陷，并根据特定战区或任务需求定制装备。

《电子战手册》（*EW Handbook*）[10] 是查阅众多电子战公式与概念的优秀参考资料。

从人工智能（AI）的角度来看，电子防护（EP）与电子攻击（EA）可采用相同的方法处理；二者唯一的区别在于：EP的目标是相对于己方定义的，而EA的目标则是相对于敌方定义的（因此更难衡量）。同样，通信系统与雷达系统也可类似对待，因为它们可用的行动集基本相同；但通信系统在分布式决策（DM）方面面临更大挑战，包括更高的延迟、更强的协调需求，以及更精细的性能指标体系。

表1.1展示了上述电子战概念与1.1节所介绍的通用AI术语之间的对应关系。其他映射方式也存在，例如海金（Haykin）的“感知–行动循环”（Perception-Action Cycle）[11]，以及米托拉（Mitola）的“观察–判断–规划–决策–行动–学习”（Observe-Orient-Plan-Decide-Act-Learn, OOPDAL）模型[1]。

图1.4展示了不同的AI概念与技术如何融入传统的电子战功能框图。值得注意的是，电子战“杀伤链”（kill-chain）——即“发现–定位–跟踪–瞄准–攻击–评估”（Find-Fix-Track-Target-Attack-Assess, FFTTAA）——与OODA环和认知循环（cognition loop）高度相似。

**表1.1 电子战活动与对应AI术语**

| AI术语（AI Term）               | 电子战术语（EW Term）                              |
| :------------------------------ | :------------------------------------------------- |
| 态势评估（Situation Assessment） | 电子支援（Electronic Support）                     |
| 决策（Decision Making）          | 电子防护（Electronic Protect）与电子攻击（Electronic Attack）电子战作战管理（Electronic Battle Management） |
| 执行监控（Execution Monitoring） | 电子战毁伤评估（Electronic Warfare Battle Damage Assessment） |
| 学习（Learning）                | 电子战重编程（Electronic Warfare Reprogramming）（涉及数据与软件） |

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-022.jpg?height=656&width=1159&top_left_y=149&top_left_x=166){width="400"}


**图1.4** AI的态势评估、决策与学习能力适用于所有电子战功能。
## 1.3 从人工智能视角看电子战领域的挑战

与任何其他智能系统一样，认知电子战（Cognitive Electronic Warfare, Cognitive EW）必须克服认知循环（cognition loop）中每个AI概念或阶段所面临的挑战。该领域本身难以理解，且决策空间庞大而复杂。用户需求又为系统增添了额外的复杂性。本书聚焦于解决美国国防部电子战兴趣共同体（EW Community of Interest）[12]所提出的两项关键挑战：(1) 认知/自适应（cognitive/adaptive）；(2) 分布式/协同（distributed/coordinated）。
### 1.3.1 用于电子支援与电子战毁伤评估的态势评估（Situation Assessment, SA）

射频/电子战（RF/EW）领域的动态性与复杂性，为电子支援（Electronic Support, ES）和电子战毁伤评估（Electronic Warfare Battle Damage Assessment, EW BDA）中的态势评估带来了诸多挑战：

- **动态性（Dynamic）**：在分布式认知电子战系统中，没有任何要素是静态的。对当前态势的大多数评估仅在极短时间内有效，甚至可能在决策（Decision-Making, DM）活动开始前就已失效。
- **模糊性（Ambiguous）**：某些观测结果可能对应多个根本原因，或暗示多种结论。对态势变化的检测与理解并不总是简单明了。例如，系统如何自动区分短时信号衰落（short-term fade）与进入建筑物所导致的信号变化？
- **部分可观测性（Partially Observable）**：许多影响电磁频谱（Electromagnetic Spectrum, EMS）的因素无法被观测到。例如，很少有平台配备“雾”传感器。EW BDA 尤其难以准确实现：某些节点可能感知到某一事件，而其他节点则无法感知。
- **复杂交互性（Complex Interactions）**：许多控制参数彼此之间以及与系统性能之间的相互作用尚未被充分理解。尽管某些成对交互关系（如功率增加会缩短电池寿命）通常可以识别，但这些关系大多在实验室环境中研究得出，其结论难以直接迁移到实际部署的系统中。现场系统校准可解决部分成对交互问题，但通常仅限于对性能影响最显著的参数，因为全面校准耗时且昂贵。涉及多个参数的高维交互关系即便在实验室中也极少被研究。
- **复杂的时间反馈环（Complex Temporal Feedback Loops）**：在单个节点内部，某些活动以极高速度发生，需要极紧凑的反馈环来支持认知控制；而其他活动则发生在更长时间尺度上，需在更宽的时间窗口内分析更多因素。在节点之间，决策与其效果之间又存在更长的反馈环。这些不同类型的时间环及其显著不同的反馈延迟，使得行动的因果关联尤其难以确定。

上述特性共同导致了一个重大挑战：**训练数据的严重缺乏**。在复杂的电子战领域，不可能收集到足够多的系统行为实例。虽然在节点具有一定移动性的场景下（如WiFi性能）或许能收集大量样本，但在高机动环境、多变气象条件、复杂任务以及新型波形等场景中，这一条件并不成立。合成数据（synthetic data）虽可模拟部分变化（例如信道效应），但其真实性和覆盖范围均不足以涵盖所有实际情况。第8章将专门讨论训练数据挑战。

在对抗性环境下，这一挑战进一步加剧：在作战第0天（day 0），敌方战术与能力的真实数据很可能无法获得；随着冲突局势从第1天到第N天不断演变，这种情况将愈发突出。

> 电子战（EW）系统必须能够在任务执行过程中，仅凭极少量的新颖样本进行学习。
### 1.3.2 用于电子攻击、电子防护与电子战作战管理的决策（Decision-Making, DM）

电子战领域的诸多特性同样为电子攻击（Electronic Attack, EA）、电子防护（Electronic Protection, EP）和电子战作战管理（Electronic Battle Management, EBM）中的决策带来了挑战。作战环境与可用装备对决策者施加了必须遵守的约束条件，包括：

- **动态性（Dynamic）**：军事任务会变化，用户需求会变化，平台会加入或退出编队，硬件可能发生故障，而机动性又会导致通信连接持续波动。每一次变化都会增加决策活动的复杂性。
- **资源受限（Resource Constrained）**：节点通常在尺寸、重量与功耗（Size, Weight, and Power, SWaP）方面受到严格限制。在远程作战中，电源管理是一项关键需求。某个节点可能具备执行特定电子战任务的能力，但在执行过程中会迅速耗尽其资源。一种降低单个节点资源消耗的策略是将任务分布到多个节点上，但通信本身也是一种系统必须管理的资源。
- **分布式（Distributed）**：由于通信能力有限且频繁中断，各节点必须有意识地权衡快速本地决策的收益与跨节点协同所能带来的优势。独立运行的电子战系统或平台，其延迟显著低于互连的网络化电子战系统。
- **多样性（Diverse）**：在分布式电子战环境中，各节点的能力差异极大，从手持式小型无线电设备，到配备卫星通信（SATCOM）能力的大型平台，再到搭载先进雷达系统的飞机，不一而足。节点可能配备不同的射频（RF）天线组件，以及不同的计算基础设施（如内存与处理能力）。即使功能相似的设备、传感器，若由不同厂商生产或处于不同版本，其操作方式也存在差异。这种异构性要求在不同节点上采用不同的解决方案，从而在软件层面进一步加剧了多样性。
- **大规模性（Massive Scale）**：每个节点都涉及大量可观测和可控参数（可能为连续取值）需要配置。当前尚无系统能暴露所有理论上可用的控制参数。每个节点在每个时间步可采取的最大策略数量为 $\Pi_{\forall c} v_{c}$，其中 $v_{c}$ 表示控制参数 $c$ 的可能取值数量。即使所有 $\overline{c_{n}}$ 个控制参数仅为简单的二元开关（on/off），每个节点在每个时间步的策略空间也达到 $2^{\overline{c_{n}}}$。若其中任一可控参数为连续值，则配置空间将变为无限。
- **宏观影响（Macroscale Impacts）**：一些与直接电子战交战看似无关的因素也可能影响作战结果。例如，红方（敌方）平台的机动动作若超出其天线覆盖范围，或在与其他平台交战过程中缺乏照明或仅有偶然照明，均会影响任务成败。
这些挑战共同构成了一个**分布式、异构、低通信带宽、部分可观测、高延迟且具有指数级复杂度的优化问题**。因此，从一般意义上讲，认知控制（cognitive control）绝非易事：问题症状显现的层级，未必是需要调整节点配置的层级；在某一层次或某一时刻，症状可能具有模糊性，需结合更多上下文才能理解；某一模块的改动可能影响其他模块，甚至引发新问题；而改动的时机也可能至关重要。

这些挑战构成了一个分布式、异构、低通信带宽、部分可观测、高延迟且具有指数级复杂度的优化问题。因此，在一般情况下，认知控制（cognitive control）绝非易事：问题症状显现的层级，未必是需要调整节点配置的层级；某一层次或某一时刻的症状可能具有模糊性，需结合更多上下文信息才能判断；一个模块的改动可能影响其他模块，并引发新的问题；而改动的时机也可能至关重要。然而在实践中，这一挑战并没有表面看起来那么严峻。首先，从工程角度看，并不需要追求“真正”的最优解，实践中往往存在大量“足够好”（good enough）的解决方案（见第 5.3 节）。其次，物理规律和交战态势的发展进程本身也对问题构成了约束。

在其他领域，人工智能（AI）技术已充分应对了上述大部分挑战的复杂性。而在认知无线电（Cognitive Radio, CR）和电子战（Electronic Warfare, EW）领域，AI 技术才刚刚开始触及问题的表层。事实上，AI 已在一些具有物理实体的系统（如机器人系统）中成功应对了许多类似 EW 领域特性的挑战。我们需要将这些技术引入电磁频谱（Electromagnetic Spectrum, EMS）作战行动中，并深入加以应用。

值得注意的是，AI 在“自动异构互操作通信”（automatic heterogeneous intercommunication）这一问题上才刚刚起步。历史上，网络领域一直存在一种根深蒂固的规范：所有节点必须被设计并（最好以静态方式）配置为可互操作 [13]，典型的自组织网络（ad hoc networks）通常由一组同构节点构成。而认知无线电网络打破了这一假设：每个节点均可配备独立的认知控制器，因此网络节点可能是异构的，并可能陷入无法互操作的配置状态。¹ 与此同时，传统 AI 一直假设通信是“安全”的，仅在应用层任务层面进行协商与协调 [14–16]；此外，传统 AI 通常还需要极高的通信开销。这些假设——即节点同构性和通信安全性——恰恰落入了“分布式计算八大谬误”（eight distributed computing fallacies）的范畴（见图 1.5）。ADROIT 系统 [18] 通过为每个节点配备独立的学习系统，彻底背离了传统网络要求节点配置同构的立场。ADROIT 是首个成功演示高效异构移动自组织网络（Mobile Ad Hoc Network, MANET）的系统，并且利用机器学习（ML）对节点进行配置。第 5.4 节将讨论应对分布式协同挑战的相关方法。

> ¹ 另一种方案是为多个节点配备一个统一的认知控制器；虽然可减少协同问题，但会显著增加通信开销与延迟，且智能控制易受网络分区（network partitions）影响。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-026.jpg?height=421&width=1027&top_left_y=149&top_left_x=237){width="400"}

**图1.5** 在设计分布式认知电子战系统时，必须避免陷入彼得·多伊奇（Peter Deutsch）与詹姆斯·高斯林（James Gosling）于1994年提出的分布式计算八大经典谬误[17]。在电子战环境中，这些谬误尤为突出。

### 1.3.3 用户需求

最后，如下所述的用户需求为认知电子战（Cognitive Electronic Warfare, Cognitive EW）系统增添了另一层复杂性：

- **复杂的访问策略（Complex Access Policies）**：由于节点、数据和任务本身具有异构性，访问策略可能会限制哪些节点被允许存储或传输特定数据。
- **复杂的多目标性能要求（Complex Multiobjective Performance Requirements）**：多个用户的需求与策略相互交织，因此需要一个复杂的多目标函数，以综合反映任务目标与环境约束[19]。通常无法同时优化所有目标，系统必须选择一个特定的运行点，在各项权衡之间取得平衡。典型示例包括：资源使用效率、电子支援（ES）/电子防护（EP）/电子攻击（EA）的联合优化、通信与雷达的联合优化，以及检测概率（Probability of Detection, Pd）与虚警概率（Probability of False Alarm, Pfa）之间的精度权衡。
- **受限的操作（Constrained Operations）**：所有认知电子战系统设计者都希望实现任务内实时机器学习（real-time, in-mission ML）。但从用户角度看，担忧在于系统可能习得不恰当的行为。因此，需求必须在约束系统涌现行为（emergent behavior）的同时，仍能有效应对新颖且意外的情境。

归根结底，这些因素共同决定了人类利益相关者对AI系统在信息获取、态势评估（SA）和决策（DM）方面的信任程度。利益相关者既包括采办部门（acquisitions community）——他们要求系统性能“可验证”（verifiable）且“有保障”（guaranteed）；也包括一线人员——如电子战军官（Electronic Warfare Officers, EWOs）、机组人员、水兵和士兵——他们的生命依赖于系统所采取的务实行动。第5.1.1节讨论多目标优化，第6.3节探讨人机协同（human-machine team），第10章则介绍基于AI系统的验证与确认（verification and validation）机制。
### 1.3.4 认知无线电与电子战系统的关联

认知无线电（Cognitive Radio, CR）网络在射频（RF）通信中实现了认知电子战（Cognitive EW）系统的电子防护（Electronic Protection, EP）目标。表1.2列出了认知无线电的一些潜在且广为人知的优势，这些优势可直接应用于认知电子战。

**表1.2 认知无线电系统的优势及其在认知电子战中的转化**

| 认知无线电优势 | → | 认知电子战优势 |
| :--- | :---: | :--- |
| 对用户透明的射频通信 | → | 电磁频谱作战（EMSO）也必须对用户透明。此外，网络化雷达电子战系统依赖于底层通信能力。 |
| 自调节的无线电网络 | → | 电子战系统也必须具备自配置与自调节能力，尤其是在电子战杀伤链（EW kill chain）要求极快响应的背景下。 |
| 在成本、速度、功耗、可用性、时效性及资源利用方面性能更优 | → | 在成本、速度、功耗、可用性、时效性及资源利用方面性能更优。通信或雷达领域的电子攻击（EA）活动，还需通过有效性（即电子战毁伤评估，EW BDA）进行衡量。 |

认知无线电概念最初旨在提升射频频谱使用效率[20–22]。CR技术有望成为频谱管理领域的一项变革性力量。所有电磁频谱作战（EMSO）均可借鉴这些新颖的频谱管理方法和机会式频谱接入（opportunistic spectrum access）机制。此外，机会式频谱接入意味着CR引擎已具备一定程度的频谱态势感知（spectrum situational awareness），这也是智能电子战系统的重要组成部分。认知无线电网络还在探索异构无线电框架的管理，这一概念同样适用于多智能体、异构化的电子战系统[23–26]。第五代蜂窝网络（5G）也与电子战环境存在相似之处。专栏11.1概述了相关用例及部分认知方法。

然而，已发表的大部分认知无线电研究聚焦于多址接入（multiaccess）问题，而非对抗环境下的频谱使用。此外，CR研究通常假设各实体为合作方且目标一致，而电子战场景本质上始终是对抗性的。第5章将介绍在对抗环境下进行优化的方法。
### 1.3.5 电子战系统设计问题

认知电子战（Cognitive Electronic Warfare, Cognitive EW）系统设计必须提供态势评估（Situation Assessment, SA）、决策（Decision-Making, DM）和学习（Learning）能力。系统需求驱动了一系列关于应集成哪些组件、以及在系统设计过程中应提出哪些关键问题的决策[20, 27–29]：

- **决策（DM）**：决策应采用集中式还是分布式？应选用哪些DM算法？如何定义优化函数？能否利用领域物理规律和交战进程来缩减状态空间？第5章描述了用于电子防护（EP）和电子攻击（EA）的DM方法，而第6章则阐述了用于电子战作战管理（EBM）的DM方法。
- **学习（Learning）**：如何定义适当的学习任务？学习应采用监督式、无监督式还是半监督式？哪些测量量（特征）应作为学习任务的基础？如何应对记录所有历史观测与决策所导致的数据组合爆炸问题？第4章介绍了学习任务，第8章则讨论了数据管理方法。
- **感知（Sensing）**：如何评估频谱感知能力的准确性？能否提升传感器精度？如何在不引入不可接受延迟的前提下，利用空间分布节点间的协同感知机制？能否利用数据流中的冗余性来补偿或纠正传感器故障？如何应对远程射频（RF）感知、多功能RF感知和无源RF感知等其他课题？第4.3节讨论了AI可辅助的部分数据融合概念，而第8.1.1节则强调不仅需记录数据，还需记录其不确定性与来源。
- **安全性（Security）**：何时需要对数据加密？如何制定策略以避免安全违规，尤其是在高度动态的环境与任务背景下？如何在不损害系统性能（尤其是精度与延迟）的前提下保护数据与模型？即使模型遭泄露，能否确保其无法被逆向工程？第8.3.5节探讨了部分安全问题。
- **软件架构（Software Architectures）**：如何实现电子战系统的全局优化——既包括跨平台网络的全局优化，也包括单个节点内部各模块间的协同优化？第9.1节更详细地描述了软件架构设计。
- **硬件设计（Hardware Design）**：如何设计便于认知控制的射频系统？能否有效设计可支持认知配置的多功能硬件系统？在平台尺寸、重量与功耗（Size, Weight, and Power, SWaP）约束下，可集成哪些内存与计算能力？鉴于并非所有数据均可记录，哪些数据压缩技术能有效最小化信息损失？第9.3节概述了部分硬件设计考量。
## 1.4 选择：人工智能还是传统方法？

尽管媒体对人工智能（Artificial Intelligence, AI）大肆宣传，但AI并非适用于所有问题。与传统方法相比，AI解决方案通常更具鲁棒性（不易失效）、更强的可迁移性（可应用于不同问题），以及更好的可扩展性（scalability）。

实现令人印象深刻的结果并不一定需要大型计算机。（当然，大多数AI从业者仍会在尺寸、重量与功耗（Size, Weight, and Power, SWaP）约束范围内，尽可能选择最大算力与内存的硬件。）

> 基于AI的方法可适配可用硬件，包括小型硬实时（hard real-time）嵌入式系统。

例如，Haigh等人提出的认知电子防护（Cognitive EP）系统[30]能够学习如何在多种新型干扰条件下维持通信。该系统的策略优化器（Strategy Optimizer, SO）采用了机器学习（ML）技术——支持向量回归机（Support Vector Regression Machines）[31]，使其能够在ARMv7处理器上于一秒内完成任务内实时学习。更多细节见示例7.1。

因此，关键问题在于如何在传统方法与基于AI的方法之间做出选择。在某些情况下，直接计算可能更快、更高效。总体而言，如果存在一个准确的可用模型，那么传统方法很可能比基于AI的方法更高效。例如，若物理模型已能完整刻画所有相关相互作用，且实测数据不会显著改变该函数，则物理模型是更优选择。（参见《电子战手册》（*EW Handbook*）[10]中的实例。）

AI方法与传统方法应在同一平台上共存，各自承担与其优势相匹配的任务。根据具体测量值、环境条件和不确定性水平，二者中的任一种都可能成为特定任务的最终决策者。同样，两种方法也可并行运行，并将其结果融合以生成最终输出。

我们可以依据1.3节中所述的任一领域特性来评估一个问题是否适合采用AI。其中最具指示意义的是问题的**分布式程度**、**复杂性**和**动态性**。图1.6展示了这些维度，标示出决定何时传统方法已足够、何时必须采用基于AI方法的关键属性。

![](https://cdn.mathpix.com/cropped/2025_09_27_ecb4b185db1bd7f79689g-029.jpg?height=667&width=1137&top_left_y=1287&top_left_x=180){width="400"}

**图1.6** 问题领域的特性决定了AI是有用还是必需的。图1.3则将这些AI功能置于认知层级中，以展示认知能力的递进。

当问题领域高度分布式时，**分布式协同**（distributed coordination）（或多智能体技术）变得愈发重要。若单个节点即可完成任务，则系统无需融合对同一目标可能不一致的观测结果、协商任务分配或协调行动。在由多个同构节点组成的团队中，每个节点可对其队友做出合理假设，从而减少通信开销并促进协同。而异构节点则必须在各节点间分配资源与任务，并在任务执行过程中动态更新这些分配，同时尽量降低通信开销。大多数基于AI的分布式协同方法所生成的计划，比传统控制系统更具韧性（resilient）。网络化电子战（EW）系统既包含松耦合的任务协同（例如，决定哪些节点执行抵近干扰（stand-in jamming）或充当通信中继），也包含紧耦合的任务协同（例如，执行分布式相干发射（distributed coherent transmissions））。

当问题高度复杂时，**态势评估**（Situation Assessment, SA）技术对于理解数据变得至关重要。若数据仅需从一个节点传输到另一个节点，则并未从中提取任何知识。当传统模型能够高效且准确地提取有用信息时，AI很可能无法进一步提升结果。**数据融合**（Data fusion）将来自不同源的数据整合在一起，这些数据可能是不同类型的数据，也可能是多个节点采集的同类数据。数据类型差异越大、时间特性越多样，就越需要运用数据融合概念。**计划识别**（Plan recognition）与**意图推断**（Intent inference）技术使系统能够理解领域中行动者（无论是用户还是敌方）的意图。为维持系统性能，电子防护（EP）系统需识别用户意图；而电子攻击（EA）系统在理解敌方意图后，其效能将显著提升。
随着领域复杂性的增加，**规划**（Planning）与**调度**（Scheduling）技术成为应对决策（DM）挑战的关键。若系统仅执行单一功能（即仅有一种配置），则传统控制方法已足够。少量可能的配置可通过简单规则进行管理。但当系统存在大量可能配置时，就必须采用规划、调度与优化方法。在大多数电子战（EW）系统中，配置参数可以多种方式组合，从而产生可能无限多的配置方案；同时，EW系统也可能遭遇无限多样的作战场景。在此情况下，基于人工智能（AI）的决策至关重要。

第三个关键领域特性是**动态性**（Dynamism）。当领域环境静态时，预配置系统足以胜任任务；而当领域动态变化、系统面临不断变化的条件时，就必须采用自适应方法——例如，根据观测到的干扰机类型选择合适的电子防护（EP）对抗措施。这些响应措施可事先通过人工设计或（非实时的）机器学习（ML）方法生成，再通过电子战重编程（EW reprogramming）上传至系统。然而，当系统可能遭遇全新条件（如新型发射机）时，**任务内实时机器学习**（real-time in-mission ML）方法就变得至关重要。

上述每个技术领域（分布式协同、态势评估（SA）、决策（DM）和机器学习（ML））在人工智能界均拥有活跃的研究社区，包括专门的技术会议与期刊。在每个方向上，研究界都在发展多种方法；认知电子战（Cognitive EW）社区可根据可用硬件选择合适的技术路径。本书各章将分别讨论相关方法，并突出系统架构师应考虑的权衡空间（trade space）。

> 关键经验是：**切勿在未充分理解问题的前提下，盲目选择解决方案**（即炫酷的AI技术）。

AI将促成何种期望的作战效果？是否存在可用于构建机器学习解决方案的数据？问题本身的特性是否真正需要基于AI的解决方案？
## 1.5 读者指南

本书各章按照图1.4所示的组件结构，系统阐述了构建完整认知电子战（Cognitive Electronic Warfare, Cognitive EW）系统所需的核心概念：

- **第2章** 描述驱动决策（Decision-Making, DM）的目标函数（objective function）。
- **第3章** 提供一份简明的机器学习（Machine Learning, ML）入门指南²，包括对算法权衡的讨论。
- **第4章** 阐述如何对电子支援（Electronic Support, ES）态势进行评估。
- **第5章** 说明在时间受限和分布式环境下，如何为电子防护（EP）与电子攻击（EA）选择策略。
- **第6章** 介绍电子战作战管理（Electronic Battle Management, EBM）及人机接口，涵盖规划相关内容，包括资源管理、不确定性处理以及对抗敌方行为。
- **第7章** 探讨在线重规划（online replanning）与学习，包括电子战毁伤评估（EW BDA），后者将预期结果与实际观测结果进行映射。
- **第8章** 阐述数据管理的流程与实践。
- **第9章** 讨论软件与硬件架构的设计考量。
- **第10章** 聚焦于评估：如何测试以及测试什么内容。
- **第11章** 将全书经验总结为具体建议，指导读者如何着手构建认知电子战系统。

> ² “primer”一词在此处指“入门读物”，发音为 /ˈprɪmər/（其中“i”发音同“sit”中的“i”）；而当其意为“底漆”（油漆底层）时，发音为 /ˈpraɪmər/（其中“i”发音同“five”中的“i”）。
## 1.6 结论

构建认知电子战（Cognitive Electronic Warfare, Cognitive EW）系统，需要明确人工智能（AI）在何处、以何种方式发挥作用：**态势评估**（Situation Assessment, SA）用于电子支援（ES）并理解射频（RF）环境，**决策**（Decision-Making, DM）用于选择电子防护（EP）、电子攻击（EA）和电子战作战管理（EBM）行动，**机器学习**（Machine Learning, ML）则用于实现持续改进。

这一高节奏、高复杂度的环境非常适合应用人工智能，但要开发出可在实战环境中部署的认知电子战系统仍面临诸多挑战。一个完整的认知电子战系统需要在以下方面取得进展：适用于学习与推理的算法、支持作战节奏（at tempo）的决策能力、能够标注数据特征的数据管理方法，以及支撑认知推理的系统架构。

然而，你可以从一项小规模能力起步，并根据具体问题逐步扩展；第11章将介绍这种渐进式构建路径。

> 千里之行，始于足下。  
> — 中国古谚，  
> 《道德经》，老子，公元前6世纪

## References

[1] Mitola, J., III, "Cognitive Radio for Flexible Multimedia Communications," in International Workshop on Mobile Multimedia Communications, IEEE, 1999.
[2] Haykin, S., "Cognitive Radar: A Way of the Future," IEEE Signal Processing Magazine, Vol. 23, No. 1, 2006.
[3] Kline, R., "Cybernetics, Automata Studies, and the Dartmouth Conference on Artificial Intelligence," IEEE Annals of the History of Computing, Vol. 33, No. 4, 2011.
[4] Horne, C., M. Ritchie, and H. Griffiths, "Proposed Ontology for Cognitive Radar Systems," IET Radar, Sonar and Navigation, Vol. 12, No. 12, 2018.
[5] Boyd, J., Destruction and Creation, Unpublished essay, 1976. Online: http://www.goalsys. com/books/documents/DESTRUCTION_AND_ CREATION.pdf.
[6] US Air Force, Curtis E. Lemay Center for Doctrine Development and Education, Annex 3-51: Electromagnetic warfare and electromagnetic spectrum operations, Downloaded 2020-0123, 2019. Online: https://tinyurl. com/ew-emso-pdf.
[7] De Martino, A., Introduction to Modern EW Systems, Norwood, MA: Artech House, 2013.
[8] Poisel, R., Information Warfare and Electronic Warfare Systems, Norwood, MA: Artech House, 2013.
[9] Chairman of the Joint Chiefs of Staff, Joint publication 3-13.1: Electronic warfare, 2012. Online: https://fas.org/irp/doddir/ dod/jp3-13-1.pdf.
[10] Avionics Department, "Electronic Warfare and radar systems engineering handbook," Naval Air Warfare Center Weapons Division, Tech. Rep. NAWCWD TP 8347, 2013.
[11] Haykin, S., Cognitive Dynamic Systems: Perception-action Cycle, Radar, and Radio, Cambridge University Press, 2012.
[12] Boksiner, J., Electronic Warfare (EW) S\&T Community of Interest (CoI), 2018. Online: https://tinyurl.com/ew-coi-2018.
[13] Haigh, K. Z., et al., "Rethinking Networking Architectures for Cognitive Control," in Microsoft Research Cognitive Wireless Networking Summit, 2008.
[14] Malone, T., and K. Crowston, "The Interdisciplinary Study of Coordination," ACM Computing Surveys, Vol. 26, No. 1, 1994.
[15] Modi, P., et al., "ADOPT: Asynchronous Distributed Constraint Optimization with Quality Guarantees," Artificial Intelligence, Vol. 161, No. 1-2, 2005.
[16] Zhang, X., V. Lesser, and S. Abdallah, "Efficient Management of Multi-Linked Negotiation Based on a Formalized Model," Autonomous Agents and Multi-Agent Systems, Vol. 10, No. 2, 2005.
[17] Thampi, S., Introduction to Distributed Systems, 2009. Online: https://arxiv.org/ abs/0911.4395.
[18] Troxel, G., et al., "Enabling Open-Source Cognitively-Controlled Collaboration Among Software-Defined Radio Nodes," Computer Networks, Vol. 52, No. 4, 2008.
[19] Haigh, K. Z., O. Olofinboba, and C. Y. Tang, "Designing an Implementable User-Oriented Objective Function for MANETs," in International Conference on Networking, Sensing and Control, IEEE, 2007.
[20] Nguyen, V. T., F. Villain, and Y. Le Guillou, "Cognitive radio RF: Overview and challenges," VLSI Design, Vol. 2012, 2012.
[21] Mitola, J., and G. Q. Maguire, "Cognitive Radio: Making Software Radios More Personal," IEEE Personal Communications, Vol. 6, No. 4, 1999.
[22] Haykin, S., "Cognitive Radio: Brain-Empowered Wireless Communications," IEEE Journal on Selected Areas in Communications, Vol. 23, No. 2, 2005.
[23] Trigui, E., M. Esseghir, and L. M. Boulahia, "On Using Multi-agent Systems in Cognitive Radio Networks: A Survey," International Journal of Wireless \& Mobile Networks, Vol. 4, No. 6, 2012.
[24] Rizk, Y., M. Awad, and E. W. Tunstel, "Decision Making in Multi-agent Systems: A Survey," IEEE Transactions on Cognitive and Developmental Systems, Vol. 10, No. 3, 2018.
[25] Dorri, A., S. S. Kanhere, and R. Jurdak, "Multiagent Systems: A Survey," IEEE Access, Vol. 6, 2018.
[26] Tang, H., and S. Watson, "Cognitive Radio Networks for Tactical Wireless Communications," Defence Research and Development Canada-Ottawa Research Centre, Ottawa, Tech. Rep., 2014.
[27] Haigh, K. Z., "AI Technologies for Tactical Edge Networks," in MobiHoc Workshop on Tactical Mobile Ad Hoc Networking, Keynote, 2011.
[28] Cabric, D., "Cognitive Radios: System Design Perspective," Technical Report No. UCB/ EECS-2007-156, Ph.D. dissertation, Electrical Engineering and Computer Sciences, University of California at Berkeley, 2007.
[29] Guerci, J., Cognitive Radar: The Knowledge-Aided Fully Adaptive Approach, Norwood, MA: Artech House, 2010.
[30] Haigh, K. Z., et al., "Parallel Learning and Decision Making for a Smart Embedded Communications Platform," BBN Technologies, Tech. Rep. BBN-REPORT-8579, 2015.
[31] Üstün, B., W. Melssen, and L. Buydens, "Facilitating the Application of Support Vector Regression by Using a Universal Pearson VII Function-Based Kernel," Chemometrics and Intelligent Laboratory Systems, Vol. 81, No. 1, 2006.
