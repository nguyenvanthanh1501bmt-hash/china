/**
 * quizData.js
 * Dữ liệu trắc nghiệm cho từng phim (postId).
 * Mỗi phim có thể có 2 dạng quiz:
 *   - type1: Chọn từ đúng điền vào chỗ trống (单项选择填空)
 *   - type2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)
 *
 * Cấu trúc mỗi câu hỏi:
 *   question  – đề bài
 *   options   – mảng 4 đáp án [A, B, C, D]
 *   answer    – index đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D)
 *   explain   – giải thích ngắn (tuỳ chọn)
 */

export const quizData = {

  /* ============================================================
     安家 – Chuyên gia nhà đất  (postId: 11)
     ============================================================ */
  11: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "在当前房地产市场________不断变化的情况下，购房者需要更加理性判断。",
          options: ["行情", "价格", "楼层", "卧室"],
          answer: 0,
          explain: "行情 = tình hình thị trường.",
        },
        {
          question: "这套房子虽然________不错，但因为没有电梯，所以年轻人更倾向于放弃。",
          options: ["厨房", "卫生间", "楼层", "朝南"],
          answer: 2,
          explain: "楼层 = tầng nhà; tầng tốt nhưng không có thang máy.",
        },
        {
          question: "很多购房者在选择房子时，不仅看________，还会考虑周边的交通是否便利。",
          options: ["交通", "行情", "房型", "卫生间"],
          answer: 2,
          explain: "房型 = kiểu nhà, cấu trúc phòng.",
        },
        {
          question: "这套房属于________设计，每个房间都能充分接受阳光，居住体验很好。",
          options: ["全朝阳", "南北通", "朝南", "学区"],
          answer: 0,
          explain: "全朝阳 = tất cả phòng đều hướng nắng.",
        },
        {
          question: "虽然这套房子面积不大，但有独立的________，收纳空间很充足。",
          options: ["储物间", "厨房", "卫生间", "卧室"],
          answer: 0,
          explain: "储物间 = phòng chứa đồ.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "由于该地区交通便利，房价明显高于周边区域。\n\"交通\"在句中的意思是：",
          options: ["房屋结构", "出行条件", "房子方向", "市场情况"],
          answer: 1,
          explain: "交通 = điều kiện đi lại.",
        },
        {
          question: "这个小区的学区很好，因此很多家长愿意高价购买。\n\"学区\"在句中的意思是：",
          options: ["学校建筑", "学生宿舍", "与学校相关的区域", "教室位置"],
          answer: 2,
          explain: "学区 = khu vực liên quan đến trường học.",
        },
        {
          question: "这套房子的房型比较合理，适合三口之家居住。\n\"房型\"在句中的意思是：",
          options: ["房子的结构和布局", "房子的价格", "房子的楼层", "房子的装修材料"],
          answer: 0,
          explain: "房型 = cấu trúc và bố cục nhà.",
        },
        {
          question: "目前市场行情不稳定，建议暂时观望再做决定。\n\"行情\"在句中的意思是：",
          options: ["房屋内部情况", "市场价格和趋势", "交通状况", "建筑质量"],
          answer: 1,
          explain: "行情 = giá cả và xu hướng thị trường.",
        },
        {
          question: "这套房子有一个独立卫生间，使用起来非常方便。\n\"卫生间\"在句中的意思是：",
          options: ["做饭的地方", "储物空间", "洗澡和上厕所的地方", "卧室的一部分"],
          answer: 2,
          explain: "卫生间 = nhà vệ sinh.",
        },
      ],
    },
  },

  /* ============================================================
     暮色心约 – Mộ sắc tâm ước  (postId: 13)
     ============================================================ */
  13: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "这个菜虽然放了很多________，但吃起来特别香，完全不会太辣。",
          options: ["花菜", "小米椒", "豆苗", "过秤"],
          answer: 1,
          explain: "小米椒 = ớt nhỏ cay.",
        },
        {
          question: "她做事总是________，每次都提前十分钟到，从不迟到。",
          options: ["掐着点", "合算", "数落", "掰"],
          answer: 0,
          explain: "掐着点 = canh đúng giờ.",
        },
        {
          question: "买这套套餐比单点便宜很多，整体来看非常________。",
          options: ["小算盘", "合算", "过秤", "数落"],
          answer: 1,
          explain: "合算 = đáng tiền, có lợi.",
        },
        {
          question: "他心里一直打着自己的________，表面上却什么都不说。",
          options: ["小算盘", "豆苗", "花菜", "小米椒"],
          answer: 0,
          explain: "小算盘 = mưu tính nhỏ.",
        },
        {
          question: "老板在市场上买菜时，每样东西都要________，确保价格没有问题。",
          options: ["掰", "过秤", "数落", "掐着点"],
          answer: 1,
          explain: "过秤 = cân hàng.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "他总是掐着点到公司，从不早也不晚。\n\"掐着点\"在句中的意思是：",
          options: ["随便到达", "提前很久", "刚好按时间到达", "忘记时间"],
          answer: 2,
          explain: "掐着点 = đến đúng lúc.",
        },
        {
          question: "她一边做饭一边数落孩子不帮忙。\n\"数落\"在句中的意思是：",
          options: ["表扬", "责备、抱怨", "安慰", "忽略"],
          answer: 1,
          explain: "数落 = cằn nhằn, trách móc.",
        },
        {
          question: "这个方案很合算，节省了不少成本。\n\"合算\"在句中的意思是：",
          options: ["不划算", "有价值、划算", "很复杂", "很贵"],
          answer: 1,
          explain: "合算 = có giá trị, đáng tiền.",
        },
        {
          question: "他把豆苗洗干净后准备下锅。\n\"豆苗\"在句中的意思是：",
          options: ["一种蔬菜", "一种水果", "一种调料", "一种肉类"],
          answer: 0,
          explain: "豆苗 = rau mầm đậu.",
        },
        {
          question: "买菜时老板都会先过秤，再算价格。\n\"过秤\"在句中的意思是：",
          options: ["切菜", "称重量", "洗菜", "包装"],
          answer: 1,
          explain: "过秤 = cân (đo trọng lượng).",
        },
      ],
    },
  },

  /* ============================================================
     仁心俱乐部 – Câu lạc bộ Nhân Tâm  (postId: 14)
     ============================================================ */
  14: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "到医院看病时，首先要用________在窗口进行登记。",
          options: ["片子", "就诊卡", "手术", "患者"],
          answer: 1,
          explain: "就诊卡 = thẻ khám bệnh.",
        },
        {
          question: "医生看完________后，判断患者可能需要进一步检查。",
          options: ["医保卡", "片子", "挂号", "复发"],
          answer: 1,
          explain: "片子 = phim chụp, ảnh xét nghiệm.",
        },
        {
          question: "如果没有________，患者无法享受医保报销服务。",
          options: ["片子", "就诊卡", "医保卡", "患者"],
          answer: 2,
          explain: "医保卡 = thẻ bảo hiểm y tế.",
        },
        {
          question: "由于病情严重，医生建议尽快安排________，以免延误治疗。",
          options: ["挂号", "手术", "复发", "片子"],
          answer: 1,
          explain: "手术 = phẫu thuật.",
        },
        {
          question: "很多________在出院后需要长期复查，以防疾病________。",
          options: ["患者 / 复发", "手术 / 挂号", "片子 / 就诊卡", "医保卡 / 手术"],
          answer: 0,
          explain: "患者 = bệnh nhân; 复发 = tái phát.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "患者需要先挂号，然后才能去看医生。\n\"挂号\"在句中的意思是：",
          options: ["预约看病并领取号码", "领取药品", "做手术", "查看片子"],
          answer: 0,
          explain: "挂号 = đăng ký khám bệnh, lấy số.",
        },
        {
          question: "医生仔细看了片子后，决定是否需要手术。\n\"片子\"在句中的意思是：",
          options: ["药品", "检查的影像资料", "病历本", "医疗器械"],
          answer: 1,
          explain: "片子 = phim chụp xét nghiệm.",
        },
        {
          question: "这个肿瘤如果不及时治疗，可能会复发。\n\"复发\"在句中的意思是：",
          options: ["痊愈", "再次出现", "扩散到全身", "消失"],
          answer: 1,
          explain: "复发 = tái phát.",
        },
        {
          question: "胶质瘤是一种比较复杂的脑部疾病。\n\"胶质瘤\"在句中的意思是：",
          options: ["一种脑部肿瘤", "一种感冒", "一种外伤", "一种病毒"],
          answer: 0,
          explain: "胶质瘤 = u thần kinh đệm.",
        },
        {
          question: "医保卡可以帮助患者减轻医疗费用负担。\n\"医保卡\"在句中的意思是：",
          options: ["医院工作证", "医疗保险卡", "病人身份证", "检查卡片"],
          answer: 1,
          explain: "医保卡 = thẻ bảo hiểm y tế.",
        },
      ],
    },
  },

  /* ============================================================
     谢谢你医生 – Cảm ơn bác sĩ  (postId: 5)
     ============================================================ */
  5: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "面对如此复杂的病例，医生在制定手术方案时必须________，确保万无一失。",
          options: ["罔顾", "投降", "慎之再慎", "罕见"],
          answer: 2,
          explain: "慎之再慎 = cực kỳ thận trọng.",
        },
        {
          question: "这种疾病在临床上十分________，很多医生一生都未必遇到一次。",
          options: ["慎之再慎", "罕见", "投降", "手术台"],
          answer: 1,
          explain: "罕见 = hiếm gặp.",
        },
        {
          question: "由于病情严重，患者被推进________，准备进行紧急手术。",
          options: ["手术台", "体外循环", "恶性肿瘤", "投降"],
          answer: 0,
          explain: "手术台 = bàn mổ.",
        },
        {
          question: "在进行心脏手术时，医生通常需要借助________来维持患者的生命体征。",
          options: ["手术台", "罕见", "体外循环", "投降"],
          answer: 2,
          explain: "体外循环 = tuần hoàn ngoài cơ thể.",
        },
        {
          question: "面对困难，我们不能轻易________，而应该坚持到底。",
          options: ["罔顾", "慎之再慎", "投降", "罕见"],
          answer: 2,
          explain: "投降 = đầu hàng.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "医生在手术前反复讨论方案，力求做到慎之再慎。\n\"慎之再慎\"在句中的意思是：",
          options: ["非常紧张", "极其谨慎", "很有信心", "随便决定"],
          answer: 1,
          explain: "慎之再慎 = vô cùng cẩn trọng.",
        },
        {
          question: "他为了个人利益，罔顾患者的生命安全。\n\"罔顾\"在句中的意思是：",
          options: ["非常关心", "忽视、不顾", "认真考虑", "全力保护"],
          answer: 1,
          explain: "罔顾 = phớt lờ, bỏ mặc.",
        },
        {
          question: "这种恶性肿瘤发展速度很快，需要尽早治疗。\n\"恶性肿瘤\"在句中的意思是：",
          options: ["良性肿瘤", "一种普通疾病", "危险的肿瘤", "轻微感染"],
          answer: 2,
          explain: "恶性肿瘤 = khối u ác tính.",
        },
        {
          question: "在复杂手术中，体外循环技术起着关键作用。\n\"体外循环\"在句中的意思是：",
          options: ["血液在体内流动", "血液循环停止", "借助机器在体外维持循环", "一种药物治疗"],
          answer: 2,
          explain: "体外循环 = dùng máy duy trì tuần hoàn bên ngoài cơ thể.",
        },
        {
          question: "在巨大的压力面前，他最终选择了投降。\n\"投降\"在句中的意思是：",
          options: ["继续努力", "坚持到底", "放弃抵抗", "制定计划"],
          answer: 2,
          explain: "投降 = từ bỏ, đầu hàng.",
        },
      ],
    },
  },

  /* ============================================================
     爱你 – Yêu em  (postId: 28)  — phim đông y/y thuật
     ============================================================ */
  28: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "医生根据患者的症状，认真为他________，并叮嘱按时吃药。",
          options: ["药效", "开药方", "下毒", "吞"],
          answer: 1,
          explain: "开药方 = kê đơn thuốc.",
        },
        {
          question: "这种中药主要用于________祛湿，对身体很有好处。",
          options: ["质疑", "清热", "医术", "吞"],
          answer: 1,
          explain: "清热 = thanh nhiệt.",
        },
        {
          question: "有人开始________这种治疗方法的效果，认为还需要进一步研究。",
          options: ["清热", "祛湿", "质疑", "吞"],
          answer: 2,
          explain: "质疑 = nghi ngờ, chất vấn.",
        },
        {
          question: "他从小跟着师傅学习中医，经过多年________的努力，医术大有提高。",
          options: ["实打实", "刻苦", "药效", "香囊"],
          answer: 1,
          explain: "刻苦 = chăm chỉ, chịu khó.",
        },
        {
          question: "这种药虽然味道很苦，但________非常明显，坚持服用就能见效。",
          options: ["药方", "医术", "药效", "香囊"],
          answer: 2,
          explain: "药效 = hiệu quả của thuốc.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "医生的医术高明，很多疑难杂症都能治好。\n\"医术\"在句中的意思是：",
          options: ["医生的技术水平", "药品种类", "医院设备", "治疗时间"],
          answer: 0,
          explain: "医术 = trình độ y thuật.",
        },
        {
          question: "他不相信这个药方的效果，对医生提出了质疑。\n\"质疑\"在句中的意思是：",
          options: ["完全相信", "表扬", "怀疑并提出问题", "接受"],
          answer: 2,
          explain: "质疑 = nghi ngờ và đặt câu hỏi.",
        },
        {
          question: "这个香囊里装着一些中药，可以帮助驱虫。\n\"香囊\"在句中的意思是：",
          options: ["一种药片", "装有香料或中药的小袋子", "一种饮料", "一种药方"],
          answer: 1,
          explain: "香囊 = túi thơm chứa thảo dược.",
        },
        {
          question: "这种药需要整颗吞下，不能咀嚼。\n\"吞\"在句中的意思是：",
          options: ["咬碎", "喝下", "直接咽下", "吐出"],
          answer: 2,
          explain: "吞 = nuốt trọn.",
        },
        {
          question: "黄连是一种常用的中药，味道非常苦。\n\"黄连\"在句中的意思是：",
          options: ["一种水果", "一种中药材", "一种调料", "一种饮品"],
          answer: 1,
          explain: "黄连 = hoàng liên (vị thuốc đông y).",
        },
      ],
    },
  },

  /* ============================================================
     玫瑰的故事 – Câu chuyện hoa hồng  (postId: 20)
     ============================================================ */
  20: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "她曾经做过________，负责组织公益画展。",
          options: ["心理疏导", "策展人", "领域", "艺术疗愈"],
          answer: 1,
          explain: "策展人 = người phụ trách tổ chức triển lãm.",
        },
        {
          question: "她对心理学产生兴趣，是因为接触到了自闭症儿童的________。",
          options: ["领域", "跳跃性", "心理问题", "方法"],
          answer: 2,
          explain: "心理问题 = vấn đề tâm lý.",
        },
        {
          question: "她的学习经历具有很强的________，从美术史转到心理学。",
          options: ["领域", "跳跃性", "过程", "结果"],
          answer: 1,
          explain: "跳跃性 = tính nhảy vọt, thay đổi lớn.",
        },
        {
          question: "她希望通过绘画帮助学生进行________。",
          options: ["心理疏导", "策展人", "跳跃性", "验证"],
          answer: 0,
          explain: "心理疏导 = tư vấn, khai thông tâm lý.",
        },
        {
          question: "她现在想把两个不同________的知识结合起来。",
          options: ["方法", "结果", "领域", "过程"],
          answer: 2,
          explain: "领域 = lĩnh vực.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "她的学习经历有很强的跳跃性。\n\"跳跃性\"在句中的意思是:",
          options: ["很稳定", "连续不断", "变化很大，不连贯", "很简单"],
          answer: 2,
          explain: "跳跃性 = thay đổi lớn, không liên tục.",
        },
        {
          question: "她曾经做过策展人，负责组织展览。\n\"策展人\"在句中的意思是:",
          options: ["画家", "参观者", "组织和安排展览的人", "老师"],
          answer: 2,
          explain: "策展人 = người tổ chức triển lãm.",
        },
        {
          question: "她希望通过绘画进行心理疏导。\n\"心理疏导\"在句中的意思是:",
          options: ["教学生画画", "帮助别人调整心理状态", "进行身体治疗", "提高成绩"],
          answer: 1,
          explain: "心理疏导 = giúp điều chỉnh tâm lý.",
        },
        {
          question: "艺术疗愈在西方已经比较常见。\n\"艺术疗愈\"在句中的意思是:",
          options: ["用艺术进行心理治疗", "学习艺术历史", "画画比赛", "艺术表演"],
          answer: 0,
          explain: "艺术疗愈 = liệu pháp nghệ thuật.",
        },
        {
          question: "她想在新的领域发展自己的职业。\n\"领域\"在句中的意思是:",
          options: ["地方", "行业或专业范围", "国家", "学校"],
          answer: 1,
          explain: "领域 = ngành hoặc phạm vi chuyên môn.",
        },
      ],
    },
  },

  /* ============================================================
     杉杉来了 – Sam Sam đến rồi  (postId: 32)
     ============================================================ */
  32: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        {
          question: "这家公司虽然________不大，但是发展很快。",
          options: ["金额", "规模", "报表", "补偿"],
          answer: 1,
          explain: "规模 = quy mô.",
        },
        {
          question: "这两年公司的________非常好，利润不断增加。",
          options: ["创意", "评估", "业绩", "危急"],
          answer: 2,
          explain: "业绩 = thành tích kinh doanh.",
        },
        {
          question: "这个项目很有________，吸引了很多投资者。",
          options: ["创意", "金额", "报表", "怪罪"],
          answer: 0,
          explain: "创意 = ý tưởng sáng tạo.",
        },
        {
          question: "并购的________写错了，导致问题很严重。",
          options: ["规模", "金额", "业绩", "补偿"],
          answer: 1,
          explain: "金额 = số tiền.",
        },
        {
          question: "他们正在准备________合同，一切都已经安排好了。",
          options: ["打断", "签约", "怪罪", "评估"],
          answer: 1,
          explain: "签约 = ký hợp đồng.",
        },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        {
          question: "公司正在考虑收购另一家企业。\n\"收购\"在句中的意思是:",
          options: ["出售", "购买并控制", "合作", "投资"],
          answer: 1,
          explain: "收购 = mua lại và kiểm soát.",
        },
        {
          question: "这个项目的并购金额需要重新评估。\n\"评估\"在句中的意思是:",
          options: ["改变", "计算和判断价值", "记录", "解释"],
          answer: 1,
          explain: "评估 = tính toán và đánh giá giá trị.",
        },
        {
          question: "他因为错误被领导怪罪了。\n\"怪罪\"在句中的意思是:",
          options: ["表扬", "帮助", "责备", "鼓励"],
          answer: 2,
          explain: "怪罪 = trách móc.",
        },
        {
          question: "现在的当务之急是解决合同问题。\n\"当务之急\"在句中的意思是:",
          options: ["未来计划", "不重要的事情", "当前最重要的事情", "长期目标"],
          answer: 2,
          explain: "当务之急 = việc cấp bách nhất hiện tại.",
        },
        {
          question: "在这么危急的情况下，我们必须马上行动。\n\"危急\"在句中的意思是:",
          options: ["很安全", "很紧急危险", "很轻松", "很稳定"],
          answer: 1,
          explain: "危急 = rất nguy cấp.",
        },
      ],
    },
  },

  /* ============================================================
     后浪 – Hậu Lãng  (postId: 36)
     ============================================================ */
  36: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "医生必须取得资格证后才能正式________。", options: ["探索", "执业", "验证", "告慰"], answer: 1, explain: "执业 = hành nghề." },
        { question: "这个问题要从________上解决，不能只看表面。", options: ["苗头", "末端", "根本", "千家万户"], answer: 2, explain: "根本 = gốc rễ, căn bản." },
        { question: "他总是________别人的建议，所以进步不大。", options: ["忽略", "探索", "验证", "告慰"], answer: 0, explain: "忽略 = bỏ qua." },
        { question: "这种新产品已经进入________，深受欢迎。", options: ["根本", "苗头", "千家万户", "末端"], answer: 2, explain: "千家万户 = mọi nhà." },
        { question: "科学家不断________新的研究领域。", options: ["告慰", "忽略", "探索", "执业"], answer: 2, explain: "探索 = khám phá." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "问题刚出现苗头，我们就采取了措施。\n\"苗头\"在句中的意思是：", options: ["结果", "开始的迹象", "方法", "过程"], answer: 1, explain: "苗头 = dấu hiệu ban đầu." },
        { question: "他总是忽略细节问题，所以经常出错。\n\"忽略\"在句中的意思是：", options: ["仔细分析", "故意隐藏", "没有注意到", "认真对待"], answer: 2, explain: "忽略 = không chú ý." },
        { question: "这种新技术已经进入千家万户。\n\"千家万户\"在句中的意思是：", options: ["很多公司", "很多国家", "每个家庭", "一些地方"], answer: 2, explain: "千家万户 = mọi gia đình." },
        { question: "这个理论还需要进一步验证。\n\"验证\"在句中的意思是：", options: ["创造", "证明是否正确", "改变", "传播"], answer: 1, explain: "验证 = chứng minh đúng sai." },
        { question: "当前形势让人感觉危若冰谷。\n\"危若冰谷\"在句中的意思是：", options: ["非常安全", "很轻松", "非常危险", "很稳定"], answer: 2, explain: "危若冰谷 = rất nguy hiểm." },
      ],
    },
  },

  /* ============================================================
     去有风的地方 – Đi đến nơi có gió  (postId: 34)
     ============================================================ */
  34: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "这个________专门制作传统刺绣作品。", options: ["博览会", "绣坊", "摊位", "展览"], answer: 1, explain: "绣坊 = xưởng thêu." },
        { question: "这种传统技艺如果没有人学习，可能会慢慢________。", options: ["推广", "传承", "失传", "宣传"], answer: 2, explain: "失传 = thất truyền." },
        { question: "他是一个经验丰富的________，擅长制作各种工艺品。", options: ["徒弟", "手艺人", "年轻一代", "民间"], answer: 1, explain: "手艺人 = thợ thủ công." },
        { question: "政府正在努力________传统文化，让更多人了解非遗。", options: ["淘汰", "忽略", "推广", "忙活"], answer: 2, explain: "推广 = quảng bá." },
        { question: "在这次国际________上，各国展示了自己的特色产品。", options: ["绣坊", "博览会", "线头", "徒弟"], answer: 1, explain: "博览会 = hội chợ triển lãm." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "他最近一直在忙活准备展览的事情。\n\"忙活\"的意思是：", options: ["休息", "很忙、一直在做事情", "旅游", "学习"], answer: 1, explain: "忙活 = bận rộn." },
        { question: "这些传统技艺大多来源于民间。\n\"民间\"的意思是：", options: ["政府机构", "学校", "普通百姓中", "公司"], answer: 2, explain: "民间 = trong dân gian." },
        { question: "这种工艺已经有几百年的传承历史。\n\"传承\"的意思是：", options: ["创造新的东西", "继承并继续发展", "停止发展", "改变形式"], answer: 1, explain: "传承 = kế thừa và phát triển." },
        { question: "这个博览会规模很大，是一次大型活动。\n\"大型\"的意思是：", options: ["很小", "很复杂", "规模很大", "很便宜"], answer: 2, explain: "大型 = quy mô lớn." },
        { question: "如果没有年轻一代学习，这些技艺可能会被淘汰。\n\"淘汰\"的意思是：", options: ["被保留", "被发展", "被取消或消失", "被学习"], answer: 2, explain: "淘汰 = bị đào thải." },
      ],
    },
  },

  /* ============================================================
     陪你一起好好吃饭 – Cùng anh ăn một bữa ngon  (postId: 1)
     ============================================================ */
  1: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "做肉馅时，要先把肉________。", options: ["撒上", "剁碎", "锁住", "浇头"], answer: 1, explain: "剁碎 = băm nhuyễn." },
        { question: "加一点淀粉可以________肉的水分，让口感更好。", options: ["锁住", "撒上", "浇头", "出炉"], answer: 0, explain: "锁住 = giữ lại, khóa lại." },
        { question: "做菜时，最后可以在上面________一点葱花。", options: ["剁碎", "锁住", "撒上", "浓稠"], answer: 2, explain: "撒上 = rắc lên." },
        { question: "这种酱汁看起来非常________，适合拌面。", options: ["新鲜出炉", "浓稠", "前槽肉", "生抽"], answer: 1, explain: "浓稠 = sánh đặc." },
        { question: "这碗面条的________特别香，是用牛肉做的。", options: ["料酒", "浇头", "淀粉", "花椒油"], answer: 1, explain: "浇头 = đồ ăn kèm chan lên mì." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "这家店的包子都是新鲜出炉的。\n\"新鲜出炉\"的意思是：", options: ["放了很久", "刚做好，还很新鲜", "很冷", "不好吃"], answer: 1, explain: "新鲜出炉 = vừa mới làm xong." },
        { question: "做菜时可以加一点料酒去腥。\n\"料酒\"的意思是：", options: ["一种甜点", "一种调料酒", "一种蔬菜", "一种水果"], answer: 1, explain: "料酒 = rượu nấu ăn." },
        { question: "他买了一些前槽肉准备做饺子。\n\"前槽肉\"的意思是：", options: ["一种鱼", "一种蔬菜", "一种猪肉部位", "一种调料"], answer: 2, explain: "前槽肉 = thịt nạc vai." },
        { question: "这种酱是用豆瓣酱做的，味道有点辣。\n\"豆瓣酱\"的意思是：", options: ["一种甜饮料", "一种辣味调料", "一种水果", "一种汤"], answer: 1, explain: "豆瓣酱 = tương đậu cay." },
        { question: "他在面里加了一点蚝油，味道更鲜了。\n\"蚝油\"的意思是：", options: ["一种油类调料", "一种水", "一种米饭", "一种水果"], answer: 0, explain: "蚝油 = dầu hào." },
      ],
    },
  },

  /* ============================================================
     欢乐颂2 – Hoan lạc tụng phần 2  (postId: 19)
     ============================================================ */
  19: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "他每天都自己________，很少吃外面的东西。", options: ["叫外卖", "烹饪", "碰到", "耗在"], answer: 1, explain: "烹饪 = nấu nướng." },
        { question: "妈妈每天花很多时间________厨房里。", options: ["碰到", "耗在", "叫外卖", "保姆"], answer: 1, explain: "耗在 = tiêu tốn thời gian vào." },
        { question: "周末我喜欢在家________一些简单的家常菜。", options: ["炒菜", "煮粥", "煲汤", "宣传"], answer: 0, explain: "炒菜 = xào món ăn." },
        { question: "他工作很忙，经常选择________，不自己做饭。", options: ["炒菜", "煮粥", "叫外卖", "碰到"], answer: 2, explain: "叫外卖 = gọi đồ ăn ngoài." },
        { question: "这个餐厅提供多种________，比如川菜和粤菜。", options: ["家常菜", "菜系", "保姆", "实惠"], answer: 1, explain: "菜系 = hệ ẩm thực." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "他该不会忘记今天的约会吧？\n\"该不会\"的意思是：", options: ["一定会", "已经发生", "表示猜测，有点担心", "表示命令"], answer: 2, explain: "该不会 = chẳng lẽ (phỏng đoán)." },
        { question: "她结婚以后开始洗手作羹汤。\n\"洗手作羹汤\"的意思是：", options: ["去洗手", "做家务", "正式开始做饭（较文雅说法）", "学习做饭"], answer: 2, explain: "洗手作羹汤 = vào bếp nấu ăn (cách nói trang trọng)." },
        { question: "他在做饭的时候碰到了一些问题。\n\"碰到\"的意思是：", options: ["创造", "遇到", "改变", "选择"], answer: 1, explain: "碰到 = gặp phải." },
        { question: "自己做饭既健康又实惠。\n\"实惠\"的意思是：", options: ["很贵", "很复杂", "经济、划算", "很慢"], answer: 2, explain: "实惠 = tiện lợi, kinh tế." },
        { question: "他们家请了一个保姆帮忙做饭。\n\"保姆\"的意思是：", options: ["老师", "医生", "帮忙做家务的人", "厨师"], answer: 2, explain: "保姆 = người giúp việc." },
      ],
    },
  },

  /* ============================================================
     中华战舞 – Vũ điệu chiến đấu Trung Hoa  (postId: 43)
     ============================================================ */
  43: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "如果一个团队没有领导，就会变得________。", options: ["拼搏", "闪耀", "群龙无首", "上场"], answer: 2, explain: "群龙无首 = rắn mất đầu." },
        { question: "他在比赛中不小心________了，需要休息一段时间。", options: ["胡闹", "受伤", "拼搏", "上场"], answer: 1, explain: "受伤 = bị thương." },
        { question: "孩子们不要在教室里________，要认真学习。", options: ["胡闹", "拼搏", "闪耀", "受伤"], answer: 0, explain: "胡闹 = làm loạn, làm bậy." },
        { question: "他觉得自己还________参加这个比赛。", options: ["拼搏", "不配", "上场", "闪耀"], answer: 1, explain: "不配 = không xứng." },
        { question: "只要努力拼搏，总有一天你会________。", options: ["上场", "受伤", "闪耀", "胡闹"], answer: 2, explain: "闪耀 = tỏa sáng." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "教练安排他最后一个上场。\n\"上场\"的意思是：", options: ["离开", "开始比赛或表演", "休息", "学习"], answer: 1, explain: "上场 = lên sân khấu / ra sân." },
        { question: "他看人的眼光很准。\n\"眼光\"的意思是：", options: ["眼睛的颜色", "视力", "判断能力、看法", "表情"], answer: 2, explain: "眼光 = cách nhìn nhận." },
        { question: "他一直在拼搏，希望实现自己的梦想。\n\"拼搏\"的意思是：", options: ["放弃", "休息", "努力奋斗", "玩耍"], answer: 2, explain: "拼搏 = phấn đấu hết mình." },
        { question: "这个团队现在群龙无首，大家都不知道该怎么办。\n\"群龙无首\"的意思是：", options: ["很团结", "有很多领导", "没有领导，混乱", "很成功"], answer: 2, explain: "群龙无首 = không có người lãnh đạo." },
        { question: "他在舞台上表现得非常闪耀。\n\"闪耀\"的意思是：", options: ["很普通", "很暗", "很突出、很出色", "很安静"], answer: 2, explain: "闪耀 = nổi bật, xuất sắc." },
      ],
    },
  },

  /* ============================================================
     真相 – Chân tướng  (postId: 23)
     ============================================================ */
  23: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "这里是________，主要进行有毒物质的检测和分析。", options: ["心理实验室", "毒物实验室", "声像实验室", "电子数据实验室"], answer: 1, explain: "毒物实验室 = phòng thí nghiệm độc chất." },
        { question: "我们通过先进的技术来________指纹，提高破案效率。", options: ["观察", "分析", "显现", "记录"], answer: 2, explain: "显现 = làm hiện dấu vết." },
        { question: "这些设备都是世界上最顶尖的指纹________仪器。", options: ["显现", "检查", "处理", "分析"], answer: 0, explain: "显现 = hiển thị." },
        { question: "他因为表现优秀，被领导________进入中心工作。", options: ["推荐", "破格录取", "安排", "介绍"], answer: 1, explain: "破格录取 = đặc cách tuyển dụng." },
        { question: "杨波在测谎领域非常有名，是年轻一代的________。", options: ["学生", "权威", "助手", "负责人"], answer: 1, explain: "权威 = chuyên gia có uy tín." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "我们还用生物技术显现指纹。\n\"显现\"在句中的意思是：", options: ["隐藏", "显示出来", "改变", "破坏"], answer: 1, explain: "显现 = hiển thị ra." },
        { question: "他从事声像技术鉴定工作多年。\n\"声像\"在句中的意思是：", options: ["声音和图像", "声音和味道", "图片和文字", "数据和文件"], answer: 0, explain: "声像 = âm thanh và hình ảnh." },
        { question: "整个鉴定中心年龄最小的实验室负责人。\n\"负责人\"在句中的意思是：", options: ["普通员工", "管理者", "学生", "助手"], answer: 1, explain: "负责人 = người quản lý." },
        { question: "我来之前已经做过详细的功课了。\n\"功课\"在句中的意思是：", options: ["学校作业", "实验内容", "准备工作", "研究结果"], answer: 2, explain: "功课 = công việc chuẩn bị." },
        { question: "别打扰人家工作。\n\"打扰\"在句中的意思是：", options: ["帮助", "支持", "干扰", "观察"], answer: 2, explain: "打扰 = quấy rầy, làm phiền." },
      ],
    },
  },

  /* ============================================================
     流浪地球 – Lưu lạc địa cầu  (postId: 26)  — phần 2'49
     ============================================================ */
  26: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "全球发动机已经成功________，标志着计划进入新阶段。", options: ["掠过", "并网", "覆写", "跨越"], answer: 1, explain: "并网 = kết nối vào hệ thống." },
        { question: "系统出现错误，需要立即进行数据________操作。", options: ["并网", "掠过", "覆写", "存亡"], answer: 2, explain: "覆写 = ghi đè." },
        { question: "专家________四分钟后，月球残骸将接近地球。", options: ["掠过", "跨越", "预计", "并网"], answer: 2, explain: "预计 = dự kiến." },
        { question: "巨大的陨石从地球上空________，没有造成损失。", options: ["覆写", "并网", "掠过", "存亡"], answer: 2, explain: "掠过 = lướt qua." },
        { question: "人类的勇气可以________时间和空间的限制。", options: ["掠过", "覆写", "跨越", "预计"], answer: 2, explain: "跨越 = vượt qua." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "全球发动机并网成功。\n\"并网\"在句中的意思是：", options: ["分开运行", "连接到系统中", "停止工作", "重新设计"], answer: 1, explain: "并网 = kết nối vào hệ thống." },
        { question: "东京覆写开始。\n\"覆写\"在句中的意思是：", options: ["删除数据", "复制数据", "写入新内容覆盖原内容", "读取数据"], answer: 2, explain: "覆写 = ghi đè dữ liệu mới." },
        { question: "月球残骸将掠过地球。\n\"残骸\"在句中的意思是：", options: ["完整结构", "碎片", "能源", "数据"], answer: 1, explain: "残骸 = mảnh vỡ." },
        { question: "我相信人类可以跨越时间。\n\"跨越\"在句中的意思是：", options: ["停止", "穿越、超过", "改变", "观察"], answer: 1, explain: "跨越 = vượt qua." },
        { question: "不论虚实，不计存亡。\n\"存亡\"在句中的意思是：", options: ["成功与失败", "真假", "生与死", "过去与未来"], answer: 2, explain: "存亡 = sống còn." },
      ],
    },
  },

  /* ============================================================
     春色寄情人 – Sắc xuân gửi người tình  (postId: 9)
     ============================================================ */
  9: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "我早就说过了，我不会回________上的。", options: ["上海", "乡间", "罗马", "城市"], answer: 1, explain: "乡间 = vùng quê." },
        { question: "我们这小地方________你这样的人。", options: ["看不上", "容不下", "比不上", "赶不上"], answer: 1, explain: "容不下 = không chứa nổi." },
        { question: "他一直很________，做什么事情都很努力。", options: ["不省心", "讲究", "争气", "支援"], answer: 2, explain: "争气 = có chí tiến thủ." },
        { question: "这个孩子太让人________了，总是出问题。", options: ["争气", "不省心", "时尚", "讲究"], answer: 1, explain: "不省心 = không để người khác yên tâm." },
        { question: "现在没什么________了，我也不想再努力了。", options: ["精神", "力气", "奔劲", "时间"], answer: 2, explain: "奔劲 = động lực cố gắng." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "上海就是你的罗马。\n\"罗马\"在句中的意思是：", options: ["一个国家", "理想目标", "家乡", "工作单位"], answer: 1, explain: "罗马 = mục tiêu lý tưởng." },
        { question: "我们这小地方容不下你。\n\"容不下\"在句中的意思是：", options: ["看不起", "接受不了", "装不进去、无法容纳", "不喜欢"], answer: 2, explain: "容不下 = không chứa nổi." },
        { question: "儿子不争气。\n\"争气\"在句中的意思是：", options: ["生气", "有出息", "努力学习", "听话"], answer: 1, explain: "争气 = có chí khí, làm nên chuyện." },
        { question: "女儿不省心。\n\"不省心\"在句中的意思是：", options: ["很聪明", "很努力", "让人担心", "很听话"], answer: 2, explain: "不省心 = khiến người khác lo lắng." },
        { question: "你害怕欠人情啊。\n\"欠人情\"在句中的意思是：", options: ["借钱", "帮助别人", "欠别人恩情", "花钱太多"], answer: 2, explain: "欠人情 = mắc nợ ân tình." },
      ],
    },
  },

  /* ============================================================
     幸福到万家 – Hạnh phúc đến vạn gia  (postId: 2)  — tập 2'46
     ============================================================ */
  2: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "他们这么________我妹，这事不能就这么算了。", options: ["欺负", "支援", "理解", "保护"], answer: 0, explain: "欺负 = bắt nạt." },
        { question: "这件事你必须给我一个________。", options: ["结果", "说法", "办法", "理由"], answer: 1, explain: "说法 = lời giải thích, sự công bằng." },
        { question: "你别再给我们________了，这已经够麻烦了。", options: ["闹喜", "生事", "帮忙", "赔不是"], answer: 1, explain: "生事 = gây chuyện." },
        { question: "他刚才的行为已经算是________了，不能原谅。", options: ["闹喜", "耍流氓", "吃亏", "支援"], answer: 1, explain: "耍流氓 = giở trò lưu manh." },
        { question: "这件事不能就这样算了，不能说已经________了。", options: ["吃亏", "扯平", "认罚", "欺负"], answer: 1, explain: "扯平 = hòa, huề." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "他们这么欺负我妹。\n\"欺负\"在句中的意思是：", options: ["帮助别人", "关心别人", "欺压、伤害别人", "保护别人"], answer: 2, explain: "欺负 = ức hiếp, bắt nạt." },
        { question: "必须得给我一个说法。\n\"说法\"在句中的意思是：", options: ["解释和交代", "命令", "建议", "想法"], answer: 0, explain: "说法 = lời giải thích và giao đại." },
        { question: "你再别再给我们生事了。\n\"生事\"在句中的意思是：", options: ["做好事", "惹麻烦", "工作", "学习"], answer: 1, explain: "生事 = gây rắc rối." },
        { question: "这不是猥亵犯罪吗。\n\"猥亵\"在句中的意思是：", options: ["打架", "欺骗", "性骚扰行为", "误会"], answer: 2, explain: "猥亵 = xâm hại, sàm sỡ." },
        { question: "那我也赔不是，我认罚。\n\"认罚\"在句中的意思是：", options: ["拒绝处罚", "接受处罚", "逃避责任", "请求帮助"], answer: 1, explain: "认罚 = chấp nhận bị phạt." },
      ],
    },
  },

  /* ============================================================
     焕羽 – Hoán vũ  (postId: 8)
     ============================================================ */
  8: {
    type1: {
      title: "Dạng 1: Chọn từ điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "他在群众面前________认错，态度很诚恳。", options: ["跪下", "捣乱", "带坏", "挑起"], answer: 0, explain: "跪下 = quỳ xuống." },
        { question: "做错了事情就应该主动________，而不是找借口。", options: ["赔礼", "捣乱", "挑起", "毁"], answer: 0, explain: "赔礼 = xin lỗi trang trọng." },
        { question: "奶奶因为生气过度，已经________了。", options: ["毁了", "病倒", "捣乱", "交代"], answer: 1, explain: "病倒 = đổ bệnh." },
        { question: "他一个人________整个家庭的责任，非常不容易。", options: ["带坏", "捣乱", "挑起", "借口"], answer: 2, explain: "挑起 = gánh vác." },
        { question: "你别再________了，现在大家都很着急。", options: ["认错", "捣乱", "赔礼", "跪下"], answer: 1, explain: "捣乱 = gây rối." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "你给我跪下。\n\"跪下\"在句中的意思是：", options: ["站起来", "坐下", "双膝着地", "走开"], answer: 2, explain: "跪下 = quỳ gối." },
        { question: "奶奶也被气得都病倒了。\n\"病倒\"在句中的意思是：", options: ["生病倒下", "很开心", "很累", "睡觉"], answer: 0, explain: "病倒 = đổ bệnh vì tức giận." },
        { question: "你翅膀硬了是吧。\n\"翅膀硬了\"在句中的意思是：", options: ["身体不好", "很累", "有能力不听话了", "很聪明"], answer: 2, explain: "翅膀硬了 = đủ lông đủ cánh." },
        { question: "别把孩子带坏了。\n\"带坏\"在句中的意思是：", options: ["帮助变好", "教育很好", "影响变坏", "保护孩子"], answer: 2, explain: "带坏 = làm hư ai đó." },
        { question: "总得给他借口交代吧。\n\"交代\"在句中的意思是：", options: ["解释说明", "批评", "表扬", "请求"], answer: 0, explain: "交代 = giải thích, bàn giao." },
      ],
    },
  },

  /* ============================================================
     暗格里的秘密 – Bí mật nơi góc tối  (postId: 54)
     ============================================================ */
  54: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "春天到了，________吹拂，让人感觉很舒服。", options: ["风气", "和风", "枝头", "衷心"], answer: 1, explain: "和风 = gió nhẹ, gió xuân." },
        { question: "老师对新同学表示________的欢迎。", options: ["枝头", "风气", "衷心", "和风"], answer: 2, explain: "衷心 = chân thành." },
        { question: "花儿开满了________，景色非常美丽。", options: ["枝头", "风气", "惠", "衷心"], answer: 0, explain: "枝头 = đầu cành." },
        { question: "学校希望为学生________更多的发展机会。", options: ["打断", "惠", "怪罪", "签约"], answer: 1, explain: "惠 = ban tặng, mang lại lợi ích." },
        { question: "我们应该一起营造良好的学习________。", options: ["枝头", "和风", "风气", "衷心"], answer: 2, explain: "风气 = nếp sống, bầu không khí." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "春天的和风让人感到很温暖。\n\"和风\"在句中的意思是:", options: ["大风", "温和的风", "冷风", "台风"], answer: 1, explain: "和风 = gió ôn hòa." },
        { question: "学校为学生的发展带来了很多好处，这也是一种\"惠\"。\n\"惠\"在句中的意思是:", options: ["伤害", "帮助和好处", "批评", "限制"], answer: 1, explain: "惠 = lợi ích, sự giúp đỡ." },
        { question: "花开在枝头，非常漂亮。\n\"枝头\"在句中的意思是:", options: ["树根", "树干", "树枝的末端", "地面"], answer: 2, explain: "枝头 = phần đầu cành cây." },
        { question: "我衷心祝愿你取得成功。\n\"衷心\"在句中的意思是:", options: ["表面上", "勉强地", "真诚地", "随便地"], answer: 2, explain: "衷心 = tận đáy lòng." },
        { question: "学校的学习风气很好，大家都很努力。\n\"风气\"在句中的意思是:", options: ["天气", "风的大小", "一种社会或集体的氛围", "环境污染"], answer: 2, explain: "风气 = nếp sống trong tập thể." },
      ],
    },
  },

  /* ============================================================
     偷偷藏不住 – Vụng trộm không thể giấu  (postId: 63)
     ============================================================ */
  63: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "学习过程是________的，每一步都很重要。", options: ["一模一样", "一环扣一环", "理直气壮", "唯唯诺诺"], answer: 1, explain: "一环扣一环 = từng bước liên kết chặt chẽ." },
        { question: "他每次讲话内容都________，没有新意。", options: ["一模一样", "比手划脚", "白浪费", "费心"], answer: 0, explain: "一模一样 = y hệt nhau." },
        { question: "老师在讲课时总是________，动作很多。", options: ["唯唯诺诺", "一环扣一环", "比手划脚", "理直气壮"], answer: 2, explain: "比手划脚 = khoa tay múa chân." },
        { question: "面对老师的批评，他只是________地答应。", options: ["理直气壮", "比手划脚", "唯唯诺诺", "一模一样"], answer: 2, explain: "唯唯诺诺 = vâng vâng dạ dạ." },
        { question: "她明明没听课，却________地反问老师。", options: ["唯唯诺诺", "理直气壮", "白浪费", "费心"], answer: 1, explain: "理直气壮 = hùng hồn, tự tin vì thấy mình đúng." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "如果不好好利用时间，就会白浪费很多机会。\n\"白浪费\"在句中的意思是:", options: ["合理利用", "无意义地浪费", "节省时间", "增加机会"], answer: 1, explain: "白浪费 = lãng phí vô ích." },
        { question: "老师为学生的成长费了很多心。\n\"费心\"在句中的意思是:", options: ["不关心", "花时间和精力", "批评别人", "放弃努力"], answer: 1, explain: "费心 = tốn công, để tâm." },
        { question: "做事情要一环扣一环，不能出错。\n\"一环扣一环\"在句中的意思是:", options: ["很简单", "毫无关系", "紧密相连", "随便进行"], answer: 2, explain: "一环扣一环 = liên kết chặt chẽ." },
        { question: "他们两个人的答案一模一样。\n\"一模一样\"在句中的意思是:", options: ["完全不同", "非常复杂", "完全相同", "有一点差别"], answer: 2, explain: "一模一样 = hoàn toàn giống nhau." },
        { question: "他被批评后还是理直气壮地解释自己。\n\"理直气壮\"在句中的意思是:", options: ["很害怕", "很生气", "有理由而且态度强硬", "很随便"], answer: 2, explain: "理直气壮 = có lý lẽ và tự tin." },
      ],
    },
  },

  /* ============================================================
     你微笑时很美 – Khi em mỉm cười rất đẹp  (postId: 61)  — tập 2:32s
     ============================================================ */
  61: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "作为团队成员，我们要________个人主义。", options: ["训练", "摒弃", "补兵", "冲锋猛进"], answer: 1, explain: "摒弃 = từ bỏ." },
        { question: "他在比赛中总是喜欢一个人________，不听指挥。", options: ["摒弃", "训练", "冲锋猛进", "补兵"], answer: 2, explain: "冲锋猛进 = xông lên mạnh mẽ một mình." },
        { question: "在团队中，每个人都是一颗________。", options: ["工具人", "电竞", "新手", "螺丝钉"], answer: 3, explain: "螺丝钉 = con ốc (ẩn dụ: một mắt xích trong tập thể)." },
        { question: "他刚开始打比赛，还是一个________。", options: ["工具人", "电竞", "新手", "螺丝钉"], answer: 2, explain: "新手 = người mới." },
        { question: "想提高水平，就必须不断________。", options: ["训练", "补兵", "摒弃", "电竞"], answer: 0, explain: "训练 = huấn luyện." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "他愿意在团队中当工具人，帮助队友取得胜利。\n\"工具人\"在句中的意思是:", options: ["领导者", "只负责自己", "为别人服务的人", "观众"], answer: 2, explain: "工具人 = người hỗ trợ, làm nền." },
        { question: "职业电竞选手每天都要进行高强度训练。\n\"电竞\"在句中的意思是:", options: ["传统体育", "电子游戏竞技", "学习活动", "娱乐节目"], answer: 1, explain: "电竞 = thể thao điện tử." },
        { question: "他是个新手，还需要多学习。\n\"新手\"在句中的意思是:", options: ["专家", "有经验的人", "刚开始学习的人", "老师"], answer: 2, explain: "新手 = người mới bắt đầu." },
        { question: "在游戏中，补兵非常重要。\n\"补兵\"在句中的意思是:", options: ["攻击敌人", "完成任务", "击杀小兵获取资源", "防守基地"], answer: 2, explain: "补兵 = last-hit, ăn lính lấy vàng." },
        { question: "他每天坚持训练，提高自己的水平。\n\"训练\"在句中的意思是:", options: ["休息", "娱乐", "练习和提高能力", "比赛"], answer: 2, explain: "训练 = luyện tập nâng cao." },
      ],
    },
  },

  /* ============================================================
     陪你到世界之巅 – Cùng em đi đến đỉnh vinh quang  (postId: 59)  — tập 1:55s
     ============================================================ */
  59: {
    type1: {
      title: "Dạng 1: Chọn từ đúng điền vào chỗ trống (单项选择填空)",
      questions: [
        { question: "今天晚上我们会________比赛全过程。", options: ["退出", "直播", "主持", "对决"], answer: 1, explain: "直播 = livestream." },
        { question: "这是一场非常精彩的________，吸引了很多观众。", options: ["发呆", "对决", "队友", "协议"], answer: 1, explain: "对决 = đối đầu." },
        { question: "两支强队正在进行冠亚军的________。", options: ["争夺战", "发呆", "打野", "偷袭"], answer: 0, explain: "争夺战 = trận tranh giành." },
        { question: "他突然从后面________对手，让人措手不及。", options: ["发呆", "主持", "偷袭", "退出"], answer: 2, explain: "偷袭 = đánh lén." },
        { question: "比赛中他一直在________，没有做出反应。", options: ["打野", "发呆", "对决", "主持"], answer: 1, explain: "发呆 = đứng ngơ, thẫn thờ." },
      ],
    },
    type2: {
      title: "Dạng 2: Chọn nghĩa đúng của từ trong câu (词义理解选择题)",
      questions: [
        { question: "他是这场比赛的主持人。\n\"主持\"在句中的意思是:", options: ["参加比赛", "组织和引导活动的人", "观众", "裁判"], answer: 1, explain: "主持 = dẫn chương trình." },
        { question: "他们正在争夺冠军，这是最后的争夺战。\n\"争夺战\"在句中的意思是:", options: ["普通比赛", "练习赛", "为了胜利进行的竞争", "娱乐活动"], answer: 2, explain: "争夺战 = trận cạnh tranh vì chiến thắng." },
        { question: "他选择退出电竞圈，开始新的生活。\n\"退出电竞圈\"在句中的意思是:", options: ["加入电竞", "继续比赛", "离开电竞行业", "参加比赛"], answer: 2, explain: "退出电竞圈 = rút khỏi giới esports." },
        { question: "双方已经签订了合作协议。\n\"协议\"在句中的意思是:", options: ["游戏", "规则", "约定和合同", "比赛"], answer: 2, explain: "协议 = thỏa thuận." },
        { question: "他今天没有走中单，而是去打野了。\n\"打野\"在句中的意思是:", options: ["站在中间", "在野区活动和支援", "防守塔", "观看比赛"], answer: 1, explain: "打野 = đi rừng." },
      ],
    },
  },
};
