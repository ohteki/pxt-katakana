//% weight=70 icon="\uf185" color=#EC7505 block="カタカナ"
namespace katakana {
  const hs = [
    [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?"],
    ["@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
    ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_"],
    ["`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
    ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", ""],
    ["¥", "｡", "｢", "｣", "､", "･", "ｦ", "ｧ", "ｨ", "ｩ", "ｪ", "ｫ", "ｬ", "ｭ", "ｮ", "ｯ"],
    ["ｰ", "ｱ", "ｲ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ"],
    ["ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ"],
    ["ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ﾝ", "ﾞ", "ﾟ"]
  ]
  const em = [
    ["　", "！", "”", "＃", "＄", "％", "＆", "’", "（", "）", "＊", "＋", "，", "－", "．", "／"],
    ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "：", "；", "＜", "＝", "＞", "？"],
    ["＠", "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ"],
    ["Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ", "［", "＼", "］", "＾", "＿"],
    ["｀", "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ"],
    ["ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ", "｛", "｜", "｝", "〜", ""],
    ["￥", "。", "「", "」", "、", "・", "ヲ", "ァ", "ィ", "ゥ", "ェ", "ォ", "ャ", "ュ", "ョ", "ッ"],
    ["ー", "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ"],
    ["タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ"],
    ["ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ン", "゛", "°"]
  ]
  const na = [
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [1,0,1,0,0],
    [0,1,1,0,0],
    [1,1,1,0,0],
    [0,0,0,1,0],
    [1,0,0,1,0],
    [0,1,0,1,0],
    [1,1,0,1,0],
    [0,0,1,1,0],
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,0,1],
    [1,1,0,0,1],
    [0,0,1,0,1],
    [1,0,1,0,1],
    [0,1,1,0,1],
    [1,1,1,0,1],
    [0,0,0,1,1],
    [1,0,0,1,1],
    [0,1,0,1,1],
    [1,1,0,1,1],
    [0,0,1,1,1],
    [1,0,1,1,1],
    [0,1,1,1,1],
    [1,1,1,1,1]
  ]
  const arr = [
    [
      [0,0,0,0,0],
      [0,0,23,0,0],
      [0,7,0,7,0],
      [10,31,10,31,10],
      [14,23,21,29,10],
      [19,9,4,18,25],
      [10,21,21,10,16],
      [0,0,3,0,0],
      [0,0,0,14,17],
      [17,14,0,0,0],
      [0,5,2,5,0],
      [4,4,31,4,4],
      [0,24,0,0,0],
      [0,4,4,4,0],
      [0,0,16,0,0],
      [16,8,4,2,1]
    ],
    [
      [14,17,17,14,0],
      [0,18,31,16,0],
      [25,21,21,18,0],
      [9,17,21,11,0],
      [12,10,9,31,8],
      [23,21,21,21,9],
      [8,20,22,21,8],
      [17,9,5,3,1],
      [10,21,21,21,10],
      [2,21,13,5,2],
      [0,0,10,0,0],
      [0,16,10,0,0],
      [0,4,10,17,0],
      [0,10,10,10,0],
      [0,17,10,4,0],
      [2,1,21,5,2]
    ],
    [
      [14,21,27,31,14],
      [30,5,5,30,0],
      [31,21,21,10,0],
      [14,17,17,17,0],
      [31,17,17,14,0],
      [31,21,21,17,0],
      [31,5,5,1,0],
      [14,17,17,21,12],
      [31,4,4,31,0],
      [17,31,17,0,0],
      [9,17,17,15,1],
      [31,4,10,17,0],
      [31,16,16,16,0],
      [31,2,4,2,31],
      [31,2,4,8,31],
      [14,17,17,14,0]
    ],
    [
      [31,5,5,2,0],
      [6,9,25,22,0],
      [31,5,5,10,16],
      [18,21,21,9,0],
      [1,1,31,1,1],
      [15,16,16,15,0],
      [7,8,16,8,7],
      [31,8,4,8,31],
      [27,4,4,27,0],
      [1,2,28,2,1],
      [25,21,19,17,0],
      [0,0,0,31,17],
      [1,2,4,8,16],
      [17,31,0,0,0],
      [0,2,1,2,0],
      [0,16,16,16,0]
    ],
    [
      [0,1,2,0,0],
      [12,18,18,30,16],
      [31,20,20,8,0],
      [12,18,18,18,0],
      [8,20,20,31,0],
      [14,21,21,18,0],
      [4,30,5,1,0],
      [2,21,21,15,0],
      [31,4,4,24,0],
      [0,29,0,0,0],
      [0,16,16,13,0],
      [31,4,10,16,0],
      [0,15,16,16,0],
      [30,2,28,2,28],
      [30,2,28,2,28],
      [12,18,18,12,0]
    ],
    [
      [30,10,10,4,0],
      [4,10,10,30,0],
      [28,2,2,2,0],
      [16,20,10,2,0],
      [0,15,20,20,16],
      [14,16,16,30,16],
      [6,8,16,8,6],
      [30,16,8,16,30],
      [18,12,12,18,0],
      [18,20,8,4,2],
      [18,26,22,18,0],
      [0,0,4,31,17],
      [0,0,31,0,0],
      [17,31,4,0,0],
      [4,2,4,8,4],
      []
    ],
    [
      [0,13,30,13,0],
      [8,20,8,0,0],
      [0,0,15,1,1],
      [16,16,30,0,0],
      [8,16,0,0,0],
      [0,0,4,0,0],
      [21,21,21,21,15],  //ヲ
      [2,30,10,6,0],
      [16,8,28,2,0],
      [0,4,22,12,0],
      [0,20,28,20,0],
      [20,12,30,4,0],
      [4,30,4,12,0],
      [20,20,28,16,0],
      [0,21,21,31,0],
      [4,20,8,4,0]
    ],
    [
      [4,4,4,4,4],
      [1,17,13,5,3],  //ア
      [4,4,28,2,1],
      [6,18,19,18,14],
      [17,17,31,17,17],
      [18,10,6,31,2],
      [18,10,7,18,14],  //カ
      [10,10,31,10,10],
      [2,17,17,9,7],
      [4,19,18,14,2],
      [17,17,17,17,31],
      [2,23,18,15,2],  //サ
      [21,21,17,8,7],
      [17,9,5,11,17],
      [2,15,18,18,22],
      [3,16,16,16,15],
    ],
    [
      [18,18,21,9,7],  //タ
      [21,21,21,15,5],
      [23,16,23,16,15],
      [21,21,13,5,5],
      [0,31,4,8,0],
      [18,18,15,2,2],  //ナ
      [16,17,17,17,16],
      [17,21,9,9,23],
      [18,10,27,10,22],
      [16,16,8,4,3],
      [16,15,0,7,24],  //ハ
      [15,18,18,18,18],
      [17,17,9,5,3],
      [28,2,4,8,16],
      [26,2,31,2,26],
      [1,5,9,21,3],  //マ
    ],
    [
      [0,21,21,21,16],
      [24,22,17,20,24],
      [16,10,4,11,0],
      [5,31,21,21,21],
      [2,31,2,10,6],  //ヤ
      [17,17,17,31,16],
      [21,21,21,21,31],
      [21,21,21,21,13],  //ラ
      [7,16,16,16,15],
      [31,0,31,16,12],
      [31,16,16,16,12],
      [31,17,17,17,31],
      [3,17,17,17,15],  //ワ
      [17,17,17,8,7],  //ン
      [3,3,0,0,0],
      [2,5,2,0,0]
    ]
  ]
  const marks = [
    ["ガ","カﾞ"],["ギ","キﾞ"],["グ","クﾞ"],["ゲ","ケﾞ"],["ゴ","コﾞ"],
    ["ザ","サﾞ"],["ジ","シﾞ"],["ズ","スﾞ"],["ゼ","セﾞ"],["ゾ","ソﾞ"],
    ["ダ","タﾞ"],["ヂ","チﾞ"],["ヅ","ツﾞ"],["デ","テﾞ"],["ド","トﾞ"],
    ["バ","ハﾞ"],["ビ","ヒﾞ"],["ブ","フﾞ"],["ベ","ヘﾞ"],["ボ","ホﾞ"],
    ["ヴ","ウﾞ"],
    ["パ","ハﾟ"],["ピ","ヒﾟ"],["プ","フﾟ"],["ペ","ヘﾟ"],["ポ","ホﾟ"]
  ]

  //% blockId=show_strings block="文字列を表示 %v"
  export function putStr(text: string, time: number = 500) :void{
    let strings: number[][] = []
    for (let m = 0; m < marks.length; m++) {
      for (let c = 0; c < text.length; c++) {
        if(text.substr(c, 1) == marks[m][0]){
          text = text.substr(0,c)+marks[m][1]+text.substr(c+1,text.length-c-1)
        }
      }
    }
    for (let c = 0; c < text.length; c++) {
        for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < 16; y++) {
                if (hs[x][y] == text.substr(c, 1) || em[x][y] == text.substr(c, 1)) {
                    for (let z = 0; z < arr[x][y].length; z++) {
                        strings.push(na[arr[x][y][z]])
                    }
                    if((x==9 && y==14) || (x==9 && y==15)){
                      strings.splice(strings.length-6,1)
                      strings.splice(strings.length-(3-(y%2)),(3-(y%2)))
                    }
                    strings.push([0, 0, 0, 0, 0])
                }
            }
        }
    }

    for (let z = 0; z < strings.length; z++) {
        for (let x = z; x < z + 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (x >= strings.length) {
                    if (strings[x - strings.length][y] == 1) {
                        led.plot(x - z, y)
                    }
                } else {
                    if (strings[x][y] == 1) {
                        led.plot(x - z, y)
                    }
                }
            }
        }
        basic.pause(time)
        for (let x = z; x < z + 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (x >= strings.length) {
                    if (strings[x - strings.length][y] == 1) {
                        led.unplot(x - z, y)
                    }
                } else {
                    if (strings[x][y] == 1) {
                        led.unplot(x - z, y)
                    }
                }
            }
        }
    }
  }
}
