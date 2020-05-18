var index;
/**
 * 功能： 展示任务表格
 */
var isInited = false;
function initTaskTable(listData) {
    isInited = true;
    var tableHeight = $(".task-table").height() - 41;
    console.log("judge table:", tableHeight);
    console.log("judge listData:", listData);
    $('#queryTaskTable').bootstrapTable({
        data: listData,
        contentType: 'application/json;charset=UTF-8',
        height: tableHeight,
        striped: true,
        singleSelect: true,
        clickToSelect: true,
        pagination: false, //是否显示分页（*）
        sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
        paginationPreText: "<",
        paginationNextText: ">",
        pageSize: 20,
        paginationLoop: false,
        columns: [{
            checkbox: true,
        },
        {
            field: '',
            title: "<span title='序号'>序号</span>",
            // width: '45',
            align: 'center',
            formatter: function (value, row, index) {
                return index + 1;
            }
        },
        {
            field: 'TaskID',
            title: '任务ID',
            // width: "70",
            align: 'center',
            formatter: function (value, row, index) {
                return "<span title='" + value.replace(/\'/g, "&acute;") + "'>" + value.replace(/\'/g, "&acute;") + "</spa3n>";
            }
        },
        {
            field: 'TaskService',
            title: '任务类型',
            // width: "100",
            align: 'center',
            formatter: function (value, row, index) {
                return "<span title='" + value + "'>" + value + "</span>";
            }
        },
        {
            field: 'TaskDate',
            title: '创建时间',
            // width: "160",
            align: 'center',
            formatter: function (value, row, index) {
                return "<span title='" + value + "'>" + value.replace("T", " ") + "</span>";
            }
        }
        ],
        // formatNoMatches: function () {
        //     //alertModal(1, "未查询到符合条件的结果")
        //     // return "没有相关的匹配结果";
        // },
        formatLoadingMessage: function () {
            return "请稍等，正在加载中...";
        },
        formatShowingRows: function (a, b, c) {
            return "共 " + c + " 条记录";
        },
        formatRecordsPerPage: function (a) {
            return "";
        },
        onLoadSuccess: function (row) {
            console.log("table load success:", row);
        },
        // onLoadError: function (row) {
        //     jumpToIndex(row);
        // },
        // 行点击事件
        onClickRow: function (row, $element, field) {
            var i = $element.data('index'); //可通过此参数获取当前行号
            index = i;

        },
        onPostBody: function () {
            //重点就在这里，获取渲染后的数据列td的宽度赋值给对应头部的th,这样就表头和列就对齐了
            var header = $(".fixed-table-header table thead tr th");
            var body = $(".fixed-table-header table tbody tr td");
            var footer = $(".fixed-table-header table tr td");
            body.each(function () {
                header.width((this).width());
                footer.width((this).width());
            });
        }

    })
}

function refreshTable(data) {
    $('#queryTaskTable').bootstrapTable("refresh", data);
}


/**
 * 功能： 确认按钮点击事件
 */

$("#queryTaskconfirmbtn").click(function () {
    console.log("index", index);
    if (index != undefined && $(".selected").length > 0) {
        console.log("123");
        parent.childToParent(index);
    }
    else {
        console.log("456");
        alert("请选择任务");
        return;
    }


});

/**
 * 功能： 取消按钮点击事件
 */

$("#queryTaskclosebtn").click(function () {
    // $('#queryTaskTable').bootstrapTable("destroy");
    parent.hideChildWin(index);

});