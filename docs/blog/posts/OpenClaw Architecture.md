---
date: 2026-02-24
categories: [Notes]
tags: [AI, AI Agent]   # 若启用 tags 插件
slug: OpenClaw
# pin: true       # 置顶功能属于 Insiders 版本，社区版无此特性
---

# OpenClaw 架构详解

**OpenClaw 作为 AI Agent 操作系统的工作原理**

[Paolo Perazzo](https://substack.com/@ppaolo)

2026年2月12日

2026年1月初，Michael Galpert 组织了一场名为 Claude Code Show & Tell 的活动，这也是我们这群开发者的首次聚会。二十个人聚在一起，对 Agent 开发充满好奇，也乐意分享使用最新 AI 编码工具的经验。

仅仅几周后，也就是2月5日，Michael Galpert 和 Dave Morin 组织了第三次活动，并更名为 ClawCon——第一届 OpenClaw SF Show & Tell。这次来了700多人，气氛相当热烈。投资者 Ashton Kutcher 将近一个小时都在听人们向他展示项目。OpenClaw 的创造者 Peter Steinberger 无疑是当晚的明星，所有人都围着他提问、祝贺和自拍。

![img](https://substackcdn.com/image/fetch/$s_!XShL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0d4d56a7-7b0a-4b61-9eb1-00da03daf0d7_2964x1280.png)

<!-- more -->

这一切是怎么发生的？短短八周内，OpenClaw 从一个周末开发的 WhatsApp 中继脚本，摇身一变成为了 GitHub 历史上增长最快的开源项目之一，到2月初已超过18万颗星。这种增长不仅是病毒式的，更是前所未有的。

![img](https://substackcdn.com/image/fetch/$s_!2WmD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F821f4316-6fb0-43b3-bab0-8afc16147c0c_2990x2160.png)

在我看来，关键不仅仅是技术能力，更是产品化。Peter 构建了一套完整的框架，把 Agent 能力从研究工作变成了人们真正能部署使用、完成实际任务的工具。

OpenClaw 把"只会应答的聊天机器人"变成了"能执行任务的 Agent"——一个在您自己硬件上持续运行的助手，可以通过您常用的消息应用和界面来访问。

Andrej Karpathy 称其为“我见过的最不可思议的科幻起飞相邻事物”。

我对深入学习和理解新的 AI 框架或产品的细节非常感兴趣，而不仅仅是使用它们。OpenClaw 与我在 [Axiom](https://axiompartners.vc/) 构建第一个 AI 原生公司的工作特别相关，也与我们帮助投资组合公司驾驭 Agent 架构和产品设计策略相关。

由于是开源的，我有机会深入研究代码并编写了这份 OpenClaw 架构解析，为正在构建类似 Agent 架构的创始人提供实用指导。

# 简介

OpenClaw 是一个在您自己的基础设施上运行的个人 AI 助手平台：您的笔记本电脑、VPS、衣橱里的 Mac Mini 或云容器。它将 AI 模型和工具连接到您已经使用的消息应用上：WhatsApp、Telegram、Discord、Slack、Signal、iMessage、Microsoft Teams 等等。

OpenClaw 把 AI 助手当作基础设施问题来对待，而不只是一个提示工程问题。它没有试图通过巧妙的提示让 LLM”记住”上下文或安全行事，而是在模型周围建立了一个结构化的执行环境，具备完善的会话管理、内存系统、工具沙盒和消息路由等功能。LLM 提供智能，OpenClaw 提供操作系统。

您可以控制助手在哪里运行、如何路由消息、它可以使用哪些工具以及如何隔离会话。模型 API 调用仍然发送到 Anthropic、OpenAI 或您的模型所在的地方；但对话历史、工具执行、会话状态和所有编排逻辑都保存在您的基础设施上。

OpenClaw 面向希望拥有可通过任何消息应用访问的个人 AI 助手的开发者和高级用户，而无需将整个体验交给托管的第三方助手。如果您曾希望在任何地方使用 Claude 或 GPT——在您的 WhatsApp DM 中、Slack 频道中、iMessage 线程中——同时让智能运行在您自己的硬件上，OpenClaw 能实现这种体验。

# OpenClaw 工作原理：高层概述

OpenClaw 并不是简单地给 AI 模型 API 包一层聊天机器人的外壳。它是 AI Agent 的操作系统，把 AI 当作基础设施问题来处理：会话、内存、工具沙盒、访问控制、编排……这些都是它的核心。

AI 模型提供智能；OpenClaw 提供执行环境。

OpenClaw 遵循中心辐射架构，以单个 Gateway 为中心，作为控制平面连接用户输入（WhatsApp、iMessage、Slack、macOS 应用、Web UI、CLI）和 AI Agent：

- Gateway 是一个 WebSocket 服务器，连接消息平台和控制界面，把每个路由的消息分派给 Agent 运行时。
- Agent 运行时端到端运行 AI 循环：从会话历史和内存组装上下文，调用模型，针对系统可用功能（浏览器自动化、文件操作、Canvas、定时任务等）执行工具调用，然后把更新后的状态持久化到磁盘。

关键在于 OpenClaw 把接口层（消息从哪里来）和助手运行时（智能和执行在哪里发生）分开了。这意味着您可以通过任何常用的消息应用访问一个持久运行的助手，会话状态和工具访问都在您的硬件上集中管理。

下图提供了系统架构的高层视图（点击放大）：

![img](https://substackcdn.com/image/fetch/$s_!e6qy!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5354755-5809-446a-844a-498454484cfd_1205x1094.png)



## 通过插件实现可扩展性

OpenClaw 设计为无需修改核心代码即可扩展。插件通过四种主要方式扩展系统：

- **频道插件**：额外的消息平台（Microsoft Teams、Matrix、Mattermost 等）
- **内存插件**：替代存储后端（向量存储、知识图谱对比默认的 SQLite）
- **工具插件**：超越内置 bash、浏览器和文件操作的自定义功能
- **提供商插件**：自定义 LLM 提供商或自托管模型

插件系统位于 `extensions/`，遵循基于发现的模型。`src/plugins/loader.ts` 中的插件加载器扫描工作区包中的 `package.json` 的 `openclaw.extensions` 字段，根据声明的架构进行验证，并在配置存在时进行热加载。

![img](https://substackcdn.com/image/fetch/$s_!VBIL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc7a60780-5817-4a4d-b518-0440ce283ed9_1181x988.png)



# 核心组件

## 1. 频道适配器

每个消息平台都有自己专用的适配器。一些适配器是内置的（您可以在 `src/telegram/`、`src/discord/`、`src/slack/`、`src/imessage/` 等目录中找到它们），其他的可以通过频道插件添加。这些适配器实现相同的接口，统一处理入站和出站消息，这样 OpenClaw 的其他部分就不用关心各个平台的奇怪规矩。虽然各个平台在 API 和协议上差别很大，但每个适配器都实现了同一个通用接口，负责四个关键任务：

1. 认证
2. 解析入站消息
3. 访问控制
4. 格式化出站消息

### 认证

不同平台的认证方式不同。WhatsApp 通过 Baileys 库进行二维码配对，凭证存储在 `~/.openclaw/credentials` 中。Telegram 和 Discord 用环境变量（如 `TELEGRAM_BOT_TOKEN` 和 `DISCORD_BOT_TOKEN`）提供机器人令牌。iMessage 需要原生 macOS 集成，必须使用正确签名的 Messages 应用。

### 解析入站消息

解析入站消息要处理各平台数据格式的混乱现实。每个适配器都要提取文本、处理媒体附件（图片、音频、视频、文档）、处理反应和表情符号，还要维护线程或回复上下文。这种统一处理意味着 OpenClaw 的其他部分不需要知道消息是来自 WhatsApp 还是 Discord。

### 访问控制

访问控制是频道级别安全发生的地方。允许列表指定哪些电话号码或用户名可以与您的机器人交互；例如，`channels.whatsapp.allowFrom` 接受一个电话号码数组。DM 策略控制机器人如何处理来自未知发送者的直接消息。默认的 `"pairing"` 策略要求在处理消息之前获得批准。您可以将其设置为 `"open"` 以接受所有 DM（不推荐）或 `"disabled"` 以完全拒绝它们。组策略增加了另一层，包括提及要求和组特定的允许列表。

### 出站消息格式化

每个平台都有自己的 markdown 方言、消息大小限制和媒体上传 API。适配器处理所有这些，包括将长消息分块以遵守平台限制、适当渲染 markdown、上传媒体文件，甚至管理打字指示器和在线状态。

以下是一个 WhatsApp 配置的样子：

```
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "allowFrom": ["+1234567890"],
      "groups": {
        "*": { "requireMention": true }
      }
    }
  }
}
```

## 2. 控制接口

OpenClaw 提供了多种与 Gateway 交互的方式，每种方式适合不同的用例和偏好：

1. Web UI
2. CLI
3. macOS 应用
4. 移动端

### Web UI

Web UI 使用基于 Lit 的 Web 组件构建，直接从 Gateway 本身提供。默认情况下，将浏览器指向 `http://127.0.0.1:18789/`，您会看到一个用于聊天、配置管理、会话检查、节点管理和健康监控的仪表板。无需单独的 Web 服务器：Gateway 处理一切。

### CLI

CLI 通过 Commander.js 实现，从 `openclaw.mjs` 开始，贯穿 `src/cli/program.ts`，为您提供对所有内容的命令行控制。使用 `openclaw gateway` 启动 Gateway。使用 `openclaw agent` 直接调用 Agent。使用 `openclaw channels login` 配对 WhatsApp 或 Signal。使用 `openclaw message send` 以编程方式发送消息。使用 `openclaw doctor` 运行健康诊断。或使用 `openclaw onboard` 逐步完成引导设置。

### macOS 应用

macOS 应用采用不同的方式。用 Swift 编写，位于 `apps/macos/`，它位于您的菜单栏中，提供 Gateway 生命周期管理——触手可及的启动、停止、重启。它包括语音唤醒功能和按键即说覆盖层，在原生浏览器视图中嵌入 WebChat，甚至可以通过 SSH 控制远程 Gateway。

### 移动端

iOS 和 Android 的移动节点通过在连接握手中声明 `role: "node"` 作为 WebSocket 节点连接到 Gateway。这不仅仅用于聊天；这些应用公开了设备特定的功能，如摄像头访问、屏幕录制、位置服务和 Canvas 渲染。Gateway 可以使用 `node.invoke` 协议方法调用这些功能，将您的手机转变为 Agent 工具集的扩展。

## 3. Gateway 控制平面

Gateway 位于 `src/gateway/server.ts`，运行在 Node.js 22 或更高版本上。它使用 `ws` WebSocket 库构建，默认绑定到 `127.0.0.1:18789`，仅限本地环回以确保安全。这不仅仅是一个路由器；它是整个 OpenClaw 系统的单一事实来源。

WhatsApp（通过 Baileys 库）、Telegram（通过 grammY）、Discord（使用 discord.js）……所有这些消息平台都通过这个中心点连接。CLI 工具、Web UI 和移动应用也都作为 WebSocket 客户端来连接。当入站消息到达时，Gateway 会进行访问控制检查，确定由哪个会话来处理，然后分派给相应的 Agent。它还负责协调会话、在线状态、健康监控和定时任务等系统状态。更重要的是，它通过令牌或密码认证来保护非环回连接，并实现了直接消息的配对系统。

这里的设计原则是经过深思熟虑的。首先，每个主机只能有一个 Gateway：这可以防止 WhatsApp 会话冲突，因为 WhatsApp 协议只支持单设备。其次，整个协议都是类型化的：所有 WebSocket 帧都根据 JSON Schema 验证，而 JSON Schema 本身是从 TypeBox 定义生成的。这意味着如果客户端发送了格式错误的数据，会立即被捕获。第三，系统采用事件驱动而不是轮询：客户端订阅 `agent`、`presence`、`health` 和 `tick` 等事件，而不是不停地问”有什么新消息？”。最后，任何有副作用的操作都需要幂等键，这样重试逻辑是安全的，不会导致重复操作。本地连接（环回或同一 tailnet）可以自动批准，而远程连接需要挑战响应签名和明确批准。

## 4. Agent 运行时

Agent 运行时在 `src/agents/piembeddedrunner.ts` 中实现，是 AI 交互实际发生的地方。它使用 Pi Agent Core 库（`@mariozechner/pi-agent-core`），并遵循具有流式响应的 RPC 风格调用模型。

在高层次上，运行时每轮做四件事：（1）解析会话，（2）组装上下文，（3）在执行工具调用时流式传输模型响应，（4）将更新后的状态持久化到磁盘。

### 会话解析

当消息到达时，运行时首先确定哪个会话应该处理它。您的直接消息映射到 `main` 会话。通过频道传递的 DM 映射到 `dm:<channel>:<id>`。群聊映射到 `group:<channel>:<id>`。会话不仅仅是 ID——它们是安全边界。每种会话类型可以携带不同的权限和沙盒规则（例如：`main` 可以在主机上运行工具，而 `dm`/`group` 会话默认情况下可以更严格的允许列表和 Docker 隔离）。

### 上下文组装

一旦会话被解析，运行时就会为模型组装上下文。它通常：

- 从持久化的 JSON 会话文件加载会话历史（以便每个会话随着时间的推移保持连续性）。
- 通过读取工作区配置文件并将它们组成单个指令栈来构建动态系统提示。
- 通过语义搜索引入内存（例如，之前的相关轮次或笔记），以便模型只看到最相关的历史上下文，而不是不断增长的记录。

这个组装的上下文然后流式传输到配置的模型提供商（Anthropic Claude、OpenAI GPT、Google Gemini，甚至本地模型），这样您可以逐个令牌获得响应，而不是等待一个最终的整体响应。

### 执行循环

当模型响应时，运行时监视工具调用并拦截它们。如果模型请求一个工具（例如，运行 bash 命令、读写文件、打开浏览器并抓取网页），运行时执行该工具，可能在 Docker 沙盒中执行，具体取决于会话的沙盒策略。每个工具结果都被流式传回正在进行的模型生成，模型将其合并并继续。对话轮次完成后，运行时将更新后的会话状态（消息、工具调用/结果以及任何其他跟踪的状态）持久化到磁盘。

### 系统提示架构

OpenClaw 通过组合多个来源来构建提示：

![img](https://substackcdn.com/image/fetch/$s_!9OqU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a977528-1f60-44b6-963c-9248b7b9dd0a_1966x558.png)



**工作区配置文件**：

- `AGENTS.md` — 核心 Agent 指令（捆绑的默认项）。操作基线：Agent 被允许做什么、全局约束以及适用于所有会话的不可协商规则。
- `SOUL.md` — 个性和语气指导（可选）。声音和交互风格：Agent 如何说话和组织答案，但不是工具行为或安全边界。
- `TOOLS.md` — 用户特定的工具约定（可选）。您关于工具如何在您的环境中使用的个人笔记，而不是工具注册表。OpenClaw 自动向模型提供工具定义。

**动态上下文**（每轮组装）：

- 会话历史 — 当前对话中的近期消息
- 技能（`skills/<skill>/SKILL.md`）— 技能定义和使用说明（技能存在的必需条件）。包含使用可用工具完成特定任务的结构化指南的文件，可以认为是 playbook 或标准操作程序。
- 内存搜索 — 提供有用上下文的语义相似的过去对话

**工具定义**（自动生成）：

- 内置工具（`src/agents/pi-tools.ts`、`src/agents/openclaw-tools.ts`）— bash、浏览器、文件操作、Canvas 和核心功能
- 插件工具（通过 `api.registerTool(toolName, toolDefinition)` 注册）— 通过扩展系统添加的自定义工具

**基础系统**：

- Pi Agent Core — 来自 Agent 运行时库的基础指令

所有这些元素组合成最终的系统提示，与对话历史和当前用户消息一起发送给模型。这种可组合的方法意味着您可以通过编辑工作区中的文件来更改 Agent 的行为、风格和任务能力，而无需触及源代码，同时保持由运行时强制执行的执行、权限和沙盒。

技能发现与技能注入是一个重要的细节：OpenClaw 可以在运行时发现技能，但不会盲目地将每个技能注入每个提示。相反，运行时选择性地只注入与当前轮次相关的技能，以避免提示膨胀和模型性能下降。

# 交互与协调

## 1. Canvas 和 Agent 到 UI（A2UI）

Canvas 是一个由 Agent 驱动的可视化工作区，作为单独的服务器进程运行，默认端口为 18793。与主 Gateway 的这种分离提供了隔离（如果 Canvas 崩溃，Gateway 继续正常运行），并建立了不同的安全边界，因为 Canvas 提供 Agent 可写的内容。

流程是这样的：Agent 调用 canvas 更新方法，Canvas 服务器接收 HTML 并解析其中嵌入的任何 A2UI 属性，服务器通过 WebSocket 将此内容推送到连接的浏览器客户端，客户端将 HTML 渲染为交互式界面。

![img](https://substackcdn.com/image/fetch/$s_!uZOJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99d80f71-7a18-4854-9617-58e142334f6f_980x915.png)



A2UI 代表 Agent 到 UI，提供了一个声明式框架，Agent 生成具有特殊属性的 HTML。这些属性创建交互式元素，无需 Agent 编写 JavaScript。例如：

```
<div a2ui-component="task-list">
  <button a2ui-action="complete" a2ui-param-id="123">
    Mark Complete
  </button>
</div>
```

当用户点击该按钮时，客户端向 Canvas 服务器发送一个动作事件，服务器将其作为工具调用转发给 Agent。Agent 处理该动作，可能在其内部状态中将任务123标记为完成，并使用新状态调用 canvas 更新。服务器将此更新推送到客户端，显示自动刷新。

Canvas 支持扩展到多个平台。macOS 应用使用原生 WebKit 视图进行渲染。iOS 应用将 Canvas 包装在 Swift UI 组件中。Android 使用 WebView 进行显示。当然，Web UI 可以在浏览器标签页中打开 Canvas。

## 2. 语音唤醒和对话模式

语音唤醒在 macOS、iOS 和 Android 上可用，提供始终在线的唤醒词检测。说"Hey OpenClaw"，系统就会激活，准备好接受您的命令。或者，使用键盘快捷键进行按键即说。音频流式传输到 ElevenLabs 进行转录，Agent 处理您的请求，响应通过 ElevenLabs 文字转语音播放。

对话模式将此扩展为连续对话。您可以与 Agent 进行免提的来回对话，并具有中断检测功能，这样当 Agent 说话时您可以打断它。配置自定义唤醒短语以适合您的偏好。

## 3. 多 Agent 路由

多 Agent 路由允许您将不同的频道或群组指向完全隔离的 Agent 实例。每个实例可以有自己的工作区、自己的模型和自己的行为。

![img](https://substackcdn.com/image/fetch/$s_!MK0a!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fff9c8af5-2816-479d-9bf7-b7004909bd99_1223x497.png)

想象一下，您希望您的 Discord 服务器机器人使用 Claude Sonnet 具有乐于助人的版主个性，而您的 Telegram 支持 DM 应该使用 GPT-4 并访问不同的工具和更正式的语气。配置可以自然地表达这一点：

```
{
  "agents": {
    "mapping": {
      "group:discord:123456": {
        "workspace": "~/.openclaw/workspaces/discord-bot",
        "model": "anthropic/claude-sonnet-4-5",
        "systemPromptOverrides": {
          "SOUL.md": "You are a helpful Discord moderator..."
        }
      },
      "dm:telegram:*": {
        "workspace": "~/.openclaw/workspaces/support-agent",
        "model": "openai/gpt-4o",
        "sandbox": { "mode": "always" }
      }
    }
  }
}
```

这种路由实现了几个强大的用例。您可以为每个社区创建不同的角色，每个角色都针对该社区的文化和需求进行优化。不同的上下文可以有不同的工具访问权限：比如您的 Discord 机器人可以用浏览器自动化，但支持 Agent 可能不行。为不受信任的用户提供隔离的沙盒，即使有人想利用提示注入漏洞，造成的影响也会被限制在沙盒范围内。您可以在一个上下文中测试新的 Agent 行为，而不会影响其他已经正常工作的 Agent。

## 4. 会话工具（Agent 间通信）

会话工具使 Agent 能够在不同会话之间协调，本质上提供了 Agent 间的通信。这些工具在您希望 Agent 协作完成复杂任务或共享信息而无需在不同的聊天上下文之间手动复制粘贴时特别有用。

- `sessions_list` 工具发现活动会话。这让 Agent 可以看到有哪些其他 Agent 可用。
- `sessions_send` 工具向另一个会话发送消息。例如，您可以设置 `announceStep: "ANNOUNCE_SKIP"`，让一个 Agent 静默地将工作发送给另一个 Agent，而无需通知任一会话中的用户。
- `sessions_history` 工具从其他会话获取记录，当一个 Agent 需要从另一个 Agent 的交互中获取上下文以做出明智的决定时很有用。
- `sessions_spawn` 工具以编程方式创建新会话以委派工作。

## 5. 计划操作（Cron 作业）和外部触发器（Webhook）

Cron 作业允许您安排 Agent 操作在特定时间运行。想要每日摘要？配置一个每天早上9点触发的 cron 作业，向您的主要会话发送消息。Webhook 为 Agent 操作提供外部触发点。经典示例是电子邮件集成，Gmail 发布到 webhook 端点以触发 Agent 操作。

这两个功能都使用基于配置的设置，允许您自动执行重复任务并与外部系统集成，而无需编写自定义代码。

# 深入解析：端到端消息流

让我们追踪当您向 OpenClaw 助手发送 WhatsApp 消息时会发生什么。了解这个流程可以揭示所有组件如何协同工作。

## 阶段 1：接收

首先，Baileys 库接收来自 WhatsApp 服务器的 WebSocket 事件。`src/whatsapp/` 中的 WhatsApp 适配器解析这个事件，提取消息文本、媒体附件以及发送者的相关信息。

## 阶段 2：访问控制和路由

在消息进一步传播之前，它会到达访问控制层。此发送者在您的允许列表中吗？如果是第一次 DM，配对是否获得批准？如果任一检查失败，消息就在这里停止。

假设访问控制通过，`src/auto-reply/reply.ts` 中的自动回复系统接管。它解析哪个会话应该处理此消息。如果它直接来自您，那是具有完整功能的 `main` 会话。通过 WhatsApp 的 DM 变成 `agent:main:whatsapp:dm:+123...`。群聊变成 `agent:main:whatsapp:group:120...@g.us`。每种会话类型携带不同的权限和沙盒规则。

## 阶段 3：上下文组装

Agent 运行时的 `PiEmbeddedRunner` 从磁盘加载解析后的会话。它通过读取工作区中的 `AGENTS.md`、`SOUL.md` 和 `TOOLS.md` 来组装系统提示，注入相关技能，并查询内存搜索系统以获取语义相似的历史对话来提供上下文。

## 阶段 4：模型调用

这个丰富的上下文被打包并流式传输到您配置的模型提供商。

## 阶段 5：工具执行

当模型响应时，运行时监视工具调用。如果模型决定需要运行 bash 命令，运行时拦截该调用并执行它，如果这是非 main 会话，可能在 Docker 沙盒中执行。如果模型想要打开浏览器并抓取网站，运行时启动带有 Chrome DevTools Protocol 自动化的 Chromium。每个工具结果都被流式传回模型，模型将其合并到正在进行的响应中。

## 阶段 6：响应传递

响应块随着到达通过 Gateway 返回。WhatsApp 适配器格式化每个块，将 markdown 转换为 WhatsApp 的标记格式，并遵守消息大小限制。格式化的消息通过 Baileys 发送到 WhatsApp 的服务器，最终到达您的手机。最后，运行时将整个对话状态（您的消息、模型的响应、所有工具调用和结果）持久化到磁盘上的会话 JSON 文件中。

整个流程的延迟预算大致如下：访问控制需要不到10毫秒。从磁盘加载会话需要不到50毫秒。组装系统提示需要不到100毫秒。从模型获取第一个令牌根据网络条件需要200到500毫秒。工具执行时间不同：bash 命令通常在100毫秒内完成，而浏览器自动化可能需要1到3秒。

![img](https://substackcdn.com/image/fetch/$s_!qxRY!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc2a349c-91c9-402f-8356-16dbb2583952_1724x1327.png)



# 数据存储和状态管理

OpenClaw 将其数据和配置存储在您主目录中的多个位置。了解此布局有助于备份、迁移和故障排除。

![img](https://substackcdn.com/image/fetch/$s_!EfuY!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3387882-3f4d-4d40-9ad3-f09ae4802852_1798x690.png)



## 配置

主配置文件位于 `~/.openclaw/openclaw.json`，使用 JSON5 格式，这意味着您可以包含注释和尾随逗号——这些功能使手工编辑比严格的 JSON 更愉快。配置是分层的：环境变量覆盖配置文件值，配置文件值又覆盖内置默认值。这让您可以将敏感令牌保存在环境变量中，同时在文件中维护静态配置。

## 会话状态和压缩

OpenClaw 将每个对话作为会话文件持久化在 `~/.openclaw/sessions/` 下，捕获该会话的对话历史以及元数据和任何持久的工具状态。

会话存储为仅追加事件日志，支持分支，这使得恢复状态、检查历史以及推理给定轮次在对话树中的位置变得容易。

为保持在模型上下文限制内，OpenClaw 执行自动压缩：对话的较旧部分被总结并持久化，以便会话可以继续而不会丢失基本上下文。在压缩之前，系统可以运行一个轻量级的“内存刷新”步骤，将持久信息提升到内存文件中；这有助于防止重要细节在较旧轮次被压缩时丢失，并且当会话工作区不可写时会跳过此步骤。

会话标识符同时编码所有权和信任边界。主要操作员会话的键为 `agent:<agentId>:main`，并以完整功能运行。DM 会话使用 `agent:<agentId>:<channel>:dm:<identifier>`，群聊会话使用 `agent:<agentId>:<channel>:group:<identifier>`；两者默认都进行沙盒化，以保护主机免受不受信任的输入和多参与者对话的影响。

## 内存搜索

OpenClaw 维护您对话的可搜索内存，以便在您与 Agent 交互时提供相关上下文。当您提问时，系统会自动搜索过去的对话以找到语义相似的讨论，并将该上下文注入当前轮次，这样 Agent 可以引用您几周前谈论的内容，而无需您重复自己。

### 存储和索引

内存系统使用带有向量嵌入的 SQLite 数据库将数据存储在 `~/.openclaw/memory/<agentId>.sqlite` 中。消息到达时会自动索引。该系统使用结合向量相似性（语义匹配）和 BM25 关键词相关性（精确令牌匹配）的混合搜索，以找到最相关的过去上下文。

### 工作区中的内存文件

除了对话记录，您还可以维护 Agent 可以引用的结构化内存文件：

- `MEMORY.md` — 长期内存，包含经过整理的稳定事实。此文件仅在私有/main会话中加载以保护隐私，从不在群聊中加载，因为其他人可能会看到您的个人上下文。
- `memory/YYYY-MM-DD.md` — 每日笔记，提供每天活动和上下文的原始运行日志。

### 嵌入提供商选择

内存系统需要一个嵌入模型将文本转换为可搜索向量。OpenClaw 根据您配置的内容自动选择提供商：

1. 如果您配置了本地嵌入模型（`local.modelPath`），则使用它
2. 否则，检查是否有 OpenAI API 密钥并使用 OpenAI 嵌入
3. 否则，检查是否有 Gemini API 密钥并使用 Gemini 嵌入
4. 如果都没有，内存搜索将被禁用

### 索引管理

文件监视器监控您的内存文件，并在它们更改时自动重新索引（使用1.5秒去抖动以避免抖动）。如果您更改了嵌入提供商或模型，系统会检测到这一点并自动重新索引所有内容。您还可以使用 `experimental.sessionMemory: true` 启用实验性会话记录索引，这使得完整的对话历史可搜索，而不仅仅是内存文件。最后，如果 sqlite-vec 可用，它会加速 SQLite 内的向量搜索操作。

## 凭证

敏感的身份验证数据放在 `~/.openclaw/credentials/` 中。这包括频道身份验证令牌（如 WhatsApp 的会话数据）、Discord 等平台的 OAuth 凭证，以及频道访问所需的任何其他密钥。文件权限限制为 0600（仅所有者读写），目录自动从版本控制中排除以防止意外泄漏。

# 安全架构

OpenClaw 通过多个安全层实现深度防御。每个层提供不同类型的保护，它们共同作用以创建全面的安全态势。

## 1. 网络安全

默认情况下，Gateway 仅绑定到 `127.0.0.1`，即您的环回接口。这意味着 Gateway 仅可从本地机器访问，从不暴露到公共互联网。远程访问需要通过以下一种支持的方法进行显式配置：

```
# SSH 隧道（推荐用于 VPS）
ssh -N -L 18789:127.0.0.1:18789 user@host
```

Tailscale 集成提供两种模式。Tailscale Serve 仅提供 tailnet HTTPS 访问，您的 Gateway 通过安全加密连接在您的 Tailscale 网络上的其他设备上可用。Tailscale Funnel 进一步通过 Tailscale 的基础设施将您的 Gateway 暴露到公共互联网。

```
# Tailscale Serve（仅 tailnet HTTPS）
config: gateway.tailscale.mode: "serve"

# Tailscale Funnel（公共 HTTPS，需要密码）
config: gateway.tailscale.mode: "funnel"
       gateway.auth.mode: "password"
```

无论您是通过 SSH、Tailscale 还是直接连接，相同的 WebSocket 握手和身份验证机制都适用。

## 2. 身份验证和设备配对

**基于令牌或密码的身份验证**保护非环回绑定。在启动 Gateway 之前设置 `OPENCLAW_GATEWAY_TOKEN` 环境变量，所有 WebSocket 客户端必须在它们的 `connect.params.auth.token` 字段中包含该令牌。或者，通过配置文件中的 `gateway.auth.mode: "password"` 配置密码身份验证（Tailscale Funnel 需要）。

**基于设备的配对**增加了额外的安全层。所有 WebSocket 客户端（控制 UI、节点、CLI 工具）在 `connect` 握手中包含一个**设备身份**。设备身份由设备 ID 和加密密钥组成。当新设备连接时：

- **本地连接**（环回或同一 Tailscale 网络）可以配置为自动批准，以简化同一主机工作流程
- **远程连接**必须在握手期间签署挑战随机数以证明它们拥有有效凭证，并且需要明确批准

一旦获得批准，Gateway 为该设备颁发一个**设备令牌**，允许后续连接无需重新批准。这种基于设备的模型可以防止即使有人获取了您的身份验证令牌也能进行未经授权的访问。

**重要**：控制 UI 需要安全上下文（HTTPS 或 localhost）以使用 `crypto.subtle` 生成设备身份。如果您启用 `gateway.controlUi.allowInsecureAuth`，UI 会退回到纯 HTTP 上的仅令牌身份验证并跳过设备配对——这是安全降级。首选 HTTPS（Tailscale Serve）或在 `127.0.0.1` 上访问 UI。

## 3. 频道访问控制

**DM 配对**为直接消息提供人工审批。当 `dmPolicy="pairing"`（默认）时，未知的发送者触发特定流程：他们发送第一条消息，Gateway 会回复一个独特的配对代码而不是处理该消息。您可以通过运行 `openclaw pairing approve <channel> <code>` 批准发送者，这会将他们添加到本地允许列表存储中。只有这样，他们的消息才会到达 Agent。

**允许列表**明确指定哪些电话号码或用户名可以与您的机器人交互。对于 WhatsApp：`channels.whatsapp.allowFrom: ["+1234567890"]`。对于 Telegram：`channels.telegram.allowFrom` 使用用户名或数字 ID。

**群组策略**增加了另一层控制：

- `requireMention`：机器人在群组中仅在 @mentioned 时响应
- 群组特定的允许列表：`channels.whatsapp.groups` 在设置时成为群组允许列表（包含 `"*"` 以允许所有群组）
- 每个频道的提及模式：`messages.groupChat.mentionPatterns: ["@openclaw"]`

## 4. 工具沙盒化

OpenClaw 使用基于 Docker 的沙盒化在每个会话的基础上隔离工具执行。`main` 会话（您作为操作员的直接交互）通常在主机上本机运行工具，具有完整访问权限。相比之下，DM 和群组会话可以配置为在临时 Docker 容器内执行工具，减少不受信任输入的影响。

每个沙盒容器提供隔离的文件系统、可选的网络访问（默认通常禁用，仅在需要时明确启用）以及可配置的资源限制（CPU/内存）。容器是短命的：它们为沙盒执行而创建，然后销毁，因此即使 DM 或群组会话被胁迫执行不安全行为，“爆炸半径”也被限制在该容器内，而不是您的主机环境。

### 基于会话的安全边界

此模型很好地映射到会话信任级别：

- **Main 会话：** 操作员工作流程的完整主机访问（无 Docker 开销）。
- **DM 会话：** 默认启用沙盒（即使对已批准的联系人也是如此），用来防止误操作或提示注入。
- **群组会话：** 默认沙盒化，以防御更高风险的多参与者输入。

### 什么改变安全配置文件

有几个高层参数决定了隔离的强度：

- **什么被沙盒化：** 沙盒化适用于*工具*（例如，shell/进程/文件操作，以及可选的浏览器自动化），而不是 Gateway 本身。
- **容器粒度：** 隔离可以是每个会话（最强）、每个 Agent，或在沙盒化会话之间共享（最有效，隔离最少）。
- **主机暴露：** 工作区和绑定挂载决定容器是否从主机看不到任何东西、只读视图或读写访问。绑定挂载功能强大，但如果暴露敏感路径可能会重新引入风险。
- **网络访问：** 启用容器网络会扩展功能但也会增加风险；保持约束，除非会话真正需要它。
- **紧急出口：** 任何明确“主机级”或提升的工具绕过沙盒应该被视为仅高信任表面。

### 工具策略和优先级

工具访问由分层策略管理，有效权限从操作员到不受信任的上下文逐渐缩小。

工具策略优先级（后者覆盖前者）：

> 工具配置文件 → 提供商配置文件 → 全局策略 → 提供商策略 → Agent 策略 → 群组策略 → 沙盒策略

群组和沙盒策略可以进一步限制 Agent 可用的工具集，但它们不应被用来扩展超出早期策略允许的访问。

## 5. 提示注入防御

上下文隔离通过保持输入清晰分离来帮助防御提示注入攻击。用户消息携带源元数据，系统指令与用户提供的内容保持不同，工具结果以与用户输入区分的结构化格式包装。这种分离使攻击者更难欺骗 Agent 将不受信任的消息视为系统指令。

模型选择也起作用。OpenClaw 的文档建议对于任何可以运行工具或接触文件/网络的机器人使用最佳层、最新一代模型（并明确建议 Claude Opus 4.5 作为强默认）。如果由于成本或延迟原因使用较小的模型，文档建议通过缩小爆炸半径来补偿：首选只读工具，尽量减少文件系统暴露，应用严格的沙盒化，并执行严格的允许列表。

这些保护只有在硬控制的支持下才能生效。通过配对或允许列表锁定入站 DM，在群组中优先使用提及门控而不是在公共房间里”随时待命”，默认将链接、附件或粘贴的指令视为潜在威胁，在沙盒中运行敏感工具，同时确保密钥不会出现在 Agent 可访问的文件系统中。对于不受信任的频道，广泛启用沙盒并禁用网络工具（`web_search`、`web_fetch`、`browser`），除非输入被严格控制。沙盒是可选的，系统提示的护栏只是软性指导；真正的执行依赖于频道访问控制、工具策略限制、沙盒隔离，以及（在适用时）明确的执行批准。

# 部署架构

OpenClaw 支持四种主要部署模式，每种都针对不同的用例和环境进行了优化。架构在所有模式中保持一致；改变的是 Gateway 在哪里运行以及客户端如何连接到它。

## 本地开发（macOS/Linux）

在本地开发设置中，一切都在您的开发机器上运行。您使用 `pnpm dev` 在前台启动 Gateway，这会在代码更改时启用热重载。Gateway 绑定到 `127.0.0.1:18789`，仅可从本地机器访问。CLI 工具和 Web UI 直接连接到这个环回地址。由于环回接口被视为可信的，因此不需要身份验证，调试日志以完整详细程度运行。

此模式可视化表示如下：

![img](https://substackcdn.com/image/fetch/$s_!ofiD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb852cd4a-873d-438e-9c7a-f7eec298c44b_407x419.png)



## 生产 macOS（菜单栏应用）

macOS 生产部署使用 LaunchAgent 将 Gateway 作为后台服务运行。服务在登录时自动启动并持续运行。macOS 菜单栏应用提供用于启动、停止和重启 Gateway 的原生界面。它包括直接嵌入应用中的 WebChat UI、用于免提操作的 Voice Wake 功能，以及通过环回接口的本地访问。远程访问可通过 SSH 隧道或 Tailscale 实现。

架构如下：

![img](https://subtitlecdn.com/image/fetch/$s_!R0Bu!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b6e0a47-4882-4370-9690-b71a96f7c792_338x389.png)



此部署启用原生 macOS 集成，包括 iMessage 支持，因为 iMessage 需要在真正的 Mac 上运行。Voice Wake 与 ElevenLabs 集成进行语音识别和合成。通过 A2UI 系统的 Canvas 支持为 Agent 驱动的界面提供可视化工作区。

## Linux/VM（远程 Gateway）

在 VPS 或虚拟机上运行 OpenClaw 提供 24/7 可用性，而无需保持您的个人电脑开启。Gateway 在远程主机上作为 `systemd` 服务运行，可以保持绑定到环回（`127.0.0.1`）以确保安全。您本地的客户端（CLI 和 Web UI）通过 SSH 隧道连接，将本地端口转发到远程环回端口。

### 选项 A：SSH 隧道（推荐的默认项）

SSH 端口转发将您本地的 `127.0.0.1:18789` 映射到远程 Gateway 的 `127.0.0.1:18789`：

```
ssh -N -L 18789:127.0.0.1:18789 user@vps
```

一旦隧道建立，您本地的 CLI 和 Web UI 连接到您机器上的 `127.0.0.1:18789`，流量通过加密的 SSH 隧道透明转发到远程 Gateway：

![img](https://substackcdn.com/image/fetch/$s_!gEaj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6598bd3-6b15-4880-8688-4bf6dcc6227c_367x609.png)



### 选项 B：Tailscale Serve（仅 tailnet HTTPS）

Tailscale 为 VPS 部署提供了一种替代方法。您无需维护 SSH 隧道，而是将您的 VPS 和客户端设备加入同一 Tailscale 网络（“tailnet”）。VPS 使用 Tailscale Serve 通过 HTTPS 向 tailnet 上的其他设备公开 Gateway（例如，`https://vps.tailnet.ts`）。这提供了加密访问，无需管理 SSH 密钥或隧道进程。

![img](https://substackcdn.com/image/fetch/$s_!CaLD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F33a4546b-a7b0-45df-8b0b-b8047e25deb2_507x447.png)



## Fly.io（容器部署）

Fly.io 是一种云原生部署选项，Gateway 在由 Fly.io 管理的 Docker 容器中运行。持久卷存储 OpenClaw 状态（配置、会话、凭证），以便在部署和重启后仍然存在。Fly.io 在容器前提供托管 HTTPS 端点（带 TLS 终止），使 Gateway 可以通过公共互联网远程访问。

架构图如下：

![img](https://substackcdn.com/image/fetch/$s_!8E9t!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8737fe17-2d55-48ae-b0fd-2a7a04e448f7_409x521.png)





因为在此模式下 Gateway 可以从公共互联网访问，您应该启用强身份验证并将其视为面向互联网的服务。

# 结论

OpenClaw 代表了个人 AI 基础设施的现代方法：本地优先、自托管且完全可控。其架构通过单进程 Gateway 模型实现简单性，同时通过多 Agent 路由、工具沙盒化和可扩展插件实现强大功能。这使得它对刚刚开始开发的开发者来说易于上手，同时对要求苛刻的用例仍然可以投入生产。

围绕 Gateway 控制平面的中心辐射设计实现了跨消息平台的统一访问。无论您是从 WhatsApp、Discord 还是 iMessage 发消息，您都能获得一致的 Agent 体验。强大的安全边界保护免受不受信任输入的影响，同时不牺牲功能。具有工具执行和持久会话的 Agent 原生运行时提供了真正的智能助手体验，而不仅仅是围绕 LLM 的聊天包装器。

无论您是在笔记本电脑上运行 OpenClaw 用于个人用途，还是将其部署到 VPS 以实现 24/7 可用性，您都会获得一个可从任何地方访问的私人 AI 助手。您保留对它的运行位置、暴露方式以及数据存储和访问方式的控制权。

在 AI 能力日益被锁定在专有 API 和围墙花园背后的时代，OpenClaw 提供了一种替代方案：按您自己的方式运行助手，通过您已经使用的渠道访问，并透明地了解它的工作原理。

