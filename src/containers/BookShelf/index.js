/* eslint-disable */
import React from 'react';
import Page from 'components/Page';
import { H1 } from 'components/Typography';
import 'styles.scss';
// import books from 'data/books';

const BookShelf = () => {
  // const newBooks = books
  //   .map(book => {
  //     return {
  //       title: book.title,
  //       year: book.book_published,
  //       isbn: book.isbn,
  //       imageLarge: book.book_large_image_url,
  //       imageMedium: book.book_medium_image_url,
  //       imageSmall: book.book_small_image_url,
  //       user_rating: book.user_rating
  //     };
  //   })
  //   .sort((a, b) => (a.year < b.year ? 1 : -1));
  // console.log(JSON.stringify(newBooks));
  // console.log(newBooks);
  return (
    <Page title="Bookshelf" description="Bookshelf">
      <H1>Bookshelf</H1>
      <section className="bookshelf">
        <img
          alt="Lean Analytics: A Guide to Build a Better and Faster Startup Business Using Data Tracking (Lean Six)"
          id="cover_review_2939824014"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554818430l/44991593._SX98_.jpg"
        />

        <img
          alt="Clean Architecture"
          id="cover_review_2939833928"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471680093l/18043011._SX98_.jpg"
        />

        <img
          alt="Getting the Hang of Web Typography"
          id="cover_review_830745851"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353180593l/16154956._SX98_.jpg"
        />

        <img
          alt="Learning React Native: Building Native Mobile Apps with JavaScript"
          id="cover_review_2939832851"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493948511l/35023935._SX98_.jpg"
        />

        <img
          alt="React Native Cookbook: Bringing the Web to Native Platforms"
          id="cover_review_2939833531"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519435095l/35803522._SX98_.jpg"
        />

        <img
          alt="Scalability Patterns: Best Practices for Designing High Volume Websites"
          id="cover_review_2939832484"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532403154l/27805249._SX98_.jpg"
        />

        <img
          alt="Applied Artificial Intelligence: A Handbook for Business Leaders"
          id="cover_review_2939830504"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543370143l/36512925._SX98_.jpg"
        />

        <img
          alt="User Experience. User Interface. Usability. UX Design. UI Design. Interaction Design: +123 Tricks and Tactics to optimize its usability."
          id="cover_review_2939825030"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548667142l/43725960._SX98_.jpg"
        />

        <img
          alt="Taming the State in React"
          id="cover_review_2939833223"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510752728l/36599578._SX98_.jpg"
        />

        <img
          alt="Designing Future-Friendly Content: Modeling and Planning Content for Every Interface"
          id="cover_review_2939828073"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499185049l/35135773._SX98_.jpg"
        />

        <img
          alt="node .js Guidebook"
          id="cover_review_2939842592"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545235984l/43277662._SX98_.jpg"
        />

        <img
          alt="The Hundred-Page Machine Learning Book"
          id="cover_review_2939827157"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547647164l/43590393._SX98_.jpg"
        />

        <img
          alt="The DAM Book 3.0"
          id="cover_review_2939828157"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557786495l/45734627._SX98_.jpg"
        />

        <img
          alt="Front-End Reactive Architectures: Explore the Future of the Front-End Using Reactive JavaScript Frameworks and Libraries"
          id="cover_review_2939829403"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519430529l/36859898._SX98_.jpg"
        />

        <img
          alt="Effective Data Visualization: The Right Chart for the Right Data"
          id="cover_review_2939830356"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447620623l/27812299._SX98_.jpg"
        />

        <img
          alt="Escaping the Build Trap: How Effective Product Management Creates Real Value"
          id="cover_review_2939827327"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488379400l/33369253._SX98_.jpg"
        />

        <img
          alt="SurviveJS - Webpack and React"
          id="cover_review_2939840947"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1455968248l/27836795._SX98_.jpg"
        />

        <img
          alt="Automating with Node.js"
          id="cover_review_2939834101"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539578251l/42318267._SX98_.jpg"
        />

        <img
          alt="Pro React"
          id="cover_review_2939840876"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451238156l/27905649._SX98_.jpg"
        />

        <img
          alt="Building Enterprise JavaScript Applications: Learn to build and deploy robust JavaScript applications using Cucumber, Mocha, Jenkins, Docker, and Kubernetes"
          id="cover_review_2939832646"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562462355l/46775220._SX98_.jpg"
        />

        <img
          alt="Design a Better Business: New Tools, Skills, and Mindset for Strategy and Innovation"
          id="cover_review_2939831738"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471278428l/29156271._SX98_.jpg"
        />

        <img
          title="NoSQL and SQL Data Modeling: Bringing Together Data, Semantics, and Software"
          alt="NoSQL and SQL Data Modeling: Bringing Together Data, Semantics, and Software"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459721127l/29769729._SX98_.jpg"
        />

        <img
          alt="Beginning API Development with Node.js: Build highly scalable, developer-friendly APIs for the modern web with JavaScript and Node.js"
          id="cover_review_2939834207"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535674362l/41573192._SX98_.jpg"
        />

        <img
          alt="Software Design Decoded: 66 Ways Experts Think"
          id="cover_review_2939834012"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473679631l/29889476._SX98_.jpg"
        />

        <img
          alt="Hands-On Microservices with Node.js: Build, test, and deploy robust microservices in JavaScript"
          id="cover_review_2939843133"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534271888l/41143942._SX98_.jpg"
        />

        <img
          alt="Kubernetes Handbook: Non-Programmer's Guide to Deploy Applications with Kubernetes"
          id="cover_review_2939829115"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534025020l/41122433._SX98_.jpg"
        />

        <img
          alt="Business Analysis, Software Testing, Usability : A Quick Guide Book for Better Project Management and Faster IT Career"
          id="cover_review_2939824273"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473420552l/31923946._SX98_.jpg"
        />

        <img
          alt="Introduction to Natural Language Processing: Concepts and Fundamentals for Beginners"
          id="cover_review_2939828799"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1540143474l/42354993._SX98_.jpg"
        />

        <img
          alt="Intuitive Mobile UX: Six Dimensions of App Design"
          id="cover_review_2939824347"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496189110l/32171116._SX98_.jpg"
        />

        <img
          alt="Build Better Products"
          id="cover_review_2939825543"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478057769l/32856281._SX98_.jpg"
        />

        <img
          alt="Bottlenecks: Aligning UX Design with User Psychology"
          title="Bottlenecks: Aligning UX Design with User Psychology"
          id="cover_review_2939827898"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488382702l/33268103._SX98_.jpg"
        />

        <img
          alt="Terraform: Up and Running: Writing Infrastructure as Code"
          title="Terraform: Up and Running: Writing Infrastructure as Code"
          id="cover_review_2939842060"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481649825l/33369258._SX98_.jpg"
        />

        <img
          alt="Building Node.js REST API with TDD Approach: 10 Steps Complete Guide for Node.js, Express.js &amp; MongoDB RESTful Service with Test-Driven Development"
          title="Building Node.js REST API with TDD Approach: 10 Steps Complete Guide for Node.js, Express.js &amp; MongoDB RESTful Service with Test-Driven Development"
          id="cover_review_2939833401"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550552758l/44058597._SX98_.jpg"
        />

        <img
          alt="RESTful Web API Design with Node.js 10, Third Edition: Learn to create robust RESTful web services with Node.js, MongoDB, and Express.js, 3rd Edition"
          title="RESTful Web API Design with Node.js 10, Third Edition: Learn to create robust RESTful web services with Node.js, MongoDB, and Express.js, 3rd Edition"
          id="cover_review_2939843213"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533144838l/41022467._SX98_.jpg"
        />

        <img
          alt="Functional-Light JavaScript: Balanced, Pragmatic FP in JavaScript"
          title="Functional-Light JavaScript: Balanced, Pragmatic FP in JavaScript"
          id="cover_review_2939842440"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1521791674l/39352651._SX98_.jpg"
        />

        <img
          alt="Learning Graphql: Declarative Data Fetching for Modern Web Apps"
          title="Learning Graphql: Declarative Data Fetching for Modern Web Apps"
          id="cover_review_2939829886"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535106975l/37588199._SX98_.jpg"
        />

        <img
          alt="Beginning GraphQL: Fetch data faster and more efficiently whilst improving the overall performance of your web application"
          title="Beginning GraphQL: Fetch data faster and more efficiently whilst improving the overall performance of your web application"
          id="cover_review_2939832717"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547739008l/43600218._SX98_.jpg"
        />

        <img
          alt="Tiny ES6 Notebook: Curated JavaScript Examples: Volume 3 (Tiny Notebook)"
          title="Tiny ES6 Notebook: Curated JavaScript Examples: Volume 3 (Tiny Notebook)"
          id="cover_review_2939842336"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532360217l/40919866._SX98_.jpg"
        />

        <img
          alt="JavaScript and JSON Essentials: Build light weight, scalable, and faster web applications with the power of JSON, 2nd Edition"
          title="JavaScript and JSON Essentials: Build light weight, scalable, and faster web applications with the power of JSON, 2nd Edition"
          id="cover_review_2939841505"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531460664l/40797107._SX98_.jpg"
        />
        <img
          alt="Visual Design of GraphQL Data: A Practical Introduction with Legacy Data and Neo4j"
          title="Visual Design of Graphql Data: A Practical Introduction with Legacy Data and Neo4j"
          id="book_40758792"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536855148l/41822364._SX98_.jpg"
        />

        <img
          alt="Learning AWS: Design, build, and deploy responsive applications using AWS Cloud components, 2nd Edition"
          title="Learning AWS: Design, build, and deploy responsive applications using AWS Cloud components, 2nd Edition"
          id="cover_review_2939833464"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531098790l/40752926._SX98_.jpg"
        />

        <img
          alt="The Tao of Design and User Experience: The Best Experience Is No Experience"
          title="The Tao of Design and User Experience: The Best Experience Is No Experience"
          id="cover_review_2939825879"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490773752l/34708263._SX98_.jpg"
        />
        <img
          alt="Good Charts Workbook: Tips, Tools, and Exercises for Making Better Data Visualizations"
          title="Good Charts Workbook: Tips, Tools, and Exercises for Making Better Data Visualizations"
          id="book_37956046"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555464517l/45157639._SX98_.jpg"
        />

        <img
          alt="Node.js Web Development: Server-side development with Node 10 made easy, 4th Edition"
          title="Node.js Web Development: Server-side development with Node 10 made easy, 4th Edition"
          id="cover_review_2939841960"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534271889l/41143943._SX98_.jpg"
        />

        <img
          alt="AWS Automation Cookbook: Continuous Integration and Continuous Deployment using AWS services"
          title="AWS Automation Cookbook: Continuous Integration and Continuous Deployment using AWS services"
          id="cover_review_2939842242"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516636828l/38122278._SX98_.jpg"
        />

        <img
          alt="Simplifying JavaScript"
          title="Simplifying JavaScript"
          id="cover_review_2939842667"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526903202l/40186670._SX98_.jpg"
        />

        <img
          alt="DevOps And Microservices Handbook: Non-Programmer’s Guide to DevOps and Microservices"
          title="DevOps And Microservices Handbook: Non-Programmer’s Guide to DevOps and Microservices"
          id="cover_review_2939842146"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528694738l/40509227._SX98_.jpg"
        />

        <img
          alt="Superpowers of Visual Storytelling"
          title="Superpowers of Visual Storytelling"
          id="cover_review_2939830712"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525315402l/40027235._SX98_.jpg"
        />

        <img
          alt="This Is Service Design Methods: A Companion to This Is Service Design Doing"
          title="This Is Service Design Methods: A Companion to This Is Service Design Doing"
          id="cover_review_2939827552"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532462236l/40014290._SX98_.jpg"
        />

        <img
          alt="The Pocket Universal Methods of Design: 100 Ways to Research Complex Problems, Develop Innovative Ideas and Design Effective Solutions"
          title="The Pocket Universal Methods of Design: 100 Ways to Research Complex Problems, Develop Innovative Ideas and Design Effective Solutions"
          id="cover_review_2939832410"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499244561l/34220786._SX98_.jpg"
        />

        <img
          alt="Node.js 8 the Right Way: Practical, Server-Side JavaScript That Scales"
          title="Node.js 8 the Right Way: Practical, Server-Side JavaScript That Scales"
          id="cover_review_2939841569"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490828942l/34637917._SX98_.jpg"
        />

        <img
          alt="An Introduction to Service Design: Designing the Invisible"
          title="An Introduction to Service Design: Designing the Invisible"
          id="cover_review_2939831408"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1496922737l/34918578._SX98_.jpg"
        />

        <img
          alt="Rest API Development with Node.Js: Manage and Understand the Full Capabilities of Successful Rest Development"
          title="Rest API Development with Node.Js: Manage and Understand the Full Capabilities of Successful Rest Development"
          id="cover_review_2939833705"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532414722l/40014218._SX98_.jpg"
        />

        <img
          alt="A Philosophy of Software Design"
          title="A Philosophy of Software Design"
          id="cover_review_2939828712"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531857377l/39996759._SX98_.jpg"
        />

        <img
          alt="Orchestrating Experiences: Collaborative Design for Complexity"
          title="Orchestrating Experiences: Collaborative Design for Complexity"
          id="cover_review_2939825630"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524103054l/39891144._SX98_.jpg"
        />

        <img
          alt="Machine Learning For Absolute Beginners: A Plain English Introduction"
          title="Machine Learning For Absolute Beginners: A Plain English Introduction"
          id="cover_review_2939828550"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519863852l/38886623._SX98_.jpg"
        />

        <img
          alt="Independent Contractor, Sole Proprietor, and LLC Taxes: Explained in 100 Pages or Less"
          title="Independent Contractor, Sole Proprietor, and LLC Taxes: Explained in 100 Pages or Less"
          id="cover_review_2939842834"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523271440l/39788043._SX98_.jpg"
        />

        <img
          alt="Expert AWS Development"
          title="Expert AWS Development"
          id="cover_review_2939842898"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529614156l/40605581._SX98_.jpg"
        />

        <img
          alt="Es6 for Humans: The Latest Standard of Javascript: Es2015 and Beyond"
          title="Es6 for Humans: The Latest Standard of Javascript: Es2015 and Beyond"
          id="cover_review_2939842510"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1501497815l/35037188._SX98_.jpg"
        />

        <img
          alt="Node.Js Beyond the Basics"
          title="Node.Js Beyond the Basics"
          id="cover_review_2939843069"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522578403l/39657376._SX98_.jpg"
        />

        <img
          alt="React: Cross-Platform Application Development with React Native: Build 4 Real-World Apps with React Native"
          title="React: Cross-Platform Application Development with React Native: Build 4 Real-World Apps with React Native"
          id="cover_review_2939836254"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523377723l/39655774._SX98_.jpg"
        />

        <img
          alt="Learning JavaScript Data Structures and Algorithms - Third Edition"
          title="Learning JavaScript Data Structures and Algorithms - Third Edition"
          id="cover_review_2939841426"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526264809l/40117066._SX98_.jpg"
        />

        <img
          alt="Data Visualization Made Simple: Insights Into Becoming Visual"
          title="Data Visualization Made Simple: Insights Into Becoming Visual"
          id="cover_review_2939828626"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533062272l/39227633._SX98_.jpg"
        />

        <img
          alt="Amazon Web Services Bootcamp: Develop a scalable, reliable, and highly available cloud environment with AWS"
          title="Amazon Web Services Bootcamp: Develop a scalable, reliable, and highly available cloud environment with AWS"
          id="cover_review_2939833643"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543784554l/43082676._SX98_.jpg"
        />

        <img
          alt="The Design of Everyday Things"
          title="The Design of Everyday Things"
          id="cover_review_2939823943"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387770614l/17290807._SX98_.jpg"
        />

        <img
          alt="Code Complete"
          title="Code Complete"
          id="cover_review_548283270"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396837641l/4845._SX98_.jpg"
        />

        <img
          alt="Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests"
          title="Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests"
          id="cover_review_2939824503"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348355114l/2203883._SX98_.jpg"
        />

        <img
          alt="JavaScript Pocket Reference"
          title="JavaScript Pocket Reference"
          id="cover_review_252403605"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834253l/852919._SY160_.jpg"
        />

        <img
          alt="Serve to Lead: 21st Century Leaders Manual"
          title="Serve to Lead: 21st Century Leaders Manual"
          id="cover_review_2939831471"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527031937l/40190213._SX98_.jpg"
        />

        <img
          alt="Refactoring: Improving the Design of Existing Code"
          title="Refactoring: Improving the Design of Existing Code"
          id="cover_review_2939827246"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543958218l/35135772._SX98_.jpg"
        />

        <img
          alt="Web usability"
          title="Web usability"
          id="cover_review_830742920"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373961933l/9894314._SX98_.jpg"
        />

        <img
          alt="Designing Web Usability"
          title="Designing Web Usability"
          id="cover_review_2939828365"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385224263l/22149._SX98_.jpg"
        />

        <img
          alt="Don't Make Me Think: A Common Sense Approach to Web Usability"
          title="Don't Make Me Think: A Common Sense Approach to Web Usability"
          id="cover_review_169346429"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867006l/3368._SX98_.jpg"
        />

        <img
          alt="Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability"
          title="Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability"
          id="cover_review_2939843524"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384736553l/18197267._SX98_.jpg"
        />

        <img
          alt="The Object-Oriented Thought Process"
          title="The Object-Oriented Thought Process"
          id="cover_review_548229371"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347258132l/4795641._SX98_.jpg"
        />

        <img
          alt="Getting Things Done: The Art of Stress-Free Productivity"
          title="Getting Things Done: The Art of Stress-Free Productivity"
          id="cover_review_169345608"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312474060l/1633._SX98_.jpg"
        />

        <img
          alt="Web ReDesign 2.0: Workflow that Works"
          title="Web ReDesign 2.0: Workflow that Works"
          id="cover_review_255446453"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348174430l/163781._SX98_.jpg"
        />

        <img
          alt="The Simplicity Shift: Innovative Design Tactics in a Corporate World"
          title="The Simplicity Shift: Innovative Design Tactics in a Corporate World"
          id="cover_review_318237268"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331941024l/2952890._SX98_.jpg"
        />

        <img
          alt="The Elements of User Experience: User-Centered Design for the Web (Voices (New Riders)"
          title="The Elements of User Experience: User-Centered Design for the Web (Voices (New Riders)"
          id="cover_review_319558078"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386924817l/1867._SX98_.jpg"
        />

        <img
          alt="Learning XSLT"
          title="Learning XSLT"
          id="cover_review_255443051"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834223l/454692._SX98_.jpg"
        />

        <img
          alt="Bulletproof Ajax"
          title="Bulletproof Ajax"
          id="cover_review_255445041"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389111239l/45580._SX98_.jpg"
        />

        <img
          alt="Designing with Web Standards"
          title="Designing with Web Standards"
          id="cover_review_169344790"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1284940646l/6512430._SX98_.jpg"
        />

        <img
          alt="OOP Demystified"
          title="OOP Demystified"
          id="cover_review_548224460"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348031968l/349235._SX98_.jpg"
        />

        <img
          alt="Write Great Code: Volume 1: Understanding the Machine"
          title="Write Great Code: Volume 1: Understanding the Machine"
          id="cover_review_548225472"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381963075l/44949._SX98_.jpg"
        />

        <img
          alt="Beginning ASP.NET 2.0 E-Commerce in C# 2005: From Novice to Professional"
          title="Beginning ASP.NET 2.0 E-Commerce in C# 2005: From Novice to Professional"
          id="cover_review_169349324"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348231933l/406202._SX98_.jpg"
        />

        <img
          alt="Web Standards Solutions"
          title="Web Standards Solutions"
          id="cover_review_169337429"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348984553l/6355180._SX98_.jpg"
        />

        <img
          alt="Linux Pocket Guide"
          title="Linux Pocket Guide"
          id="cover_review_169336959"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834323l/128172._SY160_.jpg"
        />

        <img
          alt="Head First Design Patterns"
          title="Head First Design Patterns"
          id="cover_review_318236685"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408309444l/58128._SX98_.jpg"
        />

        <img
          alt="Dom Scripting: Web Design with JavaScript and the Document Object Model"
          title="Dom Scripting: Web Design with JavaScript and the Document Object Model"
          id="cover_review_169344769"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348333256l/128985._SX98_.jpg"
        />

        <img
          alt="Designing Interfaces: Patterns for Effective Interaction Design"
          title="Designing Interfaces: Patterns for Effective Interaction Design"
          id="cover_review_830748085"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384259305l/344724._SX98_.jpg"
        />

        <img
          alt="Bulletproof Web Design: Improving flexibility and protecting against worst-case scenarios with XHTML and CSS"
          title="Bulletproof Web Design: Improving flexibility and protecting against worst-case scenarios with XHTML and CSS"
          id="cover_review_255445516"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400098297l/13528._SX98_.jpg"
        />

        <img
          alt="PHP Phrasebook"
          title="PHP Phrasebook"
          id="cover_review_252414904"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348803256l/1104003._SX98_.jpg"
        />

        <img
          alt="Multimedia For The Web: Creating Digital Excitement, Revealed, Deluxe Education Edition (Revealed)"
          title="Multimedia For The Web: Creating Digital Excitement, Revealed, Deluxe Education Edition (Revealed)"
          id="cover_review_169347031"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349034321l/1308547._SX98_.jpg"
        />

        <img
          alt="The Kaizen Pocket Handbook"
          title="The Kaizen Pocket Handbook"
          id="cover_review_2939831619"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392091439l/1368813._SX98_.jpg"
        />

        <img
          alt="Practical Web Analytics for User Experience: How Analytics Can Help You Understand Your Users"
          title="Practical Web Analytics for User Experience: How Analytics Can Help You Understand Your Users"
          id="cover_review_2939823548"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387736447l/17841620._SX98_.jpg"
        />

        <img
          alt="The Zen of CSS Design: Visual Enlightenment for the Web"
          title="The Zen of CSS Design: Visual Enlightenment for the Web"
          id="cover_review_169337334"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401887525l/565._SX98_.jpg"
        />

        <img
          alt="Getting Real"
          title="Getting Real"
          id="cover_review_318242057"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327813710l/11553059._SX98_.jpg"
        />

        <img
          alt="Communicating Design: Developing Web Site Documentation for Design and Planning (Voices That Matter)"
          title="Communicating Design: Developing Web Site Documentation for Design and Planning (Voices That Matter)"
          id="cover_review_169345192"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347733335l/7821882._SX98_.jpg"
        />

        <img
          alt="PHP Solutions: Dynamic Web Design Made Easy"
          title="PHP Solutions: Dynamic Web Design Made Easy"
          id="cover_review_252409577"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348666556l/136868._SX98_.jpg"
        />

        <img
          alt="Head Rush Ajax"
          title="Head Rush Ajax"
          id="cover_review_169344768"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386919991l/45578._SX98_.jpg"
        />

        <img
          alt="Write Great Code: Volume 2: Thinking Low-Level, Writing High-Level"
          title="Write Great Code: Volume 2: Thinking Low-Level, Writing High-Level"
          id="cover_review_548225780"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390091979l/1063671._SX98_.jpg"
        />

        <img
          alt="Prioritizing Web Usability"
          title="Prioritizing Web Usability"
          id="cover_review_319552031"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431399322l/22146._SX98_.jpg"
        />

        <img
          alt="The Laws of Simplicity: Design, Technology, Business, Life"
          title="The Laws of Simplicity: Design, Technology, Business, Life"
          id="cover_review_830746509"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431606777l/225111._SX98_.jpg"
        />

        <img
          alt="Wrox's ASP.NET 2.0 Visual Web DeveloperTM 2005 Express Edition Starter Kit"
          title="Wrox's ASP.NET 2.0 Visual Web DeveloperTM 2005 Express Edition Starter Kit"
          id="cover_review_169344794"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348787721l/468205._SX98_.jpg"
        />

        <img
          alt="JavaScript Phrasebook"
          title="JavaScript Phrasebook"
          id="cover_review_252415164"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348922630l/852936._SX98_.jpg"
        />

        <img
          alt="RFID Essentials (Theory in Practice (O'Reilly))"
          title="RFID Essentials (Theory in Practice (O'Reilly))"
          id="cover_review_2939844753"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834501l/851398._SX98_.jpg"
        />

        <img
          alt="Beginning ASP.Net 2.0 Databases: From Novice to Professional"
          title="Beginning ASP.Net 2.0 Databases: From Novice to Professional"
          id="cover_review_169345614"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348397886l/608986._SX98_.jpg"
        />

        <img
          alt="Ajax in Practice"
          title="Ajax in Practice"
          id="cover_review_169346726"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328694280l/806975._SX98_.jpg"
        />

        <img
          alt="Eyetracking Web Usability"
          title="Eyetracking Web Usability"
          id="cover_review_2939824152"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348831389l/729999._SX98_.jpg"
        />

        <img
          alt="Adobe Illustrator CS3 Classroom in a Book: The Official Training Workbook from Adobe Systems [With CD-ROM]"
          title="Adobe Illustrator CS3 Classroom in a Book: The Official Training Workbook from Adobe Systems [With CD-ROM]"
          id="cover_review_255444289"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347655278l/849660._SX98_.jpg"
        />

        <img
          alt="Learning ActionScript 3.0"
          title="Learning ActionScript 3.0"
          id="cover_review_255446193"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328327011l/6588970._SX98_.jpg"
        />

        <img
          alt="Clean Code: A Handbook of Agile Software Craftsmanship"
          title="Clean Code: A Handbook of Agile Software Craftsmanship"
          id="cover_review_2939842970"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX98_.jpg"
        />

        <img
          alt="The Principles of Beautiful Web Design"
          title="The Principles of Beautiful Web Design"
          id="cover_review_318239478"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328764021l/9322366._SX98_.jpg"
        />

        <img
          alt="Influencer : The Power to Change Anything"
          title="Influencer : The Power to Change Anything"
          id="cover_review_217371849"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393217540l/914211._SX98_.jpg"
        />

        <img
          alt="Pro Drupal Development: Learn How to Use the Content Management Framework to Create Powerful Customized Web Sites"
          title="Pro Drupal Development: Learn How to Use the Content Management Framework to Create Powerful Customized Web Sites"
          id="cover_review_169346000"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349089173l/2851277._SX98_.jpg"
        />

        <img
          alt="Web Standards Creativity: Innovations in Web Design with Xhtml, Css, and Dom Scripting"
          title="Web Standards Creativity: Innovations in Web Design with Xhtml, Css, and Dom Scripting"
          id="cover_review_169344771"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348780756l/31958._SX98_.jpg"
        />

        <img
          alt="Design Elements: A Graphic Style Manual"
          title="Design Elements: A Graphic Style Manual"
          id="cover_review_318239773"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398032723l/44738._SX98_.jpg"
        />

        <img
          alt="The Essential Guide to Dreamweaver Cs3 with Css, Ajax, and PHP"
          title="The Essential Guide to Dreamweaver Cs3 with Css, Ajax, and PHP"
          id="cover_review_255444069"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867010l/1546234._SX98_.jpg"
        />

        <img
          alt="Presentation Zen: Simple Ideas on Presentation Design and Delivery (Voices That Matter)"
          title="Presentation Zen: Simple Ideas on Presentation Design and Delivery (Voices That Matter)"
          id="cover_review_2939825978"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347651083l/12352683._SX98_.jpg"
        />

        <img
          alt="Wicked Cool PHP: Real-World Scripts That Solve Difficult Problems"
          title="Wicked Cool PHP: Real-World Scripts That Solve Difficult Problems"
          id="cover_review_169337521"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389144699l/2867481._SX98_.jpg"
        />

        <img
          alt="Layout Workbook: A Real-World Guide to Building Pages in Graphic Design"
          title="Layout Workbook: A Real-World Guide to Building Pages in Graphic Design"
          id="cover_review_217369016"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328754523l/865420._SX98_.jpg"
        />

        <img
          alt="Using Drupal"
          title="Using Drupal"
          id="cover_review_169344780"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834768l/4152157._SX98_.jpg"
        />

        <img
          alt="slide:ology: The Art and Science of Creating Great Presentations"
          title="slide:ology: The Art and Science of Creating Great Presentations"
          id="cover_review_2939826338"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434175349l/3427627._SX98_.jpg"
        />

        <img
          alt="Build Your Own ASP.Net 3.5 Website Using C# &amp; VB"
          title="Build Your Own ASP.Net 3.5 Website Using C# &amp; VB"
          id="cover_review_169345190"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763995l/3399108._SX98_.jpg"
        />

        <img
          alt="Flex 3 Component Solutions: Build Amazing Interfaces with Flex Components"
          title="Flex 3 Component Solutions: Build Amazing Interfaces with Flex Components"
          id="cover_review_169344775"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348434835l/6076394._SX98_.jpg"
        />

        <img
          alt="PHP Object-Oriented Solutions"
          title="PHP Object-Oriented Solutions"
          id="cover_review_252409606"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347248937l/4479421._SX98_.jpg"
        />

        <img
          alt="Practical CakePHP Projects"
          title="Practical CakePHP Projects"
          id="cover_review_169346219"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348402332l/4798373._SX98_.jpg"
        />

        <img
          alt="XML: Visual QuickStart Guide"
          title="XML: Visual QuickStart Guide"
          id="cover_review_255443416"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349054212l/3339815._SX98_SY160_.jpg"
        />

        <img
          alt="Web Form Design: Filling in the Blanks"
          title="Web Form Design: Filling in the Blanks"
          id="cover_review_2939828001"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328342635l/3296910._SX98_.jpg"
        />

        <img
          alt="JavaScript: The Good Parts"
          title="JavaScript: The Good Parts"
          id="cover_review_2939843698"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834793l/2998152._SX98_.jpg"
        />

        <img
          alt="Beginning CakePHP: From Novice to Professional"
          title="Beginning CakePHP: From Novice to Professional"
          id="cover_review_169344795"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349069053l/2703371._SX98_.jpg"
        />

        <img
          alt="Designing for the Social Web"
          title="Designing for the Social Web"
          id="cover_review_169344784"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390867001l/2497816._SX98_.jpg"
        />

        <img
          alt="The Principles of Project Management (SitePoint: Project Management)"
          title="The Principles of Project Management (SitePoint: Project Management)"
          id="cover_review_252396056"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763974l/2357234._SX98_.jpg"
        />

        <img
          alt="The Principles of Successful Freelancing"
          title="The Principles of Successful Freelancing"
          id="cover_review_218562441"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328763998l/3935037._SX98_.jpg"
        />

        <img
          alt="SEO Made Simple: Strategies for Dominating the World's Largest Search Engine"
          title="SEO Made Simple: Strategies for Dominating the World's Largest Search Engine"
          id="cover_review_217369019"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348871299l/10912154._SX98_.jpg"
        />

        <img
          alt="The Web Designer's Idea Book: The Ultimate Guide To Themes, Trends  Styles In Website Design"
          title="The Web Designer's Idea Book: The Ultimate Guide To Themes, Trends  Styles In Website Design"
          id="cover_review_169337784"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347383034l/3429147._SX98_.jpg"
        />

        <img
          alt="Cracking the Coding Interview: 150 Programming Questions and Solutions"
          title="Cracking the Coding Interview: 150 Programming Questions and Solutions"
          id="cover_review_1091300903"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347787997l/13178498._SX98_.jpg"
        />

        <img
          alt="Handcrafted CSS: More Bulletproof Web Design"
          title="Handcrafted CSS: More Bulletproof Web Design"
          id="cover_review_169344773"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372048296l/6583924._SX98_.jpg"
        />

        <img
          alt="Pro Git"
          title="Pro Git"
          id="cover_review_252410322"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383771684l/6518085._SX98_.jpg"
        />

        <img
          alt="Drupal 6 JavaScript and Jquery"
          title="Drupal 6 JavaScript and Jquery"
          id="cover_review_169343300"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348468083l/6431791._SX98_.jpg"
        />

        <img
          alt="Modular Web Design"
          title="Modular Web Design"
          id="cover_review_318237654"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327929248l/10628673._SX98_.jpg"
        />

        <img
          alt="Presentation Zen Design: Simple Design Principles and Techniques to Enhance Your Presentations (Voices That Matter)"
          title="Presentation Zen Design: Simple Design Principles and Techniques to Enhance Your Presentations (Voices That Matter)"
          id="cover_review_2939826070"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384735533l/18058157._SX98_.jpg"
        />

        <img
          alt="Mobile Design and Development: Practical Concepts and Techniques for Creating Mobile Sites and Web Apps"
          title="Mobile Design and Development: Practical Concepts and Techniques for Creating Mobile Sites and Web Apps"
          id="cover_review_169344788"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834671l/6386509._SX98_.jpg"
        />

        <img
          alt="The Little Black Book of Design"
          title="The Little Black Book of Design"
          id="cover_review_319553267"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327863017l/8194488._SX98_.jpg"
        />

        <img
          alt="Rapid Problem Solving With Post-it Notes"
          title="Rapid Problem Solving With Post-it Notes"
          id="cover_review_169347273"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347551716l/645616._SX98_.jpg"
        />

        <img
          alt="Succeeding with Agile: Software Development Using Scrum"
          title="Succeeding with Agile: Software Development Using Scrum"
          id="cover_review_318234687"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1267693415l/7654219._SX98_.jpg"
        />

        <img
          alt="Digging Into WordPress"
          title="Digging Into WordPress"
          id="cover_review_255450780"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356607298l/12652832._SX98_.jpg"
        />

        <img
          alt="Pull: The Power of the Semantic Web to Transform Your Business"
          title="Pull: The Power of the Semantic Web to Transform Your Business"
          id="cover_review_169343306"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347783744l/7152835._SX98_.jpg"
        />

        <img
          alt="Ultra-Fast ASP.NET: Building Ultra-Fast and Ultra-Scalable Websites Using ASP.NET and SQL Server"
          title="Ultra-Fast ASP.NET: Building Ultra-Fast and Ultra-Scalable Websites Using ASP.NET and SQL Server"
          id="cover_review_169345191"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348062622l/6365004._SX98_.jpg"
        />

        <img
          alt="Web Anatomy: Interaction Design Frameworks That Work"
          title="Web Anatomy: Interaction Design Frameworks That Work"
          id="cover_review_318235259"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270393331l/7980561._SX98_.jpg"
        />

        <img
          alt="Layout Essentials: 100 Design Principles for Using Grids"
          title="Layout Essentials: 100 Design Principles for Using Grids"
          id="cover_review_217369018"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328754818l/10535348._SX98_.jpg"
        />

        <img
          alt="Developing with Web Standards"
          title="Developing with Web Standards"
          id="cover_review_169344787"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348607209l/7292081._SX98_.jpg"
        />

        <img
          alt="One Small Step Can Change Your Life: The Kaizen Way"
          title="One Small Step Can Change Your Life: The Kaizen Way"
          id="cover_review_2939831548"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404581051l/18290413._SX98_.jpg"
        />

        <img
          alt="Cracking Drupal: A Drop in the Bucket"
          title="Cracking Drupal: A Drop in the Bucket"
          id="cover_review_169346517"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348960636l/6216610._SX98_.jpg"
        />

        <img
          alt="Regular Expressions Cookbook"
          title="Regular Expressions Cookbook"
          id="cover_review_169344779"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834836l/6125777._SX98_.jpg"
        />

        <img
          alt="A Project Guide to UX Design: For user experience designers in the field or in the making (Voices That Matter)"
          title="A Project Guide to UX Design: For user experience designers in the field or in the making (Voices That Matter)"
          id="cover_review_319553649"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328315677l/6469445._SX98_.jpg"
        />

        <img
          alt="97 Things Every Software Architect Should Know: Collective Wisdom from the Experts"
          title="97 Things Every Software Architect Should Know: Collective Wisdom from the Experts"
          id="cover_review_2939833780"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834865l/5487765._SX98_.jpg"
        />

        <img
          alt="InterACT with Web Standards: A holistic approach to web design"
          title="InterACT with Web Standards: A holistic approach to web design"
          id="cover_review_318234076"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348013186l/7626953._SX98_.jpg"
        />

        <img
          alt="Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers"
          title="Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers"
          id="cover_review_169343308"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1407707076l/7935732._SX98_.jpg"
        />

        <img
          alt="HBR Guide to Persuasive Presentations"
          title="HBR Guide to Persuasive Presentations"
          id="cover_review_2939827485"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348635198l/13586938._SY160_.jpg"
        />

        <img
          alt="White Space Is Not Your Enemy: A Beginner's Guide to Communicating Visually Through Graphic, Web and Multimedia Design"
          title="White Space Is Not Your Enemy: A Beginner's Guide to Communicating Visually Through Graphic, Web and Multimedia Design"
          id="cover_review_319552740"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355041181l/7558003._SX98_.jpg"
        />

        <img
          alt="Ranking Number One: 50 Essential SEO Tips To Boost Your Search Engine Results"
          title="Ranking Number One: 50 Essential SEO Tips To Boost Your Search Engine Results"
          id="cover_review_217369020"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387732820l/11122719._SX98_.jpg"
        />

        <img
          alt="How to create selling e-commerce websites"
          title="How to create selling e-commerce websites"
          id="cover_review_830744789"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327947398l/10992678._SX98_.jpg"
        />

        <img
          alt="The Smashing Book 2"
          title="The Smashing Book 2"
          id="cover_review_318238310"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320990114l/10393955._SX98_.jpg"
        />

        <img
          alt="RESTful Web Services Cookbook"
          title="RESTful Web Services Cookbook"
          id="cover_review_169344776"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328834967l/7533499._SX98_.jpg"
        />

        <img
          alt="PHP Jquery Cookbook"
          title="PHP Jquery Cookbook"
          id="cover_review_217370521"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347779763l/10217366._SX98_.jpg"
        />

        <img
          alt="Smashing jQuery"
          title="Smashing jQuery"
          id="cover_review_169343302"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348653943l/10133620._SX98_.jpg"
        />

        <img
          alt="Magento 1.4 Development Cookbook"
          title="Magento 1.4 Development Cookbook"
          id="cover_review_830749436"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347557478l/10087112._SX98_.jpg"
        />

        <img
          alt="CSS3 For Web Designers"
          title="CSS3 For Web Designers"
          id="cover_review_258387670"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1290436811l/9748697._SX98_.jpg"
        />

        <img
          alt="Gamestorming A Playbook For Innovators, Rulebreakers, And Changemakers"
          title="Gamestorming A Playbook For Innovators, Rulebreakers, And Changemakers"
          id="cover_review_2939826163"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394326211l/21373993._SX98_.jpg"
        />

        <img
          alt="Undercover User Experience Design: Learn How to Do Great UX Work with Tiny Budgets, No Time, and Limited Support"
          title="Undercover User Experience Design: Learn How to Do Great UX Work with Tiny Budgets, No Time, and Limited Support"
          id="cover_review_319551475"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400886907l/10105427._SX98_.jpg"
        />

        <img
          alt="Eloquent Javascript: A Modern Introduction to Programming"
          title="Eloquent Javascript: A Modern Introduction to Programming"
          id="cover_review_2939831300"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522513863l/39380368._SX98_.jpg"
        />

        <img
          alt="Clout: The Art and Science of Influential Web Content"
          title="Clout: The Art and Science of Influential Web Content"
          id="cover_review_252396841"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372037952l/8886607._SX98_.jpg"
        />

        <img
          alt="Simple and Usable Web, Mobile, and Interaction Design"
          title="Simple and Usable Web, Mobile, and Interaction Design"
          id="cover_review_169343301"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1288723572l/8881346._SX98_.jpg"
        />

        <img
          alt="Vector Basic Training: A Systematic Creative Process for Building Precision Vector Artwork (Voices that Matter)"
          title="Vector Basic Training: A Systematic Creative Process for Building Precision Vector Artwork (Voices that Matter)"
          id="cover_review_830748814"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349042911l/8763576._SX98_.jpg"
        />

        <img
          alt="Conversion Optimization: The Art and Science of Converting Prospects to Customers"
          title="Conversion Optimization: The Art and Science of Converting Prospects to Customers"
          id="cover_review_319557075"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328761594l/8680041._SX98_.jpg"
        />

        <img
          alt="The Web Design Pocket Guide Boxed Set: Includes the HTML Pocket Guide, the CSS Pocket Guide, and the JavaScript Pocket Guide"
          title="The Web Design Pocket Guide Boxed Set: Includes the HTML Pocket Guide, the CSS Pocket Guide, and the JavaScript Pocket Guide"
          id="cover_review_252403087"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348049976l/8630713._SX98_.jpg"
        />

        <img
          alt="Introducing HTML5"
          title="Introducing HTML5"
          id="cover_review_255450140"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348663465l/8352701._SX98_.jpg"
        />

        <img
          alt="Beginning ASP.NET 4: In C# and VB"
          title="Beginning ASP.NET 4: In C# and VB"
          id="cover_review_169345189"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347691359l/8218891._SX98_.jpg"
        />

        <img
          alt="HTML5 for Web Designers"
          title="HTML5 for Web Designers"
          id="cover_review_258384307"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1284658134l/8148515._SX98_.jpg"
        />

        <img
          alt="You Say More Than You Think: Use the New Body Language to Get What You Want!, The 7-Day Plan"
          title="You Say More Than You Think: Use the New Body Language to Get What You Want!, The 7-Day Plan"
          id="cover_review_169343303"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320548348l/8496352._SX98_.jpg"
        />

        <img
          alt="The Web Designer's Idea Book Volume 2: More of the Best Themes, Trends and Styles in Website Design"
          title="The Web Designer's Idea Book Volume 2: More of the Best Themes, Trends and Styles in Website Design"
          id="cover_review_319562374"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349061952l/8144298._SX98_.jpg"
        />

        <img
          alt="Rework"
          title="Rework"
          id="cover_review_252411458"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391275636l/6732019._SX98_.jpg"
        />

        <img
          alt="jQuery: Novice to Ninja"
          title="jQuery: Novice to Ninja"
          id="cover_review_169337638"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348596565l/6861180._SX98_.jpg"
        />

        <img
          alt="Map Scripting 101"
          title="Map Scripting 101"
          id="cover_review_255449885"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328753497l/8077039._SX98_.jpg"
        />

        <img
          alt="97 Things Every Programmer Should Know: Collective Wisdom from the Experts"
          title="97 Things Every Programmer Should Know: Collective Wisdom from the Experts"
          id="cover_review_2939843945"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328833164l/7003902._SX98_.jpg"
        />

        <img
          alt="Build Your Own Wicked WordPress Themes"
          title="Build Your Own Wicked WordPress Themes"
          id="cover_review_169351599"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328764002l/8032630._SX98_.jpg"
        />

        <img
          alt="The Power of Pull: How Small Moves, Smartly Made, Can Set Big Things in Motion"
          title="The Power of Pull: How Small Moves, Smartly Made, Can Set Big Things in Motion"
          id="cover_review_169349146"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440301051l/7735000._SX98_.jpg"
        />

        <img
          alt="Resonate: Present Visual Stories that Transform Audiences"
          title="Resonate: Present Visual Stories that Transform Audiences"
          id="cover_review_169345609"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347657619l/7970507._SX98_.jpg"
        />

        <img
          alt="Mobile First"
          title="Mobile First"
          id="cover_review_258387189"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318982714l/12910749._SX98_.jpg"
        />

        <img
          alt="jQuery Mobile"
          title="jQuery Mobile"
          id="cover_review_277799497"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328761516l/11854699._SX98_.jpg"
        />

        <img
          alt="Html5 for Masterminds: How to Take Advantage of Html5 to Create Amazing Websites and Revolutionary Applications"
          title="Html5 for Masterminds: How to Take Advantage of Html5 to Create Amazing Websites and Revolutionary Applications"
          id="cover_review_319558450"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355043328l/11933017._SX98_.jpg"
        />

        <img
          alt="The Book of CSS3: A Developer's Guide to the Future of Web Design"
          title="The Book of CSS3: A Developer's Guide to the Future of Web Design"
          id="cover_review_255443688"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328753507l/9807206._SX98_.jpg"
        />

        <img
          alt="Designing for Emotion"
          title="Designing for Emotion"
          id="cover_review_258385698"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1318982331l/12910715._SX98_.jpg"
        />

        <img
          alt="The Elements of Content Strategy"
          title="The Elements of Content Strategy"
          id="cover_review_258388332"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1291400563l/9815847._SX98_.jpg"
        />

        <img
          alt="The Non-Designer's Design Book"
          title="The Non-Designer's Design Book"
          id="cover_review_318241014"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328323813l/10875750._SX98_.jpg"
        />

        <img
          alt="The New Edge in Knowledge: How Knowledge Management Is Changing the Way We Do Business"
          title="The New Edge in Knowledge: How Knowledge Management Is Changing the Way We Do Business"
          id="cover_review_169349149"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348679123l/9926258._SX98_.jpg"
        />

        <img
          alt="Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences"
          title="Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences"
          id="cover_review_318241618"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348360985l/9967766._SX98_.jpg"
        />

        <img
          alt="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          id="cover_review_217368714"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019._SX98_.jpg"
        />

        <img
          alt="The Clean Coder: A Code of Conduct for Professional Programmers"
          title="The Clean Coder: A Code of Conduct for Professional Programmers"
          id="cover_review_2939833855"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347470803l/10284614._SX98_.jpg"
        />

        <img
          alt="100 Things Every Designer Needs to Know about People"
          title="100 Things Every Designer Needs to Know about People"
          id="cover_review_277800419"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348700218l/10778139._SX98_.jpg"
        />

        <img
          alt="Convert!: Designing Web Sites to Increase Traffic and Conversion"
          title="Convert!: Designing Web Sites to Increase Traffic and Conversion"
          id="cover_review_319556626"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348518941l/11208710._SX98_.jpg"
        />

        <img
          alt="HTML5 &amp; CSS3 For The Real World"
          title="HTML5 &amp; CSS3 For The Real World"
          id="cover_review_255449658"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348603744l/11353689._SX98_.jpg"
        />

        <img
          alt="Mobile Design Pattern Gallery: UI Patterns for Mobile Applications"
          title="Mobile Design Pattern Gallery: UI Patterns for Mobile Applications"
          id="cover_review_830747798"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344729016l/14514317._SX98_.jpg"
        />

        <img
          alt="Learning JavaScript Design Patterns (2nd Edition)"
          title="Learning JavaScript Design Patterns (2nd Edition)"
          id="cover_review_2939844680"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355001949l/16284465._SX98_.jpg"
        />

        <img
          alt="Responsive Web Design"
          title="Responsive Web Design"
          id="cover_review_258385352"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1291401033l/9815906._SX98_.jpg"
        />

        <img
          alt="Learning Html5 Game Programming: A Hands-On Guide to Building Online Games Using Canvas, Svg, and Webgl"
          title="Learning Html5 Game Programming: A Hands-On Guide to Building Online Games Using Canvas, Svg, and Webgl"
          id="cover_review_319558729"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348673821l/11285530._SX98_.jpg"
        />

        <img
          alt="Convert!: Designing Web Sites to Increase Traffic and Conversion"
          title="Convert!: Designing Web Sites to Increase Traffic and Conversion"
          id="cover_review_830741888"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377297864l/16343603._SX98_.jpg"
        />

        <img
          alt="Search Analytics for Your Site: Conversations with Your Customers"
          title="Search Analytics for Your Site: Conversations with Your Customers"
          id="cover_review_2939825810"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328342762l/11326941._SX98_.jpg"
        />

        <img
          alt="Build Mobile Websites and Apps for Smart Devices"
          title="Build Mobile Websites and Apps for Smart Devices"
          id="cover_review_277799934"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344667465l/11476621._SX98_.jpg"
        />

        <img
          alt="Single Page Web Applications"
          title="Single Page Web Applications"
          id="cover_review_1086828644"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1501094007l/15763198._SX98_.jpg"
        />

        <img
          alt="Smashing Node.Js: JavaScript Everywhere"
          title="Smashing Node.Js: JavaScript Everywhere"
          id="cover_review_1086827794"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347754648l/12332348._SX98_.jpg"
        />

        <img
          alt="Object-Oriented JavaScript"
          title="Object-Oriented JavaScript"
          id="cover_review_1090952414"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383046647l/18492393._SX98_.jpg"
        />

        <img
          alt="Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement"
          title="Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement"
          id="cover_review_2939840615"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344672079l/13130963._SX98_.jpg"
        />

        <img
          alt="Maintainable JavaScript"
          title="Maintainable JavaScript"
          id="cover_review_2939839064"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337560878l/13591032._SX98_.jpg"
        />

        <img
          alt="Pro jQuery"
          title="Pro jQuery"
          id="cover_review_319554913"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385241162l/13615604._SX98_.jpg"
        />

        <img
          alt="Essential Scrum: A Practical Guide to the Most Popular Agile Process"
          title="Essential Scrum: A Practical Guide to the Most Popular Agile Process"
          id="cover_review_2939841185"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355064175l/13663747._SX98_.jpg"
        />

        <img
          alt="Usable Usability: Simple Steps for Making Stuff Better"
          title="Usable Usability: Simple Steps for Making Stuff Better"
          id="cover_review_2939838821"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340766621l/13838495._SX98_.jpg"
        />

        <img
          alt="Testable JavaScript"
          title="Testable JavaScript"
          id="cover_review_2939839128"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344722955l/14514272._SX98_.jpg"
        />

        <img
          alt="The Designer's Web Handbook: What You Need to Know to Create for the Web"
          title="The Designer's Web Handbook: What You Need to Know to Create for the Web"
          id="cover_review_830748383"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1338397450l/14618492._SX98_.jpg"
        />

        <img
          alt="Effective Programming: More Than Writing Code"
          title="Effective Programming: More Than Writing Code"
          id="cover_review_830740128"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342002805l/15746409._SX98_.jpg"
        />

        <img
          alt="Mastering Magento"
          title="Mastering Magento"
          id="cover_review_830749131"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400372523l/15791660._SX98_.jpg"
        />

        <img
          alt="Building Node Applications with MongoDB and Backbone"
          title="Building Node Applications with MongoDB and Backbone"
          id="cover_review_1086827923"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344745277l/15812550._SX98_.jpg"
        />

        <img
          alt="Mobile Usability"
          title="Mobile Usability"
          id="cover_review_2939823861"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355093778l/15858133._SX98_.jpg"
        />

        <img
          alt="Latest Web Design Trends, The Road To Good Website Design"
          title="Latest Web Design Trends, The Road To Good Website Design"
          id="cover_review_830739195"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347812182l/16028951._SX98_.jpg"
        />

        <img
          alt="Content Everywhere: Strategy and Structure for Future-Ready Content"
          title="Content Everywhere: Strategy and Structure for Future-Ready Content"
          id="cover_review_2939827742"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386919739l/18101810._SX98_.jpg"
        />

        <img
          alt="Responsive Web Site Design, Quick Guide How To Get Your Site Ready For Every Device And Browser"
          title="Responsive Web Site Design, Quick Guide How To Get Your Site Ready For Every Device And Browser"
          id="cover_review_1086829096"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347822091l/16029359._SX98_.jpg"
        />

        <img
          alt="Learning Node.js: A Hands-On Guide to Building Web Applications in JavaScript"
          title="Learning Node.js: A Hands-On Guide to Building Web Applications in JavaScript"
          id="cover_review_2939837878"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385305502l/18929666._SX98_.jpg"
        />

        <img
          alt="Learning Node.js: A Hands-On Guide to Building Web Applications in JavaScript"
          title="Learning Node.js: A Hands-On Guide to Building Web Applications in JavaScript"
          id="cover_review_830738504"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372044596l/17297097._SX98_.jpg"
        />

        <img
          alt="Humble Inquiry: The Gentle Art of Asking Instead of Telling"
          title="Humble Inquiry: The Gentle Art of Asking Instead of Telling"
          id="cover_review_2939838986"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366277164l/17381706._SX98_.jpg"
        />

        <img
          alt="A Web for Everyone: Designing Accessible User Experiences"
          title="A Web for Everyone: Designing Accessible User Experiences"
          id="cover_review_2939825725"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391796497l/20748395._SX98_.jpg"
        />

        <img
          alt="Graph Databases: New Opportunities for Connected Data"
          title="Graph Databases: New Opportunities for Connected Data"
          id="cover_review_2939839970"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442134922l/26453625._SX98_.jpg"
        />

        <img
          alt="Cool Infographics: Effective Communication with Data Visualization and Design"
          title="Cool Infographics: Effective Communication with Data Visualization and Design"
          id="cover_review_2939830639"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379330084l/17473720._SX98_.jpg"
        />

        <img
          alt="Instant Node.js Starter"
          title="Instant Node.js Starter"
          id="cover_review_1086825297"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408937124l/18076538._SX98_.jpg"
        />

        <img
          alt="Instant Dependency Management with RequireJS How-to"
          title="Instant Dependency Management with RequireJS How-to"
          id="cover_review_2939843611"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371798884l/18107240._SX98_.jpg"
        />

        <img
          alt="Hooked: How to Build Habit-Forming Products"
          title="Hooked: How to Build Habit-Forming Products"
          id="cover_review_2939841339"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1407112405l/22668729._SX98_.jpg"
        />
        <img
          alt="Essential intranets: inspiring sites that deliver business value"
          title="Essential intranets: inspiring sites that deliver business value"
          id="book_18514061"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565134861l/47556618._SX98_.jpg"
        />

        <img
          alt="The User Experience Team of One: A Research and Design Survival Guide"
          title="The User Experience Team of One: A Research and Design Survival Guide"
          id="cover_review_2939827802"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375797626l/18177290._SX98_.jpg"
        />

        <img
          alt="Business Analyst's Mentor Book: With Best Practice Business Analysis Techniques and Software Requirements Management Tips"
          title="Business Analyst's Mentor Book: With Best Practice Business Analysis Techniques and Software Requirements Management Tips"
          id="cover_review_2939825163"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378290508l/18456140._SX98_.jpg"
        />

        <img
          alt="Backbone.Js Cookbook"
          title="Backbone.Js Cookbook"
          id="cover_review_830737819"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378681799l/18430541._SX98_.jpg"
        />

        <img
          alt="Value Proposition Design: How to Create Products and Services Customers Want"
          title="Value Proposition Design: How to Create Products and Services Customers Want"
          id="cover_review_2939838900"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410066532l/22505488._SX98_.jpg"
        />

        <img
          alt="Presenting Data Effectively: Communicating Your Findings for Maximum Impact, Second Edition"
          title="Presenting Data Effectively: Communicating Your Findings for Maximum Impact, Second Edition"
          id="cover_review_2939830567"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545881964l/32841956._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: ES6 &amp; Beyond"
          title="You Don't Know JS: ES6 &amp; Beyond"
          id="cover_review_2939840385"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451243301l/22221111._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: Types &amp; Grammar"
          title="You Don't Know JS: Types &amp; Grammar"
          id="cover_review_2941622606"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401076393l/22221109._SX98_.jpg"
        />

        <img
          alt="Node.js, MongoDB, and AngularJS Web Development"
          title="Node.js, MongoDB, and AngularJS Web Development"
          id="cover_review_1113558167"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396835595l/19523389._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: Async &amp; Performance"
          title="You Don't Know JS: Async &amp; Performance"
          id="cover_review_2941622161"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401074365l/22221110._SX98_.jpg"
        />

        <img
          alt="UX Design and Usability Mentor Book : With Best Practice Business Analysis and User Interface Design Tips and Techniques"
          title="UX Design and Usability Mentor Book : With Best Practice Business Analysis and User Interface Design Tips and Techniques"
          id="cover_review_2939825421"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429200779l/22602692._SX98_.jpg"
        />

        <img
          alt="Refactoring for Software Design Smells: Managing Technical Debt"
          title="Refactoring for Software Design Smells: Managing Technical Debt"
          id="cover_review_2939832559"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404480242l/22637938._SX98_.jpg"
        />

        <img
          alt="Node.js Design Patterns - Second Edition"
          title="Node.js Design Patterns - Second Edition"
          id="cover_review_2939833292"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470056042l/31171673._SX98_.jpg"
        />

        <img
          alt="Responsible Responsive Design"
          title="Responsible Responsive Design"
          id="cover_review_1118808754"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416385239l/23588216._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: Scope and Closures (You Don't Know JS, #2)"
          title="You Don't Know JS: Scope and Closures (You Don't Know JS, #2)"
          id="cover_review_1090953092"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403170838l/20901022._SX98_.jpg"
        />

        <img
          alt="Pro AngularJS (Expert's Voice in Web Development)"
          title="Pro AngularJS (Expert's Voice in Web Development)"
          id="cover_review_1086827413"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398775673l/22022478._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: this &amp; Object Prototypes"
          title="You Don't Know JS: this &amp; Object Prototypes"
          id="cover_review_1090953555"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405288115l/22221108._SX98_.jpg"
        />

        <img
          alt="Grokking Algorithms An Illustrated Guide For Programmers and Other Curious People"
          title="Grokking Algorithms An Illustrated Guide For Programmers and Other Curious People"
          id="cover_review_2939833585"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1458747997l/22847284._SX98_.jpg"
        />

        <img
          alt="The Content Strategy Toolkit: Methods, Guidelines, and Templates for Getting Content Right"
          title="The Content Strategy Toolkit: Methods, Guidelines, and Templates for Getting Content Right"
          id="cover_review_2939827613"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421009817l/23498440._SX98_.jpg"
        />

        <img
          alt="Web Scalability for Startup Engineers"
          title="Web Scalability for Startup Engineers"
          id="cover_review_2939831806"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421011132l/23615147._SX98_.jpg"
        />

        <img
          alt="The Pocket Universal Principles of Design: 150 Essential Tools for Architects, Artists, Designers, Developers, Engineers, Inventors, and Makers"
          title="The Pocket Universal Principles of Design: 150 Essential Tools for Architects, Artists, Designers, Developers, Engineers, Inventors, and Makers"
          id="cover_review_2939829481"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422812039l/22676110._SX98_.jpg"
        />

        <img
          alt="You Don't Know JS: Up &amp; Going"
          title="You Don't Know JS: Up &amp; Going"
          id="cover_review_2939840459"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434915764l/25768030._SX98_.jpg"
        />

        <img
          alt="Building Your Next Big Thing with Google Cloud Platform: A Guide for Developers and Enterprise Architects"
          title="Building Your Next Big Thing with Google Cloud Platform: A Guide for Developers and Enterprise Architects"
          id="cover_review_2939840532"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438581805l/26029374._SX98_.jpg"
        />

        <img
          alt="Design for the Mind: Seven Psychological Principles of Persuasive Design"
          title="Design for the Mind: Seven Psychological Principles of Persuasive Design"
          id="cover_review_2939823743"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433069411l/25636232._SX98_.jpg"
        />

        <img
          alt="The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations"
          title="The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations"
          id="cover_review_2939841259"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473461230l/26083308._SX98_.jpg"
        />

        <img
          alt="Storytelling with Data: A Data Visualization Guide for Business Professionals"
          title="Storytelling with Data: A Data Visualization Guide for Business Professionals"
          id="cover_review_2939840239"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444690744l/26535513._SX98_.jpg"
        />

        <img
          alt="This Is Service Design Doing: Using Research and Customer Journey Maps to Create Successful Services"
          title="This Is Service Design Doing: Using Research and Customer Journey Maps to Create Successful Services"
          id="cover_review_2939827073"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449997049l/27015347._SX98_.jpg"
        />

        <img
          alt="Good Charts: The HBR Guide to Making Smarter, More Persuasive Data Visualizations"
          title="Good Charts: The HBR Guide to Making Smarter, More Persuasive Data Visualizations"
          id="cover_review_2939827411"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444689367l/27038049._SX98_.jpg"
        />

        <img
          alt="Illuminate: Ignite Change Through Speeches, Stories, Ceremonies, and Symbols"
          title="Illuminate: Ignite Change Through Speeches, Stories, Ceremonies, and Symbols"
          id="cover_review_2939826238"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456043626l/29235116._SX98_.jpg"
        />

        <img
          alt="Content Design"
          title="Content Design"
          id="cover_review_2939827677"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503695729l/36124105._SX98_.jpg"
        />
      </section>
    </Page>
  );
};

export default BookShelf;
