# ellinordhaus.github.io<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seattle Seasons</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>


<section id="landing">
    <div class="image">
        <img src="images/Seattle%20Home%20Page%20Image%20FINAL%20FINAL.png"/>



    </div>
    <div class="about">

        <div class="toolbar">
            <button data-target="#autumn">Autumn</button>
            <button data-target="#winter">Winter</button>
            <button data-target="#spring">Spring</button>
            <button data-target="#summer">Summer</button>
        </div>
        <h1 class="header1">ABOUT</h1>
        <p style="margin-top: -60px" class="AboutText">Welcome to the Emerald City, where every season brings its unique charm to the vibrant city of Seattle!
            Whether you're a coffee connoisseur, a nature enthusiast, or a culture seeker, Seattle has something special
            in store for you year-round. From the crisp colors of fall to the cozy winters, the blooming springs, and the
            sun-kissed summers, Seattle's diverse seasons offer a plethora of activities that will leave you enchanted.
            So, pack your bags, grab your umbrella (just in case), and let's embark on a year-round journey through this
            Pacific Northwest gem. No matter the season, Seattle's warm hospitality and endless adventures await.</p>
        <h1 class="header1">WHEN ARE YOU <br> LOOKING TO VISIT?</h1>
        <div class="button-container">
        <button class="navButt" data-target="#autumn">Autumn</button>
        <button class="navButt" data-target="#winter">Winter</button>
        <button class="navButt" data-target="#spring">Spring</button>
        <button class="navButt" data-target="#summer">Summer</button>
            </div>
    </div>

</section>

<section id="autumn" class="season">
    <h2 class="title" style="margin-left:-35px; margin-top: 310px;">AUTUMN</h2>
    <div class="seasonTextBox">
    <h3 class="seasonTextBlurb">As the leaves turn fiery shades of red and gold, Seattle is transformed into a cozy haven for fall enthusiasts.
        Here are some must-do activities: </h3>
    </div>

    <div class="activityTextbox">
    <h2 class="activityHeader">Fall Foliage at Discovery Park</h2>
        <p class="activityDescription">
            Take a leisurely stroll through Discovery Park, where you can witness the breathtaking contrast of colorful
            leaves against the backdrop of Puget Sound and the Olympic Mountains.
        </p>
    </div>
    <img class="activityImage" src="images/Autumn%201.png" ; onclick="openModal('Fall Foliage at Discovery Park', 'images/Autumn%201.png', 'Discover the enchanting beauty of fall foliage at Discovery Park, Seattle\'s largest public park.'+
'                Meander through the lush, wooded trails as you\'re surrounded by a breathtaking mosaic of red, orange, and yellow leaves.'+
'                The park\'s location on the shores of Puget Sound offers stunning vistas of the water, the Olympic Mountains,'+
'                and the city skyline, making it a perfect spot for capturing the essence of fall.', '#624949')"/>








    <div id="modalBackdrop" class="modal-backdrop">
    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <div class="modal-content">
            <h2 id="modalTitle"></h2>
            <img id="modalImg" src="">
            <p id="modalDesc">
            </p>
        </div>
    </div>
    </div>






    <div class="activityTextbox">
        <h2 class="activityHeader">Pike Place Market</h2>
        <p class="activityDescription">
            Explore the bustling market, where vendors showcase fall's bounty of fresh produce.
            Don't miss the apple cider and artisanal pumpkin treats.
        </p>
    </div>

    <img class="activityImage" src="images/Autumn%202.png" ; onclick="openModal('Pike Place Market', 'images/Autumn%202.png', 'Pike Place Market comes alive with the colors and flavors of fall. Stroll through the bustling market and immerse yourself in the vibrant atmosphere. Farmers\' stalls overflow with crisp apples, plump pumpkins, and freshly harvested vegetables. Don\'t miss the chance to taste local apple cider or indulge in artisanal pumpkin treats crafted by skilled bakers and confectioners.', '#624949')"/>


    <div class="activityTextbox">
        <h2 class="activityHeader">Seattle Cider Tasting</h2>
        <p class="activityDescription">
            Discover the city's craft cider scene with tastings at local cideries. Savor the unique flavors of the season,
            from spiced apple to cranberry-infused ciders.
        </p>
    </div>

    <img class="activityImage" src="images/Autumn%203.png"; onclick="openModal('Seattle Cider Tasting', 'images/Autumn%203.png', 'Seattle\'s craft cider scene comes to life during the fall season. Venture to local cideries and savor the unique flavors of the season. From spiced apple ciders that warm the soul to cranberry-infused concoctions that tantalize the taste buds, you\'ll discover a diverse array of cider offerings that celebrate the best of fall\'s harvest.', '#624949')"/>
</section>




<section id="winter" class="season">
    <h2 class="title" style=" margin-top: 310px;">WINTER</h2>
    <div class="seasonTextBox">
        <h3 class="seasonTextBlurb">When winter arrives, Seattle becomes a magical wonderland with its blend of holiday
            cheer and Pacific Northwest charm. Here's what to do: </h3>
    </div>

    <div class="activityTextbox">
        <h2 class="activityHeader">Snowy Adventures in the Cascades</h2>
        <p class="activityDescription">
            Just a short drive from the city, you can ski or snowboard in the Cascade
            Mountains. Snoqualmie Pass offers excellent slopes for winter sports enthusiasts.
        </p>
    </div>
    <img class="activityImage" src="images/Winter%201.1.jpg" ; onclick="openModal('Snowy Adventures in the Cascades', 'images/Winter%201.1.jpg', 'Just a short drive from Seattle, the Cascade Mountains transform into a winter wonderland. Whether you\'re a seasoned skier or a novice, Snoqualmie Pass offers excellent slopes and trails for winter sports enthusiasts. The glistening snow-covered landscape and crisp mountain air create a magical setting for outdoor adventures.' , '#1D5876')"/>

    <div class="activityTextbox">
        <h2 class="activityHeader">Chihuly Garden and Glass</h2>
        <p class="activityDescription">
            Embrace the warmth of indoor artistry at the Chihuly Garden and Glass Museum in the Seattle Center. Explore
            a world of vibrant glass art, with the Glasshouse showcasing a breathtaking suspended sculpture.
        </p>
    </div>

    <img class="activityImage" src="images/Winter%202.png" ; onclick="openModal('Chihuly Garden and Glass', 'images/Winter%202.png', 'Embrace the warmth of indoor artistry at the Chihuly Garden and Glass Museum in the Seattle Center during winter. Explore a world of vibrant glass art, with the Glasshouse showcasing a breathtaking suspended sculpture. Discover Chihuly\'s glass art in the outdoor gardens, where nature and art harmonize, making it an ideal winter cultural experience.', '#1D5876')"/>


    <div class="activityTextbox">
        <h2 class="activityHeader">Cozy Café Hopping</h2>
        <p class="activityDescription">
            Warm up in Seattle's numerous cozy coffee shops and tea houses. Try unique blends, artisanal hot chocolates,
            and enjoy the comforting ambiance.
        </p>
    </div>

    <img class="activityImage" src="images/Winter%203.png" ; onclick="openModal('Cozy Café Hopping', 'images/Winter%203.png', 'Seattle\'s love affair with coffee extends to the coziest of cafes, perfect for escaping the winter chill. Explore the city\'s vibrant coffee culture as you sample unique blends, artisanal hot chocolates, and handcrafted lattes. The warm, inviting ambiance of these cafes is a welcoming respite during the colder months.', '#1D5876')"/>
</section>

<section id="spring" class="season">
    <h2 class="title" style="margin-left: 10px; margin-top: 310px;">SPRING</h2>
    <div class="seasonTextBox">
        <h3 class="seasonTextBlurb">As the city awakens from its winter slumber, Seattle bursts into bloom during springtime.
            Here's how to make the most of it: </h3>
    </div>

    <div class="activityTextbox">
        <h2 class="activityHeader">Cherry Blossom Viewing</h2>
        <p class="activityDescription">
            Head to the University of Washington's Quad to witness the mesmerizing cherry blossoms in full bloom, a sight
            that rivals Japan's sakura season.
        </p>
    </div>
    <img class="activityImage" src="images/Spring%201.1.jpg" ; onclick="openModal('Cherry Blossom Viewing', 'images/Spring%201.1.jpg', 'Springtime in Seattle is a visual delight as cherry blossoms burst into full bloom. Head to the University of Washington\'s Quad, where you\'ll find rows of cherry trees covered in delicate pink and white blossoms. Strolling through this serene setting feels like stepping into a fairytale, making it a must-visit spot for nature lovers and photographers.', '#B88D81')"/>

    <div class="activityTextbox">
        <h2 class="activityHeader">Mount Rainier</h2>
        <p class="activityDescription">
            Explore the lush trails of Mount Rainier National Park as they start to thaw. The wildflower displays are a
            photographer's dream.</p>
    </div>

    <img class="activityImage" src="images/Spring%202.png" ; onclick="openModal('Mountain Rainier', 'images/Spring%202.png', 'With the thawing of winter\'s snow, the lush trails of Mount Rainier National Park beckon hikers and outdoor enthusiasts. Spring is the perfect time to explore this pristine wilderness, where vibrant wildflowers carpet the meadows in a riot of colors. Hiking in this spectacular setting is a photographer\'s dream come true.', '#B88D81')"/>


    <div class="activityTextbox">
        <h2 class="activityHeader">Boat Tour on Lake Washington</h2>
        <p class="activityDescription">
            Enjoy a scenic boat tour on Lake Washington as the city's parks and waterfronts come alive with vibrant colors.
        </p>
    </div>

    <img class="activityImage" src="images/Spring%203.png" ; onclick="openModal('Boat Tour on Lake Washington', 'images/Spring%203.png', 'As the city\'s parks and waterfronts come alive with vibrant colors, embark on a scenic boat tour on Lake Washington. Cruise along the crystal-clear waters while taking in breathtaking views of the Cascade Mountains. It\'s a serene and rejuvenating experience that allows you to connect with Seattle\'s natural beauty.', '#B88D81')"/>
</section>

<section id="summer" class="season">
    <h2 class="title" style="margin-left:-50px; margin-top: 325px">SUMMER</h2>
    <div class="seasonTextBox">
        <h3 class="seasonTextBlurb">When summer arrives, Seattle's natural beauty shines brightest, and outdoor adventures abound.
            Here's why you should visit during this season:</h3>
    </div>

    <div class="activityTextbox">
        <h2 class="activityHeader">Alki Beach</h2>
        <p class="activityDescription">
            Soak up the sun at Alki Beach, where you can swim, kayak, or simply relax on the sandy shore while taking in
            panoramic views of the city.
        </p>
    </div>
    <img class="activityImage" src="images/Summer%201.png" ; onclick="openModal('Alki Beach', 'images/Summer%201.png', 'Alki Beach comes alive with sun-seekers during the summer months. Located across Elliott Bay from downtown Seattle, it offers a sandy oasis where you can swim, kayak, or simply relax under the sun. The backdrop of the Seattle skyline and the Olympic Mountains creates a picture-perfect setting for your summer adventures.', '#418BA8')"/>

    <div class="activityTextbox">
        <h2 class="activityHeader">Olympic National Park</h2>
        <p class="activityDescription">
            Summer hiking in Olympic National Park offers diverse landscapes, from lush rainforests to alpine meadows
            and rugged coastlines. </p>
    </div>

    <img class="activityImage" src="images/Summer%202.png" ; onclick="openModal('Olympic National Park', 'images/Summer%202.png', 'Summer hiking in Olympic National Park offers diverse landscapes, from lush rainforests to alpine meadows and rugged coastlines. Explore the enchanting Hoh Rainforest with its mossy giants, capture stunning vistas at Hurricane Ridge, or hike along dramatic beaches like Shi Shi and Ruby Beach. With trails for all levels of hikers, it\'s a summer adventure filled with natural beauty and photographic opportunities.', '#418BA8')"/>


    <div class="activityTextbox">
        <h2 class="activityHeader">Ferry to the San Juan Islands</h2>
        <p class="activityDescription">
            Take a ferry ride to the picturesque San Juan Islands, where you can spot whales, kayak in pristine waters,
            and explore charming island communities.</p>
    </div>

    <img class="activityImage" src="images/Summer%203.png" ; onclick="openModal('Ferry to the San Juan Islands', 'images/Summer%203.png', 'Escape the city\'s hustle and bustle with a ferry ride to the picturesque San Juan Islands. Summer is the best time to explore these idyllic islands, where you can spot majestic whales, kayak in pristine waters, and discover charming island communities. Whether you seek wildlife encounters or a taste of island culture, a visit to the San Juan Islands promises a rejuvenating escape in the heart of the Pacific Northwest.', '#418BA8')"/>

</section>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="script.js"></script>





</body>

</html>
