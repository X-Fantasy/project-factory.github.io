$(function () {
    processCustomTag();
    processRedTag();

    function processRedTag() {
        $("red").addClass("red");
    }

    /**
     * 处理自定义标签
     */
    function processCustomTag() {
        try {
            var contentTag = $(".entry-content");
            var newContent = processCustomTagEnd(processCustomTagStart(contentTag.html()));
            contentTag.html(newContent);
        } catch (ex) {
            console.log("optimize.js 规则失败:")
            console.error(ex);
        }
    }

    /**
     * 处理自定义标签开始
     *
     * @param content
     * @return {String}
     */
    function processCustomTagStart(content) {
        return content.replaceAll("<p>&lt;&lt;&lt;CUSTOM</p>", "<div class='custom'>")
            .replaceAll("<<<CUSTOM", "<div class='custom'>");
    }

    /**
     * 处理自定义标签结尾
     *
     * @param content
     * @return {String}
     */
    function processCustomTagEnd(content) {
        return content.replaceAll("<p>&lt;&lt;&lt;END</p>", "</div>")
            .replaceAll("<<<END", "</div>");
    }
});