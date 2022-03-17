// 策略模式
// 使用场景：
// 1.判断条件下的策略相互独立且可复用
// 2.策略内部逻辑相对复杂
// 3.策略需要灵活组合

const data = [
  { 
    [Math.random().toString(36).substr(2, 10).toUpperCase()]: {
      brain: '我是一段需要处理的数据',
      main: false,
      index: 0,
      tokens: [
        {
          address: '我很单纯，就是一个地址而已',
          symbol: '我也很单纯连自己是啥都不知道',
          question: '二楼不是单纯，是憨憨吧'
        }
      ]
    }
  },
  { 
    [Math.random().toString(36).substr(2, 10).toUpperCase()]: {
      brain: '我是一段需要处理的数据',
      main: false,
      index: 1,
      tokens: [
        {
          address: '我很单纯，就是一个地址而已',
          symbol: '我也很单纯连自己是啥都不知道',
          question: '二楼不是单纯，是憨憨吧'
        }
      ]
    }
  },
  { 
    [Math.random().toString(36).substr(2, 10).toUpperCase()]: {
      brain: '我是一段需要处理的数据',
      main: false,
      index: 2,
      tokens: [
        {
          address: '我很单纯，就是一个地址而已',
          symbol: '我也很单纯连自己是啥都不知道',
          question: '二楼不是单纯，是憨憨吧'
        }
      ]
    }
  },
  { 
    [Math.random().toString(36).substr(2, 10).toUpperCase()]: {
      brain: '我是一段需要处理的数据',
      main: false,
      index: 3,
      tokens: [
        {
          address: '我很单纯，就是一个地址而已',
          symbol: '我也很单纯连自己是啥都不知道',
          question: '二楼不是单纯，是憨憨吧'
        }
      ]
    }
  }
];

// 定义策略对象

const stragegy = {
  key: function (originData, index) {
    return Object.keys(originData[index])[0]
  },
  value: function (originData, index) {
    return Object.values(originData[index])[0]
  },
  allKeys: function (originData) {
    return originData.map(key => Object.keys(key)[0])
  },
  allValues: function (originData) {
    return originData.map(values => Object.values(values)[0])
  }
}

// 场景1: 根据传入的下标，拿到data中的key值
let index = 1
const key = stragegy.key(data, index)
console.log(key)

// 场景2: 根据传入的下标，拿到data中的values值
const value = stragegy.value(data, index)
console.log(value, 'value')

// 场景3: 拿到data中所有key值
const allKeys = stragegy.allKeys(data, index)
console.log(allKeys, 'allKeys')

// 场景4: 拿到data中所有values值
const allValues = stragegy.allValues(data, index)
console.log(allValues, 'allValues')

