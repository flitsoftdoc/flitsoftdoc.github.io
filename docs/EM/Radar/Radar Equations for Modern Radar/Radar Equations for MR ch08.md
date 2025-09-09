# 第8章 方向图-传播因子

第1章推导了自由空间探测距离的雷达方程，并指出了必须包含方向图-传播因子 $F_{t}$ 和 $F_{r}$ 的重要性，这些因子描述了发射和接收天线在仰角上的方向图及与地球表面的相互作用的影响。本章将详细讨论这些因子，包括来自地表的反射以及贴近地表路径上的衍射。为简洁起见，我们使用 $F$ 因子这一术语。

原始的雷达方程 [1, 式 (31)] 已包含 $F$ 因子，它在第二次世界大战期间被提出，并在 [2, p. 35] 中被定义为：
> 在特定条件下某点的电场幅度与自由空间条件下、发射机波束指向该点时的电场幅度之比。

现代雷达的雷达方程必须包含该因子，除非雷达波束远高于地表且其旁瓣对地表的照射可以忽略不计。$F$ 因子在不同距离范围内有不同变化规律的四个区域为：

- 近区：存在清晰直线路径，$F \approx 1$；
- 干涉区：地表反射与直射波发生干涉；
- 过渡区：干涉与衍射同时起作用；
- 衍射区：衍射效应占主导。

Blake [3, 第6章] 描述了多径（地表反射）对传播的影响，并将讨论扩展到光滑球面衍射的简单模型。我们将遵循Blake的方法，该方法给出了建模 $F$ 因子的若干复杂性和精度层次，讨论了因简化处理及对多个参数认知不完善而引入的误差，并将讨论扩展到刀口衍射，它可能会修正光滑球面模型得到的结果。

### 8.1 干涉区的 F 因子

### 8.1.1 干涉 $\boldsymbol{F}$ 因子的推导

在距离 $R$ 处、仰角为 $\theta_{t}$ 时，天线波束轴仰角为 $\theta_{b}$，自由空间中的直射波电场为

$$
\begin{equation*}
E_{d}=f\left(\theta_{t}-\theta_{b}\right) E_{0} \exp \left(-j \frac{2 \pi R}{\lambda}\right)(\mathrm{V} / \mathrm{m}) \tag{8.1}
\end{equation*}
$$

其中，$f(\theta)$ 是天线的电压方向图，$\left|E_{0}\right|=\sqrt{30 P_{t} G_{t}} / R$ 为波束轴上的电场幅值，$P_{t}$ 为发射功率（W），$G_{t}$ 为发射天线增益，$R$ 单位为米，$\lambda$ 为波长（米），$f(\theta)$ 为天线在仰角方向上的电压方向图，并在 $G_{t}$ 计算的轴上归一化为1。

在波束轴下方角度 $\psi$ 处由地表反射的波的电场为

$$
\begin{equation*}
E_{r}=\Gamma f\left(-\psi-\theta_{b}\right) E_{0} \frac{R}{R_{r}} \exp \left(-j \frac{2 \pi R_{r}}{\lambda}\right)(\mathrm{V} / \mathrm{m}) \tag{8.2}
\end{equation*}
$$

其中，$\Gamma$ 为复数表面反射系数，$R_{r}$ 为反射路径长度，$\psi$ 为反射点的掠射角。反射路径与直线路径的差为

$$
\begin{equation*}
\delta=R_{r}-R(\mathrm{~m}) \tag{8.3}
\end{equation*}
$$

通常假设 $\delta / R \ll 1, R_{r} / R \approx 1$，从而得到 [3, p. 241, 式 (6.2)]：

$$
\begin{equation*}
E_{r}=\rho f\left(-\psi-\theta_{b}\right) E_{0} \exp (-j \alpha)(\mathrm{V} / \mathrm{m}) \tag{8.4}
\end{equation*}
$$

其中 $\rho$ 为 $\Gamma$ 的幅值，$\alpha$ 为相对于直射波的反射相位角：

$$
\begin{equation*}
\alpha=\alpha_{0}+\phi=\frac{2 \pi \delta}{\lambda}+\phi(\mathrm{rad}) \tag{8.5}
\end{equation*}
$$

这里 $\phi$ 为 $\Gamma$ 的相位角，$\delta$ 为反射波的额外路径长度。

直射波与反射波矢量和的幅值为 [3, p. 241, 式 (6.3)]：

$$
\begin{equation*}
|E|=\left|E_{d}+E_{r}\right|=\left|E_{0}\left[f\left(\theta_{t}-\theta_{b}\right)+\rho f\left(-\psi-\theta_{b}\right) \exp (-j \alpha)\right]\right|(\mathrm{V} / \mathrm{m}) \tag{8.6}
\end{equation*}
$$

由反射信号的相长与相消干涉产生的 $F$ 因子定义为 [3, p. 241, 式 (6.4)]：

$$
\begin{equation*}
F_{i}=\left|f\left(\theta_{t}-\theta_{b}\right)+\rho f\left(-\psi-\theta_{b}\right) \exp (-j \alpha)\right| \tag{8.7}
\end{equation*}
$$

下标 $i$ 表示该因子源自干涉现象。$F_{i}$ 使用绝对值，因为合成电场的相位不会影响雷达方程的结果。

当同一天线用于发射和接收时，出射和入射路径采用相同的函数 $f$，从而得到一个单一的 $F$ 因子。在其他情况下，需要分别计算 $F_{i t}$ 和 $F_{i r}$，并且

$$
\begin{equation*}
F_{i} \equiv \sqrt{F_{i t} F_{i r}} \tag{8.8}
\end{equation*}
$$

Blake 指出，天线方向图的相位差可以并入 $\alpha$ 中，从而 (8.7) 式可改写为除相位角 $\alpha$ 外其余项均为实数的形式：

$$
\begin{align*}
F_{i} & =f\left(\theta_{t}-\theta_{b}\right)\left|1+\rho \frac{f\left(-\psi-\theta_{b}\right)}{f\left(\theta_{t}-\theta_{b}\right)} \exp (-j \alpha)\right|  \tag{8.9}\\
& =f\left(\theta_{t}-\theta_{b}\right) \sqrt{1+x^{2}+2 x \cos \alpha}
\end{align*}
$$

其中

$$
\begin{equation*}
x=\rho \frac{f\left(-\psi-\theta_{b}\right)}{f\left(\theta_{t}-\theta_{b}\right)} \tag{8.10}
\end{equation*}
$$

该计算需要已知发射与接收天线的仰角方向图、路径差 $\delta$ 以及复数表面反射系数 $\Gamma$。这些参数将在本章后续部分讨论。大多数常规雷达使用单一天线，只需一次计算 $F$。在相控阵雷达中，即使由同一个阵列生成，发射与接收方向图通常也不同，因此需要分别计算 $F_{i t}$ 和 $F_{i r}$。


### 8.1.2 $\boldsymbol{F}$ 因子的应用

在Blake图（图1.1或图1.2）中，$F$ 因子作为对自由空间距离 $R_{0}$ 的修正应用，以获得 $R^{\prime}=R_{0} F_{i}$。随后根据 $R^{\prime}$ 应用大气衰减因子。图表步骤 $9-13$ 的迭代过程可对任意指定目标仰角得到准确结果。然后可通过将距离按 $F$ 因子缩放，并根据需要修正仰角和距离对衰减的变化，绘制距离-高度-角度（覆盖）图。

当仰角 $\theta_{t} \ll 1$ 时，$\delta \approx 2 h_{r} \sin \theta_{t}$，并且对于水平极化雷达，反射系数（见第8.3节）为 $\Gamma \approx-1.00$，因此

$$
\cos \alpha=\cos \left[\left(\frac{4 \pi h_{r}}{\lambda} \sin \theta_{t}-\pi\right)\right]=-\cos \left(\frac{4 \pi h_{r}}{\lambda} \sin \theta_{t}\right) \approx-\cos \frac{4 \pi h_{r} \theta_{t}}{\lambda}
$$

并且

$$
x \approx \frac{f\left(-\psi-\theta_{b}\right)}{f\left(\theta_{t}-\theta_{b}\right)} \approx 1
$$

在这种情况下，(8.9) 式变为

$$
\begin{equation*}
F_{i} \approx f\left(\theta_{t}-\theta_{b}\right) \sqrt{2-2 \cos \frac{4 \pi h_{r} \theta_{t}}{\lambda}}=2\left|f\left(\theta_{t}-\theta_{b}\right) \sin \left(\frac{2 \pi h_{r} \theta_{t}}{\lambda}\right)\right| \tag{8.11}
\end{equation*}
$$

由此得到的覆盖图在以下仰角处出现零点和峰值：

$$
\begin{align*}
& \theta_{\text {null }} \approx \sin \theta_{\text {null }}=\frac{(i-1) \lambda}{2 h_{r}}, \quad i=1,2,3 \ldots  \tag{8.12}\\
& \theta_{\text {peak }} \approx \sin \theta_{\text {peak }}=\left(\frac{2 i-1}{2}\right) \frac{\lambda}{2 h_{r}}, \quad i=1,2,3 \ldots \tag{8.13}
\end{align*}
$$

其中 $i=1$ 对应于地平线处的零点和第一反射瓣。

例如，考虑一部水平极化的S波段雷达，其仰角波束宽度 $\theta_{e}=6^{\circ}$，在海面上方 $h_{r}=10 \mathrm{~m}$ 处工作。仰角波束的轴线通常设定为在地平线上方 $\theta_{b} \approx \theta_{e} / 3$。图8.1所示的 $F$ 因子下部瓣近似为正弦形状，与 (8.11) 式预测一致。应用到雷达方程时，在最低瓣中心的距离约为该仰角自由空间距离的两倍。对于零轴倾斜，地平线上 $f(\theta)=1$，第一瓣的幅度应为 $F_{i}=2.0$，而不是图中所示的略低值。如果将仰角坐标转换为给定距离下的目标高度，图中将显示雷达-目标路径的高度增益因子。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-294.jpg?height=806&width=867&top_left_y=265&top_left_x=305){width="400"} 

图8.1 海面上典型搜索雷达的干涉方向图-传播因子（实线），天线电压方向图 $f\left(\theta_{t}\right)$（虚线）和 $f\left(-\theta_{r}\right)$（点划线）。

基于计算接收信号和所需信号能量随距离的变化并确定满足要求的最大距离的计算机方法，用于求解探测距离。雷达方程中与距离相关的参数，包括大气衰减和 $F$ 因子，基于假定的目标轨迹在每个距离上计算。如果该轨迹保持相对于雷达的恒定仰角，则只要结果探测距离足够大以保持恒定路径差 $\delta$（见第8.2节），则可能无需重复计算 $F$ 因子。

### 8.2 射线路径的几何模型

为了确定路径差 $\delta$ 及需计算反射系数的掠射角 $\psi$，需要建立雷达和目标在地球表面上的几何模型。根据感兴趣的目标距离范围和所需计算精度，可以采用多种建模方法：从平地远距离目标模型开始，进而扩展到任意距离的目标，最后发展为越来越复杂的球面地球模型。

### 8.2.1 方法1：平地远距离目标近似

其几何如图8.2所示。对于该简单模型，输入参数为雷达波长 $\lambda$、天线高度 $h_{r}$（高于地表）以及目标仰角 $\theta_{t}$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-295.jpg?height=524&width=1001&top_left_y=698&top_left_x=259){width="400"} 

图8.2 平地远距离目标几何，箭头绘制为接收情况。

反射波到达雷达站时与直射波平行，可以视为通过镜面反射点的直线，指向位于地表以下 $h_{r}$ 处的镜像天线。该反射波相对于地表的掠射角 $\psi$ 等于仰角 $\theta_{t}$，路径差为

$$
\begin{equation*}
\delta_{1}=2 h_{r} \sin \theta_{t} \quad(\mathrm{~m}) \tag{8.14}
\end{equation*}
$$

在距离 $R$ 处的目标高度为

$$
\begin{equation*}
h_{t 1}=h_{r}+R \sin \theta_{t} \quad(\mathrm{~m}) \tag{8.15}
\end{equation*}
$$

路径差为

$$
\begin{equation*}
\delta_{1}=\frac{2 h_{r} h_{t 1}}{R}(\mathrm{~m}) \tag{8.16}
\end{equation*}
$$

在将该近似与其他近似及后续章节中描述的精确方法进行比较时，假定以下参数：

$$
h_{r}=10 \mathrm{~m}, \lambda=0.1 \mathrm{~m}, \text { and } \theta_{t}=2^{\circ} .
$$

这就是图8.1中作为示例的情况。在 $2^{\circ}$ 仰角时，反射系数引入的相位反转使得反射波相对于直射波相移 $\pi$ 弧度，从而在该仰角附近出现深零点。

### 8.2.2 方法2：平地任意距离目标近似

放宽目标在足够远距离的假设，使得到达雷达站时的射线可近似为平行。其几何如图8.3所示。目标在距离 $R$ 和仰角 $\theta_{t}$ 处，在直角坐标系中可由高度 $h_{t 1}$ 和地面距离 $G$ 表示：

$$
\begin{align*}
& h_{t 1}=h_{r}+R \sin \theta_{t}(\mathrm{~m}) \\
& G=R \cos \theta_{t}=\sqrt{R^{2}-\left(h_{t 1}-h_{r}\right)^{2}} \tag{8.17}
\end{align*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-296.jpg?height=579&width=1128&top_left_y=1146&top_left_x=197){width="400"} 

图8.3 平地任意距离目标几何。

反射波到达并从平地表面反射，其掠射角 $\psi$ 大于目标的仰角：

$$
\begin{equation*}
\psi=\sin ^{-1} \frac{h_{t 1}+h_{r}}{R} \quad(\mathrm{rad}) \tag{8.18}
\end{equation*}
$$

反射路径长度为两个段的和，$R_{r}=R_{1}+R_{2}$，其中 $R_{2}$ 是从反射点到天线的距离，同时也是到镜像天线的距离：

$$
\begin{equation*}
R_{r}=\sqrt{G^{2}+\left(h_{t 1}+h_{r}\right)^{2}}=\sqrt{R^{2}+4 h_{t 1} h_{r}} \tag{8.19}
\end{equation*}
$$

路径差为

$$
\begin{equation*}
\delta_{2}=R_{r}-R=R\left(\sqrt{1+\frac{4 h_{t} h_{r}}{R^{2}}}-1\right)=R\left(\sqrt{1+\frac{2 \delta_{1}}{R}}-1\right) \tag{8.20}
\end{equation*}
$$

对 $2 \delta_{1} / R \ll 1$ 展开根号并保留二阶项，得到

$$
\begin{equation*}
\delta_{2}=R\left[\sqrt{1+\frac{4 h_{t}^{\prime} h_{r}}{R^{2}}}\right] \approx \delta_{1}\left(1-\frac{h_{r}}{R} \sin \theta_{t}\right)=\delta_{1}\left(1-\frac{\delta_{1}}{2 R}\right) \tag{8.21}
\end{equation*}
$$

其中 $\delta_{1}$ 为远距离目标近似的结果 (8.16)。在 $2^{\circ}$ 仰角时，包含 (8.21) 中二阶项使路径差减小约 $10^{5}$ 分之一，但在较大仰角时可能显著。该情况下的 $F$ 因子图与图8.1无法区分。

Blake [3, p. 245, 式 (6.17)-(6.19)] 使用的近似导致

$$
\begin{equation*}
\delta \approx \frac{2 h_{r} h_{t 1}}{G}=\frac{\delta_{1}}{\cos \theta_{t}} \tag{8.22}
\end{equation*}
$$

该近似预测的路径长度在 $2^{\circ}$ 时的误差为 $6 \times 10^{-4}$。


### 8.2.3 方法3：球面地球的一阶近似

对于有效半径为 $k_{e} a_{e}$ 的球面地球，一种简单的一阶修正方法是使用相对于雷达站点处地球切平面的目标高度 $h_{t 1}$，如图8.4所示。

目标距离处的地表低于切平面的量为

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-298.jpg?height=599&width=1146&top_left_y=265&top_left_x=177){width="400"} 

图8.4 球面地球的一阶修正。

$$
\begin{equation*}
\delta_{h}=\frac{G^{2}}{2 k_{e} a_{e}} \quad(\mathrm{~m}) \tag{8.23}
\end{equation*}
$$

其中 $k_{e} a_{e}$ 为地球的有效半径。在此以及后续推导中，常数 $k_{e} \approx 4 / 3$ 与实际半径 $a_{e}$ 同时出现，使得结果依赖于对流层折射率梯度（见第7.1.4节）。随着目标高度的增加，这种建模对流层折射效应的方法精度下降，从而在几何模型中引入误差。然而，该结果仍可用于比较不同方法的相对精度，需注意折射建模误差可能超过几何近似误差。Blake提出了一种使用指数参考大气的方法来关联 $R, h_{t}$ 和 $\theta_{t}$，但他认为在 $F$ 因子的计算中没有必要使用，而是基于有效半径 $k_{e} a_{e}$。

目标相对于切平面的高度为

$$
\begin{equation*}
h_{t 1}=h_{t}-\delta_{h}=h_{t}-\frac{G^{2}}{2 k_{e} a_{e}} \tag{8.24}
\end{equation*}
$$

该方法假设反射点足够靠近雷达，可以建模为位于雷达处地表切平面上。这允许通过在 (8.18) 式中用 $h_{t 1}$ 替换 $h_{t}$ 来计算掠射角 $\psi$：

$$
\begin{equation*}
\psi=\sin ^{-1} \frac{h_{t 1}+h_{r}}{R} \quad(\mathrm{rad}) \tag{8.25}
\end{equation*}
$$

目标仰角减小为

$$
\begin{equation*}
\theta_{t}=\sin ^{-1} \frac{h_{t 1}-h_{r}}{R} \quad(\mathrm{rad}) \tag{8.26}
\end{equation*}
$$

将 $h_{t 1}$ 代入 (8.16) 得到路径差 $\delta_{1}^{\prime}$。类似于 (8.20)，可得

$$
\begin{equation*}
\delta_{3}=R\left[\sqrt{1+\frac{2 \delta_{1}^{\prime}}{R}}-1\right] \approx \delta_{1}^{\prime}\left(1-\frac{\delta_{1}^{\prime}}{2 R}\right) \quad(\mathrm{m}) \tag{8.27}
\end{equation*}
$$

---

### 8.2.4 方法4：球面地球远距离目标近似

Blake [3, pp. 249-253] 推导了在球面地球上，以仰角 $\theta_{t}$ 观测远距离目标时路径差和掠射角的表达式。几何如图8.5所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-299.jpg?height=667&width=997&top_left_y=1168&top_left_x=263){width="400"} 

图8.5 球面地球远距离目标的几何。

Blake 给出了由反射点地面距离所对的地心角 [3, p. 252, 式 (6.40)]：

$$
\begin{equation*}
\gamma=\frac{2 h_{r} / 3 k_{e} a_{e}}{\sqrt{\left(\tan \theta_{t} / 3\right)^{2}+2 h_{r} / 3 k_{e} a_{e}}+\tan \left(\theta_{t} / 3\right)} \quad(\mathrm{rad}) \tag{8.28}
\end{equation*}
$$

地面距离和掠射角为：

$$
\begin{align*}
& G_{1}=k_{e} a_{e} \gamma(\mathrm{~m})  \tag{8.29}\\
& \psi=\theta_{t}+\gamma(\mathrm{rad}) \tag{8.30}
\end{align*}
$$

路径差为

$$
\begin{equation*}
\delta_{4}=R_{2}-R_{1}(\mathrm{~m}) \tag{8.31}
\end{equation*}
$$

其中各段距离为：

$$
\begin{gather*}
R_{1}=R_{2} \cos \left(2 \theta_{t}+2 \gamma\right)(\mathrm{m})  \tag{8.32}\\
R_{2}=\sqrt{h_{r}^{2}+k_{e} a_{e}\left(k_{e} a_{e}+h_{r}\right) \gamma^{2}}(\mathrm{~m}) \tag{8.33}
\end{gather*}
$$

其结果为 [3, p. 252, 式 (6.44)、(6.45)]：

$$
\begin{equation*}
\delta_{4}=2 R_{2} \sin ^{2}\left(\theta_{t}+\gamma\right)=2 \sqrt{h_{r}^{2}+k_{e} a_{e}\left(k_{e} a_{e}+h_{r}\right) \gamma^{2}} \sin ^{2}\left(\theta_{t}+\gamma\right) \quad(\mathrm{m}) \tag{8.34}
\end{equation*}
$$

方法4不需要目标高度或距离作为输入，因此对目标在恒定仰角线上的位置不敏感。

---

### 8.2.5 方法5：球面地球任意距离目标近似

一般情况的几何如图8.6所示。Fishback 在 [2, p. 113] 中给出了三次方程的解，用于在已知高度 $h_{t}, h_{r}$ 和地面距离 $G=G_{1}+G_{2}$ 时求解路径长度和掠射角。为此，定义两个中间参数：

$$
\begin{equation*}
p=\frac{2}{\sqrt{3}} \sqrt{k_{e} a_{e}\left(h_{t}+h_{r}\right)+\left(\frac{G}{2}\right)^{2}} \quad(\mathrm{~m}) \tag{8.35}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-301.jpg?height=693&width=987&top_left_y=276&top_left_x=257){width="400"}

图8.6 球面地球任意距离目标的几何。

$$
\begin{equation*}
\Phi=\cos ^{-1}\left[\frac{2 k_{e} a_{e} G\left(h_{t}-h_{r}\right)}{p^{3}}\right] \text { (rad) } \tag{8.36}
\end{equation*}
$$

利用这些参数，并假设掠射角较小，反射点的地面距离为 ${ }^{1}$

$$
\begin{equation*}
G_{1}=\frac{G}{2}-p \cos \frac{\Phi+\pi}{3}(\mathrm{~m}) \tag{8.37}
\end{equation*}
$$

相对于反射点处切平面的高度为：

$$
\begin{align*}
& h_{r}^{\prime}=h_{r}-\frac{G_{1}^{2}}{2 k_{e} a_{e}} \quad(\mathrm{~m})  \tag{8.38}\\
& h_{t}^{\prime}=h_{r} \frac{G-G_{1}}{G_{1}} \quad(\mathrm{~m})
\end{align*}
$$

路径差、掠射角和目标仰角的近似为：

$$
\begin{gather*}
\delta_{5}=\frac{2 h_{r}^{\prime} h_{t}^{\prime}}{G}  \tag{8.39}\\
\psi=\tan ^{-1} \frac{h_{r}^{\prime}}{G_{1}}  \tag{8.40}\\
\theta_{t}=\frac{h_{t}^{\prime}-h_{r}^{\prime}}{G}-\frac{G}{2 k_{e} a_{e}}(\mathrm{rad}) \tag{8.41}
\end{gather*}
$$

若已知斜距 $R$，则地面距离 $G$ 可由Blake的表达式 [3, p. 256, 式 (6.57)、(6.58)] 得到：

$$
\begin{equation*}
G=2 k_{e} a_{e} \sin ^{-1} \sqrt{\frac{R^{2}-\left(h_{t}-h_{r}\right)^{2}}{4\left(k_{e} a_{e}+h_{t}\right)\left(k_{e} a_{e}+h_{r}\right)}} \approx \sqrt{\frac{R^{2}-\left(h_{t}-h_{r}\right)^{2}}{1+\left(h_{t}+h_{r}\right) / k_{e} a_{e}}} \tag{8.42}
\end{equation*}
$$

该近似在实际雷达情形下的精度可达 $10^{-4}$。

> ${ }^{1}$ [2, p. 113] 中存在印刷错误，将 (8.37) 式第二项中的负号误写为正号。

---

### 8.2.6 方法6：球面地球任意距离目标的精确表达式

Blake 提出了一种避免 $\psi \ll 1$ 限制的方法。使用Fishback的三次方程解，从 (8.37) 得到第一段地面距离 $G_{1}$。利用 $G_{1}$ 和其他已知参数，反射路径的两段为：

$$
\begin{align*}
R_{1} & =\sqrt{k_{e}^{2} a_{a}^{2}+\left(k_{e} a_{e}+h_{r}\right)^{2}-2 k_{e} a_{e}\left(k_{e} a_{e}+h_{r}\right) \cos \left(G_{1} / k_{e} a_{e}\right)}  \tag{8.43}\\
& =\sqrt{h_{r}^{2}+4 k_{e} a_{e}\left(k_{e} a_{e}+h_{r}\right) \sin ^{2}\left(G_{1} / 2 k_{e} a_{e}\right)}(\mathrm{m}) \\
R_{2} & =\sqrt{k_{e}^{2} a_{a}^{2}+\left(k_{e} a_{e}+h_{t}\right)^{2}-2 k_{e} a_{e}\left(k_{e} a_{e}+h_{t}\right) \cos \left(G_{2} / k_{e} a_{e}\right)}  \tag{8.44}\\
& =\sqrt{h_{t}^{2}+4 k_{e} a_{e}\left(k_{e} a_{e}+h_{t}\right) \sin ^{2}\left(G_{2} / 2 k_{e} a_{e}\right)}(\mathrm{m})
\end{align*}
$$

其中 $G_{2}=G-G_{1}$。若已知地面距离 $G$ 而非 $R$，则 $R$ 可表示为：

$$
\begin{equation*}
R=\sqrt{\left(h_{t}-h_{r}\right)^{2}+4\left(k_{e} a_{e}+h_{r}\right)\left(k_{e} a_{e}+h_{t}\right) \sin ^{2}\left(G / 2 k_{e} a_{e}\right)} \tag{8.45}
\end{equation*}
$$

路径差为：

$$
\begin{equation*}
\delta_{6}=R_{1}+R_{2}-R(\mathrm{~m}) \tag{8.46}
\end{equation*}
$$

仰角 $\theta_{t}$ 和掠射角 $\psi$ 为：

$$
\begin{align*}
\theta_{t} & =\sin ^{-1} \frac{2 k_{e} a_{e}\left(h_{t}-h_{r}\right)+h_{t}^{2}-h_{r}^{2}-R^{2}}{2\left(k_{e} a_{e}+h_{r}\right) R}  \tag{8.47}\\
& \approx \sin ^{-1}\left(\frac{h_{t}-h_{r}}{R}-\frac{R}{2 k_{e} a_{e}}\right)(\mathrm{rad}) \\
& \psi=\sin ^{-1} \frac{2 k_{e} a_{e} h_{r}+h_{r}^{2}+R_{1}^{2}}{2\left(k_{e} a_{e}+h_{r}\right) R_{1}}(\mathrm{rad}) \tag{8.48}
\end{align*}
$$

---

### 8.2.7 各近似方法的比较

表8.1比较了六种方法的结果，所有数值均以仰角 $\theta_{t}=2^{\circ}$ 计算。考虑了两种天线高度和两种距离。对于低架设雷达（$h_{r}=10\ \mathrm{m}$），结果之间的差异可以忽略不计，唯一例外是球面地球的Fishback解在使用与更近似方法相同目标高度时，给出了较低的仰角。在典型陆地表面上，地表变化以及折射率剖面的不确定性可能掩盖几何模型之间的差异。

在较高天线高度（$h_{r}=100 \mathrm{~m}$）下，方法1未能捕捉掠射角与目标仰角之间的偏差，该偏差在这些例子中约为 $0.1^{\circ}$。它也低估了路径差，正如远距离目标近似一样。

Fishback方法和Blake修正对于现代计算机来说并不算复杂，可以被纳入雷达方程的求解程序。对于除高空外的地面雷达，任意一种近似方法都可使用，而不会在掠射角和路径差上引入较大误差。

表8.1

| 输入 |  | 方法 | 输出 |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $h_{a} \mathrm{~m}$ | $R \mathrm{~km}$ |  | $h_{t} \mathrm{~m}$ | $\Psi^{\circ}$ | $\delta \mathrm{m}$ | $\alpha \mathrm{rad}$ |
|  | Any | 1. 平地，远距离目标 |  | 2.00 | 0.698 | 43.86 |
|  |  | 2. 平地，任意距离 | 3,500 | 2.01 | 0.700 | 43.98 |
|  |  | 3. 球面地球，一阶 | 3,500 | 2.01 | 0.700 | 43.98 |
|  | 100 | 4. 球面地球，远距离目标 | 3,500 | 2.00 | 0.699 | 43.89 |
|  |  | 5. 球面地球，Fishback | 4,084 | 2.01 | 0.701 | 44.01 |
|  |  | 6. 球面地球，Blake | 4,088 | 2.01 | 0.701 | 44.01 |
| 10 | Any | 1. 平地，远距离目标 |  | 2.00 | 0.698 | 43.86 |
|  |  | 2. 平地，任意距离 | 708 | 2.06 | 0.708 | 44.48 |
|  |  | 3. 球面地球，一阶 | 708 | 2.06 | 0.708 | 44.48 |
|  | 20 | 4. 球面地球，远距离目标 | 708 | 2.00 | 0.699 | 43.89 |
|  |  | 5. 球面地球，Fishback | 731 | 2.06 | 0.708 | 44.51 |
|  |  | 6. 球面地球，Blake | 732 | 2.06 | 0.708 | 44.51 |
| 100 | Any | 1. 平地，远距离目标 |  | 2.00 | 6.98 | 438.56 |
|  |  | 2. 平地，任意距离 | 3,590 | 2.11 | 7.18 | 451.12 |
|  |  | 3. 球面地球，一阶 | 3,590 | 2.11 | 7.18 | 451.12 |
|  | 100 | 4. 球面地球，远距离目标 | 3,500 | 2.02 | 7.02 | 440.83 |
|  |  | 5. 球面地球，Fishback | 4,174 | 2.13 | 7.21 | 453.21 |
|  |  | 6. 球面地球，Blake | 4,177 | 2.13 | 7.21 | 453.09 |



### 8.3 反射系数

在已经确定了表达式 (8.9) 中 $f\left(\theta_{t}\right)$ 和 $f\left(\theta_{r}\right)$ 所需的角度、决定该式中 $\alpha$ 的路径差以及地表的掠射角 $\psi$ 之后，下一步是计算地表反射系数的幅度 $\rho$ 和相位 $\phi$。其幅度由三部分乘积组成：

$$
\begin{equation*}
\rho=\rho_{0} \rho_{s} \rho_{v} \tag{8.49}
\end{equation*}
$$

其中  
$\rho_{0}=|\Gamma|=$ Fresnel反射系数的幅度；  
$\rho_{s}=$ 镜面散射系数；  
$\rho_{v}=$ 陆地表面的植被因子。

---

### 8.3.1 Fresnel反射系数

Fresnel反射系数 $\Gamma$ 描述了来自光滑表面的反射场与入射场的比值。其值在水平极化和垂直极化时不同：

$$
\begin{gather*}
\Gamma_{h}=\frac{\sin \psi-\sqrt{\varepsilon-\cos ^{2} \psi}}{\sin \psi+\sqrt{\varepsilon-\cos ^{2} \psi}}  \tag{8.50}\\
\Gamma_{v}=\frac{\varepsilon \sin \psi-\sqrt{\varepsilon-\cos ^{2} \psi}}{\varepsilon \sin \psi+\sqrt{\varepsilon-\cos ^{2} \psi}} \tag{8.51}
\end{gather*}
$$

其中  
$\Gamma_{h}=$ 水平极化反射系数；  
$\Gamma_{v}=$ 垂直极化反射系数；  
$\psi=$ 掠射角；  
$\varepsilon=\varepsilon_{r}+j \varepsilon_{i}=$ 表面材料的复介电常数；  
$\varepsilon_{r}=$ 相对介电常数。

介电常数的虚部为

$$
\begin{equation*}
\varepsilon_{i}=-j 60 \lambda \sigma_{e} \tag{8.52}
\end{equation*}
$$

其中  
$\lambda=$ 波长（m）；  
$\sigma_{e}=$ 电导率（西门子/米）。

对于在海军和海洋雷达中最为重要的海水，Blake 使用了一篇早期文献 [4] 的数据，该文给出了介电常数实部和虚部的如下表达式 [3, p. 260, 式 (6.70)、(6.71)]：

$$
\begin{align*}
& \varepsilon_{r}=\frac{\varepsilon_{s}-\varepsilon_{0}}{1+x^{2}}+\varepsilon_{0} \\
& \varepsilon_{i}=\frac{\left(\varepsilon_{s}-\varepsilon_{0}\right) x}{1+x^{2}}+\frac{2 \sigma_{i}}{f} \tag{8.53}
\end{align*}
$$

其中  

$\begin{aligned}
x & =2 \pi f \tau ; \\
\tau & =\text{弛豫常数}=12.1 \times 10^{-12} \text{，当 } T=10^{\circ} \mathrm{C}, \text{ 或 } 9.2 \times 10^{-12} \text{，当 } T=20^{\circ} \mathrm{C}; \\
\varepsilon_{s} & =\text{静态介电常数}=72.2 \text{，当 } T=10^{\circ} \mathrm{C}, \text{ 或 } 69.1 \text{，当 } T=20^{\circ} \mathrm{C};\\
\varepsilon_{0} & =4.9 ; \\
\sigma_{i} & =\text{离子电导率}=3.6 \times 10^{10} \text{，当 } T=10^{\circ} \mathrm{C}, \text{ 或 } 4.7 \times 10^{10} \text{，当 } T=20^{\circ} \mathrm{C}; \\
f & =\text{频率，Hz}.
\end{aligned}$

这些公式给出了盐水在不同频率下的取值，如图8.7所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-306.jpg?height=421&width=1164&top_left_y=588&top_left_x=175){width="400"}   

图8.7 盐水介电常数组成部分：$T=10^{\circ} \mathrm{C}$（实线）；$T=20^{\circ} \mathrm{C}$（虚线）。

所得的反射系数在X波段和VHF下，对不同表面的结果绘制在图8.8和图8.9中（见表8.2），其中加入了淡水和陆地表面的数据。陆地表面数据来自 [5]。在微波波段，盐水的曲线与淡水的曲线相近，但在波长增加时二者分离。

雪和冰的系数未绘制，其结果与干土基本一致。

表8.2 典型表面的电气特性

| 材料 | $\varepsilon_{r} (\lambda=0.03 \mathrm{~m})$ | $\varepsilon_{r} (\lambda=1 \mathrm{~m})$ | $\sigma_{e}$ (siemens/m, $\lambda=0.03 \mathrm{~m}$) | $\sigma_{e}$ (siemens/m, $\lambda=1 \mathrm{~m}$) |
| :--- | :--- | :--- | :--- | :--- |
| 淡水 | 81 | 65 | 0.7 | 15 |
| 盐水 | 48 | 72 | 22 | 4 |
| 好土壤（湿） | 13 | 15 | 3 | 0.05 |
| 平均土壤 | 7 | 8 | 1 | 0.02 |
| 差土壤（干） | 3.5 | 4 | 0.3 | 0.005 |
| 雪、冰 | 3 | 3 | 0.001 | 0.001 |

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-307.jpg?height=1421&width=1001&top_left_y=265&top_left_x=237){width="400"}   

图8.8 垂直极化反射系数的幅度和相位。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-308.jpg?height=1366&width=1025&top_left_y=265&top_left_x=237){width="400"}   

图8.9 水平极化反射系数的幅度和相位。

对于垂直极化，幅度 $\rho_{0 v}$ 在伪布儒斯特角 $\psi_{B}$ 处降至最小，此时相位在从接近 $180^{\circ}$ 到 $0^{\circ}$ 的过程中经过 $90^{\circ}$。该角的近似表达式为：

$$
\begin{equation*}
\psi_{B}=\sin ^{-1} \frac{1}{\sqrt{\varepsilon_{r}+1}}, \quad \frac{\varepsilon_{r}}{\varepsilon_{i}}>2 \tag{8.54}
\end{equation*}
$$

该近似在长波长下对盐水失效，但对其他情况提供了良好的估计。对于水平极化，当掠射角低于约 $10^{\circ}$ 时，幅度 $\rho_{0 h}$ 保持接近1，相位角在所有掠射角下均保持接近 $180^{\circ}$。在这种情况下，$F$ 因子的近似式 (8.11) 适用。


圆极化的反射系数由Blake讨论 [3, p. 264]。定义与直射波同旋向的圆极化反射系数为 $\Gamma_{c s}$，其形式为

$$
\begin{equation*}
\Gamma_{c s}=\frac{1}{2}\left(\Gamma_{v}+\Gamma_{h}\right) \tag{8.55}
\end{equation*}
$$

而对于反向旋向的圆极化反射系数 $\Gamma_{o s}$，则为

$$
\begin{equation*}
\Gamma_{o s}=\frac{1}{2}\left(\Gamma_{v}-\Gamma_{h}\right) \tag{8.56}
\end{equation*}
$$

---

### 8.3.2 粗糙表面的反射

对于光滑表面，表面反射系数的幅度等于Fresnel系数；而对于粗糙表面，该幅度因镜面散射系数而减小 [6, p. 316]：

$$
\begin{equation*}
\rho_{s}=\exp \left[-\frac{1}{2}\left(\frac{4 \pi \sigma_{h}}{\lambda} \sin \psi\right)^{2}\right] \tag{8.57}
\end{equation*}
$$

其中 $\sigma_{h}$ 为表面相对于平均面的均方根高度偏差。所用的 $\sigma_{h}$ 为第一Fresnel区内的值，该区域围绕着位于距离天线地面距离 $G_{1}$ 的镜面反射点（见图8.5）。该区域定义为：反射波延迟相对于镜面点的延迟偏差小于 $\lambda/2$ 的椭圆形表面区域 [2, pp. 412-418]。

常用的Rayleigh粗糙度判据用来描述低于某一高度 $h_{s}$ 时可视为“光滑”的表面不规则度：

$$
\begin{equation*}
h_{s}=\frac{\lambda}{8 \sin \psi} \tag{8.58}
\end{equation*}
$$

令 $\sigma_{h}=h_{s} / 2$，则

$$
\rho_{s}=\exp \left[-\frac{1}{2}\left(\frac{2 \pi h_{s}}{\lambda} \sin \psi\right)^{2}\right]=\exp \left(-\frac{\pi^{2}}{32}\right)=0.735
$$

当满足Rayleigh判据时，镜面反射中的功率分量为 $\rho_{s}^{2}=0.54$（使用 $2\sigma$ 的 $h_{s}$ 值）。其他将 $\sigma_{h}$ 与 $h$ 关联的尺度因子会给出略有不同的结果，但此处所用方法能提供合理的物理解释，并且基于高度偏差的高斯分布的 (8.57) 式也被广泛采用。掠射角 $\psi$ 可由第8.2节的几何模型求得。

Blake在 [7] 中评论了某些实验数据与 (8.57) 式在较大归一化粗糙度 $x=\left(\sigma_{h} / \lambda\right) \sin \psi$ 时的偏离，此时 $\rho_{s} \rightarrow 0$。这可能有多种解释，但在多径跟踪误差理论的发展中 [8]，发现 [7] 中描述的实验（在墨西哥湾石油平台间的路径上进行）受限于一个恒定的小掠射角 $\psi$，并且仅在大浪高的情况下才得到高值的 $(\sigma_{h} / \lambda) \sin \psi$。这导致了波谷的遮蔽效应，从而减小了可见反射面的 $\sigma_{h}$ [8, p. 516, 式 (11.2.6)]：

$$
\begin{equation*}
\sigma_{h}^{\prime}=\sigma_{h} \sqrt[5]{2 \psi / \beta_{0}}, \text { 当 } 2 \psi / \beta_{0}<1 \tag{8.59}
\end{equation*}
$$

其中 $\beta_{0}$ 是波面均方根坡度的1.4倍。当使用修正值 $\sigma_{h}^{\prime}$ 时，高海况下的实验数据与 (8.57) 更加吻合。

到达地表的能量分为三个部分：

$$
\begin{aligned}
& 1-\rho_{0}^{2}=\text{ 被表面吸收的能量分量；} \\
& \rho_{0}^{2} \rho_{s}^{2}=\text{ 镜面反射分量的能量分数；} \\
& \rho_{0}^{2} \rho_{d}^{2}=\text{ 漫反射分量的能量分数。}
\end{aligned}
$$

其中 $\rho_{d}$ 为漫反射系数。能量守恒要求这三部分之和为1，即

$$
\rho_{s}^{2}+\rho_{d}^{2}=1
$$

镜面和漫反射系数随归一化粗糙度 $(\sigma_{h}/\lambda)\sin \psi$ 变化的曲线如图8.10所示。

[7] 中报道的实验值 $\rho_{d}$ 未超过0.4。这部分是因为未对高海况下的遮蔽效应进行修正，同时也是因为大多数低高度终端之间的漫反射能量倾向于来自路径两端附近的表面区域。在该实验中，几乎一半的漫反射能量到达了天线主瓣下部或负仰角位置，减少了测得的 $\rho_{d}$。这种情况在许多雷达应用中同样存在，从而限制了天线实际接收到的漫反射能量。[8, pp. 519-520] 中的程序给出了漫反射能量的仰角密度 $\eta_{d}$ 以及天线增益方向图实际接收的 $(\rho_{0}\rho_{d})^{2}$ 分量。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-311.jpg?height=520&width=742&top_left_y=276&top_left_x=377){width="400"}   

图8.10 归一化表面粗糙度 $(\sigma_{h}/\lambda)\sin \psi$ 下的散射系数：镜面散射系数 $\rho_{s}$（实线）和漫反射系数 $\rho_{d}$（虚线）。




正如Blake所指出的 [3, p. 268]，漫反射会在目标回波中引入或增加随机起伏，既增加了直射功率，又减弱了由镜面分量引起的瓣纹强度。

当漫反射较强时，$F$ 因子的表达式可修正为包含该项：

$$
\begin{align*}
F_{i}=\sqrt{F_{\mathrm{spec}}^{2}+F_{\mathrm{dif}}^{2}}= & f\left(\theta_{t}-\theta_{b}\right)\left[\left|1+\rho_{0} \rho_{s} \frac{f\left(\theta_{r}-\theta_{b}\right)}{f\left(E-\theta_{b}\right)} \exp (-j \alpha)\right|^{2}+\right. \\
& \left.+\int_{-\pi / 2}^{0} \rho_{0}^{2} \eta_{d}\left(\theta_{r}\right) \frac{f^{2}\left(\theta_{r d}-\theta_{b}\right)}{f^{2}\left(E-\theta_{b}\right)} d \theta_{r d}\right]^{1 / 2} \tag{8.60}
\end{align*}
$$

其中 $F_{\text {spec }}$ 和 $F_{\text {dif }}$ 分别为 $F$ 因子的相干和非相干分量，$\theta_{r d}$ 为漫反射的仰角。目标起伏模型必须考虑两部分能量的相对贡献。如果漫反射项较大，$F$ 因子的统计特性将成为Rician分布 [9]，这种分布会加到稳态目标上。只有当通过观测时间的平均作用，使得目标起伏的概率密度函数收窄至Rician分布的宽度内时，起伏目标的统计特性才会受到显著影响。目前尚未发现对此效应的研究。

---

### 8.3.3 带植被的陆地表面

对于地基或空基雷达，在计算地表反射能量时必须考虑植被的影响。[10] 报道的实验数据结合相关文献调研，建立了一个经验模型 [11, p. 287 和附录6B]。吸收效应建模为植被因子 $\rho_{v}$，它在计算镜面和漫反射的反射系数时与 $\rho_{0}$ 相乘：

$$
\begin{equation*}
\rho_{v}=(1-\sqrt{a \lambda}) \exp \left(-\frac{b \sin \psi}{\lambda}\right)+\sqrt{a \lambda} \leq 1.0 \tag{8.61}
\end{equation*}
$$

其中系数 $a$ 和 $b$ 为：

$$
\begin{array}{ll}
a=3.2, & b=1 \quad \text {稀疏草地；} \\
a=0.32, & b=3 \quad \text {灌木或密集杂草；} \\
a=0.032, & b=5 \quad \text {密集树林。}
\end{array}
$$

X波段（$\lambda=0.03 \mathrm{~m}$）、S波段（$\lambda=0.1 \mathrm{~m}$）和VHF波段（$\lambda=1 \mathrm{~m}$）的结果如图8.11所示。反射系数的减小随频率和植被深度的增加而增强，在VHF波段时影响最小，除非密集树林覆盖了本应可见的地表。即便是一层稀疏草皮，在仰角大于数度的X波段也会引入高达10 dB的减弱。由于叶片密度和含水量变化较大，该模型必然是近似的。然而，作者本人观察到，在第一Fresnel区内2英尺厚的杂草层几乎消除了L波段空中监视雷达上的反射瓣纹，而稀疏草地可使X波段的反射系数降低约 $10 \mathrm{~dB}$。


### 8.3.4 发散因子

另一个影响反射波的因素是发散因子 $D$ [2, p. 99; 3, p. 270]，其近似表达式为 [3, p. 270, 式 (6.79)]：

$$
\begin{equation*}
D \approx\left(1+\frac{2 G_{1} G_{2}}{k_{e} a_{e} G \sin \psi}\right)^{-1 / 2} \tag{8.62}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-313.jpg?height=691&width=899&top_left_y=270&top_left_x=290){width="400"}   

图8.11 植被因子 $\rho_{v}$ 随不同频段（VHF、S波段和X波段）下的掠射角变化。

该因子来源于第一Fresnel区内地球曲率的影响，并作为一个乘子作用于 $F_{i}$ 方程中的反射系数 $\rho$。

该因子通常接近于1，对于大多数地基雷达可忽略，因为导致 $D<1$ 的几何条件对应于路径差 $\delta$ 位于中间区，在该区中干涉因子和衍射因子的插值掩盖了 $D$ 的影响（见第8.6.1节）。然而，对于位于反射面上方 $h_{r}>100 \mathrm{~m}$ 的台站或机载雷达，$D$ 会降低反射。

---

### 8.4 衍射

#### 8.4.1 光滑球面衍射

当第8.2节中的路径差 $\delta$ 小于约 $\lambda / 6$ 时，球面地球上的衍射会影响 $F$ 因子，并在地平线及其以下区域占主导地位。假设天线在地平线方向具有满增益，且仅采用衍射方程的一阶模态，其衍射因子的表达式为 [2, p. 122]：

$$
\begin{align*}
F_{d 0} & =2 \sqrt{\pi X} \exp (-2.02 X)\left|U\left(Z_{r}\right) U\left(Z_{t}\right)\right|  \tag{8.63}\\
& =V(X)\left|U\left(Z_{r}\right) U\left(Z_{t}\right)\right|
\end{align*}
$$

其中  
$X=R / L=$ 距离（自然单位）；  
$Z_{r, t}=h_{r, t} / H=$ 两端高度（自然单位）；  
$V(X)=$ 衰减（距离）因子；  
$U_{r, t}=$ 两端的高度增益因子。  

式 (8.63) 指数中的常数2.02基于标准大气的折射率剖面，但结果一般适用。

自然单位由波长和地球有效半径决定：

$$
\begin{align*}
L & =\sqrt[3]{\frac{\left(k_{e} a_{e}\right)^{2} \lambda}{\pi n_{0}}}  \tag{8.64}\\
H & =\sqrt[3]{\frac{k_{e} a_{e} \lambda^{2}}{8 \pi^{2} n_{0}}} \tag{8.65}
\end{align*}
$$

其中 $n_{0} \approx 1.000313$ 为地表折射率（见第7.1.4节）。

Blake 对衍射高度增益因子 $U$ 给出了如下近似 [3, p. 273, 式 (6.87)]：

$$
\begin{align*}
20 \log U(Z) & =20 \log Z, & & Z \leq 0.6 \\
& =-4.3+51.04\left(\log \frac{Z}{0.6}\right)^{1.4}, & & 0.6<Z<1  \tag{8.66}\\
& =19.85\left(Z^{0.47}-0.9\right), & & Z \geq 1
\end{align*}
$$

他将距离因子 $V(X)$ 表示为对数形式：

$$
\begin{equation*}
20 \log V(X)=10.99+10 \log X-17.55 X \tag{8.67}
\end{equation*}
$$

因此，使用 (8.63)-(8.67)，衍射因子可表示为分贝形式，即距离因子与两个高度增益因子的和：

$$
\begin{equation*}
20 \log F_{d 0}=20 \log V\left(\frac{R}{L}\right)+20 \log U\left(\frac{h_{r}}{H}\right)+20 \log U\left(\frac{h_{t}}{H}\right) \ \mathrm{dB} \tag{8.68}
\end{equation*}
$$

典型的 $F_{d 0}$ 曲线如图8.12所示。虚线垂直线限定了中间区，其范围在干涉区边界 $R_{\delta}$ 与 $4/3$ 地球视界距离 $R_{h}$ 之间，超过 $R_{h}$ 后一阶模态的衍射值已足够精确。在该例中，两者分别为128 km 和 143 km。为了在中间区内对衍射和反射结果进行插值，实践中发现将 $F_{d 0}$ 限制为 $F_{d 0}^{\prime} \leq 1$ （如图中的虚线）较为有用，其表达式为：

$$
\begin{equation*}
F_{d 0}^{\prime}=\sqrt{\frac{F_{d 0}^{2}}{F_{d 0}^{2}+1}} \tag{8.69}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-315.jpg?height=572&width=990&top_left_y=898&top_left_x=248){width="400"}   

图8.12 典型单程衍射因子：单模值 $F_{d 0}$（实线），修正因子 $F_{d 0}^{\prime}$（虚线）。绘制条件为目标高度 $h_{t}=1 \mathrm{~km}$，雷达高度 $h_{r}=10 \mathrm{~m}, \lambda=0.1 \mathrm{~m}$。干涉区与衍射区在 $\delta=\lambda / 6$ 时的 $R_{\delta}$ 处相接，视界距离为 $R_{h}$。

已经发展出使用高阶模态的方法，可以在中间区内无需插值就得到精确的 $F_{d 0}$。其中一个例子是Smooth-Earth and Knife-Edge (SEKE) 程序 [12]，它结合了多模光滑球面衍射、反射和刀刃衍射，用于计算任意地形剖面的 $F$ 因子。已有运行于个人计算机的SEKE版本，但尚未广泛使用。

衍射区内的方向图-传播因子是 $F^{\prime}_{d 0}$ 与天线方向图因子的乘积：

$$
\begin{equation*}
F_{d}=f\left(\theta_{t}-\theta_{b}\right) F_{d 0}^{\prime} \tag{8.70}
\end{equation*}
$$

其中 $\theta_{t}$ 为目标仰角，$\theta_{b}$ 为波束轴仰角。


### 8.4.2 刀刃衍射

地基雷达常常部署在由离散障碍物形成地平线的位置，如图8.13所示。该障碍物并不需要有锋利的轮廓，因为在雷达波长下，几乎任何地表特征在低掠射角时都能表现为刀刃衍射。树木、建筑物，甚至低矮的山脊和台阶都能在光滑球面之上形成一个遮蔽角。该地平线处的传播因子为 $F_{d k}=0.5$，对于双程传播给出 $F_{d k}^{4}=-12 \mathrm{~dB}$。在遮蔽角以下，$F_{d k}$ 的衰减速度比光滑球面更缓慢，使一些雷达能够在阴影区内探测目标。这种能力在长波雷达波长以及远高于地表的障碍物上最为明显，但即使在微波频段，也已被通信系统利用山脉或山脊的障碍增益加以应用。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-316.jpg?height=400&width=963&top_left_y=1048&top_left_x=272){width="400"}   

图8.13 刀刃衍射与光滑球面衍射的比较。

刀刃衍射的传播因子依赖于障碍物顶部与雷达和目标之间直线路径的垂直距离 $h$（图8.14）。定义衍射参数 $v$ 为：

$$
\begin{equation*}
v=\sqrt{\frac{2 h \theta}{\lambda}}=h \sqrt{\frac{2}{\lambda}\left(\frac{1}{d_{1}}+\frac{1}{d_{2}}\right)} \tag{8.71}
\end{equation*}
$$

其中 $\theta$ 为相对于障碍边缘的仰角，$h$ 为障碍物高出直线路径的高度，$d_{1,2}$ 为从雷达和目标到边缘的地面距离。正的 $v$ 表示路径被阻挡。刀刃衍射的传播因子用Fresnel积分表示为：

$$
\begin{equation*}
F_{d k}(v)=\frac{1}{\sqrt{2}}|C(v)-0.5+j[S(v)-0.5]| \tag{8.72}
\end{equation*}
$$

其中  

$$
C(v)=\int_{0}^{v} \cos \left(\pi t^{2} / 2\right) d t , \quad S(v)=\int_{0}^{v} \sin \left(\pi t^{2} / 2\right) d t
$$

$F_{d k}$ 的近似式为：

$$
\begin{align*}
& 20 \log F_{d k}(v)=-(6+8 v), \quad-1<v<1 \\
& 20 \log F_{d k}(v)=-\left[11.1+20 \log \left(\sqrt{v^{2}+1}+v\right)\right], \quad v \geq 1 \tag{8.73}
\end{align*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-317.jpg?height=658&width=1161&top_left_y=270&top_left_x=164){width="400"}   

图8.14 刀刃衍射。(b) 中的虚线表示近似式 (8.73)。

当该因子大于在无障碍物情况下的光滑球面衍射值时，就会出现障碍增益。然而，必须确保障碍物顶部处于自由空间场中。例如，图8.15展示了一个典型的单一障碍衍射情况。在此情形下，雷达到障碍之间地形反射的额外路径长为 $\delta_{0}=0.6 \mathrm{~m}$，当 $\lambda<6 \delta_{0}$ 时，应采用刀刃衍射来描述障碍之后的场分布。对于更长的波长或更低的天线或障碍高度，障碍物顶部将不能被完全照亮，此时刀刃对 $F_{d k}$ 的贡献会因地形反射干涉或光滑球面衍射而减弱。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-318.jpg?height=1044&width=799&top_left_y=270&top_left_x=340)
  
图8.15 刀刃衍射示例。（引自 [3, p. 31]。© 1982, Artech House，经许可转载。）




障碍物并不需要在外观上非常锋利才能在衍射中被视为“刀刃”。对不同半径圆柱的衍射分析表明，当障碍物的曲率半径 $r$ 满足以下条件时，其衍射场基本等效于刀刃衍射值：

$$
\begin{equation*}
r<0.0024 \sqrt{d_{2}^{3} / \lambda} \tag{8.74}
\end{equation*}
$$

其中 $d_{2}$ 是到障碍物的两条路径中较短的一条，所有长度均以米为单位。在图8.16所示的例子中，障碍物的曲率半径可大至 4.9 km（X波段）或 1.8 km（L波段），而不会显著减弱由障碍物遮蔽目标所产生的场。

刀刃衍射的方向图-传播因子 $F_{d}$ 为 $F_{i} F_{d k}$，其中 $F_{i}$ 为建立障碍顶部场的干涉因子。干涉因子将在下一节讨论，但对刀刃完全照明的条件可表示为障碍物高出平均地面的高度应大于：

$$
\begin{equation*}
h_{\min } \approx \sqrt{\lambda d_{1}} \tag{8.75}
\end{equation*}
$$

对于X波段雷达，在 $d_{1}=10 \mathrm{~km}$ 时对应的最小高度为 $h_{\text {min }}=17 \mathrm{~m}$，这是接近地平线路径的一个合理最小值。

---

### 8.5 干涉区

在干涉区内，雷达与目标之间存在无遮挡的视距路径，并且其高出地表的裕度足以使衍射效应可以忽略不计。此裕度对应的直射波与反射波之间的路径差 $\delta$ 大于 $\lambda/6$。干涉 $F$ 因子（包括发散因子）由式 (8.9) 给出，而代入更复杂的式 (8.60) 来处理强烈漫反射的情况则很少需要。

图8.16给出了一个典型情况下 $F_{i}$ 随距离变化的曲线，其中目标高度 $h_{t}=1 \mathrm{~km}$，雷达高度 $h_{r}=10 \mathrm{~m}$，波长 $\lambda=0.1 \mathrm{~m}$，地表粗糙度 $\sigma_{h}=1 \mathrm{~m}$，并假设宽仰角波束。两条虚线标出了中间区的范围，从 $R_{\delta}=128 \mathrm{~km}$ 到 $R_{h}=143.5 \mathrm{~km}$。在接近 $R_{h}$ 处的急剧上升是发散因子的作用结果，但如将在第8.6.1节所示，这并不会影响最终结果。短距离下瓣纹结构的衰减是由掠射角增加导致镜面散射系数减小造成的。对于没有植被的光滑表面，这些瓣纹将持续保持 +6 dB 的峰值，直到被天线方向图削弱。更粗糙的表面则倾向于将反射效应限制在如图所示的初始瓣（约 115 km）。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-319.jpg?height=535&width=974&top_left_y=1373&top_left_x=248){width="400"}   

图8.16 典型单程 $F_{i}$：目标高度 $h_{t}=1 \mathrm{~km}$，雷达高度 $h_{r}=10 \mathrm{~m}$，波长 $\lambda=0.1 \mathrm{~m}$，地表粗糙度 $\sigma_{h}=1 \mathrm{~m}$。接近地平线处的上升来自发散因子。

---

### 8.6 中间区

除非使用多模衍射模型，否则中间区的 $F$ 因子必须通过在干涉值和衍射值之间插值来估算。Fishback 在 [2, pp. 125-129] 中指出：

> 要确定该区域的场强，必须绘制给定端点高度下场强随距离变化的曲线，并将该曲线从干涉区方法适用的区域延伸至中间区，再进入衍射方法有效的区域，通过大胆的插值来完成。

要定义该区域，首先必须求解在直射波与反射波路径差达到 $\lambda/6$ 时的距离 $R_{\delta}$。在这一点上，直射波与反射波相差 $120^{\circ}$，干涉 $F$ 因子约为1。通常必须使用精确的球面地球模型来计算 $R_{\delta}$，这需要基于 (8.42)-(8.46) 的图解或求根方法。而视界距离 $R_{h}$ 的解更为直接：

$$
\begin{equation*}
R_{h}=\sqrt{2 k_{e} a_{e}}\left(\sqrt{h_{r}}+\sqrt{h_{t}}\right) \tag{8.76}
\end{equation*}
$$

---

### 8.6.1 $F$ 因子作为目标距离的函数

一种插值方法是分别计算干涉因子和衍射因子在 $R_{\delta}$ 和 $R_{h}^{\prime}$ 处的分贝值 $F_{i \mathrm{~dB}}\left(R_{\delta}\right)=20 \log F_{i}\left(R_{\delta}\right)$ 和 $F_{d \mathrm{~dB}}\left(R_{h}^{\prime}\right)=20 \log F_{d}\left(R_{h}^{\prime}\right)$，并用直线将它们连接起来。这通过在中间区给衍射因子施加权重 $x$，而给干涉因子施加 $1-x$ 来实现：

$$
\begin{equation*}
x=\left(\frac{R-R_{\delta}}{R_{h}^{\prime}-R_{\delta}}\right)^{1+0.2 \lambda} \tag{8.77}
\end{equation*}
$$

$$
\begin{align*}
F_{\mathrm{dB}}(R) & =F_{i \mathrm{~dB}}(R), \quad R \leq R_{\delta} \quad \text {（干涉区）} \\
& =(1-x) F_{i \mathrm{~dB}}\left(R_{\delta}\right)+x F_{d 0 \mathrm{~dB}}^{\prime}\left(R_{h}^{\prime}\right), \quad R_{\delta}<R<R_{h}  \tag{8.78}\\
& =F_{d 0 \mathrm{~dB}}(R), \quad R_{h} \leq R \quad \text {（衍射区）}
\end{align*}
$$

干涉因子 $F_{i}(R)$ 可通过在式 (8.9) 中代入目标仰角 $\theta_{t}$ 作为 $R$ 的函数（由式 (8.47) 给出）来计算。图8.17展示了与图8.14和图8.18相同目标轨迹的一个例子。注意，插值过程消除了发散因子的影响，因为当距离接近 $R_{h}$ 时，它对 $F_{d}$ 赋予了较大的权重。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-321.jpg?height=568&width=987&top_left_y=793&top_left_x=248){width="400"}   

图8.17 典型单程 $F$：几何条件同前图。干涉因子（点划线）、衍射因子（虚线）、插值结果（实线）。注意发散因子的影响被消除了。

当用于VHF雷达时，这种插值方法的效果略差，如图8.18所示。插值曲线的 $F$ 因子可能低于更精确的多模衍射模型得到的结果。然而，该曲线仍捕捉到了微波与VHF传播之间的本质差别，即VHF的中间区范围更长，$F$ 在较短距离（较高仰角）下就低于1，但随着距离进入衍射区，其下降速度更慢。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-322.jpg?height=559&width=972&top_left_y=290&top_left_x=248){width="400"}   

图8.18 VHF雷达（$\lambda=3 \mathrm{~m}$）的典型单程 $F$，几何条件同前图。干涉因子（点划线）、衍射因子（虚线）、插值结果（实线）。


### 8.6.2 $F$ 因子作为高度的函数

第二种展示 $F$ 的方法是将其绘制为在某一固定距离 $R$ 下，随目标高度 $h_{t}$ 变化的函数。此处的插值过程不同于恒定高度目标轨迹的情况，其加权因子 $y$ 基于高度：

$$
\begin{equation*}
y=\left(\frac{h_{\delta}-h_{t}}{h_{\delta}-h_{0}}\right)^{1.5} \tag{8.79}
\end{equation*}
$$

其中 $h_{\delta}$ 是在距离 $R$ 处使路径差 $\delta=\lambda / 6$ 时的高度，$h_{0}$ 是目标到达地平线时的高度。插值在 $h_{0}$ 处的 $F_{d}^{\prime}$ 与 $h_{\delta}$ 处的 $F_{i}$ 之间进行：

$$
\begin{align*}
F_{\mathrm{d} \mathbf{B}}\left(h_{t}\right) & =F_{d \mathrm{~d} \mathbf{B}}^{\prime}\left(h_{t}\right), \quad h_{t} \leq h_{0} \quad \text {（衍射区）} \\
& =(1-y) F_{i d \mathbf{B}}\left(h_{\delta}\right)+y F_{d \mathrm{~d} \mathbf{B}}^{\prime}\left(h_{0}\right), \quad h_{0}<h_{t}<h_{\delta}  \tag{8.80}\\
& =F_{i d \mathbf{B}}\left(h_{t}\right), \quad h_{\delta}<h_{t} \quad \text {（干涉区）}
\end{align*}
$$

函数 $F_{d}^{\prime}\left(h_{t}\right)$ 和 $F_{i}\left(h_{t}\right)$ 可通过在选定的 $R$ 下改变 $h_{t}$ 并代入 (8.68) 与 (8.47) 得到。图8.19展示了结果，即在固定距离 $R$ 下的高度增益因子。这种表示方法清晰地展现了当目标下降到地平线以下时信号功率的急剧减小。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-323.jpg?height=702&width=730&top_left_y=408&top_left_x=371){width="400"}   

图8.19 单程 $F$ 随高度的函数：$R=100 \mathrm{~km}$，雷达高度 $h_{r}=10 \mathrm{~m}$，波长 $\lambda=0.1 \mathrm{~m}$，地表粗糙度 $\sigma_{h}=1 \mathrm{~m}$。干涉因子（点划线）、衍射因子（虚线）、插值结果（实线）。

---

### 8.6.3 垂直平面覆盖图

对于搜索雷达，所需的输出通常是一个显示垂直平面覆盖轮廓的图，有时称为“距离-高度-角度图”。例如图1.6所示。

#### 8.6.3.1 创建覆盖图的近似方法

覆盖图的近似绘制可以由Blake图（图1.1, 1.2）给出的最大自由空间探测距离 $R_{0}$ 出发，其中目标仰角 $\theta_{t}$ 位于波束轴上：

$$
f\left(\theta_{t}-\theta_{b}\right)=f(0)=1
$$

覆盖图所涉及的仰角对应的距离计算为：

$$
\begin{equation*}
R^{\prime}\left(\theta_{t}\right)=R_{0} F\left(\theta_{t}\right), \quad 0 \leq \theta_{t} \leq \theta_{t \max } \tag{8.81}
\end{equation*}
$$

这样将 $F$ 因子的瓣纹结构叠加到覆盖图上。随后可按第7章所述，根据 $R^{\prime}$ 和 $\theta_{t}$ 调整大气衰减，利用Blake图中的一步或两步迭代方法。

#### 8.6.3.2 创建覆盖图的精确方法

更精确的覆盖图则由式 (1.26) 计算生成，其中不仅包含各仰角的 $F$ 因子和大气衰减，还包括探测因子 $D_{x}$ 的距离变化，以及包含透镜因子的 $F_{\text {rdr }}$，并考虑灵敏度时间控制、遮蔽效应及其他因素。

一旦雷达和环境参数被足够详细地确定，计算机生成精确覆盖图的步骤如下：

- 确定一个最大计算距离 $R_{\text {cmax }}$，其大于覆盖中峰值瓣的探测距离；
- 建立一组距离 $R_{c i}$，覆盖 $0-R_{\text {cmax }}$，步长 $\delta_{R}$ 足够小以保证曲线平滑：

$$
\begin{align*}
R_{c i} & =R_{c \max }-i \delta_{R}, \quad i=0,1,2, \cdots, i_{\max }-1 \\
i_{\max } & =\frac{R_{c \max }}{\delta_{R}} \tag{8.82}
\end{align*}
$$

（排除 $R_{c}=0$ 的计算以避免除零问题）；

- 建立一组目标仰角 $\theta_{t j}$，覆盖所需扇区，步长 $\delta_{\theta}$ 足够小以保证曲线平滑：

$$
\begin{align*}
& \theta_{t j}=j \delta_{\theta}, \quad j=0,1,2, \cdots, j_{\max } \\
& j_{\max }=\frac{\theta_{t \max }}{\delta_{\theta}} \tag{8.83}
\end{align*}
$$

- 对于每个 $\theta_{t j}$，计算可用和所需的信噪能量比 $\left(E / N_{0}\right)_{i, j}$ 与 $D_{x i}$，并找出 $\left(E / N_{0}\right)_{i, j}>D_{x i}$ 时的距离 $R_{c x}$；
- 在 $R_{c x-1}$ 与 $R_{c x}$ 之间插值得到满足 $\left(E / N_{0}\right)_{i, j}=D_{x i}$ 的距离 $R_{m j}$；
- 重复该过程直到覆盖所有仰角至 $\theta_{t j \max }$；
- 对于每个 $\theta_{t j}$，计算目标高于雷达站切平面的高度 $h_{t 1}$：

$$
\begin{equation*}
\left(h_{t 1}\right)_{j}=\left(R_{m}\right)_{j} \sin \left(\theta_{t}\right)_{j} \tag{8.84}
\end{equation*}
$$

- 在直角坐标系中绘制连续覆盖包络 $R_{m}, h_{t 1}$；
- 在覆盖包络上叠加一组距离线，间隔适当，直到 $R_{\text {cmax }}$；
- 在球面地球上方，以固定高度间隔 $\delta_{h}$ 叠加另一组等高度线，其中：

$$
\begin{equation*}
h=k \delta_{h}-\frac{R^{2}}{2 k_{e} a_{e}}, \quad k=0,1,2 \ldots \tag{8.85}
\end{equation*}
$$

- 一些覆盖图的可选特性是在图上绘制自由空间覆盖，作为天线仰角方向图的函数。

图8.20展示了利用 [13] 生成的计算机覆盖图示例。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-325.jpg?height=664&width=1159&top_left_y=1248&top_left_x=171){width="400"}  
 
图8.20 低空监视雷达的覆盖图示例：考虑 $F$ 因子的覆盖（粗实线），自由空间覆盖（粗虚线）。

该格式中，以斜距为纵坐标、以切平面上的高度为横坐标，比Blake所用的格式更便于绘图。在Blake的格式中，纵坐标是地面距离，在高空时等斜距线会向内弯曲。[14] 所述的后者格式在绘制的覆盖范围延伸至与斜距相当的高度时，可更好地保持覆盖轮廓的形状。


### 8.7 方向图-传播因子的总结

干涉因子 $F_{i}$ 表示直射波与地表反射波矢量和的幅值，适用于路径对地表具有足够裕度的目标。在干涉区中，当路径具有足够的裕度时，直射波与反射波之间的路径差 $\delta$ 大于 $\lambda / 6$。

光滑球面衍射因子 $F_{d 0}$ 表示通向地平线以下目标的路径场强幅值，适用于超出地平线距离的目标。对于不遇到显著高出地表障碍物的路径，其地平线距离由下式给出：

$$
\begin{equation*}
R_{h}=\sqrt{2 k_{e} a_{e}}\left(\sqrt{h_{r}}+\sqrt{h_{t}}\right) \tag{8.86}
\end{equation*}
$$

在衍射区内，场强大于零，但相对于自由空间路径在地平线范围内的场强迅速下降。

刀刃衍射因子 $F_{d k}$ 表示越过高出光滑球面足够高度形成比 $R_{h}$ 更短的地平线障碍物后的场强。此类障碍物的判定标准为：曲率半径小于式 (8.74) 给出的值，且高度大于式 (8.75) 给出的值。障碍物后的场强超过相同距离下光滑球面衍射给出的场强。

在中间区内，存在视距直射路径，但对地表的裕度不足，此时场强可通过在衍射场与干涉场之间插值来近似。

绘制在给定目标轨迹（例如恒定高度）下 $F$ 因子随距离变化的曲线，可以揭示目标经过干涉区、中间区和衍射区时的传播特性。如果将自由空间因子 $R^{-4}$ 与 $F$ 因子结合，该曲线即可作为距离方程图解求解的基础，如图1.3–1.5所示。在给定距离下绘制 $F$ 因子随目标高度变化的曲线（如图8.21），则可用于探究低空传播效应的细节。

对监视雷达覆盖的最有用的表示方法是图8.22所示的距离–高度–角度图。这类图的数据可通过基于Blake图的相对简单计算得到，但如今更容易通过如 [13] 或 [14] 之类的计算机程序生成。


## References

[1] Norton, K. A. and Omberg, A. C., "The Maximum Range of a Radar Set," Proc. IRE, Vol. 35, No. 1, January 1947, pp. 4-24.

[2] Kerr, D. E. (ed.), Propagation of Short Radio Waves, Vol. 13 in MIT Radiation Laboratory Series, New York: McGraw-Hill, 1951. Reprinted (CD ROM edition), Norwood, MA: Artech House, 1999.

[3] Blake, L. V., Radar Range-Performance Analysis, Lexington, MA: D. C. Heath, 1980; Dedham, MA: Artech House, 1986.

[4] Saxton, J. A. and Lane, J. A., "Electrical Properties of Sea Water," Wireless Engineer, Vol. 29, 1952, pp. 269-275.

[5] Montoya, T. P. and Smith, G. S., "Land Mine Detection Using a Ground-Penetrating Radar Based on Resistively Loaded Vee Dipoles," IEEE Trans. on Antennas and Propagation, Vol. 47, No. 12, December 1999, pp. 1795-1806 .

[6] Beckmann, P. and Spizzichino, A., The Scattering of Electromagnetic Waves from Rough Surfaces, London: Pergamon Press, 1963; reprinted, Norwood, MA: Artech House, 1987.

[7] Beard, C. I., "Coherent and Incoherent Scattering of Microwaves from the Ocean," IRE Trans. on Antennas and Propagation, Vol. AP-9, No. 2, April 1961, pp. 470-483.

[8] Barton, D. K., Modern Radar System Analysis, Norwood, MA: Artech House, 1988.

[9] Blake, L. V., "Reflection of Radio Waves from a Rough Sea," Proc. IRE, Vol. 38, No. 3, March 1950, pp. 301-304.

[10] Cornwell, P. E. and Lancaster, J., "Low Altitude Tracking over Rough Surfaces II: Experimental and Model Comparisons," IEEE Eascon-79, Washington, DC, October 9-11, 1979, pp. 235-248.

[11] Barton, D. K., Radar System Analysis and Modeling, Norwood, MA: Artech House, 2005.

[12] Ayasli, S., "SEKE: A computer model for low altitude radar propagation over irregular terrain," IEEE Trans AP-34, No. 8, Aug 1986, pp. 1013-1023.

[13] Barton, D. K., Modern Radar System Analysis Software and User's Manual, Version 3.0, Norwood, MA: Artech House, 2007.

[14] Blake, L. V., "Machine Plotting of Radio/Radar Vertical-Plane Coverage Diagrams," Naval Research Laboratory Report 7098, Washington, DC: Gov't. Printing Office, June 1970.