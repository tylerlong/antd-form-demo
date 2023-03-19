# Ant Design Form Demo

`Form` 的 `initialValues` 貌似是第一次取了静态值之后，后面就不会再刷新了。
倒也是能理解。因为毕竟是 **initial** 而已。

给 form 加上 key 之后，只要 key 更新了，整个form也会更新。


## A tricky case

另外一个项目中出现了奇怪的现象，就是form死活不刷新。
后面诊断了很久，发现不光是form不刷新，<Text/>也不刷新。

最终发现原因是异步修改 store 的数据的话，一定要在 componentDidMount 中进行。
functional style 的话就在 useEffect 中进行。
否则你修改的数据，界面可能真的不刷新。
