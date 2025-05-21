// 等待DOM完全加载后执行脚本，确保所有HTML元素都已加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面中需要操作的DOM元素
    const fullscreenBtn = document.getElementById('fullscreenBtn'); // 全屏按钮
    const mainGameFrame = document.getElementById('mainGameFrame'); // 主游戏iframe
    const gameContainer = document.querySelector('.game-container'); // 游戏容器
    const miniGames = document.querySelectorAll('.mini-game'); // 所有小游戏元素
    const playButtons = document.querySelectorAll('.play-button'); // 所有播放按钮
    const leftGames = document.querySelector('.left-games'); // 左侧游戏列表
    const rightGames = document.querySelector('.right-games'); // 右侧游戏列表
    
    // 确保左右游戏栏与中间游戏区域高度一致的函数
    function syncSidebarHeights() {
        if (gameContainer && leftGames && rightGames) {
            const gameHeight = gameContainer.offsetHeight;
            if (gameHeight > 0) {
                leftGames.style.height = gameHeight + 'px';
                rightGames.style.height = gameHeight + 'px';
            }
        }
    }
    
    // 页面加载时同步高度
    syncSidebarHeights();
    
    // 窗口大小改变时同步高度
    window.addEventListener('resize', syncSidebarHeights);
    
    // 游戏加载完成后同步高度
    if (mainGameFrame) {
        mainGameFrame.addEventListener('load', syncSidebarHeights);
    }
    
    // 全屏功能实现
    // 检查全屏按钮和主游戏iframe是否存在
    if (fullscreenBtn && mainGameFrame) {
        // 为全屏按钮添加点击事件监听器
        fullscreenBtn.addEventListener('click', function() {
            // 尝试使用不同浏览器的全屏API，确保兼容性
            if (mainGameFrame.requestFullscreen) {
                mainGameFrame.requestFullscreen(); // 标准全屏API
            } else if (mainGameFrame.webkitRequestFullscreen) {
                mainGameFrame.webkitRequestFullscreen(); // Webkit内核浏览器(Chrome, Safari)
            } else if (mainGameFrame.msRequestFullscreen) {
                mainGameFrame.msRequestFullscreen(); // IE/Edge浏览器
            }
        });
    }
    
    // 加载游戏的通用函数
    function loadGame(game) {
        // 显示加载状态
        if (gameContainer) {
            gameContainer.classList.add('loading');
        }
        
        // 从data-src属性获取游戏链接
        const gameSrc = game.dataset.src;
        
        // 检查和更新主游戏iframe
        if (mainGameFrame) {
            // 更新主游戏iframe的src属性，加载选中的游戏
            mainGameFrame.src = gameSrc;
            mainGameFrame.style.opacity = '0';
            
            // 更新游戏信息区域的标题，显示当前选中的游戏名称
            const gameTitle = game.querySelector('.game-cover img').alt;
            const titleElement = document.querySelector('.game-info h2');
            if (titleElement) {
                titleElement.textContent = gameTitle;
                titleElement.classList.add('updating');
                setTimeout(() => {
                    titleElement.classList.remove('updating');
                }, 300);
            }
            
            // 平滑滚动到主游戏区域，提供良好的用户体验
            mainGameFrame.scrollIntoView({ behavior: 'smooth' });
        }
        
        // 更新UI状态 - 移除其他游戏的active状态，为当前游戏添加active状态
        miniGames.forEach(miniGame => {
            miniGame.classList.remove('active');
        });
        game.classList.add('active');
        
        // 游戏加载后再次同步高度
        setTimeout(syncSidebarHeights, 500);
    }
    
    // 小游戏选择功能实现
    // 为每个小游戏添加点击事件监听器
    miniGames.forEach(game => {
        // 为整个游戏卡片添加点击事件
        game.addEventListener('click', function(event) {
            // 忽略播放按钮点击，因为它有自己的事件处理器
            if (!event.target.closest('.play-button')) {
                loadGame(game);
            }
        });
        
        // 为游戏卡片中的播放按钮添加点击事件
        const playButton = game.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', function(event) {
                event.stopPropagation(); // 阻止事件冒泡，避免触发游戏卡片的点击事件
                loadGame(game);
            });
        }
    });
    
    // 处理iframe加载完成事件
    // 当游戏加载完成后，移除加载状态，显示游戏内容
    if (mainGameFrame) {
        mainGameFrame.addEventListener('load', function() {
            setTimeout(() => {
                this.style.opacity = '1'; // 设置透明度为1，显示游戏
                if (gameContainer) {
                    gameContainer.classList.remove('loading'); // 移除加载状态类
                    // 游戏加载完成后同步高度
                    syncSidebarHeights();
                }
            }, 300); // 延迟300毫秒，确保过渡效果平滑
        });
    }
    
    // 移动端菜单功能实现
    // 创建移动端菜单按钮
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn'; // 设置类名
    mobileMenuBtn.innerHTML = '☰'; // 设置汉堡菜单图标
    document.body.appendChild(mobileMenuBtn); // 添加到页面
    
    // 获取左侧游戏列表和右侧游戏列表
    // 已在顶部定义，这里不需要重复获取
    
    // 跟踪当前打开的菜单
    let currentMenu = null;
    
    // 为移动端菜单按钮添加点击事件监听器
    mobileMenuBtn.addEventListener('click', function() {
        if (currentMenu) {
            // 如果有菜单已打开，则关闭它
            currentMenu.classList.remove('active');
            currentMenu = null;
        } else if (leftGames) {
            // 打开左侧游戏列表
            leftGames.classList.add('active');
            currentMenu = leftGames;
        }
    });
    
    // 点击菜单外区域关闭菜单
    document.addEventListener('click', function(event) {
        // 检查点击是否在菜单外部
        if (currentMenu && 
            !event.target.closest('.left-games') && 
            !event.target.closest('.right-games') && 
            !event.target.closest('.mobile-menu-btn')) {
            currentMenu.classList.remove('active'); // 关闭菜单
            currentMenu = null; // 重置当前菜单状态
        }
    });
    
    // 添加右侧游戏列表切换按钮
    if (rightGames) {
        const rightGamesToggle = document.createElement('button');
        rightGamesToggle.className = 'mobile-menu-btn right-menu-btn'; // 设置类名
        rightGamesToggle.innerHTML = '🎮'; // 设置游戏手柄图标
        rightGamesToggle.style.right = '1rem'; // 设置位置在右侧
        rightGamesToggle.style.left = 'auto'; // 清除左侧位置
        document.body.appendChild(rightGamesToggle); // 添加到页面
        
        // 为右侧游戏列表按钮添加点击事件监听器
        rightGamesToggle.addEventListener('click', function() {
            if (currentMenu) {
                // 如果有菜单已打开，则关闭它
                currentMenu.classList.remove('active');
                if (currentMenu === rightGames) {
                    currentMenu = null;
                    return;
                }
            }
            // 打开右侧游戏列表
            rightGames.classList.add('active');
            currentMenu = rightGames;
        });
    }
    
    // 处理所有iframe的加载状态
    // 获取页面中所有iframe元素
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        // 为每个iframe添加加载完成事件监听器
        iframe.addEventListener('load', function() {
            setTimeout(() => {
                this.style.opacity = '1'; // 加载完成后显示内容
            }, 200);
        });
        
        // 设置初始状态为透明，并添加过渡效果
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // 为所有锚点链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // 为每个锚点链接添加点击事件监听器
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转行为
            // 获取目标元素
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // 平滑滚动到目标位置
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 再次确保初始化时高度同步
    setTimeout(syncSidebarHeights, 1000);
}); 