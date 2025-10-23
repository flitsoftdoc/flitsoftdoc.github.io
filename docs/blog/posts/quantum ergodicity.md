---
date: 2025-10-23
categories: [Notes]
tags: [Quantum]   # 若启用 tags 插件
slug: quantum-ergodicity 
# pin: true       # 置顶功能属于 Insiders 版本，社区版无此特性
---
# 谷歌再度宣称实现“量子优势”——但研究人员仍持怀疑态度

该公司表示，其量子处理器在计算某一问题上比传统计算机更快，并对未来的科学应用持乐观态度。

谷歌研究人员再次提出实现了**量子优势**（quantum advantage）的新主张——即量子计算机在计算速度上能够显著优于经典计算机。

![img](https://media.nature.com/w400/magazine-assets/d41586-025-03300-4/d41586-025-03300-4_50860416.jpg){width="200"}

<!-- more -->


这并非谷歌[首次提出类似主张](https://www.nature.com/articles/d41586-019-03213-z)。不过研究人员表示，他们最新的算法——名为“量子回声”（quantum echoes）——有望解决科学问题，包括推导分子的结构。理论上，该算法还可以在其他量子计算机上复现。

“这个算法为现实世界中的应用提供了机会。”谷歌位于加州圣塔芭芭拉的量子计算实验室负责人 Hartmut Neven 在新闻发布会上对记者表示。他补充称，该公司对五年内量子计算机能够实现实际用途持乐观态度。

![img](https://media.nature.com/w400/magazine-assets/d41586-025-03300-4/d41586-025-03300-4_51443686.jpg)

[谷歌揭示](https://www.nature.com/articles/d41586-024-04028-3) 量子计算如何超越当前最强超级计算机

但一些研究人员对“量子优势”的说法仍持谨慎态度。该成果已于 10 月 22 日发表在 *Nature* 上[(https://www.nature.com/articles/d41586-025-03300-4#ref-CR1) (译文见后)。纽约大学的量子物理学家 Dries Sels 表示：“此类主张需要极高的证据门槛。”他指出，尽管该论文对多种经典算法进行了“严肃测试”，但尚无法证明不存在一个高效的经典算法。“就我个人而言，我不认为这足以支撑如此重大的宣称。”

也有学者认为，对算法实际用途的乐观判断为时尚早。来自新罕布什尔州达特茅斯学院的量子物理学家 James Whitfield 表示，这项技术进展令人印象深刻，但“认为它能突然解决某个具经济价值的问题，多少有些牵强”。

谷歌研究人员及其合作者在一篇提交至 arXiv 的预印本论文中详细阐述了该算法如何应用于简单分子。他们通过量子模拟预测了某些分子结构特征，并借助核磁共振（NMR）测量验证了预测结果。但目前，该方法仅适用于那些在经典计算中也能高效模拟的分子，如芳香族液体甲苯。

谷歌位于德国慕尼黑的 Quantum AI 实验室研究员 Tom O’Brien 表示，若要将“量子回声”算法扩展至更复杂系统，还需更低噪声的硬件，或进一步完善的纠错方法。

## 回声量子比特（Echoing qubits）

该项实验[使用了谷歌的 Willow 芯片](https://www.nature.com/articles/d41586-024-04028-3)，芯片包含 105 个超导微电路，用以存储量子比特（qubit）信息，即量子版本的“比特”。



[量子计算公司 D-Wave 也曾提出“量子优势”新主张](https://www.nature.com/articles/541447b)

谷歌的算法能够探测量子计算机中远距离量子比特之间的微妙关联，这些关联通常因系统中量子部件间的相互作用而被搅乱或丢失。研究团队将该方法类比为“用回声探测洞穴”：它通过运行一系列操作，扰动一个量子比特，然后再逆向执行操作。测量结果可以揭示该量子比特与整个系统之间的相互作用痕迹。

在应用于分子的过程中，研究人员利用量子比特模拟原子核的“自旋”（spin）——使每个核像一个微小磁棒的量子性质。NMR 通过测量这些自旋的磁相互作用揭示分子结构，但当原子核相距过远时该技术将失效。通过量子比特模拟自旋，“量子回声”算法能够提取远距离的相互作用，提供超出传统 NMR 所能揭示的结构信息，O’Brien 表示。

“目前这些演示仅限于相对较小的分子，但我们乐观地认为，这一思路未来可拓展至更大的系统——甚至可能包括蛋白质。”加州大学伯克利分校的量子化学家 Ashok Ajoy 表示。

![谷歌量子计算机的冷却系统局部特写](https://media.nature.com/lw767/magazine-assets/d41586-025-03300-4/d41586-025-03300-4_51605212.jpg)

谷歌量子计算设施中的低温恒温器（cryostat）部分。图片来源：Google Quantum AI

## 有争议的计算（Controversial calculations）

关于“量子优势”的主张常常引发争议。谷歌于 2019 年的首次主张涉及一个无实际用途的计算任务，后来其他研究人员证明该任务同样可由经典计算机完成。今年 3 月，[位于加州帕洛阿尔托的量子计算公司 D-Wave](https://www.nature.com/articles/d41586-025-00765-1)[2](https://www.nature.com/articles/d41586-025-03300-4#ref-CR2) 宣称使用量子处理器[解决了首个具科学意义的问题](https://www.nature.com/articles/d41586-025-00765-1)，但这一主张也很快被改进的经典算法所质疑。

![图为谷歌 Willow 量子芯片特写，由手套手掌托起](https://media.nature.com/lw767/magazine-assets/d41586-025-03300-4/d41586-025-03300-4_51605210.jpg)

谷歌的 Willow 量子计算芯片。图片来源：Google Quantum AI

谷歌称，其“量子回声”算法在公司量子处理器上的运行速度，比当前最优经典计算对手快 13,000 倍。该团队投入相当于研究人员 10 年时间对经典对照算法进行“红队测试”（red teaming）——即尽可能地强化与优化经典算法。受访 *Nature* 记者的研究人员认为，谷歌的结果相当扎实。“这无疑向持怀疑态度者发起挑战，看他们能否在经典计算框架下重现这些结果。”德州大学奥斯汀分校计算机科学家 Scott Aaronson 表示。

但 Sels 指出，13,000 倍的提升并非一个非常大的缓冲空间，他已能想象出一些可能进一步加速经典算法的策略。

![img](https://media.nature.com/w400/magazine-assets/d41586-025-03300-4/d41586-025-03300-4_50729064.jpg)

[AI 与量子计算融合：科学革命还是炒作？](https://www.nature.com/articles/d41586-025-03300-4)

Aaronson 认为，谷歌此次主张的最大优势之一在于：该算法的结果是**确定性数字**，因此可在另一台量子计算机上加以验证。而当算法被用于预测真实分子结构时，其输出还可与实验测量结果进行比对，Neven 补充道。此前的量子优势主张往往基于概率性算法，输出结果本身就是“不可重复”的。可验证的量子优势（verifiable quantum advantage）是“该领域过去数年中最具挑战性的问题之一，我很高兴看到谷歌及其他团队在这一方向上取得明确进展。”Aaronson 表示。

但他也指出，要从这一演示迈向任何具有商业价值的实际应用，或构建可扩展、具容错能力的大规模量子计算机，还面临着“额外的巨大挑战”。


这项工作涉及谷歌量子 AI 团队的许多成员，以及谷歌 DeepMind 和加州大学伯克利分校、达特茅斯学院等研究者。值得一提的是，新晋诺奖得主、现任谷歌量子 AI 实验室硬件首席科学家 Michel Devoret 也参与其中。
以下为该研究论文全文的译文：

## 在量子遍历性边缘观察到构造性干涉现象

## Observation of constructive interference at the edge of quantum ergodicity 

https://doi.org/10.1038/s41586-025-09526-6  
收稿日期：2024年11月3日  
接受日期：2025年8月13日  
在线发表：2025年10月22日  

Google Quantum AI 及其合作团队*


量子多体系统（quantum many-body systems）的动力学特征通过时空分离点上的相关函数（correlation functions）所重建的量子可观测量来描述${ }^{1-3}$。然而，在纠缠增长迅速的动力学中，量子可观测量通常会由于信息搅动（scrambling）而在长时间尺度上对底层动力学的细节失去敏感性。为绕过这一限制并使实验系统能够访问相关动力学，已成功实施多次时间反转协议（time-reversal protocols）${ }^{4}$。本文中，我们在超导量子处理器上实验测量了二阶反时间序相关函数（second-order out-of-time-order correlators, $\mathrm{OTOC}^{(2)}$）${ }^{5-18}$，发现其在长时间尺度上仍保持对底层动力学的敏感性。此外，$\mathrm{OTOC}^{(2)}$ 显现出高度纠缠的量子多体系统中无法通过非时间反转技术获取的量子关联。该点通过一个实验协议得以验证，该协议在量子演化过程中插入泡利算符（Pauli operators），以在海森堡表象（Heisenberg picture）中随机化泡利串（Pauli strings）的相位。实验测得的 $\mathrm{OTOC}^{(2)}$ 值在该协议作用下发生显著变化，从而揭示出构成配置空间中大回路（large loops）的泡利串之间的构造性干涉（constructive interference）。所观察到的干涉机制也使得 $\mathrm{OTOC}^{(2)}$ 拥有高度的经典模拟复杂性。这些结果，加之 $\mathrm{OTOC}^{(2)}$ 在揭示量子动力学有用细节（如哈密顿量学习）方面的能力，指示出实现实用量子优势的可行路径。

识别量子系统中多体自由度之间的复杂关联是量子动力学模拟的核心目标。即便是光谱学问题也可用少点动态相关来表述。随着纠缠随系统规模或演化时间增长，所产生的动力学往往呈遍历性（ergodic）。因此，对于大多数量子可观测量而言，其对量子动力学细节的敏感性呈指数衰减，限制了其揭示多体关联的能力。数值或解析地研究这些关联也因难以识别微妙的贡献过程而受到限制，这些过程削弱了常见的简化假设。此外，薛定谔方程（Schrödinger equation）的线性性排除了使用基于初始条件敏感性的经典技术，而这些方法已被证明在检测蝴蝶效应（butterfly effect）和刻画经典混沌方面十分有效。

为应对上述挑战，采用重聚焦以回声方式抵消几乎全部演化的实验协议已成为探测高度纠缠动力学的关键手段。这些协议在量子计量（quantum metrology）和传感${ }^{19,20}$，以及混沌、黑洞与热化研究中被广泛应用${ }^{6,8,21-23}$。包含时间反转的动力学序列最自然地在算符演化的海森堡表象中进行描述（见图1）。该序列可被构想为一个干涉问题，其中相关性反映了多体轨迹之间的相干干涉。因而，可观测量的计算可表达为对不同轨迹的求和。在这一概念框架中，每次时间反转相当于增加两个干涉臂以及其他贡献实验可观测量的交叉项，这些项在形式上被称为反时间序相关函数（out-of-time-order correlators，OTOCs）${ }^{5-18}$。

在本工作中，我们实施了一系列 OTOC 实验，并利用干涉框架来理解不同路径及其组合如何揭示那些在无时间反转或数值方法下无法获取的量子关联。更具体而言，我们利用数字量子处理器的独特可编程性来改变干涉臂的数量（图2），并在每个干涉臂中插入噪声（图3）或相干（图5）相位移器。结果表明，与无时间反转时的可观测量相比，OTOC 对这些扰动更加敏感。此外，我们发现该敏感性随 OTOC 阶数 $k$（即干涉臂数）的提升而增强。尤其是，$\mathrm{OTOC}^{(2)}$ 显示出泡利串之间的构造性干涉，而这一现象在低阶可观测量中不可见。

为理解多次时间反转如何恢复对量子动力学的敏感性，我们首先考虑在一个初始化于算符 $M \in \{X, Y, Z\}$ 的本征态下的量子比特 $q_{\mathrm{m}}$ 上测量泡利算符 $M$，其中该量子比特位于一个方形晶格中。时刻 $t$ 的测量等价于时间有序相关函数（time-ordered correlator, TOC）$\langle M(t) M\rangle$，其中 $M(t)=U^{\dagger}(t) M U(t)$ 表示在海森堡表象中演化的 $M$，$U$ 为多体幺正算符，$\langle\ldots\rangle$ 表示对初态的期望值。如先前实验所示${ }^{24-27}$，当 $U$ 呈遍历性时，$\langle M(t) M\rangle$ 将呈指数衰减。这源于量子信息从初始量子比特 $q_{\mathrm{m}}$ 的状态扩散到系统中指数庞大的希尔伯特空间中。

![图1](https://cdn.mathpix.com/cropped/2025_10_23_94531eb1c4c1e21fbb9dg-2.jpg?height=694&width=900&top_left_y=160&top_left_x=128){width="600"}

图1｜OTOC 作为干涉仪。a，若动力学协议包含回声操作，海森堡表象为研究动力学的自然框架。b，OTOC 与 $\mathrm{OTOC}^{(2)}$ 可视作时间干涉仪，突出其聚焦特定细节并回声抵消无关动力学的能力。参数定义见正文。

上述衰减可通过图2a所示的演化方式部分恢复。此处的动力学 $U$ 被嵌套回声序列 $U_{k}(t)=B(t)[M B(t)]^{k-1}$ 取代，其中 $B(t)=U^{\dagger}(t) B U(t)$ 为另一个作用于远离 $q_{\mathrm{m}}$ 的量子比特 $q_{\mathrm{b}}$ 的泡利算符 $B$ 的演化态，$k \geq 1$ 为整数。$U_{k}$ 的作用可理解为将 $M$ 注入的信息扩散、经 $B$ 修改、再反转回 $M$，并重复该过程 $k-1$ 次。由于 $U_{k}^{\dagger}(t)=U_{k}(t)$，期望值（记作 $\mathcal{C}^{(2k)}$）可写为：

$$
\begin{equation*}
\mathcal{C}^{(2 k)}=\left\langle U_{k}^{\dagger}(t) M U_{k}(t) M\right\rangle=\left\langle(B(t) M)^{2 k}\right\rangle . \tag{1}
\end{equation*}
$$

当 $k=1$ 时，$\mathcal{C}^{(2)}$ 即为著名的反时间序相关函数（OTOC）${ }^{5-18,28}$。因此，我们将 $\mathcal{C}^{(2k)}$ 称为 $\mathrm{OTOC}^{(k)}$ 或第 $k$ 阶 OTOC。公式（1）揭示两个关键点：其一，若起始于 $q_{\mathrm{m}}$ 的信息尚未到达 $q_{\mathrm{b}}$，则 $B(t)$ 与 $M$ 对易，返还到 $q_{\mathrm{m}}$ 的信息等同初始态。因此，存在一个波前，使得 $\mathcal{C}^{(2k)}$ 在其之后迅速衰减。通过增大 $q_{\mathrm{m}}$ 与 $q_{\mathrm{b}}$ 之间的距离，该波前可被推迟，从而在 TOC 约为 0 的区域测得较大信号；其二，若 $U$ 不是 Clifford 序列，$M$ 起始的信息可经多个配置路径返回，因而 $B(t)$ 中的泡利串之间可能产生构造性干涉，尤其当 $k \geq 2$ 时 $\mathcal{C}^{(2k)}$ 中尤为明显。

### OTOC 对量子动力学的敏感性

我们首先刻画 $\mathrm{OTOC}^{(2)}$ 对量子动力学微观细节的敏感性。图2a 示意了我们的量子电路，由随机单量子比特门与固定的双量子比特门构成。实验首先固定 $q_{\mathrm{m}}$ 与 $q_{\mathrm{b}}$ 的选择。然后通过改变嵌套在确定性双量子比特门之间的单量子比特门的随机参数，生成电路实例 $i$。对于固定的电路循环数 $t$，重复测量 $\mathcal{C}^{(2k)}\left(t, q_{\mathrm{m}}, q_{\mathrm{b}}, i\right)$，直到其测量统计噪声低于其平均值的 10%。

随后重复该协议，通过改变 $t$、$q_{\mathrm{m}}$、$q_{\mathrm{b}}$ 及电路实例 $i$（共采样 50 到 250 次）。最后，通过误差缓解策略（见补充材料 II.E.1 和 II.F.1 节）得到的全局重缩因子对所有实验数据 $\mathcal{C}^{(2)}$ 与 $\mathcal{C}^{(4)}$ 进行归一化处理。

图2b 上排展示了对不同循环周期和 $q_{\mathrm{b}}$ 的选择下的 $\overline{\mathcal{C}}^{(4)}\left(t, q_{\mathrm{b}}\right)$，其中上划线表示对电路实例的平均。$q_{\mathrm{m}}$ 的位置在整个测量过程中保持固定。前文所述的信息前沿在实验数据中清晰可见。对于每个 $t$，存在一个边界，使得在该边界之外的 $q_{\mathrm{b}}$ 对应的 $\mathcal{C}^{(4)}$ 近似为 1。该边界定义了 $q_{\mathrm{m}}$ 的光锥（light cone），即与其发生纠缠的量子比特集合。此外，我们发现电路实例之间的 $\mathcal{C}^{(4)}\left(t, q_{\mathrm{b}}\right)$ 波动（用标准差 $\sigma$ 表示）在靠近信息前沿时与平均值同阶。这表明 $\mathcal{C}^{(4)}$ 对底层演化 $U$ 的细节高度敏感，后文我们将利用该效应展示其在哈密顿量学习中的应用。

为系统研究 OTOC 敏感性随时间的衰减，我们测量了不同 OTOC 随 $t$ 变化的标准差（图2c）。我们观察到 $\mathcal{C}^{(2)}$、$\mathcal{C}^{(4)}$ 及 $\mathrm{OTOC}^{(2)}$ 的非对角部分（$\mathcal{C}_{\text{off-diag}}^{(4)}$，定义见下一节）均以幂律衰减，并在 $t=20$ 之后仍保持大于 0.01。而 TOC 的标准差则呈指数衰减，在 $t=9$ 时已小于 0.01。TOC 与 OTOC 的鲜明对比表明，后者的干涉结构对增强其对量子动力学的敏感性至关重要。补充材料第四节进一步通过一维 Haar 随机场研究了 OTOC ${ }^{(k)}$ 的波动，发现其幂律衰减行为与二维实验结果一致。

### $\mathbf{OTOC}^{\mathbf{(2)}}$ 中的大回路干涉

上一节中对 OTOC 测量中 $U$ 的全部细节进行了变化，其实验方案等同于完全移动干涉仪的臂（见图1b）。本节中我们展示，高阶 OTOC 对干涉臂相位的敏感性逐渐增强，这是干涉现象的重要特征。从概念上看，多体干涉可通过如下方式理解：在遍历极限下，公式（1）可重写为：

$$
\begin{equation*}
\mathcal{C}^{(2 k)}=\operatorname{Tr}\left[(B(t) M)^{(2 k)}\right] / 2^{N} . \tag{2}
\end{equation*}
$$

对于给定电路实例，$B(t)$ 可在 $N$ 量子比特系统的 $4^{N}$ 个泡利串基底 $\left\{P_{n}\right\}$ 上展开为：

$$
\begin{equation*}
B(t)=\sum_{n=1}^{4^{N}} b_{n}(t) P_{n} \tag{3}
\end{equation*}
$$

其中 $\left\{b_{n}\right\}$ 为一组实值的时间相关系数。图3a 左下角面板展示了 $B$ 的时间演化，在非 Clifford 门的作用下，其在泡利空间中发生分支，产生所谓的算符纠缠（operator entanglement）${ }^{18,29,30}$。示意图中，一些泡利串的轨迹（阴影区域）在时间演化过程中亦发生重组。该机制影响 $\mathcal{C}^{(4)}$ 与 $\mathcal{C}^{(2)}$，我们称之为小回路干涉（small-loop interference）。


大回路干涉（large-loop interference）的机制与时间演化结束时泡利串（Pauli strings）对实验可观测量的贡献方式有关。该机制仅出现在 $\mathcal{C}^{(4)}$ 中，如图 3a 上部面板中所示。由于 $M P_{n} M = \pm P_{n}$，公式（2）在 $\mathcal{C}^{(4)}$ 的情况下可重写为：

$$
\begin{equation*}
\mathcal{C}^{(4)}=\sum_{\alpha, \beta, \gamma, \delta} c_{\alpha \beta \gamma \delta} \operatorname{Tr}\left[P_{\alpha} P_{\beta} P_{\gamma} P_{\delta}\right] . \tag{4}
\end{equation*}
$$

其中每个 $c_{\alpha \beta \gamma \delta}$ 亦为实值系数。图 3a 顶部面板中，每个泡利串在图示中表现为一个彩色线段，该线段的长度定性表示该泡利串与单位算符之间的汉明距离（Hamming distance）。两个泡利串相乘会在一端连接，从而形成连接两个端点的新泡利串。

![图2](https://cdn.mathpix.com/cropped/2025_10_23_94531eb1c4c1e21fbb9dg-3.jpg?height=564&width=1836&top_left_y=155&top_left_x=131)

图2｜OTOC 对量子动力学微观细节的敏感性。**a，** 上图为用于测量不同阶数 OTOC（$\mathrm{OTOC}^{(k)}$）的量子电路示意图。此处 $\left|\psi_{M}\right\rangle$ 是测量算符 $M$ 的本征态（本文中实现为 $Z$），算符 $B$ 实现为 $X$。下图展示了将幺正算符 $U$ 实现为由单量子比特门和双量子比特门组成的 $t$ 次循环。每个单量子比特门形式为 $\exp \left(-\mathrm{i} \frac{\theta}{2}(\cos (\phi) X+\sin (\phi) Y)\right)$，其中 $\theta / \pi \in \{0.25, 0.5, 0.75\}$，$\phi / \pi$ 从区间 $[-1,1]$ 中随机选择。每个 iSWAP 类门等效于 iSWAP 门后接带约 0.35 弧度条件相位的 CPHASE 门。**b，** 在 $t=6,12,18$ 个循环下，对 100 个电路实例测得的 $\mathrm{OTOC}^{(2)}$（即 $\mathcal{C}^{(4)}$）的均值与标准差。每个量子比特位置的颜色表示 $B$ 作用于该位置所收集的数据。紫点表示 $q_{\mathrm{m}}$ 的固定位置，青色线表示 $q_{\mathrm{m}}$ 的光锥。**c，** 四个量的标准差：TOC（$\mathcal{C}^{(1)}$）、OTOC（$\mathcal{C}^{(2)}$）、$\mathcal{C}^{(4)}$ 以及 $\mathrm{OTOC}^{(2)}$ 的非对角部分（$\mathcal{C}_{\text {off-diag }}^{(4)}$）。对于 $\mathcal{C}^{(2)}$、$\mathcal{C}^{(4)}$ 和 $\mathcal{C}_{\text {off-diag }}^{(4)}$，$q_{\mathrm{m}}$ 与图 **b** 相同，而 $q_{\mathrm{b}}$ 随着电路循环次数增加逐渐远离 $q_{\mathrm{m}}$，以保持 $\overline{\mathcal{C}}^{(2)} \approx 0.5$。$\mathcal{C}^{(1)}$ 对应于位于晶格中心附近的量子比特上测得的 $\langle Z(t) Z\rangle$。SQ 表示单量子比特门。

![图3](https://cdn.mathpix.com/cropped/2025_10_23_94531eb1c4c1e21fbb9dg-3.jpg?height=812&width=1836&top_left_y=1343&top_left_x=131)

图3｜$\mathrm{OTOC}^{(2)}$ 的量子干涉与经典模拟复杂性。**a，** 在海森堡表象中，$B(t)$ 随时间演化分支为多量子比特泡利串的叠加态。对于 $\mathcal{C}^{(2)}$（仅包含两个 $B(t)$ 副本），仅当最终的 $P_\alpha$ 与 $P_\beta$ 相同时才有贡献。对于 $\mathcal{C}^{(4)}$，当 $P_\alpha = P_\beta$ 且 $P_\gamma = P_\delta$ 时形成对角分量 $\mathcal{C}_{\text{diag}}^{(4)}$，否则形成非对角分量 $\mathcal{C}_{\text{off-diag}}^{(4)}$。**b，** 用于探测量子干涉的实验协议，在某一电路循环处插入随机泡利算符，从而改变泡利串系数的符号。**c，** 相对信号变化 $1 - \rho$ 随泡利插入循环位置的变化情况，其中 $\rho$ 为 50 个不同 40 量子比特电路（$t=22$ 循环）插入与未插入泡利算符的实验数据之间的皮尔逊相关系数。误差条表示从实验数据重采样估算的标准误差。插图显示第 11 循环的数据。**d，** 实验测得的 $\mathcal{C}^{(2)}$ 与 CMC 启发式算法精确模拟值的对比，基于 40 量子比特电路。CMC 的信噪比为 5.3，接近实验值 5.4。插图为 c-e 中实验用的电路结构示意图（红色为 $q_{\mathrm{m}}$，蓝色为 $q_{\mathrm{b}}$）。**e，** 同一组电路上实验测得的 $\mathcal{C}_{\text{off-diag}}^{(4)}$，以及精确与 CMC 模拟结果。$\mathcal{C}_{\text{off-diag}}^{(4)}$ 通过用非平均 $\mathcal{C}^{(4)}$ 减去泡利平均后的结果得到。实验信噪比为 3.9，而 CMC 仅为 1.1。误差条依据补充材料 II.F.3 与 II.F.4 节中的经验误差模型。Exp：实验；MC：蒙特卡洛；sim：模拟。

![图4](https://cdn.mathpix.com/snip/images/kjE1VjfKl0c1eb5XdzrbvMJVje96sO3zFqweXbw-JCM.original.fullsize.png){width="500"}

图4｜在经典计算困难区测量 $\mathrm{OTOC}^{(2)}$。**a，** 在 65 量子比特电路上测得的 $\mathcal{C}_{\text{off-diag}}^{(4)}$，$B$ 同时作用于三个不同量子比特。插图为量子比特结构。**b，** 不同系统规模（18 至 40 量子比特）下测得电路的实验信噪比。误差条为经验误差模型 95% 置信区间（补充材料 II.F.3 与 II.F.4 节）。**c，** 使用张量网络收缩（tensor-network contraction）在 Frontier 超级计算机上模拟图 a 中单个电路的 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 所需的时间估计。估计通过在 20 台 Google Cloud 虚拟机（共计 1200 个 CPU）上运行特定优化算法${ }^{46-49}$，在最长 24 小时内得到。使用开源库 cotengra${ }^{47}$ 所得估计开销高出约 10 倍。TNCO 表示张量网络收缩。

要使公式（4）中的迹非零，四个泡利串的乘积必须为单位算符，即图示中需形成一个回路。该条件可通过两种方式满足：若 $\alpha = \beta$ 且 $\gamma = \delta$，则得到 $\mathcal{C}^{(4)}$ 的对角贡献 $\mathcal{C}_{\text{diag}}^{(4)}$，此类回路包围面积为零；若 $\alpha \neq \beta \neq \gamma \neq \delta$，则得到非对角贡献 $\mathcal{C}_{\text{off-diag}}^{(4)}$，因其每项可视为泡利密度矩阵中 $4^{4N} \times 4^{4N}$ 的一个非对角元。从图示上看，$\mathcal{C}_{\text{off-diag}}^{(4)}$ 表示由算符回路叠加而成，每个回路包含三个不受约束的泡利串，因此可包围任意大的面积。相比之下，$\mathcal{C}^{(2)}$ 中无大回路干涉，因其仅包含 $\alpha = \beta$ 的泡利串，如同 $\mathcal{C}_{\text{diag}}^{(4)}$。

为刻画量子干涉效应，我们在 $U$ 与 $U^\dagger$ 的不同循环中插入随机泡利算符（图3b）。插入的泡利算符改变公式（4）中系数 $c_{\alpha \beta \gamma \delta}$ 的符号而不改变其幅度，这类似于在经典干涉回路中改变相位而不改变强度。通过对随机泡利平均并探测 $\mathcal{C}^{(4)}$ 或 $\mathcal{C}^{(2)}$ 的变化，可量化干涉贡献。图3c 展示了实验测得的 $1-\rho$，$\rho$ 为插入与未插入泡利时电路数据的皮尔逊相关系数。插入泡利算符使 $\mathcal{C}^{(4)}$ 发生显著变化，表明大回路干涉（$\mathcal{C}_{\text{off-diag}}^{(4)}$）为主要贡献。相比之下，$\mathcal{C}^{(2)}$ 的信号变化较弱，说明其仅含小回路干涉。靠近 $B$ 与 $M$ 的量子门对信号贡献更大，因而泡利插入靠近 $U$ 边缘时效果更显著。同时，$\mathcal{C}^{(4)}$ 的 $1 - \rho$ 在后期插入循环略有下降，可能源自外部退相干过程降低干涉可见度。最后，通过将插入泡利后的 $\mathcal{C}^{(4)}$ 减去原始值，即可提取 $\mathcal{C}_{\text{off-diag}}^{(4)}$。



![](https://cdn.mathpix.com/snip/images/i_L0gXC4i0f_5kBRdiJzeQ7LnNgL4aYaTC8Ftxj32DU.original.fullsize.png){width="500"}

图5｜$\mathbf{OTOC}^{(2)}$ 在哈密顿量学习（Hamiltonian learning）中的应用。**a，** 应用 $\mathrm{OTOC}^{(2)}$ 进行哈密顿量学习的方案。将实际物理系统中测得的 $\mathrm{OTOC}^{(2)}$ 与在参数化哈密顿量下模拟得到的 $\mathrm{OTOC}^{(2)}$ 进行比较，并优化哈密顿量参数以最小化二者之间的差异。**b，** 单参数学习实验演示。图左下展示的 34 量子比特电路结构下，从 20 个电路实例中获得的、由经典模拟产生的一组 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 值被作为“物理系统”数据。目标是学习某对量子比特之间双量子比特门 $U_{2Q}$ 的相位参数 $\xi/\pi = 0.6$（绿色条所示）。**c，** 量子处理器在三组电路实例下测得的 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 随 $\xi$ 的变化曲线。蓝色线为对应经典模拟结果，三组数据均在目标 $\xi$ 值（虚线）处与模拟曲线交汇。**d，** 优化代价函数，表示量子处理器数据与经典模拟数据（共 20 个电路实例）之间的均方根差。代价函数在目标 $\xi$ 处达到全局最小值。

我们发现，在 $\mathcal{C}^{(2)}$ 与 $\mathcal{C}^{(4)}$ 中观察到的干涉效应与其在近似经典模拟算法下的复杂性密切相关，因为量子干涉程度决定了允许的经典近似水平。对于 OTOC 而言，部分情况下可以通过将精确波函数演化与忽略小回路干涉效应的蒙特卡洛模拟结合来较好地逼近结果。补充材料第 III.B 节中描述了两种此类算法：缓存蒙特卡洛（cached Monte Carlo, CMC）与张量网络蒙特卡洛。图 3d 展示了 40 量子比特电路实例中实验测得的 $\mathcal{C}^{(2)}$ 与 CMC 模拟结果的对比。为量化数据精度，我们定义了一个信噪比（signal-to-noise ratio, SNR；见方法部分），与同图中展示的精确模拟 $\mathcal{C}^{(2)}$ 值进行比较。CMC 的 SNR 为 5.3，与实验 SNR 的 5.4 接近。然而，对于 $\mathrm{OTOC}^{(2)}$ 的非对角部分（$\mathcal{C}_{\text{off-diag}}^{(4)}$），经典算法的精度明显不足，仅能实现 SNR = 1.1，而实验值为 3.9，如图 3e 所示。补充材料第 III.C 节对本研究尝试的所有经典模拟算法进行了回顾，结果显示均无法有效逼近 $\mathcal{C}_{\text{off-diag}}^{(4)}$。

### 迈向实用的量子优势（practical quantum advantage）

高敏感性与高经典模拟复杂性的结合使得高阶 OTOC，尤其是 $\mathrm{OTOC}^{(2)}$，成为实现实用量子优势长期目标的有力候选者。为展示这一潜力，我们进行了两个额外实验，分别表明：(1) $\mathrm{OTOC}^{(2)}$ 可在当前经典超级计算机难以处理的区间中被精确解析；(2) $\mathrm{OTOC}^{(2)}$ 可用于解决实际任务。

我们首先演示第 (1) 点。图 4a 展示了在 65 量子比特结构下测得的一组 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 值，其中 $B$ 同时作用于三个不同的量子比特，目的是最大化有效量子体积（即处于 $B$ 与 $M$ 操作符光锥中的双量子比特门数量${ }^{31}$）。为估计这些测量的准确性，我们随后在六种不同系统规模（最多至 40 量子比特）下评估了实验误差（SNR），如图 4b 所示。可见，随着系统规模增大，SNR 下降有限，并在补充材料 II.F.3 与 II.F.4 节中详述的经验误差模型的置信区间范围内。基于相同误差模型，65 量子比特实验数据的 SNR 预计在 2 到 3 之间。鉴于经典启发式算法无法达到此精度（见补充材料 III.C 节），张量网络收缩成为模拟同样电路的最有效经典方法。图 4c 展示了使用张量网络收缩方法在 Frontier 超级计算机上模拟 $\mathcal{C}_{\text{diag}}^{(4)}$ 的估计计算时间，其收敛结果约为 3.2 年。这一耗时大约是实验每个电路数据采集时间（2.1 小时）的 13,000 倍，表明该实验已进入当前量子计算的“超越经典”（beyond-classical）范畴。

为在现实应用中应用 OTOC，我们考虑一个由具有未知参数的哈密顿量刻画的实际物理系统。该系统提供一组 $\mathrm{OTOC}^{(2)}$ 数据，随后与相同哈密顿量下的量子模拟结果进行比较，通过优化未知参数使模拟数据与实验数据匹配（见图 5a）。如图 2 与图 3 所示，$\mathrm{OTOC}^{(2)}$ 具有缓慢衰减的信号与高敏感性，因此非常适合完成这一被称为哈密顿量学习（Hamiltonian learning）${ }^{32-35}$ 的任务。

为验证该方案的可行性，我们构造了一个单参数学习的示例，如图 5b 所示。我们提供了一组由经典模拟生成、对应图 5a 中“物理系统”的 20 个随机电路实例的 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 值。除了某一双量子比特门 $U_{2Q}$ 的相位参数 $\xi$（该门位于 $q_{\mathrm{m}}$ 与 $q_{\mathrm{b}}$ 之间路径上）外，$U$ 的全部细节已知。为学习该未知参数 $\xi$，我们在量子处理器上测量 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 并调节 $\xi$。图 5c 显示了三组电路实例的实验结果，可见每组实验信号随 $\xi$ 平滑振荡，且三组曲线均在目标值处与经典模拟结果交汇。这一趋势在图 5d 中得到进一步体现，其中我们构建了一个代价函数，用以评估经典模拟与实验测得的 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 之间的均方根差。该代价函数在目标 $\xi$ 处取得全局最小值。


### 结论（Conclusion）

在本研究中，我们展示了 OTOC（out-of-time-order correlator，反时间序相关函数）具有量子干涉效应，这赋予了它们对量子动力学细节的高度敏感性；对于 $\mathrm{OTOC}^{(2)}$，还具有极高的经典模拟复杂性。因此，OTOC 是实现实用量子优势（practical quantum advantage）的可行候选者，这也是当前多项实验所追求的重要里程碑${ }^{36-38}$。一般而言，实用量子优势可被表述为测量低秩可观测量（low-rank observables）的期望值这一任务，例如能量或相关函数${ }^{3,39}$，该任务需满足以下两个条件：

(1) 该可观测量能够以足够精度在实验中测量，在本研究中指信噪比（SNR）大于 1。更形式地说，该可观测量属于有界误差量子多项式时间类（bounded-error quantum polynomial-time，BQP）${ }^{40}$。

(2) 该可观测量无法被精确的经典模拟方法或那些牺牲精度以换取效率的启发式方法所计算${ }^{31,41-44}$。

同时满足上述两点即定义了实现量子优势的“黄金区间（Goldilocks zone）”。而要真正展示实用量子优势，还需满足第三个条件：

(3) 该可观测量应能提供关于量子系统的实用相关信息。

在本研究中，我们通过测量一个具有 SNR > 2 的多体可观测量，并展示该量超出了当前已知经典模拟算法的计算能力，已在条件 (1) 与 (2) 上取得进展。此外，我们还通过一个动态学习问题提供了条件 (3) 的概念验证。尽管该动态学习演示中使用的随机电路仍是对实际相关哈密顿量的一种玩具模型（toy model），但该学习方案本身可直接应用于真实物理系统。其中一个实例是固态核磁共振（nuclear magnetic resonance, NMR）系统，其中自旋对之间的偶极耦合可以在未知耦合强度的情况下进行反演${ }^{45}$。将此类系统的实验数据与量子模拟结果进行比较，或许能更准确地估计这些耦合强度。我们将这一令人兴奋的现实应用留作未来工作探索。

### 在线内容（Online content）

包括方法部分、附加参考文献、Nature 期刊报告摘要、原始数据、扩展数据、补充材料、致谢、同行评审信息、作者贡献与竞争性利益声明，以及数据与代码可用性说明，均可在以下地址获取：https://doi.org/10.1038/s41586-025-09526-6。


1. Feynman, R. P. Simulating physics with computers. Int. J. Theor. Phys. 21, 467-488 (1982).
2. Lloyd, S. Universal quantum simulators. Science 273, 1073-1078 (1996).
3. Altman, E. et al. Quantum simulators: architectures and opportunities. PRX Quantum 2, 017003 (2021).
4. Baum, J., Munowitz, M., Garroway, A. N. \& Pines, A. Multiple-quantum dynamics in solid state NMR. J. Chem. Phys. 83, 2015-2025 (1985).
5. Larkin, A. I. \& Ovchinnikov, Y. N. Quasiclassical method in the theory of superconductivity. Sov. Phys. JETP 28, 1200-1205 (1969).
6. Shenker, S. H. \& Stanford, D. Black holes and the butterfly effect. J. High Energy Phys. 2014, 67 (2014).
7. Hosur, P. et al. Chaos in quantum channels. J. High Energy Phys. 2016, 4 (2016).
8. Maldacena, J., Shenker, S. H. \& Stanford, D. A bound on chaos. J. High Energy Phys. 2016, 106 (2016).
9. Swingle, B. et al. Measuring the scrambling of quantum information. Phys. Rev. A 94, 040302 (2016).
10. Aleiner, I. et al. Microscopic model of quantum butterfly effect: out-of-time-order correlators and traveling combustion waves. Ann. Phys. 375, 378-406 (2016).
11. Roberts, D. \& Yoshida, B. Chaos and complexity by design. J. High Energy Phys. 2017, 121 (2017).
12. Gärttner, M. et al. Measuring out-of-time-order correlations and multiple quantum spectra in a trapped-ion quantum magnet. Nat. Phys. 13, 781-786 (2017).
13. Nahum, A., Vijay, S. \& Haah, J. Operator spreading in random unitary circuits. Phys. Rev. X 8, 021014 (2018).
14. von Keyserlingk, C. W. et al. Operator hydrodynamics, OTOCs, and entanglement growth in systems without conservation laws. Phys. Rev. X 8, 021013 (2018).
15. Rakovszky, T. et al. Diffusive hydrodynamics of out-of-time-ordered correlators with charge conservation. Phys. Rev. X 8, 031058 (2018).
16. Khemani, V. et al. Operator spreading and the emergence of dissipative hydrodynamics under unitary evolution with conservation laws. Phys. Rev. X 8, 031057 (2018).
17. Landsman, K. et al. Verified quantum information scrambling. Nature 567, 61-65 (2019).
18. Mi, X. et al. Information scrambling in quantum circuits. Science 374, 1479-1483 (2021).
19. Davis, E. et al. Approaching the Heisenberg limit without single-particle detection. Phys. Rev. Lett. 116, 053601 (2016).
20. Li, Z. et al. Improving metrology with quantum scrambling. Science 380, 1381-1384 (2023).
21. Hayden, P. \& Preskill, J. Black holes as mirrors: quantum information in random subsystems. J. High Energy Phys. 2007, 120 (2007).
22. Sekino, Y. \& Susskind, L. Fast scramblers. J. High Energy Phys. 2008, 065 (2008).
23. Xu, S. \& Swingle, B. Locality, quantum fluctuations, and scrambling. Phys. Rev. X 9, 031048 (2019).
24. Kaufman, A. M. et al. Quantum thermalization through entanglement in an isolated many-body system. Science 353, 794-800 (2016).
25. Zhou, Z. et al. Thermalization dynamics of a gauge theory on a quantum simulator. Science 377, 311-314 (2022).
26. Zhang, X. et al. A superconducting quantum simulator based on a photonic-bandgap metamaterial. Science 379, 278-283 (2023).
27. Andersen, T. I. et al. Thermalization and criticality on an analogue-digital quantum simulator. Nature 638, 79-85 (2025).
28. Braumüller, J. et al. Probing quantum information propagation with out-of-time-ordered correlators. Nat. Phys. 18, 172-178 (2022).
29. Zanardi, P. Entanglement of quantum evolutions. Phys. Rev. A 63, 040304 (2001).
30. Garcia, R. J., Bu, K. \& Jaffe, A. Resource theory of quantum scrambling. Proc. Natl Acad. Sci. USA 120, e2217031120 (2023).
31. Kechedzhi, K. et al. Effective quantum volume, fidelity and computational cost of noisy quantum processing experiments. Future Gener. Comput. Syst. 153, 431-441 (2024).
32. Bairey, E. et al. Learning a local Hamiltonian from local measurements. Phys. Rev. Lett. 122, 020504 (2019).
33. O'Brien, T. E. et al. Quantum computation of molecular structure using data from challenging-to-classically-simulate nuclear magnetic resonance experiments. PRX Quantum 3, 030345 (2022).
34. Cotler, J., Schuster, T. \& Mohseni, M. Information-theoretic hardness of out-of-time-order correlators. Phys. Rev. A 108, 062608 (2023).
35. Schuster, T. et al. Learning quantum systems via out-of-time-order correlators. Phys. Rev. Res. 5, 043284 (2023).
36. Kim, Y. et al. Evidence for the utility of quantum computing before fault tolerance. Nature 618, 500-505 (2023).
37. King, A. D. et al. Beyond-classical computation in quantum simulation. Science 388, 199-204 (2025).
38. Haghshenas, R. et al. Digital quantum magnetism at the frontier of classical simulations. Preprint at https://arxiv.org/abs/2503.20870 (2025).
39. Daley, A. J. et al. Practical quantum advantage in quantum simulation. Nature 607, 667-676 (2022).
40. Bernstein, E. \& Vazirani, U. Quantum complexity theory. SIAM J. Comput. 26, 1411-1473 (1997).
41. Tindall, J., Fishman, M., Stoudenmire, E. M. \& Sels, D. Efficient tensor network simulation of IBM's Eagle kicked Ising experiment. PRX Quantum 5, 010308 (2024).
42. Begušić, T. et al. Fast and converged classical simulations of evidence for the utility of quantum computing before fault tolerance. Sci. Adv. 10, eadk4321 (2024).
43. Tindall, J. et al. Dynamics of disordered quantum systems with two- and three-dimensional tensor networks. https://arxiv.org/abs/2503.05693 (2025).
44. Mauron, L. \& Carleo, G. Challenging the quantum advantage frontier with large-scale classical simulations of annealing dynamics. https://arxiv.org/abs/2503.08247 (2025).
45. Rhim, W.-K. et al. Time-reversal experiments in dipolar-coupled spin systems. Phys. Rev. B 3, 684-696 (1971).
46. Boixo, S. et al. Simulation of low-depth quantum circuits as complex undirected graphical models. https://arxiv.org/abs/1712.05384 (2017).
47. Gray, J. \& Kourtis, S. Hyper-optimized tensor network contraction. Quantum 5, 410 (2021).
48. Kalachev, G. et al. Multi-tensor contraction for XEB verification of quantum circuits. https://arxiv.org/abs/2108.05665 (2022).
49. Pan, F., Chen, K. \& Zhang, P. Solving the sampling problem of the Sycamore quantum circuits. Phys. Rev. Lett. 129, 090502 (2022).



Google Quantum AI and Collaborators

## 方法（Methods）

### 量子处理器与随机电路采样基准测试（Quantum processor and random circuit sampling benchmark）

该量子处理器最初由 105 个频率可调的超导 transmon 量子比特（superconducting transmon qubits）组成，彼此通过可调耦合器连接。在冷却过程中，我们发现其中两个量子比特由于耦合器偏置线损坏而无法工作，故从实验中排除。关于该处理器的更多细节，包括量子门与读出误差、量子比特的相干时间、非简谐性（anharmonicities）及频率，详见补充材料 II.A 节。相较于我们早期的量子处理器，由于单量子比特弛豫时间 $T_{1}$ 的提升（中位数为 $106 \mu \mathrm{s}$），本设备的双量子比特门（类似 iSWAP）平均误差降至 $0.15\%$。作为全系统基准测试，我们还进行了随机电路采样实验，在 40 个电路循环下估算出的整体保真度约为 0.001，电路体积为此前记录的两倍，若用张量网络收缩（tensor-network contraction）算法在 Frontier 超级计算机上进行模拟，其运行时间相当于约 $10^{25}$ 年（详见补充材料 II.B 节）。

### 信噪比（Signal-to-noise ratio）

信噪比（SNR）的定义如下：对于每组电路特定的 $\mathcal{C}^{(2)}$ 或 $\mathcal{C}_{\text{off-diag}}^{(4)}$，我们先减去其均值并按方差进行归一化，定义 $\mathcal{C}^{(s)}=(\mathcal{C}-\overline{\mathcal{C}}) / \sigma(\mathcal{C})$，其中 $\mathcal{C}$ 表示 $\mathcal{C}^{(2)}$ 或 $\mathcal{C}_{\text{off-diag}}^{(4)}$。该操作分别施用于实验测得的数据 $\left\{\mathcal{C}_{\text{exp}}\right\}$ 与数值模拟结果 $\left\{\mathcal{C}_{\text{sim}}\right\}$。最终信噪比定义为 $1 / \sqrt{\left(\mathcal{C}_{\text{exp}}^{(s)}-\mathcal{C}_{\text{sim}}^{(s)}\right)^{2}}$，其中上划线表示对所有电路实例取平均。该定义与皮尔逊相关系数 $\rho$ 有直接关系：SNR $=1 / \sqrt{2(1-\rho)}$。

### 初始态（Initial states）

对于以单一初始态测量 $\mathcal{C}^{(2k)}$ 的情形，可在初始化系统为目标初始态后，将辅助量子比特与 $q_{\mathrm{m}}$ 纠缠，并于末端读取该辅助量子比特。本文中我们简化了该方案，直接将 $q_{\mathrm{m}}$ 初始化为 $|0\rangle$ 状态，即测量算符 $M=Z$ 的本征态。对 $q_{\mathrm{m}}$ 进行 $Z$ 基测量即可直接得到 $\mathcal{C}^{(2k)}$。

此外也可以测量无穷温度初始态下的 $\mathcal{C}^{(2k)}$，即密度矩阵为 $I / 2^{N}$ 的最大混态，其中 $I$ 为单位矩阵，$N$ 为量子比特数。该操作可通过对不同初始态进行平均来实现。补充材料 II.E.4 节展示了在一组 66 量子比特电路中对初始态平均后测得的无穷温度 $\mathcal{C}^{(2)}$。即使在该情形下，不同电路之间仍存在明显波动，表明即使在最大混态下 $\mathcal{C}^{(2k)}$ 的信号仍具有显著强度。

### 电路几何结构的选择（Choice of circuit geometries）

本文所研究的各类电路几何结构选择依据如下两点：(1) 对于每种系统规模，将 $q_{\mathrm{b}}$ 与 $q_{\mathrm{m}}$ 分布于晶格相对两侧；(2) 每种系统规模下的电路循环次数设定为，在该数值下 $\mathcal{C}_{\text{off-diag}}^{(4)}$ 的平均信号刚好降至 0.01 以下。这两点确保小规模电路结构（如图 4c 中的六种结构）能模拟图 4a 中 65 量子比特结构的几何布局与整体信号强度。

### 40 量子比特电路的经典模拟成本（Classical simulation costs of 40-qubit circuits）

图 3d 与 3e 中的每个 40 量子比特电路实例，使用 Google Cloud 虚拟机（配置为 11.5 TB 内存与 416 个 CPU）进行精确模拟需耗时约 3 小时。要使用 CMC 模拟达到与图 3d 实验结果相当的 SNR（约为 5），需使用缓存大小为 10 亿（见补充材料 III.B.2 节定义），并在单张 NVIDIA H100 GPU 上运行 6 天（每个电路）以收集足够统计数据。

### $\mathcal{C}^{(2k)}$ 的电路间波动（Circuit-to-circuit fluctuations of $\mathcal{C}^{(2k)}$）

补充材料第 IV 节中，我们对一维砖层结构（bricklayer）电路下的 $\mathcal{C}^{(2)}$ 与 $\mathcal{C}^{(4)}$ 的矩进行了理论与数值分析。对于 $\mathcal{C}^{(2)}$，我们结合了微扰理论与大规模矩阵乘积态（matrix product state）模拟，将其幂律波动归因于主文中提到的小回路干涉。对于 $\mathcal{C}^{(4)}$ 与 $\mathcal{C}_{\text{off-diag}}^{(4)}$，由于更复杂，采用了精确数值模拟以验证其波动的多项式缩放特性。我们还展示了算符 $M B(t)$（公式 (2)）的谱中存在一个动态量子相变（dynamical quantum phase transition）。该相变特性可通过一个解析可解的随机矩阵模型捕捉，该模型允许我们计算 $k \geq 1$ 的高阶矩，并与 $\mathcal{C}^{(2k)}$ 中的经典不可处理幂律相关性相一致。

### 计算 $\mathcal{C}^{(4)}$ 时的符号问题（Sign problem in computing $\mathcal{C}^{(4)}$）

在“$\mathrm{OTOC}^{(2)}$ 中的大回路干涉”部分中，我们展示了公式（4）中源于泡利串空间中非成对轨迹的显著独立贡献（见图 3a 中的 $\mathcal{C}_{\text{off-diag}}^{(4)}$），其系数具有随机符号。补充材料 III.C.3 节中我们进一步从理论上说明，这种干涉不是泡利表示的产物，而是 $\mathcal{C}^{(4)}$ 的内在属性。我们针对电路平均的 $\mathcal{C}^{(4)}$ 进行计算，尽管其在经典上相对更容易，但我们通过将 $\mathcal{C}^{(4)}$ 平均与一个四阶对称群（symmetric group of order 4）结构的磁体模型进行映射，从而反映了随机电路集合的普适对称性。数值结果显示该模型中的符号问题严重，因此我们认为，符号问题的严重性是计算 $\mathcal{C}^{(4)}$ 时经典采样算法无法逾越的固有障碍。

### 数据可用性（Data availability）

本研究生成和分析的量子电路与实验数据可通过 Zenodo 获取：https://doi.org/10.5281/zenodo.15640502${ }^{50}$。

> 50. Google Quantum AI. Circuits for the main text of 'Constructive interference at the edge of quantum ergodic dynamics'. Zenodo 10.5281/zenodo.15640502 (2025).

### 代码可用性（Code availability）

用于张量收缩成本估计的源代码在 GitHub 以开源许可形式提供：https://github.com/google-research/tnco

### 附加信息（Additional information）

**补充信息**：在线版本包含补充材料，可访问 https://doi.org/10.1038/s41586-025-09526-6 获取。


