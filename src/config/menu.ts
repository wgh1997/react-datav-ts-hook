const menu = [
  {
    title: '柱状图',
    icon: '',

    children: [
      {
        id: 1,
        title: '基本柱状图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/1.png',
      },
      {
        id: 2,
        title: '分组柱状图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/2.png',
      },
      {
        id: 1,
        title: '堆叠柱状图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/15.png',
      },
      {
        id: 1,
        title: '基础条形图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/3.png',
      },
      {
        id: 1,
        title: '分组条形图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/4.png',
      },
    ],
  },
  {
    title: '折线图',
    icon: '',
    children: [
      {
        id: 1,
        title: '普通折线图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/7.png',
      },
      {
        id: 1,
        title: '阶梯折线图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/11.png',
      },
      {
        id: 1,
        title: '分组阶梯折线图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/12.png',
      },
      {
        id: 1,
        title: '多色折线图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/10.png',
      },
      {
        id: 1,
        title: '面积图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/9.png',
      },
    ],
  },
  {
    title: '饼图',
    icon: '',
    children: [
      {
        id: 1,
        title: '基础饼图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/13.png',
      },
      {
        id: 1,
        title: '多色南丁格尔玫瑰图',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/14.png',
      },
    ],
  },
]
const staticState = [
  {
    title: '边框',
    icon: '',
    children: [
      {
        id: 1,
        title: 'BorderBox1',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/1.png',
      },
      {
        id: 2,
        title: 'BorderBox2',
        icon: '',
        widget: 'echart',
        imgPath: './image/chart/1.png',
      },

    ],
  },
]
const nav = [
  {
    name: '图表',
    icon: 'iconmodular',
    navname: menu
  },
  {
    name: '静态',
    icon: 'iconfile-open',
    navname: staticState
  },
  {
    name: '地图',
    icon: 'iconlayers',
  },
]
const ehartOption = {
  1: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      bottom: '8%',
      top: '8%',
      left: '2%',
      right: '2%',
      containLabel: true,
    },
    series: [
      {
        data: [
          {
            value: 100,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(61,126,235,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 230,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(23,216,161,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(23,216,161,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(23,216,161,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 240,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(219,51,90,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(219,51,90,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(219,51,90,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 250,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(61,126,235,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 260,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(61,126,235,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 360,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(61,126,235,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
          {
            value: 460,
            itemStyle: {
              color: {
                type: 'linear', // 线性渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235,0.8)', // 0%处的颜色为红色
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235,0)', // 100%处的颜色为蓝
                  },
                ],
              },
              borderColor: 'rgba(61,126,235,1)',
              borderWidth: 3,
              borderRadius: [2, 2, 2, 2],
            },
          },
        ],
        type: 'bar',
        barWidth: '40%',
      },
    ],
  },
  2: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series'
        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [
            [{ type: 'min' }, { type: 'max' }]
          ]
        }
      },
      {
        name: '百度',
        type: 'bar',
        barWidth: 5,
        stack: '搜索引擎',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: '谷歌',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: '必应',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: '其他',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 84, 109, 110, 120]
      }
    ]
  }
}
const configData = {
  1: [
    {
      name: '整体样式',
      children: [
        {
          name: '字体',
          type: 'input',
        },
        {
          name: '边距',
          children: [
            {
              name: '上',
              type: 'input',
            },
            {
              name: '下',
              type: 'input',
            },
            {
              name: '左',
              type: 'input',
            },
            {
              name: '右',
              type: 'input',
            },
          ],
        },
        {
          name: '柱子样式',
          children: [
            {
              name: '宽度占比',
              type: 'input',
            },
            {
              name: '柱体间占比',
              type: 'input',
            },
          ],
        },
      ],
    },
    {
      name: '数据样式',
      children: [
        {
          name: '项目1',
          children: [
            {
              name: '填充色',
              type: 'color',
            },
            {
              name: '边框色',
              type: 'color',
            },
            {
              name: '边框粗细',
              type: 'input',
            },
          ],
        },
        {
          name: '项目2',
          children: [
            {
              name: '填充色',
              type: 'color',
            },
            {
              name: '边框色',
              type: 'color',
            },
            {
              name: '边框粗细',
              type: 'input',
            },
          ],
        },
      ],
    },
    {
      name: '是否开启动画',
      type: 'check',
    },
  ],
}
export { menu, nav, ehartOption, staticState, configData }
