import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.zip':'application/zip'};
http.createServer(async(req,res)=>{try{let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(name.endsWith('/'))name+='index.html';const file=path.resolve(root,'.'+name);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}const ext=path.extname(file);if(!mime[ext]){res.writeHead(404);res.end();return}const content=await fs.readFile(file);res.writeHead(200,{'Content-Type':mime[ext]});res.end(content)}catch{res.writeHead(404);res.end('Not found')}}).listen(4174,'127.0.0.1',()=>console.log('Portfolio: http://localhost:4174'));
