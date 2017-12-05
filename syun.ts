//% weight=70 icon="\uf185" color=#EC7505 block="カタカナ"
namespace katakana {
    const hs1 = " !" + '"' + "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz"
    const em1 = "　！”＃＄％＆’（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
    const hs2 = "{|}~¥｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"
    const em2 = "｛｜｝〜￥。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン゛°"
    const arr = [
        "0000000000",
        "0000230000",   //！
        "0007000700",
        "1031103110",
        "1423212910",
        "1909041825",
        "1021211016",
        "0000030000",
        "0000001417",
        "1714000000",
        "0005020500",
        "0404310404",
        "0024000000",
        "0004040400",
        "0000160000",
        "1608040201",
        "1417171400",   //0
        "0018311600",
        "2521211800",
        "0917211100",
        "1210093108",
        "2321212109",
        "0820222108",
        "1709050301",
        "1021212110",
        "0221130502",
        "0000100000",
        "0016100000",
        "0004101700",
        "0010101000",
        "0017100400",
        "0201210502",
        "1421273114",
        "3005053000",   //A
        "3121211000",
        "1417171700",
        "3117171400",
        "3121211700",
        "3105050100",
        "1417172112",
        "3104043100",
        "1731170000",
        "0917171501",
        "3104101700",
        "3116161600",
        "3102040231",
        "3102040831",
        "1417171400",
        "3105050200",
        "0609252200",
        "3105051016",
        "1821210900",
        "0101310101",
        "1516161500",
        "0708160807",
        "3108040831",
        "2704042700",
        "0102280201",
        "2521191700",   //Z
        "0000003117",
        "0102040816",
        "1731000000",
        "0002010200",
        "0016161600",
        "0001020000",
        "1218183016",   //a
        "3120200800",
        "1218181800",
        "0820203100",
        "1421211800",
        "0430050100",
        "0221211500",
        "3104042400",
        "0029000000",
        "0016161300",
        "3104101600",
        "0015161600",
        "3002280228",
        "3002280228",
        "1218181200",
        "3010100400",
        "0410103000",
        "2802020200",
        "1620100200",
        "0015202016",
        "1416163016",
        "0608160806",
        "3016081630",
        "1812121800",
        "1820080402",
        "1826221800"   //z
    ]
    const arr2 = [
        "0000043117",
        "0000310000",
        "1731040000",
        "0402040804",
        "0013301300",   //¥
        "0820080000",
        "0000150101",
        "1616300000",
        "0816000000",
        "0000040000",
        "0105212115",   //ヲ
        "0230100600",
        "1608280200",
        "0004221200",
        "0020282000",
        "2012300400",
        "0430041200",
        "2020281600",
        "0021213100",
        "0420080400",
        "0404040404",
        "0117130503",   //ア
        "0404280201",
        "0618191814",
        "1717311717",
        "1810063102",
        "1810071814",   //カ
        "1010311010",
        "0217170907",
        "0419181402",
        "1717171731",
        "0223181502",   //サ
        "2121170807",
        "1709051117",
        "0215181822",
        "0316160807",
        "1818210907",   //タ
        "2021211505",
        "0316191615",
        "2021130504",
        "0031040800",
        "1818150202",   //ナ
        "1617171716",
        "1721090923",
        "1810271022",
        "1616080403",
        "1615000724",   //ハ
        "1518181818",
        "1717090503",
        "2802040816",
        "2602310226",
        "0105092103",   //マ
        "0021212116",
        "2422172024",
        "1610041100",
        "0531212121",
        "0231021006",   //ヤ
        "1717173116",
        "2121212131",
        "2121212113",   //ラ
        "0716161615",
        "3100311612",
        "3116161612",
        "3117171731",
        "0317171715",   //ワ
        "1717170807",   //ン
        "0303000000",
        "0205020000"
    ]
    const marks = [
        "ガカﾞ", "ギキﾞ", "グクﾞ", "ゲケﾞ", "ゴコﾞ",
        "ザサﾞ", "ジシﾞ", "ズスﾞ", "ゼセﾞ", "ゾソﾞ",
        "ダタﾞ", "ヂチﾞ", "ヅツﾞ", "デテﾞ", "ドトﾞ",
        "バハﾞ", "ビヒﾞ", "ブフﾞ", "ベヘﾞ", "ボホﾞ",
        "ヴウﾞ",
        "パハﾟ", "ピヒﾟ", "プフﾟ", "ペヘﾟ", "ポホﾟ"
    ]

    //% blockId=show_strings block="文字列を表示 %v"
    export function putStr(text: string, time: number = 500): void {
        let strings: number[] = []
        for (let c = 0; c < text.length; c++) {
            if (text.substr(c, 1) == "　") text = text.substr(0, c) + " " + text.substr(c + 1, text.length - c - 1)
            for (let m = 0; m < marks.length; m++)
                if (text.substr(c, 1) == marks[m].substr(0, 1))
                    text = text.substr(0, c) + marks[m].substr(1, 2) + text.substr(c + 1, text.length - c - 1)
        }
        for (let d = 0; d < text.length; d++) {
            for (let x = 0; x < arr.length; x++) {
                if (hs1.substr(x, 1) == text.substr(d, 1) || em1.substr(x, 1) == text.substr(d, 1)) {
                    for (let z = 0; z < 5; z++) strings.push(parseInt(arr[x].substr(z * 2, 2)))
                    strings.push(0)
                    break
                }
                if (hs2.substr(x, 1) == text.substr(d, 1) || em2.substr(x, 1) == text.substr(d, 1)) {
                    for (let z = 0; z < 5; z++) strings.push(parseInt(arr2[x].substr(z * 2, 2)))
                    if ((x == arr2.length - 2) || (x == arr2.length - 1)) {
                        strings.splice(strings.length - 6, 1)
                        strings.splice(strings.length - (3 - (x % 2)), (3 - (x % 2)))
                    }
                    strings.push(0)
                    break
                }
            }
        }

        if (strings.length == 6) {
            for (let y = 0; y < 5; y++)
                for (let b = 0, tmp = strings[y]; b < 5; b++) {
                    tmp % 2 == 1 && led.plot(y, b)
                    tmp = (tmp - (tmp % 2)) / 2
                }
        } else {
            for (let a = 0; a < strings.length; a++) {
                for (let y = a; y < a + 5; y++)
                    for (let b = 0, tmp = strings[y]; b < 5; b++) {
                        tmp % 2 == 1 && led.plot(y - a, b)
                        tmp = (tmp - (tmp % 2)) / 2
                    }
                basic.pause(time)
                for (let e = 0; e < 5; e++)
                    for (let f = 0; f < 5; f++)
                        led.unplot(e, f)
            }
        }

    }
}
