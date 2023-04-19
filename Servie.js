
class Service {
    fixage(arr) {
        var str = ""
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 18 && arr[i] <= 60) {
                str = str + arr[i]
                str = str + ","
            }
        }
        if (str.length == 0)
            return "NA"
        else
            return str.substring(0, str.length - 1);
    }
    revstr(str) {
        var ret = ""
        for (var i = str.length - 1; i >= 0; i--) {
            ret += str[i]
        }
        return ret
    }

    countFreq(str) {
        var map = new Map()
        for (var i = str.length - 1; i >= 0; i--) {
            if (map.has(str[i]))
                map.set(str[i], map.get(str[i]) + 1)
            else
                map.set(str[i], 1)
        }

        console.log(map)
    }
}
// Map() =>Functions set() get() size clear() delete() keys()
// Set () =>clear() add() delete() has()

// s = new Service()
// s.countFreq("AABBCCdf")

str = "India is my 'country All' indians are my 'brother and sister' I"
icnt = 0

arr = str.split(" ")
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "'") {
        while (arr[i][arr.length - 1] == "'") {
            i++
            if (i == arr.length)
                break;
        }

    }
    icnt++;
}
console.log(icnt);

