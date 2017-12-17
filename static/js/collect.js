
	// mui.ready(function() {
		var department = new mui.PopPicker();
		department.setData([
			{
				value: 1,
				text: "文学院"
			}, {
				value: 2,
				text: "外国语学院"
			}, {
				value: 3,
				text: "政治与历史学院"
			}, {
				value: 4,
				text: "教育科学与技术学院"
			}, {
				value: 5,
				text: "数理学院"
			}, {
				value: 6,
				text: "生物科学与技术学院"
			}, {
				value: 7,
				text: "化学化工学院"
			}, {
				value: 8,
				text: "信息技术与工程学院"
			}, {
				value: 9,
				text: "音乐学院"
			}, {
				value: 10,
				text: "体育学院"
			}, {
				value: 11,
				text: "美术学院"
			}, {
				value: 12,
				text: "机械学院"
			}, {
				value: 13,
				text: "经济管理学院"
			}, {
				value: 14,
				text: "旅游与公共管理学院"
			}, {
				value: 15,
				text: "远程教育学院"
			}, {
				value: 16,
				text: "继续教育学院"
			}, 
		]);

		var section = new mui.PopPicker();
		section.setData([
			{
				value: 1,
				text: '编辑中心'
			}, {
				value: 2,
				text: '新闻中心'
			}, {
				value: 3,
				text: '网视中心'
			}, {
				value: 4,
				text: '管理中心'
			}, {
				value: 5,
				text: '办公室'
			}
		]);

		var NativePlace = new mui.PopPicker({
			layer: 3
		});
		// NativePlace.setData([
		// 	{
		// 		value: 1,
		// 		text: "山西省",
		// 		children: [
		// 			{
		// 				value: 1,
		// 				text: "太原市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "清徐",
		// 					}, {
		// 						value: 2,
		// 						text: "阳曲",
		// 					}, {
		// 						value: 3,
		// 						text: "娄烦",
		// 					}, {
		// 						value: 4,
		// 						text: "古交",
		// 					}, {
		// 						value: 5,
		// 						text: "迎泽区",
		// 					}, {
		// 						value: 6,
		// 						text: "杏花岭区",
		// 					}, {
		// 						value: 7,
		// 						text: "万柏林区",
		// 					}, {
		// 						value: 8,
		// 						text: "尖草坪区",
		// 					}, {
		// 						value: 9,
		// 						text: "小店区",
		// 					}
		// 				]
		// 			}, {
		// 				value: 2,
		// 				text: "大同市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "阳高",
		// 					}, {
		// 						value: 2,
		// 						text: "天镇",
		// 					}, {
		// 						value: 3,
		// 						text: "广灵",
		// 					}, {
		// 						value: 4,
		// 						text: "灵丘",
		// 					}, {
		// 						value: 5,
		// 						text: "浑源",
		// 					}, {
		// 						value: 6,
		// 						text: "左云",
		// 					}
		// 				]
		// 			}, {
		// 				value: 3,
		// 				text: "阳泉市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "平定",
		// 					}, {
		// 						value: 2,
		// 						text: "盂县",
		// 					}
		// 				]
		// 			}, {
		// 				value: 4,
		// 				text: "长治市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "襄垣",
		// 					}, {
		// 						value: 2,
		// 						text: "屯留",
		// 					}, {
		// 						value: 3,
		// 						text: "平顺",
		// 					}, {
		// 						value: 4,
		// 						text: "黎城",
		// 					}, {
		// 						value: 5,
		// 						text: "壶关",
		// 					}, {
		// 						value: 6,
		// 						text: "长子",
		// 					}, {
		// 						value: 7,
		// 						text: "武乡",
		// 					}, {
		// 						value: 8,
		// 						text: "沁县",
		// 					}, {
		// 						value: 9,
		// 						text: "沁源",
		// 					}, {
		// 						value: 10,
		// 						text: "潞城",
		// 					}
		// 				]
		// 			}, {
		// 				value: 5,
		// 				text: "晋城市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "沁水",
		// 					}, {
		// 						value: 2,
		// 						text: "阳城",
		// 					}, {
		// 						value: 3,
		// 						text: "陵川",
		// 					}, {
		// 						value: 4,
		// 						text: "泽州",
		// 					}, {
		// 						value: 5,
		// 						text: "高平",
		// 					}			
		// 				]
		// 			}, {
		// 				value: 6,
		// 				text: "朔州市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "山阴",
		// 					}, {
		// 						value: 2,
		// 						text: "应县",
		// 					}, {
		// 						value: 3,
		// 						text: "右玉",
		// 					}, {
		// 						value: 4,
		// 						text: "怀仁",
		// 					}			
		// 				]
		// 			}, {
		// 				value: 7,
		// 				text: "忻州市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "原平",
		// 					}, {
		// 						value: 2,
		// 						text: "定襄",
		// 					}, {
		// 						value: 3,
		// 						text: "五台",
		// 					}, {
		// 						value: 4,
		// 						text: "代县",
		// 					}, {
		// 						value: 5,
		// 						text: "繁峙",
		// 					}, {
		// 						value: 6,
		// 						text: "宁武",
		// 					}, {
		// 						value: 7,
		// 						text: "静乐",
		// 					}, {
		// 						value: 8,
		// 						text: "神池",
		// 					}, {
		// 						value: 9,
		// 						text: "五寨",
		// 					}, {
		// 						value: 10,
		// 						text: "岢岚",
		// 					}, {
		// 						value: 11,
		// 						text: "河曲",
		// 					}, {
		// 						value: 12,
		// 						text: "保德",
		// 					}, {
		// 						value: 13,
		// 						text: "偏关",
		// 					}
		// 				]
		// 			}, {
		// 				value: 8,
		// 				text: "吕梁市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "孝义",
		// 					}, {
		// 						value: 2,
		// 						text: "离石",
		// 					}, {
		// 						value: 3,
		// 						text: "汾阳",
		// 					}, {
		// 						value: 4,
		// 						text: "文水",
		// 					}, {
		// 						value: 5,
		// 						text: "交城",
		// 					}, {
		// 						value: 6,
		// 						text: "兴县",
		// 					}, {
		// 						value: 7,
		// 						text: "临县",
		// 					}, {
		// 						value: 8,
		// 						text: "柳林",
		// 					}, {
		// 						value: 9,
		// 						text: "石楼",
		// 					}, {
		// 						value: 10,
		// 						text: "岚县",
		// 					}, {
		// 						value: 11,
		// 						text: "方山",
		// 					}, {
		// 						value: 12,
		// 						text: "中阳",
		// 					}, {
		// 						value: 13,
		// 						text: "交口",
		// 					}			
		// 				]
		// 			}, {
		// 				value: 9,
		// 				text: "晋中市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "介休",
		// 					}, {
		// 						value: 2,
		// 						text: "榆社",
		// 					}, {
		// 						value: 3,
		// 						text: "左权",
		// 					}, {
		// 						value: 4,
		// 						text: "和顺",
		// 					}, {
		// 						value: 5,
		// 						text: "昔阳",
		// 					}, {
		// 						value: 6,
		// 						text: "寿阳",
		// 					}, {
		// 						value: 7,
		// 						text: "太谷",
		// 					}, {
		// 						value: 8,
		// 						text: "祁县",
		// 					}, {
		// 						value: 9,
		// 						text: "平遥",
		// 					}, {
		// 						value: 10,
		// 						text: "灵石",
		// 					}			
		// 				]
		// 			}, {
		// 				value: 10,
		// 				text: "临汾市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "侯马",
		// 					}, {
		// 						value: 2,
		// 						text: "霍州",
		// 					}, {
		// 						value: 3,
		// 						text: "曲沃",
		// 					}, {
		// 						value: 4,
		// 						text: "翼城",
		// 					}, {
		// 						value: 5,
		// 						text: "襄汾",
		// 					}, {
		// 						value: 6,
		// 						text: "洪洞",
		// 					}, {
		// 						value: 7,
		// 						text: "古县",
		// 					}, {
		// 						value: 8,
		// 						text: "安泽",
		// 					}, {
		// 						value: 9,
		// 						text: "浮山",
		// 					}, {
		// 						value: 10,
		// 						text: "吉县",
		// 					}, {
		// 						value: 11,
		// 						text: "乡宁",
		// 					}, {
		// 						value: 12,
		// 						text: "蒲县",
		// 					}, {
		// 						value: 13,
		// 						text: "大宁",
		// 					}, {
		// 						value: 14,
		// 						text: "永和",
		// 					}, {
		// 						value: 15,
		// 						text: "隰县",
		// 					}, {
		// 						value: 16,
		// 						text: "汾西",
		// 					}
		// 				]
		// 			}, {
		// 				value: 11,
		// 				text: "运城市",
		// 				children: [
		// 					{
		// 						value: 1,
		// 						text: "永济",
		// 					}, {
		// 						value: 2,
		// 						text: "芮城",
		// 					}, {
		// 						value: 3,
		// 						text: "临猗",
		// 					}, {
		// 						value: 4,
		// 						text: "万荣",
		// 					}, {
		// 						value: 5,
		// 						text: "新绛",
		// 					}, {
		// 						value: 6,
		// 						text: "稷山",
		// 					}, {
		// 						value: 7,
		// 						text: "闻喜",
		// 					}, {
		// 						value: 8,
		// 						text: "夏肥",
		// 					}, {
		// 						value: 9,
		// 						text: "绛县",
		// 					}, {
		// 						value: 10,
		// 						text: "平陆",
		// 					}, {
		// 						value: 11,
		// 						text: "垣曲",
		// 					}, {
		// 						value: 12,
		// 						text: "河津",
		// 					}
		// 				]
		// 			}
		// 		],
		// 	}, {
		// 		value: 2,
		// 		text: "北京市",
		// 	}, {
		// 		value: 3,
		// 		text: "天津市",
		// 	}, {
		// 		value: 4,
		// 		text: "河北省",
		// 	}, {
		// 		value: 5,
		// 		text: "内蒙古自治区",
		// 	}, {
		// 		value: 6,
		// 		text: "辽宁省",
		// 	}, {
		// 		value: 7,
		// 		text: "吉林省",
		// 	}, {
		// 		value: 8,
		// 		text: "黑龙江省",
		// 	}, {
		// 		value: 9,
		// 		text: "上海市",
		// 	}, {
		// 		value: 10,
		// 		text: "江苏省",
		// 	}, {
		// 		value: 11,
		// 		text: "浙江省",
		// 	}, {
		// 		value: 12,
		// 		text: "安徽省",
		// 	}, {
		// 		value: 13,
		// 		text: "福建",
		// 	}, {
		// 		value: 14,
		// 		text: "江西省",
		// 	}, {
		// 		value: 15,
		// 		text: "山东省",
		// 	}, {
		// 		value: 16,
		// 		text: "河南省",
		// 	}, {
		// 		value: 17,
		// 		text: "湖北省",
		// 	}, {
		// 		value: 18,
		// 		text: "湖南省",
		// 	}, {
		// 		value: 19,
		// 		text: "广东省",
		// 	}, {
		// 		value: 20,
		// 		text: "广西壮族自治区",
		// 	}, {
		// 		value: 21,
		// 		text: "海南省",
		// 	}, {
		// 		value: 22,
		// 		text: "四川省",
		// 	}, {
		// 		value: 23,
		// 		text: "贵州省",
		// 	}, {
		// 		value: 24,
		// 		text: "云南省",
		// 	}, {
		// 		value: 25,
		// 		text: "重庆市",
		// 	}, {
		// 		value: 26,
		// 		text: "西藏自治区",
		// 	}, {
		// 		value: 27,
		// 		text: "陕西省",
		// 	}, {
		// 		value: 28,
		// 		text: "甘肃省",
		// 	}, {
		// 		value: 29,
		// 		text: "青海省",
		// 	}, {
		// 		value: 30,
		// 		text: "宁夏回族自治区",
		// 	}, {
		// 		value: 31,
		// 		text: "新疆维吾尔自治区",
		// 	}, {
		// 		value: 32,
		// 		text: "香港特别行政区",
		// 	}, {
		// 		value: 33,
		// 		text: "澳门特别行政区",
		// 	}, {
		// 		value: 34,
		// 		text: "台湾省",
		// 	}
		// ]);

		var minority = new mui.PopPicker();
		minority.setData([
			{
				value: 1,
				text: "汉族"
			}, {
				value: 2,
				text: "壮族"
			}, {
				value: 3,
				text: "满族"
			}, {
				value: 4,
				text: "回族"
			}, {
				value: 5,
				text: "苗族"
			}, {
				value: 6,
				text: "维吾尔族"
			}, {
				value: 7,
				text: "土家族"
			}, {
				value: 8,
				text: "彝族"
			}, {
				value: 9,
				text: "蒙古族"
			}, {
				value: 10,
				text: "藏族"
			}, {
				value: 11,
				text: "布依族"
			}, {
				value: 12,
				text: "侗族"
			}, {
				value: 13,
				text: "瑶族"
			}, {
				value: 14,
				text: "朝鲜族"
			}, {
				value: 15,
				text: "白族"
			}, {
				value: 16,
				text: "哈尼族"
			}, {
				value: 17,
				text: "哈萨克族"
			}, {
				value: 18,
				text: "黎族"
			}, {
				value: 19,
				text: "傣族"
			}, {
				value: 20,
				text: "畲族"
			}, {
				value: 21,
				text: "傈僳族"
			}, {
				value: 22,
				text: "仡佬族"
			}, {
				value: 23,
				text: "东乡族"
			}, {
				value: 24,
				text: "高山族"
			}, {
				value: 25,
				text: "拉祜族"
			}, {
				value: 26,
				text: "水族"
			}, {
				value: 27,
				text: "佤族"
			}, {
				value: 28,
				text: "纳西族"
			}, {
				value: 29,
				text: "羌族"
			}, {
				value: 30,
				text: "土族"
			}, {
				value: 31,
				text: "仫佬族"
			}, {
				value: 32,
				text: "锡伯族"
			}, {
				value: 33,
				text: "柯尔克孜族"
			}, {
				value: 34,
				text: "达斡尔族"
			}, {
				value: 35,
				text: "景颇族"
			}, {
				value: 36,
				text: "毛南族"
			}, {
				value: 37,
				text: "撒拉族"
			}, {
				value: 38,
				text: "布朗族"
			}, {
				value: 39,
				text: "塔吉克族"
			}, {
				value: 40,
				text: "阿昌族"
			}, {
				value: 41,
				text: "普米族"
			}, {
				value: 42,
				text: "鄂温克族"
			}, {
				value: 43,
				text: "怒族"
			}, {
				value: 44,
				text: "京族"
			}, {
				value: 45,
				text: "基诺族"
			}, {
				value: 46,
				text: "德昂族"
			}, {
				value: 47,
				text: "保安族"
			}, {
				value: 48,
				text: "俄罗斯族"
			}, {
				value: 49,
				text: "裕固族"
			}, {
				value: 50,
				text: "乌孜别克族"
			}, {
				value: 51,
				text: "门巴族"
			}, {
				value: 52,
				text: "鄂伦春族"
			}, {
				value: 53,
				text: "独龙族"
			}, {
				value: 54,
				text: "塔塔尔族"
			}, {
				value: 55,
				text: "赫哲族"
			}, {
				value: 56,
				text: "珞巴族"
			}, 
		]);

		var dialect = new mui.PopPicker();
		dialect.setData([{
			value: 1,
			text: '当然会'
		}, {
			value: 0,
			text: '我可是正统'
		}]);

		var leave = new mui.PopPicker();
		leave.setData([{
			value: 1,
			text: '定不会缺席团聚时刻'
		}, {
			value: 0,
			text: '万般无奈需请假'
		}]);

		document.getElementById("department").addEventListener('click', function() {
			department.show(function(items) {
				mui("#department")[0].innerText = items[0].text;
				mui("#submit_deparment")[0].value = items[0].value;
			})
		});

		mui(".mui-input-row").on("tap", "#section", function(event) {
			section.show(function(items) {
				mui("#section")[0].innerText = items[0].text;
				mui("#submit_section")[0].value = items[0].value;
			})
		});

		mui(".mui-input-row").on("tap", "#NativePlace", function() {
			NativePlace.show(function(items) {
				place = items[0].text
				mui("#submit_province")[0].value = items[0].value;
				if (items[1].value) {
					mui("#submit_city")[0].value = items[1].value;
					place += items[1].text
				}
				if (items[2].value) {
					mui("#submit_county")[0].value = items[2].value;
					place += items[2].text
				}
				mui("#NativePlace")[0].innerText = place;
			})
		});


		mui(".mui-input-row").on("tap", "#minority", function() {
			minority.show(function(items) {
				mui("#minority")[0].innerText = items[0].text;
				mui("#submit_minority")[0].value = items[0].value;
			})
		});

		mui(".mui-input-row").on("tap", "#dialect", function() {
			dialect.show(function(items) {
				mui("#dialect")[0].value = items[0].text;
			})
		});

		mui(".mui-input-row").on("tap", "#leave", function() {
			leave.show(function(items) {
				mui("#leave")[0].value = items[0].text;
			})
		});

		mui("button#submit")[0].addEventListener("tap", function() {
			mui("form#form")[0].submit();
		});
	// });
