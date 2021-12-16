(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-0a9e8e34"], {
		"0329": function(e, t) {
			ace.define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop",
				"ace/lib/lang", "ace/mode/text_highlight_rules"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = (e("../lib/lang"), e("./text_highlight_rules").TextHighlightRules),
					o = t.supportType =
					"align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",
					s = t.supportFunction = "rgb|rgba|url|attr|counter|counters",
					a = t.supportConstant =
					"absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero",
					l = t.supportConstantColor =
					"aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",
					c = t.supportConstantFonts =
					"arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",
					h = t.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",
					u = t.pseudoElements =
					"(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",
					d = t.pseudoClasses =
					"(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\b",
					g = function() {
						var e = this.createKeywordMapper({
							"support.function": s,
							"support.constant": a,
							"support.type": o,
							"support.constant.color": l,
							"support.constant.fonts": c
						}, "text", !0);
						this.$rules = {
							start: [{
								include: ["strings", "url", "comments"]
							}, {
								token: "paren.lparen",
								regex: "\\{",
								next: "ruleset"
							}, {
								token: "paren.rparen",
								regex: "\\}"
							}, {
								token: "string",
								regex: "@",
								next: "media"
							}, {
								token: "keyword",
								regex: "#[a-z0-9-_]+"
							}, {
								token: "keyword",
								regex: "%"
							}, {
								token: "variable",
								regex: "\\.[a-z0-9-_]+"
							}, {
								token: "string",
								regex: ":[a-z0-9-_]+"
							}, {
								token: "constant.numeric",
								regex: h
							}, {
								token: "constant",
								regex: "[a-z0-9-_]+"
							}, {
								caseInsensitive: !0
							}],
							media: [{
								include: ["strings", "url", "comments"]
							}, {
								token: "paren.lparen",
								regex: "\\{",
								next: "start"
							}, {
								token: "paren.rparen",
								regex: "\\}",
								next: "start"
							}, {
								token: "string",
								regex: ";",
								next: "start"
							}, {
								token: "keyword",
								regex: "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"
							}],
							comments: [{
								token: "comment",
								regex: "\\/\\*",
								push: [{
									token: "comment",
									regex: "\\*\\/",
									next: "pop"
								}, {
									defaultToken: "comment"
								}]
							}],
							ruleset: [{
								regex: "-(webkit|ms|moz|o)-",
								token: "text"
							}, {
								token: "paren.rparen",
								regex: "\\}",
								next: "start"
							}, {
								include: ["strings", "url", "comments"]
							}, {
								token: ["constant.numeric", "keyword"],
								regex: "(" + h +
									")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
							}, {
								token: "constant.numeric",
								regex: h
							}, {
								token: "constant.numeric",
								regex: "#[a-f0-9]{6}"
							}, {
								token: "constant.numeric",
								regex: "#[a-f0-9]{3}"
							}, {
								token: ["punctuation",
									"entity.other.attribute-name.pseudo-element.css"
								],
								regex: u
							}, {
								token: ["punctuation",
									"entity.other.attribute-name.pseudo-class.css"
								],
								regex: d
							}, {
								include: "url"
							}, {
								token: e,
								regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
							}, {
								caseInsensitive: !0
							}],
							url: [{
								token: "support.function",
								regex: "(?:url(:?-prefix)?|domain|regexp)\\(",
								push: [{
									token: "support.function",
									regex: "\\)",
									next: "pop"
								}, {
									defaultToken: "string"
								}]
							}],
							strings: [{
								token: "string.start",
								regex: "'",
								push: [{
									token: "string.end",
									regex: "'|$",
									next: "pop"
								}, {
									include: "escapes"
								}, {
									token: "constant.language.escape",
									regex: /\\$/,
									consumeLineEnd: !0
								}, {
									defaultToken: "string"
								}]
							}, {
								token: "string.start",
								regex: '"',
								push: [{
									token: "string.end",
									regex: '"|$',
									next: "pop"
								}, {
									include: "escapes"
								}, {
									token: "constant.language.escape",
									regex: /\\$/,
									consumeLineEnd: !0
								}, {
									defaultToken: "string"
								}]
							}],
							escapes: [{
								token: "constant.language.escape",
								regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
							}]
						}, this.normalizeRules()
					};
				n.inherits(g, r), t.CssHighlightRules = g
			})), ace.define("ace/mode/less_highlight_rules", ["require", "exports", "module",
				"ace/lib/oop", "ace/mode/text_highlight_rules", "ace/mode/css_highlight_rules"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = e("./text_highlight_rules").TextHighlightRules,
					o = e("./css_highlight_rules"),
					s = function() {
						var e =
							"@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|or|and|when|not",
							t = e.split("|"),
							i = o.supportType.split("|"),
							n = this.createKeywordMapper({
								"support.constant": o.supportConstant,
								keyword: e,
								"support.constant.color": o.supportConstantColor,
								"support.constant.fonts": o.supportConstantFonts
							}, "identifier", !0),
							r = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
						this.$rules = {
							start: [{
								token: "comment",
								regex: "\\/\\/.*$"
							}, {
								token: "comment",
								regex: "\\/\\*",
								next: "comment"
							}, {
								token: "string",
								regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
							}, {
								token: "string",
								regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
							}, {
								token: ["constant.numeric", "keyword"],
								regex: "(" + r +
									")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
							}, {
								token: "constant.numeric",
								regex: "#[a-f0-9]{6}"
							}, {
								token: "constant.numeric",
								regex: "#[a-f0-9]{3}"
							}, {
								token: "constant.numeric",
								regex: r
							}, {
								token: ["support.function", "paren.lparen",
									"string", "paren.rparen"
								],
								regex: "(url)(\\()(.*)(\\))"
							}, {
								token: ["support.function", "paren.lparen"],
								regex: "(:extend|[a-z0-9_\\-]+)(\\()"
							}, {
								token: function(e) {
									return t.indexOf(e.toLowerCase()) > -1 ?
										"keyword" : "variable"
								},
								regex: "[@\\$][a-z0-9_\\-@\\$]*\\b"
							}, {
								token: "variable",
								regex: "[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"
							}, {
								token: function(e, t) {
									return i.indexOf(e.toLowerCase()) > -1 ? [
										"support.type.property", "text"
									] : ["support.type.unknownProperty",
										"text"
									]
								},
								regex: "([a-z0-9-_]+)(\\s*:)"
							}, {
								token: "keyword",
								regex: "&"
							}, {
								token: n,
								regex: "\\-?[@a-z_][@a-z0-9_\\-]*"
							}, {
								token: "variable.language",
								regex: "#[a-z0-9-_]+"
							}, {
								token: "variable.language",
								regex: "\\.[a-z0-9-_]+"
							}, {
								token: "variable.language",
								regex: ":[a-z_][a-z0-9-_]*"
							}, {
								token: "constant",
								regex: "[a-z0-9-_]+"
							}, {
								token: "keyword.operator",
								regex: "<|>|<=|>=|=|!=|-|%|\\+|\\*"
							}, {
								token: "paren.lparen",
								regex: "[[({]"
							}, {
								token: "paren.rparen",
								regex: "[\\])}]"
							}, {
								token: "text",
								regex: "\\s+"
							}, {
								caseInsensitive: !0
							}],
							comment: [{
								token: "comment",
								regex: "\\*\\/",
								next: "start"
							}, {
								defaultToken: "comment"
							}]
						}, this.normalizeRules()
					};
				n.inherits(s, r), t.LessHighlightRules = s
			})), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module",
				"ace/range"
			], (function(e, t, i) {
				"use strict";
				var n = e("../range").Range,
					r = function() {};
				(function() {
					this.checkOutdent = function(e, t) {
						return !!/^\s+$/.test(e) && /^\s*\}/.test(t)
					}, this.autoOutdent = function(e, t) {
						var i = e.getLine(t),
							r = i.match(/^(\s*\})/);
						if (!r) return 0;
						var o = r[1].length,
							s = e.findMatchingBracket({
								row: t,
								column: o
							});
						if (!s || s.row == t) return 0;
						var a = this.$getIndent(e.getLine(s.row));
						e.replace(new n(t, 0, t, o - 1), a)
					}, this.$getIndent = function(e) {
						return e.match(/^\s*/)[0]
					}
				}).call(r.prototype), t.MatchingBraceOutdent = r
			})), ace.define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"
			], (function(e, t, i) {
				"use strict";
				var n = e("../../lib/oop"),
					r = (e("../behaviour").Behaviour, e("./cstyle").CstyleBehaviour),
					o = e("../../token_iterator").TokenIterator,
					s = function() {
						this.inherit(r), this.add("colon", "insertion", (function(e, t, i, n,
						r) {
							if (":" === r) {
								var s = i.getCursorPosition(),
									a = new o(n, s.row, s.column),
									l = a.getCurrentToken();
								if (l && l.value.match(/\s+/) && (l = a
										.stepBackward()), l && "support.type" === l
									.type) {
									var c = n.doc.getLine(s.row),
										h = c.substring(s.column, s.column + 1);
									if (":" === h) return {
										text: "",
										selection: [1, 1]
									};
									if (!c.substring(s.column).match(/^\s*;/))
										return {
											text: ":;",
											selection: [1, 1]
										}
								}
							}
						})), this.add("colon", "deletion", (function(e, t, i, n, r) {
							var s = n.doc.getTextRange(r);
							if (!r.isMultiLine() && ":" === s) {
								var a = i.getCursorPosition(),
									l = new o(n, a.row, a.column),
									c = l.getCurrentToken();
								if (c && c.value.match(/\s+/) && (c = l
										.stepBackward()), c && "support.type" === c
									.type) {
									var h = n.doc.getLine(r.start.row),
										u = h.substring(r.end.column, r.end.column +
											1);
									if (";" === u) return r.end.column++, r
								}
							}
						})), this.add("semicolon", "insertion", (function(e, t, i, n, r) {
							if (";" === r) {
								var o = i.getCursorPosition(),
									s = n.doc.getLine(o.row),
									a = s.substring(o.column, o.column + 1);
								if (";" === a) return {
									text: "",
									selection: [1, 1]
								}
							}
						}))
					};
				n.inherits(s, r), t.CssBehaviour = s
			})), ace.define("ace/mode/css_completions", ["require", "exports", "module"], (function(e,
				t, i) {
				"use strict";
				var n = {
						background: {
							"#$0": 1
						},
						"background-color": {
							"#$0": 1,
							transparent: 1,
							fixed: 1
						},
						"background-image": {
							"url('/$0')": 1
						},
						"background-repeat": {
							repeat: 1,
							"repeat-x": 1,
							"repeat-y": 1,
							"no-repeat": 1,
							inherit: 1
						},
						"background-position": {
							bottom: 2,
							center: 2,
							left: 2,
							right: 2,
							top: 2,
							inherit: 2
						},
						"background-attachment": {
							scroll: 1,
							fixed: 1
						},
						"background-size": {
							cover: 1,
							contain: 1
						},
						"background-clip": {
							"border-box": 1,
							"padding-box": 1,
							"content-box": 1
						},
						"background-origin": {
							"border-box": 1,
							"padding-box": 1,
							"content-box": 1
						},
						border: {
							"solid $0": 1,
							"dashed $0": 1,
							"dotted $0": 1,
							"#$0": 1
						},
						"border-color": {
							"#$0": 1
						},
						"border-style": {
							solid: 2,
							dashed: 2,
							dotted: 2,
							double: 2,
							groove: 2,
							hidden: 2,
							inherit: 2,
							inset: 2,
							none: 2,
							outset: 2,
							ridged: 2
						},
						"border-collapse": {
							collapse: 1,
							separate: 1
						},
						bottom: {
							px: 1,
							em: 1,
							"%": 1
						},
						clear: {
							left: 1,
							right: 1,
							both: 1,
							none: 1
						},
						color: {
							"#$0": 1,
							"rgb(#$00,0,0)": 1
						},
						cursor: {
							default: 1,
							pointer: 1,
							move: 1,
							text: 1,
							wait: 1,
							help: 1,
							progress: 1,
							"n-resize": 1,
							"ne-resize": 1,
							"e-resize": 1,
							"se-resize": 1,
							"s-resize": 1,
							"sw-resize": 1,
							"w-resize": 1,
							"nw-resize": 1
						},
						display: {
							none: 1,
							block: 1,
							inline: 1,
							"inline-block": 1,
							"table-cell": 1
						},
						"empty-cells": {
							show: 1,
							hide: 1
						},
						float: {
							left: 1,
							right: 1,
							none: 1
						},
						"font-family": {
							Arial: 2,
							"Comic Sans MS": 2,
							Consolas: 2,
							"Courier New": 2,
							Courier: 2,
							Georgia: 2,
							Monospace: 2,
							"Sans-Serif": 2,
							"Segoe UI": 2,
							Tahoma: 2,
							"Times New Roman": 2,
							"Trebuchet MS": 2,
							Verdana: 1
						},
						"font-size": {
							px: 1,
							em: 1,
							"%": 1
						},
						"font-weight": {
							bold: 1,
							normal: 1
						},
						"font-style": {
							italic: 1,
							normal: 1
						},
						"font-variant": {
							normal: 1,
							"small-caps": 1
						},
						height: {
							px: 1,
							em: 1,
							"%": 1
						},
						left: {
							px: 1,
							em: 1,
							"%": 1
						},
						"letter-spacing": {
							normal: 1
						},
						"line-height": {
							normal: 1
						},
						"list-style-type": {
							none: 1,
							disc: 1,
							circle: 1,
							square: 1,
							decimal: 1,
							"decimal-leading-zero": 1,
							"lower-roman": 1,
							"upper-roman": 1,
							"lower-greek": 1,
							"lower-latin": 1,
							"upper-latin": 1,
							georgian: 1,
							"lower-alpha": 1,
							"upper-alpha": 1
						},
						margin: {
							px: 1,
							em: 1,
							"%": 1
						},
						"margin-right": {
							px: 1,
							em: 1,
							"%": 1
						},
						"margin-left": {
							px: 1,
							em: 1,
							"%": 1
						},
						"margin-top": {
							px: 1,
							em: 1,
							"%": 1
						},
						"margin-bottom": {
							px: 1,
							em: 1,
							"%": 1
						},
						"max-height": {
							px: 1,
							em: 1,
							"%": 1
						},
						"max-width": {
							px: 1,
							em: 1,
							"%": 1
						},
						"min-height": {
							px: 1,
							em: 1,
							"%": 1
						},
						"min-width": {
							px: 1,
							em: 1,
							"%": 1
						},
						overflow: {
							hidden: 1,
							visible: 1,
							auto: 1,
							scroll: 1
						},
						"overflow-x": {
							hidden: 1,
							visible: 1,
							auto: 1,
							scroll: 1
						},
						"overflow-y": {
							hidden: 1,
							visible: 1,
							auto: 1,
							scroll: 1
						},
						padding: {
							px: 1,
							em: 1,
							"%": 1
						},
						"padding-top": {
							px: 1,
							em: 1,
							"%": 1
						},
						"padding-right": {
							px: 1,
							em: 1,
							"%": 1
						},
						"padding-bottom": {
							px: 1,
							em: 1,
							"%": 1
						},
						"padding-left": {
							px: 1,
							em: 1,
							"%": 1
						},
						"page-break-after": {
							auto: 1,
							always: 1,
							avoid: 1,
							left: 1,
							right: 1
						},
						"page-break-before": {
							auto: 1,
							always: 1,
							avoid: 1,
							left: 1,
							right: 1
						},
						position: {
							absolute: 1,
							relative: 1,
							fixed: 1,
							static: 1
						},
						right: {
							px: 1,
							em: 1,
							"%": 1
						},
						"table-layout": {
							fixed: 1,
							auto: 1
						},
						"text-decoration": {
							none: 1,
							underline: 1,
							"line-through": 1,
							blink: 1
						},
						"text-align": {
							left: 1,
							right: 1,
							center: 1,
							justify: 1
						},
						"text-transform": {
							capitalize: 1,
							uppercase: 1,
							lowercase: 1,
							none: 1
						},
						top: {
							px: 1,
							em: 1,
							"%": 1
						},
						"vertical-align": {
							top: 1,
							bottom: 1
						},
						visibility: {
							hidden: 1,
							visible: 1
						},
						"white-space": {
							nowrap: 1,
							normal: 1,
							pre: 1,
							"pre-line": 1,
							"pre-wrap": 1
						},
						width: {
							px: 1,
							em: 1,
							"%": 1
						},
						"word-spacing": {
							normal: 1
						},
						filter: {
							"alpha(opacity=$0100)": 1
						},
						"text-shadow": {
							"$02px 2px 2px #777": 1
						},
						"text-overflow": {
							"ellipsis-word": 1,
							clip: 1,
							ellipsis: 1
						},
						"-moz-border-radius": 1,
						"-moz-border-radius-topright": 1,
						"-moz-border-radius-bottomright": 1,
						"-moz-border-radius-topleft": 1,
						"-moz-border-radius-bottomleft": 1,
						"-webkit-border-radius": 1,
						"-webkit-border-top-right-radius": 1,
						"-webkit-border-top-left-radius": 1,
						"-webkit-border-bottom-right-radius": 1,
						"-webkit-border-bottom-left-radius": 1,
						"-moz-box-shadow": 1,
						"-webkit-box-shadow": 1,
						transform: {
							"rotate($00deg)": 1,
							"skew($00deg)": 1
						},
						"-moz-transform": {
							"rotate($00deg)": 1,
							"skew($00deg)": 1
						},
						"-webkit-transform": {
							"rotate($00deg)": 1,
							"skew($00deg)": 1
						}
					},
					r = function() {};
				(function() {
					this.completionsDefined = !1, this.defineCompletions = function() {
						if (document) {
							var e = document.createElement("c").style;
							for (var t in e)
								if ("string" === typeof e[t]) {
									var i = t.replace(/[A-Z]/g, (function(e) {
										return "-" + e.toLowerCase()
									}));
									n.hasOwnProperty(i) || (n[i] = 1)
								}
						}
						this.completionsDefined = !0
					}, this.getCompletions = function(e, t, i, n) {
						this.completionsDefined || this.defineCompletions();
						var r = t.getTokenAt(i.row, i.column);
						if (!r) return [];
						if ("ruleset" === e) {
							var o = t.getLine(i.row).substr(0, i.column);
							return /:[^;]+$/.test(o) ? (/([\w\-]+):[^:]*$/.test(o), this
									.getPropertyValueCompletions(e, t, i, n)) : this
								.getPropertyCompletions(e, t, i, n)
						}
						return []
					}, this.getPropertyCompletions = function(e, t, i, r) {
						var o = Object.keys(n);
						return o.map((function(e) {
							return {
								caption: e,
								snippet: e + ": $0;",
								meta: "property",
								score: Number.MAX_VALUE
							}
						}))
					}, this.getPropertyValueCompletions = function(e, t, i, r) {
						var o = t.getLine(i.row).substr(0, i.column),
							s = (/([\w\-]+):[^:]*$/.exec(o) || {})[1];
						if (!s) return [];
						var a = [];
						return s in n && "object" === typeof n[s] && (a = Object.keys(n[
							s])), a.map((function(e) {
							return {
								caption: e,
								snippet: e,
								meta: "property value",
								score: Number.MAX_VALUE
							}
						}))
					}
				}).call(r.prototype), t.CssCompletions = r
			})), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop",
				"ace/range", "ace/mode/folding/fold_mode"
			], (function(e, t, i) {
				"use strict";
				var n = e("../../lib/oop"),
					r = e("../../range").Range,
					o = e("./fold_mode").FoldMode,
					s = t.FoldMode = function(e) {
						e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker
								.source.replace(/\|[^|]*?$/, "|" + e.start)), this
							.foldingStopMarker = new RegExp(this.foldingStopMarker.source
								.replace(/\|[^|]*?$/, "|" + e.end)))
					};
				n.inherits(s, o),
					function() {
						this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this
							.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this
							.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this
							.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this
							.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this
							._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget =
							function(e, t, i) {
								var n = e.getLine(i);
								if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe
									.test(n) && !this.tripleStarBlockCommentRe.test(n))
								return "";
								var r = this._getFoldWidgetBase(e, t, i);
								return !r && this.startRegionRe.test(n) ? "start" : r
							}, this.getFoldWidgetRange = function(e, t, i, n) {
								var r = e.getLine(i);
								if (this.startRegionRe.test(r)) return this
									.getCommentRegionBlock(e, r, i);
								var o = r.match(this.foldingStartMarker);
								if (o) {
									var s = o.index;
									if (o[1]) return this.openingBracketBlock(e, o[1], i, s);
									var a = e.getCommentFoldRange(i, s + o[0].length, 1);
									return a && !a.isMultiLine() && (n ? a = this
											.getSectionRange(e, i) : "all" != t && (a = null)),
										a
								}
								if ("markbegin" !== t) {
									o = r.match(this.foldingStopMarker);
									if (o) {
										s = o.index + o[0].length;
										return o[1] ? this.closingBracketBlock(e, o[1], i, s) :
											e.getCommentFoldRange(i, s, -1)
									}
								}
							}, this.getSectionRange = function(e, t) {
								var i = e.getLine(t),
									n = i.search(/\S/),
									o = t,
									s = i.length;
								t += 1;
								var a = t,
									l = e.getLength();
								while (++t < l) {
									i = e.getLine(t);
									var c = i.search(/\S/);
									if (-1 !== c) {
										if (n > c) break;
										var h = this.getFoldWidgetRange(e, "all", t);
										if (h) {
											if (h.start.row <= o) break;
											if (h.isMultiLine()) t = h.end.row;
											else if (n == c) break
										}
										a = t
									}
								}
								return new r(o, s, a, e.getLine(a).length)
							}, this.getCommentRegionBlock = function(e, t, i) {
								var n = t.search(/\s*$/),
									o = e.getLength(),
									s = i,
									a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
									l = 1;
								while (++i < o) {
									t = e.getLine(i);
									var c = a.exec(t);
									if (c && (c[1] ? l-- : l++, !l)) break
								}
								var h = i;
								if (h > s) return new r(s, n, h, t.length)
							}
					}.call(s.prototype)
			})), ace.define("ace/mode/less", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/text", "ace/mode/less_highlight_rules", "ace/mode/matching_brace_outdent",
				"ace/mode/behaviour/css", "ace/mode/css_completions", "ace/mode/folding/cstyle"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = e("./text").Mode,
					o = e("./less_highlight_rules").LessHighlightRules,
					s = e("./matching_brace_outdent").MatchingBraceOutdent,
					a = e("./behaviour/css").CssBehaviour,
					l = e("./css_completions").CssCompletions,
					c = e("./folding/cstyle").FoldMode,
					h = function() {
						this.HighlightRules = o, this.$outdent = new s, this.$behaviour = new a,
							this.$completer = new l, this.foldingRules = new c
					};
				n.inherits(h, r),
					function() {
						this.lineCommentStart = "//", this.blockComment = {
							start: "/*",
							end: "*/"
						}, this.getNextLineIndent = function(e, t, i) {
							var n = this.$getIndent(t),
								r = this.getTokenizer().getLineTokens(t, e).tokens;
							if (r.length && "comment" == r[r.length - 1].type) return n;
							var o = t.match(/^.*\{\s*$/);
							return o && (n += i), n
						}, this.checkOutdent = function(e, t, i) {
							return this.$outdent.checkOutdent(t, i)
						}, this.autoOutdent = function(e, t, i) {
							this.$outdent.autoOutdent(t, i)
						}, this.getCompletions = function(e, t, i, n) {
							return this.$completer.getCompletions("ruleset", t, i, n)
						}, this.$id = "ace/mode/less"
					}.call(h.prototype), t.Mode = h
			}))
		},
		"061c": function(e, t, i) {
			(function() {
				var e = "ace",
					t = function() {
						return this
					}();
				if (t || "undefined" == typeof window || (t = window), e || "undefined" ===
					typeof acequirejs) {
					var i = function(e, t, n) {
						"string" === typeof e ? (2 == arguments.length && (n = t), i.modules[e] || (
								i.payloads[e] = n, i.modules[e] = null)) : i.original ? i.original
							.apply(this, arguments) : (console.error(
									"dropping module because define wasn't a string."), console
								.trace())
					};
					i.modules = {}, i.payloads = {};
					var n = function(e, t, i) {
							if ("string" === typeof t) {
								var n = s(e, t);
								if (void 0 != n) return i && i(), n
							} else if ("[object Array]" === Object.prototype.toString.call(t)) {
								for (var o = [], a = 0, l = t.length; a < l; ++a) {
									var c = s(e, t[a]);
									if (void 0 == c && r.original) return;
									o.push(c)
								}
								return i && i.apply(null, o) || !0
							}
						},
						r = function(e, t) {
							var i = n("", e, t);
							return void 0 == i && r.original ? r.original.apply(this, arguments) : i
						},
						o = function(e, t) {
							if (-1 !== t.indexOf("!")) {
								var i = t.split("!");
								return o(e, i[0]) + "!" + o(e, i[1])
							}
							if ("." == t.charAt(0)) {
								var n = e.split("/").slice(0, -1).join("/");
								t = n + "/" + t;
								while (-1 !== t.indexOf(".") && r != t) {
									var r = t;
									t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
								}
							}
							return t
						},
						s = function(e, t) {
							t = o(e, t);
							var r = i.modules[t];
							if (!r) {
								if (r = i.payloads[t], "function" === typeof r) {
									var s = {},
										a = {
											id: t,
											uri: "",
											exports: s,
											packaged: !0
										},
										l = function(e, i) {
											return n(t, e, i)
										},
										c = r(l, s, a);
									s = c || a.exports, i.modules[t] = s, delete i.payloads[t]
								}
								r = i.modules[t] = s || r
							}
							return r
						};
					a(e)
				}

				function a(e) {
					var n = t;
					e && (t[e] || (t[e] = {}), n = t[e]), n.define && n.define.packaged || (i.original =
							n.define, n.define = i, n.define.packaged = !0), n.acequire && n.acequire
						.packaged || (r.original = n.acequire, n.acequire = r, n.acequire.packaged = !0)
				}
			})(), ace.define("ace/lib/regexp", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = {
							exec: RegExp.prototype.exec,
							test: RegExp.prototype.test,
							match: String.prototype.match,
							replace: String.prototype.replace,
							split: String.prototype.split
						},
						r = void 0 === n.exec.call(/()??/, "")[1],
						o = function() {
							var e = /^/g;
							return n.test.call(e, ""), !e.lastIndex
						}();

					function s(e) {
						return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ?
							"m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
					}

					function a(e, t, i) {
						if (Array.prototype.indexOf) return e.indexOf(t, i);
						for (var n = i || 0; n < e.length; n++)
							if (e[n] === t) return n;
						return -1
					}
					o && r || (RegExp.prototype.exec = function(e) {
						var t, i, l = n.exec.apply(this, arguments);
						if ("string" == typeof e && l) {
							if (!r && l.length > 1 && a(l, "") > -1 && (i = RegExp(this
										.source, n.replace.call(s(this), "g", "")), n
									.replace.call(e.slice(l.index), i, (function() {
										for (var e = 1; e < arguments.length -
											2; e++) void 0 === arguments[e] && (l[
											e] = void 0)
									}))), this._xregexp && this._xregexp.captureNames)
								for (var c = 1; c < l.length; c++) t = this._xregexp
									.captureNames[c - 1], t && (l[t] = l[c]);
							!o && this.global && !l[0].length && this.lastIndex > l.index &&
								this.lastIndex--
						}
						return l
					}, o || (RegExp.prototype.test = function(e) {
						var t = n.exec.call(this, e);
						return t && this.global && !t[0].length && this.lastIndex > t
							.index && this.lastIndex--, !!t
					}))
				})), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], (function(e, t, i) {
					function n() {}
					Function.prototype.bind || (Function.prototype.bind = function(e) {
						var t = this;
						if ("function" != typeof t) throw new TypeError(
							"Function.prototype.bind called on incompatible " + t);
						var i = d.call(arguments, 1),
							r = function() {
								if (this instanceof r) {
									var n = t.apply(this, i.concat(d.call(arguments)));
									return Object(n) === n ? n : this
								}
								return t.apply(e, i.concat(d.call(arguments)))
							};
						return t.prototype && (n.prototype = t.prototype, r.prototype =
							new n, n.prototype = null), r
					});
					var r, o, s, a, l, c = Function.prototype.call,
						h = Array.prototype,
						u = Object.prototype,
						d = h.slice,
						g = c.bind(u.toString),
						f = c.bind(u.hasOwnProperty);
					if ((l = f(u, "__defineGetter__")) && (r = c.bind(u.__defineGetter__), o = c
							.bind(u.__defineSetter__), s = c.bind(u.__lookupGetter__), a = c.bind(u
								.__lookupSetter__)), 2 != [1, 2].splice(0).length)
						if (function() {
								function e(e) {
									var t = new Array(e + 2);
									return t[0] = t[1] = 0, t
								}
								var t, i = [];
								if (i.splice.apply(i, e(20)), i.splice.apply(i, e(26)), t = i
									.length, i.splice(5, 0, "XXX"), i.length, t + 1 == i.length)
									return !0
							}()) {
							var p = Array.prototype.splice;
							Array.prototype.splice = function(e, t) {
								return arguments.length ? p.apply(this, [void 0 === e ? 0 : e,
									void 0 === t ? this.length - e : t
								].concat(d.call(arguments, 2))) : []
							}
						} else Array.prototype.splice = function(e, t) {
							var i = this.length;
							e > 0 ? e > i && (e = i) : void 0 == e ? e = 0 : e < 0 && (e = Math
								.max(i + e, 0)), e + t < i || (t = i - e);
							var n = this.slice(e, e + t),
								r = d.call(arguments, 2),
								o = r.length;
							if (e === i) o && this.push.apply(this, r);
							else {
								var s = Math.min(t, i - e),
									a = e + s,
									l = a + o - s,
									c = i - a,
									h = i - s;
								if (l < a)
									for (var u = 0; u < c; ++u) this[l + u] = this[a + u];
								else if (l > a)
									for (u = c; u--;) this[l + u] = this[a + u];
								if (o && e === h) this.length = h, this.push.apply(this, r);
								else
									for (this.length = h + o, u = 0; u < o; ++u) this[e + u] =
										r[u]
							}
							return n
						};
					Array.isArray || (Array.isArray = function(e) {
						return "[object Array]" == g(e)
					});
					var m, v = Object("a"),
						w = "a" != v[0] || !(0 in v);
					if (Array.prototype.forEach || (Array.prototype.forEach = function(e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = arguments[1],
								r = -1,
								o = i.length >>> 0;
							if ("[object Function]" != g(e)) throw new TypeError;
							while (++r < o) r in i && e.call(n, i[r], r, t)
						}), Array.prototype.map || (Array.prototype.map = function(e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = i.length >>> 0,
								r = Array(n),
								o = arguments[1];
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							for (var s = 0; s < n; s++) s in i && (r[s] = e.call(o, i[s], s,
							t));
							return r
						}), Array.prototype.filter || (Array.prototype.filter = function(e) {
							var t, i = M(this),
								n = w && "[object String]" == g(this) ? this.split("") : i,
								r = n.length >>> 0,
								o = [],
								s = arguments[1];
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							for (var a = 0; a < r; a++) a in n && (t = n[a], e.call(s, t, a,
								i) && o.push(t));
							return o
						}), Array.prototype.every || (Array.prototype.every = function(e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = i.length >>> 0,
								r = arguments[1];
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							for (var o = 0; o < n; o++)
								if (o in i && !e.call(r, i[o], o, t)) return !1;
							return !0
						}), Array.prototype.some || (Array.prototype.some = function(e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = i.length >>> 0,
								r = arguments[1];
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							for (var o = 0; o < n; o++)
								if (o in i && e.call(r, i[o], o, t)) return !0;
							return !1
						}), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = i.length >>> 0;
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							if (!n && 1 == arguments.length) throw new TypeError(
								"reduce of empty array with no initial value");
							var r, o = 0;
							if (arguments.length >= 2) r = arguments[1];
							else
								do {
									if (o in i) {
										r = i[o++];
										break
									}
									if (++o >= n) throw new TypeError(
										"reduce of empty array with no initial value")
								} while (1);
							for (; o < n; o++) o in i && (r = e.call(void 0, r, i[o], o, t));
							return r
						}), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(
							e) {
							var t = M(this),
								i = w && "[object String]" == g(this) ? this.split("") : t,
								n = i.length >>> 0;
							if ("[object Function]" != g(e)) throw new TypeError(e +
								" is not a function");
							if (!n && 1 == arguments.length) throw new TypeError(
								"reduceRight of empty array with no initial value");
							var r, o = n - 1;
							if (arguments.length >= 2) r = arguments[1];
							else
								do {
									if (o in i) {
										r = i[o--];
										break
									}
									if (--o < 0) throw new TypeError(
										"reduceRight of empty array with no initial value"
										)
								} while (1);
							do {
								o in this && (r = e.call(void 0, r, i[o], o, t))
							} while (o--);
							return r
						}), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array
							.prototype.indexOf = function(e) {
								var t = w && "[object String]" == g(this) ? this.split("") : M(
									this),
									i = t.length >>> 0;
								if (!i) return -1;
								var n = 0;
								for (arguments.length > 1 && (n = T(arguments[1])), n = n >= 0 ? n :
									Math.max(0, i + n); n < i; n++)
									if (n in t && t[n] === e) return n;
								return -1
							}), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (
							Array.prototype.lastIndexOf = function(e) {
								var t = w && "[object String]" == g(this) ? this.split("") : M(
									this),
									i = t.length >>> 0;
								if (!i) return -1;
								var n = i - 1;
								for (arguments.length > 1 && (n = Math.min(n, T(arguments[1]))), n =
									n >= 0 ? n : i - Math.abs(n); n >= 0; n--)
									if (n in t && e === t[n]) return n;
								return -1
							}), Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
							return e.__proto__ || (e.constructor ? e.constructor.prototype : u)
						}), !Object.getOwnPropertyDescriptor) {
						var b = "Object.getOwnPropertyDescriptor called on a non-object: ";
						Object.getOwnPropertyDescriptor = function(e, t) {
							if ("object" != typeof e && "function" != typeof e || null === e)
								throw new TypeError(b + e);
							if (f(e, t)) {
								var i;
								if (i = {
										enumerable: !0,
										configurable: !0
									}, l) {
									var n = e.__proto__;
									e.__proto__ = u;
									var r = s(e, t),
										o = a(e, t);
									if (e.__proto__ = n, r || o) return r && (i.get = r), o && (
										i.set = o), i
								}
								return i.value = e[t], i
							}
						}
					}(Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
						return Object.keys(e)
					}), Object.create) || (m = null === Object.prototype.__proto__ ? function() {
						return {
							__proto__: null
						}
					} : function() {
						var e = {};
						for (var t in e) e[t] = null;
						return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e
							.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e
							.__proto__ = null, e
					}, Object.create = function(e, t) {
						var i;
						if (null === e) i = m();
						else {
							if ("object" != typeof e) throw new TypeError("typeof prototype[" +
								typeof e + "] != 'object'");
							var n = function() {};
							n.prototype = e, i = new n, i.__proto__ = e
						}
						return void 0 !== t && Object.defineProperties(i, t), i
					});

					function A(e) {
						try {
							return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
						} catch (t) {}
					}
					if (Object.defineProperty) {
						var C = A({}),
							F = "undefined" == typeof document || A(document.createElement("div"));
						if (!C || !F) var y = Object.defineProperty
					}
					if (!Object.defineProperty || y) {
						var E = "Property description must be an object: ",
							x = "Object.defineProperty called on non-object: ",
							$ = "getters & setters can not be defined on this javascript engine";
						Object.defineProperty = function(e, t, i) {
							if ("object" != typeof e && "function" != typeof e || null === e)
								throw new TypeError(x + e);
							if ("object" != typeof i && "function" != typeof i || null === i)
								throw new TypeError(E + i);
							if (y) try {
								return y.call(Object, e, t, i)
							} catch (c) {}
							if (f(i, "value"))
								if (l && (s(e, t) || a(e, t))) {
									var n = e.__proto__;
									e.__proto__ = u, delete e[t], e[t] = i.value, e.__proto__ =
										n
								} else e[t] = i.value;
							else {
								if (!l) throw new TypeError($);
								f(i, "get") && r(e, t, i.get), f(i, "set") && o(e, t, i.set)
							}
							return e
						}
					}
					Object.defineProperties || (Object.defineProperties = function(e, t) {
						for (var i in t) f(t, i) && Object.defineProperty(e, i, t[i]);
						return e
					}), Object.seal || (Object.seal = function(e) {
						return e
					}), Object.freeze || (Object.freeze = function(e) {
						return e
					});
					try {
						Object.freeze((function() {}))
					} catch (O) {
						Object.freeze = function(e) {
							return function(t) {
								return "function" == typeof t ? t : e(t)
							}
						}(Object.freeze)
					}
					if (Object.preventExtensions || (Object.preventExtensions = function(e) {
							return e
						}), Object.isSealed || (Object.isSealed = function(e) {
							return !1
						}), Object.isFrozen || (Object.isFrozen = function(e) {
							return !1
						}), Object.isExtensible || (Object.isExtensible = function(e) {
							if (Object(e) === e) throw new TypeError;
							var t = "";
							while (f(e, t)) t += "?";
							e[t] = !0;
							var i = f(e, t);
							return delete e[t], i
						}), !Object.keys) {
						var k = !0,
							S = ["toString", "toLocaleString", "valueOf", "hasOwnProperty",
								"isPrototypeOf", "propertyIsEnumerable", "constructor"
							],
							B = S.length;
						for (var D in {
								toString: null
							}) k = !1;
						Object.keys = function(e) {
							if ("object" != typeof e && "function" != typeof e || null === e)
								throw new TypeError("Object.keys called on a non-object");
							var t = [];
							for (var i in e) f(e, i) && t.push(i);
							if (k)
								for (var n = 0, r = B; n < r; n++) {
									var o = S[n];
									f(e, o) && t.push(o)
								}
							return t
						}
					}
					Date.now || (Date.now = function() {
						return (new Date).getTime()
					});
					var L = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
					if (!String.prototype.trim || L.trim()) {
						L = "[" + L + "]";
						var R = new RegExp("^" + L + L + "*"),
							_ = new RegExp(L + L + "*$");
						String.prototype.trim = function() {
							return String(this).replace(R, "").replace(_, "")
						}
					}

					function T(e) {
						return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (
							e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
					}
					var M = function(e) {
						if (null == e) throw new TypeError("can't convert " + e + " to object");
						return Object(e)
					}
				})), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp",
					"ace/lib/es5-shim"
				], (function(e, t, i) {
					"use strict";
					e("./regexp"), e("./es5-shim")
				})), ace.define("ace/lib/dom", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = "http://www.w3.org/1999/xhtml";
					t.getDocumentHead = function(e) {
						return e || (e = document), e.head || e.getElementsByTagName("head")[
							0] || e.documentElement
					}, t.createElement = function(e, t) {
						return document.createElementNS ? document.createElementNS(t || n, e) :
							document.createElement(e)
					}, t.hasCssClass = function(e, t) {
						var i = (e.className + "").split(/\s+/g);
						return -1 !== i.indexOf(t)
					}, t.addCssClass = function(e, i) {
						t.hasCssClass(e, i) || (e.className += " " + i)
					}, t.removeCssClass = function(e, t) {
						var i = e.className.split(/\s+/g);
						while (1) {
							var n = i.indexOf(t);
							if (-1 == n) break;
							i.splice(n, 1)
						}
						e.className = i.join(" ")
					}, t.toggleCssClass = function(e, t) {
						var i = e.className.split(/\s+/g),
							n = !0;
						while (1) {
							var r = i.indexOf(t);
							if (-1 == r) break;
							n = !1, i.splice(r, 1)
						}
						return n && i.push(t), e.className = i.join(" "), n
					}, t.setCssClass = function(e, i, n) {
						n ? t.addCssClass(e, i) : t.removeCssClass(e, i)
					}, t.hasCssString = function(e, t) {
						var i, n = 0;
						if (t = t || document, t.createStyleSheet && (i = t.styleSheets)) {
							while (n < i.length)
								if (i[n++].owningElement.id === e) return !0
						} else if (i = t.getElementsByTagName("style"))
							while (n < i.length)
								if (i[n++].id === e) return !0;
						return !1
					}, t.importCssString = function(e, i, n) {
						if (n = n || document, i && t.hasCssString(i, n)) return null;
						var r;
						i && (e += "\n/*# sourceURL=ace/css/" + i + " */"), n.createStyleSheet ?
							(r = n.createStyleSheet(), r.cssText = e, i && (r.owningElement.id =
								i)) : (r = t.createElement("style"), r.appendChild(n
									.createTextNode(e)), i && (r.id = i), t.getDocumentHead(n)
								.appendChild(r))
					}, t.importCssStylsheet = function(e, i) {
						if (i.createStyleSheet) i.createStyleSheet(e);
						else {
							var n = t.createElement("link");
							n.rel = "stylesheet", n.href = e, t.getDocumentHead(i).appendChild(
								n)
						}
					}, t.getInnerWidth = function(e) {
						return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t
							.computedStyle(e, "paddingRight"), 10) + e.clientWidth
					}, t.getInnerHeight = function(e) {
						return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t
							.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
					}, t.scrollbarWidth = function(e) {
						var i = t.createElement("ace_inner");
						i.style.width = "100%", i.style.minWidth = "0px", i.style.height =
							"200px", i.style.display = "block";
						var n = t.createElement("ace_outer"),
							r = n.style;
						r.position = "absolute", r.left = "-10000px", r.overflow = "hidden", r
							.width = "200px", r.minWidth = "0px", r.height = "150px", r
							.display = "block", n.appendChild(i);
						var o = e.documentElement;
						o.appendChild(n);
						var s = i.offsetWidth;
						r.overflow = "scroll";
						var a = i.offsetWidth;
						return s == a && (a = n.clientWidth), o.removeChild(n), s - a
					}, "undefined" != typeof document ? (void 0 !== window.pageYOffset ? (t
						.getPageScrollTop = function() {
							return window.pageYOffset
						}, t.getPageScrollLeft = function() {
							return window.pageXOffset
						}) : (t.getPageScrollTop = function() {
						return document.body.scrollTop
					}, t.getPageScrollLeft = function() {
						return document.body.scrollLeft
					}), window.getComputedStyle ? t.computedStyle = function(e, t) {
						return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window
							.getComputedStyle(e, "") || {}
					} : t.computedStyle = function(e, t) {
						return t ? e.currentStyle[t] : e.currentStyle
					}, t.setInnerHtml = function(e, t) {
						var i = e.cloneNode(!1);
						return i.innerHTML = t, e.parentNode.replaceChild(i, e), i
					}, "textContent" in document.documentElement ? (t.setInnerText =
						function(e, t) {
							e.textContent = t
						}, t.getInnerText = function(e) {
							return e.textContent
						}) : (t.setInnerText = function(e, t) {
						e.innerText = t
					}, t.getInnerText = function(e) {
						return e.innerText
					}), t.getParentWindow = function(e) {
						return e.defaultView || e.parentWindow
					}) : t.importCssString = function() {}
				})), ace.define("ace/lib/oop", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					t.inherits = function(e, t) {
						e.super_ = t, e.prototype = Object.create(t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						})
					}, t.mixin = function(e, t) {
						for (var i in t) e[i] = t[i];
						return e
					}, t.implement = function(e, i) {
						t.mixin(e, i)
					}
				})), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers",
					"ace/lib/oop"
				], (function(e, t, i) {
					"use strict";
					e("./fixoldbrowsers");
					var n = e("./oop"),
						r = function() {
							var e, t, i = {
								MODIFIER_KEYS: {
									16: "Shift",
									17: "Ctrl",
									18: "Alt",
									224: "Meta"
								},
								KEY_MODS: {
									ctrl: 1,
									alt: 2,
									option: 2,
									shift: 4,
									super: 8,
									meta: 8,
									command: 8,
									cmd: 8
								},
								FUNCTION_KEYS: {
									8: "Backspace",
									9: "Tab",
									13: "Return",
									19: "Pause",
									27: "Esc",
									32: "Space",
									33: "PageUp",
									34: "PageDown",
									35: "End",
									36: "Home",
									37: "Left",
									38: "Up",
									39: "Right",
									40: "Down",
									44: "Print",
									45: "Insert",
									46: "Delete",
									96: "Numpad0",
									97: "Numpad1",
									98: "Numpad2",
									99: "Numpad3",
									100: "Numpad4",
									101: "Numpad5",
									102: "Numpad6",
									103: "Numpad7",
									104: "Numpad8",
									105: "Numpad9",
									"-13": "NumpadEnter",
									112: "F1",
									113: "F2",
									114: "F3",
									115: "F4",
									116: "F5",
									117: "F6",
									118: "F7",
									119: "F8",
									120: "F9",
									121: "F10",
									122: "F11",
									123: "F12",
									144: "Numlock",
									145: "Scrolllock"
								},
								PRINTABLE_KEYS: {
									32: " ",
									48: "0",
									49: "1",
									50: "2",
									51: "3",
									52: "4",
									53: "5",
									54: "6",
									55: "7",
									56: "8",
									57: "9",
									59: ";",
									61: "=",
									65: "a",
									66: "b",
									67: "c",
									68: "d",
									69: "e",
									70: "f",
									71: "g",
									72: "h",
									73: "i",
									74: "j",
									75: "k",
									76: "l",
									77: "m",
									78: "n",
									79: "o",
									80: "p",
									81: "q",
									82: "r",
									83: "s",
									84: "t",
									85: "u",
									86: "v",
									87: "w",
									88: "x",
									89: "y",
									90: "z",
									107: "+",
									109: "-",
									110: ".",
									186: ";",
									187: "=",
									188: ",",
									189: "-",
									190: ".",
									191: "/",
									192: "`",
									219: "[",
									220: "\\",
									221: "]",
									222: "'",
									111: "/",
									106: "*"
								}
							};
							for (t in i.FUNCTION_KEYS) e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] =
								parseInt(t, 10);
							for (t in i.PRINTABLE_KEYS) e = i.PRINTABLE_KEYS[t].toLowerCase(), i[
								e] = parseInt(t, 10);
							return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n
								.mixin(i, i.FUNCTION_KEYS), i.enter = i["return"], i.escape = i.esc,
								i.del = i["delete"], i[173] = "-",
								function() {
									for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e
											.length); t--;) i.KEY_MODS[t] = e.filter((function(e) {
										return t & i.KEY_MODS[e]
									})).join("-") + "-"
								}(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
						}();
					n.mixin(t, r), t.keyCodeToString = function(e) {
						var t = r[e];
						return "string" != typeof t && (t = String.fromCharCode(e)), t
							.toLowerCase()
					}
				})), ace.define("ace/lib/useragent", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					if (t.OS = {
							LINUX: "LINUX",
							MAC: "MAC",
							WINDOWS: "WINDOWS"
						}, t.getOS = function() {
							return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
						}, "object" == typeof navigator) {
						var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0]
							.toLowerCase(),
							r = navigator.userAgent;
						t.isWin = "win" == n, t.isMac = "mac" == n, t.isLinux = "linux" == n, t
							.isIE = "Microsoft Internet Explorer" == navigator.appName || navigator
							.appName.indexOf("MSAppHost") >= 0 ? parseFloat((r.match(
									/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
									) || [])[1]) : parseFloat((r.match(
								/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t
							.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window
								.Controllers || window.controllers) && "Gecko" === window.navigator
							.product, t.isOldGecko = t.isGecko && parseInt((r.match(/rv:(\d+)/) ||
							[])[1], 10) < 4, t.isOpera = window.opera && "[object Opera]" == Object
							.prototype.toString.call(window.opera), t.isWebKit = parseFloat(r.split(
								"WebKit/")[1]) || void 0, t.isChrome = parseFloat(r.split(
								" Chrome/")[1]) || void 0, t.isAIR = r.indexOf("AdobeAIR") >= 0, t
							.isIPad = r.indexOf("iPad") >= 0, t.isChromeOS = r.indexOf(" CrOS ") >=
							0, t.isIOS = /iPad|iPhone|iPod/.test(r) && !window.MSStream, t.isIOS &&
							(t.isMac = !0)
					}
				})), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys",
					"ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					var n = e("./keys"),
						r = e("./useragent"),
						o = null,
						s = 0;
					t.addListener = function(e, t, i) {
						if (e.addEventListener) return e.addEventListener(t, i, !1);
						if (e.attachEvent) {
							var n = function() {
								i.call(e, window.event)
							};
							i._wrapper = n, e.attachEvent("on" + t, n)
						}
					}, t.removeListener = function(e, t, i) {
						if (e.removeEventListener) return e.removeEventListener(t, i, !1);
						e.detachEvent && e.detachEvent("on" + t, i._wrapper || i)
					}, t.stopEvent = function(e) {
						return t.stopPropagation(e), t.preventDefault(e), !1
					}, t.stopPropagation = function(e) {
						e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
					}, t.preventDefault = function(e) {
						e.preventDefault ? e.preventDefault() : e.returnValue = !1
					}, t.getButton = function(e) {
						return "dblclick" == e.type ? 0 : "contextmenu" == e.type || r.isMac &&
							e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e
							.button : {
								1: 0,
								2: 2,
								4: 1
							} [e.button]
					}, t.capture = function(e, i, n) {
						function r(e) {
							i && i(e), n && n(e), t.removeListener(document, "mousemove", i, !
								0), t.removeListener(document, "mouseup", r, !0), t
								.removeListener(document, "dragstart", r, !0)
						}
						return t.addListener(document, "mousemove", i, !0), t.addListener(
							document, "mouseup", r, !0), t.addListener(document,
							"dragstart", r, !0), r
					}, t.addTouchMoveListener = function(e, i) {
						var n, r;
						t.addListener(e, "touchstart", (function(e) {
							var t = e.touches,
								i = t[0];
							n = i.clientX, r = i.clientY
						})), t.addListener(e, "touchmove", (function(e) {
							var t = e.touches;
							if (!(t.length > 1)) {
								var o = t[0];
								e.wheelX = n - o.clientX, e.wheelY = r - o.clientY,
									n = o.clientX, r = o.clientY, i(e)
							}
						}))
					}, t.addMouseWheelListener = function(e, i) {
						"onmousewheel" in e ? t.addListener(e, "mousewheel", (function(e) {
							var t = 8;
							void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX /
								t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX =
								0, e.wheelY = -e.wheelDelta / t), i(e)
						})) : "onwheel" in e ? t.addListener(e, "wheel", (function(e) {
							var t = .35;
							switch (e.deltaMode) {
								case e.DOM_DELTA_PIXEL:
									e.wheelX = e.deltaX * t || 0, e.wheelY = e
										.deltaY * t || 0;
									break;
								case e.DOM_DELTA_LINE:
								case e.DOM_DELTA_PAGE:
									e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (
										e.deltaY || 0);
									break
							}
							i(e)
						})) : t.addListener(e, "DOMMouseScroll", (function(e) {
							e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 *
								(e.detail || 0), e.wheelY = 0) : (e.wheelX = 0,
								e.wheelY = 5 * (e.detail || 0)), i(e)
						}))
					}, t.addMultiMouseDownListener = function(e, i, n, o) {
						var s, a, l, c = 0,
							h = {
								2: "dblclick",
								3: "tripleclick",
								4: "quadclick"
							};

						function u(e) {
							if (0 !== t.getButton(e) ? c = 0 : e.detail > 1 ? (c++, c > 4 && (
									c = 1)) : c = 1, r.isIE) {
								var u = Math.abs(e.clientX - s) > 5 || Math.abs(e.clientY - a) >
									5;
								l && !u || (c = 1), l && clearTimeout(l), l = setTimeout((
									function() {
										l = null
									}), i[c - 1] || 600), 1 == c && (s = e.clientX, a = e
									.clientY)
							}
							if (e._clicks = c, n[o]("mousedown", e), c > 4) c = 0;
							else if (c > 1) return n[o](h[c], e)
						}

						function d(e) {
							c = 2, l && clearTimeout(l), l = setTimeout((function() {
								l = null
							}), i[c - 1] || 600), n[o]("mousedown", e), n[o](h[c], e)
						}
						Array.isArray(e) || (e = [e]), e.forEach((function(e) {
							t.addListener(e, "mousedown", u), r.isOldIE && t
								.addListener(e, "dblclick", d)
						}))
					};
					var a = r.isMac && r.isOpera && !("KeyboardEvent" in window) ? function(e) {
						return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 :
							0) | (e.ctrlKey ? 8 : 0)
					} : function(e) {
						return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 :
							0) | (e.metaKey ? 8 : 0)
					};

					function l(e, t, i) {
						var l = a(t);
						if (!r.isMac && o) {
							if (t.getModifierState && (t.getModifierState("OS") || t
									.getModifierState("Win")) && (l |= 8), o.altGr) {
								if (3 == (3 & l)) return;
								o.altGr = 0
							}
							if (18 === i || 17 === i) {
								var c = "location" in t ? t.location : t.keyLocation;
								if (17 === i && 1 === c) 1 == o[i] && (s = t.timeStamp);
								else if (18 === i && 3 === l && 2 === c) {
									var h = t.timeStamp - s;
									h < 50 && (o.altGr = !0)
								}
							}
						}
						if (i in n.MODIFIER_KEYS && (i = -1), 8 & l && i >= 91 && i <= 93 && (i = -
								1), !l && 13 === i) {
							c = "location" in t ? t.location : t.keyLocation;
							if (3 === c && (e(t, l, -i), t.defaultPrevented)) return
						}
						if (r.isChromeOS && 8 & l) {
							if (e(t, l, i), t.defaultPrevented) return;
							l &= -9
						}
						return !!(l || i in n.FUNCTION_KEYS || i in n.PRINTABLE_KEYS) && e(t, l, i)
					}

					function c() {
						o = Object.create(null)
					}
					if (t.getModifierString = function(e) {
							return n.KEY_MODS[a(e)]
						}, t.addCommandKeyListener = function(e, i) {
							var n = t.addListener;
							if (r.isOldGecko || r.isOpera && !("KeyboardEvent" in window)) {
								var s = null;
								n(e, "keydown", (function(e) {
									s = e.keyCode
								})), n(e, "keypress", (function(e) {
									return l(i, e, s)
								}))
							} else {
								var a = null;
								n(e, "keydown", (function(e) {
									o[e.keyCode] = (o[e.keyCode] || 0) + 1;
									var t = l(i, e, e.keyCode);
									return a = e.defaultPrevented, t
								})), n(e, "keypress", (function(e) {
									a && (e.ctrlKey || e.altKey || e.shiftKey || e
										.metaKey) && (t.stopEvent(e), a = null)
								})), n(e, "keyup", (function(e) {
									o[e.keyCode] = null
								})), o || (c(), n(window, "focus", c))
							}
						}, "object" == typeof window && window.postMessage && !r.isOldIE) {
						var h = 1;
						t.nextTick = function(e, i) {
							i = i || window;
							var n = "zero-timeout-message-" + h;
							t.addListener(i, "message", (function r(o) {
								o.data == n && (t.stopPropagation(o), t
									.removeListener(i, "message", r), e())
							})), i.postMessage(n, "*")
						}
					}
					t.nextFrame = "object" == typeof window && (window.requestAnimationFrame ||
							window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame || window.oRequestAnimationFrame), t
						.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame =
						function(e) {
							setTimeout(e, 17)
						}
				})), ace.define("ace/lib/lang", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					t.last = function(e) {
						return e[e.length - 1]
					}, t.stringReverse = function(e) {
						return e.split("").reverse().join("")
					}, t.stringRepeat = function(e, t) {
						var i = "";
						while (t > 0) 1 & t && (i += e), (t >>= 1) && (e += e);
						return i
					};
					var n = /^\s\s*/,
						r = /\s\s*$/;
					t.stringTrimLeft = function(e) {
						return e.replace(n, "")
					}, t.stringTrimRight = function(e) {
						return e.replace(r, "")
					}, t.copyObject = function(e) {
						var t = {};
						for (var i in e) t[i] = e[i];
						return t
					}, t.copyArray = function(e) {
						for (var t = [], i = 0, n = e.length; i < n; i++) e[i] && "object" ==
							typeof e[i] ? t[i] = this.copyObject(e[i]) : t[i] = e[i];
						return t
					}, t.deepCopy = function e(t) {
						if ("object" !== typeof t || !t) return t;
						var i;
						if (Array.isArray(t)) {
							i = [];
							for (var n = 0; n < t.length; n++) i[n] = e(t[n]);
							return i
						}
						if ("[object Object]" !== Object.prototype.toString.call(t)) return t;
						for (var n in i = {}, t) i[n] = e(t[n]);
						return i
					}, t.arrayToMap = function(e) {
						for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = 1;
						return t
					}, t.createMap = function(e) {
						var t = Object.create(null);
						for (var i in e) t[i] = e[i];
						return t
					}, t.arrayRemove = function(e, t) {
						for (var i = 0; i <= e.length; i++) t === e[i] && e.splice(i, 1)
					}, t.escapeRegExp = function(e) {
						return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
					}, t.escapeHTML = function(e) {
						return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g,
							"&#39;").replace(/</g, "&#60;")
					}, t.getMatchOffsets = function(e, t) {
						var i = [];
						return e.replace(t, (function(e) {
							i.push({
								offset: arguments[arguments.length - 2],
								length: e.length
							})
						})), i
					}, t.deferredCall = function(e) {
						var t = null,
							i = function() {
								t = null, e()
							},
							n = function(e) {
								return n.cancel(), t = setTimeout(i, e || 0), n
							};
						return n.schedule = n, n.call = function() {
							return this.cancel(), e(), n
						}, n.cancel = function() {
							return clearTimeout(t), t = null, n
						}, n.isPending = function() {
							return t
						}, n
					}, t.delayedCall = function(e, t) {
						var i = null,
							n = function() {
								i = null, e()
							},
							r = function(e) {
								null == i && (i = setTimeout(n, e || t))
							};
						return r.delay = function(e) {
							i && clearTimeout(i), i = setTimeout(n, e || t)
						}, r.schedule = r, r.call = function() {
							this.cancel(), e()
						}, r.cancel = function() {
							i && clearTimeout(i), i = null
						}, r.isPending = function() {
							return i
						}, r
					}
				})), ace.define("ace/keyboard/textinput_ios", ["require", "exports", "module",
					"ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/lib/keys"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/event"),
						r = e("../lib/useragent"),
						o = e("../lib/dom"),
						s = e("../lib/lang"),
						a = e("../lib/keys"),
						l = a.KEY_MODS,
						c = r.isChrome < 18,
						h = r.isIE,
						u = function(e, t) {
							var i = o.createElement("textarea");
							i.className = r.isIOS ? "ace_text-input ace_text-input-ios" :
								"ace_text-input", r.isTouchPad && i.setAttribute(
									"x-palm-disable-auto-cap", !0), i.setAttribute("wrap", "off"), i
								.setAttribute("autocorrect", "off"), i.setAttribute(
									"autocapitalize", "off"), i.setAttribute("spellcheck", !1), i
								.style.opacity = "0", e.insertBefore(i, e.firstChild);
							var u = "\n aaaa a\n",
								d = !1,
								g = !1,
								f = !1,
								p = !1,
								m = "",
								v = !0;
							try {
								var w = document.activeElement === i
							} catch (V) {}
							n.addListener(i, "blur", (function(e) {
								t.onBlur(e), w = !1
							})), n.addListener(i, "focus", (function(e) {
								w = !0, t.onFocus(e), C()
							})), this.focus = function() {
								if (m) return i.focus();
								i.style.position = "fixed", i.focus()
							}, this.blur = function() {
								i.blur()
							}, this.isFocused = function() {
								return w
							};
							var b = s.delayedCall((function() {
									w && C(v)
								})),
								A = s.delayedCall((function() {
									p || (i.value = u, w && C())
								}));

							function C(e) {
								if (!p) {
									if (p = !0, x) t = 0, n = e ? 0 : i.value.length - 1;
									else var t = 4,
										n = 5;
									try {
										i.setSelectionRange(t, n)
									} catch (V) {}
									p = !1
								}
							}

							function F() {
								p || (i.value = u, r.isWebKit && A.schedule())
							}
							r.isWebKit || t.addEventListener("changeSelection", (function() {
								t.selection.isEmpty() != v && (v = !v, b.schedule())
							})), F(), w && t.onFocus();
							var y = function(e) {
									return 0 === e.selectionStart && e.selectionEnd === e.value
										.length
								},
								E = function(e) {
									y(i) ? (t.selectAll(), C()) : x && C(t.selection.isEmpty())
								},
								x = null;
							this.setInputHandler = function(e) {
								x = e
							}, this.getInputHandler = function() {
								return x
							};
							var $ = !1,
								k = function(e) {
									4 === i.selectionStart && 5 === i.selectionEnd || (x && (e = x(
											e), x = null), f ? (C(), e && t.onPaste(e), f = !
										1) : e == u.substr(0) && 4 === i.selectionStart ? $ ? t
										.execCommand("del", {
											source: "ace"
										}) : t.execCommand("backspace", {
											source: "ace"
										}) : d || (e.substring(0, 9) == u && e.length > u
											.length ? e = e.substr(9) : e.substr(0, 4) == u
											.substr(0, 4) ? e = e.substr(4, e.length - u
												.length + 1) : e.charAt(e.length - 1) == u
											.charAt(0) && (e = e.slice(0, -1)), e == u.charAt(
											0) || e.charAt(e.length - 1) == u.charAt(0) && (e =
												e.slice(0, -1)), e && t.onTextInput(e)), d && (
											d = !1), $ && ($ = !1))
								},
								S = function(e) {
									if (!p) {
										var t = i.value;
										k(t), F()
									}
								},
								B = function(e, t, i) {
									var n = e.clipboardData || window.clipboardData;
									if (n && !c) {
										var r = h || i ? "Text" : "text/plain";
										try {
											return t ? !1 !== n.setData(r, t) : n.getData(r)
										} catch (e) {
											if (!i) return B(e, t, !0)
										}
									}
								},
								D = function(e, o) {
									var s = t.getCopyText();
									if (!s) return n.preventDefault(e);
									B(e, s) ? (r.isIOS && (g = o, i.value = "\n aa" + s + "a a\n", i
											.setSelectionRange(4, 4 + s.length), d = {
												value: s
											}), o ? t.onCut() : t.onCopy(), r.isIOS || n
										.preventDefault(e)) : (d = !0, i.value = s, i.select(),
										setTimeout((function() {
											d = !1, F(), C(), o ? t.onCut() : t.onCopy()
										})))
								},
								L = function(e) {
									D(e, !0)
								},
								R = function(e) {
									D(e, !1)
								},
								_ = function(e) {
									var o = B(e);
									"string" == typeof o ? (o && t.onPaste(o, e), r.isIE &&
										setTimeout(C), n.preventDefault(e)) : (i.value = "",
										f = !0)
								};
							n.addCommandKeyListener(i, t.onCommandKey.bind(t)), n.addListener(i,
								"select", E), n.addListener(i, "input", S), n.addListener(i,
								"cut", L), n.addListener(i, "copy", R), n.addListener(i,
								"paste", _);
							var T, M = function(e) {
									p || !t.onCompositionStart || t.$readOnly || (p = {}, p
										.canUndo = t.session.$undoManager, t
										.onCompositionStart(), setTimeout(O, 0), t.on(
											"mousedown", I), p.canUndo && !t.selection
									.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t
											.selection.clearSelection()), t.session
										.markUndoGroup())
								},
								O = function() {
									if (p && t.onCompositionUpdate && !t.$readOnly) {
										var e = i.value.replace(/\x01/g, "");
										if (p.lastValue !== e && (t.onCompositionUpdate(e), p
												.lastValue && t.undo(), p.canUndo && (p.lastValue =
													e), p.lastValue)) {
											var n = t.selection.getRange();
											t.insert(p.lastValue), t.session.markUndoGroup(), p
												.range = t.selection.getRange(), t.selection
												.setRange(n), t.selection.clearSelection()
										}
									}
								},
								I = function(e) {
									if (t.onCompositionEnd && !t.$readOnly) {
										var n = p;
										p = !1;
										var o = setTimeout((function() {
											o = null;
											var e = i.value.replace(/\x01/g, "");
											p || (e == n.lastValue ? F() : !n
												.lastValue && e && (F(), k(e)))
										}));
										x = function(e) {
												return o && clearTimeout(o), e = e.replace(/\x01/g,
													""), e == n.lastValue ? "" : (n.lastValue &&
													o && t.undo(), e)
											}, t.onCompositionEnd(), t.removeListener("mousedown",
												I), "compositionend" == e.type && n.range && t
											.selection.setRange(n.range);
										var s = !!r.isChrome && r.isChrome >= 53 || !!r.isWebKit &&
											r.isWebKit >= 603;
										s && S()
									}
								},
								P = s.delayedCall(O, 50);

							function W() {
								clearTimeout(T), T = setTimeout((function() {
									m && (i.style.cssText = m, m = ""), null == t
										.renderer.$keepTextAreaAtCursor && (t.renderer
											.$keepTextAreaAtCursor = !0, t.renderer
											.$moveTextAreaToCursor())
								}), 0)
							}
							n.addListener(i, "compositionstart", M), r.isGecko ? n.addListener(i,
									"text", (function() {
										P.schedule()
									})) : (n.addListener(i, "keyup", (function() {
									P.schedule()
								})), n.addListener(i, "keydown", (function() {
									P.schedule()
								}))), n.addListener(i, "compositionend", I), this.getElement =
								function() {
									return i
								}, this.setReadOnly = function(e) {
									i.readOnly = e
								}, this.onContextMenu = function(e) {
									$ = !0, C(t.selection.isEmpty()), t._emit("nativecontextmenu", {
										target: t,
										domEvent: e
									}), this.moveToMouse(e, !0)
								}, this.moveToMouse = function(e, s) {
									m || (m = i.style.cssText), i.style.cssText = (s ?
											"z-index:100000;" : "") + "height:" + i.style.height +
										";" + (r.isIE ? "opacity:0.1;" : "");
									var a = t.container.getBoundingClientRect(),
										l = o.computedStyle(t.container),
										c = a.top + (parseInt(l.borderTopWidth) || 0),
										h = a.left + (parseInt(a.borderLeftWidth) || 0),
										u = a.bottom - c - i.clientHeight - 2,
										d = function(e) {
											i.style.left = e.clientX - h - 2 + "px", i.style.top =
												Math.min(e.clientY - c - 2, u) + "px"
										};
									d(e), "mousedown" == e.type && (t.renderer
										.$keepTextAreaAtCursor && (t.renderer
											.$keepTextAreaAtCursor = null), clearTimeout(T), r
										.isWin && n.capture(t.container, d, W))
								}, this.onContextMenuClose = W;
							var j = function(e) {
								t.textInput.onContextMenu(e), W()
							};
							if (n.addListener(i, "mouseup", j), n.addListener(i, "mousedown", (
									function(e) {
										e.preventDefault(), W()
									})), n.addListener(t.renderer.scroller, "contextmenu", j), n
								.addListener(i, "contextmenu", j), r.isIOS) {
								var N = null,
									H = !1;
								e.addEventListener("keydown", (function(e) {
									N && clearTimeout(N), H = !0
								})), e.addEventListener("keyup", (function(e) {
									N = setTimeout((function() {
										H = !1
									}), 100)
								}));
								var z = function(e) {
									if (document.activeElement === i && !H) {
										if (g) return setTimeout((function() {
											g = !1
										}), 100);
										var n = i.selectionStart,
											r = i.selectionEnd;
										if (i.setSelectionRange(4, 5), n == r) switch (n) {
											case 0:
												t.onCommandKey(null, 0, a.up);
												break;
											case 1:
												t.onCommandKey(null, 0, a.home);
												break;
											case 2:
												t.onCommandKey(null, l.option, a.left);
												break;
											case 4:
												t.onCommandKey(null, 0, a.left);
												break;
											case 5:
												t.onCommandKey(null, 0, a.right);
												break;
											case 7:
												t.onCommandKey(null, l.option, a.right);
												break;
											case 8:
												t.onCommandKey(null, 0, a.end);
												break;
											case 9:
												t.onCommandKey(null, 0, a.down);
												break
										} else {
											switch (r) {
												case 6:
													t.onCommandKey(null, l.shift, a.right);
													break;
												case 7:
													t.onCommandKey(null, l.shift | l.option,
														a.right);
													break;
												case 8:
													t.onCommandKey(null, l.shift, a.end);
													break;
												case 9:
													t.onCommandKey(null, l.shift, a.down);
													break
											}
											switch (n) {
												case 0:
													t.onCommandKey(null, l.shift, a.up);
													break;
												case 1:
													t.onCommandKey(null, l.shift, a.home);
													break;
												case 2:
													t.onCommandKey(null, l.shift | l.option,
														a.left);
													break;
												case 3:
													t.onCommandKey(null, l.shift, a.left);
													break
											}
										}
									}
								};
								document.addEventListener("selectionchange", z), t.on("destroy", (
									function() {
										document.removeEventListener("selectionchange", z)
									}))
							}
						};
					t.TextInput = u
				})), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event",
					"ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/keyboard/textinput_ios"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/event"),
						r = e("../lib/useragent"),
						o = e("../lib/dom"),
						s = e("../lib/lang"),
						a = r.isChrome < 18,
						l = r.isIE,
						c = e("./textinput_ios").TextInput,
						h = function(e, t) {
							if (r.isIOS) return c.call(this, e, t);
							var i = o.createElement("textarea");
							i.className = "ace_text-input", i.setAttribute("wrap", "off"), i
								.setAttribute("autocorrect", "off"), i.setAttribute(
									"autocapitalize", "off"), i.setAttribute("spellcheck", !1), i
								.style.opacity = "0", e.insertBefore(i, e.firstChild);
							var h = "\u2028\u2028",
								u = !1,
								d = !1,
								g = !1,
								f = "",
								p = !0;
							try {
								var m = document.activeElement === i
							} catch (W) {}
							n.addListener(i, "blur", (function(e) {
								t.onBlur(e), m = !1
							})), n.addListener(i, "focus", (function(e) {
								m = !0, t.onFocus(e), b()
							})), this.focus = function() {
								if (f) return i.focus();
								var e = i.style.top;
								i.style.position = "fixed", i.style.top = "0px", i.focus(),
									setTimeout((function() {
										i.style.position = "", "0px" == i.style.top && (
											i.style.top = e)
									}), 0)
							}, this.blur = function() {
								i.blur()
							}, this.isFocused = function() {
								return m
							};
							var v = s.delayedCall((function() {
									m && b(p)
								})),
								w = s.delayedCall((function() {
									g || (i.value = h, m && b())
								}));

							function b(e) {
								if (!g) {
									if (g = !0, y) var t = 0,
										n = e ? 0 : i.value.length - 1;
									else t = e ? 2 : 1, n = 2;
									try {
										i.setSelectionRange(t, n)
									} catch (W) {}
									g = !1
								}
							}

							function A() {
								g || (i.value = h, r.isWebKit && w.schedule())
							}
							r.isWebKit || t.addEventListener("changeSelection", (function() {
								t.selection.isEmpty() != p && (p = !p, v.schedule())
							})), A(), m && t.onFocus();
							var C = function(e) {
									return 0 === e.selectionStart && e.selectionEnd === e.value
										.length
								},
								F = function(e) {
									u ? u = !1 : C(i) ? (t.selectAll(), b()) : y && b(t.selection
										.isEmpty())
								},
								y = null;
							this.setInputHandler = function(e) {
								y = e
							}, this.getInputHandler = function() {
								return y
							};
							var E = !1,
								x = function(e) {
									y && (e = y(e), y = null), d ? (b(), e && t.onPaste(e), d = !
										1) : e == h.charAt(0) ? E ? t.execCommand("del", {
											source: "ace"
										}) : t.execCommand("backspace", {
											source: "ace"
										}) : (e.substring(0, 2) == h ? e = e.substr(2) : e.charAt(
											0) == h.charAt(0) ? e = e.substr(1) : e.charAt(e
												.length - 1) == h.charAt(0) && (e = e.slice(0, -1)),
											e.charAt(e.length - 1) == h.charAt(0) && (e = e.slice(0,
												-1)), e && t.onTextInput(e)), E && (E = !1)
								},
								$ = function(e) {
									if (!g) {
										var t = i.value;
										x(t), A()
									}
								},
								k = function(e, t, i) {
									var n = e.clipboardData || window.clipboardData;
									if (n && !a) {
										var r = l || i ? "Text" : "text/plain";
										try {
											return t ? !1 !== n.setData(r, t) : n.getData(r)
										} catch (e) {
											if (!i) return k(e, t, !0)
										}
									}
								},
								S = function(e, r) {
									var o = t.getCopyText();
									if (!o) return n.preventDefault(e);
									k(e, o) ? (r ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (
										u = !0, i.value = o, i.select(), setTimeout((
									function() {
											u = !1, A(), b(), r ? t.onCut() : t.onCopy()
										})))
								},
								B = function(e) {
									S(e, !0)
								},
								D = function(e) {
									S(e, !1)
								},
								L = function(e) {
									var o = k(e);
									"string" == typeof o ? (o && t.onPaste(o, e), r.isIE &&
										setTimeout(b), n.preventDefault(e)) : (i.value = "",
										d = !0)
								};
							n.addCommandKeyListener(i, t.onCommandKey.bind(t)), n.addListener(i,
									"select", F), n.addListener(i, "input", $), n.addListener(i,
									"cut", B), n.addListener(i, "copy", D), n.addListener(i,
									"paste", L), "oncut" in i && "oncopy" in i && "onpaste" in i ||
								n.addListener(e, "keydown", (function(e) {
									if ((!r.isMac || e.metaKey) && e.ctrlKey) switch (e
										.keyCode) {
										case 67:
											D(e);
											break;
										case 86:
											L(e);
											break;
										case 88:
											B(e);
											break
									}
								}));
							var R, _ = function(e) {
									g || !t.onCompositionStart || t.$readOnly || (g = {}, g
										.canUndo = t.session.$undoManager, t
										.onCompositionStart(), setTimeout(T, 0), t.on(
											"mousedown", M), g.canUndo && !t.selection
									.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t
											.selection.clearSelection()), t.session
										.markUndoGroup())
								},
								T = function() {
									if (g && t.onCompositionUpdate && !t.$readOnly) {
										var e = i.value.replace(/\u2028/g, "");
										if (g.lastValue !== e && (t.onCompositionUpdate(e), g
												.lastValue && t.undo(), g.canUndo && (g.lastValue =
													e), g.lastValue)) {
											var n = t.selection.getRange();
											t.insert(g.lastValue), t.session.markUndoGroup(), g
												.range = t.selection.getRange(), t.selection
												.setRange(n), t.selection.clearSelection()
										}
									}
								},
								M = function(e) {
									if (t.onCompositionEnd && !t.$readOnly) {
										var n = g;
										g = !1;
										var o = setTimeout((function() {
											o = null;
											var e = i.value.replace(/\u2028/g, "");
											g || (e == n.lastValue ? A() : !n
												.lastValue && e && (A(), x(e)))
										}));
										y = function(e) {
												return o && clearTimeout(o), e = e.replace(
													/\u2028/g, ""), e == n.lastValue ? "" : (n
													.lastValue && o && t.undo(), e)
											}, t.onCompositionEnd(), t.removeListener("mousedown",
												M), "compositionend" == e.type && n.range && t
											.selection.setRange(n.range);
										var s = !!r.isChrome && r.isChrome >= 53 || !!r.isWebKit &&
											r.isWebKit >= 603;
										s && $()
									}
								},
								O = s.delayedCall(T, 50);

							function I() {
								clearTimeout(R), R = setTimeout((function() {
									f && (i.style.cssText = f, f = ""), null == t
										.renderer.$keepTextAreaAtCursor && (t.renderer
											.$keepTextAreaAtCursor = !0, t.renderer
											.$moveTextAreaToCursor())
								}), 0)
							}
							n.addListener(i, "compositionstart", _), r.isGecko ? n.addListener(i,
									"text", (function() {
										O.schedule()
									})) : (n.addListener(i, "keyup", (function() {
									O.schedule()
								})), n.addListener(i, "keydown", (function() {
									O.schedule()
								}))), n.addListener(i, "compositionend", M), this.getElement =
								function() {
									return i
								}, this.setReadOnly = function(e) {
									i.readOnly = e
								}, this.onContextMenu = function(e) {
									E = !0, b(t.selection.isEmpty()), t._emit("nativecontextmenu", {
										target: t,
										domEvent: e
									}), this.moveToMouse(e, !0)
								}, this.moveToMouse = function(e, s) {
									f || (f = i.style.cssText), i.style.cssText = (s ?
											"z-index:100000;" : "") + "height:" + i.style.height +
										";" + (r.isIE ? "opacity:0.1;" : "");
									var a = t.container.getBoundingClientRect(),
										l = o.computedStyle(t.container),
										c = a.top + (parseInt(l.borderTopWidth) || 0),
										h = a.left + (parseInt(a.borderLeftWidth) || 0),
										u = a.bottom - c - i.clientHeight - 2,
										d = function(e) {
											i.style.left = e.clientX - h - 2 + "px", i.style.top =
												Math.min(e.clientY - c - 2, u) + "px"
										};
									d(e), "mousedown" == e.type && (t.renderer
										.$keepTextAreaAtCursor && (t.renderer
											.$keepTextAreaAtCursor = null), clearTimeout(R), r
										.isWin && n.capture(t.container, d, I))
								}, this.onContextMenuClose = I;
							var P = function(e) {
								t.textInput.onContextMenu(e), I()
							};
							n.addListener(i, "mouseup", P), n.addListener(i, "mousedown", (function(
									e) {
									e.preventDefault(), I()
								})), n.addListener(t.renderer.scroller, "contextmenu", P), n
								.addListener(i, "contextmenu", P)
						};
					t.TextInput = h
				})), ace.define("ace/mouse/default_handlers", ["require", "exports", "module",
					"ace/lib/dom", "ace/lib/event", "ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					e("../lib/dom"), e("../lib/event");
					var n = e("../lib/useragent"),
						r = 0,
						o = 250;

					function s(e) {
						e.$clickSelection = null;
						var t = e.editor;
						t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t
							.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t
							.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t
							.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t
							.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)), t
							.setDefaultHandler("touchmove", this.onTouchMove.bind(e));
						var i = ["select", "startSelect", "selectEnd", "selectAllEnd",
							"selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd",
							"focusWait"
						];
						i.forEach((function(t) {
							e[t] = this[t]
						}), this), e.selectByLines = this.extendSelectionBy.bind(e,
							"getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e,
							"getWordRange")
					}

					function a(e, t, i, n) {
						return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
					}

					function l(e, t) {
						if (e.start.row == e.end.row) var i = 2 * t.column - e.start.column - e.end
							.column;
						else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) i =
							2 * t.row - e.start.row - e.end.row;
						else var i = t.column - 4;
						return i < 0 ? {
							cursor: e.start,
							anchor: e.end
						} : {
							cursor: e.end,
							anchor: e.start
						}
					}(function() {
						this.onMouseDown = function(e) {
								var t = e.inSelection(),
									i = e.getDocumentPosition();
								this.mousedownEvent = e;
								var r = this.editor,
									o = e.getButton();
								if (0 !== o) {
									var s = r.getSelectionRange(),
										a = s.isEmpty();
									return r.$blockScrolling++, (a || 1 == o) && r.selection
										.moveToPosition(i), r.$blockScrolling--, void(2 == o &&
											(r.textInput.onContextMenu(e.domEvent), n
												.isMozilla || e.preventDefault()))
								}
								return this.mousedownEvent.time = Date.now(), !t || r
								.isFocused() || (r.focus(), !this.$focusTimout || this
									.$clickSelection || r.inMultiSelectMode) ? (this
									.captureMouse(e), this.startSelect(i, e.domEvent
										._clicks > 1), e.preventDefault()) : (this.setState(
									"focusWait"), void this.captureMouse(e))
							}, this.startSelect = function(e, t) {
								e = e || this.editor.renderer.screenToTextCoordinates(this.x,
									this.y);
								var i = this.editor;
								i.$blockScrolling++, this.mousedownEvent.getShiftKey() ? i
									.selection.selectToPosition(e) : t || i.selection
									.moveToPosition(e), t || this.select(), i.renderer.scroller
									.setCapture && i.renderer.scroller.setCapture(), i.setStyle(
										"ace_selecting"), this.setState("select"), i
									.$blockScrolling--
							}, this.select = function() {
								var e, t = this.editor,
									i = t.renderer.screenToTextCoordinates(this.x, this.y);
								if (t.$blockScrolling++, this.$clickSelection) {
									var n = this.$clickSelection.comparePoint(i);
									if (-1 == n) e = this.$clickSelection.end;
									else if (1 == n) e = this.$clickSelection.start;
									else {
										var r = l(this.$clickSelection, i);
										i = r.cursor, e = r.anchor
									}
									t.selection.setSelectionAnchor(e.row, e.column)
								}
								t.selection.selectToPosition(i), t.$blockScrolling--, t.renderer
									.scrollCursorIntoView()
							}, this.extendSelectionBy = function(e) {
								var t, i = this.editor,
									n = i.renderer.screenToTextCoordinates(this.x, this.y),
									r = i.selection[e](n.row, n.column);
								if (i.$blockScrolling++, this.$clickSelection) {
									var o = this.$clickSelection.comparePoint(r.start),
										s = this.$clickSelection.comparePoint(r.end);
									if (-1 == o && s <= 0) t = this.$clickSelection.end, r.end
										.row == n.row && r.end.column == n.column || (n = r
											.start);
									else if (1 == s && o >= 0) t = this.$clickSelection.start, r
										.start.row == n.row && r.start.column == n.column || (
											n = r.end);
									else if (-1 == o && 1 == s) n = r.end, t = r.start;
									else {
										var a = l(this.$clickSelection, n);
										n = a.cursor, t = a.anchor
									}
									i.selection.setSelectionAnchor(t.row, t.column)
								}
								i.selection.selectToPosition(n), i.$blockScrolling--, i.renderer
									.scrollCursorIntoView()
							}, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this
							.selectByLinesEnd = function() {
								this.$clickSelection = null, this.editor.unsetStyle(
										"ace_selecting"), this.editor.renderer.scroller
									.releaseCapture && this.editor.renderer.scroller
									.releaseCapture()
							}, this.focusWait = function() {
								var e = a(this.mousedownEvent.x, this.mousedownEvent.y, this.x,
										this.y),
									t = Date.now();
								(e > r || t - this.mousedownEvent.time > this.$focusTimout) &&
								this.startSelect(this.mousedownEvent.getDocumentPosition())
							}, this.onDoubleClick = function(e) {
								var t = e.getDocumentPosition(),
									i = this.editor,
									n = i.session,
									r = n.getBracketRange(t);
								r ? (r.isEmpty() && (r.start.column--, r.end.column++), this
										.setState("select")) : (r = i.selection.getWordRange(t
										.row, t.column), this.setState("selectByWords")), this
									.$clickSelection = r, this.select()
							}, this.onTripleClick = function(e) {
								var t = e.getDocumentPosition(),
									i = this.editor;
								this.setState("selectByLines");
								var n = i.getSelectionRange();
								n.isMultiLine() && n.contains(t.row, t.column) ? (this
										.$clickSelection = i.selection.getLineRange(n.start
										.row), this.$clickSelection.end = i.selection
										.getLineRange(n.end.row).end) : this.$clickSelection = i
									.selection.getLineRange(t.row), this.select()
							}, this.onQuadClick = function(e) {
								var t = this.editor;
								t.selectAll(), this.$clickSelection = t.getSelectionRange(),
									this.setState("selectAll")
							}, this.onMouseWheel = function(e) {
								if (!e.getAccelKey()) {
									e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e
										.wheelY, e.wheelY = 0);
									var t = this.editor;
									this.$lastScroll || (this.$lastScroll = {
										t: 0,
										vx: 0,
										vy: 0,
										allowed: 0
									});
									var i = this.$lastScroll,
										n = e.domEvent.timeStamp,
										r = n - i.t,
										s = e.wheelX / r,
										a = e.wheelY / r;
									r < o && (s = (s + i.vx) / 2, a = (a + i.vy) / 2);
									var l = Math.abs(s / a),
										c = !1;
									if (l >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed,
											0) && (c = !0), l <= 1 && t.renderer.isScrollableBy(
											0, e.wheelY * e.speed) && (c = !0), c) i.allowed =
									n;
									else if (n - i.allowed < o) {
										var h = Math.abs(s) <= 1.1 * Math.abs(i.vx) && Math.abs(
											a) <= 1.1 * Math.abs(i.vy);
										h ? (c = !0, i.allowed = n) : i.allowed = 0
									}
									return i.t = n, i.vx = s, i.vy = a, c ? (t.renderer
										.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e
										.stop()) : void 0
								}
							}, this.onTouchMove = function(e) {
								this.editor._emit("mousewheel", e)
							}
					}).call(s.prototype), t.DefaultHandlers = s
				})), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/dom"], (function(e, t, i) {
					"use strict";
					e("./lib/oop");
					var n = e("./lib/dom");

					function r(e) {
						this.isOpen = !1, this.$element = null, this.$parentNode = e
					}(function() {
						this.$init = function() {
							return this.$element = n.createElement("div"), this.$element
								.className = "ace_tooltip", this.$element.style.display =
								"none", this.$parentNode.appendChild(this.$element), this
								.$element
						}, this.getElement = function() {
							return this.$element || this.$init()
						}, this.setText = function(e) {
							n.setInnerText(this.getElement(), e)
						}, this.setHtml = function(e) {
							this.getElement().innerHTML = e
						}, this.setPosition = function(e, t) {
							this.getElement().style.left = e + "px", this.getElement().style
								.top = t + "px"
						}, this.setClassName = function(e) {
							n.addCssClass(this.getElement(), e)
						}, this.show = function(e, t, i) {
							null != e && this.setText(e), null != t && null != i && this
								.setPosition(t, i), this.isOpen || (this.getElement().style
									.display = "block", this.isOpen = !0)
						}, this.hide = function() {
							this.isOpen && (this.getElement().style.display = "none", this
								.isOpen = !1)
						}, this.getHeight = function() {
							return this.getElement().offsetHeight
						}, this.getWidth = function() {
							return this.getElement().offsetWidth
						}, this.destroy = function() {
							this.isOpen = !1, this.$element && this.$element.parentNode &&
								this.$element.parentNode.removeChild(this.$element)
						}
					}).call(r.prototype), t.Tooltip = r
				})), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module",
					"ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/dom"),
						r = e("../lib/oop"),
						o = e("../lib/event"),
						s = e("../tooltip").Tooltip;

					function a(e) {
						var t, i, r, s = e.editor,
							a = s.renderer.$gutterLayer,
							c = new l(s.container);

						function h() {
							var t = i.getDocumentPosition().row,
								n = a.$annotations[t];
							if (!n) return u();
							var o = s.session.getLength();
							if (t == o) {
								var l = s.renderer.pixelToScreenCoordinates(0, i.y).row,
									h = i.$pos;
								if (l > s.session.documentToScreenRow(h.row, h.column)) return u()
							}
							if (r != n)
								if (r = n.text.join("<br/>"), c.setHtml(r), c.show(), s._signal(
										"showGutterTooltip", c), s.on("mousewheel", u), e
									.$tooltipFollowsMouse) d(i);
								else {
									var g = i.domEvent.target,
										f = g.getBoundingClientRect(),
										p = c.getElement().style;
									p.left = f.right + "px", p.top = f.bottom + "px"
								}
						}

						function u() {
							t && (t = clearTimeout(t)), r && (c.hide(), r = null, s._signal(
								"hideGutterTooltip", c), s.removeEventListener("mousewheel",
								u))
						}

						function d(e) {
							c.setPosition(e.x, e.y)
						}
						e.editor.setDefaultHandler("guttermousedown", (function(t) {
							if (s.isFocused() && 0 == t.getButton()) {
								var i = a.getRegion(t);
								if ("foldWidgets" != i) {
									var n = t.getDocumentPosition().row,
										r = s.session.selection;
									if (t.getShiftKey()) r.selectTo(n, 0);
									else {
										if (2 == t.domEvent.detail) return s
										.selectAll(), t.preventDefault();
										e.$clickSelection = s.selection.getLineRange(n)
									}
									return e.setState("selectByLines"), e.captureMouse(
										t), t.preventDefault()
								}
							}
						})), e.editor.setDefaultHandler("guttermousemove", (function(o) {
							var s = o.domEvent.target || o.domEvent.srcElement;
							if (n.hasCssClass(s, "ace_fold-widget")) return u();
							r && e.$tooltipFollowsMouse && d(o), i = o, t || (t =
								setTimeout((function() {
									t = null, i && !e.isMousePressed ? h() :
										u()
								}), 50))
						})), o.addListener(s.renderer.$gutter, "mouseout", (function(e) {
							i = null, r && !t && (t = setTimeout((function() {
								t = null, u()
							}), 50))
						})), s.on("changeSession", u)
					}

					function l(e) {
						s.call(this, e)
					}
					r.inherits(l, s),
						function() {
							this.setPosition = function(e, t) {
								var i = window.innerWidth || document.documentElement
									.clientWidth,
									n = window.innerHeight || document.documentElement
									.clientHeight,
									r = this.getWidth(),
									o = this.getHeight();
								e += 15, t += 15, e + r > i && (e -= e + r - i), t + o > n && (
									t -= 20 + o), s.prototype.setPosition.call(this, e, t)
							}
						}.call(l.prototype), t.GutterHandler = a
				})), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event",
					"ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/event"),
						r = e("../lib/useragent"),
						o = t.MouseEvent = function(e, t) {
							this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX,
								this.y = this.clientY = e.clientY, this.$pos = null, this
								.$inSelection = null, this.propagationStopped = !1, this
								.defaultPrevented = !1
						};
					(function() {
						this.stopPropagation = function() {
							n.stopPropagation(this.domEvent), this.propagationStopped = !0
						}, this.preventDefault = function() {
							n.preventDefault(this.domEvent), this.defaultPrevented = !0
						}, this.stop = function() {
							this.stopPropagation(), this.preventDefault()
						}, this.getDocumentPosition = function() {
							return this.$pos || (this.$pos = this.editor.renderer
									.screenToTextCoordinates(this.clientX, this.clientY)),
								this.$pos
						}, this.inSelection = function() {
							if (null !== this.$inSelection) return this.$inSelection;
							var e = this.editor,
								t = e.getSelectionRange();
							if (t.isEmpty()) this.$inSelection = !1;
							else {
								var i = this.getDocumentPosition();
								this.$inSelection = t.contains(i.row, i.column)
							}
							return this.$inSelection
						}, this.getButton = function() {
							return n.getButton(this.domEvent)
						}, this.getShiftKey = function() {
							return this.domEvent.shiftKey
						}, this.getAccelKey = r.isMac ? function() {
							return this.domEvent.metaKey
						} : function() {
							return this.domEvent.ctrlKey
						}
					}).call(o.prototype)
				})), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module",
					"ace/lib/dom", "ace/lib/event", "ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/dom"),
						r = e("../lib/event"),
						o = e("../lib/useragent"),
						s = 200,
						a = 200,
						l = 5;

					function c(e) {
						var t = e.editor,
							i = n.createElement("img");
						i.src =
							"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
							o.isOpera && (i.style.cssText =
								"width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;"
								);
						var c = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd",
							"onMouseDrag"
						];
						c.forEach((function(t) {
							e[t] = this[t]
						}), this), t.addEventListener("mousedown", this.onMouseDown.bind(e));
						var u, d, g, f, p, m, v, w, b, A, C, F = t.container,
							y = 0;

						function E(e, i) {
							var n = Date.now(),
								r = !i || e.row != i.row,
								o = !i || e.column != i.column;
							if (!A || r || o) t.$blockScrolling += 1, t.moveCursorToPosition(e), t
								.$blockScrolling -= 1, A = n, C = {
									x: d,
									y: g
								};
							else {
								var s = h(C.x, C.y, d, g);
								s > l ? A = null : n - A >= a && (t.renderer.scrollCursorIntoView(),
									A = null)
							}
						}

						function x(e, i) {
							var n = Date.now(),
								r = t.renderer.layerConfig.lineHeight,
								o = t.renderer.layerConfig.characterWidth,
								a = t.renderer.scroller.getBoundingClientRect(),
								l = {
									x: {
										left: d - a.left,
										right: a.right - d
									},
									y: {
										top: g - a.top,
										bottom: a.bottom - g
									}
								},
								c = Math.min(l.x.left, l.x.right),
								h = Math.min(l.y.top, l.y.bottom),
								u = {
									row: e.row,
									column: e.column
								};
							c / o <= 2 && (u.column += l.x.left < l.x.right ? -3 : 2), h / r <= 1 &&
								(u.row += l.y.top < l.y.bottom ? -1 : 1);
							var f = e.row != u.row,
								p = e.column != u.column,
								m = !i || e.row != i.row;
							f || p && !m ? b ? n - b >= s && t.renderer.scrollCursorIntoView(u) :
								b = n : b = null
						}

						function $() {
							var e = m;
							m = t.renderer.screenToTextCoordinates(d, g), E(m, e), x(m, e)
						}

						function k() {
							p = t.selection.toOrientedRange(), u = t.session.addMarker(p,
									"ace_selection", t.getSelectionStyle()), t.clearSelection(), t
								.isFocused() && t.renderer.$cursorLayer.setBlinking(!1),
								clearInterval(f), $(), f = setInterval($, 20), y = 0, r.addListener(
									document, "mousemove", D)
						}

						function S() {
							clearInterval(f), t.session.removeMarker(u), u = null, t
								.$blockScrolling += 1, t.selection.fromOrientedRange(p), t
								.$blockScrolling -= 1, t.isFocused() && !w && t.renderer
								.$cursorLayer.setBlinking(!t.getReadOnly()), p = null, m = null, y =
								0, b = null, A = null, r.removeListener(document, "mousemove", D)
						}
						this.onDragStart = function(e) {
								if (this.cancelDrag || !F.draggable) {
									var n = this;
									return setTimeout((function() {
										n.startSelect(), n.captureMouse(e)
									}), 0), e.preventDefault()
								}
								p = t.getSelectionRange();
								var r = e.dataTransfer;
								r.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", o
									.isOpera && (t.container.appendChild(i), i.scrollTop = 0), r
									.setDragImage && r.setDragImage(i, 0, 0), o.isOpera && t
									.container.removeChild(i), r.clearData(), r.setData("Text", t
										.session.getTextRange()), w = !0, this.setState("drag")
							}, this.onDragEnd = function(e) {
								if (F.draggable = !1, w = !1, this.setState(null), !t
								.getReadOnly()) {
									var i = e.dataTransfer.dropEffect;
									v || "move" != i || t.session.remove(t.getSelectionRange()), t
										.renderer.$cursorLayer.setBlinking(!0)
								}
								this.editor.unsetStyle("ace_dragging"), this.editor.renderer
									.setCursorStyle("")
							}, this.onDragEnter = function(e) {
								if (!t.getReadOnly() && L(e.dataTransfer)) return d = e.clientX, g =
									e.clientY, u || k(), y++, e.dataTransfer.dropEffect = v = R(
										e), r.preventDefault(e)
							}, this.onDragOver = function(e) {
								if (!t.getReadOnly() && L(e.dataTransfer)) return d = e.clientX, g =
									e.clientY, u || (k(), y++), null !== B && (B = null), e
									.dataTransfer.dropEffect = v = R(e), r.preventDefault(e)
							}, this.onDragLeave = function(e) {
								if (y--, y <= 0 && u) return S(), v = null, r.preventDefault(e)
							}, this.onDrop = function(e) {
								if (m) {
									var i = e.dataTransfer;
									if (w) switch (v) {
										case "move":
											p = p.contains(m.row, m.column) ? {
												start: m,
												end: m
											} : t.moveText(p, m);
											break;
										case "copy":
											p = t.moveText(p, m, !0);
											break
									} else {
										var n = i.getData("Text");
										p = {
											start: m,
											end: t.session.insert(m, n)
										}, t.focus(), v = null
									}
									return S(), r.preventDefault(e)
								}
							}, r.addListener(F, "dragstart", this.onDragStart.bind(e)), r
							.addListener(F, "dragend", this.onDragEnd.bind(e)), r.addListener(F,
								"dragenter", this.onDragEnter.bind(e)), r.addListener(F, "dragover",
								this.onDragOver.bind(e)), r.addListener(F, "dragleave", this
								.onDragLeave.bind(e)), r.addListener(F, "drop", this.onDrop.bind(
							e));
						var B = null;

						function D() {
							null == B && (B = setTimeout((function() {
								null != B && u && S()
							}), 20))
						}

						function L(e) {
							var t = e.types;
							return !t || Array.prototype.some.call(t, (function(e) {
								return "text/plain" == e || "Text" == e
							}))
						}

						function R(e) {
							var t = ["copy", "copymove", "all", "uninitialized"],
								i = ["move", "copymove", "linkmove", "all", "uninitialized"],
								n = o.isMac ? e.altKey : e.ctrlKey,
								r = "uninitialized";
							try {
								r = e.dataTransfer.effectAllowed.toLowerCase()
							} catch (e) {}
							var s = "none";
							return n && t.indexOf(r) >= 0 ? s = "copy" : i.indexOf(r) >= 0 ? s =
								"move" : t.indexOf(r) >= 0 && (s = "copy"), s
						}
					}

					function h(e, t, i, n) {
						return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
					}(function() {
						this.dragWait = function() {
							var e = Date.now() - this.mousedownEvent.time;
							e > this.editor.getDragDelay() && this.startDrag()
						}, this.dragWaitEnd = function() {
							var e = this.editor.container;
							e.draggable = !1, this.startSelect(this.mousedownEvent
								.getDocumentPosition()), this.selectEnd()
						}, this.dragReadyEnd = function(e) {
							this.editor.renderer.$cursorLayer.setBlinking(!this.editor
									.getReadOnly()), this.editor.unsetStyle("ace_dragging"),
								this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
						}, this.startDrag = function() {
							this.cancelDrag = !1;
							var e = this.editor,
								t = e.container;
							t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e
								.setStyle("ace_dragging");
							var i = o.isWin ? "default" : "move";
							e.renderer.setCursorStyle(i), this.setState("dragReady")
						}, this.onMouseDrag = function(e) {
							var t = this.editor.container;
							if (o.isIE && "dragReady" == this.state) {
								var i = h(this.mousedownEvent.x, this.mousedownEvent.y, this
									.x, this.y);
								i > 3 && t.dragDrop()
							}
							if ("dragWait" === this.state) {
								i = h(this.mousedownEvent.x, this.mousedownEvent.y, this.x,
									this.y);
								i > 0 && (t.draggable = !1, this.startSelect(this
									.mousedownEvent.getDocumentPosition()))
							}
						}, this.onMouseDown = function(e) {
							if (this.$dragEnabled) {
								this.mousedownEvent = e;
								var t = this.editor,
									i = e.inSelection(),
									n = e.getButton(),
									r = e.domEvent.detail || 1;
								if (1 === r && 0 === n && i) {
									if (e.editor.inMultiSelectMode && (e.getAccelKey() || e
											.getShiftKey())) return;
									this.mousedownEvent.time = Date.now();
									var s = e.domEvent.target || e.domEvent.srcElement;
									if ("unselectable" in s && (s.unselectable = "on"), t
										.getDragDelay()) {
										if (o.isWebKit) {
											this.cancelDrag = !0;
											var a = t.container;
											a.draggable = !0
										}
										this.setState("dragWait")
									} else this.startDrag();
									this.captureMouse(e, this.onMouseDrag.bind(this)), e
										.defaultPrevented = !0
								}
							}
						}
					}).call(c.prototype), t.DragdropHandler = c
				})), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], (function(e,
					t, i) {
					"use strict";
					var n = e("./dom");
					t.get = function(e, t) {
						var i = new XMLHttpRequest;
						i.open("GET", e, !0), i.onreadystatechange = function() {
							4 === i.readyState && t(i.responseText)
						}, i.send(null)
					}, t.loadScript = function(e, t) {
						var i = n.getDocumentHead(),
							r = document.createElement("script");
						r.src = e, i.appendChild(r), r.onload = r.onreadystatechange = function(
							e, i) {
							!i && r.readyState && "loaded" != r.readyState && "complete" !=
								r.readyState || (r = r.onload = r.onreadystatechange = null,
									i || t())
						}
					}, t.qualifyURL = function(e) {
						var t = document.createElement("a");
						return t.href = e, t.href
					}
				})), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], (function(e, t,
					i) {
					"use strict";
					var n = {},
						r = function() {
							this.propagationStopped = !0
						},
						o = function() {
							this.defaultPrevented = !0
						};
					n._emit = n._dispatchEvent = function(e, t) {
						this._eventRegistry || (this._eventRegistry = {}), this
							._defaultHandlers || (this._defaultHandlers = {});
						var i = this._eventRegistry[e] || [],
							n = this._defaultHandlers[e];
						if (i.length || n) {
							"object" == typeof t && t || (t = {}), t.type || (t.type = e), t
								.stopPropagation || (t.stopPropagation = r), t.preventDefault ||
								(t.preventDefault = o), i = i.slice();
							for (var s = 0; s < i.length; s++)
								if (i[s](t, this), t.propagationStopped) break;
							return n && !t.defaultPrevented ? n(t, this) : void 0
						}
					}, n._signal = function(e, t) {
						var i = (this._eventRegistry || {})[e];
						if (i) {
							i = i.slice();
							for (var n = 0; n < i.length; n++) i[n](t, this)
						}
					}, n.once = function(e, t) {
						var i = this;
						t && this.addEventListener(e, (function n() {
							i.removeEventListener(e, n), t.apply(null, arguments)
						}))
					}, n.setDefaultHandler = function(e, t) {
						var i = this._defaultHandlers;
						if (i || (i = this._defaultHandlers = {
								_disabled_: {}
							}), i[e]) {
							var n = i[e],
								r = i._disabled_[e];
							r || (i._disabled_[e] = r = []), r.push(n);
							var o = r.indexOf(t); - 1 != o && r.splice(o, 1)
						}
						i[e] = t
					}, n.removeDefaultHandler = function(e, t) {
						var i = this._defaultHandlers;
						if (i) {
							var n = i._disabled_[e];
							if (i[e] == t) {
								i[e];
								n && this.setDefaultHandler(e, n.pop())
							} else if (n) {
								var r = n.indexOf(t); - 1 != r && n.splice(r, 1)
							}
						}
					}, n.on = n.addEventListener = function(e, t, i) {
						this._eventRegistry = this._eventRegistry || {};
						var n = this._eventRegistry[e];
						return n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n[
							i ? "unshift" : "push"](t), t
					}, n.off = n.removeListener = n.removeEventListener = function(e, t) {
						this._eventRegistry = this._eventRegistry || {};
						var i = this._eventRegistry[e];
						if (i) {
							var n = i.indexOf(t); - 1 !== n && i.splice(n, 1)
						}
					}, n.removeAllListeners = function(e) {
						this._eventRegistry && (this._eventRegistry[e] = [])
					}, t.EventEmitter = n
				})), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/event_emitter"
				], (function(e, t, i) {
					var n = e("./oop"),
						r = e("./event_emitter").EventEmitter,
						o = {
							setOptions: function(e) {
								Object.keys(e).forEach((function(t) {
									this.setOption(t, e[t])
								}), this)
							},
							getOptions: function(e) {
								var t = {};
								return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e =
									Object.keys(this.$options), e.forEach((function(e) {
										t[e] = this.getOption(e)
									}), this), t
							},
							setOption: function(e, t) {
								if (this["$" + e] !== t) {
									var i = this.$options[e];
									if (!i) return s('misspelled option "' + e + '"');
									if (i.forwardTo) return this[i.forwardTo] && this[i
										.forwardTo].setOption(e, t);
									i.handlesSet || (this["$" + e] = t), i && i.set && i.set
										.call(this, t)
								}
							},
							getOption: function(e) {
								var t = this.$options[e];
								return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo]
									.getOption(e) : t && t.get ? t.get.call(this) : this["$" +
										e] : s('misspelled option "' + e + '"')
							}
						};

					function s(e) {
						"undefined" != typeof console && console.warn && console.warn.apply(console,
							arguments)
					}

					function a(e, t) {
						var i = new Error(e);
						i.data = t, "object" == typeof console && console.error && console.error(i),
							setTimeout((function() {
								throw i
							}))
					}
					var l = function() {
						this.$defaultOptions = {}
					};
					(function() {
						n.implement(this, r), this.defineOptions = function(e, t, i) {
							return e.$options || (this.$defaultOptions[t] = e
								.$options = {}), Object.keys(i).forEach((function(t) {
									var n = i[t];
									"string" == typeof n && (n = {
										forwardTo: n
									}), n.name || (n.name = t), e.$options[n
										.name] = n, "initialValue" in n && (e[
										"$" + n.name] = n.initialValue)
								})), n.implement(e, o), this
						}, this.resetOptions = function(e) {
							Object.keys(e.$options).forEach((function(t) {
								var i = e.$options[t];
								"value" in i && e.setOption(t, i.value)
							}))
						}, this.setDefaultValue = function(e, t, i) {
							var n = this.$defaultOptions[e] || (this.$defaultOptions[
								e] = {});
							n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) :
								n[t].value = i)
						}, this.setDefaultValues = function(e, t) {
							Object.keys(t).forEach((function(i) {
								this.setDefaultValue(e, i, t[i])
							}), this)
						}, this.warn = s, this.reportError = a
					}).call(l.prototype), t.AppConfig = l
				})), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang",
					"ace/lib/oop", "ace/lib/net", "ace/lib/app_config"
				], (function(e, t, n) {
					var r = e("./lib/lang"),
						o = (e("./lib/oop"), e("./lib/net")),
						s = e("./lib/app_config").AppConfig;
					n.exports = t = new s;
					var a = function() {
							return this || "undefined" != typeof window && window
						}(),
						l = {
							packaged: !1,
							workerPath: null,
							modePath: null,
							themePath: null,
							basePath: "",
							suffix: ".js",
							$moduleUrls: {}
						};

					function c(r) {
						if (a && a.document) {
							l.packaged = r || e.packaged || n.packaged || a.define && i("07d6")
								.packaged;
							for (var o = {}, s = "", c = document.currentScript || document
									._currentScript, u = c && c.ownerDocument || document, d = u
									.getElementsByTagName("script"), g = 0; g < d.length; g++) {
								var f = d[g],
									p = f.src || f.getAttribute("src");
								if (p) {
									for (var m = f.attributes, v = 0, w = m.length; v < w; v++) {
										var b = m[v];
										0 === b.name.indexOf("data-ace-") && (o[h(b.name.replace(
											/^data-ace-/, ""))] = b.value)
									}
									var A = p.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
									A && (s = A[1])
								}
							}
							for (var C in s && (o.base = o.base || s, o.packaged = !0), o.basePath =
									o.base, o.workerPath = o.workerPath || o.base, o.modePath = o
									.modePath || o.base, o.themePath = o.themePath || o.base,
									delete o.base, o) "undefined" !== typeof o[C] && t.set(C, o[C])
						}
					}

					function h(e) {
						return e.replace(/-(.)/g, (function(e, t) {
							return t.toUpperCase()
						}))
					}
					t.get = function(e) {
						if (!l.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
						return l[e]
					}, t.set = function(e, t) {
						if (!l.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
						l[e] = t
					}, t.all = function() {
						return r.copyObject(l)
					}, t.moduleUrl = function(e, t) {
						if (l.$moduleUrls[e]) return l.$moduleUrls[e];
						var i = e.split("/");
						t = t || i[i.length - 2] || "";
						var n = "snippets" == t ? "/" : "-",
							r = i[i.length - 1];
						if ("worker" == t && "-" == n) {
							var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
							r = r.replace(o, "")
						}(!r || r == t) && i.length > 1 && (r = i[i.length - 2]);
						var s = l[t + "Path"];
						return null == s ? s = l.basePath : "/" == n && (t = n = ""), s &&
							"/" != s.slice(-1) && (s += "/"), s + t + n + r + this.get("suffix")
					}, t.setModuleUrl = function(e, t) {
						return l.$moduleUrls[e] = t
					}, t.$loading = {}, t.loadModule = function(i, n) {
						var r, s;
						Array.isArray(i) && (s = i[0], i = i[1]);
						try {
							r = e(i)
						} catch (l) {}
						if (r && !t.$loading[i]) return n && n(r);
						if (t.$loading[i] || (t.$loading[i] = []), t.$loading[i].push(n), !(t
								.$loading[i].length > 1)) {
							var a = function() {
								e([i], (function(e) {
									t._emit("load.module", {
										name: i,
										module: e
									});
									var n = t.$loading[i];
									t.$loading[i] = null, n.forEach((function(
									t) {
										t && t(e)
									}))
								}))
							};
							if (!t.get("packaged")) return a();
							o.loadScript(t.moduleUrl(i, s), a)
						}
					}, c(!0), t.init = c
				})), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event",
					"ace/lib/useragent", "ace/mouse/default_handlers",
					"ace/mouse/default_gutter_handler", "ace/mouse/mouse_event",
					"ace/mouse/dragdrop_handler", "ace/config"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/event"),
						r = e("../lib/useragent"),
						o = e("./default_handlers").DefaultHandlers,
						s = e("./default_gutter_handler").GutterHandler,
						a = e("./mouse_event").MouseEvent,
						l = e("./dragdrop_handler").DragdropHandler,
						c = e("../config"),
						h = function(e) {
							var t = this;
							this.editor = e, new o(this), new s(this), new l(this);
							var i = function(t) {
									var i = !document.hasFocus || !document.hasFocus() || !e
										.isFocused() && document.activeElement == (e.textInput && e
											.textInput.getElement());
									i && window.focus(), e.focus()
								},
								a = e.renderer.getMouseEventTarget();
							n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n
								.addListener(a, "mousemove", this.onMouseMove.bind(this,
									"mousemove")), n.addMultiMouseDownListener([a, e.renderer
									.scrollBarV && e.renderer.scrollBarV.inner, e.renderer
									.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e
									.textInput.getElement()
								].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), n
								.addMouseWheelListener(e.container, this.onMouseWheel.bind(this,
									"mousewheel")), n.addTouchMoveListener(e.container, this
									.onTouchMove.bind(this, "touchmove"));
							var c = e.renderer.$gutter;
							n.addListener(c, "mousedown", this.onMouseEvent.bind(this,
									"guttermousedown")), n.addListener(c, "click", this.onMouseEvent
									.bind(this, "gutterclick")), n.addListener(c, "dblclick", this
									.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(c,
									"mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n
								.addListener(a, "mousedown", i), n.addListener(c, "mousedown", i), r
								.isIE && e.renderer.scrollBarV && (n.addListener(e.renderer
									.scrollBarV.element, "mousedown", i), n.addListener(e
									.renderer.scrollBarH.element, "mousedown", i)), e.on(
									"mousemove", (function(i) {
										if (!t.state && !t.$dragDelay && t.$dragEnabled) {
											var n = e.renderer.screenToTextCoordinates(i.x, i
												.y),
												r = e.session.selection.getRange(),
												o = e.renderer;
											!r.isEmpty() && r.insideStart(n.row, n.column) ? o
												.setCursorStyle("default") : o.setCursorStyle(
													"")
										}
									}))
						};
					(function() {
						this.onMouseEvent = function(e, t) {
							this.editor._emit(e, new a(t, this.editor))
						}, this.onMouseMove = function(e, t) {
							var i = this.editor._eventRegistry && this.editor._eventRegistry
								.mousemove;
							i && i.length && this.editor._emit(e, new a(t, this.editor))
						}, this.onMouseWheel = function(e, t) {
							var i = new a(t, this.editor);
							i.speed = 2 * this.$scrollSpeed, i.wheelX = t.wheelX, i.wheelY =
								t.wheelY, this.editor._emit(e, i)
						}, this.onTouchMove = function(e, t) {
							var i = new a(t, this.editor);
							i.speed = 1, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this
								.editor._emit(e, i)
						}, this.setState = function(e) {
							this.state = e
						}, this.captureMouse = function(e, t) {
							this.x = e.x, this.y = e.y, this.isMousePressed = !0;
							var i = this.editor.renderer;
							i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = null);
							var o = this,
								s = function(e) {
									if (e) {
										if (r.isWebKit && !e.which && o.releaseMouse)
										return o.releaseMouse();
										o.x = e.clientX, o.y = e.clientY, t && t(e), o
											.mouseEvent = new a(e, o.editor), o
											.$mouseMoved = !0
									}
								},
								l = function(e) {
									clearInterval(h), c(), o[o.state + "End"] && o[o.state +
											"End"](e), o.state = "", null == i
										.$keepTextAreaAtCursor && (i
											.$keepTextAreaAtCursor = !0, i
											.$moveTextAreaToCursor()), o.isMousePressed = !
										1, o.$onCaptureMouseMove = o.releaseMouse = null,
										e && o.onMouseEvent("mouseup", e)
								},
								c = function() {
									o[o.state] && o[o.state](), o.$mouseMoved = !1
								};
							if (r.isOldIE && "dblclick" == e.domEvent.type)
							return setTimeout((function() {
									l(e)
								}));
							o.$onCaptureMouseMove = s, o.releaseMouse = n.capture(this
								.editor.container, s, l);
							var h = setInterval(c, 20)
						}, this.releaseMouse = null, this.cancelContextMenu = function() {
							var e = function(t) {
								t && t.domEvent && "contextmenu" != t.domEvent.type || (
									this.editor.off("nativecontextmenu", e), t && t
									.domEvent && n.stopEvent(t.domEvent))
							}.bind(this);
							setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
						}
					}).call(h.prototype), c.defineOptions(h.prototype, "mouseHandler", {
						scrollSpeed: {
							initialValue: 2
						},
						dragDelay: {
							initialValue: r.isMac ? 150 : 0
						},
						dragEnabled: {
							initialValue: !0
						},
						focusTimout: {
							initialValue: 0
						},
						tooltipFollowsMouse: {
							initialValue: !0
						}
					}), t.MouseHandler = h
				})), ace.define("ace/mouse/fold_handler", ["require", "exports", "module"], (function(e, t,
					i) {
					"use strict";

					function n(e) {
						e.on("click", (function(t) {
							var i = t.getDocumentPosition(),
								n = e.session,
								r = n.getFoldAt(i.row, i.column, 1);
							r && (t.getAccelKey() ? n.removeFold(r) : n.expandFold(r), t
								.stop())
						})), e.on("gutterclick", (function(t) {
							var i = e.renderer.$gutterLayer.getRegion(t);
							if ("foldWidgets" == i) {
								var n = t.getDocumentPosition().row,
									r = e.session;
								r.foldWidgets && r.foldWidgets[n] && e.session
									.onFoldWidgetClick(n, t), e.isFocused() || e
								.focus(), t.stop()
							}
						})), e.on("gutterdblclick", (function(t) {
							var i = e.renderer.$gutterLayer.getRegion(t);
							if ("foldWidgets" == i) {
								var n = t.getDocumentPosition().row,
									r = e.session,
									o = r.getParentFoldRangeData(n, !0),
									s = o.range || o.firstRange;
								if (s) {
									n = s.start.row;
									var a = r.getFoldAt(n, r.getLine(n).length, 1);
									a ? r.removeFold(a) : (r.addFold("...", s), e
										.renderer.scrollCursorIntoView({
											row: s.start.row,
											column: 0
										}))
								}
								t.stop()
							}
						}))
					}
					t.FoldHandler = n
				})), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys",
					"ace/lib/event"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/keys"),
						r = e("../lib/event"),
						o = function(e) {
							this.$editor = e, this.$data = {
								editor: e
							}, this.$handlers = [], this.setDefaultHandler(e.commands)
						};
					(function() {
						this.setDefaultHandler = function(e) {
							this.removeKeyboardHandler(this.$defaultHandler), this
								.$defaultHandler = e, this.addKeyboardHandler(e, 0)
						}, this.setKeyboardHandler = function(e) {
							var t = this.$handlers;
							if (t[t.length - 1] != e) {
								while (t[t.length - 1] && t[t.length - 1] != this
									.$defaultHandler) this.removeKeyboardHandler(t[t
									.length - 1]);
								this.addKeyboardHandler(e, 1)
							}
						}, this.addKeyboardHandler = function(e, t) {
							if (e) {
								"function" != typeof e || e.handleKeyboard || (e
									.handleKeyboard = e);
								var i = this.$handlers.indexOf(e); - 1 != i && this
									.$handlers.splice(i, 1), void 0 == t ? this.$handlers
									.push(e) : this.$handlers.splice(t, 0, e), -1 == i && e
									.attach && e.attach(this.$editor)
							}
						}, this.removeKeyboardHandler = function(e) {
							var t = this.$handlers.indexOf(e);
							return -1 != t && (this.$handlers.splice(t, 1), e.detach && e
								.detach(this.$editor), !0)
						}, this.getKeyboardHandler = function() {
							return this.$handlers[this.$handlers.length - 1]
						}, this.getStatusText = function() {
							var e = this.$data,
								t = e.editor;
							return this.$handlers.map((function(i) {
								return i.getStatusText && i.getStatusText(t,
									e) || ""
							})).filter(Boolean).join(" ")
						}, this.$callKeyboardHandlers = function(e, t, i, n) {
							for (var o, s = !1, a = this.$editor.commands, l = this
									.$handlers.length; l--;)
								if (o = this.$handlers[l].handleKeyboard(this.$data, e, t,
										i, n), o && o.command && (s = "null" == o.command ||
										a.exec(o.command, this.$editor, o.args, n), s &&
										n && -1 != e && 1 != o.passEvent && 1 != o.command
										.passEvent && r.stopEvent(n), s)) break;
							return s || -1 != e || (o = {
									command: "insertstring"
								}, s = a.exec("insertstring", this.$editor, t)), s && this
								.$editor._signal && this.$editor._signal("keyboardActivity",
									o), s
						}, this.onCommandKey = function(e, t, i) {
							var r = n.keyCodeToString(i);
							this.$callKeyboardHandlers(t, r, i, e)
						}, this.onTextInput = function(e) {
							this.$callKeyboardHandlers(-1, e)
						}
					}).call(o.prototype), t.KeyBinding = o
				})), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = 0,
						r = 0,
						o = !1,
						s = !1,
						a = !1,
						l = [
							[0, 3, 0, 1, 0, 0, 0],
							[0, 3, 0, 1, 2, 2, 0],
							[0, 3, 0, 17, 2, 0, 1],
							[0, 3, 5, 5, 4, 1, 0],
							[0, 3, 21, 21, 4, 0, 1],
							[0, 3, 5, 5, 4, 2, 0]
						],
						c = [
							[2, 0, 1, 1, 0, 1, 0],
							[2, 0, 1, 1, 0, 2, 0],
							[2, 0, 2, 1, 3, 2, 0],
							[2, 0, 2, 33, 3, 1, 1]
						],
						h = 0,
						u = 1,
						d = 0,
						g = 1,
						f = 2,
						p = 3,
						m = 4,
						v = 5,
						w = 6,
						b = 7,
						A = 8,
						C = 9,
						F = 10,
						y = 11,
						E = 12,
						x = 13,
						$ = 14,
						k = 15,
						S = 16,
						B = 17,
						D = 18,
						L = [D, D, D, D, D, D, D, D, D, w, v, w, A, v, D, D, D, D, D, D, D, D, D, D,
							D, D, D, D, v, v, v, w, A, m, m, y, y, y, m, m, m, m, m, F, C, F, C, C,
							f, f, f, f, f, f, f, f, f, f, C, m, m, m, m, m, m, d, d, d, d, d, d, d,
							d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, m, m, m, m, m,
							m, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d,
							d, d, d, m, m, m, m, D, D, D, D, D, D, v, D, D, D, D, D, D, D, D, D, D,
							D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, C, m, y, y, y, y, m, m,
							m, m, d, m, m, D, m, m, y, y, f, f, m, d, m, m, m, f, d, m, m, m, m, m
						],
						R = [A, A, A, A, A, A, A, A, A, A, A, D, D, D, d, g, m, m, m, m, m, m, m, m,
							m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, A, v, x, $, k, S, B, C,
							y, y, y, y, y, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, C, m, m, m,
							m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, A
						];

					function _(e, t, i, h) {
						var u = n ? c : l,
							d = null,
							g = null,
							f = null,
							p = 0,
							m = null,
							b = null,
							C = -1,
							F = null,
							y = null,
							E = [];
						if (!h)
							for (F = 0, h = []; F < i; F++) h[F] = O(e[F]);
						for (r = n, o = !1, !1, s = !1, a = !1, y = 0; y < i; y++) {
							if (d = p, E[y] = g = M(e, h, E, y), p = u[d][g], m = 240 & p, p &= 15,
								t[y] = f = u[p][5], m > 0)
								if (16 == m) {
									for (F = C; F < y; F++) t[F] = 1;
									C = -1
								} else C = -1;
							if (b = u[p][6], b) - 1 == C && (C = y);
							else if (C > -1) {
								for (F = C; F < y; F++) t[F] = f;
								C = -1
							}
							h[y] == v && (t[y] = 0), r |= f
						}
						if (a)
							for (F = 0; F < i; F++)
								if (h[F] == w) {
									t[F] = n;
									for (var x = F - 1; x >= 0; x--) {
										if (h[x] != A) break;
										t[x] = n
									}
								}
					}

					function T(e, t, i) {
						if (!(r < e))
							if (1 != e || n != u || s) {
								var o, a, l, c, h = i.length,
									d = 0;
								while (d < h) {
									if (t[d] >= e) {
										o = d + 1;
										while (o < h && t[o] >= e) o++;
										for (a = d, l = o - 1; a < l; a++, l--) c = i[a], i[a] = i[
											l], i[l] = c;
										d = o
									}
									d++
								}
							} else i.reverse()
					}

					function M(e, t, i, r) {
						var l, c, h, u, L = t[r];
						switch (L) {
							case d:
							case g:
								o = !1;
							case m:
							case p:
								return L;
							case f:
								return o ? p : f;
							case b:
								return o = !0, !0, g;
							case A:
								return m;
							case C:
								return r < 1 || r + 1 >= t.length || (l = i[r - 1]) != f && l !=
									p || (c = t[r + 1]) != f && c != p ? m : (o && (c = p), c == l ?
										c : m);
							case F:
								return l = r > 0 ? i[r - 1] : v, l == f && r + 1 < t.length && t[r +
									1] == f ? f : m;
							case y:
								if (r > 0 && i[r - 1] == f) return f;
								if (o) return m;
								u = r + 1, h = t.length;
								while (u < h && t[u] == y) u++;
								return u < h && t[u] == f ? f : m;
							case E:
								h = t.length, u = r + 1;
								while (u < h && t[u] == E) u++;
								if (u < h) {
									var R = e[r],
										_ = R >= 1425 && R <= 2303 || 64286 == R;
									if (l = t[u], _ && (l == g || l == b)) return g
								}
								return r < 1 || (l = t[r - 1]) == v ? m : i[r - 1];
							case v:
								return o = !1, s = !0, n;
							case w:
								return a = !0, m;
							case x:
							case $:
							case S:
							case B:
							case k:
								o = !1;
							case D:
								return m
						}
					}

					function O(e) {
						var t = e.charCodeAt(0),
							i = t >> 8;
						return 0 == i ? t > 191 ? d : L[t] : 5 == i ? /[\u0591-\u05f4]/.test(e) ?
							g : d : 6 == i ?
							/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? E :
							/[\u0660-\u0669\u066b-\u066c]/.test(e) ? p : 1642 == t ? y :
							/[\u06f0-\u06f9]/.test(e) ? f : b : 32 == i && t <= 8287 ? R[255 & t] :
							254 == i && t >= 65136 ? b : m
					}
					t.L = d, t.R = g, t.EN = f, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.DOT =
						"·", t.doBidiReorder = function(e, i, r) {
							if (e.length < 2) return {};
							var o = e.split(""),
								s = new Array(o.length),
								a = new Array(o.length),
								l = [];
							n = r ? u : h, _(o, l, o.length, i);
							for (var c = 0; c < s.length; s[c] = c, c++);
							T(2, l, s), T(1, l, s);
							for (c = 0; c < s.length - 1; c++) i[c] === p ? l[c] = t.AN : l[c] ===
								g && (i[c] > b && i[c] < x || i[c] === m || i[c] === D) ? l[c] = t
								.ON_R : c > 0 && "ل" === o[c - 1] && /\u0622|\u0623|\u0625|\u0627/
								.test(o[c]) && (l[c - 1] = l[c] = t.R_H, c++);
							o[o.length - 1] === t.DOT && (l[o.length - 1] = t.B);
							for (c = 0; c < s.length; c++) a[c] = l[s[c]];
							return {
								logicalFromVisual: s,
								bidiLevels: a
							}
						}, t.hasBidiCharacters = function(e, t) {
							for (var i = !1, n = 0; n < e.length; n++) t[n] = O(e.charAt(n)), i ||
								t[n] != g && t[n] != b || (i = !0);
							return i
						}, t.getVisualFromLogicalIdx = function(e, t) {
							for (var i = 0; i < t.logicalFromVisual.length; i++)
								if (t.logicalFromVisual[i] == e) return i;
							return 0
						}
				})), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil",
					"ace/lib/lang", "ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/bidiutil"),
						r = e("./lib/lang"),
						o = e("./lib/useragent"),
						s = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
						a = function(e) {
							this.session = e, this.bidiMap = {}, this.currentRow = null, this
								.bidiUtil = n, this.charWidths = [], this.EOL = "¬", this
								.showInvisibles = !0, this.isRtlDir = !1, this.line = "", this
								.wrapIndent = 0, this.isLastRow = !1, this.EOF = "¶", this
								.seenBidi = !1
						};
					(function() {
						this.isBidiRow = function(e, t, i) {
							return !!this.seenBidi && (e !== this.currentRow && (this
								.currentRow = e, this.updateRowLine(t, i), this
								.updateBidiMap()), this.bidiMap.bidiLevels)
						}, this.onChange = function(e) {
							this.seenBidi ? this.currentRow = null : "insert" == e.action &&
								s.test(e.lines.join("\n")) && (this.seenBidi = !0, this
									.currentRow = null)
						}, this.getDocumentRow = function() {
							var e = 0,
								t = this.session.$screenRowCache;
							if (t.length) {
								var i = this.session.$getRowCacheIndex(t, this.currentRow);
								i >= 0 && (e = this.session.$docRowCache[i])
							}
							return e
						}, this.getSplitIndex = function() {
							var e = 0,
								t = this.session.$screenRowCache;
							if (t.length) {
								var i, n = this.session.$getRowCacheIndex(t, this
									.currentRow);
								while (this.currentRow - e > 0) {
									if (i = this.session.$getRowCacheIndex(t, this
											.currentRow - e - 1), i !== n) break;
									n = i, e++
								}
							}
							return e
						}, this.updateRowLine = function(e, t) {
							if (void 0 === e && (e = this.getDocumentRow()), this
								.wrapIndent = 0, this.isLastRow = e === this.session
								.getLength() - 1, this.line = this.session.getLine(e), this
								.session.$useWrapMode) {
								var i = this.session.$wrapData[e];
								i && (void 0 === t && (t = this.getSplitIndex()), t > 0 && i
									.length ? (this.wrapIndent = i.indent, this.line =
										t < i.length ? this.line.substring(i[t - 1], i[i
											.length - 1]) : this.line.substring(i[i
											.length - 1])) : this.line = this.line
									.substring(0, i[t]))
							}
							var o, s = this.session,
								a = 0;
							this.line = this.line.replace(
								/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (function(e, t) {
									return "\t" === e || s.isFullWidth(e.charCodeAt(
										0)) ? (o = "\t" === e ? s
										.getScreenTabSize(t + a) : 2, a += o -
										1, r.stringRepeat(n.DOT, o)) : e
								}))
						}, this.updateBidiMap = function() {
							var e = [],
								t = this.isLastRow ? this.EOF : this.EOL,
								i = this.line + (this.showInvisibles ? t : n.DOT);
							n.hasBidiCharacters(i, e) ? this.bidiMap = n.doBidiReorder(i, e,
								this.isRtlDir) : this.bidiMap = {}
						}, this.markAsDirty = function() {
							this.currentRow = null
						}, this.updateCharacterWidths = function(e) {
							if (this.seenBidi && this.characterWidth !== e.$characterSize
								.width) {
								var t = this.characterWidth = e.$characterSize.width,
									i = e.$measureCharWidth("ה");
								this.charWidths[n.L] = this.charWidths[n.EN] = this
									.charWidths[n.ON_R] = t, this.charWidths[n.R] = this
									.charWidths[n.AN] = i, this.charWidths[n.R_H] = o
									.isChrome ? i : .45 * i, this.charWidths[n.B] = 0, this
									.currentRow = null
							}
						}, this.getShowInvisibles = function() {
							return this.showInvisibles
						}, this.setShowInvisibles = function(e) {
							this.showInvisibles = e, this.currentRow = null
						}, this.setEolChar = function(e) {
							this.EOL = e
						}, this.setTextDir = function(e) {
							this.isRtlDir = e
						}, this.getPosLeft = function(e) {
							e -= this.wrapIndent;
							var t = n.getVisualFromLogicalIdx(e > 0 ? e - 1 : 0, this
									.bidiMap),
								i = this.bidiMap.bidiLevels,
								r = 0;
							0 === e && i[t] % 2 !== 0 && t++;
							for (var o = 0; o < t; o++) r += this.charWidths[i[o]];
							return 0 !== e && i[t] % 2 === 0 && (r += this.charWidths[i[
								t]]), this.wrapIndent && (r += this.wrapIndent * this
									.charWidths[n.L]), r
						}, this.getSelections = function(e, t) {
							for (var i, r, o = this.bidiMap, s = o.bidiLevels, a = this
									.wrapIndent * this.charWidths[n.L], l = [], c = Math
									.min(e, t) - this.wrapIndent, h = Math.max(e, t) - this
									.wrapIndent, u = !1, d = !1, g = 0, f = 0; f < s
								.length; f++) r = o.logicalFromVisual[f], i = s[f], u = r >=
								c && r < h, u && !d ? g = a : !u && d && l.push({
									left: g,
									width: a - g
								}), a += this.charWidths[i], d = u;
							return u && f === s.length && l.push({
								left: g,
								width: a - g
							}), l
						}, this.offsetToCol = function(e) {
							var t = 0,
								i = (e = Math.max(e, 0), 0),
								r = 0,
								o = this.bidiMap.bidiLevels,
								s = this.charWidths[o[r]];
							this.wrapIndent && (e -= this.wrapIndent * this.charWidths[n
							.L]);
							while (e > i + s / 2) {
								if (i += s, r === o.length - 1) {
									s = 0;
									break
								}
								s = this.charWidths[o[++r]]
							}
							return r > 0 && o[r - 1] % 2 !== 0 && o[r] % 2 === 0 ? (e < i &&
									r--, t = this.bidiMap.logicalFromVisual[r]) : r > 0 &&
								o[r - 1] % 2 === 0 && o[r] % 2 !== 0 ? t = 1 + (e > i ? this
									.bidiMap.logicalFromVisual[r] : this.bidiMap
									.logicalFromVisual[r - 1]) : this.isRtlDir && r === o
								.length - 1 && 0 === s && o[r - 1] % 2 === 0 || !this
								.isRtlDir && 0 === r && o[r] % 2 !== 0 ? t = 1 + this
								.bidiMap.logicalFromVisual[r] : (r > 0 && o[r - 1] % 2 !==
									0 && 0 !== s && r--, t = this.bidiMap.logicalFromVisual[
										r]), t + this.wrapIndent
						}
					}).call(a.prototype), t.BidiHandler = a
				})), ace.define("ace/range", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = function(e, t) {
							return e.row - t.row || e.column - t.column
						},
						r = function(e, t, i, n) {
							this.start = {
								row: e,
								column: t
							}, this.end = {
								row: i,
								column: n
							}
						};
					(function() {
						this.isEqual = function(e) {
							return this.start.row === e.start.row && this.end.row === e.end
								.row && this.start.column === e.start.column && this.end
								.column === e.end.column
						}, this.toString = function() {
							return "Range: [" + this.start.row + "/" + this.start.column +
								"] -> [" + this.end.row + "/" + this.end.column + "]"
						}, this.contains = function(e, t) {
							return 0 == this.compare(e, t)
						}, this.compareRange = function(e) {
							var t, i = e.end,
								n = e.start;
							return t = this.compare(i.row, i.column), 1 == t ? (t = this
									.compare(n.row, n.column), 1 == t ? 2 : 0 == t ? 1 : 0
									) : -1 == t ? -2 : (t = this.compare(n.row, n.column), -
									1 == t ? -1 : 1 == t ? 42 : 0)
						}, this.comparePoint = function(e) {
							return this.compare(e.row, e.column)
						}, this.containsRange = function(e) {
							return 0 == this.comparePoint(e.start) && 0 == this
								.comparePoint(e.end)
						}, this.intersects = function(e) {
							var t = this.compareRange(e);
							return -1 == t || 0 == t || 1 == t
						}, this.isEnd = function(e, t) {
							return this.end.row == e && this.end.column == t
						}, this.isStart = function(e, t) {
							return this.start.row == e && this.start.column == t
						}, this.setStart = function(e, t) {
							"object" == typeof e ? (this.start.column = e.column, this.start
								.row = e.row) : (this.start.row = e, this.start.column =
								t)
						}, this.setEnd = function(e, t) {
							"object" == typeof e ? (this.end.column = e.column, this.end
								.row = e.row) : (this.end.row = e, this.end.column = t)
						}, this.inside = function(e, t) {
							return 0 == this.compare(e, t) && (!this.isEnd(e, t) && !this
								.isStart(e, t))
						}, this.insideStart = function(e, t) {
							return 0 == this.compare(e, t) && !this.isEnd(e, t)
						}, this.insideEnd = function(e, t) {
							return 0 == this.compare(e, t) && !this.isStart(e, t)
						}, this.compare = function(e, t) {
							return this.isMultiLine() || e !== this.start.row ? e < this
								.start.row ? -1 : e > this.end.row ? 1 : this.start.row ===
								e ? t >= this.start.column ? 0 : -1 : this.end.row === e ?
								t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -
								1 : t > this.end.column ? 1 : 0
						}, this.compareStart = function(e, t) {
							return this.start.row == e && this.start.column == t ? -1 : this
								.compare(e, t)
						}, this.compareEnd = function(e, t) {
							return this.end.row == e && this.end.column == t ? 1 : this
								.compare(e, t)
						}, this.compareInside = function(e, t) {
							return this.end.row == e && this.end.column == t ? 1 : this
								.start.row == e && this.start.column == t ? -1 : this
								.compare(e, t)
						}, this.clipRows = function(e, t) {
							if (this.end.row > t) var i = {
								row: t + 1,
								column: 0
							};
							else if (this.end.row < e) i = {
								row: e,
								column: 0
							};
							if (this.start.row > t) var n = {
								row: t + 1,
								column: 0
							};
							else if (this.start.row < e) n = {
								row: e,
								column: 0
							};
							return r.fromPoints(n || this.start, i || this.end)
						}, this.extend = function(e, t) {
							var i = this.compare(e, t);
							if (0 == i) return this;
							if (-1 == i) var n = {
								row: e,
								column: t
							};
							else var o = {
								row: e,
								column: t
							};
							return r.fromPoints(n || this.start, o || this.end)
						}, this.isEmpty = function() {
							return this.start.row === this.end.row && this.start.column ===
								this.end.column
						}, this.isMultiLine = function() {
							return this.start.row !== this.end.row
						}, this.clone = function() {
							return r.fromPoints(this.start, this.end)
						}, this.collapseRows = function() {
							return 0 == this.end.column ? new r(this.start.row, 0, Math.max(
								this.start.row, this.end.row - 1), 0) : new r(this.start
								.row, 0, this.end.row, 0)
						}, this.toScreenRange = function(e) {
							var t = e.documentToScreenPosition(this.start),
								i = e.documentToScreenPosition(this.end);
							return new r(t.row, t.column, i.row, i.column)
						}, this.moveBy = function(e, t) {
							this.start.row += e, this.start.column += t, this.end.row += e,
								this.end.column += t
						}
					}).call(r.prototype), r.fromPoints = function(e, t) {
						return new r(e.row, e.column, t.row, t.column)
					}, r.comparePoints = n, r.comparePoints = function(e, t) {
						return e.row - t.row || e.column - t.column
					}, t.Range = r
				})), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/lang", "ace/lib/event_emitter", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/lang"),
						o = e("./lib/event_emitter").EventEmitter,
						s = e("./range").Range,
						a = function(e) {
							this.session = e, this.doc = e.getDocument(), this.clearSelection(),
								this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this
								.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
							var t = this;
							this.lead.on("change", (function(e) {
								t._emit("changeCursor"), t.$isEmpty || t._emit(
										"changeSelection"), t
									.$keepDesiredColumnOnChange || e.old.column == e
									.value.column || (t.$desiredColumn = null)
							})), this.selectionAnchor.on("change", (function() {
								t.$isEmpty || t._emit("changeSelection")
							}))
						};
					(function() {
						n.implement(this, o), this.isEmpty = function() {
							return this.$isEmpty || this.anchor.row == this.lead.row && this
								.anchor.column == this.lead.column
						}, this.isMultiLine = function() {
							return !this.isEmpty() && this.getRange().isMultiLine()
						}, this.getCursor = function() {
							return this.lead.getPosition()
						}, this.setSelectionAnchor = function(e, t) {
							this.anchor.setPosition(e, t), this.$isEmpty && (this
								.$isEmpty = !1, this._emit("changeSelection"))
						}, this.getSelectionAnchor = function() {
							return this.$isEmpty ? this.getSelectionLead() : this.anchor
								.getPosition()
						}, this.getSelectionLead = function() {
							return this.lead.getPosition()
						}, this.shiftSelection = function(e) {
							if (this.$isEmpty) this.moveCursorTo(this.lead.row, this.lead
								.column + e);
							else {
								var t = this.getSelectionAnchor(),
									i = this.getSelectionLead(),
									n = this.isBackwards();
								n && 0 === t.column || this.setSelectionAnchor(t.row, t
										.column + e), (n || 0 !== i.column) && this
									.$moveSelection((function() {
										this.moveCursorTo(i.row, i.column + e)
									}))
							}
						}, this.isBackwards = function() {
							var e = this.anchor,
								t = this.lead;
							return e.row > t.row || e.row == t.row && e.column > t.column
						}, this.getRange = function() {
							var e = this.anchor,
								t = this.lead;
							return this.isEmpty() ? s.fromPoints(t, t) : this
							.isBackwards() ? s.fromPoints(t, e) : s.fromPoints(e, t)
						}, this.clearSelection = function() {
							this.$isEmpty || (this.$isEmpty = !0, this._emit(
								"changeSelection"))
						}, this.selectAll = function() {
							var e = this.doc.getLength() - 1;
							this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc
								.getLine(e).length)
						}, this.setRange = this.setSelectionRange = function(e, t) {
							t ? (this.setSelectionAnchor(e.end.row, e.end.column), this
									.selectTo(e.start.row, e.start.column)) : (this
									.setSelectionAnchor(e.start.row, e.start.column), this
									.selectTo(e.end.row, e.end.column)), this.getRange()
								.isEmpty() && (this.$isEmpty = !0), this.$desiredColumn =
								null
						}, this.$moveSelection = function(e) {
							var t = this.lead;
							this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e
								.call(this)
						}, this.selectTo = function(e, t) {
							this.$moveSelection((function() {
								this.moveCursorTo(e, t)
							}))
						}, this.selectToPosition = function(e) {
							this.$moveSelection((function() {
								this.moveCursorToPosition(e)
							}))
						}, this.moveTo = function(e, t) {
							this.clearSelection(), this.moveCursorTo(e, t)
						}, this.moveToPosition = function(e) {
							this.clearSelection(), this.moveCursorToPosition(e)
						}, this.selectUp = function() {
							this.$moveSelection(this.moveCursorUp)
						}, this.selectDown = function() {
							this.$moveSelection(this.moveCursorDown)
						}, this.selectRight = function() {
							this.$moveSelection(this.moveCursorRight)
						}, this.selectLeft = function() {
							this.$moveSelection(this.moveCursorLeft)
						}, this.selectLineStart = function() {
							this.$moveSelection(this.moveCursorLineStart)
						}, this.selectLineEnd = function() {
							this.$moveSelection(this.moveCursorLineEnd)
						}, this.selectFileEnd = function() {
							this.$moveSelection(this.moveCursorFileEnd)
						}, this.selectFileStart = function() {
							this.$moveSelection(this.moveCursorFileStart)
						}, this.selectWordRight = function() {
							this.$moveSelection(this.moveCursorWordRight)
						}, this.selectWordLeft = function() {
							this.$moveSelection(this.moveCursorWordLeft)
						}, this.getWordRange = function(e, t) {
							if ("undefined" == typeof t) {
								var i = e || this.lead;
								e = i.row, t = i.column
							}
							return this.session.getWordRange(e, t)
						}, this.selectWord = function() {
							this.setSelectionRange(this.getWordRange())
						}, this.selectAWord = function() {
							var e = this.getCursor(),
								t = this.session.getAWordRange(e.row, e.column);
							this.setSelectionRange(t)
						}, this.getLineRange = function(e, t) {
							var i, n = "number" == typeof e ? e : this.lead.row,
								r = this.session.getFoldLine(n);
							return r ? (n = r.start.row, i = r.end.row) : i = n, !0 === t ?
								new s(n, 0, i, this.session.getLine(i).length) : new s(n, 0,
									i + 1, 0)
						}, this.selectLine = function() {
							this.setSelectionRange(this.getLineRange())
						}, this.moveCursorUp = function() {
							this.moveCursorBy(-1, 0)
						}, this.moveCursorDown = function() {
							this.moveCursorBy(1, 0)
						}, this.wouldMoveIntoSoftTab = function(e, t, i) {
							var n = e.column,
								r = e.column + t;
							return i < 0 && (n = e.column - t, r = e.column), this.session
								.isTabStop(e) && this.doc.getLine(e.row).slice(n, r).split(
									" ").length - 1 == t
						}, this.moveCursorLeft = function() {
							var e, t = this.lead.getPosition();
							if (e = this.session.getFoldAt(t.row, t.column, -1)) this
								.moveCursorTo(e.start.row, e.start.column);
							else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row -
								1, this.doc.getLine(t.row - 1).length);
							else {
								var i = this.session.getTabSize();
								this.wouldMoveIntoSoftTab(t, i, -1) && !this.session
									.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -
									i) : this.moveCursorBy(0, -1)
							}
						}, this.moveCursorRight = function() {
							var e, t = this.lead.getPosition();
							if (e = this.session.getFoldAt(t.row, t.column, 1)) this
								.moveCursorTo(e.end.row, e.end.column);
							else if (this.lead.column == this.doc.getLine(this.lead.row)
								.length) this.lead.row < this.doc.getLength() - 1 && this
								.moveCursorTo(this.lead.row + 1, 0);
							else {
								var i = this.session.getTabSize();
								t = this.lead;
								this.wouldMoveIntoSoftTab(t, i, 1) && !this.session
									.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, i) :
									this.moveCursorBy(0, 1)
							}
						}, this.moveCursorLineStart = function() {
							var e = this.lead.row,
								t = this.lead.column,
								i = this.session.documentToScreenRow(e, t),
								n = this.session.screenToDocumentPosition(i, 0),
								r = this.session.getDisplayLine(e, null, n.row, n.column),
								o = r.match(/^\s*/);
							o[0].length == t || this.session.$useEmacsStyleLineStart || (n
								.column += o[0].length), this.moveCursorToPosition(n)
						}, this.moveCursorLineEnd = function() {
							var e = this.lead,
								t = this.session.getDocumentLastRowColumnPosition(e.row, e
									.column);
							if (this.lead.column == t.column) {
								var i = this.session.getLine(t.row);
								if (t.column == i.length) {
									var n = i.search(/\s+$/);
									n > 0 && (t.column = n)
								}
							}
							this.moveCursorTo(t.row, t.column)
						}, this.moveCursorFileEnd = function() {
							var e = this.doc.getLength() - 1,
								t = this.doc.getLine(e).length;
							this.moveCursorTo(e, t)
						}, this.moveCursorFileStart = function() {
							this.moveCursorTo(0, 0)
						}, this.moveCursorLongWordRight = function() {
							var e = this.lead.row,
								t = this.lead.column,
								i = this.doc.getLine(e),
								n = i.substring(t);
							this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe
								.lastIndex = 0;
							var r = this.session.getFoldAt(e, t, 1);
							if (r) this.moveCursorTo(r.end.row, r.end.column);
							else {
								if (this.session.nonTokenRe.exec(n) && (t += this.session
										.nonTokenRe.lastIndex, this.session.nonTokenRe
										.lastIndex = 0, n = i.substring(t)), t >= i.length)
									return this.moveCursorTo(e, i.length), this
										.moveCursorRight(), void(e < this.doc.getLength() -
											1 && this.moveCursorWordRight());
								this.session.tokenRe.exec(n) && (t += this.session.tokenRe
										.lastIndex, this.session.tokenRe.lastIndex = 0),
									this.moveCursorTo(e, t)
							}
						}, this.moveCursorLongWordLeft = function() {
							var e, t = this.lead.row,
								i = this.lead.column;
							if (e = this.session.getFoldAt(t, i, -1)) this.moveCursorTo(e
								.start.row, e.start.column);
							else {
								var n = this.session.getFoldStringAt(t, i, -1);
								null == n && (n = this.doc.getLine(t).substring(0, i));
								var o = r.stringReverse(n);
								if (this.session.nonTokenRe.lastIndex = 0, this.session
									.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(
									o) && (i -= this.session.nonTokenRe.lastIndex, o = o
										.slice(this.session.nonTokenRe.lastIndex), this
										.session.nonTokenRe.lastIndex = 0), i <= 0)
								return this.moveCursorTo(t, 0), this.moveCursorLeft(),
									void(t > 0 && this.moveCursorWordLeft());
								this.session.tokenRe.exec(o) && (i -= this.session.tokenRe
										.lastIndex, this.session.tokenRe.lastIndex = 0),
									this.moveCursorTo(t, i)
							}
						}, this.$shortWordEndIndex = function(e) {
							var t, i = 0,
								n = /\s/,
								r = this.session.tokenRe;
							if (r.lastIndex = 0, this.session.tokenRe.exec(e)) i = this
								.session.tokenRe.lastIndex;
							else {
								while ((t = e[i]) && n.test(t)) i++;
								if (i < 1) {
									r.lastIndex = 0;
									while ((t = e[i]) && !r.test(t))
										if (r.lastIndex = 0, i++, n.test(t)) {
											if (i > 2) {
												i--;
												break
											}
											while ((t = e[i]) && n.test(t)) i++;
											if (i > 2) break
										}
								}
							}
							return r.lastIndex = 0, i
						}, this.moveCursorShortWordRight = function() {
							var e = this.lead.row,
								t = this.lead.column,
								i = this.doc.getLine(e),
								n = i.substring(t),
								r = this.session.getFoldAt(e, t, 1);
							if (r) return this.moveCursorTo(r.end.row, r.end.column);
							if (t == i.length) {
								var o = this.doc.getLength();
								do {
									e++, n = this.doc.getLine(e)
								} while (e < o && /^\s*$/.test(n));
								/^\s+/.test(n) || (n = ""), t = 0
							}
							var s = this.$shortWordEndIndex(n);
							this.moveCursorTo(e, t + s)
						}, this.moveCursorShortWordLeft = function() {
							var e, t = this.lead.row,
								i = this.lead.column;
							if (e = this.session.getFoldAt(t, i, -1)) return this
								.moveCursorTo(e.start.row, e.start.column);
							var n = this.session.getLine(t).substring(0, i);
							if (0 === i) {
								do {
									t--, n = this.doc.getLine(t)
								} while (t > 0 && /^\s*$/.test(n));
								i = n.length, /\s+$/.test(n) || (n = "")
							}
							var o = r.stringReverse(n),
								s = this.$shortWordEndIndex(o);
							return this.moveCursorTo(t, i - s)
						}, this.moveCursorWordRight = function() {
							this.session.$selectLongWords ? this.moveCursorLongWordRight() :
								this.moveCursorShortWordRight()
						}, this.moveCursorWordLeft = function() {
							this.session.$selectLongWords ? this.moveCursorLongWordLeft() :
								this.moveCursorShortWordLeft()
						}, this.moveCursorBy = function(e, t) {
							var i, n = this.session.documentToScreenPosition(this.lead.row,
								this.lead.column);
							0 === t && (0 !== e && (this.session.$bidiHandler.isBidiRow(n
										.row, this.lead.row) ? (i = this.session
										.$bidiHandler.getPosLeft(n.column), n.column =
										Math.round(i / this.session.$bidiHandler
											.charWidths[0])) : i = n.column * this
									.session.$bidiHandler.charWidths[0]), this
								.$desiredColumn ? n.column = this.$desiredColumn : this
								.$desiredColumn = n.column);
							var r = this.session.screenToDocumentPosition(n.row + e, n
								.column, i);
							0 !== e && 0 === t && r.row === this.lead.row && r.column ===
								this.lead.column && this.session.lineWidgets && this.session
								.lineWidgets[r.row] && (r.row > 0 || e > 0) && r.row++, this
								.moveCursorTo(r.row, r.column + t, 0 === t)
						}, this.moveCursorToPosition = function(e) {
							this.moveCursorTo(e.row, e.column)
						}, this.moveCursorTo = function(e, t, i) {
							var n = this.session.getFoldAt(e, t, 1);
							n && (e = n.start.row, t = n.start.column), this
								.$keepDesiredColumnOnChange = !0;
							var r = this.session.getLine(e);
							/[\uDC00-\uDFFF]/.test(r.charAt(t)) && r.charAt(t - 1) && (this
									.lead.row == e && this.lead.column == t + 1 ? t -= 1 :
									t += 1), this.lead.setPosition(e, t), this
								.$keepDesiredColumnOnChange = !1, i || (this
									.$desiredColumn = null)
						}, this.moveCursorToScreen = function(e, t, i) {
							var n = this.session.screenToDocumentPosition(e, t);
							this.moveCursorTo(n.row, n.column, i)
						}, this.detach = function() {
							this.lead.detach(), this.anchor.detach(), this.session = this
								.doc = null
						}, this.fromOrientedRange = function(e) {
							this.setSelectionRange(e, e.cursor == e.start), this
								.$desiredColumn = e.desiredColumn || this.$desiredColumn
						}, this.toOrientedRange = function(e) {
							var t = this.getRange();
							return e ? (e.start.column = t.start.column, e.start.row = t
									.start.row, e.end.column = t.end.column, e.end.row = t
									.end.row) : e = t, e.cursor = this.isBackwards() ? e
								.start : e.end, e.desiredColumn = this.$desiredColumn, e
						}, this.getRangeOfMovements = function(e) {
							var t = this.getCursor();
							try {
								e(this);
								var i = this.getCursor();
								return s.fromPoints(t, i)
							} catch (n) {
								return s.fromPoints(t, t)
							} finally {
								this.moveCursorToPosition(t)
							}
						}, this.toJSON = function() {
							if (this.rangeCount) var e = this.ranges.map((function(e) {
								var t = e.clone();
								return t.isBackwards = e.cursor == e.start,
									t
							}));
							else {
								e = this.getRange();
								e.isBackwards = this.isBackwards()
							}
							return e
						}, this.fromJSON = function(e) {
							if (void 0 == e.start) {
								if (this.rangeList) {
									this.toSingleRange(e[0]);
									for (var t = e.length; t--;) {
										var i = s.fromPoints(e[t].start, e[t].end);
										e[t].isBackwards && (i.cursor = i.start), this
											.addRange(i, !0)
									}
									return
								}
								e = e[0]
							}
							this.rangeList && this.toSingleRange(e), this.setSelectionRange(
								e, e.isBackwards)
						}, this.isEqual = function(e) {
							if ((e.length || this.rangeCount) && e.length != this
								.rangeCount) return !1;
							if (!e.length || !this.ranges) return this.getRange().isEqual(
							e);
							for (var t = this.ranges.length; t--;)
								if (!this.ranges[t].isEqual(e[t])) return !1;
							return !0
						}
					}).call(a.prototype), t.Selection = a
				})), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], (function(
					e, t, i) {
					"use strict";
					var n = e("./config"),
						r = 2e3,
						o = function(e) {
							for (var t in this.states = e, this.regExps = {}, this
									.matchMappings = {}, this.states) {
								for (var i = this.states[t], n = [], r = 0, o = this.matchMappings[
										t] = {
										defaultToken: "text"
									}, s = "g", a = [], l = 0; l < i.length; l++) {
									var c = i[l];
									if (c.defaultToken && (o.defaultToken = c.defaultToken), c
										.caseInsensitive && (s = "gi"), null != c.regex) {
										c.regex instanceof RegExp && (c.regex = c.regex.toString()
											.slice(1, -1));
										var h = c.regex,
											u = new RegExp("(?:(" + h + ")|(.))").exec("a").length -
											2;
										Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c
											.token = c.token[0] : u - 1 != c.token.length ? (this
												.reportError(
													"number of classes and regexp groups doesn't match", {
														rule: c,
														groupCount: u - 1
													}), c.token = c.token[0]) : (c.tokenArray = c
												.token, c.token = null, c.onMatch = this
												.$arrayTokens) : "function" != typeof c.token || c
											.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c
												.token), u > 1 && (/\\\d/.test(c.regex) ? h = c
												.regex.replace(/\\([0-9]+)/g, (function(e, t) {
													return "\\" + (parseInt(t, 10) + r + 1)
												})) : (u = 1, h = this.removeCapturingGroups(c
													.regex)), c.splitRegex || "string" == typeof c
												.token || a.push(c)), o[r] = l, r += u, n.push(h), c
											.onMatch || (c.onMatch = null)
									}
								}
								n.length || (o[0] = 0, n.push("$")), a.forEach((function(e) {
									e.splitRegex = this.createSplitterRegexp(e.regex, s)
								}), this), this.regExps[t] = new RegExp("(" + n.join(")|(") +
									")|($)", s)
							}
						};
					(function() {
						this.$setMaxTokenCount = function(e) {
							r = 0 | e
						}, this.$applyToken = function(e) {
							var t = this.splitRegex.exec(e).slice(1),
								i = this.token.apply(this, t);
							if ("string" === typeof i) return [{
								type: i,
								value: e
							}];
							for (var n = [], r = 0, o = i.length; r < o; r++) t[r] && (n[n
								.length] = {
								type: i[r],
								value: t[r]
							});
							return n
						}, this.$arrayTokens = function(e) {
							if (!e) return [];
							var t = this.splitRegex.exec(e);
							if (!t) return "text";
							for (var i = [], n = this.tokenArray, r = 0, o = n.length; r <
								o; r++) t[r + 1] && (i[i.length] = {
								type: n[r],
								value: t[r + 1]
							});
							return i
						}, this.removeCapturingGroups = function(e) {
							var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, (
								function(e, t) {
									return t ? "(?:" : e
								}));
							return t
						}, this.createSplitterRegexp = function(e, t) {
							if (-1 != e.indexOf("(?=")) {
								var i = 0,
									n = !1,
									r = {};
								e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function(
									e, t, o, s, a, l) {
									return n ? n = "]" != a : a ? n = !0 : s ? (
										i == r.stack && (r.end = l + 1, r
											.stack = -1), i--) : o && (i++,
										1 != o.length && (r.stack = i, r
											.start = l)), e
								})), null != r.end && /^\)*$/.test(e.substr(r.end)) && (
									e = e.substring(0, r.start) + e.substr(r.end))
							}
							return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e
								.length - 1) && (e += "$"), new RegExp(e, (t || "")
								.replace("g", ""))
						}, this.getLineTokens = function(e, t) {
							if (t && "string" != typeof t) {
								var i = t.slice(0);
								t = i[0], "#tmp" === t && (i.shift(), t = i.shift())
							} else i = [];
							var n = t || "start",
								o = this.states[n];
							o || (n = "start", o = this.states[n]);
							var s = this.matchMappings[n],
								a = this.regExps[n];
							a.lastIndex = 0;
							var l, c = [],
								h = 0,
								u = 0,
								d = {
									type: null,
									value: ""
								};
							while (l = a.exec(e)) {
								var g = s.defaultToken,
									f = null,
									p = l[0],
									m = a.lastIndex;
								if (m - p.length > h) {
									var v = e.substring(h, m - p.length);
									d.type == g ? d.value += v : (d.type && c.push(d), d = {
										type: g,
										value: v
									})
								}
								for (var w = 0; w < l.length - 2; w++)
									if (void 0 !== l[w + 1]) {
										f = o[s[w]], g = f.onMatch ? f.onMatch(p, n, i, e) :
											f.token, f.next && (n = "string" == typeof f
												.next ? f.next : f.next(n, i), o = this
												.states[n], o || (this.reportError(
														"state doesn't exist", n), n =
													"start", o = this.states[n]), s = this
												.matchMappings[n], h = m, a = this.regExps[
													n], a.lastIndex = m), f
											.consumeLineEnd && (h = m);
										break
									} if (p)
									if ("string" === typeof g) f && !1 === f.merge || d
										.type !== g ? (d.type && c.push(d), d = {
											type: g,
											value: p
										}) : d.value += p;
									else if (g) {
									d.type && c.push(d), d = {
										type: null,
										value: ""
									};
									for (w = 0; w < g.length; w++) c.push(g[w])
								}
								if (h == e.length) break;
								if (h = m, u++ > r) {
									u > 2 * e.length && this.reportError(
										"infinite loop with in ace tokenizer", {
											startState: t,
											line: e
										});
									while (h < e.length) d.type && c.push(d), d = {
										value: e.substring(h, h += 2e3),
										type: "overflow"
									};
									n = "start", i = [];
									break
								}
							}
							return d.type && c.push(d), i.length > 1 && i[0] !== n && i
								.unshift("#tmp", n), {
									tokens: c,
									state: i.length ? i : n
								}
						}, this.reportError = n.reportError
					}).call(o.prototype), t.Tokenizer = o
				})), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module",
					"ace/lib/lang"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/lang"),
						r = function() {
							this.$rules = {
								start: [{
									token: "empty_line",
									regex: "^$"
								}, {
									defaultToken: "text"
								}]
							}
						};
					(function() {
						this.addRules = function(e, t) {
							if (t)
								for (var i in e) {
									for (var n = e[i], r = 0; r < n.length; r++) {
										var o = n[r];
										(o.next || o.onMatch) && ("string" == typeof o
											.next && 0 !== o.next.indexOf(t) && (o.next =
												t + o.next), o.nextState && 0 !== o
											.nextState.indexOf(t) && (o.nextState = t + o
												.nextState))
									}
									this.$rules[t + i] = n
								} else
									for (var i in e) this.$rules[i] = e[i]
						}, this.getRules = function() {
							return this.$rules
						}, this.embedRules = function(e, t, i, r, o) {
							var s = "function" == typeof e ? (new e).getRules() : e;
							if (r)
								for (var a = 0; a < r.length; a++) r[a] = t + r[a];
							else
								for (var l in r = [], s) r.push(t + l);
							if (this.addRules(s, t), i) {
								var c = Array.prototype[o ? "push" : "unshift"];
								for (a = 0; a < r.length; a++) c.apply(this.$rules[r[a]], n
									.deepCopy(i))
							}
							this.$embeds || (this.$embeds = []), this.$embeds.push(t)
						}, this.getEmbeds = function() {
							return this.$embeds
						};
						var e = function(e, t) {
								return ("start" != e || t.length) && t.unshift(this.nextState,
									e), this.nextState
							},
							t = function(e, t) {
								return t.shift(), t.shift() || "start"
							};
						this.normalizeRules = function() {
							var i = 0,
								n = this.$rules;

							function r(o) {
								var s = n[o];
								s.processed = !0;
								for (var a = 0; a < s.length; a++) {
									var l = s[a],
										c = null;
									Array.isArray(l) && (c = l, l = {}), !l.regex && l
										.start && (l.regex = l.start, l.next || (l
										.next = []), l.next.push({
											defaultToken: l.token
										}, {
											token: l.token + ".end",
											regex: l.end || l.start,
											next: "pop"
										}), l.token = l.token + ".start", l.push = !0);
									var h = l.next || l.push;
									if (h && Array.isArray(h)) {
										var u = l.stateName;
										u || (u = l.token, "string" != typeof u && (u = u[
												0] || ""), n[u] && (u += i++)), n[u] = h, l
											.next = u, r(u)
									} else "pop" == h && (l.next = t);
									if (l.push && (l.nextState = l.next || l.push, l.next =
											e, delete l.push), l.rules)
										for (var d in l.rules) n[d] ? n[d].push && n[d].push
											.apply(n[d], l.rules[d]) : n[d] = l.rules[d];
									var g = "string" == typeof l ? l : l.include;
									if (g && (c = Array.isArray(g) ? g.map((function(e) {
											return n[e]
										})) : n[g]), c) {
										var f = [a, 1].concat(c);
										l.noEscape && (f = f.filter((function(e) {
											return !e.next
										}))), s.splice.apply(s, f), a--
									}
									l.keywordMap && (l.token = this.createKeywordMapper(l
										.keywordMap, l.defaultToken || "text", l
										.caseInsensitive), delete l.defaultToken)
								}
							}
							Object.keys(n).forEach(r, this)
						}, this.createKeywordMapper = function(e, t, i, n) {
							var r = Object.create(null);
							return Object.keys(e).forEach((function(t) {
									var o = e[t];
									i && (o = o.toLowerCase());
									for (var s = o.split(n || "|"), a = s
										.length; a--;) r[s[a]] = t
								})), Object.getPrototypeOf(r) && (r.__proto__ = null), this
								.$keywordList = Object.keys(r), e = null, i ? function(e) {
									return r[e.toLowerCase()] || t
								} : function(e) {
									return r[e] || t
								}
						}, this.getKeywords = function() {
							return this.$keywords
						}
					}).call(r.prototype), t.TextHighlightRules = r
				})), ace.define("ace/mode/behaviour", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = function() {
						this.$behaviours = {}
					};
					(function() {
						this.add = function(e, t, i) {
							switch (void 0) {
								case this.$behaviours:
									this.$behaviours = {};
								case this.$behaviours[e]:
									this.$behaviours[e] = {}
							}
							this.$behaviours[e][t] = i
						}, this.addBehaviours = function(e) {
							for (var t in e)
								for (var i in e[t]) this.add(t, i, e[t][i])
						}, this.remove = function(e) {
							this.$behaviours && this.$behaviours[e] && delete this
								.$behaviours[e]
						}, this.inherit = function(e, t) {
							if ("function" === typeof e) var i = (new e).getBehaviours(t);
							else i = e.getBehaviours(t);
							this.addBehaviours(i)
						}, this.getBehaviours = function(e) {
							if (e) {
								for (var t = {}, i = 0; i < e.length; i++) this.$behaviours[
									e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
								return t
							}
							return this.$behaviours
						}
					}).call(n.prototype), t.Behaviour = n
				})), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], (
					function(e, t, i) {
						"use strict";
						var n = e("./range").Range,
							r = function(e, t, i) {
								this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
								var n = e.getTokenAt(t, i);
								this.$tokenIndex = n ? n.index : -1
							};
						(function() {
							this.stepBackward = function() {
								this.$tokenIndex -= 1;
								while (this.$tokenIndex < 0) {
									if (this.$row -= 1, this.$row < 0) return this.$row = 0,
										null;
									this.$rowTokens = this.$session.getTokens(this.$row), this
										.$tokenIndex = this.$rowTokens.length - 1
								}
								return this.$rowTokens[this.$tokenIndex]
							}, this.stepForward = function() {
								var e;
								this.$tokenIndex += 1;
								while (this.$tokenIndex >= this.$rowTokens.length) {
									if (this.$row += 1, e || (e = this.$session.getLength()),
										this.$row >= e) return this.$row = e - 1, null;
									this.$rowTokens = this.$session.getTokens(this.$row), this
										.$tokenIndex = 0
								}
								return this.$rowTokens[this.$tokenIndex]
							}, this.getCurrentToken = function() {
								return this.$rowTokens[this.$tokenIndex]
							}, this.getCurrentTokenRow = function() {
								return this.$row
							}, this.getCurrentTokenColumn = function() {
								var e = this.$rowTokens,
									t = this.$tokenIndex,
									i = e[t].start;
								if (void 0 !== i) return i;
								i = 0;
								while (t > 0) t -= 1, i += e[t].value.length;
								return i
							}, this.getCurrentTokenPosition = function() {
								return {
									row: this.$row,
									column: this.getCurrentTokenColumn()
								}
							}, this.getCurrentTokenRange = function() {
								var e = this.$rowTokens[this.$tokenIndex],
									t = this.getCurrentTokenColumn();
								return new n(this.$row, t, this.$row, t + e.value.length)
							}
						}).call(r.prototype), t.TokenIterator = r
					})), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module",
					"ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"
				], (function(e, t, i) {
					"use strict";
					var n, r = e("../../lib/oop"),
						o = e("../behaviour").Behaviour,
						s = e("../../token_iterator").TokenIterator,
						a = e("../../lib/lang"),
						l = ["text", "paren.rparen", "punctuation.operator"],
						c = ["text", "paren.rparen", "punctuation.operator", "comment"],
						h = {},
						u = {
							'"': '"',
							"'": "'"
						},
						d = function(e) {
							var t = -1;
							if (e.multiSelect && (t = e.selection.index, h.rangeCount != e
									.multiSelect.rangeCount && (h = {
										rangeCount: e.multiSelect.rangeCount
									})), h[t]) return n = h[t];
							n = h[t] = {
								autoInsertedBrackets: 0,
								autoInsertedRow: -1,
								autoInsertedLineEnd: "",
								maybeInsertedBrackets: 0,
								maybeInsertedRow: -1,
								maybeInsertedLineStart: "",
								maybeInsertedLineEnd: ""
							}
						},
						g = function(e, t, i, n) {
							var r = e.end.row - e.start.row;
							return {
								text: i + t + n,
								selection: [0, e.start.column + 1, r, e.end.column + (r ? 0 : 1)]
							}
						},
						f = function(e) {
							this.add("braces", "insertion", (function(t, i, r, o, s) {
								var l = r.getCursorPosition(),
									c = o.doc.getLine(l.row);
								if ("{" == s) {
									d(r);
									var h = r.getSelectionRange(),
										u = o.doc.getTextRange(h);
									if ("" !== u && "{" !== u && r
										.getWrapBehavioursEnabled()) return g(h, u, "{",
										"}");
									if (f.isSaneInsertion(r, o)) return /[\]\}\)]/.test(
											c[l.column]) || r.inMultiSelectMode ||
										e && e.braces ? (f.recordAutoInsert(r, o,
											"}"), {
											text: "{}",
											selection: [1, 1]
										}) : (f.recordMaybeInsert(r, o, "{"), {
											text: "{",
											selection: [1, 1]
										})
								} else if ("}" == s) {
									d(r);
									var p = c.substring(l.column, l.column + 1);
									if ("}" == p) {
										var m = o.$findOpeningBracket("}", {
											column: l.column + 1,
											row: l.row
										});
										if (null !== m && f.isAutoInsertedClosing(l, c,
												s)) return f.popAutoInsertedClosing(), {
											text: "",
											selection: [1, 1]
										}
									}
								} else {
									if ("\n" == s || "\r\n" == s) {
										d(r);
										var v = "";
										f.isMaybeInsertedClosing(l, c) && (v = a
											.stringRepeat("}", n
												.maybeInsertedBrackets), f
											.clearMaybeInsertedClosing());
										p = c.substring(l.column, l.column + 1);
										if ("}" === p) {
											var w = o.findMatchingBracket({
												row: l.row,
												column: l.column + 1
											}, "}");
											if (!w) return null;
											var b = this.$getIndent(o.getLine(w.row))
										} else {
											if (!v) return void f
												.clearMaybeInsertedClosing();
											b = this.$getIndent(c)
										}
										var A = b + o.getTabString();
										return {
											text: "\n" + A + "\n" + b + v,
											selection: [1, A.length, 1, A.length]
										}
									}
									f.clearMaybeInsertedClosing()
								}
							})), this.add("braces", "deletion", (function(e, t, i, r, o) {
								var s = r.doc.getTextRange(o);
								if (!o.isMultiLine() && "{" == s) {
									d(i);
									var a = r.doc.getLine(o.start.row),
										l = a.substring(o.end.column, o.end.column + 1);
									if ("}" == l) return o.end.column++, o;
									n.maybeInsertedBrackets--
								}
							})), this.add("parens", "insertion", (function(e, t, i, n, r) {
								if ("(" == r) {
									d(i);
									var o = i.getSelectionRange(),
										s = n.doc.getTextRange(o);
									if ("" !== s && i.getWrapBehavioursEnabled())
									return g(o, s, "(", ")");
									if (f.isSaneInsertion(i, n)) return f
										.recordAutoInsert(i, n, ")"), {
											text: "()",
											selection: [1, 1]
										}
								} else if (")" == r) {
									d(i);
									var a = i.getCursorPosition(),
										l = n.doc.getLine(a.row),
										c = l.substring(a.column, a.column + 1);
									if (")" == c) {
										var h = n.$findOpeningBracket(")", {
											column: a.column + 1,
											row: a.row
										});
										if (null !== h && f.isAutoInsertedClosing(a, l,
												r)) return f.popAutoInsertedClosing(), {
											text: "",
											selection: [1, 1]
										}
									}
								}
							})), this.add("parens", "deletion", (function(e, t, i, n, r) {
								var o = n.doc.getTextRange(r);
								if (!r.isMultiLine() && "(" == o) {
									d(i);
									var s = n.doc.getLine(r.start.row),
										a = s.substring(r.start.column + 1, r.start
											.column + 2);
									if (")" == a) return r.end.column++, r
								}
							})), this.add("brackets", "insertion", (function(e, t, i, n, r) {
								if ("[" == r) {
									d(i);
									var o = i.getSelectionRange(),
										s = n.doc.getTextRange(o);
									if ("" !== s && i.getWrapBehavioursEnabled())
									return g(o, s, "[", "]");
									if (f.isSaneInsertion(i, n)) return f
										.recordAutoInsert(i, n, "]"), {
											text: "[]",
											selection: [1, 1]
										}
								} else if ("]" == r) {
									d(i);
									var a = i.getCursorPosition(),
										l = n.doc.getLine(a.row),
										c = l.substring(a.column, a.column + 1);
									if ("]" == c) {
										var h = n.$findOpeningBracket("]", {
											column: a.column + 1,
											row: a.row
										});
										if (null !== h && f.isAutoInsertedClosing(a, l,
												r)) return f.popAutoInsertedClosing(), {
											text: "",
											selection: [1, 1]
										}
									}
								}
							})), this.add("brackets", "deletion", (function(e, t, i, n, r) {
								var o = n.doc.getTextRange(r);
								if (!r.isMultiLine() && "[" == o) {
									d(i);
									var s = n.doc.getLine(r.start.row),
										a = s.substring(r.start.column + 1, r.start
											.column + 2);
									if ("]" == a) return r.end.column++, r
								}
							})), this.add("string_dquotes", "insertion", (function(e, t, i, n,
								r) {
								var o = n.$mode.$quotes || u;
								if (1 == r.length && o[r]) {
									if (this.lineCommentStart && -1 != this
										.lineCommentStart.indexOf(r)) return;
									d(i);
									var s = r,
										a = i.getSelectionRange(),
										l = n.doc.getTextRange(a);
									if (!("" === l || 1 == l.length && o[l]) && i
										.getWrapBehavioursEnabled()) return g(a, l, s,
										s);
									if (!l) {
										var c = i.getCursorPosition(),
											h = n.doc.getLine(c.row),
											f = h.substring(c.column - 1, c.column),
											p = h.substring(c.column, c.column + 1),
											m = n.getTokenAt(c.row, c.column),
											v = n.getTokenAt(c.row, c.column + 1);
										if ("\\" == f && m && /escape/.test(m.type))
											return null;
										var w, b = m && /string|escape/.test(m.type),
											A = !v || /string|escape/.test(v.type);
										if (p == s) w = b !== A, w && /string\.end/
											.test(v.type) && (w = !1);
										else {
											if (b && !A) return null;
											if (b && A) return null;
											var C = n.$mode.tokenRe;
											C.lastIndex = 0;
											var F = C.test(f);
											C.lastIndex = 0;
											var y = C.test(f);
											if (F || y) return null;
											if (p && !/[\s;,.})\]\\]/.test(p))
											return null;
											w = !0
										}
										return {
											text: w ? s + s : "",
											selection: [1, 1]
										}
									}
								}
							})), this.add("string_dquotes", "deletion", (function(e, t, i, n,
							r) {
								var o = n.doc.getTextRange(r);
								if (!r.isMultiLine() && ('"' == o || "'" == o)) {
									d(i);
									var s = n.doc.getLine(r.start.row),
										a = s.substring(r.start.column + 1, r.start
											.column + 2);
									if (a == o) return r.end.column++, r
								}
							}))
						};
					f.isSaneInsertion = function(e, t) {
						var i = e.getCursorPosition(),
							n = new s(t, i.row, i.column);
						if (!this.$matchTokenType(n.getCurrentToken() || "text", l)) {
							var r = new s(t, i.row, i.column + 1);
							if (!this.$matchTokenType(r.getCurrentToken() || "text", l))
							return !1
						}
						return n.stepForward(), n.getCurrentTokenRow() !== i.row || this
							.$matchTokenType(n.getCurrentToken() || "text", c)
					}, f.$matchTokenType = function(e, t) {
						return t.indexOf(e.type || e) > -1
					}, f.recordAutoInsert = function(e, t, i) {
						var r = e.getCursorPosition(),
							o = t.doc.getLine(r.row);
						this.isAutoInsertedClosing(r, o, n.autoInsertedLineEnd[0]) || (n
								.autoInsertedBrackets = 0), n.autoInsertedRow = r.row, n
							.autoInsertedLineEnd = i + o.substr(r.column), n
							.autoInsertedBrackets++
					}, f.recordMaybeInsert = function(e, t, i) {
						var r = e.getCursorPosition(),
							o = t.doc.getLine(r.row);
						this.isMaybeInsertedClosing(r, o) || (n.maybeInsertedBrackets = 0), n
							.maybeInsertedRow = r.row, n.maybeInsertedLineStart = o.substr(0, r
								.column) + i, n.maybeInsertedLineEnd = o.substr(r.column), n
							.maybeInsertedBrackets++
					}, f.isAutoInsertedClosing = function(e, t, i) {
						return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow &&
							i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n
							.autoInsertedLineEnd
					}, f.isMaybeInsertedClosing = function(e, t) {
						return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t
							.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e
								.column) == n.maybeInsertedLineStart
					}, f.popAutoInsertedClosing = function() {
						n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n
							.autoInsertedBrackets--
					}, f.clearMaybeInsertedClosing = function() {
						n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
					}, r.inherits(f, o), t.CstyleBehaviour = f
				})), ace.define("ace/unicode", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";

					function n(e) {
						var i = /\w{4}/g;
						for (var n in e) t.packages[n] = e[n].replace(i, "\\u$&")
					}
					t.packages = {}, n({
						L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
						Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
						Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
						Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
						Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
						Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
						M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
						Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
						Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
						Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
						N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
						Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
						Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
						No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
						P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
						Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
						Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
						Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
						Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
						Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
						Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
						Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
						S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
						Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
						Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
						Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
						So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
						Z: "002000A01680180E2000-200A20282029202F205F3000",
						Zs: "002000A01680180E2000-200A202F205F3000",
						Zl: "2028",
						Zp: "2029",
						C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
						Cc: "0000-001F007F-009F",
						Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
						Co: "E000-F8FF",
						Cs: "D800-DFFF",
						Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
					})
				})), ace.define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer",
					"ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode",
					"ace/lib/lang", "ace/token_iterator", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("../tokenizer").Tokenizer,
						r = e("./text_highlight_rules").TextHighlightRules,
						o = e("./behaviour/cstyle").CstyleBehaviour,
						s = e("../unicode"),
						a = e("../lib/lang"),
						l = e("../token_iterator").TokenIterator,
						c = e("../range").Range,
						h = function() {
							this.HighlightRules = r
						};
					(function() {
						this.$defaultBehaviour = new o, this.tokenRe = new RegExp("^[" + s
								.packages.L + s.packages.Mn + s.packages.Mc + s.packages.Nd + s
								.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp(
								"^(?:[^" + s.packages.L + s.packages.Mn + s.packages.Mc + s
								.packages.Nd + s.packages.Pc + "\\$_]|\\s])+", "g"), this
							.getTokenizer = function() {
								return this.$tokenizer || (this.$highlightRules = this
									.$highlightRules || new this.HighlightRules(this
										.$highlightRuleConfig), this.$tokenizer = new n(this
										.$highlightRules.getRules())), this.$tokenizer
							}, this.lineCommentStart = "", this.blockComment = "", this
							.toggleCommentLines = function(e, t, i, n) {
								var r = t.doc,
									o = !0,
									s = !0,
									l = 1 / 0,
									c = t.getTabSize(),
									h = !1;
								if (this.lineCommentStart) {
									if (Array.isArray(this.lineCommentStart)) p = this
										.lineCommentStart.map(a.escapeRegExp).join("|"), g =
										this.lineCommentStart[0];
									else p = a.escapeRegExp(this.lineCommentStart), g = this
										.lineCommentStart;
									p = new RegExp("^(\\s*)(?:" + p + ") ?"), h = t
										.getUseSoftTabs();
									w = function(e, t) {
										var i = e.match(p);
										if (i) {
											var n = i[1].length,
												o = i[0].length;
											d(e, n, o) || " " != i[0][o - 1] || o--, r
												.removeInLine(t, n, o)
										}
									};
									var u = g + " ",
										d = (v = function(e, t) {
											o && !/\S/.test(e) || (d(e, l, l) ? r
												.insertInLine({
													row: t,
													column: l
												}, u) : r.insertInLine({
													row: t,
													column: l
												}, g))
										}, b = function(e, t) {
											return p.test(e)
										}, function(e, t, i) {
											var n = 0;
											while (t-- && " " == e.charAt(t)) n++;
											if (n % c != 0) return !1;
											n = 0;
											while (" " == e.charAt(i++)) n++;
											return c > 2 ? n % c != c - 1 : n % c == 0
										})
								} else {
									if (!this.blockComment) return !1;
									var g = this.blockComment.start,
										f = this.blockComment.end,
										p = new RegExp("^(\\s*)(?:" + a.escapeRegExp(g) + ")"),
										m = new RegExp("(?:" + a.escapeRegExp(f) + ")\\s*$"),
										v = function(e, t) {
											b(e, t) || o && !/\S/.test(e) || (r.insertInLine({
												row: t,
												column: e.length
											}, f), r.insertInLine({
												row: t,
												column: l
											}, g))
										},
										w = function(e, t) {
											var i;
											(i = e.match(m)) && r.removeInLine(t, e.length - i[
													0].length, e.length), (i = e.match(p)) && r
												.removeInLine(t, i[1].length, i[0].length)
										},
										b = function(e, i) {
											if (p.test(e)) return !0;
											for (var n = t.getTokens(i), r = 0; r < n
												.length; r++)
												if ("comment" === n[r].type) return !0
										}
								}

								function A(e) {
									for (var t = i; t <= n; t++) e(r.getLine(t), t)
								}
								var C = 1 / 0;
								A((function(e, t) {
										var i = e.search(/\S/); - 1 !== i ? (i < l && (
												l = i), s && !b(e, t) && (s = !1)) : C >
											e.length && (C = e.length)
									})), l == 1 / 0 && (l = C, o = !1, s = !1), h && l % c !=
									0 && (l = Math.floor(l / c) * c), A(s ? w : v)
							}, this.toggleBlockComment = function(e, t, i, n) {
								var r = this.blockComment;
								if (r) {
									!r.start && r[0] && (r = r[0]);
									var o, s, a = new l(t, n.row, n.column),
										h = a.getCurrentToken(),
										u = (t.selection, t.selection.toOrientedRange());
									if (h && /comment/.test(h.type)) {
										var d, g;
										while (h && /comment/.test(h.type)) {
											var f = h.value.indexOf(r.start);
											if (-1 != f) {
												var p = a.getCurrentTokenRow(),
													m = a.getCurrentTokenColumn() + f;
												d = new c(p, m, p, m + r.start.length);
												break
											}
											h = a.stepBackward()
										}
										a = new l(t, n.row, n.column), h = a.getCurrentToken();
										while (h && /comment/.test(h.type)) {
											f = h.value.indexOf(r.end);
											if (-1 != f) {
												p = a.getCurrentTokenRow(), m = a
													.getCurrentTokenColumn() + f;
												g = new c(p, m, p, m + r.end.length);
												break
											}
											h = a.stepForward()
										}
										g && t.remove(g), d && (t.remove(d), o = d.start.row,
											s = -r.start.length)
									} else s = r.start.length, o = i.start.row, t.insert(i.end,
										r.end), t.insert(i.start, r.start);
									u.start.row == o && (u.start.column += s), u.end.row == o &&
										(u.end.column += s), t.selection.fromOrientedRange(u)
								}
							}, this.getNextLineIndent = function(e, t, i) {
								return this.$getIndent(t)
							}, this.checkOutdent = function(e, t, i) {
								return !1
							}, this.autoOutdent = function(e, t, i) {}, this.$getIndent =
							function(e) {
								return e.match(/^\s*/)[0]
							}, this.createWorker = function(e) {
								return null
							}, this.createModeDelegates = function(e) {
								for (var t in this.$embeds = [], this.$modes = {}, e) e[t] && (
									this.$embeds.push(t), this.$modes[t] = new e[t]);
								var i = ["toggleBlockComment", "toggleCommentLines",
									"getNextLineIndent", "checkOutdent", "autoOutdent",
									"transformAction", "getCompletions"
								];
								for (t = 0; t < i.length; t++)(function(e) {
									var n = i[t],
										r = e[n];
									e[i[t]] = function() {
										return this.$delegator(n, arguments, r)
									}
								})(this)
							}, this.$delegator = function(e, t, i) {
								var n = t[0];
								"string" != typeof n && (n = n[0]);
								for (var r = 0; r < this.$embeds.length; r++)
									if (this.$modes[this.$embeds[r]]) {
										var o = n.split(this.$embeds[r]);
										if (!o[0] && o[1]) {
											t[0] = o[1];
											var s = this.$modes[this.$embeds[r]];
											return s[e].apply(s, t)
										}
									} var a = i.apply(this, t);
								return i ? a : void 0
							}, this.transformAction = function(e, t, i, n, r) {
								if (this.$behaviour) {
									var o = this.$behaviour.getBehaviours();
									for (var s in o)
										if (o[s][t]) {
											var a = o[s][t].apply(this, arguments);
											if (a) return a
										}
								}
							}, this.getKeywords = function(e) {
								if (!this.completionKeywords) {
									var t = this.$tokenizer.rules,
										i = [];
									for (var n in t)
										for (var r = t[n], o = 0, s = r.length; o < s; o++)
											if ("string" === typeof r[o].token)
												/keyword|support|storage/.test(r[o].token) && i
												.push(r[o].regex);
											else if ("object" === typeof r[o].token)
										for (var a = 0, l = r[o].token.length; a < l; a++)
											if (/keyword|support|storage/.test(r[o].token[a])) {
												n = r[o].regex.match(/\(.+?\)/g)[a];
												i.push(n.substr(1, n.length - 2))
											} this.completionKeywords = i
								}
								return e ? i.concat(this.$keywordList || []) : this.$keywordList
							}, this.$createKeywordList = function() {
								return this.$highlightRules || this.getTokenizer(), this
									.$keywordList = this.$highlightRules.$keywordList || []
							}, this.getCompletions = function(e, t, i, n) {
								var r = this.$keywordList || this.$createKeywordList();
								return r.map((function(e) {
									return {
										name: e,
										value: e,
										score: 0,
										meta: "keyword"
									}
								}))
							}, this.$id = "ace/mode/text"
					}).call(h.prototype), t.Mode = h
				})), ace.define("ace/apply_delta", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					t.applyDelta = function(e, t, i) {
						var n = t.start.row,
							r = t.start.column,
							o = e[n] || "";
						switch (t.action) {
							case "insert":
								var s = t.lines;
								if (1 === s.length) e[n] = o.substring(0, r) + t.lines[0] + o
									.substring(r);
								else {
									var a = [n, 1].concat(t.lines);
									e.splice.apply(e, a), e[n] = o.substring(0, r) + e[n], e[n +
										t.lines.length - 1] += o.substring(r)
								}
								break;
							case "remove":
								var l = t.end.column,
									c = t.end.row;
								n === c ? e[n] = o.substring(0, r) + o.substring(l) : e.splice(
									n, c - n + 1, o.substring(0, r) + e[c].substring(l));
								break
						}
					}
				})), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/event_emitter").EventEmitter,
						o = t.Anchor = function(e, t, i) {
							this.$onChange = this.onChange.bind(this), this.attach(e),
								"undefined" == typeof i ? this.setPosition(t.row, t.column) : this
								.setPosition(t, i)
						};
					(function() {
						function e(e, t, i) {
							var n = i ? e.column <= t.column : e.column < t.column;
							return e.row < t.row || e.row == t.row && n
						}

						function t(t, i, n) {
							var r = "insert" == t.action,
								o = (r ? 1 : -1) * (t.end.row - t.start.row),
								s = (r ? 1 : -1) * (t.end.column - t.start.column),
								a = t.start,
								l = r ? a : t.end;
							return e(i, a, n) ? {
								row: i.row,
								column: i.column
							} : e(l, i, !n) ? {
								row: i.row + o,
								column: i.column + (i.row == l.row ? s : 0)
							} : {
								row: a.row,
								column: a.column
							}
						}
						n.implement(this, r), this.getPosition = function() {
							return this.$clipPositionToDocument(this.row, this.column)
						}, this.getDocument = function() {
							return this.document
						}, this.$insertRight = !1, this.onChange = function(e) {
							if ((e.start.row != e.end.row || e.start.row == this.row) && !(e
									.start.row > this.row)) {
								var i = t(e, {
									row: this.row,
									column: this.column
								}, this.$insertRight);
								this.setPosition(i.row, i.column, !0)
							}
						}, this.setPosition = function(e, t, i) {
							var n;
							if (n = i ? {
									row: e,
									column: t
								} : this.$clipPositionToDocument(e, t), this.row != n.row ||
								this.column != n.column) {
								var r = {
									row: this.row,
									column: this.column
								};
								this.row = n.row, this.column = n.column, this._signal(
									"change", {
										old: r,
										value: n
									})
							}
						}, this.detach = function() {
							this.document.removeEventListener("change", this.$onChange)
						}, this.attach = function(e) {
							this.document = e || this.document, this.document.on("change",
								this.$onChange)
						}, this.$clipPositionToDocument = function(e, t) {
							var i = {};
							return e >= this.document.getLength() ? (i.row = Math.max(0,
										this.document.getLength() - 1), i.column = this
									.document.getLine(i.row).length) : e < 0 ? (i.row = 0, i
									.column = 0) : (i.row = e, i.column = Math.min(this
									.document.getLine(i.row).length, Math.max(0, t))), t <
								0 && (i.column = 0), i
						}
					}).call(o.prototype)
				})), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop",
					"ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./apply_delta").applyDelta,
						o = e("./lib/event_emitter").EventEmitter,
						s = e("./range").Range,
						a = e("./anchor").Anchor,
						l = function(e) {
							this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(
								e) ? this.insertMergedLines({
								row: 0,
								column: 0
							}, e) : this.insert({
								row: 0,
								column: 0
							}, e)
						};
					(function() {
						n.implement(this, o), this.setValue = function(e) {
								var t = this.getLength() - 1;
								this.remove(new s(0, 0, t, this.getLine(t).length)), this
									.insert({
										row: 0,
										column: 0
									}, e)
							}, this.getValue = function() {
								return this.getAllLines().join(this.getNewLineCharacter())
							}, this.createAnchor = function(e, t) {
								return new a(this, e, t)
							}, 0 === "aaa".split(/a/).length ? this.$split = function(e) {
								return e.replace(/\r\n|\r/g, "\n").split("\n")
							} : this.$split = function(e) {
								return e.split(/\r\n|\r|\n/)
							}, this.$detectNewLine = function(e) {
								var t = e.match(/^.*?(\r\n|\r|\n)/m);
								this.$autoNewLine = t ? t[1] : "\n", this._signal(
									"changeNewLineMode")
							}, this.getNewLineCharacter = function() {
								switch (this.$newLineMode) {
									case "windows":
										return "\r\n";
									case "unix":
										return "\n";
									default:
										return this.$autoNewLine || "\n"
								}
							}, this.$autoNewLine = "", this.$newLineMode = "auto", this
							.setNewLineMode = function(e) {
								this.$newLineMode !== e && (this.$newLineMode = e, this._signal(
									"changeNewLineMode"))
							}, this.getNewLineMode = function() {
								return this.$newLineMode
							}, this.isNewLine = function(e) {
								return "\r\n" == e || "\r" == e || "\n" == e
							}, this.getLine = function(e) {
								return this.$lines[e] || ""
							}, this.getLines = function(e, t) {
								return this.$lines.slice(e, t + 1)
							}, this.getAllLines = function() {
								return this.getLines(0, this.getLength())
							}, this.getLength = function() {
								return this.$lines.length
							}, this.getTextRange = function(e) {
								return this.getLinesForRange(e).join(this.getNewLineCharacter())
							}, this.getLinesForRange = function(e) {
								var t;
								if (e.start.row === e.end.row) t = [this.getLine(e.start.row)
									.substring(e.start.column, e.end.column)
								];
								else {
									t = this.getLines(e.start.row, e.end.row), t[0] = (t[0] ||
										"").substring(e.start.column);
									var i = t.length - 1;
									e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e
										.end.column))
								}
								return t
							}, this.insertLines = function(e, t) {
								return console.warn(
									"Use of document.insertLines is deprecated. Use the insertFullLines method instead."
									), this.insertFullLines(e, t)
							}, this.removeLines = function(e, t) {
								return console.warn(
									"Use of document.removeLines is deprecated. Use the removeFullLines method instead."
									), this.removeFullLines(e, t)
							}, this.insertNewLine = function(e) {
								return console.warn(
									"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."
									), this.insertMergedLines(e, ["", ""])
							}, this.insert = function(e, t) {
								return this.getLength() <= 1 && this.$detectNewLine(t), this
									.insertMergedLines(e, this.$split(t))
							}, this.insertInLine = function(e, t) {
								var i = this.clippedPos(e.row, e.column),
									n = this.pos(e.row, e.column + t.length);
								return this.applyDelta({
									start: i,
									end: n,
									action: "insert",
									lines: [t]
								}, !0), this.clonePos(n)
							}, this.clippedPos = function(e, t) {
								var i = this.getLength();
								void 0 === e ? e = i : e < 0 ? e = 0 : e >= i && (e = i - 1, t =
									void 0);
								var n = this.getLine(e);
								return void 0 == t && (t = n.length), t = Math.min(Math.max(t,
									0), n.length), {
									row: e,
									column: t
								}
							}, this.clonePos = function(e) {
								return {
									row: e.row,
									column: e.column
								}
							}, this.pos = function(e, t) {
								return {
									row: e,
									column: t
								}
							}, this.$clipPosition = function(e) {
								var t = this.getLength();
								return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this
									.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e
									.column = Math.min(Math.max(e.column, 0), this.getLine(e
										.row).length)), e
							}, this.insertFullLines = function(e, t) {
								e = Math.min(Math.max(e, 0), this.getLength());
								var i = 0;
								e < this.getLength() ? (t = t.concat([""]), i = 0) : (t = [""]
										.concat(t), e--, i = this.$lines[e].length), this
									.insertMergedLines({
										row: e,
										column: i
									}, t)
							}, this.insertMergedLines = function(e, t) {
								var i = this.clippedPos(e.row, e.column),
									n = {
										row: i.row + t.length - 1,
										column: (1 == t.length ? i.column : 0) + t[t.length - 1]
											.length
									};
								return this.applyDelta({
									start: i,
									end: n,
									action: "insert",
									lines: t
								}), this.clonePos(n)
							}, this.remove = function(e) {
								var t = this.clippedPos(e.start.row, e.start.column),
									i = this.clippedPos(e.end.row, e.end.column);
								return this.applyDelta({
									start: t,
									end: i,
									action: "remove",
									lines: this.getLinesForRange({
										start: t,
										end: i
									})
								}), this.clonePos(t)
							}, this.removeInLine = function(e, t, i) {
								var n = this.clippedPos(e, t),
									r = this.clippedPos(e, i);
								return this.applyDelta({
									start: n,
									end: r,
									action: "remove",
									lines: this.getLinesForRange({
										start: n,
										end: r
									})
								}, !0), this.clonePos(n)
							}, this.removeFullLines = function(e, t) {
								e = Math.min(Math.max(0, e), this.getLength() - 1), t = Math
									.min(Math.max(0, t), this.getLength() - 1);
								var i = t == this.getLength() - 1 && e > 0,
									n = t < this.getLength() - 1,
									r = i ? e - 1 : e,
									o = i ? this.getLine(r).length : 0,
									a = n ? t + 1 : t,
									l = n ? 0 : this.getLine(a).length,
									c = new s(r, o, a, l),
									h = this.$lines.slice(e, t + 1);
								return this.applyDelta({
									start: c.start,
									end: c.end,
									action: "remove",
									lines: this.getLinesForRange(c)
								}), h
							}, this.removeNewLine = function(e) {
								e < this.getLength() - 1 && e >= 0 && this.applyDelta({
									start: this.pos(e, this.getLine(e).length),
									end: this.pos(e + 1, 0),
									action: "remove",
									lines: ["", ""]
								})
							}, this.replace = function(e, t) {
								return e instanceof s || (e = s.fromPoints(e.start, e.end)),
									0 === t.length && e.isEmpty() ? e.start : t == this
									.getTextRange(e) ? e.end : (this.remove(e), i = t ? this
										.insert(e.start, t) : e.start, i);
								var i
							}, this.applyDeltas = function(e) {
								for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
							}, this.revertDeltas = function(e) {
								for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
							}, this.applyDelta = function(e, t) {
								var i = "insert" == e.action;
								(i ? e.lines.length <= 1 && !e.lines[0] : !s.comparePoints(e
									.start, e.end)) || (i && e.lines.length > 2e4 && this
									.$splitAndapplyLargeDelta(e, 2e4), r(this.$lines, e, t),
									this._signal("change", e))
							}, this.$splitAndapplyLargeDelta = function(e, t) {
								var i = e.lines,
									n = i.length,
									r = e.start.row,
									o = e.start.column,
									s = 0,
									a = 0;
								do {
									s = a, a += t - 1;
									var l = i.slice(s, a);
									if (a > n) {
										e.lines = l, e.start.row = r + s, e.start.column = o;
										break
									}
									l.push(""), this.applyDelta({
										start: this.pos(r + s, o),
										end: this.pos(r + a, o = 0),
										action: e.action,
										lines: l
									}, !0)
								} while (1)
							}, this.revertDelta = function(e) {
								this.applyDelta({
									start: this.clonePos(e.start),
									end: this.clonePos(e.end),
									action: "insert" == e.action ? "remove" : "insert",
									lines: e.lines.slice()
								})
							}, this.indexToPosition = function(e, t) {
								for (var i = this.$lines || this.getAllLines(), n = this
										.getNewLineCharacter().length, r = t || 0, o = i
										.length; r < o; r++)
									if (e -= i[r].length + n, e < 0) return {
										row: r,
										column: e + i[r].length + n
									};
								return {
									row: o - 1,
									column: i[o - 1].length
								}
							}, this.positionToIndex = function(e, t) {
								for (var i = this.$lines || this.getAllLines(), n = this
										.getNewLineCharacter().length, r = 0, o = Math.min(e
											.row, i.length), s = t || 0; s < o; ++s) r += i[s]
									.length + n;
								return r + e.column
							}
					}).call(l.prototype), t.Document = l
				})), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/event_emitter").EventEmitter,
						o = function(e, t) {
							this.running = !1, this.lines = [], this.states = [], this.currentLine =
								0, this.tokenizer = e;
							var i = this;
							this.$worker = function() {
								if (i.running) {
									var e = new Date,
										t = i.currentLine,
										n = -1,
										r = i.doc,
										o = t;
									while (i.lines[t]) t++;
									var s = r.getLength(),
										a = 0;
									i.running = !1;
									while (t < s) {
										i.$tokenizeRow(t), n = t;
										do {
											t++
										} while (i.lines[t]);
										if (a++, a % 5 === 0 && new Date - e > 20) {
											i.running = setTimeout(i.$worker, 20);
											break
										}
									}
									i.currentLine = t, -1 == n && (n = t), o <= n && i
										.fireUpdateEvent(o, n)
								}
							}
						};
					(function() {
						n.implement(this, r), this.setTokenizer = function(e) {
							this.tokenizer = e, this.lines = [], this.states = [], this
								.start(0)
						}, this.setDocument = function(e) {
							this.doc = e, this.lines = [], this.states = [], this.stop()
						}, this.fireUpdateEvent = function(e, t) {
							var i = {
								first: e,
								last: t
							};
							this._signal("update", {
								data: i
							})
						}, this.start = function(e) {
							this.currentLine = Math.min(e || 0, this.currentLine, this.doc
									.getLength()), this.lines.splice(this.currentLine, this
									.lines.length), this.states.splice(this.currentLine,
									this.states.length), this.stop(), this.running =
								setTimeout(this.$worker, 700)
						}, this.scheduleStart = function() {
							this.running || (this.running = setTimeout(this.$worker, 700))
						}, this.$updateOnChange = function(e) {
							var t = e.start.row,
								i = e.end.row - t;
							if (0 === i) this.lines[t] = null;
							else if ("remove" == e.action) this.lines.splice(t, i + 1,
								null), this.states.splice(t, i + 1, null);
							else {
								var n = Array(i + 1);
								n.unshift(t, 1), this.lines.splice.apply(this.lines, n),
									this.states.splice.apply(this.states, n)
							}
							this.currentLine = Math.min(t, this.currentLine, this.doc
								.getLength()), this.stop()
						}, this.stop = function() {
							this.running && clearTimeout(this.running), this.running = !1
						}, this.getTokens = function(e) {
							return this.lines[e] || this.$tokenizeRow(e)
						}, this.getState = function(e) {
							return this.currentLine == e && this.$tokenizeRow(e), this
								.states[e] || "start"
						}, this.$tokenizeRow = function(e) {
							var t = this.doc.getLine(e),
								i = this.states[e - 1],
								n = this.tokenizer.getLineTokens(t, i, e);
							return this.states[e] + "" !== n.state + "" ? (this.states[e] =
									n.state, this.lines[e + 1] = null, this.currentLine >
									e + 1 && (this.currentLine = e + 1)) : this
								.currentLine == e && (this.currentLine = e + 1), this.lines[
									e] = n.tokens
						}
					}).call(o.prototype), t.BackgroundTokenizer = o
				})), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang",
					"ace/lib/oop", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/lang"),
						r = (e("./lib/oop"), e("./range").Range),
						o = function(e, t, i) {
							this.setRegexp(e), this.clazz = t, this.type = i || "text"
						};
					(function() {
						this.MAX_RANGES = 500, this.setRegexp = function(e) {
							this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
						}, this.update = function(e, t, i, o) {
							if (this.regExp)
								for (var s = o.firstRow, a = o.lastRow, l = s; l <=
									a; l++) {
									var c = this.cache[l];
									null == c && (c = n.getMatchOffsets(i.getLine(l), this
										.regExp), c.length > this.MAX_RANGES && (c =
										c.slice(0, this.MAX_RANGES)), c = c.map((
										function(e) {
											return new r(l, e.offset, l, e
												.offset + e.length)
										})), this.cache[l] = c.length ? c : "");
									for (var h = c.length; h--;) t.drawSingleLineMarker(e,
										c[h].toScreenRange(i), this.clazz, o)
								}
						}
					}).call(o.prototype), t.SearchHighlight = o
				})), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"],
					(function(e, t, i) {
						"use strict";
						var n = e("../range").Range;

						function r(e, t) {
							this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
							var i = t[t.length - 1];
							this.range = new n(t[0].start.row, t[0].start.column, i.end.row, i.end
									.column), this.start = this.range.start, this.end = this.range.end,
								this.folds.forEach((function(e) {
									e.setFoldLine(this)
								}), this)
						}(function() {
							this.shiftRow = function(e) {
								this.start.row += e, this.end.row += e, this.folds.forEach((
									function(t) {
										t.start.row += e, t.end.row += e
									}))
							}, this.addFold = function(e) {
								if (e.sameRow) {
									if (e.start.row < this.startRow || e.endRow > this.endRow)
										throw new Error(
											"Can't add a fold to this FoldLine as it has no connection"
											);
									this.folds.push(e), this.folds.sort((function(e, t) {
											return -e.range.compareEnd(t.start.row, t
												.start.column)
										})), this.range.compareEnd(e.start.row, e.start
										.column) > 0 ? (this.end.row = e.end.row, this.end
											.column = e.end.column) : this.range.compareStart(e
											.end.row, e.end.column) < 0 && (this.start.row = e
											.start.row, this.start.column = e.start.column)
								} else if (e.start.row == this.end.row) this.folds.push(e), this
									.end.row = e.end.row, this.end.column = e.end.column;
								else {
									if (e.end.row != this.start.row) throw new Error(
										"Trying to add fold to FoldRow that doesn't have a matching row"
										);
									this.folds.unshift(e), this.start.row = e.start.row, this
										.start.column = e.start.column
								}
								e.foldLine = this
							}, this.containsRow = function(e) {
								return e >= this.start.row && e <= this.end.row
							}, this.walk = function(e, t, i) {
								var n, r, o, s = 0,
									a = this.folds,
									l = !0;
								null == t && (t = this.end.row, i = this.end.column);
								for (var c = 0; c < a.length; c++) {
									if (n = a[c], r = n.range.compareStart(t, i), -1 == r)
										return void e(null, t, i, s, l);
									if (o = e(null, n.start.row, n.start.column, s, l), o = !
										o && e(n.placeholder, n.start.row, n.start.column, s),
										o || 0 === r) return;
									l = !n.sameRow, s = n.end.column
								}
								e(null, t, i, s, l)
							}, this.getNextFoldTo = function(e, t) {
								for (var i, n, r = 0; r < this.folds.length; r++) {
									if (i = this.folds[r], n = i.range.compareEnd(e, t), -1 ==
										n) return {
										fold: i,
										kind: "after"
									};
									if (0 === n) return {
										fold: i,
										kind: "inside"
									}
								}
								return null
							}, this.addRemoveChars = function(e, t, i) {
								var n, r, o = this.getNextFoldTo(e, t);
								if (o)
									if (n = o.fold, "inside" == o.kind && n.start.column != t &&
										n.start.row != e) window.console && window.console.log(
										e, t, n);
									else if (n.start.row == e) {
									r = this.folds;
									var s = r.indexOf(n);
									for (0 === s && (this.start.column += i), s; s < r
										.length; s++) {
										if (n = r[s], n.start.column += i, !n.sameRow) return;
										n.end.column += i
									}
									this.end.column += i
								}
							}, this.split = function(e, t) {
								var i = this.getNextFoldTo(e, t);
								if (!i || "inside" == i.kind) return null;
								var n = i.fold,
									o = this.folds,
									s = this.foldData,
									a = o.indexOf(n),
									l = o[a - 1];
								this.end.row = l.end.row, this.end.column = l.end.column, o = o
									.splice(a, o.length - a);
								var c = new r(s, o);
								return s.splice(s.indexOf(this) + 1, 0, c), c
							}, this.merge = function(e) {
								for (var t = e.folds, i = 0; i < t.length; i++) this.addFold(t[
									i]);
								var n = this.foldData;
								n.splice(n.indexOf(e), 1)
							}, this.toString = function() {
								var e = [this.range.toString() + ": ["];
								return this.folds.forEach((function(t) {
									e.push("  " + t.toString())
								})), e.push("]"), e.join("\n")
							}, this.idxToPosition = function(e) {
								for (var t = 0, i = 0; i < this.folds.length; i++) {
									var n = this.folds[i];
									if (e -= n.start.column - t, e < 0) return {
										row: n.start.row,
										column: n.start.column + e
									};
									if (e -= n.placeholder.length, e < 0) return n.start;
									t = n.end.column
								}
								return {
									row: this.end.row,
									column: this.end.column + e
								}
							}
						}).call(r.prototype), t.FoldLine = r
					})), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], (
					function(e, t, i) {
						"use strict";
						var n = e("./range").Range,
							r = n.comparePoints,
							o = function() {
								this.ranges = []
							};
						(function() {
							this.comparePoints = r, this.pointIndex = function(e, t, i) {
								for (var n = this.ranges, o = i || 0; o < n.length; o++) {
									var s = n[o],
										a = r(e, s.end);
									if (!(a > 0)) {
										var l = r(e, s.start);
										return 0 === a ? t && 0 !== l ? -o - 2 : o : l > 0 ||
											0 === l && !t ? o : -o - 1
									}
								}
								return -o - 1
							}, this.add = function(e) {
								var t = !e.isEmpty(),
									i = this.pointIndex(e.start, t);
								i < 0 && (i = -i - 1);
								var n = this.pointIndex(e.end, t, i);
								return n < 0 ? n = -n - 1 : n++, this.ranges.splice(i, n - i, e)
							}, this.addList = function(e) {
								for (var t = [], i = e.length; i--;) t.push.apply(t, this.add(e[
									i]));
								return t
							}, this.substractPoint = function(e) {
								var t = this.pointIndex(e);
								if (t >= 0) return this.ranges.splice(t, 1)
							}, this.merge = function() {
								var e = [],
									t = this.ranges;
								t = t.sort((function(e, t) {
									return r(e.start, t.start)
								}));
								for (var i, n = t[0], o = 1; o < t.length; o++) {
									i = n, n = t[o];
									var s = r(i.end, n.start);
									s < 0 || (0 != s || i.isEmpty() || n.isEmpty()) && (r(i.end,
										n.end) < 0 && (i.end.row = n.end.row, i.end
										.column = n.end.column), t.splice(o, 1), e.push(
										n), n = i, o--)
								}
								return this.ranges = t, e
							}, this.contains = function(e, t) {
								return this.pointIndex({
									row: e,
									column: t
								}) >= 0
							}, this.containsPoint = function(e) {
								return this.pointIndex(e) >= 0
							}, this.rangeAtPoint = function(e) {
								var t = this.pointIndex(e);
								if (t >= 0) return this.ranges[t]
							}, this.clipRows = function(e, t) {
								var i = this.ranges;
								if (i[0].start.row > t || i[i.length - 1].start.row < e)
								return [];
								var n = this.pointIndex({
									row: e,
									column: 0
								});
								n < 0 && (n = -n - 1);
								var r = this.pointIndex({
									row: t,
									column: 0
								}, n);
								r < 0 && (r = -r - 1);
								for (var o = [], s = n; s < r; s++) o.push(i[s]);
								return o
							}, this.removeAll = function() {
								return this.ranges.splice(0, this.ranges.length)
							}, this.attach = function(e) {
								this.session && this.detach(), this.session = e, this.onChange =
									this.$onChange.bind(this), this.session.on("change", this
										.onChange)
							}, this.detach = function() {
								this.session && (this.session.removeListener("change", this
									.onChange), this.session = null)
							}, this.$onChange = function(e) {
								if ("insert" == e.action) var t = e.start,
									i = e.end;
								else i = e.start, t = e.end;
								for (var n = t.row, r = i.row, o = r - n, s = -t.column + i
										.column, a = this.ranges, l = 0, c = a.length; l <
									c; l++) {
									var h = a[l];
									if (!(h.end.row < n)) {
										if (h.start.row > n) break;
										if (h.start.row == n && h.start.column >= t.column && (h
												.start.column == t.column && this
												.$insertRight || (h.start.column += s, h.start
													.row += o)), h.end.row == n && h.end
											.column >= t.column) {
											if (h.end.column == t.column && this.$insertRight)
												continue;
											h.end.column == t.column && s > 0 && l < c - 1 && h
												.end.column > h.start.column && h.end.column ==
												a[l + 1].start.column && (h.end.column -= s), h
												.end.column += s, h.end.row += o
										}
									}
								}
								if (0 != o && l < c)
									for (; l < c; l++) {
										h = a[l];
										h.start.row += o, h.end.row += o
									}
							}
						}).call(o.prototype), t.RangeList = o
					})), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range",
					"ace/range_list", "ace/lib/oop"
				], (function(e, t, i) {
					"use strict";
					e("../range").Range;
					var n = e("../range_list").RangeList,
						r = e("../lib/oop"),
						o = t.Fold = function(e, t) {
							this.foldLine = null, this.placeholder = t, this.range = e, this.start =
								e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row,
								this.subFolds = this.ranges = []
						};

					function s(e, t) {
						e.row -= t.row, 0 == e.row && (e.column -= t.column)
					}

					function a(e, t) {
						s(e.start, t), s(e.end, t)
					}

					function l(e, t) {
						0 == e.row && (e.column += t.column), e.row += t.row
					}

					function c(e, t) {
						l(e.start, t), l(e.end, t)
					}
					r.inherits(o, n),
						function() {
							this.toString = function() {
								return '"' + this.placeholder + '" ' + this.range.toString()
							}, this.setFoldLine = function(e) {
								this.foldLine = e, this.subFolds.forEach((function(t) {
									t.setFoldLine(e)
								}))
							}, this.clone = function() {
								var e = this.range.clone(),
									t = new o(e, this.placeholder);
								return this.subFolds.forEach((function(e) {
									t.subFolds.push(e.clone())
								})), t.collapseChildren = this.collapseChildren, t
							}, this.addSubFold = function(e) {
								if (!this.range.isEqual(e)) {
									if (!this.range.containsRange(e)) throw new Error(
										"A fold can't intersect already existing fold" +
										e.range + this.range);
									a(e, this.start);
									for (var t = e.start.row, i = e.start.column, n = 0, r = -
										1; n < this.subFolds.length; n++)
										if (r = this.subFolds[n].range.compare(t, i), 1 != r)
											break;
									var o = this.subFolds[n];
									if (0 == r) return o.addSubFold(e);
									t = e.range.end.row, i = e.range.end.column;
									var s = n;
									for (r = -1; s < this.subFolds.length; s++)
										if (r = this.subFolds[s].range.compare(t, i), 1 != r)
											break;
									this.subFolds[s];
									if (0 == r) throw new Error(
										"A fold can't intersect already existing fold" +
										e.range + this.range);
									this.subFolds.splice(n, s - n, e);
									return e.setFoldLine(this.foldLine), e
								}
							}, this.restoreRange = function(e) {
								return c(e, this.start)
							}
						}.call(o.prototype)
				})), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range",
					"ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"
				], (function(e, t, i) {
					"use strict";
					var n = e("../range").Range,
						r = e("./fold_line").FoldLine,
						o = e("./fold").Fold,
						s = e("../token_iterator").TokenIterator;

					function a() {
						this.getFoldAt = function(e, t, i) {
							var n = this.getFoldLine(e);
							if (!n) return null;
							for (var r = n.folds, o = 0; o < r.length; o++) {
								var s = r[o];
								if (s.range.contains(e, t)) {
									if (1 == i && s.range.isEnd(e, t)) continue;
									if (-1 == i && s.range.isStart(e, t)) continue;
									return s
								}
							}
						}, this.getFoldsInRange = function(e) {
							var t = e.start,
								i = e.end,
								n = this.$foldData,
								r = [];
							t.column += 1, i.column -= 1;
							for (var o = 0; o < n.length; o++) {
								var s = n[o].range.compareRange(e);
								if (2 != s) {
									if (-2 == s) break;
									for (var a = n[o].folds, l = 0; l < a.length; l++) {
										var c = a[l];
										if (s = c.range.compareRange(e), -2 == s) break;
										if (2 != s) {
											if (42 == s) break;
											r.push(c)
										}
									}
								}
							}
							return t.column -= 1, i.column += 1, r
						}, this.getFoldsInRangeList = function(e) {
							if (Array.isArray(e)) {
								var t = [];
								e.forEach((function(e) {
									t = t.concat(this.getFoldsInRange(e))
								}), this)
							} else t = this.getFoldsInRange(e);
							return t
						}, this.getAllFolds = function() {
							for (var e = [], t = this.$foldData, i = 0; i < t.length; i++)
								for (var n = 0; n < t[i].folds.length; n++) e.push(t[i].folds[
									n]);
							return e
						}, this.getFoldStringAt = function(e, t, i, n) {
							if (n = n || this.getFoldLine(e), !n) return null;
							for (var r, o, s = {
									end: {
										column: 0
									}
								}, a = 0; a < n.folds.length; a++) {
								o = n.folds[a];
								var l = o.range.compareEnd(e, t);
								if (-1 == l) {
									r = this.getLine(o.start.row).substring(s.end.column, o
										.start.column);
									break
								}
								if (0 === l) return null;
								s = o
							}
							return r || (r = this.getLine(o.start.row).substring(s.end.column)),
								-1 == i ? r.substring(0, t - s.end.column) : 1 == i ? r
								.substring(t - s.end.column) : r
						}, this.getFoldLine = function(e, t) {
							var i = this.$foldData,
								n = 0;
							for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i
								.length; n++) {
								var r = i[n];
								if (r.start.row <= e && r.end.row >= e) return r;
								if (r.end.row > e) return null
							}
							return null
						}, this.getNextFoldLine = function(e, t) {
							var i = this.$foldData,
								n = 0;
							for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i
								.length; n++) {
								var r = i[n];
								if (r.end.row >= e) return r
							}
							return null
						}, this.getFoldedRowCount = function(e, t) {
							for (var i = this.$foldData, n = t - e + 1, r = 0; r < i
								.length; r++) {
								var o = i[r],
									s = o.end.row,
									a = o.start.row;
								if (s >= t) {
									a < t && (a >= e ? n -= t - a : n = 0);
									break
								}
								s >= e && (n -= a >= e ? s - a : s - e + 1)
							}
							return n
						}, this.$addFoldLine = function(e) {
							return this.$foldData.push(e), this.$foldData.sort((function(e, t) {
								return e.start.row - t.start.row
							})), e
						}, this.addFold = function(e, t) {
							var i, n = this.$foldData,
								s = !1;
							e instanceof o ? i = e : (i = new o(t, e), i.collapseChildren = t
								.collapseChildren), this.$clipRangeToDocument(i.range);
							var a = i.start.row,
								l = i.start.column,
								c = i.end.row,
								h = i.end.column;
							if (!(a < c || a == c && l <= h - 2)) throw new Error(
								"The range has to be at least 2 characters width");
							var u = this.getFoldAt(a, l, 1),
								d = this.getFoldAt(c, h, -1);
							if (u && d == u) return u.addSubFold(i);
							u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range
								.isEnd(c, h) && this.removeFold(d);
							var g = this.getFoldsInRange(i.range);
							g.length > 0 && (this.removeFolds(g), g.forEach((function(e) {
								i.addSubFold(e)
							})));
							for (var f = 0; f < n.length; f++) {
								var p = n[f];
								if (c == p.start.row) {
									p.addFold(i), s = !0;
									break
								}
								if (a == p.end.row) {
									if (p.addFold(i), s = !0, !i.sameRow) {
										var m = n[f + 1];
										if (m && m.start.row == c) {
											p.merge(m);
											break
										}
									}
									break
								}
								if (c <= p.start.row) break
							}
							return s || (p = this.$addFoldLine(new r(this.$foldData, i))), this
								.$useWrapMode ? this.$updateWrapData(p.start.row, p.start.row) :
								this.$updateRowLengthCache(p.start.row, p.start.row), this
								.$modified = !0, this._signal("changeFold", {
									data: i,
									action: "add"
								}), i
						}, this.addFolds = function(e) {
							e.forEach((function(e) {
								this.addFold(e)
							}), this)
						}, this.removeFold = function(e) {
							var t = e.foldLine,
								i = t.start.row,
								n = t.end.row,
								r = this.$foldData,
								o = t.folds;
							if (1 == o.length) r.splice(r.indexOf(t), 1);
							else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end
								.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1]
								.end.column;
							else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t
								.start.row = o[0].start.row, t.start.column = o[0].start.column;
							else if (e.sameRow) o.splice(o.indexOf(e), 1);
							else {
								var s = t.split(e.start.row, e.start.column);
								o = s.folds, o.shift(), s.start.row = o[0].start.row, s.start
									.column = o[0].start.column
							}
							this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) :
									this.$updateRowLengthCache(i, n)), this.$modified = !0, this
								._signal("changeFold", {
									data: e,
									action: "remove"
								})
						}, this.removeFolds = function(e) {
							for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
							t.forEach((function(e) {
								this.removeFold(e)
							}), this), this.$modified = !0
						}, this.expandFold = function(e) {
							this.removeFold(e), e.subFolds.forEach((function(t) {
								e.restoreRange(t), this.addFold(t)
							}), this), e.collapseChildren > 0 && this.foldAll(e.start.row +
								1, e.end.row, e.collapseChildren - 1), e.subFolds = []
						}, this.expandFolds = function(e) {
							e.forEach((function(e) {
								this.expandFold(e)
							}), this)
						}, this.unfold = function(e, t) {
							var i, r;
							if (null == e ? (i = new n(0, 0, this.getLength(), 0), t = !0) : i =
								"number" == typeof e ? new n(e, 0, e, this.getLine(e).length) :
								"row" in e ? n.fromPoints(e, e) : e, r = this
								.getFoldsInRangeList(i), t) this.removeFolds(r);
							else {
								var o = r;
								while (o.length) this.expandFolds(o), o = this
									.getFoldsInRangeList(i)
							}
							if (r.length) return r
						}, this.isRowFolded = function(e, t) {
							return !!this.getFoldLine(e, t)
						}, this.getRowFoldEnd = function(e, t) {
							var i = this.getFoldLine(e, t);
							return i ? i.end.row : e
						}, this.getRowFoldStart = function(e, t) {
							var i = this.getFoldLine(e, t);
							return i ? i.start.row : e
						}, this.getFoldDisplayLine = function(e, t, i, n, r) {
							null == n && (n = e.start.row), null == r && (r = 0), null == t && (
								t = e.end.row), null == i && (i = this.getLine(t).length);
							var o = this.doc,
								s = "";
							return e.walk((function(e, t, i, a) {
								if (!(t < n)) {
									if (t == n) {
										if (i < r) return;
										a = Math.max(r, a)
									}
									s += null != e ? e : o.getLine(t).substring(a,
										i)
								}
							}), t, i), s
						}, this.getDisplayLine = function(e, t, i, n) {
							var r, o = this.getFoldLine(e);
							return o ? this.getFoldDisplayLine(o, e, t, i, n) : (r = this.doc
								.getLine(e), r.substring(n || 0, t || r.length))
						}, this.$cloneFoldData = function() {
							var e = [];
							return e = this.$foldData.map((function(t) {
								var i = t.folds.map((function(e) {
									return e.clone()
								}));
								return new r(e, i)
							})), e
						}, this.toggleFold = function(e) {
							var t, i, n = this.selection,
								r = n.getRange();
							if (r.isEmpty()) {
								var o = r.start;
								if (t = this.getFoldAt(o.row, o.column), t) return void this
									.expandFold(t);
								(i = this.findMatchingBracket(o)) ? 1 == r.comparePoint(i) ? r
									.end = i : (r.start = i, r.start.column++, r.end.column--):
									(i = this.findMatchingBracket({
										row: o.row,
										column: o.column + 1
									})) ? (1 == r.comparePoint(i) ? r.end = i : r.start = i, r
										.start.column++) : r = this.getCommentFoldRange(o.row, o
										.column) || r
							} else {
								var s = this.getFoldsInRange(r);
								if (e && s.length) return void this.expandFolds(s);
								1 == s.length && (t = s[0])
							}
							if (t || (t = this.getFoldAt(r.start.row, r.start.column)), t && t
								.range.toString() == r.toString()) this.expandFold(t);
							else {
								var a = "...";
								if (!r.isMultiLine()) {
									if (a = this.getTextRange(r), a.length < 4) return;
									a = a.trim().substring(0, 2) + ".."
								}
								this.addFold(a, r)
							}
						}, this.getCommentFoldRange = function(e, t, i) {
							var r = new s(this, e, t),
								o = r.getCurrentToken(),
								a = o.type;
							if (o && /^comment|string/.test(a)) {
								a = a.match(/comment|string/)[0], "comment" == a && (a +=
									"|doc-start");
								var l = new RegExp(a),
									c = new n;
								if (1 != i) {
									do {
										o = r.stepBackward()
									} while (o && l.test(o.type));
									r.stepForward()
								}
								if (c.start.row = r.getCurrentTokenRow(), c.start.column = r
									.getCurrentTokenColumn() + 2, r = new s(this, e, t), -1 != i
									) {
									var h = -1;
									do {
										if (o = r.stepForward(), -1 == h) {
											var u = this.getState(r.$row);
											l.test(u) || (h = r.$row)
										} else if (r.$row > h) break
									} while (o && l.test(o.type));
									o = r.stepBackward()
								} else o = r.getCurrentToken();
								return c.end.row = r.getCurrentTokenRow(), c.end.column = r
									.getCurrentTokenColumn() + o.value.length - 2, c
							}
						}, this.foldAll = function(e, t, i) {
							void 0 == i && (i = 1e5);
							var n = this.foldWidgets;
							if (n) {
								t = t || this.getLength(), e = e || 0;
								for (var r = e; r < t; r++)
									if (null == n[r] && (n[r] = this.getFoldWidget(r)),
										"start" == n[r]) {
										var o = this.getFoldWidgetRange(r);
										if (o && o.isMultiLine() && o.end.row <= t && o.start
											.row >= e) {
											r = o.end.row;
											try {
												var s = this.addFold("...", o);
												s && (s.collapseChildren = i)
											} catch (a) {}
										}
									}
							}
						}, this.$foldStyles = {
							manual: 1,
							markbegin: 1,
							markbeginend: 1
						}, this.$foldStyle = "markbegin", this.setFoldStyle = function(e) {
							if (!this.$foldStyles[e]) throw new Error("invalid fold style: " +
								e + "[" + Object.keys(this.$foldStyles).join(", ") + "]"
								);
							if (this.$foldStyle != e) {
								this.$foldStyle = e, "manual" == e && this.unfold();
								var t = this.$foldMode;
								this.$setFolding(null), this.$setFolding(t)
							}
						}, this.$setFolding = function(e) {
							this.$foldMode != e && (this.$foldMode = e, this.off("change", this
									.$updateFoldWidgets), this.off("tokenizerUpdate", this
									.$tokenizerUpdateFoldWidgets), this._signal(
									"changeAnnotation"), e && "manual" != this.$foldStyle ?
								(this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget
									.bind(e, this, this.$foldStyle), this
									.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this,
										this.$foldStyle), this.$updateFoldWidgets = this
									.updateFoldWidgets.bind(this), this
									.$tokenizerUpdateFoldWidgets = this
									.tokenizerUpdateFoldWidgets.bind(this), this.on(
										"change", this.$updateFoldWidgets), this.on(
										"tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)
									) : this.foldWidgets = null)
						}, this.getParentFoldRangeData = function(e, t) {
							var i = this.foldWidgets;
							if (!i || t && i[e]) return {};
							var n, r = e - 1;
							while (r >= 0) {
								var o = i[r];
								if (null == o && (o = i[r] = this.getFoldWidget(r)), "start" ==
									o) {
									var s = this.getFoldWidgetRange(r);
									if (n || (n = s), s && s.end.row >= e) break
								}
								r--
							}
							return {
								range: -1 !== r && s,
								firstRange: n
							}
						}, this.onFoldWidgetClick = function(e, t) {
							t = t.domEvent;
							var i = {
									children: t.shiftKey,
									all: t.ctrlKey || t.metaKey,
									siblings: t.altKey
								},
								n = this.$toggleFoldWidget(e, i);
							if (!n) {
								var r = t.target || t.srcElement;
								r && /ace_fold-widget/.test(r.className) && (r.className +=
									" ace_invalid")
							}
						}, this.$toggleFoldWidget = function(e, t) {
							if (this.getFoldWidget) {
								var i = this.getFoldWidget(e),
									n = this.getLine(e),
									r = "end" === i ? -1 : 1,
									o = this.getFoldAt(e, -1 === r ? 0 : n.length, r);
								if (o) return t.children || t.all ? this.removeFold(o) : this
									.expandFold(o), o;
								var s = this.getFoldWidgetRange(e, !0);
								if (s && !s.isMultiLine() && (o = this.getFoldAt(s.start.row, s
										.start.column, 1), o && s.isEqual(o.range))) return this
									.removeFold(o), o;
								if (t.siblings) {
									var a = this.getParentFoldRangeData(e);
									if (a.range) var l = a.range.start.row + 1,
										c = a.range.end.row;
									this.foldAll(l, c, t.all ? 1e4 : 0)
								} else t.children ? (c = s ? s.end.row : this.getLength(), this
									.foldAll(e + 1, c, t.all ? 1e4 : 0)) : s && (t.all && (s
									.collapseChildren = 1e4), this.addFold("...", s));
								return s
							}
						}, this.toggleFoldWidget = function(e) {
							var t = this.selection.getCursor().row;
							t = this.getRowFoldStart(t);
							var i = this.$toggleFoldWidget(t, {});
							if (!i) {
								var n = this.getParentFoldRangeData(t, !0);
								if (i = n.range || n.firstRange, i) {
									t = i.start.row;
									var r = this.getFoldAt(t, this.getLine(t).length, 1);
									r ? this.removeFold(r) : this.addFold("...", i)
								}
							}
						}, this.updateFoldWidgets = function(e) {
							var t = e.start.row,
								i = e.end.row - t;
							if (0 === i) this.foldWidgets[t] = null;
							else if ("remove" == e.action) this.foldWidgets.splice(t, i + 1,
								null);
							else {
								var n = Array(i + 1);
								n.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets,
									n)
							}
						}, this.tokenizerUpdateFoldWidgets = function(e) {
							var t = e.data;
							t.first != t.last && this.foldWidgets.length > t.first && this
								.foldWidgets.splice(t.first, this.foldWidgets.length)
						}
					}
					t.Folding = a
				})), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module",
					"ace/token_iterator", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("../token_iterator").TokenIterator,
						r = e("../range").Range;

					function o() {
						this.findMatchingBracket = function(e, t) {
							if (0 == e.column) return null;
							var i = t || this.getLine(e.row).charAt(e.column - 1);
							if ("" == i) return null;
							var n = i.match(/([\(\[\{])|([\)\]\}])/);
							return n ? n[1] ? this.$findClosingBracket(n[1], e) : this
								.$findOpeningBracket(n[2], e) : null
						}, this.getBracketRange = function(e) {
							var t, i = this.getLine(e.row),
								n = !0,
								o = i.charAt(e.column - 1),
								s = o && o.match(/([\(\[\{])|([\)\]\}])/);
							if (s || (o = i.charAt(e.column), e = {
									row: e.row,
									column: e.column + 1
								}, s = o && o.match(/([\(\[\{])|([\)\]\}])/), n = !1), !s)
								return null;
							if (s[1]) {
								var a = this.$findClosingBracket(s[1], e);
								if (!a) return null;
								t = r.fromPoints(e, a), n || (t.end.column++, t.start.column--),
									t.cursor = t.end
							} else {
								a = this.$findOpeningBracket(s[2], e);
								if (!a) return null;
								t = r.fromPoints(a, e), n || (t.start.column++, t.end.column--),
									t.cursor = t.start
							}
							return t
						}, this.$brackets = {
							")": "(",
							"(": ")",
							"]": "[",
							"[": "]",
							"{": "}",
							"}": "{"
						}, this.$findOpeningBracket = function(e, t, i) {
							var r = this.$brackets[e],
								o = 1,
								s = new n(this, t.row, t.column),
								a = s.getCurrentToken();
							if (a || (a = s.stepForward()), a) {
								i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.")
									.replace("rparen", ".paren").replace(/\b(?:end)\b/,
										"(?:start|begin|end)") + ")+"));
								var l = t.column - s.getCurrentTokenColumn() - 2,
									c = a.value;
								while (1) {
									while (l >= 0) {
										var h = c.charAt(l);
										if (h == r) {
											if (o -= 1, 0 == o) return {
												row: s.getCurrentTokenRow(),
												column: l + s.getCurrentTokenColumn()
											}
										} else h == e && (o += 1);
										l -= 1
									}
									do {
										a = s.stepBackward()
									} while (a && !i.test(a.type));
									if (null == a) break;
									c = a.value, l = c.length - 1
								}
								return null
							}
						}, this.$findClosingBracket = function(e, t, i) {
							var r = this.$brackets[e],
								o = 1,
								s = new n(this, t.row, t.column),
								a = s.getCurrentToken();
							if (a || (a = s.stepForward()), a) {
								i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.")
									.replace("lparen", ".paren").replace(
										/\b(?:start|begin)\b/, "(?:start|begin|end)") +
									")+"));
								var l = t.column - s.getCurrentTokenColumn();
								while (1) {
									var c = a.value,
										h = c.length;
									while (l < h) {
										var u = c.charAt(l);
										if (u == r) {
											if (o -= 1, 0 == o) return {
												row: s.getCurrentTokenRow(),
												column: l + s.getCurrentTokenColumn()
											}
										} else u == e && (o += 1);
										l += 1
									}
									do {
										a = s.stepForward()
									} while (a && !i.test(a.type));
									if (null == a) break;
									l = 0
								}
								return null
							}
						}
					}
					t.BracketMatch = o
				})), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter",
					"ace/selection", "ace/mode/text", "ace/range", "ace/document",
					"ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding",
					"ace/edit_session/bracket_match"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/lang"),
						o = e("./bidihandler").BidiHandler,
						s = e("./config"),
						a = e("./lib/event_emitter").EventEmitter,
						l = e("./selection").Selection,
						c = e("./mode/text").Mode,
						h = e("./range").Range,
						u = e("./document").Document,
						d = e("./background_tokenizer").BackgroundTokenizer,
						g = e("./search_highlight").SearchHighlight,
						f = function(e, t) {
							this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {},
								this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0,
								this.$foldData = [], this.id = "session" + ++f.$uid, this.$foldData
								.toString = function() {
									return this.join("\n")
								}, this.on("changeFold", this.onChangeFold.bind(this)), this
								.$onChange = this.onChange.bind(this), "object" == typeof e && e
								.getLine || (e = new u(e)), this.$bidiHandler = new o(this), this
								.setDocument(e), this.selection = new l(this), s.resetOptions(this),
								this.setMode(t), s._signal("session", this)
						};
					f.$uid = 0,
						function() {
							n.implement(this, a), this.setDocument = function(e) {
									this.doc && this.doc.removeListener("change", this.$onChange),
										this.doc = e, e.on("change", this.$onChange), this
										.bgTokenizer && this.bgTokenizer.setDocument(this
											.getDocument()), this.resetCaches()
								}, this.getDocument = function() {
									return this.doc
								}, this.$resetRowCache = function(e) {
									if (!e) return this.$docRowCache = [], void(this
										.$screenRowCache = []);
									var t = this.$docRowCache.length,
										i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
									t > i && (this.$docRowCache.splice(i, t), this.$screenRowCache
										.splice(i, t))
								}, this.$getRowCacheIndex = function(e, t) {
									var i = 0,
										n = e.length - 1;
									while (i <= n) {
										var r = i + n >> 1,
											o = e[r];
										if (t > o) i = r + 1;
										else {
											if (!(t < o)) return r;
											n = r - 1
										}
									}
									return i - 1
								}, this.resetCaches = function() {
									this.$modified = !0, this.$wrapData = [], this
										.$rowLengthCache = [], this.$resetRowCache(0), this
										.bgTokenizer && this.bgTokenizer.start(0)
								}, this.onChangeFold = function(e) {
									var t = e.data;
									this.$resetRowCache(t.start.row)
								}, this.onChange = function(e) {
									this.$modified = !0, this.$bidiHandler.onChange(e), this
										.$resetRowCache(e.start.row);
									var t = this.$updateInternalDataOnChange(e);
									this.$fromUndo || !this.$undoManager || e.ignore || (this
											.$deltasDoc.push(e), t && 0 != t.length && this
											.$deltasFold.push({
												action: "removeFolds",
												folds: t
											}), this.$informUndoManager.schedule()), this
										.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this
										._signal("change", e)
								}, this.setValue = function(e) {
									this.doc.setValue(e), this.selection.moveTo(0, 0), this
										.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [],
										this.$deltasFold = [], this.setUndoManager(this
											.$undoManager), this.getUndoManager().reset()
								}, this.getValue = this.toString = function() {
									return this.doc.getValue()
								}, this.getSelection = function() {
									return this.selection
								}, this.getState = function(e) {
									return this.bgTokenizer.getState(e)
								}, this.getTokens = function(e) {
									return this.bgTokenizer.getTokens(e)
								}, this.getTokenAt = function(e, t) {
									var i, n = this.bgTokenizer.getTokens(e),
										r = 0;
									if (null == t) {
										var o = n.length - 1;
										r = this.getLine(e).length
									} else
										for (o = 0; o < n.length; o++)
											if (r += n[o].value.length, r >= t) break;
									return i = n[o], i ? (i.index = o, i.start = r - i.value.length,
										i) : null
								}, this.setUndoManager = function(e) {
									if (this.$undoManager = e, this.$deltas = [], this
										.$deltasDoc = [], this.$deltasFold = [], this
										.$informUndoManager && this.$informUndoManager.cancel(), e
										) {
										var t = this;
										this.$syncInformUndoManager = function() {
											t.$informUndoManager.cancel(), t.$deltasFold
												.length && (t.$deltas.push({
													group: "fold",
													deltas: t.$deltasFold
												}), t.$deltasFold = []), t.$deltasDoc.length &&
												(t.$deltas.push({
													group: "doc",
													deltas: t.$deltasDoc
												}), t.$deltasDoc = []), t.$deltas.length > 0 &&
												e.execute({
													action: "aceupdate",
													args: [t.$deltas, t],
													merge: t.mergeUndoDeltas
												}), t.mergeUndoDeltas = !1, t.$deltas = []
										}, this.$informUndoManager = r.delayedCall(this
											.$syncInformUndoManager)
									}
								}, this.markUndoGroup = function() {
									this.$syncInformUndoManager && this.$syncInformUndoManager()
								}, this.$defaultUndoManager = {
									undo: function() {},
									redo: function() {},
									reset: function() {}
								}, this.getUndoManager = function() {
									return this.$undoManager || this.$defaultUndoManager
								}, this.getTabString = function() {
									return this.getUseSoftTabs() ? r.stringRepeat(" ", this
										.getTabSize()) : "\t"
								}, this.setUseSoftTabs = function(e) {
									this.setOption("useSoftTabs", e)
								}, this.getUseSoftTabs = function() {
									return this.$useSoftTabs && !this.$mode.$indentWithTabs
								}, this.setTabSize = function(e) {
									this.setOption("tabSize", e)
								}, this.getTabSize = function() {
									return this.$tabSize
								}, this.isTabStop = function(e) {
									return this.$useSoftTabs && e.column % this.$tabSize === 0
								}, this.setNavigateWithinSoftTabs = function(e) {
									this.setOption("navigateWithinSoftTabs", e)
								}, this.getNavigateWithinSoftTabs = function() {
									return this.$navigateWithinSoftTabs
								}, this.$overwrite = !1, this.setOverwrite = function(e) {
									this.setOption("overwrite", e)
								}, this.getOverwrite = function() {
									return this.$overwrite
								}, this.toggleOverwrite = function() {
									this.setOverwrite(!this.$overwrite)
								}, this.addGutterDecoration = function(e, t) {
									this.$decorations[e] || (this.$decorations[e] = ""), this
										.$decorations[e] += " " + t, this._signal(
											"changeBreakpoint", {})
								}, this.removeGutterDecoration = function(e, t) {
									this.$decorations[e] = (this.$decorations[e] || "").replace(
										" " + t, ""), this._signal("changeBreakpoint", {})
								}, this.getBreakpoints = function() {
									return this.$breakpoints
								}, this.setBreakpoints = function(e) {
									this.$breakpoints = [];
									for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] =
										"ace_breakpoint";
									this._signal("changeBreakpoint", {})
								}, this.clearBreakpoints = function() {
									this.$breakpoints = [], this._signal("changeBreakpoint", {})
								}, this.setBreakpoint = function(e, t) {
									void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[
										e] = t : delete this.$breakpoints[e], this._signal(
											"changeBreakpoint", {})
								}, this.clearBreakpoint = function(e) {
									delete this.$breakpoints[e], this._signal(
										"changeBreakpoint", {})
								}, this.addMarker = function(e, t, i, n) {
									var r = this.$markerId++,
										o = {
											range: e,
											type: i || "line",
											renderer: "function" == typeof i ? i : null,
											clazz: t,
											inFront: !!n,
											id: r
										};
									return n ? (this.$frontMarkers[r] = o, this._signal(
										"changeFrontMarker")) : (this.$backMarkers[r] = o, this
										._signal("changeBackMarker")), r
								}, this.addDynamicMarker = function(e, t) {
									if (e.update) {
										var i = this.$markerId++;
										return e.id = i, e.inFront = !!t, t ? (this.$frontMarkers[
											i] = e, this._signal("changeFrontMarker")) : (this
											.$backMarkers[i] = e, this._signal(
												"changeBackMarker")), e
									}
								}, this.removeMarker = function(e) {
									var t = this.$frontMarkers[e] || this.$backMarkers[e];
									if (t) {
										var i = t.inFront ? this.$frontMarkers : this.$backMarkers;
										t && (delete i[e], this._signal(t.inFront ?
											"changeFrontMarker" : "changeBackMarker"))
									}
								}, this.getMarkers = function(e) {
									return e ? this.$frontMarkers : this.$backMarkers
								}, this.highlight = function(e) {
									if (!this.$searchHighlight) {
										var t = new g(null, "ace_selected-word", "text");
										this.$searchHighlight = this.addDynamicMarker(t)
									}
									this.$searchHighlight.setRegexp(e)
								}, this.highlightLines = function(e, t, i, n) {
									"number" != typeof t && (i = t, t = e), i || (i = "ace_step");
									var r = new h(e, 0, t, 1 / 0);
									return r.id = this.addMarker(r, i, "fullLine", n), r
								}, this.setAnnotations = function(e) {
									this.$annotations = e, this._signal("changeAnnotation", {})
								}, this.getAnnotations = function() {
									return this.$annotations || []
								}, this.clearAnnotations = function() {
									this.setAnnotations([])
								}, this.$detectNewLine = function(e) {
									var t = e.match(/^.*?(\r?\n)/m);
									this.$autoNewLine = t ? t[1] : "\n"
								}, this.getWordRange = function(e, t) {
									var i = this.getLine(e),
										n = !1;
									if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)), n || (
											n = !!i.charAt(t).match(this.tokenRe)), n) var r = this
										.tokenRe;
									else if (/^\s+$/.test(i.slice(t - 1, t + 1))) r = /\s/;
									else r = this.nonTokenRe;
									var o = t;
									if (o > 0) {
										do {
											o--
										} while (o >= 0 && i.charAt(o).match(r));
										o++
									}
									var s = t;
									while (s < i.length && i.charAt(s).match(r)) s++;
									return new h(e, o, e, s)
								}, this.getAWordRange = function(e, t) {
									var i = this.getWordRange(e, t),
										n = this.getLine(i.end.row);
									while (n.charAt(i.end.column).match(/[ \t]/)) i.end.column += 1;
									return i
								}, this.setNewLineMode = function(e) {
									this.doc.setNewLineMode(e)
								}, this.getNewLineMode = function() {
									return this.doc.getNewLineMode()
								}, this.setUseWorker = function(e) {
									this.setOption("useWorker", e)
								}, this.getUseWorker = function() {
									return this.$useWorker
								}, this.onReloadTokenizer = function(e) {
									var t = e.data;
									this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate",
										e)
								}, this.$modes = {}, this.$mode = null, this.$modeId = null, this
								.setMode = function(e, t) {
									if (e && "object" === typeof e) {
										if (e.getTokenizer) return this.$onChangeMode(e);
										var i = e,
											n = i.path
									} else n = e || "ace/mode/text";
									if (this.$modes["ace/mode/text"] || (this.$modes[
											"ace/mode/text"] = new c), this.$modes[n] && !i)
									return this.$onChangeMode(this.$modes[n]), void(t && t());
									this.$modeId = n, s.loadModule(["mode", n], function(e) {
										if (this.$modeId !== n) return t && t();
										this.$modes[n] && !i ? this.$onChangeMode(this
											.$modes[n]) : e && e.Mode && (e = new e
											.Mode(i), i || (this.$modes[n] = e, e.$id =
												n), this.$onChangeMode(e)), t && t()
									}.bind(this)), this.$mode || this.$onChangeMode(this.$modes[
										"ace/mode/text"], !0)
								}, this.$onChangeMode = function(e, t) {
									if (t || (this.$modeId = e.$id), this.$mode !== e) {
										this.$mode = e, this.$stopWorker(), this.$useWorker && this
											.$startWorker();
										var i = e.getTokenizer();
										if (void 0 !== i.addEventListener) {
											var n = this.onReloadTokenizer.bind(this);
											i.addEventListener("update", n)
										}
										if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i);
										else {
											this.bgTokenizer = new d(i);
											var r = this;
											this.bgTokenizer.addEventListener("update", (function(
											e) {
												r._signal("tokenizerUpdate", e)
											}))
										}
										this.bgTokenizer.setDocument(this.getDocument()), this
											.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe,
											t || (e.attachToSession && e.attachToSession(this), this
												.$options.wrapMethod.set.call(this, this
													.$wrapMethod), this.$setFolding(e.foldingRules),
												this.bgTokenizer.start(0), this._emit("changeMode"))
									}
								}, this.$stopWorker = function() {
									this.$worker && (this.$worker.terminate(), this.$worker = null)
								}, this.$startWorker = function() {
									try {
										this.$worker = this.$mode.createWorker(this)
									} catch (e) {
										s.warn("Could not load worker", e), this.$worker = null
									}
								}, this.getMode = function() {
									return this.$mode
								}, this.$scrollTop = 0, this.setScrollTop = function(e) {
									this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this
										._signal("changeScrollTop", e))
								}, this.getScrollTop = function() {
									return this.$scrollTop
								}, this.$scrollLeft = 0, this.setScrollLeft = function(e) {
									this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e,
										this._signal("changeScrollLeft", e))
								}, this.getScrollLeft = function() {
									return this.$scrollLeft
								}, this.getScreenWidth = function() {
									return this.$computeWidth(), this.lineWidgets ? Math.max(this
											.getLineWidgetMaxWidth(), this.screenWidth) : this
										.screenWidth
								}, this.getLineWidgetMaxWidth = function() {
									if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
									var e = 0;
									return this.lineWidgets.forEach((function(t) {
										t && t.screenWidth > e && (e = t.screenWidth)
									})), this.lineWidgetWidth = e
								}, this.$computeWidth = function(e) {
									if (this.$modified || e) {
										if (this.$modified = !1, this.$useWrapMode) return this
											.screenWidth = this.$wrapLimit;
										for (var t = this.doc.getAllLines(), i = this
												.$rowLengthCache, n = 0, r = 0, o = this.$foldData[
													r], s = o ? o.start.row : 1 / 0, a = t.length,
												l = 0; l < a; l++) {
											if (l > s) {
												if (l = o.end.row + 1, l >= a) break;
												o = this.$foldData[r++], s = o ? o.start.row : 1 / 0
											}
											null == i[l] && (i[l] = this.$getStringScreenWidth(t[
												l])[0]), i[l] > n && (n = i[l])
										}
										this.screenWidth = n
									}
								}, this.getLine = function(e) {
									return this.doc.getLine(e)
								}, this.getLines = function(e, t) {
									return this.doc.getLines(e, t)
								}, this.getLength = function() {
									return this.doc.getLength()
								}, this.getTextRange = function(e) {
									return this.doc.getTextRange(e || this.selection.getRange())
								}, this.insert = function(e, t) {
									return this.doc.insert(e, t)
								}, this.remove = function(e) {
									return this.doc.remove(e)
								}, this.removeFullLines = function(e, t) {
									return this.doc.removeFullLines(e, t)
								}, this.undoChanges = function(e, t) {
									if (e.length) {
										this.$fromUndo = !0;
										for (var i = null, n = e.length - 1; - 1 != n; n--) {
											var r = e[n];
											"doc" == r.group ? (this.doc.revertDeltas(r.deltas), i =
													this.$getUndoSelection(r.deltas, !0, i)) : r
												.deltas.forEach((function(e) {
													this.addFolds(e.folds)
												}), this)
										}
										return this.$fromUndo = !1, i && this.$undoSelect && !t &&
											this.selection.setSelectionRange(i), i
									}
								}, this.redoChanges = function(e, t) {
									if (e.length) {
										this.$fromUndo = !0;
										for (var i = null, n = 0; n < e.length; n++) {
											var r = e[n];
											"doc" == r.group && (this.doc.applyDeltas(r.deltas), i =
												this.$getUndoSelection(r.deltas, !1, i))
										}
										return this.$fromUndo = !1, i && this.$undoSelect && !t &&
											this.selection.setSelectionRange(i), i
									}
								}, this.setUndoSelect = function(e) {
									this.$undoSelect = e
								}, this.$getUndoSelection = function(e, t, i) {
									function n(e) {
										return t ? "insert" !== e.action : "insert" === e.action
									}
									var r, o, s = e[0];
									n(s) ? r = h.fromPoints(s.start, s.end) : r = h.fromPoints(s
										.start, s.start);
									for (var a = 1; a < e.length; a++) s = e[a], n(s) ? (o = s
										.start, -1 == r.compare(o.row, o.column) && r.setStart(
											o), o = s.end, 1 == r.compare(o.row, o.column) && r
										.setEnd(o), !0) : (o = s.start, -1 == r.compare(o.row, o
											.column) && (r = h.fromPoints(s.start, s.start)), !
										1);
									if (null != i) {
										0 === h.comparePoints(i.start, r.start) && (i.start
											.column += r.end.column - r.start.column, i.end
											.column += r.end.column - r.start.column);
										var l = i.compareRange(r);
										1 == l ? r.setStart(i.start) : -1 == l && r.setEnd(i.end)
									}
									return r
								}, this.replace = function(e, t) {
									return this.doc.replace(e, t)
								}, this.moveText = function(e, t, i) {
									var n = this.getTextRange(e),
										r = this.getFoldsInRange(e),
										o = h.fromPoints(t, t);
									if (!i) {
										this.remove(e);
										var s = e.start.row - e.end.row,
											a = s ? -e.end.column : e.start.column - e.end.column;
										a && (o.start.row == e.end.row && o.start.column > e.end
												.column && (o.start.column += a), o.end.row == e.end
												.row && o.end.column > e.end.column && (o.end
													.column += a)), s && o.start.row >= e.end.row &&
											(o.start.row += s, o.end.row += s)
									}
									if (o.end = this.insert(o.start, n), r.length) {
										var l = e.start,
											c = o.start;
										s = c.row - l.row, a = c.column - l.column;
										this.addFolds(r.map((function(e) {
											return e = e.clone(), e.start.row == l
												.row && (e.start.column += a), e.end
												.row == l.row && (e.end.column +=
												a), e.start.row += s, e.end.row +=
												s, e
										})))
									}
									return o
								}, this.indentRows = function(e, t, i) {
									i = i.replace(/\t/g, this.getTabString());
									for (var n = e; n <= t; n++) this.doc.insertInLine({
										row: n,
										column: 0
									}, i)
								}, this.outdentRows = function(e) {
									for (var t = e.collapseRows(), i = new h(0, 0, 0, 0), n = this
											.getTabSize(), r = t.start.row; r <= t.end.row; ++r) {
										var o = this.getLine(r);
										i.start.row = r, i.end.row = r;
										for (var s = 0; s < n; ++s)
											if (" " != o.charAt(s)) break;
										s < n && "\t" == o.charAt(s) ? (i.start.column = s, i.end
											.column = s + 1) : (i.start.column = 0, i.end
											.column = s), this.remove(i)
									}
								}, this.$moveLines = function(e, t, i) {
									if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), i <
										0) {
										var n = this.getRowFoldStart(e + i);
										if (n < 0) return 0;
										var r = n - e
									} else if (i > 0) {
										n = this.getRowFoldEnd(t + i);
										if (n > this.doc.getLength() - 1) return 0;
										r = n - t
									} else {
										e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(
											t);
										r = t - e + 1
									}
									var o = new h(e, 0, t, Number.MAX_VALUE),
										s = this.getFoldsInRange(o).map((function(e) {
											return e = e.clone(), e.start.row += r, e.end
												.row += r, e
										})),
										a = 0 == i ? this.doc.getLines(e, t) : this.doc
										.removeFullLines(e, t);
									return this.doc.insertFullLines(e + r, a), s.length && this
										.addFolds(s), r
								}, this.moveLinesUp = function(e, t) {
									return this.$moveLines(e, t, -1)
								}, this.moveLinesDown = function(e, t) {
									return this.$moveLines(e, t, 1)
								}, this.duplicateLines = function(e, t) {
									return this.$moveLines(e, t, 0)
								}, this.$clipRowToDocument = function(e) {
									return Math.max(0, Math.min(e, this.doc.getLength() - 1))
								}, this.$clipColumnToRow = function(e, t) {
									return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
								}, this.$clipPositionToDocument = function(e, t) {
									if (t = Math.max(0, t), e < 0) e = 0, t = 0;
									else {
										var i = this.doc.getLength();
										e >= i ? (e = i - 1, t = this.doc.getLine(i - 1).length) :
											t = Math.min(this.doc.getLine(e).length, t)
									}
									return {
										row: e,
										column: t
									}
								}, this.$clipRangeToDocument = function(e) {
									e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e
										.start.column = this.$clipColumnToRow(e.start.row, e.start
											.column);
									var t = this.doc.getLength() - 1;
									return e.end.row > t ? (e.end.row = t, e.end.column = this.doc
											.getLine(t).length) : e.end.column = this
										.$clipColumnToRow(e.end.row, e.end.column), e
								}, this.$wrapLimit = 80, this.$useWrapMode = !1, this
								.$wrapLimitRange = {
									min: null,
									max: null
								}, this.setUseWrapMode = function(e) {
									if (e != this.$useWrapMode) {
										if (this.$useWrapMode = e, this.$modified = !0, this
											.$resetRowCache(0), e) {
											var t = this.getLength();
											this.$wrapData = Array(t), this.$updateWrapData(0, t -
												1)
										}
										this._signal("changeWrapMode")
									}
								}, this.getUseWrapMode = function() {
									return this.$useWrapMode
								}, this.setWrapLimitRange = function(e, t) {
									this.$wrapLimitRange.min === e && this.$wrapLimitRange.max ===
										t || (this.$wrapLimitRange = {
												min: e,
												max: t
											}, this.$modified = !0, this.$bidiHandler.markAsDirty(),
											this.$useWrapMode && this._signal("changeWrapMode"))
								}, this.adjustWrapLimit = function(e, t) {
									var i = this.$wrapLimitRange;
									i.max < 0 && (i = {
										min: t,
										max: t
									});
									var n = this.$constrainWrapLimit(e, i.min, i.max);
									return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n,
										this.$modified = !0, this.$useWrapMode && (this
											.$updateWrapData(0, this.getLength() - 1), this
											.$resetRowCache(0), this._signal("changeWrapLimit")
											), !0)
								}, this.$constrainWrapLimit = function(e, t, i) {
									return t && (e = Math.max(t, e)), i && (e = Math.min(i, e)), e
								}, this.getWrapLimit = function() {
									return this.$wrapLimit
								}, this.setWrapLimit = function(e) {
									this.setWrapLimitRange(e, e)
								}, this.getWrapLimitRange = function() {
									return {
										min: this.$wrapLimitRange.min,
										max: this.$wrapLimitRange.max
									}
								}, this.$updateInternalDataOnChange = function(e) {
									var t = this.$useWrapMode,
										i = e.action,
										n = e.start,
										r = e.end,
										o = n.row,
										s = r.row,
										a = s - o,
										l = null;
									if (this.$updating = !0, 0 != a)
										if ("remove" === i) {
											this[t ? "$wrapData" : "$rowLengthCache"].splice(o, a);
											var c = this.$foldData;
											l = this.getFoldsInRange(e), this.removeFolds(l);
											var h = this.getFoldLine(r.row),
												u = 0;
											if (h) {
												h.addRemoveChars(r.row, r.column, n.column - r
													.column), h.shiftRow(-a);
												var d = this.getFoldLine(o);
												d && d !== h && (d.merge(h), h = d), u = c.indexOf(
													h) + 1
											}
											for (u; u < c.length; u++) {
												h = c[u];
												h.start.row >= r.row && h.shiftRow(-a)
											}
											s = o
										} else {
											var g = Array(a);
											g.unshift(o, 0);
											var f = t ? this.$wrapData : this.$rowLengthCache;
											f.splice.apply(f, g);
											c = this.$foldData, h = this.getFoldLine(o), u = 0;
											if (h) {
												var p = h.range.compareInside(n.row, n.column);
												0 == p ? (h = h.split(n.row, n.column), h && (h
													.shiftRow(a), h.addRemoveChars(s, 0, r
														.column - n.column))) : -1 == p && (h
													.addRemoveChars(o, 0, r.column - n.column),
													h.shiftRow(a)), u = c.indexOf(h) + 1
											}
											for (u; u < c.length; u++) {
												h = c[u];
												h.start.row >= o && h.shiftRow(a)
											}
										}
									else {
										a = Math.abs(e.start.column - e.end.column), "remove" ===
											i && (l = this.getFoldsInRange(e), this.removeFolds(l),
												a = -a);
										h = this.getFoldLine(o);
										h && h.addRemoveChars(o, n.column, a)
									}
									return t && this.$wrapData.length != this.doc.getLength() &&
										console.error(
											"doc.getLength() and $wrapData.length have to be the same!"
											), this.$updating = !1, t ? this.$updateWrapData(o, s) :
										this.$updateRowLengthCache(o, s), l
								}, this.$updateRowLengthCache = function(e, t, i) {
									this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
								}, this.$updateWrapData = function(e, t) {
									var n, r, s = this.doc.getAllLines(),
										a = this.getTabSize(),
										l = this.$wrapData,
										c = this.$wrapLimit,
										h = e;
									t = Math.min(t, s.length - 1);
									while (h <= t) r = this.getFoldLine(h, r), r ? (n = [], r.walk(
											function(e, t, r, a) {
												var l;
												if (null != e) {
													l = this.$getDisplayTokens(e, n.length), l[
														0] = i;
													for (var c = 1; c < l.length; c++) l[c] = o
												} else l = this.$getDisplayTokens(s[t]
													.substring(a, r), n.length);
												n = n.concat(l)
											}.bind(this), r.end.row, s[r.end.row].length + 1),
										l[r.start.row] = this.$computeWrapSplits(n, c, a), h = r
										.end.row + 1) : (n = this.$getDisplayTokens(s[h]), l[
										h] = this.$computeWrapSplits(n, c, a), h++)
								};
							var e = 1,
								t = 2,
								i = 3,
								o = 4,
								l = 9,
								u = 10,
								f = 11,
								p = 12;

							function m(e) {
								return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <=
									4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 ||
									e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >=
									12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >=
									12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >=
									12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >=
									12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >=
									12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >=
									12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >=
									13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >=
									42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >=
									44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >=
									55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >=
									65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >=
									65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >=
									65281 && e <= 65376 || e >= 65504 && e <= 65510)
							}
							this.$computeWrapSplits = function(e, n, r) {
								if (0 == e.length) return [];
								var s = [],
									a = e.length,
									c = 0,
									h = 0,
									d = this.$wrapAsCode,
									g = this.$indentedSoftWrap,
									m = n <= Math.max(2 * r, 8) || !1 === g ? 0 : Math.floor(n /
										2);

								function v() {
									var t = 0;
									if (0 === m) return t;
									if (g)
										for (var i = 0; i < e.length; i++) {
											var n = e[i];
											if (n == u) t += 1;
											else {
												if (n != f) {
													if (n == p) continue;
													break
												}
												t += r
											}
										}
									return d && !1 !== g && (t += r), Math.min(t, m)
								}

								function w(t) {
									var i = e.slice(c, t),
										n = i.length;
									i.join("").replace(/12/g, (function() {
											n -= 1
										})).replace(/2/g, (function() {
											n -= 1
										})), s.length || (b = v(), s.indent = b), h += n, s
										.push(h), c = t
								}
								var b = 0;
								while (a - c > n - b) {
									var A = c + n - b;
									if (e[A - 1] >= u && e[A] >= u) w(A);
									else if (e[A] != i && e[A] != o) {
										var C = Math.max(A - (n - (n >> 2)), c - 1);
										while (A > C && e[A] < i) A--;
										if (d) {
											while (A > C && e[A] < i) A--;
											while (A > C && e[A] == l) A--
										} else
											while (A > C && e[A] < u) A--;
										A > C ? w(++A) : (A = c + n, e[A] == t && A--, w(A - b))
									} else {
										for (A; A != c - 1; A--)
											if (e[A] == i) break;
										if (A > c) {
											w(A);
											continue
										}
										for (A = c + n, A; A < e.length; A++)
											if (e[A] != o) break;
										if (A == e.length) break;
										w(A)
									}
								}
								return s
							}, this.$getDisplayTokens = function(i, n) {
								var r, o = [];
								n = n || 0;
								for (var s = 0; s < i.length; s++) {
									var a = i.charCodeAt(s);
									if (9 == a) {
										r = this.getScreenTabSize(o.length + n), o.push(f);
										for (var c = 1; c < r; c++) o.push(p)
									} else 32 == a ? o.push(u) : a > 39 && a < 48 || a > 57 &&
										a < 64 ? o.push(l) : a >= 4352 && m(a) ? o.push(e, t) :
										o.push(e)
								}
								return o
							}, this.$getStringScreenWidth = function(e, t, i) {
								if (0 == t) return [0, 0];
								var n, r;
								for (null == t && (t = 1 / 0), i = i || 0, r = 0; r < e
									.length; r++)
									if (n = e.charCodeAt(r), 9 == n ? i += this
										.getScreenTabSize(i) : n >= 4352 && m(n) ? i += 2 : i +=
										1, i > t) break;
								return [i, r]
							}, this.lineWidgets = null, this.getRowLength = function(e) {
								if (this.lineWidgets) var t = this.lineWidgets[e] && this
									.lineWidgets[e].rowCount || 0;
								else t = 0;
								return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[
									e].length + 1 + t : 1 + t
							}, this.getRowLineCount = function(e) {
								return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[
									e].length + 1 : 1
							}, this.getRowWrapIndent = function(e) {
								if (this.$useWrapMode) {
									var t = this.screenToDocumentPosition(e, Number.MAX_VALUE),
										i = this.$wrapData[t.row];
									return i.length && i[0] < t.column ? i.indent : 0
								}
								return 0
							}, this.getScreenLastRowColumn = function(e) {
								var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
								return this.documentToScreenColumn(t.row, t.column)
							}, this.getDocumentLastRowColumn = function(e, t) {
								var i = this.documentToScreenRow(e, t);
								return this.getScreenLastRowColumn(i)
							}, this.getDocumentLastRowColumnPosition = function(e, t) {
								var i = this.documentToScreenRow(e, t);
								return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
							}, this.getRowSplitData = function(e) {
								return this.$useWrapMode ? this.$wrapData[e] : void 0
							}, this.getScreenTabSize = function(e) {
								return this.$tabSize - e % this.$tabSize
							}, this.screenToDocumentRow = function(e, t) {
								return this.screenToDocumentPosition(e, t).row
							}, this.screenToDocumentColumn = function(e, t) {
								return this.screenToDocumentPosition(e, t).column
							}, this.screenToDocumentPosition = function(e, t, i) {
								if (e < 0) return {
									row: 0,
									column: 0
								};
								var n, r, o = 0,
									s = 0,
									a = 0,
									l = 0,
									c = this.$screenRowCache,
									h = this.$getRowCacheIndex(c, e),
									u = c.length;
								if (u && h >= 0) {
									a = c[h], o = this.$docRowCache[h];
									var d = e > c[u - 1]
								} else d = !u;
								var g = this.getLength() - 1,
									f = this.getNextFoldLine(o),
									p = f ? f.start.row : 1 / 0;
								while (a <= e) {
									if (l = this.getRowLength(o), a + l > e || o >= g) break;
									a += l, o++, o > p && (o = f.end.row + 1, f = this
											.getNextFoldLine(o, f), p = f ? f.start.row : 1 / 0
											), d && (this.$docRowCache.push(o), this
											.$screenRowCache.push(a))
								}
								if (f && f.start.row <= o) n = this.getFoldDisplayLine(f), o = f
									.start.row;
								else {
									if (a + l <= e || o > g) return {
										row: g,
										column: this.getLine(g).length
									};
									n = this.getLine(o), f = null
								}
								var m = 0,
									v = Math.floor(e - a);
								if (this.$useWrapMode) {
									var w = this.$wrapData[o];
									w && (r = w[v], v > 0 && w.length && (m = w.indent, s = w[
										v - 1] || w[w.length - 1], n = n.substring(
										s)))
								}
								return void 0 !== i && this.$bidiHandler.isBidiRow(a + v, o,
									v) && (t = this.$bidiHandler.offsetToCol(i)), s += this
									.$getStringScreenWidth(n, t - m)[1], this.$useWrapMode &&
									s >= r && (s = r - 1), f ? f.idxToPosition(s) : {
										row: o,
										column: s
									}
							}, this.documentToScreenPosition = function(e, t) {
								if ("undefined" === typeof t) var i = this
									.$clipPositionToDocument(e.row, e.column);
								else i = this.$clipPositionToDocument(e, t);
								e = i.row, t = i.column;
								var n = 0,
									r = null,
									o = null;
								o = this.getFoldAt(e, t, 1), o && (e = o.start.row, t = o.start
									.column);
								var s, a = 0,
									l = this.$docRowCache,
									c = this.$getRowCacheIndex(l, e),
									h = l.length;
								if (h && c >= 0) {
									a = l[c], n = this.$screenRowCache[c];
									var u = e > l[h - 1]
								} else u = !h;
								var d = this.getNextFoldLine(a),
									g = d ? d.start.row : 1 / 0;
								while (a < e) {
									if (a >= g) {
										if (s = d.end.row + 1, s > e) break;
										d = this.getNextFoldLine(s, d), g = d ? d.start.row :
											1 / 0
									} else s = a + 1;
									n += this.getRowLength(a), a = s, u && (this.$docRowCache
										.push(a), this.$screenRowCache.push(n))
								}
								var f = "";
								d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), r = d.start
									.row) : (f = this.getLine(e).substring(0, t), r = e);
								var p = 0;
								if (this.$useWrapMode) {
									var m = this.$wrapData[r];
									if (m) {
										var v = 0;
										while (f.length >= m[v]) n++, v++;
										f = f.substring(m[v - 1] || 0, f.length), p = v > 0 ? m
											.indent : 0
									}
								}
								return {
									row: n,
									column: p + this.$getStringScreenWidth(f)[0]
								}
							}, this.documentToScreenColumn = function(e, t) {
								return this.documentToScreenPosition(e, t).column
							}, this.documentToScreenRow = function(e, t) {
								return this.documentToScreenPosition(e, t).row
							}, this.getScreenLength = function() {
								var e = 0,
									t = null;
								if (this.$useWrapMode) {
									var i = this.$wrapData.length,
										n = 0,
										r = (a = 0, t = this.$foldData[a++], t ? t.start.row :
											1 / 0);
									while (n < i) {
										var o = this.$wrapData[n];
										e += o ? o.length + 1 : 1, n++, n > r && (n = t.end
											.row + 1, t = this.$foldData[a++], r = t ? t
											.start.row : 1 / 0)
									}
								} else {
									e = this.getLength();
									for (var s = this.$foldData, a = 0; a < s.length; a++) t =
										s[a], e -= t.end.row - t.start.row
								}
								return this.lineWidgets && (e += this.$getWidgetScreenLength()),
									e
							}, this.$setFontMetrics = function(e) {
								this.$enableVarChar && (this.$getStringScreenWidth = function(t,
									i, n) {
									if (0 === i) return [0, 0];
									var r, o;
									for (i || (i = 1 / 0), n = n || 0, o = 0; o < t
										.length; o++)
										if (r = t.charAt(o), n += "\t" === r ? this
											.getScreenTabSize(n) : e.getCharacterWidth(
												r), n > i) break;
									return [n, o]
								})
							}, this.destroy = function() {
								this.bgTokenizer && (this.bgTokenizer.setDocument(null), this
									.bgTokenizer = null), this.$stopWorker()
							}, this.isFullWidth = m
						}.call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype),
						e("./edit_session/bracket_match").BracketMatch.call(f.prototype), s
						.defineOptions(f.prototype, "session", {
							wrap: {
								set: function(e) {
									if (e && "off" != e ? "free" == e ? e = !0 :
										"printMargin" == e ? e = -1 : "string" ==
										typeof e && (e = parseInt(e, 10) || !1) : e = !1,
										this.$wrap != e)
										if (this.$wrap = e, e) {
											var t = "number" == typeof e ? e : null;
											this.setWrapLimitRange(t, t), this
												.setUseWrapMode(!0)
										} else this.setUseWrapMode(!1)
								},
								get: function() {
									return this.getUseWrapMode() ? -1 == this.$wrap ?
										"printMargin" : this.getWrapLimitRange().min ? this
										.$wrap : "free" : "off"
								},
								handlesSet: !0
							},
							wrapMethod: {
								set: function(e) {
									e = "auto" == e ? "text" != this.$mode.type : "text" !=
										e, e != this.$wrapAsCode && (this.$wrapAsCode = e,
											this.$useWrapMode && (this.$modified = !0, this
												.$resetRowCache(0), this.$updateWrapData(0,
													this.getLength() - 1)))
								},
								initialValue: "auto"
							},
							indentedSoftWrap: {
								initialValue: !0
							},
							firstLineNumber: {
								set: function() {
									this._signal("changeBreakpoint")
								},
								initialValue: 1
							},
							useWorker: {
								set: function(e) {
									this.$useWorker = e, this.$stopWorker(), e && this
										.$startWorker()
								},
								initialValue: !0
							},
							useSoftTabs: {
								initialValue: !0
							},
							tabSize: {
								set: function(e) {
									isNaN(e) || this.$tabSize === e || (this.$modified = !0,
										this.$rowLengthCache = [], this.$tabSize = e,
										this._signal("changeTabSize"))
								},
								initialValue: 4,
								handlesSet: !0
							},
							navigateWithinSoftTabs: {
								initialValue: !1
							},
							overwrite: {
								set: function(e) {
									this._signal("changeOverwrite")
								},
								initialValue: !1
							},
							newLineMode: {
								set: function(e) {
									this.doc.setNewLineMode(e)
								},
								get: function() {
									return this.doc.getNewLineMode()
								},
								handlesSet: !0
							},
							mode: {
								set: function(e) {
									this.setMode(e)
								},
								get: function() {
									return this.$modeId
								}
							}
						}), t.EditSession = f
				})), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang",
					"ace/lib/oop", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/lang"),
						r = e("./lib/oop"),
						o = e("./range").Range,
						s = function() {
							this.$options = {}
						};

					function a(e, t) {
						function i(e) {
							return /\w/.test(e) || t.regExp ? "\\b" : ""
						}
						return i(e[0]) + e + i(e[e.length - 1])
					}(function() {
						this.set = function(e) {
							return r.mixin(this.$options, e), this
						}, this.getOptions = function() {
							return n.copyObject(this.$options)
						}, this.setOptions = function(e) {
							this.$options = e
						}, this.find = function(e) {
							var t = this.$options,
								i = this.$matchIterator(e, t);
							if (!i) return !1;
							var n = null;
							return i.forEach((function(e, i, r, s) {
								return n = new o(e, i, r, s), !(i == s && t
									.start && t.start.start && 0 != t
									.skipCurrent && n.isEqual(t.start)) || (
									n = null, !1)
							})), n
						}, this.findAll = function(e) {
							var t = this.$options;
							if (!t.needle) return [];
							this.$assembleRegExp(t);
							var i = t.range,
								r = i ? e.getLines(i.start.row, i.end.row) : e.doc
								.getAllLines(),
								s = [],
								a = t.re;
							if (t.$isMultiLine) {
								var l, c = a.length,
									h = r.length - c;
								e: for (var u = a.offset || 0; u <= h; u++) {
									for (var d = 0; d < c; d++)
										if (-1 == r[u + d].search(a[d])) continue e;
									var g = r[u],
										f = r[u + c - 1],
										p = g.length - g.match(a[0])[0].length,
										m = f.match(a[c - 1])[0].length;
									l && l.end.row === u && l.end.column > p || (s.push(
											l = new o(u, p, u + c - 1, m)), c > 2 &&
										(u = u + c - 2))
								}
							} else
								for (var v = 0; v < r.length; v++) {
									var w = n.getMatchOffsets(r[v], a);
									for (d = 0; d < w.length; d++) {
										var b = w[d];
										s.push(new o(v, b.offset, v, b.offset + b.length))
									}
								}
							if (i) {
								var A = i.start.column,
									C = i.start.column;
								v = 0, d = s.length - 1;
								while (v < d && s[v].start.column < A && s[v].start.row == i
									.start.row) v++;
								while (v < d && s[d].end.column > C && s[d].end.row == i.end
									.row) d--;
								for (s = s.slice(v, d + 1), v = 0, d = s.length; v < d; v++)
									s[v].start.row += i.start.row, s[v].end.row += i.start
									.row
							}
							return s
						}, this.replace = function(e, t) {
							var i = this.$options,
								n = this.$assembleRegExp(i);
							if (i.$isMultiLine) return t;
							if (n) {
								var r = n.exec(e);
								if (!r || r[0].length != e.length) return null;
								if (t = e.replace(n, t), i.preserveCase) {
									t = t.split("");
									for (var o = Math.min(e.length, e.length); o--;) {
										var s = e[o];
										s && s.toLowerCase() != s ? t[o] = t[o]
										.toUpperCase() : t[o] = t[o].toLowerCase()
									}
									t = t.join("")
								}
								return t
							}
						}, this.$assembleRegExp = function(e, t) {
							if (e.needle instanceof RegExp) return e.re = e.needle;
							var i = e.needle;
							if (!e.needle) return e.re = !1;
							e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = a(i,
								e));
							var r = e.caseSensitive ? "gm" : "gmi";
							if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine)
								return e.re = this.$assembleMultilineRegExp(i, r);
							try {
								var o = new RegExp(i, r)
							} catch (s) {
								o = !1
							}
							return e.re = o
						}, this.$assembleMultilineRegExp = function(e, t) {
							for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"),
								n = [], r = 0; r < i.length; r++) try {
								n.push(new RegExp(i[r], t))
							} catch (o) {
								return !1
							}
							return n
						}, this.$matchIterator = function(e, t) {
							var i = this.$assembleRegExp(t);
							if (!i) return !1;
							var n = 1 == t.backwards,
								r = 0 != t.skipCurrent,
								o = t.range,
								s = t.start;
							s || (s = o ? o[n ? "end" : "start"] : e.selection.getRange()),
								s.start && (s = s[r != n ? "end" : "start"]);
							var a = o ? o.start.row : 0,
								l = o ? o.end.row : e.getLength() - 1;
							if (n) var c = function(e) {
								var i = s.row;
								if (!u(i, s.column, e)) {
									for (i--; i >= a; i--)
										if (u(i, Number.MAX_VALUE, e)) return;
									if (0 != t.wrap)
										for (i = l, a = s.row; i >= a; i--)
											if (u(i, Number.MAX_VALUE, e)) return
								}
							};
							else c = function(e) {
								var i = s.row;
								if (!u(i, s.column, e)) {
									for (i += 1; i <= l; i++)
										if (u(i, 0, e)) return;
									if (0 != t.wrap)
										for (i = a, l = s.row; i <= l; i++)
											if (u(i, 0, e)) return
								}
							};
							if (t.$isMultiLine) var h = i.length,
								u = function(t, r, o) {
									var s = n ? t - h + 1 : t;
									if (!(s < 0)) {
										var a = e.getLine(s),
											l = a.search(i[0]);
										if (!(!n && l < r || -1 === l)) {
											for (var c = 1; c < h; c++)
												if (a = e.getLine(s + c), -1 == a
													.search(i[c])) return;
											var u = a.match(i[h - 1])[0].length;
											if (!(n && u > r)) return !!o(s, l, s + h -
												1, u) || void 0
										}
									}
								};
							else if (n) u = function(t, n, r) {
								var o, s = e.getLine(t),
									a = [],
									l = 0;
								i.lastIndex = 0;
								while (o = i.exec(s)) {
									var c = o[0].length;
									if (l = o.index, !c) {
										if (l >= s.length) break;
										i.lastIndex = l += 1
									}
									if (o.index + c > n) break;
									a.push(o.index, c)
								}
								for (var h = a.length - 1; h >= 0; h -= 2) {
									var u = a[h - 1];
									c = a[h];
									if (r(t, u, t, u + c)) return !0
								}
							};
							else u = function(t, n, r) {
								var o, s = e.getLine(t),
									a = n;
								i.lastIndex = n;
								while (o = i.exec(s)) {
									var l = o[0].length;
									if (a = o.index, r(t, a, t, a + l)) return !0;
									if (!l && (i.lastIndex = a += 1, a >= s.length))
										return !1
								}
							};
							return {
								forEach: c
							}
						}
					}).call(s.prototype), t.Search = s
				})), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module",
					"ace/lib/keys", "ace/lib/useragent"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/keys"),
						r = e("../lib/useragent"),
						o = n.KEY_MODS;

					function s(e, t) {
						this.platform = t || (r.isMac ? "mac" : "win"), this.commands = {}, this
							.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
					}

					function a(e, t) {
						s.call(this, e, t), this.$singleCommand = !1
					}
					a.prototype = s.prototype,
						function() {
							function e(e) {
								return "object" == typeof e && e.bindKey && e.bindKey.position || (e
									.isDefault ? -100 : 0)
							}
							this.addCommand = function(e) {
								this.commands[e.name] && this.removeCommand(e), this.commands[e
									.name] = e, e.bindKey && this._buildKeyHash(e)
							}, this.removeCommand = function(e, t) {
								var i = e && ("string" === typeof e ? e : e.name);
								e = this.commands[i], t || delete this.commands[i];
								var n = this.commandKeyBinding;
								for (var r in n) {
									var o = n[r];
									if (o == e) delete n[r];
									else if (Array.isArray(o)) {
										var s = o.indexOf(e); - 1 != s && (o.splice(s, 1), 1 ==
											o.length && (n[r] = o[0]))
									}
								}
							}, this.bindKey = function(e, t, i) {
								if ("object" == typeof e && e && (void 0 == i && (i = e
										.position), e = e[this.platform]), e)
								return "function" == typeof t ? this.addCommand({
										exec: t,
										bindKey: e,
										name: t.name || e
									}) : void e.split("|").forEach((function(e) {
										var n = "";
										if (-1 != e.indexOf(" ")) {
											var r = e.split(/\s+/);
											e = r.pop(), r.forEach((function(e) {
												var t = this.parseKeys(
														e),
													i = o[t.hashId] + t
													.key;
												n += (n ? " " : "") + i,
													this
													._addCommandToBinding(
														n, "chainKeys")
											}), this), n += " "
										}
										var s = this.parseKeys(e),
											a = o[s.hashId] + s.key;
										this._addCommandToBinding(n + a, t, i)
									}), this)
							}, this._addCommandToBinding = function(t, i, n) {
								var r, o = this.commandKeyBinding;
								if (i)
									if (!o[t] || this.$singleCommand) o[t] = i;
									else {
										Array.isArray(o[t]) ? -1 != (r = o[t].indexOf(i)) && o[
												t].splice(r, 1) : o[t] = [o[t]], "number" !=
											typeof n && (n = e(i));
										var s = o[t];
										for (r = 0; r < s.length; r++) {
											var a = s[r],
												l = e(a);
											if (l > n) break
										}
										s.splice(r, 0, i)
									}
								else delete o[t]
							}, this.addCommands = function(e) {
								e && Object.keys(e).forEach((function(t) {
									var i = e[t];
									if (i) {
										if ("string" === typeof i) return this
											.bindKey(i, t);
										"function" === typeof i && (i = {
											exec: i
										}), "object" === typeof i && (i.name ||
											(i.name = t), this.addCommand(i))
									}
								}), this)
							}, this.removeCommands = function(e) {
								Object.keys(e).forEach((function(t) {
									this.removeCommand(e[t])
								}), this)
							}, this.bindKeys = function(e) {
								Object.keys(e).forEach((function(t) {
									this.bindKey(t, e[t])
								}), this)
							}, this._buildKeyHash = function(e) {
								this.bindKey(e.bindKey, e)
							}, this.parseKeys = function(e) {
								var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((
										function(e) {
											return e
										})),
									i = t.pop(),
									r = n[i];
								if (n.FUNCTION_KEYS[r]) i = n.FUNCTION_KEYS[r].toLowerCase();
								else {
									if (!t.length) return {
										key: i,
										hashId: -1
									};
									if (1 == t.length && "shift" == t[0]) return {
										key: i.toUpperCase(),
										hashId: -1
									}
								}
								for (var o = 0, s = t.length; s--;) {
									var a = n.KEY_MODS[t[s]];
									if (null == a) return "undefined" != typeof console &&
										console.error("invalid modifier " + t[s] + " in " +
											e), !1;
									o |= a
								}
								return {
									key: i,
									hashId: o
								}
							}, this.findKeyCommand = function(e, t) {
								var i = o[e] + t;
								return this.commandKeyBinding[i]
							}, this.handleKeyboard = function(e, t, i, n) {
								if (!(n < 0)) {
									var r = o[t] + i,
										s = this.commandKeyBinding[r];
									return e.$keyChain && (e.$keyChain += " " + r, s = this
											.commandKeyBinding[e.$keyChain] || s), !s ||
										"chainKeys" != s && "chainKeys" != s[s.length - 1] ? (e
											.$keyChain && (t && 4 != t || 1 != i.length ? (-1 ==
													t || n > 0) && (e.$keyChain = "") : e
												.$keyChain = e.$keyChain.slice(0, -r.length - 1)
												), {
												command: s
											}) : (e.$keyChain = e.$keyChain || r, {
											command: "null"
										})
								}
							}, this.getStatusText = function(e, t) {
								return t.$keyChain || ""
							}
						}.call(s.prototype), t.HashHandler = s, t.MultiHashHandler = a
				})), ace.define("ace/commands/command_manager", ["require", "exports", "module",
					"ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/oop"),
						r = e("../keyboard/hash_handler").MultiHashHandler,
						o = e("../lib/event_emitter").EventEmitter,
						s = function(e, t) {
							r.call(this, t, e), this.byName = this.commands, this.setDefaultHandler(
								"exec", (function(e) {
									return e.command.exec(e.editor, e.args || {})
								}))
						};
					n.inherits(s, r),
						function() {
							n.implement(this, o), this.exec = function(e, t, i) {
								if (Array.isArray(e)) {
									for (var n = e.length; n--;)
										if (this.exec(e[n], t, i)) return !0;
									return !1
								}
								if ("string" === typeof e && (e = this.commands[e]), !e)
								return !1;
								if (t && t.$readOnly && !e.readOnly) return !1;
								if (e.isAvailable && !e.isAvailable(t)) return !1;
								var r = {
									editor: t,
									command: e,
									args: i
								};
								return r.returnValue = this._emit("exec", r), this._signal(
									"afterExec", r), !1 !== r.returnValue
							}, this.toggleRecording = function(e) {
								if (!this.$inReplay) return e && e._emit("changeStatus"), this
									.recording ? (this.macro.pop(), this
										.removeEventListener("exec", this
											.$addCommandToMacro), this.macro.length || (this
											.macro = this.oldMacro), this.recording = !1) :
									(this.$addCommandToMacro || (this.$addCommandToMacro =
											function(e) {
												this.macro.push([e.command, e.args])
											}.bind(this)), this.oldMacro = this.macro, this
										.macro = [], this.on("exec", this
											.$addCommandToMacro), this.recording = !0)
							}, this.replay = function(e) {
								if (!this.$inReplay && this.macro) {
									if (this.recording) return this.toggleRecording(e);
									try {
										this.$inReplay = !0, this.macro.forEach((function(t) {
											"string" == typeof t ? this.exec(t, e) :
												this.exec(t[0], e, t[1])
										}), this)
									} finally {
										this.$inReplay = !1
									}
								}
							}, this.trimMacro = function(e) {
								return e.map((function(e) {
									return "string" != typeof e[0] && (e[0] = e[0]
										.name), e[1] || (e = e[0]), e
								}))
							}
						}.call(s.prototype), t.CommandManager = s
				})), ace.define("ace/commands/default_commands", ["require", "exports", "module",
					"ace/lib/lang", "ace/config", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/lang"),
						r = e("../config"),
						o = e("../range").Range;

					function s(e, t) {
						return {
							win: e,
							mac: t
						}
					}
					t.commands = [{
						name: "showSettingsMenu",
						bindKey: s("Ctrl-,", "Command-,"),
						exec: function(e) {
							r.loadModule("ace/ext/settings_menu", (function(t) {
								t.init(e), e.showSettingsMenu()
							}))
						},
						readOnly: !0
					}, {
						name: "goToNextError",
						bindKey: s("Alt-E", "F4"),
						exec: function(e) {
							r.loadModule("ace/ext/error_marker", (function(t) {
								t.showErrorMarker(e, 1)
							}))
						},
						scrollIntoView: "animate",
						readOnly: !0
					}, {
						name: "goToPreviousError",
						bindKey: s("Alt-Shift-E", "Shift-F4"),
						exec: function(e) {
							r.loadModule("ace/ext/error_marker", (function(t) {
								t.showErrorMarker(e, -1)
							}))
						},
						scrollIntoView: "animate",
						readOnly: !0
					}, {
						name: "selectall",
						bindKey: s("Ctrl-A", "Command-A"),
						exec: function(e) {
							e.selectAll()
						},
						readOnly: !0
					}, {
						name: "centerselection",
						bindKey: s(null, "Ctrl-L"),
						exec: function(e) {
							e.centerSelection()
						},
						readOnly: !0
					}, {
						name: "gotoline",
						bindKey: s("Ctrl-L", "Command-L"),
						exec: function(e) {
							var t = parseInt(prompt("Enter line number:"), 10);
							isNaN(t) || e.gotoLine(t)
						},
						readOnly: !0
					}, {
						name: "fold",
						bindKey: s("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
						exec: function(e) {
							e.session.toggleFold(!1)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "unfold",
						bindKey: s("Alt-Shift-L|Ctrl-Shift-F1",
							"Command-Alt-Shift-L|Command-Shift-F1"),
						exec: function(e) {
							e.session.toggleFold(!0)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "toggleFoldWidget",
						bindKey: s("F2", "F2"),
						exec: function(e) {
							e.session.toggleFoldWidget()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "toggleParentFoldWidget",
						bindKey: s("Alt-F2", "Alt-F2"),
						exec: function(e) {
							e.session.toggleFoldWidget(!0)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "foldall",
						bindKey: s(null, "Ctrl-Command-Option-0"),
						exec: function(e) {
							e.session.foldAll()
						},
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "foldOther",
						bindKey: s("Alt-0", "Command-Option-0"),
						exec: function(e) {
							e.session.foldAll(), e.session.unfold(e.selection
								.getAllRanges())
						},
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "unfoldall",
						bindKey: s("Alt-Shift-0", "Command-Option-Shift-0"),
						exec: function(e) {
							e.session.unfold()
						},
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "findnext",
						bindKey: s("Ctrl-K", "Command-G"),
						exec: function(e) {
							e.findNext()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "findprevious",
						bindKey: s("Ctrl-Shift-K", "Command-Shift-G"),
						exec: function(e) {
							e.findPrevious()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "center",
						readOnly: !0
					}, {
						name: "selectOrFindNext",
						bindKey: s("Alt-K", "Ctrl-G"),
						exec: function(e) {
							e.selection.isEmpty() ? e.selection.selectWord() : e
								.findNext()
						},
						readOnly: !0
					}, {
						name: "selectOrFindPrevious",
						bindKey: s("Alt-Shift-K", "Ctrl-Shift-G"),
						exec: function(e) {
							e.selection.isEmpty() ? e.selection.selectWord() : e
								.findPrevious()
						},
						readOnly: !0
					}, {
						name: "find",
						bindKey: s("Ctrl-F", "Command-F"),
						exec: function(e) {
							r.loadModule("ace/ext/searchbox", (function(t) {
								t.Search(e)
							}))
						},
						readOnly: !0
					}, {
						name: "overwrite",
						bindKey: "Insert",
						exec: function(e) {
							e.toggleOverwrite()
						},
						readOnly: !0
					}, {
						name: "selecttostart",
						bindKey: s("Ctrl-Shift-Home",
							"Command-Shift-Home|Command-Shift-Up"),
						exec: function(e) {
							e.getSelection().selectFileStart()
						},
						multiSelectAction: "forEach",
						readOnly: !0,
						scrollIntoView: "animate",
						aceCommandGroup: "fileJump"
					}, {
						name: "gotostart",
						bindKey: s("Ctrl-Home", "Command-Home|Command-Up"),
						exec: function(e) {
							e.navigateFileStart()
						},
						multiSelectAction: "forEach",
						readOnly: !0,
						scrollIntoView: "animate",
						aceCommandGroup: "fileJump"
					}, {
						name: "selectup",
						bindKey: s("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
						exec: function(e) {
							e.getSelection().selectUp()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "golineup",
						bindKey: s("Up", "Up|Ctrl-P"),
						exec: function(e, t) {
							e.navigateUp(t.times)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selecttoend",
						bindKey: s("Ctrl-Shift-End",
							"Command-Shift-End|Command-Shift-Down"),
						exec: function(e) {
							e.getSelection().selectFileEnd()
						},
						multiSelectAction: "forEach",
						readOnly: !0,
						scrollIntoView: "animate",
						aceCommandGroup: "fileJump"
					}, {
						name: "gotoend",
						bindKey: s("Ctrl-End", "Command-End|Command-Down"),
						exec: function(e) {
							e.navigateFileEnd()
						},
						multiSelectAction: "forEach",
						readOnly: !0,
						scrollIntoView: "animate",
						aceCommandGroup: "fileJump"
					}, {
						name: "selectdown",
						bindKey: s("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
						exec: function(e) {
							e.getSelection().selectDown()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "golinedown",
						bindKey: s("Down", "Down|Ctrl-N"),
						exec: function(e, t) {
							e.navigateDown(t.times)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectwordleft",
						bindKey: s("Ctrl-Shift-Left", "Option-Shift-Left"),
						exec: function(e) {
							e.getSelection().selectWordLeft()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotowordleft",
						bindKey: s("Ctrl-Left", "Option-Left"),
						exec: function(e) {
							e.navigateWordLeft()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selecttolinestart",
						bindKey: s("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
						exec: function(e) {
							e.getSelection().selectLineStart()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotolinestart",
						bindKey: s("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
						exec: function(e) {
							e.navigateLineStart()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectleft",
						bindKey: s("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
						exec: function(e) {
							e.getSelection().selectLeft()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotoleft",
						bindKey: s("Left", "Left|Ctrl-B"),
						exec: function(e, t) {
							e.navigateLeft(t.times)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectwordright",
						bindKey: s("Ctrl-Shift-Right", "Option-Shift-Right"),
						exec: function(e) {
							e.getSelection().selectWordRight()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotowordright",
						bindKey: s("Ctrl-Right", "Option-Right"),
						exec: function(e) {
							e.navigateWordRight()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selecttolineend",
						bindKey: s("Alt-Shift-Right",
							"Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
						exec: function(e) {
							e.getSelection().selectLineEnd()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotolineend",
						bindKey: s("Alt-Right|End", "Command-Right|End|Ctrl-E"),
						exec: function(e) {
							e.navigateLineEnd()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectright",
						bindKey: s("Shift-Right", "Shift-Right"),
						exec: function(e) {
							e.getSelection().selectRight()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "gotoright",
						bindKey: s("Right", "Right|Ctrl-F"),
						exec: function(e, t) {
							e.navigateRight(t.times)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectpagedown",
						bindKey: "Shift-PageDown",
						exec: function(e) {
							e.selectPageDown()
						},
						readOnly: !0
					}, {
						name: "pagedown",
						bindKey: s(null, "Option-PageDown"),
						exec: function(e) {
							e.scrollPageDown()
						},
						readOnly: !0
					}, {
						name: "gotopagedown",
						bindKey: s("PageDown", "PageDown|Ctrl-V"),
						exec: function(e) {
							e.gotoPageDown()
						},
						readOnly: !0
					}, {
						name: "selectpageup",
						bindKey: "Shift-PageUp",
						exec: function(e) {
							e.selectPageUp()
						},
						readOnly: !0
					}, {
						name: "pageup",
						bindKey: s(null, "Option-PageUp"),
						exec: function(e) {
							e.scrollPageUp()
						},
						readOnly: !0
					}, {
						name: "gotopageup",
						bindKey: "PageUp",
						exec: function(e) {
							e.gotoPageUp()
						},
						readOnly: !0
					}, {
						name: "scrollup",
						bindKey: s("Ctrl-Up", null),
						exec: function(e) {
							e.renderer.scrollBy(0, -2 * e.renderer.layerConfig
								.lineHeight)
						},
						readOnly: !0
					}, {
						name: "scrolldown",
						bindKey: s("Ctrl-Down", null),
						exec: function(e) {
							e.renderer.scrollBy(0, 2 * e.renderer.layerConfig
								.lineHeight)
						},
						readOnly: !0
					}, {
						name: "selectlinestart",
						bindKey: "Shift-Home",
						exec: function(e) {
							e.getSelection().selectLineStart()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectlineend",
						bindKey: "Shift-End",
						exec: function(e) {
							e.getSelection().selectLineEnd()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "togglerecording",
						bindKey: s("Ctrl-Alt-E", "Command-Option-E"),
						exec: function(e) {
							e.commands.toggleRecording(e)
						},
						readOnly: !0
					}, {
						name: "replaymacro",
						bindKey: s("Ctrl-Shift-E", "Command-Shift-E"),
						exec: function(e) {
							e.commands.replay(e)
						},
						readOnly: !0
					}, {
						name: "jumptomatching",
						bindKey: s("Ctrl-P", "Ctrl-P"),
						exec: function(e) {
							e.jumpToMatching()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "animate",
						readOnly: !0
					}, {
						name: "selecttomatching",
						bindKey: s("Ctrl-Shift-P", "Ctrl-Shift-P"),
						exec: function(e) {
							e.jumpToMatching(!0)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "animate",
						readOnly: !0
					}, {
						name: "expandToMatching",
						bindKey: s("Ctrl-Shift-M", "Ctrl-Shift-M"),
						exec: function(e) {
							e.jumpToMatching(!0, !0)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "animate",
						readOnly: !0
					}, {
						name: "passKeysToBrowser",
						bindKey: s(null, null),
						exec: function() {},
						passEvent: !0,
						readOnly: !0
					}, {
						name: "copy",
						exec: function(e) {},
						readOnly: !0
					}, {
						name: "cut",
						exec: function(e) {
							var t = e.getSelectionRange();
							e._emit("cut", t), e.selection.isEmpty() || (e.session
								.remove(t), e.clearSelection())
						},
						scrollIntoView: "cursor",
						multiSelectAction: "forEach"
					}, {
						name: "paste",
						exec: function(e, t) {
							e.$handlePaste(t)
						},
						scrollIntoView: "cursor"
					}, {
						name: "removeline",
						bindKey: s("Ctrl-D", "Command-D"),
						exec: function(e) {
							e.removeLines()
						},
						scrollIntoView: "cursor",
						multiSelectAction: "forEachLine"
					}, {
						name: "duplicateSelection",
						bindKey: s("Ctrl-Shift-D", "Command-Shift-D"),
						exec: function(e) {
							e.duplicateSelection()
						},
						scrollIntoView: "cursor",
						multiSelectAction: "forEach"
					}, {
						name: "sortlines",
						bindKey: s("Ctrl-Alt-S", "Command-Alt-S"),
						exec: function(e) {
							e.sortLines()
						},
						scrollIntoView: "selection",
						multiSelectAction: "forEachLine"
					}, {
						name: "togglecomment",
						bindKey: s("Ctrl-/", "Command-/"),
						exec: function(e) {
							e.toggleCommentLines()
						},
						multiSelectAction: "forEachLine",
						scrollIntoView: "selectionPart"
					}, {
						name: "toggleBlockComment",
						bindKey: s("Ctrl-Shift-/", "Command-Shift-/"),
						exec: function(e) {
							e.toggleBlockComment()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "selectionPart"
					}, {
						name: "modifyNumberUp",
						bindKey: s("Ctrl-Shift-Up", "Alt-Shift-Up"),
						exec: function(e) {
							e.modifyNumber(1)
						},
						scrollIntoView: "cursor",
						multiSelectAction: "forEach"
					}, {
						name: "modifyNumberDown",
						bindKey: s("Ctrl-Shift-Down", "Alt-Shift-Down"),
						exec: function(e) {
							e.modifyNumber(-1)
						},
						scrollIntoView: "cursor",
						multiSelectAction: "forEach"
					}, {
						name: "replace",
						bindKey: s("Ctrl-H", "Command-Option-F"),
						exec: function(e) {
							r.loadModule("ace/ext/searchbox", (function(t) {
								t.Search(e, !0)
							}))
						}
					}, {
						name: "undo",
						bindKey: s("Ctrl-Z", "Command-Z"),
						exec: function(e) {
							e.undo()
						}
					}, {
						name: "redo",
						bindKey: s("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
						exec: function(e) {
							e.redo()
						}
					}, {
						name: "copylinesup",
						bindKey: s("Alt-Shift-Up", "Command-Option-Up"),
						exec: function(e) {
							e.copyLinesUp()
						},
						scrollIntoView: "cursor"
					}, {
						name: "movelinesup",
						bindKey: s("Alt-Up", "Option-Up"),
						exec: function(e) {
							e.moveLinesUp()
						},
						scrollIntoView: "cursor"
					}, {
						name: "copylinesdown",
						bindKey: s("Alt-Shift-Down", "Command-Option-Down"),
						exec: function(e) {
							e.copyLinesDown()
						},
						scrollIntoView: "cursor"
					}, {
						name: "movelinesdown",
						bindKey: s("Alt-Down", "Option-Down"),
						exec: function(e) {
							e.moveLinesDown()
						},
						scrollIntoView: "cursor"
					}, {
						name: "del",
						bindKey: s("Delete", "Delete|Ctrl-D|Shift-Delete"),
						exec: function(e) {
							e.remove("right")
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "backspace",
						bindKey: s("Shift-Backspace|Backspace",
							"Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
						exec: function(e) {
							e.remove("left")
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "cut_or_delete",
						bindKey: s("Shift-Delete", null),
						exec: function(e) {
							if (!e.selection.isEmpty()) return !1;
							e.remove("left")
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removetolinestart",
						bindKey: s("Alt-Backspace", "Command-Backspace"),
						exec: function(e) {
							e.removeToLineStart()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removetolineend",
						bindKey: s("Alt-Delete", "Ctrl-K|Command-Delete"),
						exec: function(e) {
							e.removeToLineEnd()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removetolinestarthard",
						bindKey: s("Ctrl-Shift-Backspace", null),
						exec: function(e) {
							var t = e.selection.getRange();
							t.start.column = 0, e.session.remove(t)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removetolineendhard",
						bindKey: s("Ctrl-Shift-Delete", null),
						exec: function(e) {
							var t = e.selection.getRange();
							t.end.column = Number.MAX_VALUE, e.session.remove(t)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removewordleft",
						bindKey: s("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
						exec: function(e) {
							e.removeWordLeft()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "removewordright",
						bindKey: s("Ctrl-Delete", "Alt-Delete"),
						exec: function(e) {
							e.removeWordRight()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "outdent",
						bindKey: s("Shift-Tab", "Shift-Tab"),
						exec: function(e) {
							e.blockOutdent()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "selectionPart"
					}, {
						name: "indent",
						bindKey: s("Tab", "Tab"),
						exec: function(e) {
							e.indent()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "selectionPart"
					}, {
						name: "blockoutdent",
						bindKey: s("Ctrl-[", "Ctrl-["),
						exec: function(e) {
							e.blockOutdent()
						},
						multiSelectAction: "forEachLine",
						scrollIntoView: "selectionPart"
					}, {
						name: "blockindent",
						bindKey: s("Ctrl-]", "Ctrl-]"),
						exec: function(e) {
							e.blockIndent()
						},
						multiSelectAction: "forEachLine",
						scrollIntoView: "selectionPart"
					}, {
						name: "insertstring",
						exec: function(e, t) {
							e.insert(t)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "inserttext",
						exec: function(e, t) {
							e.insert(n.stringRepeat(t.text || "", t.times || 1))
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "splitline",
						bindKey: s(null, "Ctrl-O"),
						exec: function(e) {
							e.splitLine()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "transposeletters",
						bindKey: s("Alt-Shift-X", "Ctrl-T"),
						exec: function(e) {
							e.transposeLetters()
						},
						multiSelectAction: function(e) {
							e.transposeSelections(1)
						},
						scrollIntoView: "cursor"
					}, {
						name: "touppercase",
						bindKey: s("Ctrl-U", "Ctrl-U"),
						exec: function(e) {
							e.toUpperCase()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "tolowercase",
						bindKey: s("Ctrl-Shift-U", "Ctrl-Shift-U"),
						exec: function(e) {
							e.toLowerCase()
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor"
					}, {
						name: "expandtoline",
						bindKey: s("Ctrl-Shift-L", "Command-Shift-L"),
						exec: function(e) {
							var t = e.selection.getRange();
							t.start.column = t.end.column = 0, t.end.row++, e.selection
								.setRange(t, !1)
						},
						multiSelectAction: "forEach",
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "joinlines",
						bindKey: s(null, null),
						exec: function(e) {
							for (var t = e.selection.isBackwards(), i = t ? e.selection
									.getSelectionLead() : e.selection
									.getSelectionAnchor(), r = t ? e.selection
									.getSelectionAnchor() : e.selection
									.getSelectionLead(), s = e.session.doc.getLine(i
										.row).length, a = e.session.doc.getTextRange(e
										.selection.getRange()), l = a.replace(/\n\s*/,
										" ").length, c = e.session.doc.getLine(i.row),
									h = i.row + 1; h <= r.row + 1; h++) {
								var u = n.stringTrimLeft(n.stringTrimRight(e.session.doc
									.getLine(h)));
								0 !== u.length && (u = " " + u), c += u
							}
							r.row + 1 < e.session.doc.getLength() - 1 && (c += e.session
									.doc.getNewLineCharacter()), e.clearSelection(), e
								.session.doc.replace(new o(i.row, 0, r.row + 2, 0), c),
								l > 0 ? (e.selection.moveCursorTo(i.row, i.column), e
									.selection.selectTo(i.row, i.column + l)) : (s = e
									.session.doc.getLine(i.row).length > s ? s + 1 : s,
									e.selection.moveCursorTo(i.row, s))
						},
						multiSelectAction: "forEach",
						readOnly: !0
					}, {
						name: "invertSelection",
						bindKey: s(null, null),
						exec: function(e) {
							var t = e.session.doc.getLength() - 1,
								i = e.session.doc.getLine(t).length,
								n = e.selection.rangeList.ranges,
								r = [];
							n.length < 1 && (n = [e.selection.getRange()]);
							for (var s = 0; s < n.length; s++) s == n.length - 1 && (n[
										s].end.row === t && n[s].end.column === i || r
									.push(new o(n[s].end.row, n[s].end.column, t, i))),
								0 === s ? 0 === n[s].start.row && 0 === n[s].start
								.column || r.push(new o(0, 0, n[s].start.row, n[s].start
									.column)) : r.push(new o(n[s - 1].end.row, n[s - 1]
									.end.column, n[s].start.row, n[s].start.column));
							e.exitMultiSelectMode(), e.clearSelection();
							for (s = 0; s < r.length; s++) e.selection.addRange(r[s], !
								1)
						},
						readOnly: !0,
						scrollIntoView: "none"
					}]
				})), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers",
					"ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent",
					"ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler",
					"ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range",
					"ace/lib/event_emitter", "ace/commands/command_manager",
					"ace/commands/default_commands", "ace/config", "ace/token_iterator"
				], (function(e, t, i) {
					"use strict";
					e("./lib/fixoldbrowsers");
					var n = e("./lib/oop"),
						r = e("./lib/dom"),
						o = e("./lib/lang"),
						s = e("./lib/useragent"),
						a = e("./keyboard/textinput").TextInput,
						l = e("./mouse/mouse_handler").MouseHandler,
						c = e("./mouse/fold_handler").FoldHandler,
						h = e("./keyboard/keybinding").KeyBinding,
						u = e("./edit_session").EditSession,
						d = e("./search").Search,
						g = e("./range").Range,
						f = e("./lib/event_emitter").EventEmitter,
						p = e("./commands/command_manager").CommandManager,
						m = e("./commands/default_commands").commands,
						v = e("./config"),
						w = e("./token_iterator").TokenIterator,
						b = function(e, t) {
							var i = e.getContainerElement();
							this.container = i, this.renderer = e, this.id = "editor" + ++b.$uid,
								this.commands = new p(s.isMac ? "mac" : "win", m), "object" ==
								typeof document && (this.textInput = new a(e.getTextAreaContainer(),
										this), this.renderer.textarea = this.textInput.getElement(),
									this.$mouseHandler = new l(this), new c(this)), this
								.keyBinding = new h(this), this.$blockScrolling = 0, this.$search =
								(new d).set({
									wrap: !0
								}), this.$historyTracker = this.$historyTracker.bind(this), this
								.commands.on("exec", this.$historyTracker), this
								.$initOperationListeners(), this._$emitInputEvent = o.delayedCall(
									function() {
										this._signal("input", {}), this.session && this.session
											.bgTokenizer && this.session.bgTokenizer.scheduleStart()
									}.bind(this)), this.on("change", (function(e, t) {
									t._$emitInputEvent.schedule(31)
								})), this.setSession(t || new u("")), v.resetOptions(this), v
								._signal("editor", this)
						};
					b.$uid = 0,
						function() {
							n.implement(this, f), this.$initOperationListeners = function() {
									this.selections = [], this.commands.on("exec", this
											.startOperation.bind(this), !0), this.commands.on(
											"afterExec", this.endOperation.bind(this), !0), this
										.$opResetTimer = o.delayedCall(this.endOperation.bind(
										this)), this.on("change", function() {
											this.curOp || this.startOperation(), this.curOp
												.docChanged = !0
										}.bind(this), !0), this.on("changeSelection", function() {
											this.curOp || this.startOperation(), this.curOp
												.selectionChanged = !0
										}.bind(this), !0)
								}, this.curOp = null, this.prevOp = {}, this.startOperation =
								function(e) {
									if (this.curOp) {
										if (!e || this.curOp.command) return;
										this.prevOp = this.curOp
									}
									e || (this.previousCommand = null, e = {}), this.$opResetTimer
										.schedule(), this.curOp = {
											command: e.command || {},
											args: e.args,
											scrollTop: this.renderer.scrollTop
										}, this.curOp.command.name && void 0 !== this.curOp.command
										.scrollIntoView && this.$blockScrolling++
								}, this.endOperation = function(e) {
									if (this.curOp) {
										if (e && !1 === e.returnValue) return this.curOp = null;
										this._signal("beforeEndOperation");
										var t = this.curOp.command;
										t.name && this.$blockScrolling > 0 && this
										.$blockScrolling--;
										var i = t && t.scrollIntoView;
										if (i) {
											switch (i) {
												case "center-animate":
													i = "animate";
												case "center":
													this.renderer.scrollCursorIntoView(null, .5);
													break;
												case "animate":
												case "cursor":
													this.renderer.scrollCursorIntoView();
													break;
												case "selectionPart":
													var n = this.selection.getRange(),
														r = this.renderer.layerConfig;
													(n.start.row >= r.lastRow || n.end.row <= r
														.firstRow) && this.renderer
														.scrollSelectionIntoView(this.selection
															.anchor, this.selection.lead);
													break;
												default:
													break
											}
											"animate" == i && this.renderer.animateScrolling(this
												.curOp.scrollTop)
										}
										this.prevOp = this.curOp, this.curOp = null
									}
								}, this.$mergeableCommands = ["backspace", "del", "insertstring"],
								this.$historyTracker = function(e) {
									if (this.$mergeUndoDeltas) {
										var t = this.prevOp,
											i = this.$mergeableCommands,
											n = t.command && e.command.name == t.command.name;
										if ("insertstring" == e.command.name) {
											var r = e.args;
											void 0 === this.mergeNextCommand && (this
													.mergeNextCommand = !0), n = n && this
												.mergeNextCommand && (!/\s/.test(r) || /\s/.test(t
													.args)), this.mergeNextCommand = !0
										} else n = n && -1 !== i.indexOf(e.command.name);
										"always" != this.$mergeUndoDeltas && Date.now() - this
											.sequenceStartTime > 2e3 && (n = !1), n ? this.session
											.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command
											.name) && (this.sequenceStartTime = Date.now())
									}
								}, this.setKeyboardHandler = function(e, t) {
									if (e && "string" === typeof e) {
										this.$keybindingId = e;
										var i = this;
										v.loadModule(["keybinding", e], (function(n) {
											i.$keybindingId == e && i.keyBinding
												.setKeyboardHandler(n && n.handler),
												t && t()
										}))
									} else this.$keybindingId = null, this.keyBinding
										.setKeyboardHandler(e), t && t()
								}, this.getKeyboardHandler = function() {
									return this.keyBinding.getKeyboardHandler()
								}, this.setSession = function(e) {
									if (this.session != e) {
										this.curOp && this.endOperation(), this.curOp = {};
										var t = this.session;
										if (t) {
											this.session.off("change", this.$onDocumentChange), this
												.session.off("changeMode", this.$onChangeMode), this
												.session.off("tokenizerUpdate", this
													.$onTokenizerUpdate), this.session.off(
													"changeTabSize", this.$onChangeTabSize), this
												.session.off("changeWrapLimit", this
													.$onChangeWrapLimit), this.session.off(
													"changeWrapMode", this.$onChangeWrapMode), this
												.session.off("changeFold", this.$onChangeFold), this
												.session.off("changeFrontMarker", this
													.$onChangeFrontMarker), this.session.off(
													"changeBackMarker", this.$onChangeBackMarker),
												this.session.off("changeBreakpoint", this
													.$onChangeBreakpoint), this.session.off(
													"changeAnnotation", this.$onChangeAnnotation),
												this.session.off("changeOverwrite", this
													.$onCursorChange), this.session.off(
													"changeScrollTop", this.$onScrollTopChange),
												this.session.off("changeScrollLeft", this
													.$onScrollLeftChange);
											var i = this.session.getSelection();
											i.off("changeCursor", this.$onCursorChange), i.off(
												"changeSelection", this.$onSelectionChange)
										}
										this.session = e, e ? (this.$onDocumentChange = this
												.onDocumentChange.bind(this), e.on("change", this
													.$onDocumentChange), this.renderer.setSession(
												e), this.$onChangeMode = this.onChangeMode.bind(
													this), e.on("changeMode", this.$onChangeMode),
												this.$onTokenizerUpdate = this.onTokenizerUpdate
												.bind(this), e.on("tokenizerUpdate", this
													.$onTokenizerUpdate), this.$onChangeTabSize =
												this.renderer.onChangeTabSize.bind(this.renderer), e
												.on("changeTabSize", this.$onChangeTabSize), this
												.$onChangeWrapLimit = this.onChangeWrapLimit.bind(
													this), e.on("changeWrapLimit", this
													.$onChangeWrapLimit), this.$onChangeWrapMode =
												this.onChangeWrapMode.bind(this), e.on(
													"changeWrapMode", this.$onChangeWrapMode), this
												.$onChangeFold = this.onChangeFold.bind(this), e.on(
													"changeFold", this.$onChangeFold), this
												.$onChangeFrontMarker = this.onChangeFrontMarker
												.bind(this), this.session.on("changeFrontMarker",
													this.$onChangeFrontMarker), this
												.$onChangeBackMarker = this.onChangeBackMarker.bind(
													this), this.session.on("changeBackMarker", this
													.$onChangeBackMarker), this
												.$onChangeBreakpoint = this.onChangeBreakpoint.bind(
													this), this.session.on("changeBreakpoint", this
													.$onChangeBreakpoint), this
												.$onChangeAnnotation = this.onChangeAnnotation.bind(
													this), this.session.on("changeAnnotation", this
													.$onChangeAnnotation), this.$onCursorChange =
												this.onCursorChange.bind(this), this.session.on(
													"changeOverwrite", this.$onCursorChange), this
												.$onScrollTopChange = this.onScrollTopChange.bind(
													this), this.session.on("changeScrollTop", this
													.$onScrollTopChange), this.$onScrollLeftChange =
												this.onScrollLeftChange.bind(this), this.session.on(
													"changeScrollLeft", this.$onScrollLeftChange),
												this.selection = e.getSelection(), this.selection
												.on("changeCursor", this.$onCursorChange), this
												.$onSelectionChange = this.onSelectionChange.bind(
													this), this.selection.on("changeSelection", this
													.$onSelectionChange), this.onChangeMode(), this
												.$blockScrolling += 1, this.onCursorChange(), this
												.$blockScrolling -= 1, this.onScrollTopChange(),
												this.onScrollLeftChange(), this.onSelectionChange(),
												this.onChangeFrontMarker(), this
												.onChangeBackMarker(), this.onChangeBreakpoint(),
												this.onChangeAnnotation(), this.session
												.getUseWrapMode() && this.renderer
											.adjustWrapLimit(), this.renderer.updateFull()) : (this
												.selection = null, this.renderer.setSession(e)),
											this._signal("changeSession", {
												session: e,
												oldSession: t
											}), this.curOp = null, t && t._signal("changeEditor", {
												oldEditor: this
											}), e && e._signal("changeEditor", {
												editor: this
											}), e && e.bgTokenizer && e.bgTokenizer.scheduleStart()
									}
								}, this.getSession = function() {
									return this.session
								}, this.setValue = function(e, t) {
									return this.session.doc.setValue(e), t ? 1 == t ? this
										.navigateFileEnd() : -1 == t && this.navigateFileStart() :
										this.selectAll(), e
								}, this.getValue = function() {
									return this.session.getValue()
								}, this.getSelection = function() {
									return this.selection
								}, this.resize = function(e) {
									this.renderer.onResize(e)
								}, this.setTheme = function(e, t) {
									this.renderer.setTheme(e, t)
								}, this.getTheme = function() {
									return this.renderer.getTheme()
								}, this.setStyle = function(e) {
									this.renderer.setStyle(e)
								}, this.unsetStyle = function(e) {
									this.renderer.unsetStyle(e)
								}, this.getFontSize = function() {
									return this.getOption("fontSize") || r.computedStyle(this
										.container, "fontSize")
								}, this.setFontSize = function(e) {
									this.setOption("fontSize", e)
								}, this.$highlightBrackets = function() {
									if (this.session.$bracketHighlight && (this.session
											.removeMarker(this.session.$bracketHighlight), this
											.session.$bracketHighlight = null), !this
										.$highlightPending) {
										var e = this;
										this.$highlightPending = !0, setTimeout((function() {
											e.$highlightPending = !1;
											var t = e.session;
											if (t && t.bgTokenizer) {
												var i = t.findMatchingBracket(e
													.getCursorPosition());
												if (i) var n = new g(i.row, i.column, i
													.row, i.column + 1);
												else if (t.$mode.getMatching) n = t
													.$mode.getMatching(e.session);
												n && (t.$bracketHighlight = t.addMarker(
													n, "ace_bracket", "text"))
											}
										}), 50)
									}
								}, this.$highlightTags = function() {
									if (!this.$highlightTagPending) {
										var e = this;
										this.$highlightTagPending = !0, setTimeout((function() {
											e.$highlightTagPending = !1;
											var t = e.session;
											if (t && t.bgTokenizer) {
												var i = e.getCursorPosition(),
													n = new w(e.session, i.row, i
														.column),
													r = n.getCurrentToken();
												if (!r || !/\b(?:tag-open|tag-name)/
													.test(r.type)) return t
													.removeMarker(t.$tagHighlight),
													void(t.$tagHighlight = null);
												if (-1 == r.type.indexOf("tag-open") ||
													(r = n.stepForward(), r)) {
													var o = r.value,
														s = 0,
														a = n.stepBackward();
													if ("<" == a.value)
														do {
															a = r, r = n.stepForward(),
																r && r.value === o && -
																1 !== r.type.indexOf(
																	"tag-name") && (
																	"<" === a.value ?
																	s++ : "</" === a
																	.value && s--)
														} while (r && s >= 0);
													else {
														do {
															r = a, a = n.stepBackward(),
																r && r.value === o && -
																1 !== r.type.indexOf(
																	"tag-name") && (
																	"<" === a.value ?
																	s++ : "</" === a
																	.value && s--)
														} while (a && s <= 0);
														n.stepForward()
													}
													if (!r) return t.removeMarker(t
														.$tagHighlight), void(t
														.$tagHighlight = null);
													var l = n.getCurrentTokenRow(),
														c = n.getCurrentTokenColumn(),
														h = new g(l, c, l, c + r.value
															.length),
														u = t.$backMarkers[t
															.$tagHighlight];
													t.$tagHighlight && void 0 != u &&
														0 !== h.compareRange(u.range) &&
														(t.removeMarker(t
															.$tagHighlight), t
															.$tagHighlight = null), h &&
														!t.$tagHighlight && (t
															.$tagHighlight = t
															.addMarker(h, "ace_bracket",
																"text"))
												}
											}
										}), 50)
									}
								}, this.focus = function() {
									var e = this;
									setTimeout((function() {
										e.textInput.focus()
									})), this.textInput.focus()
								}, this.isFocused = function() {
									return this.textInput.isFocused()
								}, this.blur = function() {
									this.textInput.blur()
								}, this.onFocus = function(e) {
									this.$isFocused || (this.$isFocused = !0, this.renderer
										.showCursor(), this.renderer.visualizeFocus(), this
										._emit("focus", e))
								}, this.onBlur = function(e) {
									this.$isFocused && (this.$isFocused = !1, this.renderer
										.hideCursor(), this.renderer.visualizeBlur(), this
										._emit("blur", e))
								}, this.$cursorChange = function() {
									this.renderer.updateCursor()
								}, this.onDocumentChange = function(e) {
									var t = this.session.$useWrapMode,
										i = e.start.row == e.end.row ? e.end.row : 1 / 0;
									this.renderer.updateLines(e.start.row, i, t), this._signal(
											"change", e), this.$cursorChange(), this
										.$updateHighlightActiveLine()
								}, this.onTokenizerUpdate = function(e) {
									var t = e.data;
									this.renderer.updateLines(t.first, t.last)
								}, this.onScrollTopChange = function() {
									this.renderer.scrollToY(this.session.getScrollTop())
								}, this.onScrollLeftChange = function() {
									this.renderer.scrollToX(this.session.getScrollLeft())
								}, this.onCursorChange = function() {
									this.$cursorChange(), this.$blockScrolling || (v.warn(
											"Automatically scrolling cursor into view after selection change",
											"this will be disabled in the next version",
											"set editor.$blockScrolling = Infinity to disable this message"
											), this.renderer.scrollCursorIntoView()), this
										.$highlightBrackets(), this.$highlightTags(), this
										.$updateHighlightActiveLine(), this._signal(
											"changeSelection")
								}, this.$updateHighlightActiveLine = function() {
									var e, t = this.getSession();
									if (this.$highlightActiveLine && ("line" == this
											.$selectionStyle && this.selection.isMultiLine() || (e =
												this.getCursorPosition()), !this.renderer
											.$maxLines || 1 !== this.session.getLength() || this
											.renderer.$minLines > 1 || (e = !1)), t
										.$highlightLineMarker && !e) t.removeMarker(t
										.$highlightLineMarker.id), t.$highlightLineMarker = null;
									else if (!t.$highlightLineMarker && e) {
										var i = new g(e.row, e.column, e.row, 1 / 0);
										i.id = t.addMarker(i, "ace_active-line", "screenLine"), t
											.$highlightLineMarker = i
									} else e && (t.$highlightLineMarker.start.row = e.row, t
										.$highlightLineMarker.end.row = e.row, t
										.$highlightLineMarker.start.column = e.column, t
										._signal("changeBackMarker"))
								}, this.onSelectionChange = function(e) {
									var t = this.session;
									if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t
										.$selectionMarker = null, this.selection.isEmpty()) this
										.$updateHighlightActiveLine();
									else {
										var i = this.selection.getRange(),
											n = this.getSelectionStyle();
										t.$selectionMarker = t.addMarker(i, "ace_selection", n)
									}
									var r = this.$highlightSelectedWord && this
										.$getSelectionHighLightRegexp();
									this.session.highlight(r), this._signal("changeSelection")
								}, this.$getSelectionHighLightRegexp = function() {
									var e = this.session,
										t = this.getSelectionRange();
									if (!t.isEmpty() && !t.isMultiLine()) {
										var i = t.start.column - 1,
											n = t.end.column + 1,
											r = e.getLine(t.start.row),
											o = r.length,
											s = r.substring(Math.max(i, 0), Math.min(n, o));
										if (!(i >= 0 && /^[\w\d]/.test(s) || n <= o && /[\w\d]$/
												.test(s)) && (s = r.substring(t.start.column, t.end
												.column), /^[\w\d]+$/.test(s))) {
											var a = this.$search.$assembleRegExp({
												wholeWord: !0,
												caseSensitive: !0,
												needle: s
											});
											return a
										}
									}
								}, this.onChangeFrontMarker = function() {
									this.renderer.updateFrontMarkers()
								}, this.onChangeBackMarker = function() {
									this.renderer.updateBackMarkers()
								}, this.onChangeBreakpoint = function() {
									this.renderer.updateBreakpoints()
								}, this.onChangeAnnotation = function() {
									this.renderer.setAnnotations(this.session.getAnnotations())
								}, this.onChangeMode = function(e) {
									this.renderer.updateText(), this._emit("changeMode", e)
								}, this.onChangeWrapLimit = function() {
									this.renderer.updateFull()
								}, this.onChangeWrapMode = function() {
									this.renderer.onResize(!0)
								}, this.onChangeFold = function() {
									this.$updateHighlightActiveLine(), this.renderer.updateFull()
								}, this.getSelectedText = function() {
									return this.session.getTextRange(this.getSelectionRange())
								}, this.getCopyText = function() {
									var e = this.getSelectedText();
									return this._signal("copy", e), e
								}, this.onCopy = function() {
									this.commands.exec("copy", this)
								}, this.onCut = function() {
									this.commands.exec("cut", this)
								}, this.onPaste = function(e, t) {
									var i = {
										text: e,
										event: t
									};
									this.commands.exec("paste", this, i)
								}, this.$handlePaste = function(e) {
									"string" == typeof e && (e = {
										text: e
									}), this._signal("paste", e);
									var t = e.text;
									if (!this.inMultiSelectMode || this.inVirtualSelectionMode) this
										.insert(t);
									else {
										var i = t.split(/\r\n|\r|\n/),
											n = this.selection.rangeList.ranges;
										if (i.length > n.length || i.length < 2 || !i[1])
										return this.commands.exec("insertstring", this, t);
										for (var r = n.length; r--;) {
											var o = n[r];
											o.isEmpty() || this.session.remove(o), this.session
												.insert(o.start, i[r])
										}
									}
								}, this.execCommand = function(e, t) {
									return this.commands.exec(e, this, t)
								}, this.insert = function(e, t) {
									var i = this.session,
										n = i.getMode(),
										r = this.getCursorPosition();
									if (this.getBehavioursEnabled() && !t) {
										var o = n.transformAction(i.getState(r.row), "insertion",
											this, i, e);
										o && (e !== o.text && (this.session.mergeUndoDeltas = !1,
											this.$mergeNextCommand = !1), e = o.text)
									}
									if ("\t" == e && (e = this.session.getTabString()), this
										.selection.isEmpty()) {
										if (this.session.getOverwrite() && -1 == e.indexOf("\n")) {
											s = new g.fromPoints(r, r);
											s.end.column += e.length, this.session.remove(s)
										}
									} else {
										var s = this.getSelectionRange();
										r = this.session.remove(s), this.clearSelection()
									}
									if ("\n" == e || "\r\n" == e) {
										var a = i.getLine(r.row);
										if (r.column > a.search(/\S|$/)) {
											var l = a.substr(r.column).search(/\S|$/);
											i.doc.removeInLine(r.row, r.column, r.column + l)
										}
									}
									this.clearSelection();
									var c = r.column,
										h = i.getState(r.row),
										u = (a = i.getLine(r.row), n.checkOutdent(h, a, e));
									i.insert(r, e);
									if (o && o.selection && (2 == o.selection.length ? this
											.selection.setSelectionRange(new g(r.row, c + o
												.selection[0], r.row, c + o.selection[1])) : this
											.selection.setSelectionRange(new g(r.row + o.selection[
													0], o.selection[1], r.row + o.selection[2],
												o.selection[3]))), i.getDocument().isNewLine(e)) {
										var d = n.getNextLineIndent(h, a.slice(0, r.column), i
											.getTabString());
										i.insert({
											row: r.row + 1,
											column: 0
										}, d)
									}
									u && n.autoOutdent(h, i, r.row)
								}, this.onTextInput = function(e) {
									this.keyBinding.onTextInput(e)
								}, this.onCommandKey = function(e, t, i) {
									this.keyBinding.onCommandKey(e, t, i)
								}, this.setOverwrite = function(e) {
									this.session.setOverwrite(e)
								}, this.getOverwrite = function() {
									return this.session.getOverwrite()
								}, this.toggleOverwrite = function() {
									this.session.toggleOverwrite()
								}, this.setScrollSpeed = function(e) {
									this.setOption("scrollSpeed", e)
								}, this.getScrollSpeed = function() {
									return this.getOption("scrollSpeed")
								}, this.setDragDelay = function(e) {
									this.setOption("dragDelay", e)
								}, this.getDragDelay = function() {
									return this.getOption("dragDelay")
								}, this.setSelectionStyle = function(e) {
									this.setOption("selectionStyle", e)
								}, this.getSelectionStyle = function() {
									return this.getOption("selectionStyle")
								}, this.setHighlightActiveLine = function(e) {
									this.setOption("highlightActiveLine", e)
								}, this.getHighlightActiveLine = function() {
									return this.getOption("highlightActiveLine")
								}, this.setHighlightGutterLine = function(e) {
									this.setOption("highlightGutterLine", e)
								}, this.getHighlightGutterLine = function() {
									return this.getOption("highlightGutterLine")
								}, this.setHighlightSelectedWord = function(e) {
									this.setOption("highlightSelectedWord", e)
								}, this.getHighlightSelectedWord = function() {
									return this.$highlightSelectedWord
								}, this.setAnimatedScroll = function(e) {
									this.renderer.setAnimatedScroll(e)
								}, this.getAnimatedScroll = function() {
									return this.renderer.getAnimatedScroll()
								}, this.setShowInvisibles = function(e) {
									this.renderer.setShowInvisibles(e)
								}, this.getShowInvisibles = function() {
									return this.renderer.getShowInvisibles()
								}, this.setDisplayIndentGuides = function(e) {
									this.renderer.setDisplayIndentGuides(e)
								}, this.getDisplayIndentGuides = function() {
									return this.renderer.getDisplayIndentGuides()
								}, this.setShowPrintMargin = function(e) {
									this.renderer.setShowPrintMargin(e)
								}, this.getShowPrintMargin = function() {
									return this.renderer.getShowPrintMargin()
								}, this.setPrintMarginColumn = function(e) {
									this.renderer.setPrintMarginColumn(e)
								}, this.getPrintMarginColumn = function() {
									return this.renderer.getPrintMarginColumn()
								}, this.setReadOnly = function(e) {
									this.setOption("readOnly", e)
								}, this.getReadOnly = function() {
									return this.getOption("readOnly")
								}, this.setBehavioursEnabled = function(e) {
									this.setOption("behavioursEnabled", e)
								}, this.getBehavioursEnabled = function() {
									return this.getOption("behavioursEnabled")
								}, this.setWrapBehavioursEnabled = function(e) {
									this.setOption("wrapBehavioursEnabled", e)
								}, this.getWrapBehavioursEnabled = function() {
									return this.getOption("wrapBehavioursEnabled")
								}, this.setShowFoldWidgets = function(e) {
									this.setOption("showFoldWidgets", e)
								}, this.getShowFoldWidgets = function() {
									return this.getOption("showFoldWidgets")
								}, this.setFadeFoldWidgets = function(e) {
									this.setOption("fadeFoldWidgets", e)
								}, this.getFadeFoldWidgets = function() {
									return this.getOption("fadeFoldWidgets")
								}, this.remove = function(e) {
									this.selection.isEmpty() && ("left" == e ? this.selection
										.selectLeft() : this.selection.selectRight());
									var t = this.getSelectionRange();
									if (this.getBehavioursEnabled()) {
										var i = this.session,
											n = i.getState(t.start.row),
											r = i.getMode().transformAction(n, "deletion", this, i,
												t);
										if (0 === t.end.column) {
											var o = i.getTextRange(t);
											if ("\n" == o[o.length - 1]) {
												var s = i.getLine(t.end.row);
												/^\s+$/.test(s) && (t.end.column = s.length)
											}
										}
										r && (t = r)
									}
									this.session.remove(t), this.clearSelection()
								}, this.removeWordRight = function() {
									this.selection.isEmpty() && this.selection.selectWordRight(),
										this.session.remove(this.getSelectionRange()), this
										.clearSelection()
								}, this.removeWordLeft = function() {
									this.selection.isEmpty() && this.selection.selectWordLeft(),
										this.session.remove(this.getSelectionRange()), this
										.clearSelection()
								}, this.removeToLineStart = function() {
									this.selection.isEmpty() && this.selection.selectLineStart(),
										this.session.remove(this.getSelectionRange()), this
										.clearSelection()
								}, this.removeToLineEnd = function() {
									this.selection.isEmpty() && this.selection.selectLineEnd();
									var e = this.getSelectionRange();
									e.start.column == e.end.column && e.start.row == e.end.row && (e
											.end.column = 0, e.end.row++), this.session.remove(e),
										this.clearSelection()
								}, this.splitLine = function() {
									this.selection.isEmpty() || (this.session.remove(this
										.getSelectionRange()), this.clearSelection());
									var e = this.getCursorPosition();
									this.insert("\n"), this.moveCursorToPosition(e)
								}, this.transposeLetters = function() {
									if (this.selection.isEmpty()) {
										var e = this.getCursorPosition(),
											t = e.column;
										if (0 !== t) {
											var i, n, r = this.session.getLine(e.row);
											t < r.length ? (i = r.charAt(t) + r.charAt(t - 1), n =
													new g(e.row, t - 1, e.row, t + 1)) : (i = r
													.charAt(t - 1) + r.charAt(t - 2), n = new g(e
														.row, t - 2, e.row, t)), this.session
												.replace(n, i), this.session.selection
												.moveToPosition(n.end)
										}
									}
								}, this.toLowerCase = function() {
									var e = this.getSelectionRange();
									this.selection.isEmpty() && this.selection.selectWord();
									var t = this.getSelectionRange(),
										i = this.session.getTextRange(t);
									this.session.replace(t, i.toLowerCase()), this.selection
										.setSelectionRange(e)
								}, this.toUpperCase = function() {
									var e = this.getSelectionRange();
									this.selection.isEmpty() && this.selection.selectWord();
									var t = this.getSelectionRange(),
										i = this.session.getTextRange(t);
									this.session.replace(t, i.toUpperCase()), this.selection
										.setSelectionRange(e)
								}, this.indent = function() {
									var e = this.session,
										t = this.getSelectionRange();
									if (!(t.start.row < t.end.row)) {
										if (t.start.column < t.end.column) {
											var i = e.getTextRange(t);
											if (!/^\s+$/.test(i)) {
												h = this.$getSelectedRows();
												return void e.indentRows(h.first, h.last, "\t")
											}
										}
										var n = e.getLine(t.start.row),
											r = t.start,
											s = e.getTabSize(),
											a = e.documentToScreenColumn(r.row, r.column);
										if (this.session.getUseSoftTabs()) var l = s - a % s,
											c = o.stringRepeat(" ", l);
										else {
											l = a % s;
											while (" " == n[t.start.column - 1] && l) t.start
												.column--, l--;
											this.selection.setSelectionRange(t), c = "\t"
										}
										return this.insert(c)
									}
									var h = this.$getSelectedRows();
									e.indentRows(h.first, h.last, "\t")
								}, this.blockIndent = function() {
									var e = this.$getSelectedRows();
									this.session.indentRows(e.first, e.last, "\t")
								}, this.blockOutdent = function() {
									var e = this.session.getSelection();
									this.session.outdentRows(e.getRange())
								}, this.sortLines = function() {
									for (var e = this.$getSelectedRows(), t = this.session, i = [],
											n = e.first; n <= e.last; n++) i.push(t.getLine(n));
									i.sort((function(e, t) {
										return e.toLowerCase() < t.toLowerCase() ? -1 :
											e.toLowerCase() > t.toLowerCase() ? 1 : 0
									}));
									var r = new g(0, 0, 0, 0);
									for (n = e.first; n <= e.last; n++) {
										var o = t.getLine(n);
										r.start.row = n, r.end.row = n, r.end.column = o.length, t
											.replace(r, i[n - e.first])
									}
								}, this.toggleCommentLines = function() {
									var e = this.session.getState(this.getCursorPosition().row),
										t = this.$getSelectedRows();
									this.session.getMode().toggleCommentLines(e, this.session, t
										.first, t.last)
								}, this.toggleBlockComment = function() {
									var e = this.getCursorPosition(),
										t = this.session.getState(e.row),
										i = this.getSelectionRange();
									this.session.getMode().toggleBlockComment(t, this.session, i, e)
								}, this.getNumberAt = function(e, t) {
									var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
									i.lastIndex = 0;
									var n = this.session.getLine(e);
									while (i.lastIndex < t) {
										var r = i.exec(n);
										if (r.index <= t && r.index + r[0].length >= t) {
											var o = {
												value: r[0],
												start: r.index,
												end: r.index + r[0].length
											};
											return o
										}
									}
									return null
								}, this.modifyNumber = function(e) {
									var t = this.selection.getCursor().row,
										i = this.selection.getCursor().column,
										n = new g(t, i - 1, t, i),
										r = this.session.getTextRange(n);
									if (!isNaN(parseFloat(r)) && isFinite(r)) {
										var o = this.getNumberAt(t, i);
										if (o) {
											var s = o.value.indexOf(".") >= 0 ? o.start + o.value
												.indexOf(".") + 1 : o.end,
												a = o.start + o.value.length - s,
												l = parseFloat(o.value);
											l *= Math.pow(10, a), s !== o.end && i < s ? e *= Math
												.pow(10, o.end - i - 1) : e *= Math.pow(10, o.end -
													i), l += e, l /= Math.pow(10, a);
											var c = l.toFixed(a),
												h = new g(t, o.start, t, o.end);
											this.session.replace(h, c), this.moveCursorTo(t, Math
												.max(o.start + 1, i + c.length - o.value.length)
												)
										}
									}
								}, this.removeLines = function() {
									var e = this.$getSelectedRows();
									this.session.removeFullLines(e.first, e.last), this
										.clearSelection()
								}, this.duplicateSelection = function() {
									var e = this.selection,
										t = this.session,
										i = e.getRange(),
										n = e.isBackwards();
									if (i.isEmpty()) {
										var r = i.start.row;
										t.duplicateLines(r, r)
									} else {
										var o = n ? i.start : i.end,
											s = t.insert(o, t.getTextRange(i), !1);
										i.start = o, i.end = s, e.setSelectionRange(i, n)
									}
								}, this.moveLinesDown = function() {
									this.$moveLines(1, !1)
								}, this.moveLinesUp = function() {
									this.$moveLines(-1, !1)
								}, this.moveText = function(e, t, i) {
									return this.session.moveText(e, t, i)
								}, this.copyLinesUp = function() {
									this.$moveLines(-1, !0)
								}, this.copyLinesDown = function() {
									this.$moveLines(1, !0)
								}, this.$moveLines = function(e, t) {
									var i, n, r = this.selection;
									if (!r.inMultiSelectMode || this.inVirtualSelectionMode) {
										var o = r.toOrientedRange();
										i = this.$getSelectedRows(o), n = this.session.$moveLines(i
												.first, i.last, t ? 0 : e), t && -1 == e && (n = 0),
											o.moveBy(n, 0), r.fromOrientedRange(o)
									} else {
										var s = r.rangeList.ranges;
										r.rangeList.detach(this.session), this
											.inVirtualSelectionMode = !0;
										for (var a = 0, l = 0, c = s.length, h = 0; h < c; h++) {
											var u = h;
											s[h].moveBy(a, 0), i = this.$getSelectedRows(s[h]);
											var d = i.first,
												g = i.last;
											while (++h < c) {
												l && s[h].moveBy(l, 0);
												var f = this.$getSelectedRows(s[h]);
												if (t && f.first != g) break;
												if (!t && f.first > g + 1) break;
												g = f.last
											}
											h--, a = this.session.$moveLines(d, g, t ? 0 : e), t &&
												-1 == e && (u = h + 1);
											while (u <= h) s[u].moveBy(a, 0), u++;
											t || (a = 0), l += a
										}
										r.fromOrientedRange(r.ranges[0]), r.rangeList.attach(this
											.session), this.inVirtualSelectionMode = !1
									}
								}, this.$getSelectedRows = function(e) {
									return e = (e || this.getSelectionRange()).collapseRows(), {
										first: this.session.getRowFoldStart(e.start.row),
										last: this.session.getRowFoldEnd(e.end.row)
									}
								}, this.onCompositionStart = function(e) {
									this.renderer.showComposition(this.getCursorPosition())
								}, this.onCompositionUpdate = function(e) {
									this.renderer.setCompositionText(e)
								}, this.onCompositionEnd = function() {
									this.renderer.hideComposition()
								}, this.getFirstVisibleRow = function() {
									return this.renderer.getFirstVisibleRow()
								}, this.getLastVisibleRow = function() {
									return this.renderer.getLastVisibleRow()
								}, this.isRowVisible = function(e) {
									return e >= this.getFirstVisibleRow() && e <= this
										.getLastVisibleRow()
								}, this.isRowFullyVisible = function(e) {
									return e >= this.renderer.getFirstFullyVisibleRow() && e <= this
										.renderer.getLastFullyVisibleRow()
								}, this.$getVisibleRowCount = function() {
									return this.renderer.getScrollBottomRow() - this.renderer
										.getScrollTopRow() + 1
								}, this.$moveByPage = function(e, t) {
									var i = this.renderer,
										n = this.renderer.layerConfig,
										r = e * Math.floor(n.height / n.lineHeight);
									this.$blockScrolling++, !0 === t ? this.selection
										.$moveSelection((function() {
											this.moveCursorBy(r, 0)
										})) : !1 === t && (this.selection.moveCursorBy(r, 0), this
											.selection.clearSelection()), this.$blockScrolling--;
									var o = i.scrollTop;
									i.scrollBy(0, r * n.lineHeight), null != t && i
										.scrollCursorIntoView(null, .5), i.animateScrolling(o)
								}, this.selectPageDown = function() {
									this.$moveByPage(1, !0)
								}, this.selectPageUp = function() {
									this.$moveByPage(-1, !0)
								}, this.gotoPageDown = function() {
									this.$moveByPage(1, !1)
								}, this.gotoPageUp = function() {
									this.$moveByPage(-1, !1)
								}, this.scrollPageDown = function() {
									this.$moveByPage(1)
								}, this.scrollPageUp = function() {
									this.$moveByPage(-1)
								}, this.scrollToRow = function(e) {
									this.renderer.scrollToRow(e)
								}, this.scrollToLine = function(e, t, i, n) {
									this.renderer.scrollToLine(e, t, i, n)
								}, this.centerSelection = function() {
									var e = this.getSelectionRange(),
										t = {
											row: Math.floor(e.start.row + (e.end.row - e.start
												.row) / 2),
											column: Math.floor(e.start.column + (e.end.column - e
												.start.column) / 2)
										};
									this.renderer.alignCursor(t, .5)
								}, this.getCursorPosition = function() {
									return this.selection.getCursor()
								}, this.getCursorPositionScreen = function() {
									return this.session.documentToScreenPosition(this
										.getCursorPosition())
								}, this.getSelectionRange = function() {
									return this.selection.getRange()
								}, this.selectAll = function() {
									this.$blockScrolling += 1, this.selection.selectAll(), this
										.$blockScrolling -= 1
								}, this.clearSelection = function() {
									this.selection.clearSelection()
								}, this.moveCursorTo = function(e, t) {
									this.selection.moveCursorTo(e, t)
								}, this.moveCursorToPosition = function(e) {
									this.selection.moveCursorToPosition(e)
								}, this.jumpToMatching = function(e, t) {
									var i = this.getCursorPosition(),
										n = new w(this.session, i.row, i.column),
										r = n.getCurrentToken(),
										o = r || n.stepForward();
									if (o) {
										var s, a, l = !1,
											c = {},
											h = i.column - o.start,
											u = {
												")": "(",
												"(": "(",
												"]": "[",
												"[": "[",
												"{": "{",
												"}": "{"
											};
										do {
											if (o.value.match(/[{}()\[\]]/g)) {
												for (; h < o.value.length && !l; h++)
													if (u[o.value[h]]) switch (a = u[o.value[h]] +
														"." + o.type.replace("rparen",
														"lparen"), isNaN(c[a]) && (c[a] = 0), o
														.value[h]) {
														case "(":
														case "[":
														case "{":
															c[a]++;
															break;
														case ")":
														case "]":
														case "}":
															c[a]--, -1 === c[a] && (s =
																"bracket", l = !0);
															break
													}
											} else o && -1 !== o.type.indexOf("tag-name") && (isNaN(
													c[o.value]) && (c[o.value] = 0), "<" === r
												.value ? c[o.value]++ : "</" === r.value && c[o
													.value]--, -1 === c[o.value] && (s = "tag",
													l = !0));
											l || (r = o, o = n.stepForward(), h = 0)
										} while (o && !l);
										if (s) {
											var d, f;
											if ("bracket" === s) d = this.session.getBracketRange(
												i), d || (d = new g(n.getCurrentTokenRow(), n
														.getCurrentTokenColumn() + h - 1, n
														.getCurrentTokenRow(), n
														.getCurrentTokenColumn() + h - 1), f = d
													.start, (t || f.row === i.row && Math.abs(f
														.column - i.column) < 2) && (d = this
														.session.getBracketRange(f)));
											else if ("tag" === s) {
												if (!o || -1 === o.type.indexOf("tag-name")) return;
												var p = o.value;
												if (d = new g(n.getCurrentTokenRow(), n
														.getCurrentTokenColumn() - 2, n
														.getCurrentTokenRow(), n
														.getCurrentTokenColumn() - 2), 0 === d
													.compare(i.row, i.column)) {
													l = !1;
													do {
														o = r, r = n.stepBackward(), r && (-1 !== r
															.type.indexOf("tag-close") && d
															.setEnd(n.getCurrentTokenRow(), n
																.getCurrentTokenColumn() + 1), o
															.value === p && -1 !== o.type
															.indexOf("tag-name") && ("<" === r
																.value ? c[p]++ : "</" === r
																.value && c[p]--, 0 === c[p] &&
																(l = !0)))
													} while (r && !l)
												}
												o && o.type.indexOf("tag-name") && (f = d.start, f
													.row == i.row && Math.abs(f.column - i
														.column) < 2 && (f = d.end))
											}
											f = d && d.cursor || f, f && (e ? d && t ? this
												.selection.setRange(d) : d && d.isEqual(this
													.getSelectionRange()) ? this
												.clearSelection() : this.selection.selectTo(f
													.row, f.column) : this.selection.moveTo(f
													.row, f.column))
										}
									}
								}, this.gotoLine = function(e, t, i) {
									this.selection.clearSelection(), this.session.unfold({
											row: e - 1,
											column: t || 0
										}), this.$blockScrolling += 1, this.exitMultiSelectMode &&
										this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t ||
										0), this.$blockScrolling -= 1, this.isRowFullyVisible(e -
										1) || this.scrollToLine(e - 1, !0, i)
								}, this.navigateTo = function(e, t) {
									this.selection.moveTo(e, t)
								}, this.navigateUp = function(e) {
									if (this.selection.isMultiLine() && !this.selection
										.isBackwards()) {
										var t = this.selection.anchor.getPosition();
										return this.moveCursorToPosition(t)
									}
									this.selection.clearSelection(), this.selection.moveCursorBy(-
										e || -1, 0)
								}, this.navigateDown = function(e) {
									if (this.selection.isMultiLine() && this.selection
									.isBackwards()) {
										var t = this.selection.anchor.getPosition();
										return this.moveCursorToPosition(t)
									}
									this.selection.clearSelection(), this.selection.moveCursorBy(
										e || 1, 0)
								}, this.navigateLeft = function(e) {
									if (this.selection.isEmpty()) {
										e = e || 1;
										while (e--) this.selection.moveCursorLeft()
									} else {
										var t = this.getSelectionRange().start;
										this.moveCursorToPosition(t)
									}
									this.clearSelection()
								}, this.navigateRight = function(e) {
									if (this.selection.isEmpty()) {
										e = e || 1;
										while (e--) this.selection.moveCursorRight()
									} else {
										var t = this.getSelectionRange().end;
										this.moveCursorToPosition(t)
									}
									this.clearSelection()
								}, this.navigateLineStart = function() {
									this.selection.moveCursorLineStart(), this.clearSelection()
								}, this.navigateLineEnd = function() {
									this.selection.moveCursorLineEnd(), this.clearSelection()
								}, this.navigateFileEnd = function() {
									this.selection.moveCursorFileEnd(), this.clearSelection()
								}, this.navigateFileStart = function() {
									this.selection.moveCursorFileStart(), this.clearSelection()
								}, this.navigateWordRight = function() {
									this.selection.moveCursorWordRight(), this.clearSelection()
								}, this.navigateWordLeft = function() {
									this.selection.moveCursorWordLeft(), this.clearSelection()
								}, this.replace = function(e, t) {
									t && this.$search.set(t);
									var i = this.$search.find(this.session),
										n = 0;
									return i ? (this.$tryReplace(i, e) && (n = 1), null !== i && (
										this.selection.setSelectionRange(i), this.renderer
										.scrollSelectionIntoView(i.start, i.end)), n) : n
								}, this.replaceAll = function(e, t) {
									t && this.$search.set(t);
									var i = this.$search.findAll(this.session),
										n = 0;
									if (!i.length) return n;
									this.$blockScrolling += 1;
									var r = this.getSelectionRange();
									this.selection.moveTo(0, 0);
									for (var o = i.length - 1; o >= 0; --o) this.$tryReplace(i[o],
										e) && n++;
									return this.selection.setSelectionRange(r), this
										.$blockScrolling -= 1, n
								}, this.$tryReplace = function(e, t) {
									var i = this.session.getTextRange(e);
									return t = this.$search.replace(i, t), null !== t ? (e.end =
										this.session.replace(e, t), e) : null
								}, this.getLastSearchOptions = function() {
									return this.$search.getOptions()
								}, this.find = function(e, t, i) {
									t || (t = {}), "string" == typeof e || e instanceof RegExp ? t
										.needle = e : "object" == typeof e && n.mixin(t, e);
									var r = this.selection.getRange();
									null == t.needle && (e = this.session.getTextRange(r) || this
										.$search.$options.needle, e || (r = this.session
											.getWordRange(r.start.row, r.start.column), e = this
											.session.getTextRange(r)), this.$search.set({
											needle: e
										})), this.$search.set(t), t.start || this.$search.set({
										start: r
									});
									var o = this.$search.find(this.session);
									return t.preventScroll ? o : o ? (this.revealRange(o, i), o) : (
										t.backwards ? r.start = r.end : r.end = r.start,
										void this.selection.setRange(r))
								}, this.findNext = function(e, t) {
									this.find({
										skipCurrent: !0,
										backwards: !1
									}, e, t)
								}, this.findPrevious = function(e, t) {
									this.find(e, {
										skipCurrent: !0,
										backwards: !0
									}, t)
								}, this.revealRange = function(e, t) {
									this.$blockScrolling += 1, this.session.unfold(e), this
										.selection.setSelectionRange(e), this.$blockScrolling -= 1;
									var i = this.renderer.scrollTop;
									this.renderer.scrollSelectionIntoView(e.start, e.end, .5), !
										1 !== t && this.renderer.animateScrolling(i)
								}, this.undo = function() {
									this.$blockScrolling++, this.session.getUndoManager().undo(),
										this.$blockScrolling--, this.renderer.scrollCursorIntoView(
											null, .5)
								}, this.redo = function() {
									this.$blockScrolling++, this.session.getUndoManager().redo(),
										this.$blockScrolling--, this.renderer.scrollCursorIntoView(
											null, .5)
								}, this.destroy = function() {
									this.renderer.destroy(), this._signal("destroy", this), this
										.session && this.session.destroy()
								}, this.setAutoScrollEditorIntoView = function(e) {
									if (e) {
										var t, i = this,
											n = !1;
										this.$scrollAnchor || (this.$scrollAnchor = document
											.createElement("div"));
										var r = this.$scrollAnchor;
										r.style.cssText = "position:absolute", this.container
											.insertBefore(r, this.container.firstChild);
										var o = this.on("changeSelection", (function() {
												n = !0
											})),
											s = this.renderer.on("beforeRender", (function() {
												n && (t = i.renderer.container
													.getBoundingClientRect())
											})),
											a = this.renderer.on("afterRender", (function() {
												if (n && t && (i.isFocused() || i
														.searchBox && i.searchBox
														.isFocused())) {
													var e = i.renderer,
														o = e.$cursorLayer.$pixelPos,
														s = e.layerConfig,
														a = o.top - s.offset;
													n = o.top >= 0 && a + t.top < 0 || !(o
															.top < s.height && o.top + t
															.top + s.lineHeight > window
															.innerHeight) && null, null !=
														n && (r.style.top = a + "px", r
															.style.left = o.left + "px", r
															.style.height = s.lineHeight +
															"px", r.scrollIntoView(n)), n =
														t = null
												}
											}));
										this.setAutoScrollEditorIntoView = function(e) {
											e || (delete this.setAutoScrollEditorIntoView, this
												.off("changeSelection", o), this.renderer
												.off("afterRender", a), this.renderer.off(
													"beforeRender", s))
										}
									}
								}, this.$resetCursorStyle = function() {
									var e = this.$cursorStyle || "ace",
										t = this.renderer.$cursorLayer;
									t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !
										this.$readOnly && "wide" != e, r.setCssClass(t.element,
											"ace_slim-cursors", /slim/.test(e)))
								}
						}.call(b.prototype), v.defineOptions(b.prototype, "editor", {
							selectionStyle: {
								set: function(e) {
									this.onSelectionChange(), this._signal(
										"changeSelectionStyle", {
											data: e
										})
								},
								initialValue: "line"
							},
							highlightActiveLine: {
								set: function() {
									this.$updateHighlightActiveLine()
								},
								initialValue: !0
							},
							highlightSelectedWord: {
								set: function(e) {
									this.$onSelectionChange()
								},
								initialValue: !0
							},
							readOnly: {
								set: function(e) {
									this.$resetCursorStyle()
								},
								initialValue: !1
							},
							cursorStyle: {
								set: function(e) {
									this.$resetCursorStyle()
								},
								values: ["ace", "slim", "smooth", "wide"],
								initialValue: "ace"
							},
							mergeUndoDeltas: {
								values: [!1, !0, "always"],
								initialValue: !0
							},
							behavioursEnabled: {
								initialValue: !0
							},
							wrapBehavioursEnabled: {
								initialValue: !0
							},
							autoScrollEditorIntoView: {
								set: function(e) {
									this.setAutoScrollEditorIntoView(e)
								}
							},
							keyboardHandler: {
								set: function(e) {
									this.setKeyboardHandler(e)
								},
								get: function() {
									return this.keybindingId
								},
								handlesSet: !0
							},
							hScrollBarAlwaysVisible: "renderer",
							vScrollBarAlwaysVisible: "renderer",
							highlightGutterLine: "renderer",
							animatedScroll: "renderer",
							showInvisibles: "renderer",
							showPrintMargin: "renderer",
							printMarginColumn: "renderer",
							printMargin: "renderer",
							fadeFoldWidgets: "renderer",
							showFoldWidgets: "renderer",
							showLineNumbers: "renderer",
							showGutter: "renderer",
							displayIndentGuides: "renderer",
							fontSize: "renderer",
							fontFamily: "renderer",
							maxLines: "renderer",
							minLines: "renderer",
							scrollPastEnd: "renderer",
							fixedWidthGutter: "renderer",
							theme: "renderer",
							scrollSpeed: "$mouseHandler",
							dragDelay: "$mouseHandler",
							dragEnabled: "$mouseHandler",
							focusTimout: "$mouseHandler",
							tooltipFollowsMouse: "$mouseHandler",
							firstLineNumber: "session",
							overwrite: "session",
							newLineMode: "session",
							useWorker: "session",
							useSoftTabs: "session",
							tabSize: "session",
							wrap: "session",
							indentedSoftWrap: "session",
							foldStyle: "session",
							mode: "session"
						}), t.Editor = b
				})), ace.define("ace/undomanager", ["require", "exports", "module"], (function(e, t, i) {
					"use strict";
					var n = function() {
						this.reset()
					};
					(function() {
						function e(e) {
							return {
								action: e.action,
								start: e.start,
								end: e.end,
								lines: 1 == e.lines.length ? null : e.lines,
								text: 1 == e.lines.length ? e.lines[0] : null
							}
						}

						function t(e) {
							return {
								action: e.action,
								start: e.start,
								end: e.end,
								lines: e.lines || [e.text]
							}
						}

						function i(e, t) {
							for (var i = new Array(e.length), n = 0; n < e.length; n++) {
								for (var r = e[n], o = {
										group: r.group,
										deltas: new Array(r.length)
									}, s = 0; s < r.deltas.length; s++) {
									var a = r.deltas[s];
									o.deltas[s] = t(a)
								}
								i[n] = o
							}
							return i
						}
						this.execute = function(e) {
							var t = e.args[0];
							this.$doc = e.args[1], e.merge && this.hasUndo() && (this
									.dirtyCounter--, t = this.$undoStack.pop().concat(t)),
								this.$undoStack.push(t), this.$redoStack = [], this
								.dirtyCounter < 0 && (this.dirtyCounter = NaN), this
								.dirtyCounter++
						}, this.undo = function(e) {
							var t = this.$undoStack.pop(),
								i = null;
							return t && (i = this.$doc.undoChanges(t, e), this.$redoStack
								.push(t), this.dirtyCounter--), i
						}, this.redo = function(e) {
							var t = this.$redoStack.pop(),
								i = null;
							return t && (i = this.$doc.redoChanges(this.$deserializeDeltas(
									t), e), this.$undoStack.push(t), this
								.dirtyCounter++), i
						}, this.reset = function() {
							this.$undoStack = [], this.$redoStack = [], this.dirtyCounter =
								0
						}, this.hasUndo = function() {
							return this.$undoStack.length > 0
						}, this.hasRedo = function() {
							return this.$redoStack.length > 0
						}, this.markClean = function() {
							this.dirtyCounter = 0
						}, this.isClean = function() {
							return 0 === this.dirtyCounter
						}, this.$serializeDeltas = function(t) {
							return i(t, e)
						}, this.$deserializeDeltas = function(e) {
							return i(e, t)
						}
					}).call(n.prototype), t.UndoManager = n
				})), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom",
					"ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/dom"),
						r = e("../lib/oop"),
						o = e("../lib/lang"),
						s = e("../lib/event_emitter").EventEmitter,
						a = function(e) {
							this.element = n.createElement("div"), this.element.className =
								"ace_layer ace_gutter-layer", e.appendChild(this.element), this
								.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0,
								this.$annotations = [], this.$updateAnnotations = this
								.$updateAnnotations.bind(this), this.$cells = []
						};
					(function() {
						r.implement(this, s), this.setSession = function(e) {
								this.session && this.session.removeEventListener("change", this
									.$updateAnnotations), this.session = e, e && e.on(
									"change", this.$updateAnnotations)
							}, this.addGutterDecoration = function(e, t) {
								window.console && console.warn && console.warn(
										"deprecated use session.addGutterDecoration"), this
									.session.addGutterDecoration(e, t)
							}, this.removeGutterDecoration = function(e, t) {
								window.console && console.warn && console.warn(
										"deprecated use session.removeGutterDecoration"), this
									.session.removeGutterDecoration(e, t)
							}, this.setAnnotations = function(e) {
								this.$annotations = [];
								for (var t = 0; t < e.length; t++) {
									var i = e[t],
										n = i.row,
										r = this.$annotations[n];
									r || (r = this.$annotations[n] = {
										text: []
									});
									var s = i.text;
									s = s ? o.escapeHTML(s) : i.html || "", -1 === r.text
										.indexOf(s) && r.text.push(s);
									var a = i.type;
									"error" == a ? r.className = " ace_error" : "warning" ==
										a && " ace_error" != r.className ? r.className =
										" ace_warning" : "info" != a || r.className || (r
											.className = " ace_info")
								}
							}, this.$updateAnnotations = function(e) {
								if (this.$annotations.length) {
									var t = e.start.row,
										i = e.end.row - t;
									if (0 === i);
									else if ("remove" == e.action) this.$annotations.splice(t,
										i + 1, null);
									else {
										var n = new Array(i + 1);
										n.unshift(t, 1), this.$annotations.splice.apply(this
											.$annotations, n)
									}
								}
							}, this.update = function(e) {
								var t = this.session,
									i = e.firstRow,
									r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1),
									o = t.getNextFoldLine(i),
									s = o ? o.start.row : 1 / 0,
									a = this.$showFoldWidgets && t.foldWidgets,
									l = t.$breakpoints,
									c = t.$decorations,
									h = t.$firstLineNumber,
									u = 0,
									d = t.gutterRenderer || this.$renderer,
									g = null,
									f = -1,
									p = i;
								while (1) {
									if (p > s && (p = o.end.row + 1, o = t.getNextFoldLine(p,
											o), s = o ? o.start.row : 1 / 0), p > r) {
										while (this.$cells.length > f + 1) g = this.$cells
										.pop(), this.element.removeChild(g.element);
										break
									}
									g = this.$cells[++f], g || (g = {
											element: null,
											textNode: null,
											foldWidget: null
										}, g.element = n.createElement("div"), g.textNode =
										document.createTextNode(""), g.element.appendChild(g
											.textNode), this.element.appendChild(g.element),
										this.$cells[f] = g);
									var m = "ace_gutter-cell ";
									l[p] && (m += l[p]), c[p] && (m += c[p]), this.$annotations[
											p] && (m += this.$annotations[p].className), g
										.element.className != m && (g.element.className = m);
									var v = t.getRowLength(p) * e.lineHeight + "px";
									if (v != g.element.style.height && (g.element.style.height =
											v), a) {
										var w = a[p];
										null == w && (w = a[p] = t.getFoldWidget(p))
									}
									if (w) {
										g.foldWidget || (g.foldWidget = n.createElement("span"),
											g.element.appendChild(g.foldWidget));
										m = "ace_fold-widget ace_" + w;
										"start" == w && p == s && p < o.end.row ? m +=
											" ace_closed" : m += " ace_open", g.foldWidget
											.className != m && (g.foldWidget.className = m);
										v = e.lineHeight + "px";
										g.foldWidget.style.height != v && (g.foldWidget.style
											.height = v)
									} else g.foldWidget && (g.element.removeChild(g.foldWidget),
										g.foldWidget = null);
									var b = u = d ? d.getText(t, p) : p + h;
									b !== g.textNode.data && (g.textNode.data = b), p++
								}
								this.element.style.height = e.minHeight + "px", (this
									.$fixedWidth || t.$useWrapMode) && (u = t.getLength() +
									h);
								var A = d ? d.getWidth(t, u, e) : u.toString().length * e
									.characterWidth,
									C = this.$padding || this.$computePadding();
								A += C.left + C.right, A === this.gutterWidth || isNaN(A) || (
									this.gutterWidth = A, this.element.style.width = Math
									.ceil(this.gutterWidth) + "px", this._emit(
										"changeGutterWidth", A))
							}, this.$fixedWidth = !1, this.$showLineNumbers = !0, this
							.$renderer = "", this.setShowLineNumbers = function(e) {
								this.$renderer = !e && {
									getWidth: function() {
										return ""
									},
									getText: function() {
										return ""
									}
								}
							}, this.getShowLineNumbers = function() {
								return this.$showLineNumbers
							}, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(
							e) {
								e ? n.addCssClass(this.element, "ace_folding-enabled") : n
									.removeCssClass(this.element, "ace_folding-enabled"), this
									.$showFoldWidgets = e, this.$padding = null
							}, this.getShowFoldWidgets = function() {
								return this.$showFoldWidgets
							}, this.$computePadding = function() {
								if (!this.element.firstChild) return {
									left: 0,
									right: 0
								};
								var e = n.computedStyle(this.element.firstChild);
								return this.$padding = {}, this.$padding.left = parseInt(e
									.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e
									.paddingRight) || 0, this.$padding
							}, this.getRegion = function(e) {
								var t = this.$padding || this.$computePadding(),
									i = this.element.getBoundingClientRect();
								return e.x < t.left + i.left ? "markers" : this
									.$showFoldWidgets && e.x > i.right - t.right ?
									"foldWidgets" : void 0
							}
					}).call(a.prototype), t.Gutter = a
				})), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range",
					"ace/lib/dom"
				], (function(e, t, i) {
					"use strict";
					var n = e("../range").Range,
						r = e("../lib/dom"),
						o = function(e) {
							this.element = r.createElement("div"), this.element.className =
								"ace_layer ace_marker-layer", e.appendChild(this.element)
						};
					(function() {
						function e(e, t, i, n) {
							return (e ? 1 : 0) | (t ? 2 : 0) | (i ? 4 : 0) | (n ? 8 : 0)
						}
						this.$padding = 0, this.setPadding = function(e) {
							this.$padding = e
						}, this.setSession = function(e) {
							this.session = e
						}, this.setMarkers = function(e) {
							this.markers = e
						}, this.update = function(e) {
							if (e) {
								this.config = e;
								var t = [];
								for (var i in this.markers) {
									var n = this.markers[i];
									if (n.range) {
										var r = n.range.clipRows(e.firstRow, e.lastRow);
										if (!r.isEmpty())
											if (r = r.toScreenRange(this.session), n
												.renderer) {
												var o = this.$getTop(r.start.row, e),
													s = this.$padding + (this.session
														.$bidiHandler.isBidiRow(r.start
														.row) ? this.session.$bidiHandler
														.getPosLeft(r.start.column) : r
														.start.column * e.characterWidth);
												n.renderer(t, r, s, o, e)
											} else "fullLine" == n.type ? this
												.drawFullLineMarker(t, r, n.clazz, e) :
												"screenLine" == n.type ? this
												.drawScreenLineMarker(t, r, n.clazz, e) : r
												.isMultiLine() ? "text" == n.type ? this
												.drawTextMarker(t, r, n.clazz, e) : this
												.drawMultiLineMarker(t, r, n.clazz, e) :
												this.session.$bidiHandler.isBidiRow(r.start
													.row) ? this.drawBidiSingleLineMarker(t,
													r, n.clazz + " ace_start ace_br15", e) :
												this.drawSingleLineMarker(t, r, n.clazz +
													" ace_start ace_br15", e)
									} else n.update(t, this, this.session, e)
								}
								this.element.innerHTML = t.join("")
							}
						}, this.$getTop = function(e, t) {
							return (e - t.firstRowScreen) * t.lineHeight
						}, this.drawTextMarker = function(t, i, r, o, s) {
							for (var a = this.session, l = i.start.row, c = i.end.row, h =
									l, u = 0, d = 0, g = a.getScreenLastRowColumn(h), f =
									null, p = new n(h, i.start.column, h, d); h <= c; h++) p
								.start.row = p.end.row = h, p.start.column = h == l ? i
								.start.column : a.getRowWrapIndent(h), p.end.column = g, u =
								d, d = g, g = h + 1 < c ? a.getScreenLastRowColumn(h + 1) :
								h == c ? 0 : i.end.column, f = r + (h == l ? " ace_start" :
									"") + " ace_br" + e(h == l || h == l + 1 && i.start
									.column, u < d, d > g, h == c), this.session
								.$bidiHandler.isBidiRow(h) ? this.drawBidiSingleLineMarker(
									t, p, f, o, h == c ? 0 : 1, s) : this
								.drawSingleLineMarker(t, p, f, o, h == c ? 0 : 1, s)
						}, this.drawMultiLineMarker = function(e, t, i, n, r) {
							var o, s, a, l = this.$padding;
							if (r = r || "", this.session.$bidiHandler.isBidiRow(t.start
									.row)) {
								var c = t.clone();
								c.end.row = c.start.row, c.end.column = this.session
									.getLine(c.start.row).length, this
									.drawBidiSingleLineMarker(e, c, i +
										" ace_br1 ace_start", n, null, r)
							} else o = n.lineHeight, s = this.$getTop(t.start.row, n), a =
								l + t.start.column * n.characterWidth, e.push(
									"<div class='", i, " ace_br1 ace_start' style='",
									"height:", o, "px;", "right:0;", "top:", s, "px;",
									"left:", a, "px;", r, "'></div>");
							if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
								c = t.clone();
								c.start.row = c.end.row, c.start.column = 0, this
									.drawBidiSingleLineMarker(e, c, i + " ace_br12", n,
										null, r)
							} else {
								var h = t.end.column * n.characterWidth;
								o = n.lineHeight, s = this.$getTop(t.end.row, n), e.push(
									"<div class='", i, " ace_br12' style='", "height:",
									o, "px;", "width:", h, "px;", "top:", s, "px;",
									"left:", l, "px;", r, "'></div>")
							}
							if (o = (t.end.row - t.start.row - 1) * n.lineHeight, !(o <=
								0)) {
								s = this.$getTop(t.start.row + 1, n);
								var u = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
								e.push("<div class='", i, u ? " ace_br" + u : "",
									"' style='", "height:", o, "px;", "right:0;",
									"top:", s, "px;", "left:", l, "px;", r, "'></div>")
							}
						}, this.drawSingleLineMarker = function(e, t, i, n, r, o) {
							var s = n.lineHeight,
								a = (t.end.column + (r || 0) - t.start.column) * n
								.characterWidth,
								l = this.$getTop(t.start.row, n),
								c = this.$padding + t.start.column * n.characterWidth;
							e.push("<div class='", i, "' style='", "height:", s, "px;",
								"width:", a, "px;", "top:", l, "px;", "left:", c, "px;",
								o || "", "'></div>")
						}, this.drawBidiSingleLineMarker = function(e, t, i, n, r, o) {
							var s = n.lineHeight,
								a = this.$getTop(t.start.row, n),
								l = this.$padding,
								c = this.session.$bidiHandler.getSelections(t.start.column,
									t.end.column);
							c.forEach((function(t) {
								e.push("<div class='", i, "' style='",
									"height:", s, "px;", "width:", t.width +
									(r || 0), "px;", "top:", a, "px;",
									"left:", l + t.left, "px;", o || "",
									"'></div>")
							}))
						}, this.drawFullLineMarker = function(e, t, i, n, r) {
							var o = this.$getTop(t.start.row, n),
								s = n.lineHeight;
							t.start.row != t.end.row && (s += this.$getTop(t.end.row, n) -
								o), e.push("<div class='", i, "' style='", "height:", s,
								"px;", "top:", o, "px;", "left:0;right:0;", r || "",
								"'></div>")
						}, this.drawScreenLineMarker = function(e, t, i, n, r) {
							var o = this.$getTop(t.start.row, n),
								s = n.lineHeight;
							e.push("<div class='", i, "' style='", "height:", s, "px;",
								"top:", o, "px;", "left:0;right:0;", r || "", "'></div>"
								)
						}
					}).call(o.prototype), t.Marker = o
				})), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/oop"),
						r = e("../lib/dom"),
						o = e("../lib/lang"),
						s = (e("../lib/useragent"), e("../lib/event_emitter").EventEmitter),
						a = function(e) {
							this.element = r.createElement("div"), this.element.className =
								"ace_layer ace_text-layer", e.appendChild(this.element), this
								.$updateEolChar = this.$updateEolChar.bind(this)
						};
					(function() {
						n.implement(this, s), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this
							.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this
							.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this
							.$updateEolChar = function() {
								var e = "\n" == this.session.doc.getNewLineCharacter() ? this
									.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
								if (this.EOL_CHAR != e) return this.EOL_CHAR = e, !0
							}, this.setPadding = function(e) {
								this.$padding = e, this.element.style.padding = "0 " + e + "px"
							}, this.getLineHeight = function() {
								return this.$fontMetrics.$characterSize.height || 0
							}, this.getCharacterWidth = function() {
								return this.$fontMetrics.$characterSize.width || 0
							}, this.$setFontMetrics = function(e) {
								this.$fontMetrics = e, this.$fontMetrics.on(
									"changeCharacterSize",
									function(e) {
										this._signal("changeCharacterSize", e)
									}.bind(this)), this.$pollSizeChanges()
							}, this.checkForSizeChanges = function() {
								this.$fontMetrics.checkForSizeChanges()
							}, this.$pollSizeChanges = function() {
								return this.$pollSizeChangesTimer = this.$fontMetrics
									.$pollSizeChanges()
							}, this.setSession = function(e) {
								this.session = e, e && this.$computeTabString()
							}, this.showInvisibles = !1, this.setShowInvisibles = function(e) {
								return this.showInvisibles != e && (this.showInvisibles = e,
									this.$computeTabString(), !0)
							}, this.displayIndentGuides = !0, this.setDisplayIndentGuides =
							function(e) {
								return this.displayIndentGuides != e && (this
									.displayIndentGuides = e, this.$computeTabString(), !0)
							}, this.$tabStrings = [], this.onChangeTabSize = this
							.$computeTabString = function() {
								var e = this.session.getTabSize();
								this.tabSize = e;
								for (var t = this.$tabStrings = [0], i = 1; i < e + 1; i++) this
									.showInvisibles ? t.push(
										"<span class='ace_invisible ace_invisible_tab'>" + o
										.stringRepeat(this.TAB_CHAR, i) + "</span>") : t.push(o
										.stringRepeat(" ", i));
								if (this.displayIndentGuides) {
									this.$indentGuideRe = /\s\S| \t|\t |\s$/;
									var n = "ace_indent-guide",
										r = "",
										s = "";
									if (this.showInvisibles) {
										n += " ace_invisible", r = " ace_invisible_space", s =
											" ace_invisible_tab";
										var a = o.stringRepeat(this.SPACE_CHAR, this.tabSize),
											l = o.stringRepeat(this.TAB_CHAR, this.tabSize)
									} else a = o.stringRepeat(" ", this.tabSize), l = a;
									this.$tabStrings[" "] = "<span class='" + n + r + "'>" + a +
										"</span>", this.$tabStrings["\t"] = "<span class='" +
										n + s + "'>" + l + "</span>"
								}
							}, this.updateLines = function(e, t, i) {
								this.config.lastRow == e.lastRow && this.config.firstRow == e
									.firstRow || this.scrollLines(e), this.config = e;
								for (var n = Math.max(t, e.firstRow), r = Math.min(i, e
										.lastRow), o = this.element.childNodes, s = 0, a = e
										.firstRow; a < n; a++) {
									var l = this.session.getFoldLine(a);
									if (l) {
										if (l.containsRow(n)) {
											n = l.start.row;
											break
										}
										a = l.end.row
									}
									s++
								}
								a = n, l = this.session.getNextFoldLine(a);
								var c = l ? l.start.row : 1 / 0;
								while (1) {
									if (a > c && (a = l.end.row + 1, l = this.session
											.getNextFoldLine(a, l), c = l ? l.start.row : 1 / 0
											), a > r) break;
									var h = o[s++];
									if (h) {
										var u = [];
										this.$renderLine(u, a, !this.$useLineGroups(), a == c &&
												l), h.style.height = e.lineHeight * this.session
											.getRowLength(a) + "px", h.innerHTML = u.join("")
									}
									a++
								}
							}, this.scrollLines = function(e) {
								var t = this.config;
								if (this.config = e, !t || t.lastRow < e.firstRow) return this
									.update(e);
								if (e.lastRow < t.firstRow) return this.update(e);
								var i = this.element;
								if (t.firstRow < e.firstRow)
									for (var n = this.session.getFoldedRowCount(t.firstRow, e
											.firstRow - 1); n > 0; n--) i.removeChild(i
										.firstChild);
								if (t.lastRow > e.lastRow)
									for (n = this.session.getFoldedRowCount(e.lastRow + 1, t
											.lastRow); n > 0; n--) i.removeChild(i.lastChild);
								if (e.firstRow < t.firstRow) {
									var r = this.$renderLinesFragment(e, e.firstRow, t
										.firstRow - 1);
									i.firstChild ? i.insertBefore(r, i.firstChild) : i
										.appendChild(r)
								}
								if (e.lastRow > t.lastRow) {
									r = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
									i.appendChild(r)
								}
							}, this.$renderLinesFragment = function(e, t, i) {
								var n = this.element.ownerDocument.createDocumentFragment(),
									o = t,
									s = this.session.getNextFoldLine(o),
									a = s ? s.start.row : 1 / 0;
								while (1) {
									if (o > a && (o = s.end.row + 1, s = this.session
											.getNextFoldLine(o, s), a = s ? s.start.row : 1 / 0
											), o > i) break;
									var l = r.createElement("div"),
										c = [];
									if (this.$renderLine(c, o, !1, o == a && s), l.innerHTML = c
										.join(""), this.$useLineGroups()) l.className =
										"ace_line_group", n.appendChild(l), l.style.height = e
										.lineHeight * this.session.getRowLength(o) + "px";
									else
										while (l.firstChild) n.appendChild(l.firstChild);
									o++
								}
								return n
							}, this.update = function(e) {
								this.config = e;
								var t = [],
									i = e.firstRow,
									n = e.lastRow,
									r = i,
									o = this.session.getNextFoldLine(r),
									s = o ? o.start.row : 1 / 0;
								while (1) {
									if (r > s && (r = o.end.row + 1, o = this.session
											.getNextFoldLine(r, o), s = o ? o.start.row : 1 / 0
											), r > n) break;
									this.$useLineGroups() && t.push(
											"<div class='ace_line_group' style='height:", e
											.lineHeight * this.session.getRowLength(r), "px'>"),
										this.$renderLine(t, r, !1, r == s && o), this
										.$useLineGroups() && t.push("</div>"), r++
								}
								this.element.innerHTML = t.join("")
							}, this.$textToken = {
								text: !0,
								rparen: !0,
								lparen: !0
							}, this.$renderToken = function(e, t, i, n) {
								var r = this,
									s =
									/\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
									a = function(e, i, n, s, a) {
										if (i) return r.showInvisibles ?
											"<span class='ace_invisible ace_invisible_space'>" +
											o.stringRepeat(r.SPACE_CHAR, e.length) +
											"</span>" : e;
										if ("&" == e) return "&#38;";
										if ("<" == e) return "&#60;";
										if (">" == e) return "&#62;";
										if ("\t" == e) {
											var l = r.session.getScreenTabSize(t + s);
											return t += l - 1, r.$tabStrings[l]
										}
										if ("　" == e) {
											var c = r.showInvisibles ?
												"ace_cjk ace_invisible ace_invisible_space" :
												"ace_cjk",
												h = r.showInvisibles ? r.SPACE_CHAR : "";
											return t += 1, "<span class='" + c +
												"' style='width:" + 2 * r.config
												.characterWidth + "px'>" + h + "</span>"
										}
										return n ?
											"<span class='ace_invisible ace_invisible_space ace_invalid'>" +
											r.SPACE_CHAR + "</span>" : (t += 1,
												"<span class='ace_cjk' style='width:" + 2 * r
												.config.characterWidth + "px'>" + e + "</span>")
									},
									l = n.replace(s, a);
								if (this.$textToken[i.type]) e.push(l);
								else {
									var c = "ace_" + i.type.replace(/\./g, " ace_"),
										h = "";
									"fold" == i.type && (h = " style='width:" + i.value.length *
										this.config.characterWidth + "px;' "), e.push(
										"<span class='", c, "'", h, ">", l, "</span>")
								}
								return t + n.length
							}, this.renderIndentGuide = function(e, t, i) {
								var n = t.search(this.$indentGuideRe);
								return n <= 0 || n >= i ? t : " " == t[0] ? (n -= n % this
									.tabSize, e.push(o.stringRepeat(this.$tabStrings[" "],
										n / this.tabSize)), t.substr(n)) : "\t" == t[0] ? (e
									.push(o.stringRepeat(this.$tabStrings["\t"], n)), t
									.substr(n)) : t
							}, this.$renderWrappedLine = function(e, t, i, n) {
								for (var r = 0, s = 0, a = i[0], l = 0, c = 0; c < t
									.length; c++) {
									var h = t[c],
										u = h.value;
									if (0 == c && this.displayIndentGuides) {
										if (r = u.length, u = this.renderIndentGuide(e, u, a), !
											u) continue;
										r -= u.length
									}
									if (r + u.length < a) l = this.$renderToken(e, l, h, u),
										r += u.length;
									else {
										while (r + u.length >= a) l = this.$renderToken(e, l, h,
												u.substring(0, a - r)), u = u.substring(a - r),
											r = a, n || e.push("</div>",
												"<div class='ace_line' style='height:", this
												.config.lineHeight, "px'>"), e.push(o
												.stringRepeat(" ", i.indent)), s++, l = 0, a =
											i[s] || Number.MAX_VALUE;
										0 != u.length && (r += u.length, l = this.$renderToken(
											e, l, h, u))
									}
								}
							}, this.$renderSimpleLine = function(e, t) {
								var i = 0,
									n = t[0],
									r = n.value;
								this.displayIndentGuides && (r = this.renderIndentGuide(e, r)),
									r && (i = this.$renderToken(e, i, n, r));
								for (var o = 1; o < t.length; o++) n = t[o], r = n.value, i =
									this.$renderToken(e, i, n, r)
							}, this.$renderLine = function(e, t, i, n) {
								if (n || 0 == n || (n = this.session.getFoldLine(t)), n) var r =
									this.$getFoldLineTokens(t, n);
								else r = this.session.getTokens(t);
								if (i || e.push("<div class='ace_line' style='height:", this
										.config.lineHeight * (this.$useLineGroups() ? 1 : this
											.session.getRowLength(t)), "px'>"), r.length) {
									var o = this.session.getRowSplitData(t);
									o && o.length ? this.$renderWrappedLine(e, r, o, i) : this
										.$renderSimpleLine(e, r)
								}
								this.showInvisibles && (n && (t = n.end.row), e.push(
									"<span class='ace_invisible ace_invisible_eol'>",
									t == this.session.getLength() - 1 ? this.EOF_CHAR :
									this.EOL_CHAR, "</span>")), i || e.push("</div>")
							}, this.$getFoldLineTokens = function(e, t) {
								var i = this.session,
									n = [];

								function r(e, t, i) {
									var r = 0,
										o = 0;
									while (o + e[r].value.length < t)
										if (o += e[r].value.length, r++, r == e.length) return;
									if (o != t) {
										var s = e[r].value.substring(t - o);
										s.length > i - t && (s = s.substring(0, i - t)), n
									.push({
											type: e[r].type,
											value: s
										}), o = t + s.length, r += 1
									}
									while (o < i && r < e.length) {
										s = e[r].value;
										s.length + o > i ? n.push({
											type: e[r].type,
											value: s.substring(0, i - o)
										}) : n.push(e[r]), o += s.length, r += 1
									}
								}
								var o = i.getTokens(e);
								return t.walk((function(e, t, s, a, l) {
									null != e ? n.push({
										type: "fold",
										value: e
									}) : (l && (o = i.getTokens(t)), o.length &&
										r(o, a, s))
								}), t.end.row, this.session.getLine(t.end.row).length), n
							}, this.$useLineGroups = function() {
								return this.session.getUseWrapMode()
							}, this.destroy = function() {
								clearInterval(this.$pollSizeChangesTimer), this.$measureNode &&
									this.$measureNode.parentNode.removeChild(this.$measureNode),
									delete this.$measureNode
							}
					}).call(a.prototype), t.Text = a
				})), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], (
					function(e, t, i) {
						"use strict";
						var n, r = e("../lib/dom"),
							o = function(e) {
								this.element = r.createElement("div"), this.element.className =
									"ace_layer ace_cursor-layer", e.appendChild(this.element),
									void 0 === n && (n = !("opacity" in this.element.style)), this
									.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3,
									this.smoothBlinking = !1, this.cursors = [], this.cursor = this
									.addCursor(), r.addCssClass(this.element, "ace_hidden-cursors"),
									this.$updateCursors = (n ? this.$updateVisibility : this
										.$updateOpacity).bind(this)
							};
						(function() {
							this.$updateVisibility = function(e) {
								for (var t = this.cursors, i = t.length; i--;) t[i].style
									.visibility = e ? "" : "hidden"
							}, this.$updateOpacity = function(e) {
								for (var t = this.cursors, i = t.length; i--;) t[i].style
									.opacity = e ? "" : "0"
							}, this.$padding = 0, this.setPadding = function(e) {
								this.$padding = e
							}, this.setSession = function(e) {
								this.session = e
							}, this.setBlinking = function(e) {
								e != this.isBlinking && (this.isBlinking = e, this
								.restartTimer())
							}, this.setBlinkInterval = function(e) {
								e != this.blinkInterval && (this.blinkInterval = e, this
									.restartTimer())
							}, this.setSmoothBlinking = function(e) {
								e == this.smoothBlinking || n || (this.smoothBlinking = e, r
									.setCssClass(this.element, "ace_smooth-blinking", e),
									this.$updateCursors(!0), this.$updateCursors = this
									.$updateOpacity.bind(this), this.restartTimer())
							}, this.addCursor = function() {
								var e = r.createElement("div");
								return e.className = "ace_cursor", this.element.appendChild(e),
									this.cursors.push(e), e
							}, this.removeCursor = function() {
								if (this.cursors.length > 1) {
									var e = this.cursors.pop();
									return e.parentNode.removeChild(e), e
								}
							}, this.hideCursor = function() {
								this.isVisible = !1, r.addCssClass(this.element,
									"ace_hidden-cursors"), this.restartTimer()
							}, this.showCursor = function() {
								this.isVisible = !0, r.removeCssClass(this.element,
									"ace_hidden-cursors"), this.restartTimer()
							}, this.restartTimer = function() {
								var e = this.$updateCursors;
								if (clearInterval(this.intervalId), clearTimeout(this
									.timeoutId), this.smoothBlinking && r.removeCssClass(this
										.element, "ace_smooth-blinking"), e(!0), this
									.isBlinking && this.blinkInterval && this.isVisible) {
									this.smoothBlinking && setTimeout(function() {
										r.addCssClass(this.element,
											"ace_smooth-blinking")
									}.bind(this));
									var t = function() {
										this.timeoutId = setTimeout((function() {
											e(!1)
										}), .6 * this.blinkInterval)
									}.bind(this);
									this.intervalId = setInterval((function() {
										e(!0), t()
									}), this.blinkInterval), t()
								}
							}, this.getPixelPosition = function(e, t) {
								if (!this.config || !this.session) return {
									left: 0,
									top: 0
								};
								e || (e = this.session.selection.getCursor());
								var i = this.session.documentToScreenPosition(e),
									n = this.$padding + (this.session.$bidiHandler.isBidiRow(i
										.row, e.row) ? this.session.$bidiHandler.getPosLeft(
										i.column) : i.column * this.config.characterWidth),
									r = (i.row - (t ? this.config.firstRowScreen : 0)) * this
									.config.lineHeight;
								return {
									left: n,
									top: r
								}
							}, this.update = function(e) {
								this.config = e;
								var t = this.session.$selectionMarkers,
									i = 0,
									n = 0;
								void 0 !== t && 0 !== t.length || (t = [{
									cursor: null
								}]);
								i = 0;
								for (var r = t.length; i < r; i++) {
									var o = this.getPixelPosition(t[i].cursor, !0);
									if (!((o.top > e.height + e.offset || o.top < 0) && i >
										1)) {
										var s = (this.cursors[n++] || this.addCursor()).style;
										this.drawCursor ? this.drawCursor(s, o, e, t[i], this
											.session) : (s.left = o.left + "px", s.top = o
											.top + "px", s.width = e.characterWidth + "px",
											s.height = e.lineHeight + "px")
									}
								}
								while (this.cursors.length > n) this.removeCursor();
								var a = this.session.getOverwrite();
								this.$setOverwrite(a), this.$pixelPos = o, this.restartTimer()
							}, this.drawCursor = null, this.$setOverwrite = function(e) {
								e != this.overwrite && (this.overwrite = e, e ? r.addCssClass(
										this.element, "ace_overwrite-cursors") : r
									.removeCssClass(this.element, "ace_overwrite-cursors"))
							}, this.destroy = function() {
								clearInterval(this.intervalId), clearTimeout(this.timeoutId)
							}
						}).call(o.prototype), t.Cursor = o
					})), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/dom"),
						o = e("./lib/event"),
						s = e("./lib/event_emitter").EventEmitter,
						a = 32768,
						l = function(e) {
							this.element = r.createElement("div"), this.element.className =
								"ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = r
								.createElement("div"), this.inner.className = "ace_scrollbar-inner",
								this.element.appendChild(this.inner), e.appendChild(this.element),
								this.setVisible(!1), this.skipEvent = !1, o.addListener(this
									.element, "scroll", this.onScroll.bind(this)), o.addListener(
									this.element, "mousedown", o.preventDefault)
						};
					(function() {
						n.implement(this, s), this.setVisible = function(e) {
							this.element.style.display = e ? "" : "none", this.isVisible =
								e, this.coeff = 1
						}
					}).call(l.prototype);
					var c = function(e, t) {
						l.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t
							.$scrollbarWidth = this.width = r.scrollbarWidth(e.ownerDocument),
							this.inner.style.width = this.element.style.width = (this.width ||
								15) + 5 + "px", this.$minWidth = 0
					};
					n.inherits(c, l),
						function() {
							this.classSuffix = "-v", this.onScroll = function() {
								if (!this.skipEvent) {
									if (this.scrollTop = this.element.scrollTop, 1 != this
										.coeff) {
										var e = this.element.clientHeight / this.scrollHeight;
										this.scrollTop = this.scrollTop * (1 - e) / (this
											.coeff - e)
									}
									this._emit("scroll", {
										data: this.scrollTop
									})
								}
								this.skipEvent = !1
							}, this.getWidth = function() {
								return Math.max(this.isVisible ? this.width : 0, this
									.$minWidth || 0)
							}, this.setHeight = function(e) {
								this.element.style.height = e + "px"
							}, this.setInnerHeight = this.setScrollHeight = function(e) {
								this.scrollHeight = e, e > a ? (this.coeff = a / e, e = a) :
									1 != this.coeff && (this.coeff = 1), this.inner.style
									.height = e + "px"
							}, this.setScrollTop = function(e) {
								this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e,
									this.element.scrollTop = e * this.coeff)
							}
						}.call(c.prototype);
					var h = function(e, t) {
						l.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth,
							this.inner.style.height = this.element.style.height = (this
								.height || 15) + 5 + "px"
					};
					n.inherits(h, l),
						function() {
							this.classSuffix = "-h", this.onScroll = function() {
								this.skipEvent || (this.scrollLeft = this.element.scrollLeft,
									this._emit("scroll", {
										data: this.scrollLeft
									})), this.skipEvent = !1
							}, this.getHeight = function() {
								return this.isVisible ? this.height : 0
							}, this.setWidth = function(e) {
								this.element.style.width = e + "px"
							}, this.setInnerWidth = function(e) {
								this.inner.style.width = e + "px"
							}, this.setScrollWidth = function(e) {
								this.inner.style.width = e + "px"
							}, this.setScrollLeft = function(e) {
								this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft =
									this.element.scrollLeft = e)
							}
						}.call(h.prototype), t.ScrollBar = c, t.ScrollBarV = c, t.ScrollBarH = h, t
						.VScrollBar = c, t.HScrollBar = h
				})), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], (
					function(e, t, i) {
						"use strict";
						var n = e("./lib/event"),
							r = function(e, t) {
								this.onRender = e, this.pending = !1, this.changes = 0, this.window =
									t || window
							};
						(function() {
							this.schedule = function(e) {
								if (this.changes = this.changes | e, !this.pending && this
									.changes) {
									this.pending = !0;
									var t = this;
									n.nextFrame((function() {
										var e;
										t.pending = !1;
										while (e = t.changes) t.changes = 0, t
											.onRender(e)
									}), this.window)
								}
							}
						}).call(r.prototype), t.RenderLoop = r
					})), ace.define("ace/layer/font_metrics", ["require", "exports", "module",
					"ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent",
					"ace/lib/event_emitter"
				], (function(e, t, i) {
					var n = e("../lib/oop"),
						r = e("../lib/dom"),
						o = e("../lib/lang"),
						s = e("../lib/useragent"),
						a = e("../lib/event_emitter").EventEmitter,
						l = 0,
						c = t.FontMetrics = function(e) {
							this.el = r.createElement("div"), this.$setMeasureNodeStyles(this.el
									.style, !0), this.$main = r.createElement("div"), this
								.$setMeasureNodeStyles(this.$main.style), this.$measureNode = r
								.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode
									.style), this.el.appendChild(this.$main), this.el.appendChild(
									this.$measureNode), e.appendChild(this.el), l || this
								.$testFractionalRect(), this.$measureNode.innerHTML = o
								.stringRepeat("X", l), this.$characterSize = {
									width: 0,
									height: 0
								}, this.checkForSizeChanges()
						};
					(function() {
						n.implement(this, a), this.$characterSize = {
							width: 0,
							height: 0
						}, this.$testFractionalRect = function() {
							var e = r.createElement("div");
							this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px",
								document.documentElement.appendChild(e);
							var t = e.getBoundingClientRect().width;
							l = t > 0 && t < 1 ? 50 : 100, e.parentNode.removeChild(e)
						}, this.$setMeasureNodeStyles = function(e, t) {
							e.width = e.height = "auto", e.left = e.top = "0px", e
								.visibility = "hidden", e.position = "absolute", e
								.whiteSpace = "pre", s.isIE < 8 ? e["font-family"] =
								"inherit" : e.font = "inherit", e.overflow = t ? "hidden" :
								"visible"
						}, this.checkForSizeChanges = function() {
							var e = this.$measureSizes();
							if (e && (this.$characterSize.width !== e.width || this
									.$characterSize.height !== e.height)) {
								this.$measureNode.style.fontWeight = "bold";
								var t = this.$measureSizes();
								this.$measureNode.style.fontWeight = "", this
									.$characterSize = e, this.charSizes = Object.create(
										null), this.allowBoldFonts = t && t.width === e
									.width && t.height === e.height, this._emit(
										"changeCharacterSize", {
											data: e
										})
							}
						}, this.$pollSizeChanges = function() {
							if (this.$pollSizeChangesTimer) return this
								.$pollSizeChangesTimer;
							var e = this;
							return this.$pollSizeChangesTimer = setInterval((function() {
								e.checkForSizeChanges()
							}), 500)
						}, this.setPolling = function(e) {
							e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (
								clearInterval(this.$pollSizeChangesTimer), this
								.$pollSizeChangesTimer = 0)
						}, this.$measureSizes = function() {
							if (50 === l) {
								var e = null;
								try {
									e = this.$measureNode.getBoundingClientRect()
								} catch (i) {
									e = {
										width: 0,
										height: 0
									}
								}
								var t = {
									height: e.height,
									width: e.width / l
								}
							} else t = {
								height: this.$measureNode.clientHeight,
								width: this.$measureNode.clientWidth / l
							};
							return 0 === t.width || 0 === t.height ? null : t
						}, this.$measureCharWidth = function(e) {
							this.$main.innerHTML = o.stringRepeat(e, l);
							var t = this.$main.getBoundingClientRect();
							return t.width / l
						}, this.getCharacterWidth = function(e) {
							var t = this.charSizes[e];
							return void 0 === t && (t = this.charSizes[e] = this
								.$measureCharWidth(e) / this.$characterSize.width), t
						}, this.destroy = function() {
							clearInterval(this.$pollSizeChangesTimer), this.el && this.el
								.parentNode && this.el.parentNode.removeChild(this.el)
						}
					}).call(c.prototype)
				})), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter",
					"ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar",
					"ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/dom"),
						o = e("./config"),
						s = e("./lib/useragent"),
						a = e("./layer/gutter").Gutter,
						l = e("./layer/marker").Marker,
						c = e("./layer/text").Text,
						h = e("./layer/cursor").Cursor,
						u = e("./scrollbar").HScrollBar,
						d = e("./scrollbar").VScrollBar,
						g = e("./renderloop").RenderLoop,
						f = e("./layer/font_metrics").FontMetrics,
						p = e("./lib/event_emitter").EventEmitter,
						m =
						'.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_text-input-ios {position: absolute !important;top: -100000px !important;left: -100000px !important;}';
					r.importCssString(m, "ace_editor.css");
					var v = function(e, t) {
						var i = this;
						this.container = e || r.createElement("div"), this
							.$keepTextAreaAtCursor = !s.isOldIE, r.addCssClass(this.container,
								"ace_editor"), this.setTheme(t), this.$gutter = r.createElement(
								"div"), this.$gutter.className = "ace_gutter", this.container
							.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden",
								!0), this.scroller = r.createElement("div"), this.scroller
							.className = "ace_scroller", this.container.appendChild(this
								.scroller), this.content = r.createElement("div"), this.content
							.className = "ace_content", this.scroller.appendChild(this.content),
							this.$gutterLayer = new a(this.$gutter), this.$gutterLayer.on(
								"changeGutterWidth", this.onGutterResize.bind(this)), this
							.$markerBack = new l(this.content);
						var n = this.$textLayer = new c(this.content);
						this.canvas = n.element, this.$markerFront = new l(this.content), this
							.$cursorLayer = new h(this.content), this.$horizScroll = !1, this
							.$vScroll = !1, this.scrollBar = this.scrollBarV = new d(this
								.container, this), this.scrollBarH = new u(this.container,
							this), this.scrollBarV.addEventListener("scroll", (function(e) {
								i.$scrollAnimation || i.session.setScrollTop(e.data - i
									.scrollMargin.top)
							})), this.scrollBarH.addEventListener("scroll", (function(e) {
								i.$scrollAnimation || i.session.setScrollLeft(e.data - i
									.scrollMargin.left)
							})), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
								row: 0,
								column: 0
							}, this.$fontMetrics = new f(this.container), this.$textLayer
							.$setFontMetrics(this.$fontMetrics), this.$textLayer
							.addEventListener("changeCharacterSize", (function(e) {
								i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i
									.$size.width, i.$size.height), i._signal(
									"changeCharacterSize", e)
							})), this.$size = {
								width: 0,
								height: 0,
								scrollerHeight: 0,
								scrollerWidth: 0,
								$dirty: !0
							}, this.layerConfig = {
								width: 1,
								padding: 0,
								firstRow: 0,
								firstRowScreen: 0,
								lastRow: 0,
								lineHeight: 0,
								characterWidth: 0,
								minHeight: 1,
								maxHeight: 1,
								offset: 0,
								height: 1,
								gutterOffset: 1
							}, this.scrollMargin = {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								v: 0,
								h: 0
							}, this.$loop = new g(this.$renderChanges.bind(this), this.container
								.ownerDocument.defaultView), this.$loop.schedule(this
								.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o
							.resetOptions(this), o._emit("renderer", this)
					};
					(function() {
						this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4,
							this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT =
							32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this
							.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this
							.CHANGE_H_SCROLL = 1024, n.implement(this, p), this
							.updateCharacterSize = function() {
								this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this
										.$allowBoldFonts = this.$textLayer.allowBoldFonts, this
										.setStyle("ace_nobold", !this.$allowBoldFonts)), this
									.layerConfig.characterWidth = this.characterWidth = this
									.$textLayer.getCharacterWidth(), this.layerConfig
									.lineHeight = this.lineHeight = this.$textLayer
									.getLineHeight(), this.$updatePrintMargin()
							}, this.setSession = function(e) {
								this.session && this.session.doc.off("changeNewLineMode", this
										.onChangeNewLineMode), this.session = e, e && this
									.scrollMargin.top && e.getScrollTop() <= 0 && e
									.setScrollTop(-this.scrollMargin.top), this.$cursorLayer
									.setSession(e), this.$markerBack.setSession(e), this
									.$markerFront.setSession(e), this.$gutterLayer.setSession(
									e), this.$textLayer.setSession(e), e && (this.$loop
										.schedule(this.CHANGE_FULL), this.session
										.$setFontMetrics(this.$fontMetrics), this.scrollBarH
										.scrollLeft = this.scrollBarV.scrollTop = null, this
										.onChangeNewLineMode = this.onChangeNewLineMode.bind(
											this), this.onChangeNewLineMode(), this.session.doc
										.on("changeNewLineMode", this.onChangeNewLineMode))
							}, this.updateLines = function(e, t, i) {
								if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this
										.$changedLines.firstRow > e && (this.$changedLines
											.firstRow = e), this.$changedLines.lastRow < t && (
											this.$changedLines.lastRow = t)) : this
									.$changedLines = {
										firstRow: e,
										lastRow: t
									}, this.$changedLines.lastRow < this.layerConfig.firstRow) {
									if (!i) return;
									this.$changedLines.lastRow = this.layerConfig.lastRow
								}
								this.$changedLines.firstRow > this.layerConfig.lastRow || this
									.$loop.schedule(this.CHANGE_LINES)
							}, this.onChangeNewLineMode = function() {
								this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer
									.$updateEolChar(), this.session.$bidiHandler.setEolChar(this
										.$textLayer.EOL_CHAR)
							}, this.onChangeTabSize = function() {
								this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this
									.$textLayer.onChangeTabSize()
							}, this.updateText = function() {
								this.$loop.schedule(this.CHANGE_TEXT)
							}, this.updateFull = function(e) {
								e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop
									.schedule(this.CHANGE_FULL)
							}, this.updateFontSize = function() {
								this.$textLayer.checkForSizeChanges()
							}, this.$changes = 0, this.$updateSizeAsync = function() {
								this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
							}, this.onResize = function(e, t, i, n) {
								if (!(this.resizing > 2)) {
									this.resizing > 0 ? this.resizing++ : this.resizing = e ?
										1 : 0;
									var r = this.container;
									n || (n = r.clientHeight || r.scrollHeight), i || (i = r
										.clientWidth || r.scrollWidth);
									var o = this.$updateCachedSize(e, t, i, n);
									if (!this.$size.scrollerHeight || !i && !n) return this
										.resizing = 0;
									e && (this.$gutterLayer.$padding = null), e ? this
										.$renderChanges(o | this.$changes, !0) : this.$loop
										.schedule(o | this.$changes), this.resizing && (this
											.resizing = 0), this.scrollBarV.scrollLeft = this
										.scrollBarV.scrollTop = null
								}
							}, this.$updateCachedSize = function(e, t, i, n) {
								n -= this.$extraHeight || 0;
								var r = 0,
									o = this.$size,
									s = {
										width: o.width,
										height: o.height,
										scrollerHeight: o.scrollerHeight,
										scrollerWidth: o.scrollerWidth
									};
								return n && (e || o.height != n) && (o.height = n, r |= this
										.CHANGE_SIZE, o.scrollerHeight = o.height, this
										.$horizScroll && (o.scrollerHeight -= this.scrollBarH
											.getHeight()), this.scrollBarV.element.style
										.bottom = this.scrollBarH.getHeight() + "px", r |= this
										.CHANGE_SCROLL), i && (e || o.width != i) && (r |= this
										.CHANGE_SIZE, o.width = i, null == t && (t = this
											.$showGutter ? this.$gutter.offsetWidth : 0), this
										.gutterWidth = t, this.scrollBarH.element.style.left =
										this.scroller.style.left = t + "px", o.scrollerWidth =
										Math.max(0, i - t - this.scrollBarV.getWidth()), this
										.scrollBarH.element.style.right = this.scroller.style
										.right = this.scrollBarV.getWidth() + "px", this
										.scroller.style.bottom = this.scrollBarH.getHeight() +
										"px", (this.session && this.session.getUseWrapMode() &&
											this.adjustWrapLimit() || e) && (r |= this
											.CHANGE_FULL)), o.$dirty = !i || !n, r && this
									._signal("resize", s), r
							}, this.onGutterResize = function() {
								var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
								e != this.gutterWidth && (this.$changes |= this
										.$updateCachedSize(!0, e, this.$size.width, this.$size
											.height)), this.session.getUseWrapMode() && this
									.adjustWrapLimit() || this.$size.$dirty ? this.$loop
									.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(),
										this.$loop.schedule(this.CHANGE_MARKER))
							}, this.adjustWrapLimit = function() {
								var e = this.$size.scrollerWidth - 2 * this.$padding,
									t = Math.floor(e / this.characterWidth);
								return this.session.adjustWrapLimit(t, this.$showPrintMargin &&
									this.$printMarginColumn)
							}, this.setAnimatedScroll = function(e) {
								this.setOption("animatedScroll", e)
							}, this.getAnimatedScroll = function() {
								return this.$animatedScroll
							}, this.setShowInvisibles = function(e) {
								this.setOption("showInvisibles", e), this.session.$bidiHandler
									.setShowInvisibles(e)
							}, this.getShowInvisibles = function() {
								return this.getOption("showInvisibles")
							}, this.getDisplayIndentGuides = function() {
								return this.getOption("displayIndentGuides")
							}, this.setDisplayIndentGuides = function(e) {
								this.setOption("displayIndentGuides", e)
							}, this.setShowPrintMargin = function(e) {
								this.setOption("showPrintMargin", e)
							}, this.getShowPrintMargin = function() {
								return this.getOption("showPrintMargin")
							}, this.setPrintMarginColumn = function(e) {
								this.setOption("printMarginColumn", e)
							}, this.getPrintMarginColumn = function() {
								return this.getOption("printMarginColumn")
							}, this.getShowGutter = function() {
								return this.getOption("showGutter")
							}, this.setShowGutter = function(e) {
								return this.setOption("showGutter", e)
							}, this.getFadeFoldWidgets = function() {
								return this.getOption("fadeFoldWidgets")
							}, this.setFadeFoldWidgets = function(e) {
								this.setOption("fadeFoldWidgets", e)
							}, this.setHighlightGutterLine = function(e) {
								this.setOption("highlightGutterLine", e)
							}, this.getHighlightGutterLine = function() {
								return this.getOption("highlightGutterLine")
							}, this.$updateGutterLineHighlight = function() {
								var e = this.$cursorLayer.$pixelPos,
									t = this.layerConfig.lineHeight;
								if (this.session.getUseWrapMode()) {
									var i = this.session.selection.getCursor();
									i.column = 0, e = this.$cursorLayer.getPixelPosition(i, !0),
										t *= this.session.getRowLength(i.row)
								}
								this.$gutterLineHighlight.style.top = e.top - this.layerConfig
									.offset + "px", this.$gutterLineHighlight.style.height = t +
									"px"
							}, this.$updatePrintMargin = function() {
								if (this.$showPrintMargin || this.$printMarginEl) {
									if (!this.$printMarginEl) {
										var e = r.createElement("div");
										e.className = "ace_layer ace_print-margin-layer", this
											.$printMarginEl = r.createElement("div"), this
											.$printMarginEl.className = "ace_print-margin", e
											.appendChild(this.$printMarginEl), this.content
											.insertBefore(e, this.content.firstChild)
									}
									var t = this.$printMarginEl.style;
									t.left = this.characterWidth * this.$printMarginColumn +
										this.$padding + "px", t.visibility = this
										.$showPrintMargin ? "visible" : "hidden", this
										.session && -1 == this.session.$wrap && this
										.adjustWrapLimit()
								}
							}, this.getContainerElement = function() {
								return this.container
							}, this.getMouseEventTarget = function() {
								return this.scroller
							}, this.getTextAreaContainer = function() {
								return this.container
							}, this.$moveTextAreaToCursor = function() {
								if (this.$keepTextAreaAtCursor) {
									var e = this.layerConfig,
										t = this.$cursorLayer.$pixelPos.top,
										i = this.$cursorLayer.$pixelPos.left;
									t -= e.offset;
									var n = this.textarea.style,
										r = this.lineHeight;
									if (t < 0 || t > e.height - r) n.top = n.left = "0";
									else {
										var o = this.characterWidth;
										if (this.$composition) {
											var s = this.textarea.value.replace(/^\x01+/, "");
											o *= this.session.$getStringScreenWidth(s)[0] + 2,
												r += 2
										}
										i -= this.scrollLeft, i > this.$size.scrollerWidth -
											o && (i = this.$size.scrollerWidth - o), i += this
											.gutterWidth, n.height = r + "px", n.width = o +
											"px", n.left = Math.min(i, this.$size
												.scrollerWidth - o) + "px", n.top = Math.min(t,
												this.$size.height - r) + "px"
									}
								}
							}, this.getFirstVisibleRow = function() {
								return this.layerConfig.firstRow
							}, this.getFirstFullyVisibleRow = function() {
								return this.layerConfig.firstRow + (0 === this.layerConfig
									.offset ? 0 : 1)
							}, this.getLastFullyVisibleRow = function() {
								var e = this.layerConfig,
									t = e.lastRow,
									i = this.session.documentToScreenRow(t, 0) * e.lineHeight;
								return i - this.session.getScrollTop() > e.height - e
									.lineHeight ? t - 1 : t
							}, this.getLastVisibleRow = function() {
								return this.layerConfig.lastRow
							}, this.$padding = null, this.setPadding = function(e) {
								this.$padding = e, this.$textLayer.setPadding(e), this
									.$cursorLayer.setPadding(e), this.$markerFront.setPadding(
									e), this.$markerBack.setPadding(e), this.$loop.schedule(this
										.CHANGE_FULL), this.$updatePrintMargin()
							}, this.setScrollMargin = function(e, t, i, n) {
								var r = this.scrollMargin;
								r.top = 0 | e, r.bottom = 0 | t, r.right = 0 | n, r.left = 0 |
									i, r.v = r.top + r.bottom, r.h = r.left + r.right, r.top &&
									this.scrollTop <= 0 && this.session && this.session
									.setScrollTop(-r.top), this.updateFull()
							}, this.getHScrollBarAlwaysVisible = function() {
								return this.$hScrollBarAlwaysVisible
							}, this.setHScrollBarAlwaysVisible = function(e) {
								this.setOption("hScrollBarAlwaysVisible", e)
							}, this.getVScrollBarAlwaysVisible = function() {
								return this.$vScrollBarAlwaysVisible
							}, this.setVScrollBarAlwaysVisible = function(e) {
								this.setOption("vScrollBarAlwaysVisible", e)
							}, this.$updateScrollBarV = function() {
								var e = this.layerConfig.maxHeight,
									t = this.$size.scrollerHeight;
								!this.$maxLines && this.$scrollPastEnd && (e -= (t - this
											.lineHeight) * this.$scrollPastEnd, this.scrollTop >
										e - t && (e = this.scrollTop + t, this.scrollBarV
											.scrollTop = null)), this.scrollBarV
									.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV
									.setScrollTop(this.scrollTop + this.scrollMargin.top)
							}, this.$updateScrollBarH = function() {
								this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this
										.$padding + this.scrollMargin.h), this.scrollBarH
									.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
							}, this.$frozen = !1, this.freeze = function() {
								this.$frozen = !0
							}, this.unfreeze = function() {
								this.$frozen = !1
							}, this.$renderChanges = function(e, t) {
								if (this.$changes && (e |= this.$changes, this.$changes = 0),
									this.session && this.container.offsetWidth && !this
									.$frozen && (e || t)) {
									if (this.$size.$dirty) return this.$changes |= e, this
										.onResize(!0);
									this.lineHeight || this.$textLayer.checkForSizeChanges(),
										this._signal("beforeRender"), this.session && this
										.session.$bidiHandler && this.session.$bidiHandler
										.updateCharacterWidths(this.$fontMetrics);
									var i = this.layerConfig;
									if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this
										.CHANGE_TEXT || e & this.CHANGE_LINES || e & this
										.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
										if (e |= this.$computeLayerConfig(), i.firstRow != this
											.layerConfig.firstRow && i.firstRowScreen == this
											.layerConfig.firstRowScreen) {
											var n = this.scrollTop + (i.firstRow - this
												.layerConfig.firstRow) * this.lineHeight;
											n > 0 && (this.scrollTop = n, e |= this
												.CHANGE_SCROLL, e |= this
												.$computeLayerConfig())
										}
										i = this.layerConfig, this.$updateScrollBarV(), e & this
											.CHANGE_H_SCROLL && this.$updateScrollBarH(), this
											.$gutterLayer.element.style.marginTop = -i.offset +
											"px", this.content.style.marginTop = -i.offset +
											"px", this.content.style.width = i.width + 2 * this
											.$padding + "px", this.content.style.height = i
											.minHeight + "px"
									}
									if (e & this.CHANGE_H_SCROLL && (this.content.style
											.marginLeft = -this.scrollLeft + "px", this.scroller
											.className = this.scrollLeft <= 0 ? "ace_scroller" :
											"ace_scroller ace_scroll-left"), e & this
										.CHANGE_FULL) return this.$textLayer.update(i), this
										.$showGutter && this.$gutterLayer.update(i), this
										.$markerBack.update(i), this.$markerFront.update(i),
										this.$cursorLayer.update(i), this
										.$moveTextAreaToCursor(), this
										.$highlightGutterLine && this
										.$updateGutterLineHighlight(), void this._signal(
											"afterRender");
									if (e & this.CHANGE_SCROLL) return e & this.CHANGE_TEXT ||
										e & this.CHANGE_LINES ? this.$textLayer.update(i) :
										this.$textLayer.scrollLines(i), this.$showGutter &&
										this.$gutterLayer.update(i), this.$markerBack
										.update(i), this.$markerFront.update(i), this
										.$cursorLayer.update(i), this
										.$highlightGutterLine && this
										.$updateGutterLineHighlight(), this
										.$moveTextAreaToCursor(), void this._signal(
											"afterRender");
									e & this.CHANGE_TEXT ? (this.$textLayer.update(i), this
											.$showGutter && this.$gutterLayer.update(i)) : e &
										this.CHANGE_LINES ? (this.$updateLines() || e & this
											.CHANGE_GUTTER && this.$showGutter) && this
										.$gutterLayer.update(i) : (e & this.CHANGE_TEXT || e &
											this.CHANGE_GUTTER) && this.$showGutter && this
										.$gutterLayer.update(i), e & this.CHANGE_CURSOR && (this
											.$cursorLayer.update(i), this
											.$moveTextAreaToCursor(), this
											.$highlightGutterLine && this
											.$updateGutterLineHighlight()), e & (this
											.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this
										.$markerFront.update(i), e & (this.CHANGE_MARKER | this
											.CHANGE_MARKER_BACK) && this.$markerBack.update(i),
										this._signal("afterRender")
								} else this.$changes |= e
							}, this.$autosize = function() {
								var e = this.session.getScreenLength() * this.lineHeight,
									t = this.$maxLines * this.lineHeight,
									i = Math.min(t, Math.max((this.$minLines || 1) * this
										.lineHeight, e)) + this.scrollMargin.v + (this
										.$extraHeight || 0);
								this.$horizScroll && (i += this.scrollBarH.getHeight()), this
									.$maxPixelHeight && i > this.$maxPixelHeight && (i = this
										.$maxPixelHeight);
								var n = e > t;
								if (i != this.desiredHeight || this.$size.height != this
									.desiredHeight || n != this.$vScroll) {
									n != this.$vScroll && (this.$vScroll = n, this.scrollBarV
										.setVisible(n));
									var r = this.container.clientWidth;
									this.container.style.height = i + "px", this
										.$updateCachedSize(!0, this.$gutterWidth, r, i), this
										.desiredHeight = i, this._signal("autosize")
								}
							}, this.$computeLayerConfig = function() {
								var e = this.session,
									t = this.$size,
									i = t.height <= 2 * this.lineHeight,
									n = this.session.getScreenLength(),
									r = n * this.lineHeight,
									o = this.$getLongestLine(),
									s = !i && (this.$hScrollBarAlwaysVisible || t
										.scrollerWidth - o - 2 * this.$padding < 0),
									a = this.$horizScroll !== s;
								a && (this.$horizScroll = s, this.scrollBarH.setVisible(s));
								var l = this.$vScroll;
								this.$maxLines && this.lineHeight > 1 && this.$autosize();
								var c = this.scrollTop % this.lineHeight,
									h = t.scrollerHeight + this.lineHeight,
									u = !this.$maxLines && this.$scrollPastEnd ? (t
										.scrollerHeight - this.lineHeight) * this
									.$scrollPastEnd : 0;
								r += u;
								var d = this.scrollMargin;
								this.session.setScrollTop(Math.max(-d.top, Math.min(this
										.scrollTop, r - t.scrollerHeight + d.bottom))), this
									.session.setScrollLeft(Math.max(-d.left, Math.min(this
										.scrollLeft, o + 2 * this.$padding - t
										.scrollerWidth + d.right)));
								var g = !i && (this.$vScrollBarAlwaysVisible || t
										.scrollerHeight - r + u < 0 || this.scrollTop > d.top),
									f = l !== g;
								f && (this.$vScroll = g, this.scrollBarV.setVisible(g));
								var p, m, v = Math.ceil(h / this.lineHeight) - 1,
									w = Math.max(0, Math.round((this.scrollTop - c) / this
										.lineHeight)),
									b = w + v,
									A = this.lineHeight;
								w = e.screenToDocumentRow(w, 0);
								var C = e.getFoldLine(w);
								C && (w = C.start.row), p = e.documentToScreenRow(w, 0), m = e
									.getRowLength(w) * A, b = Math.min(e.screenToDocumentRow(b,
										0), e.getLength() - 1), h = t.scrollerHeight + e
									.getRowLength(b) * A + m, c = this.scrollTop - p * A;
								var F = 0;
								return this.layerConfig.width != o && (F = this
									.CHANGE_H_SCROLL), (a || f) && (F = this.$updateCachedSize(!
											0, this.gutterWidth, t.width, t.height), this
										._signal("scrollbarVisibilityChanged"), f && (o = this
											.$getLongestLine())), this.layerConfig = {
										width: o,
										padding: this.$padding,
										firstRow: w,
										firstRowScreen: p,
										lastRow: b,
										lineHeight: A,
										characterWidth: this.characterWidth,
										minHeight: h,
										maxHeight: r,
										offset: c,
										gutterOffset: A ? Math.max(0, Math.ceil((c + t.height -
											t.scrollerHeight) / A)) : 0,
										height: this.$size.scrollerHeight
									}, F
							}, this.$updateLines = function() {
								if (this.$changedLines) {
									var e = this.$changedLines.firstRow,
										t = this.$changedLines.lastRow;
									this.$changedLines = null;
									var i = this.layerConfig;
									if (!(e > i.lastRow + 1) && !(t < i.firstRow)) return t ===
										1 / 0 ? (this.$showGutter && this.$gutterLayer
											.update(i), void this.$textLayer.update(i)) : (
											this.$textLayer.updateLines(i, e, t), !0)
								}
							}, this.$getLongestLine = function() {
								var e = this.session.getScreenWidth();
								return this.showInvisibles && !this.session.$useWrapMode && (
									e += 1), Math.max(this.$size.scrollerWidth - 2 * this
									.$padding, Math.round(e * this.characterWidth))
							}, this.updateFrontMarkers = function() {
								this.$markerFront.setMarkers(this.session.getMarkers(!0)), this
									.$loop.schedule(this.CHANGE_MARKER_FRONT)
							}, this.updateBackMarkers = function() {
								this.$markerBack.setMarkers(this.session.getMarkers()), this
									.$loop.schedule(this.CHANGE_MARKER_BACK)
							}, this.addGutterDecoration = function(e, t) {
								this.$gutterLayer.addGutterDecoration(e, t)
							}, this.removeGutterDecoration = function(e, t) {
								this.$gutterLayer.removeGutterDecoration(e, t)
							}, this.updateBreakpoints = function(e) {
								this.$loop.schedule(this.CHANGE_GUTTER)
							}, this.setAnnotations = function(e) {
								this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this
									.CHANGE_GUTTER)
							}, this.updateCursor = function() {
								this.$loop.schedule(this.CHANGE_CURSOR)
							}, this.hideCursor = function() {
								this.$cursorLayer.hideCursor()
							}, this.showCursor = function() {
								this.$cursorLayer.showCursor()
							}, this.scrollSelectionIntoView = function(e, t, i) {
								this.scrollCursorIntoView(e, i), this.scrollCursorIntoView(t, i)
							}, this.scrollCursorIntoView = function(e, t, i) {
								if (0 !== this.$size.scrollerHeight) {
									var n = this.$cursorLayer.getPixelPosition(e),
										r = n.left,
										o = n.top,
										s = i && i.top || 0,
										a = i && i.bottom || 0,
										l = this.$scrollAnimation ? this.session
									.getScrollTop() : this.scrollTop;
									l + s > o ? (t && l + s > o + this.lineHeight && (o -= t *
												this.$size.scrollerHeight), 0 === o && (o = -
												this.scrollMargin.top), this.session
											.setScrollTop(o)) : l + this.$size.scrollerHeight -
										a < o + this.lineHeight && (t && l + this.$size
											.scrollerHeight - a < o - this.lineHeight && (o +=
												t * this.$size.scrollerHeight), this.session
											.setScrollTop(o + this.lineHeight - this.$size
												.scrollerHeight));
									var c = this.scrollLeft;
									c > r ? (r < this.$padding + 2 * this.layerConfig
											.characterWidth && (r = -this.scrollMargin.left),
											this.session.setScrollLeft(r)) : c + this.$size
										.scrollerWidth < r + this.characterWidth ? this.session
										.setScrollLeft(Math.round(r + this.characterWidth - this
											.$size.scrollerWidth)) : c <= this.$padding && r -
										c < this.characterWidth && this.session.setScrollLeft(0)
								}
							}, this.getScrollTop = function() {
								return this.session.getScrollTop()
							}, this.getScrollLeft = function() {
								return this.session.getScrollLeft()
							}, this.getScrollTopRow = function() {
								return this.scrollTop / this.lineHeight
							}, this.getScrollBottomRow = function() {
								return Math.max(0, Math.floor((this.scrollTop + this.$size
									.scrollerHeight) / this.lineHeight) - 1)
							}, this.scrollToRow = function(e) {
								this.session.setScrollTop(e * this.lineHeight)
							}, this.alignCursor = function(e, t) {
								"number" == typeof e && (e = {
									row: e,
									column: 0
								});
								var i = this.$cursorLayer.getPixelPosition(e),
									n = this.$size.scrollerHeight - this.lineHeight,
									r = i.top - n * (t || 0);
								return this.session.setScrollTop(r), r
							}, this.STEPS = 8, this.$calcSteps = function(e, t) {
								var i = 0,
									n = this.STEPS,
									r = [],
									o = function(e, t, i) {
										return i * (Math.pow(e - 1, 3) + 1) + t
									};
								for (i = 0; i < n; ++i) r.push(o(i / this.STEPS, e, t - e));
								return r
							}, this.scrollToLine = function(e, t, i, n) {
								var r = this.$cursorLayer.getPixelPosition({
										row: e,
										column: 0
									}),
									o = r.top;
								t && (o -= this.$size.scrollerHeight / 2);
								var s = this.scrollTop;
								this.session.setScrollTop(o), !1 !== i && this.animateScrolling(
									s, n)
							}, this.animateScrolling = function(e, t) {
								var i = this.scrollTop;
								if (this.$animatedScroll) {
									var n = this;
									if (e != i) {
										if (this.$scrollAnimation) {
											var r = this.$scrollAnimation.steps;
											if (r.length && (e = r[0], e == i)) return
										}
										var o = n.$calcSteps(e, i);
										this.$scrollAnimation = {
												from: e,
												to: i,
												steps: o
											}, clearInterval(this.$timer), n.session
											.setScrollTop(o.shift()), n.session.$scrollTop = i,
											this.$timer = setInterval((function() {
												o.length ? (n.session.setScrollTop(o
														.shift()), n.session
													.$scrollTop = i) : null != i ? (
													n.session.$scrollTop = -1, n
													.session.setScrollTop(i), i =
													null) : (n.$timer =
													clearInterval(n.$timer), n
													.$scrollAnimation = null, t &&
													t())
											}), 10)
									}
								}
							}, this.scrollToY = function(e) {
								this.scrollTop !== e && (this.$loop.schedule(this
									.CHANGE_SCROLL), this.scrollTop = e)
							}, this.scrollToX = function(e) {
								this.scrollLeft !== e && (this.scrollLeft = e), this.$loop
									.schedule(this.CHANGE_H_SCROLL)
							}, this.scrollTo = function(e, t) {
								this.session.setScrollTop(t), this.session.setScrollLeft(t)
							}, this.scrollBy = function(e, t) {
								t && this.session.setScrollTop(this.session.getScrollTop() + t),
									e && this.session.setScrollLeft(this.session
									.getScrollLeft() + e)
							}, this.isScrollableBy = function(e, t) {
								return t < 0 && this.session.getScrollTop() >= 1 - this
									.scrollMargin.top || (t > 0 && this.session.getScrollTop() +
										this.$size.scrollerHeight - this.layerConfig.maxHeight <
										-1 + this.scrollMargin.bottom || (e < 0 && this.session
											.getScrollLeft() >= 1 - this.scrollMargin.left || (
												e > 0 && this.session.getScrollLeft() + this
												.$size.scrollerWidth - this.layerConfig.width <
												-1 + this.scrollMargin.right || void 0)))
							}, this.pixelToScreenCoordinates = function(e, t) {
								var i = this.scroller.getBoundingClientRect(),
									n = e + this.scrollLeft - i.left - this.$padding,
									r = n / this.characterWidth,
									o = Math.floor((t + this.scrollTop - i.top) / this
										.lineHeight),
									s = Math.round(r);
								return {
									row: o,
									column: s,
									side: r - s > 0 ? 1 : -1,
									offsetX: n
								}
							}, this.screenToTextCoordinates = function(e, t) {
								var i = this.scroller.getBoundingClientRect(),
									n = e + this.scrollLeft - i.left - this.$padding,
									r = Math.round(n / this.characterWidth),
									o = (t + this.scrollTop - i.top) / this.lineHeight;
								return this.session.screenToDocumentPosition(o, Math.max(r, 0),
									n)
							}, this.textToScreenCoordinates = function(e, t) {
								var i = this.scroller.getBoundingClientRect(),
									n = this.session.documentToScreenPosition(e, t),
									r = this.$padding + (this.session.$bidiHandler.isBidiRow(n
										.row, e) ? this.session.$bidiHandler.getPosLeft(n
										.column) : Math.round(n.column * this
										.characterWidth)),
									o = n.row * this.lineHeight;
								return {
									pageX: i.left + r - this.scrollLeft,
									pageY: i.top + o - this.scrollTop
								}
							}, this.visualizeFocus = function() {
								r.addCssClass(this.container, "ace_focus")
							}, this.visualizeBlur = function() {
								r.removeCssClass(this.container, "ace_focus")
							}, this.showComposition = function(e) {
								this.$composition || (this.$composition = {
										keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
										cssText: this.textarea.style.cssText
									}), this.$keepTextAreaAtCursor = !0, r.addCssClass(this
										.textarea, "ace_composition"), this.textarea.style
									.cssText = "", this.$moveTextAreaToCursor()
							}, this.setCompositionText = function(e) {
								this.$moveTextAreaToCursor()
							}, this.hideComposition = function() {
								this.$composition && (r.removeCssClass(this.textarea,
										"ace_composition"), this.$keepTextAreaAtCursor =
									this.$composition.keepTextAreaAtCursor, this.textarea
									.style.cssText = this.$composition.cssText, this
									.$composition = null)
							}, this.setTheme = function(e, t) {
								var i = this;
								if (this.$themeId = e, i._dispatchEvent("themeChange", {
										theme: e
									}), e && "string" != typeof e) s(e);
								else {
									var n = e || this.$options.theme.initialValue;
									o.loadModule(["theme", n], s)
								}

								function s(n) {
									if (i.$themeId != e) return t && t();
									if (!n || !n.cssClass) throw new Error(
										"couldn't load module " + e +
										" or it didn't call define");
									r.importCssString(n.cssText, n.cssClass, i.container
										.ownerDocument), i.theme && r.removeCssClass(i
										.container, i.theme.cssClass);
									var o = "padding" in n ? n.padding : "padding" in (i
										.theme || {}) ? 4 : i.$padding;
									i.$padding && o != i.$padding && i.setPadding(o), i.$theme =
										n.cssClass, i.theme = n, r.addCssClass(i.container, n
											.cssClass), r.setCssClass(i.container, "ace_dark", n
											.isDark), i.$size && (i.$size.width = 0, i
											.$updateSizeAsync()), i._dispatchEvent(
											"themeLoaded", {
												theme: n
											}), t && t()
								}
							}, this.getTheme = function() {
								return this.$themeId
							}, this.setStyle = function(e, t) {
								r.setCssClass(this.container, e, !1 !== t)
							}, this.unsetStyle = function(e) {
								r.removeCssClass(this.container, e)
							}, this.setCursorStyle = function(e) {
								this.scroller.style.cursor != e && (this.scroller.style.cursor =
									e)
							}, this.setMouseCursor = function(e) {
								this.scroller.style.cursor = e
							}, this.destroy = function() {
								this.$textLayer.destroy(), this.$cursorLayer.destroy()
							}
					}).call(v.prototype), o.defineOptions(v.prototype, "renderer", {
						animatedScroll: {
							initialValue: !1
						},
						showInvisibles: {
							set: function(e) {
								this.$textLayer.setShowInvisibles(e) && this.$loop
									.schedule(this.CHANGE_TEXT)
							},
							initialValue: !1
						},
						showPrintMargin: {
							set: function() {
								this.$updatePrintMargin()
							},
							initialValue: !0
						},
						printMarginColumn: {
							set: function() {
								this.$updatePrintMargin()
							},
							initialValue: 80
						},
						printMargin: {
							set: function(e) {
								"number" == typeof e && (this.$printMarginColumn = e),
									this.$showPrintMargin = !!e, this
									.$updatePrintMargin()
							},
							get: function() {
								return this.$showPrintMargin && this.$printMarginColumn
							}
						},
						showGutter: {
							set: function(e) {
								this.$gutter.style.display = e ? "block" : "none", this
									.$loop.schedule(this.CHANGE_FULL), this
									.onGutterResize()
							},
							initialValue: !0
						},
						fadeFoldWidgets: {
							set: function(e) {
								r.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
							},
							initialValue: !1
						},
						showFoldWidgets: {
							set: function(e) {
								this.$gutterLayer.setShowFoldWidgets(e)
							},
							initialValue: !0
						},
						showLineNumbers: {
							set: function(e) {
								this.$gutterLayer.setShowLineNumbers(e), this.$loop
									.schedule(this.CHANGE_GUTTER)
							},
							initialValue: !0
						},
						displayIndentGuides: {
							set: function(e) {
								this.$textLayer.setDisplayIndentGuides(e) && this.$loop
									.schedule(this.CHANGE_TEXT)
							},
							initialValue: !0
						},
						highlightGutterLine: {
							set: function(e) {
								if (!this.$gutterLineHighlight) return this
									.$gutterLineHighlight = r.createElement("div"),
									this.$gutterLineHighlight.className =
									"ace_gutter-active-line", void this.$gutter
									.appendChild(this.$gutterLineHighlight);
								this.$gutterLineHighlight.style.display = e ? "" :
									"none", this.$cursorLayer.$pixelPos && this
									.$updateGutterLineHighlight()
							},
							initialValue: !1,
							value: !0
						},
						hScrollBarAlwaysVisible: {
							set: function(e) {
								this.$hScrollBarAlwaysVisible && this.$horizScroll ||
									this.$loop.schedule(this.CHANGE_SCROLL)
							},
							initialValue: !1
						},
						vScrollBarAlwaysVisible: {
							set: function(e) {
								this.$vScrollBarAlwaysVisible && this.$vScroll || this
									.$loop.schedule(this.CHANGE_SCROLL)
							},
							initialValue: !1
						},
						fontSize: {
							set: function(e) {
								"number" == typeof e && (e += "px"), this.container
									.style.fontSize = e, this.updateFontSize()
							},
							initialValue: 12
						},
						fontFamily: {
							set: function(e) {
								this.container.style.fontFamily = e, this
									.updateFontSize()
							}
						},
						maxLines: {
							set: function(e) {
								this.updateFull()
							}
						},
						minLines: {
							set: function(e) {
								this.updateFull()
							}
						},
						maxPixelHeight: {
							set: function(e) {
								this.updateFull()
							},
							initialValue: 0
						},
						scrollPastEnd: {
							set: function(e) {
								e = +e || 0, this.$scrollPastEnd != e && (this
									.$scrollPastEnd = e, this.$loop.schedule(this
										.CHANGE_SCROLL))
							},
							initialValue: 0,
							handlesSet: !0
						},
						fixedWidthGutter: {
							set: function(e) {
								this.$gutterLayer.$fixedWidth = !!e, this.$loop
									.schedule(this.CHANGE_GUTTER)
							}
						},
						theme: {
							set: function(e) {
								this.setTheme(e)
							},
							get: function() {
								return this.$themeId || this.theme
							},
							initialValue: "./theme/textmate",
							handlesSet: !0
						}
					}), t.VirtualRenderer = v
				})), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/net", "ace/lib/event_emitter", "ace/config"
				], (function(e, t, i) {
					"use strict";
					var n = e("../lib/oop"),
						r = e("../lib/net"),
						o = e("../lib/event_emitter").EventEmitter,
						s = e("../config");

					function a(e, t) {
						var i = t.src;
						r.qualifyURL(e);
						try {
							return new Blob([i], {
								type: "application/javascript"
							})
						} catch (s) {
							var n = window.BlobBuilder || window.WebKitBlobBuilder || window
								.MozBlobBuilder,
								o = new n;
							return o.append(i), o.getBlob("application/javascript")
						}
					}

					function l(e, t) {
						var i = a(e, t),
							n = window.URL || window.webkitURL,
							r = n.createObjectURL(i);
						return new Worker(r)
					}
					var c = function(t, i, n, r, o) {
						if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this
							.changeListener = this.changeListener.bind(this), this.onMessage =
							this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e
								.nameToUrl), s.get("packaged") || !e.toUrl) r = r || s
							.moduleUrl(i.id, "worker");
						else {
							var a = this.$normalizePath;
							r = r || a(e.toUrl("ace/worker/worker.js", null, "_"));
							var c = {};
							t.forEach((function(t) {
								c[t] = a(e.toUrl(t, null, "_").replace(
									/(\.js)?(\?.*)?$/, ""))
							}))
						}
						this.$worker = l(r, i), o && this.send("importScripts", o), this.$worker
							.postMessage({
								init: !0,
								tlns: c,
								module: i.id,
								classname: n
							}), this.callbackId = 1, this.callbacks = {}, this.$worker
							.onmessage = this.onMessage
					};
					(function() {
						n.implement(this, o), this.onMessage = function(e) {
							var t = e.data;
							switch (t.type) {
								case "event":
									this._signal(t.name, {
										data: t.data
									});
									break;
								case "call":
									var i = this.callbacks[t.id];
									i && (i(t.data), delete this.callbacks[t.id]);
									break;
								case "error":
									this.reportError(t.data);
									break;
								case "log":
									window.console && console.log && console.log.apply(
										console, t.data);
									break
							}
						}, this.reportError = function(e) {
							window.console && console.error && console.error(e)
						}, this.$normalizePath = function(e) {
							return r.qualifyURL(e)
						}, this.terminate = function() {
							this._signal("terminate", {}), this.deltaQueue = null, this
								.$worker.terminate(), this.$worker = null, this.$doc && this
								.$doc.off("change", this.changeListener), this.$doc = null
						}, this.send = function(e, t) {
							this.$worker.postMessage({
								command: e,
								args: t
							})
						}, this.call = function(e, t, i) {
							if (i) {
								var n = this.callbackId++;
								this.callbacks[n] = i, t.push(n)
							}
							this.send(e, t)
						}, this.emit = function(e, t) {
							try {
								this.$worker.postMessage({
									event: e,
									data: {
										data: t.data
									}
								})
							} catch (i) {
								console.error(i.stack)
							}
						}, this.attachToDocument = function(e) {
							this.$doc && this.terminate(), this.$doc = e, this.call(
								"setValue", [e.getValue()]), e.on("change", this
								.changeListener)
						}, this.changeListener = function(e) {
							this.deltaQueue || (this.deltaQueue = [], setTimeout(this
									.$sendDeltaQueue, 0)), "insert" == e.action ? this
								.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e
									.start, e.end)
						}, this.$sendDeltaQueue = function() {
							var e = this.deltaQueue;
							e && (this.deltaQueue = null, e.length > 50 && e.length > this
								.$doc.getLength() >> 1 ? this.call("setValue", [this
									.$doc.getValue()
								]) : this.emit("change", {
									data: e
								}))
						}
					}).call(c.prototype);
					var h = function(e, t, i) {
						this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this
							.changeListener = this.changeListener.bind(this), this.callbackId =
							1, this.callbacks = {}, this.messageBuffer = [];
						var n = null,
							r = !1,
							a = Object.create(o),
							l = this;
						this.$worker = {}, this.$worker.terminate = function() {}, this.$worker
							.postMessage = function(e) {
								l.messageBuffer.push(e), n && (r ? setTimeout(c) : c())
							}, this.setEmitSync = function(e) {
								r = e
							};
						var c = function() {
							var e = l.messageBuffer.shift();
							e.command ? n[e.command].apply(n, e.args) : e.event && a
								._signal(e.event, e.data)
						};
						a.postMessage = function(e) {
							l.onMessage({
								data: e
							})
						}, a.callback = function(e, t) {
							this.postMessage({
								type: "call",
								id: t,
								data: e
							})
						}, a.emit = function(e, t) {
							this.postMessage({
								type: "event",
								name: e,
								data: t
							})
						}, s.loadModule(["worker", t], (function(e) {
							n = new e[i](a);
							while (l.messageBuffer.length) c()
						}))
					};
					h.prototype = c.prototype, t.UIWorkerClient = h, t.WorkerClient = c, t
						.createWorker = l
				})), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range",
					"ace/lib/event_emitter", "ace/lib/oop"
				], (function(e, t, i) {
					"use strict";
					var n = e("./range").Range,
						r = e("./lib/event_emitter").EventEmitter,
						o = e("./lib/oop"),
						s = function(e, t, i, n, r, o) {
							var s = this;
							this.length = t, this.session = e, this.doc = e.getDocument(), this
								.mainClass = r, this.othersClass = o, this.$onUpdate = this.onUpdate
								.bind(this), this.doc.on("change", this.$onUpdate), this.$others =
								n, this.$onCursorChange = function() {
									setTimeout((function() {
										s.onCursorChange()
									}))
								}, this.$pos = i;
							var a = e.getUndoManager().$undoStack || e.getUndoManager()
								.$undostack || {
									length: -1
								};
							this.$undoStackDepth = a.length, this.setup(), e.selection.on(
								"changeCursor", this.$onCursorChange)
						};
					(function() {
						o.implement(this, r), this.setup = function() {
							var e = this,
								t = this.doc,
								i = this.session;
							this.selectionBefore = i.selection.toJSON(), i.selection
								.inMultiSelectMode && i.selection.toSingleRange(), this
								.pos = t.createAnchor(this.$pos.row, this.$pos.column);
							var r = this.pos;
							r.$insertRight = !0, r.detach(), r.markerId = i.addMarker(new n(
										r.row, r.column, r.row, r.column + this.length),
									this.mainClass, null, !1), this.others = [], this
								.$others.forEach((function(i) {
									var n = t.createAnchor(i.row, i.column);
									n.$insertRight = !0, n.detach(), e.others.push(
										n)
								})), i.setUndoSelect(!1)
						}, this.showOtherMarkers = function() {
							if (!this.othersActive) {
								var e = this.session,
									t = this;
								this.othersActive = !0, this.others.forEach((function(i) {
									i.markerId = e.addMarker(new n(i.row, i
											.column, i.row, i.column + t
											.length), t.othersClass, null, !
										1)
								}))
							}
						}, this.hideOtherMarkers = function() {
							if (this.othersActive) {
								this.othersActive = !1;
								for (var e = 0; e < this.others.length; e++) this.session
									.removeMarker(this.others[e].markerId)
							}
						}, this.onUpdate = function(e) {
							if (this.$updating) return this.updateAnchors(e);
							var t = e;
							if (t.start.row === t.end.row && t.start.row === this.pos.row) {
								this.$updating = !0;
								var i = "insert" === e.action ? t.end.column - t.start
									.column : t.start.column - t.end.column,
									r = t.start.column >= this.pos.column && t.start
									.column <= this.pos.column + this.length + 1,
									o = t.start.column - this.pos.column;
								if (this.updateAnchors(e), r && (this.length += i), r && !
									this.session.$fromUndo)
									if ("insert" === e.action)
										for (var s = this.others.length - 1; s >= 0; s--) {
											var a = this.others[s],
												l = {
													row: a.row,
													column: a.column + o
												};
											this.doc.insertMergedLines(l, e.lines)
										} else if ("remove" === e.action)
											for (s = this.others.length - 1; s >= 0; s--) {
												a = this.others[s], l = {
													row: a.row,
													column: a.column + o
												};
												this.doc.remove(new n(l.row, l.column, l
													.row, l.column - i))
											}
								this.$updating = !1, this.updateMarkers()
							}
						}, this.updateAnchors = function(e) {
							this.pos.onChange(e);
							for (var t = this.others.length; t--;) this.others[t].onChange(
								e);
							this.updateMarkers()
						}, this.updateMarkers = function() {
							if (!this.$updating) {
								var e = this,
									t = this.session,
									i = function(i, r) {
										t.removeMarker(i.markerId), i.markerId = t
											.addMarker(new n(i.row, i.column, i.row, i
												.column + e.length), r, null, !1)
									};
								i(this.pos, this.mainClass);
								for (var r = this.others.length; r--;) i(this.others[r],
									this.othersClass)
							}
						}, this.onCursorChange = function(e) {
							if (!this.$updating && this.session) {
								var t = this.session.selection.getCursor();
								t.row === this.pos.row && t.column >= this.pos.column && t
									.column <= this.pos.column + this.length ? (this
										.showOtherMarkers(), this._emit("cursorEnter", e)) :
									(this.hideOtherMarkers(), this._emit("cursorLeave", e))
							}
						}, this.detach = function() {
							this.session.removeMarker(this.pos && this.pos.markerId), this
								.hideOtherMarkers(), this.doc.removeEventListener("change",
									this.$onUpdate), this.session.selection
								.removeEventListener("changeCursor", this.$onCursorChange),
								this.session.setUndoSelect(!0), this.session = null
						}, this.cancel = function() {
							if (-1 !== this.$undoStackDepth) {
								for (var e = this.session.getUndoManager(), t = (e
											.$undoStack || e.$undostack).length - this
										.$undoStackDepth, i = 0; i < t; i++) e.undo(!0);
								this.selectionBefore && this.session.selection.fromJSON(this
									.selectionBefore)
							}
						}
					}).call(s.prototype), t.PlaceHolder = s
				})), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module",
					"ace/lib/event", "ace/lib/useragent"
				], (function(e, t, i) {
					var n = e("../lib/event"),
						r = e("../lib/useragent");

					function o(e, t) {
						return e.row == t.row && e.column == t.column
					}

					function s(e) {
						var t = e.domEvent,
							i = t.altKey,
							s = t.shiftKey,
							a = t.ctrlKey,
							l = e.getAccelKey(),
							c = e.getButton();
						if (a && r.isMac && (c = t.button), e.editor.inMultiSelectMode && 2 == c) e
							.editor.textInput.onContextMenu(e.domEvent);
						else if (a || i || l) {
							if (0 === c) {
								var h, u = e.editor,
									d = u.selection,
									g = u.inMultiSelectMode,
									f = e.getDocumentPosition(),
									p = d.getCursor(),
									m = e.inSelection() || d.isEmpty() && o(f, p),
									v = e.x,
									w = e.y,
									b = function(e) {
										v = e.clientX, w = e.clientY
									},
									A = u.session,
									C = u.renderer.pixelToScreenCoordinates(v, w),
									F = C;
								if (u.$mouseHandler.$enableJumpToDef) a && i || l && i ? h = s ?
									"block" : "add" : i && u.$blockSelectEnabled && (h = "block");
								else if (l && !i) {
									if (h = "add", !g && s) return
								} else i && u.$blockSelectEnabled && (h = "block");
								if (h && r.isMac && t.ctrlKey && u.$mouseHandler
								.cancelContextMenu(), "add" == h) {
									if (!g && m) return;
									if (!g) {
										var y = d.toOrientedRange();
										u.addSelectionMarker(y)
									}
									var E = d.rangeList.rangeAtPoint(f);
									u.$blockScrolling++, u.inVirtualSelectionMode = !0, s && (E =
											null, y = d.ranges[0] || y, u.removeSelectionMarker(y)),
										u.once("mouseup", (function() {
											var e = d.toOrientedRange();
											E && e.isEmpty() && o(E.cursor, e.cursor) ? d
												.substractPoint(e.cursor) : (s ? d
													.substractPoint(y.cursor) : y && (u
														.removeSelectionMarker(y), d
														.addRange(y)), d.addRange(e)), u
												.$blockScrolling--, u
												.inVirtualSelectionMode = !1
										}))
								} else if ("block" == h) {
									var x;
									e.stop(), u.inVirtualSelectionMode = !0;
									var $ = [],
										k = function() {
											var e = u.renderer.pixelToScreenCoordinates(v, w),
												t = A.screenToDocumentPosition(e.row, e.column, e
													.offsetX);
											o(F, e) && o(t, d.lead) || (F = e, u.$blockScrolling++,
												u.selection.moveToPosition(t), u.renderer
												.scrollCursorIntoView(), u
												.removeSelectionMarkers($), $ = d
												.rectangularRangeBlock(F, C), u.$mouseHandler
												.$clickSelection && 1 == $.length && $[0]
												.isEmpty() && ($[0] = u.$mouseHandler
													.$clickSelection.clone()), $.forEach(u
													.addSelectionMarker, u), u
												.updateSelectionMarkers(), u.$blockScrolling--)
										};
									u.$blockScrolling++, g && !l ? d.toSingleRange() : !g && l && (
											x = d.toOrientedRange(), u.addSelectionMarker(x)), s ?
										C = A.documentToScreenPosition(d.lead) : d.moveToPosition(
										f), u.$blockScrolling--, F = {
											row: -1,
											column: -1
										};
									var S = function(e) {
											clearInterval(D), u.removeSelectionMarkers($), $
												.length || ($ = [d.toOrientedRange()]), u
												.$blockScrolling++, x && (u.removeSelectionMarker(
													x), d.toSingleRange(x));
											for (var t = 0; t < $.length; t++) d.addRange($[t]);
											u.inVirtualSelectionMode = !1, u.$mouseHandler
												.$clickSelection = null, u.$blockScrolling--
										},
										B = k;
									n.capture(u.container, b, S);
									var D = setInterval((function() {
										B()
									}), 20);
									return e.preventDefault()
								}
							}
						} else 0 === c && e.editor.inMultiSelectMode && e.editor
							.exitMultiSelectMode()
					}
					t.onMouseDown = s
				})), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module",
					"ace/keyboard/hash_handler"
				], (function(e, t, i) {
					t.defaultCommands = [{
						name: "addCursorAbove",
						exec: function(e) {
							e.selectMoreLines(-1)
						},
						bindKey: {
							win: "Ctrl-Alt-Up",
							mac: "Ctrl-Alt-Up"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "addCursorBelow",
						exec: function(e) {
							e.selectMoreLines(1)
						},
						bindKey: {
							win: "Ctrl-Alt-Down",
							mac: "Ctrl-Alt-Down"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "addCursorAboveSkipCurrent",
						exec: function(e) {
							e.selectMoreLines(-1, !0)
						},
						bindKey: {
							win: "Ctrl-Alt-Shift-Up",
							mac: "Ctrl-Alt-Shift-Up"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "addCursorBelowSkipCurrent",
						exec: function(e) {
							e.selectMoreLines(1, !0)
						},
						bindKey: {
							win: "Ctrl-Alt-Shift-Down",
							mac: "Ctrl-Alt-Shift-Down"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectMoreBefore",
						exec: function(e) {
							e.selectMore(-1)
						},
						bindKey: {
							win: "Ctrl-Alt-Left",
							mac: "Ctrl-Alt-Left"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectMoreAfter",
						exec: function(e) {
							e.selectMore(1)
						},
						bindKey: {
							win: "Ctrl-Alt-Right",
							mac: "Ctrl-Alt-Right"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectNextBefore",
						exec: function(e) {
							e.selectMore(-1, !0)
						},
						bindKey: {
							win: "Ctrl-Alt-Shift-Left",
							mac: "Ctrl-Alt-Shift-Left"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "selectNextAfter",
						exec: function(e) {
							e.selectMore(1, !0)
						},
						bindKey: {
							win: "Ctrl-Alt-Shift-Right",
							mac: "Ctrl-Alt-Shift-Right"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}, {
						name: "splitIntoLines",
						exec: function(e) {
							e.multiSelect.splitIntoLines()
						},
						bindKey: {
							win: "Ctrl-Alt-L",
							mac: "Ctrl-Alt-L"
						},
						readOnly: !0
					}, {
						name: "alignCursors",
						exec: function(e) {
							e.alignCursors()
						},
						bindKey: {
							win: "Ctrl-Alt-A",
							mac: "Ctrl-Alt-A"
						},
						scrollIntoView: "cursor"
					}, {
						name: "findAll",
						exec: function(e) {
							e.findAll()
						},
						bindKey: {
							win: "Ctrl-Alt-K",
							mac: "Ctrl-Alt-G"
						},
						scrollIntoView: "cursor",
						readOnly: !0
					}], t.multiSelectCommands = [{
						name: "singleSelection",
						bindKey: "esc",
						exec: function(e) {
							e.exitMultiSelectMode()
						},
						scrollIntoView: "cursor",
						readOnly: !0,
						isAvailable: function(e) {
							return e && e.inMultiSelectMode
						}
					}];
					var n = e("../keyboard/hash_handler").HashHandler;
					t.keyboardHandler = new n(t.multiSelectCommands)
				})), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list",
					"ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event",
					"ace/lib/lang", "ace/commands/multi_select_commands", "ace/search",
					"ace/edit_session", "ace/editor", "ace/config"
				], (function(e, t, i) {
					var n = e("./range_list").RangeList,
						r = e("./range").Range,
						o = e("./selection").Selection,
						s = e("./mouse/multi_select_handler").onMouseDown,
						a = e("./lib/event"),
						l = e("./lib/lang"),
						c = e("./commands/multi_select_commands");
					t.commands = c.defaultCommands.concat(c.multiSelectCommands);
					var h = e("./search").Search,
						u = new h;

					function d(e, t, i) {
						return u.$options.wrap = !0, u.$options.needle = t, u.$options.backwards = -
							1 == i, u.find(e)
					}
					var g = e("./edit_session").EditSession;
					(function() {
						this.getSelectionMarkers = function() {
							return this.$selectionMarkers
						}
					}).call(g.prototype),
						function() {
							this.ranges = null, this.rangeList = null, this.addRange = function(e,
								t) {
								if (e) {
									if (!this.inMultiSelectMode && 0 === this.rangeCount) {
										var i = this.toOrientedRange();
										if (this.rangeList.add(i), this.rangeList.add(e), 2 !=
											this.rangeList.ranges.length) return this.rangeList
											.removeAll(), t || this.fromOrientedRange(e);
										this.rangeList.removeAll(), this.rangeList.add(i), this
											.$onAddRange(i)
									}
									e.cursor || (e.cursor = e.end);
									var n = this.rangeList.add(e);
									return this.$onAddRange(e), n.length && this.$onRemoveRange(
											n), this.rangeCount > 1 && !this
										.inMultiSelectMode && (this._signal("multiSelect"), this
											.inMultiSelectMode = !0, this.session
											.$undoSelect = !1, this.rangeList.attach(this
												.session)), t || this.fromOrientedRange(e)
								}
							}, this.toSingleRange = function(e) {
								e = e || this.ranges[0];
								var t = this.rangeList.removeAll();
								t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(
									e)
							}, this.substractPoint = function(e) {
								var t = this.rangeList.substractPoint(e);
								if (t) return this.$onRemoveRange(t), t[0]
							}, this.mergeOverlappingRanges = function() {
								var e = this.rangeList.merge();
								e.length ? this.$onRemoveRange(e) : this.ranges[0] && this
									.fromOrientedRange(this.ranges[0])
							}, this.$onAddRange = function(e) {
								this.rangeCount = this.rangeList.ranges.length, this.ranges
									.unshift(e), this._signal("addRange", {
										range: e
									})
							}, this.$onRemoveRange = function(e) {
								if (this.rangeCount = this.rangeList.ranges.length, 1 == this
									.rangeCount && this.inMultiSelectMode) {
									var t = this.rangeList.ranges.pop();
									e.push(t), this.rangeCount = 0
								}
								for (var i = e.length; i--;) {
									var n = this.ranges.indexOf(e[i]);
									this.ranges.splice(n, 1)
								}
								this._signal("removeRange", {
										ranges: e
									}), 0 === this.rangeCount && this.inMultiSelectMode && (this
										.inMultiSelectMode = !1, this._signal("singleSelect"),
										this.session.$undoSelect = !0, this.rangeList.detach(
											this.session)), t = t || this.ranges[0], t && !t
									.isEqual(this.getRange()) && this.fromOrientedRange(t)
							}, this.$initRangeList = function() {
								this.rangeList || (this.rangeList = new n, this.ranges = [],
									this.rangeCount = 0)
							}, this.getAllRanges = function() {
								return this.rangeCount ? this.rangeList.ranges.concat() : [this
									.getRange()
								]
							}, this.splitIntoLines = function() {
								if (this.rangeCount > 1) {
									var e = this.rangeList.ranges,
										t = e[e.length - 1],
										i = r.fromPoints(e[0].start, t.end);
									this.toSingleRange(), this.setSelectionRange(i, t.cursor ==
										t.start)
								} else {
									i = this.getRange();
									var n = this.isBackwards(),
										o = i.start.row,
										s = i.end.row;
									if (o == s) {
										if (n) var a = i.end,
											l = i.start;
										else a = i.start, l = i.end;
										return this.addRange(r.fromPoints(l, l)), void this
											.addRange(r.fromPoints(a, a))
									}
									var c = [],
										h = this.getLineRange(o, !0);
									h.start.column = i.start.column, c.push(h);
									for (var u = o + 1; u < s; u++) c.push(this.getLineRange(u,
										!0));
									h = this.getLineRange(s, !0), h.end.column = i.end.column, c
										.push(h), c.forEach(this.addRange, this)
								}
							}, this.toggleBlockSelection = function() {
								if (this.rangeCount > 1) {
									var e = this.rangeList.ranges,
										t = e[e.length - 1],
										i = r.fromPoints(e[0].start, t.end);
									this.toSingleRange(), this.setSelectionRange(i, t.cursor ==
										t.start)
								} else {
									var n = this.session.documentToScreenPosition(this
											.selectionLead),
										o = this.session.documentToScreenPosition(this
											.selectionAnchor),
										s = this.rectangularRangeBlock(n, o);
									s.forEach(this.addRange, this)
								}
							}, this.rectangularRangeBlock = function(e, t, i) {
								var n = [],
									o = e.column < t.column;
								if (o) var s = e.column,
									a = t.column,
									l = e.offsetX,
									c = t.offsetX;
								else s = t.column, a = e.column, l = t.offsetX, c = e.offsetX;
								var h = e.row < t.row;
								if (h) var u = e.row,
									d = t.row;
								else u = t.row, d = e.row;
								s < 0 && (s = 0), u < 0 && (u = 0), u == d && (i = !0);
								for (var g = u; g <= d; g++) {
									var f = r.fromPoints(this.session.screenToDocumentPosition(
										g, s, l), this.session.screenToDocumentPosition(
										g, a, c));
									if (f.isEmpty()) {
										if (m && p(f.end, m)) break;
										var m = f.end
									}
									f.cursor = o ? f.start : f.end, n.push(f)
								}
								if (h && n.reverse(), !i) {
									var v = n.length - 1;
									while (n[v].isEmpty() && v > 0) v--;
									if (v > 0) {
										var w = 0;
										while (n[w].isEmpty()) w++
									}
									for (var b = v; b >= w; b--) n[b].isEmpty() && n.splice(b,
										1)
								}
								return n
							}
						}.call(o.prototype);
					var f = e("./editor").Editor;

					function p(e, t) {
						return e.row == t.row && e.column == t.column
					}

					function m(e) {
						e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e
							.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e
							.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(
								e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e
							.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e
							.$multiselectOnSessionChange(e), e.on("changeSession", e
								.$multiselectOnSessionChange), e.on("mousedown", s), e.commands
							.addCommands(c.defaultCommands), v(e))
					}

					function v(e) {
						var t = e.textInput.getElement(),
							i = !1;

						function n(t) {
							i && (e.renderer.setMouseCursor(""), i = !1)
						}
						a.addListener(t, "keydown", (function(t) {
							var r = 18 == t.keyCode && !(t.ctrlKey || t.shiftKey || t
								.metaKey);
							e.$blockSelectEnabled && r ? i || (e.renderer
								.setMouseCursor("crosshair"), i = !0) : i && n()
						})), a.addListener(t, "keyup", n), a.addListener(t, "blur", n)
					}(function() {
						this.updateSelectionMarkers = function() {
							this.renderer.updateCursor(), this.renderer.updateBackMarkers()
						}, this.addSelectionMarker = function(e) {
							e.cursor || (e.cursor = e.end);
							var t = this.getSelectionStyle();
							return e.marker = this.session.addMarker(e, "ace_selection", t),
								this.session.$selectionMarkers.push(e), this.session
								.selectionMarkerCount = this.session.$selectionMarkers
								.length, e
						}, this.removeSelectionMarker = function(e) {
							if (e.marker) {
								this.session.removeMarker(e.marker);
								var t = this.session.$selectionMarkers.indexOf(e); - 1 !=
									t && this.session.$selectionMarkers.splice(t, 1), this
									.session.selectionMarkerCount = this.session
									.$selectionMarkers.length
							}
						}, this.removeSelectionMarkers = function(e) {
							for (var t = this.session.$selectionMarkers, i = e
								.length; i--;) {
								var n = e[i];
								if (n.marker) {
									this.session.removeMarker(n.marker);
									var r = t.indexOf(n); - 1 != r && t.splice(r, 1)
								}
							}
							this.session.selectionMarkerCount = t.length
						}, this.$onAddRange = function(e) {
							this.addSelectionMarker(e.range), this.renderer.updateCursor(),
								this.renderer.updateBackMarkers()
						}, this.$onRemoveRange = function(e) {
							this.removeSelectionMarkers(e.ranges), this.renderer
								.updateCursor(), this.renderer.updateBackMarkers()
						}, this.$onMultiSelect = function(e) {
							this.inMultiSelectMode || (this.inMultiSelectMode = !0, this
								.setStyle("ace_multiselect"), this.keyBinding
								.addKeyboardHandler(c.keyboardHandler), this.commands
								.setDefaultHandler("exec", this.$onMultiSelectExec),
								this.renderer.updateCursor(), this.renderer
								.updateBackMarkers())
						}, this.$onSingleSelect = function(e) {
							this.session.multiSelect.inVirtualMode || (this
								.inMultiSelectMode = !1, this.unsetStyle(
									"ace_multiselect"), this.keyBinding
								.removeKeyboardHandler(c.keyboardHandler), this.commands
								.removeDefaultHandler("exec", this.$onMultiSelectExec),
								this.renderer.updateCursor(), this.renderer
								.updateBackMarkers(), this._emit("changeSelection"))
						}, this.$onMultiSelectExec = function(e) {
							var t = e.command,
								i = e.editor;
							if (i.multiSelect) {
								if (t.multiSelectAction) "forEach" == t.multiSelectAction ?
									n = i.forEachSelection(t, e.args) : "forEachLine" == t
									.multiSelectAction ? n = i.forEachSelection(t, e.args, !
										0) : "single" == t.multiSelectAction ? (i
										.exitMultiSelectMode(), n = t.exec(i, e.args || {})
										) : n = t.multiSelectAction(i, e.args || {});
								else {
									var n = t.exec(i, e.args || {});
									i.multiSelect.addRange(i.multiSelect.toOrientedRange()),
										i.multiSelect.mergeOverlappingRanges()
								}
								return n
							}
						}, this.forEachSelection = function(e, t, i) {
							if (!this.inVirtualSelectionMode) {
								var n, r = i && i.keepOrder,
									s = 1 == i || i && i.$byLines,
									a = this.session,
									l = this.selection,
									c = l.rangeList,
									h = (r ? l : c).ranges;
								if (!h.length) return e.exec ? e.exec(this, t || {}) : e(
									this, t || {});
								var u = l._eventRegistry;
								l._eventRegistry = {};
								var d = new o(a);
								this.inVirtualSelectionMode = !0;
								for (var g = h.length; g--;) {
									if (s)
										while (g > 0 && h[g].start.row == h[g - 1].end.row)
											g--;
									d.fromOrientedRange(h[g]), d.index = g, this.selection =
										a.selection = d;
									var f = e.exec ? e.exec(this, t || {}) : e(this, t ||
										{});
									n || void 0 === f || (n = f), d.toOrientedRange(h[g])
								}
								d.detach(), this.selection = a.selection = l, this
									.inVirtualSelectionMode = !1, l._eventRegistry = u, l
									.mergeOverlappingRanges();
								var p = this.renderer.$scrollAnimation;
								return this.onCursorChange(), this.onSelectionChange(), p &&
									p.from == p.to && this.renderer.animateScrolling(p
									.from), n
							}
						}, this.exitMultiSelectMode = function() {
							this.inMultiSelectMode && !this.inVirtualSelectionMode && this
								.multiSelect.toSingleRange()
						}, this.getSelectedText = function() {
							var e = "";
							if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
								for (var t = this.multiSelect.rangeList.ranges, i = [], n =
										0; n < t.length; n++) i.push(this.session
									.getTextRange(t[n]));
								var r = this.session.getDocument().getNewLineCharacter();
								e = i.join(r), e.length == (i.length - 1) * r.length && (e =
									"")
							} else this.selection.isEmpty() || (e = this.session
								.getTextRange(this.getSelectionRange()));
							return e
						}, this.$checkMultiselectChange = function(e, t) {
							if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
								var i = this.multiSelect.ranges[0];
								if (this.multiSelect.isEmpty() && t == this.multiSelect
									.anchor) return;
								var n = t == this.multiSelect.anchor ? i.cursor == i.start ?
									i.end : i.start : i.cursor;
								n.row == t.row && this.session.$clipPositionToDocument(n
										.row, n.column).column == t.column || this
									.multiSelect.toSingleRange(this.multiSelect
										.toOrientedRange())
							}
						}, this.findAll = function(e, t, i) {
							if (t = t || {}, t.needle = e || t.needle, void 0 == t.needle) {
								var n = this.selection.isEmpty() ? this.selection
									.getWordRange() : this.selection.getRange();
								t.needle = this.session.getTextRange(n)
							}
							this.$search.set(t);
							var r = this.$search.findAll(this.session);
							if (!r.length) return 0;
							this.$blockScrolling += 1;
							var o = this.multiSelect;
							i || o.toSingleRange(r[0]);
							for (var s = r.length; s--;) o.addRange(r[s], !0);
							return n && o.rangeList.rangeAtPoint(n.start) && o.addRange(n, !
								0), this.$blockScrolling -= 1, r.length
						}, this.selectMoreLines = function(e, t) {
							var i = this.selection.toOrientedRange(),
								n = i.cursor == i.end,
								o = this.session.documentToScreenPosition(i.cursor);
							this.selection.$desiredColumn && (o.column = this.selection
								.$desiredColumn);
							var s = this.session.screenToDocumentPosition(o.row + e, o
								.column);
							if (i.isEmpty()) l = s;
							else var a = this.session.documentToScreenPosition(n ? i.end : i
									.start),
								l = this.session.screenToDocumentPosition(a.row + e, a
									.column);
							if (n) {
								var c = r.fromPoints(s, l);
								c.cursor = c.start
							} else {
								c = r.fromPoints(l, s);
								c.cursor = c.end
							}
							if (c.desiredColumn = o.column, this.selection
								.inMultiSelectMode) {
								if (t) var h = i.cursor
							} else this.selection.addRange(i);
							this.selection.addRange(c), h && this.selection.substractPoint(
								h)
						}, this.transposeSelections = function(e) {
							for (var t = this.session, i = t.multiSelect, n = i.ranges, r =
									n.length; r--;) {
								var o = n[r];
								if (o.isEmpty()) {
									var s = t.getWordRange(o.start.row, o.start.column);
									o.start.row = s.start.row, o.start.column = s.start
										.column, o.end.row = s.end.row, o.end.column = s.end
										.column
								}
							}
							i.mergeOverlappingRanges();
							var a = [];
							for (r = n.length; r--;) {
								o = n[r];
								a.unshift(t.getTextRange(o))
							}
							e < 0 ? a.unshift(a.pop()) : a.push(a.shift());
							for (r = n.length; r--;) {
								o = n[r], s = o.clone();
								t.replace(o, a[r]), o.start.row = s.start.row, o.start
									.column = s.start.column
							}
						}, this.selectMore = function(e, t, i) {
							var n = this.session,
								r = n.multiSelect,
								o = r.toOrientedRange();
							if (!o.isEmpty() || (o = n.getWordRange(o.start.row, o.start
										.column), o.cursor = -1 == e ? o.start : o.end, this
									.multiSelect.addRange(o), !i)) {
								var s = n.getTextRange(o),
									a = d(n, s, e);
								a && (a.cursor = -1 == e ? a.start : a.end, this
										.$blockScrolling += 1, this.session.unfold(a), this
										.multiSelect.addRange(a), this.$blockScrolling -= 1,
										this.renderer.scrollCursorIntoView(null, .5)), t &&
									this.multiSelect.substractPoint(o.cursor)
							}
						}, this.alignCursors = function() {
							var e = this.session,
								t = e.multiSelect,
								i = t.ranges,
								n = -1,
								o = i.filter((function(e) {
									if (e.cursor.row == n) return !0;
									n = e.cursor.row
								}));
							if (i.length && o.length != i.length - 1) {
								o.forEach((function(e) {
									t.substractPoint(e.cursor)
								}));
								var s = 0,
									a = 1 / 0,
									c = i.map((function(t) {
										var i = t.cursor,
											n = e.getLine(i.row),
											r = n.substr(i.column).search(/\S/g);
										return -1 == r && (r = 0), i.column > s && (
											s = i.column), r < a && (a = r), r
									}));
								i.forEach((function(t, i) {
										var n = t.cursor,
											o = s - n.column,
											h = c[i] - a;
										o > h ? e.insert(n, l.stringRepeat(" ", o -
												h)) : e.remove(new r(n.row, n
												.column, n.row, n.column - o + h
												)), t.start.column = t.end.column =
											s, t.start.row = t.end.row = n.row, t
											.cursor = t.end
									})), t.fromOrientedRange(i[0]), this.renderer
									.updateCursor(), this.renderer.updateBackMarkers()
							} else {
								var h = this.selection.getRange(),
									u = h.start.row,
									d = h.end.row,
									g = u == d;
								if (g) {
									var f, p = this.session.getLength();
									do {
										f = this.session.getLine(d)
									} while (/[=:]/.test(f) && ++d < p);
									do {
										f = this.session.getLine(u)
									} while (/[=:]/.test(f) && --u > 0);
									u < 0 && (u = 0), d >= p && (d = p - 1)
								}
								var m = this.session.removeFullLines(u, d);
								m = this.$reAlignText(m, g), this.session.insert({
										row: u,
										column: 0
									}, m.join("\n") + "\n"), g || (h.start.column = 0, h.end
										.column = m[m.length - 1].length), this.selection
									.setRange(h)
							}
						}, this.$reAlignText = function(e, t) {
							var i, n, r, o = !0,
								s = !0;
							return e.map((function(e) {
								var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
								return t ? null == i ? (i = t[1].length, n = t[
									2].length, r = t[3].length, t) : (i +
									n + r != t[1].length + t[2].length + t[
										3].length && (s = !1), i != t[1]
									.length && (o = !1), i > t[1].length &&
									(i = t[1].length), n < t[2].length && (
										n = t[2].length), r > t[3].length &&
									(r = t[3].length), t) : [e]
							})).map(t ? c : o ? s ? h : c : u);

							function a(e) {
								return l.stringRepeat(" ", e)
							}

							function c(e) {
								return e[2] ? a(i) + e[2] + a(n - e[2].length + r) + e[4]
									.replace(/^([=:])\s+/, "$1 ") : e[0]
							}

							function h(e) {
								return e[2] ? a(i + n - e[2].length) + e[2] + a(r, " ") + e[
									4].replace(/^([=:])\s+/, "$1 ") : e[0]
							}

							function u(e) {
								return e[2] ? a(i) + e[2] + a(r) + e[4].replace(
									/^([=:])\s+/, "$1 ") : e[0]
							}
						}
					}).call(f.prototype), t.onSessionChange = function(e) {
						var t = e.session;
						t && !t.multiSelect && (t.$selectionMarkers = [], t.selection
								.$initRangeList(), t.multiSelect = t.selection), this
							.multiSelect = t && t.multiSelect;
						var i = e.oldSession;
						i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect
								.off("removeRange", this.$onRemoveRange), i.multiSelect.off(
									"multiSelect", this.$onMultiSelect), i.multiSelect.off(
									"singleSelect", this.$onSingleSelect), i.multiSelect.lead
								.off("change", this.$checkMultiselectChange), i.multiSelect
								.anchor.off("change", this.$checkMultiselectChange)), t && (t
								.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on(
									"removeRange", this.$onRemoveRange), t.multiSelect.on(
									"multiSelect", this.$onMultiSelect), t.multiSelect.on(
									"singleSelect", this.$onSingleSelect), t.multiSelect.lead
								.on("change", this.$checkMultiselectChange), t.multiSelect
								.anchor.on("change", this.$checkMultiselectChange)), t && this
							.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection
								.inMultiSelectMode ? this.$onMultiSelect() : this
								.$onSingleSelect())
					}, t.MultiSelect = m, e("./config").defineOptions(f.prototype, "editor", {
						enableMultiselect: {
							set: function(e) {
								m(this), e ? (this.on("changeSession", this
									.$multiselectOnSessionChange), this.on(
									"mousedown", s)) : (this.off("changeSession",
									this.$multiselectOnSessionChange), this.off(
									"mousedown", s))
							},
							value: !0
						},
						enableBlockSelect: {
							set: function(e) {
								this.$blockSelectEnabled = e
							},
							value: !0
						}
					})
				})), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"],
					(function(e, t, i) {
						"use strict";
						var n = e("../../range").Range,
							r = t.FoldMode = function() {};
						(function() {
							this.foldingStartMarker = null, this.foldingStopMarker = null, this
								.getFoldWidget = function(e, t, i) {
									var n = e.getLine(i);
									return this.foldingStartMarker.test(n) ? "start" :
										"markbeginend" == t && this.foldingStopMarker && this
										.foldingStopMarker.test(n) ? "end" : ""
								}, this.getFoldWidgetRange = function(e, t, i) {
									return null
								}, this.indentationBlock = function(e, t, i) {
									var r = /\S/,
										o = e.getLine(t),
										s = o.search(r);
									if (-1 != s) {
										var a = i || o.length,
											l = e.getLength(),
											c = t,
											h = t;
										while (++t < l) {
											var u = e.getLine(t).search(r);
											if (-1 != u) {
												if (u <= s) break;
												h = t
											}
										}
										if (h > c) {
											var d = e.getLine(h).length;
											return new n(c, a, h, d)
										}
									}
								}, this.openingBracketBlock = function(e, t, i, r, o) {
									var s = {
											row: i,
											column: r + 1
										},
										a = e.$findClosingBracket(t, s, o);
									if (a) {
										var l = e.foldWidgets[a.row];
										return null == l && (l = e.getFoldWidget(a.row)), "start" ==
											l && a.row > s.row && (a.row--, a.column = e.getLine(a
												.row).length), n.fromPoints(s, a)
									}
								}, this.closingBracketBlock = function(e, t, i, r, o) {
									var s = {
											row: i,
											column: r
										},
										a = e.$findOpeningBracket(t, s);
									if (a) return a.column++, s.column--, n.fromPoints(a, s)
								}
						}).call(r.prototype)
					})), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], (
					function(e, t, i) {
						"use strict";
						t.isDark = !1, t.cssClass = "ace-tm", t.cssText =
							'.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
						var n = e("../lib/dom");
						n.importCssString(t.cssText, t.cssClass)
					})), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/dom", "ace/range"
				], (function(e, t, i) {
					"use strict";
					e("./lib/oop");
					var n = e("./lib/dom");
					e("./range").Range;

					function r(e) {
						this.session = e, this.session.widgetManager = this, this.session
							.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength =
							this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange
							.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this
							.measureWidgets = this.measureWidgets.bind(this), this.session
							._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(
								this), this.session.on("change", this.updateOnChange), this.session
							.on("changeFold", this.updateOnFold), this.session.on("changeEditor",
								this.$onChangeEditor)
					}(function() {
						this.getRowLength = function(e) {
							var t;
							return t = this.lineWidgets && this.lineWidgets[e] && this
								.lineWidgets[e].rowCount || 0, this.$useWrapMode && this
								.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
						}, this.$getWidgetScreenLength = function() {
							var e = 0;
							return this.lineWidgets.forEach((function(t) {
								t && t.rowCount && !t.hidden && (e += t
									.rowCount)
							})), e
						}, this.$onChangeEditor = function(e) {
							this.attach(e.editor)
						}, this.attach = function(e) {
							e && e.widgetManager && e.widgetManager != this && e
								.widgetManager.detach(), this.editor != e && (this.detach(),
									this.editor = e, e && (e.widgetManager = this, e
										.renderer.on("beforeRender", this.measureWidgets), e
										.renderer.on("afterRender", this.renderWidgets)))
						}, this.detach = function(e) {
							var t = this.editor;
							if (t) {
								this.editor = null, t.widgetManager = null, t.renderer.off(
										"beforeRender", this.measureWidgets), t.renderer
									.off("afterRender", this.renderWidgets);
								var i = this.session.lineWidgets;
								i && i.forEach((function(e) {
									e && e.el && e.el.parentNode && (e
										._inDocument = !1, e.el.parentNode
										.removeChild(e.el))
								}))
							}
						}, this.updateOnFold = function(e, t) {
							var i = t.lineWidgets;
							if (i && e.action) {
								for (var n = e.data, r = n.start.row, o = n.end.row, s =
										"add" == e.action, a = r + 1; a < o; a++) i[a] && (
									i[a].hidden = s);
								i[o] && (s ? i[r] ? i[o].hidden = s : i[r] = i[o] : (i[r] ==
									i[o] && (i[r] = void 0), i[o].hidden = s))
							}
						}, this.updateOnChange = function(e) {
							var t = this.session.lineWidgets;
							if (t) {
								var i = e.start.row,
									n = e.end.row - i;
								if (0 === n);
								else if ("remove" == e.action) {
									var r = t.splice(i + 1, n);
									r.forEach((function(e) {
										e && this.removeLineWidget(e)
									}), this), this.$updateRows()
								} else {
									var o = new Array(n);
									o.unshift(i, 0), t.splice.apply(t, o), this
									.$updateRows()
								}
							}
						}, this.$updateRows = function() {
							var e = this.session.lineWidgets;
							if (e) {
								var t = !0;
								e.forEach((function(e, i) {
									if (e) {
										t = !1, e.row = i;
										while (e.$oldWidget) e.$oldWidget.row =
											i, e = e.$oldWidget
									}
								})), t && (this.session.lineWidgets = null)
							}
						}, this.addLineWidget = function(e) {
							this.session.lineWidgets || (this.session.lineWidgets =
								new Array(this.session.getLength()));
							var t = this.session.lineWidgets[e.row];
							t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el
									.parentNode.removeChild(t.el), t._inDocument = !1)),
								this.session.lineWidgets[e.row] = e, e.session = this
								.session;
							var i = this.editor.renderer;
							e.html && !e.el && (e.el = n.createElement("div"), e.el
									.innerHTML = e.html), e.el && (n.addCssClass(e.el,
										"ace_lineWidgetContainer"), e.el.style.position =
									"absolute", e.el.style.zIndex = 5, i.container
									.appendChild(e.el), e._inDocument = !0), e
								.coverGutter || (e.el.style.zIndex = 3), null == e
								.pixelHeight && (e.pixelHeight = e.el.offsetHeight), null ==
								e.rowCount && (e.rowCount = e.pixelHeight / i.layerConfig
									.lineHeight);
							var r = this.session.getFoldAt(e.row, 0);
							if (e.$fold = r, r) {
								var o = this.session.lineWidgets;
								e.row != r.end.row || o[r.start.row] ? e.hidden = !0 : o[r
									.start.row] = e
							}
							return this.session._emit("changeFold", {
									data: {
										start: {
											row: e.row
										}
									}
								}), this.$updateRows(), this.renderWidgets(null, i), this
								.onWidgetChanged(e), e
						}, this.removeLineWidget = function(e) {
							if (e._inDocument = !1, e.session = null, e.el && e.el
								.parentNode && e.el.parentNode.removeChild(e.el), e
								.editor && e.editor.destroy) try {
								e.editor.destroy()
							} catch (i) {}
							if (this.session.lineWidgets) {
								var t = this.session.lineWidgets[e.row];
								if (t == e) this.session.lineWidgets[e.row] = e.$oldWidget,
									e.$oldWidget && this.onWidgetChanged(e.$oldWidget);
								else
									while (t) {
										if (t.$oldWidget == e) {
											t.$oldWidget = e.$oldWidget;
											break
										}
										t = t.$oldWidget
									}
							}
							this.session._emit("changeFold", {
								data: {
									start: {
										row: e.row
									}
								}
							}), this.$updateRows()
						}, this.getWidgetsAtRow = function(e) {
							var t = this.session.lineWidgets,
								i = t && t[e],
								n = [];
							while (i) n.push(i), i = i.$oldWidget;
							return n
						}, this.onWidgetChanged = function(e) {
							this.session._changedWidgets.push(e), this.editor && this.editor
								.renderer.updateFull()
						}, this.measureWidgets = function(e, t) {
							var i = this.session._changedWidgets,
								n = t.layerConfig;
							if (i && i.length) {
								for (var r = 1 / 0, o = 0; o < i.length; o++) {
									var s = i[o];
									if (s && s.el && s.session == this.session) {
										if (!s._inDocument) {
											if (this.session.lineWidgets[s.row] != s)
												continue;
											s._inDocument = !0, t.container.appendChild(s
												.el)
										}
										s.h = s.el.offsetHeight, s.fixedWidth || (s.w = s.el
											.offsetWidth, s.screenWidth = Math.ceil(s
												.w / n.characterWidth));
										var a = s.h / n.lineHeight;
										s.coverLine && (a -= this.session.getRowLineCount(s
												.row), a < 0 && (a = 0)), s.rowCount != a &&
											(s.rowCount = a, s.row < r && (r = s.row))
									}
								}
								r != 1 / 0 && (this.session._emit("changeFold", {
										data: {
											start: {
												row: r
											}
										}
									}), this.session.lineWidgetWidth = null), this.session
									._changedWidgets = []
							}
						}, this.renderWidgets = function(e, t) {
							var i = t.layerConfig,
								n = this.session.lineWidgets;
							if (n) {
								var r = Math.min(this.firstRow, i.firstRow),
									o = Math.max(this.lastRow, i.lastRow, n.length);
								while (r > 0 && !n[r]) r--;
								this.firstRow = i.firstRow, this.lastRow = i.lastRow, t
									.$cursorLayer.config = i;
								for (var s = r; s <= o; s++) {
									var a = n[s];
									if (a && a.el)
										if (a.hidden) a.el.style.top = -100 - (a
											.pixelHeight || 0) + "px";
										else {
											a._inDocument || (a._inDocument = !0, t
												.container.appendChild(a.el));
											var l = t.$cursorLayer.getPixelPosition({
												row: s,
												column: 0
											}, !0).top;
											a.coverLine || (l += i.lineHeight * this.session
													.getRowLineCount(a.row)), a.el.style
												.top = l - i.offset + "px";
											var c = a.coverGutter ? 0 : t.gutterWidth;
											a.fixedWidth || (c -= t.scrollLeft), a.el.style
												.left = c + "px", a.fullWidth && a
												.screenWidth && (a.el.style.minWidth = i
													.width + 2 * i.padding + "px"), a
												.fixedWidth ? a.el.style.right = t.scrollBar
												.getWidth() + "px" : a.el.style.right = ""
										}
								}
							}
						}
					}).call(r.prototype), t.LineWidgets = r
				})), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets",
					"ace/lib/dom", "ace/range"
				], (function(e, t, i) {
					"use strict";
					var n = e("../line_widgets").LineWidgets,
						r = e("../lib/dom"),
						o = e("../range").Range;

					function s(e, t, i) {
						var n = 0,
							r = e.length - 1;
						while (n <= r) {
							var o = n + r >> 1,
								s = i(t, e[o]);
							if (s > 0) n = o + 1;
							else {
								if (!(s < 0)) return o;
								r = o - 1
							}
						}
						return -(n + 1)
					}

					function a(e, t, i) {
						var n = e.getAnnotations().sort(o.comparePoints);
						if (n.length) {
							var r = s(n, {
								row: t,
								column: -1
							}, o.comparePoints);
							r < 0 && (r = -r - 1), r >= n.length ? r = i > 0 ? 0 : n.length - 1 :
								0 === r && i < 0 && (r = n.length - 1);
							var a = n[r];
							if (a && i) {
								if (a.row === t) {
									do {
										a = n[r += i]
									} while (a && a.row === t);
									if (!a) return n.slice()
								}
								var l = [];
								t = a.row;
								do {
									l[i < 0 ? "unshift" : "push"](a), a = n[r += i]
								} while (a && a.row == t);
								return l.length && l
							}
						}
					}
					t.showErrorMarker = function(e, t) {
						var i = e.session;
						i.widgetManager || (i.widgetManager = new n(i), i.widgetManager.attach(
							e));
						var o = e.getCursorPosition(),
							s = o.row,
							l = i.widgetManager.getWidgetsAtRow(s).filter((function(e) {
								return "errorMarker" == e.type
							}))[0];
						l ? l.destroy() : s -= t;
						var c, h = a(i, s, t);
						if (h) {
							var u = h[0];
							o.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u
									.column) || 0, o.row = u.row, c = e.renderer.$gutterLayer
								.$annotations[o.row]
						} else {
							if (l) return;
							c = {
								text: ["Looks good!"],
								className: "ace_ok"
							}
						}
						e.session.unfold(o.row), e.selection.moveToPosition(o);
						var d = {
								row: o.row,
								fixedWidth: !0,
								coverGutter: !0,
								el: r.createElement("div"),
								type: "errorMarker"
							},
							g = d.el.appendChild(r.createElement("div")),
							f = d.el.appendChild(r.createElement("div"));
						f.className = "error_widget_arrow " + c.className;
						var p = e.renderer.$cursorLayer.getPixelPosition(o).left;
						f.style.left = p + e.renderer.gutterWidth - 5 + "px", d.el.className =
							"error_widget_wrapper", g.className = "error_widget " + c.className,
							g.innerHTML = c.text.join("<br>"), g.appendChild(r.createElement(
								"div"));
						var m = function(e, t, i) {
							if (0 === t && ("esc" === i || "return" === i)) return d
								.destroy(), {
									command: "null"
								}
						};
						d.destroy = function() {
								e.$mouseHandler.isMousePressed || (e.keyBinding
									.removeKeyboardHandler(m), i.widgetManager
									.removeLineWidget(d), e.off("changeSelection", d
										.destroy), e.off("changeSession", d.destroy), e.off(
										"mouseup", d.destroy), e.off("change", d.destroy))
							}, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", d
								.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d
								.destroy), e.on("change", d.destroy), e.session.widgetManager
							.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer
							.scrollCursorIntoView(null, .5, {
								bottom: d.el.offsetHeight
							})
					}, r.importCssString(
						"    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }",
						"")
				})), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers",
					"ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager",
					"ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler",
					"ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode",
					"ace/theme/textmate", "ace/ext/error_marker", "ace/config"
				], (function(e, t, n) {
					"use strict";
					e("./lib/fixoldbrowsers");
					var r = e("./lib/dom"),
						o = e("./lib/event"),
						s = e("./editor").Editor,
						a = e("./edit_session").EditSession,
						l = e("./undomanager").UndoManager,
						c = e("./virtual_renderer").VirtualRenderer;
					e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"),
						e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"),
						e("./ext/error_marker"), t.config = e("./config"), t.acequire = e, t
						.define = i("07d6"), t.edit = function(e) {
							if ("string" == typeof e) {
								var i = e;
								if (e = document.getElementById(i), !e) throw new Error(
									"ace.edit can't find div #" + i)
							}
							if (e && e.env && e.env.editor instanceof s) return e.env.editor;
							var n = "";
							if (e && /input|textarea/i.test(e.tagName)) {
								var a = e;
								n = a.value, e = r.createElement("pre"), a.parentNode.replaceChild(
									e, a)
							} else e && (n = r.getInnerText(e), e.innerHTML = "");
							var l = t.createEditSession(n),
								h = new s(new c(e));
							h.setSession(l);
							var u = {
								document: l,
								editor: h,
								onResize: h.resize.bind(h, null)
							};
							return a && (u.textarea = a), o.addListener(window, "resize", u
								.onResize), h.on("destroy", (function() {
								o.removeListener(window, "resize", u.onResize), u.editor
									.container.env = null
							})), h.container.env = h.env = u, h
						}, t.createEditSession = function(e, t) {
							var i = new a(e, t);
							return i.setUndoManager(new l), i
						}, t.EditSession = a, t.UndoManager = l, t.version = "1.2.9"
				})),
				function() {
					ace.acequire(["ace/ace"], (function(e) {
						for (var t in e && (e.config.init(!0), e.define = ace.define), window
								.ace || (window.ace = e), e) e.hasOwnProperty(t) && (window.ace[
							t] = e[t])
					}))
				}(), e.exports = window.ace.acequire("ace/ace")
		},
		"07d6": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"1b37": function(e, t, i) {
			! function(t, i) {
				e.exports = i()
			}("undefined" != typeof self && self, (function() {
				return function(e) {
					function t(n) {
						if (i[n]) return i[n].exports;
						var r = i[n] = {
							i: n,
							l: !1,
							exports: {}
						};
						return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
					}
					var i = {};
					return t.m = e, t.c = i, t.d = function(e, i, n) {
						t.o(e, i) || Object.defineProperty(e, i, {
							configurable: !1,
							enumerable: !0,
							get: n
						})
					}, t.n = function(e) {
						var i = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return t.d(i, "a", i), i
					}, t.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}, t.p = "/build/", t(t.s = 1)
				}([function(e, t, i) {
					"use strict";
					var n = i(9);
					t.a = n.a
				}, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var n = i(2);
					t.default = n.a
				}, function(e, t, i) {
					"use strict";

					function n(e) {
						i(3)
					}
					var r = i(0),
						o = i(10),
						s = i(8),
						a = n,
						l = s(r.a, o.a, !1, a, "data-v-2ac842d8", null);
					t.a = l.exports
				}, function(e, t, i) {
					var n = i(4);
					"string" == typeof n && (n = [
						[e.i, n, ""]
					]), n.locals && (e.exports = n.locals), i(6)("e1788228", n, !
					0, {})
				}, function(e, t, i) {
					t = e.exports = i(5)(!1), t.push([e.i,
						".json-view-container[data-v-2ac842d8]{background-color:#fff}.json-view-container.deep-1[data-v-2ac842d8]{padding-right:10px}.json-view-container .json-view[data-v-2ac842d8]{position:relative;display:block;width:100%;height:100%;white-space:nowrap;padding-left:2rem;box-sizing:border-box;font-family:Consolas!important;cursor:default}.json-view-container .json-view .json-note[data-v-2ac842d8]{color:#909399;font-size:12px;font-style:italic}.json-view-container .json-view .json-key[data-v-2ac842d8]{color:#8c6325}.json-view-container .json-view .json-value[data-v-2ac842d8]{display:inline-block;color:#57b73b;word-break:break-all;white-space:normal}.json-view-container .json-view .json-value.number[data-v-2ac842d8]{color:#2d8cf0}.json-view-container .json-view .json-value.string[data-v-2ac842d8]{color:#57b73b}.json-view-container .json-view .json-value.boolean[data-v-2ac842d8],.json-view-container .json-view .json-value.null[data-v-2ac842d8]{color:#eb3324}.json-view-container .json-view .json-item[data-v-2ac842d8]{margin:0;padding-left:2rem;display:flex}.json-view-container .json-view .first-line[data-v-2ac842d8]{padding:0;margin:0}.json-view-container .json-view .first-line.pointer[data-v-2ac842d8]{cursor:pointer!important}.json-view-container .json-view .json-body[data-v-2ac842d8]{position:relative;padding:0;margin:0}.json-view-container .json-view .json-body .base-line[data-v-2ac842d8]{position:absolute;height:100%;border-left:1px dashed #bbb;top:0;left:2px}.json-view-container .json-view .last-line[data-v-2ac842d8]{padding:0;margin:0}.json-view-container .json-view .angle[data-v-2ac842d8]{position:absolute;display:block;cursor:pointer;float:left;width:20px;text-align:center;left:12px}.json-view-container.one-dark[data-v-2ac842d8]{background-color:#292c33}.json-view-container.one-dark .json-view[data-v-2ac842d8]{font-family:Menlo,Consolas,Courier New,Courier,FreeMono,monospace!important}.json-view-container.one-dark .json-view .json-note[data-v-2ac842d8]{color:#909399;font-size:12px;font-style:italic}.json-view-container.one-dark .json-view .json-key[data-v-2ac842d8]{color:#d27277}.json-view-container.one-dark .json-view .json-value[data-v-2ac842d8]{color:#c6937c}.json-view-container.one-dark .json-view .json-value.number[data-v-2ac842d8]{color:#bacdab}.json-view-container.one-dark .json-view .json-value.string[data-v-2ac842d8]{color:#c6937c}.json-view-container.one-dark .json-view .json-value.boolean[data-v-2ac842d8],.json-view-container.one-dark .json-view .json-value.null[data-v-2ac842d8]{color:#659bd1}.json-view-container.one-dark .json-view .first-line[data-v-2ac842d8]{color:#acb2be}.json-view-container.one-dark .json-view .json-body .base-line[data-v-2ac842d8]{border-left:1px solid #3c4047}.json-view-container.one-dark .json-view .json-item[data-v-2ac842d8],.json-view-container.one-dark .json-view .last-line[data-v-2ac842d8]{color:#acb2be}.json-view-container.vs-code[data-v-2ac842d8]{background-color:#1e1e1e}.json-view-container.vs-code .json-view[data-v-2ac842d8]{font-family:Menlo,Consolas,Courier New,Courier,FreeMono,monospace!important}.json-view-container.vs-code .json-view .json-note[data-v-2ac842d8]{color:#909399;font-size:12px;font-style:italic}.json-view-container.vs-code .json-view .json-key[data-v-2ac842d8]{color:#a9dbfb}.json-view-container.vs-code .json-view .json-value[data-v-2ac842d8]{color:#c6937c}.json-view-container.vs-code .json-view .first-line[data-v-2ac842d8]{color:#d4d4d4}.json-view-container.vs-code .json-view .json-body .base-line[data-v-2ac842d8]{border-left:1px solid #404040}.json-view-container.vs-code .json-view .json-item[data-v-2ac842d8],.json-view-container.vs-code .json-view .last-line[data-v-2ac842d8]{color:#d4d4d4}",
						""
					])
				}, function(e, t) {
					function i(e, t) {
						var i = e[1] || "",
							r = e[3];
						if (!r) return i;
						if (t && "function" == typeof btoa) {
							var o = n(r);
							return [i].concat(r.sources.map((function(e) {
								return "/*# sourceURL=" + r.sourceRoot +
									e + " */"
							}))).concat([o]).join("\n")
						}
						return [i].join("\n")
					}

					function n(e) {
						return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
							btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
							" */"
					}
					e.exports = function(e) {
						var t = [];
						return t.toString = function() {
							return this.map((function(t) {
								var n = i(t, e);
								return t[2] ? "@media " + t[2] +
									"{" + n + "}" : n
							})).join("")
						}, t.i = function(e, i) {
							"string" == typeof e && (e = [
								[null, e, ""]
							]);
							for (var n = {}, r = 0; r < this.length; r++) {
								var o = this[r][0];
								"number" == typeof o && (n[o] = !0)
							}
							for (r = 0; r < e.length; r++) {
								var s = e[r];
								"number" == typeof s[0] && n[s[0]] || (i && !s[
									2] ? s[2] = i : i && (s[2] = "(" +
									s[2] + ") and (" + i + ")"), t.push(
									s))
							}
						}, t
					}
				}, function(e, t, i) {
					function n(e) {
						for (var t = 0; t < e.length; t++) {
							var i = e[t],
								n = h[i.id];
							if (n) {
								n.refs++;
								for (var r = 0; r < n.parts.length; r++) n.parts[r](i
									.parts[r]);
								for (; r < i.parts.length; r++) n.parts.push(o(i.parts[
									r]));
								n.parts.length > i.parts.length && (n.parts.length = i
									.parts.length)
							} else {
								var s = [];
								for (r = 0; r < i.parts.length; r++) s.push(o(i.parts[
									r]));
								h[i.id] = {
									id: i.id,
									refs: 1,
									parts: s
								}
							}
						}
					}

					function r() {
						var e = document.createElement("style");
						return e.type = "text/css", u.appendChild(e), e
					}

					function o(e) {
						var t, i, n = document.querySelector("style[" + v + '~="' + e
							.id + '"]');
						if (n) {
							if (f) return p;
							n.parentNode.removeChild(n)
						}
						if (w) {
							var o = g++;
							n = d || (d = r()), t = s.bind(null, n, o, !1), i = s.bind(
								null, n, o, !0)
						} else n = r(), t = a.bind(null, n), i = function() {
							n.parentNode.removeChild(n)
						};
						return t(e),
							function(n) {
								if (n) {
									if (n.css === e.css && n.media === e.media && n
										.sourceMap === e.sourceMap) return;
									t(e = n)
								} else i()
							}
					}

					function s(e, t, i, n) {
						var r = i ? "" : n.css;
						if (e.styleSheet) e.styleSheet.cssText = b(t, r);
						else {
							var o = document.createTextNode(r),
								s = e.childNodes;
							s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[
								t]) : e.appendChild(o)
						}
					}

					function a(e, t) {
						var i = t.css,
							n = t.media,
							r = t.sourceMap;
						if (n && e.setAttribute("media", n), m.ssrId && e.setAttribute(
								v, t.id), r && (i += "\n/*# sourceURL=" + r.sources[0] +
								" */", i +=
								"\n/*# sourceMappingURL=data:application/json;base64," +
								btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
								" */"), e.styleSheet) e.styleSheet.cssText = i;
						else {
							for (; e.firstChild;) e.removeChild(e.firstChild);
							e.appendChild(document.createTextNode(i))
						}
					}
					var l = "undefined" != typeof document;
					if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error(
						"vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
						);
					var c = i(7),
						h = {},
						u = l && (document.head || document.getElementsByTagName(
							"head")[0]),
						d = null,
						g = 0,
						f = !1,
						p = function() {},
						m = null,
						v = "data-vue-ssr-id",
						w = "undefined" != typeof navigator && /msie [6-9]\b/.test(
							navigator.userAgent.toLowerCase());
					e.exports = function(e, t, i, r) {
						f = i, m = r || {};
						var o = c(e, t);
						return n(o),
							function(t) {
								for (var i = [], r = 0; r < o.length; r++) {
									var s = o[r],
										a = h[s.id];
									a.refs--, i.push(a)
								}
								t ? (o = c(e, t), n(o)) : o = [];
								for (r = 0; r < i.length; r++) {
									a = i[r];
									if (0 === a.refs) {
										for (var l = 0; l < a.parts.length; l++) a
											.parts[l]();
										delete h[a.id]
									}
								}
							}
					};
					var b = function() {
						var e = [];
						return function(t, i) {
							return e[t] = i, e.filter(Boolean).join("\n")
						}
					}()
				}, function(e, t) {
					e.exports = function(e, t) {
						for (var i = [], n = {}, r = 0; r < t.length; r++) {
							var o = t[r],
								s = o[0],
								a = o[1],
								l = o[2],
								c = o[3],
								h = {
									id: e + ":" + r,
									css: a,
									media: l,
									sourceMap: c
								};
							n[s] ? n[s].parts.push(h) : i.push(n[s] = {
								id: s,
								parts: [h]
							})
						}
						return i
					}
				}, function(e, t) {
					e.exports = function(e, t, i, n, r, o) {
						var s, a = e = e || {},
							l = typeof e.default;
						"object" !== l && "function" !== l || (s = e, a = e
						.default);
						var c, h = "function" == typeof a ? a.options : a;
						if (t && (h.render = t.render, h.staticRenderFns = t
								.staticRenderFns, h._compiled = !0), i && (h
								.functional = !0), r && (h._scopeId = r), o ? (c =
								function(e) {
									e = e || this.$vnode && this.$vnode
										.ssrContext || this.parent && this.parent
										.$vnode && this.parent.$vnode.ssrContext,
										e || "undefined" ==
										typeof __VUE_SSR_CONTEXT__ || (e =
											__VUE_SSR_CONTEXT__), n && n.call(this,
											e), e && e._registeredComponents && e
										._registeredComponents.add(o)
								}, h._ssrRegister = c) : n && (c = n), c) {
							var u = h.functional,
								d = u ? h.render : h.beforeCreate;
							u ? (h._injectStyles = c, h.render = function(e, t) {
								return c.call(t), d(e, t)
							}) : h.beforeCreate = d ? [].concat(d, c) : [c]
						}
						return {
							esModule: s,
							exports: a,
							options: h
						}
					}
				}, function(e, t, i) {
					"use strict";
					t.a = {
						name: "jsonView",
						props: {
							data: {
								type: [Object, Array],
								required: !0
							},
							jsonKey: {
								type: String,
								default: ""
							},
							closed: {
								type: Boolean,
								default: !1
							},
							isLast: {
								type: Boolean,
								default: !0
							},
							fontSize: {
								type: Number,
								default: 14
							},
							lineHeight: {
								type: Number,
								default: 24
							},
							deep: {
								type: Number,
								default: 3
							},
							currentDeep: {
								type: Number,
								default: 1
							},
							iconStyle: {
								type: String,
								default: "square"
							},
							iconColor: {
								type: Array,
								default: function() {
									return []
								}
							},
							theme: {
								type: String,
								default: ""
							},
							hasSiblings: {
								type: Boolean,
								default: !0
							}
						},
						data: function() {
							return {
								innerclosed: this.closed,
								templateDeep: this.currentDeep,
								visible: !1
							}
						},
						computed: {
							isArray: function() {
								return "array" === this.getDataType(this.data)
							},
							length: function() {
								return this.isArray ? this.data.length : Object
									.keys(this.data).length
							},
							subfix: function() {
								var e = this.data;
								return this.isEmptyArrayOrObject(e) ? "" : (this
									.isArray ? "]" : "}") + (this.isLast ?
									"" : ",")
							},
							prefix: function() {
								return this.isArray ? "[" : "{"
							},
							items: function() {
								var e = this,
									t = this.data;
								return this.isArray ? t.map((function(t) {
									return {
										value: t,
										isJSON: e.isObjectOrArray(
											t),
										key: ""
									}
								})) : Object.keys(t).map((function(i) {
									var n = t[i];
									return {
										value: n,
										isJSON: e.isObjectOrArray(
											n),
										key: i
									}
								}))
							},
							iconColors: function() {
								var e = this.theme,
									t = this.iconColor;
								return 2 === t.length ? t : "one-dark" === e ? [
										"#747983", "#747983"
									] : "vs-code" === e ? ["#c6c6c6",
									"#c6c6c6"] : ["#747983", "#747983"]
							}
						},
						mounted: function() {
							var e = this;
							setTimeout((function() {
								e.visible = !0
							}), 0)
						},
						methods: {
							getDataType: function(e) {
								return Object.prototype.toString.call(e).slice(
									8, -1).toLowerCase()
							},
							isObjectOrArray: function(e) {
								return ["array", "object"].includes(this
									.getDataType(e))
							},
							toggleClose: function() {
								0 !== this.length && (this.innerclosed ? this
									.innerclosed = !1 : this.innerclosed = !
									0)
							},
							isClose: function() {
								return this.templateDeep + 1 > this.deep
							},
							isEmptyArrayOrObject: function(e) {
								return [{},
									[]
								].map((function(e) {
									return JSON.stringify(e)
								})).includes(JSON.stringify(e))
							}
						},
						watch: {
							closed: function() {
								this.innerclosed = this.closed
							}
						}
					}
				}, function(e, t, i) {
					"use strict";
					var n = function() {
							var e = this,
								t = e.$createElement,
								i = e._self._c || t;
							return e.visible ? i("div", {
								class: ["json-view-container", e.theme,
									"deep-" + e.currentDeep
								]
							}, [i("div", {
								class: ["json-view", e.length ?
									"closeable" : ""
								],
								style: {
									fontSize: e.fontSize + "px",
									lineHeight: e.lineHeight + "px"
								}
							}, [e.length && "square" === e.iconStyle ?
								i("span", {
									staticClass: "angle",
									on: {
										click: e.toggleClose
									}
								}, [e.innerclosed ? i("svg", {
										staticStyle: {
											"vertical-align": "middle",
											color: "rgb(42, 161, 152)",
											height: "1em",
											width: "1em"
										},
										attrs: {
											fill: e.iconColors[
												0],
											width: "1em",
											height: "1em",
											viewBox: "0 0 1792 1792"
										}
									}, [i("path", {
										attrs: {
											d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
										}
									})]) : e._e(), e._v(" "), e
									.innerclosed ? e._e() : i(
									"svg", {
										staticStyle: {
											"vertical-align": "middle",
											color: "rgb(88, 110, 117)",
											height: "1em",
											width: "1em"
										},
										attrs: {
											fill: e.iconColors[
												1],
											width: "1em",
											height: "1em",
											viewBox: "0 0 1792 1792"
										}
									}, [i("path", {
										attrs: {
											d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
										}
									})])
								]) : e._e(), e._v(" "), e.length &&
								"circle" === e.iconStyle ? i("span", {
									staticClass: "angle",
									on: {
										click: e.toggleClose
									}
								}, [e.innerclosed ? e._e() : i(
										"svg", {
											staticStyle: {
												"vertical-align": "middle",
												color: "rgb(1, 160, 228)",
												height: "1em",
												width: "1em"
											},
											attrs: {
												viewBox: "0 0 24 24",
												fill: e.iconColors[
													0],
												preserveAspectRatio: "xMidYMid meet"
											}
										}, [i("path", {
											attrs: {
												d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
											}
										})]), e._v(" "), e
									.innerclosed ? i("svg", {
										staticStyle: {
											"vertical-align": "middle",
											color: "rgb(161, 106, 148)",
											height: "1em",
											width: "1em"
										},
										attrs: {
											viewBox: "0 0 24 24",
											fill: e.iconColors[
												1],
											preserveAspectRatio: "xMidYMid meet"
										}
									}, [i("path", {
										attrs: {
											d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
										}
									})]) : e._e()
								]) : e._e(), e._v(" "), e.length &&
								"triangle" === e.iconStyle ? i("span", {
									staticClass: "angle",
									on: {
										click: e.toggleClose
									}
								}, [e.innerclosed ? e._e() : i(
										"svg", {
											staticStyle: {
												"vertical-align": "top",
												color: "#3c4047",
												height: "1em",
												width: "1em",
												"padding-left": "2px"
											},
											attrs: {
												viewBox: "0 0 15 15",
												fill: e.iconColors[
													0]
											}
										}, [i("path", {
											attrs: {
												d: "M0 5l6 6 6-6z"
											}
										})]), e._v(" "), e
									.innerclosed ? i("svg", {
										staticStyle: {
											"vertical-align": "top",
											color: "#3c4047",
											height: "1em",
											width: "1em",
											"padding-left": "2px"
										},
										attrs: {
											viewBox: "0 0 15 15",
											fill: e.iconColors[
												1]
										}
									}, [i("path", {
										attrs: {
											d: "M0 14l6-6-6-6z"
										}
									})]) : e._e()
								]) : e._e(), e._v(" "), i("div", {
									staticClass: "content-wrap"
								}, [i("p", {
										class: ["first-line", e
											.length > 0 ?
											"pointer" : ""
										],
										on: {
											click: e.toggleClose
										}
									}, [e.jsonKey ? i("span", {
											staticClass: "json-key"
										}, [e._v('"' + e._s(
												e
												.jsonKey
												) +
											'": ')]) : e._e(), e
										._v(" "), e.length ? i(
											"span", [e._v(e._s(e
													.prefix
													) + e
												._s(e
													.innerclosed ?
													"..." +
													e
													.subfix :
													"") +
												"\n                    "
												), i(
											"span", {
												staticClass: "json-note"
											}, [e._v(e
												._s(e
													.innerclosed ?
													e
													.length +
													" items" :
													""
													)
												)])]) : e._e(),
										e._v(" "), e.length ? e
										._e() : i("span", [e._v(
											e._s((e.isArray ?
													"[]" :
													"{}"
													) +
												(e.isLast ?
													"" :
													",")
												))])
									]), e._v(" "), !e.innerclosed &&
									e.length ? i("div", {
										staticClass: "json-body"
									}, [e._l(e.items, (function(
											t, n) {
											return [t
												.isJSON ?
												i("json-view", {
													key: n,
													attrs: {
														closed: e
															.isClose(),
														data: t
															.value,
														jsonKey: t
															.key,
														currentDeep: e
															.templateDeep +
															1,
														deep: e
															.deep,
														iconStyle: e
															.iconStyle,
														theme: e
															.theme,
														fontSize: e
															.fontSize,
														lineHeight: e
															.lineHeight,
														iconColor: e
															.iconColors,
														isLast: n ===
															e
															.items
															.length -
															1,
														hasSiblings: t
															.hasSiblings
													}
												}) :
												i("p", {
														key: n,
														staticClass: "json-item"
													},
													[i("span", {
																staticClass: "json-key"
															},
															[e._v(e._s(e.isArray ?
																"" :
																'"' +
																t
																.key +
																'":'
																))]
															),
														e
														._v(
															" "),
														i("span", {
																class: ["json-value",
																	e
																	.getDataType(
																		t
																		.value
																		)
																]
															},
															[e._v("\n                            " +
																e
																._s(("string" ===
																		e
																		.getDataType(
																			t
																			.value
																			) ?
																		'"' :
																		""
																		) +
																	t
																	.value +
																	("string" ===
																		e
																		.getDataType(
																			t
																			.value
																			) ?
																		'"' :
																		""
																		) +
																	(n ===
																		e
																		.items
																		.length -
																		1 ?
																		"" :
																		","
																		)
																	) +
																"\n                        "
																)]
															)
													]
													)
											]
										})), e._v(" "), e
										.innerclosed ? e._e() :
										i("span", {
											staticClass: "base-line"
										})
									], 2) : e._e(), e._v(" "), e
									.innerclosed ? e._e() : i("p", {
										staticClass: "last-line"
									}, [i("span", [e._v(e._s(e
											.subfix
											))])])
								])
							])]) : e._e()
						},
						r = [],
						o = {
							render: n,
							staticRenderFns: r
						};
					t.a = o
				}])
			}))
		},
		"1dde": function(e, t, i) {
			var n = i("d039"),
				r = i("b622"),
				o = i("2d00"),
				s = r("species");
			e.exports = function(e) {
				return o >= 51 || !n((function() {
					var t = [],
						i = t.constructor = {};
					return i[s] = function() {
						return {
							foo: 1
						}
					}, 1 !== t[e](Boolean).foo
				}))
			}
		},
		2099: function(e, t) {
			ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor",
					"ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/event_emitter").EventEmitter,
						o = e("./lib/lang"),
						s = e("./range").Range,
						a = e("./anchor").Anchor,
						l = e("./keyboard/hash_handler").HashHandler,
						c = e("./tokenizer").Tokenizer,
						h = s.comparePoints,
						u = function() {
							this.snippetMap = {}, this.snippetNameMap = {}
						};
					(function() {
						n.implement(this, r), this.getTokenizer = function() {
								function e(e, t, i) {
									return e = e.substr(1), /^\d+$/.test(e) && !i
										.inFormatString ? [{
											tabstopId: parseInt(e, 10)
										}] : [{
											text: e
										}]
								}

								function t(e) {
									return "(?:[^\\\\" + e + "]|\\\\.)"
								}
								return u.$tokenizer = new c({
									start: [{
										regex: /:/,
										onMatch: function(e, t, i) {
											return i.length && i[0]
												.expectIf ? (i[0]
													.expectIf = !1, i[0]
													.elseBranch = i[0], [i[
														0]]) : ":"
										}
									}, {
										regex: /\\./,
										onMatch: function(e, t, i) {
											var n = e[1];
											return "}" == n && i.length || -
												1 != "`$\\".indexOf(n) ? e =
												n : i.inFormatString && (
													"n" == n || "t" == n ?
													e = "\n" : -1 != "ulULE"
													.indexOf(n) && (e = {
														changeCase: n,
														local: n > "a"
													})), [e]
										}
									}, {
										regex: /}/,
										onMatch: function(e, t, i) {
											return [i.length ? i.shift() :
												e]
										}
									}, {
										regex: /\$(?:\d+|\w+)/,
										onMatch: e
									}, {
										regex: /\$\{[\dA-Z_a-z]+/,
										onMatch: function(t, i, n) {
											var r = e(t.substr(1), i, n);
											return n.unshift(r[0]), r
										},
										next: "snippetVar"
									}, {
										regex: /\n/,
										token: "newline",
										merge: !1
									}],
									snippetVar: [{
										regex: "\\|" + t("\\|") + "*\\|",
										onMatch: function(e, t, i) {
											i[0].choices = e.slice(1, -1)
												.split(",")
										},
										next: "start"
									}, {
										regex: "/(" + t("/") + "+)/(?:(" + t(
											"/") + "*)/)(\\w*):?",
										onMatch: function(e, t, i) {
											var n = i[0];
											return n.fmtString = e, e = this
												.splitRegex.exec(e), n
												.guard = e[1], n.fmt = e[2],
												n.flag = e[3], ""
										},
										next: "start"
									}, {
										regex: "`" + t("`") + "*`",
										onMatch: function(e, t, i) {
											return i[0].code = e.splice(1, -
												1), ""
										},
										next: "start"
									}, {
										regex: "\\?",
										onMatch: function(e, t, i) {
											i[0] && (i[0].expectIf = !0)
										},
										next: "start"
									}, {
										regex: "([^:}\\\\]|\\\\.)*:?",
										token: "",
										next: "start"
									}],
									formatString: [{
										regex: "/(" + t("/") + "+)/",
										token: "regex"
									}, {
										regex: "",
										onMatch: function(e, t, i) {
											i.inFormatString = !0
										},
										next: "start"
									}]
								}), u.prototype.getTokenizer = function() {
									return u.$tokenizer
								}, u.$tokenizer
							}, this.tokenizeTmSnippet = function(e, t) {
								return this.getTokenizer().getLineTokens(e, t).tokens.map((
									function(e) {
										return e.value || e
									}))
							}, this.$getDefaultValue = function(e, t) {
								if (/^[A-Z]\d+$/.test(t)) {
									var i = t.substr(1);
									return (this.variables[t[0] + "__"] || {})[i]
								}
								if (/^\d+$/.test(t)) return (this.variables.__ || {})[t];
								if (t = t.replace(/^TM_/, ""), e) {
									var n = e.session;
									switch (t) {
										case "CURRENT_WORD":
											var r = n.getWordRange();
										case "SELECTION":
										case "SELECTED_TEXT":
											return n.getTextRange(r);
										case "CURRENT_LINE":
											return n.getLine(e.getCursorPosition().row);
										case "PREV_LINE":
											return n.getLine(e.getCursorPosition().row - 1);
										case "LINE_INDEX":
											return e.getCursorPosition().column;
										case "LINE_NUMBER":
											return e.getCursorPosition().row + 1;
										case "SOFT_TABS":
											return n.getUseSoftTabs() ? "YES" : "NO";
										case "TAB_SIZE":
											return n.getTabSize();
										case "FILENAME":
										case "FILEPATH":
											return "";
										case "FULLNAME":
											return "Ace"
									}
								}
							}, this.variables = {}, this.getVariableValue = function(e, t) {
								return this.variables.hasOwnProperty(t) ? this.variables[t](e,
									t) || "" : this.$getDefaultValue(e, t) || ""
							}, this.tmStrFormat = function(e, t, i) {
								var n = t.flag || "",
									r = t.guard;
								r = new RegExp(r, n.replace(/[^gi]/, ""));
								var o = this.tokenizeTmSnippet(t.fmt, "formatString"),
									s = this,
									a = e.replace(r, (function() {
										s.variables.__ = arguments;
										for (var e = s.resolveVariables(o, i), t = "E",
												n = 0; n < e.length; n++) {
											var r = e[n];
											if ("object" == typeof r)
												if (e[n] = "", r.changeCase && r
													.local) {
													var a = e[n + 1];
													a && "string" == typeof a && ("u" ==
														r.changeCase ? e[n] = a[0]
														.toUpperCase() : e[n] = a[0]
														.toLowerCase(), e[n + 1] = a
														.substr(1))
												} else r.changeCase && (t = r
													.changeCase);
											else "U" == t ? e[n] = r.toUpperCase() :
												"L" == t && (e[n] = r.toLowerCase())
										}
										return e.join("")
									}));
								return this.variables.__ = null, a
							}, this.resolveVariables = function(e, t) {
								for (var i = [], n = 0; n < e.length; n++) {
									var r = e[n];
									if ("string" == typeof r) i.push(r);
									else {
										if ("object" != typeof r) continue;
										if (r.skip) s(r);
										else {
											if (r.processed < n) continue;
											if (r.text) {
												var o = this.getVariableValue(t, r.text);
												o && r.fmtString && (o = this.tmStrFormat(o,
													r)), r.processed = n, null == r.expectIf ?
													o && (i.push(o), s(r)) : o ? r.skip = r
													.elseBranch : s(r)
											} else(null != r.tabstopId || null != r
												.changeCase) && i.push(r)
										}
									}
								}

								function s(t) {
									var i = e.indexOf(t, n + 1); - 1 != i && (n = i)
								}
								return i
							}, this.insertSnippetForSelection = function(e, t) {
								var i = e.getCursorPosition(),
									n = e.session.getLine(i.row),
									r = e.session.getTabString(),
									o = n.match(/^\s*/)[0];
								i.column < o.length && (o = o.slice(0, i.column)), t = t
									.replace(/\r/g, "");
								var s = this.tokenizeTmSnippet(t);
								s = this.resolveVariables(s, e), s = s.map((function(e) {
									return "\n" == e ? e + o : "string" ==
										typeof e ? e.replace(/\t/g, r) : e
								}));
								var a = [];
								s.forEach((function(e, t) {
									if ("object" == typeof e) {
										var i = e.tabstopId,
											n = a[i];
										if (n || (n = a[i] = [], n.index = i, n
												.value = ""), -1 === n.indexOf(e)) {
											n.push(e);
											var r = s.indexOf(e, t + 1);
											if (-1 !== r) {
												var o = s.slice(t + 1, r),
													l = o.some((function(e) {
														return "object" ===
															typeof e
													}));
												l && !n.value ? n.value = o : !o
													.length || n.value &&
													"string" === typeof n.value || (
														n.value = o.join(""))
											}
										}
									}
								})), a.forEach((function(e) {
									e.length = 0
								}));
								var l = {};

								function c(e) {
									for (var t = [], i = 0; i < e.length; i++) {
										var n = e[i];
										if ("object" == typeof n) {
											if (l[n.tabstopId]) continue;
											var r = e.lastIndexOf(n, i - 1);
											n = t[r] || {
												tabstopId: n.tabstopId
											}
										}
										t[i] = n
									}
									return t
								}
								for (var h = 0; h < s.length; h++) {
									var u = s[h];
									if ("object" == typeof u) {
										var g = u.tabstopId,
											f = s.indexOf(u, h + 1);
										if (l[g]) l[g] === u && (l[g] = null);
										else {
											var p = a[g],
												m = "string" == typeof p.value ? [p.value] : c(p
													.value);
											m.unshift(h + 1, Math.max(0, f - h)), m.push(u), l[
													g] = u, s.splice.apply(s, m), -1 === p
												.indexOf(u) && p.push(u)
										}
									}
								}
								var v = 0,
									w = 0,
									b = "";
								s.forEach((function(e) {
									if ("string" === typeof e) {
										var t = e.split("\n");
										t.length > 1 ? (w = t[t.length - 1].length,
												v += t.length - 1) : w += e.length,
											b += e
									} else e.start ? e.end = {
										row: v,
										column: w
									} : e.start = {
										row: v,
										column: w
									}
								}));
								var A = e.getSelectionRange(),
									C = e.session.replace(A, b),
									F = new d(e),
									y = e.inVirtualSelectionMode && e.selection.index;
								F.addTabstops(a, A.start, C, y)
							}, this.insertSnippet = function(e, t) {
								var i = this;
								if (e.inVirtualSelectionMode) return i
									.insertSnippetForSelection(e, t);
								e.forEachSelection((function() {
									i.insertSnippetForSelection(e, t)
								}), null, {
									keepOrder: !0
								}), e.tabstopManager && e.tabstopManager.tabNext()
							}, this.$getScope = function(e) {
								var t = e.session.$mode.$id || "";
								if (t = t.split("/").pop(), "html" === t || "php" === t) {
									"php" !== t || e.session.$mode.inlinePhp || (t = "html");
									var i = e.getCursorPosition(),
										n = e.session.getState(i.row);
									"object" === typeof n && (n = n[0]), n.substring && (
										"js-" == n.substring(0, 3) ? t = "javascript" :
										"css-" == n.substring(0, 4) ? t = "css" : "php-" ==
										n.substring(0, 4) && (t = "php"))
								}
								return t
							}, this.getActiveScopes = function(e) {
								var t = this.$getScope(e),
									i = [t],
									n = this.snippetMap;
								return n[t] && n[t].includeScopes && i.push.apply(i, n[t]
									.includeScopes), i.push("_"), i
							}, this.expandWithTab = function(e, t) {
								var i = this,
									n = e.forEachSelection((function() {
										return i.expandSnippetForSelection(e, t)
									}), null, {
										keepOrder: !0
									});
								return n && e.tabstopManager && e.tabstopManager.tabNext(), n
							}, this.expandSnippetForSelection = function(e, t) {
								var i, n = e.getCursorPosition(),
									r = e.session.getLine(n.row),
									o = r.substring(0, n.column),
									s = r.substr(n.column),
									a = this.snippetMap;
								return this.getActiveScopes(e).some((function(e) {
									var t = a[e];
									return t && (i = this.findMatchingSnippet(t, o,
										s)), !!i
								}), this), !!i && (t && t.dryRun || (e.session.doc
									.removeInLine(n.row, n.column - i.replaceBefore
										.length, n.column + i.replaceAfter.length), this
									.variables.M__ = i.matchBefore, this.variables.T__ =
									i.matchAfter, this.insertSnippetForSelection(e, i
										.content), this.variables.M__ = this.variables
									.T__ = null), !0)
							}, this.findMatchingSnippet = function(e, t, i) {
								for (var n = e.length; n--;) {
									var r = e[n];
									if ((!r.startRe || r.startRe.test(t)) && ((!r.endRe || r
											.endRe.test(i)) && (r.startRe || r.endRe))) return r
										.matchBefore = r.startRe ? r.startRe.exec(t) : [""],
										r.matchAfter = r.endRe ? r.endRe.exec(i) : [""], r
										.replaceBefore = r.triggerRe ? r.triggerRe.exec(t)[
											0] : "", r.replaceAfter = r.endTriggerRe ? r
										.endTriggerRe.exec(i)[0] : "", r
								}
							}, this.snippetMap = {}, this.snippetNameMap = {}, this.register =
							function(e, t) {
								var i = this.snippetMap,
									n = this.snippetNameMap,
									r = this;

								function s(e) {
									return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" +
										e + ")"), e || ""
								}

								function a(e, t, i) {
									return e = s(e), t = s(t), i ? (e = t + e, e && "$" != e[e
										.length - 1] && (e += "$")) : (e += t, e && "^" !=
										e[0] && (e = "^" + e)), new RegExp(e)
								}

								function l(e) {
									e.scope || (e.scope = t || "_"), t = e.scope, i[t] || (i[
										t] = [], n[t] = {});
									var s = n[t];
									if (e.name) {
										var l = s[e.name];
										l && r.unregister(l), s[e.name] = e
									}
									i[t].push(e), e.tabTrigger && !e.trigger && (!e.guard &&
											/^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e
											.trigger = o.escapeRegExp(e.tabTrigger)), (e
											.trigger || e.guard || e.endTrigger || e.endGuard
											) && (e.startRe = a(e.trigger, e.guard, !0), e
											.triggerRe = new RegExp(e.trigger, "", !0), e
											.endRe = a(e.endTrigger, e.endGuard, !0), e
											.endTriggerRe = new RegExp(e.endTrigger, "", !0))
								}
								e || (e = []), e && e.content ? l(e) : Array.isArray(e) && e
									.forEach(l), this._signal("registerSnippets", {
										scope: t
									})
							}, this.unregister = function(e, t) {
								var i = this.snippetMap,
									n = this.snippetNameMap;

								function r(e) {
									var r = n[e.scope || t];
									if (r && r[e.name]) {
										delete r[e.name];
										var o = i[e.scope || t],
											s = o && o.indexOf(e);
										s >= 0 && o.splice(s, 1)
									}
								}
								e.content ? r(e) : Array.isArray(e) && e.forEach(r)
							}, this.parseSnippetFile = function(e) {
								e = e.replace(/\r/g, "");
								var t, i = [],
									n = {},
									r = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;
								while (t = r.exec(e)) {
									if (t[1]) try {
										n = JSON.parse(t[1]), i.push(n)
									} catch (l) {}
									if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n),
										n = {};
									else {
										var o = t[2],
											s = t[3];
										if ("regex" == o) {
											var a = /\/((?:[^\/\\]|\\.)*)|$/g;
											n.guard = a.exec(s)[1], n.trigger = a.exec(s)[1], n
												.endTrigger = a.exec(s)[1], n.endGuard = a.exec(
													s)[1]
										} else "snippet" == o ? (n.tabTrigger = s.match(/^\S*/)[
											0], n.name || (n.name = s)) : n[o] = s
									}
								}
								return i
							}, this.getSnippetByName = function(e, t) {
								var i, n = this.snippetNameMap;
								return this.getActiveScopes(t).some((function(t) {
									var r = n[t];
									return r && (i = r[e]), !!i
								}), this), i
							}
					}).call(u.prototype);
					var d = function(e) {
						if (e.tabstopManager) return e.tabstopManager;
						e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this
							.$onChangeSelection = o.delayedCall(this.onChangeSelection.bind(
								this)).schedule, this.$onChangeSession = this.onChangeSession
							.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this
							.attach(e)
					};
					(function() {
						this.attach = function(e) {
							this.index = 0, this.ranges = [], this.tabstops = [], this
								.$openTabstops = null, this.selectedTabstop = null, this
								.editor = e, this.editor.on("change", this.$onChange), this
								.editor.on("changeSelection", this.$onChangeSelection), this
								.editor.on("changeSession", this.$onChangeSession), this
								.editor.commands.on("afterExec", this.$onAfterExec), this
								.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
						}, this.detach = function() {
							this.tabstops.forEach(this.removeTabstopMarkers, this), this
								.ranges = null, this.tabstops = null, this.selectedTabstop =
								null, this.editor.removeListener("change", this.$onChange),
								this.editor.removeListener("changeSelection", this
									.$onChangeSelection), this.editor.removeListener(
									"changeSession", this.$onChangeSession), this.editor
								.commands.removeListener("afterExec", this.$onAfterExec),
								this.editor.keyBinding.removeKeyboardHandler(this
									.keyboardHandler), this.editor.tabstopManager = null,
								this.editor = null
						}, this.onChange = function(e) {
							var t = "r" == e.action[0],
								i = e.start,
								n = e.end,
								r = i.row,
								o = n.row,
								s = o - r,
								a = n.column - i.column;
							if (t && (s = -s, a = -a), !this.$inChange && t) {
								var l = this.selectedTabstop,
									c = l && !l.some((function(e) {
										return h(e.start, i) <= 0 && h(e.end, n) >=
											0
									}));
								if (c) return this.detach()
							}
							for (var u = this.ranges, d = 0; d < u.length; d++) {
								var g = u[d];
								g.end.row < i.row || (t && h(i, g.start) < 0 && h(n, g
									.end) > 0 ? (this.removeRange(g), d--) : (g.start
										.row == r && g.start.column > i.column && (g
											.start.column += a), g.end.row == r && g.end
										.column >= i.column && (g.end.column += a), g
										.start.row >= r && (g.start.row += s), g.end
										.row >= r && (g.end.row += s), h(g.start, g
										.end) > 0 && this.removeRange(g)))
							}
							u.length || this.detach()
						}, this.updateLinkedFields = function() {
							var e = this.selectedTabstop;
							if (e && e.hasLinkedRanges) {
								this.$inChange = !0;
								for (var i = this.editor.session, n = i.getTextRange(e
										.firstNonLinked), r = e.length; r--;) {
									var o = e[r];
									if (o.linked) {
										var s = t.snippetManager.tmStrFormat(n, o.original);
										i.replace(o, s)
									}
								}
								this.$inChange = !1
							}
						}, this.onAfterExec = function(e) {
							e.command && !e.command.readOnly && this.updateLinkedFields()
						}, this.onChangeSelection = function() {
							if (this.editor) {
								for (var e = this.editor.selection.lead, t = this.editor
										.selection.anchor, i = this.editor.selection
										.isEmpty(), n = this.ranges.length; n--;)
									if (!this.ranges[n].linked) {
										var r = this.ranges[n].contains(e.row, e.column),
											o = i || this.ranges[n].contains(t.row, t
												.column);
										if (r && o) return
									} this.detach()
							}
						}, this.onChangeSession = function() {
							this.detach()
						}, this.tabNext = function(e) {
							var t = this.tabstops.length,
								i = this.index + (e || 1);
							i = Math.min(Math.max(i, 1), t), i == t && (i = 0), this
								.selectTabstop(i), 0 === i && this.detach()
						}, this.selectTabstop = function(e) {
							this.$openTabstops = null;
							var t = this.tabstops[this.index];
							if (t && this.addTabstopMarkers(t), this.index = e, t = this
								.tabstops[this.index], t && t.length) {
								if (this.selectedTabstop = t, this.editor
									.inVirtualSelectionMode) this.editor.selection.setRange(
									t.firstNonLinked);
								else {
									var i = this.editor.multiSelect;
									i.toSingleRange(t.firstNonLinked.clone());
									for (var n = t.length; n--;) t.hasLinkedRanges && t[n]
										.linked || i.addRange(t[n].clone(), !0);
									i.ranges[0] && i.addRange(i.ranges[0].clone())
								}
								this.editor.keyBinding.addKeyboardHandler(this
									.keyboardHandler)
							}
						}, this.addTabstops = function(e, t, i) {
							if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
								var n = s.fromPoints(i, i);
								p(n.start, t), p(n.end, t), e[0] = [n], e[0].index = 0
							}
							var r = this.index,
								o = [r + 1, 0],
								a = this.ranges;
							e.forEach((function(e, i) {
								for (var n = this.$openTabstops[i] || e, r = e
										.length; r--;) {
									var l = e[r],
										c = s.fromPoints(l.start, l.end || l
											.start);
									f(c.start, t), f(c.end, t), c.original = l,
										c.tabstop = n, a.push(c), n != e ? n
										.unshift(c) : n[r] = c, l.fmtString ? (c
											.linked = !0, n.hasLinkedRanges = !0
											) : n.firstNonLinked || (n
											.firstNonLinked = c)
								}
								n.firstNonLinked || (n.hasLinkedRanges = !1),
									n === e && (o.push(n), this.$openTabstops[
										i] = n), this.addTabstopMarkers(n)
							}), this), o.length > 2 && (this.tabstops.length && o.push(o
								.splice(2, 1)[0]), this.tabstops.splice.apply(this
								.tabstops, o))
						}, this.addTabstopMarkers = function(e) {
							var t = this.editor.session;
							e.forEach((function(e) {
								e.markerId || (e.markerId = t.addMarker(e,
									"ace_snippet-marker", "text"))
							}))
						}, this.removeTabstopMarkers = function(e) {
							var t = this.editor.session;
							e.forEach((function(e) {
								t.removeMarker(e.markerId), e.markerId = null
							}))
						}, this.removeRange = function(e) {
							var t = e.tabstop.indexOf(e);
							e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges
								.splice(t, 1), this.editor.session.removeMarker(e.markerId),
								e.tabstop.length || (t = this.tabstops.indexOf(e.tabstop), -
									1 != t && this.tabstops.splice(t, 1), this.tabstops
									.length || this.detach())
						}, this.keyboardHandler = new l, this.keyboardHandler.bindKeys({
							Tab: function(e) {
								t.snippetManager && t.snippetManager.expandWithTab(
									e) || e.tabstopManager.tabNext(1)
							},
							"Shift-Tab": function(e) {
								e.tabstopManager.tabNext(-1)
							},
							Esc: function(e) {
								e.tabstopManager.detach()
							},
							Return: function(e) {
								return !1
							}
						})
					}).call(d.prototype);
					var g = {};
					g.onChange = a.prototype.onChange, g.setPosition = function(e, t) {
						this.pos.row = e, this.pos.column = t
					}, g.update = function(e, t, i) {
						this.$insertRight = i, this.pos = e, this.onChange(t)
					};
					var f = function(e, t) {
							0 == e.row && (e.column += t.column), e.row += t.row
						},
						p = function(e, t) {
							e.row == t.row && (e.column -= t.column), e.row -= t.row
						};
					e("./lib/dom").importCssString(
						".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"
						), t.snippetManager = new u;
					var m = e("./editor").Editor;
					(function() {
						this.insertSnippet = function(e, i) {
							return t.snippetManager.insertSnippet(this, e, i)
						}, this.expandSnippet = function(e) {
							return t.snippetManager.expandWithTab(this, e)
						}
					}).call(m.prototype)
				})), ace.define("ace/autocomplete/popup", ["require", "exports", "module",
					"ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang",
					"ace/lib/dom"
				], (function(e, t, i) {
					"use strict";
					var n = e("../virtual_renderer").VirtualRenderer,
						r = e("../editor").Editor,
						o = e("../range").Range,
						s = e("../lib/event"),
						a = e("../lib/lang"),
						l = e("../lib/dom"),
						c = function(e) {
							var t = new n(e);
							t.$maxLines = 4;
							var i = new r(t);
							return i.setHighlightActiveLine(!1), i.setShowPrintMargin(!1), i
								.renderer.setShowGutter(!1), i.renderer.setHighlightGutterLine(!1),
								i.$mouseHandler.$focusWaitTimout = 0, i.$highlightTagPending = !0, i
						},
						h = function(e) {
							var t = l.createElement("div"),
								i = new c(t);
							e && e.appendChild(t), t.style.display = "none", i.renderer.content
								.style.cursor = "default", i.renderer.setStyle("ace_autocomplete"),
								i.setOption("displayIndentGuides", !1), i.setOption("dragDelay",
									150);
							var n, r = function() {};
							i.focus = r, i.$isFocused = !0, i.renderer.$cursorLayer.restartTimer =
								r, i.renderer.$cursorLayer.element.style.opacity = 0, i.renderer
								.$maxLines = 8, i.renderer.$keepTextAreaAtCursor = !1, i
								.setHighlightActiveLine(!1), i.session.highlight(""), i.session
								.$searchHighlight.clazz = "ace_highlight-marker", i.on("mousedown",
									(function(e) {
										var t = e.getDocumentPosition();
										i.selection.moveToPosition(t), u.start.row = u.end.row =
											t.row, e.stop()
									}));
							var h = new o(-1, 0, -1, 1 / 0),
								u = new o(-1, 0, -1, 1 / 0);
							u.id = i.session.addMarker(u, "ace_active-line", "fullLine"), i
								.setSelectOnHover = function(e) {
									e ? h.id && (i.session.removeMarker(h.id), h.id = null) : h.id =
										i.session.addMarker(h, "ace_line-hover", "fullLine")
								}, i.setSelectOnHover(!1), i.on("mousemove", (function(e) {
									if (n) {
										if (n.x != e.x || n.y != e.y) {
											n = e, n.scrollTop = i.renderer.scrollTop;
											var t = n.getDocumentPosition().row;
											h.start.row != t && (h.id || i.setRow(t), g(t))
										}
									} else n = e
								})), i.renderer.on("beforeRender", (function() {
									if (n && -1 != h.start.row) {
										n.$pos = null;
										var e = n.getDocumentPosition().row;
										h.id || i.setRow(e), g(e, !0)
									}
								})), i.renderer.on("afterRender", (function() {
									var e = i.getRow(),
										t = i.renderer.$textLayer,
										n = t.element.childNodes[e - t.config.firstRow];
									n != t.selectedNode && (t.selectedNode && l
										.removeCssClass(t.selectedNode, "ace_selected"),
										t.selectedNode = n, n && l.addCssClass(n,
											"ace_selected"))
								}));
							var d = function() {
									g(-1)
								},
								g = function(e, t) {
									e !== h.start.row && (h.start.row = h.end.row = e, t || i
										.session._emit("changeBackMarker"), i._emit(
											"changeHoverMarker"))
								};
							i.getHoveredRow = function() {
								return h.start.row
							}, s.addListener(i.container, "mouseout", d), i.on("hide", d), i.on(
								"changeSelection", d), i.session.doc.getLength = function() {
								return i.data.length
							}, i.session.doc.getLine = function(e) {
								var t = i.data[e];
								return "string" == typeof t ? t : t && t.value || ""
							};
							var f = i.session.bgTokenizer;
							return f.$tokenizeRow = function(e) {
									var t = i.data[e],
										n = [];
									if (!t) return n;
									"string" == typeof t && (t = {
										value: t
									}), t.caption || (t.caption = t.value || t.name);
									for (var r, o, s = -1, a = 0; a < t.caption.length; a++) o = t
										.caption[a], r = t.matchMask & 1 << a ? 1 : 0, s !== r ? (n
											.push({
												type: t.className || (r ?
													"completion-highlight" : ""),
												value: o
											}), s = r) : n[n.length - 1].value += o;
									if (t.meta) {
										var l = i.renderer.$size.scrollerWidth / i.renderer
											.layerConfig.characterWidth,
											c = t.meta;
										c.length + t.caption.length > l - 2 && (c = c.substr(0, l -
											t.caption.length - 3) + "…"), n.push({
											type: "rightAlignedText",
											value: c
										})
									}
									return n
								}, f.$updateOnChange = r, f.start = r, i.session.$computeWidth =
								function() {
									return this.screenWidth = 0
								}, i.$blockScrolling = 1 / 0, i.isOpen = !1, i.isTopdown = !1, i
								.autoSelect = !0, i.data = [], i.setData = function(e) {
									i.setValue(a.stringRepeat("\n", e.length), -1), i.data = e ||
									[], i.setRow(0)
								}, i.getData = function(e) {
									return i.data[e]
								}, i.getRow = function() {
									return u.start.row
								}, i.setRow = function(e) {
									e = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data
										.length, e)), u.start.row != e && (i.selection
										.clearSelection(), u.start.row = u.end.row = e || 0, i
										.session._emit("changeBackMarker"), i.moveCursorTo(e ||
											0, 0), i.isOpen && i._signal("select"))
								}, i.on("changeSelection", (function() {
									i.isOpen && i.setRow(i.selection.lead.row), i.renderer
										.scrollCursorIntoView()
								})), i.hide = function() {
									this.container.style.display = "none", this._signal("hide"), i
										.isOpen = !1
								}, i.show = function(e, t, r) {
									var o = this.container,
										s = window.innerHeight,
										a = window.innerWidth,
										l = this.renderer,
										c = l.$maxLines * t * 1.4,
										h = e.top + this.$borderSize,
										u = h > s / 2 && !r;
									u && h + t + c > s ? (l.$maxPixelHeight = h - 2 * this
											.$borderSize, o.style.top = "", o.style.bottom = s - h +
											"px", i.isTopdown = !1) : (h += t, l.$maxPixelHeight =
											s - h - .2 * t, o.style.top = h + "px", o.style.bottom =
											"", i.isTopdown = !0), o.style.display = "", this
										.renderer.$textLayer.checkForSizeChanges();
									var d = e.left;
									d + o.offsetWidth > a && (d = a - o.offsetWidth), o.style.left =
										d + "px", this._signal("show"), n = null, i.isOpen = !0
								}, i.getTextLeftOffset = function() {
									return this.$borderSize + this.renderer.$padding + this
										.$imageSize
								}, i.$imageSize = 0, i.$borderSize = 1, i
						};
					l.importCssString(
						".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"
						), t.AcePopup = h
				})), ace.define("ace/autocomplete/util", ["require", "exports", "module"], (function(e, t,
					i) {
					"use strict";
					t.parForEach = function(e, t, i) {
						var n = 0,
							r = e.length;
						0 === r && i();
						for (var o = 0; o < r; o++) t(e[o], (function(e, t) {
							n++, n === r && i(e, t)
						}))
					};
					var n = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
					t.retrievePrecedingIdentifier = function(e, t, i) {
						i = i || n;
						for (var r = [], o = t - 1; o >= 0; o--) {
							if (!i.test(e[o])) break;
							r.push(e[o])
						}
						return r.reverse().join("")
					}, t.retrieveFollowingIdentifier = function(e, t, i) {
						i = i || n;
						for (var r = [], o = t; o < e.length; o++) {
							if (!i.test(e[o])) break;
							r.push(e[o])
						}
						return r
					}, t.getCompletionPrefix = function(e) {
						var t, i = e.getCursorPosition(),
							n = e.session.getLine(i.row);
						return e.completers.forEach(function(e) {
							e.identifierRegexps && e.identifierRegexps.forEach(function(
								e) {
								!t && e && (t = this
									.retrievePrecedingIdentifier(n, i
										.column, e))
							}.bind(this))
						}.bind(this)), t || this.retrievePrecedingIdentifier(n, i.column)
					}
				})), ace.define("ace/autocomplete", ["require", "exports", "module",
					"ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util",
					"ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"
				], (function(e, t, i) {
					"use strict";
					var n = e("./keyboard/hash_handler").HashHandler,
						r = e("./autocomplete/popup").AcePopup,
						o = e("./autocomplete/util"),
						s = (e("./lib/event"), e("./lib/lang")),
						a = e("./lib/dom"),
						l = e("./snippets").snippetManager,
						c = function() {
							this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this
								.gatherCompletionsId = 0, this.keyboardHandler = new n, this
								.keyboardHandler.bindKeys(this.commands), this.blurListener = this
								.blurListener.bind(this), this.changeListener = this.changeListener
								.bind(this), this.mousedownListener = this.mousedownListener.bind(
									this), this.mousewheelListener = this.mousewheelListener.bind(
									this), this.changeTimer = s.delayedCall(function() {
									this.updateCompletions(!0)
								}.bind(this)), this.tooltipTimer = s.delayedCall(this
									.updateDocTooltip.bind(this), 50)
						};
					(function() {
						this.$init = function() {
							return this.popup = new r(document.body || document
									.documentElement), this.popup.on("click", function(e) {
									this.insertMatch(), e.stop()
								}.bind(this)), this.popup.focus = this.editor.focus.bind(
									this.editor), this.popup.on("show", this.tooltipTimer
									.bind(null, null)), this.popup.on("select", this
									.tooltipTimer.bind(null, null)), this.popup.on(
									"changeHoverMarker", this.tooltipTimer.bind(null, null)
									), this.popup
						}, this.getPopup = function() {
							return this.popup || this.$init()
						}, this.openPopup = function(e, t, i) {
							this.popup || this.$init(), this.popup.autoSelect = this
								.autoSelect, this.popup.setData(this.completions.filtered),
								e.keyBinding.addKeyboardHandler(this.keyboardHandler);
							var n = e.renderer;
							if (this.popup.setRow(this.autoSelect ? 0 : -1), i) i && !t &&
								this.detach();
							else {
								this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e
									.getFontSize());
								var r = n.layerConfig.lineHeight,
									o = n.$cursorLayer.getPixelPosition(this.base, !0);
								o.left -= this.popup.getTextLeftOffset();
								var s = e.container.getBoundingClientRect();
								o.top += s.top - n.layerConfig.offset, o.left += s.left - e
									.renderer.scrollLeft, o.left += n.gutterWidth, this
									.popup.show(o, r)
							}
						}, this.detach = function() {
							this.editor.keyBinding.removeKeyboardHandler(this
									.keyboardHandler), this.editor.off("changeSelection",
									this.changeListener), this.editor.off("blur", this
									.blurListener), this.editor.off("mousedown", this
									.mousedownListener), this.editor.off("mousewheel", this
									.mousewheelListener), this.changeTimer.cancel(), this
								.hideDocTooltip(), this.gatherCompletionsId += 1, this
								.popup && this.popup.isOpen && this.popup.hide(), this
								.base && this.base.detach(), this.activated = !1, this
								.completions = this.base = null
						}, this.changeListener = function(e) {
							var t = this.editor.selection.lead;
							(t.row != this.base.row || t.column < this.base.column) && this
								.detach(), this.activated ? this.changeTimer.schedule() :
								this.detach()
						}, this.blurListener = function(e) {
							var t = document.activeElement,
								i = this.editor.textInput.getElement(),
								n = e.relatedTarget && this.tooltipNode && this.tooltipNode
								.contains(e.relatedTarget),
								r = this.popup && this.popup.container;
							t == i || t.parentNode == r || n || t == this.tooltipNode || e
								.relatedTarget == i || this.detach()
						}, this.mousedownListener = function(e) {
							this.detach()
						}, this.mousewheelListener = function(e) {
							this.detach()
						}, this.goTo = function(e) {
							var t = this.popup.getRow(),
								i = this.popup.session.getLength() - 1;
							switch (e) {
								case "up":
									t = t <= 0 ? i : t - 1;
									break;
								case "down":
									t = t >= i ? -1 : t + 1;
									break;
								case "start":
									t = 0;
									break;
								case "end":
									t = i;
									break
							}
							this.popup.setRow(t)
						}, this.insertMatch = function(e, t) {
							if (e || (e = this.popup.getData(this.popup.getRow())), !e)
								return !1;
							if (e.completer && e.completer.insertMatch) e.completer
								.insertMatch(this.editor, e);
							else {
								if (this.completions.filterText)
									for (var i, n = this.editor.selection.getAllRanges(),
											r = 0; i = n[r]; r++) i.start.column -= this
										.completions.filterText.length, this.editor.session
										.remove(i);
								e.snippet ? l.insertSnippet(this.editor, e.snippet) : this
									.editor.execCommand("insertstring", e.value || e)
							}
							this.detach()
						}, this.commands = {
							Up: function(e) {
								e.completer.goTo("up")
							},
							Down: function(e) {
								e.completer.goTo("down")
							},
							"Ctrl-Up|Ctrl-Home": function(e) {
								e.completer.goTo("start")
							},
							"Ctrl-Down|Ctrl-End": function(e) {
								e.completer.goTo("end")
							},
							Esc: function(e) {
								e.completer.detach()
							},
							Return: function(e) {
								return e.completer.insertMatch()
							},
							"Shift-Return": function(e) {
								e.completer.insertMatch(null, {
									deleteSuffix: !0
								})
							},
							Tab: function(e) {
								var t = e.completer.insertMatch();
								if (t || e.tabstopManager) return t;
								e.completer.goTo("down")
							},
							PageUp: function(e) {
								e.completer.popup.gotoPageUp()
							},
							PageDown: function(e) {
								e.completer.popup.gotoPageDown()
							}
						}, this.gatherCompletions = function(e, t) {
							var i = e.getSession(),
								n = e.getCursorPosition(),
								r = o.getCompletionPrefix(e);
							this.base = i.doc.createAnchor(n.row, n.column - r.length), this
								.base.$insertRight = !0;
							var s = [],
								a = e.completers.length;
							return e.completers.forEach((function(l, c) {
								l.getCompletions(e, i, n, r, (function(i, n) {
									!i && n && (s = s.concat(n)), t(
										null, {
											prefix: o
												.getCompletionPrefix(
													e),
											matches: s,
											finished: 0 === --a
										})
								}))
							})), !0
						}, this.showPopup = function(e) {
							this.editor && this.detach(), this.activated = !0, this.editor =
								e, e.completer != this && (e.completer && e.completer
									.detach(), e.completer = this), e.on("changeSelection",
									this.changeListener), e.on("blur", this.blurListener), e
								.on("mousedown", this.mousedownListener), e.on("mousewheel",
									this.mousewheelListener), this.updateCompletions()
						}, this.updateCompletions = function(e) {
							if (e && this.base && this.completions) {
								var t = this.editor.getCursorPosition(),
									i = this.editor.session.getTextRange({
										start: this.base,
										end: t
									});
								if (i == this.completions.filterText) return;
								return this.completions.setFilter(i), this.completions
									.filtered.length ? 1 != this.completions.filtered
									.length || this.completions.filtered[0].value != i ||
									this.completions.filtered[0].snippet ? void this
									.openPopup(this.editor, i, e) : this.detach() : this
									.detach()
							}
							var n = this.gatherCompletionsId;
							this.gatherCompletions(this.editor, function(t, i) {
								var r = function() {
										if (i.finished) return this.detach()
									}.bind(this),
									o = i.prefix,
									s = i && i.matches;
								if (!s || !s.length) return r();
								if (0 === o.indexOf(i.prefix) && n == this
									.gatherCompletionsId) {
									this.completions = new h(s), this.exactMatch &&
										(this.completions.exactMatch = !0), this
										.completions.setFilter(o);
									var a = this.completions.filtered;
									return a.length && (1 != a.length || a[0]
											.value != o || a[0].snippet) ? this
										.autoInsert && 1 == a.length && i.finished ?
										this.insertMatch(a[0]) : void this
										.openPopup(this.editor, o, e) : r()
								}
							}.bind(this))
						}, this.cancelContextMenu = function() {
							this.editor.$mouseHandler.cancelContextMenu()
						}, this.updateDocTooltip = function() {
							var e = this.popup,
								t = e.data,
								i = t && (t[e.getHoveredRow()] || t[e.getRow()]),
								n = null;
							return i && this.editor && this.popup.isOpen ? (this.editor
									.completers.some((function(e) {
										return e.getDocTooltip && (n = e
											.getDocTooltip(i)), n
									})), n || (n = i), "string" == typeof n && (n = {
										docText: n
									}), n && (n.docHTML || n.docText) ? void this
									.showDocTooltip(n) : this.hideDocTooltip()) : this
								.hideDocTooltip()
						}, this.showDocTooltip = function(e) {
							this.tooltipNode || (this.tooltipNode = a.createElement("div"),
								this.tooltipNode.className =
								"ace_tooltip ace_doc-tooltip", this.tooltipNode.style
								.margin = 0, this.tooltipNode.style.pointerEvents =
								"auto", this.tooltipNode.tabIndex = -1, this.tooltipNode
								.onblur = this.blurListener.bind(this), this.tooltipNode
								.onclick = this.onTooltipClick.bind(this));
							var t = this.tooltipNode;
							e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t
									.textContent = e.docText), t.parentNode || document.body
								.appendChild(t);
							var i = this.popup,
								n = i.container.getBoundingClientRect();
							t.style.top = i.container.style.top, t.style.bottom = i
								.container.style.bottom, window.innerWidth - n.right < 320 ?
								(t.style.right = window.innerWidth - n.left + "px", t.style
									.left = "") : (t.style.left = n.right + 1 + "px", t
									.style.right = ""), t.style.display = "block"
						}, this.hideDocTooltip = function() {
							if (this.tooltipTimer.cancel(), this.tooltipNode) {
								var e = this.tooltipNode;
								this.editor.isFocused() || document.activeElement != e ||
									this.editor.focus(), this.tooltipNode = null, e
									.parentNode && e.parentNode.removeChild(e)
							}
						}, this.onTooltipClick = function(e) {
							var t = e.target;
							while (t && t != this.tooltipNode) {
								if ("A" == t.nodeName && t.href) {
									t.rel = "noreferrer", t.target = "_blank";
									break
								}
								t = t.parentNode
							}
						}
					}).call(c.prototype), c.startCommand = {
						name: "startAutocomplete",
						exec: function(e) {
							e.completer || (e.completer = new c), e.completer.autoInsert = !
								1, e.completer.autoSelect = !0, e.completer.showPopup(e), e
								.completer.cancelContextMenu()
						},
						bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
					};
					var h = function(e, t) {
						this.all = e, this.filtered = e, this.filterText = t || "", this
							.exactMatch = !1
					};
					(function() {
						this.setFilter = function(e) {
							if (e.length > this.filterText && 0 === e.lastIndexOf(this
									.filterText, 0)) var t = this.filtered;
							else t = this.all;
							this.filterText = e, t = this.filterCompletions(t, this
								.filterText), t = t.sort((function(e, t) {
								return t.exactMatch - e.exactMatch || t.score -
									e.score
							}));
							var i = null;
							t = t.filter((function(e) {
								var t = e.snippet || e.caption || e.value;
								return t !== i && (i = t, !0)
							})), this.filtered = t
						}, this.filterCompletions = function(e, t) {
							var i = [],
								n = t.toUpperCase(),
								r = t.toLowerCase();
							e: for (var o, s = 0; o = e[s]; s++) {
								var a = o.value || o.caption || o.snippet;
								if (a) {
									var l, c, h = -1,
										u = 0,
										d = 0;
									if (this.exactMatch) {
										if (t !== a.substr(0, t.length)) continue e
									} else
										for (var g = 0; g < t.length; g++) {
											var f = a.indexOf(r[g], h + 1),
												p = a.indexOf(n[g], h + 1);
											if (l = f >= 0 && (p < 0 || f < p) ? f : p,
												l < 0) continue e;
											c = l - h - 1, c > 0 && (-1 === h && (d +=
												10), d += c), u |= 1 << l, h = l
										}
									o.matchMask = u, o.exactMatch = d ? 0 : 1, o.score =
										(o.score || 0) - d, i.push(o)
								}
							}
							return i
						}
					}).call(h.prototype), t.Autocomplete = c, t.FilteredList = h
				})), ace.define("ace/autocomplete/text_completer", ["require", "exports", "module",
					"ace/range"
				], (function(e, t, i) {
					var n = e("../range").Range,
						r = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;

					function o(e, t) {
						var i = e.getTextRange(n.fromPoints({
							row: 0,
							column: 0
						}, t));
						return i.split(r).length - 1
					}

					function s(e, t) {
						var i = o(e, t),
							n = e.getValue().split(r),
							s = Object.create(null),
							a = n[i];
						return n.forEach((function(e, t) {
							if (e && e !== a) {
								var r = Math.abs(i - t),
									o = n.length - r;
								s[e] ? s[e] = Math.max(o, s[e]) : s[e] = o
							}
						})), s
					}
					t.getCompletions = function(e, t, i, n, r) {
						var o = s(t, i, n),
							a = Object.keys(o);
						r(null, a.map((function(e) {
							return {
								caption: e,
								value: e,
								score: o[e],
								meta: "local"
							}
						})))
					}
				})), ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets",
					"ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util",
					"ace/autocomplete/text_completer", "ace/editor", "ace/config"
				], (function(e, t, i) {
					"use strict";
					var n = e("../snippets").snippetManager,
						r = e("../autocomplete").Autocomplete,
						o = e("../config"),
						s = e("../lib/lang"),
						a = e("../autocomplete/util"),
						l = e("../autocomplete/text_completer"),
						c = {
							getCompletions: function(e, t, i, n, r) {
								if (t.$mode.completer) return t.$mode.completer.getCompletions(
									e, t, i, n, r);
								var o = e.session.getState(i.row),
									s = t.$mode.getCompletions(o, t, i, n);
								r(null, s)
							}
						},
						h = {
							getCompletions: function(e, t, i, r, o) {
								var s = n.snippetMap,
									a = [];
								n.getActiveScopes(e).forEach((function(e) {
									for (var t = s[e] || [], i = t.length; i--;) {
										var n = t[i],
											r = n.name || n.tabTrigger;
										r && a.push({
											caption: r,
											snippet: n.content,
											meta: n.tabTrigger && !n.name ?
												n.tabTrigger + "⇥ " :
												"snippet",
											type: "snippet"
										})
									}
								}), this), o(null, a)
							},
							getDocTooltip: function(e) {
								"snippet" != e.type || e.docHTML || (e.docHTML = ["<b>", s
									.escapeHTML(e.caption), "</b>", "<hr></hr>", s
									.escapeHTML(e.snippet)
								].join(""))
							}
						},
						u = [h, l, c];
					t.setCompleters = function(e) {
						u.length = 0, e && u.push.apply(u, e)
					}, t.addCompleter = function(e) {
						u.push(e)
					}, t.textCompleter = l, t.keyWordCompleter = c, t.snippetCompleter = h;
					var d = {
							name: "expandSnippet",
							exec: function(e) {
								return n.expandWithTab(e)
							},
							bindKey: "Tab"
						},
						g = function(e, t) {
							f(t.session.$mode)
						},
						f = function(e) {
							var t = e.$id;
							n.files || (n.files = {}), p(t), e.modes && e.modes.forEach(f)
						},
						p = function(e) {
							if (e && !n.files[e]) {
								var t = e.replace("mode", "snippets");
								n.files[e] = {}, o.loadModule(t, (function(t) {
									t && (n.files[e] = t, !t.snippets && t
										.snippetText && (t.snippets = n
											.parseSnippetFile(t.snippetText)), n
										.register(t.snippets || [], t.scope), t
										.includeScopes && (n.snippetMap[t.scope]
											.includeScopes = t.includeScopes, t
											.includeScopes.forEach((function(e) {
												p("ace/mode/" + e)
											}))))
								}))
							}
						},
						m = function(e) {
							var t = e.editor,
								i = t.completer && t.completer.activated;
							if ("backspace" === e.command.name) i && !a.getCompletionPrefix(t) && t
								.completer.detach();
							else if ("insertstring" === e.command.name) {
								var n = a.getCompletionPrefix(t);
								n && !i && (t.completer || (t.completer = new r), t.completer
									.autoInsert = !1, t.completer.showPopup(t))
							}
						},
						v = e("../editor").Editor;
					e("../config").defineOptions(v.prototype, "editor", {
						enableBasicAutocompletion: {
							set: function(e) {
								e ? (this.completers || (this.completers = Array
											.isArray(e) ? e : u), this.commands
										.addCommand(r.startCommand)) : this.commands
									.removeCommand(r.startCommand)
							},
							value: !1
						},
						enableLiveAutocompletion: {
							set: function(e) {
								e ? (this.completers || (this.completers = Array
									.isArray(e) ? e : u), this.commands.on(
									"afterExec", m)) : this.commands.removeListener(
									"afterExec", m)
							},
							value: !1
						},
						enableSnippets: {
							set: function(e) {
								e ? (this.commands.addCommand(d), this.on("changeMode",
									g), g(null, this)) : (this.commands
									.removeCommand(d), this.off("changeMode", g))
							},
							value: !1
						}
					})
				})),
				function() {
					ace.acequire(["ace/ext/language_tools"], (function() {}))
				}()
		},
		2968: function(e, t) {
			ace.define("ace/mode/yaml_highlight_rules", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/text_highlight_rules"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = e("./text_highlight_rules").TextHighlightRules,
					o = function() {
						this.$rules = {
							start: [{
								token: "comment",
								regex: "#.*$"
							}, {
								token: "list.markup",
								regex: /^(?:-{3}|\.{3})\s*(?=#|$)/
							}, {
								token: "list.markup",
								regex: /^\s*[\-?](?:$|\s)/
							}, {
								token: "constant",
								regex: "!![\\w//]+"
							}, {
								token: "constant.language",
								regex: "[&\\*][a-zA-Z0-9-_]+"
							}, {
								token: ["meta.tag", "keyword"],
								regex: /^(\s*\w.*?)(:(?=\s|$))/
							}, {
								token: ["meta.tag", "keyword"],
								regex: /(\w+?)(\s*:(?=\s|$))/
							}, {
								token: "keyword.operator",
								regex: "<<\\w*:\\w*"
							}, {
								token: "keyword.operator",
								regex: "-\\s*(?=[{])"
							}, {
								token: "string",
								regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
							}, {
								token: "string",
								regex: /[|>][-+\d\s]*$/,
								onMatch: function(e, t, i, n) {
									var r = /^\s*/.exec(n)[0];
									return i.length < 1 ? i.push(this.next) : i[
											0] = "mlString", i.length < 2 ? i
										.push(r.length) : i[1] = r.length, this
										.token
								},
								next: "mlString"
							}, {
								token: "string",
								regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
							}, {
								token: "constant.numeric",
								regex: /(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)/
							}, {
								token: "constant.numeric",
								regex: /[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/
							}, {
								token: "constant.language.boolean",
								regex: "\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
							}, {
								token: "paren.lparen",
								regex: "[[({]"
							}, {
								token: "paren.rparen",
								regex: "[\\])}]"
							}, {
								token: "text",
								regex: /[^\s,:\[\]\{\}]+/
							}],
							mlString: [{
								token: "indent",
								regex: /^\s*$/
							}, {
								token: "indent",
								regex: /^\s*/,
								onMatch: function(e, t, i) {
									var n = i[1];
									return n >= e.length ? (this.next = "start",
											i.splice(0)) : this.next =
										"mlString", this.token
								},
								next: "mlString"
							}, {
								token: "string",
								regex: ".+"
							}]
						}, this.normalizeRules()
					};
				n.inherits(o, r), t.YamlHighlightRules = o
			})), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module",
				"ace/range"
			], (function(e, t, i) {
				"use strict";
				var n = e("../range").Range,
					r = function() {};
				(function() {
					this.checkOutdent = function(e, t) {
						return !!/^\s+$/.test(e) && /^\s*\}/.test(t)
					}, this.autoOutdent = function(e, t) {
						var i = e.getLine(t),
							r = i.match(/^(\s*\})/);
						if (!r) return 0;
						var o = r[1].length,
							s = e.findMatchingBracket({
								row: t,
								column: o
							});
						if (!s || s.row == t) return 0;
						var a = this.$getIndent(e.getLine(s.row));
						e.replace(new n(t, 0, t, o - 1), a)
					}, this.$getIndent = function(e) {
						return e.match(/^\s*/)[0]
					}
				}).call(r.prototype), t.MatchingBraceOutdent = r
			})), ace.define("ace/mode/folding/coffee", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/folding/fold_mode", "ace/range"
			], (function(e, t, i) {
				"use strict";
				var n = e("../../lib/oop"),
					r = e("./fold_mode").FoldMode,
					o = e("../../range").Range,
					s = t.FoldMode = function() {};
				n.inherits(s, r),
					function() {
						this.getFoldWidgetRange = function(e, t, i) {
							var n = this.indentationBlock(e, i);
							if (n) return n;
							var r = /\S/,
								s = e.getLine(i),
								a = s.search(r);
							if (-1 != a && "#" == s[a]) {
								var l = s.length,
									c = e.getLength(),
									h = i,
									u = i;
								while (++i < c) {
									s = e.getLine(i);
									var d = s.search(r);
									if (-1 != d) {
										if ("#" != s[d]) break;
										u = i
									}
								}
								if (u > h) {
									var g = e.getLine(u).length;
									return new o(h, l, u, g)
								}
							}
						}, this.getFoldWidget = function(e, t, i) {
							var n = e.getLine(i),
								r = n.search(/\S/),
								o = e.getLine(i + 1),
								s = e.getLine(i - 1),
								a = s.search(/\S/),
								l = o.search(/\S/);
							if (-1 == r) return e.foldWidgets[i - 1] = -1 != a && a < l ?
								"start" : "", "";
							if (-1 == a) {
								if (r == l && "#" == n[r] && "#" == o[r]) return e
									.foldWidgets[i - 1] = "", e.foldWidgets[i + 1] = "",
									"start"
							} else if (a == r && "#" == n[r] && "#" == s[r] && -1 == e
								.getLine(i - 2).search(/\S/)) return e.foldWidgets[i - 1] =
								"start", e.foldWidgets[i + 1] = "", "";
							return e.foldWidgets[i - 1] = -1 != a && a < r ? "start" : "",
								r < l ? "start" : ""
						}
					}.call(s.prototype)
			})), ace.define("ace/mode/yaml", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/text", "ace/mode/yaml_highlight_rules", "ace/mode/matching_brace_outdent",
				"ace/mode/folding/coffee"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = e("./text").Mode,
					o = e("./yaml_highlight_rules").YamlHighlightRules,
					s = e("./matching_brace_outdent").MatchingBraceOutdent,
					a = e("./folding/coffee").FoldMode,
					l = function() {
						this.HighlightRules = o, this.$outdent = new s, this.foldingRules =
							new a, this.$behaviour = this.$defaultBehaviour
					};
				n.inherits(l, r),
					function() {
						this.lineCommentStart = ["#", "//"], this.getNextLineIndent = function(
							e, t, i) {
							var n = this.$getIndent(t);
							if ("start" == e) {
								var r = t.match(/^.*[\{\(\[]\s*$/);
								r && (n += i)
							}
							return n
						}, this.checkOutdent = function(e, t, i) {
							return this.$outdent.checkOutdent(t, i)
						}, this.autoOutdent = function(e, t, i) {
							this.$outdent.autoOutdent(t, i)
						}, this.$id = "ace/mode/yaml"
					}.call(l.prototype), t.Mode = l
			}))
		},
		"4de4": function(e, t, i) {
			"use strict";
			var n = i("23e7"),
				r = i("b727").filter,
				o = i("1dde"),
				s = o("filter");
			n({
				target: "Array",
				proto: !0,
				forced: !s
			}, {
				filter: function(e) {
					return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		},
		"65f0": function(e, t, i) {
			var n = i("861d"),
				r = i("e8b5"),
				o = i("b622"),
				s = o("species");
			e.exports = function(e, t) {
				var i;
				return r(e) && (i = e.constructor, "function" != typeof i || i !== Array && !r(i
					.prototype) ? n(i) && (i = i[s], null === i && (i = void 0)) : i = void 0), new(
					void 0 === i ? Array : i)(0 === t ? 0 : t)
			}
		},
		"72de": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = function() {
					var e = this,
						t = e.$createElement,
						i = e._self._c || t;
					return i("div", {
						staticClass: "caseEdit"
					}, [i("el-card", {
						staticClass: "box-card"
					}, [i("div", {
						staticClass: "clearfix",
						attrs: {
							slot: "header"
						},
						slot: "header"
					}, [i("el-breadcrumb", {
						attrs: {
							"separator-class": "el-icon-arrow-right"
						}
					}, [i("el-breadcrumb-item", {
						attrs: {
							to: {
								path: "/"
							}
						}
					}, [e._v("首页")]), i("el-breadcrumb-item", [e._v(
						"用例管理")]), i("el-breadcrumb-item", [e._v(
						"用例编辑")])], 1)], 1), i("el-card", {
						staticClass: "box-card"
					}, [i("el-divider", {
						attrs: {
							"content-position": "left"
						}
					}, [i("span", {
						staticStyle: {
							color: "#409EFF",
							"font-weight": "bold"
						}
					}, [e._v("Api")])]), i("el-row", {
						attrs: {
							gutter: 20
						}
					}, [i("el-col", {
						attrs: {
							span: 3
						}
					}, [i("el-select", {
						attrs: {
							placeholder: "请求方法"
						},
						model: {
							value: e.caseInfo.method,
							callback: function(t) {
								e.$set(e.caseInfo,
									"method", t)
							},
							expression: "caseInfo.method"
						}
					}, [i("el-option", {
						attrs: {
							label: "GET",
							value: "GET"
						}
					}), i("el-option", {
						attrs: {
							label: "POST",
							value: "POST"
						}
					}), i("el-option", {
						attrs: {
							label: "PUT",
							value: "PUT"
						}
					}), i("el-option", {
						attrs: {
							label: "DELETE",
							value: "DELETE"
						}
					}), i("el-option", {
						attrs: {
							label: "PATCH",
							value: "PATCH"
						}
					}), i("el-option", {
						attrs: {
							label: "HEAD",
							value: "HEAD"
						}
					}), i("el-option", {
						attrs: {
							label: "OPTION",
							value: "OPTION"
						}
					})], 1)], 1), i("el-col", {
						attrs: {
							span: 9
						}
					}, [i("el-input", {
						attrs: {
							placeholder: "host地址"
						},
						model: {
							value: e.caseInfo.host,
							callback: function(t) {
								e.$set(e.caseInfo,
									"host", t)
							},
							expression: "caseInfo.host"
						}
					}, [i("template", {
						slot: "prepend"
					}, [e._v("Host")])], 2)], 1), i("el-col", {
						attrs: {
							span: 9
						}
					}, [i("el-input", {
						attrs: {
							placeholder: "接口路径"
						},
						model: {
							value: e.caseInfo.interface,
							callback: function(t) {
								e.$set(e.caseInfo,
									"interface", t)
							},
							expression: "caseInfo.interface"
						}
					}, [i("template", {
						slot: "prepend"
					}, [e._v("接口地址")])], 2)], 1), i("el-col", {
						attrs: {
							span: 3
						}
					}, [i("el-button", {
						attrs: {
							type: "primary",
							icon: "el-icon-s-promotion"
						}
					}, [e._v("Run")])], 1)], 1), i("el-divider", {
						attrs: {
							"content-position": "left"
						}
					}, [i("span", {
						staticStyle: {
							color: "#409EFF",
							"font-weight": "bold"
						}
					}, [e._v("Request")])]), i("el-tabs", {
						attrs: {
							type: "border-card"
						}
					}, [i("el-tab-pane", {
						attrs: {
							label: "请求头"
						}
					}, e._l(e.caseInfo.headers, (function(t, n) {
						return i("el-row", {
							key: n,
							staticStyle: {
								margin: "10px"
							},
							attrs: {
								gutter: 20
							}
						}, [i("el-col", {
							attrs: {
								span: 6
							}
						}, [i("el-input", {
							attrs: {
								placeholder: "KEY"
							},
							model: {
								value: t
									.key,
								callback: function(
									i
									) {
									e.$set(t,
										"key",
										i
										)
								},
								expression: "header.key"
							}
						})], 1), i("el-col", {
							attrs: {
								span: 12
							}
						}, [i("el-input", {
							attrs: {
								placeholder: "VALUE"
							},
							model: {
								value: t
									.value,
								callback: function(
									i
									) {
									e.$set(t,
										"value",
										i
										)
								},
								expression: "header.value"
							}
						})], 1), i("el-col", {
							attrs: {
								span: 6
							}
						}, [i("el-button", {
							attrs: {
								type: "danger",
								icon: "el-icon-delete"
							},
							on: {
								click: function(
									i
									) {
									return e
										.deleteInputRow(
											t,
											"headers"
											)
								}
							}
						})], 1)], 1)
					})), 1), i("el-tab-pane", {
						attrs: {
							label: "请求参数"
						}
					}, [i("el-tabs", [i("el-tab-pane", {
						attrs: {
							label: "application/json"
						}
					}, [i("editor", {
						ref: "editor",
						attrs: {
							height: "300",
							width: "100%",
							content: e
								.caseInfo
								.json,
							options: {
								enableBasicAutocompletion:
									!0,
								enableSnippets:
									!0,
								enableLiveAutocompletion:
									!0,
								tabSize: 2,
								fontSize: 20,
								showPrintMargin:
									!1
							},
							lang: "json"
						},
						on: {
							init: e
								.editorInit
						},
						model: {
							value: e
								.caseInfo
								.json,
							callback: function(
								t) {
								e.$set(e.caseInfo,
									"json",
									t
									)
							},
							expression: "caseInfo.json"
						}
					}), i("el-button", {
						attrs: {
							type: "primary",
							size: "mini"
						},
						on: {
							click: e
								.jsonFormat
						}
					}, [e._v("json格式化")])], 1), i(
						"el-tab-pane", {
							attrs: {
								label: "Params"
							}
						}, e._l(e.caseInfo.params, (
							function(t, n) {
								return i("el-row", {
									key: n,
									staticStyle: {
										margin: "10px"
									},
									attrs: {
										gutter: 20
									}
								}, [i("el-col", {
											attrs: {
												span: 6
											}
										}, [i("el-input", {
											attrs: {
												placeholder: "KEY"
											},
											model: {
												value: t
													.key,
												callback: function(
													i
													) {
													e.$set(t,
														"key",
														i
														)
												},
												expression: "par.key"
											}
										})],
										1),
									i("el-col", {
											attrs: {
												span: 12
											}
										}, [i("el-input", {
											attrs: {
												placeholder: "VALUE"
											},
											model: {
												value: t
													.value,
												callback: function(
													i
													) {
													e.$set(t,
														"value",
														i
														)
												},
												expression: "par.value"
											}
										})],
										1),
									i("el-col", {
											attrs: {
												span: 6
											}
										}, [i("el-button", {
											attrs: {
												type: "danger",
												icon: "el-icon-delete"
											},
											on: {
												click: function(
													i
													) {
													return e
														.deleteInputRow(
															t,
															"params"
															)
												}
											}
										})],
										1)
								], 1)
							})), 1), i("el-tab-pane", {
						attrs: {
							label: "application/X-www-urlencoded"
						}
					}, e._l(e.caseInfo.data, (
						function(t, n) {
							return i("el-row", {
								key: n,
								staticStyle: {
									margin: "10px"
								},
								attrs: {
									gutter: 20
								}
							}, [i("el-col", {
										attrs: {
											span: 6
										}
									}, [i("el-input", {
										attrs: {
											placeholder: "KEY"
										},
										model: {
											value: t
												.key,
											callback: function(
												i
												) {
												e.$set(t,
													"key",
													i
													)
											},
											expression: "val.key"
										}
									})],
									1),
								i("el-col", {
										attrs: {
											span: 12
										}
									}, [i("el-input", {
										attrs: {
											placeholder: "VALUE"
										},
										model: {
											value: t
												.value,
											callback: function(
												i
												) {
												e.$set(t,
													"value",
													i
													)
											},
											expression: "val.value"
										}
									})],
									1),
								i("el-col", {
										attrs: {
											span: 6
										}
									}, [i("el-button", {
										attrs: {
											type: "danger",
											icon: "el-icon-delete"
										},
										on: {
											click: function(
												i
												) {
												return e
													.deleteInputRow(
														t,
														"data"
														)
											}
										}
									})],
									1)
							], 1)
						})), 1)], 1)], 1), i("el-tab-pane", {
						attrs: {
							label: "响应提取"
						}
					}, [e._v("响应提取")]), i("el-tab-pane", {
						attrs: {
							label: "用例断言"
						}
					}, [e._v("用例断言")]), i("el-tab-pane", {
						attrs: {
							label: "数据库校验"
						}
					}, [e._v("数据库校验")])], 1), i("el-button", {
						attrs: {
							type: "info",
							size: "mini"
						},
						on: {
							click: function(t) {
								e.dialogVisible = !0
							}
						}
					}, [e._v("用例详情")])], 1)], 1), i("el-dialog", {
						attrs: {
							title: "提示",
							visible: e.dialogVisible,
							width: "60%"
						},
						on: {
							"update:visible": function(t) {
								e.dialogVisible = t
							}
						}
					}, [i("json-view", {
						staticStyle: {
							height: "600px"
						},
						attrs: {
							data: e.caseInfo
						}
					}), i("span", {
						staticClass: "dialog-footer",
						attrs: {
							slot: "footer"
						},
						slot: "footer"
					}, [i("el-button", {
						attrs: {
							type: "primary"
						},
						on: {
							click: function(t) {
								e.dialogVisible = !1
							}
						}
					}, [e._v("关闭")])], 1)], 1)], 1)
				},
				r = [],
				o = (i("4de4"), i("7c9e")),
				s = i.n(o),
				a = i("1b37"),
				l = i.n(a),
				c = {
					data: function() {
						return {
							dialogVisible: !1,
							caseInfo: {
								method: "GET",
								host: "",
								interface: "",
								headers: [{
									key: "",
									value: ""
								}],
								params: [{
									key: "",
									value: ""
								}],
								data: [{
									key: "",
									value: ""
								}],
								json: "{}"
							}
						}
					},
					methods: {
						deleteInputRow: function(e, t) {
							console.log("要删除的数据:", e), this.caseInfo[t] = this.caseInfo[t].filter((
								function(t, i) {
									return t !== e
								}))
						},
						addInputRow: function(e) {
							var t = this.caseInfo[e];
							0 === t.length && this.caseInfo[e].push({
									key: "",
									value: ""
								}), (t[t.length - 1].key || t[t.length - 1].value) && this.caseInfo[e]
								.push({
									key: "",
									value: ""
								})
						},
						editorInit: function() {
							i("95b8"), i("2099"), i("2968"), i("818b"), i("0329"), i("b039")
						},
						jsonFormat: function() {
							var e = JSON.parse(this.caseInfo.json);
							this.caseInfo.json = JSON.stringify(e, null, 4)
						}
					},
					watch: {
						"caseInfo.headers": {
							handler: function(e, t) {
								this.addInputRow("headers")
							},
							deep: !0
						},
						"caseInfo.params": {
							deep: !0,
							handler: function(e, t) {
								this.addInputRow("params")
							}
						},
						"caseInfo.data": {
							deep: !0,
							handler: function(e, t) {
								this.addInputRow("data")
							}
						}
					},
					components: {
						Editor: s.a,
						jsonView: l.a
					}
				},
				h = c,
				u = i("2877"),
				d = Object(u["a"])(h, n, r, !1, null, "19dd285c", null);
			t["default"] = d.exports
		},
		"7c9e": function(e, t, i) {
			var n = i("061c");
			e.exports = {
				render: function(e) {
					var t = this.height ? this.px(this.height) : "100%",
						i = this.width ? this.px(this.width) : "100%";
					return e("div", {
						attrs: {
							style: "height: " + t + "; width: " + i
						}
					})
				},
				props: {
					value: String,
					lang: !0,
					theme: String,
					height: !0,
					width: !0,
					options: Object
				},
				data: function() {
					return {
						editor: null,
						contentBackup: ""
					}
				},
				methods: {
					px: function(e) {
						return /^\d*$/.test(e) ? e + "px" : e
					}
				},
				watch: {
					value: function(e) {
						this.contentBackup !== e && (this.editor.session.setValue(e, 1), this
							.contentBackup = e)
					},
					theme: function(e) {
						this.editor.setTheme("ace/theme/" + e)
					},
					lang: function(e) {
						this.editor.getSession().setMode("string" === typeof e ? "ace/mode/" + e :
							e)
					},
					options: function(e) {
						this.editor.setOptions(e)
					},
					height: function() {
						this.$nextTick((function() {
							this.editor.resize()
						}))
					},
					width: function() {
						this.$nextTick((function() {
							this.editor.resize()
						}))
					}
				},
				beforeDestroy: function() {
					this.editor.destroy(), this.editor.container.remove()
				},
				mounted: function() {
					var e = this,
						t = this.lang || "text",
						r = this.theme || "chrome";
					i("b378");
					var o = e.editor = n.edit(this.$el);
					o.$blockScrolling = 1 / 0, this.$emit("init", o), o.getSession().setMode(
							"string" === typeof t ? "ace/mode/" + t : t), o.setTheme("ace/theme/" +
							r), this.value && o.setValue(this.value, 1), this.contentBackup = this
						.value, o.on("change", (function() {
							var t = o.getValue();
							e.$emit("input", t), e.contentBackup = t
						})), e.options && o.setOptions(e.options)
				}
			}
		},
		"818b": function(e, t, i) {
			ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/text_highlight_rules"
			], (function(e, t, i) {
				"use strict";
				var n = e("../lib/oop"),
					r = e("./text_highlight_rules").TextHighlightRules,
					o = function() {
						this.$rules = {
							start: [{
								token: "variable",
								regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
							}, {
								token: "string",
								regex: '"',
								next: "string"
							}, {
								token: "constant.numeric",
								regex: "0[xX][0-9a-fA-F]+\\b"
							}, {
								token: "constant.numeric",
								regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
							}, {
								token: "constant.language.boolean",
								regex: "(?:true|false)\\b"
							}, {
								token: "text",
								regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
							}, {
								token: "comment",
								regex: "\\/\\/.*$"
							}, {
								token: "comment.start",
								regex: "\\/\\*",
								next: "comment"
							}, {
								token: "paren.lparen",
								regex: "[[({]"
							}, {
								token: "paren.rparen",
								regex: "[\\])}]"
							}, {
								token: "text",
								regex: "\\s+"
							}],
							string: [{
								token: "constant.language.escape",
								regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
							}, {
								token: "string",
								regex: '"|$',
								next: "start"
							}, {
								defaultToken: "string"
							}],
							comment: [{
								token: "comment.end",
								regex: "\\*\\/",
								next: "start"
							}, {
								defaultToken: "comment"
							}]
						}
					};
				n.inherits(o, r), t.JsonHighlightRules = o
			})), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module",
				"ace/range"
			], (function(e, t, i) {
				"use strict";
				var n = e("../range").Range,
					r = function() {};
				(function() {
					this.checkOutdent = function(e, t) {
						return !!/^\s+$/.test(e) && /^\s*\}/.test(t)
					}, this.autoOutdent = function(e, t) {
						var i = e.getLine(t),
							r = i.match(/^(\s*\})/);
						if (!r) return 0;
						var o = r[1].length,
							s = e.findMatchingBracket({
								row: t,
								column: o
							});
						if (!s || s.row == t) return 0;
						var a = this.$getIndent(e.getLine(s.row));
						e.replace(new n(t, 0, t, o - 1), a)
					}, this.$getIndent = function(e) {
						return e.match(/^\s*/)[0]
					}
				}).call(r.prototype), t.MatchingBraceOutdent = r
			})), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop",
				"ace/range", "ace/mode/folding/fold_mode"
			], (function(e, t, i) {
				"use strict";
				var n = e("../../lib/oop"),
					r = e("../../range").Range,
					o = e("./fold_mode").FoldMode,
					s = t.FoldMode = function(e) {
						e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker
								.source.replace(/\|[^|]*?$/, "|" + e.start)), this
							.foldingStopMarker = new RegExp(this.foldingStopMarker.source
								.replace(/\|[^|]*?$/, "|" + e.end)))
					};
				n.inherits(s, o),
					function() {
						this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this
							.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this
							.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this
							.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this
							.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this
							._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget =
							function(e, t, i) {
								var n = e.getLine(i);
								if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe
									.test(n) && !this.tripleStarBlockCommentRe.test(n))
								return "";
								var r = this._getFoldWidgetBase(e, t, i);
								return !r && this.startRegionRe.test(n) ? "start" : r
							}, this.getFoldWidgetRange = function(e, t, i, n) {
								var r = e.getLine(i);
								if (this.startRegionRe.test(r)) return this
									.getCommentRegionBlock(e, r, i);
								var o = r.match(this.foldingStartMarker);
								if (o) {
									var s = o.index;
									if (o[1]) return this.openingBracketBlock(e, o[1], i, s);
									var a = e.getCommentFoldRange(i, s + o[0].length, 1);
									return a && !a.isMultiLine() && (n ? a = this
											.getSectionRange(e, i) : "all" != t && (a = null)),
										a
								}
								if ("markbegin" !== t) {
									o = r.match(this.foldingStopMarker);
									if (o) {
										s = o.index + o[0].length;
										return o[1] ? this.closingBracketBlock(e, o[1], i, s) :
											e.getCommentFoldRange(i, s, -1)
									}
								}
							}, this.getSectionRange = function(e, t) {
								var i = e.getLine(t),
									n = i.search(/\S/),
									o = t,
									s = i.length;
								t += 1;
								var a = t,
									l = e.getLength();
								while (++t < l) {
									i = e.getLine(t);
									var c = i.search(/\S/);
									if (-1 !== c) {
										if (n > c) break;
										var h = this.getFoldWidgetRange(e, "all", t);
										if (h) {
											if (h.start.row <= o) break;
											if (h.isMultiLine()) t = h.end.row;
											else if (n == c) break
										}
										a = t
									}
								}
								return new r(o, s, a, e.getLine(a).length)
							}, this.getCommentRegionBlock = function(e, t, i) {
								var n = t.search(/\s*$/),
									o = e.getLength(),
									s = i,
									a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
									l = 1;
								while (++i < o) {
									t = e.getLine(i);
									var c = a.exec(t);
									if (c && (c[1] ? l-- : l++, !l)) break
								}
								var h = i;
								if (h > s) return new r(s, n, h, t.length)
							}
					}.call(s.prototype)
			})), ace.define("ace/mode/json", ["require", "exports", "module", "ace/lib/oop",
				"ace/mode/text", "ace/mode/json_highlight_rules", "ace/mode/matching_brace_outdent",
				"ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle", "ace/worker/worker_client"
			], (function(e, t, n) {
				"use strict";
				var r = e("../lib/oop"),
					o = e("./text").Mode,
					s = e("./json_highlight_rules").JsonHighlightRules,
					a = e("./matching_brace_outdent").MatchingBraceOutdent,
					l = e("./behaviour/cstyle").CstyleBehaviour,
					c = e("./folding/cstyle").FoldMode,
					h = e("../worker/worker_client").WorkerClient,
					u = function() {
						this.HighlightRules = s, this.$outdent = new a, this.$behaviour = new l,
							this.foldingRules = new c
					};
				r.inherits(u, o),
					function() {
						this.getNextLineIndent = function(e, t, i) {
							var n = this.$getIndent(t);
							if ("start" == e) {
								var r = t.match(/^.*[\{\(\[]\s*$/);
								r && (n += i)
							}
							return n
						}, this.checkOutdent = function(e, t, i) {
							return this.$outdent.checkOutdent(t, i)
						}, this.autoOutdent = function(e, t, i) {
							this.$outdent.autoOutdent(t, i)
						}, this.createWorker = function(e) {
							var t = new h(["ace"], i("e8ff"), "JsonWorker");
							return t.attachToDocument(e.getDocument()), t.on("annotate", (
								function(t) {
									e.setAnnotations(t.data)
								})), t.on("terminate", (function() {
								e.clearAnnotations()
							})), t
						}, this.$id = "ace/mode/json"
					}.call(u.prototype), t.Mode = u
			}))
		},
		"95b8": function(e, t) {
			ace.define("ace/theme/chrome", ["require", "exports", "module", "ace/lib/dom"], (function(e, t,
				i) {
				t.isDark = !1, t.cssClass = "ace-chrome", t.cssText =
					'.ace-chrome .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-chrome .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-chrome {background-color: #FFFFFF;color: black;}.ace-chrome .ace_cursor {color: black;}.ace-chrome .ace_invisible {color: rgb(191, 191, 191);}.ace-chrome .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-chrome .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-chrome .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-chrome .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-chrome .ace_fold {}.ace-chrome .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-chrome .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-chrome .ace_support.ace_type,.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {color: rgb(109, 121, 222);}.ace-chrome .ace_variable.ace_parameter {font-style:italic;color:#FD971F;}.ace-chrome .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-chrome .ace_comment {color: #236e24;}.ace-chrome .ace_comment.ace_doc {color: #236e24;}.ace-chrome .ace_comment.ace_doc.ace_tag {color: #236e24;}.ace-chrome .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-chrome .ace_variable {color: rgb(49, 132, 149);}.ace-chrome .ace_xml-pe {color: rgb(104, 104, 91);}.ace-chrome .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-chrome .ace_heading {color: rgb(12, 7, 255);}.ace-chrome .ace_list {color:rgb(185, 6, 144);}.ace-chrome .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-chrome .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-chrome .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-chrome .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-chrome .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-chrome .ace_gutter-active-line {background-color : #dcdcdc;}.ace-chrome .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-chrome .ace_storage,.ace-chrome .ace_keyword,.ace-chrome .ace_meta.ace_tag {color: rgb(147, 15, 128);}.ace-chrome .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-chrome .ace_string {color: #1A1AA6;}.ace-chrome .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-chrome .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
				var n = e("../lib/dom");
				n.importCssString(t.cssText, t.cssClass)
			}))
		},
		b039: function(e, t) {
			ace.define("ace/snippets/json", ["require", "exports", "module"], (function(e, t, i) {
				"use strict";
				t.snippetText = void 0, t.scope = "json"
			}))
		},
		b378: function(e, t) {
			ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop",
					"ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor",
					"ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"
				], (function(e, t, i) {
					"use strict";
					var n = e("./lib/oop"),
						r = e("./lib/event_emitter").EventEmitter,
						o = e("./lib/lang"),
						s = e("./range").Range,
						a = e("./anchor").Anchor,
						l = e("./keyboard/hash_handler").HashHandler,
						c = e("./tokenizer").Tokenizer,
						h = s.comparePoints,
						u = function() {
							this.snippetMap = {}, this.snippetNameMap = {}
						};
					(function() {
						n.implement(this, r), this.getTokenizer = function() {
								function e(e, t, i) {
									return e = e.substr(1), /^\d+$/.test(e) && !i
										.inFormatString ? [{
											tabstopId: parseInt(e, 10)
										}] : [{
											text: e
										}]
								}

								function t(e) {
									return "(?:[^\\\\" + e + "]|\\\\.)"
								}
								return u.$tokenizer = new c({
									start: [{
										regex: /:/,
										onMatch: function(e, t, i) {
											return i.length && i[0]
												.expectIf ? (i[0]
													.expectIf = !1, i[0]
													.elseBranch = i[0], [i[
														0]]) : ":"
										}
									}, {
										regex: /\\./,
										onMatch: function(e, t, i) {
											var n = e[1];
											return "}" == n && i.length || -
												1 != "`$\\".indexOf(n) ? e =
												n : i.inFormatString && (
													"n" == n || "t" == n ?
													e = "\n" : -1 != "ulULE"
													.indexOf(n) && (e = {
														changeCase: n,
														local: n > "a"
													})), [e]
										}
									}, {
										regex: /}/,
										onMatch: function(e, t, i) {
											return [i.length ? i.shift() :
												e]
										}
									}, {
										regex: /\$(?:\d+|\w+)/,
										onMatch: e
									}, {
										regex: /\$\{[\dA-Z_a-z]+/,
										onMatch: function(t, i, n) {
											var r = e(t.substr(1), i, n);
											return n.unshift(r[0]), r
										},
										next: "snippetVar"
									}, {
										regex: /\n/,
										token: "newline",
										merge: !1
									}],
									snippetVar: [{
										regex: "\\|" + t("\\|") + "*\\|",
										onMatch: function(e, t, i) {
											i[0].choices = e.slice(1, -1)
												.split(",")
										},
										next: "start"
									}, {
										regex: "/(" + t("/") + "+)/(?:(" + t(
											"/") + "*)/)(\\w*):?",
										onMatch: function(e, t, i) {
											var n = i[0];
											return n.fmtString = e, e = this
												.splitRegex.exec(e), n
												.guard = e[1], n.fmt = e[2],
												n.flag = e[3], ""
										},
										next: "start"
									}, {
										regex: "`" + t("`") + "*`",
										onMatch: function(e, t, i) {
											return i[0].code = e.splice(1, -
												1), ""
										},
										next: "start"
									}, {
										regex: "\\?",
										onMatch: function(e, t, i) {
											i[0] && (i[0].expectIf = !0)
										},
										next: "start"
									}, {
										regex: "([^:}\\\\]|\\\\.)*:?",
										token: "",
										next: "start"
									}],
									formatString: [{
										regex: "/(" + t("/") + "+)/",
										token: "regex"
									}, {
										regex: "",
										onMatch: function(e, t, i) {
											i.inFormatString = !0
										},
										next: "start"
									}]
								}), u.prototype.getTokenizer = function() {
									return u.$tokenizer
								}, u.$tokenizer
							}, this.tokenizeTmSnippet = function(e, t) {
								return this.getTokenizer().getLineTokens(e, t).tokens.map((
									function(e) {
										return e.value || e
									}))
							}, this.$getDefaultValue = function(e, t) {
								if (/^[A-Z]\d+$/.test(t)) {
									var i = t.substr(1);
									return (this.variables[t[0] + "__"] || {})[i]
								}
								if (/^\d+$/.test(t)) return (this.variables.__ || {})[t];
								if (t = t.replace(/^TM_/, ""), e) {
									var n = e.session;
									switch (t) {
										case "CURRENT_WORD":
											var r = n.getWordRange();
										case "SELECTION":
										case "SELECTED_TEXT":
											return n.getTextRange(r);
										case "CURRENT_LINE":
											return n.getLine(e.getCursorPosition().row);
										case "PREV_LINE":
											return n.getLine(e.getCursorPosition().row - 1);
										case "LINE_INDEX":
											return e.getCursorPosition().column;
										case "LINE_NUMBER":
											return e.getCursorPosition().row + 1;
										case "SOFT_TABS":
											return n.getUseSoftTabs() ? "YES" : "NO";
										case "TAB_SIZE":
											return n.getTabSize();
										case "FILENAME":
										case "FILEPATH":
											return "";
										case "FULLNAME":
											return "Ace"
									}
								}
							}, this.variables = {}, this.getVariableValue = function(e, t) {
								return this.variables.hasOwnProperty(t) ? this.variables[t](e,
									t) || "" : this.$getDefaultValue(e, t) || ""
							}, this.tmStrFormat = function(e, t, i) {
								var n = t.flag || "",
									r = t.guard;
								r = new RegExp(r, n.replace(/[^gi]/, ""));
								var o = this.tokenizeTmSnippet(t.fmt, "formatString"),
									s = this,
									a = e.replace(r, (function() {
										s.variables.__ = arguments;
										for (var e = s.resolveVariables(o, i), t = "E",
												n = 0; n < e.length; n++) {
											var r = e[n];
											if ("object" == typeof r)
												if (e[n] = "", r.changeCase && r
													.local) {
													var a = e[n + 1];
													a && "string" == typeof a && ("u" ==
														r.changeCase ? e[n] = a[0]
														.toUpperCase() : e[n] = a[0]
														.toLowerCase(), e[n + 1] = a
														.substr(1))
												} else r.changeCase && (t = r
													.changeCase);
											else "U" == t ? e[n] = r.toUpperCase() :
												"L" == t && (e[n] = r.toLowerCase())
										}
										return e.join("")
									}));
								return this.variables.__ = null, a
							}, this.resolveVariables = function(e, t) {
								for (var i = [], n = 0; n < e.length; n++) {
									var r = e[n];
									if ("string" == typeof r) i.push(r);
									else {
										if ("object" != typeof r) continue;
										if (r.skip) s(r);
										else {
											if (r.processed < n) continue;
											if (r.text) {
												var o = this.getVariableValue(t, r.text);
												o && r.fmtString && (o = this.tmStrFormat(o,
													r)), r.processed = n, null == r.expectIf ?
													o && (i.push(o), s(r)) : o ? r.skip = r
													.elseBranch : s(r)
											} else(null != r.tabstopId || null != r
												.changeCase) && i.push(r)
										}
									}
								}

								function s(t) {
									var i = e.indexOf(t, n + 1); - 1 != i && (n = i)
								}
								return i
							}, this.insertSnippetForSelection = function(e, t) {
								var i = e.getCursorPosition(),
									n = e.session.getLine(i.row),
									r = e.session.getTabString(),
									o = n.match(/^\s*/)[0];
								i.column < o.length && (o = o.slice(0, i.column)), t = t
									.replace(/\r/g, "");
								var s = this.tokenizeTmSnippet(t);
								s = this.resolveVariables(s, e), s = s.map((function(e) {
									return "\n" == e ? e + o : "string" ==
										typeof e ? e.replace(/\t/g, r) : e
								}));
								var a = [];
								s.forEach((function(e, t) {
									if ("object" == typeof e) {
										var i = e.tabstopId,
											n = a[i];
										if (n || (n = a[i] = [], n.index = i, n
												.value = ""), -1 === n.indexOf(e)) {
											n.push(e);
											var r = s.indexOf(e, t + 1);
											if (-1 !== r) {
												var o = s.slice(t + 1, r),
													l = o.some((function(e) {
														return "object" ===
															typeof e
													}));
												l && !n.value ? n.value = o : !o
													.length || n.value &&
													"string" === typeof n.value || (
														n.value = o.join(""))
											}
										}
									}
								})), a.forEach((function(e) {
									e.length = 0
								}));
								var l = {};

								function c(e) {
									for (var t = [], i = 0; i < e.length; i++) {
										var n = e[i];
										if ("object" == typeof n) {
											if (l[n.tabstopId]) continue;
											var r = e.lastIndexOf(n, i - 1);
											n = t[r] || {
												tabstopId: n.tabstopId
											}
										}
										t[i] = n
									}
									return t
								}
								for (var h = 0; h < s.length; h++) {
									var u = s[h];
									if ("object" == typeof u) {
										var g = u.tabstopId,
											f = s.indexOf(u, h + 1);
										if (l[g]) l[g] === u && (l[g] = null);
										else {
											var p = a[g],
												m = "string" == typeof p.value ? [p.value] : c(p
													.value);
											m.unshift(h + 1, Math.max(0, f - h)), m.push(u), l[
													g] = u, s.splice.apply(s, m), -1 === p
												.indexOf(u) && p.push(u)
										}
									}
								}
								var v = 0,
									w = 0,
									b = "";
								s.forEach((function(e) {
									if ("string" === typeof e) {
										var t = e.split("\n");
										t.length > 1 ? (w = t[t.length - 1].length,
												v += t.length - 1) : w += e.length,
											b += e
									} else e.start ? e.end = {
										row: v,
										column: w
									} : e.start = {
										row: v,
										column: w
									}
								}));
								var A = e.getSelectionRange(),
									C = e.session.replace(A, b),
									F = new d(e),
									y = e.inVirtualSelectionMode && e.selection.index;
								F.addTabstops(a, A.start, C, y)
							}, this.insertSnippet = function(e, t) {
								var i = this;
								if (e.inVirtualSelectionMode) return i
									.insertSnippetForSelection(e, t);
								e.forEachSelection((function() {
									i.insertSnippetForSelection(e, t)
								}), null, {
									keepOrder: !0
								}), e.tabstopManager && e.tabstopManager.tabNext()
							}, this.$getScope = function(e) {
								var t = e.session.$mode.$id || "";
								if (t = t.split("/").pop(), "html" === t || "php" === t) {
									"php" !== t || e.session.$mode.inlinePhp || (t = "html");
									var i = e.getCursorPosition(),
										n = e.session.getState(i.row);
									"object" === typeof n && (n = n[0]), n.substring && (
										"js-" == n.substring(0, 3) ? t = "javascript" :
										"css-" == n.substring(0, 4) ? t = "css" : "php-" ==
										n.substring(0, 4) && (t = "php"))
								}
								return t
							}, this.getActiveScopes = function(e) {
								var t = this.$getScope(e),
									i = [t],
									n = this.snippetMap;
								return n[t] && n[t].includeScopes && i.push.apply(i, n[t]
									.includeScopes), i.push("_"), i
							}, this.expandWithTab = function(e, t) {
								var i = this,
									n = e.forEachSelection((function() {
										return i.expandSnippetForSelection(e, t)
									}), null, {
										keepOrder: !0
									});
								return n && e.tabstopManager && e.tabstopManager.tabNext(), n
							}, this.expandSnippetForSelection = function(e, t) {
								var i, n = e.getCursorPosition(),
									r = e.session.getLine(n.row),
									o = r.substring(0, n.column),
									s = r.substr(n.column),
									a = this.snippetMap;
								return this.getActiveScopes(e).some((function(e) {
									var t = a[e];
									return t && (i = this.findMatchingSnippet(t, o,
										s)), !!i
								}), this), !!i && (t && t.dryRun || (e.session.doc
									.removeInLine(n.row, n.column - i.replaceBefore
										.length, n.column + i.replaceAfter.length), this
									.variables.M__ = i.matchBefore, this.variables.T__ =
									i.matchAfter, this.insertSnippetForSelection(e, i
										.content), this.variables.M__ = this.variables
									.T__ = null), !0)
							}, this.findMatchingSnippet = function(e, t, i) {
								for (var n = e.length; n--;) {
									var r = e[n];
									if ((!r.startRe || r.startRe.test(t)) && ((!r.endRe || r
											.endRe.test(i)) && (r.startRe || r.endRe))) return r
										.matchBefore = r.startRe ? r.startRe.exec(t) : [""],
										r.matchAfter = r.endRe ? r.endRe.exec(i) : [""], r
										.replaceBefore = r.triggerRe ? r.triggerRe.exec(t)[
											0] : "", r.replaceAfter = r.endTriggerRe ? r
										.endTriggerRe.exec(i)[0] : "", r
								}
							}, this.snippetMap = {}, this.snippetNameMap = {}, this.register =
							function(e, t) {
								var i = this.snippetMap,
									n = this.snippetNameMap,
									r = this;

								function s(e) {
									return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" +
										e + ")"), e || ""
								}

								function a(e, t, i) {
									return e = s(e), t = s(t), i ? (e = t + e, e && "$" != e[e
										.length - 1] && (e += "$")) : (e += t, e && "^" !=
										e[0] && (e = "^" + e)), new RegExp(e)
								}

								function l(e) {
									e.scope || (e.scope = t || "_"), t = e.scope, i[t] || (i[
										t] = [], n[t] = {});
									var s = n[t];
									if (e.name) {
										var l = s[e.name];
										l && r.unregister(l), s[e.name] = e
									}
									i[t].push(e), e.tabTrigger && !e.trigger && (!e.guard &&
											/^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e
											.trigger = o.escapeRegExp(e.tabTrigger)), (e
											.trigger || e.guard || e.endTrigger || e.endGuard
											) && (e.startRe = a(e.trigger, e.guard, !0), e
											.triggerRe = new RegExp(e.trigger, "", !0), e
											.endRe = a(e.endTrigger, e.endGuard, !0), e
											.endTriggerRe = new RegExp(e.endTrigger, "", !0))
								}
								e || (e = []), e && e.content ? l(e) : Array.isArray(e) && e
									.forEach(l), this._signal("registerSnippets", {
										scope: t
									})
							}, this.unregister = function(e, t) {
								var i = this.snippetMap,
									n = this.snippetNameMap;

								function r(e) {
									var r = n[e.scope || t];
									if (r && r[e.name]) {
										delete r[e.name];
										var o = i[e.scope || t],
											s = o && o.indexOf(e);
										s >= 0 && o.splice(s, 1)
									}
								}
								e.content ? r(e) : Array.isArray(e) && e.forEach(r)
							}, this.parseSnippetFile = function(e) {
								e = e.replace(/\r/g, "");
								var t, i = [],
									n = {},
									r = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;
								while (t = r.exec(e)) {
									if (t[1]) try {
										n = JSON.parse(t[1]), i.push(n)
									} catch (l) {}
									if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n),
										n = {};
									else {
										var o = t[2],
											s = t[3];
										if ("regex" == o) {
											var a = /\/((?:[^\/\\]|\\.)*)|$/g;
											n.guard = a.exec(s)[1], n.trigger = a.exec(s)[1], n
												.endTrigger = a.exec(s)[1], n.endGuard = a.exec(
													s)[1]
										} else "snippet" == o ? (n.tabTrigger = s.match(/^\S*/)[
											0], n.name || (n.name = s)) : n[o] = s
									}
								}
								return i
							}, this.getSnippetByName = function(e, t) {
								var i, n = this.snippetNameMap;
								return this.getActiveScopes(t).some((function(t) {
									var r = n[t];
									return r && (i = r[e]), !!i
								}), this), i
							}
					}).call(u.prototype);
					var d = function(e) {
						if (e.tabstopManager) return e.tabstopManager;
						e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this
							.$onChangeSelection = o.delayedCall(this.onChangeSelection.bind(
								this)).schedule, this.$onChangeSession = this.onChangeSession
							.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this
							.attach(e)
					};
					(function() {
						this.attach = function(e) {
							this.index = 0, this.ranges = [], this.tabstops = [], this
								.$openTabstops = null, this.selectedTabstop = null, this
								.editor = e, this.editor.on("change", this.$onChange), this
								.editor.on("changeSelection", this.$onChangeSelection), this
								.editor.on("changeSession", this.$onChangeSession), this
								.editor.commands.on("afterExec", this.$onAfterExec), this
								.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
						}, this.detach = function() {
							this.tabstops.forEach(this.removeTabstopMarkers, this), this
								.ranges = null, this.tabstops = null, this.selectedTabstop =
								null, this.editor.removeListener("change", this.$onChange),
								this.editor.removeListener("changeSelection", this
									.$onChangeSelection), this.editor.removeListener(
									"changeSession", this.$onChangeSession), this.editor
								.commands.removeListener("afterExec", this.$onAfterExec),
								this.editor.keyBinding.removeKeyboardHandler(this
									.keyboardHandler), this.editor.tabstopManager = null,
								this.editor = null
						}, this.onChange = function(e) {
							var t = "r" == e.action[0],
								i = e.start,
								n = e.end,
								r = i.row,
								o = n.row,
								s = o - r,
								a = n.column - i.column;
							if (t && (s = -s, a = -a), !this.$inChange && t) {
								var l = this.selectedTabstop,
									c = l && !l.some((function(e) {
										return h(e.start, i) <= 0 && h(e.end, n) >=
											0
									}));
								if (c) return this.detach()
							}
							for (var u = this.ranges, d = 0; d < u.length; d++) {
								var g = u[d];
								g.end.row < i.row || (t && h(i, g.start) < 0 && h(n, g
									.end) > 0 ? (this.removeRange(g), d--) : (g.start
										.row == r && g.start.column > i.column && (g
											.start.column += a), g.end.row == r && g.end
										.column >= i.column && (g.end.column += a), g
										.start.row >= r && (g.start.row += s), g.end
										.row >= r && (g.end.row += s), h(g.start, g
										.end) > 0 && this.removeRange(g)))
							}
							u.length || this.detach()
						}, this.updateLinkedFields = function() {
							var e = this.selectedTabstop;
							if (e && e.hasLinkedRanges) {
								this.$inChange = !0;
								for (var i = this.editor.session, n = i.getTextRange(e
										.firstNonLinked), r = e.length; r--;) {
									var o = e[r];
									if (o.linked) {
										var s = t.snippetManager.tmStrFormat(n, o.original);
										i.replace(o, s)
									}
								}
								this.$inChange = !1
							}
						}, this.onAfterExec = function(e) {
							e.command && !e.command.readOnly && this.updateLinkedFields()
						}, this.onChangeSelection = function() {
							if (this.editor) {
								for (var e = this.editor.selection.lead, t = this.editor
										.selection.anchor, i = this.editor.selection
										.isEmpty(), n = this.ranges.length; n--;)
									if (!this.ranges[n].linked) {
										var r = this.ranges[n].contains(e.row, e.column),
											o = i || this.ranges[n].contains(t.row, t
												.column);
										if (r && o) return
									} this.detach()
							}
						}, this.onChangeSession = function() {
							this.detach()
						}, this.tabNext = function(e) {
							var t = this.tabstops.length,
								i = this.index + (e || 1);
							i = Math.min(Math.max(i, 1), t), i == t && (i = 0), this
								.selectTabstop(i), 0 === i && this.detach()
						}, this.selectTabstop = function(e) {
							this.$openTabstops = null;
							var t = this.tabstops[this.index];
							if (t && this.addTabstopMarkers(t), this.index = e, t = this
								.tabstops[this.index], t && t.length) {
								if (this.selectedTabstop = t, this.editor
									.inVirtualSelectionMode) this.editor.selection.setRange(
									t.firstNonLinked);
								else {
									var i = this.editor.multiSelect;
									i.toSingleRange(t.firstNonLinked.clone());
									for (var n = t.length; n--;) t.hasLinkedRanges && t[n]
										.linked || i.addRange(t[n].clone(), !0);
									i.ranges[0] && i.addRange(i.ranges[0].clone())
								}
								this.editor.keyBinding.addKeyboardHandler(this
									.keyboardHandler)
							}
						}, this.addTabstops = function(e, t, i) {
							if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
								var n = s.fromPoints(i, i);
								p(n.start, t), p(n.end, t), e[0] = [n], e[0].index = 0
							}
							var r = this.index,
								o = [r + 1, 0],
								a = this.ranges;
							e.forEach((function(e, i) {
								for (var n = this.$openTabstops[i] || e, r = e
										.length; r--;) {
									var l = e[r],
										c = s.fromPoints(l.start, l.end || l
											.start);
									f(c.start, t), f(c.end, t), c.original = l,
										c.tabstop = n, a.push(c), n != e ? n
										.unshift(c) : n[r] = c, l.fmtString ? (c
											.linked = !0, n.hasLinkedRanges = !0
											) : n.firstNonLinked || (n
											.firstNonLinked = c)
								}
								n.firstNonLinked || (n.hasLinkedRanges = !1),
									n === e && (o.push(n), this.$openTabstops[
										i] = n), this.addTabstopMarkers(n)
							}), this), o.length > 2 && (this.tabstops.length && o.push(o
								.splice(2, 1)[0]), this.tabstops.splice.apply(this
								.tabstops, o))
						}, this.addTabstopMarkers = function(e) {
							var t = this.editor.session;
							e.forEach((function(e) {
								e.markerId || (e.markerId = t.addMarker(e,
									"ace_snippet-marker", "text"))
							}))
						}, this.removeTabstopMarkers = function(e) {
							var t = this.editor.session;
							e.forEach((function(e) {
								t.removeMarker(e.markerId), e.markerId = null
							}))
						}, this.removeRange = function(e) {
							var t = e.tabstop.indexOf(e);
							e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges
								.splice(t, 1), this.editor.session.removeMarker(e.markerId),
								e.tabstop.length || (t = this.tabstops.indexOf(e.tabstop), -
									1 != t && this.tabstops.splice(t, 1), this.tabstops
									.length || this.detach())
						}, this.keyboardHandler = new l, this.keyboardHandler.bindKeys({
							Tab: function(e) {
								t.snippetManager && t.snippetManager.expandWithTab(
									e) || e.tabstopManager.tabNext(1)
							},
							"Shift-Tab": function(e) {
								e.tabstopManager.tabNext(-1)
							},
							Esc: function(e) {
								e.tabstopManager.detach()
							},
							Return: function(e) {
								return !1
							}
						})
					}).call(d.prototype);
					var g = {};
					g.onChange = a.prototype.onChange, g.setPosition = function(e, t) {
						this.pos.row = e, this.pos.column = t
					}, g.update = function(e, t, i) {
						this.$insertRight = i, this.pos = e, this.onChange(t)
					};
					var f = function(e, t) {
							0 == e.row && (e.column += t.column), e.row += t.row
						},
						p = function(e, t) {
							e.row == t.row && (e.column -= t.column), e.row -= t.row
						};
					e("./lib/dom").importCssString(
						".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"
						), t.snippetManager = new u;
					var m = e("./editor").Editor;
					(function() {
						this.insertSnippet = function(e, i) {
							return t.snippetManager.insertSnippet(this, e, i)
						}, this.expandSnippet = function(e) {
							return t.snippetManager.expandWithTab(this, e)
						}
					}).call(m.prototype)
				})), ace.define("ace/ext/emmet", ["require", "exports", "module",
					"ace/keyboard/hash_handler", "ace/editor", "ace/snippets", "ace/range", "resources",
					"resources", "tabStops", "resources", "utils", "actions", "ace/config", "ace/config"
				], (function(e, t, i) {
					"use strict";
					var n, r, o = e("ace/keyboard/hash_handler").HashHandler,
						s = e("ace/editor").Editor,
						a = e("ace/snippets").snippetManager,
						l = e("ace/range").Range;

					function c() {}
					c.prototype = {
						setupContext: function(e) {
							this.ace = e, this.indentation = e.session.getTabString(), n ||
								(n = window.emmet);
							var t = n.resources || n.require("resources");
							t.setVariable("indentation", this.indentation), this.$syntax =
								null, this.$syntax = this.getSyntax()
						},
						getSelectionRange: function() {
							var e = this.ace.getSelectionRange(),
								t = this.ace.session.doc;
							return {
								start: t.positionToIndex(e.start),
								end: t.positionToIndex(e.end)
							}
						},
						createSelection: function(e, t) {
							var i = this.ace.session.doc;
							this.ace.selection.setRange({
								start: i.indexToPosition(e),
								end: i.indexToPosition(t)
							})
						},
						getCurrentLineRange: function() {
							var e = this.ace,
								t = e.getCursorPosition().row,
								i = e.session.getLine(t).length,
								n = e.session.doc.positionToIndex({
									row: t,
									column: 0
								});
							return {
								start: n,
								end: n + i
							}
						},
						getCaretPos: function() {
							var e = this.ace.getCursorPosition();
							return this.ace.session.doc.positionToIndex(e)
						},
						setCaretPos: function(e) {
							var t = this.ace.session.doc.indexToPosition(e);
							this.ace.selection.moveToPosition(t)
						},
						getCurrentLine: function() {
							var e = this.ace.getCursorPosition().row;
							return this.ace.session.getLine(e)
						},
						replaceContent: function(e, t, i, n) {
							null == i && (i = null == t ? this.getContent().length : t),
								null == t && (t = 0);
							var r = this.ace,
								o = r.session.doc,
								s = l.fromPoints(o.indexToPosition(t), o.indexToPosition(
								i));
							r.session.remove(s), s.end = s.start, e = this.$updateTabstops(
								e), a.insertSnippet(r, e)
						},
						getContent: function() {
							return this.ace.getValue()
						},
						getSyntax: function() {
							if (this.$syntax) return this.$syntax;
							var e = this.ace.session.$modeId.split("/").pop();
							if ("html" == e || "php" == e) {
								var t = this.ace.getCursorPosition(),
									i = this.ace.session.getState(t.row);
								"string" != typeof i && (i = i[0]), i && (i = i.split("-"),
									i.length > 1 ? e = i[0] : "php" == e && (e = "html")
									)
							}
							return e
						},
						getProfileName: function() {
							var e = n.resources || n.require("resources");
							switch (this.getSyntax()) {
								case "css":
									return "css";
								case "xml":
								case "xsl":
									return "xml";
								case "html":
									var t = e.getVariable("profile");
									return t || (t = -1 != this.ace.session.getLines(0, 2)
										.join("").search(/<!DOCTYPE[^>]+XHTML/i) ?
										"xhtml" : "html"), t;
								default:
									var i = this.ace.session.$mode;
									return i.emmetConfig && i.emmetConfig.profile || "xhtml"
							}
						},
						prompt: function(e) {
							return prompt(e)
						},
						getSelection: function() {
							return this.ace.session.getTextRange()
						},
						getFilePath: function() {
							return ""
						},
						$updateTabstops: function(e) {
							var t = 1e3,
								i = 0,
								r = null,
								o = n.tabStops || n.require("tabStops"),
								s = n.resources || n.require("resources"),
								a = s.getVocabulary("user"),
								l = {
									tabstop: function(e) {
										var n = parseInt(e.group, 10),
											s = 0 === n;
										s ? n = ++i : n += t;
										var a = e.placeholder;
										a && (a = o.processText(a, l));
										var c = "${" + n + (a ? ":" + a : "") + "}";
										return s && (r = [e.start, c]), c
									},
									escape: function(e) {
										return "$" == e ? "\\$" : "\\" == e ? "\\\\" : e
									}
								};
							if (e = o.processText(e, l), a.variables[
								"insert_final_tabstop"] && !/\$\{0\}$/.test(e)) e += "${0}";
							else if (r) {
								var c = n.utils ? n.utils.common : n.require("utils");
								e = c.replaceSubstring(e, "${0}", r[0], r[1])
							}
							return e
						}
					};
					var h = {
							expand_abbreviation: {
								mac: "ctrl+alt+e",
								win: "alt+e"
							},
							match_pair_outward: {
								mac: "ctrl+d",
								win: "ctrl+,"
							},
							match_pair_inward: {
								mac: "ctrl+j",
								win: "ctrl+shift+0"
							},
							matching_pair: {
								mac: "ctrl+alt+j",
								win: "alt+j"
							},
							next_edit_point: "alt+right",
							prev_edit_point: "alt+left",
							toggle_comment: {
								mac: "command+/",
								win: "ctrl+/"
							},
							split_join_tag: {
								mac: "shift+command+'",
								win: "shift+ctrl+`"
							},
							remove_tag: {
								mac: "command+'",
								win: "shift+ctrl+;"
							},
							evaluate_math_expression: {
								mac: "shift+command+y",
								win: "shift+ctrl+y"
							},
							increment_number_by_1: "ctrl+up",
							decrement_number_by_1: "ctrl+down",
							increment_number_by_01: "alt+up",
							decrement_number_by_01: "alt+down",
							increment_number_by_10: {
								mac: "alt+command+up",
								win: "shift+alt+up"
							},
							decrement_number_by_10: {
								mac: "alt+command+down",
								win: "shift+alt+down"
							},
							select_next_item: {
								mac: "shift+command+.",
								win: "shift+ctrl+."
							},
							select_previous_item: {
								mac: "shift+command+,",
								win: "shift+ctrl+,"
							},
							reflect_css_value: {
								mac: "shift+command+r",
								win: "shift+ctrl+r"
							},
							encode_decode_data_url: {
								mac: "shift+ctrl+d",
								win: "ctrl+'"
							},
							expand_abbreviation_with_tab: "Tab",
							wrap_with_abbreviation: {
								mac: "shift+ctrl+a",
								win: "shift+ctrl+a"
							}
						},
						u = new c;
					for (var d in t.commands = new o, t.runEmmetCommand = function e(t) {
							try {
								u.setupContext(t);
								var i = n.actions || n.require("actions");
								if ("expand_abbreviation_with_tab" == this.action) {
									if (!t.selection.isEmpty()) return !1;
									var r = t.selection.lead,
										o = t.session.getTokenAt(r.row, r.column);
									if (o && /\btag\b/.test(o.type)) return !1
								}
								if ("wrap_with_abbreviation" == this.action) return setTimeout((
									function() {
										i.run("wrap_with_abbreviation", u)
									}), 0);
								var s = i.run(this.action, u)
							} catch (a) {
								if (!n) return f(e.bind(this, t)), !0;
								t._signal("changeStatus", "string" == typeof a ? a : a.message),
									console.log(a), s = !1
							}
							return s
						}, h) t.commands.addCommand({
						name: "emmet:" + d,
						action: d,
						bindKey: h[d],
						exec: t.runEmmetCommand,
						multiSelectAction: "forEach"
					});
					t.updateCommands = function(e, i) {
						i ? e.keyBinding.addKeyboardHandler(t.commands) : e.keyBinding
							.removeKeyboardHandler(t.commands)
					}, t.isSupportedMode = function(e) {
						if (!e) return !1;
						if (e.emmetConfig) return !0;
						var t = e.$id || e;
						return /css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(t)
					}, t.isAvailable = function(e, i) {
						if (/(evaluate_math_expression|expand_abbreviation)$/.test(i)) return !
						0;
						var n = e.session.$mode,
							r = t.isSupportedMode(n);
						if (r && n.$modes) try {
							u.setupContext(e), /js|php/.test(u.getSyntax()) && (r = !1)
						} catch (o) {}
						return r
					};
					var g = function(e, i) {
							var n = i;
							if (n) {
								var r = t.isSupportedMode(n.session.$mode);
								!1 === e.enableEmmet && (r = !1), r && f(), t.updateCommands(n, r)
							}
						},
						f = function(t) {
							"string" == typeof r && e("ace/config").loadModule(r, (function() {
								r = null, t && t()
							}))
						};
					t.AceEmmetEditor = c, e("ace/config").defineOptions(s.prototype, "editor", {
						enableEmmet: {
							set: function(e) {
								this[e ? "on" : "removeListener"]("changeMode", g), g({
									enableEmmet: !!e
								}, this)
							},
							value: !0
						}
					}), t.setCore = function(e) {
						"string" == typeof e ? r = e : n = e
					}
				})),
				function() {
					ace.acequire(["ace/ext/emmet"], (function() {}))
				}()
		},
		b727: function(e, t, i) {
			var n = i("0366"),
				r = i("44ad"),
				o = i("7b0b"),
				s = i("50c4"),
				a = i("65f0"),
				l = [].push,
				c = function(e) {
					var t = 1 == e,
						i = 2 == e,
						c = 3 == e,
						h = 4 == e,
						u = 6 == e,
						d = 7 == e,
						g = 5 == e || u;
					return function(f, p, m, v) {
						for (var w, b, A = o(f), C = r(A), F = n(p, m, 3), y = s(C.length), E = 0, x =
								v || a, $ = t ? x(f, y) : i || d ? x(f, 0) : void 0; y > E; E++)
							if ((g || E in C) && (w = C[E], b = F(w, E, A), e))
								if (t) $[E] = b;
								else if (b) switch (e) {
							case 3:
								return !0;
							case 5:
								return w;
							case 6:
								return E;
							case 2:
								l.call($, w)
						} else switch (e) {
							case 4:
								return !1;
							case 7:
								l.call($, w)
						}
						return u ? -1 : c || h ? h : $
					}
				};
			e.exports = {
				forEach: c(0),
				map: c(1),
				filter: c(2),
				some: c(3),
				every: c(4),
				find: c(5),
				findIndex: c(6),
				filterOut: c(7)
			}
		},
		e8b5: function(e, t, i) {
			var n = i("c6b6");
			e.exports = Array.isArray || function(e) {
				return "Array" == n(e)
			}
		},
		e8ff: function(e, t) {
			e.exports.id = "ace/mode/json_worker", e.exports.src =
				'"no use strict";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail="";testPath;){var alias=paths[testPath];if("string"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,"/")+(tail||alias.main||alias.name);if(alias===!1)return"";var i=testPath.lastIndexOf("/");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:"log",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:"error",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf("!")){var chunks=moduleName.split("!");return window.normalizeModule(parentId,chunks[0])+"!"+window.normalizeModule(parentId,chunks[1])}if("."==moduleName.charAt(0)){var base=parentId.split("/").slice(0,-1).join("/");for(moduleName=(base?base+"/":"")+moduleName;-1!==moduleName.indexOf(".")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,"").replace(/\\/\\.\\//,"/").replace(/[^\\/]+\\/\\.\\.\\//,"")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error("worker.js acequire() accepts only (parentId, id) as arguments");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log("unable to load "+id);var path=resolveModuleId(id,window.acequire.tlns);return".js"!=path.slice(-3)&&(path+=".js"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,"string"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),"function"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=["require","exports","module"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case"require":return req;case"exports":return module.exports;case"module":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire("ace/lib/event_emitter").EventEmitter,oop=window.acequire("ace/lib/oop"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:"call",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:"event",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error("Unknown command:"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire("ace/lib/es5-shim"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define("ace/lib/oop",["require","exports","module"],function(acequire,exports){"use strict";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define("ace/range",["require","exports","module"],function(acequire,exports){"use strict";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){"object"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){"object"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define("ace/apply_delta",["require","exports","module"],function(acequire,exports){"use strict";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||"";switch(delta.action){case"insert":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case"remove":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(acequire,exports){"use strict";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){"object"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?"unshift":"push"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(acequire,exports){"use strict";var oop=acequire("./lib/oop"),EventEmitter=acequire("./lib/event_emitter").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert="insert"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal("change",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener("change",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(acequire,exports){"use strict";var oop=acequire("./lib/oop"),applyDelta=acequire("./apply_delta").applyDelta,EventEmitter=acequire("./lib/event_emitter").EventEmitter,Range=acequire("./range").Range,Anchor=acequire("./anchor").Anchor,Document=function(textOrLines){this.$lines=[""],0===textOrLines.length?this.$lines=[""]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0==="aaa".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,"\\n").split("\\n")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:"\\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\\r\\n";case"unix":return"\\n";default:return this.$autoNewLine||"\\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal("changeNewLineMode"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return"\\r\\n"==text||"\\r"==text||"\\n"==text},this.getLine=function(row){return this.$lines[row]||""},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||"").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, [\'\', \'\']) instead."),this.insertMergedLines(position,["",""])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:"insert",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([""]),column=0):(lines=[""].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:"insert",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:"remove",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:"remove",lines:["",""]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert="insert"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal("change",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(""),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:"insert"==delta.action?"remove":"insert",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define("ace/lib/lang",["require","exports","module"],function(acequire,exports){"use strict";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split("").reverse().join("")},exports.stringRepeat=function(string,count){for(var result="";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,"")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,"")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&"object"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if("object"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if("[object Object]"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,"\\\\$1")},exports.escapeHTML=function(str){return str.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/\'/g,"&#39;").replace(/</g,"&#60;")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"],function(acequire,exports){"use strict";acequire("../range").Range;var Document=acequire("../document").Document,lang=acequire("../lib/lang"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(""),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on("change",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:"insert",start:data[i],lines:data[i+1]};else var d={action:"remove",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define("ace/mode/json/json_parse",["require","exports","module"],function(){"use strict";var at,ch,text,value,escapee={\'"\':\'"\',"\\\\":"\\\\","/":"/",b:"\\b",f:"\\f",n:"\\n",r:"\\r",t:"\t"},error=function(m){throw{name:"SyntaxError",message:m,at:at,text:text}},next=function(c){return c&&c!==ch&&error("Expected \'"+c+"\' instead of \'"+ch+"\'"),ch=text.charAt(at),at+=1,ch},number=function(){var number,string="";for("-"===ch&&(string="-",next("-"));ch>="0"&&"9">=ch;)string+=ch,next();if("."===ch)for(string+=".";next()&&ch>="0"&&"9">=ch;)string+=ch;if("e"===ch||"E"===ch)for(string+=ch,next(),("-"===ch||"+"===ch)&&(string+=ch,next());ch>="0"&&"9">=ch;)string+=ch,next();return number=+string,isNaN(number)?(error("Bad number"),void 0):number},string=function(){var hex,i,uffff,string="";if(\'"\'===ch)for(;next();){if(\'"\'===ch)return next(),string;if("\\\\"===ch)if(next(),"u"===ch){for(uffff=0,i=0;4>i&&(hex=parseInt(next(),16),isFinite(hex));i+=1)uffff=16*uffff+hex;string+=String.fromCharCode(uffff)}else{if("string"!=typeof escapee[ch])break;string+=escapee[ch]}else string+=ch}error("Bad string")},white=function(){for(;ch&&" ">=ch;)next()},word=function(){switch(ch){case"t":return next("t"),next("r"),next("u"),next("e"),!0;case"f":return next("f"),next("a"),next("l"),next("s"),next("e"),!1;case"n":return next("n"),next("u"),next("l"),next("l"),null}error("Unexpected \'"+ch+"\'")},array=function(){var array=[];if("["===ch){if(next("["),white(),"]"===ch)return next("]"),array;for(;ch;){if(array.push(value()),white(),"]"===ch)return next("]"),array;next(","),white()}}error("Bad array")},object=function(){var key,object={};if("{"===ch){if(next("{"),white(),"}"===ch)return next("}"),object;for(;ch;){if(key=string(),white(),next(":"),Object.hasOwnProperty.call(object,key)&&error(\'Duplicate key "\'+key+\'"\'),object[key]=value(),white(),"}"===ch)return next("}"),object;next(","),white()}}error("Bad object")};return value=function(){switch(white(),ch){case"{":return object();case"[":return array();case\'"\':return string();case"-":return number();default:return ch>="0"&&"9">=ch?number():word()}},function(source,reviver){var result;return text=source,at=0,ch=" ",result=value(),white(),ch&&error("Syntax error"),"function"==typeof reviver?function walk(holder,key){var k,v,value=holder[key];if(value&&"object"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(v=walk(value,k),void 0!==v?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}({"":result},""):result}}),ace.define("ace/mode/json_worker",["require","exports","module","ace/lib/oop","ace/worker/mirror","ace/mode/json/json_parse"],function(acequire,exports){"use strict";var oop=acequire("../lib/oop"),Mirror=acequire("../worker/mirror").Mirror,parse=acequire("./json/json_parse"),JsonWorker=exports.JsonWorker=function(sender){Mirror.call(this,sender),this.setTimeout(200)};oop.inherits(JsonWorker,Mirror),function(){this.onUpdate=function(){var value=this.doc.getValue(),errors=[];try{value&&parse(value)}catch(e){var pos=this.doc.indexToPosition(e.at-1);errors.push({row:pos.row,column:pos.column,text:e.message,type:"error"})}this.sender.emit("annotate",errors)}}.call(JsonWorker.prototype)}),ace.define("ace/lib/es5-shim",["require","exports","module"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,"sentinel",{}),"sentinel"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError("Function.prototype.bind called on incompatible "+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,"__defineGetter__"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,"XXX"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0\n}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return"[object Array]"==_toString(obj)});var boxedString=Object("a"),splitString="a"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,result=[],thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");if(!length&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError("reduce of empty array with no initial value")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");if(!length&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError("reduceRight of empty array with no initial value")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&"[object String]"==_toString(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&"[object String]"==_toString(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(object,property){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if("object"!=typeof prototype)throw new TypeError("typeof prototype["+typeof prototype+"] != \'object\'");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom="undefined"==typeof document||doesDefinePropertyWork(document.createElement("div"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR="Property description must be an object: ",ERR_NON_OBJECT_TARGET="Object.defineProperty called on non-object: ",ERR_ACCESSORS_NOT_SUPPORTED="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(object,property,descriptor){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if("object"!=typeof descriptor&&"function"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,"value"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,"get")&&defineGetter(object,property,descriptor.get),owns(descriptor,"set")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return"function"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name="";owns(object,name);)name+="?";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError("Object.keys called on a non-object");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws="\t\\n\v\\f\\r   ᠎             　\\u2028\\u2029\ufeff";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=RegExp("^"+ws+ws+"*"),trimEndRegexp=RegExp(ws+ws+"*$");String.prototype.trim=function(){return(this+"").replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}var toObject=function(o){if(null==o)throw new TypeError("can\'t convert "+o+" to object");return Object(o)}});'
		}
	}
]);
//# sourceMappingURL=chunk-0a9e8e34.13f4912a.js.map
