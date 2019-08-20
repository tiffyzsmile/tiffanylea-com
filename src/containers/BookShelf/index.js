/* eslint-disable */
import React from 'react';
import Page from 'components/Page';
import books from 'data/books';

const BookShelf = () => {
  const newBooks = books
    .map(book => {
      return {
        title: book.title,
        year: book.book_published,
        isbn: book.isbn,
        imageLarge: book.book_large_image_url,
        imageMedium: book.book_medium_image_url,
        imageSmall: book.book_small_image_url,
        user_rating: book.user_rating
      };
    })
    .sort((a, b) => (a.year < b.year ? 1 : -1));
  // console.log(JSON.stringify(newBooks));
  console.log(newBooks);
  return (
    <Page title="Portfolio" description="Portfolio">
      <h1>Bookshelf</h1>
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416385239l/23588216._SX98_.jpg"
        alt="Responsible Responsive Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353180593l/16154956._SX98_.jpg"
        alt="Getting the Hang of Web Typography"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372044596l/17297097._SX98_.jpg"
        alt="Learning Node.js: A Hands-On Guide to Building Web Applications in JavaScript"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378681799l/18430541._SX98_.jpg"
        alt="Backbone.Js Cookbook"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1338397450l/14618492._SX98_.jpg"
        alt="The Designers web handbook: what you need to know create htmlFor the web"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400372523l/15791660._SX98_.jpg"
        alt="Mastering Magento"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347812182l/16028951._SX98_.jpg"
        alt="Latest Web Design Trends, The Road To Good Website Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342002805l/15746409._SX98_.jpg"
        alt="Effective Programming: More Than Writing Code"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385241162l/13615604._SX98_.jpg"
        alt="Pro jQuery"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328761516l/11854699._SX98_.jpg"
        alt="jQuery Mobile"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348679123l/9926258._SX98_.jpg"
        alt="The New Edge in Knowledge: How Knowledge Management Is Changing the Way We Do Business"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348360985l/9967766._SX98_.jpg"
        alt="Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348603744l/11353689._SX98_.jpg"
        alt="HTML5 &amp; CSS3 For The Real World"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328753507l/9807206._SX98_.jpg"
        alt="The Book of CSS3: A Developers guide to the future of web design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344729016l/14514317._SX98_.jpg"
        alt="Mobile Design Pattern Gallery: UI Patterns for Mobile Applications"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377297864l/16343603._SX98_.jpg"
        alt="Convert!: Designing Web Sites to Increase Traffic and Conversion"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1291401033l/9815906._SX98_.jpg"
        alt="Responsive Web Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355043328l/11933017._SX98_.jpg"
        alt="Html5 for Masterminds: How to Take Advantage of Html5 to Create Amazing Websites and Revolutionary Applications"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348518941l/11208710._SX98_.jpg"
        alt="Convert!: Designing Web Sites to Increase Traffic and Conversion"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348673821l/11285530._SX98_.jpg"
        alt="Learning Html5 Game Programming: A Hands-On Guide to Building Online Games Using Canvas, Svg, and Webgl"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318982714l/12910749._SX98_.jpg"
        alt="Mobile First"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344667465l/11476621._SX98_.jpg"
        alt="Build Mobile Websites and Apps for Smart Devices"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348700218l/10778139._SX98_.jpg"
        alt="100 Things Every Designer Needs to Know about People"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1291400563l/9815847._SX98_.jpg"
        alt="The Elements of Content Strategy"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318982331l/12910715._SX98_.jpg"
        alt="Designing for Emotion"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387732820l/11122719._SX98_.jpg"
        alt="Ranking Number One: 50 Essential SEO Tips To Boost Your Search Engine Results"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348049976l/8630713._SX98_.jpg"
        alt="The Web Design Pocket Guide Boxed Set: Includes the HTML Pocket Guide, the CSS Pocket Guide, and the JavaScript Pocket Guide"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347691359l/8218891._SX98_.jpg"
        alt="Beginning ASP.NET 4: In C# and VB"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1288723572l/8881346._SX98_.jpg"
        alt="Simple and Usable Web, Mobile, and Interaction Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328761594l/8680041._SX98_.jpg"
        alt="Conversion Optimization: The Art and Science of Converting Prospects to Customers"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1290436811l/9748697._SX98_.jpg"
        alt="CSS3 For Web Designers"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347657619l/7970507._SX98_.jpg"
        alt="Resonate: Present Visual Stories that Transform Audiences"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349042911l/8763576._SX98_.jpg"
        alt="Vector Basic Training: A Systematic Creative Process for Building Precision Vector Artwork (Voices that Matter)"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347557478l/10087112._SX98_.jpg"
        alt="Magento 1.4 Development Cookbook"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327947398l/10992678._SX98_.jpg"
        alt="How to create selling e-commerce websites"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320548348l/8496352._SX98_.jpg"
        alt="You Say More Than You Think: Use the New Body Language to Get What You Want!, The 7-Day Plan"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355041181l/7558003._SX98_.jpg"
        alt="White Space Is Not Your Enemy: A Beginners guide to communicating visually through graphic, web and multimedia design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349061952l/8144298._SX98_.jpg"
        alt="The Web Designers idea book volume 2: more of the best themes, trends and styles in website design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400886907l/10105427._SX98_.jpg"
        alt="Undercover User Experience Design: Learn How to Do Great UX Work with Tiny Budgets, No Time, and Limited Support"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320990114l/10393955._SX98_.jpg"
        alt="The Smashing Book 2"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348013186l/7626953._SX98_.jpg"
        alt="InterACT with Web Standards: A holistic approach to web design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1284658134l/8148515._SX98_.jpg"
        alt="HTML5 for Web Designers"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328753497l/8077039._SX98_.jpg"
        alt="Map Scripting 101"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348663465l/8352701._SX98_.jpg"
        alt="Introducing HTML5"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372037952l/8886607._SX98_.jpg"
        alt="Clout: The Art and Science of Influential Web Content"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391275636l/6732019._SX98_.jpg"
        alt="Rework"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834836l/6125777._SX98_.jpg"
        alt="Regular Expressions Cookbook"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347783744l/7152835._SX98_.jpg"
        alt="Pull: The Power of the Semantic Web to Transform Your Business"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348468083l/6431791._SX98_.jpg"
        alt="Drupal 6 JavaScript and Jquery"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348062622l/6365004._SX98_.jpg"
        alt="Ultra-Fast ASP.NET: Building Ultra-Fast and Ultra-Scalable Websites Using ASP.NET and SQL Server"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834671l/6386509._SX98_.jpg"
        alt="Mobile Design and Development: Practical Concepts and Techniques for Creating Mobile Sites and Web Apps"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372048296l/6583924._SX98_.jpg"
        alt="Handcrafted CSS: More Bulletproof Web Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1267693415l/7654219._SX98_.jpg"
        alt="Succeeding with Agile: Software Development Using Scrum"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327929248l/10628673._SX98_.jpg"
        alt="Modular Web Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327863017l/8194488._SX98_.jpg"
        alt="The Little Black Book of Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328315677l/6469445._SX98_.jpg"
        alt="A Project Guide to UX Design: For user experience designers in the field or in the making (Voices That Matter)"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270393331l/7980561._SX98_.jpg"
        alt="Web Anatomy: Interaction Design Frameworks That Work"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356607298l/12652832._SX98_.jpg"
        alt="Digging Into WordPress"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383771684l/6518085._SX98_.jpg"
        alt="Pro Git"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867001l/2497816._SX98_.jpg"
        alt="Designing for the Social Web"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348871299l/10912154._SX98_.jpg"
        alt="SEO Made Simple: Strategies for Dominating the Worlds largest search engine"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349054212l/3339815._SX98_SY160_.jpg"
        alt="XML: Visual QuickStart Guide"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347248937l/4479421._SX98_.jpg"
        alt="PHP Object-Oriented Solutions"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763998l/3935037._SX98_.jpg"
        alt="The Principles of Successful Freelancing"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763974l/2357234._SX98_.jpg"
        alt="The Principles of Project Management (SitePoint: Project Management)"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349089173l/2851277._SX98_.jpg"
        alt="Pro Drupal Development: Learn How to Use the Content Management Framework to Create Powerful Customized Web Sites"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328754523l/865420._SX98_.jpg"
        alt="Layout Workbook: A Real-World Guide to Building Pages in Graphic Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348780756l/31958._SX98_.jpg"
        alt="Web Standards Creativity: Innovations in Web Design with Xhtml, Css, and Dom Scripting"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328327011l/6588970._SX98_.jpg"
        alt="Learning ActionScript 3.0"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398032723l/44738._SX98_.jpg"
        alt="Design Elements: A Graphic Style Manual"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328764021l/9322366._SX98_.jpg"
        alt="The Principles of Beautiful Web Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347655278l/849660._SX98_.jpg"
        alt="Adobe Illustrator CS3 Classroom in a Book: The Official Training Workbook from Adobe Systems [With CD-ROM]"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867010l/1546234._SX98_.jpg"
        alt="The Essential Guide to Dreamweaver Cs3 with Css, Ajax, and PHP"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431399322l/22146._SX98_.jpg"
        alt="Prioritizing Web Usability"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431606777l/225111._SX98_.jpg"
        alt="The Laws of Simplicity: Design, Technology, Business, Life"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390091979l/1063671._SX98_.jpg"
        alt="Write Great Code: Volume 2: Thinking Low-Level, Writing High-Level"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327813710l/11553059._SX98_.jpg"
        alt="Getting Real"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348666556l/136868._SX98_.jpg"
        alt="PHP Solutions: Dynamic Web Design Made Easy"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348922630l/852936._SX98_.jpg"
        alt="JavaScript Phrasebook"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386919991l/45578._SX98_.jpg"
        alt="Head Rush Ajax"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401887525l/565._SX98_.jpg"
        alt="The Zen of CSS Design: Visual Enlightenment for the Web"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349034321l/1308547._SX98_.jpg"
        alt="Multimedia For The Web: Creating Digital Excitement, Revealed, Deluxe Education Edition (Revealed)"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400098297l/13528._SX98_.jpg"
        alt="Bulletproof Web Design: Improving flexibility and protecting against worst-case scenarios with XHTML and CSS"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384259305l/344724._SX98_.jpg"
        alt="Designing Interfaces: Patterns for Effective Interaction Design"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348803256l/1104003._SX98_.jpg"
        alt="PHP Phrasebook"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348031968l/349235._SX98_.jpg"
        alt="OOP Demystified"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381963075l/44949._SX98_.jpg"
        alt="Write Great Code: Volume 1: Understanding the Machine"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408309444l/58128._SX98_.jpg"
        alt="Head First Design Patterns"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1284940646l/6512430._SX98_.jpg"
        alt="Designing with Web Standards"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834223l/454692._SX98_.jpg"
        alt="Learning XSLT"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389111239l/45580._SX98_.jpg"
        alt="Bulletproof Ajax"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386924817l/1867._SX98_.jpg"
        alt="The Elements of User Experience: User-Centered Design for the Web (Voices (New Riders)"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331941024l/2952890._SX98_.jpg"
        alt="The Simplicity Shift: Innovative Design Tactics in a Corporate World"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348174430l/163781._SX98_.jpg"
        alt="Web ReDesign 2.0: Workflow that Works"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373961933l/9894314._SX98_.jpg"
        alt="Web usability"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867006l/3368._SX98_.jpg"
        alt="Dont make me think: a common sense approach to web usability"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347258132l/4795641._SX98_.jpg"
        alt="The Object-Oriented Thought Process"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834253l/852919._SY160_.jpg"
        alt="JavaScript Pocket Reference"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328323813l/10875750._SX98_.jpg"
        alt="The Non-Designers design book"
      />
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396837641l/4845._SX98_.jpg"
        alt="Code Complete"
      />
    </Page>
  );
};

export default BookShelf;
