'use strict'

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const book3Title = document.evaluate('/html/body/aside/div[5]/h2/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listBook2 = document.evaluate('/html/body/aside/div[1]/ul', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem6Book2 = document.evaluate('/html/body/aside/div[1]/ul/li[6]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem9Book2 = document.evaluate('/html/body/aside/div[1]/ul/li[9]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem5Book2 = document.evaluate('/html/body/aside/div[1]/ul/li[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem7Book2 = document.evaluate('/html/body/aside/div[1]/ul/li[7]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listBook5 = document.evaluate('/html/body/aside/div[6]/ul', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem10Book5 = document.evaluate('/html/body/aside/div[6]/ul/li[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem3Book5 = document.evaluate('/html/body/aside/div[6]/ul/li[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem6Book5 = document.evaluate('/html/body/aside/div[6]/ul/li[6]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem9Book5 = document.evaluate('/html/body/aside/div[6]/ul/li[9]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listBook6 = document.evaluate('/html/body/aside/div[3]/ul', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem11Book6 = document.evaluate('/html/body/aside/div[3]/ul/li', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
const listItem10Book6 = document.evaluate('/html/body/aside/div[3]/ul/li[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue; 

books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[2]);
books.insertBefore(book[3], book[2]);
books.insertBefore(book[5], book[2]);

document.body.style.background = 'url(./image/you-dont-know-js.jpg)';

book3Title.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove(adv);

listBook2.insertBefore(listItem9Book2, listItem6Book2);
listBook2.insertBefore(listItem7Book2, listItem5Book2);
listBook2.insertBefore(listItem9Book2, listItem5Book2);

listBook5.insertBefore(listItem10Book5, listItem3Book5);
listBook5.insertBefore(listItem3Book5, listItem6Book5);
listBook5.insertBefore(listItem6Book5, listItem9Book5);

listBook6.appendChild(listItem11Book6);
listItem11Book6.textContent = 'Глава 8: За пределами ES6';
listBook6.insertBefore(listItem11Book6, listItem10Book6);




