module.exports = [
  {
    title: '银行卡号（16或19位）',
    rule: /^([1-9]{1})(\d{15}|\d{18})$/,
    example: '如: 6222026006705354217'
  },
  {
    title: '中文姓名',
    rule: /^([\u4e00-\u9fa5·]{2,10})$/,
    example: '如: 葛二蛋、凯文·杜兰特'
  },
  {
    title: '新能源车牌号',
    rule:/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/,
    example: '如: 京AD92035(小型)、甘G23459F(大型)',
  },
  {
    title: '非新能源车牌号',
    rule: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    example: '如: 京A00599、黑D23908'
  },

  {
    title: '车牌号(新能源+非新能源)',
    rule: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,
    example: '如: 京A12345D、京A00599'
  },

  {
    title: 'URL链接(网址)',
    rule: /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/,
    example: '如: www.qq.com 、file:///C:/Users/KD/index.js'
  },
  {
    title: '手机号',
    rule: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
    example: '如: 18311006933、17888829981'
  },
  {
    title: '大写字母',
    rule: /^[A-Z]+$/,
    example: '如: ABC、KD'
  },
  {
    title: '日期,如: 2000-01-01',
    rule: /^\d{4}(-)\d{1,2}\1\d{1,2}$/,
    example: '如: 1990-12-12、2020-01-01'
  },
  {
    title: 'email地址',
    rule: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    example: '如: 90203918@qq.com、nbilly@126.com'
  },
  {
    title: '国内座机电话,如: 0341-86091234',
    rule: /\d{3}-\d{8}|\d{4}-\d{7}/,
    example: '如: 0936-4211235'
  },
  {
    title: '身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X',
    rule: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    example: '如: 622223199912051311'
  },
  {
    title: '帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合',
    rule: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
    example: '如: justin、justin1989、justin_666'
  },
  {
    title: '只包含中文',
    rule: /^[\u4E00-\u9FA5]+$/,
    example: '如: 正则、前端'
  },
  {
    title: '是否小数',
    rule: /^\d+\.\d+$/,
    example: '如: 0.0、0.09'
  },
  {
    title: '是否电话格式(手机和座机)',
    rule: /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))$/,
    example: '如: 0936-4211236、19888978261'
  },
  {
    title: '是否8位纯数字',
    rule: /^[0-9]{8}$/,
    example: '如: 12345678'
  },
  {
    title: '是否html标签',
    rule: /<(.*)>.*<\/\1>|<(.*) \/>/,
    example: '如: <div> </div>'
  },
  {
    title: '是否qq号格式正确',
    rule: /^[1-9][0-9]{4,10}$/,
    example: '如: 903013545、9020304'
  },
  {
    title: '是否由数字和字母组成',
    rule: /^[A-Za-z0-9]+$/,
    example: '如: james666、haha233hi'
  },
  {
    title: '是否小写字母组成',
    rule: /^[a-z]+$/,
    example: '如: russel'
  },
  {
    title: '密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
    rule: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
    example: '如: Kd@curry666'
  },
  {
    title: '用户名正则，4到16位（字母，数字，下划线，减号）',
    rule: /^[a-zA-Z0-9_-]{4,16}$/,
    example: '如: xiaohua_qq'
  },
  {
    title: 'ipv4地址正则',
    rule: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    example: '如: 172.16.0.0、127.0.0.0'
  },
  {
    title: '16进制颜色',
    rule: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    example: '如: #f00 、#F90、#000、 #fe9de8'
  },
  {
    title: '微信号，6至20位，以字母开头，字母，数字，减号，下划线',
    rule: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
    example: '如: github666、kd_-666'
  },

  {
    title: '中国邮政编码',
    rule: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    example: '如: 734500、100101'
  },
  {
    title: '只包含中文和数字',
    rule: /^(([\u4E00-\u9FA5])|(\d))+$/,
    example: '如: 哈哈哈、你好6啊'
  },
  {
    title: '非字母',
    rule: /[^A-Za-z]$/,
    example: '如: 你好6啊、Q3Q、ABC@¥()！'
  }
];