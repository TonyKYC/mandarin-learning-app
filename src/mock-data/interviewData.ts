import { QAData } from "@/src/types/questions.types";

// Sample data for Mandarin learning
const initialQAData: QAData = {
  "1": {
    english: {
      question: "Can you briefly introduce yourself and your background?",
      answer:
        "I’m a developer at heart with a passion for agility and automation. I’ve worked as an Agile Coach and Scrum Master, helping teams streamline workflows and deliver better quality projects.",
    },
    pinyin: {
      question: "Nǐ néng jiǎndān jièshào yīxià zìjǐ hé nǐ de bèijǐng ma?",
      answer:
        "Wǒ shì yīgè xīnzhōng jiù shì kāifā zhě, duì jījí hé zìdòng huà gǎn xìngqù. Wǒ yǐjīng zuòguò Agile jiàoliàn hé Scrum Master, bāngzhù tuánduì yōuhuà gōngzuò liúchéng hé tígāo xiàngmù zhìliàng.",
    },
    chinese: {
      question: "你能簡單介紹一下自己和你的背景嗎?",
      answer:
        "我是一個內心仍是開發者，對敏捷和自動化有熱情。我已經擔任過 Agile 教練和 Scrum Master，幫助團隊優化工作流程和提高項目質量.",
    },
  },
  "2": {
    english: {
      question: "What attracted you to Agile methodologies?",
      answer:
        "I love how Agile promotes collaboration, rapid iteration, and continuous improvement. It allows teams to be more adaptive and efficient.",
    },
    pinyin: {
      question: "Shénme ràng nǐ duì Agile fāngfǎ gǎn xìngqù?",
      answer:
        "Wǒ ài Agile de hézuò, kuài sù xún huán hé chángqí gǎishàn zhèxiē tèdiǎn, ràng tuánduì gèng jiārù hé yǒuxiào.",
    },
    chinese: {
      question: "什麼讓你對 Agile 方法感興趣?",
      answer: "我喜歡 Agile 的合作、快速循環和持續改善，讓團隊更加靈活和有效.",
    },
  },
  "3": {
    english: {
      question: "How do you tailor agile practices to different team cultures?",
      answer:
        "I assess the team’s strengths, weaknesses, and existing workflow, then adapt practices to enhance collaboration and efficiency without compromising their unique culture.",
    },
    pinyin: {
      question: "Nǐ rúhé gēnjù bùtóng tuánduì wénhuà tiáozhěng Agile shíjiàn?",
      answer:
        "Wǒ xiān pínggū tuánduì de qiángdiǎn, ruòdiǎn hé xiàn yǒu liúchéng, ránhòu tiáozhěng fāngfǎ, yǐ tígāo hézuò hé yǒuxiào xìng, ér bù gǔtòu tāmen de tèyǒu wénhuà.",
    },
    chinese: {
      question: "你如何根據不同團隊文化調整 Agile 實踐?",
      answer:
        "我先評估團隊的優勢、弱點和現有流程，再調整方法，以提高合作和效率，同時保有他們獨特的文化.",
    },
  },
  "4": {
    english: {
      question:
        "Could you describe a time when you helped transform a team’s workflow?",
      answer:
        "I once helped a team increase productive time from 20% to 80% by streamlining their processes and implementing Scrum and Kanban practices.",
    },
    pinyin: {
      question:
        "Nǐ néng miáoshù yīcì bāngzhù tuánduì gǎishàn liúchéng de shíhòu ma?",
      answer:
        "Wǒ cóng qián bāng yīgè tuánduì jiāqiáng shēngchǎn shíjiān, yóuyú yōuhuà liúchéng, shíshī le Scrum hé Kanban de fāngfǎ, cóng 20% tígāo dào 80%.",
    },
    chinese: {
      question: "你能描述一次幫助團隊改善流程的時候嗎?",
      answer:
        "我曾經幫助一個團隊從20%生產時間提升到80%，透過優化流程並實施 Scrum 與 Kanban 方法.",
    },
  },
  "5": {
    english: {
      question: "What is your approach to resolving conflicts within a team?",
      answer:
        "I listen actively, understand each person’s perspective, and facilitate a discussion where everyone can contribute to a fair solution.",
    },
    pinyin: {
      question: "Nǐ chǔlǐ tuánduì zhōng chōngtú de fāngshì shì shénme?",
      answer:
        "Wǒ jījí tīng wèn, liǎojiě měi gè rén de jiǎnduǎn, ránhòu fāzhǎn yīgè dàochuán dàjiā dōu kě cānyù de tánhuà, lái zhǎodào gōngpíng de jiějué fāng'àn.",
    },
    chinese: {
      question: "你處理團隊中衝突的方式是什麼?",
      answer:
        "我積極傾聽，了解每個人的看法，然後促成一個大家都能參與討論以達成公平解決方案的氛圍.",
    },
  },
  "6": {
    english: {
      question:
        "How do you decide whether to use Scrum, Kanban, or SAFe for a project?",
      answer:
        "I consider the team size, project complexity, and organizational needs to choose the most appropriate framework that supports incremental improvement.",
    },
    pinyin: {
      question:
        "Nǐ shì zěnyàng xuǎnzé shì yào shíyòng Scrum, Kanban, háishì SAFe lái guānlǐ xiàngmù?",
      answer:
        "Wǒ huì kǎolǜ tuánduì de dàxiǎo, xiàngmù de fùzá chéngdù hé zǔzhī xūqiú, xuǎnzé zuì héshì de jiàoyì móshì, wéichí zhēngjiàn tígāo.",
    },
    chinese: {
      question: "你是怎樣選擇是要使用 Scrum、Kanban，還是 SAFe 來管理項目?",
      answer:
        "我會考慮團隊的大小、項目的複雜程度和組織需求，選擇最合適的框架，以支持逐步改進.",
    },
  },
  "7": {
    english: {
      question:
        "Tell me about your most challenging agile transformation project.",
      answer:
        "My most challenging project involved implementing SAFe across 20 teams and 250 people. It required aligning diverse teams and fostering a strong agile community to achieve over 100% efficiency improvement.",
    },
    pinyin: {
      question: "Gàosù wǒ nǐ zuì yǒu tiǎozhàn xìng de Agile biànhuà xiàngmù.",
      answer:
        "Wǒ zuì tiǎozhàn xìng de xiàngmù shì zài 20 gè tuánduì, 250 rén zhōng shíshī SAFe. Zhè xūqiú yīzhì bùtóng tuánduì, bìng chuàngjiàn yīgè qiángliè de Agile shèqū, yǐ dádào 100% yǒuxiào chéngzhǎng.",
    },
    chinese: {
      question: "告訴我你最有挑戰性的 Agile 轉型項目。",
      answer:
        "我最具挑戰性的項目是在20個團隊、250人中實施 SAFe。這需要協調不同團隊，並建立一個強大的 Agile 社群，以達到超過 100% 的效率提升.",
    },
  },
  "8": {
    english: {
      question: "How do you measure the success of an agile transformation?",
      answer:
        "I evaluate success by monitoring team efficiency, quality of deliverables, on-time project completions, and the overall engagement and feedback of team members.",
    },
    pinyin: {
      question: "Nǐ shì zěnyàng cèliàng Agile zhuǎnxíng chénggōng de?",
      answer:
        "Wǒ tōngguò guānchá tuánduì yǒuxiào lǜ, chūchǎn zhìliàng, shíjiān nènggòu wánchéng de xiàngmù hé tuánduì chéngyuán de cānyù hé fǎnyìng lái cèliàng.",
    },
    chinese: {
      question: "你是怎樣衡量 Agile 轉型成功的?",
      answer:
        "我通過觀察團隊效率、產出質量、準時完成項目以及團隊成員的參與和反饋來衡量成功.",
    },
  },
  "9": {
    english: {
      question:
        "What tools do you typically use to facilitate agile practices?",
      answer:
        "I use tools like JIRA, Trello, Confluence, and various CI/CD pipelines to track progress, manage backlogs, and automate workflows efficiently.",
    },
    pinyin: {
      question: "Nǐ tōngcháng shǐyòng nǎxiē gōngjù lái cuīlì Agile shíjiàn?",
      answer:
        "Wǒ shǐyòng JIRA, Trello, Confluence jí gèzhǒng CI/CD gōngchéng, yòng yú guānkòng jìndù, guǎnlǐ rènwù lièbiǎo hé zìdòng huà liúchéng.",
    },
    chinese: {
      question: "你通常使用哪一些工具來促進 Agile 實踐?",
      answer:
        "我使用 JIRA、Trello、Confluence 以及各種 CI/CD 管道，用於監控進度、管理待辦事項和自動化流程.",
    },
  },
  "10": {
    english: {
      question: "How do you coach product managers in an agile environment?",
      answer:
        "I encourage them to embrace discovery-driven development, prioritize work based on customer feedback, and maintain clear communication with development teams.",
    },
    pinyin: {
      question: "Zài Agile huánjìng zhōng, nǐ rúhé jiàoliàn chǎnpǐn jīnglǐ?",
      answer:
        "Wǒ gǔlì tāmen cǎiyòng fāxiàn zhǔdòng de kāifā fāngshì, jīyú kèhù fǎnyìng lái yōuxiān pái xù gōngzuò, bìng tōngguò qīngxī tōngxùn lái guānlián kāifā tuánduì.",
    },
    chinese: {
      question: "在 Agile 環境中，你如何教練產品經理?",
      answer:
        "我鼓勵他們採用發現驅動的開發方式，根據客戶反應來優先排序工作，並透過清晰溝通來連結開發團隊.",
    },
  },
  "11": {
    english: {
      question:
        "Can you give an example of how you improved quality in a previous project?",
      answer:
        "By introducing regular retrospectives, automated testing, and quality standards, I helped one team reduce defects and improve overall product stability.",
    },
    pinyin: {
      question:
        "Nǐ néng gěi chū yīgè lìzi, zhège lìzi shì nǐ rúhé tígāo xiàngmù zhìliàng de ma?",
      answer:
        "Tōngguò dìngqí fǎnxī huìyì, zìdòng cèshì hé zhìliàng biāozhǔn, wǒ bāngzhù yīgè tuánduì jiàngdī cuòwù, tígāo liánjié chǎnpǐn wěndìng xìng.",
    },
    chinese: {
      question: "你能舉個例子說明你如何提升項目質量嗎?",
      answer:
        "透過定期反省會議、自動化測試和質量標準，我幫助一個團隊降低缺陷，提升整體產品穩定性.",
    },
  },
  "12": {
    english: {
      question: "What role does automation play in your agile strategy?",
      answer:
        "Automation is key—I use it to streamline repetitive tasks, support continuous integration/delivery, and free up time for creative problem solving.",
    },
    pinyin: {
      question: "Zìdòng huà zài nǐ de Agile cèlüè zhōng qǐ shénme zuòyòng?",
      answer:
        "Zìdòng huà shì guānjiàn—wǒ shǐyòng tā lái yōuhuà chóngfù xìng rènwù, zhīchí liánxù chéngrù/chúshū, bìng jiěfàng shíjiān yòng yú chuàngxīn jiějué wèntí.",
    },
    chinese: {
      question: "自動化在你的 Agile 策略中扮演什麼角色?",
      answer:
        "自動化是關鍵—我使用它來優化重複性工作，支持連續整合/交付，並釋放時間用於創新解決問題.",
    },
  },
  "13": {
    english: {
      question: "How do you encourage a culture of continuous improvement?",
      answer:
        "I foster open communication and regular feedback, encourage experimentation, and celebrate small wins to motivate the team to keep improving.",
    },
    pinyin: {
      question: "Nǐ rúhé cùjìn yīgè chángqí gǎishàn de wénhuà?",
      answer:
        "Wǒ chuàngzào kāifàng de tōngxùn hé dìngqí de fǎnyìng, gǔlì shíyàn xīn de fāngshì, bìng jīngcháng qìngzhù xiǎo chéngjiù, lái ràng tuánduì bùduàn tiánjìn.",
    },
    chinese: {
      question: "你如何促進一個持續改善的文化?",
      answer:
        "我創造開放的溝通環境和定期的反饋，鼓勵嘗試新方式，並常常慶祝小成就，激勵團隊不斷進步.",
    },
  },
  "14": {
    english: {
      question: "How do you handle resistance to change from team members?",
      answer:
        "I listen to their concerns, address misconceptions through discussion and examples, and gradually introduce changes so that the team feels supported.",
    },
    pinyin: {
      question: "Nǐ rúhé yìngduì tuánduì chéngyuán duì biànhuà de fǎnduì?",
      answer:
        "Wǒ huì zhēnxīn tīng wèn tāmen de yìyì, tōngguò tánhuà hé lìzi jiěshì cuòjiě, ránhòu zhùyú zhùrù biànhuà, ràng tuánduì gǎnjué dédào zhīchí.",
    },
    chinese: {
      question: "你如何應對團隊成員對變化的抵觸?",
      answer:
        "我會真誠傾聽他們的意見，透過討論和例子解釋誤解，然後逐步引入改變，讓團隊感受到支持.",
    },
  },
  "15": {
    english: {
      question:
        "What challenges did you face as a Scrum Master and how did you overcome them?",
      answer:
        "A key challenge was aligning multicultural teams. I overcame this by promoting open communication, regular retrospectives, and adapting methods to local needs.",
    },
    pinyin: {
      question:
        "Zuòwéi Scrum Master nǐ miànduì de zhǔyào tiǎozhàn shì shénme, nǐ shì zěnyàng kèfú de?",
      answer:
        "Zhǔyào tiǎozhàn shì ràng duōyuán wénhuà de tuánduì qíngtóng. Wǒ tōngguò tuīguǎng kāifàng de tōngxùn, dìngqí fǎnxī, bìng tiáozhěng fāngfǎ yǐ shì yǔ běndì xūqiú, lái kèfú zhège tiǎozhàn.",
    },
    chinese: {
      question: "作為 Scrum Master 你面對的主要挑戰是什麼，你是如何克服的?",
      answer:
        "主要挑戰是使多元文化團隊步調一致。我透過推廣開放的溝通、定期反省，並調整方法以符合本地需求，來克服這個挑戰.",
    },
  },
  "16": {
    english: {
      question: "How do you integrate feedback into an ongoing project?",
      answer:
        "I incorporate feedback through regular retrospectives and planning sessions, ensuring that every piece of input is considered for continuous improvement.",
    },
    pinyin: {
      question: "Nǐ rúhé jiārù fǎnyìng dào jìnxíng zhōng de xiàngmù lǐ?",
      answer:
        "Wǒ tōngguò dìngqí fǎnxī huìyì hé jìhuà huìyì lái jiārù fǎnyìng, quèbǎo měi yī tiáo yìjiàn dōu huòdé kǎolǜ yǐ shíxiàn chángqí gǎishàn.",
    },
    chinese: {
      question: "你如何將反饋融入進行中的項目中?",
      answer:
        "我透過定期反省會議和計劃會議來整合反饋，確保每一條意見都得到考慮以實現持續改善.",
    },
  },
  "17": {
    english: {
      question:
        "What is your experience working with distributed or remote teams?",
      answer:
        "I have managed and coached remote teams successfully, using online collaboration tools to maintain communication and ensure smooth workflow.",
    },
    pinyin: {
      question:
        "Nǐ yǒu méiyǒu hé fēn qū huò yuǎnchù tuánduì gōngzuò de jīngyàn?",
      answer:
        "Wǒ yǒu chénggōng guǎnlǐ hé jiàoliàn yuǎnchù tuánduì de jīngyàn, tōngguò wǎngluò hézuò gōngjù lái bǎochí tōngxùn hé quèbǎo liúchéng shùnlì.",
    },
    chinese: {
      question: "你有沒有和分區或遠處團隊工作的經驗?",
      answer:
        "我有成功管理和教練遠處團隊的經驗，通過網路合作工具來保持溝通並確保流程順利.",
    },
  },
  "18": {
    english: {
      question:
        "How do you ensure that agile teams remain focused on customer needs?",
      answer:
        "I emphasize the importance of regular customer feedback, value-driven prioritization, and aligning the team’s goals with customer satisfaction.",
    },
    pinyin: {
      question: "Nǐ rúhé quèbǎo Agile tuánduì yǒuxiào dì zhùzhòng kèhù xūqiú?",
      answer:
        "Wǒ chóngdiào jīdìng de kèhù fǎnyìng, zhíjià yōuxiān jí, bìng ràng tuánduì mùbiāo yǔ kèhù mǎnyì dù xiāng lián.",
    },
    chinese: {
      question: "你如何確保 Agile 團隊有效地注重客戶需求?",
      answer:
        "我強調定期客戶反饋、價值驅動的優先順序，並使團隊目標與客戶滿意度緊密對應.",
    },
  },
  "19": {
    english: {
      question:
        "Describe your experience with continuous integration and continuous delivery (CI/CD).",
      answer:
        "I’ve implemented CI/CD pipelines to automate testing and deployment, which has greatly improved project delivery speed and reliability.",
    },
    pinyin: {
      question:
        "Miáoshù yīxià nǐ zài liánxù chéngrù hé liánxù jiāofù (CI/CD) fāngmiàn de jīngyàn.",
      answer:
        "Wǒ shíshī guò CI/CD gōngchéng, yǐ zìdòng cèshì hé bùshǔ, jìngdà tígāo xiàngmù jiāofù sùdù hé kěkào xìng.",
    },
    chinese: {
      question: "描述一下你在連續整合與連續交付（CI/CD）方面的經驗。",
      answer:
        "我已實施過 CI/CD 管道，以自動化測試和部署，顯著提升了項目交付速度與可靠性.",
    },
  },
  "20": {
    english: {
      question: "In your view, what defines a high-performing agile team?",
      answer:
        "A high-performing agile team collaborates openly, communicates transparently, continuously improves, and remains focused on delivering customer value.",
    },
    pinyin: {
      question:
        "Zài nǐ kàn lái, yīgè gāo xiàolǜ de Agile tuánduì yǒu shé me tèzhēng?",
      answer:
        "Gāo xiàolǜ tuánduì shì zhōngchéng hézuò, tōngxìn qīngxī, chángqí gǎijìn, ér qiě zhùzhòng tígōng kèhù jiàzhí.",
    },
    chinese: {
      question: "在你看來，一個高效能的 Agile 團隊有什麼特徵?",
      answer:
        "高效能團隊具備誠摯合作、清晰溝通、持續改進，並且聚焦於提供客戶價值.",
    },
  },
  "21": {
    english: {
      question:
        "How do you keep your skills and knowledge current in agile practices?",
      answer:
        "I regularly attend workshops, read industry literature, and participate in agile communities to stay updated on best practices and emerging trends.",
    },
    pinyin: {
      question:
        "Nǐ shì zěnyàng bǎochí zìjǐ zài Agile shíjiàn fāngmiàn de jìnéng hé zhīshi gēngxīn de?",
      answer:
        "Wǒ jīdìng cānjiā xíxì, yuèdú hángyè wénxiàn, bìng cānyù Agile shèqū, yǐ huíxīn zuìjiā shíjiàn hé xīn fāzhǎn qūshì.",
    },
    chinese: {
      question: "你是怎樣保持自己在 Agile 實踐方面的技能和知識更新的?",
      answer:
        "我定期參加工作坊、閱讀業界文獻，並參與 Agile 社群，以掌握最佳實踐及新興趨勢.",
    },
  },
  "22": {
    english: {
      question:
        "What did you learn from your experience as a Fullstack Software Engineer that helps you as an Agile Coach?",
      answer:
        "My experience as a developer gives me insight into technical challenges and helps me bridge the gap between development teams and agile processes.",
    },
    pinyin: {
      question:
        "Nǐ cóng zuòwéi Fullstack ruǎnjiàn gōngchéngshī de jīngyàn zhōng xué dào le shénme kěyǐ bāngzhù nǐ zuòwéi Agile jiàoliàn?",
      answer:
        "Zuòwéi kāifā zhě de jīngyàn ràng wǒ liǎojiě jìshù tiǎozhàn, bìng bāngzhù wǒ jiēshí kāifā tuánduì hé Agile liúchéng zhī jiān de kèqù.",
    },
    chinese: {
      question:
        "你從擔任 Fullstack 軟件工程師的經驗中學到什麼，可以幫助你作為 Agile 教練?",
      answer:
        "作為開發者的經驗使我了解技術挑戰，並幫助我在開發團隊與 Agile 流程之間搭起橋樑.",
    },
  },
  "23": {
    english: {
      question: "How do you handle a project that falls behind schedule?",
      answer:
        "I analyze the root causes, adjust priorities, facilitate focused stand-up meetings, and work with the team to implement solutions that quickly get us back on track.",
    },
    pinyin: {
      question: "Rúhé chǔlǐ yīgè wánchéng xùnjiàn yǒu xiàngmù?",
      answer:
        "Wǒ huì fēnxī yuányīn, tiáozhěng yōuxiān jí, bìng cānyù tuánduì zhōng de jíshí jiějué fāng'àn, bǎ wǒmen xùnsù zhèngqu de dào zhèngquè guīlù shàng.",
    },
    chinese: {
      question: "你如何處理一個落後進度的項目?",
      answer:
        "我會分析根本原因，調整優先級，促進有針對性的例會，並與團隊合作快速實施解決方案以重回正軌.",
    },
  },
  "24": {
    english: {
      question: "How do you build trust within a team?",
      answer:
        "I build trust by being transparent, showing empathy, consistently delivering on promises, and encouraging open dialogue where team members feel valued.",
    },
    pinyin: {
      question: "Nǐ shì zěnyàng zài tuánduì nèi jiànlì xìnrèn de?",
      answer:
        "Wǒ tōngxīn chénshì tōngxìn, biǎoshì tóngqíng, yánchí shíxiàn suǒ yuē, yǐjí gǔlì kāifàng duìhuà, ràng měi gè tuánduì chéngyuán juédé bèi zhòngshì.",
    },
    chinese: {
      question: "你是怎樣在團隊內建立信任的?",
      answer:
        "我通過透明溝通、表達同理心、持續兌現承諾，以及鼓勵開放對話，讓每位團隊成員感受到被尊重.",
    },
  },
  "25": {
    english: {
      question: "What strategies do you use for effective agile meetings?",
      answer:
        "I keep meetings focused and time-boxed, encourage participation from everyone, and always follow up with actionable items to ensure progress.",
    },
    pinyin: {
      question: "Nǐ shǐyòng shénme cèlüè lái huānyì yǒuxiào de Agile huìyì?",
      answer:
        "Wǒ bǎ huìyì jiāng jùtǐ, yǒu shíjiān xiàn, gǔlì měi rén cānyù, bìng jiù zuò chū kěxíng de xìjié qù xùzhī jìndù.",
    },
    chinese: {
      question: "你使用什麼策略來舉辦有效的 Agile 會議?",
      answer:
        "我確保會議目標明確、控制時間，鼓勵每個人參與，並跟進具體可行的事項以確保進度.",
    },
  },
  "26": {
    english: {
      question:
        "How do you manage stakeholder expectations during an agile transformation?",
      answer:
        "I keep stakeholders informed through regular updates, involve them in planning sessions, and set realistic goals to align expectations with achievable outcomes.",
    },
    pinyin: {
      question:
        "Zài Agile zhuǎnxíng guòchéng zhōng, nǐ rúhé guǎnlǐ lìngāng de qīwàng?",
      answer:
        "Wǒ tōngguò dìngqí gēngxīn, yě shǐ tāmen cānyù jìhuà huìyì, bìng shèzhì xiànshí mùbiāo lái yǔ kěnéng chéngxiàn de jiéguǒ xiāng yìng.",
    },
    chinese: {
      question: "在 Agile 轉型過程中，你如何管理利害關係人的期望?",
      answer:
        "我透過定期更新狀態，讓他們參與規劃會議，並設定切合實際的目標來使期望與可達成結果一致.",
    },
  },
  "27": {
    english: {
      question: "What methods do you use to foster innovation in your teams?",
      answer:
        "I encourage brainstorming sessions, create safe spaces for experimentation, and actively support creative ideas, even if they initially seem risky.",
    },
    pinyin: {
      question: "Nǐ shǐyòng shénme fāngfǎ lái cùjìn tuánduì de chuàngxīn?",
      answer:
        "Wǒ gǔlì zǔzhī jīngsī huìyì, chuàngzào ānquán de shíyàn huánjìng, bìng jījí zhīchí chuàngxīn de xiǎngfǎ, jíshǐ tāmen qǐchū shí kàn qǐlái wéixiǎn.",
    },
    chinese: {
      question: "你使用什麼方法來促進團隊的創新?",
      answer:
        "我鼓勵組織腦力激盪會議，創造安全的嘗試環境，並積極支持創新的想法，即使它們初看起來有風險.",
    },
  },
  "28": {
    english: {
      question:
        "How do you deal with ambiguous requirements in agile projects?",
      answer:
        "I work with stakeholders to refine the requirements through iterative discussions, clarifying details as we progress, which minimizes uncertainty.",
    },
    pinyin: {
      question:
        "Zài Agile xiàngmù zhōng, miànduì yìyì bù qīngxī de xūqiú nǐ zěnyàng chǔlǐ?",
      answer:
        "Wǒ gēn lìnguān zhě tōngguò dìxún tánhuà lái jìnxíng tiáozhěng, zài jìnxíng zhōng jiěmíng xiángxì, cóng ér jiǎnshǎo wúquè xìng.",
    },
    chinese: {
      question: "在 Agile 項目中，面對不夠明確的需求你怎樣處理?",
      answer:
        "我會與利害關係人通過反覆討論來進行調整，在進行過程中明確細節，從而減少不確定性.",
    },
  },
  "29": {
    english: {
      question:
        "What is your perspective on remote versus in-office agile practices?",
      answer:
        "Both have their merits. Remote work offers flexibility, while in-office environments can enhance spontaneous collaboration. I adapt practices accordingly.",
    },
    pinyin: {
      question:
        "Nǐ duì yuǎnchù hé bàngōngshì nèi de Agile shíjiàn yǒu shé me kànfǎ?",
      answer:
        "Liǎ zhǒng fāngshì dōu yǒu tāmen de yōudiǎn. Yuǎnchù gōngzuò tígōng le línghuó xìng, ér bàngōngshì huánjìng néng tígāo jífā de zìrán hézuò, wǒ huì gēnjù qí tiáozhěng fāngfǎ.",
    },
    chinese: {
      question: "你對遠處與辦公室內的 Agile 實踐有什麼看法?",
      answer:
        "兩種方式都有各自優點。遠距工作提供彈性，而辦公室環境能提升自發性協作，我會根據情況調整方法.",
    },
  },
  "30": {
    english: {
      question: "How do you balance technical debt with agile delivery?",
      answer:
        "I ensure that teams allocate time for refactoring and technical improvements alongside feature development, so that long-term quality is not sacrificed for short-term gains.",
    },
    pinyin: {
      question:
        "Nǐ rúhé pínghé jìshù zhài wù hé Agile jiāofù zhī jiān de pínghéng?",
      answer:
        "Wǒ quèbǎo tuánduì zài fēngxiàn xīn gōngnéng de tóngshí, yě huì ānpái shíjiān jìn xíng chéngxù zhěnglǐ hé jìshù tígāo, yǐ quèbǎo chángqí zhìliàng.",
    },
    chinese: {
      question: "你如何平衡技術負債和 Agile 交付之間的關係?",
      answer:
        "我確保團隊在開發新功能的同時，也安排時間進行程式重構和技術改進，確保長期質量不會因短期收益而受損.",
    },
  },
  "31": {
    english: {
      question:
        "Can you share an experience where agility led to a significant project turnaround?",
      answer:
        "I worked on a complex engineering project where implementing agile practices led to on-time delivery under budget, reversing previous delays.",
    },
    pinyin: {
      question:
        "Nǐ néng fēnxiǎng yīgè lìzi, shuōmíng Agile shíjiàn rúhé dǎozhì xiàngmù zhǎnxiàn dà de fānbiàn ma?",
      answer:
        "Wǒ cānyù yīgè fùzá de gōngchéng xiàngmù, shíshī Agile shíjiàn hòu, wánchéng le zhǔnshí jiāofù, qiě zài yùsuàn nèi jiāofù, fǎnzhè le yuán yǒu de yánchí.",
    },
    chinese: {
      question: "你能分享一個例子，說明 Agile 實踐如何導致項目出現重大轉機嗎?",
      answer:
        "我曾參與一個複雜的工程項目，通過實施 Agile 實踐，項目不僅準時且在預算內完成，扭轉了以往的延誤情況.",
    },
  },
  "32": {
    english: {
      question: "What motivates you as an Agile Coach?",
      answer:
        "I’m motivated by the opportunity to empower teams, drive continuous improvement, and see how agile methods create a positive impact on project outcomes.",
    },
    pinyin: {
      question: "Zuòwéi Agile jiàoliàn, shénme shì nǐ de dòngjī?",
      answer:
        "Wǒ de dòngjī láizì yú nénggòu quánlì huà tuánduì, dǐdòng chángqí gǎishàn, bìng kàn dào Agile fāngfǎ duì xiàngmù chéngguǒ de zhèngmiàn yǐngxiǎng.",
    },
    chinese: {
      question: "作為 Agile 教練，什麼是你的動機?",
      answer:
        "我的動機來自於能夠賦能團隊驅動持續改善，並見證 Agile 方法對項目成果的正面影響.",
    },
  },
  "33": {
    english: {
      question:
        "How do you foster a collaborative environment with cross-functional teams?",
      answer:
        "I ensure that every team member's expertise is valued, encourage cross-training, and lead exercises that promote open dialogue and shared responsibility.",
    },
    pinyin: {
      question:
        "Nǐ rúhé zài fēn zhuānyè tuánduì zhōng chuàngzào yīgè hézuò de huánjìng?",
      answer:
        "Wǒ quèbǎo měi gè tuánduì chéngyuán de zhuānjiā gǎnjué dédào zhòngshì, gǔlì xiānghù xùnliàn, bìng dǎozhǎn chǎnghuì, yǐ tígāo kāifàng duìhuà hé gòngtóng fùzérèn de yìniàn.",
    },
    chinese: {
      question: "你如何在跨功能團隊中創造一個協作的環境?",
      answer:
        "我確保每位團隊成員的專長都受到重視，鼓勵互相交叉訓練，並組織促進開放對話和共同責任感的活動.",
    },
  },
  "34": {
    english: {
      question:
        "Tell me about a time when you had to quickly adapt your agile approach.",
      answer:
        "In a rapidly shifting project environment, I shifted from a traditional Scrum approach to incorporating Kanban techniques to better handle changes and maintain momentum.",
    },
    pinyin: {
      question:
        "Gàosù wǒ yīcì nǐ xūyào jíshí tiáozhěng Agile fāngfǎ de shíhòu de jīngyàn.",
      answer:
        "Zài yīgè fāngxiàng pùbiàn de xiàngmù huánjìng zhōng, wǒ cóng chuántǒng Scrum fāngshì gǎibiān dào jiārù Kanban jìqiǎo, yǐ gèng hǎo dì yìngduì biànhuà hé bǎochí zhòngxíng.",
    },
    chinese: {
      question: "告訴我一次你需要及時調整 Agile 方法的經驗。",
      answer:
        "在一個環境變化迅速的項目中，我從傳統 Scrum 方法轉為加入 Kanban 技巧，以更好地應對變化並保持進展.",
    },
  },
  "35": {
    english: {
      question:
        "What do you consider the biggest benefit of agile methodologies?",
      answer:
        "I believe the biggest benefit is the ability to rapidly respond to change while continuously delivering value to customers, which leads to more innovative and responsive products.",
    },
    pinyin: {
      question: "Zài nǐ kàn lái, Agile fāngfǎ zuì dà de yōushì shì shénme?",
      answer:
        "Wǒ rènwéi zuì dà de yōushì shì néng jíshí yìngduì biànhuà, tóngshí chángqí tígōng kèhù jiàzhí, cóng ér dǎozhì gèng chuàngxīn hé fǎnyìng xùnjiàn de chǎnpǐn.",
    },
    chinese: {
      question: "在你看來，Agile 方法最大的優勢是什麼?",
      answer:
        "我認為最大的優勢是能夠迅速應對變化，同時持續為客戶提供價值，從而促成更具創新性與反應迅捷的產品.",
    },
  },
  "36": {
    english: {
      question: "How do you prioritize work in an agile framework?",
      answer:
        "I use value-based prioritization, focusing on the most critical features first while balancing technical debt and long-term improvements.",
    },
    pinyin: {
      question: "Zài Agile kuàngjià xià, nǐ shì rúhé pái xù gōngzuò de?",
      answer:
        "Wǒ yǐ jízhí wéi jīchǔ, xiān pái xù zuì zhòngyào de gōngnéng, tóngshí pínghé jìshù zhài hé chángqí gǎijìn de yāoqiú.",
    },
    chinese: {
      question: "在 Agile 框架下，你是如何排列工作的?",
      answer:
        "我以價值為基礎，先排列最重要的功能，同時平衡技術負債和長期改進的需求.",
    },
  },
  "37": {
    english: {
      question: "What agile metric do you find most useful and why?",
      answer:
        "I find cycle time very useful because it directly measures the speed of delivery and helps identify areas where process improvements can be made.",
    },
    pinyin: {
      question: "Nǐ juéde nǎge Agile zhǐbiāo zuì yǒuyòng, wèishéme?",
      answer:
        "Wǒ rènwéi xúnqí shíjiān fēicháng yǒuyòng, yīnwèi tā zhíjiē liànghuà le jiāofù sùdù, bìng zhùyì dào kěyǐ tígāo liúchéng de dìfāng.",
    },
    chinese: {
      question: "你覺得哪個 Agile 指標最有用, 為什麼?",
      answer:
        "我認為循環時間非常有用，因為它直接量化了交付速度，並指出可以提升流程的地方.",
    },
  },
  "38": {
    english: {
      question:
        "How do you deal with underperforming team members in an agile team?",
      answer:
        "I engage in one-on-one discussions to understand their challenges, provide the necessary coaching, and pair them with mentors so they can improve over time.",
    },
    pinyin: {
      question:
        "Zài Agile tuánduì zhōng, rúhé chǔlǐ yǒu xiàoliàng de tuánduì chéngyuán?",
      answer:
        "Wǒ huì gēn tāmen jìnxíng yīgè rén tánhuà, liǎojiě tāmen de kùnnán, tígōng xūqiú de jiàoyù hé zhǐdǎo, bìng àn péiyǎng jīzhì, yǐguǎn tāmen zài shíjiān zhōng tígāo.",
    },
    chinese: {
      question: "在 Agile 團隊中，如何處理表現不佳的團隊成員?",
      answer:
        "我會與他們進行單獨討論，了解他們面對的困難，提供所需的輔導與指導，並按需安排指導，以便他們隨時間改善.",
    },
  },
  "39": {
    english: {
      question:
        "What is your experience with scaled agile frameworks like SAFe?",
      answer:
        "I have successfully implemented SAFe across 20 teams and 250 people, which improved efficiency by over 100% and supported large-scale project delivery.",
    },
    pinyin: {
      question:
        "Nǐ zài guānlǐ dà guīmó xiàngmù shí yǒu méiyǒu shǐyòng guīmó de Agile móshì, bǐrú SAFe?",
      answer:
        "Wǒ yǐjīng chénggōng shíshī SAFe zài 20 gè tuánduì, 250 rén zhōng, tígāo le 100% yǒuxiào xìng, yǐ zhīchí dàguīmó xiàngmù de jiāofù.",
    },
    chinese: {
      question: "你在管理大規模項目時有沒有使用過規模化 Agile 模式，例如 SAFe?",
      answer:
        "我已經成功實施 SAFe 在20個團隊、250人中，提升了超過 100% 的效率，並支持大規模項目交付.",
    },
  },
  "40": {
    english: {
      question: "How do you encourage a sense of ownership among team members?",
      answer:
        "I empower team members by involving them in decision-making, celebrating their successes, and assigning responsibilities that match their strengths.",
    },
    pinyin: {
      question:
        "Nǐ shì zěnyàng gǔlì tuánduì chéngyuán chéngwéi zìjǐ de zhǔrèn de?",
      answer:
        "Wǒ tōngguò ràng tuánduì chéngyuán cānyù juédìng, qìngzhù tāmen de chénggōng, bìng fēnpèi hé tāmen qiángdiǎn xiānghé de zérèn lái shíxiàn zhè yī mùdì.",
    },
    chinese: {
      question: "你是如何激勵團隊成員擁有自我負責感?",
      answer:
        "我透過讓團隊成員參與決策、慶祝他們的成功，以及分派與其優勢相匹配的責任，來實現這一目標.",
    },
  },
  "41": {
    english: {
      question: "Can you describe your teaching or mentoring style?",
      answer:
        "I believe in hands-on mentoring with active feedback. I guide individuals through challenges and support their professional growth with practical examples.",
    },
    pinyin: {
      question: "Nǐ néng miáoshù yīxià nǐ de jiàoxué huò zhǐdǎo fēnggé ma?",
      answer:
        "Wǒ xiāngxìn shíjì jiàodǎo, jījí fǎnyìng, zhǐdǎo gèrén miànduì tiǎozhàn, bìng tōngguò shíjì lìzi zhīchí tāmen de zhíyè chéngzhǎng.",
    },
    chinese: {
      question: "你能描述一下你的教學或指導風格嗎?",
      answer:
        "我相信以實際操作與積極回饋為主，指導個人面對挑戰，並透過具體例子支持他們的專業成長.",
    },
  },
  "42": {
    english: {
      question: "How do you measure team collaboration?",
      answer:
        "I measure collaboration by assessing communication frequency, shared problem-solving, and the successful integration of team efforts towards common goals.",
    },
    pinyin: {
      question: "Nǐ shì zěnyàng liànghuà tuánduì hézuò de?",
      answer:
        "Wǒ tōngguò cèliàng tōngxìn cìshù, gòngtóng jiějué wèntí de chéngxiàng, jí dào dádào gòngtóng mùbiāo de hézuò chéngguǒ lái liànghuà.",
    },
    chinese: {
      question: "你是如何衡量團隊合作的?",
      answer:
        "我透過測量溝通頻率、共同解決問題的情況及團隊朝著共同目標整合努力的成果來衡量.",
    },
  },
  "43": {
    english: {
      question: "What do you enjoy most about working in agile environments?",
      answer:
        "I enjoy the dynamic nature and the focus on continuous improvement, innovation, and real-time problem solving that Agile environments offer.",
    },
    pinyin: {
      question: "Zài Agile huánjìng zhōng gōngzuò, nǐ zuì xǐhuan shénme?",
      answer:
        "Wǒ xǐhuan Agile huánjìng de dòngtài xìng, hé tā duì chángqí gǎishàn, chuàngxīn hé shíshí jiějué wèntí de zhùzhòng.",
    },
    chinese: {
      question: "在 Agile 環境中工作，你最喜歡什麼?",
      answer:
        "我喜歡 Agile 環境的動態性，以及它對持續改善、創新和即時解決問題的注重.",
    },
  },
  "44": {
    english: {
      question: "How do you use data to inform agile practices?",
      answer:
        "I rely on data metrics like cycle time, defect rates, and throughput to identify bottlenecks and drive decisions that enhance team performance.",
    },
    pinyin: {
      question: "Nǐ shì zěnyàng shǐyòng shùjù lái zhǐdǎo Agile shíjiàn de?",
      answer:
        "Wǒ yǐ xúnqí shíjiān, cuòwù lǜ hé shōurù liàng děng shùjù wéi jīchǔ, lái fāxiàn liúchéng zhōng de zhǔǎn hé zuòchū tígāo tuánduì xìngnéng de juédìng.",
    },
    chinese: {
      question: "你是怎樣使用數據來指導 Agile 實踐的?",
      answer:
        "我依據循環時間、缺陷率和產出量等數據，來發現流程中的瓶頸，並作出提升團隊效能的決策.",
    },
  },
  "45": {
    english: {
      question:
        "Describe your experience with digital transformation projects.",
      answer:
        "I have a certificate in Digital Transformation and Consulting from HEC Paris, and I've led projects that integrate new technologies and agile practices to drive strategic change.",
    },
    pinyin: {
      question:
        "Nǐ néng miáoshù yīxià nǐ zài shùzì huà biànhuà xiàngmù fāngmiàn de jīngyàn ma?",
      answer:
        "Wǒ yǒu HEC Paris shùzì huà biànhuà hé gùwèn de zhèngshū, bìng yǐ lǐngdǎo guò jíxīn jìshù hé Agile shíjiàn de xiàngmù, yǐ dǎozhì zhànlüè xìng de biànhuà.",
    },
    chinese: {
      question: "你能描述一下你在數字化轉型項目方面的經驗嗎?",
      answer:
        "我持有 HEC Paris 數字化轉型與諮詢的證書，並曾領導過結合新技術與 Agile 實踐以推動戰略轉變的項目.",
    },
  },
  "46": {
    english: {
      question: "How do you support a team in times of uncertainty?",
      answer:
        "I maintain a calm environment by providing clear direction, encouraging transparency, and using agile principles to adapt plans as new information becomes available.",
    },
    pinyin: {
      question: "Zài wùquè qíngxù shí, nǐ rúhé zhīchí tuánduì?",
      answer:
        "Wǒ tōngguò tígōng qīngxī de zhǐnán, gǔlì tōngxìn, bìng shǐyòng Agile yuánzé zài xīnxī xùndé shí tiáozhěng jìhuà lái bǎochí ānjìng de huánjìng.",
    },
    chinese: {
      question: "在不確定情況下, 你如何支持團隊?",
      answer:
        "我透過提供清晰指引、鼓勵透明溝通，並應用 Agile 原則隨著新資訊到來時調整計劃，來維持冷靜氛圍.",
    },
  },
  "47": {
    english: {
      question: "How do you approach risk management in agile projects?",
      answer:
        "I proactively identify risks during planning, continuously monitor potential issues, and adjust our strategies to mitigate any adverse impacts.",
    },
    pinyin: {
      question:
        "Zài Agile xiàngmù zhōng, nǐ shì zěnyàng duì fēngxiǎn guǎnlǐ de?",
      answer:
        "Wǒ zài jìhuà qī jiān yùcè fēngxiǎn, bìng chángqí guānchá kěnéng de wèntí, ránhòu tiáozhěng zhànlüè lái jiǎnqīng fùmiàn yǐngxiǎng.",
    },
    chinese: {
      question: "在 Agile 項目中，你是怎樣進行風險管理的?",
      answer:
        "我在計劃期間主動預測風險，並持續監控潛在問題，然後調整戰略以減輕不良影響.",
    },
  },
  "48": {
    english: {
      question: "What role does mentorship play in your work?",
      answer:
        "Mentorship is crucial. I actively mentor colleagues and team members by sharing best practices, offering guidance, and fostering an environment of continuous learning.",
    },
    pinyin: {
      question: "Zhǐdǎo zài nǐ de gōngzuò zhōng qǐ shénme zuòyòng?",
      answer:
        "Zhǐdǎo fēicháng zhòngyào. Wǒ jījí yǐngxiǎng tóngshì hé tuánduì chéngyuán, fēnxiǎng zuìjiā shíjiàn, tígōng zhǐdǎo, bìng chuàngzào yīgè chángqí xuéxí de huánjìng.",
    },
    chinese: {
      question: "指導在你的工作中起什麼作用?",
      answer:
        "指導非常重要。我積極影響同事和團隊成員，分享最佳實踐，提供指導，並創造一個持續學習的環境.",
    },
  },
  "49": {
    english: {
      question: "How do you ensure a smooth knowledge transfer within teams?",
      answer:
        "I document processes, facilitate workshops and mentoring sessions, and encourage peer reviews to make sure knowledge is shared effectively.",
    },
    pinyin: {
      question: "Nǐ rúhé quèbǎo zài tuánduì nèi shíxíng zhīshi chuándì?",
      answer:
        "Wǒ huì zhùcè liúchéng, zǔzhī gōngzuòshì hé zhǐdǎo huìyì, bìng gǔlì tóngrén píngshěn, lái quèbǎo zhīshi yǒuxiào chuándì.",
    },
    chinese: {
      question: "你如何確保在團隊內進行知識傳遞?",
      answer:
        "我會記錄流程、組織工作坊及指導會議，並鼓勵同儕評審，以確保知識能有效傳遞.",
    },
  },
  "50": {
    english: {
      question: "What do you see as the future of agile methodologies?",
      answer:
        "I believe agile will continue to evolve, blending with digital transformation and AI, enabling even more adaptive, innovative, and customer-centric approaches.",
    },
    pinyin: {
      question: "Nǐ rènwéi Agile fāngfǎ de wèilái huì shì shénme yàng de?",
      answer:
        "Wǒ xiāngxìn Agile huì jìxù tuījìn biànhuà, yǔ shùzì huà hé réngōng zhìnéng rónghé, shǐ fāngfǎ gèng jiārù xìng, chuàngxīn, yǐjí zhùzhòng kèhù zhōngxīn de quēxiàng.",
    },
    chinese: {
      question: "你認為 Agile 方法的未來會是怎樣的?",
      answer:
        "我相信 Agile 將持續進行轉變，與數字化和人工智慧融合，使方法更加靈活、創新，並且更注重以客戶為中心.",
    },
  },
};
