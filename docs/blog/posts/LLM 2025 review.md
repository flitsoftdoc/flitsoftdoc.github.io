---
date: 2025-12-22
categories: [Analysis]
tags: [AI, LLM]   # 若启用 tags 插件
slug: LLM-2025-review
# pin: true       # 置顶功能属于 Insiders 版本，社区版无此特性
---
# AK对2025 LLM 的年度回顾

*2025 年 12 月 20 日*

Andrej Karpathy 对 2025 年 AI 的回顾强调了一个悖论：LLM 既比预期更聪明，也比预期更愚蠢；它们极其有用，但目前被挖掘的潜力还不到 10%。行业关注点正从单纯追求“更大规模”转向编排（orchestration）、智能体（agents）以及本地/混合式部署；与此同时，基准测试正逐渐被“刷榜/投机”所操纵。与此同时，“智能体的十年”（2025–2035）正在开启，这要求在“氛围编程（vibe coding）”中保持工程纪律，并强调与具体模型无关（model-agnostic）的架构设计。他将 LLM 视为一种新型智能——是在“召唤幽灵”，因此需要超越动物类比的全新思维方式。

![unnamed](https://bear-images.sfo2.cdn.digitaloceanspaces.com/karpathy/unnamed.webp){width="300"}
<!-- more -->

2025 年是 LLM 取得强劲且充满事件的一年。下面列出了一些我个人认为值得注意、并且有点出乎意料的“范式变化”（paradigm changes）——那些改变了格局、在概念层面让我印象深刻的事情。

### 1. 来自可验证奖励的强化学习（Reinforcement Learning from Verifiable Rewards, RLVR）

在 2025 年初，所有实验室的 LLM 生产级技术栈看起来大概是这样：

1. 预训练（Pretraining，GPT-2/3 约 2020）
2. 有监督微调（Supervised Finetuning，InstructGPT 约 2022）以及
3. 来自人类反馈的强化学习（Reinforcement Learning from Human Feedback, RLHF 约 2022）

这套配方在相当一段时间里一直稳定且被验证可行，用于训练生产级 LLM。到了 2025 年，来自可验证奖励的强化学习（RLVR）崛起，成为事实上的新增关键阶段，并被加入到这一组合中。通过在多个环境中让 LLM 对自动可验证的奖励进行训练（例如数学/代码类谜题），LLM 会自发形成一些在人类看来像“推理（reasoning）”的策略——它们学会把问题求解拆解为中间计算步骤，并掌握一系列来回试探、逐步搞清楚问题的策略（示例可见 DeepSeek R1 论文）。这些策略在此前的范式中很难获得，因为对于 LLM 而言，最优的推理轨迹与“复盘/纠错”路径到底是什么并不清楚——它必须通过针对奖励的优化，自己找到对它有效的方式。

不同于 SFT 与 RLHF（两者都相对“薄/短”，从计算角度看只是较小的微调阶段），RLVR 是在客观（不可被投机/作弊）的奖励函数上做训练，从而允许更长时间的优化。事实证明，运行 RLVR 能提供很高的能力/$，以至于吞噬了原本打算用于预训练的算力。因此，2025 年的大部分能力进展，都由 LLM 实验室在这个新阶段上消化“算力/训练长度的积压”（overhang）所定义：我们总体看到的依然是规模相近的 LLM，但 RL 训练跑得更久。这个新阶段还带来了一个全新的旋钮（以及与之相关的尺度定律 scaling law）：可以通过生成更长的推理轨迹、增加“思考时间”，来控制能力随测试时算力（test time compute）的变化。OpenAI o1（2024 年末）是 RLVR 模型的第一次展示，但 o3（2025 年初）的发布才是明显的拐点——你可以直观地感到差异。

### 2. 幽灵 vs. 动物 / 锯齿状智能（Jagged Intelligence）

2025 年是我（我认为整个行业也是）第一次开始更直觉地内化 LLM 智能的“形状”的一年。我们不是在“进化/成长动物”，而是在“召唤幽灵”。LLM 技术栈的方方面面都不同（神经架构、训练数据、训练算法，尤其是优化压力），因此我们得到的智能空间中的实体截然不同也就不足为奇；用“动物”的视角去理解它们并不合适。从监督信息量（supervision bits）的角度看，人类神经网络是为了部落在丛林中生存而优化的；而 LLM 神经网络则是为了模仿人类文本、在数学谜题中收集奖励、以及在 LM Arena 上赢得人类点赞而优化的。随着可验证领域能够支持 RLVR，LLM 在这些领域附近的能力会“尖刺式（spike）”提升，并整体呈现出一种令人发笑的锯齿状性能特征——它们同时像天才博学家，又像困惑且认知受限的小学生，距离被一次 jailbreak 骗过而外泄你的数据只差几秒。

![G6zymj4a0AMNJkJ](https://bear-images.sfo2.cdn.digitaloceanspaces.com/karpathy/g6zymj4a0amnjkj.webp)(人类智能：蓝色，AI 智能：红色。我喜欢这版梗图（抱歉我丢了它在 X 上原帖的引用），因为它也指出人类智能本身同样是“锯齿状”的，只是锯齿的方式不同。)

与此相关的是：我在 2025 年对基准测试（benchmarks）的冷漠与信任流失。核心问题在于，基准测试几乎在结构上就是可验证环境，因此会立刻受到 RLVR 以及更弱形式（例如通过合成数据生成）的影响。在典型的“刷榜（benchmaxxing）”过程中，LLM 实验室的团队不可避免地会构建一些紧邻基准测试在嵌入空间（embedding space）中所占据小口袋的环境，并“长出锯齿（grow jaggies）”去覆盖它们。在测试集上训练是一门新的艺术。

把所有基准都碾压了，但仍然没有得到 AGI——这会是什么样子？

关于这一节的话题，我在这里写过更多：

- [Animals vs. Ghosts](https://karpathy.bearblog.dev/animals-vs-ghosts/)
- [Verifiability](https://karpathy.bearblog.dev/verifiability/)
- [The Space of Minds](https://karpathy.bearblog.dev/the-space-of-minds)

### 3. Cursor / LLM 应用的新一层

我觉得 Cursor 最值得注意的地方（除了它今年的流星式增长）在于：它令人信服地揭示了“LLM 应用（LLM app）”的一层新形态——人们开始谈论“某领域的 Cursor（Cursor for X）”。正如我今年在 Y Combinator 的演讲中强调的那样（[文字稿](https://www.donnamagi.com/articles/karpathy-yc-talk) 与 [视频](https://www.youtube.com/watch?v=LCEmiRjPEtQ)），像 Cursor 这样的 LLM 应用会为特定垂直领域打包并编排 LLM 调用：

1. 它们做“上下文工程（context engineering）”
2. 它们在后台编排多次 LLM 调用，并把它们串成越来越复杂的 DAG，同时仔细权衡性能与成本的取舍
3. 它们为“人在环（human in the loop）”提供应用特定的 GUI
4. 它们提供“自治滑条（autonomy slider）”

2025 年的讨论很大一部分都在争论：这一新应用层到底有多“厚”。LLM 实验室会捕获所有应用，还是 LLM 应用还有广阔天地？我个人怀疑，LLM 实验室会趋向于“毕业”一个普遍能力很强的大学生；而 LLM 应用则会通过提供私有数据、传感器与执行器，以及反馈回路，把一整个团队的“大学生”组织起来、微调并真正驱动成某一垂直领域的已部署专业人士。

### 4. Claude Code / 活在你电脑上的 AI

Claude Code（CC）成为第一个令人信服地展示“LLM Agent 长什么样”的产品——它以一种循环往复的方式把工具使用与推理串在一起，用于扩展的（长时程）问题求解。此外，对我而言 CC 的另一个显著点是：它在你的电脑上运行，并且使用你的私有环境、数据与上下文。我认为 OpenAI 在这里走错了方向，因为他们早期的 codex / agent 工作重点放在由 ChatGPT 编排、在云端容器中部署的路径上，而不是简单的 `localhost`。当然，云端运行的 agent swarm 的确像是“AGI 终局”，但我们所处的是一个能力锯齿、起飞足够慢的中间世界，更合理的是让 agent 直接运行在开发者的电脑上。注意：真正重要的区别并不在于“AI ops”具体跑在云端还是本地，而在于其他一切——那台已经存在且已启动的电脑，它的安装状态、上下文、数据、秘密信息（secrets）、配置，以及低延迟交互。Anthropic 把这一优先级顺序做对了，并把 CC 以一种令人愉悦、极简的 CLI 形态打包出来，改变了 AI 应该长什么样——它不再只是像 Google 那样你去访问的网站，而更像一个住在你电脑上的小精灵/幽灵。这是一种全新的、与 AI 交互的独立范式。

### 5. 氛围编程（Vibe coding）

2025 年是 AI 跨过某个能力阈值的一年：仅仅通过英文就能构建各种令人印象深刻的程序，甚至忘了代码本身的存在。好笑的是，我在 [这条“淋浴思绪”推文](https://x.com/karpathy/status/1886192184808149383) 里提出了“vibe coding”这个词，完全没意识到它会传播到这么远 :). 有了氛围编程，编程不再严格属于高度训练的专业人士，而是任何人都能做的事情。从这个意义上说，它也是我在 [Power to the people: How LLMs flip the script on technology diffusion](https://karpathy.bearblog.dev/power-to-the-people/) 中写过的另一个例子：与以往所有技术形成鲜明对比的是，普通人相较于专业人士、公司与政府，会从 LLM 中获得更多收益。但氛围编程不仅让普通人可以接近编程，也让受过训练的专业人士能够写出大量（通过 vibe coding）原本根本不会有人去写的软件。在 nanochat 里，我用 vibe coding 用 Rust 写了一个自定义、极高效的 BPE tokenizer，而不是不得不采用现有库或把 Rust 学到那个深度。今年我用 vibe coding 做了许多项目，作为我希望存在的东西的快速应用 demo（例如 [menugen](https://karpathy.bearblog.dev/vibe-coding-menugen)、[llm-council](https://github.com/karpathy/llm-council)、[reader3](https://github.com/karpathy/reader3)、[HN time capsule](https://github.com/karpathy/hn-time-capsule)）。我甚至 vibe coded 了整套一次性的临时应用，就为了定位一个 bug——为什么不呢？代码突然变得免费、短暂、可塑，并且可以在单次使用后直接丢弃。氛围编程会改造软件生态（terraform software），并改变岗位描述。

### 6. Nano banana / LLM 的 GUI

Google Gemini Nano banana 是 2025 年最令人惊叹、最具范式转变意义的模型之一。在我的世界观里，LLM 是下一个主要的计算范式，类似于 1970、80 年代的计算机。因此，我们会因为本质相似的原因而看到类似的创新：我们会看到类似个人计算的东西、类似微控制器（认知核心 cognitive core）的东西、类似互联网（agent 的互联网）的东西，等等。尤其是在 UI/UX 方面，“与 LLM 聊天”有点像在 1980 年代对电脑控制台发指令。文本是计算机（以及 LLM）偏好的原始数据表示，但它并不是人类偏好的格式，尤其在输入端。人们其实不喜欢读文本——它慢且费力。相反，人们更喜欢以视觉与空间的方式消费信息，这就是传统计算中 GUI 被发明的原因。同理，LLM 也应该用我们偏好的格式与我们交流——图片、信息图、幻灯片、白板、动画/视频、Web 应用等。当然，早期与当下的版本就是 emoji 和 Markdown，它们通过标题、加粗、斜体、列表、表格等方式，把文本“打扮”并进行视觉化排布，便于消费。那么，谁会来构建 LLM 的 GUI？在这一世界观下，nano banana 是一个早期的线索，暗示它可能会是什么样子。更重要的是，它的一个显著点不只是图像生成本身，而是文本生成、图像生成与世界知识在同一套模型权重中纠缠交织所带来的联合能力。

------

**TLDR**。2025 年是 LLM 令人兴奋、且略有出乎意料的一年。LLM 正在呈现为一种新型智能：同时比我预期的聪明得多，也比我预期的愚蠢得多。无论如何，它们极其有用，而我认为行业对其潜力的挖掘甚至还不到当前能力下的 10%。与此同时，可尝试的想法太多了，从概念上看这个领域依然非常开放。正如我今年早些时候在 [Dwarkesh 播客](https://www.dwarkesh.com/p/andrej-karpathy) 中提到的，我同时（表面上看似矛盾地）相信我们会看到快速且持续的进步，并且仍然有大量工作要做。系好安全带。