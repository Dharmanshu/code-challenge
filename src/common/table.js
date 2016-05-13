$(document).ready(function () {
    "use strict";
    
    $.getJSON("https://api.myjson.com/bins/11h4i",
        function (data) {
            var rowList = [];

            data.sort(function (a, b) {
                return parseFloat(b.earnings - parseFloat(a.earnings));
            });

            data.forEach(function (data) {
                var row;
                row = ['<tr>',
                    '<td>' + data.name + '</td>',
                    '<td class="text-right">' + data.apy + '</td>',
                    '<td class="text-right">' + data.earnings + '</td>',
                    '</tr>'].join('');
                rowList.push(row);
            });

            $('table').find('[data-js="check-rate-table"]').empty().append(rowList.join(''));
        });
});