<template>
  <div v-highlight>
  <pre>
    <code class="css">
      document.body.clientWidth ==> BODY对象宽度
      document.body.clientHeight ==> BODY对象高度
      document.documentElement.clientWidth ==> 可见区域宽度
      document.documentElement.clientHeight ==> 可见区域高度

      网页可见区域宽： document.body.clientWidth
      网页可见区域高： document.body.clientHeight
      网页可见区域宽： document.body.offsetWidth (包括边线的宽)
      网页可见区域高： document.body.offsetHeight (包括边线的高)
      网页正文全文宽： document.body.scrollWidth
      网页正文全文高： document.body.scrollHeight
      网页被卷去的高： document.body.scrollTop
      网页被卷去的左： document.body.scrollLeft
      网页正文部分上： window.screenTop
      网页正文部分左： window.screenLeft
      屏幕分辨率的高： window.screen.height
      屏幕分辨率的宽： window.screen.width
      屏幕可用工作区高度： window.screen.availHeight
      屏幕可用工作区宽度： window.screen.availWidth

      // 部分jQuery函数
      $(window).height() 　//浏览器时下窗口可视区域高度
      $(document).height()　　　　//浏览器时下窗口文档的高度
      $(document.body).height()　　　　　　//浏览器时下窗口文档body的高度
      $(document.body).outerHeight(true)　//浏览器时下窗口文档body的总高度 包括border padding margin
      $(window).width() 　//浏览器时下窗口可视区域宽度
      $(document).width()//浏览器时下窗口文档对于象宽度
      $(document.body).width()　　　　　　//浏览器时下窗口文档body的高度
      $(document.body).outerWidth(true)　//浏览器时下窗口文档body的总宽度 包括border padding

      HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth
      scrollHeight: 获取对象的滚动高度。
      scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
      scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
      scrollWidth:获取对象的滚动宽度
      offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
      offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
      offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      event.clientX 相对文档的水平座标
      event.clientY 相对文档的垂直座标
      event.offsetX 相对容器的水平坐标
      event.offsetY 相对容器的垂直坐标
      document.documentElement.scrollTop 垂直方向滚动的值
      event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量

      进入windows命令窗口之后，输入命令，输入netstat -ano然后回车，就可以看到系统当前所有的端口使用情况。
      通过命令查找某一特定端口，在命令窗口中输入命令中输入netstat -ano |findstr "端口号"，然后回车就可以看到这个端口被哪个应用占用。
      查看到对应的进程id之后，就可以通过id查找对应的进程名称，使用命令tasklist |findstr "进程id号"
      通过命令杀掉进程，或者是直接根据进程的名称杀掉所有的进程，，在命令框中输入如下命令taskkill /f /t /im "进程id或者进程名称"

      git push -> error 10054
      先修改设置解除ssl验证。
      git config --global http.sslVerify "false"
      如果提示Filename too long，说明文件名或路径太长249f6
      git config --global core.longpaths true8b4
      如果是上传push提示的话。可能是文件过大，修改为500M
      git config http.postBuffer 52428800024


      本地git拉取(pull)或抓取(fetch)远程github仓库出现
      Failed to connect to github.com port 443: Timed out
      在本地git使用下面这条命令直接解决问题
      git config --global --unset http.proxy
    </code>
  </pre>
  </div>
</template>

<script>
export default {
  name: "jsHeight"
}
</script>

<style scoped>

</style>
