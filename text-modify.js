function text_modify(text) {
	return text
		.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/(https?:\/\/[\S,!&lt;]+)/g, "<a href='$1'>$1</a>")
        .replace(/@([a-z,A-Z,0-9,-,_]+)\b/g, "<a href='/user/?u=$1'>@$1</a>")
        .replace(/\n/g, "<br>")
}