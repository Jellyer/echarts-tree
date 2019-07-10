var treeData = {
    "name": "前端知识图谱",
    "children": [
        {
            "name": "开发基础",
            "children": [
                {
                    "name": "版本控制",
                    "children": [
                        { "name": "SVN" },
                        { "name": "Git" }
                    ]
                },
                {
                    "name": "开发工具",
                    "children": [
                        { "name": "VS Code" },
                        { "name": "WebStorm" },
                        { "name": "Sublime" }
                    ]
                },
            ]
        },
        {
            "name": "前端基础",
            "children": [
                {
                    "name": "CSS",
                    "children": [
                        {
                            "name": "布局",
                            "children": [
                                { "name": "定位" },
                                { "name": "浮动" },
                                { "name": "盒模型" },
                                { "name": "Flex" }
                            ]

                        },
                        {
                            "name": "动画",
                            "children": [
                                { "name": "keyframes" },
                                { "name": "transform" }

                            ]
                        },
                    ]
                },
                {
                    "name": "JavaScript",
                    "children": [
                        {
                            "name": "ECMAScript 6+",
                            "children": [
                                { "name": "Class" },
                                { "name": "Promise" },
                                { "name": "async/await" }
                            ]
                        },
                        {
                            "name": "TypeScript",
                            "children": [
                                { "name": "类型" },
                                { "name": "interface" },
                            ]
                        },
                        {
                            "name": "浏览器",
                            "children": [
                                { "name": "DOM" },
                                { "name": "BOM" },
                                { "name": "Fetch/Ajax/跨域/JSONP/CORS" },
                                { "name": "Cookie" },
                                { "name": "Storage" }
                            ]
                        },
                        {
                            "name": "调试工具",
                            "children": [
                                { "name": "查看元素" },
                                { "name": "断点" },
                                { "name": "监视" },
                                { "name": "调用栈" },
                                { "name": "步入步出" }
                            ]
                        },
                    ]
                },
                {
                    "name": "HTTP",
                    "children": [
                        { "name": "状态码" },
                        { "name": "方法" },
                        { "name": "Content-Type" },
                        { "name": "缓存相关Header" },
                        { "name": "抓包" }
                    ]
                },
            ]
        },
        {
            "name": "前端工程",
            "children": [
                {
                    "name": "包管理",
                    "children": [
                        { "name": "npm" },
                        { "name": "yarn" },
                        { "name": "package-json" }
                    ]
                },
                {
                    "name": "CSS预处理器",
                    "children": [
                        { "name": "PostCSS/SASS/LESS" },
                        { "name": "CSS Modules" }
                    ]
                },
                {
                    "name": "代码风格",
                    "children": [
                        { "name": "Prettier" },
                        { "name": "ESLint" }
                    ]
                },
                {
                    "name": "构建工具",
                    "children": [
                        { "name": "Webpack" },
                        { "name": "Rollup" }
                    ]
                },
                {
                    "name": "单元测试",
                    "children": [
                        { "name": "Jest/Mocha/Jasmine" },
                        { "name": "Karma" }
                    ]
                },
            ]
        },
        {
            "name": "wbe框架",
            "children": [
                {
                    "name": "React Stack",
                    "children": [
                        { "name": "React" },
                        { "name": "Redux" },
                        { "name": "React Router" }
                    ]
                },
                {
                    "name": "Vue Stack",
                    "children": [
                        { "name": "Vue" },
                        { "name": "Vuex" },
                        { "name": "Vue Router" }
                    ]
                }
            ]
        },
        {
            "name": "端开发",
            "children": [
                {
                    "name": "客户端开发",
                    "children": [
                        { "name": "React Native" },
                        { "name": "Weex" },
                        { "name": "Electron" },
                        { "name": "FLutter" }
                    ]
                },
                {
                    "name": "类小程序",
                    "children": [
                        { "name": "微信小程序" },
                        { "name": "快应用" },
                        { "name": "百度智能小程序" },
                        { "name": "支付宝小程序" }
                    ]
                }
            ]
        },
        {
            "name": "NodeJS",
            "children": [
                {
                    "name": "Web框架",
                    "children": [
                        { "name": "Express" },
                        { "name": "Koa" }
                    ]
                },
                {
                    "name": "SSR",
                    "children": [
                        { "name": "Next" },
                        { "name": "Nuxt" }
                    ]
                }
            ]
        }]
};
var option = {
    tooltip: {
        show: true
    },
    series: [{
        type: 'tree',
        data: [treeData],
        top: '2%',
        left: '10%',
        bottom: '2%',
        right: '10%',
        symbolSize: 20,
        label: {
            normal: {
                position: 'top',
                align: 'center',
                fontSize: 15,
                formatter: function (param) {
                    if (param.name == 'add') {
                        return '{a|' + param.name + '}'
                    } else {
                        return '{b|' + param.name + '}'
                    }
                },
                rich: {
                    a: {
                        padding: 5,
                        color: '#fff',
                        fontSize: 12,
                        lineHeight: 18,
                        borderRadius: 5,
                        backgroundColor: '#FF9F7F',
                    },
                    b: {
                        padding: 5,
                        color: '#fff',
                        fontSize: 12,
                        lineHeight: 18,
                        borderRadius: 5,
                        backgroundColor: '#37A2DA',
                    }
                }
            },
            emphasis: {
                fontSize: 25
            }
        },
        leaves: {
            label: {
                normal: {
                    position: 'top',
                    align: 'center'
                },

            }
        },
        itemStyle: {
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                    offset: 0, color: '#8AC8E9' // 0% 处的颜色
                }, {
                    offset: 1, color: '#37A2DA' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            borderRadius: 0,
            borderColor: '#37A2DA'
        },
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#8AC8E9' // 0% 处的颜色
                }, {
                    offset: 1, color: '#37A2DA' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            curveness: 0.5
        },
        expandAndCollapse: false,
        roam: true,  // 缩放
        animationDuration: 550,
        initialTreeDepth: 6,
        animationDurationUpdate: 750
    }]
}
!(function () {
    var myChart = echarts.init(document.getElementById('main'));
    changeData(treeData);
    resizeTree(myChart,treeData,treeData.id);
    myChart.on('click', function (params) {
        if (params.data.type == "add") {
            var name = prompt("请输入名称", "");
            if (name != null && name != "") {
                console.log(params.data.parentId)
                addData(treeData, params.data.parentId, name);                
                resizeTree(myChart,treeData,params.data.parentId)
            }
        } else {
            resizeTree(myChart,treeData,params.data.id)
        }       
    });
    myChart.on('contextmenu', function (params) {
        if (params.data.type !== "add") {
            layer.msg('请选择你的操作', {
                time: 20000, //20s后自动关闭               
                btn: ['修改', '删除', '关闭'],
                yes: function (index) {
                    layer.close(index);
                    var name = prompt("请输入名称", params.name);
                    if (name != null && name != "") {
                        editData(treeData, params.data.id, name);
                        resizeTree(myChart,treeData,params.data.parentId)                       
                    }
                },
                btn2:function (index) { 
                    layer.close(index);                  
                    layer.msg('确定删除该项？', {
                        time: 5000, //20s后自动关闭   
                        btn: ['确定', '取消'],
                        yes: function (index) {
                            layer.close(index);
                            delData(treeData, params.data.id);
                            resizeTree(myChart,treeData,params.data.parentId)
                        },
                        btn2:function(index){
                            layer.close(index);
                        }
                    });
                }
            });
        }
    });
    $('.tree-container').on('contextmenu', function (params) {
        return false;
    });
    $(window).resize(function () {
        myChart.resize();
    });
})();
function changeData(data, id) {    
    data.parentId = id;
    data.collapsed = true;
    var childrenArr = data.children;
    if (!id) {
        data.id = createId();
        data.children.push(addBtnObj(data.id))
    }
    for (var i = 0; i < childrenArr.length; i++) {
        childrenArr[i].id=createId();
        if (childrenArr[i].children) {
            childrenArr[i].children.push(addBtnObj(childrenArr[i].id))
            changeData(childrenArr[i], data.id);
        } else {
            if (!childrenArr[i].type || childrenArr[i].type !== "add") {
                childrenArr[i].id = createId();
                childrenArr[i].parentId = data.id;
                childrenArr[i].collapsed = true;
                childrenArr[i].children = [];
                childrenArr[i].children.push(addBtnObj(childrenArr[i].id))
            }
        }
    }
}
function resetCollapsedTree(data) {
    data.collapsed = true;
    var childrenArr = data.children;
    for (var i = 0; i < childrenArr.length; i++) {
        if (childrenArr[i].children) {
            resetCollapsedTree(childrenArr[i]);
        } else {
            childrenArr[i].collapsed = true;
        }
    }
}
function collapsedTree(data, id, totalData) {
    var flag = true;
    var childrenArr = data.children;
    if (data.id == id) {
        data.collapsed = false;
    } else {
        for (var i = 0; i < childrenArr.length; i++) {
            if (childrenArr[i].children) {
                if (childrenArr[i].id == id) {
                    flag = false;
                    childrenArr[i].collapsed = false;
                    collapsedTree(totalData, childrenArr[i].parentId, totalData)
                } else {
                    childrenArr[i].collapsed = true;
                }
                if (flag) {
                    collapsedTree(childrenArr[i], id, totalData)
                }
            } else {
                if (childrenArr[i].id == id) {
                    childrenArr[i].collapsed = false;

                } else {
                    childrenArr[i].collapsed = true;
                }
            }
        }
    }

}
function resizeTree(myChart,treeData,id){
    resetCollapsedTree(treeData);
    collapsedTree(treeData, id, treeData);
    myChart.clear();
    myChart.setOption(option);
}
function addData(data, id, name) {
    if (data.id == id) {
        data.children.pop();
        var temId = createId();
        data.children.push(addObj(name, temId, id), addBtnObj(id));
    } else {
        var childrenArr = data['children'];
        var flag = true;
        for (var i = 0; i < childrenArr.length; i++) {
            if (childrenArr[i]['children']) {
                if (childrenArr[i].id == id) {
                    console.log(childrenArr[i])
                    flag = false;
                    childrenArr[i].children.pop();
                    var temId = createId();
                    childrenArr[i].children.push(addObj(name, temId, id), addBtnObj(id));
                }
                if (flag) {
                    addData(childrenArr[i], id, name)
                }
            }
        }
    }

}
function editData(data, id, name) {
    if (data.id == id) {
        data.name = name;
    } else {
        var childrenArr = data['children'];
        var flag = true;
        for (var i = 0; i < childrenArr.length; i++) {
            if (childrenArr[i]['children']) {
                if (childrenArr[i].id == id) {
                    flag = false;
                    childrenArr[i].name = name;
                }
                if (flag) {
                    editData(childrenArr[i], id, name)
                }
            }
        }
    }

}
function delData(data, id) {
    if (data.id == id) {
        layer.msg('最初级不能删除！');
    } else {
        var childrenArr = data['children'];
        var flag = true;
        for (var i = 0; i < childrenArr.length; i++) {
            if (childrenArr[i].id == id) {
                flag = false;
                childrenArr.splice(i, 1);;
            }
            if (flag && childrenArr[i]['children']) {
                delData(childrenArr[i], id)
            }
        }
    }

}
function addBtnObj(id) {
    return {
        "name": "add",
        "type": 'add',
        "parentId": id,
        'collapsed': true,
        'itemStyle': {
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                    offset: 0, color: '#FFBFA7' // 0% 处的颜色
                }, {
                    offset: 1, color: '#FF794B' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            borderRadius: 0,
            borderColor: '#FF794B'
        },
    }
}
function addObj(name, id, pid) {
    return {
        "name": name,
        'id': id,
        "parentId": pid,
        'collapsed': true,
        'children': [addBtnObj(id)]
    }
}
function createId() {
    var e = (new Date).getTime()
        , t = (Math.random().toString(16) + "000000000").substr(2, 8)
        , n = e + t;
    return $.md5(n);
}