<?php
/**
 * Snippet Name: Relook - Sustainable Fashion Barter Platform
 * Snippet Suffix: 6127d7ff
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Register shortcode to display the Relook platform
add_shortcode('relook_platform_6127d7ff', 'render_relook_platform_6127d7ff');

function render_relook_platform_6127d7ff() {
    ob_start();
    ?>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        relookPink: '#FF2257',
                        relookBlack: '#000000',
                        relookGray: '#F5F5F5',
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <div id="relook-app-6127d7ff" class="bg-white text-black min-h-screen font-sans antialiased selection:bg-relookPink selection:text-white">
        
        <!-- Announcement Bar -->
        <div class="bg-relookBlack text-white text-xs py-2 px-4 text-center tracking-wider font-semibold uppercase">
            ⚡ Post for free & swap with zero fees! | Free shipping on your first match ⚡
        </div>

        <!-- Main Header -->
        <header class="border-b border-gray-200 sticky top-0 bg-white z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20 gap-4">
                    <!-- Logo -->
                    <div class="flex-shrink-0 cursor-pointer" onclick="switchTab_6127d7ff('home')">
                        <span class="text-3xl font-black tracking-tighter text-relookBlack">RE<span class="text-relookPink">LOOK</span></span>
                    </div>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-xl mx-4 hidden md:block">
                        <div class="relative">
                            <input type="text" placeholder="Search trends, brands, or wardrobes..." class="w-full bg-relookGray text-sm pl-4 pr-10 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-relookBlack border border-transparent focus:border-relookBlack transition-all">
                            <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-relookBlack">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Navigation & Actions -->
                    <div class="flex items-center gap-6">
                        <button onclick="switchTab_6127d7ff('explore')" class="text-gray-700 hover:text-relookPink font-medium text-sm flex items-center gap-1">
                            <i class="fa-solid fa-fire text-lg text-relookPink"></i>
                            <span class="hidden sm:inline">Swipe & Match</span>
                        </button>
                        <button onclick="switchTab_6127d7ff('wardrobe')" class="text-gray-700 hover:text-relookBlack font-medium text-sm flex items-center gap-2">
                            <i class="fa-regular fa-user text-lg"></i>
                            <span class="hidden sm:inline">My Wardrobe</span>
                        </button>
                        <button onclick="switchTab_6127d7ff('chat')" class="relative text-gray-700 hover:text-relookBlack font-medium text-sm flex items-center gap-2">
                            <i class="fa-regular fa-comment text-lg"></i>
                            <span class="absolute -top-1 -right-1 bg-relookPink text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
                            <span class="hidden sm:inline">Chats</span>
                        </button>
                        <button onclick="openUploadModal_6127d7ff()" class="bg-relookBlack hover:bg-relookPink text-white text-xs font-bold uppercase py-3 px-6 tracking-widest transition-all duration-300">
                            Upload Item
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sub Navigation -->
            <div class="border-t border-gray-100 bg-white py-3 overflow-x-auto">
                <div class="max-w-7xl mx-auto px-4 flex gap-8 text-xs font-bold uppercase tracking-wider whitespace-nowrap justify-center md:justify-start">
                    <a href="#" class="text-relookPink border-b-2 border-relookPink pb-1">New In</a>
                    <a href="#" class="text-gray-600 hover:text-relookBlack">Women</a>
                    <a href="#" class="text-gray-600 hover:text-relookBlack">Men</a>
                    <a href="#" class="text-gray-600 hover:text-relookBlack">Accessories</a>
                    <a href="#" class="text-gray-600 hover:text-relookBlack">Trends</a>
                    <a href="#" class="text-gray-600 hover:text-relookBlack">Premium Brands</a>
                </div>
            </div>
        </header>

        <!-- VIEW CONTAINER -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <!-- 1. HOME VIEW -->
            <div id="view-home" class="relook-view_6127d7ff space-y-16">
                <!-- Hero Banner / Carousel -->
                <div class="relative bg-relookGray overflow-hidden h-[450px] flex items-center">
                    <div class="absolute inset-0 z-0">
                        <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629006.png" alt="Sustainable fashion" class="w-full h-full object-cover opacity-90">
                        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    </div>
                    <div class="relative z-10 max-w-lg pl-8 sm:pl-16 text-white space-y-6">
                        <span class="bg-relookPink text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5">Circular Barter</span>
                        <h1 class="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">Your next look is waiting for you</h1>
                        <p class="text-sm sm:text-base text-gray-200 font-medium">Trade your pre-owned clothes for fresh fashion styles in excellent condition. No money needed, just mutual matches.</p>
                        <div class="flex gap-4">
                            <button onclick="switchTab_6127d7ff('explore')" class="bg-white hover:bg-relookPink hover:text-white text-relookBlack font-bold uppercase text-xs tracking-widest py-4 px-8 transition-all duration-300">Start Swiping</button>
                            <button onclick="openUploadModal_6127d7ff()" class="border-2 border-white hover:border-relookPink hover:bg-relookPink text-white font-bold uppercase text-xs tracking-widest py-4 px-8 transition-all duration-300">Upload Wardrobe</button>
                        </div>
                    </div>
                </div>

                <!-- Tinder-Style Discovery Peek Section -->
                <section class="space-y-6">
                    <div class="flex justify-between items-end border-b border-gray-200 pb-4">
                        <div>
                            <h2 class="text-2xl font-black uppercase tracking-tight">Instant Discovery</h2>
                            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Swipe right to trade, left to pass</p>
                        </div>
                        <button onclick="switchTab_6127d7ff('explore')" class="text-xs font-bold uppercase tracking-widest hover:text-relookPink transition-colors">
                            Enter Fullscreen Swipe <i class="fa-solid fa-arrow-right ml-1"></i>
                        </button>
                    </div>

                    <!-- Embedded Swipe Container -->
                    <div class="flex justify-center py-6 bg-relookGray/40 border border-gray-100">
                        <div class="relative w-[340px] h-[480px] bg-white shadow-2xl overflow-hidden group">
                            <img id="swipe-img_6127d7ff" src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629008.png" alt="Swiping Dress" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                            
                            <!-- Swipe Indicators -->
                            <div id="swipe-like-badge_6127d7ff" class="absolute top-6 left-6 border-4 border-emerald-500 text-emerald-500 font-black text-2xl uppercase px-4 py-1.5 rotate-[-12deg] tracking-widest opacity-0 pointer-events-none transition-opacity duration-200">LIKE</div>
                            <div id="swipe-pass-badge_6127d7ff" class="absolute top-6 right-6 border-4 border-relookPink text-relookPink font-black text-2xl uppercase px-4 py-1.5 rotate-[12deg] tracking-widest opacity-0 pointer-events-none transition-opacity duration-200">PASS</div>

                            <!-- Overlay Details -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">Like New 9/10</span>
                                    <span class="bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5">Size M</span>
                                </div>
                                <h3 id="swipe-title_6127d7ff" class="text-lg font-bold leading-tight">Vintage Denim Trucker Jacket</h3>
                                <p id="swipe-brand_6127d7ff" class="text-xs text-gray-300 font-semibold uppercase tracking-wider mt-1">Levis Premium</p>
                                
                                <!-- Swipe Actions -->
                                <div class="flex justify-center gap-6 mt-6">
                                    <button onclick="triggerSwipe_6127d7ff('pass')" class="w-14 h-14 rounded-full bg-white text-relookPink flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                                        <i class="fa-solid fa-xmark text-2xl"></i>
                                    </button>
                                    <button onclick="triggerSwipe_6127d7ff('like')" class="w-14 h-14 rounded-full bg-relookPink text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                                        <i class="fa-solid fa-heart text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SHEIN-Style Product Catalog Grid -->
                <section class="space-y-6">
                    <div class="border-b border-gray-200 pb-4">
                        <h2 class="text-2xl font-black uppercase tracking-tight">New in Swaps</h2>
                        <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Latest wardrobe pieces added by our circular fashion community</p>
                    </div>

                    <!-- 4-Column Catalog Grid -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer relative" onclick="openProductDetail_6127d7ff('vintage-denim-jacket', 'Vintage Denim Jacket', 'http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629008.png', 'Levis Premium', 'Size M', 'Like New 9/10', 'Sofia_M')">
                            <div class="relative bg-relookGray overflow-hidden aspect-[3/4]">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629008.png" alt="Vintage Denim Jacket" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <span class="absolute top-2 left-2 bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">Like New 9/10</span>
                                <button onclick="event.stopPropagation(); toggleSaveItem_6127d7ff(this)" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-relookBlack hover:text-relookPink flex items-center justify-center shadow-md transition-colors">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <div class="mt-4 space-y-1">
                                <div class="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <span>Levis Premium</span>
                                    <span class="text-relookBlack">M</span>
                                </div>
                                <h3 class="text-sm font-semibold text-relookBlack group-hover:underline truncate">Vintage Denim Jacket</h3>
                                <p class="text-xs text-gray-400">Offered by @Sofia_M</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer relative" onclick="openProductDetail_6127d7ff('summer-floral-dress', 'Floral Summer Dress', 'http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png', 'Zara Trend', 'Size S', 'Excellent 10/10', 'Elena_99')">
                            <div class="relative bg-relookGray overflow-hidden aspect-[3/4]">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png" alt="Floral Summer Dress" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <span class="absolute top-2 left-2 bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">Excellent 10/10</span>
                                <button onclick="event.stopPropagation(); toggleSaveItem_6127d7ff(this)" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-relookBlack hover:text-relookPink flex items-center justify-center shadow-md transition-colors">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <div class="mt-4 space-y-1">
                                <div class="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <span>Zara Trend</span>
                                    <span class="text-relookBlack">S</span>
                                </div>
                                <h3 class="text-sm font-semibold text-relookBlack group-hover:underline truncate">Floral Summer Dress</h3>
                                <p class="text-xs text-gray-400">Offered by @Elena_99</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer relative" onclick="openProductDetail_6127d7ff('leather-ankle-boots', 'Black Leather Boots', 'http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675942.png', 'Dr. Martens', 'Size 38', 'Very Good 8/10', 'Alex_Styles')">
                            <div class="relative bg-relookGray overflow-hidden aspect-[3/4]">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675942.png" alt="Black Leather Boots" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <span class="absolute top-2 left-2 bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">Very Good 8/10</span>
                                <button onclick="event.stopPropagation(); toggleSaveItem_6127d7ff(this)" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-relookBlack hover:text-relookPink flex items-center justify-center shadow-md transition-colors">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <div class="mt-4 space-y-1">
                                <div class="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <span>Dr. Martens</span>
                                    <span class="text-relookBlack">38</span>
                                </div>
                                <h3 class="text-sm font-semibold text-relookBlack group-hover:underline truncate">Black Leather Boots</h3>
                                <p class="text-xs text-gray-400">Offered by @Alex_Styles</p>
                            </div>
                        </div>

                        <!-- Item 4 -->
                        <div class="group cursor-pointer relative" onclick="openProductDetail_6127d7ff('designer-handbag', 'Designer Leather Bag', 'http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675944.png', 'Jacquemus', 'One Size', 'Like New 9.5/10', 'Val_V')">
                            <div class="relative bg-relookGray overflow-hidden aspect-[3/4]">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675944.png" alt="Designer Leather Bag" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                                <span class="absolute top-2 left-2 bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">Like New 9.5/10</span>
                                <button onclick="event.stopPropagation(); toggleSaveItem_6127d7ff(this)" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-relookBlack hover:text-relookPink flex items-center justify-center shadow-md transition-colors">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <div class="mt-4 space-y-1">
                                <div class="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <span>Jacquemus</span>
                                    <span class="text-relookBlack">U</span>
                                </div>
                                <h3 class="text-sm font-semibold text-relookBlack group-hover:underline truncate">Designer Leather Bag</h3>
                                <p class="text-xs text-gray-400">Offered by @Val_V</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- How It Works Infographic -->
                <section class="space-y-6">
                    <div class="border-b border-gray-200 pb-4 text-center md:text-left">
                        <h2 class="text-2xl font-black uppercase tracking-tight">How It Works</h2>
                        <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Join the circular barter swap movement in three easy steps</p>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8 items-center bg-relookGray p-8 rounded-none">
                        <div class="space-y-8">
                            <div class="flex items-start gap-4">
                                <span class="flex-shrink-0 bg-relookBlack text-white w-10 h-10 flex items-center justify-center font-black text-lg">1</span>
                                <div>
                                    <h3 class="font-bold uppercase tracking-wider text-sm">Upload Your Clothes</h3>
                                    <p class="text-xs text-gray-500 mt-1">List your pre-owned gems in excellent condition to build your digital barter wardrobe catalog.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <span class="flex-shrink-0 bg-relookPink text-white w-10 h-10 flex items-center justify-center font-black text-lg">2</span>
                                <div>
                                    <h3 class="font-bold uppercase tracking-wider text-sm">Swipe and Like</h3>
                                    <p class="text-xs text-gray-500 mt-1">Browse our infinite wardrobe collections. Swipe right on items you want, and left on those you pass.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <span class="flex-shrink-0 bg-relookBlack text-white w-10 h-10 flex items-center justify-center font-black text-lg">3</span>
                                <div>
                                    <h3 class="font-bold uppercase tracking-wider text-sm">Match and Chat</h3>
                                    <p class="text-xs text-gray-500 mt-1">Once a mutual match occurs (you both like each other's items), the private barter chat unlocks. Pitch swaps and coordinate delivery!</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative overflow-hidden aspect-[4/3] shadow-lg border border-gray-200">
                            <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675945.png" alt="Barter Infographic" class="w-full h-full object-cover">
                        </div>
                    </div>
                </section>
            </div>

            <!-- 2. EXPLORE / SWIPE VIEW -->
            <div id="view-explore" class="relook-view_6127d7ff hidden max-w-xl mx-auto py-12">
                <div class="text-center space-y-2 mb-8">
                    <h2 class="text-2xl font-black uppercase tracking-tight">Discovery Swipes</h2>
                    <p class="text-xs text-gray-500 uppercase tracking-widest">Find mutual matches to exchange pieces</p>
                </div>

                <!-- Fullscreen Swiping Box -->
                <div class="relative w-full aspect-[3/4.2] bg-white shadow-2xl border border-gray-100 overflow-hidden">
                    <img id="explore-img_6127d7ff" src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png" alt="Explore Swipe Item" class="w-full h-full object-cover transition-transform duration-500">
                    
                    <!-- Overlays -->
                    <div id="explore-like-badge_6127d7ff" class="absolute top-10 left-10 border-4 border-emerald-500 text-emerald-500 font-black text-3xl uppercase px-5 py-2 rotate-[-12deg] tracking-widest opacity-0 pointer-events-none transition-opacity duration-200">LIKE</div>
                    <div id="explore-pass-badge_6127d7ff" class="absolute top-10 right-10 border-4 border-relookPink text-relookPink font-black text-3xl uppercase px-5 py-2 rotate-[12deg] tracking-widest opacity-0 pointer-events-none transition-opacity duration-200">PASS</div>

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                        <div class="flex gap-2 mb-3">
                            <span class="bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">Excellent 10/10</span>
                            <span class="bg-white/20 text-white text-[10px] font-semibold px-3 py-1">Size S</span>
                        </div>
                        <h3 id="explore-title_6127d7ff" class="text-2xl font-black tracking-tight leading-none uppercase">Floral Summer Dress</h3>
                        <p id="explore-brand_6127d7ff" class="text-sm text-gray-300 font-bold uppercase tracking-wider mt-1.5">Zara Trend</p>
                        <p class="text-xs text-gray-400 mt-2">Owner: @Elena_99 • Trades from Bogota</p>

                        <!-- Controls -->
                        <div class="flex justify-center gap-8 mt-8">
                            <button onclick="triggerExploreSwipe_6127d7ff('pass')" class="w-16 h-16 rounded-full bg-white text-relookPink flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                                <i class="fa-solid fa-xmark text-3xl"></i>
                            </button>
                            <button onclick="triggerExploreSwipe_6127d7ff('like')" class="w-16 h-16 rounded-full bg-relookPink text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                                <i class="fa-solid fa-heart text-3xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. PRODUCT DETAIL VIEW -->
            <div id="view-product-detail" class="relook-view_6127d7ff hidden space-y-12">
                <!-- Back Button -->
                <button onclick="switchTab_6127d7ff('home')" class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-relookPink transition-colors">
                    <i class="fa-solid fa-arrow-left"></i> Back to Grid
                </button>

                <div class="grid md:grid-cols-12 gap-12">
                    <!-- Gallery (Left 7 Cols) -->
                    <div class="md:col-span-7 space-y-4">
                        <div class="aspect-[3/4] bg-relookGray">
                            <img id="detail-main-img_6127d7ff" src="" alt="Product detail" class="w-full h-full object-cover">
                        </div>
                        <!-- Thumbnail track placeholder -->
                        <div class="grid grid-cols-4 gap-4">
                            <div class="aspect-square bg-relookGray border border-relookBlack cursor-pointer">
                                <img id="detail-thumb-1_6127d7ff" src="" alt="Thumbnail" class="w-full h-full object-cover opacity-80 hover:opacity-100">
                            </div>
                        </div>
                    </div>

                    <!-- Info & Action Details (Right 5 Cols) -->
                    <div class="md:col-span-5 space-y-8">
                        <div class="space-y-4 border-b border-gray-100 pb-6">
                            <div class="flex justify-between items-start">
                                <span id="detail-brand_6127d7ff" class="text-xs font-bold uppercase tracking-wider text-gray-500"></span>
                                <span id="detail-condition_6127d7ff" class="bg-relookPink text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1"></span>
                            </div>
                            <h1 id="detail-title_6127d7ff" class="text-3xl font-black uppercase tracking-tight leading-none"></h1>
                            <div class="flex items-center gap-4 text-sm mt-2">
                                <span class="font-semibold">Size: <span id="detail-size_6127d7ff" class="font-bold"></span></span>
                            </div>
                        </div>

                        <!-- Barter Concept Proposition -->
                        <div class="bg-relookGray p-6 border border-gray-100 space-y-4">
                            <h3 class="font-black text-sm uppercase tracking-wider">Barter Proposition</h3>
                            <p class="text-xs text-gray-600">This item is swap-only. Initiate a swap proposal by proposing a matching asset from your public wardrobe.</p>
                            <button onclick="proposeSwap_6127d7ff()" class="w-full bg-relookBlack hover:bg-relookPink text-white font-bold uppercase text-xs tracking-widest py-4 transition-all duration-300">
                                Propose Match / Offer Swap
                            </button>
                        </div>

                        <!-- Owner Details -->
                        <div class="space-y-4 border-t border-b border-gray-100 py-6">
                            <h3 class="font-bold text-xs uppercase tracking-wider text-gray-500">Owner Profile</h3>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-relookPink/10 text-relookPink flex items-center justify-center font-bold text-sm uppercase">
                                        <span id="detail-owner-initial_6127d7ff"></span>
                                    </div>
                                    <div>
                                        <h4 id="detail-owner_6127d7ff" class="font-bold text-sm"></h4>
                                        <p class="text-[11px] text-gray-400">★ 4.9 Rating • 12 Swaps Completed</p>
                                    </div>
                                </div>
                                <button onclick="switchTab_6127d7ff('chat')" class="text-xs font-bold uppercase tracking-wider text-relookPink hover:underline">
                                    Send Pitch
                                </button>
                            </div>
                        </div>

                        <!-- Sizing Chart Accoridan -->
                        <div class="border-b border-gray-100 pb-4">
                            <details class="group">
                                <summary class="flex justify-between items-center font-bold text-xs uppercase tracking-wider text-relookBlack cursor-pointer py-2">
                                    Size & Measurement Guide
                                    <span class="transition-transform group-open:rotate-180">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </span>
                                </summary>
                                <div class="mt-4 text-xs text-gray-600 space-y-2">
                                    <p>Our sizing standard matches universal retail formats. Here are the specifics for this fit:</p>
                                    <ul class="list-disc pl-4 space-y-1">
                                        <li>Chest Width: Flat measure equivalent</li>
                                        <li>Overall Length: Standard tailoring standard</li>
                                        <li>Fit Profile: Relaxed vintage vibe</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. PROFILE / WARDROBE VIEW -->
            <div id="view-wardrobe" class="relook-view_6127d7ff hidden space-y-12">
                <!-- Dashboard Profile Banner -->
                <div class="flex flex-col md:flex-row gap-8 justify-between items-center border-b border-gray-200 pb-8">
                    <div class="flex items-center gap-6">
                        <div class="w-24 h-24 rounded-full bg-relookBlack text-white flex items-center justify-center font-black text-3xl shadow-xl border-2 border-relookPink">
                            ME
                        </div>
                        <div class="space-y-1.5">
                            <h2 class="text-2xl font-black uppercase tracking-tight">My Wardrobe Dashboard</h2>
                            <p class="text-xs text-gray-500 uppercase tracking-widest">Circular barter rating: <span class="text-relookPink font-bold">★ 5.0 (4 matches)</span></p>
                        </div>
                    </div>
                    <button onclick="openUploadModal_6127d7ff()" class="bg-relookPink hover:bg-relookBlack text-white font-bold uppercase text-xs tracking-widest py-4 px-8 transition-all duration-300">
                        Upload New Item
                    </button>
                </div>

                <!-- Tabs Section -->
                <div class="space-y-8">
                    <div class="flex border-b border-gray-200 text-xs font-bold uppercase tracking-wider overflow-x-auto whitespace-nowrap gap-8">
                        <button onclick="switchProfileTab_6127d7ff('listings')" id="p-tab-listings_6127d7ff" class="text-relookPink border-b-2 border-relookPink pb-3">My Listings (2)</button>
                        <button onclick="switchProfileTab_6127d7ff('matches')" id="p-tab-matches_6127d7ff" class="text-gray-500 hover:text-relookBlack pb-3">My Matches (1)</button>
                        <button onclick="switchProfileTab_6127d7ff('saved')" id="p-tab-saved_6127d7ff" class="text-gray-500 hover:text-relookBlack pb-3">Saved Items (<span id="saved-count_6127d7ff">0</span>)</button>
                    </div>

                    <!-- listings Sub-view -->
                    <div id="profile-listings_6127d7ff" class="profile-tab-content_6127d7ff grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Own Item 1 -->
                        <div class="bg-white border border-gray-100">
                            <div class="aspect-[3/4] bg-relookGray relative">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675942.png" alt="Ankle boots" class="w-full h-full object-cover">
                                <span class="absolute top-2 left-2 bg-relookBlack text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">ACTIVE</span>
                            </div>
                            <div class="p-4">
                                <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500">Dr. Martens</h3>
                                <h4 class="text-sm font-semibold truncate">Black Leather Boots</h4>
                                <p class="text-xs text-relookPink font-bold mt-2">2 Likes Received</p>
                            </div>
                        </div>
                        <!-- Own Item 2 -->
                        <div class="bg-white border border-gray-100">
                            <div class="aspect-[3/4] bg-relookGray relative">
                                <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675944.png" alt="Jacquemus Bag" class="w-full h-full object-cover">
                                <span class="absolute top-2 left-2 bg-relookBlack text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">ACTIVE</span>
                            </div>
                            <div class="p-4">
                                <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500">Jacquemus</h3>
                                <h4 class="text-sm font-semibold truncate">Designer Leather Bag</h4>
                                <p class="text-xs text-relookPink font-bold mt-2">5 Likes Received</p>
                            </div>
                        </div>
                    </div>

                    <!-- matches Sub-view -->
                    <div id="profile-matches_6127d7ff" class="profile-tab-content_6127d7ff hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Match Item Card -->
                        <div class="border-2 border-relookPink p-6 bg-relookPink/[0.02] flex items-center justify-between gap-4">
                            <div class="flex items-center gap-4">
                                <div class="relative flex-shrink-0">
                                    <img src="http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png" alt="Floral Summer Dress" class="w-16 h-16 object-cover border-2 border-white shadow-md">
                                    <div class="absolute -bottom-2 -right-2 bg-relookPink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="bg-relookPink text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5">MUTUAL MATCH</span>
                                    <h4 class="font-black uppercase tracking-tight mt-1">Floral Summer Dress</h4>
                                    <p class="text-xs text-gray-500">Matched with @Elena_99</p>
                                </div>
                            </div>
                            <button onclick="switchTab_6127d7ff('chat')" class="bg-relookBlack hover:bg-relookPink text-white text-xs font-bold uppercase tracking-widest py-3 px-6 transition-all">
                                Open Chat
                            </button>
                        </div>
                    </div>

                    <!-- saved Sub-view -->
                    <div id="profile-saved_6127d7ff" class="profile-tab-content_6127d7ff hidden">
                        <div id="saved-items-grid_6127d7ff" class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <!-- Dynamically loaded via Javascript saving mechanism -->
                            <p class="text-xs text-gray-500 italic col-span-full py-6">No saved items yet. Tap the hearts in catalog view to save wardrobe pieces here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 5. MATCH CHAT VIEW -->
            <div id="view-chat" class="relook-view_6127d7ff hidden max-w-4xl mx-auto border border-gray-200 bg-white grid md:grid-cols-12 h-[600px]">
                <!-- Channels Panel (Left 4 Cols) -->
                <div class="md:col-span-4 border-r border-gray-200 flex flex-col h-full">
                    <div class="p-4 border-b border-gray-100">
                        <h3 class="font-black text-sm uppercase tracking-wider">Active Trades</h3>
                    </div>
                    <div class="flex-1 overflow-y-auto divide-y divide-gray-100">
                        <!-- Thread 1 -->
                        <div class="p-4 bg-relookPink/[0.04] border-l-4 border-relookPink flex items-center gap-3 cursor-pointer">
                            <div class="w-10 h-10 rounded-full bg-relookPink text-white flex items-center justify-center font-bold text-sm uppercase">
                                EL
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-baseline">
                                    <h4 class="font-bold text-sm truncate">Elena_99</h4>
                                    <span class="text-[10px] text-gray-400">12:44 PM</span>
                                </div>
                                <p class="text-xs text-gray-500 truncate">I can ship my floral dress tomorrow if we swap for the leather boots!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chat Window (Right 8 Cols) -->
                <div class="md:col-span-8 flex flex-col h-full bg-relookGray/20">
                    <!-- Header -->
                    <div class="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-relookPink text-white flex items-center justify-center font-bold text-xs uppercase">
                                EL
                            </div>
                            <div>
                                <h4 class="font-bold text-sm">Elena_99</h4>
                                <p class="text-[10px] text-emerald-500 font-semibold">Online • Safe Barter Guarantee</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="p-2 text-gray-400 hover:text-relookBlack"><i class="fa-solid fa-flag"></i></button>
                        </div>
                    </div>

                    <!-- Messages Area -->
                    <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages_6127d7ff">
                        <div class="flex justify-center">
                            <span class="bg-relookBlack text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">Mutual Match Discovered - Chat Unlocked</span>
                        </div>
                        <!-- Incoming -->
                        <div class="flex items-start gap-3 max-w-[80%]">
                            <div class="w-8 h-8 rounded-full bg-relookPink text-white flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                                EL
                            </div>
                            <div class="bg-white p-3 shadow-sm border border-gray-100">
                                <p class="text-xs text-gray-700">Hey! I love your black boots. Would you be down to trade them for my Zara floral summer dress?</p>
                                <span class="text-[9px] text-gray-400 block mt-1">12:42 PM</span>
                            </div>
                        </div>
                        <!-- Outgoing -->
                        <div class="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
                            <div class="w-8 h-8 rounded-full bg-relookBlack text-white flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                                ME
                            </div>
                            <div class="bg-relookBlack text-white p-3 shadow-sm">
                                <p class="text-xs">Hi Elena! Yes, that sounds like a great deal! The boots are size 38 and in perfect condition.</p>
                                <span class="text-[9px] text-gray-400 block mt-1">12:43 PM</span>
                            </div>
                        </div>
                        <!-- Incoming -->
                        <div class="flex items-start gap-3 max-w-[80%]">
                            <div class="w-8 h-8 rounded-full bg-relookPink text-white flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                                EL
                            </div>
                            <div class="bg-white p-3 shadow-sm border border-gray-100">
                                <p class="text-xs text-gray-700">Awesome, my dress fits size S/M perfectly. I can ship my floral dress tomorrow if we swap for the leather boots!</p>
                                <span class="text-[9px] text-gray-400 block mt-1">12:44 PM</span>
                            </div>
                        </div>
                    </div>

                    <!-- Message Form Input -->
                    <div class="p-4 bg-white border-t border-gray-200">
                        <form onsubmit="sendMessage_6127d7ff(event)" class="flex gap-4">
                            <input type="text" id="chat-input_6127d7ff" placeholder="Type your swap proposal..." class="flex-1 bg-relookGray text-xs pl-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-relookBlack">
                            <button type="submit" class="bg-relookPink hover:bg-relookBlack text-white text-xs font-bold uppercase tracking-widest px-6 transition-all">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </main>

        <!-- FOOTER -->
        <footer class="bg-relookBlack text-white border-t border-gray-800 mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                <div class="space-y-4">
                    <span class="text-2xl font-black tracking-tighter">RE<span class="text-relookPink">LOOK</span></span>
                    <p class="text-xs text-gray-400">The ultimate circular fashion barter marketplace swap app inspired by global catalogs & modern dating discovery modes.</p>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-wider mb-4">Browse Marketplace</h4>
                    <ul class="text-xs text-gray-400 space-y-2">
                        <li><a href="#" class="hover:text-white">Newest Garments</a></li>
                        <li><a href="#" class="hover:text-white">Most Liked</a></li>
                        <li><a href="#" class="hover:text-white">Active Swap Channels</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-wider mb-4">Our Mission</h4>
                    <ul class="text-xs text-gray-400 space-y-2">
                        <li><a href="#" class="hover:text-white">Circular Fashion</a></li>
                        <li><a href="#" class="hover:text-white">Zero Financial Fees</a></li>
                        <li><a href="#" class="hover:text-white">Eco Savings Metric</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-xs uppercase tracking-wider mb-4">Join the Community</h4>
                    <p class="text-xs text-gray-400 mb-4">Upload 3 clothing pieces to unlock unlimited premium swiping!</p>
                    <button onclick="openUploadModal_6127d7ff()" class="w-full bg-relookPink hover:bg-white hover:text-relookBlack text-white text-xs font-bold uppercase tracking-widest py-3 transition-all duration-300">
                        Launch Wardrobe
                    </button>
                </div>
            </div>
            <div class="bg-neutral-950 py-4 text-center text-[10px] text-gray-600 border-t border-neutral-900">
                &copy; 2026 RELOOK circular economy system. Built for sustainable fashion bartering.
            </div>
        </footer>

        <!-- UPLOAD MODAL -->
        <div id="upload-modal_6127d7ff" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white max-w-md w-full p-8 relative shadow-2xl transition-transform duration-300 scale-95" id="upload-modal-content_6127d7ff">
                <button onclick="closeUploadModal_6127d7ff()" class="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
                <div class="space-y-6">
                    <div class="text-center">
                        <h3 class="text-2xl font-black uppercase tracking-tight">Upload to Wardrobe</h3>
                        <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Add your pre-owned gems to start bartering</p>
                    </div>
                    
                    <form onsubmit="handleUploadSubmit_6127d7ff(event)" class="space-y-4">
                        <!-- Photo Drop Box -->
                        <div class="border-2 border-dashed border-gray-200 hover:border-relookPink p-6 text-center cursor-pointer transition-colors bg-relookGray/30">
                            <i class="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>
                            <p class="text-xs font-bold uppercase tracking-wider text-gray-600">Drag clothes photos here</p>
                            <p class="text-[10px] text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                        </div>
                        
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Item Name</label>
                            <input type="text" required placeholder="e.g. Oversized Leather Jacket" class="w-full bg-relookGray text-xs pl-4 py-3 border border-transparent focus:border-relookBlack focus:outline-none">
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Brand</label>
                                <input type="text" required placeholder="e.g. Mango" class="w-full bg-relookGray text-xs pl-4 py-3 border border-transparent focus:border-relookBlack focus:outline-none">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Size</label>
                                <select class="w-full bg-relookGray text-xs pl-4 pr-8 py-3 border border-transparent focus:border-relookBlack focus:outline-none">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">Condition Assessment</label>
                            <select class="w-full bg-relookGray text-xs pl-4 pr-8 py-3 border border-transparent focus:border-relookBlack focus:outline-none">
                                <option>Like New 9.5/10</option>
                                <option>Excellent 9/10</option>
                                <option>Very Good 8/10</option>
                                <option>Good 7/10</option>
                            </select>
                        </div>

                        <button type="submit" class="w-full bg-relookBlack hover:bg-relookPink text-white font-bold uppercase text-xs tracking-widest py-4 transition-all duration-300">
                            Submit Listing
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <!-- Interactive Scripting -->
    <script>
        // Discovery Database Array
        const swipeItems_6127d7ff = [
            {
                title: "Vintage Denim Trucker Jacket",
                brand: "Levis Premium",
                img: "http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629008.png",
                condition: "Like New 9/10",
                size: "M"
            },
            {
                title: "Floral Summer Dress",
                brand: "Zara Trend",
                img: "http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png",
                condition: "Excellent 10/10",
                size: "S"
            },
            {
                title: "Black Leather Boots",
                brand: "Dr. Martens",
                img: "http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675942.png",
                condition: "Very Good 8/10",
                size: "38"
            },
            {
                title: "Designer Leather Bag",
                brand: "Jacquemus",
                img: "http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851675944.png",
                condition: "Like New 9.5/10",
                size: "One Size"
            }
        ];
        
        let currentSwipeIdx_6127d7ff = 0;
        let currentExploreIdx_6127d7ff = 1;
        const savedItemsDb_6127d7ff = [];

        // Routing Views Engine
        function switchTab_6127d7ff(viewName) {
            document.querySelectorAll('.relook-view_6127d7ff').forEach(view => {
                view.classList.add('hidden');
            });
            const activeView = document.getElementById('view-' + viewName);
            if (activeView) {
                activeView.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Tinder Demo logic (Home view peek)
        function triggerSwipe_6127d7ff(direction) {
            const cardImg = document.getElementById('swipe-img_6127d7ff');
            const cardTitle = document.getElementById('swipe-title_6127d7ff');
            const cardBrand = document.getElementById('swipe-brand_6127d7ff');
            const likeBadge = document.getElementById('swipe-like-badge_6127d7ff');
            const passBadge = document.getElementById('swipe-pass-badge_6127d7ff');

            // Trigger visual badges
            if (direction === 'like') {
                likeBadge.style.opacity = 1;
            } else {
                passBadge.style.opacity = 1;
            }

            setTimeout(() => {
                likeBadge.style.opacity = 0;
                passBadge.style.opacity = 0;
                
                // Advance index
                currentSwipeIdx_6127d7ff = (currentSwipeIdx_6127d7ff + 1) % swipeItems_6127d7ff.length;
                const nextItem = swipeItems_6127d7ff[currentSwipeIdx_6127d7ff];
                
                cardImg.src = nextItem.img;
                cardTitle.textContent = nextItem.title;
                cardBrand.textContent = nextItem.brand;
            }, 300);
        }

        // Tinder Swipe (Full Explore view)
        function triggerExploreSwipe_6127d7ff(direction) {
            const cardImg = document.getElementById('explore-img_6127d7ff');
            const cardTitle = document.getElementById('explore-title_6127d7ff');
            const cardBrand = document.getElementById('explore-brand_6127d7ff');
            const likeBadge = document.getElementById('explore-like-badge_6127d7ff');
            const passBadge = document.getElementById('explore-pass-badge_6127d7ff');

            if (direction === 'like') {
                explore-like-badge_6127d7ff.style.opacity = 1;
            } else {
                explore-pass-badge_6127d7ff.style.opacity = 1;
            }

            setTimeout(() => {
                explore-like-badge_6127d7ff.style.opacity = 0;
                explore-pass-badge_6127d7ff.style.opacity = 0;
                
                currentExploreIdx_6127d7ff = (currentExploreIdx_6127d7ff + 1) % swipeItems_6127d7ff.length;
                const nextItem = swipeItems_6127d7ff[currentExploreIdx_6127d7ff];
                
                cardImg.src = nextItem.img;
                cardTitle.textContent = nextItem.title;
                cardBrand.textContent = nextItem.brand;
            }, 300);
        }

        // Routing to Product Details Page
        function openProductDetail_6127d7ff(id, title, img, brand, size, cond, owner) {
            document.getElementById('detail-title_6127d7ff').textContent = title;
            document.getElementById('detail-main-img_6127d7ff').src = img;
            document.getElementById('detail-thumb-1_6127d7ff').src = img;
            document.getElementById('detail-brand_6127d7ff').textContent = brand;
            document.getElementById('detail-size_6127d7ff').textContent = size;
            document.getElementById('detail-condition_6127d7ff').textContent = cond;
            document.getElementById('detail-owner_6127d7ff').textContent = '@' + owner;
            document.getElementById('detail-owner-initial_6127d7ff').textContent = owner.charAt(0);

            switchTab_6127d7ff('product-detail');
        }

        // Save / Wishlist Management
        function toggleSaveItem_6127d7ff(btn) {
            const icon = btn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.className = 'fa-solid fa-heart text-relookPink';
                // Mimic saving item
                savedItemsDb_6127d7ff.push({
                    title: "Curated Piece",
                    img: "http://relookwordpress.lndo.site/wp-content/uploads/2026/10/image-1791851629009.png"
                });
            } else {
                icon.className = 'fa-regular fa-heart';
                savedItemsDb_6127d7ff.pop();
            }
            updateSavedView_6127d7ff();
        }

        function updateSavedView_6127d7ff() {
            const countEl = document.getElementById('saved-count_6127d7ff');
            countEl.textContent = savedItemsDb_6127d7ff.length;
            const grid = document.getElementById('saved-items-grid_6127d7ff');
            
            if (savedItemsDb_6127d7ff.length === 0) {
                grid.innerHTML = `<p class="text-xs text-gray-500 italic col-span-full py-6">No saved items yet. Tap the hearts in catalog view to save wardrobe pieces here.</p>`;
            } else {
                grid.innerHTML = savedItemsDb_6127d7ff.map(item => `
                    <div class="bg-white border border-gray-100">
                        <div class="aspect-[3/4] bg-relookGray relative">
                            <img src="${item.img}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-4">
                            <h4 class="text-sm font-semibold truncate">${item.title}</h4>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Dashboard Profile Sub-tabs switcher
        function switchProfileTab_6127d7ff(tabName) {
            document.querySelectorAll('.profile-tab-content_6127d7ff').forEach(view => {
                view.classList.add('hidden');
            });
            
            const activeProfileTab = document.getElementById('profile-' + tabName);
            if (activeProfileTab) {
                activeProfileTab.classList.remove('hidden');
            }
            
            // Style states
            const tabs = ['listings', 'matches', 'saved'];
            tabs.forEach(t => {
                const el = document.getElementById('p-tab-' + t + '_6127d7ff');
                if (t === tabName) {
                    el.className = "text-relookPink border-b-2 border-relookPink pb-3";
                } else {
                    el.className = "text-gray-500 hover:text-relookBlack pb-3";
                }
            });
        }

        // Propose Swap action flow triggers chat directly
        function proposeSwap_6127d7ff() {
            alert("Trade pitch initiated! Opening direct match trade channel chat.");
            switchTab_6127d7ff('chat');
        }

        // Chat application mechanisms
        function sendMessage_6127d7ff(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input_6127d7ff');
            const text = input.value.trim();
            if (!text) return;

            const messagesContainer = document.getElementById('chat-messages_6127d7ff');
            const newMsg = document.createElement('div');
            newMsg.className = "flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse";
            newMsg.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-relookBlack text-white flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                    ME
                </div>
                <div class="bg-relookBlack text-white p-3 shadow-sm">
                    <p class="text-xs">${text}</p>
                    <span class="text-[9px] text-gray-400 block mt-1">Just now</span>
                </div>
            `;
            messagesContainer.appendChild(newMsg);
            input.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Modal upload controllers
        function openUploadModal_6127d7ff() {
            const modal = document.getElementById('upload-modal_6127d7ff');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('opacity-100');
                document.getElementById('upload-modal-content_6127d7ff').classList.remove('scale-95');
            }, 10);
        }

        function closeUploadModal_6127d7ff() {
            const modal = document.getElementById('upload-modal_6127d7ff');
            modal.classList.remove('opacity-100');
            document.getElementById('upload-modal-content_6127d7ff').classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function handleUploadSubmit_6127d7ff(e) {
            e.preventDefault();
            alert("Item successfully uploaded to your personal circular wardrobe! It is now swipable by the community.");
            closeUploadModal_6127d7ff();
            switchTab_6127d7ff('wardrobe');
        }
    </script>
    <?php
    return ob_get_clean();
}
