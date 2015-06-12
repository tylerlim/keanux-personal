'use strict';

var model = require('../models2');

// Clear Database
model.Post.remove({}, function (err) {
  model.User.remove({}, function (err) {
    console.log('Database Clear');

    CreateData();
  });
});

// Create Data
function CreateData() {
  new model.User({
    name: 'keanyc',
    nickname: 'KeaNy',
    provider: 'Facebook',
    loginId: '10204525184038018',
    photo: 'https://graph.facebook.com/keanyc/picture?width=120&height=120'
  }).save()
    .then(function (user) {

      new model.Post({
        title: '0到1 121/365',
        subtitle: '凡事起頭難',
        content: '0到1，無中生有，在什麼也沒有的情況下，要怎麼變出東西來，靠的就是想像力，還有充分的利用現有資源。<div><br></div><div>我的工作是網站設計，主要就是必須先了解需求，了解有哪些功能，一個項目一個項目的構思大概需要的實作方法和時間，然後逐一從無到有的建構，一行一行的程式編寫出每個功能，透過軟體編譯將寫好的程式變成0與1，再進行各層次的溝通，從程式語言到機器語言再回到人機介面，一連串的拆解與組合，在一次又一次的工程專案中，我看到的是藉由持續不斷的完成0到1，將每個細節精密的打造後產出的作品，在每個項目的起頭都是最困難的開始，因為沒有一個支撐點，就是容易產生放棄的念頭，或著不知道該從哪一點下手。</div><div><br></div><div>也因為經歷過了無數個工作項目，才深刻的感受到，喔，其實就下手就對了，先把1完成，別想太多，做的很差也沒關係，太簡單更好，總之先求有，然後到了10的時候再回頭調整，到了20再來，30...40...80，最後終究會到100，假設100是盡頭，是完美的數字，那就再重來一次，可是這次是Level 2的1。</div><div><br></div><div>困難的從0到1，其實就是可以變得很簡單，別想太多，做就對了，更重要的是別一下子想的太龐大把自己都嚇傻了什麼也不敢做，真的要做，就把龐大的項目細分到馬上就能做的程度，現在就可以做，先有個開始，再來逐一評估剩下的還需要花多少時間、人力和資源。</div><div><br></div><div>總之，做就對了。Just do it!</div>',
        user: user
      }).save()
        .then(function (post, count) {
          new model.Post({
            title: '思考的陷阱 122/365',
            subtitle: '',
            content: '我從很小，大概是幼稚園的時候，就開始有清醒夢的經驗，清醒夢是在睡覺做夢時，在夢的情境中發現自己在作夢，然後開始能夠任意靠著想像力造夢。清醒夢很有趣，但這篇不是要說這件事，我要說的是發現自己在作夢的這個能力，其實是個脫困的求生本能。<div><br></div><div>會這樣想也是因為我的第一個清醒夢的那一個發現的瞬間，夢到的情境是被恐龍追到黑暗的地下室，我躲起來無處可逃，因為太害怕而眼睛閉上，就在閉上後，我就從夢裡醒來發現我在作夢，這個夢在很多個晚上都發生，不知道十幾次還是幾十次後，我在夢裡就慢慢從我知道要逃到地下室，到我到了地下室後恐龍就會不見，最後變成我知道這只是夢，恐龍不是真的，然後我在夢裡把恐龍變成我的外婆。</div><div><br></div><div>我因為知道原來我是能夠改變夢的，慢慢我了解到現實世界也是能夠改變想法而改變對世界的看法，思考的陷阱就是像夢一樣，好像一直都在進行著，腦袋裡好多念頭跟思緒，一個人說了什麼話，發生了什麼事，我會自然的按照我的個性，我所學到的反應去反應，但當我有能力的意識到，忽然發現，這樣自然其實並不自然，其實我正在思考的陷阱中，沒有擺脫掉束縛我的慣性，以為所有人事物的存在都是不得懷疑的，無法改變的。</div><div><br></div><div>不是不能改變，只是還沒有意識到，我本身的意識和思想改變了，一切都會跟著改變。</div>',
            user: user
          }).save()
            .then(function (post, count) {
              new model.Post({
                title: '問題的答案必須由自己告訴自己 123/365',
                subtitle: '',
                content: '小孩出生了，我時常在想之後她長大了，一定會像我自己小時候一樣，時常充滿著好奇心的詢問一個接著一個的問題，從這是什麼那是什麼開始，再到為什麼要這樣和那樣，然後一定會再問到我不一定聽得懂她的問題，然後我就會說這句話 - &nbsp;＂孩子，你必須學會開始去探索屬於自己的答案＂。<div><br></div><div>印象中，我的父母親教會了我許多事情，教會了我如何游泳，教會了我如何騎車，帶著我學了大大小小的事情，但終究會到達他們的極限，或著說，我喜歡的，我走的路跟他們也完全都不一樣，慢慢我長大成年，當然我就也必須學會自己獨立思考跟解決問題。在這人生學習的過程中是永無止境的，越學也會發現自己從前的無知，而最後會開始懷疑自己是否真的明白了什麼，又真的學習到了什麼，彷彿只是冰山一角，自己也只是略懂罷了。</div><div><br></div><div>人生充滿著疑問，數不盡的問題人類花費若干年都持續的在探索著，從浩瀚的宇宙到極小的細胞，充滿著我們不知道的領域，或許每天都看著以為很熟悉的事物，其實都有滿滿的未知等待著我們發現，那又怎麼可能只是三言兩語可以輕易回答一些問題，這些曾經擁有的答案其實都只是其中一個可能性，而生命的可能性是無數的，自己告訴自己的答案才是最真實，因為是自己所發現到，親身體驗出來的。</div><div><br></div><div>保持好奇心，對於問題的答案永遠都存在好奇，是人最寶貴的資產，當人類失去了好奇心，不再探索問題，就只是像萬物一樣單純的活著，多沒意思不是嗎？</div><div><br></div><blockquote class="post-pullquote">"Stay Hungry, Stay Foolish" -&nbsp;Steve Job</blockquote>',
                user: user
              }).save()
                .then(function (post, count) {
                  console.log('Seed Generate');

                  process.exit();
                });
            });
        });
    });
}


