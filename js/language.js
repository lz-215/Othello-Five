// 多语言翻译对象 - 包含所有支持的语言及其对应的文本翻译
const translations = {
    // 英文翻译
    en: {
        // 页头部分
        'popular-games': 'Popular Games',
        'more-games': 'More Games',
        'fullscreen': 'Fullscreen',

        // 游戏信息部分
        'game-features': 'Game Features',
        'how-to-play': 'How to Play',
        'what-players-love': 'What Players Love',
        'faq': 'Frequently Asked Questions',

        // 游戏特点部分 - 更新为Othello Five游戏特点
        'feature-1': 'Classic Othello/Reversi strategy gameplay',
        'feature-2': 'Sleek and intuitive user interface',
        'feature-3': 'Multiple difficulty levels for all players',
        'feature-4': 'Single-player mode against AI opponents',
        'feature-5': 'Beautiful board design with visual feedback',
        'feature-6': 'Strategic depth that\'s easy to learn',

        // 游戏操作指南部分 - 更新为Othello Five操作指南
        'controls': 'Click on valid spaces to place your disc. A valid move must capture opponent\'s discs by flanking them between your discs.',
        'control-1': 'Mouse Click: Place your disc on a valid space',
        'control-2': 'Valid Moves: Highlighted spaces show where you can place your disc',
        'control-3': 'Capturing: Place discs to trap opponent pieces between yours',
        'control-4': 'Winning: Have the most discs of your color when the game ends',

        // 游戏技巧部分 - 新增Othello Five游戏技巧
        'tip-1': 'Control the corners and edges of the board whenever possible',
        'tip-2': 'Think several moves ahead to set up strategic traps',
        'tip-3': 'Sometimes making a move that flips fewer discs can be more strategic',
        'tip-4': 'Focus on board position in early game rather than maximizing captures',

        // 常见问题解答部分
        'faq-1-q': 'Is this game free to play?',
        'faq-1-a': 'Yes, all games on our platform are completely free!',
        'faq-2-q': 'Can I play with friends?',
        'faq-2-a': 'Yes, you can invite friends to play together in multiplayer mode.',
        'faq-3-q': 'What are the system requirements?',
        'faq-3-a': 'The game runs smoothly on most modern browsers. We recommend using Chrome or Firefox for the best experience.',
        'faq-4-q': 'How do I save my progress?',
        'faq-4-a': 'Your progress is automatically saved when you\'re logged in. Make sure to create an account to keep track of your achievements.',

        // 页脚部分
        'copyright': '© 2024 Othello Five. All rights reserved.',
        'contact-us': 'Contact Us：ytsgabcde001@2925.com'
    },
    // 中文翻译
    zh: {
        // 页头部分
        'popular-games': '热门游戏',
        'more-games': '更多游戏',
        'fullscreen': '全屏',

        // 游戏信息部分
        'game-features': '游戏特色',
        'how-to-play': '如何玩',
        'what-players-love': '玩家喜爱',
        'faq': '常见问题',

        // 游戏特点部分 - 更新为Othello Five游戏特点
        'feature-1': '经典黑白棋/奥赛罗战略游戏玩法',
        'feature-2': '简洁直观的用户界面',
        'feature-3': '适合所有玩家的多种难度级别',
        'feature-4': '与AI对手的单人游戏模式',
        'feature-5': '美观的棋盘设计，清晰的视觉反馈',
        'feature-6': '易学难精的战略深度',

        // 游戏操作指南部分 - 更新为Othello Five操作指南
        'controls': '点击有效位置放置棋子。有效移动必须通过在你的棋子之间夹住对手的棋子来捕获它们。',
        'control-1': '鼠标点击：在有效位置放置棋子',
        'control-2': '有效移动：高亮显示可以放置棋子的位置',
        'control-3': '捕获：放置棋子以夹住对手的棋子',
        'control-4': '获胜：游戏结束时拥有最多自己颜色的棋子',

        // 游戏技巧部分 - 新增Othello Five游戏技巧
        'tip-1': '尽可能控制棋盘的角落和边缘',
        'tip-2': '提前几步思考，设置战略陷阱',
        'tip-3': '有时翻转较少棋子的移动可能更具战略性',
        'tip-4': '在游戏早期专注于棋盘位置，而不是最大化捕获',

        // 常见问题解答部分
        'faq-1-q': '这个游戏是免费的吗？',
        'faq-1-a': '是的，我们平台上的所有游戏都是完全免费的！',
        'faq-2-q': '我可以和朋友一起玩吗？',
        'faq-2-a': '是的，你可以邀请朋友一起玩多人模式。',
        'faq-3-q': '系统要求是什么？',
        'faq-3-a': '游戏在大多数现代浏览器上运行流畅。我们建议使用Chrome或Firefox获得最佳体验。',
        'faq-4-q': '如何保存我的进度？',
        'faq-4-a': '当你登录时，你的进度会自动保存。请确保创建一个账户来跟踪你的成就。',

        // 页脚部分
        'copyright': '© 2024 Othello Five. 保留所有权利。',
        'contact-us': '联系我们：ytsgabcde001@2925.com'
    },
    // 日文翻译
    ja: {
        // 页头部分
        'popular-games': '人気のゲーム',
        'more-games': 'その他のゲーム',
        'fullscreen': '全画面表示',

        // 游戏信息部分
        'game-features': 'ゲームの特徴',
        'how-to-play': '遊び方',
        'what-players-love': 'プレイヤーの声',
        'faq': 'よくある質問',

        // 游戏特点部分 - 更新为Othello Five游戏特点
        'feature-1': '古典的なオセロ/リバーシの戦略ゲームプレイ',
        'feature-2': 'スマートで直感的なユーザーインターフェース',
        'feature-3': 'すべてのプレイヤーに適した複数の難易度レベル',
        'feature-4': 'AIと対戦するシングルプレイヤーモード',
        'feature-5': '視覚的なフィードバックを備えた美しいボードデザイン',
        'feature-6': '学びやすく習得が難しい戦略的な深さ',

        // 游戏操作指南部分 - 更新为Othello Five操作指南
        'controls': '有効なスペースをクリックして石を置きます。有効な手は、あなたの石の間に相手の石を挟むことで相手の石を捕獲する必要があります。',
        'control-1': 'マウスクリック：有効なスペースに石を置く',
        'control-2': '有効な手：石を置ける場所がハイライト表示される',
        'control-3': '捕獲：あなたの石の間に相手の石を挟む',
        'control-4': '勝利：ゲーム終了時に自分の色の石が最も多い',

        // 游戏技巧部分 - 新增Othello Five游戏技巧
        'tip-1': '可能な限りボードの角と端を支配する',
        'tip-2': '数手先を考えて戦略的な罠を仕掛ける',
        'tip-3': '少ない石を裏返す手の方が戦略的な場合もある',
        'tip-4': 'ゲーム序盤では捕獲を最大化するよりもボードポジションに集中する',

        // 常见问题解答部分
        'faq-1-q': 'このゲームは無料ですか？',
        'faq-1-a': 'はい、当プラットフォームのすべてのゲームは完全に無料です！',
        'faq-2-q': '友達と一緒にプレイできますか？',
        'faq-2-a': 'はい、マルチプレイヤーモードで友達を招待できます。',
        'faq-3-q': 'システム要件は何ですか？',
        'faq-3-a': 'このゲームはほとんどの最新ブラウザでスムーズに動作します。最高の体験を得るにはChromeまたはFirefoxをお勧めします。',
        'faq-4-q': '進行状況はどのように保存されますか？',
        'faq-4-a': 'ログインすると、進行状況は自動的に保存されます。実績を追跡するためにアカウントを作成してください。',

        // 页脚部分
        'copyright': '© 2024 Othello Five. 全権利所有。',
        'contact-us': 'お問い合わせ：ytsgabcde001@2925.com'
    },
    // 韩文翻译
    ko: {
        // 页头部分
        'popular-games': '인기 게임',
        'more-games': '더 많은 게임',
        'fullscreen': '전체 화면',

        // 游戏信息部分
        'game-features': '게임 특징',
        'how-to-play': '게임 방법',
        'what-players-love': '플레이어 리뷰',
        'faq': '자주 묻는 질문',

        // 游戏特点部分 - 更新为Othello Five游戏特点
        'feature-1': '클래식 오델로/리버시 전략 게임플레이',
        'feature-2': '세련되고 직관적인 사용자 인터페이스',
        'feature-3': '모든 플레이어를 위한 다양한 난이도 수준',
        'feature-4': 'AI 상대와의 싱글 플레이어 모드',
        'feature-5': '명확한 시각적 피드백이 있는 아름다운 보드 디자인',
        'feature-6': '배우기 쉽지만 마스터하기 어려운 전략적 깊이',

        // 游戏操作指南部分 - 更新为Othello Five操作指南
        'controls': '유효한 공간을 클릭하여 디스크를 놓습니다. 유효한 이동은 새로 놓은 디스크와 이미 보드에 있는 다른 디스크 사이에 상대방의 디스크를 끼워 넣어 포획해야 합니다.',
        'control-1': '마우스 클릭: 유효한 공간에 디스크 놓기',
        'control-2': '유효한 이동: 디스크를 놓을 수 있는 위치가 강조 표시됨',
        'control-3': '포획: 디스크를 놓아 상대방 조각을 자신의 조각 사이에 끼워 넣기',
        'control-4': '승리: 게임이 끝날 때 자신의 색상 디스크가 가장 많음',

        // 游戏技巧部分 - 新增Othello Five游戏技巧
        'tip-1': '가능한 한 보드의 모서리와 가장자리를 제어하세요',
        'tip-2': '몇 단계 앞을 생각하여 전략적 함정을 설정하세요',
        'tip-3': '때로는 더 적은 디스크를 뒤집는 이동이 더 전략적일 수 있습니다',
        'tip-4': '게임 초반에는 포획을 최대화하기보다 보드 위치에 집중하세요',

        // 常见问题解答部分
        'faq-1-q': '이 게임은 무료인가요?',
        'faq-1-a': '네, 저희 플랫폼의 모든 게임은 완전히 무료입니다!',
        'faq-2-q': '친구와 함께 플레이할 수 있나요?',
        'faq-2-a': '네, 멀티플레이어 모드에서 친구를 초대할 수 있습니다.',
        'faq-3-q': '시스템 요구 사항은 무엇인가요?',
        'faq-3-a': '이 게임은 대부분의 최신 브라우저에서 원활하게 실행됩니다. 최상의 경험을 위해 Chrome 또는 Firefox를 사용하는 것이 좋습니다.',
        'faq-4-q': '진행 상황은 어떻게 저장되나요?',
        'faq-4-a': '로그인하면 진행 상황이 자동으로 저장됩니다. 업적을 추적하려면 계정을 만드세요.',

        // 页脚部分
        'copyright': '© 2024 Othello Five. 모든 권리 보유.',
        'contact-us': '문의하기：ytsgabcde001@2925.com'
    },
    // 西班牙语翻译
    es: {
        // 页头部分
        'popular-games': 'Juegos Populares',
        'more-games': 'Más Juegos',
        'fullscreen': 'Pantalla Completa',

        // 游戏信息部分
        'game-features': 'Características del Juego',
        'how-to-play': 'Cómo Jugar',
        'what-players-love': 'Lo que Aman los Jugadores',
        'faq': 'Preguntas Frecuentes',

        // 游戏特点部分 - 更新为Othello Five游戏特点
        'feature-1': 'Juego de estrategia clásico de Othello/Reversi',
        'feature-2': 'Interfaz de usuario elegante e intuitiva',
        'feature-3': 'Múltiples niveles de dificultad para todos los jugadores',
        'feature-4': 'Modo de un jugador contra oponentes de IA',
        'feature-5': 'Hermoso diseño de tablero con retroalimentación visual',
        'feature-6': 'Profundidad estratégica fácil de aprender pero difícil de dominar',

        // 游戏操作指南部分 - 更新为Othello Five操作指南
        'controls': 'Haz clic en espacios válidos para colocar tu ficha. Un movimiento válido debe capturar al menos una de las fichas de tu oponente flanqueándolas entre tu ficha recién colocada y otra de tus fichas ya en el tablero.',
        'control-1': 'Clic del ratón: Coloca tu ficha en un espacio válido',
        'control-2': 'Movimientos válidos: Los espacios resaltados muestran dónde puedes colocar tu ficha',
        'control-3': 'Captura: Coloca fichas para atrapar piezas del oponente entre las tuyas',
        'control-4': 'Ganar: Ten la mayoría de las fichas de tu color cuando termine el juego',

        // 游戏技巧部分 - 新增Othello Five游戏技巧
        'tip-1': 'Controla las esquinas y los bordes del tablero siempre que sea posible',
        'tip-2': 'Piensa varios movimientos por adelantado para establecer trampas estratégicas',
        'tip-3': 'A veces, hacer un movimiento que voltea menos fichas puede ser más estratégico',
        'tip-4': 'Concéntrate en la posición del tablero en el juego temprano en lugar de maximizar las capturas',

        // 常见问题解答部分
        'faq-1-q': '¿Este juego es gratuito?',
        'faq-1-a': '¡Sí, todos los juegos en nuestra plataforma son completamente gratuitos!',
        'faq-2-q': '¿Puedo jugar con amigos?',
        'faq-2-a': 'Sí, puedes invitar a amigos a jugar juntos en modo multijugador.',
        'faq-3-q': '¿Cuáles son los requisitos del sistema?',
        'faq-3-a': 'El juego funciona sin problemas en la mayoría de los navegadores modernos. Recomendamos usar Chrome o Firefox para obtener la mejor experiencia.',
        'faq-4-q': '¿Cómo guardo mi progreso?',
        'faq-4-a': 'Tu progreso se guarda automáticamente cuando inicias sesión. Asegúrate de crear una cuenta para realizar un seguimiento de tus logros.',

        // 页脚部分
        'copyright': '© 2024 Othello Five. Todos los derechos reservados.',
        'contact-us': 'Contáctanos：ytsgabcde001@2925.com'
    }
};

/**
 * 更新网站语言函数
 * 根据选择的语言代码更新页面上所有带有data-i18n属性的元素文本
 * @param {string} lang - 语言代码（en, zh, ja, ko, es）
 */
function updateLanguage(lang) {
    // 查找所有带有data-i18n属性的元素，并更新其文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // 获取翻译键名
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key]; // 设置对应语言的文本
        }
    });

    // 更新HTML文档的lang属性，有助于屏幕阅读器和搜索引擎识别页面语言
    document.documentElement.lang = lang;

    // 更新语言按钮的激活状态，高亮显示当前选中的语言
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // 移除所有按钮的激活状态
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active'); // 为当前语言按钮添加激活状态
        }
    });

    // 将用户语言偏好保存到本地存储，下次访问时自动应用
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 为页面元素添加data-i18n属性，标记需要翻译的文本
        // 页面导航和标题
        if (document.querySelector('.game-links h2')) {
            document.querySelector('.game-links h2').setAttribute('data-i18n', 'popular-games');
        }
        if (document.querySelector('.mini-games h2')) {
            document.querySelector('.mini-games h2').setAttribute('data-i18n', 'more-games');
        }
        if (document.querySelector('.fullscreen-btn')) {
            document.querySelector('.fullscreen-btn').setAttribute('data-i18n', 'fullscreen');
        }

        // 游戏信息部分标题
        if (document.querySelector('.game-features h3')) {
            document.querySelector('.game-features h3').setAttribute('data-i18n', 'game-features');
        }
        if (document.querySelector('.how-to-play h3')) {
            document.querySelector('.how-to-play h3').setAttribute('data-i18n', 'how-to-play');
        }
        if (document.querySelector('.player-reviews h3')) {
            document.querySelector('.player-reviews h3').setAttribute('data-i18n', 'what-players-love');
        }
        if (document.querySelector('.faq h3')) {
            document.querySelector('.faq h3').setAttribute('data-i18n', 'faq');
        }

        // 游戏特点列表
        const featureItems = document.querySelectorAll('.game-features ul li');
        if (featureItems && featureItems.length > 0) {
            featureItems.forEach((item, index) => {
                item.setAttribute('data-i18n', `feature-${index + 1}`);
            });
        }

        // 游戏操作指南
        if (document.querySelector('.how-to-play p')) {
            document.querySelector('.how-to-play p').setAttribute('data-i18n', 'controls');
        }

        // 操作指南列表
        const controlItems = document.querySelectorAll('.how-to-play ul li');
        if (controlItems && controlItems.length > 0) {
            controlItems.forEach((item, index) => {
                item.setAttribute('data-i18n', `control-${index + 1}`);
            });
        }

        // 游戏技巧列表
        const tipItems = document.querySelectorAll('.game-tips ul li');
        if (tipItems && tipItems.length > 0) {
            tipItems.forEach((item, index) => {
                item.setAttribute('data-i18n', `tip-${index + 1}`);
            });
        }

        // FAQ问题和答案
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems && faqItems.length > 0) {
            faqItems.forEach((item, index) => {
                const question = item.querySelector('h4');
                const answer = item.querySelector('p');
                if (question) {
                    question.setAttribute('data-i18n', `faq-${index + 1}-q`);
                }
                if (answer) {
                    answer.setAttribute('data-i18n', `faq-${index + 1}-a`);
                }
            });
        }

        // 页脚版权信息
        if (document.querySelector('.copyright p:last-child')) {
            document.querySelector('.copyright p:last-child').setAttribute('data-i18n', 'contact-us');
        }
    } catch (error) {
        console.error('Error initializing language settings:', error);
    }

    // 为所有语言按钮添加点击事件监听器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang'); // 获取按钮的语言代码
            updateLanguage(lang); // 更新网站语言
        });
    });

    // 加载用户偏好语言或默认使用英语
    // 从本地存储中获取之前保存的语言偏好，如果没有则默认为英语
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(preferredLang); // 应用语言设置
});
