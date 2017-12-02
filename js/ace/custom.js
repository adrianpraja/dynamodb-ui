define(
	"ace/theme/custom",
	[
		"require",
		"exports",
		"module",
		"ace/lib/dom"
	],
	function(e,t,n){
		t.isDark=!0,
		t.cssClass="ace-custom",
		t.cssText="\
			.ace-custom .ace_gutter {background: #424242;color: #8F938F}\
			.ace-custom .ace_print-margin {width: 0px;background: #353030}\
			.ace-custom {background-color: #474747;color: #8F938F}\
			.ace-custom .ace_cursor {color: #A7A7A7}\
			.ace-custom .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}\
			.ace-custom.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #2C2828;}\
			.ace-custom .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}\
			.ace-custom .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}\
			.ace-custom .ace_marker-layer .ace_active-line {/*background: rgba(255, 255, 255, 0.031)*/}\
			.ace-custom .ace_gutter-active-line {/*background-color: rgba(255, 255, 255, 0.031)*/}\
			.ace-custom .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}\
			.ace-custom .ace_invisible {color: rgba(255, 255, 255, 0.25)}\
			.ace-custom .ace_keyword,\
			.ace-custom .ace_meta {color: #757aD8}\
			.ace-custom .ace_constant,\
			.ace-custom .ace_constant.ace_character,\
			.ace-custom .ace_constant.ace_character.ace_escape,\
			.ace-custom .ace_constant.ace_other {color: #4FB7C5}\
			.ace-custom .ace_keyword.ace_operator {color: #797878}\
			.ace-custom .ace_constant.ace_character {color: #AFA472}\
			.ace-custom .ace_constant.ace_language {color: #DE8E30}\
			.ace-custom .ace_constant.ace_numeric {color: #CCCCCC}\
			.ace-custom .ace_invalid,\
			.ace-custom .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}\
			.ace-custom .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}\
			.ace-custom .ace_fold {background-color: #757aD8;border-color: #8F938F}\
			.ace-custom .ace_support.ace_function {color: #AEB2F8}\
			.ace-custom .ace_string {color: #66A968}\
			.ace-custom .ace_string.ace_regexp {color: #E9C062}\
			.ace-custom .ace_comment {color: #A6C6FF}\
			.ace-custom .ace_variable {color: #BEBF55}\
			.ace-custom .ace_variable.ace_language {color: #C1C144}\
			.ace-custom .ace_xml-pe {color: #494949}\
			.ace-custom .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y}\
		";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})
