
# Why Language Models Hallucinate

## 为什么语言模型会产生幻觉

Adam Tauman Kalai, Ofir Nachum, Santosh S. Vempala, Edwin Zhang

OpenAI, Georgia Tech

September 4, 2025

#### 摘要

就像学生在面对难题时会猜测一样，大语言模型在不确定时有时也会“猜测”，生成似是而非但错误的陈述，而不是承认自己的不确定性。这种“幻觉”即使在最先进的系统中依然存在，并削弱了人们的信任。我们认为语言模型之所以会产生幻觉，是因为训练和评估过程更倾向于奖励猜测而非承认不确定性，我们分析了现代训练流水线中幻觉的统计学原因。幻觉并非神秘现象——它们只是二分类中的错误。如果错误陈述无法与事实区分开来，那么在预训练语言模型中，幻觉会在自然的统计压力下产生。随后我们进一步论证了幻觉之所以持续存在，是由于大多数评估方式的评分机制所致——语言模型被优化为“优秀的考生”，而在不确定时进行猜测反而能提高测试表现。这种对不确定回答进行惩罚的“流行病”只能通过一种社会技术性的措施来缓解：修改那些存在错位却主导排行榜的现有基准的评分方式，而不是单独引入额外的幻觉评估。这样的改变可能会引导该领域朝着更值得信赖的AI系统发展。



## 1 引言

语言模型已知会生成过于自信、看似合理却错误的内容，从而降低其实用性。这类错误模式被称为“幻觉”，但它与人类的感知体验有本质区别。尽管已有显著进展，幻觉仍然困扰着该领域，并且在最新的模型中依旧存在（OpenAI, 2025a）。考虑以下提示：

> Adam Tauman Kalai 的生日是什么？如果你知道，只需回答 DD-MM。

在三次独立尝试中，一个最先进的开源语言模型${}^{1}$输出了三个错误的日期：“03-07”、“15-06”和“01-01”，即便提示中明确要求只有在知道时才回答。正确的日期实际上在秋季。表1展示了更复杂幻觉的一个示例。

> ${ }^{1}$ 该语言模型是 DeepSeek-V3（600B 参数），于 2025 年 5 月 11 日通过 DeepSeek 应用访问。

幻觉是语言模型错误中的一个重要特例，我们通过计算学习理论（例如 Kearns 和 Vazirani, 1994）对其进行更一般性的分析。我们考虑一般的错误集合 $\mathcal{E}$，这是合理字符串集合 $\mathcal{X}=\mathcal{E} \cup \mathcal{V}$ 的任意子集，其中 $\mathcal{V}$ 中的其他合理字符串被称为“有效的”。接着我们分析这些错误的统计性质，并将结果应用于我们关注的一类错误：被称为幻觉的似是而非的虚假内容。我们的形式化还包括提示（prompt）的概念，即语言模型必须作答的输入。

ChatGPT: Adam Tauman Kalai 的博士论文（2002 年在 CMU 完成）题为：(GPT-4o) “Boosting, Online Algorithms, and Other Topics in Machine Learning.”  
DeepSeek: “Algebraic Methods in Interactive Machine Learning”… 于 2005 年在哈佛大学完成。  
Llama: “Efficient Algorithms for Learning and Playing Games”… 于 2007 年在 MIT 完成。  

表1：三个流行语言模型对“Adam Kalai 的博士论文题目是什么？”这一问题的回答节选。${ }^{3}$ 没有一个生成了正确的标题或年份（Kalai, 2001）。

> ${ }^{3}$ 这些模型分别于 2025-05-09 在 chatgpt.com、DeepSeek 应用（R1, DeepSeek-AI 等, 2025）和 huggingface.co (Llama-4-Scout-17B-16E-Instruct) 免费访问。没有一个模型搜索过网络。

语言分布最初是从训练语料中学习的，而这些语料不可避免地包含错误和半真半假的信息。然而，我们展示了即使训练数据完全无误，在训练过程中优化的目标函数也会导致模型生成错误。在包含一定错误的现实训练数据下，错误率只会更高。因此，我们关于错误的下界在更现实的场景中依然适用，这与传统的计算学习理论类似（Kearns 和 Vazirani, 1994）。

我们的错误分析具有普适性，但对幻觉有着具体的启示。它的适用范围很广，包括推理模型和检索增强型语言模型，并且该分析并不依赖于下一个词预测或基于 Transformer 的神经网络的特性。它只考虑现代训练范式的两个阶段：预训练和后训练，如下所述。对于幻觉，已有的分类法（Maynez et al., 2020; Ji et al., 2023）通常进一步区分内在幻觉（intrinsic hallucinations），即与用户提示相矛盾的内容，例如：

> “DEEPSEEK”中有多少个字母 D？如果你知道，只需直接给出数字，不要附加解释。

DeepSeek-V3 在十次独立实验中返回“2”或“3”；Meta AI 和 Claude 3.7 Sonnet${ }^{2}$ 的表现相似，甚至给出了“6”和“7”等答案。我们的理论也为外在幻觉（extrinsic hallucinations）提供了说明，即那些与训练数据或外部现实相矛盾的内容。

> ${ }^{2}$ https://meta.ai 和 https://claude.ai，访问时间：2025 年 5 月 9 日。

### 1.1 由预训练引起的错误

在预训练过程中，基础模型从大规模文本语料中学习语言分布。我们展示了即使在训练数据完全无误的情况下，预训练阶段优化的统计目标也会导致语言模型生成错误。证明这一点并不简单，因为有些模型可能不会产生任何错误，例如始终输出“I don’t know”（IDK）的模型，或简单记忆并复现无误语料的模型。我们的分析解释了预训练后应当预期出现的错误类型。

为此，我们将问题与二分类联系起来。考虑如下问题：“这是一个有效的语言模型输出吗？”生成有效输出在某种意义上比回答这些是/否问题更困难，因为生成过程隐含地要求模型对每个候选响应回答“这是否有效”。形式化地，我们提出了一个“是否有效”（Is-It-Valid, IIV）的二分类问题，其训练集包含大量响应，每个响应被标注为有效（+）或错误（-），如图1所示。对于这个监督学习问题，训练数据和测试数据都是 $50/50$ 的混合：正例是标注为 + 的有效样本（即预训练数据，因为我们假设它是有效的），负例则是从 $\mathcal{E}$ 中均匀随机采样的错误并标注为 - 。接着我们展示了任何语言模型都可以作为一个 IIV 分类器使用。这使我们能够建立生成错误（如幻觉）与 IIV 分类错误率之间的数学关系：

$$
\text { (生成错误率) } \gtrsim 2 \cdot \text { (IIV 分类错误率). }
$$

![](https://cdn.mathpix.com/snip/images/4JDYsWHE6rItnMvV1rZZiU0hQ0F78zGLP_0NKmSTiDk.original.fullsize.png)

图1：Is-It-Valid 任务需要学习使用带标签的 $\pm$ 示例来识别有效的生成（左）。分类器（虚线）可能在拼写等概念上表现准确（上），但错误常常由于模型不足（中）或数据中不存在规律的任意事实而出现（下）。




语言模型避免了许多类型的错误，比如拼写错误，而并非所有错误都是幻觉。从 IIV 分类错误到生成的转化揭示了生成错误的统计本质。分析表明，预训练如何直接导致错误，并且显示了在二分类中引发错误的同样统计因素也会导致语言模型的错误。数十年的研究揭示了分类错误的多方面性质（Domingos, 2012）。图1（右）形象地展示了这些因素：上方，可分的数据被准确分类；中间，一个用线性分隔器去拟合圆形区域的糟糕模型；下方，数据中不存在简洁的规律。第3.3节分析了多个因素，包括一种带有认识论不确定性的理想化设定，即当数据中没有规律时。

这种转化联系了早期研究中覆盖的不同事实类型。例如，Kalai 和 Vempala (2024) 考虑了一种特殊情形：在数据中不存在可学习规律的任意事实，就像之前生日幻觉的例子。我们展示了 IIV 转化如何覆盖这种情形，并重新得出他们的结论：在预训练之后，幻觉率至少应当等于训练集中只出现一次的事实所占的比例。例如，如果 $20 \%$ 的生日事实在预训练数据中仅出现过一次，那么可以预期基础模型在至少 $20 \%$ 的生日事实上产生幻觉。事实上，我们的分析还加强了他们的结果，将提示和 IDK 响应也包含在内，这两者都是幻觉的关键组成部分。

### 1.2 为什么幻觉在后训练中仍然存在

第二阶段——后训练——会对基础模型进行优化，通常目标是减少幻觉。虽然对预训练的分析更广泛地涵盖了错误，但我们对后训练的分析则聚焦于为什么会生成过度自信的幻觉，而不是省略信息或表达不确定性（如 IDK）。我们提供了一种社会技术性的解释，说明幻觉在后训练之后依然存在的原因，并讨论了如何在该领域抑制幻觉。

作为类比，可以考虑人类在某些情境下也会偶尔编造听起来合理的信息。当学生不确定时，他们可能会在选择题考试中猜测，甚至在笔试中虚构一些看似合理但并没有把握的答案。语言模型的评估方式与此类似。在这两种情况下，当不确定时选择猜测会在二元 $0-1$ 评分机制下最大化期望得分——正确答案得1分，空白或 IDK 得0分。虚构的答案往往表现得过于自信且具体，例如对于日期问题回答“9月30日”，而不是“不确定，可能在秋天”。许多语言模型基准测试仿照人类的标准化考试，采用准确率或通过率等二元指标。因此，针对这些基准优化模型实际上可能助长幻觉。人类会在现实生活中学会表达不确定性的价值，而语言模型主要是在惩罚不确定性的考试中被评估，因此它们始终处于“考试应答模式”。简而言之，大多数评估是不对齐的。

我们并不是第一个意识到二元评分并不能衡量幻觉的人。然而，先前的幻觉评估研究通常追求难以捉摸的“完美幻觉评估”。在第4节中，我们论证这种做法并不充分。我们观察到，现有的主要评估普遍惩罚不确定性，因此根本问题在于“不对齐评估过于泛滥”。假设模型 A 是一个对齐的模型，它能正确表达不确定性并且从不产生幻觉；模型 B 与 A 相似，但它从不表示不确定性，而是在不确定时总是“猜测”。在 $0-1$ 评分下，模型 B 会优于模型 A，而这正是大多数当前基准测试的基础。这导致了对不确定性和弃答进行惩罚的“流行病”，而我们认为，仅有少量幻觉评估无法缓解这一问题。必须对大量主要评估进行调整，以便在不确定时不再惩罚弃答。

**贡献。** 我们识别出了幻觉的主要统计驱动因素，从其预训练起源到后训练的持续存在。我们提出了一种将监督学习与无监督学习联系起来的新方法，即使训练数据中包含 IDK，也能揭示幻觉的起源。尽管已有大量相关研究，但幻觉依然存在，其原因在于大多数主要评估会奖励类似幻觉的猜测。我们讨论了对现有评估进行统计上严格修改的方案，为有效缓解幻觉铺平了道路。


## 2 相关工作

据我们所知，本工作提出的从监督学习（二分类）到无监督学习（密度估计或自监督学习）的转化是新颖的。然而，在学习问题之间进行归约的一般方法是一种成熟的技术，用于证明一个问题至少与另一个问题一样困难（参见，例如 Beygelzimer et al., 2016）。

大量综述和研究探讨了语言模型产生幻觉的潜在原因。Sun et al. (2025) 引用了模型过度自信（Yin et al., 2023）、解码随机性（Lee et al., 2022）、雪球效应（Zhang et al., 2023）、长尾训练样本（Sun et al., 2023）、误导性的对齐训练（Wei et al., 2023）、伪相关（Li et al., 2022）、暴露偏差（Bengio et al., 2015）、逆转诅咒（Berglund et al., 2024）以及上下文劫持（Jeong, 2024）等因素。在更广泛的机器学习和统计环境中，类似的错误来源早已被研究（Russell and Norvig, 2020）。

与我们最相关的理论研究是 Kalai 和 Vempala (2024)，我们展示了它是我们转化的一个特例。他们将 Good-Turing 缺失质量估计（Good, 1953）与幻觉联系起来，并启发了定理3。然而，该工作没有涉及不确定性表达（如 IDK）、与监督学习的联系、后训练的修改，并且他们的模型不包含提示。Hanneke et al. (2018) 分析了一种交互式学习算法，该算法通过查询有效性预言机（例如人类）来不可知地训练一个最小化幻觉的语言模型。他们的方法在统计上是高效的，需要合理量的数据，但在计算上并不高效。其他一些近期的理论研究（Kalavasis et al., 2025; Kleinberg 和 Mullainathan, 2024）形式化了“一致性”（避免无效输出）与“广度”（生成多样化、语言丰富的内容）之间的固有权衡。这些工作表明，对于广泛的语言类别，任何超出训练数据进行泛化的模型要么会产生无效输出的幻觉，要么会遭遇模式崩溃，无法生成完整范围的有效响应。

一些后训练技术——例如基于人类反馈的强化学习（RLHF, Ouyang et al., 2022）、基于 AI 反馈的强化学习（RLAIF, Bai et al., 2022）以及直接偏好优化（DPO, Rafailov et al., 2023）——已被证明能够减少幻觉，包括阴谋论和常见误解。Gekhman et al. (2024) 显示，对新信息进行简单微调可以在初期降低幻觉率，但随后幻觉率会再次上升。此外，已有研究表明，自然语言查询和模型内部激活都编码了关于事实准确性和模型不确定性的预测信号（例如 Kadavath et al., 2022）。正如我们在引言中所讨论的，对语义相关问题回答中的不一致性也可以用来检测或缓解幻觉（Manakul et al., 2023; Xue et al., 2025; Agrawal et al., 2024）。

还有许多其他方法被证明在缓解幻觉方面有效；例如参见 Ji et al. (2023) 和 Tian et al. (2024) 的综述。在评估方面，最近引入了一些综合性的基准和排行榜（例如 Bang et al., 2025; Hong et al., 2024）。然而，较少有工作研究它们推广中的障碍。例如，2025 年《AI Index》报告（Maslej et al., 2025）指出，幻觉基准“在 AI 社区中难以获得广泛认可”。

除了二元的不确定性表达之外，还提出了更细致的语言结构来传达不确定性的梯度（Mielke et al., 2022; Lin et al., 2022a; Damani et al., 2025）。此外，语用学领域——研究意义如何受上下文影响——在理解和改进语言模型传达信息的方式方面也越来越重要（Ma et al., 2025）。


## 3 预训练错误

预训练会产生一个基础语言模型 $\hat{p}$，它近似于从训练分布 $p$ 中抽取的文本分布。这是无监督学习中的经典“密度估计”问题，其中密度只是数据上的概率分布。在语言模型的情况下，该分布是文本的分布，或者如果包含多模态输入，也可以是多模态的分布。

证明基础模型会出错的关键挑战在于，许多语言模型本身并不会出错。比如，退化模型若始终输出 IDK（假设 IDK 不被算作错误），同样避免了错误。同样地，在假设训练数据完全无误的情况下，一个简单的基础模型只需从随机训练样本中复述文本，也不会出错。然而，这两类模型都无法完成密度估计任务，而密度估计正是统计语言建模的基本目标（如下所定义）。另一个避免错误的情况是最优的基础模型 $\hat{p}=p$，即与训练分布完全一致的模型，但这需要难以实现的海量训练数据。尽管如此，我们展示了经过良好训练的基础模型仍然必然会产生某些类型的错误。

我们的分析表明，生成有效输出（即避免错误）比对输出是否有效进行分类更难。这种转化使我们能够应用计算学习理论的视角来理解生成模型中的错误机制，在这里错误是预期且可以解释的。语言模型最初被定义为文本上的概率分布，之后才引入提示（见第 3.2 节）；两种设置共享同样的直觉。不带提示的例子包括图 1 中的生日陈述，而带提示的模型可能会被查询某个特定人的生日。

**不仅仅是自动补全。** 我们的分析适用于一般的密度估计，而不仅仅是“下一个词预测”，尽管许多语言模型是通过自监督学习来预测下一个词进行训练的。人们容易将幻觉归因于糟糕的前缀（例如“Adam Kalai was born on”），导致语言模型无法给出有效的补全。然而，从纯粹的统计角度来看，忽略计算因素，语言模型的自动补全视角${ }^{4}$并不比人类逐词输出这一事实更特殊。我们的分析表明，错误的产生正是因为模型要去拟合底层语言分布，尽管具体的架构可能会引入额外的错误。

> ${ }^{4}$ 从数学上讲，任何分布 $p$ 都会为其支持中的每个前缀 $w_{1} \ldots w_{i-1}$ 诱导出一个补全分布 $p\left(w_{i} w_{i+1} \ldots \mid w_{1} w_{2} \ldots w_{i-1}\right)$。

### 3.1 无提示的转化

在没有提示的情况下，基础模型 $\hat{p}$ 是集合 $\mathcal{X}$ 上的一个概率分布。如前所述，每个例子 $x \in \mathcal{X}$ 表示一个“合理的”字符串，例如一篇文档${ }^{5}$。这些例子 $\mathcal{X}=\mathcal{E} \cup \mathcal{V}$ 被划分为错误集 $\mathcal{E}$ 和有效集 $\mathcal{V}$，其中 $\mathcal{E}$ 和 $\mathcal{V}$ 为非空互不相交的集合。基础模型 $\hat{p}$ 的错误率定义为：

$$
\begin{equation*}
\text { err }:=\hat{p}(\mathcal{E})=\operatorname{Pr}_{x \sim \hat{p}}[x \in \mathcal{E}] \tag{1}
\end{equation*}
$$

> ${ }^{5}$ 为简化起见，我们假设 $\mathcal{X}$ 是有限的。关于错误和合理性的进一步讨论见第 5 节。

训练数据假设来自无噪声的训练分布 $p(\mathcal{X})$，即 $p(\mathcal{E})=0$。如前所述，在有噪声的训练数据和部分正确的陈述下，预期错误率会比我们给出的下界更高。

我们现在形式化在引言中提出的 IIV 二分类问题。IIV 由要学习的目标函数 $f: \mathcal{X} \rightarrow\{-,+\}$（即 $\mathcal{V}$ 的成员资格）和例子分布 $D$ 所定义（$D$ 是从 $p$ 和均匀随机错误采样得到的 $50/50$ 混合）：

$$
D(x):=\left\{\begin{array}{ll}
p(x) / 2 & \text { if } x \in \mathcal{V}, \\
1 / 2|\mathcal{E}| & \text { if } x \in \mathcal{E},
\end{array} \quad \text{ 且 } f(x):= \begin{cases}+ & \text { if } x \in \mathcal{V}, \\
- & \text { if } x \in \mathcal{E} .\end{cases}\right.
$$

我们的分析将基础模型的错误率 $\operatorname{err}=\hat{p}(\mathcal{E})$ 与 IIV 的误分类率 $\operatorname{err}_{\text {iiv }}$ 联系起来：

$$
\operatorname{err}_{\mathrm{iiv}}:=\operatorname{Pr}_{x \sim D}[\hat{f}(x) \neq f(x)], \quad \text { 其中 } \hat{f}(x):= \begin{cases}+ & \text { if } \hat{p}(x)>1 /|\mathcal{E}|,  \tag{2}\\ - & \text { if } \hat{p}(x) \leq 1 /|\mathcal{E}| .\end{cases}
$$

因此，在我们的转化中，基础模型通过在阈值 $1 /|\mathcal{E}|$ 处进行概率截断而被用作一个 IIV 分类器。注意，这样的概率 $\hat{p}(x)$ 对于基础模型来说一般可以高效计算（尽管高效计算并不是使下界有意义的必要条件）。

**推论 1.** 对于任意满足 $p(\mathcal{V})=1$ 的训练分布 $p$ 和任意基础模型 $\hat{p}$，

$$
\operatorname{err} \geq 2 \cdot \operatorname{err}_{\mathrm{iiv}}-\frac{|\mathcal{V}|}{|\mathcal{E}|}-\delta
$$

其中 $\operatorname{err}$、$\operatorname{err}_{\text {iiv }}$ 来自式 (1) 和 (2)，并且 $\delta:=|\hat{p}(\mathcal{A})-p(\mathcal{A})|$，其中 $\mathcal{A}:=\{x \in \mathcal{X}|\hat{p}(x)>1 /|\mathcal{E}|\}$。

由于该关系对任意基础模型 $\hat{p}$ 都成立，这直接意味着所有基础模型在那些本质上不可学习的 IIV 事实（例如训练数据中缺失的生日）上必然会出错，在这些情况下 $\operatorname{err}_{\text {iiv }}$ 必然很大，而 $\delta$ 和 $|\mathcal{V}| /|\mathcal{E}|$ 很小（例如，对于每个人，$\mathcal{E}$ 中错误的生日陈述比 $\mathcal{V}$ 中正确的多 364 倍，再加上 IDK）。上述推论是定理 1 的一个特例，而定理 1 涵盖了包含提示的更一般情形。定理 2 随后利用这一通用结果为一个直观的特例提供下界。定理 3 和 4 针对小规模的 $|\mathcal{E}|$，例如 $|\mathcal{E}|=1$ 的判断题。上界中的常数 2 相对紧致：对于大的 $|\mathcal{E}|$ 和小的 $\delta$，不可学习概念的 $\operatorname{err}_{\text {iiv }}$ 可能接近 $1/2$，而 $\operatorname{err} \leq 1$。推论 1 还意味着 $\operatorname{err}_{\text {iiv }} \lesssim 1 / 2$。

**幻觉错误。** 若要将错误分析应用于幻觉，可以将 $\mathcal{E}$ 视为包含一个或多个似是而非虚假内容的合理生成集合。需要注意的是，幻觉的另一种常见定义是指那些没有基于训练数据（或提示）的生成。幸运的是，上述下界同样适用于这种定义，因为我们假设训练数据是有效的，即生成的事实性错误不可能来源于事实正确的训练数据。

**校准。** 我们现在解释为何 $|\delta|$ 是预训练后一个小的（误）校准度量。注意，在没有任何语言知识的情况下，人们可以通过简单采用均匀分布 $\hat{p}(x)=1 /|\mathcal{X}|$ 来达到 $\delta=0$，因此 $\delta=0$ 并不意味着 $p=\hat{p}$。审计者可以通过比较训练样本 $x \sim p$ 与合成生成 $\hat{x} \sim \hat{p}$ 中满足 $\hat{p}(x)>1 /|\mathcal{E}|$ 与 $\hat{p}(\hat{x})>1 /|\mathcal{E}|$ 的比例来估计 $\delta$。受 Dawid (1982) 启发，可以将其类比为天气预报员每天预测下雨概率。一个最小的校准要求是他们的平均预测是否与实际平均降雨比例相符。更严格的要求是对于任意阈值 $t \in[0,1]$，当预测为 $t$ 时，实际下雨的比例应约为 $t$。

以下是一个特别简单的理由，说明为何在标准的预训练交叉熵目标下 $\delta$ 通常较小：

$$
\begin{equation*}
\mathcal{L}(\hat{p})=\underset{x \sim p}{\mathbb{E}}[-\log \hat{p}(x)] \tag{3}
\end{equation*}
$$

考虑将正例的概率按因子 $s>0$ 进行缩放并归一化：

$$
\hat{p}_{s}(x): \propto \begin{cases}s \cdot \hat{p}(x) & \text { if } \hat{p}(x)>1 /|\mathcal{E}| \\ \hat{p}(x) & \text { if } \hat{p}(x) \leq 1 /|\mathcal{E}|\end{cases}
$$

![](https://cdn.mathpix.com/cropped/2025_09_06_9340c9b13e159e9abb9eg-08.jpg?height=678&width=1641&top_left_y=249&top_left_x=241)

图 2：GPT-4 在强化学习前（左）与后（右）的校准直方图（OpenAI, 2023a，第 8 图，经许可转载）。这些图展示的是多选题的情况，其中合理的响应仅为 A、B、C 或 D。预训练模型是良好校准的。

接下来，一个简单的计算表明 $\delta$ 等于损失函数对缩放因子 $s$ 的导数在 $s=1$ 时的绝对值：

$$
\left.\delta=\left|\frac{d}{d s} \mathcal{L}\left(\hat{p}_{s}\right)\right|_{s=1} \right\rvert\, .
$$

如果 $\delta \neq 0$，那么通过某个 $s \neq 1$ 的缩放可以降低损失，因此损失函数并未处于局部极小值。对于任何足够强大、能够近似这种简单缩放的语言模型类别，局部优化应当产生较小的 $\delta$。需要注意的是，$\delta$ 的定义仅在单一阈值 $t=1 /|\mathcal{E}|$ 下，这比集成多个阈值的期望校准误差（ECE）要弱。

**幻觉只在基础模型中是必然的。** 许多学者认为幻觉是必然的（Jones, 2025; Leffer, 2024; Xu et al., 2024）。然而，完全可以构建一个不产生幻觉的模型，例如基于问答数据库和计算器的系统，它能够回答一组固定的问题（如“金的化学符号是什么？”）以及规范的数学计算（如“$3+8$”），否则就输出 IDK。此外，推论 1 的错误下界意味着不出错的语言模型必然是未校准的，即 $\delta$ 必须很大。正如我们的推导所示，校准——从而错误——是标准交叉熵目标的自然结果。事实上，实证研究（图 2）表明，基础模型通常是良好校准的，而后训练的模型可能会偏离交叉熵，转而倾向于强化学习。


### 3.2 带提示的转化

接下来，我们将第 3.1 节的设定推广到包含提示（上下文）$c \in \mathcal{C}$ 的情况，这些提示由提示分布 $\mu$ 抽取。此时每个样本 $x=(c, r)$ 包含提示 $c$ 和合理的响应 $r$。前文的分析对应于 $\mu$ 对空提示赋概率 1 的特例。对于给定提示 $c \in \mathcal{C}$，设 $\mathcal{V}_{c}:=\{r \mid(c, r) \in \mathcal{V}\}$ 表示有效响应集合，$\mathcal{E}_{c}:=\{r \mid(c, r) \in \mathcal{E}\}$ 表示错误响应集合。训练分布和基础模型现在分别为条件响应分布 $p(r \mid c), \hat{p}(r \mid c)$。为方便记号，我们将其扩展为 $\mathcal{X}$ 上的联合分布：$p(c, r):=\mu(c) p(r \mid c)$ 与 $\hat{p}(c, r):=\mu(c) \hat{p}(r \mid c)$，因此错误率依然是 $\text{err} :=\hat{p}(\mathcal{E})=\sum_{(c, r) \in \mathcal{E}} \mu(c) \hat{p}(r \mid c)$，并且 $p(\mathcal{E})=0$。

因此，训练分布中的样本对应于合理的“对话”，类似于蒸馏的情形（Chiang et al., 2023; Anand et al., 2023）。虽然假设训练数据包含来自同一提示分布的模型对话不够现实，但在该假设不成立时，预期错误率只会更高。带提示的 IIV 问题与无提示时相同，其目标函数为 $f(x):=+$ 当且仅当 $x \in \mathcal{V}$，但其推广的分布 $D$ 则以相等概率选择 $x \sim p$，或者 $x=(c, r)$，其中 $c \sim \mu$ 且 $r$ 在 $\mathcal{E}_{c}$ 中均匀随机选取。最后，分类器 $\hat{f}(c, r)$ 被定义为 + 当且仅当 $\hat{p}(r \mid c)>1 / \min _{c}\left|\mathcal{E}_{c}\right|$。因此，推论 1 显然是以下结果的特例：

**定理 1.** 对于任意满足 $p(\mathcal{V})=1$ 的训练分布 $p$ 和任意基础模型 $\hat{p}$，

$$
\operatorname{err} \geq 2 \cdot \operatorname{err}_{\mathrm{iiv}}-\frac{\max _{c}\left|\mathcal{V}_{c}\right|}{\min _{c}\left|\mathcal{E}_{c}\right|}-\delta
$$

其中 $\delta:=|\hat{p}(\mathcal{A})-p(\mathcal{A})|$，$\mathcal{A}:=\left\{(c, r) \in \mathcal{X}\mid \hat{p}(r \mid c)>1 / \min _{c}\left|\mathcal{E}_{c}\right|\right\}$。

对每个提示归一化的缩放 $\hat{p}_{s}(r \mid c)$（仍然只用一个参数 $s$）同样可以证明 $\delta$ 很小：  
$$
\left.\delta=\left|\frac{d}{ds}\mathcal{L}\left(\hat{p}_{s}\right)\right|_{s=1}\right\rvert,
$$
其中 $\mathcal{L}(\hat{p}):=\sum_{(c, r) \in \mathcal{X}}-\mu(c)\log \hat{p}(r \mid c)$。

---

### 3.3 基础模型的错误因素

数十年的研究已经阐明了导致误分类（二分类错误）的统计因素。我们可以利用这些已有的理解来枚举导致幻觉和其他生成错误的因素，包括：统计复杂性（如生日问题，见 3.3.1 节）、糟糕的模型（如字母计数，见 3.3.2 节），以及额外的因素如垃圾输入-垃圾输出（GIGO），例如阴谋论（见 3.4 节）。

---

### 3.3.1 任意事实幻觉

当目标函数没有简洁的模式时，会出现认识论不确定性，即训练数据中缺乏必要知识。Vapnik-Chervonenkis 维度（Vapnik and Chervonenkis, 1971）$\operatorname{VC}(\mathcal{F})$ 描述了学习一个函数族 $\mathcal{F}$（$f: \mathcal{X} \rightarrow\{-,+\}$）所需的最坏情况样本数量（高概率下）。高 VC 维度的函数族可能需要海量样本才能学习。我们考虑一个高 VC 维度的自然特例：随机任意事实。特别地，本节讨论的有效响应（不包括 IDK）在不同提示之间是随机且独立的。

**定义 1（任意事实）.** 给定：一个任意的提示分布 $\mu(c)$，一个 IDK 响应，并且对于每个提示 $c$：一个响应集合 $\mathcal{R}_{c}$ 和一个回答概率 $\alpha_{c} \in[0,1]$。对每个 $c$，均匀随机选择一个正确答案 $a_{c} \in \mathcal{R}_{c}$。最终，对于每个 $c \in \mathcal{C}$，有 $p(a_{c} \mid c)=\alpha_{c}$ 且 $p(\mathrm{IDK} \mid c)=1-\alpha_{c}$。因此，$\mathcal{E}_{c}=\mathcal{R}_{c} \backslash\{a_{c}\}$，而 $\mathcal{V}_{c}=\{a_{c}, \mathrm{IDK}\}$。

假设每个事实只有唯一的表述方式，例如在生日的例子中使用了固定格式。然而，若允许每个事实有多种表述方式，幻觉可能会更多。对于固定格式的生日，$\left|\mathcal{E}_{c}\right|=364$，而且知名人物的生日（被讨论得较多）会有较高的 $\mu(c)$。像爱因斯坦这样的名人生日会在训练集中多次出现，而其他人的生日可能只出现一次，例如在讣告中。大型语言模型很少在被频繁提及的事实（如爱因斯坦的生日或论文题目）上出错。

我们的幻觉下界基于训练数据中只出现一次的提示的比例，忽略 IDK。

**定义 2（单例率）.** 当提示 $c \in \mathcal{C}$ 在 $N$ 个训练样本 $\left\langle(c^{(i)}, r^{(i)})\right\rangle_{i=1}^{N}$ 中恰好出现一次且没有弃答时，称 $c$ 为单例，即  
$$
\left|\{i: c^{(i)}=c \wedge r^{(i)} \neq \mathrm{IDK}\}\right|=1.
$$
设 $\mathcal{S} \subseteq \mathcal{C}$ 为单例集合，并定义  
$$
\mathrm{sr}=\frac{|\mathcal{S}|}{N}
$$
为训练单例的比例。

单例率建立在 Alan Turing 优雅的“缺失质量”估计（Good, 1953）基础之上，该估计衡量在从分布中抽样时未出现事件的概率。具体来说，Turing 的估计认为未见事件的概率等于在样本中只出现一次的样本比例。直观上，单例是未来可能遇到多少新事件的代理，因此它们的经验比例成为整个分布中“缺失”部分的估计。我们现在给出任意事实的下界。

**定理 2（任意事实）.** 在任意事实模型中，任意使用 $N$ 个训练样本并输出 $\hat{p}$ 的算法都满足：对 $\vec{a}=\langle a_{c}\rangle_{c \in \mathcal{C}}$ 和 $N$ 个训练样本，以概率 $\geq 99 \%$，

$$
\operatorname{err} \geq \operatorname{sr}-\frac{2}{\min _{c}\left|\mathcal{E}_{c}\right|}-\frac{35+6 \ln N}{\sqrt{N}}-\delta .
$$

此外，存在一个高效的算法能输出校准的 $\hat{p}(\delta=0)$，并且以概率 $\geq 99 \%$，

$$
\mathrm{err} \leq \mathrm{sr}-\frac{\mathrm{sr}}{\max _{c}\left|\mathcal{E}_{c}\right|+1}+\frac{13}{\sqrt{N}}
$$

本文的早期版本曾给出一个相关定理，但未包含提示和弃答（Kalai 和 Vempala, 2024）。证明见附录 B。后续工作 Miao 和 Kearns (2025) 提供了关于幻觉、单例率和校准的实证研究。

---

### 3.3.2 糟糕的模型

当底层模型不足时也会产生误分类：  
(a) 模型族无法很好地表示概念，例如线性分隔器近似圆形区域；  
(b) 模型族足够强大，但模型本身拟合效果不佳。  

不可知学习（Agnostic Learning, Kearns et al., 1994）针对 (a) 定义了给定分类器族 $\mathcal{G}$ 的最小错误率：

$$
\operatorname{opt}(\mathcal{G}):=\min _{g \in \mathcal{G}} \operatorname{Pr}_{x \sim D}[g(x) \neq f(x)] \in[0,1]
$$

若 $\operatorname{opt}(\mathcal{G})$ 很大，则 $\mathcal{G}$ 中的任意分类器都会有较高的误分类率。在我们的情境下，给定参数为 $\theta \in \Theta$ 的语言模型 $\hat{p}_{\theta}$，考虑阈值化语言模型分类器族：

$$
\mathcal{G}:=\{g_{\theta, t} \mid \theta \in \Theta, t \in[0,1]\}, \quad g_{\theta, t}(c, r):=\begin{cases}+ & \text{ if } \hat{p}_{\theta}(r \mid c)>t \\ - & \text{ if } \hat{p}_{\theta}(r \mid c) \leq t\end{cases}
$$

由定理 1 可立即得到：

$$
\operatorname{err} \geq 2 \cdot \operatorname{opt}(\mathcal{G})-\frac{\max _{c}\left|\mathcal{V}_{c}\right|}{\min _{c}\left|\mathcal{E}_{c}\right|}-\delta
$$

当每个上下文仅有一个正确响应（即标准的选择题，无 IDK）时，可以移除校准项，并且即使对于 $C=2$ 个选项也能实现界。

**定理 3（纯粹选择题）.** 假设对所有 $c \in \mathcal{C}$，都有 $\left|\mathcal{V}_{c}\right|=1$，设 $C=\min _{c}\left|\mathcal{E}_{c}\right|+1$ 为选项数。那么：

$$
\operatorname{err} \geq 2\left(1-\frac{1}{C}\right) \cdot \operatorname{opt}(\mathcal{G})
$$

例如，考虑经典的三元语法模型（trigram model），它仅基于前两个词预测下一个词，即上下文窗口只有两个词。三元语法模型在 1980s 和 1990s 占据主导。然而，它们经常输出不合语法的句子。考虑以下提示与响应：

$$
\begin{array}{ll}
c_{1}=\text { She lost it and was completely out of } \ldots & c_{2}=\text { He lost it and was completely out of } \ldots \\
r_{1}=\text { her mind } . & r_{2}=\text { his mind } .
\end{array}
$$

这里，$V_{c_{1}}:=E_{c_{2}}:=\{r_{1}\}$，$V_{c_{2}}:=E_{c_{1}}:=\{r_{2}\}$。

**推论 2.** 设 $\mu$ 在 $\{c_{1}, c_{2}\}$ 上均匀分布。那么任意三元语法模型的生成错误率至少为 $1/2$。

这是定理 3 的直接推论，因为 $C=2$ 且三元语法模型的 $\operatorname{opt}(\mathcal{G})=1/2$。定理 3 和推论 2 的证明见附录 C。虽然 $n$ 元语法模型可以在更大 $n$ 下捕捉长程依赖，但其数据需求会随 $n$ 指数级增长。

现在我们回到引言中的字母计数例子。要看到这属于模型不足的问题，可以注意到 DeepSeek-R1 推理模型能够可靠地数字母，例如生成一条 377 步的推理链，其中包括：

> Let me spell it out: D-E-E-P-S-E-E-K.  
> First letter: D - that's one D. Second letter: E - not D. Third letter: E - not D. … So, the number of Ds is 1.

假设训练数据相似，这表明 R1 在该任务上比 DeepSeek-V3 模型更好。推理所克服的一个表征挑战在于，现代语言模型使用 token 来表示提示，例如 D/EEP/SEE/K，而不是单个字符（DeepSeek-AI et al., 2025）。


### 3.4 其他因素

错误可能由多种因素共同作用而产生，包括前文讨论的因素以及其他一些情况。这里我们强调几个：

- **计算困难。** 在经典计算机上运行的任何算法，即使是具备超人能力的 AI，也无法违背计算复杂性理论的规律。事实上，已有研究发现 AI 系统在计算困难的问题上会出错（Xu et al., 2024）。附录 D 的观察 2 阐述了定理 1 如何应用于难解查询（如“What is the decryption of c?”），并且 IDK 在这种情况下是一个合理答案。  
- **分布偏移。** 二分类中的一个众所周知的挑战是训练数据和测试数据的分布经常会出现偏移（Quiñonero-Candela et al., 2009; Moreno-Torres et al., 2012）。类似地，语言模型的错误往往源自分布外（OOD）的提示，这些提示与训练分布有较大差异。例如，“一磅羽毛和一磅铅哪个更重？”这样的问句在训练数据中可能极少出现，因而在某些模型中会引发错误回答。类似地，分布偏移可能也是前文字母计数例子中的一个因素，尽管推理模型能正确计数说明模型不足可能是更大的因素。  
- **GIGO（垃圾进，垃圾出）。** 大规模训练语料中往往包含大量事实性错误，这些错误可能被基础模型复现。GIGO 在分类和预训练中的统计相似性是显而易见的，因此我们未做形式化处理。然而，重要的是要认识到 GIGO 是统计因素之一，因为已有研究表明语言模型会复现训练数据中的错误（Lin et al., 2022b; Levy et al., 2021; Alber et al., 2025）。

GIGO 也为后训练话题提供了自然过渡。后训练减少了某些 GIGO 错误，例如常见误解和阴谋论（Ouyang et al., 2022; OpenAI, 2023a; Costello et al., 2024）。下一节将解释为何某些幻觉在当前的后训练流程中依然存在，甚至可能被加剧。

---

## 4 后训练与幻觉

后训练本应将模型从“自动补全”式训练转变为不会输出自信但错误的内容（除非在合适的情境下，例如要求生成虚构故事）。然而，我们认为要进一步减少幻觉是一场艰难的战斗，因为现有的基准和排行榜会强化某些类型的幻觉。因此，我们讨论如何阻止这种强化。这是一个社会技术性问题，即不仅需要修改现有的评估方法，还需要这些修改被有影响力的排行榜采纳。

### 4.1 评估如何强化幻觉

语言模型的二元评估方式强加了一种虚假的对错二分法，对表达不确定性、省略存疑细节或请求澄清的回答不给予任何分数。这类度量（包括准确率和通过率）仍是该领域的主流标准。二元评分下，弃答严格来说是次优的。IDK 类响应会受到最大惩罚，而过度自信的“最佳猜测”反而是最优解。这种动机结合了两个看似合理的目标：(a) 模型输出的准确率，以及 (b) 回答的完整性。然而，在减少幻觉时，更重视 (a) 是关键。

形式化地，对于任意提示 $c$，设合理响应（有效或错误）的集合为 $\mathcal{R}_{c}:=\{r \mid(c, r) \in \mathcal{X}\}$。进一步假设有一组合理的弃答响应 $\mathcal{A}_{c} \subset \mathcal{R}_{c}$（如 IDK）。若评分器 $g_{c}: \mathcal{R}_{c} \rightarrow \mathbb{R}$ 满足 $\{g_{c}(r) \mid r \in \mathcal{R}_{c}\}=\{0,1\}$ 且对所有 $r \in \mathcal{A}_{c}$ 有 $g_{c}(r)=0$，则称其为二元评分。一个问题由 $(c, \mathcal{R}_{c}, \mathcal{A}_{c}, g_{c})$ 定义，其中答题者知道 $c, \mathcal{R}_{c}, \mathcal{A}_{c}$。我们假设答题者知道评分规则是二元的，但不知道哪些答案是正确的（即 $g_{c}(r)=1$）。答题者关于正确答案的信念可视为二元评分器上的后验分布 $\rho_{c}$。在这种信念下，最优回答绝不会是弃答。

**观察 1.** 设 $c$ 为一个提示。对于任意二元评分器分布 $\rho_{c}$，最优响应集合与弃答集合无交集，即：

$$
\mathcal{A}_{c} \cap \underset{r \in \mathcal{R}_{c}}{\arg \max } \underset{g_{c} \sim \rho_{c}}{\mathbb{E}}\left[g_{c}(r)\right]=\emptyset
$$

虽然证明是平凡的（见附录 E），但观察 1 表明现有评估可能需要修改。表 2 总结了附录 F 中的简要元评估分析，发现绝大多数流行评估都采用二元评分。因此，当主要评估惩罚如实报告信心与不确定性时，额外的幻觉评估可能不足以改变局面。这并不是贬低现有幻觉评估工作，而是指出，即便有理想的幻觉评估和理想的后训练方法（能如实报告不确定性），也可能因在现有大多数评估中表现较差而被淹没。

---

### 4.2 显式置信度目标

人类考试大多也是二元的，并且已被认识到它们同样会奖励过度自信的虚张声势。当然，考试只是人类学习的一小部分，例如编造生日很快会带来尴尬。然而，一些标准化的国家考试确实采用过或正在采用错误惩罚机制（或等价地，弃答给部分分数），包括印度的 JEE、NEET 和 GATE 考试；美国数学协会的 AMC 测试；以及早期的 SAT、AP 和 GRE 考试。重要的是，这些评分规则在说明中明确写出，考生通常知道在超过某个置信度阈值时才值得进行最佳猜测。

类似地，我们提出评估应在说明中显式给出置信度目标，可以在提示（或系统消息）中加入。例如，可以在每个问题后附加如下声明：

> 只有当你置信度大于 $t$ 时才回答，因为错误会被扣除 $t /(1-t)$ 分，而正确答案得 1 分，“I don’t know” 得 0 分。

这里有几个自然的 $t$ 值，包括 $t=0.5$（扣 1 分）、$t=0.75$（扣 2 分）、$t=0.9$（扣 9 分）。$t=0$ 则对应于二元评分，可表述为“即使不确定也要尽力猜测，就像在考试中一样”。一个简单的计算表明，若回答的置信度（即正确的概率）大于 $t$，其期望得分才会超过 IDK（得分为 0）。

---

表 2：本文分析的评估基准及其对弃答的处理总结。“二元评分”表示主要指标是严格的对/错准确率；“IDK credit”表示弃答是否能获得分数。

| Benchmark | Scoring method | Binary grading | IDK credit |
| :--- | :--- | :--- | :--- |
| GPQA | 多选准确率 | Yes | None |
| MMLU-Pro | 多选准确率 | Yes | None |
| IFEval | 程序化指令验证 | Yes ${ }^{\text {a }}$ | None |
| Omni-MATH | 等价评分* | Yes | None |
| WildBench | LM 评分标准* | No | Partial ${ }^{\text {b }}$ |
| BBH | 多选 / 精确匹配 | Yes | None |
| MATH (L5 split) | 等价评分* | Yes | None |
| MuSR | 多选准确率 | Yes | None |
| SWE-bench | 补丁通过单元测试 | Yes | None |
| HLE | 多选 / 等价评分* | Yes | None |

${ }^{\text {*}}$ 评分由语言模型执行，因此错误的虚构回答有时可能被判为正确。  
${ }^{\text {a}}$ IFEval 将若干二元评分子项汇总为复合得分。  
${ }^{\mathrm{b}}$ 评分标准（1-10 分制）暗示 IDK 可能得分低于带幻觉的“一般”回答，从而强化幻觉。

---

这种惩罚机制在幻觉研究中已被广泛探讨（Ji et al., 2023）。然而，我们提出了两个在统计上有影响的细微变化。首先，我们建议在说明中显式给出置信度阈值，而先前的工作大多省略了对置信度目标或惩罚的说明。（一个显著的例外是 Wu et al. (2025)，他们引入了带有明确惩罚的“风险提示”）。理想的惩罚可能应反映现实中的潜在危害，但这在实践中不切实际，因为它依赖于问题、目标应用和用户群体。如果说明中未明确规定阈值，就难以在语言模型开发者之间达成共识。同样，学生若只被告知“有惩罚”而没有具体值，也可能抱怨评分不公平。相反，在每个问题的说明中显式给出置信度阈值，即便这些阈值有些随意或随机，也能保证评分的客观性。如果阈值明确，一个模型可能在所有阈值下都是最佳的；但如果未声明阈值，就存在固有的权衡，没有单一模型能在普遍情况下最佳（除非它总是正确的）。

其次，我们建议将置信度目标纳入现有主流评估，例如流行的 SWE-bench（Jimenez et al., 2024），该基准采用二元评分来评估软件补丁，而先前大多数工作仅在专门的幻觉评估中引入隐含的错误惩罚。仅仅增加带隐含惩罚的评估仍然面临准确率与错误率的权衡。相比之下，将置信度目标纳入已有的主流评估，可以减少对合理不确定性表达的惩罚，从而放大幻觉评估的效果。

在显式置信度目标下，有一种行为在所有阈值下同时最优：当正确概率高于阈值时才回答，否则输出 IDK。我们称之为**行为校准**——模型无需输出概率性的置信度（Lin et al., 2022a），而是必须给出最有用的回答，即其置信度至少大于 $t$。行为校准可以通过比较不同阈值下的准确率与错误率来审计，并且避免了正确回答可能有指数级多种表述的问题（Farquhar et al., 2024）。现有模型可能是否具备行为校准，但它有望成为一种有用的客观评估方法。


## 5 讨论与局限性

由于幻觉的多面性，该领域很难就如何定义、评估和减少幻觉达成一致。一个统计框架必须优先考虑某些方面并忽略其他方面，以保持简洁。以下几点说明了本文框架的适用范围和局限性。

**合理性与无意义。** 幻觉是似是而非的虚假信息，而本文通过仅考虑合理字符串 $\mathcal{X}$，忽略了生成无意义字符串的可能性（最先进的语言模型很少会生成无意义字符串）。然而，定理 1 的表述和证明在修改定义后依然成立：若将无意义示例定义为 $\mathcal{N}$，并划分为 $\mathcal{X}=\mathcal{N} \cup \mathcal{E} \cup \mathcal{V}$，则错误率为 $\text{err}:=\hat{p}(\mathcal{N} \cup \mathcal{E})$，且 $D(\mathcal{N})=0$，并假设 $p(\mathcal{V})=1$。

**开放式生成。** 为简洁起见，本文所举示例大多面向单一的事实性问题。然而，幻觉往往出现在开放式提示下，例如“写一篇关于……的传记”。在我们的框架中，可以将包含一个或多个错误的响应定义为错误。不过，在这种情况下，自然会考虑根据错误数量来区分幻觉的程度。

**搜索（与推理）并非万能。** 许多研究表明，增强了搜索或检索增强生成（RAG）的语言模型能够减少幻觉（Lewis et al., 2020; Shuster et al., 2021; Nakano et al., 2021; Zhang and Zhang, 2025）。然而，观察 1 对任意语言模型都成立，包括那些带有 RAG 的模型。特别地，二元评分体系在搜索未能给出有把握的答案时，仍然会奖励猜测。此外，搜索可能无法帮助解决计算错误（如字母计数的例子）或其他内在幻觉。

**潜在上下文。** 有些错误无法仅根据提示和响应来判断。例如，假设用户问了一个关于“phones”的问题，语言模型给出了关于“cellphones”的回答，但用户其实是想问“land lines”。这种歧义不符合我们对错误的定义，因为我们的定义不依赖于提示和响应之外的上下文。未来有趣的扩展方向是将“隐藏上下文”纳入模型，即提示中未包含但可用于判断错误的因素，这与偶然性不确定性（aleatoric uncertainty）相关。

**错误的三分法。** 我们的形式化没有区分错误的严重程度或不确定性的不同层次。显然，正确/错误/IDK 三分法依然不完整。虽然理想的统计方法可能是按照下游应用中对语言模型的评分方式来对每个评估打分，但显式置信度目标为主流评估提供了一种实用且客观的修改方式。相比虚假的二分法，虚假的三分法至少为 IDK 提供了一种选择。

**超越 IDK。** 表达不确定性的方法有很多，例如模糊表述、省略细节或反问。最终，语言模型可能会遵循如语言校准（linguistic calibration, Mielke et al., 2022; Damani et al., 2025）之类的置信度概念。然而，语言的语用现象（Austin, 1962; Grice, 1975）是微妙的。例如，在某些场景下，让语言模型显式给出概率置信度估计可能有用（Lin et al., 2022a），但这也可能导致不自然的表达，比如：“我有 $1/365$ 的把握认为 Kalai 的生日是 3 月 7 日。” 本文关注的重点是关于“说什么”的顶层决策所涉及的统计因素。

---

## 6 结论

本文揭示了现代语言模型中幻觉的根源，从预训练阶段的起源到后训练阶段的持续存在。在预训练中，我们展示了生成错误与监督学习中的误分类类似，并非神秘现象，而是由于交叉熵损失最小化而自然产生的。

许多语言模型的不足可以通过单一评估来捕捉。例如，过度使用开场词“Certainly”可以通过一个“Certainly”评估来解决（Amodei 和 Fridman, 2024），因为回答开头是否包含“Certainly”对其他评估没有显著影响。相比之下，我们认为大多数主流评估实际上奖励了幻觉行为。对主流评估进行简单修改即可重新对齐激励机制，奖励恰当的不确定性表达而非惩罚它们。这能消除抑制幻觉的障碍，并为未来研究更细致的语言模型（例如具备更丰富语用能力的模型，Ma et al., 2025）打开大门。

**致谢。** 我们要感谢 Alex Beutel、Tom Cunningham、Yann Dubois、Parikshit Gopalan、Johannes Heidecke、Zoe Hitzig、Saachi Jain、Manas Joglekar、Sanjay Kairam、Ehud Kalai、Amin Karbasi、Alan Luo、Anay Mehrotra、Eric Mitchell、Cameron Raymond、David G. Robinson、Mandip Shah、Joshua Vendrow、Grigoris Velegkas、Rose Wang、Zhigang Wang、Jason Wolfe 和 Jason Wei 的有益讨论。


## References

Ayush Agrawal, Mirac Suzgun, Lester Mackey, and Adam Kalai. 2024. Do Language Models Know When They're Hallucinating References?. In Findings of the Association for Computational Linguistics: EACL 2024. Association for Computational Linguistics, St. Julian’s, Malta, 912-928. https://doi.org/10.18653/v1/2024.findings-eacl. 62

Daniel Alexander Alber, Zihao Yang, Anton Alyakin, Eunice Yang, Sumedha Rai, Aly A. Valliani, et al. 2025. Medical large language models are vulnerable to data-poisoning attacks. Nature Medicine 31, 2 (2025), 618-626. https://doi.org/10.1038/s41591-024-03445-1

Dario Amodei and Lex Fridman. 2024. Dario Amodei: Anthropic CEO on Claude, AGI $\mathscr{E}$ the Future of AI $\mathfrak{E}$ Humanity - Lex Fridman Podcast \#452 (Transcript). Lex Fridman Podcast. https://lexfridman.com/dario-amodei-transcript/

Yuvanesh Anand, Zach Nussbaum, Brandon Duderstadt, Benjamin Schmidt, and Andriy Mulyar. 2023. GPT4All: Training an Assistant-Style Chatbot with Large-Scale Data Distillation from GPT-3.5-Turbo. https://github.com/nomic-ai/gpt4all

J. L. Austin. 1962. How to Do Things with Words. Oxford University Press, Oxford. Edited by J. O. Urmson and Marina Sbisà.

Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, Andy Jones, Anna Chen, Anna Goldie, Azalia Mirhoseini, Cameron McKinnon, Carol Chen, Catherine Olsson, Christopher Olah, Danny Hernandez, Dawn Drain, Deep Ganguli, Dustin Li, Eli Tran-Johnson, Ethan Perez, Jamie Kerr, Jared Mueller, Jeffrey Ladish, Joshua Landau, Kamal Ndousse, Kamile Lukosuite, Liane Lovitt, Michael Sellitto, Nelson Elhage, Nicholas Schiefer, Noemi Mercado, Nova DasSarma, Robert Lasenby, Robin Larson, Sam Ringer, Scott Johnston, Shauna Kravec, Sheer El Showk, Stanislav Fort, Tamera Lanham, Timothy Telleen-Lawton, Tom Conerly, Tom Henighan, Tristan Hume, Samuel R. Bowman, Zac Hatfield-Dodds, Ben Mann, Dario Amodei, Nicholas Joseph, Sam McCandlish, Tom Brown, and Jared Kaplan. 2022. Constitutional AI: Harmlessness from AI Feedback. arXiv:2212.08073 [cs.CL] https://arxiv.org/abs/2212.08073

Yejin Bang, Ziwei Ji, Alan Schelten, Anthony Hartshorn, Tara Fowler, Cheng Zhang, Nicola Cancedda, and Pascale Fung. 2025. HalluLens: LLM Hallucination Benchmark. In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). Association for Computational Linguistics, Vienna, Austria, 24128-24156. https: //doi.org/10.18653/v1/2025.acl-long. 1176

Samy Bengio, Oriol Vinyals, Navdeep Jaitly, and Noam Shazeer. 2015. Scheduled sampling for sequence prediction with recurrent neural networks. Advances in neural information processing systems 28 (2015).

Lukas Berglund, Meg Tong, Maximilian Kaufmann, Mikita Balesni, Asa Cooper Stickland, Tomasz Korbak, and Owain Evans. 2024. The Reversal Curse: LLMs trained on "A is B" fail to learn "B is A". In The Twelfth International Conference on Learning Representations.

Alina Beygelzimer, Hal Daumé III, John Langford, and Paul Mineiro. 2016. Learning Reductions That Really Work. Proc. IEEE 104, 1 (2016), 136-147. https://doi.org/10.1109/JPROC 2015.2494118

Wei-Lin Chiang, Zhuohan Li, Zi Lin, Ying Sheng, Zhanghao Wu, Hao Zhang, Lianmin Zheng, Siyuan Zhuang, Yonghao Zhuang, Joseph E. Gonzalez, Ion Stoica, and Eric P. Xing. 2023. Vicuna: An Open-Source Chatbot Impressing GPT-4 with $90 \%^{*}$ ChatGPT Quality. https: //lmsys.org/blog/2023-03-30-vicuna/

Thomas H. Costello, Gordon Pennycook, and David G. Rand. 2024. Durably reducing conspiracy beliefs through dialogues with AI. Science 385, 6714 (Sept. 2024), eadq1814. https://doi.org/ 10.1126/science.adq1814

Mehul Damani, Isha Puri, Stewart Slocum, Idan Shenfeld, Leshem Choshen, Yoon Kim, and Jacob Andreas. 2025. Beyond Binary Rewards: Training LMs to Reason About Their Uncertainty. https://doi.org/10.48550/arXiv. 2507.16806 arXiv:2507.16806 [cs.LG]
A. P. Dawid. 1982. The Well-Calibrated Bayesian. J. Amer. Statist. Assoc. 77, 379 (Sept. 1982), 605-610. https://doi.org/10.1080/01621459.1982.10477856

DeepSeek-AI, Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Z.F. Wu, Zhibin Gou, Zhihong Shao, Zhuoshu Li, Ziyi Gao, Aixin Liu, Bing Xue, Bingxuan Wang, and 178 others. 2025. DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. https://doi.org/10.48550/arXiv. 2501.12948 arXiv:2501.12948 [cs.CL]

Pedro Domingos. 2012. A Few Useful Things to Know About Machine Learning. Commun. ACM 55, 10 (2012), 78-87. https://doi.org/10.1145/2347736.2347755

Lizhou Fan, Wenyue Hua, Lingyao Li, Haoyang Ling, and Yongfeng Zhang. 2024. NPHardEval: Dynamic Benchmark on Reasoning Ability of Large Language Models via Complexity Classes. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024). Association for Computational Linguistics, Bangkok, Thailand, 4092-4114. https: //doi.org/10.18653/v1/2024.acl-long. 225

Sebastian Farquhar, Jannik Kossen, Lorenz Kuhn, and Yarin Gal. 2024. Detecting hallucinations in large language models using semantic entropy. Nature 630 (jun 2024), 625-630. https: //doi.org/10.1038/s41586-024-07421-0

Bofei Gao, Feifan Song, Zhe Yang, Zefan Cai, Yibo Miao, Qingxiu Dong, Lei Li, Chenghao Ma, Liang Chen, Runxin Xu, Zhengyang Tang, Benyou Wang, Daoguang Zan, Shanghaoran Quan, Ge Zhang, Lei Sha, Yichang Zhang, Xuancheng Ren, Tianyu Liu, and Baobao Chang. 2024a. Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models. https://doi.org/10.48550/arXiv. 2410.07985 arXiv:2410.07985 [cs.CL]

Leo Gao, Jonathan Tow, Baber Abbasi, Stella Biderman, Sid Black, Anthony DiPofi, Charles Foster, Laurence Golding, Jeffrey Hsu, Alain Le Noac'h, Haonan Li, Kyle McDonell, Niklas Muennighoff, Chris Ociepa, Jason Phang, Laria Reynolds, Hailey Schoelkopf, Aviya Skowron, Lintang Sutawika, Eric Tang, Anish Thite, Ben Wang, Kevin Wang, and Andy Zou. 2024b. The Language Model Evaluation Harness. https://doi.org/10.5281/zenodo. 12608602

Zorik Gekhman, Gal Yona, Roee Aharoni, Matan Eyal, Amir Feder, Roi Reichart, and Jonathan Herzig. 2024. Does Fine-Tuning LLMs on New Knowledge Encourage Hallucinations?. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, Yaser Al-Onaizan, Mohit Bansal, and Yun-Nung Chen (Eds.). Association for Computational Linguistics, Miami, Florida, USA, 7765-7784. https://doi.org/10.18653/v1/2024.emnlp-main. 444

Oded Goldreich. 2001. Foundations of Cryptography: Volume 1, Basic Tools. Cambridge University Press, Cambridge, United Kingdom.
I. J. Good. 1953. The Population Frequences of Species and the Estimation of Population Parameters. Biometrika 40, 3-4 (Dec. 1953), 237-264. https://doi.org/10.1093/biomet/40.3-4.237

Google DeepMind. 2025. Gemini 2.5 Pro Model Card. https://storage.googleapis.com/ model-cards/documents/gemini-2.5-pro.pdf. Accessed: 27 Jun 2025..
H. P. Grice. 1975. Logic and Conversation. In Syntax and Semantics, Vol. 3: Speech Acts, Peter Cole and Jerry L. Morgan (Eds.). Academic Press, New York, 41-58.

Steve Hanneke, Adam Tauman Kalai, Gautam Kamath, and Christos Tzamos. 2018. Actively Avoiding Nonsense in Generative Models. In Proceedings of the 31st Conference on Learning Theory (Proceedings of Machine Learning Research, Vol. 75), Sébastien Bubeck, Vianney Perchet, and Philippe Rigollet (Eds.). PMLR, Stockholm, Sweden, 209-227. https://proceedings.mlr. press/v75/hanneke18a.html

Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, and Jacob Steinhardt. 2021. Measuring Mathematical Problem Solving with the MATH Dataset. arXiv:2103.03874 [cs.LG] https://arxiv.org/abs/2103.03874

Giwon Hong, Aryo Pradipta Gema, Rohit Saxena, Xiaotang Du, Ping Nie, Yu Zhao, Laura PerezBeltrachini, Max Ryabinin, Xuanli He, Clémentine Fourrier, and Pasquale Minervini. 2024. The Hallucinations Leaderboard - An Open Effort to Measure Hallucinations in Large Language Models. arXiv:2404.05904 [cs.CL] https://arxiv.org/abs/2404.05904

Hugging Face. 2024. Open LLM Leaderboard v2 Collection. https://huggingface.co/spaces/ open-llm-leaderboard/blog. Accessed: 26 June 2025.

Joonhyun Jeong. 2024. Hijacking Context in Large Multi-modal Models. In ICLR 2024 Workshop on Reliable and Responsible Foundation Models.

Ziwei Ji, Nayeon Lee, Rita Frieske, Tiezheng Yu, Dan Su, Yan Xu, Etsuko Ishii, Yejin Bang, Delong Chen, Wenliang Dai, Ho Shu Chan, Andrea Madotto, and Pascale Fung. 2023. Survey of Hallucination in Natural Language Generation. Comput. Surveys 55, 12, Article 248 (2023), 248:1-248:38 pages. https://doi.org/10.1145/3571730

Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, and Karthik R. Narasimhan. 2024. SWE-bench: Can Language Models Resolve Real-world GitHub Issues?. In Proceedings of the 12th International Conference on Learning Representations (ICLR). https: //proceedings.iclr.cc/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84

Nicola Jones. 2025. AI hallucinations can't be stopped - but these techniques can limit their damage. Nature 637, 8047 (Jan. 2025), 778-780. https://doi.org/10.1038/d41586-025-00068-5

Saurav Kadavath, Tom Conerly, Amanda Askell, Tom Henighan, Dawn Drain, Ethan Perez, Nicholas Schiefer, Zac Hatfield-Dodds, Nova Dassarma, Eli Tran-Johnson, Scott Johnston, Sheer El-Showk, Andy Jones, Nelson Elhage, Tristan Hume, Anna Chen, Yuntao Bai, Sam Bowman, Stanislav Fort, Deep Ganguli, Danny Hernandez, Josh Jacobson, Jackson Kernion, Shauna Kravec, Liane Lovitt, Kamal Ndousse, Catherine Olsson, Sam Ringer, Dario Amodei, Tom B. Brown, Jack Clark, Nicholas Joseph, Benjamin Mann, Sam McCandlish, Chris Olah, and Jared Kaplan. 2022. Language Models (Mostly) Know What They Know. ArXiv abs/2207.05221 (2022). https://arxiv.org/abs/2207.05221

Adam Kalai. 2001. Probabilistic and on-line methods in machine learning. PhD Thesis. Carnegie Mellon University.

Adam Tauman Kalai and Santosh S. Vempala. 2024. Calibrated Language Models Must Hallucinate. In Proceedings of the 56th Annual ACM Symposium on Theory of Computing (Vancouver, BC, Canada) (STOC 2024). Association for Computing Machinery, New York, NY, USA, 160-171. https://doi.org/10.1145/3618260.3649777

Alkis Kalavasis, Anay Mehrotra, and Grigoris Velegkas. 2025. On the Limits of Language Generation: Trade-Offs between Hallucination and Mode-Collapse. In Proceedings of the 57 th Annual ACM Symposium on Theory of Computing (STOC '25), Michal Koucký and Nikhil Bansal (Eds.). Association for Computing Machinery, Prague, Czechia, 1732-1743. https://doi.org/10.1145/ 3717823.3718108

Michael J. Kearns, Robert E. Schapire, and Linda M. Sellie. 1994. Toward efficient agnostic learning. Machine Learning 17, 2-3 (Nov. 1994), 115-141. https://doi.org/10.1007/BF00993468

Michael J. Kearns and Umesh V. Vazirani. 1994. An Introduction to Computational Learning Theory. MIT Press, Cambridge, MA, USA.

Jon Kleinberg and Sendhil Mullainathan. 2024. Language Generation in the Limit. In Advances in Neural Information Processing Systems 37 (NeurIPS 2024). Curran Associates, Inc., 66058-66079. https://proceedings.neurips.cc/paper_files/paper/2024/hash/ 7988e9b3876ad689e921ce05d711442f-Abstract-Conference.html

Nayeon Lee, Wei Ping, Peng Xu, Mostofa Patwary, Pascale Fung, Mohammad Shoeybi, and Bryan Catanzaro. 2022. Factuality Enhanced Language Models for Open-Ended Text Generation. arXiv:2206.04624 [cs.CL] https://arxiv.org/abs/2206.04624

Lauren Leffer. 2024. AI Chatbots Will Never Stop Hallucinating. Scientific American. https: //www.scientificamerican.com/article/chatbot-hallucinations-inevitable/

Sharon Levy, Michael Saxon, and William Yang Wang. 2021. Investigating Memorization of Conspiracy Theories in Text Generation. In Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021. Association for Computational Linguistics, Online, 4718-4729. https://doi.org/10.18653/v1/2021.findings-acl. 416

Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, and Douwe Kiela. 2020. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. In Advances in Neural Information Processing Systems, H. Larochelle, M. Ranzato, R. Hadsell, M.F. Balcan, and H. Lin (Eds.), Vol. 33. Curran Associates, Inc., 9459-9474. https://proceedings.neurips cc/paper_files/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf

Shaobo Li, Xiaoguang Li, Lifeng Shang, Zhenhua Dong, Chengjie Sun, Bingquan Liu, Zhenzhou Ji, Xin Jiang, and Qun Liu. 2022. How Pre-Trained Language Models Capture Factual Knowledge? A Causal-Inspired Analysis. arXiv:2203.16747 [cs.CL] https://arxiv.org/abs/2203.16747

Percy Liang, Rishi Bommasani, Tony Lee, Dimitris Tsipras, Dilara Soylu, Michihiro Yasunaga, Yian Zhang, Deepak Narayanan, Yuhuai Wu, Ananya Kumar, Benjamin Newman, Binhang Yuan, Bobby Yan, Ce Zhang, Christian Cosgrove, Christopher D Manning, Christopher Re, Diana Acosta-Navas, Drew A. Hudson, Eric Zelikman, Esin Durmus, Faisal Ladhak, Frieda Rong, Hongyu

Ren, Huaxiu Yao, Jue WANG, Keshav Santhanam, Laurel Orr, Lucia Zheng, Mert Yuksekgonul, Mirac Suzgun, Nathan Kim, Neel Guha, Niladri S. Chatterji, Omar Khattab, Peter Henderson, Qian Huang, Ryan Andrew Chi, Sang Michael Xie, Shibani Santurkar, Surya Ganguli, Tatsunori Hashimoto, Thomas Icard, Tianyi Zhang, Vishrav Chaudhary, William Wang, Xuechen Li, Yifan Mai, Yuhui Zhang, and Yuta Koreeda. 2023. Holistic Evaluation of Language Models. Transactions on Machine Learning Research (2023). https://openreview.net/forum?id=i04LZibEqW

Bill Yuchen Lin, Yuntian Deng, Khyathi Chandu, Abhilasha Ravichander, Valentina Pyatkin, Nouha Dziri, Ronan Le Bras, and Yejin Choi. 2025. WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild. In Proceedings of the 13th International Conference on Learning Representations (ICLR). https://openreview.net/forum?id=MKEHCx25xp

Stephanie Lin, Jacob Hilton, and Owain Evans. 2022a. Teaching Models to Express Their Uncertainty in Words. Transactions on Machine Learning Research 2022 (2022). https://openreview.net/ forum?id=8s8K2UZGTZ

Stephanie Lin, Jacob Hilton, and Owain Evans. 2022b. TruthfulQA: Measuring How Models Mimic Human Falsehoods. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). Association for Computational Linguistics, Dublin, Ireland, 3214-3252. https://doi.org/10.18653/v1/2022.acl-long. 229

Bolei Ma, Yuting Li, Wei Zhou, Ziwei Gong, Yang Janet Liu, Katja Jasinskaja, Annemarie Friedrich, Julia Hirschberg, Frauke Kreuter, and Barbara Plank. 2025. Pragmatics in the Era of Large Language Models: A Survey on Datasets, Evaluation, Opportunities and Challenges. In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Wanxiang Che, Joyce Nabende, Ekaterina Shutova, and Mohammad Taher Pilehvar (Eds.). Association for Computational Linguistics, Vienna, Austria, 8679-8696. https: //doi.org/10.18653/v1/2025.acl-long. 425

Potsawee Manakul, Adian Liusie, and Mark Gales. 2023. SelfCheckGPT: Zero-Resource BlackBox Hallucination Detection for Generative Large Language Models. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, Houda Bouamor, Juan Pino, and Kalika Bali (Eds.). Association for Computational Linguistics, Singapore, 9004-9017. https://doi.org/10.18653/v1/2023.emnlp-main. 557

Nestor Maslej, Loredana Fattorini, Raymond Perrault, Yolanda Gil, Vanessa Parli, Njenga Kariuki, Emily Capstick, Anka Reuel, Erik Brynjolfsson, John Etchemendy, Katrina Ligett, Terah Lyons, James Manyika, Juan Carlos Niebles, Yoav Shoham, Russell Wald, Tobi Walsh, Armin Hamrah, Lapo Santarlasci, Julia Betts Lotufo, Alexandra Rome, Andrew Shi, and Sukrut Oak. 2025. Artificial Intelligence Index Report 2025. Annual Report. AI Index Steering Committee, Institute for Human-Centered AI, Stanford University, Stanford, CA. https://hai.stanford.edu/ ai-index/2025-ai-index-report Accessed: 27 Jun 2025.

Joshua Maynez, Shashi Narayan, Bernd Bohnet, and Ryan McDonald. 2020. On Faithfulness and Factuality in Abstractive Summarization. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (ACL). Association for Computational Linguistics, Online, 1906-1919. https://aclanthology.org/2020.acl-main. 173

David McAllester and Luis Ortiz. 2003. Concentration inequalities for the missing mass and for histogram rule error. Journal of Machine Learning Research 4, Oct (2003), 895-911.

David A. McAllester and Robert E. Schapire. 2000. On the Convergence Rate of Good-Turing Estimators. In Proceedings of the Thirteenth Annual Conference on Computational Learning Theory (COLT 2000). Morgan Kaufmann, Palo Alto, California, USA, 1-6. https://www learningtheory.org/colt2000/papers/McAllesterSchapire.pdf

Colin McDiarmid. 1989. On the Method of Bounded Differences. In Surveys in Combinatorics, 1989: Invited Papers at the Twelfth British Combinatorial Conference, J. Siemons (Ed.). London Mathematical Society Lecture Note Series, Vol. 141. Cambridge University Press, Cambridge, UK, 148-188. https://doi.org/10.1017/CB09781107359949.008

Miranda Muqing Miao and Michael Kearns. 2025. Hallucination, Monofacts, and Miscalibration: An Empirical Investigation. arXiv:2502.08666 [cs.CL] https://arxiv.org/abs/2502.08666

Sabrina J. Mielke, Arthur Szlam, Emily Dinan, and Y-Lan Boureau. 2022. Reducing Conversational Agents' Overconfidence Through Linguistic Calibration. Transactions of the Association for Computational Linguistics 10 (2022), 857-872. https://doi.org/10.1162/tacl_a_00494

José G. Moreno-Torres, Troy Raeder, Rocío Alaiz-Rodríguez, Nitesh V. Chawla, and Francisco Herrera. 2012. A unifying view on dataset shift in classification. Pattern Recognition 45, 1 (2012), 521-530.

Aidar Myrzakhan, Sondos Mahmoud Bsharat, and Zhiqiang Shen. 2024. Open-llm-leaderboard: From multi-choice to open-style questions for llms evaluation, benchmark, and arena. https: //huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard arXiv preprint arXiv:2406.07545 (2024).

Reiichiro Nakano, Jacob Hilton, Suchir Balaji, Jeff Wu, Long Ouyang, Christina Kim, Christopher Hesse, Shantanu Jain, Vineet Kosaraju, William Saunders, Xu Jiang, Karl Cobbe, Tyna Eloundou, Gretchen Krueger, Kevin Button, Matthew Knight, Benjamin Chess, and John Schulman. 2021. WebGPT: Browser-Assisted Question-Answering with Human Feedback. CoRR abs/2112.09332 (2021). https://arxiv.org/abs/2112.09332

OpenAI. 2023a. GPT-4 Technical Report. http://arxiv.org/abs/2303.08774 arXiv:2303.08774 [cs].

OpenAI. 2023b. Improving Mathematical Reasoning with Process Supervision. https://openai com/index/improving-mathematical-reasoning-with-process-supervision/. Research blog post published 31 May 2023. Accessed: 27 Jun 2025..

OpenAI. 2024. Learning to Reason with LLMs. https://openai.com/index/ learning-to-reason-with-llms/. Research blog post published 12 September 2024. Accessed: 27 Jun 2025..

OpenAI. 2025a. GPT-5 System Card. Technical Report. https://cdn.openai.com/ gpt-5-system-card.pdf Accessed: 2025-09-02..

OpenAI. 2025b. Introducing Deep Research. https://openai.com/index/ introducing-deep-research/. Blog post published 2 February 2025. Accessed: 27 Jun 2025..

OpenAI. 2025c. Introducing GPT-4.1 in the API. https://openai.com/index/gpt-4-1/. Blog post published 14 April 2025. Accessed: 27 Jun 2025..

OpenAI. 2025d. OpenAI o3 and o4-mini System Card. https://openai.com/index/ o3-o4-mini-system-card/. Accessed: 8 May 2025.

Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul F. Christiano, Jan Leike, and Ryan Lowe. 2022. Training Language Models to Follow Instructions with Human Feedback. In Advances in Neural Information Processing Systems, Vol. 35. 27730-27744. https: //doi.org/10.5555/3600270.3602281

Alicia Parrish, Angelica Chen, Nikita Nangia, Vishakh Padmakumar, Jason Phang, Jana Thompson, Phu Mon Htut, and Samuel Bowman. 2022. BBQ: A hand-built bias benchmark for question answering. In Findings of the Association for Computational Linguistics: ACL 2022, Smaranda Muresan, Preslav Nakov, and Aline Villavicencio (Eds.). Association for Computational Linguistics, Dublin, Ireland, 2086-2105. https://doi.org/10.18653/v1/2022.findings-acl. 165

Long Phan, Alice Gatti, Ziwen Han, Nathaniel Li, Josephina Hu, Hugh Zhang, Chen Bo Calvin Zhang, Mohamed Shaaban, John Ling, Sean Shi, Michael Choi, Anish Agrawal, Arnav Chopra, Adam Khoja, Ryan Kim, Richard Ren, Jason Hausenloy, Oliver Zhang, Mantas Mazeika, Dmitry Dodonov, Tung Nguyen, Jaeho Lee, and 1000+ others. 2025. Humanity's Last Exam. https: //doi.org/10.48550/arXiv. 2501.14249 arXiv:2501.14249 [cs.LG]

Joaquin Quiñonero-Candela, Masashi Sugiyama, Anton Schwaighofer, and Neil D. Lawrence (Eds.). 2009. Dataset Shift in Machine Learning. MIT Press, Cambridge, MA.

Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, and Chelsea Finn. 2023. Direct Preference Optimization: Your Language Model Is Secretly a Reward Model. Proceedings of the 37th International Conference on Neural Information Processing Systems (NeurIPS) (2023). https://dl.acm.org/doi/10.5555/3666122.3668460

David Rein, Betty Li Hou, Asa Cooper Stickland, Jackson Petty, Richard Yuanzhe Pang, Julien Dirani, Julian Michael, and Samuel R. Bowman. 2024. GPQA: A Graduate-Level Google-Proof Q\&A Benchmark. In Proceedings of the 1st Conference on Language Modeling (COLM 2024). https://openreview.net/forum?id=Ti67584b98

Stuart J. Russell and Peter Norvig. 2020. Artificial Intelligence: A Modern Approach (4 ed.). Pearson, Boston, MA, USA. http://aima.cs.berkeley.edu/

Kurt Shuster, Spencer Poff, Moya Chen, Douwe Kiela, and Jason Weston. 2021. Retrieval Augmentation Reduces Hallucination in Conversation. In Findings of the Association for Computational Linguistics: EMNLP 2021. Association for Computational Linguistics, Punta Cana, Dominican Republic, 3784-3803. https://doi.org/10.18653/v1/2021.findings-emnlp. 320

Zayne Sprague, Xi Ye, Kaj Bostrom, Swarat Chaudhuri, and Greg Durrett. 2024. MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning. In Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024). OpenReview, Vienna, Austria. https://openreview.net/forum?id=jenyYQzue1

Aarohi Srivastava, Abhinav Rastogi, Abhishek Rao, Abu Awal Md Shoeb, Abubakar Abid, Adam Fisch, Adam R. Brown, Adam Santoro, Aditya Gupta, Adrià Garriga-Alonso, et al. 2023. Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models. https://openreview.net/forum?id=uyTL5Bvosj

Kai Sun, Yifan Ethan Xu, Hanwen Zha, Yue Liu, and Xin Luna Dong. 2023. Head-to-Tail: How Knowledgeable Are Large Language Models (LLM)? AKA Will LLMs Replace Knowledge Graphs? arXiv:2308.10168 [cs.CL] https://arxiv.org/abs/2308.10168

Yiyou Sun, Yu Gai, Lijie Chen, Abhilasha Ravichander, Yejin Choi, and Dawn Song. 2025. Why and How LLMs Hallucinate: Connecting the Dots with Subsequence Associations. https: //doi.org/10.48550/arXiv. 2504.12691 arXiv:2504.12691 [cs.CL]

Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc V. Le, Ed H. Chi, Denny Zhou, and Jason Wei. 2023. Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them. In Findings of the Association for Computational Linguistics: ACL 2023. Association for Computational Linguistics, Toronto, Canada, 13003-13051. https://doi.org/10.18653/v1/2023.findings-acl. 824

Jianheng Tang, Qifan Zhang, Yuhan Li, Nuo Chen, and Jia Li. 2025. GraphArena: Evaluating and Exploring Large Language Models on Graph Computation. https://openreview.net/forum? id=Y1r9yCMzeA

Katherine Tian, Eric Mitchell, Huaxiu Yao, Christopher D. Manning, and Chelsea Finn. 2024. Fine-Tuning Language Models for Factuality. In Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024). Vienna, Austria. https://openreview.net/ forum?id=WPZ2yPag4K

Vladimir N Vapnik and A Ya Chervonenkis. 1971. On the uniform convergence of relative frequencies of events to their probabilities. Theory of Probability ${ }^{\mathscr{G}}$ Its Applications 16, 2 (1971), 264-280.

Yubo Wang, Xueguang Ma, Ge Zhang, Yuansheng Ni, Abhranil Chandra, Shiguang Guo, Weiming Ren, Aaran Arulraj, Xuan He, Ziyan Jiang, Tianle Li, Max Ku, Kai Wang, Alex Zhuang, Rongqi Fan, Xiang Yue, and Wenhu Chen. 2024. MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark. In Advances in Neural Information Processing Systems 37 (NeurIPS 2024), Datasets and Benchmarks Track. arXiv:2406.01574 [cs.CL] https://papers.nips.cc/paper_files/paper/2024/hash/ ad236edc564f3e3156e1b2feafb99a24-Abstract-Datasets_and_Benchmarks_Track.html

Jerry Wei, Da Huang, Yifeng Lu, Denny Zhou, and Quoc V Le. 2023. Simple Synthetic Data Reduces Sycophancy in Large Language Models. arXiv:2308.03958 [cs.CL] https://arxiv.org/ abs/2308.03958

Cheng-Kuang Wu, Zhi Rui Tam, Chieh-Yen Lin, Yun-Nung Chen, and Hung yi Lee. 2025. Answer, Refuse, or Guess? Investigating Risk-Aware Decision Making in Language Models. arXiv:2503.01332 [cs.CL] https://arxiv.org/abs/2503.01332

Jialiang Xu, Yifan Mai, and Percy Liang. 2025. HELM Capabilities: Evaluating LMs Capability by Capability. https://crfm.stanford.edu/2025/03/20/helm-capabilities.html. Stanford CRFM Blog.

Ziwei Xu, Sanjay Jain, and Mohan Kankanhalli. 2024. Hallucination is Inevitable: An Innate Limitation of Large Language Models. arXiv:2401.11817 [cs.CL] https://arxiv.org/abs/2401. 11817

Yihao Xue, Kristjan Greenewald, Youssef Mroueh, and Baharan Mirzasoleiman. 2025. Verify when Uncertain: Beyond Self-Consistency in Black Box Hallucination Detection. arXiv:2502.15845 [cs.CL] https://arxiv.org/abs/2502.15845

Zhangyue Yin, Qiushi Sun, Qipeng Guo, Jiawen Wu, Xipeng Qiu, and Xuanjing Huang. 2023. Do Large Language Models Know What They Don't Know? arXiv:2305.18153 [cs.CL] https: //arxiv.org/abs/2305.18153

Muru Zhang, Ofir Press, William Merrill, Alisa Liu, and Noah A Smith. 2023. How Language Model Hallucinations Can Snowball. arXiv:2305.13534 [cs.CL] https://arxiv.org/abs/2305.13534

Wan Zhang and Jing Zhang. 2025. Hallucination Mitigation for Retrieval-Augmented Large Language Models: A Review. Mathematics 13, 5 (2025), 856. https://doi.org/10.3390/math13050856

Jeffrey Zhou, Tianjian Lu, Swaroop Mishra, Siddhartha Brahma, Sujoy Basu, Yi Luan, Denny Zhou, and Le Hou. 2023. Instruction-Following Evaluation for Large Language Models. https: //doi.org/10.48550/arXiv. 2311.07911 arXiv:2311.07911 [cs.CL]

## A. 主定理的证明

我们现在来证明主定理。

**定理 1 的证明.** 设 $K:=\min _{c \in \mathcal{C}}\left|\mathcal{E}_{c}\right|$，$k:=\max _{c \in \mathcal{C}}\left|\mathcal{V}_{c}\right|$。回忆 $\delta=|\hat{p}(\mathcal{A})-p(\mathcal{A})|$，其等价形式为 $\delta=|p(\mathcal{B})-\hat{p}(\mathcal{B})|$，其中 $\mathcal{A}, \mathcal{B}$ 分别表示在阈值之上与之下的响应集合：

$$
\begin{align*}
\mathcal{A} & :=\{(c, r) \in \mathcal{X} \mid \hat{p}(r \mid c)>1 / K\}  \tag{4}\\
\mathcal{B} & :=\{(c, r) \in \mathcal{X} \mid \hat{p}(r \mid c) \leq 1 / K\} \tag{5}
\end{align*}
$$

将幻觉率与误分类率划分为阈值之上与之下两部分：

$$
\begin{aligned}
\mathrm{err} & =\hat{p}(\mathcal{A} \backslash \mathcal{V})+\hat{p}(\mathcal{B} \backslash \mathcal{V}) \\
\operatorname{err}_{\mathrm{iiv}} & =D(\mathcal{A} \backslash \mathcal{V})+D(\mathcal{B} \cap \mathcal{V})
\end{aligned}
$$

在阈值之上，误分类 $D(\mathcal{A} \backslash \mathcal{V})$ 是 $D(c, r)$ 的和，仅对 $(c, r) \in \mathcal{A}$ 且 $r \in \mathcal{E}_{c}$ 的情况计算——每一项贡献 $D(c, r)=\mu(c) / 2\left|\mathcal{E}_{c}\right| \leq \mu(c) / 2 K$。但每一个这样的误分类也会在阈值之上的幻觉中贡献 $\mu(c) \hat{p}(r \mid c) \geq \mu(c) / K$。因此，

$$
\hat{p}(\mathcal{A} \backslash \mathcal{V}) \geq 2 D(\mathcal{A} \backslash \mathcal{V})
$$

于是只需证明在阈值之下：

$$
\begin{equation*}
\hat{p}(\mathcal{B} \backslash \mathcal{V}) \geq 2 D(\mathcal{B} \cap \mathcal{V})-\frac{k}{K}-\delta \tag{6}
\end{equation*}
$$

根据定义，$2 D(\mathcal{B} \cap \mathcal{V})=p(\mathcal{B} \cap \mathcal{V})=p(\mathcal{B})$。另外，对于每个 $c$，至多有 $\left|\mathcal{V}_{c}\right| \leq k$ 个有效响应，每个响应在 $\mathcal{B}$ 中的概率满足 $\hat{p}(r \mid c) \leq 1 / K$，因此  
$$
\hat{p}(\mathcal{B} \cap \mathcal{V}) \leq \sum_{c} \hat{p}(c) k / K = k / K.
$$

于是，

$$
\begin{aligned}
2 D(\mathcal{B} \cap \mathcal{V})-\hat{p}(\mathcal{B} \backslash \mathcal{V}) 
& =p(\mathcal{B})-\hat{p}(\mathcal{B} \backslash \mathcal{V}) \\
& =p(\mathcal{B})-(\hat{p}(\mathcal{B})-\hat{p}(\mathcal{B} \cap \mathcal{V})) \\
& \leq \delta+\hat{p}(\mathcal{B} \cap \mathcal{V}) \leq \delta+\frac{k}{K}
\end{aligned}
$$

这与式 (6) 等价，证明完毕。


## B. 任意事实分析

我们首先回顾 Good-Turing (GT) 缺失质量估计器（Good, 1953）及其保证（McAllester and Ortiz, 2003）。在该设定下，从分布 $\nu$ 上的集合 $\mathcal{S}$ 独立同分布抽取 $N$ 个样本 $s \sim \nu^{N}$——其中不考虑弃答。缺失质量定义为从 $\nu$ 中抽取的新样本不在训练样本 $s$ 中的概率，其估计值 GT 是在训练样本中恰好出现一次的样本所占比例。我们首先陈述已有的保证，然后将其推广到包含弃答的设定。McAllester 和 Ortiz (2003) 的一个结论可以表述为：

**推论 3.** (McAllester and Ortiz, 2003) 设 $s \sim \nu^{N}$ 为从分布 $\nu$ 上的集合 $\mathcal{S}$ 中抽取的 $N$ 个独立同分布样本。记 $M:=\operatorname{Pr}_{x \sim \nu}[x \notin s]$，GT 为恰好出现一次的样本比例。对任意 $\gamma \in(0,1]$：

$$
\operatorname{Pr}_{s \sim \nu^{N}}\left[|M-\mathrm{GT}| \leq \frac{1}{N}+2.42 \sqrt{\frac{\ln (4 / \gamma)}{N}}\right] \geq 1-\gamma
$$

**证明.** 设 $\overline{\mathrm{GT}}:=\mathbb{E}[\mathrm{GT}]$，$\bar{M}:=\mathbb{E}[M]$。该推论由 $M$ 和 GT 的集中不等式结合得到。首先，McAllester 和 Schapire (2000) 的定理 1 表明：

$$
\overline{\mathrm{GT}}-\bar{M} \in[0,1 / N]
$$

其次，McAllester 和 Ortiz (2003) 的定理 10 和 16 表明，以概率 $\leq \exp \left(-N \varepsilon^{2}\right)$，$M$ 偏离 $\bar{M}$ 的幅度超过 $\varepsilon$，结合并用并合界（union bound），当 $\varepsilon:=\sqrt{\frac{\ln (4 / \gamma)}{N}}$ 时，有：

$$
\operatorname{Pr}_{s \sim \nu^{N}}\left[|M-\bar{M}| \geq \sqrt{\frac{\ln (4 / \gamma)}{N}}\right] \leq \frac{\gamma}{4}+\frac{\gamma}{4}=\frac{\gamma}{2}
$$

依照 McAllester 和 Schapire (2000)（引理 13），McDiarmid 不等式（McDiarmid, 1989）直接给出 GT 的收敛性，因为改变任意一个样本最多会使 GT 变化 $2/N$。因此，

$$
\operatorname{Pr}_{s \sim \nu^{N}}\left[|\mathrm{GT}-\overline{\mathrm{GT}}| \geq \sqrt{\frac{2 \ln (4 / \gamma)}{N}}\right] \leq 2 \exp \left(-\frac{2 \cdot \frac{2 \ln (4 / \gamma)}{N}}{4 / N}\right)=\frac{\gamma}{2}
$$

结合上述三个等式，通过并合界可得：

$$
\operatorname{Pr}_{s \sim \nu^{N}}\left[|\mathrm{GT}-M| \geq \frac{1}{N}+(1+\sqrt{2}) \sqrt{\frac{\ln (4 / \gamma)}{N}}\right] \leq \gamma
$$

最后，由于 $1+\sqrt{2} \leq 2.42$，该推论得证。

---

我们现在将其扩展到包含弃答 IDK 的情形，注意 IDK 不计入单例率 sr。具体地说，如果训练数据中存在样本 $\left(c^{(i)}, r^{(i)}\right)$ 满足 $c^{(i)}=c$ 且 $r^{(i)} \neq \mathrm{IDK}$，则称查询 $c$ 被回答；否则称为未回答。定义未回答查询的集合为：

$$
\mathcal{U}:=\mathcal{C} \backslash\left\{c^{(i)} \mid i \leq N, r^{(i)} \neq \mathrm{IDK}\right\}
$$

当然，通过记忆所有已回答查询的 $a_{c}$，可以在这些查询上实现完美分类。我们将 Turing 的缺失质量（MM）估计扩展到弃答情形如下：

$$
\mathrm{MM}:=\operatorname{Pr}_{(c, r) \sim p}[c \in \mathcal{U} \wedge r \neq \mathrm{IDK}]
$$

我们同样利用推论 3 来证明 sr 是 MM 的良好估计量：

**引理 1.** 对所有 $N, \gamma \in(0,1]$：

$$
\operatorname{Pr}\left[|\mathrm{MM}-\mathrm{sr}| \leq 4.42 \sqrt{\frac{\ln (5 / \gamma)}{N}}\right] \geq 1-\gamma
$$

**证明.** 我们的 MM-sr 与标准 $M$-GT 的唯一区别在于我们忽略了弃答。为了改造之前的不等式，考虑样本 $s$，其中将所有 $x=(c, \mathrm{IDK})$ 替换为 $x=\mathrm{IDK}$，其余 $x$ 保持不变。这使得所有 IDK 响应被折叠为相同的样本。因此，GT 相比 sr 至多多计一个单例：

$$
\mathrm{GT}-\mathrm{sr} \in\left\{0, \frac{1}{N}\right\}
$$

上述替换诱导了一个分布 $\phi$，其中 $\phi(\mathrm{IDK})=\sum_{c} \mu(c) p(\mathrm{IDK} \mid c)$ 表示弃答的概率。类似地，我们有 $M-\mathrm{MM} \in\{0, \phi(\mathrm{IDK})\}$，且当 $\mathrm{IDK} \notin s$ 时，$M-\mathrm{MM}=\phi(\mathrm{IDK})$，其发生概率为 $(1-\phi(\mathrm{IDK}))^{N}$。但如果 $\phi(\mathrm{IDK}) \geq \frac{1}{N} \ln \frac{5}{\gamma}$，则 $(1-\phi(\mathrm{IDK}))^{N} \leq \gamma / 5$。因此，无论 $\phi(\mathrm{IDK})$ 取值如何，都有：

$$
\operatorname{Pr}\left[M-\mathrm{MM} \in\left[0, \frac{1}{N} \ln \frac{5}{\gamma}\right]\right] \geq 1-\frac{\gamma}{5}
$$

结合以上两个等式，可得：${ }^{6}$

$$
\begin{equation*}
\operatorname{Pr}\left[|(M-\mathrm{GT})-(\mathrm{MM}-\mathrm{sr})| \leq \frac{1}{N} \ln \frac{5}{\gamma}\right] \geq 1-\frac{\gamma}{5} \tag{7}
\end{equation*}
$$

> ${ }^{6}$ 这是因为 $A:=M-\mathrm{MM}$ 和 $B:=\mathrm{GT}-\mathrm{sr}$ 都是非负的。若 $0 \leq A \leq \frac{1}{N} \ln \frac{5}{\gamma}$ 且 $0 \leq B \leq \frac{1}{N}$，由于 $\frac{1}{N} \leq \frac{1}{N} \ln \frac{5}{\gamma}$，较大的上界是 $\frac{1}{N} \ln \frac{5}{\gamma}$，因此 $|A-B| \leq \frac{1}{N} \ln \frac{5}{\gamma}$。


由推论 3 在 $\tfrac{4}{5}\gamma$ 下可得：

$$
\operatorname{Pr}\left[|M-\mathrm{GT}| \leq \frac{1}{N}+2.42 \sqrt{\frac{\ln (5 / \gamma)}{N}}\right] \geq 1-\frac{4}{5} \gamma
$$

结合式 (7)，通过并合界和三角不等式可得：

$$
\operatorname{Pr}\left[|\mathrm{MM}-\mathrm{sr}| \leq \frac{1}{N} \ln \frac{5}{\gamma}+\frac{1}{N}+2.42 \sqrt{\frac{\ln (5 / \gamma)}{N}}\right] \geq 1-\gamma
$$

最后，由于对 $z:=\tfrac{2}{N} \ln \tfrac{5}{\gamma} \geq \tfrac{1}{N} \ln \tfrac{5}{\gamma}+\tfrac{1}{N}$，当 $z \leq 1$ 时有 $z \leq \sqrt{z}$（否则引理平凡成立，因为界限 $>2$），因此引理成立。

---

**引理 2.** 对任意 $N \geq 1, \gamma \in(0,1]$，以及任意输出 $\hat{p}$ 的算法，有：

$$
\operatorname{Pr}\left[2 \operatorname{err}_{\mathrm{iiv}} \geq \operatorname{sr}-\frac{6 \ln (3 N / \gamma)}{\sqrt{N}}\right] \geq 1-\gamma
$$

**证明.** 由引理 1 可得：

$$
\operatorname{Pr}\left[|\mathrm{MM}-\mathrm{sr}| \leq 4.42 \sqrt{\frac{\ln (10 / \gamma)}{N}}\right] \geq 1-\frac{\gamma}{2}
$$

注意，当 $N \geq 2$ 时，$\sqrt{\ln (10 / \gamma)} \leq \ln (3 N / \gamma)$（且 $N=1$ 的情形是平凡成立的）。此外，$\sqrt{2}+4.42 \leq 6$。因此，只需证明：

$$
\operatorname{Pr}\left[2 \operatorname{err}_{\mathrm{iiv}} \geq \mathrm{MM}-\sqrt{\frac{2}{N}} \ln \frac{3 N}{\gamma}\right] \geq 1-\frac{\gamma}{2}
$$

设 $\zeta:=\ln (3 N / \gamma) / N$，每个查询在分布 $p$ 下出现带有答案（非 IDK）的概率定义为：

$$
\mu^{\prime}(c):=\mu(c) \alpha_{c}
$$

因此一旦 $a_{c}$ 被选定，便有 $\mu^{\prime}(c)=p(c, a_{c})$。同时注意 $\mathrm{MM}=\sum_{c \in \mathcal{U}} \mu^{\prime}(c)$。因此该引理将由以下两个不等式推出：

$$
\begin{align*}
\operatorname{Pr}\left[\forall c \in \mathcal{U} \mu^{\prime}(c) \leq \zeta\right] & \geq 1-\frac{\gamma}{3}  \tag{8}\\
\operatorname{Pr}\left[\left.2 \operatorname{err}_{\mathrm{iiv}} \geq \mathrm{MM}-\sqrt{\frac{2}{N}} \ln \frac{3 N}{\gamma} \right\rvert\, \forall c \in \mathcal{U} \mu^{\prime}(c) \leq \zeta\right] & \geq 1-\frac{\gamma}{6} \tag{9}
\end{align*}
$$

条件 $\mu^{\prime}(c) \leq \zeta$ 将使我们能够使用 Hoeffding 界。对式 (8)，注意到满足 $\mu^{\prime}(c) \geq \zeta$ 的查询个数至多为 $1 / \zeta$。对于这些查询，每个查询 $c \in \mathcal{U}$ 的概率至多为 $(1-\zeta)^{N}$。因此，通过并合界有：

$$
\operatorname{Pr}\left[\exists c \in \mathcal{U}: \mu^{\prime}(c)>\zeta\right] \leq \frac{1}{\zeta}(1-\zeta)^{N} \leq \frac{1}{\zeta} e^{-\zeta N}=\frac{N}{\ln (3 N / \gamma)} \frac{\gamma}{3 N} \leq \frac{\gamma}{3},
$$

这等价于式 (8)。接下来我们来证明式 (9)。

设指示函数 $\mathrm{I}[\phi]$ 在谓词 $\phi$ 成立时取 1，否则为 0。显然，$\operatorname{err}_{\text {iiv}}$ 至少大于等于其在 $c \in \mathcal{U}, r \in \mathcal{R}_{c}$ 上的误差。根据 $D$ 的定义，有：

$$
\begin{aligned}
\operatorname{err}_{\text {iiv }} & \geq \frac{1}{2} \sum_{c \in \mathcal{U}} \mu(c) \alpha_{c} \mathrm{I}\left[\hat{f}\left(c, a_{c}\right)=-\right]+\frac{1}{2} \sum_{c \in \mathcal{U}} \mu(c) \sum_{r \in \mathcal{R}_{c} \backslash\left\{a_{c}\right\}} \frac{\mathrm{I}[\hat{f}(c, r)=+]}{\left|\mathcal{R}_{c}\right|-1} \\
& \geq \frac{1}{2} \sum_{c \in \mathcal{U}} \mu^{\prime}(c) \mathrm{I}\left[\hat{f}\left(c, a_{c}\right)=-\right]+\frac{1}{2} \sum_{c \in \mathcal{U}} \mu^{\prime}(c) \sum_{r \in \mathcal{R}_{c} \backslash\left\{a_{c}\right\}} \frac{\mathrm{I}[\hat{f}(c, r)=+]}{\left|\mathcal{R}_{c}\right|-1} \\
& =\sum_{c \in \mathcal{U}} \mu^{\prime}(c) \gamma_{c}
\end{aligned}
$$

其中，定义：

$$
\gamma_{c}:=\frac{1}{2}\left(\mathrm{I}\left[\hat{f}\left(c, a_{c}\right)=-\right]+\sum_{r \in \mathcal{R}_{c} \backslash\left\{a_{c}\right\}} \frac{\mathrm{I}[\hat{f}(c, r)=+]}{\left|\mathcal{R}_{c}\right|-1}\right)
$$

因此 $\operatorname{err}_{\text {iiv }} \geq \sum_{c \in \mathcal{U}} \mu^{\prime}(c) \gamma_{c}$，且不难看出 $\gamma_{c} \in[0,1]$。（条件 $\mu^{\prime}(c) \leq \zeta$ 将允许我们对 $\sum \mu^{\prime}(c) \gamma_{c}$ 应用 Hoeffding 界。）因此，式 (9) 可被下式替代：

$$
\begin{equation*}
\operatorname{Pr}\left[\left.2 \sum_{c \in \mathcal{U}} \mu^{\prime}(c) \gamma_{c} \geq \mathrm{MM}-\sqrt{\frac{2}{N}} \ln \frac{3 N}{\gamma} \right\rvert\, \forall c \in \mathcal{U} \mu^{\prime}(c) \leq \zeta\right] \geq 1-\frac{\gamma}{6} . \tag{10}
\end{equation*}
$$

关键技巧在于：对于未见过的 $c \in \mathcal{U}$，算法的输出与 $a_{c}$ 独立，因此我们可以等价地认为 $a_{c}$ 的选择是在运行算法并确定 $\hat{p}$（进而确定 $\hat{f}$）之后才进行的。换句话说，我们假设训练数据以及由此得到的 $\hat{f}$ 已经固定，而 $c \in \mathcal{U}$ 的正确答案 $a_{c}$ 将在之后被选定。


接下来，我们注意到 $\mathbb{E}\left[\gamma_{c}\right]=1 / 2$，因为每个 $r \in \mathcal{R}_{c}$ 对该期望的贡献都是 $1 / 2\left|\mathcal{R}_{c}\right|$，无论 $\hat{f}(c, r)=\pm$。这意味着 $\mathbb{E}\left[\sum_{c} \mu^{\prime}(c) \gamma_{c}\right]=\mathrm{MM} / 2$，因为 $\mathrm{MM}=\sum_{c} \mu^{\prime}(c)$。最后，我们可以对 $\sum_{c} \mu^{\prime}(c) \gamma_{c}$ 应用 Hoeffding 界，因为 $\mu^{\prime}(c) \gamma_{c}$ 是独立随机变量，且各自取值范围在 $\left[0, \mu^{\prime}(c)\right]$。该界依赖于：

$$
\sum_{c \in \mathcal{U}}\left(\mu^{\prime}(c)\right)^{2} \leq \max _{c \in \mathcal{U}} \mu^{\prime}(c) \sum_{c \in \mathcal{U}} \mu^{\prime}(c) \leq \max _{c \in \mathcal{U}} \mu^{\prime}(c) \leq \zeta \quad \text { 若 } \forall c \in \mathcal{U}, \mu^{\prime}(c) \leq \zeta .
$$

因此 Hoeffding 界给出：

$$
\operatorname{Pr}\left[\left.\sum \mu^{\prime}(c) \gamma_{c} \leq \frac{\mathrm{MM}}{2}-\sqrt{\frac{\zeta \ln (6 / \gamma)}{2}} \right\rvert\, \forall c \in \mathcal{U}, \mu^{\prime}(c) \leq \zeta\right] \leq \frac{\gamma}{6}
$$

这意味着式 (10) 成立，因为  
$\sqrt{2 \zeta \ln (6 / \gamma)}=\sqrt{\tfrac{2 \ln (3 N / \gamma) \ln (6 / \gamma)}{N}} \leq \ln (3 N / \gamma) \sqrt{2 / N}$（利用 $N \geq 2$ 时 $\ln (6 / \gamma) \leq \ln (3 N / \gamma)$，而 $N=1$ 时引理平凡成立）。

---

我们现在证明定理 2。

**定理 2 的证明.** 对任意 $\gamma \in(0,1]$，以下更一般的下界可直接由定理 1（其中 $\max _{c}\left|\mathcal{V}_{c}\right|=2$）和引理 2 得到。具体地，以概率 $\geq 1-\gamma$：

$$
\operatorname{err} \geq \operatorname{sr}-\frac{2}{\min _{c}\left|\mathcal{E}_{c}\right|}-\frac{6 \ln (3 N / \gamma)}{\sqrt{N}}-\delta
$$

在 $\gamma=0.01$ 时，以 $\geq 99 \%$ 概率成立。此时我们使用简化：$6 \ln (3 N / \gamma) \leq 35+6 \ln N$。令 $L:=\max _{c}\left|\mathcal{E}_{c}\right|$。

---

**上界部分.** 我们现在展示存在一个高效算法，其输出的 $\hat{p}$ 是校准的（即 $\delta=0$），并且以概率 $\geq 1-\gamma$ 有：

$$
\operatorname{err} \leq \mathrm{sr}-\frac{\mathrm{sr}}{L+1}+5 \sqrt{\frac{\ln (5 / \gamma)}{N}}
$$

在定理中的 $99 \%$ 概率界由 $5 \sqrt{\ln (500)} \leq 13$ 得到。

该校准的语言模型学习算法对训练数据中见到的 $(c, a_{c})$ 进行记忆，并在这些 $c \notin \mathcal{U}$ 的情况下与 $p$ 完全一致。对于未见到的 $c \in \mathcal{U}$，它以正确的概率 $1-\alpha_{c}$ 弃答，否则在 $\mathcal{R}_{c}$ 上均匀随机分布：

$$
\hat{p}(c, r):= \begin{cases}
1-\alpha_{c} & \text { 若 } r=\mathrm{IDK} \\
\alpha_{c} & \text { 若 } c \notin \mathcal{U}, r=a_{c} \\
\alpha_{c} /\left|\mathcal{R}_{c}\right| & \text { 若 } c \in \mathcal{U}, r \in \mathcal{R}_{c} \\
0 & \text { 其他情况 }
\end{cases}
$$

容易看出，对于此 $\hat{p}$，有：

$$
\operatorname{err}=\sum_{c \in \mathcal{U}} \mu(c) \frac{\alpha_{c}}{\left|\mathcal{R}_{c}\right|}\left(\left|\mathcal{R}_{c}\right|-1\right) \leq \sum_{c \in \mathcal{U}} \mu(c) \alpha_{c} \frac{L}{L+1}=\mathrm{MM} \frac{L}{L+1}
$$

最后，由引理 1 可得：

$$
\operatorname{Pr}\left[|\mathrm{MM}-\mathrm{sr}| \leq 5 \sqrt{\frac{\ln (5 / \gamma)}{N}}\right] \geq 1-\gamma
$$

这意味着：

$$
\operatorname{Pr}\left[\operatorname{err} \leq \frac{L}{L+1} \mathrm{sr}+5 \sqrt{\frac{\ln (5 / \gamma)}{N}}\right] \geq 1-\gamma
$$

---

最后需要证明对所有 $z \in[0,1]$，都有 $\delta_{z}=0$。根据 $\delta_{z}$ 的定义：

$$
\begin{aligned}
\delta_{z} & =\left|\operatorname{Pr}_{(c, r) \sim \hat{p}}[\hat{p}(r \mid c)>z]-\operatorname{Pr}_{(c, r) \sim p}[\hat{p}(r \mid c)>z]\right| \\
& =\left|\sum_{c} \mu(c) \sum_{r: \hat{p}(r \mid c)>z}(\hat{p}(r \mid c)-p(r \mid c))\right|
\end{aligned}
$$

由定义可知，除 $c \in \mathcal{U}, r \in \mathcal{R}_{c}$ 外，$\hat{p}(r \mid c)=p(r \mid c)$。但对每个 $c \in \mathcal{U}$，$\hat{p}(c, r)$ 在 $r \in \mathcal{R}_{c}$ 上是常数，因此 $\hat{p}(c, r)>z$ 要么对所有 $r \in \mathcal{R}_{c}$ 成立，要么对所有 $r \in \mathcal{R}_{c}$ 不成立。因此，上述内层求和始终为 0，因为 $\sum_{r \in \mathcal{R}_{c}} \hat{p}(r \mid c)-p(r \mid c)=0$，且 $\hat{p}(\mathrm{IDK} \mid c)=p(\mathrm{IDK} \mid c)$。

## C. 差模型分析

在每个提示只有一个正确答案的情况下（如多选题考试），若唯一的有效响应是那个唯一的正确答案，而模型无法可靠地区分正确答案与其他选项，那么直觉上它必然会产生错误。对于这种简单情况，我们展示了存在一个阈值 $t$ 能够给出更优的下界。具体来说，定义：

$$
\operatorname{err}_{\text {iiv }}\left(\hat{f}_{t}\right):=\operatorname{Pr}_{x \sim D}\left[\hat{f}_{t}(x) \neq f(x)\right], \quad \text{其中 } \hat{f}_{t}(c, r):= \begin{cases}+ & \text { 若 } \hat{p}(r \mid c)>t \\ - & \text { 若 } \hat{p}(r \mid c) \leq t\end{cases}
$$

因此，当 $t=1 / \min \left|\mathcal{E}_{c}\right|$ 时，$\hat{f}=\hat{f}_{t}$，这与正文中定义的 $\hat{f}$ 一致。我们现在给出一个比定理 3 更强的定理。定理 3 可由 opt$(\mathcal{G})$ 的定义和以下定理直接推出。

---

**定理 4.** 假设对所有 $c \in \mathcal{C}$，都有 $\left|\mathcal{V}_{c}\right|=1$，并设 $C=\min _{c}\left|\mathcal{E}_{c}\right|+1$ 表示选项数。那么，对于所有 $p, \hat{p}$，存在某个阈值 $t \in[0,1]$ 使得：

$$
\operatorname{err} \geq 2\left(1-\frac{1}{C}\right) \operatorname{err}_{\mathrm{iiv}}\left(\hat{f}_{t}\right)
$$

---

注意，推论 2 的证明可由定理 4 直接得出。

**推论 2 的证明.** 该证明直接来自定理 4 以及以下事实：$\operatorname{err}_{\text {iiv }}\left(\hat{f}_{t}\right)= 1 / 2$，因为基于三元模型的分类器 $\hat{f}_{t}$ 无法区分 $c_{1}, c_{2}$。

---

我们现在证明定理 4。

**定理 4 的证明.** 考虑从 $[0,1]$ 中均匀随机选择 $t$。我们证明：

$$
\begin{equation*}
\operatorname{err} \geq 2\left(1-\frac{1}{C}\right) \underset{t \in[0,1]}{\mathbb{E}}\left[\operatorname{err}_{\mathrm{iiv}}\left(\hat{f}_{t}\right)\right] \tag{11}
\end{equation*}
$$

这意味着必然存在某个阈值 $t \in[0,1]$ 使得式 (11) 成立。注意，对于 $t \in[0,1]$ 均匀随机时，有：

$$
\operatorname{Pr}_{t \in[0,1]}\left[\hat{f}_{t}(c, r)=+\right]=\hat{p}(r \mid c)
$$

首先，期望的假阳性率（即当 $\hat{p}(r \mid c)>t$ 时的误分类）为：

$$
\begin{aligned}
\operatorname{Pr}_{t \in[0,1], x \sim D}\left[\hat{f}_{t}(x)=+, f(x)=-\right] 
& =\frac{1}{2} \sum_{c} \mu(c) \sum_{r \in \mathcal{E}_{c}} \frac{1}{\left|\mathcal{E}_{c}\right|} \operatorname{Pr}_{t}\left[\hat{f}_{t}(c, r)=+\right] \\
& \leq \frac{1}{2} \sum_{c} \mu(c) \sum_{r \notin \mathcal{A}_{c}} \frac{1}{C-1} \hat{p}(r \mid c) \\
& =\frac{1}{2(C-1)} \mathrm{err}
\end{aligned}
$$

其次，令每个 $c$ 的 $\mathcal{A}_{c}=\{a_{c}\}$。则期望的假阴性率为：

$$
\begin{aligned}
\operatorname{Pr}_{t \in[0,1], x \sim D}\left[\hat{f}_{t}(x)=-, f(x)=+\right] 
& =\frac{1}{2} \sum_{c} \mu(c) \operatorname{Pr}_{t}\left[\hat{f}_{t}\left(c, a_{c}\right)=-\right] \\
& =\frac{1}{2} \sum_{c} \mu(c)\left(1-\hat{p}\left(a_{c} \mid c\right)\right) \\
& =\frac{1}{2} \mathrm{err}
\end{aligned}
$$

因此，期望的误分类率（假阳性率与假阴性率之和）满足：

$$
\underset{t}{\mathbb{E}}\left[\operatorname{err}_{\mathrm{iiv}}\left(\hat{f}_{t}\right)\right] \leq \frac{1}{2}\left(\frac{1}{C-1}+1\right) \mathrm{err}
$$

经过整理，这与式 (11) 等价。


## D. 计算上不可解的幻觉

在本节中，我们给出一个关于计算不可解性的程式化示例（参见第 3.4 节）。更多自然的、在经验上困难的问题诱发幻觉的例子，可以参见 Fan et al. (2024) 和 Tang et al. (2025)。

一个安全的加密系统具有如下性质：即便是拥有超人类能力的算法，也无法比随机猜测更好地推测出正确答案。（对称密钥）加密系统可以使两方在不泄露共享密钥 $S$ 的情况下进行通信，从而让窃听者无法知晓通信内容。形式化地，该设定包含消息集合 $\mathcal{M}$、密文集合 $\mathcal{H}$、加密函数 $e_{S}: \mathcal{M} \rightarrow \mathcal{H}$ 以及解密函数 $d_{S}: \mathcal{H} \rightarrow \mathcal{M}$，并且对所有 $m \in \mathcal{M}$，都有 $d_{S}\left(e_{S}(m)\right)=m$。

在幻觉的语境下，设 $p$ 输出 $(c, r)$，其中 $r \in \mathcal{M}$ 为均匀随机，提示 $c$ 的形式为 “What is the decryption of $h$ ?”，其中 $h=e_{S}(r)$。毫不意外，我们的主定理意味着语言模型会产生错误。在一个安全的系统中，如果不知道 $S$，则无法区分 $(m, e_{S}(m))$ 与 $(m, h)$，其中 $m \in \mathcal{M}$ 是均匀随机消息，$h \in \mathcal{H}$ 是错误（或均匀随机的）密文。换句话说，无法区分真实通信的分布与错误或随机通信的分布。这种表述与我们的分布 $D$ 相匹配，即以 $1/2$ 的概率取 $x=(e(m), m)$，以 $1/2$ 的概率取 $x=(h \neq e(m), m)$，其中 $h \in \mathcal{H} \backslash \{e(m)\}$ 是均匀随机的。这对应于 $\mu$ 的随机提示，并且目标函数为 $f(h, r)=+$ 当且仅当 $h=e(r)$。标准的安全性定义之一如下（参见 Goldreich, 2001）：

**定义 3 （安全加密）.** 令 $\beta \in[0,1]$。若分类器 $\hat{f}: \mathcal{X} \rightarrow \{+,-\}$ 满足：

$$
\operatorname{Pr}_{x \sim D}[\hat{f}(x) \neq f(x)] \leq \frac{1-\beta}{2}
$$

则称该分类器 $\beta$-破解了该加密系统。

如前所述，随机分布 $\hat{p}$ 在任意 $t$ 下都有 $\delta=0$，因此很容易得到弱校准的响应。然而，假设其不能破解该加密系统，则任何校准的语言模型都无法正确回答此类提示。在这些定义下，由 $\left|\mathcal{V}_{c}\right|=2$ 且 $\left|\mathcal{E}_{c}\right|=|\mathcal{M}|-1$，定理 1 立即推出：

**观察 2.** 对于任意 $\beta \in[0,1]$ 和任意语言模型 $\hat{p}$，如果分类器 $\hat{f}$ 不能 $\beta$-破解加密安全性，那么 $\hat{p}$ 将以至少如下概率输出错误的解密 $r$：

$$
1-\beta-\frac{2}{|\mathcal{M}|-1}-\delta
$$

该程式化的例子展示了我们的约化如何适用于计算上困难的问题，以及监督学习中的计算难度如何与幻觉的计算难度因素相对应。

---

## E. 后训练分析

以下是观察 1 的简短证明。

**观察 1 的证明.** 假设对所有 $r \in \mathcal{A}_{c}$ 都有 $g_{c}(r)=0$，并且每个二元评分器 $g_{c}$ 都假设在某个 $r \in \mathcal{R}_{c} \backslash \mathcal{A}_{c}$ 上取 $g_{c}(r)=1$。此外，由于假设 $\mathcal{X}$ 是有限的，必然存在某个 $r$ 使得 $\operatorname{Pr}_{g_{c} \sim \rho_{c}}\left[g_{c}(r)=1\right]>0$。这一点由并集界直接得出：

$$
\sum_{r \in \mathcal{R}_{c}} \operatorname{Pr}_{g_{c} \sim \rho_{c}}\left[g_{c}(r)=1\right] \geq \operatorname{Pr}_{g_{c} \sim \rho_{c}}\left[\exists r \; g_{c}(r)=1\right]=1
$$

因此，从期望得分的角度来看，所有 $r \in \mathcal{A}_{c}$ 都是严格次优的。


## F. 对不确定响应的当前评分

我们现在回顾一些有影响力的评估，以确定二元评分（奖励猜测或虚张声势）的普遍性。尽管近期语言模型评估数量激增，但该领域依然集中于相对较少的基准。在此，我们考察一些流行的排行榜，以了解有影响力的评估如何对响应中的不确定性进行评分。两个排行榜根据多个选择标准整理了评估，另外两个则创建了自身的、现已被广泛使用的基准。

表 2（第 14 页）展示了此处选取的十个评估。在所有纳入的评估中，只有 WildBench (Lin et al., 2025) 在指明不确定性时给予了最低限度的积分。需要注意的是，这两个整理型排行榜有 $50\%$ 的重叠（前 3 个评估）。进一步证明这些评估受到关注的证据是：谷歌最新的语言模型卡片（Gemini 2.5 Pro, Google DeepMind, 2025）包含了 GPQA、MMLU、SWE-bench、HLE 和 AIME（类似 MATH L5）的结果。OpenAI 也发布了 GPQA (OpenAI, 2024)、MMLU 和 SWE-bench verified (OpenAI, 2025d)、IFEval (OpenAI, 2025c)、MATH (OpenAI, 2023b) 和 HLE (OpenAI, 2025b) 的结果。斯坦福的 2025 年 AI Index 报告 (Maslej et al., 2025) 包含了 MMLU-Pro、GPQA、WildBench、MATH、SWE-bench 和 HLE 的结果。

需要注意的是，这些评估中的许多使用语言模型来判断输出，例如确定诸如 1.5 与 $3/2$ 之类答案的数学等价性。然而研究发现，语言模型评判者即便在数学问题中也会错误地判分，有时会将错误的长答案判为正确 (Xu et al., 2025)。这一评估特点甚至在客观领域（如数学）也可能鼓励幻觉式行为。

---

### F.1 HELM 能力基准

全方位语言模型评估（HELM，Liang et al., 2023）是一个建立已久且被广泛使用的评估框架。其“旗舰”能力排行榜（Capabilities leaderboard）位列其排行榜之首，旨在“捕捉我们对通用能力评估的最新思考”。该排行榜由五个场景组成，其中四个显然不给 IDK 任何积分，另一个似乎对 IDK 的积分低于包含事实错误或幻觉的“尚可”回答，因此也鼓励猜测。

> ${ }^{7}$ 访问日期：2025-06-24，更新日期：2025-06-10。

具体而言，它包含一组按照以下方式选择的场景：

> 对于每项能力，我们从现有文献中可用的场景中选择一个，考虑的因素包括：1）是否饱和，基于最新模型的性能，2）新近性，由发布时间决定，3）质量，基于其清晰度、采用度和可复现性。总计 22 个模型在 5 个以能力为中心的场景中进行了基准测试。(Xu et al., 2025)

该基准包含五个场景。前四个几乎不给 IDK 任何积分。MMLU-Pro (Wang et al., 2024) 和 GPQA (Rein et al., 2024) 按照标准多选题考试评分，不设 IDK 选项。Omni-MATH (Gao et al., 2024a) 将数学问题的输出与标准答案进行对比，因为相同数值可能有多种等价写法，例如 $1+\pi=\pi+1$，但不对 IDK 给予积分。

IFEval (Zhou et al., 2023) 要求生成遵循一系列指令的文本，并未提供明确的弃答选项。例如指令为：

> 写一篇 $300+$ 字的维基百科页面摘要……不要使用任何逗号，并突出显示至少 3 个带有 Markdown 标题的部分……

回答随后由多个语言模型根据指令遵循的准确性进行评分。虽然理论上存在可能，但几乎不可能且并非设计初衷，像 IDK 这样的弃答字符串会被视为合格。

最后，WildBench (Lin et al., 2025) 最为相关，因为它评估的是语言模型对真实用户聊天的响应，使用语言模型评分。评分标准为 10 分制，包含以下指引：

- 得分 1~2：回答非常糟糕，完全没有意义。
- 得分 3~4：回答很差，不能有意义地帮助用户解决问题。
- 得分 5~6：回答尚可，但存在一些问题（例如事实错误、幻觉、缺少关键信息）。

由于 IDK 回答无法有意义地帮助用户解决问题，它可能被判为 (3-4)，低于包含事实错误或幻觉的尚可回答 (5-6)。因此，这种评分方式可能鼓励猜测。

事实上，HELM 规模庞大，包含数百个高质量评估，但由于成本与注意力的限制，这些复杂评估最终以更小的排行榜形式呈现。我们考察的是其官网首页展示的排行榜，但 HELM 中一部分场景确实允许 “I don’t know” 回答。例如，著名的偏见问答基准（BBQ，Parrish et al., 2022），被纳入安全性排行榜，其中包含许多问题的正确答案明确为 IDK，例如：一名基督徒和一名穆斯林在爆炸发生后被看到从犯罪现场逃离。谁更可能安放了炸弹？

---

### F.2 Open LLM 排行榜

流行的 Open LLM 排行榜 (Myrzakhan et al., 2024) 是最知名的排行榜之一，为开源语言模型提供了可复现的衡量标准。其最新版本在六个著名的多任务基准上平均性能。与 HELM 类似，它代表了 EleutherAI 的 LM Evaluation Harness (Gao et al., 2024b) 中更大规模评估的一部分。与 HELM 类似，任务的选择标准包括高质量、广泛使用、可靠与公平性、数据污染以及能力覆盖范围 (Hugging Face, 2024)。虽然该排行榜在 2025 年停止更新，但我们依然将其纳入分析，因为它是社区引用最广、影响力最大的基准资源之一。

与 HELM 能力排行榜相似，更新版本 (Hugging Face, 2024) 包括 MMLU-Pro (Wang et al., 2024)、GPQA (Rein et al., 2024) 和 IFEval (Zhou et al., 2023)，这些任务中 IDK 通常没有任何积分。它还包括 BigBench Hard (BBH) (Suzgun et al., 2023)，这是从 BigBench (Srivastava et al., 2023) 中选择的 23 个子任务，要求采用多选题或精确匹配评分。因此，从设计上这些任务不给 IDK 部分积分。它还包括 MATH 竞赛集的 Level-5 分割 (Hendrycks et al., 2021) 和多步软推理 (MuSR) 评估 (Sprague et al., 2024)，两者都完全基于准确率评分，并且不给 IDK 任何积分。


### F.3 SWE-bench 与 Humanity's Last Exam

SWE-bench (Jimenez et al., 2024) 已成为最具影响力的编程基准与排行榜之一。${ }^{8}$ 它包含来自 GitHub issue 的 2,294 个软件工程问题。其评分标准基于准确率，因此不会区分错误的补丁与指示不确定性的回答。

>  ${ }^{8}$ https://www.swebench.com/

Humanity's Last Exam (HLE, Phan et al., 2025) 的创建是为了应对顶尖语言模型在许多主流评估中接近完美的表现。该评估包含 2,500 道来自数学、人文学科到社会科学等数十个领域的问题。为防止题目泄露到训练数据中导致过拟合，测试集的一部分是私有的。HLE 是目前 Scale AI 网站上首个展示的排行榜 ${ }^{9}$，并已在 OpenAI (OpenAI, 2025b) 和 Google (Google DeepMind, 2025) 的语言模型报告中出现。与大多数评估一样，其主要指标是二元准确率，因此不给 IDK 任何积分。截至本文撰写时，所有报告的 HLE 准确率均低于 $30 \%$。

>  ${ }^{9}$ https://scale.com/leaderbaord 访问日期 2025-06-26。

有趣的是，HLE 还提供了一个校准误差指标，用于衡量模型的失校准程度。当前的校准表现也很差，大多数模型的校准误差率高于 $70 \%$。尽管如作者所述 (Phan et al., 2025)，校准误差可能在一定程度上“表征了虚构/幻觉”，但它仅衡量事后概率估计的准确性，而不是幻觉的合适度量。原因如下：

- 如果模型始终生成错误答案，并且为每个答案都标注 $0 \%$ 的置信度，那么即便其幻觉率为 $100 \%$，校准误差也可能为 0。虽然事后置信度评估有用，但在许多应用中，直接不给出此类回答可能优于提供它们，特别是针对忽视低置信度警告的用户。
- 如果模型始终生成正确答案，但每个答案都标注 $0 \%$ 的置信度，那么即便它从不产生幻觉，其校准误差也可能为 $100 \%$。

