import {writeFile,mkdir} from 'node:fs/promises';
import {BOOKS} from './data.js';
import {deflateSync} from 'node:zlib';
await mkdir(new URL('./assets/',import.meta.url),{recursive:true});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const art={
 arch:'<path d="M80 285V200a60 60 0 0 1 120 0v85M100 285v-85a40 40 0 0 1 80 0v85M120 285v-85a20 20 0 0 1 40 0v85"/><circle cx="140" cy="220" r="8"/><path d="M50 285h180M65 298h150M80 311h120"/>',
 planet:'<circle cx="140" cy="228" r="43"/><ellipse cx="140" cy="228" rx="88" ry="17" transform="rotate(-25 140 228)"/><path d="M85 166v12m-6-6h12M207 267v12m-6-6h12M197 164v10m-5-5h10M67 267v8m-4-4h8"/>',
 key:'<circle cx="140" cy="194" r="35"/><circle cx="140" cy="194" r="21"/><path d="M140 229v83m0-15h30v-14h-30m0-12h22M80 162l-5-14m125 14 5-14M65 225l-15 5m165-5 15 5"/>',
 chess:'<path d="M110 174h60l-9 20 12 30-17 13 13 55H111l13-55-17-13 12-30zM100 300h80v14h-80zM120 157v-16m40 16v-16m-20 16v-22"/><path d="M57 330h166M70 340h140"/>',
 flower:'<path d="M140 305V211m0 60c-40 0-55-20-52-36 26 0 43 13 52 36m0-12c38-4 54-24 50-40-26 3-42 19-50 40"/><path d="M140 211c-56 7-65-37-40-45-5-34 38-37 40-11 10-28 50-20 43 8 28 10 14 55-43 48z"/><circle cx="140" cy="185" r="9"/>',
 window:'<path d="M77 308V201a63 63 0 0 1 126 0v107zM140 138v170M77 218h126M77 271h126"/><path d="M60 319h160M52 329h176"/><circle cx="171" cy="179" r="13"/>',
 mountain:'<circle cx="140" cy="220" r="83"/><path d="M63 251l45-74 33 53 22-35 54 71M88 210l20 8 12-18m32 14 12 11 11-13M68 271h144M80 285h120M110 299h60"/>',
 stairs:'<ellipse cx="140" cy="165" rx="68" ry="25"/><path d="M72 165v117c0 34 136 34 136 0V165M140 190v115M140 204h45m-45 18h55m-55 18h60m-60 18h55m-55 18h45M140 199H99m41 18H85m55 18H80m60 18H86m54 18h-42"/>',
 ring:'<ellipse cx="140" cy="230" rx="88" ry="47" transform="rotate(-35 140 230)"/><ellipse cx="140" cy="230" rx="73" ry="33" transform="rotate(-35 140 230)"/><circle cx="140" cy="230" r="15"/><path d="M72 160l8 8m122 115 8 8M198 167v14m-7-7h14M68 285v12m-6-6h12"/>',
 orbit:'<circle cx="140" cy="225" r="63"/><ellipse cx="140" cy="225" rx="93" ry="27" transform="rotate(35 140 225)"/><ellipse cx="140" cy="225" rx="93" ry="27" transform="rotate(-35 140 225)"/><circle cx="140" cy="225" r="12"/>',
 eye:'<path d="M52 228q88-110 176 0-88 110-176 0z"/><ellipse cx="140" cy="228" rx="25" ry="46"/><path d="M140 184v88M75 194l-12-21m142 21 12-21M98 172l-6-20m90 20 6-20"/>'
};
for(const b of BOOKS.filter(b=>b.art&&b.color)){
 let lines=[],line='';for(const word of b.title.split(' ')){if((line+' '+word).length>22&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="280" height="400" viewBox="0 0 280 400"><rect width="280" height="400" fill="${b.color}"/><path d="M8 0v400" stroke="#000" opacity=".2" stroke-width="6"/><rect x="20" y="18" width="242" height="364" fill="none" stroke="${b.accent}" opacity=".5"/><rect x="25" y="23" width="232" height="354" fill="none" stroke="${b.accent}" opacity=".22"/><g fill="${b.accent}" text-anchor="middle"><text x="140" y="52" font-family="Georgia,serif" font-size="11" letter-spacing="1">${escape(b.author.split(',')[0])}</text>${lines.map((l,i)=>`<text x="140" y="${86+i*24}" font-family="Georgia,serif" font-size="21">${escape(l)}</text>`).join('')}</g><g fill="none" stroke="${b.accent}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${art[b.art]}</g><text x="140" y="354" text-anchor="middle" font-family="Georgia,serif" font-size="9" letter-spacing="3" fill="${b.accent}">П Е Р Е П Л Ё Т</text></svg>`;
 await writeFile(new URL(`./assets/${b.id}.svg`,import.meta.url),svg);
}
await writeFile(new URL('./assets/icon.svg',import.meta.url),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#355647"/><path d="M48 40h96v112H48z" fill="none" stroke="#e8c68d" stroke-width="6"/><path d="M61 40v112" stroke="#e8c68d" stroke-width="4"/><text x="100" y="124" text-anchor="middle" font-family="Georgia,serif" font-size="95" fill="#e8c68d">п</text></svg>');
// Небольшие растровые значки PWA: геометрический переплёт, без внешних библиотек.
function crc32(bytes){let c=0xffffffff;for(const b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0);}return (c^0xffffffff)>>>0;}
function chunk(type,data){const name=Buffer.from(type),len=Buffer.alloc(4),crc=Buffer.alloc(4);len.writeUInt32BE(data.length);crc.writeUInt32BE(crc32(Buffer.concat([name,data])));return Buffer.concat([len,name,data,crc]);}
for(const size of [192,512]){
 const pixels=Buffer.alloc((size*3+1)*size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const u=x/size,v=y/size,book=u>.25&&u<.75&&v>.2&&v<.8;
   const line=book&&(u<.28||u>.72||v<.23||v>.77||Math.abs(u-.34)<.012||((Math.abs(u-.45)<.013||Math.abs(u-.64)<.013)&&v>.4&&v<.66)||(v>.39&&v<.42&&u>.45&&u<.65));
   const color=line?[232,198,141]:[53,86,71],offset=y*(size*3+1)+1+x*3;for(let c=0;c<3;c++)pixels[offset+c]=color[c];
 }
 const header=Buffer.alloc(13);header.writeUInt32BE(size,0);header.writeUInt32BE(size,4);header[8]=8;header[9]=2;
 await writeFile(new URL(`./assets/icon-${size}.png`,import.meta.url),Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',header),chunk('IDAT',deflateSync(pixels)),chunk('IEND',Buffer.alloc(0))]));
}
console.log(`${BOOKS.length} обложек созданы.`);
