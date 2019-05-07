const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
});
client.on('message', message => {
if(message.content === prefix + 'quran' || message.content === prefix + 'قران') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png','http://quran.ksu.edu.sa/ayat/safahat1/201.png','http://quran.ksu.edu.sa/ayat/safahat1/202.png','http://quran.ksu.edu.sa/ayat/safahat1/203.png','http://quran.ksu.edu.sa/ayat/safahat1/204.png','http://quran.ksu.edu.sa/ayat/safahat1/205.png','http://quran.ksu.edu.sa/ayat/safahat1/206.png','http://quran.ksu.edu.sa/ayat/safahat1/207.png','http://quran.ksu.edu.sa/ayat/safahat1/208.png','http://quran.ksu.edu.sa/ayat/safahat1/209.png','http://quran.ksu.edu.sa/ayat/safahat1/210.png','http://quran.ksu.edu.sa/ayat/safahat1/211.png','http://quran.ksu.edu.sa/ayat/safahat1/212.png','http://quran.ksu.edu.sa/ayat/safahat1/213.png','http://quran.ksu.edu.sa/ayat/safahat1/214.png','http://quran.ksu.edu.sa/ayat/safahat1/215.png','http://quran.ksu.edu.sa/ayat/safahat1/216.png','http://quran.ksu.edu.sa/ayat/safahat1/217.png','http://quran.ksu.edu.sa/ayat/safahat1/218.png','http://quran.ksu.edu.sa/ayat/safahat1/219.png','http://quran.ksu.edu.sa/ayat/safahat1/220.png','http://quran.ksu.edu.sa/ayat/safahat1/221.png','http://quran.ksu.edu.sa/ayat/safahat1/222.png','http://quran.ksu.edu.sa/ayat/safahat1/223.png','http://quran.ksu.edu.sa/ayat/safahat1/224.png','http://quran.ksu.edu.sa/ayat/safahat1/225.png','http://quran.ksu.edu.sa/ayat/safahat1/226.png','http://quran.ksu.edu.sa/ayat/safahat1/227.png','http://quran.ksu.edu.sa/ayat/safahat1/228.png','http://quran.ksu.edu.sa/ayat/safahat1/229.png','http://quran.ksu.edu.sa/ayat/safahat1/230.png','http://quran.ksu.edu.sa/ayat/safahat1/231.png','http://quran.ksu.edu.sa/ayat/safahat1/232.png','http://quran.ksu.edu.sa/ayat/safahat1/233.png','http://quran.ksu.edu.sa/ayat/safahat1/234.png','http://quran.ksu.edu.sa/ayat/safahat1/235.png','http://quran.ksu.edu.sa/ayat/safahat1/236.png','http://quran.ksu.edu.sa/ayat/safahat1/237.png','http://quran.ksu.edu.sa/ayat/safahat1/238.png','http://quran.ksu.edu.sa/ayat/safahat1/239.png','http://quran.ksu.edu.sa/ayat/safahat1/240.png','http://quran.ksu.edu.sa/ayat/safahat1/241.png','http://quran.ksu.edu.sa/ayat/safahat1/242.png','http://quran.ksu.edu.sa/ayat/safahat1/243.png','http://quran.ksu.edu.sa/ayat/safahat1/245.png','http://quran.ksu.edu.sa/ayat/safahat1/246.png','http://quran.ksu.edu.sa/ayat/safahat1/247.png','http://quran.ksu.edu.sa/ayat/safahat1/248.png','http://quran.ksu.edu.sa/ayat/safahat1/249.png','http://quran.ksu.edu.sa/ayat/safahat1/250.png','http://quran.ksu.edu.sa/ayat/safahat1/251.png','http://quran.ksu.edu.sa/ayat/safahat1/252.png','http://quran.ksu.edu.sa/ayat/safahat1/253.png','http://quran.ksu.edu.sa/ayat/safahat1/254.png','http://quran.ksu.edu.sa/ayat/safahat1/255.png','http://quran.ksu.edu.sa/ayat/safahat1/256.png','http://quran.ksu.edu.sa/ayat/safahat1/257.png','http://quran.ksu.edu.sa/ayat/safahat1/258.png','http://quran.ksu.edu.sa/ayat/safahat1/259.png','http://quran.ksu.edu.sa/ayat/safahat1/260.png','http://quran.ksu.edu.sa/ayat/safahat1/261.png','http://quran.ksu.edu.sa/ayat/safahat1/262.png','http://quran.ksu.edu.sa/ayat/safahat1/263.png','http://quran.ksu.edu.sa/ayat/safahat1/264.png','http://quran.ksu.edu.sa/ayat/safahat1/265.png','http://quran.ksu.edu.sa/ayat/safahat1/266.png','http://quran.ksu.edu.sa/ayat/safahat1/267.png','http://quran.ksu.edu.sa/ayat/safahat1/268.png','http://quran.ksu.edu.sa/ayat/safahat1/269.png','http://quran.ksu.edu.sa/ayat/safahat1/270.png','http://quran.ksu.edu.sa/ayat/safahat1/271.png','http://quran.ksu.edu.sa/ayat/safahat1/272.png','http://quran.ksu.edu.sa/ayat/safahat1/273.png','http://quran.ksu.edu.sa/ayat/safahat1/274.png','http://quran.ksu.edu.sa/ayat/safahat1/275.png','http://quran.ksu.edu.sa/ayat/safahat1/276.png','http://quran.ksu.edu.sa/ayat/safahat1/277.png','http://quran.ksu.edu.sa/ayat/safahat1/278.png','http://quran.ksu.edu.sa/ayat/safahat1/279.png','http://quran.ksu.edu.sa/ayat/safahat1/280.png','http://quran.ksu.edu.sa/ayat/safahat1/281.png','http://quran.ksu.edu.sa/ayat/safahat1/282.png','http://quran.ksu.edu.sa/ayat/safahat1/283.png','http://quran.ksu.edu.sa/ayat/safahat1/284.png','http://quran.ksu.edu.sa/ayat/safahat1/285.png','http://quran.ksu.edu.sa/ayat/safahat1/286.png','http://quran.ksu.edu.sa/ayat/safahat1/287.png','http://quran.ksu.edu.sa/ayat/safahat1/288.png','http://quran.ksu.edu.sa/ayat/safahat1/289.png','http://quran.ksu.edu.sa/ayat/safahat1/290.png','http://quran.ksu.edu.sa/ayat/safahat1/291.png','http://quran.ksu.edu.sa/ayat/safahat1/292.png','http://quran.ksu.edu.sa/ayat/safahat1/293.png','http://quran.ksu.edu.sa/ayat/safahat1/294.png','http://quran.ksu.edu.sa/ayat/safahat1/295.png','http://quran.ksu.edu.sa/ayat/safahat1/296.png','http://quran.ksu.edu.sa/ayat/safahat1/297.png','http://quran.ksu.edu.sa/ayat/safahat1/298.png','http://quran.ksu.edu.sa/ayat/safahat1/299.png','http://quran.ksu.edu.sa/ayat/safahat1/300.png','http://quran.ksu.edu.sa/ayat/safahat1/301.png','http://quran.ksu.edu.sa/ayat/safahat1/302.png','http://quran.ksu.edu.sa/ayat/safahat1/303.png','http://quran.ksu.edu.sa/ayat/safahat1/304.png','http://quran.ksu.edu.sa/ayat/safahat1/305.png','http://quran.ksu.edu.sa/ayat/safahat1/306.png','http://quran.ksu.edu.sa/ayat/safahat1/307.png','http://quran.ksu.edu.sa/ayat/safahat1/308.png','http://quran.ksu.edu.sa/ayat/safahat1/309.png','http://quran.ksu.edu.sa/ayat/safahat1/310.png','http://quran.ksu.edu.sa/ayat/safahat1/311.png','http://quran.ksu.edu.sa/ayat/safahat1/312.png','http://quran.ksu.edu.sa/ayat/safahat1/313.png','http://quran.ksu.edu.sa/ayat/safahat1/314.png','http://quran.ksu.edu.sa/ayat/safahat1/315.png','http://quran.ksu.edu.sa/ayat/safahat1/316.png','http://quran.ksu.edu.sa/ayat/safahat1/317.png','http://quran.ksu.edu.sa/ayat/safahat1/318.png','http://quran.ksu.edu.sa/ayat/safahat1/319.png','http://quran.ksu.edu.sa/ayat/safahat1/320.png','http://quran.ksu.edu.sa/ayat/safahat1/321.png','http://quran.ksu.edu.sa/ayat/safahat1/322.png','http://quran.ksu.edu.sa/ayat/safahat1/323.png','http://quran.ksu.edu.sa/ayat/safahat1/324.png','http://quran.ksu.edu.sa/ayat/safahat1/325.png','http://quran.ksu.edu.sa/ayat/safahat1/326.png','http://quran.ksu.edu.sa/ayat/safahat1/327.png','http://quran.ksu.edu.sa/ayat/safahat1/328.png','http://quran.ksu.edu.sa/ayat/safahat1/329.png','http://quran.ksu.edu.sa/ayat/safahat1/330.png','http://quran.ksu.edu.sa/ayat/safahat1/331.png','http://quran.ksu.edu.sa/ayat/safahat1/332.png','http://quran.ksu.edu.sa/ayat/safahat1/333.png','http://quran.ksu.edu.sa/ayat/safahat1/334.png','http://quran.ksu.edu.sa/ayat/safahat1/335.png','http://quran.ksu.edu.sa/ayat/safahat1/336.png','http://quran.ksu.edu.sa/ayat/safahat1/337.png','http://quran.ksu.edu.sa/ayat/safahat1/338.png','http://quran.ksu.edu.sa/ayat/safahat1/339.png','http://quran.ksu.edu.sa/ayat/safahat1/340.png','http://quran.ksu.edu.sa/ayat/safahat1/341.png','http://quran.ksu.edu.sa/ayat/safahat1/342.png','http://quran.ksu.edu.sa/ayat/safahat1/343.png','http://quran.ksu.edu.sa/ayat/safahat1/344.png','http://quran.ksu.edu.sa/ayat/safahat1/345.png','http://quran.ksu.edu.sa/ayat/safahat1/346.png','http://quran.ksu.edu.sa/ayat/safahat1/347.png','http://quran.ksu.edu.sa/ayat/safahat1/348.png','http://quran.ksu.edu.sa/ayat/safahat1/349.png','http://quran.ksu.edu.sa/ayat/safahat1/350.png','http://quran.ksu.edu.sa/ayat/safahat1/351.png','http://quran.ksu.edu.sa/ayat/safahat1/352.png','http://quran.ksu.edu.sa/ayat/safahat1/353.png','http://quran.ksu.edu.sa/ayat/safahat1/354.png','http://quran.ksu.edu.sa/ayat/safahat1/355.png','http://quran.ksu.edu.sa/ayat/safahat1/356.png','http://quran.ksu.edu.sa/ayat/safahat1/357.png','http://quran.ksu.edu.sa/ayat/safahat1/358.png','http://quran.ksu.edu.sa/ayat/safahat1/359.png','http://quran.ksu.edu.sa/ayat/safahat1/360.png','http://quran.ksu.edu.sa/ayat/safahat1/361.png','http://quran.ksu.edu.sa/ayat/safahat1/362.png','http://quran.ksu.edu.sa/ayat/safahat1/363.png','http://quran.ksu.edu.sa/ayat/safahat1/364.png','http://quran.ksu.edu.sa/ayat/safahat1/365.png','http://quran.ksu.edu.sa/ayat/safahat1/366.png','http://quran.ksu.edu.sa/ayat/safahat1/367.png','http://quran.ksu.edu.sa/ayat/safahat1/368.png','http://quran.ksu.edu.sa/ayat/safahat1/369.png','http://quran.ksu.edu.sa/ayat/safahat1/370.png','http://quran.ksu.edu.sa/ayat/safahat1/371.png','http://quran.ksu.edu.sa/ayat/safahat1/372.png','http://quran.ksu.edu.sa/ayat/safahat1/373.png','http://quran.ksu.edu.sa/ayat/safahat1/374.png','http://quran.ksu.edu.sa/ayat/safahat1/375.png','http://quran.ksu.edu.sa/ayat/safahat1/376.png','http://quran.ksu.edu.sa/ayat/safahat1/377.png','http://quran.ksu.edu.sa/ayat/safahat1/378.png','http://quran.ksu.edu.sa/ayat/safahat1/379.png','http://quran.ksu.edu.sa/ayat/safahat1/380.png','http://quran.ksu.edu.sa/ayat/safahat1/381.png','http://quran.ksu.edu.sa/ayat/safahat1/382.png','http://quran.ksu.edu.sa/ayat/safahat1/383.png','http://quran.ksu.edu.sa/ayat/safahat1/384.png','http://quran.ksu.edu.sa/ayat/safahat1/385.png','http://quran.ksu.edu.sa/ayat/safahat1/386.png','http://quran.ksu.edu.sa/ayat/safahat1/387.png','http://quran.ksu.edu.sa/ayat/safahat1/388.png','http://quran.ksu.edu.sa/ayat/safahat1/389.png','http://quran.ksu.edu.sa/ayat/safahat1/390.png','http://quran.ksu.edu.sa/ayat/safahat1/391.png','http://quran.ksu.edu.sa/ayat/safahat1/392.png','http://quran.ksu.edu.sa/ayat/safahat1/393.png','http://quran.ksu.edu.sa/ayat/safahat1/394.png','http://quran.ksu.edu.sa/ayat/safahat1/395.png','http://quran.ksu.edu.sa/ayat/safahat1/396.png','http://quran.ksu.edu.sa/ayat/safahat1/397.png','http://quran.ksu.edu.sa/ayat/safahat1/398.png','http://quran.ksu.edu.sa/ayat/safahat1/399.png','http://quran.ksu.edu.sa/ayat/safahat1/400.png','http://quran.ksu.edu.sa/ayat/safahat1/401.png','http://quran.ksu.edu.sa/ayat/safahat1/402.png','http://quran.ksu.edu.sa/ayat/safahat1/403.png','http://quran.ksu.edu.sa/ayat/safahat1/404.png','http://quran.ksu.edu.sa/ayat/safahat1/405.png','http://quran.ksu.edu.sa/ayat/safahat1/406.png','http://quran.ksu.edu.sa/ayat/safahat1/407.png','http://quran.ksu.edu.sa/ayat/safahat1/408.png','http://quran.ksu.edu.sa/ayat/safahat1/409.png','http://quran.ksu.edu.sa/ayat/safahat1/410.png','http://quran.ksu.edu.sa/ayat/safahat1/411.png','http://quran.ksu.edu.sa/ayat/safahat1/412.png','http://quran.ksu.edu.sa/ayat/safahat1/413.png','http://quran.ksu.edu.sa/ayat/safahat1/414.png','http://quran.ksu.edu.sa/ayat/safahat1/415.png','http://quran.ksu.edu.sa/ayat/safahat1/416.png','http://quran.ksu.edu.sa/ayat/safahat1/417.png','http://quran.ksu.edu.sa/ayat/safahat1/418.png','http://quran.ksu.edu.sa/ayat/safahat1/419.png','http://quran.ksu.edu.sa/ayat/safahat1/420.png','http://quran.ksu.edu.sa/ayat/safahat1/421.png','http://quran.ksu.edu.sa/ayat/safahat1/422.png','http://quran.ksu.edu.sa/ayat/safahat1/423.png','http://quran.ksu.edu.sa/ayat/safahat1/424.png','http://quran.ksu.edu.sa/ayat/safahat1/425.png','http://quran.ksu.edu.sa/ayat/safahat1/426.png','http://quran.ksu.edu.sa/ayat/safahat1/427.png','http://quran.ksu.edu.sa/ayat/safahat1/428.png','http://quran.ksu.edu.sa/ayat/safahat1/429.png','http://quran.ksu.edu.sa/ayat/safahat1/430.png','http://quran.ksu.edu.sa/ayat/safahat1/431.png','http://quran.ksu.edu.sa/ayat/safahat1/432.png','http://quran.ksu.edu.sa/ayat/safahat1/433.png','http://quran.ksu.edu.sa/ayat/safahat1/434.png','http://quran.ksu.edu.sa/ayat/safahat1/435.png','http://quran.ksu.edu.sa/ayat/safahat1/436.png','http://quran.ksu.edu.sa/ayat/safahat1/437.png','http://quran.ksu.edu.sa/ayat/safahat1/438.png','http://quran.ksu.edu.sa/ayat/safahat1/439.png','http://quran.ksu.edu.sa/ayat/safahat1/440.png','http://quran.ksu.edu.sa/ayat/safahat1/441.png','http://quran.ksu.edu.sa/ayat/safahat1/442.png','http://quran.ksu.edu.sa/ayat/safahat1/443.png','http://quran.ksu.edu.sa/ayat/safahat1/444.png','http://quran.ksu.edu.sa/ayat/safahat1/445.png','http://quran.ksu.edu.sa/ayat/safahat1/446.png','http://quran.ksu.edu.sa/ayat/safahat1/447.png','http://quran.ksu.edu.sa/ayat/safahat1/448.png','http://quran.ksu.edu.sa/ayat/safahat1/449.png','http://quran.ksu.edu.sa/ayat/safahat1/450.png','http://quran.ksu.edu.sa/ayat/safahat1/451.png','http://quran.ksu.edu.sa/ayat/safahat1/452.png','http://quran.ksu.edu.sa/ayat/safahat1/453.png','http://quran.ksu.edu.sa/ayat/safahat1/454.png','http://quran.ksu.edu.sa/ayat/safahat1/455.png','http://quran.ksu.edu.sa/ayat/safahat1/456.png','http://quran.ksu.edu.sa/ayat/safahat1/457.png','http://quran.ksu.edu.sa/ayat/safahat1/458.png','http://quran.ksu.edu.sa/ayat/safahat1/459.png','http://quran.ksu.edu.sa/ayat/safahat1/460.png','http://quran.ksu.edu.sa/ayat/safahat1/461.png','http://quran.ksu.edu.sa/ayat/safahat1/462.png','http://quran.ksu.edu.sa/ayat/safahat1/463.png','http://quran.ksu.edu.sa/ayat/safahat1/464.png','http://quran.ksu.edu.sa/ayat/safahat1/465.png','http://quran.ksu.edu.sa/ayat/safahat1/466.png','http://quran.ksu.edu.sa/ayat/safahat1/467.png','http://quran.ksu.edu.sa/ayat/safahat1/468.png','http://quran.ksu.edu.sa/ayat/safahat1/469.png','http://quran.ksu.edu.sa/ayat/safahat1/470.png','http://quran.ksu.edu.sa/ayat/safahat1/471.png','http://quran.ksu.edu.sa/ayat/safahat1/472.png','http://quran.ksu.edu.sa/ayat/safahat1/473.png','http://quran.ksu.edu.sa/ayat/safahat1/474.png','http://quran.ksu.edu.sa/ayat/safahat1/475.png','http://quran.ksu.edu.sa/ayat/safahat1/476.png','http://quran.ksu.edu.sa/ayat/safahat1/477.png','http://quran.ksu.edu.sa/ayat/safahat1/478.png','http://quran.ksu.edu.sa/ayat/safahat1/479.png','http://quran.ksu.edu.sa/ayat/safahat1/480.png','http://quran.ksu.edu.sa/ayat/safahat1/481.png','http://quran.ksu.edu.sa/ayat/safahat1/482.png','http://quran.ksu.edu.sa/ayat/safahat1/483.png','http://quran.ksu.edu.sa/ayat/safahat1/484.png','http://quran.ksu.edu.sa/ayat/safahat1/485.png','http://quran.ksu.edu.sa/ayat/safahat1/486.png','http://quran.ksu.edu.sa/ayat/safahat1/487.png','http://quran.ksu.edu.sa/ayat/safahat1/488.png','http://quran.ksu.edu.sa/ayat/safahat1/489.png','http://quran.ksu.edu.sa/ayat/safahat1/490.png','http://quran.ksu.edu.sa/ayat/safahat1/491.png','http://quran.ksu.edu.sa/ayat/safahat1/492.png','http://quran.ksu.edu.sa/ayat/safahat1/493.png','http://quran.ksu.edu.sa/ayat/safahat1/494.png','http://quran.ksu.edu.sa/ayat/safahat1/495.png','http://quran.ksu.edu.sa/ayat/safahat1/496.png','http://quran.ksu.edu.sa/ayat/safahat1/497.png','http://quran.ksu.edu.sa/ayat/safahat1/498.png','http://quran.ksu.edu.sa/ayat/safahat1/499.png','','','','','','','','','','','','http://quran.ksu.edu.sa/ayat/safahat1/500.png','http://quran.ksu.edu.sa/ayat/safahat1/501.png','http://quran.ksu.edu.sa/ayat/safahat1/502.png','http://quran.ksu.edu.sa/ayat/safahat1/503.png','http://quran.ksu.edu.sa/ayat/safahat1/504.png','http://quran.ksu.edu.sa/ayat/safahat1/505.png','http://quran.ksu.edu.sa/ayat/safahat1/506.png','http://quran.ksu.edu.sa/ayat/safahat1/507.png','http://quran.ksu.edu.sa/ayat/safahat1/508.png','http://quran.ksu.edu.sa/ayat/safahat1/509.png','http://quran.ksu.edu.sa/ayat/safahat1/510.png','http://quran.ksu.edu.sa/ayat/safahat1/511.png','http://quran.ksu.edu.sa/ayat/safahat1/512.png','http://quran.ksu.edu.sa/ayat/safahat1/513.png','http://quran.ksu.edu.sa/ayat/safahat1/514.png','http://quran.ksu.edu.sa/ayat/safahat1/515.png','http://quran.ksu.edu.sa/ayat/safahat1/516.png','http://quran.ksu.edu.sa/ayat/safahat1/517.png','http://quran.ksu.edu.sa/ayat/safahat1/518.png','http://quran.ksu.edu.sa/ayat/safahat1/519.png','http://quran.ksu.edu.sa/ayat/safahat1/520.png','http://quran.ksu.edu.sa/ayat/safahat1/521.png','http://quran.ksu.edu.sa/ayat/safahat1/522.png','http://quran.ksu.edu.sa/ayat/safahat1/523.png','http://quran.ksu.edu.sa/ayat/safahat1/524.png','http://quran.ksu.edu.sa/ayat/safahat1/525.png','http://quran.ksu.edu.sa/ayat/safahat1/526.png','http://quran.ksu.edu.sa/ayat/safahat1/527.png','http://quran.ksu.edu.sa/ayat/safahat1/528.png','http://quran.ksu.edu.sa/ayat/safahat1/529.png','http://quran.ksu.edu.sa/ayat/safahat1/530.png','http://quran.ksu.edu.sa/ayat/safahat1/531.png','http://quran.ksu.edu.sa/ayat/safahat1/532.png','http://quran.ksu.edu.sa/ayat/safahat1/533.png','http://quran.ksu.edu.sa/ayat/safahat1/534.png','http://quran.ksu.edu.sa/ayat/safahat1/535.png','http://quran.ksu.edu.sa/ayat/safahat1/536.png','http://quran.ksu.edu.sa/ayat/safahat1/537.png','http://quran.ksu.edu.sa/ayat/safahat1/538.png','http://quran.ksu.edu.sa/ayat/safahat1/539.png','http://quran.ksu.edu.sa/ayat/safahat1/540.png','http://quran.ksu.edu.sa/ayat/safahat1/541.png','http://quran.ksu.edu.sa/ayat/safahat1/542.png','http://quran.ksu.edu.sa/ayat/safahat1/543.png','http://quran.ksu.edu.sa/ayat/safahat1/544.png','http://quran.ksu.edu.sa/ayat/safahat1/545.png','http://quran.ksu.edu.sa/ayat/safahat1/546.png','http://quran.ksu.edu.sa/ayat/safahat1/547.png','http://quran.ksu.edu.sa/ayat/safahat1/548.png','http://quran.ksu.edu.sa/ayat/safahat1/549.png','http://quran.ksu.edu.sa/ayat/safahat1/550.png','http://quran.ksu.edu.sa/ayat/safahat1/551.png','http://quran.ksu.edu.sa/ayat/safahat1/552.png','http://quran.ksu.edu.sa/ayat/safahat1/553.png','http://quran.ksu.edu.sa/ayat/safahat1/554.png','http://quran.ksu.edu.sa/ayat/safahat1/555.png','http://quran.ksu.edu.sa/ayat/safahat1/556.png','http://quran.ksu.edu.sa/ayat/safahat1/557.png','http://quran.ksu.edu.sa/ayat/safahat1/558.png','http://quran.ksu.edu.sa/ayat/safahat1/559.png','http://quran.ksu.edu.sa/ayat/safahat1/560.png','http://quran.ksu.edu.sa/ayat/safahat1/561.png','http://quran.ksu.edu.sa/ayat/safahat1/562.png','http://quran.ksu.edu.sa/ayat/safahat1/563.png','http://quran.ksu.edu.sa/ayat/safahat1/564.png','http://quran.ksu.edu.sa/ayat/safahat1/565.png','http://quran.ksu.edu.sa/ayat/safahat1/566.png','http://quran.ksu.edu.sa/ayat/safahat1/567.png','http://quran.ksu.edu.sa/ayat/safahat1/568.png','http://quran.ksu.edu.sa/ayat/safahat1/569.png','http://quran.ksu.edu.sa/ayat/safahat1/570.png','http://quran.ksu.edu.sa/ayat/safahat1/571.png','http://quran.ksu.edu.sa/ayat/safahat1/572.png','http://quran.ksu.edu.sa/ayat/safahat1/573.png','http://quran.ksu.edu.sa/ayat/safahat1/574.png','http://quran.ksu.edu.sa/ayat/safahat1/575.png','http://quran.ksu.edu.sa/ayat/safahat1/576.png','http://quran.ksu.edu.sa/ayat/safahat1/577.png','http://quran.ksu.edu.sa/ayat/safahat1/578.png','http://quran.ksu.edu.sa/ayat/safahat1/579.png','http://quran.ksu.edu.sa/ayat/safahat1/580.png','http://quran.ksu.edu.sa/ayat/safahat1/581.png','http://quran.ksu.edu.sa/ayat/safahat1/582.png','http://quran.ksu.edu.sa/ayat/safahat1/583.png','http://quran.ksu.edu.sa/ayat/safahat1/584.png','http://quran.ksu.edu.sa/ayat/safahat1/585.png','http://quran.ksu.edu.sa/ayat/safahat1/586.png','http://quran.ksu.edu.sa/ayat/safahat1/587.png','http://quran.ksu.edu.sa/ayat/safahat1/588.png','http://quran.ksu.edu.sa/ayat/safahat1/589.png','http://quran.ksu.edu.sa/ayat/safahat1/590.png','http://quran.ksu.edu.sa/ayat/safahat1/591.png','http://quran.ksu.edu.sa/ayat/safahat1/592.png','http://quran.ksu.edu.sa/ayat/safahat1/593.png','http://quran.ksu.edu.sa/ayat/safahat1/594.png','http://quran.ksu.edu.sa/ayat/safahat1/595.png','http://quran.ksu.edu.sa/ayat/safahat1/596.png','http://quran.ksu.edu.sa/ayat/safahat1/597.png','http://quran.ksu.edu.sa/ayat/safahat1/598.png','http://quran.ksu.edu.sa/ayat/safahat1/599.png','http://quran.ksu.edu.sa/ayat/safahat1/600.png','http://quran.ksu.edu.sa/ayat/safahat1/601.png','http://quran.ksu.edu.sa/ayat/safahat1/602.png','http://quran.ksu.edu.sa/ayat/safahat1/603.png','http://quran.ksu.edu.sa/ayat/safahat1/604.png']
	let page = 1;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
	.setColor('#000001')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://4.top4top.net/p_1222cful31.png')
	.setImage(pages[page-1])
	
	message.channel.sendEmbed(embed).then(msg => {
		
		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))
			
			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
			
			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
			
			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
			
			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
			
			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
			
			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
			
			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://4.top4top.net/p_1222cful31.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://4.top4top.net/p_1222cful31.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://4.top4top.net/p_1222cful31.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 604; //عدد الصفحات
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://4.top4top.net/p_1222cful31.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://4.top4top.net/p_1222cful31.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});

client.login("Token Here");
