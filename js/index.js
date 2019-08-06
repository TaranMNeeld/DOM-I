const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Grab 'a' elements
const aTags = document.getElementsByTagName('a');

//Grab siteContent.nav key/value pairs
const navKeys = Object.keys(siteContent.nav);
const navValues = Object.values(siteContent.nav);

//Set each 'a' tag to its designated key/value pair
for (let i = 0; i < aTags.length; i++) {
  const a = aTags[i];
  a.setAttribute('id', navKeys[i]);
  a.textContent = navValues[i];
  a.style.color = 'green';
}

//CTA
const ctaText = document.getElementsByClassName('cta-text')[0];
const ctaImg = document.getElementById('cta-img');

const ctaKeys = Object.keys(siteContent.cta);
const ctaValues = Object.values(siteContent.cta);

ctaText.childNodes[1].textContent = ctaValues[0];
ctaText.childNodes[3].textContent = ctaValues[1];
ctaImg.setAttribute('src', ctaValues[2]);

//Main Content
//Top Content
const topContent = document.getElementsByClassName('top-content')[0];
const topText1 = topContent.getElementsByClassName('text-content')[0];
const topText2 = topContent.getElementsByClassName('text-content')[1];

const mainContentKeys = Object.keys(siteContent["main-content"]);
const mainContentValues = Object.values(siteContent["main-content"]);

topText1.childNodes[1].textContent = mainContentValues[0];
topText1.childNodes[3].textContent = mainContentValues[1];
topText2.childNodes[1].textContent = mainContentValues[2];
topText2.childNodes[3].textContent = mainContentValues[3];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', mainContentValues[4]);

//Bottom Content
const bottomContent = document.getElementsByClassName('bottom-content')[0];
const bottomText1 = bottomContent.getElementsByClassName('text-content')[0];
const bottomText2 = bottomContent.getElementsByClassName('text-content')[1];
const bottomText3 = bottomContent.getElementsByClassName('text-content')[2];

bottomText1.childNodes[1].textContent = mainContentValues[5];
bottomText1.childNodes[3].textContent = mainContentValues[6];
bottomText2.childNodes[1].textContent = mainContentValues[7];
bottomText2.childNodes[3].textContent = mainContentValues[8];
bottomText3.childNodes[1].textContent = mainContentValues[9];
bottomText3.childNodes[3].textContent = mainContentValues[10];

//Contact
const contactValues = Object.values(siteContent.contact);

const contacts = document.getElementsByClassName("contact")[0];
contacts.childNodes[1].textContent = contactValues[0];
contacts.childNodes[3].textContent = contactValues[1];
contacts.childNodes[5].textContent = contactValues[2];
contacts.childNodes[7].textContent = contactValues[3];

//Footer
const footerValues = Object.values(siteContent.footer);

const copyright = document.getElementsByTagName('footer')[0];
copyright.childNodes[0].textContent = footerValues[0];

//Added element

const div = document.querySelector('div');

const mySignature = document.createElement('div');

mySignature.textContent = "Website made by Taran Neeld";
mySignature.style.textAlign = 'center';
mySignature.style.marginTop = '10px';

div.prepend(mySignature);

//Added element 2
const contactParent = document.getElementById('nav-item-6');
const contactChildAppend = document.createElement('a');

contactChildAppend.textContent = '???'

contactParent.appendChild(contactChildAppend);