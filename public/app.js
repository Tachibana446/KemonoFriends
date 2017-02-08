// ケモノフレンズこれから見ます。

// 左側のパターンを右側の配列のいずれかに変換します。
var patterns = [
    [/である。/, ["だってー！"]],
    [/た。/, ["たんだー、すごーい！", "たんだってー！"]],
    [/る。/, ["るんだー、すごーい！", "るんだってー！"]],
    [/(ゴ、)*ゴウランガ/, ["すごいすごーい"]],
    [/ワザマエ/, ["カラテが得意なフレンズなんだね"]],
    [/ハヤイ/, ["走るのが上手なフレンズなんだね"]],
    [/イヤーッ/, ["えい"]],
    [/グワーッ/, ["いたーい"]],
    [/ヤメロ/, ["やめてよー"]],
    [/オヌシ|貴様|お前/,["あなた"]]
];

$(function() {
    $("button").click(function() {
        var inp = $("#input").val();
        for (pair of patterns) {
            var out = "";
            var ptn = pair[0];
            var sp = inp.split(ptn);
            sp = $.grep(sp, function(e) {
                return e !== undefined;
            });
            for (var i = 0; i < sp.length; i++) {
                if (i == sp.length - 1)
                    out += sp[i];
                else {
                    var index = Math.floor(Math.random() * pair[1].length);
                    var str = pair[1][index];
                    out += sp[i] + str;
                }
            }
            inp = out;
        }

        $("#output").val(inp);
    });
});
