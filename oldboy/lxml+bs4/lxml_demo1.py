from lxml import etree

# root = etree.parse('demo.html', etree.HTMLParser())

# root.xpath()
# print(root.xpath('//title')[0])

text = ''' 
<div> 
    <ul> 
        <li class="item-1">
            <a href="link1.html" name='zmh'>first item</a>
        </li> 
        <li class="item-1">
            <a href="link2.html">second item</a>
        </li> 
        <li class="item-inactive">
            <a href="link3.html">third item</a>
        </li> 
        <li class="item-1">
            <a href="link4.html">fourth item</a>
        </li> 
        <li class="item-0">
            <a href="link5.html">fifth item</a> 
    </ul> 
</div> '''

html = etree.HTML(text)
# print(dir(html))
li = html.xpath('//a[@href="link1.html"]/text()')[0]  # xpath 获取文本内容
l2 = html.xpath('//a[@href="link1.html"]/@name')[0]  # xpath 获取属性值
l3 = html.xpath('//a[@href="link1.html"]/@*')  # @* 获取所有的属性
l4 = html.xpath('//a[contains(@href,"link")]/text()')  # 属性包含 ...
# l5 = html.xpath('//a[contains(text(),"f")]/text()')  # 文本包含 ...
l5 = html.xpath('//li[3]/@class')  # 索引从1开始


for i in l5:
    print(i)